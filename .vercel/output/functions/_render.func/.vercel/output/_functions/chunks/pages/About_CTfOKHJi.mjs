import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, f as renderComponent, g as renderHead, u as unescapeHTML, h as addAttribute } from '../astro_D1VOB1hM.mjs';
import 'clsx';
/* empty css                          */

const defaultLang = "en";
const ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.twitter": "Twitter"
  },
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.advantages": "Avantages"
  },
  pt: {
    "nav.home": "Página inicial",
    "nav.about": "Sobre",
    "nav.advantages": "Vantagens"
  }
};

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui)
    return lang;
  return defaultLang;
}

const $$Astro$u = createAstro("https://luna-landing-rust.vercel.app/");
const $$Background = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$Background;
  return renderTemplate`${maybeRenderHead()}<div class="absolute top-0 z-[-2] h-screen w-full bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/components/Background.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$t = createAstro("https://luna-landing-rust.vercel.app/");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$Layout;
  const { meta } = Astro2.props;
  const ldJson = JSON.stringify(meta.ldJson);
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate(_a || (_a = __template(['<html class="scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent scroll-smooth"', "> <head><meta", "><title>", '</title><meta name="description"', '><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="canonical"', '><script type="application/ld+json">', "</script>", '</head> <body class="bg-white"> ', " ", "  </body></html>"])), addAttribute(lang, "lang"), addAttribute(meta.charset ?? "UTF-8", "charset"), meta.title, addAttribute(meta.description, "content"), addAttribute("https://luna-landing-rust.vercel.app/", "href"), unescapeHTML(ldJson), renderHead(), renderComponent($$result, "Background", $$Background, {}), renderSlot($$result, $$slots["default"]));
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/layouts/Layout.astro", void 0);

const $$Astro$s = createAstro("https://luna-landing-rust.vercel.app/");
const $$Action = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$Action;
  const { as: Tag, class: className, type, ...props } = Astro2.props;
  const defaultStyles = {
    button: "px-3 py-1 text-sm md:text-base md:px-6 md:py-2 rounded-lg text-center font-semibold hover:scale-110 hover:opacity-85 transition inline-block",
    text: "hover:opacity-50 hover:scale-105",
    icon: "text-white hover:opacity-50 hover:scale-105",
    default: ""
  };
  const baseClass = defaultStyles[type] ?? "";
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": [baseClass, className], ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/components/Action.astro", void 0);

const $$Astro$r = createAstro("https://luna-landing-rust.vercel.app/");
const $$CheckIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$CheckIcon;
  const baseClass = "h-10 md:h-12 md:w-12 w-10";
  const { class: className = baseClass } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${addAttribute(className, "class")}> <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path> </svg>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/icons/commons/CheckIcon.astro", void 0);

const $$Astro$q = createAstro("https://luna-landing-rust.vercel.app/");
const $$ConfigIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$ConfigIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 md:h-12 md:w-12 w-10"> <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path> </svg>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/icons/commons/ConfigIcon.astro", void 0);

const $$Astro$p = createAstro("https://luna-landing-rust.vercel.app/");
const $$DevIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$DevIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 md:h-12 md:w-12 w-10"> <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"></path> </svg>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/icons/commons/DevIcon.astro", void 0);

const $$Astro$o = createAstro("https://luna-landing-rust.vercel.app/");
const $$FileIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$FileIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 md:h-12 md:w-12 w-10"> <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"></path> </svg>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/icons/commons/FileIcon.astro", void 0);

const $$Astro$n = createAstro("https://luna-landing-rust.vercel.app/");
const $$MissingIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$MissingIcon;
  const baseClass = "h-10 md:h-12 md:w-12 w-10";
  const { class: className = baseClass } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${addAttribute(className, "class")}> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path> </svg>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/icons/commons/MissingIcon.astro", void 0);

const $$Astro$m = createAstro("https://luna-landing-rust.vercel.app/");
const $$PlanetIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$PlanetIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 md:h-12 md:w-12 w-10"> <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"></path> </svg>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/icons/commons/PlanetIcon.astro", void 0);

const $$Astro$l = createAstro("https://luna-landing-rust.vercel.app/");
const $$EmailIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$EmailIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/icons/socials/EmailIcon.astro", void 0);

const $$Astro$k = createAstro("https://luna-landing-rust.vercel.app/");
const $$FacebookIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$FacebookIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path> </svg>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/icons/socials/FacebookIcon.astro", void 0);

const $$Astro$j = createAstro("https://luna-landing-rust.vercel.app/");
const $$GithubIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$GithubIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path> </svg>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/icons/socials/GithubIcon.astro", void 0);

const $$Astro$i = createAstro("https://luna-landing-rust.vercel.app/");
const $$InstagramIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$InstagramIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path> </svg>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/icons/socials/InstagramIcon.astro", void 0);

const $$Astro$h = createAstro("https://luna-landing-rust.vercel.app/");
const $$TwitterIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$TwitterIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"> <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path> </svg>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/icons/socials/TwitterIcon.astro", void 0);

const $$Astro$g = createAstro("https://luna-landing-rust.vercel.app/");
const $$NetlifyIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$NetlifyIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="h-20 w-20" viewBox="0 0 128 128"> <path d="M80.46 82.605h-8.777l-.734-.733V61.326c0-3.656-1.436-6.489-5.844-6.588-2.269-.06-4.864 0-7.638.11l-.416.425v26.589l-.733.733H47.54l-.733-.733V46.764l.733-.733h19.753c7.677 0 13.899 6.22 13.899 13.898v21.943l-.733.733Z" fill="#014847"></path><path d="M58.942 119.902v-26.33l.733-.734h8.797l.733.733v26.331l-.733.733h-8.796zm0-84.838V8.734L59.675 8h8.797l.733.733v26.331l-.733.733h-8.796zm68.335 34.385H92.169l-.733-.733V59.92l.733-.733h35.108l.733.733v8.797zm-91.436 0H.733L0 68.716V59.92l.733-.733h35.108l.733.733v8.797zm-8.49-35.633v-1.209l6.034-6.033h1.208l9.223 9.223v6.39l-.852.852h-6.39zm7.242 68.235h-1.208l-6.033-6.033v-1.209l9.223-9.222h6.39l.851.851v6.39z" fill="#05bdba"></path> </svg>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/icons/techs/NetlifyIcon.astro", void 0);

const $$Astro$f = createAstro("https://luna-landing-rust.vercel.app/");
const $$NextjsIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$NextjsIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 256 256" version="1.1" class="h-20 w-20" preserveAspectRatio="xMidYMid"> <g> <path d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z" fill="#000000"></path> </g> </svg>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/icons/techs/NextjsIcon.astro", void 0);

const $$Astro$e = createAstro("https://luna-landing-rust.vercel.app/");
const $$PostgresqlIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$PostgresqlIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 0 25.6 25.6" width="64" class="h-20 w-20"><g fill="none" stroke="#fff"><path d="M18.983 18.636c.163-1.357.114-1.555 1.124-1.336l.257.023c.777.035 1.793-.125 2.4-.402 1.285-.596 2.047-1.592.78-1.33-2.89.596-3.1-.383-3.1-.383 3.053-4.53 4.33-10.28 3.227-11.687-3.004-3.84-8.205-2.024-8.292-1.976l-.028.005c-.57-.12-1.2-.19-1.93-.2-1.308-.02-2.3.343-3.054.914 0 0-9.277-3.822-8.846 4.807.092 1.836 2.63 13.9 5.66 10.25C8.29 15.987 9.36 14.86 9.36 14.86c.53.353 1.167.533 1.834.468l.052-.044a2.01 2.01 0 0 0 .021.518c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.162l-.046.183c.306.245.285 1.76.33 2.842s.116 2.093.337 2.688.48 2.13 2.53 1.7c1.713-.367 3.023-.896 3.143-5.81" fill="#000" stroke="#000" stroke-linecap="butt" stroke-width="2.149" class="D"></path><path d="M23.535 15.6c-2.89.596-3.1-.383-3.1-.383 3.053-4.53 4.33-10.28 3.228-11.687-3.004-3.84-8.205-2.023-8.292-1.976l-.028.005a10.31 10.31 0 0 0-1.929-.201c-1.308-.02-2.3.343-3.054.914 0 0-9.278-3.822-8.846 4.807.092 1.836 2.63 13.9 5.66 10.25C8.29 15.987 9.36 14.86 9.36 14.86c.53.353 1.167.533 1.834.468l.052-.044a2.02 2.02 0 0 0 .021.518c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.162l-.046.183c.306.245.52 1.593.484 2.815s-.06 2.06.18 2.716.48 2.13 2.53 1.7c1.713-.367 2.6-1.32 2.725-2.906.088-1.128.286-.962.3-1.97l.16-.478c.183-1.53.03-2.023 1.085-1.793l.257.023c.777.035 1.794-.125 2.39-.402 1.285-.596 2.047-1.592.78-1.33z" fill="#336791" stroke="none"></path><g class="E"><g class="B"><path d="M12.814 16.467c-.08 2.846.02 5.712.298 6.4s.875 2.05 2.926 1.612c1.713-.367 2.337-1.078 2.607-2.647l.633-5.017M10.356 2.2S1.072-1.596 1.504 7.033c.092 1.836 2.63 13.9 5.66 10.25C8.27 15.95 9.27 14.907 9.27 14.907m6.1-13.4c-.32.1 5.164-2.005 8.282 1.978 1.1 1.407-.175 7.157-3.228 11.687" class="C"></path><path d="M20.425 15.17s.2.98 3.1.382c1.267-.262.504.734-.78 1.33-1.054.49-3.418.615-3.457-.06-.1-1.745 1.244-1.215 1.147-1.652-.088-.394-.69-.78-1.086-1.744-.347-.84-4.76-7.29 1.224-6.333.22-.045-1.56-5.7-7.16-5.782S7.99 8.196 7.99 8.196" stroke-linejoin="bevel"></path></g><g class="C"><path d="M11.247 15.768c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.163.35-.49-.002-1.27-.482-1.468-.232-.096-.542-.216-.94.23z"></path><path d="M11.196 15.753c-.08-.513.168-1.122.433-1.836.398-1.07 1.316-2.14.582-5.537-.547-2.53-4.22-.527-4.22-.184s.166 1.74-.06 3.365c-.297 2.122 1.35 3.916 3.246 3.733" class="B"></path></g></g><g fill="#fff" class="D"><path d="M10.322 8.145c-.017.117.215.43.516.472s.558-.202.575-.32-.215-.246-.516-.288-.56.02-.575.136z" stroke-width=".239"></path><path d="M19.486 7.906c.016.117-.215.43-.516.472s-.56-.202-.575-.32.215-.246.516-.288.56.02.575.136z" stroke-width=".119"></path></g><path d="M20.562 7.095c.05.92-.198 1.545-.23 2.524-.046 1.422.678 3.05-.413 4.68" class="B C E"></path></g></svg>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/icons/techs/PostgresqlIcon.astro", void 0);

const $$Astro$d = createAstro("https://luna-landing-rust.vercel.app/");
const $$ReactIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ReactIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="h-20 w-20" viewBox="0 0 128 128"> <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g> </svg>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/icons/techs/ReactIcon.astro", void 0);

const $$Astro$c = createAstro("https://luna-landing-rust.vercel.app/");
const $$SolidIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$SolidIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="h-20 w-20" viewBox="0 0 128 128"> <defs><linearGradient id="a" x1="27.5" x2="152" y1="3" y2="63.5" gradientTransform="translate(-3.22 1.507) scale(.80503)" gradientUnits="userSpaceOnUse"><stop offset=".1" stop-color="#76b3e1"></stop><stop offset=".3" stop-color="#dcf2fd"></stop><stop offset="1" stop-color="#76b3e1"></stop></linearGradient><linearGradient id="b" x1="95.8" x2="74" y1="32.6" y2="105.2" gradientTransform="translate(-3.22 1.507) scale(.80503)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#76b3e1"></stop><stop offset=".5" stop-color="#4377bb"></stop><stop offset="1" stop-color="#1f3b77"></stop></linearGradient><linearGradient id="c" x1="18.4" x2="144.3" y1="64.2" y2="149.8" gradientTransform="translate(-3.22 1.507) scale(.80503)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#315aa9"></stop><stop offset=".5" stop-color="#518ac8"></stop><stop offset="1" stop-color="#315aa9"></stop></linearGradient><linearGradient id="d" x1="75.2" x2="24.4" y1="74.5" y2="260.8" gradientTransform="translate(-3.22 1.507) scale(.80503)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4377bb"></stop><stop offset=".5" stop-color="#1a336b"></stop><stop offset="1" stop-color="#1a336b"></stop></linearGradient></defs><path fill="#76b3e1" d="M128 29.683S85.333-1.713 52.327 5.532l-2.415.805c-4.83 1.61-8.855 4.025-11.27 7.245l-1.61 2.415-12.076 20.931 20.93 4.025c8.856 5.636 20.127 8.05 30.592 5.636l37.031 7.245z"></path><path fill="url(#a)" d="M128 29.683S85.333-1.713 52.327 5.532l-2.415.805c-4.83 1.61-8.855 4.025-11.27 7.245l-1.61 2.415-12.076 20.931 20.93 4.025c8.856 5.636 20.127 8.05 30.592 5.636l37.031 7.245z" opacity=".3"></path><path fill="#518ac8" d="m38.642 29.683-3.22.805C21.735 34.513 17.71 47.394 24.955 58.664c8.05 10.465 24.956 16.1 38.641 12.076l49.912-16.906S70.843 22.438 38.642 29.683z"></path><path fill="url(#b)" d="m38.642 29.683-3.22.805C21.735 34.513 17.71 47.394 24.955 58.664c8.05 10.465 24.956 16.1 38.641 12.076l49.912-16.906S70.843 22.438 38.642 29.683z" opacity=".3"></path><path fill="url(#c)" d="M104.654 65.91a36.226 36.226 0 0 0-38.641-12.076L16.1 69.934 0 98.111l90.164 15.295 16.1-28.981c3.22-5.635 2.415-12.075-1.61-18.516z"></path><path fill="url(#d)" d="M88.553 94.085A36.226 36.226 0 0 0 49.912 82.01L0 98.11s42.667 32.202 75.673 24.152l2.415-.806c13.686-4.025 18.516-16.905 10.465-27.37z"></path> </svg>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/icons/techs/SolidIcon.astro", void 0);

const $$Astro$b = createAstro("https://luna-landing-rust.vercel.app/");
const $$StripeIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$StripeIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64" fill="#6772e5" class="h-20 w-20"><path d="M111.328 15.602c0-4.97-2.415-8.9-7.013-8.9s-7.423 3.924-7.423 8.863c0 5.85 3.32 8.8 8.036 8.8 2.318 0 4.06-.528 5.377-1.26V19.22a10.246 10.246 0 0 1-4.764 1.075c-1.9 0-3.556-.67-3.774-2.943h9.497a39.64 39.64 0 0 0 .063-1.748zm-9.606-1.835c0-2.186 1.35-3.1 2.56-3.1s2.454.906 2.454 3.1zM89.4 6.712a5.434 5.434 0 0 0-3.801 1.509l-.254-1.208h-4.27v22.64l4.85-1.032v-5.488a5.434 5.434 0 0 0 3.444 1.265c3.472 0 6.64-2.792 6.64-8.957.003-5.66-3.206-8.73-6.614-8.73zM88.23 20.1a2.898 2.898 0 0 1-2.288-.906l-.03-7.2a2.928 2.928 0 0 1 2.315-.96c1.775 0 2.998 2 2.998 4.528.003 2.593-1.198 4.546-2.995 4.546zM79.25.57l-4.87 1.035v3.95l4.87-1.032z" fill-rule="evenodd"></path><path d="M74.38 7.035h4.87V24.04h-4.87z"></path><path d="M69.164 8.47l-.302-1.434h-4.196V24.04h4.848V12.5c1.147-1.5 3.082-1.208 3.698-1.017V7.038c-.646-.232-2.913-.658-4.048 1.43zm-9.73-5.646L54.698 3.83l-.02 15.562c0 2.87 2.158 4.993 5.038 4.993 1.585 0 2.756-.302 3.405-.643v-3.95c-.622.248-3.683 1.138-3.683-1.72v-6.9h3.683V7.035h-3.683zM46.3 11.97c0-.758.63-1.05 1.648-1.05a10.868 10.868 0 0 1 4.83 1.25V7.6a12.815 12.815 0 0 0-4.83-.888c-3.924 0-6.557 2.056-6.557 5.488 0 5.37 7.375 4.498 7.375 6.813 0 .906-.78 1.186-1.863 1.186-1.606 0-3.68-.664-5.307-1.55v4.63a13.461 13.461 0 0 0 5.307 1.117c4.033 0 6.813-1.992 6.813-5.485 0-5.796-7.417-4.76-7.417-6.943zM13.88 9.515c0-1.37 1.14-1.9 2.982-1.9A19.661 19.661 0 0 1 25.6 9.876v-8.27A23.184 23.184 0 0 0 16.862.001C9.762.001 5 3.72 5 9.93c0 9.716 13.342 8.138 13.342 12.326 0 1.638-1.4 2.146-3.37 2.146-2.905 0-6.657-1.202-9.6-2.802v8.378A24.353 24.353 0 0 0 14.973 32C22.27 32 27.3 28.395 27.3 22.077c0-10.486-13.42-8.613-13.42-12.56z" fill-rule="evenodd"></path></svg>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/icons/techs/StripeIcon.astro", void 0);

const $$Astro$a = createAstro("https://luna-landing-rust.vercel.app/");
const $$SvelteIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$SvelteIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="h-20 w-20" viewBox="0 0 128 128"> <path d="M 110.43093,16.935847 C 98.552474,-0.076153 75.089104,-5.118154 58.130818,5.695846 l -29.793,19.000001 c -4.030441,2.529 -7.488786,5.871 -10.15468,9.814 -2.665895,3.943 -4.479469,8.399 -5.325138,13.083 a 25.478172,30.64 0 0 0 -0.572094,6.396 c 0.0183,5.831 1.446866,11.571 4.163485,16.729995 -2.546986,3.87201 -4.285721,8.22 -5.110602,12.78201 a 25.347621,30.483 0 0 0 0.345086,14.41199 c 1.072679,4.732998 3.078336,9.203998 5.900559,13.151998 11.877618,17.011 35.393374,22.053 52.299272,11.24 l 29.762238,-19.001 c 4.027946,-2.532 7.482126,-5.877998 10.141386,-9.824998 2.65841,-3.947 4.46282,-8.40699 5.29686,-13.093 0.3825,-2.107 0.57458,-4.244 0.5721,-6.386 -0.007,-5.81999 -1.41778,-11.550995 -4.11194,-16.708995 2.54616,-3.869 4.28489,-8.213 5.11143,-12.771 0.36921,-2.109 0.55713,-4.245 0.56212,-6.386 0.002,-7.595 -2.37152,-15 -6.78697,-21.178 z" fill="#ff3e00" id="path598" style="stroke-width:0.911885"></path><path d="m 55.218941,112.66204 a 28.463375,34.23 0 0 1 -5.953776,0.76 c -3.820895,0.001 -7.585244,-0.925 -10.970416,-2.7 -3.384341,-1.774 -6.288887,-4.343 -8.464177,-7.487 -2.655917,-3.716 -4.082827,-8.171 -4.080332,-12.74 a 15.657767,18.83 0 0 1 0.332613,-3.833 15.424937,18.55 0 0 1 0.719276,-2.782 l 0.562116,-1.708 1.51921,1.156 c 3.528195,2.591 7.470493,4.564 11.658097,5.834 l 1.104275,0.333 -0.103941,1.104 v 0.573 c -0.0025,1.381 0.427408,2.73 1.228174,3.854 0.646933,0.958 1.51838,1.744 2.537839,2.288 a 8.2621121,9.936 0 0 0 3.311997,0.837 8.2513022,9.923 0 0 0 1.79029,-0.229 7.2717563,8.745 0 0 0 1.832699,-0.802 l 29.760566,-19.094 c 0.892236,-0.566 1.627311,-1.349 2.135377,-2.276 0.507236,-0.927 0.771662,-1.968 0.768337,-3.026 -0.0084,-1.381 -0.449027,-2.725 -1.259773,-3.844 -0.656912,-0.946 -1.533347,-1.718 -2.553637,-2.252 a 8.3128357,9.997 0 0 0 -3.307008,-0.81 8.246313,9.917 0 0 0 -1.79029,0.23 6.9383115,8.344 0 0 0 -1.821058,0.801 l -11.346268,7.25 a 24.375558,29.314 0 0 1 -6.04774,2.656 c -1.945787,0.502 -3.945624,0.758 -5.954608,0.76 -3.820063,0 -7.582749,-0.926 -10.967089,-2.698 -3.384341,-1.772 -6.289718,-4.338 -8.467502,-7.478 -2.652591,-3.718 -4.079502,-8.172 -4.080334,-12.74 0.0016,-1.285 0.113089,-2.567 0.332615,-3.833 0.509728,-2.816 1.597374,-5.495 3.196411,-7.867 1.598207,-2.373 3.67205,-4.387 6.089317,-5.914 l 29.792168,-18.99 c 1.869286,-1.19 3.908205,-2.09 6.04774,-2.667 1.945787,-0.499 3.945625,-0.75 5.953776,-0.75 3.82921,-0.01 7.603538,0.91 10.999519,2.681 3.395981,1.77 6.311338,4.34 8.497439,7.486 2.636787,3.727 4.045417,8.184 4.028777,12.75 a 15.748404,18.939 0 0 1 -0.33344,3.844 15.407475,18.529 0 0 1 -0.71845,2.781 l -0.56211,1.708 -1.519216,-1.114 c -3.525699,-2.595 -7.468833,-4.568 -11.658096,-5.834 l -1.104275,-0.343 0.103941,-1.105 v -0.572 c 0,-1.385 -0.429072,-2.735 -1.228174,-3.865 -0.65608,-0.945 -1.530022,-1.716 -2.549481,-2.25 a 8.3086779,9.992 0 0 0 -3.301186,-0.813 8.2213671,9.887 0 0 0 -1.768671,0.271 6.8185708,8.2 0 0 0 -1.831867,0.802 l -29.792165,18.99 a 5.8797701,7.071 0 0 0 -1.836857,1.79 4.7505482,5.713 0 0 0 -0.962914,2.377 5.0365955,6.057 0 0 0 -0.135541,1.104 c -8.31e-4,1.378 0.42824,2.722 1.228174,3.844 0.655248,0.945 1.530021,1.717 2.548649,2.25 a 8.2986996,9.98 0 0 0 3.301186,0.812 8.2471446,9.918 0 0 0 1.79029,-0.23 6.9433007,8.35 0 0 0 1.832699,-0.801 l 11.367057,-7.292 a 24.218399,29.125 0 0 1 6.04774,-2.656 28.52574,34.305 0 0 1 5.953776,-0.76 c 3.821727,0 7.586076,0.925 10.972078,2.697 3.386003,1.772 6.293877,4.339 8.473325,7.48 2.652591,3.717 4.079498,8.171 4.080338,12.74 0.003,1.299 -0.11226,2.596 -0.34343,3.874 -0.506403,2.817 -1.594046,5.497 -3.192254,7.87 -1.599037,2.372 -3.673715,4.385 -6.093476,5.911 l -29.739779,18.99 a 24.308205,29.233 0 0 1 -6.057719,2.667 z" fill="#ffffff" id="path600" style="stroke-width:0.911885"></path> </svg>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/icons/techs/SvelteIcon.astro", void 0);

const $$Astro$9 = createAstro("https://luna-landing-rust.vercel.app/");
const $$TypescriptIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$TypescriptIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" class="h-20 w-20"><path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path><path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path></svg>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/icons/techs/TypescriptIcon.astro", void 0);

const $$Astro$8 = createAstro("https://luna-landing-rust.vercel.app/");
const $$VercelIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$VercelIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="h-20 w-20" viewBox="0 0 128 128"> <path d="M64.002 8.576 128 119.424H0Zm0 0"></path> </svg>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/icons/techs/VercelIcon.astro", void 0);

const $$Astro$7 = createAstro("https://luna-landing-rust.vercel.app/");
const $$VueIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$VueIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="h-20 w-20" viewBox="0 0 128 128"> <path d="M0 8.934l49.854.158 14.167 24.47 14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02-38.476 66.053L25.691 9.592.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168-15.053 24.647L49.216 9.73l-22.794-.168 37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01" fill="none"></path><path d="M25.997 9.393l23.002.009L64.035 34.36 79.018 9.404 102 9.398 64.15 75.053z" fill="#35495e"></path><path d="M.91 9.569l25.067-.172 38.15 65.659L101.98 9.401l25.11.026-62.966 108.06z" fill="#41b883"></path> </svg>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/icons/techs/VueIcon.astro", void 0);

const $$Astro$6 = createAstro("https://luna-landing-rust.vercel.app/");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Icon;
  const { icon, class: className } = Astro2.props;
  const icons = [
    $$ConfigIcon,
    $$DevIcon,
    $$FileIcon,
    $$PlanetIcon,
    $$CheckIcon,
    $$FacebookIcon,
    $$GithubIcon,
    $$InstagramIcon,
    $$TwitterIcon,
    $$ReactIcon,
    $$SvelteIcon,
    $$VueIcon,
    $$NetlifyIcon,
    $$SolidIcon,
    $$VercelIcon,
    $$EmailIcon,
    $$NextjsIcon,
    $$StripeIcon,
    $$TypescriptIcon,
    $$PostgresqlIcon,
    $$MissingIcon
  ];
  let figures = {};
  icons.map((item) => {
    figures[item.name] = item;
  });
  const Figure = figures[icon];
  return renderTemplate`${Figure ? renderTemplate`${renderComponent($$result, "Figure", Figure, { "class:list": [className] })}` : renderTemplate`${maybeRenderHead()}<p>Icon not found</p>`}`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/components/Icon.astro", void 0);

const $$Astro$5 = createAstro("https://luna-landing-rust.vercel.app/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class="flex flex-col justify-center text-center gap-y-8 pt-8 bg-black text-white w-full"> <section> ${renderComponent($$result, "Action", $$Action, { "as": "a", "type": "text", "class": "text-xl md:text-2xl", "href": data.logo.href }, { "default": ($$result2) => renderTemplate`${data.logo.label}` })} </section> <section> <p class="md:text-lg"> ${data.description} </p> </section> <section class="flex flex-row flex-wrap justify-center gap-x-3 px-4 md:px-0 md:text-xl"> ${data.links.map((link) => renderTemplate`${renderComponent($$result, "Action", $$Action, { "as": "a", "type": "text", "href": link.href }, { "default": ($$result2) => renderTemplate`${link.label}` })}`)} </section> <section class="mb-5 flex flex-row flex-wrap justify-center gap-x-3"> ${data.socials.map((social) => renderTemplate`${renderComponent($$result, "Action", $$Action, { "as": "a", "type": "icon", "href": social.href, "title": social.icon }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "icon": social.icon })} ` })}`)} </section> </footer>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/sections/Footer.astro", void 0);

