// import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { auth } from "../Firebase";
// import { TouchableOpacity, View , Text} from "react-native";


// const Google=()=>{
//     const googleSign=()=>{

//      const provider=new GoogleAuthProvider();
//   signInWithPopup(auth, provider)
//   .then((result) => {
//     console.log("sign in sarted")
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//     console.log("u s  s e rr", user);
//   }).catch((error) => {
//     // Handle Errors here.
//     console.log("sign in failed", error);
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
    
//     // ...
//   });
// };

// return(
//     <View>
//         <TouchableOpacity onPress={googleSign}>
//             <Text >sign in with google</Text>
//         </TouchableOpacity>
//     </View>
// )
// }

// export default Google;