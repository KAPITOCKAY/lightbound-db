const {P, A, god, mw, ex, ws, as: AS, rc, T, K, EXR, pc, URON} = window.LB;
const RAR = ["common", "uncommon", "rare", "legendary"];
const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"}[c]));

// ---------- язык ----------
const U = {
  ru: {dmg: "Урон", perShot: "За выстрел", head: "В голову", rpmL: "Выстр./мин", magL: "Магазин", dpsL: "Урон/сек", dpsHL: "Урон/сек в голову", dpsML: "Урон/сек с перезарядкой", weapon: "Оружие", frameL: "Фрейм",
    dmgIntro: "Чистые цифры по формулам из кода игры: урон выстрела × скорострельность, у плазменных винтовок учтено время заряда, у пулемёта «Литания» — раскрутка. По боссам игра режет урон основного оружия до ×0.85 и усиливает тяжёлое до ×1.1. «С перезарядкой» — если стрелять весь бой (магазин + перезарядка). Эффекты экзотик-перков и трейтов НЕ учтены. У дробовиков и плазменных — если попали все дробины. Нажмите на заголовок колонки, чтобы отсортировать.",
    dmgCompare: t => `Сравнение с легендарками «${t}»`, exExtra: "Плюс экзотик-перк сверху (в цифрах не учтён)", exRule: t => `★ — трейты из гудроллов типа «${t}»: правило игры для легендарок того же типа. Они стоят первыми.`, topT: "Лучшие случайные трейты", topNote: "Это наша оценка по экзотик-перку и фрейму, а не правило игры. В колонке они стоят первыми.", exStar: "★ — сильные трейты: входят в гудроллы игры. Они стоят первыми.", rarity: "Редкость", drops: n => n ? `выпадает ${n}` : "не выпадает", frame: "Фрейм", random: "Случайный трейт",
    rollAny: r => `${U.ru.rar[r]} · любой ролл`, noGodRar: "Гудроллы бывают только у легендарок: на них выпадают обе колонки трейтов.",
    rarInfo: r => r === "common" ? "Обычное оружие выпадает без перков: только фрейм." : `В каждой колонке выпадает столько перков из списка, сколько указано в заголовке.`,
    exFixed2: "Фрейм, ствол, магазин и экзотик-перк у экзотика всегда одинаковые. Случайна только колонка «Случайный трейт»: выпадает 1 трейт из списка, его можно перекрутить модулем настройки (Tuning Module, кнопка TUNE).", col: "Коллекция", secs: {skiffs: "Скиффы", ships: "Корабли", emblems: "Эмблемы", transmats: "Транспортации", shells: "Оболочки Призрака", items: "Предметы и материалы", lore: "Лор (записи)"},
    speed: "Скорость", rollsIn: "Выпадает в редкости", shellPerks: "Перки оболочек (случайные, их число зависит от редкости)", maxStack: "Максимум в стопке",
    loreNote: "Записи на английском и со спойлерами сюжета — нажмите, чтобы открыть.", rar: {common: "Обычный", uncommon: "Необычный", rare: "Редкий", legendary: "Легендарный", exotic: "Экзотический"}, weapons: "Оружие", godrolls: "Гудроллы", armor: "Броня", all: "Все", search: "Поиск по названию", nothing: "Ничего не найдено",
    anyRoll: "Легендарка · любой ролл", set: "сет", exotic: "экзотик", where: "где", ammo: "патроны",
    legInfo: "Легендарка: 1 ствол, 1 магазин, по 3 трейта в каждой из двух колонок.", elements: "Стихии",
    elFilter: "Стихия (часть трейтов только для своей стихии)", allPerks: "Все перки, которые могут выпасть",
    barrel: "Ствол", mag: "Магазин", t1: "Трейт 1", t2: "Трейт 2", mwork: "Мастерворк", setPerk: "Сетовый перк",
    exPerk: "Экзотик-перк", reson: "Резонатор", perks: "Перки", starHint: "★ — перк гудролла, который собирается на этом стволе. Нажмите на перк, чтобы прочитать, что он делает.",
    godFor: "Гудроллы для", frames: "Фреймы", base: "Базовые статы", noGod: "Ни один гудролл на это оружие не выпадает.",
    highlight: "Подсветить в колонках", otherSet: "Другие стволы сета", exFixed: "У экзотиков ролл фиксированный: что выпало, то и лучшее. Гудроллов-трейтов у них нет.",
    godIntro: "18 пар трейтов, которые игра сама отмечает как «God Roll». Под каждым — пушки, на которые он может выпасть (нажмите, чтобы открыть).",
    types: "Типы оружия (случайная легендарка)", named: "Именные стволы", exArmor: "Экзотическая броня", bestStats: "лучшие статы",
    tapArmor: "Нажмите на предмет, чтобы прочитать его экзотик-перк.", armorSets: "Сеты брони",
    armorGod: s => `Гудролл (наш совет): максимум в <b>${s}</b> — сет роллится в эти статы.`, mods: "Моды брони",
    groups: "Статы обычной брони роллятся группами", close: "Закрыть"},
  en: {dmg: "Damage", perShot: "Per shot", head: "Precision", rpmL: "RPM", magL: "Magazine", dpsL: "DPS", dpsHL: "Precision DPS", dpsML: "Sustained DPS", weapon: "Weapon", frameL: "Frame",
    dmgIntro: "Raw numbers using the game code's formulas: shot damage × fire rate, fusion charge time and the Litany spin-up included. Against bosses the game cuts primary damage to ×0.85 and raises heavy to ×1.1. Sustained = firing the whole fight (magazine + reload). Exotic perks and traits are NOT included. Shotguns and fusions assume every pellet hits. Tap a column header to sort.",
    dmgCompare: t => `Compared with ${t} legendaries`, exExtra: "Plus the exotic perk on top (not in the numbers)", exRule: t => `★ — traits from ${t} god rolls: the game's rule for legendaries of the same type. Listed first.`, topT: "Best random traits", topNote: "Our pick based on the exotic perk and frame, not a game rule. They are listed first in the column.", exStar: "★ — strong traits: part of the game's god rolls. Listed first.", rarity: "Rarity", drops: n => n ? `rolls ${n}` : "doesn't roll", frame: "Frame", random: "Random trait",
    rollAny: r => `${U.en.rar[r]} · any roll`, noGodRar: "God rolls only exist on legendaries: only they roll both trait columns.",
    rarInfo: r => r === "common" ? "Common weapons drop with no perks: frame only." : "Each column rolls as many perks from the list as its header says.",
    exFixed2: "An exotic's frame, barrel, magazine and exotic perk are always the same. Only the Random trait column varies: 1 trait from this list, rerollable with a Tuning Module (TUNE).", col: "Collection", secs: {skiffs: "Skiffs", ships: "Ships", emblems: "Emblems", transmats: "Transmats", shells: "Wisp Shells", items: "Items & materials", lore: "Lore"},
    speed: "Speed", rollsIn: "Drops at rarity", shellPerks: "Shell perks (random, count depends on rarity)", maxStack: "Max stack",
    loreNote: "Story spoilers — tap to open.", rar: {common: "Common", uncommon: "Uncommon", rare: "Rare", legendary: "Legendary", exotic: "Exotic"}, weapons: "Weapons", godrolls: "God Rolls", armor: "Armor", all: "All", search: "Search by name", nothing: "Nothing found",
    anyRoll: "Legendary · any roll", set: "set", exotic: "exotic", where: "source", ammo: "ammo",
    legInfo: "Legendary: 1 barrel, 1 magazine, 3 traits in each of two columns.", elements: "Elements",
    elFilter: "Element (some traits only roll on their element)", allPerks: "Every perk that can roll",
    barrel: "Barrel", mag: "Magazine", t1: "Trait 1", t2: "Trait 2", mwork: "Masterwork", setPerk: "Set perk",
    exPerk: "Exotic perk", reson: "Resonator", perks: "Perks", starHint: "★ — part of a god roll that can drop on this weapon. Tap a perk to read what it does.",
    godFor: "God rolls for", frames: "Frames", base: "Base stats", noGod: "No god roll can drop on this weapon.",
    highlight: "Highlight in columns", otherSet: "Other weapons in the set", exFixed: "Exotics have a fixed roll: no trait god rolls.",
    godIntro: "18 trait pairs the game itself marks as “God Roll”. Below each: the weapons it can drop on (tap to open).",
    types: "Weapon types (random legendary)", named: "Named weapons", exArmor: "Exotic armor", bestStats: "best stats",
    tapArmor: "Tap an item to read its exotic perk.", armorSets: "Armor sets",
    armorGod: s => `God roll (our advice): max <b>${s}</b> — the set rolls into these stats.`, mods: "Armor mods",
    groups: "Regular armor stats roll in groups", close: "Close"},
  de: {dmg: "Schaden", perShot: "Pro Schuss", head: "Präzision", rpmL: "SPM", magL: "Magazin", dpsL: "DPS", dpsHL: "Präzisions-DPS", dpsML: "Dauer-DPS", weapon: "Waffe", frameL: "Rahmen",
    dmgIntro: "Reine Zahlen nach den Formeln des Spielcodes: Schussschaden × Feuerrate, inkl. Ladezeit der Fusionsgewehre und Hochdrehen der Litanei. Gegen Bosse senkt das Spiel Primärschaden auf ×0.85 und hebt schwere Waffen auf ×1.1. Dauer = den ganzen Kampf feuern (Magazin + Nachladen). Exotische Perks und Eigenschaften sind NICHT enthalten. Schrotflinten und Fusionsgewehre: alle Projektile treffen. Spaltentitel antippen zum Sortieren.",
    dmgCompare: t => `Vergleich mit legendären ${t}`, exExtra: "Plus der exotische Perk obendrauf (nicht in den Zahlen)", exRule: t => `★ — Eigenschaften aus den God Rolls für ${t}: die Spielregel für Legendäre desselben Typs. Stehen oben.`, topT: "Beste zufällige Eigenschaften", topNote: "Unsere Wahl nach exotischem Perk und Rahmen, keine Spielregel. Sie stehen in der Spalte oben.", exStar: "★ — starke Eigenschaften: Teil der God Rolls des Spiels. Stehen oben.", rarity: "Seltenheit", drops: n => n ? `rollt ${n}` : "rollt nicht", frame: "Rahmen", random: "Zufällige Eigenschaft",
    rollAny: r => `${U.de.rar[r]} · beliebiger Roll`, noGodRar: "God Rolls gibt es nur bei Legendären: nur sie rollen beide Eigenschaftsspalten.",
    rarInfo: r => r === "common" ? "Gewöhnliche Waffen droppen ohne Perks: nur der Rahmen." : "Jede Spalte rollt so viele Perks aus der Liste, wie im Titel steht.",
    exFixed2: "Rahmen, Lauf, Magazin und exotischer Perk eines Exotics sind immer gleich. Nur die Spalte Zufällige Eigenschaft variiert: 1 Eigenschaft aus dieser Liste, neu rollbar mit einem Tuning-Modul (TUNE).", col: "Sammlung", secs: {skiffs: "Skiffs", ships: "Schiffe", emblems: "Embleme", transmats: "Transmat-Effekte", shells: "Wisp-Hüllen", items: "Gegenstände & Materialien", lore: "Lore"},
    speed: "Tempo", rollsIn: "Droppt in Seltenheit", shellPerks: "Hüllen-Perks (zufällig, Anzahl je nach Seltenheit)", maxStack: "Max. Stapel",
    loreNote: "Auf Englisch, mit Story-Spoilern — antippen zum Öffnen.", rar: {common: "Gewöhnlich", uncommon: "Ungewöhnlich", rare: "Selten", legendary: "Legendär", exotic: "Exotisch"}, weapons: "Waffen", godrolls: "God Rolls", armor: "Rüstung", all: "Alle", search: "Nach Namen suchen", nothing: "Nichts gefunden",
    anyRoll: "Legendär · beliebiger Roll", set: "Set", exotic: "exotisch", where: "Quelle", ammo: "Munition",
    legInfo: "Legendär: 1 Lauf, 1 Magazin, je 3 Eigenschaften in zwei Spalten.", elements: "Elemente",
    elFilter: "Element (manche Eigenschaften nur für ihr Element)", allPerks: "Alle möglichen Perks",
    barrel: "Lauf", mag: "Magazin", t1: "Eigenschaft 1", t2: "Eigenschaft 2", mwork: "Meisterwerk", setPerk: "Set-Perk",
    exPerk: "Exotischer Perk", reson: "Resonator", perks: "Perks", starHint: "★ — Teil eines God Rolls, der auf dieser Waffe droppen kann. Tippe auf einen Perk für die Beschreibung.",
    godFor: "God Rolls für", frames: "Rahmen", base: "Grundwerte", noGod: "Auf dieser Waffe droppt kein God Roll.",
    highlight: "In Spalten markieren", otherSet: "Weitere Waffen des Sets", exFixed: "Exotics haben einen festen Roll: keine God Rolls.",
    godIntro: "18 Eigenschaftspaare, die das Spiel selbst als „God Roll“ markiert. Darunter: die Waffen, auf denen er droppen kann (antippen zum Öffnen).",
    types: "Waffentypen (zufällig legendär)", named: "Benannte Waffen", exArmor: "Exotische Rüstung", bestStats: "beste Werte",
    tapArmor: "Tippe auf ein Teil für seinen exotischen Perk.", armorSets: "Rüstungssets",
    armorGod: s => `God Roll (unser Tipp): maximal <b>${s}</b> — das Set rollt in diese Werte.`, mods: "Rüstungsmods",
    groups: "Normale Rüstungswerte rollen in Gruppen", close: "Schließen"},
};
Object.assign(U.ru, {exoticsH: "Экзотики", tapPerk: "Нажмите на перк: тут появится описание, а сам перк попадёт в ваш ролл. Статы справа пересчитаются.", yourRoll: "Ваш ролл", rollHint: "Выберите по перку в колонках — соберётся ролл.", isGod: "Это гудролл", reset: "Сбросить", starHint2: "★ — перк гудролла. Наведите на иконку, чтобы увидеть название.", useGod: "Собрать этот ролл", more: "Подробнее", statsL: "Статы"});
Object.assign(U.en, {exoticsH: "Exotics", tapPerk: "Tap a perk: its description shows here and it goes into your roll. The stats update.", yourRoll: "Your roll", rollHint: "Pick one perk per column to build a roll.", isGod: "This is a god roll", reset: "Reset", starHint2: "★ — god-roll perk. Hover an icon to see its name.", useGod: "Build this roll", more: "More", statsL: "Stats"});
Object.assign(U.de, {exoticsH: "Exotics", tapPerk: "Tippe auf einen Perk: hier erscheint die Beschreibung, und er kommt in deinen Roll. Die Werte aktualisieren sich.", yourRoll: "Dein Roll", rollHint: "Wähle je einen Perk pro Spalte für deinen Roll.", isGod: "Das ist ein God Roll", reset: "Zurücksetzen", starHint2: "★ — God-Roll-Perk. Fahre über ein Icon für den Namen.", useGod: "Diesen Roll bauen", more: "Mehr", statsL: "Werte"});
const SLOV = { // короткие игровые слова
  ru: {kinetic: "Кинетика", arc: "Молния", ember: "Огонь", void: "Пустота", helmet: "Шлем", gauntlets: "Перчатки", chest: "Нагрудник", legs: "Ботинки", cloak: "Плащ",
    primary: "основные", special: "особые", heavy: "тяжёлые", range: "Дальность", stability: "Стабильность", handling: "Удобство", reload: "Перезарядка", magnetism: "Магнетизм",
    accuracy: "Точность", mobility: "Мобильность", resilience: "Стойкость", recovery: "Восстановление", discipline: "Дисциплина", intellect: "Интеллект", strength: "Сила"},
  en: {kinetic: "Kinetic", arc: "Arc", ember: "Ember", void: "Void", helmet: "Helmet", gauntlets: "Gauntlets", chest: "Chest", legs: "Legs", cloak: "Cloak",
    primary: "primary", special: "special", heavy: "heavy", range: "Range", stability: "Stability", handling: "Handling", reload: "Reload", magnetism: "Magnetism",
    accuracy: "Accuracy", mobility: "Mobility", resilience: "Resilience", recovery: "Recovery", discipline: "Discipline", intellect: "Intellect", strength: "Strength"},
  de: {kinetic: "Kinetisch", arc: "Arkus", ember: "Glut", void: "Leere", helmet: "Helm", gauntlets: "Handschuhe", chest: "Brustschutz", legs: "Beinschutz", cloak: "Umhang",
    primary: "Primär", special: "Spezial", heavy: "Schwer", range: "Reichweite", stability: "Stabilität", handling: "Handhabung", reload: "Nachladen", magnetism: "Magnetismus",
    accuracy: "Genauigkeit", mobility: "Mobilität", resilience: "Belastbarkeit", recovery: "Erholung", discipline: "Disziplin", intellect: "Intellekt", strength: "Stärke"},
};
let lang = (() => { try { return localStorage.getItem("lang"); } catch { return null; } })()
  || ({ru: "ru", de: "de"}[navigator.language.slice(0, 2)] || "en");
