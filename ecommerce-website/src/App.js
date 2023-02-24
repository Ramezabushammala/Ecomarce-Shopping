import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// root
import RootLayout from "./layouts/RootLayout";

// pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CategoryList from "./features/categories/CategoryList";
import CategoryPage from "./features/categories/CategoryPage";
import Error from "./pages/Error";
import SearchProduct from "./features/products/SearchProduct";
import ProductPage from "./features/products/ProductPage";
import ListOfAll from "./features/products/ListOfAll";
import CartPage from "./features/cart/CartPage";
const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      
      <Route path="cart" element={<CartPage/>}/>

      <Route path="category">
        <Route index element={<CategoryList/>}/>
        <Route path=":id" element={<CategoryPage/>}/>
      </Route>
      
      <Route path="product">
        <Route index element={<ListOfAll/>}/>
        <Route path="search" element={<SearchProduct/>}/>
        <Route path=":productId" element={<ProductPage/>}/>
      </Route>

    </Route>

    <Route path="*" element={<Error/>}/>
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
