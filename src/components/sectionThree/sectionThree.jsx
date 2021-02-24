import React from "react";
import {
  SectionThreeContainer,
  SectionThreeWrapper,
  SectionColumnLeft,
  SectionColumnRight
} from "./sectionThreeElements";
import ImageThree from "../../images/image-03@2x.png";
const SectionThree = () => {
  return (
    <SectionThreeContainer>
      <SectionThreeWrapper>
        <SectionColumnLeft>
          <h1>Free Extra cash from your store's PayPal reserves</h1>
          <p>
            Reduce your rolling reserve with minimal effort. Trackr syncs your
            tracking <br />
            information with PayPal to automatically build trust and lower your
            rolling reserve <br />
            percentage -which frees more cas to build your business
          </p>
        </SectionColumnLeft>
        <SectionColumnRight>
          <img src={ImageThree} alt="Three" />
        </SectionColumnRight>
      </SectionThreeWrapper>
    </SectionThreeContainer>
  );
};

export default SectionThree;
