import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator'; 
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';

jest.mock('../screens/HomeScreen', () => () => <div>Home Screen Mock</div>);
jest.mock('../screens/UserScreen', () => () => <div>User Screen Mock</div>);

describe('AppNavigator', () => {
  it('renders the Home screen as the initial route', () => {
    const { getByText } = render(<AppNavigator />);
    
    expect(getByText('Home Screen Mock')).toBeTruthy();
  });

  it('navigates to the User screen', async () => {
    const { getByText } = render(<AppNavigator />);
  });
});
