import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Lottery 项目开发日志",
      icon: "laptop-code",
      prefix: "md/dev-log/",
      children: ["day01.md","day02.md","day03.md","day04.md","day05.md","day06.md","day07~day08.md","day09~day10.md","day11.md","day12.md"],
    },
  ],
  "/md/python/": [
    "",
    {
      text: "Python 基础",
      icon: "laptop-code",
      prefix: "base/",
      children: [
        "0. Anaconda 的卸载、重装.md",
      ]
    }
  ]
});
