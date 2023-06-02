import { Route, Routes } from 'react-router-dom';
import './App.css';
import Currency from './components/currency';
import Currencyrate from './components/currencyrate';
import NotFound from './components/notfound';
import Loadata from './components/Loadata';

function App() {
  return (
    <>
      <Loadata />
      <Routes>
        <Route exact path="/" element={<Currency />} />
        <Route exact path="/currencies" element={<Currency />} />
        <Route exact path="/currencies/code" element={<Currency />} />
        <Route exact path="/details/currency" element={<Currencyrate />} />
        <Route exact path="/details/currency/:code" element={<Currencyrate />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
