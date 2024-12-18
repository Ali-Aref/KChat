import Button from "@/components/ui/Button";
import ButtonGroup from "@/components/ui/ButtonGroup";
import Card, {
  CardActions,
  CardSection,
  CardTitle,
} from "@/components/ui/Card";
import { UniFeather } from "@/components/ui/Icons";
import Text from "@/components/ui/Text";
import TextInput from "@/components/ui/TextInput";
import View from "@/components/ui/View";
import { SupportedLanguages } from "@/utils/i18n";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type language_item = {
  code: SupportedLanguages;
  label: string;
};
const languages_list = [
  { code: "en", label: "English" },
  { code: "it", label: "Italian" },
  { code: "fa", label: "Dari" },
];

export default function ChooseLanguageScreen() {
  const { t } = useTranslation();
  const [search, setsearch] = useState<string>("");

  return (
    <View style={styles.canvas}>
      <TextInput
        placeholder="Search for your language"
        autoCapitalize="words"
        leftIcon={<UniFeather name="search" size={20} />}
        onChangeText={(text) => setsearch(text)}
      />
      <Text weight="bold">{t("chooseYourLanguage")}</Text>
      <FlatList
        data={languages_list.filter((i) =>
          i.label.toLowerCase().includes(search.toLowerCase()),
        )}
        numColumns={3}
        keyExtractor={(item) => item.code}
        style={{ flex: 1 }}
        contentContainerStyle={{
          marginTop: 10,
          //backgroundColor: 'dodgerblue'
        }}
        renderItem={({ item }) => (
          <Card style={styles.languageCard}>
            <Text>{item.label}</Text>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  canvas: {
    flex: 1,
    paddingTop: rt.insets.top,
    alignItems: "center",
    justifyContent: "center",
  },
  chooseLanguageContainer: {
    padding: theme.p.md,
    backgroundColor: theme.colors.cardBackground,
  },
  languageCard: {
		alignItems: "center",
		justifyContent: "center",
  },
}));
