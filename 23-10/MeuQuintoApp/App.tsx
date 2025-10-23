import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exemplo1 from './components/Exemplo1';
import Exemplo2 from './components/Exemplo2';
import Exemplo3 from './components/Exemplo3';
import Exemplo4 from './components/Exemplo4';
import Exemplo5 from './components/Exemplo5'
import Exemplo6 from './components/Exemplo6';

export default function App() {
  return (
    <View style={styles.container}>
   <Exemplo6/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




