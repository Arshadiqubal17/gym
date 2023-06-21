

import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import Signin from './component/signin';
import ResetEmailConfirm from './component/ResetEmailConfirm';
import ResetEmail from './component/ResetEmail';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const AllRoutes = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <NavigationContainer> */}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Signin} />
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
          <Stack.Screen name="ResetEmail" component={ResetEmail} />
          <Stack.Screen name="ResetEmailConfirm" component={ResetEmailConfirm} />
        </Stack.Navigator>
      {/* </NavigationContainer> */}
    </SafeAreaView>
  );
};

export default AllRoutes;






