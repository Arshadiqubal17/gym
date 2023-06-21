
import react, {useState} from  'react';
import {View, Text, TouchableOpacity, Image,Alert, TextInput, StyleSheet, SafeAreaView} from 'react-native'


// import TabNavigation from '../TabNavigation';
import auth from '@react-native-firebase/auth';


import ResetEmail from './ResetEmail';


const Signin= ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [profile, setProfile] = useState(null);
    const [name, setName] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const sign=()=>{
      
      auth().signInWithEmailAndPassword( email, password)
        .then((d)=>{
            console.log(d, "user signed in successfully");
            Alert.alert("user signed in successfully");
            setProfile(d.user);
            navigation.navigate('TabNavigation')
        })
        .catch((error)=>{
           console.log('sign in: please create account first ', error.message)
           Alert.alert("please create account first");
        })
    }
    // const logout=()=>{
    //     auth.signOut();
    //     console.log("sign out")
    //     // setProfile(null);
    // }

    const Signup=()=>{
      auth().createUserWithEmailAndPassword( email, password)
        .then((d)=>{
            console.log("account created successfully",d);
           
           
            

                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: imgUrl
                  }).then(() => {
                    // Profile updated!
                    // ...
                    // const updatedUser = auth.currentUser;
                    // setProfile({
                    //     displayName: updatedUser.displayName,
                    //     photoURL: updatedUser.photoURL
                    //   });
                    
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });


         
            Alert.alert("account created successfully");
            navigation.navigate('TabNavigation')
            // console.log("yaha e suru ", d, "d haii bhaii")
           


        })
        .catch((error)=>{
           console.log('signup: ', error.message)
           Alert.alert('invalid credentials please enter correct credentials');
        })
    }

   return(
    
    <View style={{marginTop:60}}> 
   
      {/* <TouchableOpacity onPress={logout} style={{alignItems:'center'}}>
       <Text style={styles.butt}>Sign out   </Text>
       </TouchableOpacity> */}
       
          {/* <CustomButton
          bg="red"
          textColor="black"
           title="Signout"
           onPress={logout}
           /> */}
           
   
     
     <Text style={{fontSize:35, color:'brown', fontFamily:'serif', fontWeight:'700', fontStyle:'italic', marginLeft:45, marginTop:50, marginBottom:30}}>Gym Admin Login </Text>
      <TextInput  style={styles.input} onChangeText={setEmail}
       placeholder='please enter email'/>
       
        <TextInput  style={styles.input} onChangeText={setPassword}
       placeholder='please enter password'/>

      <TextInput  style={styles.input} onChangeText={setName}
       placeholder='please enter username'/>

    

       <TouchableOpacity onPress={sign} style={styles.butt}>
       <Text style={{ color: 'white', fontSize: 18,}}>Sign in   </Text>
       </TouchableOpacity>

        <TouchableOpacity onPress={Signup} style={styles.butt}>
        <Text style={{color: 'white', fontSize: 18}}>Sign up    </Text>
        </TouchableOpacity>
        
   
        {/* <TouchableOpacity onPress={logout} style={{alignItems:'center'}}>
       <Text style={styles.butt}>Sign out   </Text>
       </TouchableOpacity> */}

           {/* <CustomButton
            bg="red"
            textColor="black"
            title="Signout"
             onPress={logout}
            /> */}
       <ResetEmail />
       
       
    
    </View>
   
   )
}

export default Signin;


const styles = StyleSheet.create({
    input: {
      height: 54,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: 350,
      borderRadius: 15,
      color:'red',
      marginLeft:30,
    },
    butt:{
      marginTop: 15,
      width: 300,
      height: 60,
      backgroundColor: '#e32772',
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft:45
    }
  });

