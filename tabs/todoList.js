import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { withTranslation } from "react-i18next";
import i18n from '../locales/i18n'



export default function todoListTab() {
  return (
    <View style={styles.container}>
      <Text>{i18n.t('list')}</Text>
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
