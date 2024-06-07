import { View, Text } from 'react-native';
import { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import dropDownTheme from './themes/dropDownTheme'

const data = [
    { 
        label: 'Latest repositories',
        value: 'time'
    },
    {
        label: 'Highest rated repositories',
        value: 'DESC'
    },
    {
        label: 'Lowest rated repositories',
        value: 'ASC'
    },
];

const OrderRepositories = ({ setOrderDirection, setOrderBy, orderValue, setOrdervalue  }) => {

    //Käytetään drop-down-listan labelin värin vaihtoon.
    const [isFocus, setIsFocus] = useState(false);

    /**
     * Label joka näkyy drod-down-listin yläpuolella pienellä kirjoitettuna.
     * Muuttuu siniseksi kun elementti on aktivoituna.
     * @returns palauttaa tekstin värin kanssa.
     */
    const dropDownLabel = () => {
            if (orderValue || isFocus) {
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
              iconStyle={dropDownTheme.iconStyle}
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select an item' : '...'}
              value={orderValue}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                if(item.value === 'time' || item.value === 'default') 
                {
                    setOrderBy('CREATED_AT');
                    setOrderDirection('DESC');
                }
                else 
                {
                    setOrderBy('RATING_AVERAGE');
                    setOrderDirection(item.value);
                }
                setOrdervalue(item.value);
                setIsFocus(false);
              }}
          />
        </View>
      );
};

export default OrderRepositories;

