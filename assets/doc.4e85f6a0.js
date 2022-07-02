import{_ as k,C as V,o as a,c as v,f as e,D as A,n as C,i as x,r as I,l as j,z as l,e as i,t as u,s as p,d,x as s,T as M,G as m,b as y,B as D}from"./index.6aa3e8c3.js";import"./index.e40bc449.js";import{x as G}from"./index.d76b18ff.js";import{M as f}from"./index.0040b458.js";import{p as h}from"./preview.e938129d.js";const J=["disabled"],O={name:"xButton"},P=Object.assign(O,{props:{type:{type:String,default:"default"},disabled:{type:Boolean,default:!1},round:{type:Boolean,default:!1},plain:{type:Boolean,default:!1},size:{type:String,default:"default"}},setup(t){const o=t,c=V(()=>["x-button",`x-button-${o.type}`,o.disabled?"x-button-disabled":"",o.round?"x-button-round":"",o.plain?"x-button-plain":"",o.size?`x-button-${o.size}`:""]);return(n,r)=>(a(),v("button",{class:C(x(c)),disabled:t.disabled},[e("span",null,[A(n.$slots,"default",{},void 0,!0)])],10,J))}});var b=k(P,[["__scopeId","data-v-090ec9d0"]]);b.install=t=>{t.component(b.name,b)};const q={class:"mzl-wrapper"},H={class:"mzl-header"},K={class:"mzl-body"},L={class:"mzl-footer"},Q={__name:"index",props:{title:{type:String,default:"\u63D0\u793A"},text:{type:String,default:""},icon:{type:String,default:"icon-jinggao"},confirmText:{type:String,default:"\u786E\u8BA4"},cancelText:{type:String,default:"\u53D6\u6D88"},confirmShow:{type:Boolean,default:!0},cancelShow:{type:Boolean,default:!0},closeShow:{type:Boolean,default:!0},customClass:String,confirmCallback:{type:Function,default:()=>{}},cancelCallback:{type:Function,default:()=>{}}},setup(t){const o=I(!1);return j(()=>{o.value=!0}),(c,n)=>(a(),l(M,{name:"fade"},{default:i(()=>[o.value?(a(),v("div",{key:0,class:C(["mzl-confirm",t.customClass])},[e("div",q,[e("div",H,[e("h3",null,u(t.title),1),t.closeShow?(a(),v("a",{key:0,href:"JavaScript:;",class:"m-icon-close",onClick:n[0]||(n[0]=(...r)=>t.cancelCallback&&t.cancelCallback(...r))})):p("",!0)]),e("div",K,[d(x(G),{code:t.icon,size:"1"},null,8,["code"]),e("span",null,u(t.text),1)]),e("div",L,[t.cancelShow?(a(),l(x(b),{key:0,onClick:t.cancelCallback,size:"small",style:{"margin-right":"10px"}},{default:i(()=>[s(u(t.cancelText),1)]),_:1},8,["onClick"])):p("",!0),t.confirmShow?(a(),l(x(b),{key:1,onClick:t.confirmCallback,size:"small",type:"primary"},{default:i(()=>[s(u(t.confirmText),1)]),_:1},8,["onClick"])):p("",!0)])])],2)):p("",!0)]),_:1}))}};var R=k(Q,[["__scopeId","data-v-382bbbb6"]]);const w=d("div",{class:"mzlui-confirm-container"});m(w,typeof document!="undefined"?document.body:"");const g=w.el,S=({title:t,text:o,icon:c,confirmText:n,cancelText:r,confirmShow:_,cancelShow:$,closeShow:B,customClass:T})=>(typeof document!="undefined"&&(document.body.style="overflow:hidden"),new Promise((F,N)=>{const E=d(R,{title:t,text:o,icon:c,confirmText:n,cancelText:r,confirmShow:_,cancelShow:$,closeShow:B,customClass:T,confirmCallback:()=>{F(),m(null,g),typeof document!="undefined"&&(document.body.style="overflow:initial")},cancelCallback:()=>{N(),m(null,g),typeof document!="undefined"&&(document.body.style="overflow:initial")}});m(E,g)})),U=s("\u786E\u8BA4\u6D88\u606F"),W={__name:"base",setup(t){const o=()=>{S({text:"\u60A8\u786E\u8BA4\u8981\u5220\u9664\u8FD9\u6761\u6570\u636E\u5417\uFF1F"}).then(()=>{f({text:"\u70B9\u51FB\u4E86\u786E\u5B9A"})}).catch(()=>{f({text:"\u70B9\u51FB\u4E86\u53D6\u6D88"})})};return(c,n)=>{const r=y("x-button");return a(),l(r,{onClick:o},{default:i(()=>[U]),_:1})}}},X=s("\u786E\u8BA4\u6D88\u606F"),Y={__name:"instance",setup(t){const o=D(),c=()=>{o.proxy.$Confirm({text:"\u60A8\u786E\u8BA4\u8981\u5220\u9664\u8FD9\u6761\u6570\u636E\u5417\uFF1F"}).then(()=>{f({text:"\u70B9\u51FB\u4E86\u786E\u5B9A",icon:"icon-success"})}).catch(()=>{f({text:"\u70B9\u51FB\u4E86\u53D6\u6D88",icon:"icon-jinggao"})})};return(n,r)=>{const _=y("x-button");return a(),l(_,{onClick:c},{default:i(()=>[X]),_:1})}}},Z=s("\u81EA\u5B9A\u4E49\u914D\u7F6E"),tt={__name:"diy",setup(t){const o=()=>{S({title:"\u63D0\u793A\u4FE1\u606F",text:"\u786E\u8BA42022-07-02\u662F\u60A8\u7684\u751F\u65E5\u5417\uFF1F",icon:"icon-calendar-v2",confirmText:"\u662F\u7684",cancelText:"\u4E0D\u662F",closeShow:!1}).then(()=>{f({text:"\u662F\u7684"})}).catch(()=>{f({text:"\u4E0D\u662F"})})};return(c,n)=>{const r=y("x-button");return a(),l(r,{onClick:o},{default:i(()=>[Z]),_:1})}}};var z={};const ot={class:"markdown-body"},et=e("h2",null,"Confirm\u6D88\u606F\u786E\u8BA4",-1),nt=e("p",null,"\u5E38\u7528\u4E8E\u4EA4\u4E92\u53CD\u9988\u786E\u8BA4\u573A\u666F",-1),at=e("h3",null,"\u57FA\u7840\u7528\u6CD5",-1),ct=e("p",null,"Confirm \u6D88\u606F\u786E\u8BA4\u57FA\u672C\u4F7F\u7528\u793A\u4F8B\u3002",-1),rt=e("h3",null,"\u901A\u8FC7\u7EC4\u4EF6\u5B9E\u4F8B\u8C03\u7528",-1),dt=e("p",null,"\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u65B9\u5F0F\u6765\u8C03\u7528\u3002",-1),lt=e("h3",null,"\u62D3\u5C55\u81EA\u5B9A\u4E49\u914D\u7F6E",-1),it=e("p",null,"\u81EA\u5B9A\u4E49\u914D\u7F6E\u6574\u4E2A\u6D88\u606F\u786E\u8BA4\u6846\u7684\u5143\u7D20",-1),_t={},ft={__name:"doc",setup(t,{expose:o}){return o({frontmatter:{}}),(c,n)=>(a(),v("div",ot,[et,nt,at,ct,d(W),d(h,{compname:"confirm",demoname:"base"}),rt,dt,d(Y),d(h,{compname:"confirm",demoname:"instance"}),lt,it,d(tt),d(h,{compname:"confirm",demoname:"diy"})]))}};typeof z=="function"&&z(ft);export{ft as default,_t as frontmatter};