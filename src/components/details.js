import React from 'react';
import { useSelector } from 'react-redux';
import '../assets/style/details.css';
import world from '../assets/images/worldmap.png';
import currencyicon from '../assets/images/currencyicon.png';

const Details = (data) => {
  const { code } = data;
  const { rates } = useSelector((state) => state.ratelist);
  const { currencies } = useSelector((state) => state.currencylist);
  if (currencies.length === 0 || rates.length === 0) {
    return <div className="data-load">Loading...</div>;
  }
  const countries = currencies.filter((country) => country.code === code);

  return (
    <main className="details-container">
      <div className="details-map">
        <img src={world} alt="World Map" className="map-image" />
        <img src={currencyicon} alt="Most known Currency" className="map-image" />
      </div>
      <div className="details-head">
        <h4>
          {countries[0]?.description || 'Unkown'}
          {' '}
          Currency Exchange Rate:
          {' '}
        </h4>
        <h4>Latest</h4>
      </div>
      {
        currencies.map((currency) => (
          <div key={`${currency.code}${Date.now()}`} className="detail-item">
            <span className="rate-list">
              <span className="rate-icon">{currency.code}</span>
              <p className="rate-name">{currency.description}</p>
            </span>
            <span>
              {rates[currency.code]}
              {' '}
              {countries[0].code}
            </span>
          </div>
        ))

      }
    </main>
  );
};

export default Details;
