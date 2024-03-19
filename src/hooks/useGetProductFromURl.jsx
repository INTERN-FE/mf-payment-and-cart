import { useSearchParams } from "react-router-dom";
export function useGetProductFromURL() {
  const [searchParams] = useSearchParams();

  console.log(JSON.parse(searchParams.get("items")));

  return null;
}
