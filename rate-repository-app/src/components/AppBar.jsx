import {View, StyleSheet, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from "./AppBarTab";
import useAuthenticatedUser from '../hooks/useAuthenticatedUser';
import useSignOut from '../hooks/useSignOut';

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
  const { user } = useAuthenticatedUser();
  const signOut = useSignOut();

  return <View style={styles.container}>
    <ScrollView horizontal scrollEnabled showsHorizontalScrollIndicator={false} style={{flexGrow: 1}} contentContainerStyle={styles.contentContainerStyle}>
      <AppBarTab text="Repositories" path="/" />
      { user ? <AppBarTab text="Sign out" onPress={signOut} /> : <AppBarTab text="Sign in" path="/signIn" /> }
    </ScrollView>
  </View>;
};

export default AppBar;