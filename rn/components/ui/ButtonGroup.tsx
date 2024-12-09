import React from 'react';
import {View, ViewProps, ViewStyle} from 'react-native';
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
    <View style={styles.wrapper}>
      <View style={[styles.buttonGroup]} {...props}>
        {buttons.map(({style: btnStyle, ...btnProps}, i) => (
          <Button
            key={i}
            style={[
              styles.button(i === 0, i === buttons.length - 1),
              btnStyle as ViewStyle,
            ]}
            {...btnProps}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create(theme => ({
  wrapper: {
    flexDirection: 'row',
  },
  buttonGroup: {
    flex: 1,
    flexDirection: 'row',
  },
  button: (first: boolean, last: boolean) => ({
    flex: 1,
    borderRadius: 0,
    borderEndEndRadius: last ? theme.radius.md : 0,
    borderStartEndRadius: first ? theme.radius.md : 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
  }),
}));
