import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import Seluruh Layar (Screens)
import Login from './screens/Login';
import Signup from './screens/Signup';
import CVScreen from './screens/CVScreen';
import ProfileScreen from './screens/ProfileScreen';
import AboutScreen from './screens/AboutScreen';

// Inisialisasi Masing-Masing Navigator
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// 1. TINGKAT TERDALAM: Bottom Tab Navigator (CV & Profil)
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Header sudah ditangani oleh Drawer Navigator
        tabBarActiveTintColor: '#38bdf8',
        tabBarInactiveTintColor: '#94a3b8',
        tabBarStyle: {
          backgroundColor: '#112240',
          borderTopColor: '#233554',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="CVTab"
        component={CVScreen}
        options={{
          title: 'Curriculum Vitae',
          tabBarLabel: 'CV',
          tabBarIcon: () => <Text style={{ fontSize: 18 }}>📄</Text>,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          title: 'Profil Mahasiswa',
          tabBarLabel: 'Profil',
          tabBarIcon: () => <Text style={{ fontSize: 18 }}>👤</Text>,
        }}
      />
    </Tab.Navigator>
  );
}

// 2. TINGKAT KEDUA: Drawer Navigator (Membungkus Tab Navigator + Halaman Tentang)
function MainDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#0a192f',
          width: 260,
        },
        drawerActiveTintColor: '#38bdf8',
        drawerInactiveTintColor: '#94a3b8',
        drawerActiveBackgroundColor: 'rgba(56, 189, 248, 0.1)',
        headerStyle: {
          backgroundColor: '#112240',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={BottomTabs}
        options={{
          drawerLabel: 'Curriculum Vitae (CV)',
          title: 'CV - Lailatul Qodariah',
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerLabel: 'Tentang Aplikasi',
          title: 'Tentang Aplikasi',
        }}
      />
    </Drawer.Navigator>
  );
}

// 3. TINGKAT TERLUAR: Root Stack Navigator (Mengatur Login -> Signup -> Menu Utama / CV)
export default function App() {
  const content = (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Alur Autentikasi (Stack Navigation) */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            title: 'Daftar Akun Baru',
            headerStyle: { backgroundColor: '#112240' },
            headerTintColor: '#ffffff',
          }}
        />

        {/* Layar Utama Aplikasi (Drawer + Bottom Tabs Bersarang yang langsung menampilkan CV) */}
        <Stack.Screen
          name="Main"
          component={MainDrawer}
          options={{ headerShown: false }}
        />

        {/* Rute CV langsung jika diakses langsung via Stack */}
        <Stack.Screen
          name="CV"
          component={CVScreen}
          options={{
            title: 'Curriculum Vitae',
            headerStyle: { backgroundColor: '#112240' },
            headerTintColor: '#ffffff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

  // Jika dibuka di Web/Browser, tampilkan mockup border HP
  if (Platform.OS === 'web') {
    return (
      <View style={styles.webBackground}>
        <View style={styles.phoneFrame}>
          {/* Notch / kamera atas */}
          <View style={styles.notch} />
          {/* Layar aplikasi */}
          <View style={styles.screenArea}>
            {content}
          </View>
        </View>
      </View>
    );
  }

  // Jika di HP langsung (Expo Go), layar penuh
  return content;
}

const styles = StyleSheet.create({
  webBackground: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: 16,
  },
  phoneFrame: {
    width: 390,
    height: 780,
    maxHeight: '94vh',
    backgroundColor: '#0a192f',
    borderRadius: 45,
    borderWidth: 10,
    borderColor: '#1e293b',
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.35,
    shadowRadius: 25,
    elevation: 15,
  },
  notch: {
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    width: 120,
    height: 22,
    backgroundColor: '#1e293b',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    zIndex: 999,
  },
  screenArea: {
    flex: 1,
  },
});