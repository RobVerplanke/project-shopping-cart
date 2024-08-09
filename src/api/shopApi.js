import { BASE_URL, MAX_ITEMS } from '../lib/constants';

export default function getShopData(setItems, setError, setIsLoading) {
  fetch(`${BASE_URL}?limit=${MAX_ITEMS}`)
    .then((response) => response.json())
    .then((response) => {
      setItems(response);
      setError(null);
    })
    .catch((error) => {
      setError(error);
      setItems(null);
    })
    .finally(() => setIsLoading(false));
}
