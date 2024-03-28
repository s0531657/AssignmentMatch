import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
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
    width: '22%', // Adjust the width to fit 4 cards in a row
    aspectRatio: 1, // Keep the aspect ratio 1:1 for square cards
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1%', // Adjust the margin to ensure spacing between cards
    borderRadius: 5,
  },
  cardPlaceholder: {
    backgroundColor: 'transparent',
  },
  cardText: {
    fontSize: 24,
  },
  score: {
    fontSize: 20,
    margin: 10,
  },
  timer: {
    fontSize: 20,
    margin: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
  instructions: {
    fontSize: 20,
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: -190,
    padding: 10,
},
});

export default styles;
