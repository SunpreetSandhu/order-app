import { useSelector } from 'react-redux';

function Username() {
  //got access to store then got userslice then username
  const username = useSelector((state) => state.user.username);
  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
