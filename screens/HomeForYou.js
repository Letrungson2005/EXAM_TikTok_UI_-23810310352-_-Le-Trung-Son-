import { Animated, Easing } from 'react-native';
import { useEffect, useRef } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeForYou({ navigation }) {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: -200,
        duration: 6000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();
  }, []);

  return (
    <ImageBackground
      source={require('../assets/444.jpg')}
      style={{ flex: 1 }}
    >
      {/* RIGHT MENU */}
      <View style={{ position: 'absolute', right: 10, bottom: 120, alignItems: 'center' }}>
        <Image source={require('../assets/2.jpg')} style={{ width: 50, height: 50, borderRadius: 25, marginBottom: 20 }} />
        <Ionicons name="heart" size={30} color="white" /><Text style={{ color: 'white', marginBottom: 15 }}>5.6k</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Inbox')}><Ionicons name="chatbubble" size={30} color="white" /></TouchableOpacity>
        <Text style={{ color: 'white', marginBottom: 15 }}>1.1k</Text>
        <Ionicons name="arrow-redo" size={30} color="white" /><Text style={{ color: 'white', marginBottom: 15 }}>500</Text>
      </View>

      {/* TEXT NHẠC */}
      <View style={{ position: 'absolute', bottom: 40, left: 10, width: '70%' }}>
        <View style={{ width: 200, overflow: 'hidden' }}>
          <Animated.Text style={{ color: 'white', transform: [{ translateX }] }}>
            🎵 Nhac hay - Artist • Nhac hay - Artist •
          </Animated.Text>
        </View>
      </View>

      {/* ĐĨA NHẠC bên phải màn hình */}
      <Image
        source={require('../assets/111.jpg')}
        style={{
          position: 'absolute',
          bottom: 40,
          right: 10,
          width: 40,
          height: 40,
          borderRadius: 20,
        }}
      />

      {/* USER + NỘI DUNG */}
      <View style={{ position: 'absolute', bottom: 90, left: 10 }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>@foryou_user</Text>
        <Text style={{ color: 'white' }}>Nội dung For You...</Text>
      </View>
    </ImageBackground>
  );
}