const L = "tablet-info-card", be = "0.4.0", xe = "ui_element_type", we = "tablet_info_card", w = {
  source: "template_entity",
  background_ok: "rgba(46, 46, 46, 0.5)",
  background_nok: "#ffcccc",
  text_ok: "#18bcf2",
  text_nok: "#3a3a3a",
  text_highlight: "#ff5d0c",
  graph_warn_color: "#d93025",
  graph_value_color: "#d5d8dc",
  icon_size: "37px",
  row_indent: "10px",
  header_padding: "10px",
  body_padding: "10px",
  height: "130px",
  graph_height: "35px",
  border_radius: "20px",
  title_font_size: "16px",
  row_font_size: "12px",
  graph_value_font_size: "20px"
}, A = (e) => e != null && e !== "", R = (e) => e === !0 || e === "true" || e === "True" || e === "on" || e === "yes" || e === 1 || e === "1", f = (e) => A(e) ? String(e).replace(/\s+/g, " ").trim() : "", te = (e) => {
  const t = f(e);
  return t.length > 0 ? t : null;
}, Ae = (e, t) => {
  if (!e)
    return "";
  const i = Array.isArray(e.state) || typeof e.state == "object" ? JSON.stringify(e.state) : e.state, n = t ?? (e.attributes?.unit_of_measurement ? String(e.attributes.unit_of_measurement) : "");
  return n ? `${i} ${n}` : i;
}, yt = (e) => {
  const t = e?.attributes ?? {};
  return f(t[xe]) === we;
}, Ee = (e) => Object.entries(e?.states ?? {}).filter(([, t]) => yt(t)).map(([t]) => t).sort((t, i) => t.localeCompare(i));
const et = globalThis, _t = et.ShadowRoot && (et.ShadyCSS === void 0 || et.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $t = /* @__PURE__ */ Symbol(), Ut = /* @__PURE__ */ new WeakMap();
let ee = class {
  constructor(t, i, n) {
    if (this._$cssResult$ = !0, n !== $t) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = i;
  }
  get styleSheet() {
    let t = this.o;
    const i = this.t;
    if (_t && t === void 0) {
      const n = i !== void 0 && i.length === 1;
      n && (t = Ut.get(i)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Ut.set(i, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Se = (e) => new ee(typeof e == "string" ? e : e + "", void 0, $t), E = (e, ...t) => {
  const i = e.length === 1 ? e[0] : t.reduce((n, s, r) => n + ((o) => {
    if (o._$cssResult$ === !0) return o.cssText;
    if (typeof o == "number") return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + e[r + 1], e[0]);
  return new ee(i, e, $t);
}, ke = (e, t) => {
  if (_t) e.adoptedStyleSheets = t.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet);
  else for (const i of t) {
    const n = document.createElement("style"), s = et.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = i.cssText, e.appendChild(n);
  }
}, Rt = _t ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let i = "";
  for (const n of t.cssRules) i += n.cssText;
  return Se(i);
})(e) : e;
const { is: Ce, defineProperty: Pe, getOwnPropertyDescriptor: Te, getOwnPropertyNames: Ne, getOwnPropertySymbols: ze, getPrototypeOf: Me } = Object, k = globalThis, Dt = k.trustedTypes, Oe = Dt ? Dt.emptyScript : "", Ue = k.reactiveElementPolyfillSupport, I = (e, t) => e, st = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? Oe : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, t) {
  let i = e;
  switch (t) {
    case Boolean:
      i = e !== null;
      break;
    case Number:
      i = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        i = JSON.parse(e);
      } catch {
        i = null;
      }
  }
  return i;
} }, vt = (e, t) => !Ce(e, t), Ht = { attribute: !0, type: String, converter: st, reflect: !1, useDefault: !1, hasChanged: vt };
Symbol.metadata ?? (Symbol.metadata = /* @__PURE__ */ Symbol("metadata")), k.litPropertyMetadata ?? (k.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let U = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, i = Ht) {
    if (i.state && (i.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((i = Object.create(i)).wrapped = !0), this.elementProperties.set(t, i), !i.noAccessor) {
      const n = /* @__PURE__ */ Symbol(), s = this.getPropertyDescriptor(t, n, i);
      s !== void 0 && Pe(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, i, n) {
    const { get: s, set: r } = Te(this.prototype, t) ?? { get() {
      return this[i];
    }, set(o) {
      this[i] = o;
    } };
    return { get: s, set(o) {
      const a = s?.call(this);
      r?.call(this, o), this.requestUpdate(t, a, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Ht;
  }
  static _$Ei() {
    if (this.hasOwnProperty(I("elementProperties"))) return;
    const t = Me(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(I("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(I("properties"))) {
      const i = this.properties, n = [...Ne(i), ...ze(i)];
      for (const s of n) this.createProperty(s, i[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const i = litPropertyMetadata.get(t);
      if (i !== void 0) for (const [n, s] of i) this.elementProperties.set(n, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [i, n] of this.elementProperties) {
      const s = this._$Eu(i, n);
      s !== void 0 && this._$Eh.set(s, i);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const i = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const s of n) i.unshift(Rt(s));
    } else t !== void 0 && i.push(Rt(t));
    return i;
  }
  static _$Eu(t, i) {
    const n = i.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t) => t(this));
  }
  addController(t) {
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$EO?.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), i = this.constructor.elementProperties;
    for (const n of i.keys()) this.hasOwnProperty(n) && (t.set(n, this[n]), delete this[n]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return ke(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), this._$EO?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, i, n) {
    this._$AK(t, n);
  }
  _$ET(t, i) {
    const n = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, n);
    if (s !== void 0 && n.reflect === !0) {
      const r = (n.converter?.toAttribute !== void 0 ? n.converter : st).toAttribute(i, n.type);
      this._$Em = t, r == null ? this.removeAttribute(s) : this.setAttribute(s, r), this._$Em = null;
    }
  }
  _$AK(t, i) {
    const n = this.constructor, s = n._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const r = n.getPropertyOptions(s), o = typeof r.converter == "function" ? { fromAttribute: r.converter } : r.converter?.fromAttribute !== void 0 ? r.converter : st;
      this._$Em = s;
      const a = o.fromAttribute(i, r.type);
      this[s] = a ?? this._$Ej?.get(s) ?? a, this._$Em = null;
    }
  }
  requestUpdate(t, i, n, s = !1, r) {
    if (t !== void 0) {
      const o = this.constructor;
      if (s === !1 && (r = this[t]), n ?? (n = o.getPropertyOptions(t)), !((n.hasChanged ?? vt)(r, i) || n.useDefault && n.reflect && r === this._$Ej?.get(t) && !this.hasAttribute(o._$Eu(t, n)))) return;
      this.C(t, i, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, i, { useDefault: n, reflect: s, wrapped: r }, o) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, o ?? i ?? this[t]), r !== !0 || o !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (i = void 0), this._$AL.set(t, i)), s === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (i) {
      Promise.reject(i);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [s, r] of this._$Ep) this[s] = r;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0) for (const [s, r] of n) {
        const { wrapped: o } = r, a = this[s];
        o !== !0 || this._$AL.has(s) || a === void 0 || this.C(s, void 0, r, a);
      }
    }
    let t = !1;
    const i = this._$AL;
    try {
      t = this.shouldUpdate(i), t ? (this.willUpdate(i), this._$EO?.forEach((n) => n.hostUpdate?.()), this.update(i)) : this._$EM();
    } catch (n) {
      throw t = !1, this._$EM(), n;
    }
    t && this._$AE(i);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach((i) => i.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((i) => this._$ET(i, this[i]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
U.elementStyles = [], U.shadowRootOptions = { mode: "open" }, U[I("elementProperties")] = /* @__PURE__ */ new Map(), U[I("finalized")] = /* @__PURE__ */ new Map(), Ue?.({ ReactiveElement: U }), (k.reactiveElementVersions ?? (k.reactiveElementVersions = [])).push("2.1.2");
const V = globalThis, jt = (e) => e, nt = V.trustedTypes, Lt = nt ? nt.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, ie = "$lit$", S = `lit$${Math.random().toFixed(9).slice(2)}$`, se = "?" + S, Re = `<${se}>`, M = document, W = () => M.createComment(""), B = (e) => e === null || typeof e != "object" && typeof e != "function", bt = Array.isArray, De = (e) => bt(e) || typeof e?.[Symbol.iterator] == "function", ft = `[ 	
\f\r]`, j = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, It = /-->/g, Vt = />/g, P = RegExp(`>|${ft}(?:([^\\s"'>=/]+)(${ft}*=${ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Gt = /'/g, Wt = /"/g, ne = /^(?:script|style|textarea|title)$/i, re = (e) => (t, ...i) => ({ _$litType$: e, strings: t, values: i }), u = re(1), He = re(2), C = /* @__PURE__ */ Symbol.for("lit-noChange"), d = /* @__PURE__ */ Symbol.for("lit-nothing"), Bt = /* @__PURE__ */ new WeakMap(), z = M.createTreeWalker(M, 129);
function oe(e, t) {
  if (!bt(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Lt !== void 0 ? Lt.createHTML(t) : t;
}
const je = (e, t) => {
  const i = e.length - 1, n = [];
  let s, r = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = j;
  for (let a = 0; a < i; a++) {
    const l = e[a];
    let p, h, c = -1, m = 0;
    for (; m < l.length && (o.lastIndex = m, h = o.exec(l), h !== null); ) m = o.lastIndex, o === j ? h[1] === "!--" ? o = It : h[1] !== void 0 ? o = Vt : h[2] !== void 0 ? (ne.test(h[2]) && (s = RegExp("</" + h[2], "g")), o = P) : h[3] !== void 0 && (o = P) : o === P ? h[0] === ">" ? (o = s ?? j, c = -1) : h[1] === void 0 ? c = -2 : (c = o.lastIndex - h[2].length, p = h[1], o = h[3] === void 0 ? P : h[3] === '"' ? Wt : Gt) : o === Wt || o === Gt ? o = P : o === It || o === Vt ? o = j : (o = P, s = void 0);
    const g = o === P && e[a + 1].startsWith("/>") ? " " : "";
    r += o === j ? l + Re : c >= 0 ? (n.push(p), l.slice(0, c) + ie + l.slice(c) + S + g) : l + S + (c === -2 ? a : g);
  }
  return [oe(e, r + (e[i] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class q {
  constructor({ strings: t, _$litType$: i }, n) {
    let s;
    this.parts = [];
    let r = 0, o = 0;
    const a = t.length - 1, l = this.parts, [p, h] = je(t, i);
    if (this.el = q.createElement(p, n), z.currentNode = this.el.content, i === 2 || i === 3) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (s = z.nextNode()) !== null && l.length < a; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const c of s.getAttributeNames()) if (c.endsWith(ie)) {
          const m = h[o++], g = s.getAttribute(c).split(S), $ = /([.?@])?(.*)/.exec(m);
          l.push({ type: 1, index: r, name: $[2], strings: g, ctor: $[1] === "." ? Ie : $[1] === "?" ? Ve : $[1] === "@" ? Ge : ht }), s.removeAttribute(c);
        } else c.startsWith(S) && (l.push({ type: 6, index: r }), s.removeAttribute(c));
        if (ne.test(s.tagName)) {
          const c = s.textContent.split(S), m = c.length - 1;
          if (m > 0) {
            s.textContent = nt ? nt.emptyScript : "";
            for (let g = 0; g < m; g++) s.append(c[g], W()), z.nextNode(), l.push({ type: 2, index: ++r });
            s.append(c[m], W());
          }
        }
      } else if (s.nodeType === 8) if (s.data === se) l.push({ type: 2, index: r });
      else {
        let c = -1;
        for (; (c = s.data.indexOf(S, c + 1)) !== -1; ) l.push({ type: 7, index: r }), c += S.length - 1;
      }
      r++;
    }
  }
  static createElement(t, i) {
    const n = M.createElement("template");
    return n.innerHTML = t, n;
  }
}
function D(e, t, i = e, n) {
  if (t === C) return t;
  let s = n !== void 0 ? i._$Co?.[n] : i._$Cl;
  const r = B(t) ? void 0 : t._$litDirective$;
  return s?.constructor !== r && (s?._$AO?.(!1), r === void 0 ? s = void 0 : (s = new r(e), s._$AT(e, i, n)), n !== void 0 ? (i._$Co ?? (i._$Co = []))[n] = s : i._$Cl = s), s !== void 0 && (t = D(e, s._$AS(e, t.values), s, n)), t;
}
class Le {
  constructor(t, i) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: i }, parts: n } = this._$AD, s = (t?.creationScope ?? M).importNode(i, !0);
    z.currentNode = s;
    let r = z.nextNode(), o = 0, a = 0, l = n[0];
    for (; l !== void 0; ) {
      if (o === l.index) {
        let p;
        l.type === 2 ? p = new Q(r, r.nextSibling, this, t) : l.type === 1 ? p = new l.ctor(r, l.name, l.strings, this, t) : l.type === 6 && (p = new We(r, this, t)), this._$AV.push(p), l = n[++a];
      }
      o !== l?.index && (r = z.nextNode(), o++);
    }
    return z.currentNode = M, s;
  }
  p(t) {
    let i = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, i), i += n.strings.length - 2) : n._$AI(t[i])), i++;
  }
}
class Q {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, i, n, s) {
    this.type = 2, this._$AH = d, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = n, this.options = s, this._$Cv = s?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const i = this._$AM;
    return i !== void 0 && t?.nodeType === 11 && (t = i.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, i = this) {
    t = D(this, t, i), B(t) ? t === d || t == null || t === "" ? (this._$AH !== d && this._$AR(), this._$AH = d) : t !== this._$AH && t !== C && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : De(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== d && B(this._$AH) ? this._$AA.nextSibling.data = t : this.T(M.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: i, _$litType$: n } = t, s = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = q.createElement(oe(n.h, n.h[0]), this.options)), n);
    if (this._$AH?._$AD === s) this._$AH.p(i);
    else {
      const r = new Le(s, this), o = r.u(this.options);
      r.p(i), this.T(o), this._$AH = r;
    }
  }
  _$AC(t) {
    let i = Bt.get(t.strings);
    return i === void 0 && Bt.set(t.strings, i = new q(t)), i;
  }
  k(t) {
    bt(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let n, s = 0;
    for (const r of t) s === i.length ? i.push(n = new Q(this.O(W()), this.O(W()), this, this.options)) : n = i[s], n._$AI(r), s++;
    s < i.length && (this._$AR(n && n._$AB.nextSibling, s), i.length = s);
  }
  _$AR(t = this._$AA.nextSibling, i) {
    for (this._$AP?.(!1, !0, i); t !== this._$AB; ) {
      const n = jt(t).nextSibling;
      jt(t).remove(), t = n;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class ht {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, i, n, s, r) {
    this.type = 1, this._$AH = d, this._$AN = void 0, this.element = t, this.name = i, this._$AM = s, this.options = r, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = d;
  }
  _$AI(t, i = this, n, s) {
    const r = this.strings;
    let o = !1;
    if (r === void 0) t = D(this, t, i, 0), o = !B(t) || t !== this._$AH && t !== C, o && (this._$AH = t);
    else {
      const a = t;
      let l, p;
      for (t = r[0], l = 0; l < r.length - 1; l++) p = D(this, a[n + l], i, l), p === C && (p = this._$AH[l]), o || (o = !B(p) || p !== this._$AH[l]), p === d ? t = d : t !== d && (t += (p ?? "") + r[l + 1]), this._$AH[l] = p;
    }
    o && !s && this.j(t);
  }
  j(t) {
    t === d ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ie extends ht {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === d ? void 0 : t;
  }
}
class Ve extends ht {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== d);
  }
}
class Ge extends ht {
  constructor(t, i, n, s, r) {
    super(t, i, n, s, r), this.type = 5;
  }
  _$AI(t, i = this) {
    if ((t = D(this, t, i, 0) ?? d) === C) return;
    const n = this._$AH, s = t === d && n !== d || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, r = t !== d && (n === d || s);
    s && this.element.removeEventListener(this.name, this, n), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class We {
  constructor(t, i, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    D(this, t);
  }
}
const Be = V.litHtmlPolyfillSupport;
Be?.(q, Q), (V.litHtmlVersions ?? (V.litHtmlVersions = [])).push("3.3.3");
const qe = (e, t, i) => {
  const n = i?.renderBefore ?? t;
  let s = n._$litPart$;
  if (s === void 0) {
    const r = i?.renderBefore ?? null;
    n._$litPart$ = s = new Q(t.insertBefore(W(), r), r, void 0, i ?? {});
  }
  return s._$AI(e), s;
};
const G = globalThis;
let _ = class extends U {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var i;
    const t = super.createRenderRoot();
    return (i = this.renderOptions).renderBefore ?? (i.renderBefore = t.firstChild), t;
  }
  update(t) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = qe(i, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return C;
  }
};
_._$litElement$ = !0, _.finalized = !0, G.litElementHydrateSupport?.({ LitElement: _ });
const Fe = G.litElementPolyfillSupport;
Fe?.({ LitElement: _ });
(G.litElementVersions ?? (G.litElementVersions = [])).push("4.2.2");
const Ke = { attribute: !0, type: String, converter: st, reflect: !1, hasChanged: vt }, Ye = (e = Ke, t, i) => {
  const { kind: n, metadata: s } = i;
  let r = globalThis.litPropertyMetadata.get(s);
  if (r === void 0 && globalThis.litPropertyMetadata.set(s, r = /* @__PURE__ */ new Map()), n === "setter" && ((e = Object.create(e)).wrapped = !0), r.set(i.name, e), n === "accessor") {
    const { name: o } = i;
    return { set(a) {
      const l = t.get.call(this);
      t.set.call(this, a), this.requestUpdate(o, l, e, !0, a);
    }, init(a) {
      return a !== void 0 && this.C(o, void 0, e, a), a;
    } };
  }
  if (n === "setter") {
    const { name: o } = i;
    return function(a) {
      const l = this[o];
      t.call(this, a), this.requestUpdate(o, l, e, !0, a);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function y(e) {
  return (t, i) => typeof i == "object" ? Ye(e, t, i) : ((n, s, r) => {
    const o = s.hasOwnProperty(r);
    return s.constructor.createProperty(r, n), o ? Object.getOwnPropertyDescriptor(s, r) : void 0;
  })(e, t, i);
}
function pt(e) {
  return y({ ...e, state: !0, attribute: !1 });
}
const b = (e, t) => {
  customElements.get(e) || customElements.define(e, t);
};
const ae = { ATTRIBUTE: 1 }, le = (e) => (...t) => ({ _$litDirective$: e, values: t });
let ce = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, i, n) {
    this._$Ct = t, this._$AM = i, this._$Ci = n;
  }
  _$AS(t, i) {
    return this.update(t, i);
  }
  update(t, i) {
    return this.render(...i);
  }
};
const it = le(class extends ce {
  constructor(e) {
    if (super(e), e.type !== ae.ATTRIBUTE || e.name !== "class" || e.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(e) {
    return " " + Object.keys(e).filter((t) => e[t]).join(" ") + " ";
  }
  update(e, [t]) {
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), e.strings !== void 0 && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((n) => n !== "")));
      for (const n in t) t[n] && !this.nt?.has(n) && this.st.add(n);
      return this.render(t);
    }
    const i = e.element.classList;
    for (const n of this.st) n in t || (i.remove(n), this.st.delete(n));
    for (const n in t) {
      const s = !!t[n];
      s === this.st.has(n) || this.nt?.has(n) || (s ? (i.add(n), this.st.add(n)) : (i.remove(n), this.st.delete(n)));
    }
    return C;
  }
});
const he = "important", Je = " !" + he, Ze = le(class extends ce {
  constructor(e) {
    if (super(e), e.type !== ae.ATTRIBUTE || e.name !== "style" || e.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(e) {
    return Object.keys(e).reduce((t, i) => {
      const n = e[i];
      return n == null ? t : t + `${i = i.includes("-") ? i : i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${n};`;
    }, "");
  }
  update(e, [t]) {
    const { style: i } = e.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(t)), this.render(t);
    for (const n of this.ft) t[n] == null && (this.ft.delete(n), n.includes("-") ? i.removeProperty(n) : i[n] = null);
    for (const n in t) {
      const s = t[n];
      if (s != null) {
        this.ft.add(n);
        const r = typeof s == "string" && s.endsWith(Je);
        n.includes("-") || r ? i.setProperty(n, r ? s.slice(0, -11) : s, r ? he : "") : i[n] = s;
      }
    }
    return C;
  }
}), gt = (e, t) => {
  e.dispatchEvent(
    new CustomEvent("hass-action", {
      bubbles: !0,
      composed: !0,
      detail: t
    })
  );
}, N = (e, t) => {
  const i = String(e ?? t).trim();
  return i.length > 0 ? i.replace(/[{};]/g, "") : t;
}, x = (e, t) => {
  if (typeof e == "number" && Number.isFinite(e))
    return `${e}px`;
  const i = N(e, t);
  return /^-?\d+(\.\d+)?$/.test(i) ? `${i}px` : i;
}, Xe = (e, t) => ({
  "--tic-background": N(t.background, "rgba(46, 46, 46, 0.5)"),
  "--tic-main-color": N(t.mainColor, "#18bcf2"),
  "--tic-graph-color": N(
    t.isWarn ? e.graph_warn_color : t.graph?.color || t.mainColor,
    "#18bcf2"
  ),
  "--tic-graph-value-color": N(t.isWarn ? t.mainColor : e.graph_value_color, "#d5d8dc"),
  "--tic-highlight-color": N(e.text_highlight, "#ff5d0c"),
  "--tic-height": x(e.height, "130px"),
  "--tic-graph-height": x(e.graph_height, "35px"),
  "--tic-border-radius": N(e.border_radius, "20px"),
  "--tic-icon-size": x(e.icon_size, "37px"),
  "--tic-row-indent": x(e.row_indent, "10px"),
  "--tic-header-padding": x(e.header_padding, "10px"),
  "--tic-body-padding": x(e.body_padding, "10px"),
  "--tic-title-font-size": x(e.title_font_size, "16px"),
  "--tic-row-font-size": x(e.row_font_size, "12px"),
  "--tic-graph-value-font-size": x(e.graph_value_font_size, "20px")
}), qt = (e, t) => {
  const i = dt(t, e.entity), n = i?.attributes ?? {}, s = e.source, r = ti(e, t, n, s), o = ei(e, n, s), a = ii(e, t, n, r, s), l = si(e, t, n, s);
  return {
    entity: i,
    title: Qe(e, i, n, s),
    icon: f(e.icon || (s === "template_entity" ? n.icon : "")) || "mdi:flash",
    navigationPath: o,
    isWarn: r,
    mainColor: r ? e.text_nok : e.text_ok,
    background: r ? e.background_nok : e.background_ok,
    rows: a,
    graph: l,
    isClickable: !!(e.tap_action || o || e.entity || l?.entity)
  };
}, dt = (e, t) => t && e?.states ? e.states[t] : void 0, Qe = (e, t, i, n) => f(
  e.name || (n === "template_entity" ? i.name || i.friendly_name : "") || t?.attributes?.friendly_name || e.entity || ""
), ti = (e, t, i, n) => A(e.warn) ? pe(e.warn, t) : n === "template_entity" ? R(i.is_warn) : !1, ei = (e, t, i) => f(e.navigation_path || (i === "template_entity" ? t.navigation_path : "")) || void 0, ii = (e, t, i, n, s) => s === "manual" ? (e.rows ?? []).slice(0, 3).map((r) => ci(r, t, n)).filter((r) => A(r.text)) : li(i), si = (e, t, i, n) => {
  const s = n === "template_entity" ? ni(i) : {}, r = e.graph ?? {}, o = te(T(r.entity, s.entity));
  if (!o)
    return;
  const a = dt(t, o), l = f(T(r.unit, s.unit, a?.attributes?.unit_of_measurement)) || void 0, p = f(T(r.color, s.color)) || void 0;
  return {
    entity: o,
    name: f(T(r.name, s.name, a?.attributes?.friendly_name, o)),
    period: ri(T(r.period, s.period)),
    hoursToShow: oi(T(r.hours_to_show, s.hours_to_show)),
    unit: l,
    color: p,
    curve: ai(T(r.curve, r.mode, s.curve, s.mode))
  };
}, ni = (e) => ({
  entity: e.graph_entity,
  name: e.graph_name,
  period: e.graph_period,
  hours_to_show: e.graph_hours_to_show,
  unit: e.graph_unit,
  color: e.graph_color,
  curve: e.graph_curve,
  mode: e.graph_mode
}), T = (...e) => e.find(A), ri = (e) => {
  const t = f(e).toLowerCase();
  return t === "today" || t === "day" || t === "daily" || t === "dnes" || t === "dneska" ? "today" : "hours";
}, oi = (e) => {
  const t = Number.parseFloat(f(e));
  return !Number.isFinite(t) || t <= 0 ? 24 : Math.min(Math.max(t, 0.25), 168);
}, ai = (e) => {
  const t = f(e).toLowerCase();
  return t === "step" || t === "stepped" || t === "stairs" ? "step" : "linear";
}, li = (e) => [1, 2, 3].map((t) => ({
  entity: te(e[`row_${t}_entity`]),
  text: f(e[`row_${t}_text`]),
  warn: R(e[`row_${t}_warn`])
})).filter((t) => A(t.text)), ci = (e, t, i) => {
  const n = dt(t, e.entity), s = A(e.text) ? f(e.text) : hi(n, e);
  return {
    entity: e.entity ?? null,
    text: s,
    warn: A(e.warn) ? pe(e.warn, t) : i && R(e.inherit_warn),
    tap_action: e.tap_action
  };
}, pe = (e, t) => {
  if (typeof e != "object" || e === null || Array.isArray(e))
    return R(e);
  const i = dt(t, e.entity);
  if (!i)
    return !1;
  const n = e.state;
  if (n != null && n !== "")
    return Ft(i.state, n);
  const s = e.not_state;
  return s != null && s !== "" ? !Ft(i.state, s) : R(i.state);
}, Ft = (e, t) => (Array.isArray(t) ? t : [t]).map(f).includes(f(e)), hi = (e, t) => {
  if (!e)
    return "";
  const i = t.name || e.attributes?.friendly_name || t.entity || "", n = t.attribute ? e.attributes?.[t.attribute] : Ae(e, t.unit), s = Array.isArray(n) || typeof n == "object" ? JSON.stringify(n) : f(n);
  return A(s) ? t.show_name === !1 ? s : `${f(i)}: ${s}` : f(i);
}, Kt = (e) => {
  const t = Date.now();
  if (e.period === "today") {
    const n = /* @__PURE__ */ new Date();
    n.setHours(0, 0, 0, 0);
    const s = new Date(n);
    return s.setDate(s.getDate() + 1), {
      historyStart: n.getTime(),
      domainStart: n.getTime(),
      domainEnd: s.getTime()
    };
  }
  const i = t - e.hoursToShow * 60 * 60 * 1e3;
  return {
    historyStart: i,
    domainStart: i,
    domainEnd: t
  };
}, pi = (e, t) => e.period === "today" ? `${e.entity}|${e.period}|${t.historyStart}` : `${e.entity}|${e.period}|${e.hoursToShow}`, di = (e, t) => {
  const i = new Date(t).toISOString(), n = encodeURIComponent(e);
  return `history/period/${i}?filter_entity_id=${n}&significant_changes_only=0&no_attributes`;
}, ui = (e, t) => {
  const i = gi(e);
  return (i.find((s) => s.some((r) => r.entity_id === t)) ?? i[0] ?? []).map((s, r) => {
    const o = de(s.state ?? s.s);
    return o === null ? null : {
      time: mi(s) ?? r,
      value: o
    };
  }).filter((s) => s !== null).sort((s, r) => s.time - r.time);
}, fi = (e) => de(e?.state), de = (e) => {
  const t = Number.parseFloat(f(e));
  return Number.isFinite(t) ? t : null;
}, gi = (e) => !Array.isArray(e) || e.length === 0 ? [] : Array.isArray(e[0]) ? e : [e], mi = (e) => {
  const t = f(e.last_changed || e.last_updated);
  if (!t)
    return null;
  const i = Date.parse(t);
  return Number.isFinite(i) ? i : null;
}, Yt = 120, Jt = (e, t) => {
  if (e.length <= t)
    return e;
  const i = e[0].time, n = e[e.length - 1].time;
  if (n === i)
    return Xt(e, t);
  const s = Math.max(1, Math.floor((t - 2) / 2)), r = (n - i) / s, o = [e[0]];
  for (let a = 0; a < s; a += 1) {
    const l = i + a * r, p = a === s - 1 ? n : l + r, h = e.filter((g) => g.time >= l && g.time <= p);
    if (h.length === 0)
      continue;
    const c = h.reduce((g, $) => $.value < g.value ? $ : g, h[0]), m = h.reduce((g, $) => $.value > g.value ? $ : g, h[0]);
    Qt(o, [c, m].sort((g, $) => g.time - $.time));
  }
  return Qt(o, [e[e.length - 1]]), o.length <= t ? o : Xt(o, t);
}, yi = (e, t, i, n, s) => {
  if (e.length === 0)
    return;
  const r = s?.domainStart ?? e[0].time, o = s?.domainEnd ?? e[e.length - 1].time, a = $i(e, r, o, n);
  if (a.length === 0)
    return;
  const l = a.map((g) => g.value), p = Math.min(...l), h = Math.max(...l), c = 4, m = i - c * 2;
  return a.length === 1 || r === o ? _i(a[0], r, o, t, c, m, p, h) : {
    path: n === "step" ? bi(a, r, o, t, c, m, p, h) : vi(a, r, o, t, c, m, p, h),
    min: p,
    max: h
  };
}, Zt = (e) => {
  const t = Math.abs(e), i = t >= 100 ? 0 : t >= 1 ? 1 : 2;
  return e.toFixed(i).replace(/\.?0+$/, "");
}, Xt = (e, t) => {
  const i = (e.length - 1) / (t - 1);
  return Array.from({ length: t }, (n, s) => e[Math.round(s * i)]);
}, Qt = (e, t) => {
  for (const i of t) {
    const n = e[e.length - 1];
    (!n || n.time !== i.time || n.value !== i.value) && e.push(i);
  }
}, _i = (e, t, i, n, s, r, o, a) => {
  const l = s + r / 2, p = t === i ? n : (e.time - t) / (i - t) * n, h = Math.max(0, p - 2), c = Math.min(n, p + 2);
  return {
    path: `M ${v(h)} ${v(l)} L ${v(c)} ${v(l)}`,
    min: o,
    max: a
  };
}, $i = (e, t, i, n) => {
  const s = e.filter((a) => a.time >= t && a.time <= i);
  if (n !== "step")
    return s;
  const r = [...e].reverse().find((a) => a.time < t);
  if (r)
    return [{ time: t, value: r.value }, ...s];
  const o = s[0];
  return o && o.time > t ? [{ time: t, value: o.value }, ...s] : s;
}, vi = (e, t, i, n, s, r, o, a) => e.map((l, p) => {
  const { x: h, y: c } = mt(l, t, i, n, s, r, o, a);
  return `${p === 0 ? "M" : "L"} ${v(h)} ${v(c)}`;
}).join(" "), bi = (e, t, i, n, s, r, o, a) => {
  const [l, ...p] = e, h = mt(l, t, i, n, s, r, o, a), c = [`M ${v(h.x)} ${v(h.y)}`];
  let m = h.y;
  for (const g of p) {
    const { x: $, y: Ot } = mt(g, t, i, n, s, r, o, a);
    c.push(`L ${v($)} ${v(m)}`), c.push(`L ${v($)} ${v(Ot)}`), m = Ot;
  }
  return c.join(" ");
}, mt = (e, t, i, n, s, r, o, a) => {
  const l = (e.time - t) / (i - t) * n, p = a === o ? 0.5 : (e.value - o) / (a - o), h = s + (1 - p) * r;
  return { x: l, y: h };
}, v = (e) => e.toFixed(2).replace(/\.?0+$/, "");
var xi = Object.defineProperty, ut = (e, t, i, n) => {
  for (var s = void 0, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (s = o(t, i, s) || s);
  return s && xi(t, i, s), s;
};
const wi = "tablet-info-card-graph", Ai = 6e4, xt = class xt extends _ {
  constructor() {
    super(...arguments), this.points = [], this.isLoading = !1, this.fetchKey = "", this.lastFetchedAt = 0, this.requestId = 0;
  }
  updated(t) {
    (t.has("graph") || t.has("hass")) && this.loadHistory();
  }
  render() {
    if (!this.graph)
      return d;
    const t = this.hass?.states?.[this.graph.entity], i = this.getCurrentDisplay(t);
    return u`
      <div
        class="graph"
        role="button"
        tabindex="0"
        @click=${this.handleTap}
        @keydown=${this.handleKeyDown}
      >
        ${this.renderSparkline(t)}
        <div class="current" title=${i.full}>
          <span class="value">${i.value}</span>
          ${i.unit ? u`<span class="unit">${i.unit}</span>` : d}
        </div>
        <div class="name" title=${this.graph.name}>${this.graph.name}</div>
      </div>
    `;
  }
  async loadHistory() {
    if (!this.graph?.entity || !this.hass?.callApi) {
      this.fetchKey = "", this.points.length > 0 && (this.points = []);
      return;
    }
    const t = Kt(this.graph), i = pi(this.graph, t), n = Date.now();
    if (this.isLoading && this.fetchKey === i || this.fetchKey === i && n - this.lastFetchedAt < Ai)
      return;
    this.isLoading = !0, this.fetchKey = i;
    const s = this.graph, r = ++this.requestId;
    try {
      const o = await this.hass.callApi("GET", di(s.entity, t.historyStart));
      if (r !== this.requestId || this.graph?.entity !== s.entity)
        return;
      this.points = Jt(ui(o, s.entity), Yt), this.lastFetchedAt = Date.now();
    } catch {
      r === this.requestId && (this.points = [], this.lastFetchedAt = Date.now());
    } finally {
      r === this.requestId && (this.isLoading = !1);
    }
  }
  renderSparkline(t) {
    const i = this.graph ? Kt(this.graph) : void 0, n = yi(this.getChartPoints(t), 220, 45, this.graph?.curve ?? "linear", i);
    if (!n)
      return u`<div class="sparkline empty"></div>`;
    const s = Zt(n.min), r = Zt(n.max);
    return u`
      <div class="sparkline" aria-hidden="true">
        <span class="axis-label top" title=${r}>${r}</span>
        <span class="axis-label bottom" title=${s}>${s}</span>
        ${He`<svg viewBox="0 0 220 45" preserveAspectRatio="none">
          <path class="line" d=${n.path}></path>
        </svg>`}
      </div>
    `;
  }
  getChartPoints(t) {
    const i = [...this.points], n = fi(t), s = i[i.length - 1], r = Date.now();
    return n !== null && (!s || s.value !== n || s.time < r - 1e3) && i.push({
      time: r,
      value: n
    }), Jt(i, Yt);
  }
  getCurrentDisplay(t) {
    const i = t && A(t.state) ? f(t.state) : "-", n = this.graph?.unit || f(t?.attributes?.unit_of_measurement) || "", s = n ? `${i} ${n}` : i;
    return { value: i, unit: n, full: s };
  }
  handleTap(t) {
    this.graph && (t.stopPropagation(), this.dispatchEvent(
      new CustomEvent("tablet-info-graph-tap", {
        bubbles: !0,
        composed: !0,
        detail: { graph: this.graph }
      })
    ));
  }
  handleKeyDown(t) {
    t.key !== "Enter" && t.key !== " " || (t.preventDefault(), this.handleTap(t));
  }
};
xt.styles = E`
    :host {
      display: block;
      min-width: 0;
    }

    .graph {
      min-width: 0;
      display: grid;
      gap: 3px;
      padding-left: var(--tic-row-indent, 10px);
      color: var(--tic-graph-value-color, #d5d8dc);
      cursor: pointer;
    }

    .sparkline {
      position: relative;
      width: 100%;
      height: var(--tic-graph-height, 35px);
      min-height: var(--tic-graph-height, 35px);
      margin-top: 1px;
    }

    :host(.compact) .sparkline {
      margin-top: -4px;
    }

    .sparkline.empty {
      opacity: 0.35;
      border-bottom: 1px solid color-mix(in srgb, var(--tic-graph-color, #18bcf2) 50%, transparent);
    }

    .axis-label {
      position: absolute;
      right: 0;
      z-index: 1;
      max-width: 34px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 9px;
      font-weight: 600;
      line-height: 1;
      letter-spacing: 0;
      color: var(--tic-graph-value-color, #d5d8dc);
      opacity: 0.72;
      text-shadow:
        0 0 3px var(--tic-background, rgba(46, 46, 46, 0.85)),
        0 0 6px var(--tic-background, rgba(46, 46, 46, 0.85));
      pointer-events: none;
    }

    .axis-label.top {
      top: 0;
      transform: translateY(-8px);
    }

    .axis-label.bottom {
      bottom: 0;
      transform: translateY(8px);
    }

    svg {
      display: block;
      width: 100%;
      height: 100%;
      overflow: visible;
    }

    .line {
      fill: none;
      stroke: var(--tic-graph-color, var(--tic-main-color, #18bcf2));
      stroke-width: 2.2;
      stroke-linecap: round;
      stroke-linejoin: round;
      filter: drop-shadow(0 0 5px color-mix(in srgb, var(--tic-graph-color, #18bcf2) 42%, transparent));
    }

    .current {
      min-width: 0;
      display: flex;
      align-items: baseline;
      gap: 4px;
      line-height: 1;
      color: var(--tic-graph-value-color, #d5d8dc);
    }

    .value {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: var(--tic-graph-value-font-size, 20px);
      font-weight: 700;
      letter-spacing: 0;
    }

    .unit {
      flex: 0 0 auto;
      font-size: calc(var(--tic-graph-value-font-size, 20px) * 0.65);
      font-weight: 500;
      opacity: 0.95;
    }

    .name {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: calc(var(--tic-graph-value-font-size, 20px) - 2px);
      line-height: 1.15;
      color: var(--tic-graph-value-color, #d5d8dc);
      opacity: 0.72;
    }
  `;
let O = xt;
ut([
  y({ attribute: !1 })
], O.prototype, "graph");
ut([
  y({ attribute: !1 })
], O.prototype, "hass");
ut([
  pt()
], O.prototype, "points");
ut([
  pt()
], O.prototype, "isLoading");
b(wi, O);
var Ei = Object.defineProperty, ue = (e, t, i, n) => {
  for (var s = void 0, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (s = o(t, i, s) || s);
  return s && Ei(t, i, s), s;
};
const Si = "tablet-info-card-header", wt = class wt extends _ {
  constructor() {
    super(...arguments), this.icon = "mdi:flash", this.title = "";
  }
  render() {
    return u`
      <div class="header">
        <div class="icon-cell">
          <ha-icon .icon=${this.icon}></ha-icon>
        </div>
        <div class="title" title=${this.title}>${this.title}</div>
      </div>
    `;
  }
};
wt.styles = E`
    :host {
      display: block;
      min-width: 0;
    }

    .header {
      display: grid;
      grid-template-columns: var(--tic-icon-size, 37px) 1fr;
      column-gap: 7px;
      align-items: center;
      min-width: 0;
    }

    .icon-cell {
      width: var(--tic-icon-size, 37px);
      height: var(--tic-icon-size, 37px);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    ha-icon {
      --mdc-icon-size: var(--tic-icon-size, 37px);
      --iron-icon-width: var(--tic-icon-size, 37px);
      --iron-icon-height: var(--tic-icon-size, 37px);
      color: var(--tic-main-color, #18bcf2);
      filter: drop-shadow(0 0 5px color-mix(in srgb, var(--tic-main-color, #18bcf2) 42%, transparent));
    }

    .title {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: var(--tic-title-font-size, 16px);
      font-weight: 700;
      line-height: 1.15;
      letter-spacing: 0;
      color: var(--tic-main-color, #18bcf2);
    }
  `;
let F = wt;
ue([
  y({ type: String })
], F.prototype, "icon");
ue([
  y({ type: String })
], F.prototype, "title");
b(Si, F);
var ki = Object.defineProperty, Ci = (e, t, i, n) => {
  for (var s = void 0, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (s = o(t, i, s) || s);
  return s && ki(t, i, s), s;
};
const Pi = "tablet-info-card-row", At = class At extends _ {
  render() {
    if (!this.row)
      return d;
    const t = this.isClickable;
    return u`
      <div
        class=${it({ row: !0, button: t, warn: this.row.warn })}
        role=${t ? "button" : "presentation"}
        tabindex=${t ? "0" : "-1"}
        title=${this.row.text}
        @click=${this.handleTap}
        @keydown=${this.handleKeyDown}
      >
        ${this.row.text}
      </div>
    `;
  }
  get isClickable() {
    return !!(this.row?.entity || this.row?.tap_action);
  }
  handleTap(t) {
    !this.row || !this.isClickable || (t.stopPropagation(), this.dispatchEvent(
      new CustomEvent("tablet-info-row-tap", {
        bubbles: !0,
        composed: !0,
        detail: { row: this.row }
      })
    ));
  }
  handleKeyDown(t) {
    t.key !== "Enter" && t.key !== " " || (t.preventDefault(), this.handleTap(t));
  }
};
At.styles = E`
    :host {
      display: block;
      min-width: 0;
    }

    .row {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: var(--tic-row-font-size, 12px);
      line-height: 1.15;
      color: var(--tic-main-color, #18bcf2);
    }

    .row.button {
      cursor: pointer;
    }

    .row.warn {
      color: var(--tic-highlight-color, #ff5d0c);
      font-weight: 700;
    }
  `;
let rt = At;
Ci([
  y({ attribute: !1 })
], rt.prototype, "row");
b(Pi, rt);
var Ti = Object.defineProperty, Ni = (e, t, i, n) => {
  for (var s = void 0, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (s = o(t, i, s) || s);
  return s && Ti(t, i, s), s;
};
const zi = "tablet-info-card-rows", Et = class Et extends _ {
  constructor() {
    super(...arguments), this.rows = [];
  }
  render() {
    return u`
      <div class="rows">
        ${this.rows.length > 0 ? this.rows.map((t, i) => u`<tablet-info-card-row .row=${t} data-index=${i}></tablet-info-card-row>`) : d}
      </div>
    `;
  }
};
Et.styles = E`
    :host {
      display: block;
      min-width: 0;
    }

    .rows {
      min-width: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 6px;
      padding-left: var(--tic-row-indent, 10px);
    }

  `;
let ot = Et;
Ni([
  y({ attribute: !1 })
], ot.prototype, "rows");
b(zi, ot);
var Mi = Object.defineProperty, fe = (e, t, i, n) => {
  for (var s = void 0, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (s = o(t, i, s) || s);
  return s && Mi(t, i, s), s;
};
const Oi = "tablet-info-card-body", St = class St extends _ {
  render() {
    if (!this.config)
      return d;
    const t = qt(this.config, this.hass);
    return u`
      <ha-card style=${Ze(Xe(this.config, t))}>
        <div
          class=${it({
      card: !0,
      clickable: t.isClickable,
      "has-graph": !!t.graph,
      "has-rows": t.rows.length > 0
    })}
          role=${t.isClickable ? "button" : "presentation"}
          tabindex=${t.isClickable ? "0" : "-1"}
          @click=${this.handleCardTap}
          @keydown=${this.handleCardKeyDown}
          @tablet-info-graph-tap=${this.handleGraphTap}
          @tablet-info-row-tap=${this.handleRowTap}
        >
          <div class="header-region">
            <tablet-info-card-header .icon=${t.icon} .title=${t.title}></tablet-info-card-header>
          </div>
          <div
            class=${it({
      "body-region": !0,
      "has-graph": !!t.graph,
      "has-rows": t.rows.length > 0
    })}
          >
            ${t.rows.length > 0 ? u`<tablet-info-card-rows .rows=${t.rows}></tablet-info-card-rows>` : d}
            ${t.graph ? u`<tablet-info-card-graph
                  class=${it({ compact: t.rows.length === 0 })}
                  .graph=${t.graph}
                  .hass=${this.hass}
                ></tablet-info-card-graph>` : d}
          </div>
        </div>
      </ha-card>
    `;
  }
  handleCardTap() {
    if (!this.config)
      return;
    const t = qt(this.config, this.hass), i = this.config.entity || t.graph?.entity, n = this.config.tap_action || (t.navigationPath ? { action: "navigate", navigation_path: t.navigationPath } : i ? { action: "more-info" } : null);
    n && gt(this, {
      config: {
        entity: i,
        tap_action: n
      },
      action: "tap"
    });
  }
  handleCardKeyDown(t) {
    t.key !== "Enter" && t.key !== " " || (t.preventDefault(), this.handleCardTap());
  }
  handleRowTap(t) {
    if (!this.config)
      return;
    t.stopPropagation();
    const i = t.detail.row, n = i.tap_action || (i.entity ? { action: "more-info" } : null);
    n && this.fireRowAction(i, n);
  }
  handleGraphTap(t) {
    t.stopPropagation(), gt(this, {
      config: {
        entity: t.detail.graph.entity,
        tap_action: { action: "more-info" }
      },
      action: "tap"
    });
  }
  // Row components own low-level clicks; the body translates their intent to HA actions.
  fireRowAction(t, i) {
    gt(this, {
      config: {
        entity: t.entity || this.config?.entity,
        tap_action: i
      },
      action: "tap"
    });
  }
};
St.styles = E`
    :host {
      display: block;
      font-family: var(--paper-font-body1_-_font-family, var(--primary-font-family, sans-serif));
    }

    ha-card {
      display: block;
      min-height: var(--tic-height, 130px);
      border-radius: var(--tic-border-radius, 20px);
      background: var(--tic-background, rgba(46, 46, 46, 0.5));
      border: 1px solid color-mix(in srgb, var(--tic-main-color, #18bcf2) 75%, transparent);
      box-shadow:
        0 0 0 1px color-mix(in srgb, var(--tic-main-color, #18bcf2) 18%, transparent) inset,
        0 0 12px color-mix(in srgb, var(--tic-main-color, #18bcf2) 55%, transparent);
      overflow: hidden;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    }

    .card {
      min-height: var(--tic-height, 130px);
      box-sizing: border-box;
      display: grid;
      grid-template-rows: min-content 1fr;
      padding: 0 0 9px;
      color: var(--tic-main-color, #18bcf2);
      cursor: default;
    }

    .header-region {
      min-width: 0;
      padding: var(--tic-header-padding, 10px) var(--tic-header-padding, 10px) 0;
    }

    .body-region {
      min-width: 0;
      display: grid;
      align-content: start;
      gap: 7px;
      padding: var(--tic-body-padding, 10px) var(--tic-body-padding, 10px) 0;
    }

    .card.clickable {
      cursor: pointer;
    }

    .body-region.has-graph:not(.has-rows) {
      gap: 2px;
    }

    .body-region.has-graph.has-rows {
      grid-template-rows: min-content 1fr;
    }
  `;
let K = St;
fe([
  y({ attribute: !1 })
], K.prototype, "config");
fe([
  y({ attribute: !1 })
], K.prototype, "hass");
b(Oi, K);
const tt = E`
  label {
    display: grid;
    gap: 5px;
    color: var(--primary-text-color);
    font-size: 13px;
  }

  input,
  select {
    min-height: 40px;
    box-sizing: border-box;
    border: 1px solid var(--divider-color, #d0d0d0);
    border-radius: 6px;
    padding: 8px 10px;
    background: var(--card-background-color, #fff);
    color: var(--primary-text-color, #212121);
    font: inherit;
  }

  input[type="checkbox"] {
    width: 18px;
    min-height: 18px;
    padding: 0;
  }

  .inline {
    display: flex;
    align-items: center;
    gap: 8px;
    min-height: 40px;
  }

  .hint {
    margin: 0;
    color: var(--secondary-text-color, #727272);
    font-size: 12px;
    line-height: 1.35;
  }
`, ge = E`
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 12px;
  }
`, Ui = "tablet-info-card-editor-update", H = (e, t) => {
  e.dispatchEvent(
    new CustomEvent(Ui, {
      bubbles: !0,
      composed: !0,
      detail: { patch: t }
    })
  );
};
var Ri = Object.defineProperty, Di = (e, t, i, n) => {
  for (var s = void 0, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (s = o(t, i, s) || s);
  return s && Ri(t, i, s), s;
};
const Hi = "tablet-info-card-editor-source", kt = class kt extends _ {
  constructor() {
    super(...arguments), this.source = "template_entity";
  }
  render() {
    return u`
      <label>
        <span>Data source</span>
        <select .value=${this.source} @change=${this.handleChange}>
          <option value="template_entity">Template entity</option>
          <option value="manual">Manual config</option>
        </select>
      </label>
    `;
  }
  handleChange(t) {
    const i = t.target.value;
    H(this, { source: i });
  }
};
kt.styles = tt;
let at = kt;
Di([
  y({ type: String })
], at.prototype, "source");
b(Hi, at);
var ji = Object.defineProperty, Li = (e, t, i, n) => {
  for (var s = void 0, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (s = o(t, i, s) || s);
  return s && ji(t, i, s), s;
};
const Ii = "tablet-info-card-layout-fields", Ct = class Ct extends _ {
  constructor() {
    super(...arguments), this.config = {};
  }
  render() {
    return u`
      <div class="grid">
        <label>
          <span>Card height</span>
          <input
            type="number"
            min="80"
            max="260"
            step="1"
            .value=${this.asNumberText(this.config.height, w.height)}
            @change=${this.handleNumberInput("height")}
          />
        </label>
        <label>
          <span>Header padding</span>
          <input
            type="number"
            min="0"
            max="32"
            step="1"
            .value=${this.asNumberText(this.config.header_padding, w.header_padding)}
            @change=${this.handleNumberInput("header_padding")}
          />
        </label>
        <label>
          <span>Body padding</span>
          <input
            type="number"
            min="0"
            max="32"
            step="1"
            .value=${this.asNumberText(this.config.body_padding, w.body_padding)}
            @change=${this.handleNumberInput("body_padding")}
          />
        </label>
        <label>
          <span>Icon size</span>
          <input
            type="number"
            min="16"
            max="72"
            step="1"
            .value=${this.asNumberText(this.config.icon_size, w.icon_size)}
            @change=${this.handleNumberInput("icon_size")}
          />
        </label>
        <label>
          <span>Title font size</span>
          <input
            type="number"
            min="8"
            max="32"
            step="1"
            .value=${this.asNumberText(this.config.title_font_size, w.title_font_size)}
            @change=${this.handleNumberInput("title_font_size")}
          />
        </label>
        <label>
          <span>Row font size</span>
          <input
            type="number"
            min="8"
            max="24"
            step="1"
            .value=${this.asNumberText(this.config.row_font_size, w.row_font_size)}
            @change=${this.handleNumberInput("row_font_size")}
          />
        </label>
        <label>
          <span>Graph height</span>
          <input
            type="number"
            min="20"
            max="96"
            step="1"
            .value=${this.asNumberText(this.config.graph_height, w.graph_height)}
            @change=${this.handleNumberInput("graph_height")}
          />
        </label>
        <label>
          <span>Graph value font size</span>
          <input
            type="number"
            min="10"
            max="32"
            step="1"
            .value=${this.asNumberText(this.config.graph_value_font_size, w.graph_value_font_size)}
            @change=${this.handleNumberInput("graph_value_font_size")}
          />
        </label>
      </div>
    `;
  }
  handleNumberInput(t) {
    return (i) => {
      const n = this.getStringValue(i);
      H(this, { [t]: n ? Number(n) : void 0 });
    };
  }
  getStringValue(t) {
    const i = t.target.value.trim();
    return i.length > 0 ? i : void 0;
  }
  asNumberText(t, i) {
    const n = t ?? i;
    return typeof n == "number" ? String(n) : f(n).replace(/px$/i, "");
  }
};
Ct.styles = [tt, ge];
let lt = Ct;
Li([
  y({ attribute: !1 })
], lt.prototype, "config");
b(Ii, lt);
var Vi = Object.defineProperty, Gi = (e, t, i, n) => {
  for (var s = void 0, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (s = o(t, i, s) || s);
  return s && Vi(t, i, s), s;
};
const Wi = "tablet-info-card-manual-fields", Pt = class Pt extends _ {
  constructor() {
    super(...arguments), this.config = {};
  }
  render() {
    return u`
      <div class="grid">
        <label>
          <span>Name</span>
          <input .value=${this.config.name ?? ""} @change=${this.handleTextInput("name")} />
        </label>
        <label>
          <span>Icon</span>
          <input .value=${this.config.icon ?? ""} placeholder="mdi:flash" @change=${this.handleTextInput("icon")} />
        </label>
        <label>
          <span>Navigation path</span>
          <input .value=${this.config.navigation_path ?? ""} @change=${this.handleTextInput("navigation_path")} />
        </label>
        ${this.renderWarnEditor()}
      </div>
    `;
  }
  renderWarnEditor() {
    return this.isComplexWarn(this.config.warn) ? u`<p class="hint">Advanced warning condition is configured in YAML.</p>` : u`
      <label>
        <span>Warning state</span>
        <span class="inline">
          <input type="checkbox" .checked=${R(this.config.warn)} @change=${this.handleWarnToggle} />
          <span>Warn</span>
        </span>
      </label>
    `;
  }
  handleTextInput(t) {
    return (i) => {
      H(this, { [t]: this.getStringValue(i) });
    };
  }
  handleWarnToggle(t) {
    H(this, { warn: t.target.checked });
  }
  getStringValue(t) {
    const i = t.target.value.trim();
    return i.length > 0 ? i : void 0;
  }
  isComplexWarn(t) {
    return typeof t == "object" && t !== null && !Array.isArray(t);
  }
};
Pt.styles = [tt, ge];
let ct = Pt;
Gi([
  y({ attribute: !1 })
], ct.prototype, "config");
b(Wi, ct);
const Bi = (e) => Object.keys(e?.states ?? {}).sort((t, i) => t.localeCompare(i)), me = (e, t) => {
  const i = f(e?.states[t]?.attributes?.friendly_name);
  return i ? `${i} (${t})` : t;
};
var qi = Object.defineProperty, ye = (e, t, i, n) => {
  for (var s = void 0, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (s = o(t, i, s) || s);
  return s && qi(t, i, s), s;
};
const Fi = "tablet-info-card-manual-entity-picker", Tt = class Tt extends _ {
  render() {
    const t = Bi(this.hass);
    return u`
      <label>
        <span>Main entity</span>
        <input list="tablet-info-card-entities" .value=${this.entity ?? ""} @change=${this.handleChange} />
      </label>
      <datalist id="tablet-info-card-entities">
        ${t.map((i) => u`<option value=${i}>${me(this.hass, i)}</option>`)}
      </datalist>
    `;
  }
  handleChange(t) {
    H(this, { entity: this.getStringValue(t) });
  }
  getStringValue(t) {
    const i = t.target.value.trim();
    return i.length > 0 ? i : void 0;
  }
};
Tt.styles = tt;
let Y = Tt;
ye([
  y({ attribute: !1 })
], Y.prototype, "hass");
ye([
  y({ type: String })
], Y.prototype, "entity");
b(Fi, Y);
var Ki = Object.defineProperty, _e = (e, t, i, n) => {
  for (var s = void 0, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (s = o(t, i, s) || s);
  return s && Ki(t, i, s), s;
};
const Yi = "tablet-info-card-template-entity-picker", Nt = class Nt extends _ {
  render() {
    const t = this.getTemplateEntityOptions(), i = yt(this.entity ? this.hass?.states[this.entity] : void 0);
    return u`
      <label>
        <span>Template entity</span>
        <select .value=${this.entity ?? ""} @change=${this.handleChange}>
          <option value="">Select UI template entity</option>
          ${t.map((n) => u`<option value=${n}>${me(this.hass, n)}</option>`)}
        </select>
      </label>
      ${this.entity && !i ? u`<p class="hint">
            Current entity is kept, but it is missing the template marker attribute
            <code>ui_element_type: tablet_info_card</code>.
          </p>` : d}
    `;
  }
  getTemplateEntityOptions() {
    const t = Ee(this.hass);
    return this.entity && !t.includes(this.entity) ? [this.entity, ...t] : t;
  }
  handleChange(t) {
    H(this, { entity: this.getStringValue(t) });
  }
  getStringValue(t) {
    const i = t.target.value.trim();
    return i.length > 0 ? i : void 0;
  }
};
Nt.styles = tt;
let J = Nt;
_e([
  y({ attribute: !1 })
], J.prototype, "hass");
_e([
  y({ type: String })
], J.prototype, "entity");
b(Yi, J);
var Ji = Object.defineProperty, $e = (e, t, i, n) => {
  for (var s = void 0, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (s = o(t, i, s) || s);
  return s && Ji(t, i, s), s;
};
const Zi = "tablet-info-card-editor", zt = class zt extends _ {
  constructor() {
    super(...arguments), this.config = {};
  }
  setConfig(t) {
    this.config = { source: "template_entity", ...t };
  }
  render() {
    const t = this.config.source ?? "template_entity";
    return u`
      <div class="editor" @tablet-info-card-editor-update=${this.handleEditorUpdate}>
        <tablet-info-card-editor-source .source=${t}></tablet-info-card-editor-source>
        ${t === "template_entity" ? this.renderTemplateEntityPicker() : this.renderManualEntityPicker()}
        ${t === "manual" ? this.renderManualFields() : d}
        <tablet-info-card-layout-fields .config=${this.config}></tablet-info-card-layout-fields>
        ${t === "manual" ? this.renderManualRowsNotice() : d}
      </div>
    `;
  }
  renderTemplateEntityPicker() {
    return u`
      <tablet-info-card-template-entity-picker
        .hass=${this.hass}
        .entity=${this.config.entity}
      ></tablet-info-card-template-entity-picker>
    `;
  }
  renderManualEntityPicker() {
    return u`
      <tablet-info-card-manual-entity-picker
        .hass=${this.hass}
        .entity=${this.config.entity}
      ></tablet-info-card-manual-entity-picker>
    `;
  }
  renderManualFields() {
    return u`<tablet-info-card-manual-fields .config=${this.config}></tablet-info-card-manual-fields>`;
  }
  renderManualRowsNotice() {
    return u`<p class="hint">Manual rows are supported in YAML through the <code>rows</code> option.</p>`;
  }
  handleEditorUpdate(t) {
    t.stopPropagation(), this.updateConfig(t.detail.patch);
  }
  updateConfig(t) {
    const i = { ...this.config, ...t };
    for (const n of Object.keys(i)) {
      const s = i[n];
      (s == null || s === "") && delete i[n];
    }
    this.config = i, this.dispatchEvent(
      new CustomEvent("config-changed", {
        bubbles: !0,
        composed: !0,
        detail: { config: i }
      })
    );
  }
};
zt.styles = E`
    :host {
      display: block;
      font-family: var(--paper-font-body1_-_font-family, var(--primary-font-family, sans-serif));
    }

    .editor {
      display: grid;
      gap: 14px;
    }

    .hint {
      margin: 0;
      color: var(--secondary-text-color, #727272);
      font-size: 12px;
      line-height: 1.35;
    }
  `;
let Z = zt;
$e([
  pt()
], Z.prototype, "config");
$e([
  y({ attribute: !1 })
], Z.prototype, "hass");
b(Zi, Z);
var Xi = Object.defineProperty, ve = (e, t, i, n) => {
  for (var s = void 0, r = e.length - 1, o; r >= 0; r--)
    (o = e[r]) && (s = o(t, i, s) || s);
  return s && Xi(t, i, s), s;
};
const Mt = class Mt extends _ {
  setConfig(t) {
    this.config = {
      ...w,
      ...t
    };
  }
  getCardSize() {
    return this.config?.graph ? 4 : 3;
  }
  getGridOptions() {
    const t = !!this.config?.graph;
    return {
      rows: t ? 4 : 2,
      columns: 4,
      min_rows: t ? 3 : 2,
      min_columns: 3
    };
  }
  static getStubConfig() {
    return {
      source: "template_entity",
      entity: "sensor.ui_element_example"
    };
  }
  static getConfigElement() {
    return document.createElement("tablet-info-card-editor");
  }
  render() {
    return this.config ? u`<tablet-info-card-body .config=${this.config} .hass=${this.hass}></tablet-info-card-body>` : d;
  }
};
Mt.styles = E`
    :host {
      display: block;
    }
  `;
let X = Mt;
ve([
  pt()
], X.prototype, "config");
ve([
  y({ attribute: !1 })
], X.prototype, "hass");
b(L, X);
window.customCards = window.customCards || [];
window.customCards.some((e) => e.type === L) || window.customCards.push({
  type: L,
  name: "Tablet Info Card",
  preview: !0,
  description: "Compact status and navigation card with up to three detail rows and an optional graph.",
  documentationURL: "https://github.com/petosiso/tablet-info-card",
  getEntitySuggestion: (e, t) => {
    const i = e.states[t];
    return yt(i) ? {
      config: {
        type: `custom:${L}`,
        source: "template_entity",
        entity: t
      }
    } : null;
  }
});
console.info(
  `%c ${L} %c ${be} `,
  "color: white; background: #18bcf2; font-weight: 700;",
  "color: #18bcf2; background: transparent; font-weight: 700;"
);
