import{a as m,_ as u}from"./Footer-98ec2c1a.js";import{i as p,o as a,f as n,a as c,b as t,F as r,q as _,l as d,w as f,s as l,t as h,u as g,m as b}from"./app-57518ba4.js";const y=d('<section class="hero-banner pt-40"><div class="container"><div class="hero-banner-wrap text-center"><h1 class="fz-60-b-black fz-sm-40-sb-black pb-20"> Search Documentation </h1><p class="fz-18-m-black-2 w-lg-50 mx-auto px-lg-4 pb-50"> Here you&#39;ll find all the information you need to get started with our products, including installation, user guides, tutorials, troubleshooting, FAQs, and more. </p></div></div></section>',1),v={class:"documentation-item pb-120"},k={class:"container"},w={class:"row justify-content-center"},x=["src"],z={class:"content"},C={class:"doc-item-name"},S=t("p",{class:"doc-item-article"},"15 Articles",-1),A=d('<section class="contact-section pb-120"><div class="container"><div class="contact-one-wrap d-flex justify-content-between align-items-center flex-wrap g-20"><div class="content"><h2 class="fz-44-eb-black fz-sm-30-sb-black pb-20"> Still need any help? </h2><p class="fz-16-m-black"> Whether you have a question, need assistance with a product, or are experiencing technical difficulties, our team of experts is ready to assist you. </p></div><a href="" class="btn-main btn-contact-one">Contact Us</a></div></div></section>',1),F={__name:"Documentation",props:{products:Array,element_categories:Array,seo:Object},setup(s){const e=s;return p(()=>{$(document).prop("title",e.seo.meta_title),$("meta[name='description']").attr("content",e.seo.meta_description),$("meta[name='keywords']").attr("content",e.seo.meta_keywords),$("meta[name='robot']").attr("content",e.seo.meta_robot),$("link[rel='canonical']").attr("href",e.seo.canonical_url),$("link[rel='custom']").attr("href",e.seo.custom_url),$("meta[property='og:title']").attr("content",e.seo.og_title),$("meta[property='og:description']").attr("content",e.seo.og_description),$("meta[property='og:image']").attr("content",e.seo.og_image)}),(i,j)=>(a(),n(r,null,[c(u),y,t("section",v,[t("div",k,[t("div",w,[(a(!0),n(r,null,_(s.products,o=>(a(),n("div",{key:o.id,class:"col-lg-3 col-md-4 col-sm-6"},[c(g(b),{href:i.route("documentation_details",{product_slug:o.slug}),class:"doc-item",style:l({borderColor:o.color_code})},{default:f(()=>[t("div",{style:l({backgroundColor:o.color_code+"20"}),class:"doc-item-icon"},[t("img",{src:`${i.$page.props.base.url}/uploads/favicons/products/${o.favicon||"favicon.png"}`,alt:""},null,8,x)],4),t("div",z,[t("div",C,h(o.name),1),S])]),_:2},1032,["href","style"])]))),128))])])]),A,c(m,{elementCategories:s.element_categories},null,8,["elementCategories"])],64))}};export{F as default};
