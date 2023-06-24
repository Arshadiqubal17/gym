import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  heading: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    // width: 400,
    // margin: 20,
  },
  form: {
    // flexDirection: 'column',
  },
  label: {
    // marginBottom: 5,
    // fontWeight: 'bold',
  },
  input: {
    height: 54,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: 300,
      borderRadius: 15,
      color:'black',
      // marginLeft:30,
  },
  select: {
    // padding: 10,
    // marginBottom: 10,
    // borderWidth: 1,
    // borderColor: '#ccc',
    // borderRadius: 4,
  },
  textarea: {
    // padding: 10,
    // marginBottom: 10,
    // borderWidth: 1,
    // borderColor: '#ccc',
    // borderRadius: 4,
  },
  submitButton: {
    // backgroundColor: '#4caf50',
    // color: 'white',
    // borderWidth: 0,
    // padding: 10,
    // borderRadius: 4,
    // width: 200,
    // alignSelf: 'center',
    // marginTop: 20,
    marginTop: 15,
      width: 260,
      height: 50,
      backgroundColor: '#e32772',
      borderRadius: 17,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft:60
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});


export default styles;
