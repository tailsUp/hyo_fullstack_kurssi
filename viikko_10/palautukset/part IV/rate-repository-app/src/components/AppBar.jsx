import { View, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import AppBarTab from './AppBarTab';
import AppBarTabOut from './AppBarTabOut';
import useAuthStorage from '../util/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import appBarTheme from '../themes/appBarTheme';

/**
 * 
 * Funktio vaihtaa käyttäjän näkymää riippuen muuttujan arvosta.
 * 
 * @param {String} path - merkkijono jonka perusteella siirrytään seuraavaan näkymään. 
 */
const onClickAppBar = ( path ) => {
  if( path === 'signin')
  {
    <Link to='/signin'/>
  }
  else if(path === 'signup') 
  {
    <Link to='/signup'/>
  }
  else if(path === 'repository')
  {
    <Link to='/repositories'/>
  }
  else if(path === 'create')
  {
    <Link to='/create'/>
  } else if(path === 'myreviews')
  {
    <Link to='/myreviews'/>
  }
};

/**
 * 
 * Funktio kirjaa käyttäjän ulos ja putsaa apolloClient ja authStorage tiedot.
 * 
 * @param {Function} apolloClient 
 * @param {Function} authStorage
 */
const logOut = ({apolloClient, authStorage}) => {
  authStorage.removeAccessToken();
  apolloClient.resetStore();
};

/**
 * 
 * Palauttaa aplikaatiossa näkyvän navigaatiokentän, josta vaihdetaan näkymiä.
 * 
 * @param {Boolean} logged - kertoo onko käyttäjä jo kirjautunut sisään vai ei. 
 * @returns Navigaatiokenttä.
 */
const AppBar = ({ logged }) => {

  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  if(logged)
  {
    return (
      <View style={appBarTheme.appBarContainer}>
        <ScrollView horizontal contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
  
          <View style={appBarTheme.appBarItem}>
            <AppBarTab text='Repositories' link='repositories' onClick={() => {onClickAppBar('repository')}}/>
          </View>
  
          <View style={appBarTheme.appBarItem}>
            <AppBarTab text='Create a review' link='create' onClick={() => {onClickAppBar('create')}}/>
          </View>

          <View style={appBarTheme.appBarItem}>
            <AppBarTab text='My reviews' link='myreviews' onClick={() => {onClickAppBar('myreviews')}}/>
          </View>

          <View style={appBarTheme.appBarItem}>
            <AppBarTabOut text='Signout' onClick={() => {logOut({apolloClient, authStorage})}}/>
          </View>
  
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={appBarTheme.appBarContainer}>
      <ScrollView horizontal contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>

        <View style={appBarTheme.appBarItem}>
          <AppBarTab text='Repositories' link='repositories' onClick={() => {onClickAppBar('repository')}}/>
        </View>

        <View style={appBarTheme.appBarItem}>
          <AppBarTab text='Sign in' link='signin' onClick={() => {onClickAppBar('signin')}}/>
        </View>

        <View style={appBarTheme.appBarItem}>
          <AppBarTab text='Sign up' link='signup' onClick={() => {onClickAppBar('signup')}}/>
        </View>

      </ScrollView>
    </View>
  );
};

export default AppBar;