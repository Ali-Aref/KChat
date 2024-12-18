import React, { useState } from "react";
import Text from "../../components/ui/Text";
import { StyleSheet } from "react-native-unistyles";
import TextInput from "../../components/ui/TextInput";
import Button from "@/components/ui/Button";
import View from "@/components/ui/View";
import { UniFeather } from "@/components/ui/Icons";
import { Link } from "expo-router";
import { useTranslation } from "react-i18next";

export default function RegisterScreen() {
	const {t} = useTranslation()
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <Text color="primary" weight="bold" size="xl">
				{t("screen.auth.registerAccount")}
      </Text>
      <View style={styles.loginForm}>
        <TextInput
          label={t("username")}
          autoCapitalize="none"
          leftIcon={<UniFeather name="mail" size={25} />}
        />
        <TextInput
          label={t("email")}
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
        <TextInput
          label={t("confirmPassword")}
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
        <Button
          loading={false}
          title={t("screen.auth.register")}
          variant="primary"
          style={styles.loginButton}
        />
        <Text>
					{t("screen.auth.alreadyHaveAccount")}{" "}
          <Link replace href={"/auth/login"}>
            <Text color="secondary" weight="semibold">
							{t("screen.auth.login")}
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
