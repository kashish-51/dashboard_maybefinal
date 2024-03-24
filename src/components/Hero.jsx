// import { curve } from "../assets";
import {curve} from "../assets"
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles } from "./design/Hero";

import { useRef } from "react";


const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6 text-slate-100">
            
           Unlock the Power of&nbsp;Social Media&nbsp;with {` `}
            <span className="inline-block relative">
            GiggleGraph{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          Empower Your Social Media Strategy with Advanced Analytics and Personalized Recommendations.
          </p>
          <Button href="/pricing" white>
            Get started
          </Button>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
            </div>

          </div>
 
          <BackgroundCircles/>
        </div>

      </div>


    </Section>
  );
};

export default Hero;
