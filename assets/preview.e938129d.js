import{_ as m,r as s,l as _,b as g,q as y,o as i,c as r,d,s as u,e as w,g as C,f as a,t as v,T as k,p as S,j as z}from"./index.6aa3e8c3.js";const I=o=>(S("data-v-1b49cf23"),o=o(),z(),o),N={class:"pre-code-box"},B={key:0,class:"language-html"},q={class:"language-html"},D=I(()=>a("textarea",{id:"inputCopy"},null,-1)),M={__name:"preview",props:{compname:{type:String,default:"",require:!0},demoname:{type:String,default:"",require:!0}},setup(o){const n=o,e=s(!1),p=s("1px solid rgba(0,0,0,.06)"),f=()=>{e.value=!e.value,e.value?p.value="0":p.value="1px solid rgba(0,0,0,.06)"},c=s("");async function x(){c.value=await fetch(`/packages/${n.compName}/doc/${n.demoName}.vue`).then(t=>t.text())}const b=()=>{const t=document.getElementById("inputCopy");t.value=c.value,t.select(),document.execCommand("copy")?(document.execCommand("copy"),Message({type:"success",text:"\u4EE3\u7801\u590D\u5236\u6210\u529F"})):Message({type:"error",text:"\u4EE3\u7801\u590D\u5236\u6210\u529F"})};return _(()=>{x()}),(t,V)=>{const l=g("x-icon"),h=y("highlight");return i(),r("div",N,[e.value?(i(),r("span",{key:0,class:"m-copy",onClick:b},[d(l,{code:"icon-copy",size:"1.5"})])):u("",!0),d(k,{name:"slide-fade"},{default:w(()=>[e.value?C((i(),r("pre",B,[a("code",q,v(c.value),1)])),[[h]]):u("",!0)]),_:1}),a("div",{class:"showCode",onClick:f},[a("span",null,v(e.value?"\u9690\u85CF\u4EE3\u7801":"\u663E\u793A\u4EE3\u7801"),1),d(l,{code:"icon-code",size:"1",class:"x-icon"})]),D])}}};var E=m(M,[["__scopeId","data-v-1b49cf23"]]);export{E as p};