import { NavLink } from 'react-router-dom';
import MainLogo from '../../UI/MainLogo/MainLogo';
import './PRHeader.scss';

function PRHeader() {
  return (
    <header className="header">
      <MainLogo />
      <ul className="header__container">
        <NavLink to="/" className="header__list-item">о нас</NavLink>
        <NavLink to="/services" className="header__list-item">услуги</NavLink>
        <NavLink to="/news" className="header__list-item">новости</NavLink>
        <NavLink to="/reviews" className="header__list-item">отзывы</NavLink>
      </ul>
      <button
        type="button"
        className="header__button-booking"
      >
        <span className="header__button-caret" />
        забронировать
      </button>
    </header>
  );
}

export default PRHeader;
