import { getAllEntries } from '../../services/fetchEntries';
import { useEffect, useState } from 'react';

export const useEntries = () => {
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getAllEntries()
      .then((entries => setEntries(entries)))
      .catch(() => setEntries([]))
      .finally(() => setLoading(false));
  }, []);

  return { loading, entries };
};
