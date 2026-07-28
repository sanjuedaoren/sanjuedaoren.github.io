// ===== Data =====
const dynastyColors = {
  "夏": "#4A3728", "商": "#5C3D2E", "西周": "#56504A", "春秋": "#4A5D4E",
  "战国": "#5C4A3A", "秦": "#3e2b22", "新莽": "#5A5E54", "西汉": "#4e2c22",
  "东汉": "#5e281f", "三国": "#2c3b2e", "西晋": "#3a382c", "东晋": "#2e383e",
  "南北朝": "#382e3e", "刘宋": "#8C6A3F", "南齐": "#A07B47", "南梁": "#7A5A34",
  "南陈": "#B08A52", "北魏": "#5C7A6E", "东魏": "#4E6B5F", "西魏": "#6B8A7A",
  "北齐": "#456B5E", "北周": "#5E8A78", "隋": "#4a3e2a", "唐": "#7A6A3A",
  "五代十国": "#5E5248", "北宋": "#3A5A6A", "南宋": "#5A6A4A", "元": "#7A5A3A",
  "明": "#6A3A3A", "清": "#3A4A5A", "民国": "#5A6A70", "现代": "#6A7A82"
};
const classColors = {
  "帝王": "#2f1e1b", "贵族": "#8C4356", "文人": "#1685A9", "武将": "#B87333",
  "士": "#FF4C00", "农": "#789262", "工": "#CA6924", "商": "#F2BE45",
  "道": "#1d6377", "僧": "#e4a243", "郎中": "#598A78", "其它": "#75878A",
  "其他": "#75878A", "皇室": "#8C4356"
};
const relationshipStyles = {
  "师徒": { color: "#E60012" }, "同僚": { color: "#2E5BAA" },
  "君臣": { color: "#177CB0" }, "亲友": { color: "#4C8C5A" },
  "家族": { color: "#1BA784" }, "对手": { color: "#D24735" },
  "敌对": { color: "#C8161D" }, "忘年交": { color: "#ECD452" },
  "知己": { color: "#C25160" }, "其他": { color: "#75878A" }
};
const dynasties = [
  { name: "夏", start: -2070, end: -1600 },
  { name: "商", start: -1600, end: -1046 },
  { name: "西周", start: -1046, end: -771 },
  { name: "春秋", start: -770, end: -476 },
  { name: "战国", start: -475, end: -221 },
  { name: "秦", start: -221, end: -207 },
  { name: "西汉", start: -206, end: 8 },
  { name: "新莽", start: 9, end: 23 },
  { name: "东汉", start: 25, end: 220 },
  { name: "三国", start: 220, end: 265, displayEnd: 280 },
  { name: "西晋", start: 265, end: 316 },
  { name: "东晋", start: 317, end: 420 },
  { name: "南北朝", start: 420, end: 581, displayEnd: 589, children: [
    { name: "刘宋", start: 420, end: 479, group: "南" },
    { name: "南齐", start: 479, end: 502, group: "南" },
    { name: "南梁", start: 502, end: 557, group: "南" },
    { name: "南陈", start: 557, end: 589, group: "南" },
    { name: "北魏", start: 439, end: 534, group: "北" },
    { name: "东魏", start: 534, end: 550, group: "北" },
    { name: "西魏", start: 535, end: 556, group: "北" },
    { name: "北齐", start: 550, end: 577, group: "北" },
    { name: "北周", start: 557, end: 581, group: "北" }
  ] },
  { name: "隋", start: 581, end: 618 },
  { name: "唐", start: 618, end: 907 },
  { name: "五代十国", start: 907, end: 960, displayEnd: 979 },
  { name: "北宋", start: 960, end: 1127 },
  { name: "南宋", start: 1127, end: 1279 },
  { name: "元", start: 1271, end: 1368 },
  { name: "明", start: 1368, end: 1644 },
  { name: "清", start: 1644, end: 1912 },
  { name: "民国", start: 1912, end: 1949 },
  { name: "现代", start: 1949, end: 2026 }
];

// ===== App State =====
let currentHis = hisData.map(p => p.id);
let currentPath = [];
let isScrolling = false;
let zoom = 1;
let globalPositions = {};
let nodesById = {};
let savedCustomPersons = [];
const MIN_ZOOM = 0.2;
const MAX_ZOOM = 5;
const BASE_WIDTH = 10000;
let verticalContentBase = 0;
let verticalContentTop = 30;

// ===== DOM Elements =====
const D = id => document.getElementById(id);
const timelineScroll = D('timelineScroll');
const timelineContent = D('timelineContent');
const dynastyBackgrounds = D('dynastyBackgrounds');
const dynastyBar = D('dynastyBar');
const connectionsSvg = D('connectionsSvg');
const nodesContainer = D('nodesContainer');
const detailOverlay = D('detailOverlay');
const detailCard = D('detailCard');
const detailTitle = D('detailTitle');
const detailSubtitle = D('detailSubtitle');
const detailBody = D('detailBody');
const detailClose = D('detailClose');
const scrollSlider = D('scrollSlider');
const miniProgress = D('miniProgress');
const statsText = D('statsText');
const zoomLevel = D('zoomLevel');
const zoomInBtn = D('zoomIn');
const zoomOutBtn = D('zoomOut');
const searchPersonInput = D('searchPerson');
const searchAutocompleteList = D('searchAutocomplete');
const randomBtn = D('randomBtn');
const shareBtn = D('shareBtn');
const customBtn = D('customBtn');
const classLegend = D('classLegend');
const relationLegend = D('relationLegend');
const customModalOverlay = D('customModalOverlay');
const customNameInput = D('customName');
const customClassSelect = D('customClass');
const customBirthInput = D('customBirth');
const customDeathInput = D('customDeath');
const customDynastyInput = D('customDynasty');
const customQuoteInput = D('customQuote');
const customSourceInput = D('customSource');
const relationList = D('relationList');
const addRelationBtn = D('addRelationBtn');
const customSubmitBtn = D('customSubmit');
const customCancelBtn = D('customCancel');

// ===== Utility Functions =====
function getPersonById(id) { return hisData.find(p => String(p.id) === String(id)); }
function yearToX(year, minYear, maxYear, width) { return ((year - minYear) / (maxYear - minYear)) * width; }
function getTotalWidth() { return BASE_WIDTH; }
function getColor(person) { return classColors[person.class] || person.classColor || '#75878A'; }

function formatYear(y) {
  if (y < 0) return `前${Math.abs(y)}年`;
  if (y > 0) return `${y}年`;
  return '公元1年';
}
function formatYearRange(start, end) {
  return `${formatYear(start)}—${formatYear(end)}`;
}

function detectDynasty(birthYear, deathYear) {
  const midYear = Math.round((birthYear + deathYear) / 2);
  for (const d of dynasties) {
    if (d.children) {
      for (const c of d.children) {
        if (midYear >= c.start && midYear <= c.end) return c.name;
      }
    }
    if (midYear >= d.start && midYear <= d.end) return d.name;
  }
  let closest = null, minDist = Infinity;
  for (const d of dynasties) {
    const mid = (d.start + d.end) / 2;
    const dist = Math.abs(midYear - mid);
    if (dist < minDist) { minDist = dist; closest = d.name; }
  }
  return closest || '其他';
}

// ===== Render Legends =====
function renderLegends() {
  classLegend.innerHTML = '';
  Object.entries(classColors).forEach(([name, color]) => {
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = `<span class="legend-dot" style="background:${color}"></span><span class="legend-label">${name}</span>`;
    classLegend.appendChild(item);
  });
  relationLegend.innerHTML = '';
  Object.entries(relationshipStyles).forEach(([name, style]) => {
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = `<span class="legend-line" style="background:${style.color}"></span><span class="legend-label">${name}</span>`;
    relationLegend.appendChild(item);
  });
}

