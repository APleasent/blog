<template><div><h2 id="前言-python-安装的本质" tabindex="-1"><a class="header-anchor" href="#前言-python-安装的本质" aria-hidden="true">#</a> 前言：Python 安装的本质</h2>
<p>当我们安装 Python 时，实质上是安装其<strong>核心编译器和运行时环境</strong>。官网下载的可执行文件（<code v-pre>.exe</code>）本质是编译器，核心功能是将<strong>代码编译为可执行的字节码</strong>。</p>
<hr>
<h2 id="一、anaconda-的下载与定位" tabindex="-1"><a class="header-anchor" href="#一、anaconda-的下载与定位" aria-hidden="true">#</a> 一、Anaconda 的下载与定位</h2>
<h3 id="为什么选择-anaconda" tabindex="-1"><a class="header-anchor" href="#为什么选择-anaconda" aria-hidden="true">#</a> 为什么选择 Anaconda？</h3>
<p>虽然可通过 <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">Python 官网<ExternalLinkIcon/></a>直接安装，但 Anaconda 为数据科学领域（如深度学习/AI）提供了更完整的解决方案：</p>
<ul>
<li><strong>一键集成</strong>：预装 Python 环境、常用科学计算库（NumPy/Pandas 等）和包管理工具</li>
<li><strong>开箱即用</strong>：避免手动配置环境变量和依赖包</li>
<li><strong>跨平台支持</strong>：提供 Windows/macOS/Linux 全平台支持</li>
</ul>
<blockquote>
<p>Anaconda 因此被称为 <strong>数据科学计算平台</strong>。</p>
</blockquote>
<h3 id="安装步骤" tabindex="-1"><a class="header-anchor" href="#安装步骤" aria-hidden="true">#</a> 安装步骤</h3>
<ol>
<li>访问 <a href="https://www.anaconda.com/" target="_blank" rel="noopener noreferrer">Anaconda 官网<ExternalLinkIcon/></a></li>
<li>下载对应操作系统的安装包（推荐 Python 3.x 版本）</li>
<li>官网首页参考：
<img src="https://yudao-oss.s3.cn-south-1.jdcloud-oss.com/document/Advance AI 首页截图.png?AWSAccessKeyId=JDC_DE6CF61C6325EDE8D41A79F468A2&amp;Expires=1812025284&amp;Signature=UoT9B11tIkjzjOX5h3YRYc24XIE%3D" alt="官网首页" title="官网首页" loading="lazy"></li>
<li>详细教程见中文 <a href="https://anaconda.org.cn/anaconda/install/windows/" target="_blank" rel="noopener noreferrer">安装文档<ExternalLinkIcon/></a></li>
</ol>
<hr>
<h2 id="二、彻底卸载-anaconda" tabindex="-1"><a class="header-anchor" href="#二、彻底卸载-anaconda" aria-hidden="true">#</a> 二、彻底卸载 Anaconda</h2>
<p>若需重新安装，请按此流程操作：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 步骤1：打开 Anaconda Prompt</span>
<span class="token comment"># 步骤2：安装清理工具</span>
conda <span class="token function">install</span> anaconda-clean

<span class="token comment"># 步骤3：移除所有关联文件（自动备份）</span>
anaconda-clean <span class="token parameter variable">--yes</span>
<span class="token comment">#备份说明：卸载后配置文件将备份至 C:\Users\{用户名}\.anaconda_backup，确认无问题后可手动删除。</span>

<span class="token comment"># 步骤4</span>
完成上述命令后，通过系统「应用管理」功能正常卸载 Anaconda。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="三、pycharm-的安装" tabindex="-1"><a class="header-anchor" href="#三、pycharm-的安装" aria-hidden="true">#</a> 三、PyCharm 的安装</h2>
<ol>
<li>访问 PyCharm 官网</li>
<li>下载 Community（免费版）或 Professional 版本</li>
<li>按安装向导完成配置</li>
</ol>
<hr>
<h2 id="四、jupyter-组件启动问题排查" tabindex="-1"><a class="header-anchor" href="#四、jupyter-组件启动问题排查" aria-hidden="true">#</a> 四、Jupyter 组件启动问题排查</h2>
<p>Anaconda 提供两个组件：</p>
<ol>
<li>Jupyter Notebook：传统交互式笔记本</li>
<li>Jupyter Lab：新一代界面（推荐使用）</li>
</ol>
<p>常见错误解决方案
报错示例：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Python PermissionError: <span class="token punctuation">[</span>Errno <span class="token number">13</span><span class="token punctuation">]</span> Permission denied: <span class="token string">'C:\Users\Asus\AppData\Roaming\jupyter\runtime\jpserver-4344-open.html'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>高效解决方法：</p>
<ol>
<li>定位报错路径（示例：C:\Users\Asus\AppData\Roaming\jupyter\runtime\）</li>
<li>直接删除 runtime 文件夹</li>
<li>重新启动 Jupyter Lab</li>
</ol>
<p>更多问题可参考 <a href="https://github.com/jupyter/notebook/issues/7421" target="_blank" rel="noopener noreferrer">Jupyter 官方 Issue 跟踪<ExternalLinkIcon/></a></p>
<hr>
<h2 id="五、修改-jupyter-默认工作路径" tabindex="-1"><a class="header-anchor" href="#五、修改-jupyter-默认工作路径" aria-hidden="true">#</a> 五、修改 Jupyter 默认工作路径</h2>
<ul>
<li>推荐方案（通过 PyCharm 配置）：在 PyCharm 中新建 Jupyter Notebook 项目，用来绑定 Anaconda 解释器路径： Jupyter 项目</li>
<li>替代方案：通过修改 jupyter_notebook_config.py 配置文件实现永久路径变更</li>
</ul>
</div></template>


