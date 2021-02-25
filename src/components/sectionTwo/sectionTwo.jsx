import React from "react";
import ImageTwo from "../../images/image-02@2x.png";
import {
  SectionTwoContainer,
  SectionTwoWrapper,
  SectionTwoImage,
  SectionTwoButton
} from "./sectionTwoElements";
const SectionTwo = () => {
  return (
    <SectionTwoContainer>
      <SectionTwoImage>
        <img src={ImageTwo} alt="two" />
      </SectionTwoImage>
      <SectionTwoWrapper>
        <h1>
          Does PayPal hold too much of your <br /> Shopify Store's cash in
          reserve?
        </h1>
        <div className="paragraphs">
          <p>
            Every Store owner wants more free cash to invest in their business.
            <br />
            You can enjoy a lower PayPal reserve by uploading tracking info to
            improve your store's reputation - <br />
            but it's a headache of a process.
            <br />
            Simply install Trackr to automatically sync your stor's tracking
            info with PayPal and start Freeing up <br />
            more cash to grow your Shopify store.
          </p>
        </div>
        <SectionTwoButton to="/">Start using tracker for free</SectionTwoButton>
      </SectionTwoWrapper>
    </SectionTwoContainer>
  );
};

export default SectionTwo;
