(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(288)),i={title:"Version 2.4 release notes",author:"Lo\xefc Poullain",author_title:"Fullstack developper and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.4-release-notes.png",tags:["release"]},c={permalink:"/es/blog/2021/05/19/version-2.4-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-05-19-version-2.4-release-notes.md",source:"@site/blog/2021-05-19-version-2.4-release-notes.md",description:"Banner",date:"2021-05-19T00:00:00.000Z",tags:[{label:"release",permalink:"/es/blog/tags/release"}],title:"Version 2.4 release notes",readingTime:1.01,truncated:!0,nextItem:{title:"Version 2.3 release notes",permalink:"/es/blog/2021/04/22/version-2.3-release-notes"}},s=[{value:"<code>$data</code> references for validation",id:"data-references-for-validation",children:[]},{value:"Cache option for file downloading",id:"cache-option-for-file-downloading",children:[]},{value:"Bug fixes",id:"bug-fixes",children:[]},{value:"Contributors",id:"contributors",children:[]}],l={toc:s};function p(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{alt:"Banner",src:n(322).default})),Object(o.b)("p",null,"Version 2.4 of Foal has been released! Here are the improvements that it brings."),Object(o.b)("h2",{id:"data-references-for-validation"},Object(o.b)("inlineCode",{parentName:"h2"},"$data")," references for validation"),Object(o.b)("p",null,"Version 2.4 allows you to enable the AJV ",Object(o.b)("inlineCode",{parentName:"p"},"$data")," option so that you can use the verified data values as validators for other values."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"config/default.json")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "ajv": {\n      "$data": true\n    }\n  }\n}\n')),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Example of auth controller")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, Post, ValidateBody } from '@foal/core';\n\nexport class AuthController {\n  @Post('/signup')\n  @ValidateBody({\n    type: 'object',\n    properties: {\n      username: { type: 'string' },\n      password: { type: 'string' },\n      // \"password\" and \"confirmPassword\" should be identical.\n      confirmPassword: {\n        const: {\n          $data: '1/password',\n        },\n        type: 'string',\n      },\n    }\n    required: [ 'username', 'password', 'confirmPassword' ],\n    additionalProperties: false\n  })\n  signup(ctx: Context) {\n    // Do something.\n  }\n}\n\n")),Object(o.b)("h2",{id:"cache-option-for-file-downloading"},"Cache option for file downloading"),Object(o.b)("p",null,"Starting from version 2.4 the ",Object(o.b)("inlineCode",{parentName:"p"},"Disk.createHttpResponse")," method accepts an optional parameter to specify the value of the ",Object(o.b)("inlineCode",{parentName:"p"},"Cache-Control")," header."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Context, dependency, Get } from '@foal/core';\nimport { Disk } from '@foal/storage';\n\nimport { User } from '../entities';\n\nexport class ProfileController {\n  @dependency\n  disk: Disk;\n\n  @Get('/avatar')\n  async readProfileImage(ctx: Context<User>) {\n    return this.disk.createHttpResponse(ctx.user.avatar, {\n      cache: 'no-cache'\n    });\n  }\n")),Object(o.b)("h2",{id:"bug-fixes"},"Bug fixes"),Object(o.b)("p",null,"See issue ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/issues/930"}),"#930"),"."),Object(o.b)("h2",{id:"contributors"},"Contributors"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ZakRabe"}),"@ZakRabe")))}p.isMDXComponent=!0},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},322:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/banner-1a892e7cbebe358fc06789a6968738f1.png"}}]);