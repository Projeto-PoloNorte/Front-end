import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Login from './src/Screens/Login'
import ForgotPassword from './src/Screens/ForgotPassword'
import ChangePassword from './src/Screens/ChangePassword'
import ScanScreen from './src/Screens/ScanScreen'
import Details from './src/Screens/Details'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"login"} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="forgot" component={ForgotPassword} />
        <Stack.Screen name="change" component={ChangePassword} />
        <Stack.Screen name="scan" component={ScanScreen} />
        <Stack.Screen name="details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
