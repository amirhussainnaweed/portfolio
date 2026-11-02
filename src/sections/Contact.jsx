import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Components/Button";

export default function Contact() {
  const [email, setEmail] = useState("");

  const sendEmail = () => {
    const templateParams = {
      user_email: email,
    };

    emailjs
      .send(
        "service_vw3vboq",
        "template_8pyhebj",
        templateParams,
        "EPgq3vY3AK5VQgPBj",
      )
      .then(() => {
        alert("Email sent!");
        setEmail("");
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <div className="responsive flex flex-col gap-9 items-center text-center mt-[40px]">
      <h2 className="headline sectionDark text-3xl md:text-3xl lg:text-5xl">
        Ready to Get Started?
      </h2>
      <p className="sectionDark font-Poppins font-normal leading-[auto] tracking-[3%] text-[14px] lg:text-[16px] xl:text-[18px] lg:w-[932px]">
        From building seamless web experiences to crafting strong visuals and
        supporting academic growth, I focus on delivering real value. Let’s work
        together and create something impactful.
      </p>
      <div className="flex flex-col lg:flex-row gap-6 w-full lg:justify-center mt-[60px]">
        <input
          className="w-full lg:w-[627px] border-1 bg-[#F8F8F8] border-[#AFAFAF] rounded-[14px] px-5 py-3 w-[405px] h-[65px] font-Poppins font-normal leading-[auto] tracking-[3%] md:text-[17px] lg:text-[18px] xl:text-[19px] 2xl:text-[21px]"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button
          className=" buttonStyle h-[65px] lg:w-[222px] rounded-[14px] px-7 bg-blue-500 text-white text-[18px] md:text-[19px] lg:text-[21px]"
          label="Contact Me"
          onClick={() => sendEmail()}
        />
      </div>
    </div>
  );
}
