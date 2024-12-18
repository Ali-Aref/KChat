import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import View from "@/components/ui/View";
import i18n from "@/i18n";
import { getLocales } from "expo-localization";
import { Slot } from "expo-router";
import React, { useState } from "react";
import { Image, KeyboardAvoidingView, ScrollView } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type LanguageCodes = "en" | "fa"

export default function AuthLayout() {
	console.log("device language: ", getLocales()[0].languageCode);
	

	const changeLanguage = async (code: LanguageCodes) => {
		console.log("change lang too: ", code)
		i18n.locale = code
	}


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
			<View style={{ paddingHorizontal: '10%', gap: 5 }}>
				<Text>i18n.locale: {i18n.locale}</Text>
				<View style={{
					flexDirection: "row",
				}}>
					<Button variant="info" title="English" onPress={()=>changeLanguage("en")} />
					<Button variant="secondary" title="Farsi" onPress={()=>changeLanguage("fa")} />
				</View>
			</View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  kav: {
    flex: 1,
    backgroundColor: theme.colors.background,
		paddingBottom: rt.insets.bottom,
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
