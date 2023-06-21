// import React, { useEffect } from 'react';
// import { Button, TouchableOpacity, View, Text, Image } from 'react-native';
// // import auth from '@react-native-firebase/auth';
// // import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';


// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import firestore from '@react-native-firebase/firestore';
// // import firebase from '@react-native-firebase/app';
// GoogleSignin.configure();



// const GmailSignIn = () => {

//   useEffect(() => {
//     GoogleSignin.configure();
//   }, []);


//   const signIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       await GoogleSignin.signOut();

//       const userInfo = await GoogleSignin.signIn();
//       console.log('user info', userInfo);
  

//       if (userInfo) {
//         //arshad
//         try {
//           await AsyncStorage.setItem('userData', JSON.stringify(userInfo));
//           // check();
//           console.log('User mobile number with gmail saved in AsyncStorage.');
//           // const timestampp = firebase.firestore.FieldValue.serverTimestamp();

//           // console.log(userInfo.user.id, "id",  userInfo.user.timestamp, "timestamp", userInfo.user.name, "userName", 
//           // userInfo.user.email,"email",userInfo.user.photo, "photo");

//           // const waId = userInfo.user.id ? userInfo.user.id : '';
//           // const timestamp = timestampp;
//           // const userName = userInfo.user.name ? userInfo.user.name : '';
//           // const userEmail = userInfo.user.email ? userInfo.user.email : '';
//           // const userPhoto = userInfo.user.photo ? userInfo.user.photo : '';



//           // await firestore().collection('WhatsppALoginData').add({

//           //   waId: waId,
//           //   timestamp: timestamp,
//           //   userName: userName,
//           //   userEmail: userEmail,
//           //   userPhoto: userPhoto

//           //   // Add more data fields as per your requirement
//           // });
//           // props.navigation.replace('MainHome');

//         } catch (error) {
//           console.log('Error saving user in  gmail login in AsyncStorage: and firebase ', error);
//         }

//       }

//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         console.log("SIGN_IN_CANCELLED")
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         console.log("statusCodes.IN_PROGRESS")
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         console.log("PLAY_SERVICES_NOT_AVAILABLE")
//       } else {
//         console.log("error:", error);
//       }
//     }
//   };

//   return (
//     // <GoogleSigninButton
//     //   style={{ width: 240, height: 50 ,borderRadius: 25 }}
//     //   size={GoogleSigninButton.Size.Wide}
//     //   color={GoogleSigninButton.Color.Dark}
//     //   onPress={signIn}
//     // />
//     <View style={{ borderRadius: 40 }}>
//       {/* <GoogleSigninButton
//       style={{ width: 300, height: 60 }}
//       size={GoogleSigninButton.Size.Wide}
//       color={GoogleSigninButton.Color.Dark}
//       onPress={signIn}
//     /> */}
//       <TouchableOpacity
//         style={{
//           marginTop: 15,
//           marginBottom: 10,
//           width: 360,
//           height: 60,
//           backgroundColor: 'white',
//           borderRadius: 15,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//         onPress={signIn}
//       >
//         <View style={{ flexDirection: 'row', alignItems: 'center', fontSize: 25 }}>


//           {/* <Image
//             source={require('../Images/google.png')}
//             style={{ width: 30, height: 30, marginRight: 10 }}
//           /> */}
//           <Text style={{ color: 'black', fontSize: 18, }}>Sign in with Google</Text>
//         </View>
//       </TouchableOpacity>
      
//     </View>
//   );
// };

// export default GmailSignIn;