const $$Astro$4 = createAstro("https://luna-landing-rust.vercel.app/");
const $$BurgerMenuIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BurgerMenuIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <line x1="4" x2="20" y1="12" y2="12"></line> <line x1="4" x2="20" y1="6" y2="6"></line> <line x1="4" x2="20" y1="18" y2="18"></line> </svg>`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/icons/commons/BurgerMenuIcon.astro", void 0);

const $$Astro$3 = createAstro("https://luna-landing-rust.vercel.app/");
const $$LanguagePicker = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LanguagePicker;
  return renderTemplate`${maybeRenderHead()}<div class=""> <div class="dropdown relative inline-block"> <button class="dropdown-toggle text-gray-500 font-semibold py-2 px-4 rounded inline-flex items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> <span id="current-lang"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" class="h-6 w-6"> <path d="M 6 3 C 4.300781 3 3 4.300781 3 6 L 3 26 C 3 27.699219 4.300781 29 6 29 L 6.40625 29 L 8 27 L 6 27 C 5.398438 27 5 26.601563 5 26 L 5 6 C 5 5.398438 5.398438 5 6 5 L 26 5 C 26.601563 5 27 5.398438 27 6 L 27 21 L 24 21 C 22.300781 21 21 22.300781 21 24 L 21 27 L 16 27 L 17.59375 29 L 21 29 L 21 32.40625 L 23 34.09375 L 23 24 C 23 23.398438 23.398438 23 24 23 L 44 23 C 44.601563 23 45 23.398438 45 24 L 45 44 C 45 44.601563 44.601563 45 44 45 L 24 45 C 23.398438 45 23 44.601563 23 44 L 23 42 L 21 43.6875 L 21 44 C 21 45.699219 22.300781 47 24 47 L 44 47 C 45.699219 47 47 45.699219 47 44 L 47 24 C 47 22.300781 45.699219 21 44 21 L 29 21 L 29 6 C 29 4.300781 27.699219 3 26 3 Z M 16 8 L 16 10 L 8 10 L 8 12 L 19.90625 12 C 19.597656 14.226563 18.292969 16.054688 16.65625 17.53125 C 14.148438 15.332031 12.875 13.03125 12.875 13.03125 L 11.125 13.96875 C 11.125 13.96875 12.433594 16.378906 15.0625 18.78125 C 14.996094 18.828125 14.941406 18.890625 14.875 18.9375 C 12.234375 20.757813 9.59375 21.65625 9.59375 21.65625 L 10.21875 23.5625 C 10.21875 23.5625 13.125 22.597656 16.03125 20.59375 C 16.238281 20.449219 16.449219 20.28125 16.65625 20.125 C 17.796875 20.96875 19.125 21.742188 20.625 22.34375 L 21.375 20.46875 C 20.226563 20.011719 19.199219 19.417969 18.28125 18.78125 C 20.109375 17.050781 21.636719 14.792969 21.9375 12 L 25 12 L 25 10 L 18 10 L 18 8 Z M 12 25 L 7 31 L 10 31 L 10 35 L 14 35 L 14 31 L 17 31 Z M 33 26.40625 L 27.8125 40.1875 L 30.3125 40.1875 L 31.40625 37 L 36.6875 37 L 37.8125 40.1875 L 40.3125 40.1875 L 35.09375 26.40625 Z M 34 29.40625 L 36 35.09375 L 32 35.09375 Z M 19 33 L 19 36 L 10 36 L 14 40 L 19 40 L 19 43 L 25 38 Z"></path> </svg> </span> <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"> <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path> </svg> </button> <ul class="dropdown-menu absolute hidden text-base z-[999] float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-white border-none" id="dropdownMenu1" aria-labelledby="dropdownMenuButton1"> <li> <a href="/en/" class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"><img src="https://cdn.parcellab.com/img/flags/us.png" class="flag h-6 w-auto mr-2" alt="Flag representing language">English</a> </li> <li> <a href="/fr/" class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"><img src="https://cdn.parcellab.com/img/flags/fr.png" class="flag h-6 w-auto mr-2" alt="Flag representing language">Français</a> </li> <li> <a href="/pt/" class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"><img src="https://cdn.parcellab.com/img/flags/pt.png" class="flag h-6 w-auto mr-2" alt="Flag representing language">Português</a> </li> </ul> </div> </div> `;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/components/LanguagePicker.astro", void 0);

