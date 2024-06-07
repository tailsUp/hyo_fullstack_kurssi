import { View } from 'react-native';
import { handelDates } from '../../util/Util';
//Komponentit:
import MyReviewButtons from './MyReviewButtons';
import MyReviewInfo from './MyReviewInfo';
import themeMyReviewComponent from './themes/themeMyReviewComponent';

/*const itemStyles = StyleSheet.create({
    mainStyle: { 
        backgroundColor: 'white',
        paddingBottom: 10,
    },
});*/

const MyReviewComponent = ({ item, setSingle, setID }) => {
    let date = item.createdAt;
    date = handelDates({ date });
    const rating = item.rating;
    const text = item.text;
    const name = item.repository.fullName;
    const id = item.repository.id;

    return (
        <View style={themeMyReviewComponent.mainStyle}>
            <MyReviewInfo rating={rating} name={name} date={date} text={text} />
            <MyReviewButtons setSingle={setSingle} setID={setID} itemID={id} reviewId={item.id} />
        </View>
    );
};

export default MyReviewComponent;
