import {Pressable, Text} from "react-native";
import {Link} from "react-router-native";

const AppBarTab = ({text, style, path}) => {
  return (
      <Pressable style={style.itemContainer}>
        <Link to={path}><Text style={style.itemText}>{text}</Text></Link>
      </Pressable>
  )
}

export default AppBarTab;