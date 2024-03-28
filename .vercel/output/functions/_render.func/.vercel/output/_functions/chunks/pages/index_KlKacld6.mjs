import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_D1VOB1hM.mjs';
import { g as getLangFromUrl, a as getLandingData, $ as $$Layout, b as $$Header, c as $$Footer } from './About_CTfOKHJi.mjs';
import { $ as $$Hero, a as $$Services, b as $$Adventajes, c as $$Brands, d as $$Pricing, e as $$Performances } from './index copy_CyMYMtgA.mjs';
/* empty css                          */
import { jsxs, jsx } from 'react/jsx-runtime';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { IconBrightnessDown, IconBrightnessUp, IconTable, IconSearch, IconMicrophone, IconMoon, IconPlayerTrackPrev, IconPlayerSkipForward, IconPlayerTrackNext, IconVolume3, IconVolume2, IconVolume, IconWorld, IconChevronUp, IconCommand, IconCaretUpFilled, IconCaretLeftFilled, IconCaretDownFilled, IconCaretRightFilled } from '@tabler/icons-react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const $$Astro$3 = createAstro("https://luna-landing-rust.vercel.app/");
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  const lang = getLangFromUrl(Astro2.url);
  const data = await getLandingData({ lang });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": data.meta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data": data.headerData })} ${maybeRenderHead()}<main class="flex flex-col justify-center items-center"> <div class="container w-full mr-auto ml-auto pr-8 pl-8"> ${renderComponent($$result2, "Hero", $$Hero, { "data": data.heroData })} ${renderComponent($$result2, "Services", $$Services, { "data": data.servicesData })} ${renderComponent($$result2, "Adventajes", $$Adventajes, { "data": data.adventajesData })} ${renderComponent($$result2, "Brands", $$Brands, { "data": data.brandsData })} ${renderComponent($$result2, "Pricing", $$Pricing, { "data": data.pricingData })} </div> ${renderComponent($$result2, "Footer", $$Footer, { "data": data.footerData })} </main> ` })}`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/en/index.astro", void 0);