const $$Astro$2 = createAstro("https://luna-landing-rust.vercel.app/");
const $$LanguagePickerMini = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LanguagePickerMini;
  return renderTemplate`${maybeRenderHead()}<div class=""> <div class="dropdown relative inline-block"> <button class="dropdown-togglemini text-gray-500 font-semibold py-2 px-4 rounded inline-flex items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> <span id="current-lang"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" class="h-6 w-6"> <path d="M 6 3 C 4.300781 3 3 4.300781 3 6 L 3 26 C 3 27.699219 4.300781 29 6 29 L 6.40625 29 L 8 27 L 6 27 C 5.398438 27 5 26.601563 5 26 L 5 6 C 5 5.398438 5.398438 5 6 5 L 26 5 C 26.601563 5 27 5.398438 27 6 L 27 21 L 24 21 C 22.300781 21 21 22.300781 21 24 L 21 27 L 16 27 L 17.59375 29 L 21 29 L 21 32.40625 L 23 34.09375 L 23 24 C 23 23.398438 23.398438 23 24 23 L 44 23 C 44.601563 23 45 23.398438 45 24 L 45 44 C 45 44.601563 44.601563 45 44 45 L 24 45 C 23.398438 45 23 44.601563 23 44 L 23 42 L 21 43.6875 L 21 44 C 21 45.699219 22.300781 47 24 47 L 44 47 C 45.699219 47 47 45.699219 47 44 L 47 24 C 47 22.300781 45.699219 21 44 21 L 29 21 L 29 6 C 29 4.300781 27.699219 3 26 3 Z M 16 8 L 16 10 L 8 10 L 8 12 L 19.90625 12 C 19.597656 14.226563 18.292969 16.054688 16.65625 17.53125 C 14.148438 15.332031 12.875 13.03125 12.875 13.03125 L 11.125 13.96875 C 11.125 13.96875 12.433594 16.378906 15.0625 18.78125 C 14.996094 18.828125 14.941406 18.890625 14.875 18.9375 C 12.234375 20.757813 9.59375 21.65625 9.59375 21.65625 L 10.21875 23.5625 C 10.21875 23.5625 13.125 22.597656 16.03125 20.59375 C 16.238281 20.449219 16.449219 20.28125 16.65625 20.125 C 17.796875 20.96875 19.125 21.742188 20.625 22.34375 L 21.375 20.46875 C 20.226563 20.011719 19.199219 19.417969 18.28125 18.78125 C 20.109375 17.050781 21.636719 14.792969 21.9375 12 L 25 12 L 25 10 L 18 10 L 18 8 Z M 12 25 L 7 31 L 10 31 L 10 35 L 14 35 L 14 31 L 17 31 Z M 33 26.40625 L 27.8125 40.1875 L 30.3125 40.1875 L 31.40625 37 L 36.6875 37 L 37.8125 40.1875 L 40.3125 40.1875 L 35.09375 26.40625 Z M 34 29.40625 L 36 35.09375 L 32 35.09375 Z M 19 33 L 19 36 L 10 36 L 14 40 L 19 40 L 19 43 L 25 38 Z"></path> </svg> </span> <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"> <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path> </svg> </button> <ul class="dropdown-menumini absolute hidden text-base z-[999] float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-white border-none" id="dropdownMenu1" aria-labelledby="dropdownMenuButton1"> <li> <a href="/en/" class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"><img src="https://cdn.parcellab.com/img/flags/us.png" class="flag h-6 w-auto mr-2" alt="Flag representing language">English</a> </li> <li> <a href="/fr/" class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"><img src="https://cdn.parcellab.com/img/flags/fr.png" class="flag h-6 w-auto mr-2" alt="Flag representing language">Français</a> </li> <li> <a href="/pt/" class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"><img src="https://cdn.parcellab.com/img/flags/pt.png" class="flag h-6 w-auto mr-2" alt="Flag representing language">Português</a> </li> </ul> </div> </div> `;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/components/LanguagePickerMini.astro", void 0);

