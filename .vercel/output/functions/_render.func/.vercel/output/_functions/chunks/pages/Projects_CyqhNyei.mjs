import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, f as renderComponent } from '../astro_D1VOB1hM.mjs';
import { d as $$Action, g as getLangFromUrl, a as getLandingData, $ as $$Layout, b as $$Header, c as $$Footer } from './About_CTfOKHJi.mjs';
/* empty css                             */

const $$Astro$1 = createAstro("https://luna-landing-rust.vercel.app/");
const $$SideBySideProject = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SideBySideProject;
  const { data, reversed, lang } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`flex justify-between gap-x-32 flex-col mb-20 md:mb-40  rounded-lg p-8 ${reversed ? "md:flex-row-reverse bg-blue-500/30 " : "md:flex-row"}`, "class")}> <div class="md:w-3/4"> <a${addAttribute(data.frontmatter.url, "href")} class="text-xl font-semibold"> <img${addAttribute(data.frontmatter.image, "src")}${addAttribute(data.frontmatter.alt, "alt")} class="w-fit"> </a> </div> <div class="flex flex-col md:w-5/6 gap-y-8"> <h3 class="text-xl md:text-4xl">${data.frontmatter.title}</h3> <p class="md:text-xl"> ${lang === "en" ? data.frontmatter.subtitleEn : lang === "fr" ? data.frontmatter.subtitle : lang === "pt" ? data.frontmatter.subtitlePt : ""} </p> <p> ${lang === "en" ? data.frontmatter.textEn : lang === "fr" ? data.frontmatter.text : lang === "pt" ? data.frontmatter.textPt : ""} </p> ${renderComponent($$result, "Action", $$Action, { "as": "a", "type": "button", "class": "bg-black text-white", "href": data.frontmatter.url }, { "default": ($$result2) => renderTemplate`${lang === "en" ? data.frontmatter.actionEn : lang === "fr" ? data.frontmatter.action : lang === "pt" ? data.frontmatter.actionPt : ""}` })} </div> </article>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/components/SideBySideProject.astro", void 0);

const $$Astro = createAstro("https://luna-landing-rust.vercel.app/");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const lang = getLangFromUrl(Astro2.url);
  const data = await getLandingData({ lang });
  const projets = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../content/projets/aurevendeneva.md": () => import('../aurevendeneva_Sn7Dp0Lq.mjs'),"../../content/projets/dmrepairs.md": () => import('../dmrepairs_BeBIaO6x.mjs'),"../../content/projets/electromoveis.md": () => import('../electromoveis_CCkLas18.mjs'),"../../content/projets/lapattedekiwi.md": () => import('../lapattedekiwi_CKRq_Wll.mjs'),"../../content/projets/talapetsworld.md": () => import('../talapetsworld_CmKSAdNP.mjs')}), () => "../../content/projets/*.md");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": data.meta, "data-astro-cid-hsm7kq5b": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data": data.headerData, "data-astro-cid-hsm7kq5b": true })} ${maybeRenderHead()}<main class="flex flex-col justify-center items-center" data-astro-cid-hsm7kq5b> <div class="container w-full mr-auto ml-auto pr-8 pl-8" data-astro-cid-hsm7kq5b> <section id="hero-section" class="flex justify-center mt-48" data-astro-cid-hsm7kq5b> <div class="" data-astro-cid-hsm7kq5b> <h1 class="text-4xl text-center font-semibold md:text-6xl" data-astro-cid-hsm7kq5b>
Nos
<span class="text-primary" data-astro-cid-hsm7kq5b>Projets </span> </h1> <ul class="my-20" data-astro-cid-hsm7kq5b> ${projets.map((projet, index) => renderTemplate`${renderComponent($$result2, "SideBySideProject", $$SideBySideProject, { "data": projet, "reversed": index % 2 == 0, "lang": "en", "data-astro-cid-hsm7kq5b": true })}`)} </ul> </div> </section> </div> ${renderComponent($$result2, "Footer", $$Footer, { "data": data.footerData, "data-astro-cid-hsm7kq5b": true })} </main> ` })} `;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/en/Projects.astro", void 0);

const $$file = "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/en/Projects.astro";
const $$url = "/en/Projects";

const Projects = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SideBySideProject as $, Projects as P };
