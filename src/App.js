import { Route, Routes } from 'react-router-dom';
import './App.css';
import Loadata from './components/Loadata';
import Home from './components/home';
import NotFound from './components/notfound';

function App() {
  return (
    <div className="container-app">
      <Loadata />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/currencies/list" element={<Home />} exact />
        <Route path="*" element={<NotFound />} exact />
      </Routes>
    </div>
  );
}

export default App;
