import { useState, useEffect } from "react";

//import useState, useEffect
export default function useFetch(url, options = {}, baseUrl=false) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const base = process.env.REACT_APP_BASE_URL
    async function fetchUrl() {
        setLoading(true);
        try {
          const res = await fetch(`${baseUrl?base:""}`+url, options);
          const json = await res.json();
          setResponse(json);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
    }
    
    
    
    return [ response, loading, error, fetchUrl ];
}