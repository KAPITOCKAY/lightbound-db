// Конструктор билда: подкласс, 3 пушки, 5 частей брони → итоговые статы по формулам игры. Билд целиком живёт в ссылке #/build/<код>.
const UB = {
  ru: {build: "Билд", sub: "Подкласс", super: "Супер", grenade: "Граната", melee: "Удар", class: "Классовая способность", movement: "Уклон",
    asp: "Аспекты", aspHint: "Выберите 2. Аспект даёт слоты фрагментов (число на иконке).", frag: "Фрагменты", fragHint: n => `Слотов: ${n}. Фрагменты меняют статы (+/− на иконке).`,
    weapons: "Оружие", armor: "Броня", kinetic: "Кинетическое", energy: "Энергетическое", power: "Тяжёлое", pick: "— выбрать —",
    typ: "Тип (случайная легендарка)", named: "Именные стволы", exo: "Экзотики", generic: "Обычная броня", setL: "Сет", group: "Группа статов",
    total: (s, a, b) => `Сумма ${s} (бывает ${a}–${b})`, over: "больше, чем бывает в игре", mod: "Мод", noMod: "без мода", energyL: n => `энергия ${n}`,
    stats: "Статы", tier: "Тир", derived: "Что дают статы", copy: "Скопировать ссылку", copied: "Ссылка скопирована", reset: "Сбросить",
    oneEx: "В игре можно надеть только 1 экзотическое оружие и 1 экзотическую броню — предыдущий экзотик снят.",
    intro: "Соберите билд: подкласс, оружие и броню. Статы и откаты считаются по формулам из кода игры. Весь билд хранится в ссылке — скопируйте её и отправьте другу.",
    moveSpeed: "Скорость бега", dodgeCd: "Откат уклона", dr: "Снижение урона", shield: "Щит", hp: "Здоровье", regenDelay: "Щит начинает восстанавливаться через", regenRate: "Скорость восстановления щита",
    grenadeCd: "Откат гранаты", meleeCd: "Откат удара", classCd: "Откат классовой", superTime: "Зарядка супера (без убийств)", s: "с", sets: "Бонусы сетов", fx: "Эффекты модов", dps: "Урон/сек с перезарядкой",
    unlock: "Как открыть", rank: n => `ранг ${n}`, wisps: n => `найти ${n} мёртвых виспов`, quest: "квест", event: "событие", zone: "регион", undercroft: "подземелье", start: "есть с начала",
    rarity: "Редкость"},
  en: {build: "Build", sub: "Subclass", super: "Super", grenade: "Grenade", melee: "Melee", class: "Class ability", movement: "Movement",
    asp: "Aspects", aspHint: "Pick 2. Each aspect gives fragment slots (number on the icon).", frag: "Fragments", fragHint: n => `Slots: ${n}. Fragments change stats (+/− on the icon).`,
    weapons: "Weapons", armor: "Armor", kinetic: "Kinetic", energy: "Energy", power: "Power", pick: "— choose —",
    typ: "Type (random legendary)", named: "Named weapons", exo: "Exotics", generic: "Regular armor", setL: "Set", group: "Stat group",
    total: (s, a, b) => `Total ${s} (rolls ${a}–${b})`, over: "higher than the game can roll", mod: "Mod", noMod: "no mod", energyL: n => `energy ${n}`,
    stats: "Stats", tier: "Tier", derived: "What your stats do", copy: "Copy link", copied: "Link copied", reset: "Reset",
    oneEx: "The game allows only 1 exotic weapon and 1 exotic armor piece — the previous exotic was removed.",
    intro: "Put a build together: subclass, weapons and armor. Stats and cooldowns use the formulas from the game's code. The whole build lives in the link — copy it and send it to a friend.",
    moveSpeed: "Move speed", dodgeCd: "Dodge cooldown", dr: "Damage reduction", shield: "Shield", hp: "Health", regenDelay: "Shield starts recharging after", regenRate: "Shield recharge rate",
    grenadeCd: "Grenade cooldown", meleeCd: "Melee cooldown", classCd: "Class ability cooldown", superTime: "Super charge (no kills)", s: "s", sets: "Set bonuses", fx: "Mod effects", dps: "Sustained DPS",
    unlock: "How to unlock", rank: n => `rank ${n}`, wisps: n => `find ${n} Dead Wisps`, quest: "quest", event: "event", zone: "region", undercroft: "undercroft", start: "available from the start",
    rarity: "Rarity"},
  de: {build: "Build", sub: "Unterklasse", super: "Super", grenade: "Granate", melee: "Nahkampf", class: "Klassenfähigkeit", movement: "Ausweichen",
    asp: "Aspekte", aspHint: "Wähle 2. Jeder Aspekt gibt Fragment-Slots (Zahl am Icon).", frag: "Fragmente", fragHint: n => `Slots: ${n}. Fragmente ändern Werte (+/− am Icon).`,
    weapons: "Waffen", armor: "Rüstung", kinetic: "Kinetisch", energy: "Energie", power: "Schwer", pick: "— wählen —",
    typ: "Typ (zufällig legendär)", named: "Benannte Waffen", exo: "Exotics", generic: "Normale Rüstung", setL: "Set", group: "Wertegruppe",
    total: (s, a, b) => `Summe ${s} (rollt ${a}–${b})`, over: "höher, als das Spiel rollen kann", mod: "Mod", noMod: "kein Mod", energyL: n => `Energie ${n}`,
    stats: "Werte", tier: "Stufe", derived: "Was deine Werte bewirken", copy: "Link kopieren", copied: "Link kopiert", reset: "Zurücksetzen",
    oneEx: "Das Spiel erlaubt nur 1 exotische Waffe und 1 exotisches Rüstungsteil — das vorherige Exotic wurde entfernt.",
    intro: "Stell einen Build zusammen: Unterklasse, Waffen und Rüstung. Werte und Abklingzeiten nach den Formeln aus dem Spielcode. Der ganze Build steckt im Link — kopieren und teilen.",
    moveSpeed: "Lauftempo", dodgeCd: "Ausweichen-Abklingzeit", dr: "Schadensreduktion", shield: "Schild", hp: "Leben", regenDelay: "Schild lädt nach", regenRate: "Schild-Laderate",
    grenadeCd: "Granaten-Abklingzeit", meleeCd: "Nahkampf-Abklingzeit", classCd: "Klassen-Abklingzeit", superTime: "Super-Aufladung (ohne Kills)", s: "s", sets: "Set-Boni", fx: "Mod-Effekte", dps: "Dauer-DPS",
    unlock: "Freischalten", rank: n => `Rang ${n}`, wisps: n => `${n} tote Wisps finden`, quest: "Quest", event: "Event", zone: "Region", undercroft: "Unterwelt", start: "von Anfang an",
    rarity: "Seltenheit"},
};
const ub = k => UB[lang][k];
const SLOTY_A = ["super", "grenade", "melee", "class", "movement"];
const SLOTY_W = ["kinetic", "energy", "power"];
const SLOTY_B = ["helmet", "gauntlets", "chest", "legs", "cloak"];
const STATY = ["mobility", "resilience", "recovery", "discipline", "intellect", "strength"];

