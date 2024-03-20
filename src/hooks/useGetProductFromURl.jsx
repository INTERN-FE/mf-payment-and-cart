import { useSearchParams } from "react-router-dom";

export const useGetProductFromURL = () => {
  const [searchParams] = useSearchParams();

  let products;

  try {
    products = JSON.parse(searchParams.get("items"));
  } catch (e) {
    products = [];
  }

  return {
    products,
  };
};
