

import { useState } from "react";
import { useEffect } from "react";

async function fetchUrl(url, options = {}) {
    
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      return json;
    } catch (error) {
        return error;
    } 
    
}
const loadImage = src =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  })  
;
async function loadImageAsync(url) {
  const image = await loadImage(url);
  return image;
}

export default function useArrayFetch(urlObjectsArray) {
    
    //urlObjectsArray = [{url: "", options: {}, type: Image}, {url: "", options: {}, type: json}]
    const [data, setData] = useState([]);
    //add data one by one in array using useFetch and useCacheImage based on type
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        
        //loop through urlObjectsArray and fetch each url
        for(let i = 0; i < urlObjectsArray.length; i++){
            setLoading(true);
            loadImageAsync(urlObjectsArray[i].url)
            .then(image => {
                console.log("image",image);
                setData(data => [...data, image]);
                setLoading(false);
            }).catch(error => {
                setError(error);
            })
        }
        
    } , []);

   return [data, loading, error];
}