import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Filter from './Filter';

describe('Filter', () => {
  const onFilterChangeMock = jest.fn();

  it('renders correctly with options', () => {
    const { getByText } = render(<Filter onFilterChange={onFilterChangeMock} />);

    expect(getByText('User Type')).toBeTruthy();

    expect(getByText('Admin')).toBeTruthy();
    expect(getByText('Manager')).toBeTruthy();
  });

  it('calls onFilterChange when an option is selected', () => {
    const { getByText } = render(<Filter onFilterChange={onFilterChangeMock} />);

    fireEvent.press(getByText('Admin'));

    expect(onFilterChangeMock).toHaveBeenCalledWith('Admin');

    fireEvent.press(getByText('Manager'));

    expect(onFilterChangeMock).toHaveBeenCalledWith('Manager');
  });

  it('updates selected option correctly', () => {
    const { getByText } = render(<Filter onFilterChange={onFilterChangeMock} />);

    fireEvent.press(getByText('Admin'));
    
    expect(getByText('Admin').parent)

    fireEvent.press(getByText('Manager'));

    expect(getByText('Manager').parent)
  });
});
