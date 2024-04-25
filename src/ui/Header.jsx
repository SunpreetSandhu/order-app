import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Perfect Pizza Order Co.</Link>
      <SearchOrder />
      <p>Sunny</p>
    </header>
  );
}

export default Header;
