import React from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import listItemStyles from './ListItemStyles'

export default function ListItems({listItems, removeListItem}) {
    return <View>
      <Text style={listItemStyles.listItemsTitle}>List Items</Text>
      <FlatList 
        data={listItems} 
        keyExtractor={item => item.key} 
        renderItem={({item}) => (
          <View style={listItemStyles.listItem}>
            <Text> {item.value} </Text>
            <Button title='X' onPress={() => removeListItem(item)} />
          </View>
        )}
      >
      </FlatList>
    </View>
}