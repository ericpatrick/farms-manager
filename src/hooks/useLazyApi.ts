import { useState } from 'react';
import { Nullable } from '../types/Nullable.type';
import { api } from '../api/api';

export function useLazyApi<T>(url: string, method: 'get' | 'post' | 'put' | 'delete') {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Nullable<Error>>(null);
  const [data, setData] = useState<T>();

  const fetchData = (body?: unknown) => {
    setLoading(false);
    api({ url, method, data: body })
      .then((response) => setData(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(true));
  };

  return { loading, error, data, fetchData };
}
