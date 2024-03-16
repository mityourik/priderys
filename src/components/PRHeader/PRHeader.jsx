import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import MainLogo from '../../UI/MainLogo/MainLogo';
import './PRHeader.scss';

function PRHeader({ onBookingClick, isFilterOpen }) {
  const caretClass = isFilterOpen ? 'header__button-caret--up' : '';
  const bookingButtonClass = isFilterOpen ? 'header__button-booking--active' : '';

  return (
    <header className="header">
      <MainLogo />
      <ul className="header__container">
        <NavLink to="/" className="header__list-item">о нас</NavLink>
        <NavLink to="/services" className="header__list-item">услуги</NavLink>
        <NavLink to="/news" className="header__list-item">новости</NavLink>
        <NavLink to="/reviews" className="header__list-item">отзывы</NavLink>
        <button
          type="button"
          className={`header__button-booking ${bookingButtonClass}`}
          onClick={onBookingClick}
        >
          <span className={`header__button-caret ${caretClass}`} />
          забронировать услуги
        </button>
      </ul>
    </header>
  );
}

PRHeader.propTypes = {
  onBookingClick: PropTypes.func.isRequired,
  isFilterOpen: PropTypes.bool.isRequired,
};

export default PRHeader;
