import CoffeeBean from '../Icon/CoffeeBean';
import { Logo, User, Wrapper } from './Header.style';

function Header() {
  return (
    <Wrapper>
      <Logo>
        <CoffeeBean />
        <p className="logo-text">Cafe Pin</p>
      </Logo>
      <User>
        <p className="user-name">Guest 님</p>
        <div className="user-img"></div>
      </User>
    </Wrapper>
  );
}

export default Header;
