import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, e as renderSlot, f as renderComponent } from '../astro_D1VOB1hM.mjs';
import { e as $$Icon, d as $$Action, g as getLangFromUrl, a as getLandingData, $ as $$Layout, b as $$Header, c as $$Footer } from './About_CTfOKHJi.mjs';
import 'clsx';
/* empty css                               */

const $$Astro$a = createAstro("https://luna-landing-rust.vercel.app/");
const $$SectionTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const baseClass = "text-2xl text-center md:text-5xl font-semibold";
  const { class: className = baseClass } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2${addAttribute(className, "class")}>${renderSlot($$result, $$slots["default"])}</h2>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/components/SectionTitle.astro", void 0);

const $$Astro$9 = createAstro("https://luna-landing-rust.vercel.app/");
const $$IconWrapper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$IconWrapper;
  return renderTemplate`${maybeRenderHead()}<div class="bg-primary h-10 md:h-12 md:p-3 md:w-12 p-2 rounded-full text-white w-10 flex justify-center items-center"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/components/IconWrapper.astro", void 0);

const ASSET_PREFIX = "/";

const $$Astro$8 = createAstro("https://luna-landing-rust.vercel.app/");
const $$SideBySide = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SideBySide;
  const { data, reversed } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`flex justify-between gap-x-32 flex-col mb-20 md:mb-40 ${reversed ? "md:flex-row-reverse" : "md:flex-row"}`, "class")}> <div class="md:w-3/4"> <img${addAttribute(ASSET_PREFIX + data.img, "src")}${addAttribute(data.imageAlt, "alt")} class="w-fit"> </div> <div class="flex flex-col md:w-5/6 gap-y-8"> <h3 class="text-xl md:text-4xl">${data.title}</h3> <p class="md:text-xl">${data.description}</p> <ul class="flex flex-col gap-y-8"> ${data.checks.map((check) => renderTemplate`<li class="flex flex-row items-center gap-x-4 md:text-2xl"> ${renderComponent($$result, "IconWrapper", $$IconWrapper, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "icon": "CheckIcon" })} ` })} ${check} </li>`)} </ul> </div> </article>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/components/SideBySide.astro", void 0);

const $$Astro$7 = createAstro("https://luna-landing-rust.vercel.app/");
const $$Adventajes = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Adventajes;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="adventajes-section" class="flex flex-col mb-20 gap-y-28"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, {}, { "default": ($$result2) => renderTemplate`${data.title}` })} <div> ${data.adventajes.map((adventaje, idx) => renderTemplate`${renderComponent($$result, "SideBySide", $$SideBySide, { "data": adventaje, "reversed": (idx + 1) % 2 === 0 })}`)} </div> </section>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/sections/Adventajes.astro", void 0);

const $$Astro$6 = createAstro("https://luna-landing-rust.vercel.app/");
const $$Brands = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Brands;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col justify-between gap-y-10 md:gap-y-0 md:gap-x-7 md:flex-row mb-20 w-full"> <div class="w-11/12 flex flex-col gap-y-6"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, {}, { "default": ($$result2) => renderTemplate`${data.title}` })} <p class="text-lg text-center md:text-start md:text-xl"> ${data.description} </p> </div> <div class="grid grid-cols-2 md:grid-cols-3 gap-y-8 w-full justify-items-center"> ${data.brands.map((brand) => renderTemplate`<div class="md:grayscale hover:grayscale-0 hover:scale-110 transition"> ${renderComponent($$result, "Action", $$Action, { "as": "a", "href": brand.href, "title": brand.icon, "target": "_blank" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "icon": brand.icon })} ` })} </div>`)} </div> </section>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/sections/Brands.astro", void 0);