// ===== Dynasty Segment Geometry =====
function computeDynastySegments(totalWidth, timelineMin, timelineMax) {
  const WIDEN_EXTRA = { "秦": 126, "新莽": 40, "隋": 40, "三国": 337, "西晋": 371, "五代十国": 40 };
  const NARROW = { "夏": 905, "商": 1040, "西周": 450, "春秋": 450, "战国": 306 };
  const isAdjusted = n => WIDEN_EXTRA[n] != null || NARROW[n] != null;
  const visibleDynasties = dynasties.filter(d => {
    const segEnd = Math.min(d.end, timelineMax);
    const segStart = Math.max(d.start, timelineMin);
    return segEnd > segStart;
  });
  const raw = [];
  let firstLeft = null;
  visibleDynasties.forEach((d, idx) => {
    const segStart = Math.max(d.start, timelineMin);
    const nextStart = (idx + 1 < visibleDynasties.length) ? visibleDynasties[idx + 1].start : d.end;
    const segEnd = Math.min(nextStart, timelineMax);
    if (segEnd <= segStart) return;
    const left = yearToX(segStart, timelineMin, timelineMax, totalWidth);
    const width = yearToX(segEnd, timelineMin, timelineMax, totalWidth) - left;
    if (width < 2) return;
    if (firstLeft === null) firstLeft = left;
    raw.push({ d, width, yearStart: segStart, yearEnd: segEnd });
  });
  if (!raw.length) return [];
  const desired = raw.map(r => r.width + (WIDEN_EXTRA[r.d.name] || 0) - (NARROW[r.d.name] || 0));
  const totalRaw = raw.reduce((s, r) => s + r.width, 0);
  const overflow = desired.reduce((s, w) => s + w, 0) - totalRaw;
  const nonAdjustedTotal = raw.reduce((s, r) => s + (isAdjusted(r.d.name) ? 0 : r.width), 0);
  const finalWidths = raw.map((r, i) => {
    if (isAdjusted(r.d.name)) return desired[i];
    const share = nonAdjustedTotal > 0 ? overflow * (r.width / nonAdjustedTotal) : 0;
    return Math.max(2, r.width - share);
  });
  const segments = [];
  let cursor = firstLeft;
  raw.forEach((r, i) => {
    segments.push({ d: r.d, left: cursor, width: finalWidths[i], yearStart: r.yearStart, yearEnd: r.yearEnd, children: r.d.children || null });
    cursor += finalWidths[i];
  });
  return segments;
}

function makeYearToXFromSegments(segments) {
  if (!segments || !segments.length) return () => 0;
  return function (year) {
    if (year <= segments[0].yearStart) return segments[0].left;
    for (let i = 0; i < segments.length; i++) {
      const s = segments[i];
      if (year >= s.yearStart && year < s.yearEnd) {
        const span = (s.yearEnd - s.yearStart) || 1;
        return s.left + ((year - s.yearStart) / span) * s.width;
      }
    }
    const last = segments[segments.length - 1];
    return last.left + last.width;
  };
}

function renderDynastyBackgrounds(totalWidth, timelineMin, timelineMax) {
  dynastyBackgrounds.innerHTML = '';
  const segments = computeDynastySegments(totalWidth, timelineMin, timelineMax);
  segments.forEach(({ d, left, width }) => {
    const seg = document.createElement('div');
    seg.className = 'dynasty-bg-segment';
    seg.dataset.dynasty = d.name;
    seg.style.left = left + 'px';
    seg.style.width = width + 'px';
    seg.style.backgroundColor = dynastyColors[d.name] || '#75878A';
    seg.title = `${d.name} (${d.start}—${d.displayEnd || d.end}年)`;
    dynastyBackgrounds.appendChild(seg);
  });
  const segs = dynastyBackgrounds.querySelectorAll('.dynasty-bg-segment');
  for (let i = 0; i < segs.length - 1; i++) {
    const sep = document.createElement('div');
    sep.className = 'dynasty-separator';
    const segRight = parseFloat(segs[i].style.left) + parseFloat(segs[i].style.width);
    sep.style.left = (segRight - 1) + 'px';
    dynastyBackgrounds.appendChild(sep);
  }
}

// ===== Render Dynasty Bar =====
function renderDynastyBar(totalWidth, timelineMin, timelineMax) {
  dynastyBar.innerHTML = '';
  dynastyBar.style.width = (totalWidth * zoom) + 'px';
  const segments = computeDynastySegments(totalWidth, timelineMin, timelineMax);
  segments.forEach(({ d, left, width, yearStart, yearEnd }) => {
    const centerX = left + width / 2;
    const hasChildren = !!(d.children && d.children.length);
    const item = document.createElement('div');
    item.className = 'dynasty-bar-item' + (hasChildren ? ' has-children' : '');
    item.dataset.baseCenterX = hasChildren ? left : centerX;
    item.dataset.baseWidth = width;
    item.style.left = (item.dataset.baseCenterX * zoom) + 'px';
    if (hasChildren) item.style.width = (width * zoom) + 'px';
    if (hasChildren) {
      const parentEl = document.createElement('div');
      parentEl.className = 'dynasty-bar-parent';
      parentEl.textContent = d.name;
      item.appendChild(parentEl);
    } else {
      const nameEl = document.createElement('div');
      nameEl.className = 'dynasty-bar-name';
      nameEl.style.writingMode = 'vertical-rl';
      nameEl.style.textOrientation = 'upright';
      nameEl.style.letterSpacing = '0';
      nameEl.textContent = d.name;
      item.appendChild(nameEl);
      const yearEl = document.createElement('div');
      yearEl.className = 'dynasty-bar-year';
      yearEl.textContent = formatYearRange(d.start, d.displayEnd || d.end);
      item.appendChild(yearEl);
    }
    dynastyBar.appendChild(item);
    if (hasChildren) {
      const list = d.children.slice().sort((a, b) => a.start - b.start);
      const n = list.length;
      const padL = 6, padR = 6;
      const innerW = Math.max(0, width - padL - padR);
      const slot = innerW / n;
      list.forEach((c, i) => {
        const cLeftBase = left + padL + slot * i;
        const cEl = document.createElement('div');
        cEl.className = 'dynasty-bar-child';
        cEl.dataset.baseLeft = cLeftBase;
        cEl.dataset.baseWidth = slot;
        cEl.style.left = (cLeftBase * zoom) + 'px';
        cEl.style.width = (slot * zoom) + 'px';
        cEl.innerHTML = `<span class="cb-name">${c.name}</span><span class="cb-year">${formatYearRange(c.start, c.end)}</span>`;
        dynastyBar.appendChild(cEl);
      });
    }
  });
  updateDynastyBarLabels();
}

function updateDynastyBarLabels() {
  const barH = dynastyBar.clientHeight || 40;
  const childRow = 18;
  dynastyBar.querySelectorAll('.dynasty-bar-item').forEach(item => {
    const baseWidth = parseFloat(item.dataset.baseWidth) || 0;
    const visualW = baseWidth * zoom;
    const nameEl = item.querySelector('.dynasty-bar-name');
    const yearEl = item.querySelector('.dynasty-bar-year');
    if (!nameEl) return;
    const nChars = nameEl.textContent.length;
    nameEl.style.display = '';
    if (yearEl) { yearEl.style.display = ''; yearEl.style.fontSize = '10px'; }
    const yearH = yearEl ? 15 : 0;
    const childH = item.classList.contains('has-children') ? childRow : 0;
    const availNameH = Math.max(8, barH - 4 - yearH - childH);
    const fs = Math.max(5, Math.min(15, availNameH / (nChars * 1.12), visualW * 0.82));
    nameEl.style.fontSize = fs + 'px';
  });
  const barH2 = dynastyBar.clientHeight || 64;
  dynastyBar.querySelectorAll('.dynasty-bar-child').forEach(cEl => {
    const baseWidth = parseFloat(cEl.dataset.baseWidth) || 0;
    const visualW = baseWidth * zoom;
    const nameEl = cEl.querySelector('.cb-name');
    const nChars = (nameEl ? nameEl.textContent : '').length || 1;
    const yearH = 10;
    const availNameH = Math.max(10, barH2 - 18 - yearH - 6);
    const nameFs = Math.max(7, Math.min(14, availNameH / (nChars * 1.12)));
    if (nameEl) nameEl.style.fontSize = nameFs + 'px';
    const yearEl = cEl.querySelector('.cb-year');
    if (yearEl) yearEl.style.fontSize = Math.max(6, Math.min(8, visualW * 0.14)) + 'px';
  });
}

