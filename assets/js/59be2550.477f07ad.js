"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2715],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=l.createContext({}),i=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return l.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(n),p=a,b=d["".concat(c,".").concat(p)]||d[p]||m[p]||r;return n?l.createElement(b,o(o({ref:t},u),{},{components:n})):l.createElement(b,o({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<r;i++)o[i]=n[i];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var l=n(7462),a=(n(7294),n(3905));const r={},o="\u4e00\u3001dom \u7684\u64cd\u4f5c",s={unversionedId:"Dom/dom\u7684\u64cd\u4f5c",id:"Dom/dom\u7684\u64cd\u4f5c",title:"\u4e00\u3001dom \u7684\u64cd\u4f5c",description:"1\u3001dom \u7684\u83b7\u53d6",source:"@site/docs/4.Dom/1.dom\u7684\u64cd\u4f5c.md",sourceDirName:"4.Dom",slug:"/Dom/dom\u7684\u64cd\u4f5c",permalink:"/docs/Dom/dom\u7684\u64cd\u4f5c",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e8c\u3001\u57fa\u672c\u6570\u636e\u7c7b\u578b",permalink:"/docs/JS\u57fa\u7840/JS\u7684\u57fa\u672c\u6570\u636e\u7c7b\u578b"},next:{title:"\u4e8c\u3001dom \u4e2d\u7684\u8282\u70b9",permalink:"/docs/Dom/dom\u4e2d\u7684\u8282\u70b9"}},c={},i=[{value:"1\u3001dom \u7684\u83b7\u53d6",id:"1dom-\u7684\u83b7\u53d6",level:2},{value:"2\u3001\u4f2a\u6570\u7ec4",id:"2\u4f2a\u6570\u7ec4",level:2},{value:"3\u3001\u64cd\u4f5c\u5143\u7d20\u91cc\u7684\u5185\u5bb9",id:"3\u64cd\u4f5c\u5143\u7d20\u91cc\u7684\u5185\u5bb9",level:2},{value:"4\u3001\u884c\u5185\u6837\u5f0f\u7684\u64cd\u4f5c",id:"4\u884c\u5185\u6837\u5f0f\u7684\u64cd\u4f5c",level:2},{value:"\u83b7\u53d6\u884c\u5185\u6837\u5f0f",id:"\u83b7\u53d6\u884c\u5185\u6837\u5f0f",level:3},{value:"\u8bbe\u7f6e\u884c\u95f4\u6837\u5f0f",id:"\u8bbe\u7f6e\u884c\u95f4\u6837\u5f0f",level:3},{value:"5\u3001\u7c7b\u540d\u64cd\u4f5c",id:"5\u7c7b\u540d\u64cd\u4f5c",level:2},{value:"\u901a\u8fc7 className \u64cd\u4f5c",id:"\u901a\u8fc7-classname-\u64cd\u4f5c",level:3},{value:"\u83b7\u53d6\u5143\u7d20\u7684\u7c7b\u540d",id:"\u83b7\u53d6\u5143\u7d20\u7684\u7c7b\u540d",level:4},{value:"\u8bbe\u7f6e\u5143\u7d20\u7684\u7c7b\u540d",id:"\u8bbe\u7f6e\u5143\u7d20\u7684\u7c7b\u540d",level:4},{value:"\u901a\u8fc7\u7c7b\u540d\u5bf9\u8c61\u64cd\u4f5c",id:"\u901a\u8fc7\u7c7b\u540d\u5bf9\u8c61\u64cd\u4f5c",level:3},{value:"1.\u83b7\u53d6\u5143\u7d20\u7c7b\u540d\u7684\u4e2a\u6570:\u5143\u7d20.classList.length",id:"1\u83b7\u53d6\u5143\u7d20\u7c7b\u540d\u7684\u4e2a\u6570\u5143\u7d20classlistlength",level:4},{value:"2.\u7ed9\u5143\u7d20\u6dfb\u52a0\u7c7b\u540d\uff1a \u5143\u7d20.classList.add(&quot;\u7c7b\u540d&quot;)",id:"2\u7ed9\u5143\u7d20\u6dfb\u52a0\u7c7b\u540d-\u5143\u7d20classlistadd\u7c7b\u540d",level:4},{value:"3.\u5c06\u5143\u7d20\u7684\u7c7b\u540d\u5220\u9664\uff1a\u5143\u7d20.classList.remove(&quot;\u7c7b\u540d&quot;)",id:"3\u5c06\u5143\u7d20\u7684\u7c7b\u540d\u5220\u9664\u5143\u7d20classlistremove\u7c7b\u540d",level:4},{value:"4.\u5224\u65ad\u5143\u7d20\u662f\u5426\u5305\u542b\u67d0\u4e2a\u7c7b\u540d\uff1a \u5143\u7d20.classList.contains(&quot;\u7c7b\u540d&quot;)",id:"4\u5224\u65ad\u5143\u7d20\u662f\u5426\u5305\u542b\u67d0\u4e2a\u7c7b\u540d-\u5143\u7d20classlistcontains\u7c7b\u540d",level:4},{value:"5.\u5224\u65ad\u5143\u7d20\u662f\u5426\u6709\u67d0\u4e2a\u7c7b\u540d\uff0c\u5982\u679c\u6709\u5c31\u5220\u9664\uff0c\u5426\u5219\u5c31\u6dfb\u52a0\u8fd9\u4e2a\u7c7b\u540d: \u5143\u7d20.classList.toggle(&quot;\u7c7b\u540d&quot;)",id:"5\u5224\u65ad\u5143\u7d20\u662f\u5426\u6709\u67d0\u4e2a\u7c7b\u540d\u5982\u679c\u6709\u5c31\u5220\u9664\u5426\u5219\u5c31\u6dfb\u52a0\u8fd9\u4e2a\u7c7b\u540d-\u5143\u7d20classlisttoggle\u7c7b\u540d",level:4},{value:"6\u3001JS \u4e2d\u51e0\u4e2a\u7279\u6b8a\u7684\u6807\u7b7e",id:"6js-\u4e2d\u51e0\u4e2a\u7279\u6b8a\u7684\u6807\u7b7e",level:2},{value:"html \u6807\u7b7e \u7b80\u5199\u5f62\u5f0f",id:"html-\u6807\u7b7e-\u7b80\u5199\u5f62\u5f0f",level:4},{value:"body \u6807\u7b7e \u7b80\u5199\u5f62\u5f0f",id:"body-\u6807\u7b7e-\u7b80\u5199\u5f62\u5f0f",level:4},{value:"\u83b7\u53d6 head \u6807\u7b7e \u7b80\u5199\u5f62\u5f0f",id:"\u83b7\u53d6-head-\u6807\u7b7e-\u7b80\u5199\u5f62\u5f0f",level:4},{value:"\u83b7\u53d6 title \u6807\u7b7e\u91cc\u7684\u5185\u5bb9 \u7b80\u5199\u5f62\u5f0f",id:"\u83b7\u53d6-title-\u6807\u7b7e\u91cc\u7684\u5185\u5bb9-\u7b80\u5199\u5f62\u5f0f",level:4}],u={toc:i};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,l.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e00dom-\u7684\u64cd\u4f5c"},"\u4e00\u3001dom \u7684\u64cd\u4f5c"),(0,a.kt)("h2",{id:"1dom-\u7684\u83b7\u53d6"},"1\u3001dom \u7684\u83b7\u53d6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div id="mydiv">\u6211\u662fdiv<span>\u6211\u662fdiv\u91cc\u7684span</span></div>\n<span class="myspan">\u6211\u662fspan\u6807\u7b7e</span>\n<p>\u6211\u662fp\u6807\u7b7e111</p>\n<p>\u6211\u662fp\u6807\u7b7e222</p>\n<ul>\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n</ul>\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 id \u540d\u83b7\u53d6\u5143\u7d20\u8282\u70b9")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var myDivEle = document.getElementById("mydiv");\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 class \u540d\u83b7\u53d6\u5143\u7d20\u8282\u70b9",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f1a\u83b7\u5f97\u4e00\u4e2a\u4f2a\u6570\u7ec4 HTMLCollection \u4e0d\u80fd\u4f7f\u7528\u6570\u7ec4\u7684 Api"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Elements \u83b7\u53d6\u7684\u662f\u4e00\u4e2a\u4f2a\u6570\u7ec4\uff0c\u4f1a\u628a\u5143\u7d20\u653e\u5728\u4f2a\u6570\u7ec4\u91cc")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var mySpanEle = document.getElementsByClassName("myspan");\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6807\u7b7e\u540d\u79f0\u83b7\u53d6\u5143\u7d20")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var pEles = document.getElementsByTagName("p");\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7 css \u9009\u62e9\u5668\u83b7\u53d6\u5143\u7d20"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5355\u4e2a\u5143\u7d20 querySelector()")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/* \u901a\u8fc7\u7c7b\u540d\u83b7\u53d6\u5355\u4e2a\u5143\u7d20\u8282\u70b9 */\nvar ele = document.querySelector(".myspan");\n/* \u901a\u8fc7id\u540d\u83b7\u53d6\u5355\u4e2a\u5143\u7d20\u8282\u70b9 */\nvar div = document.querySelector(".#mydiv");\n// document \u662f\u8303\u56f4\uff0c\u8868\u793a\u5728document\u8303\u56f4\u5185\u83b7\u53d6\u5143\u7d20\n// \u7f29\u5c0f\u8303\u56f4\nvar span = div.querySelector("span");\n/* \u6ce8\u610f\uff1a\u5373\u4f7f\u6709\u591a\u4e2a\u5143\u7d20\u7b26\u5408\u6761\u4ef6\uff0cnm\u901a\u8fc7querySelector\u4e5f\u53ea\u80fd\u83b7\u53d6\u7b2c\u4e00\u4e2a\u5143\u7d20 */\n')),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u591a\u4e2a\u5143\u7d20 querySelectorAll()")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var ele = document.querySelector("span");\nconsole.dir(ele); //\u6df1\u5c42\u6b21\u6253\u5370\u6570\u636e\n/*\n \u901a\u8fc7querySelectorAll()\u83b7\u53d6\u7684\u4e5f\u662f\u4e00\u4e2a\u4f2a\u6570\u7ec4\n \u5373\u4f7f\u53ea\u6709\u4e00\u4e2a\u5143\u7d20\u4e5f\u4f1a\u8fd4\u56de\u4e00\u4e2a\u4f2a\u6570\u7ec4\n*/\n')))),(0,a.kt)("h2",{id:"2\u4f2a\u6570\u7ec4"},"2\u3001\u4f2a\u6570\u7ec4"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6590).Z,width:"1055",height:"249"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f2a\u6570\u7ec4\u548c\u6570\u7ec4\u7c7b\u4f3c\u4f46\u4e0d\u80fd\u4f7f\u7528\u6570\u7ec4\u7684 api"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u4f2a\u6570\u7ec4\u8f6c\u6362\u4e3a\u6570\u7ec4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"var \u6570\u7ec4=","[...\u4f2a\u6570\u7ec4]"),(0,a.kt)("li",{parentName:"ul"},"var \u6570\u7ec4=Array.form(\u4f2a\u6570\u7ec4)")))),(0,a.kt)("h2",{id:"3\u64cd\u4f5c\u5143\u7d20\u91cc\u7684\u5185\u5bb9"},"3\u3001\u64cd\u4f5c\u5143\u7d20\u91cc\u7684\u5185\u5bb9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"element.textContent \u83b7\u53d6\u6216\u4fee\u6539\u5143\u7d20\u4e2d\u7684\u6587\u672c\u5185\u5bb9",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u7684\u662f\u6807\u7b7e\u4e2d\u7684\u5185\u5bb9\uff0c\u4e0d\u4f1a\u8003\u8651 css \u6837\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u5b57\u7b26\u4e32\u4e2d\u6709\u6807\u7b7e\u65f6\uff0c\u4f1a\u81ea\u52a8\u5bf9\u6807\u7b7e\u8fdb\u884c\u8f6c\u4e49"))),(0,a.kt)("li",{parentName:"ul"},"element.innerText \u83b7\u53d6\u6216\u4fee\u6539\u5143\u7d20\u4e2d\u7684\u6587\u672c\u5185\u5bb9",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"innerText \u83b7\u53d6\u5185\u5bb9\u65f6\uff0c\u4f1a\u8003\u8651 css \u6837\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u5b57\u7b26\u4e32\u4e2d\u6709\u6807\u7b7e\u65f6\uff0c\u4f1a\u81ea\u52a8\u5bf9\u6807\u7b7e\u8fdb\u884c\u8f6c\u4e49"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 innerText \u53bb\u8bfb\u53d6 CSS \u6837\u5f0f\uff0c\u4f1a\u89e6\u53d1\u7f51\u9875\u7684\u91cd\u6392\uff08\u8ba1\u7b97 CSS \u6837\u5f0f\uff09"))),(0,a.kt)("li",{parentName:"ul"},"element.innerHTML \u83b7\u53d6\u6216\u4fee\u6539\u5143\u7d20\u4e2d\u7684 html \u4ee3\u7801",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u76f4\u63a5\u5411\u5143\u7d20\u4e2d\u6dfb\u52a0 html \u4ee3\u7801"),(0,a.kt)("li",{parentName:"ul"},"innerHTML \u63d2\u5165\u5185\u5bb9\u65f6\uff0c\u6709\u88ab xss \u6ce8\u5165\u7684\u98ce\u9669")))),(0,a.kt)("h2",{id:"4\u884c\u5185\u6837\u5f0f\u7684\u64cd\u4f5c"},"4\u3001\u884c\u5185\u6837\u5f0f\u7684\u64cd\u4f5c"),(0,a.kt)("h3",{id:"\u83b7\u53d6\u884c\u5185\u6837\u5f0f"},"\u83b7\u53d6\u884c\u5185\u6837\u5f0f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \uff1a\u83b7\u53d6\u5143\u7d20\u6837\u5f0f\u7684\u65f6\u5019 \uff0c\u53ea\u80fd\u83b7\u53d6\u884c\u95f4\u6837\u5f0f \u4e0d\u80fd\u83b7\u53d6 \u5185\u5d4c \u548c\u5916\u94fe\u7684\u6837\u5f0f \uff1b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<div class="box" style="color:red;width:300px;height:300px">\u6211\u662fboxdiv</div>\n<button class="btn1">\u70b9\u51fb\u6211\u83b7\u53d6\u6837\u5f0f</button>\n\n<script>\nvar boxEle = document.querySelector(".box");\nvar btn1 = document.querySelector(".btn1");\nbtn1.onclick = function () {\n  // \u83b7\u53d6 boxEle\u7684\u6837\u5f0f \uff1b\n  // console.log(boxEle.style);\n  var w = boxEle.style.width; // \u83b7\u53d6 boxEle\u7684\u5bbd\u5ea6\uff1b\u6709\u5355\u4f4d\u7684\uff1b\n  console.log(w);\n};\n<\/script>\n')),(0,a.kt)("h3",{id:"\u8bbe\u7f6e\u884c\u95f4\u6837\u5f0f"},"\u8bbe\u7f6e\u884c\u95f4\u6837\u5f0f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a \u8bbe\u7f6e\u6837\u5f0f\u7684\u65f6\u5019 \uff0c\u5982\u679c\u662f \u5e26 - \u7684\u6837\u5f0f js \u8bbe\u7f6e\u7684\u65f6\u5019\u9700\u8981\u5927\u5199"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<div class="box" style="color:red;width:300px;height:300px">\u6211\u662fboxdiv</div>\n<button class="btn2">\u70b9\u51fb\u6211\u83b7\u53d6\u6837\u5f0f</button>\n\n<script>\nvar btn2 = document.querySelector(".btn2");\nvar boxEle = document.querySelector(".box");\nbtn2.onclick = function () {\n  // \u8bbe\u7f6e \u7c7b\u540d\u4e3a box\u7684 div \u7684 \u5b57\u4f53\u7684\u989c\u8272 \uff1b\n  boxEle.style.color = "white";\n  // boxEle.style.background-color = "blue"; // \u9519\u8bef\u7684\u5199\u6cd5\n  boxEle.style.backgroundColor = "blue";\n  // background-color  ------\x3e js \uff1a backgroundColor \u53bb\u6389- \u7136\u540e\u628a-\u540e\u9762\u7684\u5b57\u7b26\u5927\u5199\n};\n<\/script>\n')),(0,a.kt)("h2",{id:"5\u7c7b\u540d\u64cd\u4f5c"},"5\u3001\u7c7b\u540d\u64cd\u4f5c"),(0,a.kt)("h3",{id:"\u901a\u8fc7-classname-\u64cd\u4f5c"},"\u901a\u8fc7 className \u64cd\u4f5c"),(0,a.kt)("h4",{id:"\u83b7\u53d6\u5143\u7d20\u7684\u7c7b\u540d"},"\u83b7\u53d6\u5143\u7d20\u7684\u7c7b\u540d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<div class="box2 active">\u6211\u662fdiv</div>\n<button class="btn3">\u70b9\u51fb\u6211\u83b7\u53d6\u7c7b\u540d</button>\n\n\nvar btn3 = document.querySelector(".btn3");\nvar box2 = document.querySelector(".box2");\nbtn3.onclick = function () {\n  // \u83b7\u53d6 box2\u5143\u7d20\u7684\u7c7b\u540d\n  var className = box2.className;\n  // \u53ef\u4ee5\u83b7\u53d6 \u5143\u7d20\u7684\u6240\u6709\u7c7b\u540d\uff0c\u5f97\u5230\u7684\u7ed3\u679c\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff1b\n  console.log(className);\n};\n')),(0,a.kt)("h4",{id:"\u8bbe\u7f6e\u5143\u7d20\u7684\u7c7b\u540d"},"\u8bbe\u7f6e\u5143\u7d20\u7684\u7c7b\u540d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  \u6ce8\u610f \uff1a \u8bbe\u7f6e\u7c7b\u540d\u4f1a\u8986\u76d6\u4e4b\u524d\u7684\u7c7b\u540d\u3002\u4f1a\u5bfc\u81f4 \u4e4b\u524d\u7684\u6837\u5f0f\u4e22\u5931\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<div class="box2 active">\u6211\u662fdiv</div>\n<button class="btn4">\u70b9\u51fb\u6211\u8bbe\u7f6e\u7c7b\u540d</button>\n\nvar btn4  = document.querySelector(".btn4");\nvar box2 = document.querySelector(".box2");\nbtn4.onclick = function(){\n// box2.className = "show";  // \u8bbe\u7f6e box2 \u5143\u7d20\u7684\u7c7b\u540d\uff1b\n// \u5728\u4e4b\u524d\u7684\u7c7b\u540d\u57fa\u7840\u4e0a\u6dfb\u52a0 \u7c7b\u540d\n\nbox2.className += " show"; // \u6ce8\u610f\u62fc\u63a5\u7684\u65f6\u5019 \u9700\u8981\u7a7a\u683c\uff1b\n}\n')),(0,a.kt)("h3",{id:"\u901a\u8fc7\u7c7b\u540d\u5bf9\u8c61\u64cd\u4f5c"},"\u901a\u8fc7\u7c7b\u540d\u5bf9\u8c61\u64cd\u4f5c"),(0,a.kt)("p",null,"js \u91cc\u6bcf\u4e2a\u5143\u7d20\u90fd\u4f1a\u63d0\u4f9b\u4e00\u4e2a\u64cd\u4f5c\u7c7b\u540d\u7684\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u53eb classList\uff0c\u63d0\u4f9b\u5404\u79cd\u65b9\u6cd5\u6765\u64cd\u4f5c\u7c7b\u540d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="box cative">\u6211\u662fdiv</div>\n<button class="btn1">\u70b9\u51fb1</button>\n<button class="btn2">\u70b9\u51fb\u6dfb\u52a0\u7c7b\u540d</button>\n<button class="btn3">\u70b9\u51fb\u79fb\u9664\u7c7b\u540d</button>\n<button class="btn4">\u70b9\u51fb\u68c0\u67e5\u7c7b\u540d</button>\n<button class="btn5">\u70b9\u51fb\u6dfb\u52a0\u6216\u5220\u9664\u7c7b\u540d</button>\n')),(0,a.kt)("h4",{id:"1\u83b7\u53d6\u5143\u7d20\u7c7b\u540d\u7684\u4e2a\u6570\u5143\u7d20classlistlength"},"1.\u83b7\u53d6\u5143\u7d20\u7c7b\u540d\u7684\u4e2a\u6570:\u5143\u7d20.classList.length"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var boxEle = document.querySelector(".box");\nvar btn1 = document.querySelector(".btn1");\n\nbtn1.onclick = function () {\n  console.log(boxEle.classList.length);\n};\n')),(0,a.kt)("h4",{id:"2\u7ed9\u5143\u7d20\u6dfb\u52a0\u7c7b\u540d-\u5143\u7d20classlistadd\u7c7b\u540d"},'2.\u7ed9\u5143\u7d20\u6dfb\u52a0\u7c7b\u540d\uff1a \u5143\u7d20.classList.add("\u7c7b\u540d")'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"className \u8d4b\u503c\u4fee\u6539\u7c7b\u540d\u662f\u4e00\u4e2a\u8986\u76d6\u64cd\u4f5c\uff0c\u4f1a\u628a\u4e4b\u524d\u7684\u7c7b\u540d\u8986\u76d6\u6389"),(0,a.kt)("li",{parentName:"ul"},"classList \u63d0\u4f9b\u7684\u6dfb\u52a0\u65b9\u6cd5\u662f\u7c7b\u540d\u7684\u8ffd\u52a0\u64cd\u4f5c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var btn2 = document.querySelector(".btn2");\nbtn2.onclick = function () {\n  boxEle.classList.add("bg");\n};\n')),(0,a.kt)("h4",{id:"3\u5c06\u5143\u7d20\u7684\u7c7b\u540d\u5220\u9664\u5143\u7d20classlistremove\u7c7b\u540d"},'3.\u5c06\u5143\u7d20\u7684\u7c7b\u540d\u5220\u9664\uff1a\u5143\u7d20.classList.remove("\u7c7b\u540d")'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var btn3 = document.querySelector(".btn3");\nbtn3.onclick = function () {\n  boxEle.classList.remove("bg");\n};\n')),(0,a.kt)("h4",{id:"4\u5224\u65ad\u5143\u7d20\u662f\u5426\u5305\u542b\u67d0\u4e2a\u7c7b\u540d-\u5143\u7d20classlistcontains\u7c7b\u540d"},'4.\u5224\u65ad\u5143\u7d20\u662f\u5426\u5305\u542b\u67d0\u4e2a\u7c7b\u540d\uff1a \u5143\u7d20.classList.contains("\u7c7b\u540d")'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var btn4 = document.querySelector(".btn4");\nbtn4.onclick = function () {\n  var flag = boxEle.classList.contains("bg");\n  flag ? console.log("\u5305\u542b") : console.log("\u4e0d\u5305\u542b");\n};\n')),(0,a.kt)("h4",{id:"5\u5224\u65ad\u5143\u7d20\u662f\u5426\u6709\u67d0\u4e2a\u7c7b\u540d\u5982\u679c\u6709\u5c31\u5220\u9664\u5426\u5219\u5c31\u6dfb\u52a0\u8fd9\u4e2a\u7c7b\u540d-\u5143\u7d20classlisttoggle\u7c7b\u540d"},'5.\u5224\u65ad\u5143\u7d20\u662f\u5426\u6709\u67d0\u4e2a\u7c7b\u540d\uff0c\u5982\u679c\u6709\u5c31\u5220\u9664\uff0c\u5426\u5219\u5c31\u6dfb\u52a0\u8fd9\u4e2a\u7c7b\u540d: \u5143\u7d20.classList.toggle("\u7c7b\u540d")'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var btn5 = document.querySelector(".btn5");\nbtn5.onclick = function () {\n  boxEle.classList.toggle("mytest");\n};\n')),(0,a.kt)("h2",{id:"6js-\u4e2d\u51e0\u4e2a\u7279\u6b8a\u7684\u6807\u7b7e"},"6\u3001JS \u4e2d\u51e0\u4e2a\u7279\u6b8a\u7684\u6807\u7b7e"),(0,a.kt)("h4",{id:"html-\u6807\u7b7e-\u7b80\u5199\u5f62\u5f0f"},"html \u6807\u7b7e \u7b80\u5199\u5f62\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var htmlEle = document.documentElement; //html\u6807\u7b7e\nconsole.log(htmlEle);\n")),(0,a.kt)("h4",{id:"body-\u6807\u7b7e-\u7b80\u5199\u5f62\u5f0f"},"body \u6807\u7b7e \u7b80\u5199\u5f62\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var bodyEle = document.body;\nconsole.log(bodyEle);\n")),(0,a.kt)("h4",{id:"\u83b7\u53d6-head-\u6807\u7b7e-\u7b80\u5199\u5f62\u5f0f"},"\u83b7\u53d6 head \u6807\u7b7e \u7b80\u5199\u5f62\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var headEle = document.head;\nconsole.log(headEle);\n")),(0,a.kt)("h4",{id:"\u83b7\u53d6-title-\u6807\u7b7e\u91cc\u7684\u5185\u5bb9-\u7b80\u5199\u5f62\u5f0f"},"\u83b7\u53d6 title \u6807\u7b7e\u91cc\u7684\u5185\u5bb9 \u7b80\u5199\u5f62\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u6ce8\u610f\uff1adocument.title\u4e0d\u662f\u83b7\u53d6title\u6807\u7b7e \u800c\u662f\u83b7\u53d6\u6216\u8bbe\u7f6etitle\u6807\u7b7e\u91cc\u7684\u5185\u5bb9\uff08innerText\uff09\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var titlestr = document.title;\nconsole.log(titlestr);\n// \u8bbe\u7f6etitle\u5185\u5bb9\ndocument.title = "hello";\n')))}m.isMDXComponent=!0},6590:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/01-5dc56edd11fdf0c8f8e9e596e2d3909b.png"}}]);