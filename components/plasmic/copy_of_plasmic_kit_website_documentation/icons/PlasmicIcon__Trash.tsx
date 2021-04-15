// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TrashIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TrashIcon(props: TrashIconProps) {
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
          "M9 4a1 1 0 011-1h4a1 1 0 011 1h3a2 2 0 012 2H4a2 2 0 012-2h3zM6 8h12l-.929 12.077a1 1 0 01-.997.923H7.926a1 1 0 01-.997-.923L6 8zm5 3H9v7h2v-7zm4 0h-2v7h2v-7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TrashIcon;
/* prettier-ignore-end */
