import Card from "@/components/ui/Card";
import { UniFeather } from "@/components/ui/Icons";
import Text from "@/components/ui/Text";
import TextInput from "@/components/ui/TextInput";
import View from "@/components/ui/View";
import { useAppDispatch } from "@/store/hooks";
import { changeLanguageThunk } from "@/store/slices/app/appThunk";
import { SupportedLanguages } from "@/utils/i18n";
import React, { ComponentProps, useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Pressable } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import CountryFlag from "react-native-country-flag";

type language_item = {
  code: SupportedLanguages;
  label: string;
	flag: string;
};
const languages_list: language_item[] = [
  { code: "fa", flag: "af", label: "دری" },
  { code: "ps", flag: "af", label: "پشتو" },
  { code: "ar", flag: "ae", label: "عربی" },
  { code: "fa", flag: "fr", label: "French" },
  { code: "it", flag: "it", label: "Italian" },
  { code: "en", flag: "us", label: "English" },
];

export default function ChooseLanguageScreen() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [search, setsearch] = useState<string>("");

  const handleChangeLanguage = (language: SupportedLanguages) => {
    dispatch(changeLanguageThunk(language));
  };

  return (
    <View style={styles.canvas}>
      <View style={styles.headerContainer}>
        <Text weight="bold" size="xl" style={{ textAlign: "center" }}>
          {t("screen.boarding.chooseYourLanguage")}
        </Text>
        <TextInput
          placeholder={t("search")}
          autoCapitalize="words"
          leftIcon={<UniFeather name="search" size={20} />}
          onChangeText={(text) => setsearch(text)}
        />
      </View>

      <FlatList
        data={languages_list.filter((i) =>
          i.label.toLowerCase().includes(search.toLowerCase()),
        )}
        numColumns={3}
        keyExtractor={(item, i) => item.code + i}
        //style={{ flex: 1 }}
        columnWrapperStyle={{
          gap: 10,
        }}
        contentContainerStyle={{
          gap: 10,
          marginTop: 10,
        }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handleChangeLanguage(item.code)}
            style={styles.languageCard}
          >
						<CountryFlag isoCode={item.flag} size={25} />
            <Text>{item.label}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  canvas: {
    flex: 1,
    paddingTop: rt.insets.top,
    paddingHorizontal: "10%",
  },
  headerContainer: {
    gap: theme.m.sm,
  },
  languageCard: {
    flex: 1,
		gap: 3,
    //marginTop: theme.m.md,
    //margin: 3.5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.cardBackground,
    padding: theme.p.md,
    borderRadius: theme.radius.md,
  },
}));
