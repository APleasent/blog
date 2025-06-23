<template><div><h1 id="_4-原型模式" tabindex="-1"><a class="header-anchor" href="#_4-原型模式" aria-hidden="true">#</a> 4.原型模式</h1>
<figure><img src="https://note.youdao.com/yws/res/12950/WEBRESOURCE8666d53e6a12da1bb55e615e40b4ab9e" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<p>原型，又称克隆、Prototype</p>
<p>该模式的核心思想是基于现有的对象创建新的对象，而不是从头开始创建。</p>
<p>该模式主要用来解决<strong>创建重复对象问题</strong>，而这部分对象内容本身比较复杂，生成过程可能从库或者接口获取的数据比较长，因此使用克隆来解决问题。</p>
<p>在原型模式中，通常有一个原型对象，它被用作创建新对象的模板。新对象通过复制原型对象的属性和状态来创建，而无需知道具体的创建细节。</p>
<h2 id="结构实现" tabindex="-1"><a class="header-anchor" href="#结构实现" aria-hidden="true">#</a> 结构实现</h2>
<figure><img src="https://note.youdao.com/yws/res/12985/WEBRESOURCEde4a9f05f95bea6b00602fd948514947" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>
<ol>
<li>原型（Prototype）：接口会对克隆方法进行声明。在绝大多数情况下，其中会有一个 clone 方法。</li>
<li>具体原型（ConcretePrototype）：实现克隆方法，除了将原始数据复制到克隆体对象中之外，可能还要考虑依赖关系。</li>
<li>客户端（Client）：可以复制实现了原型接口的任何对象</li>
</ol>
<h2 id="按图索骥" tabindex="-1"><a class="header-anchor" href="#按图索骥" aria-hidden="true">#</a> 按图索骥</h2>
<ol>
<li>定义抽象原型类</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Prototype</span> <span class="token keyword">implements</span> <span class="token class-name">Cloneable</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">Prototype</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">String</span> <span class="token function">getDetails</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 公共的 clone 方法</span>
    <span class="token keyword">public</span> <span class="token class-name">Prototype</span> <span class="token function">clonePrototype</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">Prototype</span><span class="token punctuation">)</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">CloneNotSupportedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>创建具体原型类</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">RectanglePrototype</span> <span class="token keyword">extends</span> <span class="token class-name">Prototype</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> color<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> width<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> height<span class="token punctuation">;</span>

    <span class="token comment">// 构造方法</span>
    <span class="token keyword">public</span> <span class="token class-name">RectanglePrototype</span><span class="token punctuation">(</span><span class="token class-name">String</span> color<span class="token punctuation">,</span> <span class="token keyword">int</span> width<span class="token punctuation">,</span> <span class="token keyword">int</span> height<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 克隆方法</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Prototype</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">clonePrototype</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 获取矩形的详细信息</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getDetails</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Color: "</span> <span class="token operator">+</span> color <span class="token operator">+</span> <span class="token string">", Width: "</span> <span class="token operator">+</span> width <span class="token operator">+</span> <span class="token string">", Height: "</span> <span class="token operator">+</span> height<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>测试方法</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Prototype</span> prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RectanglePrototype</span><span class="token punctuation">(</span><span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Prototype</span> clone <span class="token operator">=</span> prototype<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>clone<span class="token punctuation">.</span><span class="token function">getDetails</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，原型模式不可能这么简单的实现，他还有按照<strong>原型注册表实现</strong>。</p>
<p>笔者在学习的时候想到了 Spring 也用到了原型设计模式，在经过源码分析后，容器是将 原型 Bean 的信息保存在了一个哈希中，然后根据相关信息去显示 new 返回对象，这一步以后再说。</p>
<h2 id="实例说明" tabindex="-1"><a class="header-anchor" href="#实例说明" aria-hidden="true">#</a> 实例说明</h2>
<p>上文提到，原型思想是为了解决创建大量相同对象消耗时间太大的问题。</p>
<p>我们转换一下思路，在什么情况下会产生大量相同对象呢？笔者很自然的想到了在线考试。</p>
<p>在一张试卷中，需要返回多个选择题、判断题、应答题等对象，同时不同考生的题目可能相同，但是答案排序也不同，这不就是最好的说明对象吗？那么请看下文分析。</p>
<h3 id="问题分析" tabindex="-1"><a class="header-anchor" href="#问题分析" aria-hidden="true">#</a> 问题分析</h3>
<p>我们假设此时该份试卷只有选择题和问答题，那么其对应的数据结构如下；</p>
<p>选择题：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ChoiceQuestion</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 题目
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 选项
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> option<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 答案
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> answer<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ChoiceQuestion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">ChoiceQuestion</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> option<span class="token punctuation">,</span> <span class="token class-name">String</span> answer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>option <span class="token operator">=</span> option<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>answer <span class="token operator">=</span> answer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问答题：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AnswerQuestion</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 问题
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 答案
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> answer<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">AnswerQuestion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">AnswerQuestion</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> answer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>answer <span class="token operator">=</span> answer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一把梭哈" tabindex="-1"><a class="header-anchor" href="#一把梭哈" aria-hidden="true">#</a> 一把梭哈</h3>
<p>话不投机半句多，不是我不懂设计模式，而是我就是喜欢梭哈。</p>
<p>只要我写的够乱，谁也别想赶我走，接下请看梭哈大法。</p>
</div></template>


