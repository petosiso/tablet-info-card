const T = "tablet-info-card", Rt = "0.3.0", Nt = {
  background_ok: "#202226",
  background_nok: "#202226",
  text_ok: "#18bcf2",
  text_nok: "#18bcf2",
  text_highlight: "#ff7b22",
  icon_size: "30px",
  icon_col_width: "32px",
  row_indent: "10px",
  height: "118px",
  border_radius: "16px"
}, u = (i) => i != null && i !== "", R = (i) => i === !0 || i === "true" || i === "True" || i === "on" || i === "yes" || i === 1 || i === "1", $ = (i) => u(i) ? String(i).replace(/\s+/g, " ").trim() : "", Ht = (i) => {
  const t = $(i);
  return t.length > 0 ? t : null;
}, jt = (i, t) => {
  if (!i)
    return "";
  const e = Array.isArray(i.state) || typeof i.state == "object" ? JSON.stringify(i.state) : i.state, s = t ?? (i.attributes?.unit_of_measurement ? String(i.attributes.unit_of_measurement) : "");
  return s ? `${e} ${s}` : e;
};
const I = globalThis, Q = I.ShadowRoot && (I.ShadyCSS === void 0 || I.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, X = /* @__PURE__ */ Symbol(), at = /* @__PURE__ */ new WeakMap();
let bt = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== X) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (Q && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = at.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && at.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const zt = (i) => new bt(typeof i == "string" ? i : i + "", void 0, X), B = (i, ...t) => {
  const e = i.length === 1 ? i[0] : t.reduce((s, r, n) => s + ((o) => {
    if (o._$cssResult$ === !0) return o.cssText;
    if (typeof o == "number") return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r) + i[n + 1], i[0]);
  return new bt(e, i, X);
}, Dt = (i, t) => {
  if (Q) i.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), r = I.litNonce;
    r !== void 0 && s.setAttribute("nonce", r), s.textContent = e.cssText, i.appendChild(s);
  }
}, ct = Q ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return zt(e);
})(i) : i;
const { is: Lt, defineProperty: Bt, getOwnPropertyDescriptor: Vt, getOwnPropertyNames: Wt, getOwnPropertySymbols: qt, getPrototypeOf: It } = Object, b = globalThis, ht = b.trustedTypes, Gt = ht ? ht.emptyScript : "", Kt = b.reactiveElementPolyfillSupport, O = (i, t) => i, G = { toAttribute(i, t) {
  switch (t) {
    case Boolean:
      i = i ? Gt : null;
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
} }, tt = (i, t) => !Lt(i, t), lt = { attribute: !0, type: String, converter: G, reflect: !1, useDefault: !1, hasChanged: tt };
Symbol.metadata ?? (Symbol.metadata = /* @__PURE__ */ Symbol("metadata")), b.litPropertyMetadata ?? (b.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let C = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = lt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = /* @__PURE__ */ Symbol(), r = this.getPropertyDescriptor(t, s, e);
      r !== void 0 && Bt(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: r, set: n } = Vt(this.prototype, t) ?? { get() {
      return this[e];
    }, set(o) {
      this[e] = o;
    } };
    return { get: r, set(o) {
      const c = r?.call(this);
      n?.call(this, o), this.requestUpdate(t, c, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? lt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(O("elementProperties"))) return;
    const t = It(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(O("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(O("properties"))) {
      const e = this.properties, s = [...Wt(e), ...qt(e)];
      for (const r of s) this.createProperty(r, e[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, r] of e) this.elementProperties.set(s, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const r = this._$Eu(e, s);
      r !== void 0 && this._$Eh.set(r, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const r of s) e.unshift(ct(r));
    } else t !== void 0 && e.push(ct(t));
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
    return Dt(t, this.constructor.elementStyles), t;
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
    const s = this.constructor.elementProperties.get(t), r = this.constructor._$Eu(t, s);
    if (r !== void 0 && s.reflect === !0) {
      const n = (s.converter?.toAttribute !== void 0 ? s.converter : G).toAttribute(e, s.type);
      this._$Em = t, n == null ? this.removeAttribute(r) : this.setAttribute(r, n), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const s = this.constructor, r = s._$Eh.get(t);
    if (r !== void 0 && this._$Em !== r) {
      const n = s.getPropertyOptions(r), o = typeof n.converter == "function" ? { fromAttribute: n.converter } : n.converter?.fromAttribute !== void 0 ? n.converter : G;
      this._$Em = r;
      const c = o.fromAttribute(e, n.type);
      this[r] = c ?? this._$Ej?.get(r) ?? c, this._$Em = null;
    }
  }
  requestUpdate(t, e, s, r = !1, n) {
    if (t !== void 0) {
      const o = this.constructor;
      if (r === !1 && (n = this[t]), s ?? (s = o.getPropertyOptions(t)), !((s.hasChanged ?? tt)(n, e) || s.useDefault && s.reflect && n === this._$Ej?.get(t) && !this.hasAttribute(o._$Eu(t, s)))) return;
      this.C(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: s, reflect: r, wrapped: n }, o) {
    s && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, o ?? e ?? this[t]), n !== !0 || o !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (e = void 0), this._$AL.set(t, e)), r === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
        for (const [r, n] of this._$Ep) this[r] = n;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [r, n] of s) {
        const { wrapped: o } = n, c = this[r];
        o !== !0 || this._$AL.has(r) || c === void 0 || this.C(r, void 0, n, c);
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
C.elementStyles = [], C.shadowRootOptions = { mode: "open" }, C[O("elementProperties")] = /* @__PURE__ */ new Map(), C[O("finalized")] = /* @__PURE__ */ new Map(), Kt?.({ ReactiveElement: C }), (b.reactiveElementVersions ?? (b.reactiveElementVersions = [])).push("2.1.2");
const U = globalThis, dt = (i) => i, K = U.trustedTypes, pt = K ? K.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, vt = "$lit$", y = `lit$${Math.random().toFixed(9).slice(2)}$`, wt = "?" + y, Ft = `<${wt}>`, S = document, N = () => S.createComment(""), H = (i) => i === null || typeof i != "object" && typeof i != "function", et = Array.isArray, Jt = (i) => et(i) || typeof i?.[Symbol.iterator] == "function", Y = `[ 	
\f\r]`, k = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ut = /-->/g, ft = />/g, A = RegExp(`>|${Y}(?:([^\\s"'>=/]+)(${Y}*=${Y}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), $t = /'/g, _t = /"/g, At = /^(?:script|style|textarea|title)$/i, Zt = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), E = Zt(1), v = /* @__PURE__ */ Symbol.for("lit-noChange"), l = /* @__PURE__ */ Symbol.for("lit-nothing"), gt = /* @__PURE__ */ new WeakMap(), x = S.createTreeWalker(S, 129);
function xt(i, t) {
  if (!et(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return pt !== void 0 ? pt.createHTML(t) : t;
}
const Yt = (i, t) => {
  const e = i.length - 1, s = [];
  let r, n = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = k;
  for (let c = 0; c < e; c++) {
    const a = i[c];
    let d, p, h = -1, f = 0;
    for (; f < a.length && (o.lastIndex = f, p = o.exec(a), p !== null); ) f = o.lastIndex, o === k ? p[1] === "!--" ? o = ut : p[1] !== void 0 ? o = ft : p[2] !== void 0 ? (At.test(p[2]) && (r = RegExp("</" + p[2], "g")), o = A) : p[3] !== void 0 && (o = A) : o === A ? p[0] === ">" ? (o = r ?? k, h = -1) : p[1] === void 0 ? h = -2 : (h = o.lastIndex - p[2].length, d = p[1], o = p[3] === void 0 ? A : p[3] === '"' ? _t : $t) : o === _t || o === $t ? o = A : o === ut || o === ft ? o = k : (o = A, r = void 0);
    const g = o === A && i[c + 1].startsWith("/>") ? " " : "";
    n += o === k ? a + Ft : h >= 0 ? (s.push(d), a.slice(0, h) + vt + a.slice(h) + y + g) : a + y + (h === -2 ? c : g);
  }
  return [xt(i, n + (i[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class j {
  constructor({ strings: t, _$litType$: e }, s) {
    let r;
    this.parts = [];
    let n = 0, o = 0;
    const c = t.length - 1, a = this.parts, [d, p] = Yt(t, e);
    if (this.el = j.createElement(d, s), x.currentNode = this.el.content, e === 2 || e === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (r = x.nextNode()) !== null && a.length < c; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) for (const h of r.getAttributeNames()) if (h.endsWith(vt)) {
          const f = p[o++], g = r.getAttribute(h).split(y), q = /([.?@])?(.*)/.exec(f);
          a.push({ type: 1, index: n, name: q[2], strings: g, ctor: q[1] === "." ? Xt : q[1] === "?" ? te : q[1] === "@" ? ee : Z }), r.removeAttribute(h);
        } else h.startsWith(y) && (a.push({ type: 6, index: n }), r.removeAttribute(h));
        if (At.test(r.tagName)) {
          const h = r.textContent.split(y), f = h.length - 1;
          if (f > 0) {
            r.textContent = K ? K.emptyScript : "";
            for (let g = 0; g < f; g++) r.append(h[g], N()), x.nextNode(), a.push({ type: 2, index: ++n });
            r.append(h[f], N());
          }
        }
      } else if (r.nodeType === 8) if (r.data === wt) a.push({ type: 2, index: n });
      else {
        let h = -1;
        for (; (h = r.data.indexOf(y, h + 1)) !== -1; ) a.push({ type: 7, index: n }), h += y.length - 1;
      }
      n++;
    }
  }
  static createElement(t, e) {
    const s = S.createElement("template");
    return s.innerHTML = t, s;
  }
}
function P(i, t, e = i, s) {
  if (t === v) return t;
  let r = s !== void 0 ? e._$Co?.[s] : e._$Cl;
  const n = H(t) ? void 0 : t._$litDirective$;
  return r?.constructor !== n && (r?._$AO?.(!1), n === void 0 ? r = void 0 : (r = new n(i), r._$AT(i, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = r : e._$Cl = r), r !== void 0 && (t = P(i, r._$AS(i, t.values), r, s)), t;
}
class Qt {
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
    const { el: { content: e }, parts: s } = this._$AD, r = (t?.creationScope ?? S).importNode(e, !0);
    x.currentNode = r;
    let n = x.nextNode(), o = 0, c = 0, a = s[0];
    for (; a !== void 0; ) {
      if (o === a.index) {
        let d;
        a.type === 2 ? d = new V(n, n.nextSibling, this, t) : a.type === 1 ? d = new a.ctor(n, a.name, a.strings, this, t) : a.type === 6 && (d = new ie(n, this, t)), this._$AV.push(d), a = s[++c];
      }
      o !== a?.index && (n = x.nextNode(), o++);
    }
    return x.currentNode = S, r;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class V {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, s, r) {
    this.type = 2, this._$AH = l, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = r, this._$Cv = r?.isConnected ?? !0;
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
    t = P(this, t, e), H(t) ? t === l || t == null || t === "" ? (this._$AH !== l && this._$AR(), this._$AH = l) : t !== this._$AH && t !== v && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Jt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== l && H(this._$AH) ? this._$AA.nextSibling.data = t : this.T(S.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: s } = t, r = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = j.createElement(xt(s.h, s.h[0]), this.options)), s);
    if (this._$AH?._$AD === r) this._$AH.p(e);
    else {
      const n = new Qt(r, this), o = n.u(this.options);
      n.p(e), this.T(o), this._$AH = n;
    }
  }
  _$AC(t) {
    let e = gt.get(t.strings);
    return e === void 0 && gt.set(t.strings, e = new j(t)), e;
  }
  k(t) {
    et(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, r = 0;
    for (const n of t) r === e.length ? e.push(s = new V(this.O(N()), this.O(N()), this, this.options)) : s = e[r], s._$AI(n), r++;
    r < e.length && (this._$AR(s && s._$AB.nextSibling, r), e.length = r);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const s = dt(t).nextSibling;
      dt(t).remove(), t = s;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class Z {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, r, n) {
    this.type = 1, this._$AH = l, this._$AN = void 0, this.element = t, this.name = e, this._$AM = r, this.options = n, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = l;
  }
  _$AI(t, e = this, s, r) {
    const n = this.strings;
    let o = !1;
    if (n === void 0) t = P(this, t, e, 0), o = !H(t) || t !== this._$AH && t !== v, o && (this._$AH = t);
    else {
      const c = t;
      let a, d;
      for (t = n[0], a = 0; a < n.length - 1; a++) d = P(this, c[s + a], e, a), d === v && (d = this._$AH[a]), o || (o = !H(d) || d !== this._$AH[a]), d === l ? t = l : t !== l && (t += (d ?? "") + n[a + 1]), this._$AH[a] = d;
    }
    o && !r && this.j(t);
  }
  j(t) {
    t === l ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Xt extends Z {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === l ? void 0 : t;
  }
}
class te extends Z {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== l);
  }
}
class ee extends Z {
  constructor(t, e, s, r, n) {
    super(t, e, s, r, n), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = P(this, t, e, 0) ?? l) === v) return;
    const s = this._$AH, r = t === l && s !== l || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, n = t !== l && (s === l || r);
    r && this.element.removeEventListener(this.name, this, s), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class ie {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    P(this, t);
  }
}
const se = U.litHtmlPolyfillSupport;
se?.(j, V), (U.litHtmlVersions ?? (U.litHtmlVersions = [])).push("3.3.3");
const re = (i, t, e) => {
  const s = e?.renderBefore ?? t;
  let r = s._$litPart$;
  if (r === void 0) {
    const n = e?.renderBefore ?? null;
    s._$litPart$ = r = new V(t.insertBefore(N(), n), n, void 0, e ?? {});
  }
  return r._$AI(i), r;
};
const M = globalThis;
let _ = class extends C {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = re(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return v;
  }
};
_._$litElement$ = !0, _.finalized = !0, M.litElementHydrateSupport?.({ LitElement: _ });
const ne = M.litElementPolyfillSupport;
ne?.({ LitElement: _ });
(M.litElementVersions ?? (M.litElementVersions = [])).push("4.2.2");
const oe = { attribute: !0, type: String, converter: G, reflect: !1, hasChanged: tt }, ae = (i = oe, t, e) => {
  const { kind: s, metadata: r } = e;
  let n = globalThis.litPropertyMetadata.get(r);
  if (n === void 0 && globalThis.litPropertyMetadata.set(r, n = /* @__PURE__ */ new Map()), s === "setter" && ((i = Object.create(i)).wrapped = !0), n.set(e.name, i), s === "accessor") {
    const { name: o } = e;
    return { set(c) {
      const a = t.get.call(this);
      t.set.call(this, c), this.requestUpdate(o, a, i, !0, c);
    }, init(c) {
      return c !== void 0 && this.C(o, void 0, i, c), c;
    } };
  }
  if (s === "setter") {
    const { name: o } = e;
    return function(c) {
      const a = this[o];
      t.call(this, c), this.requestUpdate(o, a, i, !0, c);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function w(i) {
  return (t, e) => typeof e == "object" ? ae(i, t, e) : ((s, r, n) => {
    const o = r.hasOwnProperty(n);
    return r.constructor.createProperty(n, s), o ? Object.getOwnPropertyDescriptor(r, n) : void 0;
  })(i, t, e);
}
function ce(i) {
  return w({ ...i, state: !0, attribute: !1 });
}
const W = (i, t) => {
  customElements.get(i) || customElements.define(i, t);
};
const Et = { ATTRIBUTE: 1 }, St = (i) => (...t) => ({ _$litDirective$: i, values: t });
let Ct = class {
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
const Pt = St(class extends Ct {
  constructor(i) {
    if (super(i), i.type !== Et.ATTRIBUTE || i.name !== "class" || i.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
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
      const r = !!t[s];
      r === this.st.has(s) || this.nt?.has(s) || (r ? (e.add(s), this.st.add(s)) : (e.remove(s), this.st.delete(s)));
    }
    return v;
  }
});
const kt = "important", he = " !" + kt, le = St(class extends Ct {
  constructor(i) {
    if (super(i), i.type !== Et.ATTRIBUTE || i.name !== "style" || i.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
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
      const r = t[s];
      if (r != null) {
        this.ft.add(s);
        const n = typeof r == "string" && r.endsWith(he);
        s.includes("-") || n ? e.setProperty(s, n ? r.slice(0, -11) : r, n ? kt : "") : e[s] = r;
      }
    }
    return v;
  }
}), mt = (i, t) => {
  i.dispatchEvent(
    new CustomEvent("hass-action", {
      bubbles: !0,
      composed: !0,
      detail: t
    })
  );
}, m = (i, t) => {
  const e = String(i ?? t).trim();
  return e.length > 0 ? e.replace(/[{};]/g, "") : t;
}, de = (i, t) => ({
  "--tic-background": m(t.background, "#202226"),
  "--tic-main-color": m(t.mainColor, "#18bcf2"),
  "--tic-highlight-color": m(i.text_highlight, "#ff7b22"),
  "--tic-height": m(i.height, "118px"),
  "--tic-border-radius": m(i.border_radius, "16px"),
  "--tic-icon-size": m(i.icon_size, "30px"),
  "--tic-icon-col-width": m(i.icon_col_width, "32px"),
  "--tic-row-indent": m(i.row_indent, "10px")
}), yt = (i, t) => {
  const e = Tt(t, i.entity), s = e?.attributes ?? {}, r = u(i.warn) ? R(i.warn) : R(s.is_warn), n = $(i.navigation_path || s.navigation_path) || void 0, o = ue(i, t, s, r);
  return {
    entity: e,
    title: pe(i, e, s),
    icon: $(i.icon || s.icon) || "mdi:flash",
    navigationPath: n,
    isWarn: r,
    mainColor: r ? i.text_nok : i.text_ok,
    background: r ? i.background_nok : i.background_ok,
    rows: o,
    isClickable: !!(i.tap_action || n || i.entity)
  };
}, Tt = (i, t) => t && i?.states ? i.states[t] : void 0, pe = (i, t, e) => $(i.name || e.name || e.friendly_name || t?.attributes?.friendly_name || i.entity || ""), ue = (i, t, e, s) => Array.isArray(i.rows) && i.rows.length > 0 ? i.rows.slice(0, 3).map((r) => fe(r, t, s)).filter((r) => u(r.text)) : [1, 2, 3].map((r) => ({
  entity: Ht(e[`row_${r}_entity`]),
  text: $(e[`row_${r}_text`]),
  warn: R(e[`row_${r}_warn`])
})).filter((r) => u(r.text)), fe = (i, t, e) => {
  const s = Tt(t, i.entity), r = u(i.text) ? $(i.text) : $e(s, i);
  return {
    entity: i.entity ?? null,
    text: r,
    warn: u(i.warn) ? R(i.warn) : e && R(i.inherit_warn),
    tap_action: i.tap_action
  };
}, $e = (i, t) => {
  if (!i)
    return "";
  const e = t.name || i.attributes?.friendly_name || t.entity || "", s = t.attribute ? i.attributes?.[t.attribute] : jt(i, t.unit), r = Array.isArray(s) || typeof s == "object" ? JSON.stringify(s) : $(s);
  return u(r) ? t.show_name === !1 ? r : `${$(e)}: ${r}` : $(e);
};
var _e = Object.defineProperty, Ot = (i, t, e, s) => {
  for (var r = void 0, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (r = o(t, e, r) || r);
  return r && _e(t, e, r), r;
};
const ge = "tablet-info-card-header", it = class it extends _ {
  constructor() {
    super(...arguments), this.icon = "mdi:flash", this.title = "";
  }
  render() {
    return E`
      <div class="header">
        <div class="icon-cell">
          <ha-icon .icon=${this.icon}></ha-icon>
        </div>
        <div class="title" title=${this.title}>${this.title}</div>
      </div>
    `;
  }
};
it.styles = B`
    :host {
      display: block;
      min-width: 0;
    }

    .header {
      display: grid;
      grid-template-columns: var(--tic-icon-col-width, 32px) 1fr;
      column-gap: 8px;
      align-items: center;
      min-width: 0;
    }

    .icon-cell {
      width: var(--tic-icon-col-width, 32px);
      height: var(--tic-icon-size, 30px);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    ha-icon {
      --mdc-icon-size: var(--tic-icon-size, 30px);
      --iron-icon-width: var(--tic-icon-size, 30px);
      --iron-icon-height: var(--tic-icon-size, 30px);
      color: var(--tic-main-color, #18bcf2);
      filter: drop-shadow(0 0 5px color-mix(in srgb, var(--tic-main-color, #18bcf2) 42%, transparent));
    }

    .title {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      font-weight: 700;
      line-height: 1.15;
      letter-spacing: 0;
      color: var(--tic-main-color, #18bcf2);
    }
  `;
let z = it;
Ot([
  w({ type: String })
], z.prototype, "icon");
Ot([
  w({ type: String })
], z.prototype, "title");
W(ge, z);
var me = Object.defineProperty, ye = (i, t, e, s) => {
  for (var r = void 0, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (r = o(t, e, r) || r);
  return r && me(t, e, r), r;
};
const be = "tablet-info-card-row", st = class st extends _ {
  render() {
    if (!this.row)
      return l;
    const t = this.isClickable;
    return E`
      <div
        class=${Pt({ row: !0, button: t, warn: this.row.warn })}
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
st.styles = B`
    :host {
      display: block;
      min-width: 0;
    }

    .row {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 11px;
      line-height: 1.15;
      color: var(--tic-main-color, #18bcf2);
    }

    .row.button {
      cursor: pointer;
    }

    .row.warn {
      color: var(--tic-highlight-color, #ff7b22);
      font-weight: 700;
    }
  `;
let F = st;
ye([
  w({ attribute: !1 })
], F.prototype, "row");
W(be, F);
var ve = Object.defineProperty, we = (i, t, e, s) => {
  for (var r = void 0, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (r = o(t, e, r) || r);
  return r && ve(t, e, r), r;
};
const Ae = "tablet-info-card-rows", rt = class rt extends _ {
  constructor() {
    super(...arguments), this.rows = [];
  }
  render() {
    return E`
      <div class="rows">
        ${this.rows.length > 0 ? this.rows.map((t, e) => E`<tablet-info-card-row .row=${t} data-index=${e}></tablet-info-card-row>`) : E`<div class="empty">No rows configured</div>`}
      </div>
    `;
  }
};
rt.styles = B`
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
      font-size: 11px;
      line-height: 1.15;
      color: var(--tic-main-color, #18bcf2);
      opacity: 0.7;
    }
  `;
let J = rt;
we([
  w({ attribute: !1 })
], J.prototype, "rows");
W(Ae, J);
var xe = Object.defineProperty, Ut = (i, t, e, s) => {
  for (var r = void 0, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (r = o(t, e, r) || r);
  return r && xe(t, e, r), r;
};
const Ee = "tablet-info-card-body", nt = class nt extends _ {
  render() {
    if (!this.config)
      return null;
    const t = yt(this.config, this.hass);
    return E`
      <ha-card style=${le(de(this.config, t))}>
        <div
          class=${Pt({ card: !0, clickable: t.isClickable })}
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
    const t = yt(this.config, this.hass), e = this.config.tap_action || (t.navigationPath ? { action: "navigate", navigation_path: t.navigationPath } : this.config.entity ? { action: "more-info" } : null);
    e && mt(this, {
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
  fireRowAction(t, e) {
    mt(this, {
      config: {
        entity: t.entity || this.config?.entity,
        tap_action: e
      },
      action: "tap"
    });
  }
};
nt.styles = B`
    :host {
      display: block;
      font-family: var(--paper-font-body1_-_font-family, var(--primary-font-family, sans-serif));
    }

    ha-card {
      display: block;
      min-height: var(--tic-height, 118px);
      border-radius: var(--tic-border-radius, 16px);
      background: var(--tic-background, #202226);
      border: 1px solid color-mix(in srgb, var(--tic-main-color, #18bcf2) 75%, transparent);
      box-shadow:
        0 0 0 1px color-mix(in srgb, var(--tic-main-color, #18bcf2) 18%, transparent) inset,
        0 0 12px color-mix(in srgb, var(--tic-main-color, #18bcf2) 55%, transparent);
      overflow: hidden;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    }

    .card {
      min-height: var(--tic-height, 118px);
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
let D = nt;
Ut([
  w({ attribute: !1 })
], D.prototype, "config");
Ut([
  w({ attribute: !1 })
], D.prototype, "hass");
W(Ee, D);
var Se = Object.defineProperty, Mt = (i, t, e, s) => {
  for (var r = void 0, n = i.length - 1, o; n >= 0; n--)
    (o = i[n]) && (r = o(t, e, r) || r);
  return r && Se(t, e, r), r;
};
const ot = class ot extends _ {
  setConfig(t) {
    this.config = {
      ...Nt,
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
      entity: "sensor.ui_element_example"
    };
  }
  static getConfigForm() {
    return {
      schema: [
        { name: "entity", selector: { entity: {} } },
        { name: "name", selector: { text: {} } },
        { name: "icon", selector: { icon: {} } },
        { name: "navigation_path", selector: { text: {} } },
        { name: "warn", selector: { boolean: {} } }
      ]
    };
  }
  render() {
    return this.config ? E`<tablet-info-card-body .config=${this.config} .hass=${this.hass}></tablet-info-card-body>` : l;
  }
};
ot.styles = B`
    :host {
      display: block;
    }
  `;
let L = ot;
Mt([
  ce()
], L.prototype, "config");
Mt([
  w({ attribute: !1 })
], L.prototype, "hass");
W(T, L);
window.customCards = window.customCards || [];
window.customCards.some((i) => i.type === T) || window.customCards.push({
  type: T,
  name: "Tablet Info Card",
  preview: !0,
  description: "Compact status and navigation card with up to three detail rows.",
  documentationURL: "https://github.com/petosiso/tablet-info-card",
  getEntitySuggestion: (i, t) => {
    const e = i.states[t]?.attributes ?? {};
    return u(e.navigation_path) || u(e.row_1_text) || u(e.row_2_text) || u(e.row_3_text) ? {
      config: {
        type: `custom:${T}`,
        entity: t
      }
    } : null;
  }
});
console.info(
  `%c ${T} %c ${Rt} `,
  "color: white; background: #18bcf2; font-weight: 700;",
  "color: #18bcf2; background: transparent; font-weight: 700;"
);
