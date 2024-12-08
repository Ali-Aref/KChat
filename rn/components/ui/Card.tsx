import React, {ReactElement} from 'react';
import {View, ViewProps} from 'react-native';
import {StyleSheet} from 'react-native-unistyles';
import Text, {TextProps} from './Text';
import Button, {ButtonProps} from './Button';

type CardProps = ViewProps & {
  rounded?: boolean;
};
type CardTitleProps = TextProps & {};
type CardFooterProps = ViewProps & {row?: boolean};
type CardButtonProps = ButtonProps;

export default function Card({
  children,
  rounded,
  style = {},
  ...props
}: CardProps) {
  styles.useVariants({
    rounded,
  });

  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
}

export function CardTitle({children, style, ...props}: CardTitleProps) {
  return (
    <Text style={style} weight="bold" {...props}>
      {children}
    </Text>
  );
}

export function CardSection({
  children,
  style,
  row,
  ...props
}: CardFooterProps) {
  return (
    <View style={[styles.cardSection(row), style]} {...props}>
      {children}
    </View>
  );
}

export function CardButton({...props}: CardButtonProps) {
  return <Button {...props} style={styles.actionButton} />;
}

export function CardActions({children}: ViewProps) {
  return <CardSection style={[styles.cardActionsContainer]}>
		{children}
	</CardSection>;
}

const styles = StyleSheet.create(theme => ({
  card: {
    padding: theme.p.md,
    backgroundColor: theme.colors.cardBackground,
    overflow: 'hidden',
    variants: {
      rounded: {
        true: {borderRadius: theme.radius.md},
      },
    },
  },
  cardSection: (row?: boolean) => ({
    //backgroundColor: theme.colors.teal['400'],
    //gap: theme.m.sm,
    marginTop: theme.m.sm,
    flexDirection: row ? 'row' : 'column',
  }),
  cardActionsContainer: {
		flexDirection: 'row',
    marginBottom: -theme.m.md,
    marginHorizontal: -theme.m.md,
  },
  actionButton: {
    flex: 1,
    borderRadius: 0,
    //marginHorizontal: -theme.m.md,
  },
}));