const FOOT = {"ru": "Все модели, иконки, названия и описания предметов взяты из игры <a href=\"https://cobalttornado1.itch.io/lightbound\">LIGHTBOUND</a> — автор William Worth, лицензия <a href=\"https://creativecommons.org/licenses/by-nc-sa/4.0/\">CC BY-NC-SA 4.0</a>. Иконки показаны без изменений. Переводы на русский и немецкий сделаны нами и распространяются по той же лицензии. Некоммерческий фан-проект, не связан с William Worth и Bungie.", "en": "All models, icons, item names and descriptions are from <a href=\"https://cobalttornado1.itch.io/lightbound\">LIGHTBOUND</a> by William Worth, licensed under <a href=\"https://creativecommons.org/licenses/by-nc-sa/4.0/\">CC BY-NC-SA 4.0</a>. Icons are shown unmodified. Russian and German translations are ours, shared under the same license. Non-commercial fan project, not affiliated with William Worth or Bungie.", "de": "Alle Modelle, Icons, Namen und Beschreibungen stammen aus <a href=\"https://cobalttornado1.itch.io/lightbound\">LIGHTBOUND</a> von William Worth, lizenziert unter <a href=\"https://creativecommons.org/licenses/by-nc-sa/4.0/\">CC BY-NC-SA 4.0</a>. Icons werden unverändert gezeigt. Die russische und deutsche Übersetzung stammt von uns und steht unter derselben Lizenz. Nicht-kommerzielles Fanprojekt, nicht verbunden mit William Worth oder Bungie."};
const u = k => U[lang][k];
const sl = k => SLOV[lang][k] || k;
const tx = (key, i, orig) => (lang !== "en" && T[lang]?.[key]?.[i]) || orig; // перевод игровых текстов
const frKey = id => { const x = id.slice(7), k = Object.keys(A).find(k => x.startsWith(k + "_")); return k ? `F|${k}|${x.slice(k.length + 1)}` : "P|" + id; };
const trKey = id => id.startsWith("frames:") ? frKey(id) : id.startsWith("skiffperk:") ? "SP|" + id.slice(10) : id.startsWith("wispperk:") ? "WP|" + id.slice(9) : "P|" + id;
const pName = id => tx(trKey(id), 0, P[id]?.n || id.split(":")[1]);
const aName = k => tx("A|" + k, 0, A[k].n);

