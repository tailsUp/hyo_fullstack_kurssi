import { View } from 'react-native';
import CustomText from '../CustomText';
import theme from '../../themes/theme';
import viewItemTheme from './themes/ViewItemTheme';

/**
 * 
 * @param {text1} - merkkijono.
 * @param {text2} - merkkijono.
 * @param {test1} - merkkijono.
 * @param {test2} - merkkijono. 
 * @returns elementin täynnä tekstiä.
 */
const viewItem = ({text1, text2, test1, test2}) => {
    return (
        <View style={theme.repositoryFlexBoxRow.flexStatisticsItem}>
            <CustomText testID={test1} fontWeight={'bold'} style={viewItemTheme.blackText}>
                {text1}
            </CustomText>
            <CustomText testID={test2} color='textSecondary'>
                {text2}
            </CustomText>
        </View>
    );
};

export default viewItem;