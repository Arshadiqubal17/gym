import { View, Text, TouchableOpacity } from "react-native";

import auth from '@react-native-firebase/auth';


const Attendence = ({navigation}) =>{
  const logout = () => {
    auth().signOut();
    console.log("sign out");
    navigation.navigate("Home");
  };
  return(
   <View>
    <Text>Attendence</Text>
    <TouchableOpacity
      onPress={logout}
      style={{
        // marginRight: 10,
        marginTop: 10,
        backgroundColor: '#e32772',
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
        height:30,
        width:100,
        // marginRight:300,
        marginLeft:280,
        alignItems: 'center',
        
      }}
    >
       <Text style={{ color: 'white', fontSize: 16,  }}>Logout</Text>
      </TouchableOpacity>
   </View>
  )
}

export default Attendence;