function fitNodeName(circle, nameSpan) {
  const avail = circle.clientHeight - 1;
  if (avail <= 1) return 1;
  const setFs = (fs) => { nameSpan.style.fontSize = fs + 'px'; return nameSpan.offsetHeight; };
  let lo = 1, hi = 16;
  while (hi > lo && setFs(hi) > avail) hi -= 0.5;
  for (let k = 0; k < 24 && (hi - lo) > 0.5; k++) {
    const mid = (lo + hi) / 2;
    if (setFs(mid) > avail) hi = mid; else lo = mid;
  }
  const fs = Math.max(1, Math.round(lo * 2) / 2);
  const NAME_FONT_SCALE = 0.9;
  const scaledFs = Math.max(1, Math.round(fs * NAME_FONT_SCALE * 2) / 2);
  setFs(scaledFs);
  return scaledFs;
}

function updateNodeFontSizes() {
  document.querySelectorAll('.node-circle').forEach(circle => {
    const baseFs = parseFloat(circle.dataset.baseFontSize);
    if (baseFs) circle.style.fontSize = baseFs + 'px';
  });
}

function getDynastyBounds(dynastyName, totalWidth, timelineMin, timelineMax) {
  const d = dynasties.find(x => x.name === dynastyName);
  if (!d) return { left: 0, right: totalWidth };
  const segStart = Math.max(d.start, timelineMin);
  const segEnd = Math.min(d.end, timelineMax);
  return {
    left: yearToX(segStart, timelineMin, timelineMax, totalWidth),
    right: yearToX(segEnd, timelineMin, timelineMax, totalWidth)
  };
}

function getStableClientHeight() {
  const prev = timelineScroll.style.overflowY;
  timelineScroll.style.overflowY = 'hidden';
  const h = timelineScroll.clientHeight;
  timelineScroll.style.overflowY = prev;
  return h;
}

function getLayoutViewHeight() {
  let h = getStableClientHeight() || timelineScroll.getBoundingClientRect().height;
  if (!h || h < 200) h = Math.max(500, (window.innerHeight || 800) - 180);
  return h;
}

// ===== Render Timeline =====
function renderTimeline(hisIds) {
  const persons = hisIds.map(id => getPersonById(id)).filter(Boolean);
  if (persons.length === 0) return;
  const timelineMin = -2150;
  const timelineMax = 2000;
  const totalWidth = getTotalWidth();
  let viewHeight = getLayoutViewHeight();
  const contentHeight = viewHeight;
  timelineContent.style.width = totalWidth + 'px';
  const vScale = Math.min(zoom, 1);
  const V_SAFE = 1;
  timelineContent.style.height = ((viewHeight - V_SAFE) / vScale) + 'px';
  timelineContent.dataset.baseHeight = contentHeight;
  const dynastyBarH = dynastyBar.offsetHeight || Math.max(Math.round(viewHeight * 0.1), 40);
  timelineContent.style.marginTop = (-dynastyBarH / zoom) + 'px';
  connectionsSvg.setAttribute('width', totalWidth);
  connectionsSvg.setAttribute('height', (viewHeight - V_SAFE) / vScale);
  connectionsSvg.style.width = totalWidth + 'px';
  connectionsSvg.style.height = ((viewHeight - V_SAFE) / vScale) + 'px';
  connectionsSvg.innerHTML = '';
  nodesContainer.innerHTML = '';
  renderDynastyBackgrounds(totalWidth, timelineMin, timelineMax);
  renderDynastyBar(totalWidth, timelineMin, timelineMax);
  const _segments = computeDynastySegments(totalWidth, timelineMin, timelineMax);
  const segByName = {};
  _segments.forEach(sg => {
    segByName[sg.d.name] = { left: sg.left, right: sg.left + sg.width };
    if (sg.children) sg.children.forEach(c => { segByName[c.name] = { left: sg.left, right: sg.left + sg.width }; });
  });
  const yearToXFromSegs = makeYearToXFromSegments(_segments);
  const dragBoundsFor = (p) => {
    let left = Infinity, right = -Infinity;
    dynasties.forEach(d => {
      if (d.start <= p.deathYear && d.end >= p.birthYear) {
        const b = segByName[d.name];
        if (b) { left = Math.min(left, b.left); right = Math.max(right, b.right); }
      }
    });
    if (left === Infinity) {
      const b = segByName[p.dynasty];
      if (b) return { left: b.left, right: b.right };
      return { left: 0, right: totalWidth };
    }
    return { left, right };
  };
  globalPositions = {};
  nodesById = {};
  const positions = globalPositions;
  const NODE_RADIUS = 17.5;
  const usableTop = dynastyBarH + 5;
  const usableBottom = contentHeight - 30;
  verticalContentTop = usableTop;
  verticalContentBase = usableBottom + NODE_RADIUS + 10;
  const CLASS_RANK = { "帝王": 0, "贵族": 1, "皇室": 1, "文人": 2, "武将": 3, "士": 4, "农": 5, "工": 6, "商": 7, "道": 8, "僧": 9, "郎中": 10, "其它": 11, "其他": 11 };
  const rankList = [...new Set(persons.map(p => CLASS_RANK[p.class] ?? 99))].sort((a, b) => a - b);
  const numBands = rankList.length;
  const bandH = (usableBottom - usableTop) / Math.max(1, numBands);
  const byClass = {};
  persons.forEach(p => {
    const r = CLASS_RANK[p.class] ?? 99;
    if (!byClass[r]) byClass[r] = [];
    byClass[r].push(p);
  });
  Object.values(byClass).forEach(g => g.sort((a, b) => a.birthYear - b.birthYear));
  rankList.forEach((rank, bandIdx) => {
    const group = byClass[rank] || [];
    const bandTop = usableTop + bandIdx * bandH;
    const m = group.length;
    group.forEach((p, i) => {
      const x = yearToXFromSegs(p.birthYear);
      const y = m > 1 ? bandTop + (i + 0.5) * (bandH / m) : bandTop + bandH / 2;
      positions[p.id] = { x, y };
    });
  });
  const extraIds = new Set();
  persons.forEach(p => {
    const rels = p.relationships || {};
    Object.keys(rels).forEach(dir => {
      const rel = rels[dir];
      if (rel && rel.id != null && !positions[rel.id]) extraIds.add(rel.id);
    });
  });
  extraIds.forEach(id => {
    const ep = getPersonById(id);
    if (!ep) return;
    const db = dragBoundsFor(ep);
    const cx = (db.left + db.right) / 2;
    const cy = (usableTop + usableBottom) / 2;
    positions[ep.id] = { x: cx, y: cy };
  });
  const drawnPairs = new Set();
  persons.forEach(p => {
    const rels = p.relationships || {};
    Object.keys(rels).forEach(dir => {
      const rel = rels[dir];
      if (!rel || rel.id == null) return;
      const pos1 = positions[p.id];
      const pos2 = positions[rel.id];
      if (!pos1 || !pos2) return;
      const pairKey = [String(p.id), String(rel.id)].sort().join('---');
      if (drawnPairs.has(pairKey)) return;
      drawnPairs.add(pairKey);
      const style = relationshipStyles[rel.type] || relationshipStyles["其他"];
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', pos1.x);
      line.setAttribute('y1', pos1.y / vScale);
      line.setAttribute('x2', pos2.x);
      line.setAttribute('y2', pos2.y / vScale);
      line.setAttribute('class', 'connection-line');
      line.setAttribute('stroke', style.color);
      line.setAttribute('id', `line-${pairKey}`);
      line.dataset.fromId = p.id;
      line.dataset.toId = rel.id;
      connectionsSvg.appendChild(line);
    });
  });
  persons.forEach((p) => {
    const pos = positions[p.id];
    if (!pos) return;
    const node = document.createElement('div');
    node.className = 'person-node';
    const size = NODE_RADIUS;
    node.style.left = (pos.x - size) + 'px';
    node.style.top = (pos.y / vScale - size) + 'px';
    node.dataset.baseLeft = pos.x;
    node.dataset.baseTop = pos.y;
    node.dataset.radius = size;
    node.dataset.id = p.id;
    const circle = document.createElement('div');
    circle.className = 'node-circle';
    circle.style.color = getColor(p);
    circle.style.width = (size * 2) + 'px';
    circle.style.height = (size * 2) + 'px';
    const initFs = Math.min(11, Math.floor((size * 2 - 3) / (p.name.length * 1.28)));
    circle.style.fontSize = initFs + 'px';
    circle.dataset.baseFontSize = initFs;
    const nameSpan = document.createElement('span');
    nameSpan.className = 'node-name';
    nameSpan.textContent = p.name;
    circle.appendChild(nameSpan);
    node.appendChild(circle);
    const delBtn = document.createElement('div');
    delBtn.className = 'node-delete-btn';
    delBtn.textContent = '×';
    delBtn.title = '删除该人物';
    delBtn.addEventListener('mousedown', (e) => { e.stopPropagation(); });
    delBtn.addEventListener('click', (e) => { e.stopPropagation(); deletePerson(p.id); });
    delBtn.addEventListener('touchstart', (e) => { e.stopPropagation(); }, { passive: false });
    node.appendChild(delBtn);
    let dragMoved = false;
    let startX, startY;
    node.addEventListener('mousedown', (e) => { dragMoved = false; startX = e.clientX; startY = e.clientY; });
    node.addEventListener('touchstart', (e) => {
      dragMoved = false;
      const t = e.touches[0];
      startX = t.clientX;
      startY = t.clientY;
      node._longPressTimer = setTimeout(() => {
        node._longPressTimer = null;
        document.querySelectorAll('.person-node.show-delete').forEach(n => n.classList.remove('show-delete'));
        node.classList.add('show-delete');
        openDetail(p);
      }, 500);
    }, { passive: true });
    node.addEventListener('touchmove', (e) => {
      if (node._longPressTimer) {
        const t = e.touches[0];
        const dx = t.clientX - startX;
        const dy = t.clientY - startY;
        if (Math.sqrt(dx * dx + dy * dy) > 10) {
          clearTimeout(node._longPressTimer);
          node._longPressTimer = null;
        }
      }
    });
    node.addEventListener('touchend', (e) => {
      if (node._longPressTimer) {
        clearTimeout(node._longPressTimer);
        node._longPressTimer = null;
      }
    });
    node.addEventListener('click', (e) => {
      if (dragMoved) return;
      document.querySelectorAll('.person-node.show-delete').forEach(n => n.classList.remove('show-delete'));
      node.classList.add('show-delete');
      openDetail(p);
    });
    node.addEventListener('contextmenu', (e) => e.preventDefault());
    makeNodeDraggable(node, p, positions, dragBoundsFor(p), () => { dragMoved = true; node.classList.add('show-delete'); });
    nodesById[p.id] = node;
    nodesContainer.appendChild(node);
  });
  nodesContainer.querySelectorAll('.node-circle').forEach(circle => {
    const nameSpan = circle.querySelector('.node-name');
    if (nameSpan) circle.dataset.baseFontSize = fitNodeName(circle, nameSpan);
  });
  const activeMin = Math.min(...persons.map(p => p.birthYear));
  const activeMax = Math.max(...persons.map(p => p.deathYear));
  statsText.textContent = `${persons.length}人 · ${activeMax - activeMin}年`;
  updateScrollUI();
}

