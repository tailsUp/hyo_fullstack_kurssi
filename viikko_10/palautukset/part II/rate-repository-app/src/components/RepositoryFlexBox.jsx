//import { View, StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import theme from '../themes/theme'
import RepositoryItem from './RepositoryItem';

const RepositoryFlexbox = (props) => {
    console.log("JEE");
    try {
        return (
            <View>
                <View style={theme.repositoryFlexBoxColumn.mainColumnFlex}>
                    {props.data.map((_d) => {
                        return (
                            <RepositoryItem key={_d.id} item={_d} />
                        );
                    })}
                </View>
            </View>
          );
    } catch(error) {
        console.log("Error in looping thorugh data to create FlexBox: ", error);
        return null;
    }
  };
  
  export default RepositoryFlexbox;
/*
    <CustomText color='primary' fontWeight={'bold'}>Primary Bold</CustomText>
    <CustomText color='textSecondary' fontWeight={'bold'}>Secondary Bold</CustomText>
    <CustomText fontSize={'subheading'}>Subheading</CustomText>
*/