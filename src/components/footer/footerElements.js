import styled, { css } from "styled-components/macro";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
export const FooterContainer = styled.section`
  background: #f5f5f5;
  h3 {
    text-transform: uppercase;
    margin-bottom: 0.3rem;
    font-weight: 800;
    color: #5a5a5a;
    font-size: 1rem;
  }
  p {
    margin: 0.5rem 0;
    color: #aaaaaa;
    cursor: pointer;
  }
`;
export const FooterWrapper = styled.div`
  width: 80%;
  padding: 4rem 0;
  border-bottom: 1px solid #aaaaaa;
  margin: auto;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const AllRights = styled.div`
  padding: 1.1rem 0;
  text-align: center;
`;
export const Tracker = styled.div``;
export const Support = styled.div``;
export const Reach = styled.div``;
export const SocialMedia = styled.div``;
export const ShopifyLogo = styled.div``;
export const FooterColumnRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 5rem;
  @media screen and (max-width: 1024px) {
    margin-top: 1.1rem;
    padding-left: 0;
    align-items: center;
    h3 {
      text-align: center;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const FooterColumnLeft = styled.div`
  display: flex;
  padding-right: 5rem;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 968px) {
    padding-right: 0;
    font-size: 0.9rem;
  }
`;

const SocialMedias = css`
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  font-size: 1.3rem;
  padding: 0.8rem;
  margin: 0px 0.3rem;
`;

export const Facebook = styled(FaFacebookF)`
  ${SocialMedias}
`;
export const Twitter = styled(FaTwitter)`
  ${SocialMedias}
`;
export const LinkedIn = styled(FaLinkedinIn)`
  ${SocialMedias}
`;
