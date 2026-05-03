import React, { useState } from "react";

const cards = [
  {
    id: 1,
    name: "Joe",
    role: "Ceo",
    src: "images/testi1.png",
    text: "You built a fast, clean, and highly functional website that exceeded our expectations. Communication was smooth, and everything was delivered on time.",
  },
  {
    id: 2,
    name: "Tom",
    role: "Manager",
    src: "images/testi2.png",
    text: "You made difficult topics easy to understand and kept me motivated throughout. My confidence and results improved significantly.",
  },
  {
    id: 3,
    name: "Mike",
    role: "Developer",
    src: "images/testi1.png",
    text: "You turned my ideas into a clean, professional design that fits my brand perfectly. The process was easy, and the results were impressive.",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="overflow-hidden responsive flex flex-col items-center gap-9 mt-[40px]">
      <h2 className="sectionDark headline text-center">Testimonials</h2>
      <p className="sectionDark text-center font-Poppins font-normal leading-[auto] tracking-[3%] md:text-[17px] lg:text-[18px] xl:text-[19px] 2xl:text-[21px] lg:w-[932px]">
        What my clients say about me:
      </p>
      <div className="w-full max-w-[900px]">
        <div
          className="flex transition-transform duration-500 mt-[40px]"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {cards.map((item, index) => (
            <div
              key={item.id}
              className={`bg-[#F8F8F8] rounded-[14px] flex flex-col lg:flex-row items-center gap-7 p-9 min-w-full flex justify-center transition-all duration-500 ${
                current === index
                  ? "scale-100 opacity-100"
                  : "scale-90 opacity-40"
              }`}
            >
              <img
                src={item.src}
                alt=""
                className="w-[235px] h-[235px] rounded-full object-cover"
              />
              <div className="flex flex-col lg:justify-start gap-3">
                <p className="font-Poppins font-normal text-[21px] leading-[auto] tracking-[2%] text-[#424242] relative">
                  <span className="text-blue-500 text-4xl absolute -left-4 -top-2">
                    “
                  </span>
                  {item.text}
                  <span className="text-blue-500 text-4xl">”</span>
                </p>
                <h2 className="font-Poppins font-normal text-[24px] leading-[auto] tracking-[2%]">
                  {item.name}
                </h2>
                <p>{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2 mt-6">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-9 rounded-full transition-all duration-300 cursor-pointer ${
              current === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
