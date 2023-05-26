import React from "react";
interface SectionProps {
  children: React.ReactNode;
}
const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className="mt-24 sm:mt-16 p-4 sm:w-[80%] md:w-[85%] lg:w-[88%] h-full">
      {children}
    </section>
  );
};

export default Section;
