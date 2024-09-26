// src/components/RadioButton.tsx

import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

interface RadioButtonProps {
  label: string;
  selected: boolean;
  onPress: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={selected?styles.selectedContainer:styles.container}>
      <View style={[styles.circle,{borderColor: selected?'#478DF7':'grey'}]}>
        {selected && <View style={styles.selectedDot} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: 8,
    padding:10,
  },
  selectedContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    padding:10,
    borderRadius:5,
    backgroundColor:'#E5F0FA'
  },
  circle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedDot: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#478DF7',
  },
  label: {
    marginLeft: 8,
    color:'#000'
  },
});

export default RadioButton;
