import { useEffect, useState } from "react";

export function useLocalStorage(key, value) {
  const [item, setItem] = useState(
    () => JSON.parse(localStorage.getItem(key)) || value
  );
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, value);
  return [item, setItem];
}
