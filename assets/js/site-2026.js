/* Small, dependency-free interactions. The content works without JavaScript. */
(()=>{"use strict";
 const head=document.querySelector(".site-header"), menu=head?.querySelector(".site-nav"), toggle=head?.querySelector(".menu-toggle");
 if(head&&menu&&toggle){
  const groups=[...menu.querySelectorAll("details.nav-group")];
  const mobile=()=>matchMedia("(max-width: 1150px)").matches;
  const closeGroups=(keep)=>groups.forEach(g=>{if(g!==keep)g.open=false});
  const setOpen=(open)=>{head.classList.toggle("menu-open",open);toggle.setAttribute("aria-expanded",String(open));toggle.setAttribute("aria-label",open?"Close menu":"Open menu");toggle.querySelector(".menu-label").textContent=open?"Close":"Menu";if(!open)closeGroups()};
  toggle.addEventListener("click",()=>setOpen(!head.classList.contains("menu-open")));
  groups.forEach(g=>g.addEventListener("toggle",()=>{if(g.open)closeGroups(g)}));
  document.addEventListener("pointerdown",e=>{if(!head.contains(e.target)){closeGroups();if(mobile())setOpen(false)}});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"){const wasOpen=head.classList.contains("menu-open")||groups.some(g=>g.open);closeGroups();if(mobile())setOpen(false);if(wasOpen)toggle.focus()}});
  menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{if(mobile())setOpen(false);else closeGroups()}));
  window.addEventListener("resize",()=>{if(!mobile()&&head.classList.contains("menu-open"))setOpen(false)});
  const current=(location.pathname.split("/").pop()||"index.html");
  menu.querySelectorAll("a[href]").forEach(a=>{const file=a.getAttribute("href").split("#")[0];if(file===current)a.setAttribute("aria-current","page")});
  groups.forEach(g=>{if(g.querySelector('a[aria-current="page"]'))g.setAttribute("data-active","true")});
 }
 document.querySelectorAll("[data-current-year]").forEach(el=>el.textContent=String(new Date().getFullYear()));
 document.querySelectorAll("[data-print-cv]").forEach(button=>button.addEventListener("click",()=>window.print()));
 const search=document.querySelector("[data-publication-search]");
 if(search){
  const records=[...document.querySelectorAll("[data-publication]")];
  const counter=document.querySelector("[data-publication-count]");
  const empty=document.querySelector("[data-publication-empty]");
  const update=()=>{const needle=search.value.trim().toLowerCase();let visible=0;for(const el of records){const show=!needle||el.textContent.toLowerCase().includes(needle);el.hidden=!show;if(show)visible++}if(counter)counter.textContent=visible+" publications shown";if(empty)empty.hidden=visible!==0};
  search.addEventListener("input",update);update();
 }
})();
