import {StyleSheet, View, Text } from 'react-native'
import React from 'react'

  const blue = "#3777f0";
  const grey = "lightgrey";
  const myID = 'u1';
const Message = ({message}) => {
    const isMe = message.user.id === myID;

  return (
    <View style={[styles.container, isMe ? styles.rightContainer : styles.leftContainer]}>
      <Text style= {[styles.text, {color: isMe ? 'black' : 'white'}]}>{message.content}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#3777f0",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: "75%",
    },
    leftContainer: {
      backgroundColor: blue,
      marginLeft: 10,
      marginRight: 'auto',
    },
    rightContainer: {
      backgroundColor: grey,
      marginLeft: 'auto',
      marginRight: 10,
    },
    text:{
        color: "white",
    }
});
export default Message;