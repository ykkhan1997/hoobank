import React from "react";
import Button from "./button";

const CTA = () => {
  return (
    <section className="flex justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow">
      <div className="flex flex-1 flex-col">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[72.8px] leading-[52.8px] w-full text-white">
          Let's try our services now!
        </h2>
        <p className="font-poppins font-normal text-[18px] leading-[30.8px] mt-5 max-w-[470px] text-white">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10">
        <Button />
      </div>
    </section>
  );
};

export default CTA;
