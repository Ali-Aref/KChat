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
    size?:
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | '2xl'
      | '3xl'
      | '4xl'
      | '5xl';
    label?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    errorMessage?: string;
    description?: string;
  };

export default function TextInput({
  style,
  variant,
  size,
  label,
  onFocus,
  onBlur,
  leftIcon,
  rightIcon,
  errorMessage,
  description,
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
      {errorMessage && (
        <Text color="error" size={size}>
          {errorMessage}
        </Text>
      )}
      {description && <Text size={size}>{description}</Text>}
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
          backgroundColor: theme.components.textInput.bg,
          borderColor: theme.components.textInput.borderColor,
        },
        info: {
          backgroundColor: theme.colors.blue200,
          borderColor: theme.colors.blue700,
        },
        success: {
          backgroundColor: theme.colors.green200,
          borderColor: theme.colors.green700,
        },
        warning: {
          backgroundColor: theme.colors.orange200,
          borderColor: theme.colors.orange700,
        },
        error: {
          backgroundColor: theme.colors.red200,
          borderColor: theme.colors.red700,
        },
      },
    },
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 5,
    overflow: 'hidden',
    paddingHorizontal: 10,
    borderWidth: focused ? 1 : 0,
    marginVertical: focused ? 0 : 1,
    backgroundColor: theme.components.textInput.bg,
    borderColor: theme.components.textInput.borderColor, // remove when default vairants are supported
  }),
  input: {
    flex: 1,
    // remove
		paddingVertical: 10,
    fontSize: 16,
    color: theme.colors.typography,
    //backgroundColor: 'dodgerblue',
    //
    variants: {
      variant: {
        default: {color: theme.colors.typography},
        info: {color: theme.colors.blue700},
        success: {color: theme.colors.green700},
        warning: {color: theme.colors.orange700},
        error: {color: theme.colors.red700},
      },
      size: {
        default: {fontSize: theme.fs.default},
        xs: {fontSize: theme.fs.xs},
        sm: {fontSize: theme.fs.sm},
        md: {fontSize: theme.fs.md},
        lg: {fontSize: theme.fs.lg},
        xl: {fontSize: theme.fs.xl},
        '2xl': {fontSize: theme.fs['2xl']},
        '3xl': {fontSize: theme.fs['3xl']},
        '4xl': {fontSize: theme.fs['4xl']},
        '5xl': {fontSize: theme.fs['5xl']},
      },
    },
  },
  icon: {
    //variants: {
    //  variant: {
    //    info: {color: theme.colors.blue['700']},
    //    success: {color: theme.colors.green['700']},
    //    warning: {color: theme.colors.orange['700']},
    //    error: {color: theme.colors.red['700']},
    //  },
    //},
  },
}));

// TODO: fix these when default variants are supported
