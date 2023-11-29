import{Q as g,T as v,o,f as l,a as m,b as e,w as f,u as i,e as w,k as h,v as u,g as p,F as _,q as C,t as r,d as y,m as x,n as F}from"./app-5db0cb34.js";import{a as B,_ as E}from"./Footer-98171cee.js";import{_ as T}from"./ElementHeader-119e7df6.js";const V={class:"breadcrumb-two"},z={class:"breadcrumb-two-graphic-1"},A=["src"],N={class:"container"},S={class:"breadcrumb-two-content"},I=e("div",{class:"content"},[e("h4",{class:"title"},"Checkout"),e("p",{class:"info"}," Element subscription checkout page ")],-1),M=e("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"},[e("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"})],-1),U={class:"checkout-wrap pt-60 pb-100"},j={class:"container"},D={class:"billing-order-wrap"},L=["onSubmit"],O={class:"row"},Y={class:"col-lg-8"},q={class:"billing-address bd-all bd-r-5 px-25 py-25"},Q=e("h4",{class:"fz-24-b-black pb-30"},"Billing Address",-1),G={key:0,class:"cFormInput-wrap"},H=e("label",{for:"name",class:"eForm-label"},"Name",-1),J={key:1,class:"cForm-wrap"},K={class:"cFormInput-wrap"},P=e("label",{for:"email",class:"eForm-label"},"Email",-1),R={key:2,class:"cForm-wrap"},W={class:"cFormInput-wrap"},X=e("label",{for:"yourEmail",class:"eForm-label"},"Email",-1),Z={key:3,class:"eCheckbox eCheckbox-2 d-flex flex-column g-20 pt-11"},ee=e("div",{class:"form-check"},[e("input",{class:"form-check-input",type:"checkbox",value:"",id:"createAccount",checked:"",disabled:""}),e("label",{class:"form-check-label",for:"createAccount"},"Create an account")],-1),se=[ee],te={class:"col-lg-4"},ae={class:"order-summary pt-24 pb-20 box-shadow-13 bg-white bd-r-10"},ce=e("h4",{class:"os-header pl-24 pr-25 pb-20 mb-24 bd-b-1 fz-18-sb-black"},"Order Summary",-1),oe={class:"p-20 ml-24 mr-25 bd-all bd-r-10"},le={class:"eCheckbox planCheck-wrap"},ie={class:"nav flex-column nav-pills planCheck",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},ne=["aria-selected"],re={class:"form-check"},de={class:"col-auto"},me=["checked"],pe={class:"col-auto"},he={class:"form-check-label",for:"flexCheckBasic"},ue={class:"ml-24 mr-25 py-20 d-flex justify-content-between align-items-center flex-wrap g-10"},_e=e("h4",{class:"fz-18-sb-black"},"Total",-1),be={class:"fz-18-sb-black",id:"selected-package-price"},ke=e("div",{class:"bd-all bd-r-10 pt-16 pb-20 ml-24 mr-25"},[e("div",{class:"content px-20"},[e("div",{class:"cForm-wrap"},[e("button",{type:"submit",class:"checkout-order-btn"},"Complete order")])])],-1),ge={class:"elitem-allFile mt-20"},ve=["src"],fe=e("p",null,"Secure Checkout",-1),$e={__name:"ElementCheckout",props:{packages:Array,element_categories:Array,selected_package:Object},setup(t){const b=t,d=g().props.auth.user,a=v({name:d?d.name:"",email:d?d.email:""}),k=()=>{a.post(route("purchase_subscription",{package_id:b.selected_package.id}))};return $(document).ready(function(){$(".checkThis").on("click",function(){$(".checkThis").removeClass("active"),$(this).addClass("active"),$(this).data("pack-id"),$(".planCheck-input").prop("checked",!1),$(this).find(".planCheck-input").prop("checked",!0)})}),(c,n)=>(o(),l(_,null,[m(E),m(T,{elementCategories:t.element_categories},null,8,["elementCategories"]),e("section",V,[e("div",z,[e("img",{src:c.$page.props.base.url+"/public/assets/img/banner-graphic-1.png",alt:""},null,8,A)]),e("div",N,[e("div",S,[I,m(i(x),{href:c.route("elements_package_pricing"),class:"breadcrumb-two-back"},{default:f(()=>[M,y(" Back ")]),_:1},8,["href"])])])]),e("section",U,[e("div",j,[e("div",D,[e("form",{onSubmit:w(k,["prevent"])},[e("div",O,[e("div",Y,[e("div",q,[Q,c.$page.props.auth.user?(o(),l("div",G,[H,h(e("input",{type:"text",class:"form-control eForm-control",id:"name",name:"name","onUpdate:modelValue":n[0]||(n[0]=s=>i(a).name=s),disabled:""},null,512),[[u,i(a).name]])])):p("",!0),c.$page.props.auth.user?(o(),l("div",J,[e("div",K,[P,h(e("input",{type:"email",class:"form-control eForm-control",id:"email",name:"email","onUpdate:modelValue":n[1]||(n[1]=s=>i(a).email=s),disabled:""},null,512),[[u,i(a).email]])])])):p("",!0),c.$page.props.auth.user?p("",!0):(o(),l("div",R,[e("div",W,[X,h(e("input",{type:"email",class:"form-control eForm-control",id:"email",name:"email",placeholder:"Your Email","aria-label":"Your Email","onUpdate:modelValue":n[2]||(n[2]=s=>i(a).email=s)},null,512),[[u,i(a).email]])])])),c.$page.props.auth.user?p("",!0):(o(),l("div",Z,se))])]),e("div",te,[e("div",ae,[ce,e("div",oe,[e("div",le,[e("div",ie,[(o(!0),l(_,null,C(t.packages,s=>(o(),l("button",{key:s.id,class:F(["nav-link checkThis",{active:s.id===t.selected_package.id}]),id:"v-pills-{{ pack.name }}-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-{{ pack.name }}",type:"button",role:"tab","aria-controls":"v-pills-{{ pack.name }}","aria-selected":s.id===t.selected_package.id?"true":"false"},[e("div",re,[e("div",de,[e("input",{class:"form-check-input planCheck-input",type:"checkbox",value:"",id:"flexCheckBasic",checked:s.id===t.selected_package.id},null,8,me)]),e("div",pe,[e("label",he,r(s.name),1),e("p",null," $"+r(s.discounted_price)+"/"+r(s.int_val)+" ( "+r(s.interval_period_text)+" ) ",1)])])],10,ne))),128))])])]),e("div",ue,[_e,e("h4",be," $"+r(t.selected_package.discounted_price*t.selected_package.interval_period),1)]),ke,e("div",ge,[e("img",{src:c.$page.props.base.url+"/public/assets/img/icon/lock.svg",alt:""},null,8,ve),fe])])])])],40,L)])])]),m(B,{elementCategories:t.element_categories},null,8,["elementCategories"])],64))}};export{$e as default};