import{_ as p,a as g}from"./Footer-ce4a7bb4.js";import{B as b,_ as f,a as w}from"./Navigation-7df7e81a.js";import{o as n,f as l,a as s,b as e,w as r,u as d,F as m,y as v,d as _,p as u,t as i}from"./app-908bbc14.js";import"./_plugin-vue_export-helper-c27b6911.js";const y={class:"elements-section elements-section-2 breadcrumb-under"},B={class:"container"},x={class:"row justify-content-center"},D={class:"col-lg-9"},$={class:"subscription-main-wrap l_col_main"},k={class:"title-btn-menu-wrap d-flex justify-content-between align-items-center flex-wrap g-10 pb-30 mb-20"},A=e("h4",{class:"fz-20-sb-black"},"Creative Elements - Download History",-1),C=e("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"},[e("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"})],-1),L={class:"d-lg-none mobile-menu-2",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight","aria-controls":"offcanvasRight"},S=["src"],z={key:0,class:"table-responsive"},E={class:"table eTable el-table"},N=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"Item"),e("th",{scope:"col"}),e("th",{scope:"col"},"Date"),e("th",{scope:"col"},"Price"),e("th",{scope:"col"},"Option")])],-1),T={class:"dl_thumb_img"},V=["src"],j={class:"dl_property_id"},F={class:"dl_property_price"},H={class:"dl_property_type"},M=e("td",null,[e("div",{class:"adminTable-action"},[e("div",{class:"btn-group"},[e("button",{type:"button",class:"dropdown-btn dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"}," Actions "),e("ul",{class:"dropdown-menu dropdown-menu-end"},[e("li",null,[e("a",{class:"dropdown-item",href:"#"},"Action")]),e("li",null,[e("a",{class:"dropdown-item",href:"#"},"Another action")]),e("li",null,[e("a",{class:"dropdown-item",href:"#"},"Something else here")])])])])],-1),P={key:1,class:"no-subscription arrow-right mt-60"},R=["src"],G=e("h4",{class:"title"}," Purchase a new item!",-1),I=e("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"},[e("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"})],-1),K={__name:"DownloadHistory",props:{element_categories:Array,downloads:Array},setup(a){const h=o=>{const c=new Date(o*1e3),t={day:"numeric",month:"short",year:"numeric"};return c.toLocaleDateString("en-US",t)};return(o,c)=>(n(),l(m,null,[s(p),s(b),s(f),e("section",y,[e("div",B,[e("div",x,[s(w),e("div",D,[e("div",$,[e("div",k,[A,s(d(u),{href:o.route("elements"),class:"new-goelement-btn"},{default:r(()=>[_(" Go to Elements "),C]),_:1},8,["href"]),e("button",L,[e("img",{src:o.$page.props.base.url+"/public/assets/img/new-icons-images/menu-icon.svg",alt:"menu"},null,8,S)])]),a.downloads.length>0?(n(),l("div",z,[e("table",E,[N,e("tbody",null,[(n(!0),l(m,null,v(a.downloads,t=>(n(),l("tr",{key:t.id},[e("td",null,[e("div",T,[e("img",{class:"img-fluid",src:t.thumbnail},null,8,V)])]),e("td",null,[e("div",j,[e("p",null,i(t.title),1)])]),e("td",null,[e("div",F,[e("p",null,i(h(t.timestamp)),1)])]),e("td",null,[e("div",H,[e("p",null,"$"+i(t.price),1)])]),M]))),128))])])])):(n(),l("div",P,[e("img",{src:o.$page.props.base.url+"/public/assets/img/admin-customer/subscription-status.png",alt:""},null,8,R),G,s(d(u),{href:o.route("elements"),class:"new-goelement-btn"},{default:r(()=>[_(" Browse elements file "),I]),_:1},8,["href"])]))])])])])]),s(g,{elementCategories:a.element_categories},null,8,["elementCategories"])],64))}};export{K as default};