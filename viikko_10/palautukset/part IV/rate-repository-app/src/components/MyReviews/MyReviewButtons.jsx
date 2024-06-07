import { View, Pressable, Alert } from 'react-native';
import CustomText from '../CustomText';
import deleteReview from '../../data/deleteReview';
import themeMyReviewsButtons from './themes/themeMyReviewButtons';

/*const itemStyles = StyleSheet.create({
    pressableStyle: {
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 4,
        elevation: 0,
        backgroundColor: 'blue',
    },
    pressableStyle2: {
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 4,
        elevation: 0,
        backgroundColor: 'red',
    },
    pressableTextStyle: {
        lineHeight: 15,
        letterSpacing: 0.25,
        color: 'white',
        alignSelf: 'stretch',
        textAlign: 'center',
    },
    buttonDiv: {
        paddingBottom: 10,
        paddingTop: 10,
        flexDirection: 'row',
    },
    buttonGreen: {
        paddingLeft: '5%',
        width: '50%%',
   }, buttonRed: {
        paddingLeft: '5%',
        width: '50%',
        paddingRight: '5%',
    },
    temp: {
        paddingTop: 5,
    },
});*/

const MyReviewButtons = ({ itemID, setSingle, setID, reviewId }) => {

    const [_deleteReview] = deleteReview();

    const goToRepo = () => {
        setSingle(true);
        setID(itemID);
    };

    const deleteRepo = ({ reviewId, _deleteReview }) => {
        try
        {
            Alert.alert('DELETE', 'Are you sure you want to delete this review?', [
                {
                  text: 'CANCEL',
                  onPress: () => console.log('CANCEL'),
                  style: 'cancel',
                },
                {text: 'DELETE', onPress: () => {
                        _deleteReview({ reviewId });
                    }
                },
            ]);
        }
        catch (error)
        {
            console.log('error in deleteRepo function:', error);
        }

    };

    return (
        <View style={themeMyReviewsButtons.buttonDiv}>
            <View style={themeMyReviewsButtons.buttonGreen}>
                <Pressable onPress={() => goToRepo()} style={themeMyReviewsButtons.pressableStyle}>
                    <CustomText fontWeight={'bold'} style={themeMyReviewsButtons.pressableTextStyle}>
                        View repository
                    </CustomText>
                </Pressable>
            </View>
            <View  style={themeMyReviewsButtons.buttonRed}>
                <Pressable onPress={() => deleteRepo({ reviewId, _deleteReview })} style={themeMyReviewsButtons.pressableStyle2}>
                    <CustomText fontWeight={'bold'} style={themeMyReviewsButtons.pressableTextStyle}>
                        Delete review
                    </CustomText>
                </Pressable>
            </View>
        </View>
    );
};

export default MyReviewButtons;