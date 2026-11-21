/* Ferienhaus Marianne 1.1.5 - user-controlled updates; local guest data never deleted. */
(function(){
"use strict";
var CURRENT_VERSION = "1.1.5", latestVersion = null, registration = null;
var busy = false, lastCheck = 0, banner = null;
var messages = {"de":["Neue Version verfügbar","Jetzt aktualisieren","Aktualisierung läuft …"],"en":["New version available","Update now","Updating …"],"nl":["Nieuwe versie beschikbaar","Nu bijwerken","Bezig met bijwerken …"],"it":["Nuova versione disponibile","Aggiorna ora","Aggiornamento …"],"hr":["Dostupna je nova verzija","Ažuriraj sada","Ažuriranje …"],"cs":["Je dostupná nová verze","Aktualizovat","Aktualizace …"],"fr":["Nouvelle version disponible","Mettre à jour","Mise à jour …"],"pl":["Dostępna nowa wersja","Zaktualizuj teraz","Aktualizowanie …"],"sl":["Na voljo je nova različica","Posodobi zdaj","Posodabljanje …"],"sk":["Je dostupná nová verzia","Aktualizovať","Aktualizácia …"],"hu":["Új verzió érhető el","Frissítés","Frissítés folyamatban …"],"da":["Ny version tilgængelig","Opdater nu","Opdaterer …"],"no":["Ny versjon tilgjengelig","Oppdater nå","Oppdaterer …"],"sv":["Ny version finns","Uppdatera nu","Uppdaterar …"],"fi":["Uusi versio saatavilla","Päivitä nyt","Päivitetään …"],"es":["Nueva versión disponible","Actualizar ahora","Actualizando …"],"bs":["Dostupna je nova verzija","Ažuriraj sada","Ažuriranje …"],"sr":["Dostupna je nova verzija","Ažuriraj sada","Ažuriranje …"],"el":["Διαθέσιμη νέα έκδοση","Ενημέρωση τώρα","Γίνεται ενημέρωση …"],"zh":["有新版本可用","立即更新","正在更新…"],"ja":["新しいバージョンがあります","今すぐ更新","更新中…"],"ko":["새 버전을 사용할 수 있습니다","지금 업데이트","업데이트 중…"]};
function words(){
  var code="de";try {code=JSON.parse(localStorage.getItem("marianne_v1_lang"))||"de"}catch(e){}
  return messages[code] || messages.en;
}
function showNotice(newVersion) {
  latestVersion = newVersion;
  if (!banner) {
    banner=document.createElement("aside");
    banner.id="marianne-update-banner";
    banner.setAttribute("role","status");
    banner.setAttribute("aria-live","polite");
    var title=document.createElement("strong");title.id="marianne-update-title";
    var btn=document.createElement("button");btn.type="button";btn.id="marianne-update-action";
    btn.addEventListener("click",applyUpdate);
    var close=document.createElement("button");close.type="button";close.className="marianne-update-close";
    close.textContent="×";close.setAttribute("aria-label","Close");close.addEventListener("click",function(){banner.hidden=true;});
    banner.appendChild(title);banner.appendChild(btn);banner.appendChild(close);
    document.body.appendChild(banner);
  }
  var w=words();
  banner.querySelector("#marianne-update-title").textContent=w[0] + " ("+newVersion+")";
  banner.querySelector("#marianne-update-action").textContent=w[1];
  banner.hidden=false;
}
async function probeVersion(force) {
  if(!navigator.onLine || document.hidden) return;
  if(!force && Date.now()-lastCheck < 12*60*1000) return;
  lastCheck=Date.now();
  try {
    const r=await fetch("./version.json?check="+Date.now(),{cache:"no-store"});
    if(!r.ok) return;
    const data=await r.json();
    if(typeof data.version!=="string" || !/^\d+\.\d+\.\d+$/.test(data.version))return;
    if(data.version!==CURRENT_VERSION)showNotice(data.version);
  } catch(e) { /* Offline app remains usable */ }
}
async function workerVersion(worker) {
  if(!worker || typeof MessageChannel==="undefined")return null;
  return new Promise(resolve=>{
    var ch=new MessageChannel(),timer=setTimeout(()=>resolve(null),800);
    ch.port1.onmessage=function(ev){clearTimeout(timer);resolve(ev.data && ev.data.version || null);};
    try{worker.postMessage({type:"GET_VERSION"},[ch.port2])}catch(e){clearTimeout(timer);resolve(null);}
  });
}
async function applyUpdate() {
  if(busy)return;busy=true;
  var button=document.getElementById("marianne-update-action");
  if(button){button.disabled=true;button.textContent=words()[2];}
  try {
    if("serviceWorker" in navigator) {
      var reg=registration || await navigator.serviceWorker.getRegistration("./");
      if(!reg)reg=await navigator.serviceWorker.register("./sw.js",{updateViaCache:"none"});
      await reg.update();
      if(reg.waiting)reg.waiting.postMessage({type:"SKIP_WAITING"});
      // Confirm the target worker has activated before requesting the new app.
      for(var i=0;i<15;i++){
        if(await workerVersion(reg.active)===latestVersion)break;
        await new Promise(res=>setTimeout(res,450));
      }
    }
  }catch(e){ /* Network fallback follows */ }
  window.location.replace("./?updated="+encodeURIComponent(latestVersion||CURRENT_VERSION)+"&t="+Date.now());
}
function start() {
  if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js",{updateViaCache:"none"}).then(function(reg){
      registration=reg;reg.update().catch(function(){});
    }).catch(function(){});
  }
  probeVersion(true);
  document.addEventListener("visibilitychange",function(){if(!document.hidden)probeVersion(true);});
  window.addEventListener("focus",function(){probeVersion(false);});
  window.addEventListener("online",function(){probeVersion(true);});
  setInterval(function(){probeVersion(false);},15*60*1000);
}
window.MARIANNE_START_UPDATES = start;
})();
