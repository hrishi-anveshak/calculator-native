import React, {useState} from 'react';
import {TouchableOpacity, View, Text, ScrollView} from 'react-native';
import stylesUser from '../../styles/stylesUser';
import InputSection from '../ui/InputSection';
import stylesInput from '../../styles/stylesInput';
export default function UserInput() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('0');
  const [operator, setOperator] = useState('');
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

  // const calculate = (val: any) => {
  //   if (val === 'C') {
  //     setInput('');
  //     setResult('0');
  //   } else if (val === '⌫') {
  //     setInput(input.slice(0, -1));
  //   } else if (val === '/' && result === '0') {
  //     setResult((parseFloat(input) / 100).toString());
  //   } else if (val === '=') {
  //     try {
  //       const calculate = eval(input);
  //       setInput(calculate.toString());
  //       setResult(calculate.toString());
  //     } catch {
  //       setInput('Error');
  //     }
  //   } else {
  //     setInput(input + val);
  //   }
  // };

  const calculate = (val: any) => {
    if (val === 'C') {
      setInput('');
      setResult('0');
    } else if (val === '⌫') {
      setInput(String(input).slice(0, -1));
    } else if (val === '%' && result === '0') {
      setResult((parseFloat(input) / 100).toString());
    } else if (val === '=') {
      try {
        const valArr = input.match(/(\d*\.?\d+|\+|\-|\%|\*|\/)/g);
        const parsedValues: any = valArr?.map(item =>
          isNaN(item as any) ? item : Number(item),
        );
        function removeOperatorAtEnd(arr: (string)[]) {
          const operators = ['+', '-', '*', '/', '%'];
          if (arr.length && operators.includes(arr[arr.length - 1] as string)) {
            arr.pop();
          }
          return arr;
        }
        const cleanedValues = removeOperatorAtEnd([...parsedValues]);
        const numbers = cleanedValues
          .filter((item, index) => index % 2 === 0)
          .map(Number);
        const operators = cleanedValues.filter(
          (item, index) => index % 2 !== 0,
        );
        let cal = numbers[0];
        for (let i = 0; i < operators.length; i++) {
          const operator = operators[i];
          const num = numbers[i + 1];
          switch (operator) {
            case '+':
              cal += num;
              break;
            case '-':
              cal -= num;
              break;
            case '*':
              cal *= num;
              break;
            case '%':
              cal %= num;
              break;
            case '/':
              cal /= num;
              break;
          }
          setInput(cal.toString());
          setResult(cal.toString());
        }
      } catch (err) {
        setInput('Error');
        setResult('0');
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
          const sym = ['C', '⌫', '%', '/', '*', '-', '+', '=', '.'];
          return (
            <TouchableOpacity
              key={index}
              style={sym.includes(val) ? stylesUser.item2 : stylesUser.item}
              onPress={() => val !== '' && calculate(val)}>
              <Text style={stylesUser.text}>{val}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
}