// ===== Node Dragging =====
const DRAG_RADIUS = 15;
let dragState = null;

function _dragMove(clientX, clientY) {
  const d = dragState;
  if (!d) return;
  if (!d.hasMoved) { d.hasMoved = true; if (d.onDragStart) d.onDragStart(); }
  const dx = (clientX - d.startClientX) / zoom;
  const dy = (clientY - d.startClientY) * Math.min(zoom, 1) / zoom;
  let newX = d.startBaseLeft + dx;
  let newY = d.startBaseTop + dy;
  newX = Math.max(d.bounds.left + DRAG_RADIUS, Math.min(d.bounds.right - DRAG_RADIUS, newX));
  newY = Math.max(verticalContentTop + DRAG_RADIUS, Math.min(verticalContentBase - DRAG_RADIUS, newY));
  d.node.style.left = (newX - DRAG_RADIUS) + 'px';
  d.node.style.top = (newY / Math.min(zoom, 1) - DRAG_RADIUS) + 'px';
  d.node.dataset.baseLeft = newX;
  d.node.dataset.baseTop = newY;
  d.positions[d.person.id] = { x: newX, y: newY };
  updateConnections();
}

function _dragEnd() {
  const d = dragState;
  if (!d) return;
  d.node.classList.remove('dragging');
  scheduleSave();
  dragState = null;
}

document.addEventListener('mousemove', (e) => { if (dragState) _dragMove(e.clientX, e.clientY); });
document.addEventListener('touchmove', (e) => { if (!dragState) return; e.preventDefault(); const t = e.touches[0]; _dragMove(t.clientX, t.clientY); }, { passive: false });
document.addEventListener('mouseup', _dragEnd);
document.addEventListener('touchend', _dragEnd);
document.addEventListener('touchcancel', _dragEnd);

function makeNodeDraggable(node, person, positions, bounds, onDragStart) {
  function beginDrag(clientX, clientY) {
    dragState = {
      node, person, positions, bounds, onDragStart,
      startClientX: clientX, startClientY: clientY,
      startBaseLeft: parseFloat(node.dataset.baseLeft) || 0,
      startBaseTop: parseFloat(node.dataset.baseTop) || 0,
      hasMoved: false
    };
    node.classList.add('dragging');
  }
  node.addEventListener('mousedown', (e) => { e.stopPropagation(); e.preventDefault(); beginDrag(e.clientX, e.clientY); });
  node.addEventListener('touchstart', (e) => { e.stopPropagation(); e.preventDefault(); const t = e.touches[0]; beginDrag(t.clientX, t.clientY); }, { passive: false });
}

function updateConnections() {
  connectionsSvg.querySelectorAll('.connection-line').forEach(line => {
    const fromId = line.dataset.fromId;
    const toId = line.dataset.toId;
    if (!fromId || !toId) return;
    const fromNode = nodesById[fromId];
    const toNode = nodesById[toId];
    if (!fromNode || !toNode) return;
    const baseLeft1 = parseFloat(fromNode.dataset.baseLeft);
    const baseTop1 = parseFloat(fromNode.dataset.baseTop);
    const baseLeft2 = parseFloat(toNode.dataset.baseLeft);
    const baseTop2 = parseFloat(toNode.dataset.baseTop);
    if ([baseLeft1, baseTop1, baseLeft2, baseTop2].some(v => isNaN(v))) return;
    line.setAttribute('x1', baseLeft1);
    line.setAttribute('y1', baseTop1 / Math.min(zoom, 1));
    line.setAttribute('x2', baseLeft2);
    line.setAttribute('y2', baseTop2 / Math.min(zoom, 1));
  });
}

// ===== Drag Scroll (with momentum) =====
let isDragScrolling = false;

function getMaxScrollTop() {
  return Math.max(0, timelineScroll.scrollHeight - timelineScroll.clientHeight);
}
function clampVerticalScroll() {
  const maxTop = getMaxScrollTop();
  if (timelineScroll.scrollTop > maxTop) timelineScroll.scrollTop = maxTop;
  else if (timelineScroll.scrollTop < 0) timelineScroll.scrollTop = 0;
}
let dragStartX = 0, dragStartY = 0, dragStartScroll = 0, dragStartScrollTop = 0, lastDragX = 0, lastDragY = 0;
let velocity = 0, velocityY = 0, lastMoveTime = 0, momentumAnimId = null;

function cancelMomentum() {
  if (momentumAnimId) { cancelAnimationFrame(momentumAnimId); momentumAnimId = null; }
  velocity = 0; velocityY = 0;
}

