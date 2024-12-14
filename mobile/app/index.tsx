import Button from "@/components/ui/Button";
import { Link, Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
	return <Redirect href="/auth/login" />

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
			<Link href={"/showcase/Buttons"}>
				buttons show case
			</Link>
    </View>
  );
}
