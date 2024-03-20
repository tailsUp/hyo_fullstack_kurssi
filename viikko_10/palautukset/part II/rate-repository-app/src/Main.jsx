import { 
  View,
  StyleSheet 
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
import data               from './data/RepositoryList';
import theme              from './themes/theme'; 

const mainStyles = StyleSheet.create({
  main: {
    backgroundColor: theme.colors.mainBack,
  },
});

const Main = () => {
    return (
        <View style={mainStyles.main}>
          <AppBar />
          <Routes>
            <Route path='/signin' element={<SignIn/>} />
            <Route path='/repositories' element={<RepositoryFlexbox data={data.repositories}/>} />
            <Route path='*' element={<Navigate to='/signin' replace />} />
          </Routes>
        </View>
    );
};


/*

            <Text>Simple text</Text>
            <Text style={{ paddingBottom: 10 }}>Text with custom style</Text>
            <Text fontWeight="bold" fontSize="subheading">
              Bold subheading
            </Text>
            <Text color="textSecondary">Text with secondary color</Text>
            <Text>Rate Repository Application</Text>
                        <FlexboxExample />   

*/
export default Main;