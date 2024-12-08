import React from 'react';
import {View, ViewProps} from 'react-native';
import Button, {ButtonProps} from './Button';
import {StyleSheet} from 'react-native-unistyles';

type ButtonGroupProps = ViewProps & {
  buttons: ButtonProps[];
};

export default function ButtonGroup({
  buttons,
  ...props
}: ButtonGroupProps) {
  return (
    <View style={[styles.buttonGroup]} {...props}>
      {buttons.map((button, i) => (
        <Button
          key={i}
          style={styles.button}
          {...button}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create(theme => ({
  buttonGroup: {
    flex: 1,
		width: '100%',
		backgroundColor: 'dodgerblue',
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    borderRadius: 0,
		borderWidth: 0,
		paddingHorizontal: 20,
		paddingVertical: 10,
  },
}));
