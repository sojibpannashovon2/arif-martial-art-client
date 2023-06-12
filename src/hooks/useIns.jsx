import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useIns = () => {

    const { user } = useContext(authContext)
    // console.log(user?.email);
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