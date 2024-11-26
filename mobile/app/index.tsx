import React from "react";
import { View } from "react-native";
import Modal from "@/components/ui/Modal";
import Text from "@/components/ui/Text";
import DarkmodeSwitch from "@/components/ui/DarkmodeSwitch";

export default function Index() {
	const [show, setShow] = React.useState(false);

	return (
		<View className="flex flex-1 items-center justify-center">
			<Modal
				position="center"
				animationType="fade"
				show={{ get: show, set: setShow }}
				title="Credit in details"
			>
				<View>
					<Text>My contents are show here</Text>
				</View>
			</Modal>
			<DarkmodeSwitch />
		</View>
	);
}
