import { View, StyleSheet, FlatList } from 'react-native';
import { RootTabScreenProps } from '../types';
import ChatRoomItem from '../components/ChatRoomItem';
import ChatRoomsData from '../assets/dummy-data/ChatRooms'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const chatRoomData1 = ChatRoomsData[0];
  const chatRoomData2 = ChatRoomsData[2];
  return (
    <View style = {styles.page}>
      <FlatList
        data={ChatRoomsData}
        renderItem ={({item}) => <ChatRoomItem chatRoom={item} />}
        keyExtractor ={(item) => item.id}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  }
});
