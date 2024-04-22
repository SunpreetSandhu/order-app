import { Outlet } from "react-router";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <h1>Content</h1>
        {/* This is to display child routes 
        when they are navigated to like /, /menu, etc
        */}
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
