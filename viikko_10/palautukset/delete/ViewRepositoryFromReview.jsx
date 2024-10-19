import CustomText from "../components/CustomText";
import { View, Pressable, StyleSheet } from 'react-native';

const ViewRepositoryFromReview = (props) => {

    const a = props.values[0]; //ID
    const b = props.values[1]; //NAME
    const c = props.values[2]; //RATING
    const d = props.values[3]; //TEXT

    return (
        <View>
            <CustomText>{a}</CustomText>
            <CustomText>{b}</CustomText>
            <CustomText>{c}</CustomText>
            <CustomText>{d}</CustomText>
        </View>
    );
};

export default ViewRepositoryFromReview;