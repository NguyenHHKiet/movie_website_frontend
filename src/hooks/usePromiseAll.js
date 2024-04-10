import { useState, useEffect } from "react";

const usePromiseALL = (urls) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await Promise.all(
                    urls.map((url) => fetch(url)),
                );
                const jsonData = await Promise.all(
                    responses.map((res) => res.json()),
                );

                setData(jsonData);
                setLoading(true);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();

        // Cleanup function if necessary
        return () => {
            // Cleanup code here
        };
    }, [urls]);

    return { data, loading, error };
};

export default usePromiseALL;
