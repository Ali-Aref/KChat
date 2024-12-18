import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import View from "@/components/ui/View";
import { SupportedLanguages } from "@/utils/i18n";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { changeLanguageThunk } from "@/store/slices/app/appThunk";
import { getLocales } from "expo-localization";
import { Slot } from "expo-router";
import i18next from "i18next";
import React, { useState } from "react";
import { I18nManager, Image, KeyboardAvoidingView, ScrollView } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { useDispatch } from "react-redux";

export default function AuthLayout() {
	const dispatch = useAppDispatch()
  const { language } = useAppSelector((s) => s.app);

  const handleCL = async (code: SupportedLanguages) => {
		dispatch(changeLanguageThunk(code))
  };

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
      <View style={{ paddingHorizontal: "10%", gap: 5 }}>
        <Text>device lang: {getLocales()[0].languageCode}</Text>
        <Text>I18Manger.isRTL: {String(I18nManager.isRTL)}</Text>
        <Text>store.language: {language}</Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Button
            variant="info"
            title="English"
            onPress={() => handleCL("en")}
          />
          <Button
            variant="secondary"
            title="Farsi"
            onPress={() => handleCL("fa")}
          />
          <Button
            variant="warning"
            title="Itlay"
            onPress={() => handleCL("it")}
          />
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
