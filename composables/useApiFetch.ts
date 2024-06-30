import type { UseFetchOptions } from '#app';

export default async function (url: string, options?: UseFetchOptions<any>): Promise<any> {
  const baseUrl = 'http://localhost:5214';
  if (options) {
    options = {
      ...options,
      baseURL: baseUrl,
    };
  } else {
    options = {
      baseURL: baseUrl,
    };
  }
  return await useFetch<any>(url, options);
}
