import { View } from 'react-native';
import CustomText from '../CustomText';
import ViewImage from './ViewImage';
import theme from '../../themes/theme';
import viewMainInfoTheme from './themes/ViewMainInfoTheme';

/**
 * 
 * Käytetään osana peruslista näkymää repositorioiden kanssa.
 * 
 * @param {String} fullName - merkkijono. 
 * @param {String} description - merkkijono. 
 * @param {String} url - merkkijono.
 * @returns Elementin täytnnä tekstejä.
 */
const ViewMainInfo = ({ fullName, description, url}) => {
    return (
        <View style={theme.repositoryFlexBoxRow.flexRowContainer}>
            <ViewImage url={url}/>
            <View style={viewMainInfoTheme.mainInfo}>
                <CustomText testID='nameTest' fontWeight={'bold'} style={viewMainInfoTheme.blackText}>
                    {fullName}
                </CustomText>
                <CustomText testID='descriptionTest' style={viewMainInfoTheme.blackText}>
                    {description}
                </CustomText>
            </View>
        </View>
    );
};

export default ViewMainInfo;