const $$Astro$1 = createAstro("https://luna-landing-rust.vercel.app/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header id="navbar" class="w-full transition duration-300 justify-center fixed h-20 z-50 flex"> <nav aria-label="Main Navigation" class="hidden lg:flex lg:flex-row items-center w-3/4"> <div class="text-nowrap"> ${renderComponent($$result, "Action", $$Action, { "as": "a", "class": "text-xl", "href": data.logo.href }, { "default": ($$result2) => renderTemplate`${data.logo.label}` })} </div> <ul class="flex flex-row w-full justify-center gap-x-14"> ${data.links.map((item) => renderTemplate`<li class="text-lg hover:scale-110 hover:opacity-80"> ${renderComponent($$result, "Action", $$Action, { "as": "a", "href": item.href }, { "default": ($$result2) => renderTemplate`${item.label}` })} </li>`)} </ul> ${renderComponent($$result, "LanguagePicker", $$LanguagePicker, { "lang": "lang" })} <span></span> </nav> <nav aria-label="Main Navigation" class="hidden max-lg:flex max-lg:flex-row items-center justify-between container px-8"> <div class="text-nowrap"> ${renderComponent($$result, "Action", $$Action, { "as": "a", "class": "text-xl", "href": data.logo.href }, { "default": ($$result2) => renderTemplate`${data.logo.label}` })} </div> ${renderComponent($$result, "LanguagePickerMini", $$LanguagePickerMini, { "lang": "lang" })} <button id="burgerMenu" class="" aria-label="Open Menu"> ${renderComponent($$result, "BurgerMenuIcon", $$BurgerMenuIcon, {})} </button> </nav> </header> <div class="w-full flex backdrop-blur-xl bg-white/30 h-full z-20 flex-grow fixed top-20 justify-center lg:hidden transition duration-300 gap-4 hidden" id="subNav"> <ul class="flex flex-col gap-4 py-8"> ${data.links.map((item) => renderTemplate`<li class="text-lg hover:scale-110 hover:opacity-80"> ${renderComponent($$result, "Action", $$Action, { "as": "a", "href": item.href, "id": item.href }, { "default": ($$result2) => renderTemplate`${item.label}` })} </li>`)} </ul> </div> `;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/sections/Header.astro", void 0);

