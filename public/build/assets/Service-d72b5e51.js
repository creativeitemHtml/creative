import{Q as q,T as B,o as s,f as t,b as e,e as T,k,v as S,u as r,g as _,t as o,F as h,l as I,p as A,q as f,a as C,G as F,N as L,i as z,w as P,d as M,m as H,n as V,O as E}from"./app-7b5d8281.js";import{_ as O,a as Z}from"./Footer-a3d711b8.js";const U=["data-bs-target"],W=["data-bs-target"],D=["id"],Y={class:"modal-dialog modal-dialog-centered modal-xl"},R={class:"modal-content"},G=e("div",{class:"modal-header"},[e("h1",{class:"modal-title"},"Checkout"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Q={class:"modal-body"},J=["onSubmit"],K={class:"row justify-content-center"},X={class:"col-lg-6 col-md-12"},ee=e("h1",{class:"modal-title pb-3"},"Billing Address",-1),se={key:0,class:"cFormInput-wrap"},te={key:1,class:"cForm-wrap"},ae={class:"cFormInput-wrap"},oe={key:2,class:"cForm-wrap"},le={class:"cFormInput-wrap"},ce={key:3,class:"eCheckbox eCheckbox-2 d-flex flex-column g-20 pt-11"},ie=e("div",{class:"form-check"},[e("input",{class:"form-check-input",type:"checkbox",value:"",id:"createAccount",checked:"",disabled:""}),e("label",{class:"form-check-label",for:"createAccount"},"Create an account")],-1),de=[ie],ne=e("div",{class:"col-lg-2 col-md-12"},null,-1),re={class:"col-lg-4 col-md-12"},ue=e("h1",{class:"modal-title pb-3"},"Order Summary",-1),he={class:"mr-25 bd-all bd-r-10"},pe={class:"eCheckbox planCheck-wrap"},me={class:"nav flex-column nav-pills planCheck",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},ve={class:"form-check check-custom"},_e={class:"row"},be={class:"col-9"},ge={class:"eForm-label cus-label",for:"flexCheckBasic"},fe={class:"col-3 cus-label text-end"},ye={class:"mr-25 py-20 d-flex justify-content-between align-items-center flex-wrap g-10"},Ce=e("h4",{class:"fz-18-sb-black"},"Total",-1),ke={class:"fz-18-sb-black",id:"selected-package-price"},$e=I('<div class="pb-20 mr-25"><div class="content"><div class="cForm-wrap"><button type="submit" class="checkout-order-btn">Complete order</button></div></div></div><div class="elitem-allFile mb-10"><img src="https://creativeitem.com/public/assets/img/icon/lock.svg" alt=""><p>Secure Checkout</p></div>',2),N={__name:"ServiceCheckout",props:{feature:Object,modalId:String,isModal:Boolean},setup(l){const p=l,v=q().props.auth.user,c=B({name:v?v.name:"",email:v?v.email:""}),n=()=>{c.post(route("purchase_service_package",{service_id:p.feature.id})),$("#"+p.modalId).modal("hide")};return(i,a)=>(s(),t(h,null,[l.isModal==!0?(s(),t("button",{key:0,type:"button",class:"ciBtn ciBtn-primary ms-2","data-bs-toggle":"modal","data-bs-target":"#"+l.modalId,"data-bs-dismiss":"modal","data-bs-whatever":"@mdo"},"Buy Now",8,U)):(s(),t("button",{key:1,type:"button",class:"buy-btn","data-bs-toggle":"modal","data-bs-target":"#"+l.modalId,"data-bs-whatever":"@mdo"},"Buy Now",8,W)),e("div",{id:l.modalId,class:"modal fade",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[e("div",Y,[e("div",R,[G,e("div",Q,[e("form",{onSubmit:T(n,["prevent"])},[e("div",K,[e("div",X,[ee,i.$page.props.auth.user?(s(),t("div",se,[k(e("input",{type:"text",class:"form-control eForm-control checkout",id:"name",name:"name","onUpdate:modelValue":a[0]||(a[0]=u=>r(c).name=u),disabled:""},null,512),[[S,r(c).name]])])):_("",!0),i.$page.props.auth.user?(s(),t("div",te,[e("div",ae,[k(e("input",{type:"email",class:"form-control eForm-control checkout",id:"email",name:"email","onUpdate:modelValue":a[1]||(a[1]=u=>r(c).email=u),disabled:""},null,512),[[S,r(c).email]])])])):_("",!0),i.$page.props.auth.user?_("",!0):(s(),t("div",oe,[e("div",le,[k(e("input",{type:"email",class:"form-control eForm-control checkout",id:"email",name:"email",placeholder:"Your Email","aria-label":"Your Email","onUpdate:modelValue":a[2]||(a[2]=u=>r(c).email=u)},null,512),[[S,r(c).email]])])])),i.$page.props.auth.user?_("",!0):(s(),t("div",ce,de))]),ne,e("div",re,[ue,e("div",he,[e("div",pe,[e("div",me,[e("div",ve,[e("div",_e,[e("div",be,[e("label",ge,o(l.feature.name),1)]),e("div",fe,[e("p",null,"$"+o(l.feature.discounted_price),1)])])])])])]),e("div",ye,[Ce,e("h4",ke," $"+o(l.feature.discounted_price),1)]),$e])])],40,J)])])])],8,D)],64))}},we=e("div",{class:"eCheck-price"},[e("button",{type:"button",class:"buy-btn","data-bs-toggle":"modal","data-bs-target":"#exampleModal","data-bs-whatever":"@mdo"},"Buy Now")],-1),xe={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Se={class:"modal-dialog modal-dialog-centered modal-xl"},Fe={class:"modal-content"},Ie=e("div",{class:"modal-header"},[e("h1",{class:"modal-title"},"Checkout"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Me={class:"modal-body"},qe=["onSubmit"],Be={class:"row justify-content-center"},je={class:"col-lg-6 col-md-12"},Pe=e("h1",{class:"modal-title pb-3"},"Billing Address",-1),He={key:0,class:"cFormInput-wrap"},Ve={key:1,class:"cForm-wrap"},Ee={class:"cFormInput-wrap"},Te={key:2,class:"cForm-wrap"},Ne={class:"cFormInput-wrap"},Ae={key:3,class:"eCheckbox eCheckbox-2 d-flex flex-column g-20 pt-11"},Le=e("div",{class:"form-check"},[e("input",{class:"form-check-input",type:"checkbox",value:"",id:"createAccount",checked:"",disabled:""}),e("label",{class:"form-check-label",for:"createAccount"},"Create an account")],-1),ze=[Le],Oe=e("div",{class:"col-lg-2 col-md-12"},null,-1),Ze={class:"col-lg-4 col-md-12"},Ue=e("h1",{class:"modal-title pb-3"},"Order Summary",-1),We={class:"mr-25 bd-all bd-r-10"},De={class:"eCheckbox planCheck-wrap"},Ye={class:"nav flex-column nav-pills planCheck",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},Re={class:"form-check check-custom"},Ge={class:"col-9"},Qe={class:"eForm-label cus-label",for:"flexCheckBasic"},Je={class:"col-3 cus-label text-end"},Ke={class:"mr-25 py-20 d-flex justify-content-between align-items-center flex-wrap g-10"},Xe=e("h4",{class:"fz-18-sb-black"},"Total",-1),es={class:"fz-18-sb-black",id:"selected-package-price"},ss=e("div",{class:"pb-20 mr-25"},[e("div",{class:"content"},[e("div",{class:"cForm-wrap"},[e("button",{type:"submit",class:"checkout-order-btn"},"Complete order")])])],-1),ts={class:"elitem-allFile mb-10"},as=["src"],os=e("p",null,"Secure Checkout",-1),ls={__name:"ServiceCustomCheckout",props:{selectedServices:Array},setup(l){const p=q().props.auth.user,v=l,c=B({name:p?p.name:"",email:p?p.email:"",selectedServices:""}),n=()=>{c.selectedServices=v.selectedServices,c.post(route("purchase_custom_service")),$("#exampleModal").modal("hide")},i=A(()=>v.selectedServices.reduce((a,u)=>a+parseFloat(u.price),0));return(a,u)=>(s(),t(h,null,[we,e("div",xe,[e("div",Se,[e("div",Fe,[Ie,e("div",Me,[e("form",{onSubmit:T(n,["prevent"])},[e("div",Be,[e("div",je,[Pe,a.$page.props.auth.user?(s(),t("div",He,[k(e("input",{type:"text",class:"form-control eForm-control checkout",id:"name",name:"name","onUpdate:modelValue":u[0]||(u[0]=b=>r(c).name=b),disabled:""},null,512),[[S,r(c).name]])])):_("",!0),a.$page.props.auth.user?(s(),t("div",Ve,[e("div",Ee,[k(e("input",{type:"email",class:"form-control eForm-control checkout",id:"email",name:"email","onUpdate:modelValue":u[1]||(u[1]=b=>r(c).email=b),disabled:""},null,512),[[S,r(c).email]])])])):_("",!0),a.$page.props.auth.user?_("",!0):(s(),t("div",Te,[e("div",Ne,[k(e("input",{type:"email",class:"form-control eForm-control checkout",id:"email",name:"email",placeholder:"Your Email","aria-label":"Your Email","onUpdate:modelValue":u[2]||(u[2]=b=>r(c).email=b)},null,512),[[S,r(c).email]])])])),a.$page.props.auth.user?_("",!0):(s(),t("div",Ae,ze))]),Oe,e("div",Ze,[Ue,e("div",We,[e("div",De,[e("div",Ye,[e("div",Re,[(s(!0),t(h,null,f(l.selectedServices,b=>(s(),t("div",{class:"row",key:b.id},[e("div",Ge,[e("label",Qe,o(b.name),1)]),e("div",Je,[e("p",null,"$"+o(b.price),1)])]))),128))])])])]),e("div",Ke,[Xe,e("h4",es," $"+o(i.value),1)]),ss,e("div",ts,[e("img",{src:a.$page.props.base.url+"/public/assets/img/icon/shield-security.svg",alt:""},null,8,as),os])])])],40,qe)])])])])],64))}},cs=e("div",{class:"d-flex justify-content-center"},[e("button",{type:"button",class:"need-text","data-bs-toggle":"modal","data-bs-target":"#serviceHelp","data-bs-whatever":"@mdo"},"Need Help?")],-1),is={class:"modal fade",id:"serviceHelp",tabindex:"-1","aria-labelledby":"serviceHelpLabel","aria-hidden":"true"},ds={class:"modal-dialog modal-xl"},ns={class:"modal-content"},rs=e("div",{class:"modal-header"},[e("h1",{class:"modal-title"},"Custom Services :"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),us={class:"modal-body"},hs=e("div",{class:"row justify-content-center"},[e("h2",{class:"service-help-txt"},"Service Details")],-1),ps={class:"row justify-content-center"},ms={class:"col-lg-6 col-md-12"},vs={class:"service-help-header"},_s={class:"service-help-body"},bs={class:"col-lg-6 col-md-12"},gs={class:"service-help-header"},fs={class:"service-help-body"},ys={__name:"ServiceHelpModal",props:{services:Array},setup(l){const p=l,v=p.services.filter((n,i)=>i%2===1),c=p.services.filter((n,i)=>i%2===0);return(n,i)=>(s(),t(h,null,[cs,e("div",is,[e("div",ds,[e("div",ns,[rs,e("div",us,[hs,e("div",ps,[e("div",ms,[(s(!0),t(h,null,f(r(c),a=>(s(),t("div",{class:"service-help-item",key:a.id},[e("h2",vs,o(a.name),1),e("div",_s,o(a.note),1)]))),128))]),e("div",bs,[(s(!0),t(h,null,f(r(v),a=>(s(),t("div",{class:"service-help-item",key:a.id},[e("h2",gs,o(a.name),1),e("div",fs,o(a.note),1)]))),128))])])])])])])],64))}},Cs={class:"d-flex justify-content-center"},ks=["data-bs-target"],$s=["id"],ws={class:"modal-dialog modal-xl"},xs={class:"modal-content"},Ss={class:"modal-header pe-0"},Fs={class:"row justify-content-between w-100"},Is={class:"col-9 d-flex"},Ms={class:"modal-title"},qs={key:0,class:"model-title-value"},Bs={key:1,class:"model-title-value"},js={key:2,class:"model-title-value"},Ps={class:"col-3 d-xl-flex text-sm-center align-items-center justify-content-end p-0 ps-4"},Hs={class:"modal-title"},Vs=e("button",{type:"button",class:"btn-close m-0","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Es={class:"modal-body"},Ts=e("div",{class:"row justify-content-center"},[e("h2",{class:"service-help-txt"},"Service Details")],-1),Ns={class:"row justify-content-center"},As={class:"col-lg-6 col-md-12"},Ls={class:"service-help-header"},zs={class:"service-help-body"},Os={class:"col-lg-6 col-md-12"},Zs={class:"service-help-header"},Us={class:"service-help-body"},Ws={__name:"ServicePackageHelpModal",props:{feature:Array,modalId:String},setup(l){const p=l,v=p.feature.service_features.filter((n,i)=>i%2===1),c=p.feature.service_features.filter((n,i)=>i%2===0);return(n,i)=>(s(),t(h,null,[e("div",Cs,[e("button",{type:"button",class:"need-text","data-bs-toggle":"modal","data-bs-target":"#"+l.modalId,"data-bs-whatever":"@mdo"},"Need Help?",8,ks)]),e("div",{id:l.modalId,class:"modal fade",tabindex:"-1","aria-labelledby":"serviceHelpLabel","aria-hidden":"true"},[e("div",ws,[e("div",xs,[e("div",Ss,[e("div",Fs,[e("div",Is,[e("h1",Ms,o(l.feature.name)+" Package :",1),l.feature.name=="Pro"?(s(),t("span",qs," Included Basic Packages")):l.feature.name=="Business"?(s(),t("span",Bs," Included Professional & Business Packages")):(s(),t("span",js))]),e("div",Ps,[e("h1",Hs,"$"+o(l.feature.discounted_price),1),C(N,{feature:l.feature,isModal:!0,modalId:"exampleModal"+l.feature.id},null,8,["feature","modalId"]),Vs])])]),e("div",Es,[Ts,e("div",Ns,[e("div",As,[(s(!0),t(h,null,f(r(c),a=>(s(),t("div",{class:"service-help-item",key:a},[e("h2",Ls,o(a.feature),1),e("div",zs,o(a.note),1)]))),128))]),e("div",Os,[(s(!0),t(h,null,f(r(v),a=>(s(),t("div",{class:"service-help-item",key:a},[e("h2",Zs,o(a.feature),1),e("div",Us,o(a.note),1)]))),128))])])])])])],8,$s)],64))}},Ds={class:"eService pt-30"},Ys={class:"container"},Rs={class:"row justify-content-center"},Gs={class:"col-lg-12"},Qs={class:"text-center pb-60"},Js=e("h2",{class:"fz-34-sb-black pb-15"},"Your Vision, Our Software: Ready or Custom Plans",-1),Ks=e("p",{class:"fz-16-m-black-2"},"Start your software journey with our ready plans, offering the flexibility to mix and match services, or start a new with a customized project guided by our expert team. ",-1),Xs={class:"btn-control justify-content-center align-items-center d-flex"},et={class:"row"},st={class:"col-lg-3 col-md-3"},tt={class:"tab-left"},at={class:"Etop"},ot=e("h4",null,"Select a Product",-1),lt={class:"nav flex-column nav-pills me-3",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},ct=["id","data-bs-target","aria-controls","onClick"],it={class:"eNav d-flex"},dt={key:0,class:"image"},nt=["src"],rt={key:1,class:"image"},ut=["src"],ht={class:"motion"},pt=e("span",null,"3 Package",-1),mt=I('<div class="support"><h4>Need Support?</h4><ul><li><a href="https://www.linkedin.com/company/creativeitem" target="_blank"><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.662476 2.15679C0.662476 1.55618 0.872692 1.06068 1.29311 0.670302C1.71352 0.279906 2.26008 0.0847168 2.93275 0.0847168C3.59341 0.0847168 4.12794 0.276897 4.53635 0.661293C4.95676 1.05769 5.16698 1.57419 5.16698 2.21084C5.16698 2.78742 4.96278 3.26789 4.55437 3.65228C4.13395 4.04868 3.58139 4.24688 2.89671 4.24688H2.87869C2.21803 4.24688 1.6835 4.04868 1.27509 3.65228C0.866674 3.25589 0.662476 2.75738 0.662476 2.15679ZM0.89671 17.9226V5.88652H4.89671V17.9226H0.89671ZM7.11293 17.9226H11.1129V11.2018C11.1129 10.7814 11.161 10.4571 11.2571 10.2289C11.4252 9.82044 11.6805 9.47509 12.0228 9.19282C12.3652 8.91053 12.7946 8.7694 13.3111 8.7694C14.6565 8.7694 15.3291 9.6763 15.3291 11.4901V17.9226H19.3291V11.0217C19.3291 9.24387 18.9087 7.89553 18.0679 6.97661C17.227 6.05769 16.1159 5.59823 14.7345 5.59823C13.185 5.59823 11.9778 6.2649 11.1129 7.59823V7.63426H11.0949L11.1129 7.59823V5.88652H7.11293C7.13694 6.2709 7.14896 7.46608 7.14896 9.4721C7.14896 11.4781 7.13694 14.2949 7.11293 17.9226Z" fill="white"></path></svg></a></li><li><a class="color-1" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path></svg></a></li><li><a class="color-2" href="#"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.24273 6.83118C5.90705 4.79901 9.01734 3.45928 10.5736 2.81199C15.0169 0.963837 15.9402 0.642794 16.542 0.632193C16.6744 0.629862 16.9703 0.662664 17.162 0.818214C17.3239 0.949558 17.3684 1.12699 17.3897 1.25151C17.4111 1.37604 17.4376 1.65972 17.4165 1.88138C17.1757 4.41136 16.1338 10.5509 15.6038 13.3846C15.3795 14.5836 14.9379 14.9856 14.5103 15.0249C13.5812 15.1104 12.8756 14.4109 11.9757 13.821C10.5675 12.8979 9.77193 12.3232 8.40502 11.4225C6.82532 10.3815 7.84938 9.80932 8.74964 8.87426C8.98525 8.62956 13.0791 4.90588 13.1583 4.56809C13.1683 4.52584 13.1775 4.36836 13.0839 4.28521C12.9903 4.20206 12.8523 4.23049 12.7526 4.25311C12.6114 4.28516 10.3618 5.77208 6.00373 8.71387C5.36518 9.15235 4.7868 9.36599 4.26859 9.35479C3.69731 9.34245 2.59839 9.03178 1.78145 8.76623C0.779452 8.44052 -0.0169188 8.26831 0.0524273 7.71515C0.088547 7.42704 0.485314 7.13238 1.24273 6.83118Z" fill="white"></path></svg></a></li><li><a class="color-3" href="https://www.instagram.com/creativeitem.developers/" target="_blank"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.00585 10.1533C7.00585 8.41411 8.41533 7.00387 10.1545 7.00387C11.8937 7.00387 13.3039 8.41411 13.3039 10.1533C13.3039 11.8924 11.8937 13.3027 10.1545 13.3027C8.41533 13.3027 7.00585 11.8924 7.00585 10.1533ZM5.30334 10.1533C5.30334 12.8326 7.4752 15.0044 10.1545 15.0044C12.8338 15.0044 15.0057 12.8326 15.0057 10.1533C15.0057 7.47398 12.8338 5.30212 10.1545 5.30212C7.4752 5.30212 5.30341 7.47382 5.30341 10.1533M14.0641 5.10977C14.064 5.33399 14.1304 5.5532 14.2549 5.73969C14.3794 5.92618 14.5564 6.07155 14.7635 6.15744C14.9706 6.24333 15.1986 6.26587 15.4185 6.22222C15.6384 6.17856 15.8405 6.07067 15.9991 5.91218C16.1577 5.7537 16.2658 5.55173 16.3096 5.33184C16.3534 5.11194 16.3311 4.88398 16.2454 4.67679C16.1596 4.4696 16.0144 4.29248 15.828 4.16784C15.6416 4.04319 15.4225 3.97661 15.1982 3.97652H15.1978C14.8972 3.97666 14.609 4.09609 14.3965 4.30857C14.1839 4.52105 14.0643 4.80921 14.0641 5.10977ZM6.33772 17.8434C5.41663 17.8014 4.91599 17.648 4.58329 17.5184C4.14221 17.3467 3.82749 17.1421 3.4966 16.8117C3.16572 16.4813 2.96089 16.1669 2.78993 15.7258C2.66024 15.3932 2.50681 14.8924 2.46494 13.9713C2.41914 12.9755 2.40999 12.6764 2.40999 10.1534C2.40999 7.6305 2.41989 7.33219 2.46494 6.33552C2.50689 5.41443 2.66145 4.91462 2.78993 4.58109C2.96165 4.14 3.16617 3.82529 3.4966 3.4944C3.82704 3.16351 4.14145 2.95869 4.58329 2.78773C4.91584 2.65803 5.41663 2.50461 6.33772 2.46274C7.33356 2.41694 7.6327 2.40779 10.1545 2.40779C12.6763 2.40779 12.9757 2.41754 13.9724 2.46289C14.8935 2.50483 15.3933 2.6594 15.7268 2.78788C16.1679 2.95884 16.4826 3.16412 16.8135 3.49455C17.1444 3.82499 17.3485 4.14015 17.5202 4.58124C17.6499 4.91379 17.8033 5.41458 17.8452 6.33567C17.891 7.33234 17.9001 7.63065 17.9001 10.1536C17.9001 12.6765 17.891 12.9748 17.8452 13.9715C17.8032 14.8926 17.6491 15.3932 17.5202 15.7259C17.3485 16.167 17.144 16.4817 16.8135 16.8119C16.4831 17.142 16.1679 17.3468 15.7268 17.5185C15.3943 17.6482 14.8935 17.8016 13.9724 17.8435C12.9766 17.8893 12.6774 17.8985 10.1545 17.8985C7.63157 17.8985 7.33326 17.8893 6.33772 17.8435M6.2595 0.763024C5.25376 0.808826 4.56651 0.968299 3.96633 1.20184C3.34514 1.44302 2.81858 1.76657 2.29277 2.29155C1.76696 2.81653 1.44424 3.34317 1.20306 3.96511C0.96952 4.56567 0.810046 5.25254 0.764245 6.25828C0.717688 7.2656 0.707031 7.58765 0.707031 10.1533C0.707031 12.7189 0.717688 13.041 0.764245 14.0483C0.810046 15.0541 0.96952 15.7409 1.20306 16.3414C1.44424 16.9626 1.76704 17.4903 2.29277 18.015C2.8185 18.5398 3.34439 18.8629 3.96633 19.1047C4.56764 19.3383 5.25376 19.4977 6.2595 19.5435C7.26735 19.5893 7.58887 19.6007 10.1545 19.6007C12.7201 19.6007 13.0422 19.5901 14.0495 19.5435C15.0553 19.4977 15.7421 19.3383 16.3427 19.1047C16.9639 18.8629 17.4904 18.54 18.0162 18.015C18.542 17.49 18.8641 16.9626 19.1059 16.3414C19.3395 15.7409 19.4997 15.054 19.5448 14.0483C19.5906 13.0402 19.6012 12.7189 19.6012 10.1533C19.6012 7.58765 19.5906 7.2656 19.5448 6.25828C19.4989 5.25246 19.3395 4.56529 19.1059 3.96511C18.8641 3.34392 18.5412 2.81736 18.0162 2.29155C17.4912 1.76574 16.9639 1.44302 16.3434 1.20184C15.7421 0.968299 15.0552 0.80807 14.0503 0.763024C13.0428 0.716996 12.7209 0.705811 10.1556 0.705811C7.59038 0.705811 7.26773 0.716467 6.25987 0.763024" fill="white"></path></svg></a></li></ul></div><div class="support video-sup d-flex align-items-center"><a href=""><svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.77781 20C2.77645 19.9957 1.81729 19.5627 1.10956 18.7956C0.401841 18.0285 0.00298422 16.9894 0 15.9051V4.09073C1.68461e-05 3.37265 0.174588 2.66722 0.506167 2.04535C0.837746 1.42348 1.31465 0.907075 1.88895 0.548042C2.46325 0.189008 3.1147 -4.56059e-06 3.77784 0C4.44097 4.56076e-06 5.09243 0.189027 5.66672 0.548068L15.1113 6.45524C15.6855 6.8143 16.1624 7.33071 16.4939 7.95257C16.8255 8.57444 17 9.27985 17 9.9979C17 10.716 16.8255 11.4214 16.4939 12.0432C16.1624 12.6651 15.6855 13.1815 15.1113 13.5406L5.66672 19.4477C5.09294 19.8086 4.44136 19.9991 3.77781 20Z" fill="white"></path></svg></a><h4>How it Works!</h4></div>',2),vt={class:"col-lg-9 col-md-9"},_t={class:"tab-right"},bt={class:"tab-content",id:"v-pills-tabContent"},gt={class:"row"},ft=e("p",{class:"package-title"},"Select a Package",-1),yt={class:"package-plan"},Ct={class:"most d-flex"},kt={key:0},$t={class:"del_text"},wt={class:"plan"},xt={key:0,width:"17",height:"13",viewBox:"0 0 17 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},St=e("path",{d:"M6.79844 13C6.49844 13 6.29844 12.9 6.09844 12.7L1.19844 7.49997C0.798438 7.09997 0.798438 6.49997 1.19844 6.09997C1.59844 5.69997 2.19844 5.69997 2.59844 6.09997L6.69844 10.5L15.0984 1.29997C15.3984 0.899971 16.0984 0.79997 16.4984 1.09997C16.8984 1.39997 16.9984 2.09997 16.6984 2.49997L16.5984 2.59997L7.49844 12.6C7.39844 12.9 7.09844 13 6.79844 13Z",fill:"#02BC7D"},null,-1),Ft=[St],It={key:1},Mt={key:2,class:"service-feature"},qt={key:0,class:"package-title mt-3"},Bt={key:1,class:"eg_row"},jt=e("p",{class:"epack"},"Service List:",-1),Pt={class:"row"},Ht={class:"col-lg-4 col-md-6 col-sm-6 right-border"},Vt={class:"eCheck"},Et={key:0,class:"single-eCheck d-flex justify-content-between align-items-center"},Tt={class:"form-check"},Nt=["value","id"],At=["for"],Lt={class:"col-lg-4 col-md-6 col-sm-6 right-border"},zt={class:"eCheck"},Ot={key:0,class:"single-eCheck d-flex justify-content-between align-items-center"},Zt={class:"form-check"},Ut=["value","id"],Wt=["for"],Dt={class:"col-lg-4 col-md-12 d-flex align-items-center"},Yt={class:"eCheck eCheck-price"},Rt=e("p",null,"Total Amount",-1),Gt={class:"faq"},Qt={class:"container"},Jt=I('<div class="row justify-content-center"><div class="col-lg-6"><div class="text-center pb-60"><h2 class="fz-34-sb-black pb-15">Faqs</h2><p class="fz-16-m-black-2">Here are some helpful answers to your common questions and queries regarding our services</p></div></div></div>',1),Kt={class:"row justify-content-center"},Xt={class:"col-lg-3 col-md-12"},ea={class:"faq-img"},sa=["src"],ta=I('<div class="col-lg-9 col-md-12"><div class="faq-wrap"><div class="accordion" id="accordionExample"><div class="accordion-item"><h2 class="accordion-header" id="headingOne"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">What is a service?</button></h2><div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"><div class="accordion-body">Services are a task list that we will do dedicatedly to build your website. We will take all the technical liabilities to build the website from scratch and make your life easier. Services are categorized in several packages according to your needs &amp; purposes. Also, you can choose specific service(s) if you don&#39;t require a complete package.</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">What services will I get in the Pro package?</button></h2><div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"><div class="accordion-body">In the &quot;Pro package&quot;, you will get the services listed above along with the features from the &quot;Basic package&quot;.</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">What services will I get in the Business package?</button></h2><div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"><div class="accordion-body">In the &quot;Business package&quot;, you will get the services listed above along with the features from the both &quot;Basic package&quot; &amp; &quot;Pro package&quot;.</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingFour"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">How can I purchase a service package?</button></h2><div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample"><div class="accordion-body">To purchase one of our service packages, simply choose the package that suits your needs and click on the &quot;buy now&quot; button. Once you&#39;ve completed the payment, the selected package will be yours, and our team will initiate the service process. It&#39;s that simple!</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingFive"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">How can I choose specific services without purchasing any packages?</button></h2><div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample"><div class="accordion-body">You have the flexibility to select specific services from our pre-defined service list, and you will only be charged for those particular services. This allows you to tailor your experience based on your specific requirements.</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingSix"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">How long will the packages be valid?</button></h2><div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample"><div class="accordion-body">The package will be valid for 3 months from the date of purchase. During this period, you can avail the services included in the package. Please note that each package is offered for one-time use.</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingSeven"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">How will I get the support?</button></h2><div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample"><div class="accordion-body">We have a reliable and dedicated tech support team ready to assist you. If you encounter any issues, feel free to reach out to us through our Zendesk, email, or Telegram support channels. Your concerns are our priority, and we&#39;ll be there to help promptly.</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingEight"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">What if my required features are not available on your service list?</button></h2><div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample"><div class="accordion-body">If you don&#39;t find your required feature in our service list, simply click on the &quot;New Project&quot; tab and provide details about your specific requirements. We&#39;ll create a customized quotation for you and send it to your email for further consideration.</div></div></div></div></div></div>',1),la={__name:"Service",props:{seo:Object,products:Array},setup(l){const p=q(),v=F([]),c=F([]),n=l,i=F([]),a=F(0);B({selectedServices:[]});const u=()=>{a.value=i.value.reduce((y,g)=>y+parseFloat(g.price),0),console.log("Selected Services:",i)};L(i,u);const b=async y=>{try{const g=await fetch(`${p.props.base.url}/api/product_wise_packages/${y}`);if(g.ok){const m=await g.json();m.status==="success"?(v.value=m.data,c.value=m.services):console.error("API request failed")}else console.error("Network response was not ok")}catch(g){console.error("Error fetching data:",g)}};return z(()=>{b("academy-lms"),u(),$(document).prop("title",n.seo.meta_title),$("meta[name='description']").attr("content",n.seo.meta_description),$("meta[name='keywords']").attr("content",n.seo.meta_keywords),$("meta[name='robot']").attr("content",n.seo.meta_robot),$("link[rel='canonical']").attr("href",n.seo.canonical_url),$("link[rel='custom']").attr("href",n.seo.custom_url),$("meta[property='og:title']").attr("content",n.seo.og_title),$("meta[property='og:description']").attr("content",n.seo.og_description),$("meta[property='og:image']").attr("content",n.seo.og_image)}),(y,g)=>(s(),t(h,null,[C(O),e("section",Ds,[e("div",Ys,[e("div",Rs,[e("div",Gs,[e("div",Qs,[Js,Ks,e("div",Xs,[C(r(H),{href:y.route("services"),class:"active"},{default:P(()=>[M("Ready Plans")]),_:1},8,["href"]),C(r(H),{href:y.route("hire_us"),class:""},{default:P(()=>[M("New Project")]),_:1},8,["href"])])])])]),e("div",et,[e("div",st,[e("div",tt,[e("div",at,[ot,e("div",lt,[(s(!0),t(h,null,f(l.products,m=>(s(),t("button",{key:m.id,class:V(["nav-link",{active:m.slug==="academy-lms"}]),id:"v-pills-"+m.slug+"-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-"+m.slug,type:"button",role:"tab","aria-controls":"v-pills-"+m.slug,"aria-selected":"true",onClick:d=>b(m.slug)},[e("div",it,[m.slug=="academy-lms"?(s(),t("div",dt,[e("img",{src:y.$page.props.base.url+"/assets/img/icon/academy.svg",alt:""},null,8,nt)])):(s(),t("div",rt,[e("img",{src:y.$page.props.base.url+"/assets/img/icon/ekattor8.svg",alt:""},null,8,ut)])),e("div",ht,[e("h5",null,o(m.name),1),pt])])],10,ct))),128))])]),mt])]),e("div",vt,[e("div",_t,[e("div",bt,[(s(!0),t(h,null,f(l.products,m=>(s(),t("div",{class:V(["tab-pane fade",{"show active":m.slug==="academy-lms"}]),key:m.id,id:"v-pills-{{ product.slug }}",role:"tabpanel","aria-labelledby":"v-pills-{{ product.slug }}-tab",tabindex:"0"},[e("div",gt,[ft,(s(!0),t(h,null,f(v.value,(d,x)=>(s(),t("div",{class:"col-lg-4 col-md-6 col-sm-6",key:d.id},[e("div",yt,[e("div",Ct,[e("h4",null,o(d.name),1),d.name=="Pro"?(s(),t("span",kt,"Most Popular")):_("",!0)]),e("span",null,[M("$"+o(d.discounted_price)+" ",1),e("del",$t,"$"+o(d.price),1)]),e("ul",wt,[(s(!0),t(h,null,f(d.service_features,(w,j)=>(s(),t("li",{class:"d-flex align-items-center",key:w.id},[x==0||j!=0?(s(),t("svg",xt,Ft)):_("",!0),x==0||j!=0?(s(),t("p",It,o(w.feature),1)):(s(),t("p",Mt,o(w.feature),1))]))),128))]),C(N,{feature:d,modalId:"exampleModal"+d.id},null,8,["feature","modalId"]),C(Ws,{feature:d,modalId:"serviceModal"+d.id},null,8,["feature","modalId"])])]))),128))]),c.value.length>0?(s(),t("p",qt,"or, customize your package")):_("",!0),c.value.length>0?(s(),t("div",Bt,[jt,e("div",Pt,[e("div",Ht,[e("div",Vt,[(s(!0),t(h,null,f(c.value,(d,x)=>(s(),t("div",{key:d.id},[x%2===0?(s(),t("div",Et,[e("div",Tt,[k(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":g[0]||(g[0]=w=>i.value=w),value:d,id:d.id},null,8,Nt),[[E,i.value]]),e("label",{class:"form-check-label",for:d.id},o(d.name),9,At)]),e("span",null,"$"+o(d.price),1)])):_("",!0)]))),128))])]),e("div",Lt,[e("div",zt,[(s(!0),t(h,null,f(c.value,(d,x)=>(s(),t("div",{key:d.id},[x%2!==0?(s(),t("div",Ot,[e("div",Zt,[k(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":g[1]||(g[1]=w=>i.value=w),value:d,id:d.id},null,8,Ut),[[E,i.value]]),e("label",{class:"form-check-label",for:d.id},o(d.name),9,Wt)]),e("span",null,"$"+o(d.price),1)])):_("",!0)]))),128))])]),e("div",Dt,[e("div",Yt,[Rt,e("h5",null,"$"+o(a.value.toFixed(2)),1),e("span",null,o(i.value.length)+" Service Selected",1),C(ls,{selectedServices:i.value},null,8,["selectedServices"]),C(ys,{services:c.value},null,8,["services"])])])])])):_("",!0)],2))),128))])])])])])]),e("section",Gt,[e("div",Qt,[Jt,e("div",Kt,[e("div",Xt,[e("div",ea,[e("img",{src:y.$page.props.base.url+"/public/assets/img/product-item/faq-img.png",alt:"..."},null,8,sa)])]),ta])])]),C(Z)],64))}};export{la as default};
