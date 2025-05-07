import React, {useState} from 'react';
import {TouchableOpacity, View, Text, ScrollView} from 'react-native';
import stylesUser from '../../styles/stylesUser';
import InputSection from '../ui/InputSection';
import stylesInput from '../../styles/stylesInput';
export default function UserInput() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('0');
  const values = [
    'C',
    '⌫',
    '%',
    '/',
    '7',
    '8',
    '9',
    '*',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '',
    '0',
    '.',
    '=',
  ];

  const calculate = (val: any) => {
    if (val === 'C') {
      setInput('');
      setResult('0');
    } else if (val === '⌫') {
      setInput(input.slice(0, -1));
    } else if (val === '/' && result === '0') {
      setResult((parseFloat(input) / 100).toString());
    } else if (val === '=') {
      try {
        const calculate = eval(input);
        setInput(calculate.toString());
        setResult(calculate.toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + val);
    }
  };

  return (
    <>
      {/* inputs */}
      <View style={stylesInput.inputSectionScroll}>
        <ScrollView>
          <InputSection input={input} result={result} />
        </ScrollView>
      </View>

      {/* userInput */}
      <View style={stylesUser.section}>
        {values.map((val, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={stylesUser.item}
              onPress={() => val !== '' && calculate(val)}>
              <Text style={stylesUser.text}>{val}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
}
