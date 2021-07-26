(()=>{var n,e={3479:(n,e,t)=>{"use strict";var o=t(9963),a=t(6252),i=t(3577);const r={class:"van-doc-demo-block"},l={key:0,class:"van-doc-demo-block__title"},s={key:1,class:"van-doc-demo-block__card"};var c={name:"DemoBlock",props:{card:Boolean,title:String}},p=t(3379),d=t.n(p),m=t(6504);d()(m.Z,{insert:"head",singleton:!1}),m.Z.locals,c.render=function(n,e,t,o,c,p){return(0,a.wg)(),(0,a.j4)("div",r,[t.title?((0,a.wg)(),(0,a.j4)("h2",l,(0,i.zw)(t.title),1)):(0,a.kq)("v-if",!0),t.card?((0,a.wg)(),(0,a.j4)("div",s,[(0,a.WI)(n.$slots,"default")])):(0,a.WI)(n.$slots,"default",{key:2})])};var u=c;const f=navigator.userAgent.toLowerCase();function h(n,e="-"){return n.replace(/([a-z\d])([A-Z])/g,"$1"+e+"$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1"+e+"$2").toLowerCase()}/ios|iphone|ipod|ipad|android/.test(f);var g={name:"DemoSection",computed:{demoName(){const{meta:n}=this.$route||{};return n&&n.name?`demo-${h(n.name)}`:""}}},v=t(9410);d()(v.Z,{insert:"head",singleton:!1}),v.Z.locals,g.render=function(n,e,t,o,i,r){return(0,a.wg)(),(0,a.j4)("section",{class:["van-doc-demo-section",r.demoName]},[(0,a.WI)(n.$slots,"default")],2)};var w=g,y=t(2119);const b={class:"demo-home"},U={key:0,class:"demo-home__desc"};var x=t(5633),S=t(4720),F=t(385),_=t(4457),O=t(858),k=t(7768),Z=t(4047),B=t(5559),A=t(2186),z=t(224),C=t(767),E=t(90),j=t(8995),W=t(4863),Y=t(5626),T={install:function(n){[x.Z,S.Z,F.Z,_.Z,O.Z,k.Z,Z.Z,B.Z,A.Z,z.Z,C.Z,E.Z,j.Z,W.Z,Y.Z].forEach((e=>{e.install?n.use(e):e.name&&n.component(e.name,e)}))},version:"1.5.11"},M=(t(5749),t(4768)),K=(0,a.Wm)("div",null,"Card content",-1),N=(0,a.Wm)("div",null,"Card content",-1),P=(0,a.Wm)("div",null,"Card content",-1),R=(0,a.Wm)("div",null,"Card content",-1),D=(0,a.Wm)("div",null,"Card content",-1),$=(0,a.Wm)("div",null,"Card content",-1);var L={render:function(n,e){var t=(0,a.up)("pro-card");return(0,a.wg)(),(0,a.j4)(a.HY,null,[(0,a.Wm)(t,{title:"默认尺寸",extra:"extra",tooltip:"这是提示",style:{maxWidth:"300px"}},{default:(0,a.w5)((()=>[K,N,P])),_:1}),(0,a.Wm)(t,{title:"小尺寸卡片",extra:"extra",tooltip:"这是提示",style:{maxWidth:"300px",marginTop:"24px"},size:"small"},{default:(0,a.w5)((()=>[R,D,$])),_:1})],64)}};M.Z.name="demo-pro-card",L.name="demo-pro-table";const G={ProCard:M.Z,ProTable:L},X={defaultLang:"zh-CN",sensors:!0,htmlPluginOptions:{meta:{"docsearch:version":"v3"}},searchConfig:{apiKey:"25626fae796133dc1e734c6bcaaeac3c",indexName:"docsearch"},simulator:{},hideSimulator:!0,locales:{"zh-CN":{langLabel:"中",title:"Nox Pro - Vue3 高级组件库",description:"一套为开发者、准备的基于 Ant Design Vue 与 Vue3 的桌面端高级组件库",logo:"https://res02.noxgroup.com/noxgroup/2021/06/client/favicon.png",links:[{logo:"https://b.yzcdn.cn/vant/logo/weapp.svg",url:"https://www.noxgroup.com"},{logo:"https://b.yzcdn.cn/vant/logo/github.svg",url:"https://github.com/NoxFED/noxfed.github.io"}],nav:[{title:"高级组件",items:[{path:"pro-card",title:"ProCard"},{path:"pro-table",title:"ProTable"}]}]}}},V={class:"demo-home-nav"},H={class:"demo-home-nav__title"},I={class:"demo-home-nav__group"},q={viewBox:"0 0 1024 1024"},J=(0,a.Wm)("path",{fill:"#B6C3D2",d:"M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"},null,-1),Q=(0,a.Wm)("path",{fill:"#B6C3D2",d:"M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"},null,-1);var nn={components:{ArrowRight:{render:function(n,e){return(0,a.wg)(),(0,a.j4)("svg",q,[J,Q])}}},props:{lang:String,group:Object},data:()=>({active:[]}),computed:{base(){return this.lang?`/${this.lang}`:""}}},en=t(6996);d()(en.Z,{insert:"head",singleton:!1}),en.Z.locals,nn.render=function(n,e,t,o,r,l){const s=(0,a.up)("arrow-right"),c=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)("div",V,[(0,a.Wm)("div",H,(0,i.zw)(t.group.title),1),(0,a.Wm)("div",I,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(t.group.items,(n=>((0,a.wg)(),(0,a.j4)(c,{class:"demo-home-nav__block",key:n.path,to:`${l.base}/${n.path}`},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(n.title)+" ",1),(0,a.Wm)(s,{class:"demo-home-nav__icon"})])),_:2},1032,["to"])))),128))])])};var tn={components:{DemoHomeNav:nn},computed:{lang(){const{lang:n}=this.$route.meta;return n},config(){const{locales:n}=X;return n?n[this.lang]:X},smallTitle(){return this.config.title.length>=8}}},on=t(1381);d()(on.Z,{insert:"head",singleton:!1}),on.Z.locals,tn.render=function(n,e,t,o,r,l){const s=(0,a.up)("demo-home-nav");return(0,a.wg)(),(0,a.j4)("div",b,[(0,a.Wm)("h1",{class:["demo-home__title",{"demo-home__title--small":l.smallTitle}]},[(0,a.Wm)("img",{src:l.config.logo},null,8,["src"]),(0,a.Wm)("span",null,(0,i.zw)(l.config.title),1)],2),l.config.description?((0,a.wg)(),(0,a.j4)("h2",U,(0,i.zw)(l.config.description),1)):(0,a.kq)("v-if",!0),((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(l.config.nav,((n,e)=>((0,a.wg)(),(0,a.j4)(s,{key:e,lang:l.lang,group:n},null,8,["lang","group"])))),128))])};var an=tn;const rn="zh-CN";let ln=rn;var sn=t(8334),cn=t.n(sn),pn=t(2335),dn=t(7761),mn=t(524),un=t(3339),fn=t(1001);pn.Z,dn.Z,mn.Z,un.Z,fn.Z;let hn=[],gn=!1;function vn(){const n=window.vueRouter,{path:e}=n.currentRoute.value;return cn().site.simulator.routeMapper?cn().site.simulator.routeMapper(e):e}function wn(){window.top.postMessage({type:"replacePath",value:vn()},"*")}window.top===window?window.addEventListener("message",(n=>{"iframeReady"===n.data.type&&(gn=!0,hn.forEach((n=>n())),hn=[])})):window.top.postMessage({type:"iframeReady"},"*");const{locales:yn,defaultLang:bn}=X;function Un(n){const e=n.path.split("/")[1];return-1!==Object.keys(yn).indexOf(e)?e:ln}!function(n){const e=localStorage.getItem("vant-cli-lang");ln=e||(navigator.language&&-1!==navigator.language.indexOf("zh-")?rn:n||"en-US")}(bn);const xn=(0,y.p7)({history:(0,y.r5)(),routes:function(){const n=[],e=Object.keys(G),t=yn?Object.keys(yn):[];return t.length?(n.push({name:"NotFound",path:"/:path(.*)+",redirect:n=>({name:Un(n)})}),t.forEach((e=>{n.push({name:e,path:`/${e}`,component:an,meta:{lang:e}})}))):(n.push({name:"NotFound",path:"/:path(.*)+",redirect:{name:"home"}}),n.push({name:"home",path:"/",component:an})),e.forEach((e=>{const o=h(e);t.length?t.forEach((t=>{n.push({name:`${t}/${o}`,path:`/${t}/${o}`,component:G[e],meta:{name:e,lang:t}})})):n.push({name:o,path:`/${o}`,component:G[e],meta:{name:e}})})),n}(),scrollBehavior:(n,e,t)=>t||{x:0,y:0}});(0,a.YP)(xn.currentRoute,(()=>{xn.currentRoute.value.redirectedFrom||(0,a.Y3)(wn)})),function(n){window.addEventListener("message",(e=>{if("replacePath"!==e.data?.type)return;const t=e.data?.value||"";n.currentRoute.value.path!==t&&n.replace(t).catch((()=>{}))}))}(xn),window.vueRouter=xn;const Sn={class:"demo-nav"},Fn={class:"demo-nav__title"};var _n={data:()=>({path:"M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z"}),computed:{title(){const{name:n}=this.$route.meta||{};return n?n.replace(/-/g,""):""}},methods:{onBack(){history.length>1?history.back():this.$router.replace("/")}}},On=t(142);d()(On.Z,{insert:"head",singleton:!1}),On.Z.locals,_n.render=function(n,e,t,r,l,s){return(0,a.wy)(((0,a.wg)(),(0,a.j4)("div",Sn,[(0,a.Wm)("div",Fn,(0,i.zw)(s.title),1),((0,a.wg)(),(0,a.j4)("svg",{class:"demo-nav__back",viewBox:"0 0 1000 1000",onClick:e[1]||(e[1]=(...n)=>s.onBack&&s.onBack(...n))},[(0,a.Wm)("path",{fill:"#969799","fill-rule":"evenodd",d:l.path},null,8,["d"])]))],512)),[[o.F8,s.title]])};var kn={components:{DemoNav:_n}},Zn=t(3787);d()(Zn.Z,{insert:"head",singleton:!1}),Zn.Z.locals,kn.render=function(n,e,t,o,i,r){const l=(0,a.up)("demo-nav"),s=(0,a.up)("demo-section"),c=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(a.HY,null,[(0,a.Wm)(l),(0,a.Wm)(c,null,{default:(0,a.w5)((({Component:n})=>[((0,a.wg)(),(0,a.j4)(a.Ob,null,[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)((0,a.LL)(n)))])),_:2},1024)],1024))])),_:1})],64)};var Bn=kn;t(6774),window.app=(0,o.ri)(Bn).use(xn).use(T).component(u.name,u).component(w.name,w),setTimeout((()=>{window.app.mount("#app")}),0)},6774:()=>{!function(){if("undefined"!=typeof window){var n,e="ontouchstart"in window;document.createTouch||(document.createTouch=function(n,e,o,a,i,r,l){return new t(e,o,{pageX:a,pageY:i,screenX:r,screenY:l,clientX:a-window.pageXOffset,clientY:i-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var n=a(),e=0;e<arguments.length;e++)n[e]=arguments[e];return n.length=arguments.length,n}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(n){var e=this;do{if(e.matches(n))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null});var t=function(n,e,t,o,a){o=o||0,a=a||0,this.identifier=e,this.target=n,this.clientX=t.clientX+o,this.clientY=t.clientY+a,this.screenX=t.screenX+o,this.screenY=t.screenY+a,this.pageX=t.pageX+o,this.pageY=t.pageY+a},o=!1;s.multiTouchOffset=75,e||new s}function a(){var n=[];return n.item=function(n){return this[n]||null},n.identifiedTouch=function(n){return this[n+1]||null},n}function i(e){return function(t){var a,i,s;"mousedown"===t.type&&(o=!0),"mouseup"===t.type&&(o=!1),("mousemove"!==t.type||o)&&(("mousedown"===t.type||!n||n&&!n.dispatchEvent)&&(n=t.target),null==n.closest("[data-no-touch-simulate]")&&(a=e,i=t,(s=document.createEvent("Event")).initEvent(a,!0,!0),s.altKey=i.altKey,s.ctrlKey=i.ctrlKey,s.metaKey=i.metaKey,s.shiftKey=i.shiftKey,s.touches=l(i),s.targetTouches=l(i),s.changedTouches=r(i),n.dispatchEvent(s)),"mouseup"===t.type&&(n=null))}}function r(e){var o=a();return o.push(new t(n,1,e,0,0)),o}function l(n){return"mouseup"===n.type?a():r(n)}function s(){window.addEventListener("mousedown",i("touchstart"),!0),window.addEventListener("mousemove",i("touchmove"),!0),window.addEventListener("mouseup",i("touchend"),!0)}}()},8334:n=>{n.exports={name:"@noxfed/nox-pro",build:{css:{preprocessor:"less"},site:{publicPath:"/nox-pro/"},vetur:{}},site:{defaultLang:"zh-CN",sensors:!0,htmlPluginOptions:{meta:{"docsearch:version":"v3"}},searchConfig:{apiKey:"25626fae796133dc1e734c6bcaaeac3c",indexName:"docsearch"},simulator:{},hideSimulator:!0,locales:{"zh-CN":{langLabel:"中",title:"Nox Pro - Vue3 高级组件库",description:"一套为开发者、准备的基于 Ant Design Vue 与 Vue3 的桌面端高级组件库",logo:"https://res02.noxgroup.com/noxgroup/2021/06/client/favicon.png",links:[{logo:"https://b.yzcdn.cn/vant/logo/weapp.svg",url:"https://www.noxgroup.com"},{logo:"https://b.yzcdn.cn/vant/logo/github.svg",url:"https://github.com/NoxFED/noxfed.github.io"}],nav:[{title:"开发指南",items:[{path:"home",title:"介绍"},{path:"quickstart",title:"快速上手"}]},{title:"高级组件",items:[{path:"pro-card",title:"ProCard"},{path:"pro-table",title:"ProTable"},{path:"pro-table-tsx",title:"ProTable(TSX)"}]}]}}}}},3787:(n,e,t)=>{"use strict";var o=t(3645),a=t.n(o)()(!1);a.push([n.id,"/* cyrillic-ext */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFWJ0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFUZ0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFWZ0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFVp0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFWp0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOX-hpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOVuhpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOXuhpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOUehpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOXehpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOXOhpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\nbody {\n  min-width: 1100px;\n  margin: 0;\n  overflow-x: auto;\n  color: #323233;\n  font-size: 16px;\n  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;\n  background-color: #f7f8fa;\n  -webkit-font-smoothing: antialiased;\n}\np {\n  margin: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  font-size: inherit;\n}\nul,\nol {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\na {\n  text-decoration: none;\n}\n.van-doc-row {\n  width: 100%;\n}\n@media (min-width: 1680px) {\n.van-doc-row {\n    width: 1680px;\n    margin: 0 auto;\n}\n}\nbody {\n  min-width: 100vw;\n}\n::-webkit-scrollbar {\n  width: 0;\n  background: transparent;\n}\n",""]),e.Z=a},6504:(n,e,t)=>{"use strict";var o=t(3645),a=t.n(o)()(!1);a.push([n.id,".van-doc-demo-block__title {\n  margin: 0;\n  padding: 32px 16px 16px;\n  color: rgba(69, 90, 100, 0.6);\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 16px;\n}\n.van-doc-demo-block__card {\n  margin: 12px 12px 0;\n  overflow: hidden;\n  border-radius: 8px;\n}\n.van-doc-demo-block__title + .van-doc-demo-block__card {\n  margin-top: 0;\n}\n.van-doc-demo-block:first-of-type .van-doc-demo-block__title {\n  padding-top: 20px;\n}\n",""]),e.Z=a},1381:(n,e,t)=>{"use strict";var o=t(3645),a=t.n(o)()(!1);a.push([n.id,".demo-home {\n  box-sizing: border-box;\n  width: 100%;\n  min-height: 100vh;\n  padding: 46px 20px 20px;\n  background: #fff;\n}\n.demo-home__title,\n.demo-home__desc {\n  padding-left: 16px;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.demo-home__title {\n  margin: 0 0 16px;\n  font-size: 32px;\n}\n.demo-home__title img,\n.demo-home__title span {\n  display: inline-block;\n  vertical-align: middle;\n}\n.demo-home__title img {\n  width: 32px;\n}\n.demo-home__title span {\n  margin-left: 16px;\n}\n.demo-home__title--small {\n  font-size: 24px;\n}\n.demo-home__desc {\n  margin: 0 0 40px;\n  color: rgba(69, 90, 100, 0.6);\n  font-size: 14px;\n}\n",""]),e.Z=a},6996:(n,e,t)=>{"use strict";var o=t(3645),a=t.n(o)()(!1);a.push([n.id,".demo-home-nav__title {\n  margin: 24px 0 8px 16px;\n  color: rgba(69, 90, 100, 0.6);\n  font-size: 14px;\n}\n.demo-home-nav__block {\n  position: relative;\n  display: flex;\n  margin: 0 0 12px;\n  padding-left: 20px;\n  color: #323233;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 40px;\n  background: #f7f8fa;\n  border-radius: 99px;\n  transition: background 0.3s;\n}\n.demo-home-nav__block:hover {\n  background: #eef0f4;\n}\n.demo-home-nav__block:active {\n  background: #e4e8ee;\n}\n.demo-home-nav__icon {\n  position: absolute;\n  top: 50%;\n  right: 16px;\n  width: 16px;\n  height: 16px;\n  margin-top: -8px;\n}\n",""]),e.Z=a},142:(n,e,t)=>{"use strict";var o=t(3645),a=t.n(o)()(!1);a.push([n.id,".demo-nav {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 56px;\n  background-color: #fff;\n}\n.demo-nav__title {\n  font-weight: 600;\n  font-size: 17px;\n  text-transform: capitalize;\n}\n.demo-nav__back {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n}\n",""]),e.Z=a},9410:(n,e,t)=>{"use strict";var o=t(3645),a=t.n(o)()(!1);a.push([n.id,".van-doc-demo-section {\n  box-sizing: border-box;\n  min-height: calc(100vh - 56px);\n  padding-bottom: 20px;\n}\n",""]),e.Z=a}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=e,n=[],o.O=(e,t,a,i)=>{if(!t){var r=1/0;for(c=0;c<n.length;c++){for(var[t,a,i]=n[c],l=!0,s=0;s<t.length;s++)(!1&i||r>=i)&&Object.keys(o.O).every((n=>o.O[n](t[s])))?t.splice(s--,1):(l=!1,i<r&&(r=i));l&&(n.splice(c--,1),e=a())}return e}i=i||0;for(var c=n.length;c>0&&n[c-1][2]>i;c--)n[c]=n[c-1];n[c]=[t,a,i]},o.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return o.d(e,{a:e}),e},o.d=(n,e)=>{for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),o.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),o.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.nmd=n=>(n.paths=[],n.children||(n.children=[]),n),(()=>{var n={561:0};o.O.j=e=>0===n[e];var e=(e,t)=>{var a,i,[r,l,s]=t,c=0;for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(s)var p=s(o);for(e&&e(t);c<r.length;c++)i=r[c],o.o(n,i)&&n[i]&&n[i][0](),n[r[c]]=0;return o.O(p)},t=self.webpackChunk_noxfed_nox_pro=self.webpackChunk_noxfed_nox_pro||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})();var a=o.O(void 0,[962],(()=>o(3479)));a=o.O(a)})();