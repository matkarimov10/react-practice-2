import {useEffect, useState} from "react";

export function useFetch(url) {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try{
                const req = await fetch(url)
                if (!req.ok) {
                    throw new Error(req.statusText)
                }
                const data = await req.json()
                setData(data)
                setIsLoading(false)
            }
            catch (error){
                console.log(error.message)
                setIsLoading(false)
                setError(error.message)
            }
        }
        fetchData()
    }, [url])
    return {data, isLoading, error}
}
