import { View } from 'react-native';
import { 
  Route, 
  Routes,
  Navigate
  }           from 'react-router-native';
//Komponentit:
import AppBar             from './components/AppBar';
import SignIn             from './components/SignIn';
import SignUp             from './components/SignUp';
import CreateReview       from './components/CreateReview';
import { checkIfLoggedIn } from './services/services';
import ShowMyReviews from './components/MyReviews/ShowMyReviews';
import AllRepositories from './components/ShowRepositories/AllRepositories';

const Main = () => {
  let reviews = [];
  let logged = false;
  try 
  {
    const { loading, error, data }  = checkIfLoggedIn();

    if(loading) {console.log(loading);}

    if(error) {console.log(error);}

    if(data) 
    {
      reviews = data.me.reviews ? data.me.reviews.edges.map(edge => edge.node) : [];
      logged = true;
      const name = data.me.username;
      return applicationView({ logged, reviews, name });
    }
    return applicationView({ logged, reviews });
    
  } 
  catch(error) 
  {
    console.log('ERROR IN CREATING USER VIEWS. Error: ', error);
    const logged = false;
    return applicationView({ logged, reviews });
  }
};

/**
 * @param {Object} logged   -  contains information of user login.
 * @param {Object} reviews  -  contains repositories & reviews.
 * @param {Object} name     -  contains users login name.
 * @returns application view element.
 */
const applicationView = ({ logged, reviews, name }) => {
  if(logged) 
  {
    return (
      <View>
        <AppBar logged={logged}/>
        <Routes>
          <Route path='/repositories' element={<AllRepositories />} />
          <Route path='/create' element={<CreateReview />} />
          <Route path='/myreviews' element={<ShowMyReviews reviews={reviews} name={name}/>} />
          <Route path='*' element={<Navigate to='/repositories' replace />} />
        </Routes>
      </View>
    );
  }
  else
  {
    return (
      <View>
        <AppBar logged={logged}/>
        <Routes>
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/repositories' element={<AllRepositories />} />
          <Route path='*' element={<Navigate to='/signin' replace />} />
        </Routes>
      </View>
    );
  }
};
export default Main;
