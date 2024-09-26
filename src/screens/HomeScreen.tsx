
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen: React.FC = () => {

  const {navigate} = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home Screen</Text>
      <Text style={styles.note}>{`Note: All require functionality impelemented in the next screen please press "View Users" button to access next screen`}</Text>
      <Button title="View Users" onPress={() => navigate('Users')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent:'center',
    backgroundColor:'#fff',
    paddingHorizontal:20, 
  },
  header:{color:'#000',fontSize:18,fontWeight:'bold',alignSelf:'center'},
  note:{color:'#000',fontSize:12, alignItems:'center'}
});

export default HomeScreen;