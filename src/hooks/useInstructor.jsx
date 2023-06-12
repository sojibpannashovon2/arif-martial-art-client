import { useEffect, useState } from "react"



export const useInstructor = () => {
    const [teachers, setTeacher] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch("https://arif-martial-art-server.vercel.app/instructors")
            .then(res => res.json())
            .then(data => {
                setTeacher(data);
                setLoading(false)
            })
    }, [])
    return [teachers, loading]
}
