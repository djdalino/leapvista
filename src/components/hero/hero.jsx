import React from "react";
import ImageHero from "../../images/image-01@2x.png";
import {
  HeroContainer,
  HeroWrapper,
  HeroColumnRight,
  HeroColumnLeft,
  HeroFormWrapper,
  HeroForm,
  HeroButton,
  HeroCheckWrapper
} from "./heroElements";
import HeroCheck from "./heroCheck";
import CheckCircle from "../../images/check-circle.png";
const Hero = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroColumnRight>
          <h1>Unlock your shopify store's Paypal Account reserve</h1>
          <p>
            Synchronize your store's tracking info to reduce your account <br />
            reserve and get Paypal funds More quickly
          </p>
          <HeroFormWrapper>
            <HeroForm>
              <input type="text" placeholder="your-shop-name" />
              <button>trackr.io</button>
            </HeroForm>
            <HeroButton to="/">Start for free</HeroButton>
          </HeroFormWrapper>
          <HeroCheckWrapper>
            <HeroCheck image={CheckCircle} text="14 day trial" />
            <HeroCheck image={CheckCircle} text="Easy setup" />
            <HeroCheck image={CheckCircle} text="Cancel anytime" />
          </HeroCheckWrapper>
        </HeroColumnRight>
        <HeroColumnLeft>
          <img src={ImageHero} alt="Hero" />
        </HeroColumnLeft>
      </HeroWrapper>
    </HeroContainer>
  );
};

export default Hero;
