import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    separator: {
      height: 10,
      backgroundColor: '#BEBEBE'
    },
});

/**
 * 
 * @returns käytetään osana lista elementtiä tekemään jako muiden elementtien välillä. Tämä ON SUORA KURSSILTA NOSTETTU ESIMERKKI!
 */
const ItemSeparator = () => {
    return (
        <View style={styles.separator} />
    );
};

export default ItemSeparator;