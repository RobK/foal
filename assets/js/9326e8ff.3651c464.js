(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4163],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3668:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],l={title:"CSRF Protection",id:"tuto-13-csrf",slug:"13-csrf"},c={unversionedId:"tutorials/real-world-example-with-react/tuto-13-csrf",id:"tutorials/real-world-example-with-react/tuto-13-csrf",isDocsHomePage:!1,title:"CSRF Protection",description:"Since you use authentication with cookies, you need to add CSRF protection to your application.  This is really easy with Foal, even when building a SPA.",source:"@site/docs/tutorials/real-world-example-with-react/13-csrf.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/13-csrf",permalink:"/docs/tutorials/real-world-example-with-react/13-csrf",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/13-csrf.md",version:"current",sidebarPosition:13,frontMatter:{title:"CSRF Protection",id:"tuto-13-csrf",slug:"13-csrf"},sidebar:"someSidebar",previous:{title:"Image Upload and Download",permalink:"/docs/tutorials/real-world-example-with-react/12-file-upload"},next:{title:"Production Build",permalink:"/docs/tutorials/real-world-example-with-react/14-production-build"}},s=[],u={toc:s};function p(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Since you use authentication with cookies, you need to add CSRF protection to your application.  This is really easy with Foal, even when building a SPA."),(0,a.kt)("p",null,"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"default.json")," config file and enable the CSRF protection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "port": "env(PORT)",\n  "settings": {\n    "session": {\n      "store": "@foal/typeorm",\n      "csrf": {\n        "enabled": true\n      }\n    },\n    ...\n  }\n  ...\n}\n')),(0,a.kt)("p",null,"Now, when using sessions with cookies, the server will send an additional token to the client in a cookie named ",(0,a.kt)("inlineCode",{parentName:"p"},"XSRF-Token"),". This token will have to be retrieved by the front-end application and sent back in every subsequent POST, PATCH, PUT and DELETE request with the ",(0,a.kt)("inlineCode",{parentName:"p"},"X-XSRF-Token")," header. If it is not, the server will return a 403 error."),(0,a.kt)("p",null,"If you use ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/axios"},"axios")," as your request library, as in this tutorial, you don't have to do anything. Everything is handled in the background. "),(0,a.kt)("p",null,"If you restart your development server and open your browser's development tools, you will see that axios automatically includes the token for you when creating a new story."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"X-XSRF-Token header example",src:r(2841).Z})))}p.isMDXComponent=!0},2841:function(e,t,r){"use strict";t.Z=r.p+"assets/images/csrf-a395cf4e61edfeaa39c97b11c168dc86.png"}}]);