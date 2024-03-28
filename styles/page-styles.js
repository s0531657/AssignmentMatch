import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    width: 120,
    height: 50,
    borderRadius: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 20,
  },
  card: {
    width: '26%',
    aspectRatio: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  cardPlaceholder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
  },
  score: {
    fontSize: 20,
    margin: 10,
    color: '#007bff',
  },
  timer: {
    fontSize: 20,
    margin: 10,
    color: '#007bff',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
  backButton: {
    padding: 10,
    margin: -30,
    backgroundColor: '#007bff',
    borderRadius: 5,
    left: -180,
  },
  instructions: {
    fontSize: 20,
    marginBottom: 20,
    color: '#333',
  },
});

export default styles;
