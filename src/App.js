import {
  Container,
  createTheme,
  ThemeProvider,
  Typography,
  CssBaseline
} from "@mui/material";
import { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";

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
  }
];

export const productsContext = createContext([]);
export const userContext = createContext("Daniel");

function App() {
  const [products, setProducts] = useState(product_list);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <productsContext.Provider value={[products, setProducts]}>
        <userContext.Provider value={"Daniel"}>
          <Navbar />
          <Container>
            <ProductListPage />
            <Typography variant="h5">
              Products count: {products.length}
            </Typography>
          </Container>
        </userContext.Provider>
      </productsContext.Provider>
    </ThemeProvider>
  );
}

export default App;
