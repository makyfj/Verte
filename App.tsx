import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex justify-center bg-green-400 min-h-full items-center">
      <Text className="font-bold">Verte!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
