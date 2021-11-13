import{c as S,e as j,p as k,m as D,a as T}from"./use-translate.aef3085b.js";import{m as A,t as U,w as y}from"./with-install.796b4cad.js";import{f as B,F as _}from"./index.da6d7278.js";import{u as P}from"./use-expose.b82056d2.js";import{z as E,C as d,e as o,Q as N,r as I,o as z,a as K,w as r,A as a,d as x,t as L,F as O}from"./vue-libs.f710b8ed.js";import{T as w}from"./function-call.aaae010c.js";import"./constant.80c6de18.js";import"./index.57ab404d.js";import"./use-route.7ce7c3ed.js";import"./index.c480cbe8.js";import"./mount-component.e03afee0.js";import"./index.590c19a0.js";import"./interceptor.3dc21389.js";import"./use-touch.8e5a0907.js";import"./use-lazy-render.c4d421a8.js";import"./on-popup-reopen.4b166a39.js";import"./index.bd451b43.js";import"./index.88eab4b6.js";const[R,m,q]=S("search"),Q=j({},B,{label:String,shape:A("square"),leftIcon:A("search"),clearable:U,actionText:String,background:String,showAction:Boolean});var G=E({name:R,props:Q,emits:["search","cancel","update:modelValue"],setup(u,{emit:l,slots:n,attrs:b}){const c=d(),f=()=>{n.action||(l("update:modelValue",""),l("cancel"))},h=e=>{const C=13;e.keyCode===C&&(D(e),l("search",u.modelValue))},v=()=>{if(n.label||u.label)return o("label",{class:m("label"),for:u.id},[n.label?n.label():u.label])},p=()=>{if(u.showAction){const e=u.actionText||q("cancel");return o("div",{class:m("action"),role:"button",tabindex:0,onClick:f},[n.action?n.action():e])}},g=()=>{var e;return(e=c.value)==null?void 0:e.blur()},V=()=>{var e;return(e=c.value)==null?void 0:e.focus()},t=Object.keys(B),s=()=>{const e=j({},b,k(u,t)),C=F=>l("update:modelValue",F);return o(_,N({ref:c,type:"search",class:m("field"),border:!1,onKeypress:h,"onUpdate:modelValue":C},e),k(n,["left-icon","right-icon"]))};return P({focus:V,blur:g}),()=>{var e;return o("div",{class:m({"show-action":u.showAction}),style:{background:u.background}},[(e=n.left)==null?void 0:e.call(n),o("div",{class:m("content",u.shape)},[v(),s()]),p()])}}});const i=y(G),H={action:"/"},ie=E({setup(u){const l=T({"zh-CN":{label:"\u5730\u5740",disabled:"\u7981\u7528\u641C\u7D22\u6846",inputAlign:"\u641C\u7D22\u6846\u5185\u5BB9\u5BF9\u9F50",background:"\u81EA\u5B9A\u4E49\u80CC\u666F\u8272",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",customButton:"\u81EA\u5B9A\u4E49\u6309\u94AE",listenToEvents:"\u4E8B\u4EF6\u76D1\u542C"},"en-US":{label:"Address",disabled:"Disabled",inputAlign:"Input Align",background:"Custom Background Color",placeholder:"Placeholder",customButton:"Custom Action Button",listenToEvents:"Listen to Events"}}),n=d(""),b=d(""),c=d(""),f=d(""),h=d(""),v=d(""),p=V=>w(V),g=()=>w(l("cancel"));return(V,t)=>{const s=I("demo-block");return z(),K(O,null,[o(s,{title:a(l)("basicUsage")},{default:r(()=>[o(a(i),{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),placeholder:a(l)("placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["title"]),o(s,{title:a(l)("listenToEvents")},{default:r(()=>[x("form",H,[o(a(i),{modelValue:h.value,"onUpdate:modelValue":t[1]||(t[1]=e=>h.value=e),placeholder:a(l)("placeholder"),"show-action":"",onSearch:p,onCancel:g},null,8,["modelValue","placeholder"])])]),_:1},8,["title"]),o(s,{title:a(l)("inputAlign")},{default:r(()=>[o(a(i),{modelValue:f.value,"onUpdate:modelValue":t[2]||(t[2]=e=>f.value=e),placeholder:a(l)("placeholder"),"input-align":"center"},null,8,["modelValue","placeholder"])]),_:1},8,["title"]),o(s,{title:a(l)("disabled")},{default:r(()=>[o(a(i),{modelValue:c.value,"onUpdate:modelValue":t[3]||(t[3]=e=>c.value=e),placeholder:a(l)("placeholder"),disabled:""},null,8,["modelValue","placeholder"])]),_:1},8,["title"]),o(s,{title:a(l)("background")},{default:r(()=>[o(a(i),{modelValue:b.value,"onUpdate:modelValue":t[4]||(t[4]=e=>b.value=e),placeholder:a(l)("placeholder"),shape:"round",background:"#4fc08d"},null,8,["modelValue","placeholder"])]),_:1},8,["title"]),o(s,{title:a(l)("customButton")},{default:r(()=>[o(a(i),{modelValue:v.value,"onUpdate:modelValue":t[5]||(t[5]=e=>v.value=e),"show-action":"",label:a(l)("label"),placeholder:a(l)("placeholder"),onSearch:p},{action:r(()=>[x("div",{onClick:p},L(a(l)("search")),1)]),_:1},8,["modelValue","label","placeholder"])]),_:1},8,["title"])],64)}}});export{ie as default};