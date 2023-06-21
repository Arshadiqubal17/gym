import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './DashboradStyle';

import auth from '@react-native-firebase/auth';
// import { query, where, collection, addDoc, setDoc, doc, updateDoc, deleteField,set, getFirestore,  getDocs } from "firebase/firestore";
import FireStore from '@react-native-firebase/firestore';
const Dashboard = ({navigation}) => {
  const [userCount, setUserCount] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [expiredPlansCount, setExpiredPlansCount] = useState(0);
  const [monthlyEarnings, setMonthlyEarnings] = useState(0);
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Adding 1 because the getMonth method returns a zero-based index (0 for January, 1 for February, etc.)

  console.log('Current month:', currentMonth);

  const getUsersCount = async () => {
    try {
      console.log('hello');
      // const querySnapshot = await getDocs(collection(firedb, "newdata"));
      const querySnapshot = await FireStore().collection('newdata').get();
      const TotalusersCount = querySnapshot.size;
      console.log('Number of users:', TotalusersCount);
      setUserCount(TotalusersCount);
    } catch (error) {
      console.log('Error retrieving user count:', error);
    }
  };

  // Call the function to get the count of users

  const fetchMonthlyEarnings = async () => {
    try {
      const currentDate = new Date();
      const currentYearMonth = currentDate.toISOString().slice(0, 7);

      // const monthlyEarningsQuery = query(
      //   collection(firedb, 'newdata'),
      const querySnapshot = await FireStore()
        .collection('newdata')
        .where('startDate', '>=', currentYearMonth + '-01') // Filter documents with a startDate within the current month
        .where('startDate', '<=', currentYearMonth + '-31')
        .get();
      // const querySnapshot = await getDocs(monthlyEarningsQuery);
      console.log(querySnapshot, 'querySnapshot');
      let totalEarnings = 0;
      querySnapshot.forEach(doc => {
        const {amount} = doc.data();
        console.log(amount, 'amount');
        totalEarnings += parseInt(amount);
      });

      setMonthlyEarnings(totalEarnings);
    } catch (error) {
      console.error('Error fetching monthly earnings:', error);
    }
  };

  const fetchExpiredPlansCount = async () => {
    try {
      const currentDate = new Date();
      // const expiredPlansQuery = query(
      //   collection(firedb, 'newdata'),
      const querySnapshot = await FireStore()
        .collection('newdata')
        .where('endDate', '<', currentDate.toISOString().slice(0, 10))
        .get(); // Convert currentDate to the "year-month-date" format

      // const querySnapshot = await getDocs(expiredPlansQuery);
      const expiredPlans = querySnapshot.size;
      console.log('Expired Plans:', expiredPlans);
      console.log('Current Date:', currentDate);
      setExpiredPlansCount(expiredPlans);
    } catch (error) {
      console.error('Error fetching expired plans count:', error);
    }
  };

  const logout = () => {
    auth().signOut();
    console.log("sign out");
    navigation.navigate("Home");
  };

  useEffect(() => {
     
      
    getUsersCount();

    fetchMonthlyEarnings();
    fetchExpiredPlansCount();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={logout}
        style={{
          // marginRight: 10,
          marginTop: 10,
          backgroundColor: '#e32772',
          borderRadius: 15,
          paddingVertical: 5,
          paddingHorizontal: 10,
          height: 30,
          width: 100,
          // marginRight:300,
          marginLeft: 280,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 16}}>Logout</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <Text style={styles.label}>Number of Users</Text>
        <Text style={styles.value}>{userCount}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Monthly Revenue</Text>
        <Text style={styles.value}>{monthlyEarnings}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Number of Expired Plans</Text>
        <Text style={styles.value}>{expiredPlansCount}</Text>
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   label: {
//     fontWeight: 'bold',
//     marginRight: 8,
//   },
//   value: {
//     fontSize: 18,
//   },
// });

export default Dashboard;
