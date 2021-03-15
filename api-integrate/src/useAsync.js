import {useState, useEffect} from 'react'

const useAsync =(callback, deps=[], skip=false) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
          setError(null);
          setData(null);
          setLoading(true);
          const response = await callback();
          
          setData(response);
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };

      useEffect(() => {
        if (skip) return;
        fetchData();
      }, deps);
      return [{data,loading,error}, fetchData];

}

export default useAsync