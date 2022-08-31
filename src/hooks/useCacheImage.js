//load image async and return as Image type

import { useState, useEffect } from "react";

export default function useCacheImage(url) {
  const [image, setImage] = useState(null);
  //loading
  const [loading, setloading] = useState(false)
    //error
    const [error, setError] = useState(null);

  useEffect(() => {

    setloading(true);
    const img = new Image();
    img.src = url;
    img.onload = () => {
      setImage(img);
      setloading(false);
    }
    img.onerror = () => {
      setError("Error loading image");
      setloading(false);
    }
  }, [url]);

    return { image, loading, error };
}

