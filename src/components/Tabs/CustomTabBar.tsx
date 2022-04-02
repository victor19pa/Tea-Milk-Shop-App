import { BottomTabBar } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View } from 'react-native'
import { COLORS } from '../../constants'

const CustomTabBar = ({ props }: any) => {
  return (
    <View>
      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 30, backgroundColor: COLORS.gray3 }}>
        <BottomTabBar
          {...props}
        />
      </View>
    </View>
  )
}

export default CustomTabBar