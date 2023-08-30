import { _ as c, C as t, o as E, c as r, H as a, w as l, Q as o, k as s, a as n } from './chunks/framework.b3c573de.js';
const L = JSON.parse(
    '{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"quick-start.md","filePath":"quick-start.md"}',
  ),
  y = { name: 'quick-start.md' },
  i = o(
    '<div align="center"><h1 class="brand-name text-clip">IZTRO</h1><p>一套轻量级获取紫微斗数排盘信息的Javascript开源库。</p></div><div align="center" class="badges"><p><a href="https://github.com/SylarLong/iztro/actions" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/actions/workflow/status/SylarLong/iztro/Codecov.yaml" alt="GitHub Workflow Status (with event)"></a> <a href="https://www.npmjs.com/package/iztro" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/v/%40sylarlong%2Fastro" alt="npm"></a> <a href="https://github.com/search?q=repo%3ASylarLong%2Fastro++language%3ATypeScript&amp;type=code" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/languages/top/SylarLong/iztro" alt="GitHub top language"></a> <a href="https://app.codecov.io/gh/SylarLong/iztro/tree/main/src%2Fstar" target="_blank" rel="noreferrer"><img src="https://img.shields.io/codecov/c/github/sylarlong/iztro" alt="Codecov"></a> <a href="https://www.npmjs.com/package/iztro" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/dw/%40sylarlong/iztro" alt="npm"></a> <a href="https://github.com/SylarLong/iztro" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maintenance/yes/2023" alt="Maintenance"></a> <a href="https://www.npmjs.com/package/iztro" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/license/sylarlong/iztro" alt="GitHub"></a> <a href="https://www.npmjs.com/package/iztro" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/languages/code-size/SylarLong/iztro" alt="GitHub code size in bytes"></a> <a href="https://www.npmjs.com/package/iztro" target="_blank" rel="noreferrer"><img src="https://img.shields.io/bundlephobia/min/%40sylarlong%2Fastro" alt="npm bundle size"></a> <a href="https://github.com/SylarLong/iztro/issues" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/issues/SylarLong/iztro" alt="GitHub issues"></a> <a href="https://github.com/SylarLong" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/package-json/author/sylarlong/iztro" alt="GitHub package.json dynamic"></a></p></div><h2 id="概览" tabindex="-1">概览 <a class="header-anchor" href="#概览" aria-label="Permalink to &quot;概览&quot;">​</a></h2><p>欢迎使用 <code>iztro</code> 开发文档！本页将向你介绍如何集成、如何获取数据、以及如何快速得到紫微斗数里一张星盘上的所有数据。如果你只是基础使用者，阅读完本篇文档将足够你日常使用。 如果你已经掌握了本页内容，可以到其他页面进行更深入的探索。</p><div class="custom-block"><p>你将获取到以下信息：</p><ul><li>如何将<code>iztro</code>安装和集成到你的代码里</li><li>如何获取到一张星盘</li><li>如何基于星盘开始分析宫位</li><li>如何基于宫位开始分析星耀</li></ul></div><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>你可以使用任意一种你熟悉的包管理工具进行安装</p>',
    7,
  ),
  F = s(
    'div',
    { class: 'language-sh vp-adaptive-theme' },
    [
      s('button', { title: 'Copy Code', class: 'copy' }),
      s('span', { class: 'lang' }, 'sh'),
      s('pre', { class: 'shiki github-dark vp-code-dark' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#B392F0' } }, 'npm'),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#9ECBFF' } }, 'install'),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#9ECBFF' } }, 'iztro'),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#79B8FF' } }, '-S'),
          ]),
        ]),
      ]),
      s('pre', { class: 'shiki github-light vp-code-light' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#6F42C1' } }, 'npm'),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#032F62' } }, 'install'),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#032F62' } }, 'iztro'),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#005CC5' } }, '-S'),
          ]),
        ]),
      ]),
    ],
    -1,
  ),
  C = s(
    'div',
    { class: 'language-sh vp-adaptive-theme' },
    [
      s('button', { title: 'Copy Code', class: 'copy' }),
      s('span', { class: 'lang' }, 'sh'),
      s('pre', { class: 'shiki github-dark vp-code-dark' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#B392F0' } }, 'yarn'),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#9ECBFF' } }, 'add'),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#9ECBFF' } }, 'iztro'),
          ]),
        ]),
      ]),
      s('pre', { class: 'shiki github-light vp-code-light' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#6F42C1' } }, 'yarn'),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#032F62' } }, 'add'),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#032F62' } }, 'iztro'),
          ]),
        ]),
      ]),
    ],
    -1,
  ),
  d = s(
    'div',
    { class: 'language-sh vp-adaptive-theme' },
    [
      s('button', { title: 'Copy Code', class: 'copy' }),
      s('span', { class: 'lang' }, 'sh'),
      s('pre', { class: 'shiki github-dark vp-code-dark' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#B392F0' } }, 'pnpm'),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#9ECBFF' } }, 'add'),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#79B8FF' } }, '-D'),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#9ECBFF' } }, 'vitepress-plugin-tabs'),
          ]),
        ]),
      ]),
      s('pre', { class: 'shiki github-light vp-code-light' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#6F42C1' } }, 'pnpm'),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#032F62' } }, 'add'),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#005CC5' } }, '-D'),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#032F62' } }, 'vitepress-plugin-tabs'),
          ]),
        ]),
      ]),
    ],
    -1,
  ),
  B = o(
    `<p>安装顺利的话，会在你的<code>package.json</code>依赖列表中找到<code>iztro</code></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&quot;dependencies&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;iztro&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^1.0.0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&quot;dependencies&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;iztro&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;^1.0.0&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>版本号可能会有所不同</p></blockquote><h2 id="开始使用" tabindex="-1">开始使用 <a class="header-anchor" href="#开始使用" aria-label="Permalink to &quot;开始使用&quot;">​</a></h2><h4 id="引入代码" tabindex="-1">引入代码 <a class="header-anchor" href="#引入代码" aria-label="Permalink to &quot;引入代码&quot;">​</a></h4><p>你可以根据下列方式将<code>iztro</code>引入你的代码</p>`,
    6,
  ),
  u = s(
    'div',
    { class: 'language-ts vp-adaptive-theme' },
    [
      s('button', { title: 'Copy Code', class: 'copy' }),
      s('span', { class: 'lang' }, 'ts'),
      s('pre', { class: 'shiki github-dark vp-code-dark' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F97583' } }, 'import'),
            s('span', { style: { color: '#E1E4E8' } }, ' { astro } '),
            s('span', { style: { color: '#F97583' } }, 'from'),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#9ECBFF' } }, "'iztro'"),
            s('span', { style: { color: '#E1E4E8' } }, ';'),
          ]),
        ]),
      ]),
      s('pre', { class: 'shiki github-light vp-code-light' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#D73A49' } }, 'import'),
            s('span', { style: { color: '#24292E' } }, ' { astro } '),
            s('span', { style: { color: '#D73A49' } }, 'from'),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#032F62' } }, "'iztro'"),
            s('span', { style: { color: '#24292E' } }, ';'),
          ]),
        ]),
      ]),
    ],
    -1,
  ),
  h = s(
    'div',
    { class: 'language-js vp-adaptive-theme' },
    [
      s('button', { title: 'Copy Code', class: 'copy' }),
      s('span', { class: 'lang' }, 'js'),
      s('pre', { class: 'shiki github-dark vp-code-dark' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F97583' } }, 'var'),
            s('span', { style: { color: '#E1E4E8' } }, ' astroObj '),
            s('span', { style: { color: '#F97583' } }, '='),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#B392F0' } }, 'require'),
            s('span', { style: { color: '#E1E4E8' } }, '('),
            s('span', { style: { color: '#9ECBFF' } }, "'iztro'"),
            s('span', { style: { color: '#E1E4E8' } }, ');'),
          ]),
        ]),
      ]),
      s('pre', { class: 'shiki github-light vp-code-light' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#D73A49' } }, 'var'),
            s('span', { style: { color: '#24292E' } }, ' astroObj '),
            s('span', { style: { color: '#D73A49' } }, '='),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#6F42C1' } }, 'require'),
            s('span', { style: { color: '#24292E' } }, '('),
            s('span', { style: { color: '#032F62' } }, "'iztro'"),
            s('span', { style: { color: '#24292E' } }, ');'),
          ]),
        ]),
      ]),
    ],
    -1,
  ),
  g = o(
    '<h4 id="获取星盘数据" tabindex="-1">获取星盘数据 <a class="header-anchor" href="#获取星盘数据" aria-label="Permalink to &quot;获取星盘数据&quot;">​</a></h4><p>在获取紫微斗数星盘的时候，可以根据<code>农历</code>或者<code>阳历</code>日期来获取，<code>iztro</code>提供了这两种获取方式，你可以根据你的需求使用，但我们更推荐你使用<code>阳历</code>的方式来使用。 放心，阳历和农历在程序内部获取到的数据是统一的。</p><div class="custom-block"><p>使用<code>阳历</code>有如下便利性：</p><ul><li>可以很方便的在出生证上查到</li><li>可以使用日历组件进行日期选择</li><li>现在很多人都无法记住农历日期</li><li>可以避免因为忽略了闰月而带来的一系列问题</li></ul></div>',
    3,
  ),
  m = s(
    'div',
    { class: 'language-ts vp-adaptive-theme' },
    [
      s('button', { title: 'Copy Code', class: 'copy' }),
      s('span', { class: 'lang' }, 'ts'),
      s('pre', { class: 'shiki github-dark vp-code-dark' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F97583' } }, 'import'),
            s('span', { style: { color: '#E1E4E8' } }, ' { astro } '),
            s('span', { style: { color: '#F97583' } }, 'from'),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#9ECBFF' } }, "'iztro'"),
            s('span', { style: { color: '#E1E4E8' } }, ';'),
          ]),
          n(`
`),
          s('span', { class: 'line' }),
          n(`
`),
          s('span', { class: 'line' }, [s('span', { style: { color: '#6A737D' } }, '// 通过阳历获取星盘信息')]),
          n(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F97583' } }, 'const'),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#79B8FF' } }, 'astrolabe'),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#F97583' } }, '='),
            s('span', { style: { color: '#E1E4E8' } }, ' astro.'),
            s('span', { style: { color: '#B392F0' } }, 'astrolabeBySolarDate'),
            s('span', { style: { color: '#E1E4E8' } }, '('),
            s('span', { style: { color: '#9ECBFF' } }, "'2000-8-16'"),
            s('span', { style: { color: '#E1E4E8' } }, ', '),
            s('span', { style: { color: '#79B8FF' } }, '2'),
            s('span', { style: { color: '#E1E4E8' } }, ', '),
            s('span', { style: { color: '#9ECBFF' } }, "'女'"),
            s('span', { style: { color: '#E1E4E8' } }, ');'),
          ]),
          n(`
`),
          s('span', { class: 'line' }),
          n(`
`),
          s('span', { class: 'line' }, [s('span', { style: { color: '#6A737D' } }, '// 通过农历获取星盘信息')]),
          n(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F97583' } }, 'const'),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#79B8FF' } }, 'astrolabe'),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#F97583' } }, '='),
            s('span', { style: { color: '#E1E4E8' } }, ' astro.'),
            s('span', { style: { color: '#B392F0' } }, 'astrolabeByLunarDate'),
            s('span', { style: { color: '#E1E4E8' } }, '('),
            s('span', { style: { color: '#9ECBFF' } }, "'2000-7-17'"),
            s('span', { style: { color: '#E1E4E8' } }, ', '),
            s('span', { style: { color: '#79B8FF' } }, '2'),
            s('span', { style: { color: '#E1E4E8' } }, ', '),
            s('span', { style: { color: '#9ECBFF' } }, "'女'"),
            s('span', { style: { color: '#E1E4E8' } }, ');'),
          ]),
        ]),
      ]),
      s('pre', { class: 'shiki github-light vp-code-light' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#D73A49' } }, 'import'),
            s('span', { style: { color: '#24292E' } }, ' { astro } '),
            s('span', { style: { color: '#D73A49' } }, 'from'),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#032F62' } }, "'iztro'"),
            s('span', { style: { color: '#24292E' } }, ';'),
          ]),
          n(`
`),
          s('span', { class: 'line' }),
          n(`
`),
          s('span', { class: 'line' }, [s('span', { style: { color: '#6A737D' } }, '// 通过阳历获取星盘信息')]),
          n(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#D73A49' } }, 'const'),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#005CC5' } }, 'astrolabe'),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#D73A49' } }, '='),
            s('span', { style: { color: '#24292E' } }, ' astro.'),
            s('span', { style: { color: '#6F42C1' } }, 'astrolabeBySolarDate'),
            s('span', { style: { color: '#24292E' } }, '('),
            s('span', { style: { color: '#032F62' } }, "'2000-8-16'"),
            s('span', { style: { color: '#24292E' } }, ', '),
            s('span', { style: { color: '#005CC5' } }, '2'),
            s('span', { style: { color: '#24292E' } }, ', '),
            s('span', { style: { color: '#032F62' } }, "'女'"),
            s('span', { style: { color: '#24292E' } }, ');'),
          ]),
          n(`
`),
          s('span', { class: 'line' }),
          n(`
`),
          s('span', { class: 'line' }, [s('span', { style: { color: '#6A737D' } }, '// 通过农历获取星盘信息')]),
          n(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#D73A49' } }, 'const'),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#005CC5' } }, 'astrolabe'),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#D73A49' } }, '='),
            s('span', { style: { color: '#24292E' } }, ' astro.'),
            s('span', { style: { color: '#6F42C1' } }, 'astrolabeByLunarDate'),
            s('span', { style: { color: '#24292E' } }, '('),
            s('span', { style: { color: '#032F62' } }, "'2000-7-17'"),
            s('span', { style: { color: '#24292E' } }, ', '),
            s('span', { style: { color: '#005CC5' } }, '2'),
            s('span', { style: { color: '#24292E' } }, ', '),
            s('span', { style: { color: '#032F62' } }, "'女'"),
            s('span', { style: { color: '#24292E' } }, ');'),
          ]),
        ]),
      ]),
    ],
    -1,
  ),
  q = s(
    'div',
    { class: 'language-js vp-adaptive-theme' },
    [
      s('button', { title: 'Copy Code', class: 'copy' }),
      s('span', { class: 'lang' }, 'js'),
      s('pre', { class: 'shiki github-dark vp-code-dark' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F97583' } }, 'var'),
            s('span', { style: { color: '#E1E4E8' } }, ' { astro } '),
            s('span', { style: { color: '#F97583' } }, '='),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#B392F0' } }, 'require'),
            s('span', { style: { color: '#E1E4E8' } }, '('),
            s('span', { style: { color: '#9ECBFF' } }, "'iztro'"),
            s('span', { style: { color: '#E1E4E8' } }, ');'),
          ]),
          n(`
`),
          s('span', { class: 'line' }),
          n(`
`),
          s('span', { class: 'line' }, [s('span', { style: { color: '#6A737D' } }, '// 通过阳历获取星盘信息')]),
          n(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F97583' } }, 'var'),
            s('span', { style: { color: '#E1E4E8' } }, ' astrolabe '),
            s('span', { style: { color: '#F97583' } }, '='),
            s('span', { style: { color: '#E1E4E8' } }, ' astro.'),
            s('span', { style: { color: '#B392F0' } }, 'astrolabeBySolarDate'),
            s('span', { style: { color: '#E1E4E8' } }, '('),
            s('span', { style: { color: '#9ECBFF' } }, "'2000-8-16'"),
            s('span', { style: { color: '#E1E4E8' } }, ', '),
            s('span', { style: { color: '#79B8FF' } }, '2'),
            s('span', { style: { color: '#E1E4E8' } }, ', '),
            s('span', { style: { color: '#9ECBFF' } }, "'女'"),
            s('span', { style: { color: '#E1E4E8' } }, ');'),
          ]),
          n(`
`),
          s('span', { class: 'line' }),
          n(`
`),
          s('span', { class: 'line' }, [s('span', { style: { color: '#6A737D' } }, '// 通过农历获取星盘信息')]),
          n(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F97583' } }, 'var'),
            s('span', { style: { color: '#E1E4E8' } }, ' astrolabe '),
            s('span', { style: { color: '#F97583' } }, '='),
            s('span', { style: { color: '#E1E4E8' } }, ' astro.'),
            s('span', { style: { color: '#B392F0' } }, 'astrolabeByLunarDate'),
            s('span', { style: { color: '#E1E4E8' } }, '('),
            s('span', { style: { color: '#9ECBFF' } }, "'2000-7-17'"),
            s('span', { style: { color: '#E1E4E8' } }, ', '),
            s('span', { style: { color: '#79B8FF' } }, '2'),
            s('span', { style: { color: '#E1E4E8' } }, ', '),
            s('span', { style: { color: '#9ECBFF' } }, "'女'"),
            s('span', { style: { color: '#E1E4E8' } }, ', '),
            s('span', { style: { color: '#79B8FF' } }, 'false'),
            s('span', { style: { color: '#E1E4E8' } }, ');'),
          ]),
        ]),
      ]),
      s('pre', { class: 'shiki github-light vp-code-light' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#D73A49' } }, 'var'),
            s('span', { style: { color: '#24292E' } }, ' { astro } '),
            s('span', { style: { color: '#D73A49' } }, '='),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#6F42C1' } }, 'require'),
            s('span', { style: { color: '#24292E' } }, '('),
            s('span', { style: { color: '#032F62' } }, "'iztro'"),
            s('span', { style: { color: '#24292E' } }, ');'),
          ]),
          n(`
`),
          s('span', { class: 'line' }),
          n(`
`),
          s('span', { class: 'line' }, [s('span', { style: { color: '#6A737D' } }, '// 通过阳历获取星盘信息')]),
          n(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#D73A49' } }, 'var'),
            s('span', { style: { color: '#24292E' } }, ' astrolabe '),
            s('span', { style: { color: '#D73A49' } }, '='),
            s('span', { style: { color: '#24292E' } }, ' astro.'),
            s('span', { style: { color: '#6F42C1' } }, 'astrolabeBySolarDate'),
            s('span', { style: { color: '#24292E' } }, '('),
            s('span', { style: { color: '#032F62' } }, "'2000-8-16'"),
            s('span', { style: { color: '#24292E' } }, ', '),
            s('span', { style: { color: '#005CC5' } }, '2'),
            s('span', { style: { color: '#24292E' } }, ', '),
            s('span', { style: { color: '#032F62' } }, "'女'"),
            s('span', { style: { color: '#24292E' } }, ');'),
          ]),
          n(`
`),
          s('span', { class: 'line' }),
          n(`
`),
          s('span', { class: 'line' }, [s('span', { style: { color: '#6A737D' } }, '// 通过农历获取星盘信息')]),
          n(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#D73A49' } }, 'var'),
            s('span', { style: { color: '#24292E' } }, ' astrolabe '),
            s('span', { style: { color: '#D73A49' } }, '='),
            s('span', { style: { color: '#24292E' } }, ' astro.'),
            s('span', { style: { color: '#6F42C1' } }, 'astrolabeByLunarDate'),
            s('span', { style: { color: '#24292E' } }, '('),
            s('span', { style: { color: '#032F62' } }, "'2000-7-17'"),
            s('span', { style: { color: '#24292E' } }, ', '),
            s('span', { style: { color: '#005CC5' } }, '2'),
            s('span', { style: { color: '#24292E' } }, ', '),
            s('span', { style: { color: '#032F62' } }, "'女'"),
            s('span', { style: { color: '#24292E' } }, ', '),
            s('span', { style: { color: '#005CC5' } }, 'false'),
            s('span', { style: { color: '#24292E' } }, ');'),
          ]),
        ]),
      ]),
    ],
    -1,
  ),
  b = o(
    `<p>你会发现以上<code>astrolabeBySolarDate</code>和<code>astrolabeByLunarDate</code>的返回值是一样的， 这是因为<code>astrolabeByLunarDate</code>方法在内部处理的时候，也是将日期转化为<code>阳历</code>以后调用<code>astrolabeBySolarDate</code>方法。 以下是执行结果，因为结果比较长，所以将之折叠起来，如果你想要查看你调用结果是否和这个一样，可以展开查看：</p><details class="custom-block"><summary><code>astro.astrolabeBySolarDate</code> 和 <code>astro.astrolabeByLunarDate</code> 方法执行结果</summary><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 阳历日期</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">solarDate</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;2000-8-16&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">// 农历日期</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">lunarDate</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;二〇〇〇年七月十七&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 四柱</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">chineseDate</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;庚辰 甲申 丙午 庚寅&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 时辰</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">time</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;寅时&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 时辰对应的时间段</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">timeRange</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;03:00~05:00&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 星座</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">sign</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;狮子座&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 生肖</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">zodiac</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;龙&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 命宫地支</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">earthlyBranchOfSoulPalace</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;午&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 身宫地支</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">earthlyBranchOfBodyPalace</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;戌&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 命主</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">soul</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;破军&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 身主</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">body</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;文昌&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 五行局</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fiveElementsClass</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;木三局&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 十二宫数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">palaces</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 宫名</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;财帛&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 是否身宫</span></span>
<span class="line"><span style="color:#E1E4E8;">      isBodyPalace: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 是否来因宫</span></span>
<span class="line"><span style="color:#E1E4E8;">      isOriginalPalace: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 宫位天干</span></span>
<span class="line"><span style="color:#E1E4E8;">      heavenlyStem: </span><span style="color:#9ECBFF;">&#39;戊&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 宫位地支</span></span>
<span class="line"><span style="color:#E1E4E8;">      earthlyBranch: </span><span style="color:#9ECBFF;">&#39;寅&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 主星（含天马禄存）</span></span>
<span class="line"><span style="color:#E1E4E8;">      majorStars: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;武曲&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;major&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;得&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;天相&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;major&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;庙&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;天马&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;tianma&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 辅星（含六吉六煞）</span></span>
<span class="line"><span style="color:#E1E4E8;">      minorStars: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 杂耀</span></span>
<span class="line"><span style="color:#E1E4E8;">      adjectiveStars: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;月解&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;helper&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;三台&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;天寿&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;天巫&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;天厨&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;阴煞&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;天哭&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 长生12神</span></span>
<span class="line"><span style="color:#E1E4E8;">      changsheng12: </span><span style="color:#9ECBFF;">&#39;绝&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 博士12神</span></span>
<span class="line"><span style="color:#E1E4E8;">      boshi12: </span><span style="color:#9ECBFF;">&#39;蜚廉&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 流年将前12神</span></span>
<span class="line"><span style="color:#E1E4E8;">      jiangqian12: </span><span style="color:#9ECBFF;">&#39;岁驿&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 流年岁前12神</span></span>
<span class="line"><span style="color:#E1E4E8;">      suiqian12: </span><span style="color:#9ECBFF;">&#39;吊客&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 大限</span></span>
<span class="line"><span style="color:#E1E4E8;">      stage: { range: [</span><span style="color:#79B8FF;">44</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">53</span><span style="color:#E1E4E8;">], heavenlyStem: </span><span style="color:#9ECBFF;">&#39;戊&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 小限</span></span>
<span class="line"><span style="color:#E1E4E8;">      ages: [</span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">21</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">33</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">45</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">57</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">69</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">81</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;子女&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      isBodyPalace: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      isOriginalPalace: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      heavenlyStem: </span><span style="color:#9ECBFF;">&#39;己&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      earthlyBranch: </span><span style="color:#9ECBFF;">&#39;卯&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      majorStars: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;太阳&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;major&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;庙&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;天梁&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;major&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;庙&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      minorStars: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">      adjectiveStars: [{ name: </span><span style="color:#9ECBFF;">&#39;天刑&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">      changsheng12: </span><span style="color:#9ECBFF;">&#39;墓&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      boshi12: </span><span style="color:#9ECBFF;">&#39;奏书&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      jiangqian12: </span><span style="color:#9ECBFF;">&#39;息神&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      suiqian12: </span><span style="color:#9ECBFF;">&#39;病符&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stage: { range: [</span><span style="color:#79B8FF;">34</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">43</span><span style="color:#E1E4E8;">], heavenlyStem: </span><span style="color:#9ECBFF;">&#39;己&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ages: [</span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">44</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">56</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">68</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;夫妻&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      isBodyPalace: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      isOriginalPalace: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      heavenlyStem: </span><span style="color:#9ECBFF;">&#39;庚&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      earthlyBranch: </span><span style="color:#9ECBFF;">&#39;辰&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      majorStars: [{ name: </span><span style="color:#9ECBFF;">&#39;七杀&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;major&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;庙&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">      minorStars: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;右弼&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;soft&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;火星&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;tough&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;陷&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      adjectiveStars: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;封诰&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;华盖&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      changsheng12: </span><span style="color:#9ECBFF;">&#39;死&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      boshi12: </span><span style="color:#9ECBFF;">&#39;将军&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      jiangqian12: </span><span style="color:#9ECBFF;">&#39;华盖&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      suiqian12: </span><span style="color:#9ECBFF;">&#39;岁建&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stage: { range: [</span><span style="color:#79B8FF;">24</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">33</span><span style="color:#E1E4E8;">], heavenlyStem: </span><span style="color:#9ECBFF;">&#39;庚&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ages: [</span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">19</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">31</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">43</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">55</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">67</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">79</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;兄弟&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      isBodyPalace: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      isOriginalPalace: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      heavenlyStem: </span><span style="color:#9ECBFF;">&#39;辛&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      earthlyBranch: </span><span style="color:#9ECBFF;">&#39;巳&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      majorStars: [{ name: </span><span style="color:#9ECBFF;">&#39;天机&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;major&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;平&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">      minorStars: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">      adjectiveStars: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;天喜&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;flower&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;天空&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;孤辰&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      changsheng12: </span><span style="color:#9ECBFF;">&#39;病&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      boshi12: </span><span style="color:#9ECBFF;">&#39;小耗&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      jiangqian12: </span><span style="color:#9ECBFF;">&#39;劫煞&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      suiqian12: </span><span style="color:#9ECBFF;">&#39;晦气&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stage: { range: [</span><span style="color:#79B8FF;">14</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">23</span><span style="color:#E1E4E8;">], heavenlyStem: </span><span style="color:#9ECBFF;">&#39;辛&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ages: [</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">18</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">42</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">54</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">66</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">78</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;命宫&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      isBodyPalace: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      isOriginalPalace: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      heavenlyStem: </span><span style="color:#9ECBFF;">&#39;壬&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      earthlyBranch: </span><span style="color:#9ECBFF;">&#39;午&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      majorStars: [{ name: </span><span style="color:#9ECBFF;">&#39;紫微&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;major&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;庙&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">      minorStars: [{ name: </span><span style="color:#9ECBFF;">&#39;文曲&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;soft&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;陷&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">      adjectiveStars: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;年解&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;helper&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;凤阁&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;天福&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;截路&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;蜚廉&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      changsheng12: </span><span style="color:#9ECBFF;">&#39;衰&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      boshi12: </span><span style="color:#9ECBFF;">&#39;青龙&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      jiangqian12: </span><span style="color:#9ECBFF;">&#39;灾煞&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      suiqian12: </span><span style="color:#9ECBFF;">&#39;丧门&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stage: { range: [</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">13</span><span style="color:#E1E4E8;">], heavenlyStem: </span><span style="color:#9ECBFF;">&#39;壬&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ages: [</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">17</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">29</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">41</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">53</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">65</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">77</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;父母&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      isBodyPalace: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      isOriginalPalace: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      heavenlyStem: </span><span style="color:#9ECBFF;">&#39;癸&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      earthlyBranch: </span><span style="color:#9ECBFF;">&#39;未&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      majorStars: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">      minorStars: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;天钺&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;soft&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;陀罗&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;tough&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;庙&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      adjectiveStars: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;天姚&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;flower&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;空亡&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      changsheng12: </span><span style="color:#9ECBFF;">&#39;帝旺&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      boshi12: </span><span style="color:#9ECBFF;">&#39;力士&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      jiangqian12: </span><span style="color:#9ECBFF;">&#39;天煞&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      suiqian12: </span><span style="color:#9ECBFF;">&#39;贯索&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stage: { range: [</span><span style="color:#79B8FF;">114</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">], heavenlyStem: </span><span style="color:#9ECBFF;">&#39;癸&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ages: [</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">16</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">28</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">40</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">52</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">64</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">76</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;福德&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      isBodyPalace: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      isOriginalPalace: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      heavenlyStem: </span><span style="color:#9ECBFF;">&#39;甲&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      earthlyBranch: </span><span style="color:#9ECBFF;">&#39;申&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      majorStars: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;破军&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;major&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;得&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;禄存&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;lucun&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      minorStars: [{ name: </span><span style="color:#9ECBFF;">&#39;文昌&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;soft&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;得&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">      adjectiveStars: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;龙池&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;台辅&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;旬空&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      changsheng12: </span><span style="color:#9ECBFF;">&#39;临官&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      boshi12: </span><span style="color:#9ECBFF;">&#39;博士&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      jiangqian12: </span><span style="color:#9ECBFF;">&#39;指背&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      suiqian12: </span><span style="color:#9ECBFF;">&#39;官符&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stage: { range: [</span><span style="color:#79B8FF;">104</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">113</span><span style="color:#E1E4E8;">], heavenlyStem: </span><span style="color:#9ECBFF;">&#39;甲&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ages: [</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">27</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">39</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">51</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">63</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">75</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;田宅&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      isBodyPalace: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      isOriginalPalace: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      heavenlyStem: </span><span style="color:#9ECBFF;">&#39;乙&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      earthlyBranch: </span><span style="color:#9ECBFF;">&#39;酉&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      majorStars: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">      minorStars: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;地空&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;tough&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;擎羊&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;tough&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;陷&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      adjectiveStars: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;咸池&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;flower&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;天贵&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;月德&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      changsheng12: </span><span style="color:#9ECBFF;">&#39;冠带&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      boshi12: </span><span style="color:#9ECBFF;">&#39;官府&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      jiangqian12: </span><span style="color:#9ECBFF;">&#39;咸池&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      suiqian12: </span><span style="color:#9ECBFF;">&#39;小耗&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stage: { range: [</span><span style="color:#79B8FF;">94</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">103</span><span style="color:#E1E4E8;">], heavenlyStem: </span><span style="color:#9ECBFF;">&#39;乙&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ages: [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">14</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">26</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">38</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">50</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">62</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">74</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;官禄&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      isBodyPalace: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      isOriginalPalace: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      heavenlyStem: </span><span style="color:#9ECBFF;">&#39;丙&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      earthlyBranch: </span><span style="color:#9ECBFF;">&#39;戌&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      majorStars: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;廉贞&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;major&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;利&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;天府&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;major&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;庙&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      minorStars: [{ name: </span><span style="color:#9ECBFF;">&#39;左辅&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;soft&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">      adjectiveStars: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;天才&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;天虚&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      changsheng12: </span><span style="color:#9ECBFF;">&#39;沐浴&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      boshi12: </span><span style="color:#9ECBFF;">&#39;伏兵&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      jiangqian12: </span><span style="color:#9ECBFF;">&#39;月煞&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      suiqian12: </span><span style="color:#9ECBFF;">&#39;大耗&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stage: { range: [</span><span style="color:#79B8FF;">84</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">93</span><span style="color:#E1E4E8;">], heavenlyStem: </span><span style="color:#9ECBFF;">&#39;丙&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ages: [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">13</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">37</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">49</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">61</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">73</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;仆役&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      isBodyPalace: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      isOriginalPalace: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      heavenlyStem: </span><span style="color:#9ECBFF;">&#39;丁&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      earthlyBranch: </span><span style="color:#9ECBFF;">&#39;亥&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      majorStars: [{ name: </span><span style="color:#9ECBFF;">&#39;太阴&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;major&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;庙&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">      minorStars: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">      adjectiveStars: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;红鸾&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;flower&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;恩光&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;天官&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;天月&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;天伤&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      changsheng12: </span><span style="color:#9ECBFF;">&#39;长生&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      boshi12: </span><span style="color:#9ECBFF;">&#39;大耗&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      jiangqian12: </span><span style="color:#9ECBFF;">&#39;亡神&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      suiqian12: </span><span style="color:#9ECBFF;">&#39;龙德&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stage: { range: [</span><span style="color:#79B8FF;">74</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">83</span><span style="color:#E1E4E8;">], heavenlyStem: </span><span style="color:#9ECBFF;">&#39;丁&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ages: [</span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">24</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">36</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">48</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">72</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">84</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;迁移&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      isBodyPalace: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      isOriginalPalace: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      heavenlyStem: </span><span style="color:#9ECBFF;">&#39;戊&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      earthlyBranch: </span><span style="color:#9ECBFF;">&#39;子&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      majorStars: [{ name: </span><span style="color:#9ECBFF;">&#39;贪狼&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;major&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;旺&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">      minorStars: [{ name: </span><span style="color:#9ECBFF;">&#39;铃星&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;tough&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;陷&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">      adjectiveStars: [{ name: </span><span style="color:#9ECBFF;">&#39; 八座&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">      changsheng12: </span><span style="color:#9ECBFF;">&#39;养&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      boshi12: </span><span style="color:#9ECBFF;">&#39;病符&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      jiangqian12: </span><span style="color:#9ECBFF;">&#39;将星&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      suiqian12: </span><span style="color:#9ECBFF;">&#39;白虎&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stage: { range: [</span><span style="color:#79B8FF;">64</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">73</span><span style="color:#E1E4E8;">], heavenlyStem: </span><span style="color:#9ECBFF;">&#39;戊&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ages: [</span><span style="color:#79B8FF;">11</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">23</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">35</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">47</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">59</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">71</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">83</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;疾厄&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      isBodyPalace: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      isOriginalPalace: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      heavenlyStem: </span><span style="color:#9ECBFF;">&#39;己&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      earthlyBranch: </span><span style="color:#9ECBFF;">&#39;丑&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      majorStars: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;天同&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;major&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;不&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;巨门&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;major&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;不&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      minorStars: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;天魁&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;soft&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;地劫&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;tough&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;">, brightness: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      adjectiveStars: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;天德&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;寡宿&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;破碎&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        { name: </span><span style="color:#9ECBFF;">&#39;天使&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;adjective&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;origin&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      changsheng12: </span><span style="color:#9ECBFF;">&#39;胎&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      boshi12: </span><span style="color:#9ECBFF;">&#39;喜神&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      jiangqian12: </span><span style="color:#9ECBFF;">&#39;攀鞍&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      suiqian12: </span><span style="color:#9ECBFF;">&#39;天德&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      stage: { range: [</span><span style="color:#79B8FF;">54</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">63</span><span style="color:#E1E4E8;">], heavenlyStem: </span><span style="color:#9ECBFF;">&#39;己&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      ages: [</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">22</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">34</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">46</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">58</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">70</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">82</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 阳历日期</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">solarDate</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;2000-8-16&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">// 农历日期</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">lunarDate</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;二〇〇〇年七月十七&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 四柱</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">chineseDate</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;庚辰 甲申 丙午 庚寅&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 时辰</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">time</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;寅时&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 时辰对应的时间段</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">timeRange</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;03:00~05:00&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 星座</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">sign</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;狮子座&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 生肖</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">zodiac</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;龙&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 命宫地支</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">earthlyBranchOfSoulPalace</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;午&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 身宫地支</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">earthlyBranchOfBodyPalace</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;戌&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 命主</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">soul</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;破军&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 身主</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">body</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;文昌&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 五行局</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fiveElementsClass</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;木三局&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 十二宫数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">palaces</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 宫名</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;财帛&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 是否身宫</span></span>
<span class="line"><span style="color:#24292E;">      isBodyPalace: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 是否来因宫</span></span>
<span class="line"><span style="color:#24292E;">      isOriginalPalace: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 宫位天干</span></span>
<span class="line"><span style="color:#24292E;">      heavenlyStem: </span><span style="color:#032F62;">&#39;戊&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 宫位地支</span></span>
<span class="line"><span style="color:#24292E;">      earthlyBranch: </span><span style="color:#032F62;">&#39;寅&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 主星（含天马禄存）</span></span>
<span class="line"><span style="color:#24292E;">      majorStars: [</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;武曲&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;major&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;得&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;天相&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;major&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;庙&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;天马&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;tianma&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 辅星（含六吉六煞）</span></span>
<span class="line"><span style="color:#24292E;">      minorStars: [],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 杂耀</span></span>
<span class="line"><span style="color:#24292E;">      adjectiveStars: [</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;月解&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;helper&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;三台&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;天寿&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;天巫&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;天厨&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;阴煞&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;天哭&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 长生12神</span></span>
<span class="line"><span style="color:#24292E;">      changsheng12: </span><span style="color:#032F62;">&#39;绝&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 博士12神</span></span>
<span class="line"><span style="color:#24292E;">      boshi12: </span><span style="color:#032F62;">&#39;蜚廉&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 流年将前12神</span></span>
<span class="line"><span style="color:#24292E;">      jiangqian12: </span><span style="color:#032F62;">&#39;岁驿&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 流年岁前12神</span></span>
<span class="line"><span style="color:#24292E;">      suiqian12: </span><span style="color:#032F62;">&#39;吊客&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 大限</span></span>
<span class="line"><span style="color:#24292E;">      stage: { range: [</span><span style="color:#005CC5;">44</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">53</span><span style="color:#24292E;">], heavenlyStem: </span><span style="color:#032F62;">&#39;戊&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 小限</span></span>
<span class="line"><span style="color:#24292E;">      ages: [</span><span style="color:#005CC5;">9</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">21</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">33</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">45</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">57</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">69</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">81</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;子女&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      isBodyPalace: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      isOriginalPalace: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      heavenlyStem: </span><span style="color:#032F62;">&#39;己&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      earthlyBranch: </span><span style="color:#032F62;">&#39;卯&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      majorStars: [</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;太阳&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;major&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;庙&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;天梁&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;major&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;庙&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      minorStars: [],</span></span>
<span class="line"><span style="color:#24292E;">      adjectiveStars: [{ name: </span><span style="color:#032F62;">&#39;天刑&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">      changsheng12: </span><span style="color:#032F62;">&#39;墓&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      boshi12: </span><span style="color:#032F62;">&#39;奏书&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      jiangqian12: </span><span style="color:#032F62;">&#39;息神&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      suiqian12: </span><span style="color:#032F62;">&#39;病符&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      stage: { range: [</span><span style="color:#005CC5;">34</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">43</span><span style="color:#24292E;">], heavenlyStem: </span><span style="color:#032F62;">&#39;己&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ages: [</span><span style="color:#005CC5;">8</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">32</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">44</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">56</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">68</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;夫妻&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      isBodyPalace: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      isOriginalPalace: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      heavenlyStem: </span><span style="color:#032F62;">&#39;庚&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      earthlyBranch: </span><span style="color:#032F62;">&#39;辰&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      majorStars: [{ name: </span><span style="color:#032F62;">&#39;七杀&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;major&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;庙&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">      minorStars: [</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;右弼&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;soft&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;火星&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;tough&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;陷&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      adjectiveStars: [</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;封诰&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;华盖&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      changsheng12: </span><span style="color:#032F62;">&#39;死&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      boshi12: </span><span style="color:#032F62;">&#39;将军&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      jiangqian12: </span><span style="color:#032F62;">&#39;华盖&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      suiqian12: </span><span style="color:#032F62;">&#39;岁建&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      stage: { range: [</span><span style="color:#005CC5;">24</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">33</span><span style="color:#24292E;">], heavenlyStem: </span><span style="color:#032F62;">&#39;庚&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ages: [</span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">19</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">31</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">43</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">55</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">67</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">79</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;兄弟&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      isBodyPalace: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      isOriginalPalace: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      heavenlyStem: </span><span style="color:#032F62;">&#39;辛&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      earthlyBranch: </span><span style="color:#032F62;">&#39;巳&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      majorStars: [{ name: </span><span style="color:#032F62;">&#39;天机&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;major&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;平&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">      minorStars: [],</span></span>
<span class="line"><span style="color:#24292E;">      adjectiveStars: [</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;天喜&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;flower&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;天空&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;孤辰&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      changsheng12: </span><span style="color:#032F62;">&#39;病&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      boshi12: </span><span style="color:#032F62;">&#39;小耗&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      jiangqian12: </span><span style="color:#032F62;">&#39;劫煞&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      suiqian12: </span><span style="color:#032F62;">&#39;晦气&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      stage: { range: [</span><span style="color:#005CC5;">14</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">23</span><span style="color:#24292E;">], heavenlyStem: </span><span style="color:#032F62;">&#39;辛&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ages: [</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">18</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">42</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">54</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">66</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">78</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;命宫&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      isBodyPalace: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      isOriginalPalace: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      heavenlyStem: </span><span style="color:#032F62;">&#39;壬&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      earthlyBranch: </span><span style="color:#032F62;">&#39;午&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      majorStars: [{ name: </span><span style="color:#032F62;">&#39;紫微&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;major&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;庙&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">      minorStars: [{ name: </span><span style="color:#032F62;">&#39;文曲&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;soft&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;陷&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">      adjectiveStars: [</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;年解&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;helper&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;凤阁&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;天福&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;截路&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;蜚廉&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      changsheng12: </span><span style="color:#032F62;">&#39;衰&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      boshi12: </span><span style="color:#032F62;">&#39;青龙&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      jiangqian12: </span><span style="color:#032F62;">&#39;灾煞&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      suiqian12: </span><span style="color:#032F62;">&#39;丧门&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      stage: { range: [</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">13</span><span style="color:#24292E;">], heavenlyStem: </span><span style="color:#032F62;">&#39;壬&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ages: [</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">17</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">29</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">41</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">53</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">65</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">77</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;父母&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      isBodyPalace: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      isOriginalPalace: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      heavenlyStem: </span><span style="color:#032F62;">&#39;癸&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      earthlyBranch: </span><span style="color:#032F62;">&#39;未&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      majorStars: [],</span></span>
<span class="line"><span style="color:#24292E;">      minorStars: [</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;天钺&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;soft&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;陀罗&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;tough&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;庙&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      adjectiveStars: [</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;天姚&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;flower&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;空亡&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      changsheng12: </span><span style="color:#032F62;">&#39;帝旺&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      boshi12: </span><span style="color:#032F62;">&#39;力士&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      jiangqian12: </span><span style="color:#032F62;">&#39;天煞&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      suiqian12: </span><span style="color:#032F62;">&#39;贯索&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      stage: { range: [</span><span style="color:#005CC5;">114</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">123</span><span style="color:#24292E;">], heavenlyStem: </span><span style="color:#032F62;">&#39;癸&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ages: [</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">16</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">28</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">40</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">52</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">64</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">76</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;福德&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      isBodyPalace: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      isOriginalPalace: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      heavenlyStem: </span><span style="color:#032F62;">&#39;甲&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      earthlyBranch: </span><span style="color:#032F62;">&#39;申&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      majorStars: [</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;破军&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;major&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;得&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;禄存&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;lucun&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      minorStars: [{ name: </span><span style="color:#032F62;">&#39;文昌&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;soft&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;得&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">      adjectiveStars: [</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;龙池&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;台辅&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;旬空&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      changsheng12: </span><span style="color:#032F62;">&#39;临官&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      boshi12: </span><span style="color:#032F62;">&#39;博士&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      jiangqian12: </span><span style="color:#032F62;">&#39;指背&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      suiqian12: </span><span style="color:#032F62;">&#39;官符&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      stage: { range: [</span><span style="color:#005CC5;">104</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">113</span><span style="color:#24292E;">], heavenlyStem: </span><span style="color:#032F62;">&#39;甲&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ages: [</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">15</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">27</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">39</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">51</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">63</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">75</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;田宅&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      isBodyPalace: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      isOriginalPalace: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      heavenlyStem: </span><span style="color:#032F62;">&#39;乙&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      earthlyBranch: </span><span style="color:#032F62;">&#39;酉&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      majorStars: [],</span></span>
<span class="line"><span style="color:#24292E;">      minorStars: [</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;地空&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;tough&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;擎羊&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;tough&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;陷&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      adjectiveStars: [</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;咸池&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;flower&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;天贵&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;月德&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      changsheng12: </span><span style="color:#032F62;">&#39;冠带&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      boshi12: </span><span style="color:#032F62;">&#39;官府&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      jiangqian12: </span><span style="color:#032F62;">&#39;咸池&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      suiqian12: </span><span style="color:#032F62;">&#39;小耗&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      stage: { range: [</span><span style="color:#005CC5;">94</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">103</span><span style="color:#24292E;">], heavenlyStem: </span><span style="color:#032F62;">&#39;乙&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ages: [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">14</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">26</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">38</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">50</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">62</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">74</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;官禄&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      isBodyPalace: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      isOriginalPalace: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      heavenlyStem: </span><span style="color:#032F62;">&#39;丙&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      earthlyBranch: </span><span style="color:#032F62;">&#39;戌&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      majorStars: [</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;廉贞&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;major&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;利&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;天府&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;major&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;庙&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      minorStars: [{ name: </span><span style="color:#032F62;">&#39;左辅&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;soft&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">      adjectiveStars: [</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;天才&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;天虚&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      changsheng12: </span><span style="color:#032F62;">&#39;沐浴&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      boshi12: </span><span style="color:#032F62;">&#39;伏兵&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      jiangqian12: </span><span style="color:#032F62;">&#39;月煞&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      suiqian12: </span><span style="color:#032F62;">&#39;大耗&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      stage: { range: [</span><span style="color:#005CC5;">84</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">93</span><span style="color:#24292E;">], heavenlyStem: </span><span style="color:#032F62;">&#39;丙&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ages: [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">13</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">25</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">37</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">49</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">61</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">73</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;仆役&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      isBodyPalace: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      isOriginalPalace: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      heavenlyStem: </span><span style="color:#032F62;">&#39;丁&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      earthlyBranch: </span><span style="color:#032F62;">&#39;亥&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      majorStars: [{ name: </span><span style="color:#032F62;">&#39;太阴&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;major&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;庙&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">      minorStars: [],</span></span>
<span class="line"><span style="color:#24292E;">      adjectiveStars: [</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;红鸾&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;flower&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;恩光&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;天官&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;天月&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;天伤&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      changsheng12: </span><span style="color:#032F62;">&#39;长生&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      boshi12: </span><span style="color:#032F62;">&#39;大耗&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      jiangqian12: </span><span style="color:#032F62;">&#39;亡神&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      suiqian12: </span><span style="color:#032F62;">&#39;龙德&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      stage: { range: [</span><span style="color:#005CC5;">74</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">83</span><span style="color:#24292E;">], heavenlyStem: </span><span style="color:#032F62;">&#39;丁&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ages: [</span><span style="color:#005CC5;">12</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">24</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">36</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">48</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">60</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">72</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">84</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;迁移&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      isBodyPalace: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      isOriginalPalace: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      heavenlyStem: </span><span style="color:#032F62;">&#39;戊&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      earthlyBranch: </span><span style="color:#032F62;">&#39;子&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      majorStars: [{ name: </span><span style="color:#032F62;">&#39;贪狼&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;major&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;旺&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">      minorStars: [{ name: </span><span style="color:#032F62;">&#39;铃星&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;tough&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;陷&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">      adjectiveStars: [{ name: </span><span style="color:#032F62;">&#39; 八座&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">      changsheng12: </span><span style="color:#032F62;">&#39;养&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      boshi12: </span><span style="color:#032F62;">&#39;病符&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      jiangqian12: </span><span style="color:#032F62;">&#39;将星&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      suiqian12: </span><span style="color:#032F62;">&#39;白虎&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      stage: { range: [</span><span style="color:#005CC5;">64</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">73</span><span style="color:#24292E;">], heavenlyStem: </span><span style="color:#032F62;">&#39;戊&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ages: [</span><span style="color:#005CC5;">11</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">23</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">35</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">47</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">59</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">71</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">83</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;疾厄&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      isBodyPalace: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      isOriginalPalace: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      heavenlyStem: </span><span style="color:#032F62;">&#39;己&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      earthlyBranch: </span><span style="color:#032F62;">&#39;丑&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      majorStars: [</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;天同&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;major&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;不&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;巨门&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;major&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;不&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      minorStars: [</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;天魁&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;soft&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;地劫&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;tough&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;">, brightness: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      adjectiveStars: [</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;天德&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;寡宿&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;破碎&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        { name: </span><span style="color:#032F62;">&#39;天使&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;adjective&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;origin&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      changsheng12: </span><span style="color:#032F62;">&#39;胎&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      boshi12: </span><span style="color:#032F62;">&#39;喜神&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      jiangqian12: </span><span style="color:#032F62;">&#39;攀鞍&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      suiqian12: </span><span style="color:#032F62;">&#39;天德&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      stage: { range: [</span><span style="color:#005CC5;">54</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">63</span><span style="color:#24292E;">], heavenlyStem: </span><span style="color:#032F62;">&#39;己&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      ages: [</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">22</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">34</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">46</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">58</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">70</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">82</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></details><h5 id="方法定义" tabindex="-1">方法定义 <a class="header-anchor" href="#方法定义" aria-label="Permalink to &quot;方法定义&quot;">​</a></h5><ul><li><p>通过阳历日期获取星盘信息</p><p><code>astro</code>.<code>astrolabeBySolarDate(solarDateStr, timeIndex, gender, fixLeap, language)</code></p><ul><li><p>参数</p><table><thead><tr><th>参数</th><th>类型</th><th>是否必填</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>solarDateStr</td><td><code>string</code></td><td><code>true</code></td><td>-</td><td>阳历日期【YYYY-M-D】</td></tr><tr><td>timeIndex</td><td><code>number</code></td><td><code>true</code></td><td>-</td><td>出生时辰序号【0~12】，对应从早子时（0）一直到晚子时（12）的序号</td></tr><tr><td>gender</td><td><code>string</code></td><td><code>true</code></td><td>-</td><td>性别【男/女】</td></tr><tr><td>fixLeap</td><td><code>boolean</code></td><td><code>false</code></td><td><code>true</code></td><td>是否调整闰月，为<code>true</code>闰月的前半个月算上个月，后半个月算下个月</td></tr><tr><td>language</td><td><code>Language</code></td><td><code>false</code></td><td><code>zh-CN</code></td><td>返回数据将被国际化为指定语言。目前支持 <code>zh-CN</code>,<code>zh-TW</code>,<code>en-US</code>,<code>ko-KR</code> 和 <code>ja-JP</code></td></tr></tbody></table></li><li><p>返回值</p><p><a href="./type-definition.html#functionalastrolabe"><code>FunctionalAstrolabe</code></a></p></li></ul></li><li><p>通过农历日期获取星盘信息</p><p><code>astro</code>.<code>astrolabeByLunarDate(lunarDateStr, timeIndex, gender, isLeapMonth, fixLeap, language)</code></p><ul><li><p>参数</p><table><thead><tr><th>参数</th><th>类型</th><th>是否必填</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>lunarDateStr</td><td><code>string</code></td><td><code>true</code></td><td>-</td><td>农历日期【YYYY-M-D】，例如<code>2000年七月十七</code>则传入<code>2000-7-17</code></td></tr><tr><td>timeIndex</td><td><code>number</code></td><td><code>true</code></td><td>-</td><td>出生时辰序号【0~12】，对应从早子时（0）一直到晚子时（12）的序号</td></tr><tr><td>gender</td><td><code>string</code></td><td><code>true</code></td><td>-</td><td>性别【男/女】</td></tr><tr><td>isLeapMonth</td><td><code>boolean</code></td><td><code>false</code></td><td><code>false</code></td><td>是否闰月，当实际月份没有闰月时该参数不生效</td></tr><tr><td>fixLeap</td><td><code>boolean</code></td><td><code>false</code></td><td><code>true</code></td><td>是否调整闰月，为<code>true</code>闰月的前半个月算上个月，后半个月算下个月</td></tr><tr><td>language</td><td><code>Language</code></td><td><code>false</code></td><td><code>zh-CN</code></td><td>返回数据将被国际化为指定语言。目前支持 <code>zh-CN</code>,<code>zh-TW</code>,<code>en-US</code>,<code>ko-KR</code> 和 <code>ja-JP</code></td></tr></tbody></table></li><li><p>返回值</p><p><a href="./type-definition.html#functionalastrolabe"><code>FunctionalAstrolabe</code></a></p></li></ul></li></ul><h2 id="获取运限" tabindex="-1">获取运限 <a class="header-anchor" href="#获取运限" aria-label="Permalink to &quot;获取运限&quot;">​</a></h2><p>紫微斗数的运限分为<code>大限</code>、<code>流年</code>、<code>流月</code>、<code>流日</code>、<code>流时</code>、<code>流分</code>、<code>流秒</code>，由于<code>流分</code>、<code>流秒</code>使用场景不多，所以我们暂时不提供。 <code>大限</code>、<code>流年</code>、<code>流月</code>、<code>流日</code>、<code>流时</code>已经能满足绝大部分需求和使用场景了，使用<code>iztro</code>能够很轻松的获取到这些数据。</p>`,
    6,
  ),
  v = s(
    'div',
    { class: 'language-ts vp-adaptive-theme' },
    [
      s('button', { title: 'Copy Code', class: 'copy' }),
      s('span', { class: 'lang' }, 'ts'),
      s('pre', { class: 'shiki github-dark vp-code-dark' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F97583' } }, 'import'),
            s('span', { style: { color: '#E1E4E8' } }, ' { astro } '),
            s('span', { style: { color: '#F97583' } }, 'from'),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#9ECBFF' } }, "'iztro'"),
            s('span', { style: { color: '#E1E4E8' } }, ';'),
          ]),
          n(`
`),
          s('span', { class: 'line' }),
          n(`
`),
          s('span', { class: 'line' }, [s('span', { style: { color: '#6A737D' } }, '// 通过阳历获取星盘信息')]),
          n(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F97583' } }, 'const'),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#79B8FF' } }, 'astrolabe'),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#F97583' } }, '='),
            s('span', { style: { color: '#E1E4E8' } }, ' astro.'),
            s('span', { style: { color: '#B392F0' } }, 'astrolabeBySolarDate'),
            s('span', { style: { color: '#E1E4E8' } }, '('),
            s('span', { style: { color: '#9ECBFF' } }, "'2000-8-16'"),
            s('span', { style: { color: '#E1E4E8' } }, ', '),
            s('span', { style: { color: '#79B8FF' } }, '2'),
            s('span', { style: { color: '#E1E4E8' } }, ', '),
            s('span', { style: { color: '#9ECBFF' } }, "'女'"),
            s('span', { style: { color: '#E1E4E8' } }, ');'),
          ]),
          n(`
`),
          s('span', { class: 'line' }),
          n(`
`),
          s('span', { class: 'line' }, [s('span', { style: { color: '#6A737D' } }, '// 获取运限数据')]),
          n(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#E1E4E8' } }, 'astrolabe.'),
            s('span', { style: { color: '#B392F0' } }, 'horoscope'),
            s('span', { style: { color: '#E1E4E8' } }, '('),
            s('span', { style: { color: '#F97583' } }, 'new'),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#B392F0' } }, 'Date'),
            s('span', { style: { color: '#E1E4E8' } }, '());'),
          ]),
        ]),
      ]),
      s('pre', { class: 'shiki github-light vp-code-light' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#D73A49' } }, 'import'),
            s('span', { style: { color: '#24292E' } }, ' { astro } '),
            s('span', { style: { color: '#D73A49' } }, 'from'),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#032F62' } }, "'iztro'"),
            s('span', { style: { color: '#24292E' } }, ';'),
          ]),
          n(`
`),
          s('span', { class: 'line' }),
          n(`
`),
          s('span', { class: 'line' }, [s('span', { style: { color: '#6A737D' } }, '// 通过阳历获取星盘信息')]),
          n(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#D73A49' } }, 'const'),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#005CC5' } }, 'astrolabe'),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#D73A49' } }, '='),
            s('span', { style: { color: '#24292E' } }, ' astro.'),
            s('span', { style: { color: '#6F42C1' } }, 'astrolabeBySolarDate'),
            s('span', { style: { color: '#24292E' } }, '('),
            s('span', { style: { color: '#032F62' } }, "'2000-8-16'"),
            s('span', { style: { color: '#24292E' } }, ', '),
            s('span', { style: { color: '#005CC5' } }, '2'),
            s('span', { style: { color: '#24292E' } }, ', '),
            s('span', { style: { color: '#032F62' } }, "'女'"),
            s('span', { style: { color: '#24292E' } }, ');'),
          ]),
          n(`
`),
          s('span', { class: 'line' }),
          n(`
`),
          s('span', { class: 'line' }, [s('span', { style: { color: '#6A737D' } }, '// 获取运限数据')]),
          n(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#24292E' } }, 'astrolabe.'),
            s('span', { style: { color: '#6F42C1' } }, 'horoscope'),
            s('span', { style: { color: '#24292E' } }, '('),
            s('span', { style: { color: '#D73A49' } }, 'new'),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#6F42C1' } }, 'Date'),
            s('span', { style: { color: '#24292E' } }, '());'),
          ]),
        ]),
      ]),
    ],
    -1,
  ),
  S = s(
    'div',
    { class: 'language-js vp-adaptive-theme' },
    [
      s('button', { title: 'Copy Code', class: 'copy' }),
      s('span', { class: 'lang' }, 'js'),
      s('pre', { class: 'shiki github-dark vp-code-dark' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F97583' } }, 'var'),
            s('span', { style: { color: '#E1E4E8' } }, ' { astro } '),
            s('span', { style: { color: '#F97583' } }, '='),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#B392F0' } }, 'require'),
            s('span', { style: { color: '#E1E4E8' } }, '('),
            s('span', { style: { color: '#9ECBFF' } }, "'iztro'"),
            s('span', { style: { color: '#E1E4E8' } }, ');'),
          ]),
          n(`
`),
          s('span', { class: 'line' }),
          n(`
`),
          s('span', { class: 'line' }, [s('span', { style: { color: '#6A737D' } }, '// 通过阳历获取星盘信息')]),
          n(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F97583' } }, 'var'),
            s('span', { style: { color: '#E1E4E8' } }, ' astrolabe '),
            s('span', { style: { color: '#F97583' } }, '='),
            s('span', { style: { color: '#E1E4E8' } }, ' astro.'),
            s('span', { style: { color: '#B392F0' } }, 'astrolabeBySolarDate'),
            s('span', { style: { color: '#E1E4E8' } }, '('),
            s('span', { style: { color: '#9ECBFF' } }, "'2000-8-16'"),
            s('span', { style: { color: '#E1E4E8' } }, ', '),
            s('span', { style: { color: '#79B8FF' } }, '2'),
            s('span', { style: { color: '#E1E4E8' } }, ', '),
            s('span', { style: { color: '#9ECBFF' } }, "'女'"),
            s('span', { style: { color: '#E1E4E8' } }, ');'),
          ]),
          n(`
`),
          s('span', { class: 'line' }),
          n(`
`),
          s('span', { class: 'line' }, [s('span', { style: { color: '#6A737D' } }, '// 获取运限数据')]),
          n(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#E1E4E8' } }, 'astrolabe.'),
            s('span', { style: { color: '#B392F0' } }, 'horoscope'),
            s('span', { style: { color: '#E1E4E8' } }, '('),
            s('span', { style: { color: '#F97583' } }, 'new'),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#B392F0' } }, 'Date'),
            s('span', { style: { color: '#E1E4E8' } }, '());'),
          ]),
        ]),
      ]),
      s('pre', { class: 'shiki github-light vp-code-light' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#D73A49' } }, 'var'),
            s('span', { style: { color: '#24292E' } }, ' { astro } '),
            s('span', { style: { color: '#D73A49' } }, '='),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#6F42C1' } }, 'require'),
            s('span', { style: { color: '#24292E' } }, '('),
            s('span', { style: { color: '#032F62' } }, "'iztro'"),
            s('span', { style: { color: '#24292E' } }, ');'),
          ]),
          n(`
`),
          s('span', { class: 'line' }),
          n(`
`),
          s('span', { class: 'line' }, [s('span', { style: { color: '#6A737D' } }, '// 通过阳历获取星盘信息')]),
          n(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#D73A49' } }, 'var'),
            s('span', { style: { color: '#24292E' } }, ' astrolabe '),
            s('span', { style: { color: '#D73A49' } }, '='),
            s('span', { style: { color: '#24292E' } }, ' astro.'),
            s('span', { style: { color: '#6F42C1' } }, 'astrolabeBySolarDate'),
            s('span', { style: { color: '#24292E' } }, '('),
            s('span', { style: { color: '#032F62' } }, "'2000-8-16'"),
            s('span', { style: { color: '#24292E' } }, ', '),
            s('span', { style: { color: '#005CC5' } }, '2'),
            s('span', { style: { color: '#24292E' } }, ', '),
            s('span', { style: { color: '#032F62' } }, "'女'"),
            s('span', { style: { color: '#24292E' } }, ');'),
          ]),
          n(`
`),
          s('span', { class: 'line' }),
          n(`
`),
          s('span', { class: 'line' }, [s('span', { style: { color: '#6A737D' } }, '// 获取运限数据')]),
          n(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#24292E' } }, 'astrolabe.'),
            s('span', { style: { color: '#6F42C1' } }, 'horoscope'),
            s('span', { style: { color: '#24292E' } }, '('),
            s('span', { style: { color: '#D73A49' } }, 'new'),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#6F42C1' } }, 'Date'),
            s('span', { style: { color: '#24292E' } }, '());'),
          ]),
        ]),
      ]),
    ],
    -1,
  ),
  j = o(
    `<p>调用<code>astrolabe</code>.<code>horoscope()</code>方法以后你会获得如下数据</p><details class="custom-block"><summary><code>horoscope()</code> 方法返回数据</summary><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">solarDate</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2023-8-28&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">lunarDate</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;二〇二三年七月十三&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">decadal</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">heavenlyStem</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;庚&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">earthlyBranch</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;辰&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">palaceNames</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;夫妻&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;兄弟&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;命宫&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;父母&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;福德&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;田宅&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;官禄&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;仆役&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;迁移&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;疾厄&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;财帛&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;子女&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">mutagen</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;太阳&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;武曲&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;太阴&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;天同&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">stars</span><span style="color:#E1E4E8;">: [{name: </span><span style="color:#9ECBFF;">&quot;运马&quot;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&quot;tianma&quot;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&quot;decadal&quot;</span><span style="color:#E1E4E8;">}], …]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">age</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">nominalAge</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">23</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">yearly</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">heavenlyStem</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;癸&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">earthlyBranch</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;卯&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">palaceNames</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;兄弟&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;命宫&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;父母&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;福德&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;田宅&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;官禄&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;仆役&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;迁移&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;疾厄&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;财帛&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;子女&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;夫妻&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">mutagen</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;破军&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;巨门&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;太阴&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;贪狼&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">stars</span><span style="color:#E1E4E8;">: [[], [{name: </span><span style="color:#9ECBFF;">&quot;流魁&quot;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&quot;soft&quot;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&quot;yearly&quot;</span><span style="color:#E1E4E8;">}, …], [], …]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">monthly</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">heavenlyStem</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;庚&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">earthlyBranch</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;申&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">palaceNames</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;子女&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;夫妻&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;兄弟&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;命宫&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;父母&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;福德&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;田宅&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;官禄&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;仆役&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;迁移&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;疾厄&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;财帛&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">mutagen</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;太阳&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;武曲&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;太阴&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;天同&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">daily</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">heavenlyStem</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;戊&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">earthlyBranch</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;午&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">palaceNames</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;子女&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;夫妻&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;兄弟&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;命宫&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;父母&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;福德&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;田宅&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;官禄&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;仆役&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;迁移&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;疾厄&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;财帛&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">mutagen</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;贪狼&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;太阴&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;右弼&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;天机&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }, </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">hourly</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">heavenlyStem</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;壬&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">earthlyBranch</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;子&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">palaceNames</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;子女&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;夫妻&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;兄弟&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;命宫&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;父母&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;福德&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;田宅&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;官禄&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;仆役&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;迁移&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;疾厄&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;财帛&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">mutagen</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;天梁&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;紫微&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;左辅&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;武曲&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">solarDate</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;2023-8-28&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">lunarDate</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;二〇二三年七月十三&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">decadal</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">heavenlyStem</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;庚&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">earthlyBranch</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;辰&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">palaceNames</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;夫妻&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;兄弟&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;命宫&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;父母&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;福德&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;田宅&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;官禄&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;仆役&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;迁移&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;疾厄&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;财帛&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;子女&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">mutagen</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;太阳&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;武曲&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;太阴&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;天同&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">stars</span><span style="color:#24292E;">: [{name: </span><span style="color:#032F62;">&quot;运马&quot;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&quot;tianma&quot;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&quot;decadal&quot;</span><span style="color:#24292E;">}], …]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">age</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">nominalAge</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">23</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }, </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">yearly</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">heavenlyStem</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;癸&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">earthlyBranch</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;卯&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">palaceNames</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;兄弟&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;命宫&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;父母&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;福德&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;田宅&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;官禄&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;仆役&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;迁移&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;疾厄&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;财帛&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;子女&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;夫妻&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">mutagen</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;破军&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;巨门&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;太阴&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;贪狼&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">stars</span><span style="color:#24292E;">: [[], [{name: </span><span style="color:#032F62;">&quot;流魁&quot;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&quot;soft&quot;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&quot;yearly&quot;</span><span style="color:#24292E;">}, …], [], …]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">monthly</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">heavenlyStem</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;庚&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">earthlyBranch</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;申&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">palaceNames</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;子女&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;夫妻&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;兄弟&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;命宫&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;父母&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;福德&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;田宅&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;官禄&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;仆役&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;迁移&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;疾厄&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;财帛&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">mutagen</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;太阳&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;武曲&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;太阴&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;天同&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">daily</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">heavenlyStem</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;戊&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">earthlyBranch</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;午&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">palaceNames</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;子女&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;夫妻&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;兄弟&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;命宫&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;父母&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;福德&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;田宅&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;官禄&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;仆役&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;迁移&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;疾厄&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;财帛&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">mutagen</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;贪狼&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;太阴&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;右弼&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;天机&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">  }, </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">hourly</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">heavenlyStem</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;壬&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">earthlyBranch</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;子&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">palaceNames</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;子女&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;夫妻&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;兄弟&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;命宫&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;父母&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;福德&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;田宅&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;官禄&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;仆役&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;迁移&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;疾厄&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;财帛&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">mutagen</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;天梁&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;紫微&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;左辅&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;武曲&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></details><blockquote><p>Tips: 只有 <code>大限</code> 和 <code>流年</code> 有流耀。上面的运限数据和你调用的会因为传入的时间参数不同而不同，但是结构上是一致的。</p></blockquote><h5 id="方法定义-1" tabindex="-1">方法定义 <a class="header-anchor" href="#方法定义-1" aria-label="Permalink to &quot;方法定义&quot;">​</a></h5><ul><li><p>获取当前星盘的运限信息</p><p><code>astrolabe</code>.<code>horoscope(date, timeIndex)</code></p><ul><li><p>参数</p><table><thead><tr><th>参数</th><th>类型</th><th>是否必填</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>date</td><td><code>string</code> | <code>Date</code></td><td><code>false</code></td><td><code>new Date()</code></td><td>阳历日期字符串或日期对象，若时间字符串或日期对象中包含了小时的信息，<code>timeIndex</code>可以省略</td></tr><tr><td>timeIndex</td><td><code>number</code></td><td><code>false</code></td><td><code>0</code></td><td>时辰序号，若不传该参数则会尝试从<code>date</code>里获取小时信息转化为时辰序号</td></tr></tbody></table></li><li><p>返回值</p><p><a href="./type-definition.html#horoscope"><code>Horoscope</code></a></p></li></ul></li></ul><h2 id="获取流耀" tabindex="-1">获取流耀 <a class="header-anchor" href="#获取流耀" aria-label="Permalink to &quot;获取流耀&quot;">​</a></h2><p>上面的<code>horoscope()</code>方法内已经包含了<code>大限</code>和<code>流年</code>的流耀，所以一般情况下无需在单独调用获取流耀的方法，但也有例外的情况需要自行获取流耀，那就需要调用下列方法自行获取。</p>`,
    7,
  ),
  f = s(
    'div',
    { class: 'language-ts vp-adaptive-theme' },
    [
      s('button', { title: 'Copy Code', class: 'copy' }),
      s('span', { class: 'lang' }, 'ts'),
      s('pre', { class: 'shiki github-dark vp-code-dark' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F97583' } }, 'import'),
            s('span', { style: { color: '#E1E4E8' } }, ' { star } '),
            s('span', { style: { color: '#F97583' } }, 'from'),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#9ECBFF' } }, "'iztro'"),
            s('span', { style: { color: '#E1E4E8' } }, ';'),
          ]),
          n(`
`),
          s('span', { class: 'line' }),
          n(`
`),
          s('span', { class: 'line' }, [s('span', { style: { color: '#6A737D' } }, '// 通过天干地支获取流耀')]),
          n(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F97583' } }, 'const'),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#79B8FF' } }, 'horoscopeStars'),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#F97583' } }, '='),
            s('span', { style: { color: '#E1E4E8' } }, ' star.'),
            s('span', { style: { color: '#B392F0' } }, 'getHoroscopeStar'),
            s('span', { style: { color: '#E1E4E8' } }, '('),
            s('span', { style: { color: '#9ECBFF' } }, "'庚'"),
            s('span', { style: { color: '#E1E4E8' } }, ', '),
            s('span', { style: { color: '#9ECBFF' } }, "'辰'"),
            s('span', { style: { color: '#E1E4E8' } }, ', '),
            s('span', { style: { color: '#9ECBFF' } }, "'decadal'"),
            s('span', { style: { color: '#E1E4E8' } }, ');'),
          ]),
        ]),
      ]),
      s('pre', { class: 'shiki github-light vp-code-light' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#D73A49' } }, 'import'),
            s('span', { style: { color: '#24292E' } }, ' { star } '),
            s('span', { style: { color: '#D73A49' } }, 'from'),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#032F62' } }, "'iztro'"),
            s('span', { style: { color: '#24292E' } }, ';'),
          ]),
          n(`
`),
          s('span', { class: 'line' }),
          n(`
`),
          s('span', { class: 'line' }, [s('span', { style: { color: '#6A737D' } }, '// 通过天干地支获取流耀')]),
          n(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#D73A49' } }, 'const'),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#005CC5' } }, 'horoscopeStars'),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#D73A49' } }, '='),
            s('span', { style: { color: '#24292E' } }, ' star.'),
            s('span', { style: { color: '#6F42C1' } }, 'getHoroscopeStar'),
            s('span', { style: { color: '#24292E' } }, '('),
            s('span', { style: { color: '#032F62' } }, "'庚'"),
            s('span', { style: { color: '#24292E' } }, ', '),
            s('span', { style: { color: '#032F62' } }, "'辰'"),
            s('span', { style: { color: '#24292E' } }, ', '),
            s('span', { style: { color: '#032F62' } }, "'decadal'"),
            s('span', { style: { color: '#24292E' } }, ');'),
          ]),
        ]),
      ]),
    ],
    -1,
  ),
  D = s(
    'div',
    { class: 'language-js vp-adaptive-theme' },
    [
      s('button', { title: 'Copy Code', class: 'copy' }),
      s('span', { class: 'lang' }, 'js'),
      s('pre', { class: 'shiki github-dark vp-code-dark' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F97583' } }, 'var'),
            s('span', { style: { color: '#E1E4E8' } }, ' { star } '),
            s('span', { style: { color: '#F97583' } }, '='),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#B392F0' } }, 'require'),
            s('span', { style: { color: '#E1E4E8' } }, '('),
            s('span', { style: { color: '#9ECBFF' } }, "'iztro'"),
            s('span', { style: { color: '#E1E4E8' } }, ');'),
          ]),
          n(`
`),
          s('span', { class: 'line' }),
          n(`
`),
          s('span', { class: 'line' }, [s('span', { style: { color: '#6A737D' } }, '// 通过天干地支获取流耀')]),
          n(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#F97583' } }, 'var'),
            s('span', { style: { color: '#E1E4E8' } }, ' horoscopeStars '),
            s('span', { style: { color: '#F97583' } }, '='),
            s('span', { style: { color: '#E1E4E8' } }, ' star.'),
            s('span', { style: { color: '#B392F0' } }, 'getHoroscopeStar'),
            s('span', { style: { color: '#E1E4E8' } }, '('),
            s('span', { style: { color: '#9ECBFF' } }, "'庚'"),
            s('span', { style: { color: '#E1E4E8' } }, ', '),
            s('span', { style: { color: '#9ECBFF' } }, "'辰'"),
            s('span', { style: { color: '#E1E4E8' } }, ', '),
            s('span', { style: { color: '#9ECBFF' } }, "'decadal'"),
            s('span', { style: { color: '#E1E4E8' } }, ');'),
          ]),
        ]),
      ]),
      s('pre', { class: 'shiki github-light vp-code-light' }, [
        s('code', null, [
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#D73A49' } }, 'var'),
            s('span', { style: { color: '#24292E' } }, ' { star } '),
            s('span', { style: { color: '#D73A49' } }, '='),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#6F42C1' } }, 'require'),
            s('span', { style: { color: '#24292E' } }, '('),
            s('span', { style: { color: '#032F62' } }, "'iztro'"),
            s('span', { style: { color: '#24292E' } }, ');'),
          ]),
          n(`
`),
          s('span', { class: 'line' }),
          n(`
`),
          s('span', { class: 'line' }, [s('span', { style: { color: '#6A737D' } }, '// 通过天干地支获取流耀')]),
          n(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#D73A49' } }, 'var'),
            s('span', { style: { color: '#24292E' } }, ' horoscopeStars '),
            s('span', { style: { color: '#D73A49' } }, '='),
            s('span', { style: { color: '#24292E' } }, ' star.'),
            s('span', { style: { color: '#6F42C1' } }, 'getHoroscopeStar'),
            s('span', { style: { color: '#24292E' } }, '('),
            s('span', { style: { color: '#032F62' } }, "'庚'"),
            s('span', { style: { color: '#24292E' } }, ', '),
            s('span', { style: { color: '#032F62' } }, "'辰'"),
            s('span', { style: { color: '#24292E' } }, ', '),
            s('span', { style: { color: '#032F62' } }, "'decadal'"),
            s('span', { style: { color: '#24292E' } }, ');'),
          ]),
        ]),
      ]),
    ],
    -1,
  ),
  _ = o(
    `<p>调用<code>star</code>.<code>getHoroscopeStar()</code>方法以后你会获得如下数据</p><details class="custom-block"><summary><code>getHoroscopeStar()</code> 方法返回数据</summary><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span></span>
<span class="line"><span style="color:#E1E4E8;">  [{ name: </span><span style="color:#9ECBFF;">&#39;运马&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;tianma&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;decadal&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [{ name: </span><span style="color:#9ECBFF;">&#39;运曲&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;soft&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;decadal&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [{ name: </span><span style="color:#9ECBFF;">&#39;运喜&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;flower&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;decadal&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span></span>
<span class="line"><span style="color:#E1E4E8;">    { name: </span><span style="color:#9ECBFF;">&#39;运钺&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;soft&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;decadal&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { name: </span><span style="color:#9ECBFF;">&#39;运陀&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;tough&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;decadal&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [{ name: </span><span style="color:#9ECBFF;">&#39;运禄&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;lucun&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;decadal&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [{ name: </span><span style="color:#9ECBFF;">&#39;运羊&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;tough&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;decadal&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span></span>
<span class="line"><span style="color:#E1E4E8;">    { name: </span><span style="color:#9ECBFF;">&#39;运昌&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;soft&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;decadal&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { name: </span><span style="color:#9ECBFF;">&#39;运鸾&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;flower&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;decadal&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [{ name: </span><span style="color:#9ECBFF;">&#39;运魁&#39;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&#39;soft&#39;</span><span style="color:#E1E4E8;">, scope: </span><span style="color:#9ECBFF;">&#39;decadal&#39;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span></span>
<span class="line"><span style="color:#24292E;">  [{ name: </span><span style="color:#032F62;">&#39;运马&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;tianma&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;decadal&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">  [{ name: </span><span style="color:#032F62;">&#39;运曲&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;soft&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;decadal&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">  [],</span></span>
<span class="line"><span style="color:#24292E;">  [{ name: </span><span style="color:#032F62;">&#39;运喜&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;flower&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;decadal&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">  [],</span></span>
<span class="line"><span style="color:#24292E;">  [</span></span>
<span class="line"><span style="color:#24292E;">    { name: </span><span style="color:#032F62;">&#39;运钺&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;soft&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;decadal&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    { name: </span><span style="color:#032F62;">&#39;运陀&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;tough&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;decadal&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  [{ name: </span><span style="color:#032F62;">&#39;运禄&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;lucun&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;decadal&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">  [{ name: </span><span style="color:#032F62;">&#39;运羊&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;tough&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;decadal&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">  [],</span></span>
<span class="line"><span style="color:#24292E;">  [</span></span>
<span class="line"><span style="color:#24292E;">    { name: </span><span style="color:#032F62;">&#39;运昌&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;soft&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;decadal&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    { name: </span><span style="color:#032F62;">&#39;运鸾&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;flower&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;decadal&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  [],</span></span>
<span class="line"><span style="color:#24292E;">  [{ name: </span><span style="color:#032F62;">&#39;运魁&#39;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&#39;soft&#39;</span><span style="color:#24292E;">, scope: </span><span style="color:#032F62;">&#39;decadal&#39;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">];</span></span></code></pre></div></details><h5 id="方法定义-2" tabindex="-1">方法定义 <a class="header-anchor" href="#方法定义-2" aria-label="Permalink to &quot;方法定义&quot;">​</a></h5><ul><li><p>通过<code>天干</code>、<code>地支</code>获取流耀</p><p><code>star</code>.<code>getHoroscopeStar(heavenlyStem, earthlyBranch, scope)</code></p><ul><li><p>参数</p><table><thead><tr><th>参数</th><th>类型</th><th>是否必填</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>heavenlyStem</td><td><code>HeavenlyStemName</code></td><td><code>true</code></td><td>-</td><td>天干</td></tr><tr><td>earthlyBranch</td><td><code>EarthlyBranchName</code></td><td><code>true</code></td><td>-</td><td>地支</td></tr><tr><td>scope</td><td><code>&#39;decadal&#39;</code> | <code>&#39;yearly&#39;</code></td><td><code>true</code></td><td>-</td><td>限定是大限还是流年的流耀，其中大限流耀会在星耀前面加上<code>运</code>，流年流耀会在星耀前面加上<code>流</code>，<code>年解</code>比较特殊，只会出现在流年的流耀里</td></tr></tbody></table></li><li><p>返回值</p><p><a href="./type-definition.html#star"><code>Star[][]</code></a></p></li></ul></li></ul><h2 id="☕-总结" tabindex="-1">☕ 总结 <a class="header-anchor" href="#☕-总结" aria-label="Permalink to &quot;☕ 总结&quot;">​</a></h2><p>如果您觉得本程序对您有用的话，可以给我带杯咖啡吗？👍 <a href="https://PayPal.Me/sylarlong" target="_blank" rel="noreferrer">Paypal Me</a></p><p>以上数据可以生成如下星盘，其中<code>palaces</code>数据用于填充12宫，其他数据用于填充中宫。图片中流耀的显示和实际上有偏差，那是因为图片是古早以前的一个版本生成的，请以实际返回数据为准。</p><p><img src="https://github.com/SylarLong/iztro/assets/6510425/d2108ed7-6794-418a-b0e5-872c71ba6e1d" alt="demo"></p><h2 id="📜-版权" tabindex="-1">📜 版权 <a class="header-anchor" href="#📜-版权" aria-label="Permalink to &quot;📜 版权&quot;">​</a></h2><p>MIT License</p><p>Copyright © 2023 Sylar Long</p><p>请合理使用本开源代码，禁止用于非法目的。</p>`,
    12,
  );
