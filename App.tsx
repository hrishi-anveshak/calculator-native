import React from 'react';
import {stylesInput} from './styles/stylesInput';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Home from './screens/Home';
function App(): React.JSX.Element {
  return (
    <SafeAreaProvider style={stylesInput.bg}>
      <Home />
    </SafeAreaProvider>
  );
}

export default App;
