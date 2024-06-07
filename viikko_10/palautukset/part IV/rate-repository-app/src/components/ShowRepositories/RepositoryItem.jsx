import { View, Pressable }      from 'react-native';
import theme                    from '../../themes/theme';
import { numberFormatterBrief } from '../../util/Util';
import ViewMainInfo             from '../Views/ViewMainInfo';
import ViewItem                 from '../Views/ViewItem';
import ViewLanguageButton       from '../Views/ViewLanguageButton';

/**
 * 
 * Funktio määrittää näkyvyys vipujen asennot.
 * 
 * @param {Object} item - Olio joka siältää vivut. 
 */
const openSignleView = ({ item }) => {
    if(item.single)
    {
        item.setSingle(false);
        item.setRepo(null);
    }
    else
    {
        item.setSingle(true);
        item.setRepo(item);
    }
};

/**
 * 
 * @param {Properties} props - propertyt joka sisältää kasan repositorion 
 * @returns 
 */
const RepositoryItem = props => {
    const item = { ...props.item, single: props.single, setSingle: props.setSingle, repo: props.repo, setRepo: props.setRepo};
    const url       = props.item.ownerAvatarUrl;
    const stars     = numberFormatterBrief({number: props.item.stargazersCount});
    const forks     = numberFormatterBrief({number: props.item.forksCount});
    const review    = numberFormatterBrief({number: props.item.reviewCount});
    const rating    = numberFormatterBrief({number: props.item.ratingAverage});

    try 
    {
        return (
            <View style={theme.repositoryFlexBoxColumn.flexColumnItem}>

                <Pressable onPress={() => openSignleView({item})}>
                
                <ViewMainInfo fullName={props.item.fullName} description={props.item.description} url={url} />

                <ViewLanguageButton press={() => { console.log('Tällä nappulalla ei vaadittua toiminnallisuutta!'); }} language={props.item.language}/>
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

export default RepositoryItem;