// ---------- состояние и ссылка ----------
const novyjBild = () => ({sc: Object.fromEntries(SLOTY_A.map(s => [s, LB.B.ab[s][0].id])), asp: [], frag: [], w: {}, a: {}});
let BS = novyjBild();
const kod = o => btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const razkod = s => { try { return JSON.parse(decodeURIComponent(escape(atob(s.replace(/-/g, "+").replace(/_/g, "/"))))); } catch { return null; } };
const sohranit = () => history.replaceState(null, "", "#/build/" + kod(BS));

// ---------- расчёт статов (функции Gc/Kc/qc/Jc игры) ----------
const vseVes = () => SLOTY_B.map(s => BS.a[s]).filter(Boolean);
function raschet() {
  const bal = LB.B.bal, ar = bal.armour, pl = bal.player;
  const tot = Object.fromEntries(STATY.map(s => [s, 0]));
  for (const x of vseVes()) for (const s of STATY) tot[s] += +(x.st?.[s] || 0);
  // бонусы сетов: считаем части каждого сета, бонус работает от нужного числа частей
  const cnt = {}, sets = [], fxSet = {}, plus = Object.fromEntries(STATY.map(s => [s, 0]));
  for (const x of vseVes()) if (x.k === "s") cnt[x.id] = (cnt[x.id] || 0) + 1;
  for (const [id, n] of Object.entries(cnt)) for (const b of AS[id]?.bonuses || []) {
    const sb = LB.SB[b];
    if (sb && n >= sb.p) { sets.push("set_bonuses:" + b); for (const [k, v] of Object.entries(sb.e)) STATY.includes(k) ? plus[k] += v : fxSet[k] = v; }
  }
  for (const f of BS.frag) for (const [k, v] of Object.entries(LB.B.frag.find(x => x.id === f)?.st || {})) plus[k] += v;
  for (const s of STATY) tot[s] = Math.max(0, tot[s] + plus[s]);
  const tier = Object.fromEntries(STATY.map(s => [s, Math.min(ar.maxTier, Math.floor(Math.min(100, tot[s]) / ar.tierSize))]));
  const c = s => tier[s] / ar.maxTier, lin = (ab, s) => ab[0] + (ab[1] - ab[0]) * c(s);
  const mods = vseVes().map(x => x.mod).filter(Boolean), fx = {};
  for (const m of mods) for (const [k, v] of Object.entries(LB.MOD?.[m] || {})) fx[k] = k === "ammoDropMult" ? (fx[k] || 1) * v : (fx[k] || 0) + v;
  const cd = s => LB.B.ab[s].find(a => a.id === BS.sc[s])?.cd || 1;
  const d = {
    moveSpeed: ["+" + r1(ar.mobility.moveSpeedPct * tier.mobility) + "%"],
    dodgeCd: [r1(Math.max(pl.dodge.min, pl.dodge.cooldown - ar.mobility.dodgeCd * tier.mobility - ar.strength.dodgeCd * tier.strength) * cd("movement")) + " " + ub("s")],
    dr: [r1(ar.resilience.damageReductionPct * tier.resilience) + "%"],
    shield: [pl.shield + ar.resilience.shield * tier.resilience + (fx.shield || 0)], hp: [pl.health],
    regenDelay: [r1(Math.max(.5, pl.regenDelay - ar.recovery.regenDelay * tier.recovery)) + " " + ub("s")],
    regenRate: ["+" + r1(ar.recovery.regenRatePct * tier.recovery) + "%"],
    grenadeCd: [r1(lin(ar.discipline.grenadeCd, "discipline") * cd("grenade")) + " " + ub("s")],
    meleeCd: [r1(lin(ar.strength.meleeCd, "strength") * cd("melee")) + " " + ub("s")],
    classCd: [r1(lin(ar.recovery.classCd, "recovery") * cd("class")) + " " + ub("s")],
    superTime: [r1(lin(ar.intellect.superTime, "intellect")) + " " + ub("s")],
  };
  return {tot, tier, plus, d, sets, fx, fxSet, mods};
}
const r1 = x => Math.round(x * 10) / 10;

