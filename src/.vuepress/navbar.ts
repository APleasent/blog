import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Python",
    icon: "python",
    // link: "/md/python/",
    children: [
      {
        text: "Python 基础",
        link: "/md/python/base/0. Anaconda 的卸载、重装.md",
      }
    ]
  },
  {
    text: "开发日志",
    icon: "book",
    link: "/md/dev-log/day01.md",
  },
  {
    text: "关于我",
    icon: "user",
    link: "/md/about-me.md",
  },  
]);
