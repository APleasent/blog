import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  dest: "./dev-ops/nginx/html",
  base: "/",

  lang: "zh-CN",
  title: "小羊博客",
  description: "保持成长",

  theme,

});
