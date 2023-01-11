"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5555],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),m=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},i=function(e){var n=m(e.components);return a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),c=m(t),d=r,g=c["".concat(o,".").concat(d)]||c[d]||s[d]||l;return t?a.createElement(g,p(p({ref:n},i),{},{components:t})):a.createElement(g,p({ref:n},i))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=c;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,p[1]=u;for(var m=2;m<l;m++)p[m]=t[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8014:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var a=t(7462),r=(t(7294),t(3905));const l={},p="\u4e8c\u3001Vue \u57fa\u7840",u={unversionedId:"Vue3/vue\u57fa\u7840",id:"Vue3/vue\u57fa\u7840",title:"\u4e8c\u3001Vue \u57fa\u7840",description:"1\u3001\u4ee3\u7406\u5bf9\u8c61",source:"@site/docs/8.Vue3/2.vue\u57fa\u7840.md",sourceDirName:"8.Vue3",slug:"/Vue3/vue\u57fa\u7840",permalink:"/docs/Vue3/vue\u57fa\u7840",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e00\u3001Vue \u7b80\u4ecb",permalink:"/docs/Vue3/vue\u7b80\u4ecb"},next:{title:"React \u7b80\u4ecb",permalink:"/docs/React/React\u7b80\u4ecb"}},o={},m=[{value:"1\u3001\u4ee3\u7406\u5bf9\u8c61",id:"1\u4ee3\u7406\u5bf9\u8c61",level:2},{value:"2\u3001data \u51fd\u6570",id:"2data-\u51fd\u6570",level:2},{value:"3\u3001\u54cd\u5e94\u5f0f\u7684\u539f\u7406 --\u4ee3\u7406 Proxy",id:"3\u54cd\u5e94\u5f0f\u7684\u539f\u7406---\u4ee3\u7406-proxy",level:2},{value:"3\u3001methods",id:"3methods",level:2},{value:"4\u3001\u8ba1\u7b97\u5c5e\u6027 computed",id:"4\u8ba1\u7b97\u5c5e\u6027-computed",level:2}],i={toc:m};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4e8cvue-\u57fa\u7840"},"\u4e8c\u3001Vue \u57fa\u7840"),(0,r.kt)("h2",{id:"1\u4ee3\u7406\u5bf9\u8c61"},"1\u3001\u4ee3\u7406\u5bf9\u8c61"),(0,r.kt)("p",null,"App.vue \u6839\u7ec4\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\uff0c\u4e00\u4e2a\u7ec4\u4ef6\u53ef\u4ee5\u521b\u5efa\u591a\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b"),(0,r.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u5c31\u662f\u4e00\u4e2a\u666e\u901a\u7684 js \u5bf9\u8c61")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script>\n  export default {\n    data() {\n      return {\n        msg: "\u6211\u7231Vue",\n      };\n    },\n    created() {\n      this.$data.name = "\u5b59\u609f\u7a7a";\n    },\n  };\n<\/script>\n\n<template>\n  <h1>{{msg}}</h1>\n  <h2>{{name}}</h2>\n</template>\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"createApp(App)"),"\u5c06\u6839\u7ec4\u4ef6\u5173\u8054\u5230\u5e94\u7528\u4e0a"),(0,r.kt)("p",{parentName:"li"},"\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5e94\u7528\u5b9e\u4f8b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'app.mount("#app")'),"\u5c06\u5e94\u7528\u6302\u8f7d\u5230\u9875\u9762\u4e2d"),(0,r.kt)("p",{parentName:"li"},"\u4f1a\u8fd4\u56de\u4e00\u4e2a\u6839\u7ec4\u4ef6\u7684\u5b9e\u4f8b\uff0c\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u901a\u5e38\u53ef\u4ee5\u547d\u540d\u4e3a vm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7ec4\u4ef6\u5b9e\u4f8b\u662f\u4e00\u4e2a Proxy \u5bf9\u8c61\uff08\u4ee3\u7406\u5bf9\u8c61\uff09"))),(0,r.kt)("p",null,"index.js \u6839\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { createApp } from "vue";\nimport App from "./App.vue";\n\nconst app = createApp(App);\nconst vm = app.mount("#app");\n// \u56e0\u4e3aes\u6a21\u5757\u5316 \u6bcf\u4e2a\u6a21\u5757\u90fd\u662f\u4e00\u4e2a\u4f5c\u7528\u57df\uff0c\u6240\u6709\u65e0\u6cd5\u5728\u63a7\u5236\u53f0\u8bbf\u95eevm\n// \u5c06vm\u8bbe\u7f6e\u4e3a\u5168\u5c40\nwindow.vm = vm;\n// createApp(App).mount("#app");\n')),(0,r.kt)("h2",{id:"2data-\u51fd\u6570"},"2\u3001data \u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'data(){\n      // console.log(this);\n      // \u76f4\u63a5\u5411\u7ec4\u4ef6\u5b9e\u4f8b\u4e2d\u6dfb\u52a0\u7684\u5c5e\u6027\u4e0d\u4f1a\u88abvue\u6240\u4ee3\u7406\uff0c\u4e0d\u662f\u54cd\u5e94\u6570\u636e\uff0c\u4fee\u6539\u540e\u9875\u9762\u4e0d\u4f1a\u53d1\u751f\u6539\u53d8\n      this.name="\u5b59\u609f\u7a7a"\n\n      // vm.$data \u662f\u5b9e\u9645\u4ee3\u7406\u5bf9\u8c61\uff0c\u901a\u8fc7vm\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u5230$data\u4e2d\u7684\u5c5e\u6027\n      // vm.$data.msg \u7b49\u4ef7\u4e8e vm.msg\n\n      // data\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0cvue\u4f1a\u5bf9\u8be5\u5bf9\u8c61\u8fdb\u884c\u4ee3\u7406\n      // \u4ece\u800c\u5c06\u5176\u8f6c\u6362\u4e3a\u54cd\u5e94\u5f0f\u6570\u636e\uff0c\u54cd\u5e94\u5f0f\u6570\u636e\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u7ec4\u4ef6\u5b9e\u4f8b\u5316\n      return{\n        msg:"\u6211\u7231Vue"\n        // vue\u5728\u6784\u5efa\u54cd\u5e94\u5f0f\u5bf9\u8c61\u65f6\uff0c\u4f1a\u540c\u65f6\u5c06\u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027\u4e5f\u505a\u6210\u54cd\u5e94\u5f0f\n        stu:{\n          name:"\u5b59\u609f\u7a7a",\n          age:18,\n          gender:"\u7537"\n        },\n        // \u6570\u7ec4\u4e5f\u662f\u54cd\u5e94\u5f0f\u6570\u636e\n        arr: ["\u5b59\u609f\u7a7a", "\u79df\u516b\u6212", "\u6c99\u548c\u5c1a"],\n        hello:null\n      }\n}\n')),(0,r.kt)("p",null,"\u6709\u4e9b\u573a\u666f\u4e0b\uff0c\u53ef\u4ee5\u901a\u8fc7 shallowReactive( )\u6765\u521b\u5efa\u4e00\u4e2a\u6d45\u5c42\u7684\u54cd\u5e94\u5f0f\u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'return shallowReactive({\n  msg: "\u4eca\u5929\u5929\u6c14\u771f\u4e0d\u9519",\n  stu: {\n    name: "\u5b59\u609f\u7a7a",\n    age: 18,\n    gender: "\u7537",\n  },\n});\n')),(0,r.kt)("h2",{id:"3\u54cd\u5e94\u5f0f\u7684\u539f\u7406---\u4ee3\u7406-proxy"},"3\u3001\u54cd\u5e94\u5f0f\u7684\u539f\u7406 --\u4ee3\u7406 Proxy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u76f4\u63a5\u4fee\u6539\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u90a3\u4e48\u5c31\u662f\u4ec5\u4ec5\u4fee\u6539\u4e86\u5c5e\u6027\uff0c\u6ca1\u6709\u53bb\u505a\u5176\u4ed6\u7684\u4e8b\u60c5\n\u8fd9\u6837\u53ea\u4f1a\u5f71\u54cd\u5bf9\u8c61\u81ea\u8eab\uff0c\u4e0d\u4f1a\u5bfc\u81f4\u5143\u7d20\u7684\u91cd\u65b0\u6e32\u67d3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5e0c\u671b\u5728\u4fee\u6539\u4e00\u4e2a\u5c5e\u6027\u7684\u540c\u65f6\uff0c\u53ef\u4ee5\u8fdb\u884c\u4e00\u4e9b\u5176\u4ed6\u7684\u64cd\u4f5c\uff0c\u6bd4\u5982\u89e6\u53d1\u5143\u7d20\u91cd\u65b0\u6e32\u67d3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8981\u5b9e\u73b0\u8fd9\u4e2a\u76ee\u7684\uff0c\u5fc5\u987b\u8981\u5bf9\u5bf9\u8c61\u8fdb\u884c\u6539\u9020\uff0cvue3 \u4e2d\u4f7f\u7528\u7684\u662f\u4ee3\u7406\u6a21\u5f0f\u6765\u5b8c\u6210\u5bf9\u8c61\u7684\u6539\u9020"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// \u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\nconst obj = {\n  name: "\u5b59\u609f\u7a7a",\n  age: 18,\n};\n\n// \u6765\u4e3a\u5bf9\u8c61\u521b\u5efa\u4e00\u4e2a\u4ee3\u7406\nconst handler = {\n  // get\u7528\u6765\u6307\u5b9a\u8bfb\u53d6\u6570\u636e\u65f6\u7684\u884c\u4e3a\uff0c\u5b83\u7684\u8fd4\u56de\u503c\u5c31\u662f\u6700\u7ec8\u8bfb\u53d6\u5230\u7684\u503c\n  //   \u6307\u5b9aget\u540e\uff0c\u5728\u901a\u8fc7\u4ee3\u7406\u8bfb\u53d6\u5bf9\u8c61\u5c5e\u6027\u65f6\uff0c\u5c31\u4f1a\u8c03\u7528get\u65b9\u6cd5\u6765\u83b7\u53d6\u503c\n  get(target, prop, receiver) {\n    // \u8fd4\u56de\u503c\u4e4b\u524d\u505a\u4e00\u4e9b\u5176\u4ed6\u7684\u64cd\u4f5c...\n    // \u5728vue\u4e2d\uff0cdata()\u8fd4\u56de\u7684\u6570\u636e\u90fd\u4f1a\u88abvue\u4ee3\u7406\n    // vue\u4ee3\u7406\u540e\uff0c\u5f53\u6211\u4eec\u901a\u8fc7\u4ee3\u7406\u53bb\u8bfb\u53d6\u5c5e\u6027\u65f6\uff0c\u8fd4\u56de\u503c\u4e4b\u524d\uff0c\u5b83\u5148\u4f1a\u505a\u4e49\u5de5\u8ddf\u8e2a\u7684\u64cd\u4f5c\n    //   \u5f53\u6211\u4eec\u901a\u8fc7\u4ee3\u7406\u53bb\u4fee\u6539\u5c5e\u6027\u65f6\uff0c\u4fee\u6539\u540e\uff0c\u4f1a\u901a\u77e5\u6240\u6709\u7528\u5230\u8be5\u503c\u7684\u4f4d\u7f6e\u8fdb\u884c\u66f4\u65b0\n\n    // track\u8ffd\u8e2a\u8c01\u7528\u4e86\u8fd9\u4e2a\u5c5e\u6027\n    /*\n        \u4e09\u4e2a\u53c2\u6570\uff1a\n            target  \u88ab\u4ee3\u7406\u7684\u5bf9\u8c61\n            prop \u8bfb\u53d6\u7684\u5c5e\u6027\n            receiver \u4ee3\u7406\u5bf9\u8c61 \n    */\n    return target[prop];\n  },\n\n  //  set\u4f1a\u5728\u901a\u8fc7\u4ee3\u7406\u4fee\u6539\u5bf9\u8c61\u65f6\u8c03\u7528\n  set(target, prop, value, receiver) {\n    // console.log(target, prop, value, receiver);\n    target[prop] = value;\n\n    // trigger() \u89e6\u53d1\u6240\u6709\u7684\u4f7f\u7528\u8be5\u503c\u7684\u7684\u4f4d\u7f6e\u8fdb\u884c\u66f4\u65b0\n    // \u503c\u4fee\u6539\u540e\u505a\u4e00\u4e9b\u5176\u4ed6\u7684\u64cd\u4f5c\n  },\n}; //handler \u7528\u6765\u6307\u5b9a\u4ee3\u7406\u7684\u884c\u4e3a\n\n//\u521b\u5efa\u4ee3\u7406\nconst proxy = new Proxy(obj, handler);\n\n// \u4fee\u6539\u4ee3\u7406\u5c5e\u6027\nproxy.age = 28;\nconsole.log(proxy.age);\n')),(0,r.kt)("h2",{id:"3methods"},"3\u3001methods"),(0,r.kt)("p",null,"methods \u7528\u6765\u6307\u5b9a\u5b9e\u4f8b\u5bf9\u8c61\u4e2d\u7684\u65b9\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b83\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u53ef\u4ee5\u5728\u5b83\u91cc\u8fb9\u5b9a\u4e49\u591a\u4e2a\u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"\u8fd9\u4e9b\u65b9\u6cd5\u6700\u7ec8\u4f1a\u88ab\u6302\u8f7d\u5230\u7ec4\u4ef6\u5b9e\u4f8b\u4e0a"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u7ec4\u4ef6\u5b9e\u4f8b\u6765\u8c03\u7528\u8fd9\u4e9b\u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"\u6240\u6709\u7ec4\u4ef6\u5b9e\u4f8b\u4e0a\u7684\u5c5e\u6027\u90fd\u53ef\u4ee5\u5728\uff0c\u6a21\u677f\u4e2d\u76f4\u63a5\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"methods \u4e2d\u51fd\u6570\u7684 this \u4f1a\u88ab\u81ea\u52a8\u7ed1\u5b9a\u4e3a\u7ec4\u4ef6\u5b9e\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script>\n  import MybuttonVue from "./components/Mybutton.vue";\n  export default {\n    // data \u7528\u6765\u6307\u5b9a\u5b9e\u4f8b\u5bf9\u8c61\u4e2d\u7684\u54cd\u5e94\u5f0f\u5c5e\u6027\n    data() {\n      return {\n        msg: "\u4eca\u5929\u5929\u6c14\u771f\u4e0d\u9519",\n      };\n    },\n    // methods\u7684\u65b9\u6cd5\u6bcf\u6b21\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u65f6\u90fd\u4f1a\u8c03\u7528\n    methods: {\n      sum(a, b) {\n        console.log(this); //\u7ec4\u4ef6\u5b9e\u4f8b vm\n        return a + b;\n      },\n      changeMsg() {\n        this.msg = "\u65b0\u7684\u6d88\u606f";\n      },\n    },\n  };\n<\/script>\n<template>\n  <h1>{{msg}}</h1>\n  <h2>{{sum(2,5)}}</h2>\n  <button @click="changeMsg">\u70b9\u6211\u4e00\u4e0b</button>\n</template>\n')),(0,r.kt)("h2",{id:"4\u8ba1\u7b97\u5c5e\u6027-computed"},"4\u3001\u8ba1\u7b97\u5c5e\u6027 computed"),(0,r.kt)("p",null,"computed:\u7528\u6765\u6307\u5b9a\u8ba1\u7b97\u7684\u5c5e\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u5c5e\u6027\uff0c\u53ea\u5728\u5176\u4f9d\u8d56\u7684\u6570\u636e\u53d1\u9001\u53d8\u5316\u65f6\u624d\u4f1a\u91cd\u65b0\u6267\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u4f1a\u5bf9\u6570\u636e\u8fdb\u884c\u7f13\u5b58")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script>\n  import MybuttonVue from "./components/Mybutton.vue";\n  export default {\n    // data \u7528\u6765\u6307\u5b9a\u5b9e\u4f8b\u5bf9\u8c61\u4e2d\u7684\u54cd\u5e94\u5f0f\u5c5e\u6027\n    data() {\n      return {\n        stu: {\n          name: "\u5b59\u609f\u7a7a",\n          age: 18,\n          gender: "\u7537",\n        },\n        firstName: "\u609f\u7a7a",\n        lastName: "\u5b59",\n      };\n    },\n    computed: {\n      info() {\n        // \u5728\u8ba1\u7b97\u5c5e\u6027\u7684getter\u4e2d\uff0c\u5c3d\u91cf\u53ea\u505a\u8bfb\u53d6\u76f8\u5173\u7684\u903b\u8f91\n        // \u4e0d\u8981\u6267\u884c\u90a3\u4e9b\u4f1a\u53c2\u6570\uff08\u526f\uff09\u4f5c\u7528\u7684\u4ee3\u7801\n        return this.stu.age >= 18 ? "\u6210\u5e74\u4e86" : "\u672a\u6210\u5e74";\n      },\n      // \u8ba1\u7b97\u5c5e\u6027\u7684\u7b80\u5199\uff08\u53ea\u6709getter\uff09\n      // name(){\n      //   return this.lastName+this.firstName\n      // }\n      // \u53ef\u4ee5\u4e3a\u8ba1\u7b97\u5c5e\u6027\u6dfb\u52a0setter\uff0c\u4f7f\u5f97\u8ba1\u7b97\u5c5e\u6027\u53ef\u5199\uff0c\u4f46\u662f\u4e0d\u5efa\u8bae\u8fd9\u4e48\u505a\n      name: {\n        get() {\n          return this.lastName + this.firstName;\n        },\n        set(value) {\n          (this.lastName = value[0]), (this.firstName = value.slice(1));\n        },\n      },\n    },\n  };\n<\/script>\n<template>\n  <h1>{{stu.name}}--{{stu.age}}--{{stu.gender}}</h1>\n  \x3c!-- <h2>{{stu.age>=18?"\u6210\u5e74\u4e86":"\u672a\u6210\u5e74"}}</h2> --\x3e\n  <h2>{{info}}</h2>\n  <button @click="updateAge">\u51cf\u9f84</button>\n  <h3>{{name}}</h3>\n</template>\n')))}s.isMDXComponent=!0}}]);