import{s as d}from"./hoisted.fh8-SZkI.js";const i=document.querySelectorAll("[data-hover-index]"),a=document.querySelectorAll("[data-hover-target]");let o=0;const c=()=>setInterval(()=>{o>=a.length&&(o=0),h(`${o}`),o+=1},5e3);let s=c();const l=[...i],h=t=>{l.filter(e=>e.getAttribute("data-hover-index")===t).forEach(e=>{e.toggleAttribute("data-hovered",!0)}),l.filter(e=>e.getAttribute("data-hover-index")!==t).forEach(e=>{e.toggleAttribute("data-hovered",!1)})},u=t=>{const r=t.target.dataset.hoverTarget;clearInterval(s),h(r),o=Number(r),s=c()};a.forEach(t=>{t.addEventListener("mouseenter",u)});d.on("scroll",t=>{const r=t.currentElements["nephex-hero"],n=t.currentElements["nephex-about"];if(typeof r=="object"){let e=r.progress;r.el.style.rotate=`${(e-.5)*.1}turn`}if(typeof n=="object"){let e=n.progress;n.el.style.rotate=`${(e-.5)*.1}turn`}});
