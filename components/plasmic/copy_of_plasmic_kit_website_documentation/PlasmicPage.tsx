// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vRFGcjoeyA4UNF36wYbYzx
// Component: fBIVB4W4quhw8h
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
import Nav from "../../Nav"; // plasmic-import: pErlshVejkHeaX/component
import AboutUs from "../../AboutUs"; // plasmic-import: yeYgVamDDvBQSU/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_copy_of_plasmic_kit_website_documentation.module.css"; // plasmic-import: vRFGcjoeyA4UNF36wYbYzx/projectcss
import * as sty from "./PlasmicPage.module.css"; // plasmic-import: fBIVB4W4quhw8h/css

export type PlasmicPage__VariantMembers = {};

export type PlasmicPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicPage__VariantsArgs;
export const PlasmicPage__VariantProps = new Array<VariantPropType>();

export type PlasmicPage__ArgsType = {};
type ArgPropType = keyof PlasmicPage__ArgsType;
export const PlasmicPage__ArgProps = new Array<ArgPropType>();

export type PlasmicPage__OverridesType = {
  root?: p.Flex<"div">;
  topSection12?: p.Flex<"section">;
  nav?: p.Flex<typeof Nav>;
  copy2?: p.Flex<"div">;
  topSection2?: p.Flex<"section">;
  copy?: p.Flex<"div">;
  section?: p.Flex<"section">;
  copyBox?: p.Flex<"div">;
  topSection22?: p.Flex<"section">;
  copy3?: p.Flex<"div">;
  section3?: p.Flex<"div">;
  copyBox2?: p.Flex<"div">;
  topSection222?: p.Flex<"section">;
  copy32?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  topSection2222?: p.Flex<"section">;
  copy322?: p.Flex<"div">;
  section4?: p.Flex<"section">;
  aboutUs?: p.Flex<typeof AboutUs>;
};

export interface DefaultPageProps {
  className?: string;
}

