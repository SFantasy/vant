import{c as E,a as A}from"./use-translate.85b7fc27.js";import{m as S,c as D,t as I,w as N}from"./with-install.d26e13af.js";import{I as P}from"./index.33ef0a36.js";import{B as V}from"./index.b8ee6b0a.js";import{u as w}from"./use-placeholder.4a0001c7.js";import{A as y,x as L,e as t,r as U,o as z,a as $,w as l,C as e,h,t as x,d as j,F as q}from"./vue-libs.a3cd7f61.js";import{C as G}from"./index.05500a11.js";import{T as C}from"./function-call.4eaf2655.js";import"./constant.80c6de18.js";import"./use-route.7a9317f3.js";import"./index.4d0d76f2.js";import"./use-height.b644a5ca.js";import"./use-expose.b85ae184.js";import"./Checker.433fd059.js";import"./mount-component.a164bc7b.js";import"./index.c08165fc.js";import"./interceptor.de8ff612.js";import"./use-touch.196fce0c.js";import"./use-lazy-render.4c81c593.js";import"./on-popup-reopen.a53db14c.js";import"./index.754c99d2.js";const[H,o,J]=E("submit-bar"),K={tip:String,label:String,price:Number,tipIcon:String,loading:Boolean,currency:S("\xA5"),disabled:Boolean,textAlign:String,buttonText:String,buttonType:S("danger"),buttonColor:String,suffixLabel:String,placeholder:Boolean,decimalLength:D(2),safeAreaInsetBottom:I};var M=y({name:H,props:K,emits:["submit"],setup(a,{emit:i,slots:n}){const r=L(),b=w(r,o),k=()=>{const{price:u,label:c,currency:p,textAlign:T,suffixLabel:_,decimalLength:B}=a;if(typeof u=="number"){const v=(u/100).toFixed(+B).split("."),F=B?`.${v[1]}`:"";return t("div",{class:o("text"),style:{textAlign:T}},[t("span",null,[c||J("label")]),t("span",{class:o("price")},[p,t("span",{class:o("price-integer")},[v[0]]),F]),_&&t("span",{class:o("suffix-label")},[_])])}},m=()=>{var p;const{tip:u,tipIcon:c}=a;if(n.tip||u)return t("div",{class:o("tip")},[c&&t(P,{class:o("tip-icon"),name:c},null),u&&t("span",{class:o("tip-text")},[u]),(p=n.tip)==null?void 0:p.call(n)])},s=()=>i("submit"),f=()=>n.button?n.button():t(V,{round:!0,type:a.buttonType,text:a.buttonText,class:o("button",a.buttonType),color:a.buttonColor,loading:a.loading,disabled:a.disabled,onClick:s},null),g=()=>{var u,c;return t("div",{ref:r,class:[o(),{"van-safe-area-bottom":a.safeAreaInsetBottom}]},[(u=n.top)==null?void 0:u.call(n),m(),t("div",{class:o("bar")},[(c=n.default)==null?void 0:c.call(n),k(),f()])])};return()=>a.placeholder?b(g):g()}});const d=N(M);const bt=y({__name:"index",setup(a){const i=A({"zh-CN":{tip1:"\u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u914D\u9001",tip2:"\u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u914D\u9001, ",tip3:"\u4FEE\u6539\u5730\u5740",check:"\u5168\u9009",submit:"\u63D0\u4EA4\u8BA2\u5355",clickLink:"\u4FEE\u6539\u5730\u5740",clickButton:"\u70B9\u51FB\u6309\u94AE"},"en-US":{tip1:"Some tips",tip2:"Some tips, ",tip3:"Link",check:"Label",submit:"Submit",clickLink:"Click Link",clickButton:"Submit"}}),n=L(!0),r=()=>C(i("clickButton")),b=()=>C(i("clickLink"));return(k,m)=>{const s=U("demo-block");return z(),$(q,null,[t(s,{title:e(i)("basicUsage")},{default:l(()=>[t(e(d),{price:3050,"button-text":e(i)("submit"),onSubmit:r},null,8,["button-text"])]),_:1},8,["title"]),t(s,{title:e(i)("disabled")},{default:l(()=>[t(e(d),{disabled:"",price:3050,"button-text":e(i)("submit"),tip:e(i)("tip1"),"tip-icon":"info-o",onSubmit:r},null,8,["button-text","tip"])]),_:1},8,["title"]),t(s,{title:e(i)("loadingStatus")},{default:l(()=>[t(e(d),{loading:"",price:3050,"button-text":e(i)("submit"),onSubmit:r},null,8,["button-text"])]),_:1},8,["title"]),t(s,{title:e(i)("advancedUsage")},{default:l(()=>[t(e(d),{price:3050,"button-text":e(i)("submit"),onSubmit:r},{tip:l(()=>[h(x(e(i)("tip2"))+" ",1),j("span",{class:"edit-address",onClick:b},x(e(i)("tip3")),1)]),default:l(()=>[t(e(G),{modelValue:n.value,"onUpdate:modelValue":m[0]||(m[0]=f=>n.value=f)},{default:l(()=>[h(x(e(i)("check")),1)]),_:1},8,["modelValue"])]),_:1},8,["button-text"])]),_:1},8,["title"])],64)}}});export{bt as default};