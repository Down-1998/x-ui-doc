import{y as d,b as r,o as a,c as i,d as e,f as o,x as p}from"./index.a56424dd.js";import{p as _}from"./preview.8086f08f.js";const f={__name:"base",setup(c){const n=d({options:[{label:"\u5907\u9009\u9879",value:"1"},{label:"\u5907\u9009\u9879",value:"2"},{label:"\u5907\u9009\u9879",value:"3"}]});return(s,l)=>{const t=r("x-radio");return a(),i("div",null,[e(t,{options:n.options},null,8,["options"])])}}},h={__name:"diff",setup(c){const n=d({options:[{name:"\u4E2D\u56FD",id:"CN"},{name:"\u7F8E\u56FD",id:"AM"},{name:"\u65E5\u672C",id:"JP",disabled:!0}]}),s=l=>{console.log(l)};return(l,t)=>{const m=r("x-radio");return a(),i("div",null,[e(m,{options:n.options,inline:!1,filedLabel:"name",filedValue:"id",onChange:s},null,8,["options"])])}}},b={__name:"disabled",setup(c){const n=d({options:[{label:"\u5907\u9009\u9879",value:"1"},{label:"\u5907\u9009\u9879",value:"2"},{label:"\u5907\u9009\u9879",value:"3",disabled:!0}]});return(s,l)=>{const t=r("x-radio");return a(),i("div",null,[e(t,{options:n.options},null,8,["options"])])}}},v={__name:"inline",setup(c){const n=d({options:[{label:"\u5907\u9009\u9879",value:"1"},{label:"\u5907\u9009\u9879",value:"2"},{label:"\u5907\u9009\u9879",value:"3"}]});return(s,l)=>{const t=r("x-radio");return a(),i("div",null,[e(t,{options:n.options},null,8,["options"]),e(t,{options:n.options,inline:!1},null,8,["options"])])}}},x={__name:"color",setup(c){const n=d({options:[{label:"\u5907\u9009\u9879",value:"1"},{label:"\u5907\u9009\u9879",value:"2"},{label:"\u5907\u9009\u9879",value:"3"}]});return(s,l)=>{const t=r("x-radio");return a(),i("div",null,[e(t,{options:n.options,customColor:"#09b63d"},null,8,["options"])])}}};var u={};const g={class:"markdown-body"},k=o("h2",null,"Radio\u5355\u9009\u6846",-1),y=o("h3",null,"\u57FA\u672C\u7528\u6CD5",-1),C=o("p",null,[o("strong",null,"\u5728\u4E00\u7EC4\u5907\u9009\u9879\u4E2D\u8FDB\u884C\u5355\u9009")],-1),V=o("h3",null,"\u7981\u7528\u9009\u9879\u72B6\u6001",-1),$=o("p",null,[o("code",{class:""},"\u7981\u7528\u9009\u9879\u72B6\u6001disabled")],-1),N=o("h3",null,"\u6392\u5217\u65B9\u5F0F",-1),B=o("p",null,[o("code",{class:""},"\u6392\u5217\u65B9\u5F0F\u4E3A\u6A2A\u5411\u548C\u7EB5\u5411,inline\u5B57\u6BB5\u8FDB\u884C\u63A7\u5236,true:display:inline-flex,false:flex"),o("strong",null,"\u9ED8\u8BA4\u4E3Atrue")],-1),w=o("h3",null,"\u81EA\u5B9A\u4E49\u989C\u8272",-1),L=o("p",null,[o("code",{class:""},"\u81EA\u5B9A\u4E49\u989C\u8272customColor\u5B57\u6BB5\u63A7\u5236,\u4F20\u5165\u989C\u8272\u768416\u8FDB\u5236\u4EE3\u7801")],-1),A=o("h3",null,"\u81EA\u5B9A\u4E49\u6A21\u677F",-1),E=o("p",null,[p("\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5907\u9009\u9879 "),o("code",{class:""},"filedLabel:key\u5C5E\u6027"),p(),o("code",{class:""},"filedValue:value\u5C5E\u6027")],-1),R={},J={__name:"doc",setup(c,{expose:n}){return n({frontmatter:{}}),(s,l)=>(a(),i("div",g,[k,y,C,e(f),e(_,{compname:"radio",demoname:"base"}),V,$,e(b),e(_,{compname:"radio",demoname:"disabled"}),N,B,e(v),e(_,{compname:"radio",demoname:"inline"}),w,L,e(x),e(_,{compname:"radio",demoname:"color"}),A,E,e(h),e(_,{compname:"radio",demoname:"diff"})]))}};typeof u=="function"&&u(J);export{J as default,R as frontmatter};