const elem = e => `<span class="el-${e}">${sl(e)}</span>`;
const img = (i, big) => `<span class="ic${big ? " big" : ""}"><img src="img/${i}.png" alt="" loading="lazy"></span>`;

// CSP сервера запрещает style="" в HTML, поэтому стили ставим через JS
const stili = root => root.querySelectorAll("[data-st]").forEach(el => el.dataset.st.split(";").forEach(d => {
  const i = d.indexOf(":"); if (i > 0) el.style.setProperty(d.slice(0, i).trim(), d.slice(i + 1).trim());
}));
const pi = id => {
  if (P[id]?.gl) return `<img class="pi" src="img/${P[id].gl}" alt="">`;
  const n = P[id]?.i;
  return n == null ? `<span class="pi"></span>` : `<span class="pi" data-st="background-position:-${n % 16 * 28}px -${Math.floor(n / 16) * 28}px"></span>`;
};
const GOD_PERKS = new Set(god.flatMap(g => [g.a, g.b]));
let ZV = GOD_PERKS; // звёздочки: только перки гудроллов, которые реально собираются на этом стволе
const zvezdy = gs => (ZV = new Set(gs.flatMap(g => [g.a, g.b])), gs);
const perk = (id, extra = "") => {
  const g = id.startsWith("traits:") && ZV.has(id.split(":")[1]);
  return `<button class="perk${g ? " god" : ""} ${extra}" data-p="${id}">${pi(id)}<span>${esc(pName(id))}</span>${g ? '<span class="zv">★</span>' : ""}</button>`;
};
const zv = id => id.startsWith("traits:") && ZV.has(id.split(":")[1]);
// гудролл-перки (★) всегда наверху колонки, порядок остальных не меняется; пустые id (у меча нет ствола) отбрасываем
const kol = (title, ids, sub) => { ids = ids.filter(x => !/:(null|undefined)?$/.test(x)); ids = [...ids.filter(zv), ...ids.filter(x => !zv(x))];
  return `<div class="kol${sub === 0 ? " pusto" : ""}"><i>${title}${sub != null ? `<br><small>${u("drops")(sub)}</small>` : ""}</i>${ids.map(x => perk(x)).join("") || '<span class="tiho">—</span>'}</div>`; }

