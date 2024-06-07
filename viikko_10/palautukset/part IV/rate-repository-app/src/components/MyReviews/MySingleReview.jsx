import { View, Pressable } from 'react-native';
import theme from '../../themes/theme';
import { numberFormatterBrief } from '../../util/Util';
//Komponentit:
import CustomText from '../CustomText';
import ViewMainInfo from '../Views/ViewMainInfo';
import ViewLanguageButton from '../Views/ViewLanguageButton';
import ViewItem from '../Views/ViewItem';
import { getRepoWithID } from '../../services/services';

const MySingleReview = ({ setSingle, ID }) => {

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
        /*const stars = data.repository.stargazersCount;
        const forks = data.repository.forksCount;
        const review = data.repository.reviewCount;
        const rating = data.repository.ratingAverage;*/
        const stars     = numberFormatterBrief({number: data.repository.stargazersCount});
        const forks     = numberFormatterBrief({number: data.repository.forksCount});
        const review    = numberFormatterBrief({number: data.repository.reviewCount});
        const rating    = numberFormatterBrief({number: data.repository.ratingAverage});
        const language = data.repository.language;
        const description = data.repository.description;
        const avatar = data.repository.ownerAvatarUrl;

        /*
    const stars     = numberFormatterBrief({number: props.item.stargazersCount});
    const forks     = numberFormatterBrief({number: props.item.forksCount});
    const review    = numberFormatterBrief({number: props.item.reviewCount});
    const rating    = numberFormatterBrief({number: props.item.ratingAverage});


        */

        return (
            <View style={theme.repositoryFlexBoxColumn.flexColumnItem}>
                <Pressable onPress={() => setSingle(false)}>
                    <ViewMainInfo fullName={name} description={description} url={avatar} />
                    <ViewLanguageButton press={() => {console.log('Toiminnallisuutta ei vaadittu!')}} language={language}/>
                    <View style={theme.repositoryFlexBoxRow.flexStatistics}>
                        <ViewItem text1={stars} text2='Stars' test1='Stars' test2='StarsNro'/>
                        <ViewItem text1={forks} text2='Forks' test1='Forks' test2='ForksNro'/>
                        <ViewItem text1={review} text2='Reviews' test1='Reviews' test2='ReviewsNro'/>
                        <ViewItem text1={rating} text2='Rating' test1='Rating' test2='Rating'/>
                    </View>
                </Pressable>
            </View>
        );
    }
};

export default MySingleReview;