import React, {ReactElement, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  ViewStyle,
} from 'react-native';
import {StyleSheet, UnistylesVariants} from 'react-native-unistyles';
import Text from './Text';

type ButtonProps = PressableProps &
  UnistylesVariants<typeof styles> & {
    title?: string;
    loading?: boolean;
    icon?: ReactElement;
    titleStyle?: any;
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
  };

export default function Button({
  title,
  loading,
  icon,
  variant,
  size,
	style,
  titleStyle: titleStyle,
  ...props
}: ButtonProps) {
  styles.useVariants({variant, size, disabled: !!props.disabled});
  // FIX: remove this state and use Pressable's state
  const [pressed, setPressed] = useState<boolean>(false);
  const handlePressIn = () => {
    setPressed(true);
  };
  const handlePressOut = () => {
    setPressed(false);
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      // TODO: add buttonStyle prop here
      //style={()=>[styles.button(pressed, !!title)]}
			style={() => ([style])}
      {...props}>
      {loading ? (
        <ActivityIndicator
          size="small"
          style={[styles.title, titleStyle]}
        />
      ) : icon ? (
        React.cloneElement(icon, {...styles.title, ...titleStyle})
      ) : null}
      {title ? (
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create(theme => ({
  button: (pressed: boolean, title: boolean) => ({
    //borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 10,
    borderWidth: pressed ? 1 : 2,
		margin: pressed ? 1 : 0,
    paddingVertical: 10,
    paddingHorizontal: title ? 20 : 10,
    variants: {
      variant: {
        default: {
          color: theme.colors.typography,
          backgroundColor: theme.components.textInput.bg,
        },
        primary: {
          backgroundColor: theme.colors.primary['400'],
          borderColor: theme.colors.primary['300'],
        },
        secondary: {
          backgroundColor: theme.colors.secondary['400'],
          borderColor: theme.colors.secondary['300'],
        },
        info: {
          backgroundColor: theme.colors.blue['400'],
          borderColor: theme.colors.blue['300'],
        },
        success: {
          backgroundColor: theme.colors.emerald['400'],
          borderColor: theme.colors.emerald['300'],
        },
        warning: {
          backgroundColor: theme.colors.orange['400'],
          borderColor: theme.colors.orange['300'],
        },
        error: {
          backgroundColor: theme.colors.red['400'],
          borderColor: theme.colors.red['300'],
        },
      },
      disabled: {
        true: {
          opacity: 0.5,
        },
      },
    },
  }),
  title: {
    variants: {
      variant: {
        default: {color: theme.colors.typography},
        primary: {color: theme.colors.primary['100']},
        secondary: {color: theme.colors.secondary['100']},
        info: {color: theme.colors.blue['100']},
        success: {color: theme.colors.green['100']},
        warning: {color: theme.colors.orange['100']},
        error: {color: theme.colors.red['100']},
      },
      size: {
        default: {
          fontSize: theme.fs.default,
          size: theme.fs.default,
        },
        xs: {fontSize: theme.fs.xs, size: theme.fs.xs},
        sm: {fontSize: theme.fs.sm, size: theme.fs.sm},
        md: {fontSize: theme.fs.md, size: theme.fs.md},
        lg: {fontSize: theme.fs.lg, size: theme.fs.lg},
        xl: {fontSize: theme.fs.xl, size: theme.fs.xl},
        '2xl': {fontSize: theme.fs['2xl'], size: theme.fs['2xl']},
        '3xl': {fontSize: theme.fs['3xl'], size: theme.fs['3xl']},
        '4xl': {fontSize: theme.fs['4xl'], size: theme.fs['4xl']},
        '5xl': {fontSize: theme.fs['5xl'], size: theme.fs['5xl']},
      },
    },
  },
}));
