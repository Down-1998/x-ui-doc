import{y as u,b as d,o as a,c,d as e,r as h,_ as f,f as t,x as r}from"./index.c777425e.js";import{p as i}from"./preview.3e77de0f.js";const x={__name:"base",setup(_){const l=u({options:[{label:"\u4E2D\u56FD",value:"cn"},{label:"\u7F8E\u56FD",value:"mg"},{label:"\u82F1\u56FD",value:"yg"},{label:"\u4FC4\u7F57\u65AF",value:"els"},{label:"\u97E9\u56FD",value:"hg"}]});return(s,n)=>{const o=d("x-select");return a(),c("div",null,[e(o,{options:l.options},null,8,["options"])])}}},g={__name:"size",setup(_){const l=u({options:[{label:"\u4E2D\u56FD",value:"cn"},{label:"\u7F8E\u56FD",value:"mg"},{label:"\u82F1\u56FD",value:"yg"},{label:"\u4FC4\u7F57\u65AF",value:"els"},{label:"\u97E9\u56FD",value:"hg"}]});return(s,n)=>{const o=d("x-select");return a(),c("div",null,[e(o,{options:l.options,size:"small"},null,8,["options"]),e(o,{options:l.options},null,8,["options"]),e(o,{options:l.options,size:"lager"},null,8,["options"])])}}},y={__name:"diff",setup(_){const l=h(""),s=u({options:[{name:"\u4E2D\u56FD1",id:"cn"},{name:"\u7F8E\u56FD2",id:"mg",disabled:!0},{name:"\u82F1\u56FD3",id:"yg"},{name:"\u4FC4\u7F57\u65AF4",id:"els"},{name:"\u97E9\u56FD5",id:"hg"}]}),n=o=>{console.log(o,22222),console.log(l.value,2223333322)};return(o,p)=>{const b=d("x-select");return a(),c("div",null,[e(b,{options:s.options,filedLabel:"name",filedValue:"id",onChange:n,placeholder:"\u8BF7\u9009\u62E9",modelValue:l.value,"onUpdate:modelValue":p[0]||(p[0]=v=>l.value=v)},null,8,["options","modelValue"])])}}};const V={__name:"disable",setup(_){const l=u({options:[{label:"\u4E2D\u56FD",value:"cn"},{label:"\u7F8E\u56FD",value:"mg",disabled:!0},{label:"\u82F1\u56FD",value:"yg",disabled:!0},{label:"\u4FC4\u7F57\u65AF",value:"els",disabled:!0},{label:"\u97E9\u56FD",value:"hg"}]});return(s,n)=>{const o=d("x-select");return a(),c("div",null,[e(o,{options:l.options},null,8,["options"])])}}};var k=f(V,[["__scopeId","data-v-73b0ad31"]]);const $={__name:"disabled",setup(_){const l=u({options:[{label:"\u4E2D\u56FD",value:"cn"},{label:"\u7F8E\u56FD",value:"mg",disabled:!0},{label:"\u82F1\u56FD",value:"yg",disabled:!0},{label:"\u4FC4\u7F57\u65AF",value:"els",disabled:!0},{label:"\u97E9\u56FD",value:"hg"}]});return(s,n)=>{const o=d("x-select");return a(),c("div",null,[e(o,{options:l.options,disabled:""},null,8,["options"])])}}};var m={};const z={class:"markdown-body"},w=t("h2",null,"Select\u9009\u62E9\u5668",-1),B=t("p",null,"\u5F53\u9009\u9879\u8FC7\u591A\u65F6\uFF0C\u4F7F\u7528\u4E0B\u62C9\u83DC\u5355\u5C55\u793A\u5E76\u9009\u62E9\u5185\u5BB9\u3002",-1),N=t("h3",null,"\u57FA\u672C\u7528\u6CD5",-1),C=t("p",null,"\u9002\u7528\u5E7F\u6CDB\u7684\u57FA\u7840\u5355\u9009",-1),L=t("h3",null,"\u6709\u7981\u7528\u9009\u9879",-1),D=t("h3",null,"\u7981\u7528\u72B6\u6001",-1),E=t("h3",null,"\u5C3A\u5BF8\u5927\u5C0F",-1),I=t("h3",null,"\u81EA\u5B9A\u4E49\u6A21\u677F",-1),S=t("p",null,[r("\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5907\u9009\u9879 "),t("code",{class:""},"filedLabel:key\u5C5E\u6027"),r(),t("code",{class:""},"filedValue:value\u5C5E\u6027")],-1),q={},T={__name:"doc",setup(_,{expose:l}){return l({frontmatter:{}}),(s,n)=>(a(),c("div",z,[w,B,N,C,e(x),e(i,{compname:"select",demoname:"base"}),L,e(k),e(i,{compname:"select",demoname:"disable"}),D,e($),e(i,{compname:"select",demoname:"disabled"}),E,e(g),e(i,{compname:"select",demoname:"size"}),I,S,e(y),e(i,{compname:"select",demoname:"diff"})]))}};typeof m=="function"&&m(T);export{T as default,q as frontmatter};