const meta$2 = {
	title: "Hephaistos Informatica - Accueil",
	description: "Société de développement web Hephaistos. Nous créons des sites web et des applications web pour les entreprises et les particuliers.",
	lang: "fr-FR",
	charset: "UTF-8",
	ldJson: {
		"@context": "http://schema.org",
		"@type": "Organization",
		name: "Hephaistos Informatica",
		description: "Société de développement web Hephaistos. Nous créons des sites web et des applications web pour les entreprises et les particuliers.",
		url: "https://votre-site-web.com/",
		logo: "./public/favicon.svg",
		contactPoint: {
			"@type": "ContactPoint",
			email: "votre-email@hephaistos.com",
			contactType: "Service client"
		},
		sameAs: [
			"https://www.twitter.com/votrepage",
			"https://www.instagram.com/votrepage",
			"https://www.linkedin.com/company/votrepage"
		]
	}
};
const headerData$2 = {
	logo: {
		label: "Hephaistos Informatica",
		href: "/fr"
	},
	links: [
		{
			label: "À propos",
			href: "/fr/Apropos"
		},
		{
			label: "Services",
			href: "/fr/#prices"
		},
		{
			label: "Tarifs",
			href: "/fr/#prices"
		},
		{
			label: "Nos Projets",
			href: "/fr/Projets"
		}
	]
};
const heroData$2 = {
	title: " Amelioré votre presance web : Bienvenue sur",
	subTitle: "Créez un site web qui se démarque et atteignez de nouveaux sommets en ligne avec nous.",
	primaryCta: {
		label: "Voir nos services",
		href: "#services"
	},
	secondaryCta: {
		label: "Voir nos projets",
		href: "/fr/Projets"
	},
	highlightedTitle: "Hephaistos Informatica"
};
const servicesData$2 = {
	title: "Tout ce dont vous avez besoin pour créer un site web",
	services: [
		{
			title: "Personnalisation professionnelle",
			icon: "DevIcon",
			description: "Vous pouvez demander un service de personnalisation professionnelle pour avoir votre site web adapté à vos besoins. Notre équipe d'experts travaillera avec vous pour créer un site web unique et personnalisé qui reflète votre vision et votre identité de marque."
		},
		{
			title: "Accessibilité intégrée",
			icon: "PlanetIcon",
			description: "Nous nous soucions de l'accessibilité du web et avons intégré des fonctionnalités pour garantir que votre site est accessible à tous les utilisateurs, y compris ceux souffrant de handicaps visuels ou moteurs. Nos modèles sont conformes aux normes d'accessibilité WCAG pour offrir une expérience inclusive à tous."
		},
		{
			title: "Optimisé pour le SEO",
			icon: "FileIcon",
			description: "Nous comprenons l'importance de la visibilité de votre site dans les moteurs de recherche. C'est pourquoi nos modèles sont optimisés pour le SEO, ce qui signifie qu'ils sont structurés et codés pour être facilement indexés par Google et autres moteurs de recherche, aidant ainsi à améliorer votre classement dans les résultats de recherche."
		},
		{
			title: "Configuration facile",
			icon: "ConfigIcon",
			description: "Avec nos modèles, vous n'avez pas besoin d'être un expert en développement web pour avoir un site impressionnant. Ils sont faciles à configurer et à personnaliser, avec des options intuitives qui vous permettent de changer les couleurs, les polices, la disposition des pages, et plus encore, en quelques clics. Faites en sorte que votre site se démarque sans effort !"
		}
	]
};
const adventajesData$2 = {
	title: "Débloquez le pouvoir d'un site web moderne : Découvrez les avantages clés",
	adventajes: [
		{
			title: "Personnalisez votre site web à la perfection",
			description: "Nos options de personnalisation intuitives vous permettent de créer un site web qui se démarque et résonne avec votre audience comme jamais auparavant. Dites adieu aux designs préfabriqués et bonjour à un site web qui reflète véritablement votre vision et votre personnalité.",
			img: "template.webp",
			imageAlt: "Ceci est une image sur les avantages du service de modèle",
			checks: [
				"Couleurs",
				"Polices",
				"Disposition"
			]
		},
		{
			title: "Des sites performants avec les dernières technologies",
			description: "Nous utilisons les technologies les plus performantes pour créer des sites web rapides et fluides. Grâce à l'utilisation de frameworks et d'outils de pointe, nous garantissons une navigation rapide et une expérience utilisateur sans friction. Nos sites sont optimisés pour offrir des temps de chargement rapides, une réactivité mobile et une compatibilité multi-navigateurs, assurant ainsi une expérience utilisateur exceptionnelle pour tous les visiteurs.",
			img: "rocket.webp",
			imageAlt: "Ceci est une image sur les avantages des technologies de pointe",
			checks: [
				"Rapidité de navigation",
				"Diminution de la friction",
				"Expérience utilisateur exceptionnelle"
			]
		},
		{
			title: "Atteignez le haut des classements de recherche",
			description: "Améliorez votre visibilité en ligne avec notre modèle optimisé pour le SEO. Conçu en tenant compte des algorithmes des moteurs de recherche, notre modèle est conçu pour aider votre site web à grimper au sommet des pages de résultats des moteurs de recherche (SERPs). Des balises méta optimisées et une structure HTML propre à la réactivité mobile et aux temps de chargement rapides, chaque aspect de notre modèle est conçu pour maximiser la performance de votre site web sur les moteurs de recherche. Augmentez votre trafic organique, attirez plus de visiteurs et développez votre présence en ligne facilement.",
			img: "seo.webp",
			imageAlt: "Ceci est une image sur les avantages du SEO",
			checks: [
				"Visibilité de recherche",
				"Trafic organique",
				"Crédibilité en ligne"
			]
		}
	]
};
const brandsData$2 = {
	title: "Intégration avec les technologies de pointe",
	description: "Intégrez facilement les technologies de pointe. Notre plateforme prend en charge de manière transparente les outils et les cadres standard de l'industrie, vous permettant de rester à la pointe et de maximiser votre productivité. Explorez des possibilités infinies avec nos fonctionnalités de compatibilité complètes",
	brands: [
		{
			label: "React",
			icon: "ReactIcon",
			href: "https://react.dev/"
		},
		{
			label: "Next.js",
			icon: "NextjsIcon",
			href: "https://nextjs.org/"
		},
		{
			label: "Typescript",
			icon: "TypescriptIcon",
			href: "https://www.typescriptlang.org/"
		},
		{
			label: "Vercel",
			icon: "VercelIcon",
			href: "https://vercel.com/"
		},
		{
			label: "PostgreSQL",
			icon: "PostgresqlIcon",
			href: "https://www.postgresql.org/"
		},
		{
			label: "Stripe",
			icon: "StripeIcon",
			href: "https://www.stripe.com/"
		}
	]
};
const pricingData$2 = {
	title: "Nos Tarifs",
	path: "/fr/demande",
	tiers: [
		{
			title: "Débutant",
			description: "Meilleure option pour un usage personnel et pour votre prochain projet.",
			price: {
				amount: "800 €",
				period: "/site"
			},
			features: [
				"5 - 10 Pages",
				"Optimisé pour le SEO",
				"Personnalisation",
				"Support 24/7*",
				"Hébergement gratuit à vie*"
			],
			featuresMissing: [
				"Widgets personnalisés*",
				"Boutique en ligne"
			],
			cta: "Commencer"
		},
		{
			title: "Professionnel",
			description: "Idéal pour les petites entreprises qui ont besoin de plus de fonctionnalités.",
			price: {
				amount: "1200 €",
				period: "/site"
			},
			features: [
				"5 - 10 Pages",
				"Optimisé pour le SEO",
				"Personnalisation",
				"Support 24/7*",
				"Hébergement gratuit à vie*",
				"Widgets personnalisés*"
			],
			featuresMissing: [
				"Boutique en ligne"
			],
			cta: "Commencer"
		},
		{
			title: "E-commerce",
			description: "Idéal pour les entreprises qui ont besoin de vendre quelque chose sur le web.",
			price: {
				amount: "1500 €+",
				period: "/site"
			},
			features: [
				"5 - 10 Pages",
				"Optimisé pour le SEO",
				"Personnalisation",
				"Support 24/7*",
				"Hébergement gratuit à vie*",
				"Widgets personnalisés*",
				"Boutique en ligne"
			],
			cta: "Commencer"
		}
	]
};
const footerData$2 = {
	logo: {
		label: "Hephaistos Informatica",
		href: "/fr"
	},
	description: "Société de développement web Hephaistos. Nous créons des sites web et des applications web pour les entreprises et les particuliers.",
	links: [
		{
			label: "À propos",
			href: "/fr/Apropos"
		},
		{
			label: "Services",
			href: "/fr/#prices"
		},
		{
			label: "Tarifs",
			href: "/fr/#prices"
		},
		{
			label: "Nos Projets",
			href: "/fr/Projets"
		}
	],
	socials: [
		{
			icon: "InstagramIcon",
			href: "https://www.instagram.com/hephaistos.informatica/"
		},
		{
			icon: "EmailIcon",
			href: "mailto:vctferreira.pro@gmail.com"
		}
	]
};
const performances$2 = {
	title: "Performances",
	subtitle: "Nous nous engageons à fournir des sites web rapides et performants pour offrir une expérience utilisateur exceptionnelle. Découvrez comment nos sites se comparent aux normes de performance web.",
	lighthouse: {
		performance: "Performances",
		accessibility: "Accessibilité",
		bestPractices: "Bonnes Pratiques",
		seo: "SEO"
	}
};
const landingDatafr = {
	meta: meta$2,
	headerData: headerData$2,
	heroData: heroData$2,
	servicesData: servicesData$2,
	adventajesData: adventajesData$2,
	brandsData: brandsData$2,
	pricingData: pricingData$2,
	footerData: footerData$2,
	performances: performances$2
};

