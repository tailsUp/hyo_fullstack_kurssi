import { View } from 'react-native';
import SearchRepositories from './SearchRepositories';
import OrderRepositories from './OrderRepositories';
import RepositoryList from './RepositoryList';

/**
 * Sisältää kolme elementtiä repositories sivulta. SearchRepositories on yhtä kuin hakukenttä, orderRepositories on sivulla oleva dropDownList ja
 * repositoryList on lista kaikista repositorioista tietokannassa.
 * @param {Array} repositories          - taulukko joka sisältää kaikki repositoriot.
 * @param {String} searchKeyword        - hakusana jolla repositorioita rajataan.
 * @param {useState} setSingle          - vipu jolla liikutaan yhden ja monen repositorion välillä.
 * @param {useState} setSearchKeyword   - vipu jolla asetetaan hakusana.
 * @param {useState} setOrderDirection  - vipu jolla asetetaan arvo jonka perusteella repositoriot järjestetään (DES / ASC).
 * @param {useState} setOrderBy         - vipu jolla asetaaan arvo jonka perusteella repositoriot järjestetään (RATING / DATE).
 * @param {String} orderValue           - sisältää järjestys arvon.
 * @param {useState} setOrdervalue      - vipu jolla asetetaan järjestys arvo.
 * @returns 
 */
const ShowRepositories =  ({ repositories, searchKeyword, setSingle, setSearchKeyword, setOrderDirection, setOrderBy, orderValue, setOrdervalue }) => {
    return (
        <View>
            <SearchRepositories 
                searchKeyword={searchKeyword}
                setSearchKeyword={setSearchKeyword}
            />
            <OrderRepositories 
                setOrderDirection={setOrderDirection}
                setOrderBy={setOrderBy}
                orderValue={orderValue}
                setOrdervalue={setOrdervalue}
            />
            <RepositoryList 
                repositories={repositories}
                setSingle={setSingle}
            />
        </View>
    );
};

export default ShowRepositories;