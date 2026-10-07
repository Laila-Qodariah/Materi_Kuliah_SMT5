import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('lailatulqodariah021@gmail.com');
  const [password, setPassword] = useState('password123');

  const handleLogin = () => {
    // Berpindah ke menu utama yang langsung menampilkan tampilan CV
    navigation.replace('Main');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <View style={styles.card}>
        {/* ICON & TITLE */}
        <Text style={styles.icon}>🔐</Text>
        <Text style={styles.title}>Halaman Login</Text>
        <Text style={styles.subtitle}>
          Masuk untuk melihat tampilan Curriculum Vitae (CV) & Portfolio Mahasiswa
        </Text>

        {/* FORM INPUTS */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email / Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan email..."
            placeholderTextColor="#94a3b8"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan password..."
            placeholderTextColor="#94a3b8"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* TOMBOL MASUK KE MENU UTAMA (CV) */}
        <View style={styles.buttonWrapper}>
          <Button
            title="Masuk ke Aplikasi (Login)"
            color="#0284c7"
            onPress={handleLogin}
          />
        </View>

        {/* TOMBOL KE HALAMAN DAFTAR AKUN */}
        <View style={styles.buttonWrapperSecondary}>
          <Button
            title="Belum punya akun? Daftar di sini"
            color="#64748b"
            onPress={() => navigation.navigate('Signup')}
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
    marginBottom: 24,
    lineHeight: 18,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 14,
  },
  label: {
    color: '#e2e8f0',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
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