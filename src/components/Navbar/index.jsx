import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button, Container } from "..";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { Navigationlinks } from "../../utils/data";

const AppNav = styled.nav`
  background: ${({ scrollNavbar }) => (scrollNavbar ? "#004DB3" : "#004DB3")};
  // opacity: ${({ scrollNavbar }) => (scrollNavbar ? "0.9" : "1")};
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0px;
  z-index: 99999;

  box-shadow: ${({ scrollNavbar }) =>
    scrollNavbar
      ? "var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
      : "transparent"};

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
    padding: 40px 0;
  }
  ${tw`py-12`}
`;
const AppNavContainer = styled(Container)`
  ${tw`flex justify-between items-center z-[1] `}
  @media screen and (max-width: 960px) {
    > img {
      margin-top: 15px;
    }
  }
  ${Container}
`;

const MobileIcon = styled.div`
  ${tw`hidden -mt-2`}

  @media screen and (max-width: 960px) {
    ${tw`block absolute top-0 right-0 text-3xl cursor-pointer`}
    transform: translate(-100%, 60%);
  }
`;

const NavMenu = styled.ul`
  ${tw`flex items-center text-center `}
  list-style: none;
  margin-right: -24px;

  @media screen and (max-width: 960px) {
    ${tw`flex  flex-col w-full absolute bg-black`}
    opacity:0.9;
    top: 62px;
    height: 100vh;
    left: ${({ click }) => (click ? 0 : "-100%")};
    transition: all 0.5s ease;
  }
`;
const NavItem = styled.li`
  ${tw`h-[80]`}

  border-bottom: 2px solid transparent;
  letter-spacing: 0.02em;
  font-size: 16px;

  &:hover {
    font-weight: 700;
    cursor: pointer;
  }
  @media screen and (max-width: 960px) {
    ${tw` w-full`}
    &:hover {
      font-weight: 700;
      border: none;
    }
  }
`;
const NavLinks = styled.a`
  ${tw`text-navlink flex justify-center items-center text-[16px] font-bold hover:underline  decoration-blue-400`}
  padding: 0.5rem 1rem;
  height: 100%;

  &.active {
    color: #fff;
    border-bottom: none;
    font-weight: 900;

    @media screen and (max-width: 960px) {
      border-bottom: none;
      font-weight: 900;
      color: #fff;
    }
  }
  @media screen and (max-width: 960px) {
    ${tw`text-center table p-8 w-full`}
    &:hover {
      ${tw`font-bold cursor-pointer`}
      transition: all 0.3s ease;
    }
  }
`;

const NavItemBtn = styled.nav`
  ${tw` mr-10 ml-5`}
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    margin-left: 0;
    ${tw` mr-0 ml-0`}
  }
`;
const NavBtnLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding-block-end: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

const AppNavLogo = styled.div`
  ${tw`flex items-center justify-self-start cursor-pointer`}
`;

export const Navbar = () => {
  const [scrollNavbar, setScrollNavbar] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [active, setActive] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    setActive(true);
  };
  const appNav = useRef(null);

  const ChangeBackground = () => {
    if (window.pageYOffset >= 80) {
      setScrollNavbar(true);
    } else {
      setScrollNavbar(false);
    }
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ChangeBackground);
  }, []);

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <AppNav scrollNavbar={scrollNavbar} ref={appNav}>
        <AppNavContainer>
          <AppNavLogo onClick={toggleHome}>
            <a href="#">
              <img
                src="/assets/img/Frame 260.png"
                alt="TechTime Logo"
                width={120}
                height={40}
              />
            </a>
          </AppNavLogo>

          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes color="white" /> : <FaBars color="white" />}
          </MobileIcon>

          <NavMenu onClick={handleClick} click={click}>
            {Navigationlinks?.map(({ href, title, active }, index) => {
              //Router goes here..
              return (
                <NavItem key={index}>
                  <NavLinks
                    className={active && "active"}
                    onClick={closeMobileMenu}
                    href={`/${href}`}
                  >
                    {title}
                  </NavLinks>
                </NavItem>
              );
            })}

            <NavItemBtn>
              <NavBtnLink href="/#">
                <Button
                  primary="#fff"
                  color="#004DB3"
                  border={3}
                  paddingX={14}
                  paddingY={30}
                  mediaQuery={true}
                >
                  Enroll Now
                </Button>
              </NavBtnLink>
            </NavItemBtn>
          </NavMenu>
        </AppNavContainer>
      </AppNav>
    </>
  );
};
