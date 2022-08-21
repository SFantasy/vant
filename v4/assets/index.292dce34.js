import{c as U,I as de,h as me,p as V,r as p,J as he,o as ge,K as le,L as X,M as ye}from"./use-translate.22943ac9.js";import{d as j,a as ve,n as ee,m as ie,t as B,c as De,w as we}from"./with-install.c6b01ca2.js";import{u as be}from"./use-refs.c03004fa.js";import{u as ue}from"./use-expose.e6b8a577.js";import{P as ke}from"./index.fe471a10.js";import{B as Se}from"./index.a138e893.js";import{T as se}from"./function-call.4b6e3a00.js";import{g as Te}from"./utils.9a198e26.js";import{u as Me}from"./use-height.65e143c4.js";import{A as q,D as R,e as c,x as Y,y as Z,B as Re}from"./vue-libs.df86f395.js";const[xe,f,H]=U("calendar"),Ce=e=>H("monthTitle",e.getFullYear(),e.getMonth()+1);function te(e,s){const l=e.getFullYear(),d=s.getFullYear();if(l===d){const D=e.getMonth(),T=s.getMonth();return D===T?0:D>T?1:-1}return l>d?1:-1}function x(e,s){const l=te(e,s);if(l===0){const d=e.getDate(),D=s.getDate();return d===D?0:d>D?1:-1}return l}const L=e=>new Date(e),ce=e=>Array.isArray(e)?e.map(L):L(e);function oe(e,s){const l=L(e);return l.setDate(l.getDate()+s),l}const ne=e=>oe(e,-1),fe=e=>oe(e,1),ae=()=>{const e=new Date;return e.setHours(0,0,0,0),e};function Oe(e){const s=e[0].getTime();return(e[1].getTime()-s)/(1e3*60*60*24)+1}const[Pe]=U("calendar-day");var Be=q({name:Pe,props:{item:j(Object),color:String,index:Number,offset:ve(0),rowHeight:String},emits:["click"],setup(e,{emit:s,slots:l}){const d=R(()=>{var W;const{item:a,index:h,color:k,offset:A,rowHeight:O}=e,S={height:O};if(a.type==="placeholder")return S.width="100%",S;if(h===0&&(S.marginLeft=`${100*A/7}%`),k)switch(a.type){case"end":case"start":case"start-end":case"multiple-middle":case"multiple-selected":S.background=k;break;case"middle":S.color=k;break}return A+(((W=a.date)==null?void 0:W.getDate())||1)>28&&(S.marginBottom=0),S}),D=()=>{e.item.type!=="disabled"&&s("click",e.item)},T=()=>{const{topInfo:a}=e.item;if(a||l["top-info"])return c("div",{class:f("top-info")},[l["top-info"]?l["top-info"](e.item):a])},C=()=>{const{bottomInfo:a}=e.item;if(a||l["bottom-info"])return c("div",{class:f("bottom-info")},[l["bottom-info"]?l["bottom-info"](e.item):a])},w=()=>{const{item:a,color:h,rowHeight:k}=e,{type:A,text:O}=a,S=[T(),O,C()];return A==="selected"?c("div",{class:f("selected-day"),style:{width:k,height:k,background:h}},[S]):S};return()=>{const{type:a,className:h}=e.item;return a==="placeholder"?c("div",{class:f("day"),style:d.value},null):c("div",{role:"gridcell",style:d.value,class:[f("day",a),h],tabindex:a==="disabled"?void 0:-1,onClick:D},[w()])}}});const[Ae]=U("calendar-month"),Ie={date:j(Date),type:String,color:String,minDate:j(Date),maxDate:j(Date),showMark:Boolean,rowHeight:ee,formatter:Function,lazyRender:Boolean,currentDate:[Date,Array],allowSameDay:Boolean,showSubtitle:Boolean,showMonthTitle:Boolean,firstDayOfWeek:Number};var He=q({name:Ae,props:Ie,emits:["click"],setup(e,{emit:s,slots:l}){const[d,D]=de(),T=Y(),C=Y(),w=Me(C),a=R(()=>Ce(e.date)),h=R(()=>me(e.rowHeight)),k=R(()=>{const o=e.date.getDay();return e.firstDayOfWeek?(o+7-e.firstDayOfWeek)%7:o}),A=R(()=>Te(e.date.getFullYear(),e.date.getMonth()+1)),O=R(()=>d.value||!e.lazyRender),S=()=>a.value,W=o=>{const m=g=>e.currentDate.some(u=>x(u,g)===0);if(m(o)){const g=ne(o),u=fe(o),t=m(g),n=m(u);return t&&n?"multiple-middle":t?"end":n?"start":"multiple-selected"}return""},$=o=>{const[m,g]=e.currentDate;if(!m)return"";const u=x(o,m);if(!g)return u===0?"start":"";const t=x(o,g);return e.allowSameDay&&u===0&&t===0?"start-end":u===0?"start":t===0?"end":u>0&&t<0?"middle":""},N=o=>{const{type:m,minDate:g,maxDate:u,currentDate:t}=e;if(x(o,g)<0||x(o,u)>0)return"disabled";if(t===null)return"";if(Array.isArray(t)){if(m==="multiple")return W(o);if(m==="range")return $(o)}else if(m==="single")return x(o,t)===0?"selected":"";return""},z=o=>{if(e.type==="range"){if(o==="start"||o==="end")return H(o);if(o==="start-end")return`${H("start")}/${H("end")}`}},E=()=>{if(e.showMonthTitle)return c("div",{class:f("month-title")},[a.value])},J=()=>{if(e.showMark&&O.value)return c("div",{class:f("month-mark")},[e.date.getMonth()+1])},F=R(()=>{const o=Math.ceil((A.value+k.value)/7);return Array(o).fill({type:"placeholder"})}),M=R(()=>{const o=[],m=e.date.getFullYear(),g=e.date.getMonth();for(let u=1;u<=A.value;u++){const t=new Date(m,g,u),n=N(t);let r={date:t,type:n,text:u,bottomInfo:z(n)};e.formatter&&(r=e.formatter(r)),o.push(r)}return o}),K=R(()=>M.value.filter(o=>o.type==="disabled")),_=(o,m)=>{if(T.value){const g=p(T.value),u=F.value.length,n=(Math.ceil((m.getDate()+k.value)/7)-1)*g.height/u;he(o,g.top+n+o.scrollTop-p(o).top)}},G=(o,m)=>c(Be,{item:o,index:m,color:e.color,offset:k.value,rowHeight:h.value,onClick:g=>s("click",g)},V(l,["top-info","bottom-info"])),Q=()=>c("div",{ref:T,role:"grid",class:f("days")},[J(),(O.value?M:F).value.map(G)]);return ue({getTitle:S,getHeight:()=>w.value,setVisible:D,scrollToDate:_,disabledDays:K}),()=>c("div",{class:f("month"),ref:C},[E(),Q()])}});const[We]=U("calendar-header");var Ne=q({name:We,props:{title:String,subtitle:String,showTitle:Boolean,showSubtitle:Boolean,firstDayOfWeek:Number},emits:["clickSubtitle"],setup(e,{slots:s,emit:l}){const d=()=>{if(e.showTitle){const w=e.title||H("title"),a=s.title?s.title():w;return c("div",{class:f("header-title")},[a])}},D=w=>l("clickSubtitle",w),T=()=>{if(e.showSubtitle){const w=s.subtitle?s.subtitle():e.subtitle;return c("div",{class:f("header-subtitle"),onClick:D},[w])}},C=()=>{const{firstDayOfWeek:w}=e,a=H("weekdays"),h=[...a.slice(w,7),...a.slice(0,w)];return c("div",{class:f("weekdays")},[h.map(k=>c("span",{class:f("weekday")},[k]))])};return()=>c("div",{class:f("header")},[d(),T(),C()])}});const Fe={show:Boolean,type:ie("single"),title:String,color:String,round:B,readonly:Boolean,poppable:B,maxRange:De(null),position:ie("bottom"),teleport:[String,Object],showMark:B,showTitle:B,formatter:Function,rowHeight:ee,confirmText:String,rangePrompt:String,lazyRender:B,showConfirm:B,defaultDate:[Date,Array],allowSameDay:Boolean,showSubtitle:B,closeOnPopstate:B,showRangePrompt:B,confirmDisabledText:String,closeOnClickOverlay:B,safeAreaInsetTop:Boolean,safeAreaInsetBottom:B,minDate:{type:Date,validator:le,default:ae},maxDate:{type:Date,validator:le,default:()=>{const e=ae();return new Date(e.getFullYear(),e.getMonth()+6,e.getDate())}},firstDayOfWeek:{type:ee,default:0,validator:e=>e>=0&&e<=6}};var Ye=q({name:xe,props:Fe,emits:["select","confirm","unselect","monthShow","overRange","update:show","clickSubtitle"],setup(e,{emit:s,slots:l}){const d=(t,n=e.minDate,r=e.maxDate)=>x(t,n)===-1?n:x(t,r)===1?r:t,D=(t=e.defaultDate)=>{const{type:n,minDate:r,maxDate:i}=e;if(t===null)return t;const y=ae();if(n==="range"){Array.isArray(t)||(t=[]);const b=d(t[0]||y,r,ne(i)),I=d(t[1]||y,fe(r));return[b,I]}return n==="multiple"?Array.isArray(t)?t.map(b=>d(b)):[d(y)]:((!t||Array.isArray(t))&&(t=y),d(t))};let T;const C=Y(),w=Y(""),a=Y(D()),[h,k]=be(),A=R(()=>e.firstDayOfWeek?+e.firstDayOfWeek%7:0),O=R(()=>{const t=[],n=new Date(e.minDate);if(e.lazyRender&&!e.show&&e.poppable)return t;n.setDate(1);do t.push(new Date(n)),n.setMonth(n.getMonth()+1);while(te(n,e.maxDate)!==1);return t}),S=R(()=>{if(a.value){if(e.type==="range")return!a.value[0]||!a.value[1];if(e.type==="multiple")return!a.value.length}return!a.value}),W=()=>{const t=ye(C.value),n=t+T,r=O.value.map((v,P)=>h.value[P].getHeight()),i=r.reduce((v,P)=>v+P,0);if(n>i&&t>0)return;let y=0,b;const I=[-1,-1];for(let v=0;v<O.value.length;v++){const P=h.value[v];y<=n&&y+r[v]>=t&&(I[1]=v,b||(b=P,I[0]=v),h.value[v].showed||(h.value[v].showed=!0,s("monthShow",{date:P.date,title:P.getTitle()}))),y+=r[v]}O.value.forEach((v,P)=>{const re=P>=I[0]-1&&P<=I[1]+1;h.value[P].setVisible(re)}),b&&(w.value=b.getTitle())},$=t=>{X(()=>{O.value.some((n,r)=>te(n,t)===0?(C.value&&h.value[r].scrollToDate(C.value,t),!0):!1),W()})},N=()=>{if(!(e.poppable&&!e.show))if(a.value){const t=e.type==="single"?a.value:a.value[0];$(t)}else X(W)},z=()=>{e.poppable&&!e.show||(X(()=>{T=Math.floor(p(C).height)}),N())},E=(t=D())=>{a.value=t,N()},J=t=>{const{maxRange:n,rangePrompt:r,showRangePrompt:i}=e;return n&&Oe(t)>n?(i&&se(r||H("rangePrompt",n)),s("overRange"),!1):!0},F=()=>{var t;return s("confirm",(t=a.value)!=null?t:ce(a.value))},M=(t,n)=>{const r=i=>{a.value=i,s("select",ce(i))};if(n&&e.type==="range"&&!J(t)){r([t[0],oe(t[0],+e.maxRange-1)]);return}r(t),n&&!e.showConfirm&&F()},K=(t,n,r)=>{var i;return(i=t.find(y=>x(n,y.date)===-1&&x(y.date,r)===-1))==null?void 0:i.date},_=R(()=>h.value.reduce((t,n)=>{var r,i;return t.push(...(i=(r=n.disabledDays)==null?void 0:r.value)!=null?i:[]),t},[])),G=t=>{if(e.readonly||!t.date)return;const{date:n}=t,{type:r}=e;if(r==="range"){if(!a.value){M([n]);return}const[i,y]=a.value;if(i&&!y){const b=x(n,i);if(b===1){const I=K(_.value,i,n);if(I){const v=ne(I);x(i,v)===-1?M([i,v]):M([n])}else M([i,n],!0)}else b===-1?M([n]):e.allowSameDay&&M([n,n],!0)}else M([n])}else if(r==="multiple"){if(!a.value){M([n]);return}const i=a.value,y=i.findIndex(b=>x(b,n)===0);if(y!==-1){const[b]=i.splice(y,1);s("unselect",L(b))}else e.maxRange&&i.length>=e.maxRange?se(e.rangePrompt||H("rangePrompt",e.maxRange)):M([...i,n])}else M(n,!0)},Q=t=>s("update:show",t),o=(t,n)=>{const r=n!==0||!e.showSubtitle;return c(He,Re({ref:k(n),date:t,currentDate:a.value,showMonthTitle:r,firstDayOfWeek:A.value},V(e,["type","color","minDate","maxDate","showMark","formatter","rowHeight","lazyRender","showSubtitle","allowSameDay"]),{onClick:G}),V(l,["top-info","bottom-info"]))},m=()=>{if(l.footer)return l.footer();if(e.showConfirm){const t=l["confirm-text"],n=S.value,r=n?e.confirmDisabledText:e.confirmText;return c(Se,{round:!0,block:!0,type:"primary",color:e.color,class:f("confirm"),disabled:n,nativeType:"button",onClick:F},{default:()=>[t?t({disabled:n}):r||H("confirm")]})}},g=()=>c("div",{class:[f("footer"),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[m()]),u=()=>c("div",{class:f()},[c(Ne,{title:e.title,subtitle:w.value,showTitle:e.showTitle,showSubtitle:e.showSubtitle,firstDayOfWeek:A.value,onClickSubtitle:t=>s("clickSubtitle",t)},V(l,["title","subtitle"])),c("div",{ref:C,class:f("body"),onScroll:W},[O.value.map(o)]),g()]);return Z(()=>e.show,z),Z(()=>[e.type,e.minDate,e.maxDate],()=>E(D(a.value))),Z(()=>e.defaultDate,(t=null)=>{a.value=t,N()}),ue({reset:E,scrollToDate:$}),ge(z),()=>e.poppable?c(ke,{show:e.show,class:f("popup"),round:e.round,position:e.position,closeable:e.showTitle||e.showSubtitle,teleport:e.teleport,closeOnPopstate:e.closeOnPopstate,safeAreaInsetTop:e.safeAreaInsetTop,closeOnClickOverlay:e.closeOnClickOverlay,"onUpdate:show":Q},{default:u}):u()}});const _e=we(Ye);export{_e as C};