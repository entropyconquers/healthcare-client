import { useState, useEffect } from "react";

export default function useLoading(loadingArray) {
    //check if all are false
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        var loading = false;
        loadingArray.forEach((item) => {
            loading = loading || item;
        });
        setLoading(loading);
    } , [loadingArray])
    return loading;
}
