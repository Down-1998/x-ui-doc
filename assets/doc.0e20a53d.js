import{r,b as c,o as s,c as u,d as o,f as l}from"./index.6464deac.js";import{p as d}from"./preview.2adbeda1.js";const i={__name:"base",setup(p){const e=r("");return(_,n)=>{const t=c("x-input");return s(),u("div",null,[o(t,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=a=>e.value=a),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])])}}},v={__name:"disable",setup(p){const e=r("");return(_,n)=>{const t=c("x-input");return s(),u("div",null,[o(t,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=a=>e.value=a),placeholder:"\u8BF7\u8F93\u5165",disabled:""},null,8,["modelValue"])])}}},f={__name:"clear",setup(p){const e=r("");return(_,n)=>{const t=c("x-input");return s(),u("div",null,[o(t,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=a=>e.value=a),placeholder:"\u8BF7\u8F93\u5165",clearable:""},null,8,["modelValue"])])}}},V={__name:"password",setup(p){const e=r("");return(_,n)=>{const t=c("x-input");return s(),u("div",null,[o(t,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=a=>e.value=a),placeholder:"\u8BF7\u8F93\u5165",type:"password"},null,8,["modelValue"])])}}};var m={};const h={class:"markdown-body"},x=l("h2",null,"Input\u8F93\u5165\u6846",-1),b=l("p",null,"\u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\u8F93\u5165\u5B57\u7B26 Input \u4E3A\u53D7\u63A7\u7EC4\u4EF6\uFF0C\u5B83\u603B\u4F1A\u663E\u793A Vue \u7ED1\u5B9A\u503C\u3002",-1),w=l("pre",null,[l("code",{class:""},`\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u5E94\u5F53\u5904\u7406 input \u4E8B\u4EF6\uFF0C\u5E76\u66F4\u65B0\u7EC4\u4EF6\u7684\u7ED1\u5B9A\u503C\uFF08\u6216\u4F7F\u7528v-model\uFF09\u3002\u5426\u5219\uFF0C\u8F93\u5165\u6846\u5185\u663E\u793A\u7684\u503C\u5C06\u4E0D\u4F1A\u6539\u53D8\u3002

\u4E0D\u652F\u6301 v-model \u4FEE\u9970\u7B26\u3002
`)],-1),k=l("h3",null,"\u57FA\u672C\u7528\u6CD5",-1),U=l("h3",null,"\u7981\u7528\u72B6\u6001",-1),$=l("h3",null,"\u53EF\u6E05\u7A7A\u72B6\u6001",-1),y=l("h3",null,"\u5BC6\u7801\u6846",-1),C={},B={__name:"doc",setup(p,{expose:e}){return e({frontmatter:{}}),(_,n)=>(s(),u("div",h,[x,b,w,k,o(i),o(d,{compname:"input",demoname:"base"}),U,o(v),o(d,{compname:"input",demoname:"disable"}),$,o(f),o(d,{compname:"input",demoname:"clear"}),y,o(V),o(d,{compname:"input",demoname:"password"})]))}};typeof m=="function"&&m(B);export{B as default,C as frontmatter};