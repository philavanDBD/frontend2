import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

export default function LoginScreen({ navigation }) {
  const [isLoginModalVisible, setLoginModalVisible] = useState(true);
  const [isSignUpModalVisible, setSignUpModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleLoginModal = () => {
    setLoginModalVisible(!isLoginModalVisible);
    setLoginMessage('');
  };

  const toggleSignUpModal = () => {
    setSignUpModalVisible(!isSignUpModalVisible);
    setLoginMessage('');
  };

  const handleLogin = () => {
    if (!email || !password) {
      setLoginMessage('ลองใหม่'); // Show error message if fields are empty
      return;
    }
    // Replace with your actual login logic
    if (email === 'test@example.com' && password === 'Password') {
      toggleLoginModal();
      navigation.navigate('Home');
    } else {
      setLoginMessage('ลองใหม่'); // Show error message
    }
  };

  const handleSignUp = () => {

    
    if(!email || !username || !password) {
      setLoginMessage('ลองใหม่'); // Show error message if fields are empty
      return;
    }
    else{
      toggleSignUpModal();
      setLoginModalVisible(true);
    }
    // Replace with your actual signup logic
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);
    toggleSignUpModal();
  };

  return (
    <View style={styles.container}>
      <Modal isVisible={isLoginModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.showPasswordButton}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Text style={styles.showPasswordText}>{showPassword ? 'Hide' : 'Show'}</Text>
            </TouchableOpacity>
          </View>
          {loginMessage ? <Text style={styles.errorMessage}>{loginMessage}</Text> : null}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleLoginModal}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => {
            toggleLoginModal();
            setSignUpModalVisible(true);
          }}>
            <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal isVisible={isSignUpModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.showPasswordButton}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Text style={styles.showPasswordText}>{showPassword ? 'Hide' : 'Show'}</Text>
            </TouchableOpacity>
          </View>
          {loginMessage ? <Text style={styles.errorMessage}>{loginMessage}</Text> : null}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleSignUpModal}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>




            <Text style={styles.buttonText}>Sign Up</Text>


            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => {
            toggleSignUpModal();
            setLoginModalVisible(true);
          }}>
            <Text style={styles.linkText}>Already have an account? Login</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginBottom: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  passwordContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%', // Ensure it takes enough space
    right:-29,
  },
  showPasswordButton: {
    position: 'absolute',
    right: 70,
  },
  showPasswordText: {
    color: '#007BFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
     width: '80%',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  linkText: {
    color: '#007BFF',
    marginTop: 15,
    fontSize: 16,
  },
});
