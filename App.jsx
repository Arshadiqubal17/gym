import Signin from './component/signin';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import AddNew from './component/AddNew';
import Dashboard from './component/Dashboard';
import Reset from './component/ResetEmail';
import { NavigationContainer } from '@react-navigation/native';
import AllRoutes from './AllRoutes';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <AllRoutes />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
