import{_ as g,e as a,f as m,g as _,o as t,c as r,h as l,b as y,w as b,i as w,a as c,t as p,T as C,p as j,j as z}from"./index.9d3a5a44.js";var k=`<template>\r
    <div class="x-showIcon">\r
        <x-icon code="icon-shanchu2"></x-icon>\r
        <x-icon code="icon-jiantou"></x-icon>\r
        <x-icon code="icon-shangchuan"></x-icon>\r
        <x-icon code="icon-xiazai"></x-icon>\r
        <x-icon code="icon-xiajiantou"></x-icon>\r
        <x-icon code="icon-sousuo"></x-icon>\r
        <x-icon code="icon-xiangshangjiantou"></x-icon>\r
        <x-icon code="icon-xiangzuojiantou"></x-icon>\r
        <x-icon code="icon-tupian"></x-icon>\r
        <x-icon code="icon-91jiazai"></x-icon>\r
        <x-icon code="icon-failed"></x-icon>\r
        <x-icon code="icon-success"></x-icon>\r
        <x-icon code="icon-jinggao"></x-icon>\r
         <x-icon code="icon-calendar-v2"></x-icon>\r
         <x-icon code="icon-jujiao"></x-icon>\r
         <x-icon code="icon-xiaoyufuhao"></x-icon>\r
         <x-icon code="icon-xiaoyudengyu"></x-icon>\r
         <x-icon code="icon-dayuhao"></x-icon>\r
         <x-icon code="icon-shezhi"></x-icon>\r
         <x-icon code="icon-fenxiang"></x-icon>\r
         <x-icon code="icon-user__easyico"></x-icon>\r
         <x-icon code="icon-icon-test"></x-icon>\r
         <x-icon code="icon-yonghu"></x-icon>\r
         <x-icon code="icon-a-wenjianjia2"></x-icon>\r
         <x-icon code="icon-a-wenjianjia2"></x-icon>\r
         <x-icon code="icon-a-gongzuotaigongzuozhuo-02"></x-icon>\r
         <x-icon code="icon-email"></x-icon>\r
         <x-icon code="icon-eye-close"></x-icon>\r
         <x-icon code="icon-edit"></x-icon>\r
         <x-icon code="icon-elipsis"></x-icon>\r
         <x-icon code="icon-copy"></x-icon>\r
         <x-icon code="icon-delete"></x-icon>\r
         <x-icon code="icon-customer-service"></x-icon>\r
         <x-icon code="icon-cry"></x-icon>\r
         <x-icon code="icon-chart-pie"></x-icon>\r
         <x-icon code="icon-complete"></x-icon>\r
         <x-icon code="icon-check-item"></x-icon>\r
         <x-icon code="icon-code"></x-icon>\r
         <x-icon code="icon-attachment"></x-icon>\r
         <x-icon code="icon-chart-bar"></x-icon>\r
         <x-icon code="icon-camera"></x-icon>\r
         <x-icon code="icon-caozuo1"></x-icon>\r
         <x-icon code="icon-caozuo"></x-icon>\r
         <x-icon code="icon-bianji"></x-icon>\r
         <x-icon code="icon-gouwucheman"></x-icon>\r
         <x-icon code="icon-gouwuchekong"></x-icon>\r
    </div>\r
</template>\r
\r
<script setup>\r
\r
<\/script>\r
\r
<style lang="scss" scoped>\r
.x-showIcon{\r
    width: 900px;\r
    display: flex;\r
    flex-wrap: wrap;\r
    justify-content: space-between;\r
}\r
\r
</style>`;const d=n=>(j("data-v-6cd86f68"),n=n(),z(),n),I={class:"pre-code-box"},S=d(()=>c("i",{class:"m-icon-copy"},null,-1)),B=[S],D={key:0,class:"language-html"},M={class:"language-html"},N=d(()=>c("i",{class:"m-icon-code"},null,-1)),V=d(()=>c("textarea",{id:"inputCopy"},null,-1)),q={__name:"preview",props:{compname:{type:String,default:"",require:!0},demoname:{type:String,default:"",require:!0}},setup(n){const s=n;console.log(s.compname,s.demoname),console.log("================");const o=a(!1),x=a("1px solid rgba(0,0,0,.06)"),u=()=>{o.value=!o.value,o.value?x.value="0":x.value="1px solid rgba(0,0,0,.06)"},e=a("");async function h(){e.value=k}const f=()=>{const i=document.getElementById("inputCopy");i.value=e.value,i.select(),document.execCommand("copy")?(document.execCommand("copy"),Message({type:"success",text:"\u4EE3\u7801\u590D\u5236\u6210\u529F"})):Message({type:"error",text:"\u4EE3\u7801\u590D\u5236\u6210\u529F"})};return m(()=>{h()}),(i,E)=>{const v=_("highlight");return t(),r("div",I,[o.value?(t(),r("span",{key:0,class:"m-copy",onClick:f},B)):l("",!0),y(C,{name:"slide-fade"},{default:b(()=>[o.value?w((t(),r("pre",D,[c("code",M,p(e.value),1)])),[[v]]):l("",!0)]),_:1}),c("div",{class:"showCode",onClick:u},[c("span",null,p(o.value?"\u9690\u85CF\u4EE3\u7801":"\u663E\u793A\u4EE3\u7801"),1),N]),V])}}};var O=g(q,[["__scopeId","data-v-6cd86f68"]]);export{O as p};