const meta$1 = {
	title: "Hephaistos Informatica - Home",
	description: "Hephaistos web development company. We create websites and web applications for businesses and individuals.",
	lang: "en-US",
	charset: "UTF-8",
	ldJson: {
		"@context": "http://schema.org",
		"@type": "Organization",
		name: "Hephaistos Informatica",
		description: "Hephaistos web development company. We create websites and web applications for businesses and individuals.",
		url: "https://your-website.com/",
		logo: "./public/favicon.svg",
		contactPoint: {
			"@type": "ContactPoint",
			email: "your-email@hephaistos.com",
			contactType: "Customer service"
		},
		sameAs: [
			"https://www.twitter.com/yourpage",
			"https://www.instagram.com/yourpage",
			"https://www.linkedin.com/company/yourpage"
		]
	}
};
const headerData$1 = {
	logo: {
		label: "Hephaistos Informatica",
		href: "/en"
	},
	links: [
		{
			label: "About",
			href: "/en/About"
		},
		{
			label: "Services",
			href: "/en/#prices"
		},
		{
			label: "Pricing",
			href: "/en/#prices"
		},
		{
			label: "Our Projects",
			href: "/en/Projects"
		}
	]
};
const heroData$1 = {
	title: "Improve your web presence: Welcome to",
	subTitle: "Create a website that stands out and reach new heights online with us.",
	primaryCta: {
		label: "See our services",
		href: "#services"
	},
	secondaryCta: {
		label: "See our projects",
		href: "/en/Projects"
	},
	highlightedTitle: "Hephaistos Informatica"
};
const servicesData$1 = {
	title: "Everything you need to create a website",
	services: [
		{
			title: "Professional customization",
			icon: "DevIcon",
			description: "You can request a professional customization service to have your website adapted to your needs. Our team of experts will work with you to create a unique and customized website that reflects your vision and brand identity."
		},
		{
			title: "Built-in accessibility",
			icon: "PlanetIcon",
			description: "We care about web accessibility and have integrated features to ensure that your site is accessible to all users, including those with visual or motor disabilities. Our templates comply with WCAG accessibility standards to provide an inclusive experience for all."
		},
		{
			title: "SEO optimized",
			icon: "FileIcon",
			description: "We understand the importance of your site's visibility in search engines. That's why our templates are SEO optimized, meaning they are structured and coded to be easily indexed by Google and other search engines, helping to improve your ranking in search results."
		},
		{
			title: "Easy setup",
			icon: "ConfigIcon",
			description: "With our templates, you don't need to be a web development expert to have an impressive site. They are easy to set up and customize, with intuitive options that allow you to change colors, fonts, page layout, and more, with just a few clicks. Make your site stand out effortlessly!"
		}
	]
};
const adventajesData$1 = {
	title: "Unlock the power of a modern website: Discover the key advantages",
	adventajes: [
		{
			title: "Customize your website to perfection",
			description: "Our intuitive customization options allow you to create a website that stands out and resonates with your audience like never before. Say goodbye to prefabricated designs and hello to a website that truly reflects your vision and personality.",
			img: "template.webp",
			imageAlt: "This is an image about the advantages of the template service",
			checks: [
				"Colors",
				"Fonts",
				"Layout"
			]
		},
		{
			title: "High-performing websites with cutting-edge technologies",
			description: "We use the most performant technologies to create fast and smooth websites. Thanks to the use of cutting-edge frameworks and tools, we guarantee fast navigation and a frictionless user experience. Our websites are optimized to offer fast loading times, mobile responsiveness, and multi-browser compatibility, ensuring an exceptional user experience for all visitors.",
			img: "rocket.webp",
			imageAlt: "This is an image about the advantages of cutting-edge technologies",
			checks: [
				"Fast navigation",
				"Reduced friction",
				"Exceptional user experience"
			]
		},
		{
			title: "Reach the top of search rankings",
			description: "Improve your online visibility with our SEO-optimized template. Designed with search engine algorithms in mind, our template is designed to help your website climb to the top of search engine results pages (SERPs). From optimized meta tags to clean HTML structure, mobile responsiveness, and fast loading times, every aspect of our template is designed to maximize your website's performance on search engines. Increase your organic traffic, attract more visitors, and grow your online presence easily.",
			img: "seo.webp",
			imageAlt: "This is an image about the advantages of SEO",
			checks: [
				"Search visibility",
				"Organic traffic",
				"Online credibility"
			]
		}
	]
};
const brandsData$1 = {
	title: "Integration with cutting-edge technologies",
	description: "Easily integrate cutting-edge technologies. Our platform seamlessly supports industry-standard tools and frameworks, enabling you to stay ahead and maximize your productivity. Explore endless possibilities with our comprehensive compatibility features",
	brands: [
		{
			label: "React",
			icon: "ReactIcon",
			href: "https://react.dev/"
		},
		{
			label: "Next.js",
			icon: "NextjsIcon",
			href: "https://nextjs.org/"
		},
		{
			label: "Typescript",
			icon: "TypescriptIcon",
			href: "https://www.typescriptlang.org/"
		},
		{
			label: "Vercel",
			icon: "VercelIcon",
			href: "https://vercel.com/"
		},
		{
			label: "PostgreSQL",
			icon: "PostgresqlIcon",
			href: "https://www.postgresql.org/"
		},
		{
			label: "Stripe",
			icon: "StripeIcon",
			href: "https://www.stripe.com/"
		}
	]
};
const pricingData$1 = {
	title: "Our Pricing",
	path: "/en/request",
	tiers: [
		{
			title: "Beginner",
			description: "Best option for personal use and for your next project.",
			price: {
				amount: "800 €",
				period: "/site"
			},
			features: [
				"5 - 10 Pages",
				"SEO optimized",
				"Customization",
				"24/7 support*",
				"Free lifetime hosting*"
			],
			featuresMissing: [
				"Custom widgets*",
				"Online store"
			],
			cta: "Get started"
		},
		{
			title: "Professional",
			description: "Ideal for small businesses that need more features.",
			price: {
				amount: "1200 €",
				period: "/site"
			},
			features: [
				"5 - 10 Pages",
				"SEO optimized",
				"Customization",
				"24/7 support*",
				"Free lifetime hosting*",
				"Custom widgets*"
			],
			featuresMissing: [
				"Online store"
			],
			cta: "Get started"
		},
		{
			title: "E-commerce",
			description: "Ideal for businesses that need to sell something on the web.",
			price: {
				amount: "1500 €+",
				period: "/site"
			},
			features: [
				"5 - 10 Pages",
				"SEO optimized",
				"Customization",
				"24/7 support*",
				"Free lifetime hosting*",
				"Custom widgets*",
				"Online store"
			],
			cta: "Get started"
		}
	]
};
const footerData$1 = {
	logo: {
		label: "Hephaistos Informatica",
		href: "/en"
	},
	description: "Hephaistos web development company. We create websites and web applications for businesses and individuals.",
	links: [
		{
			label: "About",
			href: "/en/About"
		},
		{
			label: "Services",
			href: "/en/#prices"
		},
		{
			label: "Pricing",
			href: "/en/#prices"
		},
		{
			label: "Our Projects",
			href: "/en/Projects"
		}
	],
	socials: [
		{
			icon: "InstagramIcon",
			href: "https://www.instagram.com/hephaistos.informatica/"
		},
		{
			icon: "EmailIcon",
			href: "mailto:vctferreira.pro@gmail.com"
		}
	]
};
const performances$1 = {
	title: "Performance",
	subtitle: "We are committed to providing fast and high-performing websites for an exceptional user experience. Discover how our websites compare to web performance standards.",
	lighthouse: {
		performance: "Performance",
		accessibility: "Accessibility",
		bestPractices: "Best Practices",
		seo: "SEO"
	}
};
const landingData = {
	meta: meta$1,
	headerData: headerData$1,
	heroData: heroData$1,
	servicesData: servicesData$1,
	adventajesData: adventajesData$1,
	brandsData: brandsData$1,
	pricingData: pricingData$1,
	footerData: footerData$1,
	performances: performances$1
};

