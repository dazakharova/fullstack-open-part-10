import {View, Image, StyleSheet} from "react-native";
import Text from './Text';
import theme from '../theme';

const ItemHeader = ({info}) => {
  return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Image
              style={styles.avatar}
              source={{uri: info.ownerAvatarUrl}}
          />
        </View>
        <View style={styles.rightItem}>
          <Text fontWeight="bold" style={styles.text}>
            Full name: {info.fullName}
          </Text>
          <Text color="textSecondary" style={styles.text}>
            Description: {info.description}
          </Text>
          <View style={styles.languageWrapper}>
            <Text color="white" fontWeight="bold" style={styles.languageText}>{info.language}</Text>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 10,
    marginBottom: 10,
  },
  rightItem: {
    width: "70%",
    flexShrink: 1,
  },
  text: {
    padding: 3,
  },
  languageWrapper: {
    alignSelf: "flex-start",
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginTop: 5,
    backgroundColor: theme.colors.primary,
  },
  languageText: {
    color: "white",
    fontWeight: "bold",
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: "white",
  },
});

export default ItemHeader;