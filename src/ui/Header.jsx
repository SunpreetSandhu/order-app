import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header className="bg-teal-600 uppercase">
      <Link to="/" className="tracking-widest">
        Perfect Pizza Order Co.
      </Link>
      <SearchOrder />
      <p>Sunny</p>
    </header>
  );
}

export default Header;
