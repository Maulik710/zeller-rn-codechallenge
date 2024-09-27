import React from 'react';
import { render } from '@testing-library/react-native';
import UserListItem from './UserListItem';
import { User } from '../../types/User';

const mockUser: User = {
  id: '1',
  name: 'John Doe',
  role: 'Admin',
};

describe('UserListItem', () => {
  it('renders user name and role correctly', () => {
    const { getByText } = render(<UserListItem user={mockUser} />);

    expect(getByText('John Doe')).toBeTruthy();
    
    expect(getByText('Admin')).toBeTruthy();
  });

  it('renders the first letter of the user name as an icon', () => {
    const { getByText } = render(<UserListItem user={mockUser} />);
    
    expect(getByText('J')).toBeTruthy(); // 'J' for John
  });
});
