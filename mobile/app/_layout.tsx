import { Stack } from "expo-router";
import { UniStack } from "@/theme/navigation";


export default function RootLayout() {
  return (
    <Stack screenOptions={{
			headerShown: false,
		}}>
    </Stack>
  );
}
