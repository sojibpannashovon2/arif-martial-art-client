import React, { useContext, useEffect } from 'react';
import { authContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';


const useAdmin = () => {
    const { user, loading } = useContext(authContext)
    // console.log(user?.email);


    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !!user?.email && !loading,
        queryFn: async () => {
            const response = await fetch(`https://arif-martial-art-server.vercel.app/users/admin/${user?.email}`)
            const data = response.json()
            console.log(data);
            return data;
        },
    })
    // console.log(isAdmin);
    return [isAdmin, isAdminLoading];
};

export default useAdmin;