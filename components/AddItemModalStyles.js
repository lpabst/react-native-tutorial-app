import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    modal: { 
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      flexDirection: 'row', 
      justifyContent: 'space-around', 
      alignItems: 'center' 
    },
    closeButton: {
      position: 'absolute',
      top: 20,
      right: 15
    },    
    input: {
      borderColor: 'black', 
      borderWidth: 1, 
      padding: 5, 
      width: '80%'
    }
});

export default styles;