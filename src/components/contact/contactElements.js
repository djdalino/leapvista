import styled, { css } from "styled-components/macro";

export const ContactContainer = styled.section`
  max-width: 100%;
  @media screen and (max-width: 450px) {
    padding: 0 15px;
  }
`;
export const ContactWrapper = styled.div`
  padding: 80px 0;
  max-width: 414px;
  margin: auto;
  h1 {
    text-align: center;
    font-size: clamp(2rem, 8vw, 2.5rem);
    margin-bottom: 2rem;
    font-family: "Work Sans", sans-serif;
  }
`;

const InputType = css`
  font-weight: 900;
  padding: 12px 12px;
  border: ${({ onError }) => (onError ? "1px solid red" : "1px solid #aaaaaa")};
  border-radius: 5px;
  animation-name: change;
  animation-duration: 0.2s;
  transition: all 0.3s ease-in-out;
  margin-bottom: 0.6rem;
  font-size: 1.1rem;
`;
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  @keyframes change {
    from {
      border: 1px solid red;
    }
    to {
      border: 1px solid #aaaaaa;
    }
  }
  .error {
    color: red;
    margin-bottom: 0.6rem;
  }
  input[type="text"] {
    ${InputType}
  }
  input[type="email"] {
    ${InputType}
  }
  textarea {
    padding: 12px 12px;
    font-weight: 900;
    border: 1px solid #aaaaaa;
    border-radius: 5px;
    margin-bottom: 0.9rem;
    font-size: 1.1rem;
  }
  button {
    background: linear-gradient(to right, #9736a1, #552685);
    border: none;
    padding: 12px 36px;
    border-radius: 5px;
    text-transform: uppercase;
    color: #ffffff;
    cursor: pointer;
    font-weight: 900;
  }
`;
