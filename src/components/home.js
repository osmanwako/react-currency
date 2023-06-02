import { Link } from 'react-router-dom';
import '../assets/style/home.css';
import backgroud from '../assets/images/worldmap.png';

const Home = (data) => {
  const { lists } = data;

  return (
    <main className="home-root">
      <div className="header">
        <img src={backgroud} alt="World Map" className="world-map" />
      </div>
      <div className="currency-title">
        <h4>List World Currency Exchange</h4>
      </div>
      <div className="content">
        {
          lists.map((item, i) => (
            <Link to={`/details/currency/${item.code}`} key={`${item.code}${Date.now()}`} className={(i % 4 === 1 || i % 4 === 2) ? 'container container-odd' : 'container'}>
              <div className="currency-code">
                <span className="currency-icon">{item.code}</span>
                <p className="currency-name">{item.description}</p>
              </div>
              <div className="btn-reaction">
                <h2 className="view-rate">View</h2>
              </div>
            </Link>
          ))
        }
      </div>
    </main>
  );
};

export default Home;
