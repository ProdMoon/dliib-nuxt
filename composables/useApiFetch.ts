export default async function (url: string, options?: any): Promise<any> {
  const config = useRuntimeConfig();
  const defaultOptions = {
    baseURL: config.public.baseURL,
  }

  if (options) {
    options = {
      ...defaultOptions,
      ...options,
    };
  } else {
    options = defaultOptions;
  }
  return await $fetch<any>(url, options);
}
