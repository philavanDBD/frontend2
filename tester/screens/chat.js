import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Chat = () => {
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([]);
    const navigation = useNavigation();

    const Linktoblack = () => {
        navigation.navigate('Home'); 
    }

    const sendMessage = () => {
        if (inputText.trim()) {
            setMessages([...messages, inputText]);
            setInputText('');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.profileContainer} onPress={Linktoblack}>
                    <Text style={styles.text}>PHILAVAN✨</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.middleContainer}>
                {messages.map((message, index) => (
                    <View key={index} style={styles.messageContainer}>
                        <Text style={styles.messageText}>{message}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.footer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type here..."
                    value={inputText}
                    onChangeText={setInputText}
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F8E4DB',
    },
    header: {
        width: '100%',
        height: 100,
        backgroundColor: '#B98082',
        justifyContent: 'flex-end', // Align items to the bottom
        alignItems: 'flex-start', // Align items to the right
        paddingHorizontal: 10,
    },
    profileContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    middleContainer: {
        flex: 1,
        width: '100%',
        padding: 10,
    },
    messageContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        alignSelf: 'flex-end',  // Adjust this for alignment
    },
    messageText: {
        fontSize: 16,
        color: '#333',
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    input: {
        flex: 1,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#B98082',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    sendButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default Chat;
