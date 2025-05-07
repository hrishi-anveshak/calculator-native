import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
export const stylesUser = StyleSheet.create({
  text: {
    color: '#ffff',
    fontSize: 60,
    textAlign: 'right',
    fontWeight: 800,
  },
  section: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    height: height * 0.8,
    marginHorizontal: 30,
    gap: 14,
  },

  item: {
    paddingHorizontal: 5,
    width: '22%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#4a4a4a',
    height: (height * 0.8 - 14) / 6,
  },

});

export default stylesUser;
