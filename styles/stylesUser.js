import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
export const stylesUser = StyleSheet.create({
  text: {
    color: '#ffff',
    fontSize: 40,
    textAlign: 'right',
    fontWeight: 800,
  },
  section: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    height: height * 0.8,
    marginHorizontal: 5,
    gap: 8,
  },

  item: {
    paddingHorizontal: 5,
    width: '23.5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#4a4a4a',
    height: (height * 0.8 - 14) / 8,
  },
  item2 : {
    paddingHorizontal: 5,
    width: '23.5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#242423',
    height: (height * 0.8 - 14) / 8,
  },
});

export default stylesUser;
