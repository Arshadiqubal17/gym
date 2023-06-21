import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AddNew from './component/AddNew';
import Dashboard from './component/Dashboard';
import Attendence from './component/Attendence';



// import { TouchableOpacity,Text } from 'react-native';
const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {

//   const logout=()=>{
//     auth.signOut();
//     console.log("sign out")
//     setProfile(null);
// }






  return (
    // <NavigationContainer>
      <Tab.Navigator  >
        
        <Tab.Screen name="AddMember" component={AddNew} />
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Attendence" component={Attendence} />
      </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default TabNavigation;
