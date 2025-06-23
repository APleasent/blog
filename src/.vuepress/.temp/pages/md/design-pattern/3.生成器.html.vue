<template><div><h1 id="_3-生成器-建造者" tabindex="-1"><a class="header-anchor" href="#_3-生成器-建造者" aria-hidden="true">#</a> 3.生成器（建造者）</h1>
<figure><img src="https://note.youdao.com/yws/res/10475/WEBRESOURCE5add0ded3f302a93d32908cdb7a14203" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>建造者模式；
高端说法是，使你能够分布创建复杂对象。该模式允许你使用相同的创建代码生成不同类型和形式的对象。
通俗的讲，就是多个简单对象通过一步步组装称为一个复杂对象的过程。
低俗的讲，就相当于虽然都是房子，但有的是别墅精装，有的是穷装。家具不同，电器牌子也不同，但他们最后都生成了一个复杂对象（装修好的房子）。人类的悲欢离合并不相通。</p>
<h2 id="结构实现" tabindex="-1"><a class="header-anchor" href="#结构实现" aria-hidden="true">#</a> 结构实现</h2>
<figure><img src="https://note.youdao.com/yws/res/10515/WEBRESOURCEa67113e916880bd4f8e664b7cf1d25c4" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<ol>
<li>生成器（Bulid）：定义构建产品各个部分的抽象接口的方法</li>
<li>具体生成器（Concrete Builder）：实现生成器的接口，构建产品的各个组成部分，并提供一个方法返回最终的产品。</li>
<li>产品（Product）：被构建的复杂对象，包含多个组成部分。</li>
<li>主管（Director）：调用构造者的具体方法，按照一定顺序或者逻辑来生成产品</li>
<li>客户端（Client）：告诉主管获取产品，该结构可有可无。</li>
</ol>
<h2 id="按图索骥" tabindex="-1"><a class="header-anchor" href="#按图索骥" aria-hidden="true">#</a> 按图索骥</h2>
<p>老规矩，我们拿车车来举例子，车型又可以分为小车，suv等，座位也可以分为五座，六座等，配饰也细分不同，而我们也要根据不同配置生产不同Manual（说明书）
产品类如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@title</span>: Car
 * <span class="token keyword">@date</span>: 2024/4/24 下午2:12
 * <span class="token keyword">@description</span>: 
 */</span>

<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> seats<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> engine<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> tripComputer<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> gps<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@title</span>: Manual
 * <span class="token keyword">@date</span>: 2024/4/24 下午2:20
 * <span class="token keyword">@description</span>: 
 */</span>

