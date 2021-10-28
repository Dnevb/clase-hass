import { TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { productsContext } from "../App";
import Product from "../components/Product";
import ProductForm from "../components/ProductForm";

function ProductListPage() {
  const [products, setProducts] = useContext(productsContext);
  const [filtered, setFilted] = useState(products);
  const [filterI, setFilterI] = useState("");

  useEffect(() => {
    setFilted(
      products.filter(
        (o) => o.name.includes(filterI) || String(o.price).includes(filterI)
      )
    );
  }, [products, filterI]);

  const onFilter = (e) => setFilterI(e.target.value);
  const onDelete = (id) =>
    setProducts(products.filter((producto) => producto.id !== id));

  const onAdd = (product) => setProducts(products.concat(product));

  return (
    <>
      <TextField
        fullWidth
        type="text"
        variant="standard"
        placeholder="Filtrar"
        value={filterI}
        onChange={onFilter}
      />

      {filtered.map((product, i) => (
        <Product {...product} key={product.id} delete={onDelete} />
      ))}
      {/* {filtered.map((product, i) => (
        <Product {...product} key={product.id} delete={onDelete} />
      ))} */}
      <ProductForm onSubmit={onAdd} value="" />
    </>
  );
}

export default ProductListPage;
