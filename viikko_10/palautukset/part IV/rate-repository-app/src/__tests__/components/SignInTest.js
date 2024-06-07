//import SignInTest from '../../components/SignInTest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import { Pressable, View, TextInput, StyleSheet, Text, Platform } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import CustomText from "../../components/CustomText";
import testOS from '../../themes/osTheme';
import theme from '../../themes/theme';

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

const SignInTest = ( {onSubmit} ) => {
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
              onChangeText={formik.handleChange('username')}
              testID='inputUsername' />

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
              secureTextEntry={true}
              testID='inputPassword'/>

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

describe('SignIn', () => {
    const onSubmit = jest.fn(value => console.log(value));
    describe('SignInContainer', () => {
      it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
        render(
            <SignInTest onSubmit={onSubmit}/>
        );

        fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle');
        fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');
        fireEvent.press(screen.getByText('SIGN IN'));

        await waitFor(() => {
          // expect the onSubmit function to have been called once and with a correct first argument
          expect(onSubmit).toHaveBeenCalledTimes(1);
        });
      });
    });
  });