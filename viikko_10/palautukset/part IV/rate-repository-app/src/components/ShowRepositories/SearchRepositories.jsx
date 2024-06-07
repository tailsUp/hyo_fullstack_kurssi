import { View } from 'react-native';
import { Searchbar }    from 'react-native-paper';
import searchTheme from '../ShowRepositories/themes/searchTheme';
//./themes/searchTheme

/**
 * 
 * Palauttaa hakukenttä elementin, jonka avulla rajataan repositorioita appissa.
 * 
 * @param {String} searchKeyword        - Merkkijono jonka perusteella rajaus tehdään.
 * @param {useState} setSearchKeyword   - Vipu jolla hakusana asetetaan.
 * @returns Hakukenttä elementti.
 */
const SearchRepositories = ({ searchKeyword, setSearchKeyword }) => {
    return (
        <View style={searchTheme.mainBackGround}>
            <View style={searchTheme.searchStyle}>
                <Searchbar placeholder='Search' onChangeText={(value) => {
                    setSearchKeyword(value);
                }} value={searchKeyword}/>
            </View>
        </View>
    );
};

export default SearchRepositories;