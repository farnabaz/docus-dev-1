import{u as m}from"./index.27b61883.js";import{a as v,r as h,I as y,o as s,i as o,u as i,l as _,k as t,F as f,a5 as k,s as C,v as b,t as g,x}from"./entry.75935a73.js";const n=e=>(C("data-v-c33b9d7c"),e=e(),b(),e),I={key:0,class:"copied"},S=n(()=>t("div",{class:"scrim"},null,-1)),w=n(()=>t("div",{class:"content"}," Copied! ",-1)),B=[S,w],T=n(()=>t("div",{class:"header"},[t("div",{class:"controls"},[t("div"),t("div"),t("div")]),t("div",{class:"title"}," Bash ")],-1)),F={class:"window"},N=n(()=>t("span",{class:"sign"},"$",-1)),V={class:"content"},j={key:1,class:"prompt"},q=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(e){const a=e,{copy:p}=m(),c=h("init"),r=y(()=>typeof a.content=="string"?[a.content]:a.content),l=u=>{p(r.value.join(`
`)).then(()=>{c.value="copied",setTimeout(()=>{c.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,A)=>(s(),o("div",{class:"terminal",onClick:l},[i(c)==="copied"?(s(),o("div",I,B)):_("",!0),T,t("div",F,[(s(!0),o(f,null,k(i(r),d=>(s(),o("span",{key:d,class:"line"},[N,t("span",V,g(d),1)]))),128))]),i(c)!=="copied"?(s(),o("div",j," Click to copy ")):_("",!0)]))}});const L=x(q,[["__scopeId","data-v-c33b9d7c"]]);export{L as default};
