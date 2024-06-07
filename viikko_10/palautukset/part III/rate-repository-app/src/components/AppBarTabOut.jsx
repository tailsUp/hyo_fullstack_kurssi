import { StyleSheet, Text, Pressable } from 'react-native';
import Theme from '../themes/theme'

const appBarStyles = StyleSheet.create({
  appBarText: {
    color:            Theme.colors.textAppbar,
    backgroundColor:  Theme.colors.backAppbar,
    fontWeight:       'bold',
  }
});

const AppBarTabOut = (props) => {
    if(props.text === null) {
        return null;
    }
    return (
      <Pressable onPress={props.onClick}>
        <Text style={appBarStyles.appBarText}>{props.text}</Text>
      </Pressable>
    )
};

export default AppBarTabOut;