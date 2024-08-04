export default async function (url: string, options?: any): Promise<any> {
  const config = useRuntimeConfig();
  const defaultOptions = {
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
  return await $fetch<any>(url, options);
}
