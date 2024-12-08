/* eslint-disable react/prop-types */
import { useState, useMemo } from "react";

function ProductFilter({ products }) {
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [products, query]);

  return (
    <>
      <p>Search Electronic Devices And Accessories.</p>
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul>
          <span>like these products</span>
          {filteredProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default ProductFilter;
