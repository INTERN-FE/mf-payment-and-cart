import { useGetProductFromURL } from "../hooks/useGetProductFromURl";
import Checkout from "./checkout";

export default function Payment() {
  useGetProductFromURL();
  return (
    <div className="flex gap-4 w-full max-w-6xl mx-auto py-10">
      <div className="flex-1">A</div>

      <Checkout />
    </div>
  );
}
