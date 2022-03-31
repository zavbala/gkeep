export const fetcher = async (input: RequestInfo, init: RequestInit) => {
  const response = await fetch(input, init);
  return await response.json();
};
