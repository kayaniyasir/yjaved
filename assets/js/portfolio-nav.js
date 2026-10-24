/* Full-detail navigation for the academic portfolio, desktop and mobile. */
(()=>{"use strict";
 const header=document.querySelector(".portfolio-header");
 if(!header)return;
 const menu=header.querySelector("#portfolio-main-nav");
 const toggle=header.querySelector(".portfolio-menu-toggle");
 const groups=[...header.querySelectorAll(".portfolio-nav-group")];
 const isMobile=()=>matchMedia("(max-width: 1130px)").matches;
 const shut=(except)=>groups.forEach(group=>{if(group!==except)group.open=false});
 const change=(open)=>{
  header.classList.toggle("menu-open",open);
  toggle.setAttribute("aria-expanded",String(open));
  toggle.setAttribute("aria-label",open?"Close navigation menu":"Open navigation menu");
  toggle.querySelector(".portfolio-menu-label").textContent=open?"Close":"Menu";
  if(!open)shut();
 };
 toggle.addEventListener("click",()=>change(!header.classList.contains("menu-open")));
 groups.forEach(g=>g.addEventListener("toggle",()=>{if(g.open)shut(g)}));
 document.addEventListener("pointerdown",e=>{
  if(!header.contains(e.target)){shut();if(isMobile())change(false)}
 });
 document.addEventListener("keydown",e=>{
  if(e.key!=="Escape")return;
  const hadOpen=header.classList.contains("menu-open")||groups.some(g=>g.open);
  if(!hadOpen)return;
  shut();if(isMobile()){change(false);toggle.focus();}
 });
 menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{if(isMobile())change(false);else shut()}));
 window.addEventListener("resize",()=>{if(!isMobile()&&header.classList.contains("menu-open"))change(false)});
 const name=location.pathname.split("/").pop()||"index.html";
 const groupMap={
  "about.html":"about","research.html":"research","publications.html":"research",
  "research-achievements.html":"research","services.html":"expertise",
  "projects.html":"projects","java.html":"teaching","java-ksa.html":"teaching",
  "achievements.html":"leadership"
 };
 menu.querySelectorAll("a[data-page]").forEach(a=>{if(a.dataset.page===name)a.setAttribute("aria-current","page")});

 const current=groupMap[name];
 if(current)header.querySelector('.portfolio-nav-group[data-group="'+current+'"]')?.classList.add("current");
})();
