(window.webpackJsonp=window.webpackJsonp||[]).push([[4,11],{154:function(e,a,t){"use strict";var n=t(151);t.d(a,"a",(function(){return n.a}))},58:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(153),l=t(152);a.default=function(e){const{tags:a}=e,t={};Object.keys(a).forEach(e=>{const a=function(e){return e[0].toUpperCase()}(e);t[a]=t[a]||[],t[a].push(e)});const n=Object.entries(t).sort(([e],[a])=>e===a?0:e>a?1:-1).map(([e,t])=>r.a.createElement("div",{key:e},r.a.createElement("h3",null,e),t.map(e=>r.a.createElement(l.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")")),r.a.createElement("hr",null))).filter(e=>null!=e);return r.a.createElement(c.a,{title:"Tags",description:"Blog Tags"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("main",{className:"col col--8 col--offset-2"},r.a.createElement("h1",null,"Tags"),r.a.createElement("div",{className:"margin-vert--lg"},n)))))}}}]);