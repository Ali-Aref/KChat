import React from "react";
import { colorScheme, useColorScheme } from "nativewind";
import { Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TailwindClass } from "@/lib/types/etc";
import clsx from "clsx";

type DarkmodeSwitchProps = {
  className?: TailwindClass;
};

export default function DarkmodeSwitch({
  className,
}: DarkmodeSwitchProps) {
  const { setColorScheme } = useColorScheme();
  const toggleDarkmode = () => {
    setColorScheme(colorScheme.get() === "light" ? "dark" : "light");
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
        color={colorScheme.get() === "light" ? "black" : "white"}
      />
    </Pressable>
  );
}
