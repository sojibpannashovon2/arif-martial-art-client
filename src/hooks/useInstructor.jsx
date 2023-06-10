import { useEffect, useState } from "react"



export const useInstructor = () => {
    const [teachers, setTeacher] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch("instructor.json")
            .then(res => res.json())
            .then(data => {
                setTeacher(data);
                setLoading(false)
            })
    }, [])
    return [teachers, loading]
}