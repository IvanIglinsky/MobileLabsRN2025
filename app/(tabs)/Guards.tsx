import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

export default function SteamGuardScreen() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar barStyle={colors.background === '#151718' ? 'light-content' : 'dark-content'} />

      <View style={styles.header}>
        <Ionicons name="logo-steam" size={28} color={colors.primary} />
        <Text style={[styles.headerText, { color: colors.text }]}>Safety</Text>
      </View>

      <View style={[styles.tabs, { borderBottomColor: colors.border }]}>
        <Text
          style={[
            styles.tab,
            styles.activeTab,
            {
              color: colors.primary,
              borderBottomColor: colors.primary,
            },
          ]}
        >
          Guard
        </Text>
        <Text style={[styles.tab, { color: colors.textSecondary }]}>
          Confirmations
        </Text>
      </View>

      <View style={styles.codeBox}>
        <Text style={[styles.loggedIn, { color: colors.textMuted }]}>
          Logged in as player
        </Text>
        <Text style={[styles.code, { color: colors.text }]}>N5KCV</Text>
        <View
          style={[
            styles.progressBarContainer,
            { backgroundColor: colors.border },
          ]}
        >
          <View
            style={[styles.progressBar, { backgroundColor: colors.primary }]}
          />
        </View>
      </View>

      <Text style={[styles.tip, { color: colors.textMuted }]}>
        Tip: If you don't share your PC, you can select{' '}
        <Text style={[styles.linkText, { color: colors.primary }]}>
          “Remember my password”
        </Text>{' '}
        when you sign in to the PC client to enter your password and
        authenticator code less often.
      </Text>

      <View style={styles.buttonContainer}>
        {['Remove Authenticator', 'My Recovery Code', 'Help'].map((label) => (
          <TouchableOpacity
            key={label}
            style={[styles.button, { backgroundColor: colors.card }]}
          >
            <Text style={[styles.buttonText, { color: colors.text }]}>
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
  },
  tabs: {
    flexDirection: 'row',
    marginTop: 20,
    borderBottomWidth: 1,
  },
  tab: {
    marginRight: 20,
    paddingBottom: 10,
    fontSize: 16,
  },
  activeTab: {
    borderBottomWidth: 3,
  },
  codeBox: {
    marginTop: 40,
    alignItems: 'center',
  },
  loggedIn: {
    marginBottom: 10,
  },
  code: {
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  progressBarContainer: {
    marginTop: 10,
    width: 140,
    height: 6,
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBar: {
    width: '50%',
    height: '100%',
  },
  tip: {
    marginTop: 30,
    fontSize: 14,
    lineHeight: 20,
  },
  linkText: {
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 40,
    gap: 15,
  },
  button: {
    padding: 14,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 16,
  },
});
