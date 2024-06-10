import { View, FlatList }               from 'react-native';
import theme                            from '../../themes/theme'
import MyReviewComponent                from './MyReviewComponent';
import ItemSeparator                    from '../Views/ItemSeperator';
import { OrderRepositoriesByRating }    from '../../util/Util';
import ViewReviewText from '../Views/ViewReviewText';

const AllMyReviews = ({ reviews, setSingle, setID }) => {

    if(reviews.length === 0)
    {
        return (<ViewReviewText text={'You dont have any reviews!'} />);
    }

    reviews = OrderRepositoriesByRating({ reviews });

    return(
        <View testID="ownReviewList">
            <View style={theme.repositoryFlexBoxColumn.mainColumnFlex}>
                <FlatList
                    data={reviews}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({item}) => <MyReviewComponent item={item} reviews={reviews} setSingle={setSingle} setID={setID} />}
                    contentContainerStyle={{ paddingBottom: 140 }}
                />
            </View>
        </View>
    );
};

export default AllMyReviews;