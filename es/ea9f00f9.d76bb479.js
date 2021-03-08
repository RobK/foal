(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{244:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(263)),s={title:"Introducci\xf3n"},i={unversionedId:"testing/introduction",id:"testing/introduction",isDocsHomePage:!1,title:"Introducci\xf3n",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/testing/introduction.md",slug:"/testing/introduction",permalink:"/es/docs/testing/introduction",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/es/docusaurus-plugin-content-docs/current/testing/introduction.md",version:"current",sidebar:"someSidebar",previous:{title:"Visual Studio Code",permalink:"/es/docs/development-environment/vscode"},next:{title:"Pruebas unitarias",permalink:"/es/docs/testing/unit-testing"}},c=[{value:"The Mocha Framework",id:"the-mocha-framework",children:[]},{value:"Asserting Libraries",id:"asserting-libraries",children:[]}],u={toc:c};function l(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/es/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://foalts.org/docs/1.x/"}),"here"),".")),Object(o.b)("p",null,"Every shipped app should come with a ",Object(o.b)("strong",{parentName:"p"},"minimum set of tests"),". Writing tests lets you find problems early, facilitate changes and document your code. FoalTS is designed to be easily testable and provides the tools you need to write tests right away."),Object(o.b)("h2",{id:"the-mocha-framework"},"The Mocha Framework"),Object(o.b)("p",null,"The testing ecosystem is based on the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://mochajs.org/"}),"Mocha")," framework. It provides functions to help you structuring your tests and also making assertions."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"describe")," function groups tests (or groups of tests) together."),Object(o.b)("li",{parentName:"ul"},"And the ",Object(o.b)("inlineCode",{parentName:"li"},"it")," function defines an individual test.")),Object(o.b)("p",null,"Using these two helpers lets you organize your tests in a readable way and print comprehensive reports."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"describe('The number 1', () => {\n\n  it('should be equal to 1.', () => {\n    if (1 !== 1) {\n      throw new Error();\n    }\n  })\n\n  it('should not be equal to 2.', () => {\n    if (1 === 2) {\n      throw new Error();\n    }\n  });\n\n})\n")),Object(o.b)("p",null,"Running this file with mocha gives you the below report:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Test report",src:r(400).default})),Object(o.b)("h2",{id:"asserting-libraries"},"Asserting Libraries"),Object(o.b)("p",null,"In addition to the Mocha framework, you can use the Node.js built-in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/api/assert.html"}),"assert")," module. It provides some useful functions such as ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/api/assert.html#assert_assert_ok_value_message"}),"ok"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/api/assert.html#assert_assert_strictequal_actual_expected_message"}),"strictEqual")," or ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/api/assert.html#assert_assert_deepstrictequal_actual_expected_message"}),"deepStrictEqual")," to make your tests more readable and concise. You can also use third party libraries such as ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/chai"}),"chai")," or ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/expect"}),"expect"),"."),Object(o.b)("p",null,"The previous code can be refactored as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { strictEqual } from 'assert';\n\ndescribe('The number 1', () => {\n\n  it('should be equal to 1.', () => {\n    strictEqual(1, 1);\n  })\n\n  it('should not be equal to 2.', () => {\n    strictEqual(1, 2);\n  });\n\n})\n")))}l.isMDXComponent=!0},263:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(m,i(i({ref:t},u),{},{components:r})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},400:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/introduction-report-ec779378236fb937b330af576a59e2ca.png"}}]);