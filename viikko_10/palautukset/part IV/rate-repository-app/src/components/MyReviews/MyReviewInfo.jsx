import { View } from 'react-native';
import CustomText from '../CustomText';
import reviewTheme from './themes/reviewTheme';
import themeMyReviewInfo from './themes/themeMyReviewInfo';

const MyReviewInfo = ({ rating, name, date, text }) => {
    return (
        <View style={reviewTheme.flatListReview.div4}>
            <View style={themeMyReviewInfo.blueCircle}>
                <View style={themeMyReviewInfo.centerDiv}>
                    <CustomText style={themeMyReviewInfo.blueText}>
                        {rating}
                    </CustomText>
                </View>
            </View>
            <View style={themeMyReviewInfo.mainInfo}>
                <CustomText style={themeMyReviewInfo.blackText}>
                    {name}
                </CustomText>
                <CustomText style={themeMyReviewInfo.greyText}>
                    {date}
                </CustomText>
                <CustomText style={themeMyReviewInfo.blackText2}>
                    {text}
                </CustomText>
            </View>
        </View>
    );
};

export default MyReviewInfo;