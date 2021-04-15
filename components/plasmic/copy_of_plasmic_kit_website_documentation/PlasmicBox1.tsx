// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vRFGcjoeyA4UNF36wYbYzx
// Component: raDrVBBK3Owew
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
import * as sty from "./PlasmicBox1.module.css"; // plasmic-import: raDrVBBK3Owew/css

export type PlasmicBox1__VariantMembers = {};

export type PlasmicBox1__VariantsArgs = {};
type VariantPropType = keyof PlasmicBox1__VariantsArgs;
export const PlasmicBox1__VariantProps = new Array<VariantPropType>();

export type PlasmicBox1__ArgsType = {};
type ArgPropType = keyof PlasmicBox1__ArgsType;
export const PlasmicBox1__ArgProps = new Array<ArgPropType>();

export type PlasmicBox1__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultBox1Props {
  className?: string;
}

function PlasmicBox1__RenderFunc(props: {
  variants: PlasmicBox1__VariantsArgs;
  args: PlasmicBox1__ArgsType;
  overrides: PlasmicBox1__OverridesType;
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
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBox1__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicBox1__VariantsArgs;
  args?: PlasmicBox1__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicBox1__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicBox1__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicBox1__ArgProps,
      internalVariantPropNames: PlasmicBox1__VariantProps
    });

    return PlasmicBox1__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBox1";
  } else {
    func.displayName = `PlasmicBox1.${nodeName}`;
  }
  return func;
}

export const PlasmicBox1 = Object.assign(
  // Top-level PlasmicBox1 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicBox1
    internalVariantProps: PlasmicBox1__VariantProps,
    internalArgProps: PlasmicBox1__ArgProps
  }
);

export default PlasmicBox1;
/* prettier-ignore-end */
