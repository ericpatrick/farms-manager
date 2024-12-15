import { useEffect, useState } from 'react';
import { Nullable } from '../types/Nullable.type';
import { api } from '../api/api';

export function useApi<T>(url: string, method: 'get' | 'post' | 'put' | 'delete') {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Nullable<Error>>(null);
  const [data, setData] = useState<T>();

  useEffect(() => {
    const controller = new AbortController();
    setLoading(false);

    api({ method, url, signal: controller.signal })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [url, method]);

  return { loading, data, error };
}
