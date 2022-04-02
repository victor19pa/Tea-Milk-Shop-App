import 'react-native-gesture-handler';
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { LogBox } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])
  
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;