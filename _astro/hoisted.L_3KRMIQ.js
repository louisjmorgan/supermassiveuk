import{s as l}from"./hoisted.t67DGztn.js";const u=document.querySelectorAll("[data-hover-index]"),c=document.querySelectorAll("[data-hover-target]");let o=0;const d=()=>setInterval(()=>{o>=c.length&&(o=0),i(`${o}`),o+=1},5e3);let s=d();const a=[...u],i=e=>{a.filter(t=>t.getAttribute("data-hover-index")===e).forEach(t=>{t.toggleAttribute("data-hovered",!0)}),a.filter(t=>t.getAttribute("data-hover-index")!==e).forEach(t=>{t.toggleAttribute("data-hovered",!1)})},h=e=>{const r=e.target.dataset.hoverTarget;clearInterval(s),i(r),o=Number(r),s=d()};c.forEach(e=>{e.addEventListener("mouseenter",h)});l.on("scroll",e=>{const r=e.currentElements["nephex-hero"],n=e.currentElements["nephex-about"];if(typeof r=="object"){let t=r.progress;r.el.style.rotate=`${(t-.5)*.1}turn`}if(typeof n=="object"){let t=n.progress;n.el.style.rotate=`${(t-.5)*.1}turn`}});document.addEventListener("DOMContentLoaded",function(){function e(){setTimeout(function(){l.update()},500)}e()});
