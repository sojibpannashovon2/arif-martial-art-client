import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../providers/AuthProvider';

const useAdmin2 = () => {
    const { user } = useContext(authContext)
    // console.log(user?.email);
    const [result, setResult] = useState([])
    useEffect(() => {
        fetch(`https://arif-martial-art-server.vercel.app/users/admin/${user?.email}`)
            .then(res => res.json())
            .then(data => setResult(data)
            )


    }, [user?.email])

    return [result]
};

export default useAdmin2;