function startMomentum() {
  if (momentumAnimId) { cancelAnimationFrame(momentumAnimId); momentumAnimId = null; }
  velocity = Math.max(-25, Math.min(25, velocity));
  velocityY = Math.max(-25, Math.min(25, velocityY));
  if (Math.abs(velocity) < 0.3 && Math.abs(velocityY) < 0.3) return;
  function animate() {
    if (Math.abs(velocity) < 0.2 && Math.abs(velocityY) < 0.2) { momentumAnimId = null; return; }
    velocity *= 0.88;
    velocityY *= 0.88;
    timelineScroll.scrollLeft += velocity;
    timelineScroll.scrollTop += velocityY;
    const maxTop = getMaxScrollTop();
    if (timelineScroll.scrollTop <= 0) { timelineScroll.scrollTop = 0; velocityY = 0; }
    else if (timelineScroll.scrollTop >= maxTop) { timelineScroll.scrollTop = maxTop; velocityY = 0; }
    updateScrollUI();
    momentumAnimId = requestAnimationFrame(animate);
  }
  momentumAnimId = requestAnimationFrame(animate);
}

timelineScroll.addEventListener('mousedown', (e) => {
  if (e.target.closest('.person-node')) return;
  if (e.target.closest('.detail-card')) return;
  cancelMomentum();
  isDragScrolling = true;
  dragStartX = e.clientX;
  dragStartY = e.clientY;
  lastDragX = e.clientX;
  lastDragY = e.clientY;
  dragStartScroll = timelineScroll.scrollLeft;
  dragStartScrollTop = timelineScroll.scrollTop;
  velocity = 0; velocityY = 0;
  lastMoveTime = Date.now();
  timelineScroll.style.cursor = 'grabbing';
  e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
  if (!isDragScrolling) return;
  const dx = e.clientX - dragStartX;
  const dy = e.clientY - dragStartY;
  timelineScroll.scrollLeft = dragStartScroll - dx;
  timelineScroll.scrollTop = Math.max(0, Math.min(getMaxScrollTop(), dragStartScrollTop - dy));
  const now = Date.now();
  const dt = now - lastMoveTime;
  if (dt > 0) {
    const mouseDeltaX = e.clientX - lastDragX;
    const mouseDeltaY = e.clientY - lastDragY;
    const instX = -mouseDeltaX / dt * 16;
    const instY = -mouseDeltaY / dt * 16;
    velocity = velocity * 0.3 + instX * 0.7;
    velocityY = velocityY * 0.3 + instY * 0.7;
  }
  lastDragX = e.clientX;
  lastDragY = e.clientY;
  lastMoveTime = now;
});

document.addEventListener('mouseup', () => {
  if (isDragScrolling) {
    isDragScrolling = false;
    timelineScroll.style.cursor = 'grab';
    startMomentum();
  }
});

timelineScroll.addEventListener('touchstart', (e) => {
  if (e.target.closest('.person-node')) return;
  if (isPinching) return;
  cancelMomentum();
  isDragScrolling = true;
  dragStartX = e.touches[0].clientX;
  dragStartY = e.touches[0].clientY;
  lastDragX = e.touches[0].clientX;
  lastDragY = e.touches[0].clientY;
  dragStartScroll = timelineScroll.scrollLeft;
  dragStartScrollTop = timelineScroll.scrollTop;
  velocity = 0; velocityY = 0;
  lastMoveTime = Date.now();
}, { passive: true });

timelineScroll.addEventListener('touchmove', (e) => {
  if (isPinching) return;
  if (!isDragScrolling) return;
  const dx = e.touches[0].clientX - dragStartX;
  const dy = e.touches[0].clientY - dragStartY;
  timelineScroll.scrollLeft = dragStartScroll - dx;
  timelineScroll.scrollTop = Math.max(0, Math.min(getMaxScrollTop(), dragStartScrollTop - dy));
  const now = Date.now();
  const dt = now - lastMoveTime;
  if (dt > 0) {
    const mouseDeltaX = e.touches[0].clientX - lastDragX;
    const mouseDeltaY = e.touches[0].clientY - lastDragY;
    const instX = -mouseDeltaX / dt * 16;
    const instY = -mouseDeltaY / dt * 16;
    velocity = velocity * 0.3 + instX * 0.7;
    velocityY = velocityY * 0.3 + instY * 0.7;
  }
  lastDragX = e.touches[0].clientX;
  lastDragY = e.touches[0].clientY;
  lastMoveTime = now;
}, { passive: true });

timelineScroll.addEventListener('touchend', () => {
  if (isDragScrolling) { isDragScrolling = false; startMomentum(); }
});

// ===== Apply Zoom =====
function applyZoom(newZoom, pivotX) {
  const oldZoom = zoom;
  zoom = newZoom;
  zoomLevel.textContent = Math.round(zoom * 100) + '%';
  timelineContent.style.transform = '';
  timelineContent.style.transformOrigin = '';
  timelineContent.style.zoom = zoom;
  timelineContent.style.width = BASE_WIDTH + 'px';
  const _viewH = getLayoutViewHeight();
  const _dH = dynastyBar.offsetHeight || Math.max(Math.round(_viewH * 0.1), 40);
  const vScale = Math.min(zoom, 1);
  const _vSafe = 1;
  timelineContent.style.height = ((_viewH - _vSafe) / vScale) + 'px';
  timelineContent.style.marginTop = (-_dH / zoom) + 'px';
  connectionsSvg.setAttribute('height', (_viewH - _vSafe) / vScale);
  connectionsSvg.style.height = ((_viewH - _vSafe) / vScale) + 'px';
  nodesContainer.querySelectorAll('.person-node').forEach(node => {
    const baseTop = parseFloat(node.dataset.baseTop);
    const r = parseFloat(node.dataset.radius) || 15;
    if (!isNaN(baseTop)) node.style.top = (baseTop / vScale - r) + 'px';
  });
  updateConnections();
  dynastyBar.style.width = (BASE_WIDTH * zoom) + 'px';
  dynastyBar.querySelectorAll('.dynasty-bar-item').forEach(item => {
    const baseCenterX = parseFloat(item.dataset.baseCenterX);
    if (!isNaN(baseCenterX)) item.style.left = (baseCenterX * zoom) + 'px';
    const baseW = parseFloat(item.dataset.baseWidth);
    if (!isNaN(baseW)) item.style.width = (baseW * zoom) + 'px';
  });
  dynastyBar.querySelectorAll('.dynasty-bar-child').forEach(cEl => {
    const baseLeft = parseFloat(cEl.dataset.baseLeft);
    const baseWidth = parseFloat(cEl.dataset.baseWidth);
    if (!isNaN(baseLeft)) cEl.style.left = (baseLeft * zoom) + 'px';
    if (!isNaN(baseWidth)) cEl.style.width = (baseWidth * zoom) + 'px';
  });
  updateDynastyBarLabels();
  updateNodeFontSizes();
  const newScroll = (pivotX + timelineScroll.scrollLeft) * (zoom / oldZoom) - pivotX;
  timelineScroll.scrollLeft = Math.max(0, newScroll);
  clampVerticalScroll();
  updateScrollUI();
}

// ===== Pinch Zoom =====
let pinchStartDist = 0, pinchStartZoom = 0, isPinching = false;

function getTouchDist(e) {
  const dx = e.touches[0].clientX - e.touches[1].clientX;
  const dy = e.touches[0].clientY - e.touches[1].clientY;
  return Math.sqrt(dx * dx + dy * dy);
}

timelineScroll.addEventListener('touchstart', (e) => {
  if (e.touches.length === 2 && !e.target.closest('.person-node')) {
    e.preventDefault();
    isPinching = true;
    cancelMomentum();
    pinchStartDist = getTouchDist(e);
    pinchStartZoom = zoom;
  }
}, { passive: false });

timelineScroll.addEventListener('touchmove', (e) => {
  if (!isPinching) return;
  e.preventDefault();
  const dist = getTouchDist(e);
  const scale = dist / pinchStartDist;
  const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, pinchStartZoom * scale));
  const cx = (e.touches[0].clientX + e.touches[1].clientX) / 2;
  const rect = timelineScroll.getBoundingClientRect();
  applyZoom(newZoom, cx - rect.left);
}, { passive: false });

