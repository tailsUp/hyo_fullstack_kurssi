import { StyleSheet, Text, Pressable } from 'react-native';
import Theme from '../themes/theme'
import { Link } from 'react-router-native';

const appBarStyles = StyleSheet.create({
  appBarText: {
    color:            Theme.colors.textAppbar,
    backgroundColor:  Theme.colors.backAppbar,
    fontWeight:       'bold',
  }
});

const AppBarTab = (props) => {
    if(props.text === null) {
        return null;
    }
    const link = '/' + props.link;
    return (
        <Pressable onPress={props.onClick}>
          <Link to={link}>
            <Text style={appBarStyles.appBarText}>{props.text}</Text>
          </Link>
        </Pressable>
    )
};

export default AppBarTab;