import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_D1VOB1hM.mjs';
import { g as getLangFromUrl, a as getLandingData, $ as $$Layout, b as $$Header, c as $$Footer } from './About_CTfOKHJi.mjs';

const $$Astro = createAstro("https://luna-landing-rust.vercel.app/");
const $$Apropos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Apropos;
  const lang = getLangFromUrl(Astro2.url);
  const data = await getLandingData({ lang });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": data.meta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data": data.headerData })} ${maybeRenderHead()}<main class="flex flex-col justify-center items-center"> <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto my-20 mt-32 lg:py-0 w-full"> <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700"> <div class="p-6 space-y-4 md:space-y-6 sm:p-8"> <img src="/moi.png" alt="Victor Ferreira" class="mx-auto w-40 h-40 rounded-full bg-primary"> <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
Victor Ferreira
</h1> <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
Développeur Web | Passionné par les Nouvelles Technologies
</p> <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
Bonjour, je suis Victor Ferreira, un développeur web passionné et
            dévoué, avec un vif intérêt pour l'exploration et l'utilisation du
            pouvoir des nouvelles technologies. Je suis également le créateur
            d'Héphaïstos Informatica.
</p> <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
Avec une solide base en développement web, je m'engage à créer des
            solutions numériques innovantes et conviviales qui répondent aux
            besoins uniques de chaque projet. Je maîtrise une variété de
            langages de programmation et d'outils, ce qui me permet de m'adapter
            aux nouveaux défis et de fournir des résultats de haute qualité.
</p> <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
Ma passion pour les nouvelles technologies me pousse à rester
            informé des dernières tendances et avancées du secteur. Je crois
            fermement que l'apprentissage continu est la clé pour rester
            compétitif et pertinent dans le paysage technologique en constante
            évolution.
</p> <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
Lorsque je ne code pas ou n'apprends pas de nouvelles technologies,
            vous pouvez me trouver en train de pratiquer diverses activités qui
            stimulent ma créativité et mes compétences en résolution de
            problèmes. Je suis un fervent partisan de l'équilibre entre vie
            professionnelle et vie privée pour assurer des performances
            optimales dans tous les aspects de la vie.
</p> <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
Merci d'avoir pris le temps d'en apprendre davantage sur moi. J'ai
            hâte de vous rencontrer et d'explorer les opportunités de
            collaboration potentielles. Créons quelque chose d'extraordinaire
            ensemble !
</p> <div class="flex items-center justify-between"> <a href="mailto:vctferreira.pro@gmail.com" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Envoyez-moi un e-mail
</a> </div> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data": data.footerData })} ` })}`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/fr/Apropos.astro", void 0);

const $$file = "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/fr/Apropos.astro";
const $$url = "/fr/Apropos";

export { $$Apropos as default, $$file as file, $$url as url };
