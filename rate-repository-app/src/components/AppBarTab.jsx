import {Pressable, Text} from "react-native";
import {Link} from "react-router-native";
import theme from "../theme";

const styles = {
  itemContainer: {
    padding: 10,
  },
  itemText: {
    color: theme.colors.appBarText,
  }
}

const AppBarTab = ({ text, path, onPress = () => {} }) => {
  return (
      <Pressable style={styles.itemContainer} onPress={onPress}>
        { path ? <Link to={path}><Text style={styles.itemText}>{text}</Text></Link> : <Text style={styles.itemText}>{text}</Text> }
      </Pressable>
  )
}

export default AppBarTab;