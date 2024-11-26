import React from 'react';
import { Pressable, View } from 'react-native';
import Text from '@/components/ui/Text';

export default function Index() {
  return (
		<View className='flex flex-1 items-center justify-center'>
			<Pressable className='p-10 rounded bg-red-800
			hover:bg-green-800
			active:bg-blue-800
			focus:bg-yellow-800
			group
			'>
				<Text className={"group-active:text-white"}>Hello World</Text>
			</Pressable>
		</View>
  );
}

