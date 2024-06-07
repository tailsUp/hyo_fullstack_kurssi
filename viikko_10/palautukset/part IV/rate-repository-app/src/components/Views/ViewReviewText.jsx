import { View } from 'react-native';
import CustomText from '../CustomText';
import reviewTheme from '../MyReviews/themes/reviewTheme';

/**
 * 
 * Funktio palauttaa tekstielementin, jota käytetään arvioiden kanssa.
 * 
 * @param {String} text - merkkijono.
 * @returns tekstielementti.
 */
const ViewReviewText = ({ text }) => {
    return (
        <View style={reviewTheme.flatListReview.div5}>
            <CustomText style={reviewTheme.blackText}>
                {text}
            </CustomText>
        </View>
    );
};

export default ViewReviewText;