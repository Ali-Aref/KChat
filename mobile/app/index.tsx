import React from 'react';
import { Pressable, View } from 'react-native';
import Text from '@/components/ui/Text';

export default function Index() {
  return (
		<View className='flex flex-1 items-center justify-center'>
			<Pressable className='p-10 rounded bg-blue-700
			active:bg-blue-800
			active:ring-4
			active:ring-black
			focus:bg-yellow-800
			group
			gap-10
			first-child:text-blue-400
			'>
				<Text size='lg' className={"text-white group-active:font-bold"}>Shahy Payment</Text>
				<Text size='lg' className={"text-white"}>AHD Payment</Text>
			</Pressable>
		</View>
  );
}

