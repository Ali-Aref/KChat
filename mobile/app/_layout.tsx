import '@/lib/theme/unistyles'
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{
		headerShown: false,
	}}>
		<Stack.Screen name="showcase" />
	</Stack>;
}
