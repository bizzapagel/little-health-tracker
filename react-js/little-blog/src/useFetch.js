import {useState, useEffect} from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(url, {signal: abortController.signal})
      .then(res => {
        if(!res.ok) {
          throw Error("Failed to fetch data");
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch(error => {
        if(error.name === 'AbortError') {
          console.log('Data fetch aborted');
        } else {
          setIsLoading(false);
          setError(error.message);
        }
      });
      
    return () => abortController.abort();
  }, [url]);

  return {data, isLoading, error};
}

export default useFetch;

