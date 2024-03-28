import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D1VOB1hM.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"title":"D'm Repairs","url":"https://site-daniel-main.vercel.app/","image":"/dmrepairs.png","subtitle":"Services professionnels de réparation de téléphone","subtitleEn":"Professional phone repair services","subtitlePt":"Serviços profissionais de reparo de telefone","action":"Voir le site","actionEn":"See the website","actionPt":"Ver o site","text":"D'm Repairs est une entreprise spécialisée dans la réparation de téléphones. Ils proposent une large gamme de services pour résoudre divers problèmes de téléphone, notamment le remplacement d'écran, le changement de batterie, et plus encore. Visitez leur site web pour découvrir les services et faire réparer votre téléphone par des professionnels.","textEn":"D'm Repairs is a company specialized in phone repair. They offer a wide range of services to solve various phone problems, including screen replacement, battery change, and more. Visit their website to discover the services and have your phone repaired by professionals.","textPt":"D'm Repairs é uma empresa especializada em reparo de telefone. Eles oferecem uma ampla gama de serviços para resolver vários problemas de telefone, incluindo substituição de tela, troca de bateria e muito mais. Visite o site deles para descobrir os serviços e ter seu telefone reparado por profissionais."};
				const file = "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/content/projets/dmrepairs.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
