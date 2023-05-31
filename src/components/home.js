import { useSelector } from 'react-redux';
import './home.css';
import search from '../assets/search.png';
import iconlogo from '../assets/worldedit.png';

const Home = () => {
  const {
    status, message, currencies,
  } = useSelector((state) => state.currencylist);
  console.log(status, message, currencies);

  return (
    <>
      <div id="currency-id" className="currency-name">
        <div id="nav-header">
          <div className="nav-img-icon">
            <h3 className="page-title">World Currency Exchange Application</h3>
          </div>
          <div className="famous-curr-icon">
            <img src={iconlogo} className="curr-img-icon" alt="Prominent Currency" />
          </div>
        </div>

        <div className="news-search-lt">
          <input className="form-control" placeholder="Search" type="text" />
          <span className="input-search">
            <img src={search} className="search-glass-icon" alt="Search currency" />
          </span>
        </div>
        <div className="currency-desc">
          <h3>Currency Name and Description List</h3>
        </div>
        <ul className="list-group">
          <li className="list-label">A</li>
          <li className="list-group-item">
            <div className="list-item-left">
              <span className="span-acronym">USD</span>
              {' '}
              Business
            </div>
            <div className="list-item-right">
              <span>2023-09-02</span>
              <button type="button" className="btn-list-icon v-icon">&#8942;&#8942;&#8942;</button>
              <button type="button" className="btn-list-icon h-icon">&#8942;&#9776;</button>

            </div>
          </li>
          <li className="list-group-item">
            <div className="list-item-left">
              <span className="span-acronym">ETB</span>
              {' '}
              Ethiopian Birr
            </div>
            <div className="list-item-right">
              <span>2023-09-02</span>
              <button type="button" className="btn-list-icon v-icon">&#8942;&#8942;&#8942;</button>
              <button type="button" className="btn-list-icon h-icon">&#8942;&#9776;</button>
            </div>
          </li>
          <li className="list-label">B</li>
          <li className="list-group-item">
            <div className="list-item-left">
              <span className="span-acronym">CDD</span>
              {' '}
              Canadan Dollar
            </div>
            <div className="list-item-right">
              <span>2023-09-02</span>
              <button type="button" className="btn-list-icon v-icon">&#8942;&#8942;&#8942;</button>
              <button type="button" className="btn-list-icon h-icon">&#8942;&#9776;</button>
            </div>
          </li>
          <li className="list-group-item">
            <div className="list-item-left">
              <span className="span-acronym">EUR</span>
              {' '}
              European Euro
            </div>
            <div className="list-item-right">
              <span>2023-09-02</span>
              <button type="button" className="btn-list-icon v-icon">&#8942;&#8942;&#8942;</button>
              <button type="button" className="btn-list-icon h-icon">&#8942;&#9776;</button>
            </div>
          </li>
          <li className="list-label">C</li>
          <li className="list-group-item">
            <div className="list-item-left">
              <span className="span-acronym">USD</span>
              {' '}
              Business
            </div>
            <div className="list-item-right">
              <span>Latest</span>
              <button type="button" className="btn-list-icon v-icon">&#8942;&#8942;&#8942;</button>
              <button type="button" className="btn-list-icon h-icon">&#8942;&#9776;</button>

            </div>
          </li>
        </ul>
      </div>

    </>
  );
};

export default Home;
