import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_D1VOB1hM.mjs';
import { g as getLangFromUrl, a as getLandingData, $ as $$Layout, b as $$Header, c as $$Footer } from './About_CTfOKHJi.mjs';

const $$Astro = createAstro("https://luna-landing-rust.vercel.app/");
const $$Request = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Request;
  const lang = getLangFromUrl(Astro2.url);
  const data = await getLandingData({ lang });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": data.meta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data": data.headerData })} ${maybeRenderHead()}<main class="flex flex-col justify-center items-center"> <div class="container w-full mr-auto ml-auto pr-8 pl-8"> <section id="hero-section" class="flex justify-center mt-48"> <div class="md:w-2/3"> <h1 class="text-4xl text-center font-semibold md:text-6xl">
Tell us about your needs
<span class="text-primary">we will propose solutions to you </span> </h1> <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeLjGpI4oWqkW5v6BqrUtoQNVwLyFMu_lgEbVez7Nz9pmm6IA/viewform?embedded=true&hl=en" class="w-full mt-8 h-[2000px]" height="2000px" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe> </div> </section> </div> ${renderComponent($$result2, "Footer", $$Footer, { "data": data.footerData })} </main> ` })}`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/en/request.astro", void 0);

const $$file = "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/en/request.astro";
const $$url = "/en/request";

export { $$Request as default, $$file as file, $$url as url };