// все варианты оружия: тип (случайная легендарка), именная легендарка из сета, экзотик
const ORUZHIE = [
  ...RAR.flatMap(r => Object.keys(A).map(k => ({url: `w/a/${k}/${r}`, n: () => aName(k), en: A[k].n, sub: () => u("rollAny")(r), ic: A[k].ic, arch: k, c: rc[r], r}))),
  ...Object.entries(ws).flatMap(([s, set]) => Object.entries(set.items).map(([k, w]) =>
    ({url: `w/s/${s}/${k}`, n: () => w.name, en: w.name, sub: () => `${aName(w.arch)} · ${u("set")} ${set.name}`, ic: w.icon, arch: w.arch, el: w.element, c: rc.legendary, r: "legendary",
      t: w.traits}))),
  ...Object.entries(ex).filter(([, e]) => e.kind === "weapon").map(([k, e]) =>
    ({url: `w/e/${k}`, n: () => e.name, en: e.name, sub: () => `${aName(e.arch)} · ${u("exotic")}`, ic: e.icon, arch: e.arch, el: e.element, c: rc.exotic, r: "exotic"})),
];
const kartochka = o => `<a class="kar" href="#/${o.url}" data-st="--c:${o.c}">${img(o.ic)}<span><b>${esc(o.n())}</b><small>${esc(o.sub())}${o.el ? " · " + elem(o.el) : ""}</small></span></a>`;

let filtr = "", poisk = "", rar = "";
const plitka = o => `<a class="plit" href="#/${o.url}" data-st="--c:${o.c}"><span class="plit-ik"><img src="img/${o.ic}.png" alt="" loading="lazy"></span>
  <b>${esc(o.n())}</b><small>${esc(o.url.startsWith("w/a/") ? u("rar")[o.r] : aName(o.arch))}${o.el ? " · " + elem(o.el) : ""}</small></a>`;
function stranicaOruzhie() {
  // без фильтра редкости тип оружия показываем один раз (легендаркой), иначе — плитки нужной редкости
  const vid = ORUZHIE.filter(o => (rar ? o.r === rar : !(o.url.startsWith("w/a/") && o.r !== "legendary"))
    && (!filtr || o.arch === filtr) && (!poisk || (o.n() + " " + o.en).toLowerCase().includes(poisk)));
  const razd = [["exotic", o => o.r === "exotic"], ["named", o => o.url.startsWith("w/s/")], ["types", o => o.url.startsWith("w/a/")]]
    .map(([k, f]) => [k, vid.filter(f)]).filter(([, v]) => v.length);
  return `<h2>${u("weapons")}</h2>
  <div class="panel"><input class="poisk" id="poisk" placeholder="${u("search")}" value="${esc(poisk)}">
  <select id="selRar"><option value="">${u("rarity")}: ${u("all")}</option>${[...RAR, "exotic"].map(r => `<option value="${r}"${rar === r ? " selected" : ""}>${u("rar")[r]}</option>`).join("")}</select>
  <select id="selTip"><option value="">${u("weapon")}: ${u("all")}</option>${Object.keys(A).map(k => `<option value="${k}"${filtr === k ? " selected" : ""}>${esc(aName(k))}</option>`).join("")}</select></div>
  ${razd.map(([k, v]) => `<h3>${k === "exotic" ? u("exoticsH") : u(k)} <span class="tiho">${v.length}</span></h3><div class="plitki">${v.map(plitka).join("")}</div>`).join("") || `<p class="tiho">${u("nothing")}</p>`}`;
}

const godDlya = (t1, t2) => god.filter(g => t1.includes(g.a) && t2.includes(g.b));
const gName = g => tx("G|" + g.id, 0, g.name), gWhy = g => tx("G|" + g.id, 1, g.why);
const statBlok = base => Object.entries(base).map(([k, v]) =>
  `<div class="stat"><span>${sl(k)}</span><span><b data-st="width:${Math.min(v, 100)}%"></b></span><span>${v}</span></div>`).join("");
const godSpisok = gs => gs.length ? gs.map(g => `<div class="gr"><b class="n">★ ${esc(gName(g))}</b>
  <div class="para">${perk("traits:" + g.a)}${perk("traits:" + g.b)}</div><p>${esc(gWhy(g))}</p>
  <button class="chip" data-god="${g.a},${g.b}">${u("highlight")}</button></div>`).join("")
  : `<p class="tiho">${u("noGod")}</p>`;

// ---------- страница оружия: перки иконками, справа описание, ролл, статы и урон ----------
let ROLL = {}, ROLL_URL = "", FOKUS = null;
const pk = (col, id, fixed) => { const g = zv(id), sel = ROLL[col] === id, n = pName(id);
  return `<button class="pk${g ? " god" : ""}${sel ? " vyb" : ""}${fixed ? " fix" : ""}" data-pk="${col}|${id}" title="${esc(n)}" aria-label="${esc(n)}">${pi(id)}${g ? "<i>★</i>" : ""}</button>`; };
const wkol = (col, title, ids, sub, fixed) => { ids = ids.filter(x => !/:(null|undefined)?$/.test(x)); ids = [...ids.filter(zv), ...ids.filter(x => !zv(x))];
  if (fixed && ids.length === 1 && ROLL[col] == null) ROLL[col] = ids[0];
  return `<div class="wk${sub === 0 ? " pusto" : ""}${ids.length > 14 ? " shir" : ids.length > 8 ? " dve" : ""}"><b>${title}</b>${sub != null ? `<small>${u("drops")(sub)}</small>` : ""}<div class="wk-g">${ids.map(x => pk(col, x, fixed)).join("") || '<span class="tiho">—</span>'}</div></div>`; };