// ---------- оружие ----------
const vsePushki = slot => [
  ...Object.keys(A).filter(k => A[k].slots.includes(slot)).map(k => ({v: "a:" + k, n: aName(k), g: "typ"})),
  ...Object.entries(ws).flatMap(([s, set]) => Object.entries(set.items).filter(([, w]) => w.bucket === slot).map(([k, w]) => ({v: `s:${s}/${k}`, n: w.name, g: "named"}))),
  ...Object.entries(ex).filter(([, e]) => e.kind === "weapon" && e.bucket === slot).map(([k, e]) => ({v: "e:" + k, n: e.name, g: "exo"})),
];
function pushkaInfo(w) {
  if (!w) return null;
  if (w.k === "a") { const a = A[w.id]; return {ic: a.ic, n: aName(w.id), arch: w.id, fr: w.fr || Object.keys(a.fr)[0], c: rc.legendary}; }
  if (w.k === "s") { const [s, k] = w.id.split("/"), it = ws[s].items[k]; return {ic: it.icon, n: it.name, arch: it.arch, fr: it.frame, c: rc.legendary, set: s, it}; }
  const e = ex[w.id]; return {ic: e.icon, n: e.name, arch: e.arch, fr: e.frame, c: rc.exotic, e};
}
const vyborKol = (slot, pole, title, ids, cur) => `<div class="kol"><i>${title}</i>${ids.filter(x => !/:(null|undefined)?$/.test(x)).map(id =>
  `<button class="perk${cur === id.split(":").slice(1).join(":") ? " vybor" : ""}" data-bw="${slot}|${pole}|${id.split(":").slice(1).join(":")}">${pi(id)}<span>${esc(pName(id))}</span></button>`).join("")}</div>`;
