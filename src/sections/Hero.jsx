import React from "react";
import Button from "../Components/Button";

const Hero = () => {
  return (
    <div className="responsive flex flex-col lg:flex-row lg:justify-between sectionDark">
      <div className="lg:w-[862px] flex flex-col gap-5">
        <div className="xl:h-[60px]"></div>
        <p className="font-Poppins font-semibold md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
          Hi I am
        </p>
        <h2 className="text-blue-500 font-Poppins text-[23px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[32px]">
          Amir Hussain
        </h2>
        <div>
          <h1 className="font-Poppins font-bold text-[46px] sm:text-[70px] md:text-[75px] lg:text-[85px] xl:text-[90px] 2xl:text-[100px] leading-[120%] tracking-[3%]">
            Web
          </h1>
          <div className="flex">
            <div className="w-[100px] px-2"></div>
            <h1 className="font-Poppins font-bold text-[46px] sm:text-[70px] md:text-[75px] lg:text-[85px] xl:text-[90px] 2xl:text-[100px] leading-[120%] tracking-[3%]">
              Developer
            </h1>
          </div>
        </div>
        <p className="font-Poppins font-normal leading-[auto] tracking-[3%] mt-[20px] md:text-[16px] lg:text-[18px] xl:text-[21px]">
          I am Amir Hussain Naweed An Undergraduate student at Kabul University.
          Eager to collaborate with you in my professionalism journey!
        </p>
        <Button
          className="text-white md:text-[16px] lg:text-[18px] xl:text-[21px] bg-blue-500 rounded-[5px] px-4 py-2 font-Poppins tracking-[3%] leading-[auto] mt-[20px] w-[148px] cursor-pointer"
          label="Hire Me"
        />
      </div>
      <div className="mt-[100px] lg:mt-[0] flex flex-col items-center">
        <img
          className="md:max-w-[393px] xl:max-w-[538px] xl:max-h-[687px]"
          src="images/Nme.png"
          alt=""
        />
        <div className="flex gap-4 mt-6">
          <a href="https://github.com/amirhussainnaweed" target="_blank">
            <img
              className="cursor-pointer imgicons"
              src="images/github.png"
              alt=""
            />
          </a>
          <a
            href="https://www.linkedin.com/in/amir-hussain-naweed-80a798308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <img
              className="cursor-pointer imgicons"
              src="images/linkedin.png"
              alt=""
            />
          </a>
          <a
            href="https://www.facebook.com/amerhussain.naweedaadillzadah"
            target="_blank"
          >
            <img
              className="cursor-pointer imgicons"
              src="images/facebook.png"
              alt=""
            />
          </a>
          <a
            href="https://www.instagram.com/amirhussainnaweed?igsh=YzljYTk1ODg3Zg=="
            target="_blank"
          >
            <img
              className="cursor-pointer imgicons"
              src="images/instagram.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
