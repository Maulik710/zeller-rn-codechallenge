import { useQuery } from '@apollo/client';
import { LIST_ZELLER_CUSTOMERS } from '../graphql/queries';
import { User } from '../types/User';

export const useUsers = (role: string) => {
  const { data, loading, error,refetch } = useQuery<{
    listZellerCustomers: {
      items: User[];
      nextToken: string | null;
    };
  }>(LIST_ZELLER_CUSTOMERS, {
    variables: {
      role,
      limit: 100, // Adjust as needed
      nextToken: null,
    },
  });
  return {
    users: data?.listZellerCustomers.items || [],
    loading,
    error,
    nextToken: data?.listZellerCustomers.nextToken,
    refetch
  };
};