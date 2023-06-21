// import { signInWithRedirect, GoogleAuthProvider, getRedirectResult  } from "firebase/auth";
// import { auth } from "../Firebase";
// import { useEffect } from "react";
// import { Text, TouchableOpacity, View } from "react-native";


// const Googlea = () =>{
//     const provider = new GoogleAuthProvider();

//     useEffect (()=>{

//         // getRedirectResult(auth)
//         // .then((result) => {
//         //   // This gives you a Google Access Token. You can use it to access Google APIs.
//         //   const credential = GoogleAuthProvider.credentialFromResult(result);
//         //   const token = credential.accessToken;
      
//         //   // The signed-in user info.
//         //   const user = result.user;
//         //   // IdP data available using getAdditionalUserInfo(result)
//         //   // ...
//         // }).catch((error) => {
//         //   // Handle Errors here.
//         //   const errorCode = error.code;
//         //   const errorMessage = error.message;
//         //   // The email of the user's account used.
//         //   const email = error.customData.email;
//         //   // The AuthCredential type that was used.
//         //   const credential = GoogleAuthProvider.credentialFromError(error);
//         //   // ...
//         // });
//     }, []);





//      const googleRedirect = () =>{
//     signInWithRedirect(auth, provider);

    
//      }
//     return(
//         <View>

//             <TouchableOpacity onPress={googleRedirect}>
//                 <Text>sign in with googleaa</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// export default Googlea;