timelineScroll.addEventListener('touchend', (e) => {
  if (isPinching && e.touches.length < 2) { isPinching = false; }
});

// ===== Wheel Zoom =====
timelineScroll.addEventListener('wheel', (e) => {
  e.preventDefault();
  cancelMomentum();
  const delta = e.deltaY > 0 ? -0.1 : 0.1;
  const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, zoom + delta));
  if (newZoom === zoom) return;
  const rect = timelineScroll.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  applyZoom(newZoom, mouseX);
}, { passive: false });

zoomInBtn.addEventListener('click', () => {
  const newZoom = Math.min(MAX_ZOOM, zoom + 0.2);
  if (newZoom !== zoom) applyZoom(newZoom, timelineScroll.clientWidth / 2);
});
zoomOutBtn.addEventListener('click', () => {
  const newZoom = Math.max(MIN_ZOOM, zoom - 0.2);
  if (newZoom !== zoom) applyZoom(newZoom, timelineScroll.clientWidth / 2);
});

// ===== Detail Card =====
function openDetail(person) {
  detailTitle.textContent = person.name;
  detailSubtitle.textContent = `${person.dynasty} · ${person.class} · ${formatYearRange(person.birthYear, person.deathYear)}`;
  let html = `<div class="detail-quote-box"><div class="detail-quote-text">「${person.quote}」</div><div class="detail-quote-source">—— ${person.quoteSource}</div></div>`;
  const relEntries = [];
  const relObj = person.relationships || {};
  Object.keys(relObj).forEach(key => {
    const r = relObj[key];
    if (r && r.id != null) relEntries.push(r);
  });
  hisData.forEach(p => {
    if (!String(p.id).startsWith('custom_')) return;
    const rels = p.relationships || {};
    Object.keys(rels).forEach(k => {
      const r = rels[k];
      if (r && r.id != null && String(r.id) === String(person.id)) {
        relEntries.push({ id: p.id, type: r.type || '其他', description: r.description || '' });
      }
    });
  });
  if (relEntries.length > 0) {
    html += `<div class="detail-relations">`;
    relEntries.forEach(r => {
      const other = getPersonById(r.id);
      if (!other) return;
      const raw = r.description || '';
      const desc = /[。.!?！？]$/.test(raw) ? raw : raw + '。';
      const ocolor = getColor(other);
      const personIcon = `<svg class="relation-icon" data-id="${other.id}" viewBox="0 0 24 24" style="color:${ocolor}"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>`;
      html += `<div class="relation-row">`
        + personIcon
        + `<span class="relation-text"><span class="relation-type">${r.type || '其他'}</span> `
        + `<span class="relation-name" data-id="${other.id}">${other.name}</span>`
        + `<span class="relation-desc"> ${desc}</span></span></div>`;
    });
    html += `</div>`;
  }
  detailBody.innerHTML = html;
  detailBody.querySelectorAll('.relation-name, .relation-icon').forEach(item => {
    item.addEventListener('click', () => { const id = item.dataset.id; const p = getPersonById(id); if (p) openDetail(p); });
  });
  const pc = getColor(person);
  detailCard.style.setProperty('--person-color', pc);
  detailOverlay.classList.add('active');
  detailCard.classList.add('active');
}

function closeDetail() { detailOverlay.classList.remove('active'); detailCard.classList.remove('active'); }
detailOverlay.addEventListener('click', closeDetail);
detailClose.addEventListener('click', closeDetail);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeDetail(); closeCustomModal(); } });
document.addEventListener('click', (e) => {
  if (!e.target.closest('.person-node')) {
    document.querySelectorAll('.person-node.show-delete').forEach(n => n.classList.remove('show-delete'));
  }
});

// ===== Delete Person =====
function deletePerson(id) {
  const person = getPersonById(id);
  if (!person) return;
  const isCustom = String(id).startsWith('custom_');
  const msg = isCustom
    ? `确认删除自定义人物「${person.name}」？`
    : `确认删除「${person.name}」？该人物为内置数据，删除后将无法恢复（刷新页面可恢复）。`;
  if (!confirm(msg)) return;
  hisData.forEach(p => {
    if (!p.relationships) return;
    Object.keys(p.relationships).forEach(k => {
      if (p.relationships[k] && String(p.relationships[k].id) === String(id)) delete p.relationships[k];
    });
  });
  const idx = hisData.findIndex(p => String(p.id) === String(id));
  if (idx > -1) hisData.splice(idx, 1);
  predefinedHis.forEach(his => {
    const i = his.indexOf(id);
    if (i > -1) his.splice(i, 1);
  });
  currentHis = currentHis.filter(x => x !== id);
  currentPath = currentPath.filter(x => x !== id);
  closeDetail();
  renderLegends();
  renderTimeline(currentHis.length ? currentHis : hisData.map(p => p.id));
  saveToStorage();
}

// ===== Scroll Sync =====
function updateScrollUI() {
  const maxScroll = timelineScroll.scrollWidth - timelineScroll.clientWidth;
  if (maxScroll > 0) {
    const pct = (timelineScroll.scrollLeft / maxScroll) * 100;
    scrollSlider.value = pct;
    const barPct = (timelineScroll.clientWidth / timelineScroll.scrollWidth) * 100;
    miniProgress.style.width = Math.max(barPct, 5) + '%';
    miniProgress.style.marginLeft = pct + '%';
  }
}
timelineScroll.addEventListener('scroll', () => { requestAnimationFrame(updateScrollUI); });
scrollSlider.addEventListener('input', (e) => {
  isScrolling = true;
  cancelMomentum();
  const pct = e.target.value / 100;
  timelineScroll.scrollLeft = pct * (timelineScroll.scrollWidth - timelineScroll.clientWidth);
  setTimeout(() => { isScrolling = false; }, 50);
});

// ===== Search & Jump =====
searchPersonInput.addEventListener('input', () => {
  const val = searchPersonInput.value.trim().toLowerCase();
  searchAutocompleteList.innerHTML = '';
  if (!val) { searchAutocompleteList.style.display = 'none'; return; }
  const matches = hisData.filter(p => p.name.includes(val) || p.dynasty.includes(val));
  if (matches.length === 0) { searchAutocompleteList.style.display = 'none'; return; }
  matches.forEach(p => {
    const item = document.createElement('div');
    item.className = 'autocomplete-item';
    item.textContent = `${p.name} (${p.dynasty} · ${formatYear(p.birthYear)}–${formatYear(p.deathYear)})`;
    item.addEventListener('click', () => {
      searchPersonInput.value = p.name;
      searchAutocompleteList.style.display = 'none';
      jumpToPerson(p.id);
    });
    searchAutocompleteList.appendChild(item);
  });
  searchAutocompleteList.style.display = 'block';
});
searchPersonInput.addEventListener('blur', () => { setTimeout(() => { searchAutocompleteList.style.display = 'none'; }, 200); });
searchPersonInput.addEventListener('focus', () => { if (searchPersonInput.value.trim()) searchPersonInput.dispatchEvent(new Event('input')); });

function scrollToNode(id, smooth) {
  const node = nodesById[id] || document.querySelector(`.person-node[data-id="${id}"]`);
  if (!node) return null;
  const nodeRect = node.getBoundingClientRect();
  const scrollRect = timelineScroll.getBoundingClientRect();
  const offset = nodeRect.left - scrollRect.left - scrollRect.width / 2 + nodeRect.width / 2;
  if (smooth) timelineScroll.scrollTo({ left: timelineScroll.scrollLeft + offset, behavior: 'smooth' });
  else timelineScroll.scrollLeft += offset;
  updateScrollUI();
  return node;
}

function jumpToPerson(id) {
  const person = getPersonById(id);
  if (!person) return;
  if (!currentHis.includes(id)) {
    currentHis.push(id);
    renderTimeline(currentHis);
  }
  scrollToNode(id, false);
  openDetail(person);
}

