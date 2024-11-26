import React from "react";
import { colorScheme, useColorScheme } from "nativewind";
import { Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function DarkmodeSwitch() {
	const { setColorScheme } = useColorScheme();
	const toggleDarkmode = () => {
		setColorScheme(colorScheme.get() === "light" ? "dark" : "light");
	};

	return (
		<Pressable className="border-2 rounded-full p-1 border-black dark:border-white" onPress={toggleDarkmode}>
			<Feather
				size={24}
				name={colorScheme.get() === "light" ? "moon" : "sun"}
				color={colorScheme.get() === "light" ? "black" : "white"}
			/>
		</Pressable>
	);
}
