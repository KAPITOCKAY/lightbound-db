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
Object.assign(UB.ru, {rollL: "Ролл", pr_max: "Макс", pr_avg: "Средний", pr_min: "Мин", totalL: "Сумма", realHint: "Только настоящие роллы: статы считаются по формуле игры, у брони все 6 статов. Цифры можно менять — сайт проверит, бывает ли так в игре.", snapped: "Такого ролла в игре нет — подогнал к ближайшему настоящему.", change: "Сменить", close: "Закрыть", remove: "Убрать"});
Object.assign(UB.en, {rollL: "Roll", pr_max: "Max", pr_avg: "Average", pr_min: "Min", totalL: "Total", realHint: "Real rolls only: stats follow the game's formula, every armor piece has all 6 stats. Edit the numbers — the site checks the game can roll them.", snapped: "The game can't roll that — snapped to the nearest real roll.", change: "Change", close: "Close", remove: "Remove"});
Object.assign(UB.de, {rollL: "Roll", pr_max: "Max", pr_avg: "Mittel", pr_min: "Min", totalL: "Summe", realHint: "Nur echte Rolls: Werte nach der Spielformel, jedes Teil hat alle 6 Werte. Zahlen änderbar — die Seite prüft, ob das Spiel sie rollen kann.", snapped: "So rollt das Spiel nicht — auf den nächsten echten Roll angepasst.", change: "Wechseln", close: "Schließen", remove: "Entfernen"});
// значки строк «что дают статы»: свои глифы игры; уклон и классовая — значок выбранной способности
const dGl = k => { const m = {moveSpeed: "stat_mobility", dr: "pf_shield", shield: "hud_shield", hp: "pf_heart", regenDelay: "pf_clock", regenRate: "stat_recovery",
  grenadeCd: "ability_grenade", meleeCd: "ability_melee", superTime: "ability_super", dodgeCd: "sub_" + BS.sc.movement, classCd: "sub_" + BS.sc.class}[k];
  return m ? gl(m, ub(k)) : ""; };
Object.assign(UB.ru, {moveSpeedS: "Скорость бега", dodgeCdS: "Уклон", drS: "Снижение урона", shieldS: "Щит", hpS: "Здоровье", regenDelayS: "Задержка щита", regenRateS: "Реген щита", grenadeCdS: "Граната", meleeCdS: "Удар", classCdS: "Классовая", superTimeS: "Супер"});
Object.assign(UB.en, {moveSpeedS: "Move speed", dodgeCdS: "Dodge", drS: "Damage reduction", shieldS: "Shield", hpS: "Health", regenDelayS: "Shield delay", regenRateS: "Shield regen", grenadeCdS: "Grenade", meleeCdS: "Melee", classCdS: "Class", superTimeS: "Super"});
Object.assign(UB.de, {moveSpeedS: "Lauftempo", dodgeCdS: "Ausweichen", drS: "Schadensreduktion", shieldS: "Schild", hpS: "Leben", regenDelayS: "Schild-Verzögerung", regenRateS: "Schild-Regen", grenadeCdS: "Granate", meleeCdS: "Nahkampf", classCdS: "Klasse", superTimeS: "Super"});
const SLOTY_A = ["super", "grenade", "melee", "class", "movement"];
const SLOTY_W = ["kinetic", "energy", "power"];
const SLOTY_B = ["helmet", "gauntlets", "chest", "legs", "cloak"];
const STATY = ["mobility", "resilience", "recovery", "discipline", "intellect", "strength"];

