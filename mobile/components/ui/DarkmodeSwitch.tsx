import React from "react";
import { colorScheme, useColorScheme } from "nativewind";
import { Platform, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/constants/Colors";
import clsx from "clsx";
import {
  setStatusBarStyle,
  setStatusBarBackgroundColor,
} from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { useAppDispatch } from "@/hooks/useReduxToolkit";
import { setDarkmode } from "@/store/slices/appSlice";

type DarkmodeSwitchProps = {
  className?: string;
};

export default function DarkmodeSwitch({
  className,
}: DarkmodeSwitchProps) {
  const { setColorScheme } = useColorScheme();
  const dispatch = useAppDispatch();

  const toggleDarkmode = () => {
    const isDarkmode = colorScheme.get() === "dark";
    setColorScheme(isDarkmode ? "light" : "dark");
    // set statusbar style
    setStatusBarStyle(isDarkmode ? "light" : "dark");
    setStatusBarBackgroundColor(
      isDarkmode ? colors.light.bg : colors.dark.bg,
    );
    // set navigationbar style
    if (Platform.OS === "android") {
      if (isDarkmode) {
        NavigationBar.setButtonStyleAsync("dark");
        NavigationBar.setBackgroundColorAsync(colors.light.bg);
      } else {
        NavigationBar.setButtonStyleAsync("light");
        NavigationBar.setBackgroundColorAsync(colors.dark.bg);
      }
    }
  };

  return (
    <Pressable
      className={clsx(
        "border-2 rounded-full p-1 border-light-fg dark:border-dark-fg",
        className,
      )}
      onPress={toggleDarkmode}
    >
      <Feather
        size={24}
        name={colorScheme.get() === "light" ? "moon" : "sun"}
        color={
          colorScheme.get() === "light" ? colors.light.fg : colors.dark.fg
        }
      />
    </Pressable>
  );
}
