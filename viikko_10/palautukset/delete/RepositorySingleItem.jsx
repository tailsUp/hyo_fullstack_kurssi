import { View, Pressable } from 'react-native';
import theme from '../themes/theme';
import { numberFormatterBrief } from '../util/Util';
import * as Linking from 'expo-linking';
import { queryRepositories } from '../services/services';
import ViewItem from '../components/Views/ViewItem';
import ViewLanguageButton from '../components/Views/ViewLanguageButton';
import ViewMainInfo from '../components/Views/ViewMainInfo';
import ViewGitHub from '../components/Views/ViewGitHub';
import ViewReviews from '../components/Views/ViewReviews';

const temp = () => {
    console.log("TÄLLÄ NAPPULALLA EI OLE VAADITTUA TOIMINNALLISUUTTA!");
};

const openGitHub = ({ urlOut }) => {
    if(urlOut !== undefined || urlOut !== null) 
    {
        Linking.openURL(urlOut);
    }
};

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

const RepositorySingleItem = props => {
    try
    {
        return kommenteilla(props);
    } 
    catch(error)
    {
        console.log('RepositorySingleItem error: ', error);
        //console.log('props: ', props);
        return ilmanKommentteja(props);
    }
    
};

const haeKommentit = ({ repoID }) => {
    const _r   = queryRepositories({ repoID });
    const _temp = _r.data.repository.reviews;
    const nodes = _temp ? _temp.edges.map(edge => edge.node) : [];
    return nodes;
};

const kommenteilla = ( props ) => {

    const item      = { ...props.item, single: props.single, setSingle: props.setSingle, repo: props.repo, setRepo: props.setRepo};
    const url       = props.item.ownerAvatarUrl;
    const urlOut    = props.item.url;
    const stars     = numberFormatterBrief({number: props.item.stargazersCount});
    const forks     = numberFormatterBrief({number: props.item.forksCount});
    const review    = numberFormatterBrief({number: props.item.reviewCount});
    const rating    = numberFormatterBrief({number: props.item.ratingAverage});

    const repoID    = props.item.id;
    const nodes     = haeKommentit({ repoID });

    return (
        <View style={theme.repositoryFlexBoxColumn.flexColumnItem}>
            <Pressable onPress={() => openSignleView({item})}>
                <ViewMainInfo fullName={props.item.fullName} description={props.item.description} url={url} />
                <ViewLanguageButton press={temp} language={props.item.language}/>
                <View style={theme.repositoryFlexBoxRow.flexStatistics}>
                    <ViewItem text1={stars} text2='Stars'/>
                    <ViewItem text1={forks} text2='Forks'/>
                    <ViewItem text1={review} text2='Reviews'/>
                    <ViewItem text1={rating} text2='Rating'/>
                </View>
            </Pressable>

            <ViewGitHub openGitHub={openGitHub} urlOut={urlOut} text='Open in GITHUB'/>

            <ViewReviews nodes={nodes}/>

        </View>
    );
};

const ilmanKommentteja = ( props ) => {

    const item = { ...props.item, single: props.single, setSingle: props.setSingle, repo: props.repo, setRepo: props.setRepo};
    const url       = props.item.ownerAvatarUrl;
    const stars     = numberFormatterBrief({number: props.item.stargazersCount});
    const forks     = numberFormatterBrief({number: props.item.forksCount});
    const review    = numberFormatterBrief({number: props.item.reviewCount});
    const rating    = numberFormatterBrief({number: props.item.ratingAverage});

    return (
        <View style={theme.repositoryFlexBoxColumn.flexColumnItem}>
            <Pressable onPress={() => openSignleView({item})}>
                <ViewMainInfo fullName={props.item.fullName} description={props.item.description} url={url} />
                <ViewLanguageButton press={temp} language={props.item.language}/>
                <View style={theme.repositoryFlexBoxRow.flexStatistics}>
                    <ViewItem text1={stars} text2='Stars'/>
                    <ViewItem text1={forks} text2='Forks'/>
                    <ViewItem text1={review} text2='Reviews'/>
                    <ViewItem text1={rating} text2='Rating'/>
                </View>
            </Pressable>
        </View>
    );
};

export default RepositorySingleItem;
