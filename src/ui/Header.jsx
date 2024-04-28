import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
  return (
    <header className="bg-teal-600 uppercase">
      <Link to="/" className="tracking-widest">
        Perfect Pizza Order Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
