import { View, Pressable } from 'react-native';
import CustomText from '../CustomText';
import theme from '../../themes/theme';
import viewLanguageButtonTheme from './themes/ViewLanguageButtonTheme';

/**
 * 
 * @param {Function} press - funktio jota kutsutaan klikkauksen yhteydessä.
 * @param {string} language - merkkijono joka on nappulan sisällä. 
 * @returns nappulaelementti.
 */
const viewLanguageButton = ({press, language}) => {
    return (
        <View style={theme.repositoryFlexBoxRow.flexButton}>
        <Pressable onPress={press} style={viewLanguageButtonTheme.pressableStyle}>
            <CustomText testID='languageTest' fontWeight={'bold'} style={viewLanguageButtonTheme.pressableTextStyle}>
                {language}
            </CustomText>
        </Pressable>
    </View>
    );
};

export default viewLanguageButton;