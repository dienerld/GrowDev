import {
  useState, useEffect, Dispatch, SetStateAction,
} from 'react';

type Response = [
  string,
  Dispatch<SetStateAction<string>>,
];

export function usePersistedTheme(key: string, initialState: string): Response {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return storageValue;
    }

    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}
