const j = "tablet-info-card", we = "0.4.0", xe = "ui_element_type", Ae = "tablet_info_card", H = {
  source: "template_entity",
  background_ok: "rgba(46, 46, 46, 0.5)",
  background_nok: "#ffcccc",
  text_ok: "#18bcf2",
  text_nok: "#3a3a3a",
  text_highlight: "#ff5d0c",
  graph_warn_color: "#d93025",
  graph_value_color: "#d5d8dc",
  icon_size: "37px",
  icon_col_width: "37px",
  row_indent: "10px",
  height: "130px",
  border_radius: "20px",
  title_font_size: "16px",
  row_font_size: "12px",
  graph_value_font_size: "20px"
}, w = (i) => i != null && i !== "", O = (i) => i === !0 || i === "true" || i === "True" || i === "on" || i === "yes" || i === 1 || i === "1", g = (i) => w(i) ? String(i).replace(/\s+/g, " ").trim() : "", Qt = (i) => {
  const t = g(i);
  return t.length > 0 ? t : null;
}, Ee = (i, t) => {
  if (!i)
    return "";
  const e = Array.isArray(i.state) || typeof i.state == "object" ? JSON.stringify(i.state) : i.state, n = t ?? (i.attributes?.unit_of_measurement ? String(i.attributes.unit_of_measurement) : "");
  return n ? `${e} ${n}` : e;
}, _t = (i) => {
  const t = i?.attributes ?? {};
  return g(t[xe]) === Ae;
}, Se = (i) => Object.entries(i?.states ?? {}).filter(([, t]) => _t(t)).map(([t]) => t).sort((t, e) => t.localeCompare(e));
const et = globalThis, yt = et.ShadowRoot && (et.ShadyCSS === void 0 || et.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $t = /* @__PURE__ */ Symbol(), Ot = /* @__PURE__ */ new WeakMap();
let te = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== $t) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (yt && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = Ot.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Ot.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const ke = (i) => new te(typeof i == "string" ? i : i + "", void 0, $t), x = (i, ...t) => {
  const e = i.length === 1 ? i[0] : t.reduce((n, s, r) => n + ((o) => {
    if (o._$cssResult$ === !0) return o.cssText;
    if (typeof o == "number") return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + i[r + 1], i[0]);
  return new te(e, i, $t);
}, Ce = (i, t) => {
  if (yt) i.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), s = et.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = e.cssText, i.appendChild(n);
  }
}, Ut = yt ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return ke(e);
})(i) : i;
const { is: Te, defineProperty: Pe, getOwnPropertyDescriptor: Ne, getOwnPropertyNames: Me, getOwnPropertySymbols: ze, getPrototypeOf: Oe } = Object, E = globalThis, Rt = E.trustedTypes, Ue = Rt ? Rt.emptyScript : "", Re = E.reactiveElementPolyfillSupport, L = (i, t) => i, it = { toAttribute(i, t) {
  switch (t) {
    case Boolean:
      i = i ? Ue : null;
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
} }, vt = (i, t) => !Te(i, t), Dt = { attribute: !0, type: String, converter: it, reflect: !1, useDefault: !1, hasChanged: vt };
Symbol.metadata ?? (Symbol.metadata = /* @__PURE__ */ Symbol("metadata")), E.litPropertyMetadata ?? (E.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let z = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Dt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = /* @__PURE__ */ Symbol(), s = this.getPropertyDescriptor(t, n, e);
      s !== void 0 && Pe(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: s, set: r } = Ne(this.prototype, t) ?? { get() {
      return this[e];
    }, set(o) {
      this[e] = o;
    } };
    return { get: s, set(o) {
      const l = s?.call(this);
      r?.call(this, o), this.requestUpdate(t, l, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Dt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(L("elementProperties"))) return;
    const t = Oe(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(L("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(L("properties"))) {
      const e = this.properties, n = [...Me(e), ...ze(e)];
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
      for (const s of n) e.unshift(Ut(s));
    } else t !== void 0 && e.push(Ut(t));
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
    return Ce(t, this.constructor.elementStyles), t;
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
      const r = (n.converter?.toAttribute !== void 0 ? n.converter : it).toAttribute(e, n.type);
      this._$Em = t, r == null ? this.removeAttribute(s) : this.setAttribute(s, r), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const n = this.constructor, s = n._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const r = n.getPropertyOptions(s), o = typeof r.converter == "function" ? { fromAttribute: r.converter } : r.converter?.fromAttribute !== void 0 ? r.converter : it;
      this._$Em = s;
      const l = o.fromAttribute(e, r.type);
      this[s] = l ?? this._$Ej?.get(s) ?? l, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, s = !1, r) {
    if (t !== void 0) {
      const o = this.constructor;
      if (s === !1 && (r = this[t]), n ?? (n = o.getPropertyOptions(t)), !((n.hasChanged ?? vt)(r, e) || n.useDefault && n.reflect && r === this._$Ej?.get(t) && !this.hasAttribute(o._$Eu(t, n)))) return;
      this.C(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: n, reflect: s, wrapped: r }, o) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, o ?? e ?? this[t]), r !== !0 || o !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
        const { wrapped: o } = r, l = this[s];
        o !== !0 || this._$AL.has(s) || l === void 0 || this.C(s, void 0, r, l);
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
z.elementStyles = [], z.shadowRootOptions = { mode: "open" }, z[L("elementProperties")] = /* @__PURE__ */ new Map(), z[L("finalized")] = /* @__PURE__ */ new Map(), Re?.({ ReactiveElement: z }), (E.reactiveElementVersions ?? (E.reactiveElementVersions = [])).push("2.1.2");
const V = globalThis, Ht = (i) => i, st = V.trustedTypes, jt = st ? st.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, ee = "$lit$", A = `lit$${Math.random().toFixed(9).slice(2)}$`, ie = "?" + A, De = `<${ie}>`, T = document, G = () => T.createComment(""), W = (i) => i === null || typeof i != "object" && typeof i != "function", bt = Array.isArray, He = (i) => bt(i) || typeof i?.[Symbol.iterator] == "function", ft = `[ 	
\f\r]`, D = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Lt = /-->/g, Vt = />/g, k = RegExp(`>|${ft}(?:([^\\s"'>=/]+)(${ft}*=${ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), It = /'/g, Gt = /"/g, se = /^(?:script|style|textarea|title)$/i, ne = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), d = ne(1), je = ne(2), S = /* @__PURE__ */ Symbol.for("lit-noChange"), h = /* @__PURE__ */ Symbol.for("lit-nothing"), Wt = /* @__PURE__ */ new WeakMap(), C = T.createTreeWalker(T, 129);
function re(i, t) {
  if (!bt(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return jt !== void 0 ? jt.createHTML(t) : t;
}
const Le = (i, t) => {
  const e = i.length - 1, n = [];
  let s, r = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = D;
  for (let l = 0; l < e; l++) {
    const a = i[l];
    let p, u, c = -1, m = 0;
    for (; m < a.length && (o.lastIndex = m, u = o.exec(a), u !== null); ) m = o.lastIndex, o === D ? u[1] === "!--" ? o = Lt : u[1] !== void 0 ? o = Vt : u[2] !== void 0 ? (se.test(u[2]) && (s = RegExp("</" + u[2], "g")), o = k) : u[3] !== void 0 && (o = k) : o === k ? u[0] === ">" ? (o = s ?? D, c = -1) : u[1] === void 0 ? c = -2 : (c = o.lastIndex - u[2].length, p = u[1], o = u[3] === void 0 ? k : u[3] === '"' ? Gt : It) : o === Gt || o === It ? o = k : o === Lt || o === Vt ? o = D : (o = k, s = void 0);
    const f = o === k && i[l + 1].startsWith("/>") ? " " : "";
    r += o === D ? a + De : c >= 0 ? (n.push(p), a.slice(0, c) + ee + a.slice(c) + A + f) : a + A + (c === -2 ? l : f);
  }
  return [re(i, r + (i[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class B {
  constructor({ strings: t, _$litType$: e }, n) {
    let s;
    this.parts = [];
    let r = 0, o = 0;
    const l = t.length - 1, a = this.parts, [p, u] = Le(t, e);
    if (this.el = B.createElement(p, n), C.currentNode = this.el.content, e === 2 || e === 3) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (s = C.nextNode()) !== null && a.length < l; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const c of s.getAttributeNames()) if (c.endsWith(ee)) {
          const m = u[o++], f = s.getAttribute(c).split(A), y = /([.?@])?(.*)/.exec(m);
          a.push({ type: 1, index: r, name: y[2], strings: f, ctor: y[1] === "." ? Ie : y[1] === "?" ? Ge : y[1] === "@" ? We : ct }), s.removeAttribute(c);
        } else c.startsWith(A) && (a.push({ type: 6, index: r }), s.removeAttribute(c));
        if (se.test(s.tagName)) {
          const c = s.textContent.split(A), m = c.length - 1;
          if (m > 0) {
            s.textContent = st ? st.emptyScript : "";
            for (let f = 0; f < m; f++) s.append(c[f], G()), C.nextNode(), a.push({ type: 2, index: ++r });
            s.append(c[m], G());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ie) a.push({ type: 2, index: r });
      else {
        let c = -1;
        for (; (c = s.data.indexOf(A, c + 1)) !== -1; ) a.push({ type: 7, index: r }), c += A.length - 1;
      }
      r++;
    }
  }
  static createElement(t, e) {
    const n = T.createElement("template");
    return n.innerHTML = t, n;
  }
}
function U(i, t, e = i, n) {
  if (t === S) return t;
  let s = n !== void 0 ? e._$Co?.[n] : e._$Cl;
  const r = W(t) ? void 0 : t._$litDirective$;
  return s?.constructor !== r && (s?._$AO?.(!1), r === void 0 ? s = void 0 : (s = new r(i), s._$AT(i, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = s : e._$Cl = s), s !== void 0 && (t = U(i, s._$AS(i, t.values), s, n)), t;
}
class Ve {
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
    const { el: { content: e }, parts: n } = this._$AD, s = (t?.creationScope ?? T).importNode(e, !0);
    C.currentNode = s;
    let r = C.nextNode(), o = 0, l = 0, a = n[0];
    for (; a !== void 0; ) {
      if (o === a.index) {
        let p;
        a.type === 2 ? p = new X(r, r.nextSibling, this, t) : a.type === 1 ? p = new a.ctor(r, a.name, a.strings, this, t) : a.type === 6 && (p = new Be(r, this, t)), this._$AV.push(p), a = n[++l];
      }
      o !== a?.index && (r = C.nextNode(), o++);
    }
    return C.currentNode = T, s;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class X {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, n, s) {
    this.type = 2, this._$AH = h, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = s, this._$Cv = s?.isConnected ?? !0;
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
    t = U(this, t, e), W(t) ? t === h || t == null || t === "" ? (this._$AH !== h && this._$AR(), this._$AH = h) : t !== this._$AH && t !== S && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : He(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== h && W(this._$AH) ? this._$AA.nextSibling.data = t : this.T(T.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: n } = t, s = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = B.createElement(re(n.h, n.h[0]), this.options)), n);
    if (this._$AH?._$AD === s) this._$AH.p(e);
    else {
      const r = new Ve(s, this), o = r.u(this.options);
      r.p(e), this.T(o), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = Wt.get(t.strings);
    return e === void 0 && Wt.set(t.strings, e = new B(t)), e;
  }
  k(t) {
    bt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, s = 0;
    for (const r of t) s === e.length ? e.push(n = new X(this.O(G()), this.O(G()), this, this.options)) : n = e[s], n._$AI(r), s++;
    s < e.length && (this._$AR(n && n._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const n = Ht(t).nextSibling;
      Ht(t).remove(), t = n;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class ct {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, s, r) {
    this.type = 1, this._$AH = h, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = r, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = h;
  }
  _$AI(t, e = this, n, s) {
    const r = this.strings;
    let o = !1;
    if (r === void 0) t = U(this, t, e, 0), o = !W(t) || t !== this._$AH && t !== S, o && (this._$AH = t);
    else {
      const l = t;
      let a, p;
      for (t = r[0], a = 0; a < r.length - 1; a++) p = U(this, l[n + a], e, a), p === S && (p = this._$AH[a]), o || (o = !W(p) || p !== this._$AH[a]), p === h ? t = h : t !== h && (t += (p ?? "") + r[a + 1]), this._$AH[a] = p;
    }
    o && !s && this.j(t);
  }
  j(t) {
    t === h ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ie extends ct {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === h ? void 0 : t;
  }
}
class Ge extends ct {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== h);
  }
}
class We extends ct {
  constructor(t, e, n, s, r) {
    super(t, e, n, s, r), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = U(this, t, e, 0) ?? h) === S) return;
    const n = this._$AH, s = t === h && n !== h || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, r = t !== h && (n === h || s);
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
    U(this, t);
  }
}
const qe = V.litHtmlPolyfillSupport;
qe?.(B, X), (V.litHtmlVersions ?? (V.litHtmlVersions = [])).push("3.3.3");
const Fe = (i, t, e) => {
  const n = e?.renderBefore ?? t;
  let s = n._$litPart$;
  if (s === void 0) {
    const r = e?.renderBefore ?? null;
    n._$litPart$ = s = new X(t.insertBefore(G(), r), r, void 0, e ?? {});
  }
  return s._$AI(i), s;
};
const I = globalThis;
let $ = class extends z {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Fe(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return S;
  }
};
$._$litElement$ = !0, $.finalized = !0, I.litElementHydrateSupport?.({ LitElement: $ });
const Ke = I.litElementPolyfillSupport;
Ke?.({ LitElement: $ });
(I.litElementVersions ?? (I.litElementVersions = [])).push("4.2.2");
const Ye = { attribute: !0, type: String, converter: it, reflect: !1, hasChanged: vt }, Je = (i = Ye, t, e) => {
  const { kind: n, metadata: s } = e;
  let r = globalThis.litPropertyMetadata.get(s);
  if (r === void 0 && globalThis.litPropertyMetadata.set(s, r = /* @__PURE__ */ new Map()), n === "setter" && ((i = Object.create(i)).wrapped = !0), r.set(e.name, i), n === "accessor") {
    const { name: o } = e;
    return { set(l) {
      const a = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(o, a, i, !0, l);
    }, init(l) {
      return l !== void 0 && this.C(o, void 0, i, l), l;
    } };
  }
  if (n === "setter") {
    const { name: o } = e;
    return function(l) {
      const a = this[o];
      t.call(this, l), this.requestUpdate(o, a, i, !0, l);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function _(i) {
  return (t, e) => typeof e == "object" ? Je(i, t, e) : ((n, s, r) => {
    const o = s.hasOwnProperty(r);
    return s.constructor.createProperty(r, n), o ? Object.getOwnPropertyDescriptor(s, r) : void 0;
  })(i, t, e);
}
function ht(i) {
  return _({ ...i, state: !0, attribute: !1 });
}
const v = (i, t) => {
  customElements.get(i) || customElements.define(i, t);
};
const oe = { ATTRIBUTE: 1 }, ae = (i) => (...t) => ({ _$litDirective$: i, values: t });
let le = class {
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
const mt = ae(class extends le {
  constructor(i) {
    if (super(i), i.type !== oe.ATTRIBUTE || i.name !== "class" || i.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
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
    return S;
  }
});
const ce = "important", Ze = " !" + ce, Xe = ae(class extends le {
  constructor(i) {
    if (super(i), i.type !== oe.ATTRIBUTE || i.name !== "style" || i.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
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
        const r = typeof s == "string" && s.endsWith(Ze);
        n.includes("-") || r ? e.setProperty(n, r ? s.slice(0, -11) : s, r ? ce : "") : e[n] = s;
      }
    }
    return S;
  }
}), gt = (i, t) => {
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
}, tt = (i, t) => {
  if (typeof i == "number" && Number.isFinite(i))
    return `${i}px`;
  const e = b(i, t);
  return /^-?\d+(\.\d+)?$/.test(e) ? `${e}px` : e;
}, Qe = (i, t) => ({
  "--tic-background": b(t.background, "rgba(46, 46, 46, 0.5)"),
  "--tic-main-color": b(t.mainColor, "#18bcf2"),
  "--tic-graph-color": b(
    t.isWarn ? i.graph_warn_color : t.graph?.color || t.mainColor,
    "#18bcf2"
  ),
  "--tic-graph-value-color": b(t.isWarn ? t.mainColor : i.graph_value_color, "#d5d8dc"),
  "--tic-highlight-color": b(i.text_highlight, "#ff5d0c"),
  "--tic-height": tt(i.height, "130px"),
  "--tic-border-radius": b(i.border_radius, "20px"),
  "--tic-icon-size": b(i.icon_size, "37px"),
  "--tic-icon-col-width": b(i.icon_col_width, "37px"),
  "--tic-row-indent": b(i.row_indent, "10px"),
  "--tic-title-font-size": tt(i.title_font_size, "16px"),
  "--tic-row-font-size": tt(i.row_font_size, "12px"),
  "--tic-graph-value-font-size": tt(i.graph_value_font_size, "20px")
}), Bt = (i, t) => {
  const e = pt(t, i.entity), n = e?.attributes ?? {}, s = i.source, r = ei(i, t, n, s), o = ii(i, n, s), l = si(i, t, n, r, s), a = ni(i, t, n, s);
  return {
    entity: e,
    title: ti(i, e, n, s),
    icon: g(i.icon || (s === "template_entity" ? n.icon : "")) || "mdi:flash",
    navigationPath: o,
    isWarn: r,
    mainColor: r ? i.text_nok : i.text_ok,
    background: r ? i.background_nok : i.background_ok,
    rows: l,
    graph: a,
    isClickable: !!(i.tap_action || o || i.entity || a?.entity)
  };
}, pt = (i, t) => t && i?.states ? i.states[t] : void 0, ti = (i, t, e, n) => g(
  i.name || (n === "template_entity" ? e.name || e.friendly_name : "") || t?.attributes?.friendly_name || i.entity || ""
), ei = (i, t, e, n) => w(i.warn) ? he(i.warn, t) : n === "template_entity" ? O(e.is_warn) : !1, ii = (i, t, e) => g(i.navigation_path || (e === "template_entity" ? t.navigation_path : "")) || void 0, si = (i, t, e, n, s) => s === "manual" ? (i.rows ?? []).slice(0, 3).map((r) => ci(r, t, n)).filter((r) => w(r.text)) : li(e), ni = (i, t, e, n) => {
  const s = n === "template_entity" ? ri(e) : {}, r = i.graph ?? {}, o = Qt(N(r.entity, s.entity));
  if (!o)
    return;
  const l = pt(t, o), a = g(N(r.unit, s.unit, l?.attributes?.unit_of_measurement)) || void 0, p = g(N(r.color, s.color)) || void 0;
  return {
    entity: o,
    name: g(N(r.name, s.name, l?.attributes?.friendly_name, o)),
    period: oi(N(r.period, s.period)),
    hoursToShow: ai(N(r.hours_to_show, s.hours_to_show)),
    unit: a,
    color: p
  };
}, ri = (i) => ({
  entity: i.graph_entity,
  name: i.graph_name,
  period: i.graph_period,
  hours_to_show: i.graph_hours_to_show,
  unit: i.graph_unit,
  color: i.graph_color
}), N = (...i) => i.find(w), oi = (i) => {
  const t = g(i).toLowerCase();
  return t === "today" || t === "day" || t === "daily" || t === "dnes" || t === "dneska" ? "today" : "hours";
}, ai = (i) => {
  const t = Number.parseFloat(g(i));
  return !Number.isFinite(t) || t <= 0 ? 24 : Math.min(Math.max(t, 0.25), 168);
}, li = (i) => [1, 2, 3].map((t) => ({
  entity: Qt(i[`row_${t}_entity`]),
  text: g(i[`row_${t}_text`]),
  warn: O(i[`row_${t}_warn`])
})).filter((t) => w(t.text)), ci = (i, t, e) => {
  const n = pt(t, i.entity), s = w(i.text) ? g(i.text) : hi(n, i);
  return {
    entity: i.entity ?? null,
    text: s,
    warn: w(i.warn) ? he(i.warn, t) : e && O(i.inherit_warn),
    tap_action: i.tap_action
  };
}, he = (i, t) => {
  if (typeof i != "object" || i === null || Array.isArray(i))
    return O(i);
  const e = pt(t, i.entity);
  if (!e)
    return !1;
  const n = i.state;
  if (n != null && n !== "")
    return qt(e.state, n);
  const s = i.not_state;
  return s != null && s !== "" ? !qt(e.state, s) : O(e.state);
}, qt = (i, t) => (Array.isArray(t) ? t : [t]).map(g).includes(g(i)), hi = (i, t) => {
  if (!i)
    return "";
  const e = t.name || i.attributes?.friendly_name || t.entity || "", n = t.attribute ? i.attributes?.[t.attribute] : Ee(i, t.unit), s = Array.isArray(n) || typeof n == "object" ? JSON.stringify(n) : g(n);
  return w(s) ? t.show_name === !1 ? s : `${g(e)}: ${s}` : g(e);
};
var pi = Object.defineProperty, dt = (i, t, e, n) => {
  for (var s = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (s = o(t, e, s) || s);
  return s && pi(t, e, s), s;
};
const di = "tablet-info-card-graph", ui = 6e4, Ft = 120, wt = class wt extends $ {
  constructor() {
    super(...arguments), this.points = [], this.isLoading = !1, this.fetchKey = "", this.lastFetchedAt = 0, this.requestId = 0;
  }
  updated(t) {
    (t.has("graph") || t.has("hass")) && this.loadHistory();
  }
  render() {
    if (!this.graph)
      return h;
    const t = this.hass?.states?.[this.graph.entity], e = this.getCurrentDisplay(t);
    return d`
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
          ${e.unit ? d`<span class="unit">${e.unit}</span>` : h}
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
    const t = Kt(this.graph), e = fi(this.graph, t), n = Date.now();
    if (this.isLoading || this.fetchKey === e && n - this.lastFetchedAt < ui)
      return;
    this.isLoading = !0, this.fetchKey = e;
    const s = ++this.requestId;
    try {
      const r = await this.hass.callApi("GET", gi(this.graph.entity, t.historyStart));
      if (s !== this.requestId)
        return;
      this.points = Yt(mi(r, this.graph.entity), Ft), this.lastFetchedAt = Date.now();
    } catch {
      s === this.requestId && (this.points = [], this.lastFetchedAt = Date.now());
    } finally {
      s === this.requestId && (this.isLoading = !1);
    }
  }
  renderSparkline(t) {
    const e = this.graph ? Kt(this.graph) : void 0, n = vi(this.getChartPoints(t), 220, 45, e);
    if (!n)
      return d`<div class="sparkline empty"></div>`;
    const s = Xt(n.min), r = Xt(n.max);
    return d`
      <div class="sparkline" aria-hidden="true">
        <span class="axis-label top" title=${r}>${r}</span>
        <span class="axis-label bottom" title=${s}>${s}</span>
        ${je`<svg viewBox="0 0 220 45" preserveAspectRatio="none">
          <path class="line" d=${n.path}></path>
        </svg>`}
      </div>
    `;
  }
  getChartPoints(t) {
    const e = [...this.points], n = yi(t);
    return n !== null && e[e.length - 1]?.value !== n && e.push({
      time: Date.now(),
      value: n
    }), Yt(e, Ft);
  }
  getCurrentDisplay(t) {
    const e = t && w(t.state) ? g(t.state) : "-", n = this.graph?.unit || g(t?.attributes?.unit_of_measurement) || "", s = n ? `${e} ${n}` : e;
    return { value: e, unit: n, full: s };
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
wt.styles = x`
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
      height: 45px;
      min-height: 45px;
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
    }

    .axis-label.bottom {
      bottom: 0;
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
let P = wt;
dt([
  _({ attribute: !1 })
], P.prototype, "graph");
dt([
  _({ attribute: !1 })
], P.prototype, "hass");
dt([
  ht()
], P.prototype, "points");
dt([
  ht()
], P.prototype, "isLoading");
const Kt = (i) => {
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
}, fi = (i, t) => i.period === "today" ? `${i.entity}|${i.period}|${t.historyStart}` : `${i.entity}|${i.period}|${i.hoursToShow}`, gi = (i, t) => {
  const e = new Date(t).toISOString(), n = encodeURIComponent(i);
  return `history/period/${e}?filter_entity_id=${n}&significant_changes_only=0&no_attributes`;
}, mi = (i, t) => {
  const e = _i(i);
  return (e.find((s) => s.some((r) => r.entity_id === t)) ?? e[0] ?? []).map((s, r) => {
    const o = pe(s.state ?? s.s);
    return o === null ? null : {
      time: $i(s) ?? r,
      value: o
    };
  }).filter((s) => s !== null).sort((s, r) => s.time - r.time);
}, _i = (i) => Array.isArray(i) ? i.length === 0 ? [] : Array.isArray(i[0]) ? i : [i] : [], yi = (i) => pe(i?.state), $i = (i) => {
  const t = g(i.last_changed || i.last_updated);
  if (!t)
    return null;
  const e = Date.parse(t);
  return Number.isFinite(e) ? e : null;
}, pe = (i) => {
  const t = Number.parseFloat(g(i));
  return Number.isFinite(t) ? t : null;
}, Yt = (i, t) => {
  if (i.length <= t)
    return i;
  const e = i[0].time, n = i[i.length - 1].time;
  if (n === e)
    return Jt(i, t);
  const s = Math.max(1, Math.floor((t - 2) / 2)), r = (n - e) / s, o = [i[0]];
  for (let l = 0; l < s; l += 1) {
    const a = e + l * r, p = l === s - 1 ? n : a + r, u = i.filter((f) => f.time >= a && f.time <= p);
    if (u.length === 0)
      continue;
    const c = u.reduce((f, y) => y.value < f.value ? y : f, u[0]), m = u.reduce((f, y) => y.value > f.value ? y : f, u[0]);
    Zt(o, [c, m].sort((f, y) => f.time - y.time));
  }
  return Zt(o, [i[i.length - 1]]), o.length <= t ? o : Jt(o, t);
}, Jt = (i, t) => {
  const e = (i.length - 1) / (t - 1);
  return Array.from({ length: t }, (n, s) => i[Math.round(s * e)]);
}, Zt = (i, t) => {
  for (const e of t) {
    const n = i[i.length - 1];
    (!n || n.time !== e.time || n.value !== e.value) && i.push(e);
  }
}, vi = (i, t, e, n) => {
  if (i.length === 0)
    return;
  const s = n?.domainStart ?? i[0].time, r = n?.domainEnd ?? i[i.length - 1].time, o = i.filter((m) => m.time >= s && m.time <= r);
  if (o.length === 0)
    return;
  const l = o.map((m) => m.value), a = Math.min(...l), p = Math.max(...l), u = 4, c = e - u * 2;
  if (o.length === 1 || s === r) {
    const m = u + c / 2, f = s === r ? t : (o[0].time - s) / (r - s) * t, y = Math.max(0, f - 2), ut = Math.min(t, f + 2);
    return {
      path: `M ${M(y)} ${M(m)} L ${M(ut)} ${M(m)}`,
      min: a,
      max: p
    };
  }
  return {
    path: o.map((m, f) => {
      const y = m.value, ut = (m.time - s) / (r - s) * t, ve = p === a ? 0.5 : (y - a) / (p - a), be = u + (1 - ve) * c;
      return `${f === 0 ? "M" : "L"} ${M(ut)} ${M(be)}`;
    }).join(" "),
    min: a,
    max: p
  };
}, M = (i) => i.toFixed(2).replace(/\.?0+$/, ""), Xt = (i) => {
  const t = Math.abs(i), e = t >= 100 ? 0 : t >= 1 ? 1 : 2;
  return i.toFixed(e).replace(/\.?0+$/, "");
};
v(di, P);
var bi = Object.defineProperty, de = (i, t, e, n) => {
  for (var s = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (s = o(t, e, s) || s);
  return s && bi(t, e, s), s;
};
const wi = "tablet-info-card-header", xt = class xt extends $ {
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
xt.styles = x`
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
let q = xt;
de([
  _({ type: String })
], q.prototype, "icon");
de([
  _({ type: String })
], q.prototype, "title");
v(wi, q);
var xi = Object.defineProperty, Ai = (i, t, e, n) => {
  for (var s = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (s = o(t, e, s) || s);
  return s && xi(t, e, s), s;
};
const Ei = "tablet-info-card-row", At = class At extends $ {
  render() {
    if (!this.row)
      return h;
    const t = this.isClickable;
    return d`
      <div
        class=${mt({ row: !0, button: t, warn: this.row.warn })}
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
At.styles = x`
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
let nt = At;
Ai([
  _({ attribute: !1 })
], nt.prototype, "row");
v(Ei, nt);
var Si = Object.defineProperty, ki = (i, t, e, n) => {
  for (var s = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (s = o(t, e, s) || s);
  return s && Si(t, e, s), s;
};
const Ci = "tablet-info-card-rows", Et = class Et extends $ {
  constructor() {
    super(...arguments), this.rows = [];
  }
  render() {
    return d`
      <div class="rows">
        ${this.rows.length > 0 ? this.rows.map((t, e) => d`<tablet-info-card-row .row=${t} data-index=${e}></tablet-info-card-row>`) : h}
      </div>
    `;
  }
};
Et.styles = x`
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
let rt = Et;
ki([
  _({ attribute: !1 })
], rt.prototype, "rows");
v(Ci, rt);
var Ti = Object.defineProperty, ue = (i, t, e, n) => {
  for (var s = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (s = o(t, e, s) || s);
  return s && Ti(t, e, s), s;
};
const Pi = "tablet-info-card-body", St = class St extends $ {
  render() {
    if (!this.config)
      return h;
    const t = Bt(this.config, this.hass);
    return d`
      <ha-card style=${Xe(Qe(this.config, t))}>
        <div
          class=${mt({
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
          <tablet-info-card-header .icon=${t.icon} .title=${t.title}></tablet-info-card-header>
          ${t.rows.length > 0 ? d`<tablet-info-card-rows .rows=${t.rows}></tablet-info-card-rows>` : h}
          ${t.graph ? d`<tablet-info-card-graph
                class=${mt({ compact: t.rows.length === 0 })}
                .graph=${t.graph}
                .hass=${this.hass}
              ></tablet-info-card-graph>` : h}
        </div>
      </ha-card>
    `;
  }
  handleCardTap() {
    if (!this.config)
      return;
    const t = Bt(this.config, this.hass), e = this.config.entity || t.graph?.entity, n = this.config.tap_action || (t.navigationPath ? { action: "navigate", navigation_path: t.navigationPath } : e ? { action: "more-info" } : null);
    n && gt(this, {
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
    const e = t.detail.row, n = e.tap_action || (e.entity ? { action: "more-info" } : null);
    n && this.fireRowAction(e, n);
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
  fireRowAction(t, e) {
    gt(this, {
      config: {
        entity: t.entity || this.config?.entity,
        tap_action: e
      },
      action: "tap"
    });
  }
};
St.styles = x`
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

    .card.has-graph:not(.has-rows) {
      gap: 2px;
    }

    .card.has-graph.has-rows {
      grid-template-rows: min-content min-content 1fr;
    }
  `;
let F = St;
ue([
  _({ attribute: !1 })
], F.prototype, "config");
ue([
  _({ attribute: !1 })
], F.prototype, "hass");
v(Pi, F);
const Q = x`
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
`, fe = x`
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 12px;
  }
`, Ni = "tablet-info-card-editor-update", R = (i, t) => {
  i.dispatchEvent(
    new CustomEvent(Ni, {
      bubbles: !0,
      composed: !0,
      detail: { patch: t }
    })
  );
};
var Mi = Object.defineProperty, zi = (i, t, e, n) => {
  for (var s = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (s = o(t, e, s) || s);
  return s && Mi(t, e, s), s;
};
const Oi = "tablet-info-card-editor-source", kt = class kt extends $ {
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
    R(this, { source: e });
  }
};
kt.styles = Q;
let ot = kt;
zi([
  _({ type: String })
], ot.prototype, "source");
v(Oi, ot);
var Ui = Object.defineProperty, Ri = (i, t, e, n) => {
  for (var s = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (s = o(t, e, s) || s);
  return s && Ui(t, e, s), s;
};
const Di = "tablet-info-card-layout-fields", Ct = class Ct extends $ {
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
            .value=${this.asNumberText(this.config.height, H.height)}
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
            .value=${this.asNumberText(this.config.title_font_size, H.title_font_size)}
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
            .value=${this.asNumberText(this.config.row_font_size, H.row_font_size)}
            @change=${this.handleNumberInput("row_font_size")}
          />
        </label>
        <label>
          <span>Graph value font size</span>
          <input
            type="number"
            min="10"
            max="32"
            step="1"
            .value=${this.asNumberText(this.config.graph_value_font_size, H.graph_value_font_size)}
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
  getStringValue(t) {
    const e = t.target.value.trim();
    return e.length > 0 ? e : void 0;
  }
  asNumberText(t, e) {
    const n = t ?? e;
    return typeof n == "number" ? String(n) : g(n).replace(/px$/i, "");
  }
};
Ct.styles = [Q, fe];
let at = Ct;
Ri([
  _({ attribute: !1 })
], at.prototype, "config");
v(Di, at);
var Hi = Object.defineProperty, ji = (i, t, e, n) => {
  for (var s = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (s = o(t, e, s) || s);
  return s && Hi(t, e, s), s;
};
const Li = "tablet-info-card-manual-fields", Tt = class Tt extends $ {
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
          <input type="checkbox" .checked=${O(this.config.warn)} @change=${this.handleWarnToggle} />
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
Tt.styles = [Q, fe];
let lt = Tt;
ji([
  _({ attribute: !1 })
], lt.prototype, "config");
v(Li, lt);
const Vi = (i) => Object.keys(i?.states ?? {}).sort((t, e) => t.localeCompare(e)), ge = (i, t) => {
  const e = g(i?.states[t]?.attributes?.friendly_name);
  return e ? `${e} (${t})` : t;
};
var Ii = Object.defineProperty, me = (i, t, e, n) => {
  for (var s = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (s = o(t, e, s) || s);
  return s && Ii(t, e, s), s;
};
const Gi = "tablet-info-card-manual-entity-picker", Pt = class Pt extends $ {
  render() {
    const t = Vi(this.hass);
    return d`
      <label>
        <span>Main entity</span>
        <input list="tablet-info-card-entities" .value=${this.entity ?? ""} @change=${this.handleChange} />
      </label>
      <datalist id="tablet-info-card-entities">
        ${t.map((e) => d`<option value=${e}>${ge(this.hass, e)}</option>`)}
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
Pt.styles = Q;
let K = Pt;
me([
  _({ attribute: !1 })
], K.prototype, "hass");
me([
  _({ type: String })
], K.prototype, "entity");
v(Gi, K);
var Wi = Object.defineProperty, _e = (i, t, e, n) => {
  for (var s = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (s = o(t, e, s) || s);
  return s && Wi(t, e, s), s;
};
const Bi = "tablet-info-card-template-entity-picker", Nt = class Nt extends $ {
  render() {
    const t = this.getTemplateEntityOptions(), e = _t(this.entity ? this.hass?.states[this.entity] : void 0);
    return d`
      <label>
        <span>Template entity</span>
        <select .value=${this.entity ?? ""} @change=${this.handleChange}>
          <option value="">Select UI template entity</option>
          ${t.map((n) => d`<option value=${n}>${ge(this.hass, n)}</option>`)}
        </select>
      </label>
      ${this.entity && !e ? d`<p class="hint">
            Current entity is kept, but it is missing the template marker attribute
            <code>ui_element_type: tablet_info_card</code>.
          </p>` : h}
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
Nt.styles = Q;
let Y = Nt;
_e([
  _({ attribute: !1 })
], Y.prototype, "hass");
_e([
  _({ type: String })
], Y.prototype, "entity");
v(Bi, Y);
var qi = Object.defineProperty, ye = (i, t, e, n) => {
  for (var s = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (s = o(t, e, s) || s);
  return s && qi(t, e, s), s;
};
const Fi = "tablet-info-card-editor", Mt = class Mt extends $ {
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
Mt.styles = x`
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
let J = Mt;
ye([
  ht()
], J.prototype, "config");
ye([
  _({ attribute: !1 })
], J.prototype, "hass");
v(Fi, J);
var Ki = Object.defineProperty, $e = (i, t, e, n) => {
  for (var s = void 0, r = i.length - 1, o; r >= 0; r--)
    (o = i[r]) && (s = o(t, e, s) || s);
  return s && Ki(t, e, s), s;
};
const zt = class zt extends $ {
  setConfig(t) {
    this.config = {
      ...H,
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
    return this.config ? d`<tablet-info-card-body .config=${this.config} .hass=${this.hass}></tablet-info-card-body>` : h;
  }
};
zt.styles = x`
    :host {
      display: block;
    }
  `;
let Z = zt;
$e([
  ht()
], Z.prototype, "config");
$e([
  _({ attribute: !1 })
], Z.prototype, "hass");
v(j, Z);
window.customCards = window.customCards || [];
window.customCards.some((i) => i.type === j) || window.customCards.push({
  type: j,
  name: "Tablet Info Card",
  preview: !0,
  description: "Compact status and navigation card with up to three detail rows and an optional graph.",
  documentationURL: "https://github.com/petosiso/tablet-info-card",
  getEntitySuggestion: (i, t) => {
    const e = i.states[t];
    return _t(e) ? {
      config: {
        type: `custom:${j}`,
        source: "template_entity",
        entity: t
      }
    } : null;
  }
});
console.info(
  `%c ${j} %c ${we} `,
  "color: white; background: #18bcf2; font-weight: 700;",
  "color: #18bcf2; background: transparent; font-weight: 700;"
);
