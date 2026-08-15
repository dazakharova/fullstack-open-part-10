import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from "./theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    width: '100%',
    backgroundColor: '#24292e'
  },
  item: {
    itemContainer: {
      padding: 10,
    },
    itemText: {
      color: theme.colors.appBarText,
    }
  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <AppBarTab style={styles.item} text="Repositories" />
  </View>;
};

export default AppBar;