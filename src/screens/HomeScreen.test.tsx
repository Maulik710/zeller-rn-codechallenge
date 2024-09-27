import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(
        <HomeScreen />
    );
    expect(getByText('Home Screen')).toBeTruthy();
    expect(getByText(`Note: All require functionality impelemented in the next screen please press "View Users" button to access next screen`)).toBeTruthy();
  });

  it('navigates to Users screen when button is pressed', () => {
    const { getByText } = render(
        <HomeScreen />
    );

    fireEvent.press(getByText('View Users'));

    expect(mockNavigate).toHaveBeenCalledWith('Users');
  });
});
