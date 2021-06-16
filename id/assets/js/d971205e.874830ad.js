(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8935],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(f,s(s({ref:r},l),{},{components:t})):n.createElement(f,s({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1608:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),s=["components"],p={title:"ExpressJS"},i={unversionedId:"cookbook/expressjs",id:"cookbook/expressjs",isDocsHomePage:!1,title:"ExpressJS",description:"FoalTS applications are created with the createApp function in the src/index.ts file. This function takes the root controller class (known as AppController) as parameter.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/cookbook/expressjs.md",sourceDirName:"cookbook",slug:"/cookbook/expressjs",permalink:"/id/docs/cookbook/expressjs",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/cookbook/expressjs.md",version:"current",frontMatter:{title:"ExpressJS"},sidebar:"someSidebar",previous:{title:"Request Body Size",permalink:"/id/docs/cookbook/request-body-size"},next:{title:"Root Imports",permalink:"/id/docs/cookbook/root-imports"}},c=[{value:"Custom Express Instance",id:"custom-express-instance",children:[]},{value:"Pre and Post Express Middlewares",id:"pre-and-post-express-middlewares",children:[]},{value:"Migrating from Express to FoalTS",id:"migrating-from-express-to-foalts",children:[]}],l={toc:c};function u(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"FoalTS applications are created with the ",(0,a.kt)("inlineCode",{parentName:"p"},"createApp")," function in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.ts")," file. This function takes the root controller class (known as ",(0,a.kt)("inlineCode",{parentName:"p"},"AppController"),") as parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp } from '@foal/core';\n\nconst app = await createApp(AppController);\n")),(0,a.kt)("p",null,"The returned value is an ExpressJS application that can be used as is to create an HTTP server. ",(0,a.kt)("strong",{parentName:"p"},"FoalTS is not designed to integrate Express middlewares in its controllers or hooks"),". However, if for any reason you need to apply globally a middleware to the application, you have two ways to do it."),(0,a.kt)("h2",{id:"custom-express-instance"},"Custom Express Instance"),(0,a.kt)("p",null,"You can provide your own express instance to ",(0,a.kt)("inlineCode",{parentName:"p"},"createApp"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp } from '@foal/core';\nimport * as express from 'express';\n\nconst expressApp = express();\nexpressApp.use(/* an Express middleware */)\n\nconst app = await createApp(AppController, {\n  expressInstance: expressApp\n});\n\n")),(0,a.kt)("h2",{id:"pre-and-post-express-middlewares"},"Pre and Post Express Middlewares"),(0,a.kt)("p",null,"You can also pass global Express middlewares as options to the ",(0,a.kt)("inlineCode",{parentName:"p"},"createApp")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp } from '@foal/core';\nimport * as rateLimit from 'express-rate-limit';\n\nconst app = await createApp(AppController, {\n  preMiddlewares: [\n    /* Express middlewares */\n  ],\n  postMiddlewares: [\n    /* Express middlewares */\n  ]\n});\n")),(0,a.kt)("p",null,"Pre-middlewares are executed before Foal's controllers and hooks. Post-middlewares are executed only if there was no controller to handle the request, but before the 500 or 404 handlers get called."),(0,a.kt)("h2",{id:"migrating-from-express-to-foalts"},"Migrating from Express to FoalTS"),(0,a.kt)("p",null,"In case your are migrating your ExpressJS application to FoalTS, you can access FoalTS service manager using ",(0,a.kt)("inlineCode",{parentName:"p"},"app.foal.services"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp } from '@foal/core';\n\nconst app = await createApp(AppController);\napp.foal.services.get(MyServiceClass).doSomething();\n")))}u.isMDXComponent=!0}}]);