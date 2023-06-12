import React, { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const { user } = useContext(authContext)


    const { data: role, isLoading: isAdminLoading } = useQuery({
        queryKey: ['role', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:11000/users/admin/${user?.email}`)
            return response.data.admin;
        },
    })
    return [role, isAdminLoading];
};

export default useAdmin;