import{Q as g,T as v,x as w,o as n,f as r,a as l,b as o,g as p,e as y,k as c,v as m,u as e,t as b,d as k,F as C,l as S}from"./app-4b8c077a.js";import{_ as F,a as V}from"./Footer-cc4e0862.js";import{_ as j}from"./LmsHeader-1fdca4ca.js";const N={class:"position-relative pt-80 mb-110"},x={class:"container"},$={class:"row align-items-center"},D={class:"col-lg-7"},M={class:"hire-us-content"},T=S('<h1 class="title"><span>Hire Us</span><br> for your project. </h1><p class="sub-title">Turn Your Vision Into Reality With Our Custom Projects</p><p class="info">Our experience is at your service, committed to creating customized projects and designs that effortlessly blend with your vision and needs. So contact us now to get a quotation!.</p><ul class="hire-info"><li class="item"><h4>24k+</h4><p>Client Serve</p></li><li class="item"><h4>12+</h4><p>Years Experience</p></li><li class="item"><h4>98%</h4><p>Customer Satisfaction</p></li></ul>',4),U={key:0,class:"buttons d-flex align-items-center"},Y={key:0,class:"col-lg-5"},B={class:"submit-project"},E=o("h4",{class:"title"},"Get Started With LMS",-1),I=["onSubmit"],O={class:"project-form-wrap"},z={class:"pForm-wrap"},L={class:"pForm-wrap"},W={class:"pForm-wrap"},q={class:"pForm-wrap"},A={type:"submit",class:"project-submit"},G=["src"],Z={__name:"Demo",setup(H){const d=g(),s=v({company_lms:"",email:"",password:"",company_lms_lower:""}),u=w("https://creativeitem.com/"),_=()=>{s.company_lms_lower=s.company_lms.replace(/[^a-zA-Z0-9]+/g,"-").toLowerCase()},h=()=>{s.post(route("lms.register_company_lms"),{onFinish:()=>s.reset("password")})},f=()=>{document.cookie="vue_token="+d.props.auth.auth_token+";domain=.creativeitem.com/website",console.log(document.cookie)};return(i,t)=>(n(),r(C,null,[l(F),l(j),o("section",N,[o("div",x,[o("div",$,[o("div",D,[o("div",M,[T,i.$page.props.auth.user?(n(),r("div",U,[o("a",{href:"https://demo.creativeitem.com/website/cookie",target:"_blank",class:"bookMeeting",onClick:f},"Onbording Stage")])):p("",!0)])]),i.$page.props.auth.user?p("",!0):(n(),r("div",Y,[o("div",B,[E,o("form",{class:"project-form",onSubmit:y(h,["prevent"])},[o("div",O,[o("div",z,[c(o("input",{type:"text",class:"form-control eForm-control",id:"company_lms",name:"company_lms",placeholder:"Your Company Name","aria-label":"Your Company Name","onUpdate:modelValue":t[0]||(t[0]=a=>e(s).company_lms=a),onInput:_},null,544),[[m,e(s).company_lms]])]),o("div",L,[c(o("input",{type:"email",class:"form-control eForm-control",id:"email",placeholder:"username@gmail.com","onUpdate:modelValue":t[1]||(t[1]=a=>e(s).email=a)},null,512),[[m,e(s).email]])]),o("div",W,[c(o("input",{type:"password",class:"form-control eForm-control",id:"password",placeholder:"Enter password","onUpdate:modelValue":t[2]||(t[2]=a=>e(s).password=a)},null,512),[[m,e(s).password]])]),o("div",q," Domain: "+b(u.value+e(s).company_lms_lower),1)]),o("button",A,[k(" Submit "),o("img",{src:i.$page.props.base.url+"/public/assets/img/icon/right-white-arrow.svg",alt:""},null,8,G)])],40,I)])]))])])]),l(V)],64))}};export{Z as default};