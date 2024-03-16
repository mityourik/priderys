import { NavLink } from 'react-router-dom';
import './MainLogo.scss';
import mainLogoImg from '../../assets/priderys/mainLogo.svg';

function MainLogo() {
  return (
    <NavLink
      to="/"
      className="main-logo"
    >
      <img
        alt="Основной лого"
        src={mainLogoImg}
        className="main-logo__image"
      />
    </NavLink>
  );
}

export default MainLogo;