const $$file$3 = "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/en/index.astro";
const $$url$3 = "/en";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);
  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1 : 1.5]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5]
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: "min-h-[200vh]  flex flex-col items-center py-[40rem] md:py-80  justify-start flex-shrink-0 [perspective:800px] transform md:scale-100  scale-[.5] sm:scale-50 max-sm:hidden",
      children: [
        /* @__PURE__ */ jsx(
          motion.h2,
          {
            style: {
              translateY: textTransform,
              opacity: textOpacity
            },
            className: "text-2xl text-center md:text-5xl font-semibold mb-12  ",
            children: title || /* @__PURE__ */ jsxs("span", { children: [
              "This Macbook is built with Tailwindcss. ",
              /* @__PURE__ */ jsx("br", {}),
              " No kidding."
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          Lid,
          {
            src,
            scaleX,
            scaleY,
            rotate,
            translate
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "h-[22rem] w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl overflow-hidden relative -z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "h-10 w-full relative", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex relative", children: [
            /* @__PURE__ */ jsx("div", { className: "mx-auto w-[10%] overflow-hidden  h-full", children: /* @__PURE__ */ jsx(SpeakerGrid, {}) }),
            /* @__PURE__ */ jsx("div", { className: "mx-auto w-[80%] h-full", children: /* @__PURE__ */ jsx(Keypad, {}) }),
            /* @__PURE__ */ jsx("div", { className: "mx-auto w-[10%] overflow-hidden  h-full", children: /* @__PURE__ */ jsx(SpeakerGrid, {}) })
          ] }),
          /* @__PURE__ */ jsx(Trackpad, {}),
          /* @__PURE__ */ jsx("div", { className: "h-2 w-20 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-[#272729] to-[#050505] rounded-tr-3xl rounded-tl-3xl" }),
          showGradient && /* @__PURE__ */ jsx("div", { className: "h-40 w-full absolute bottom-0 inset-x-0 bg-gradient-to-t dark:from-black from-white via-white dark:via-black to-transparent z-50" }),
          badge && /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4", children: badge })
        ] })
      ]
    }
  );
};
const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  src
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "relative [perspective:800px]", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d"
        },
        className: "h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative",
        children: /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              boxShadow: "0px 2px 0px 2px var(--neutral-900) inset"
            },
            className: "absolute inset-0 bg-[#010101] rounded-lg flex items-center justify-center",
            children: /* @__PURE__ */ jsx("span", { className: "text-white", children: /* @__PURE__ */ jsx(AceternityLogo, {}) })
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        style: {
          scaleX,
          scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top"
        },
        className: "h-96 w-[32rem] absolute inset-0 bg-[#010101] rounded-2xl p-2",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[#272729] rounded-lg" }),
          /* @__PURE__ */ jsx("a", { href: "/fr/Projets", children: /* @__PURE__ */ jsx(
            "img",
            {
              src,
              alt: "aceternity logo",
              className: "object-cover absolute rounded-lg inset-0 h-full w-full  "
            }
          ) })
        ]
      }
    )
  ] });
};
const Trackpad = () => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "w-[40%] mx-auto h-32  rounded-xl my-1",
      style: {
        boxShadow: "0px 0px 1px 1px #00000020 inset"
      }
    }
  );
};
const Keypad = () => {
  return /* @__PURE__ */ jsxs("div", { className: "h-full rounded-md bg-[#050505] mx-1 p-1", children: [
    /* @__PURE__ */ jsxs(Row, { children: [
      /* @__PURE__ */ jsx(
        KBtn,
        {
          className: "w-10 items-end justify-start pl-[4px] pb-[2px]",
          childrenClassName: "items-start",
          children: "esc"
        }
      ),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx(IconBrightnessDown, { className: "h-[6px] w-[6px]" }),
        /* @__PURE__ */ jsx("span", { className: "inline-block mt-1", children: "F1" })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx(IconBrightnessUp, { className: "h-[6px] w-[6px]" }),
        /* @__PURE__ */ jsx("span", { className: "inline-block mt-1", children: "F2" })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx(IconTable, { className: "h-[6px] w-[6px]" }),
        /* @__PURE__ */ jsx("span", { className: "inline-block mt-1", children: "F3" })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx(IconSearch, { className: "h-[6px] w-[6px]" }),
        /* @__PURE__ */ jsx("span", { className: "inline-block mt-1", children: "F4" })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx(IconMicrophone, { className: "h-[6px] w-[6px]" }),
        /* @__PURE__ */ jsx("span", { className: "inline-block mt-1", children: "F5" })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx(IconMoon, { className: "h-[6px] w-[6px]" }),
        /* @__PURE__ */ jsx("span", { className: "inline-block mt-1", children: "F6" })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx(IconPlayerTrackPrev, { className: "h-[6px] w-[6px]" }),
        /* @__PURE__ */ jsx("span", { className: "inline-block mt-1", children: "F7" })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx(IconPlayerSkipForward, { className: "h-[6px] w-[6px]" }),
        /* @__PURE__ */ jsx("span", { className: "inline-block mt-1", children: "F8" })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx(IconPlayerTrackNext, { className: "h-[6px] w-[6px]" }),
        /* @__PURE__ */ jsx("span", { className: "inline-block mt-1", children: "F8" })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx(IconVolume3, { className: "h-[6px] w-[6px]" }),
        /* @__PURE__ */ jsx("span", { className: "inline-block mt-1", children: "F10" })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx(IconVolume2, { className: "h-[6px] w-[6px]" }),
        /* @__PURE__ */ jsx("span", { className: "inline-block mt-1", children: "F11" })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx(IconVolume, { className: "h-[6px] w-[6px]" }),
        /* @__PURE__ */ jsx("span", { className: "inline-block mt-1", children: "F12" })
      ] }),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("div", { className: "h-4 w-4 rounded-full  bg-gradient-to-b from-20% from-neutral-900 via-black via-50% to-neutral-900 to-95% p-px", children: /* @__PURE__ */ jsx("div", { className: "bg-black h-full w-full rounded-full" }) }) })
    ] }),
    /* @__PURE__ */ jsxs(Row, { children: [
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx("span", { className: "block", children: "~" }),
        /* @__PURE__ */ jsx("span", { className: "block mt-1", children: "`" })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx("span", { className: "block ", children: "!" }),
        /* @__PURE__ */ jsx("span", { className: "block", children: "1" })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx("span", { className: "block", children: "@" }),
        /* @__PURE__ */ jsx("span", { className: "block", children: "2" })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx("span", { className: "block", children: "#" }),
        /* @__PURE__ */ jsx("span", { className: "block", children: "3" })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx("span", { className: "block", children: "$" }),
        /* @__PURE__ */ jsx("span", { className: "block", children: "4" })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx("span", { className: "block", children: "%" }),
        /* @__PURE__ */ jsx("span", { className: "block", children: "5" })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx("span", { className: "block", children: "^" }),
        /* @__PURE__ */ jsx("span", { className: "block", children: "6" })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx("span", { className: "block", children: "&" }),
        /* @__PURE__ */ jsx("span", { className: "block", children: "7" })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx("span", { className: "block", children: "*" }),
        /* @__PURE__ */ jsx("span", { className: "block", children: "8" })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx("span", { className: "block", children: "(" }),
        /* @__PURE__ */ jsx("span", { className: "block", children: "9" })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx("span", { className: "block", children: ")" }),
        /* @__PURE__ */ jsx("span", { className: "block", children: "0" })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx("span", { className: "block", children: "—" }),
        /* @__PURE__ */ jsx("span", { className: "block", children: "_" })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx("span", { className: "block", children: "+" }),
        /* @__PURE__ */ jsx("span", { className: "block", children: " = " })
      ] }),
      /* @__PURE__ */ jsx(
        KBtn,
        {
          className: "w-10 items-end justify-end pr-[4px] pb-[2px]",
          childrenClassName: "items-end",
          children: "delete"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Row, { children: [
      /* @__PURE__ */ jsx(
        KBtn,
        {
          className: "w-10 items-end justify-start pl-[4px] pb-[2px]",
          childrenClassName: "items-start",
          children: "tab"
        }
      ),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "Q" }) }),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "W" }) }),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "E" }) }),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "R" }) }),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "T" }) }),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "Y" }) }),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "U" }) }),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "I" }) }),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "O" }) }),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "P" }) }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx("span", { className: "block", children: `{` }),
        /* @__PURE__ */ jsx("span", { className: "block", children: `[` })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx("span", { className: "block", children: `}` }),
        /* @__PURE__ */ jsx("span", { className: "block", children: `]` })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx("span", { className: "block", children: `|` }),
        /* @__PURE__ */ jsx("span", { className: "block", children: `\\` })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Row, { children: [
      /* @__PURE__ */ jsx(
        KBtn,
        {
          className: "w-[2.8rem] items-end justify-start pl-[4px] pb-[2px]",
          childrenClassName: "items-start",
          children: "caps lock"
        }
      ),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "A" }) }),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "S" }) }),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "D" }) }),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "F" }) }),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "G" }) }),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "H" }) }),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "J" }) }),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "K" }) }),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "L" }) }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx("span", { className: "block", children: `:` }),
        /* @__PURE__ */ jsx("span", { className: "block", children: `;` })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx("span", { className: "block", children: `"` }),
        /* @__PURE__ */ jsx("span", { className: "block", children: `'` })
      ] }),
      /* @__PURE__ */ jsx(
        KBtn,
        {
          className: "w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]",
          childrenClassName: "items-end",
          children: "return"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Row, { children: [
      /* @__PURE__ */ jsx(
        KBtn,
        {
          className: "w-[3.65rem] items-end justify-start pl-[4px] pb-[2px]",
          childrenClassName: "items-start",
          children: "shift"
        }
      ),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "Z" }) }),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "X" }) }),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "C" }) }),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "V" }) }),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "B" }) }),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "N" }) }),
      /* @__PURE__ */ jsx(KBtn, { children: /* @__PURE__ */ jsx("span", { className: "block", children: "M" }) }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx("span", { className: "block", children: `<` }),
        /* @__PURE__ */ jsx("span", { className: "block", children: `,` })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx("span", { className: "block", children: `>` }),
        /* @__PURE__ */ jsx("span", { className: "block", children: `.` })
      ] }),
      " ",
      /* @__PURE__ */ jsxs(KBtn, { children: [
        /* @__PURE__ */ jsx("span", { className: "block", children: `?` }),
        /* @__PURE__ */ jsx("span", { className: "block", children: `/` })
      ] }),
      /* @__PURE__ */ jsx(
        KBtn,
        {
          className: "w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]",
          childrenClassName: "items-end",
          children: "shift"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Row, { children: [
      /* @__PURE__ */ jsxs(KBtn, { className: "", childrenClassName: "h-full justify-between py-[4px]", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-end w-full pr-1", children: /* @__PURE__ */ jsx("span", { className: "block", children: "fn" }) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-start w-full pl-1", children: /* @__PURE__ */ jsx(IconWorld, { className: "h-[6px] w-[6px]" }) })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { className: "", childrenClassName: "h-full justify-between py-[4px]", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-end w-full pr-1", children: /* @__PURE__ */ jsx(IconChevronUp, { className: "h-[6px] w-[6px]" }) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-start w-full pl-1", children: /* @__PURE__ */ jsx("span", { className: "block", children: "control" }) })
      ] }),
      /* @__PURE__ */ jsxs(KBtn, { className: "", childrenClassName: "h-full justify-between py-[4px]", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-end w-full pr-1", children: /* @__PURE__ */ jsx(OptionKey, { className: "h-[6px] w-[6px]" }) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-start w-full pl-1", children: /* @__PURE__ */ jsx("span", { className: "block", children: "option" }) })
      ] }),
      /* @__PURE__ */ jsxs(
        KBtn,
        {
          className: "w-8",
          childrenClassName: "h-full justify-between py-[4px]",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex justify-end w-full pr-1", children: /* @__PURE__ */ jsx(IconCommand, { className: "h-[6px] w-[6px]" }) }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-start w-full pl-1", children: /* @__PURE__ */ jsx("span", { className: "block", children: "command" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(KBtn, { className: "w-[8.2rem]" }),
      /* @__PURE__ */ jsxs(
        KBtn,
        {
          className: "w-8",
          childrenClassName: "h-full justify-between py-[4px]",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex justify-start w-full pl-1", children: /* @__PURE__ */ jsx(IconCommand, { className: "h-[6px] w-[6px]" }) }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-start w-full pl-1", children: /* @__PURE__ */ jsx("span", { className: "block", children: "command" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(KBtn, { className: "", childrenClassName: "h-full justify-between py-[4px]", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-start w-full pl-1", children: /* @__PURE__ */ jsx(OptionKey, { className: "h-[6px] w-[6px]" }) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-start w-full pl-1", children: /* @__PURE__ */ jsx("span", { className: "block", children: "option" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-[4.9rem] mt-[2px] h-6 p-[0.5px] rounded-[4px] flex flex-col justify-end items-center", children: [
        /* @__PURE__ */ jsx(KBtn, { className: "w-6 h-3", children: /* @__PURE__ */ jsx(IconCaretUpFilled, { className: "h-[6px] w-[6px]" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex", children: [
          /* @__PURE__ */ jsx(KBtn, { className: "w-6 h-3", children: /* @__PURE__ */ jsx(IconCaretLeftFilled, { className: "h-[6px] w-[6px]" }) }),
          /* @__PURE__ */ jsx(KBtn, { className: "w-6 h-3", children: /* @__PURE__ */ jsx(IconCaretDownFilled, { className: "h-[6px] w-[6px]" }) }),
          /* @__PURE__ */ jsx(KBtn, { className: "w-6 h-3", children: /* @__PURE__ */ jsx(IconCaretRightFilled, { className: "h-[6px] w-[6px]" }) })
        ] })
      ] })
    ] })
  ] });
};
const KBtn = ({
  className,
  children,
  childrenClassName,
  backlit = true
}) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "p-[0.5px] rounded-[4px]",
        backlit && "bg-white/[0.2] shadow-xl shadow-white"
      ),
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center",
            className
          ),
          style: {
            boxShadow: "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
          },
          children: /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "text-neutral-200 text-[5px] w-full flex justify-center items-center flex-col",
                childrenClassName,
                backlit && "text-white"
              ),
              children
            }
          )
        }
      )
    }
  );
};
const Row = ({ children }) => {
  return /* @__PURE__ */ jsx("div", { className: "flex gap-[2px] mb-[2px] w-full flex-shrink-0", children });
};
const SpeakerGrid = () => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "flex px-[0.5px] gap-[2px] mt-2 h-40",
      style: {
        backgroundImage: "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
        backgroundSize: "3px 3px"
      }
    }
  );
};
const OptionKey = ({ className }) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      fill: "none",
      version: "1.1",
      id: "icon",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      className,
      children: [
        /* @__PURE__ */ jsx(
          "rect",
          {
            stroke: "currentColor",
            strokeWidth: 2,
            x: "18",
            y: "5",
            width: "10",
            height: "2"
          }
        ),
        /* @__PURE__ */ jsx(
          "polygon",
          {
            stroke: "currentColor",
            strokeWidth: 2,
            points: "10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
          }
        ),
        /* @__PURE__ */ jsx(
          "rect",
          {
            id: "_Transparent_Rectangle_",
            className: "st0",
            width: "32",
            height: "32",
            stroke: "none"
          }
        )
      ]
    }
  );
};
const AceternityLogo = () => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "66",
      height: "65",
      viewBox: "0 0 66 65",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-3 w-3 text-white",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696",
          stroke: "currentColor",
          strokeWidth: "15",
          strokeMiterlimit: "3.86874",
          strokeLinecap: "round"
        }
      )
    }
  );
};