const $$Astro$5 = createAstro("https://luna-landing-rust.vercel.app/");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Hero;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="hero-section" class="flex justify-center mt-48 h-screen" data-astro-cid-shwxrd6l> <div class="md:w-2/3" data-astro-cid-shwxrd6l> <h1 class="text-4xl text-center font-semibold md:text-6xl" data-astro-cid-shwxrd6l> ${data.title} <span class="text-primary" data-astro-cid-shwxrd6l> ${data.highlightedTitle} </span> </h1> <h2 class="mt-10 text-lg text-center opacity-80 md:text-2xl" data-astro-cid-shwxrd6l> ${data.subTitle} </h2> <div class="flex justify-evenly mt-10" data-astro-cid-shwxrd6l> ${renderComponent($$result, "Action", $$Action, { "as": "a", "type": "button", "class": "bg-black text-white", "href": data.primaryCta.href, "data-astro-cid-shwxrd6l": true }, { "default": ($$result2) => renderTemplate`${data.primaryCta.label}` })} ${renderComponent($$result, "Action", $$Action, { "as": "a", "class": "bg-transparent text-black border border-black", "type": "button", "href": data.secondaryCta.href, "data-astro-cid-shwxrd6l": true }, { "default": ($$result2) => renderTemplate`${data.secondaryCta.label}` })} </div> <div class="flex justify-center" data-astro-cid-shwxrd6l> ${renderComponent($$result, "Action", $$Action, { "as": "a", "class": "flex justify-center items-center animate-bounce border-2 border-transparent bg-primary text-white rounded-full w-14 h-14 mt-32 hover:bg-white hover:text-primary hover:border-primary transition", "href": "#services-section", "title": "arrow down icon", "data-astro-cid-shwxrd6l": true }, { "default": ($$result2) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8" data-astro-cid-shwxrd6l> <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" data-astro-cid-shwxrd6l></path> </svg> ` })} </div> </div> </section> `;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/sections/Hero.astro", void 0);

const $$Astro$4 = createAstro("https://luna-landing-rust.vercel.app/");
const $$Performances = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Performances;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="my-40"> <div class="w-full flex flex-col gap-y-6"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, {}, { "default": ($$result2) => renderTemplate`${data.title}` })} <p class="text-lg text-center md:text-start md:text-xl">${data.subtitle}</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8" id="perfs"> <div class="p-4 bg-white rounded shadow flex flex-col-reverse justify-center"> <h2 class="text-lg font-semibold text-gray-800 text-center"> ${data.lighthouse.performance} </h2> <div class="flex justify-center gap-4 items-center"> <div class="mt-2"> <svg class="w-16 h-16" viewBox="0 0 36 36"> <circle cx="18" cy="18" r="15" stroke="#e5e7eb" stroke-width="3" fill="none"></circle> <circle cx="18" cy="18" r="15" stroke="rgb(0, 204, 102)" stroke-width="3" fill="none" id="performance-circle" stroke-dasharray="94.2 94.2" stroke-dashoffset="94.2"></circle> </svg> <p id="performance-score-text" class="relative text-center bottom-11">
0
</p> </div> </div> </div> <div class="p-4 bg-white rounded shadow flex flex-col-reverse justify-center"> <h2 class="text-lg font-semibold text-gray-800 text-center"> ${data.lighthouse.accessibility} </h2> <div class="flex justify-center gap-4 items-center"> <div class="mt-2"> <svg class="w-16 h-16" viewBox="0 0 36 36"> <circle cx="18" cy="18" r="15" stroke="#e5e7eb" stroke-width="3" fill="none"></circle> <circle cx="18" cy="18" r="15" stroke="rgb(0, 204, 102)" stroke-width="3" fill="none" id="accessibility-circle" stroke-dasharray="94.2 94.2" stroke-dashoffset="94.2"></circle> </svg> <p id="accesibility-score-text" class="relative text-center bottom-11">
0
</p> </div> </div> </div> <div class="p-4 bg-white rounded shadow flex flex-col-reverse justify-center"> <h2 class="text-lg font-semibold text-gray-800 text-center"> ${data.lighthouse.bestPractices} </h2> <div class="flex justify-center gap-4 items-center"> <div class="mt-2"> <svg class="w-16 h-16" viewBox="0 0 36 36"> <circle cx="18" cy="18" r="15" stroke="#e5e7eb" stroke-width="3" fill="none"></circle> <circle cx="18" cy="18" r="15" stroke="rgb(0, 204, 102)" stroke-width="3" fill="none" id="best-practices-circle" stroke-dasharray="94.2 94.2" stroke-dashoffset="94.2"></circle> </svg> <p id="best-practices-score-text" class="relative text-center bottom-11">
0
</p> </div> </div> </div> <div class="p-4 bg-white rounded shadow flex flex-col-reverse justify-center"> <h2 class="text-lg font-semibold text-gray-800 text-center"> ${data.lighthouse.seo} </h2> <div class="flex justify-center gap-4 items-center"> <div class="mt-2"> <svg class="w-16 h-16" viewBox="0 0 36 36"> <circle cx="18" cy="18" r="15" stroke="#e5e7eb" stroke-width="3" fill="none"></circle> <circle cx="18" cy="18" r="15" stroke="rgb(0, 204, 102)" stroke-width="3" fill="none" id="seo-circle" stroke-dasharray="94.2 94.2" stroke-dashoffset="94.2"></circle> </svg> <p id="seo-score-text" class="relative text-center bottom-11">0</p> </div> </div> </div> </div> </div> `;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/sections/Performances.astro", void 0);

const $$Astro$3 = createAstro("https://luna-landing-rust.vercel.app/");
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Card;
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col border md:max-w-xs xl:max-w-sm rounded-lg shadow px-5 py-5 gap-y-10"> ${renderSlot($$result, $$slots["default"])} </article>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/components/Card.astro", void 0);

const $$Astro$2 = createAstro("https://luna-landing-rust.vercel.app/");
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Pricing;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mt-48" id="prices"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, {}, { "default": ($$result2) => renderTemplate`${data.title}` })} <div class="my-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 place-items-center"> ${data.tiers.map((tier) => renderTemplate`${renderComponent($$result, "Card", $$Card, {}, { "default": ($$result2) => renderTemplate` <header class="flex flex-col justify-center gap-y-3"> <h3 class="text-4xl text-center font-semibold">${tier.title}</h3> <p class="text-xl text-center opacity-90">${tier.description}</p> </header> <section class="flex justify-center"> <h4 class="text-6xl font-semibold"> ${tier.price.amount} ${tier.price.period && renderTemplate`<span class="font-normal text-xl opacity-85"> ${tier.price.period} </span>`} </h4> </section> <section class="flex justify-start"> <ul class="flex flex-col gap-y-4 text-lg"> ${tier.features.map((feature) => renderTemplate`<li class="flex flex-row px-7 gap-x-1"> <span> ${renderComponent($$result2, "Icon", $$Icon, { "class": "w-6 h-auto text-primary", "icon": "CheckIcon" })} </span> <p class="text-center">${feature}</p> </li>`)} ${tier.featuresMissing?.map((feature) => renderTemplate`<li class="flex flex-row px-7 gap-x-1"> <span> ${renderComponent($$result2, "Icon", $$Icon, { "class": "w-6 h-auto text-red-500", "icon": "MissingIcon" })} </span> <p class="text-center">${feature}</p> </li>`)} </ul> </section> <footer class="flex justify-center"> ${renderComponent($$result2, "Action", $$Action, { "as": "a", "class": "bg-primary text-white w-72", "type": "button", "href": data.path }, { "default": ($$result3) => renderTemplate`${tier.cta}` })} </footer> ` })}`)} </div> </section>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/sections/Pricing.astro", void 0);

const $$Astro$1 = createAstro("https://luna-landing-rust.vercel.app/");
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Services;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="services-section" class="flex flex-col mb-60 gap-y-28"> ${renderComponent($$result, "SectionTitle", $$SectionTitle, {}, { "default": ($$result2) => renderTemplate`${data.title}` })} <div class="grid md:grid-cols-2 gap-y-10 justify-items-center"> ${data.services.map((service) => renderTemplate`<article class="flex gap-x-6 md:gap-x-12 md:w-[550px]"> <div> ${renderComponent($$result, "IconWrapper", $$IconWrapper, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "icon": service.icon })} ` })} </div> <section> <h3 class="text-xl font-medium md:text-4xl mb-3"> ${service.title} </h3> <p class="text-pretty opacity-90 md:text-lg"> ${service.description} </p> </section> </article>`)} </div> </section>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/sections/Services.astro", void 0);