function statyRoll(arch) {
  const plus = {};
  for (const id of Object.values(ROLL)) for (const [k, v] of Object.entries(P[id]?.st || {})) plus[k] = (plus[k] || 0) + v;
  return Object.entries(A[arch].base).map(([k, v]) => { const d = plus[k] || 0, t = Math.max(0, Math.min(100, v + d));
    return `<div class="stat"><span>${sl(k)}</span><span><b data-st="width:${Math.min(v, t)}%"></b>${d > 0 ? `<b class="plus" data-st="width:${t - v}%"></b>` : d < 0 ? `<b class="minus" data-st="width:${v - t}%"></b>` : ""}</span><span>${t}${d ? ` <small class="${d > 0 ? "zel" : "plokho"}">${d > 0 ? "+" : ""}${d}</small>` : ""}</span></div>`; }).join("");
}
function bokovaya(arch, frame) {
  const fr = ROLL.fr ? ROLL.fr.slice(("frames:" + arch + "_").length) : frame, ur = URON[`${arch}_${fr}`];
  const mp = Object.values(ROLL).reduce((a, id) => a + (P[id]?.mp || 0), 0);
  const f = FOKUS && P[FOKUS];
  const fok = f ? `<div class="wfok"><div>${pi(FOKUS)}<b>${esc(pName(FOKUS))}</b>${f.e ? " · " + elem(f.e) : ""}</div><p>${esc(tx(trKey(FOKUS), 1, f.d))}</p></div>` : `<p class="tiho">${u("tapPerk")}</p>`;
  const sel = Object.values(ROLL).filter(Boolean);
  const t1 = ROLL.t1?.split(":")[1], t2 = ROLL.t2?.split(":")[1], gr = t1 && t2 && god.find(g => g.a === t1 && g.b === t2);
  return `<aside class="wside"><div class="wcard">${fok}</div>
    <div class="wcard"><h3>${u("yourRoll")}</h3>${sel.length ? `<div class="wroll">${sel.map(id => `<button data-p="${id}">${pi(id)}<span>${esc(pName(id))}</span></button>`).join("")}</div>` : `<p class="tiho">${u("rollHint")}</p>`}
      ${gr ? `<p class="zolt">★ ${u("isGod")}: ${esc(gName(gr))}</p>` : ""}${sel.length ? `<button class="chip" data-rollreset="1">${u("reset")}</button>` : ""}</div>
    <div class="wcard"><h3>${u("statsL")}</h3>${statyRoll(arch)}</div>
    ${ur ? `<div class="wcard"><h3>${u("dmg")}</h3><table class="btab">
      <tr><td>${u("perShot")}</td><td>${yach(ur, "v")}</td></tr><tr><td>${u("head")}</td><td>${yach(ur, "k")}</td></tr><tr><td>${u("rpmL")}</td><td>${ur.rpm}</td></tr>
      <tr><td>${u("magL")}</td><td>${mp ? `${Math.round(ur.mag * (1 + mp))} <small class="zel">(${ur.mag})</small>` : ur.mag}</td></tr>
      <tr><td>${u("dpsL")}</td><td>${ur.dps}</td></tr><tr><td>${u("dpsML")}</td><td>${ur.dpsM}</td></tr></table></div>` : ""}</aside>`;
}
const wStranica = (shapka, filtry, cols, arch, frame, niz) => `${shapka}${filtry}<div class="wgrid"><div class="wmain"><div class="wkols">${cols}</div>
  <p class="tiho">${u("starHint2")}</p></div>${bokovaya(arch, frame)}</div>${niz}`;
const godKarty = gs => gs.length ? `<div class="gods">${gs.map(g => `<div class="godk"><b>★ ${esc(gName(g))}</b>
  <div class="godp">${["a", "b"].map(x => `<button data-p="traits:${g[x]}">${pi("traits:" + g[x])}<span>${esc(pName("traits:" + g[x]))}</span></button>`).join("")}</div>
  <p>${esc(gWhy(g))}</p><button class="chip" data-god="${g.a},${g.b}">${u("useGod")}</button></div>`).join("")}</div>` : `<p class="tiho">${u("noGod")}</p>`;
const podrobnee = html => `<details class="podr"><summary>${u("more")}</summary>${html}</details>`;

function stranicaTip(k, r) {
  const a = A[k]; r = RAR.includes(r) ? r : "legendary";
  const c = pc[r], pref = p => x => p + x, gs = zvezdy(r === "legendary" ? godDlya(a.t1, a.t2) : []);
  const shapka = `<div class="shapka" data-st="--c:${rc[r]}">${img(a.ic, 1)}<div><h1>${esc(aName(k))}</h1><p>${u("rarInfo")(r)}</p>
  <small class="tiho">${u("elements")}: ${a.el.map(elem).join(", ")} · ${u("ammo")}: ${sl(a.ammo)}</small></div></div>`;
  const filtry = `<div class="wfil"><div class="fil">${RAR.map(x => `<a class="chip${x === r ? " akt" : ""}" href="#/w/a/${k}/${x}" data-st="color:${rc[x]}">${u("rar")[x]}</a>`).join("")}</div>
  <div class="fil" id="elFil"><button data-el="" class="akt">${u("all")}</button>${a.el.map(e => `<button data-el="${e}">${sl(e)}</button>`).join("")}</div></div>`;
  const cols = wkol("fr", u("frame"), Object.keys(a.fr).map(f => `frames:${k}_${f}`), 1) + wkol("b", u("barrel"), a.b.map(pref("barrels:")), c.barrel)
    + wkol("m", u("mag"), a.m.map(pref("magazines:")), c.magazine) + wkol("t1", u("t1"), a.t1.map(pref("traits:")), c.trait1)
    + wkol("t2", u("t2"), a.t2.map(pref("traits:")), c.trait2) + wkol("mw", u("mwork"), mw.map(pref("masterworks:")));
  const niz = `<h2>${u("godFor")} ${esc(aName(k))}</h2>${r === "legendary" ? godKarty(gs) : `<p class="tiho">${u("noGodRar")}</p>`}
  ${podrobnee(`<h2>${u("frames")}</h2>${Object.entries(a.fr).map(([f, v]) => `<div class="gr"><b class="n">${esc(tx(`F|${k}|${f}`, 0, v.n))}</b><p>${esc(tx(`F|${k}|${f}`, 1, v.d))}</p></div>`).join("")}${uronBlok(k, "")}`)}`;
  return wStranica(shapka, filtry, cols, k, Object.keys(a.fr)[0], niz);
}

function stranicaSet(s, k) {
  const set = ws[s], w = set.items[k], a = A[w.arch];
  const [t1, t2] = w.traits, gs = zvezdy(godDlya(t1, t2));
  const shapka = `<div class="shapka" data-st="--c:${set.colour}">${img(w.icon, 1)}<div><h1>${esc(w.name)}</h1>
  <p>${esc(aName(w.arch))} · ${elem(w.element)} · ${esc(tx(`F|${w.arch}|${w.frame}`, 0, a.fr[w.frame]?.n || w.frame))}</p>
  <small class="tiho">${u("set")} ${esc(set.name)} · ${u("where")}: ${esc(tx("WS|" + s, 0, set.source))}</small></div></div>`;
  const cols = wkol("fr", u("frame"), [`frames:${w.arch}_${w.frame}`], null, 1) + wkol("b", u("barrel"), ["barrels:" + w.barrel], null, 1) + wkol("m", u("mag"), ["magazines:" + w.magazine], null, 1)
    + wkol("t1", u("t1"), t1.map(x => "traits:" + x)) + wkol("t2", u("t2"), t2.map(x => "traits:" + x)) + wkol("sp", u("setPerk"), ["set_perks:" + set.perk], null, 1);
  const niz = `<h2>${u("godrolls")}</h2>${godKarty(gs)}${podrobnee(uronBlok(w.arch, w.frame))}
  <h3>${u("otherSet")}</h3><div class="g">${ORUZHIE.filter(o => o.url.startsWith(`w/s/${s}/`) && !o.url.endsWith("/" + k)).map(kartochka).join("")}</div>`;
  return wStranica(shapka, "", cols, w.arch, w.frame, niz);
}

