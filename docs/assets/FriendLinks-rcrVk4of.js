import{T as _}from"./Twikoo-ByA2PSXT.js";import{j as m}from"./js-yaml-mbYHt68G.js";import{_ as p}from"./index-C7Arnz7w.js";import{aS as f,aC as h,u as e,v as a,b9 as n,F as k,aV as v,I as u,aK as o,t as g,aX as y}from"./@vue-CyONiH4Q.js";import"./vue-router-BW_ZDU7d.js";import"./@kangc-B4Z1SF_7.js";import"./@babel-BgIvLCQ5.js";import"./vue-D9C6ewVo.js";import"./@vuepress-3yONQRlZ.js";import"./copy-to-clipboard-C0dvYkVd.js";import"./toggle-selection-DGa8lynz.js";import"./vuex-CaVwDJ_B.js";import"./highlight.js-DsdEMM-1.js";const w={components:{Twikoo:_},setup(){const i=f({class_name:"",class_desc:"",link_list:[]});return h(async()=>{try{const s=await(await fetch("friends.yaml")).text(),c=m.load(s);i.value=c[0]}catch(r){console.error("Error loading YAML file:",r)}}),{friendData:i,getInitials:r=>r.split(" ").map(s=>s.charAt(0).toUpperCase()).join("")}}},x={class:"friend-links-container"},D={class:"description"},I={class:"link-list"},C=["href"],T={class:"link-info"},V={key:0,class:"avatar-placeholder"},j=["src"],B={class:"link-details"},F={class:"link-name"},L={key:0,class:"link-desc"};function N(i,l,r,s,c,b){const d=y("Twikoo");return o(),e("div",x,[a("h2",null,n(s.friendData.class_name),1),a("p",D,n(s.friendData.class_desc),1),a("div",I,[(o(!0),e(k,null,v(s.friendData.link_list,t=>(o(),e("div",{key:t.name,class:"link-item"},[a("a",{href:t.url,target:"_blank",class:"link"},[a("div",T,[t.avatar?(o(),e("img",{key:1,src:t.avatar,alt:"",class:"avatar"},null,8,j)):(o(),e("div",V,n(s.getInitials(t.name)),1)),a("div",B,[a("span",F,n(t.name),1),t.descr?(o(),e("p",L,n(t.descr),1)):g("",!0)])])],8,C)]))),128))]),u(d)])}const O=p(w,[["render",N],["__scopeId","data-v-21984d49"]]);export{O as default};
