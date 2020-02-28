import React, { useState } from 'react';
import { TextInput, Button, View } from 'react-native';
import appStyles from './AppStyles';
import ListItems from './components/ListItems';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [listItems, setListItems] = useState([]);

  function addListItem(){
    const newItem = {
      key: Math.random().toString(),
      value: inputText
    }
    setListItems([...listItems, newItem]);
    setInputText('');
  }

  function removeListItem(itemToDelete){
    const newListItems = listItems.filter((item) => item.key !== itemToDelete.key);
    setListItems(newListItems);
  }

  return (
    <View style={appStyles.pageView}>
      <View style={appStyles.inputContainer}>
        <TextInput 
          placeholder="Type Here..."
          style={appStyles.input}
          onChangeText={setInputText}
          value={inputText}
        />
        <Button title="ADD" onPress={addListItem} />
      </View>
      <ListItems listItems={listItems} removeListItem={removeListItem} />
    </View>
  );
}

