import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { productSchema, type Product } from "./schemas";

const CONTENT_DIR = path.join(process.cwd(), "content", "products");

function readProductFile(fileName: string): Product {
  const filePath = path.join(CONTENT_DIR, fileName);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = productSchema.parse(data);
  return { ...frontmatter, body: content };
}

export function getAllProducts(): Product[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map(readProductFile)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getProductBySlug(slug: string): Product | null {
  try {
    return readProductFile(`${slug}.mdx`);
  } catch {
    return null;
  }
}
