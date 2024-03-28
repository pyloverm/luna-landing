import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_D1VOB1hM.mjs';
import { g as getLangFromUrl, a as getLandingData, $ as $$Layout, b as $$Header, c as $$Footer } from './About_CTfOKHJi.mjs';
import { $ as $$SideBySideProject } from './Projects_CyqhNyei.mjs';
/* empty css                             */

const $$Astro = createAstro("https://luna-landing-rust.vercel.app/");
const $$Projetos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projetos;
  const lang = getLangFromUrl(Astro2.url);
  const data = await getLandingData({ lang });
  const projets = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../content/projets/aurevendeneva.md": () => import('../aurevendeneva_Sn7Dp0Lq.mjs'),"../../content/projets/dmrepairs.md": () => import('../dmrepairs_BeBIaO6x.mjs'),"../../content/projets/electromoveis.md": () => import('../electromoveis_CCkLas18.mjs'),"../../content/projets/lapattedekiwi.md": () => import('../lapattedekiwi_CKRq_Wll.mjs'),"../../content/projets/talapetsworld.md": () => import('../talapetsworld_CmKSAdNP.mjs')}), () => "../../content/projets/*.md");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": data.meta, "data-astro-cid-xtkrc4yt": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data": data.headerData, "data-astro-cid-xtkrc4yt": true })} ${maybeRenderHead()}<main class="flex flex-col justify-center items-center" data-astro-cid-xtkrc4yt> <div class="container w-full mr-auto ml-auto pr-8 pl-8" data-astro-cid-xtkrc4yt> <section id="hero-section" class="flex justify-center mt-48" data-astro-cid-xtkrc4yt> <div class="" data-astro-cid-xtkrc4yt> <h1 class="text-4xl text-center font-semibold md:text-6xl" data-astro-cid-xtkrc4yt>
Nossos
<span class="text-primary" data-astro-cid-xtkrc4yt>Projetos </span> </h1> <ul class="my-20" data-astro-cid-xtkrc4yt> ${projets.map((projet, index) => renderTemplate`${renderComponent($$result2, "SideBySideProject", $$SideBySideProject, { "data": projet, "reversed": index % 2 == 0, "lang": "pt", "data-astro-cid-xtkrc4yt": true })}`)} </ul> </div> </section> </div> ${renderComponent($$result2, "Footer", $$Footer, { "data": data.footerData, "data-astro-cid-xtkrc4yt": true })} </main> ` })} `;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/pt/Projetos.astro", void 0);

const $$file = "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/pt/Projetos.astro";
const $$url = "/pt/Projetos";

export { $$Projetos as default, $$file as file, $$url as url };
