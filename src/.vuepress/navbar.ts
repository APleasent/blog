import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Python",
    icon: "python",
    children: [
      {
        text: "Python 基础",
        link: "/md/python/base/0. Anaconda 的卸载、重装.md",
      }
    ]
  },
  {
    text: "面向对象",
    icon: "object",
    children: [
      {
        text: "设计模式（Java版）",
        link: "/md/design-pattern/0.设计模式总结.md"
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
