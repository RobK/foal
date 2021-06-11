(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(290)),c={title:"Application Creation"},i={unversionedId:"upgrade-to-v2/application-creation",id:"upgrade-to-v2/application-creation",isDocsHomePage:!1,title:"Application Creation",description:"Starting from version 2, the createApp function returns a promise. Open src/index.ts and update the code as follows:",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/upgrade-to-v2/application-creation.md",slug:"/upgrade-to-v2/application-creation",permalink:"/id/docs/upgrade-to-v2/application-creation",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/id/docusaurus-plugin-content-docs/current/upgrade-to-v2/application-creation.md",version:"current"},p=[],u={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Starting from version 2, the ",Object(o.b)("inlineCode",{parentName:"p"},"createApp")," function returns a promise. Open ",Object(o.b)("inlineCode",{parentName:"p"},"src/index.ts")," and update the code as follows:"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Version 1")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"async function main() {\n  // ...\n  const app = createApp(AppController);\n  // ...\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Version 2")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"async function main() {\n  // ...\n  const app = await createApp(AppController);\n  // ...\n}\n")))}l.isMDXComponent=!0},290:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),f=r,b=s["".concat(c,".").concat(f)]||s[f]||d[f]||o;return n?a.a.createElement(b,i(i({ref:t},u),{},{components:n})):a.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);