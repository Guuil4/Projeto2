import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Primeiro from './src/componentes/primeiro';
import { styles } from './src/styles/stylesheets';
import Segundo from './src/componentes/segundo';
import Terceiro from './src/componentes/terceiro';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      <Primeiro />
      <Segundo />
      <Terceiro/>
      <StyleSheet></StyleSheet>
    </View>
  );
}