import {Pressable, Text} from "react-native";

const AppBarTab = ({text, style}) => {
  return (
      <Pressable style={style.itemContainer}>
        <Text style={style.itemText}>{text}</Text>
      </Pressable>
  )
}

export default AppBarTab;