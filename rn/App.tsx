import './lib/theme/unistyles';
import React, { useState } from 'react';
import {Appearance, View, StatusBar, useColorScheme} from 'react-native';
import {
  StatusBarStyle,
  StyleSheet,
  UnistylesRuntime,
} from 'react-native-unistyles';
import {darkTheme, lightTheme, shared} from './lib/theme/themes';
import Text from './components/ui/Text';
import Button from './components/ui/Button';
import Icon from 'react-native-vector-icons/Feather';
import gs from './lib/theme/global.style';
import TextInput from './components/ui/TextInput';
import Modal from './components/ui/Modal';
import Card, { CardActions, CardButton, CardSection, CardTitle } from './components/ui/Card';
import ButtonGroup from './components/ui/ButtonGroup';

Appearance.setColorScheme(null);

export default function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
	const [showModal, setshowModal] = useState<boolean>(false)
  // setting statusbar
  if (colorScheme === 'light') {
    UnistylesRuntime.statusBar.setStyle(StatusBarStyle.Dark);
    StatusBar.setBackgroundColor(lightTheme.colors.background);
  } else {
    UnistylesRuntime.statusBar.setStyle(StatusBarStyle.Light);
    StatusBar.setBackgroundColor(darkTheme.colors.background);
  }

  return (
    <View style={[styles.container, gs.main]}>
      <Text>Colorschem: {UnistylesRuntime.colorScheme}</Text>
      <View style={[styles.main, gs.hide]}>
        <Text>Button Sizes</Text>
        <Button size="xs" variant="info" title="button" />
        <Button size="sm" variant="info" title="button" />
        <Button size="md" variant="info" title="button md" />
        <Button variant="info" title="button def" />
        <Button size="lg" variant="info" title="button" />
        <Button size="xl" variant="info" title="button" />
        <Button size="2xl" variant="info" title="button" />
        <Button size="3xl" variant="info" title="button" />
      </View>
      <View style={[styles.main, gs.hide]}>
        <Text>Button Variants</Text>
        <Button variant="primary" title="Primary" />
        <Button variant="secondary" title="Secondary" />
        <Button variant="info" title="Info" />
        <Button variant="success" title="Success" />
        <Button variant="warning" title="Warning" />
        <Button variant="error" title="Error" />
      </View>
      <View style={[styles.main, gs.hide]}>
        <Text>Disabled Buttons</Text>
        <Button disabled variant="primary" title="Primary" />
        <Button disabled variant="secondary" title="Secondary" />
        <Button disabled variant="info" title="Info" />
        <Button disabled variant="success" title="Success" />
        <Button disabled variant="warning" title="Warning" />
        <Button disabled variant="error" title="Error" />
      </View>
      <View style={[styles.main, gs.hide]}>
        <Text>Buttons with Icon</Text>
				<View style={[gs.row]}>
					<Button icon={<Icon name="home" size={25} />} variant="primary" />
					<Button icon={<Icon name="home" size={25} />} variant="secondary" />
					<Button icon={<Icon name="home" size={25} />} variant="info" />
					<Button icon={<Icon name="home" size={25} />} variant="success" />
					<Button icon={<Icon name="home" size={25} />} variant="warning" />
					<Button icon={<Icon name="home" size={25} />} variant="error" />
				</View>
        <Button icon={<Icon name="home" size={25} />} variant="primary" title="Primary" />
        <Button icon={<Icon name="home" size={25} />} variant="secondary" title="Secondary" />
        <Button icon={<Icon name="home" size={25} />} variant="info" title="Info" />
        <Button icon={<Icon name="home" size={25} />} variant="success" title="Success" />
        <Button icon={<Icon name="home" size={25} />} variant="warning" title="Warning" />
        <Button icon={<Icon name="home" size={25} />} variant="error" title="Error" />
      </View>
      <View style={[styles.main, gs.hide]}>
        <TextInput
          label="Username"
          leftIcon={<Icon name="user" size={20} />}
        />
        <TextInput
          label="Username"
          variant="info"
          leftIcon={<Icon name="user" size={20} />}
        />
        <TextInput
          label="Username"
          variant="success"
          leftIcon={<Icon name="user" size={20} />}
        />
        <TextInput
          label="Username"
          variant="warning"
          leftIcon={<Icon name="user" size={20} />}
        />
        <TextInput
          label="Username"
          variant="error"
          leftIcon={<Icon name="user" size={20} />}
        />
      </View>
			<View style={[styles.main, gs.hide]}>
				<Button variant="primary" title="Show modal" onPress={()=>{
					setshowModal(true);
				}} />
				<Modal
					position="bottom"
					show={{ get: showModal, set: setshowModal }}
					containerStyle={{
					}}
				>
					<View>
						<Text>Here is our modal</Text>
						<Text>Here is our modal</Text>
						<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa vero porro at, quidem, nulla vel ratione nobis voluptatibus vitae ea expedita nesciunt officia repellat, beatae dolorum! Labore, aliquid nemo!!!!</Text>
					</View>
				</Modal>
			</View>
			<View style={[styles.main]}>
				<Card rounded>
						<CardTitle>Credit Details</CardTitle>
						<CardSection>
							<Text>Here is our modal</Text>
							<Text>Here is our modal</Text>
							<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa vero porro at, quidem, nulla vel ratione nobis voluptatibus vitae ea expedita nesciunt officia repellat, beatae dolorum! Labore, aliquid nemo!!!!</Text>
						</CardSection>
						<CardSection>
							<Text>Here is our modal</Text>
							<Text>Here is our modal</Text>
							<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa vero porro at, quidem, nulla vel ratione nobis voluptatibus vitae ea expedita nesciunt officia repellat, beatae dolorum! Labore, aliquid nemo!!!!</Text>
						</CardSection>
						<CardSection row>
							<Text>is our modal</Text>
							<Text>Here is our modal</Text>

						</CardSection>
						<CardActions>
							<ButtonGroup>
								<Button variant="secondary" title="Error" icon={<Icon name="user" />} />
								<Button variant="info" title="Hello Info" icon={<Icon name="check" />} />
								<Button variant="primary" title="Primary" icon={<Icon name="home" />} />
							</ButtonGroup>
						</CardActions>
				</Card>
			</View>
    </View>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: rt.insets.top,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
  hide: {display: 'none'},
  main: {
    width: '100%',
    gap: 10,
    marginTop: 10,
    marginBottom: 100,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  icon: {
    color: theme.colors.typography,
  },
}));