function redaktorPushki(slot) {
  const w = BS.w[slot], inf = pushkaInfo(w), opts = vsePushki(slot);
  const sel = `<select class="bsel" data-bws="${slot}"><option value="">${ub("pick")}</option>${["typ", "named", "exo"].map(g =>
    `<optgroup label="${ub(g)}">${opts.filter(o => o.g === g).map(o => `<option value="${o.v}"${w && o.v === w.k + ":" + w.id ? " selected" : ""}>${esc(o.n)}</option>`).join("")}</optgroup>`).join("")}</select>`;
  let kol = "";
  if (w?.k === "a") {
    const a = A[w.id], p = x => y => x + y;
    kol = vyborKol(slot, "fr", u("frame"), Object.keys(a.fr).map(f => `frames:${w.id}_${f}`), `${w.id}_${w.fr}`)
      + vyborKol(slot, "b", u("barrel"), a.b.map(p("barrels:")), w.b) + vyborKol(slot, "m", u("mag"), a.m.map(p("magazines:")), w.m)
      + vyborKol(slot, "t1", u("t1"), a.t1.map(p("traits:")), w.t1) + vyborKol(slot, "t2", u("t2"), a.t2.map(p("traits:")), w.t2)
      + vyborKol(slot, "mw", u("mwork"), mw.map(p("masterworks:")), w.mw);
    kol = `<div class="fil">${a.el.map(e => `<button data-bwel="${slot}|${e}" class="${(w.el || a.el[0]) === e ? "akt" : ""}">${sl(e)}</button>`).join("")}</div><div class="kolonki">${kol}</div>`;
  } else if (w?.k === "s") {
    const it = inf.it;
    kol = `<div class="kolonki">${kol0(`frames:${it.arch}_${it.frame}`)}${kol0("barrels:" + it.barrel)}${kol0("magazines:" + it.magazine)}
      ${vyborKol(slot, "t1", u("t1"), it.traits[0].map(x => "traits:" + x), w.t1)}${vyborKol(slot, "t2", u("t2"), it.traits[1].map(x => "traits:" + x), w.t2)}${kol0("set_perks:" + ws[inf.set].perk)}</div>`;
  } else if (w?.k === "e") {
    const e = inf.e, ik = P["intrinsics:" + w.id] ? w.id : w.id.replace(/^the_/, "");
    kol = `<div class="kolonki">${kol0(`frames:${e.arch}_${e.frame}`)}${kol0("intrinsics:" + ik)}${e.barrel ? kol0("barrels:" + e.barrel) : ""}${e.magazine ? kol0("magazines:" + e.magazine) : ""}
      ${vyborKol(slot, "rt", u("random"), (EXR[w.id] || []).map(x => "traits:" + x), w.rt)}${kol0("masterworks:" + e.masterwork)}</div>`;
  }
  return `<div class="bblok"><h3>${ub(slot)}</h3>${inf ? `<div class="kar" data-st="--c:${inf.c}">${img(inf.ic)}<span><b>${esc(inf.n)}</b><small>${esc(aName(inf.arch))}</small></span></div>` : ""}${sel}${kol}</div>`;
}
const kol0 = id => `<div class="kol"><i>&nbsp;</i>${perk(id)}</div>`;

