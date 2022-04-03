import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { HeaderBar } from '../components';
import { COLORS, SIZES } from '../constants';

const Home = ({ navigation }:any) => {


  return (
    <View style={styles.container}>
      <HeaderBar />

      <ScrollView style={styles.scrollContainer}>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer:{
    flex:1,
    marginTop: -25,
    borderTopLeftRadius: SIZES.radius * 2,
    borderTopRightRadius: SIZES.radius *2,
    backgroundColor: COLORS.secondary,
  }
})

export default Home