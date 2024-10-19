import { View, FlatList, StyleSheet } from 'react-native';
import theme from '../themes/theme'
import RepositoryItem from '../components/ShowRepositories/RepositoryItem';

const styles = StyleSheet.create({
    separator: {
      height: 10,
      backgroundColor: '#BEBEBE',
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ViewRepositoriesList = ({ repos, repo, setRepo, single, setSingle }) => {

    return(
        <View testID="repositoryList">
            <View style={theme.repositoryFlexBoxColumn.mainColumnFlex}>
            <FlatList
                data={repos}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({item}) => <RepositoryItem item={item} single={single} 
                    setSingle={setSingle} repo={repo} setRepo={setRepo}/>}
                contentContainerStyle={{ paddingBottom: 120 }}
                />
            </View>
        </View>
    );
};

export default ViewRepositoriesList;