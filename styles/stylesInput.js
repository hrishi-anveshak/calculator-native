import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
export const stylesInput = StyleSheet.create({
  textResult: {
    color: '#ffff',
    fontSize: 80,
    textAlign: 'right',
    flexShrink: 0,
    marginRight: 25,
    fontWeight: 500,
  },
  section:{
    justifyContent:'center',
    marginVertical:'auto',
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
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: height * 0.4,
  },
  inputScroll: {
    flexDirection: 'row-reverse',
  },
  inputSectionScroll: {
    height: height * 0.4,
    justifyContent: 'center',
    alignContent: 'center',

   
  },
  sectionInp: {
    alignContent: 'center',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#4a4a4a',
    justifyContent: 'center',

  },
});

export default stylesInput;
