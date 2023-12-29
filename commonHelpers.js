import{f as p,i as u}from"./assets/vendor-651d7991.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a=document.querySelector("#datetime-picker"),c=document.querySelector("[data-start]"),y=document.querySelector("[data-days]"),h=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]"),b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(r){const o=r[0],n=o.getTime()-new Date().getTime();l(n),o<new Date?(u.error({position:"topRight",message:"Please choose a date in the future"}),c.setAttribute("disabled",!0)):(c.removeAttribute("disabled"),d=o)}};p(a,b);let d=null;c.addEventListener("click",()=>{const r=d.getTime();a.value="",a.setAttribute("disabled",!0),c.setAttribute("disabled",!0);const o=setInterval(()=>{const n=Date.now();let i=r-n;const e=l(i);i<=0?(u.info({position:"topRight",message:"Time is up"}),clearInterval(o)):(y.textContent=`${e.days}`,h.textContent=`${e.hours}`,g.textContent=`${e.minutes}`,S.textContent=`${e.seconds}`)},1e3)});function l(r){const t=Math.floor(r/864e5).toString().padStart(2,"0"),s=Math.floor(r%864e5/36e5).toString().padStart(2,"0"),m=Math.floor(r%864e5%36e5/6e4).toString().padStart(2,"0"),f=Math.floor(r%864e5%36e5%6e4/1e3).toString().padStart(2,"0");return{days:t,hours:s,minutes:m,seconds:f}}
//# sourceMappingURL=commonHelpers.js.map
