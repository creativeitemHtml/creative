import{Q as v,T as f,o as l,f as i,a as m,b as e,w as k,u as o,e as g,k as p,v as _,g as d,t as h,F as w,d as y,m as F}from"./app-63dab8cb.js";import{_ as x,a as C}from"./Footer-85a00cdb.js";const $={class:"breadcrumb-two"},B={class:"breadcrumb-two-graphic-1"},S=["src"],V={class:"container"},E={class:"breadcrumb-two-content"},z=e("div",{class:"content"},[e("h4",{class:"title"},"Checkout"),e("p",{class:"info"}," Service checkout page ")],-1),N=e("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"},[e("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"})],-1),T={class:"checkout-wrap pt-60 pb-100"},A={class:"container"},I={class:"billing-order-wrap"},M=["onSubmit"],U={class:"row"},j={class:"col-lg-8"},D={class:"billing-address bd-all bd-r-5 px-25 py-25"},O=e("h4",{class:"fz-24-b-black pb-30"},"Billing Address",-1),Y={key:0,class:"cFormInput-wrap"},L=e("label",{for:"name",class:"eForm-label"},"Name",-1),Q={key:1,class:"cForm-wrap"},q={class:"cFormInput-wrap"},G=e("label",{for:"email",class:"eForm-label"},"Email",-1),H={key:2,class:"cForm-wrap"},J={class:"cFormInput-wrap"},K=e("label",{for:"yourEmail",class:"eForm-label"},"Email",-1),P={key:3,class:"eCheckbox eCheckbox-2 d-flex flex-column g-20 pt-11"},R=e("div",{class:"form-check"},[e("input",{class:"form-check-input",type:"checkbox",value:"",id:"createAccount",checked:"",disabled:""}),e("label",{class:"form-check-label",for:"createAccount"},"Create an account")],-1),W=[R],X={class:"col-lg-4"},Z={class:"order-summary pt-24 pb-20 box-shadow-13 bg-white bd-r-10"},ee=e("h4",{class:"os-header pl-24 pr-25 pb-20 mb-24 bd-b-1 fz-18-sb-black"},"Order Summary",-1),se={class:"p-20 ml-24 mr-25 bd-all bd-r-10"},te={class:"eCheckbox planCheck-wrap"},oe={class:"nav flex-column nav-pills planCheck",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},ae={class:"form-check"},ce={class:"row"},le={class:"col-auto"},ie={class:"eForm-label",for:"flexCheckBasic"},re={class:"ml-24 mr-25 py-20 d-flex justify-content-between align-items-center flex-wrap g-10"},ne=e("h4",{class:"fz-18-sb-black"},"Total",-1),de={class:"fz-18-sb-black",id:"selected-package-price"},me=e("div",{class:"bd-all bd-r-10 pt-16 pb-20 ml-24 mr-25"},[e("div",{class:"content px-20"},[e("div",{class:"cForm-wrap"},[e("button",{type:"submit",class:"checkout-order-btn"},"Complete order")])])],-1),pe={class:"elitem-allFile mt-20"},_e=["src"],he=e("p",null,"Secure Checkout",-1),ve={__name:"ServiceCheckout",props:{selected_service:Object},setup(r){const u=r,n=v().props.auth.user,s=f({name:n?n.name:"",email:n?n.email:""}),b=()=>{s.post(route("purchase_service_package",{service_id:u.selected_service.id}))};return(t,a)=>(l(),i(w,null,[m(x),e("section",$,[e("div",B,[e("img",{src:t.$page.props.base.url+"/public/assets/img/banner-graphic-1.png",alt:""},null,8,S)]),e("div",V,[e("div",E,[z,m(o(F),{href:t.route("services"),class:"breadcrumb-two-back"},{default:k(()=>[N,y(" Back ")]),_:1},8,["href"])])])]),e("section",T,[e("div",A,[e("div",I,[e("form",{onSubmit:g(b,["prevent"])},[e("div",U,[e("div",j,[e("div",D,[O,t.$page.props.auth.user?(l(),i("div",Y,[L,p(e("input",{type:"text",class:"form-control eForm-control",id:"name",name:"name","onUpdate:modelValue":a[0]||(a[0]=c=>o(s).name=c),disabled:""},null,512),[[_,o(s).name]])])):d("",!0),t.$page.props.auth.user?(l(),i("div",Q,[e("div",q,[G,p(e("input",{type:"email",class:"form-control eForm-control",id:"email",name:"email","onUpdate:modelValue":a[1]||(a[1]=c=>o(s).email=c),disabled:""},null,512),[[_,o(s).email]])])])):d("",!0),t.$page.props.auth.user?d("",!0):(l(),i("div",H,[e("div",J,[K,p(e("input",{type:"email",class:"form-control eForm-control",id:"email",name:"email",placeholder:"Your Email","aria-label":"Your Email","onUpdate:modelValue":a[2]||(a[2]=c=>o(s).email=c)},null,512),[[_,o(s).email]])])])),t.$page.props.auth.user?d("",!0):(l(),i("div",P,W))])]),e("div",X,[e("div",Z,[ee,e("div",se,[e("div",te,[e("div",oe,[e("div",ae,[e("div",ce,[e("div",le,[e("label",ie,h(r.selected_service.name),1),e("p",null,"$"+h(r.selected_service.discounted_price),1)])])])])])]),e("div",re,[ne,e("h4",de," $"+h(r.selected_service.discounted_price),1)]),me,e("div",pe,[e("img",{src:t.$page.props.base.url+"/public/assets/img/icon/lock.svg",alt:""},null,8,_e),he])])])])],40,M)])])]),m(C)],64))}};export{ve as default};