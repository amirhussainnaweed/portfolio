import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    src: "images/vector1.png",
    className: "w-[70px]",
    label: "Web Development",
    desc: "Responsive and flexible web applications",
  },
  {
    id: 2,
    src: "images/vector4.png",
    className: "w-[82px]",
    label: "Mentoring",
    desc: "Personalized guidance and support in your academic journey",
  },

  {
    id: 3,
    src: "images/vector3.png",
    className: "w-[47px]",
    label: "Graphic Design",
    desc: "Creative and visually appealing graphic designs",
  },
  {
    id: 4,
    src: "images/vector2.png",
    className: "w-[72px]",
    label: "Drawing",
    desc: "Hand-drawn illustrations and sketches",
  },
];

const Services = () => {
  return (
    <div className="responsive flex flex-col items-center mt-[40px] gap-9">
      <h2 className="headline sectionDark">Services</h2>
      <p className="sectionDark font-Poppins font-normal leading-[auto] tracking-[3%] md:text-[17px] lg:text-[18px] xl:text-[19px] 2xl:text-[21px]">
        Services I Provide to my clients:
      </p>
      <div className="flex flex-wrap mt-[10px] gap-8 justify-center">
        {services.map((service, index) => {
          return (
            <motion.div
              key={service.id}
              className="w-[330px] h-[346px] bg-[#F8F8F8] rounded-[14px] flex flex-col justify-center p-3 gap-4"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <img
                src={service.src}
                className={service.className}
                alt="vector"
              />
              <h2 className="font-Poppins font-semibold text-[32px] leading-[auto] tracking-[3%]">
                {service.label}
              </h2>
              <p className="font-Poppins font-normal text-[19px] leading-[auto] tracking-[3%]">
                {service.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
