import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Pin the workspace root to this app. Turbopack otherwise infers it from the
  // highest lockfile it can find walking up the tree, which escapes the repo
  // whenever it sits inside another project (an agent worktree, a parent
  // folder with its own lockfile) and breaks module resolution.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
