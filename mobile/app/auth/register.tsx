import React, { useState } from "react";
import Text from "../../components/ui/Text";
import { StyleSheet } from "react-native-unistyles";
import TextInput from "../../components/ui/TextInput";
import Button from "@/components/ui/Button";
import View from "@/components/ui/View";
import { UniFeather } from "@/components/ui/Icons";
import { Link } from "expo-router";
import i18n from "@/i18n";

export default function RegisterScreen() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <Text color="primary" weight="bold" size="xl">
				{i18n.t("screen.auth.registerAccount")}
      </Text>
      <View style={styles.loginForm}>
        <TextInput
          label="Username"
          autoCapitalize="none"
          leftIcon={<UniFeather name="mail" size={25} />}
        />
        <TextInput
          label="Email"
          autoCapitalize="none"
          leftIcon={<UniFeather name="mail" size={25} />}
        />
        <TextInput
          label="Password"
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
          label="Confirm Password"
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
          title="Register"
          variant="primary"
          style={styles.loginButton}
        />
        <Text>
					{i18n.t("screen.auth.alreadyHaveAccount")}{" "}
          <Link replace href={"/auth/login"}>
            <Text color="secondary" weight="semibold">
							{i18n.t("screen.auth.login")}
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
