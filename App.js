import React, { useState } from 'react';
import { TextInput, Text, Button, View, FlatList } from 'react-native';
import appStyles from './AppStyles'

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
      <FlatList 
        data={listItems} 
        keyExtractor={item => item.key} 
        renderItem={({item}) => (
          <View style={appStyles.listItem}>
            <Text> {item.value} </Text>
            <Button title='X' onPress={() => removeListItem(item)} />
          </View>
        )}
      >
      </FlatList>
    </View>
  );
}

