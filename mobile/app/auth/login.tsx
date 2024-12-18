import React, { useState } from "react";
import Text from "../../components/ui/Text";
import { StyleSheet } from "react-native-unistyles";
import TextInput from "../../components/ui/TextInput";
import Button from "@/components/ui/Button";
import View from "@/components/ui/View";
import { UniFeather } from "@/components/ui/Icons";
import { Link } from "expo-router";
import i18n from "@/i18n";
import { useAppSelector } from "@/store/hooks";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
	const language = useAppSelector(state=> state.app.language)

	console.log("store language code: ", language)

  return (
    <>
      <Text color="primary" weight="bold" size="xl">
				{i18n.t("welcomeToKchat")}
      </Text>
      <View style={styles.loginForm}>
        <TextInput
          label={i18n.t("username")}
          autoCapitalize="none"
          leftIcon={<UniFeather name="mail" size={25} />}
        />
        <TextInput
          label={i18n.t("password")}
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
					{i18n.t("screen.auth.forgotPassword")}
        </Text>
        <Button
          loading={false}
          title={i18n.t("screen.auth.login")}
          variant="primary"
          style={styles.loginButton}
        />
        <Text>
          {i18n.t("screen.auth.don'tHaveAccount")}{" "}
          <Link href={"/auth/register"}>
            <Text color="secondary" weight="semibold">
							{i18n.t("screen.auth.register")}
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
