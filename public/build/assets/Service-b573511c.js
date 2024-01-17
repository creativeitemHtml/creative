import{Q as B,T as I,o as s,f as t,b as e,e as N,k as y,v as S,u as r,g as v,t as l,F as u,p as A,q as f,a as C,G as F,N as E,i as U,w as j,l as Z,d as M,m as P,n as H,O as L}from"./app-b319deb0.js";import{_ as T,a as D}from"./Footer-228c7322.js";const O=["data-bs-target"],Y=["data-bs-target"],q=["id"],R={class:"modal-dialog modal-xl"},G={class:"modal-content"},Q=e("div",{class:"modal-header"},[e("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"Checkout"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),W={class:"modal-body"},J={class:"checkout-wrap pt-60 pb-100"},K={class:"container"},X={class:"billing-order-wrap"},ee=["onSubmit"],se={class:"row"},te={class:"col-lg-8"},oe={class:"billing-address bd-all bd-r-5 px-25 py-25"},le=e("h4",{class:"fz-24-b-black pb-30"},"Billing Address",-1),ae={key:0,class:"cFormInput-wrap"},ce=e("label",{for:"name",class:"eForm-label"},"Name",-1),ie={key:1,class:"cForm-wrap"},de={class:"cFormInput-wrap"},ne=e("label",{for:"email",class:"eForm-label"},"Email",-1),re={key:2,class:"cForm-wrap"},he={class:"cFormInput-wrap"},ue=e("label",{for:"yourEmail",class:"eForm-label"},"Email",-1),me={key:3,class:"eCheckbox eCheckbox-2 d-flex flex-column g-20 pt-11"},_e=e("div",{class:"form-check"},[e("input",{class:"form-check-input",type:"checkbox",value:"",id:"createAccount",checked:"",disabled:""}),e("label",{class:"form-check-label",for:"createAccount"},"Create an account")],-1),pe=[_e],ve={class:"col-lg-4"},be={class:"order-summary pt-24 pb-20 box-shadow-13 bg-white bd-r-10"},ge=e("h4",{class:"os-header pl-24 pr-25 pb-20 mb-24 bd-b-1 fz-18-sb-black"},"Order Summary",-1),fe={class:"p-20 ml-24 mr-25 bd-all bd-r-10"},Ce={class:"eCheckbox planCheck-wrap"},$e={class:"nav flex-column nav-pills planCheck",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},ke={class:"form-check"},ye={class:"row"},we={class:"col-auto"},xe={class:"eForm-label",for:"flexCheckBasic"},Se={class:"ml-24 mr-25 py-20 d-flex justify-content-between align-items-center flex-wrap g-10"},Fe=e("h4",{class:"fz-18-sb-black"},"Total",-1),Me={class:"fz-18-sb-black",id:"selected-package-price"},Be=e("div",{class:"bd-all bd-r-10 pt-16 pb-20 ml-24 mr-25"},[e("div",{class:"content px-20"},[e("div",{class:"cForm-wrap"},[e("button",{type:"submit",class:"checkout-order-btn"},"Complete order")])])],-1),Ie={class:"elitem-allFile mt-20"},Ve=["src"],je=e("p",null,"Secure Checkout",-1),z={__name:"ServiceCheckout",props:{feature:Object,modalId:String,isModal:Boolean},setup(a){const _=a,p=B().props.auth.user,c=I({name:p?p.name:"",email:p?p.email:""}),n=()=>{c.post(route("purchase_service_package",{service_id:_.feature.id}))};return(i,o)=>(s(),t(u,null,[a.isModal==!0?(s(),t("button",{key:0,type:"button",class:"ciBtn ciBtn-primary","data-bs-toggle":"modal","data-bs-target":"#"+a.modalId,"data-bs-whatever":"@mdo"},"Buy Now",8,O)):(s(),t("button",{key:1,type:"button",class:"buy-btn","data-bs-toggle":"modal","data-bs-target":"#"+a.modalId,"data-bs-whatever":"@mdo"},"Buy Now",8,Y)),e("div",{id:a.modalId,class:"modal fade",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[e("div",R,[e("div",G,[Q,e("div",W,[e("section",J,[e("div",K,[e("div",X,[e("form",{onSubmit:N(n,["prevent"])},[e("div",se,[e("div",te,[e("div",oe,[le,i.$page.props.auth.user?(s(),t("div",ae,[ce,y(e("input",{type:"text",class:"form-control eForm-control",id:"name",name:"name","onUpdate:modelValue":o[0]||(o[0]=h=>r(c).name=h),disabled:""},null,512),[[S,r(c).name]])])):v("",!0),i.$page.props.auth.user?(s(),t("div",ie,[e("div",de,[ne,y(e("input",{type:"email",class:"form-control eForm-control",id:"email",name:"email","onUpdate:modelValue":o[1]||(o[1]=h=>r(c).email=h),disabled:""},null,512),[[S,r(c).email]])])])):v("",!0),i.$page.props.auth.user?v("",!0):(s(),t("div",re,[e("div",he,[ue,y(e("input",{type:"email",class:"form-control eForm-control",id:"email",name:"email",placeholder:"Your Email","aria-label":"Your Email","onUpdate:modelValue":o[2]||(o[2]=h=>r(c).email=h)},null,512),[[S,r(c).email]])])])),i.$page.props.auth.user?v("",!0):(s(),t("div",me,pe))])]),e("div",ve,[e("div",be,[ge,e("div",fe,[e("div",Ce,[e("div",$e,[e("div",ke,[e("div",ye,[e("div",we,[e("label",xe,l(a.feature.name),1),e("p",null,"$"+l(a.feature.discounted_price),1)])])])])])]),e("div",Se,[Fe,e("h4",Me," $"+l(a.feature.discounted_price),1)]),Be,e("div",Ie,[e("img",{src:i.$page.props.base.url+"/public/assets/img/icon/lock.svg",alt:""},null,8,Ve),je])])])])],40,ee)])])])])])])],8,q)],64))}},Pe=e("div",{class:"eCheck-price"},[e("button",{type:"button",class:"buy-btn","data-bs-toggle":"modal","data-bs-target":"#exampleModal","data-bs-whatever":"@mdo"},"Buy Now")],-1),He={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Le={class:"modal-dialog modal-xl"},Ne={class:"modal-content"},ze=e("div",{class:"modal-header"},[e("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"Checkout"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ae={class:"modal-body"},Ee={class:"checkout-wrap pb-100"},Ue={class:"container"},Ze={class:"billing-order-wrap"},Te=["onSubmit"],De={class:"row"},Oe={class:"col-lg-8"},Ye={class:"billing-address bd-all bd-r-5 px-25 py-25"},qe=e("h4",{class:"fz-24-b-black pb-30"},"Billing Address",-1),Re={key:0,class:"cFormInput-wrap"},Ge=e("label",{for:"name",class:"eForm-label"},"Name",-1),Qe={key:1,class:"cForm-wrap"},We={class:"cFormInput-wrap"},Je=e("label",{for:"email",class:"eForm-label"},"Email",-1),Ke={key:2,class:"cForm-wrap"},Xe={class:"cFormInput-wrap"},es=e("label",{for:"yourEmail",class:"eForm-label"},"Email",-1),ss={key:3,class:"eCheckbox eCheckbox-2 d-flex flex-column g-20 pt-11"},ts=e("div",{class:"form-check"},[e("input",{class:"form-check-input",type:"checkbox",value:"",id:"createAccount",checked:"",disabled:""}),e("label",{class:"form-check-label",for:"createAccount"},"Create an account")],-1),os=[ts],ls={class:"col-lg-4"},as={class:"order-summary pt-24 pb-20 box-shadow-13 bg-white bd-r-10"},cs=e("h4",{class:"os-header pl-24 pr-25 pb-20 mb-24 bd-b-1 fz-18-sb-black"},"Order Summary",-1),is={class:"p-20 ml-24 mr-25 bd-all bd-r-10"},ds={class:"eCheckbox planCheck-wrap"},ns={class:"nav flex-column nav-pills planCheck",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},rs={class:"form-check"},hs={class:"row"},us={class:"eForm-label",for:"flexCheckBasic"},ms={class:"ml-24 mr-25 py-20 d-flex justify-content-between align-items-center flex-wrap g-10"},_s=e("h4",{class:"fz-18-sb-black"},"Total",-1),ps={class:"fz-18-sb-black",id:"selected-package-price"},vs=e("div",{class:"bd-all bd-r-10 pt-16 pb-20 ml-24 mr-25"},[e("div",{class:"content px-20"},[e("div",{class:"cForm-wrap"},[e("button",{type:"submit",class:"checkout-order-btn"},"Complete order")])])],-1),bs={class:"elitem-allFile mt-20"},gs=["src"],fs=e("p",null,"Secure Checkout",-1),Cs={__name:"ServiceCustomCheckout",props:{selectedServices:Array},setup(a){const _=B().props.auth.user,p=a,c=I({name:_?_.name:"",email:_?_.email:"",selectedServices:""}),n=()=>{c.selectedServices=p.selectedServices,c.post(route("purchase_custom_service")),$("#exampleModal").modal("hide")},i=A(()=>p.selectedServices.reduce((o,h)=>o+parseFloat(h.price),0));return(o,h)=>(s(),t(u,null,[Pe,e("div",He,[e("div",Le,[e("div",Ne,[ze,e("div",Ae,[e("section",Ee,[e("div",Ue,[e("div",Ze,[e("form",{onSubmit:N(n,["prevent"])},[e("div",De,[e("div",Oe,[e("div",Ye,[qe,o.$page.props.auth.user?(s(),t("div",Re,[Ge,y(e("input",{type:"text",class:"form-control eForm-control",id:"name",name:"name","onUpdate:modelValue":h[0]||(h[0]=b=>r(c).name=b),disabled:""},null,512),[[S,r(c).name]])])):v("",!0),o.$page.props.auth.user?(s(),t("div",Qe,[e("div",We,[Je,y(e("input",{type:"email",class:"form-control eForm-control",id:"email",name:"email","onUpdate:modelValue":h[1]||(h[1]=b=>r(c).email=b),disabled:""},null,512),[[S,r(c).email]])])])):v("",!0),o.$page.props.auth.user?v("",!0):(s(),t("div",Ke,[e("div",Xe,[es,y(e("input",{type:"email",class:"form-control eForm-control",id:"email",name:"email",placeholder:"Your Email","aria-label":"Your Email","onUpdate:modelValue":h[2]||(h[2]=b=>r(c).email=b)},null,512),[[S,r(c).email]])])])),o.$page.props.auth.user?v("",!0):(s(),t("div",ss,os))])]),e("div",ls,[e("div",as,[cs,e("div",is,[e("div",ds,[e("div",ns,[e("div",rs,[e("div",hs,[(s(!0),t(u,null,f(a.selectedServices,b=>(s(),t("div",{class:"col-auto",key:b.id},[e("label",us,l(b.name),1),e("p",null,"$"+l(b.price),1)]))),128))])])])])]),e("div",ms,[_s,e("h4",ps," $"+l(i.value),1)]),vs,e("div",bs,[e("img",{src:o.$page.props.base.url+"/public/assets/img/icon/lock.svg",alt:""},null,8,gs),fs])])])])],40,Te)])])])])])])])],64))}},$s=e("div",{class:"d-flex justify-content-center"},[e("button",{type:"button",class:"need-text","data-bs-toggle":"modal","data-bs-target":"#serviceHelp","data-bs-whatever":"@mdo"},"Need Help?")],-1),ks={class:"modal fade",id:"serviceHelp",tabindex:"-1","aria-labelledby":"serviceHelpLabel","aria-hidden":"true"},ys={class:"modal-dialog modal-xl"},ws={class:"modal-content"},xs=e("div",{class:"modal-header"},[e("h1",{class:"modal-title"},"Custom Services :"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ss={class:"modal-body"},Fs=e("div",{class:"row justify-content-center"},[e("h2",{class:"service-help-txt"},"Service Details")],-1),Ms={class:"row justify-content-center"},Bs={class:"col-lg-6 col-md-12"},Is={class:"service-help-header"},Vs={class:"service-help-body"},js={class:"col-lg-6 col-md-12"},Ps={class:"service-help-header"},Hs={class:"service-help-body"},Ls={__name:"ServiceHelpModal",props:{services:Array},setup(a){const _=a,p=_.services.filter((n,i)=>i%2===1),c=_.services.filter((n,i)=>i%2===0);return(n,i)=>(s(),t(u,null,[$s,e("div",ks,[e("div",ys,[e("div",ws,[xs,e("div",Ss,[Fs,e("div",Ms,[e("div",Bs,[(s(!0),t(u,null,f(r(c),o=>(s(),t("div",{class:"service-help-item",key:o.id},[e("h2",Is,l(o.name),1),e("div",Vs,l(o.note),1)]))),128))]),e("div",js,[(s(!0),t(u,null,f(r(p),o=>(s(),t("div",{class:"service-help-item",key:o.id},[e("h2",Ps,l(o.name),1),e("div",Hs,l(o.note),1)]))),128))])])])])])])],64))}},Ns={class:"d-flex justify-content-center"},zs=["data-bs-target"],As=["id"],Es={class:"modal-dialog modal-xl"},Us={class:"modal-content"},Zs={class:"modal-header pe-0"},Ts={class:"row justify-content-between w-100"},Ds={class:"col-9 d-flex align-items-center"},Os={class:"modal-title"},Ys={key:0,class:"model-title-value"},qs={key:1,class:"model-title-value"},Rs={key:2,class:"model-title-value"},Gs={class:"col-3 d-xl-flex text-sm-center align-items-center justify-content-between p-0 ps-4"},Qs={class:"modal-title"},Ws=e("button",{type:"button",class:"btn-close m-0","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Js={class:"modal-body"},Ks=e("div",{class:"row justify-content-center"},[e("h2",{class:"service-help-txt"},"Service Details")],-1),Xs={class:"row justify-content-center"},et={class:"col-lg-6 col-md-12"},st={class:"service-help-header"},tt={class:"service-help-body"},ot={class:"col-lg-6 col-md-12"},lt={class:"service-help-header"},at={class:"service-help-body"},ct={__name:"ServicePackageHelpModal",props:{feature:Array,modalId:String},setup(a){const _=a,p=_.feature.service_features.filter((n,i)=>i%2===1),c=_.feature.service_features.filter((n,i)=>i%2===0);return(n,i)=>(s(),t(u,null,[e("div",Ns,[e("button",{type:"button",class:"need-text","data-bs-toggle":"modal","data-bs-target":"#"+a.modalId,"data-bs-whatever":"@mdo"},"Need Help?",8,zs)]),e("div",{id:a.modalId,class:"modal fade",tabindex:"-1","aria-labelledby":"serviceHelpLabel","aria-hidden":"true"},[e("div",Es,[e("div",Us,[e("div",Zs,[e("div",Ts,[e("div",Ds,[e("h1",Os,l(a.feature.name)+" Package :",1),a.feature.name=="Pro"?(s(),t("span",Ys," Included Basic Packages")):a.feature.name=="Business"?(s(),t("span",qs," Included Professional & Business Packages")):(s(),t("span",Rs))]),e("div",Gs,[e("h1",Qs,"$"+l(a.feature.discounted_price),1),C(z,{feature:a.feature,isModal:!0,modalId:"exampleModal"+a.feature.id},null,8,["feature","modalId"]),Ws])])]),e("div",Js,[Ks,e("div",Xs,[e("div",et,[(s(!0),t(u,null,f(r(c),o=>(s(),t("div",{class:"service-help-item",key:o},[e("h2",st,l(o.feature),1),e("div",tt,l(o.note),1)]))),128))]),e("div",ot,[(s(!0),t(u,null,f(r(p),o=>(s(),t("div",{class:"service-help-item",key:o},[e("h2",lt,l(o.feature),1),e("div",at,l(o.note),1)]))),128))])])])])])],8,As)],64))}},it={class:"eService pt-30"},dt={class:"container"},nt={class:"row justify-content-center"},rt={class:"col-lg-12"},ht={class:"text-center pb-60"},ut=e("h2",{class:"fz-34-sb-black pb-15"},"Your Vision, Our Software: Ready or Custom Plans",-1),mt=e("p",{class:"fz-16-m-black-2"},"Start your software journey with our ready plans, offering the flexibility to mix and match services, or start a new with a customized project guided by our expert team. ",-1),_t={class:"btn-control justify-content-center align-items-center d-flex"},pt={class:"row"},vt={class:"col-lg-3 col-md-3"},bt={class:"tab-left"},gt={class:"Etop"},ft=e("h4",null,"Select a Product",-1),Ct={class:"nav flex-column nav-pills me-3",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},$t=["id","data-bs-target","aria-controls","onClick"],kt={class:"eNav d-flex"},yt={key:0,class:"image"},wt=["src"],xt={key:1,class:"image"},St=["src"],Ft={class:"motion"},Mt=e("span",null,"3 Package",-1),Bt=Z('<div class="support"><h4>Need Support?</h4><ul><li><a href="https://www.linkedin.com/company/creativeitem" target="_blank"><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.662476 2.15679C0.662476 1.55618 0.872692 1.06068 1.29311 0.670302C1.71352 0.279906 2.26008 0.0847168 2.93275 0.0847168C3.59341 0.0847168 4.12794 0.276897 4.53635 0.661293C4.95676 1.05769 5.16698 1.57419 5.16698 2.21084C5.16698 2.78742 4.96278 3.26789 4.55437 3.65228C4.13395 4.04868 3.58139 4.24688 2.89671 4.24688H2.87869C2.21803 4.24688 1.6835 4.04868 1.27509 3.65228C0.866674 3.25589 0.662476 2.75738 0.662476 2.15679ZM0.89671 17.9226V5.88652H4.89671V17.9226H0.89671ZM7.11293 17.9226H11.1129V11.2018C11.1129 10.7814 11.161 10.4571 11.2571 10.2289C11.4252 9.82044 11.6805 9.47509 12.0228 9.19282C12.3652 8.91053 12.7946 8.7694 13.3111 8.7694C14.6565 8.7694 15.3291 9.6763 15.3291 11.4901V17.9226H19.3291V11.0217C19.3291 9.24387 18.9087 7.89553 18.0679 6.97661C17.227 6.05769 16.1159 5.59823 14.7345 5.59823C13.185 5.59823 11.9778 6.2649 11.1129 7.59823V7.63426H11.0949L11.1129 7.59823V5.88652H7.11293C7.13694 6.2709 7.14896 7.46608 7.14896 9.4721C7.14896 11.4781 7.13694 14.2949 7.11293 17.9226Z" fill="white"></path></svg></a></li><li><a class="color-1" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path></svg></a></li><li><a class="color-2" href="#"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.24273 6.83118C5.90705 4.79901 9.01734 3.45928 10.5736 2.81199C15.0169 0.963837 15.9402 0.642794 16.542 0.632193C16.6744 0.629862 16.9703 0.662664 17.162 0.818214C17.3239 0.949558 17.3684 1.12699 17.3897 1.25151C17.4111 1.37604 17.4376 1.65972 17.4165 1.88138C17.1757 4.41136 16.1338 10.5509 15.6038 13.3846C15.3795 14.5836 14.9379 14.9856 14.5103 15.0249C13.5812 15.1104 12.8756 14.4109 11.9757 13.821C10.5675 12.8979 9.77193 12.3232 8.40502 11.4225C6.82532 10.3815 7.84938 9.80932 8.74964 8.87426C8.98525 8.62956 13.0791 4.90588 13.1583 4.56809C13.1683 4.52584 13.1775 4.36836 13.0839 4.28521C12.9903 4.20206 12.8523 4.23049 12.7526 4.25311C12.6114 4.28516 10.3618 5.77208 6.00373 8.71387C5.36518 9.15235 4.7868 9.36599 4.26859 9.35479C3.69731 9.34245 2.59839 9.03178 1.78145 8.76623C0.779452 8.44052 -0.0169188 8.26831 0.0524273 7.71515C0.088547 7.42704 0.485314 7.13238 1.24273 6.83118Z" fill="white"></path></svg></a></li><li><a class="color-3" href="https://www.instagram.com/creativeitem.developers/" target="_blank"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.00585 10.1533C7.00585 8.41411 8.41533 7.00387 10.1545 7.00387C11.8937 7.00387 13.3039 8.41411 13.3039 10.1533C13.3039 11.8924 11.8937 13.3027 10.1545 13.3027C8.41533 13.3027 7.00585 11.8924 7.00585 10.1533ZM5.30334 10.1533C5.30334 12.8326 7.4752 15.0044 10.1545 15.0044C12.8338 15.0044 15.0057 12.8326 15.0057 10.1533C15.0057 7.47398 12.8338 5.30212 10.1545 5.30212C7.4752 5.30212 5.30341 7.47382 5.30341 10.1533M14.0641 5.10977C14.064 5.33399 14.1304 5.5532 14.2549 5.73969C14.3794 5.92618 14.5564 6.07155 14.7635 6.15744C14.9706 6.24333 15.1986 6.26587 15.4185 6.22222C15.6384 6.17856 15.8405 6.07067 15.9991 5.91218C16.1577 5.7537 16.2658 5.55173 16.3096 5.33184C16.3534 5.11194 16.3311 4.88398 16.2454 4.67679C16.1596 4.4696 16.0144 4.29248 15.828 4.16784C15.6416 4.04319 15.4225 3.97661 15.1982 3.97652H15.1978C14.8972 3.97666 14.609 4.09609 14.3965 4.30857C14.1839 4.52105 14.0643 4.80921 14.0641 5.10977ZM6.33772 17.8434C5.41663 17.8014 4.91599 17.648 4.58329 17.5184C4.14221 17.3467 3.82749 17.1421 3.4966 16.8117C3.16572 16.4813 2.96089 16.1669 2.78993 15.7258C2.66024 15.3932 2.50681 14.8924 2.46494 13.9713C2.41914 12.9755 2.40999 12.6764 2.40999 10.1534C2.40999 7.6305 2.41989 7.33219 2.46494 6.33552C2.50689 5.41443 2.66145 4.91462 2.78993 4.58109C2.96165 4.14 3.16617 3.82529 3.4966 3.4944C3.82704 3.16351 4.14145 2.95869 4.58329 2.78773C4.91584 2.65803 5.41663 2.50461 6.33772 2.46274C7.33356 2.41694 7.6327 2.40779 10.1545 2.40779C12.6763 2.40779 12.9757 2.41754 13.9724 2.46289C14.8935 2.50483 15.3933 2.6594 15.7268 2.78788C16.1679 2.95884 16.4826 3.16412 16.8135 3.49455C17.1444 3.82499 17.3485 4.14015 17.5202 4.58124C17.6499 4.91379 17.8033 5.41458 17.8452 6.33567C17.891 7.33234 17.9001 7.63065 17.9001 10.1536C17.9001 12.6765 17.891 12.9748 17.8452 13.9715C17.8032 14.8926 17.6491 15.3932 17.5202 15.7259C17.3485 16.167 17.144 16.4817 16.8135 16.8119C16.4831 17.142 16.1679 17.3468 15.7268 17.5185C15.3943 17.6482 14.8935 17.8016 13.9724 17.8435C12.9766 17.8893 12.6774 17.8985 10.1545 17.8985C7.63157 17.8985 7.33326 17.8893 6.33772 17.8435M6.2595 0.763024C5.25376 0.808826 4.56651 0.968299 3.96633 1.20184C3.34514 1.44302 2.81858 1.76657 2.29277 2.29155C1.76696 2.81653 1.44424 3.34317 1.20306 3.96511C0.96952 4.56567 0.810046 5.25254 0.764245 6.25828C0.717688 7.2656 0.707031 7.58765 0.707031 10.1533C0.707031 12.7189 0.717688 13.041 0.764245 14.0483C0.810046 15.0541 0.96952 15.7409 1.20306 16.3414C1.44424 16.9626 1.76704 17.4903 2.29277 18.015C2.8185 18.5398 3.34439 18.8629 3.96633 19.1047C4.56764 19.3383 5.25376 19.4977 6.2595 19.5435C7.26735 19.5893 7.58887 19.6007 10.1545 19.6007C12.7201 19.6007 13.0422 19.5901 14.0495 19.5435C15.0553 19.4977 15.7421 19.3383 16.3427 19.1047C16.9639 18.8629 17.4904 18.54 18.0162 18.015C18.542 17.49 18.8641 16.9626 19.1059 16.3414C19.3395 15.7409 19.4997 15.054 19.5448 14.0483C19.5906 13.0402 19.6012 12.7189 19.6012 10.1533C19.6012 7.58765 19.5906 7.2656 19.5448 6.25828C19.4989 5.25246 19.3395 4.56529 19.1059 3.96511C18.8641 3.34392 18.5412 2.81736 18.0162 2.29155C17.4912 1.76574 16.9639 1.44302 16.3434 1.20184C15.7421 0.968299 15.0552 0.80807 14.0503 0.763024C13.0428 0.716996 12.7209 0.705811 10.1556 0.705811C7.59038 0.705811 7.26773 0.716467 6.25987 0.763024" fill="white"></path></svg></a></li></ul></div><div class="support video-sup d-flex align-items-center"><a href=""><svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.77781 20C2.77645 19.9957 1.81729 19.5627 1.10956 18.7956C0.401841 18.0285 0.00298422 16.9894 0 15.9051V4.09073C1.68461e-05 3.37265 0.174588 2.66722 0.506167 2.04535C0.837746 1.42348 1.31465 0.907075 1.88895 0.548042C2.46325 0.189008 3.1147 -4.56059e-06 3.77784 0C4.44097 4.56076e-06 5.09243 0.189027 5.66672 0.548068L15.1113 6.45524C15.6855 6.8143 16.1624 7.33071 16.4939 7.95257C16.8255 8.57444 17 9.27985 17 9.9979C17 10.716 16.8255 11.4214 16.4939 12.0432C16.1624 12.6651 15.6855 13.1815 15.1113 13.5406L5.66672 19.4477C5.09294 19.8086 4.44136 19.9991 3.77781 20Z" fill="white"></path></svg></a><h4>How it Works!</h4></div>',2),It={class:"col-lg-9 col-md-9"},Vt={class:"tab-right"},jt={class:"tab-content",id:"v-pills-tabContent"},Pt={class:"row"},Ht=e("p",{class:"package-title"},"Select a Package",-1),Lt={class:"package-plan"},Nt={class:"most d-flex"},zt={key:0},At={class:"del_text"},Et={class:"plan"},Ut={key:0,width:"17",height:"13",viewBox:"0 0 17 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Zt=e("path",{d:"M6.79844 13C6.49844 13 6.29844 12.9 6.09844 12.7L1.19844 7.49997C0.798438 7.09997 0.798438 6.49997 1.19844 6.09997C1.59844 5.69997 2.19844 5.69997 2.59844 6.09997L6.69844 10.5L15.0984 1.29997C15.3984 0.899971 16.0984 0.79997 16.4984 1.09997C16.8984 1.39997 16.9984 2.09997 16.6984 2.49997L16.5984 2.59997L7.49844 12.6C7.39844 12.9 7.09844 13 6.79844 13Z",fill:"#02BC7D"},null,-1),Tt=[Zt],Dt={key:1},Ot={key:2,class:"service-feature"},Yt={key:0,class:"package-title mt-3"},qt={key:1,class:"eg_row"},Rt=e("p",{class:"epack"},"Service List:",-1),Gt={class:"row"},Qt={class:"col-lg-4 col-md-6 col-sm-6 right-border"},Wt={class:"eCheck"},Jt={key:0,class:"single-eCheck d-flex justify-content-between align-items-center"},Kt={class:"form-check"},Xt=["value","id"],e1=["for"],s1={class:"col-lg-4 col-md-6 col-sm-6 right-border"},t1={class:"eCheck"},o1={key:0,class:"single-eCheck d-flex justify-content-between align-items-center"},l1={class:"form-check"},a1=["value","id"],c1=["for"],i1={class:"col-lg-4 col-md-12 d-flex align-items-center"},d1={class:"eCheck eCheck-price"},n1=e("p",null,"Total Amount",-1),u1={__name:"Service",props:{seo:Object,products:Array},setup(a){const _=B(),p=F([]),c=F([]),n=a,i=F([]),o=F(0);I({selectedServices:[]});const h=()=>{o.value=i.value.reduce((k,g)=>k+parseFloat(g.price),0),console.log("Selected Services:",i)};E(i,h);const b=async k=>{try{const g=await fetch(`${_.props.base.url}/api/product_wise_packages/${k}`);if(g.ok){const m=await g.json();m.status==="success"?(p.value=m.data,c.value=m.services):console.error("API request failed")}else console.error("Network response was not ok")}catch(g){console.error("Error fetching data:",g)}};return U(()=>{b("academy-lms"),h(),$(document).prop("title",n.seo.meta_title),$("meta[name='description']").attr("content",n.seo.meta_description),$("meta[name='keywords']").attr("content",n.seo.meta_keywords),$("meta[name='robot']").attr("content",n.seo.meta_robot),$("link[rel='canonical']").attr("href",n.seo.canonical_url),$("link[rel='custom']").attr("href",n.seo.custom_url),$("meta[property='og:title']").attr("content",n.seo.og_title),$("meta[property='og:description']").attr("content",n.seo.og_description),$("meta[property='og:image']").attr("content",n.seo.og_image)}),(k,g)=>(s(),t(u,null,[C(T),e("section",it,[e("div",dt,[e("div",nt,[e("div",rt,[e("div",ht,[ut,mt,e("div",_t,[C(r(P),{href:k.route("services"),class:"active"},{default:j(()=>[M("Ready Plans")]),_:1},8,["href"]),C(r(P),{href:k.route("hire_us"),class:""},{default:j(()=>[M("New Project")]),_:1},8,["href"])])])])]),e("div",pt,[e("div",vt,[e("div",bt,[e("div",gt,[ft,e("div",Ct,[(s(!0),t(u,null,f(a.products,m=>(s(),t("button",{key:m.id,class:H(["nav-link",{active:m.slug==="academy-lms"}]),id:"v-pills-"+m.slug+"-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-"+m.slug,type:"button",role:"tab","aria-controls":"v-pills-"+m.slug,"aria-selected":"true",onClick:d=>b(m.slug)},[e("div",kt,[m.slug=="academy-lms"?(s(),t("div",yt,[e("img",{src:k.$page.props.base.url+"/assets/img/icon/academy.svg",alt:""},null,8,wt)])):(s(),t("div",xt,[e("img",{src:k.$page.props.base.url+"/assets/img/icon/ekattor8.svg",alt:""},null,8,St)])),e("div",Ft,[e("h5",null,l(m.name),1),Mt])])],10,$t))),128))])]),Bt])]),e("div",It,[e("div",Vt,[e("div",jt,[(s(!0),t(u,null,f(a.products,m=>(s(),t("div",{class:H(["tab-pane fade",{"show active":m.slug==="academy-lms"}]),key:m.id,id:"v-pills-{{ product.slug }}",role:"tabpanel","aria-labelledby":"v-pills-{{ product.slug }}-tab",tabindex:"0"},[e("div",Pt,[Ht,(s(!0),t(u,null,f(p.value,(d,x)=>(s(),t("div",{class:"col-lg-4 col-md-6 col-sm-6",key:d.id},[e("div",Lt,[e("div",Nt,[e("h4",null,l(d.name),1),d.name=="Pro"?(s(),t("span",zt,"Most Popular")):v("",!0)]),e("span",null,[M("$"+l(d.discounted_price)+" ",1),e("del",At,"$"+l(d.price),1)]),e("ul",Et,[(s(!0),t(u,null,f(d.service_features,(w,V)=>(s(),t("li",{class:"d-flex align-items-center",key:w.id},[x==0||V!=0?(s(),t("svg",Ut,Tt)):v("",!0),x==0||V!=0?(s(),t("p",Dt,l(w.feature),1)):(s(),t("p",Ot,l(w.feature),1))]))),128))]),C(z,{feature:d,modalId:"exampleModal"+d.id},null,8,["feature","modalId"]),C(ct,{feature:d,modalId:"serviceModal"+d.id},null,8,["feature","modalId"])])]))),128))]),c.value.length>0?(s(),t("p",Yt,"or, customize your package")):v("",!0),c.value.length>0?(s(),t("div",qt,[Rt,e("div",Gt,[e("div",Qt,[e("div",Wt,[(s(!0),t(u,null,f(c.value,(d,x)=>(s(),t("div",{key:d.id},[x%2===0?(s(),t("div",Jt,[e("div",Kt,[y(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":g[0]||(g[0]=w=>i.value=w),value:d,id:d.id},null,8,Xt),[[L,i.value]]),e("label",{class:"form-check-label",for:d.id},l(d.name),9,e1)]),e("span",null,"$"+l(d.price),1)])):v("",!0)]))),128))])]),e("div",s1,[e("div",t1,[(s(!0),t(u,null,f(c.value,(d,x)=>(s(),t("div",{key:d.id},[x%2!==0?(s(),t("div",o1,[e("div",l1,[y(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":g[1]||(g[1]=w=>i.value=w),value:d,id:d.id},null,8,a1),[[L,i.value]]),e("label",{class:"form-check-label",for:d.id},l(d.name),9,c1)]),e("span",null,"$"+l(d.price),1)])):v("",!0)]))),128))])]),e("div",i1,[e("div",d1,[n1,e("h5",null,"$"+l(o.value.toFixed(2)),1),e("span",null,l(i.value.length)+" Service Selected",1),C(Cs,{selectedServices:i.value},null,8,["selectedServices"]),C(Ls,{services:c.value},null,8,["services"])])])])])):v("",!0)],2))),128))])])])])])]),C(D)],64))}};export{u1 as default};
