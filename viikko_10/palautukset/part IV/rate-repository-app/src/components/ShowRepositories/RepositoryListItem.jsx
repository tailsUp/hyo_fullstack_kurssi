import { View, Pressable } from 'react-native';
import theme from '../../themes/theme';
import { numberFormatterBrief } from '../../util/Util';
import ViewMainInfo from '../Views/ViewMainInfo';
import ViewItem from '../Views/ViewItem';
import LanguageButton from './LanguageButton';

/**
 * 
 * @param {Object} item - Olio joka sisältää tietoja repositoriosta.
 * @param {useState} setSingle - vipu jolla määritetään näkymä yhden ja monen repositorion välillä.
 * @returns Palauttaa yksittäisen repositorion elementti näkymän.
 */
const RepositoryListItem = ({ item, setSingle }) => {
    const url       = item.ownerAvatarUrl;
    const ID        = item.id;
    const language  = item.language;
    const stars     = numberFormatterBrief({number: item.stargazersCount});
    const forks     = numberFormatterBrief({number: item.forksCount});
    const review    = numberFormatterBrief({number: item.reviewCount});
    const rating    = numberFormatterBrief({number: item.ratingAverage});
    try 
    {
        return (
            <View style={theme.repositoryFlexBoxColumn.flexColumnItem}>
                <Pressable onPress={() => { setSingle(ID); }}>
                    <ViewMainInfo fullName={item.fullName} description={item.description} url={url} />
                    <LanguageButton language={language}/>
                    <View style={theme.repositoryFlexBoxRow.flexStatistics}>
                        <ViewItem text1={stars} text2='Stars' test1='Stars' test2='StarsNro'/>
                        <ViewItem text1={forks} text2='Forks' test1='Forks' test2='ForksNro'/>
                        <ViewItem text1={review} text2='Reviews' test1='Reviews' test2='ReviewsNro'/>
                        <ViewItem text1={rating} text2='Rating' test1='Rating' test2='Rating'/>
                    </View>
                </Pressable>
            </View>
        )
    }
    catch(error) 
    {
        console.log('Error in creating repositoryItem: ', error);
        return null;
    }
};

export default RepositoryListItem;
