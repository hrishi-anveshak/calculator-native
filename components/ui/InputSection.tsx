import React, {useRef, useEffect} from 'react';
import {
  ScrollView as ScrollViewType,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {stylesInput} from '../../styles/stylesInput';

export default function InputSection({input, result}: any) {
  const scrollViewRef = useRef<ScrollViewType | null>(null);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({animated: true});
  }, [input]);
  return (
    <View style={stylesInput.inputSectionScroll}>
      <ScrollView ref={scrollViewRef}>
        <Text style={stylesInput.textResult}>{input}</Text>
        <View style={stylesInput.line}></View>
        <Text style={stylesInput.textResult}>{result}</Text>
      </ScrollView>
    </View>
  );
}
