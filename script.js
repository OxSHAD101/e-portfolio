const programs = ["DBS Wildcard Program", "Moneybox Bug Bounty", "AIA Singapore - Mobile Applications - Bug Bounty Program", "Lalamove - Wild Card - Bug Bounty Program", "Bug Bounty SNCF Connect", "Mon Espace Santé (MES)", "Dossier Medical Partagé Bug Bounty Program", "DataDome Bug Bounty", "Santé Publique France Bug Bounty Program", "[CAG] Changi Airport Group - Changi App (Mobile Application)", "[CAG] Changi Airport Group - iShopChangi", "Louis Vuitton Malletier - Public Bug Bounty Program", "Harman International Lifestyle Products & Services", "Huawei Wearables Bug Bounty Program", "Temasek Corporate Website - Bug Bounty Program", "Temasek Ecosperity Website - Bug Bounty Program", "Temasek Review Website - Bug Bounty Program", "Temasek T50 Website - Bug Bounty Program", "DBS PayLah!", "GRW Trading FZE - Open Bug Bounty Program", "Swapcard", "Paddle.com Public Bug Bounty Program", "OVHcloud", "IMOU Public Bug Bounty Program", "Mediacorp Pte Ltd - Bug Bounty Program", "Maya - Public Bug Bounty Program", "Ooredoo QPSC - Customer Portal Bug Bounty Program", "YesWeHack", "Sogexia", "HARMAN International - Web Applications", "Infomaniak Bug Bounty program", "ExpressVPN - Bug Bounty Program", "ZECIBLE PUBLIC BUG BOUNTY PROGRAM", "Telenor Sweden Public Bug Bounty Program", "DANA Bug Bounty Program", "OTTO.DE Bug Bounty", "Singtel - Main - Bug Bounty Program", "Thüringer Aufbaubank Bug Bounty Program", "Land Transport Authority - Bug Bounty Program", "VINCI SA - Public program", "Bug Bounty Program - BlaBlaCar", "Ezviz - Bug Bounty Program", "VFS Global Bug Bounty Program", "OneDoc", "Pine Labs Bug Bounty Program", "Cryptobox", "Swiss Post", "Kiteworks Public Bug Bounty Program", "YesWeHack Dojo", "FM Logistic - Bug Bounty Program", "DataDome Bot Bounty", "CIMB Bank Singapore - Bug Bounty Program [CIMB Clicks]", "toom Baumarkt GmbH - Webshop", "Coopérative U - Courses U (DEV)", "Swiss Post - E-Voting", "vidaXL Services - Open Bug Bounty Program", "Superbank - Public Bug Bounty Program", "ATG Public Bug Bounty Program", "Programme de prime aux bogues du Gouvernement du Québec", "BookBeat", "3DS OUTSCALE", "Private Internet Access - Bug Bounty Program", "CyberGhost - Bug Bounty Program", "DECATHLON", "Tencent Bug Bounty Program", "Income Bug Bounty Program", "Alasco GmbH - Bug Bounty Program", "FDJ United (Online Betting and Gaming) - Bug Bounty program", "Doctolib", "TeamViewer - Bounty Program", "MediaMarktSaturn Bug Bounty Program"];

const modal = document.getElementById("programModal");
const openBtn = document.getElementById("openPrograms");
const closeBtn = document.getElementById("closePrograms");
const backdrop = document.getElementById("modalBackdrop");
const search = document.getElementById("programSearch");
const list = document.getElementById("programList");
const count = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");

function renderPrograms(query = "") {
  const q = query.trim().toLocaleLowerCase();
  const matches = programs.filter(name => name.toLocaleLowerCase().includes(q));
  list.replaceChildren();
  matches.forEach(name => {
    const item = document.createElement("li");
    item.textContent = name; // Only the program name is displayed.
    list.appendChild(item);
  });
  count.textContent = `${matches.length} ${matches.length === 1 ? "PROGRAM" : "PROGRAMS"}`;
  noResults.hidden = matches.length !== 0;
}

function openModal() {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  search.value = "";
  renderPrograms();
  window.setTimeout(() => search.focus(), 50);
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  openBtn.focus();
}
openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);
search.addEventListener("input", () => renderPrograms(search.value));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
});
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  nav.classList.toggle("show", !expanded);
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("show");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
renderPrograms();
