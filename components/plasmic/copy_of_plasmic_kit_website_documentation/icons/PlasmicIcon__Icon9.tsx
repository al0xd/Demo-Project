// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon9Icon(props: Icon9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentcolor"}
      viewBox={"0 0 640 640"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#1AzX9bwThaa)"}>
        <path
          fill={"currentColor"}
          d={
            "M576 320c0 141.385-114.615 256-256 256S64 461.385 64 320 178.615 64 320 64s256 114.615 256 256zm-36 0c0 121.503-98.497 220-220 220s-220-98.497-220-220 98.497-220 220-220 220 98.497 220 220zM247.25 444.641L464 319.5 247.25 194.359v250.282z"
          }
          clipRule={"evenodd"}
          fillRule={"evenodd"}
        ></path>
      </g>

      <defs>
        <filter
          colorInterpolationFilters={"sRGB"}
          filterUnits={"userSpaceOnUse"}
          height={"640"}
          width={"640"}
          y={"0"}
          x={"0"}
          id={"1AzX9bwThaa"}
        >
          <feFlood result={"BackgroundImageFix"} floodOpacity={"0"}></feFlood>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            in={"SourceAlpha"}
          ></feColorMatrix>

          <feOffset></feOffset>

          <feGaussianBlur stdDeviation={"32"}></feGaussianBlur>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"}
          ></feColorMatrix>

          <feBlend
            result={"effect1_dropShadow"}
            in2={"BackgroundImageFix"}
          ></feBlend>

          <feBlend
            result={"shape"}
            in2={"effect1_dropShadow"}
            in={"SourceGraphic"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Icon9Icon;
/* prettier-ignore-end */
