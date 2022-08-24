import{c as ne,u as re,f as oe,l as ae,F as Y,e as me,b as fe,G as de}from"./use-translate.4764287f.js";import{d as K,u as he,a as ve,n as Q,b as le,c as $,m as ge,t as xe}from"./with-install.bb994bce.js";import{H as W,a as be}from"./constant.80c6de18.js";import{u as se}from"./use-expose.6911a823.js";import{L as Ce}from"./index.eee57e92.js";import{d as X}from"./deep-clone.38a4b1ce.js";import{u as Te}from"./use-touch.79e2b006.js";import{z as ie,C as G,H as ye,x as F,e as r,D as z}from"./vue-libs.7ad34eae.js";const Z=200,ee=300,Ie=15,[ce,J]=ne("picker-column");function we(t){const{transform:g}=window.getComputedStyle(t),c=g.slice(7,g.length-1).split(", ")[5];return Number(c)}const ue=Symbol(ce),q=t=>oe(t)&&t.disabled,Oe=ie({name:ce,props:{textKey:K(String),readonly:Boolean,allowHtml:Boolean,className:he,itemHeight:K(Number),defaultIndex:ve(0),swipeDuration:K(Q),initialOptions:le(),visibleItemCount:K(Q)},emits:["change"],setup(t,{emit:g,slots:c}){let d,h,s,v,b;const y=G(),a=ye({index:t.defaultIndex,offset:0,duration:0,options:X(t.initialOptions)}),w=Te(),O=()=>a.options.length,k=()=>t.itemHeight*(+t.visibleItemCount-1)/2,D=o=>{o=Y(o,0,O());for(let l=o;l<O();l++)if(!q(a.options[l]))return l;for(let l=o-1;l>=0;l--)if(!q(a.options[l]))return l},m=(o,l)=>{o=D(o)||0;const u=-o*t.itemHeight,f=()=>{o!==a.index&&(a.index=o,l&&g("change",o))};d&&u!==a.offset?b=f:f(),a.offset=u},C=o=>{JSON.stringify(o)!==JSON.stringify(a.options)&&(a.options=X(o),m(t.defaultIndex))},M=o=>{d||t.readonly||(b=null,a.duration=Z,m(o,!0))},P=o=>oe(o)&&t.textKey in o?o[t.textKey]:o,H=o=>Y(Math.round(-o/t.itemHeight),0,O()-1),E=(o,l)=>{const u=Math.abs(o/l);o=a.offset+u/.003*(o<0?-1:1);const f=H(o);a.duration=+t.swipeDuration,m(f,!0)},N=()=>{d=!1,a.duration=0,b&&(b(),b=null)},S=o=>{if(!t.readonly){if(w.start(o),d){const l=we(y.value);a.offset=Math.min(0,l-k()),h=a.offset}else h=a.offset;a.duration=0,s=Date.now(),v=h,b=null}},A=o=>{if(t.readonly)return;w.move(o),w.isVertical()&&(d=!0,ae(o,!0)),a.offset=Y(h+w.deltaY.value,-(O()*t.itemHeight),t.itemHeight);const l=Date.now();l-s>ee&&(s=l,v=a.offset)},p=()=>{if(t.readonly)return;const o=a.offset-v,l=Date.now()-s;if(l<ee&&Math.abs(o)>Ie){E(o,l);return}const f=H(a.offset);a.duration=Z,m(f,!0),setTimeout(()=>{d=!1},0)},B=()=>{const o={height:`${t.itemHeight}px`};return a.options.map((l,u)=>{const f=P(l),_=q(l),R={role:"button",style:o,tabindex:_?-1:0,class:J("item",{disabled:_,selected:u===a.index}),onClick:()=>M(u)},U={class:"van-ellipsis",[t.allowHtml?"innerHTML":"textContent"]:f};return r("li",R,[c.option?c.option(l):r("div",U,null)])})},L=o=>{const{options:l}=a;for(let u=0;u<l.length;u++)if(P(l[u])===o)return m(u)},V=()=>a.options[a.index],j=()=>a.options.length;return m(a.index),re(ue),se({state:a,setIndex:m,getValue:V,setValue:L,setOptions:C,hasOptions:j,stopMomentum:N}),F(()=>t.initialOptions,C),F(()=>t.defaultIndex,o=>m(o)),()=>r("div",{class:[J(),t.className],onTouchstartPassive:S,onTouchmove:A,onTouchend:p,onTouchcancel:p},[r("ul",{ref:y,style:{transform:`translate3d(0, ${a.offset+k()}px, 0)`,transitionDuration:`${a.duration}ms`,transitionProperty:a.duration?"all":"none"},class:J("wrapper"),onTransitionend:N},[B()])])}}),[ke,x,te]=ne("picker"),He={title:String,loading:Boolean,readonly:Boolean,allowHtml:Boolean,itemHeight:$(44),showToolbar:xe,swipeDuration:$(1e3),visibleItemCount:$(6),cancelButtonText:String,confirmButtonText:String},Me=me({},He,{columns:le(),valueKey:String,defaultIndex:$(0),toolbarPosition:ge("top"),columnsFieldNames:Object}),_e=ie({name:ke,props:Me,emits:["confirm","cancel","change"],setup(t,{emit:g,slots:c}){const d=G(!1),h=G([]),s=z(()=>{const{columnsFieldNames:e}=t;return{text:(e==null?void 0:e.text)||t.valueKey||"text",values:(e==null?void 0:e.values)||"values",children:(e==null?void 0:e.children)||"children"}}),{children:v,linkChildren:b}=fe(ue);b();const y=z(()=>de(t.itemHeight)),a=z(()=>{const e=t.columns[0];if(typeof e=="object"){if(s.value.children in e)return"cascade";if(s.value.values in e)return"object"}return"plain"}),w=()=>{var i;const e=[];let n={[s.value.children]:t.columns};for(;n&&n[s.value.children];){const T=n[s.value.children];let I=(i=n.defaultIndex)!=null?i:+t.defaultIndex;for(;T[I]&&T[I].disabled;)if(I<T.length-1)I++;else{I=0;break}e.push({[s.value.values]:n[s.value.children],className:n.className,defaultIndex:I}),n=T[I]}h.value=e},O=()=>{const{columns:e}=t;a.value==="plain"?h.value=[{[s.value.values]:e}]:a.value==="cascade"?w():h.value=e,d.value=h.value.some(n=>n[s.value.values]&&n[s.value.values].length!==0)||v.some(n=>n.hasOptions)},k=()=>v.map(e=>e.state.index),D=(e,n)=>{const i=v[e];i&&(i.setOptions(n),d.value=!0)},m=e=>{let n={[s.value.children]:t.columns};const i=k();for(let T=0;T<=e;T++)n=n[s.value.children][i[T]];for(;n&&n[s.value.children];)e++,D(e,n[s.value.children]),n=n[s.value.children][n.defaultIndex||0]},C=e=>v[e],M=e=>{const n=C(e);if(n)return n.getValue()},P=(e,n)=>{const i=C(e);i&&(i.setValue(n),a.value==="cascade"&&m(e))},H=e=>{const n=C(e);if(n)return n.state.index},E=(e,n)=>{const i=C(e);i&&(i.setIndex(n),a.value==="cascade"&&m(e))},N=e=>{const n=C(e);if(n)return n.state.options},S=()=>v.map(e=>e.getValue()),A=e=>{e.forEach((n,i)=>{P(i,n)})},p=e=>{e.forEach((n,i)=>{E(i,n)})},B=e=>{a.value==="plain"?g(e,M(0),H(0)):g(e,S(),k())},L=e=>{a.value==="cascade"&&m(e),a.value==="plain"?g("change",M(0),H(0)):g("change",S(),e)},V=()=>{v.forEach(e=>e.stopMomentum()),B("confirm")},j=()=>B("cancel"),o=()=>{if(c.title)return c.title();if(t.title)return r("div",{class:[x("title"),"van-ellipsis"]},[t.title])},l=()=>{const e=t.cancelButtonText||te("cancel");return r("button",{type:"button",class:[x("cancel"),W],onClick:j},[c.cancel?c.cancel():e])},u=()=>{const e=t.confirmButtonText||te("confirm");return r("button",{type:"button",class:[x("confirm"),W],onClick:V},[c.confirm?c.confirm():e])},f=()=>{if(t.showToolbar){const e=c.toolbar||c.default;return r("div",{class:x("toolbar")},[e?e():[l(),o(),u()]])}},_=()=>h.value.map((e,n)=>{var i;return r(Oe,{textKey:s.value.text,readonly:t.readonly,allowHtml:t.allowHtml,className:e.className,itemHeight:y.value,defaultIndex:(i=e.defaultIndex)!=null?i:+t.defaultIndex,swipeDuration:t.swipeDuration,initialOptions:e[s.value.values],visibleItemCount:t.visibleItemCount,onChange:()=>L(n)},{option:c.option})}),R=e=>{if(d.value){const n={height:`${y.value}px`},i={backgroundSize:`100% ${(e-y.value)/2}px`};return[r("div",{class:x("mask"),style:i},null),r("div",{class:[be,x("frame")],style:n},null)]}},U=()=>{const e=y.value*+t.visibleItemCount,n={height:`${e}px`};return r("div",{class:x("columns"),style:n,onTouchmove:ae},[_(),R(e)])};return F(()=>t.columns,O,{immediate:!0}),se({confirm:V,getValues:S,setValues:A,getIndexes:k,setIndexes:p,getColumnIndex:H,setColumnIndex:E,getColumnValue:M,setColumnValue:P,getColumnValues:N,setColumnValues:D}),()=>{var e,n;return r("div",{class:x()},[t.toolbarPosition==="top"?f():null,t.loading?r(Ce,{class:x("loading")},null):null,(e=c["columns-top"])==null?void 0:e.call(c),U(),(n=c["columns-bottom"])==null?void 0:n.call(c),t.toolbarPosition==="bottom"?f():null])}}});export{_e as _,He as p};