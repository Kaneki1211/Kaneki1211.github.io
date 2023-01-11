"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),m=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return l.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(n),k=a,N=c["".concat(s,".").concat(k)]||c[k]||u[k]||r;return n?l.createElement(N,i(i({ref:t},p),{},{components:n})):l.createElement(N,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<r;m++)i[m]=n[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var l=n(7462),a=(n(7294),n(3905));const r={},i="\u4e00\u3001Node \u7b80\u4ecb",o={unversionedId:"Node/node\u7b80\u4ecb",id:"Node/node\u7b80\u4ecb",title:"\u4e00\u3001Node \u7b80\u4ecb",description:"1.Node.js",source:"@site/docs/7.Node/1.node\u7b80\u4ecb.md",sourceDirName:"7.Node",slug:"/Node/node\u7b80\u4ecb",permalink:"/docs/Node/node\u7b80\u4ecb",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e8c\u3001Vite",permalink:"/docs/\u6784\u5efa\u5de5\u5177/vite"},next:{title:"\u4e8c\u3001\u6a21\u5757\u5316",permalink:"/docs/Node/\u6a21\u5757\u5316"}},s={},m=[{value:"1.Node.js",id:"1nodejs",level:2},{value:"2.\u4f7f\u7528\u5b89\u88c5\u5de5\u5177 Nvm",id:"2\u4f7f\u7528\u5b89\u88c5\u5de5\u5177-nvm",level:2},{value:"\u5b89\u88c5 node",id:"\u5b89\u88c5-node",level:4},{value:"3.Promise",id:"3promise",level:2},{value:"\u5f02\u6b65\u539f\u7406",id:"\u5f02\u6b65\u539f\u7406",level:3},{value:"Promise \u7684\u521b\u5efa",id:"promise-\u7684\u521b\u5efa",level:3},{value:"promise \u7684\u9690\u85cf\u5c5e\u6027",id:"promise-\u7684\u9690\u85cf\u5c5e\u6027",level:3},{value:"promise \u4e2d\u7684\u65b9\u6cd5",id:"promise-\u4e2d\u7684\u65b9\u6cd5",level:3},{value:"\u8bfb\u53d6\u6570\u636e then",id:"\u8bfb\u53d6\u6570\u636e-then",level:3},{value:"\u6355\u83b7\u5f02\u5e38 catch",id:"\u6355\u83b7\u5f02\u5e38-catch",level:3},{value:"finally",id:"finally",level:3},{value:"3\u3001promise \u7684\u9759\u6001\u65b9\u6cd5",id:"3promise-\u7684\u9759\u6001\u65b9\u6cd5",level:2},{value:"4\u3001\u4e8b\u4ef6\u5faa\u73af event loop",id:"4\u4e8b\u4ef6\u5faa\u73af-event-loop",level:2},{value:"5\u3001async \u548c await",id:"5async-\u548c-await",level:2}],p={toc:m};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,l.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e00node-\u7b80\u4ecb"},"\u4e00\u3001Node \u7b80\u4ecb"),(0,a.kt)("h2",{id:"1nodejs"},"1.Node.js"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fd0\u884c\u5728\u670d\u52a1\u5668\u7aef\u7684 js")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7528\u6765\u7f16\u5199\u670d\u52a1\u5668")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7279\u70b9\uff1a - \u5355\u7ebf\u7a0b\u3001\u5f02\u6b65\u3001\u975e\u963b\u585e - \u7edf\u4e00 API"),(0,a.kt)("p",{parentName:"li"},"node.js \u548c JavaScript \u6709\u4ec0\u4e48\u533a\u522b"),(0,a.kt)("p",{parentName:"li"},"ECMAScript\uff08node \u6709\uff09 DOM\uff08node \u6ca1\u6709\uff09 BOM\uff08node \u6ca1\u6709\uff09"))),(0,a.kt)("h2",{id:"2\u4f7f\u7528\u5b89\u88c5\u5de5\u5177-nvm"},"2.\u4f7f\u7528\u5b89\u88c5\u5de5\u5177 Nvm"),(0,a.kt)("p",null,"\u9664\u4e86\u76f4\u63a5\u5b89\u88c5\u5916\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5b89\u88c5\u5de5\u5177\u6765\u5b89\u88c5\uff0c\u4f7f\u7528\u5b89\u88c5\u5de5\u5177\u5b89\u88c5\u540e\u66f4\u65b9\u4fbf\u6211\u4eec\u5728\u4e0d\u540c\u7684 node \u7248\u672c\u4e4b\u95f4\u8fdb\u884c\u5207\u6362\uff0c\u4f7f\u7528\u8d77\u6765\u66f4\u52a0\u7075\u6d3b\u3002\n\u8fd9\u91cc\u6211\u4eec\u4ee5 window \u4e0b\u7684 nvm \u4e3a\u4f8b\u6765\u6f14\u793a\uff0c\u9996\u5148\u70b9\u51fb ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coreybutler/nvm-windows/releases"},"\u5b89\u88c5 nvm"),"\uff0c \u4e0b\u8f7d\u6700\u65b0\u7248\u7684 nvm-setup.exe\u3002\u6839\u636e\u63d0\u793a\u4e0b\u4e00\u6b65\u4e0b\u4e00\u6b65\u5373\u53ef\uff0c\u540c\u6837\u63a8\u8350\u5b89\u88c5\u5230\u9ed8\u8ba4\u8def\u5f84\u3002\u5728\u547d\u4ee4\u884c\u4e2d\u8f93\u5165 nvm version \u540e\uff0c\u51fa\u73b0\u7248\u672c\u5373\u8868\u793a\u5b89\u88c5\u6210\u529f\u3002"),(0,a.kt)("h4",{id:"\u5b89\u88c5-node"},"\u5b89\u88c5 node"),(0,a.kt)("p",null,"\u8f93\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm install latest")," \u4e0b\u8f7d\u5e76\u5b89\u88c5\u6700\u65b0\u7248\u7684 node"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(693).Z,width:"584",height:"173"})),(0,a.kt)("p",null,"\u8f93\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm use latest")," \u5207\u6362\u5230\u6700\u65b0\u7248 node\uff0c\u8f93\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm use lts")," \u5207\u6362\u5230\u7a33\u5b9a\u7248 node\uff0c\u4e5f\u53ef\u4ee5\u8f93\u5165\u7248\u672c\u53f7\u6765\u5207\u6362\u5230\u6307\u5b9a\u7248\u672c\u3002\n",(0,a.kt)("img",{src:n(7444).Z,width:"341",height:"190"})),(0,a.kt)("h2",{id:"3promise"},"3.Promise"),(0,a.kt)("h3",{id:"\u5f02\u6b65\u539f\u7406"},"\u5f02\u6b65\u539f\u7406"),(0,a.kt)("p",null,"\u4e00\u6bb5\u4ee3\u7801\u7684\u6267\u884c\u4e0d\u4f1a\u5f71\u54cd\u5230\u5176\u4ed6\u7684\u7a0b\u5e8f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u7684\u95ee\u9898\uff1a",(0,a.kt)("br",{parentName:"li"}),"\u5f02\u6b65\u7684\u4ee3\u7801\u65e0\u6cd5\u901a\u8fc7 return \u6765\u8bbe\u7f6e\u8fd4\u56de\u503c"),(0,a.kt)("li",{parentName:"ul"},"\u7279\u70b9\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u963b\u585e\u5176\u4ed6\u4ee3\u7801\u7684\u6267\u884c"),(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u6765\u8fd4\u56de\u7ed3\u679c")))),(0,a.kt)("h3",{id:"promise-\u7684\u521b\u5efa"},"Promise \u7684\u521b\u5efa"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Promise \u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u89e3\u51b3\u5f02\u6b65\u4e2d\u7684\u56de\u8c03\u51fd\u6570\u7684\u95ee\u9898")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Promise \u5c31\u662f\u4e00\u4e2a\u7528\u6765\u5b58\u50a8\u6570\u636e\u7684\u5bb9\u5668\n\u5b83\u62e5\u6709\u7740\u4e00\u5957\u7279\u6b8a\u7684\u5b58\u53d6\u6570\u636e\u7684\u65b9\u5f0f",(0,a.kt)("br",{parentName:"p"}),"\n","\u8fd9\u4e2a\u65b9\u5f0f\u4f7f\u5f97\u5b83\u91cc\u8fb9\u53ef\u4ee5\u5b58\u50a8\u5f02\u6b65\u8c03\u7528\u7684\u7ed3\u679c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u521b\u5efa Promise \u65f6\uff0c\u6784\u9020\u51fd\u6570\u4e2d\u9700\u8981\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Promise \u6784\u9020\u51fd\u6570\u7684\u56de\u8c03\u51fd\u6570\uff0c\u5b83\u4f1a\u5728\u521b\u5efa Promise \u65f6\u8c03\u7528\uff0c\u8c03\u7528\u65f6\u4f1a\u6709\u4e24\u4e2a\u53c2\u6570\u4f20\u9012\u8fdb\u53bb"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const promise = new Promise((resolve, reject) => {\n  // resolve \u548c reject \u662f\u4e24\u4e2a\u51fd\u6570\uff0c\u901a\u8fc7\u8fd9\u4e24\u4e2a\u51fd\u6570\u53ef\u4ee5\u5411Promise\u4e2d\u5b58\u50a8\u6570\u636e\n  // resolve\u5728\u6267\u884c\u6b63\u5e38\u65f6\u5b58\u50a8\u6570\u636e\uff0creject\u5728\u6267\u884c\u9519\u8bef\u65f6\u5b58\u50a8\u6570\u636e\n  // \u901a\u8fc7\u51fd\u6570\u6765\u5411Promise\u4e2d\u6dfb\u52a0\u6570\u636e\uff0c\u597d\u5904\u5c31\u662f\u53ef\u4ee5\u7528\u6765\u6dfb\u52a0\u5f02\u6b65\u8c03\u7528\u7684\u6570\u636e\n\n  // setTimeout(() => {\n  //     resolve("\u54c8\u54c8")\n  // }, 2000)\n  throw new Error("\u54c8\u54c8\uff0c\u51fa\u9519\u4e86"); //\u629b\u51fa\u4e00\u4e2a\u5f02\u5e38\n\n  resolve("resolve\u8fd4\u56de\u7684\u6570\u636e");\n  reject("reject\u8fd4\u56de\u7684\u6570\u636e");\n});\n')),(0,a.kt)("h3",{id:"promise-\u7684\u9690\u85cf\u5c5e\u6027"},"promise \u7684\u9690\u85cf\u5c5e\u6027"),(0,a.kt)("p",null,"Promise \u4e2d\u7ef4\u62a4\u4e86\u4e24\u4e2a\u9690\u85cf\u5c5e\u6027\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"PromiseResult")," \u7528\u6765\u5b58\u50a8\u6570\u636e")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"PromiseState")," \u8bb0\u5f55 Promise \u7684\u72b6\u6001\uff08\u4e09\u79cd\u72b6\u6001\uff09"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"pending \uff08\u8fdb\u884c\u4e2d\uff09"),(0,a.kt)("li",{parentName:"ul"},"fulfilled\uff08\u5b8c\u6210\uff09 \u901a\u8fc7 resolve \u5b58\u50a8\u6570\u636e\u65f6"),(0,a.kt)("li",{parentName:"ul"},"rejected\uff08\u62d2\u7edd\uff0c\u51fa\u9519\u4e86\uff09 \u51fa\u9519\u4e86\u6216\u901a\u8fc7 reject \u5b58\u50a8\u6570\u636e\u65f6"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"state \u53ea\u80fd\u4fee\u6539\u4e00\u6b21\uff0c\u4fee\u6539\u4ee5\u540e\u6c38\u8fdc\u4e0d\u4f1a\u5728\u53d8"))),(0,a.kt)("p",null,"\u6d41\u7a0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f53 Promise \u521b\u5efa\u65f6\uff0cPromiseState \u521d\u59cb\u503c\u4e3a pending\uff0c"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u901a\u8fc7 resolve \u5b58\u50a8\u6570\u636e\u65f6 PromiseState \u53d8\u4e3a fulfilled\uff08\u5b8c\u6210\uff09",(0,a.kt)("br",{parentName:"li"}),"PromiseResult \u53d8\u4e3a\u5b58\u50a8\u7684\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u901a\u8fc7 reject \u5b58\u50a8\u6570\u636e\u6216\u51fa\u9519\u65f6 PromiseState \u53d8\u4e3a rejected\uff08\u62d2\u7edd\uff0c\u51fa\u9519\u4e86\uff09",(0,a.kt)("br",{parentName:"li"}),"PromiseResult \u53d8\u4e3a\u5b58\u50a8\u7684\u6570\u636e \u6216 \u5f02\u5e38\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u6211\u4eec\u901a\u8fc7 then \u8bfb\u53d6\u6570\u636e\u65f6\uff0c\u76f8\u5f53\u4e8e\u4e3a Promise \u8bbe\u7f6e\u4e86\u56de\u8c03\u51fd\u6570",(0,a.kt)("br",{parentName:"li"}),"\u5982\u679c PromiseState \u53d8\u4e3a fulfilled\uff0c\u5219\u8c03\u7528 then \u7684\u7b2c\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u6765\u8fd4\u56de\u6570\u636e",(0,a.kt)("br",{parentName:"li"}),"\u5982\u679c PromiseState \u53d8\u4e3a rejected\uff0c\u5219\u8c03\u7528 then \u7684\u7b2c\u4e8c\u4e2a\u56de\u8c03\u51fd\u6570\u6765\u8fd4\u56de\u6570\u636e")),(0,a.kt)("h3",{id:"promise-\u4e2d\u7684\u65b9\u6cd5"},"promise \u4e2d\u7684\u65b9\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"then")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"catch")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"finally finally \u7684\u8fd4\u56de\u503c\uff0c\u4e0d\u4f1a\u5b58\u50a8\u5230\u65b0\u7684 Promise \u4e2d"),(0,a.kt)("p",{parentName:"li"},"\u8fd9\u4e09\u4e2a\u65b9\u6cd5\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 Promise, Promise \u4e2d\u4f1a\u5b58\u50a8\u56de\u8c03\u51fd\u6570\u7684\u8fd4\u56de\u503c"))),(0,a.kt)("h3",{id:"\u8bfb\u53d6\u6570\u636e-then"},"\u8bfb\u53d6\u6570\u636e then"),(0,a.kt)("p",null,"\u4ece Promise \u4e2d\u8bfb\u53d6\u6570\u636e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u901a\u8fc7 Promise \u7684\u5b9e\u4f8b\u65b9\u6cd5 then \u6765\u8bfb\u53d6 Promise \u4e2d\u5b58\u50a8\u7684\u6570\u636e")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"then \u9700\u8981\u4e24\u4e2a\u56de\u8c03\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u56de\u8c03\u51fd\u6570\u7528\u6765\u83b7\u53d6 Promise \u4e2d\u7684\u6570\u636e")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7 resolve \u5b58\u50a8\u7684\u6570\u636e\uff0c\u4f1a\u8c03\u7528\u7b2c\u4e00\u4e2a\u51fd\u6570\u8fd4\u56de",(0,a.kt)("br",{parentName:"p"}),"\n","\u53ef\u4ee5\u5728\u7b2c\u4e00\u4e2a\u51fd\u6570\u4e2d\u7f16\u5199\u5904\u7406\u6570\u636e\u7684\u4ee3\u7801")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7 reject \u5b58\u50a8\u7684\u6570\u636e\u6216\u8005\u51fa\u73b0\u5f02\u5e38\u65f6\uff0c\u4f1a\u8c03\u7528\u7b2c\u4e8c\u4e2a\u51fd\u6570\u8fd4\u56de",(0,a.kt)("br",{parentName:"p"}),"\n","\u53ef\u4ee5\u5728\u7b2c\u4e8c\u4e2a\u51fd\u6570\u4e2d\u7f16\u5199\u5904\u7406\u5f02\u5e38\u7684\u4ee3\u7801"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const promise = new Promise((resolve, reject) => {\n  resolve("resolve\u8fd4\u56de\u7684\u6570\u636e");\n});\n\npromise.then(\n  (result) => {\n    console.log(result);\n  },\n  (reason) => {\n    console.log("\u51fa\u9519\u4e86");\n  }\n);\n')),(0,a.kt)("p",null,"\u94fe\u5f0f\u8c03\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function sum(a, b) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve(a + b);\n    }, 1000);\n  });\n}\nsum(123, 456)\n  .then((result) => result + 7)\n  .then((result) => result + 8)\n  .then((result) => console.log(result));\n")),(0,a.kt)("h3",{id:"\u6355\u83b7\u5f02\u5e38-catch"},"\u6355\u83b7\u5f02\u5e38 catch"),(0,a.kt)("p",null,"\u7528\u6cd5\u548c then \u7c7b\u4f3c\uff0c\u4f46\u662f\u53ea\u9700\u8981\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"catch()\u4e2d\u7684\u56de\u8c03\u51fd\u6570\u53ea\u4f1a\u5728 Promise \u88ab\u62d2\u7edd\u65f6\u624d\u8c03\u7528"),(0,a.kt)("li",{parentName:"ul"},"catch() \u76f8\u5f53\u4e8e then(null, reason => {})"),(0,a.kt)("li",{parentName:"ul"},"catch() \u5c31\u662f\u4e00\u4e2a\u4e13\u95e8\u5904\u7406 Promise \u5f02\u5e38\u7684\u65b9\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"promise2.catch((reason) => {\n  console.log(222222);\n});\n")),(0,a.kt)("h3",{id:"finally"},"finally"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65e0\u8bba\u662f\u6b63\u5e38\u5b58\u50a8\u6570\u636e\u8fd8\u662f\u51fa\u73b0\u5f02\u5e38\u4e86\uff0cfinally \u603b\u4f1a\u6267\u884c"),(0,a.kt)("li",{parentName:"ul"},"\u4f46\u662f finally \u7684\u56de\u8c03\u51fd\u6570\u4e2d\u4e0d\u4f1a\u63a5\u6536\u5230\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"finally()\u901a\u5e38\u7528\u6765\u7f16\u5199\u4e00\u4e9b\u65e0\u8bba\u6210\u529f\u4e0e\u5426\u90fd\u8981\u6267\u884c\u4ee3\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'promise2.finally(() => {\n  console.log("\u6ca1\u6709\u4ec0\u4e48\u80fd\u591f\u963b\u6321\u6211\u6267\u884c\u7684\uff01");\n});\n')),(0,a.kt)("h2",{id:"3promise-\u7684\u9759\u6001\u65b9\u6cd5"},"3\u3001promise \u7684\u9759\u6001\u65b9\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Promise.resolve('foo')")," \u521b\u5efa\u4e00\u4e2a\u7acb\u5373\u5b8c\u6210\u7684 Promise",(0,a.kt)("br",{parentName:"li"}),"\u7b49\u4ef7\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"new Promise(resolve => resolve('foo'))")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Promise.reject()")," \u521b\u5efa\u4e00\u4e2a\u7acb\u5373\u62d2\u7edd\u7684 Promise"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Promise.all([...])")," \u540c\u65f6\u8fd4\u56de\u591a\u4e2a Promise \u7684\u6267\u884c\u7ed3\u679c",(0,a.kt)("br",{parentName:"li"}),"\u5176\u4e2d\u6709\u4e00\u4e2a\u62a5\u9519\uff0c\u5c31\u8fd4\u56de\u9519\u8bef"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Promise.allSettled([...])")," \u540c\u65f6\u8fd4\u56de\u591a\u4e2a Promise \u7684\u6267\u884c\u7ed3\u679c(\u65e0\u8bba\u6210\u529f\u6216\u5931\u8d25)",(0,a.kt)("br",{parentName:"li"}),"{status: 'fulfilled', value: 579}",(0,a.kt)("br",{parentName:"li"}),"{status: 'rejected', reason: '\u54c8\u54c8'}"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Promise.race([...])")," \u8fd4\u56de\u6267\u884c\u6700\u5feb\u7684 Promise\uff08\u4e0d\u8003\u8651\u5bf9\u9519\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Promise.any([...])")," \u8fd4\u56de\u6267\u884c\u6700\u5feb\u7684\u5b8c\u6210\u7684 Promise")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Promise.all([\n  sum(123, 456),\n  sum(5, 6),\n  Promise.reject("\u54c8\u54c8"),\n  sum(33, 44),\n]).then((r) => {\n  console.log(r); //false\n});\n\nPromise.allSettled([\n  sum(123, 456),\n  sum(5, 6),\n  Promise.reject("\u54c8\u54c8"),\n  sum(33, 44),\n]).then((r) => {\n  console.log(r);\n});\n\nPromise.race([Promise.reject(1111), sum(123, 456), sum(5, 6), sum(33, 44)])\n  .then((r) => {\n    console.log(r);\n  })\n  .catch((r) => {\n    console.log("\u9519\u8bef");\n  });\n\nPromise.any([Promise.reject(1111), Promise.reject(2222), Promise.reject(3333)])\n  .then((r) => {\n    console.log(r);\n  })\n  .catch((r) => {\n    console.log("\u9519\u8bef", r);\n  });\n')),(0,a.kt)("h2",{id:"4\u4e8b\u4ef6\u5faa\u73af-event-loop"},"4\u3001\u4e8b\u4ef6\u5faa\u73af event loop"),(0,a.kt)("p",null,"JS \u662f\u5355\u7ebf\u7a0b\u7684\uff0c\u5b83\u7684\u8fd0\u884c\u65f6\u57fa\u4e8e\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\uff08event loop\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8c03\u7528\u6808",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6808 \u6808\u662f\u4e00\u79cd\u6570\u636e\u7ed3\u6784\uff0c\u540e\u8fdb\u5148\u51fa"),(0,a.kt)("li",{parentName:"ul"},"\u8c03\u7528\u6808\u4e2d\uff0c\u653e\u7684\u662f\u8981\u6267\u884c\u7684\u4ee3\u7801"))),(0,a.kt)("li",{parentName:"ul"},"\u4efb\u52a1\u961f\u5217",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u961f\u5217 \u961f\u5217\u662f\u4e00\u79cd\u6570\u636e\u7ed3\u6784\uff0c\u5148\u8fdb\u5148\u51fa"),(0,a.kt)("li",{parentName:"ul"},"\u4efb\u52a1\u961f\u5217\u7684\u662f\u5c06\u8981\u6267\u884c\u7684\u4ee3\u7801"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u8c03\u7528\u6808\u4e2d\u7684\u4ee3\u7801\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u961f\u5217\u4e2d\u7684\u4ee3\u7801\u624d\u4f1a\u6309\u7167\u987a\u5e8f\u4f9d\u6b21\u8fdb\u5165\u5230\u6808\u4e2d\u6267\u884c"),(0,a.kt)("li",{parentName:"ul"},"\u5728 JS \u4e2d\u4efb\u52a1\u961f\u5217\u6709\u4e24\u79cd",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5b8f\u4efb\u52a1\u961f\u5217 \uff08\u5927\u90e8\u5206\u4ee3\u7801\u90fd\u53bb\u5b8f\u4efb\u52a1\u961f\u5217\u4e2d\u53bb\u6392\u961f\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5fae\u4efb\u52a1\u961f\u5217 \uff08Promise \u7684\u56de\u8c03\u51fd\u6570\uff08then\u3001catch\u3001finally\uff09\uff09"))),(0,a.kt)("li",{parentName:"ul"},"\u6574\u4e2a\u6d41\u7a0b",(0,a.kt)("br",{parentName:"li"}),"\u2460 \u6267\u884c\u8c03\u7528\u6808\u4e2d\u7684\u4ee3\u7801",(0,a.kt)("br",{parentName:"li"}),"\u2461 \u6267\u884c\u5fae\u4efb\u52a1\u961f\u5217\u4e2d\u7684\u6240\u6709\u4efb\u52a1",(0,a.kt)("br",{parentName:"li"}),"\u2462 \u6267\u884c\u5b8f\u4efb\u52a1\u961f\u5217\u4e2d\u7684\u6240\u6709\u4efb\u52a1")))),(0,a.kt)("h2",{id:"5async-\u548c-await"},"5\u3001async \u548c await"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7 async \u53ef\u4ee5\u5feb\u901f\u7684\u521b\u5efa\u5f02\u6b65\u51fd\u6570 \u5f02\u6b65\u51fd\u6570\u7684\u8fd4\u56de\u503c\u4f1a\u81ea\u52a8\u5c01\u88c5\u5230\u4e00\u4e2a Promise \u4e2d")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728 async \u5f02\u6b65\u51fd\u6570\u4e2d\u53ef\u4ee5\u4f7f\u7528 await \u5173\u952e\u5b57\u6765\u8c03\u7528\u5f02\u6b65\u51fd\u6570")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5f53\u6211\u4eec\u901a\u8fc7 await \u53bb\u8c03\u7528\u5f02\u6b65\u51fd\u6570\u65f6\uff0c\u5b83\u4f1a\u6682\u505c\u4ee3\u7801\u7684\u8fd0\u884c \u76f4\u5230\u5f02\u6b65\u4ee3\u7801\u6267\u884c\u6709\u7ed3\u679c\u65f6\uff0c\u624d\u4f1a\u5c06\u7ed3\u679c\u8fd4\u56de"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"\u6ce8\u610f:await \u53ea\u80fd\u7528\u4e8e async \u58f0\u660e\u7684\u5f02\u6b65\u51fd\u6570\u4e2d\uff0c\u6216 es \u6a21\u5757\u7684\u9876\u7ea7\u4f5c\u7528\u57df\u4e2d\n    await \u963b\u585e\u7684\u53ea\u662f\u5f02\u6b65\u51fd\u6570\u5185\u90e8\u7684\u4ee3\u7801\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5916\u90e8\u4ee3\u7801\n    \u901a\u8fc7 await \u8c03\u7528\u7684\u5f02\u6b65\u4ee3\u7801\u65f6\uff0c\u9700\u8981\u901a\u8fc7 try-catch \u6765\u5904\u7406\u5f02\u5e38\n")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'async function fn3() {\n  try {\n    let result = await sum(123, 456);\n    result = await sum(result, 9);\n    result = await sum(result, 100);\n    console.log(result);\n  } catch (e) {\n    console.log("\u51fa\u9519\u4e86");\n  }\n}\n')),(0,a.kt)("p",null,"\u5982\u679c async \u51fd\u6570\u4e2d\u6ca1\u6709\u5199 await \uff0c\u90a3\u4e48\u5b83\u5c31\u4e0d\u662f\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"async function fn4() {\n  console.log(1);\n  console.log(2);\n  console.log(3);\n}\n")),(0,a.kt)("p",null,"\u5f53\u4f7f\u7528 await \u8c03\u7528\u51fd\u6570\u540e\uff0c\u5f53\u524d\u51fd\u6570\u540e\u9762\u6240\u6709\u7684\u4ee3\u7801 \u4f1a\u5728\u5f53\u524d\u51fd\u6570\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u88ab\u653e\u5165\u5230\u5fae\u4efb\u52a1\u961f\u5217\u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"async function fn4() {\n  console.log(1);\n\n  await console.log(2);\n  /* \n        await\u540e\u9762\u7684\u6240\u6709\u7684\u4ee3\u7801\uff0c\u90fd\u4f1a\u653e\u5165\u5230\u5fae\u4efb\u52a1\u961f\u5217\u4e2d\u6267\u884c\n    */\n  console.log(3);\n}\n")))}u.isMDXComponent=!0},693:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/02-0066e743a95049ff8cba471aaec64b51.png"},7444:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/03-283f5ff01fc21e3d5f4e63d81677f764.png"}}]);