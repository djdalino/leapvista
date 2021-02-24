import styled from "styled-components";
import { Link } from "react-router-dom";
export const SectionTwoContainer = styled.section`
  width: 100%;
  position: relative;

  margin-top: 300px;
  font-family: "Niramit", sans-serif;
  @media screen and (max-width: 1024px) {
    margin-top: 200px;
  }
  @media screen and (max-width: 823px) {
    margin-top: 150px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 150px;
  }
`;
export const SectionTwoWrapper = styled.div`
  max-width: 1144px;
  margin: auto;
  color: #fff;
  background: #222222;
  padding: 20px 0px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  h1 {
    margin-top: 100px;
    font-size: 2.2rem;
    font-weight: 700;
    font-family: "Work Sans", sans-serif;
  }
  .paragraphs {
    padding: 20px 0;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.8rem;
    }
    .paragraphs {
      padding: 20px 15px;
    }
  }
  @media screen and (max-width: 543px) {
    height: 100%;
  }
`;

export const SectionTwoImage = styled.div`
  position: absolute;
  top: -230px;
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 400px;
  }
  @media screen and (max-width: 768px) {
    top: -14.5rem;
    img {
      width: 400px;
    }
  }
  @media screen and (max-width: 414px) {
    top: -12rem;
    img {
      width: 80%;
    }
  }
  @media screen and (max-width: 375px) {
    top: -11rem;
  }
  @media screen and (max-width: 360px) {
    top: -10rem;
  }
  @media screen and (max-width: 320px) {
    top: -9rem;
  }
`;

export const SectionTwoButton = styled(Link)`
  text-transform: uppercase;
  background-image: linear-gradient(to right, #9736a1, #552685);
  text-decoration: none;
  color: #fff;
  padding: 12px 52px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 900;
  font-size: 0.8rem;
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 320px) {
    padding: 12px 24px;
  }
`;
