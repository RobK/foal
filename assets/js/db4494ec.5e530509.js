(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7676],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return s},kt:function(){return d}});var o=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=o.createContext({}),p=function(e){var n=o.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=p(r),d=t,m=f["".concat(c,".").concat(d)]||f[d]||l[d]||a;return r?o.createElement(m,i(i({ref:n},s),{},{components:r})):o.createElement(m,i({ref:n},s))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=f;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:t,i[1]=u;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},879:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return l}});var o=r(2122),t=r(9756),a=(r(7294),r(3905)),i=["components"],u={title:"Removal of Mongoose Support"},c={unversionedId:"upgrade-to-v2/mongodb",id:"upgrade-to-v2/mongodb",isDocsHomePage:!1,title:"Removal of Mongoose Support",description:"Due to the amount of work needed to maintain Mongoose in the framework and the large number of problems we had to face in the past, FoalTS no longer provides tools for Mongoose starting from version 2. The recommended approach to use MongoDB is now via TypeORM.",source:"@site/docs/upgrade-to-v2/mongodb.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/mongodb",permalink:"/docs/upgrade-to-v2/mongodb",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/mongodb.md",version:"current",frontMatter:{title:"Removal of Mongoose Support"}},p=[],s={toc:p};function l(e){var n=e.components,r=(0,t.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Due to the amount of work needed to maintain Mongoose in the framework and the large number of problems we had to face in the past, FoalTS no longer provides tools for Mongoose starting from version 2. The recommended approach to use MongoDB is now via TypeORM."),(0,a.kt)("p",null,"However, it is still possible to use Mongoose in your application if you want to. If you were using the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchUser")," function from the package ",(0,a.kt)("inlineCode",{parentName:"p"},"@foal/mongoose")," (now removed), here is its definition so that you can copy/paste it in your code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function fetchUser(userModel: any): (id: number|string) => Promise<any> {\n  return (id: number|string) => {\n    if (typeof id === 'number') {\n      throw new Error('Unexpected type for MongoDB user ID: number.');\n    }\n    return new Promise((resolve, reject) => {\n      userModel.findOne({ _id: id }, (err: any, res: any) => {\n        if (err) {\n          reject(err);\n          return;\n        }\n        resolve(res || undefined);\n      });\n    });\n  };\n}\n")))}l.isMDXComponent=!0}}]);