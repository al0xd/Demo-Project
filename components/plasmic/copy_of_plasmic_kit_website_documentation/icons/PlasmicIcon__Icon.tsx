// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentcolor"}
      viewBox={"0 0 48 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M2.667 24C1.194 24-.016 22.802.146 21.338 1.471 9.336 11.646 0 24 0c12.355 0 22.53 9.336 23.854 21.338C48.016 22.8 46.806 24 45.334 24h-2.667c0-10.31-8.358-18.667-18.667-18.667C13.69 5.333 5.333 13.691 5.333 24H2.667z"
        }
        clipRule={"evenodd"}
        fillRule={"evenodd"}
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M8 24c0-8.837 7.163-16 16-16s16 7.163 16 16h-5.333c0-5.891-4.776-10.667-10.667-10.667S13.333 18.11 13.333 24H8z"
        }
        clipRule={"evenodd"}
        fillRule={"evenodd"}
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M16 24a8 8 0 1116 0h-4c-.736 0-1.306-.633-1.66-1.279a2.666 2.666 0 00-4.68 0C21.305 23.367 20.735 24 20 24h-4z"
        }
        clipRule={"evenodd"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
