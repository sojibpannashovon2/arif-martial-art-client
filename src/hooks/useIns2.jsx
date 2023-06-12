import { useContext, useEffect, useState } from 'react';
import { authContext } from '../providers/AuthProvider';



const useIns2 = () => {
    const { user } = useContext(authContext)
    // console.log(user?.email);
    const [adnan, setAdnan] = useState([])
    useEffect(() => {
        fetch(`https://arif-martial-art-server.vercel.app/users/instructor/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdnan(data)
            )


    }, [user?.email])
    // console.log(adnan);
    return [adnan]
};

export default useIns2;