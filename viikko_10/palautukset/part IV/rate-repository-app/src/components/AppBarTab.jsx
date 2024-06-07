import { Text, Pressable } from 'react-native';
import { Link } from 'react-router-native';
import appBarTheme from '../themes/appBarTheme';

/**
 * 
 * Funktio palauttaa yksittäisen linkin navigaatiokentän käyttöön.
 * 
 * @param {Object} props - sisältää linkin näkymään. 
 * @returns 
 */
const AppBarTab = (props) => {
    if(props.text === null) {
        return null;
    }
    const link = '/' + props.link;
    return (
        <Pressable onPress={props.onClick}>
          <Link to={link}>
            <Text style={appBarTheme.appBarText}>{props.text}</Text>
          </Link>
        </Pressable>
    )
};

export default AppBarTab;