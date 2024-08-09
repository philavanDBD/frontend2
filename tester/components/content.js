import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Content = () => {
  const navigation = useNavigation(); 


  const navigateToChat = () => {
    navigation.navigate('Chat'); 
  }



  const navigateToChat2 = () => {
    navigation.navigate('Chat2'); 
  }




  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.profileContainer} onPress={navigateToChat}>
          <Image
            source={require('../assets/image/profile1.jpg')}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.nameText}>PHILAVAN✨</Text>
            <Text style={styles.messageText}>Okok</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileContainer} onPress={navigateToChat2}>
          <Image
            source={require('../assets/image/profile2.jpg')}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.nameText}>SOUKLATY</Text>
            <Text style={styles.messageText}>Okok</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
    height: 650, // Adjust size as needed
    backgroundColor: '#E7BBBC',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D98F91',
    marginVertical: 2,
    padding: 10,
    borderRadius: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  nameText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  messageText: {
    color: 'white',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#D98F91',
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
  },
});

export default Content;
