import React from "react";
interface SectionProps {
  children: React.ReactNode;
}
const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className="p-4 sm:w-[80%] md:w-[85%] lg:w-[88%]">
      {children}
    </section>
  );
};

export default Section;
