import { useGetProductFromURL } from "../hooks/useGetProductFromURl";
import Checkout from "./checkout";

const ItemCard = ({ product }) => {
  return (
    <article className="flex gap-5 mb-8 border rounded-xl p-4">
      <img
        className="w-36 h-36 flex-none aspect-square object-contain"
        src={product.image}
      ></img>
      <div className="w-auto overflow-hidden">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold mb-xs">{product.title}</h2>
          <p className="text-price font-semibold text-green-700 my-xs">
            ${product.price}
          </p>

          <p className="my-xs">Kategori: {product.category}</p>
          <div className="grid justify-items-stretch">
            <p className="justify-self-start text-smooth-gray">
              x{product.qty}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

const Payment = () => {
  const { products } = useGetProductFromURL();

  return (
    <div className="flex gap-4 w-full max-w-6xl mx-auto py-10">
      <div className="flex-1">
        {products.map((product) => (
          <ItemCard key={product.id} product={product} />
        ))}
      </div>

      <Checkout />
    </div>
  );
};

export default Payment;
