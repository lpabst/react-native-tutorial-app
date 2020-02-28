import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

// components
import AddItemModal from './components/AddItemModal'
import ListItems from './components/ListItems';

// we can optionally store styles in separate file for modularity
import appStyles from './AppStyles';

export default function App() {
  const [listItems, setListItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function addListItem(inputText){
    const newItem = {
      key: Math.random().toString(),
      value: inputText
    }
    setListItems([...listItems, newItem]);
  }

  function removeListItem(itemToDelete){
    const newListItems = listItems.filter((item) => item.key !== itemToDelete.key);
    setListItems(newListItems);
  }

  return (
    <View style={appStyles.pageView}>
      <AddItemModal
       addListItem={addListItem} 
       showModal={showModal}
       closeModal={() => setShowModal(false)} 
      />

      <TouchableOpacity 
        style={appStyles.showModalButton} 
        title="+" 
        onPress={() => setShowModal(true)} 
      >
        <Text style={appStyles.showModalButtonText}>+</Text>
      </TouchableOpacity>
      <ListItems listItems={listItems} removeListItem={removeListItem} />
    </View>
  );
}

