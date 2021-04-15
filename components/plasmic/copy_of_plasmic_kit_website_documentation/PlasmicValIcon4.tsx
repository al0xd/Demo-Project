// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vRFGcjoeyA4UNF36wYbYzx
// Component: RmsD3K794v-Oq
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_plasmic_kit_website_documentation.module.css"; // plasmic-import: vRFGcjoeyA4UNF36wYbYzx/projectcss
import * as sty from "./PlasmicValIcon4.module.css"; // plasmic-import: RmsD3K794v-Oq/css

import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: t7rBQwk7vW9lnU/icon

export type PlasmicValIcon4__VariantMembers = {};

export type PlasmicValIcon4__VariantsArgs = {};
type VariantPropType = keyof PlasmicValIcon4__VariantsArgs;
export const PlasmicValIcon4__VariantProps = new Array<VariantPropType>();

export type PlasmicValIcon4__ArgsType = {};
type ArgPropType = keyof PlasmicValIcon4__ArgsType;
export const PlasmicValIcon4__ArgProps = new Array<ArgPropType>();

export type PlasmicValIcon4__OverridesType = {
  root?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultValIcon4Props {
  className?: string;
}

function PlasmicValIcon4__RenderFunc(props: {
  variants: PlasmicValIcon4__VariantsArgs;
  args: PlasmicValIcon4__ArgsType;
  overrides: PlasmicValIcon4__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <Icon5Icon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(defaultcss.all, sty.svg)}
        role={"img"}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicValIcon4__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicValIcon4__VariantsArgs;
  args?: PlasmicValIcon4__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicValIcon4__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicValIcon4__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicValIcon4__ArgProps,
      internalVariantPropNames: PlasmicValIcon4__VariantProps
    });

    return PlasmicValIcon4__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValIcon4";
  } else {
    func.displayName = `PlasmicValIcon4.${nodeName}`;
  }
  return func;
}

export const PlasmicValIcon4 = Object.assign(
  // Top-level PlasmicValIcon4 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicValIcon4
    internalVariantProps: PlasmicValIcon4__VariantProps,
    internalArgProps: PlasmicValIcon4__ArgProps
  }
);

export default PlasmicValIcon4;
/* prettier-ignore-end */
