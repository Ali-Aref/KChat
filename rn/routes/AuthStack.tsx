import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/auth/Login';
import { StyleSheet } from 'react-native-unistyles';

const Stack = createNativeStackNavigator()

export default function AuthStack() {
  return (
		<Stack.Navigator screenOptions={{
			headerShown: false,
			contentStyle: styles.contentStyle,
		}}>
			<Stack.Screen name="login" component={LoginScreen} />
		</Stack.Navigator>
  );
}

const styles = StyleSheet.create((theme)=>({
	contentStyle: {
		backgroundColor: theme.colors.background,
	},
}));
