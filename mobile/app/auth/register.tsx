import React, { useState } from "react";
import Text from "../../components/ui/Text";
import { StyleSheet } from "react-native-unistyles";
import TextInput from "../../components/ui/TextInput";
import Button from "@/components/ui/Button";
import View from "@/components/ui/View";
import { UniFeather } from "@/components/ui/Icons";
import { Link } from "expo-router";

export default function RegisterScreen() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <>
      <Text color="primary" weight="bold" size="xl">
        Register Account
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
          Already have account?{" "}
          <Link replace href={"/auth/login"}>
            <Text color="secondary" weight="semibold">
              Login
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
