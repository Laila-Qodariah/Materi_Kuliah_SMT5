import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

export default function ProfileScreen({ navigation }) {
  const profile = {
    name: 'Lailatul Qodariah',
    nim: '2208101001',
    prodi: 'Informatika',
    fakultas: 'Fakultas Sains dan Teknologi',
    kampus: 'UIN Siber Syekh Nurjati Cirebon',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocITVZ65ynB7ED6SQg5paJ9alSaAqvt5TYKufLHJIQ86Vv5O4ts=s521-c-no',
    status: 'Mahasiswa Aktif (Semester 5)',
    interest: 'Mobile Programming, UI/UX Design & Front-End',
  };

  return (
    <View style={styles.container}>
      {/* KARTU IDENTITAS MAHASISWA */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderTitle}>KARTU IDENTITAS MAHASISWA</Text>
          <Text style={styles.cardHeaderSub}>{profile.kampus}</Text>
        </View>

        <View style={styles.body}>
          <Image source={{ uri: profile.avatar }} style={styles.avatar} />

          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.nim}>NIM: {profile.nim}</Text>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.label}>Program Studi:</Text>
            <Text style={styles.value}>{profile.prodi}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Fakultas:</Text>
            <Text style={styles.value}>{profile.fakultas}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Status:</Text>
            <Text style={styles.valueHighlight}>{profile.status}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Minat:</Text>
            <Text style={styles.value}>{profile.interest}</Text>
          </View>
        </View>
      </View>

      {/* SHORTCUT BUTTONS */}
      <TouchableOpacity
        style={styles.actionBtn}
        onPress={() => navigation.navigate('CVTab')}
      >
        <Text style={styles.actionBtnText}>📄 Lihat Curriculum Vitae Lengkap</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => {
          Alert.alert('Konfirmasi Logout', 'Keluar ke halaman login?', [
            { text: 'Batal', style: 'cancel' },
            { text: 'Keluar', onPress: () => navigation.replace('Login') },
          ]);
        }}
      >
        <Text style={styles.logoutBtnText}>🚪 Keluar (Logout)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a192f',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#112240',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#233554',
    overflow: 'hidden',
    marginBottom: 20,
  },
  cardHeader: {
    backgroundColor: '#0284c7',
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  cardHeaderTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  cardHeaderSub: {
    color: '#e0f2fe',
    fontSize: 11,
    marginTop: 2,
  },
  body: {
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#38bdf8',
    marginBottom: 12,
  },
  name: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  nim: {
    color: '#38bdf8',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 2,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#233554',
    marginVertical: 14,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    color: '#94a3b8',
    fontSize: 12,
  },
  value: {
    color: '#f8fafc',
    fontSize: 12,
    fontWeight: '600',
    maxWidth: '65%',
    textAlign: 'right',
  },
  valueHighlight: {
    color: '#22c55e',
    fontSize: 12,
    fontWeight: 'bold',
  },
  actionBtn: {
    width: '100%',
    backgroundColor: '#0284c7',
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  actionBtnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  logoutBtn: {
    width: '100%',
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
    borderWidth: 1,
    borderColor: '#ef4444',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutBtnText: {
    color: '#ef4444',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
