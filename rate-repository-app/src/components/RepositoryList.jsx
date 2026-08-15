import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from "./RepositoryItem";
import theme from "../theme";
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;


const renderItem = ({item}) => {
  return (
      <RepositoryItem
          item={item}/>
  )
}

const RepositoryList = () => {
  const { repositories } = useRepositories();
  const repositoryNodes = repositories ? (repositories.edges.map(edge => edge.node)) : [];

  return (
      <View style={{ backgroundColor: theme.backgroundColors.mainBackground, flex: 1 }}>
        <FlatList
            data={repositoryNodes}
            renderItem={renderItem}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={(rep) => rep.id}
        />
      </View>
  );
};

export default RepositoryList;