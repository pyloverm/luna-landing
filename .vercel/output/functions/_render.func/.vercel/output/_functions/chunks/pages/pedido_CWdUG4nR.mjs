import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_D1VOB1hM.mjs';
import { g as getLangFromUrl, a as getLandingData, $ as $$Layout, b as $$Header, c as $$Footer } from './About_CTfOKHJi.mjs';

const $$Astro = createAstro("https://luna-landing-rust.vercel.app/");
const $$Pedido = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pedido;
  const lang = getLangFromUrl(Astro2.url);
  const data = await getLandingData({ lang });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": data.meta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data": data.headerData })} ${maybeRenderHead()}<main class="flex flex-col justify-center items-center"> <div class="container w-full mr-auto ml-auto pr-8 pl-8"> <section id="hero-section" class="flex justify-center mt-48"> <div class="md:w-2/3"> <h1 class="text-4xl text-center font-semibold md:text-6xl">
Explique-nos as suas necessidades
<span class="text-primary">iremos oferecer soluções para você
</span> </h1> <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd40bzwDTfDgsvbP5g55tYXs778MfNoCikdMfGmNDiKfBEROg/viewform?embedded=true&hl=pt" class="w-full mt-8 h-[2000px]" height="2000px" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe> </div> </section> </div> ${renderComponent($$result2, "Footer", $$Footer, { "data": data.footerData })} </main> ` })}`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/pt/pedido.astro", void 0);

const $$file = "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/pt/pedido.astro";
const $$url = "/pt/pedido";

export { $$Pedido as default, $$file as file, $$url as url };
