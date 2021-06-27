import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withTranslation } from "react-i18next";
import i18n from '../locales/i18n';
import * as mydb from '../data/database';

export default function todoCalendarTab() {
  return (
    <View style={styles.container}>
      <Text>{i18n.t('calendar')}</Text>
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
  topSide: {
    flex: 1,
    backgroundColor: '#afa',
    //alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSide: {
    flex: 5,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
