import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';

export const CHEVRON_SIZE = 25;

export default StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.primaryText,
  },
  email: {
    fontSize: 13,
    color: colors.subtleText,
  },
  chevronContainer: {
    flexGrow: 1,
  },
  chevron: {
    alignSelf: 'flex-end',
  },
});