function PlasmicPage__RenderFunc(props: {
  variants: PlasmicPage__VariantsArgs;
  args: PlasmicPage__ArgsType;
  overrides: PlasmicPage__OverridesType;
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
      <section
        data-plasmic-name={"topSection12"}
        data-plasmic-override={overrides.topSection12}
        className={classNames(defaultcss.all, sty.topSection12)}
      >
        <img
          alt={""}
          className={classNames(defaultcss.img, sty.img__cEnag)}
          role={"img"}
          src={
            "/plasmic/copy_of_plasmic_kit_website_documentation/images/section1Svg.svg"
          }
        />

        <Nav
          data-plasmic-name={"nav"}
          data-plasmic-override={overrides.nav}
          className={classNames("__wab_instance", sty.nav)}
        />

        <div
          data-plasmic-name={"copy2"}
          data-plasmic-override={overrides.copy2}
          className={classNames(defaultcss.all, sty.copy2)}
        >
          <h1
            className={classNames(
              defaultcss.h1,
              defaultcss.__wab_text,
              sty.h1__zLaHn
            )}
          >
            {"The visual UI builder for React"}
          </h1>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__kjf7D
            )}
          >
            {
              "Build maintainable, production-ready presentational components at the speed of design."
            }
          </div>
        </div>

        <div className={classNames(defaultcss.all, sty.box__qlUr)} />
      </section>

      <section
        data-plasmic-name={"topSection2"}
        data-plasmic-override={overrides.topSection2}
        className={classNames(defaultcss.all, sty.topSection2)}
      >
        <div
          data-plasmic-name={"copy"}
          data-plasmic-override={overrides.copy}
          className={classNames(defaultcss.all, sty.copy)}
        >
          <h1
            className={classNames(
              defaultcss.h1,
              defaultcss.__wab_text,
              sty.h1___5UQu
            )}
          >
            {
              "A tool to build React UIs visually,\nfrom your design system to whole screens"
            }
          </h1>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__rKmHq
            )}
          >
            {
              "Plasmic loosely resembles a design tool and aims to give the same sense of speedy iteration, but is for building maintainable, production-ready presentational components that nudges you toward best practices."
            }
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__tGtZx
            )}
          >
            {
              "The idea is to give developers a better and faster development experience, eliminate an entire class of visual bugs/QA/tooling, and ultimately maintain a single source of truth with design."
            }
          </div>
        </div>
      </section>

      <section
        data-plasmic-name={"section"}
        data-plasmic-override={overrides.section}
        className={classNames(defaultcss.all, sty.section)}
      >
        <img
          alt={""}
          className={classNames(defaultcss.img, sty.img__zrLnC)}
          role={"img"}
          src={
            "/plasmic/copy_of_plasmic_kit_website_documentation/images/section2Svg.svg"
          }
        />

        <p.Stack
          as={"div"}
          data-plasmic-name={"copyBox"}
          data-plasmic-override={overrides.copyBox}
          hasGap={true}
          className={classNames(defaultcss.all, sty.copyBox)}
        >
          <h1
            className={classNames(
              defaultcss.h1,
              defaultcss.__wab_text,
              sty.h1__en8F
            )}
          >
            {"No-compromise developer control"}
          </h1>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__ocPdz
            )}
          >
            {
              "Design your components with props and state to ensure cleanly structured code. Flexibly consume components as a library of presentational components, or directly edit the component’s JSX tree—Plasmic supports multiple codegen schemes with an emphasis on clean code and best practices. Walk away or eject any time with plain React code."
            }
          </div>

          <div className={classNames(defaultcss.all, sty.box___3Dfwf)} />

          <div className={classNames(defaultcss.all, sty.box__ddF1)}>
            <h1
              className={classNames(
                defaultcss.h1,
                defaultcss.__wab_text,
                sty.h1__deZ8H
              )}
            >
              {"Discover a new developer experience"}
            </h1>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__wtAeH
              )}
            >
              {
                "Inherently visual medium. Use distill layout into a set of fast and intuitive but full-featured controls. Stop guessing your flex-basis, or manually dancing around a cross-browser flex-gap, design across all variants of your components side by side. Achieve reuse for consistency and speed using rich abstractions like tokens, mixins, and components."
              }
            </div>
          </div>

          <div className={classNames(defaultcss.all, sty.box__xUjXj)} />
        </p.Stack>
      </section>

      <section
        data-plasmic-name={"topSection22"}
        data-plasmic-override={overrides.topSection22}
        className={classNames(defaultcss.all, sty.topSection22)}
      >
        <div
          data-plasmic-name={"copy3"}
          data-plasmic-override={overrides.copy3}
          className={classNames(defaultcss.all, sty.copy3)}
        >
          <h1
            className={classNames(
              defaultcss.h1,
              defaultcss.__wab_text,
              sty.h1___3WL0R
            )}
          >
            {"What you see is what you get"}
          </h1>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__nkKnf
            )}
          >
            {
              "Design in the final medium. Remove the impedance mismatch between vector graphics and the DOM. Eliminate an entire class of visual bugs/QA/tooling."
            }
          </div>

          <div className={classNames(defaultcss.all, sty.box__xAst)} />
        </div>
      </section>

      <div
        data-plasmic-name={"section3"}
        data-plasmic-override={overrides.section3}
        className={classNames(defaultcss.all, sty.section3)}
      >
        <img
          alt={""}
          className={classNames(defaultcss.img, sty.img__kCapv)}
          role={"img"}
          src={
            "/plasmic/copy_of_plasmic_kit_website_documentation/images/section3Svg.svg"
          }
        />

        <div
          data-plasmic-name={"copyBox2"}
          data-plasmic-override={overrides.copyBox2}
          className={classNames(defaultcss.all, sty.copyBox2)}
        >
          <h1
            className={classNames(
              defaultcss.h1,
              defaultcss.__wab_text,
              sty.h1__xo4LO
            )}
          >
            {"Fix design-engineering collaboration"}
          </h1>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__hUcD
            )}
          >
            {
              "Invite and empower your design colleagues to collaborate on the design of the final product. Continuously sync the latest design changes with the code. Say goodbye to handoffs altogether, to making incremental presentational tweaks, and to divergent sources of truth between design files and code."
            }
          </div>

          <div className={classNames(defaultcss.all, sty.box__yvLWt)} />

          <h1
            className={classNames(
              defaultcss.h1,
              defaultcss.__wab_text,
              sty.h1__cxRd
            )}
          >
            {"Adopt incrementally"}
          </h1>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__xwRi
            )}
          >
            {
              "Integrate into any existing React codebase in minutes—whether you use Typescript or ES6, Gatsby or Next, webpack or parcel. Start with a single component. Reuse any existing component from your codebase."
            }
          </div>

          <div className={classNames(defaultcss.all, sty.box__tPrUu)} />
        </div>
      </div>

      <section
        data-plasmic-name={"topSection222"}
        data-plasmic-override={overrides.topSection222}
        className={classNames(defaultcss.all, sty.topSection222)}
      >
        <div
          data-plasmic-name={"copy32"}
          data-plasmic-override={overrides.copy32}
          className={classNames(defaultcss.all, sty.copy32)}
        >
          <h1
            className={classNames(
              defaultcss.h1,
              defaultcss.__wab_text,
              sty.h1__vSvl2
            )}
          >
            {"Import from design tools (coming soon)"}
          </h1>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__rywr
            )}
          >
            {
              "We’ll take off your hands the tedious translation from the domain of vector graphics to the DOM and CSS. Further use Plasmic refactoring tools to swiftly coalesce and deduplicate elements into compositions of stateful components."
            }
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__n5Oko)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__xRr1S)}
            >
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__ivwpx)}
                role={"img"}
                src={
                  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA3MiA3MiIgaGVpZ2h0PSI3MiIgd2lkdGg9IjcyIj4KPHBhdGggZmlsbD0iIzYxREFGQiIgZD0iTTcxLjQ3MDcgMzUuODM0M0M3MS40NzA3IDMxLjE1NDggNjUuNTg2NyAyNi43MiA1Ni41NjU0IDIzLjk2OTlDNTguNjQ3MiAxNC44MTI1IDU3LjcyMiA3LjUyNjgxIDUzLjY0NTEgNS4xOTQyNUM1Mi43MDU0IDQuNjQ3MTEgNTEuNjA2NiA0LjM4NzkzIDUwLjQwNjcgNC4zODc5M1Y3LjU5ODhDNTEuMDcxNyA3LjU5ODggNTEuNjA2NiA3LjcyODM5IDUyLjA1NDggNy45NzMxNkM1NC4wMjEgOS4wOTYyNCA1NC44NzM5IDEzLjM3MjYgNTQuMjA4OSAxOC44NzI4QzU0LjA0OTkgMjAuMjI2MyA1My43ODk3IDIxLjY1MTcgNTMuNDcxNiAyMy4xMDZDNTAuNjM4IDIyLjQxNDkgNDcuNTQ0MiAyMS44ODIxIDQ0LjI5MTMgMjEuNTM2NkM0Mi4zMzk2IDE4Ljg3MjggNDAuMzE1NyAxNi40NTM5IDM4LjI3NzIgMTQuMzM3M0M0Mi45OTAyIDkuOTc0NTUgNDcuNDE0MSA3LjU4NDQgNTAuNDIxMiA3LjU4NDRWNC4zNzM1NEM0Ni40NDU1IDQuMzczNTQgNDEuMjQwOSA3LjE5NTY0IDM1Ljk3ODUgMTIuMDkxMUMzMC43MTYxIDcuMjI0NDQgMjUuNTExNiA0LjQzMTEzIDIxLjUzNTkgNC40MzExM1Y3LjY0MTk5QzI0LjUyODUgNy42NDE5OSAyOC45NjY4IDEwLjAxNzcgMzMuNjc5OCAxNC4zNTE3QzMxLjY1NTkgMTYuNDY4MyAyOS42MzE5IDE4Ljg3MjggMjcuNzA5MSAyMS41MzY2QzI0LjQ0MTggMjEuODgyMSAyMS4zNDc5IDIyLjQxNDkgMTguNTE0NCAyMy4xMjA0QzE4LjE4MTggMjEuNjgwNSAxNy45MzYxIDIwLjI4MzkgMTcuNzYyNiAxOC45NDQ4QzE3LjA4MzEgMTMuNDQ0NiAxNy45MjE2IDkuMTY4MjQgMTkuODczMyA4LjAzMDc2QzIwLjMwNyA3Ljc3MTU4IDIwLjg3MDkgNy42NTYzOSAyMS41MzU5IDcuNjU2MzlWNC40NDU1M0MyMC4zMjE1IDQuNDQ1NTMgMTkuMjIyOCA0LjcwNDcgMTguMjY4NiA1LjI1MTg0QzE0LjIwNjEgNy41ODQ0IDEzLjI5NTMgMTQuODU1NiAxNS4zOTE2IDIzLjk4NDNDNi4zOTkzMSAyNi43NDg4IDAuNTQ0MTg5IDMxLjE2OTEgMC41NDQxODkgMzUuODM0M0MwLjU0NDE4OSA0MC41MTM4IDYuNDI4MjIgNDQuOTQ4NSAxNS40NDk1IDQ3LjY5ODZDMTMuMzY3NiA1Ni44NTYxIDE0LjI5MjkgNjQuMTQxNyAxOC4zNjk4IDY2LjQ3NDNDMTkuMzA5NSA2Ny4wMjE0IDIwLjQwODIgNjcuMjgwNiAyMS42MjI2IDY3LjI4MDZDMjUuNTk4MyA2Ny4yODA2IDMwLjgwMjkgNjQuNDU4NSAzNi4wNjUzIDU5LjU2M0M0MS4zMjc2IDY0LjQyOTcgNDYuNTMyMiA2Ny4yMjMgNTAuNTA3OSA2Ny4yMjNDNTEuNzIyMyA2Ny4yMjMgNTIuODIxIDY2Ljk2MzggNTMuNzc1MiA2Ni40MTY3QzU3LjgzNzcgNjQuMDg0MSA1OC43NDg0IDU2LjgxMjkgNTYuNjUyMiA0Ny42ODQyQzY1LjYxNTYgNDQuOTM0MSA3MS40NzA3IDQwLjQ5OTQgNzEuNDcwNyAzNS44MzQzWk01Mi42NDc1IDI2LjIzMDVDNTIuMTEyNiAyOC4wODc5IDUxLjQ0NzYgMzAuMDAyOSA1MC42OTU4IDMxLjkxNzlDNTAuMTAzMSAzMC43NjYgNDkuNDgxNCAyOS42MTQxIDQ4LjgwMiAyOC40NjIyQzQ4LjEzNjkgMjcuMzEwNCA0Ny40Mjg1IDI2LjE4NzMgNDYuNzIwMSAyNS4wOTNDNDguNzczMSAyNS4zOTUzIDUwLjc1MzcgMjUuNzY5NyA1Mi42NDc1IDI2LjIzMDVaTTQ2LjAyNjIgNDEuNTY0OUM0NC44OTg1IDQzLjUwODcgNDMuNzQyIDQ1LjM1MTcgNDIuNTQyIDQ3LjA2NTFDNDAuMzg3OSA0Ny4yNTIzIDM4LjIwNDkgNDcuMzUzMSAzNi4wMDc0IDQ3LjM1MzFDMzMuODI0NCA0Ny4zNTMxIDMxLjY0MTQgNDcuMjUyMyAyOS41MDE3IDQ3LjA3OTVDMjguMzAxOCA0NS4zNjYxIDI3LjEzMDggNDMuNTM3NSAyNi4wMDMxIDQxLjYwODFDMjQuOTA0NCAzOS43MjE5IDIzLjkwNjkgMzcuODA2OSAyMi45OTYxIDM1Ljg3NzVDMjMuODkyNCAzMy45NDgxIDI0LjkwNDQgMzIuMDE4NyAyNS45ODg3IDMwLjEzMjVDMjcuMTE2MyAyOC4xODg3IDI4LjI3MjkgMjYuMzQ1NyAyOS40NzI4IDI0LjYzMjJDMzEuNjI2OSAyNC40NDUgMzMuODEgMjQuMzQ0MyAzNi4wMDc0IDI0LjM0NDNDMzguMTkwNSAyNC4zNDQzIDQwLjM3MzUgMjQuNDQ1IDQyLjUxMzEgMjQuNjE3OEM0My43MTMxIDI2LjMzMTMgNDQuODg0MSAyOC4xNTk5IDQ2LjAxMTcgMzAuMDg5M0M0Ny4xMTA1IDMxLjk3NTUgNDguMTA4IDMzLjg5MDUgNDkuMDE4OCAzNS44MTk5QzQ4LjEwOCAzNy43NDkzIDQ3LjExMDUgMzkuNjc4NyA0Ni4wMjYyIDQxLjU2NDlaTTUwLjY5NTggMzkuNjkzMUM1MS40NzY1IDQxLjYyMjUgNTIuMTQxNiA0My41NTE5IDUyLjY5MDkgNDUuNDIzN0M1MC43OTcgNDUuODg0NCA0OC44MDIgNDYuMjczMiA0Ni43MzQ2IDQ2LjU3NTVDNDcuNDQzIDQ1LjQ2NjkgNDguMTUxNCA0NC4zMjk0IDQ4LjgxNjQgNDMuMTYzMUM0OS40ODE1IDQyLjAxMTIgNTAuMTAzMSA0MC44NDQ5IDUwLjY5NTggMzkuNjkzMVpNMzYuMDM2NCA1NS4wNTYzQzM0LjY5MTggNTMuNjc0IDMzLjM0NzMgNTIuMTMzNCAzMi4wMTczIDUwLjQ0ODdDMzMuMzE4NCA1MC41MDYzIDM0LjY0ODUgNTAuNTQ5NSAzNS45OTMgNTAuNTQ5NUMzNy4zNTE5IDUwLjU0OTUgMzguNjk2NSA1MC41MjA3IDQwLjAxMjEgNTAuNDQ4N0MzOC43MTA5IDUyLjEzMzQgMzcuMzY2NCA1My42NzQgMzYuMDM2NCA1NS4wNTYzWk0yNS4yODAzIDQ2LjU3NTVDMjMuMjI3NCA0Ni4yNzMyIDIxLjI0NjcgNDUuODk4OCAxOS4zNTI5IDQ1LjQzODFDMTkuODg3OCA0My41ODA3IDIwLjU1MjggNDEuNjY1NyAyMS4zMDQ2IDM5Ljc1MDdDMjEuODk3MyA0MC45MDI1IDIyLjUxOSA0Mi4wNTQ0IDIzLjE5ODUgNDMuMjA2M0MyMy44Nzc5IDQ0LjM1ODIgMjQuNTcxOSA0NS40ODEzIDI1LjI4MDMgNDYuNTc1NVpNMzUuOTY0MSAxNi42MTIzQzM3LjMwODYgMTcuOTk0NSAzOC42NTMxIDE5LjUzNTIgMzkuOTgzMSAyMS4yMTk4QzM4LjY4MiAyMS4xNjIyIDM3LjM1MTkgMjEuMTE5IDM2LjAwNzQgMjEuMTE5QzM0LjY0ODUgMjEuMTE5IDMzLjMwNCAyMS4xNDc4IDMxLjk4ODQgMjEuMjE5OEMzMy4yODk1IDE5LjUzNTIgMzQuNjM0IDE3Ljk5NDUgMzUuOTY0MSAxNi42MTIzWk0yNS4yNjU4IDI1LjA5M0MyNC41NTc0IDI2LjIwMTcgMjMuODQ5IDI3LjMzOTEgMjMuMTg0IDI4LjUwNTRDMjIuNTE5IDI5LjY1NzMgMjEuODk3MyAzMC44MDkyIDIxLjMwNDYgMzEuOTYxMUMyMC41MjM5IDMwLjAzMTcgMTkuODU4OSAyOC4xMDIzIDE5LjMwOTUgMjYuMjMwNUMyMS4yMDM0IDI1Ljc4NDEgMjMuMTk4NSAyNS4zOTUzIDI1LjI2NTggMjUuMDkzWk0xMi4xODIyIDQzLjExOTlDNy4wNjQzNCA0MC45NDU3IDMuNzUzNjYgMzguMDk0OCAzLjc1MzY2IDM1LjgzNDNDMy43NTM2NiAzMy41NzM3IDcuMDY0MzQgMzAuNzA4NCAxMi4xODIyIDI4LjU0ODZDMTMuNDI1NSAyOC4wMTU5IDE0Ljc4NDQgMjcuNTQwNyAxNi4xODY4IDI3LjA5NDRDMTcuMDEwOCAyOS45MTY1IDE4LjA5NTEgMzIuODUzOCAxOS40Mzk2IDM1Ljg2MzFDMTguMTA5NiAzOC44NTggMTcuMDM5NyA0MS43ODA4IDE2LjIzMDEgNDQuNTg4NkMxNC43OTg5IDQ0LjE0MjIgMTMuNDM5OSA0My42NTI3IDEyLjE4MjIgNDMuMTE5OVpNMTkuOTYwMSA2My42OTU0QzE3Ljk5MzkgNjIuNTcyMyAxNy4xNDA5IDU4LjI5NTkgMTcuODA2IDUyLjc5NTdDMTcuOTY1IDUxLjQ0MjIgMTguMjI1MiA1MC4wMTY4IDE4LjU0MzMgNDguNTYyNUMyMS4zNzY5IDQ5LjI1MzcgMjQuNDcwNyA0OS43ODY0IDI3LjcyMzUgNTAuMTMyQzI5LjY3NTIgNTIuNzk1NyAzMS42OTkyIDU1LjIxNDYgMzMuNzM3NyA1Ny4zMzEyQzI5LjAyNDcgNjEuNjk0IDI0LjYwMDggNjQuMDg0MSAyMS41OTM3IDY0LjA4NDFDMjAuOTQzMSA2NC4wNjk3IDIwLjM5MzggNjMuOTQwMSAxOS45NjAxIDYzLjY5NTRaTTU0LjI1MjMgNTIuNzIzN0M1NC45MzE4IDU4LjIyMzkgNTQuMDkzMyA2Mi41MDAzIDUyLjE0MTUgNjMuNjM3OEM1MS43MDc4IDYzLjg5NjkgNTEuMTQ0IDY0LjAxMjEgNTAuNDc5IDY0LjAxMjFDNDcuNDg2NCA2NC4wMTIxIDQzLjA0OCA2MS42MzY0IDM4LjMzNSA1Ny4zMDI0QzQwLjM1OSA1NS4xODU5IDQyLjM4MyA1Mi43ODEzIDQ0LjMwNTggNTAuMTE3NkM0Ny41NzMxIDQ5Ljc3MiA1MC42NjY5IDQ5LjIzOTMgNTMuNTAwNSA0OC41MzM3QzUzLjgzMyA0OS45ODggNTQuMDkzMyA1MS4zODQ2IDU0LjI1MjMgNTIuNzIzN1pNNTkuODE4MyA0My4xMTk5QzU4LjU3NSA0My42NTI3IDU3LjIxNiA0NC4xMjc4IDU1LjgxMzcgNDQuNTc0MkM1NC45ODk2IDQxLjc1MjEgNTMuOTA1MyAzOC44MTQ4IDUyLjU2MDggMzUuODA1NUM1My44OTA5IDMyLjgxMDYgNTQuOTYwNyAyOS44ODc3IDU1Ljc3MDMgMjcuMDhDNTcuMjAxNSAyNy41MjYzIDU4LjU2MDUgMjguMDE1OSA1OS44MzI3IDI4LjU0ODZDNjQuOTUwNSAzMC43MjI4IDY4LjI2MTIgMzMuNTczNyA2OC4yNjEyIDM1LjgzNDNDNjguMjQ2OCAzOC4wOTQ4IDY0LjkzNjEgNDAuOTYwMSA1OS44MTgzIDQzLjExOTlaIi8+CjxwYXRoIGZpbGw9IiM2MURBRkIiIGQ9Ik0zNS45OTI5IDQyLjQxNDRDMzkuNjQxOCA0Mi40MTQ0IDQyLjU5OTggMzkuNDY4NCA0Mi41OTk4IDM1LjgzNDNDNDIuNTk5OCAzMi4yMDAyIDM5LjY0MTggMjkuMjU0MiAzNS45OTI5IDI5LjI1NDJDMzIuMzQ0IDI5LjI1NDIgMjkuMzg2IDMyLjIwMDIgMjkuMzg2IDM1LjgzNDNDMjkuMzg2IDM5LjQ2ODQgMzIuMzQ0IDQyLjQxNDQgMzUuOTkyOSA0Mi40MTQ0WiIvPgo8L3N2Zz4K" as const
                }
                title={"React" as const}
              />
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__awlQm)}
            >
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__ptO3V)}
                role={"img"}
                src={
                  "/plasmic/copy_of_plasmic_kit_website_documentation/images/image.png"
                }
                title={"Typescript" as const}
              />
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__uj8Qo)}
            >
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img___083W)}
                role={"img"}
                src={
                  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA3MiA3MiIgaGVpZ2h0PSI3MiIgd2lkdGg9IjcyIj4KPHBhdGggZmlsbD0iIzBEMEQwRCIgZD0iTTM2IDM2LjMzMThWNjcuOTk5OEMzNi40OTkgNjguMDA2OCAzNi45ODkgNjcuODY2OCAzNy40MDkgNjcuNTk3Mkw2Mi43NjYyIDUzLjEwN0M2My43Njk4IDUyLjUzNDMgNjQuMTc4IDUxLjY0NDEgNjQuMTc4IDUwLjQ5MDJWMjEuMTA3M0M2NC4xODg4IDIwLjYwNzQgNjQuMDQ3NSAyMC4xMTYgNjMuNzcyNiAxOS42OTgyTDM2LjgxMDggMzQuOTMxMkMzNi41NjQxIDM1LjA3MjMgMzYuMzU5MSAzNS4yNzYyIDM2LjIxNjcgMzUuNTIyMkMzNi4wNzQzIDM1Ljc2ODIgMzUuOTk5NSAzNi4wNDc1IDM2IDM2LjMzMThWMzYuMzMxOFpNNTAuMDkwNCA1NC41MTYxQzUwLjA5MDQgNTUuMzIxMiA0OS43ODcxIDU1LjcyMzggNDkuMDgxMSA1Ni4xMjY0TDQwLjYyOTcgNjAuOTU0NkM0MC4wMjU4IDYxLjM1NzIgMzkuMjIwNyA2MS4xNTg3IDM5LjIyMDcgNjAuMzUzNVYzOC44MTgxQzM5LjIyMDcgMzguMjQyNiAzOS43MjgyIDM3LjQ5NDEgNDAuMjI3MSAzNy4yMDc4TDU5LjU0ODMgMjYuMTM5NkM2MC4wODQyIDI1LjgyNzcgNjAuNTUxOSAyNi4zMjM5IDYwLjU1MTkgMjYuOTQ0OFYzOC40MTU2QzYwLjU1MTkgMzkuMDEwOSA2MC4yNzQxIDM5LjU0MzkgNTkuNzQ2OCAzOS44MjQ2TDUxLjA5NDEgNDQuNDU0M0M1MC41Njk2IDQ0LjczMjIgNTAuMDg3NiA0NS4yNjggNTAuMDg3NiA0NS44NjA1VjU0LjUxNjFINTAuMDkwNFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbC1ydWxlPSJldmVub2RkIi8+CjxwYXRoIGZpbGw9IiMwRDBEMEQiIGQ9Ik03LjgyNDg2IDUwLjQ4OTlWMjEuMTA3QzcuODI0ODYgMTkuOTUwMyA4LjQzMTU3IDE4Ljg2MTYgOS40MzUxOSAxOC4yODg5TDMzLjk4NzEgNC40MDI1OEMzNC41MTczIDQuMTIxOTEgMzUuMzk2MiA0IDM2LjAwMDEgNEMzNi42MDM5IDQgMzcuNTMzOCA0LjE1MDI2IDM4LjAxMyA0LjQwMjU4TDYyLjM2NjUgMTguMjg4OUM2Mi44NDg0IDE4LjU3MjQgNjMuNTAwNSAxOS4yMzAxIDYzLjc3MjcgMTkuNjk3OUwzNi44MDUyIDM0Ljk5MzNDMzYuNTU5MSAzNS4xMzY3IDM2LjM1NTEgMzUuMzQyNSAzNi4yMTM3IDM1LjU4OThDMzYuMDcyNCAzNS44MzcyIDM1Ljk5ODcgMzYuMTE3NCAzNi4wMDAxIDM2LjQwMjNWNjcuOTk5NUMzNS40NSA2Ny45OTk1IDM0Ljg4NTkgNjcuODgwNCAzNC4zODk3IDY3LjU5NjlMOS42MzY0OCA1My4zMDhDOC42MzI4NiA1Mi43MzUzIDcuODIyMDIgNTEuNjQ2NyA3LjgyMjAyIDUwLjQ4OTlINy44MjQ4NlpNMTEuNDQ4MSAyNi45NDE2VjM4LjQxNTJDMTEuNDQ4MSAzOS4yMjA0IDExLjY0NjYgMzkuNjIzIDEyLjQ1MTcgNDAuMDI1NkwyMC45MDYgNDQuODUzOEMyMS4yMTg0IDQ0Ljk4NjggMjEuNDgyNSA0NS4yMTI2IDIxLjY2MjUgNDUuNTAwNkMyMS44NDI1IDQ1Ljc4ODYgMjEuOTI5OCA0Ni4xMjQ5IDIxLjkxMjUgNDYuNDY0MVY1NC41MTU4QzIxLjkxMjUgNTUuMzIwOSAyMi4xMTA5IDU1LjcyMzUgMjIuOTE4OSA1Ni4xMjYxTDMxLjM3MDMgNjAuOTU0M0MzMi4xNzU1IDYxLjM1NjkgMzIuNzc5NCA2MS4xNTU2IDMyLjc3OTQgNjAuMzUwNFYzOC44MTc4QzMyLjc5NjcgMzguNDc4NyAzMi43MDk0IDM4LjE0MjQgMzIuNTI5NCAzNy44NTQ0QzMyLjM0OTQgMzcuNTY2NCAzMi4wODU0IDM3LjM0MDYgMzEuNzcyOSAzNy4yMDc1TDEyLjg1NDMgMjYuMzM3N0MxMi4yNTMzIDI1LjkzOCAxMS40NDgxIDI2LjEzOTMgMTEuNDQ4MSAyNi45NDE2Wk00NC40NTQzIDEzLjI1NjZMMzcuMDA2NSAxNy40ODY2QzM2LjcwNzggMTcuNjgzNSAzNi4zNTc5IDE3Ljc4ODUgMzYuMDAwMSAxNy43ODg1QzM1LjY0MjMgMTcuNzg4NSAzNS4yOTIzIDE3LjY4MzUgMzQuOTkzNiAxNy40ODY2TDI3LjU1MTUgMTMuMjU5NEMyNy4zMDQ5IDEzLjEyMzQgMjcuMDI3OSAxMy4wNTIxIDI2Ljc0NjMgMTMuMDUyMUMyNi40NjQ3IDEzLjA1MjEgMjYuMTg3NyAxMy4xMjM0IDI1Ljk0MTEgMTMuMjU5NEwxNi42Nzg5IDE4LjQ4NzNDMTUuODczNyAxOC44ODk5IDE1Ljg3MzcgMTkuNjk1MSAxNi42Nzg5IDIwLjA5NzdMMzUuMTk0OSAzMC43NjMzQzM1LjY5MSAzMS4wNDY4IDM2LjMwOTEgMzEuMDQ2OCAzNi44MDUyIDMwLjc2MzNMNTUuMzE4NCAyMC4wOTc3QzU1LjkyNTEgMTkuNjk1MSA1Ni4xMjY0IDE4Ljg4OTkgNTUuMzE4NCAxOC40ODczTDQ2LjA2NDcgMTMuMjU2NkM0NS44MTg0IDEzLjEyMTEgNDUuNTQyIDEzLjA1IDQ1LjI2MDkgMTMuMDVDNDQuOTc5OSAxMy4wNSA0NC43MDM0IDEzLjEyMTEgNDQuNDU3MiAxMy4yNTY2SDQ0LjQ1NDNaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K" as const
                }
                title={"CodeSandbox" as const}
              />
            </p.Stack>

            <p.Stack
              as={p.PlasmicLink}
              data-plasmic-name={"link"}
              data-plasmic-override={overrides.link}
              hasGap={true}
              className={classNames(defaultcss.all, sty.link)}
              component={Link}
              href={
                "https://www.figma.com/community/plugin/845367649027913572/Figma-to-Code-by-Plasmic" as const
              }
              platform={"nextjs"}
            >
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__sb1Wv)}
                role={"img"}
                src={
                  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA3MiA3MiIgaGVpZ2h0PSI3MiIgd2lkdGg9IjcyIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGZpbGw9IiMxQUJDRkUiIGQ9Ik0zNiAzNS45OTk5QzM2IDMzLjE3MDkgMzcuMTIzOCAzMC40NTc4IDM5LjEyNDIgMjguNDU3NEM0MS4xMjQ2IDI2LjQ1NzEgNDMuODM3NyAyNS4zMzMzIDQ2LjY2NjcgMjUuMzMzM0M0OS40OTU2IDI1LjMzMzMgNTIuMjA4OCAyNi40NTcxIDU0LjIwOTEgMjguNDU3NEM1Ni4yMDk1IDMwLjQ1NzggNTcuMzMzMyAzMy4xNzA5IDU3LjMzMzMgMzUuOTk5OUM1Ny4zMzMzIDM4LjgyODkgNTYuMjA5NSA0MS41NDIgNTQuMjA5MSA0My41NDI0QzUyLjIwODggNDUuNTQyOCA0OS40OTU2IDQ2LjY2NjYgNDYuNjY2NyA0Ni42NjY2QzQzLjgzNzcgNDYuNjY2NiA0MS4xMjQ2IDQ1LjU0MjggMzkuMTI0MiA0My41NDI0QzM3LjEyMzggNDEuNTQyIDM2IDM4LjgyODkgMzYgMzUuOTk5OVYzNS45OTk5WiIvPgo8cGF0aCBmaWxsPSIjMEFDRjgzIiBkPSJNMTQuNjY2NyA1Ny4zMzM0QzE0LjY2NjcgNTQuNTA0NCAxNS43OTA2IDUxLjc5MTMgMTcuNzkwOSA0OS43OTA5QzE5Ljc5MTMgNDcuNzkwNiAyMi41MDQ0IDQ2LjY2NjcgMjUuMzMzNCA0Ni42NjY3SDM2LjAwMDFWNTcuMzMzNEMzNi4wMDAxIDYwLjE2MjQgMzQuODc2MyA2Mi44NzU1IDMyLjg3NTkgNjQuODc1OUMzMC44NzU1IDY2Ljg3NjMgMjguMTYyNCA2OC4wMDAxIDI1LjMzMzQgNjguMDAwMUMyMi41MDQ0IDY4LjAwMDEgMTkuNzkxMyA2Ni44NzYzIDE3Ljc5MDkgNjQuODc1OUMxNS43OTA2IDYyLjg3NTUgMTQuNjY2NyA2MC4xNjI0IDE0LjY2NjcgNTcuMzMzNEgxNC42NjY3WiIvPgo8cGF0aCBmaWxsPSIjRkY3MjYyIiBkPSJNMzYgNFYyNS4zMzMzSDQ2LjY2NjdDNDkuNDk1NiAyNS4zMzMzIDUyLjIwODggMjQuMjA5NSA1NC4yMDkxIDIyLjIwOTFDNTYuMjA5NSAyMC4yMDg4IDU3LjMzMzMgMTcuNDk1NiA1Ny4zMzMzIDE0LjY2NjdDNTcuMzMzMyAxMS44Mzc3IDU2LjIwOTUgOS4xMjQ1OCA1NC4yMDkxIDcuMTI0MTlDNTIuMjA4OCA1LjEyMzgxIDQ5LjQ5NTYgNCA0Ni42NjY3IDRMMzYgNFoiLz4KPHBhdGggZmlsbD0iI0YyNEUxRSIgZD0iTTE0LjY2NjcgMTQuNjY2N0MxNC42NjY3IDE3LjQ5NTYgMTUuNzkwNiAyMC4yMDg4IDE3Ljc5MDkgMjIuMjA5MUMxOS43OTEzIDI0LjIwOTUgMjIuNTA0NCAyNS4zMzMzIDI1LjMzMzQgMjUuMzMzM0gzNi4wMDAxVjRIMjUuMzMzNEMyMi41MDQ0IDQgMTkuNzkxMyA1LjEyMzgxIDE3Ljc5MDkgNy4xMjQxOUMxNS43OTA2IDkuMTI0NTggMTQuNjY2NyAxMS44Mzc3IDE0LjY2NjcgMTQuNjY2N0gxNC42NjY3WiIvPgo8cGF0aCBmaWxsPSIjQTI1OUZGIiBkPSJNMTQuNjY2NyAzNS45OTk5QzE0LjY2NjcgMzguODI4OSAxNS43OTA2IDQxLjU0MiAxNy43OTA5IDQzLjU0MjRDMTkuNzkxMyA0NS41NDI4IDIyLjUwNDQgNDYuNjY2NiAyNS4zMzM0IDQ2LjY2NjZIMzYuMDAwMVYyNS4zMzMzSDI1LjMzMzRDMjIuNTA0NCAyNS4zMzMzIDE5Ljc5MTMgMjYuNDU3MSAxNy43OTA5IDI4LjQ1NzRDMTUuNzkwNiAzMC40NTc4IDE0LjY2NjcgMzMuMTcwOSAxNC42NjY3IDM1Ljk5OTlIMTQuNjY2N1oiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IGZpbGw9IndoaXRlIiBoZWlnaHQ9IjY0IiB3aWR0aD0iNDIuNjY2NyIgeT0iNCIgeD0iMTQuNjY2NyIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=" as const
                }
                title={"Figma" as const}
              />
            </p.Stack>

            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img__ub6Zn)}
              role={"img"}
              src={
                "/plasmic/copy_of_plasmic_kit_website_documentation/images/image2.png"
              }
              title={"Sketch (coming soon)" as const}
            />
          </p.Stack>
        </div>
      </section>

      <section
        data-plasmic-name={"topSection2222"}
        data-plasmic-override={overrides.topSection2222}
        className={classNames(defaultcss.all, sty.topSection2222)}
      >
        <div
          data-plasmic-name={"copy322"}
          data-plasmic-override={overrides.copy322}
          className={classNames(defaultcss.all, sty.copy322)}
        >
          <h1
            className={classNames(
              defaultcss.h1,
              defaultcss.__wab_text,
              sty.h1__m3E7A
            )}
          >
            {"Zero lock-in"}
          </h1>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__r7Gg
            )}
          >
            {
              "We’ll take off your hands the tedious translation from the domain of vector graphics to the DOM and CSS. Further use Plasmic refactoring tools to swiftly coalesce and deduplicate elements into compositions of stateful components."
            }
          </div>

          <div className={classNames(defaultcss.all, sty.box__xiX7J)} />
        </div>
      </section>

      <section
        data-plasmic-name={"section4"}
        data-plasmic-override={overrides.section4}
        className={classNames(defaultcss.all, sty.section4)}
      >
        <img
          alt={""}
          className={classNames(defaultcss.img, sty.img__tWaOi)}
          role={"img"}
          src={
            "/plasmic/copy_of_plasmic_kit_website_documentation/images/section4Svg.svg"
          }
        />
      </section>

      <AboutUs
        data-plasmic-name={"aboutUs"}
        data-plasmic-override={overrides.aboutUs}
        className={classNames("__wab_instance", sty.aboutUs)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "topSection12",
    "nav",
    "copy2",
    "topSection2",
    "copy",
    "section",
    "copyBox",
    "topSection22",
    "copy3",
    "section3",
    "copyBox2",
    "topSection222",
    "copy32",
    "link",
    "topSection2222",
    "copy322",
    "section4",
    "aboutUs"
  ],
  topSection12: ["topSection12", "nav", "copy2"],
  nav: ["nav"],
  copy2: ["copy2"],
  topSection2: ["topSection2", "copy"],
  copy: ["copy"],
  section: ["section", "copyBox"],
  copyBox: ["copyBox"],
  topSection22: ["topSection22", "copy3"],
  copy3: ["copy3"],
  section3: ["section3", "copyBox2"],
  copyBox2: ["copyBox2"],
  topSection222: ["topSection222", "copy32", "link"],
  copy32: ["copy32", "link"],
  link: ["link"],
  topSection2222: ["topSection2222", "copy322"],
  copy322: ["copy322"],
  section4: ["section4"],
  aboutUs: ["aboutUs"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  topSection12: "section";
  nav: typeof Nav;
  copy2: "div";
  topSection2: "section";
  copy: "div";
  section: "section";
  copyBox: "div";
  topSection22: "section";
  copy3: "div";
  section3: "div";
  copyBox2: "div";
  topSection222: "section";
  copy32: "div";
  link: "a";
  topSection2222: "section";
  copy322: "div";
  section4: "section";
  aboutUs: typeof AboutUs;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicPage__VariantsArgs;
  args?: PlasmicPage__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicPage__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPage__ArgProps,
      internalVariantPropNames: PlasmicPage__VariantProps
    });

    return PlasmicPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPage";
  } else {
    func.displayName = `PlasmicPage.${nodeName}`;
  }
  return func;
}

export const PlasmicPage = Object.assign(
  // Top-level PlasmicPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    topSection12: makeNodeComponent("topSection12"),
    nav: makeNodeComponent("nav"),
    copy2: makeNodeComponent("copy2"),
    topSection2: makeNodeComponent("topSection2"),
    copy: makeNodeComponent("copy"),
    section: makeNodeComponent("section"),
    copyBox: makeNodeComponent("copyBox"),
    topSection22: makeNodeComponent("topSection22"),
    copy3: makeNodeComponent("copy3"),
    section3: makeNodeComponent("section3"),
    copyBox2: makeNodeComponent("copyBox2"),
    topSection222: makeNodeComponent("topSection222"),
    copy32: makeNodeComponent("copy32"),
    link: makeNodeComponent("link"),
    topSection2222: makeNodeComponent("topSection2222"),
    copy322: makeNodeComponent("copy322"),
    section4: makeNodeComponent("section4"),
    aboutUs: makeNodeComponent("aboutUs"),

    // Metadata about props expected for PlasmicPage
    internalVariantProps: PlasmicPage__VariantProps,
    internalArgProps: PlasmicPage__ArgProps
  }
);

export default PlasmicPage;
/* prettier-ignore-end */
