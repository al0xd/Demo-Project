// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vRFGcjoeyA4UNF36wYbYzx
// Component: _Bdn71ggiIcQEJ
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
import TwitterIcon from "../../TwitterIcon"; // plasmic-import: BR1u2LXXxtJOP/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_plasmic_kit_website_documentation.module.css"; // plasmic-import: vRFGcjoeyA4UNF36wYbYzx/projectcss
import * as sty from "./PlasmicMainFooter.module.css"; // plasmic-import: _Bdn71ggiIcQEJ/css

export type PlasmicMainFooter__VariantMembers = {};

export type PlasmicMainFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicMainFooter__VariantsArgs;
export const PlasmicMainFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicMainFooter__ArgsType = {};
type ArgPropType = keyof PlasmicMainFooter__ArgsType;
export const PlasmicMainFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicMainFooter__OverridesType = {
  section22?: p.Flex<"div">;
  container32?: p.Flex<"div">;
  twitterIcon?: p.Flex<typeof TwitterIcon>;
  img?: p.Flex<"img">;
};

export interface DefaultMainFooterProps {
  className?: string;
}

function PlasmicMainFooter__RenderFunc(props: {
  variants: PlasmicMainFooter__VariantsArgs;
  args: PlasmicMainFooter__ArgsType;
  overrides: PlasmicMainFooter__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"section22"}
      data-plasmic-override={overrides.section22}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        projectcss.root_reset,
        sty.section22
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"container32"}
        data-plasmic-override={overrides.container32}
        hasGap={true}
        className={classNames(defaultcss.all, sty.container32)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__sMnv1)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box___70O)}
          >
            <p.PlasmicLink
              className={classNames(defaultcss.all, sty.link__d6Uz1)}
              component={Link}
              href={"/careers" as const}
              platform={"nextjs"}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__aUh9I
                )}
              >
                {"Careers"}
              </div>
            </p.PlasmicLink>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__cyjTi
              )}
            >
              {"•"}
            </div>

            <p.PlasmicLink
              className={classNames(defaultcss.all, sty.link__a5M9)}
              component={Link}
              href={"/learn" as const}
              platform={"nextjs"}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__gNPg
                )}
              >
                {"Learn"}
              </div>
            </p.PlasmicLink>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__syNgb
              )}
            >
              {"•"}
            </div>

            <p.PlasmicLink
              className={classNames(defaultcss.all, sty.link__czXa)}
              component={Link}
              href={"/learn/updates" as const}
              platform={"nextjs"}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box___18QdN
                )}
              >
                {"Changelog"}
              </div>
            </p.PlasmicLink>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__uCoOl
              )}
            >
              {"•"}
            </div>

            <p.PlasmicLink
              className={classNames(defaultcss.all, sty.link__bjpiH)}
              component={Link}
              href={"https://medium.com/plasmic-app" as const}
              platform={"nextjs"}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__gukcc
                )}
              >
                {"Blog"}
              </div>
            </p.PlasmicLink>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__vXb4U
              )}
            >
              {"•"}
            </div>

            <p.PlasmicLink
              className={classNames(defaultcss.all, sty.link__o9IV)}
              component={Link}
              href={"/privacy" as const}
              platform={"nextjs"}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__ytJhP
                )}
              >
                {"Privacy"}
              </div>
            </p.PlasmicLink>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__fp6Zl
              )}
            >
              {"•"}
            </div>

            <p.PlasmicLink
              className={classNames(defaultcss.all, sty.link__cEv4M)}
              component={Link}
              href={"/tos" as const}
              platform={"nextjs"}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box___2F4Nu
                )}
              >
                {"Terms"}
              </div>
            </p.PlasmicLink>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__kk9J0)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__aCnFc
              )}
            >
              {"© Plasmic, Inc. 2020"}
            </div>

            <p.PlasmicLink
              className={classNames(defaultcss.all, sty.link__o2FHc)}
              component={Link}
              href={"https://twitter.com/plasmicapp" as const}
              platform={"nextjs"}
            >
              <TwitterIcon
                data-plasmic-name={"twitterIcon"}
                data-plasmic-override={overrides.twitterIcon}
                className={classNames("__wab_instance", sty.twitterIcon)}
              />
            </p.PlasmicLink>
          </p.Stack>

          <p.PlasmicLink
            className={classNames(defaultcss.all, sty.link__pOprh)}
            component={Link}
            href={"/" as const}
            platform={"nextjs"}
          >
            <img
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(defaultcss.img, sty.img)}
              role={"img"}
              src={
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAzNiAxOCIgaGVpZ2h0PSIxOCIgd2lkdGg9IjM2Ij4KPHBhdGggZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIgZD0iTTIuMDAwMDEgMThDMC44OTU0NDUgMTggLTAuMDExNjUwNyAxNy4xMDExIDAuMTA5NTE4IDE2LjAwMzJDMS4xMDI5NSA3LjAwMTc2IDguNzMzODEgMCAxOCAwQzI3LjI2NjIgMCAzNC44OTcxIDcuMDAxNzYgMzUuODkwNSAxNi4wMDMyQzM2LjAxMTcgMTcuMTAxMSAzNS4xMDQ2IDE4IDM0IDE4SDMyQzMyIDEwLjI2OCAyNS43MzIgNCAxOCA0QzEwLjI2OCA0IDQuMDAwMDEgMTAuMjY4IDQuMDAwMDEgMThIMi4wMDAwMVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbC1ydWxlPSJldmVub2RkIi8+CjxwYXRoIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcikiIGQ9Ik02IDE4QzYgMTEuMzcyNiAxMS4zNzI2IDYgMTggNkMyNC42Mjc0IDYgMzAgMTEuMzcyNiAzMCAxOEgyNkMyNiAxMy41ODE3IDIyLjQxODMgMTAgMTggMTBDMTMuNTgxNyAxMCAxMCAxMy41ODE3IDEwIDE4SDZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8cGF0aCBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXIpIiBkPSJNMTIgMThDMTIgMTQuNjg2MyAxNC42ODYzIDEyIDE4IDEyQzIxLjMxMzcgMTIgMjQgMTQuNjg2MyAyNCAxOEgyMUMyMC40NDc3IDE4IDIwLjAyMDcgMTcuNTI1NSAxOS43NTU1IDE3LjA0MUMxOS40MTU5IDE2LjQyMDcgMTguNzU3MSAxNiAxOCAxNkMxNy4yNDI5IDE2IDE2LjU4NDEgMTYuNDIwNyAxNi4yNDQ1IDE3LjA0MUMxNS45NzkzIDE3LjUyNTUgMTUuNTUyMyAxOCAxNSAxOEgxMloiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbC1ydWxlPSJldmVub2RkIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHkyPSIxOCIgeDI9IjE4IiB5MT0iMTgiIHgxPSIxLjk3NzQ1IiBpZD0icGFpbnQwX2xpbmVhciI+CjxzdG9wIHN0b3AtY29sb3I9IiMxODc3RjIiLz4KPHN0b3Agc3RvcC1jb2xvcj0iIzA0QTRGNCIgb2Zmc2V0PSIxIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeTI9IjE4IiB4Mj0iMTgiIHkxPSIxOCIgeDE9IjcuOTY4MTMiIGlkPSJwYWludDFfbGluZWFyIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzJBQkJBNyIvPgo8c3RvcCBzdG9wLWNvbG9yPSIjNDVCRDYyIiBvZmZzZXQ9IjEiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5Mj0iMTgiIHgyPSIxOCIgeTE9IjE4IiB4MT0iMTMuOTUyNyIgaWQ9InBhaW50Ml9saW5lYXIiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRjAyODQ5Ii8+CjxzdG9wIHN0b3AtY29sb3I9IiNGNTUzM0QiIG9mZnNldD0iMSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=" as const
              }
            />
          </p.PlasmicLink>
        </p.Stack>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  section22: ["section22", "container32", "twitterIcon", "img"],
  container32: ["container32", "twitterIcon", "img"],
  twitterIcon: ["twitterIcon"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  section22: "div";
  container32: "div";
  twitterIcon: typeof TwitterIcon;
  img: "img";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMainFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicMainFooter__VariantsArgs;
  args?: PlasmicMainFooter__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicMainFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicMainFooter__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicMainFooter__ArgProps,
      internalVariantPropNames: PlasmicMainFooter__VariantProps
    });

    return PlasmicMainFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "section22") {
    func.displayName = "PlasmicMainFooter";
  } else {
    func.displayName = `PlasmicMainFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicMainFooter = Object.assign(
  // Top-level PlasmicMainFooter renders the root element
  makeNodeComponent("section22"),
  {
    // Helper components rendering sub-elements
    container32: makeNodeComponent("container32"),
    twitterIcon: makeNodeComponent("twitterIcon"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicMainFooter
    internalVariantProps: PlasmicMainFooter__VariantProps,
    internalArgProps: PlasmicMainFooter__ArgProps
  }
);

export default PlasmicMainFooter;
/* prettier-ignore-end */
