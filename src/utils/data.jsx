import React, { useEffect, useState } from "react";
import axios from "axios";

function Data() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products/1")
      .then((response1) => {
        axios
          .get("https://fakestoreapi.com/products/2")
          .then((response2) => {
            setProducts([response1.data, response2.data]);
            setLoading(false);
          })
          .catch((err) => {
            console.error("Error fetching product with ID 2:", err);
            setLoading(false);
          });
      })
      .catch((err) => {
        console.error("Error fetching product with ID 1:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section>
      {loading && "Loading..."}
      {products.length > 0 ? (
        <div>
          {products.map((product, index) => (
            <div
              key={index}
              className="container grid grid-cols-3 gap-m mx-m my-s w-l box-border p-s border-4 rounded-s md:max-md:flex"
            >
              <div className="w-s">
                <img src={product.image}></img>
              </div>
              <div className="col-span-2 w-auto overflow-hidden">
                <div className="h-m grid grid-row-2 content-between">
                  <div>
                    <h2 className="font-bold mb-xs">{product.title}</h2>
                    <p className="my-xs">Kategori: {product.category}</p>
                    <p className="text-smooth-gray truncate overflow-hidden w-m my-xs">
                      {product.description}
                    </p>
                    <p className="text-price font-bold my-xs">
                      ${product.price}
                    </p>
                  </div>
                  <div className="grid justify-items-stretch">
                    <p className="justify-self-start text-smooth-gray">×1</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>API did not provide any product, try again.</p>
      )}
    </section>
  );
}

export default Data;
