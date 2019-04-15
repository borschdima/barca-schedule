window.addEventListener("load",()=>{const t={method:"GET",headers:new Headers({"X-Auth-Token":"ea701725085f425bb0a74aead24ca524"}),dataType:"json"},e=document.querySelector("header"),a=document.querySelector(".table"),n=document.querySelector(".leagueTable"),s=document.querySelector(".general-info__competition-logo"),o=document.querySelector(".general-info__tour"),i=document.querySelector(".general-info__date"),d=document.querySelector(".main-info__first-team"),c=document.querySelector(".main-info__first-team--logo"),l=document.querySelector(".main-info__time span"),r=document.querySelector(".main-info__second-team--logo"),m=document.querySelector(".main-info__second-team"),u=document.querySelector(".leagueTable .updated");fetch("https://api.football-data.org/v2/teams/81/matches?status=SCHEDULED",t).then(t=>t.json()).then(t=>{const e=t.matches.map(t=>({guests:t.awayTeam.name,owners:t.homeTeam.name,date:t.utcDate,competition:t.competition.name,matchday:t.matchday,stage:t.stage})),n=h(e[0].date);s.src="UEFA Champions League"===e[0].competition?`./img/${e[0].competition} white.png`:`./img/${e[0].competition}.png`,o.textContent=null!=e[0].matchday?`${e[0].matchday} тур`:e[0].stage,i.textContent=`${n.day}/${n.month}/${n.year}`,d.textContent=e[0].owners,c.src=`./img/${e[0].owners}.png`,l.textContent=`${n.hours}:${n.minutes}`,r.src=`./img/${e[0].guests}.png`,m.textContent=e[0].guests;let u=new Date(Date.parse(e[0].date));_(u),e.forEach(t=>{const e=document.createElement("div"),n=h(t.date);e.classList.add("table__item"),e.innerHTML=`\n\t\t\t\t\t<div class="raw">\n\t\t\t\t\t\t<div class="table__item--date text">${n.day}/${n.month}/${n.year}<br><strong>${n.hours}:${n.minutes}</strong></div>\n\t\t\t\t\t\t<div class="table__item--competition text">\n\t\t\t\t\t\t\t<div><img class="table__item--competition-logo" src="./img/${t.competition}.png" alt="competition-logo"/></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class="table__item--teams">\n\t\t\t\t\t\t<div class="teams__owners">\n\t\t\t\t\t\t\t<div class="roots">Хозяева</div>\n\t\t\t\t\t\t\t<div class="teams-names">\n\t\t\t\t\t\t\t\t<span class="teams--label" data-status="owners" data-team="${t.owners}">${t.owners}</span>\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="vs"><span class="red">v</span><span class="blue">s</span></div>\n\t\t\t\t\t\t<div class="teams__guests">\t\t\t\n\t\t\t\t\t\t\t<div class="teams-names">\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span class="teams--label" data-status="guests" data-team="${t.guests}">${t.guests}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="roots">Гости</div>\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t`,a.appendChild(e);const s=document.querySelectorAll(".teams-names span");s[s.length-2].getAttribute("data-team"),s[s.length-2].parentNode.appendChild(g(t.owners)),s[s.length-1].parentNode.insertBefore(g(t.guests),s[s.length-1].parentNode.firstChild)})}).catch(()=>{e.innerHTML="",e.style.height="400px",v(e),v(a)}),fetch("http://api.football-data.org/v2/competitions/2014/standings",t).then(t=>t.json()).then(t=>{const{table:e}=t.standings[0],a=h(t.competition.lastUpdated);u.textContent=`Последнее обновление: ${a.day}/${a.month}/${a.year}`,e.forEach(t=>{const e=document.createElement("div");e.className="leagueTable__row",e.innerHTML=`\n\t\t\t\t\t<div class="hat__position">${t.position}</div>\n\t\t\t\t\t<div class="hat__team">\n\t\t\t\t\t\t<img class="hat__team--logo" src="./img/${t.team.name}.png" alt="${t.team.name} logo"/>\n\t\t\t\t\t\t<div class="hat__team--name">${t.team.name}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="hat__points">${t.points}</div>\n\t\t\t\t\t<div class="hat__matches-count">${t.playedGames}</div>\n\t\t\t\t\t<div class="hat__wins">${t.won}</div>\n\t\t\t\t\t<div class="hat__draws">${t.draw}</div>\n\t\t\t\t\t<div class="hat__loses">${t.lost}</div>\n\t\t\t\t\t<div class="hat__goals-scored">${t.goalsFor}</div>\n\t\t\t\t\t<div class="hat__goals-get">${t.goalsAgainst}</div>\n\t\t\t\t\t<div class="hat__goals-dif">${t.goalDifference}</div>\n\t\t\t\t`,n.appendChild(e)})}).catch(()=>v(n));const g=t=>{const e=document.createElement("img");return e.src=`./img/${t}.png`,e.alt="team-logo",e.classList="team-logo",e},h=t=>{let e=new Date(t),a=e.getFullYear(),n=e.getDate()<10?"0"+e.getDate():e.getDate(),s=e.getMonth()+1;return{year:a,day:n,month:s=s<10?"0"+s:s,hours:e.getHours()<10?"0"+e.getHours():e.getHours(),minutes:e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes()}},_=t=>{const e=document.querySelector(".counter__days--field"),a=document.querySelector(".counter__hours--field"),n=document.querySelector(".counter__minutes--field"),s=document.querySelector(".counter__seconds--field"),o=()=>{let o=p(t);e.innerHTML=o.days,a.innerHTML=("0"+o.hours).slice(-2),n.innerHTML=("0"+o.minutes).slice(-2),s.innerHTML=("0"+o.seconds).slice(-2),o.total<=0&&clearInterval(i)};o();var i=setInterval(o,1e3)},p=t=>{const e=Date.parse(t)-Date.parse(new Date),a=Math.floor(e/1e3%60),n=Math.floor(e/1e3/60%60),s=Math.floor(e/36e5%24);return{total:e,days:Math.floor(e/864e5),hours:s,minutes:n,seconds:a}},v=t=>{const e=document.createElement("div");e.className="error-container",e.textContent="Сервер временно недоступен. Попробуйте зайти на страницу позже...",t.appendChild(e)}});