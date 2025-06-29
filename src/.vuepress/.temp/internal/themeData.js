export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$m0uVE1kSpEQ0lGs/UJcjrOsKBr8zeJ1wjp2MLDsd1jkmDbGHXcmz2\"]}},\"author\":{\"name\":\"喜羊羊\",\"url\":\"https://mister-hope.com\"},\"repo\":\"APleasent/blog\",\"docsDir\":\"src\",\"footer\":\"\",\"displayFooter\":true,\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"在 GitHub 上编辑此页\",\"print\":\"打印\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[\"/\",{\"text\":\"Python\",\"icon\":\"python\",\"children\":[{\"text\":\"Python 基础\",\"link\":\"/md/python/base/0. Anaconda 的卸载、重装.md\"}]},{\"text\":\"面向对象\",\"icon\":\"object\",\"children\":[{\"text\":\"设计模式（Java版）\",\"link\":\"/md/design-pattern/0.设计模式总结.md\"}]},{\"text\":\"开发日志\",\"icon\":\"book\",\"link\":\"/md/dev-log/day01.md\"},{\"text\":\"关于我\",\"icon\":\"user\",\"link\":\"/md/about-me.md\"}],\"sidebar\":{\"/md/python/\":[{\"text\":\"Python 基础\",\"icon\":\"laptop-code\",\"prefix\":\"base/\",\"children\":[\"0. Anaconda 的卸载、重装.md\"]}],\"/md/design-pattern/\":[{\"text\":\"设计模式（Java版）\",\"icon\":\"object\",\"prefix\":\"\",\"children\":[\"0.设计模式总结.md\",\"1.工厂方法.md\",\"2.抽象工厂.md\",\"3.生成器.md\",\"4.原型模式.md\"]}],\"/\":[\"\",{\"text\":\"Lottery 项目开发日志\",\"icon\":\"laptop-code\",\"prefix\":\"md/dev-log/\",\"children\":[\"day01.md\",\"day02.md\",\"day03.md\",\"day04.md\",\"day05.md\",\"day06.md\",\"day07~day08.md\",\"day09~day10.md\",\"day11.md\",\"day12.md\"]}]}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