const $$Astro = createAstro("https://luna-landing-rust.vercel.app/");
const $$IndexCopy = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$IndexCopy;
  const lang = getLangFromUrl(Astro2.url);
  const data = await getLandingData({ lang });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": data.meta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data": data.headerData })} ${maybeRenderHead()}<main class="flex flex-col justify-center items-center"> <div class="container w-full mr-auto ml-auto pr-8 pl-8"> ${renderComponent($$result2, "Hero", $$Hero, { "data": data.heroData })} ${renderComponent($$result2, "Services", $$Services, { "data": data.servicesData })} ${renderComponent($$result2, "Adventajes", $$Adventajes, { "data": data.adventajesData })} ${renderComponent($$result2, "Brands", $$Brands, { "data": data.brandsData })} ${renderComponent($$result2, "Performances", $$Performances, { "data": data.performances })} ${renderComponent($$result2, "Pricing", $$Pricing, { "data": data.pricingData })} </div> ${renderComponent($$result2, "Footer", $$Footer, { "data": data.footerData })} </main> ` })}`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/en/index copy.astro", void 0);

const $$file = "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/en/index copy.astro";
const $$url = "/en/index copy";

const index_copy = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$IndexCopy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Hero as $, $$Services as a, $$Adventajes as b, $$Brands as c, $$Pricing as d, $$Performances as e, index_copy as i };
