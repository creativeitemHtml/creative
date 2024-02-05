import{Q as q,s as x,T as j,o as s,f as t,b as e,c as F,g as u,e as W,l as S,v as M,u as p,t as l,F as f,m as E,q as Z,y as k,a as w,x as z,j as R,w as A,d as P,p as V,n as H,E as N}from"./app-9ceb6126.js";import{_ as Q,a as X}from"./Footer-1041e9c0.js";import{_ as I}from"./CustomeToast-92abc6b7.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";const J=["data-bs-target"],K=["data-bs-target"],ee=["id"],se={class:"modal-dialog modal-dialog-centered modal-xl"},te={class:"modal-content"},ae=e("div",{class:"modal-header"},[e("h1",{class:"modal-title"},"Checkout"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),oe={class:"modal-body"},le=["onSubmit"],ce={class:"row justify-content-center"},ie={class:"col-lg-6 col-md-12"},de=e("h1",{class:"modal-title pb-3"},"Billing Address",-1),ne={key:0,class:"cFormInput-wrap"},re={key:1,class:"cForm-wrap"},ue={class:"cFormInput-wrap"},pe={key:2,class:"cForm-wrap"},he={class:"cFormInput-wrap"},me={key:3,class:"eCheckbox eCheckbox-2 d-flex flex-column g-20 pt-11"},ve=e("div",{class:"form-check"},[e("input",{class:"form-check-input",type:"checkbox",value:"",id:"createAccount",checked:"",disabled:""}),e("label",{class:"form-check-label",for:"createAccount"},"Create an account")],-1),_e=[ve],be=e("div",{class:"col-lg-2 col-md-12"},null,-1),ge={class:"col-lg-4 col-md-12"},fe=e("h1",{class:"modal-title pb-3"},"Order Summary",-1),ye={class:"mr-25 bd-all bd-r-10"},ke={class:"eCheckbox planCheck-wrap"},$e={class:"nav flex-column nav-pills planCheck",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},we={class:"form-check check-custom"},Ce={class:"row"},xe={class:"col-9"},Se={class:"eForm-label cus-label",for:"flexCheckBasic"},Fe={class:"col-3 cus-label text-end"},Ie={class:"mr-25 py-20 d-flex justify-content-between align-items-center flex-wrap g-10"},Te=e("h4",{class:"fz-18-sb-black"},"Total",-1),qe={class:"fz-18-sb-black",id:"selected-package-price"},Me=E('<div class="pb-20 mr-25"><div class="content"><div class="cForm-wrap"><button type="submit" class="checkout-order-btn">Complete order</button></div></div></div><div class="elitem-allFile mb-10"><img src="https://creativeitem.com/public/assets/img/icon/lock.svg" alt=""><p>Secure Checkout</p></div>',2),O={__name:"ServiceCheckout",props:{feature:Object,modalId:String,isModal:Boolean},setup(o){const _=o,b=q().props.auth.user,h=x(!1),a=j({name:b?b.name:"",email:b?b.email:""}),n=()=>{a.email!=""?(a.post(route("purchase_service_package",{service_id:_.feature.id})),$("#"+_.modalId).modal("hide")):(h.value=!1,setTimeout(()=>{h.value=!0},100))};return(i,m)=>(s(),t(f,null,[o.isModal==!0?(s(),t("button",{key:0,type:"button",class:"ciBtn ciBtn-primary ms-2","data-bs-toggle":"modal","data-bs-target":"#"+o.modalId,"data-bs-dismiss":"modal","data-bs-whatever":"@mdo"},"Buy Now",8,J)):(s(),t("button",{key:1,type:"button",class:"buy-btn","data-bs-toggle":"modal","data-bs-target":"#"+o.modalId,"data-bs-whatever":"@mdo"},"Buy Now",8,K)),e("div",{id:o.modalId,class:"modal fade",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[h.value?(s(),F(I,{key:0,type:"info",message:"Please provide a email address"})):u("",!0),e("div",se,[e("div",te,[ae,e("div",oe,[e("form",{onSubmit:W(n,["prevent"])},[e("div",ce,[e("div",ie,[de,i.$page.props.auth.user?(s(),t("div",ne,[S(e("input",{type:"text",class:"form-control eForm-control checkout",id:"name",name:"name","onUpdate:modelValue":m[0]||(m[0]=v=>p(a).name=v),disabled:""},null,512),[[M,p(a).name]])])):u("",!0),i.$page.props.auth.user?(s(),t("div",re,[e("div",ue,[S(e("input",{type:"email",class:"form-control eForm-control checkout",id:"email",name:"email","onUpdate:modelValue":m[1]||(m[1]=v=>p(a).email=v),disabled:""},null,512),[[M,p(a).email]])])])):u("",!0),i.$page.props.auth.user?u("",!0):(s(),t("div",pe,[e("div",he,[S(e("input",{type:"email",class:"form-control eForm-control checkout",id:"email",name:"email",placeholder:"Your Email","aria-label":"Your Email","onUpdate:modelValue":m[2]||(m[2]=v=>p(a).email=v)},null,512),[[M,p(a).email]])])])),i.$page.props.auth.user?u("",!0):(s(),t("div",me,_e))]),be,e("div",ge,[fe,e("div",ye,[e("div",ke,[e("div",$e,[e("div",we,[e("div",Ce,[e("div",xe,[e("label",Se,l(o.feature.name),1)]),e("div",Fe,[e("p",null,"$"+l(o.feature.discounted_price),1)])])])])])]),e("div",Ie,[Te,e("h4",qe," $"+l(o.feature.discounted_price),1)]),Me])])],40,le)])])])],8,ee)],64))}},Be={class:"modal fade",id:"customCheckoutModal",tabindex:"-1","aria-labelledby":"customCheckoutModalLabel","aria-hidden":"true"},Pe={class:"modal-dialog modal-dialog-centered modal-xl"},je={class:"modal-content"},Ee=e("div",{class:"modal-header"},[e("h1",{class:"modal-title"},"Checkout"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Le={class:"modal-body"},ze=["onSubmit"],Ae={class:"row justify-content-center"},Ve={class:"col-lg-6 col-md-12"},He=e("h1",{class:"modal-title pb-3"},"Billing Address",-1),Ne={key:0,class:"cFormInput-wrap"},We={key:1,class:"cForm-wrap"},Oe={class:"cFormInput-wrap"},Ue={key:2,class:"cForm-wrap"},De={class:"cFormInput-wrap"},Ye={key:3,class:"eCheckbox eCheckbox-2 d-flex flex-column g-20 pt-11"},Ze=e("div",{class:"form-check"},[e("input",{class:"form-check-input",type:"checkbox",value:"",id:"createAccount",checked:"",disabled:""}),e("label",{class:"form-check-label",for:"createAccount"},"Create an account")],-1),Re=[Ze],Qe=e("div",{class:"col-lg-2 col-md-12"},null,-1),Xe={class:"col-lg-4 col-md-12"},Ge=e("h1",{class:"modal-title pb-3"},"Order Summary",-1),Je={class:"mr-25 bd-all bd-r-10"},Ke={class:"eCheckbox planCheck-wrap"},es={class:"nav flex-column nav-pills planCheck",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},ss={class:"form-check check-custom"},ts={class:"col-9"},as={class:"eForm-label cus-label",for:"flexCheckBasic"},os={class:"col-3 cus-label text-end"},ls={class:"mr-25 py-20 d-flex justify-content-between align-items-center flex-wrap g-10"},cs=e("h4",{class:"fz-18-sb-black"},"Total",-1),is={class:"fz-18-sb-black",id:"selected-package-price"},ds=e("div",{class:"pb-20 mr-25"},[e("div",{class:"content"},[e("div",{class:"cForm-wrap"},[e("button",{type:"submit",class:"checkout-order-btn"},"Complete order")])])],-1),ns={class:"elitem-allFile mb-10"},rs=["src"],us=e("p",null,"Secure Checkout",-1),ps={__name:"ServiceCustomCheckout",props:{selectedServices:Array},setup(o){const _=q().props.auth.user,b=x(!1),h=o,a=j({name:_?_.name:"",email:_?_.email:"",selectedServices:""}),n=()=>{a.email!=""?(a.selectedServices=h.selectedServices,a.post(route("purchase_custom_service")),$("#customCheckoutModal").modal("hide")):(b.value=!1,setTimeout(()=>{b.value=!0},100))},i=Z(()=>h.selectedServices.reduce((m,v)=>m+parseFloat(v.price),0));return(m,v)=>(s(),t("div",Be,[b.value?(s(),F(I,{key:0,type:"info",message:"Please provide a email address"})):u("",!0),e("div",Pe,[e("div",je,[Ee,e("div",Le,[e("form",{onSubmit:W(n,["prevent"])},[e("div",Ae,[e("div",Ve,[He,m.$page.props.auth.user?(s(),t("div",Ne,[S(e("input",{type:"text",class:"form-control eForm-control checkout",id:"name",name:"name","onUpdate:modelValue":v[0]||(v[0]=r=>p(a).name=r),disabled:""},null,512),[[M,p(a).name]])])):u("",!0),m.$page.props.auth.user?(s(),t("div",We,[e("div",Oe,[S(e("input",{type:"email",class:"form-control eForm-control checkout",id:"email",name:"email","onUpdate:modelValue":v[1]||(v[1]=r=>p(a).email=r),disabled:""},null,512),[[M,p(a).email]])])])):u("",!0),m.$page.props.auth.user?u("",!0):(s(),t("div",Ue,[e("div",De,[S(e("input",{type:"email",class:"form-control eForm-control checkout",id:"email",name:"email",placeholder:"Your Email","aria-label":"Your Email","onUpdate:modelValue":v[2]||(v[2]=r=>p(a).email=r)},null,512),[[M,p(a).email]])])])),m.$page.props.auth.user?u("",!0):(s(),t("div",Ye,Re))]),Qe,e("div",Xe,[Ge,e("div",Je,[e("div",Ke,[e("div",es,[e("div",ss,[(s(!0),t(f,null,k(o.selectedServices,r=>(s(),t("div",{class:"row",key:r.id},[e("div",ts,[e("label",as,l(r.name),1)]),e("div",os,[e("p",null,"$"+l(r.price),1)])]))),128))])])])]),e("div",ls,[cs,e("h4",is," $"+l(i.value),1)]),ds,e("div",ns,[e("img",{src:m.$page.props.base.url+"/public/assets/img/icon/shield-security.svg",alt:""},null,8,rs),us])])])],40,ze)])])])]))}},hs=e("div",{class:"d-flex justify-content-center"},[e("button",{type:"button",class:"need-text","data-bs-toggle":"modal","data-bs-target":"#serviceHelp","data-bs-whatever":"@mdo"},"Learn More")],-1),ms={class:"modal fade",id:"serviceHelp",tabindex:"-1","aria-labelledby":"serviceHelpLabel","aria-hidden":"true"},vs={class:"modal-dialog modal-xl"},_s={class:"modal-content"},bs=e("div",{class:"modal-header"},[e("h1",{class:"modal-title"},"Custom Services :"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),gs={class:"modal-body"},fs=e("div",{class:"row justify-content-center"},[e("h2",{class:"service-help-txt"},"Service Details")],-1),ys={class:"row justify-content-center"},ks={class:"col-lg-6 col-md-12"},$s={class:"service-help-header"},ws={class:"service-help-body"},Cs={class:"col-lg-6 col-md-12"},xs={class:"service-help-header"},Ss={class:"service-help-body"},Fs={__name:"ServiceHelpModal",props:{services:Array},setup(o){const _=o,b=_.services.filter((a,n)=>n%2===1),h=_.services.filter((a,n)=>n%2===0);return(a,n)=>(s(),t(f,null,[hs,e("div",ms,[e("div",vs,[e("div",_s,[bs,e("div",gs,[fs,e("div",ys,[e("div",ks,[(s(!0),t(f,null,k(p(h),i=>(s(),t("div",{class:"service-help-item",key:i.id},[e("h2",$s,l(i.name),1),e("div",ws,l(i.note),1)]))),128))]),e("div",Cs,[(s(!0),t(f,null,k(p(b),i=>(s(),t("div",{class:"service-help-item",key:i.id},[e("h2",xs,l(i.name),1),e("div",Ss,l(i.note),1)]))),128))])])])])])])],64))}},Is={class:"d-flex justify-content-center"},Ts=["data-bs-target"],qs=["id"],Ms={class:"modal-dialog modal-xl"},Bs={class:"modal-content"},Ps={class:"modal-header pe-0"},js={class:"row justify-content-between w-100"},Es={class:"col-lg-9 col-12"},Ls={class:"d-flex align-items-center"},zs={class:"modal-title"},As={key:0,class:"model-title-value mb-0"},Vs={key:1,class:"model-title-value mb-0"},Hs={key:2,class:"model-title-value mb-0"},Ns={class:"col-lg-3 col-12"},Ws={class:"bar-controls d-flex text-sm-center align-items-center justify-content-end p-0 ps-4"},Os={class:"modal-title"},Us=e("button",{type:"button",class:"btn-close m-0","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Ds={class:"modal-body"},Ys=e("div",{class:"row justify-content-center"},[e("h2",{class:"service-help-txt"},"Service Details")],-1),Zs={class:"row justify-content-center"},Rs={class:"col-lg-6 col-md-12"},Qs={class:"service-help-header"},Xs={class:"service-help-body"},Gs={class:"col-lg-6 col-md-12"},Js={class:"service-help-header"},Ks={class:"service-help-body"},et={__name:"ServicePackageHelpModal",props:{feature:Array,modalId:String},setup(o){const _=o,b=_.feature.service_features.filter((a,n)=>n%2===1),h=_.feature.service_features.filter((a,n)=>n%2===0);return(a,n)=>(s(),t(f,null,[e("div",Is,[e("button",{type:"button",class:"need-text","data-bs-toggle":"modal","data-bs-target":"#"+o.modalId,"data-bs-whatever":"@mdo"},"Learn More",8,Ts)]),e("div",{id:o.modalId,class:"modal fade",tabindex:"-1","aria-labelledby":"serviceHelpLabel","aria-hidden":"true"},[e("div",Ms,[e("div",Bs,[e("div",Ps,[e("div",js,[e("div",Es,[e("div",Ls,[e("h1",zs,l(o.feature.name)+" Package :",1),o.feature.name=="Pro"?(s(),t("span",As," Included Basic Packages")):o.feature.name=="Business"?(s(),t("span",Vs," Included Professional & Business Packages")):(s(),t("span",Hs))])]),e("div",Ns,[e("div",Ws,[e("h1",Os,"$"+l(o.feature.discounted_price),1),w(O,{feature:o.feature,isModal:!0,modalId:"exampleModal"+o.feature.id},null,8,["feature","modalId"]),Us])])])]),e("div",Ds,[Ys,e("div",Zs,[e("div",Rs,[(s(!0),t(f,null,k(p(h),i=>(s(),t("div",{class:"service-help-item",key:i},[e("h2",Qs,l(i.feature),1),e("div",Xs,l(i.note),1)]))),128))]),e("div",Gs,[(s(!0),t(f,null,k(p(b),i=>(s(),t("div",{class:"service-help-item",key:i},[e("h2",Js,l(i.feature),1),e("div",Ks,l(i.note),1)]))),128))])])])])])],8,qs)],64))}},st={};function tt(o,_){return null}const at=G(st,[["render",tt]]),ot={class:"absolute top-8 right-10 z-10"},lt={class:"eService pt-30"},ct={class:"container"},it={class:"row justify-content-center"},dt={class:"col-lg-12"},nt={class:"text-center pb-60"},rt=e("h2",{class:"fz-34-sb-black pb-15"},"Ready Services For Your Website",-1),ut=e("p",{class:"fz-16-m-black-2"},"Select any package or choose from our services to meet your needs. ",-1),pt={class:"btn-control justify-content-center align-items-center d-flex"},ht={class:"row"},mt={class:"col-lg-3 col-md-3"},vt={class:"tab-left"},_t={class:"Etop"},bt=e("h4",null,"Select a Product",-1),gt={class:"nav flex-column nav-pills me-3",id:"v-pills-tab",role:"tablist","aria-orientation":"vertical"},ft=["id","data-bs-target","aria-controls","onClick"],yt={class:"eNav d-flex"},kt={key:0,class:"image"},$t=["src"],wt={key:1,class:"image"},Ct=["src"],xt={class:"motion"},St=e("span",null,"3 Package",-1),Ft={class:"large-show"},It={class:"support"},Tt=e("h4",null,"Contact For Support",-1),qt={href:"http://support.creativeitem.com/",target:"_blank","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Zendesk"},Mt=["src"],Bt={href:"https://wa.link/izd8dl",target:"_blank","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Whatsapp"},Pt=["src"],jt={href:"https://t.me/creativeitem_elements",target:"_blank","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Telegram"},Et=["src"],Lt={href:"https://m.me/creativeitemApps",target:"_blank","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Messenger"},zt=["src"],At=e("a",{type:"button","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",class:"w-100"},[e("div",{class:"support video-sup d-flex align-items-center"},[e("span",null,[e("svg",{width:"17",height:"20",viewBox:"0 0 17 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M3.77781 20C2.77645 19.9957 1.81729 19.5627 1.10956 18.7956C0.401841 18.0285 0.00298422 16.9894 0 15.9051V4.09073C1.68461e-05 3.37265 0.174588 2.66722 0.506167 2.04535C0.837746 1.42348 1.31465 0.907075 1.88895 0.548042C2.46325 0.189008 3.1147 -4.56059e-06 3.77784 0C4.44097 4.56076e-06 5.09243 0.189027 5.66672 0.548068L15.1113 6.45524C15.6855 6.8143 16.1624 7.33071 16.4939 7.95257C16.8255 8.57444 17 9.27985 17 9.9979C17 10.716 16.8255 11.4214 16.4939 12.0432C16.1624 12.6651 15.6855 13.1815 15.1113 13.5406L5.66672 19.4477C5.09294 19.8086 4.44136 19.9991 3.77781 20Z",fill:"white"})])]),e("h4",null,"How it Works!")])],-1),Vt={class:"col-lg-9 col-md-9"},Ht={class:"tab-right"},Nt={class:"tab-content",id:"v-pills-tabContent"},Wt={class:"row"},Ot=e("p",{class:"package-title"},"Select a Package",-1),Ut={class:"package-plan"},Dt={class:"most d-flex"},Yt={key:0},Zt=["onClick"],Rt=["src"],Qt={class:"del_text"},Xt={class:"plan"},Gt={key:0,width:"17",height:"13",viewBox:"0 0 17 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Jt=e("path",{d:"M6.79844 13C6.49844 13 6.29844 12.9 6.09844 12.7L1.19844 7.49997C0.798438 7.09997 0.798438 6.49997 1.19844 6.09997C1.59844 5.69997 2.19844 5.69997 2.59844 6.09997L6.69844 10.5L15.0984 1.29997C15.3984 0.899971 16.0984 0.79997 16.4984 1.09997C16.8984 1.39997 16.9984 2.09997 16.6984 2.49997L16.5984 2.59997L7.49844 12.6C7.39844 12.9 7.09844 13 6.79844 13Z",fill:"#02BC7D"},null,-1),Kt=[Jt],ea={key:1},sa={key:2,class:"service-feature"},ta={key:0,class:"package-title mt-3"},aa={key:1,class:"eg_row"},oa=e("p",{class:"epack ml-65"},"Service List:",-1),la={class:"row"},ca=e("div",{class:"col-lg-1"},null,-1),ia={class:"col-lg-4 col-md-6 col-sm-6 right-border"},da={class:"eCheck"},na={key:0,class:"single-eCheck d-flex justify-content-between align-items-center"},ra={class:"form-check"},ua=["value","id"],pa=["for"],ha={class:"col-lg-4 col-md-6 col-sm-6 right-border"},ma={class:"eCheck"},va={key:0,class:"single-eCheck d-flex justify-content-between align-items-center"},_a={class:"form-check"},ba=["value","id"],ga=["for"],fa={class:"col-lg-3 col-md-12 d-flex align-items-center"},ya={class:"eCheck eCheck-price"},ka=e("p",null,"Total Amount",-1),$a={class:"small-show tab-left"},wa={class:"support"},Ca=e("h4",null,"Contact For Support",-1),xa={href:"http://support.creativeitem.com/",target:"_blank","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Zendesk"},Sa=["src"],Fa={href:"https://wa.link/izd8dl",target:"_blank","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Whatsapp"},Ia=["src"],Ta={href:"https://t.me/creativeitem_elements",target:"_blank","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Telegram"},qa=["src"],Ma={href:"https://m.me/creativeitemApps",target:"_blank","data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Messenger"},Ba=["src"],Pa=e("a",{type:"button","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop",class:"w-100"},[e("div",{class:"support video-sup d-flex align-items-center"},[e("span",null,[e("svg",{width:"17",height:"20",viewBox:"0 0 17 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M3.77781 20C2.77645 19.9957 1.81729 19.5627 1.10956 18.7956C0.401841 18.0285 0.00298422 16.9894 0 15.9051V4.09073C1.68461e-05 3.37265 0.174588 2.66722 0.506167 2.04535C0.837746 1.42348 1.31465 0.907075 1.88895 0.548042C2.46325 0.189008 3.1147 -4.56059e-06 3.77784 0C4.44097 4.56076e-06 5.09243 0.189027 5.66672 0.548068L15.1113 6.45524C15.6855 6.8143 16.1624 7.33071 16.4939 7.95257C16.8255 8.57444 17 9.27985 17 9.9979C17 10.716 16.8255 11.4214 16.4939 12.0432C16.1624 12.6651 15.6855 13.1815 15.1113 13.5406L5.66672 19.4477C5.09294 19.8086 4.44136 19.9991 3.77781 20Z",fill:"white"})])]),e("h4",null,"How it Works!")])],-1),ja={class:"faq"},Ea={class:"container"},La=E('<div class="row justify-content-center"><div class="col-lg-12"><div class="text-center pb-60"><h2 class="fz-34-sb-black pb-15">Faqs</h2><p class="fz-16-m-black-2">Here are some helpful answers to your common questions and queries regarding our services</p></div></div></div>',1),za={class:"row justify-content-center"},Aa={class:"col-lg-3 col-md-12"},Va={class:"faq-img"},Ha=["src"],Na=E('<div class="col-lg-9 col-md-12"><div class="faq-wraps"><div class="accordion" id="accordionExample"><div class="accordion-item"><h2 class="accordion-header" id="headingOne"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">What is a service?</button></h2><div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"><div class="accordion-body">Services are a task list that we will do dedicatedly to build your website. We will take all the technical liabilities to build the website from scratch and make your life easier. Services are categorized in several packages according to your needs &amp; purposes. Also, you can choose specific service(s) if you don&#39;t require a complete package.</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">What services will I get in the Pro package?</button></h2><div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"><div class="accordion-body">In the &quot;Pro package&quot;, you will get the services listed above along with the features from the &quot;Basic package&quot;.</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">What services will I get in the Business package?</button></h2><div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"><div class="accordion-body">In the &quot;Business package&quot;, you will get the services listed above along with the features from the both &quot;Basic package&quot; &amp; &quot;Pro package&quot;.</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingFour"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">How can I purchase a service package?</button></h2><div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample"><div class="accordion-body">To purchase one of our service packages, simply choose the package that suits your needs and click on the &quot;buy now&quot; button. Once you&#39;ve completed the payment, the selected package will be yours, and our team will initiate the service process. It&#39;s that simple!</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingFive"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">How can I choose specific services without purchasing any packages?</button></h2><div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample"><div class="accordion-body">You have the flexibility to select specific services from our pre-defined service list, and you will only be charged for those particular services. This allows you to tailor your experience based on your specific requirements.</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingSix"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">How long will the packages be valid?</button></h2><div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample"><div class="accordion-body">The package will be valid for 3 months from the date of purchase. During this period, you can avail the services included in the package. Please note that each package is offered for one-time use.</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingSeven"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">How will I get the support?</button></h2><div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample"><div class="accordion-body">We have a reliable and dedicated tech support team ready to assist you. If you encounter any issues, feel free to reach out to us through our Zendesk, email, or Telegram support channels. Your concerns are our priority, and we&#39;ll be there to help promptly.</div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingEight"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">What if my required features are not available on your service list?</button></h2><div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample"><div class="accordion-body">If you don&#39;t find your required feature in our service list, simply click on the &quot;New Project&quot; tab and provide details about your specific requirements. We&#39;ll create a customized quotation for you and send it to your email for further consideration.</div></div></div></div></div></div>',1),Wa={class:"modal service-modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"},Oa={class:"modal-dialog modal-dialog-centered modal-xl"},Ua={class:"modal-content"},Da={class:"modal-body"},Ya={class:"plyr__video-embed",id:"player2"},Za=["src"],Ja={__name:"Service",props:{seo:Object,products:Array},setup(o){const _=q(),b=x([]),h=x([]),a=o,n=x([]),i=x(0);j({selectedServices:[]});const m=()=>{i.value=n.value.reduce((d,y)=>d+parseFloat(y.price),0),console.log("Selected Services:",n)};z(n,m);const v=async d=>{try{const y=await fetch(`${_.props.base.url}/api/product_wise_packages/${d}`);if(y.ok){const g=await y.json();g.status==="success"?(b.value=g.data,h.value=g.services):console.error("API request failed")}else console.error("Network response was not ok")}catch(y){console.error("Error fetching data:",y)}},r=x(q().props.flash);z(()=>q().props.flash,d=>{r.value=d}),R(()=>{v("academy-lms"),m(),$(document).prop("title",a.seo.meta_title),$("meta[name='description']").attr("content",a.seo.meta_description),$("meta[name='keywords']").attr("content",a.seo.meta_keywords),$("meta[name='robot']").attr("content",a.seo.meta_robot),$("link[rel='canonical']").attr("href",a.seo.canonical_url),$("link[rel='custom']").attr("href",a.seo.custom_url),$("meta[property='og:title']").attr("content",a.seo.og_title),$("meta[property='og:description']").attr("content",a.seo.og_description),$("meta[property='og:image']").attr("content",a.seo.og_image),setTimeout(function(){var d=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));d.map(function(y){return new bootstrap.Tooltip(y)})},3e3),r.value=q().props.flash});const U=()=>{new Plyr("#player2").destroy()},B=x(!1),D=()=>{B.value=!1,n.value.length>0?$("#customCheckoutModal").modal("show"):setTimeout(()=>{B.value=!0},100)},Y=d=>{$("#"+d).modal("show")};return(d,y)=>(s(),t(f,null,[w(Q),B.value?(s(),F(I,{key:0,type:"info",message:"First select a service"})):u("",!0),e("div",ot,[r.value.success?(s(),F(I,{key:0,type:"success",message:r.value.success},null,8,["message"])):r.value.info?(s(),F(I,{key:1,type:"info",message:r.value.info},null,8,["message"])):r.value.warning?(s(),F(I,{key:2,type:"warning",message:r.value.warning},null,8,["message"])):r.value.error?(s(),F(I,{key:3,type:"error",message:r.value.error},null,8,["message"])):u("",!0)]),e("section",lt,[e("div",ct,[e("div",it,[e("div",dt,[e("div",nt,[rt,ut,e("div",pt,[w(p(V),{href:d.route("services"),class:"active"},{default:A(()=>[P("Ready Plans")]),_:1},8,["href"]),w(p(V),{href:d.route("hire_us"),class:""},{default:A(()=>[P("New Project")]),_:1},8,["href"])])])])]),e("div",ht,[e("div",mt,[e("div",vt,[e("div",_t,[bt,e("div",gt,[(s(!0),t(f,null,k(o.products,g=>(s(),t("button",{key:g.id,class:H(["nav-link",{active:g.slug==="academy-lms"}]),id:"v-pills-"+g.slug+"-tab","data-bs-toggle":"pill","data-bs-target":"#v-pills-"+g.slug,type:"button",role:"tab","aria-controls":"v-pills-"+g.slug,"aria-selected":"true",onClick:c=>v(g.slug)},[e("div",yt,[g.slug=="academy-lms"?(s(),t("div",kt,[e("img",{src:d.$page.props.base.url+"/assets/img/icon/academy.svg",alt:""},null,8,$t)])):(s(),t("div",wt,[e("img",{src:d.$page.props.base.url+"/assets/img/icon/ekattor8.svg",alt:""},null,8,Ct)])),e("div",xt,[e("h5",null,l(g.name),1),St])])],10,ft))),128))])]),e("div",Ft,[e("div",It,[Tt,e("ul",null,[e("li",null,[e("a",qt,[e("img",{src:d.$page.props.base.url+"/public/assets/img/icon/zendesk-service.svg",alt:""},null,8,Mt)])]),e("li",null,[e("a",Bt,[e("img",{src:d.$page.props.base.url+"/public/assets/img/icon/whatsapp-service.svg",alt:""},null,8,Pt)])]),e("li",null,[e("a",jt,[e("img",{src:d.$page.props.base.url+"/public/assets/img/icon/telegram-service.svg",alt:""},null,8,Et)])]),e("li",null,[e("a",Lt,[e("img",{src:d.$page.props.base.url+"/public/assets/img/icon/messenger-service.svg",alt:""},null,8,zt)])])])]),At])])]),e("div",Vt,[e("div",Ht,[e("div",Nt,[(s(!0),t(f,null,k(o.products,g=>(s(),t("div",{class:H(["tab-pane fade",{"show active":g.slug==="academy-lms"}]),key:g.id,id:"v-pills-{{ product.slug }}",role:"tabpanel","aria-labelledby":"v-pills-{{ product.slug }}-tab",tabindex:"0"},[e("div",Wt,[Ot,(s(!0),t(f,null,k(b.value,(c,T)=>(s(),t("div",{class:"col-lg-4 col-md-6 col-sm-6",key:c.id},[e("div",Ut,[e("div",Dt,[e("h4",null,l(c.name),1),c.name=="Pro"?(s(),t("span",Yt,"Most Popular")):u("",!0),e("a",{onClick:C=>Y("serviceModal"+c.id),"data-bs-toggle":"tooltip","data-bs-placement":"bottom",title:"Learn More",style:{cursor:"pointer"}},[e("img",{src:d.$page.props.base.url+"/public/assets/img/icon/help.svg",alt:""},null,8,Rt)],8,Zt)]),e("span",null,[P("$"+l(c.discounted_price)+" ",1),e("del",Qt,"$"+l(c.price),1)]),e("ul",Xt,[(s(!0),t(f,null,k(c.service_features,(C,L)=>(s(),t("li",{class:"d-flex align-items-center",key:C.id},[T==0||L!=0?(s(),t("svg",Gt,Kt)):u("",!0),T==0||L!=0?(s(),t("p",ea,l(C.feature),1)):(s(),t("p",sa,l(C.feature),1))]))),128))]),w(O,{feature:c,modalId:"exampleModal"+c.id},null,8,["feature","modalId"]),w(et,{feature:c,modalId:"serviceModal"+c.id},null,8,["feature","modalId"])])]))),128))]),h.value.length>0?(s(),t("p",ta,"or, customize your package")):u("",!0),h.value.length>0?(s(),t("div",aa,[oa,e("div",la,[ca,e("div",ia,[e("div",da,[(s(!0),t(f,null,k(h.value,(c,T)=>(s(),t("div",{key:c.id},[T%2===0?(s(),t("div",na,[e("div",ra,[S(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":y[0]||(y[0]=C=>n.value=C),value:c,id:c.id},null,8,ua),[[N,n.value]]),e("label",{class:"form-check-label",for:c.id},l(c.name),9,pa)]),e("span",null,"$"+l(c.price),1)])):u("",!0)]))),128))])]),e("div",ha,[e("div",ma,[(s(!0),t(f,null,k(h.value,(c,T)=>(s(),t("div",{key:c.id},[T%2!==0?(s(),t("div",va,[e("div",_a,[S(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":y[1]||(y[1]=C=>n.value=C),value:c,id:c.id},null,8,ba),[[N,n.value]]),e("label",{class:"form-check-label",for:c.id},l(c.name),9,ga)]),e("span",null,"$"+l(c.price),1)])):u("",!0)]))),128))])]),e("div",fa,[e("div",ya,[ka,e("h5",null,"$"+l(i.value.toFixed(2)),1),e("span",null,l(n.value.length)+" Service Selected",1),e("div",{class:"eCheck-price"},[e("button",{onClick:D,type:"button",class:"buy-btn","data-bs-whatever":"@mdo"},"Buy Now")]),w(ps,{selectedServices:n.value},null,8,["selectedServices"]),w(Fs,{services:h.value},null,8,["services"])])])])])):u("",!0)],2))),128))])]),e("div",$a,[e("div",wa,[Ca,e("ul",null,[e("li",null,[e("a",xa,[e("img",{src:d.$page.props.base.url+"/public/assets/img/icon/zendesk-service.svg",alt:""},null,8,Sa)])]),e("li",null,[e("a",Fa,[e("img",{src:d.$page.props.base.url+"/public/assets/img/icon/whatsapp-service.svg",alt:""},null,8,Ia)])]),e("li",null,[e("a",Ta,[e("img",{src:d.$page.props.base.url+"/public/assets/img/icon/telegram-service.svg",alt:""},null,8,qa)])]),e("li",null,[e("a",Ma,[e("img",{src:d.$page.props.base.url+"/public/assets/img/icon/messenger-service.svg",alt:""},null,8,Ba)])])])]),Pa])])])])]),w(at),e("section",ja,[e("div",Ea,[La,e("div",za,[e("div",Aa,[e("div",Va,[e("img",{src:d.$page.props.base.url+"/public/assets/img/product-item/faq-img.png",alt:"..."},null,8,Ha)])]),Na])])]),e("div",Wa,[e("div",Oa,[e("div",Ua,[e("div",{class:"modal-header"},[e("button",{onClick:U,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},"x")]),e("div",Da,[e("div",Ya,[e("iframe",{src:"https://www.youtube.com/embed/XZePsCuSOtU?origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1",allowfullscreen:"",allowtransparency:"",allow:"autoplay"},null,8,Za)])])])])]),w(X)],64))}};export{Ja as default};
