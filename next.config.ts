import type { NextConfig } from "next";
import lingoCompiler from "lingo.dev/compiler";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  trailingSlash: true,
};

export default lingoCompiler.next({
  sourceLocale: "en",
  targetLocales: ["es", "fr", "de"],
  models: {
    "*:*": "groq:mistral-saba-24b",
  },
})(nextConfig);
