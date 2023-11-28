import{Q as v,T as g,o as i,f as r,a as m,b as e,e as f,k as p,v as u,u as l,g as d,t as _,F as k,l as w}from"./app-4b8c077a.js";import{a as y,_ as C}from"./Footer-cc4e0862.js";import{_ as F}from"./ElementHeader-6fb03f28.js";const x={class:"breadcrumb-two"},$={class:"breadcrumb-two-graphic-1"},E=["src"],B=w('<div class="container"><div class="breadcrumb-two-content"><div class="content"><h4 class="title">Checkout</h4><p class="info"> Element product checkout page </p></div><a href="https://creativeitem.com" class="breadcrumb-two-back"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"></path></svg> Back </a></div></div>',1),V={class:"checkout-wrap pt-60 pb-100"},S={class:"container"},z={class:"billing-order-wrap"},N=["onSubmit"],A={class:"row"},I={class:"col-lg-8"},M={class:"billing-address bd-all bd-r-5 px-25 py-25"},T=e("h4",{class:"fz-24-b-black pb-30"},"Billing Address",-1),U={key:0,class:"cFormInput-wrap"},j=e("label",{for:"name",class:"eForm-label"},"Name",-1),D={key:1,class:"cForm-wrap"},O={class:"cFormInput-wrap"},Y=e("label",{for:"email",class:"eForm-label"},"Email",-1),L={key:2,class:"cForm-wrap"},P={class:"cFormInput-wrap"},Q=e("label",{for:"yourEmail",class:"eForm-label"},"Email",-1),q={key:3,class:"eCheckbox eCheckbox-2 d-flex flex-column g-20 pt-11"},G=e("div",{class:"form-check"},[e("input",{class:"form-check-input",type:"checkbox",value:"",id:"createAccount",checked:"",disabled:""}),e("label",{class:"form-check-label",for:"createAccount"},"Create an account")],-1),H=[G],J={class:"col-lg-4"},K={class:"order-summary pt-24 pb-20 box-shadow-13 bg-white bd-r-10"},R=e("h4",{class:"os-header pl-24 pr-25 pb-20 mb-24 bd-b-1 fz-18-sb-black"},"Order Summary",-1),W={class:"p-20 ml-24 mr-25 bd-all bd-r-10"},X={class:"eCheckbox planCheck-wrap"},Z={class:"nav flex-column nav-pills planCheck",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},ee={class:"form-check"},se={class:"row"},te=["src"],oe={class:"col-auto"},ae={class:"eForm-label",for:"flexCheckBasic"},le={class:"ml-24 mr-25 py-20 d-flex justify-content-between align-items-center flex-wrap g-10"},ce=e("h4",{class:"fz-18-sb-black"},"Total",-1),ie={class:"fz-18-sb-black",id:"selected-package-price"},re=e("div",{class:"bd-all bd-r-10 pt-16 pb-20 ml-24 mr-25"},[e("div",{class:"content px-20"},[e("div",{class:"cForm-wrap"},[e("button",{type:"submit",class:"checkout-order-btn"},"Complete order")])])],-1),ne={class:"elitem-allFile mt-20"},de=["src"],me=e("p",null,"Secure Checkout",-1),he={__name:"ElementProductCheckout",props:{element_categories:Array,selected_product:Object},setup(s){const h=s,n=v().props.auth.user,t=g({name:n?n.name:"",email:n?n.email:""}),b=()=>{t.post(route("purchase_product",{product_id:h.selected_product.id}))};return(o,a)=>(i(),r(k,null,[m(C),m(F,{elementCategories:s.element_categories},null,8,["elementCategories"]),e("section",x,[e("div",$,[e("img",{src:o.$page.props.base.url+"/public/assets/img/banner-graphic-1.png",alt:""},null,8,E)]),B]),e("section",V,[e("div",S,[e("div",z,[e("form",{onSubmit:f(b,["prevent"])},[e("div",A,[e("div",I,[e("div",M,[T,o.$page.props.auth.user?(i(),r("div",U,[j,p(e("input",{type:"text",class:"form-control eForm-control",id:"name",name:"name","onUpdate:modelValue":a[0]||(a[0]=c=>l(t).name=c),disabled:""},null,512),[[u,l(t).name]])])):d("",!0),o.$page.props.auth.user?(i(),r("div",D,[e("div",O,[Y,p(e("input",{type:"email",class:"form-control eForm-control",id:"email",name:"email","onUpdate:modelValue":a[1]||(a[1]=c=>l(t).email=c),disabled:""},null,512),[[u,l(t).email]])])])):d("",!0),o.$page.props.auth.user?d("",!0):(i(),r("div",L,[e("div",P,[Q,p(e("input",{type:"email",class:"form-control eForm-control",id:"email",name:"email",placeholder:"Your Email","aria-label":"Your Email","onUpdate:modelValue":a[2]||(a[2]=c=>l(t).email=c)},null,512),[[u,l(t).email]])])])),o.$page.props.auth.user?d("",!0):(i(),r("div",q,H))])]),e("div",J,[e("div",K,[R,e("div",W,[e("div",X,[e("div",Z,[e("div",ee,[e("div",se,[e("img",{src:s.selected_product.thumbnail,alt:""},null,8,te),e("div",oe,[e("label",ae,_(s.selected_product.title),1),e("p",null,"$"+_(s.selected_product.price),1)])])])])])]),e("div",le,[ce,e("h4",ie," $"+_(s.selected_product.price),1)]),re,e("div",ne,[e("img",{src:o.$page.props.base.url+"/public/assets/img/icon/lock.svg",alt:""},null,8,de),me])])])])],40,N)])])]),m(y,{elementCategories:s.element_categories},null,8,["elementCategories"])],64))}};export{he as default};