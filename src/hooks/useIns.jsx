import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useIns = () => {
    // const { user } = useContext(authContext)


    // const { data: isInstructor, isLoading: isAdminLoading } = useQuery({
    //     queryKey: ['isInstructor', user?.email],
    //     queryFn: async () => {
    //         const response = await fetch(`https://arif-martial-art-server.vercel.app/users/instructor/${user?.email}`)
    //         return response.instructor;
    //     },
    // })
    // // console.log(isInstructor);
    // return [isInstructor, isAdminLoading];
    const { user } = useContext(authContext)
    console.log(user?.email);
    const [isInstructor, setisInstructor] = useState([])
    useEffect(() => {
        fetch(`https://arif-martial-art-server.vercel.app/users/instructor/${user?.email}`)
            .then(res => res.json())
            .then(data => setisInstructor(data)
            )


    }, [user?.email])
    console.log(isInstructor);
    return [isInstructor]
};

export default useIns;