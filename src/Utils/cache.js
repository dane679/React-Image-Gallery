const cache = new Map();

export const getFromCache = (key) => {
  return cache.get(key);
};

export const setInCache = (key, value) => {
  cache.set(key, value);
};

export const hasInCache = (key) => {
  return cache.has(key);
};

export const clearCache = () => {
  cache.clear();
};