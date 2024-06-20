import { useState } from 'react';
import { Link } from 'react-router-dom';
import SelectBox from '../../SelectBox/SelectBox';
import CoffeeBean from '../Icon/CoffeeBean';
import { Logo, ProfileImg, User, Wrapper } from './Header.style';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleProfileClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Wrapper>
      <Logo>
        <Link>
          <CoffeeBean size={50} />
          <p className="logo-text">Cafe Pin</p>
        </Link>
      </Logo>
      <User>
        <p className="user-name">Guest 님</p>
        <ProfileImg className="user-img" onClick={handleProfileClick}></ProfileImg>
      </User>
      {isOpen && <SelectBox />}
    </Wrapper>
  );
}

export default Header;
