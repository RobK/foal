(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7076],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return i},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,c(c({ref:t},i),{},{components:n})):r.createElement(h,c({ref:t},i))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3373:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),c=["components"],l={title:"Scheduling Jobs"},s={unversionedId:"cookbook/scheduling-jobs",id:"cookbook/scheduling-jobs",isDocsHomePage:!1,title:"Scheduling Jobs",description:"You can schedule jobs using shell scripts and the node-schedule library.",source:"@site/docs/cookbook/scheduling-jobs.md",sourceDirName:"cookbook",slug:"/cookbook/scheduling-jobs",permalink:"/docs/cookbook/scheduling-jobs",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/cookbook/scheduling-jobs.md",version:"current",frontMatter:{title:"Scheduling Jobs"},sidebar:"someSidebar",previous:{title:"XSS Protection",permalink:"/docs/security/xss-protection"},next:{title:"404 Page",permalink:"/docs/cookbook/not-found-page"}},u=[{value:"Example",id:"example",children:[]},{value:"Background Jobs with pm2",id:"background-jobs-with-pm2",children:[]}],i={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can schedule jobs using ",(0,a.kt)("a",{parentName:"p",href:"/docs/development-environment/create-and-run-scripts"},"shell scripts")," and the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/node-schedule"},"node-schedule")," library."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"scripts/fetch-metrics.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export function main(args: any) {\n  // Do some stuff\n}\n\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"scripts/schedule-jobs.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// 3p\nimport { scheduleJob } from 'node-schedule';\nimport { main as fetchMetrics } from './fetch-metrics';\n\nexport async function main(args: any) {\n  console.log('Scheduling the job...');\n\n  // Run the fetch-metrics script every day at 10:00 AM.\n  scheduleJob(\n    { hour: 10, minute: 0 },\n    () => fetchMetrics(args)\n  );\n\n  console.log('Job scheduled!');\n}\n\n")),(0,a.kt)("p",null,"Schedule the job(s):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build\nfoal run schedule-jobs arg1=value1\n")),(0,a.kt)("h2",{id:"background-jobs-with-pm2"},"Background Jobs with pm2"),(0,a.kt)("p",null,"While the above command works, it does not run the scheduler and the jobs in the background. To do this, you can use ",(0,a.kt)("a",{parentName:"p",href:"http://pm2.keymetrics.io/"},"pm2"),", a popular process manager for Node.js."),(0,a.kt)("p",null,"First you need to install ",(0,a.kt)("em",{parentName:"p"},"locally")," the Foal CLI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install @foal/cli\n")),(0,a.kt)("p",null,"Then you can run the scheduler like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pm2 start ./node_modules/.bin/foal --name scheduler -- run schedule-jobs arg1=value1\n")),(0,a.kt)("p",null,"If everything works fine, you should see your scheduler running with this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pm2 ls\n")),(0,a.kt)("p",null,"To display the logs of the scheduler and the jobs, use this one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pm2 logs scheduler\n")),(0,a.kt)("p",null,"Eventually, to stop the scheduler and the jobs, you can use this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pm2 delete scheduler\n")))}p.isMDXComponent=!0}}]);