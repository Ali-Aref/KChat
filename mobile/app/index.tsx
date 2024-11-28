import React from "react";
import Text from "@/components/ui/Text";
import { Box, HBox, VBox } from "@/components/ui/Box";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxToolkit";
import { Button } from "react-native";
import { setLanguage } from "@/store/slices/appSlice";
import { Language } from "@/types";
import { RTL_LANGUAGES } from "@/lib/constants";

export default function Index() {
	const { code, rtl } = useAppSelector((state) => state.app.language);
	const dispatch = useAppDispatch();

	const handleChangeLanguage = (code: Language["code"]) => {
		dispatch(
			setLanguage({
				code,
				rtl: RTL_LANGUAGES.includes(code),
			}),
		);
	};

	return (
		<VBox className="px-3 gap-4 items-center justify-center">
			<Box className="px-5">
				<Box className="flex-shrink">
					<Text size="lg" className={"font-bold"}>
						{code} {rtl ? "RTL" : "LTR"}
					</Text>
					<HBox className="gap-3">
						<Button
							title="English"
							onPress={() => handleChangeLanguage("en")}
						/>
						<Button
							title="Persian"
							onPress={() => handleChangeLanguage("fa")}
						/>
						<Button
							title="Pashto"
							onPress={() => handleChangeLanguage("ps")}
						/>
					</HBox>
				</Box>
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