// ===== Highlight Path =====
function highlightPath(pathIds) {
  document.querySelectorAll('.node-circle').forEach(n => n.classList.remove('node-highlight'));
  document.querySelectorAll('.connection-line').forEach(l => l.classList.remove('line-highlight'));
  const idSet = new Set(pathIds);
  pathIds.forEach(id => {
    const node = document.querySelector(`.person-node[data-id="${id}"] .node-circle`);
    if (node) node.classList.add('node-highlight');
  });
  document.querySelectorAll('.connection-line').forEach(line => {
    if (idSet.has(line.dataset.fromId) && idSet.has(line.dataset.toId)) {
      line.classList.add('line-highlight');
    }
  });
}

// ===== Random Explore =====
randomBtn.addEventListener('click', () => {
  if (hisData.length === 0) return;
  const randomPerson = hisData[Math.floor(Math.random() * hisData.length)];
  const node = scrollToNode(randomPerson.id, true);
  if (node) {
    const circle = node.querySelector('.node-circle');
    if (circle) {
      circle.style.transition = 'filter 0.3s';
      circle.style.filter = 'drop-shadow(0 0 12px rgba(242,190,69,1)) brightness(1.3)';
      setTimeout(() => { circle.style.filter = ''; }, 1500);
    }
    randomBtn.textContent = randomPerson.name;
    setTimeout(() => { randomBtn.textContent = '随机探索'; }, 1500);
  }
});

// ===== Share =====
shareBtn.addEventListener('click', async () => {
  const link = window.location.href;
  try {
    await navigator.clipboard.writeText(link);
    shareBtn.textContent = '已复制!';
    setTimeout(() => { shareBtn.textContent = '分享'; }, 2000);
  } catch (e) {
    const ta = document.createElement('textarea');
    ta.value = link; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
    shareBtn.textContent = '已复制!';
    setTimeout(() => { shareBtn.textContent = '分享'; }, 2000);
  }
});

// ===== Custom Person Modal =====
function updateDynastyPreview() {
  const b = parseInt(customBirthInput.value);
  const d = parseInt(customDeathInput.value);
  if (!isNaN(b) && !isNaN(d) && b < d) {
    customDynastyInput.value = detectDynasty(b, d);
  } else {
    customDynastyInput.value = '';
  }
}
customBirthInput.addEventListener('input', updateDynastyPreview);
customDeathInput.addEventListener('input', updateDynastyPreview);

customBtn.addEventListener('click', () => {
  customNameInput.value = '';
  customBirthInput.value = '';
  customDeathInput.value = '';
  customDynastyInput.value = '';
  customQuoteInput.value = '';
  customSourceInput.value = '';
  customClassSelect.value = '文人';
  relationList.innerHTML = '';
  addRelationItem();
  customModalOverlay.classList.add('active');
  setTimeout(() => customNameInput.focus(), 100);
});

const RELATION_TYPE_OPTIONS = ['其他','师徒','同僚','君臣','亲友','家族','对手','敌对','忘年交','知己'];

function fillPersonOptions(selectEl) {
  const sorted = [...hisData].sort((a, b) => a.birthYear - b.birthYear);
  selectEl.innerHTML = '';
  sorted.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = `${p.name}（${p.dynasty} · ${formatYear(p.birthYear)}–${formatYear(p.deathYear)}）`;
    selectEl.appendChild(opt);
  });
}

function addRelationItem() {
  const item = document.createElement('div');
  item.className = 'relation-item';
  const sel = document.createElement('select');
  sel.className = 'rel-person';
  fillPersonOptions(sel);
  const typeSel = document.createElement('select');
  typeSel.className = 'rel-type';
  RELATION_TYPE_OPTIONS.forEach(t => {
    const o = document.createElement('option');
    o.value = t; o.textContent = t;
    typeSel.appendChild(o);
  });
  const desc = document.createElement('input');
  desc.type = 'text';
  desc.className = 'rel-desc';
  desc.placeholder = '关系佐证语（留空自动生成）';
  const rm = document.createElement('button');
  rm.type = 'button';
  rm.className = 'rel-remove';
  rm.textContent = '×';
  rm.title = '移除该关联';
  rm.addEventListener('click', () => {
    if (relationList.children.length > 1) item.remove();
  });
  item.appendChild(sel);
  item.appendChild(typeSel);
  item.appendChild(desc);
  item.appendChild(rm);
  relationList.appendChild(item);
}
addRelationBtn.addEventListener('click', addRelationItem);

customCancelBtn.addEventListener('click', closeCustomModal);
customModalOverlay.addEventListener('click', (e) => { if (e.target === customModalOverlay) closeCustomModal(); });

function closeCustomModal() { customModalOverlay.classList.remove('active'); }

customSubmitBtn.addEventListener('click', () => {
  const name = customNameInput.value.trim();
  const className = customClassSelect.value;
  const birthYear = parseInt(customBirthInput.value, 10);
  const deathYear = parseInt(customDeathInput.value, 10);
  const quote = customQuoteInput.value.trim() || '暂无记载。';
  const quoteSource = customSourceInput.value.trim() || '佚名';
  if (!name || isNaN(birthYear) || isNaN(deathYear) || birthYear >= deathYear) {
    alert('请填写正确的姓名和生卒年（出生年需小于去世年）');
    return;
  }
  const items = relationList.querySelectorAll('.relation-item');
  const seen = new Set();
  const relations = [];
  items.forEach(it => {
    const pid = it.querySelector('.rel-person').value;
    if (!pid) return;
    const ptype = it.querySelector('.rel-type').value || '其他';
    const pdesc = it.querySelector('.rel-desc').value.trim();
    if (seen.has(String(pid))) {
      const idx = relations.findIndex(r => String(r.pid) === String(pid));
      if (idx > -1) relations.splice(idx, 1);
    }
    seen.add(String(pid));
    relations.push({ pid, ptype, pdesc });
  });
  if (relations.length === 0) {
    alert('请至少选择一位关联人物');
    return;
  }
  const dynasty = detectDynasty(birthYear, deathYear);
  const id = 'custom_' + Date.now();
  const newPerson = {
    id, name, birthYear, deathYear, dynasty,
    class: className, classColor: classColors[className] || '#75878A',
    quote, quoteSource, isKeyFigure: false, relationships: {}
  };
  relations.forEach(r => {
    const rp = getPersonById(r.pid);
    if (!rp) return;
    const desc = r.pdesc || `${name}与${rp.name}之间的历史关联。`;
    newPerson.relationships['rel_' + r.pid] = { id: rp.id, type: r.ptype, description: desc };
  });
  hisData.push(newPerson);
  predefinedHis[0] = hisData.map(p => p.id);
  currentHis = hisData.map(p => p.id);
  currentPath = [];
  renderLegends();
  renderTimeline(currentHis);
  saveToStorage();
  closeCustomModal();
});

// ===== 导出 / 导入 / 自动加载位置 =====
const SAVE_JSON = 'lifedata.js';
let loadedPositions = null;
const originalHisData = JSON.parse(JSON.stringify(hisData));

function collectCurrentState() {
  const allNodes = document.querySelectorAll('.person-node[data-id]');
  const posData = {};
  allNodes.forEach(node => {
    const id = node.dataset.id;
    const baseLeft = parseFloat(node.dataset.baseLeft);
    const baseTop = parseFloat(node.dataset.baseTop);
    if (!isNaN(baseLeft) && !isNaN(baseTop)) {
      posData[id] = { x: baseLeft, y: baseTop };
    }
  });
  const customList = hisData.filter(p => String(p.id).startsWith('custom_'));
  return { positions: posData, customPersons: customList };
}

