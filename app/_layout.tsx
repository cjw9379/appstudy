//(tabs)에 있는 것과 다른 것/링크 이용하려고
import { Stack } from 'expo-router';

export default function RootLayout(){
  return (
    <Stack>
      <Stack.Screen name="index" options={{title: 'Home'}}/>
      <Stack.Screen name="about" options={{title: 'About'}}/>
    </Stack>
  );
}