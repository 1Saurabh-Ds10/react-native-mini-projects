import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  message: {
    width: '70%',
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderColor: '#979797',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10
  },
  incomingMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#E1FFC7'
  },
  outgoingMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'white'
  }
});

export default styles;
