/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NewsItem from './NewsItem.js';

const App: () => React$Node = () => {
  return (
      <SafeAreaView>
        <View><Text style={styles.bas}> Haberler </Text></View>
        <ScrollView>
        <NewsItem type='siyaset' title='Seçimler Başlıyor Halk Tetikte' description='Oy dağılımı merak konusu'/>

        <NewsItem type='spor' title='pandemi spor müsabakalarını etkiledi' description='seyirciler üzgün..'/>

        <NewsItem type='magazin' title='hadise sevgilisiyle ayrıldı' description='hadise son noktayı koydu!'/>

        <NewsItem type='genel' title='döviz artışta' description='dolar fırladı'/>

        <NewsItem type='güncel' title='havalar hala karlı!' description='yerlere dikkat'/>

        <NewsItem type='sondakika' title='samsunda deprem!' description='4.4'/>

        <NewsItem type='eğlence' title='sahilde güzel anlar' description='köpük savaşları.'/>

        <NewsItem type='espor' title='gençlerin yeni atılımı!' description='parası çok iş zor.'/>

       
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bas:{
    fontSize: 40,
    fontWeight: "bold"
  }
});
