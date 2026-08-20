import { useMutation } from '@apollo/client/react';
import { AUTHENTICATE } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    try {
      const response = await mutate({
        variables: {
          credentials: {
            username,
            password,
          },
        },
      });

      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return [signIn, result];
};

export default useSignIn;