import{T as E,h as u,i as S,j as V,o as r,f,a as o,c as _,g as d,t as C,b as s,e as N,k as g,v as h,u as t,w as v,n as U,F as j,d as c,l as A,m as w}from"./app-771075df.js";import{_ as F,a as P}from"./Footer-da08db80.js";import{_ as b}from"./InputError-8d13201a.js";import{_ as R}from"./Toast-8a7ee155.js";const T={key:1,class:"mb-4 font-medium text-sm text-green-600"},D={class:"container"},I={class:"row"},L={class:"col-md-12"},M={class:"main-form-container d-flex align-items-center justify-content-between"},O={class:"main-form-card"},W=s("div",{class:"form-header"},[s("h1",{class:"title"},"Welcome Back!"),s("p",{class:"info"},"We’re a team that Guides Each Other")],-1),z=["onSubmit"],G={class:"d-flex flex-column main-form-wrap"},Y={class:"input-wrap"},q=s("label",{for:"email",class:"form-label"},[c("Email"),s("span",null,"*")],-1),H={class:"input-wrap"},J=s("label",{for:"password",class:"form-label"},[c("Password"),s("span",null,"*")],-1),K={class:"password-input-wrap"},Q=s("div",{class:"toggle-icons"},[s("img",{src:"assets/img/icon/visibility-off.svg",class:"password-icon",toggle:".password-field",alt:""}),s("img",{src:"assets/img/icon/visibility-on.svg",class:"password-icon d-none",toggle:".password-field",alt:""})],-1),X=["disabled"],Z={class:"form-footer"},ss=s("p",{class:"info"},"Don’t have an account?",-1),es=A('<div class="form-advice-wrap"><div class="form-advertise-layout-2 form-advertise-layout d-flex align-items-center justify-content-between"><div class="form-advertise-text"><h1 class="title">Access to Endless <span class="blue-text">Creative Elements</span></h1><p class="info">Unleash Your Imagination with Unlimited Access to Premium Assets via Elements Subscription.</p><a href="#" class="subs-btn">Subscription</a></div><div class="form-advertise-img"><img src="assets/img/signup/form-layout-2.png" alt=""></div></div></div>',1),ns={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String},seo:Object},setup(i){const a=i,e=E({email:"",password:"",remember:!1,captcha_token:null}),{executeRecaptcha:y,recaptchaLoaded:k}=u(),m=u().instance;S(()=>{setTimeout(()=>{m.value.showBadge()},1e3),$(document).prop("title",a.seo.meta_title),$("meta[name='description']").attr("content",a.seo.meta_description),$("meta[name='keywords']").attr("content",a.seo.meta_keywords),$("meta[name='robot']").attr("content",a.seo.meta_robot),$("link[rel='canonical']").attr("href",a.seo.canonical_url),$("link[rel='custom']").attr("href",a.seo.custom_url),$("meta[property='og:title']").attr("content",a.seo.og_title),$("meta[property='og:description']").attr("content",a.seo.og_description),$("meta[property='og:image']").attr("content",a.seo.og_image)}),V(()=>{m.value.hideBadge()});const x=async()=>{await k(),e.captcha_token=await y("login"),B()},B=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(p,n)=>(r(),f(j,null,[o(F),p.$page.props.flash?(r(),_(R,{key:0})):d("",!0),i.status?(r(),f("div",T,C(i.status),1)):d("",!0),s("section",null,[s("div",D,[s("div",I,[s("div",L,[s("div",M,[s("div",O,[W,s("form",{class:"main-form-area",onSubmit:N(x,["prevent"])},[s("div",G,[s("div",Y,[q,g(s("input",{type:"email",class:"form-control",id:"email",placeholder:"username@gmail.com","onUpdate:modelValue":n[0]||(n[0]=l=>t(e).email=l)},null,512),[[h,t(e).email]]),o(b,{class:"mt-2",message:t(e).errors.email},null,8,["message"])]),s("div",H,[J,s("div",K,[g(s("input",{type:"password",class:"form-control password-field",id:"password",placeholder:"Enter password","onUpdate:modelValue":n[1]||(n[1]=l=>t(e).password=l)},null,512),[[h,t(e).password]]),Q,o(b,{class:"mt-2",message:t(e).errors.password},null,8,["message"])])])]),i.canResetPassword?(r(),_(t(w),{key:0,href:"#",class:"forget"},{default:v(()=>[c("Forget your password?")]),_:1})):d("",!0),s("button",{type:"submit",class:U(["submit",{"opacity-25":t(e).processing}]),disabled:t(e).processing},"Log In",10,X)],40,z),s("div",Z,[ss,o(t(w),{href:p.route("register"),class:"link"},{default:v(()=>[c("Create an Account")]),_:1},8,["href"])])]),es])])])])]),o(P)],64))}};export{ns as default};