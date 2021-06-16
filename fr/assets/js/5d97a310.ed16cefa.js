(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[329],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1225:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],l={title:"Introduction",id:"tuto-1-introduction",slug:"1-introduction"},u={unversionedId:"tutorials/real-world-example-with-react/tuto-1-introduction",id:"tutorials/real-world-example-with-react/tuto-1-introduction",isDocsHomePage:!1,title:"Introduction",description:"Ce tutoriel montre comment construire une application du monde r\xe9el avec React et Foal. Il suppose que vous avez d\xe9j\xe0 lu le premier guide Comment cr\xe9er une To-Do Liste Simple et que vous avez une connaissance de base de React.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/1-introduction.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/1-introduction",permalink:"/fr/docs/tutorials/real-world-example-with-react/1-introduction",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/1-introduction.md",version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",id:"tuto-1-introduction",slug:"1-introduction"},sidebar:"someSidebar",previous:{title:"Tests Unitaires",permalink:"/fr/docs/tutorials/simple-todo-list/7-unit-testing"},next:{title:"Base de Donn\xe9es (configuration)",permalink:"/fr/docs/tutorials/real-world-example-with-react/2-database-set-up"}},s=[{value:"Aper\xe7u de l&#39;Application",id:"aper\xe7u-de-lapplication",children:[]},{value:"D\xe9buter",id:"d\xe9buter",children:[]}],c={toc:s};function p(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ce tutoriel montre comment construire une application du monde r\xe9el avec React et Foal. Il suppose que vous avez d\xe9j\xe0 lu le premier guide ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"/fr/docs/tutorials/simple-todo-list/1-installation"},"Comment cr\xe9er une To-Do Liste Simple"))," et que vous avez une connaissance de base de React."),(0,o.kt)("p",null,"Dans ce tutoriel, vous apprendrez \xe0 :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\xe9tablir une connexion avec MySQL ou Postgres,"),(0,o.kt)("li",{parentName:"ul"},"fournir des informations d'identification \xe0 l'application de mani\xe8re s\xe9curis\xe9e,"),(0,o.kt)("li",{parentName:"ul"},"cr\xe9er des mod\xe8les avec des relations many-to-one,"),(0,o.kt)("li",{parentName:"ul"},"utiliser un constructeur de requ\xeates,"),(0,o.kt)("li",{parentName:"ul"},"g\xe9n\xe9rer une interface pour tester votre API (Swagger UI),"),(0,o.kt)("li",{parentName:"ul"},"corriger les erreurs de politique ",(0,o.kt)("em",{parentName:"li"},"same-origin"),","),(0,o.kt)("li",{parentName:"ul"},"permettre aux utilisateurs de se connecter et de s'enregistrer avec un email et un mot de passe,"),(0,o.kt)("li",{parentName:"ul"},"authentifier les utilisateurs sur le frontend et le backend,"),(0,o.kt)("li",{parentName:"ul"},"g\xe9rer le contr\xf4le d'acc\xe8s,"),(0,o.kt)("li",{parentName:"ul"},"se prot\xe9ger contre les attaques CSRF,"),(0,o.kt)("li",{parentName:"ul"},"t\xe9l\xe9charger et enregistrer des fichiers ",(0,o.kt)("em",{parentName:"li"},"(file upload)"),","),(0,o.kt)("li",{parentName:"ul"},"permettre aux utilisateurs de se connecter avec un fournisseur social (Google),"),(0,o.kt)("li",{parentName:"ul"},"et construire l'application pour la production.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Pour des raisons de simplicit\xe9, l'application frontend n'utilisera pas de biblioth\xe8que de gestion d'\xe9tat (telle que ",(0,o.kt)("a",{parentName:"em",href:"https://redux.js.org/"},"redux"),"). Mais vous pouvez bien s\xfbr en ajouter une si vous le souhaitez. La logique \xe0 suivre restera principalement la m\xeame."))),(0,o.kt)("h2",{id:"aper\xe7u-de-lapplication"},"Aper\xe7u de l'Application"),(0,o.kt)("p",null,"L'application que vous allez cr\xe9er est un site Web social o\xf9 les utilisateurs peuvent partager des liens int\xe9ressants vers des tutoriaux. Tous les messages seront publics, donc aucune authentification ne sera n\xe9cessaire pour les consulter. La publication d'un post, par contre, n\xe9cessitera la cr\xe9ation d'un compte."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Page d'accueil"),"\n",(0,o.kt)("img",{alt:"Feed page",src:r(7068).Z})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Page de profile"),"\n",(0,o.kt)("img",{alt:"Profile page",src:r(6135).Z})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Pages d'inscription et de connexion"),"\n",(0,o.kt)("img",{alt:"Registration and login pages",src:r(8726).Z})),(0,o.kt)("h2",{id:"d\xe9buter"},"D\xe9buter"),(0,o.kt)("p",null,"C'est parti. Tout d'abord, cr\xe9ez un nouveau r\xe9pertoire."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir foal-react-tuto\n")),(0,o.kt)("p",null,"G\xe9n\xe9rez l'application backend."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd foal-react-tuto\nfoal createapp backend-app\n")),(0,o.kt)("p",null,"Puis, d\xe9marrez le serveur de d\xe9veloppement."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd backend-app\nnpm run develop\n")),(0,o.kt)("p",null,"Allez sur ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3001"},"http://localhost:3001")," dans votre navigateur. Vous devriez voir le message ",(0,o.kt)("em",{parentName:"p"},"Welcome on board"),"."))}p.isMDXComponent=!0},7068:function(e,t,r){"use strict";t.Z=r.p+"assets/images/feed-cafaeeea52a28612177a5a70e6c1cf12.png"},6135:function(e,t,r){"use strict";t.Z=r.p+"assets/images/profile-d12409506e2332f8a2ef8391801ef85d.png"},8726:function(e,t,r){"use strict";t.Z=r.p+"assets/images/sign-up-and-log-in-ea14815a2f012118eef7e058bd93c500.png"}}]);