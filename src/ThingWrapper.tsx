import React from 'react';
import ThingWithProps from "./ThingWithProps";

export interface ThingWrapperProps_ {
    d: string;
}

type ThingWrapperProps = ThingWrapperProps_ & React.ComponentProps<typeof ThingWithProps>;

const ThingWrapper: React.FC<ThingWrapperProps> = ({ a, b, c, d }) => {
    return <>{a}{b}{c}{d}</>;
}

export default ThingWrapper;