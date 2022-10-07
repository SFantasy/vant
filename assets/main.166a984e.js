import{_ as h,a as V,p as O,c as P,b as _,s as B,i as M,d as j,l as F,e as S,f as R,g as x,h as q}from"./iframe-router.85e7ccda.js";import{c as C,n as v,a as c,r as u,o as i,F as y,b as $,d as l,t as p,e as f,f as m,g as A,h as z,w as b,T as Y,i as w,j as W,v as G,p as J,k as K,l as Q,m as U,q as X,s as Z}from"./vue-libs.b44bc779.js";const ee={name:"VanDocNavLink",props:{base:String,item:Object},computed:{itemName(){const e=(this.item.title||this.item.name).split(" ");return`${e[0]} <span>${e.slice(1).join(" ")}</span>`},path(){return`${this.base}${this.item.path}`},active(){return this.$route.path===this.path?!0:this.item.path==="home"?this.$route.path===this.base:!1}},watch:{active(){this.scrollIntoView()}},mounted(){this.scrollIntoView()},methods:{scrollIntoView(){this.active&&this.$el&&this.$el.scrollIntoViewIfNeeded&&this.$el.scrollIntoViewIfNeeded()}}},te=["href","innerHTML"],ne=["innerHTML"];function oe(e,n,t,a,s,o){const d=u("router-link");return t.item.path?(i(),C(d,{key:0,class:v({active:o.active}),to:o.path,innerHTML:o.itemName},null,8,["class","to","innerHTML"])):t.item.link?(i(),c("a",{key:1,href:t.item.link,innerHTML:o.itemName},null,8,te)):(i(),c("a",{key:2,innerHTML:o.itemName},null,8,ne))}const H=h(ee,[["render",oe]]);const se={name:"VanDocNav",components:{[H.name]:H},props:{lang:String,navConfig:Array},data(){return{top:64,bottom:0}},computed:{style(){return{top:this.top+"px",bottom:this.bottom+"px"}},base(){return this.lang?`/${this.lang}/`:"/"}},created(){window.addEventListener("scroll",this.onScroll),this.onScroll()},methods:{onScroll(){const{pageYOffset:e}=window;this.top=Math.max(0,64-e)}}},ae={class:"van-doc-nav__title"};function ie(e,n,t,a,s,o){const d=u("van-doc-nav-link");return i(),c("div",{class:"van-doc-nav",style:A(o.style)},[(i(!0),c(y,null,$(t.navConfig,(r,g)=>(i(),c("div",{class:"van-doc-nav__group",key:g},[l("div",ae,p(r.title),1),r.items?(i(!0),c(y,{key:0},$(r.items,(k,T)=>(i(),c("div",{key:T,class:"van-doc-nav__item"},[f(d,{item:k,base:o.base},null,8,["item","base"])]))),128)):m("",!0)]))),128))],4)}const ce=h(se,[["render",ie]]);const re={name:"VanDocSearch",props:{lang:String,searchConfig:Object},watch:{lang(){this.initDocsearch()}},mounted(){this.initDocsearch()},methods:{initDocsearch(){this.searchConfig&&(V(()=>Promise.resolve({}),["assets/style.dce3455c.css"]),V(()=>import("./index.d8b09f24.js"),[]).then(e=>{e.default({...this.searchConfig,container:"#docsearch"})}))}}},le={id:"docsearch"};function de(e,n,t,a,s,o){return i(),c("div",le)}const ue=h(re,[["render",de]]);const he={name:"VanDocHeader",components:{SearchInput:ue},props:{lang:String,config:Object,versions:Array,langConfigs:Array},data(){return{packageVersion:O,showVersionPop:!1}},computed:{langLink(){return`#${this.$route.path.replace(this.lang,this.anotherLang.lang)}`},langLabel(){return this.anotherLang.label},anotherLang(){const e=this.langConfigs.filter(n=>n.lang!==this.lang);return e.length?e[0]:{}},searchConfig(){return this.config.searchConfig}},methods:{toggleVersionPop(){const e=!this.showVersionPop,n=e?"add":"remove";document.body[`${n}EventListener`]("click",this.checkHideVersionPop),this.showVersionPop=e},checkHideVersionPop(e){this.$refs.version.contains(e.target)||(this.showVersionPop=!1)},onSwitchLang(e){this.$router.push(this.$route.path.replace(e.from,e.to))},onSwitchVersion(e){e.link&&(location.href=e.link)}}},_e={class:"van-doc-header"},me={class:"van-doc-row"},ge={class:"van-doc-header__top"},pe={class:"van-doc-header__logo"},fe=["src"],ve={class:"van-doc-header__title"},ye={key:0,class:"van-doc-header__subtitle"},we={class:"van-doc-header__top-nav"},ke=["href"],Se=["src"],$e={key:1},be={key:0,ref:"version",class:"van-doc-header__top-nav-item"},Ce={key:0,class:"van-doc-header__version-pop"},Le=["onClick"],Te={key:1,class:"van-doc-header__top-nav-item"},Ve=["href"];function xe(e,n,t,a,s,o){const d=u("search-input");return i(),c("div",_e,[l("div",me,[l("div",ge,[l("a",pe,[l("img",{src:t.config.logo},null,8,fe),l("span",ve,p(t.config.title),1),t.config.subtitle?(i(),c("span",ye,p(t.config.subtitle),1)):m("",!0)]),l("ul",we,[(i(!0),c(y,null,$(t.config.links,(r,g)=>(i(),c("li",{key:g,class:"van-doc-header__top-nav-item"},[l("a",{class:"van-doc-header__link",target:"_blank",href:r.url},[r.logo?(i(),c("img",{key:0,src:r.logo},null,8,Se)):r.text?(i(),c("span",$e,p(r.text),1)):m("",!0)],8,ke)]))),128)),t.versions?(i(),c("li",be,[l("span",{class:"van-doc-header__cube van-doc-header__version",onClick:n[0]||(n[0]=(...r)=>o.toggleVersionPop&&o.toggleVersionPop(...r))},[z(p(s.packageVersion)+" ",1),f(Y,{name:"van-doc-dropdown"},{default:b(()=>[s.showVersionPop?(i(),c("div",Ce,[(i(!0),c(y,null,$(t.versions,(r,g)=>(i(),c("div",{key:g,class:"van-doc-header__version-pop-item",onClick:k=>o.onSwitchVersion(r)},p(r.label),9,Le))),128))])):m("",!0)]),_:1})])],512)):m("",!0),o.langLabel&&o.langLink?(i(),c("li",Te,[l("a",{class:"van-doc-header__cube",href:o.langLink},p(o.langLabel),9,Ve)])):m("",!0),o.searchConfig?(i(),C(d,{key:2,lang:t.lang,"search-config":o.searchConfig},null,8,["lang","search-config"])):m("",!0)])])])])}const He=h(he,[["render",xe]]);const Ne={name:"VanDocContent",computed:{currentPage(){const{path:e}=this.$route;return e?e.split("/").slice(-1)[0]:this.$route.name}},watch:{$route(e,n){n.path!==e.path&&setTimeout(()=>{this.copyAction()})}},mounted(){this.copyAction()},methods:{onClick({target:e}){["H2","H3","H4","H5"].includes(e.tagName)&&this.scrollToAnchor(e)},scrollToAnchor(e){e.id&&this.$router.push({name:this.$route.name,hash:"#"+e.id})},copyAction(){const e=document.querySelectorAll(".van-doc-card pre code");if(!(!e||!e.length))for(let n=0;n<e.length;n++){const t=e[n];let a=null;t.addEventListener("click",()=>{if(a)return;const s=t.innerText;P(s),t.classList.add("code-copy-success"),a=setTimeout(()=>{t.classList.remove("code-copy-success"),a=null},1400)})}}}};function De(e,n,t,a,s,o){return i(),c("div",{class:v(["van-doc-content",`van-doc-content--${o.currentPage}`]),onClick:n[0]||(n[0]=(...d)=>o.onClick&&o.onClick(...d))},[w(e.$slots,"default")],2)}const Pe=h(Ne,[["render",De]]);const Ae={name:"VanDocContainer",props:{hasSimulator:Boolean}};function Ie(e,n,t,a,s,o){return i(),c("div",{class:v(["van-doc-container van-doc-row",{"van-doc-container--with-simulator":t.hasSimulator}])},[w(e.$slots,"default")],2)}const Ee=h(Ae,[["render",Ie]]);const Oe={name:"VanDocSimulator",props:{src:String},data(){return{scrollTop:window.scrollY,windowHeight:window.innerHeight}},computed:{isFixed(){return this.scrollTop>60},simulatorStyle(){return{height:Math.min(640,this.windowHeight-90)+"px"}}},mounted(){window.addEventListener("scroll",()=>{this.scrollTop=window.scrollY}),window.addEventListener("resize",()=>{this.windowHeight=window.innerHeight})}},Be=["src"];function Me(e,n,t,a,s,o){return i(),c("div",{class:v(["van-doc-simulator",{"van-doc-simulator-fixed":o.isFixed}])},[l("iframe",{ref:"iframe",src:t.src,style:A(o.simulatorStyle),frameborder:"0"},null,12,Be)],2)}const je=h(Oe,[["render",Me]]);const Fe={name:"VanDoc",components:{DocNav:ce,DocHeader:He,DocContent:Pe,DocContainer:Ee,DocSimulator:je},props:{lang:String,versions:Array,simulator:String,hasSimulator:Boolean,langConfigs:Array,config:{type:Object,required:!0},base:{type:String,default:""}},emits:["switch-version"],watch:{$route(){this.setNav()}},created(){this.setNav(),this.keyboardHandler()},methods:{setNav(){const{nav:e}=this.config,n=e.reduce((s,o)=>s.concat(o.items),[]),t=this.$route.path.split("/").pop();let a;for(let s=0,o=n.length;s<o;s++)if(n[s].path===t){a=s;break}this.leftNav=n[a-1],this.rightNav=n[a+1]},keyboardNav(e){if(/win(32|64)/.test(navigator.userAgent.toLocaleLowerCase()))return;const n=e==="prev"?this.leftNav:this.rightNav;n.path&&this.$router.push(this.base+n.path)},keyboardHandler(){window.addEventListener("keyup",e=>{switch(e.keyCode){case 37:this.keyboardNav("prev");break;case 39:this.keyboardNav("next");break}})}}},Re={class:"van-doc"};function qe(e,n,t,a,s,o){const d=u("doc-header"),r=u("doc-nav"),g=u("doc-content"),k=u("doc-container"),T=u("doc-simulator");return i(),c("div",Re,[f(d,{lang:t.lang,config:t.config,versions:t.versions,"lang-configs":t.langConfigs,onSwitchVersion:n[0]||(n[0]=E=>e.$emit("switch-version",E))},null,8,["lang","config","versions","lang-configs"]),f(r,{lang:t.lang,"nav-config":t.config.nav},null,8,["lang","nav-config"]),f(k,{"has-simulator":t.hasSimulator},{default:b(()=>[f(g,null,{default:b(()=>[w(e.$slots,"default")]),_:3})]),_:3},8,["has-simulator"]),t.hasSimulator?(i(),C(T,{key:0,src:t.simulator},null,8,["src"])):m("",!0)])}const ze=h(Fe,[["render",qe]]);const Ye={components:{VanDoc:ze},data(){return{hasSimulator:!0}},computed:{simulator(){var n,t;return(n=_.site.simulator)!=null&&n.url?(t=_.site.simulator)==null?void 0:t.url:`${location.pathname.replace(/\/index(\.html)?/,"/")}mobile.html${location.hash}`},lang(){const{lang:e}=this.$route.meta;return e||""},langConfigs(){const{locales:e={}}=_.site;return Object.keys(e).map(n=>({lang:n,label:e[n].langLabel||""}))},config(){const{locales:e}=_.site;return e?e[this.lang]:_.site},versions(){return _.site.versions||null}},watch:{"$route.path"(){this.setTitleAndToogleSimulator()},lang(e){B(e),this.setTitleAndToogleSimulator()},config:{handler(e){e&&this.setTitleAndToogleSimulator()},immediate:!0}},mounted(){this.$route.hash&&this.$nextTick(()=>{const e=document.querySelector(this.$route.hash);e&&e.scrollIntoView()})},methods:{setTitleAndToogleSimulator(){let{title:e}=this.config;const t=this.config.nav.reduce((a,s)=>[...a,...s.items],[]).find(a=>a.path===this.$route.meta.name);t&&t.title?e=t.title+" - "+e:this.config.description&&(e+=` - ${this.config.description}`),document.title=e,this.hasSimulator=!(_.site.hideSimulator||this.config.hideSimulator||t&&t.hideSimulator)}}},We={class:"app"};function Ge(e,n,t,a,s,o){const d=u("router-view"),r=u("van-doc");return i(),c("div",We,[o.config?(i(),C(r,{key:0,lang:o.lang,config:o.config,versions:o.versions,simulator:o.simulator,"has-simulator":s.hasSimulator,"lang-configs":o.langConfigs},{default:b(()=>[f(d)]),_:1},8,["lang","config","versions","simulator","has-simulator","lang-configs"])):m("",!0)])}const Je=h(Ye,[["render",Ge]]);const Ke={name:"DemoPlayground",props:{originCode:String,codeSnippet:String,transform:Boolean,compact:Boolean,inline:Boolean},data(){return{showSource:!1,copyStatus:"ready"}},methods:{unescape,toggleSource(){this.showSource=!this.showSource},copySourceCode(){P(unescape(this.originCode)),this.copyStatus="copied",setTimeout(()=>{this.copyStatus="ready"},2e3)}}},Qe=e=>(J("data-v-95763b72"),e=e(),K(),e),Ue={class:"demo-playground--code"},Xe={class:"demo-playground--code--actions"},Ze=Qe(()=>l("span",null,null,-1)),et=["data-status"],tt=["innerHTML"];function nt(e,n,t,a,s,o){return i(),c("div",{class:v({"demo-playground":!t.inline,transform:t.transform})},[t.inline?w(e.$slots,"default",{key:0},void 0,!0):(i(),c(y,{key:1},[l("div",{class:v(["demo-playground--previewer",{compact:t.compact}])},[w(e.$slots,"default",{},void 0,!0)],2),l("div",Ue,[l("div",Xe,[Ze,l("button",{title:"Copy source code",class:"action-icon",role:"copy","data-status":s.copyStatus,onClick:n[0]||(n[0]=(...d)=>o.copySourceCode&&o.copySourceCode(...d))},null,8,et),l("button",{title:"Toggle source code panel",class:"action-icon",role:"source",onClick:n[1]||(n[1]=(...d)=>o.toggleSource&&o.toggleSource(...d))})]),W(l("div",{innerHTML:o.unescape(t.codeSnippet),class:"demo-playground--code--content"},null,8,tt),[[G,s.showSource]])])],64))],2)}const N=h(Ke,[["render",nt],["__scopeId","data-v-95763b72"]]);M&&location.replace("mobile.html"+location.hash);const{locales:I,defaultLang:ot}=_.site;j(ot);function st(e){if(e.indexOf("_")!==-1){const n=e.split("_"),t=n.shift();return{component:`${x(t)}`,lang:n.join("-")}}return{component:`${x(e)}`,lang:""}}function at(e){const n=e.path.split("/")[1];return Object.keys(I).indexOf(n)!==-1?n:q()}function it(){const e=[],n=Object.keys(S);I?e.push({name:"notFound",path:"/:path(.*)+",redirect:a=>({name:at(a)})}):e.push({name:"notFound",path:"/:path(.*)+",redirect:{name:"home"}});function t(a,s){e.push({name:s||"home",path:`/${s||""}`,component:a,meta:{lang:s}})}return n.forEach(a=>{const{component:s,lang:o}=st(a);s==="home"&&t(S[a],o),o?e.push({name:`${o}/${s}`,path:`/${o}/${s}`,component:S[a],meta:{lang:o,name:s}}):e.push({name:`${s}`,path:`/${s}`,component:S[a],meta:{name:s}})}),e}const L=Q({history:U(),routes:it(),scrollBehavior(e){return e.hash?{el:e.hash}:{top:0}}});L.afterEach(()=>{X(R)});var D;((D=_.site.simulator)==null?void 0:D.syncPathFromSimulator)!==!1&&F(L);window.vueRouter=L;window.app=Z(Je).use(L).component(N.name,N);setTimeout(()=>{window.app.mount("#app")},0);