const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "relative flex flex-col  h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900  text-slate-950 transition-bg",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50`,
              showRadialGradient && `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )
          }
        ) }),
        children
      ]
    }
  ) });
};

const $$Astro$2 = createAstro("https://luna-landing-rust.vercel.app/");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const lang = getLangFromUrl(Astro2.url);
  const data = await getLandingData({ lang });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": data.meta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data": data.headerData })} ${maybeRenderHead()}<main class="flex flex-col justify-center items-center"> ${renderComponent($$result2, "AuroraBackground", AuroraBackground, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/aurora-background", "client:component-export": "AuroraBackground" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, { "data": data.heroData })} ` })} <div class="container w-full mr-auto ml-auto pr-8 pl-8 mt-8"> ${renderComponent($$result2, "Services", $$Services, { "data": data.servicesData })} ${renderComponent($$result2, "Adventajes", $$Adventajes, { "data": data.adventajesData })} ${renderComponent($$result2, "Brands", $$Brands, { "data": data.brandsData })} ${renderComponent($$result2, "Performances", $$Performances, { "data": data.performances })} ${renderComponent($$result2, "Pricing", $$Pricing, { "data": data.pricingData })} </div> ${renderComponent($$result2, "MacbookScroll", MacbookScroll, { "src": "/img.png", "title": "Nos derni\xE8res r\xE9alisations", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/macbook-scroll", "client:component-export": "MacbookScroll" })} ${renderComponent($$result2, "Footer", $$Footer, { "data": data.footerData })} </main> ` })}`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/fr/index.astro", void 0);

