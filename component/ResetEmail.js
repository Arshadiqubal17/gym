// import {sendPasswordResetEmail } from "firebase/auth";
// import { auth } from "../Firebase";
// import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
// import { useState } from "react";
// const ResetEmail=({navigation})=>{
//     // const [resetEmail, setResetEmail] = useState();
//     // const [state, setState] = useState(false);

// //  const Forget=()=>{

    
// // sendPasswordResetEmail(auth, resetEmail)
// //   .then(() => {
// //     // Password reset email sent!
// //     // ..
// //     console.log("Password reset email sent");
// //   })
// //   .catch((error) => {
// //     console.log("error reset email not sent", error);
// //     const errorCode = error.code;
// //     const errorMessage = error.message;
// //     // ..
// //   });

// // }
// const handlePress = () => {
//   navigation.navigate('ResetEmailConfirm')
//   }


// return(
//     <View style={{topMargin:'80'}}>
//         <TouchableOpacity style={styles.butt} onPress={handlePress}>
//             <Text style={{color: 'white', fontSize: 18}}>Forget Password</Text>
//         </TouchableOpacity>
//       </View>
// )

// }

// const styles = StyleSheet.create({
   
//     butt:{
//       marginTop: 15,
//       width: 300,
//       height: 60,
//       backgroundColor: '#e32772',
//       borderRadius: 15,
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginLeft:45
//     }
//   });

// export default ResetEmail;
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ResetEmail = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('ResetEmailConfirm');
  };

  return (
    <View style={{ marginTop: 40 }}>
      <TouchableOpacity style={styles.butt} onPress={handlePress}>
        <Text style={{ color: 'white', fontSize: 18 }}>Forget Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  butt: {
    
    width: 280,
    height: 60,
    backgroundColor: '#e32772',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
  },
});

export default ResetEmail;
