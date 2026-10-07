import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
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
  StyleSheet,
  Alert,
  Platform,
  Linking,
  SafeAreaView,
  KeyboardAvoidingView,
  Animated,
} from 'react-native';

// ── DATA PROFIL & KONTEN CV ───────────────────────────────────
const PROFILE = {
  name: 'Lailatul Qodariah',
  title: 'Mahasiswa Informatika',
  university: 'Universitas Islam Negeri Syekh Nurjati Cirebon',
  nim: '2208101001',
  email: 'lailatulqodariah021@gmail.com',
  phone: '0838-5240-6452',
  location: 'Cirebon, Jawa Barat',
  bio: 'Mahasiswa aktif Informatika yang berfokus pada pengembangan aplikasi mobile dan web. Memiliki kemampuan problem-solving yang baik serta aktif mengeksplorasi aplikasi yang interaktif, efisien, dan berpusat pada pengalaman pengguna.',
  avatar: 'https://lh3.googleusercontent.com/a/ACg8ocITVZ65ynB7ED6SQg5paJ9alSaAqvt5TYKufLHJIQ86Vv5O4ts=s521-c-no',
};

const SKILLS = [
  { id: '1', name: 'React Native', level: 90, color: '#38bdf8' },
  { id: '2', name: 'Flutter', level: 75, color: '#0284c7' },
  { id: '3', name: 'JavaScript & ES6', level: 88, color: '#f59e0b' },
  { id: '4', name: 'TypeScript', level: 78, color: '#3b82f6' },
  { id: '5', name: 'Editing Video & Foto', level: 92, color: '#ec4899' },
  { id: '6', name: 'HTML5, CSS & UI/UX', level: 85, color: '#10b981' },
];

const SECTIONS = [
  {
    title: '👜 Pengalaman Kerja & Proyek',
    data: [
      {
        id: 'e1',
        role: 'Photo Editor',
        company: 'inDICate',
        period: '2026 - Sekarang (Event-based)',
        desc: 'Bertanggung jawab dalam pengelolaan sistem photobooth, melakukan editing dan peningkatan kualitas foto secara real-time pada berbagai acara.',
      },
      {
        id: 'e2',
        role: 'Junior Mobile App Developer',
        company: 'Proyek Aplikasi Kampus',
        period: '2025 - 2026',
        desc: 'Mengembangkan prototipe aplikasi mobile berbasis React Native dan Expo untuk kebutuhan manajemen kegiatan mahasiswa.',
      },
    ],
  },
  {
    title: '🎓 Riwayat Pendidikan',
    data: [
      {
        id: 'd1',
        role: 'S1 Informatika',
        company: 'UIN Siber Syekh Nurjati Cirebon',
        period: '2024 - Sekarang',
        desc: 'Fokus pada Rekayasa Perangkat Lunak, Pemrograman Mobile, dan Sistem Basis Data. Aktif berorganisasi.',
      },
      {
        id: 'd2',
        role: 'Pendidikan Menengah Atas',
        company: 'Madrasah Aliyah Mertapada',
        period: '2021 - 2024',
        desc: 'Lulus dengan konsentrasi akademik yang baik dan aktif dalam kegiatan ekstrakurikuler sekolah.',
      },
    ],
  },
  {
    title: '📌 Organisasi & Kepanitiaan',
    data: [
      {
        id: 'o1',
        role: 'Koordinator PDD (Publikasi, Dekorasi, Dokumentasi)',
        company: 'HIMAFOR - Acara FORTATION',
        period: '2026 - Sekarang',
        desc: 'Memimpin tim PDD dalam merancang strategi publikasi digital, visual branding, dan dokumentasi resmi kegiatan.',
      },
      {
        id: 'o2',
        role: 'Anggota Tim PDD',
        company: 'HIMAFOR - Acara ROMANTICS',
        period: '2026',
        desc: 'Mendesain aset publikasi sosial media serta bertanggung jawab terhadap dokumentasi foto dan video.',
      },
      {
        id: 'o3',
        role: 'Divisi Kreatif & Dokumentasi',
        company: 'HIMAFOR - Informatics Fair',
        period: '2026',
        desc: 'Menyiapkan materi visual banner, merchandise, dan liputan live event Informatics Fair.',
      },
    ],
  },
];

