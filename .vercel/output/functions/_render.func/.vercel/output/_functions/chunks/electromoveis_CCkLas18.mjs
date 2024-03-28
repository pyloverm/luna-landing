import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_D1VOB1hM.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Electromoveis","url":"https://elecv2.vercel.app/","image":"/electromoveis.png","subtitle":"Vente de produits électroniques et de meubles","subtitleEn":"Sale of electronic products and furniture","subtitlePt":"Venda de produtos eletrônicos e móveis","action":"Voir le site","actionEn":"See the website","actionPt":"Ver o site","text":"Electromoveis est une entreprise spécialisée dans la vente de produits électroniques et de meubles. Ils proposent une large gamme de produits et de services pour répondre aux besoins de leurs clients. Leur site web est construit avec Next.js et TailwindCSS et est déployé sur Vercel.","textEn":"Electromoveis is a company specialized in the sale of electronic products and furniture. They offer a wide range of products and services to meet the needs of their customers. Their website is built with Next.js and TailwindCSS and is deployed on Vercel.","textPt":"Electromoveis é uma empresa especializada na venda de produtos eletrônicos e móveis. Eles oferecem uma ampla gama de produtos e serviços para atender às necessidades de seus clientes. Seu site é construído com Next.js e TailwindCSS e é implantado no Vercel."};
				const file = "C:/Users/thonon/OneDrive/Bureau/ds/hep/hepaistos-landing/src/content/projets/electromoveis.md";
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