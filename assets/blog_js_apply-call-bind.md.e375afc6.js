import{_ as s,o as a,c as l,X as n}from"./chunks/framework.bddd9dd1.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"blog/js/apply-call-bind.md","filePath":"blog/js/apply-call-bind.md","lastUpdated":1693979892000}'),p={name:"blog/js/apply-call-bind.md"},o=n(`<ul><li><h2 id="apply、call、bind的作用" tabindex="-1">apply、call、bind的作用 <a class="header-anchor" href="#apply、call、bind的作用" aria-label="Permalink to &quot;apply、call、bind的作用&quot;">​</a></h2></li></ul><p>改变this指向</p><ul><li><h2 id="apply、call、bind的区别" tabindex="-1">apply、call、bind的区别 <a class="header-anchor" href="#apply、call、bind的区别" aria-label="Permalink to &quot;apply、call、bind的区别&quot;">​</a></h2></li></ul><p>1、相同点</p><ol><li><p>三个都是用于改变this指向；</p></li><li><p>接收的第一个参数都是this要指向的对象；</p></li><li><p>都可以利用后续参数传参。</p></li></ol><p>2、不同点</p><ol><li>call和bind传参相同，多个参数依次传入的；</li><li>apply只有两个参数，第二个参数为数组；</li><li>call和apply都是对函数进行直接调用，而bind方法不会立即调用函数，而是返回一个修改this后的函数。</li></ol><ul><li>示例1</li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">c</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">d</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">b</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">c</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">d</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">4</span><span style="color:#BABED8;">)) </span><span style="color:#676E95;font-style:italic;">//10,这里的this为obj对象</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li><h3 id="apply-thisarg-argsarr" tabindex="-1">apply(thisArg, [argsArr]) <a class="header-anchor" href="#apply-thisarg-argsarr" aria-label="Permalink to &quot;apply(thisArg, [argsArr])&quot;">​</a></h3></li></ul><p>1.接收两个参数</p><p>2.thisArg，需要修改到的this指向对象，后面接收参数数组</p><p>3.立即执行函数</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(obj</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">get</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#BABED8;">(obj1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">])) </span><span style="color:#676E95;font-style:italic;">//10，改变this指向为obj1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><h3 id="call-thisarg-arg1-arg2-arg3" tabindex="-1">call(thisArg, arg1, arg2, arg3, ...) <a class="header-anchor" href="#call-thisarg-arg1-arg2-arg3" aria-label="Permalink to &quot;call(thisArg, arg1, arg2, arg3, ...)&quot;">​</a></h3></li></ul><p>1.接收多个参数，</p><p>2.thisArg，需要修改到的this指向对象，后面接收多个参数</p><p>3.立即执行函数</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(obj</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">get</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#BABED8;">(obj1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">，</span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">)) </span><span style="color:#676E95;font-style:italic;">//10，改变this指向为obj1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><h3 id="bind-thisarg-arg1-arg2-arg3" tabindex="-1">bind(thisArg, arg1, arg2, arg3, ...) <a class="header-anchor" href="#bind-thisarg-arg1-arg2-arg3" aria-label="Permalink to &quot;bind(thisArg, arg1, arg2, arg3, ...)&quot;">​</a></h3></li></ul><p>1.接收多个参数，</p><p>2.thisArg，需要修改到的this指向对象，后面接收多个参数</p><p>3.不会立即执行函数</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(obj</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">get</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bind</span><span style="color:#BABED8;">(obj1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;">，</span><span style="color:#F78C6C;">2</span><span style="color:#BABED8;">)()) </span><span style="color:#676E95;font-style:italic;">//10，改变this指向为obj1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>示例2</li></ul><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">b</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#BABED8;">b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(obj</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#BABED8;">()) </span><span style="color:#676E95;font-style:italic;">//3    </span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> f </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> obj</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">get</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#82AAFF;">f</span><span style="color:#BABED8;">()) </span><span style="color:#676E95;font-style:italic;">//NaN</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>上面代码中，如果this.a和this.b指向obj对象内部的a和b属性，如果这个方法赋值给另外一个变量，调用时就会出错。</p><p>如果把get方法赋值给f变量，那么this对象指向不再是obj对象了，而是window对象。而window.a和window.b默认为undefined，进行运算之后也就等于NaN。</p><p>为了解决这个问题，可以使用apply,call,bind方法，将obj对象里的this绑定到obj对象上，即可解决问题。</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#BABED8;">(obj)) </span><span style="color:#676E95;font-style:italic;">//3   </span></span>
<span class="line"><span style="color:#BABED8;">  console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#BABED8;">(obj)) </span><span style="color:#676E95;font-style:italic;">//3   </span></span>
<span class="line"><span style="color:#BABED8;">  console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(f</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bind</span><span style="color:#BABED8;">(obj)()) </span><span style="color:#676E95;font-style:italic;">//3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><h2 id="拓展" tabindex="-1">拓展 <a class="header-anchor" href="#拓展" aria-label="Permalink to &quot;拓展&quot;">​</a></h2></li></ul><ol><li>找出数组中的最大值</li></ol><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#BABED8;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> [</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">10</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;">     </span></span>
<span class="line"><span style="color:#BABED8;">    console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(Math</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">max</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">null,</span><span style="color:#BABED8;"> a))</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;">//10</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>2.转换类似数组的对象</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#BABED8;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">length</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">slice</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">apply</span><span style="color:#BABED8;">(obj)) </span><span style="color:#676E95;font-style:italic;">//[1]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,35),e=[o];function r(t,c,i,y,D,F){return a(),l("div",null,e)}const b=s(p,[["render",r]]);export{A as __pageData,b as default};
