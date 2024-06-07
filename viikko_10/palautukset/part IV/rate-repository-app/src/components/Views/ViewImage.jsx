import { View, Image } from 'react-native';
import viewImageTheme from './themes/ViewImageTheme';

/**
 * 
 * @param {String} url - osoite josta kuva haetaan. 
 * @returns palauttaa kuvaelementin.
 */
const ViewImage = ({ url }) => {
    return (
        <View>
            <Image style={viewImageTheme.tinyLogo} source={{ uri: url, }} />
        </View>
    );
};

export default ViewImage;