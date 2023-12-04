import{T as u,o as h,f as b,a as i,b as e,w as f,u as o,e as v,k as l,v as c,s as r,F as g,d as m,m as w,l as d}from"./app-4d5adb72.js";import{_ as F,a as $}from"./Footer-fd3a6975.js";import{B as j,_ as k,a as x}from"./Navigation-fbcbd54f.js";import"./_plugin-vue_export-helper-c27b6911.js";const B={class:"elements-section elements-section-2 breadcrumb-under"},T={class:"container"},V={class:"row justify-content-center"},W={class:"col-lg-9"},y={class:"user-project-title d-flex justify-content-between align-items-center flex-wrap g-10 mb-30 bd-r-5"},S=e("h4",{class:"fz-20-sb-black"},"Project Create",-1),P={class:"d-flex align-items-center flex-wrap g-20"},C=e("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"},[e("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"})],-1),M={class:"d-lg-none mobile-menu-2",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight","aria-controls":"offcanvasRight"},N=["src"],U={class:"l_col_main"},z={class:"bg-white pt-26 pb-30"},A=["onSubmit"],D={class:"nproject-form-wrap"},L={class:"pForm-wrap"},R=e("label",{for:"title",class:"enForm-label"},"Project Title",-1),Y={class:"pForm-wrap"},E=e("label",{for:"description",class:"enForm-label"},"Description",-1),O={class:"pForm-wrap"},q=e("label",{for:"budget_estimation",class:"enForm-label"},"Project budget($)",-1),G=d('<option value="">Select Budget</option><option value="$500 - $1000">$500 - $1000</option><option value="$1000 - $3000">$1000 - $3000</option><option value="$3000 - $10000">$3000 - $10000</option><option value="over $10000">Over $10000</option>',5),H=[G],I={class:"pForm-wrap"},J=e("label",{for:"timeline",class:"enForm-label"},"Timeline",-1),K=d('<option value="">Select time</option><option value="2 Weeks">2 Weeks</option><option value="4 Weeks">4 Weeks</option><option value="8 Weeks">8 Weeks</option><option value="12 Weeks">12 Weeks</option><option value="continuos">Continuos development</option>',6),Q=[K],X={class:"pForm-wrap"},Z=e("label",{for:"attachment",class:"enForm-label"},"Attachment",-1),ee=e("button",{type:"submit",class:"enproject-submit mt-5"},[m(" Submit "),e("span",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"},[e("path",{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"})])])],-1),ae={__name:"ProjectAdd",setup(te){const t=u({title:"",description:"",budget_estimation:"",timeline:"",attachment:""}),p=a=>{t.attachment=a.target.files[0]},_=()=>{t.post(route("customer.project_create"))};return(a,s)=>(h(),b(g,null,[i(F),i(j),i(k),e("section",B,[e("div",T,[e("div",V,[i(x),e("div",W,[e("div",y,[S,e("div",P,[i(o(w),{href:a.route("customer.projects"),class:"edit-project-back-btn"},{default:f(()=>[C,m(" Back ")]),_:1},8,["href"])]),e("button",M,[e("img",{src:a.$page.props.base.url+"/public/assets/img/new-icons-images/menu-icon.svg",alt:"menu"},null,8,N)])]),e("div",U,[e("div",z,[e("form",{onSubmit:v(_,["prevent"]),class:"d-block ajaxForm"},[e("div",D,[e("div",L,[R,l(e("input",{type:"text",class:"form-control enForm-control",id:"title",name:"title",placeholder:"Your Project Title","aria-label":"Your Project Title","onUpdate:modelValue":s[0]||(s[0]=n=>o(t).title=n)},null,512),[[c,o(t).title]])]),e("div",Y,[E,l(e("textarea",{class:"form-control enForm-control",id:"description",name:"description",placeholder:"About your project","onUpdate:modelValue":s[1]||(s[1]=n=>o(t).description=n)},null,512),[[c,o(t).description]])]),e("div",O,[q,l(e("select",{class:"enForm-select enForm-nice-select",id:"budget_estimation",name:"budget_estimation","onUpdate:modelValue":s[2]||(s[2]=n=>o(t).budget_estimation=n)},H,512),[[r,o(t).budget_estimation]])]),e("div",I,[J,l(e("select",{class:"enForm-select enForm-nice-select",id:"timeline",name:"timeline","onUpdate:modelValue":s[3]||(s[3]=n=>o(t).timeline=n)},Q,512),[[r,o(t).timeline]])]),e("div",X,[Z,e("input",{class:"form-control enForm-control-file",type:"file",name:"attachment",id:"attachment",onChange:p},null,32)])]),ee],40,A)])])])])])]),i($)],64))}};export{ae as default};
