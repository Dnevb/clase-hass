import {
  Box,
  Button,
  createTheme,
  TextField,
  ThemeProvider
} from "@mui/material";
import { useEffect, useState } from "react";
import Product from "./components/Product";

const theme = createTheme({});

const product_list = [
  {
    id: 1,
    name: "Cellphone",
    price: 499
  },
  {
    id: 2,
    name: "Laptop",
    price: 599
  },
  {
    id: 3,
    name: "Printer",
    price: 299
  }
];

function App() {
  const [products, setProducts] = useState(product_list);
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

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <TextField
          type="text"
          variant="standard"
          placeholder="Filtrar"
          value={filterI}
          onChange={onFilter}
        />
        {filtered.map((product, i) => (
          <Product {...product} key={product.id} />
        ))}

        <Button
          variant="outlined"
          onClick={() => {
            setProducts(
              products.concat({
                id: Math.random() * 100,
                name: "React",
                price: 200
              })
            );
          }}
        >
          Agregar
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default App;