<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Manual</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> seats<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> engine<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> tripComputer<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> gps<span class="token punctuation">;</span>

    <span class="token comment">// 私有属性xxx</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>抽象生成器</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@title</span>: Builder
 * <span class="token keyword">@date</span>: 2024/4/24 下午2:22
 * <span class="token keyword">@description</span>:
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Builder</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">setSeats</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">setEngine</span><span class="token punctuation">(</span><span class="token class-name">String</span> engine<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">setTripComputer</span><span class="token punctuation">(</span><span class="token class-name">String</span> tripComputer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">setGPS</span><span class="token punctuation">(</span><span class="token class-name">String</span> gps<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体生产器</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@title</span>: CarBuilder
 * <span class="token keyword">@date</span>: 2024/4/24 下午2:26
 * <span class="token keyword">@description</span>:
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CarBuilder</span> <span class="token keyword">implements</span> <span class="token class-name">Builder</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Car</span> car<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">CarBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSeats</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>car<span class="token punctuation">.</span><span class="token function">setSeats</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setEngine</span><span class="token punctuation">(</span><span class="token class-name">String</span> engine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>car<span class="token punctuation">.</span><span class="token function">setEngine</span><span class="token punctuation">(</span>engine<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setTripComputer</span><span class="token punctuation">(</span><span class="token class-name">String</span> tripComputer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>car<span class="token punctuation">.</span><span class="token function">setTripComputer</span><span class="token punctuation">(</span>tripComputer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setGPS</span><span class="token punctuation">(</span><span class="token class-name">String</span> gps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>car<span class="token punctuation">.</span><span class="token function">setGps</span><span class="token punctuation">(</span>gps<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Car</span> <span class="token function">getCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Car</span> car <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>car<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> car<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@title</span>: CarManualBuilder
 * <span class="token keyword">@date</span>: 2024/4/24 下午2:54
 * <span class="token keyword">@description</span>:
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CarManualBuilder</span> <span class="token keyword">implements</span> <span class="token class-name">Builder</span><span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Manual</span> manual<span class="token punctuation">;</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>manual <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Manual</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setSeats</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>manual<span class="token punctuation">.</span><span class="token function">setSeats</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setEngine</span><span class="token punctuation">(</span><span class="token class-name">String</span> engine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>manual<span class="token punctuation">.</span><span class="token function">setEngine</span><span class="token punctuation">(</span>engine<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setTripComputer</span><span class="token punctuation">(</span><span class="token class-name">String</span> tripComputer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>manual<span class="token punctuation">.</span><span class="token function">setTripComputer</span><span class="token punctuation">(</span>tripComputer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setGPS</span><span class="token punctuation">(</span><span class="token class-name">String</span> gps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>manual<span class="token punctuation">.</span><span class="token function">setGps</span><span class="token punctuation">(</span>gps<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总监</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@title</span>: Direct
 * <span class="token keyword">@date</span>: 2024/4/24 下午5:49
 * <span class="token keyword">@description</span>:
 */</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Direct</span> <span class="token punctuation">{</span>

    <span class="token comment">// 以下可要可不要</span>
<span class="token comment">//    private Builder builder;</span>
<span class="token comment">//</span>
<span class="token comment">//    void setBuilder(Builder builder) {</span>
<span class="token comment">//        this.builder = builder;</span>
<span class="token comment">//    }</span>

    <span class="token keyword">void</span> <span class="token function">constructSportsCar</span><span class="token punctuation">(</span><span class="token class-name">Builder</span> builder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">setSeats</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">setEngine</span><span class="token punctuation">(</span><span class="token string">"马自达"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">setGPS</span><span class="token punctuation">(</span><span class="token string">"true"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@org.junit.Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Direct</span> direct <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Direct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">CarBuilder</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CarBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        direct<span class="token punctuation">.</span><span class="token function">constructSportsCar</span><span class="token punctuation">(</span>builder<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Car</span> car <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">getCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>car<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好了，按图索骥环节到此结束，当然以上代码会给人一种疑问，那就是生成器不是要返回一个复杂对象吗？
而以上代码我只看到了两个一模一样的对象，你这个demo也没看出来有什么用呀。
莫急莫急，听小羊缓慢到来。
通过以上demo，我们可以观察出生成器可以创建不遵循相同接口的产品，即可以避免“重叠构函数”的出现。也就是使用代码创建不同形式的产品（也就是车辆和车辆说明书）。</p>
<p>说这么多，可能也有点懵逼，没事，下面请看实战环节。</p>
<h2 id="实例说明" tabindex="-1"><a class="header-anchor" href="#实例说明" aria-hidden="true">#</a> 实例说明</h2>
<p>很多产品都会推出自家的（或者包含合作公司的产品）套餐服务，让我们拿装修公司来举例，一般有装修风格包含欧式豪华，轻奢，现代简约等，而这些套餐又根据价格不同推出不同的商品组合。
那我们简单以吊顶，地板，地砖，涂料举例说明</p>
<h3 id="问题说明" tabindex="-1"><a class="header-anchor" href="#问题说明" aria-hidden="true">#</a> 问题说明</h3>
<p>目前有物料接口</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Matter</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 场景；地板、地砖、涂料、吊顶
     */</span>
    <span class="token class-name">String</span> <span class="token function">scene</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 品牌
     */</span>
    <span class="token class-name">String</span> <span class="token function">brand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 型号
     */</span>
    <span class="token class-name">String</span> <span class="token function">model</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 平米报价
     */</span>
    <span class="token class-name">BigDecimal</span> <span class="token function">price</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 描述
     */</span>
    <span class="token class-name">String</span> <span class="token function">desc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目前产品说明：</p>
<table>
<thead>
<tr>
<th>产品名</th>
<th>类名以及说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>吊顶</td>
<td>LevelOneCeiling（一级顶）、LevelTwoCeiling（二级顶）</td>
</tr>
<tr>
<td>涂料</td>
<td>DuluxCoat（多乐士）、LiBangCoat（立邦）</td>
</tr>
<tr>
<td>地板</td>
<td>DerFloor（德尔）、ShengXiangFloor （圣像）</td>
</tr>
<tr>
<td>地砖</td>
<td>DongPengTile（东鹏）、MarcoPoloTile（马可波罗）</td>
</tr>
</tbody>
</table>
<p>以上每个产品的类只是继承了 Matter 接口，在对应的重写方法中输出不同数据。</p>
<h3 id="if-else-实现" tabindex="-1"><a class="header-anchor" href="#if-else-实现" aria-hidden="true">#</a> if - else 实现</h3>
<p><strong>请记住一点，没有什么是 if-else实现不了的，如果有，那就是你if的不够。</strong>
请看实现代码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DecorationPackageController</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getMatterList</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span> area<span class="token punctuation">,</span> <span class="token class-name">Integer</span> level<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Matter</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Matter</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 装修清单</span>
        <span class="token class-name">BigDecimal</span> price <span class="token operator">=</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ZERO</span><span class="token punctuation">;</span>          <span class="token comment">// 装修价格</span>

        <span class="token comment">// 豪华欧式</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">==</span> level<span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token class-name">LevelTwoCeiling</span> levelTwoCeiling <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LevelTwoCeiling</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 吊顶，二级顶</span>
            <span class="token class-name">DuluxCoat</span> duluxCoat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DuluxCoat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                   <span class="token comment">// 涂料，多乐士</span>
            <span class="token class-name">ShengXiangFloor</span> shengXiangFloor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ShengXiangFloor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 地板，圣象</span>

            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>levelTwoCeiling<span class="token punctuation">)</span><span class="token punctuation">;</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>duluxCoat<span class="token punctuation">)</span><span class="token punctuation">;</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>shengXiangFloor<span class="token punctuation">)</span><span class="token punctuation">;</span>

            price <span class="token operator">=</span> price<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>area<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"0.2"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>levelTwoCeiling<span class="token punctuation">.</span><span class="token function">price</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            price <span class="token operator">=</span> price<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>area<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"1.4"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>duluxCoat<span class="token punctuation">.</span><span class="token function">price</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            price <span class="token operator">=</span> price<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>area<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>shengXiangFloor<span class="token punctuation">.</span><span class="token function">price</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>

        <span class="token comment">// 轻奢田园</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">==</span> level<span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token class-name">LevelTwoCeiling</span> levelTwoCeiling <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LevelTwoCeiling</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 吊顶，二级顶</span>
            <span class="token class-name">LiBangCoat</span> liBangCoat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LiBangCoat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                <span class="token comment">// 涂料，立邦</span>
            <span class="token class-name">MarcoPoloTile</span> marcoPoloTile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MarcoPoloTile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// 地砖，马可波罗</span>

            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>levelTwoCeiling<span class="token punctuation">)</span><span class="token punctuation">;</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>liBangCoat<span class="token punctuation">)</span><span class="token punctuation">;</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>marcoPoloTile<span class="token punctuation">)</span><span class="token punctuation">;</span>

            price <span class="token operator">=</span> price<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>area<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"0.2"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>levelTwoCeiling<span class="token punctuation">.</span><span class="token function">price</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            price <span class="token operator">=</span> price<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>area<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"1.4"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>liBangCoat<span class="token punctuation">.</span><span class="token function">price</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            price <span class="token operator">=</span> price<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>area<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>marcoPoloTile<span class="token punctuation">.</span><span class="token function">price</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>

        <span class="token comment">// 现代简约</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">==</span> level<span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token class-name">LevelOneCeiling</span> levelOneCeiling <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LevelOneCeiling</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 吊顶，二级顶</span>
            <span class="token class-name">LiBangCoat</span> liBangCoat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LiBangCoat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                 <span class="token comment">// 涂料，立邦</span>
            <span class="token class-name">DongPengTile</span> dongPengTile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DongPengTile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// 地砖，东鹏</span>

            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>levelOneCeiling<span class="token punctuation">)</span><span class="token punctuation">;</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>liBangCoat<span class="token punctuation">)</span><span class="token punctuation">;</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>dongPengTile<span class="token punctuation">)</span><span class="token punctuation">;</span>

            price <span class="token operator">=</span> price<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>area<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"0.2"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>levelOneCeiling<span class="token punctuation">.</span><span class="token function">price</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            price <span class="token operator">=</span> price<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>area<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"1.4"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>liBangCoat<span class="token punctuation">.</span><span class="token function">price</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            price <span class="token operator">=</span> price<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>area<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>dongPengTile<span class="token punctuation">.</span><span class="token function">price</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">StringBuilder</span> detail <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token string">"\r\n-------------------------------------------------------\r\n"</span> <span class="token operator">+</span>
                <span class="token string">"装修清单"</span> <span class="token operator">+</span> <span class="token string">"\r\n"</span> <span class="token operator">+</span>
                <span class="token string">"套餐等级："</span> <span class="token operator">+</span> level <span class="token operator">+</span> <span class="token string">"\r\n"</span> <span class="token operator">+</span>
                <span class="token string">"套餐价格："</span> <span class="token operator">+</span> price<span class="token punctuation">.</span><span class="token function">setScale</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ROUND_HALF_UP</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" 元\r\n"</span> <span class="token operator">+</span>
                <span class="token string">"房屋面积："</span> <span class="token operator">+</span> area<span class="token punctuation">.</span><span class="token function">doubleValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" 平米\r\n"</span> <span class="token operator">+</span>
                <span class="token string">"材料清单：\r\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Matter</span> matter<span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            detail<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>matter<span class="token punctuation">.</span><span class="token function">scene</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"："</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>matter<span class="token punctuation">.</span><span class="token function">brand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"、"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>matter<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"、平米价格："</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>matter<span class="token punctuation">.</span><span class="token function">price</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">" 元。\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> detail<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>decoration<span class="token punctuation">.</span><span class="token function">getMatterList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"132.52"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>decoration<span class="token punctuation">.</span><span class="token function">getMatterList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"98.25"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>decoration<span class="token punctuation">.</span><span class="token function">getMatterList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"85.43"</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相比通过以上demo，我们需要根据空间和装修风格，生成不同材料，不同面积的装修套餐，而三种就如此复杂，要是公司扩宽业务可能就需要成千行代码来实现了，也不利于以后维护。</p>
<h3 id="建造者模式" tabindex="-1"><a class="header-anchor" href="#建造者模式" aria-hidden="true">#</a> 建造者模式</h3>
<p>老规矩，我们得先抽象出来生成器，很明显，这个生成器就是我们最后的报价单啦。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IMenu</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 吊顶
     */</span>
    <span class="token class-name">IMenu</span> <span class="token function">appendCeiling</span><span class="token punctuation">(</span><span class="token class-name">Matter</span> matter<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 涂料
     */</span>
    <span class="token class-name">IMenu</span> <span class="token function">appendCoat</span><span class="token punctuation">(</span><span class="token class-name">Matter</span> matter<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 地板
     */</span>
    <span class="token class-name">IMenu</span> <span class="token function">appendFloor</span><span class="token punctuation">(</span><span class="token class-name">Matter</span> matter<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 地砖
     */</span>
    <span class="token class-name">IMenu</span> <span class="token function">appendTile</span><span class="token punctuation">(</span><span class="token class-name">Matter</span> matter<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 明细
     */</span>
    <span class="token class-name">String</span> <span class="token function">getDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在分析出来生成器后，我们就可以参考结构图一一实现具体生成器来返回产品。（忽略重置方法）</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 装修包
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DecorationPackageMenu</span> <span class="token keyword">implements</span> <span class="token class-name">IMenu</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Matter</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Matter</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 装修清单</span>
    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> price <span class="token operator">=</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ZERO</span><span class="token punctuation">;</span>      <span class="token comment">// 装修价格</span>

    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> area<span class="token punctuation">;</span>  <span class="token comment">// 面积</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> grade<span class="token punctuation">;</span>     <span class="token comment">// 装修等级；豪华欧式、轻奢田园、现代简约</span>

    <span class="token keyword">private</span> <span class="token class-name">DecorationPackageMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">DecorationPackageMenu</span><span class="token punctuation">(</span><span class="token class-name">Double</span> area<span class="token punctuation">,</span> <span class="token class-name">String</span> grade<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>area <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>area<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> grade<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">IMenu</span> <span class="token function">appendCeiling</span><span class="token punctuation">(</span><span class="token class-name">Matter</span> matter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>matter<span class="token punctuation">)</span><span class="token punctuation">;</span>
        price <span class="token operator">=</span> price<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>area<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"0.2"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>matter<span class="token punctuation">.</span><span class="token function">price</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">IMenu</span> <span class="token function">appendCoat</span><span class="token punctuation">(</span><span class="token class-name">Matter</span> matter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>matter<span class="token punctuation">)</span><span class="token punctuation">;</span>
        price <span class="token operator">=</span> price<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>area<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"1.4"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>matter<span class="token punctuation">.</span><span class="token function">price</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">IMenu</span> <span class="token function">appendFloor</span><span class="token punctuation">(</span><span class="token class-name">Matter</span> matter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>matter<span class="token punctuation">)</span><span class="token punctuation">;</span>
        price <span class="token operator">=</span> price<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>area<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>matter<span class="token punctuation">.</span><span class="token function">price</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">IMenu</span> <span class="token function">appendTile</span><span class="token punctuation">(</span><span class="token class-name">Matter</span> matter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>matter<span class="token punctuation">)</span><span class="token punctuation">;</span>
        price <span class="token operator">=</span> price<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>area<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>matter<span class="token punctuation">.</span><span class="token function">price</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 返回产品
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringBuilder</span> detail <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token string">"\r\n-------------------------------------------------------\r\n"</span> <span class="token operator">+</span>
                <span class="token string">"装修清单"</span> <span class="token operator">+</span> <span class="token string">"\r\n"</span> <span class="token operator">+</span>
                <span class="token string">"套餐等级："</span> <span class="token operator">+</span> grade <span class="token operator">+</span> <span class="token string">"\r\n"</span> <span class="token operator">+</span>
                <span class="token string">"套餐价格："</span> <span class="token operator">+</span> price<span class="token punctuation">.</span><span class="token function">setScale</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ROUND_HALF_UP</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" 元\r\n"</span> <span class="token operator">+</span>
                <span class="token string">"房屋面积："</span> <span class="token operator">+</span> area<span class="token punctuation">.</span><span class="token function">doubleValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" 平米\r\n"</span> <span class="token operator">+</span>
                <span class="token string">"材料清单：\r\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Matter</span> matter<span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            detail<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>matter<span class="token punctuation">.</span><span class="token function">scene</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"："</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>matter<span class="token punctuation">.</span><span class="token function">brand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"、"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>matter<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"、平米价格："</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>matter<span class="token punctuation">.</span><span class="token function">price</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">" 元。\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> detail<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们拿到具体生产者后，就可以去找主管生成具体的产品了。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Builder</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">IMenu</span> <span class="token function">levelOne</span><span class="token punctuation">(</span><span class="token class-name">Double</span> area<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DecorationPackageMenu</span><span class="token punctuation">(</span>area<span class="token punctuation">,</span> <span class="token string">"豪华欧式"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">appendCeiling</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LevelTwoCeiling</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>    <span class="token comment">// 吊顶，二级顶</span>
                <span class="token punctuation">.</span><span class="token function">appendCoat</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DuluxCoat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>             <span class="token comment">// 涂料，多乐士</span>
                <span class="token punctuation">.</span><span class="token function">appendFloor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ShengXiangFloor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 地板，圣象</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">IMenu</span> <span class="token function">levelTwo</span><span class="token punctuation">(</span><span class="token class-name">Double</span> area<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DecorationPackageMenu</span><span class="token punctuation">(</span>area<span class="token punctuation">,</span> <span class="token string">"轻奢田园"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">appendCeiling</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LevelTwoCeiling</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">// 吊顶，二级顶</span>
                <span class="token punctuation">.</span><span class="token function">appendCoat</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LiBangCoat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>           <span class="token comment">// 涂料，立邦</span>
                <span class="token punctuation">.</span><span class="token function">appendTile</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MarcoPoloTile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// 地砖，马可波罗</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">IMenu</span> <span class="token function">levelThree</span><span class="token punctuation">(</span><span class="token class-name">Double</span> area<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DecorationPackageMenu</span><span class="token punctuation">(</span>area<span class="token punctuation">,</span> <span class="token string">"现代简约"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">appendCeiling</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LevelOneCeiling</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment">// 吊顶，二级顶</span>
                <span class="token punctuation">.</span><span class="token function">appendCoat</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LiBangCoat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>           <span class="token comment">// 涂料，立邦</span>
                <span class="token punctuation">.</span><span class="token function">appendTile</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DongPengTile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// 地砖，东鹏</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试方法</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test_Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Builder</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 豪华欧式</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>builder<span class="token punctuation">.</span><span class="token function">levelOne</span><span class="token punctuation">(</span><span class="token number">132.52D</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 轻奢田园</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>builder<span class="token punctuation">.</span><span class="token function">levelTwo</span><span class="token punctuation">(</span><span class="token number">98.25D</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 现代简约</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>builder<span class="token punctuation">.</span><span class="token function">levelThree</span><span class="token punctuation">(</span><span class="token number">85.43D</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上，我们就利用了生成器模式小小的重构了一下代码。虽然增加了类，但是在结构上更加清晰明了，以后优化起来也很方便，只需要在 BUilder上新增新的风格就可以啦。</p>
<h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h1>
<p>更具按图索骥和实战分析环节，我们大概能明白生成器模式使用的场景，那就是当<strong>一些基本变量不变，而且组合经常变化</strong>的时候，就可以选择使用生成器模式了。
但是请记住，设计模式虽好，但不要贪杯。正如总结篇所说：“当你手上有一把锤子，那你会觉得整个房间都是钉子”所言，滥用生成器模式可能会是你的结构复杂化，就好比该业务本来就只需要一个if-else判断，但是你偏偏用设计模式去实现，这就有点本末倒置了，违背了我们想让代码更加规范简洁的初心啦。</p>
</div></template>


