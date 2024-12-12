import {StyleSheet} from 'react-native-unistyles';

const gs = StyleSheet.create(theme => ({
  hide: {display: 'none'},
  canvas: {
    flex: 1,
    paddingHorizontal: theme.p.lg,
    paddingVertical: theme.p.md,
  },
  row: {
		gap: 5,
    flexDirection: 'row',
  },
}));

export default gs;
