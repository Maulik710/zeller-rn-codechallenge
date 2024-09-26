import React from 'react';
import {View, Text, FlatList, StyleSheet, RefreshControl } from 'react-native';
import { User } from '../../types/User';
import UserListItem from './UserListItem';

interface UserListProps {
  users: User[],
  type:String,
  refreshing:boolean,
  onRefresh:any
}

const UserList: React.FC<UserListProps> = ({ users,type,refreshing,onRefresh }) => (
  <View style={styles.container}>
    <Text style={styles.header}>{`${type} Type`}</Text>
  <FlatList
    data={users}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <UserListItem user={item} />}
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }
  />
  </View>
);

const styles=StyleSheet.create({
  container:{paddingHorizontal:20},
  header:{fontSize:22,color:'#000',fontWeight:'bold'}
})

export default UserList;