function A(k, P, z, T, x, w) {
  const p = t('PluginTabsTab'),
    e = t('PluginTabs');
  return (
    E(),
    r('div', null, [
      i,
      a(e, null, {
        default: l(() => [
          a(p, { label: 'npm' }, { default: l(() => [F]), _: 1 }),
          a(p, { label: 'yarn' }, { default: l(() => [C]), _: 1 }),
          a(p, { label: 'pnpm' }, { default: l(() => [d]), _: 1 }),
        ]),
        _: 1,
      }),
      B,
      a(e, null, {
        default: l(() => [
          a(p, { label: 'ES6 Module' }, { default: l(() => [u]), _: 1 }),
          a(p, { label: 'CommonJS' }, { default: l(() => [h]), _: 1 }),
        ]),
        _: 1,
      }),
      g,
      a(e, null, {
        default: l(() => [
          a(p, { label: 'ES6 Module' }, { default: l(() => [m]), _: 1 }),
          a(p, { label: 'CommonJS' }, { default: l(() => [q]), _: 1 }),
        ]),
        _: 1,
      }),
      b,
      a(e, null, {
        default: l(() => [
          a(p, { label: 'ES6 Module' }, { default: l(() => [v]), _: 1 }),
          a(p, { label: 'CommonJS' }, { default: l(() => [S]), _: 1 }),
        ]),
        _: 1,
      }),
      j,
      a(e, null, {
        default: l(() => [
          a(p, { label: 'ES6 Module' }, { default: l(() => [f]), _: 1 }),
          a(p, { label: 'CommonJS' }, { default: l(() => [D]), _: 1 }),
        ]),
        _: 1,
      }),
      _,
    ])
  );
}
const N = c(y, [['render', A]]);
export { L as __pageData, N as default };
