import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SelectBox from '../../SelectBox/SelectBox';
import CoffeeBean from '../Icon/CoffeeBean';
import { Logo, ProfileImg, User, Wrapper } from './Header.style';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  useEffect(() => {
    console.log(isLoggedIn);
  }, []);

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
      {isLoggedIn ? (
        <User>
          <p className="user-name">로그인한사람 님</p>
          <ProfileImg className="user-img" onClick={handleProfileClick}></ProfileImg>
        </User>
      ) : (
        <User>
          <p className="user-name">Guest 님</p>
          <ProfileImg className="user-img" onClick={handleProfileClick}></ProfileImg>
        </User>
      )}

      {isOpen && <SelectBox />}
    </Wrapper>
  );
}

export default Header;
