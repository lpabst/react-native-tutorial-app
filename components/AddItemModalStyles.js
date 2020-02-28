import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    modal: { 
      position: 'relative',
      width: '100%',
      height: '100%',
      flexDirection: 'row', 
      justifyContent: 'space-around', 
      alignItems: 'center' 
    },
    closeButton: {
      position: 'absolute',
      top: 10,
      left: 10
    },    
    input: {
      borderColor: 'black', 
      borderWidth: 1, 
      padding: 5, 
      width: '80%'
    }
});

export default styles;