import CustomText from "../CustomText";
import { View }  from 'react-native';

/**
 * 
 * @param {String} error - merkkijono.
 * @returns palauttaa elementin joka kertoo käyttäjälle että jotain on pielessä. 
 */
const ViewError = ({ error }) => {
    return(
        <View>
            <CustomText>
                ERROR + {error}
            </CustomText>
      </View>
    );
};

export default ViewError;