<template><div><h1 id="_0-设计模式是什么" tabindex="-1"><a class="header-anchor" href="#_0-设计模式是什么" aria-hidden="true">#</a> 0.设计模式是什么？</h1>
<p>设计模式是软件设计中常见问题的典型解决方案。他们就像能根据需求调整的预制蓝图，可用于解决代码中反复出现的设计问题。</p>
<p>他和算法有些类似，但是却又不完全相同。
如果把程序员比作厨子的话，那算法就好比菜谱，他详细的描述了从头到尾的步骤，只需要厨子按图索骥就好。而设计模式就好比菜系，厨子只知道结果是什么，但详细步骤得自己实现。<br></p>
<h2 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h2>
<p>设计模式是定义了一种团队能够高效沟通的通用语言，你只需要说：“哦，这里用单例就可以实现了”，这时团队的大部分人都会理解你的意思，而不需要你在解释什么是单例。
<em><strong>如果你只有一把铁锤，那么房间里的任何东西看上去都是钉子。</strong></em>
有趣的是，在学习了设计模式之后，你会发现我们写的代码中处处能用到这个模式，比如策略模式可以简单的使用 lambda 函数来实现。这也会给初学者带来很大的困扰</p>
<h2 id="原则" tabindex="-1"><a class="header-anchor" href="#原则" aria-hidden="true">#</a> 原则</h2>
<ol>
<li>单一职责（一个类和方法只做一件事）</li>
<li>里氏替换（多态，子类在扩展父类）</li>
<li>依赖倒置（细节依赖抽象，下层依赖上层）</li>
<li>接口隔离（建立单一接口）</li>
<li>迪米特原则 （最少知道，降低耦合）</li>
<li>开闭原则 （在实现新功能时保持已有代码不变，<mark>抽象架构，扩展实现</mark>）</li>
</ol>
<h2 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h2>
<ol>
<li>创建型模式
<em><strong>这类模式提供创建对象的机制，能够提升已有代码的灵活性和可复用性</strong></em></li>
</ol>
<table>
<thead>
<tr>
<th style="text-align:center">序号</th>
<th style="text-align:center">类型</th>
<th style="text-align:center">解析图</th>
<th style="text-align:center">举例说明</th>
<th style="text-align:center">实现要点</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">工厂方法</td>
<td style="text-align:center"><img src="https://note.youdao.com/yws/res/9375/WEBRESOURCE1a210e09e71fd4faa4f3c76481c17b3c" alt="image" loading="lazy"></td>
<td style="text-align:center">手机是一个抽象产品，而小米，华为，苹果是具体的产品实现，而不同牌的手机在各自的生产厂家中生产</td>
<td style="text-align:center">定义一个创建对象的接口，让子类自己决定实例化哪一个工厂类，使创建过程延迟到子类进行</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">抽象工厂</td>
<td style="text-align:center"><img src="https://note.youdao.com/yws/res/9431/WEBRESOURCE81416bb3e82c259787db4f4972298d02" alt="image" loading="lazy"></td>
<td style="text-align:center">华为和苹果都有手机，耳机，手环等业务。但是华为工厂只会生产华为系列品牌，相对应的苹果也相同。（替换Redis双集群升级，代理类抽象场景）</td>
<td style="text-align:center">定义一系列相关或者相互依赖对象的接口，放入不同抽象工厂中，而不需要指定他们具体的类</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">建造者</td>
<td style="text-align:center"><img src="https://note.youdao.com/yws/res/9469/WEBRESOURCE8b49dc0f1c818a78e85bdcc2367179d6" alt="生成器.png" loading="lazy"></td>
<td style="text-align:center">台式电脑由显卡，主机，硬盘，内存等组件组装而成，但每个组件也有不同型号，选择套餐</td>
<td style="text-align:center">将一个复杂的构建拆分，使得同样的过程可以创建不同的对象</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">原型</td>
<td style="text-align:center"><img src="https://note.youdao.com/yws/res/9498/WEBRESOURCEe1b0c6e8b1971c334cb797148afff130" alt="原型.png" loading="lazy"></td>
<td style="text-align:center">软考，考生题目和答案实现乱排序</td>
<td style="text-align:center">用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center">单例</td>
<td style="text-align:center"><img src="https://note.youdao.com/yws/res/9513/WEBRESOURCEe3210853d4e9380215163880efc41c50" alt="单例.png" loading="lazy"></td>
<td style="text-align:center">只有一片雪花</td>
<td style="text-align:center">保证一个类仅有一个实例，并提供一个访问它的方法</td>
</tr>
</tbody>
</table>
<ol>
<li>结构型模式
<em><strong>这类模式介绍如何将对象和类组装成较大的结构，并同时保持结构的灵活和高效</strong></em></li>
</ol>
<table>
<thead>
<tr>
<th style="text-align:center">序号</th>
<th style="text-align:center">类型</th>
<th style="text-align:center">解析图</th>
<th style="text-align:center">举例说明</th>
<th style="text-align:center">实现要点</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">适配器</td>
<td style="text-align:center"><img src="https://note.youdao.com/yws/res/9538/WEBRESOURCEf817b0df3d86a3c3fff6dc3c5a53a3de" alt="适配器.png" loading="lazy"></td>
<td style="text-align:center">扩展坞功能</td>
<td style="text-align:center">将一个类的接口转换为客户希望的另外一个接口，适配器模式使得原本接口不兼容的类可以一起工作</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">桥接</td>
<td style="text-align:center"><img src="https://note.youdao.com/yws/res/9557/WEBRESOURCE1b43160c6334823273376e2627401bd8" alt="桥接.png" loading="lazy"></td>
<td style="text-align:center">多支付渠道（微信、支付宝）以及多支付模式（指纹、密码）等</td>
<td style="text-align:center">将一个大类或一系列紧密的类拆分为抽象和实现两个独立的层次，从而在开发时分别使用</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">组合</td>
<td style="text-align:center"><img src="https://note.youdao.com/yws/res/9577/WEBRESOURCE4465e0aa7654cf088d15a650cad33628" alt="组合.png" loading="lazy"></td>
<td style="text-align:center">获取各大省份和城市信息</td>
<td style="text-align:center">将对象组合成树状结构用来表示 “部分-整体”的层次结构。对于使用单个对象还是组合对象的使用具有一致性</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">装饰</td>
<td style="text-align:center"><img src="https://note.youdao.com/yws/res/9599/WEBRESOURCE1ecc1e5b3ba8f063aec6e57d668c4da4" alt="装饰.png" loading="lazy"></td>
<td style="text-align:center">SSO单点登录扩展拦截用户（HttpServletRequest 修改token）</td>
<td style="text-align:center">动态的为一个对象添加一些功能。仅增加一些功能时，装饰器模式相比于子类更灵活，也更易于维护</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center">外观</td>
<td style="text-align:center"><img src="https://note.youdao.com/yws/res/9613/WEBRESOURCE440e950faaccc890e2c0fe54b4eb9ea0" alt="外观.png" loading="lazy"></td>
<td style="text-align:center">类似于网关，统一控制接口分发，但不关注于内部实现</td>
<td style="text-align:center">定义了一个高层接口，为框架和复杂类提供了一个简单的入口，因此又称门面模式</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center">享元</td>
<td style="text-align:center"><img src="https://note.youdao.com/yws/res/9633/WEBRESOURCE2f149e44bc6b6c72be8776b9d7304315" alt="享元.png" loading="lazy"></td>
<td style="text-align:center">Redis秒杀场景，提供了活动与库存信息查询</td>
<td style="text-align:center">适用于需要管理大量细粒度对象、希望减少内存占用并提高性能的情况下</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center">代理</td>
<td style="text-align:center"><img src="https://note.youdao.com/yws/res/9645/WEBRESOURCE39025595ade4a87224bf4c2ad12b12ab" alt="代理.png" loading="lazy"></td>
<td style="text-align:center">类似于 AOP（如Mybatis定义DAO接口）</td>
<td style="text-align:center">让你能够提供对象的替代品或者占位符。代理控制着对于原对象的访问，并允许在将请求提交给对象前后进行一些处理</td>
</tr>
</tbody>
</table>
<ol>
<li>行为模式
<em><strong>这类模式负责对象间的高效沟通和职责委派</strong></em></li>
</ol>
<table>
<thead>
<tr>
<th style="text-align:center">序号</th>
<th style="text-align:center">类型</th>
<th style="text-align:center">解析图</th>
<th style="text-align:center">举例说明</th>
<th style="text-align:center">实现要点</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">责任链</td>
<td style="text-align:center"><img src="https://note.youdao.com/yws/res/9677/WEBRESOURCE95bea98f9db28b51cb040ed196deed05" alt="image.png" loading="lazy"></td>
<td style="text-align:center">钉钉OA审批</td>
<td style="text-align:center">避免消费者和生产者耦合在一起，允许每个对象都可以处理请求，或将起传递给下一个链式的处理者</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">命令</td>
<td style="text-align:center"><img src="https://note.youdao.com/yws/res/9701/WEBRESOURCE0b2e5123889e5ce5e0c985f49c5b7a04" alt="image.png" loading="lazy"></td>
<td style="text-align:center">小二点单厨师炒菜</td>
<td style="text-align:center">定义一个对象，从而使你可以用不同的请求对客户进行操作，并且允许撤销请求</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">迭代器</td>
<td style="text-align:center"><img src="https://note.youdao.com/yws/res/9713/WEBRESOURCEa858c109e2d8c9b7339c532047bf1fd9" alt="image.png" loading="lazy"></td>
<td style="text-align:center">遍历集合信息</td>
<td style="text-align:center">在你无需暴露对象内部结构的情况下遍历集合中所有的元素</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">中介者模式</td>
<td style="text-align:center"><img src="https://note.youdao.com/yws/res/9727/WEBRESOURCE853fab39256e47bfc7648d1063232be1" alt="image.png" loading="lazy"></td>
<td style="text-align:center">Mybatis相比于JDBC的改进</td>
<td style="text-align:center">用一个对象封装一系列的对象交互，减少了对象之间混乱无序的依赖关系。迫使其他对象只能和中介者合作。</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center">备忘录</td>
<td style="text-align:center"><img src="https://note.youdao.com/yws/res/9763/WEBRESOURCE0a2f896b95d934445bd9ce8d528b122f" alt="image.png" loading="lazy"></td>
<td style="text-align:center">配置文件回滚</td>
<td style="text-align:center">在不暴露对象实现细节的情况下保存和恢复之前的状态</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center">观察者</td>
<td style="text-align:center"><img src="https://note.youdao.com/yws/res/9782/WEBRESOURCE67224922b50c8ae9afc79c3c06aa8822" alt="image.png" loading="lazy"></td>
<td style="text-align:center">undoLog,redoLog文件</td>
<td style="text-align:center">定义对象间一对多的依赖关系，当对象状态改变时，所有依赖与它的对象都得到通知并且自动更新</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center">状态</td>
<td style="text-align:center"><img src="https://note.youdao.com/yws/res/9809/WEBRESOURCEf224ca4ab48fc2103705bba4b0880698" alt="image.png" loading="lazy"></td>
<td style="text-align:center">掘金的文章状态（审核，草稿，发布）</td>
<td style="text-align:center">允许对象在内部状态发生改变时，对象看起来好像修改了它的类</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:center">策略</td>
<td style="text-align:center"><img src="https://note.youdao.com/yws/res/9827/WEBRESOURCEbd7746849f25ba0c493c4557524c2411" alt="image.png" loading="lazy"></td>
<td style="text-align:center">商品的多种优惠方案</td>
<td style="text-align:center">定义一系列的算法，把他们单独封装起来，并且允许互相替换</td>
</tr>
<tr>
<td style="text-align:center">9</td>
<td style="text-align:center">模板方法</td>
<td style="text-align:center"><img src="https://note.youdao.com/yws/res/9837/WEBRESOURCE22918efecdcbf93867ce553a8bd89126" alt="image.png" loading="lazy"></td>
<td style="text-align:center">一个模板对应多个商品生成海报</td>
<td style="text-align:center">定义一个骨架类，将其中步骤延迟到子类中。这样可以使得子类在不修改结构的情况下重写特定步骤</td>
</tr>
<tr>
<td style="text-align:center">10</td>
<td style="text-align:center">访问者</td>
<td style="text-align:center"><img src="https://note.youdao.com/yws/res/9852/WEBRESOURCE442ee8b5eb3dbb108e9125deead14aac" alt="image.png" loading="lazy"></td>
<td style="text-align:center">给不同的客户推销不同的保险</td>
<td style="text-align:center">将数据结构和数据操作分离</td>
</tr>
</tbody>
</table>
</div></template>


