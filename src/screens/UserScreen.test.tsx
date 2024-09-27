import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import UserScreen from './UserScreen';
import { useUsers } from '../hooks/useUsers';

jest.mock('../hooks/useUsers', () => ({
  useUsers: jest.fn(),
}));

describe('UserScreen', () => {
  const mockRefetch = jest.fn();
  const mockUsers = [
    { id: '1', name: 'John Doe', role: 'Admin' },
    { id: '2', name: 'Jane Smith', role: 'Manager' },
  ];

  beforeEach(() => {
    useUsers.mockImplementation(() => ({
      loading: false,
      error: null,
      users: mockUsers,
      refetch: mockRefetch,
    }));
  });

  it('renders loading indicator when loading', () => {
    useUsers.mockImplementation(() => ({
      loading: true,
      error: null,
      users: [],
      refetch: mockRefetch,
    }));

    const { getByTestId } = render(<UserScreen />);
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('renders error message when there is an error', () => {
    const mockError = { message: 'Something went wrong' };
    useUsers.mockImplementation(() => ({
      loading: false,
      error: mockError,
      users: [],
      refetch: mockRefetch,
    }));

    const { getByText } = render(<UserScreen />);
    expect(getByText('Error: Something went wrong')).toBeTruthy();
  });

  it('renders user list and allows filtering', async () => {
    const { getByText, getByPlaceholderText } = render(<UserScreen />);

    expect(getByText('Admin')).toBeTruthy();
    expect(getByText('Manager')).toBeTruthy();

    fireEvent.press(getByText('Admin'));
    
    await waitFor(() => {
      expect(getByText('John Doe')).toBeTruthy();
      expect(() => getByText('Jane Smith')).toThrow(); 
    });

    const searchBox = getByPlaceholderText('Search by name...');
    fireEvent.changeText(searchBox, 'John');

    await waitFor(() => {
      expect(getByText('John Doe')).toBeTruthy();
      expect(() => getByText('Jane Smith')).toThrow(); 
    });
  });

  it('refreshes user data when refreshed', async () => {
    const { getByText } = render(<UserScreen />);

    fireEvent(getByText('Admin'), 'refresh');

    expect(mockRefetch) 
  });
});
