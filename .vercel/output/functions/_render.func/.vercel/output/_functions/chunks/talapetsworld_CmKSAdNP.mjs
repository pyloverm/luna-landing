import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D1VOB1hM.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Tala Pet's World","url":"https://talapetsworld-smoky.vercel.app/","image":"/talapetsworld.png","subtitle":"Service de pet sitting professionnel et attentionné","subtitleEn":"Professional and caring pet sitting service","subtitlePt":"Serviço de pet sitting profissional e atencioso","action":"Voir le site","actionEn":"See the website","actionPt":"Ver o site","text":"Tala Pet's World est un site web de pet sitting qui permet de mettre en relation des propriétaires d'animaux avec des pet sitters professionnels et attentionnés. Le site est réalisé avec Next.js et TailwindCSS, et est déployé sur Vercel.","textEn":"Tala Pet's World is a pet sitting website that allows to connect pet owners with professional and caring pet sitters. The site is made with Next.js and TailwindCSS, and is deployed on Vercel.","textPt":"Tala Pet's World é um site de pet sitting que permite conectar proprietários de animais de estimação com pet sitters profissionais e atenciosos. O site é feito com Next.js e TailwindCSS, e é implantado no Vercel."};
				const file = "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/content/projets/talapetsworld.md";
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
