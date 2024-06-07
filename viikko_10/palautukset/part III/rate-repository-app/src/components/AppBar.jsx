import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import AppBarTab from './AppBarTab';
import AppBarTabOut from './AppBarTabOut';
import theme from '../themes/theme';
import useAuthStorage from '../util/useAuthStorage';
import { useApolloClient } from '@apollo/client';
//import getLogInInfo from '../data/getLogInInfo';
//import { checkIfLoggedIn } from '../services/services';

const appBarStyles = StyleSheet.create({
  appBarContainer: {
    paddingTop:       50,
    display:          'flex',
    flexDirection:    'row',
    flexWrap:         'wrap',
    alignItems:       'center',
    backgroundColor:  theme.colors.backAppbar,
  },
  appBarItem: {
    paddingRight: 20,
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

const logOut = ({apolloClient, authStorage}) => {
  //console.log(props);
  console.log('LOGOUT!!!!');
  authStorage.removeAccessToken();
  apolloClient.resetStore();
};

const AppBar = ({ logged }) => {

  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  if(logged)
  {
    return (
      <View style={appBarStyles.appBarContainer}>
        <ScrollView horizontal contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
  
          <View style={appBarStyles.appBarItem}>
            <AppBarTab text='Repositories' link='repositories' onClick={() => {onClickAppBar('repository')}}/>
          </View>
  
          <View style={appBarStyles.appBarItem}>
            <AppBarTabOut text='Signout' onClick={() => {logOut({apolloClient, authStorage})}}/>
          </View>
  
        </ScrollView>
      </View>
    );
  }

  return (
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