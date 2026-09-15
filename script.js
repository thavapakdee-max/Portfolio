document.addEventListener("DOMContentLoaded",()=>{
  const items=document.querySelectorAll(".reveal");
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.08});
  items.forEach(x=>io.observe(x));
  const b=document.querySelector(".top-btn");
  if(b){window.addEventListener("scroll",()=>b.classList.toggle("show",scrollY>500));b.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}))}
});