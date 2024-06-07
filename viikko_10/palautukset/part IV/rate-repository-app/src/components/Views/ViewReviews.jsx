import { View, FlatList } from 'react-native';
import reviewTheme from '../MyReviews/themes/reviewTheme';
import ReviewItem from '../ShowRepositories/ReviewItem';
import ItemSeparator from './ItemSeperator';

/**
 * 
 * Funktio luo listan arvosteluista ja palauttaa sen. Lista muodostetaan ReviewItem elementeistä.
 * 
 * @param {Array} nodes - nodetaulukko josta lista muodostetaaan.
 * @returns elementtilista.
 */
const ViewReviews = ({ nodes }) => {
    return (
        <View testID="reviewsList" tyle={reviewTheme.flatListReview.div1}>
            <View style={reviewTheme.flatListReview.div2}>
                <FlatList
                    data={nodes}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({item}) => <ReviewItem item={item}/>}
                    contentContainerStyle={{ paddingBottom: 750 }}/>
            </View>
        </View>
    );
};

export default ViewReviews;