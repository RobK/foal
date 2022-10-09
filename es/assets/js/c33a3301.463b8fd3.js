"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2069],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(r),d=a,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1578:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"Version 2.11 release notes",author:"Lo\xefc Poullain",author_title:"Fullstack developer and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.11-release-notes.png",tags:["release"]},s=void 0,i={permalink:"/es/blog/2022/10/09/version-2.11-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2022-10-09-version-2.11-release-notes.md",source:"@site/blog/2022-10-09-version-2.11-release-notes.md",title:"Version 2.11 release notes",description:"Banner",date:"2022-10-09T00:00:00.000Z",formattedDate:"9 de octubre de 2022",tags:[{label:"release",permalink:"/es/blog/tags/release"}],readingTime:.975,hasTruncateMarker:!0,authors:[{name:"Lo\xefc Poullain",title:"Fullstack developer and creator of FoalTS",url:"https://github.com/LoicPoullain",imageURL:"https://avatars1.githubusercontent.com/u/13604533?v=4"}],frontMatter:{title:"Version 2.11 release notes",author:"Lo\xefc Poullain",author_title:"Fullstack developer and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",image:"blog/twitter-banners/version-2.11-release-notes.png",tags:["release"]},nextItem:{title:"Version 2.10 release notes",permalink:"/es/blog/2022/08/11/version-2.10-release-notes"}},l={authorsImageUrls:[void 0]},u=[{value:"Number of Iterations on Password Hashing Has Been Increased",id:"number-of-iterations-on-password-hashing-has-been-increased",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Banner",src:r(5815).Z,width:"914",height:"315"})),(0,a.kt)("p",null,"Version 2.11 of ",(0,a.kt)("a",{parentName:"p",href:"https://foalts.org/"},"Foal")," is out! Here are the improvements that it brings:"),(0,a.kt)("h2",{id:"number-of-iterations-on-password-hashing-has-been-increased"},"Number of Iterations on Password Hashing Has Been Increased"),(0,a.kt)("p",null,"The PBKDF2 algorithm (used for password hashing) uses a number of iterations to hash passwords. This work factor is deliberate and slows down potential attackers, making attacks against hashed passwords more difficult."),(0,a.kt)("p",null,"As computing power increases, the number of iterations must also increase. This is why, starting with version 2.11, the number of iterations has been increased to 310,000."),(0,a.kt)("p",null,"To check that an existing password hash is using the latest recommended number of iterations, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"passwordHashNeedsToBeRefreshed")," function."),(0,a.kt)("p",null,"The example below shows how to perform this check during a login and how to upgrade the password hash if the number of iterations turns out to be too low."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const { email, password } = ctx.request.body;\n\nconst user = await User.findOne({ email });\n\nif (!user) {\n  return new HttpResponseUnauthorized();\n}\n\nif (!await verifyPassword(password, user.password)) {\n  return new HttpResponseUnauthorized();\n}\n\n// highlight-start\n// This line must be after the password verification.\nif (passwordHashNeedsToBeRefreshed(user.password)) {\n  user.password = await hashPassword(password);\n  await user.save();\n}\n// highlight-end\n\n// Log the user in.\n")))}p.isMDXComponent=!0},5815:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/banner-9fc23ebc71459854bb0a73031e1b1f88.png"}}]);