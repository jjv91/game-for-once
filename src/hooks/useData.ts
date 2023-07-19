import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

interface FetchResponse<T>{
    count:number;
    results:T[];
}

const useData = <T>(endpoint:string,requestConfig?:AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true; // Para verificar si el componente está montado
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((res) => {
        if (isMounted) { // Solo establezca el estado si el componente está montado
          setData(res.data.results);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        if (isMounted) { // Solo establezca el estado si el componente está montado
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false; // El componente no está montado
      controller.abort();
    };
  }, deps?[...deps] : []);

  return { data, error, isLoading };
};

export default useData;
