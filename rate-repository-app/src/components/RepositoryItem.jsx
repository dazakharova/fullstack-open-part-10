import { View } from 'react-native';
import ItemHeader from './ItemHeader';
import ItemMetrics from './ItemMetrics';
import theme from "../theme";

const RepositoryItem = ({item}) => {
  const headerInfo = {
    ownerAvatarUrl: item.ownerAvatarUrl,
    fullName: item.fullName,
    description: item.description,
    language: item.language,
  };
  const metrics = {
    stargazersCount: item.stargazersCount,
    forksCount: item.forksCount,
    reviewCount: item.reviewCount,
    ratingAverage: item.ratingAverage,
  };

  return (
      <View
          testID="repositoryItem"
          style={{ backgroundColor: theme.backgroundColors.repositoryItemBackground, padding: 10 }}>
        <ItemHeader info={headerInfo} />
        <ItemMetrics metrics={metrics} />
      </View>
  )
};

export default RepositoryItem;
