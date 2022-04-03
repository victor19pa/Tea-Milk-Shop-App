import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux';
import { HeaderBar } from '../components';
import { COLORS, SIZES } from '../constants';
import appTheme from '../constants/theme';

const Home = ({ navigation, appTheme }:any) => {

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
    backgroundColor: appTheme.backgroundColor,
  }
})

function mapStateToProps(state) {
  return {
    appTheme: state.appTheme,
    error: state.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);