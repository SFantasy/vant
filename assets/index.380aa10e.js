import{c as E,b as y,l as A}from"./use-translate.21aea044.js";import{n as T,t as g,w as C}from"./with-install.9b509712.js";import{F as M}from"./constant.80c6de18.js";import{u as N}from"./use-expose.34524b4d.js";import{z as x,e as I}from"./vue-libs.a65f1bfc.js";const[O,_]=E("form"),j={colon:Boolean,disabled:Boolean,readonly:Boolean,showError:Boolean,labelWidth:T,labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:g,showErrorMessage:g,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}},k=x({name:O,props:j,emits:["submit","failed"],setup(i,{emit:c,slots:s}){const{children:a,linkChildren:p}=y(M),l=e=>e?a.filter(t=>e.includes(t.name)):a,v=e=>new Promise((t,n)=>{const r=[];l(e).reduce((S,w)=>S.then(()=>{if(!r.length)return w.validate().then(h=>{h&&r.push(h)})}),Promise.resolve()).then(()=>{r.length?n(r):t()})}),b=e=>new Promise((t,n)=>{const r=l(e);Promise.all(r.map(o=>o.validate())).then(o=>{o=o.filter(Boolean),o.length?n(o):t()})}),F=e=>{const t=a.find(n=>n.name===e);return t?new Promise((n,r)=>{t.validate().then(o=>{o?r(o):n()})}):Promise.reject()},u=e=>typeof e=="string"?F(e):i.validateFirst?v(e):b(e),V=e=>{typeof e=="string"&&(e=[e]),l(e).forEach(n=>{n.resetValidation()})},B=()=>a.reduce((e,t)=>(e[t.name]=t.getValidationStatus(),e),{}),d=(e,t)=>{a.some(n=>n.name===e?(n.$el.scrollIntoView(t),!0):!1)},m=()=>a.reduce((e,t)=>(e[t.name]=t.formValue.value,e),{}),f=()=>{const e=m();u().then(()=>c("submit",e)).catch(t=>{c("failed",{values:e,errors:t}),i.scrollToError&&t[0].name&&d(t[0].name)})},P=e=>{A(e),f()};return p({props:i}),N({submit:f,validate:u,getValues:m,scrollToField:d,resetValidation:V,getValidationStatus:B}),()=>{var e;return I("form",{class:_(),onSubmit:P},[(e=s.default)==null?void 0:e.call(s)])}}}),q=C(k),Y=q;export{q as F,Y as V};
