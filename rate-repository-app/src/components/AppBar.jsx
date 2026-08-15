import {View, StyleSheet, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    width: '100%',
    backgroundColor: '#24292e'
  },
  contentContainerStyle: {
    alignItems: "center",
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView horizontal scrollEnabled showsHorizontalScrollIndicator={false} style={{flexGrow: 1}} contentContainerStyle={styles.contentContainerStyle}>
      <AppBarTab text="Repositories" path="/" />
      <AppBarTab text="Sign in" path="/signIn" />
    </ScrollView>
  </View>;
};

export default AppBar;