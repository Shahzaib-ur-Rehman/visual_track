import React, { useState } from "react";
import styled from "styled-components";
import corssSvg from "../../public/svg/crosssvg.svg";
interface IMenuProps {
  isOpen: boolean;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <NavLeft>
        <Logo>
          {" "}
          LOGO
        </Logo>
      
      </NavLeft>

      <NavRight>
        
        <a href={"/"}>How it Works</a>
        <a href={"/"}>Demo</a>
        <a href={"/"}>Community</a>
        
      </NavRight>
    </Nav>
  );
};

export default Navbar;

const NavLeft = styled.div`
  @media (min-width: 992px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0 26px;
    > a {
      text-decoration: none;
      color: rgb(122, 110, 170);
      font-size: 16px;
      font-weight: 400;
      padding: 14px 10px;

      &:hover {
        background: rgb(239, 244, 245);
        border-radius: 16px;
      }
    }
  }
`;
const NavRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0 4px;
  width: 100%;
  @media (min-width: 992px) {
    gap: 0 12px;
    justify-content: end;
  }
  > a {
      text-decoration: none;
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      padding: 14px 2px;
      @media (min-width: 576px) {
        text-decoration: none;
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      padding: 14px 10px;
  }

      &:hover {
        text-decoration: underline;
        color: #fff;
      }
    }
`;


const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: auto;
  max-width: 1440px;
  /* background: linear-gradient(148.05deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0) 100%), */
  background: radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.7) 0%, rgba(182, 145, 255, 0.4) 67.71%, rgba(255, 255, 255, 0) 100%);


  @media (min-width: 576px) {
    padding: 8px 15px;
  }

@media(min-width: 992px){
    display: none;
}
`;

const Logo = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 0px;
color: #FFFFFF;
  text-decoration: none;
  // font-weight: 800;
  // font-size: 1.7rem;
  display: contents;
  span {
    font-weight: 300;
    // font-size: 1.3rem;
  }
  @media (min-width: 992px) {
    font-weight: 700;
font-size: 57px;
line-height: 58px;
  }
`;

