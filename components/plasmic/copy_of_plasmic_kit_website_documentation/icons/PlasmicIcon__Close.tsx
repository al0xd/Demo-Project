// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CloseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CloseIcon(props: CloseIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentcolor"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M7.404 5.99L5.99 7.404 10.586 12 5.99 16.596l1.414 1.414L12 13.414l4.596 4.596 1.414-1.414L13.414 12l4.596-4.596-1.414-1.414L12 10.586 7.404 5.99z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CloseIcon;
/* prettier-ignore-end */
