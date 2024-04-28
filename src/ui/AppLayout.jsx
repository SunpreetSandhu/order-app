import { Outlet, useNavigation } from 'react-router';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  console.log(navigation);
  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <main>
        {/* This is to display child routes 
        when they are navigated to like /, /menu, etc from appjsx
        */}
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
