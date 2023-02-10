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
      className="bg-primary-500 text-white rounded-l-lg sm:rounded-lg border-r border-gray-200 sm:border-none px-2 xs:px-4 py-2 hover:opacity-50"
      onClick={() => setSelectedPage(SelectedPage.Kontakt)}
      href={`#${SelectedPage.Kontakt}`}
    >
        {children}
    </AnchorLink>
  );
};

export default ActionButton;
