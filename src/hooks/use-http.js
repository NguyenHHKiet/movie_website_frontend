import { useCallback, useState } from "react";

const useHTTP = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // call API method
    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method || "GET",
                headers: requestConfig.headers || {},
                body: requestConfig.body
                    ? JSON.stringify(requestConfig.body)
                    : null,
            });

            if (!response.ok) {
                throw new Error("Invalid response");
            }

            const data = await response.json();
            // create new data object
            applyData(data);
        } catch (error) {
            setError(error.message || "Something went wrong!!");
        }
        setIsLoading(false);
    }, []);
    return { isLoading, error, sendRequest };
};

export default useHTTP;
