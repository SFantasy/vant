import{c as E,a as V}from"./use-translate.21aea044.js";import{m as h,c as D,t as A,w as I}from"./with-install.9b509712.js";import{I as N}from"./index.4a104a44.js";import{B as P}from"./index.fd5f847e.js";import{u as w}from"./use-placeholder.bd7c9723.js";import{z as y,C as L,e as t,r as U,o as z,a as $,w as l,B as e,h as C,t as k,d as j,F as q}from"./vue-libs.a65f1bfc.js";import{V as G}from"./index.6c78131c.js";import{T as v}from"./function-call.88cba24e.js";import"./constant.80c6de18.js";import"./use-route.985ba6da.js";import"./index.27a7a674.js";import"./use-height.423c2d03.js";import"./on-popup-reopen.76ccb88c.js";import"./use-expose.34524b4d.js";import"./Checker.ed1e1d7b.js";import"./mount-component.23be9238.js";import"./index.4997d76a.js";import"./interceptor.29bfb20c.js";import"./use-touch.ffb74f5c.js";import"./use-lazy-render.965a094b.js";import"./index.fb779d6b.js";const[H,a,J]=E("submit-bar"),K={tip:String,label:String,price:Number,tipIcon:String,loading:Boolean,currency:h("\xA5"),disabled:Boolean,textAlign:String,buttonText:String,buttonType:h("danger"),buttonColor:String,suffixLabel:String,placeholder:Boolean,decimalLength:D(2),safeAreaInsetBottom:A},M=y({name:H,props:K,emits:["submit"],setup(u,{emit:i,slots:n}){const r=L(),b=w(r,a),x=()=>{const{price:o,label:c,currency:p,textAlign:T,suffixLabel:B,decimalLength:_}=u;if(typeof o=="number"){const S=(o/100).toFixed(+_).split("."),F=_?`.${S[1]}`:"";return t("div",{class:a("text"),style:{textAlign:T}},[t("span",null,[c||J("label")]),t("span",{class:a("price")},[p,t("span",{class:a("price-integer")},[S[0]]),F]),B&&t("span",{class:a("suffix-label")},[B])])}},m=()=>{var p;const{tip:o,tipIcon:c}=u;if(n.tip||o)return t("div",{class:a("tip")},[c&&t(N,{class:a("tip-icon"),name:c},null),o&&t("span",{class:a("tip-text")},[o]),(p=n.tip)==null?void 0:p.call(n)])},s=()=>i("submit"),f=()=>n.button?n.button():t(P,{round:!0,type:u.buttonType,text:u.buttonText,class:a("button",u.buttonType),color:u.buttonColor,loading:u.loading,disabled:u.disabled,onClick:s},null),g=()=>{var o,c;return t("div",{ref:r,class:[a(),{"van-safe-area-bottom":u.safeAreaInsetBottom}]},[(o=n.top)==null?void 0:o.call(n),m(),t("div",{class:a("bar")},[(c=n.default)==null?void 0:c.call(n),x(),f()])])};return()=>u.placeholder?b(g):g()}}),O=I(M),d=O,ft=y({__name:"index",setup(u){const i=V({"zh-CN":{tip1:"\u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u914D\u9001",tip2:"\u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u914D\u9001, ",tip3:"\u4FEE\u6539\u5730\u5740",check:"\u5168\u9009",submit:"\u63D0\u4EA4\u8BA2\u5355",clickLink:"\u4FEE\u6539\u5730\u5740",clickButton:"\u70B9\u51FB\u6309\u94AE"},"en-US":{tip1:"Some tips",tip2:"Some tips, ",tip3:"Link",check:"Label",submit:"Submit",clickLink:"Click Link",clickButton:"Submit"}}),n=L(!0),r=()=>v(i("clickButton")),b=()=>v(i("clickLink"));return(x,m)=>{const s=U("demo-block");return z(),$(q,null,[t(s,{title:e(i)("basicUsage")},{default:l(()=>[t(e(d),{price:3050,"button-text":e(i)("submit"),onSubmit:r},null,8,["button-text"])]),_:1},8,["title"]),t(s,{title:e(i)("disabled")},{default:l(()=>[t(e(d),{disabled:"",price:3050,"button-text":e(i)("submit"),tip:e(i)("tip1"),"tip-icon":"info-o",onSubmit:r},null,8,["button-text","tip"])]),_:1},8,["title"]),t(s,{title:e(i)("loadingStatus")},{default:l(()=>[t(e(d),{loading:"",price:3050,"button-text":e(i)("submit"),onSubmit:r},null,8,["button-text"])]),_:1},8,["title"]),t(s,{title:e(i)("advancedUsage")},{default:l(()=>[t(e(d),{price:3050,"button-text":e(i)("submit"),onSubmit:r},{tip:l(()=>[C(k(e(i)("tip2"))+" ",1),j("span",{class:"edit-address",onClick:b},k(e(i)("tip3")),1)]),default:l(()=>[t(e(G),{modelValue:n.value,"onUpdate:modelValue":m[0]||(m[0]=f=>n.value=f)},{default:l(()=>[C(k(e(i)("check")),1)]),_:1},8,["modelValue"])]),_:1},8,["button-text"])]),_:1},8,["title"])],64)}}});export{ft as default};
