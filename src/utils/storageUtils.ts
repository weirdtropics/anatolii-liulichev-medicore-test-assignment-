export function getFromLocalStorage<T>(key: string, fallback: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : fallback;
  } catch (error: unknown) {
    console.warn(`[storage] Failed to read key "${key}" from localStorage:`, error);
    return fallback;
  }
}

export function setToLocalStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error: unknown) {
    console.warn(`[storage] Failed to write key "${key}" to localStorage:`, error);
  }
}

export function removeFromLocalStorage(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error: unknown) {
    console.warn(`[storage] Failed to remove key "${key}" from localStorage:`, error);
  }
}
