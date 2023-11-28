import{T as w,h as m,i as h,j as v,o as b,f as y,a as i,b as s,e as x,k as n,v as r,u as e,n as B,w as V,F as k,d as l,l as E,m as F}from"./app-57518ba4.js";import{_ as T,a as C}from"./Footer-98ec2c1a.js";import{_ as c}from"./InputError-4fa15a57.js";const N={class:"container"},U={class:"row"},M={class:"col-md-12"},R={class:"main-form-container d-flex align-items-center justify-content-between"},j={class:"main-form-card"},L=s("div",{class:"form-header"},[s("h1",{class:"title"},"Create Your Account"),s("p",{class:"info"},"We’re a team that Guides Each Other")],-1),S=["onSubmit"],W={class:"d-flex flex-column main-form-wrap"},$={class:"input-wrap"},A=s("label",{for:"name",class:"form-label"},[l("Name"),s("span",null,"*")],-1),D={class:"input-wrap"},I=s("label",{for:"email",class:"form-label"},[l("Email"),s("span",null,"*")],-1),P={class:"input-wrap"},Y=s("label",{for:"password",class:"form-label"},[l("Password"),s("span",null,"*")],-1),z={class:"password-input-wrap"},G=s("div",{class:"toggle-icons"},[s("img",{src:"assets/img/icon/visibility-off.svg",class:"password-icon",toggle:".password-field",alt:""}),s("img",{src:"assets/img/icon/visibility-on.svg",class:"password-icon d-none",toggle:".password-field",alt:""})],-1),H={class:"input-wrap"},O=s("label",{for:"password_confirmation",class:"form-label"},[l("Confirm Password"),s("span",null,"*")],-1),q={class:"password-input-wrap"},J=s("div",{class:"toggle-icons"},[s("img",{src:"assets/img/icon/visibility-off.svg",class:"password-icon",toggle:".password-field",alt:""}),s("img",{src:"assets/img/icon/visibility-on.svg",class:"password-icon d-none",toggle:".password-field",alt:""})],-1),K=s("a",{href:"#",class:"forget"},"Forget your password?",-1),Q=["disabled"],X={class:"form-footer"},Z=s("p",{class:"info"},"Already have an account?",-1),ss=E('<div class="form-advice-wrap"><div class="form-advertise-layout-3 form-advertise-layout d-flex align-items-center justify-content-between"><div class="form-advertise-text"><h1 class="title">Web&#39;s Building Blocks</h1><p class="info">Empower Your Ideas with Free HTML Building Websites, Building Dreams</p><a href="#" class="subs-btn">Try for Free</a></div><div class="form-advertise-img"><img src="assets/img/signup/form-layout-3.png" alt=""></div></div></div>',1),is={__name:"Register",setup(as){const a=w({name:"",email:"",password:"",password_confirmation:"",captcha_token:null}),{executeRecaptcha:p,recaptchaLoaded:f}=m(),d=m().instance;h(()=>{setTimeout(()=>{d.value.showBadge()},1e3)}),v(()=>{d.value.hideBadge()});const u=async()=>{await f(),a.captcha_token=await p("login"),_()},_=()=>{a.post(route("register"),{onFinish:()=>a.reset("password","password_confirmation")})};return(g,o)=>(b(),y(k,null,[i(T),s("section",null,[s("div",N,[s("div",U,[s("div",M,[s("div",R,[s("div",j,[L,s("form",{class:"main-form-area",onSubmit:x(u,["prevent"])},[s("div",W,[s("div",$,[A,n(s("input",{type:"text",class:"form-control",id:"name",placeholder:"username@gmail.com","onUpdate:modelValue":o[0]||(o[0]=t=>e(a).name=t)},null,512),[[r,e(a).name]]),i(c,{class:"mt-2",message:e(a).errors.name},null,8,["message"])]),s("div",D,[I,n(s("input",{type:"email",class:"form-control",id:"email",placeholder:"username@gmail.com","onUpdate:modelValue":o[1]||(o[1]=t=>e(a).email=t)},null,512),[[r,e(a).email]]),i(c,{class:"mt-2",message:e(a).errors.email},null,8,["message"])]),s("div",P,[Y,s("div",z,[n(s("input",{type:"password",class:"form-control password-field",id:"password",placeholder:"Enter password","onUpdate:modelValue":o[2]||(o[2]=t=>e(a).password=t)},null,512),[[r,e(a).password]]),G,i(c,{class:"mt-2",message:e(a).errors.password},null,8,["message"])])]),s("div",H,[O,s("div",q,[n(s("input",{type:"password",class:"form-control password-field",id:"password_confirmation",placeholder:"Enter password","onUpdate:modelValue":o[3]||(o[3]=t=>e(a).password_confirmation=t)},null,512),[[r,e(a).password_confirmation]]),J,i(c,{class:"mt-2",message:e(a).errors.password_confirmation},null,8,["message"])])])]),K,s("button",{type:"submit",class:B(["submit",{"opacity-25":e(a).processing}]),disabled:e(a).processing},"Register",10,Q)],40,S),s("div",X,[Z,i(e(F),{href:g.route("login"),class:"link"},{default:V(()=>[l("Log in")]),_:1},8,["href"])])]),ss])])])])]),i(C)],64))}};export{is as default};
