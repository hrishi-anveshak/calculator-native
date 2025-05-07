import React from 'react';
import {styles} from './styles/styles';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Home from './screens/Home';
function App(): React.JSX.Element {
  return (
    <SafeAreaProvider style={styles.bg}>
      <Home />
    </SafeAreaProvider>
  );
}

export default App;
