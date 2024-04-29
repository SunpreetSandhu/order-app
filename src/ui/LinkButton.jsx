import { Link } from 'react-router-dom';

function LinkButton({ children, to }) {
  return (
    <Link to={to} className="text-gray-500-500 text-sm hover:text-blue-600">
      {children}
    </Link>
  );
}

export default LinkButton;
