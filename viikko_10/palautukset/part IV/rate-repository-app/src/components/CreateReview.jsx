import CustomText from "./CustomText";
import { View, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';
import formTheme from "../themes/formTheme";
import createNewReview from "../data/createNewReview";

/**
 * arvostelun alkuarvot.
 */
const initialValues = {
    owner: '',
    name: '',
    rating: '',
    review: '',
};

/**
 * Funktio validoi arvostelun käyttäsyötteet.
 */
const validationSchema = yup.object().shape({
    owner: yup
        .string()
        .min(3, 'Owner has to have atleast 3 characters!')
        .required('Owner is required'),
    name: yup
        .string()
        .min(3, 'Repository name has to be atleast 3 characters long.')
        .required('Repository name is required'),
    rating: yup
        .number()
        .min(0)
        .max(100)
        .required('Rating is required'),
});

/**
 * 
 * Funktio tarkistaaa että arvot eivät ole tyhjät.
 * 
 * @param {Object} values - olio sisältää käyttäjän, nimen ja arvosanan.
 * @returns 
 */
const tarkistaArvot = ({ values }) => {
    if(values.owner === null && values.owner === undefined) 
    {
        return false;
    }
    if(values.name === null && values.name === undefined) 
    {
        return false;
    }
    if(values.rating === null && values.rating === undefined) 
    {
        return false;
    }
    return true;
};

/**
 * 
 * Funktio palauttaa arvostelulomakkeen ja lisää uuden käyttäjäarvostelun, kun se on läpäissyt kaikki tarkistukset.
 * 
 * @returns Arvostelulomake.
 */
const CreateReview = () => {
    const [_createNewReview] = createNewReview();
    const navigate = useNavigate();

    const [guide, setGuide] = useState(null);

    const onSubmit = async (values) => {
        if(tarkistaArvot({ values }))
        {
            try
            {
                const { owner, name, rating, review } = values;
                const { data, error } = await _createNewReview({ owner, name, rating, review });
                if(error) 
                {
                    console.log(error);
                }
                if(data.createReview.id)
                {
                    navigate("/repositories");
                }
            }
            catch(error)
            {
                console.log('ERROR: ', error);
                console.log('Error in adding a new review. Make sure all required fields are filled before trying to add new.');
                if(error.message === 'User has already reviewed this repository') 
                {
                    setGuide('You have already reviewed this repository!');
                }
                else {
                    setGuide(null);
                }
            }

        }
    };

    return (
        <CreateForm onSubmit={onSubmit} guide={guide}/>
    );
};

/**
 * 
 * Funktio luo ja palauttaa arvostelulomakkeen.
 * 
 * @param {Function} onSubmit   - funktio jolla lisäys tehdän.
 * @param {String} quide        - merkkijono jolla ilmoitetaan virheistä.
 * @returns                     - arvostelulomake.
 */
const CreateForm = ({ onSubmit, guide }) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <View style={formTheme.formBackGround}>
            <TextInput
                style={[formTheme.inputTexts, formik.touched.username && formik.errors.username ? formTheme.inputTextsError : formTheme.inputTexts]} 
                placeholder=' Repository owner name' 
                value={formik.values.owner} 
                onChangeText={formik.handleChange('owner')}
                testID='inputOwner'
                autoCapitalize='none' />

            {formik.touched.owner && formik.errors.owner && (
                <CustomText style={formTheme.errorText}>
                    {formik.errors.owner}
                </CustomText>
            )}

            <TextInput
                style={[formTheme.inputTexts, formik.touched.username && formik.errors.username ? formTheme.inputTextsError : formTheme.inputTexts]} 
                placeholder=' Repository name' 
                value={formik.values.name} 
                onChangeText={formik.handleChange('name')}
                testID='inputName'
                autoCapitalize='none' />

            {formik.touched.name && formik.errors.name && (
                <CustomText style={formTheme.errorText}>
                    {formik.errors.name}
                </CustomText>
            )}

            <TextInput
                style={[formTheme.inputTexts, formik.touched.username && formik.errors.username ? formTheme.inputTextsError : formTheme.inputTexts]} 
                placeholder=' Rating between 0 and 100' 
                value={formik.values.rating} 
                onChangeText={formik.handleChange('rating')}
                testID='inputRating' />

            {formik.touched.rating && formik.errors.rating && (
                <CustomText style={formTheme.errorText}>
                    {formik.errors.rating}
                </CustomText>
            )}

            <TextInput
                style={[formTheme.inputTexts, formik.touched.username && formik.errors.username ? formTheme.inputTextsError : formTheme.inputTexts]} 
                placeholder=' Review' 
                value={formik.values.review} 
                onChangeText={formik.handleChange('review')}
                testID='inputReview' />

            {formik.touched.review && formik.errors.review && (
                <CustomText style={formTheme.errorText}>
                    {formik.errors.review}
                </CustomText>
            )}

            <Pressable style={formTheme.pressableStyle} onPress={formik.handleSubmit}>
                <View>
                    <CustomText fontWeight={'bold'} style={formTheme.pressableTextStyle}>
                        CREATE REVIEW
                    </CustomText>
                </View>
            </Pressable>

            <CustomText color='textSecondary'>
                {guide}
            </CustomText>

        </View>
    );
};

export default CreateReview;