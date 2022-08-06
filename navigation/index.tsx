/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Feather, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Image, Pressable, Text, useWindowDimensions, View } from 'react-native';

import Colors from '../constants/Colors';
import NotFoundScreen from '../screens/NotFoundScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import HomeScreen from '../screens/HomeScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: HomeHeader  }}/>
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} options={{ 
        headerTitle: ChatRoomHeader, 
        headerBackTitleVisible:false
        }}  />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

const HomeHeader = (props) => {
  const {width} = useWindowDimensions();
  return (
    <View style={{
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      width:width-10,
      padding: 10,
      alignItems: 'center',
      }}>
      {/* <View style={{flexDirection: 'row'}}> */}
      <Image
       source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}}
       style= {{width: 30, height: 30, borderRadius:30}}
       />
       <Text style= {{flex: 1,textAlign:'center', marginLeft: 50, fontWeight: 'bold'}}>Signal</Text>
       {/* </View> */}
       {/* <View style={{flexDirection: 'row'}}> */}
       <Feather name="camera" size={24} color="black" style={{marginHorizontal: 10}}/>
       <Feather name="edit-2" size={24} color="black" style={{marginHorizontal: 10}}/>
       {/* </View> */}
    </View>
  )
}

const ChatRoomHeader = (props) => {
  const {width} = useWindowDimensions();
  return (
    <View style={{
      flexDirection: 'row', 
      justifyContent:'space-between',
      width: width-50,
      padding: 10,
      alignItems: 'center',
      }}>
      {/* <View style={{flexDirection: 'row'}}> */}
      <Image
       source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg'}}
       style= {{width: 30, height: 30, borderRadius:30}}
       />
       <Text style= {{flex: 1, marginLeft:10, fontWeight: 'bold'}}>{props.children}</Text>
       {/* </View> */}
       {/* <View style={{flexDirection: 'row'}}> */}
       <Feather name="camera" size={24} color="black" style={{marginHorizontal: 10}}/>
       <Feather name="edit-2" size={24} color="black" style={{marginHorizontal: 10}}/>
       {/* </View> */}
    </View>
  )
}