import{Q as t,x as i}from"./app-63dab8cb.js";const f={__name:"Toast",props:{type:String,message:String},setup(a){const r={autoClose:2e3,closeOnClick:!0,type:"default"},s=t().props.flash,e=(n,o)=>{r.type=n,i(o,r)};return s.success&&e("success",s.success),s.error&&e("error",s.error),s.info&&e("info",s.info),s.warning&&e("warning",s.warning),s.message&&e(s.type,s.message),(n,o)=>null}};export{f as _};