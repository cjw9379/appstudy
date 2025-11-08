import { StyleSheet, Text, View } from 'react-native';

export default function Index(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Hello World!</Text>
    </View>
  );
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5596a5ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
  },
});