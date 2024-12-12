import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  View,
} from 'react-native';
import Text from '../../components/ui/Text';
import {StyleSheet} from 'react-native-unistyles';
import gs from '../../lib/theme/global.style';
import TextInput from '../../components/ui/TextInput';
import Button from '../../components/ui/Button';
import Icon from 'react-native-vector-icons/Feather';

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View style={[styles.canvas]}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require('../../assets/images/logo/logo-o.png')}
      />
      <Text color="primary" weight="bold" size="xl">
        Weclome to KChat
      </Text>
      <View style={styles.loginForm}>
        <TextInput
          label="Username"
          autoCapitalize="none"
          leftIcon={<Icon name="mail" size={25} />}
        />
        <TextInput
          label="Password"
          autoCapitalize="none"
          secureTextEntry={!showPassword}
          leftIcon={<Icon name="lock" size={25} />}
          rightIcon={
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Icon name={showPassword ? 'eye-off' : 'eye'} size={25} />
            </Pressable>
          }
        />
        <Text color="info">Forgot password?</Text>
        <Button
          variant="primary"
          title="Login"
          style={styles.loginButton}
        />
        <Text color="primary" style={styles.labelNewAccount}>
          Don't have account?{' '}
          <Text color="primary" weight="semibold" style={styles.link}>
            Create one
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  canvas: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '10%',
  },
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
    textDecorationLine: 'underline',
  },
}));
