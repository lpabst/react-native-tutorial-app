import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    pageView: { 
      position: 'relative',
      paddingTop: 50, 
      paddingLeft: 30, 
      paddingRight: 30 
    },
    showModalButton:{
      width: 50,
      height: 50,
      borderColor: 'black',
      borderWidth: 1,
      marginBottom: 20,
      alignSelf: 'center',
      alignItems: 'center'
    },
    showModalButtonText:{
      color: 'black',
      fontSize: 32
    },
    listItemsContainer: {
      paddingTop: 30,
      flexDirection: 'column',
      alignItems: 'center'
    }
});

export default styles;