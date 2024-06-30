import useApiFetch from "./useApiFetch";
import type { Dliib } from "@/types/dliib";

export default async function () {
  const dliibs = useState<Dliib[]>('dliibs', () => []);
  const { data } = await useApiFetch('/api/dliib');
  dliibs.value = data;
  return dliibs;
}