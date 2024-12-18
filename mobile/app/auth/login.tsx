import React, { useState } from "react";
import Text from "../../components/ui/Text";
import { StyleSheet } from "react-native-unistyles";
import TextInput from "../../components/ui/TextInput";
import Button from "@/components/ui/Button";
import View from "@/components/ui/View";
import { UniFeather } from "@/components/ui/Icons";
import { Link } from "expo-router";
import i18n from "@/util/i18n";
import { useTranslation } from "react-i18next";

export default function LoginScreen() {
	const {t} = useTranslation()
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <Text color="primary" weight="bold" size="xl">
				{t("welcomeToKchat")}
      </Text>
      <View style={styles.loginForm}>
        <TextInput
          label={t("username")}
          autoCapitalize="none"
          leftIcon={<UniFeather name="mail" size={25} />}
        />
        <TextInput
          label={t("password")}
          autoCapitalize="none"
          secureTextEntry={!showPassword}
          leftIcon={<UniFeather name="lock" size={25} />}
          rightIcon={
            <UniFeather
              size={25}
              name={showPassword ? "eye-off" : "eye"}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
        <Text color="secondary" weight="semibold">
					{t("screen.auth.forgotPassword")}
        </Text>
        <Button
          loading={false}
          title={t("screen.auth.login")}
          variant="primary"
          style={styles.loginButton}
        />
        <Text>
          {t("screen.auth.don'tHaveAccount")}{" "}
          <Link href={"/auth/register"}>
            <Text color="secondary" weight="semibold">
							{t("screen.auth.register")}
            </Text>
          </Link>
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  loginForm: {
    gap: 5,
    marginTop: 20,
  },
  loginButton: {
    marginTop: 10,
    marginBottom: 5,
  },
}));
