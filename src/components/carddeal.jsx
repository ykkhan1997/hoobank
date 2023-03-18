import { card } from "@/assets";
import Image from "next/image";
import React from "react";
import Button from "./button";

const CardDeal = () => {
  return (
    <section id="products" className="flex md:flex-row flex-col sm:py-16 py-6">
      <div className="flex-1 flex justify-center items-start flex-col">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[72.8px] leading-[52.8px] text-white">
          Find a better card deal <br className="sm:block hidden" />
          in a few easy steps.
        </h2>
        <p className="font-poppins font-medium text-[18px] leading-[30px] text-dimWhite mt-5 max-w-[470px]">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles={`mt-10`} />
      </div>
      <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
        <Image src={card} alt="card" className={`h-[100%] w-[100%]`} />
      </div>
    </section>
  );
};

export default CardDeal;
