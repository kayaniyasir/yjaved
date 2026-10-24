/* Full-detail navigation for the academic portfolio, desktop and mobile. */
(()=>{"use strict";
 const header=document.querySelector(".portfolio-header");
 if(!header)return;
 const menu=header.querySelector("#portfolio-main-nav");
 const toggle=header.querySelector(".portfolio-menu-toggle");
 const groups=[...header.querySelectorAll(".portfolio-nav-group")];
 const isMobile=()=>matchMedia("(max-width: 1060px)").matches;
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

 // Short, natural navigation prompts on the homepage.
 // Keep section IDs, destinations and content structure unchanged.
 if(name==="index.html"){
  const headings={
   "visitor-guide":"Explore my work",
   "research-impact":"Research and recognition",
   "about":"My background",
   "selected-impact":"Selected work",
   "expertise":"Areas of expertise",
   "projects":"Projects",
   "contact":"Get in touch"
  };
  Object.entries(headings).forEach(([id,label])=>{
   const heading=document.querySelector("#"+id+" h2");
   if(heading)heading.textContent=label;
  });
  const visitor=document.querySelector("#visitor-guide");
  const intro=visitor?.querySelector(".lede");
  if(intro)intro.textContent="Find my research, projects, teaching resources and ways to work together.";
  const prompt=visitor?.querySelector(".guided > strong");
  if(prompt)prompt.textContent="Choose a topic";
  const options={
   organization:"Work together",
   research:"Research",
   education:"Teaching & training",
   student:"Student support",
   community:"ACM & events"
  };
  visitor?.querySelectorAll("[data-intent]").forEach(button=>{
   const label=options[button.dataset.intent];
   if(label)button.textContent=label;
  });
 }
 const current=groupMap[name];
 if(current)header.querySelector('.portfolio-nav-group[data-group="'+current+'"]')?.classList.add("current");
})();