const meta = {
	title: "Hephaistos Informatica - Início",
	description: "Empresa de desenvolvimento web Hephaistos. Criamos sites e aplicativos web para empresas e indivíduos.",
	lang: "pt-PT",
	charset: "UTF-8",
	ldJson: {
		"@context": "http://schema.org",
		"@type": "Organization",
		name: "Hephaistos Informatica",
		description: "Empresa de desenvolvimento web Hephaistos. Criamos sites e aplicativos web para empresas e indivíduos.",
		url: "https://seu-site.com/",
		logo: "./public/favicon.svg",
		contactPoint: {
			"@type": "ContactPoint",
			email: "seu-email@hephaistos.com",
			contactType: "Atendimento ao cliente"
		},
		sameAs: [
			"https://www.twitter.com/suapagina",
			"https://www.instagram.com/suapagina",
			"https://www.linkedin.com/company/suapagina"
		]
	}
};
const headerData = {
	logo: {
		label: "Hephaistos Informatica",
		href: "/pt"
	},
	links: [
		{
			label: "Sobre",
			href: "/pt/Sobre"
		},
		{
			label: "Serviços",
			href: "/pt/#prices"
		},
		{
			label: "Preços",
			href: "/pt/#prices"
		},
		{
			label: "Nossos Projetos",
			href: "/pt/Projetos"
		}
	]
};
const heroData = {
	title: "Melhore sua presença na web: Bem-vindo à",
	subTitle: "Crie um site que se destaque e alcance novos patamares online conosco.",
	primaryCta: {
		label: "Veja nossos serviços",
		href: "#servicos"
	},
	secondaryCta: {
		label: "Veja nossos projetos",
		href: "/pt/Projetos"
	},
	highlightedTitle: "Hephaistos Informatica"
};
const servicesData = {
	title: "Tudo o que você precisa para criar um site",
	services: [
		{
			title: "Customização profissional",
			icon: "DevIcon",
			description: "Você pode solicitar um serviço de customização profissional para ter seu site adaptado às suas necessidades. Nossa equipe de especialistas trabalhará com você para criar um site único e personalizado que reflete sua visão e identidade de marca."
		},
		{
			title: "Acessibilidade integrada",
			icon: "PlanetIcon",
			description: "Nós nos preocupamos com a acessibilidade da web e integramos recursos para garantir que seu site seja acessível a todos os usuários, incluindo aqueles com deficiências visuais ou motoras. Nossos modelos estão em conformidade com os padrões de acessibilidade WCAG para oferecer uma experiência inclusiva para todos."
		},
		{
			title: "Otimizado para SEO",
			icon: "FileIcon",
			description: "Nós entendemos a importância da visibilidade do seu site nos mecanismos de pesquisa. Por isso, nossos modelos são otimizados para SEO, o que significa que eles são estruturados e codificados para serem facilmente indexados pelo Google e outros mecanismos de pesquisa, ajudando assim a melhorar seu ranking nos resultados de pesquisa."
		},
		{
			title: "Configuração fácil",
			icon: "ConfigIcon",
			description: "Com nossos modelos, você não precisa ser um especialista em desenvolvimento web para ter um site impressionante. Eles são fáceis de configurar e personalizar, com opções intuitivas que permitem alterar cores, fontes, layout da página e muito mais, com apenas alguns cliques. Faça seu site se destacar sem esforço!"
		}
	]
};
const adventajesData = {
	title: "Desbloqueie o poder de um site moderno: Descubra as vantagens chave",
	adventajes: [
		{
			title: "Personalize seu site à perfeição",
			description: "Nossas opções de personalização intuitivas permitem que você crie um site que se destaca e ressoa com seu público como nunca antes. Diga adeus aos designs pré-fabricados e olá para um site que realmente reflete sua visão e personalidade.",
			img: "template.webp",
			imageAlt: "Esta é uma imagem sobre as vantagens do serviço de modelo",
			checks: [
				"Cores",
				"Fontes",
				"Layout"
			]
		},
		{
			title: "Sites de alto desempenho com tecnologias de ponta",
			description: "Nós usamos as tecnologias mais performáticas para criar sites rápidos e suaves. Graças ao uso de frameworks e ferramentas de ponta, nós garantimos uma navegação rápida e uma experiência do usuário sem atrito. Nossos sites são otimizados para oferecer tempos de carregamento rápidos, reatividade móvel e compatibilidade com vários navegadores, garantindo assim uma experiência do usuário excepcional para todos os visitantes.",
			img: "rocket.webp",
			imageAlt: "Esta é uma imagem sobre as vantagens das tecnologias de ponta",
			checks: [
				"Navegação rápida",
				"Redução de atrito",
				"Experiência do usuário excepcional"
			]
		},
		{
			title: "Alcance o topo dos rankings de pesquisa",
			description: "Melhore sua visibilidade online com o nosso modelo otimizado para SEO. Projetado com base nos algoritmos dos mecanismos de pesquisa, nosso modelo é projetado para ajudar seu site a subir ao topo das páginas de resultados dos mecanismos de pesquisa (SERPs). Desde as tags meta otimizadas até a estrutura HTML limpa, reatividade móvel e tempos de carregamento rápidos, cada aspecto do nosso modelo é projetado para maximizar o desempenho do seu site nos mecanismos de pesquisa. Aumente o tráfego orgânico, atrai mais visitantes e cresça sua presença online com facilidade.",
			img: "seo.webp",
			imageAlt: "Esta é uma imagem sobre as vantagens do SEO",
			checks: [
				"Visibilidade de pesquisa",
				"Tráfego orgânico",
				"Credibilidade online"
			]
		}
	]
};
const brandsData = {
	title: "Integração com tecnologias de ponta",
	description: "Integre facilmente as tecnologias de ponta. Nossa plataforma suporta de forma transparente as ferramentas e os frameworks padrão da indústria, permitindo que você fique à frente e maximize sua produtividade. Explore possibilidades infinitas com nossos recursos de compatibilidade completos",
	brands: [
		{
			label: "React",
			icon: "ReactIcon",
			href: "https://react.dev/"
		},
		{
			label: "Next.js",
			icon: "NextjsIcon",
			href: "https://nextjs.org/"
		},
		{
			label: "Typescript",
			icon: "TypescriptIcon",
			href: "https://www.typescriptlang.org/"
		},
		{
			label: "Vercel",
			icon: "VercelIcon",
			href: "https://vercel.com/"
		},
		{
			label: "PostgreSQL",
			icon: "PostgresqlIcon",
			href: "https://www.postgresql.org/"
		},
		{
			label: "Stripe",
			icon: "StripeIcon",
			href: "https://www.stripe.com/"
		}
	]
};
const pricingData = {
	title: "Nossos Preços",
	path: "/pt/pedido",
	tiers: [
		{
			title: "Iniciante",
			description: "Melhor opção para uso pessoal e para o seu próximo projeto.",
			price: {
				amount: "800 €",
				period: "/site"
			},
			features: [
				"5 - 10 Páginas",
				"Otimizado para SEO",
				"Personalização",
				"Suporte 24/7*",
				"Hospedagem grátis para sempre*"
			],
			featuresMissing: [
				"Widgets personalizados*",
				"Loja online"
			],
			cta: "Começar"
		},
		{
			title: "Profissional",
			description: "Ideal para pequenas empresas que precisam de mais recursos.",
			price: {
				amount: "1200 €",
				period: "/site"
			},
			features: [
				"5 - 10 Páginas",
				"Otimizado para SEO",
				"Personalização",
				"Suporte 24/7*",
				"Hospedagem grátis para sempre*",
				"Widgets personalizados*"
			],
			featuresMissing: [
				"Loja online"
			],
			cta: "Começar"
		},
		{
			title: "E-commerce",
			description: "Ideal para empresas que precisam vender algo na web.",
			price: {
				amount: "1500 €+",
				period: "/site"
			},
			features: [
				"5 - 10 Páginas",
				"Otimizado para SEO",
				"Personalização",
				"Suporte 24/7*",
				"Hospedagem grátis para sempre*",
				"Widgets personalizados*",
				"Loja online"
			],
			cta: "Começar"
		}
	]
};
const footerData = {
	logo: {
		label: "Hephaistos Informatica",
		href: "/pt"
	},
	description: "Empresa de desenvolvimento web Hephaistos. Criamos sites e aplicativos web para empresas e indivíduos.",
	links: [
		{
			label: "Sobre",
			href: "/pt/Sobre"
		},
		{
			label: "Serviços",
			href: "/pt/#prices"
		},
		{
			label: "Preços",
			href: "/pt/#prices"
		},
		{
			label: "Nossos Projetos",
			href: "/pt/Projetos"
		}
	],
	socials: [
		{
			icon: "InstagramIcon",
			href: "https://www.instagram.com/hephaistos.informatica/"
		},
		{
			icon: "EmailIcon",
			href: "mailto:vctferreira.pro@gmail.com"
		}
	]
};
const performances = {
	title: "Performance",
	subtitle: "Nós nos comprometemos a fornecer sites rápidos e de alto desempenho para uma experiência do usuário excepcional. Descubra como nossos sites se comparam aos padrões de performance da web.",
	lighthouse: {
		performance: "Performance",
		accessibility: "Acessibilidade",
		bestPractices: "Melhores Práticas",
		seo: "SEO"
	}
};
const landingDataPt = {
	meta: meta,
	headerData: headerData,
	heroData: heroData,
	servicesData: servicesData,
	adventajesData: adventajesData,
	brandsData: brandsData,
	pricingData: pricingData,
	footerData: footerData,
	performances: performances
};

