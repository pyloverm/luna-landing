import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D1VOB1hM.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Au Rêve de Néva","url":"https://aurevedeneva.vercel.app/","image":"/aurevedeneva.png","subtitle":"Pension pour chat / Elevage de chat","subtitleEn":"Cat boarding / Cat breeding","subtitlePt":"Hotel para gatos / Criação de gatos","action":"Voir le site","actionEn":"See the website","actionPt":"Ver o site","text":"Au Rêve de Néva est un site web d'une pension pour chat / elevage de chat , il permet de mettre en relation des propriétaires de chat avec une pension pour chat. Le site est réalisé avec Next.js et TailwindCSS. Il est déployé sur Vercel.","textEn":"Au Rêve de Néva is a website for a cat boarding / cat breeding, it allows to connect cat owners with a cat boarding. The site is made with Next.js and TailwindCSS. It is deployed on Vercel.","textPt":"Au Rêve de Néva é um site para um hotel para gatos / criação de gatos, ele permite conectar proprietários de gatos com um hotel para gatos. O site é feito com Next.js e TailwindCSS. Ele é implantado no Vercel."};
				const file = "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/content/projets/aurevendeneva.md";
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
