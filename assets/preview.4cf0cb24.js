import{_ as g,r as c,l as b,b as y,q as w,o as i,c as r,d,s as u,e as C,g as k,f as a,t as v,T as S,p as z,j as I,x}from"./index.f0d6a333.js";const B=o=>(z("data-v-26702e3e"),o=o(),I(),o),q={class:"pre-code-box"},D={key:0,class:"language-html"},N={class:"language-html"},V=B(()=>a("textarea",{id:"inputCopy"},null,-1)),j={__name:"preview",props:{compname:{type:String,default:"",require:!0},demoname:{type:String,default:"",require:!0}},setup(o){const n=o,e=c(!1),p=c("1px solid rgba(0,0,0,.06)"),h=()=>{e.value=!e.value,e.value?p.value="0":p.value="1px solid rgba(0,0,0,.06)"},s=c("");async function m(){s.value=await fetch(`/x-ui-doc/packages/${n.compname}/doc/${n.demoname}.vue`).then(t=>t.text())}const f=()=>{const t=document.getElementById("inputCopy");t.value=s.value,t.select(),document.execCommand("copy")?(document.execCommand("copy"),x({type:"success",text:"\u4EE3\u7801\u590D\u5236\u6210\u529F"})):x({type:"error",text:"\u4EE3\u7801\u590D\u5236\u6210\u529F"})};return b(()=>{m()}),(t,E)=>{const l=y("x-icon"),_=w("highlight");return i(),r("div",q,[e.value?(i(),r("span",{key:0,class:"m-copy",onClick:f},[d(l,{code:"icon-copy",size:"1.5"})])):u("",!0),d(S,{name:"slide-fade"},{default:C(()=>[e.value?k((i(),r("pre",D,[a("code",N,v(s.value),1)])),[[_]]):u("",!0)]),_:1}),a("div",{class:"showCode",onClick:h},[a("span",null,v(e.value?"\u9690\u85CF\u4EE3\u7801":"\u663E\u793A\u4EE3\u7801"),1),d(l,{code:"icon-code",size:"1",class:"x-icon"})]),V])}}};var T=g(j,[["__scopeId","data-v-26702e3e"]]);export{T as p};