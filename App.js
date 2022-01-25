import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
const choices = ['flex-start', 'flex-end', 'center'];
const choices2 = ['flex-start', 'flex-end', 'center'];
const choices3 = ['flex-start', 'flex-end', 'center'];
let pick = choices[Math.floor(Math.random() * choices.length)];
let pick1 = choices2[Math.floor(Math.random() * choices.length)];
let pick2 = choices3[Math.floor(Math.random() * choices.length)];
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export const Homepage = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.layout, {
      alignItems: 'center',
      justifyContent: 'center'
    }]}>
      <Text>Levels</Text>
      <Button title="Level 1" onPress={() => navigation.navigate('Level 1')} />
      <Button title="Level 2" onPress={() => navigation.navigate('Level 2')} />
      <Button title="Level 3" onPress={() => navigation.navigate('Level 3')} />
    </View>
  );
};
export const Level1 = () => {
  const [solved1, setSolved1] = useState(false);
  return (
    <View style={[styles.layout]}>
      <Pressable onPress={() => setSolved1(true)}>
        <View style={[styles.box, { alignItems: pick, justifyContent: pick }]} />
      </Pressable>
      {
        solved1 ? <Text>Solved!</Text> : <Text></Text>
      }
      <Button title="Play Again" onPress={() => {
        setSolved1(false);
      }} />
    </View>
  );
};
export const Level2 = () => {
  const [solved2, setSolved2] = useState(false);
  return (
    <View style={[styles.layout, { alignItems: pick1, justifyContent: pick1 }]}>
      <Pressable onPress={() => setSolved2(true)}>
        <View style={[styles.box, { alignItems: pick1, justifyContent: pick1 }]} />
      </Pressable>
      {
        solved2 ? <Text>Solved!</Text> : <Text></Text>
      }
      <Button title="Play Again" onPress={() => {
        setSolved2(false);
      }} />
    </View>
  );
};
export const Level3 = () => {
  const [solved3, setSolved3] = useState(false);
  return (
    <View style={[styles.layout, { alignItems: pick2, justifyContent: pick2 }]}>
      <Pressable onPress={() => setSolved3(true)}>
        <View style={[styles.box, { alignItems: pick2, justifyContent: pick2 }]} />
      </Pressable>
      {
        solved3 ? (<Text>Solved!</Text>) : <Text></Text>
      }
      <Button title="Play Again" onPress={() => {
        setSolved3(false);
      }} />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
export const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Homepage} />
      <Tab.Screen name="Level 1" component={Level1} />
      <Tab.Screen name="Level 2" component={Level2} />
      <Tab.Screen name="Level 3" component={Level3} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: 'rgb(128, 128, 128)',
    alignItems: pick,
    justifyContent: pick,
  },
  box: {
    backgroundColor: 'rgb(128, 128, 128)',
    height: 50,
    width: 50, 
    alignItems: pick,
    justifyContent: pick,
  },
});
