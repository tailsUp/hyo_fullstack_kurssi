import { View, FlatList }   from 'react-native';
import theme                from '../../themes/theme'
import RepositoryListItem   from './RepositoryListItem';
import ItemSeparator        from '../Views/ItemSeperator';

/**
 * 
 * Elementti listaa kaikki repositoriot näytölle (flatlist avulla).
 * 
 * @param {Array} repositories - taulukko jossa kaikki repositoriot.
 * @param {useState} setSingle - vipu jota käytetään yhden ja monen näkymän välillä liikkumiseen.
 * @returns lista repositirio-elementtejä.
 */
const RepositoryList = ({ repositories, setSingle }) => {
    return(
        <View testID="repositoryList">
            <View style={theme.repositoryFlexBoxColumn.mainColumnFlex}>
                <FlatList
                    data={repositories}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={ ({ item }) => <RepositoryListItem item={item} setSingle={setSingle}/> }
                    contentContainerStyle={{ paddingBottom: 600 }}
                />
            </View>
        </View>
    );
};

export default RepositoryList;