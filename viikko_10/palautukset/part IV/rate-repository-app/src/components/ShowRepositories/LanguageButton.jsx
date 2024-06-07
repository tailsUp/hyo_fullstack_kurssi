import { View, Pressable } from 'react-native';
import CustomText from '../CustomText';
import theme from '../../themes/theme';
import themeLanguageButton from './themes/themeLanguageButton';

const LanguageButton = ({ language }) => {
    return (
        <View style={theme.repositoryFlexBoxRow.flexButton}>
        <Pressable onPress={() => console.log('Toiminnallisuutta ei pyydetty!')} style={themeLanguageButton.pressableStyle}>
            <CustomText testID='languageTest' fontWeight={'bold'} style={themeLanguageButton.pressableTextStyle}>
                {language}
            </CustomText>
        </Pressable>
    </View>
    );
};

export default LanguageButton;