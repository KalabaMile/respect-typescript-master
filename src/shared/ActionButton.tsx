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
      className="rounded-lg bg-primary-300 text-gray-20 px-10 py-2 hover:bg-secondary-400 hover:text-gray-20"
      onClick={() => setSelectedPage(SelectedPage.Kontakt)}
      href={`#${SelectedPage.Kontakt}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
