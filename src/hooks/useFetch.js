import { useState, useEffect } from "react";

//import useState, useEffect
export default function useFetch(url, options = {}) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    async function fetchUrl() {
        setLoading(true);
        try {
          const res = await fetch(url, options);
          const json = await res.json();
          setResponse(json);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
    }
    useEffect(() => {
        fetchUrl();
    }, [url])
    
    
    return { response, loading, error };
}