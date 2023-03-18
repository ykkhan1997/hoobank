import React from "react";
import { feedback } from "@/constants";
import FeedbackCard from "./feedbackcard";

const Testomonials = () => {
  return (
    <section
      id="clients"
      className="flex justify-center items-center flex-col sm:py-16 py-6 relative"
    >
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[72px] leading-[52px] w-full text-white">
          What people are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className="font-poppins text-normal text-[18px] leading-[30.8px] max-w-[450px] text-dimWhite">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {
            feedback.map((card)=>(
                <FeedbackCard key={card.id} {...card}/>
            ))
        }
      </div>
    </section>
  );
};

export default Testomonials;
