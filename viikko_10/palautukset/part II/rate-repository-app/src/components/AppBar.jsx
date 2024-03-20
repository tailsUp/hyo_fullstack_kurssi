import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import AppBarTab from './AppBarTab';
import theme from '../themes/theme';

/*

The AppBar component should currently contain a tab with the text "Repositories". 
Make the tab pressable by using the Pressable component but you don't have to handle the onPress event in any way. 

*/

const appBarStyles = StyleSheet.create({
  appBarContainer: {
    paddingTop:       50,
    display:          'flex',
    flexDirection:    'row',
    flexWrap:         'wrap',
    alignItems:       'center',
    //justifyContent:   'space-between',
    backgroundColor:  theme.colors.backAppbar,
    //paddingBottom:  5,
    //gap: 100,
  },
  appBarItem: {
    paddingRight: 20,
    //flex: 1,
    //overflow: 'scroll',
  },
});

const onClickAppBar = ( path ) => {
  if( path === 'signin')
  {
    console.log('SIGNIN');
    <Link to='/signin'/>
  }
  else if(path === 'repository')
  {
    console.log('REPOSITORY');
    <Link to='/repositories'/>
  }
};

const AppBar = () => {
  //return <View style={styles.container}>
  return (
//    <ScrollView horizontal contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>

    <View style={appBarStyles.appBarContainer}>
      <ScrollView horizontal contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>

      <View style={appBarStyles.appBarItem}>
          <AppBarTab text='Repositories' link='repositories' onClick={() => {onClickAppBar('repository')}}/>
        </View>

        <View style={appBarStyles.appBarItem}>
          <AppBarTab text='Sign in' link='signin' onClick={() => {onClickAppBar('signin')}}/>
        </View>

        </ScrollView>
    </View>
  );
};

export default AppBar;