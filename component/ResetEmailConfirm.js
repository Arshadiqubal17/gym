import { useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet,TextInput, Alert } from "react-native"

import auth from '@react-native-firebase/auth';
const ResetEmailConfirm = ({navigation}) =>{
    const [resetEmail, setResetEmail] = useState();
    const Forget=()=>{
       
        // co.nst [state, setState] = useState(false);
        auth()
        .sendPasswordResetEmail(resetEmail)
          .then(() => {
            // Password reset email sent!
            // ..
            console.log("Password reset email sent");
            Alert.alert("Password reset email sent")
          })
          .catch((error) => {
            console.log("error reset email not sent", error);
            const errorCode = error.code;
            const errorMessage = error.message;
            Alert.alert("reset email not sent please enter valid email");
            // ..
          });
        
        }
        const goBack = () => {
            navigation.goBack();
          };

    return(
    <View>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
        <Text style={{ color: 'black', fontSize: 18 }}><Text style={{fontSize:50}}>⬅</Text> Back</Text>
      </TouchableOpacity>
        <TextInput placeholder="enter your email" onChangeText={setResetEmail} style={styles.input}/>
        <TouchableOpacity onPress={Forget} style={styles.butt}>
            <Text style={{color: 'white', fontSize: 18}}>submit forget Email</Text>
        </TouchableOpacity>
    </View>
    )
}



const styles = StyleSheet.create({
input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop:100,
    color:'black'

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



export default ResetEmailConfirm;