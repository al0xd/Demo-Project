// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
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
        fill={"currentColor"}
        d={
          "M14.52 3.302l-6.888 16.63 1.848.766 6.888-16.63-1.848-.766zM6.793 7.293l1.414 1.414L4.914 12l3.293 3.293-1.414 1.414L2.086 12l4.707-4.707zm10.414 0l-1.414 1.414L19.086 12l-3.293 3.293 1.414 1.414L21.914 12l-4.707-4.707z"
        }
      ></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
