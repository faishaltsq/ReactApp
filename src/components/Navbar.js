import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IoSunny, IoMoon } from 'react-icons/io5';

import { NavLink } from 'react-router-dom';

const Navbar = ({ isOpen, setIsOpen, theme, setTheme, scroll, location }) => {
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const node = useRef(null);
  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsOpen(false);
  };

  useEffect(() => {
    //console.log(node.current);
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const closeMenu = () => {
    if (isOpen === true) {
      setIsOpen(false);
    }
  };

  return (
    <Parent ref={node} scroll={scroll} location={location}>
      <Nav>
        <Logo scroll={scroll} location={location} exact to="/">
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="300.000000pt" height="178.000000pt" viewBox="0 0 300.000000 178.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.10, written by Peter Selinger 2001-2011
</metadata>
<g transform="translate(0.000000,178.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M1797 1428 c-10 -18 -11 -65 -7 -208 3 -102 5 -186 5 -187 -1 -2 -76
47 -166 107 -113 76 -170 109 -182 104 -24 -9 -89 -120 -85 -146 2 -16 45 -46
168 -119 91 -54 170 -100 175 -103 13 -7 9 -10 -182 -122 -139 -82 -163 -99
-163 -120 0 -28 64 -130 87 -138 17 -7 76 27 232 133 57 39 108 71 113 71 6 0
8 -14 4 -32 -3 -18 -6 -107 -7 -197 0 -127 2 -166 13 -172 24 -15 154 -11 168
6 9 11 11 63 8 205 -2 104 -1 190 3 190 3 0 69 -42 145 -94 165 -110 178 -118
198 -110 19 7 86 119 86 144 0 13 -50 47 -177 121 -197 113 -192 110 -177 116
5 2 87 49 182 104 113 66 172 107 172 117 0 24 -61 122 -86 139 -20 13 -32 6
-175 -89 -85 -57 -159 -106 -165 -110 -7 -5 -9 51 -6 187 3 147 1 199 -8 210
-9 11 -33 15 -86 15 -66 0 -75 -2 -87 -22z m138 -28 c3 -6 6 -87 6 -182 -1
-146 1 -174 15 -190 10 -10 24 -18 33 -18 9 0 81 43 160 95 80 53 150 94 155
92 16 -5 56 -67 56 -86 0 -10 -53 -47 -137 -96 -157 -92 -193 -119 -193 -145
0 -30 74 -82 273 -191 42 -23 57 -37 57 -53 0 -30 -39 -85 -61 -86 -3 0 -63
38 -133 84 -160 106 -180 115 -206 91 -18 -17 -20 -31 -19 -192 0 -95 -3 -178
-6 -183 -9 -14 -92 -12 -102 3 -4 6 -6 86 -5 175 3 136 0 168 -13 188 -8 13
-23 24 -33 24 -9 0 -82 -43 -162 -95 -80 -52 -150 -95 -157 -95 -12 0 -45 43
-56 72 -9 25 3 34 163 128 78 47 149 94 157 106 23 36 0 58 -147 146 -74 44
-145 89 -157 100 l-22 21 20 39 c11 21 26 41 34 45 9 3 77 -36 162 -91 80 -53
155 -96 165 -96 9 0 25 11 33 24 14 20 15 50 11 188 -3 105 -1 167 6 175 12
15 94 17 103 3z"/>
<path d="M653 994 c-52 -26 -76 -74 -71 -140 7 -86 72 -141 156 -131 53 6 91
31 114 78 65 126 -71 256 -199 193z m124 -11 c91 -43 98 -176 13 -227 -44 -25
-64 -21 -35 8 57 58 55 159 -6 210 -35 30 -23 34 28 9z m-41 -26 c48 -44 57
-105 22 -157 -51 -74 -112 -68 -149 16 -25 56 -13 110 32 148 40 34 52 33 95
-7z"/>
<path d="M517 893 c-4 -3 -7 -17 -7 -30 0 -18 5 -23 25 -23 20 0 25 5 25 24 0
13 -7 27 -16 30 -19 7 -19 7 -27 -1z"/>
<path d="M891 886 c-17 -20 -2 -48 23 -44 24 3 34 37 14 49 -18 12 -24 11 -37
-5z"/>
</g>
</svg>
        </Logo>
        <Hamburger
          onClick={() => setIsOpen(!isOpen)}
          scroll={scroll}
          location={location}
        >
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink
            exact
            to="/"
            onClick={closeMenu}
            scroll={scroll}
            path={location}
          >
            Home
          </MenuLink>
          <MenuLink
            exact
            to="/contacts"
            onClick={closeMenu}
            scroll={scroll}
            path={location}
          >
            Contacts
          </MenuLink>
          <MenuLink
            exact
            to="/about"
            onClick={closeMenu}
            scroll={scroll}
            path={location}
          >
            About
          </MenuLink>
          {theme === 'light' ? (
            <IoMoon
              size="1.5rem"
              className="icon"
              onClick={() => themeToggler()}
            />
          ) : (
            <IoSunny
              size="1.5rem"
              className="icon"
              onClick={() => themeToggler()}
            />
          )}
        </Menu>
      </Nav>
    </Parent>
  );
};

const Parent = styled.header`
  transition: background-color 0.5s, box-shadow 0.5s;
  .icon {
    border-radius: 100%;
    cursor: pointer;
    position: absolute;
    right: 1.5rem;
    top: 1rem;
    transition: color 0.5s;

    color: ${(props) =>
      props.scroll && props.location
        ? props.theme.sunMoon
        : props.theme.sunMoonScroll};
    &:hover {
      color: ${(props) => props.theme.sunMoonHover};
    }
    @media (max-width: 40rem) {
      right: 5rem;
    }
  }

  box-sizing: border-box;
  z-index: 100;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: ${(props) =>
    props.scroll && props.location
      ? props.theme.navbar
      : props.theme.navbarStart};
  overflow: visible;
  box-shadow: ${(props) =>
    props.scroll && props.location
      ? '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)'
      : '0'};
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 60rem;
  margin: auto;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  //cursor: pointer;
  margin-top: 5px;
  &:active,
  &:hover {
    span {
      background: ${(props) => props.theme.hamburgerHover};
    }
  }

  span {
    height: 3px;
    width: 28px;
    transition: background-color 0.5s;
    background: ${(props) =>
      props.scroll && props.location
        ? props.theme.hamburgerStart
        : props.theme.hamburger};
    margin-bottom: 5px;
    border-radius: 2px;
    margin-right: 1.5rem;
  }

  @media (max-width: 40rem) {
    display: flex;
  }
`;

const MenuLink = styled(NavLink)`
  padding: 1.1rem 0rem;
  width: 6rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: color 0.5s;
  color: ${(props) =>
    props.scroll && props.path
      ? props.theme.menuLink
      : props.theme.menuLinkScroll};
  &.active {
    color: ${(props) => props.theme.menuLinkActive};
  }
  font-weight: 600;
  font-size: 1rem;

  @media (max-width: 40rem) {
    width: 100%;
  }

  @media (min-width: 40rem) {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: block;
      width: 100%;
      height: 0.3rem;
      background-color: ${(props) => props.theme.menuLinkUnderline};
      transform: scaleX(0%);
      transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    }

    &::before {
      transform-origin: 50% 0;
    }

    &:hover {
      &::before {
        transform: scaleX(100%);
        transform-origin: 50% 0;
      }
    }
  }

  &:nth-last-child(2) {
    @media (max-width: 66rem) {
      margin-right: 3.5rem;
    }

    @media (max-width: 40rem) {
      margin-right: auto;
      //box-sizing: content-box;
      border-bottom: solid 0.5rem ${(props) => props.theme.menuLinkActive};
    }
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 40rem) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${(props) => (props.isOpen ? '11rem' : '0')};
    transition: max-height 0.2s ease-out;
  }
`;

const Logo = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  width: 9rem;
  height: 3rem;

  
  @media (max-width: 40rem) {
    margin-left: 1rem;
  }
  padding: 0.5rem;

 
`;

export default Navbar;
