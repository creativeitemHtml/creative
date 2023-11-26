import{a as h,_ as p}from"./Footer-bf94f303.js";import{B as g,_ as f,a as b}from"./Navigation-9594f8f0.js";import{o as a,f as n,a as t,b as s,w as c,u as r,F as _,l as w,d as m,j as d,t as l}from"./app-57edbe32.js";import"./_plugin-vue_export-helper-c27b6911.js";const v={class:"elements-section elements-section-2 breadcrumb-under"},y={class:"container"},k={class:"row justify-content-center"},$={class:"col-lg-9"},B={class:"subscription-main-wrap l_col_main"},z={class:"title-btn-menu-wrap d-flex justify-content-between align-items-center flex-wrap g-10 pb-30 mb-20"},P=s("h4",{class:"fz-20-sb-black"},"Creative Elements - Purchase History",-1),x=s("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"},[s("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"})],-1),C={class:"d-lg-none mobile-menu-2",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight","aria-controls":"offcanvasRight"},V=["src"],j={key:0,class:"table-responsive"},A={class:"table eTable"},E=s("thead",null,[s("tr",null,[s("th",{scope:"col"},"#"),s("th",{scope:"col"},"Product"),s("th",{scope:"col"},"Payment Method"),s("th",{scope:"col"},"Paid Amount"),s("th",{scope:"col",class:"text-center"},"Option")])],-1),L={class:"fz-15-sb-black"},M={class:"min-w-100"},N={class:"fz-15-m-black"},D={class:"min-w-100"},F={class:"status-btn status-up"},H={class:"min-w-100"},R={class:"fz-15-m-black"},T={class:"min-w-100 d-flex"},G=["src"],I=["href"],O=["src"],S={key:1,class:"no-subscription arrow-right mt-60"},q=["src"],J=s("h4",{class:"title"}," Purchase a new item!",-1),K=s("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"},[s("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"})],-1),Z={__name:"PurchaseHistory",props:{element_categories:Array,purchase_histories:Array},setup(i){return(e,Q)=>(a(),n(_,null,[t(p),t(g),t(f),s("section",v,[s("div",y,[s("div",k,[t(b),s("div",$,[s("div",B,[s("div",z,[P,t(r(d),{href:e.route("elements"),class:"new-goelement-btn"},{default:c(()=>[m(" Go to Elements "),x]),_:1},8,["href"]),s("button",C,[s("img",{src:e.$page.props.base.url+"/public/assets/img/new-icons-images/menu-icon.svg",alt:"menu"},null,8,V)])]),i.purchase_histories.length>0?(a(),n("div",j,[s("table",A,[E,s("tbody",null,[(a(!0),n(_,null,w(i.purchase_histories,(o,u)=>(a(),n("tr",{key:o.id},[s("td",null,[s("div",null,[s("p",L,l(++u),1)])]),s("td",null,[s("div",M,[s("p",N,l(o.product_details.title),1)])]),s("td",null,[s("div",D,[s("p",F,l(o.payment_method),1)])]),s("td",null,[s("div",H,[s("p",R,"$"+l(o.paid_amount),1)])]),s("td",null,[s("div",T,[t(r(d),{href:e.route("customer.purchase_invoice",{purchase_id:o.id}),class:"payfile-download me-3",title:"View Invoice"},{default:c(()=>[s("img",{src:e.$page.props.base.url+"/public/assets/img/icon/invoice.svg",alt:""},null,8,G)]),_:2},1032,["href"]),s("a",{href:e.route("customer.download_link_generate",{product_id:o.element_product_id}),class:"payfile-download",title:"Download"},[s("img",{src:e.$page.props.base.url+"/public/assets/img/icon/download.svg",alt:""},null,8,O)],8,I)])])]))),128))])])])):(a(),n("div",S,[s("img",{src:e.$page.props.base.url+"/public/assets/img/admin-customer/subscription-status.png",alt:""},null,8,q),J,t(r(d),{href:e.route("elements"),class:"new-goelement-btn"},{default:c(()=>[m(" Browse elements file "),K]),_:1},8,["href"])]))])])])])]),t(h,{elementCategories:i.element_categories},null,8,["elementCategories"])],64))}};export{Z as default};
