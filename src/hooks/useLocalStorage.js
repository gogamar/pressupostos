import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const storedValue = localStorage.getItem(key);

  const [value, setValue] = useState(() => {
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    if (value !== undefined) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  const clearLocalStorage = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return [value, setValue, clearLocalStorage];
}
