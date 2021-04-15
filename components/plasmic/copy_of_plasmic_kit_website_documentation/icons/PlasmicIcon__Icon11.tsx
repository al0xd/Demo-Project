// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon11Icon(props: Icon11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentcolor"}
      viewBox={"0 0 768 768"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#R5N-pBzI4_a)"}>
        <path
          fill={"currentColor"}
          d={
            "M640 384c0 141.385-114.615 256-256 256S128 525.385 128 384s114.615-256 256-256 256 114.615 256 256zm-36 0c0 121.503-98.497 220-220 220s-220-98.497-220-220 98.497-220 220-220 220 98.497 220 220zM311.25 508.641L528 383.5 311.25 258.359v250.282z"
          }
          clipRule={"evenodd"}
          fillRule={"evenodd"}
        ></path>
      </g>

      <defs>
        <filter
          colorInterpolationFilters={"sRGB"}
          filterUnits={"userSpaceOnUse"}
          height={"768"}
          width={"768"}
          y={"0"}
          x={"0"}
          id={"R5N-pBzI4_a"}
        >
          <feFlood result={"BackgroundImageFix"} floodOpacity={"0"}></feFlood>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            in={"SourceAlpha"}
          ></feColorMatrix>

          <feOffset></feOffset>

          <feGaussianBlur stdDeviation={"64"}></feGaussianBlur>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0"}
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

export default Icon11Icon;
/* prettier-ignore-end */
