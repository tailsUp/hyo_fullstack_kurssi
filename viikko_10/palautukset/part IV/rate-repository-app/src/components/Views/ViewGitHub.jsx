import { View, Pressable } from 'react-native';
import CustomText from '../CustomText';
import theme from '../../themes/theme';
import viewGitHubTheme from './themes/ViewGitHubTheme';

/**
 * 
 * @param {Function} openGitHub - funktio.
 * @param {String} urlOut - merkkijono.
 * @param {String} text - merkkijono.
 * @returns palauttaa elementin jota painamalla voi siirtyä githubiin.
 */
const ViewGitHub = ({ openGitHub, urlOut, text }) => {
    return (
        <View style={theme.repositoryFlexBoxRow.gitHub}>
            <Pressable onPress={() => openGitHub({urlOut})} style={viewGitHubTheme.pressableStyle}>
                <CustomText fontWeight={'bold'} style={viewGitHubTheme.pressableTextStyle}>
                    {text}
                </CustomText>
            </Pressable>
        </View>
    );
};

export default ViewGitHub;