import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/md/python/": [
    {
      text: "Python 基础",
      icon: "laptop-code",
      prefix: "base/",
      children: [
        "0. Anaconda 的卸载、重装.md",
      ]
    }
  ],
  "/md/design-pattern/": [
    {
      text: "设计模式（Java版）",
      icon: "object",
      prefix: "",
      children: [
        "0.设计模式总结.md",
        "1.工厂方法.md",
        "2.抽象工厂.md",
        "3.生成器.md",
        "4.原型模式.md"
      ]
    }
  ],
  "/": [
    "",
    {
      text: "Lottery 项目开发日志",
      icon: "laptop-code",
      prefix: "md/dev-log/",
      children: ["day01.md","day02.md","day03.md","day04.md","day05.md","day06.md","day07~day08.md","day09~day10.md","day11.md","day12.md"],
    },
  ],

});
