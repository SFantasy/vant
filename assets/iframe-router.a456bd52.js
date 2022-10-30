(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))n(_);new MutationObserver(_=>{for(const r of _)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(_){const r={};return _.integrity&&(r.integrity=_.integrity),_.referrerpolicy&&(r.referrerPolicy=_.referrerpolicy),_.crossorigin==="use-credentials"?r.credentials="include":_.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(_){if(_.ep)return;_.ep=!0;const r=i(_);fetch(_.href,r)}})();const q_=(o,e)=>{const i=o.__vccOpts||o;for(const[n,_]of e)i[n]=_;return i},L="modulepreload",A=function(o){return"/vant/"+o},c={},t=function(e,i,n){return!i||i.length===0?e():Promise.all(i.map(_=>{if(_=A(_),_ in c)return;c[_]=!0;const r=_.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${s}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":L,r||(a.as="script",a.crossOrigin=""),a.href=_,document.head.appendChild(a),r)return new Promise((v,P)=>{a.addEventListener("load",v),a.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${_}`)))})})).then(()=>e())},I=()=>t(()=>import("./advanced-usage.en-US.da2d4ec4.js"),["assets/advanced-usage.en-US.da2d4ec4.js","assets/vue-libs.b44bc779.js"]),R=()=>t(()=>import("./advanced-usage.zh-CN.cc168632.js"),["assets/advanced-usage.zh-CN.cc168632.js","assets/vue-libs.b44bc779.js"]),D=()=>t(()=>import("./changelog.en-US.14ab3d82.js"),["assets/changelog.en-US.14ab3d82.js","assets/vue-libs.b44bc779.js"]),T=()=>t(()=>import("./changelog.zh-CN.e8e17da9.js"),["assets/changelog.zh-CN.e8e17da9.js","assets/vue-libs.b44bc779.js"]),C=()=>t(()=>import("./contribution.zh-CN.7d24a419.js"),["assets/contribution.zh-CN.7d24a419.js","assets/vue-libs.b44bc779.js"]),V=()=>t(()=>import("./design.en-US.85684269.js"),["assets/design.en-US.85684269.js","assets/design.en-US.55e4382d.css","assets/vue-libs.b44bc779.js"]),O=()=>t(()=>import("./design.zh-CN.f10b46e9.js"),["assets/design.zh-CN.f10b46e9.js","assets/design.zh-CN.55e4382d.css","assets/vue-libs.b44bc779.js"]),S=()=>t(()=>import("./faq.zh-CN.d928d7e1.js"),["assets/faq.zh-CN.d928d7e1.js","assets/vue-libs.b44bc779.js"]),g=()=>t(()=>import("./home.en-US.bf76eb76.js"),["assets/home.en-US.bf76eb76.js","assets/vue-libs.b44bc779.js"]),U=()=>t(()=>import("./home.zh-CN.1b8438f4.js"),["assets/home.zh-CN.1b8438f4.js","assets/vue-libs.b44bc779.js"]),N=()=>t(()=>import("./migrate-from-v2.zh-CN.1514e0bb.js"),["assets/migrate-from-v2.zh-CN.1514e0bb.js","assets/vue-libs.b44bc779.js"]),z=()=>t(()=>import("./quickstart.en-US.b88d24fb.js"),["assets/quickstart.en-US.b88d24fb.js","assets/vue-libs.b44bc779.js"]),f=()=>t(()=>import("./quickstart.zh-CN.56f64db5.js"),["assets/quickstart.zh-CN.56f64db5.js","assets/vue-libs.b44bc779.js"]),y=()=>t(()=>import("./style-guide.zh-CN.66949d76.js"),["assets/style-guide.zh-CN.66949d76.js","assets/vue-libs.b44bc779.js"]),b=()=>t(()=>import("./theme.en-US.e7177c6e.js"),["assets/theme.en-US.e7177c6e.js","assets/vue-libs.b44bc779.js"]),w=()=>t(()=>import("./theme.zh-CN.42130b64.js"),["assets/theme.zh-CN.42130b64.js","assets/vue-libs.b44bc779.js"]),k=()=>t(()=>import("./use-click-away.en-US.977c861c.js"),["assets/use-click-away.en-US.977c861c.js","assets/vue-libs.b44bc779.js"]),B=()=>t(()=>import("./use-click-away.zh-CN.a19d9756.js"),["assets/use-click-away.zh-CN.a19d9756.js","assets/vue-libs.b44bc779.js"]),x=()=>t(()=>import("./use-count-down.en-US.8424e98b.js"),["assets/use-count-down.en-US.8424e98b.js","assets/vue-libs.b44bc779.js"]),F=()=>t(()=>import("./use-count-down.zh-CN.cdeec430.js"),["assets/use-count-down.zh-CN.cdeec430.js","assets/vue-libs.b44bc779.js"]),M=()=>t(()=>import("./use-custom-field-value.en-US.ca090453.js"),["assets/use-custom-field-value.en-US.ca090453.js","assets/vue-libs.b44bc779.js"]),q=()=>t(()=>import("./use-custom-field-value.zh-CN.fa3cb247.js"),["assets/use-custom-field-value.zh-CN.fa3cb247.js","assets/vue-libs.b44bc779.js"]),j=()=>t(()=>import("./use-event-listener.en-US.253b2874.js"),["assets/use-event-listener.en-US.253b2874.js","assets/vue-libs.b44bc779.js"]),$=()=>t(()=>import("./use-event-listener.zh-CN.c7492032.js"),["assets/use-event-listener.zh-CN.c7492032.js","assets/vue-libs.b44bc779.js"]),H=()=>t(()=>import("./use-page-visibility.en-US.23113c99.js"),["assets/use-page-visibility.en-US.23113c99.js","assets/vue-libs.b44bc779.js"]),K=()=>t(()=>import("./use-page-visibility.zh-CN.6b884718.js"),["assets/use-page-visibility.zh-CN.6b884718.js","assets/vue-libs.b44bc779.js"]),W=()=>t(()=>import("./use-rect.en-US.8e7bde43.js"),["assets/use-rect.en-US.8e7bde43.js","assets/vue-libs.b44bc779.js"]),G=()=>t(()=>import("./use-rect.zh-CN.500e22ec.js"),["assets/use-rect.zh-CN.500e22ec.js","assets/vue-libs.b44bc779.js"]),Z=()=>t(()=>import("./use-relation.en-US.e9059ea1.js"),["assets/use-relation.en-US.e9059ea1.js","assets/vue-libs.b44bc779.js"]),Q=()=>t(()=>import("./use-relation.zh-CN.7a24f10d.js"),["assets/use-relation.zh-CN.7a24f10d.js","assets/vue-libs.b44bc779.js"]),Y=()=>t(()=>import("./use-scroll-parent.en-US.d9a44199.js"),["assets/use-scroll-parent.en-US.d9a44199.js","assets/vue-libs.b44bc779.js"]),J=()=>t(()=>import("./use-scroll-parent.zh-CN.e2a6efef.js"),["assets/use-scroll-parent.zh-CN.e2a6efef.js","assets/vue-libs.b44bc779.js"]),X=()=>t(()=>import("./use-toggle.en-US.ef8b4c31.js"),["assets/use-toggle.en-US.ef8b4c31.js","assets/vue-libs.b44bc779.js"]),tt=()=>t(()=>import("./use-toggle.zh-CN.9b0c6c24.js"),["assets/use-toggle.zh-CN.9b0c6c24.js","assets/vue-libs.b44bc779.js"]),et=()=>t(()=>import("./use-window-size.en-US.a73f080f.js"),["assets/use-window-size.en-US.a73f080f.js","assets/vue-libs.b44bc779.js"]),_t=()=>t(()=>import("./use-window-size.zh-CN.2e8e23b4.js"),["assets/use-window-size.zh-CN.2e8e23b4.js","assets/vue-libs.b44bc779.js"]),ot=()=>t(()=>import("./vant-use-intro.en-US.4b80955b.js"),["assets/vant-use-intro.en-US.4b80955b.js","assets/vue-libs.b44bc779.js"]),it=()=>t(()=>import("./vant-use-intro.zh-CN.9fb0560f.js"),["assets/vant-use-intro.zh-CN.9fb0560f.js","assets/vue-libs.b44bc779.js"]),rt=()=>t(()=>import("./README.zh-CN.50811aed.js"),["assets/README.zh-CN.50811aed.js","assets/vue-libs.b44bc779.js"]),nt=()=>t(()=>import("./README.zh-CN.3b87f35c.js"),["assets/README.zh-CN.3b87f35c.js","assets/vue-libs.b44bc779.js"]),at=()=>t(()=>import("./README.zh-CN.55803e89.js"),["assets/README.zh-CN.55803e89.js","assets/vue-libs.b44bc779.js"]),st=()=>t(()=>import("./README.zh-CN.a668f7ec.js"),["assets/README.zh-CN.a668f7ec.js","assets/vue-libs.b44bc779.js"]),pt=()=>t(()=>import("./README.zh-CN.ce2b7929.js"),["assets/README.zh-CN.ce2b7929.js","assets/vue-libs.b44bc779.js"]),lt=()=>t(()=>import("./README.zh-CN.bf314ef2.js"),["assets/README.zh-CN.bf314ef2.js","assets/vue-libs.b44bc779.js"]),ct=()=>t(()=>import("./README.zh-CN.c525aad3.js"),["assets/README.zh-CN.c525aad3.js","assets/vue-libs.b44bc779.js"]),dt=()=>t(()=>import("./README.zh-CN.b2812dfe.js"),["assets/README.zh-CN.b2812dfe.js","assets/vue-libs.b44bc779.js"]),ut=()=>t(()=>import("./README.zh-CN.ddaaa15c.js"),["assets/README.zh-CN.ddaaa15c.js","assets/vue-libs.b44bc779.js"]),Et=()=>t(()=>import("./README.zh-CN.a87b966e.js"),["assets/README.zh-CN.a87b966e.js","assets/vue-libs.b44bc779.js"]),ht=()=>t(()=>import("./README.zh-CN.6dc00316.js"),["assets/README.zh-CN.6dc00316.js","assets/vue-libs.b44bc779.js"]),mt=()=>t(()=>import("./README.zh-CN.96a58691.js"),["assets/README.zh-CN.96a58691.js","assets/vue-libs.b44bc779.js"]),vt=()=>t(()=>import("./README.zh-CN.2649236d.js"),["assets/README.zh-CN.2649236d.js","assets/vue-libs.b44bc779.js"]),Pt=()=>t(()=>import("./README.zh-CN.958ff1e3.js"),["assets/README.zh-CN.958ff1e3.js","assets/vue-libs.b44bc779.js"]),Lt=()=>t(()=>import("./README.zh-CN.dfb1f286.js"),["assets/README.zh-CN.dfb1f286.js","assets/vue-libs.b44bc779.js"]),At=()=>t(()=>import("./README.zh-CN.3625e1ec.js"),["assets/README.zh-CN.3625e1ec.js","assets/vue-libs.b44bc779.js"]),It=()=>t(()=>import("./README.zh-CN.0c7dd520.js"),["assets/README.zh-CN.0c7dd520.js","assets/vue-libs.b44bc779.js"]),Rt=()=>t(()=>import("./README.zh-CN.d32f4de4.js"),["assets/README.zh-CN.d32f4de4.js","assets/vue-libs.b44bc779.js"]),Dt=()=>t(()=>import("./README.zh-CN.ebeb4459.js"),["assets/README.zh-CN.ebeb4459.js","assets/vue-libs.b44bc779.js"]),Tt=()=>t(()=>import("./README.zh-CN.3eb78568.js"),["assets/README.zh-CN.3eb78568.js","assets/vue-libs.b44bc779.js"]),Ct=()=>t(()=>import("./README.zh-CN.f6d868fa.js"),["assets/README.zh-CN.f6d868fa.js","assets/vue-libs.b44bc779.js"]),Vt=()=>t(()=>import("./README.zh-CN.bababc62.js"),["assets/README.zh-CN.bababc62.js","assets/vue-libs.b44bc779.js"]),Ot=()=>t(()=>import("./README.zh-CN.b4d527d9.js"),["assets/README.zh-CN.b4d527d9.js","assets/vue-libs.b44bc779.js"]),St=()=>t(()=>import("./README.zh-CN.5d725d23.js"),["assets/README.zh-CN.5d725d23.js","assets/vue-libs.b44bc779.js"]),gt=()=>t(()=>import("./README.zh-CN.8e6adaae.js"),["assets/README.zh-CN.8e6adaae.js","assets/vue-libs.b44bc779.js"]),Ut=()=>t(()=>import("./README.zh-CN.ce672065.js"),["assets/README.zh-CN.ce672065.js","assets/vue-libs.b44bc779.js"]),Nt=()=>t(()=>import("./README.zh-CN.41bcdeff.js"),["assets/README.zh-CN.41bcdeff.js","assets/vue-libs.b44bc779.js"]),zt=()=>t(()=>import("./README.zh-CN.447eaad7.js"),["assets/README.zh-CN.447eaad7.js","assets/vue-libs.b44bc779.js"]),ft=()=>t(()=>import("./README.zh-CN.860335c3.js"),["assets/README.zh-CN.860335c3.js","assets/vue-libs.b44bc779.js"]),yt=()=>t(()=>import("./README.zh-CN.fbcf1994.js"),["assets/README.zh-CN.fbcf1994.js","assets/vue-libs.b44bc779.js"]),bt=()=>t(()=>import("./README.zh-CN.ea171dd3.js"),["assets/README.zh-CN.ea171dd3.js","assets/vue-libs.b44bc779.js"]),wt=()=>t(()=>import("./README.zh-CN.5785f1ee.js"),["assets/README.zh-CN.5785f1ee.js","assets/vue-libs.b44bc779.js"]),kt=()=>t(()=>import("./README.zh-CN.791f3706.js"),["assets/README.zh-CN.791f3706.js","assets/vue-libs.b44bc779.js"]),Bt=()=>t(()=>import("./README.zh-CN.ebc9ad42.js"),["assets/README.zh-CN.ebc9ad42.js","assets/vue-libs.b44bc779.js"]),xt=()=>t(()=>import("./README.zh-CN.4a3425f6.js"),["assets/README.zh-CN.4a3425f6.js","assets/vue-libs.b44bc779.js"]),Ft=()=>t(()=>import("./README.zh-CN.804a58ec.js"),["assets/README.zh-CN.804a58ec.js","assets/vue-libs.b44bc779.js"]),Mt=()=>t(()=>import("./README.zh-CN.d98c2792.js"),["assets/README.zh-CN.d98c2792.js","assets/vue-libs.b44bc779.js"]),qt=()=>t(()=>import("./README.zh-CN.7869566d.js"),["assets/README.zh-CN.7869566d.js","assets/vue-libs.b44bc779.js"]),jt=()=>t(()=>import("./README.zh-CN.cd8020b0.js"),["assets/README.zh-CN.cd8020b0.js","assets/vue-libs.b44bc779.js"]),$t=()=>t(()=>import("./README.zh-CN.6efd9d68.js"),["assets/README.zh-CN.6efd9d68.js","assets/vue-libs.b44bc779.js"]),Ht=()=>t(()=>import("./README.zh-CN.a98b9d62.js"),["assets/README.zh-CN.a98b9d62.js","assets/vue-libs.b44bc779.js"]),Kt=()=>t(()=>import("./README.zh-CN.02ed50aa.js"),["assets/README.zh-CN.02ed50aa.js","assets/vue-libs.b44bc779.js"]),Wt=()=>t(()=>import("./README.zh-CN.b54e797e.js"),["assets/README.zh-CN.b54e797e.js","assets/vue-libs.b44bc779.js"]),Gt=()=>t(()=>import("./README.zh-CN.3978dac0.js"),["assets/README.zh-CN.3978dac0.js","assets/vue-libs.b44bc779.js"]),Zt=()=>t(()=>import("./README.zh-CN.cfe14b6d.js"),["assets/README.zh-CN.cfe14b6d.js","assets/vue-libs.b44bc779.js"]),Qt=()=>t(()=>import("./README.zh-CN.19d33d71.js"),["assets/README.zh-CN.19d33d71.js","assets/vue-libs.b44bc779.js"]),Yt=()=>t(()=>import("./README.zh-CN.58920c05.js"),["assets/README.zh-CN.58920c05.js","assets/vue-libs.b44bc779.js"]),Jt=()=>t(()=>import("./README.zh-CN.e6d6cc3d.js"),["assets/README.zh-CN.e6d6cc3d.js","assets/vue-libs.b44bc779.js"]),Xt=()=>t(()=>import("./README.zh-CN.4e09a8bc.js"),["assets/README.zh-CN.4e09a8bc.js","assets/vue-libs.b44bc779.js"]),te=()=>t(()=>import("./README.zh-CN.eac8e7fc.js"),["assets/README.zh-CN.eac8e7fc.js","assets/vue-libs.b44bc779.js"]),ee=()=>t(()=>import("./README.zh-CN.69779dfb.js"),["assets/README.zh-CN.69779dfb.js","assets/vue-libs.b44bc779.js"]),_e=()=>t(()=>import("./README.zh-CN.6440585b.js"),["assets/README.zh-CN.6440585b.js","assets/vue-libs.b44bc779.js"]),oe=()=>t(()=>import("./README.zh-CN.e410e966.js"),["assets/README.zh-CN.e410e966.js","assets/vue-libs.b44bc779.js"]),ie=()=>t(()=>import("./README.zh-CN.2ce8a172.js"),["assets/README.zh-CN.2ce8a172.js","assets/vue-libs.b44bc779.js"]),re=()=>t(()=>import("./README.zh-CN.3731c5a3.js"),["assets/README.zh-CN.3731c5a3.js","assets/vue-libs.b44bc779.js"]),ne=()=>t(()=>import("./README.zh-CN.b85cf3b1.js"),["assets/README.zh-CN.b85cf3b1.js","assets/vue-libs.b44bc779.js"]),ae=()=>t(()=>import("./README.zh-CN.f7466bf2.js"),["assets/README.zh-CN.f7466bf2.js","assets/vue-libs.b44bc779.js"]),se=()=>t(()=>import("./README.zh-CN.8d0cd3ab.js"),["assets/README.zh-CN.8d0cd3ab.js","assets/vue-libs.b44bc779.js"]),pe=()=>t(()=>import("./README.zh-CN.743a72e9.js"),["assets/README.zh-CN.743a72e9.js","assets/vue-libs.b44bc779.js"]),le=()=>t(()=>import("./README.zh-CN.87b268ca.js"),["assets/README.zh-CN.87b268ca.js","assets/vue-libs.b44bc779.js"]),ce=()=>t(()=>import("./README.zh-CN.345bca3b.js"),["assets/README.zh-CN.345bca3b.js","assets/vue-libs.b44bc779.js"]),de=()=>t(()=>import("./README.zh-CN.b7d16c08.js"),["assets/README.zh-CN.b7d16c08.js","assets/vue-libs.b44bc779.js"]),ue=()=>t(()=>import("./README.zh-CN.1ed4fb5a.js"),["assets/README.zh-CN.1ed4fb5a.js","assets/vue-libs.b44bc779.js"]),Ee=()=>t(()=>import("./README.zh-CN.42e87358.js"),["assets/README.zh-CN.42e87358.js","assets/vue-libs.b44bc779.js"]),he=()=>t(()=>import("./README.zh-CN.a8eb520e.js"),["assets/README.zh-CN.a8eb520e.js","assets/vue-libs.b44bc779.js"]),me=()=>t(()=>import("./README.zh-CN.b21af53b.js"),["assets/README.zh-CN.b21af53b.js","assets/vue-libs.b44bc779.js"]),ve=()=>t(()=>import("./README.zh-CN.a497e727.js"),["assets/README.zh-CN.a497e727.js","assets/vue-libs.b44bc779.js"]),Pe=()=>t(()=>import("./README.zh-CN.9933f21a.js"),["assets/README.zh-CN.9933f21a.js","assets/vue-libs.b44bc779.js"]),Le=()=>t(()=>import("./README.zh-CN.447cbc90.js"),["assets/README.zh-CN.447cbc90.js","assets/vue-libs.b44bc779.js"]),Ae=()=>t(()=>import("./README.zh-CN.97d3a519.js"),["assets/README.zh-CN.97d3a519.js","assets/vue-libs.b44bc779.js"]),Ie=()=>t(()=>import("./README.zh-CN.0039e909.js"),["assets/README.zh-CN.0039e909.js","assets/vue-libs.b44bc779.js"]),Re=()=>t(()=>import("./README.e93bafdc.js"),["assets/README.e93bafdc.js","assets/vue-libs.b44bc779.js"]),De=()=>t(()=>import("./README.da2bf6fd.js"),["assets/README.da2bf6fd.js","assets/vue-libs.b44bc779.js"]),Te=()=>t(()=>import("./README.ab13eb5d.js"),["assets/README.ab13eb5d.js","assets/vue-libs.b44bc779.js"]),Ce=()=>t(()=>import("./README.c110b8dd.js"),["assets/README.c110b8dd.js","assets/vue-libs.b44bc779.js"]),Ve=()=>t(()=>import("./README.04eb62fb.js"),["assets/README.04eb62fb.js","assets/vue-libs.b44bc779.js"]),Oe=()=>t(()=>import("./README.9f63ffce.js"),["assets/README.9f63ffce.js","assets/vue-libs.b44bc779.js"]),Se=()=>t(()=>import("./README.696f019c.js"),["assets/README.696f019c.js","assets/vue-libs.b44bc779.js"]),ge=()=>t(()=>import("./README.bcb81ae7.js"),["assets/README.bcb81ae7.js","assets/vue-libs.b44bc779.js"]),Ue=()=>t(()=>import("./README.4865f6a5.js"),["assets/README.4865f6a5.js","assets/vue-libs.b44bc779.js"]),Ne=()=>t(()=>import("./README.c65ebad5.js"),["assets/README.c65ebad5.js","assets/vue-libs.b44bc779.js"]),ze=()=>t(()=>import("./README.58f920cc.js"),["assets/README.58f920cc.js","assets/vue-libs.b44bc779.js"]),fe=()=>t(()=>import("./README.906331c9.js"),["assets/README.906331c9.js","assets/vue-libs.b44bc779.js"]),ye=()=>t(()=>import("./README.bac9a3ff.js"),["assets/README.bac9a3ff.js","assets/vue-libs.b44bc779.js"]),be=()=>t(()=>import("./README.05c61dd9.js"),["assets/README.05c61dd9.js","assets/vue-libs.b44bc779.js"]),we=()=>t(()=>import("./README.ce1563fa.js"),["assets/README.ce1563fa.js","assets/vue-libs.b44bc779.js"]),ke=()=>t(()=>import("./README.e1a95f49.js"),["assets/README.e1a95f49.js","assets/vue-libs.b44bc779.js"]),Be=()=>t(()=>import("./README.95e4e7dd.js"),["assets/README.95e4e7dd.js","assets/vue-libs.b44bc779.js"]),xe=()=>t(()=>import("./README.466dc7a1.js"),["assets/README.466dc7a1.js","assets/vue-libs.b44bc779.js"]),Fe=()=>t(()=>import("./README.f21062bc.js"),["assets/README.f21062bc.js","assets/vue-libs.b44bc779.js"]),Me=()=>t(()=>import("./README.09071244.js"),["assets/README.09071244.js","assets/vue-libs.b44bc779.js"]),qe=()=>t(()=>import("./README.070d3e68.js"),["assets/README.070d3e68.js","assets/vue-libs.b44bc779.js"]),je=()=>t(()=>import("./README.f77c83ea.js"),["assets/README.f77c83ea.js","assets/vue-libs.b44bc779.js"]),$e=()=>t(()=>import("./README.519a16c5.js"),["assets/README.519a16c5.js","assets/vue-libs.b44bc779.js"]),He=()=>t(()=>import("./README.6e4f0255.js"),["assets/README.6e4f0255.js","assets/vue-libs.b44bc779.js"]),Ke=()=>t(()=>import("./README.d00160da.js"),["assets/README.d00160da.js","assets/vue-libs.b44bc779.js"]),We=()=>t(()=>import("./README.6369f9b2.js"),["assets/README.6369f9b2.js","assets/vue-libs.b44bc779.js"]),Ge=()=>t(()=>import("./README.448819ad.js"),["assets/README.448819ad.js","assets/vue-libs.b44bc779.js"]),Ze=()=>t(()=>import("./README.26d1ca3d.js"),["assets/README.26d1ca3d.js","assets/vue-libs.b44bc779.js"]),Qe=()=>t(()=>import("./README.2303603c.js"),["assets/README.2303603c.js","assets/vue-libs.b44bc779.js"]),Ye=()=>t(()=>import("./README.622ea33b.js"),["assets/README.622ea33b.js","assets/vue-libs.b44bc779.js"]),Je=()=>t(()=>import("./README.ef52af98.js"),["assets/README.ef52af98.js","assets/vue-libs.b44bc779.js"]),Xe=()=>t(()=>import("./README.6e2fffcf.js"),["assets/README.6e2fffcf.js","assets/vue-libs.b44bc779.js"]),t_=()=>t(()=>import("./README.57c64d10.js"),["assets/README.57c64d10.js","assets/vue-libs.b44bc779.js"]),e_=()=>t(()=>import("./README.83444065.js"),["assets/README.83444065.js","assets/vue-libs.b44bc779.js"]),__=()=>t(()=>import("./README.9fdc8a8a.js"),["assets/README.9fdc8a8a.js","assets/vue-libs.b44bc779.js"]),o_=()=>t(()=>import("./README.cca39220.js"),["assets/README.cca39220.js","assets/vue-libs.b44bc779.js"]),i_=()=>t(()=>import("./README.b91562d6.js"),["assets/README.b91562d6.js","assets/vue-libs.b44bc779.js"]),r_=()=>t(()=>import("./README.b5baaff8.js"),["assets/README.b5baaff8.js","assets/vue-libs.b44bc779.js"]),n_=()=>t(()=>import("./README.d1bcc77d.js"),["assets/README.d1bcc77d.js","assets/vue-libs.b44bc779.js"]),a_=()=>t(()=>import("./README.7a9634ff.js"),["assets/README.7a9634ff.js","assets/vue-libs.b44bc779.js"]),s_=()=>t(()=>import("./README.d8a0d530.js"),["assets/README.d8a0d530.js","assets/vue-libs.b44bc779.js"]),p_=()=>t(()=>import("./README.6e50caf9.js"),["assets/README.6e50caf9.js","assets/vue-libs.b44bc779.js"]),l_=()=>t(()=>import("./README.b0d8ebee.js"),["assets/README.b0d8ebee.js","assets/vue-libs.b44bc779.js"]),c_=()=>t(()=>import("./README.5647f246.js"),["assets/README.5647f246.js","assets/vue-libs.b44bc779.js"]),d_=()=>t(()=>import("./README.bc52f54e.js"),["assets/README.bc52f54e.js","assets/vue-libs.b44bc779.js"]),u_=()=>t(()=>import("./README.dc299817.js"),["assets/README.dc299817.js","assets/vue-libs.b44bc779.js"]),E_=()=>t(()=>import("./README.b2a120b1.js"),["assets/README.b2a120b1.js","assets/vue-libs.b44bc779.js"]),h_=()=>t(()=>import("./README.5a69d4f6.js"),["assets/README.5a69d4f6.js","assets/vue-libs.b44bc779.js"]),m_=()=>t(()=>import("./README.cafaeb41.js"),["assets/README.cafaeb41.js","assets/vue-libs.b44bc779.js"]),v_=()=>t(()=>import("./README.b7d5f9f5.js"),["assets/README.b7d5f9f5.js","assets/vue-libs.b44bc779.js"]),P_=()=>t(()=>import("./README.b81b0fe2.js"),["assets/README.b81b0fe2.js","assets/vue-libs.b44bc779.js"]),L_=()=>t(()=>import("./README.64009f3d.js"),["assets/README.64009f3d.js","assets/vue-libs.b44bc779.js"]),A_=()=>t(()=>import("./README.c96fdeb1.js"),["assets/README.c96fdeb1.js","assets/vue-libs.b44bc779.js"]),I_=()=>t(()=>import("./README.0110ee78.js"),["assets/README.0110ee78.js","assets/vue-libs.b44bc779.js"]),R_=()=>t(()=>import("./README.ce19728c.js"),["assets/README.ce19728c.js","assets/vue-libs.b44bc779.js"]),D_=()=>t(()=>import("./README.d9cacd1c.js"),["assets/README.d9cacd1c.js","assets/vue-libs.b44bc779.js"]),T_=()=>t(()=>import("./README.942e5974.js"),["assets/README.942e5974.js","assets/vue-libs.b44bc779.js"]),C_=()=>t(()=>import("./README.67b8f11a.js"),["assets/README.67b8f11a.js","assets/vue-libs.b44bc779.js"]),V_=()=>t(()=>import("./README.6ffd5275.js"),["assets/README.6ffd5275.js","assets/vue-libs.b44bc779.js"]),O_=()=>t(()=>import("./README.52e41b55.js"),["assets/README.52e41b55.js","assets/vue-libs.b44bc779.js"]),S_=()=>t(()=>import("./README.e786bdf0.js"),["assets/README.e786bdf0.js","assets/vue-libs.b44bc779.js"]),g_=()=>t(()=>import("./README.f6643068.js"),["assets/README.f6643068.js","assets/vue-libs.b44bc779.js"]),U_=()=>t(()=>import("./README.07f9af6e.js"),["assets/README.07f9af6e.js","assets/vue-libs.b44bc779.js"]),N_=()=>t(()=>import("./README.c0227f1c.js"),["assets/README.c0227f1c.js","assets/vue-libs.b44bc779.js"]),z_=()=>t(()=>import("./README.55677a38.js"),["assets/README.55677a38.js","assets/vue-libs.b44bc779.js"]),f_=()=>t(()=>import("./README.957544be.js"),["assets/README.957544be.js","assets/vue-libs.b44bc779.js"]),y_=()=>t(()=>import("./README.a9c2bbf2.js"),["assets/README.a9c2bbf2.js","assets/vue-libs.b44bc779.js"]),b_=()=>t(()=>import("./README.a22afba4.js"),["assets/README.a22afba4.js","assets/vue-libs.b44bc779.js"]),w_=()=>t(()=>import("./README.a6746b66.js"),["assets/README.a6746b66.js","assets/vue-libs.b44bc779.js"]),k_=()=>t(()=>import("./README.48e913bb.js"),["assets/README.48e913bb.js","assets/vue-libs.b44bc779.js"]),B_=()=>t(()=>import("./README.97f5b5b6.js"),["assets/README.97f5b5b6.js","assets/vue-libs.b44bc779.js"]),d={name:"vant",build:{srcDir:"src",tagPrefix:"van-",namedExport:!0,skipInstall:["lazyload"],packageManager:"pnpm",extensions:{esm:".mjs"},site:{publicPath:typeof window>"u"&&process.env.PUBLIC_PATH||"/vant/"}},site:{defaultLang:"en-US",versions:[{label:"v1",link:"/vant/v1/"},{label:"v2",link:"/vant/v2/"},{label:"v4",link:"/vant/v4/"}],baiduAnalytics:{seed:"af5d41bc4e446e76665dbe3ec18d55c3"},htmlMeta:{"docsearch:version":"v3"},headHtml:`<script>
if (location.host === 'youzan.github.io') {
location.href = location.href.replace('youzan.github.io', 'vant-ui.github.io');
}
<\/script>
`,locales:{"zh-CN":{title:"Vant 3",subtitle:"\uFF08\u9002\u7528\u4E8E Vue 3\uFF09",description:"\u8F7B\u91CF\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93",logo:"https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",langLabel:"\u4E2D",links:[{logo:"https://fastly.jsdelivr.net/npm/@vant/assets/weapp.svg",url:"https://vant-contrib.gitee.io/vant-weapp/"},{logo:"https://fastly.jsdelivr.net/npm/@vant/assets/github.svg",url:"https://github.com/vant-ui/vant"}],nav:[{title:"\u5F00\u53D1\u6307\u5357",items:[{path:"home",title:"\u4ECB\u7ECD"},{path:"quickstart",title:"\u5FEB\u901F\u4E0A\u624B"},{path:"advanced-usage",title:"\u8FDB\u9636\u7528\u6CD5"},{path:"faq",title:"\u5E38\u89C1\u95EE\u9898"},{path:"changelog",title:"\u66F4\u65B0\u65E5\u5FD7"},{path:"migrate-from-v2",title:"\u4ECE v2 \u5347\u7EA7"},{path:"contribution",title:"\u8D21\u732E\u6307\u5357"},{path:"design",title:"\u8BBE\u8BA1\u8D44\u6E90"},{path:"style-guide",title:"\u98CE\u683C\u6307\u5357"},{path:"locale",title:"\u56FD\u9645\u5316"}]},{title:"\u57FA\u7840\u7EC4\u4EF6",items:[{path:"button",title:"Button \u6309\u94AE"},{path:"cell",title:"Cell \u5355\u5143\u683C"},{path:"config-provider",title:"ConfigProvider \u5168\u5C40\u914D\u7F6E"},{path:"icon",title:"Icon \u56FE\u6807"},{path:"image",title:"Image \u56FE\u7247"},{path:"col",title:"Layout \u5E03\u5C40"},{path:"popup",title:"Popup \u5F39\u51FA\u5C42"},{path:"space",title:"Space \u95F4\u8DDD"},{path:"style",title:"Style \u5185\u7F6E\u6837\u5F0F"},{path:"toast",title:"Toast \u8F7B\u63D0\u793A"}]},{title:"\u8868\u5355\u7EC4\u4EF6",items:[{path:"calendar",title:"Calendar \u65E5\u5386"},{path:"cascader",title:"Cascader \u7EA7\u8054\u9009\u62E9"},{path:"checkbox",title:"Checkbox \u590D\u9009\u6846"},{path:"datetime-picker",title:"DatetimePicker \u65F6\u95F4\u9009\u62E9"},{path:"field",title:"Field \u8F93\u5165\u6846"},{path:"form",title:"Form \u8868\u5355"},{path:"number-keyboard",title:"NumberKeyboard \u6570\u5B57\u952E\u76D8"},{path:"password-input",title:"PasswordInput \u5BC6\u7801\u8F93\u5165\u6846"},{path:"picker",title:"Picker \u9009\u62E9\u5668"},{path:"radio",title:"Radio \u5355\u9009\u6846"},{path:"rate",title:"Rate \u8BC4\u5206"},{path:"search",title:"Search \u641C\u7D22"},{path:"slider",title:"Slider \u6ED1\u5757"},{path:"stepper",title:"Stepper \u6B65\u8FDB\u5668"},{path:"switch",title:"Switch \u5F00\u5173"},{path:"uploader",title:"Uploader \u6587\u4EF6\u4E0A\u4F20"}]},{title:"\u53CD\u9988\u7EC4\u4EF6",items:[{path:"action-sheet",title:"ActionSheet \u52A8\u4F5C\u9762\u677F"},{path:"dialog",title:"Dialog \u5F39\u51FA\u6846"},{path:"dropdown-menu",title:"DropdownMenu \u4E0B\u62C9\u83DC\u5355"},{path:"loading",title:"Loading \u52A0\u8F7D"},{path:"notify",title:"Notify \u6D88\u606F\u901A\u77E5"},{path:"overlay",title:"Overlay \u906E\u7F69\u5C42"},{path:"pull-refresh",title:"PullRefresh \u4E0B\u62C9\u5237\u65B0"},{path:"share-sheet",title:"ShareSheet \u5206\u4EAB\u9762\u677F"},{path:"swipe-cell",title:"SwipeCell \u6ED1\u52A8\u5355\u5143\u683C"}]},{title:"\u5C55\u793A\u7EC4\u4EF6",items:[{path:"badge",title:"Badge \u5FBD\u6807"},{path:"circle",title:"Circle \u73AF\u5F62\u8FDB\u5EA6\u6761"},{path:"collapse",title:"Collapse \u6298\u53E0\u9762\u677F"},{path:"count-down",title:"CountDown \u5012\u8BA1\u65F6"},{path:"divider",title:"Divider \u5206\u5272\u7EBF"},{path:"empty",title:"Empty \u7A7A\u72B6\u6001"},{path:"image-preview",title:"ImagePreview \u56FE\u7247\u9884\u89C8"},{path:"lazyload",title:"Lazyload \u61D2\u52A0\u8F7D"},{path:"list",title:"List \u5217\u8868"},{path:"notice-bar",title:"NoticeBar \u901A\u77E5\u680F"},{path:"popover",title:"Popover \u6C14\u6CE1\u5F39\u51FA\u6846"},{path:"progress",title:"Progress \u8FDB\u5EA6\u6761"},{path:"skeleton",title:"Skeleton \u9AA8\u67B6\u5C4F"},{path:"steps",title:"Steps \u6B65\u9AA4\u6761"},{path:"sticky",title:"Sticky \u7C98\u6027\u5E03\u5C40"},{path:"swipe",title:"Swipe \u8F6E\u64AD"},{path:"tag",title:"Tag \u6807\u7B7E"}]},{title:"\u5BFC\u822A\u7EC4\u4EF6",items:[{path:"action-bar",title:"ActionBar \u52A8\u4F5C\u680F"},{path:"grid",title:"Grid \u5BAB\u683C"},{path:"index-bar",title:"IndexBar \u7D22\u5F15\u680F"},{path:"nav-bar",title:"NavBar \u5BFC\u822A\u680F"},{path:"pagination",title:"Pagination \u5206\u9875"},{path:"sidebar",title:"Sidebar \u4FA7\u8FB9\u5BFC\u822A"},{path:"tab",title:"Tab \u6807\u7B7E\u9875"},{path:"tabbar",title:"Tabbar \u6807\u7B7E\u680F"},{path:"tree-select",title:"TreeSelect \u5206\u7C7B\u9009\u62E9"}]},{title:"\u4E1A\u52A1\u7EC4\u4EF6",items:[{path:"address-edit",title:"AddressEdit \u5730\u5740\u7F16\u8F91"},{path:"address-list",title:"AddressList \u5730\u5740\u5217\u8868"},{path:"area",title:"Area \u7701\u5E02\u533A\u9009\u62E9"},{path:"card",title:"Card \u5546\u54C1\u5361\u7247"},{path:"contact-card",title:"ContactCard \u8054\u7CFB\u4EBA\u5361\u7247"},{path:"contact-edit",title:"ContactEdit \u8054\u7CFB\u4EBA\u7F16\u8F91"},{path:"contact-list",title:"ContactList \u8054\u7CFB\u4EBA\u5217\u8868"},{path:"coupon-list",title:"Coupon \u4F18\u60E0\u5238"},{path:"submit-bar",title:"SubmitBar \u63D0\u4EA4\u8BA2\u5355\u680F"}]},{title:"\u7EC4\u5408\u5F0F API",items:[{path:"vant-use-intro",title:"\u4ECB\u7ECD"},{path:"use-click-away",title:"useClickAway"},{path:"use-count-down",title:"useCountDown"},{path:"use-custom-field-value",title:"useCustomFieldValue"},{path:"use-event-listener",title:"useEventListener"},{path:"use-page-visibility",title:"usePageVisibility"},{path:"use-rect",title:"useRect"},{path:"use-relation",title:"useRelation"},{path:"use-scroll-parent",title:"useScrollParent"},{path:"use-toggle",title:"useToggle"},{path:"use-window-size",title:"useWindowSize"}]},{title:"\u5E9F\u5F03",items:[{path:"theme",title:"\u5B9A\u5236\u4E3B\u9898"}]}]},"en-US":{title:"Vant 3",subtitle:" (for Vue 3)",description:"Lightweight Mobile UI Components built on Vue",logo:"https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",langLabel:"EN",links:[{logo:"https://fastly.jsdelivr.net/npm/@vant/assets/github.svg",url:"https://github.com/vant-ui/vant"}],nav:[{title:"Essentials",items:[{path:"home",title:"Introduction"},{path:"quickstart",title:"Quickstart"},{path:"advanced-usage",title:"Advanced Usage"},{path:"changelog",title:"Changelog"},{path:"design",title:"Design Resources"},{path:"locale",title:"Internationalization"}]},{title:"Basic Components",items:[{path:"button",title:"Button"},{path:"cell",title:"Cell"},{path:"config-provider",title:"ConfigProvider"},{path:"icon",title:"Icon"},{path:"image",title:"Image"},{path:"col",title:"Layout"},{path:"popup",title:"Popup"},{path:"space",title:"Space"},{path:"style",title:"Built-in style"},{path:"toast",title:"Toast"}]},{title:"Form Components",items:[{path:"calendar",title:"Calendar"},{path:"cascader",title:"Cascader"},{path:"checkbox",title:"Checkbox"},{path:"datetime-picker",title:"DatetimePicker"},{path:"field",title:"Field"},{path:"form",title:"Form"},{path:"number-keyboard",title:"NumberKeyboard"},{path:"password-input",title:"PasswordInput"},{path:"picker",title:"Picker"},{path:"radio",title:"Radio"},{path:"rate",title:"Rate"},{path:"search",title:"Search"},{path:"slider",title:"Slider"},{path:"stepper",title:"Stepper"},{path:"switch",title:"Switch"},{path:"uploader",title:"Uploader"}]},{title:"Action Components",items:[{path:"action-sheet",title:"ActionSheet"},{path:"dialog",title:"Dialog"},{path:"dropdown-menu",title:"DropdownMenu"},{path:"loading",title:"Loading"},{path:"notify",title:"Notify"},{path:"overlay",title:"Overlay"},{path:"pull-refresh",title:"PullRefresh"},{path:"share-sheet",title:"ShareSheet"},{path:"swipe-cell",title:"SwipeCell"}]},{title:"Display Components",items:[{path:"badge",title:"Badge"},{path:"circle",title:"Circle"},{path:"collapse",title:"Collapse"},{path:"count-down",title:"CountDown"},{path:"divider",title:"Divider"},{path:"empty",title:"Empty"},{path:"image-preview",title:"ImagePreview"},{path:"lazyload",title:"Lazyload"},{path:"list",title:"List"},{path:"notice-bar",title:"NoticeBar"},{path:"popover",title:"Popover"},{path:"progress",title:"Progress"},{path:"skeleton",title:"Skeleton"},{path:"steps",title:"Steps"},{path:"sticky",title:"Sticky"},{path:"swipe",title:"Swipe"},{path:"tag",title:"Tag"}]},{title:"Navigation Components",items:[{path:"action-bar",title:"ActionBar"},{path:"grid",title:"Grid"},{path:"index-bar",title:"IndexBar"},{path:"nav-bar",title:"NavBar"},{path:"pagination",title:"Pagination"},{path:"sidebar",title:"Sidebar"},{path:"tab",title:"Tab"},{path:"tabbar",title:"Tabbar"},{path:"tree-select",title:"TreeSelect"}]},{title:"Business Components",items:[{path:"address-edit",title:"AddressEdit"},{path:"address-list",title:"AddressList"},{path:"area",title:"Area"},{path:"card",title:"Card"},{path:"contact-card",title:"ContactCard"},{path:"contact-edit",title:"ContactEdit"},{path:"contact-list",title:"ContactList"},{path:"coupon-list",title:"Coupon"},{path:"submit-bar",title:"SubmitBar"}]},{title:"Composables",items:[{path:"vant-use-intro",title:"Intro"},{path:"use-click-away",title:"useClickAway"},{path:"use-count-down",title:"useCountDown"},{path:"use-custom-field-value",title:"useCustomFieldValue"},{path:"use-event-listener",title:"useEventListener"},{path:"use-page-visibility",title:"usePageVisibility"},{path:"use-rect",title:"useRect"},{path:"use-relation",title:"useRelation"},{path:"use-scroll-parent",title:"useScrollParent"},{path:"use-toggle",title:"useToggle"},{path:"use-window-size",title:"useWindowSize"}]},{title:"Deprecated",items:[{path:"theme",title:"Custom Theme"}]}]}}}},j_={AdvancedUsage_en_US:I,AdvancedUsage_zh_CN:R,Changelog_en_US:D,Changelog_zh_CN:T,Contribution_zh_CN:C,Design_en_US:V,Design_zh_CN:O,Faq_zh_CN:S,Home_en_US:g,Home_zh_CN:U,MigrateFromV2_zh_CN:N,Quickstart_en_US:z,Quickstart_zh_CN:f,StyleGuide_zh_CN:y,Theme_en_US:b,Theme_zh_CN:w,UseClickAway_en_US:k,UseClickAway_zh_CN:B,UseCountDown_en_US:x,UseCountDown_zh_CN:F,UseCustomFieldValue_en_US:M,UseCustomFieldValue_zh_CN:q,UseEventListener_en_US:j,UseEventListener_zh_CN:$,UsePageVisibility_en_US:H,UsePageVisibility_zh_CN:K,UseRect_en_US:W,UseRect_zh_CN:G,UseRelation_en_US:Z,UseRelation_zh_CN:Q,UseScrollParent_en_US:Y,UseScrollParent_zh_CN:J,UseToggle_en_US:X,UseToggle_zh_CN:tt,UseWindowSize_en_US:et,UseWindowSize_zh_CN:_t,VantUseIntro_en_US:ot,VantUseIntro_zh_CN:it,ActionBar_zh_CN:rt,ActionSheet_zh_CN:nt,AddressEdit_zh_CN:at,AddressList_zh_CN:st,Area_zh_CN:pt,Badge_zh_CN:lt,Button_zh_CN:ct,Calendar_zh_CN:dt,Card_zh_CN:ut,Cascader_zh_CN:Et,Cell_zh_CN:ht,Checkbox_zh_CN:mt,Circle_zh_CN:vt,Col_zh_CN:Pt,Collapse_zh_CN:Lt,ConfigProvider_zh_CN:At,ContactCard_zh_CN:It,ContactEdit_zh_CN:Rt,ContactList_zh_CN:Dt,CountDown_zh_CN:Tt,CouponList_zh_CN:Ct,DatetimePicker_zh_CN:Vt,Dialog_zh_CN:Ot,Divider_zh_CN:St,DropdownMenu_zh_CN:gt,Empty_zh_CN:Ut,Field_zh_CN:Nt,Form_zh_CN:zt,Grid_zh_CN:ft,Icon_zh_CN:yt,Image_zh_CN:bt,ImagePreview_zh_CN:wt,IndexBar_zh_CN:kt,Lazyload_zh_CN:Bt,List_zh_CN:xt,Loading_zh_CN:Ft,Locale_zh_CN:Mt,NavBar_zh_CN:qt,NoticeBar_zh_CN:jt,Notify_zh_CN:$t,NumberKeyboard_zh_CN:Ht,Overlay_zh_CN:Kt,Pagination_zh_CN:Wt,PasswordInput_zh_CN:Gt,Picker_zh_CN:Zt,Popover_zh_CN:Qt,Popup_zh_CN:Yt,Progress_zh_CN:Jt,PullRefresh_zh_CN:Xt,Radio_zh_CN:te,Rate_zh_CN:ee,Search_zh_CN:_e,ShareSheet_zh_CN:oe,Sidebar_zh_CN:ie,Skeleton_zh_CN:re,Slider_zh_CN:ne,Space_zh_CN:ae,Stepper_zh_CN:se,Steps_zh_CN:pe,Sticky_zh_CN:le,Style_zh_CN:ce,SubmitBar_zh_CN:de,Swipe_zh_CN:ue,SwipeCell_zh_CN:Ee,Switch_zh_CN:he,Tab_zh_CN:me,Tabbar_zh_CN:ve,Tag_zh_CN:Pe,Toast_zh_CN:Le,TreeSelect_zh_CN:Ae,Uploader_zh_CN:Ie,ActionBar_en_US:Re,ActionSheet_en_US:De,AddressEdit_en_US:Te,AddressList_en_US:Ce,Area_en_US:Ve,Badge_en_US:Oe,Button_en_US:Se,Calendar_en_US:ge,Card_en_US:Ue,Cascader_en_US:Ne,Cell_en_US:ze,Checkbox_en_US:fe,Circle_en_US:ye,Col_en_US:be,Collapse_en_US:we,ConfigProvider_en_US:ke,ContactCard_en_US:Be,ContactEdit_en_US:xe,ContactList_en_US:Fe,CountDown_en_US:Me,CouponList_en_US:qe,DatetimePicker_en_US:je,Dialog_en_US:$e,Divider_en_US:He,DropdownMenu_en_US:Ke,Empty_en_US:We,Field_en_US:Ge,Form_en_US:Ze,Grid_en_US:Qe,Icon_en_US:Ye,Image_en_US:Je,ImagePreview_en_US:Xe,IndexBar_en_US:t_,Lazyload_en_US:e_,List_en_US:__,Loading_en_US:o_,Locale_en_US:i_,NavBar_en_US:r_,NoticeBar_en_US:n_,Notify_en_US:a_,NumberKeyboard_en_US:s_,Overlay_en_US:p_,Pagination_en_US:l_,PasswordInput_en_US:c_,Picker_en_US:d_,Popover_en_US:u_,Popup_en_US:E_,Progress_en_US:h_,PullRefresh_en_US:m_,Radio_en_US:v_,Rate_en_US:P_,Search_en_US:L_,ShareSheet_en_US:A_,Sidebar_en_US:I_,Skeleton_en_US:R_,Slider_en_US:D_,Space_en_US:T_,Stepper_en_US:C_,Steps_en_US:V_,Sticky_en_US:O_,Style_en_US:S_,SubmitBar_en_US:g_,Swipe_en_US:U_,SwipeCell_en_US:N_,Switch_en_US:z_,Tab_en_US:f_,Tabbar_en_US:y_,Tag_en_US:b_,Toast_en_US:w_,TreeSelect_en_US:k_,Uploader_en_US:B_},$_="3.6.3",x_=navigator.userAgent.toLowerCase(),H_=/ios|iphone|ipod|ipad|android/.test(x_);function K_(o,e="-"){return o.replace(/([a-z\d])([A-Z])/g,"$1"+e+"$2").replace(/([A-Z])([A-Z][a-z\d]+)/g,"$1"+e+"$2").toLowerCase()}function W_(o){const e=document.createElement("textarea");e.value=o,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e);const i=document.getSelection();if(!i)return;const n=i.rangeCount>0?i.getRangeAt(0):!1;e.select(),document.execCommand("copy"),document.body.removeChild(e),n&&(i.removeAllRanges(),i.addRange(n))}const u="zh-CN",F_="en-US",E="vant-cli-lang";let p=u;function G_(){return p}function Z_(o){p=o,localStorage.setItem(E,o)}function Q_(o){const e=localStorage.getItem(E);if(e){p=e;return}if(navigator.language&&navigator.language.indexOf("zh-")!==-1){p=u;return}p=o||F_}let l=[],h=!1;function M_(o){h?o():l.push(o)}window.top===window?window.addEventListener("message",o=>{o.data.type==="iframeReady"&&(h=!0,l.forEach(e=>e()),l=[])}):window.top.postMessage({type:"iframeReady"},"*");function m(){var i,n;const o=window.vueRouter,{path:e}=o.currentRoute.value;return(i=d.site.simulator)!=null&&i.routeMapper?(n=d.site.simulator)==null?void 0:n.routeMapper(e):e}function Y_(){window.top.postMessage({type:"replacePath",value:m()},"*")}function J_(){const o=document.querySelector("iframe");o&&M_(()=>{o.contentWindow.postMessage({type:"replacePath",value:m()},"*")})}function X_(o){window.addEventListener("message",e=>{var n,_;if(((n=e.data)==null?void 0:n.type)!=="replacePath")return;const i=((_=e.data)==null?void 0:_.value)||"";o.currentRoute.value.path!==i&&o.replace(i).catch(()=>{})})}export{q_ as _,t as a,d as b,W_ as c,Q_ as d,j_ as e,J_ as f,K_ as g,G_ as h,H_ as i,Y_ as j,X_ as l,$_ as p,Z_ as s};