import { Pressable, View, TextInput } from 'react-native';
import * as yup from 'yup';
import { useFormik } from 'formik';
import createNewUser    from '../data/createNewUser';
import useSignIn        from '../data/useSignIn';
import signUpTheme      from '../themes/signUpTheme';
import CustomText from "./CustomText";
import { useNavigate } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../util/useAuthStorage';

/**
 * Käytetään kirjautumisen validointiin.
 */
const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(5, 'Username has to be between 5 - 30 characters!')
        .max(30, 'Username has to be between 5 - 30 characters!')
        .required('Username is required to sign up!'),
    password1: yup
        .string()
        .min(5, 'Password has to be between 5 - 50 characters!')
        .max(30, 'Password has to be between 5 - 50 characters!')
        .required('Password is required to sign up!'),
    password2: yup
        .string()
        .min(5, 'Password has to be between 5 - 50 characters!')
        .max(30, 'Password has to be between 5 - 50 characters!')
        .required('Password Confirmation is required to sign up!')
        .oneOf([yup.ref('password1')], 'Your password confimartion does not match given password.'),
});

/**
 * Alku-arvot siäänkirjautumiselle.
 */
const initialValues = {
    username: '',
    password1: '',
    password2: '',
};

/**
 * Tarkistaa onko salasant samat.
 * @param {String} password1
 * @param {String} password2
 * @returns 
 */
const passwordsMatch = ({ password1, password2 }) => {
    if(password1 === password2) 
    {
        return true;
    }
    return false;
};

/**
 * 
 * Tutkitaan ensin useAuthStorage avulla onko käyttäjän kirjautumisteidot laitteessa. Jos KYLLÄ niin kirjataan suoraan sisälle.
 * Jos ei niin annetaan sisäänkirjautumis versio. UseAplloCLient käytetään sisäänkirjautumisessa apuna. Tämän lisäksi
 * käytössä uuden käyttäjän luominen ja ohjelmassa navigointi.
 * 
 *  Lomakkeen luomiseen käytetään formik-toiminnalisuutta.
 * 
 * @returns Sisään kirjautumislomakkeen.
 */
const SignUp = () => {

    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const [_createNewUser] = createNewUser();
    const [_signIn] = useSignIn();
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        const { username, password1, password2 } = values;
        try
        {
            if(passwordsMatch({ password1, password2 })) 
            {
                const password = password1;
                const { data, error } = await _createNewUser({ username, password });

                if(data.createUser.username)
                {
                    if(signIn({ _signIn, username, password, authStorage, apolloClient })) 
                    {
                        navigate("/repositories");
                    }
                }
                if(error) 
                {
                    console.log('Ongelma käyttjäkutsun palautuksessa: ', error);
                }
            }
        } catch(error)
        {
            console.log('Error käyttäjän luomisessa (onSubmit): ', error);
        }
    };

    return <SignUpForm onSubmit={onSubmit} />
};

/**
 * 
 * Funktio tutkii onko käyttäjän tunnukset oikeat ja voiko kirjata sisään vai ei.
 * 
 * @param {Function} _signIn        - sisäänkirjautumisfunktio joka tekee kutsun serverille.
 * @param {String} username         - käyttäjätunnus.
 * @param {String} password         - salasana.
 * @param {Function} authStorage    - funktio jota käytetään sisäänkirjautumisen tallentamiseen laitteeseen.
 * @param {Function} apolloClient   - käytetään yhteydessä edellisen funktion kanssa.
 * 
 * @returns true / false.
 */
const signIn = async ({ _signIn, username, password, authStorage, apolloClient }) => {
    try
    {
        const { data, error } = await _signIn({ username, password });

        if(data.authenticate.accessToken)
        {
            authStorage.setAccessToken(data.authenticate.accessToken);
            apolloClient.resetStore();
            return true;
        }
        if(error) 
        {
            console.log('SignUp error: ', error);
        }
        return false;
    }
    catch(error)
    {
        return false;
    }
};

/**
 * 
 * FUnktio palauttaa uuden käyttäjänluomislomakkeen.
 * 
 * @param {Function*} onSubmit - sisäänkirjautumis funktio.
 * @returns lomake.
 */
const SignUpForm = ({ onSubmit }) => {

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <View style={signUpTheme.mainBackGround}>
            <TextInput
                style={[signUpTheme.inputTexts, formik.touched.username && formik.errors.username ? signUpTheme.inputTextsError : signUpTheme.inputTexts]} 
                placeholder=' Username' 
                value={formik.values.username} 
                onChangeText={formik.handleChange('username')}
                testID='inputNewUsername' />

            {formik.touched.username && formik.errors.username && (
                <CustomText style={signUpTheme.errorText}>
                    {formik.errors.username}
                </CustomText>
            )}

            <TextInput
                style={[signUpTheme.inputTexts, formik.touched.password1 && formik.errors.password1 ? signUpTheme.inputTextsError : signUpTheme.inputTexts]} 
                placeholder=' Password' 
                value={formik.values.password1} 
                onChangeText={formik.handleChange('password1')}
                testID='inputNewPassword'
                autoCapitalize='none' />

            {formik.touched.password1 && formik.errors.password1 && (
                <CustomText style={signUpTheme.errorText}>
                    {formik.errors.password1}
                </CustomText>
            )}

            <TextInput
                style={[signUpTheme.inputTexts, formik.touched.password2 && formik.errors.password2 ? signUpTheme.inputTextsError : signUpTheme.inputTexts]} 
                placeholder=' Password Confirmation' 
                value={formik.values.password2} 
                onChangeText={formik.handleChange('password2')}
                testID='inputNewPassword'
                autoCapitalize='none' />

            {formik.touched.password2 && formik.errors.password2 && (
                <CustomText style={signUpTheme.errorText}>
                    {formik.errors.password2}
                </CustomText>
            )}

            <Pressable style={signUpTheme.pressableStyle} onPress={formik.handleSubmit}>
                <Pressable  >
                        <CustomText fontWeight={'bold'} style={signUpTheme.pressableTextStyle}>
                            SIGN UP
                        </CustomText>
                    </Pressable>
            </Pressable>

        </View>
    );
};

export default SignUp;