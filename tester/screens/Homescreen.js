import React from 'react';
import { View, Text, StyleSheet,  } from 'react-native';
import Header from '../components/header.js';
import Contents from '../components/content.js';


const ChatListScreen = () => {
  return (
    <View style={styles.container}>
    <Header/>
    <Contents/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#E7BBBC',

  },
  
});

export default ChatListScreen;
