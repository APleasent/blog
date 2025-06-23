<template><div><h1 id="_1-工厂方法" tabindex="-1"><a class="header-anchor" href="#_1-工厂方法" aria-hidden="true">#</a> 1.工厂方法</h1>
<figure><img src="https://note.youdao.com/yws/res/9866/WEBRESOURCEf93e58ec62837119c8dd6f947f901121" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>工厂方法，又可以称为虚拟构造函数、Factory Method；其在父类中提供了一个创建对象的方法，允许子类决定实例化对象的类型。</p>
<h2 id="结构实现" tabindex="-1"><a class="header-anchor" href="#结构实现" aria-hidden="true">#</a> 结构实现</h2>
<figure><img src="https://note.youdao.com/yws/res/9907/WEBRESOURCEd9e66418e86986dee4fa04d7876c8529" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>如上图所示：</p>
<ol>
<li>抽象产品（Product）：定义产品的接口。</li>
<li>具体产品（Concrete）：返回具体类型。</li>
<li>抽象工厂类（Creator）：定义一个接口，包含一个抽象的工厂方法</li>
<li>具体工厂（Concrete Creators）：重写工厂方法，返回不同的对应类型</li>
</ol>
<h2 id="示例说明" tabindex="-1"><a class="header-anchor" href="#示例说明" aria-hidden="true">#</a> 示例说明：</h2>
<p>当我们实现跨平台UI组件开发时，需要保证在windows系统下的按钮再Linux系统下保持不变，就需要我们使用到工厂方法。</p>
<p><strong>类图分析：</strong>
<img src="https://note.youdao.com/yws/res/9974/WEBRESOURCE5e389578ddbec74f10ee0d6375c3cdaa" alt="image.png" loading="lazy"></p>
<p><strong>代码实现：</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@title</span>: APITest
 * <span class="token keyword">@date</span>: 2024/3/28 16:41
 * <span class="token keyword">@description</span>:
 */</span>

<span class="token comment">// 抽象产品</span>
<span class="token keyword">interface</span> <span class="token class-name">Button</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体产品</span>
<span class="token keyword">class</span> <span class="token class-name">WindowsButton</span> <span class="token keyword">implements</span> <span class="token class-name">Button</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Windows Button"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacButton</span> <span class="token keyword">implements</span> <span class="token class-name">Button</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Mac Button"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 抽象工厂</span>
<span class="token keyword">interface</span> <span class="token class-name">GUIFactory</span> <span class="token punctuation">{</span>
    <span class="token class-name">Button</span> <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 具体工厂</span>
<span class="token keyword">class</span> <span class="token class-name">WindowsFactory</span> <span class="token keyword">implements</span> <span class="token class-name">GUIFactory</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Button</span> <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WindowsButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacFactory</span> <span class="token keyword">implements</span> <span class="token class-name">GUIFactory</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Button</span> <span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MacButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">APITest</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">GUIFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WindowsFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Button</span> button <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        button<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，我们就简单实现了一个工厂模式。当然，具体的使用中并不会这么简单，接下来我们便以电商系统中常见的积分兑换礼品作为简单分析。</p>
<h2 id="实战分析" tabindex="-1"><a class="header-anchor" href="#实战分析" aria-hidden="true">#</a> 实战分析</h2>
<p>假设系统进行礼品兑换时，可分为优惠卷、实物商品、第三方兑换卡三种礼品。</p>
<h3 id="不使用设计模式实现" tabindex="-1"><a class="header-anchor" href="#不使用设计模式实现" aria-hidden="true">#</a> 不使用设计模式实现</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code> <span class="token keyword">public</span> <span class="token class-name">AwardRes</span> <span class="token function">awardToUser</span><span class="token punctuation">(</span><span class="token class-name">AwardReq</span> req<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> reqJson <span class="token operator">=</span> <span class="token class-name">JSONObject</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">AwardRes</span> awardRes <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"奖品发放开始{}。req:{}"</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span><span class="token function">getuId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> reqJson<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 按照不同类型方法商品[1优惠券、2实物商品、3第三方兑换卡]</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span><span class="token function">getAwardType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">CouponService</span> couponService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CouponService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 处理优惠卷业务</span>
                awardRes <span class="token operator">=</span> <span class="token constant">XXX</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span><span class="token function">getAwardType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">GoodsService</span> goodsService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GoodsService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 处理实物业务</span>
                awardRes <span class="token operator">=</span> <span class="token constant">XXX</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span><span class="token function">getAwardType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">IQiYiCardService</span> iQiYiCardService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IQiYiCardService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 处理第三方兑换卡业务</span>
                awardRes <span class="token operator">=</span> <span class="token constant">XXX</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"奖品发放完成{}。"</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span><span class="token function">getuId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"奖品发放失败{}。req:{}"</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span><span class="token function">getuId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> reqJson<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            awardRes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AwardRes</span><span class="token punctuation">(</span><span class="token string">"0001"</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> awardRes<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由以上代码可知，使用 if 判断虽然逻辑明了，并没有什么问题。 但是当奖品种类增加时，if 判断也要对应增加，这样会使得方法体行数增加，维护变得更加麻烦，总不能每次都要一个一个找过去吧。</p>
<h3 id="使用工厂方法" tabindex="-1"><a class="header-anchor" href="#使用工厂方法" aria-hidden="true">#</a> 使用工厂方法</h3>
<p>经过以上分析，我们可以抽象产品接口（<strong>ISouvenirs</strong>），而具体产品方法（<strong>CouponSouvenirsService，GoodsSouvenirsService，CardSouvenirsService</strong>）则对应不同的商品实现层。在使用工厂类实现统一返回。
如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 抽象产品如下：</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ISouvenirs</span><span class="token punctuation">{</span>
    
    <span class="token doc-comment comment">/**
    * 发送礼品
    */</span>
    <span class="token keyword">void</span> <span class="token function">sendSouvenirs</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 工厂类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StoreFactory</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ISouvenirs</span> <span class="token function">getSouvenirsService</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> commodityType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> commodityType<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">==</span> commodityType<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CouponSouvenirsService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">==</span> commodityType<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">GoodsSouvenirsService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">==</span> commodityType<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CardSouvenirsService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">"不存在的礼品类型"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实现</span>
 <span class="token keyword">public</span> <span class="token class-name">AwardRes</span> <span class="token function">awardToUser</span><span class="token punctuation">(</span><span class="token class-name">AwardReq</span> req<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">StoreFactory</span> storeFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StoreFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token class-name">ISouvenirs</span> souvenirs <span class="token operator">=</span> storeFactory<span class="token punctuation">.</span><span class="token function">getCommodityService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     souvenirs<span class="token punctuation">.</span><span class="token function">sendSouvenirs</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由以上可知，每种奖品的实现都在自己的类中，修改/删除也不影响其他功能的测试。而后续有新增奖品种类时，我们只需要按图索翼，新增对应的Service层，可以减低维护的难度。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>经过以上几次总结，我们可以知道工厂方法模式并不复杂。</p>
<h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3>
<p>避免工厂和产品的耦合，满足了单一原则，每一个业务逻辑实现都在自己所属类中完成。</p>
<h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3>
<p>但是这样子也会出现一个同样的问题，当有巨量的奖品类型时，工厂类中的 if 判断也会对应增加，从而使维护更难。因此这时需要搭配设计模式使用。</p>
</div></template>


