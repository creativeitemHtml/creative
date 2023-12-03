import{T as B,h as m,i as E,j as S,o as l,f as p,a as o,t as V,g as u,b as s,e as C,k as f,v as _,u as t,c as N,w as g,n as U,F as j,d as r,l as A,m as h}from"./app-7da9a1fc.js";import{_ as F,a as P}from"./Footer-e9408a76.js";import{_ as v}from"./InputError-0c617923.js";const R={key:0,class:"mb-4 font-medium text-sm text-green-600"},T={class:"container"},D={class:"row"},I={class:"col-md-12"},L={class:"main-form-container d-flex align-items-center justify-content-between"},M={class:"main-form-card"},O=s("div",{class:"form-header"},[s("h1",{class:"title"},"Welcome Back!"),s("p",{class:"info"},"We’re a team that Guides Each Other")],-1),W=["onSubmit"],z={class:"d-flex flex-column main-form-wrap"},G={class:"input-wrap"},Y=s("label",{for:"email",class:"form-label"},[r("Email"),s("span",null,"*")],-1),q={class:"input-wrap"},H=s("label",{for:"password",class:"form-label"},[r("Password"),s("span",null,"*")],-1),J={class:"password-input-wrap"},K=s("div",{class:"toggle-icons"},[s("img",{src:"assets/img/icon/visibility-off.svg",class:"password-icon",toggle:".password-field",alt:""}),s("img",{src:"assets/img/icon/visibility-on.svg",class:"password-icon d-none",toggle:".password-field",alt:""})],-1),Q=["disabled"],X={class:"form-footer"},Z=s("p",{class:"info"},"Don’t have an account?",-1),ss=A('<div class="form-advice-wrap"><div class="form-advertise-layout-2 form-advertise-layout d-flex align-items-center justify-content-between"><div class="form-advertise-text"><h1 class="title">Access to Endless <span class="blue-text">Creative Elements</span></h1><p class="info">Unleash Your Imagination with Unlimited Access to Premium Assets via Elements Subscription.</p><a href="#" class="subs-btn">Subscription</a></div><div class="form-advertise-img"><img src="assets/img/signup/form-layout-2.png" alt=""></div></div></div>',1),os={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String},seo:Object},setup(i){const a=i,e=B({email:"",password:"",remember:!1,captcha_token:null}),{executeRecaptcha:w,recaptchaLoaded:b}=m(),d=m().instance;E(()=>{setTimeout(()=>{d.value.showBadge()},1e3),$(document).prop("title",a.seo.meta_title),$("meta[name='description']").attr("content",a.seo.meta_description),$("meta[name='keywords']").attr("content",a.seo.meta_keywords),$("meta[name='robot']").attr("content",a.seo.meta_robot),$("link[rel='canonical']").attr("href",a.seo.canonical_url),$("link[rel='custom']").attr("href",a.seo.custom_url),$("meta[property='og:title']").attr("content",a.seo.og_title),$("meta[property='og:description']").attr("content",a.seo.og_description),$("meta[property='og:image']").attr("content",a.seo.og_image)}),S(()=>{d.value.hideBadge()});const y=async()=>{await b(),e.captcha_token=await w("login"),k()},k=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(x,n)=>(l(),p(j,null,[o(F),i.status?(l(),p("div",R,V(i.status),1)):u("",!0),s("section",null,[s("div",T,[s("div",D,[s("div",I,[s("div",L,[s("div",M,[O,s("form",{class:"main-form-area",onSubmit:C(y,["prevent"])},[s("div",z,[s("div",G,[Y,f(s("input",{type:"email",class:"form-control",id:"email",placeholder:"username@gmail.com","onUpdate:modelValue":n[0]||(n[0]=c=>t(e).email=c)},null,512),[[_,t(e).email]]),o(v,{class:"mt-2",message:t(e).errors.email},null,8,["message"])]),s("div",q,[H,s("div",J,[f(s("input",{type:"password",class:"form-control password-field",id:"password",placeholder:"Enter password","onUpdate:modelValue":n[1]||(n[1]=c=>t(e).password=c)},null,512),[[_,t(e).password]]),K,o(v,{class:"mt-2",message:t(e).errors.password},null,8,["message"])])])]),i.canResetPassword?(l(),N(t(h),{key:0,href:"#",class:"forget"},{default:g(()=>[r("Forget your password?")]),_:1})):u("",!0),s("button",{type:"submit",class:U(["submit",{"opacity-25":t(e).processing}]),disabled:t(e).processing},"Log In",10,Q)],40,W),s("div",X,[Z,o(t(h),{href:x.route("register"),class:"link"},{default:g(()=>[r("Create an Account")]),_:1},8,["href"])])]),ss])])])])]),o(P)],64))}};export{os as default};