const $$file$2 = "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/fr/index.astro";
const $$url$2 = "/fr";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://luna-landing-rust.vercel.app/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const lang = getLangFromUrl(Astro2.url);
  const data = await getLandingData({ lang });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": data.meta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data": data.headerData })} ${maybeRenderHead()}<main class="flex flex-col justify-center items-center"> <div class="container w-full mr-auto ml-auto pr-8 pl-8"> ${renderComponent($$result2, "Hero", $$Hero, { "data": data.heroData })} ${renderComponent($$result2, "Services", $$Services, { "data": data.servicesData })} ${renderComponent($$result2, "Adventajes", $$Adventajes, { "data": data.adventajesData })} ${renderComponent($$result2, "Brands", $$Brands, { "data": data.brandsData })} ${renderComponent($$result2, "Performances", $$Performances, { "data": data.performances })} ${renderComponent($$result2, "Pricing", $$Pricing, { "data": data.pricingData })} </div> ${renderComponent($$result2, "Footer", $$Footer, { "data": data.footerData })} </main> ` })}`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/pt/index.astro", void 0);

const $$file$1 = "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/pt/index.astro";
const $$url$1 = "/pt";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://luna-landing-rust.vercel.app/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = getLangFromUrl(Astro2.url);
  const data = await getLandingData({ lang });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": data.meta }, { "default": ($$result2) => renderTemplate` <meta http-equiv="refresh" content="0;url=/en/"> ${renderComponent($$result2, "Header", $$Header, { "data": data.headerData })} ${maybeRenderHead()}<main class="flex flex-col justify-center items-center"> <div class="container"> ${renderComponent($$result2, "Hero", $$Hero, { "data": data.heroData })} ${renderComponent($$result2, "Services", $$Services, { "data": data.servicesData })} ${renderComponent($$result2, "Adventajes", $$Adventajes, { "data": data.adventajesData })} ${renderComponent($$result2, "Brands", $$Brands, { "data": data.brandsData })} ${renderComponent($$result2, "Pricing", $$Pricing, { "data": data.pricingData })} </div> ${renderComponent($$result2, "Footer", $$Footer, { "data": data.footerData })} </main> ` })}`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/index.astro", void 0);

const $$file = "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$2 as a, index$1 as b, index as c, index$3 as i };
