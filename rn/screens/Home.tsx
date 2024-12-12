import React from 'react';
import {View} from 'react-native';
import Text from '../components/ui/Text';
import Button from '../components/ui/Button';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('AuthStack');
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Button variant="primary" title="Login" onPress={onPress} />
    </View>
  );
}