const getLandingData = async ({
  lang
}) => {
  console.log(lang);
  if (lang === "fr") {
    const data2 = landingDatafr;
    return data2;
  }
  if (lang === "en") {
    const data2 = landingData;
    return data2;
  }
  if (lang === "pt") {
    const data2 = landingDataPt;
    return data2;
  }
  const data = landingData;
  return data;
};

const $$Astro = createAstro("https://luna-landing-rust.vercel.app/");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const lang = getLangFromUrl(Astro2.url);
  const data = await getLandingData({ lang });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": data.meta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data": data.headerData })} ${maybeRenderHead()}<main class="flex flex-col justify-center items-center"> <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto my-20 mt-32 lg:py-0 w-full"> <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700"> <div class="p-6 space-y-4 md:space-y-6 sm:p-8"> <img src="/moi.png" alt="Victor Ferreira" class="mx-auto w-40 h-40 rounded-full bg-primary"> <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
Victor Ferreira
</h1> <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
Web Developer | Passionate about New Technologies
</p> <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
Hello, I'm Victor Ferreira, a passionate and dedicated web developer
            with a keen interest in exploring and harnessing the power of new
            technologies. I am also the creator of Héphaïstos Informatica.
</p> <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
With a strong foundation in web development, I am committed to
            creating innovative and user-friendly digital solutions that meet
            the unique needs of each project. I have expertise in a variety of
            programming languages and tools, allowing me to adapt to new
            challenges and deliver high-quality results.
</p> <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
My passion for new technologies drives me to stay informed about the
            latest trends and advancements in the industry. I firmly believe
            that continuous learning is the key to staying competitive and
            relevant in the ever-evolving technology landscape.
</p> <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
When I'm not coding or learning new technologies, you can find me
            engaging in various activities that stimulate my creativity and
            problem-solving skills. I am a strong advocate for work-life balance
            to ensure optimal performance in all aspects of life.
</p> <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
Thank you for taking the time to learn more about me. I look forward
            to meeting you and exploring potential collaboration opportunities.
            Let's create something extraordinary together!
</p> <div class="flex items-center justify-between"> <a href="mailto:vctferreira.pro@gmail.com" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Send me an email
</a> </div> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data": data.footerData })} ` })}`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/en/About.astro", void 0);

const $$file = "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/en/About.astro";
const $$url = "/en/About";

const About = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, About as A, getLandingData as a, $$Header as b, $$Footer as c, $$Action as d, $$Icon as e, getLangFromUrl as g };
