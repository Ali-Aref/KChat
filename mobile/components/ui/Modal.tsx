import React, { Dispatch } from "react";
import {
  View,
  Modal as DefaultModal,
  ModalProps as DefualtModalProps,
  Pressable,
  StatusBar,
} from "react-native";
import Text from "./Text";
import clsx from "clsx";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { cssInterop } from "nativewind";

cssInterop(MaterialCommunityIcons, {
  className: {
    target: "style",
    nativeStyleToProp: {
      color: true,
    },
  },
});

type ModalProps = DefualtModalProps & {
  title: string;
  show: { get: boolean; set: Dispatch<React.SetStateAction<boolean>> };
  position?: "center" | "top" | "bottom";
};

const positionMapper = {
  center: "items-center justify-center px-4",
  top: `items-center justify-start mt-[${StatusBar.currentHeight}]`,
  bottom: "items-center justify-end",
};

export default function Modal({
  title,
  show,
  children,
  position,
  ...props
}: ModalProps) {
  const closeModal = () => show.set(false);

  return (
    <DefaultModal
      transparent={true}
      visible={show.get}
      statusBarTranslucent={true}
      onRequestClose={closeModal}
      {...props}
    >
      <Pressable
        onPress={() => show.set(false)}
        className={clsx(
          "flex flex-1 bg-[rgba(0,0,0,0.7)]",
          position && positionMapper[position],
        )}
      >
        <Pressable
          className={clsx(
            "bg-light-card dark:bg-dark-card p-3 gap-3 w-full rounded overflow-hidden",
          )}
        >
          <View className="flex-row justify-between items-center">
            <Text size="lg" className={clsx("font-bold")}>
              {title}
            </Text>
            <MaterialCommunityIcons
              name="close"
              className="text-light-fg dark:text-dark-fg  px-3 text-xl"
              onPress={closeModal}
            />
          </View>
          {children}
        </Pressable>
      </Pressable>
    </DefaultModal>
  );
}
