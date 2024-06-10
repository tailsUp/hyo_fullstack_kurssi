import { View, Pressable }  from 'react-native';
import theme                from '../../themes/theme';
import * as Linking         from 'expo-linking';
import CustomText           from '../CustomText';
import ViewMainInfo         from '../Views/ViewMainInfo';
import ViewLanguageButton   from '../Views/ViewLanguageButton';
import ViewItem             from '../Views/ViewItem';
import { getRepoWithID }    from '../../services/services';
import ViewGitHub           from '../Views/ViewGitHub';
import ViewReviews          from '../Views/ViewReviews';
import { sortAllReviews, numberFormatterBrief }   from '../../util/Util';

/**
 * Funktio vie käyttäjän rate-repository-app:sta githubiin jossa todellinen repo sijaitsee.
 * Tähän käytetään Linking ominaisuutta expo-linking:stä.
 * @param {String} urlOut - Osoite johon siirrytään.
 */
const openGitHub = ({ urlOut }) => {
    if(urlOut !== undefined || urlOut !== null) 
    {
        Linking.openURL(urlOut);
    }
};

/**
 * Palauttaa näkymän, joka sisältää yhden repositorion tiedot. Tekee ensin kutsun repostiorion ID:llä, joka palauttaa kaikki tarvittavat tiedot
 * näkymän luontiin. 
 * 
 * @param {useState} setSignle  - vipu jolla määritetään näkyvyys yhden ja monen repositorion välillä.
 * @param {String} ID - uniikki id jota käytetään osana repositorio kutsua.
 * @returns repositorio näkymä.
 */
const SingleRepository = ({ setSingle, ID }) => {

    const { error, loading, data } = getRepoWithID({ ID });
    
    if(loading)
    {
        return (
            <View>
                <CustomText>LOADING</CustomText>
            </View>
        );
    }
    if(error)
    {
        return (
            <View>
                <CustomText>{error}</CustomText>
            </View>
        );
    }

    if(data)
    {
        const name = data.repository.fullName;
        const stars     = numberFormatterBrief({number: data.repository.stargazersCount});
        const forks     = numberFormatterBrief({number: data.repository.forksCount});
        const review    = numberFormatterBrief({number: data.repository.reviewCount});
        const rating    = numberFormatterBrief({number: data.repository.ratingAverage});
        const language = data.repository.language;
        const description = data.repository.description;
        const avatar = data.repository.ownerAvatarUrl;
        const urlOut    = data.repository.url;
        const temp = data.repository.reviews;
        const reviews = sortAllReviews({ temp });

        return (
            <View style={theme.repositoryFlexBoxColumn.flexColumnItem}>
                <Pressable onPress={() => setSingle('')}>
                    <ViewMainInfo fullName={name} description={description} url={avatar} />
                    <ViewLanguageButton press={() => {console.log('Toiminnalisuutta ei vaadittu')}} language={language}/>
                    <View style={theme.repositoryFlexBoxRow.flexStatistics}>
                        <ViewItem text1={stars} text2='Stars' test1='Stars' test2='StarsNro'/>
                        <ViewItem text1={forks} text2='Forks' test1='Forks' test2='ForksNro'/>
                        <ViewItem text1={review} text2='Reviews' test1='Reviews' test2='ReviewsNro'/>
                        <ViewItem text1={rating} text2='Rating' test1='Rating' test2='Rating'/>
                    </View>
                </Pressable>

                <ViewGitHub openGitHub={openGitHub} urlOut={urlOut} text='Open in GITHUB'/>

                <ViewReviews nodes={reviews}/>

            </View>
        );
    }
};

export default SingleRepository;