import { useState } from 'react';
import { View, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native'
import { AntDesign, Feather, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'

const MessageInput = () => {
    const [message, setMessage] = useState(''); 
    const sendMessage = () => {
        console.log(message)
        console.warn('sending', message);
        setMessage('');
    }
    const onPlusPressed = () => {
     console.warn('Plus clicked');   
    }
    const onPress = () => {
        if(message){
            sendMessage();
        }else{
            onPlusPressed();
        }
    }
  return (
    <KeyboardAvoidingView style={styles.root} 
        behavior= {Platform.OS === 'ios' ? "padding" : 'height'}
        keyboardVerticalOffset={100}
    >
      <View style={styles.inputContainer}>
        <SimpleLineIcons name='emotsmile' size={24} color='#575757' style={styles.icon} />
        <TextInput style={styles.input} 
         placeholder='Enter signal text here ...'
         value={message}
         onChangeText={setMessage}
         />
        <Feather name='camera' size={24} color='#575757' style={styles.icon} />
        <MaterialCommunityIcons name='microphone-outline' size={24} color='#575757' style={styles.icon} />
      </View>
      <Pressable onPress={onPress} style={styles.buttonContainer}>
        {message ? <Ionicons name='send' size ={18} style={styles.buttonText} /> :
        <AntDesign name='plus' size={24} style={styles.buttonText}/> }
      </Pressable>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding:10,
  },
  inputContainer: {
    backgroundColor: "lightgrey",
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    alignItems: 'center',
    flexDirection: 'row',
    padding:5,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#3777f0',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  icon: {
    marginHorizontal:5,
  },
  input:{
    flex:1,
    marginHorizontal:5,
  },
  buttonText: {
    color: 'white',
    // fontSize: 35,
  }
})

export default MessageInput