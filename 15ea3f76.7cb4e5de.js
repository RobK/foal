(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{288:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),b=r,m=f["".concat(i,".").concat(b)]||f[b]||p[b]||o;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},289:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},290:function(e,t,n){"use strict";var r=n(0),a=n(291);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},291:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},292:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(290),i=n(289),c=n(56),l=n.n(c),u=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,f=e.values,p=e.groupId,b=e.className,m=Object(o.a)(),d=m.tabGroupChoices,v=m.setTabGroupChoices,O=Object(r.useState)(c),g=O[0],y=O[1],h=r.Children.toArray(e.children);if(null!=p){var j=d[p];null!=j&&j!==g&&f.some((function(e){return e.value===j}))&&y(j)}var w=function(e){y(e),null!=p&&v(p,e)},C=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},b)},f.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(h.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},293:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},311:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/banner-b1bb8a7ff5057bbac324ac1a22b55703.png"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(288)),i=(n(292),n(293),{title:"What's new in version 2 (part 2/4)",author:"Lo\xefc Poullain",author_title:"Fullstack developper and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/whats-new-in-version-2-part-2.png",tags:["release"]}),c={permalink:"/blog/2021/03/02/whats-new-in-version-2-part-2",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-03-02-whats-new-in-version-2-part-2.md",source:"@site/blog/2021-03-02-whats-new-in-version-2-part-2.md",description:"Banner",date:"2021-03-02T00:00:00.000Z",tags:[{label:"release",permalink:"/blog/tags/release"}],title:"What's new in version 2 (part 2/4)",readingTime:5.055,truncated:!0,prevItem:{title:"What's new in version 2 (part 3/4)",permalink:"/blog/2021/03/11/whats-new-in-version-2-part-3"},nextItem:{title:"Version 2.2 release notes",permalink:"/blog/2021/02/25/version-2.2-release-notes"}},l=[],u={toc:l};function s(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{alt:"Banner",src:n(311).default})),Object(o.b)("p",null,"This article presents some improvements introduced in version 2 of FoalTS:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Configuration and type safety"),Object(o.b)("li",{parentName:"ul"},"Configuration and ",Object(o.b)("inlineCode",{parentName:"li"},".env")," files (",Object(o.b)("inlineCode",{parentName:"li"},".env"),", ",Object(o.b)("inlineCode",{parentName:"li"},".env.test"),", etc)"),Object(o.b)("li",{parentName:"ul"},"Available configuration file formats (JSON, YAML and JS)"),Object(o.b)("li",{parentName:"ul"},"OpenAPI schemas and validation")))}s.isMDXComponent=!0}}]);