import { withUnistyles } from "react-native-unistyles";
import { Feather, AntDesign } from "@expo/vector-icons";

export const UniFeather = withUnistyles(Feather, (theme) => ({
  color: theme.colors.typography,
}));

export const UniAntDesign = withUnistyles(AntDesign, (theme) => ({
  color: theme.colors.typography,
}));


