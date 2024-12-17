import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import View from "@/components/ui/View";
import i18n, { changeLanguage } from "@/i18n";
import { Slot } from "expo-router";
import React from "react";
import { Image, KeyboardAvoidingView, ScrollView } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export default function AuthLayout() {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.kav}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("@/assets/images/logo/logo-o.png")}
        />
        <Slot />
      </ScrollView>
      <View style={{
				paddingHorizontal: "10%",
				flexDirection: "row",
			}}>
				<Text></Text>
        <Button variant="info" title="English" onPress={()=>changeLanguage("en")} />
        <Button variant="secondary" title="Farsi" onPress={()=>changeLanguage("fa")} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create((theme) => ({
  kav: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "10%",
    paddingVertical: 50,
  },
  logo: {
    width: 160,
    height: 160,
  },
}));
