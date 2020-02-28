import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    pageView: { 
      paddingTop: 50, 
      paddingLeft: 30, 
      paddingRight: 30 
    },
    inputContainer: { 
      flexDirection: 'row', 
      justifyContent: 'space-around', 
      alignItems: 'center' 
    },
    input: {
      borderColor: 'black', 
      borderWidth: 1, 
      padding: 5, 
      width: '80%'
    },
    listItemsContainer: {
      paddingTop: 30,
      flexDirection: 'column',
      alignItems: 'center'
    },
    listItemsTitle: {
      fontSize: 16,
      marginBottom: 10
    },
    listItem: {
      width: '80%',
      padding: 5,
      marginBottom: 8,
      borderWidth: 1,
      borderColor: 'black',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
});

export default styles;