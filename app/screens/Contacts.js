import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {contacts as data} from '../config/data';
import {colors} from '../config/colors';
import {ListItem} from '../components/ListItem';

class Contacts extends Component {
  handleRowPress = item => {
    return null;
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FlatList
          style={{backgroundColor: colors.background}}
          data={data}
          renderItem={({item}) => (
            <ListItem
              contact={item}
              onPressed={() => this.handleRowPress(item)}
            />
          )}
          keyExtractor={item => {
            item.email + Math.random();
          }}
        />
      </View>
    );
  }
}

export default Contacts;
