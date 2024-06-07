import { Pressable, View, TextInput, StyleSheet, Text, Platform } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import CustomText from "./CustomText";
import testOS from '../themes/osTheme';
import theme from '../themes/theme';
import useSignIn from '../services/useSignIn';
import { useNavigate } from 'react-router-native';
import useAuthStorage from '../util/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const signInStyles = StyleSheet.create({
    mainBackGround: {
        backgroundColor:    'white',
    },
    inputTexts: {
      color:                'black',
      fontWeight:           'bold',
      borderWidth:          1,
      height:               50, 
      marginTop:            10,
      marginLeft:           10,
      marginRight:          10,
      textAlignVertical:    'top',
      paddingHorizontal:    10,
    },
    inputTextsError: {
        color:                'black',
        fontWeight:           'bold',
        borderWidth:          1,
        borderColor:          'red',
        height:               50, 
        marginTop:            10,
        marginLeft:           10,
        marginRight:          10,
        textAlignVertical:    'top',
        paddingHorizontal:    10,
      },
    pressableStyle: {
        paddingVertical:    8,
        paddingHorizontal:  8,
        borderRadius:       4,
        elevation:          0,
        backgroundColor:    'blue',
        alignItems:         'center',
        justifyContent:     'center',
        height:             50,
        marginTop:          10,
        marginLeft:         10,
        marginRight:        10,
    }, 
    pressableTextStyle: {
        lineHeight:         15,
        letterSpacing:      0.25,
        color:              'white',
        alignSelf:          'stretch',
    },
    errorText: {
        color:              'red',
        marginLeft:         10,
    },
});

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(3, 'Username has to be atleast three characters long!')
        .max(12, 'Username cannot be longer than 12 characters!')
        .required('Username is required to sign in!'),
    password: yup
        .string()
        .min(3, 'Password has to be atleast three characters long!')
        .required('Password is required to sign in!'),
});

const initialValues = {
    username: '',
    password: '',
};

const SignIn = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const [_signIn] = useSignIn();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        if(values.username !== null || values.username !== undefined || values.password !== null || values.password !== undefined)
        {
            try
            {
                console.log('SignIn - try');
                const { username, password } = values;
                const { data, error } = await _signIn({ username, password });
                console.log(data);
                console.log(error);
                if(error) 
                {
                    console.log(error);
                }
                if(data.authenticate.accessToken)
                {
                    console.log("Asetetaan token");
                    console.log(authStorage);
                    authStorage.setAccessToken(data.authenticate.accessToken);
                    apolloClient.resetStore();
                    navigate("/repositories");
                }
            }
            catch(error)
            {
                console.log(error);
            }

        }
    }
    return <SignInForm onSubmit={onSubmit}/>;
};

const SignInForm = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <View style={signInStyles.mainBackGround}>
            <TextInput
                style={[signInStyles.inputTexts, formik.touched.username && formik.errors.username ? signInStyles.inputTextsError : signInStyles.inputTexts]} 
                placeholder=' Username' 
                value={formik.values.username} 
                onChangeText={formik.handleChange('username')} />

            {formik.touched.username && formik.errors.username && (
                <CustomText style={signInStyles.errorText}>
                    {formik.errors.username}
                </CustomText>
            )}
            <TextInput
                style={[signInStyles.inputTexts, formik.touched.password && formik.errors.password ? signInStyles.inputTextsError : signInStyles.inputTexts]} 
                placeholder=' Password' 
                value={formik.values.password} 
                onChangeText={formik.handleChange('password')} 
                secureTextEntry={true}/>

            {formik.touched.password && formik.errors.password && (
                <CustomText style={signInStyles.errorText}>
                    {formik.errors.password}
                </CustomText>
            )}
            <Pressable style={signInStyles.pressableStyle} onPress={formik.handleSubmit}>
                <Pressable  >
                        <CustomText fontWeight={'bold'} style={signInStyles.pressableTextStyle}>
                            SIGN IN
                        </CustomText>
                    </Pressable>
            </Pressable>

            <Text style={testOS.byOS}>Test that font is chanching per instructions! {Platform.OS}</Text>

            <Text style={theme.testOS2}>Test that font is chanching per instructions! {Platform.OS}</Text>
        </View>
    );
};

export default SignIn;
