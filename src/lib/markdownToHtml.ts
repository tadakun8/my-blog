import { remark } from "remark";
import html from "remark-html";
import prism from "remark-prism";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    // https://github.com/sergioramos/remark-prism/issues/265
    .use(html, { sanitize: false })
    // @ts-ignore　The type of prism does not match the type of mark.use()
    .use(prism)
    .process(markdown);
  return result.toString();
}
