import React from 'react';
import {View, Text, Image, TouchableHighlight, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles, {CHEVRON_SIZE} from './styles';
import {capitalizeFirstLetter} from '../../helpers/string';
import {colors} from '../../config/colors';

const ListItem = ({contact, onPressed}) => {
  const name = `${capitalizeFirstLetter(
    contact.name.first,
  )} ${capitalizeFirstLetter(contact.name.last)}`;
  const iconName =
    Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward';
  return (
    <TouchableHighlight onPress={onPressed} underlayColor={colors.rowUnderlay}>
      <View style={styles.row}>
        <Image
          style={styles.avatar}
          source={{uri: contact.picture.thumbnail}}
        />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{contact.email}</Text>
        </View>

        <View style={styles.chevronContainer}>
          <Icon
            name={iconName}
            size={CHEVRON_SIZE}
            color={colors.subtleText}
            style={styles.chevron}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ListItem;
