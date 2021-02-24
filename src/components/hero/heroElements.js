import styled from "styled-components";
import { Link } from "react-router-dom";
export const HeroContainer = styled.section`
  max-width: 100%;
  padding: 6rem 15px;
`;
export const HeroWrapper = styled.div`
  max-width: 1144px;
  margin: auto;
  display: grid;

  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 80px 15px;
  .text {
    color: black;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
    .text {
      font-size: 0.8rem;
    }
  }
`;

export const HeroColumnRight = styled.div`
  display: grid;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: clamp(2.2rem, 8vw, 2.5rem);
    margin-top: 60px;
  }
  p {
    padding: 30px 0;
    color: #aaaaaa;
  }
  @media screen and (max-width: 1024px) {
    order: 2;
    h1 {
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
  @media screen and (max-width: 768px) {
    margin-left: 0;

    p {
      padding: 0;
      text-align: center;
    }
    h1 {
      text-align: center;
    }
  }
  @media screen and (max-width: 543px) {
    h1 {
      font-size: 1.7rem;
      margin-bottom: 20px;
      text-align: center;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const HeroColumnLeft = styled.div`
  position: absolute;
  right: 0;
  overflow-x: hidden;
  width: 700px;
  top: 139px;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1024px) {
    order: 1;
    text-align: center;
    img {
      width: 80%;
      height: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    img {
      width: 80%;
      height: 100%;
    }
  }
  @media screen and (max-width: 1168px) {
    position: relative;
    width: 100%;
    margin-right: -20px;
    top: 30px;
  }
`;
export const HeroFormWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media screen and (max-width: 1168px) {
    margin: 20px 0;
    justify-content: center;
  }
  @media screen and (max-width: 543px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
  }
`;

export const HeroForm = styled.form`
  display: flex;
  margin-right: 10px;
  input[type="text"] {
    border-radius: 5px 0 0 5px;
    border: 1px solid #dddddd;
    padding: 0 48px 0 24px;
    width: 180px;
  }
  button {
    border-radius: 0 5px 5px 0;
    border-left: none;
    border: 1px solid #dddddd;
    padding: 0 12px 0 12px;
    color: #5a5a5a;
  }
  @media screen and (max-width: 1068px) {
    input[type="text"] {
      border-radius: 5px 0 0 5px;
      border: 1px solid #dddddd;
      padding: 0 6px 0 6px;
    }
    button {
      border-radius: 0 5px 5px 0;
      border-left: none;
      border: 1px solid #dddddd;
      padding: 0 12px 0 12px;
    }
  }
  @media screen and (max-width: 768px) {
    margin-right: 20px;
  }
  @media screen and (max-width: 543px) {
    input[type="text"] {
      padding: 12px 12px;
    }
    margin-bottom: 15px;
  }
`;

export const HeroButton = styled(Link)`
  background-image: linear-gradient(to right, #9736a1, #552685);
  text-decoration: none;
  color: #fff;
  padding: 12px 32px;
  border-radius: 5px;
  margin-left: 0px;
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 1068px) {
    margin-left: 0px;
    font-size: 0.8rem;
  }
`;

export const HeroCheckWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  div {
    display: flex;
    align-items: center;
    margin-right: 15px;
    img {
      height: 20px;
      width: 20px;
      margin-top: 5px;
    }
    p {
      margin: 0 0 0 5px;
    }
  }
  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
    justify-content: center;
    img {
      height: 14px !important;
      width: 14px !important;
      margin-top: 3px;
    }
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
  @media screen and (max-width: 543px) {
    height: auto;
  }
`;
