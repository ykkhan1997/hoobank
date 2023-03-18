import React from "react";
import Image from "next/image";
import { features } from "@/constants";
import Button from "./button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] feature-card ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    }`}
  >
    <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-discount_gradient">
      <Image src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex flex-1 flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.8px] mb-1">
        {title}
      </h4>
      <p className="text-dimWhite font-poppins font-medium text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section className="flex md:flex-row flex-col sm:py-16 py-6">
      <div className="flex-1 flex justify-center items-start flex-col">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[73.8px] leading-[52.8px] w-full text-white">
          You do the business, <br className="sm:block hidden" />
          we'll handle the money.
        </h2>
        <p className="font-poppins font-normal text-[18px] leading-[30.8px] w-full max-w-[470px] mt-5 text-dimWhite">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles={`mt-10`} />
      </div>
      <div
        className={`flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col`}
      >
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
