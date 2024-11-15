import { useEffect } from "react";
import { useState } from "react";

const useAppwrite = (fn) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            // const response = await getAllPosts();
            const response = await fn();
            setData(response);
        } catch(error) {
            Alert.alert('Error', error.message)
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => fetchData();

    // console.log(data);
    return { data, isLoading, refetch }
}

export default useAppwrite