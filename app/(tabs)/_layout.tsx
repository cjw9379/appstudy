import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';


export default function TabLayout(){
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({color, size})=> (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="오하아사"
        options={{
          title: '오하아사',
          tabBarIcon: ({color, size})=> (
            <FontAwesome6
              name="star-of-david"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({color, size})=> (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
