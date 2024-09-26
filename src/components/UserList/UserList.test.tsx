import React from 'react';
import { render } from '@testing-library/react-native';
import UserList from './UserList';

const mockUsers = [
  { id: '1', name: 'Alice', email: 'alice@example.com', role: 'Admin' },
  { id: '2', name: 'Bob', email: 'bob@example.com', role: 'Manager' },
];

test('renders user list', () => {
  const { getByText } = render(<UserList users={mockUsers} />);
  expect(getByText('Alice')).toBeTruthy();
  expect(getByText('Bob')).toBeTruthy();
});