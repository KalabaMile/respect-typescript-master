import React from "react";

type Props = {
  children: React.ReactNode;
  classname: string;
}

const HText = ({ children, classname }: Props) => {
  return (
    <h1 className={classname}>{children}</h1>
  );
};

export default HText;
