//load image async and return as Image type

import { useState, useEffect } from "react";

export default function useCacheImages() {
  //loading
  const [loading, setLoading] = useState(true);
  //image array

  const cacheImages = async (srcArray) =>{
    setLoading(true);
    const promises = await srcArray.map(src =>{
        return new Promise((resolve, reject)=>{
            const img = new Image();
            img.src = src;
            img.onload = ()=>{
                resolve(src);
            }
            img.onerror = ()=>{
                reject(src);
            }
        })
    })  
    await Promise.all(promises);
    setLoading(false);
    //console.log("Images loaded");
  }
  

  return [loading, cacheImages];
}

