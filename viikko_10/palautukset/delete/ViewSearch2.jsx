import { View } from 'react-native';
import { Searchbar }    from 'react-native-paper';
import searchTheme from '../themes/searchTheme';

const ViewSearch2 = ({ setKeyword , keyword }) => {

    return (
        <View style={searchTheme.mainBackGround}>
            <View style={searchTheme.searchStyle}>
                <Searchbar placeholder='Search' onChangeText={(value) => {
                    setKeyword(value);
                }} value={keyword}/>
            </View>
        </View>
    );
};

export default ViewSearch2;
