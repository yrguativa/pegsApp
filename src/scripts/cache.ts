const CACHE_KEY = 'royal_puppy_house_data';
const CACHE_DURATION = 4 * 60 * 60 * 1000; 

export async function getCachedData() {
  const cached = localStorage.getItem(CACHE_KEY);
  
  if (cached) {
    try {
      const { data, timestamp } = JSON.parse(cached);
      const now = Date.now();
      
      if (now - timestamp < CACHE_DURATION) {
        console.log('Returning cached data');
        return data;
      }
      
      console.log('Cache expired, fetching new data');
    } catch (e) {
      console.error('Cache parse error:', e);
    }
  }
  
  console.log('Fetching fresh data');
  const response = await fetch('/pegsApp/data.json');
  const data = await response.json();
  
  localStorage.setItem(CACHE_KEY, JSON.stringify({
    data,
    timestamp: Date.now()
  }));
  
  return data;
}

export function clearCache() {
  localStorage.removeItem(CACHE_KEY);
}
