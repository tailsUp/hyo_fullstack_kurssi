import { View } from 'react-native';
import CustomText from '../CustomText';
import reviewTheme from './themes/reviewTheme';

/**
 * 
 * Funktio palauttaa elementin, jonka sisällä on päätiedot joita käytetään OMIEN repositorioiden kanssa.
 * 
 * @param {String} rating - merkkijono.
 * @param {String} name - merkkijono.
 * @param {String} date - merkkijono.
 * @param {String} text - merkkijono.
 * @returns 
 */
const ViewMainInfo = ({ rating, name, date, text }) => {
    return (
        <View style={reviewTheme.flatListReview.div4}>
            <View style={reviewTheme.blueCircle}>
                <View style={reviewTheme.centerDiv}>
                    <CustomText style={reviewTheme.blueText}>
                        {rating}
                    </CustomText>
                </View>
            </View>
            <View style={reviewTheme.mainInfo}>
                <CustomText style={reviewTheme.blackText}>
                    {name}
                </CustomText>
                <CustomText style={reviewTheme.greyText}>
                    {date}
                </CustomText>
                <CustomText style={reviewTheme.blackText2}>
                    {text}
                </CustomText>
            </View>
        </View>
    );
};

export default ViewMainInfo;