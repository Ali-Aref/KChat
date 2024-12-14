import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { AntDesign } from '@expo/vector-icons';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer >
				<Drawer.Screen name="Buttons" options={{
					drawerLabel: "Buttons",
					drawerIcon(props) {
					    return <AntDesign name="printer" size={23} />
					},
				}} />
			</Drawer>
    </GestureHandlerRootView>
  );
}
