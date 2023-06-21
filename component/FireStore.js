import { Text, TouchableOpacity, View } from "react-native";
import {firedb, auth} from '../Firebase'
import { collection, addDoc, setDoc, doc, updateDoc, deleteField } from "firebase/firestore"; 

const FireStore= () => {

    const Add_data = () =>{
        addDoc(collection(firedb, "newdata"), {
            firstName: "arshad",
            lastName: "iqubal",
            bornYear: 1996
          })
          .then((d)=>(console.log("successful add data", d.id)))
          .catch((error)=>{console.log(error)});
     }
    const set_data = () => {
         setDoc(doc(firedb, "newdata", "123456"),{name:"vicky", age:26})
         .then((d)=>(console.log("successfully set data", d)))
         .catch((error)=>{console.log(error)});
    }

    const update_data = () => {
        updateDoc(doc(firedb, "newdata", "123456"),{name:"vicky", age:76, org:"masai school"})
        .then((d)=>(console.log("successfully update data", d)))
        .catch((error)=>{console.log(error)});
   }

   const delete_data = () => {
    updateDoc(doc(firedb, "newdata", "123456"),{name:"vicky", age:deleteField(), org:"masai school"})
    .then((d)=>(console.log("successfully delete data", d)))
    .catch((error)=>{console.log(error)});
}
return (
    <View>
        <TouchableOpacity onPress={Add_data}>
            <Text> Add Data</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={set_data}>
            <Text> Set Data</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={update_data}>
            <Text> update Data</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={delete_data}>
            <Text> delete Data</Text>
        </TouchableOpacity>
    </View>
)

}

export default FireStore;