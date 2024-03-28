import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D1VOB1hM.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"title":"La patte de kiwi","url":"https://lapattedekiwi-six.vercel.app/","image":"/lapattedekiwi.png","subtitle":"Service de pet sitting fiable et abordable","subtitleEn":"Reliable and affordable pet sitting service","subtitlePt":"Serviço de pet sitting confiável e acessível","action":"Voir le site","actionEn":"See the website","actionPt":"Ver o site","text":"La patte de kiwi est un site web de pet sitting qui permet de mettre en relation des propriétaires d'animaux avec des pet sitters fiables et abordables. Le site est réalisé avec Next.js et TailwindCSS, et est déployé sur Vercel.","textEn":"La patte de kiwi is a pet sitting website that allows to connect pet owners with reliable and affordable pet sitters. The site is made with Next.js and TailwindCSS, and is deployed on Vercel.","textPt":"La patte de kiwi é um site de pet sitting que permite conectar proprietários de animais de estimação com pet sitters confiáveis e acessíveis. O site é feito com Next.js e TailwindCSS, e é implantado no Vercel."};
				const file = "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/content/projets/lapattedekiwi.md";
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
