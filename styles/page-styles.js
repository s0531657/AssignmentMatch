import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  page: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: -190,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  instructions: {
    fontSize: 20,
    color: '#333',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 20,
  },
    card: {
      width: 80,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
      borderRadius: 10,
      backgroundColor: '#d3d3d3',
  },
  cardText: {
    fontSize: 20,
    color: '#333',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 50,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 20,
    borderRadius: 30,
    margin:30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  score: {
    fontSize: 20,
    color: '#007bff',
    marginBottom: 10,
  },
  timer: {
    fontSize: 20,
    color: '#007bff',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default styles;
