//import { View, Image, StyleSheet, Pressable } from 'react-native';
import { View } from 'react-native';
import reviewTheme from '../MyReviews/themes/reviewTheme';
import ViewMainInfoReview from '../Views/ViewMainInfoReview';
import ViewReviewText from '../Views/ViewReviewText';
import { handelDates } from '../../util/Util';

/**
 * Luo elementin joka sisältää yksittäisen repositorion tiedot.
 * @param {Properties} props - sisältää kaikki muuttujat joilla asetetaan oikeat arvot näytölle. 
 * @returns elementti.
 */
const ReviewItem = props => {
    const rating = props.item.rating;
    const username = props.item.user.username;
    const date = props.item.createdAt;
    const created = handelDates({ date });
    const text = props.item.text;
    try 
    {
        return (
            <View style={reviewTheme.flatListReview.div3}>
                <ViewMainInfoReview rating={rating} name={username} date={created}/>
                <ViewReviewText text={text}/>
            </View>
        )
    }
    catch(error) 
    {
        console.log('Error in creating repositoryItem: ', error);
        return null;
    }
};

export default ReviewItem;
