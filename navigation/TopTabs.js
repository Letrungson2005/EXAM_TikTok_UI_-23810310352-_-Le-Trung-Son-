import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeFollowing from '../screens/HomeFollowing';
import HomeForYou from '../screens/HomeForYou';
import { View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            position: 'absolute',
            top: 50,
            alignSelf: 'center',
            width: 200,
            backgroundColor: 'transparent',
            elevation: 0,
          },

          tabBarIndicatorStyle: {
            height: 0,
          },

          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            textTransform: 'none',
            lineHeight: 18, // 👈 fix chữ g
            padding: 0,
            margin: 0,
          },

          tabBarItemStyle: {
            padding: 0,
            margin: 0,
          },

          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'rgba(255,255,255,0.5)',

          sceneContainerStyle: {
            backgroundColor: 'black',
          },
        }}
      >
        <Tab.Screen name="Following" component={HomeFollowing} />
        <Tab.Screen name="For You" component={HomeForYou} />
      </Tab.Navigator>
    </View>
  );
}