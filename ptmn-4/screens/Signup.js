import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function Signup({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert('Perhatian', 'Harap isi semua kolom pendaftaran.');
      return;
    }
    Alert.alert('Pendaftaran Berhasil', 'Akun berhasil dibuat! Silakan masuk.', [
      { text: 'Masuk Sekarang', onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.icon}>📝</Text>
        <Text style={styles.title}>Daftar Akun Baru</Text>
        <Text style={styles.subtitle}>
          Buat akun untuk mengakses portofolio dan profil lengkap
        </Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nama Lengkap</Text>
          <TextInput
            style={styles.input}
            placeholder="Contoh: Lailatul Qodariah"
            placeholderTextColor="#94a3b8"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Alamat Email</Text>
          <TextInput
            style={styles.input}
            placeholder="nama@email.com"
            placeholderTextColor="#94a3b8"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Minimal 6 karakter"
            placeholderTextColor="#94a3b8"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            title="Daftar Sekarang"
            color="#0284c7"
            onPress={handleRegister}
          />
        </View>

        <View style={styles.buttonWrapperSecondary}>
          <Button
            title="Sudah Punya Akun? Kembali ke Login"
            color="#64748b"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a192f',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#112240',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: '#233554',
    alignItems: 'center',
  },
  icon: {
    fontSize: 40,
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 12.5,
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 12,
  },
  label: {
    color: '#e2e8f0',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 4,
  },
  input: {
    width: '100%',
    backgroundColor: '#0a192f',
    borderWidth: 1,
    borderColor: '#233554',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    color: '#ffffff',
    fontSize: 13,
  },
  buttonWrapper: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonWrapperSecondary: {
    width: '100%',
  },
});