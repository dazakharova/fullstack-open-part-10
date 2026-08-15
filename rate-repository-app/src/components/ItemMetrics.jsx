import {View, StyleSheet} from 'react-native';
import Text from './Text';

const formatCountNum = (num) => {
  if (num < 1000) {
    return num;
  }

  return (num / 1000).toFixed(1) + 'k'
}

const ItemMetrics = ({metrics}) => {
  return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text fontWeight="bold">{formatCountNum(metrics.stargazersCount)}</Text>
          <Text color="textSecondary">Stars</Text>
        </View>
        <View style={styles.row}>
          <Text fontWeight="bold">{formatCountNum(metrics.forksCount)}</Text>
          <Text color="textSecondary">Forks</Text>
        </View>
        <View style={styles.row}>
          <Text fontWeight="bold">{metrics.reviewCount}</Text>
          <Text color="textSecondary">Reviews</Text>
        </View>
        <View style={styles.row}>
          <Text fontWeight="bold">{metrics.ratingAverage}</Text>
          <Text color="textSecondary">Rating</Text>
        </View>
      </View>
  )
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "column",
    alignItems: "center",
  },
});

export default ItemMetrics;