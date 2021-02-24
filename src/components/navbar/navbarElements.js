import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
export const NavbarContainer = styled.section`
  width: 100%;
  background: #222222;
  color: #fff;
  position: fixed;
  font-family: "Niramit", sans-serif;
  z-index: 20;
`;
export const NavbarWrapper = styled.div`
  position: relative;
  max-width: 1144px;
  padding: 0 15px;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavbarLogo = styled(Link)`
  padding: 15px 0;
`;
export const NavbarMenu = styled.ul`
  display: flex;

  text-transform: uppercase;
  font-family: "Niramit", sans-serif;
  font-weight: 800;
  @media screen and (max-width: 768px) {
    @keyframes slide {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(0%);
      }
    }
    padding: 0;
    display: ${({ show }) => (show ? "flex" : "none")};
    transition: all 0.3s ease-in-out;
    height: 100vh;
    animation-name: slide;
    animation-duration: 0.2s;
    justify-content: space-around;
    align-items: center;
    background: #000;
    flex-direction: column;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }
`;
export const NavbarList = styled.li`
  list-style-type: none;
  padding: 0 20px;
  &:hover {
    transform: scale(1.05);
  }
`;
export const NavbarLinks = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const NavbarButton = styled(Link)`
  background-image: linear-gradient(to right, #9736a1, #552685);
  text-decoration: none;
  color: #fff;
  padding: 12px 32px;
  border-radius: 5px;
`;

export const NavbarMenuIcon = styled(FaBars)`
  display: none;
  position: relative;
  color: #fff;
  font-size: 2rem;
  top: 0;
  left: 0;
  margin: 24px 0;
  z-index: 10;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const NavbarClosedIcon = styled(AiOutlineClose)`
  display: none;
  position: relative;
  color: #fff;
  font-size: 2rem;
  margin: 24px 0;
  z-index: 10;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
