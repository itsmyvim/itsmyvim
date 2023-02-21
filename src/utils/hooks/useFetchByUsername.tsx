import { useEffect, useState } from 'react';
import { getUserByUsername } from '../api';

export function useFetchByUsername(username: string) {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUserByUsername(username)
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
