import { Stack } from "expo-router"
import { withUnistyles } from "react-native-unistyles"

export const UniStack = withUnistyles(Stack, (theme, rt)=>({
	screenOptions: {
		headerShown: false,
		contentStyle: {
			paddingTop: rt.insets.top,
			backgroundColor: theme.colors.background,
		}
	},
}))

