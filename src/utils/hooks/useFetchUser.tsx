import { useEffect, useState } from 'react';
import { getAuthStatus } from '../api';

export function useFetchUser() {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAuthStatus()
      .then(({ data }) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => setTimeout(() => setLoading(false), 1000));
  }, []);

  return { user, error, loading };
}
