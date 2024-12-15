import { Stack } from "expo-router";
import { UniStack } from "@/theme/navigation";


export default function RootLayout() {
  return (
    <UniStack>
      <Stack.Screen name="showcase" />
    </UniStack>
  );
}
