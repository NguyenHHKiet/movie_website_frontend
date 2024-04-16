import { useCallback, useState } from "react";
import { customAxios } from "../api/axios";

const useHTTP = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // call API method
    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        try {
            const { data } = await customAxios({
                url: requestConfig.url,
                method: requestConfig.method || "GET",
                headers: requestConfig.headers || {},
                data: requestConfig.data || null,
            });

            // create new data object
            applyData(data);
        } catch (error) {
            setError(error.message || "An error occurred");
        } finally {
            setIsLoading(false);
        }
    }, []);
    return { isLoading, error, sendRequest };
};

export default useHTTP;
