import { useSelector } from 'react-redux';
import Home from './home';
import Navigation from './navigation';

const Currency = () => {
  const { currencies } = useSelector((state) => state.currencylist);
  return (
    <div className="container-app">
      <Navigation />
      {currencies.length === 0 ? <div className="data-load">Loading...</div> : <Home lists={currencies} />}

    </div>
  );
};

export default Currency;
