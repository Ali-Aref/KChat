import React from 'react';
import {View, ViewProps } from 'react-native';
import { ButtonProps } from './Button';
import {StyleSheet} from 'react-native-unistyles';

type ButtonGroupProps = ViewProps & {
  children: React.ReactNode;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  style,
  children,
  ...props
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.buttonGroup, style]} {...props}>
        {React.Children.map(children, (child, i) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<ButtonProps>, {
							key: i,
              //style: [styles.button, child.props.style],
              style: [styles.button]
            });
          }
          //return child;
        })}
      </View>
    </View>
  );
};
export default ButtonGroup;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  buttonGroup: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
		borderRadius: 0,
		//backgroundColor: 'dodgerblue',
    //paddingVertical: 10,
  },
});
