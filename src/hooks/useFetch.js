import { useState } from "react";
import { useAuthHeader } from "react-auth-kit";

export default function useFetch() {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const authHeader = useAuthHeader();
    const base = process.env.REACT_APP_BASE_URL
    async function fetchUrl(url, options = {}, baseUrl=false, useAuth = false) {
        setLoading(true);
        
        const headers = {
          headers: {
            "Authorization": authHeader(),
            "Content-Type": "application/json",
          }
        }
        try {
          const res = await fetch(`${baseUrl?base:""}`+url, {...headers, ...options});
          if(res.ok){
            const json = await res.json();
            setResponse(json);
          }
          else{
            const json = await res.json();
            setError(json);
          }
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
    }
    return [ response, loading, error, fetchUrl ];
}