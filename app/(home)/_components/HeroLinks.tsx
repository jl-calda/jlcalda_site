"use client";

import Button from "@/app/_components/Button";
import React from "react";
import { HeroLinkType } from "../_data";

interface HeroLinksProps {
  links: HeroLinkType[];
}

const HeroLinks: React.FC<HeroLinksProps> = ({ links }) => {
  return (
    <div className="self-end flex flex-row flex-wrap gap-x-2 gap-y-2">
      {links.map((link) => (
        <Button
          edgy
          secondary={link.isSecondary}
          key={crypto.randomUUID()}
          label={link.label}
          onClick={() => window.open(link.url, "_blank")}
        />
      ))}
    </div>
  );
};

export default HeroLinks;
