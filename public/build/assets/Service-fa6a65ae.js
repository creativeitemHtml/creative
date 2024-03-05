import{Q as q,s as S,T as E,o as s,f as t,b as e,c as I,g as r,e as U,l as F,v as M,u,t as c,F as g,m as L,q as Q,y as k,a as C,x as A,j as X,k as G,w as H,d as j,p as N,n as W,E as O}from"./app-908bbc14.js";import{_ as J,a as K}from"./Footer-ce4a7bb4.js";import{_ as T}from"./CustomeToast-2f89a2aa.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";const se=["data-bs-target"],te=["data-bs-target"],ae=["id"],oe={class:"modal-dialog modal-dialog-centered modal-xl"},le={class:"modal-content"},ce=e("div",{class:"modal-header"},[e("h1",{class:"modal-title"},"Checkout"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ie={class:"modal-body"},de=["onSubmit"],ne={class:"row justify-content-center"},re={class:"col-lg-6 col-md-12"},ue=e("h1",{class:"modal-title pb-3"},"Billing Address",-1),pe={key:0,class:"cFormInput-wrap"},he={key:1,class:"cForm-wrap"},me={class:"cFormInput-wrap"},ve={key:2,class:"cForm-wrap"},_e={class:"cFormInput-wrap"},be={key:3,class:"eCheckbox eCheckbox-2 d-flex flex-column g-20 pt-11"},ge=e("div",{class:"form-check"},[e("input",{class:"form-check-input",type:"checkbox",value:"",id:"createAccount",checked:"",disabled:""}),e("label",{class:"form-check-label",for:"createAccount"},"Create an account")],-1),fe=[ge],ye=e("div",{class:"col-lg-2 col-md-12"},null,-1),ke={class:"col-lg-4 col-md-12"},$e=e("h1",{class:"modal-title pb-3"},"Order Summary",-1),we={class:"mr-25 bd-all bd-r-10"},Ce={class:"eCheckbox planCheck-wrap"},xe={class:"nav flex-column nav-pills planCheck",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},Se={class:"form-check check-custom"},Fe={class:"row"},Ie={class:"col-9"},Te={class:"eForm-label cus-label",for:"flexCheckBasic"},Be={class:"col-3 cus-label text-end"},qe={class:"mr-25 py-20 d-flex justify-content-between align-items-center flex-wrap g-10"},Me=e("h4",{class:"fz-18-sb-black"},"Total",-1),Pe={class:"fz-18-sb-black",id:"selected-package-price"},je=L('<div class="pb-20 mr-25"><div class="content"><div class="cForm-wrap"><button type="submit" class="checkout-order-btn">Complete order</button></div></div></div><div class="elitem-allFile mb-10"><img src="https://creativeitem.com/public/assets/img/icon/lock.svg" alt=""><p>Secure Checkout</p></div>',2),D={__name:"ServiceCheckout",props:{feature:Object,modalId:String,isModal:Boolean},setup(l){const v=l,_=q().props.auth.user,p=S(!1),o=E({name:_?_.name:"",email:_?_.email:""}),n=()=>{o.email!=""?(o.post(route("purchase_service_package",{service_id:v.feature.id})),$("#"+v.modalId).modal("hide")):(p.value=!1,setTimeout(()=>{p.value=!0},100))};return(a,h)=>(s(),t(g,null,[l.isModal==!0?(s(),t("button",{key:0,type:"button",class:"ciBtn ciBtn-primary ms-2","data-bs-toggle":"modal","data-bs-target":"#"+l.modalId,"data-bs-dismiss":"modal","data-bs-whatever":"@mdo"},"Buy Now",8,se)):(s(),t("button",{key:1,type:"button",class:"buy-btn","data-bs-toggle":"modal","data-bs-target":"#"+l.modalId,"data-bs-whatever":"@mdo"},"Buy Now",8,te)),e("div",{id:l.modalId,class:"modal fade",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[p.value?(s(),I(T,{key:0,type:"info",message:"Please provide a email address"})):r("",!0),e("div",oe,[e("div",le,[ce,e("div",ie,[e("form",{onSubmit:U(n,["prevent"])},[e("div",ne,[e("div",re,[ue,a.$page.props.auth.user?(s(),t("div",pe,[F(e("input",{type:"text",class:"form-control eForm-control checkout",id:"name",name:"name","onUpdate:modelValue":h[0]||(h[0]=m=>u(o).name=m),disabled:""},null,512),[[M,u(o).name]])])):r("",!0),a.$page.props.auth.user?(s(),t("div",he,[e("div",me,[F(e("input",{type:"email",class:"form-control eForm-control checkout",id:"email",name:"email","onUpdate:modelValue":h[1]||(h[1]=m=>u(o).email=m),disabled:""},null,512),[[M,u(o).email]])])])):r("",!0),a.$page.props.auth.user?r("",!0):(s(),t("div",ve,[e("div",_e,[F(e("input",{type:"email",class:"form-control eForm-control checkout",id:"email",name:"email",placeholder:"Your Email","aria-label":"Your Email","onUpdate:modelValue":h[2]||(h[2]=m=>u(o).email=m)},null,512),[[M,u(o).email]])])])),a.$page.props.auth.user?r("",!0):(s(),t("div",be,fe))]),ye,e("div",ke,[$e,e("div",we,[e("div",Ce,[e("div",xe,[e("div",Se,[e("div",Fe,[e("div",Ie,[e("label",Te,c(l.feature.name),1)]),e("div",Be,[e("p",null,"$"+c(l.feature.discounted_price),1)])])])])])]),e("div",qe,[Me,e("h4",Pe," $"+c(l.feature.discounted_price),1)]),je])])],40,de)])])])],8,ae)],64))}},Ee={class:"modal fade",id:"customCheckoutModal",tabindex:"-1","aria-labelledby":"customCheckoutModalLabel","aria-hidden":"true"},Le={class:"modal-dialog modal-dialog-centered modal-xl"},ze={class:"modal-content"},Ve=e("div",{class:"modal-header"},[e("h1",{class:"modal-title"},"Checkout"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ae={class:"modal-body"},He=["onSubmit"],Ne={class:"row justify-content-center"},We={class:"col-lg-6 col-md-12"},Oe=e("h1",{class:"modal-title pb-3"},"Billing Address",-1),Ue={key:0,class:"cFormInput-wrap"},De={key:1,class:"cForm-wrap"},Ye={class:"cFormInput-wrap"},Ze={key:2,class:"cForm-wrap"},Re={class:"cFormInput-wrap"},Qe={key:3,class:"eCheckbox eCheckbox-2 d-flex flex-column g-20 pt-11"},Xe=e("div",{class:"form-check"},[e("input",{class:"form-check-input",type:"checkbox",value:"",id:"createAccount",checked:"",disabled:""}),e("label",{class:"form-check-label",for:"createAccount"},"Create an account")],-1),Ge=[Xe],Je=e("div",{class:"col-lg-2 col-md-12"},null,-1),Ke={class:"col-lg-4 col-md-12"},es=e("h1",{class:"modal-title pb-3"},"Order Summary",-1),ss={class:"mr-25 bd-all bd-r-10"},ts={class:"eCheckbox planCheck-wrap"},as={class:"nav flex-column nav-pills planCheck",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},os={class:"form-check check-custom"},ls={class:"col-9"},cs={class:"eForm-label cus-label",for:"flexCheckBasic"},is={class:"col-3 cus-label text-end"},ds={class:"mr-25 py-20 d-flex justify-content-between align-items-center flex-wrap g-10"},ns=e("h4",{class:"fz-18-sb-black"},"Total",-1),rs={class:"fz-18-sb-black",id:"selected-package-price"},us=e("div",{class:"pb-20 mr-25"},[e("div",{class:"content"},[e("div",{class:"cForm-wrap"},[e("button",{type:"submit",class:"checkout-order-btn"},"Complete order")])])],-1),ps={class:"elitem-allFile mb-10"},hs=["src"],ms=e("p",null,"Secure Checkout",-1),vs={__name:"ServiceCustomCheckout",props:{selectedServices:Array},setup(l){const v=q().props.auth.user,_=S(!1),p=l,o=E({name:v?v.name:"",email:v?v.email:"",selectedServices:""}),n=()=>{o.email!=""?(o.selectedServices=p.selectedServices,o.post(route("purchase_custom_service")),$("#customCheckoutModal").modal("hide")):(_.value=!1,setTimeout(()=>{_.value=!0},100))},a=Q(()=>p.selectedServices.reduce((h,m)=>h+parseFloat(m.price),0));return(h,m)=>(s(),t("div",Ee,[_.value?(s(),I(T,{key:0,type:"info",message:"Please provide a email address"})):r("",!0),e("div",Le,[e("div",ze,[Ve,e("div",Ae,[e("form",{onSubmit:U(n,["prevent"])},[e("div",Ne,[e("div",We,[Oe,h.$page.props.auth.user?(s(),t("div",Ue,[F(e("input",{type:"text",class:"form-control eForm-control checkout",id:"name",name:"name","onUpdate:modelValue":m[0]||(m[0]=y=>u(o).name=y),disabled:""},null,512),[[M,u(o).name]])])):r("",!0),h.$page.props.auth.user?(s(),t("div",De,[e("div",Ye,[F(e("input",{type:"email",class:"form-control eForm-control checkout",id:"email",name:"email","onUpdate:modelValue":m[1]||(m[1]=y=>u(o).email=y),disabled:""},null,512),[[M,u(o).email]])])])):r("",!0),h.$page.props.auth.user?r("",!0):(s(),t("div",Ze,[e("div",Re,[F(e("input",{type:"email",class:"form-control eForm-control checkout",id:"email",name:"email",placeholder:"Your Email","aria-label":"Your Email","onUpdate:modelValue":m[2]||(m[2]=y=>u(o).email=y)},null,512),[[M,u(o).email]])])])),h.$page.props.auth.user?r("",!0):(s(),t("div",Qe,Ge))]),Je,e("div",Ke,[es,e("div",ss,[e("div",ts,[e("div",as,[e("div",os,[(s(!0),t(g,null,k(l.selectedServices,y=>(s(),t("div",{class:"row",key:y.id},[e("div",ls,[e("label",cs,c(y.name),1)]),e("div",is,[e("p",null,"$"+c(y.price),1)])]))),128))])])])]),e("div",ds,[ns,e("h4",rs," $"+c(a.value),1)]),us,e("div",ps,[e("img",{src:h.$page.props.base.url+"/public/assets/img/icon/shield-security.svg",alt:""},null,8,hs),ms])])])],40,He)])])])]))}},_s=e("div",{class:"d-flex justify-content-center"},[e("button",{type:"button",class:"need-text","data-bs-toggle":"modal","data-bs-target":"#serviceHelp","data-bs-whatever":"@mdo"},"Learn More")],-1),bs={class:"modal fade",id:"serviceHelp",tabindex:"-1","aria-labelledby":"serviceHelpLabel","aria-hidden":"true"},gs={class:"modal-dialog modal-xl"},fs={class:"modal-content"},ys=e("div",{class:"modal-header"},[e("h1",{class:"modal-title"},"Custom Services :"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ks={class:"modal-body"},$s=e("div",{class:"row justify-content-center"},[e("h2",{class:"service-help-txt"},"Service Details")],-1),ws={class:"row justify-content-center"},Cs={class:"col-lg-6 col-md-12"},xs={class:"service-help-header"},Ss={class:"service-help-body"},Fs={class:"col-lg-6 col-md-12"},Is={class:"service-help-header"},Ts={class:"service-help-body"},Bs={__name:"ServiceHelpModal",props:{services:Array},setup(l){const v=l,_=v.services.filter((o,n)=>n%2===1),p=v.services.filter((o,n)=>n%2===0);return(o,n)=>(s(),t(g,null,[_s,e("div",bs,[e("div",gs,[e("div",fs,[ys,e("div",ks,[$s,e("div",ws,[e("div",Cs,[(s(!0),t(g,null,k(u(p),a=>(s(),t("div",{class:"service-help-item",key:a.id},[e("h2",xs,c(a.name),1),e("div",Ss,c(a.note),1)]))),128))]),e("div",Fs,[(s(!0),t(g,null,k(u(_),a=>(s(),t("div",{class:"service-help-item",key:a.id},[e("h2",Is,c(a.name),1),e("div",Ts,c(a.note),1)]))),128))])])])])])])],64))}},qs={class:"d-flex justify-content-center"},Ms=["data-bs-target"],Ps=["id"],js={class:"modal-dialog modal-xl"},Es={class:"modal-content"},Ls={class:"modal-header pe-0"},zs={class:"row justify-content-between w-100"},Vs={class:"col-lg-9 col-12"},As={class:"d-flex align-items-center"},Hs={class:"modal-title"},Ns={key:0,class:"model-title-value mb-0"},Ws={key:1,class:"model-title-value mb-0"},Os={key:2,class:"model-title-value mb-0"},Us={class:"col-lg-3 col-12"},Ds={class:"bar-controls d-flex text-sm-center align-items-center justify-content-end p-0 ps-4"},Ys={class:"modal-title"},Zs=e("button",{type:"button",class:"btn-close m-0","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Rs={class:"modal-body"},Qs=e("div",{class:"row justify-content-center"},[e("h2",{class:"service-help-txt"},"Service Details")],-1),Xs={class:"row justify-content-center"},Gs={class:"col-lg-6 col-md-12"},Js={class:"service-help-header"},Ks={class:"service-help-body"},et={class:"col-lg-6 col-md-12"},st={class:"service-help-header"},tt={class:"service-help-body"},at={__name:"ServicePackageHelpModal",props:{feature:Array,modalId:String},setup(l){const v=l,_=v.feature.service_features.filter((o,n)=>n%2===1),p=v.feature.service_features.filter((o,n)=>n%2===0);return(o,n)=>(s(),t(g,null,[e("div",qs,[e("button",{type:"button",class:"need-text","data-bs-toggle":"modal","data-bs-target":"#"+l.modalId,"data-bs-whatever":"@mdo"},"Learn More",8,Ms)]),e("div",{id:l.modalId,class:"modal fade",tabindex:"-1","aria-labelledby":"serviceHelpLabel","aria-hidden":"true"},[e("div",js,[e("div",Es,[e("div",Ls,[e("div",zs,[e("div",Vs,[e("div",As,[e("h1",Hs,c(l.feature.name)+" Package :",1),l.feature.name=="Pro"?(s(),t("span",Ns," Included Basic Packages")):l.feature.name=="Business"?(s(),t("span",Ws," Included Professional & Business Packages")):(s(),t("span",Os))])]),e("div",Us,[e("div",Ds,[e("h1",Ys,"$"+c(l.feature.discounted_price),1),C(D,{feature:l.feature,isModal:!0,modalId:"exampleModal"+l.feature.id},null,8,["feature","modalId"]),Zs])])])]),e("div",Rs,[Qs,e("div",Xs,[e("div",Gs,[(s(!0),t(g,null,k(u(p),a=>(s(),t("div",{class:"service-help-item",key:a},[e("h2",Js,c(a.feature),1),e("div",Ks,c(a.note),1)]))),128))]),e("div",et,[(s(!0),t(g,null,k(u(_),a=>(s(),t("div",{class:"service-help-item",key:a},[e("h2",st,c(a.feature),1),e("div",tt,c(a.note),1)]))),128))])])])])])],8,Ps)],64))}},ot={};function lt(l,v){return null}const ct=ee(ot,[["render",lt]]),it={class:"absolute top-8 right-10 z-10"},dt={class:"eService pt-30"},nt={class:"container"},rt={class:"row justify-content-center"},ut={class:"col-lg-12"},pt={class:"text-center pb-60"},ht=e("h2",{class:"fz-34-sb-black pb-15"},"Ready Services For Your Website",-1),mt=e("p",{class:"fz-16-m-black-2"},"Select any package or choose from our services to meet your needs. ",-1),vt={class:"btn-control justify-content-center align-items-center d-flex"},_t={class:"row"},bt={class:"col-lg-3 col-md-3"},gt={class:"tab-left"},ft={class:"Etop"},yt=e("h4",null,"Select a Product",-1),kt={class:"nav flex-column nav-pills me-3",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},$t=["id","data-bs-target","aria-controls","onClick"],wt={class:"eNav d-flex"},Ct={key:0,class:"image"},xt=["src"],St={key:1,class:"image"},Ft=["src"],It={class:"motion"},Tt=e("span",null,"3 Package",-1),Bt={class:"large-show"},qt={class:"support"},Mt=e("h4",null,"Contact For Support",-1),Pt={href:"http://support.creativeitem.com/",target:"_blank","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Zendesk"},jt=["src"],Et={href:"https://wa.link/izd8dl",target:"_blank","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Whatsapp"},Lt=["src"],zt={href:"https://t.me/creativeitem_elements",target:"_blank","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Telegram"},Vt=["src"],At={href:"https://m.me/creativeitemApps",target:"_blank","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Messenger"},Ht=["src"],Nt=e("div",{class:"support video-sup d-flex align-items-center"},[e("span",null,[e("svg",{width:"17",height:"20",viewBox:"0 0 17 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M3.77781 20C2.77645 19.9957 1.81729 19.5627 1.10956 18.7956C0.401841 18.0285 0.00298422 16.9894 0 15.9051V4.09073C1.68461e-05 3.37265 0.174588 2.66722 0.506167 2.04535C0.837746 1.42348 1.31465 0.907075 1.88895 0.548042C2.46325 0.189008 3.1147 -4.56059e-06 3.77784 0C4.44097 4.56076e-06 5.09243 0.189027 5.66672 0.548068L15.1113 6.45524C15.6855 6.8143 16.1624 7.33071 16.4939 7.95257C16.8255 8.57444 17 9.27985 17 9.9979C17 10.716 16.8255 11.4214 16.4939 12.0432C16.1624 12.6651 15.6855 13.1815 15.1113 13.5406L5.66672 19.4477C5.09294 19.8086 4.44136 19.9991 3.77781 20Z",fill:"white"})])]),e("h4",null,"How it Works!")],-1),Wt=[Nt],Ot={class:"col-lg-9 col-md-9"},Ut={class:"tab-right"},Dt={class:"tab-content",id:"v-pills-tabContent"},Yt={class:"row"},Zt=e("p",{class:"package-title"},"Select a Package",-1),Rt={class:"package-plan"},Qt={class:"most d-flex"},Xt={key:0},Gt=["onClick"],Jt=["src"],Kt={class:"del_text"},ea={class:"plan"},sa={key:0,width:"17",height:"13",viewBox:"0 0 17 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ta=e("path",{d:"M6.79844 13C6.49844 13 6.29844 12.9 6.09844 12.7L1.19844 7.49997C0.798438 7.09997 0.798438 6.49997 1.19844 6.09997C1.59844 5.69997 2.19844 5.69997 2.59844 6.09997L6.69844 10.5L15.0984 1.29997C15.3984 0.899971 16.0984 0.79997 16.4984 1.09997C16.8984 1.39997 16.9984 2.09997 16.6984 2.49997L16.5984 2.59997L7.49844 12.6C7.39844 12.9 7.09844 13 6.79844 13Z",fill:"#02BC7D"},null,-1),aa=[ta],oa={key:1},la={key:2,class:"service-feature"},ca={key:0,class:"package-title mt-3"},ia={key:1,class:"eg_row"},da=e("p",{class:"epack ml-65"},"Service List:",-1),na={class:"row"},ra=e("div",{class:"col-lg-1"},null,-1),ua={class:"col-lg-4 col-md-6 col-sm-6 right-border"},pa={class:"eCheck"},ha={key:0,class:"single-eCheck d-flex justify-content-between align-items-center"},ma={class:"form-check"},va=["value","id"],_a=["for"],ba={class:"col-lg-4 col-md-6 col-sm-6 right-border"},ga={class:"eCheck"},fa={key:0,class:"single-eCheck d-flex justify-content-between align-items-center"},ya={class:"form-check"},ka=["value","id"],$a=["for"],wa={class:"col-lg-3 col-md-12 d-flex align-items-center"},Ca={class:"eCheck eCheck-price"},xa=e("p",null,"Total Amount",-1),Sa={class:"small-show tab-left"},Fa={class:"support"},Ia=e("h4",null,"Contact For Support",-1),Ta={href:"http://support.creativeitem.com/",target:"_blank","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Zendesk"},Ba=["src"],qa={href:"https://wa.link/izd8dl",target:"_blank","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Whatsapp"},Ma=["src"],Pa={href:"https://t.me/creativeitem_elements",target:"_blank","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Telegram"},ja=["src"],Ea={href:"https://m.me/creativeitemApps",target:"_blank","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Messenger"},La=["src"],za=e("div",{class:"support video-sup d-flex align-items-center"},[e("span",null,[e("svg",{width:"17",height:"20",viewBox:"0 0 17 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M3.77781 20C2.77645 19.9957 1.81729 19.5627 1.10956 18.7956C0.401841 18.0285 0.00298422 16.9894 0 15.9051V4.09073C1.68461e-05 3.37265 0.174588 2.66722 0.506167 2.04535C0.837746 1.42348 1.31465 0.907075 1.88895 0.548042C2.46325 0.189008 3.1147 -4.56059e-06 3.77784 0C4.44097 4.56076e-06 5.09243 0.189027 5.66672 0.548068L15.1113 6.45524C15.6855 6.8143 16.1624 7.33071 16.4939 7.95257C16.8255 8.57444 17 9.27985 17 9.9979C17 10.716 16.8255 11.4214 16.4939 12.0432C16.1624 12.6651 15.6855 13.1815 15.1113 13.5406L5.66672 19.4477C5.09294 19.8086 4.44136 19.9991 3.77781 20Z",fill:"white"})])]),e("h4",null,"How it Works!")],-1),Va=[za],Aa={class:"faq"},Ha={class:"container"},Na=L('<div class="row justify-content-center"><div class="col-lg-12"><div class="text-center pb-60"><h2 class="fz-34-sb-black pb-15">Faqs</h2><p class="fz-16-m-black-2">Here are some helpful answers to your common questions and queries regarding our services</p></div></div></div>',1),Wa={class:"row justify-content-center"},Oa={class:"col-lg-3 col-md-12"},Ua={class:"faq-img"},Da=["src"],Ya=L('<div class="col-lg-9 col-md-12"><div class="faq-wraps"><div class="accordion" id="accordionExample"><div class="accordion-item"><h2 class="accordion-header" id="headingOne"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">What is a service?</button></h2><div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"><div class="accordion-body">Services are a task list that we will do dedicatedly to build your website. We will take all the technical liabilities to build the website from scratch and make your life easier. Services are categorized in several packages according to your needs &amp; purposes. Also, you can choose specific service(s) if you don&#39;t require a complete package.</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">What services will I get in the Pro package?</button></h2><div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"><div class="accordion-body">In the &quot;Pro package&quot;, you will get the services listed above along with the features from the &quot;Basic package&quot;.</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">What services will I get in the Business package?</button></h2><div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"><div class="accordion-body">In the &quot;Business package&quot;, you will get the services listed above along with the features from the both &quot;Basic package&quot; &amp; &quot;Pro package&quot;.</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingFour"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">How can I purchase a service package?</button></h2><div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample"><div class="accordion-body">To purchase one of our service packages, simply choose the package that suits your needs and click on the &quot;buy now&quot; button. Once you&#39;ve completed the payment, the selected package will be yours, and our team will initiate the service process. It&#39;s that simple!</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingFive"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">How can I choose specific services without purchasing any packages?</button></h2><div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample"><div class="accordion-body">You have the flexibility to select specific services from our pre-defined service list, and you will only be charged for those particular services. This allows you to tailor your experience based on your specific requirements.</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingSix"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">How long will the packages be valid?</button></h2><div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample"><div class="accordion-body">The package will be valid for 3 months from the date of purchase. During this period, you can avail the services included in the package. Please note that each package is offered for one-time use.</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingSeven"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">How will I get the support?</button></h2><div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample"><div class="accordion-body">We have a reliable and dedicated tech support team ready to assist you. If you encounter any issues, feel free to reach out to us through our Zendesk, email, or Telegram support channels. Your concerns are our priority, and we&#39;ll be there to help promptly.</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingEight"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">What if my required features are not available on your service list?</button></h2><div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample"><div class="accordion-body">If you don&#39;t find your required feature in our service list, simply click on the &quot;New Project&quot; tab and provide details about your specific requirements. We&#39;ll create a customized quotation for you and send it to your email for further consideration.</div></div></div></div></div></div>',1),Za=e("div",{class:"modal-body"},[e("div",{id:"player2","data-plyr-provider":"youtube","data-plyr-embed-id":"XZePsCuSOtU"})],-1),Ja={__name:"Service",props:{seo:Object,products:Array},setup(l){const v=q(),_=S([]),p=S([]);let o=null;const n=l,a=S([]),h=S(0);E({selectedServices:[]});const m=()=>{h.value=a.value.reduce((d,f)=>d+parseFloat(f.price),0),console.log("Selected Services:",a)};A(a,m);const y=async d=>{try{const f=await fetch(`${v.props.base.url}/api/product_wise_packages/${d}`);if(f.ok){const b=await f.json();b.status==="success"?(_.value=b.data,p.value=b.services):console.error("API request failed")}else console.error("Network response was not ok")}catch(f){console.error("Error fetching data:",f)}},w=S(q().props.flash);A(()=>q().props.flash,d=>{w.value=d}),X(()=>{y("academy-lms"),m(),$(document).prop("title",n.seo.meta_title),$("meta[name='description']").attr("content",n.seo.meta_description),$("meta[name='keywords']").attr("content",n.seo.meta_keywords),$("meta[name='robot']").attr("content",n.seo.meta_robot),$("link[rel='canonical']").attr("href",n.seo.canonical_url),$("link[rel='custom']").attr("href",n.seo.custom_url),$("meta[property='og:title']").attr("content",n.seo.og_title),$("meta[property='og:description']").attr("content",n.seo.og_description),$("meta[property='og:image']").attr("content",n.seo.og_image),setTimeout(function(){var d=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));d.map(function(f){return new bootstrap.Tooltip(f)})},3e3),w.value=q().props.flash});const P=S(!1),Y=()=>{P.value=!1,a.value.length>0?$("#customCheckoutModal").modal("show"):setTimeout(()=>{P.value=!0},100)},Z=d=>{$("#"+d).modal("show")},z=()=>{$("#staticBackdrop").modal("show"),o=new Plyr("#player2",{autoplay:!0})},R=()=>{o&&o.destroy()};return G(()=>{o&&o.destroy()}),(d,f)=>(s(),t(g,null,[C(J),P.value?(s(),I(T,{key:0,type:"info",message:"First select a service"})):r("",!0),e("div",it,[w.value.success?(s(),I(T,{key:0,type:"success",message:w.value.success},null,8,["message"])):w.value.info?(s(),I(T,{key:1,type:"info",message:w.value.info},null,8,["message"])):w.value.warning?(s(),I(T,{key:2,type:"warning",message:w.value.warning},null,8,["message"])):w.value.error?(s(),I(T,{key:3,type:"error",message:w.value.error},null,8,["message"])):r("",!0)]),e("section",dt,[e("div",nt,[e("div",rt,[e("div",ut,[e("div",pt,[ht,mt,e("div",vt,[C(u(N),{href:d.route("services"),class:"active"},{default:H(()=>[j("Ready Plans")]),_:1},8,["href"]),C(u(N),{href:d.route("hire_us"),class:""},{default:H(()=>[j("New Project")]),_:1},8,["href"])])])])]),e("div",_t,[e("div",bt,[e("div",gt,[e("div",ft,[yt,e("div",kt,[(s(!0),t(g,null,k(l.products,b=>(s(),t("button",{key:b.id,class:W(["nav-link",{active:b.slug==="academy-lms"}]),id:"v-pills-"+b.slug+"-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-"+b.slug,type:"button",role:"tab","aria-controls":"v-pills-"+b.slug,"aria-selected":"true",onClick:i=>y(b.slug)},[e("div",wt,[b.slug=="academy-lms"?(s(),t("div",Ct,[e("img",{src:d.$page.props.base.url+"/assets/img/icon/academy.svg",alt:""},null,8,xt)])):(s(),t("div",St,[e("img",{src:d.$page.props.base.url+"/assets/img/icon/ekattor8.svg",alt:""},null,8,Ft)])),e("div",It,[e("h5",null,c(b.name),1),Tt])])],10,$t))),128))])]),e("div",Bt,[e("div",qt,[Mt,e("ul",null,[e("li",null,[e("a",Pt,[e("img",{src:d.$page.props.base.url+"/public/assets/img/icon/zendesk-service.svg",alt:""},null,8,jt)])]),e("li",null,[e("a",Et,[e("img",{src:d.$page.props.base.url+"/public/assets/img/icon/whatsapp-service.svg",alt:""},null,8,Lt)])]),e("li",null,[e("a",zt,[e("img",{src:d.$page.props.base.url+"/public/assets/img/icon/telegram-service.svg",alt:""},null,8,Vt)])]),e("li",null,[e("a",At,[e("img",{src:d.$page.props.base.url+"/public/assets/img/icon/messenger-service.svg",alt:""},null,8,Ht)])])])]),e("a",{onClick:z,type:"button","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",class:"w-100"},Wt)])])]),e("div",Ot,[e("div",Ut,[e("div",Dt,[(s(!0),t(g,null,k(l.products,b=>(s(),t("div",{class:W(["tab-pane fade",{"show active":b.slug==="academy-lms"}]),key:b.id,id:"v-pills-{{ product.slug }}",role:"tabpanel","aria-labelledby":"v-pills-{{ product.slug }}-tab",tabindex:"0"},[e("div",Yt,[Zt,(s(!0),t(g,null,k(_.value,(i,B)=>(s(),t("div",{class:"col-lg-4 col-md-6 col-sm-6",key:i.id},[e("div",Rt,[e("div",Qt,[e("h4",null,c(i.name),1),i.name=="Pro"?(s(),t("span",Xt,"Most Popular")):r("",!0),e("a",{onClick:x=>Z("serviceModal"+i.id),"data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Learn More",style:{cursor:"pointer"}},[e("img",{src:d.$page.props.base.url+"/public/assets/img/icon/help.svg",alt:""},null,8,Jt)],8,Gt)]),e("span",null,[j("$"+c(i.discounted_price)+" ",1),e("del",Kt,"$"+c(i.price),1)]),e("ul",ea,[(s(!0),t(g,null,k(i.service_features,(x,V)=>(s(),t("li",{class:"d-flex align-items-center",key:x.id},[B==0||V!=0?(s(),t("svg",sa,aa)):r("",!0),B==0||V!=0?(s(),t("p",oa,c(x.feature),1)):(s(),t("p",la,c(x.feature),1))]))),128))]),C(D,{feature:i,modalId:"exampleModal"+i.id},null,8,["feature","modalId"]),C(at,{feature:i,modalId:"serviceModal"+i.id},null,8,["feature","modalId"])])]))),128))]),p.value.length>0?(s(),t("p",ca,"or, customize your package")):r("",!0),p.value.length>0?(s(),t("div",ia,[da,e("div",na,[ra,e("div",ua,[e("div",pa,[(s(!0),t(g,null,k(p.value,(i,B)=>(s(),t("div",{key:i.id},[B%2===0?(s(),t("div",ha,[e("div",ma,[F(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":f[0]||(f[0]=x=>a.value=x),value:i,id:i.id},null,8,va),[[O,a.value]]),e("label",{class:"form-check-label",for:i.id},c(i.name),9,_a)]),e("span",null,"$"+c(i.price),1)])):r("",!0)]))),128))])]),e("div",ba,[e("div",ga,[(s(!0),t(g,null,k(p.value,(i,B)=>(s(),t("div",{key:i.id},[B%2!==0?(s(),t("div",fa,[e("div",ya,[F(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":f[1]||(f[1]=x=>a.value=x),value:i,id:i.id},null,8,ka),[[O,a.value]]),e("label",{class:"form-check-label",for:i.id},c(i.name),9,$a)]),e("span",null,"$"+c(i.price),1)])):r("",!0)]))),128))])]),e("div",wa,[e("div",Ca,[xa,e("h5",null,"$"+c(h.value.toFixed(2)),1),e("span",null,c(a.value.length)+" Service Selected",1),e("div",{class:"eCheck-price"},[e("button",{onClick:Y,type:"button",class:"buy-btn","data-bs-whatever":"@mdo"},"Buy Now")]),C(vs,{selectedServices:a.value},null,8,["selectedServices"]),C(Bs,{services:p.value},null,8,["services"])])])])])):r("",!0)],2))),128))])]),e("div",Sa,[e("div",Fa,[Ia,e("ul",null,[e("li",null,[e("a",Ta,[e("img",{src:d.$page.props.base.url+"/public/assets/img/icon/zendesk-service.svg",alt:""},null,8,Ba)])]),e("li",null,[e("a",qa,[e("img",{src:d.$page.props.base.url+"/public/assets/img/icon/whatsapp-service.svg",alt:""},null,8,Ma)])]),e("li",null,[e("a",Pa,[e("img",{src:d.$page.props.base.url+"/public/assets/img/icon/telegram-service.svg",alt:""},null,8,ja)])]),e("li",null,[e("a",Ea,[e("img",{src:d.$page.props.base.url+"/public/assets/img/icon/messenger-service.svg",alt:""},null,8,La)])])])]),e("a",{onClick:z,type:"button","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",class:"w-100"},Va)])])])])]),C(ct),e("section",Aa,[e("div",Ha,[Na,e("div",Wa,[e("div",Oa,[e("div",Ua,[e("img",{src:d.$page.props.base.url+"/public/assets/img/product-item/faq-img.png",alt:"..."},null,8,Da)])]),Ya])])]),e("div",{class:"modal service-modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},[e("div",{class:"modal-dialog modal-dialog-centered modal-xl"},[e("div",{class:"modal-content"},[e("div",{class:"modal-header"},[e("button",{onClick:R,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},"x")]),Za])])]),C(K)],64))}};export{Ja as default};