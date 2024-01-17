import{Q as j,T as L,o as s,f as a,b as e,e as T,k as w,v as F,u as m,g as _,t as i,F as u,p as z,q as C,d as I,n as S,G as M,N as A,i as B,a as y,w as H,l as E,m as O,O as q}from"./app-605e8dc8.js";import{_ as N,a as P}from"./Footer-0de3c12a.js";const U=["data-bs-target"],Z=["id"],D={class:"modal-dialog modal-xl"},Y={class:"modal-content"},W=e("div",{class:"modal-header"},[e("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"Checkout"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),R={class:"modal-body"},G={class:"checkout-wrap pt-60 pb-100"},Q={class:"container"},J={class:"billing-order-wrap"},K=["onSubmit"],X={class:"row"},ee={class:"col-lg-8"},se={class:"billing-address bd-all bd-r-5 px-25 py-25"},ae=e("h4",{class:"fz-24-b-black pb-30"},"Billing Address",-1),oe={key:0,class:"cFormInput-wrap"},te=e("label",{for:"name",class:"eForm-label"},"Name",-1),le={key:1,class:"cForm-wrap"},ie={class:"cFormInput-wrap"},ce=e("label",{for:"email",class:"eForm-label"},"Email",-1),de={key:2,class:"cForm-wrap"},ne={class:"cFormInput-wrap"},re=e("label",{for:"yourEmail",class:"eForm-label"},"Email",-1),pe={key:3,class:"eCheckbox eCheckbox-2 d-flex flex-column g-20 pt-11"},he=e("div",{class:"form-check"},[e("input",{class:"form-check-input",type:"checkbox",value:"",id:"createAccount",checked:"",disabled:""}),e("label",{class:"form-check-label",for:"createAccount"},"Create an account")],-1),ue=[he],me={class:"col-lg-4"},_e={class:"order-summary pt-24 pb-20 box-shadow-13 bg-white bd-r-10"},be=e("h4",{class:"os-header pl-24 pr-25 pb-20 mb-24 bd-b-1 fz-18-sb-black"},"Order Summary",-1),ve={class:"p-20 ml-24 mr-25 bd-all bd-r-10"},ge={class:"eCheckbox planCheck-wrap"},fe={class:"nav flex-column nav-pills planCheck",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},Ce={class:"form-check"},$e={class:"row"},ye={class:"col-auto"},we={class:"eForm-label",for:"flexCheckBasic"},ke={class:"ml-24 mr-25 py-20 d-flex justify-content-between align-items-center flex-wrap g-10"},xe=e("h4",{class:"fz-18-sb-black"},"Total",-1),Fe={class:"fz-18-sb-black",id:"selected-package-price"},Se=e("div",{class:"bd-all bd-r-10 pt-16 pb-20 ml-24 mr-25"},[e("div",{class:"content px-20"},[e("div",{class:"cForm-wrap"},[e("button",{type:"submit",class:"checkout-order-btn"},"Complete order")])])],-1),Ie={class:"elitem-allFile mt-20"},Me=["src"],je=e("p",null,"Secure Checkout",-1),Le={__name:"ServiceCheckout",props:{feature:Object,modalId:String},setup(d){const b=d,c=j().props.auth.user,t=L({name:c?c.name:"",email:c?c.email:""}),o=()=>{t.post(route("purchase_service_package",{service_id:b.feature.id}))};return(n,r)=>(s(),a(u,null,[e("button",{type:"button",class:"buy-btn","data-bs-toggle":"modal","data-bs-target":"#"+d.modalId,"data-bs-whatever":"@mdo"},"Buy Now",8,U),e("div",{id:d.modalId,class:"modal fade",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[e("div",D,[e("div",Y,[W,e("div",R,[e("section",G,[e("div",Q,[e("div",J,[e("form",{onSubmit:T(o,["prevent"])},[e("div",X,[e("div",ee,[e("div",se,[ae,n.$page.props.auth.user?(s(),a("div",oe,[te,w(e("input",{type:"text",class:"form-control eForm-control",id:"name",name:"name","onUpdate:modelValue":r[0]||(r[0]=p=>m(t).name=p),disabled:""},null,512),[[F,m(t).name]])])):_("",!0),n.$page.props.auth.user?(s(),a("div",le,[e("div",ie,[ce,w(e("input",{type:"email",class:"form-control eForm-control",id:"email",name:"email","onUpdate:modelValue":r[1]||(r[1]=p=>m(t).email=p),disabled:""},null,512),[[F,m(t).email]])])])):_("",!0),n.$page.props.auth.user?_("",!0):(s(),a("div",de,[e("div",ne,[re,w(e("input",{type:"email",class:"form-control eForm-control",id:"email",name:"email",placeholder:"Your Email","aria-label":"Your Email","onUpdate:modelValue":r[2]||(r[2]=p=>m(t).email=p)},null,512),[[F,m(t).email]])])])),n.$page.props.auth.user?_("",!0):(s(),a("div",pe,ue))])]),e("div",me,[e("div",_e,[be,e("div",ve,[e("div",ge,[e("div",fe,[e("div",Ce,[e("div",$e,[e("div",ye,[e("label",we,i(d.feature.name),1),e("p",null,"$"+i(d.feature.discounted_price),1)])])])])])]),e("div",ke,[xe,e("h4",Fe," $"+i(d.feature.discounted_price),1)]),Se,e("div",Ie,[e("img",{src:n.$page.props.base.url+"/public/assets/img/icon/lock.svg",alt:""},null,8,Me),je])])])])],40,K)])])])])])])],8,Z)],64))}},Ee=e("div",{class:"eCheck-price"},[e("button",{type:"button",class:"buy-btn","data-bs-toggle":"modal","data-bs-target":"#exampleModal","data-bs-whatever":"@mdo"},"Buy Now")],-1),Ve={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},He={class:"modal-dialog modal-xl"},Oe={class:"modal-content"},qe=e("div",{class:"modal-header"},[e("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"Checkout"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Te={class:"modal-body"},ze={class:"checkout-wrap pb-100"},Ae={class:"container"},Be={class:"billing-order-wrap"},Ne=["onSubmit"],Pe={class:"row"},Ue={class:"col-lg-8"},Ze={class:"billing-address bd-all bd-r-5 px-25 py-25"},De=e("h4",{class:"fz-24-b-black pb-30"},"Billing Address",-1),Ye={key:0,class:"cFormInput-wrap"},We=e("label",{for:"name",class:"eForm-label"},"Name",-1),Re={key:1,class:"cForm-wrap"},Ge={class:"cFormInput-wrap"},Qe=e("label",{for:"email",class:"eForm-label"},"Email",-1),Je={key:2,class:"cForm-wrap"},Ke={class:"cFormInput-wrap"},Xe=e("label",{for:"yourEmail",class:"eForm-label"},"Email",-1),es={key:3,class:"eCheckbox eCheckbox-2 d-flex flex-column g-20 pt-11"},ss=e("div",{class:"form-check"},[e("input",{class:"form-check-input",type:"checkbox",value:"",id:"createAccount",checked:"",disabled:""}),e("label",{class:"form-check-label",for:"createAccount"},"Create an account")],-1),as=[ss],os={class:"col-lg-4"},ts={class:"order-summary pt-24 pb-20 box-shadow-13 bg-white bd-r-10"},ls=e("h4",{class:"os-header pl-24 pr-25 pb-20 mb-24 bd-b-1 fz-18-sb-black"},"Order Summary",-1),is={class:"p-20 ml-24 mr-25 bd-all bd-r-10"},cs={class:"eCheckbox planCheck-wrap"},ds={class:"nav flex-column nav-pills planCheck",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},ns={class:"form-check"},rs={class:"row"},ps={class:"eForm-label",for:"flexCheckBasic"},hs={class:"ml-24 mr-25 py-20 d-flex justify-content-between align-items-center flex-wrap g-10"},us=e("h4",{class:"fz-18-sb-black"},"Total",-1),ms={class:"fz-18-sb-black",id:"selected-package-price"},_s=e("div",{class:"bd-all bd-r-10 pt-16 pb-20 ml-24 mr-25"},[e("div",{class:"content px-20"},[e("div",{class:"cForm-wrap"},[e("button",{type:"submit",class:"checkout-order-btn"},"Complete order")])])],-1),bs={class:"elitem-allFile mt-20"},vs=["src"],gs=e("p",null,"Secure Checkout",-1),fs={__name:"ServiceCustomCheckout",props:{selectedServices:Array},setup(d){const b=j().props.auth.user,c=d,t=L({name:b?b.name:"",email:b?b.email:"",selectedServices:""}),o=()=>{t.selectedServices=c.selectedServices,t.post(route("purchase_custom_service")),$("#exampleModal").modal("hide")},n=z(()=>c.selectedServices.reduce((r,p)=>r+parseFloat(p.price),0));return(r,p)=>(s(),a(u,null,[Ee,e("div",Ve,[e("div",He,[e("div",Oe,[qe,e("div",Te,[e("section",ze,[e("div",Ae,[e("div",Be,[e("form",{onSubmit:T(o,["prevent"])},[e("div",Pe,[e("div",Ue,[e("div",Ze,[De,r.$page.props.auth.user?(s(),a("div",Ye,[We,w(e("input",{type:"text",class:"form-control eForm-control",id:"name",name:"name","onUpdate:modelValue":p[0]||(p[0]=v=>m(t).name=v),disabled:""},null,512),[[F,m(t).name]])])):_("",!0),r.$page.props.auth.user?(s(),a("div",Re,[e("div",Ge,[Qe,w(e("input",{type:"email",class:"form-control eForm-control",id:"email",name:"email","onUpdate:modelValue":p[1]||(p[1]=v=>m(t).email=v),disabled:""},null,512),[[F,m(t).email]])])])):_("",!0),r.$page.props.auth.user?_("",!0):(s(),a("div",Je,[e("div",Ke,[Xe,w(e("input",{type:"email",class:"form-control eForm-control",id:"email",name:"email",placeholder:"Your Email","aria-label":"Your Email","onUpdate:modelValue":p[2]||(p[2]=v=>m(t).email=v)},null,512),[[F,m(t).email]])])])),r.$page.props.auth.user?_("",!0):(s(),a("div",es,as))])]),e("div",os,[e("div",ts,[ls,e("div",is,[e("div",cs,[e("div",ds,[e("div",ns,[e("div",rs,[(s(!0),a(u,null,C(d.selectedServices,v=>(s(),a("div",{class:"col-auto",key:v.id},[e("label",ps,i(v.name),1),e("p",null,"$"+i(v.price),1)]))),128))])])])])]),e("div",hs,[us,e("h4",ms," $"+i(n.value),1)]),_s,e("div",bs,[e("img",{src:r.$page.props.base.url+"/public/assets/img/icon/lock.svg",alt:""},null,8,vs),gs])])])])],40,Ne)])])])])])])])],64))}},Cs=e("div",{class:"d-flex justify-content-center"},[e("button",{type:"button",class:"need-text","data-bs-toggle":"modal","data-bs-target":"#serviceHelp","data-bs-whatever":"@mdo"},"Need Help?")],-1),$s={class:"modal fade",id:"serviceHelp",tabindex:"-1","aria-labelledby":"serviceHelpLabel","aria-hidden":"true"},ys={class:"modal-dialog modal-xl"},ws={class:"modal-content"},ks=e("div",{class:"modal-header"},[e("h1",{class:"modal-title fs-5",id:"serviceHelpLabel"},"Service Details"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),xs={class:"modal-body"},Fs={class:"faq"},Ss={class:"container"},Is={class:"row justify-content-center"},Ms={class:"col-lg-3 col-md-12"},js={class:"faq-img"},Ls=["src"],Es={class:"col-lg-9 col-md-12"},Vs={class:"faq-wrap"},Hs={class:"accordion",id:"accordionExample"},Os=["id"],qs=["data-bs-toggle","aria-expanded","aria-controls","onClick"],Ts=["id","aria-labelledby"],zs={class:"accordion-body"},As={__name:"ServiceHelpModal",props:{services:Array},setup(d){const b=c=>{c.isOpen=!c.isOpen};return(c,t)=>(s(),a(u,null,[Cs,e("div",$s,[e("div",ys,[e("div",ws,[ks,e("div",xs,[I(i(c.$page.props.services)+" ",1),e("section",Fs,[e("div",Ss,[e("div",Is,[e("div",Ms,[e("div",js,[e("img",{src:c.$page.props.base.url+"/public/assets/img/product-item/faq-img.png",alt:"..."},null,8,Ls)])]),e("div",Es,[e("div",Vs,[e("div",Hs,[(s(!0),a(u,null,C(d.services,o=>(s(),a("div",{class:"accordion-item",key:o.id},[e("h2",{class:"accordion-header",id:"heading"+o.id},[e("button",{class:S(["accordion-button",{collapsed:o.isOpen}]),type:"button","data-bs-toggle":"#collapse"+o.id,"aria-expanded":!o.isOpen,"aria-controls":"collapse"+o.id,onClick:n=>b(o)},i(o.name),11,qs)],8,Os),e("div",{id:"collapse"+o.id,class:S(["accordion-collapse collapse",{show:!o.isOpen}]),"aria-labelledby":"heading"+o.id,"data-bs-parent":"#accordionExample"},[e("div",zs,i(o.note),1)],10,Ts)]))),128))])])])])])])])])])])],64))}},Bs={class:"d-flex justify-content-center"},Ns=["data-bs-target"],Ps=["id"],Us={class:"modal-dialog modal-xl"},Zs={class:"modal-content"},Ds=e("div",{class:"modal-header"},[e("h1",{class:"modal-title fs-5",id:"serviceHelpLabel"},"Service Details"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ys={class:"modal-body"},Ws={class:"faq"},Rs={class:"container"},Gs={class:"row justify-content-center"},Qs={class:"col-lg-3 col-md-12"},Js={class:"faq-img"},Ks=["src"],Xs={class:"col-lg-9 col-md-12"},ea={class:"faq-wrap"},sa={class:"accordion",id:"accordionExample"},aa=["id"],oa=["data-bs-toggle","aria-expanded","aria-controls","onClick"],ta=["id","aria-labelledby"],la={class:"accordion-body"},ia={__name:"ServicePackageHelpModal",props:{services:Array,modalId:String},setup(d){const b=c=>{c.isOpen=!c.isOpen};return(c,t)=>(s(),a(u,null,[e("div",Bs,[e("button",{type:"button",class:"need-text","data-bs-toggle":"modal","data-bs-target":"#"+d.modalId,"data-bs-whatever":"@mdo"},"Need Help?",8,Ns)]),e("div",{id:d.modalId,class:"modal fade",tabindex:"-1","aria-labelledby":"serviceHelpLabel","aria-hidden":"true"},[e("div",Us,[e("div",Zs,[Ds,e("div",Ys,[I(i(c.$page.props.services)+" ",1),e("section",Ws,[e("div",Rs,[e("div",Gs,[e("div",Qs,[e("div",Js,[e("img",{src:c.$page.props.base.url+"/public/assets/img/product-item/faq-img.png",alt:"..."},null,8,Ks)])]),e("div",Xs,[e("div",ea,[e("div",sa,[(s(!0),a(u,null,C(d.services,o=>(s(),a("div",{class:"accordion-item",key:o.id},[e("h2",{class:"accordion-header",id:"heading"+o.id},[e("button",{class:S(["accordion-button",{collapsed:o.isOpen}]),type:"button","data-bs-toggle":"#collapse"+o.id,"aria-expanded":!o.isOpen,"aria-controls":"collapse"+o.id,onClick:n=>b(o)},i(o.feature),11,oa)],8,aa),e("div",{id:"collapse"+o.id,class:S(["accordion-collapse collapse",{show:!o.isOpen}]),"aria-labelledby":"heading"+o.id,"data-bs-parent":"#accordionExample"},[e("div",la,i(o.note),1)],10,ta)]))),128))])])])])])])])])])],8,Ps)],64))}},ca={class:"eService pt-30"},da={class:"container"},na={class:"row justify-content-center"},ra={class:"col-lg-12"},pa={class:"text-center pb-60"},ha=e("h2",{class:"fz-34-sb-black pb-15"},"Your Vision, Our Software: Ready or Custom Plans",-1),ua=e("p",{class:"fz-16-m-black-2"},"Start your software journey with our ready plans, offering the flexibility to mix and match services, or start anew with a customized project guided by our expert team. ",-1),ma={class:"btn-control justify-content-center align-items-center d-flex"},_a={class:"row"},ba={class:"col-lg-3 col-md-3"},va={class:"tab-left"},ga={class:"Etop"},fa=e("h4",null,"Select a Product",-1),Ca={class:"nav flex-column nav-pills me-3",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},$a=["id","data-bs-target","aria-controls","onClick"],ya={class:"eNav d-flex"},wa={key:0,class:"image"},ka=["src"],xa={key:1,class:"image"},Fa=["src"],Sa={class:"motion"},Ia=e("span",null,"3 Package",-1),Ma=E('<div class="support"><h4>Need Support?</h4><ul><li><a href="https://www.linkedin.com/company/creativeitem" target="_blank"><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.662476 2.15679C0.662476 1.55618 0.872692 1.06068 1.29311 0.670302C1.71352 0.279906 2.26008 0.0847168 2.93275 0.0847168C3.59341 0.0847168 4.12794 0.276897 4.53635 0.661293C4.95676 1.05769 5.16698 1.57419 5.16698 2.21084C5.16698 2.78742 4.96278 3.26789 4.55437 3.65228C4.13395 4.04868 3.58139 4.24688 2.89671 4.24688H2.87869C2.21803 4.24688 1.6835 4.04868 1.27509 3.65228C0.866674 3.25589 0.662476 2.75738 0.662476 2.15679ZM0.89671 17.9226V5.88652H4.89671V17.9226H0.89671ZM7.11293 17.9226H11.1129V11.2018C11.1129 10.7814 11.161 10.4571 11.2571 10.2289C11.4252 9.82044 11.6805 9.47509 12.0228 9.19282C12.3652 8.91053 12.7946 8.7694 13.3111 8.7694C14.6565 8.7694 15.3291 9.6763 15.3291 11.4901V17.9226H19.3291V11.0217C19.3291 9.24387 18.9087 7.89553 18.0679 6.97661C17.227 6.05769 16.1159 5.59823 14.7345 5.59823C13.185 5.59823 11.9778 6.2649 11.1129 7.59823V7.63426H11.0949L11.1129 7.59823V5.88652H7.11293C7.13694 6.2709 7.14896 7.46608 7.14896 9.4721C7.14896 11.4781 7.13694 14.2949 7.11293 17.9226Z" fill="white"></path></svg></a></li><li><a class="color-1" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path></svg></a></li><li><a class="color-2" href="#"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.24273 6.83118C5.90705 4.79901 9.01734 3.45928 10.5736 2.81199C15.0169 0.963837 15.9402 0.642794 16.542 0.632193C16.6744 0.629862 16.9703 0.662664 17.162 0.818214C17.3239 0.949558 17.3684 1.12699 17.3897 1.25151C17.4111 1.37604 17.4376 1.65972 17.4165 1.88138C17.1757 4.41136 16.1338 10.5509 15.6038 13.3846C15.3795 14.5836 14.9379 14.9856 14.5103 15.0249C13.5812 15.1104 12.8756 14.4109 11.9757 13.821C10.5675 12.8979 9.77193 12.3232 8.40502 11.4225C6.82532 10.3815 7.84938 9.80932 8.74964 8.87426C8.98525 8.62956 13.0791 4.90588 13.1583 4.56809C13.1683 4.52584 13.1775 4.36836 13.0839 4.28521C12.9903 4.20206 12.8523 4.23049 12.7526 4.25311C12.6114 4.28516 10.3618 5.77208 6.00373 8.71387C5.36518 9.15235 4.7868 9.36599 4.26859 9.35479C3.69731 9.34245 2.59839 9.03178 1.78145 8.76623C0.779452 8.44052 -0.0169188 8.26831 0.0524273 7.71515C0.088547 7.42704 0.485314 7.13238 1.24273 6.83118Z" fill="white"></path></svg></a></li><li><a class="color-3" href="https://www.instagram.com/creativeitem.developers/" target="_blank"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.00585 10.1533C7.00585 8.41411 8.41533 7.00387 10.1545 7.00387C11.8937 7.00387 13.3039 8.41411 13.3039 10.1533C13.3039 11.8924 11.8937 13.3027 10.1545 13.3027C8.41533 13.3027 7.00585 11.8924 7.00585 10.1533ZM5.30334 10.1533C5.30334 12.8326 7.4752 15.0044 10.1545 15.0044C12.8338 15.0044 15.0057 12.8326 15.0057 10.1533C15.0057 7.47398 12.8338 5.30212 10.1545 5.30212C7.4752 5.30212 5.30341 7.47382 5.30341 10.1533M14.0641 5.10977C14.064 5.33399 14.1304 5.5532 14.2549 5.73969C14.3794 5.92618 14.5564 6.07155 14.7635 6.15744C14.9706 6.24333 15.1986 6.26587 15.4185 6.22222C15.6384 6.17856 15.8405 6.07067 15.9991 5.91218C16.1577 5.7537 16.2658 5.55173 16.3096 5.33184C16.3534 5.11194 16.3311 4.88398 16.2454 4.67679C16.1596 4.4696 16.0144 4.29248 15.828 4.16784C15.6416 4.04319 15.4225 3.97661 15.1982 3.97652H15.1978C14.8972 3.97666 14.609 4.09609 14.3965 4.30857C14.1839 4.52105 14.0643 4.80921 14.0641 5.10977ZM6.33772 17.8434C5.41663 17.8014 4.91599 17.648 4.58329 17.5184C4.14221 17.3467 3.82749 17.1421 3.4966 16.8117C3.16572 16.4813 2.96089 16.1669 2.78993 15.7258C2.66024 15.3932 2.50681 14.8924 2.46494 13.9713C2.41914 12.9755 2.40999 12.6764 2.40999 10.1534C2.40999 7.6305 2.41989 7.33219 2.46494 6.33552C2.50689 5.41443 2.66145 4.91462 2.78993 4.58109C2.96165 4.14 3.16617 3.82529 3.4966 3.4944C3.82704 3.16351 4.14145 2.95869 4.58329 2.78773C4.91584 2.65803 5.41663 2.50461 6.33772 2.46274C7.33356 2.41694 7.6327 2.40779 10.1545 2.40779C12.6763 2.40779 12.9757 2.41754 13.9724 2.46289C14.8935 2.50483 15.3933 2.6594 15.7268 2.78788C16.1679 2.95884 16.4826 3.16412 16.8135 3.49455C17.1444 3.82499 17.3485 4.14015 17.5202 4.58124C17.6499 4.91379 17.8033 5.41458 17.8452 6.33567C17.891 7.33234 17.9001 7.63065 17.9001 10.1536C17.9001 12.6765 17.891 12.9748 17.8452 13.9715C17.8032 14.8926 17.6491 15.3932 17.5202 15.7259C17.3485 16.167 17.144 16.4817 16.8135 16.8119C16.4831 17.142 16.1679 17.3468 15.7268 17.5185C15.3943 17.6482 14.8935 17.8016 13.9724 17.8435C12.9766 17.8893 12.6774 17.8985 10.1545 17.8985C7.63157 17.8985 7.33326 17.8893 6.33772 17.8435M6.2595 0.763024C5.25376 0.808826 4.56651 0.968299 3.96633 1.20184C3.34514 1.44302 2.81858 1.76657 2.29277 2.29155C1.76696 2.81653 1.44424 3.34317 1.20306 3.96511C0.96952 4.56567 0.810046 5.25254 0.764245 6.25828C0.717688 7.2656 0.707031 7.58765 0.707031 10.1533C0.707031 12.7189 0.717688 13.041 0.764245 14.0483C0.810046 15.0541 0.96952 15.7409 1.20306 16.3414C1.44424 16.9626 1.76704 17.4903 2.29277 18.015C2.8185 18.5398 3.34439 18.8629 3.96633 19.1047C4.56764 19.3383 5.25376 19.4977 6.2595 19.5435C7.26735 19.5893 7.58887 19.6007 10.1545 19.6007C12.7201 19.6007 13.0422 19.5901 14.0495 19.5435C15.0553 19.4977 15.7421 19.3383 16.3427 19.1047C16.9639 18.8629 17.4904 18.54 18.0162 18.015C18.542 17.49 18.8641 16.9626 19.1059 16.3414C19.3395 15.7409 19.4997 15.054 19.5448 14.0483C19.5906 13.0402 19.6012 12.7189 19.6012 10.1533C19.6012 7.58765 19.5906 7.2656 19.5448 6.25828C19.4989 5.25246 19.3395 4.56529 19.1059 3.96511C18.8641 3.34392 18.5412 2.81736 18.0162 2.29155C17.4912 1.76574 16.9639 1.44302 16.3434 1.20184C15.7421 0.968299 15.0552 0.80807 14.0503 0.763024C13.0428 0.716996 12.7209 0.705811 10.1556 0.705811C7.59038 0.705811 7.26773 0.716467 6.25987 0.763024" fill="white"></path></svg></a></li></ul></div><div class="support video-sup d-flex align-items-center"><a href=""><svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.77781 20C2.77645 19.9957 1.81729 19.5627 1.10956 18.7956C0.401841 18.0285 0.00298422 16.9894 0 15.9051V4.09073C1.68461e-05 3.37265 0.174588 2.66722 0.506167 2.04535C0.837746 1.42348 1.31465 0.907075 1.88895 0.548042C2.46325 0.189008 3.1147 -4.56059e-06 3.77784 0C4.44097 4.56076e-06 5.09243 0.189027 5.66672 0.548068L15.1113 6.45524C15.6855 6.8143 16.1624 7.33071 16.4939 7.95257C16.8255 8.57444 17 9.27985 17 9.9979C17 10.716 16.8255 11.4214 16.4939 12.0432C16.1624 12.6651 15.6855 13.1815 15.1113 13.5406L5.66672 19.4477C5.09294 19.8086 4.44136 19.9991 3.77781 20Z" fill="white"></path></svg></a><h4>How it Works!</h4></div>',2),ja={class:"col-lg-9 col-md-9"},La={class:"tab-right"},Ea={class:"tab-content",id:"v-pills-tabContent"},Va={class:"row"},Ha=e("p",{class:"package-title"},"Select a Package",-1),Oa={class:"package-plan"},qa={class:"most d-flex"},Ta={key:0},za={class:"del_text"},Aa={class:"plan"},Ba={key:0,width:"17",height:"13",viewBox:"0 0 17 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Na=e("path",{d:"M6.79844 13C6.49844 13 6.29844 12.9 6.09844 12.7L1.19844 7.49997C0.798438 7.09997 0.798438 6.49997 1.19844 6.09997C1.59844 5.69997 2.19844 5.69997 2.59844 6.09997L6.69844 10.5L15.0984 1.29997C15.3984 0.899971 16.0984 0.79997 16.4984 1.09997C16.8984 1.39997 16.9984 2.09997 16.6984 2.49997L16.5984 2.59997L7.49844 12.6C7.39844 12.9 7.09844 13 6.79844 13Z",fill:"#02BC7D"},null,-1),Pa=[Na],Ua={key:1},Za={key:2,class:"service-feature"},Da={key:0,class:"package-title mt-3"},Ya={key:1,class:"eg_row"},Wa=e("p",{class:"epack"},"Service List:",-1),Ra={class:"row"},Ga={class:"col-lg-4 col-md-6 col-sm-6 right-border"},Qa={class:"eCheck"},Ja={key:0,class:"single-eCheck d-flex justify-content-between align-items-center"},Ka={class:"form-check"},Xa=["value","id"],eo=["for"],so={class:"col-lg-4 col-md-6 col-sm-6 right-border"},ao={class:"eCheck"},oo={key:0,class:"single-eCheck d-flex justify-content-between align-items-center"},to={class:"form-check"},lo=["value","id"],io=["for"],co={class:"col-lg-4 col-md-12 d-flex align-items-center"},no={class:"eCheck eCheck-price"},ro=e("p",null,"Total Amount",-1),po={class:"faq"},ho={class:"container"},uo=E('<div class="row justify-content-center"><div class="col-lg-6"><div class="text-center pb-60"><h2 class="fz-34-sb-black pb-15">Faqs</h2><p class="fz-16-m-black-2">Here are some helpful answers to your common questions and queries regarding our services</p></div></div></div>',1),mo={class:"row justify-content-center"},_o={class:"col-lg-3 col-md-12"},bo={class:"faq-img"},vo=["src"],go=E('<div class="col-lg-9 col-md-12"><div class="faq-wrap"><div class="accordion" id="accordionExample"><div class="accordion-item"><h2 class="accordion-header" id="headingOne"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Can I use Creative elements templates for my clients?</button></h2><div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"><div class="accordion-body">Lorem Ipsum available, but the majority have suffered alteration some injected humour randomised words which do look slightly believable If you are going to use a passage</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Do you provide documentation and support?</button></h2><div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"><div class="accordion-body">Lorem Ipsum available, but the majority have suffered alteration some injected humour randomised words which do look slightly believable If you are going to use a passage</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">How long do I have support access?</button></h2><div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"><div class="accordion-body">Lorem Ipsum available, but the majority have suffered alteration some injected humour randomised words which do look slightly believable If you are going to use a passage</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingFour"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">What payment methods do you accept?</button></h2><div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample"><div class="accordion-body">Lorem Ipsum available, but the majority have suffered alteration some injected humour randomised words which do look slightly believable If you are going to use a passage</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingFive"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">What happens after my subscription runs out?</button></h2><div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample"><div class="accordion-body">Lorem Ipsum available, but the majority have suffered alteration some injected humour randomised words which do look slightly believable If you are going to use a passage</div></div></div></div></div></div>',1),$o={__name:"Service",props:{seo:Object,products:Array},setup(d){const b=j(),c=M([]),t=M([]),o=d,n=M([]),r=M(0);L({selectedServices:[]});const p=()=>{r.value=n.value.reduce((f,g)=>f+parseFloat(g.price),0),console.log("Selected Services:",n)};A(n,p);const v=async f=>{try{const g=await fetch(`${b.props.base.url}/api/product_wise_packages/${f}`);if(g.ok){const h=await g.json();h.status==="success"?(c.value=h.data,t.value=h.services):console.error("API request failed")}else console.error("Network response was not ok")}catch(g){console.error("Error fetching data:",g)}};return B(()=>{v("academy-lms"),p(),$(document).prop("title",o.seo.meta_title),$("meta[name='description']").attr("content",o.seo.meta_description),$("meta[name='keywords']").attr("content",o.seo.meta_keywords),$("meta[name='robot']").attr("content",o.seo.meta_robot),$("link[rel='canonical']").attr("href",o.seo.canonical_url),$("link[rel='custom']").attr("href",o.seo.custom_url),$("meta[property='og:title']").attr("content",o.seo.og_title),$("meta[property='og:description']").attr("content",o.seo.og_description),$("meta[property='og:image']").attr("content",o.seo.og_image)}),(f,g)=>(s(),a(u,null,[y(N),e("section",ca,[e("div",da,[e("div",na,[e("div",ra,[e("div",pa,[ha,ua,e("div",ma,[y(m(O),{href:f.route("services"),class:"active"},{default:H(()=>[I("Ready Plans")]),_:1},8,["href"]),y(m(O),{href:f.route("hire_us"),class:""},{default:H(()=>[I("New Project")]),_:1},8,["href"])])])])]),e("div",_a,[e("div",ba,[e("div",va,[e("div",ga,[fa,e("div",Ca,[(s(!0),a(u,null,C(d.products,h=>(s(),a("button",{key:h.id,class:S(["nav-link",{active:h.slug==="academy-lms"}]),id:"v-pills-"+h.slug+"-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-"+h.slug,type:"button",role:"tab","aria-controls":"v-pills-"+h.slug,"aria-selected":"true",onClick:l=>v(h.slug)},[e("div",ya,[h.slug=="academy-lms"?(s(),a("div",wa,[e("img",{src:f.$page.props.base.url+"/assets/img/icon/academy.svg",alt:""},null,8,ka)])):(s(),a("div",xa,[e("img",{src:f.$page.props.base.url+"/assets/img/icon/ekattor8.svg",alt:""},null,8,Fa)])),e("div",Sa,[e("h5",null,i(h.name),1),Ia])])],10,$a))),128))])]),Ma])]),e("div",ja,[e("div",La,[e("div",Ea,[(s(!0),a(u,null,C(d.products,h=>(s(),a("div",{class:S(["tab-pane fade",{"show active":h.slug==="academy-lms"}]),key:h.id,id:"v-pills-{{ product.slug }}",role:"tabpanel","aria-labelledby":"v-pills-{{ product.slug }}-tab",tabindex:"0"},[e("div",Va,[Ha,(s(!0),a(u,null,C(c.value,(l,x)=>(s(),a("div",{class:"col-lg-4 col-md-6 col-sm-6",key:l.id},[e("div",Oa,[e("div",qa,[e("h4",null,i(l.name),1),l.name=="Pro"?(s(),a("span",Ta,"Most Popular")):_("",!0)]),e("span",null,[I("$"+i(l.discounted_price)+" ",1),e("del",za,"$"+i(l.price),1)]),e("ul",Aa,[(s(!0),a(u,null,C(l.service_features,(k,V)=>(s(),a("li",{class:"d-flex align-items-center",key:k.id},[x==0||V!=0?(s(),a("svg",Ba,Pa)):_("",!0),x==0||V!=0?(s(),a("p",Ua,i(k.feature),1)):(s(),a("p",Za,i(k.feature),1))]))),128))]),y(Le,{feature:l,modalId:"exampleModal"+l.id},null,8,["feature","modalId"]),y(ia,{services:l.service_features,modalId:"serviceModal"+l.id},null,8,["services","modalId"])])]))),128))]),t.value.length>0?(s(),a("p",Da,"or, customize your package")):_("",!0),t.value.length>0?(s(),a("div",Ya,[Wa,e("div",Ra,[e("div",Ga,[e("div",Qa,[(s(!0),a(u,null,C(t.value,(l,x)=>(s(),a("div",{key:l.id},[x%2===0?(s(),a("div",Ja,[e("div",Ka,[w(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":g[0]||(g[0]=k=>n.value=k),value:l,id:l.id},null,8,Xa),[[q,n.value]]),e("label",{class:"form-check-label",for:l.id},i(l.name),9,eo)]),e("span",null,"$"+i(l.price),1)])):_("",!0)]))),128))])]),e("div",so,[e("div",ao,[(s(!0),a(u,null,C(t.value,(l,x)=>(s(),a("div",{key:l.id},[x%2!==0?(s(),a("div",oo,[e("div",to,[w(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":g[1]||(g[1]=k=>n.value=k),value:l,id:l.id},null,8,lo),[[q,n.value]]),e("label",{class:"form-check-label",for:l.id},i(l.name),9,io)]),e("span",null,"$"+i(l.price),1)])):_("",!0)]))),128))])]),e("div",co,[e("div",no,[ro,e("h5",null,"$"+i(r.value.toFixed(2)),1),e("span",null,i(n.value.length)+" Service Selected",1),y(fs,{selectedServices:n.value},null,8,["selectedServices"]),y(As,{services:t.value},null,8,["services"])])])])])):_("",!0)],2))),128))])])])])])]),e("section",po,[e("div",ho,[uo,e("div",mo,[e("div",_o,[e("div",bo,[e("img",{src:f.$page.props.base.url+"/public/assets/img/product-item/faq-img.png",alt:"..."},null,8,vo)])]),go])])]),y(P)],64))}};export{$o as default};
