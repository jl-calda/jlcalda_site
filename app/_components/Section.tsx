import React from "react";
interface SectionProps {
  children: React.ReactNode;
}
const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className="mt-[101px] sm:mt-16 sm:first-letter sm:mr-[120px] h-full flex flex-col">
      {children}
    </section>
  );
};

export default Section;
