!function(t){function e(e){for(var n,i,r=e[0],a=e[1],l=0,s=[];l<r.length;l++)i=r[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(c&&c(e);s.length;)s.shift()()}var n={},o={1:0};function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,i){n=o[t]=[e,i]}));e.push(n[2]=r);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=function(t){return i.p+""+t+".bundle.js"}(t);var c=new Error;a=function(e){l.onerror=l.onload=null,clearTimeout(s);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",c.name="ChunkLoadError",c.type=i,c.request=r,n[1](c)}o[t]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/homebrew-wiki/",i.oe=function(t){throw console.error(t),t};var r=window.webpackJsonp=window.webpackJsonp||[],a=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var c=a;i(i.s=13)}([function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var i=(a=o,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),r=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[n].concat(r).concat([i]).join("\n")}var a,l,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);o&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},function(t,e,n){var o={"./pages/404.html":[14,0],"./pages/file1/article1-1.html":[15,2],"./pages/file1/article1-2.html":[16,3],"./pages/file1/file3/article3-1.html":[17,4],"./pages/file1/file3/article3-2.html":[18,5],"./pages/file1/file3/article3-3.html":[19,6],"./pages/file1/file3/file4/article4-1.html":[20,7],"./pages/file1/index.html":[21,8],"./pages/file2/article2-1.html":[22,9],"./pages/file2/index.html":[23,10],"./pages/index.html":[24,11]};function i(t){if(!n.o(o,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[t],i=e[0];return n.e(e[1]).then((function(){return n.t(i,7)}))}i.keys=function(){return Object.keys(o)},i.id=1,t.exports=i},function(t,e){t.exports='<wiki-title title="Cro Wiki"></wiki-title> <style>:host{display:block;padding:5px 20px;background-color:#663399}</style> '},function(t,e){t.exports='<wiki-tree></wiki-tree><div class="vline"></div><wiki-article></wiki-article> <style>:host{height:calc(100vh - 70px);min-height:400px;display:flex}wiki-tree{width:20%;border-right:1px solid #ddd}wiki-content{width:80%}</style> '},function(t,e,n){var o=n(8);t.exports="string"==typeof o?o:o.toString()},function(t,e,n){var o=n(9);t.exports="string"==typeof o?o:o.toString()},function(t,e){t.exports='<div class="contact">Contact</div> <wiki-contact svg="logo-github.svg" text="GitHub" url="https://github.com/yCroma"></wiki-contact> <wiki-contact svg="logo-twitter.svg" text="Twitter" url="https://twitter.com/_yCroma"></wiki-contact> <style>:host{display:block;padding:5px;background-color:#333}div.contact{color:#fff;padding-left:5px}</style> '},function(t,e){class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const t=this.getAttribute("title")||"cannot referenced title";this.shadowRoot.innerHTML=`\n\t\t<a href="/">${t}</a>\n\t\t<style>\n\t\ta {\n\t\t\tfont-size: 2em;\n\t\t\tfont-weight: bold;\n\t\t\ttext-decoration: none;\n\t\t}\n\t\ta:link, :visited {\n\t\t\tcolor: #F0F0F0;\n\t\t}\n\t\ta:hover {\n\n\t\t}\n\t\ta:active, a:focus {\n\n\t\t}\n\t\t</style>\n\t\t`}Style(){const t=document.createElement("style");return t.textContent="\n\t\ta {\n\t\t\tfont-size: 1.7em;\n\t\t\ttext-decoration: none;\n\t\t}\n\t\ta:link, :visited {\n\t\t\tcolor: #F0F0F0;\n\t\t}\n\t\ta:hover {\n\n\t\t}\n\t\ta:active, a:focus {\n\n\t\t}\n\t\t",t}}customElements.define("wiki-title",n)},function(t,e,n){(e=n(0)(!1)).push([t.i,'ul {\n\tmargin: 0;\n\t/* RB を少しだけ強めたグレー */\n\tbackground-color: #FEFCFE;\n\tpadding: 10px;\n\twidth: 100%;\n\tbox-sizing: border-box;\n}\n\nli > ul {\n\tborder-top: 1px solid #F0F0F0;\n\tpadding: 0px;\n\t/*padding-left: 10px;*/\n}\n\n\nli {\n    list-style: none;\n    font-size: 15px;\n}\nli.reaf {\n\tborder-bottom: 1px solid #F0F0F0;\n}\nli.reaf:before {\n\tcontent: "📓";\n    font-size:20px;\n    vertical-align:middle;\n    line-height:20px;\n}\nli.branch {\n\tborder-bottom: 1px solid #F0F0F0;\n}\nli.branch:before {\n\tcontent: "📁";\n    font-size:20px;\n    vertical-align:middle;\n    line-height:20px;\n}\nli.fold > li, li.fold > ul {\n\tdisplay: none;\n}\nli.expand {\n\tborder-bottom: none;\n\tbackground-color: #DFDDDF;\n}\nli.expand:before {\n\tcontent: "📂";\n    font-size:20px;\n    vertical-align:middle;\n    line-height:20px;\n}\nli.expand > ul {\n\tdisplay: block;\n}\n\na {\n\ttext-decoration: none;\n}\na:hover {\n\tcolor: black;\n}\na:link, a:visited {\n\tcolor: #111827;\n}\na:active {\n\tcolor: red;\n}\n',""]),t.exports=e},function(t,e,n){(e=n(0)(!1)).push([t.i,":host {\n\tpadding: 15px 20px;\n}\n",""]),t.exports=e},function(t,e,n){class o extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}async connectedCallback(){const t=this.getAttribute("svg"),e=await n(11)("./"+t).then(t=>t.default).then(t=>t),o=this.getAttribute("text"),i=this.getAttribute("url");this.shadowRoot.innerHTML=`\n\t\t<a href="${i}">${e}${o}</a>\n\t\t`,this.shadowRoot.append(this.style())}importSVG(t){return n(12)(t).then(t=>t.default)}style(){const t=document.createElement("style");return t.textContent="\n\t\timg {\n\t\t\tposition: relative;\n\t\t\ttop: 2px;\n\t\t\twidth: 24px;\n\t\t\theight: 24px;\n\t\t}\n\t\ta {\n\t\t\ttext-decoration: none;\n\t\t}\n\t\ta:hover, a:link, a:visited, a:active, a:focus{\n\t\t\tcolor: white;\n\t\t}\n\t\t.ionicon {\n\t\t\tfill: white;\n\t\t\twidth: 24px;\n\t\t}\n\t\t",t}}customElements.define("wiki-contact",o)},function(t,e,n){var o={"./logo-github.svg":[25,12],"./logo-twitter.svg":[26,13]};function i(t){if(!n.o(o,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[t],i=e[0];return n.e(e[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(o)},i.id=11,t.exports=i},function(t,e){function n(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=12},function(t,e,n){"use strict";n.r(e);var o=n(2),i=n.n(o);class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=i.a}}customElements.define("wiki-header",r);n(7);var a=n(3),l=n.n(a);class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=l.a}style(){const t=document.createElement("style");return t.textContent=`\n\t\t${style_css}\n\t\t`,t}}customElements.define("wiki-content",c);var s=n(4),d=n.n(s);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.append(this.createTree(),this.style()),this.QuerySelector(this.shadowRoot),this.AddEventListener(this.shadowRoot)}createTree(){const t=JSON.parse('[{"name":"file1","path":"/file1/","children":[{"name":"article1-1.html","path":"/file1/article1-1.html","children":[]},{"name":"article1-2.html","path":"/file1/article1-2.html","children":[]},{"name":"file3","path":"/file1/file3/","children":[{"name":"article3-1.html","path":"/file1/file3/article3-1.html","children":[]},{"name":"article3-2.html","path":"/file1/file3/article3-2.html","children":[]},{"name":"article3-3.html","path":"/file1/file3/article3-3.html","children":[]},{"name":"file4","path":"/file1/file3/file4/","children":[{"name":"article4-1.html","path":"/file1/file3/file4/article4-1.html","children":[]}]}]},{"name":"index.html","path":"/file1/index.html","children":[]}]},{"name":"file2","path":"/file2/","children":[{"name":"article2-1.html","path":"/file2/article2-1.html","children":[]},{"name":"index.html","path":"/file2/index.html","children":[]}]},{"name":"index.html","path":"/index.html","children":[]}]'),e=document.createElement("ul");return t.forEach(t=>{this.createBranch(t);const n=t.children.length>0?this.createBranch(t):this.createLeaf(t);e.append(n)}),e}createBranch(t){const e=document.createElement("li"),n=document.createElement("a");n.textContent=""+t.name,n.setAttribute("href",t.path),e.append(n);const o=document.createElement("ul");return t.children.forEach(t=>{const e=t.children.length>0?this.createBranch(t):this.createLeaf(t);o.append(e)}),e.append(o),e}createLeaf(t){const e=document.createElement("a");e.setAttribute("href",t.path),e.textContent=""+t.name;const n=document.createElement("li");return n.append(e),n}style(){const t=document.createElement("style");return t.textContent=`\n\t\t${d.a}\n\t\t`,t}QuerySelector(t){t.querySelectorAll("li").forEach(t=>{t.querySelector("ul")?t.classList.add("fold","branch"):t.classList.add("reaf")})}AddEventListener(t){t.addEventListener("click",t=>{const e=t.target;if("LI"==e.nodeName){const t=e.classList;t.contains("fold")&&t.toggle("expand")}}),t.addEventListener("mouseenter",t=>{const e=t.srcElement||t.target;if("LI"==e.nodeName){e.classList.toggle("focus")}}),t.addEventListener("mouseleave",t=>{const e=t.srcElement||t.target;if("LI"==e.nodeName){e.classList.toggle("focus")}console.log("mouse out: ",t)})}}customElements.define("wiki-tree",h);var u=n(5),p=n.n(u);class f extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}async connectedCallback(){this.shadowRoot.innerHTML=await this.returnHTML(),this.addEventListener("updatepathname",t=>{n(1)("./pages"+this.pathresolve()).then(t=>t.default).then(t=>{this.shadowRoot.innerHTML=t,this.shadowRoot.appendChild(this.style())}).catch(async t=>{this.shadowRoot.innerHTML=await this.return404()})}),this.shadowRoot.appendChild(this.style())}pathresolve(){window.location.pathname.replace("//homebrew-wiki/","/");return window.location.pathname.match(/\/$/)?window.location.pathname+"index.html":window.location.pathname}return404(){return n.e(0).then(n.t.bind(null,14,7)).then(t=>t.default).then(t=>t)}returnHTML(){return n(1)("./pages"+this.pathresolve()).then(t=>t.default).then(t=>t).catch(t=>this.return404())}style(){const t=document.createElement("style");return t.textContent=`\n\t\t\t${p.a}\n\t\t`,t}}customElements.define("wiki-article",f);var m=n(6),w=n.n(m);class g extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=w.a,this.style.backgroundColor="#D1D5DB;"}}customElements.define("wiki-footer",g);n(10);var v=new Event("updatepathname");!function t(e){Array.from(e,e=>{try{e.shadowRoot.querySelectorAll("a").forEach(t=>{t.addEventListener("click",e=>{console.log("window.location: ",window.location),console.log("path list: ",window.location.pathname.split("/")),e.preventDefault(),window.history.pushState(null,"",t.href),document.querySelector("wiki-content").shadowRoot.querySelector("wiki-article").dispatchEvent(v)})})}catch{}try{e.shadowRoot.children.length&&t(e.shadowRoot.children)}catch{}})}(document.querySelector("body").children),window.addEventListener("popstate",()=>{document.querySelector("wiki-article").dispatchEvent(v)})}]);