import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ExchangeRate } from '../redux/exchangeslice';
import Details from './details';
import Navigation from './navigation';

const Currencyrate = () => {
  const dispatch = useDispatch();
  const { load } = useSelector((state) => state.ratelist);
  const { code } = useParams();
  useEffect(() => {
    dispatch(ExchangeRate(code));
  }, [load, dispatch, code]);
  return (
    <div className="container-app">
      <Navigation />
      <Details code={code} />
    </div>
  );
};

export default Currencyrate;
