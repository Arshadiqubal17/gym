import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  tableContainer: {
    width: '100%',
    marginTop: 20,
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  thead: {
    backgroundColor: '#f2f2f2',
  },
  th: {
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  td: {
    padding: 10,
    textAlign: 'center',
  },
  evenRow: {
    backgroundColor: '#f9f9f9',
  },
  hoverRow: {
    backgroundColor: '#eaeaea',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 8,
  },
  value: {
    fontSize: 18,
  },
});

export default styles;