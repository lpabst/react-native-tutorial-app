import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    listItem: {
      width: '80%',
      padding: 5,
      marginBottom: 8,
      borderWidth: 1,
      borderColor: 'black',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    listItemsTitle: {
      fontSize: 16,
      marginBottom: 10
    }
});

export default styles;