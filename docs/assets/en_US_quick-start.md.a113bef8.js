import { _ as c, C as t, o as r, c as E, H as n, w as l, Q as p, k as s, a } from './chunks/framework.b3c573de.js';
const O = JSON.parse(
    '{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"en_US/quick-start.md","filePath":"en_US/quick-start.md"}',
  ),
  y = { name: 'en_US/quick-start.md' },
  i = p(
    '<div align="center"><h1 class="brand-name text-clip">IZTRO</h1><p>A lightweight Open-Source Javascript library of getting The Purple Star Astrology(Zi Wei Dou Shu) astrolabe information.</p></div><div align="center" class="badges"><p><a href="https://github.com/SylarLong/iztro/actions" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/actions/workflow/status/SylarLong/iztro/Codecov.yaml" alt="GitHub Workflow Status (with event)"></a> <a href="https://www.npmjs.com/package/iztro" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/v/%40sylarlong%2Fastro" alt="npm"></a> <a href="https://github.com/search?q=repo%3ASylarLong%2Fastro++language%3ATypeScript&amp;type=code" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/languages/top/SylarLong/iztro" alt="GitHub top language"></a> <a href="https://app.codecov.io/gh/SylarLong/iztro/tree/main/src%2Fstar" target="_blank" rel="noreferrer"><img src="https://img.shields.io/codecov/c/github/sylarlong/iztro" alt="Codecov"></a> <a href="https://www.npmjs.com/package/iztro" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/dw/%40sylarlong/iztro" alt="npm"></a> <a href="https://github.com/SylarLong/iztro" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maintenance/yes/2023" alt="Maintenance"></a> <a href="https://www.npmjs.com/package/iztro" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/license/sylarlong/iztro" alt="GitHub"></a> <a href="https://www.npmjs.com/package/iztro" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/languages/code-size/SylarLong/iztro" alt="GitHub code size in bytes"></a> <a href="https://www.npmjs.com/package/iztro" target="_blank" rel="noreferrer"><img src="https://img.shields.io/bundlephobia/min/%40sylarlong%2Fastro" alt="npm bundle size"></a> <a href="https://github.com/SylarLong/iztro/issues" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/issues/SylarLong/iztro" alt="GitHub issues"></a> <a href="https://github.com/SylarLong" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/package-json/author/sylarlong/iztro" alt="GitHub package.json dynamic"></a></p></div><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>Welcome to the <code>iztro</code> development documentation! This page will introduce you to how to integrate, how to retrieve data, and how to quickly obtain all the data on a natal chart in Zi Wei Dou Shu. If you are just a basic user, reading this document will be enough for your daily use. If you have mastered the content on this page, you can explore further on other pages.</p><div class="custom-block"><p>You will obtain the following information:</p><ul><li>How to install and integrate iztro into your code</li><li>How to retrieve a natal chart information</li><li>How to analyze palace positions based on the natal chart information</li><li>How to analyze star brilliance based on palace positions</li></ul></div><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><p>You can install <code>iztro</code> using any package management tool you are familiar with.</p>',
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
  d = s(
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
  C = s(
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
            s('span', { style: { color: '#79B8FF' } }, '-S'),
            s('span', { style: { color: '#E1E4E8' } }, ' '),
            s('span', { style: { color: '#9ECBFF' } }, 'iztro'),
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
            s('span', { style: { color: '#005CC5' } }, '-S'),
            s('span', { style: { color: '#24292E' } }, ' '),
            s('span', { style: { color: '#032F62' } }, 'iztro'),
          ]),
        ]),
      ]),
    ],
    -1,
  ),
  u = p(
    `<p>If the installation is successful, you will find <code>iztro</code> in the dependencies list of your <code>package.json</code>.</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&quot;dependencies&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;iztro&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;^1.0.0&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&quot;dependencies&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;iztro&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;^1.0.0&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>The version might be different.</p></blockquote><h2 id="quick-start" tabindex="-1">Quick start <a class="header-anchor" href="#quick-start" aria-label="Permalink to &quot;Quick start&quot;">​</a></h2><h4 id="import-code" tabindex="-1">Import code <a class="header-anchor" href="#import-code" aria-label="Permalink to &quot;Import code&quot;">​</a></h4><p>You can import <code>iztro</code> into your code using the following methods.</p>`,
    6,
  ),
  h = s(
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
  B = s(
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
  g = p(
    '<h4 id="get-astrolabe-data" tabindex="-1">Get astrolabe data <a class="header-anchor" href="#get-astrolabe-data" aria-label="Permalink to &quot;Get astrolabe data&quot;">​</a></h4><p>When retrieving a natal chart in Zi Wei Dou Shu, you can obtain it based on either the <code>lunar calendar</code> or the <code>solar calendar</code>. <code>iztro</code> provides both options, and you can choose according to your needs. However, we recommend using the <code>solar calendar</code> method. Rest assured, the data obtained internally by the program is consistent for both the <code>lunar</code> and <code>solar</code> calendars.</p><div class="custom-block"><p>Using the <code>solar calendar</code> has the following advantages:</p><ul><li>It can be easily found on a birth certificate.</li><li>You can use a calendar component for date selection.</li><li>Many people nowadays cannot remember lunar calendar dates.</li><li>It can avoid a series of issues caused by overlooking leap months.</li></ul></div>',
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
          a(`
`),
          s('span', { class: 'line' }),
          a(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#6A737D' } }, '// Get astrolabe by solar calendar.'),
          ]),
          a(`
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
          a(`
`),
          s('span', { class: 'line' }),
          a(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#6A737D' } }, '// Get astrolabe by lunar calendar.'),
          ]),
          a(`
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
          a(`
`),
          s('span', { class: 'line' }),
          a(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#6A737D' } }, '// Get astrolabe by solar calendar.'),
          ]),
          a(`
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
          a(`
`),
          s('span', { class: 'line' }),
          a(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#6A737D' } }, '// Get astrolabe by lunar calendar.'),
          ]),
          a(`
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
          a(`
`),
          s('span', { class: 'line' }),
          a(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#6A737D' } }, '// Get astrolabe by solar calendar.'),
          ]),
          a(`
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
          a(`
`),
          s('span', { class: 'line' }),
          a(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#6A737D' } }, '// Get astrolabe by lunar calendar.'),
          ]),
          a(`
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
          a(`
`),
          s('span', { class: 'line' }),
          a(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#6A737D' } }, '// Get astrolabe by solar calendar.'),
          ]),
          a(`
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
          a(`
`),
          s('span', { class: 'line' }),
          a(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#6A737D' } }, '// Get astrolabe by lunar calendar.'),
          ]),
          a(`
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
  b = p(
    `<p>You will find that the return values of <code>astrolabeBySolarDate</code> and <code>astrolabeByLunarDate</code> above are the same. This is because the <code>astrolabeByLunarDate</code> method internally converts the date to the <code>solar calendar</code> and then calls the <code>astrolabeBySolarDate</code> method. Here is the execution result. Since the result is quite long, it is folded. If you want to check if your call result is the same as this, you can expand to view it.</p><details class="custom-block"><summary>Result of <code>astro.astrolabeBySolarDate</code> and <code>astro.astrolabeByLunarDate</code></summary><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
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
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></details><h5 id="function-definition" tabindex="-1">function definition <a class="header-anchor" href="#function-definition" aria-label="Permalink to &quot;function definition&quot;">​</a></h5><ul><li><p>Get astrolabe by solar calendar.</p><p><code>astro</code>.<code>astrolabeBySolarDate(solarDateStr, timeIndex, gender, fixLeap, language)</code></p><ul><li><p>Parameters</p><table><thead><tr><th>Name</th><th>Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>solarDateStr</td><td><code>string</code></td><td><code>true</code></td><td>-</td><td>solar date string【YYYY-M-D】</td></tr><tr><td>timeIndex</td><td><code>number</code></td><td><code>true</code></td><td>-</td><td>chinse hour index【0~12】. from <code>early Rat hour</code>（0）to <code>late Rat hour</code>（12）</td></tr><tr><td>gender</td><td><code>string</code></td><td><code>true</code></td><td>-</td><td>gender【男/女】</td></tr><tr><td>fixLeap</td><td><code>boolean</code></td><td><code>false</code></td><td><code>true</code></td><td>whether to fix the leap month. if <code>true</code>, the first half of the leap month is counted as the previous month, and the second half is counted as the next month</td></tr><tr><td>language</td><td><code>Language</code></td><td><code>false</code></td><td><code>zh-CN</code></td><td>the returns will be localized to the specific language. we support <code>zh-CN</code>,<code>zh-TW</code>,<code>en-US</code>,<code>ko-KR</code> and <code>ja-JP</code> for now</td></tr></tbody></table></li><li><p>Returns:</p><p><code>FunctionalAstrolabe</code></p></li></ul></li><li><p>Get astrolabe by lunar calendar.</p><p><code>astro</code>.<code>astrolabeByLunarDate(lunarDateStr, timeIndex, gender, isLeapMonth, fixLeap, language)</code></p><ul><li><p>Parameters</p><table><thead><tr><th>Name</th><th>Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>lunarDateStr</td><td><code>string</code></td><td><code>true</code></td><td>-</td><td>lunar date【YYYY-M-D】. e.g. pass <code>2000-7-17</code> if it&#39;s <code>2000年七月十七</code></td></tr><tr><td>timeIndex</td><td><code>number</code></td><td><code>true</code></td><td>-</td><td>chinse hour index【0~12】. from <code>early Rat hour</code>（0）to <code>late Rat hour</code>（12）</td></tr><tr><td>gender</td><td><code>string</code></td><td><code>true</code></td><td>-</td><td>gender【男/女】</td></tr><tr><td>isLeapMonth</td><td><code>boolean</code></td><td><code>false</code></td><td><code>false</code></td><td>whether the date is a leap month. This parameter does not take effect when there is no leap month in the actual month</td></tr><tr><td>fixLeap</td><td><code>boolean</code></td><td><code>false</code></td><td><code>true</code></td><td>whether to fix the leap month. if <code>true</code>, the first half of the leap month is counted as the previous month, and the second half is counted as the next month</td></tr><tr><td>language</td><td><code>Language</code></td><td><code>false</code></td><td><code>zh-CN</code></td><td>the returns will be localized to the specific language. we support <code>zh-CN</code>,<code>zh-TW</code>,<code>en-US</code>,<code>ko-KR</code> and <code>ja-JP</code> for now</td></tr></tbody></table></li><li><p>Returns:</p><p><code>FunctionalAstrolabe</code></p></li></ul></li></ul><h2 id="get-horoscope-data" tabindex="-1">Get horoscope data <a class="header-anchor" href="#get-horoscope-data" aria-label="Permalink to &quot;Get horoscope data&quot;">​</a></h2><p>The <code>horoscope</code> in Zi Wei Dou Shu is divided into &quot;大限&quot; (<code>Decadal horoscope</code>), &quot;流年&quot; (<code>Yearly horoscope</code>), &quot;流月&quot; (<code>Monthly horoscope</code>), &quot;流日&quot; (<code>Daily horoscope</code>), &quot;流时&quot; (<code>Hourly horoscope</code>), &quot;流分&quot; (<code>Minute horoscope</code>), and &quot;流秒&quot; (<code>Second horoscope</code>). However, since <code>Minute horoscope</code> and <code>Second horoscope</code> are not commonly used, we do not currently provide them. &quot;大限&quot; (<code>Decadal horoscope</code>), &quot;流年&quot; (<code>Yearly horoscope</code>), &quot;流月&quot; (<code>Monthly horoscope</code>), &quot;流日&quot; (<code>Daily horoscope</code>) are already sufficient to meet the majority of needs and scenarios. By using <code>iztro</code> you can easily obtain this data.</p>`,
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
          a(`
`),
          s('span', { class: 'line' }),
          a(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#6A737D' } }, '// Get astrolabe by solar calendar.'),
          ]),
          a(`
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
          a(`
`),
          s('span', { class: 'line' }),
          a(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#6A737D' } }, '// Get horoscope data of the `astrolabe` instance'),
          ]),
          a(`
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
          a(`
`),
          s('span', { class: 'line' }),
          a(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#6A737D' } }, '// Get astrolabe by solar calendar.'),
          ]),
          a(`
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
          a(`
`),
          s('span', { class: 'line' }),
          a(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#6A737D' } }, '// Get horoscope data of the `astrolabe` instance'),
          ]),
          a(`
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
  f = s(
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
          a(`
`),
          s('span', { class: 'line' }),
          a(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#6A737D' } }, '// Get astrolabe by solar calendar.'),
          ]),
          a(`
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
          a(`
`),
          s('span', { class: 'line' }),
          a(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#6A737D' } }, '// Get horoscope data of the `astrolabe` instance'),
          ]),
          a(`
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
          a(`
`),
          s('span', { class: 'line' }),
          a(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#6A737D' } }, '// Get astrolabe by solar calendar.'),
          ]),
          a(`
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
          a(`
`),
          s('span', { class: 'line' }),
          a(`
`),
          s('span', { class: 'line' }, [
            s('span', { style: { color: '#6A737D' } }, '// Get horoscope data of the `astrolabe` instance'),
          ]),
          a(`
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
  S = p(
    `<p>You&#39;ll get the result below by invoking <code>astrolabe</code>.<code>horoscope()</code></p><details class="custom-block"><summary>Result of <code>horoscope()</code></summary><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
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
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></details><blockquote><p>Tips: Only <code>Decadal horoscope</code> and <code>Yearly horoscope</code> include horosope stars. The values of the result above will be different by different parameters. But the data structure is fixed.</p></blockquote><h5 id="function-definition-1" tabindex="-1">function definition <a class="header-anchor" href="#function-definition-1" aria-label="Permalink to &quot;function definition&quot;">​</a></h5><ul><li><p>Get horoscope data of the <code>astrolabe</code> instance</p><p><code>astrolabe</code>.<code>horoscope(date, timeIndex)</code></p><ul><li><p>Parameters</p><table><thead><tr><th>Name</th><th>Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>date</td><td><code>string</code> | <code>Date</code></td><td><code>false</code></td><td><code>new Date()</code></td><td>solar calendar string or a <code>Date</code> instance. <code>timeIndex</code> can be omit if the <code>hour</code> data is included in <code>date</code></td></tr><tr><td>timeIndex</td><td><code>number</code></td><td><code>false</code></td><td><code>0</code></td><td>chinese hour index【0～12】</td></tr></tbody></table></li><li><p>Returns</p><p><code>Horoscope</code></p></li></ul></li></ul><h2 id="get-horoscope-star" tabindex="-1">Get horoscope star <a class="header-anchor" href="#get-horoscope-star" aria-label="Permalink to &quot;Get horoscope star&quot;">​</a></h2><p>The <code>horoscope()</code> method above already includes the <code>horoscope star</code> of the <code>Decadal horoscope</code> and <code>Yearly horoscope</code>. So in general, there is no need to separately call a method to obtain the <code>horoscope star</code>. However, there are exceptional cases where you need to obtain the flow on your own, in which case you need to call the following methods to obtain it.</p>`,
    7,
  ),
  j = s(
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
          a(`
`),
          s('span', { class: 'line' }),
          a(`
`),
          s('span', { class: 'line' }, [
            s(
              'span',
              { style: { color: '#6A737D' } },
              '// Get `Horoscope star` by `Heavenly Stem` and `Earthly Branch`',
            ),
          ]),
          a(`
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
          a(`
`),
          s('span', { class: 'line' }),
          a(`
`),
          s('span', { class: 'line' }, [
            s(
              'span',
              { style: { color: '#6A737D' } },
              '// Get `Horoscope star` by `Heavenly Stem` and `Earthly Branch`',
            ),
          ]),
          a(`
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
          a(`
`),
          s('span', { class: 'line' }),
          a(`
`),
          s('span', { class: 'line' }, [
            s(
              'span',
              { style: { color: '#6A737D' } },
              '// Get `Horoscope star` by `Heavenly Stem` and `Earthly Branch`',
            ),
          ]),
          a(`
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
          a(`
`),
          s('span', { class: 'line' }),
          a(`
`),
          s('span', { class: 'line' }, [
            s(
              'span',
              { style: { color: '#6A737D' } },
              '// Get `Horoscope star` by `Heavenly Stem` and `Earthly Branch`',
            ),
          ]),
          a(`
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
  _ = p(
    `<p>You&#39;ll get the result below by invoking <code>star</code>.<code>getHoroscopeStar()</code></p><details class="custom-block"><summary>Result of <code>getHoroscopeStar()</code></summary><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span></span>
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
<span class="line"><span style="color:#24292E;">];</span></span></code></pre></div></details><h5 id="function-definition-2" tabindex="-1">function definition <a class="header-anchor" href="#function-definition-2" aria-label="Permalink to &quot;function definition&quot;">​</a></h5><ul><li><p>Get <code>Horoscope star</code> by <code>Heavenly Stem</code> and <code>Earthly Branch</code></p><p><code>star</code>.<code>getHoroscopeStar(heavenlyStem, earthlyBranch, scope)</code></p><ul><li>Parameters</li></ul><table><thead><tr><th>Name</th><th>Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>heavenlyStem</td><td><code>HeavenlyStemName</code></td><td><code>true</code></td><td>-</td><td>heavenly stem name</td></tr><tr><td>earthlyBranch</td><td><code>EarthlyBranchName</code></td><td><code>true</code></td><td>-</td><td>earthly branch name</td></tr><tr><td>scope</td><td><code>&#39;decadal&#39;</code> | <code>&#39;yearly&#39;</code></td><td><code>true</code></td><td>-</td><td>to specific the scope of the horo</td></tr></tbody></table><ul><li><p>Returns</p><p><code>Star[][]</code></p></li></ul></li></ul><h2 id="☕-summary" tabindex="-1">☕ Summary <a class="header-anchor" href="#☕-summary" aria-label="Permalink to &quot;☕ Summary&quot;">​</a></h2><p>Buy me a coffee if it&#39;s useful for you. 👍 <a href="https://PayPal.Me/sylarlong" target="_blank" rel="noreferrer">Paypal Me</a></p><p>The above data can generate the following natal chart. The <code>palaces</code> data is used to fill the 12 palaces, while the other data is used to fill the central palace. Please keep in mind that the display of the flowing <code>Star names</code> in the image may differ from the actual returned data. This is because the image was generated from an earlier version. Please refer to the actual returned data for accuracy.</p><p><img src="https://github.com/SylarLong/iztro/assets/6510425/d2108ed7-6794-418a-b0e5-872c71ba6e1d" alt="demo"></p><h2 id="📜-license" tabindex="-1">📜 License <a class="header-anchor" href="#📜-license" aria-label="Permalink to &quot;📜 License&quot;">​</a></h2><p>MIT License</p><p>Copyright © 2023 Sylar Long</p><p>Please use this open-source code responsibly and refrain from using it for illegal purposes.</p>`,
    12,
  );
function A(k, P, w, z, T, x) {
  const o = t('PluginTabsTab'),
    e = t('PluginTabs');
  return (
    r(),
    E('div', null, [
      i,
      n(e, null, {
        default: l(() => [
          n(o, { label: 'npm' }, { default: l(() => [F]), _: 1 }),
          n(o, { label: 'yarn' }, { default: l(() => [d]), _: 1 }),
          n(o, { label: 'pnpm' }, { default: l(() => [C]), _: 1 }),
        ]),
        _: 1,
      }),
      u,
      n(e, null, {
        default: l(() => [
          n(o, { label: 'ES6 Module' }, { default: l(() => [h]), _: 1 }),
          n(o, { label: 'CommonJS' }, { default: l(() => [B]), _: 1 }),
        ]),
        _: 1,
      }),
      g,
      n(e, null, {
        default: l(() => [
          n(o, { label: 'ES6 Module' }, { default: l(() => [m]), _: 1 }),
          n(o, { label: 'CommonJS' }, { default: l(() => [q]), _: 1 }),
        ]),
        _: 1,
      }),
      b,
      n(e, null, {
        default: l(() => [
          n(o, { label: 'ES6 Module' }, { default: l(() => [v]), _: 1 }),
          n(o, { label: 'CommonJS' }, { default: l(() => [f]), _: 1 }),
        ]),
        _: 1,
      }),
      S,
      n(e, null, {
        default: l(() => [
          n(o, { label: 'ES6 Module' }, { default: l(() => [j]), _: 1 }),
          n(o, { label: 'CommonJS' }, { default: l(() => [D]), _: 1 }),
        ]),
        _: 1,
      }),
      _,
    ])
  );
}
const H = c(y, [['render', A]]);
export { O as __pageData, H as default };
