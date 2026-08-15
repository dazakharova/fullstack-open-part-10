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

const AppBarTab = ({text, path}) => {
  return (
      <Pressable style={styles.itemContainer}>
      <Link to={path}><Text style={styles.itemText}>{text}</Text></Link>
      </Pressable>
  )
}

export default AppBarTab;