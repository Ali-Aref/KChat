import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import Text from "../../components/ui/Text";
import {
  StyleSheet,
  UnistylesRuntime,
  withUnistyles,
} from "react-native-unistyles";
import TextInput from "../../components/ui/TextInput";
import Button from "@/components/ui/Button";
import View from "@/components/ui/View";
import { UniFeather } from "@/components/ui/Icons";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View>
		<KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView
				showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
					paddingHorizontal: '10%',
					paddingVertical: 50,
        }}
      >
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require("../../assets/images/logo/logo-o.png")}
          />
          <Text color="primary" weight="bold" size="xl">
            Weclome to KChat
          </Text>
          <Text color="warning">ime: {UnistylesRuntime.insets.ime}</Text>
          <View style={styles.loginForm}>
            <TextInput
              label="Username"
              autoCapitalize="none"
              leftIcon={<UniFeather name="mail" size={25} />}
            />
            <TextInput
              label="Username"
              autoCapitalize="none"
              leftIcon={<UniFeather name="mail" size={25} />}
            />
            <TextInput
              label="Username"
              autoCapitalize="none"
              leftIcon={<UniFeather name="mail" size={25} />}
            />
            <TextInput
              label="Username"
              autoCapitalize="none"
              leftIcon={<UniFeather name="user" size={25} />}
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
            <Text color="info">Forgot password?</Text>
            <Button
              title="Login"
              variant="success"
              icon={<UniFeather name="star" size={20} />}
            />
            <Text color="primary" style={styles.labelNewAccount}>
              Don't have account?{" "}
              <Text color="primary" weight="semibold" style={styles.link}>
                Create one
              </Text>
            </Text>
          </View>
      </ScrollView>
		</KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  logo: {
    width: 150,
    height: 150,
  },
  loginForm: {
    //width: '100%',
    gap: 5,
    marginTop: 20,
  },
  loginButton: {
    marginTop: 10,
  },
  labelNewAccount: {
    //marginTop: 10,
    //textAlign: 'center',
    //fontWeight: '500',
  },
  link: {
    //textDecorationLine: "underline",
  },
}));
