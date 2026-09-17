import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Lailatul Qodariah</Text>
      <Text>Cirebon, 02 oktober 2006</Text>
      <Text>Berhasil menggapai semua kemauanku</Text>
      <Text>Menyusun plan biar cita-citaku bisa tergapai</Text>
      <StatusBar style="auto" />
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
