import {StyleSheet} from 'react-native-unistyles';

const gs = StyleSheet.create(theme => ({
  hide: {display: 'none'},
  main: {
    flex: 1,
    paddingHorizontal: theme.p.lg,
		paddingVertical: theme.p.md,
  },
}));

export default gs;
