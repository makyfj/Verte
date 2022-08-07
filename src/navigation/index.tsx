import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

function Feed() {
  return (
    <View className="flex justify-center items-center bg-rose-300 min-h-full">
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View className="flex justify-center items-center bg-rose-300 min-h-full">
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
