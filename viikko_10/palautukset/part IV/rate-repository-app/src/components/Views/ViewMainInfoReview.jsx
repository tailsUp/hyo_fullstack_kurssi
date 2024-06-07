import { View } from 'react-native';
import CustomText from '../CustomText';
import reviewTheme from '../MyReviews/themes/reviewTheme';
import reviewTheme2 from './themes/ViewMainInfoReviewTheme';

/**
 * 
 * Funktio palauttaa elementin, jonka sisällä on päätiedot joita käytetään KAIKKIEN repositorioiden kanssa.
 * 
 * @param {String} rating - merkkijono.
 * @param {String} name - merkkijono.
 * @param {String} date - merkkijono.
 * @returns 
 */
const ViewMainInfo = ({ rating, name, date }) => {
    return (
        <View style={reviewTheme.flatListReview.div4}>
            <View style={reviewTheme2.blueCircle}>
                <View style={reviewTheme2.centerDiv}>
                    <CustomText style={reviewTheme2.blueText}>
                        {rating}
                    </CustomText>
                </View>
            </View>
            <View style={reviewTheme2.mainInfo}>
                <CustomText style={reviewTheme2.blackText}>
                    {name}
                </CustomText>
                <CustomText style={reviewTheme2.greyText}>
                    {date}
                </CustomText>
            </View>
        </View>
    );
};

export default ViewMainInfo;