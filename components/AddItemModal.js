import React, {useState} from 'react';
import {View, Button, TextInput} from 'react-native';
import addItemModalStyles from './AddItemModalStyles'

export default function AddItemModal({addListItem, closeModal}) {
    const [inputText, setInputText] = useState('');

    return (
        <View style={addItemModalStyles.modal}>
            <Button 
                title='X' 
                onPress={closeModal} 
                style={addItemModalStyles.closeButton}
            />
            <TextInput 
            placeholder="Type Here..."
            style={addItemModalStyles.input}
            onChangeText={setInputText}
            value={inputText}
            />
            <Button title="ADD" onPress={addListItem} />
        </View>
    )
}