import fs from "fs";
import path from "path";
import marked from "marked";

function processMarkdown(markdown) {
  // TODO(L): Improve front matter extraction/schema.
  const match = /---\n([\s\S]+?)\n---/.exec(markdown);
  const frontMatter = match[1];
  const content = markdown.slice(match[0].length);

  const metadata = {};
  frontMatter.split("\n").forEach(pair => {
    const colonIndex = pair.indexOf(":");
    metadata[pair.slice(0, colonIndex).trim()] = pair.slice(colonIndex + 1).trim();
  });
  return { metadata, content };
}

function getData(content, page) {
  try {
    const directoryPath = `content/${content}`;
    const pages = fs
      .readdirSync(directoryPath)
      .filter(file => file[0] !== "." && path.extname(file) === ".md")
      .map(file => {
        const markdown = fs.readFileSync(`${directoryPath}/${file}`, "utf-8");
        const processed = processMarkdown(markdown);
        // TODO(M): Syntax highlighting, subsections, anchor links.

        const html = marked(processed.content);
        const slug = file.replace(/^\d+-/, "").replace(/\.md$/, "");
        let href = `documentation/${content}/${slug}/`;
        if (slug === "index") {
          href = `documentation/${content}/`;
        }
        return {
          html,
          metadata: processed.metadata,
          slug,
          href,
          file
        };
      });

    return {
      pages,
      page: pages.reduce((p, c) => {
        if (p != null && p.slug === page) {
          return p;
        } else if (c.slug === page) {
          return c;
        } else {
          return null;
        }
      }, null)
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function get(request, response, next) {
  const { content, page } = request.params;
  const data = getData(content, page);
  if (data == null || data.page == null) {
    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: "Not Found" }));
  } else {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(data));
  }
}