// ---------- броня ----------
const exBronya = slot => Object.entries(ex).filter(([, e]) => e.kind === "armor" && e.bucket === slot);
function vesInfo(slot, x) {
  if (!x) return null;
  if (x.k === "e") { const e = ex[x.id]; return {ic: e.icon, n: e.name, grp: e.stats, rng: LB.B.bal.armour.exoticTotal, c: rc.exotic, en: LB.B.energy.exotic}; }
  if (x.k === "s") { const s = AS[x.id]; return {ic: s.icons[slot], n: s.items[slot], grp: s.group, rng: LB.B.bal.armour.pieceTotal, c: s.colour, en: LB.B.energy.legendary}; }
  return {ic: LB.B.aic[slot], n: sl(slot), grp: LB.groups[x.id], rng: LB.B.bal.armour.pieceTotal, c: rc[x.r || "legendary"], en: LB.B.energy[x.r || "legendary"]};
}
const rovno = (grp, total) => Object.fromEntries(grp.map((s, i) => [s, Math.floor(total / grp.length) + (i < total % grp.length ? 1 : 0)]));
function redaktorBroni(slot) {
  const x = BS.a[slot], inf = vesInfo(slot, x);
  const sel = `<select class="bsel" data-bas="${slot}"><option value="">${ub("pick")}</option>
    <optgroup label="${ub("generic")}">${LB.groups.map((g, i) => `<option value="g:${i}"${x?.k === "g" && x.id === i ? " selected" : ""}>${g.map(sl).join(" + ")}</option>`).join("")}</optgroup>
    <optgroup label="${ub("setL")}">${Object.entries(AS).map(([id, s]) => `<option value="s:${id}"${x?.k === "s" && x.id === id ? " selected" : ""}>${esc(s.items[slot])}</option>`).join("")}</optgroup>
    <optgroup label="${ub("exo")}">${exBronya(slot).map(([id, e]) => `<option value="e:${id}"${x?.k === "e" && x.id === id ? " selected" : ""}>${esc(e.name)}</option>`).join("")}</optgroup></select>`;
  if (!inf) return `<div class="bblok"><h3>${sl(slot)}</h3>${sel}</div>`;
  const sum = inf.grp.reduce((a, s) => a + (+x.st[s] || 0), 0), over = sum > inf.rng[1];
  const rar = x.k === "g" ? `<div class="fil">${["common", "uncommon", "rare", "legendary"].map(r => `<button data-bar="${slot}|${r}" class="${(x.r || "legendary") === r ? "akt" : ""}" data-st="color:${rc[r]}">${u("rar")[r]}</button>`).join("")}</div>` : "";
  const mods = Object.keys(P).filter(m => m.startsWith("mods:") && P[m].s?.includes(slot) && (LB.MODC?.[m.slice(5)] ?? 0) <= inf.en);
  return `<div class="bblok"><h3>${sl(slot)}</h3><div class="kar" data-st="--c:${inf.c}">${img(inf.ic)}<span><b>${esc(inf.n)}</b><small>${inf.grp.map(sl).join(" + ")} · ${ub("energyL")(inf.en)}</small></span></div>
    ${sel}${rar}${x.k === "e" ? `<div class="para">${perk("armor:" + x.id)}</div>` : ""}
    <div class="bstaty">${inf.grp.map(s => `<label>${sl(s)}<input type="number" min="0" max="${inf.rng[1]}" value="${+x.st[s] || 0}" data-bst="${slot}|${s}"></label>`).join("")}</div>
    <small class="${over ? "plokho" : "tiho"}">${ub("total")(sum, ...inf.rng)}${over ? " — " + ub("over") : ""}</small>
    ${mods.length ? `<div class="fil"><span class="tiho">${ub("mod")}:</span><button data-bmod="${slot}|" class="${x.mod ? "" : "akt"}">${ub("noMod")}</button>${mods.map(m =>
      `<button data-bmod="${slot}|${m.slice(5)}" class="${x.mod === m.slice(5) ? "akt" : ""}">${esc(pName(m))} (${LB.MODC?.[m.slice(5)] ?? "?"})</button>`).join("")}</div>` : ""}</div>`;
}

// ---------- подкласс ----------
const abInfo = id => [...Object.values(LB.B.ab).flat(), ...LB.B.asp, ...LB.B.frag].find(a => a.id === id);
const scKnopka = (id, akt, data, metka = "") => { const a = abInfo(id);
  return `<button class="sck${akt ? " akt" : ""}" ${data} title="${esc(a.n)}"><img src="img/${a.ic}.png" alt="">${metka ? `<i>${metka}</i>` : ""}<span>${esc(a.n)}</span></button>`; };
