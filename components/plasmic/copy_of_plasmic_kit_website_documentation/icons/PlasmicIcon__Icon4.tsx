// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
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
          "M12 20a6 6 0 01-6-6c0-2.802 2.944-6.953 4.707-9.188C11.461 3.856 12 3.25 12 3.25s.539.606 1.293 1.562C15.056 7.047 18 11.198 18 14a6 6 0 01-6 6zm-4-6h8c0-.56-.229-1.414-.747-2.516-.5-1.062-1.186-2.183-1.902-3.228A40.612 40.612 0 0012 6.406a40.612 40.612 0 00-1.35 1.85c-.717 1.045-1.403 2.166-1.903 3.228C8.23 12.586 8 13.44 8 14z"
        }
        clipRule={"evenodd"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
