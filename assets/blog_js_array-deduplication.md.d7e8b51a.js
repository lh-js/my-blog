import{_ as s,o as n,c as a,X as l}from"./chunks/framework.bddd9dd1.js";const b=JSON.parse('{"title":"实现数组去重的 7 种方式","description":"","frontmatter":{},"headers":[],"relativePath":"blog/js/array-deduplication.md","filePath":"blog/js/array-deduplication.md","lastUpdated":1695370247000}'),p={name:"blog/js/array-deduplication.md"},e=l(`<h1 id="实现数组去重的-7-种方式" tabindex="-1">实现数组去重的 7 种方式 <a class="header-anchor" href="#实现数组去重的-7-种方式" aria-label="Permalink to &quot;实现数组去重的 7 种方式&quot;">​</a></h1><h2 id="_1-方法一-利用两层循环-数组的splice方法" tabindex="-1">1. 方法一：利用两层循环+数组的splice方法 <a class="header-anchor" href="#_1-方法一-利用两层循环-数组的splice方法" aria-label="Permalink to &quot;1. 方法一：利用两层循环+数组的splice方法&quot;">​</a></h2><blockquote><p>通过两层循环对数组元素进行逐一比较，然后通过splice方法来删除重复的元素。此 <strong>方法对NaN是无法进行去重的</strong>，因为进行比较时 <code>NaN !== NaN</code>。</p></blockquote><div class="language-ini line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">let </span><span style="color:#F07178;">arr</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> [1, 2, 2, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">, true, true,</span></span>
<span class="line"><span style="color:#BABED8;"> false, false, undefined, undefined, NaN, NaN]</span></span>
<span class="line"><span style="color:#BABED8;">function removeDuplicate(arr) {</span></span>
<span class="line"><span style="color:#BABED8;">  let </span><span style="color:#F07178;">len</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> arr.length</span></span>
<span class="line"><span style="color:#BABED8;">  for (let </span><span style="color:#F07178;">i</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> 0</span></span>
<span class="line"><span style="color:#BABED8;">    for (let </span><span style="color:#F07178;">j</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> i + 1</span></span>
<span class="line"><span style="color:#BABED8;">      if (arr[i] === arr[j]) {</span></span>
<span class="line"><span style="color:#BABED8;">        arr.splice(j, 1)</span></span>
<span class="line"><span style="color:#BABED8;">        len--</span></span>
<span class="line"><span style="color:#BABED8;">      }</span></span>
<span class="line"><span style="color:#BABED8;">    }</span></span>
<span class="line"><span style="color:#BABED8;">  }</span></span>
<span class="line"><span style="color:#BABED8;">  return arr</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span>
<span class="line"><span style="color:#BABED8;">removeDuplicate(arr)</span></span>
<span class="line"><span style="color:#BABED8;">console.log(arr) // [ 1, 2, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">abc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">, true, false, undefined, NaN, NaN ]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="_2-方法二-利用set-array-from" tabindex="-1">2. 方法二：利用Set()+Array.from() <a class="header-anchor" href="#_2-方法二-利用set-array-from" aria-label="Permalink to &quot;2. 方法二：利用Set()+Array.from()&quot;">​</a></h2><ul><li><code>Set</code>对象：是 <strong>值的集合</strong>，你可以按照插入的顺序 <strong>迭代</strong>它的元素。 Set中的元素只会 <strong>出现一次</strong>，即Set中的 <strong>元素是唯一的</strong>。</li><li><code>Array.from()</code> 方法：对一个 <strong>类似数组</strong>或 <strong>可迭代对象</strong>创建一个新的，浅拷贝的数组实例。</li></ul><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">function</span><span style="color:#BABED8;"> removeDuplicate(arr) {</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">//</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">return</span><span style="color:#BABED8;"> [...new Set(arr)]</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F78C6C;">return</span><span style="color:#BABED8;"> Array.from(new </span><span style="color:#F78C6C;">Set</span><span style="color:#BABED8;">(arr))</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span>
<span class="line"><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">//</span><span style="color:#BABED8;"> [ 1, 2, &#39;abc&#39;, true, false, undefined, NaN ]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_3-方法三-利用数组的indexof方法" tabindex="-1">3. 方法三：利用数组的indexOf方法 <a class="header-anchor" href="#_3-方法三-利用数组的indexof方法" aria-label="Permalink to &quot;3. 方法三：利用数组的indexOf方法&quot;">​</a></h2><blockquote><p>新建一个空数组，遍历需要去重的数组，将数组元素存入新数组中，存放前判断数组中是否已经含有当前元素，没有则存入。此方法也无法对 <code>NaN</code>去重</p></blockquote><ul><li><code>indexOf()</code> 方法：返回调用它的String对象中第一次出现的指定值的索引，从 <code>fromIndex</code> 处进行搜索。若未找到该值，则返回 -1</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">removeDuplicate</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">newArr</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#F07178;">(</span><span style="color:#BABED8;font-style:italic;">item</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">newArr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">item</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">newArr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">item</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">newArr</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(</span><span style="color:#82AAFF;">removeDuplicate</span><span style="color:#BABED8;">(arr))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_4-方法四-利用数组的includes方法" tabindex="-1">4. 方法四：利用数组的includes方法 <a class="header-anchor" href="#_4-方法四-利用数组的includes方法" aria-label="Permalink to &quot;4. 方法四：利用数组的includes方法&quot;">​</a></h2><blockquote><p>此方法逻辑与indexOf方法去重异曲同工，只是用includes方法来判断是否包含重复元素。</p></blockquote><ul><li><code>includes()</code>方法：用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 <code>true</code>，否则返回 <code>false</code>。</li></ul><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">removeDuplicate</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#82AAFF;">let</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">newArr</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">=</span><span style="color:#BABED8;"> []</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">arr.map(item</span><span style="color:#BABED8;"> =</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(!</span><span style="color:#FFCB6B;">newArr.includes(item</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#FFCB6B;">newArr.push(item</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">  })</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">newArr</span></span>
<span class="line"><span style="color:#BABED8;">} // [ 1, 2, &#39;abc&#39;, true, false, undefined, NaN ]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>注意</strong>：为什么 <code>includes</code>能够检测到数组中包含 <code>NaN</code>，其涉及到 <code>includes</code>底层的实现。如下图为 <code>includes</code>实现的部分代码，在进行判断是否包含某元素时会调用 <code>sameValueZero方法</code>进行比较，如果为 <code>NaN</code>，则会使用 <code>isNaN()</code>进行转化。</p><p>简单测试 <code>includes()</code>对 <code>NaN</code>的判断：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">简单测试includes</span><span style="color:#BABED8;">()对NaN的判断：</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> testArr </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">NaN</span><span style="color:#BABED8;">]</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(testArr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">includes</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">NaN</span><span style="color:#BABED8;">))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_5-方法五-利用数组的filter-indexof" tabindex="-1">5. 方法五：利用数组的filter()+indexOf() <a class="header-anchor" href="#_5-方法五-利用数组的filter-indexof" aria-label="Permalink to &quot;5. 方法五：利用数组的filter()+indexOf()&quot;">​</a></h2><blockquote><p>filter方法会对满足条件的元素存放到一个新数组中，结合indexOf方法进行判断。</p></blockquote><ul><li><code>filter()</code> 方法：会创建一个新数组，其包含 <strong>通过所提供函数实现的测试</strong>的所有元素。</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">removeDuplicate</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">filter</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">item</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;font-style:italic;">index</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">item</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">index</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">removeDuplicate</span><span style="color:#BABED8;">(arr)</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(result)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><strong>注意</strong>：这里的输出结果中不包含 <code>NaN</code>，是因为 <code>indexOf()</code>无法对NaN进行判断，即 <code>arr.indexOf(item) === index</code>返回结果为false。测试如下：</p><div class="language-arduino line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">arduino</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">const testArr = [1, &#39;a&#39;, NaN]</span></span>
<span class="line"><span style="color:#babed8;">console.log(testArr.indexOf(NaN))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_6-方法六-利用map" tabindex="-1">6. 方法六：利用Map() <a class="header-anchor" href="#_6-方法六-利用map" aria-label="Permalink to &quot;6. 方法六：利用Map()&quot;">​</a></h2><blockquote><p>Map对象是JavaScript提供的一种数据结构，结构为键值对形式，将数组元素作为map的键存入，然后结合 <code>has()</code>和 <code>set()</code>方法判断键是否重复。</p></blockquote><ul><li><code>Map</code> 对象：用于保存键值对，并且能够记住键的原始插入顺序。任何值（对象或者原始值）都可以作为一个键或一个值。</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">removeDuplicate</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">map</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">newArr</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#BABED8;font-style:italic;">item</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#BABED8;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">has</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">item</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">item</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">newArr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">item</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">newArr</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">-----------------</span><span style="color:#BABED8;">或者</span><span style="color:#89DDFF;">-------------------------------------------------------</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">removeDuplicate</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">map</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#F07178;">(</span><span style="color:#BABED8;font-style:italic;">item</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#BABED8;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">has</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">item</span><span style="color:#F07178;">)) </span><span style="color:#BABED8;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">item</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">...</span><span style="color:#BABED8;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">keys</span><span style="color:#F07178;">()]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">removeDuplicate</span><span style="color:#BABED8;">(arr)</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(result)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p><strong>注意</strong>：使用 <code>Map()</code>也可对 <code>NaN</code>去重，原因是Map进行判断时认为 <code>NaN</code>是与 <code>NaN</code>相等的，剩下所有其它的值是根据 <code>===</code> 运算符的结果判断是否相等。</p><h2 id="_7-方法七-利用对象" tabindex="-1">7. 方法七：利用对象 <a class="header-anchor" href="#_7-方法七-利用对象" aria-label="Permalink to &quot;7. 方法七：利用对象&quot;">​</a></h2><blockquote><p>其实现思想和 <code>Map()</code>是差不多的，主要是利用了对象的属性名不可重复这一特性。</p></blockquote><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">removeDuplicate</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">obj</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#F07178;">(</span><span style="color:#BABED8;font-style:italic;">item</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#BABED8;">obj</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">item</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#BABED8;">obj</span><span style="color:#F07178;">[</span><span style="color:#BABED8;">item</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">keys</span><span style="color:#F07178;">(</span><span style="color:#BABED8;">obj</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,32),o=[e];function r(c,t,i,y,F,D){return n(),a("div",null,o)}const u=s(p,[["render",r]]);export{b as __pageData,u as default};