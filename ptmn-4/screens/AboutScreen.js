import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.icon}>📱</Text>
        <Text style={styles.title}>Tentang Aplikasi</Text>
        <Text style={styles.badge}>Praktikum 4: Nested Navigation</Text>

        <Text style={styles.desc}>
          Aplikasi ini memadukan 3 level navigasi di React Native:
        </Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>1. ⚡ Stack Navigation (Login, Signup, Main)</Text>
          <Text style={styles.listItem}>2. 🗂️ Drawer Navigation (Side Menu Navigasi)</Text>
          <Text style={styles.listItem}>3. 📑 Bottom Tab Navigation (CV & Profil)</Text>
        </View>

        <View style={styles.logoutWrapper}>
          <Button
            title="LOGOUT"
            color="#ef4444"
            onPress={() => navigation.replace('Login')}
          />
        </View>
      </View>
    </View>
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
    backgroundColor: '#112240',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#233554',
  },
  icon: {
    fontSize: 42,
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#ffffff',
  },
  badge: {
    backgroundColor: 'rgba(2, 132, 199, 0.2)',
    color: '#38bdf8',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 16,
  },
  desc: {
    fontSize: 13,
    fontWeight: '600',
    color: '#cbd5e1',
    textAlign: 'center',
    marginBottom: 10,
  },
  list: {
    width: '100%',
    backgroundColor: '#0a192f',
    padding: 12,
    borderRadius: 12,
    marginBottom: 24,
  },
  listItem: {
    color: '#94a3b8',
    fontSize: 12,
    marginVertical: 3,
  },
  logoutWrapper: {
    width: '100%',
  },
});
