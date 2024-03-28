import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_D1VOB1hM.mjs';
import { g as getLangFromUrl, a as getLandingData, $ as $$Layout, b as $$Header, c as $$Footer } from './About_CTfOKHJi.mjs';

const $$Astro = createAstro("https://luna-landing-rust.vercel.app/");
const $$Sobre = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sobre;
  const lang = getLangFromUrl(Astro2.url);
  const data = await getLandingData({ lang });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": data.meta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data": data.headerData })} ${maybeRenderHead()}<main class="flex flex-col justify-center items-center"> <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto my-20 mt-32 lg:py-0 w-full"> <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700"> <div class="p-6 space-y-4 md:space-y-6 sm:p-8"> <img src="/moi.png" alt="Victor Ferreira" class="mx-auto w-40 h-40 rounded-full bg-primary"> <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
Victor Ferreira
</h1> <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
Desenvolvedor Web | Apaixonado por Novas Tecnologias
</p> <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
Olá, eu sou Victor Ferreira, um desenvolvedor web apaixonado e
            dedicado, com um grande interesse em explorar e utilizar o poder das
            novas tecnologias. Eu também sou o criador da Héphaïstos
            Informatica.
</p> <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
Com uma sólida base em desenvolvimento web, estou comprometido em
            criar soluções digitais inovadoras e amigáveis que atendam às
            necessidades únicas de cada projeto. Eu domino uma variedade de
            linguagens de programação e ferramentas, o que me permite me adaptar
            aos novos desafios e fornecer resultados de alta qualidade.
</p> <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
Minha paixão por novas tecnologias me impulsiona a me manter
            atualizado sobre as últimas tendências e avanços do setor. Eu
            acredito firmemente que a aprendizagem contínua é a chave para se
            manter competitivo e relevante no cenário tecnológico em constante
            evolução.
</p> <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
Quando não estou codificando ou aprendendo novas tecnologias, você
            pode me encontrar praticando várias atividades que estimulam minha
            criatividade e habilidades de resolução de problemas. Sou um grande
            defensor do equilíbrio entre trabalho e vida pessoal para garantir
            um desempenho ideal em todos os aspectos da vida.
</p> <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
Obrigado por dedicar um tempo para conhecer mais sobre mim. Estou
            ansioso para conhecê-lo e explorar oportunidades de colaboração.
            Vamos criar algo extraordinário juntos!
</p> <div class="flex items-center justify-between"> <a href="mailto:vctferreira.pro@gmail.com" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Envie-me um e-mail
</a> </div> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data": data.footerData })} ` })}`;
}, "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/pt/Sobre.astro", void 0);

const $$file = "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/pages/pt/Sobre.astro";
const $$url = "/pt/Sobre";

export { $$Sobre as default, $$file as file, $$url as url };
