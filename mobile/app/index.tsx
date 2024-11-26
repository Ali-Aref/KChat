import React from "react";
import Text from "@/components/ui/Text";
import DarkmodeSwitch from "@/components/ui/DarkmodeSwitch";
import { Box, HBox, VBox } from "@/components/ui/Box";

export default function Index() {

	return (
		<VBox className="px-3 gap-4 items-center justify-center">
			<HBox className="mt-2 justify-end">
				<DarkmodeSwitch />
			</HBox>
			<Box className="px-5">
				<Text size="lg">Here is some testing text</Text>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
					illum consequatur illo iure, sit ut ipsa voluptas veniam iste
					dolores ipsam esse asperiores repellendus tempore! Temporibus
					ipsam cum labore fugiat?
				</Text>
			</Box>
			<HBox className="">
				<Text>One</Text>
				<Text>Two</Text>
			</HBox>
			<VBox className="">
				<Text>Three</Text>
				<Text>Four</Text>
			</VBox>
		</VBox>
	);
}