const fragMetka = f => Object.entries(f.st).map(([k, v]) => `${v > 0 ? "+" : "−"}${sl(k).slice(0, 3)}`).join(" ");
function redaktorPodklassa() {
  const slots = BS.asp.reduce((a, id) => a + (abInfo(id)?.sl || 0), 0);
  return `<div class="bblok"><h3>${esc(LB.B.name)}</h3>
    ${SLOTY_A.map(s => `<div class="scr"><i>${ub(s)}</i><div class="scg">${LB.B.ab[s].map(a => scKnopka(a.id, BS.sc[s] === a.id, `data-bsc="${s}|${a.id}"`)).join("")}</div></div>`).join("")}
    <div class="scr"><i>${ub("asp")}</i><small class="tiho">${ub("aspHint")}</small><div class="scg">${LB.B.asp.map(a => scKnopka(a.id, BS.asp.includes(a.id), `data-basp="${a.id}"`, a.sl)).join("")}</div></div>
    <div class="scr"><i>${ub("frag")} ${BS.frag.length}/${slots}</i><small class="tiho">${ub("fragHint")(slots)}</small><div class="scg">${LB.B.frag.map(f => scKnopka(f.id, BS.frag.includes(f.id), `data-bfr="${f.id}"`, fragMetka(f))).join("")}</div></div>
    <div id="scOpis" class="tiho"></div></div>`;
}
const otkr = a => { const u2 = a.u; if (!u2) return ub("start");
  const [k, v] = Object.entries(u2)[0]; return k === "rank" ? ub("rank")(v) : k === "wisps" ? ub("wisps")(v) : `${ub(k) || k}: ${String(v).replace(/^(uc_|ev_)/, "").replace(/_/g, " ")}`; };

// ---------- итог ----------
function itog() {
  const R = raschet();
  const bar = s => `<div class="stat"><span>${sl(s)}</span><span><b data-st="width:${Math.min(R.tot[s], 100)}%"></b></span><span>${R.tot[s]} <b class="tir">T${R.tier[s]}</b></span></div>`;
  const pushki = SLOTY_W.map(s => { const w = BS.w[s], inf = pushkaInfo(w); if (!inf) return "";
    const ur = URON[`${inf.arch}_${inf.fr}`], ids = w.k === "a" ? [["barrels", w.b], ["magazines", w.m], ["traits", w.t1], ["traits", w.t2], ["masterworks", w.mw]] : w.k === "s" ? [["traits", w.t1], ["traits", w.t2]] : [["traits", w.rt]];
    return `<div class="bit">${img(inf.ic)}<div><b>${esc(inf.n)}</b><div class="mperk">${ids.filter(([, v]) => v).map(([a, v]) => `<button class="perk" data-p="${a}:${v}">${pi(a + ":" + v)}</button>`).join("")}</div>${ur ? `<small class="tiho">${ub("dps")}: ${ur.dpsM}</small>` : ""}</div></div>`; }).join("");
  return `<div class="bblok itog"><h3>${ub("stats")}</h3>${STATY.map(bar).join("")}
    <h3>${ub("derived")}</h3><table class="btab">${Object.entries(R.d).map(([k, v]) => `<tr><td>${ub(k)}</td><td>${v[0]}</td></tr>`).join("")}</table>
    ${R.sets.length ? `<h3>${ub("sets")}</h3><div class="para">${R.sets.map(b => perk(b)).join("")}</div>` : ""}
    ${R.mods.length ? `<h3>${ub("fx")}</h3><div class="para">${R.mods.map(m => perk("mods:" + m)).join("")}</div>` : ""}
    ${pushki ? `<h3>${ub("weapons")}</h3>${pushki}` : ""}
    <div class="fil"><button id="bCopy" class="akt">${ub("copy")}</button><button id="bReset">${ub("reset")}</button></div><small id="bMsg" class="tiho"></small></div>`;
}

function stranicaBild(p) {
  const st = p && razkod(p);
  if (st && st.sc) BS = {...novyjBild(), ...st};
  return `<h2>${ub("build")}</h2><p class="tiho">${ub("intro")}</p><div class="bild"><div class="blevo">
    <h2>${ub("sub")}</h2>${redaktorPodklassa()}<h2>${ub("weapons")}</h2>${SLOTY_W.map(redaktorPushki).join("")}
    <h2>${ub("armor")}</h2>${SLOTY_B.map(redaktorBroni).join("")}</div><div class="bpravo">${itog()}</div></div>`;
}

