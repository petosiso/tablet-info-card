const I = "tablet-info-card", we = "0.4.0", Ae = "ui_element_type", Ee = "tablet_info_card", w = {
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
  graph_value_font_size: "20px",
  fullCardClick: !1
}, A = (i) => i != null && i !== "", k = (i) => i === !0 || i === "true" || i === "True" || i === "on" || i === "yes" || i === 1 || i === "1", f = (i) => A(i) ? String(i).replace(/\s+/g, " ").trim() : "", se = (i) => {
  const t = f(i);
  return t.length > 0 ? t : null;
}, Ce = (i, t) => {
  if (!i)
    return "";
  const e = Array.isArray(i.state) || typeof i.state == "object" ? JSON.stringify(i.state) : i.state, n = t ?? (i.attributes?.unit_of_measurement ? String(i.attributes.unit_of_measurement) : "");
  return n ? `${e} ${n}` : e;
}, _t = (i) => {
  const t = i?.attributes ?? {};
  return f(t[Ae]) === Ee;
}, Se = (i) => Object.entries(i?.states ?? {}).filter(([, t]) => _t(t)).map(([t]) => t).sort((t, e) => t.localeCompare(e));
const rt = globalThis, $t = rt.ShadowRoot && (rt.ShadyCSS === void 0 || rt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, vt = /* @__PURE__ */ Symbol(), Dt = /* @__PURE__ */ new WeakMap();
let ne = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== vt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if ($t && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = Dt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Dt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const ke = (i) => new ne(typeof i == "string" ? i : i + "", void 0, vt), E = (i, ...t) => {
  const e = i.length === 1 ? i[0] : t.reduce((n, s, r) => n + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + i[r + 1], i[0]);
  return new ne(e, i, vt);
}, Pe = (i, t) => {
  if ($t) i.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), s = rt.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = e.cssText, i.appendChild(n);
  }
}, Ht = $t ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return ke(e);
})(i) : i;
const { is: Te, defineProperty: Ne, getOwnPropertyDescriptor: ze, getOwnPropertyNames: Me, getOwnPropertySymbols: Oe, getPrototypeOf: Ue } = Object, S = globalThis, jt = S.trustedTypes, Re = jt ? jt.emptyScript : "", De = S.reactiveElementPolyfillSupport, V = (i, t) => i, at = { toAttribute(i, t) {
  switch (t) {
    case Boolean:
      i = i ? Re : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, t) {
  let e = i;
  switch (t) {
    case Boolean:
      e = i !== null;
      break;
    case Number:
      e = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(i);
      } catch {
        e = null;
      }
  }
  return e;
} }, bt = (i, t) => !Te(i, t), Lt = { attribute: !0, type: String, converter: at, reflect: !1, useDefault: !1, hasChanged: bt };
Symbol.metadata ?? (Symbol.metadata = /* @__PURE__ */ Symbol("metadata")), S.litPropertyMetadata ?? (S.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let D = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Lt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = /* @__PURE__ */ Symbol(), s = this.getPropertyDescriptor(t, n, e);
      s !== void 0 && Ne(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: s, set: r } = ze(this.prototype, t) ?? { get() {
      return this[e];
    }, set(a) {
      this[e] = a;
    } };
    return { get: s, set(a) {
      const o = s?.call(this);
      r?.call(this, a), this.requestUpdate(t, o, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Lt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(V("elementProperties"))) return;
    const t = Ue(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(V("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(V("properties"))) {
      const e = this.properties, n = [...Me(e), ...Oe(e)];
      for (const s of n) this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [n, s] of e) this.elementProperties.set(n, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, n] of this.elementProperties) {
      const s = this._$Eu(e, n);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const s of n) e.unshift(Ht(s));
    } else t !== void 0 && e.push(Ht(t));
    return e;
  }
  static _$Eu(t, e) {
    const n = e.attribute;
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
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const n of e.keys()) this.hasOwnProperty(n) && (t.set(n, this[n]), delete this[n]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Pe(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), this._$EO?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, e, n) {
    this._$AK(t, n);
  }
  _$ET(t, e) {
    const n = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, n);
    if (s !== void 0 && n.reflect === !0) {
      const r = (n.converter?.toAttribute !== void 0 ? n.converter : at).toAttribute(e, n.type);
      this._$Em = t, r == null ? this.removeAttribute(s) : this.setAttribute(s, r), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const n = this.constructor, s = n._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const r = n.getPropertyOptions(s), a = typeof r.converter == "function" ? { fromAttribute: r.converter } : r.converter?.fromAttribute !== void 0 ? r.converter : at;
      this._$Em = s;
      const o = a.fromAttribute(e, r.type);
      this[s] = o ?? this._$Ej?.get(s) ?? o, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, s = !1, r) {
    if (t !== void 0) {
      const a = this.constructor;
      if (s === !1 && (r = this[t]), n ?? (n = a.getPropertyOptions(t)), !((n.hasChanged ?? bt)(r, e) || n.useDefault && n.reflect && r === this._$Ej?.get(t) && !this.hasAttribute(a._$Eu(t, n)))) return;
      this.C(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: n, reflect: s, wrapped: r }, a) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, a ?? e ?? this[t]), r !== !0 || a !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
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
        const { wrapped: a } = r, o = this[s];
        a !== !0 || this._$AL.has(s) || o === void 0 || this.C(s, void 0, r, o);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), this._$EO?.forEach((n) => n.hostUpdate?.()), this.update(e)) : this._$EM();
    } catch (n) {
      throw t = !1, this._$EM(), n;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
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
    this._$Eq && (this._$Eq = this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
D.elementStyles = [], D.shadowRootOptions = { mode: "open" }, D[V("elementProperties")] = /* @__PURE__ */ new Map(), D[V("finalized")] = /* @__PURE__ */ new Map(), De?.({ ReactiveElement: D }), (S.reactiveElementVersions ?? (S.reactiveElementVersions = [])).push("2.1.2");
const G = globalThis, Ft = (i) => i, ot = G.trustedTypes, It = ot ? ot.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, re = "$lit$", C = `lit$${Math.random().toFixed(9).slice(2)}$`, ae = "?" + C, He = `<${ae}>`, O = document, B = () => O.createComment(""), q = (i) => i === null || typeof i != "object" && typeof i != "function", xt = Array.isArray, je = (i) => xt(i) || typeof i?.[Symbol.iterator] == "function", mt = `[ 	
\f\r]`, L = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Vt = /-->/g, Gt = />/g, T = RegExp(`>|${mt}(?:([^\\s"'>=/]+)(${mt}*=${mt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Wt = /'/g, Bt = /"/g, oe = /^(?:script|style|textarea|title)$/i, le = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), u = le(1), Le = le(2), P = /* @__PURE__ */ Symbol.for("lit-noChange"), d = /* @__PURE__ */ Symbol.for("lit-nothing"), qt = /* @__PURE__ */ new WeakMap(), M = O.createTreeWalker(O, 129);
function ce(i, t) {
  if (!xt(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return It !== void 0 ? It.createHTML(t) : t;
}
const Fe = (i, t) => {
  const e = i.length - 1, n = [];
  let s, r = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", a = L;
  for (let o = 0; o < e; o++) {
    const l = i[o];
    let c, p, h = -1, m = 0;
    for (; m < l.length && (a.lastIndex = m, p = a.exec(l), p !== null); ) m = a.lastIndex, a === L ? p[1] === "!--" ? a = Vt : p[1] !== void 0 ? a = Gt : p[2] !== void 0 ? (oe.test(p[2]) && (s = RegExp("</" + p[2], "g")), a = T) : p[3] !== void 0 && (a = T) : a === T ? p[0] === ">" ? (a = s ?? L, h = -1) : p[1] === void 0 ? h = -2 : (h = a.lastIndex - p[2].length, c = p[1], a = p[3] === void 0 ? T : p[3] === '"' ? Bt : Wt) : a === Bt || a === Wt ? a = T : a === Vt || a === Gt ? a = L : (a = T, s = void 0);
    const g = a === T && i[o + 1].startsWith("/>") ? " " : "";
    r += a === L ? l + He : h >= 0 ? (n.push(c), l.slice(0, h) + re + l.slice(h) + C + g) : l + C + (h === -2 ? o : g);
  }
  return [ce(i, r + (i[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class Y {
  constructor({ strings: t, _$litType$: e }, n) {
    let s;
    this.parts = [];
    let r = 0, a = 0;
    const o = t.length - 1, l = this.parts, [c, p] = Fe(t, e);
    if (this.el = Y.createElement(c, n), M.currentNode = this.el.content, e === 2 || e === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (s = M.nextNode()) !== null && l.length < o; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const h of s.getAttributeNames()) if (h.endsWith(re)) {
          const m = p[a++], g = s.getAttribute(h).split(C), $ = /([.?@])?(.*)/.exec(m);
          l.push({ type: 1, index: r, name: $[2], strings: g, ctor: $[1] === "." ? Ve : $[1] === "?" ? Ge : $[1] === "@" ? We : ut }), s.removeAttribute(h);
        } else h.startsWith(C) && (l.push({ type: 6, index: r }), s.removeAttribute(h));
        if (oe.test(s.tagName)) {
          const h = s.textContent.split(C), m = h.length - 1;
          if (m > 0) {
            s.textContent = ot ? ot.emptyScript : "";
            for (let g = 0; g < m; g++) s.append(h[g], B()), M.nextNode(), l.push({ type: 2, index: ++r });
            s.append(h[m], B());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ae) l.push({ type: 2, index: r });
      else {
        let h = -1;
        for (; (h = s.data.indexOf(C, h + 1)) !== -1; ) l.push({ type: 7, index: r }), h += C.length - 1;
      }
      r++;
    }
  }
  static createElement(t, e) {
    const n = O.createElement("template");
    return n.innerHTML = t, n;
  }
}
function H(i, t, e = i, n) {
  if (t === P) return t;
  let s = n !== void 0 ? e._$Co?.[n] : e._$Cl;
  const r = q(t) ? void 0 : t._$litDirective$;
  return s?.constructor !== r && (s?._$AO?.(!1), r === void 0 ? s = void 0 : (s = new r(i), s._$AT(i, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = s : e._$Cl = s), s !== void 0 && (t = H(i, s._$AS(i, t.values), s, n)), t;
}
class Ie {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: n } = this._$AD, s = (t?.creationScope ?? O).importNode(e, !0);
    M.currentNode = s;
    let r = M.nextNode(), a = 0, o = 0, l = n[0];
    for (; l !== void 0; ) {
      if (a === l.index) {
        let c;
        l.type === 2 ? c = new tt(r, r.nextSibling, this, t) : l.type === 1 ? c = new l.ctor(r, l.name, l.strings, this, t) : l.type === 6 && (c = new Be(r, this, t)), this._$AV.push(c), l = n[++o];
      }
      a !== l?.index && (r = M.nextNode(), a++);
    }
    return M.currentNode = O, s;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class tt {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, n, s) {
    this.type = 2, this._$AH = d, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = s, this._$Cv = s?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && t?.nodeType === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = H(this, t, e), q(t) ? t === d || t == null || t === "" ? (this._$AH !== d && this._$AR(), this._$AH = d) : t !== this._$AH && t !== P && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : je(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== d && q(this._$AH) ? this._$AA.nextSibling.data = t : this.T(O.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: n } = t, s = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = Y.createElement(ce(n.h, n.h[0]), this.options)), n);
    if (this._$AH?._$AD === s) this._$AH.p(e);
    else {
      const r = new Ie(s, this), a = r.u(this.options);
      r.p(e), this.T(a), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = qt.get(t.strings);
    return e === void 0 && qt.set(t.strings, e = new Y(t)), e;
  }
  k(t) {
    xt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, s = 0;
    for (const r of t) s === e.length ? e.push(n = new tt(this.O(B()), this.O(B()), this, this.options)) : n = e[s], n._$AI(r), s++;
    s < e.length && (this._$AR(n && n._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const n = Ft(t).nextSibling;
      Ft(t).remove(), t = n;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class ut {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, s, r) {
    this.type = 1, this._$AH = d, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = r, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = d;
  }
  _$AI(t, e = this, n, s) {
    const r = this.strings;
    let a = !1;
    if (r === void 0) t = H(this, t, e, 0), a = !q(t) || t !== this._$AH && t !== P, a && (this._$AH = t);
    else {
      const o = t;
      let l, c;
      for (t = r[0], l = 0; l < r.length - 1; l++) c = H(this, o[n + l], e, l), c === P && (c = this._$AH[l]), a || (a = !q(c) || c !== this._$AH[l]), c === d ? t = d : t !== d && (t += (c ?? "") + r[l + 1]), this._$AH[l] = c;
    }
    a && !s && this.j(t);
  }
  j(t) {
    t === d ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ve extends ut {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === d ? void 0 : t;
  }
}
class Ge extends ut {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== d);
  }
}
class We extends ut {
  constructor(t, e, n, s, r) {
    super(t, e, n, s, r), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = H(this, t, e, 0) ?? d) === P) return;
    const n = this._$AH, s = t === d && n !== d || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, r = t !== d && (n === d || s);
    s && this.element.removeEventListener(this.name, this, n), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Be {
  constructor(t, e, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    H(this, t);
  }
}
const qe = G.litHtmlPolyfillSupport;
qe?.(Y, tt), (G.litHtmlVersions ?? (G.litHtmlVersions = [])).push("3.3.3");
const Ye = (i, t, e) => {
  const n = e?.renderBefore ?? t;
  let s = n._$litPart$;
  if (s === void 0) {
    const r = e?.renderBefore ?? null;
    n._$litPart$ = s = new tt(t.insertBefore(B(), r), r, void 0, e ?? {});
  }
  return s._$AI(i), s;
};
const W = globalThis;
let _ = class extends D {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Ye(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return P;
  }
};
_._$litElement$ = !0, _.finalized = !0, W.litElementHydrateSupport?.({ LitElement: _ });
const Ke = W.litElementPolyfillSupport;
Ke?.({ LitElement: _ });
(W.litElementVersions ?? (W.litElementVersions = [])).push("4.2.2");
const Je = { attribute: !0, type: String, converter: at, reflect: !1, hasChanged: bt }, Ze = (i = Je, t, e) => {
  const { kind: n, metadata: s } = e;
  let r = globalThis.litPropertyMetadata.get(s);
  if (r === void 0 && globalThis.litPropertyMetadata.set(s, r = /* @__PURE__ */ new Map()), n === "setter" && ((i = Object.create(i)).wrapped = !0), r.set(e.name, i), n === "accessor") {
    const { name: a } = e;
    return { set(o) {
      const l = t.get.call(this);
      t.set.call(this, o), this.requestUpdate(a, l, i, !0, o);
    }, init(o) {
      return o !== void 0 && this.C(a, void 0, i, o), o;
    } };
  }
  if (n === "setter") {
    const { name: a } = e;
    return function(o) {
      const l = this[a];
      t.call(this, o), this.requestUpdate(a, l, i, !0, o);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function y(i) {
  return (t, e) => typeof e == "object" ? Ze(i, t, e) : ((n, s, r) => {
    const a = s.hasOwnProperty(r);
    return s.constructor.createProperty(r, n), a ? Object.getOwnPropertyDescriptor(s, r) : void 0;
  })(i, t, e);
}
function et(i) {
  return y({ ...i, state: !0, attribute: !1 });
}
const b = (i, t) => {
  customElements.get(i) || customElements.define(i, t);
};
const he = { ATTRIBUTE: 1 }, pe = (i) => (...t) => ({ _$litDirective$: i, values: t });
let de = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, n) {
    this._$Ct = t, this._$AM = e, this._$Ci = n;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
};
const F = pe(class extends de {
  constructor(i) {
    if (super(i), i.type !== he.ATTRIBUTE || i.name !== "class" || i.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(i) {
    return " " + Object.keys(i).filter((t) => i[t]).join(" ") + " ";
  }
  update(i, [t]) {
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), i.strings !== void 0 && (this.nt = new Set(i.strings.join(" ").split(/\s/).filter((n) => n !== "")));
      for (const n in t) t[n] && !this.nt?.has(n) && this.st.add(n);
      return this.render(t);
    }
    const e = i.element.classList;
    for (const n of this.st) n in t || (e.remove(n), this.st.delete(n));
    for (const n in t) {
      const s = !!t[n];
      s === this.st.has(n) || this.nt?.has(n) || (s ? (e.add(n), this.st.add(n)) : (e.remove(n), this.st.delete(n)));
    }
    return P;
  }
});
const ue = "important", Xe = " !" + ue, Qe = pe(class extends de {
  constructor(i) {
    if (super(i), i.type !== he.ATTRIBUTE || i.name !== "style" || i.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(i) {
    return Object.keys(i).reduce((t, e) => {
      const n = i[e];
      return n == null ? t : t + `${e = e.includes("-") ? e : e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${n};`;
    }, "");
  }
  update(i, [t]) {
    const { style: e } = i.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(t)), this.render(t);
    for (const n of this.ft) t[n] == null && (this.ft.delete(n), n.includes("-") ? e.removeProperty(n) : e[n] = null);
    for (const n in t) {
      const s = t[n];
      if (s != null) {
        this.ft.add(n);
        const r = typeof s == "string" && s.endsWith(Xe);
        n.includes("-") || r ? e.setProperty(n, r ? s.slice(0, -11) : s, r ? ue : "") : e[n] = s;
      }
    }
    return P;
  }
}), st = (i, t) => {
  i.dispatchEvent(
    new CustomEvent("hass-action", {
      bubbles: !0,
      composed: !0,
      detail: t
    })
  );
}, z = (i, t) => {
  const e = String(i ?? t).trim();
  return e.length > 0 ? e.replace(/[{};]/g, "") : t;
}, x = (i, t) => {
  if (typeof i == "number" && Number.isFinite(i))
    return `${i}px`;
  const e = z(i, t);
  return /^-?\d+(\.\d+)?$/.test(e) ? `${e}px` : e;
}, ti = (i, t) => ({
  "--tic-background": z(t.background, "rgba(46, 46, 46, 0.5)"),
  "--tic-main-color": z(t.mainColor, "#18bcf2"),
  "--tic-graph-color": z(
    t.isWarn ? i.graph_warn_color : t.graph?.color || t.mainColor,
    "#18bcf2"
  ),
  "--tic-graph-value-color": z(t.isWarn ? t.mainColor : i.graph_value_color, "#d5d8dc"),
  "--tic-highlight-color": z(i.text_highlight, "#ff5d0c"),
  "--tic-height": x(i.height, "130px"),
  "--tic-graph-height": x(i.graph_height, "35px"),
  "--tic-border-radius": z(i.border_radius, "20px"),
  "--tic-icon-size": x(i.icon_size, "37px"),
  "--tic-row-indent": x(i.row_indent, "10px"),
  "--tic-header-padding": x(i.header_padding, "10px"),
  "--tic-body-padding": x(i.body_padding, "10px"),
  "--tic-title-font-size": x(i.title_font_size, "16px"),
  "--tic-row-font-size": x(i.row_font_size, "12px"),
  "--tic-graph-value-font-size": x(i.graph_value_font_size, "20px")
}), nt = (i, t) => {
  const e = ft(t, i.entity), n = e?.attributes ?? {}, s = i.source, r = ii(i, t, n, s), a = si(i, n, s), o = k(i.fullCardClick), l = ni(i, t, n, r, s), c = ri(i, t, n, s);
  return {
    entity: e,
    title: ei(i, e, n, s),
    icon: f(i.icon || (s === "template_entity" ? n.icon : "")) || "mdi:flash",
    navigationPath: a,
    isWarn: r,
    mainColor: r ? i.text_nok : i.text_ok,
    background: r ? i.background_nok : i.background_ok,
    rows: l,
    graph: c,
    fullCardClick: o,
    isClickable: !!(i.tap_action || a || i.entity || c?.entity)
  };
}, ft = (i, t) => t && i?.states ? i.states[t] : void 0, ei = (i, t, e, n) => f(
  i.name || (n === "template_entity" ? e.name || e.friendly_name : "") || t?.attributes?.friendly_name || i.entity || ""
), ii = (i, t, e, n) => A(i.warn) ? fe(i.warn, t) : n === "template_entity" ? k(e.is_warn) : !1, si = (i, t, e) => f(i.navigation_path || (e === "template_entity" ? t.navigation_path : "")) || void 0, ni = (i, t, e, n, s) => s === "manual" ? (i.rows ?? []).slice(0, 3).map((r) => pi(r, t, n)).filter((r) => A(r.text)) : hi(e), ri = (i, t, e, n) => {
  const s = n === "template_entity" ? ai(e) : {}, r = i.graph ?? {}, a = se(N(r.entity, s.entity));
  if (!a)
    return;
  const o = ft(t, a), l = f(N(r.unit, s.unit, o?.attributes?.unit_of_measurement)) || void 0, c = f(N(r.color, s.color)) || void 0;
  return {
    entity: a,
    name: f(N(r.name, s.name, o?.attributes?.friendly_name, a)),
    period: oi(N(r.period, s.period)),
    hoursToShow: li(N(r.hours_to_show, s.hours_to_show)),
    unit: l,
    color: c,
    curve: ci(N(r.curve, r.mode, s.curve, s.mode))
  };
}, ai = (i) => ({
  entity: i.graph_entity,
  name: i.graph_name,
  period: i.graph_period,
  hours_to_show: i.graph_hours_to_show,
  unit: i.graph_unit,
  color: i.graph_color,
  curve: i.graph_curve,
  mode: i.graph_mode
}), N = (...i) => i.find(A), oi = (i) => {
  const t = f(i).toLowerCase();
  return t === "today" || t === "day" || t === "daily" || t === "dnes" || t === "dneska" ? "today" : "hours";
}, li = (i) => {
  const t = Number.parseFloat(f(i));
  return !Number.isFinite(t) || t <= 0 ? 24 : Math.min(Math.max(t, 0.25), 168);
}, ci = (i) => {
  const t = f(i).toLowerCase();
  return t === "step" || t === "stepped" || t === "stairs" ? "step" : "linear";
}, hi = (i) => [1, 2, 3].map((t) => ({
  entity: se(i[`row_${t}_entity`]),
  text: f(i[`row_${t}_text`]),
  warn: k(i[`row_${t}_warn`])
})).filter((t) => A(t.text)), pi = (i, t, e) => {
  const n = ft(t, i.entity), s = A(i.text) ? f(i.text) : di(n, i);
  return {
    entity: i.entity ?? null,
    text: s,
    warn: A(i.warn) ? fe(i.warn, t) : e && k(i.inherit_warn),
    tap_action: i.tap_action
  };
}, fe = (i, t) => {
  if (typeof i != "object" || i === null || Array.isArray(i))
    return k(i);
  const e = ft(t, i.entity);
  if (!e)
    return !1;
  const n = i.state;
  if (n != null && n !== "")
    return Yt(e.state, n);
  const s = i.not_state;
  return s != null && s !== "" ? !Yt(e.state, s) : k(e.state);
}, Yt = (i, t) => (Array.isArray(t) ? t : [t]).map(f).includes(f(i)), di = (i, t) => {
  if (!i)
    return "";
  const e = t.name || i.attributes?.friendly_name || t.entity || "", n = t.attribute ? i.attributes?.[t.attribute] : Ce(i, t.unit), s = Array.isArray(n) || typeof n == "object" ? JSON.stringify(n) : f(n);
  return A(s) ? t.show_name === !1 ? s : `${f(e)}: ${s}` : f(e);
}, Kt = (i) => {
  const t = Date.now();
  if (i.period === "today") {
    const n = /* @__PURE__ */ new Date();
    n.setHours(0, 0, 0, 0);
    const s = new Date(n);
    return s.setDate(s.getDate() + 1), {
      historyStart: n.getTime(),
      domainStart: n.getTime(),
      domainEnd: s.getTime()
    };
  }
  const e = t - i.hoursToShow * 60 * 60 * 1e3;
  return {
    historyStart: e,
    domainStart: e,
    domainEnd: t
  };
}, ui = (i, t) => i.period === "today" ? `${i.entity}|${i.period}|${t.historyStart}` : `${i.entity}|${i.period}|${i.hoursToShow}`, fi = (i, t) => {
  const e = new Date(t).toISOString(), n = encodeURIComponent(i);
  return `history/period/${e}?filter_entity_id=${n}&significant_changes_only=0&no_attributes`;
}, gi = (i, t) => {
  const e = mi(i);
  return (e.find((s) => s.some((r) => r.entity_id === t)) ?? e[0] ?? []).map((s, r) => {
    const a = ge(s.state ?? s.s);
    return a === null ? null : {
      time: yi(s) ?? r,
      value: a
    };
  }).filter((s) => s !== null).sort((s, r) => s.time - r.time);
}, Jt = (i) => ge(i?.state), ge = (i) => {
  const t = Number.parseFloat(f(i));
  return Number.isFinite(t) ? t : null;
}, mi = (i) => !Array.isArray(i) || i.length === 0 ? [] : Array.isArray(i[0]) ? i : [i], yi = (i) => {
  const t = f(i.last_changed || i.last_updated);
  if (!t)
    return null;
  const e = Date.parse(t);
  return Number.isFinite(e) ? e : null;
}, Zt = 120, Xt = (i, t) => {
  if (i.length <= t)
    return i;
  const e = i[0].time, n = i[i.length - 1].time;
  if (n === e)
    return te(i, t);
  const s = Math.max(1, Math.floor((t - 2) / 2)), r = (n - e) / s, a = [i[0]];
  for (let o = 0; o < s; o += 1) {
    const l = e + o * r, c = o === s - 1 ? n : l + r, p = i.filter((g) => g.time >= l && g.time <= c);
    if (p.length === 0)
      continue;
    const h = p.reduce((g, $) => $.value < g.value ? $ : g, p[0]), m = p.reduce((g, $) => $.value > g.value ? $ : g, p[0]);
    ee(a, [h, m].sort((g, $) => g.time - $.time));
  }
  return ee(a, [i[i.length - 1]]), a.length <= t ? a : te(a, t);
}, _i = (i, t, e, n, s) => {
  if (i.length === 0)
    return;
  const r = s?.domainStart ?? i[0].time, a = s?.domainEnd ?? i[i.length - 1].time, o = vi(i, r, a, n);
  if (o.length === 0)
    return;
  const l = o.map((g) => g.value), c = Math.min(...l), p = Math.max(...l), h = 4, m = e - h * 2;
  return o.length === 1 || r === a ? $i(o[0], r, a, t, h, m, c, p) : {
    path: n === "step" ? xi(o, r, a, t, h, m, c, p) : bi(o, r, a, t, h, m, c, p),
    min: c,
    max: p
  };
}, Qt = (i) => {
  const t = Math.abs(i), e = t >= 100 ? 0 : t >= 1 ? 1 : 2;
  return i.toFixed(e).replace(/\.?0+$/, "");
}, te = (i, t) => {
  const e = (i.length - 1) / (t - 1);
  return Array.from({ length: t }, (n, s) => i[Math.round(s * e)]);
}, ee = (i, t) => {
  for (const e of t) {
    const n = i[i.length - 1];
    (!n || n.time !== e.time || n.value !== e.value) && i.push(e);
  }
}, $i = (i, t, e, n, s, r, a, o) => {
  const l = s + r / 2, c = t === e ? n : (i.time - t) / (e - t) * n, p = Math.max(0, c - 2), h = Math.min(n, c + 2);
  return {
    path: `M ${v(p)} ${v(l)} L ${v(h)} ${v(l)}`,
    min: a,
    max: o
  };
}, vi = (i, t, e, n) => {
  const s = i.filter((o) => o.time >= t && o.time <= e);
  if (n !== "step")
    return s;
  const r = [...i].reverse().find((o) => o.time < t);
  if (r)
    return [{ time: t, value: r.value }, ...s];
  const a = s[0];
  return a && a.time > t ? [{ time: t, value: a.value }, ...s] : s;
}, bi = (i, t, e, n, s, r, a, o) => i.map((l, c) => {
  const { x: p, y: h } = yt(l, t, e, n, s, r, a, o);
  return `${c === 0 ? "M" : "L"} ${v(p)} ${v(h)}`;
}).join(" "), xi = (i, t, e, n, s, r, a, o) => {
  const [l, ...c] = i, p = yt(l, t, e, n, s, r, a, o), h = [`M ${v(p.x)} ${v(p.y)}`];
  let m = p.y;
  for (const g of c) {
    const { x: $, y: Rt } = yt(g, t, e, n, s, r, a, o);
    h.push(`L ${v($)} ${v(m)}`), h.push(`L ${v($)} ${v(Rt)}`), m = Rt;
  }
  return h.join(" ");
}, yt = (i, t, e, n, s, r, a, o) => {
  const l = (i.time - t) / (e - t) * n, c = o === a ? 0.5 : (i.value - a) / (o - a), p = s + (1 - c) * r;
  return { x: l, y: p };
}, v = (i) => i.toFixed(2).replace(/\.?0+$/, "");
var wi = Object.defineProperty, gt = (i, t, e, n) => {
  for (var s = void 0, r = i.length - 1, a; r >= 0; r--)
    (a = i[r]) && (s = a(t, e, s) || s);
  return s && wi(t, e, s), s;
};
const Ai = "tablet-info-card-graph", Ei = 6e4, At = class At extends _ {
  constructor() {
    super(...arguments), this.points = [], this.isLoading = !1, this.fetchKey = "", this.lastFetchedAt = 0, this.requestId = 0;
  }
  updated(t) {
    (t.has("graph") || t.has("hass")) && this.loadHistory();
  }
  render() {
    if (!this.graph)
      return d;
    const t = this.hass?.states?.[this.graph.entity], e = this.getCurrentDisplay(t);
    return u`
      <div
        class="graph"
        role="button"
        tabindex="0"
        @click=${this.handleTap}
        @keydown=${this.handleKeyDown}
      >
        ${this.renderSparkline(t)}
        <div class="current" title=${e.full}>
          <span class="value">${e.value}</span>
          ${e.unit ? u`<span class="unit">${e.unit}</span>` : d}
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
    const t = Kt(this.graph), e = ui(this.graph, t), n = Date.now();
    if (this.isLoading && this.fetchKey === e || this.fetchKey === e && n - this.lastFetchedAt < Ei)
      return;
    this.isLoading = !0, this.fetchKey = e;
    const s = this.graph, r = ++this.requestId;
    try {
      const a = await this.hass.callApi("GET", fi(s.entity, t.historyStart));
      if (r !== this.requestId || this.graph?.entity !== s.entity)
        return;
      this.points = Xt(gi(a, s.entity), Zt), this.lastFetchedAt = Date.now();
    } catch {
      r === this.requestId && (this.points = [], this.lastFetchedAt = Date.now());
    } finally {
      r === this.requestId && (this.isLoading = !1);
    }
  }
  renderSparkline(t) {
    const e = this.graph ? Kt(this.graph) : void 0, n = _i(this.getChartPoints(t), 220, 45, this.graph?.curve ?? "linear", e);
    if (!n)
      return u`<div class="sparkline empty"></div>`;
    const s = Qt(n.min), r = Qt(n.max);
    return u`
      <div class="sparkline" aria-hidden="true">
        <span class="axis-label top" title=${r}>${r}</span>
        <span class="axis-label bottom" title=${s}>${s}</span>
        ${Le`<svg viewBox="0 0 220 45" preserveAspectRatio="none">
          <path class="line" d=${n.path}></path>
        </svg>`}
      </div>
    `;
  }
  getChartPoints(t) {
    const e = [...this.points], n = Jt(t), s = e[e.length - 1], r = Date.now();
    return n !== null && (!s || s.value !== n || s.time < r - 1e3) && e.push({
      time: r,
      value: n
    }), Xt(e, Zt);
  }
  getCurrentDisplay(t) {
    const e = Jt(t), n = e !== null ? e.toFixed(1) : t && A(t.state) ? f(t.state) : "-", s = this.graph?.unit || f(t?.attributes?.unit_of_measurement) || "", r = s ? `${n} ${s}` : n;
    return { value: n, unit: s, full: r };
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
At.styles = E`
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
let U = At;
gt([
  y({ attribute: !1 })
], U.prototype, "graph");
gt([
  y({ attribute: !1 })
], U.prototype, "hass");
gt([
  et()
], U.prototype, "points");
gt([
  et()
], U.prototype, "isLoading");
b(Ai, U);
var Ci = Object.defineProperty, me = (i, t, e, n) => {
  for (var s = void 0, r = i.length - 1, a; r >= 0; r--)
    (a = i[r]) && (s = a(t, e, s) || s);
  return s && Ci(t, e, s), s;
};
const Si = "tablet-info-card-header", Et = class Et extends _ {
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
Et.styles = E`
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
let K = Et;
me([
  y({ type: String })
], K.prototype, "icon");
me([
  y({ type: String })
], K.prototype, "title");
b(Si, K);
var ki = Object.defineProperty, Pi = (i, t, e, n) => {
  for (var s = void 0, r = i.length - 1, a; r >= 0; r--)
    (a = i[r]) && (s = a(t, e, s) || s);
  return s && ki(t, e, s), s;
};
const Ti = "tablet-info-card-row", Ct = class Ct extends _ {
  render() {
    if (!this.row)
      return d;
    const t = this.isClickable;
    return u`
      <div
        class=${F({ row: !0, button: t, warn: this.row.warn })}
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
Ct.styles = E`
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
let lt = Ct;
Pi([
  y({ attribute: !1 })
], lt.prototype, "row");
b(Ti, lt);
var Ni = Object.defineProperty, zi = (i, t, e, n) => {
  for (var s = void 0, r = i.length - 1, a; r >= 0; r--)
    (a = i[r]) && (s = a(t, e, s) || s);
  return s && Ni(t, e, s), s;
};
const Mi = "tablet-info-card-rows", St = class St extends _ {
  constructor() {
    super(...arguments), this.rows = [];
  }
  render() {
    return u`
      <div class="rows">
        ${this.rows.length > 0 ? this.rows.map((t, e) => u`<tablet-info-card-row .row=${t} data-index=${e}></tablet-info-card-row>`) : d}
      </div>
    `;
  }
};
St.styles = E`
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
let ct = St;
zi([
  y({ attribute: !1 })
], ct.prototype, "rows");
b(Mi, ct);
var Oi = Object.defineProperty, wt = (i, t, e, n) => {
  for (var s = void 0, r = i.length - 1, a; r >= 0; r--)
    (a = i[r]) && (s = a(t, e, s) || s);
  return s && Oi(t, e, s), s;
};
const Ui = "tablet-info-card-body", ie = 400, kt = class kt extends _ {
  constructor() {
    super(...arguments), this.isFlipping = !1, this.fullCardNavigationPending = !1;
  }
  render() {
    if (!this.config)
      return d;
    const t = nt(this.config, this.hass), e = t.rows.length > 0, n = !!t.graph, s = e || n;
    return u`
      <ha-card
        class=${F({ "full-card-flipping": this.isFlipping })}
        style=${Qe(ti(this.config, t))}
      >
        <div
          class=${F({
      card: !0,
      clickable: t.isClickable,
      "has-graph": n,
      "has-rows": e,
      "header-only": !s
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
          ${s ? u`
                <div
                  class=${F({
      "body-region": !0,
      "has-graph": n,
      "has-rows": e
    })}
                >
                  ${e ? u`<tablet-info-card-rows .rows=${t.rows}></tablet-info-card-rows>` : d}
                  ${t.graph ? u`<tablet-info-card-graph
                        class=${F({ compact: !e })}
                        .graph=${t.graph}
                        .hass=${this.hass}
                      ></tablet-info-card-graph>` : d}
                </div>
              ` : d}
        </div>
      </ha-card>
    `;
  }
  handleCardTap() {
    if (!this.config)
      return;
    const t = nt(this.config, this.hass);
    if (this.startFullCardNavigation(t.fullCardClick, t.navigationPath))
      return;
    const e = this.config.entity || t.graph?.entity, n = this.config.tap_action || (t.navigationPath ? { action: "navigate", navigation_path: t.navigationPath } : e ? { action: "more-info" } : null);
    n && st(this, {
      config: {
        entity: e,
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
    const e = nt(this.config, this.hass);
    if (this.startFullCardNavigation(e.fullCardClick, e.navigationPath))
      return;
    const n = t.detail.row, s = n.tap_action || (n.entity ? { action: "more-info" } : null);
    s && this.fireRowAction(n, s);
  }
  handleGraphTap(t) {
    if (t.stopPropagation(), this.config) {
      const e = nt(this.config, this.hass);
      if (this.startFullCardNavigation(e.fullCardClick, e.navigationPath))
        return;
    }
    st(this, {
      config: {
        entity: t.detail.graph.entity,
        tap_action: { action: "more-info" }
      },
      action: "tap"
    });
  }
  // Row components own low-level clicks; the body translates their intent to HA actions.
  fireRowAction(t, e) {
    st(this, {
      config: {
        entity: t.entity || this.config?.entity,
        tap_action: e
      },
      action: "tap"
    });
  }
  startFullCardNavigation(t, e) {
    return !t || !e ? !1 : (this.fullCardNavigationPending || this.navigateAfterFlip(e), !0);
  }
  async navigateAfterFlip(t) {
    this.fullCardNavigationPending = !0, this.isFlipping = !0, await this.updateComplete, await this.waitForFlip(), this.isFlipping = !1, st(this, {
      config: {
        entity: this.config?.entity,
        tap_action: { action: "navigate", navigation_path: t }
      },
      action: "tap"
    }), this.fullCardNavigationPending = !1;
  }
  waitForFlip() {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)
      return Promise.resolve();
    const t = this.renderRoot.querySelector("ha-card");
    return t ? new Promise((e) => {
      let n = 0;
      const s = () => {
        window.clearTimeout(n), t.removeEventListener("animationend", s), e();
      };
      t.addEventListener("animationend", s, { once: !0 }), n = window.setTimeout(s, ie + 100);
    }) : Promise.resolve();
  }
};
kt.styles = E`
    :host {
      display: block;
      font-family: var(--paper-font-body1_-_font-family, var(--primary-font-family, sans-serif));
    }

    ha-card {
      display: block;
      box-sizing: border-box;
      height: var(--tic-height, 130px);
      min-height: 0;
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

    ha-card.full-card-flipping {
      animation: full-card-flip ${ie}ms cubic-bezier(0.4, 0, 0.2, 1) both;
      transform-origin: center;
      will-change: transform;
    }

    @keyframes full-card-flip {
      0% {
        transform: perspective(800px) rotateY(0deg) scale(1);
      }
      49.9% {
        transform: perspective(800px) rotateY(90deg) scale(0.98);
      }
      50% {
        transform: perspective(800px) rotateY(-90deg) scale(0.98);
      }
      100% {
        transform: perspective(800px) rotateY(0deg) scale(1);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      ha-card.full-card-flipping {
        animation: none;
      }
    }

    .card {
      height: 100%;
      min-height: 0;
      box-sizing: border-box;
      display: grid;
      grid-template-rows: min-content minmax(0, 1fr);
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
      min-height: 0;
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

    .card.header-only {
      grid-template-rows: 1fr;
      padding: 0;
    }

    .card.header-only .header-region {
      align-self: center;
      padding: 0 var(--tic-header-padding, 10px);
    }
  `;
let j = kt;
wt([
  y({ attribute: !1 })
], j.prototype, "config");
wt([
  y({ attribute: !1 })
], j.prototype, "hass");
wt([
  et()
], j.prototype, "isFlipping");
b(Ui, j);
const it = E`
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
`, ye = E`
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 12px;
  }
`, Ri = "tablet-info-card-editor-update", R = (i, t) => {
  i.dispatchEvent(
    new CustomEvent(Ri, {
      bubbles: !0,
      composed: !0,
      detail: { patch: t }
    })
  );
};
var Di = Object.defineProperty, Hi = (i, t, e, n) => {
  for (var s = void 0, r = i.length - 1, a; r >= 0; r--)
    (a = i[r]) && (s = a(t, e, s) || s);
  return s && Di(t, e, s), s;
};
const ji = "tablet-info-card-editor-source", Pt = class Pt extends _ {
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
    const e = t.target.value;
    R(this, { source: e });
  }
};
Pt.styles = it;
let ht = Pt;
Hi([
  y({ type: String })
], ht.prototype, "source");
b(ji, ht);
var Li = Object.defineProperty, Fi = (i, t, e, n) => {
  for (var s = void 0, r = i.length - 1, a; r >= 0; r--)
    (a = i[r]) && (s = a(t, e, s) || s);
  return s && Li(t, e, s), s;
};
const Ii = "tablet-info-card-layout-fields", Tt = class Tt extends _ {
  constructor() {
    super(...arguments), this.config = {};
  }
  render() {
    return u`
      <div class="grid">
        <label>
          <span>Full card click</span>
          <span class="inline">
            <input type="checkbox" .checked=${k(this.config.fullCardClick)} @change=${this.handleFullCardClickToggle} />
            <span>Always navigate</span>
          </span>
        </label>
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
    return (e) => {
      const n = this.getStringValue(e);
      R(this, { [t]: n ? Number(n) : void 0 });
    };
  }
  handleFullCardClickToggle(t) {
    R(this, { fullCardClick: t.target.checked });
  }
  getStringValue(t) {
    const e = t.target.value.trim();
    return e.length > 0 ? e : void 0;
  }
  asNumberText(t, e) {
    const n = t ?? e;
    return typeof n == "number" ? String(n) : f(n).replace(/px$/i, "");
  }
};
Tt.styles = [it, ye];
let pt = Tt;
Fi([
  y({ attribute: !1 })
], pt.prototype, "config");
b(Ii, pt);
var Vi = Object.defineProperty, Gi = (i, t, e, n) => {
  for (var s = void 0, r = i.length - 1, a; r >= 0; r--)
    (a = i[r]) && (s = a(t, e, s) || s);
  return s && Vi(t, e, s), s;
};
const Wi = "tablet-info-card-manual-fields", Nt = class Nt extends _ {
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
          <input type="checkbox" .checked=${k(this.config.warn)} @change=${this.handleWarnToggle} />
          <span>Warn</span>
        </span>
      </label>
    `;
  }
  handleTextInput(t) {
    return (e) => {
      R(this, { [t]: this.getStringValue(e) });
    };
  }
  handleWarnToggle(t) {
    R(this, { warn: t.target.checked });
  }
  getStringValue(t) {
    const e = t.target.value.trim();
    return e.length > 0 ? e : void 0;
  }
  isComplexWarn(t) {
    return typeof t == "object" && t !== null && !Array.isArray(t);
  }
};
Nt.styles = [it, ye];
let dt = Nt;
Gi([
  y({ attribute: !1 })
], dt.prototype, "config");
b(Wi, dt);
const Bi = (i) => Object.keys(i?.states ?? {}).sort((t, e) => t.localeCompare(e)), _e = (i, t) => {
  const e = f(i?.states[t]?.attributes?.friendly_name);
  return e ? `${e} (${t})` : t;
};
var qi = Object.defineProperty, $e = (i, t, e, n) => {
  for (var s = void 0, r = i.length - 1, a; r >= 0; r--)
    (a = i[r]) && (s = a(t, e, s) || s);
  return s && qi(t, e, s), s;
};
const Yi = "tablet-info-card-manual-entity-picker", zt = class zt extends _ {
  render() {
    const t = Bi(this.hass);
    return u`
      <label>
        <span>Main entity</span>
        <input list="tablet-info-card-entities" .value=${this.entity ?? ""} @change=${this.handleChange} />
      </label>
      <datalist id="tablet-info-card-entities">
        ${t.map((e) => u`<option value=${e}>${_e(this.hass, e)}</option>`)}
      </datalist>
    `;
  }
  handleChange(t) {
    R(this, { entity: this.getStringValue(t) });
  }
  getStringValue(t) {
    const e = t.target.value.trim();
    return e.length > 0 ? e : void 0;
  }
};
zt.styles = it;
let J = zt;
$e([
  y({ attribute: !1 })
], J.prototype, "hass");
$e([
  y({ type: String })
], J.prototype, "entity");
b(Yi, J);
var Ki = Object.defineProperty, ve = (i, t, e, n) => {
  for (var s = void 0, r = i.length - 1, a; r >= 0; r--)
    (a = i[r]) && (s = a(t, e, s) || s);
  return s && Ki(t, e, s), s;
};
const Ji = "tablet-info-card-template-entity-picker", Mt = class Mt extends _ {
  render() {
    const t = this.getTemplateEntityOptions(), e = _t(this.entity ? this.hass?.states[this.entity] : void 0);
    return u`
      <label>
        <span>Template entity</span>
        <select .value=${this.entity ?? ""} @change=${this.handleChange}>
          <option value="">Select UI template entity</option>
          ${t.map((n) => u`<option value=${n}>${_e(this.hass, n)}</option>`)}
        </select>
      </label>
      ${this.entity && !e ? u`<p class="hint">
            Current entity is kept, but it is missing the template marker attribute
            <code>ui_element_type: tablet_info_card</code>.
          </p>` : d}
    `;
  }
  getTemplateEntityOptions() {
    const t = Se(this.hass);
    return this.entity && !t.includes(this.entity) ? [this.entity, ...t] : t;
  }
  handleChange(t) {
    R(this, { entity: this.getStringValue(t) });
  }
  getStringValue(t) {
    const e = t.target.value.trim();
    return e.length > 0 ? e : void 0;
  }
};
Mt.styles = it;
let Z = Mt;
ve([
  y({ attribute: !1 })
], Z.prototype, "hass");
ve([
  y({ type: String })
], Z.prototype, "entity");
b(Ji, Z);
var Zi = Object.defineProperty, be = (i, t, e, n) => {
  for (var s = void 0, r = i.length - 1, a; r >= 0; r--)
    (a = i[r]) && (s = a(t, e, s) || s);
  return s && Zi(t, e, s), s;
};
const Xi = "tablet-info-card-editor", Ot = class Ot extends _ {
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
    const e = { ...this.config, ...t };
    for (const n of Object.keys(e)) {
      const s = e[n];
      (s == null || s === "") && delete e[n];
    }
    this.config = e, this.dispatchEvent(
      new CustomEvent("config-changed", {
        bubbles: !0,
        composed: !0,
        detail: { config: e }
      })
    );
  }
};
Ot.styles = E`
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
let X = Ot;
be([
  et()
], X.prototype, "config");
be([
  y({ attribute: !1 })
], X.prototype, "hass");
b(Xi, X);
var Qi = Object.defineProperty, xe = (i, t, e, n) => {
  for (var s = void 0, r = i.length - 1, a; r >= 0; r--)
    (a = i[r]) && (s = a(t, e, s) || s);
  return s && Qi(t, e, s), s;
};
const Ut = class Ut extends _ {
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
Ut.styles = E`
    :host {
      display: block;
    }
  `;
let Q = Ut;
xe([
  et()
], Q.prototype, "config");
xe([
  y({ attribute: !1 })
], Q.prototype, "hass");
b(I, Q);
window.customCards = window.customCards || [];
window.customCards.some((i) => i.type === I) || window.customCards.push({
  type: I,
  name: "Tablet Info Card",
  preview: !0,
  description: "Compact status and navigation card with up to three detail rows and an optional graph.",
  documentationURL: "https://github.com/petosiso/tablet-info-card",
  getEntitySuggestion: (i, t) => {
    const e = i.states[t];
    return _t(e) ? {
      config: {
        type: `custom:${I}`,
        source: "template_entity",
        entity: t
      }
    } : null;
  }
});
console.info(
  `%c ${I} %c ${we} `,
  "color: white; background: #18bcf2; font-weight: 700;",
  "color: #18bcf2; background: transparent; font-weight: 700;"
);
