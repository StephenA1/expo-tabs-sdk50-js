import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';


export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'One',
            title: 'One Title',
          }}
        />
        <Drawer.Screen
          name="two" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Two',
            title: 'Two Title',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
