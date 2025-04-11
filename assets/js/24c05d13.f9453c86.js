"use strict";(self.webpackChunkf_arm=self.webpackChunkf_arm||[]).push([[6251],{1003:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/Arquitetura-da44dbe996bac651f417c95b165972f7.png"},3902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"Sprint-3/Arquitetura","title":"Architecture","description":"The solution architecture was designed considering the MVP without 5G or LoRaWAN coverage. In this scenario, a LoRaWAN gateway would be configured to receive data from the ESP32 collector.","source":"@site/docs/Sprint-3/Arquitetura.md","sourceDirName":"Sprint-3","slug":"/Sprint-3/Arquitetura","permalink":"/2025-1A-T03-G27-PUBLICO/Sprint-3/Arquitetura","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"title":"Architecture","sidebar_position":0,"sidebar_label":"Architecture"},"sidebar":"tutorialSidebar","previous":{"title":"Sprint 3","permalink":"/2025-1A-T03-G27-PUBLICO/category/sprint-3"},"next":{"title":"Financial Analysis","permalink":"/2025-1A-T03-G27-PUBLICO/Sprint-3/Analise-Financeira"}}');var i=n(4848),s=n(8453);const o={title:"Architecture",sidebar_position:0,sidebar_label:"Architecture"},a=void 0,c={},l=[{value:"<strong>Scenario: No LoRaWAN and No 5G Coverage (With Alternative Gateway)</strong>",id:"scenario-no-lorawan-and-no-5g-coverage-with-alternative-gateway",level:3}];function d(e){const t={h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The solution architecture was designed considering the ",(0,i.jsx)(t.strong,{children:"MVP"})," without ",(0,i.jsx)(t.strong,{children:"5G"})," or ",(0,i.jsx)(t.strong,{children:"LoRaWAN"})," coverage. In this scenario, a ",(0,i.jsx)(t.strong,{children:"LoRaWAN gateway"})," would be configured to receive data from the ",(0,i.jsx)(t.strong,{children:"ESP32 collector"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Arquitetura",src:n(1003).A+"",width:"1295",height:"650"})}),"\n",(0,i.jsx)(t.h3,{id:"scenario-no-lorawan-and-no-5g-coverage-with-alternative-gateway",children:(0,i.jsx)(t.strong,{children:"Scenario: No LoRaWAN and No 5G Coverage (With Alternative Gateway)"})}),"\n",(0,i.jsxs)(t.p,{children:["\ud83d\udccc ",(0,i.jsx)(t.strong,{children:"Transmission Flow:"})]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Sensors capture environmental data"})," (ESP32 + RS485 sensors)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"ESP32 transmits via LoRa to a LoRa Gateway"})," (local coverage of 1-3 km)."]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"The Gateway transmits data to AWS via Wi-Fi, Ethernet, or satellite."})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"AWS IoT Core processes and stores the data:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"AWS Lambda:"})," Initial data processing."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"AWS RDS (PostgreSQL):"})," Stores historical records."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"AWS S3:"})," Stores logs and backups."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);