(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[281],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=p(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(k,i(i({ref:e},u),{},{components:n})):r.createElement(k,i({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3288:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],l={title:"Introduction"},s={unversionedId:"tutorials/simple-todo-list/tuto-2-introduction",id:"version-1.x/tutorials/simple-todo-list/tuto-2-introduction",isDocsHomePage:!1,title:"Introduction",description:"The application that you will create is a simple to-do list. It consists of a frontend part that has already been written for you and a backend part that will be the topic of this tutorial.",source:"@site/versioned_docs/version-1.x/tutorials/simple-todo-list/tuto-2-introduction.md",sourceDirName:"tutorials/simple-todo-list",slug:"/tutorials/simple-todo-list/tuto-2-introduction",permalink:"/id/docs/1.x/tutorials/simple-todo-list/tuto-2-introduction",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/tutorials/simple-todo-list/tuto-2-introduction.md",version:"1.x",frontMatter:{title:"Introduction"},sidebar:"someSidebar",previous:{title:"Installation",permalink:"/id/docs/1.x/tutorials/simple-todo-list/tuto-1-installation"},next:{title:"The Todo Model",permalink:"/id/docs/1.x/tutorials/simple-todo-list/tuto-3-the-todo-model"}},p=[],u={toc:p};function c(t){var e=t.components,l=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The application that you will create is a simple to-do list. It consists of a frontend part that has already been written for you and a backend part that will be the topic of this tutorial."),(0,a.kt)("p",null,"First download the html, css and js files by clicking ",(0,a.kt)("a",{parentName:"p",href:"https://foalts.org/simple-todo-list.zip"},"here"),"."),(0,a.kt)("p",null,"Put the downloaded, unzipped files in the static directory ",(0,a.kt)("inlineCode",{parentName:"p"},"public/"),"."),(0,a.kt)("p",null,"The code executed in the browser will make API calls to the server to view, create and delete the tasks."),(0,a.kt)("p",null,"Refresh the page. You should now see this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Browser view",src:n(9530).Z})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"As you haven","\u2019","t yet implemented the server API, the frontend gets an error when fetching the to-dos. It is displayed at the bottom of the page. If you try to type something in the text input and press Enter to create a new task, you","\u2019","ll get an error as well.")),(0,a.kt)("p",null,"Let","\u2019","s see the details of the API we want to build."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"List the tasks")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Request:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"method: ",(0,a.kt)("inlineCode",{parentName:"li"},"GET")),(0,a.kt)("li",{parentName:"ul"},"path: ",(0,a.kt)("inlineCode",{parentName:"li"},"/api/todos")))),(0,a.kt)("li",{parentName:"ul"},"Response:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"status: 200 (OK)"),(0,a.kt)("li",{parentName:"ul"},"body: ",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  { "id": 1, "text": "Task 1" },\n  { "id": 2, "text": "Task 2" },\n]\n')))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Create a task")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Request:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"method: ",(0,a.kt)("inlineCode",{parentName:"li"},"POST")),(0,a.kt)("li",{parentName:"ul"},"path: ",(0,a.kt)("inlineCode",{parentName:"li"},"/api/todos")),(0,a.kt)("li",{parentName:"ul"},"body:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "text": "Task 3"\n}\n'))))),(0,a.kt)("li",{parentName:"ul"},"Response:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"status: 201 (Created)"),(0,a.kt)("li",{parentName:"ul"},"body: ",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 3,\n  "text": "Task 3"\n}\n')))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Delete a task")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Request:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"method: ",(0,a.kt)("inlineCode",{parentName:"li"},"DELETE")),(0,a.kt)("li",{parentName:"ul"},"path: ",(0,a.kt)("inlineCode",{parentName:"li"},"/api/todos/3")))),(0,a.kt)("li",{parentName:"ul"},"Response:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"status: 204 (No Content)")))))}c.isMDXComponent=!0},9530:function(t,e,n){"use strict";e.Z=n.p+"assets/images/app-b81e09e80e2feb22c160df3e54d2106e.png"}}]);