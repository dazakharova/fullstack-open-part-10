import {useQuery} from '@apollo/client/react';
import {GET_AUTHENTICATED_USER} from "../graphql/queries";

const useAuthenticatedUser = () => {
  const { data, error, loading, refetch } = useQuery(GET_AUTHENTICATED_USER, {
    fetchPolicy: 'cache-and-network',
  });

  if (error) {
    console.error('Error fetching authenticated user:', error);
  }

  return {
    user: data ? data.me : null,
    loading,
    refetch,
  };
}

export default useAuthenticatedUser;