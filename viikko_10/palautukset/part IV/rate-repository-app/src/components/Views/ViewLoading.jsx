import CustomText from "../CustomText";
import { View }  from 'react-native';

/**
 * 
 * @returns Elementin joka kertoo käyttäjälle että lataus on käynnissä.
 * 
 */
const ViewLoading = () => {
    return(
        <View>
            <CustomText>
                Waiting for repositories to LOAD!
            </CustomText>
      </View>
    );
};

export default ViewLoading;