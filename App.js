import React, { useState } from 'react';
import { TextInput, Button, View } from 'react-native';

// components
import AddItemModal from './components/AddItemModal'
import ListItems from './components/ListItems';

// we can optionally store styles in separate file for modularity
import appStyles from './AppStyles';

export default function App() {
  const [listItems, setListItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

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
      {showModal && <AddItemModal addListItem={addListItem} closeModal={() => setShowModal(false)} />}

      <Button 
        style={appStyles.showModalButton} 
        title="+" 
        onPress={() => setShowModal(true)} 
      />
      <ListItems listItems={listItems} removeListItem={removeListItem} />
    </View>
  );
}

