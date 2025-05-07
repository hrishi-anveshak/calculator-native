import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
export const stylesInput = StyleSheet.create({
  textResult: {
    color: '#ffff',
    fontSize: 70,
    textAlign: 'right',
    flexShrink: 0,
    marginRight: 25,
  },
  inputs: {
    padding: 20,
  },
  highlight: {
    fontWeight: '700',
  },
  bg: {
    backgroundColor: '#000',
    marginTop: 50,
  },
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    alignContent: 'center',
    alignItems: 'center',
    height: height * 0.2,
  },
  inputScroll: {
    flexDirection: 'row-reverse',
  },
  inputSectionScroll: {
    height: height * 0.2,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#4a4a4a',
  },
});

export default stylesInput;
