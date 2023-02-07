import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-lg bg-hero2 bg-cover text-white px-2 py-2 hover:opacity-50 w-[160px]"
      onClick={() => setSelectedPage(SelectedPage.Kontakt)}
      href={`#${SelectedPage.Kontakt}`}
    >
        {children}
    </AnchorLink>
  );
};

export default ActionButton;
