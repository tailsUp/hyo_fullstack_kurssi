import { View } from 'react-native';
import { Searchbar }    from 'react-native-paper';
import searchTheme from '../themes/searchTheme';

const ViewSearch = ({ search, setSearch, setBounceOK }) => {

    //<Searchbar placeholder='Search' onChangeText={setSearch} value={search}/>
    //<Searchbar placeholder='Search' onChangeText={(value) => updateValues({ setSearch, search, setLoad, value })} value={search}/>

    //<Searchbar placeholder='Search' onChangeText={setSearch} value={search}/>

    return (
        <View style={searchTheme.mainBackGround}>
            <View style={searchTheme.searchStyle}>
                <Searchbar placeholder='Search' onChangeText={(value) => {
                    console.log(value);
                    setBounceOK(true);
                    setSearch(value);
                }} value={search}/>
            </View>
        </View>
    );
};

export default ViewSearch;