const perersovat = () => { const y = scrollY; sohranit(); $("#app").innerHTML = stranicaBild(); stili($("#app")); scrollTo(0, y); };
const snyatEkzotik = (vid, krome) => { let snyal = false;
  const kuda = vid === "w" ? BS.w : BS.a;
  for (const [s, x] of Object.entries(kuda)) if (x && x.k === "e" && s !== krome) { delete kuda[s]; snyal = true; }
  return snyal; };
document.addEventListener("change", e => {
  const t = e.target;
  if (t.dataset.bws) { const s = t.dataset.bws, v = t.value; if (!v) delete BS.w[s]; else { const [k, id] = [v[0], v.slice(2)];
      const msg = k === "e" && snyatEkzotik("w", s);
      BS.w[s] = k === "a" ? {k, id, fr: Object.keys(A[id].fr)[0], el: A[id].el[0]} : {k, id}; perersovat(); if (msg) $("#bMsg").textContent = ub("oneEx"); return; } perersovat(); }
  else if (t.dataset.bas) { const s = t.dataset.bas, v = t.value; if (!v) delete BS.a[s]; else { const k = v[0], id = k === "g" ? +v.slice(2) : v.slice(2);
      const msg = k === "e" && snyatEkzotik("a", s), inf = vesInfo(s, {k, id});
      BS.a[s] = {k, id, st: rovno(inf.grp, inf.rng[1]), mod: null}; perersovat(); if (msg) $("#bMsg").textContent = ub("oneEx"); return; } perersovat(); }
  else if (t.dataset.bst) { const [s, stat] = t.dataset.bst.split("|"); BS.a[s].st[stat] = Math.max(0, Math.min(100, +t.value || 0)); perersovat(); }
});
document.addEventListener("click", e => {
  const t = e.target.closest("[data-bsc],[data-basp],[data-bfr],[data-bw],[data-bwel],[data-bar],[data-bmod],#bCopy,#bReset");
  if (!t) return;
  const opis = id => { const a = abInfo(id); const o = $("#scOpis"); if (o) o.innerHTML = `<b>${esc(a.n)}</b> — ${esc(a.d)}<br><small>${ub("unlock")}: ${esc(otkr(a))}</small>`; };
  if (t.dataset.bsc) { const [s, id] = t.dataset.bsc.split("|"); BS.sc[s] = id; perersovat(); opis(id); }
  else if (t.dataset.basp) { const id = t.dataset.basp; BS.asp = BS.asp.includes(id) ? BS.asp.filter(x => x !== id) : [...BS.asp, id].slice(-2);
    const sl2 = BS.asp.reduce((a, x) => a + (abInfo(x)?.sl || 0), 0); BS.frag = BS.frag.slice(0, sl2); perersovat(); opis(id); }
  else if (t.dataset.bfr) { const id = t.dataset.bfr, sl2 = BS.asp.reduce((a, x) => a + (abInfo(x)?.sl || 0), 0);
    BS.frag = BS.frag.includes(id) ? BS.frag.filter(x => x !== id) : BS.frag.length < sl2 ? [...BS.frag, id] : BS.frag; perersovat(); opis(id); }
  else if (t.dataset.bw) { const [s, pole, v] = t.dataset.bw.split("|"); const w = BS.w[s];
    if (pole === "fr") w.fr = v.slice(w.id.length + 1); else w[pole] = w[pole] === v ? undefined : v; perersovat(); }
  else if (t.dataset.bwel) { const [s, el] = t.dataset.bwel.split("|"); BS.w[s].el = el; perersovat(); }
  else if (t.dataset.bar) { const [s, r] = t.dataset.bar.split("|"); BS.a[s].r = r; const inf = vesInfo(s, BS.a[s]); if ((LB.MODC?.[BS.a[s].mod] ?? 0) > inf.en) BS.a[s].mod = null; perersovat(); }
  else if (t.dataset.bmod != null) { const [s, m] = t.dataset.bmod.split("|"); BS.a[s].mod = m || null; perersovat(); }
  else if (t.id === "bCopy") { sohranit(); const done = () => { $("#bMsg").textContent = ub("copied"); };
    navigator.clipboard?.writeText(location.href).then(done, () => { prompt(ub("copy"), location.href); }); }
  else if (t.id === "bReset") { BS = novyjBild(); perersovat(); }
});
