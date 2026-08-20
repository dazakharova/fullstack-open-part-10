import { describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { useApolloClient } from '@apollo/client/react';
import { useNavigate } from 'react-router-native';
import SignIn from '../components/SignIn';
import useAuthStorage from '../hooks/useAuthStorage';
import useSignIn from '../hooks/useSignIn';

jest.mock('../hooks/useSignIn');
jest.mock('../hooks/useAuthStorage');
jest.mock('@apollo/client/react', () => ({
  useApolloClient: jest.fn(),
}));
jest.mock('react-router-native', () => ({
  useNavigate: jest.fn(),
}));

describe('SignIn', () => {
  it('submits the correct username and password', async () => {
    const signIn = jest.fn().mockResolvedValue({
      data: {
        authenticate: {
          accessToken: 'access-token',
        },
      },
    });
    const setAccessToken = jest.fn().mockResolvedValue(undefined);
    const resetStore = jest.fn().mockResolvedValue(undefined);

    useSignIn.mockReturnValue([signIn, {}]);
    useAuthStorage.mockReturnValue({ setAccessToken });
    useApolloClient.mockReturnValue({ resetStore });
    useNavigate.mockReturnValue(jest.fn());

    const { getByPlaceholderText, getByText } = await render(<SignIn />);

    await fireEvent.changeText(getByPlaceholderText('Username'), 'daria');
    await fireEvent.changeText(getByPlaceholderText('Password'), 'secret');
    await fireEvent.press(getByText('Sign in'));

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledTimes(1);
      expect(signIn).toHaveBeenCalledWith({
        username: 'daria',
        password: 'secret',
      });
    });
  });
});
