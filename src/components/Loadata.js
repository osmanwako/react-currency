import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCurrency } from '../redux/currencyslice';

const Loadata = () => {
  const dispatch = useDispatch();
  const { load } = useSelector((state) => state.currencylist);

  useEffect(() => {
    dispatch(loadCurrency());
  }, [load, dispatch]);

  return <div className="d-none">No Data Loaded</div>;
};

export default Loadata;
