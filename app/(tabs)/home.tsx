//홈 탭 화면 역할
import { StyleSheet, Text, View } from 'react-native';

export default function Index(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I'm Home screen</Text>
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
  button: {
    fontSize: 35,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: 'black',
  },
});
