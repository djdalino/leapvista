import React, { useState, useEffect, useRef } from "react";
import ArrowLeft from "../../images/arrow-left@2x.png";
import ArrowRight from "../../images/arrow-right@2x.png";
import {
  TestimonialContainer,
  TestimonialWrapper,
  TestimonialComment,
  TestimonialContent,
  PrevArrow,
  NextArrow
} from "./testimonialElements";
const Testimonial = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const length = data.length;
  const timeout = useRef(null);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const next = () => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(next, 3000);
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);
  return (
    <TestimonialContainer>
      <TestimonialWrapper>
        {data.map((item, index) => (
          <TestimonialComment keys={index}>
            {index === current && (
              <TestimonialContent>
                <p>{`"${item.comment}"`}</p>
                <div>
                  <img src={item.img} alt={`litrato ${index}`} />
                  <span>
                    <p className="name">{item.name}</p>
                    <p className="company">
                      {item.position}, {item.company}
                    </p>
                  </span>
                </div>
              </TestimonialContent>
            )}
          </TestimonialComment>
        ))}
        <ul>
          {data.map((item, index) => (
            <>
              <li className={index === current ? "active" : ""}></li>
            </>
          ))}
        </ul>
      </TestimonialWrapper>
      <PrevArrow onClick={prevSlide}>
        <img src={ArrowLeft} alt="arrow left" />
      </PrevArrow>
      <NextArrow onClick={nextSlide}>
        <img src={ArrowRight} alt="arrow right" />
      </NextArrow>
    </TestimonialContainer>
  );
};

export default Testimonial;
