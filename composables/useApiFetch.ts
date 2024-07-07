import type { UseFetchOptions } from '#app';

export default async function (url: string, options?: UseFetchOptions<any>): Promise<any> {
  const config = useRuntimeConfig();
  const defaultOptions: UseFetchOptions<any> = {
    baseURL: config.public.baseURL,
    timeout: 5000,
  }

  if (options) {
    options = {
      ...options,
      ...defaultOptions,
    };
  } else {
    options = defaultOptions;
  }
  return await useFetch<any>(url, options);
}
