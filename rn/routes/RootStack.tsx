import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/Home';
import AuthStack from './AuthStack';
import {StyleSheet} from 'react-native-unistyles';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="AuthStack">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AuthStack" component={AuthStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    marginTop: rt.insets.top,
		backgroundColor: 'lightblue',
  },
}));
