import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SteamGuardScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="logo-steam" size={28} color="#fff" />
        <Text style={styles.headerText}>Safety</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={[styles.tab, styles.activeTab]}>Guard</Text>
        <Text style={styles.tab}>Confirmations</Text>
      </View>

      {/* Code */}
      <View style={styles.codeBox}>
        <Text style={styles.loggedIn}>Logged in as player</Text>
        <Text style={styles.code}>N5KCV</Text>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar} />
        </View>
      </View>

      {/* Tip */}
      <Text style={styles.tip}>
        Tip: If you don't share your PC, you can select {' '}
        <Text style={styles.linkText}>“Remember my password”</Text> when you sign in to the PC client to enter your password and authenticator code less often.
      </Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Remove Authenticator</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>My Recovery Code</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Help</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121e2b',
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
  },
  tabs: {
    flexDirection: 'row',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#334a5f',
  },
  tab: {
    marginRight: 20,
    paddingBottom: 10,
    color: '#768ca1',
    fontSize: 16,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#48b0f7',
    color: '#fff',
  },
  codeBox: {
    marginTop: 40,
    alignItems: 'center',
  },
  loggedIn: {
    color: '#bbb',
    marginBottom: 10,
  },
  code: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  progressBarContainer: {
    marginTop: 10,
    width: 140,
    height: 6,
    backgroundColor: '#2c3e50',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBar: {
    width: '50%',
    height: '100%',
    backgroundColor: '#48b0f7',
  },
  tip: {
    marginTop: 30,
    color: '#aaa',
    fontSize: 14,
    lineHeight: 20,
  },
  linkText: {
    color: '#48b0f7',
  },
  buttonContainer: {
    marginTop: 40,
    gap: 15,
  },
  button: {
    backgroundColor: '#1f2e3c',
    padding: 14,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
});