// ---------- состояние и ссылка ----------
const novyjBild = () => ({sc: Object.fromEntries(SLOTY_A.map(s => [s, LB.B.ab[s][0].id])), asp: [], frag: [], w: {}, a: {}});
let BS = novyjBild();
// короткая ссылка: индексы в списках игры в base36. Разделы через "_", поля через "."; старые ссылки (base64 JSON) тоже читаются
const RAR4 = ["common", "uncommon", "rare", "legendary"];
const n36 = (i) => i == null || i < 0 ? "" : i.toString(36), r36 = t => t === "" || t == null ? null : parseInt(t, 36);
const EXW = () => Object.keys(ex).filter(k => ex[k].kind === "weapon"), EXA = () => Object.keys(ex).filter(k => ex[k].kind === "armor");
const SETW = () => Object.keys(ws), SETA = () => Object.keys(AS), ARCH = () => Object.keys(A), MODS = () => Object.keys(LB.MOD);
function kod(o) {
  const sc = SLOTY_A.map(s => n36(LB.B.ab[s].findIndex(a => a.id === o.sc[s]))).join(".");
  const asp = o.asp.map(id => n36(LB.B.asp.findIndex(a => a.id === id))).join(".");
  const fr = o.frag.map(id => n36(LB.B.frag.findIndex(a => a.id === id))).join(".");
  const w = SLOTY_W.map(sl => { const x = o.w[sl]; if (!x) return "";
    if (x.k === "a") { const a = A[x.id], ix = (arr, v) => v == null ? "" : n36(arr.indexOf(v));
      return ["a", n36(ARCH().indexOf(x.id)), ix(Object.keys(a.fr), x.fr), ix(a.el, x.el), ix(a.b, x.b), ix(a.m, x.m), ix(a.t1, x.t1), ix(a.t2, x.t2), ix(mw, x.mw)].join("."); }
    if (x.k === "s") { const [st, k] = x.id.split("/"), it = ws[st].items[k];
      return ["s", n36(SETW().indexOf(st)), n36(Object.keys(ws[st].items).indexOf(k)), x.t1 ? n36(it.traits[0].indexOf(x.t1)) : "", x.t2 ? n36(it.traits[1].indexOf(x.t2)) : ""].join("."); }
    return ["e", n36(EXW().indexOf(x.id)), x.rt ? n36((EXR[x.id] || []).indexOf(x.rt)) : ""].join("."); });
  const a = SLOTY_B.map(sl => { const x = o.a[sl]; if (!x) return ""; const inf = vesInfo(sl, x), pr = ["max", "avg", "min"].findIndex(p => { const n = novyeStaty(inf, p); return STATY.every(g => n[g] === +x.st[g]); }),
      st = pr >= 0 ? ["!" + pr] : STATY.map(g => n36(+x.st[g] || 0)), md = x.mod ? n36(MODS().indexOf(x.mod)) : "";
    if (x.k === "g") return ["g", n36(x.id), n36(RAR4.indexOf(x.r || "legendary")), md, ...st].join(".");
    return [x.k, n36((x.k === "s" ? SETA() : EXA()).indexOf(x.id)), md, ...st].join("."); });
  return "1~" + [sc, asp, fr, ...w, ...a].join("_");
}
// ссылка v2: тот же код, упакованный в байты → base64url (без точек, ~50 символов).
// байт: число 0–245, 246–248 — ролл брони Макс/Средний/Мин, 250–253 — тип (a/s/e/g), 254 — граница раздела, 255 — пустое поле
const TIPY = "aseg";
function kod2(v1) {
  const out = [];
  v1.slice(2).split("_").forEach((sec, i) => {
    if (i) out.push(254);
    const f = sec === "" ? [] : sec.split(".");
    out.push(Math.min(f.length, 249));
    for (const x of f) out.push(x === "" ? 255 : x[0] === "!" ? 246 + +x[1] : TIPY.includes(x) ? 250 + TIPY.indexOf(x) : Math.min(245, parseInt(x, 36)));
  });
  return "2" + btoa(String.fromCharCode(...out)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function raspak(str) {
  const bin = atob(str.slice(1).replace(/-/g, "+").replace(/_/g, "/")), b = [...bin].map(c => c.charCodeAt(0)), secs = [];
  let i = 0;
  while (i < b.length) { const n = b[i++], f = []; for (let k = 0; k < n; k++) { const x = b[i++]; f.push(x === 255 ? "" : x >= 250 ? TIPY[x - 250] : x >= 246 ? "!" + (x - 246) : x.toString(36)); } secs.push(f.join(".")); if (b[i] === 254) i++; }
  return "1~" + secs.join("_");
}
function razkod(str) {
  if (!str) return null;
  if (str[0] === "2") { try { str = raspak(str); } catch { return null; } }
  if (!str.startsWith("1~")) { try { return JSON.parse(decodeURIComponent(escape(atob(str.replace(/-/g, "+").replace(/_/g, "/"))))); } catch { return null; } }
  try {
    const p = str.slice(2).split("_"), f = t => (t || "").split(".");
    const o = novyjBild();
    f(p[0]).forEach((t, i) => { const a = LB.B.ab[SLOTY_A[i]][r36(t)]; if (a) o.sc[SLOTY_A[i]] = a.id; });
    o.asp = f(p[1]).map(t => LB.B.asp[r36(t)]?.id).filter(Boolean);
    o.frag = f(p[2]).map(t => LB.B.frag[r36(t)]?.id).filter(Boolean);
    SLOTY_W.forEach((sl, i) => { const q = f(p[3 + i]); if (!q[0]) return;
      if (q[0] === "a") { const id = ARCH()[r36(q[1])], a = A[id]; if (!a) return; const g = (arr, t) => t === "" ? undefined : arr[r36(t)];
        o.w[sl] = {k: "a", id, fr: g(Object.keys(a.fr), q[2]) || Object.keys(a.fr)[0], el: g(a.el, q[3]) || a.el[0], b: g(a.b, q[4]), m: g(a.m, q[5]), t1: g(a.t1, q[6]), t2: g(a.t2, q[7]), mw: g(mw, q[8])}; }
      else if (q[0] === "s") { const st = SETW()[r36(q[1])], k = st && Object.keys(ws[st].items)[r36(q[2])]; if (!k) return; const it = ws[st].items[k];
        o.w[sl] = {k: "s", id: st + "/" + k, t1: q[3] === "" ? undefined : it.traits[0][r36(q[3])], t2: q[4] === "" ? undefined : it.traits[1][r36(q[4])]}; }
      else { const id = EXW()[r36(q[1])]; if (!id) return; o.w[sl] = {k: "e", id, rt: q[2] === "" ? undefined : (EXR[id] || [])[r36(q[2])]}; } });
    SLOTY_B.forEach((sl, i) => { const q = f(p[6 + i]); if (!q[0]) return; let x;
      if (q[0] === "g") x = {k: "g", id: r36(q[1]), r: RAR4[r36(q[2])] || "legendary", mod: q[3] === "" ? null : MODS()[r36(q[3])], vals: q.slice(4)};
      else x = {k: q[0], id: (q[0] === "s" ? SETA() : EXA())[r36(q[1])], mod: q[2] === "" ? null : MODS()[r36(q[2])], vals: q.slice(3)};
      const inf = vesInfo(sl, x); if (!inf || !inf.grp) return;
      // старые ссылки хранили только 2–3 стата — тогда ставим лучший настоящий ролл; новые — 6 статов, проверяем по правилам игры
      const PR = ["max", "avg", "min"], pp = x.vals.length === 1 && x.vals[0][0] === "!" ? PR[+x.vals[0][1]] : null;
      if (pp) { x.st = novyeStaty(inf, pp); x.p = pp; delete x.vals; o.a[sl] = x; return; }
      x.st = x.vals.length === 6 ? blizhajshij(Object.fromEntries(STATY.map((g, j) => [g, r36(x.vals[j]) || 0])), inf.grp, inf.rng).st : novyeStaty(inf, "max");
      x.p = "max"; delete x.vals; o.a[sl] = x; });
    return o;
  } catch { return null; }
}
const sohranit = () => history.replaceState(null, "", "#/build/" + kod2(kod(BS)));

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
  ...Object.keys(A).filter(k => A[k].slots.includes(slot)).map(k => ({v: "a:" + k, n: aName(k), g: "typ", ic: A[k].ic, c: rc.legendary})),
  ...Object.entries(ws).flatMap(([s, set]) => Object.entries(set.items).filter(([, w]) => w.bucket === slot).map(([k, w]) => ({v: `s:${s}/${k}`, n: w.name, g: "named", ic: w.icon, c: set.colour, sub: aName(w.arch), el: w.element}))),
  ...Object.entries(ex).filter(([, e]) => e.kind === "weapon" && e.bucket === slot).map(([k, e]) => ({v: "e:" + k, n: e.name, g: "exo", ic: e.icon, c: rc.exotic, sub: aName(e.arch), el: e.element})),
];
function pushkaInfo(w) {
  if (!w) return null;
  if (w.k === "a") { const a = A[w.id]; return {ic: a.ic, n: aName(w.id), arch: w.id, fr: w.fr || Object.keys(a.fr)[0], c: rc.legendary}; }
  if (w.k === "s") { const [s, k] = w.id.split("/"), it = ws[s].items[k]; return {ic: it.icon, n: it.name, arch: it.arch, fr: it.frame, c: rc.legendary, set: s, it}; }
  const e = ex[w.id]; return {ic: e.icon, n: e.name, arch: e.arch, fr: e.frame, c: rc.exotic, e};
}
const vyborKol = (slot, pole, title, ids, cur) => `<div class="kol"><i>${title}</i>${ids.filter(x => !/:(null|undefined)?$/.test(x)).map(id =>
  `<button class="perk${cur === id.split(":").slice(1).join(":") ? " vybor" : ""}" data-bw="${slot}|${pole}|${id.split(":").slice(1).join(":")}">${pi(id)}<span>${esc(pName(id))}</span></button>`).join("")}</div>`;
// перки пушки иконками, как на странице оружия; постоянные перки — просто показ (нажатие открывает описание)
const BFOK = {};
const ikKol = (slot, pole, title, ids, cur, fixed) => { ids = ids.filter(x => !/:(null|undefined)?$/.test(x));
  return `<div class="wk${ids.length > 14 ? " shir" : ids.length > 8 ? " dve" : ""}"><b>${title}</b><div class="wk-g">${ids.map(id => {
    const v = id.split(":").slice(1).join(":"), n = pName(id), sel = !fixed && cur === v, d = BSOV.has(id);
    return `<button class="pk${sel ? " vyb" : ""}${d ? " sov" : ""}${fixed ? " fix" : ""}" ${fixed ? `data-bfix="${slot}|${id}"` : `data-bw="${slot}|${pole}|${v}"`} title="${esc(n)}">${pi(id)}${d ? "<i>◆</i>" : ""}</button>`; }).join("")}</div></div>`; };
let BSOV = new Set();
// все перки, которые сейчас стоят на пушке (для статов и итога)
function perkiPushki(w) {
  if (!w) return [];
  if (w.k === "a") return [`frames:${w.id}_${w.fr}`, w.b && "barrels:" + w.b, w.m && "magazines:" + w.m, w.t1 && "traits:" + w.t1, w.t2 && "traits:" + w.t2, w.mw && "masterworks:" + w.mw].filter(Boolean);
  if (w.k === "s") { const [st, k] = w.id.split("/"), it = ws[st].items[k];
    return [`frames:${it.arch}_${it.frame}`, "barrels:" + it.barrel, "magazines:" + it.magazine, w.t1 && "traits:" + w.t1, w.t2 && "traits:" + w.t2, "set_perks:" + ws[st].perk].filter(Boolean); }
  const e = ex[w.id], ik = P["intrinsics:" + w.id] ? w.id : w.id.replace(/^the_/, "");
  return [`frames:${e.arch}_${e.frame}`, "intrinsics:" + ik, e.barrel && "barrels:" + e.barrel, e.magazine && "magazines:" + e.magazine, w.rt && "traits:" + w.rt, "masterworks:" + e.masterwork].filter(Boolean);
}
function statyPushki(arch, ids) {
  const plus = {};
  for (const id of ids) for (const [k, v] of Object.entries(P[id]?.st || {})) plus[k] = (plus[k] || 0) + v;
  return Object.entries(A[arch].base).map(([k, v]) => { const d = plus[k] || 0, t = Math.max(0, Math.min(100, v + d));
    return `<div class="stat"><span>${sl(k)}</span><span><b data-st="width:${Math.min(v, t)}%"></b>${d > 0 ? `<b class="plus" data-st="width:${t - v}%"></b>` : d < 0 ? `<b class="minus" data-st="width:${v - t}%"></b>` : ""}</span><span>${t}${d ? ` <small class="${d > 0 ? "zel" : "plokho"}">${d > 0 ? "+" : ""}${d}</small>` : ""}</span></div>`; }).join("");
}
function uronPushki(inf, ids) {
  const ur = URON[`${inf.arch}_${inf.fr}`]; if (!ur) return "";
  const mp = ids.reduce((a, id) => a + (P[id]?.mp || 0), 0);
  return `<table class="btab"><tr><td>${u("perShot")}</td><td>${yach(ur, "v")}</td></tr><tr><td>${u("head")}</td><td>${yach(ur, "k")}</td></tr>
    <tr><td>${u("rpmL")}</td><td>${ur.rpm}</td></tr><tr><td>${u("magL")}</td><td>${mp ? `${Math.round(ur.mag * (1 + mp))} <small class="zel">(${ur.mag})</small>` : ur.mag}</td></tr>
    <tr><td>${u("dpsL")}</td><td>${ur.dps}</td></tr><tr><td>${u("dpsML")}</td><td>${ur.dpsM}</td></tr></table>`;
}
// выбор картинками: пустой слот сразу показывает сетку, у выбранного — кнопка «Сменить»
const OTKR = {};
const pTile = (attr, o, akt) => `<button class="plit pm${akt ? " vyb" : ""}" ${attr} data-st="--c:${o.c}" title="${esc(o.n)}"><span class="plit-ik"><img src="img/${o.ic}.png" alt="" loading="lazy"></span><b>${esc(o.n)}</b>${o.sub || o.el ? `<small>${o.sub ? esc(o.sub) : ""}${o.el ? gl("element_" + o.el, sl(o.el)) : ""}</small>` : ""}${o.gr ? `<small>${o.gr}</small>` : ""}</button>`;
// одна строка иконок, листается вбок; группы разделены подписью; название — при наведении и под строкой у выбранного
const pIk = (kluch, o, akt) => `<button class="pi2${akt ? " vyb" : ""}" data-bpick="${kluch}|${o.v}" data-st="--c:${o.c}" title="${esc(o.n)}"><img src="img/${o.ic}.png" alt="${esc(o.n)}" loading="lazy">${o.gr ? `<i>${o.gr}</i>` : o.el ? `<i>${gl("element_" + o.el, sl(o.el))}</i>` : ""}</button>`;
function vyborKartinkami(kluch, gruppy, tek) {
  return `<div class="pstr">${gruppy.filter(([, v]) => v.length).map(([t, v]) => `<span class="pgr">${t}</span>${v.map(o => pIk(kluch, o, o.v === tek)).join("")}`).join("")}</div>`;
}
const smena = (kluch, est) => est ? `<button class="chip smena${OTKR[kluch] ? " akt" : ""}" data-bopen="${kluch}">${OTKR[kluch] ? "✕ " + ub("close") : "⇄ " + ub("change")}</button>${est ? `<button class="chip" data-bclear="${kluch}">${ub("remove")}</button>` : ""}` : "";
function redaktorPushki(slot) {
  const w = BS.w[slot], inf = pushkaInfo(w), opts = vsePushki(slot);
  const kl = "w:" + slot, tek = w ? w.k + ":" + w.id : "";
  const sel = (!w || OTKR[kl]) ? vyborKartinkami(kl, ["exo", "named", "typ"].map(g => [ub(g), opts.filter(o => o.g === g)]), tek) : "";
  if (!inf) return `<div class="bblok"><h3>${ub(slot)}</h3>${sel}</div>`;
  let kol = "", el = "";
  BSOV = w.k === "a" ? sovety(w.id).set : new Set();
  if (w.k === "a") {
    const a = A[w.id], p = x => y => x + y;
    kol = ikKol(slot, "fr", u("frame"), Object.keys(a.fr).map(f => `frames:${w.id}_${f}`), `${w.id}_${w.fr}`)
      + ikKol(slot, "b", u("barrel"), a.b.map(p("barrels:")), w.b) + ikKol(slot, "m", u("mag"), a.m.map(p("magazines:")), w.m)
      + ikKol(slot, "t1", u("t1"), a.t1.map(p("traits:")), w.t1) + ikKol(slot, "t2", u("t2"), a.t2.map(p("traits:")), w.t2)
      + ikKol(slot, "mw", u("mwork"), mw.map(p("masterworks:")), w.mw);
    el = `<div class="fil">${a.el.map(e => `<button data-bwel="${slot}|${e}" class="${(w.el || a.el[0]) === e ? "akt" : ""}">${gl("element_" + e, sl(e))}${sl(e)}</button>`).join("")}</div>`;
  } else if (w.k === "s") {
    const it = inf.it;
    kol = ikKol(slot, "", u("frame"), [`frames:${it.arch}_${it.frame}`], null, 1) + ikKol(slot, "", u("barrel"), ["barrels:" + it.barrel], null, 1) + ikKol(slot, "", u("mag"), ["magazines:" + it.magazine], null, 1)
      + ikKol(slot, "t1", u("t1"), it.traits[0].map(x => "traits:" + x), w.t1) + ikKol(slot, "t2", u("t2"), it.traits[1].map(x => "traits:" + x), w.t2) + ikKol(slot, "", u("setPerk"), ["set_perks:" + ws[inf.set].perk], null, 1);
  } else {
    const e = inf.e, ik = P["intrinsics:" + w.id] ? w.id : w.id.replace(/^the_/, "");
    kol = ikKol(slot, "", u("frame"), [`frames:${e.arch}_${e.frame}`], null, 1) + ikKol(slot, "", u("exPerk"), ["intrinsics:" + ik], null, 1)
      + (e.barrel ? ikKol(slot, "", u("barrel"), ["barrels:" + e.barrel], null, 1) : "") + (e.magazine ? ikKol(slot, "", u("mag"), ["magazines:" + e.magazine], null, 1) : "")
      + ikKol(slot, "rt", u("random"), (EXR[w.id] || []).map(x => "traits:" + x), w.rt) + ikKol(slot, "", u("mwork"), ["masterworks:" + e.masterwork], null, 1);
  }
  const ids = perkiPushki(w), f = BFOK[slot] && P[BFOK[slot]];
  const opis = f ? `<div class="wfok"><div>${pi(BFOK[slot])}<b>${esc(pName(BFOK[slot]))}</b></div><p>${esc(tx(trKey(BFOK[slot]), 1, f.d))}</p></div>` : `<p class="tiho">${u("tapPerk")}</p>`;
  return `<div class="bblok"><h3>${ub(slot)}</h3><div class="bw-h"><div class="kar" data-st="--c:${inf.c}">${img(inf.ic)}<span><b>${esc(inf.n)}</b><small>${esc(aName(inf.arch))}${w.k === "a" ? " · " + sl(w.el || A[w.id].el[0]) : inf.e ? " · " + sl(inf.e.element) : inf.it ? " · " + sl(inf.it.element) : ""}</small></span></div>${smena(kl, 1)}</div>${sel}
    ${el}<div class="wkols">${kol}</div>
    <div class="bw-niz"><div class="wcard">${opis}</div><div class="wcard"><h3>${u("statsL")}</h3>${statyPushki(inf.arch, ids)}</div><div class="wcard"><h3>${u("dmg")}</h3>${uronPushki(inf, ids)}</div></div></div>`;
}

// ---------- броня ----------
const exBronya = slot => Object.entries(ex).filter(([, e]) => e.kind === "armor" && e.bucket === slot);
function vesInfo(slot, x) {
  if (!x) return null;
  if (x.k === "e") { const e = ex[x.id]; return {ic: e.icon, n: e.name, grp: e.stats, rng: LB.B.bal.armour.exoticTotal, c: rc.exotic, en: LB.B.energy.exotic}; }
  if (x.k === "s") { const s = AS[x.id]; return {ic: s.icons[slot], n: s.items[slot], grp: s.group, rng: LB.B.bal.armour.pieceTotal, c: s.colour, en: LB.B.energy.legendary}; }
  return {ic: LB.B.aic[slot], n: sl(slot), grp: LB.groups[x.id], rng: LB.B.bal.armour.pieceTotal, c: rc[x.r || "legendary"], en: LB.B.energy[x.r || "legendary"]};
}
// статы брони ровно как роллит игра (функция wee в её коде): у брони есть все 6 статов,
// вес стата = 1 + (основной ? 2.4 : 0) + случайное·0.8, минимум 2; остаток раздаётся по кругу, сначала основным
function rollIgry(T, grp, rnd) {
  const w = STATY.map((s, i) => 1 + (grp.includes(s) ? 2.4 : 0) + rnd(i) * .8), sum = w.reduce((a, b) => a + b, 0), a = {};
  STATY.forEach((s, i) => a[s] = Math.max(2, Math.floor(T * w[i] / sum)));
  let o = T - Object.values(a).reduce((x, y) => x + y, 0); const por = [...grp, ...STATY.filter(s => !grp.includes(s))];
  for (let e = 0; o !== 0 && e < 200; e++) { const t = por[e % por.length]; if (o > 0) { a[t]++; o--; } else if (a[t] > 2) { a[t]--; o++; } }
  return a;
}
const RASKL = {max: grp => i => grp.includes(STATY[i]) ? 1 : 0, avg: () => () => .5, min: grp => i => grp.includes(STATY[i]) ? 0 : 1};
const presetT = (p, rng) => p === "max" ? rng[1] : p === "min" ? rng[0] : Math.round((rng[0] + rng[1]) / 2);
const VALID = new Map();
function realnye(T, grp) {   // все раскладки, которые игра реально может выдать при этой сумме
  const k = T + "|" + grp.join(","); if (VALID.has(k)) return VALID.get(k);
  const m = new Map(); let sd = 987654321; const r = () => (sd = (sd * 1103515245 + 12345) % 2147483648) / 2147483648;
  for (let n = 0; n < 5000; n++) { const a = rollIgry(T, grp, () => r()); m.set(STATY.map(x => a[x]).join(","), a); }
  for (const pr of Object.values(RASKL)) { const a = rollIgry(T, grp, pr(grp)); m.set(STATY.map(x => a[x]).join(","), a); }
  const v = [...m.values()]; VALID.set(k, v); return v;
}
function blizhajshij(vals, grp, rng) {
  const T = Math.max(rng[0], Math.min(rng[1], STATY.reduce((a, s) => a + (+vals[s] || 0), 0)));
  let best = null, bd = 1e9;
  for (const c of realnye(T, grp)) { const d = STATY.reduce((a, s) => a + Math.abs((+vals[s] || 0) - c[s]), 0); if (d < bd) { bd = d; best = c; } }
  return {st: {...best}, tochno: bd === 0};
}
const VWARN = {};
const novyeStaty = (inf, p) => rollIgry(presetT(p, inf.rng), inf.grp, RASKL[p](inf.grp));
function redaktorBroni(slot) {
  const x = BS.a[slot], inf = vesInfo(slot, x);
  const kl = "a:" + slot, tek = x ? x.k + ":" + x.id : "";
  const sel = (!x || OTKR[kl]) ? vyborKartinkami(kl, [
    [ub("exo"), exBronya(slot).map(([id, e]) => ({v: "e:" + id, n: e.name, ic: e.icon, c: rc.exotic, gr: e.stats.map(statGl).join("")}))],
    [ub("setL"), Object.entries(AS).map(([id, s2]) => ({v: "s:" + id, n: s2.items[slot], ic: s2.icons[slot], c: s2.colour, gr: s2.group.map(statGl).join("")}))],
    [ub("generic"), LB.groups.map((g, i) => ({v: "g:" + i, n: ub("generic"), ic: LB.B.aic[slot], c: rc.legendary, gr: g.map(statGl).join("")}))]], tek) : "";
  if (!inf) return `<div class="bblok"><h3>${sl(slot)}</h3>${sel}</div>`;
  const sum = STATY.reduce((a, s) => a + (+x.st[s] || 0), 0);
  const rar = x.k === "g" ? `<div class="fil">${["common", "uncommon", "rare", "legendary"].map(r => `<button data-bar="${slot}|${r}" class="${(x.r || "legendary") === r ? "akt" : ""}" data-st="color:${rc[r]}">${u("rar")[r]}</button>`).join("")}</div>` : "";
  const mods = Object.keys(P).filter(m => m.startsWith("mods:") && P[m].s?.includes(slot) && (LB.MODC?.[m.slice(5)] ?? 0) <= inf.en);
  return `<div class="bblok"><h3>${sl(slot)}</h3><div class="kar" data-st="--c:${inf.c}">${img(inf.ic)}<span><b>${esc(inf.n)}</b><small>${inf.grp.map(statGl).join("")} · ${ub("energyL")(inf.en)}</small></span></div>${smena(kl, 1)}
    ${sel}${rar}${x.k === "e" ? `<div class="para">${perk("armor:" + x.id)}</div>` : ""}
    <div class="fil"><span class="tiho">${ub("rollL")}:</span>${["max", "avg", "min"].map(p => `<button data-bpr="${slot}|${p}" class="${x.p === p ? "akt" : ""}">${ub("pr_" + p)}</button>`).join("")}</div>
    <div class="brng"><span>${ub("totalL")}</span><input type="range" min="${inf.rng[0]}" max="${inf.rng[1]}" value="${sum}" data-btot="${slot}"><b>${sum}</b><small class="tiho">${inf.rng[0]}–${inf.rng[1]}</small></div>
    <div class="bstaty2">${STATY.map(s => `<label class="${inf.grp.includes(s) ? "osn" : ""}" title="${esc(sl(s))}">${statGl(s)}<input type="number" min="2" max="40" value="${+x.st[s] || 0}" data-bst="${slot}|${s}"></label>`).join("")}</div>
    ${VWARN[slot] ? `<small class="plokho">${VWARN[slot]}</small>` : `<small class="tiho">${ub("realHint")}</small>`}
    ${mods.length ? `<div class="fil"><span class="tiho">${ub("mod")}:</span><button data-bmod="${slot}|" class="${x.mod ? "" : "akt"}">${ub("noMod")}</button>${mods.map(m =>
      `<button data-bmod="${slot}|${m.slice(5)}" class="${x.mod === m.slice(5) ? "akt" : ""}">${esc(pName(m))} (${LB.MODC?.[m.slice(5)] ?? "?"})</button>`).join("")}</div>` : ""}</div>`;
}

// ---------- подкласс ----------
const scN = a => a.n, scD = a => tx("SC|" + a.id, 1, a.d); // названия как в игре (англ.), описания переведены
const abInfo = id => [...Object.values(LB.B.ab).flat(), ...LB.B.asp, ...LB.B.frag].find(a => a.id === id);
const scKnopka = (id, akt, data, metka = "") => { const a = abInfo(id);
  return `<button class="sck${akt ? " akt" : ""}" ${data} title="${esc(scN(a))}"><img src="img/${a.ic}.png" alt="">${metka ? `<i>${metka}</i>` : ""}<span>${esc(scN(a))}</span></button>`; };
const fragMetka = f => Object.entries(f.st).map(([k, v]) => `${v > 0 ? "+" : "−"}${statGl(k)}`).join("");
function redaktorPodklassa() {
  const slots = BS.asp.reduce((a, id) => a + (abInfo(id)?.sl || 0), 0);
  return `<div class="bblok"><h3>${esc(LB.B.name)}</h3>
    ${SLOTY_A.map(s => `<div class="scr"><i>${ub(s)}</i><div class="scg">${LB.B.ab[s].map(a => scKnopka(a.id, BS.sc[s] === a.id, `data-bsc="${s}|${a.id}"`)).join("")}</div></div>`).join("")}
    <div class="scr"><i>${ub("asp")}</i><small class="tiho">${ub("aspHint")}</small><div class="scg">${LB.B.asp.map(a => scKnopka(a.id, BS.asp.includes(a.id), `data-basp="${a.id}"`, a.sl)).join("")}</div></div>
    <div class="scr"><i>${ub("frag")} ${BS.frag.length}/${slots}</i><small class="tiho">${ub("fragHint")(slots)}</small><div class="scg">${LB.B.frag.map(f => scKnopka(f.id, BS.frag.includes(f.id), `data-bfr="${f.id}"`, fragMetka(f))).join("")}</div></div>
    <div id="scOpis" class="tiho"></div></div>`;
}
const otkr = a => { const u2 = a.u; if (!u2) return ub("start");
  const [k, v] = Object.entries(u2)[0], tc = x => String(x).replace(/^(uc_|ev_|secret_)/, "").replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  return k === "rank" ? ub("rank")(v) : k === "wisps" ? ub("wisps")(v) : `${ub(k) || k}: ${k === "event" && LB.EVN?.[v] ? LB.EVN[v] : tc(v)}`; };

// ---------- итог ----------
function itog() {
  const R = raschet();
  const bar = s => `<div class="stat sg"><span>${statGl(s)}</span><span><b data-st="width:${Math.min(R.tot[s], 100)}%"></b></span><span>${R.tot[s]} <b class="tir">T${R.tier[s]}</b></span></div>`;
  const pushki = SLOTY_W.map(s => { const w = BS.w[s], inf = pushkaInfo(w); if (!inf) return "";
    const ur = URON[`${inf.arch}_${inf.fr}`], ids = perkiPushki(w).filter(id => !id.startsWith("frames:"));
    return `<div class="bit">${img(inf.ic)}<div><b>${esc(inf.n)}</b><div class="mperk">${ids.map(id => `<button class="perk" data-p="${id}">${pi(id)}</button>`).join("")}</div>${ur ? `<small class="tiho">${ub("dps")}: ${ur.dpsM} · ${u("perShot")}: ${yach(ur, "v")}</small>` : ""}</div></div>`; }).join("");
  const cdK = {super: "superTime", grenade: "grenadeCd", melee: "meleeCd", class: "classCd", movement: "dodgeCd"};
  const abil = `<div class="babil">${SLOTY_A.map(sl2 => { const ab = abInfo(BS.sc[sl2]);
    return `<span title="${esc(scN(ab))}"><img src="img/${ab.ic}.png" alt=""><b>${R.d[cdK[sl2]][0]}</b><small>${ub(sl2)}</small></span>`; }).join("")}</div>
    ${BS.asp.length || BS.frag.length ? `<div class="babil mal">${[...BS.asp, ...BS.frag].map(id => { const ab = abInfo(id); return `<span title="${esc(scN(ab))}"><img src="img/${ab.ic}.png" alt=""></span>`; }).join("")}</div>` : ""}`;
  return `<div class="bblok itog"><h3>${ub("sub")}</h3>${abil}<h3>${ub("stats")}</h3>${STATY.map(bar).join("")}
    <h3>${ub("derived")}</h3><table class="btab">${Object.entries(R.d).map(([k, v]) => `<tr><td>${dGl(k)}${ub(k + "S") || ub(k)}</td><td>${v[0]}</td></tr>`).join("")}</table>
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
function postavit(kl, v) {
  const [vid, s] = kl.split(":"), el = document.createElement("select");
  el.dataset[vid === "w" ? "bws" : "bas"] = s; el.innerHTML = `<option value="${v}">`; el.value = v;
  OTKR[kl] = false; obrSelect(el);
}
document.addEventListener("change", e => obrSelect(e.target));
function obrSelect(t) {
  if (t.dataset.bws) { const s = t.dataset.bws, v = t.value; if (!v) delete BS.w[s]; else { const [k, id] = [v[0], v.slice(2)];
      const msg = k === "e" && snyatEkzotik("w", s);
      BS.w[s] = k === "a" ? {k, id, fr: Object.keys(A[id].fr)[0], el: A[id].el[0]} : {k, id}; perersovat(); if (msg) $("#bMsg").textContent = ub("oneEx"); return; } perersovat(); }
  else if (t.dataset.bas) { const s = t.dataset.bas, v = t.value; if (!v) delete BS.a[s]; else { const k = v[0], id = k === "g" ? +v.slice(2) : v.slice(2);
      const msg = k === "e" && snyatEkzotik("a", s), inf = vesInfo(s, {k, id});
      BS.a[s] = {k, id, st: novyeStaty(inf, "max"), p: "max", mod: null}; VWARN[s] = ""; perersovat(); if (msg) $("#bMsg").textContent = ub("oneEx"); return; } perersovat(); }
  else if (t.dataset.bst) { const [s, stat] = t.dataset.bst.split("|"), x = BS.a[s], inf = vesInfo(s, x);
    const v = {...x.st, [stat]: Math.max(0, +t.value || 0)}, r = blizhajshij(v, inf.grp, inf.rng);
    x.st = r.st; x.p = null; VWARN[s] = r.tochno ? "" : ub("snapped"); perersovat(); }
  else if (t.dataset.btot) { const s = t.dataset.btot, x = BS.a[s], inf = vesInfo(s, x), T = +t.value;
    const pr = x.p || "avg"; x.st = rollIgry(T, inf.grp, RASKL[pr](inf.grp)); VWARN[s] = ""; perersovat(); }
}
document.addEventListener("click", e => {
  const t = e.target.closest("[data-bpr],[data-bpick],[data-bopen],[data-bclear],[data-bsc],[data-basp],[data-bfr],[data-bw],[data-bfix],[data-bwel],[data-bar],[data-bmod],#bCopy,#bReset");
  if (!t) return;
  const opis = id => { const a = abInfo(id); const o = $("#scOpis"); if (o) o.innerHTML = `<b>${esc(scN(a))}</b>${lang !== "en" && scN(a) !== a.n ? ` <small class="tiho">(${esc(a.n)})</small>` : ""} — ${esc(scD(a))}<br><small>${ub("unlock")}: ${esc(otkr(a))}</small>`; };
  if (t.dataset.bpick) { const i = t.dataset.bpick.indexOf("|", 2); postavit(t.dataset.bpick.slice(0, i), t.dataset.bpick.slice(i + 1)); return; }
  if (t.dataset.bopen) { OTKR[t.dataset.bopen] = !OTKR[t.dataset.bopen]; perersovat(); return; }
  if (t.dataset.bclear) { const [vid, s2] = t.dataset.bclear.split(":"); delete (vid === "w" ? BS.w : BS.a)[s2]; OTKR[t.dataset.bclear] = false; perersovat(); return; }
  if (t.dataset.bsc) { const [s, id] = t.dataset.bsc.split("|"); BS.sc[s] = id; perersovat(); opis(id); }
  else if (t.dataset.basp) { const id = t.dataset.basp; BS.asp = BS.asp.includes(id) ? BS.asp.filter(x => x !== id) : [...BS.asp, id].slice(-2);
    const sl2 = BS.asp.reduce((a, x) => a + (abInfo(x)?.sl || 0), 0); BS.frag = BS.frag.slice(0, sl2); perersovat(); opis(id); }
  else if (t.dataset.bfr) { const id = t.dataset.bfr, sl2 = BS.asp.reduce((a, x) => a + (abInfo(x)?.sl || 0), 0);
    BS.frag = BS.frag.includes(id) ? BS.frag.filter(x => x !== id) : BS.frag.length < sl2 ? [...BS.frag, id] : BS.frag; perersovat(); opis(id); }
  else if (t.dataset.bw) { const [s, pole, v] = t.dataset.bw.split("|"); const w = BS.w[s];
    const pref = {fr: "frames:", b: "barrels:", m: "magazines:", t1: "traits:", t2: "traits:", rt: "traits:", mw: "masterworks:"}[pole];
    BFOK[s] = pref + v;
    if (pole === "fr") w.fr = v.slice(w.id.length + 1); else w[pole] = w[pole] === v ? undefined : v; perersovat(); if (innerWidth < 860) info(BFOK[s]); }
  else if (t.dataset.bfix) { const [s, id] = t.dataset.bfix.split("|"); BFOK[s] = id; perersovat(); if (innerWidth < 860) info(id); }
  else if (t.dataset.bwel) { const [s, el] = t.dataset.bwel.split("|"); BS.w[s].el = el; perersovat(); }
  else if (t.dataset.bar) { const [s, r] = t.dataset.bar.split("|"); BS.a[s].r = r; const inf = vesInfo(s, BS.a[s]); if ((LB.MODC?.[BS.a[s].mod] ?? 0) > inf.en) BS.a[s].mod = null; perersovat(); }
  else if (t.dataset.bpr) { const [s, p2] = t.dataset.bpr.split("|"), x = BS.a[s], inf = vesInfo(s, x); x.p = p2; x.st = novyeStaty(inf, p2); VWARN[s] = ""; perersovat(); }
  else if (t.dataset.bmod != null) { const [s, m] = t.dataset.bmod.split("|"); BS.a[s].mod = m || null; perersovat(); }
  else if (t.id === "bCopy") { sohranit(); const done = () => { $("#bMsg").textContent = ub("copied"); };
    navigator.clipboard?.writeText(location.href).then(done, () => { prompt(ub("copy"), location.href); }); }
  else if (t.id === "bReset") { BS = novyjBild(); perersovat(); }
});
