import{u as p}from"./index.cc481260.js";import{k as g,_ as y}from"./CheckboxCell.18592128.js";import{openBlock as o,createElementBlock as n,renderSlot as h,normalizeClass as k,resolveComponent as b,createBlock as B,withCtx as _,createElementVNode as t,createVNode as x,unref as w,renderList as j,Fragment as m,createTextVNode as l,toDisplayString as C,createCommentVNode as N}from"./__federation_shared_vue.js";const V={key:1,class:"text-2xl text-gray-500 dark:text-gray-400"},$={__name:"TitledSection",props:{custom:Boolean,first:Boolean,last:Boolean},setup(e){return(c,s)=>(o(),n("section",{class:k(["py-24 px-6 lg:px-0 lg:max-w-2xl lg:mx-auto text-center",{"-mb-6":e.first,"-mt-6":e.last,"-my-6":!e.first&&!e.last}])},[e.custom?h(c.$slots,"default",{key:0}):(o(),n("h1",V,[h(c.$slots,"default")]))],2))}},v={class:"flex items-center justify-center flex-col md:flex-row text-2xl text-gray-500 dark:text-gray-400 mb-12"},S=t("span",{class:"md:mr-3"},"Please star this project on",-1),G={href:"https://github.com/justboil/admin-one-vue-tailwind",class:"inline-flex items-center justify-center text-blue-600",target:"_blank"},P=t("span",null,"GitHub",-1),z={class:"text-2xl text-gray-500 dark:text-gray-400 mb-12"},E=l(" Check out other components and layouts at"),R=t("br",null,null,-1),T=l(" , "),D=t("br",null,null,-1),F=l(" screen samples "),H=t("h1",{class:"text-2xl text-gray-500 dark:text-gray-400"},[l(" Get more with "),t("a",{href:"https://justboil.me/tailwind-admin-templates/vue-dashboard/",target:"_blank",class:"text-blue-600"},"Premium version")],-1),q={__name:"BottomOtherPagesSection",setup(e){const s=p().getRoutes(),i=[];for(const a in s){const d=s[a].path,r=s[a].meta&&s[a].meta.title?s[a].meta.title:null;r&&i.push({path:d,title:r})}return(a,d)=>{const r=b("router-link");return o(),B($,{last:""},{default:_(()=>[t("h1",v,[S,t("a",G,[x(y,{path:w(g),size:"36",class:"mr-1"},null,8,["path"]),P])]),t("h1",z,[E,R,(o(),n(m,null,j(i,(u,f)=>(o(),n(m,{key:u.path},[x(r,{to:u.path,class:"text-blue-600"},{default:_(()=>[l(C(u.title),1)]),_:2},1032,["to"]),f+1<i.length?(o(),n(m,{key:0},[T],64)):N("",!0)],64))),64)),D,F]),H]),_:1})}}};export{q as _,$ as a};