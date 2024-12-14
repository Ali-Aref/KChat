import Text from '@/components/ui/Text';
import { Link } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const ButtonsShowcase = () => {
  return (
		<View>
			<Text>Buttons SHowcase</Text>
			<Link href="/" >Home</Link>
		</View>
  );
}

export default ButtonsShowcase;
