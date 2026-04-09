import { Animated, Easing } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Comment({ navigation }) {
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

  const [comments, setComments] = useState([
    { id: 1, user: 'user1', text: 'Comment đầu tiên', avatar: require('../assets/1.jpg') },
    { id: 2, user: 'user2', text: 'Comment thứ hai', avatar: require('../assets/2.jpg') },
    { id: 3, user: 'user3', text: 'Comment thứ ba', avatar: require('../assets/3.jpg') },
  ]);
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    if (newComment.trim() === '') return;
    const nextId = comments.length + 1;
    setComments([...comments, { id: nextId, user: 'You', text: newComment, avatar: require('../assets/1.jpg') }]);
    setNewComment('');
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Background + overlay */}
      <ImageBackground
        source={require('../assets/444.jpg')}
        style={{ flex: 1 }}
      >
        {/* Header back */}
        <View style={{ position: 'absolute', top: 50, left: 10, flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-down" size={30} color="white" />
          </TouchableOpacity>
          <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 10, fontSize: 18 }}>Comments</Text>
        </View>

        {/* Scroll comment */}
        <ScrollView style={{ marginTop: 100, marginBottom: 100, paddingHorizontal: 10, backgroundColor: 'transparent' }}>
          {comments.map(c => (
            <View key={c.id} style={{ flexDirection: 'row', marginBottom: 15, alignItems: 'flex-start' }}>
              <Image source={c.avatar} style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }} />
              <View style={{ flex: 1 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>{c.user}</Text>
                <Text style={{ color: 'white' }}>{c.text}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Input comment */}
        <View style={{ position: 'absolute', bottom: 40, left: 10, right: 10, flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            placeholder="Add a comment..."
            placeholderTextColor="white"
            value={newComment}
            onChangeText={setNewComment}
            style={{
              flex: 1,
              color: 'white',
              borderWidth: 1,
              borderColor: 'white',
              borderRadius: 20,
              paddingHorizontal: 15,
              height: 40,
              backgroundColor: 'transparent',
            }}
          />
          <TouchableOpacity onPress={addComment} style={{ marginLeft: 10 }}>
            <Ionicons name="send" size={25} color="white" />
          </TouchableOpacity>
        </View>

        {/* Đĩa nhạc animation bên phải */}
        <View style={{ position: 'absolute', bottom: 100, right: 10, width: 40, height: 40 }}>
          <Animated.Image
            source={require('../assets/111.jpg')}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              transform: [
                {
                  rotate: translateX.interpolate({
                    inputRange: [0, -200],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}