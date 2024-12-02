import React, {useState} from 'react';
import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import {StyleSheet, UnistylesVariants} from 'react-native-unistyles';
import Text from './Text';

type TextInputProps = RNTextInputProps &
  UnistylesVariants<typeof styles> & {
		// remove size
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
    label?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };

export default function TextInput({
  style,
  variant,
  size,
  label, onFocus,
  onBlur,
  leftIcon,
  rightIcon,
  ...props
}: TextInputProps) {
  const [focused, setFocused] = useState<boolean>(false);
  styles.useVariants({
    size,
    variant,
  });

  const handleFocus = (
    e: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    setFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };
  const handleBlur = (
    e: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    setFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <View style={styles.container}>
      {label && <Text size={size}>{label}</Text>}
      <View style={styles.inputContainer(focused)}>
        {leftIcon && leftIcon}
        <RNTextInput
          style={[styles.input, style]}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {rightIcon && rightIcon}
      </View>
    </View>
  );
}

const styles = StyleSheet.create(theme => ({
  container: {
    width: '100%',
    //backgroundColor: theme.colors.sky["800"],
  },
  inputContainer: (focused: boolean) => ({
    variants: {
      variant: {
        default: {
          color: theme.colors.typography,
          backgroundColor: theme.components.textInput.bg,
					borderColor: theme.components.textInput.borderColor,
        },
        info: {
          color: theme.colors.blue['700'],
          backgroundColor: theme.colors.blue['200'],
          borderColor: theme.colors.blue['700'],
        },
        success: {
          color: theme.colors.green['700'],
          backgroundColor: theme.colors.green['200'],
          borderColor: theme.colors.green['700'],
        },
        warning: {
          color: theme.colors.orange['700'],
          backgroundColor: theme.colors.orange['200'],
          borderColor: theme.colors.orange['700'],
        },
        error: {
          color: theme.colors.red['700'],
          backgroundColor: theme.colors.red['200'],
          borderColor: theme.colors.red['700'],
        },
      },
    },
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 5,
    overflow: 'hidden',
    paddingHorizontal: 10,
    borderWidth: focused ? 2 : StyleSheet.hairlineWidth,
    marginVertical: focused ? StyleSheet.hairlineWidth : 2,
    backgroundColor: theme.components.textInput.bg,
    borderColor: theme.components.textInput.borderColor, // remove when default vairants are supported
  }),
  input: {
    flex: 1,
    // remove when default vairants are supported
    fontSize: 16,
    color: theme.colors.typography,
    //backgroundColor: 'dodgerblue',
    //
    variants: {
      variant: {
        default: {color: theme.colors.typography},
        info: {color: theme.colors.blue['700']},
        success: {color: theme.colors.green['700']},
        warning: {color: theme.colors.orange['700']},
        error: {color: theme.colors.red['700']},
      },
      size: {
        default: {fontSize: 16},
        xs: {fontSize: 12},
        sm: {fontSize: 14},
        md: {fontSize: 16},
        lg: {fontSize: 18},
        xl: {fontSize: 20},
        '2xl': {fontSize: 22},
        '3xl': {fontSize: 24},
        '4xl': {fontSize: 26},
        '5xl': {fontSize: 28},
      },
    },
  },
}));

// TODO: fix these when default variants are supported
