import React, { Profiler, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "./AddNewStyle";
import { Picker } from "@react-native-picker/picker";
import { ScrollView } from "react-native";



import auth from '@react-native-firebase/auth';

import firestore from '@react-native-firebase/firestore';



function AddNew({ navigation }) {
  const [formData, setFormData] = useState({
    email: "",
    weight: "",
    height: "",

    name: "",
    contact: "",
    gender: "",
    dob: "",
    healthIssue: "",
    profession: "",
    startDate: "",
    endDate: "",
    amount: "",
    modeOfPayment: "",
  });

  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [name, setName] = useState();
  const [contact, setContact] = useState();
  const [gender, setgender] = useState();
  const [dob, setdob] = useState();
  const [healthIssue, sethealthIssue] = useState();
  const [profession, setprofession] = useState();
  const [startDate, setstartDate] = useState();
  const [endDate, setendDate] = useState();
  const [amount, setamount] = useState();
  const [modeOfPayment, setmodeOfPayment] = useState();

  const handleChange = () => {
    const isValid = validateForm();
    console.log(isValid, "isvalid");
    const userData = {
      email,
      weight,
      height,
      name,
      contact,
      gender,
      dob,
      healthIssue,
      profession,
      startDate,
      endDate,
      amount,
      modeOfPayment,
    };
    console.log(userData, "userdata");
    if (isValid == true) {
      console.log(isValid, "isvalid");

      // addDoc(collection(firedb, "newdata"), {
        
      firestore()
      .collection('newdata')
      .add({
        
    

        email: email,
        weight: weight,
        height: height,

        name: name,
        contact: contact,
        gender: gender,
        dob: dob,
        healthIssue: healthIssue,
        profession: profession,
        startDate: startDate,
        endDate: endDate,
        amount: amount,
        modeOfPayment: modeOfPayment,
      })
        .then((d) => {
          console.log("successful add data", d.id);
          Alert.alert("sucessfully added new member");
        })
        .catch((error) => {
          console.log(error);
          Alert.alert("something went wrong");
        });
    } else {
      Alert.alert("please fill all fields");
    }
  };

  const logout = () => {
    auth().signOut();
    console.log("sign out");
    navigation.navigate("Home");
  };

  const validateForm = () => {
    const errors = {};

    // Email validation
    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address.";
    }

    // Weight validation
    if (!weight) {
      errors.weight = "Weight is required.";
    }

    // Height validation
    if (!height) {
      errors.height = "Height is required.";
    }

    // Password validation

    // Name validation
    if (!name) {
      errors.name = "Name is required.";
    }

    // Contact validation
    if (!contact) {
      errors.contact = "Contact number is required.";
    } else if (!/^\d{10}$/.test(contact)) {
      errors.contact = "Contact number should be 10 digits.";
    }
    // Gender validation
    if (!gender) {
      errors.gender = "Gender is required.";
    }
    // Date of Birth validation
    if (!dob) {
      errors.dob = "Date of Birth is required.";
    }

    // Profession validation
    if (!profession) {
      errors.profession = "Profession is required.";
    }
    // Start Date validation
    if (!startDate) {
      errors.startDate = "Start date is required.";
    }

    // End Date validation
    if (!endDate) {
      errors.endDate = "End date is required.";
    }

    // Amount validation
    if (!amount) {
      errors.amount = "Amount is required.";
    }

    // Mode of Payment validation
    if (!modeOfPayment) {
      errors.modeOfPayment = "Mode of payment is required.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (!isValid) {
      // Your code to save the data goes here
      console.log("Form data:", formData);

      // Reset the form after submission
      setFormData({
        email: "",
        weight: "",
        height: "",
        password: "",
        name: "",
        contact: "",
        gender: "",
        dob: "",
        healthIssue: "",
        profession: "",
        startDate: "",
        endDate: "",
        amount: "",
        modeOfPayment: "",
      });
      setErrors({});
    }
  };

  return (
    <ScrollView>
      <Text style={styles.heading}>New Member Form</Text>

      <TouchableOpacity
        onPress={logout}
        style={{
          // marginRight: 10,
          marginTop: 10,
          backgroundColor: "#e32772",
          borderRadius: 15,
          paddingVertical: 5,
          paddingHorizontal: 10,
          height: 30,
          width: 100,
          // marginRight:300,
          marginLeft: 280,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Logout</Text>
      </TouchableOpacity>

      <View>
        <View style={styles.inputContainer}>
          <Text>Email:</Text>
          {/* <TextInput
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            value={formData.email}
            onChangeText={(value) => handleChange('email', value)}
          /> */}
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            placeholder="Enter Email"
          />
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text>Weight:</Text>
          {/* <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={formData.weight}
            onChangeText={(value) => handleChange('weight', value)}
          /> */}
          <TextInput
            style={styles.input}
            onChangeText={setWeight}
            placeholder="Enter weight"
          />
          {errors.weight && <Text style={styles.error}>{errors.weight}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text>Height:</Text>
          {/* <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={formData.height}
            onChangeText={(value) => handleChange('height', value)}
          /> */}
          <TextInput
            style={styles.input}
            onChangeText={setHeight}
            placeholder="Enter Height"
          />
          {errors.height && <Text style={styles.error}>{errors.height}</Text>}
        </View>

        {/* <View style={styles.inputContainer}>
          <Text>Password:</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={formData.password}
            onChangeText={(value) => handleChange('password', value)}
          />

          {errors.password && <Text style={styles.error}>{errors.password}</Text>}
        </View> */}

        <View style={styles.inputContainer}>
          <Text>Name:</Text>
          {/* <TextInput
            style={styles.input}
            value={formData.name}
            onChangeText={(value) => handleChange('name', value)}
          /> */}
          <TextInput
            style={styles.input}
            onChangeText={setName}
            placeholder="Enter Name"
          />
          {errors.name && <Text style={styles.error}>{errors.name}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text>Contact:</Text>
          {/* <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={formData.contact}
            onChangeText={(value) => handleChange('contact', value)}
          /> */}
          <TextInput
            style={styles.input}
            onChangeText={setContact}
            placeholder="Enter Contact No"
          />
          {errors.contact && <Text style={styles.error}>{errors.contact}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text>Gender:</Text>
          <Picker
            selectedValue={gender}
            style={styles.picker}
            onValueChange={(value) => setgender(value)}
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Other" value="other" />
          </Picker>
          {errors.gender && <Text style={styles.error}>{errors.gender}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text>Date of Birth:</Text>
          {/* <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="YYYY-MM-DD"
            value={formData.dob}
            onChangeText={(value) => handleChange('dob', value)}
          /> */}
          <TextInput
            style={styles.input}
            onChangeText={setdob}
            placeholder="YYYY-MM-DD"
          />
          {errors.dob && <Text style={styles.error}>{errors.dob}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text>Health Issue:</Text>
          {/* <TextInput
            style={styles.input}
            multiline
            value={formData.healthIssue}
            onChangeText={(value) => handleChange('healthIssue', value)}
          /> */}
          <TextInput
            style={styles.input}
            onChangeText={sethealthIssue}
            placeholder="Any Health Isuue"
          />
          {errors.healthIssue && (
            <Text style={styles.error}>{errors.healthIssue}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text>Profession:</Text>
          {/* <TextInput
    style={styles.input}
    value={formData.profession}
    onChangeText={(value) => handleChange('profession', value)}
  /> */}
          <TextInput
            style={styles.input}
            onChangeText={setprofession}
            placeholder="Profession"
          />
          {errors.profession && (
            <Text style={styles.error}>{errors.profession}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text>Start Date:</Text>
          {/* <TextInput
    style={styles.input}
    keyboardType="numeric"
    placeholder="YYYY-MM-DD"
    value={formData.startDate}
    onChangeText={(value) => handleChange('startDate', value)}
  /> */}
          <TextInput
            style={styles.input}
            onChangeText={setstartDate}
            placeholder="start Date"
          />

          {errors.startDate && (
            <Text style={styles.error}>{errors.startDate}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text>End Date:</Text>
          {/* <TextInput
    style={styles.input}
    keyboardType="numeric"
    placeholder="YYYY-MM-DD"
    value={formData.endDate}
    onChangeText={(value) => handleChange('endDate', value)}
  /> */}
          <TextInput
            style={styles.input}
            onChangeText={setendDate}
            placeholder="End Date"
          />
          {errors.endDate && <Text style={styles.error}>{errors.endDate}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text>Amount:</Text>

          <TextInput
            style={styles.input}
            onChangeText={setamount}
            placeholder="Amount"
          />
          {errors.amount && <Text style={styles.error}>{errors.amount}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text>Mode of Payment:</Text>
          <Picker
            selectedValue={modeOfPayment}
            style={styles.picker}
            onValueChange={(value) => setmodeOfPayment(value)}
          >
            <Picker.Item label="Select Payment Method" value="" />
            <Picker.Item label="Cash" value="cash" />
            <Picker.Item label="Online" value="online" />
            <Picker.Item label="Other" value="other" />
          </Picker>
          {errors.modeOfPayment && (
            <Text style={styles.error}>{errors.modeOfPayment}</Text>
          )}
        </View>

        {/* <Button onPress={handleSubmit} title="Submit" style={{}} /> */}
        <TouchableOpacity onPress={handleChange} style={styles.submitButton}>
          <Text style={{ color: "white" }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default AddNew;
