import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";

/*
imparative way to declare routes outside jsx
old way:  <browser router> < routes> <route path = 'menu'> element = <menu/> />
nessecary to enable data fetching w react router
*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/order/new",
    element: <CreateOrder />,
  },
  {
    path: "/order/:orderId",
    element: <Order />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
