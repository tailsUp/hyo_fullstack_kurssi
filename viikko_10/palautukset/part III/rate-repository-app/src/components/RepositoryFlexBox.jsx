//import { View, StyleSheet, Text } from 'react-native';
import { View, FlatList, StyleSheet } from 'react-native';
import theme from '../themes/theme'
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });
  
const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryFlexbox = (props) => {

    if(props.data === null || props.data === undefined) 
    {
        console.log('DATA TYHJÄ!');
        return null;
    }
    
    try {
        return (
            <View>
                <View style={theme.repositoryFlexBoxColumn.mainColumnFlex}>
                <FlatList
                    data={props.data}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({item}) => <RepositoryItem item={item}/>}
                    contentContainerStyle={{ paddingBottom: 120 }}
                    />
                </View>
            </View>
          );
    } catch(error) {
        console.log("Error in looping thorugh data to create FlexBox: ", error);
        return null;
    }
};
  
export default RepositoryFlexbox;
