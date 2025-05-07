import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {stylesInput} from '../../styles/stylesInput';
export default function InputSection({input, result}: any) {
  return (
    <View>
      <Text style={stylesInput.textResult}>{input}  </Text>
      <View style={stylesInput.line}></View>
      <Text style={stylesInput.textResult}>{result}  </Text>
    </View>
  );
}
