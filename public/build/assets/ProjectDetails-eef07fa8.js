import{T as y,o as i,f as c,a,b as t,t as n,w as d,u as r,F as m,q as u,g as k,e as x,d as f,m as _,n as D}from"./app-771075df.js";import{_ as z,a as B}from"./Footer-da08db80.js";import{B as M,_ as T,a as $}from"./Navigation-4ccb044d.js";import"./_plugin-vue_export-helper-c27b6911.js";const L={class:"elements-section elements-section-2 breadcrumb-under"},P={class:"container"},C={class:"row justify-content-center"},F={class:"col-lg-9"},S={class:"user-project-title d-flex justify-content-between align-items-center flex-wrap g-10 mb-30 bd-r-5"},A={class:"fz-20-sb-black"},N={class:"d-flex align-items-center flex-wrap g-20"},V=t("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"},[t("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"})],-1),H={class:"d-lg-none mobile-menu-2",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight","aria-controls":"offcanvasRight"},R=["src"],U={class:"project-items row"},q={class:"col-md-6"},E={class:"project-item mb-30"},I=t("div",{class:"project-item-title"},[t("h3",{class:"title"},"Description")],-1),O=["innerHTML"],W={class:"project-item"},G={class:"project-price-deadline mb-10 d-flex flex-wrap g-10 align-items-center justify-content-between"},J=t("h4",{class:"fz-15-sb-black"},"Project Price:",-1),K={class:"price-deadline"},Q={class:"project-price-deadline d-flex flex-wrap g-10 align-items-center justify-content-between"},X=t("h4",{class:"fz-15-sb-black"},"Project Deadline:",-1),Y={class:"price-deadline"},Z={class:"col-md-6"},tt={key:0,class:"project-item mb-30"},et=t("div",{class:"project-item-title"},[t("h3",{class:"title"},"Discussion")],-1),st={class:"meeting-history"},ot={class:"mh-item active d-flex g-10 justify-content-between align-items-center"},it={class:"mh-date-media d-flex align-items-center g-20"},ct={class:"fz-14-m-black"},nt={class:"media"},at=["href"],lt=t("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"},[t("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"})],-1),dt=[lt],rt={class:"project-item mb-30"},mt=t("div",{class:"project-item-title-2"},[t("h3",{class:"title"},"Project File")],-1),_t=["onSubmit"],ht=t("button",{type:"submit",class:"edit-project-btn mt-20"},"Upload",-1),ut={class:"info"},pt=["href"],ft={class:"project-item-dropdown project-item-dropdown-2"},gt=t("button",{type:"button",class:"dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 128 512"},[t("path",{d:"M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"})])],-1),bt={class:"dropdown-menu dropdown-menu-end"},vt=t("li",null,[t("a",{class:"dropdown-item",href:"#"},"Download")],-1),wt={class:"project-item"},jt=t("div",{class:"project-item-title"},[t("h3",{class:"title"},"Payment Milestones")],-1),yt={class:"table-responsive"},kt={class:"table eTable eTable-project"},xt={class:"min-w"},Dt={class:"fz-15-sb-black"},zt={class:"min-w"},Bt={class:"fz-15-sb-black"},Mt={class:"min-w"},Tt={key:0,class:"min-w"},$t={class:"mh-item active d-flex g-10 justify-content-between"},Lt=t("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"},[t("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"})],-1),Pt={key:1,class:"min-w"},Ct={class:"d-flex g-10 justify-content-between"},Ft=["src"],Ht={__name:"ProjectDetails",props:{project_details:Object,online_meetings:Array,payment_milestones:Array,attachments:Array},setup(o){const g=o,p=y({attachment:""}),b=s=>{p.attachment=s.target.files[0]},v=()=>{p.post(route("customer.upload_attachment",{project_id:g.project_details.id}))},w=s=>{const l={year:"numeric",month:"short",day:"2-digit"};return new Date(s).toLocaleDateString(void 0,l)},j=s=>{const l=new Date(s*1e3),e={day:"numeric",month:"short",year:"numeric",hour:"numeric",minute:"numeric",hour12:!0};return new Intl.DateTimeFormat("en-US",e).format(l)};return(s,l)=>(i(),c(m,null,[a(z),a(M),a(T),t("section",L,[t("div",P,[t("div",C,[a($),t("div",F,[t("div",S,[t("h4",A,n(o.project_details.title),1),t("div",N,[a(r(_),{href:s.route("customer.projects"),class:"edit-project-back-btn"},{default:d(()=>[V,f(" Back ")]),_:1},8,["href"])]),t("button",H,[t("img",{src:s.$page.props.base.url+"/public/assets/img/new-icons-images/menu-icon.svg",alt:"menu"},null,8,R)])]),t("div",U,[t("div",q,[t("div",E,[I,t("div",{class:"project-item-content",innerHTML:o.project_details.description},null,8,O)]),t("div",W,[t("div",G,[J,t("p",K,"$"+n(o.project_details.project_price),1)]),t("div",Q,[X,t("p",Y,n(w(o.project_details.created_at)),1)])])]),t("div",Z,[o.online_meetings.length>0?(i(),c("div",tt,[et,t("ul",st,[(i(!0),c(m,null,u(o.online_meetings,e=>(i(),c("li",{key:e.id},[t("div",ot,[t("div",it,[t("p",ct,n(j(e.timestamp)),1),t("p",nt,n(e.medium),1)]),t("a",{href:e.link,target:"_blank",class:"media-link"},dt,8,at)])]))),128))])])):k("",!0),t("div",rt,[mt,t("form",{action:"",onSubmit:x(v,["prevent"])},[t("input",{class:"form-control enForm-control-file",type:"file",name:"attachment",id:"attachment",onChange:b},null,32),ht],40,_t),(i(!0),c(m,null,u(o.attachments,(e,h)=>(i(),c("div",{key:e.id,class:"file-name-action d-flex align-items-center justify-content-between"},[t("p",ut,[t("span",null,n(h+1)+". ",1),t("a",{href:s.route("customer.download_attachment",{project_id:o.project_details.id,key:h})},n(e),9,pt)]),t("div",ft,[gt,t("ul",bt,[vt,t("li",null,[a(r(_),{class:"dropdown-item",href:s.route("customer.remove_attachment",{project_id:o.project_details.id,key:h})},{default:d(()=>[f(" Delete ")]),_:2},1032,["href"])])])])]))),128))]),t("div",wt,[jt,t("div",yt,[t("table",kt,[t("tbody",null,[(i(!0),c(m,null,u(o.payment_milestones,e=>(i(),c("tr",{key:e.id},[t("td",null,[t("div",xt,[t("p",Dt,n(e.title),1)])]),t("td",null,[t("div",zt,[t("p",Bt,"$"+n(e.amount),1)])]),t("td",null,[t("div",Mt,[t("p",{class:D(["status-btn",e.status==1?"status-up":"status-down"])},n(e.status==1?"Paid":"Due"),3)])]),t("td",null,[e.status==0?(i(),c("div",Tt,[t("div",$t,[a(r(_),{href:s.route("customer.project_payment",{id:e.id}),class:"media-link"},{default:d(()=>[Lt]),_:2},1032,["href"])])])):(i(),c("div",Pt,[t("div",Ct,[a(r(_),{href:s.route("customer.milestone_invoice",{milestone_id:e.id}),class:"media-link"},{default:d(()=>[t("img",{src:s.$page.props.base.url+"/public/assets/img/icon/invoice.svg",alt:""},null,8,Ft)]),_:2},1032,["href"])])]))])]))),128))])])])])])])])])])]),a(B)],64))}};export{Ht as default};
