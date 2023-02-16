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

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="category">
        <Route index element={<CategoryList/>}/>
        <Route path=":id" element={<CategoryPage/>}/>
      </Route>

    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
