(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9315],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9199:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),l=["components"],i={title:"Authentification Sociale avec Google",id:"tuto-15-social-auth",slug:"15-social-auth"},s={unversionedId:"tutorials/real-world-example-with-react/tuto-15-social-auth",id:"tutorials/real-world-example-with-react/tuto-15-social-auth",isDocsHomePage:!1,title:"Authentification Sociale avec Google",description:"Dans cette derni\xe8re partie du tutoriel, nous allons donner aux utilisateurs la possibilit\xe9 de se connecter avec Google. Actuellement, ils ne peuvent se connecter qu'avec un email et un mot de passe.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/real-world-example-with-react/15-social-auth.md",sourceDirName:"tutorials/real-world-example-with-react",slug:"/tutorials/real-world-example-with-react/15-social-auth",permalink:"/fr/docs/tutorials/real-world-example-with-react/15-social-auth",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/tutorials/real-world-example-with-react/15-social-auth.md",version:"current",sidebarPosition:15,frontMatter:{title:"Authentification Sociale avec Google",id:"tuto-15-social-auth",slug:"15-social-auth"},sidebar:"someSidebar",previous:{title:"Construction de Production",permalink:"/fr/docs/tutorials/real-world-example-with-react/14-production-build"},next:{title:"Aper\xe7u de l'Architecture",permalink:"/fr/docs/architecture/architecture-overview"}},u=[{value:"Mots de Passe Nullables",id:"mots-de-passe-nullables",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Le Contr\xf4leur Social",id:"le-contr\xf4leur-social",children:[]}],c={toc:u};function p(e){var t=e.components,i=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Dans cette derni\xe8re partie du tutoriel, nous allons donner aux utilisateurs la possibilit\xe9 de se connecter avec Google. Actuellement, ils ne peuvent se connecter qu'avec un email et un mot de passe."),(0,a.kt)("p",null,"Pour ce faire, vous utiliserez le syst\xe8me d'authentification sociale de Foal."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Cette section suppose que vous avez d\xe9j\xe0 configur\xe9 une application Google et que vous avez r\xe9cup\xe9r\xe9 votre ID client et votre secret. Si ce n'est pas le cas, vous pouvez d'abord consulter cette ",(0,a.kt)("a",{parentName:"em",href:"/fr/docs/authentication-and-access-control/social-auth"},"page"),". Les URI de redirection autoris\xe9s dans votre application Google doivent inclure ",(0,a.kt)("inlineCode",{parentName:"em"},"http://localhost:3001/api/auth/google/callback"),"."))),(0,a.kt)("h2",{id:"mots-de-passe-nullables"},"Mots de Passe Nullables"),(0,a.kt)("p",null,"La premi\xe8re \xe9tape est de mettre \xe0 jour le mod\xe8le ",(0,a.kt)("inlineCode",{parentName:"p"},"User"),". Certains utilisateurs peuvent n'utiliser que le login social et donc ne pas avoir de mot de passe. Pour prendre cela en compte, nous allons faire en sorte que la colonne ",(0,a.kt)("inlineCode",{parentName:"p"},"password")," accepte des valeurs nulles."),(0,a.kt)("p",null,"Ouvrez ",(0,a.kt)("inlineCode",{parentName:"p"},"user.entity.ts")," et mettez \xe0 jour son contenu."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n\n@Entity()\nexport class User extends BaseEntity {\n\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column({ unique: true })\n  email: string;\n\n  @Column({ nullable: true })\n  password: string;\n\n  @Column()\n  name: string;\n\n  @Column()\n  avatar: string;\n\n}\n\nexport { DatabaseSession } from '@foal/typeorm';\n")),(0,a.kt)("p",null,"G\xe9n\xe9rez et ex\xe9cutez les migrations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run makemigrations\nnpm run migrations\n")),(0,a.kt)("p",null,"Ouvrez ensuite ",(0,a.kt)("inlineCode",{parentName:"p"},"auth.controller.ts")," et ajoutez une condition pour v\xe9rifier si la valeur du mot de passe est ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," dans la base de donn\xe9es."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"if (!user.password) {\n  return new HttpResponseUnauthorized();\n}\n\nif (!(await verifyPassword(password, user.password))) {\n  return new HttpResponseUnauthorized();\n}\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Maintenant que le probl\xe8me du mot de passe est r\xe9solu, vous pouvez installer les paquets et fournir vos informations d'identification sociale dans la configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @foal/social node-fetch\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"config/default.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "port": "env(PORT)",\n  "settings": {\n    ...\n    "social": {\n      "google": {\n        "clientId": "env(GOOGLE_CLIENT_ID)",\n        "clientSecret": "env(GOOGLE_CLIENT_SECRET)",\n        "redirectUri": "http://localhost:3001/api/auth/google/callback"\n      }\n    },\n  },\n  ...\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},".env")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# ...\n\nGOOGLE_CLIENT_ID="your Google client ID"\nGOOGLE_CLIENT_SECRET="your Google client secret"\n')),(0,a.kt)("h2",{id:"le-contr\xf4leur-social"},"Le Contr\xf4leur Social"),(0,a.kt)("p",null,"Cr\xe9ez le contr\xf4leur."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"foal generate controller api/social-auth --register\n")),(0,a.kt)("p",null,"Ouvrez le fichier et ajoutez deux nouvelles routes."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Point de terminaison"),(0,a.kt)("th",{parentName:"tr",align:null},"M\xe9thode"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/api/auth/google")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"POST")),(0,a.kt)("td",{parentName:"tr",align:null},"Redirige l'utilisateur vers la page de connexion de Google.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/api/auth/google/callback")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"GET")),(0,a.kt)("td",{parentName:"tr",align:null},"G\xe8re la redirection depuis Google une fois que l'utilisateur a approuv\xe9 la connexion.")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, dependency, Get, HttpResponseRedirect, Session } from '@foal/core';\nimport { GoogleProvider } from '@foal/social';\nimport { User } from '../../entities';\nimport * as fetch from 'node-fetch';\nimport { Disk } from '@foal/storage';\n\ninterface GoogleUserInfo {\n  email: string;\n  name?: string;\n  picture?: string;\n}\n\nexport class SocialAuthController {\n  @dependency\n  google: GoogleProvider;\n\n  @dependency\n  disk: Disk;\n\n  @Get('/google')\n  redirectToGoogle() {\n    return this.google.redirect();\n  }\n\n  @Get('/google/callback')\n  async handleGoogleRedirection(ctx: Context<User, Session>) {\n    const { userInfo } = await this.google.getUserInfo<GoogleUserInfo>(ctx);\n\n    if (!userInfo.email) {\n      throw new Error('Google should have returned an email address.');\n    }\n\n    let user = await User.findOne({ email: userInfo.email });\n\n    if (!user) {\n      user = new User();\n      user.email = userInfo.email;\n      user.avatar = '';\n      user.name = userInfo.name ?? 'Unknown';\n\n      if (userInfo.picture) {\n        const response = await fetch(userInfo.picture);\n        const { path } = await this.disk.write('images/profiles/uploaded', response.body)\n        user.avatar = path;\n      }\n\n      await user.save();\n    }\n\n    ctx.session.setUser(user);\n    ctx.user = user;\n\n    return new HttpResponseRedirect('/');\n  }\n\n}\n\n")),(0,a.kt)("p",null,"Ouvrez ",(0,a.kt)("inlineCode",{parentName:"p"},"api.controller.ts")," et remplacez le pr\xe9fixe du chemin du ",(0,a.kt)("inlineCode",{parentName:"p"},"SocialAuthController")," par ",(0,a.kt)("inlineCode",{parentName:"p"},"/auth"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"subControllers = [\n  controller('/stories', StoriesController),\n  controller('/auth', AuthController),\n  controller('/profile', ProfileController),\n  controller('/auth', SocialAuthController)\n];\n")),(0,a.kt)("p",null,"Allez sur ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3001/login"},"http://localhost:3001/login")," et cliquez sur le bouton ",(0,a.kt)("em",{parentName:"p"},"Connect with Google"),". Vous \xeates redirig\xe9 vers la page de connexion de Google. Une fois que vous avez valid\xe9 la connexion, vous \xeates redirig\xe9 vers la page d'accueil. Si vous avez une photo de profil Google, vous la verrez sur votre page de profil."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Pour que cela fonctionne, vous devez vous assurer que vous utilisez le port ",(0,a.kt)("inlineCode",{parentName:"p"},"3001")," pour tester la connexion sociale. Cela suppose que vous avez cr\xe9\xe9 la build de production dans l'\xe9tape pr\xe9c\xe9dente de ce tutoriel. Vous ne pouvez pas utiliser le serveur de d\xe9veloppement React ici car les redirections ne fonctionneront pas avec les deux ports ",(0,a.kt)("inlineCode",{parentName:"p"},"3000")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"3001"),". ")),(0,a.kt)("p",null,"F\xe9licitations ! Vous avez atteint la fin de ce tutoriel. Vous pouvez trouver le code source complet ",(0,a.kt)("a",{target:"_blank",href:n(1156).Z},"ici"),"."))}p.isMDXComponent=!0},1156:function(e,t,n){"use strict";t.Z=n.p+"assets/files/tutorial-foal-react-eb9413cdda30e58d7bf2efefe643b589.zip"}}]);