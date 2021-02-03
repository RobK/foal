(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(256)),i={title:"Visual Studio Code",sidebar_label:"VSCode"},c={unversionedId:"development-environment/vscode",id:"development-environment/vscode",isDocsHomePage:!1,title:"Visual Studio Code",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/docs/development-environment/vscode.md",slug:"/development-environment/vscode",permalink:"/docs/development-environment/vscode",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/development-environment/vscode.md",version:"current",sidebar_label:"VSCode",sidebar:"someSidebar",previous:{title:"Linting and Code Style",permalink:"/docs/development-environment/linting-and-code-style"},next:{title:"Introduction",permalink:"/docs/testing/introduction"}},l=[{value:"Configuring the linting",id:"configuring-the-linting",children:[]},{value:"Debugging with VS Code",id:"debugging-with-vs-code",children:[]}],d={toc:l};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/tree/v1.x/docs"}),"here"),".")),Object(a.b)("p",null,"--"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},"Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js.")),Object(a.b)("p",{parentName:"blockquote"},"Source:  ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs"}),"https://code.visualstudio.com/docs"))),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://code.visualstudio.com/"}),"VS Code")," has become ",Object(a.b)("strong",{parentName:"p"},"one of the most popular code editors in the JavaScript ecosystem"),". It offers useful features (auto-completion, debugging tools, etc.) that work very well with TypeScript and Node.js. That's why it has a dedicated page in the documentation."),Object(a.b)("p",null,"But using VS Code is not mandatory to develop a FoalTS app. So feel free to use another code editor if you prefer."),Object(a.b)("h2",{id:"configuring-the-linting"},"Configuring the linting"),Object(a.b)("p",null,"In order to directly print the ESLint errors in VS Code and auto-fix the problems on save you need to install the ",Object(a.b)("inlineCode",{parentName:"p"},"ESLint")," extension."),Object(a.b)("p",null,"It can be installed by launching ",Object(a.b)("em",{parentName:"p"},"VS Code Quick Open")," (",Object(a.b)("inlineCode",{parentName:"p"},"Ctrl"),"+",Object(a.b)("inlineCode",{parentName:"p"},"P")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Cmd"),"+",Object(a.b)("inlineCode",{parentName:"p"},"P"),"), pasting the following command, and pressing enter:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"ext install dbaeumer.vscode-eslint\n")),Object(a.b)("p",null,"Then, you will need to configure it for TypeScript and make it fix the errors on save (when it is possible)."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Open the ",Object(a.b)("em",{parentName:"p"},"Command Palette")," (",Object(a.b)("inlineCode",{parentName:"p"},"Ctrl"),"+",Object(a.b)("inlineCode",{parentName:"p"},"Shift"),"+",Object(a.b)("inlineCode",{parentName:"p"},"P")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Cmd"),"+",Object(a.b)("inlineCode",{parentName:"p"},"Shift"),"+",Object(a.b)("inlineCode",{parentName:"p"},"P"),") and type ",Object(a.b)("inlineCode",{parentName:"p"},"Open Settings (JSON)"),"."),Object(a.b)("p",{parentName:"li"},Object(a.b)("img",{alt:"Open VSCode Settings",src:n(359).default}))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Then extend the settings to add the options below."),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  // ...\n  "eslint.validate": [\n      "typescript"\n  ],\n  "editor.codeActionsOnSave": {\n      "source.fixAll.eslint": true\n  }\n}\n')))),Object(a.b)("h2",{id:"debugging-with-vs-code"},"Debugging with VS Code"),Object(a.b)("p",null,"Run the following command to create the suitable debug config files."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"foal generate vscode-config\n")),Object(a.b)("p",null,"Now you can add a breakpoint in your code and start the app in debug mode."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Debugging demo",src:n(360).default})),Object(a.b)("p",null,"The generated files also include configurations to run your unit and end-to-end tests."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Debug configurations",src:n(361).default})))}p.isMDXComponent=!0},256:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=p(n),s=o,m=b["".concat(i,".").concat(s)]||b[s]||u[s]||a;return n?r.a.createElement(m,c(c({ref:t},d),{},{components:n})):r.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},359:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/open-vscode-settings-f52f059aa75d1a09e5f2f3a68577ef74.png"},360:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/debugger-68784711b19481be8e7423ebde8a9cee.gif"},361:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/debug-configurations-c5086b075b6c83ac55c88f5e8851cbfe.png"}}]);