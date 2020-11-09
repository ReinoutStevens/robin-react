import React from "react";

export interface ThingWithPropsProps {
  a: string;
  b: string;
  c: number;
}

const ThingWithProps: React.FC<ThingWithPropsProps> = ({ a, b, c }) => {
  return (
    <>
      <span>{a}</span>
      <span>{b}</span>
      <span>{c}</span>
    </>
  );
};

export default ThingWithProps;
