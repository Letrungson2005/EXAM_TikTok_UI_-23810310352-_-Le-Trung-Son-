import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TopTabs from './TopTabs';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

function EmptyScreen() {
  return <View style={{ flex: 1, backgroundColor: 'black' }} />;
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: 'black' },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={TopTabs} // 👈 CHỈ cái này dùng TopTabs
        options={{
          tabBarIcon: () => (
            <Ionicons name="home" size={24} color="white" />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={EmptyScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="search" size={24} color="white" />
          ),
        }}
      />

      <Tab.Screen
        name="Add"
        component={EmptyScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="add" size={28} color="white" />
          ),
        }}
      />

      <Tab.Screen
        name="Inbox"
        component={EmptyScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="chatbubble" size={24} color="white" />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={EmptyScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person" size={24} color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}