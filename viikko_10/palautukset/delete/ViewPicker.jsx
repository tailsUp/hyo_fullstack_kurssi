import { View, Text } from 'react-native';
import { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import dropDownTheme from '../themes/dropDownTheme';

const data = [
    { label: 'Latest repositories', value: 'new' },
    { label: 'Highest rated repositories', value: 'high' },
    { label: 'Lowest rated repositories', value: 'low' },
];

const ViewPicker = ({ updateRepos, setRepos, repos, setDirection, setOrder, setLoad, order }) => {

    //const [value, setValue] = useState('new');
    const [isFocus, setIsFocus] = useState(false);

    const dropDownLabel = () => {
        //if (value || isFocus) {
            if (order || isFocus) {
            return (
                <Text style={[dropDownTheme.label, isFocus && { color: 'blue' }]}>
                    Select an item
                </Text>
            );
        }
        return null;
    };

    return (
        <View style={dropDownTheme.container}>
          {dropDownLabel()}
          <Dropdown
              style={[dropDownTheme.dropdown, isFocus && { borderColor: 'blue' }]}
              placeholderStyle={dropDownTheme.placeholderStyle}
              selectedTextStyle={dropDownTheme.selectedTextStyle}
              //inputSearchStyle={dropDownTheme.inputSearchStyle}
              iconStyle={dropDownTheme.iconStyle}
              data={data}
              //search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select an item' : '...'}
              //searchPlaceholder="Search..."
              //value={value}
              value={order}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                //setValue(item.value);
                console.log(item.value);
                setOrder(item.value);
                setIsFocus(false);
                updateRepos({ item, setRepos, repos, setDirection, setOrder, setLoad });
              }}
          />
        </View>
      );
};

export default ViewPicker;