const SOCIAL = [
  { id: 's1', label: 'GitHub', icon: '👾', url: 'https://github.com/laila-qodariah' },
  { id: 's2', label: 'Instagram', icon: '📷', url: 'https://www.instagram.com/lyl.satoru/' },
  { id: 's3', label: 'Email', icon: '✉️', url: 'mailto:lailatulqodariah021@gmail.com' },
];

const COLORS = {
  bg: '#0a192f',
  card: '#112240',
  cardBorder: '#233554',
  accent: '#0284c7',
  accentLight: '#38bdf8',
  accentGold: '#f59e0b',
  text: '#f8fafc',
  textMuted: '#94a3b8',
  textDim: '#64748b',
  success: '#22c55e',
  white: '#ffffff',
};

export default function CVScreen({ navigation }) {
  const [openToWork, setOpenToWork] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'skills', 'experience', 'contact'
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [pressing, setPressing] = useState(false);

  // Animasi
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.7)).current;
  const rippleAnim = useRef(new Animated.Value(1)).current;
  const rippleOpacity = useRef(new Animated.Value(0.7)).current;

  useEffect(() => {
    // Animasi muncul profil
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();

    // Animasi denyut / ripple foto profil
    Animated.loop(
      Animated.parallel([
        Animated.timing(rippleAnim, {
          toValue: 1.45,
          duration: 2200,
          useNativeDriver: true,
        }),
        Animated.timing(rippleOpacity, {
          toValue: 0,
          duration: 2200,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const handleCardPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleOpenLink = (url) => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert('Link Eksternal', url);
        }
      })
      .catch(() => Alert.alert('Link Eksternal', url));
  };

  const handleSend = () => {
    if (!senderName.trim() || !message.trim()) {
      Alert.alert('Peringatan', 'Silakan isi nama dan pesan Anda terlebih dahulu.');
      return;
    }

    setSending(true);
    setTimeout(() => {
      setSending(false);
      Alert.alert('Berhasil Terkirim', `Terima kasih ${senderName}! Pesan Anda telah diterima.`);
      setSenderName('');
      setMessage('');
    }, 1200);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* HEADER BAR CV */}
      <View style={styles.headerBar}>
        <View>
          <Text style={styles.headerTitle}>📄 Curriculum Vitae</Text>
          <Text style={styles.headerSubtitle}>Profil Resmi Mahasiswa</Text>
        </View>

        <View style={styles.statusToggle}>
          <Text style={styles.statusLabel}>
            {openToWork ? '🟢 Aktif' : '🔴 Sibuk'}
          </Text>
          <Switch
            value={openToWork}
            onValueChange={setOpenToWork}
            trackColor={{ false: '#334155', true: COLORS.accent }}
            thumbColor={openToWork ? COLORS.accentLight : COLORS.textMuted}
          />
        </View>
      </View>

      {/* FILTER TABS */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'all' && styles.tabItemActive]}
          onPress={() => setActiveTab('all')}
        >
          <Text style={[styles.tabItemText, activeTab === 'all' && styles.tabItemTextActive]}>
            🌟 Semua
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'skills' && styles.tabItemActive]}
          onPress={() => setActiveTab('skills')}
        >
          <Text style={[styles.tabItemText, activeTab === 'skills' && styles.tabItemTextActive]}>
            🛠️ Skill
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'experience' && styles.tabItemActive]}
          onPress={() => setActiveTab('experience')}
        >
          <Text style={[styles.tabItemText, activeTab === 'experience' && styles.tabItemTextActive]}>
            💼 Riwayat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'contact' && styles.tabItemActive]}
          onPress={() => setActiveTab('contact')}
        >
          <Text style={[styles.tabItemText, activeTab === 'contact' && styles.tabItemTextActive]}>
            💬 Kontak
          </Text>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* PROFILE CARD */}
          {(activeTab === 'all' || activeTab === 'skills') && (
            <View style={styles.profileCard}>
              <View style={styles.avatarWrapper}>
                {/* Ripple Effect */}
                <Animated.View
                  style={[
                    styles.avatarRipple,
                    {
                      transform: [{ scale: rippleAnim }],
                      opacity: rippleOpacity,
                    },
                  ]}
                />
                <Animated.View
                  style={{
                    opacity: fadeAnim,
                    transform: [{ scale: scaleAnim }],
                  }}
                >
                  <Image
                    source={{ uri: PROFILE.avatar }}
                    style={styles.avatarImage}
                    defaultSource={require('../assets/images/react-logo.png')}
                  />
                </Animated.View>
              </View>

              {openToWork && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>✨ Siap Berkolaborasi / Open to Work</Text>
                </View>
              )}

              <Text style={styles.nameText}>{PROFILE.name}</Text>
              <Text style={styles.titleText}>{PROFILE.title}</Text>
              <Text style={styles.univText}>🏛️ {PROFILE.university}</Text>
              <Text style={styles.bioText}>{PROFILE.bio}</Text>

              {/* QUICK INFO */}
              <View style={styles.infoRow}>
                <Text style={styles.infoItem}>📧 {PROFILE.email}</Text>
                <Text style={styles.infoItem}>📍 {PROFILE.location}</Text>
                <Text style={styles.infoItem}>📱 {PROFILE.phone}</Text>
              </View>

              {/* SOCIAL MEDIA BUTTONS */}
              <View style={styles.socialRow}>
                {SOCIAL.map((s) => (
                  <TouchableOpacity
                    key={s.id}
                    style={styles.socialBtn}
                    onPress={() => handleOpenLink(s.url)}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.socialIcon}>{s.icon}</Text>
                    <Text style={styles.socialLabel}>{s.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              {/* TOMBOL UNDUH CV */}
              <Pressable
                style={({ pressed }) => [
                  styles.downloadBtn,
                  pressed && styles.downloadBtnPressed,
                ]}
                onPressIn={() => setPressing(true)}
                onPressOut={() => setPressing(false)}
                onPress={() => Alert.alert('Unduh CV', 'Mengunduh CV Lailatul Qodariah (PDF)...')}
              >
                <Text style={styles.downloadBtnText}>
                  {pressing ? '⏳ Menyiapkan File...' : '📥 Unduh Curriculum Vitae (PDF)'}
                </Text>
              </Pressable>
            </View>
          )}

          {/* KEAHLIAN / SKILLS */}
          {(activeTab === 'all' || activeTab === 'skills') && (
            <View style={styles.sectionCard}>
              <View style={styles.sectionHeaderLine}>
                <Text style={styles.sectionTitle}>🛠️ Keahlian & Teknologi</Text>
                <Text style={styles.sectionBadge}>{SKILLS.length} Keahlian</Text>
              </View>
              <Text style={styles.sectionSub}>Kompetensi teknis dan soft skills</Text>

              <FlatList
                data={SKILLS}
                keyExtractor={(item) => item.id}
                scrollEnabled={false}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                renderItem={({ item }) => (
                  <View style={styles.skillItem}>
                    <View style={styles.skillTop}>
                      <Text style={styles.skillName}>{item.name}</Text>
                      <Text style={[styles.skillPercent, { color: item.color }]}>
                        {item.level}%
                      </Text>
                    </View>
                    <View style={styles.skillBarBg}>
                      <View
                        style={[
                          styles.skillBarFill,
                          { width: `${item.level}%`, backgroundColor: item.color },
                        ]}
                      />
                    </View>
                  </View>
                )}
              />
            </View>
          )}

          {/* RIWAYAT (PENGALAMAN & PENDIDIKAN) */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <View style={styles.sectionCard}>
              <View style={styles.sectionHeaderLine}>
                <Text style={styles.sectionTitle}>💼 Riwayat & Pengalaman</Text>
              </View>
              <Text style={styles.sectionSub}>Ketuk kartu untuk melihat deskripsi detail</Text>

              <SectionList
                sections={SECTIONS}
                keyExtractor={(item) => item.id}
                scrollEnabled={false}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
                renderSectionHeader={({ section: { title } }) => (
                  <View style={styles.timelineGroupHeader}>
                    <Text style={styles.timelineGroupTitle}>{title}</Text>
                  </View>
                )}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.timelineCard}
                    onPress={() => handleCardPress(item)}
                    activeOpacity={0.7}
                  >
                    <View style={styles.timelineDot} />
                    <View style={styles.timelineContent}>
                      <Text style={styles.timelineRole}>{item.role}</Text>
                      <Text style={styles.timelineCompany}>{item.company}</Text>
                      <Text style={styles.timelinePeriod}>🗓️ {item.period}</Text>
                      <Text style={styles.timelineTapHint}>Ketuk untuk detail →</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          )}

          {/* FORM HUBUNGI SAYA */}
          {(activeTab === 'all' || activeTab === 'contact') && (
            <View style={styles.sectionCard}>
              <View style={styles.sectionHeaderLine}>
                <Text style={styles.sectionTitle}>💬 Hubungi Saya</Text>
              </View>
              <Text style={styles.sectionSub}>Kirimkan pesan atau tawaran kolaborasi</Text>

              <TextInput
                style={styles.input}
                placeholder="Nama Anda"
                placeholderTextColor={COLORS.textDim}
                value={senderName}
                onChangeText={setSenderName}
                editable={!sending}
              />

              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Tuliskan pesan atau pesan kolaborasi..."
                placeholderTextColor={COLORS.textDim}
                value={message}
                onChangeText={setMessage}
                multiline
                numberOfLines={4}
                editable={!sending}
              />

              {sending ? (
                <View style={styles.loadingBox}>
                  <ActivityIndicator size="small" color={COLORS.accentLight} />
                  <Text style={styles.loadingText}>Mengirim pesan Anda...</Text>
                </View>
              ) : (
                <Button
                  title="✉️ Kirim Pesan Sekarang"
                  color={COLORS.accent}
                  onPress={handleSend}
                />
              )}
            </View>
          )}

          {/* TOMBOL LOGOUT / KEMBALI KE LOGIN */}
          <View style={styles.footerLogoutBox}>
            <Button
              title="🚪 Keluar ke Halaman Login"
              color="#ef4444"
              onPress={() => {
                Alert.alert('Konfirmasi', 'Apakah Anda ingin keluar ke halaman login?', [
                  { text: 'Batal', style: 'cancel' },
                  { text: 'Keluar', onPress: () => navigation.replace('Login') },
                ]);
              }}
            />
          </View>

          <View style={{ height: 30 }} />
        </ScrollView>
      </KeyboardAvoidingView>

      {/* MODAL DETAIL RIWAYAT */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {selectedItem && (
              <>
                <Text style={styles.modalTitle}>{selectedItem.role}</Text>
                <Text style={styles.modalCompany}>{selectedItem.company}</Text>
                <Text style={styles.modalPeriod}>🗓️ {selectedItem.period}</Text>
                <View style={styles.modalDivider} />
                <Text style={styles.modalDesc}>{selectedItem.desc}</Text>
              </>
            )}

            <TouchableOpacity
              style={styles.modalCloseBtn}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseBtnText}>✕ Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  headerBar: {
    backgroundColor: COLORS.card,
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.cardBorder,
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: COLORS.textMuted,
    fontSize: 11,
    marginTop: 2,
  },
  statusToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statusLabel: {
    color: COLORS.accentLight,
    fontSize: 12,
    fontWeight: '600',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.cardBorder,
    justifyContent: 'space-between',
  },
  tabItem: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  tabItemActive: {
    backgroundColor: COLORS.accent,
  },
  tabItemText: {
    color: COLORS.textMuted,
    fontSize: 12,
    fontWeight: '600',
  },
  tabItemTextActive: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  profileCard: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    padding: 22,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    marginBottom: 16,
  },
  avatarWrapper: {
    width: 124,
    height: 124,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    position: 'relative',
  },
  avatarRipple: {
    position: 'absolute',
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: COLORS.accentLight,
    backgroundColor: COLORS.accent,
  },
  avatarImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: COLORS.accentLight,
  },
  badge: {
    backgroundColor: 'rgba(34, 197, 94, 0.15)',
    borderColor: COLORS.success,
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginBottom: 10,
  },
  badgeText: {
    color: COLORS.success,
    fontSize: 11,
    fontWeight: 'bold',
  },
  nameText: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleText: {
    color: COLORS.accentLight,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 2,
    marginBottom: 4,
  },
  univText: {
    color: COLORS.accentGold,
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 12,
  },
  bioText: {
    color: COLORS.textMuted,
    fontSize: 12.5,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 16,
  },
  infoRow: {
    width: '100%',
    backgroundColor: '#0a192f',
    borderRadius: 12,
    padding: 12,
    gap: 6,
    marginBottom: 16,
  },
  infoItem: {
    color: COLORS.text,
    fontSize: 12,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 18,
  },
  socialBtn: {
    backgroundColor: '#0a192f',
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
    alignItems: 'center',
  },
  socialIcon: {
    fontSize: 16,
    marginBottom: 2,
  },
  socialLabel: {
    color: COLORS.accentLight,
    fontSize: 11,
    fontWeight: '600',
  },
  downloadBtn: {
    backgroundColor: COLORS.accent,
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  downloadBtnPressed: {
    backgroundColor: '#0369a1',
  },
  downloadBtnText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 13,
  },
  sectionCard: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    marginBottom: 16,
  },
  sectionHeaderLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionBadge: {
    backgroundColor: COLORS.cardBorder,
    color: COLORS.accentLight,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    fontSize: 11,
    fontWeight: '600',
  },
  sectionSub: {
    color: COLORS.textDim,
    fontSize: 11,
    marginTop: 2,
    marginBottom: 14,
  },
  skillItem: {
    backgroundColor: '#0a192f',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  skillTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  skillName: {
    color: COLORS.text,
    fontSize: 13,
    fontWeight: '600',
  },
  skillPercent: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  skillBarBg: {
    height: 6,
    backgroundColor: '#1e293b',
    borderRadius: 3,
    overflow: 'hidden',
  },
  skillBarFill: {
    height: 6,
    borderRadius: 3,
  },
  timelineGroupHeader: {
    backgroundColor: '#0a192f',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.accent,
  },
  timelineGroupTitle: {
    color: COLORS.accentLight,
    fontSize: 12,
    fontWeight: 'bold',
  },
  timelineCard: {
    flexDirection: 'row',
    backgroundColor: '#0a192f',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
  },
  timelineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.accent,
    marginTop: 6,
    marginRight: 10,
  },
  timelineContent: {
    flex: 1,
  },
  timelineRole: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: 'bold',
  },
  timelineCompany: {
    color: COLORS.accentLight,
    fontSize: 12,
    marginTop: 2,
  },
  timelinePeriod: {
    color: COLORS.textDim,
    fontSize: 11,
    marginTop: 2,
  },
  timelineTapHint: {
    color: COLORS.accentGold,
    fontSize: 10.5,
    marginTop: 4,
  },
  input: {
    backgroundColor: '#0a192f',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: COLORS.text,
    fontSize: 13,
    marginBottom: 10,
  },
  textArea: {
    height: 90,
    textAlignVertical: 'top',
  },
  loadingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 8,
  },
  loadingText: {
    color: COLORS.accentLight,
    fontSize: 12,
  },
  footerLogoutBox: {
    marginVertical: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: COLORS.card,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    borderTopWidth: 3,
    borderColor: COLORS.accent,
  },
  modalTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalCompany: {
    color: COLORS.accentLight,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
  },
  modalPeriod: {
    color: COLORS.textDim,
    fontSize: 12,
    marginTop: 2,
    marginBottom: 12,
  },
  modalDivider: {
    height: 1,
    backgroundColor: COLORS.cardBorder,
    marginBottom: 14,
  },
  modalDesc: {
    color: COLORS.text,
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 20,
  },
  modalCloseBtn: {
    backgroundColor: COLORS.accent,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalCloseBtnText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 13,
  },
});
