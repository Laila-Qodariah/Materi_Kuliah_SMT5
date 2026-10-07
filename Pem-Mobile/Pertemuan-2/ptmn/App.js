import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  image,
  ScrollView,
  FlatList,
  SectionList,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Switch,
  Modal,
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Platform,} from 'react-native';

const PROFILE = {
  name: "Lailatul Qodariah",
  title: "Mahasiswa Informatika",
  email: "lailatul.qodariah021@gmail.com",
  phone: '0838-5240-6452',
  location: "Cirebon",
  bio: "Mahasiswa aktif Informatika",
  avatar: "https://lh3.googleusercontent.com/a/ACg8ocITVZ65ynB7ED6SQg5paJ9alSaAqvt5TYKufLHJIQ86Vv5O4ts=s360-c-no",
  avatarOffline: "avatar.jpeg",
};

const SKILLS = [
  {id:'1', name: 'React Native', level: 90, color: '#61dafb'},
  {id:'2', name: 'Flutter', level: 75, color: '#f7df1e'},
  {id:'3', name: 'JavaScript', level: 88, color: '#e34c26'},
  {id:'4', name: 'TypeScript', level: 75, color: '#264de4'},
  {id:'5', name: 'Node.js', level: 70, color: '#306998'},
  {id:'6', name: 'Firebase', level: 82, color: '#4B8BBE'},
  {id:'7', name: 'Tailwind CSS', level: 95, color: '#FFD43B'},
]

const SECTIONS = [
  {
    title: '👜 Pengalaman Kerja',
    data: [ {
        id: 'e1',
        role: 'Senior Mobile Developer',
        company: 'PT. ABC',
        period: '2029 - Sekarang',
        desc: 'Bertanggung jawab dalam pengembangan aplikasi mobile menggunakan React Native dan Flutter, serta memimpin tim pengembang untuk mencapai target proyek.',
      }, {
        id: 'e2',
        role: 'Mobile Developer',
        company: 'PT. XYZ',
        period: '2027 - 2029',
        desc: 'Bertanggung jawab dalam pengembangan aplikasi mobile menggunakan React Native dan Flutter.',
      }
    ]
  },
  { title: '🎓 Pendidikan',
    data: [
      {
        id: 'd1',
        role: 'S1 Informatika',
        company: 'Universitas Islam Negeri Syekh Nurjati Cirebon',
        period: 'Januari 2024 - Sekarang',
        desc: 'IPK 3.75/4.00 | Skripsi: "Implementasi Algoritma Machine Learning untuk Prediksi Penyakit Jantung Menggunakan Data Kesehatan Pasien"',
      }
    ]
  }
];

const SOCIAL =[ 
  {id:'s1', name: 'GitHub', icon: '👾', url: 'https://github.com/laila-qodariah'},
  {id:'s2', name: 'Instagram', icon: '👔', url: 'https://www.instagram.com/lyl.satoru/'},
]

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
