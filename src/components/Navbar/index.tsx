import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav, NavContainer, MenuIcon, NavMenu, NavItem } from "./styles";
import { FaTypo3, FaBars, FaTimes } from "react-icons/fa";
import { NavbarData } from "./NavbarData";
import { Button } from "../Button";

export const Navbar = () => {
  const [click, setClick] = useState<boolean>(false);
  const [button, setButton] = useState<boolean>(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <Nav>
        <NavContainer>
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            LAPTRAVEL <FaTypo3 />
          </Link>
          <MenuIcon onClick={handleClick}>
            {click ? <FaTimes color="#fff" /> : <FaBars color="#fff" />}
          </MenuIcon>
          <NavMenu active={click}>
            {NavbarData.map((item, index) => {
              return (
                <NavItem key={index}>
                  <Link
                    to={item.path}
                    className={item.class}
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                </NavItem>
              );
            })}
          </NavMenu>
          {button && (
            <Button buttonStyle={false} buttonSize={true}>
              INSCREVER-SE
            </Button>
          )}
        </NavContainer>
      </Nav>
    </>
  );
};
