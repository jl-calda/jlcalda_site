import React from "react";
interface SectionProps {
  children: React.ReactNode;
}
const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className="mt-[101px] sm:mt-16 sm:first-letter sm:mr-[120px] min-h-full flex-1 flex-col px-2 py-4 sm:pt-6 sm:px-6 sm:pb-6">
      {children}
    </section>
  );
};

export default Section;