function exportData() {
  const state = collectCurrentState();
  const jsContent = '/* lifedata.js — 合并数据文件 */\n'
    + 'const hisData = ' + JSON.stringify(hisData, null, 2) + ';\n\n'
    + 'const predefinedHis = ' + JSON.stringify(predefinedHis, null, 2) + ';\n\n'
    + 'var historyChainSave = ' + JSON.stringify(state, null, 2) + ';\n';
  const blob = new Blob([jsContent], { type: 'application/javascript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'lifedata.js';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  window.historyChainSave = state;
  loadedPositions = state.positions;
  if (state.customPersons && state.customPersons.length > 0) {
    state.customPersons.forEach(cp => {
      if (!hisData.find(p => p.id === cp.id)) hisData.push(cp);
    });
    savedCustomPersons = state.customPersons;
    currentHis = hisData.map(p => p.id);
  }
  showToast('已导出 lifedata.js（' + Object.keys(state.positions).length + ' 个位置）');
}

function applyImportedData(data) {
  if (data.hisData && Array.isArray(data.hisData)) {
    hisData.length = 0;
    data.hisData.forEach(p => hisData.push(p));
  }
  if (data.predefinedHis && Array.isArray(data.predefinedHis)) {
    predefinedHis.length = 0;
    data.predefinedHis.forEach(chain => predefinedHis.push(chain));
  }
  const savePart = data.historyChainSave || data;
  if (savePart.positions) { loadedPositions = savePart.positions; }
  if (savePart.customPersons && savePart.customPersons.length > 0) {
    savePart.customPersons.forEach(cp => {
      if (!hisData.find(p => p.id === cp.id)) hisData.push(cp);
    });
    savedCustomPersons = savePart.customPersons;
  }
  currentHis = hisData.map(p => p.id);
  renderLegends();
  renderTimeline(currentHis);
  applyLoadedPositions();
  if (currentPath.length > 0) highlightPath(currentPath);
}

function importData() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.js,.json';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      let text = ev.target.result;
      try {
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        const win = iframe.contentWindow;
        try {
          win.eval(text);
          const data = {
            hisData: win.hisData || null,
            predefinedHis: win.predefinedHis || null,
            historyChainSave: win.historyChainSave || null
          };
          applyImportedData(data);
          showToast('已导入 ' + file.name + '（' + hisData.length + ' 个人物）');
        } finally {
          document.body.removeChild(iframe);
        }
      } catch (err) {
        try {
          const json = JSON.parse(text);
          applyImportedData(json);
          showToast('已导入 ' + file.name + '（JSON 格式）');
        } catch(e2) {
          showToast('导入失败：文件格式不正确');
        }
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

// ===== Browser localStorage cache =====
const STORAGE_KEY = 'hisToLink_save_v1';
let _saveTimer = null;

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || typeof data !== 'object') return null;
    return data;
  } catch (e) {
    console.warn('读取本地缓存失败：', e);
    return null;
  }
}

function saveToStorage() {
  try {
    const posData = {};
    Object.keys(globalPositions).forEach(id => {
      const p = globalPositions[id];
      if (p && typeof p.x === 'number' && typeof p.y === 'number') {
        posData[id] = { x: p.x, y: p.y };
      }
    });
    const customList = hisData.filter(p => String(p.id).startsWith('custom_'));
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ positions: posData, customPersons: customList }));
  } catch (e) {
    console.warn('写入本地缓存失败：', e);
  }
}

function scheduleSave() {
  if (_saveTimer) clearTimeout(_saveTimer);
  _saveTimer = setTimeout(saveToStorage, 400);
}

async function loadPositionsFromJSON() {
  const cached = loadFromStorage();
  if (cached) {
    if (cached.positions) loadedPositions = cached.positions;
    if (Array.isArray(cached.customPersons) && cached.customPersons.length > 0) {
      cached.customPersons.forEach(cp => {
        if (!hisData.find(p => p.id === cp.id)) hisData.push(cp);
      });
      savedCustomPersons = cached.customPersons;
      currentHis = hisData.map(p => p.id);
    }
    return;
  }
  if (typeof historyChainSave !== 'undefined' && historyChainSave) {
    if (historyChainSave.positions) { loadedPositions = historyChainSave.positions; }
    if (historyChainSave.customPersons && historyChainSave.customPersons.length > 0) {
      historyChainSave.customPersons.forEach(cp => {
        if (!hisData.find(p => p.id === cp.id)) hisData.push(cp);
      });
      savedCustomPersons = historyChainSave.customPersons;
      currentHis = hisData.map(p => p.id);
    }
  }
}

function applyLoadedPositions() {
  if (!loadedPositions) return;
  Object.keys(loadedPositions).forEach(id => {
    if (globalPositions[id]) {
      globalPositions[id].x = loadedPositions[id].x;
      globalPositions[id].y = loadedPositions[id].y;
    }
  });
  refreshNodePositions();
}

function parseLifedata(text) {
  try {
    return new Function(text + '\n; return { hisData: hisData, historyChainSave: (typeof historyChainSave !== "undefined" ? historyChainSave : null) };')();
  } catch (e) {
    return null;
  }
}

function readLifedataFile() {
  return new Promise(resolve => {
    fetch('lifedata.js', { cache: 'no-store' })
      .then(r => r.ok ? r.text() : Promise.reject())
      .then(txt => resolve(parseLifedata(txt)))
      .catch(() => {
        try {
          const xhr = new XMLHttpRequest();
          xhr.open('GET', 'lifedata.js', false);
          xhr.send();
          if (xhr.status === 0 || xhr.status === 200) {
            return resolve(parseLifedata(xhr.responseText));
          }
        } catch (e) {}
        resolve(null);
      });
  });
}

async function resetToDefault() {
  if (!window.confirm('确定要重置为默认布局吗？\n这将清除你保存的位置和所有自定义人物，重新从 lifedata.js 读取数据与默认位置。')) return;
  const parsed = await readLifedataFile();
  let fromFile = true;
  let fresh, defPositions = null;
  if (parsed && Array.isArray(parsed.hisData) && parsed.hisData.length > 0) {
    fresh = parsed.hisData;
    if (parsed.historyChainSave && parsed.historyChainSave.positions) {
      defPositions = parsed.historyChainSave.positions;
    }
  } else {
    fresh = originalHisData;
    fromFile = false;
    if (typeof historyChainSave !== 'undefined' && historyChainSave.positions) {
      defPositions = historyChainSave.positions;
    }
  }
  loadedPositions = defPositions;
  savedCustomPersons = [];
  hisData.length = 0;
  fresh.forEach(p => hisData.push(JSON.parse(JSON.stringify(p))));
  currentHis = hisData.map(p => p.id);
  currentPath = [];
  document.querySelectorAll('.person-node.show-delete').forEach(n => n.classList.remove('show-delete'));
  try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
  renderLegends();
  renderTimeline(currentHis);
  applyLoadedPositions();
  showToast(fromFile ? '已重置：重新读取 lifedata.js 文件与默认位置' : '已重置（页面加载时的 lifedata 副本；用 http 打开可从文件读取）');
}

function showToast(msg) {
  let toast = document.getElementById('saveToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'saveToast';
    toast.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:linear-gradient(160deg,#D24C52,#A52F35);color:#fff;padding:0.5rem 1.5rem;border-radius:6px;font-size:0.85rem;z-index:9999;opacity:0;transition:opacity 0.3s;pointer-events:none;font-family:var(--base-font);box-shadow:0 4px 16px rgba(0,0,0,0.5);white-space:nowrap;max-width:90vw;text-align:center;';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  setTimeout(() => { toast.style.opacity = '0'; }, 3000);
}

document.getElementById('importBtn').addEventListener('click', importData);
document.getElementById('exportBtn').addEventListener('click', exportData);
document.getElementById('resetBtn').addEventListener('click', resetToDefault);

// ===== Initialization =====
async function init() {
  await loadPositionsFromJSON();
  renderLegends();
  renderTimeline(currentHis);
  applyLoadedPositions();
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      renderTimeline(currentHis);
      applyLoadedPositions();
      if (currentPath.length > 0) highlightPath(currentPath);
    }, 250);
  });
}

function refreshNodePositions() {
  const nodes = document.querySelectorAll('.person-node[data-id]');
  nodes.forEach(node => {
    const id = node.dataset.id;
    const pos = globalPositions[id];
    if (!pos) return;
    const R = 15;
    node.style.left = (pos.x - R) + 'px';
    node.style.top = (pos.y / Math.min(zoom, 1) - R) + 'px';
    node.dataset.baseLeft = pos.x;
    node.dataset.baseTop = pos.y;
  });
  updateConnections();
}
if (document.readyState === 'complete') {
  init();
} else {
  window.addEventListener('load', init);
}
