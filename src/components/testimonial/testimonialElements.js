import styled, { css } from "styled-components/macro";

export const TestimonialContainer = styled.section`
  position: relative;
  width: 100%;

  background: linear-gradient(to right, #9736a1, #552685);
`;
export const TestimonialWrapper = styled.div`
  color: white;
  max-width: 1044px;
  margin: auto;
  padding: 12rem 0;
  position: relative;
  height: 100%;
  ul {
    position: absolute;
    bottom: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;
    li {
      background: transparent;
      border: 1px solid #bbbbbb;
      border-radius: 50%;
      margin: 0 0.3rem;
      width: 10px;
      height: 10px;
    }
    .active {
      background-color: #bbbbbb;
    }
  }
`;
export const TestimonialComment = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  width: 70%;
  height: 100%;
  transform: translateX(20%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TestimonialContent = styled.div`
  display: flex;
  flex-direction: column;
  div {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    img {
      margin-right: 0.4rem;
      width: 3rem;
      height: 3rem;
    }
  }
  .company {
    color: #bbbbbb;
    margin-top: 0.3rem;
    font-size: 0.8rem;
  }
`;

const ArrowButtons = css`
  cursor: pointer;
  z-index: 10;
  height: 100%;
  display: flex;
  align-items: center;
  transition: 0.3s;
  position: absolute;
  &:hover {
    transform: scale(1.2);
  }
  img {
    height: 30px;
  }
`;
export const PrevArrow = styled.div`
  ${ArrowButtons}
  top: 0;
  left: 150px;
  @media screen and (max-width: 1024px) {
    left: 30px;
  }
  @media screen and (max-width: 768px) {
    left: 15px;
  }
  @media screen and (max-width: 543px) {
    left: 5px;
  }
`;
export const NextArrow = styled.div`
  ${ArrowButtons}
  top: 0;
  right: 150px;
  @media screen and (max-width: 1024px) {
    right: 30px;
  }
  @media screen and (max-width: 768px) {
    right: 15px;
  }
  @media screen and (max-width: 543px) {
    right: 5px;
  }
`;
