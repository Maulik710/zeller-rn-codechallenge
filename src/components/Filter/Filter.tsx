import React,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RadioButton from './RadioButton';

interface FilterProps {
  onFilterChange: (userType: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    { label: 'Admin', value: 'Admin' },
    { label: 'Manager', value: 'Manager' },
  ];

  return(
  <View style={styles.container}>

<Text style={styles.header}>{"User Type"}</Text>

     {options.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          selected={selectedOption === option.value}
          onPress={() => {
            onFilterChange(option.value)
            setSelectedOption(option.value)
          }}
        />
      ))}
  </View>
)};

const styles=StyleSheet.create({
  container:{paddingHorizontal:20,borderBottomWidth:1,borderBottomColor:'#E3E5E9',marginBottom:16},
  header:{fontSize:22,color:'#000',fontWeight:'bold'}
})

export default Filter;