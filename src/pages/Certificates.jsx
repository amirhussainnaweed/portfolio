import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import Button from "../Components/Button";

// Add your certificates here, one object per certificate.
// Put the images in public/images/certificates/ and use paths like the ones below.
// category: any label you like. The filter buttons are created from these automatically.
// date:     "YYYY-MM"
// verifyUrl: optional link where people can check the certificate. Use "" if you have none.
const certificates = [
  {
    id: 1,
    src: "/images/certificates/front_end.jpg",
    category: "Web Development",
    title: "Replace with your certificate title",
    issuer: "Issuing organization",
    date: "2026-06",
    verifyUrl: "",
  },
  {
    id: 2,
    src: "/images/certificates/full_stack.jpg",
    category: "Graphic Design",
    title: "Another certificate title",
    issuer: "Issuing organization",
    date: "2026-03",
    verifyUrl: "",
  },
  {
    id: 3,
    src: "/images/certificates/cert-3.png",
    category: "Mentoring",
    title: "A certificate from a different field",
    issuer: "Issuing organization",
    date: "2025-11",
    verifyUrl: "",
  },
];

function formatDate(value) {
  if (!value) return "";
  const [year, month] = value.split("-");
  const date = new Date(Number(year), (Number(month) || 1) - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function details(cert) {
  return [cert.issuer, formatDate(cert.date)].filter(Boolean).join(", ");
}

// Shows the certificate image, or a plain box if the image file can't be found.
const CertImage = ({ cert, className }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-[#F8F8F8] text-black font-Poppins`}
      >
        Image coming soon
      </div>
    );
  }

  return (
    <img
      src={cert.src}
      alt={`${cert.title} certificate`}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
};

const Certificates = ({ theme, toggleTheme }) => {
  const [selected, setSelected] = useState("All");
  const [open, setOpen] = useState(null);
  const reduceMotion = useReducedMotion();

  const categories = [
    "All",
    ...new Set(certificates.map((item) => item.category)),
  ];

  const filtered = (
    selected === "All"
      ? certificates
      : certificates.filter((item) => item.category === selected)
  )
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  // Open the page at the top, even when coming from further down the home page.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Close the viewer with Escape and stop the page behind it from scrolling.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="sectionDark min-h-screen">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <div className="responsive mt-[40px] flex flex-col items-center gap-9">
        <h1 className="headline sectionDark">My Certificates</h1>
        <p className="sectionDark font-Poppins font-normal leading-[auto] tracking-[3%] text-center md:text-[17px] lg:text-[18px] xl:text-[19px] 2xl:text-[21px]">
          Courses and programs I have completed. Select a certificate to see it
          in full.
        </p>

        <div className="flex gap-2 flex-wrap justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              className={`buttonStyle ${
                selected === category ? "bg-blue-500 text-white" : ""
              }`}
              label={category}
              onClick={() => setSelected(category)}
            />
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="sectionDark font-Poppins">No certificates yet.</p>
        ) : (
          <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                initial={reduceMotion ? false : { opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(index, 5) * 0.1 }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(item)}
                  className="flex w-full cursor-pointer flex-col gap-5 text-left"
                >
                  <CertImage
                    cert={item}
                    className="aspect-[4/3] w-full rounded-[12px] border-[0.4px] border-[#545454] object-cover"
                  />
                  <span className="font-Poppins font-normal text-[19px] text-blue-500 leading-[auto] tracking-[3%]">
                    {item.category}
                  </span>
                  <span className="sectionDark font-Poppins font-bold text-[24px] leading-[auto] tracking-[3%]">
                    {item.title}
                  </span>
                  <span className="sectionDark font-Poppins font-normal text-[17px] opacity-70">
                    {details(item)}
                  </span>
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <Footer />

      <AnimatePresence>
        {open && (
          <motion.div
            key="viewer"
            role="dialog"
            aria-modal="true"
            aria-label={open.title}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              className="flex max-h-full max-w-full flex-col items-center gap-5 overflow-auto"
              initial={
                reduceMotion ? false : { opacity: 0, scale: 0.95, y: 20 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.95, y: 20 }
              }
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CertImage
                cert={open}
                className="max-h-[70vh] min-h-[240px] min-w-[280px] max-w-full rounded-[12px] object-contain"
              />
              <div className="flex flex-col items-center gap-2 text-center font-Poppins text-white">
                <p className="font-bold text-[22px]">{open.title}</p>
                <p className="opacity-80">{details(open)}</p>
                {open.verifyUrl && (
                  <a
                    href={open.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    Verify certificate
                  </a>
                )}
              </div>
              <Button
                className="buttonStyle bg-blue-500 text-white"
                label="Close"
                onClick={() => setOpen(null)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;
