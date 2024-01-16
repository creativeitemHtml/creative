import{_,a as r}from"./Footer-da08db80.js";import{B as m,_ as h,a as u}from"./Navigation-4ccb044d.js";import{o as p,f as v,a as n,b as t,w as b,u as f,t as e,d as a,F as g,m as y}from"./app-771075df.js";import"./_plugin-vue_export-helper-c27b6911.js";const w={class:"elements-section elements-section-2 breadcrumb-under"},M={class:"container"},$={class:"row justify-content-center"},H={class:"col-lg-9"},B={class:"invoice-content"},V={class:"invoice-header"},x={class:"title-btn-menu-wrap d-flex justify-content-between align-items-center flex-wrap g-10 pb-30"},L=t("h4",{class:"title"},"MILESTONE INVOICE",-1),T=t("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"},[t("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"})],-1),C={class:"d-lg-none mobile-menu-2",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight","aria-controls":"offcanvasRight"},D=["src"],I={class:"invoice-body",id:"invoice_print"},j={class:"invoice-items"},N={class:"invoice-item"},P={class:"invoice-info"},k={class:"title"},z={class:"info"},E={class:"info"},O={class:"invoice-item"},S={class:"company-logo"},F=["src"],R={class:"invoice-item"},G={class:"invoice-info"},q=t("h5",{class:"title"},"Invoice No",-1),A={class:"info"},J={class:"invoice-info"},K=t("h5",{class:"title"},"Date",-1),Q={class:"info"},U={class:"invoice-info"},W={class:"paid"},X={class:"table-responsive"},Y={class:"table eTable el-table invoice-table"},Z=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"#"),t("th",{scope:"col"},"Date"),t("th",{scope:"col"},"Item"),t("th",{scope:"col"},"Price")])],-1),tt=t("td",null,[t("div",{class:"dl_property_id"},[t("p",null,"1")])],-1),st={class:"dl_property_price"},et={class:"dl_property_id"},ot={class:"dl_property_price"},it={class:"table-responsive"},nt={class:"table eTable el-table invoice-table ms-auto max-w-332"},lt=t("td",null,[t("div",{class:"dl_property_price"},[t("p",null,"Subtotal")])],-1),ct={class:"dl_property_id"},at=t("tr",null,[t("td",null,[t("div",{class:"dl_property_price"},[t("p",null,"Offer")])]),t("td",null,[t("div",{class:"dl_property_id"},[t("p",null,"%00")])])],-1),dt={class:"invoice-grand-total max-w-358 ms-auto"},_t=t("p",null,"Grand Total",-1),rt={class:"invoice-print-area"},mt=t("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"},[t("path",{d:"M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"})],-1),bt={__name:"ProjectMilestoneInvoice",props:{milestone_details:Object},setup(s){const l=o=>{const i={year:"numeric",month:"short",day:"2-digit"};return new Date(o).toLocaleDateString(void 0,i)},d=o=>{const i=document.getElementById(o).innerHTML,c=document.body.innerHTML;document.body.innerHTML=i,window.print(),document.body.innerHTML=c};return(o,i)=>(p(),v(g,null,[n(_),n(m),n(h),t("section",w,[t("div",M,[t("div",$,[n(u),t("div",H,[t("div",B,[t("div",V,[t("div",x,[L,n(f(y),{href:o.$page.props.urlPrev,class:"breadcrumb-two-back"},{default:b(()=>[T,a(" Back ")]),_:1},8,["href"]),t("button",C,[t("img",{src:o.$page.props.base.url+"/public/assets/img/new-icons-images/menu-icon.svg",alt:"menu"},null,8,D)])])]),t("div",I,[t("div",j,[t("div",N,[t("div",P,[t("h5",k,"Bill to "+e(s.milestone_details.paymentMilestone_to_user.name),1),t("p",z,e(s.milestone_details.paymentMilestone_to_user.email),1),t("p",E,e(s.milestone_details.paymentMilestone_to_user.phone),1)])]),t("div",O,[t("div",S,[t("img",{src:o.$page.props.base.url+"/public/assets/img/admin-customer/logo-invoice.png",alt:""},null,8,F)])]),t("div",R,[t("div",G,[q,t("p",A,"#"+e(s.milestone_details.id),1)]),t("div",J,[K,t("p",Q,e(l(s.milestone_details.updated_at)),1)]),t("div",U,[t("span",W,"Paid - $"+e(s.milestone_details.amount),1)])])]),t("div",X,[t("table",Y,[Z,t("tbody",null,[t("tr",null,[tt,t("td",null,[t("div",st,[t("p",null,e(l(s.milestone_details.updated_at)),1)])]),t("td",null,[t("div",et,[t("p",null,e(s.milestone_details.PaymentMilestone_to_project.title),1)])]),t("td",null,[t("div",ot,[t("p",null,"$"+e(s.milestone_details.amount),1)])])])])])]),t("div",it,[t("table",nt,[t("tbody",null,[t("tr",null,[lt,t("td",null,[t("div",ct,[t("p",null,"$"+e(s.milestone_details.amount),1)])])]),at])])]),t("div",dt,[_t,t("p",null,"$"+e(s.milestone_details.amount),1)])]),t("div",rt,[t("a",{href:"javascript:;",class:"print-btn",id:"print",onClick:i[0]||(i[0]=c=>d("invoice_print"))},[mt,a(" Print ")])])])])])])]),n(r)],64))}};export{bt as default};