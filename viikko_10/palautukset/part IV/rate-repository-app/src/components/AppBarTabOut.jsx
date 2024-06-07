import { Text, Pressable } from 'react-native';
import appBarTheme from '../themes/appBarTheme';

/**
 * 
 * Funktio palauttaa uloskirjautumislinkin navigaatiokenttään.
 * 
 * @param {Object} props - sisältää linkin toiseen näkymään. 
 * @returns logout.
 */
const AppBarTabOut = (props) => {
    if(props.text === null) {
        return null;
    }
    return (
      <Pressable onPress={props.onClick}>
        <Text style={appBarTheme.appBarText}>{props.text}</Text>
      </Pressable>
    )
};

export default AppBarTabOut;