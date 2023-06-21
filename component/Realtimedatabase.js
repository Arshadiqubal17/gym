// import {  ref, child, get, set, update } from "firebase/database";
// import {auth, database }  from '../Firebase';
// import {View, Text, TouchableOpacity} from 'react-native'
// import { useEffect , useState} from "react";



// const Realtimedatabse = () => {
//     const[user, setUser]=useState(null);
//     console.log(auth,    "a   u  t   h  h ");
//     const dbRef = ref(database);

//  useEffect(()=>{
//     const unsubsribe= auth.onAuthStateChanged((user)=>{ setUser(user)});
//     return ()=>{
//         unsubsribe();
//     } ;
//  },[])
   
//  useEffect(()=>{
//     if(user){
//     console.log(auth.currentUser.uid);
//     // const dbRef = ref(database);
//     const userRef = child(dbRef, `Users/${auth.currentUser.uid}`);
//     get(userRef).then((snapshot) => {
//       if (snapshot.exists()) {
//         console.log("yaha dekho bhaiie")
//         console.log("startin g" ,user, "u  se  r")
//         console.log(snapshot.val());
//       } else {
//         console.log("No data available");
//       }
//     }).catch((error) => {
//       console.error(error);
//     });
// }
//  }, [user])
   
//  if(!user){
//     return(<View></View>)
//  }
//  const overwriteData = () =>{
//     set(child(dbRef, `Users/${auth.currentUser.uid}`), {
//         displayName:"arshadbhaii",  age:26})

//         .then(()=> console.log("data set ho gya bhaii"))
//         .catch((error)=>{
//            console.log("nhi set hua data", error);
//         })
//  }

//  const updateData = () =>{
//   const postdata={photoUrl:"https://filmfare.wwmindia.com/content/2021/feb/5star-studdedbollywoodfilmsofalltime71612422550.jpg"}

//     update(child(dbRef, `Users/${auth.currentUser.uid}`), 
//         postdata)
//         .then((d)=> console.log("data updated successfully", d))
//         .catch((error)=>{
//            console.log("nhi update hua data", error);
//         })
//  };

//  return (
//     <View>
//       <TouchableOpacity onPress={updateData}>
//         <Text>Update Data</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={overwriteData}>
//         <Text>Overwrite Data</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// export default Realtimedatabse;