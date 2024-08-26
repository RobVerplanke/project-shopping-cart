import { BASE_URL, MAX_ITEMS } from '../lib/constants';

export async function getShopData(setItems, setError, setIsLoading) {
  try {
    const response = await fetch(`${BASE_URL}?limit=${MAX_ITEMS}`);

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    setItems(data);
    setError(null);
  } catch (error) {
    setError(error);
    setItems(null);
  } finally {
    setIsLoading(false);
  }
}
