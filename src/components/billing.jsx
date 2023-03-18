import { apple, bill, google } from "@/assets";
import Image from "next/image";
import React from "react";

const Billing = () => {
  return (
    <section
      id="features"
      className={`flex md:flex-row flex-col-reverse sm:py-16 py-6`}
    >
      <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
        <Image
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>
      <div className="flex-1 flex justify-center items-start flex-col">
        <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[72.8px] leading-[52.8px] w-full text-white">
          Easily control your <br className="sm:flex hidden" /> billing &
          invoicing
        </h1>
        <p className="font-poppins font-medium text-[18px] leading-[30.8px] text-dimWhite max-w-[470px] mt-5">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-0">
          <Image
            src={apple}
            alt="apple"
            className=" w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
          />
          <Image
            src={google}
            alt="google"
            className=" w-[128.86px] h-[42.05px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
