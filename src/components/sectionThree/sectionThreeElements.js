import styled from "styled-components";

export const SectionThreeContainer = styled.section`
  width: 100%;
`;
export const SectionThreeWrapper = styled.div`
  max-width: 1144px;
  margin: auto;
  padding: 3rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionColumnLeft = styled.div`
  padding: 0 0 0 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin-top: 15px;
    font-size: 0.9rem;
    color: #777777;
  }
  h1 {
    font-family: "Niramit", sans-serif;
    font-size: clamp(2rem, 8vw, 2.5rem);
  }
  @media screen and (max-width: 968px) {
    h1 {
      font-family: "Niramit", sans-serif;
      font-size: 1.5rem;
      padding: 0 15px;
    }
    p {
      padding: 0 15px;
    }
  }
  @media screen and (max-width: 968px) {
    padding: 0;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;
export const SectionColumnRight = styled.div`
  padding: 50px 0 50px 50px;
  img {
    width: 400px;
  }
  display: flex;
  @media screen and (max-width: 968px) {
    padding: 0;
    width: 100%;
    align-items: center;
    justify-content: center;
    img {
      width: 400px;
    }
  }
  @media screen and (max-width: 767px) {
    padding: 0;
    width: 100%;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
    }
  }
`;
