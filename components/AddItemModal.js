import React, {useState} from 'react';
import {Modal, View, Button, TextInput} from 'react-native';
import addItemModalStyles from './AddItemModalStyles'

export default function AddItemModal({addListItem, closeModal, showModal}) {
    console.log(showModal)
    const [inputText, setInputText] = useState('');

    function addItem(){
        addListItem(inputText);
        setInputText('');
        closeModal();
    }

    return (
        <Modal visible={showModal} animationType='slide'>
            <View style={addItemModalStyles.modal}>
                <View style={addItemModalStyles.closeButton}>
                    <Button 
                        title='X' 
                        onPress={closeModal} 
                        color='black'
                    />
                </View>
                <TextInput 
                    placeholder="Type Here..."
                    style={addItemModalStyles.input}
                    onChangeText={setInputText}
                    value={inputText}
                />
                <Button title="ADD" onPress={addItem} />
            </View>
        </Modal>
    )
}