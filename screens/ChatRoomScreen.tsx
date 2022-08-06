import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import Message from "./../components/Message";
import chatRoomData from "./../assets/dummy-data/Chats";
import MessageInput from '../components/MessageInput';

const ChatRoomScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  navigation.setOptions({title: 'Elon'});
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
      data={chatRoomData.messages}
      renderItem={({item}) => <Message message= {item} />}
      />
      <MessageInput />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  }
});

export default ChatRoomScreen