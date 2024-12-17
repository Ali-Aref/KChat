import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Text from "../../components/ui/Text";
import {
  StyleSheet,
} from "react-native-unistyles";
import TextInput from "../../components/ui/TextInput";
import Button from "@/components/ui/Button";
import View from "@/components/ui/View";
import { UniFeather } from "@/components/ui/Icons";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
		<KeyboardAvoidingView behavior="padding" style={styles.kav}>
      <ScrollView
				showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require("../../assets/images/logo/logo-o.png")}
          />
          <Text color="primary" weight="bold" size="xl">
            Weclome to KChat
          </Text>
          <View style={styles.loginForm}>
            <TextInput
              label="Username"
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
            <Text color="secondary" weight="semibold">Forgot password?</Text>
            <Button
							loading={false}
              title="Login"
              variant="primary"
							style={styles.loginButton}
            />
            <Text>
              Don't have account?{" "}
              <Text color="secondary" weight="semibold">
                Create one
              </Text>
            </Text>
          </View>
      </ScrollView>
		</KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
	kav: {
		flex: 1,
		backgroundColor: theme.colors.background,
	},
	contentContainer: {
		flexGrow: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: '10%',
		paddingVertical: 50,
	},
  logo: {
    width: 160,
    height: 160,
  },
  loginForm: {
    gap: 5,
    marginTop: 20,
  },
  loginButton: {
    marginTop: 10,
  },
}));
