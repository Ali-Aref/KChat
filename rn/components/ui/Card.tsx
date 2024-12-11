import React from 'react';
import {View, ViewProps} from 'react-native';
import {StyleSheet} from 'react-native-unistyles';
import Text, {TextProps} from './Text';

type CardProps = ViewProps & {
  rounded?: boolean;
};
type CardTitleProps = TextProps & {};
type CardFooterProps = ViewProps & {row?: boolean};

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

export function CardActions({children}: ViewProps) {
  return <CardSection style={styles.cardActions}>
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
    marginTop: theme.m.sm,
    flexDirection: row ? 'row' : 'column',
  }),
  cardActions: {
    marginBottom: -theme.m.md,
    marginHorizontal: -theme.m.md,
  },
}));
