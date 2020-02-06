import React from 'react';
import { 
  StyleSheet,
  Text, 
  TextInput, 
  View } from 'react-native';

export default function Question(props) {
  console.log(props.question);
  return (
    <View style={styles.container}>
      <Text>{props.question}</Text>
      <TextInput style={styles.inputField}
        editable
        autoCapitalize='none'/>
    </View>
  );
}

const styles =  StyleSheet.create({
  container: {
    paddingTop: '10%',
    flex: 1
  },
  inputField: {
    backgroundColor: '#ffffff',
    marginHorizontal: '15%',
    paddingVertical: '2%'
  },
});
