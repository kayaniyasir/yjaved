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
  const topic=document.querySelector("[data-publication-topic]");
  const type=document.querySelector("[data-publication-type]");
  const year=document.querySelector("[data-publication-year]");
  const reset=document.querySelector("[data-publication-reset]");
  const rows=[...document.querySelectorAll("[data-publication]")];
  const groups=[...document.querySelectorAll("[data-publication-group]")];
  const counter=document.querySelector("[data-publication-count]");
  const empty=document.querySelector("[data-publication-empty]");
  const update=()=>{
   const q=search.value.trim().toLocaleLowerCase();
   const selectedTopic=topic?.value||"";
   const selectedType=type?.value||"";
   const selectedYear=year?.value||"";
   let visible=0;
   for(const row of rows){
    const show=(!q||row.textContent.toLocaleLowerCase().includes(q))
     &&(!selectedTopic||row.dataset.topic===selectedTopic)
     &&(!selectedType||row.dataset.type===selectedType)
     &&(!selectedYear||row.dataset.year===selectedYear);
    row.hidden=!show;
    if(show)visible++;
   }
   for(const group of groups)group.hidden=![...group.querySelectorAll("[data-publication]")].some(row=>!row.hidden);
   if(counter)counter.textContent=visible+" of "+rows.length+" publications shown";
   if(empty)empty.hidden=visible!==0;
   if(reset)reset.hidden=!q&&!selectedTopic&&!selectedType&&!selectedYear;
  };
  for(const ctrl of [search,topic,type,year])ctrl?.addEventListener("input",update);
  reset?.addEventListener("click",e=>{
   e.preventDefault();
   search.value="";
   for(const ctrl of [topic,type,year])if(ctrl)ctrl.value="";
   update();
   search.focus();
  });
  update();
 }
})();
