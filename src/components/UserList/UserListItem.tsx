import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { User } from '../../types/User';

interface UserListItemProps {
  user: User;
}

const UserListItem: React.FC<UserListItemProps> = ({ user }) => (
  <View style={styles.container}>
    <View style={styles.nameIcon}>
    <Text style={styles.name}>{user.name.charAt(0)}</Text>
    </View>
    <View>
    <Text style={styles.name}>{user.name}</Text>
    <Text style={styles.type}>{user.role}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { 
    padding: 10, 
    flexDirection:'row',
    alignItems:'center'
   },
   nameIcon:{height:40,width:40,backgroundColor:'#E5F0FA',borderRadius:5,marginRight:16,alignItems:'center',justifyContent:'center'},
  name: { fontSize: 18, color: '#000' },
  type: { fontSize: 14, color: 'gray' },
});

export default UserListItem;