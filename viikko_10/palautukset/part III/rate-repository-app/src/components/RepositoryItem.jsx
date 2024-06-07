import { View, Image, StyleSheet, Pressable } from 'react-native';
import theme from '../themes/theme';
import { numberFormatterBrief } from '../util/Util';
import CustomText from './CustomText';

const itemStyles = StyleSheet.create({
    tinyLogo: {
      width: 50,
      height: 50,
    },
    blackText: {
        color: 'black',
    },
    pressableStyle: {
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 4,
        elevation: 0,
        backgroundColor: 'blue',
    }, pressableTextStyle: {
        lineHeight: 15,
        letterSpacing: 0.25,
        color: 'white',
        alignSelf: 'stretch',
    },
    test: {
        paddingLeft: 20,
    },
});


const temp = () => {
    console.log("ASDASD");
}

const RepositoryItem = props => {
    const url       = props.item.ownerAvatarUrl;
    const stars     = numberFormatterBrief({number: props.item.stargazersCount});
    const forks     = numberFormatterBrief({number: props.item.forksCount});
    const review    = numberFormatterBrief({number: props.item.reviewCount});
    const rating    = numberFormatterBrief({number: props.item.ratingAverage});

    try 
    {
        return (
            <View style={theme.repositoryFlexBoxColumn.flexColumnItem}>

                <View style={theme.repositoryFlexBoxRow.flexRowContainer}>

                    <View>
                        <Image style={itemStyles.tinyLogo} source={{ uri: url, }} />
                    </View>
                    
                    <View style={itemStyles.test}>
                        <CustomText fontWeight={'bold'} style={itemStyles.blackText}>
                            {props.item.fullName}
                        </CustomText>
                        <CustomText style={itemStyles.blackText}>
                            {props.item.description}
                        </CustomText>
                    </View>

                </View>

                <View style={theme.repositoryFlexBoxRow.flexButton}>
                    <Pressable  onPress={temp} style={itemStyles.pressableStyle}>
                        <CustomText fontWeight={'bold'} style={itemStyles.pressableTextStyle}>
                            {props.item.language}
                        </CustomText>
                    </Pressable>
                </View>

                <View style={theme.repositoryFlexBoxRow.flexStatistics}>
                    
                    <View style={theme.repositoryFlexBoxRow.flexStatisticsItem}>
                        <CustomText fontWeight={'bold'} style={itemStyles.blackText}>
                            {stars}
                        </CustomText>
                        <CustomText color='textSecondary'>
                            Stars
                        </CustomText>
                    </View>

                    <View style={theme.repositoryFlexBoxRow.flexStatisticsItem}>
                        <CustomText fontWeight={'bold'} style={itemStyles.blackText}>
                            {forks}
                        </CustomText>
                        <CustomText color='textSecondary'>
                            Forks
                        </CustomText>
                    </View>

                    <View style={theme.repositoryFlexBoxRow.flexStatisticsItem}>
                        <CustomText fontWeight={'bold'} style={itemStyles.blackText}>
                            {review}
                        </CustomText>
                        <CustomText color='textSecondary'>
                            Reviews
                        </CustomText>
                    </View>

                    <View style={theme.repositoryFlexBoxRow.flexStatisticsItem}>
                        <CustomText fontWeight={'bold'} style={itemStyles.blackText}>
                            {rating}
                        </CustomText>
                        <CustomText color='textSecondary'>
                            Rating
                        </CustomText>
                    </View>

                </View>

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