function stranicaEkzotik(k) {
  const e = ex[k], a = A[e.arch], ik = P["intrinsics:" + k] ? k : k.replace(/^the_/, "");
  const gsTip = godDlya(a.t1, a.t2), pul = new Set(EXR[k] || []);
  ZV = new Set(gsTip.flatMap(g => [g.a, g.b]).filter(x => pul.has(x)));
  const shapka = `<div class="shapka" data-st="--c:${rc.exotic}">${img(e.icon, 1)}<div><h1>${esc(e.name)}</h1>
  <p>${esc(tx("X|" + k, 1, e.flavor))}</p><small class="tiho">${esc(aName(e.arch))} · ${elem(e.element)} · ${u("where")}: ${esc(tx("X|" + k, 2, e.how))}</small></div></div>`;
  if (FOKUS == null) FOKUS = "intrinsics:" + ik;
  const cols = wkol("fr", u("frame"), [`frames:${e.arch}_${e.frame}`], null, 1) + wkol("ex", u("exPerk"), ["intrinsics:" + ik], null, 1)
    + (e.barrel ? wkol("b", u("barrel"), ["barrels:" + e.barrel], null, 1) : "") + (e.magazine ? wkol("m", u("mag"), ["magazines:" + e.magazine], null, 1) : "")
    + wkol("t1", u("random"), (EXR[k] || []).map(x => "traits:" + x), 1) + wkol("mw", u("mwork"), ["masterworks:" + e.masterwork], null, 1)
    + (P["resonators:" + ik] ? wkol("rs", u("reson"), ["resonators:" + ik], null, 1) : "");
  const niz = `<p class="tiho">${u("exFixed2")}</p><p class="tiho">${u("exRule")(aName(e.arch))}</p>
  ${podrobnee(uronBlok(e.arch, e.frame, k) + `<h2>${u("godFor")} ${esc(aName(e.arch))}</h2>${godKarty(gsTip)}`)}`;
  return wStranica(shapka, "", cols, e.arch, e.frame, niz);
}

const mini = (href, ic, n, zol) => `<a class="mini${zol ? " zol" : ""}" href="#/${href}"><img src="img/${ic}.png" alt="" loading="lazy"><span>${esc(n)}</span></a>`;
const mt = (href, ic, n, zol) => `<a class="mt${zol ? " zol" : ""}" href="#/${href}" title="${esc(n)}"><img src="img/${ic}.png" alt="" loading="lazy"><span>${esc(n)}</span></a>`;
let godTip = "";
function stranicaGod() {
  const vse = god.map(g => ({g, tipy: Object.keys(A).filter(k => A[k].t1.includes(g.a) && A[k].t2.includes(g.b)),
    imen: ORUZHIE.filter(o => o.t && o.t[0].includes(g.a) && o.t[1].includes(g.b))}))
    .filter(x => !godTip || x.tipy.includes(godTip) || x.imen.some(o => o.arch === godTip));
  return `<h2>${u("godrolls")}</h2><p class="tiho">${u("godIntro")}</p>
  <div class="panel"><select id="selGod"><option value="">${u("weapon")}: ${u("all")}</option>${Object.keys(A).map(k => `<option value="${k}"${godTip === k ? " selected" : ""}>${esc(aName(k))}</option>`).join("")}</select>
  <span class="tiho">${vse.length} / ${god.length}</span></div>
  <div class="gods2">${vse.map(({g, tipy, imen}) => `<div class="godk"><b>★ ${esc(gName(g))}</b>
    <div class="godp">${["a", "b"].map(x => `<button data-p="traits:${g[x]}">${pi("traits:" + g[x])}<span>${esc(pName("traits:" + g[x]))}</span></button>`).join("")}</div>
    <p>${esc(gWhy(g))}</p>
    <div class="mts">${tipy.map(k => mt(`w/a/${k}`, A[k].ic, aName(k))).join("")}${imen.map(o => mt(o.url, o.ic, o.n(), 1)).join("")}</div></div>`).join("") || `<p class="tiho">${u("nothing")}</p>`}</div>`;
}

let AFOK = null;
function armorKarta(id) {
  if (id.startsWith("armor:")) { const k = id.slice(6), e = ex[k];
    return `<div class="wfok"><div>${img(e.icon)}<div><b>${esc(e.name)}</b><br><small class="tiho">${sl(e.bucket)} · ${u("exotic")}</small></div></div>
      ${e.flavor ? `<p><i>${esc(tx("X|" + k, 1, e.flavor))}</i></p>` : ""}
      <div class="wfok2">${pi(id)}<b>${esc(pName(id))}</b></div><p>${esc(tx(trKey(id), 1, P[id]?.d))}</p>
      <p class="tiho">${u("bestStats")}: ${e.stats.map(sl).join(" + ")}<br>${u("where")}: ${esc(tx("X|" + k, 2, e.how))}</p></div>`; }
  return `<div class="wfok"><div class="wfok2">${pi(id)}<b>${esc(pName(id))}</b></div><p>${esc(tx(trKey(id), 1, P[id]?.d))}</p></div>`;
}
function stranicaBronya() {
  const exArm = Object.entries(ex).filter(([, e]) => e.kind === "armor");
  const mods = Object.keys(P).filter(x => x.startsWith("mods:"));
  AFOK = AFOK || "armor:" + exArm[0][0];
  const slots = ["helmet", "gauntlets", "chest", "legs", "cloak"];
  const plit = ([k, e]) => `<button class="plit${AFOK === "armor:" + k ? " vyb" : ""}" data-af="armor:${k}" data-st="--c:${rc.exotic}"><span class="plit-ik"><img src="img/${e.icon}.png" alt="" loading="lazy"></span><b>${esc(e.name)}</b><small>${e.stats.map(x => sl(x).slice(0, 3)).join(" + ")}</small></button>`;
  const ikon = id => `<button class="pk${AFOK === id ? " vyb" : ""}" data-af="${id}" title="${esc(pName(id))}">${pi(id)}</button>`;
  const levo = `<h2>${u("exArmor")}</h2>${slots.map(sl2 => { const v = exArm.filter(([, e]) => e.bucket === sl2); return v.length ? `<h3>${sl(sl2)}</h3><div class="plitki">${v.map(plit).join("")}</div>` : ""; }).join("")}
    <h2>${u("armorSets")}</h2><div class="sety">${Object.entries(AS).map(([id, s2]) => `<div class="setk" data-st="--c:${s2.colour}">
      <div class="setk-h"><b>${esc(s2.name)}</b><small class="tiho">${u("where")}: ${esc(tx("AS|" + id, 0, s2.source))}</small></div>
      <div class="setk-i">${slots.map(sl2 => `<span title="${esc(s2.items[sl2])}"><img src="img/${s2.icons[sl2]}.png" alt="" loading="lazy"><small>${sl(sl2)}</small></span>`).join("")}</div>
      <p class="tiho">${u("armorGod")(s2.group.map(sl).join(" + "))}</p>
      <div class="setk-b">${s2.bonuses.map(b => `<button class="${AFOK === "set_bonuses:" + b ? "vyb" : ""}" data-af="set_bonuses:${b}">${pi("set_bonuses:" + b)}<span>${esc(pName("set_bonuses:" + b))}</span></button>`).join("")}</div></div>`).join("")}</div>
    <h2>${u("mods")}</h2><div class="wkols">${["helmet", "gauntlets", "chest", "legs"].map(s2 => `<div class="wk"><b>${sl(s2)}</b><div class="wk-g">${mods.filter(m => P[m].s?.includes(s2)).map(ikon).join("")}</div></div>`).join("")}</div>
    <p class="tiho">${u("groups")}: ${LB.groups.map(g => g.map(sl).join("/")).join(" · ")}.</p>`;
  return `<div class="wgrid bgrid"><div class="wmain">${levo}</div><aside class="wside"><div class="wcard">${armorKarta(AFOK)}</div></aside></div>`;
}

