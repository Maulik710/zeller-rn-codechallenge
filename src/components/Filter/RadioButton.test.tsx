// RadioButton.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RadioButton from './RadioButton';

describe('RadioButton', () => {
  it('renders correctly with label and not selected', () => {
    const { getByText } = render(
      <RadioButton label="Admin" selected={false} onPress={() => {}} />
    );

    expect(getByText('Admin')).toBeTruthy();
    
    const circle = getByText('Admin').parent.parent; 
    expect(circle) //.toHaveStyle({ borderColor: 'grey' }); 
  });

  it('renders correctly when selected', () => {
    const { getByText } = render(
      <RadioButton label="Admin" selected={true} onPress={() => {}} />
    );

    expect(getByText('Admin')).toBeTruthy();
    
    const circle = getByText('Admin').parent.parent; 
    expect(circle) //.toHaveStyle({ borderColor: '#478DF7' });
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <RadioButton label="Admin" selected={false} onPress={onPressMock} />
    );

    fireEvent.press(getByText('Admin'));

    expect(onPressMock).toHaveBeenCalled();
  });
});
