import{_,r as i,l as f,q as g,o as c,c as r,s as l,d as b,e as y,g as w,f as o,t as u,T as C,p as k,j as S}from"./index.69e5dc9a.js";const d=t=>(k("data-v-5197528e"),t=t(),S(),t),I={class:"pre-code-box"},N=d(()=>o("i",{class:"m-icon-copy"},null,-1)),z=[N],B={key:0,class:"language-html"},q={class:"language-html"},D=d(()=>o("i",{class:"m-icon-code"},null,-1)),M=d(()=>o("textarea",{id:"inputCopy"},null,-1)),V={__name:"preview",props:{compname:{type:String,default:"",require:!0},demoname:{type:String,default:"",require:!0}},setup(t){const n=t,e=i(!1),p=i("1px solid rgba(0,0,0,.06)"),v=()=>{e.value=!e.value,e.value?p.value="0":p.value="1px solid rgba(0,0,0,.06)"},s=i("");async function h(){s.value=await fetch(`../packages/${n.compName}/doc/${n.demoName}.vue?raw`).then(a=>a.text())}const x=()=>{const a=document.getElementById("inputCopy");a.value=s.value,a.select(),document.execCommand("copy")?(document.execCommand("copy"),Message({type:"success",text:"\u4EE3\u7801\u590D\u5236\u6210\u529F"})):Message({type:"error",text:"\u4EE3\u7801\u590D\u5236\u6210\u529F"})};return f(()=>{h()}),(a,j)=>{const m=g("highlight");return c(),r("div",I,[e.value?(c(),r("span",{key:0,class:"m-copy",onClick:x},z)):l("",!0),b(C,{name:"slide-fade"},{default:y(()=>[e.value?w((c(),r("pre",B,[o("code",q,u(s.value),1)])),[[m]]):l("",!0)]),_:1}),o("div",{class:"showCode",onClick:v},[o("span",null,u(e.value?"\u9690\u85CF\u4EE3\u7801":"\u663E\u793A\u4EE3\u7801"),1),D]),M])}}};var T=_(V,[["__scopeId","data-v-5197528e"]]);export{T as p};