// ---------- урон ----------
const frName = (ak, fk) => tx(`F|${ak}|${fk}`, 0, P[`frames:${ak}_${fk}`]?.n || fk);
// строки: легендарные фреймы каждого типа + каждый экзотик отдельной строкой (у Pale Choir, Emberwake, Starfall Tube фрейм обычный)
const STROKI = () => {
  const out = [];
  for (const [key, v] of Object.entries(URON)) {
    if (v.ex) continue;
    const ak = Object.keys(A).find(k => key.startsWith(k + "_"));
    out.push({...v, key, ak, fk: key.slice(ak.length + 1), exk: null, n: aName(ak), url: `w/a/${ak}/legendary`});
  }
  for (const [k, e] of Object.entries(ex)) {
    if (e.kind !== "weapon") continue;
    const key = `${e.arch}_${e.frame}`;
    out.push({...URON[key], ex: true, key: "ex:" + k, ak: e.arch, fk: e.frame, exk: k, n: e.name, url: `w/e/${k}`});
  }
  return out;
};
const KOL = [["v", "perShot"], ["k", "head"], ["rpm", "rpmL"], ["mag", "magL"], ["dps", "dpsL"], ["dpsK", "dpsHL"], ["dpsM", "dpsML"]];
const yach = (r, c) => c === "k" ? (r.k > 1 ? Math.round(r.v * r.k) : "—") : c === "v" && r.pel > 1 ? `${r.v} (${r.pel}×${r.v / r.pel})` : r[c];
function tablica(rows, mark) {
  const BAR = ["dps", "dpsK", "dpsM"], mx = Object.fromEntries(BAR.map(c => [c, Math.max(1, ...rows.map(r => +r[c] || 0))]));
  const yach2 = (r, c) => BAR.includes(c) ? `<span class="tv">${yach(r, c)}<i data-st="width:${Math.round((+r[c] || 0) / mx[c] * 100)}%"></i></span>` : yach(r, c);
  return `<div class="tbl"><table><thead><tr><th>${u("weapon")}</th><th>${u("frameL")}</th>${KOL.map(([c, l]) => `<th data-sort="${c}" class="${sortK === c ? "akt" : ""}">${u(l)}${sortK === c ? " ▼" : ""}</th>`).join("")}</tr></thead><tbody>
  ${rows.map(r => `<tr class="${r.ex ? "ex" : ""}${mark && r.key === mark ? " my" : ""}"><td><a class="tk" href="#/${r.url}"><img src="img/${r.exk ? ex[r.exk].icon : A[r.ak].ic}.png" alt="" loading="lazy">${esc(r.n)}</a></td><td><span class="tk">${pi(`frames:${r.ak}_${r.fk}`)}${esc(frName(r.ak, r.fk))}</span></td>${KOL.map(([c]) => `<td class="${sortK === c ? "skol" : ""}">${yach2(r, c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}
let sortK = "dpsM", dmgTip = "";
function stranicaUron() {
  const rows = STROKI().filter(r => !dmgTip || r.ak === dmgTip).sort((a, b) => (+b[sortK] || 0) - (+a[sortK] || 0));
  return `<h2>${u("dmg")}</h2>
  <div class="panel"><select id="selDt"><option value="">${u("weapon")}: ${u("all")}</option>${Object.keys(A).map(k => `<option value="${k}"${dmgTip === k ? " selected" : ""}>${esc(aName(k))}</option>`).join("")}</select>
  <select id="selSort">${KOL.map(([c, l]) => `<option value="${c}"${sortK === c ? " selected" : ""}>▼ ${u(l)}</option>`).join("")}</select></div>
  ${tablica(rows)}${podrobnee(`<p class="tiho">${u("dmgIntro")}</p>`)}`;
}
const uronBlok = (ak, fk, exk) => { const my = exk ? "ex:" + exk : fk ? `${ak}_${fk}` : "";
  const rows = STROKI().filter(r => r.ak === ak && (!r.ex || r.key === my)).sort((a, b) => b.dpsM - a.dpsM);
  const exotic = !!exk;
  return `<h2>${u("dmg")}</h2>${exotic ? `<h3>${u("dmgCompare")(aName(ak))}</h3>` : ""}${tablica(rows, my)}${exotic ? `<p class="tiho">${u("exExtra")}</p>` : ""}<p class="tiho">${u("dmgIntro")}</p>`; };

// ---------- коллекция ----------
const ik40 = n => `<span class="mi" data-st="background-position:-${n % 8 * 40}px -${Math.floor(n / 8) * 40}px"></span>`;
function predmet(sec, it) {
  const kk = `K|${sec}|${it.id}`, n = tx(kk, 0, it.n), d = tx(kk, 1, it.d), src = tx(kk, 2, it.src);
  const kart = it.img ? `<img src="img/${it.img}" alt="" loading="lazy">` : it.mi != null ? ik40(it.mi)
    : it.cv ? `<span class="tm" data-st="background:linear-gradient(135deg,${it.cv[0]},${it.cv[1]})"></span>` : "";
  const ex2 = [
    it.r ? `<small data-st="color:${rc[it.r]}">${u("rar")[it.r]}</small>` : "",
    it.speed ? `<small>${u("speed")}: ${it.speed}${it.model ? " · " + esc(it.model) : ""}</small>` : "",
    it.rr ? `<small>${u("rollsIn")}: ${it.rr.map(r => u("rar")[r]).join(", ")}</small>` : "",
    it.max ? `<small>${u("maxStack")}: ${it.max}</small>` : "",
  ].join("");
  const perki = it.perks ? `<div class="para">${it.perks.map(x => perk("skiffperk:" + x)).join("")}</div>` : "";
  return `<div class="pr" data-st="--c:${rc[it.r] || "var(--rama)"}${it.bg ? ";--bg:" + it.bg : ""}"><div class="pr-k${it.bg ? " em" : ""}">${kart}</div>
    <div><b>${esc(n)}</b>${ex2}<p>${esc(d)}</p>${src ? `<small class="tiho">${u("where")}: ${esc(src)}</small>` : ""}${perki}</div></div>`;
}
let KFOK = null;
const kolKart = it => it.img ? `<img src="img/${it.img}" alt="" loading="lazy">` : it.mi != null ? ik40(it.mi)
  : it.cv ? `<span class="tm" data-st="background:linear-gradient(135deg,${it.cv[0]},${it.cv[1]})"></span>` : "";
function stranicaKol(sec) {
  const S = K.find(s => s.id === sec) || K[0];
  const chips = `<div class="panel">${K.map(s => `<a class="chip${s === S ? " akt" : ""}" href="#/col/${s.id}">${u("secs")[s.id]} <span class="tiho">${s.items.length}</span></a>`).join("")}</div>`;
  if (S.id === "lore") return `<h2>${u("col")}</h2>${chips}<h2>${u("secs")[S.id]}</h2><p class="tiho">${u("loreNote")}</p>
    ${S.items.map(it => `<details class="lore"><summary>${ik40(it.mi)}<b>${esc(it.n)}</b></summary><p>${esc(it.d)}</p></details>`).join("")}`;
  const fok = S.items.find(it => it.id === KFOK) || S.items[0];
  const plit = it => { const kk = `K|${S.id}|${it.id}`;
    return `<button class="plit${it === fok ? " vyb" : ""}" data-kf="${esc(it.id)}" data-st="--c:${rc[it.r] || "var(--rama)"}"><span class="plit-ik${it.bg ? " em" : ""}"${it.bg ? ` data-st="--bg:${it.bg}"` : ""}>${kolKart(it)}</span><b>${esc(tx(kk, 0, it.n))}</b>${it.r ? `<small data-st="color:${rc[it.r]}">${u("rar")[it.r]}</small>` : ""}</button>`; };
  const shells = S.id === "shells" ? `<h3>${u("shellPerks")}</h3><div class="para">${Object.keys(P).filter(x => x.startsWith("wispperk:")).map(x => perk(x)).join("")}</div>` : "";
  return `<h2>${u("col")}</h2>${chips}<div class="wgrid bgrid"><div class="wmain"><h2>${u("secs")[S.id]}</h2><div class="plitki">${S.items.map(plit).join("")}</div>${shells}</div>
    <aside class="wside"><div class="wcard" id="kolKarta">${predmet(S.id, fok)}</div></aside></div>`;
}

function pokaz() {
  const [r, ...p] = location.hash.replace(/^#\/?/, "").split("/");
  if (location.hash !== ROLL_URL) { ROLL = {}; FOKUS = null; ROLL_URL = location.hash; }
  ZV = GOD_PERKS;
  const v = r === "w" ? (p[0] === "a" && A[p[1]] ? stranicaTip(p[1], p[2]) : p[0] === "s" && ws[p[1]]?.items[p[2]] ? stranicaSet(p[1], p[2])
    : p[0] === "e" && ex[p[1]] ? stranicaEkzotik(p[1]) : stranicaOruzhie())
    : r === "build" ? stranicaBild(p[0]) : r === "god" ? stranicaGod() : r === "armor" ? stranicaBronya() : r === "col" ? stranicaKol(p[0]) : r === "dmg" ? stranicaUron() : stranicaOruzhie();
  $("#app").innerHTML = v; stili($("#app"));
  document.querySelectorAll("nav a").forEach(a => { a.classList.toggle("akt", a.dataset.r === (r === "w" ? "" : r || "")); a.textContent = u(a.dataset.t) || ub(a.dataset.t); });
  document.querySelectorAll("#yazyk button").forEach(b => b.classList.toggle("akt", b.dataset.lang === lang));
  document.documentElement.lang = lang;
  $("#podval").innerHTML = FOOT[lang];
  $("#info").hidden = true;
}

function info(id) {
  const x = P[id]; if (!x) return;
  const orig = lang !== "en" && pName(id) !== x.n ? ` <small class="tiho">(${esc(x.n)})</small>` : "";
  $("#info").innerHTML = `<button class="x" aria-label="${u("close")}">✕</button><div data-st="display:flex;gap:8px;align-items:center">${pi(id)}<b>${esc(pName(id))}</b>${orig}${x.e ? " · " + elem(x.e) : ""}</div><p>${esc(tx(trKey(id), 1, x.d))}</p>`;
  stili($("#info")); $("#info").hidden = false;
}

document.addEventListener("click", e => {
  const t = e.target.closest("[data-kf],[data-af],[data-pk],[data-rollreset],[data-p],[data-f],[data-rar],[data-dt],[data-sort],[data-el],[data-god],[data-lang],#info .x");
  if (!t) return;
  if (t.dataset.pk) { const [col, id] = t.dataset.pk.split("|"); const fix = t.classList.contains("fix");
    ROLL[col] = ROLL[col] === id && !fix ? undefined : id; FOKUS = id; const y = scrollY; pokaz(); scrollTo(0, y); if (innerWidth < 860) info(id); return; }
  if (t.dataset.kf) { KFOK = t.dataset.kf; const y = scrollY; pokaz(); scrollTo(0, y);
    if (innerWidth < 860) { $("#info").innerHTML = `<button class="x" aria-label="${u("close")}">✕</button>` + $("#kolKarta").innerHTML; stili($("#info")); $("#info").hidden = false; } return; }
  if (t.dataset.af) { AFOK = t.dataset.af; const y = scrollY; pokaz(); scrollTo(0, y); if (innerWidth < 860) info(AFOK); return; }
  if (t.dataset.rollreset) { ROLL = {}; FOKUS = null; const y = scrollY; pokaz(); scrollTo(0, y); return; }
  if (t.matches("#info .x")) $("#info").hidden = true;
  else if (t.dataset.lang) { lang = t.dataset.lang; try { localStorage.setItem("lang", lang); } catch {} pokaz(); }
  else if (t.dataset.p) info(t.dataset.p);
  else if (t.dataset.f != null) { filtr = t.dataset.f; pokaz(); }
  else if (t.dataset.rar != null) { rar = t.dataset.rar; pokaz(); }
  else if (t.dataset.dt != null) { dmgTip = t.dataset.dt; pokaz(); }
  else if (t.dataset.sort) { sortK = t.dataset.sort; const y = scrollY; pokaz(); scrollTo(0, y); }
  else if (t.dataset.el != null) {
    document.querySelectorAll("#elFil button").forEach(b => b.classList.toggle("akt", b === t));
    document.querySelectorAll(".wkols .pk").forEach(b => { const e2 = P[b.dataset.pk.split("|")[1]]?.e; b.hidden = !!(t.dataset.el && e2 && e2 !== t.dataset.el); });
  } else if (t.dataset.god) {
    const [a, b] = t.dataset.god.split(",").map(x => "traits:" + x);
    if (document.querySelector(".wkols")) { ROLL.t1 = a; ROLL.t2 = b; FOKUS = a; pokaz(); document.querySelector(".wgrid").scrollIntoView({behavior: "smooth", block: "start"}); }
  }
});
document.addEventListener("change", e => {
  if (e.target.id === "selRar") { rar = e.target.value; pokaz(); }
  else if (e.target.id === "selTip") { filtr = e.target.value; pokaz(); }
  else if (e.target.id === "selGod") { godTip = e.target.value; pokaz(); }
  else if (e.target.id === "selDt") { dmgTip = e.target.value; pokaz(); }
  else if (e.target.id === "selSort") { sortK = e.target.value; pokaz(); }
});
document.addEventListener("input", e => {
  if (e.target.id !== "poisk") return;
  poisk = e.target.value.toLowerCase().trim(); pokaz();
  const i = $("#poisk"); i.focus(); i.setSelectionRange(i.value.length, i.value.length);
});
addEventListener("hashchange", () => { pokaz(); scrollTo(0, 0); });
pokaz();
