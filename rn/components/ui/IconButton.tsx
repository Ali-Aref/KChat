import React, {ReactElement, useState} from 'react';
import {Pressable, PressableProps} from 'react-native';
import {StyleSheet, UnistylesVariants} from 'react-native-unistyles';

type IconButton = PressableProps &
  UnistylesVariants<typeof styles> & {
    icon: ReactElement;
  };

export default function IconButton({icon, variant, ...props}: IconButton) {
  styles.useVariants({
    variant,
  });
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
      style={[styles.button(pressed)]}
      {...props}>
      {React.cloneElement(icon, styles.title)}
    </Pressable>
  );
}

const styles = StyleSheet.create(theme => ({
  button: (pressed: boolean) => ({
    //borderRadius: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: pressed ? 1 : 2,
    backgroundColor: theme.colors.blue['500'],
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
    },
  },
}));
