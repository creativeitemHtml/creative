import{Q as f,T as g,x as v,o as r,f as n,a as l,b as s,g as p,e as y,k as c,v as m,u as e,t as w,d as b,F as k,l as C}from"./app-448f8667.js";import{_ as S,a as F}from"./Footer-87d18bdf.js";import{_ as V}from"./LmsHeader-f9a07743.js";const j={class:"position-relative pt-80 mb-110"},N={class:"container"},x={class:"row align-items-center"},$={class:"col-lg-7"},D={class:"hire-us-content"},M=C('<h1 class="title"><span>Hire Us</span><br> for your project. </h1><p class="sub-title">Turn Your Vision Into Reality With Our Custom Projects</p><p class="info">Our experience is at your service, committed to creating customized projects and designs that effortlessly blend with your vision and needs. So contact us now to get a quotation!.</p><ul class="hire-info"><li class="item"><h4>24k+</h4><p>Client Serve</p></li><li class="item"><h4>12+</h4><p>Years Experience</p></li><li class="item"><h4>98%</h4><p>Customer Satisfaction</p></li></ul>',4),T={key:0,class:"buttons d-flex align-items-center"},U={key:0,class:"col-lg-5"},Y={class:"submit-project"},B=s("h4",{class:"title"},"Get Started With LMS",-1),E=["onSubmit"],I={class:"project-form-wrap"},O={class:"pForm-wrap"},z={class:"pForm-wrap"},L={class:"pForm-wrap"},W={class:"pForm-wrap"},q={type:"submit",class:"project-submit"},A=["src"],R={__name:"Demo",setup(G){f();const o=g({company_lms:"",email:"",password:"",company_lms_lower:""}),d=v("https://creativeitem.com/"),u=()=>{o.company_lms_lower=o.company_lms.replace(/[^a-zA-Z0-9]+/g,"-").toLowerCase()},_=()=>{o.post(route("lms.register_company_lms"),{onFinish:()=>o.reset("password")})},h=()=>{document.cookie="userhash=user-abc-4500;domain=.creativeitem.com",console.log(document.cookie)};return(i,t)=>(r(),n(k,null,[l(S),l(V),s("section",j,[s("div",N,[s("div",x,[s("div",$,[s("div",D,[M,i.$page.props.auth.user?(r(),n("div",T,[s("a",{href:"https://demo.creativeitem.com/website/cookie",target:"_blank",class:"bookMeeting",onClick:h},"Onbording Stage")])):p("",!0)])]),i.$page.props.auth.user?p("",!0):(r(),n("div",U,[s("div",Y,[B,s("form",{class:"project-form",onSubmit:y(_,["prevent"])},[s("div",I,[s("div",O,[c(s("input",{type:"text",class:"form-control eForm-control",id:"company_lms",name:"company_lms",placeholder:"Your Company Name","aria-label":"Your Company Name","onUpdate:modelValue":t[0]||(t[0]=a=>e(o).company_lms=a),onInput:u},null,544),[[m,e(o).company_lms]])]),s("div",z,[c(s("input",{type:"email",class:"form-control eForm-control",id:"email",placeholder:"username@gmail.com","onUpdate:modelValue":t[1]||(t[1]=a=>e(o).email=a)},null,512),[[m,e(o).email]])]),s("div",L,[c(s("input",{type:"password",class:"form-control eForm-control",id:"password",placeholder:"Enter password","onUpdate:modelValue":t[2]||(t[2]=a=>e(o).password=a)},null,512),[[m,e(o).password]])]),s("div",W," Domain: "+w(d.value+e(o).company_lms_lower),1)]),s("button",q,[b(" Submit "),s("img",{src:i.$page.props.base.url+"/public/assets/img/icon/right-white-arrow.svg",alt:""},null,8,A)])],40,E)])]))])])]),l(F)],64))}};export{R as default};
