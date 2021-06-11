(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(290)),i={title:"Introduction"},l={unversionedId:"tutorials/simple-todo-list/2-introduction",id:"tutorials/simple-todo-list/2-introduction",isDocsHomePage:!1,title:"Introduction",description:"The application that you will create is a simple to-do list. It consists of a frontend part that has already been written for you and a backend part that will be the topic of this tutorial.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/tutorials/simple-todo-list/2-introduction.md",slug:"/tutorials/simple-todo-list/2-introduction",permalink:"/id/docs/tutorials/simple-todo-list/2-introduction",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/id/docusaurus-plugin-content-docs/current/tutorials/simple-todo-list/2-introduction.md",version:"current",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/id/docs/tutorials/simple-todo-list/1-installation"},next:{title:"The Todo Model",permalink:"/id/docs/tutorials/simple-todo-list/3-the-todo-model"}},c=[],s={toc:c};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The application that you will create is a simple to-do list. It consists of a frontend part that has already been written for you and a backend part that will be the topic of this tutorial."),Object(o.b)("p",null,"First download the html, css and js files by clicking ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://foalts.org/simple-todo-list.zip"}),"here"),"."),Object(o.b)("p",null,"Put the downloaded, unzipped files in the static directory ",Object(o.b)("inlineCode",{parentName:"p"},"public/"),"."),Object(o.b)("p",null,"The code executed in the browser will make API calls to the server to view, create and delete the tasks."),Object(o.b)("p",null,"Refresh the page. You should now see this:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Browser view",src:n(404).default})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"As you haven","\u2019","t yet implemented the server API, the frontend gets an error when fetching the to-dos. It is displayed at the bottom of the page. If you try to type something in the text input and press Enter to create a new task, you","\u2019","ll get an error as well.")),Object(o.b)("p",null,"Let","\u2019","s see the details of the API we want to build."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"List the tasks")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Request:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"method: ",Object(o.b)("inlineCode",{parentName:"li"},"GET")),Object(o.b)("li",{parentName:"ul"},"path: ",Object(o.b)("inlineCode",{parentName:"li"},"/api/todos")))),Object(o.b)("li",{parentName:"ul"},"Response:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"status: 200 (OK)"),Object(o.b)("li",{parentName:"ul"},"body: ",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  { "id": 1, "text": "Task 1" },\n  { "id": 2, "text": "Task 2" },\n]\n')))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Create a task")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Request:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"method: ",Object(o.b)("inlineCode",{parentName:"li"},"POST")),Object(o.b)("li",{parentName:"ul"},"path: ",Object(o.b)("inlineCode",{parentName:"li"},"/api/todos")),Object(o.b)("li",{parentName:"ul"},"body:",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "text": "Task 3"\n}\n'))))),Object(o.b)("li",{parentName:"ul"},"Response:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"status: 201 (Created)"),Object(o.b)("li",{parentName:"ul"},"body: ",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": 3,\n  "text": "Task 3"\n}\n')))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Delete a task")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Request:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"method: ",Object(o.b)("inlineCode",{parentName:"li"},"DELETE")),Object(o.b)("li",{parentName:"ul"},"path: ",Object(o.b)("inlineCode",{parentName:"li"},"/api/todos/3")))),Object(o.b)("li",{parentName:"ul"},"Response:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"status: 204 (No Content)")))))}p.isMDXComponent=!0},290:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},404:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/app-b81e09e80e2feb22c160df3e54d2106e.png"}}]);