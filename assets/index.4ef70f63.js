import{c as D,F as M,a as y}from"./use-translate.21aea044.js";import{m as A,c as b,a as F,w as R}from"./with-install.9b509712.js";import{B as h}from"./constant.80c6de18.js";import{z,D as C,R as I,e as t,C as _,r as O,o as $,a as j,w as g,B as a,h as q,t as G,F as H}from"./vue-libs.a65f1bfc.js";import{a as S}from"./index.4a104a44.js";const[J,P,k]=D("pagination"),w=(l,n,u)=>({number:l,text:n,active:u}),K={mode:A("multi"),prevText:String,nextText:String,pageCount:b(0),modelValue:F(0),totalItems:b(0),showPageSize:b(5),itemsPerPage:b(10),forceEllipses:Boolean},L=z({name:J,props:K,emits:["change","update:modelValue"],setup(l,{emit:n,slots:u}){const d=C(()=>{const{pageCount:e,totalItems:o,itemsPerPage:s}=l,m=+e||Math.ceil(+o/+s);return Math.max(1,m)}),V=C(()=>{const e=[],o=d.value,s=+l.showPageSize,{modelValue:m,forceEllipses:N}=l;let f=1,p=o;const B=s<o;B&&(f=Math.max(m-Math.floor(s/2),1),p=f+s-1,p>o&&(p=o,f=p-s+1));for(let c=f;c<=p;c++){const U=w(c,c,c===m);e.push(U)}if(B&&s>0&&N){if(f>1){const c=w(f-1,"...");e.unshift(c)}if(p<o){const c=w(p+1,"...");e.push(c)}}return e}),x=(e,o)=>{e=M(e,1,d.value),l.modelValue!==e&&(n("update:modelValue",e),o&&n("change",e))};I(()=>x(l.modelValue));const E=()=>t("li",{class:P("page-desc")},[u.pageDesc?u.pageDesc():`${l.modelValue}/${d.value}`]),r=()=>{const{mode:e,modelValue:o}=l,s=u["prev-text"],m=o===1;return t("li",{class:[P("item",{disabled:m,border:e==="simple",prev:!0}),h]},[t("button",{type:"button",disabled:m,onClick:()=>x(o-1,!0)},[s?s():l.prevText||k("prev")])])},v=()=>{const{mode:e,modelValue:o}=l,s=u["next-text"],m=o===d.value;return t("li",{class:[P("item",{disabled:m,border:e==="simple",next:!0}),h]},[t("button",{type:"button",disabled:m,onClick:()=>x(o+1,!0)},[s?s():l.nextText||k("next")])])},i=()=>V.value.map(e=>t("li",{class:[P("item",{active:e.active,page:!0}),h]},[t("button",{type:"button","aria-current":e.active||void 0,onClick:()=>x(e.number,!0)},[u.page?u.page(e):e.text])]));return()=>t("nav",{role:"navigation",class:P()},[t("ul",{class:P("items")},[r(),l.mode==="simple"?E():i(),v()])])}}),Q=R(L),T=Q,te=z({__name:"index",setup(l){const n=y({"zh-CN":{title2:"\u7B80\u5355\u6A21\u5F0F",title3:"\u663E\u793A\u7701\u7565\u53F7",title4:"\u81EA\u5B9A\u4E49\u6309\u94AE",prevText:"\u4E0A\u4E00\u9875",nextText:"\u4E0B\u4E00\u9875"},"en-US":{title2:"Simple Mode",title3:"Show ellipses",title4:"Custom Button",prevText:"Prev",nextText:"Next"}}),u=_(1),d=_(1),V=_(1),x=_(1);return(E,r)=>{const v=O("demo-block");return $(),j(H,null,[t(v,{title:a(n)("basicUsage")},{default:g(()=>[t(a(T),{modelValue:u.value,"onUpdate:modelValue":r[0]||(r[0]=i=>u.value=i),"total-items":24,"items-per-page":5,"prev-text":a(n)("prevText"),"next-text":a(n)("nextText")},null,8,["modelValue","prev-text","next-text"])]),_:1},8,["title"]),t(v,{title:a(n)("title2")},{default:g(()=>[t(a(T),{modelValue:d.value,"onUpdate:modelValue":r[1]||(r[1]=i=>d.value=i),"page-count":12,"prev-text":a(n)("prevText"),"next-text":a(n)("nextText"),mode:"simple",size:"small"},null,8,["modelValue","prev-text","next-text"])]),_:1},8,["title"]),t(v,{title:a(n)("title3")},{default:g(()=>[t(a(T),{modelValue:V.value,"onUpdate:modelValue":r[2]||(r[2]=i=>V.value=i),"force-ellipses":"","total-items":125,"show-page-size":3,"prev-text":a(n)("prevText"),"next-text":a(n)("nextText")},null,8,["modelValue","prev-text","next-text"])]),_:1},8,["title"]),t(v,{title:a(n)("title4")},{default:g(()=>[t(a(T),{modelValue:x.value,"onUpdate:modelValue":r[3]||(r[3]=i=>x.value=i),"total-items":125,"show-page-size":5},{"prev-text":g(()=>[t(a(S),{name:"arrow-left"})]),"next-text":g(()=>[t(a(S),{name:"arrow"})]),page:g(({text:i})=>[q(G(i),1)]),_:1},8,["modelValue"])]),_:1},8,["title"])],64)}}});export{te as default};
