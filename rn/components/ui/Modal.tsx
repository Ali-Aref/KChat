import React, {Dispatch, SetStateAction} from 'react';
import {
  View,
  Modal as RNModal,
  ModalProps as RNModalProps,
  Pressable,
  ViewStyle,
  ScrollView,
} from 'react-native';
import {StyleSheet} from 'react-native-unistyles';

type ModalPositions = 'top' | 'center' | 'bottom';

type ModalProps = RNModalProps & {
  show: {
    get: boolean;
    set: Dispatch<SetStateAction<boolean>>;
  };
  position?: ModalPositions;
  containerStyle?: ViewStyle;
  showCloseButton?: boolean;
};

const mapPosition = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
} as const;

export default function Modal({
  children,
  show,
  position = 'center',
  containerStyle = {},
  ...props
}: ModalProps) {
  const closeModal = () => show.set(false);

  return (
    <RNModal
      visible={show.get}
      onRequestClose={closeModal}
      transparent={true}
      statusBarTranslucent={true}
      {...props}>
      <Pressable
        onPress={closeModal}
        style={[styles.overlay(mapPosition[position])]}>
        <Pressable style={[styles.container, containerStyle || {}]}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.scrollView} onStartShouldSetResponder={() => true}>
              {children}
            </View>
          </ScrollView>
        </Pressable>
      </Pressable>
    </RNModal>
  );
}

const styles = StyleSheet.create((theme) => ({
  overlay: (position: ViewStyle['justifyContent']) => ({
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: position,
  }),
  container: {
    padding: theme.p.lg,
    backgroundColor: theme.colors.background,
    maxHeight: '85%',
  },
  scrollView: {
    flexGrow: 1,
  },
}));
