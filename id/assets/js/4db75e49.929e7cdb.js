"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7638],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=o.createContext({}),p=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(f,a(a({ref:t},s),{},{components:n})):o.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4123:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=["components"],l={title:"Visual Studio Code",sidebar_label:"VSCode"},d=void 0,p={unversionedId:"development-environment/vscode",id:"version-1.x/development-environment/vscode",title:"Visual Studio Code",description:"Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js.",source:"@site/versioned_docs/version-1.x/development-environment/vscode.md",sourceDirName:"development-environment",slug:"/development-environment/vscode",permalink:"/id/docs/1.x/development-environment/vscode",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/development-environment/vscode.md",tags:[],version:"1.x",frontMatter:{title:"Visual Studio Code",sidebar_label:"VSCode"},sidebar:"someSidebar",previous:{title:"Linting & Code Style",permalink:"/id/docs/1.x/development-environment/linting-and-code-style"},next:{title:"Introduction",permalink:"/id/docs/1.x/testing/introduction"}},s=[{value:"Configuring the linting",id:"configuring-the-linting",children:[],level:2},{value:"Debugging with VS Code",id:"debugging-with-vs-code",children:[],level:2}],c={toc:s};function u(e){var t=e.components,l=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js.")),(0,r.kt)("p",{parentName:"blockquote"},"Source:  ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs"},"https://code.visualstudio.com/docs"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VS Code")," has become ",(0,r.kt)("strong",{parentName:"p"},"one of the most popular code editors in the JavaScript ecosystem"),". It offers useful features (auto-completion, debugging tools, etc.) that work very well with TypeScript and Node.js. That's why it has a dedicated page in the documentation."),(0,r.kt)("p",null,"But using VS Code is not mandatory to develop a FoalTS app. So feel free to use another code editor if you prefer."),(0,r.kt)("h2",{id:"configuring-the-linting"},"Configuring the linting"),(0,r.kt)("p",null,"In order to directly print the ESLint errors in VS Code and auto-fix the problems on save you need to install the ",(0,r.kt)("inlineCode",{parentName:"p"},"ESLint")," extension."),(0,r.kt)("p",null,"It can be installed by launching ",(0,r.kt)("em",{parentName:"p"},"VS Code Quick Open")," (",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl"),"+",(0,r.kt)("inlineCode",{parentName:"p"},"P")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Cmd"),"+",(0,r.kt)("inlineCode",{parentName:"p"},"P"),"), pasting the following command, and pressing enter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ext install dbaeumer.vscode-eslint\n")),(0,r.kt)("p",null,"Then, you will need to configure it for TypeScript and make it fix the errors on save (when it is possible)."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("em",{parentName:"p"},"Command Palette")," (",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl"),"+",(0,r.kt)("inlineCode",{parentName:"p"},"Shift"),"+",(0,r.kt)("inlineCode",{parentName:"p"},"P")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Cmd"),"+",(0,r.kt)("inlineCode",{parentName:"p"},"Shift"),"+",(0,r.kt)("inlineCode",{parentName:"p"},"P"),") and type ",(0,r.kt)("inlineCode",{parentName:"p"},"Open Settings (JSON)"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Open VSCode Settings",src:n(6469).Z,width:"2560",height:"1600"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then extend the settings to add the options below."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // ...\n  "eslint.validate": [\n      "typescript"\n  ],\n  "editor.codeActionsOnSave": {\n      "source.fixAll.eslint": true\n  }\n}\n')))),(0,r.kt)("h2",{id:"debugging-with-vs-code"},"Debugging with VS Code"),(0,r.kt)("p",null,"Run the following command to create the suitable debug config files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"foal generate vscode-config\n")),(0,r.kt)("p",null,"Now you can add a breakpoint in your code and start the app in debug mode."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Debugging demo",src:n(3870).Z,width:"800",height:"500"})),(0,r.kt)("p",null,"The generated files also include configurations to run your unit and end-to-end tests."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Debug configurations",src:n(3908).Z,width:"634",height:"214"})))}u.isMDXComponent=!0},3908:function(e,t,n){t.Z=n.p+"assets/images/debug-configurations-c5086b075b6c83ac55c88f5e8851cbfe.png"},3870:function(e,t,n){t.Z=n.p+"assets/images/debugger-68784711b19481be8e7423ebde8a9cee.gif"},6469:function(e,t,n){t.Z=n.p+"assets/images/open-vscode-settings-f52f059aa75d1a09e5f2f3a68577ef74.png"}}]);