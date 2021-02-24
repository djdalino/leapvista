import React from "react";
import Shopify from "../../images/shopify-logo@2x.png";
import {
  FooterContainer,
  FooterWrapper,
  AllRights,
  Tracker,
  Support,
  Reach,
  SocialMedia,
  ShopifyLogo,
  FooterColumnRight,
  FooterColumnLeft,
  Facebook,
  Twitter,
  LinkedIn
} from "./footerElements";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterColumnLeft>
          <Tracker>
            <h3>Trackr</h3>
            <p>About</p>
            <p>Pricing</p>
            <p>Contact Us</p>
          </Tracker>
          <Support>
            <h3>Support</h3>
            <p>Support</p>
            <p>Privacy Policy</p>
            <p>Terms of use</p>
          </Support>
          <Reach>
            <h3>Reach us at</h3>
            <p>hello@trackr.io</p>
          </Reach>
        </FooterColumnLeft>

        <FooterColumnRight>
          <SocialMedia>
            <h3>follow us</h3>
            <Facebook />
            <Twitter />
            <LinkedIn />
          </SocialMedia>
          <ShopifyLogo>
            <img src={Shopify} alt="Shopify" />
          </ShopifyLogo>
        </FooterColumnRight>
      </FooterWrapper>

      <AllRights>
        <p>© 2020 Trackr. All Rights Reserved</p>
      </AllRights>
    </FooterContainer>
  );
};

export default Footer;
