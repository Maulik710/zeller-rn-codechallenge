
import React, { useState,useCallback } from 'react';
import { View, ActivityIndicator, Text, StyleSheet, TextInput } from 'react-native';
import UserList from '../components/UserList/UserList';
import Filter from '../components/Filter/Filter';
import { useUsers } from '../hooks/useUsers';

const UserScreen: React.FC = () => {
  const [userType, setUserType] = useState<string>('Admin');
  const [filterUser, setFilterUser] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { loading, error, users, refetch } = useUsers(userType);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  
  // console.log("🚀 ~ users:", users)

  if (loading) return <ActivityIndicator testID='loading-indicator' />;
  if (error) return <Text>Error: {error.message}</Text>;

  const filteredUsers = filterUser?.length > 0 ? filterUser.filter((e:any) =>
    e.name.toLowerCase().includes(searchQuery.toLowerCase())
  ):[]

  const onFilterChangeItem=(type:string)=>{

    const filterData = users.filter(e=>e.role.toLowerCase() === type.toLowerCase())
    setUserType(type)
    setFilterUser(filterData)
  }


  const onRefresh = () => {
    setRefreshing(true);
    refetch() // Fetch fresh data when refreshing
      .then(() => setRefreshing(false))
      .catch(() => setRefreshing(false)); // Handle errors as needed
  };


  return (
    <View style={styles.container}>
      <Filter onFilterChange={onFilterChangeItem} />
      {filterUser&&
      <>
      <TextInput
        style={styles.searchBox}
        placeholder="Search by name..."
        placeholderTextColor={'#000'}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <UserList 
      users={filteredUsers} 
      type={userType} 
      refreshing={refreshing}
      onRefresh={onRefresh}
      />
      </>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor:'#fff' 
  },
  searchBox: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal:20,
    marginBottom: 20,
    color:'#000'
  },
});

export default UserScreen;