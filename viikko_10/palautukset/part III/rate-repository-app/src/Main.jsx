import { 
  View,
  StyleSheet,
  Text  
  }           from 'react-native';
import { 
  Route, 
  Routes,
  Navigate
  }           from 'react-router-native';
//Komponentit:
import AppBar             from './components/AppBar';
import SignIn             from './components/SignIn';
import RepositoryFlexbox  from './components/RepositoryFlexBox';
import theme              from './themes/theme'; 
import { queryAllRepositories, checkIfLoggedIn } from './services/services';

const mainStyles = StyleSheet.create({
  main: {
    backgroundColor: theme.colors.mainBack,
  },
});

const Main = () => {

  const x       = queryAllRepositories();
  const logged  = checkIfLoggedIn();

  console.log(x);
  console.log(logged);

  if(x !== null && x !== undefined && x.repositories !== null && x.repositories !== undefined) 
  {
    return applicationView({x, logged});
  }

  if (x.loading)
  {
    <View>
      <Text></Text>
      <Text></Text>
      <Text>LOADING FROM DB - PLEASE WAIT</Text>
    </View>
  }

  if(x.error) 
  {
    <View>
      <Text></Text>
      <Text></Text>
      <Text>ERROR</Text>
      <Text>{x.error}</Text>
    </View>
  }

  return (
    <View>
      <Text></Text>
      <Text></Text>
      <Text style={{paddingTop: 500}}>SOMETHING WENT WRONG - PLEASE TRY AGAIN LATER</Text>
    </View>
  );
};

const applicationView = ({x, logged}) => {
  const repositoryNodes = x.repositories ? x.repositories.edges.map(edge => edge.node) : [];

  console.log(logged);

  if(logged) 
  {
    return (
      <View style={mainStyles.main}>
        <AppBar logged={logged}/>
        <Routes>
          <Route path='/repositories' element={<RepositoryFlexbox data={repositoryNodes}/>} />
          <Route path='*' element={<Navigate to='/repositories' replace />} />
        </Routes>
      </View>
    );
  }
  else
  {
    return (
      <View style={mainStyles.main}>
        <AppBar logged={logged}/>
        <Routes>
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/repositories' element={<RepositoryFlexbox data={repositoryNodes}/>} />
          <Route path='*' element={<Navigate to='/signin' replace />} />
        </Routes>
      </View>
    );
  }


};

export default Main;

/*

  if (x.repositories !== null && x.repositories !== undefined) 
  {
    const repositoryNodes = x.repositories ? x.repositories.edges.map(edge => edge.node) : [];
    return (
      <View style={mainStyles.main}>
        <AppBar />
        <Routes>
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/repositories' element={<RepositoryFlexbox data={repositoryNodes}/>} />
          <Route path='*' element={<Navigate to='/signin' replace />} />
        </Routes>
      </View>
    );
  } 
  
  if (x.data !== null && x.data !== undefined) 
  {
    const repositoryNodes = x.data ? x.data.edges.map(edge => edge.node) : [];
    return (
      <View style={mainStyles.main}>
        <AppBar />
        <Routes>
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/repositories' element={<RepositoryFlexbox data={repositoryNodes}/>} />
          <Route path='*' element={<Navigate to='/signin' replace />} />
        </Routes>
      </View>
    );
  } 

*/