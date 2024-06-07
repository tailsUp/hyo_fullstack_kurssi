import { View } from 'react-native';
//Komponenetit:
import CustomText from '../CustomText';
import ViewImage from '../Views/ViewImage';
//Themes:
import theme from '../../themes/theme';
import themeRepositoryMainInfo from './themes/themeRepositoryMainInfo';

/**
 * Elementti joka sisältää yksittäisen repositorion perustiedot.
 * @param {String} fullName     - Repositorion nimi.
 * @param {String} description  - Repositorion kuvaus.
 * @param {String} url          - Repositorion kuvan osoite.
 * @returns Perustieto elementti.
 */
const RepositoryMainInfo = ({ fullName, description, url }) => {
    return (
        <View style={theme.repositoryFlexBoxRow.flexRowContainer}>
            <ViewImage url={url}/>
            <View style={themeRepositoryMainInfo.mainInfo}>
                <CustomText testID='nameTest' fontWeight={'bold'} style={themeRepositoryMainInfo.blackText}>
                    {fullName}
                </CustomText>
                <CustomText testID='descriptionTest' style={themeRepositoryMainInfo.blackText}>
                    {description}
                </CustomText>
            </View>
        </View>
    );
};

export default RepositoryMainInfo;