const U = "tablet-info-card", re = "0.4.0", oe = "ui_element_type", ae = "tablet_info_card", Z = {
  source: "template_entity",
  background_ok: "rgba(46, 46, 46, 0.5)",
  background_nok: "#ffcccc",
  text_ok: "#18bcf2",
  text_nok: "#3a3a3a",
  text_highlight: "#ff5d0c",
  icon_size: "37px",
  icon_col_width: "37px",
  row_indent: "10px",
  height: "130px",
  border_radius: "20px",
  title_font_size: "16px",
  row_font_size: "12px"
}, C = (i) => i != null && i !== "", T = (i) => i === !0 || i === "true" || i === "True" || i === "on" || i === "yes" || i === 1 || i === "1", $ = (i) => C(i) ? String(i).replace(/\s+/g, " ").trim() : "", le = (i) => {
  const t = $(i);
  return t.length > 0 ? t : null;
}, ce = (i, t) => {
  if (!i)
    return "";
  const e = Array.isArray(i.state) || typeof i.state == "object" ? JSON.stringify(i.state) : i.state, s = t ?? (i.attributes?.unit_of_measurement ? String(i.attributes.unit_of_measurement) : "");
  return s ? `${e} ${s}` : e;
}, lt = (i) => {
  const t = i?.attributes ?? {};
  return $(t[oe]) === ae;
}, he = (i) => Object.entries(i?.states ?? {}).filter(([, t]) => lt(t)).map(([t]) => t).sort((t, e) => t.localeCompare(e));
const F = globalThis, ct = F.ShadowRoot && (F.ShadyCSS === void 0 || F.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ht = /* @__PURE__ */ Symbol(), Et = /* @__PURE__ */ new WeakMap();
let Dt = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== ht) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (ct && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = Et.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && Et.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const de = (i) => new Dt(typeof i == "string" ? i : i + "", void 0, ht), x = (i, ...t) => {
  const e = i.length === 1 ? i[0] : t.reduce((s, n, r) => s + ((o) => {
    if (o._$cssResult$ === !0) return o.cssText;
    if (typeof o == "number") return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + i[r + 1], i[0]);
  return new Dt(e, i, ht);
}, pe = (i, t) => {
  if (ct) i.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), n = F.litNonce;
    n !== void 0 && s.setAttribute("nonce", n), s.textContent = e.cssText, i.appendChild(s);
  }
}, St = ct ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return de(e);
})(i) : i;
const { is: ue, defineProperty: fe, getOwnPropertyDescriptor: ge, getOwnPropertyNames: $e, getOwnPropertySymbols: _e, getPrototypeOf: me } = Object, A = globalThis, Ct = A.trustedTypes, ye = Ct ? Ct.emptyScript : "", be = A.reactiveElementPolyfillSupport, z = (i, t) => i, Q = { toAttribute(i, t) {
  switch (t) {
    case Boolean:
      i = i ? ye : null;
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
} }, dt = (i, t) => !ue(i, t), Pt = { attribute: !0, type: String, converter: Q, reflect: !1, useDefault: !1, hasChanged: dt };
Symbol.metadata ?? (Symbol.metadata = /* @__PURE__ */ Symbol("metadata")), A.litPropertyMetadata ?? (A.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let k = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Pt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = /* @__PURE__ */ Symbol(), n = this.getPropertyDescriptor(t, s, e);
      n !== void 0 && fe(this.prototype, t, n);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: n, set: r } = ge(this.prototype, t) ?? { get() {
      return this[e];
    }, set(o) {
      this[e] = o;
    } };
    return { get: n, set(o) {
      const l = n?.call(this);
      r?.call(this, o), this.requestUpdate(t, l, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Pt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(z("elementProperties"))) return;
    const t = me(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(z("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(z("properties"))) {
      const e = this.properties, s = [...$e(e), ..._e(e)];
      for (const n of s) this.createProperty(n, e[n]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, n] of e) this.elementProperties.set(s, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const n = this._$Eu(e, s);
      n !== void 0 && this._$Eh.set(n, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const n of s) e.unshift(St(n));
    } else t !== void 0 && e.push(St(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
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
    for (const s of e.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return pe(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), this._$EO?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$ET(t, e) {
    const s = this.constructor.elementProperties.get(t), n = this.constructor._$Eu(t, s);
    if (n !== void 0 && s.reflect === !0) {
      const r = (s.converter?.toAttribute !== void 0 ? s.converter : Q).toAttribute(e, s.type);
      this._$Em = t, r == null ? this.removeAttribute(n) : this.setAttribute(n, r), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const s = this.constructor, n = s._$Eh.get(t);
    if (n !== void 0 && this._$Em !== n) {
      const r = s.getPropertyOptions(n), o = typeof r.converter == "function" ? { fromAttribute: r.converter } : r.converter?.fromAttribute !== void 0 ? r.converter : Q;
      this._$Em = n;
      const l = o.fromAttribute(e, r.type);
      this[n] = l ?? this._$Ej?.get(n) ?? l, this._$Em = null;
    }
  }
  requestUpdate(t, e, s, n = !1, r) {
    if (t !== void 0) {
      const o = this.constructor;
      if (n === !1 && (r = this[t]), s ?? (s = o.getPropertyOptions(t)), !((s.hasChanged ?? dt)(r, e) || s.useDefault && s.reflect && r === this._$Ej?.get(t) && !this.hasAttribute(o._$Eu(t, s)))) return;
      this.C(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: s, reflect: n, wrapped: r }, o) {
    s && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, o ?? e ?? this[t]), r !== !0 || o !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (e = void 0), this._$AL.set(t, e)), n === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
        for (const [n, r] of this._$Ep) this[n] = r;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [n, r] of s) {
        const { wrapped: o } = r, l = this[n];
        o !== !0 || this._$AL.has(n) || l === void 0 || this.C(n, void 0, r, l);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), this._$EO?.forEach((s) => s.hostUpdate?.()), this.update(e)) : this._$EM();
    } catch (s) {
      throw t = !1, this._$EM(), s;
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
k.elementStyles = [], k.shadowRootOptions = { mode: "open" }, k[z("elementProperties")] = /* @__PURE__ */ new Map(), k[z("finalized")] = /* @__PURE__ */ new Map(), be?.({ ReactiveElement: k }), (A.reactiveElementVersions ?? (A.reactiveElementVersions = [])).push("2.1.2");
const R = globalThis, kt = (i) => i, X = R.trustedTypes, Tt = X ? X.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, Vt = "$lit$", v = `lit$${Math.random().toFixed(9).slice(2)}$`, Lt = "?" + v, ve = `<${Lt}>`, P = document, H = () => P.createComment(""), D = (i) => i === null || typeof i != "object" && typeof i != "function", pt = Array.isArray, Ae = (i) => pt(i) || typeof i?.[Symbol.iterator] == "function", ot = `[ 	
\f\r]`, N = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ot = /-->/g, Mt = />/g, E = RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Nt = /'/g, Ut = /"/g, Wt = /^(?:script|style|textarea|title)$/i, we = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), d = we(1), w = /* @__PURE__ */ Symbol.for("lit-noChange"), h = /* @__PURE__ */ Symbol.for("lit-nothing"), zt = /* @__PURE__ */ new WeakMap(), S = P.createTreeWalker(P, 129);
function Bt(i, t) {
  if (!pt(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Tt !== void 0 ? Tt.createHTML(t) : t;
}
const xe = (i, t) => {
  const e = i.length - 1, s = [];
  let n, r = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = N;
  for (let l = 0; l < e; l++) {
    const a = i[l];
    let p, u, c = -1, m = 0;
    for (; m < a.length && (o.lastIndex = m, u = o.exec(a), u !== null); ) m = o.lastIndex, o === N ? u[1] === "!--" ? o = Ot : u[1] !== void 0 ? o = Mt : u[2] !== void 0 ? (Wt.test(u[2]) && (n = RegExp("</" + u[2], "g")), o = E) : u[3] !== void 0 && (o = E) : o === E ? u[0] === ">" ? (o = n ?? N, c = -1) : u[1] === void 0 ? c = -2 : (c = o.lastIndex - u[2].length, p = u[1], o = u[3] === void 0 ? E : u[3] === '"' ? Ut : Nt) : o === Ut || o === Nt ? o = E : o === Ot || o === Mt ? o = N : (o = E, n = void 0);
    const y = o === E && i[l + 1].startsWith("/>") ? " " : "";
    r += o === N ? a + ve : c >= 0 ? (s.push(p), a.slice(0, c) + Vt + a.slice(c) + v + y) : a + v + (c === -2 ? l : y);
  }
  return [Bt(i, r + (i[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class V {
  constructor({ strings: t, _$litType$: e }, s) {
    let n;
    this.parts = [];
    let r = 0, o = 0;
    const l = t.length - 1, a = this.parts, [p, u] = xe(t, e);
    if (this.el = V.createElement(p, s), S.currentNode = this.el.content, e === 2 || e === 3) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (n = S.nextNode()) !== null && a.length < l; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes()) for (const c of n.getAttributeNames()) if (c.endsWith(Vt)) {
          const m = u[o++], y = n.getAttribute(c).split(v), J = /([.?@])?(.*)/.exec(m);
          a.push({ type: 1, index: r, name: J[2], strings: y, ctor: J[1] === "." ? Se : J[1] === "?" ? Ce : J[1] === "@" ? Pe : rt }), n.removeAttribute(c);
        } else c.startsWith(v) && (a.push({ type: 6, index: r }), n.removeAttribute(c));
        if (Wt.test(n.tagName)) {
          const c = n.textContent.split(v), m = c.length - 1;
          if (m > 0) {
            n.textContent = X ? X.emptyScript : "";
            for (let y = 0; y < m; y++) n.append(c[y], H()), S.nextNode(), a.push({ type: 2, index: ++r });
            n.append(c[m], H());
          }
        }
      } else if (n.nodeType === 8) if (n.data === Lt) a.push({ type: 2, index: r });
      else {
        let c = -1;
        for (; (c = n.data.indexOf(v, c + 1)) !== -1; ) a.push({ type: 7, index: r }), c += v.length - 1;
      }
      r++;
    }
  }
  static createElement(t, e) {
    const s = P.createElement("template");
    return s.innerHTML = t, s;
  }
}
function O(i, t, e = i, s) {
  if (t === w) return t;
  let n = s !== void 0 ? e._$Co?.[s] : e._$Cl;
  const r = D(t) ? void 0 : t._$litDirective$;
  return n?.constructor !== r && (n?._$AO?.(!1), r === void 0 ? n = void 0 : (n = new r(i), n._$AT(i, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = n : e._$Cl = n), n !== void 0 && (t = O(i, n._$AS(i, t.values), n, s)), t;
}
class Ee {
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
    const { el: { content: e }, parts: s } = this._$AD, n = (t?.creationScope ?? P).importNode(e, !0);
    S.currentNode = n;
    let r = S.nextNode(), o = 0, l = 0, a = s[0];
    for (; a !== void 0; ) {
      if (o === a.index) {
        let p;
        a.type === 2 ? p = new Y(r, r.nextSibling, this, t) : a.type === 1 ? p = new a.ctor(r, a.name, a.strings, this, t) : a.type === 6 && (p = new ke(r, this, t)), this._$AV.push(p), a = s[++l];
      }
      o !== a?.index && (r = S.nextNode(), o++);
    }
    return S.currentNode = P, n;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class Y {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, s, n) {
    this.type = 2, this._$AH = h, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = n, this._$Cv = n?.isConnected ?? !0;
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
    t = O(this, t, e), D(t) ? t === h || t == null || t === "" ? (this._$AH !== h && this._$AR(), this._$AH = h) : t !== this._$AH && t !== w && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Ae(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== h && D(this._$AH) ? this._$AA.nextSibling.data = t : this.T(P.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: s } = t, n = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = V.createElement(Bt(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === n) this._$AH.p(e);
    else {
      const r = new Ee(n, this), o = r.u(this.options);
      r.p(e), this.T(o), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = zt.get(t.strings);
    return e === void 0 && zt.set(t.strings, e = new V(t)), e;
  }
  k(t) {
    pt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, n = 0;
    for (const r of t) n === e.length ? e.push(s = new Y(this.O(H()), this.O(H()), this, this.options)) : s = e[n], s._$AI(r), n++;
    n < e.length && (this._$AR(s && s._$AB.nextSibling, n), e.length = n);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const s = kt(t).nextSibling;
      kt(t).remove(), t = s;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class rt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, n, r) {
    this.type = 1, this._$AH = h, this._$AN = void 0, this.element = t, this.name = e, this._$AM = n, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = h;
  }
  _$AI(t, e = this, s, n) {
    const r = this.strings;
    let o = !1;
    if (r === void 0) t = O(this, t, e, 0), o = !D(t) || t !== this._$AH && t !== w, o && (this._$AH = t);
    else {
      const l = t;
      let a, p;
      for (t = r[0], a = 0; a < r.length - 1; a++) p = O(this, l[s + a], e, a), p === w && (p = this._$AH[a]), o || (o = !D(p) || p !== this._$AH[a]), p === h ? t = h : t !== h && (t += (p ?? "") + r[a + 1]), this._$AH[a] = p;
    }
    o && !n && this.j(t);
  }
  j(t) {
    t === h ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Se extends rt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === h ? void 0 : t;
  }
}
class Ce extends rt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== h);
  }
}
class Pe extends rt {
  constructor(t, e, s, n, r) {
    super(t, e, s, n, r), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = O(this, t, e, 0) ?? h) === w) return;
    const s = this._$AH, n = t === h && s !== h || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, r = t !== h && (s === h || n);
    n && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class ke {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    O(this, t);
  }
}
const Te = R.litHtmlPolyfillSupport;
Te?.(V, Y), (R.litHtmlVersions ?? (R.litHtmlVersions = [])).push("3.3.3");
const Oe = (i, t, e) => {
  const s = e?.renderBefore ?? t;
  let n = s._$litPart$;
  if (n === void 0) {
    const r = e?.renderBefore ?? null;
    s._$litPart$ = n = new Y(t.insertBefore(H(), r), r, void 0, e ?? {});
  }
  return n._$AI(i), n;
};
const j = globalThis;
let g = class extends k {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Oe(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return w;
  }
};
g._$litElement$ = !0, g.finalized = !0, j.litElementHydrateSupport?.({ LitElement: g });
const Me = j.litElementPolyfillSupport;
Me?.({ LitElement: g });
(j.litElementVersions ?? (j.litElementVersions = [])).push("4.2.2");
const Ne = { attribute: !0, type: String, converter: Q, reflect: !1, hasChanged: dt }, Ue = (i = Ne, t, e) => {
  const { kind: s, metadata: n } = e;
  let r = globalThis.litPropertyMetadata.get(n);
  if (r === void 0 && globalThis.litPropertyMetadata.set(n, r = /* @__PURE__ */ new Map()), s === "setter" && ((i = Object.create(i)).wrapped = !0), r.set(e.name, i), s === "accessor") {
    const { name: o } = e;
    return { set(l) {
      const a = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(o, a, i, !0, l);
    }, init(l) {
      return l !== void 0 && this.C(o, void 0, i, l), l;
    } };
  }
  if (s === "setter") {
    const { name: o } = e;
    return function(l) {
      const a = this[o];
      t.call(this, l), this.requestUpdate(o, a, i, !0, l);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function f(i) {
  return (t, e) => typeof e == "object" ? Ue(i, t, e) : ((s, n, r) => {
    const o = n.hasOwnProperty(r);
    return n.constructor.createProperty(r, s), o ? Object.getOwnPropertyDescriptor(n, r) : void 0;
  })(i, t, e);
}
function It(i) {
  return f({ ...i, state: !0, attribute: !1 });
}
const _ = (i, t) => {
  customElements.get(i) || customElements.define(i, t);
};
const Gt = { ATTRIBUTE: 1 }, qt = (i) => (...t) => ({ _$litDirective$: i, values: t });
let Yt = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, s) {
    this._$Ct = t, this._$AM = e, this._$Ci = s;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
};
const Kt = qt(class extends Yt {
  constructor(i) {
    if (super(i), i.type !== Gt.ATTRIBUTE || i.name !== "class" || i.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(i) {
    return " " + Object.keys(i).filter((t) => i[t]).join(" ") + " ";
  }
  update(i, [t]) {
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), i.strings !== void 0 && (this.nt = new Set(i.strings.join(" ").split(/\s/).filter((s) => s !== "")));
      for (const s in t) t[s] && !this.nt?.has(s) && this.st.add(s);
      return this.render(t);
    }
    const e = i.element.classList;
    for (const s of this.st) s in t || (e.remove(s), this.st.delete(s));
    for (const s in t) {
      const n = !!t[s];
      n === this.st.has(s) || this.nt?.has(s) || (n ? (e.add(s), this.st.add(s)) : (e.remove(s), this.st.delete(s)));
    }
    return w;
  }
});
const Jt = "important", ze = " !" + Jt, Re = qt(class extends Yt {
  constructor(i) {
    if (super(i), i.type !== Gt.ATTRIBUTE || i.name !== "style" || i.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(i) {
    return Object.keys(i).reduce((t, e) => {
      const s = i[e];
      return s == null ? t : t + `${e = e.includes("-") ? e : e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s};`;
    }, "");
  }
  update(i, [t]) {
    const { style: e } = i.element;
    if (this.ft === void 0) return this.ft = new Set(Object.keys(t)), this.render(t);
    for (const s of this.ft) t[s] == null && (this.ft.delete(s), s.includes("-") ? e.removeProperty(s) : e[s] = null);
    for (const s in t) {
      const n = t[s];
      if (n != null) {
        this.ft.add(s);
        const r = typeof n == "string" && n.endsWith(ze);
        s.includes("-") || r ? e.setProperty(s, r ? n.slice(0, -11) : n, r ? Jt : "") : e[s] = n;
      }
    }
    return w;
  }
}), Rt = (i, t) => {
  i.dispatchEvent(
    new CustomEvent("hass-action", {
      bubbles: !0,
      composed: !0,
      detail: t
    })
  );
}, b = (i, t) => {
  const e = String(i ?? t).trim();
  return e.length > 0 ? e.replace(/[{};]/g, "") : t;
}, at = (i, t) => {
  if (typeof i == "number" && Number.isFinite(i))
    return `${i}px`;
  const e = b(i, t);
  return /^-?\d+(\.\d+)?$/.test(e) ? `${e}px` : e;
}, je = (i, t) => ({
  "--tic-background": b(t.background, "rgba(46, 46, 46, 0.5)"),
  "--tic-main-color": b(t.mainColor, "#18bcf2"),
  "--tic-highlight-color": b(i.text_highlight, "#ff5d0c"),
  "--tic-height": at(i.height, "130px"),
  "--tic-border-radius": b(i.border_radius, "20px"),
  "--tic-icon-size": b(i.icon_size, "37px"),
  "--tic-icon-col-width": b(i.icon_col_width, "37px"),
  "--tic-row-indent": b(i.row_indent, "10px"),
  "--tic-title-font-size": at(i.title_font_size, "16px"),
  "--tic-row-font-size": at(i.row_font_size, "12px")
}), jt = (i, t) => {
  const e = ut(t, i.entity), s = e?.attributes ?? {}, n = i.source, r = De(i, t, s, n), o = Ve(i, s, n), l = Le(i, t, s, r, n);
  return {
    entity: e,
    title: He(i, e, s, n),
    icon: $(i.icon || (n === "template_entity" ? s.icon : "")) || "mdi:flash",
    navigationPath: o,
    isWarn: r,
    mainColor: r ? i.text_nok : i.text_ok,
    background: r ? i.background_nok : i.background_ok,
    rows: l,
    isClickable: !!(i.tap_action || o || i.entity)
  };
}, ut = (i, t) => t && i?.states ? i.states[t] : void 0, He = (i, t, e, s) => $(
  i.name || (s === "template_entity" ? e.name || e.friendly_name : "") || t?.attributes?.friendly_name || i.entity || ""
), De = (i, t, e, s) => C(i.warn) ? Zt(i.warn, t) : s === "template_entity" ? T(e.is_warn) : !1, Ve = (i, t, e) => $(i.navigation_path || (e === "template_entity" ? t.navigation_path : "")) || void 0, Le = (i, t, e, s, n) => n === "manual" ? (i.rows ?? []).slice(0, 3).map((r) => Be(r, t, s)).filter((r) => C(r.text)) : We(e), We = (i) => [1, 2, 3].map((t) => ({
  entity: le(i[`row_${t}_entity`]),
  text: $(i[`row_${t}_text`]),
  warn: T(i[`row_${t}_warn`])
})).filter((t) => C(t.text)), Be = (i, t, e) => {
  const s = ut(t, i.entity), n = C(i.text) ? $(i.text) : Ie(s, i);
  return {
    entity: i.entity ?? null,
    text: n,
    warn: C(i.warn) ? Zt(i.warn, t) : e && T(i.inherit_warn),
    tap_action: i.tap_action
  };
}, Zt = (i, t) => {
  if (typeof i != "object" || i === null || Array.isArray(i))
    return T(i);
  const e = ut(t, i.entity);
  if (!e)
    return !1;
  const s = i.state;
  if (s != null && s !== "")
    return Ht(e.state, s);
  const n = i.not_state;
  return n != null && n !== "" ? !Ht(e.state, n) : T(e.state);
}, Ht = (i, t) => (Array.isArray(t) ? t : [t]).map($).includes($(i)), Ie = (i, t) => {
  if (!i)
    return "";
  const e = t.name || i.attributes?.friendly_name || t.entity || "", s = t.attribute ? i.attributes?.[t.attribute] : ce(i, t.unit), n = Array.isArray(s) || typeof s == "object" ? JSON.stringify(s) : $(s);
  return C(n) ? t.show_name === !1 ? n : `${$(e)}: ${n}` : $(e);
};
var Ge = Object.defineProperty, Ft = (i, t, e, s) => {
  for (var n = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (n = o(t, e, n) || n);
  return n && Ge(t, e, n), n;
};
const qe = "tablet-info-card-header", ft = class ft extends g {
  constructor() {
    super(...arguments), this.icon = "mdi:flash", this.title = "";
  }
  render() {
    return d`
      <div class="header">
        <div class="icon-cell">
          <ha-icon .icon=${this.icon}></ha-icon>
        </div>
        <div class="title" title=${this.title}>${this.title}</div>
      </div>
    `;
  }
};
ft.styles = x`
    :host {
      display: block;
      min-width: 0;
    }

    .header {
      display: grid;
      grid-template-columns: var(--tic-icon-col-width, 37px) 1fr;
      column-gap: 8px;
      align-items: center;
      min-width: 0;
    }

    .icon-cell {
      width: var(--tic-icon-col-width, 37px);
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
let L = ft;
Ft([
  f({ type: String })
], L.prototype, "icon");
Ft([
  f({ type: String })
], L.prototype, "title");
_(qe, L);
var Ye = Object.defineProperty, Ke = (i, t, e, s) => {
  for (var n = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (n = o(t, e, n) || n);
  return n && Ye(t, e, n), n;
};
const Je = "tablet-info-card-row", gt = class gt extends g {
  render() {
    if (!this.row)
      return h;
    const t = this.isClickable;
    return d`
      <div
        class=${Kt({ row: !0, button: t, warn: this.row.warn })}
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
gt.styles = x`
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
let tt = gt;
Ke([
  f({ attribute: !1 })
], tt.prototype, "row");
_(Je, tt);
var Ze = Object.defineProperty, Fe = (i, t, e, s) => {
  for (var n = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (n = o(t, e, n) || n);
  return n && Ze(t, e, n), n;
};
const Qe = "tablet-info-card-rows", $t = class $t extends g {
  constructor() {
    super(...arguments), this.rows = [];
  }
  render() {
    return d`
      <div class="rows">
        ${this.rows.length > 0 ? this.rows.map((t, e) => d`<tablet-info-card-row .row=${t} data-index=${e}></tablet-info-card-row>`) : d`<div class="empty">No rows configured</div>`}
      </div>
    `;
  }
};
$t.styles = x`
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

    .empty {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: var(--tic-row-font-size, 12px);
      line-height: 1.15;
      color: var(--tic-main-color, #18bcf2);
      opacity: 0.7;
    }
  `;
let et = $t;
Fe([
  f({ attribute: !1 })
], et.prototype, "rows");
_(Qe, et);
var Xe = Object.defineProperty, Qt = (i, t, e, s) => {
  for (var n = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (n = o(t, e, n) || n);
  return n && Xe(t, e, n), n;
};
const ti = "tablet-info-card-body", _t = class _t extends g {
  render() {
    if (!this.config)
      return h;
    const t = jt(this.config, this.hass);
    return d`
      <ha-card style=${Re(je(this.config, t))}>
        <div
          class=${Kt({ card: !0, clickable: t.isClickable })}
          role=${t.isClickable ? "button" : "presentation"}
          tabindex=${t.isClickable ? "0" : "-1"}
          @click=${this.handleCardTap}
          @keydown=${this.handleCardKeyDown}
          @tablet-info-row-tap=${this.handleRowTap}
        >
          <tablet-info-card-header .icon=${t.icon} .title=${t.title}></tablet-info-card-header>
          <tablet-info-card-rows .rows=${t.rows}></tablet-info-card-rows>
        </div>
      </ha-card>
    `;
  }
  handleCardTap() {
    if (!this.config)
      return;
    const t = jt(this.config, this.hass), e = this.config.tap_action || (t.navigationPath ? { action: "navigate", navigation_path: t.navigationPath } : this.config.entity ? { action: "more-info" } : null);
    e && Rt(this, {
      config: {
        entity: this.config.entity,
        tap_action: e
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
    const e = t.detail.row, s = e.tap_action || (e.entity ? { action: "more-info" } : null);
    s && this.fireRowAction(e, s);
  }
  // Row components own low-level clicks; the body translates their intent to HA actions.
  fireRowAction(t, e) {
    Rt(this, {
      config: {
        entity: t.entity || this.config?.entity,
        tap_action: e
      },
      action: "tap"
    });
  }
};
_t.styles = x`
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
      gap: 7px;
      padding: 10px 11px 9px;
      color: var(--tic-main-color, #18bcf2);
      cursor: default;
    }

    .card.clickable {
      cursor: pointer;
    }
  `;
let W = _t;
Qt([
  f({ attribute: !1 })
], W.prototype, "config");
Qt([
  f({ attribute: !1 })
], W.prototype, "hass");
_(ti, W);
const K = x`
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
`, Xt = x`
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 12px;
  }
`, ei = "tablet-info-card-editor-update", M = (i, t) => {
  i.dispatchEvent(
    new CustomEvent(ei, {
      bubbles: !0,
      composed: !0,
      detail: { patch: t }
    })
  );
};
var ii = Object.defineProperty, si = (i, t, e, s) => {
  for (var n = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (n = o(t, e, n) || n);
  return n && ii(t, e, n), n;
};
const ni = "tablet-info-card-editor-source", mt = class mt extends g {
  constructor() {
    super(...arguments), this.source = "template_entity";
  }
  render() {
    return d`
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
    M(this, { source: e });
  }
};
mt.styles = K;
let it = mt;
si([
  f({ type: String })
], it.prototype, "source");
_(ni, it);
var ri = Object.defineProperty, oi = (i, t, e, s) => {
  for (var n = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (n = o(t, e, n) || n);
  return n && ri(t, e, n), n;
};
const ai = "tablet-info-card-layout-fields", yt = class yt extends g {
  constructor() {
    super(...arguments), this.config = {};
  }
  render() {
    return d`
      <div class="grid">
        <label>
          <span>Card height</span>
          <input
            type="number"
            min="80"
            max="260"
            step="1"
            .value=${this.asNumberText(this.config.height, Z.height)}
            @change=${this.handleNumberInput("height")}
          />
        </label>
        <label>
          <span>Title font size</span>
          <input
            type="number"
            min="8"
            max="32"
            step="1"
            .value=${this.asNumberText(this.config.title_font_size, Z.title_font_size)}
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
            .value=${this.asNumberText(this.config.row_font_size, Z.row_font_size)}
            @change=${this.handleNumberInput("row_font_size")}
          />
        </label>
      </div>
    `;
  }
  handleNumberInput(t) {
    return (e) => {
      const s = this.getStringValue(e);
      M(this, { [t]: s ? Number(s) : void 0 });
    };
  }
  getStringValue(t) {
    const e = t.target.value.trim();
    return e.length > 0 ? e : void 0;
  }
  asNumberText(t, e) {
    const s = t ?? e;
    return typeof s == "number" ? String(s) : $(s).replace(/px$/i, "");
  }
};
yt.styles = [K, Xt];
let st = yt;
oi([
  f({ attribute: !1 })
], st.prototype, "config");
_(ai, st);
var li = Object.defineProperty, ci = (i, t, e, s) => {
  for (var n = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (n = o(t, e, n) || n);
  return n && li(t, e, n), n;
};
const hi = "tablet-info-card-manual-fields", bt = class bt extends g {
  constructor() {
    super(...arguments), this.config = {};
  }
  render() {
    return d`
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
    return this.isComplexWarn(this.config.warn) ? d`<p class="hint">Advanced warning condition is configured in YAML.</p>` : d`
      <label>
        <span>Warning state</span>
        <span class="inline">
          <input type="checkbox" .checked=${T(this.config.warn)} @change=${this.handleWarnToggle} />
          <span>Warn</span>
        </span>
      </label>
    `;
  }
  handleTextInput(t) {
    return (e) => {
      M(this, { [t]: this.getStringValue(e) });
    };
  }
  handleWarnToggle(t) {
    M(this, { warn: t.target.checked });
  }
  getStringValue(t) {
    const e = t.target.value.trim();
    return e.length > 0 ? e : void 0;
  }
  isComplexWarn(t) {
    return typeof t == "object" && t !== null && !Array.isArray(t);
  }
};
bt.styles = [K, Xt];
let nt = bt;
ci([
  f({ attribute: !1 })
], nt.prototype, "config");
_(hi, nt);
const di = (i) => Object.keys(i?.states ?? {}).sort((t, e) => t.localeCompare(e)), te = (i, t) => {
  const e = $(i?.states[t]?.attributes?.friendly_name);
  return e ? `${e} (${t})` : t;
};
var pi = Object.defineProperty, ee = (i, t, e, s) => {
  for (var n = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (n = o(t, e, n) || n);
  return n && pi(t, e, n), n;
};
const ui = "tablet-info-card-manual-entity-picker", vt = class vt extends g {
  render() {
    const t = di(this.hass);
    return d`
      <label>
        <span>Main entity</span>
        <input list="tablet-info-card-entities" .value=${this.entity ?? ""} @change=${this.handleChange} />
      </label>
      <datalist id="tablet-info-card-entities">
        ${t.map((e) => d`<option value=${e}>${te(this.hass, e)}</option>`)}
      </datalist>
    `;
  }
  handleChange(t) {
    M(this, { entity: this.getStringValue(t) });
  }
  getStringValue(t) {
    const e = t.target.value.trim();
    return e.length > 0 ? e : void 0;
  }
};
vt.styles = K;
let B = vt;
ee([
  f({ attribute: !1 })
], B.prototype, "hass");
ee([
  f({ type: String })
], B.prototype, "entity");
_(ui, B);
var fi = Object.defineProperty, ie = (i, t, e, s) => {
  for (var n = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (n = o(t, e, n) || n);
  return n && fi(t, e, n), n;
};
const gi = "tablet-info-card-template-entity-picker", At = class At extends g {
  render() {
    const t = this.getTemplateEntityOptions(), e = lt(this.entity ? this.hass?.states[this.entity] : void 0);
    return d`
      <label>
        <span>Template entity</span>
        <select .value=${this.entity ?? ""} @change=${this.handleChange}>
          <option value="">Select UI template entity</option>
          ${t.map((s) => d`<option value=${s}>${te(this.hass, s)}</option>`)}
        </select>
      </label>
      ${this.entity && !e ? d`<p class="hint">
            Current entity is kept, but it is missing the template marker attribute
            <code>ui_element_type: tablet_info_card</code>.
          </p>` : h}
    `;
  }
  getTemplateEntityOptions() {
    const t = he(this.hass);
    return this.entity && !t.includes(this.entity) ? [this.entity, ...t] : t;
  }
  handleChange(t) {
    M(this, { entity: this.getStringValue(t) });
  }
  getStringValue(t) {
    const e = t.target.value.trim();
    return e.length > 0 ? e : void 0;
  }
};
At.styles = K;
let I = At;
ie([
  f({ attribute: !1 })
], I.prototype, "hass");
ie([
  f({ type: String })
], I.prototype, "entity");
_(gi, I);
var $i = Object.defineProperty, se = (i, t, e, s) => {
  for (var n = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (n = o(t, e, n) || n);
  return n && $i(t, e, n), n;
};
const _i = "tablet-info-card-editor", wt = class wt extends g {
  constructor() {
    super(...arguments), this.config = {};
  }
  setConfig(t) {
    this.config = { source: "template_entity", ...t };
  }
  render() {
    const t = this.config.source ?? "template_entity";
    return d`
      <div class="editor" @tablet-info-card-editor-update=${this.handleEditorUpdate}>
        <tablet-info-card-editor-source .source=${t}></tablet-info-card-editor-source>
        ${t === "template_entity" ? this.renderTemplateEntityPicker() : this.renderManualEntityPicker()}
        ${t === "manual" ? this.renderManualFields() : h}
        <tablet-info-card-layout-fields .config=${this.config}></tablet-info-card-layout-fields>
        ${t === "manual" ? this.renderManualRowsNotice() : h}
      </div>
    `;
  }
  renderTemplateEntityPicker() {
    return d`
      <tablet-info-card-template-entity-picker
        .hass=${this.hass}
        .entity=${this.config.entity}
      ></tablet-info-card-template-entity-picker>
    `;
  }
  renderManualEntityPicker() {
    return d`
      <tablet-info-card-manual-entity-picker
        .hass=${this.hass}
        .entity=${this.config.entity}
      ></tablet-info-card-manual-entity-picker>
    `;
  }
  renderManualFields() {
    return d`<tablet-info-card-manual-fields .config=${this.config}></tablet-info-card-manual-fields>`;
  }
  renderManualRowsNotice() {
    return d`<p class="hint">Manual rows are supported in YAML through the <code>rows</code> option.</p>`;
  }
  handleEditorUpdate(t) {
    t.stopPropagation(), this.updateConfig(t.detail.patch);
  }
  updateConfig(t) {
    const e = { ...this.config, ...t };
    for (const s of Object.keys(e)) {
      const n = e[s];
      (n == null || n === "") && delete e[s];
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
wt.styles = x`
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
let G = wt;
se([
  It()
], G.prototype, "config");
se([
  f({ attribute: !1 })
], G.prototype, "hass");
_(_i, G);
var mi = Object.defineProperty, ne = (i, t, e, s) => {
  for (var n = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (n = o(t, e, n) || n);
  return n && mi(t, e, n), n;
};
const xt = class xt extends g {
  setConfig(t) {
    this.config = {
      ...Z,
      ...t
    };
  }
  getCardSize() {
    return 3;
  }
  getGridOptions() {
    return {
      rows: 2,
      columns: 4,
      min_rows: 2,
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
    return this.config ? d`<tablet-info-card-body .config=${this.config} .hass=${this.hass}></tablet-info-card-body>` : h;
  }
};
xt.styles = x`
    :host {
      display: block;
    }
  `;
let q = xt;
ne([
  It()
], q.prototype, "config");
ne([
  f({ attribute: !1 })
], q.prototype, "hass");
_(U, q);
window.customCards = window.customCards || [];
window.customCards.some((i) => i.type === U) || window.customCards.push({
  type: U,
  name: "Tablet Info Card",
  preview: !0,
  description: "Compact status and navigation card with up to three detail rows.",
  documentationURL: "https://github.com/petosiso/tablet-info-card",
  getEntitySuggestion: (i, t) => {
    const e = i.states[t];
    return lt(e) ? {
      config: {
        type: `custom:${U}`,
        source: "template_entity",
        entity: t
      }
    } : null;
  }
});
console.info(
  `%c ${U} %c ${re} `,
  "color: white; background: #18bcf2; font-weight: 700;",
  "color: #18bcf2; background: transparent; font-weight: 700;"
);
