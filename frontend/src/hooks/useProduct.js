import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useProduct = (fn) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const fetchData = async (fn) => {
        setIsLoading(true);

        try {
            const response = await fn();
            setData(response);
        } catch (error) {
            Alert.alert("Error ", error?.response.data.message);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    const refetch = async () => fetchData();
    return { data, isLoading, refetch };
};

export default useProduct;
