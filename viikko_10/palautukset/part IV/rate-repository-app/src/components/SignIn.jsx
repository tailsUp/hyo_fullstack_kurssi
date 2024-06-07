import { Pressable, View, TextInput } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import CustomText from "./CustomText";
import useSignIn from '../data/useSignIn';
import { useNavigate } from 'react-router-native';
import useAuthStorage from '../util/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import signInTheme from '../themes/signInTheme';

/**
 * Funktio validoi sisäänkirjautumisen käyttäjäsyötteet.
 */
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

/**
 * Lähtöarvot sivun latauksella.
 */
const initialValues = {
    username: '',
    password: '',
};

/**
 * 
 * Funktio alustaa sisäänkirjautumis näkymän muuttujat ja palauttaa sisäänkirjautumis-
 * lomakkeen.
 * 
 * @returns sisäänkirjautumislomake.
 */
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
                const { username, password } = values;
                const { data, error } = await _signIn({ username, password });
                if(error) 
                {
                    console.log('SignIn error: ', error);
                }
                if(data.authenticate.accessToken)
                {
                    authStorage.setAccessToken(data.authenticate.accessToken);
                    apolloClient.resetStore();
                    navigate("/repositories");
                }
            }
            catch(error)
            {
                console.log('SignIn error (onSubmit): ', error);
            }

        }
    }
    return <SignInForm onSubmit={onSubmit}/>;
};

/**
 * 
 * Funktio palauttaa sisäänkirjautumislomakkeen. Lomakkeen luomiseen käytetään formik-toiminnalisuutta.
 * 
 * @param {Function} onSubmit - Funktio joka hoitaa sisäänkirjautumisen logiikan. 
 * @returns 
 */
const SignInForm = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <View style={signInTheme.mainBackGround}>
            <TextInput
                style={[signInTheme.inputTexts, formik.touched.username && formik.errors.username ? signInTheme.inputTextsError : signInTheme.inputTexts]} 
                placeholder=' Username' 
                value={formik.values.username} 
                onChangeText={formik.handleChange('username')}
                testID='inputUsername'
                autoCapitalize='none' />

            {formik.touched.username && formik.errors.username && (
                <CustomText style={signInTheme.errorText}>
                    {formik.errors.username}
                </CustomText>
            )}
            <TextInput
                style={[signInTheme.inputTexts, formik.touched.password && formik.errors.password ? signInTheme.inputTextsError : signInTheme.inputTexts]} 
                placeholder=' Password' 
                value={formik.values.password} 
                onChangeText={formik.handleChange('password')} 
                secureTextEntry={true}
                testID='inputPassword'
                autoCapitalize='none' />

            {formik.touched.password && formik.errors.password && (
                <CustomText style={signInTheme.errorText}>
                    {formik.errors.password}
                </CustomText>
            )}
            <Pressable style={signInTheme.pressableStyle} onPress={formik.handleSubmit}>
                <View>
                    <CustomText fontWeight={'bold'} style={signInTheme.pressableTextStyle}>
                        SIGN IN
                    </CustomText>
                </View>
            </Pressable>
        </View>
    );
};

export default SignIn;
