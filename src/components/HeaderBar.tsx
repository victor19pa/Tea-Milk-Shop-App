import React from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { icons } from '../constants';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import { toggleTheme } from '../stores/themActions';

const HeaderBar = ({ appTheme, toggleTheme }: any) => {

  function toggleThemeHandler() {
    if (appTheme.name == 'light') {
      toggleTheme('dark')
    } else {
      toggleTheme('light')
    }
  }
  return (
    <SafeAreaView style={styles.containerArea}>
      <View style={{ flex: 1, paddingLeft: SIZES.padding, marginTop: 10 }}>
        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Elizabeth</Text>
        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Welcome Back!</Text>
      </View>

      <TouchableOpacity
        style={[styles.touchableContainer,]}
        onPress={() => toggleThemeHandler()}
      >
        <View style={{
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center', ...(appTheme.name == "light") ? styles.selectedLightModeStyle : {}
        }}>
          <Image
            style={styles.image}
            source={icons.sunny}
          />
        </View>
        <View style={{
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center', ...(appTheme.name == "dark") ? styles.selectedNightModeStyle : {}
        }}>
          <Image
            style={styles.image}
            source={icons.night}
          />
        </View>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerArea: {
    height: 150,
    width: '100%',
    backgroundColor: COLORS.purple,
    flexDirection: 'row',
  },
  touchableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginHorizontal: SIZES.padding,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.lightPurple,
    marginTop: 10
  },
  imageContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 30,
    width: 30,
    tintColor: COLORS.white
  },
  selectedNightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.black
  },
  selectedLightModeStyle: {
    borderRadius: 20,
    backgroundColor: COLORS.yellow
  }
});

function mapStateToProps(state) {
  return {
    appTheme: state.appTheme,
    error: state.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTheme: (themeType) => { return dispatch(toggleTheme(themeType)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);