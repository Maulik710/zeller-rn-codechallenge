import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import UserList from './UserList'; 
import { User } from '../../types/User';


jest.mock('./UserListItem', () => ({ user }) => (
  <Text>{user.name}</Text> 
));

const mockUsers: User[] = [
  { id: '1', name: 'John Doe', role: 'Admin' },
  { id: '2', name: 'Jane Smith', role: 'Manager' },
];


describe('UserList', () => {

  const mockOnRefresh = jest.fn();

  it('renders the header and user list', () => {
    const { getByText } = render(
      <UserList users={mockUsers} type="Admin" refreshing={false} onRefresh={mockOnRefresh} />
    );

    expect(getByText('Admin Type')).toBeTruthy();

    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('Jane Smith')).toBeTruthy();
  });

  it('handles refresh control', () => {
    const { getByTestId } = render(
      <UserList users={mockUsers} type="Admin" refreshing={true} onRefresh={mockOnRefresh} />
    );

    const refreshControl = getByTestId('refresh-control');

    fireEvent(refreshControl, 'refresh');

    expect(mockOnRefresh).toHaveBeenCalled();
  });

  it('displays loading state when refreshing', () => {
    const { getByTestId } = render(
      <UserList users={mockUsers} type="Admin" refreshing={true} onRefresh={mockOnRefresh} />
    );

    expect(getByTestId('refresh-control')).toHaveProp('refreshing', true);
  });
});
