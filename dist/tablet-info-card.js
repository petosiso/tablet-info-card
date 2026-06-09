var TT = Object.defineProperty;
var AT = (D, V, tt) => V in D ? TT(D, V, { enumerable: !0, configurable: !0, writable: !0, value: tt }) : D[V] = tt;
var v0 = (D, V, tt) => AT(D, typeof V != "symbol" ? V + "" : V, tt);
var Kv = { exports: {} }, S0 = {};
var B2;
function OT() {
  if (B2) return S0;
  B2 = 1;
  var D = /* @__PURE__ */ Symbol.for("react.transitional.element"), V = /* @__PURE__ */ Symbol.for("react.fragment");
  function tt(C, ut, zt) {
    var Lt = null;
    if (zt !== void 0 && (Lt = "" + zt), ut.key !== void 0 && (Lt = "" + ut.key), "key" in ut) {
      zt = {};
      for (var lt in ut)
        lt !== "key" && (zt[lt] = ut[lt]);
    } else zt = ut;
    return ut = zt.ref, {
      $$typeof: D,
      type: C,
      key: Lt,
      ref: ut !== void 0 ? ut : null,
      props: zt
    };
  }
  return S0.Fragment = V, S0.jsx = tt, S0.jsxs = tt, S0;
}
var b0 = {}, $v = { exports: {} }, Vt = {};
var j2;
function _T() {
  if (j2) return Vt;
  j2 = 1;
  var D = /* @__PURE__ */ Symbol.for("react.transitional.element"), V = /* @__PURE__ */ Symbol.for("react.portal"), tt = /* @__PURE__ */ Symbol.for("react.fragment"), C = /* @__PURE__ */ Symbol.for("react.strict_mode"), ut = /* @__PURE__ */ Symbol.for("react.profiler"), zt = /* @__PURE__ */ Symbol.for("react.consumer"), Lt = /* @__PURE__ */ Symbol.for("react.context"), lt = /* @__PURE__ */ Symbol.for("react.forward_ref"), it = /* @__PURE__ */ Symbol.for("react.suspense"), W = /* @__PURE__ */ Symbol.for("react.memo"), xt = /* @__PURE__ */ Symbol.for("react.lazy"), Q = /* @__PURE__ */ Symbol.for("react.activity"), N = Symbol.iterator;
  function ot(S) {
    return S === null || typeof S != "object" ? null : (S = N && S[N] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var Zt = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, De = Object.assign, re = {};
  function ae(S, B, I) {
    this.props = S, this.context = B, this.refs = re, this.updater = I || Zt;
  }
  ae.prototype.isReactComponent = {}, ae.prototype.setState = function(S, B) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, B, "setState");
  }, ae.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function Tl() {
  }
  Tl.prototype = ae.prototype;
  function xe(S, B, I) {
    this.props = S, this.context = B, this.refs = re, this.updater = I || Zt;
  }
  var Je = xe.prototype = new Tl();
  Je.constructor = xe, De(Je, ae.prototype), Je.isPureReactComponent = !0;
  var tl = Array.isArray;
  function ul() {
  }
  var Rt = { H: null, A: null, T: null, S: null }, Jt = Object.prototype.hasOwnProperty;
  function ze(S, B, I) {
    var F = I.ref;
    return {
      $$typeof: D,
      type: S,
      key: B,
      ref: F !== void 0 ? F : null,
      props: I
    };
  }
  function dt(S, B) {
    return ze(S.type, B, S.props);
  }
  function Be(S) {
    return typeof S == "object" && S !== null && S.$$typeof === D;
  }
  function gt(S) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(I) {
      return B[I];
    });
  }
  var qt = /\/+/g;
  function Qe(S, B) {
    return typeof S == "object" && S !== null && S.key != null ? gt("" + S.key) : B.toString(36);
  }
  function je(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(ul, ul) : (S.status = "pending", S.then(
          function(B) {
            S.status === "pending" && (S.status = "fulfilled", S.value = B);
          },
          function(B) {
            S.status === "pending" && (S.status = "rejected", S.reason = B);
          }
        )), S.status) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function R(S, B, I, F, bt) {
    var wt = typeof S;
    (wt === "undefined" || wt === "boolean") && (S = null);
    var At = !1;
    if (S === null) At = !0;
    else
      switch (wt) {
        case "bigint":
        case "string":
        case "number":
          At = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case D:
            case V:
              At = !0;
              break;
            case xt:
              return At = S._init, R(
                At(S._payload),
                B,
                I,
                F,
                bt
              );
          }
      }
    if (At)
      return bt = bt(S), At = F === "" ? "." + Qe(S, 0) : F, tl(bt) ? (I = "", At != null && (I = At.replace(qt, "$&/") + "/"), R(bt, B, I, "", function(qa) {
        return qa;
      })) : bt != null && (Be(bt) && (bt = dt(
        bt,
        I + (bt.key == null || S && S.key === bt.key ? "" : ("" + bt.key).replace(
          qt,
          "$&/"
        ) + "/") + At
      )), B.push(bt)), 1;
    At = 0;
    var Le = F === "" ? "." : F + ":";
    if (tl(S))
      for (var me = 0; me < S.length; me++)
        F = S[me], wt = Le + Qe(F, me), At += R(
          F,
          B,
          I,
          wt,
          bt
        );
    else if (me = ot(S), typeof me == "function")
      for (S = me.call(S), me = 0; !(F = S.next()).done; )
        F = F.value, wt = Le + Qe(F, me++), At += R(
          F,
          B,
          I,
          wt,
          bt
        );
    else if (wt === "object") {
      if (typeof S.then == "function")
        return R(
          je(S),
          B,
          I,
          F,
          bt
        );
      throw B = String(S), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return At;
  }
  function Z(S, B, I) {
    if (S == null) return S;
    var F = [], bt = 0;
    return R(S, F, "", "", function(wt) {
      return B.call(I, wt, bt++);
    }), F;
  }
  function et(S) {
    if (S._status === -1) {
      var B = S._result;
      B = B(), B.then(
        function(I) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = I);
        },
        function(I) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = I);
        }
      ), S._status === -1 && (S._status = 0, S._result = B);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var vt = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var B = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(B)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, _t = {
    map: Z,
    forEach: function(S, B, I) {
      Z(
        S,
        function() {
          B.apply(this, arguments);
        },
        I
      );
    },
    count: function(S) {
      var B = 0;
      return Z(S, function() {
        B++;
      }), B;
    },
    toArray: function(S) {
      return Z(S, function(B) {
        return B;
      }) || [];
    },
    only: function(S) {
      if (!Be(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return Vt.Activity = Q, Vt.Children = _t, Vt.Component = ae, Vt.Fragment = tt, Vt.Profiler = ut, Vt.PureComponent = xe, Vt.StrictMode = C, Vt.Suspense = it, Vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Rt, Vt.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return Rt.H.useMemoCache(S);
    }
  }, Vt.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, Vt.cacheSignal = function() {
    return null;
  }, Vt.cloneElement = function(S, B, I) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var F = De({}, S.props), bt = S.key;
    if (B != null)
      for (wt in B.key !== void 0 && (bt = "" + B.key), B)
        !Jt.call(B, wt) || wt === "key" || wt === "__self" || wt === "__source" || wt === "ref" && B.ref === void 0 || (F[wt] = B[wt]);
    var wt = arguments.length - 2;
    if (wt === 1) F.children = I;
    else if (1 < wt) {
      for (var At = Array(wt), Le = 0; Le < wt; Le++)
        At[Le] = arguments[Le + 2];
      F.children = At;
    }
    return ze(S.type, bt, F);
  }, Vt.createContext = function(S) {
    return S = {
      $$typeof: Lt,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: zt,
      _context: S
    }, S;
  }, Vt.createElement = function(S, B, I) {
    var F, bt = {}, wt = null;
    if (B != null)
      for (F in B.key !== void 0 && (wt = "" + B.key), B)
        Jt.call(B, F) && F !== "key" && F !== "__self" && F !== "__source" && (bt[F] = B[F]);
    var At = arguments.length - 2;
    if (At === 1) bt.children = I;
    else if (1 < At) {
      for (var Le = Array(At), me = 0; me < At; me++)
        Le[me] = arguments[me + 2];
      bt.children = Le;
    }
    if (S && S.defaultProps)
      for (F in At = S.defaultProps, At)
        bt[F] === void 0 && (bt[F] = At[F]);
    return ze(S, wt, bt);
  }, Vt.createRef = function() {
    return { current: null };
  }, Vt.forwardRef = function(S) {
    return { $$typeof: lt, render: S };
  }, Vt.isValidElement = Be, Vt.lazy = function(S) {
    return {
      $$typeof: xt,
      _payload: { _status: -1, _result: S },
      _init: et
    };
  }, Vt.memo = function(S, B) {
    return {
      $$typeof: W,
      type: S,
      compare: B === void 0 ? null : B
    };
  }, Vt.startTransition = function(S) {
    var B = Rt.T, I = {};
    Rt.T = I;
    try {
      var F = S(), bt = Rt.S;
      bt !== null && bt(I, F), typeof F == "object" && F !== null && typeof F.then == "function" && F.then(ul, vt);
    } catch (wt) {
      vt(wt);
    } finally {
      B !== null && I.types !== null && (B.types = I.types), Rt.T = B;
    }
  }, Vt.unstable_useCacheRefresh = function() {
    return Rt.H.useCacheRefresh();
  }, Vt.use = function(S) {
    return Rt.H.use(S);
  }, Vt.useActionState = function(S, B, I) {
    return Rt.H.useActionState(S, B, I);
  }, Vt.useCallback = function(S, B) {
    return Rt.H.useCallback(S, B);
  }, Vt.useContext = function(S) {
    return Rt.H.useContext(S);
  }, Vt.useDebugValue = function() {
  }, Vt.useDeferredValue = function(S, B) {
    return Rt.H.useDeferredValue(S, B);
  }, Vt.useEffect = function(S, B) {
    return Rt.H.useEffect(S, B);
  }, Vt.useEffectEvent = function(S) {
    return Rt.H.useEffectEvent(S);
  }, Vt.useId = function() {
    return Rt.H.useId();
  }, Vt.useImperativeHandle = function(S, B, I) {
    return Rt.H.useImperativeHandle(S, B, I);
  }, Vt.useInsertionEffect = function(S, B) {
    return Rt.H.useInsertionEffect(S, B);
  }, Vt.useLayoutEffect = function(S, B) {
    return Rt.H.useLayoutEffect(S, B);
  }, Vt.useMemo = function(S, B) {
    return Rt.H.useMemo(S, B);
  }, Vt.useOptimistic = function(S, B) {
    return Rt.H.useOptimistic(S, B);
  }, Vt.useReducer = function(S, B, I) {
    return Rt.H.useReducer(S, B, I);
  }, Vt.useRef = function(S) {
    return Rt.H.useRef(S);
  }, Vt.useState = function(S) {
    return Rt.H.useState(S);
  }, Vt.useSyncExternalStore = function(S, B, I) {
    return Rt.H.useSyncExternalStore(
      S,
      B,
      I
    );
  }, Vt.useTransition = function() {
    return Rt.H.useTransition();
  }, Vt.version = "19.2.7", Vt;
}
var A0 = { exports: {} };
A0.exports;
var Y2;
function zT() {
  return Y2 || (Y2 = 1, (function(D, V) {
    process.env.NODE_ENV !== "production" && (function() {
      function tt(g, U) {
        Object.defineProperty(zt.prototype, g, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              U[0],
              U[1]
            );
          }
        });
      }
      function C(g) {
        return g === null || typeof g != "object" ? null : (g = Ri && g[Ri] || g["@@iterator"], typeof g == "function" ? g : null);
      }
      function ut(g, U) {
        g = (g = g.constructor) && (g.displayName || g.name) || "ReactClass";
        var P = g + "." + U;
        Mi[P] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          U,
          g
        ), Mi[P] = !0);
      }
      function zt(g, U, P) {
        this.props = g, this.context = U, this.refs = ye, this.updater = P || wa;
      }
      function Lt() {
      }
      function lt(g, U, P) {
        this.props = g, this.context = U, this.refs = ye, this.updater = P || wa;
      }
      function it() {
      }
      function W(g) {
        return "" + g;
      }
      function xt(g) {
        try {
          W(g);
          var U = !1;
        } catch {
          U = !0;
        }
        if (U) {
          U = console;
          var P = U.error, at = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return P.call(
            U,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            at
          ), W(g);
        }
      }
      function Q(g) {
        if (g == null) return null;
        if (typeof g == "function")
          return g.$$typeof === mr ? null : g.displayName || g.name || null;
        if (typeof g == "string") return g;
        switch (g) {
          case S:
            return "Fragment";
          case I:
            return "Profiler";
          case B:
            return "StrictMode";
          case At:
            return "Suspense";
          case Le:
            return "SuspenseList";
          case ft:
            return "Activity";
        }
        if (typeof g == "object")
          switch (typeof g.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), g.$$typeof) {
            case _t:
              return "Portal";
            case bt:
              return g.displayName || "Context";
            case F:
              return (g._context.displayName || "Context") + ".Consumer";
            case wt:
              var U = g.render;
              return g = g.displayName, g || (g = U.displayName || U.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
            case me:
              return U = g.displayName || null, U !== null ? U : Q(g.type) || "Memo";
            case qa:
              U = g._payload, g = g._init;
              try {
                return Q(g(U));
              } catch {
              }
          }
        return null;
      }
      function N(g) {
        if (g === S) return "<>";
        if (typeof g == "object" && g !== null && g.$$typeof === qa)
          return "<...>";
        try {
          var U = Q(g);
          return U ? "<" + U + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function ot() {
        var g = ht.A;
        return g === null ? null : g.getOwner();
      }
      function Zt() {
        return Error("react-stack-top-frame");
      }
      function De(g) {
        if (Ci.call(g, "key")) {
          var U = Object.getOwnPropertyDescriptor(g, "key").get;
          if (U && U.isReactWarning) return !1;
        }
        return g.key !== void 0;
      }
      function re(g, U) {
        function P() {
          bc || (bc = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            U
          ));
        }
        P.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: P,
          configurable: !0
        });
      }
      function ae() {
        var g = Q(this.type);
        return ed[g] || (ed[g] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), g = this.props.ref, g !== void 0 ? g : null;
      }
      function Tl(g, U, P, at, mt, Mt) {
        var yt = P.ref;
        return g = {
          $$typeof: vt,
          type: g,
          key: U,
          props: P,
          _owner: at
        }, (yt !== void 0 ? yt : null) !== null ? Object.defineProperty(g, "ref", {
          enumerable: !1,
          get: ae
        }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(g, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(g, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: mt
        }), Object.defineProperty(g, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: Mt
        }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
      }
      function xe(g, U) {
        return U = Tl(
          g.type,
          U,
          g.props,
          g._owner,
          g._debugStack,
          g._debugTask
        ), g._store && (U._store.validated = g._store.validated), U;
      }
      function Je(g) {
        tl(g) ? g._store && (g._store.validated = 1) : typeof g == "object" && g !== null && g.$$typeof === qa && (g._payload.status === "fulfilled" ? tl(g._payload.value) && g._payload.value._store && (g._payload.value._store.validated = 1) : g._store && (g._store.validated = 1));
      }
      function tl(g) {
        return typeof g == "object" && g !== null && g.$$typeof === vt;
      }
      function ul(g) {
        var U = { "=": "=0", ":": "=2" };
        return "$" + g.replace(/[=:]/g, function(P) {
          return U[P];
        });
      }
      function Rt(g, U) {
        return typeof g == "object" && g !== null && g.key != null ? (xt(g.key), ul("" + g.key)) : U.toString(36);
      }
      function Jt(g) {
        switch (g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
          default:
            switch (typeof g.status == "string" ? g.then(it, it) : (g.status = "pending", g.then(
              function(U) {
                g.status === "pending" && (g.status = "fulfilled", g.value = U);
              },
              function(U) {
                g.status === "pending" && (g.status = "rejected", g.reason = U);
              }
            )), g.status) {
              case "fulfilled":
                return g.value;
              case "rejected":
                throw g.reason;
            }
        }
        throw g;
      }
      function ze(g, U, P, at, mt) {
        var Mt = typeof g;
        (Mt === "undefined" || Mt === "boolean") && (g = null);
        var yt = !1;
        if (g === null) yt = !0;
        else
          switch (Mt) {
            case "bigint":
            case "string":
            case "number":
              yt = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case vt:
                case _t:
                  yt = !0;
                  break;
                case qa:
                  return yt = g._init, ze(
                    yt(g._payload),
                    U,
                    P,
                    at,
                    mt
                  );
              }
          }
        if (yt) {
          yt = g, mt = mt(yt);
          var te = at === "" ? "." + Rt(yt, 0) : at;
          return Sc(mt) ? (P = "", te != null && (P = te.replace(ld, "$&/") + "/"), ze(mt, U, P, "", function(ta) {
            return ta;
          })) : mt != null && (tl(mt) && (mt.key != null && (yt && yt.key === mt.key || xt(mt.key)), P = xe(
            mt,
            P + (mt.key == null || yt && yt.key === mt.key ? "" : ("" + mt.key).replace(
              ld,
              "$&/"
            ) + "/") + te
          ), at !== "" && yt != null && tl(yt) && yt.key == null && yt._store && !yt._store.validated && (P._store.validated = 2), mt = P), U.push(mt)), 1;
        }
        if (yt = 0, te = at === "" ? "." : at + ":", Sc(g))
          for (var Gt = 0; Gt < g.length; Gt++)
            at = g[Gt], Mt = te + Rt(at, Gt), yt += ze(
              at,
              U,
              P,
              Mt,
              mt
            );
        else if (Gt = C(g), typeof Gt == "function")
          for (Gt === g.entries && (Cn || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Cn = !0), g = Gt.call(g), Gt = 0; !(at = g.next()).done; )
            at = at.value, Mt = te + Rt(at, Gt++), yt += ze(
              at,
              U,
              P,
              Mt,
              mt
            );
        else if (Mt === "object") {
          if (typeof g.then == "function")
            return ze(
              Jt(g),
              U,
              P,
              at,
              mt
            );
          throw U = String(g), Error(
            "Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return yt;
      }
      function dt(g, U, P) {
        if (g == null) return g;
        var at = [], mt = 0;
        return ze(g, at, "", "", function(Mt) {
          return U.call(P, Mt, mt++);
        }), at;
      }
      function Be(g) {
        if (g._status === -1) {
          var U = g._ioInfo;
          U != null && (U.start = U.end = performance.now()), U = g._result;
          var P = U();
          if (P.then(
            function(mt) {
              if (g._status === 0 || g._status === -1) {
                g._status = 1, g._result = mt;
                var Mt = g._ioInfo;
                Mt != null && (Mt.end = performance.now()), P.status === void 0 && (P.status = "fulfilled", P.value = mt);
              }
            },
            function(mt) {
              if (g._status === 0 || g._status === -1) {
                g._status = 2, g._result = mt;
                var Mt = g._ioInfo;
                Mt != null && (Mt.end = performance.now()), P.status === void 0 && (P.status = "rejected", P.reason = mt);
              }
            }
          ), U = g._ioInfo, U != null) {
            U.value = P;
            var at = P.displayName;
            typeof at == "string" && (U.name = at);
          }
          g._status === -1 && (g._status = 0, g._result = P);
        }
        if (g._status === 1)
          return U = g._result, U === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            U
          ), "default" in U || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            U
          ), U.default;
        throw g._result;
      }
      function gt() {
        var g = ht.H;
        return g === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), g;
      }
      function qt() {
        ht.asyncTransitions--;
      }
      function Qe(g) {
        if (Ec === null)
          try {
            var U = ("require" + Math.random()).slice(0, 7);
            Ec = (D && D[U]).call(
              D,
              "timers"
            ).setImmediate;
          } catch {
            Ec = function(at) {
              yr === !1 && (yr = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var mt = new MessageChannel();
              mt.port1.onmessage = at, mt.port2.postMessage(void 0);
            };
          }
        return Ec(g);
      }
      function je(g) {
        return 1 < g.length && typeof AggregateError == "function" ? new AggregateError(g) : g[0];
      }
      function R(g, U) {
        U !== dn - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), dn = U;
      }
      function Z(g, U, P) {
        var at = ht.actQueue;
        if (at !== null)
          if (at.length !== 0)
            try {
              et(at), Qe(function() {
                return Z(g, U, P);
              });
              return;
            } catch (mt) {
              ht.thrownErrors.push(mt);
            }
          else ht.actQueue = null;
        0 < ht.thrownErrors.length ? (at = je(ht.thrownErrors), ht.thrownErrors.length = 0, P(at)) : U(g);
      }
      function et(g) {
        if (!Ga) {
          Ga = !0;
          var U = 0;
          try {
            for (; U < g.length; U++) {
              var P = g[U];
              do {
                ht.didUsePromise = !1;
                var at = P(!1);
                if (at !== null) {
                  if (ht.didUsePromise) {
                    g[U] = P, g.splice(0, U);
                    return;
                  }
                  P = at;
                } else break;
              } while (!0);
            }
            g.length = 0;
          } catch (mt) {
            g.splice(0, U + 1), ht.thrownErrors.push(mt);
          } finally {
            Ga = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var vt = /* @__PURE__ */ Symbol.for("react.transitional.element"), _t = /* @__PURE__ */ Symbol.for("react.portal"), S = /* @__PURE__ */ Symbol.for("react.fragment"), B = /* @__PURE__ */ Symbol.for("react.strict_mode"), I = /* @__PURE__ */ Symbol.for("react.profiler"), F = /* @__PURE__ */ Symbol.for("react.consumer"), bt = /* @__PURE__ */ Symbol.for("react.context"), wt = /* @__PURE__ */ Symbol.for("react.forward_ref"), At = /* @__PURE__ */ Symbol.for("react.suspense"), Le = /* @__PURE__ */ Symbol.for("react.suspense_list"), me = /* @__PURE__ */ Symbol.for("react.memo"), qa = /* @__PURE__ */ Symbol.for("react.lazy"), ft = /* @__PURE__ */ Symbol.for("react.activity"), Ri = Symbol.iterator, Mi = {}, wa = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(g) {
          ut(g, "forceUpdate");
        },
        enqueueReplaceState: function(g) {
          ut(g, "replaceState");
        },
        enqueueSetState: function(g) {
          ut(g, "setState");
        }
      }, iu = Object.assign, ye = {};
      Object.freeze(ye), zt.prototype.isReactComponent = {}, zt.prototype.setState = function(g, U) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, g, U, "setState");
      }, zt.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      var Pl = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (Ui in Pl)
        Pl.hasOwnProperty(Ui) && tt(Ui, Pl[Ui]);
      Lt.prototype = zt.prototype, Pl = lt.prototype = new Lt(), Pl.constructor = lt, iu(Pl, zt.prototype), Pl.isPureReactComponent = !0;
      var Sc = Array.isArray, mr = /* @__PURE__ */ Symbol.for("react.client.reference"), ht = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, Ci = Object.prototype.hasOwnProperty, cu = console.createTask ? console.createTask : function() {
        return null;
      };
      Pl = {
        react_stack_bottom_frame: function(g) {
          return g();
        }
      };
      var bc, gl, ed = {}, Ho = Pl.react_stack_bottom_frame.bind(
        Pl,
        Zt
      )(), No = cu(N(Zt)), Cn = !1, ld = /\/+/g, xo = typeof reportError == "function" ? reportError : function(g) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var U = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
            error: g
          });
          if (!window.dispatchEvent(U)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", g);
          return;
        }
        console.error(g);
      }, yr = !1, Ec = null, dn = 0, Al = !1, Ga = !1, Ul = typeof queueMicrotask == "function" ? function(g) {
        queueMicrotask(function() {
          return queueMicrotask(g);
        });
      } : Qe;
      Pl = Object.freeze({
        __proto__: null,
        c: function(g) {
          return gt().useMemoCache(g);
        }
      });
      var Ui = {
        map: dt,
        forEach: function(g, U, P) {
          dt(
            g,
            function() {
              U.apply(this, arguments);
            },
            P
          );
        },
        count: function(g) {
          var U = 0;
          return dt(g, function() {
            U++;
          }), U;
        },
        toArray: function(g) {
          return dt(g, function(U) {
            return U;
          }) || [];
        },
        only: function(g) {
          if (!tl(g))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return g;
        }
      };
      V.Activity = ft, V.Children = Ui, V.Component = zt, V.Fragment = S, V.Profiler = I, V.PureComponent = lt, V.StrictMode = B, V.Suspense = At, V.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ht, V.__COMPILER_RUNTIME = Pl, V.act = function(g) {
        var U = ht.actQueue, P = dn;
        dn++;
        var at = ht.actQueue = U !== null ? U : [], mt = !1;
        try {
          var Mt = g();
        } catch (Gt) {
          ht.thrownErrors.push(Gt);
        }
        if (0 < ht.thrownErrors.length)
          throw R(U, P), g = je(ht.thrownErrors), ht.thrownErrors.length = 0, g;
        if (Mt !== null && typeof Mt == "object" && typeof Mt.then == "function") {
          var yt = Mt;
          return Ul(function() {
            mt || Al || (Al = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(Gt, ta) {
              mt = !0, yt.then(
                function(hn) {
                  if (R(U, P), P === 0) {
                    try {
                      et(at), Qe(function() {
                        return Z(
                          hn,
                          Gt,
                          ta
                        );
                      });
                    } catch (Bo) {
                      ht.thrownErrors.push(Bo);
                    }
                    if (0 < ht.thrownErrors.length) {
                      var Hi = je(
                        ht.thrownErrors
                      );
                      ht.thrownErrors.length = 0, ta(Hi);
                    }
                  } else Gt(hn);
                },
                function(hn) {
                  R(U, P), 0 < ht.thrownErrors.length && (hn = je(
                    ht.thrownErrors
                  ), ht.thrownErrors.length = 0), ta(hn);
                }
              );
            }
          };
        }
        var te = Mt;
        if (R(U, P), P === 0 && (et(at), at.length !== 0 && Ul(function() {
          mt || Al || (Al = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), ht.actQueue = null), 0 < ht.thrownErrors.length)
          throw g = je(ht.thrownErrors), ht.thrownErrors.length = 0, g;
        return {
          then: function(Gt, ta) {
            mt = !0, P === 0 ? (ht.actQueue = at, Qe(function() {
              return Z(
                te,
                Gt,
                ta
              );
            })) : Gt(te);
          }
        };
      }, V.cache = function(g) {
        return function() {
          return g.apply(null, arguments);
        };
      }, V.cacheSignal = function() {
        return null;
      }, V.captureOwnerStack = function() {
        var g = ht.getCurrentStack;
        return g === null ? null : g();
      }, V.cloneElement = function(g, U, P) {
        if (g == null)
          throw Error(
            "The argument must be a React element, but you passed " + g + "."
          );
        var at = iu({}, g.props), mt = g.key, Mt = g._owner;
        if (U != null) {
          var yt;
          t: {
            if (Ci.call(U, "ref") && (yt = Object.getOwnPropertyDescriptor(
              U,
              "ref"
            ).get) && yt.isReactWarning) {
              yt = !1;
              break t;
            }
            yt = U.ref !== void 0;
          }
          yt && (Mt = ot()), De(U) && (xt(U.key), mt = "" + U.key);
          for (te in U)
            !Ci.call(U, te) || te === "key" || te === "__self" || te === "__source" || te === "ref" && U.ref === void 0 || (at[te] = U[te]);
        }
        var te = arguments.length - 2;
        if (te === 1) at.children = P;
        else if (1 < te) {
          yt = Array(te);
          for (var Gt = 0; Gt < te; Gt++)
            yt[Gt] = arguments[Gt + 2];
          at.children = yt;
        }
        for (at = Tl(
          g.type,
          mt,
          at,
          Mt,
          g._debugStack,
          g._debugTask
        ), mt = 2; mt < arguments.length; mt++)
          Je(arguments[mt]);
        return at;
      }, V.createContext = function(g) {
        return g = {
          $$typeof: bt,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, g.Provider = g, g.Consumer = {
          $$typeof: F,
          _context: g
        }, g._currentRenderer = null, g._currentRenderer2 = null, g;
      }, V.createElement = function(g, U, P) {
        for (var at = 2; at < arguments.length; at++)
          Je(arguments[at]);
        at = {};
        var mt = null;
        if (U != null)
          for (Gt in gl || !("__self" in U) || "key" in U || (gl = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), De(U) && (xt(U.key), mt = "" + U.key), U)
            Ci.call(U, Gt) && Gt !== "key" && Gt !== "__self" && Gt !== "__source" && (at[Gt] = U[Gt]);
        var Mt = arguments.length - 2;
        if (Mt === 1) at.children = P;
        else if (1 < Mt) {
          for (var yt = Array(Mt), te = 0; te < Mt; te++)
            yt[te] = arguments[te + 2];
          Object.freeze && Object.freeze(yt), at.children = yt;
        }
        if (g && g.defaultProps)
          for (Gt in Mt = g.defaultProps, Mt)
            at[Gt] === void 0 && (at[Gt] = Mt[Gt]);
        mt && re(
          at,
          typeof g == "function" ? g.displayName || g.name || "Unknown" : g
        );
        var Gt = 1e4 > ht.recentlyCreatedOwnerStacks++;
        return Tl(
          g,
          mt,
          at,
          ot(),
          Gt ? Error("react-stack-top-frame") : Ho,
          Gt ? cu(N(g)) : No
        );
      }, V.createRef = function() {
        var g = { current: null };
        return Object.seal(g), g;
      }, V.forwardRef = function(g) {
        g != null && g.$$typeof === me ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof g != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          g === null ? "null" : typeof g
        ) : g.length !== 0 && g.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), g != null && g.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var U = { $$typeof: wt, render: g }, P;
        return Object.defineProperty(U, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return P;
          },
          set: function(at) {
            P = at, g.name || g.displayName || (Object.defineProperty(g, "name", { value: at }), g.displayName = at);
          }
        }), U;
      }, V.isValidElement = tl, V.lazy = function(g) {
        g = { _status: -1, _result: g };
        var U = {
          $$typeof: qa,
          _payload: g,
          _init: Be
        }, P = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return g._ioInfo = P, U._debugInfo = [{ awaited: P }], U;
      }, V.memo = function(g, U) {
        g == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          g === null ? "null" : typeof g
        ), U = {
          $$typeof: me,
          type: g,
          compare: U === void 0 ? null : U
        };
        var P;
        return Object.defineProperty(U, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return P;
          },
          set: function(at) {
            P = at, g.name || g.displayName || (Object.defineProperty(g, "name", { value: at }), g.displayName = at);
          }
        }), U;
      }, V.startTransition = function(g) {
        var U = ht.T, P = {};
        P._updatedFibers = /* @__PURE__ */ new Set(), ht.T = P;
        try {
          var at = g(), mt = ht.S;
          mt !== null && mt(P, at), typeof at == "object" && at !== null && typeof at.then == "function" && (ht.asyncTransitions++, at.then(qt, qt), at.then(it, xo));
        } catch (Mt) {
          xo(Mt);
        } finally {
          U === null && P._updatedFibers && (g = P._updatedFibers.size, P._updatedFibers.clear(), 10 < g && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), U !== null && P.types !== null && (U.types !== null && U.types !== P.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), U.types = P.types), ht.T = U;
        }
      }, V.unstable_useCacheRefresh = function() {
        return gt().useCacheRefresh();
      }, V.use = function(g) {
        return gt().use(g);
      }, V.useActionState = function(g, U, P) {
        return gt().useActionState(
          g,
          U,
          P
        );
      }, V.useCallback = function(g, U) {
        return gt().useCallback(g, U);
      }, V.useContext = function(g) {
        var U = gt();
        return g.$$typeof === F && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), U.useContext(g);
      }, V.useDebugValue = function(g, U) {
        return gt().useDebugValue(g, U);
      }, V.useDeferredValue = function(g, U) {
        return gt().useDeferredValue(g, U);
      }, V.useEffect = function(g, U) {
        return g == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), gt().useEffect(g, U);
      }, V.useEffectEvent = function(g) {
        return gt().useEffectEvent(g);
      }, V.useId = function() {
        return gt().useId();
      }, V.useImperativeHandle = function(g, U, P) {
        return gt().useImperativeHandle(g, U, P);
      }, V.useInsertionEffect = function(g, U) {
        return g == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), gt().useInsertionEffect(g, U);
      }, V.useLayoutEffect = function(g, U) {
        return g == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), gt().useLayoutEffect(g, U);
      }, V.useMemo = function(g, U) {
        return gt().useMemo(g, U);
      }, V.useOptimistic = function(g, U) {
        return gt().useOptimistic(g, U);
      }, V.useReducer = function(g, U, P) {
        return gt().useReducer(g, U, P);
      }, V.useRef = function(g) {
        return gt().useRef(g);
      }, V.useState = function(g) {
        return gt().useState(g);
      }, V.useSyncExternalStore = function(g, U, P) {
        return gt().useSyncExternalStore(
          g,
          U,
          P
        );
      }, V.useTransition = function() {
        return gt().useTransition();
      }, V.version = "19.2.7", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(A0, A0.exports)), A0.exports;
}
var q2;
function _0() {
  return q2 || (q2 = 1, process.env.NODE_ENV === "production" ? $v.exports = _T() : $v.exports = zT()), $v.exports;
}
var w2;
function DT() {
  return w2 || (w2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function D(S) {
      if (S == null) return null;
      if (typeof S == "function")
        return S.$$typeof === Be ? null : S.displayName || S.name || null;
      if (typeof S == "string") return S;
      switch (S) {
        case re:
          return "Fragment";
        case Tl:
          return "Profiler";
        case ae:
          return "StrictMode";
        case ul:
          return "Suspense";
        case Rt:
          return "SuspenseList";
        case dt:
          return "Activity";
      }
      if (typeof S == "object")
        switch (typeof S.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), S.$$typeof) {
          case De:
            return "Portal";
          case Je:
            return S.displayName || "Context";
          case xe:
            return (S._context.displayName || "Context") + ".Consumer";
          case tl:
            var B = S.render;
            return S = S.displayName, S || (S = B.displayName || B.name || "", S = S !== "" ? "ForwardRef(" + S + ")" : "ForwardRef"), S;
          case Jt:
            return B = S.displayName || null, B !== null ? B : D(S.type) || "Memo";
          case ze:
            B = S._payload, S = S._init;
            try {
              return D(S(B));
            } catch {
            }
        }
      return null;
    }
    function V(S) {
      return "" + S;
    }
    function tt(S) {
      try {
        V(S);
        var B = !1;
      } catch {
        B = !0;
      }
      if (B) {
        B = console;
        var I = B.error, F = typeof Symbol == "function" && Symbol.toStringTag && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return I.call(
          B,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          F
        ), V(S);
      }
    }
    function C(S) {
      if (S === re) return "<>";
      if (typeof S == "object" && S !== null && S.$$typeof === ze)
        return "<...>";
      try {
        var B = D(S);
        return B ? "<" + B + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function ut() {
      var S = gt.A;
      return S === null ? null : S.getOwner();
    }
    function zt() {
      return Error("react-stack-top-frame");
    }
    function Lt(S) {
      if (qt.call(S, "key")) {
        var B = Object.getOwnPropertyDescriptor(S, "key").get;
        if (B && B.isReactWarning) return !1;
      }
      return S.key !== void 0;
    }
    function lt(S, B) {
      function I() {
        R || (R = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          B
        ));
      }
      I.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: I,
        configurable: !0
      });
    }
    function it() {
      var S = D(this.type);
      return Z[S] || (Z[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function W(S, B, I, F, bt, wt) {
      var At = I.ref;
      return S = {
        $$typeof: Zt,
        type: S,
        key: B,
        props: I,
        _owner: F
      }, (At !== void 0 ? At : null) !== null ? Object.defineProperty(S, "ref", {
        enumerable: !1,
        get: it
      }) : Object.defineProperty(S, "ref", { enumerable: !1, value: null }), S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(S, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(S, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: bt
      }), Object.defineProperty(S, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: wt
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    }
    function xt(S, B, I, F, bt, wt) {
      var At = B.children;
      if (At !== void 0)
        if (F)
          if (Qe(At)) {
            for (F = 0; F < At.length; F++)
              Q(At[F]);
            Object.freeze && Object.freeze(At);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else Q(At);
      if (qt.call(B, "key")) {
        At = D(S);
        var Le = Object.keys(B).filter(function(qa) {
          return qa !== "key";
        });
        F = 0 < Le.length ? "{key: someKey, " + Le.join(": ..., ") + ": ...}" : "{key: someKey}", _t[At + F] || (Le = 0 < Le.length ? "{" + Le.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          F,
          At,
          Le,
          At
        ), _t[At + F] = !0);
      }
      if (At = null, I !== void 0 && (tt(I), At = "" + I), Lt(B) && (tt(B.key), At = "" + B.key), "key" in B) {
        I = {};
        for (var me in B)
          me !== "key" && (I[me] = B[me]);
      } else I = B;
      return At && lt(
        I,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), W(
        S,
        At,
        I,
        ut(),
        bt,
        wt
      );
    }
    function Q(S) {
      N(S) ? S._store && (S._store.validated = 1) : typeof S == "object" && S !== null && S.$$typeof === ze && (S._payload.status === "fulfilled" ? N(S._payload.value) && S._payload.value._store && (S._payload.value._store.validated = 1) : S._store && (S._store.validated = 1));
    }
    function N(S) {
      return typeof S == "object" && S !== null && S.$$typeof === Zt;
    }
    var ot = _0(), Zt = /* @__PURE__ */ Symbol.for("react.transitional.element"), De = /* @__PURE__ */ Symbol.for("react.portal"), re = /* @__PURE__ */ Symbol.for("react.fragment"), ae = /* @__PURE__ */ Symbol.for("react.strict_mode"), Tl = /* @__PURE__ */ Symbol.for("react.profiler"), xe = /* @__PURE__ */ Symbol.for("react.consumer"), Je = /* @__PURE__ */ Symbol.for("react.context"), tl = /* @__PURE__ */ Symbol.for("react.forward_ref"), ul = /* @__PURE__ */ Symbol.for("react.suspense"), Rt = /* @__PURE__ */ Symbol.for("react.suspense_list"), Jt = /* @__PURE__ */ Symbol.for("react.memo"), ze = /* @__PURE__ */ Symbol.for("react.lazy"), dt = /* @__PURE__ */ Symbol.for("react.activity"), Be = /* @__PURE__ */ Symbol.for("react.client.reference"), gt = ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, qt = Object.prototype.hasOwnProperty, Qe = Array.isArray, je = console.createTask ? console.createTask : function() {
      return null;
    };
    ot = {
      react_stack_bottom_frame: function(S) {
        return S();
      }
    };
    var R, Z = {}, et = ot.react_stack_bottom_frame.bind(
      ot,
      zt
    )(), vt = je(C(zt)), _t = {};
    b0.Fragment = re, b0.jsx = function(S, B, I) {
      var F = 1e4 > gt.recentlyCreatedOwnerStacks++;
      return xt(
        S,
        B,
        I,
        !1,
        F ? Error("react-stack-top-frame") : et,
        F ? je(C(S)) : vt
      );
    }, b0.jsxs = function(S, B, I) {
      var F = 1e4 > gt.recentlyCreatedOwnerStacks++;
      return xt(
        S,
        B,
        I,
        !0,
        F ? Error("react-stack-top-frame") : et,
        F ? je(C(S)) : vt
      );
    };
  })()), b0;
}
var G2;
function RT() {
  return G2 || (G2 = 1, process.env.NODE_ENV === "production" ? Kv.exports = OT() : Kv.exports = DT()), Kv.exports;
}
var Ya = RT(), kv = { exports: {} }, E0 = {}, Wv = { exports: {} }, AS = {};
var X2;
function MT() {
  return X2 || (X2 = 1, (function(D) {
    function V(R, Z) {
      var et = R.length;
      R.push(Z);
      t: for (; 0 < et; ) {
        var vt = et - 1 >>> 1, _t = R[vt];
        if (0 < ut(_t, Z))
          R[vt] = Z, R[et] = _t, et = vt;
        else break t;
      }
    }
    function tt(R) {
      return R.length === 0 ? null : R[0];
    }
    function C(R) {
      if (R.length === 0) return null;
      var Z = R[0], et = R.pop();
      if (et !== Z) {
        R[0] = et;
        t: for (var vt = 0, _t = R.length, S = _t >>> 1; vt < S; ) {
          var B = 2 * (vt + 1) - 1, I = R[B], F = B + 1, bt = R[F];
          if (0 > ut(I, et))
            F < _t && 0 > ut(bt, I) ? (R[vt] = bt, R[F] = et, vt = F) : (R[vt] = I, R[B] = et, vt = B);
          else if (F < _t && 0 > ut(bt, et))
            R[vt] = bt, R[F] = et, vt = F;
          else break t;
        }
      }
      return Z;
    }
    function ut(R, Z) {
      var et = R.sortIndex - Z.sortIndex;
      return et !== 0 ? et : R.id - Z.id;
    }
    if (D.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var zt = performance;
      D.unstable_now = function() {
        return zt.now();
      };
    } else {
      var Lt = Date, lt = Lt.now();
      D.unstable_now = function() {
        return Lt.now() - lt;
      };
    }
    var it = [], W = [], xt = 1, Q = null, N = 3, ot = !1, Zt = !1, De = !1, re = !1, ae = typeof setTimeout == "function" ? setTimeout : null, Tl = typeof clearTimeout == "function" ? clearTimeout : null, xe = typeof setImmediate < "u" ? setImmediate : null;
    function Je(R) {
      for (var Z = tt(W); Z !== null; ) {
        if (Z.callback === null) C(W);
        else if (Z.startTime <= R)
          C(W), Z.sortIndex = Z.expirationTime, V(it, Z);
        else break;
        Z = tt(W);
      }
    }
    function tl(R) {
      if (De = !1, Je(R), !Zt)
        if (tt(it) !== null)
          Zt = !0, ul || (ul = !0, gt());
        else {
          var Z = tt(W);
          Z !== null && je(tl, Z.startTime - R);
        }
    }
    var ul = !1, Rt = -1, Jt = 5, ze = -1;
    function dt() {
      return re ? !0 : !(D.unstable_now() - ze < Jt);
    }
    function Be() {
      if (re = !1, ul) {
        var R = D.unstable_now();
        ze = R;
        var Z = !0;
        try {
          t: {
            Zt = !1, De && (De = !1, Tl(Rt), Rt = -1), ot = !0;
            var et = N;
            try {
              e: {
                for (Je(R), Q = tt(it); Q !== null && !(Q.expirationTime > R && dt()); ) {
                  var vt = Q.callback;
                  if (typeof vt == "function") {
                    Q.callback = null, N = Q.priorityLevel;
                    var _t = vt(
                      Q.expirationTime <= R
                    );
                    if (R = D.unstable_now(), typeof _t == "function") {
                      Q.callback = _t, Je(R), Z = !0;
                      break e;
                    }
                    Q === tt(it) && C(it), Je(R);
                  } else C(it);
                  Q = tt(it);
                }
                if (Q !== null) Z = !0;
                else {
                  var S = tt(W);
                  S !== null && je(
                    tl,
                    S.startTime - R
                  ), Z = !1;
                }
              }
              break t;
            } finally {
              Q = null, N = et, ot = !1;
            }
            Z = void 0;
          }
        } finally {
          Z ? gt() : ul = !1;
        }
      }
    }
    var gt;
    if (typeof xe == "function")
      gt = function() {
        xe(Be);
      };
    else if (typeof MessageChannel < "u") {
      var qt = new MessageChannel(), Qe = qt.port2;
      qt.port1.onmessage = Be, gt = function() {
        Qe.postMessage(null);
      };
    } else
      gt = function() {
        ae(Be, 0);
      };
    function je(R, Z) {
      Rt = ae(function() {
        R(D.unstable_now());
      }, Z);
    }
    D.unstable_IdlePriority = 5, D.unstable_ImmediatePriority = 1, D.unstable_LowPriority = 4, D.unstable_NormalPriority = 3, D.unstable_Profiling = null, D.unstable_UserBlockingPriority = 2, D.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, D.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Jt = 0 < R ? Math.floor(1e3 / R) : 5;
    }, D.unstable_getCurrentPriorityLevel = function() {
      return N;
    }, D.unstable_next = function(R) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var Z = 3;
          break;
        default:
          Z = N;
      }
      var et = N;
      N = Z;
      try {
        return R();
      } finally {
        N = et;
      }
    }, D.unstable_requestPaint = function() {
      re = !0;
    }, D.unstable_runWithPriority = function(R, Z) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var et = N;
      N = R;
      try {
        return Z();
      } finally {
        N = et;
      }
    }, D.unstable_scheduleCallback = function(R, Z, et) {
      var vt = D.unstable_now();
      switch (typeof et == "object" && et !== null ? (et = et.delay, et = typeof et == "number" && 0 < et ? vt + et : vt) : et = vt, R) {
        case 1:
          var _t = -1;
          break;
        case 2:
          _t = 250;
          break;
        case 5:
          _t = 1073741823;
          break;
        case 4:
          _t = 1e4;
          break;
        default:
          _t = 5e3;
      }
      return _t = et + _t, R = {
        id: xt++,
        callback: Z,
        priorityLevel: R,
        startTime: et,
        expirationTime: _t,
        sortIndex: -1
      }, et > vt ? (R.sortIndex = et, V(W, R), tt(it) === null && R === tt(W) && (De ? (Tl(Rt), Rt = -1) : De = !0, je(tl, et - vt))) : (R.sortIndex = _t, V(it, R), Zt || ot || (Zt = !0, ul || (ul = !0, gt()))), R;
    }, D.unstable_shouldYield = dt, D.unstable_wrapCallback = function(R) {
      var Z = N;
      return function() {
        var et = N;
        N = Z;
        try {
          return R.apply(this, arguments);
        } finally {
          N = et;
        }
      };
    };
  })(AS)), AS;
}
var OS = {};
var Q2;
function CT() {
  return Q2 || (Q2 = 1, (function(D) {
    process.env.NODE_ENV !== "production" && (function() {
      function V() {
        if (tl = !1, ze) {
          var R = D.unstable_now();
          gt = R;
          var Z = !0;
          try {
            t: {
              xe = !1, Je && (Je = !1, Rt(dt), dt = -1), Tl = !0;
              var et = ae;
              try {
                e: {
                  for (Lt(R), re = C(ot); re !== null && !(re.expirationTime > R && it()); ) {
                    var vt = re.callback;
                    if (typeof vt == "function") {
                      re.callback = null, ae = re.priorityLevel;
                      var _t = vt(
                        re.expirationTime <= R
                      );
                      if (R = D.unstable_now(), typeof _t == "function") {
                        re.callback = _t, Lt(R), Z = !0;
                        break e;
                      }
                      re === C(ot) && ut(ot), Lt(R);
                    } else ut(ot);
                    re = C(ot);
                  }
                  if (re !== null) Z = !0;
                  else {
                    var S = C(Zt);
                    S !== null && W(
                      lt,
                      S.startTime - R
                    ), Z = !1;
                  }
                }
                break t;
              } finally {
                re = null, ae = et, Tl = !1;
              }
              Z = void 0;
            }
          } finally {
            Z ? qt() : ze = !1;
          }
        }
      }
      function tt(R, Z) {
        var et = R.length;
        R.push(Z);
        t: for (; 0 < et; ) {
          var vt = et - 1 >>> 1, _t = R[vt];
          if (0 < zt(_t, Z))
            R[vt] = Z, R[et] = _t, et = vt;
          else break t;
        }
      }
      function C(R) {
        return R.length === 0 ? null : R[0];
      }
      function ut(R) {
        if (R.length === 0) return null;
        var Z = R[0], et = R.pop();
        if (et !== Z) {
          R[0] = et;
          t: for (var vt = 0, _t = R.length, S = _t >>> 1; vt < S; ) {
            var B = 2 * (vt + 1) - 1, I = R[B], F = B + 1, bt = R[F];
            if (0 > zt(I, et))
              F < _t && 0 > zt(bt, I) ? (R[vt] = bt, R[F] = et, vt = F) : (R[vt] = I, R[B] = et, vt = B);
            else if (F < _t && 0 > zt(bt, et))
              R[vt] = bt, R[F] = et, vt = F;
            else break t;
          }
        }
        return Z;
      }
      function zt(R, Z) {
        var et = R.sortIndex - Z.sortIndex;
        return et !== 0 ? et : R.id - Z.id;
      }
      function Lt(R) {
        for (var Z = C(Zt); Z !== null; ) {
          if (Z.callback === null) ut(Zt);
          else if (Z.startTime <= R)
            ut(Zt), Z.sortIndex = Z.expirationTime, tt(ot, Z);
          else break;
          Z = C(Zt);
        }
      }
      function lt(R) {
        if (Je = !1, Lt(R), !xe)
          if (C(ot) !== null)
            xe = !0, ze || (ze = !0, qt());
          else {
            var Z = C(Zt);
            Z !== null && W(
              lt,
              Z.startTime - R
            );
          }
      }
      function it() {
        return tl ? !0 : !(D.unstable_now() - gt < Be);
      }
      function W(R, Z) {
        dt = ul(function() {
          R(D.unstable_now());
        }, Z);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), D.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var xt = performance;
        D.unstable_now = function() {
          return xt.now();
        };
      } else {
        var Q = Date, N = Q.now();
        D.unstable_now = function() {
          return Q.now() - N;
        };
      }
      var ot = [], Zt = [], De = 1, re = null, ae = 3, Tl = !1, xe = !1, Je = !1, tl = !1, ul = typeof setTimeout == "function" ? setTimeout : null, Rt = typeof clearTimeout == "function" ? clearTimeout : null, Jt = typeof setImmediate < "u" ? setImmediate : null, ze = !1, dt = -1, Be = 5, gt = -1;
      if (typeof Jt == "function")
        var qt = function() {
          Jt(V);
        };
      else if (typeof MessageChannel < "u") {
        var Qe = new MessageChannel(), je = Qe.port2;
        Qe.port1.onmessage = V, qt = function() {
          je.postMessage(null);
        };
      } else
        qt = function() {
          ul(V, 0);
        };
      D.unstable_IdlePriority = 5, D.unstable_ImmediatePriority = 1, D.unstable_LowPriority = 4, D.unstable_NormalPriority = 3, D.unstable_Profiling = null, D.unstable_UserBlockingPriority = 2, D.unstable_cancelCallback = function(R) {
        R.callback = null;
      }, D.unstable_forceFrameRate = function(R) {
        0 > R || 125 < R ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Be = 0 < R ? Math.floor(1e3 / R) : 5;
      }, D.unstable_getCurrentPriorityLevel = function() {
        return ae;
      }, D.unstable_next = function(R) {
        switch (ae) {
          case 1:
          case 2:
          case 3:
            var Z = 3;
            break;
          default:
            Z = ae;
        }
        var et = ae;
        ae = Z;
        try {
          return R();
        } finally {
          ae = et;
        }
      }, D.unstable_requestPaint = function() {
        tl = !0;
      }, D.unstable_runWithPriority = function(R, Z) {
        switch (R) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            R = 3;
        }
        var et = ae;
        ae = R;
        try {
          return Z();
        } finally {
          ae = et;
        }
      }, D.unstable_scheduleCallback = function(R, Z, et) {
        var vt = D.unstable_now();
        switch (typeof et == "object" && et !== null ? (et = et.delay, et = typeof et == "number" && 0 < et ? vt + et : vt) : et = vt, R) {
          case 1:
            var _t = -1;
            break;
          case 2:
            _t = 250;
            break;
          case 5:
            _t = 1073741823;
            break;
          case 4:
            _t = 1e4;
            break;
          default:
            _t = 5e3;
        }
        return _t = et + _t, R = {
          id: De++,
          callback: Z,
          priorityLevel: R,
          startTime: et,
          expirationTime: _t,
          sortIndex: -1
        }, et > vt ? (R.sortIndex = et, tt(Zt, R), C(ot) === null && R === C(Zt) && (Je ? (Rt(dt), dt = -1) : Je = !0, W(lt, et - vt))) : (R.sortIndex = _t, tt(ot, R), xe || Tl || (xe = !0, ze || (ze = !0, qt()))), R;
      }, D.unstable_shouldYield = it, D.unstable_wrapCallback = function(R) {
        var Z = ae;
        return function() {
          var et = ae;
          ae = Z;
          try {
            return R.apply(this, arguments);
          } finally {
            ae = et;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(OS)), OS;
}
var L2;
function W2() {
  return L2 || (L2 = 1, process.env.NODE_ENV === "production" ? Wv.exports = MT() : Wv.exports = CT()), Wv.exports;
}
var Fv = { exports: {} }, Ba = {};
var V2;
function UT() {
  if (V2) return Ba;
  V2 = 1;
  var D = _0();
  function V(it) {
    var W = "https://react.dev/errors/" + it;
    if (1 < arguments.length) {
      W += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var xt = 2; xt < arguments.length; xt++)
        W += "&args[]=" + encodeURIComponent(arguments[xt]);
    }
    return "Minified React error #" + it + "; visit " + W + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function tt() {
  }
  var C = {
    d: {
      f: tt,
      r: function() {
        throw Error(V(522));
      },
      D: tt,
      C: tt,
      L: tt,
      m: tt,
      X: tt,
      S: tt,
      M: tt
    },
    p: 0,
    findDOMNode: null
  }, ut = /* @__PURE__ */ Symbol.for("react.portal");
  function zt(it, W, xt) {
    var Q = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ut,
      key: Q == null ? null : "" + Q,
      children: it,
      containerInfo: W,
      implementation: xt
    };
  }
  var Lt = D.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function lt(it, W) {
    if (it === "font") return "";
    if (typeof W == "string")
      return W === "use-credentials" ? W : "";
  }
  return Ba.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = C, Ba.createPortal = function(it, W) {
    var xt = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!W || W.nodeType !== 1 && W.nodeType !== 9 && W.nodeType !== 11)
      throw Error(V(299));
    return zt(it, W, null, xt);
  }, Ba.flushSync = function(it) {
    var W = Lt.T, xt = C.p;
    try {
      if (Lt.T = null, C.p = 2, it) return it();
    } finally {
      Lt.T = W, C.p = xt, C.d.f();
    }
  }, Ba.preconnect = function(it, W) {
    typeof it == "string" && (W ? (W = W.crossOrigin, W = typeof W == "string" ? W === "use-credentials" ? W : "" : void 0) : W = null, C.d.C(it, W));
  }, Ba.prefetchDNS = function(it) {
    typeof it == "string" && C.d.D(it);
  }, Ba.preinit = function(it, W) {
    if (typeof it == "string" && W && typeof W.as == "string") {
      var xt = W.as, Q = lt(xt, W.crossOrigin), N = typeof W.integrity == "string" ? W.integrity : void 0, ot = typeof W.fetchPriority == "string" ? W.fetchPriority : void 0;
      xt === "style" ? C.d.S(
        it,
        typeof W.precedence == "string" ? W.precedence : void 0,
        {
          crossOrigin: Q,
          integrity: N,
          fetchPriority: ot
        }
      ) : xt === "script" && C.d.X(it, {
        crossOrigin: Q,
        integrity: N,
        fetchPriority: ot,
        nonce: typeof W.nonce == "string" ? W.nonce : void 0
      });
    }
  }, Ba.preinitModule = function(it, W) {
    if (typeof it == "string")
      if (typeof W == "object" && W !== null) {
        if (W.as == null || W.as === "script") {
          var xt = lt(
            W.as,
            W.crossOrigin
          );
          C.d.M(it, {
            crossOrigin: xt,
            integrity: typeof W.integrity == "string" ? W.integrity : void 0,
            nonce: typeof W.nonce == "string" ? W.nonce : void 0
          });
        }
      } else W == null && C.d.M(it);
  }, Ba.preload = function(it, W) {
    if (typeof it == "string" && typeof W == "object" && W !== null && typeof W.as == "string") {
      var xt = W.as, Q = lt(xt, W.crossOrigin);
      C.d.L(it, xt, {
        crossOrigin: Q,
        integrity: typeof W.integrity == "string" ? W.integrity : void 0,
        nonce: typeof W.nonce == "string" ? W.nonce : void 0,
        type: typeof W.type == "string" ? W.type : void 0,
        fetchPriority: typeof W.fetchPriority == "string" ? W.fetchPriority : void 0,
        referrerPolicy: typeof W.referrerPolicy == "string" ? W.referrerPolicy : void 0,
        imageSrcSet: typeof W.imageSrcSet == "string" ? W.imageSrcSet : void 0,
        imageSizes: typeof W.imageSizes == "string" ? W.imageSizes : void 0,
        media: typeof W.media == "string" ? W.media : void 0
      });
    }
  }, Ba.preloadModule = function(it, W) {
    if (typeof it == "string")
      if (W) {
        var xt = lt(W.as, W.crossOrigin);
        C.d.m(it, {
          as: typeof W.as == "string" && W.as !== "script" ? W.as : void 0,
          crossOrigin: xt,
          integrity: typeof W.integrity == "string" ? W.integrity : void 0
        });
      } else C.d.m(it);
  }, Ba.requestFormReset = function(it) {
    C.d.r(it);
  }, Ba.unstable_batchedUpdates = function(it, W) {
    return it(W);
  }, Ba.useFormState = function(it, W, xt) {
    return Lt.H.useFormState(it, W, xt);
  }, Ba.useFormStatus = function() {
    return Lt.H.useHostTransitionStatus();
  }, Ba.version = "19.2.7", Ba;
}
var ja = {};
var Z2;
function HT() {
  return Z2 || (Z2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function D() {
    }
    function V(Q) {
      return "" + Q;
    }
    function tt(Q, N, ot) {
      var Zt = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        V(Zt);
        var De = !1;
      } catch {
        De = !0;
      }
      return De && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && Zt[Symbol.toStringTag] || Zt.constructor.name || "Object"
      ), V(Zt)), {
        $$typeof: W,
        key: Zt == null ? null : "" + Zt,
        children: Q,
        containerInfo: N,
        implementation: ot
      };
    }
    function C(Q, N) {
      if (Q === "font") return "";
      if (typeof N == "string")
        return N === "use-credentials" ? N : "";
    }
    function ut(Q) {
      return Q === null ? "`null`" : Q === void 0 ? "`undefined`" : Q === "" ? "an empty string" : 'something with type "' + typeof Q + '"';
    }
    function zt(Q) {
      return Q === null ? "`null`" : Q === void 0 ? "`undefined`" : Q === "" ? "an empty string" : typeof Q == "string" ? JSON.stringify(Q) : typeof Q == "number" ? "`" + Q + "`" : 'something with type "' + typeof Q + '"';
    }
    function Lt() {
      var Q = xt.H;
      return Q === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), Q;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var lt = _0(), it = {
      d: {
        f: D,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D,
        C: D,
        L: D,
        m: D,
        X: D,
        S: D,
        M: D
      },
      p: 0,
      findDOMNode: null
    }, W = /* @__PURE__ */ Symbol.for("react.portal"), xt = lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), ja.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = it, ja.createPortal = function(Q, N) {
      var ot = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!N || N.nodeType !== 1 && N.nodeType !== 9 && N.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return tt(Q, N, null, ot);
    }, ja.flushSync = function(Q) {
      var N = xt.T, ot = it.p;
      try {
        if (xt.T = null, it.p = 2, Q)
          return Q();
      } finally {
        xt.T = N, it.p = ot, it.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, ja.preconnect = function(Q, N) {
      typeof Q == "string" && Q ? N != null && typeof N != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        zt(N)
      ) : N != null && typeof N.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        ut(N.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        ut(Q)
      ), typeof Q == "string" && (N ? (N = N.crossOrigin, N = typeof N == "string" ? N === "use-credentials" ? N : "" : void 0) : N = null, it.d.C(Q, N));
    }, ja.prefetchDNS = function(Q) {
      if (typeof Q != "string" || !Q)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          ut(Q)
        );
      else if (1 < arguments.length) {
        var N = arguments[1];
        typeof N == "object" && N.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          zt(N)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          zt(N)
        );
      }
      typeof Q == "string" && it.d.D(Q);
    }, ja.preinit = function(Q, N) {
      if (typeof Q == "string" && Q ? N == null || typeof N != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        zt(N)
      ) : N.as !== "style" && N.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        zt(N.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        ut(Q)
      ), typeof Q == "string" && N && typeof N.as == "string") {
        var ot = N.as, Zt = C(ot, N.crossOrigin), De = typeof N.integrity == "string" ? N.integrity : void 0, re = typeof N.fetchPriority == "string" ? N.fetchPriority : void 0;
        ot === "style" ? it.d.S(
          Q,
          typeof N.precedence == "string" ? N.precedence : void 0,
          {
            crossOrigin: Zt,
            integrity: De,
            fetchPriority: re
          }
        ) : ot === "script" && it.d.X(Q, {
          crossOrigin: Zt,
          integrity: De,
          fetchPriority: re,
          nonce: typeof N.nonce == "string" ? N.nonce : void 0
        });
      }
    }, ja.preinitModule = function(Q, N) {
      var ot = "";
      typeof Q == "string" && Q || (ot += " The `href` argument encountered was " + ut(Q) + "."), N !== void 0 && typeof N != "object" ? ot += " The `options` argument encountered was " + ut(N) + "." : N && "as" in N && N.as !== "script" && (ot += " The `as` option encountered was " + zt(N.as) + "."), ot ? console.error(
        "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
        ot
      ) : (ot = N && typeof N.as == "string" ? N.as : "script", ot) === "script" || (ot = zt(ot), console.error(
        'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
        ot,
        Q
      )), typeof Q == "string" && (typeof N == "object" && N !== null ? (N.as == null || N.as === "script") && (ot = C(
        N.as,
        N.crossOrigin
      ), it.d.M(Q, {
        crossOrigin: ot,
        integrity: typeof N.integrity == "string" ? N.integrity : void 0,
        nonce: typeof N.nonce == "string" ? N.nonce : void 0
      })) : N == null && it.d.M(Q));
    }, ja.preload = function(Q, N) {
      var ot = "";
      if (typeof Q == "string" && Q || (ot += " The `href` argument encountered was " + ut(Q) + "."), N == null || typeof N != "object" ? ot += " The `options` argument encountered was " + ut(N) + "." : typeof N.as == "string" && N.as || (ot += " The `as` option encountered was " + ut(N.as) + "."), ot && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        ot
      ), typeof Q == "string" && typeof N == "object" && N !== null && typeof N.as == "string") {
        ot = N.as;
        var Zt = C(
          ot,
          N.crossOrigin
        );
        it.d.L(Q, ot, {
          crossOrigin: Zt,
          integrity: typeof N.integrity == "string" ? N.integrity : void 0,
          nonce: typeof N.nonce == "string" ? N.nonce : void 0,
          type: typeof N.type == "string" ? N.type : void 0,
          fetchPriority: typeof N.fetchPriority == "string" ? N.fetchPriority : void 0,
          referrerPolicy: typeof N.referrerPolicy == "string" ? N.referrerPolicy : void 0,
          imageSrcSet: typeof N.imageSrcSet == "string" ? N.imageSrcSet : void 0,
          imageSizes: typeof N.imageSizes == "string" ? N.imageSizes : void 0,
          media: typeof N.media == "string" ? N.media : void 0
        });
      }
    }, ja.preloadModule = function(Q, N) {
      var ot = "";
      typeof Q == "string" && Q || (ot += " The `href` argument encountered was " + ut(Q) + "."), N !== void 0 && typeof N != "object" ? ot += " The `options` argument encountered was " + ut(N) + "." : N && "as" in N && typeof N.as != "string" && (ot += " The `as` option encountered was " + ut(N.as) + "."), ot && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        ot
      ), typeof Q == "string" && (N ? (ot = C(
        N.as,
        N.crossOrigin
      ), it.d.m(Q, {
        as: typeof N.as == "string" && N.as !== "script" ? N.as : void 0,
        crossOrigin: ot,
        integrity: typeof N.integrity == "string" ? N.integrity : void 0
      })) : it.d.m(Q));
    }, ja.requestFormReset = function(Q) {
      it.d.r(Q);
    }, ja.unstable_batchedUpdates = function(Q, N) {
      return Q(N);
    }, ja.useFormState = function(Q, N, ot) {
      return Lt().useFormState(Q, N, ot);
    }, ja.useFormStatus = function() {
      return Lt().useHostTransitionStatus();
    }, ja.version = "19.2.7", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), ja;
}
var J2;
function F2() {
  if (J2) return Fv.exports;
  J2 = 1;
  function D() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D);
      } catch (V) {
        console.error(V);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (D(), Fv.exports = UT()) : Fv.exports = HT(), Fv.exports;
}
var K2;
function NT() {
  if (K2) return E0;
  K2 = 1;
  var D = W2(), V = _0(), tt = F2();
  function C(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ut(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function zt(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function Lt(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function lt(l) {
    if (l.tag === 31) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function it(l) {
    if (zt(l) !== l)
      throw Error(C(188));
  }
  function W(l) {
    var n = l.alternate;
    if (!n) {
      if (n = zt(l), n === null) throw Error(C(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var r = u.return;
      if (r === null) break;
      var s = r.alternate;
      if (s === null) {
        if (c = r.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (r.child === s.child) {
        for (s = r.child; s; ) {
          if (s === u) return it(r), l;
          if (s === c) return it(r), n;
          s = s.sibling;
        }
        throw Error(C(188));
      }
      if (u.return !== c.return) u = r, c = s;
      else {
        for (var m = !1, v = r.child; v; ) {
          if (v === u) {
            m = !0, u = r, c = s;
            break;
          }
          if (v === c) {
            m = !0, c = r, u = s;
            break;
          }
          v = v.sibling;
        }
        if (!m) {
          for (v = s.child; v; ) {
            if (v === u) {
              m = !0, u = s, c = r;
              break;
            }
            if (v === c) {
              m = !0, c = s, u = r;
              break;
            }
            v = v.sibling;
          }
          if (!m) throw Error(C(189));
        }
      }
      if (u.alternate !== c) throw Error(C(190));
    }
    if (u.tag !== 3) throw Error(C(188));
    return u.stateNode.current === u ? l : n;
  }
  function xt(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = xt(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var Q = Object.assign, N = /* @__PURE__ */ Symbol.for("react.element"), ot = /* @__PURE__ */ Symbol.for("react.transitional.element"), Zt = /* @__PURE__ */ Symbol.for("react.portal"), De = /* @__PURE__ */ Symbol.for("react.fragment"), re = /* @__PURE__ */ Symbol.for("react.strict_mode"), ae = /* @__PURE__ */ Symbol.for("react.profiler"), Tl = /* @__PURE__ */ Symbol.for("react.consumer"), xe = /* @__PURE__ */ Symbol.for("react.context"), Je = /* @__PURE__ */ Symbol.for("react.forward_ref"), tl = /* @__PURE__ */ Symbol.for("react.suspense"), ul = /* @__PURE__ */ Symbol.for("react.suspense_list"), Rt = /* @__PURE__ */ Symbol.for("react.memo"), Jt = /* @__PURE__ */ Symbol.for("react.lazy"), ze = /* @__PURE__ */ Symbol.for("react.activity"), dt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Be = Symbol.iterator;
  function gt(l) {
    return l === null || typeof l != "object" ? null : (l = Be && l[Be] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var qt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Qe(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === qt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case De:
        return "Fragment";
      case ae:
        return "Profiler";
      case re:
        return "StrictMode";
      case tl:
        return "Suspense";
      case ul:
        return "SuspenseList";
      case ze:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Zt:
          return "Portal";
        case xe:
          return l.displayName || "Context";
        case Tl:
          return (l._context.displayName || "Context") + ".Consumer";
        case Je:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Rt:
          return n = l.displayName || null, n !== null ? n : Qe(l.type) || "Memo";
        case Jt:
          n = l._payload, l = l._init;
          try {
            return Qe(l(n));
          } catch {
          }
      }
    return null;
  }
  var je = Array.isArray, R = V.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, et = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, vt = [], _t = -1;
  function S(l) {
    return { current: l };
  }
  function B(l) {
    0 > _t || (l.current = vt[_t], vt[_t] = null, _t--);
  }
  function I(l, n) {
    _t++, vt[_t] = l.current, l.current = n;
  }
  var F = S(null), bt = S(null), wt = S(null), At = S(null);
  function Le(l, n) {
    switch (I(wt, n), I(bt, l), I(F, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? qg(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = qg(n), l = hp(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    B(F), I(F, l);
  }
  function me() {
    B(F), B(bt), B(wt);
  }
  function qa(l) {
    l.memoizedState !== null && I(At, l);
    var n = F.current, u = hp(n, l.type);
    n !== u && (I(bt, l), I(F, u));
  }
  function ft(l) {
    bt.current === l && (B(F), B(bt)), At.current === l && (B(At), Rs._currentValue = et);
  }
  var Ri, Mi;
  function wa(l) {
    if (Ri === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        Ri = n && n[1] || "", Mi = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ri + l + Mi;
  }
  var iu = !1;
  function ye(l, n) {
    if (!l || iu) return "";
    iu = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var $ = function() {
                throw Error();
              };
              if (Object.defineProperty($.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct($, []);
                } catch (X) {
                  var Y = X;
                }
                Reflect.construct(l, [], $);
              } else {
                try {
                  $.call();
                } catch (X) {
                  Y = X;
                }
                l.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (X) {
                Y = X;
              }
              ($ = l()) && typeof $.catch == "function" && $.catch(function() {
              });
            }
          } catch (X) {
            if (X && Y && typeof X.stack == "string")
              return [X.stack, Y.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      r && r.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var s = c.DetermineComponentFrameRoot(), m = s[0], v = s[1];
      if (m && v) {
        var A = m.split(`
`), j = v.split(`
`);
        for (r = c = 0; c < A.length && !A[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; r < j.length && !j[r].includes(
          "DetermineComponentFrameRoot"
        ); )
          r++;
        if (c === A.length || r === j.length)
          for (c = A.length - 1, r = j.length - 1; 1 <= c && 0 <= r && A[c] !== j[r]; )
            r--;
        for (; 1 <= c && 0 <= r; c--, r--)
          if (A[c] !== j[r]) {
            if (c !== 1 || r !== 1)
              do
                if (c--, r--, 0 > r || A[c] !== j[r]) {
                  var L = `
` + A[c].replace(" at new ", " at ");
                  return l.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", l.displayName)), L;
                }
              while (1 <= c && 0 <= r);
            break;
          }
      }
    } finally {
      iu = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? wa(u) : "";
  }
  function Pl(l, n) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return wa(l.type);
      case 16:
        return wa("Lazy");
      case 13:
        return l.child !== n && n !== null ? wa("Suspense Fallback") : wa("Suspense");
      case 19:
        return wa("SuspenseList");
      case 0:
      case 15:
        return ye(l.type, !1);
      case 11:
        return ye(l.type.render, !1);
      case 1:
        return ye(l.type, !0);
      case 31:
        return wa("Activity");
      default:
        return "";
    }
  }
  function Sc(l) {
    try {
      var n = "", u = null;
      do
        n += Pl(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (c) {
      return `
Error generating stack: ` + c.message + `
` + c.stack;
    }
  }
  var mr = Object.prototype.hasOwnProperty, ht = D.unstable_scheduleCallback, Ci = D.unstable_cancelCallback, cu = D.unstable_shouldYield, bc = D.unstable_requestPaint, gl = D.unstable_now, ed = D.unstable_getCurrentPriorityLevel, Ho = D.unstable_ImmediatePriority, No = D.unstable_UserBlockingPriority, Cn = D.unstable_NormalPriority, ld = D.unstable_LowPriority, xo = D.unstable_IdlePriority, yr = D.log, Ec = D.unstable_setDisableYieldValue, dn = null, Al = null;
  function Ga(l) {
    if (typeof yr == "function" && Ec(l), Al && typeof Al.setStrictMode == "function")
      try {
        Al.setStrictMode(dn, l);
      } catch {
      }
  }
  var Ul = Math.clz32 ? Math.clz32 : U, Ui = Math.log, g = Math.LN2;
  function U(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Ui(l) / g | 0) | 0;
  }
  var P = 256, at = 262144, mt = 4194304;
  function Mt(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function yt(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var r = 0, s = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var v = c & 134217727;
    return v !== 0 ? (c = v & ~s, c !== 0 ? r = Mt(c) : (m &= v, m !== 0 ? r = Mt(m) : u || (u = v & ~l, u !== 0 && (r = Mt(u))))) : (v = c & ~s, v !== 0 ? r = Mt(v) : m !== 0 ? r = Mt(m) : u || (u = c & ~l, u !== 0 && (r = Mt(u)))), r === 0 ? 0 : n !== 0 && n !== r && (n & s) === 0 && (s = r & -r, u = n & -n, s >= u || s === 32 && (u & 4194048) !== 0) ? n : r;
  }
  function te(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function Gt(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ta() {
    var l = mt;
    return mt <<= 1, (mt & 62914560) === 0 && (mt = 4194304), l;
  }
  function hn(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function Hi(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Bo(l, n, u, c, r, s) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var v = l.entanglements, A = l.expirationTimes, j = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var L = 31 - Ul(u), $ = 1 << L;
      v[L] = 0, A[L] = -1;
      var Y = j[L];
      if (Y !== null)
        for (j[L] = null, L = 0; L < Y.length; L++) {
          var X = Y[L];
          X !== null && (X.lane &= -536870913);
        }
      u &= ~$;
    }
    c !== 0 && pr(l, c, 0), s !== 0 && r === 0 && l.tag !== 0 && (l.suspendedLanes |= s & ~(m & ~n));
  }
  function pr(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Ul(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 261930;
  }
  function ou(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Ul(u), r = 1 << c;
      r & n | l[c] & n && (l[c] |= n), u &= ~r;
    }
  }
  function Xa(l, n) {
    var u = n & -n;
    return u = (u & 42) !== 0 ? 1 : ad(u), (u & (l.suspendedLanes | n)) !== 0 ? 0 : u;
  }
  function ad(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Am(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function nd() {
    var l = Z.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Ms(l.type));
  }
  function Om(l, n) {
    var u = Z.p;
    try {
      return Z.p = l, n();
    } finally {
      Z.p = u;
    }
  }
  var Un = Math.random().toString(36).slice(2), Re = "__reactFiber$" + Un, fa = "__reactProps$" + Un, Ni = "__reactContainer$" + Un, ud = "__reactEvents$" + Un, _m = "__reactListeners$" + Un, z0 = "__reactHandles$" + Un, zm = "__reactResources$" + Un, fu = "__reactMarker$" + Un;
  function id(l) {
    delete l[Re], delete l[fa], delete l[ud], delete l[_m], delete l[z0];
  }
  function Tc(l) {
    var n = l[Re];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Ni] || u[Re]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = In(l); l !== null; ) {
            if (u = l[Re]) return u;
            l = In(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Ac(l) {
    if (l = l[Re] || l[Ni]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function jo(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(C(33));
  }
  function Oc(l) {
    var n = l[zm];
    return n || (n = l[zm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Ee(l) {
    l[fu] = !0;
  }
  var _c = /* @__PURE__ */ new Set(), xi = {};
  function Bi(l, n) {
    ru(l, n), ru(l + "Capture", n);
  }
  function ru(l, n) {
    for (xi[l] = n, l = 0; l < n.length; l++)
      _c.add(n[l]);
  }
  var cd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), od = {}, Yo = {};
  function qo(l) {
    return mr.call(Yo, l) ? !0 : mr.call(od, l) ? !1 : cd.test(l) ? Yo[l] = !0 : (od[l] = !0, !1);
  }
  function wo(l, n, u) {
    if (qo(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function fd(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function Iu(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  function Qa(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function rd(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Dm(l, n, u) {
    var c = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    );
    if (!l.hasOwnProperty(n) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
      var r = c.get, s = c.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return r.call(this);
        },
        set: function(m) {
          u = "" + m, s.call(this, m);
        }
      }), Object.defineProperty(l, n, {
        enumerable: c.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(m) {
          u = "" + m;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function sd(l) {
    if (!l._valueTracker) {
      var n = rd(l) ? "checked" : "value";
      l._valueTracker = Dm(
        l,
        n,
        "" + l[n]
      );
    }
  }
  function Rm(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = rd(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function gr(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Iv = /[\n"\\]/g;
  function La(l) {
    return l.replace(
      Iv,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function vr(l, n, u, c, r, s, m, v) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Qa(n)) : l.value !== "" + Qa(n) && (l.value = "" + Qa(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? zc(l, m, Qa(n)) : u != null ? zc(l, m, Qa(u)) : c != null && l.removeAttribute("value"), r == null && s != null && (l.defaultChecked = !!s), r != null && (l.checked = r && typeof r != "function" && typeof r != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? l.name = "" + Qa(v) : l.removeAttribute("name");
  }
  function Sr(l, n, u, c, r, s, m, v) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (l.type = s), n != null || u != null) {
      if (!(s !== "submit" && s !== "reset" || n != null)) {
        sd(l);
        return;
      }
      u = u != null ? "" + Qa(u) : "", n = n != null ? "" + Qa(n) : u, v || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? r, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = v ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), sd(l);
  }
  function zc(l, n, u) {
    n === "number" && gr(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Go(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var r = 0; r < u.length; r++)
        n["$" + u[r]] = !0;
      for (u = 0; u < l.length; u++)
        r = n.hasOwnProperty("$" + l[u].value), l[u].selected !== r && (l[u].selected = r), r && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Qa(u), n = null, r = 0; r < l.length; r++) {
        if (l[r].value === u) {
          l[r].selected = !0, c && (l[r].defaultSelected = !0);
          return;
        }
        n !== null || l[r].disabled || (n = l[r]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Mm(l, n, u) {
    if (n != null && (n = "" + Qa(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Qa(u) : "";
  }
  function Cm(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(C(92));
        if (je(c)) {
          if (1 < c.length) throw Error(C(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = Qa(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c), sd(l);
  }
  function su(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var D0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function R0(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || D0.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function M0(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(C(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var r in n)
        c = n[r], n.hasOwnProperty(r) && u[r] !== c && R0(l, r, c);
    } else
      for (var s in n)
        n.hasOwnProperty(s) && R0(l, s, n[s]);
  }
  function Um(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Pv = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), br = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function mn(l) {
    return br.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Hn() {
  }
  var dd = null;
  function hd(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var du = null, Dc = null;
  function Er(l) {
    var n = Ac(l);
    if (n && (l = n.stateNode)) {
      var u = l[fa] || null;
      t: switch (l = n.stateNode, n.type) {
        case "input":
          if (vr(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + La(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var r = c[fa] || null;
                if (!r) throw Error(C(90));
                vr(
                  c,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && Rm(c);
          }
          break t;
        case "textarea":
          Mm(l, u.value, u.defaultValue);
          break t;
        case "select":
          n = u.value, n != null && Go(l, !!u.multiple, n, !1);
      }
    }
  }
  var Xo = !1;
  function Hm(l, n, u) {
    if (Xo) return l(n, u);
    Xo = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (Xo = !1, (du !== null || Dc !== null) && (Of(), du && (n = du, l = Dc, Dc = du = null, Er(n), l)))
        for (n = 0; n < l.length; n++) Er(l[n]);
    }
  }
  function Hl(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[fa] || null;
    if (c === null) return null;
    u = c[n];
    t: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break t;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        C(231, n, typeof u)
      );
    return u;
  }
  var Pu = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Tr = !1;
  if (Pu)
    try {
      var Qo = {};
      Object.defineProperty(Qo, "passive", {
        get: function() {
          Tr = !0;
        }
      }), window.addEventListener("test", Qo, Qo), window.removeEventListener("test", Qo, Qo);
    } catch {
      Tr = !1;
    }
  var ti = null, Nm = null, md = null;
  function xm() {
    if (md) return md;
    var l, n = Nm, u = n.length, c, r = "value" in ti ? ti.value : ti.textContent, s = r.length;
    for (l = 0; l < u && n[l] === r[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === r[s - c]; c++) ;
    return md = r.slice(l, 1 < c ? 1 - c : void 0);
  }
  function yd(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Ar() {
    return !0;
  }
  function C0() {
    return !1;
  }
  function Kl(l) {
    function n(u, c, r, s, m) {
      this._reactName = u, this._targetInst = r, this.type = c, this.nativeEvent = s, this.target = m, this.currentTarget = null;
      for (var v in l)
        l.hasOwnProperty(v) && (u = l[v], this[v] = u ? u(s) : s[v]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Ar : C0, this.isPropagationStopped = C0, this;
    }
    return Q(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Ar);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Ar);
      },
      persist: function() {
      },
      isPersistent: Ar
    }), n;
  }
  var ji = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Or = Kl(ji), Lo = Q({}, ji, { view: 0, detail: 0 }), t1 = Kl(Lo), Bm, jm, _r, pd = Q({}, Lo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: yn,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== _r && (_r && l.type === "mousemove" ? (Bm = l.screenX - _r.screenX, jm = l.screenY - _r.screenY) : jm = Bm = 0, _r = l), Bm);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : jm;
    }
  }), Vo = Kl(pd), U0 = Q({}, pd, { dataTransfer: 0 }), H0 = Kl(U0), N0 = Q({}, Lo, { relatedTarget: 0 }), gd = Kl(N0), Ym = Q({}, ji, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), x0 = Kl(Ym), Rc = Q({}, ji, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Mc = Kl(Rc), Nn = Q({}, ji, { data: 0 }), B0 = Kl(Nn), qm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, hu = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, j0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function xn(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = j0[l]) ? !!n[l] : !1;
  }
  function yn() {
    return xn;
  }
  var vd = Q({}, Lo, {
    key: function(l) {
      if (l.key) {
        var n = qm[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = yd(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? hu[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: yn,
    charCode: function(l) {
      return l.type === "keypress" ? yd(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? yd(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Sd = Kl(vd), wm = Q({}, pd, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Bn = Kl(wm), e1 = Q({}, Lo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: yn
  }), Y0 = Kl(e1), q0 = Q({}, ji, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), l1 = Kl(q0), Gm = Q({}, pd, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), a1 = Kl(Gm), w0 = Q({}, ji, {
    newState: 0,
    oldState: 0
  }), Xm = Kl(w0), bd = [9, 13, 27, 32], Zo = Pu && "CompositionEvent" in window, Cc = null;
  Pu && "documentMode" in document && (Cc = document.documentMode);
  var ea = Pu && "TextEvent" in window && !Cc, Qm = Pu && (!Zo || Cc && 8 < Cc && 11 >= Cc), zr = " ", Yi = !1;
  function Ed(l, n) {
    switch (l) {
      case "keyup":
        return bd.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Lm(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Uc = !1;
  function G0(l, n) {
    switch (l) {
      case "compositionend":
        return Lm(n);
      case "keypress":
        return n.which !== 32 ? null : (Yi = !0, zr);
      case "textInput":
        return l = n.data, l === zr && Yi ? null : l;
      default:
        return null;
    }
  }
  function n1(l, n) {
    if (Uc)
      return l === "compositionend" || !Zo && Ed(l, n) ? (l = xm(), md = Nm = ti = null, Uc = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Qm && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Vm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function mu(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Vm[l.type] : n === "textarea";
  }
  function Zm(l, n, u, c) {
    du ? Dc ? Dc.push(c) : Dc = [c] : du = c, n = Ts(n, "onChange"), 0 < n.length && (u = new Or(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var Hc = null, qi = null;
  function Nc(l) {
    Bg(l, 0);
  }
  function Jo(l) {
    var n = jo(l);
    if (Rm(n)) return l;
  }
  function Jm(l, n) {
    if (l === "change") return n;
  }
  var Td = !1;
  if (Pu) {
    var ra;
    if (Pu) {
      var jn = "oninput" in document;
      if (!jn) {
        var Km = document.createElement("div");
        Km.setAttribute("oninput", "return;"), jn = typeof Km.oninput == "function";
      }
      ra = jn;
    } else ra = !1;
    Td = ra && (!document.documentMode || 9 < document.documentMode);
  }
  function Ad() {
    Hc && (Hc.detachEvent("onpropertychange", Od), qi = Hc = null);
  }
  function Od(l) {
    if (l.propertyName === "value" && Jo(qi)) {
      var n = [];
      Zm(
        n,
        qi,
        l,
        hd(l)
      ), Hm(Nc, n);
    }
  }
  function X0(l, n, u) {
    l === "focusin" ? (Ad(), Hc = n, qi = u, Hc.attachEvent("onpropertychange", Od)) : l === "focusout" && Ad();
  }
  function Q0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Jo(qi);
  }
  function wi(l, n) {
    if (l === "click") return Jo(n);
  }
  function xc(l, n) {
    if (l === "input" || l === "change")
      return Jo(n);
  }
  function L0(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var la = typeof Object.is == "function" ? Object.is : L0;
  function pn(l, n) {
    if (la(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var r = u[c];
      if (!mr.call(n, r) || !la(l[r], n[r]))
        return !1;
    }
    return !0;
  }
  function $m(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function km(l, n) {
    var u = $m(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      t: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break t;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = $m(u);
    }
  }
  function Bc(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Bc(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Gi(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = gr(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = gr(l.document);
    }
    return n;
  }
  function Dr(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var Rr = Pu && "documentMode" in document && 11 >= document.documentMode, Xi = null, Ko = null, gn = null, Yn = !1;
  function _d(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Yn || Xi == null || Xi !== gr(c) || (c = Xi, "selectionStart" in c && Dr(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), gn && pn(gn, c) || (gn = c, c = Ts(Ko, "onSelect"), 0 < c.length && (n = new Or(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = Xi)));
  }
  function ei(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var qn = {
    animationend: ei("Animation", "AnimationEnd"),
    animationiteration: ei("Animation", "AnimationIteration"),
    animationstart: ei("Animation", "AnimationStart"),
    transitionrun: ei("Transition", "TransitionRun"),
    transitionstart: ei("Transition", "TransitionStart"),
    transitioncancel: ei("Transition", "TransitionCancel"),
    transitionend: ei("Transition", "TransitionEnd")
  }, $o = {}, Qi = {};
  Pu && (Qi = document.createElement("div").style, "AnimationEvent" in window || (delete qn.animationend.animation, delete qn.animationiteration.animation, delete qn.animationstart.animation), "TransitionEvent" in window || delete qn.transitionend.transition);
  function ve(l) {
    if ($o[l]) return $o[l];
    if (!qn[l]) return l;
    var n = qn[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Qi)
        return $o[l] = n[u];
    return l;
  }
  var Mr = ve("animationend"), Wm = ve("animationiteration"), zd = ve("animationstart"), jc = ve("transitionrun"), Cr = ve("transitionstart"), yu = ve("transitioncancel"), V0 = ve("transitionend"), pu = /* @__PURE__ */ new Map(), ko = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ko.push("scrollEnd");
  function sa(l, n) {
    pu.set(l, n), Bi(n, [l]);
  }
  var Yc = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, Ke = [], Nl = 0, vn = 0;
  function Va() {
    for (var l = Nl, n = vn = Nl = 0; n < l; ) {
      var u = Ke[n];
      Ke[n++] = null;
      var c = Ke[n];
      Ke[n++] = null;
      var r = Ke[n];
      Ke[n++] = null;
      var s = Ke[n];
      if (Ke[n++] = null, c !== null && r !== null) {
        var m = c.pending;
        m === null ? r.next = r : (r.next = m.next, m.next = r), c.pending = r;
      }
      s !== 0 && Dd(u, r, s);
    }
  }
  function Za(l, n, u, c) {
    Ke[Nl++] = l, Ke[Nl++] = n, Ke[Nl++] = u, Ke[Nl++] = c, vn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function Sn(l, n, u, c) {
    return Za(l, n, u, c), Ur(l);
  }
  function li(l, n) {
    return Za(l, null, null, n), Ur(l);
  }
  function Dd(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var r = !1, s = l.return; s !== null; )
      s.childLanes |= u, c = s.alternate, c !== null && (c.childLanes |= u), s.tag === 22 && (l = s.stateNode, l === null || l._visibility & 1 || (r = !0)), l = s, s = s.return;
    return l.tag === 3 ? (s = l.stateNode, r && n !== null && (r = 31 - Ul(u), l = s.hiddenUpdates, c = l[r], c === null ? l[r] = [n] : c.push(n), n.lane = u | 536870912), s) : null;
  }
  function Ur(l) {
    if (50 < Af)
      throw Af = 0, hs = null, Error(C(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var da = {};
  function Z0(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function il(l, n, u, c) {
    return new Z0(l, n, u, c);
  }
  function qc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function ai(l, n) {
    var u = l.alternate;
    return u === null ? (u = il(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Fm(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function Rd(l, n, u, c, r, s) {
    var m = 0;
    if (c = l, typeof l == "function") qc(l) && (m = 1);
    else if (typeof l == "string")
      m = bp(
        l,
        u,
        F.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      t: switch (l) {
        case ze:
          return l = il(31, u, n, r), l.elementType = ze, l.lanes = s, l;
        case De:
          return ni(u.children, r, s, n);
        case re:
          m = 8, r |= 24;
          break;
        case ae:
          return l = il(12, u, n, r | 2), l.elementType = ae, l.lanes = s, l;
        case tl:
          return l = il(13, u, n, r), l.elementType = tl, l.lanes = s, l;
        case ul:
          return l = il(19, u, n, r), l.elementType = ul, l.lanes = s, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case xe:
                m = 10;
                break t;
              case Tl:
                m = 9;
                break t;
              case Je:
                m = 11;
                break t;
              case Rt:
                m = 14;
                break t;
              case Jt:
                m = 16, c = null;
                break t;
            }
          m = 29, u = Error(
            C(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = il(m, u, n, r), n.elementType = l, n.type = c, n.lanes = s, n;
  }
  function ni(l, n, u, c) {
    return l = il(7, l, c, n), l.lanes = u, l;
  }
  function Wo(l, n, u) {
    return l = il(6, l, null, n), l.lanes = u, l;
  }
  function Im(l) {
    var n = il(18, null, null, 0);
    return n.stateNode = l, n;
  }
  function Md(l, n, u) {
    return n = il(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var Pm = /* @__PURE__ */ new WeakMap();
  function Ja(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = Pm.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: Sc(n)
      }, Pm.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: Sc(n)
    };
  }
  var Ka = [], wc = 0, Hr = null, sl = 0, za = [], ha = 0, wn = null, Da = 1, Gn = "";
  function bn(l, n) {
    Ka[wc++] = sl, Ka[wc++] = Hr, Hr = l, sl = n;
  }
  function ty(l, n, u) {
    za[ha++] = Da, za[ha++] = Gn, za[ha++] = wn, wn = l;
    var c = Da;
    l = Gn;
    var r = 32 - Ul(c) - 1;
    c &= ~(1 << r), u += 1;
    var s = 32 - Ul(n) + r;
    if (30 < s) {
      var m = r - r % 5;
      s = (c & (1 << m) - 1).toString(32), c >>= m, r -= m, Da = 1 << 32 - Ul(n) + r | u << r | c, Gn = s + l;
    } else
      Da = 1 << s | u << r | c, Gn = l;
  }
  function Fo(l) {
    l.return !== null && (bn(l, 1), ty(l, 1, 0));
  }
  function Cd(l) {
    for (; l === Hr; )
      Hr = Ka[--wc], Ka[wc] = null, sl = Ka[--wc], Ka[wc] = null;
    for (; l === wn; )
      wn = za[--ha], za[ha] = null, Gn = za[--ha], za[ha] = null, Da = za[--ha], za[ha] = null;
  }
  function Nr(l, n) {
    za[ha++] = Da, za[ha++] = Gn, za[ha++] = wn, Da = n.id, Gn = n.overflow, wn = l;
  }
  var xl = null, Ye = null, ue = !1, gu = null, Ol = !1, vu = Error(C(519));
  function En(l) {
    var n = Error(
      C(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Po(Ja(n, l)), vu;
  }
  function xr(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[Re] = l, n[fa] = c, u) {
      case "dialog":
        ne("cancel", n), ne("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        ne("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Mf.length; u++)
          ne(Mf[u], n);
        break;
      case "source":
        ne("error", n);
        break;
      case "img":
      case "image":
      case "link":
        ne("error", n), ne("load", n);
        break;
      case "details":
        ne("toggle", n);
        break;
      case "input":
        ne("invalid", n), Sr(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        );
        break;
      case "select":
        ne("invalid", n);
        break;
      case "textarea":
        ne("invalid", n), Cm(n, c.value, c.defaultValue, c.children);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || fp(n.textContent, u) ? (c.popover != null && (ne("beforetoggle", n), ne("toggle", n)), c.onScroll != null && ne("scroll", n), c.onScrollEnd != null && ne("scrollend", n), c.onClick != null && (n.onclick = Hn), n = !0) : n = !1, n || En(l, !0);
  }
  function Io(l) {
    for (xl = l.return; xl; )
      switch (xl.tag) {
        case 5:
        case 31:
        case 13:
          Ol = !1;
          return;
        case 27:
        case 3:
          Ol = !0;
          return;
        default:
          xl = xl.return;
      }
  }
  function Su(l) {
    if (l !== xl) return !1;
    if (!ue) return Io(l), ue = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Uf(l.type, l.memoizedProps)), u = !u), u && Ye && En(l), Io(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(C(317));
      Ye = Nh(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(C(317));
      Ye = Nh(l);
    } else
      n === 27 ? (n = Ye, Fn(l.type) ? (l = _s, _s = null, Ye = l) : Ye = n) : Ye = xl ? Aa(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Li() {
    Ye = xl = null, ue = !1;
  }
  function ey() {
    var l = gu;
    return l !== null && (al === null ? al = l : al.push.apply(
      al,
      l
    ), gu = null), l;
  }
  function Po(l) {
    gu === null ? gu = [l] : gu.push(l);
  }
  var Ud = S(null), ui = null, Xn = null;
  function ma(l, n, u) {
    I(Ud, n._currentValue), n._currentValue = u;
  }
  function Qn(l) {
    l._currentValue = Ud.current, B(Ud);
  }
  function Hd(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function bu(l, n, u, c) {
    var r = l.child;
    for (r !== null && (r.return = l); r !== null; ) {
      var s = r.dependencies;
      if (s !== null) {
        var m = r.child;
        s = s.firstContext;
        t: for (; s !== null; ) {
          var v = s;
          s = r;
          for (var A = 0; A < n.length; A++)
            if (v.context === n[A]) {
              s.lanes |= u, v = s.alternate, v !== null && (v.lanes |= u), Hd(
                s.return,
                u,
                l
              ), c || (m = null);
              break t;
            }
          s = v.next;
        }
      } else if (r.tag === 18) {
        if (m = r.return, m === null) throw Error(C(341));
        m.lanes |= u, s = m.alternate, s !== null && (s.lanes |= u), Hd(m, u, l), m = null;
      } else m = r.child;
      if (m !== null) m.return = r;
      else
        for (m = r; m !== null; ) {
          if (m === l) {
            m = null;
            break;
          }
          if (r = m.sibling, r !== null) {
            r.return = m.return, m = r;
            break;
          }
          m = m.return;
        }
      r = m;
    }
  }
  function Bl(l, n, u, c) {
    l = null;
    for (var r = n, s = !1; r !== null; ) {
      if (!s) {
        if ((r.flags & 524288) !== 0) s = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var m = r.alternate;
        if (m === null) throw Error(C(387));
        if (m = m.memoizedProps, m !== null) {
          var v = r.type;
          la(r.pendingProps.value, m.value) || (l !== null ? l.push(v) : l = [v]);
        }
      } else if (r === At.current) {
        if (m = r.alternate, m === null) throw Error(C(387));
        m.memoizedState.memoizedState !== r.memoizedState.memoizedState && (l !== null ? l.push(Rs) : l = [Rs]);
      }
      r = r.return;
    }
    l !== null && bu(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function Gc(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!la(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Bt(l) {
    ui = l, Xn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function k(l) {
    return Br(ui, l);
  }
  function ii(l, n) {
    return ui === null && Bt(l), Br(l, n);
  }
  function Br(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, Xn === null) {
      if (l === null) throw Error(C(308));
      Xn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else Xn = Xn.next = n;
    return u;
  }
  var cl = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, ly = D.unstable_scheduleCallback, ay = D.unstable_NormalPriority, dl = {
    $$typeof: xe,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function jr() {
    return {
      controller: new cl(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Yr(l) {
    l.refCount--, l.refCount === 0 && ly(ay, function() {
      l.controller.abort();
    });
  }
  var Xc = null, qr = 0, Vi = 0, vl = null;
  function Te(l, n) {
    if (Xc === null) {
      var u = Xc = [];
      qr = 0, Vi = _h(), vl = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return qr++, n.then(wr, wr), n;
  }
  function wr() {
    if (--qr === 0 && Xc !== null) {
      vl !== null && (vl.status = "fulfilled");
      var l = Xc;
      Xc = null, Vi = 0, vl = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function Gr(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(r) {
        u.push(r);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var r = 0; r < u.length; r++) (0, u[r])(n);
      },
      function(r) {
        for (c.status = "rejected", c.reason = r, r = 0; r < u.length; r++)
          (0, u[r])(void 0);
      }
    ), c;
  }
  var ci = R.S;
  R.S = function(l, n) {
    Wy = gl(), typeof n == "object" && n !== null && typeof n.then == "function" && Te(l, n), ci !== null && ci(l, n);
  };
  var $a = S(null);
  function ka() {
    var l = $a.current;
    return l !== null ? l : Ce.pooledCache;
  }
  function tf(l, n) {
    n === null ? I($a, $a.current) : I($a, n.pool);
  }
  function Qc() {
    var l = ka();
    return l === null ? null : { parent: dl._currentValue, pool: l };
  }
  var Zi = Error(C(460)), Lc = Error(C(474)), ef = Error(C(542)), Vc = { then: function() {
  } };
  function ny(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function uy(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Hn, Hn), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, Nd(l), l;
      default:
        if (typeof n.status == "string") n.then(Hn, Hn);
        else {
          if (l = Ce, l !== null && 100 < l.shellSuspendCounter)
            throw Error(C(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var r = n;
                r.status = "fulfilled", r.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var r = n;
                r.status = "rejected", r.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, Nd(l), l;
        }
        throw Ki = n, Zi;
    }
  }
  function Ji(l) {
    try {
      var n = l._init;
      return n(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Ki = u, Zi) : u;
    }
  }
  var Ki = null;
  function iy() {
    if (Ki === null) throw Error(C(459));
    var l = Ki;
    return Ki = null, l;
  }
  function Nd(l) {
    if (l === Zi || l === ef)
      throw Error(C(483));
  }
  var $i = null, Zc = 0;
  function Xr(l) {
    var n = Zc;
    return Zc += 1, $i === null && ($i = []), uy($i, l, n);
  }
  function lf(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Qr(l, n) {
    throw n.$$typeof === N ? Error(C(525)) : (l = Object.prototype.toString.call(n), Error(
      C(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function J0(l) {
    function n(H, z) {
      if (l) {
        var x = H.deletions;
        x === null ? (H.deletions = [z], H.flags |= 16) : x.push(z);
      }
    }
    function u(H, z) {
      if (!l) return null;
      for (; z !== null; )
        n(H, z), z = z.sibling;
      return null;
    }
    function c(H) {
      for (var z = /* @__PURE__ */ new Map(); H !== null; )
        H.key !== null ? z.set(H.key, H) : z.set(H.index, H), H = H.sibling;
      return z;
    }
    function r(H, z) {
      return H = ai(H, z), H.index = 0, H.sibling = null, H;
    }
    function s(H, z, x) {
      return H.index = x, l ? (x = H.alternate, x !== null ? (x = x.index, x < z ? (H.flags |= 67108866, z) : x) : (H.flags |= 67108866, z)) : (H.flags |= 1048576, z);
    }
    function m(H) {
      return l && H.alternate === null && (H.flags |= 67108866), H;
    }
    function v(H, z, x, K) {
      return z === null || z.tag !== 6 ? (z = Wo(x, H.mode, K), z.return = H, z) : (z = r(z, x), z.return = H, z);
    }
    function A(H, z, x, K) {
      var Et = x.type;
      return Et === De ? L(
        H,
        z,
        x.props.children,
        K,
        x.key
      ) : z !== null && (z.elementType === Et || typeof Et == "object" && Et !== null && Et.$$typeof === Jt && Ji(Et) === z.type) ? (z = r(z, x.props), lf(z, x), z.return = H, z) : (z = Rd(
        x.type,
        x.key,
        x.props,
        null,
        H.mode,
        K
      ), lf(z, x), z.return = H, z);
    }
    function j(H, z, x, K) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== x.containerInfo || z.stateNode.implementation !== x.implementation ? (z = Md(x, H.mode, K), z.return = H, z) : (z = r(z, x.children || []), z.return = H, z);
    }
    function L(H, z, x, K, Et) {
      return z === null || z.tag !== 7 ? (z = ni(
        x,
        H.mode,
        K,
        Et
      ), z.return = H, z) : (z = r(z, x), z.return = H, z);
    }
    function $(H, z, x) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = Wo(
          "" + z,
          H.mode,
          x
        ), z.return = H, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case ot:
            return x = Rd(
              z.type,
              z.key,
              z.props,
              null,
              H.mode,
              x
            ), lf(x, z), x.return = H, x;
          case Zt:
            return z = Md(
              z,
              H.mode,
              x
            ), z.return = H, z;
          case Jt:
            return z = Ji(z), $(H, z, x);
        }
        if (je(z) || gt(z))
          return z = ni(
            z,
            H.mode,
            x,
            null
          ), z.return = H, z;
        if (typeof z.then == "function")
          return $(H, Xr(z), x);
        if (z.$$typeof === xe)
          return $(
            H,
            ii(H, z),
            x
          );
        Qr(H, z);
      }
      return null;
    }
    function Y(H, z, x, K) {
      var Et = z !== null ? z.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return Et !== null ? null : v(H, z, "" + x, K);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case ot:
            return x.key === Et ? A(H, z, x, K) : null;
          case Zt:
            return x.key === Et ? j(H, z, x, K) : null;
          case Jt:
            return x = Ji(x), Y(H, z, x, K);
        }
        if (je(x) || gt(x))
          return Et !== null ? null : L(H, z, x, K, null);
        if (typeof x.then == "function")
          return Y(
            H,
            z,
            Xr(x),
            K
          );
        if (x.$$typeof === xe)
          return Y(
            H,
            z,
            ii(H, x),
            K
          );
        Qr(H, x);
      }
      return null;
    }
    function X(H, z, x, K, Et) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return H = H.get(x) || null, v(z, H, "" + K, Et);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case ot:
            return H = H.get(
              K.key === null ? x : K.key
            ) || null, A(z, H, K, Et);
          case Zt:
            return H = H.get(
              K.key === null ? x : K.key
            ) || null, j(z, H, K, Et);
          case Jt:
            return K = Ji(K), X(
              H,
              z,
              x,
              K,
              Et
            );
        }
        if (je(K) || gt(K))
          return H = H.get(x) || null, L(z, H, K, Et, null);
        if (typeof K.then == "function")
          return X(
            H,
            z,
            x,
            Xr(K),
            Et
          );
        if (K.$$typeof === xe)
          return X(
            H,
            z,
            x,
            ii(z, K),
            Et
          );
        Qr(z, K);
      }
      return null;
    }
    function st(H, z, x, K) {
      for (var Et = null, de = null, pt = z, Xt = z = 0, $t = null; pt !== null && Xt < x.length; Xt++) {
        pt.index > Xt ? ($t = pt, pt = null) : $t = pt.sibling;
        var ge = Y(
          H,
          pt,
          x[Xt],
          K
        );
        if (ge === null) {
          pt === null && (pt = $t);
          break;
        }
        l && pt && ge.alternate === null && n(H, pt), z = s(ge, z, Xt), de === null ? Et = ge : de.sibling = ge, de = ge, pt = $t;
      }
      if (Xt === x.length)
        return u(H, pt), ue && bn(H, Xt), Et;
      if (pt === null) {
        for (; Xt < x.length; Xt++)
          pt = $(H, x[Xt], K), pt !== null && (z = s(
            pt,
            z,
            Xt
          ), de === null ? Et = pt : de.sibling = pt, de = pt);
        return ue && bn(H, Xt), Et;
      }
      for (pt = c(pt); Xt < x.length; Xt++)
        $t = X(
          pt,
          H,
          Xt,
          x[Xt],
          K
        ), $t !== null && (l && $t.alternate !== null && pt.delete(
          $t.key === null ? Xt : $t.key
        ), z = s(
          $t,
          z,
          Xt
        ), de === null ? Et = $t : de.sibling = $t, de = $t);
      return l && pt.forEach(function(tu) {
        return n(H, tu);
      }), ue && bn(H, Xt), Et;
    }
    function Dt(H, z, x, K) {
      if (x == null) throw Error(C(151));
      for (var Et = null, de = null, pt = z, Xt = z = 0, $t = null, ge = x.next(); pt !== null && !ge.done; Xt++, ge = x.next()) {
        pt.index > Xt ? ($t = pt, pt = null) : $t = pt.sibling;
        var tu = Y(H, pt, ge.value, K);
        if (tu === null) {
          pt === null && (pt = $t);
          break;
        }
        l && pt && tu.alternate === null && n(H, pt), z = s(tu, z, Xt), de === null ? Et = tu : de.sibling = tu, de = tu, pt = $t;
      }
      if (ge.done)
        return u(H, pt), ue && bn(H, Xt), Et;
      if (pt === null) {
        for (; !ge.done; Xt++, ge = x.next())
          ge = $(H, ge.value, K), ge !== null && (z = s(ge, z, Xt), de === null ? Et = ge : de.sibling = ge, de = ge);
        return ue && bn(H, Xt), Et;
      }
      for (pt = c(pt); !ge.done; Xt++, ge = x.next())
        ge = X(pt, H, Xt, ge.value, K), ge !== null && (l && ge.alternate !== null && pt.delete(ge.key === null ? Xt : ge.key), z = s(ge, z, Xt), de === null ? Et = ge : de.sibling = ge, de = ge);
      return l && pt.forEach(function(Wg) {
        return n(H, Wg);
      }), ue && bn(H, Xt), Et;
    }
    function He(H, z, x, K) {
      if (typeof x == "object" && x !== null && x.type === De && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case ot:
            t: {
              for (var Et = x.key; z !== null; ) {
                if (z.key === Et) {
                  if (Et = x.type, Et === De) {
                    if (z.tag === 7) {
                      u(
                        H,
                        z.sibling
                      ), K = r(
                        z,
                        x.props.children
                      ), K.return = H, H = K;
                      break t;
                    }
                  } else if (z.elementType === Et || typeof Et == "object" && Et !== null && Et.$$typeof === Jt && Ji(Et) === z.type) {
                    u(
                      H,
                      z.sibling
                    ), K = r(z, x.props), lf(K, x), K.return = H, H = K;
                    break t;
                  }
                  u(H, z);
                  break;
                } else n(H, z);
                z = z.sibling;
              }
              x.type === De ? (K = ni(
                x.props.children,
                H.mode,
                K,
                x.key
              ), K.return = H, H = K) : (K = Rd(
                x.type,
                x.key,
                x.props,
                null,
                H.mode,
                K
              ), lf(K, x), K.return = H, H = K);
            }
            return m(H);
          case Zt:
            t: {
              for (Et = x.key; z !== null; ) {
                if (z.key === Et)
                  if (z.tag === 4 && z.stateNode.containerInfo === x.containerInfo && z.stateNode.implementation === x.implementation) {
                    u(
                      H,
                      z.sibling
                    ), K = r(z, x.children || []), K.return = H, H = K;
                    break t;
                  } else {
                    u(H, z);
                    break;
                  }
                else n(H, z);
                z = z.sibling;
              }
              K = Md(x, H.mode, K), K.return = H, H = K;
            }
            return m(H);
          case Jt:
            return x = Ji(x), He(
              H,
              z,
              x,
              K
            );
        }
        if (je(x))
          return st(
            H,
            z,
            x,
            K
          );
        if (gt(x)) {
          if (Et = gt(x), typeof Et != "function") throw Error(C(150));
          return x = Et.call(x), Dt(
            H,
            z,
            x,
            K
          );
        }
        if (typeof x.then == "function")
          return He(
            H,
            z,
            Xr(x),
            K
          );
        if (x.$$typeof === xe)
          return He(
            H,
            z,
            ii(H, x),
            K
          );
        Qr(H, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, z !== null && z.tag === 6 ? (u(H, z.sibling), K = r(z, x), K.return = H, H = K) : (u(H, z), K = Wo(x, H.mode, K), K.return = H, H = K), m(H)) : u(H, z);
    }
    return function(H, z, x, K) {
      try {
        Zc = 0;
        var Et = He(
          H,
          z,
          x,
          K
        );
        return $i = null, Et;
      } catch (pt) {
        if (pt === Zi || pt === ef) throw pt;
        var de = il(29, pt, null, H.mode);
        return de.lanes = K, de.return = H, de;
      }
    };
  }
  var ki = J0(!0), cy = J0(!1), oi = !1;
  function Lr(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function xd(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function fi(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Wa(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (pe & 2) !== 0) {
      var r = c.pending;
      return r === null ? n.next = n : (n.next = r.next, r.next = n), c.pending = n, n = Ur(l), Dd(l, null, u), n;
    }
    return Za(l, c, n, u), Ur(l);
  }
  function Wi(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, ou(l, u);
    }
  }
  function Bd(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var r = null, s = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          s === null ? r = s = m : s = s.next = m, u = u.next;
        } while (u !== null);
        s === null ? r = s = n : s = s.next = n;
      } else r = s = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: s,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var oy = !1;
  function Fi() {
    if (oy) {
      var l = vl;
      if (l !== null) throw l;
    }
  }
  function Eu(l, n, u, c) {
    oy = !1;
    var r = l.updateQueue;
    oi = !1;
    var s = r.firstBaseUpdate, m = r.lastBaseUpdate, v = r.shared.pending;
    if (v !== null) {
      r.shared.pending = null;
      var A = v, j = A.next;
      A.next = null, m === null ? s = j : m.next = j, m = A;
      var L = l.alternate;
      L !== null && (L = L.updateQueue, v = L.lastBaseUpdate, v !== m && (v === null ? L.firstBaseUpdate = j : v.next = j, L.lastBaseUpdate = A));
    }
    if (s !== null) {
      var $ = r.baseState;
      m = 0, L = j = A = null, v = s;
      do {
        var Y = v.lane & -536870913, X = Y !== v.lane;
        if (X ? (ee & Y) === Y : (c & Y) === Y) {
          Y !== 0 && Y === Vi && (oy = !0), L !== null && (L = L.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          t: {
            var st = l, Dt = v;
            Y = n;
            var He = u;
            switch (Dt.tag) {
              case 1:
                if (st = Dt.payload, typeof st == "function") {
                  $ = st.call(He, $, Y);
                  break t;
                }
                $ = st;
                break t;
              case 3:
                st.flags = st.flags & -65537 | 128;
              case 0:
                if (st = Dt.payload, Y = typeof st == "function" ? st.call(He, $, Y) : st, Y == null) break t;
                $ = Q({}, $, Y);
                break t;
              case 2:
                oi = !0;
            }
          }
          Y = v.callback, Y !== null && (l.flags |= 64, X && (l.flags |= 8192), X = r.callbacks, X === null ? r.callbacks = [Y] : X.push(Y));
        } else
          X = {
            lane: Y,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, L === null ? (j = L = X, A = $) : L = L.next = X, m |= Y;
        if (v = v.next, v === null) {
          if (v = r.shared.pending, v === null)
            break;
          X = v, v = X.next, X.next = null, r.lastBaseUpdate = X, r.shared.pending = null;
        }
      } while (!0);
      L === null && (A = $), r.baseState = A, r.firstBaseUpdate = j, r.lastBaseUpdate = L, s === null && (r.shared.lanes = 0), kn |= m, l.lanes = m, l.memoizedState = $;
    }
  }
  function jd(l, n) {
    if (typeof l != "function")
      throw Error(C(191, l));
    l.call(n);
  }
  function Ii(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        jd(u[l], n);
  }
  var _l = S(null), Jc = S(0);
  function K0(l, n) {
    l = $n, I(Jc, l), I(_l, n), $n = l | n.baseLanes;
  }
  function Vr() {
    I(Jc, $n), I(_l, _l.current);
  }
  function af() {
    $n = Jc.current, B(_l), B(Jc);
  }
  var ya = S(null), Fa = null;
  function Tu(l) {
    var n = l.alternate;
    I($e, $e.current & 1), I(ya, l), Fa === null && (n === null || _l.current !== null || n.memoizedState !== null) && (Fa = l);
  }
  function nf(l) {
    I($e, $e.current), I(ya, l), Fa === null && (Fa = l);
  }
  function Yd(l) {
    l.tag === 22 ? (I($e, $e.current), I(ya, l), Fa === null && (Fa = l)) : Ln();
  }
  function Ln() {
    I($e, $e.current), I(ya, ya.current);
  }
  function pa(l) {
    B(ya), Fa === l && (Fa = null), B($e);
  }
  var $e = S(0);
  function uf(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || _n(u) || rc(u)))
          return n;
      } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Au = 0, Qt = null, Ae = null, hl = null, Kc = !1, $c = !1, ri = !1, Zr = 0, cf = 0, Pi = null, $0 = 0;
  function el() {
    throw Error(C(321));
  }
  function si(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!la(l[u], n[u])) return !1;
    return !0;
  }
  function Jr(l, n, u, c, r, s) {
    return Au = s, Qt = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, R.H = l === null || l.memoizedState === null ? lg : th, ri = !1, s = u(c, r), ri = !1, $c && (s = k0(
      n,
      u,
      c,
      r
    )), qd(l), s;
  }
  function qd(l) {
    R.H = es;
    var n = Ae !== null && Ae.next !== null;
    if (Au = 0, hl = Ae = Qt = null, Kc = !1, cf = 0, Pi = null, n) throw Error(C(300));
    l === null || ml || (l = l.dependencies, l !== null && Gc(l) && (ml = !0));
  }
  function k0(l, n, u, c) {
    Qt = l;
    var r = 0;
    do {
      if ($c && (Pi = null), cf = 0, $c = !1, 25 <= r) throw Error(C(301));
      if (r += 1, hl = Ae = null, l.updateQueue != null) {
        var s = l.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      R.H = ag, s = n(u, c);
    } while ($c);
    return s;
  }
  function u1() {
    var l = R.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Wc(n) : n, l = l.useState()[0], (Ae !== null ? Ae.memoizedState : null) !== l && (Qt.flags |= 1024), n;
  }
  function wd() {
    var l = Zr !== 0;
    return Zr = 0, l;
  }
  function kc(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Kr(l) {
    if (Kc) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Kc = !1;
    }
    Au = 0, hl = Ae = Qt = null, $c = !1, cf = Zr = 0, Pi = null;
  }
  function jl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return hl === null ? Qt.memoizedState = hl = l : hl = hl.next = l, hl;
  }
  function ol() {
    if (Ae === null) {
      var l = Qt.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = Ae.next;
    var n = hl === null ? Qt.memoizedState : hl.next;
    if (n !== null)
      hl = n, Ae = l;
    else {
      if (l === null)
        throw Qt.alternate === null ? Error(C(467)) : Error(C(310));
      Ae = l, l = {
        memoizedState: Ae.memoizedState,
        baseState: Ae.baseState,
        baseQueue: Ae.baseQueue,
        queue: Ae.queue,
        next: null
      }, hl === null ? Qt.memoizedState = hl = l : hl = hl.next = l;
    }
    return hl;
  }
  function $r() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Wc(l) {
    var n = cf;
    return cf += 1, Pi === null && (Pi = []), l = uy(Pi, l, n), n = Qt, (hl === null ? n.memoizedState : hl.next) === null && (n = n.alternate, R.H = n === null || n.memoizedState === null ? lg : th), l;
  }
  function of(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Wc(l);
      if (l.$$typeof === xe) return k(l);
    }
    throw Error(C(438, String(l)));
  }
  function Gd(l) {
    var n = null, u = Qt.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = Qt.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(r) {
          return r.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = $r(), Qt.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = dt;
    return n.index++, u;
  }
  function Ou(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function _u(l) {
    var n = ol();
    return Xd(n, Ae, l);
  }
  function Xd(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(C(311));
    c.lastRenderedReducer = u;
    var r = l.baseQueue, s = c.pending;
    if (s !== null) {
      if (r !== null) {
        var m = r.next;
        r.next = s.next, s.next = m;
      }
      n.baseQueue = r = s, c.pending = null;
    }
    if (s = l.baseState, r === null) l.memoizedState = s;
    else {
      n = r.next;
      var v = m = null, A = null, j = n, L = !1;
      do {
        var $ = j.lane & -536870913;
        if ($ !== j.lane ? (ee & $) === $ : (Au & $) === $) {
          var Y = j.revertLane;
          if (Y === 0)
            A !== null && (A = A.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            }), $ === Vi && (L = !0);
          else if ((Au & Y) === Y) {
            j = j.next, Y === Vi && (L = !0);
            continue;
          } else
            $ = {
              lane: 0,
              revertLane: j.revertLane,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            }, A === null ? (v = A = $, m = s) : A = A.next = $, Qt.lanes |= Y, kn |= Y;
          $ = j.action, ri && u(s, $), s = j.hasEagerState ? j.eagerState : u(s, $);
        } else
          Y = {
            lane: $,
            revertLane: j.revertLane,
            gesture: j.gesture,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null
          }, A === null ? (v = A = Y, m = s) : A = A.next = Y, Qt.lanes |= $, kn |= $;
        j = j.next;
      } while (j !== null && j !== n);
      if (A === null ? m = s : A.next = v, !la(s, l.memoizedState) && (ml = !0, L && (u = vl, u !== null)))
        throw u;
      l.memoizedState = s, l.baseState = m, l.baseQueue = A, c.lastRenderedState = s;
    }
    return r === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Qd(l) {
    var n = ol(), u = n.queue;
    if (u === null) throw Error(C(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, r = u.pending, s = n.memoizedState;
    if (r !== null) {
      u.pending = null;
      var m = r = r.next;
      do
        s = l(s, m.action), m = m.next;
      while (m !== r);
      la(s, n.memoizedState) || (ml = !0), n.memoizedState = s, n.baseQueue === null && (n.baseState = s), u.lastRenderedState = s;
    }
    return [s, c];
  }
  function fy(l, n, u) {
    var c = Qt, r = ol(), s = ue;
    if (s) {
      if (u === void 0) throw Error(C(407));
      u = u();
    } else u = n();
    var m = !la(
      (Ae || r).memoizedState,
      u
    );
    if (m && (r.memoizedState = u, ml = !0), r = r.queue, Kd(Ld.bind(null, c, r, l), [
      l
    ]), r.getSnapshot !== n || m || hl !== null && hl.memoizedState.tag & 1) {
      if (c.flags |= 2048, Ic(
        9,
        { destroy: void 0 },
        ry.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), Ce === null) throw Error(C(349));
      s || (Au & 127) !== 0 || kr(c, n, u);
    }
    return u;
  }
  function kr(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = Qt.updateQueue, n === null ? (n = $r(), Qt.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function ry(l, n, u, c) {
    n.value = u, n.getSnapshot = c, Vd(n) && Zd(l);
  }
  function Ld(l, n, u) {
    return u(function() {
      Vd(n) && Zd(l);
    });
  }
  function Vd(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !la(l, u);
    } catch {
      return !0;
    }
  }
  function Zd(l) {
    var n = li(l, 2);
    n !== null && Ta(n, l, 2);
  }
  function sy(l) {
    var n = jl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), ri) {
        Ga(!0);
        try {
          u();
        } finally {
          Ga(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ou,
      lastRenderedState: l
    }, n;
  }
  function Yl(l, n, u, c) {
    return l.baseState = u, Xd(
      l,
      Ae,
      typeof c == "function" ? c : Ou
    );
  }
  function W0(l, n, u, c, r) {
    if (ts(l)) throw Error(C(485));
    if (l = n.action, l !== null) {
      var s = {
        payload: r,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          s.listeners.push(m);
        }
      };
      R.T !== null ? u(!0) : s.isTransition = !1, c(s), u = n.pending, u === null ? (s.next = n.pending = s, dy(n, s)) : (s.next = u.next, n.pending = u.next = s);
    }
  }
  function dy(l, n) {
    var u = n.action, c = n.payload, r = l.state;
    if (n.isTransition) {
      var s = R.T, m = {};
      R.T = m;
      try {
        var v = u(r, c), A = R.S;
        A !== null && A(m, v), hy(l, n, v);
      } catch (j) {
        Fc(l, n, j);
      } finally {
        s !== null && m.types !== null && (s.types = m.types), R.T = s;
      }
    } else
      try {
        s = u(r, c), hy(l, n, s);
      } catch (j) {
        Fc(l, n, j);
      }
  }
  function hy(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        my(l, n, c);
      },
      function(c) {
        return Fc(l, n, c);
      }
    ) : my(l, n, u);
  }
  function my(l, n, u) {
    n.status = "fulfilled", n.value = u, yy(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, dy(l, u)));
  }
  function Fc(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, yy(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function yy(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Wr(l, n) {
    return n;
  }
  function py(l, n) {
    if (ue) {
      var u = Ce.formState;
      if (u !== null) {
        t: {
          var c = Qt;
          if (ue) {
            if (Ye) {
              e: {
                for (var r = Ye, s = Ol; r.nodeType !== 8; ) {
                  if (!s) {
                    r = null;
                    break e;
                  }
                  if (r = Aa(
                    r.nextSibling
                  ), r === null) {
                    r = null;
                    break e;
                  }
                }
                s = r.data, r = s === "F!" || s === "F" ? r : null;
              }
              if (r) {
                Ye = Aa(
                  r.nextSibling
                ), c = r.data === "F!";
                break t;
              }
            }
            En(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = jl(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wr,
      lastRenderedState: n
    }, u.queue = c, u = Id.bind(
      null,
      Qt,
      c
    ), c.dispatch = u, c = sy(!1), s = tc.bind(
      null,
      Qt,
      !1,
      c.queue
    ), c = jl(), r = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = r, u = W0.bind(
      null,
      Qt,
      r,
      s,
      u
    ), r.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function F0(l) {
    var n = ol();
    return Fr(n, Ae, l);
  }
  function Fr(l, n, u) {
    if (n = Xd(
      l,
      n,
      Wr
    )[0], l = _u(Ou)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = Wc(n);
      } catch (m) {
        throw m === Zi ? ef : m;
      }
    else c = n;
    n = ol();
    var r = n.queue, s = r.dispatch;
    return u !== n.memoizedState && (Qt.flags |= 2048, Ic(
      9,
      { destroy: void 0 },
      gy.bind(null, r, u),
      null
    )), [c, s, l];
  }
  function gy(l, n) {
    l.action = n;
  }
  function vy(l) {
    var n = ol(), u = Ae;
    if (u !== null)
      return Fr(n, u, l);
    ol(), n = n.memoizedState, u = ol();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Ic(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = Qt.updateQueue, n === null && (n = $r(), Qt.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function Sy() {
    return ol().memoizedState;
  }
  function ff(l, n, u, c) {
    var r = jl();
    Qt.flags |= l, r.memoizedState = Ic(
      1 | n,
      { destroy: void 0 },
      u,
      c === void 0 ? null : c
    );
  }
  function rf(l, n, u, c) {
    var r = ol();
    c = c === void 0 ? null : c;
    var s = r.memoizedState.inst;
    Ae !== null && c !== null && si(c, Ae.memoizedState.deps) ? r.memoizedState = Ic(n, s, u, c) : (Qt.flags |= l, r.memoizedState = Ic(
      1 | n,
      s,
      u,
      c
    ));
  }
  function Jd(l, n) {
    ff(8390656, 8, l, n);
  }
  function Kd(l, n) {
    rf(2048, 8, l, n);
  }
  function by(l) {
    Qt.flags |= 4;
    var n = Qt.updateQueue;
    if (n === null)
      n = $r(), Qt.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function Ir(l) {
    var n = ol().memoizedState;
    return by({ ref: n, nextImpl: l }), function() {
      if ((pe & 2) !== 0) throw Error(C(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function $d(l, n) {
    return rf(4, 2, l, n);
  }
  function Ey(l, n) {
    return rf(4, 4, l, n);
  }
  function kd(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function Ty(l, n, u) {
    u = u != null ? u.concat([l]) : null, rf(4, 4, kd.bind(null, n, l), u);
  }
  function Vn() {
  }
  function Wd(l, n) {
    var u = ol();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && si(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function I0(l, n) {
    var u = ol();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && si(n, c[1]))
      return c[0];
    if (c = l(), ri) {
      Ga(!0);
      try {
        l();
      } finally {
        Ga(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function Pr(l, n, u) {
    return u === void 0 || (Au & 1073741824) !== 0 && (ee & 261930) === 0 ? l.memoizedState = n : (l.memoizedState = u, l = hg(), Qt.lanes |= l, kn |= l, u);
  }
  function zu(l, n, u, c) {
    return la(u, n) ? u : _l.current !== null ? (l = Pr(l, u, c), la(l, n) || (ml = !0), l) : (Au & 42) === 0 || (Au & 1073741824) !== 0 && (ee & 261930) === 0 ? (ml = !0, l.memoizedState = u) : (l = hg(), Qt.lanes |= l, kn |= l, n);
  }
  function Fd(l, n, u, c, r) {
    var s = Z.p;
    Z.p = s !== 0 && 8 > s ? s : 8;
    var m = R.T, v = {};
    R.T = v, tc(l, !1, n, u);
    try {
      var A = r(), j = R.S;
      if (j !== null && j(v, A), A !== null && typeof A == "object" && typeof A.then == "function") {
        var L = Gr(
          A,
          c
        );
        di(
          l,
          n,
          L,
          Ua(l)
        );
      } else
        di(
          l,
          n,
          c,
          Ua(l)
        );
    } catch ($) {
      di(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: $ },
        Ua()
      );
    } finally {
      Z.p = s, m !== null && v.types !== null && (m.types = v.types), R.T = m;
    }
  }
  function P0() {
  }
  function sf(l, n, u, c) {
    if (l.tag !== 5) throw Error(C(476));
    var r = df(l).queue;
    Fd(
      l,
      r,
      n,
      et,
      u === null ? P0 : function() {
        return Me(l), u(c);
      }
    );
  }
  function df(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: et,
      baseState: et,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ou,
        lastRenderedState: et
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ou,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function Me(l) {
    var n = df(l);
    n.next === null && (n = l.alternate.memoizedState), di(
      l,
      n.next.queue,
      {},
      Ua()
    );
  }
  function Ay() {
    return k(Rs);
  }
  function tg() {
    return ol().memoizedState;
  }
  function Oy() {
    return ol().memoizedState;
  }
  function Du(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = Ua();
          l = fi(u);
          var c = Wa(n, l, u);
          c !== null && (Ta(c, n, u), Wi(c, n, u)), n = { cache: jr() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function eg(l, n, u) {
    var c = Ua();
    u = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ts(l) ? Pd(n, u) : (u = Sn(l, n, u, c), u !== null && (Ta(u, l, c), _y(u, n, c)));
  }
  function Id(l, n, u) {
    var c = Ua();
    di(l, n, u, c);
  }
  function di(l, n, u, c) {
    var r = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ts(l)) Pd(n, r);
    else {
      var s = l.alternate;
      if (l.lanes === 0 && (s === null || s.lanes === 0) && (s = n.lastRenderedReducer, s !== null))
        try {
          var m = n.lastRenderedState, v = s(m, u);
          if (r.hasEagerState = !0, r.eagerState = v, la(v, m))
            return Za(l, n, r, 0), Ce === null && Va(), !1;
        } catch {
        }
      if (u = Sn(l, n, r, c), u !== null)
        return Ta(u, l, c), _y(u, n, c), !0;
    }
    return !1;
  }
  function tc(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: _h(),
      gesture: null,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ts(l)) {
      if (n) throw Error(C(479));
    } else
      n = Sn(
        l,
        u,
        c,
        2
      ), n !== null && Ta(n, l, 2);
  }
  function ts(l) {
    var n = l.alternate;
    return l === Qt || n !== null && n === Qt;
  }
  function Pd(l, n) {
    $c = Kc = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function _y(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, ou(l, u);
    }
  }
  var es = {
    readContext: k,
    use: of,
    useCallback: el,
    useContext: el,
    useEffect: el,
    useImperativeHandle: el,
    useLayoutEffect: el,
    useInsertionEffect: el,
    useMemo: el,
    useReducer: el,
    useRef: el,
    useState: el,
    useDebugValue: el,
    useDeferredValue: el,
    useTransition: el,
    useSyncExternalStore: el,
    useId: el,
    useHostTransitionStatus: el,
    useFormState: el,
    useActionState: el,
    useOptimistic: el,
    useMemoCache: el,
    useCacheRefresh: el
  };
  es.useEffectEvent = el;
  var lg = {
    readContext: k,
    use: of,
    useCallback: function(l, n) {
      return jl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: k,
    useEffect: Jd,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, ff(
        4194308,
        4,
        kd.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return ff(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      ff(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = jl();
      n = n === void 0 ? null : n;
      var c = l();
      if (ri) {
        Ga(!0);
        try {
          l();
        } finally {
          Ga(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = jl();
      if (u !== void 0) {
        var r = u(n);
        if (ri) {
          Ga(!0);
          try {
            u(n);
          } finally {
            Ga(!1);
          }
        }
      } else r = n;
      return c.memoizedState = c.baseState = r, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: r
      }, c.queue = l, l = l.dispatch = eg.bind(
        null,
        Qt,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = jl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = sy(l);
      var n = l.queue, u = Id.bind(null, Qt, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Vn,
    useDeferredValue: function(l, n) {
      var u = jl();
      return Pr(u, l, n);
    },
    useTransition: function() {
      var l = sy(!1);
      return l = Fd.bind(
        null,
        Qt,
        l.queue,
        !0,
        !1
      ), jl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = Qt, r = jl();
      if (ue) {
        if (u === void 0)
          throw Error(C(407));
        u = u();
      } else {
        if (u = n(), Ce === null)
          throw Error(C(349));
        (ee & 127) !== 0 || kr(c, n, u);
      }
      r.memoizedState = u;
      var s = { value: u, getSnapshot: n };
      return r.queue = s, Jd(Ld.bind(null, c, s, l), [
        l
      ]), c.flags |= 2048, Ic(
        9,
        { destroy: void 0 },
        ry.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = jl(), n = Ce.identifierPrefix;
      if (ue) {
        var u = Gn, c = Da;
        u = (c & ~(1 << 32 - Ul(c) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = Zr++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = $0++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Ay,
    useFormState: py,
    useActionState: py,
    useOptimistic: function(l) {
      var n = jl();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = tc.bind(
        null,
        Qt,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Gd,
    useCacheRefresh: function() {
      return jl().memoizedState = Du.bind(
        null,
        Qt
      );
    },
    useEffectEvent: function(l) {
      var n = jl(), u = { impl: l };
      return n.memoizedState = u, function() {
        if ((pe & 2) !== 0)
          throw Error(C(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, th = {
    readContext: k,
    use: of,
    useCallback: Wd,
    useContext: k,
    useEffect: Kd,
    useImperativeHandle: Ty,
    useInsertionEffect: $d,
    useLayoutEffect: Ey,
    useMemo: I0,
    useReducer: _u,
    useRef: Sy,
    useState: function() {
      return _u(Ou);
    },
    useDebugValue: Vn,
    useDeferredValue: function(l, n) {
      var u = ol();
      return zu(
        u,
        Ae.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = _u(Ou)[0], n = ol().memoizedState;
      return [
        typeof l == "boolean" ? l : Wc(l),
        n
      ];
    },
    useSyncExternalStore: fy,
    useId: tg,
    useHostTransitionStatus: Ay,
    useFormState: F0,
    useActionState: F0,
    useOptimistic: function(l, n) {
      var u = ol();
      return Yl(u, Ae, l, n);
    },
    useMemoCache: Gd,
    useCacheRefresh: Oy
  };
  th.useEffectEvent = Ir;
  var ag = {
    readContext: k,
    use: of,
    useCallback: Wd,
    useContext: k,
    useEffect: Kd,
    useImperativeHandle: Ty,
    useInsertionEffect: $d,
    useLayoutEffect: Ey,
    useMemo: I0,
    useReducer: Qd,
    useRef: Sy,
    useState: function() {
      return Qd(Ou);
    },
    useDebugValue: Vn,
    useDeferredValue: function(l, n) {
      var u = ol();
      return Ae === null ? Pr(u, l, n) : zu(
        u,
        Ae.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Qd(Ou)[0], n = ol().memoizedState;
      return [
        typeof l == "boolean" ? l : Wc(l),
        n
      ];
    },
    useSyncExternalStore: fy,
    useId: tg,
    useHostTransitionStatus: Ay,
    useFormState: vy,
    useActionState: vy,
    useOptimistic: function(l, n) {
      var u = ol();
      return Ae !== null ? Yl(u, Ae, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Gd,
    useCacheRefresh: Oy
  };
  ag.useEffectEvent = Ir;
  function Pc(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : Q({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Tn = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = Ua(), r = fi(c);
      r.payload = n, u != null && (r.callback = u), n = Wa(l, r, c), n !== null && (Ta(n, l, c), Wi(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = Ua(), r = fi(c);
      r.tag = 1, r.payload = n, u != null && (r.callback = u), n = Wa(l, r, c), n !== null && (Ta(n, l, c), Wi(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = Ua(), c = fi(u);
      c.tag = 2, n != null && (c.callback = n), n = Wa(l, c, u), n !== null && (Ta(n, l, u), Wi(n, l, u));
    }
  };
  function zy(l, n, u, c, r, s, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, s, m) : n.prototype && n.prototype.isPureReactComponent ? !pn(u, c) || !pn(r, s) : !0;
  }
  function ng(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && Tn.enqueueReplaceState(n, n.state, null);
  }
  function ec(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = Q({}, u));
      for (var r in l)
        u[r] === void 0 && (u[r] = l[r]);
    }
    return u;
  }
  function eh(l) {
    Yc(l);
  }
  function Dy(l) {
    console.error(l);
  }
  function lh(l) {
    Yc(l);
  }
  function hf(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function ls(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function Ry(l, n, u) {
    return u = fi(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      hf(l, n);
    }, u;
  }
  function My(l) {
    return l = fi(l), l.tag = 3, l;
  }
  function Cy(l, n, u, c) {
    var r = u.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = c.value;
      l.payload = function() {
        return r(s);
      }, l.callback = function() {
        ls(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      ls(n, u, c), typeof r != "function" && (ke === null ? ke = /* @__PURE__ */ new Set([this]) : ke.add(this));
      var v = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function i1(l, n, u, c, r) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && Bl(
        n,
        u,
        r,
        !0
      ), u = ya.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return Fa === null ? Eh() : u.alternate === null && we === 0 && (we = 3), u.flags &= -257, u.flags |= 65536, u.lanes = r, c === Vc ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), ps(l, c, r)), !1;
          case 22:
            return u.flags |= 65536, c === Vc ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), ps(l, c, r)), !1;
        }
        throw Error(C(435, u.tag));
      }
      return ps(l, c, r), Eh(), !1;
    }
    if (ue)
      return n = ya.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = r, c !== vu && (l = Error(C(422), { cause: c }), Po(Ja(l, u)))) : (c !== vu && (n = Error(C(423), {
        cause: c
      }), Po(
        Ja(n, u)
      )), l = l.current.alternate, l.flags |= 65536, r &= -r, l.lanes |= r, c = Ja(c, u), r = Ry(
        l.stateNode,
        c,
        r
      ), Bd(l, r), we !== 4 && (we = 2)), !1;
    var s = Error(C(520), { cause: c });
    if (s = Ja(s, u), ds === null ? ds = [s] : ds.push(s), we !== 4 && (we = 2), n === null) return !0;
    c = Ja(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = r & -r, u.lanes |= l, l = Ry(u.stateNode, c, l), Bd(u, l), !1;
        case 1:
          if (n = u.type, s = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (ke === null || !ke.has(s))))
            return u.flags |= 65536, r &= -r, u.lanes |= r, r = My(r), Cy(
              r,
              l,
              u,
              c
            ), Bd(u, r), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var ah = Error(C(461)), ml = !1;
  function Ve(l, n, u, c) {
    n.child = l === null ? cy(n, null, u, c) : ki(
      n,
      l.child,
      u,
      c
    );
  }
  function Uy(l, n, u, c, r) {
    u = u.render;
    var s = n.ref;
    if ("ref" in c) {
      var m = {};
      for (var v in c)
        v !== "ref" && (m[v] = c[v]);
    } else m = c;
    return Bt(n), c = Jr(
      l,
      n,
      u,
      m,
      s,
      r
    ), v = wd(), l !== null && !ml ? (kc(l, n, r), tn(l, n, r)) : (ue && v && Fo(n), n.flags |= 1, Ve(l, n, c, r), n.child);
  }
  function Hy(l, n, u, c, r) {
    if (l === null) {
      var s = u.type;
      return typeof s == "function" && !qc(s) && s.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = s, Ny(
        l,
        n,
        s,
        c,
        r
      )) : (l = Rd(
        u.type,
        null,
        c,
        n,
        n.mode,
        r
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (s = l.child, !ih(l, r)) {
      var m = s.memoizedProps;
      if (u = u.compare, u = u !== null ? u : pn, u(m, c) && l.ref === n.ref)
        return tn(l, n, r);
    }
    return n.flags |= 1, l = ai(s, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function Ny(l, n, u, c, r) {
    if (l !== null) {
      var s = l.memoizedProps;
      if (pn(s, c) && l.ref === n.ref)
        if (ml = !1, n.pendingProps = c = s, ih(l, r))
          (l.flags & 131072) !== 0 && (ml = !0);
        else
          return n.lanes = l.lanes, tn(l, n, r);
    }
    return nh(
      l,
      n,
      u,
      c,
      r
    );
  }
  function ug(l, n, u, c) {
    var r = c.children, s = l !== null ? l.memoizedState : null;
    if (l === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (s = s !== null ? s.baseLanes | u : u, l !== null) {
          for (c = n.child = l.child, r = 0; c !== null; )
            r = r | c.lanes | c.childLanes, c = c.sibling;
          c = r & ~s;
        } else c = 0, n.child = null;
        return ga(
          l,
          n,
          s,
          u,
          c
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && tf(
          n,
          s !== null ? s.cachePool : null
        ), s !== null ? K0(n, s) : Vr(), Yd(n);
      else
        return c = n.lanes = 536870912, ga(
          l,
          n,
          s !== null ? s.baseLanes | u : u,
          u,
          c
        );
    } else
      s !== null ? (tf(n, s.cachePool), K0(n, s), Ln(), n.memoizedState = null) : (l !== null && tf(n, null), Vr(), Ln());
    return Ve(l, n, r, u), n.child;
  }
  function lc(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function ga(l, n, u, c, r) {
    var s = ka();
    return s = s === null ? null : { parent: dl._currentValue, pool: s }, n.memoizedState = {
      baseLanes: u,
      cachePool: s
    }, l !== null && tf(n, null), Vr(), Yd(n), l !== null && Bl(l, n, c, !0), n.childLanes = r, null;
  }
  function as(l, n) {
    return n = is(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function va(l, n, u) {
    return ki(n, l.child, null, u), l = as(n, n.pendingProps), l.flags |= 2, pa(n), n.memoizedState = null, l;
  }
  function ig(l, n, u) {
    var c = n.pendingProps, r = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (ue) {
        if (c.mode === "hidden")
          return l = as(n, c), n.lanes = 536870912, lc(null, l);
        if (nf(n), (l = Ye) ? (l = Xg(
          l,
          Ol
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: wn !== null ? { id: Da, overflow: Gn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Im(l), u.return = n, n.child = u, xl = n, Ye = null)) : l = null, l === null) throw En(n);
        return n.lanes = 536870912, null;
      }
      return as(n, c);
    }
    var s = l.memoizedState;
    if (s !== null) {
      var m = s.dehydrated;
      if (nf(n), r)
        if (n.flags & 256)
          n.flags &= -257, n = va(
            l,
            n,
            u
          );
        else if (n.memoizedState !== null)
          n.child = l.child, n.flags |= 128, n = null;
        else throw Error(C(558));
      else if (ml || Bl(l, n, u, !1), r = (u & l.childLanes) !== 0, ml || r) {
        if (c = Ce, c !== null && (m = Xa(c, u), m !== 0 && m !== s.retryLane))
          throw s.retryLane = m, li(l, m), Ta(c, l, m), ah;
        Eh(), n = va(
          l,
          n,
          u
        );
      } else
        l = s.treeContext, Ye = Aa(m.nextSibling), xl = n, ue = !0, gu = null, Ol = !1, l !== null && Nr(n, l), n = as(n, c), n.flags |= 4096;
      return n;
    }
    return l = ai(l.child, {
      mode: c.mode,
      children: c.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function Ia(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(C(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function nh(l, n, u, c, r) {
    return Bt(n), u = Jr(
      l,
      n,
      u,
      c,
      void 0,
      r
    ), c = wd(), l !== null && !ml ? (kc(l, n, r), tn(l, n, r)) : (ue && c && Fo(n), n.flags |= 1, Ve(l, n, u, r), n.child);
  }
  function ac(l, n, u, c, r, s) {
    return Bt(n), n.updateQueue = null, u = k0(
      n,
      c,
      u,
      r
    ), qd(l), c = wd(), l !== null && !ml ? (kc(l, n, s), tn(l, n, s)) : (ue && c && Fo(n), n.flags |= 1, Ve(l, n, u, s), n.child);
  }
  function xy(l, n, u, c, r) {
    if (Bt(n), n.stateNode === null) {
      var s = da, m = u.contextType;
      typeof m == "object" && m !== null && (s = k(m)), s = new u(c, s), n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = Tn, n.stateNode = s, s._reactInternals = n, s = n.stateNode, s.props = c, s.state = n.memoizedState, s.refs = {}, Lr(n), m = u.contextType, s.context = typeof m == "object" && m !== null ? k(m) : da, s.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (Pc(
        n,
        u,
        m,
        c
      ), s.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (m = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), m !== s.state && Tn.enqueueReplaceState(s, s.state, null), Eu(n, c, s, r), Fi(), s.state = n.memoizedState), typeof s.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      s = n.stateNode;
      var v = n.memoizedProps, A = ec(u, v);
      s.props = A;
      var j = s.context, L = u.contextType;
      m = da, typeof L == "object" && L !== null && (m = k(L));
      var $ = u.getDerivedStateFromProps;
      L = typeof $ == "function" || typeof s.getSnapshotBeforeUpdate == "function", v = n.pendingProps !== v, L || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (v || j !== m) && ng(
        n,
        s,
        c,
        m
      ), oi = !1;
      var Y = n.memoizedState;
      s.state = Y, Eu(n, c, s, r), Fi(), j = n.memoizedState, v || Y !== j || oi ? (typeof $ == "function" && (Pc(
        n,
        u,
        $,
        c
      ), j = n.memoizedState), (A = oi || zy(
        n,
        u,
        A,
        c,
        Y,
        j,
        m
      )) ? (L || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = j), s.props = c, s.state = j, s.context = m, c = A) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      s = n.stateNode, xd(l, n), m = n.memoizedProps, L = ec(u, m), s.props = L, $ = n.pendingProps, Y = s.context, j = u.contextType, A = da, typeof j == "object" && j !== null && (A = k(j)), v = u.getDerivedStateFromProps, (j = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (m !== $ || Y !== A) && ng(
        n,
        s,
        c,
        A
      ), oi = !1, Y = n.memoizedState, s.state = Y, Eu(n, c, s, r), Fi();
      var X = n.memoizedState;
      m !== $ || Y !== X || oi || l !== null && l.dependencies !== null && Gc(l.dependencies) ? (typeof v == "function" && (Pc(
        n,
        u,
        v,
        c
      ), X = n.memoizedState), (L = oi || zy(
        n,
        u,
        L,
        c,
        Y,
        X,
        A
      ) || l !== null && l.dependencies !== null && Gc(l.dependencies)) ? (j || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(c, X, A), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        c,
        X,
        A
      )), typeof s.componentDidUpdate == "function" && (n.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || m === l.memoizedProps && Y === l.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && Y === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = X), s.props = c, s.state = X, s.context = A, c = L) : (typeof s.componentDidUpdate != "function" || m === l.memoizedProps && Y === l.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && Y === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return s = c, Ia(l, n), c = (n.flags & 128) !== 0, s || c ? (s = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : s.render(), n.flags |= 1, l !== null && c ? (n.child = ki(
      n,
      l.child,
      null,
      r
    ), n.child = ki(
      n,
      null,
      u,
      r
    )) : Ve(l, n, u, r), n.memoizedState = s.state, l = n.child) : l = tn(
      l,
      n,
      r
    ), l;
  }
  function Zn(l, n, u, c) {
    return Li(), n.flags |= 256, Ve(l, n, u, c), n.child;
  }
  var ns = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function us(l) {
    return { baseLanes: l, cachePool: Qc() };
  }
  function Pa(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Ea), l;
  }
  function By(l, n, u) {
    var c = n.pendingProps, r = !1, s = (n.flags & 128) !== 0, m;
    if ((m = s) || (m = l !== null && l.memoizedState === null ? !1 : ($e.current & 2) !== 0), m && (r = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (ue) {
        if (r ? Tu(n) : Ln(), (l = Ye) ? (l = Xg(
          l,
          Ol
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: wn !== null ? { id: Da, overflow: Gn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Im(l), u.return = n, n.child = u, xl = n, Ye = null)) : l = null, l === null) throw En(n);
        return rc(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var v = c.children;
      return c = c.fallback, r ? (Ln(), r = n.mode, v = is(
        { mode: "hidden", children: v },
        r
      ), c = ni(
        c,
        r,
        u,
        null
      ), v.return = n, c.return = n, v.sibling = c, n.child = v, c = n.child, c.memoizedState = us(u), c.childLanes = Pa(
        l,
        m,
        u
      ), n.memoizedState = ns, lc(null, c)) : (Tu(n), nc(n, v));
    }
    var A = l.memoizedState;
    if (A !== null && (v = A.dehydrated, v !== null)) {
      if (s)
        n.flags & 256 ? (Tu(n), n.flags &= -257, n = to(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Ln(), n.child = l.child, n.flags |= 128, n = null) : (Ln(), v = c.fallback, r = n.mode, c = is(
          { mode: "visible", children: c.children },
          r
        ), v = ni(
          v,
          r,
          u,
          null
        ), v.flags |= 2, c.return = n, v.return = n, c.sibling = v, n.child = c, ki(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = us(u), c.childLanes = Pa(
          l,
          m,
          u
        ), n.memoizedState = ns, n = lc(null, c));
      else if (Tu(n), rc(v)) {
        if (m = v.nextSibling && v.nextSibling.dataset, m) var j = m.dgst;
        m = j, c = Error(C(419)), c.stack = "", c.digest = m, Po({ value: c, source: null, stack: null }), n = to(
          l,
          n,
          u
        );
      } else if (ml || Bl(l, n, u, !1), m = (u & l.childLanes) !== 0, ml || m) {
        if (m = Ce, m !== null && (c = Xa(m, u), c !== 0 && c !== A.retryLane))
          throw A.retryLane = c, li(l, c), Ta(m, l, c), ah;
        _n(v) || Eh(), n = to(
          l,
          n,
          u
        );
      } else
        _n(v) ? (n.flags |= 192, n.child = l.child, n = null) : (l = A.treeContext, Ye = Aa(
          v.nextSibling
        ), xl = n, ue = !0, gu = null, Ol = !1, l !== null && Nr(n, l), n = nc(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return r ? (Ln(), v = c.fallback, r = n.mode, A = l.child, j = A.sibling, c = ai(A, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = A.subtreeFlags & 65011712, j !== null ? v = ai(
      j,
      v
    ) : (v = ni(
      v,
      r,
      u,
      null
    ), v.flags |= 2), v.return = n, c.return = n, c.sibling = v, n.child = c, lc(null, c), c = n.child, v = l.child.memoizedState, v === null ? v = us(u) : (r = v.cachePool, r !== null ? (A = dl._currentValue, r = r.parent !== A ? { parent: A, pool: A } : r) : r = Qc(), v = {
      baseLanes: v.baseLanes | u,
      cachePool: r
    }), c.memoizedState = v, c.childLanes = Pa(
      l,
      m,
      u
    ), n.memoizedState = ns, lc(l.child, c)) : (Tu(n), u = l.child, l = u.sibling, u = ai(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function nc(l, n) {
    return n = is(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function is(l, n) {
    return l = il(22, l, null, n), l.lanes = 0, l;
  }
  function to(l, n, u) {
    return ki(n, l.child, null, u), l = nc(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function eo(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), Hd(l.return, n, u);
  }
  function uh(l, n, u, c, r, s) {
    var m = l.memoizedState;
    m === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: r,
      treeForkCount: s
    } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = c, m.tail = u, m.tailMode = r, m.treeForkCount = s);
  }
  function jy(l, n, u) {
    var c = n.pendingProps, r = c.revealOrder, s = c.tail;
    c = c.children;
    var m = $e.current, v = (m & 2) !== 0;
    if (v ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, I($e, m), Ve(l, n, c, u), c = ue ? sl : 0, !v && l !== null && (l.flags & 128) !== 0)
      t: for (l = n.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && eo(l, u, n);
        else if (l.tag === 19)
          eo(l, u, n);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === n) break t;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === n)
            break t;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (r) {
      case "forwards":
        for (u = n.child, r = null; u !== null; )
          l = u.alternate, l !== null && uf(l) === null && (r = u), u = u.sibling;
        u = r, u === null ? (r = n.child, n.child = null) : (r = u.sibling, u.sibling = null), uh(
          n,
          !1,
          r,
          u,
          s,
          c
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, r = n.child, n.child = null; r !== null; ) {
          if (l = r.alternate, l !== null && uf(l) === null) {
            n.child = r;
            break;
          }
          l = r.sibling, r.sibling = u, u = r, r = l;
        }
        uh(
          n,
          !0,
          u,
          null,
          s,
          c
        );
        break;
      case "together":
        uh(
          n,
          !1,
          null,
          null,
          void 0,
          c
        );
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function tn(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), kn |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (Bl(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(C(153));
    if (n.child !== null) {
      for (l = n.child, u = ai(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = ai(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function ih(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Gc(l)));
  }
  function ch(l, n, u) {
    switch (n.tag) {
      case 3:
        Le(n, n.stateNode.containerInfo), ma(n, dl, l.memoizedState.cache), Li();
        break;
      case 27:
      case 5:
        qa(n);
        break;
      case 4:
        Le(n, n.stateNode.containerInfo);
        break;
      case 10:
        ma(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, nf(n), null;
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (Tu(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? By(l, n, u) : (Tu(n), l = tn(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        Tu(n);
        break;
      case 19:
        var r = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (Bl(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), r) {
          if (c)
            return jy(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (r = n.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), I($e, $e.current), c) break;
        return null;
      case 22:
        return n.lanes = 0, ug(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        ma(n, dl, l.memoizedState.cache);
    }
    return tn(l, n, u);
  }
  function Yy(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        ml = !0;
      else {
        if (!ih(l, u) && (n.flags & 128) === 0)
          return ml = !1, ch(
            l,
            n,
            u
          );
        ml = (l.flags & 131072) !== 0;
      }
    else
      ml = !1, ue && (n.flags & 1048576) !== 0 && ty(n, sl, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        t: {
          var c = n.pendingProps;
          if (l = Ji(n.elementType), n.type = l, typeof l == "function")
            qc(l) ? (c = ec(l, c), n.tag = 1, n = xy(
              null,
              n,
              l,
              c,
              u
            )) : (n.tag = 0, n = nh(
              null,
              n,
              l,
              c,
              u
            ));
          else {
            if (l != null) {
              var r = l.$$typeof;
              if (r === Je) {
                n.tag = 11, n = Uy(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break t;
              } else if (r === Rt) {
                n.tag = 14, n = Hy(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break t;
              }
            }
            throw n = Qe(l) || l, Error(C(306, n, ""));
          }
        }
        return n;
      case 0:
        return nh(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, r = ec(
          c,
          n.pendingProps
        ), xy(
          l,
          n,
          c,
          r,
          u
        );
      case 3:
        t: {
          if (Le(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(C(387));
          c = n.pendingProps;
          var s = n.memoizedState;
          r = s.element, xd(l, n), Eu(n, c, null, u);
          var m = n.memoizedState;
          if (c = m.cache, ma(n, dl, c), c !== s.cache && bu(
            n,
            [dl],
            u,
            !0
          ), Fi(), c = m.element, s.isDehydrated)
            if (s = {
              element: c,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = s, n.memoizedState = s, n.flags & 256) {
              n = Zn(
                l,
                n,
                c,
                u
              );
              break t;
            } else if (c !== r) {
              r = Ja(
                Error(C(424)),
                n
              ), Po(r), n = Zn(
                l,
                n,
                c,
                u
              );
              break t;
            } else
              for (l = n.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, Ye = Aa(l.firstChild), xl = n, ue = !0, gu = null, Ol = !0, u = cy(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Li(), c === r) {
              n = tn(
                l,
                n,
                u
              );
              break t;
            }
            Ve(l, n, c, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return Ia(l, n), l === null ? (u = Bf(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : ue || (u = n.type, l = n.pendingProps, c = fc(
          wt.current
        ).createElement(u), c[Re] = n, c[fa] = l, $l(c, u, l), Ee(c), n.stateNode = c) : n.memoizedState = Bf(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return qa(n), l === null && ue && (c = n.stateNode = Nf(
          n.type,
          n.pendingProps,
          wt.current
        ), xl = n, Ol = !0, r = Ye, Fn(n.type) ? (_s = r, Ye = Aa(c.firstChild)) : Ye = r), Ve(
          l,
          n,
          n.pendingProps.children,
          u
        ), Ia(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && ue && ((r = c = Ye) && (c = f1(
          c,
          n.type,
          n.pendingProps,
          Ol
        ), c !== null ? (n.stateNode = c, xl = n, Ye = Aa(c.firstChild), Ol = !1, r = !0) : r = !1), r || En(n)), qa(n), r = n.type, s = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = s.children, Uf(r, s) ? c = null : m !== null && Uf(r, m) && (n.flags |= 32), n.memoizedState !== null && (r = Jr(
          l,
          n,
          u1,
          null,
          null,
          u
        ), Rs._currentValue = r), Ia(l, n), Ve(l, n, c, u), n.child;
      case 6:
        return l === null && ue && ((l = u = Ye) && (u = Wt(
          u,
          n.pendingProps,
          Ol
        ), u !== null ? (n.stateNode = u, xl = n, Ye = null, l = !0) : l = !1), l || En(n)), null;
      case 13:
        return By(l, n, u);
      case 4:
        return Le(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = ki(
          n,
          null,
          c,
          u
        ) : Ve(l, n, c, u), n.child;
      case 11:
        return Uy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return Ve(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return Ve(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return Ve(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, ma(n, n.type, c.value), Ve(l, n, c.children, u), n.child;
      case 9:
        return r = n.type._context, c = n.pendingProps.children, Bt(n), r = k(r), c = c(r), n.flags |= 1, Ve(l, n, c, u), n.child;
      case 14:
        return Hy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return Ny(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return jy(l, n, u);
      case 31:
        return ig(l, n, u);
      case 22:
        return ug(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        return Bt(n), c = k(dl), l === null ? (r = ka(), r === null && (r = Ce, s = jr(), r.pooledCache = s, s.refCount++, s !== null && (r.pooledCacheLanes |= u), r = s), n.memoizedState = { parent: c, cache: r }, Lr(n), ma(n, dl, r)) : ((l.lanes & u) !== 0 && (xd(l, n), Eu(n, null, null, u), Fi()), r = l.memoizedState, s = n.memoizedState, r.parent !== c ? (r = { parent: c, cache: c }, n.memoizedState = r, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = r), ma(n, dl, c)) : (c = s.cache, ma(n, dl, c), c !== r.cache && bu(
          n,
          [dl],
          u,
          !0
        ))), Ve(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(C(156, n.tag));
  }
  function Ru(l) {
    l.flags |= 4;
  }
  function qy(l, n, u, c, r) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (r & 335544128) === r)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (pg()) l.flags |= 8192;
        else
          throw Ki = Vc, Lc;
    } else l.flags &= -16777217;
  }
  function wy(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Na(n))
      if (pg()) l.flags |= 8192;
      else
        throw Ki = Vc, Lc;
  }
  function aa(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? ta() : 536870912, l.lanes |= n, ll |= n);
  }
  function mf(l, n) {
    if (!ue)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function Nt(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var r = l.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags & 65011712, c |= r.flags & 65011712, r.return = l, r = r.sibling;
    else
      for (r = l.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags, c |= r.flags, r.return = l, r = r.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function cg(l, n, u) {
    var c = n.pendingProps;
    switch (Cd(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Nt(n), null;
      case 1:
        return Nt(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), Qn(dl), me(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Su(n) ? Ru(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, ey())), Nt(n), null;
      case 26:
        var r = n.type, s = n.memoizedState;
        return l === null ? (Ru(n), s !== null ? (Nt(n), wy(n, s)) : (Nt(n), qy(
          n,
          r,
          null,
          c,
          u
        ))) : s ? s !== l.memoizedState ? (Ru(n), Nt(n), wy(n, s)) : (Nt(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== c && Ru(n), Nt(n), qy(
          n,
          r,
          l,
          c,
          u
        )), null;
      case 27:
        if (ft(n), u = wt.current, r = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Ru(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(C(166));
            return Nt(n), null;
          }
          l = F.current, Su(n) ? xr(n) : (l = Nf(r, c, u), n.stateNode = l, Ru(n));
        }
        return Nt(n), null;
      case 5:
        if (ft(n), r = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Ru(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(C(166));
            return Nt(n), null;
          }
          if (s = F.current, Su(n))
            xr(n);
          else {
            var m = fc(
              wt.current
            );
            switch (s) {
              case 1:
                s = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  r
                );
                break;
              case 2:
                s = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  r
                );
                break;
              default:
                switch (r) {
                  case "svg":
                    s = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      r
                    );
                    break;
                  case "math":
                    s = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      r
                    );
                    break;
                  case "script":
                    s = m.createElement("div"), s.innerHTML = "<script><\/script>", s = s.removeChild(
                      s.firstChild
                    );
                    break;
                  case "select":
                    s = typeof c.is == "string" ? m.createElement("select", {
                      is: c.is
                    }) : m.createElement("select"), c.multiple ? s.multiple = !0 : c.size && (s.size = c.size);
                    break;
                  default:
                    s = typeof c.is == "string" ? m.createElement(r, { is: c.is }) : m.createElement(r);
                }
            }
            s[Re] = n, s[fa] = c;
            t: for (m = n.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                s.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === n) break t;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === n)
                  break t;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            n.stateNode = s;
            t: switch ($l(s, r, c), r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                c = !!c.autoFocus;
                break t;
              case "img":
                c = !0;
                break t;
              default:
                c = !1;
            }
            c && Ru(n);
          }
        }
        return Nt(n), qy(
          n,
          n.type,
          l === null ? null : l.memoizedProps,
          n.pendingProps,
          u
        ), null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && Ru(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(C(166));
          if (l = wt.current, Su(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, r = xl, r !== null)
              switch (r.tag) {
                case 27:
                case 5:
                  c = r.memoizedProps;
              }
            l[Re] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || fp(l.nodeValue, u)), l || En(n, !0);
          } else
            l = fc(l).createTextNode(
              c
            ), l[Re] = n, n.stateNode = l;
        }
        return Nt(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (c = Su(n), u !== null) {
            if (l === null) {
              if (!c) throw Error(C(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(C(557));
              l[Re] = n;
            } else
              Li(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Nt(n), l = !1;
          } else
            u = ey(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (pa(n), n) : (pa(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(C(558));
        }
        return Nt(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (r = Su(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!r) throw Error(C(318));
              if (r = n.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(C(317));
              r[Re] = n;
            } else
              Li(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Nt(n), r = !1;
          } else
            r = ey(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = r), r = !0;
          if (!r)
            return n.flags & 256 ? (pa(n), n) : (pa(n), null);
        }
        return pa(n), (n.flags & 128) !== 0 ? (n.lanes = u, n) : (u = c !== null, l = l !== null && l.memoizedState !== null, u && (c = n.child, r = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (r = c.alternate.memoizedState.cachePool.pool), s = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (s = c.memoizedState.cachePool.pool), s !== r && (c.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), aa(n, n.updateQueue), Nt(n), null);
      case 4:
        return me(), l === null && Cf(n.stateNode.containerInfo), Nt(n), null;
      case 10:
        return Qn(n.type), Nt(n), null;
      case 19:
        if (B($e), c = n.memoizedState, c === null) return Nt(n), null;
        if (r = (n.flags & 128) !== 0, s = c.rendering, s === null)
          if (r) mf(c, !1);
          else {
            if (we !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (s = uf(l), s !== null) {
                  for (n.flags |= 128, mf(c, !1), l = s.updateQueue, n.updateQueue = l, aa(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Fm(u, l), u = u.sibling;
                  return I(
                    $e,
                    $e.current & 1 | 2
                  ), ue && bn(n, c.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            c.tail !== null && gl() > Se && (n.flags |= 128, r = !0, mf(c, !1), n.lanes = 4194304);
          }
        else {
          if (!r)
            if (l = uf(s), l !== null) {
              if (n.flags |= 128, r = !0, l = l.updateQueue, n.updateQueue = l, aa(n, l), mf(c, !0), c.tail === null && c.tailMode === "hidden" && !s.alternate && !ue)
                return Nt(n), null;
            } else
              2 * gl() - c.renderingStartTime > Se && u !== 536870912 && (n.flags |= 128, r = !0, mf(c, !1), n.lanes = 4194304);
          c.isBackwards ? (s.sibling = n.child, n.child = s) : (l = c.last, l !== null ? l.sibling = s : n.child = s, c.last = s);
        }
        return c.tail !== null ? (l = c.tail, c.rendering = l, c.tail = l.sibling, c.renderingStartTime = gl(), l.sibling = null, u = $e.current, I(
          $e,
          r ? u & 1 | 2 : u & 1
        ), ue && bn(n, c.treeForkCount), l) : (Nt(n), null);
      case 22:
      case 23:
        return pa(n), af(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Nt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Nt(n), u = n.updateQueue, u !== null && aa(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && B($a), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), Qn(dl), Nt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(C(156, n.tag));
  }
  function og(l, n) {
    switch (Cd(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return Qn(dl), me(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return ft(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (pa(n), n.alternate === null)
            throw Error(C(340));
          Li();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (pa(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(C(340));
          Li();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return B($e), null;
      case 4:
        return me(), null;
      case 10:
        return Qn(n.type), null;
      case 22:
      case 23:
        return pa(n), af(), l !== null && B($a), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return Qn(dl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function fg(l, n) {
    switch (Cd(n), n.tag) {
      case 3:
        Qn(dl), me();
        break;
      case 26:
      case 27:
      case 5:
        ft(n);
        break;
      case 4:
        me();
        break;
      case 31:
        n.memoizedState !== null && pa(n);
        break;
      case 13:
        pa(n);
        break;
      case 19:
        B($e);
        break;
      case 10:
        Qn(n.type);
        break;
      case 22:
      case 23:
        pa(n), af(), l !== null && B($a);
        break;
      case 24:
        Qn(dl);
    }
  }
  function An(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var r = c.next;
        u = r;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var s = u.create, m = u.inst;
            c = s(), m.destroy = c;
          }
          u = u.next;
        } while (u !== r);
      }
    } catch (v) {
      _e(n, n.return, v);
    }
  }
  function en(l, n, u) {
    try {
      var c = n.updateQueue, r = c !== null ? c.lastEffect : null;
      if (r !== null) {
        var s = r.next;
        c = s;
        do {
          if ((c.tag & l) === l) {
            var m = c.inst, v = m.destroy;
            if (v !== void 0) {
              m.destroy = void 0, r = n;
              var A = u, j = v;
              try {
                j();
              } catch (L) {
                _e(
                  r,
                  A,
                  L
                );
              }
            }
          }
          c = c.next;
        } while (c !== s);
      }
    } catch (L) {
      _e(n, n.return, L);
    }
  }
  function oh(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Ii(n, u);
      } catch (c) {
        _e(l, l.return, c);
      }
    }
  }
  function uc(l, n, u) {
    u.props = ec(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      _e(l, n, c);
    }
  }
  function Mu(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (r) {
      _e(l, n, r);
    }
  }
  function Jn(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (r) {
          _e(l, n, r);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (r) {
          _e(l, n, r);
        }
      else u.current = null;
  }
  function Gy(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      t: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break t;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (r) {
      _e(l, l.return, r);
    }
  }
  function fh(l, n, u) {
    try {
      var c = l.stateNode;
      sp(c, l.type, u, n), c[fa] = n;
    } catch (r) {
      _e(l, l.return, r);
    }
  }
  function Xy(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Fn(l.type) || l.tag === 4;
  }
  function yf(l) {
    t: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Xy(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Fn(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue t;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function pf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = Hn));
    else if (c !== 4 && (c === 27 && Fn(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (pf(l, n, u), l = l.sibling; l !== null; )
        pf(l, n, u), l = l.sibling;
  }
  function gf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && Fn(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (gf(l, n, u), l = l.sibling; l !== null; )
        gf(l, n, u), l = l.sibling;
  }
  function Qy(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, r = n.attributes; r.length; )
        n.removeAttributeNode(r[0]);
      $l(n, c, u), n[Re] = l, n[fa] = u;
    } catch (s) {
      _e(l, l.return, s);
    }
  }
  var hi = !1, Sl = !1, rh = !1, Ly = typeof WeakSet == "function" ? WeakSet : Set, ql = null;
  function vf(l, n) {
    if (l = l.containerInfo, Ch = Dl, l = Gi(l), Dr(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        t: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var r = c.anchorOffset, s = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, s.nodeType;
            } catch {
              u = null;
              break t;
            }
            var m = 0, v = -1, A = -1, j = 0, L = 0, $ = l, Y = null;
            e: for (; ; ) {
              for (var X; $ !== u || r !== 0 && $.nodeType !== 3 || (v = m + r), $ !== s || c !== 0 && $.nodeType !== 3 || (A = m + c), $.nodeType === 3 && (m += $.nodeValue.length), (X = $.firstChild) !== null; )
                Y = $, $ = X;
              for (; ; ) {
                if ($ === l) break e;
                if (Y === u && ++j === r && (v = m), Y === s && ++L === c && (A = m), (X = $.nextSibling) !== null) break;
                $ = Y, Y = $.parentNode;
              }
              $ = X;
            }
            u = v === -1 || A === -1 ? null : { start: v, end: A };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Uh = { focusedElem: l, selectionRange: u }, Dl = !1, ql = n; ql !== null; )
      if (n = ql, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, ql = l;
      else
        for (; ql !== null; ) {
          switch (n = ql, s = n.alternate, l = n.flags, n.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = n.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  r = l[u], r.ref.impl = r.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && s !== null) {
                l = void 0, u = n, r = s.memoizedProps, s = s.memoizedState, c = u.stateNode;
                try {
                  var st = ec(
                    u.type,
                    r
                  );
                  l = c.getSnapshotBeforeUpdate(
                    st,
                    s
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (Dt) {
                  _e(
                    u,
                    u.return,
                    Dt
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Os(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Os(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(C(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, ql = l;
            break;
          }
          ql = n.return;
        }
  }
  function cs(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        mi(l, u), c & 4 && An(5, u);
        break;
      case 1:
        if (mi(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              _e(u, u.return, m);
            }
          else {
            var r = ec(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                r,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              _e(
                u,
                u.return,
                m
              );
            }
          }
        c & 64 && oh(u), c & 512 && Mu(u, u.return);
        break;
      case 3:
        if (mi(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Ii(l, n);
          } catch (m) {
            _e(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && c & 4 && Qy(u);
      case 26:
      case 5:
        mi(l, u), n === null && c & 4 && Gy(u), c & 512 && Mu(u, u.return);
        break;
      case 12:
        mi(l, u);
        break;
      case 31:
        mi(l, u), c & 4 && rg(l, u);
        break;
      case 13:
        mi(l, u), c & 4 && Jy(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = ln.bind(
          null,
          u
        ), Hf(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || hi, !c) {
          n = n !== null && n.memoizedState !== null || Sl, r = hi;
          var s = Sl;
          hi = c, (Sl = n) && !s ? Kn(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : mi(l, u), hi = r, Sl = s;
        }
        break;
      case 30:
        break;
      default:
        mi(l, u);
    }
  }
  function Vy(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Vy(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && id(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var qe = null, Sa = !1;
  function Cu(l, n, u) {
    for (u = u.child; u !== null; )
      Zy(l, n, u), u = u.sibling;
  }
  function Zy(l, n, u) {
    if (Al && typeof Al.onCommitFiberUnmount == "function")
      try {
        Al.onCommitFiberUnmount(dn, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Sl || Jn(u, n), Cu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Sl || Jn(u, n);
        var c = qe, r = Sa;
        Fn(u.type) && (qe = u.stateNode, Sa = !1), Cu(
          l,
          n,
          u
        ), fo(u.stateNode), qe = c, Sa = r;
        break;
      case 5:
        Sl || Jn(u, n);
      case 6:
        if (c = qe, r = Sa, qe = null, Cu(
          l,
          n,
          u
        ), qe = c, Sa = r, qe !== null)
          if (Sa)
            try {
              (qe.nodeType === 9 ? qe.body : qe.nodeName === "HTML" ? qe.ownerDocument.body : qe).removeChild(u.stateNode);
            } catch (s) {
              _e(
                u,
                n,
                s
              );
            }
          else
            try {
              qe.removeChild(u.stateNode);
            } catch (s) {
              _e(
                u,
                n,
                s
              );
            }
        break;
      case 18:
        qe !== null && (Sa ? (l = qe, yp(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Lf(l)) : yp(qe, u.stateNode));
        break;
      case 4:
        c = qe, r = Sa, qe = u.stateNode.containerInfo, Sa = !0, Cu(
          l,
          n,
          u
        ), qe = c, Sa = r;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        en(2, u, n), Sl || en(4, u, n), Cu(
          l,
          n,
          u
        );
        break;
      case 1:
        Sl || (Jn(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && uc(
          u,
          n,
          c
        )), Cu(
          l,
          n,
          u
        );
        break;
      case 21:
        Cu(
          l,
          n,
          u
        );
        break;
      case 22:
        Sl = (c = Sl) || u.memoizedState !== null, Cu(
          l,
          n,
          u
        ), Sl = c;
        break;
      default:
        Cu(
          l,
          n,
          u
        );
    }
  }
  function rg(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Lf(l);
      } catch (u) {
        _e(n, n.return, u);
      }
    }
  }
  function Jy(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Lf(l);
      } catch (u) {
        _e(n, n.return, u);
      }
  }
  function os(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new Ly()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new Ly()), n;
      default:
        throw Error(C(435, l.tag));
    }
  }
  function fs(l, n) {
    var u = os(l);
    n.forEach(function(c) {
      if (!u.has(c)) {
        u.add(c);
        var r = Ug.bind(null, l, c);
        c.then(r, r);
      }
    });
  }
  function ba(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var r = u[c], s = l, m = n, v = m;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (Fn(v.type)) {
                qe = v.stateNode, Sa = !1;
                break t;
              }
              break;
            case 5:
              qe = v.stateNode, Sa = !1;
              break t;
            case 3:
            case 4:
              qe = v.stateNode.containerInfo, Sa = !0;
              break t;
          }
          v = v.return;
        }
        if (qe === null) throw Error(C(160));
        Zy(s, m, r), qe = null, Sa = !1, s = r.alternate, s !== null && (s.return = null), r.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        sh(n, l), n = n.sibling;
  }
  var Kt = null;
  function sh(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ba(n, l), Ra(l), c & 4 && (en(3, l, l.return), An(3, l), en(5, l, l.return));
        break;
      case 1:
        ba(n, l), Ra(l), c & 512 && (Sl || u === null || Jn(u, u.return)), c & 64 && hi && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var r = Kt;
        if (ba(n, l), Ra(l), c & 512 && (Sl || u === null || Jn(u, u.return)), c & 4) {
          var s = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                t: {
                  c = l.type, u = l.memoizedProps, r = r.ownerDocument || r;
                  e: switch (c) {
                    case "title":
                      s = r.getElementsByTagName("title")[0], (!s || s[fu] || s[Re] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = r.createElement(c), r.head.insertBefore(
                        s,
                        r.querySelector("head > title")
                      )), $l(s, c, u), s[Re] = l, Ee(s), c = s;
                      break t;
                    case "link":
                      var m = Sp(
                        "link",
                        "href",
                        r
                      ).get(c + (u.href || ""));
                      if (m) {
                        for (var v = 0; v < m.length; v++)
                          if (s = m[v], s.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && s.getAttribute("rel") === (u.rel == null ? null : u.rel) && s.getAttribute("title") === (u.title == null ? null : u.title) && s.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(v, 1);
                            break e;
                          }
                      }
                      s = r.createElement(c), $l(s, c, u), r.head.appendChild(s);
                      break;
                    case "meta":
                      if (m = Sp(
                        "meta",
                        "content",
                        r
                      ).get(c + (u.content || ""))) {
                        for (v = 0; v < m.length; v++)
                          if (s = m[v], s.getAttribute("content") === (u.content == null ? null : "" + u.content) && s.getAttribute("name") === (u.name == null ? null : u.name) && s.getAttribute("property") === (u.property == null ? null : u.property) && s.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && s.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(v, 1);
                            break e;
                          }
                      }
                      s = r.createElement(c), $l(s, c, u), r.head.appendChild(s);
                      break;
                    default:
                      throw Error(C(468, c));
                  }
                  s[Re] = l, Ee(s), c = s;
                }
                l.stateNode = c;
              } else
                jh(
                  r,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = vp(
                r,
                c,
                l.memoizedProps
              );
          else
            s !== c ? (s === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : s.count--, c === null ? jh(
              r,
              l.type,
              l.stateNode
            ) : vp(
              r,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && fh(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        ba(n, l), Ra(l), c & 512 && (Sl || u === null || Jn(u, u.return)), u !== null && c & 4 && fh(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (ba(n, l), Ra(l), c & 512 && (Sl || u === null || Jn(u, u.return)), l.flags & 32) {
          r = l.stateNode;
          try {
            su(r, "");
          } catch (st) {
            _e(l, l.return, st);
          }
        }
        c & 4 && l.stateNode != null && (r = l.memoizedProps, fh(
          l,
          r,
          u !== null ? u.memoizedProps : r
        )), c & 1024 && (rh = !0);
        break;
      case 6:
        if (ba(n, l), Ra(l), c & 4) {
          if (l.stateNode === null)
            throw Error(C(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (st) {
            _e(l, l.return, st);
          }
        }
        break;
      case 3:
        if (qf = null, r = Kt, Kt = na(n.containerInfo), ba(n, l), Kt = r, Ra(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Lf(n.containerInfo);
          } catch (st) {
            _e(l, l.return, st);
          }
        rh && (rh = !1, Ky(l));
        break;
      case 4:
        c = Kt, Kt = na(
          l.stateNode.containerInfo
        ), ba(n, l), Ra(l), Kt = c;
        break;
      case 12:
        ba(n, l), Ra(l);
        break;
      case 31:
        ba(n, l), Ra(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, fs(l, c)));
        break;
      case 13:
        ba(n, l), Ra(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Wn = gl()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, fs(l, c)));
        break;
      case 22:
        r = l.memoizedState !== null;
        var A = u !== null && u.memoizedState !== null, j = hi, L = Sl;
        if (hi = j || r, Sl = L || A, ba(n, l), Sl = L, hi = j, Ra(l), c & 8192)
          t: for (n = l.stateNode, n._visibility = r ? n._visibility & -2 : n._visibility | 1, r && (u === null || A || hi || Sl || lo(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                A = u = n;
                try {
                  if (s = A.stateNode, r)
                    m = s.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    v = A.stateNode;
                    var $ = A.memoizedProps.style, Y = $ != null && $.hasOwnProperty("display") ? $.display : null;
                    v.style.display = Y == null || typeof Y == "boolean" ? "" : ("" + Y).trim();
                  }
                } catch (st) {
                  _e(A, A.return, st);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                A = n;
                try {
                  A.stateNode.nodeValue = r ? "" : A.memoizedProps;
                } catch (st) {
                  _e(A, A.return, st);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                A = n;
                try {
                  var X = A.stateNode;
                  r ? yl(X, !0) : yl(A.stateNode, !1);
                } catch (st) {
                  _e(A, A.return, st);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break t;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break t;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, fs(l, u))));
        break;
      case 19:
        ba(n, l), Ra(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, fs(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ba(n, l), Ra(l);
    }
  }
  function Ra(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (Xy(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(C(160));
        switch (u.tag) {
          case 27:
            var r = u.stateNode, s = yf(l);
            gf(l, s, r);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (su(m, ""), u.flags &= -33);
            var v = yf(l);
            gf(l, v, m);
            break;
          case 3:
          case 4:
            var A = u.stateNode.containerInfo, j = yf(l);
            pf(
              l,
              j,
              A
            );
            break;
          default:
            throw Error(C(161));
        }
      } catch (L) {
        _e(l, l.return, L);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function Ky(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Ky(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function mi(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        cs(l, n.alternate, n), n = n.sibling;
  }
  function lo(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          en(4, n, n.return), lo(n);
          break;
        case 1:
          Jn(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && uc(
            n,
            n.return,
            u
          ), lo(n);
          break;
        case 27:
          fo(n.stateNode);
        case 26:
        case 5:
          Jn(n, n.return), lo(n);
          break;
        case 22:
          n.memoizedState === null && lo(n);
          break;
        case 30:
          lo(n);
          break;
        default:
          lo(n);
      }
      l = l.sibling;
    }
  }
  function Kn(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, r = l, s = n, m = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Kn(
            r,
            s,
            u
          ), An(4, s);
          break;
        case 1:
          if (Kn(
            r,
            s,
            u
          ), c = s, r = c.stateNode, typeof r.componentDidMount == "function")
            try {
              r.componentDidMount();
            } catch (j) {
              _e(c, c.return, j);
            }
          if (c = s, r = c.updateQueue, r !== null) {
            var v = c.stateNode;
            try {
              var A = r.shared.hiddenCallbacks;
              if (A !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < A.length; r++)
                  jd(A[r], v);
            } catch (j) {
              _e(c, c.return, j);
            }
          }
          u && m & 64 && oh(s), Mu(s, s.return);
          break;
        case 27:
          Qy(s);
        case 26:
        case 5:
          Kn(
            r,
            s,
            u
          ), u && c === null && m & 4 && Gy(s), Mu(s, s.return);
          break;
        case 12:
          Kn(
            r,
            s,
            u
          );
          break;
        case 31:
          Kn(
            r,
            s,
            u
          ), u && m & 4 && rg(r, s);
          break;
        case 13:
          Kn(
            r,
            s,
            u
          ), u && m & 4 && Jy(r, s);
          break;
        case 22:
          s.memoizedState === null && Kn(
            r,
            s,
            u
          ), Mu(s, s.return);
          break;
        case 30:
          break;
        default:
          Kn(
            r,
            s,
            u
          );
      }
      n = n.sibling;
    }
  }
  function dh(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Yr(u));
  }
  function hh(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Yr(l));
  }
  function On(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Sf(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function Sf(l, n, u, c) {
    var r = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        On(
          l,
          n,
          u,
          c
        ), r & 2048 && An(9, n);
        break;
      case 1:
        On(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        On(
          l,
          n,
          u,
          c
        ), r & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Yr(l)));
        break;
      case 12:
        if (r & 2048) {
          On(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var s = n.memoizedProps, m = s.id, v = s.onPostCommit;
            typeof v == "function" && v(
              m,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (A) {
            _e(n, n.return, A);
          }
        } else
          On(
            l,
            n,
            u,
            c
          );
        break;
      case 31:
        On(
          l,
          n,
          u,
          c
        );
        break;
      case 13:
        On(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        s = n.stateNode, m = n.alternate, n.memoizedState !== null ? s._visibility & 2 ? On(
          l,
          n,
          u,
          c
        ) : rs(l, n) : s._visibility & 2 ? On(
          l,
          n,
          u,
          c
        ) : (s._visibility |= 2, bf(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), r & 2048 && dh(m, n);
        break;
      case 24:
        On(
          l,
          n,
          u,
          c
        ), r & 2048 && hh(n.alternate, n);
        break;
      default:
        On(
          l,
          n,
          u,
          c
        );
    }
  }
  function bf(l, n, u, c, r) {
    for (r = r && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var s = l, m = n, v = u, A = c, j = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          bf(
            s,
            m,
            v,
            A,
            r
          ), An(8, m);
          break;
        case 23:
          break;
        case 22:
          var L = m.stateNode;
          m.memoizedState !== null ? L._visibility & 2 ? bf(
            s,
            m,
            v,
            A,
            r
          ) : rs(
            s,
            m
          ) : (L._visibility |= 2, bf(
            s,
            m,
            v,
            A,
            r
          )), r && j & 2048 && dh(
            m.alternate,
            m
          );
          break;
        case 24:
          bf(
            s,
            m,
            v,
            A,
            r
          ), r && j & 2048 && hh(m.alternate, m);
          break;
        default:
          bf(
            s,
            m,
            v,
            A,
            r
          );
      }
      n = n.sibling;
    }
  }
  function rs(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, r = c.flags;
        switch (c.tag) {
          case 22:
            rs(u, c), r & 2048 && dh(
              c.alternate,
              c
            );
            break;
          case 24:
            rs(u, c), r & 2048 && hh(c.alternate, c);
            break;
          default:
            rs(u, c);
        }
        n = n.sibling;
      }
  }
  var Ma = 8192;
  function Uu(l, n, u) {
    if (l.subtreeFlags & Ma)
      for (l = l.child; l !== null; )
        sg(
          l,
          n,
          u
        ), l = l.sibling;
  }
  function sg(l, n, u) {
    switch (l.tag) {
      case 26:
        Uu(
          l,
          n,
          u
        ), l.flags & Ma && l.memoizedState !== null && ju(
          u,
          Kt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Uu(
          l,
          n,
          u
        );
        break;
      case 3:
      case 4:
        var c = Kt;
        Kt = na(l.stateNode.containerInfo), Uu(
          l,
          n,
          u
        ), Kt = c;
        break;
      case 22:
        l.memoizedState === null && (c = l.alternate, c !== null && c.memoizedState !== null ? (c = Ma, Ma = 16777216, Uu(
          l,
          n,
          u
        ), Ma = c) : Uu(
          l,
          n,
          u
        ));
        break;
      default:
        Uu(
          l,
          n,
          u
        );
    }
  }
  function mh(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function Ef(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          ql = c, yh(
            c,
            l
          );
        }
      mh(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        $y(l), l = l.sibling;
  }
  function $y(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ef(l), l.flags & 2048 && en(9, l, l.return);
        break;
      case 3:
        Ef(l);
        break;
      case 12:
        Ef(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, ss(l)) : Ef(l);
        break;
      default:
        Ef(l);
    }
  }
  function ss(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          ql = c, yh(
            c,
            l
          );
        }
      mh(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          en(8, n, n.return), ss(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, ss(n));
          break;
        default:
          ss(n);
      }
      l = l.sibling;
    }
  }
  function yh(l, n) {
    for (; ql !== null; ) {
      var u = ql;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          en(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          Yr(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, ql = c;
      else
        t: for (u = l; ql !== null; ) {
          c = ql;
          var r = c.sibling, s = c.return;
          if (Vy(c), c === u) {
            ql = null;
            break t;
          }
          if (r !== null) {
            r.return = s, ql = r;
            break t;
          }
          ql = s;
        }
    }
  }
  var dg = {
    getCacheForType: function(l) {
      var n = k(dl), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return k(dl).controller.signal;
    }
  }, ky = typeof WeakMap == "function" ? WeakMap : Map, pe = 0, Ce = null, ie = null, ee = 0, Oe = 0, Ut = null, Hu = !1, ic = !1, ph = !1, $n = 0, we = 0, kn = 0, ao = 0, gh = 0, Ea = 0, ll = 0, ds = null, al = null, vh = !1, Wn = 0, Wy = 0, Se = 1 / 0, Tf = null, ke = null, zl = 0, yi = null, cc = null, Nu = 0, Ca = 0, Sh = null, bh = null, Af = 0, hs = null;
  function Ua() {
    return (pe & 2) !== 0 && ee !== 0 ? ee & -ee : R.T !== null ? _h() : nd();
  }
  function hg() {
    if (Ea === 0)
      if ((ee & 536870912) === 0 || ue) {
        var l = at;
        at <<= 1, (at & 3932160) === 0 && (at = 262144), Ea = l;
      } else Ea = 536870912;
    return l = ya.current, l !== null && (l.flags |= 32), Ea;
  }
  function Ta(l, n, u) {
    (l === Ce && (Oe === 2 || Oe === 9) || l.cancelPendingCommit !== null) && (xu(l, 0), pi(
      l,
      ee,
      Ea,
      !1
    )), Hi(l, u), ((pe & 2) === 0 || l !== Ce) && (l === Ce && ((pe & 2) === 0 && (ao |= u), we === 4 && pi(
      l,
      ee,
      Ea,
      !1
    )), Bu(l));
  }
  function mg(l, n, u) {
    if ((pe & 6) !== 0) throw Error(C(327));
    var c = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || te(l, n), r = c ? Sg(l, n) : Th(l, n, !0), s = c;
    do {
      if (r === 0) {
        ic && !c && pi(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, s && !yg(u)) {
          r = Th(l, n, !1), s = !1;
          continue;
        }
        if (r === 2) {
          if (s = n, l.errorRecoveryDisabledLanes & s)
            var m = 0;
          else
            m = l.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            n = m;
            t: {
              var v = l;
              r = ds;
              var A = v.current.memoizedState.isDehydrated;
              if (A && (xu(v, m).flags |= 256), m = Th(
                v,
                m,
                !1
              ), m !== 2) {
                if (ph && !A) {
                  v.errorRecoveryDisabledLanes |= s, ao |= s, r = 4;
                  break t;
                }
                s = al, al = r, s !== null && (al === null ? al = s : al.push.apply(
                  al,
                  s
                ));
              }
              r = m;
            }
            if (s = !1, r !== 2) continue;
          }
        }
        if (r === 1) {
          xu(l, 0), pi(l, n, 0, !0);
          break;
        }
        t: {
          switch (c = l, s = r, s) {
            case 0:
            case 1:
              throw Error(C(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              pi(
                c,
                n,
                Ea,
                !Hu
              );
              break t;
            case 2:
              al = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(C(329));
          }
          if ((n & 62914560) === n && (r = Wn + 300 - gl(), 10 < r)) {
            if (pi(
              c,
              n,
              Ea,
              !Hu
            ), yt(c, 0, !0) !== 0) break t;
            Nu = n, c.timeoutHandle = As(
              ms.bind(
                null,
                c,
                u,
                al,
                Tf,
                vh,
                n,
                Ea,
                ao,
                ll,
                Hu,
                s,
                "Throttled",
                -0,
                0
              ),
              r
            );
            break t;
          }
          ms(
            c,
            u,
            al,
            Tf,
            vh,
            n,
            Ea,
            ao,
            ll,
            Hu,
            s,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Bu(l);
  }
  function ms(l, n, u, c, r, s, m, v, A, j, L, $, Y, X) {
    if (l.timeoutHandle = -1, $ = n.subtreeFlags, $ & 8192 || ($ & 16785408) === 16785408) {
      $ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Hn
      }, sg(
        n,
        s,
        $
      );
      var st = (s & 62914560) === s ? Wn - gl() : (s & 4194048) === s ? Wy - gl() : 0;
      if (st = Ep(
        $,
        st
      ), st !== null) {
        Nu = s, l.cancelPendingCommit = st(
          Ag.bind(
            null,
            l,
            n,
            s,
            u,
            c,
            r,
            m,
            v,
            A,
            L,
            $,
            null,
            Y,
            X
          )
        ), pi(l, s, m, !j);
        return;
      }
    }
    Ag(
      l,
      n,
      s,
      u,
      c,
      r,
      m,
      v,
      A
    );
  }
  function yg(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var r = u[c], s = r.getSnapshot;
          r = r.value;
          try {
            if (!la(s(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function pi(l, n, u, c) {
    n &= ~gh, n &= ~ao, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var r = n; 0 < r; ) {
      var s = 31 - Ul(r), m = 1 << s;
      c[s] = -1, r &= ~m;
    }
    u !== 0 && pr(l, u, n);
  }
  function Of() {
    return (pe & 6) === 0 ? (vi(0), !1) : !0;
  }
  function Fy() {
    if (ie !== null) {
      if (Oe === 0)
        var l = ie.return;
      else
        l = ie, Xn = ui = null, Kr(l), $i = null, Zc = 0, l = ie;
      for (; l !== null; )
        fg(l.alternate, l), l = l.return;
      ie = null;
    }
  }
  function xu(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, wg(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Nu = 0, Fy(), Ce = l, ie = u = ai(l.current, null), ee = n, Oe = 0, Ut = null, Hu = !1, ic = te(l, n), ph = !1, ll = Ea = gh = ao = kn = we = 0, al = ds = null, vh = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var r = 31 - Ul(c), s = 1 << r;
        n |= l[r], c &= ~s;
      }
    return $n = n, Va(), u;
  }
  function _f(l, n) {
    Qt = null, R.H = es, n === Zi || n === ef ? (n = iy(), Oe = 3) : n === Lc ? (n = iy(), Oe = 4) : Oe = n === ah ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Ut = n, ie === null && (we = 1, hf(
      l,
      Ja(n, l.current)
    ));
  }
  function pg() {
    var l = ya.current;
    return l === null ? !0 : (ee & 4194048) === ee ? Fa === null : (ee & 62914560) === ee || (ee & 536870912) !== 0 ? l === Fa : !1;
  }
  function gg() {
    var l = R.H;
    return R.H = es, l === null ? es : l;
  }
  function vg() {
    var l = R.A;
    return R.A = dg, l;
  }
  function Eh() {
    we = 4, Hu || (ee & 4194048) !== ee && ya.current !== null || (ic = !0), (kn & 134217727) === 0 && (ao & 134217727) === 0 || Ce === null || pi(
      Ce,
      ee,
      Ea,
      !1
    );
  }
  function Th(l, n, u) {
    var c = pe;
    pe |= 2;
    var r = gg(), s = vg();
    (Ce !== l || ee !== n) && (Tf = null, xu(l, n)), n = !1;
    var m = we;
    t: do
      try {
        if (Oe !== 0 && ie !== null) {
          var v = ie, A = Ut;
          switch (Oe) {
            case 8:
              Fy(), m = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ya.current === null && (n = !0);
              var j = Oe;
              if (Oe = 0, Ut = null, no(l, v, A, j), u && ic) {
                m = 0;
                break t;
              }
              break;
            default:
              j = Oe, Oe = 0, Ut = null, no(l, v, A, j);
          }
        }
        c1(), m = we;
        break;
      } catch (L) {
        _f(l, L);
      }
    while (!0);
    return n && l.shellSuspendCounter++, Xn = ui = null, pe = c, R.H = r, R.A = s, ie === null && (Ce = null, ee = 0, Va()), m;
  }
  function c1() {
    for (; ie !== null; ) bg(ie);
  }
  function Sg(l, n) {
    var u = pe;
    pe |= 2;
    var c = gg(), r = vg();
    Ce !== l || ee !== n ? (Tf = null, Se = gl() + 500, xu(l, n)) : ic = te(
      l,
      n
    );
    t: do
      try {
        if (Oe !== 0 && ie !== null) {
          n = ie;
          var s = Ut;
          e: switch (Oe) {
            case 1:
              Oe = 0, Ut = null, no(l, n, s, 1);
              break;
            case 2:
            case 9:
              if (ny(s)) {
                Oe = 0, Ut = null, Eg(n);
                break;
              }
              n = function() {
                Oe !== 2 && Oe !== 9 || Ce !== l || (Oe = 7), Bu(l);
              }, s.then(n, n);
              break t;
            case 3:
              Oe = 7;
              break t;
            case 4:
              Oe = 5;
              break t;
            case 7:
              ny(s) ? (Oe = 0, Ut = null, Eg(n)) : (Oe = 0, Ut = null, no(l, n, s, 7));
              break;
            case 5:
              var m = null;
              switch (ie.tag) {
                case 26:
                  m = ie.memoizedState;
                case 5:
                case 27:
                  var v = ie;
                  if (m ? Na(m) : v.stateNode.complete) {
                    Oe = 0, Ut = null;
                    var A = v.sibling;
                    if (A !== null) ie = A;
                    else {
                      var j = v.return;
                      j !== null ? (ie = j, ys(j)) : ie = null;
                    }
                    break e;
                  }
              }
              Oe = 0, Ut = null, no(l, n, s, 5);
              break;
            case 6:
              Oe = 0, Ut = null, no(l, n, s, 6);
              break;
            case 8:
              Fy(), we = 6;
              break t;
            default:
              throw Error(C(462));
          }
        }
        oc();
        break;
      } catch (L) {
        _f(l, L);
      }
    while (!0);
    return Xn = ui = null, R.H = c, R.A = r, pe = u, ie !== null ? 0 : (Ce = null, ee = 0, Va(), we);
  }
  function oc() {
    for (; ie !== null && !cu(); )
      bg(ie);
  }
  function bg(l) {
    var n = Yy(l.alternate, l, $n);
    l.memoizedProps = l.pendingProps, n === null ? ys(l) : ie = n;
  }
  function Eg(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = ac(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          ee
        );
        break;
      case 11:
        n = ac(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          ee
        );
        break;
      case 5:
        Kr(n);
      default:
        fg(u, n), n = ie = Fm(n, $n), n = Yy(u, n, $n);
    }
    l.memoizedProps = l.pendingProps, n === null ? ys(l) : ie = n;
  }
  function no(l, n, u, c) {
    Xn = ui = null, Kr(n), $i = null, Zc = 0;
    var r = n.return;
    try {
      if (i1(
        l,
        r,
        n,
        u,
        ee
      )) {
        we = 1, hf(
          l,
          Ja(u, l.current)
        ), ie = null;
        return;
      }
    } catch (s) {
      if (r !== null) throw ie = r, s;
      we = 1, hf(
        l,
        Ja(u, l.current)
      ), ie = null;
      return;
    }
    n.flags & 32768 ? (ue || c === 1 ? l = !0 : ic || (ee & 536870912) !== 0 ? l = !1 : (Hu = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = ya.current, c !== null && c.tag === 13 && (c.flags |= 16384))), Tg(n, l)) : ys(n);
  }
  function ys(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        Tg(
          n,
          Hu
        );
        return;
      }
      l = n.return;
      var u = cg(
        n.alternate,
        n,
        $n
      );
      if (u !== null) {
        ie = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        ie = n;
        return;
      }
      ie = n = l;
    } while (n !== null);
    we === 0 && (we = 5);
  }
  function Tg(l, n) {
    do {
      var u = og(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, ie = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        ie = l;
        return;
      }
      ie = l = u;
    } while (l !== null);
    we = 6, ie = null;
  }
  function Ag(l, n, u, c, r, s, m, v, A) {
    l.cancelPendingCommit = null;
    do
      zf();
    while (zl !== 0);
    if ((pe & 6) !== 0) throw Error(C(327));
    if (n !== null) {
      if (n === l.current) throw Error(C(177));
      if (s = n.lanes | n.childLanes, s |= vn, Bo(
        l,
        u,
        s,
        m,
        v,
        A
      ), l === Ce && (ie = Ce = null, ee = 0), cc = n, yi = l, Nu = u, Ca = s, Sh = r, bh = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Hg(Cn, function() {
        return Rg(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = R.T, R.T = null, r = Z.p, Z.p = 2, m = pe, pe |= 4;
        try {
          vf(l, n, u);
        } finally {
          pe = m, Z.p = r, R.T = c;
        }
      }
      zl = 1, Og(), _g(), zg();
    }
  }
  function Og() {
    if (zl === 1) {
      zl = 0;
      var l = yi, n = cc, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = R.T, R.T = null;
        var c = Z.p;
        Z.p = 2;
        var r = pe;
        pe |= 4;
        try {
          sh(n, l);
          var s = Uh, m = Gi(l.containerInfo), v = s.focusedElem, A = s.selectionRange;
          if (m !== v && v && v.ownerDocument && Bc(
            v.ownerDocument.documentElement,
            v
          )) {
            if (A !== null && Dr(v)) {
              var j = A.start, L = A.end;
              if (L === void 0 && (L = j), "selectionStart" in v)
                v.selectionStart = j, v.selectionEnd = Math.min(
                  L,
                  v.value.length
                );
              else {
                var $ = v.ownerDocument || document, Y = $ && $.defaultView || window;
                if (Y.getSelection) {
                  var X = Y.getSelection(), st = v.textContent.length, Dt = Math.min(A.start, st), He = A.end === void 0 ? Dt : Math.min(A.end, st);
                  !X.extend && Dt > He && (m = He, He = Dt, Dt = m);
                  var H = km(
                    v,
                    Dt
                  ), z = km(
                    v,
                    He
                  );
                  if (H && z && (X.rangeCount !== 1 || X.anchorNode !== H.node || X.anchorOffset !== H.offset || X.focusNode !== z.node || X.focusOffset !== z.offset)) {
                    var x = $.createRange();
                    x.setStart(H.node, H.offset), X.removeAllRanges(), Dt > He ? (X.addRange(x), X.extend(z.node, z.offset)) : (x.setEnd(z.node, z.offset), X.addRange(x));
                  }
                }
              }
            }
            for ($ = [], X = v; X = X.parentNode; )
              X.nodeType === 1 && $.push({
                element: X,
                left: X.scrollLeft,
                top: X.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < $.length; v++) {
              var K = $[v];
              K.element.scrollLeft = K.left, K.element.scrollTop = K.top;
            }
          }
          Dl = !!Ch, Uh = Ch = null;
        } finally {
          pe = r, Z.p = c, R.T = u;
        }
      }
      l.current = n, zl = 2;
    }
  }
  function _g() {
    if (zl === 2) {
      zl = 0;
      var l = yi, n = cc, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = R.T, R.T = null;
        var c = Z.p;
        Z.p = 2;
        var r = pe;
        pe |= 4;
        try {
          cs(l, n.alternate, n);
        } finally {
          pe = r, Z.p = c, R.T = u;
        }
      }
      zl = 3;
    }
  }
  function zg() {
    if (zl === 4 || zl === 3) {
      zl = 0, bc();
      var l = yi, n = cc, u = Nu, c = bh;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? zl = 5 : (zl = 0, cc = yi = null, Dg(l, l.pendingLanes));
      var r = l.pendingLanes;
      if (r === 0 && (ke = null), Am(u), n = n.stateNode, Al && typeof Al.onCommitFiberRoot == "function")
        try {
          Al.onCommitFiberRoot(
            dn,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = R.T, r = Z.p, Z.p = 2, R.T = null;
        try {
          for (var s = l.onRecoverableError, m = 0; m < c.length; m++) {
            var v = c[m];
            s(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          R.T = n, Z.p = r;
        }
      }
      (Nu & 3) !== 0 && zf(), Bu(l), r = l.pendingLanes, (u & 261930) !== 0 && (r & 42) !== 0 ? l === hs ? Af++ : (Af = 0, hs = l) : Af = 0, vi(0);
    }
  }
  function Dg(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, Yr(n)));
  }
  function zf() {
    return Og(), _g(), zg(), Rg();
  }
  function Rg() {
    if (zl !== 5) return !1;
    var l = yi, n = Ca;
    Ca = 0;
    var u = Am(Nu), c = R.T, r = Z.p;
    try {
      Z.p = 32 > u ? 32 : u, R.T = null, u = Sh, Sh = null;
      var s = yi, m = Nu;
      if (zl = 0, cc = yi = null, Nu = 0, (pe & 6) !== 0) throw Error(C(331));
      var v = pe;
      if (pe |= 4, $y(s.current), Sf(
        s,
        s.current,
        m,
        u
      ), pe = v, vi(0, !1), Al && typeof Al.onPostCommitFiberRoot == "function")
        try {
          Al.onPostCommitFiberRoot(dn, s);
        } catch {
        }
      return !0;
    } finally {
      Z.p = r, R.T = c, Dg(l, n);
    }
  }
  function Mg(l, n, u) {
    n = Ja(u, n), n = Ry(l.stateNode, n, 2), l = Wa(l, n, 2), l !== null && (Hi(l, 2), Bu(l));
  }
  function _e(l, n, u) {
    if (l.tag === 3)
      Mg(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Mg(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (ke === null || !ke.has(c))) {
            l = Ja(u, l), u = My(2), c = Wa(n, u, 2), c !== null && (Cy(
              u,
              c,
              n,
              l
            ), Hi(c, 2), Bu(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function ps(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new ky();
      var r = /* @__PURE__ */ new Set();
      c.set(n, r);
    } else
      r = c.get(n), r === void 0 && (r = /* @__PURE__ */ new Set(), c.set(n, r));
    r.has(u) || (ph = !0, r.add(u), l = Iy.bind(null, l, n, u), n.then(l, l));
  }
  function Iy(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Ce === l && (ee & u) === u && (we === 4 || we === 3 && (ee & 62914560) === ee && 300 > gl() - Wn ? (pe & 2) === 0 && xu(l, 0) : gh |= u, ll === ee && (ll = 0)), Bu(l);
  }
  function Cg(l, n) {
    n === 0 && (n = ta()), l = li(l, n), l !== null && (Hi(l, n), Bu(l));
  }
  function ln(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), Cg(l, u);
  }
  function Ug(l, n) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var c = l.stateNode, r = l.memoizedState;
        r !== null && (u = r.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(C(314));
    }
    c !== null && c.delete(n), Cg(l, u);
  }
  function Hg(l, n) {
    return ht(l, n);
  }
  var Df = null, uo = null, Py = !1, Ah = !1, tp = !1, gi = 0;
  function Bu(l) {
    l !== uo && l.next === null && (uo === null ? Df = uo = l : uo = uo.next = l), Ah = !0, Py || (Py = !0, vs());
  }
  function vi(l, n) {
    if (!tp && Ah) {
      tp = !0;
      do
        for (var u = !1, c = Df; c !== null; ) {
          if (l !== 0) {
            var r = c.pendingLanes;
            if (r === 0) var s = 0;
            else {
              var m = c.suspendedLanes, v = c.pingedLanes;
              s = (1 << 31 - Ul(42 | l) + 1) - 1, s &= r & ~(m & ~v), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (u = !0, io(c, s));
          } else
            s = ee, s = yt(
              c,
              c === Ce ? s : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (s & 3) === 0 || te(c, s) || (u = !0, io(c, s));
          c = c.next;
        }
      while (u);
      tp = !1;
    }
  }
  function Oh() {
    ep();
  }
  function ep() {
    Ah = Py = !1;
    var l = 0;
    gi !== 0 && o1() && (l = gi);
    for (var n = gl(), u = null, c = Df; c !== null; ) {
      var r = c.next, s = lp(c, n);
      s === 0 ? (c.next = null, u === null ? Df = r : u.next = r, r === null && (uo = u)) : (u = c, (l !== 0 || (s & 3) !== 0) && (Ah = !0)), c = r;
    }
    zl !== 0 && zl !== 5 || vi(l), gi !== 0 && (gi = 0);
  }
  function lp(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, r = l.expirationTimes, s = l.pendingLanes & -62914561; 0 < s; ) {
      var m = 31 - Ul(s), v = 1 << m, A = r[m];
      A === -1 ? ((v & u) === 0 || (v & c) !== 0) && (r[m] = Gt(v, n)) : A <= n && (l.expiredLanes |= v), s &= ~v;
    }
    if (n = Ce, u = ee, u = yt(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (Oe === 2 || Oe === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && Ci(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || te(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && Ci(c), Am(u)) {
        case 2:
        case 8:
          u = No;
          break;
        case 32:
          u = Cn;
          break;
        case 268435456:
          u = xo;
          break;
        default:
          u = Cn;
      }
      return c = gs.bind(null, l), u = ht(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && Ci(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function gs(l, n) {
    if (zl !== 0 && zl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (zf() && l.callbackNode !== u)
      return null;
    var c = ee;
    return c = yt(
      l,
      l === Ce ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (mg(l, c, n), lp(l, gl()), l.callbackNode != null && l.callbackNode === u ? gs.bind(null, l) : null);
  }
  function io(l, n) {
    if (zf()) return null;
    mg(l, n, !0);
  }
  function vs() {
    Gg(function() {
      (pe & 6) !== 0 ? ht(
        Ho,
        Oh
      ) : ep();
    });
  }
  function _h() {
    if (gi === 0) {
      var l = Vi;
      l === 0 && (l = P, P <<= 1, (P & 261888) === 0 && (P = 256)), gi = l;
    }
    return gi;
  }
  function Ng(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : mn("" + l);
  }
  function co(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Ss(l, n, u, c, r) {
    if (n === "submit" && u && u.stateNode === r) {
      var s = Ng(
        (r[fa] || null).action
      ), m = c.submitter;
      m && (n = (n = m[fa] || null) ? Ng(n.formAction) : m.getAttribute("formAction"), n !== null && (s = n, m = null));
      var v = new Or(
        "action",
        "action",
        null,
        c,
        r
      );
      l.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (gi !== 0) {
                  var A = m ? co(r, m) : new FormData(r);
                  sf(
                    u,
                    {
                      pending: !0,
                      data: A,
                      method: r.method,
                      action: s
                    },
                    null,
                    A
                  );
                }
              } else
                typeof s == "function" && (v.preventDefault(), A = m ? co(r, m) : new FormData(r), sf(
                  u,
                  {
                    pending: !0,
                    data: A,
                    method: r.method,
                    action: s
                  },
                  s,
                  A
                ));
            },
            currentTarget: r
          }
        ]
      });
    }
  }
  for (var zh = 0; zh < ko.length; zh++) {
    var Rf = ko[zh], ap = Rf.toLowerCase(), np = Rf[0].toUpperCase() + Rf.slice(1);
    sa(
      ap,
      "on" + np
    );
  }
  sa(Mr, "onAnimationEnd"), sa(Wm, "onAnimationIteration"), sa(zd, "onAnimationStart"), sa("dblclick", "onDoubleClick"), sa("focusin", "onFocus"), sa("focusout", "onBlur"), sa(jc, "onTransitionRun"), sa(Cr, "onTransitionStart"), sa(yu, "onTransitionCancel"), sa(V0, "onTransitionEnd"), ru("onMouseEnter", ["mouseout", "mouseover"]), ru("onMouseLeave", ["mouseout", "mouseover"]), ru("onPointerEnter", ["pointerout", "pointerover"]), ru("onPointerLeave", ["pointerout", "pointerover"]), Bi(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Bi(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Bi("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Bi(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Bi(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Bi(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Mf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), xg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mf)
  );
  function Bg(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], r = c.event;
      c = c.listeners;
      t: {
        var s = void 0;
        if (n)
          for (var m = c.length - 1; 0 <= m; m--) {
            var v = c[m], A = v.instance, j = v.currentTarget;
            if (v = v.listener, A !== s && r.isPropagationStopped())
              break t;
            s = v, r.currentTarget = j;
            try {
              s(r);
            } catch (L) {
              Yc(L);
            }
            r.currentTarget = null, s = A;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (v = c[m], A = v.instance, j = v.currentTarget, v = v.listener, A !== s && r.isPropagationStopped())
              break t;
            s = v, r.currentTarget = j;
            try {
              s(r);
            } catch (L) {
              Yc(L);
            }
            r.currentTarget = null, s = A;
          }
      }
    }
  }
  function ne(l, n) {
    var u = n[ud];
    u === void 0 && (u = n[ud] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (bs(n, l, 2, !1), u.add(c));
  }
  function up(l, n, u) {
    var c = 0;
    n && (c |= 4), bs(
      u,
      l,
      c,
      n
    );
  }
  var Dh = "_reactListening" + Math.random().toString(36).slice(2);
  function Cf(l) {
    if (!l[Dh]) {
      l[Dh] = !0, _c.forEach(function(u) {
        u !== "selectionchange" && (xg.has(u) || up(u, !1, l), up(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Dh] || (n[Dh] = !0, up("selectionchange", !1, n));
    }
  }
  function bs(l, n, u, c) {
    switch (Ms(n)) {
      case 2:
        var r = Yu;
        break;
      case 8:
        r = qu;
        break;
      default:
        r = kl;
    }
    u = r.bind(
      null,
      n,
      u,
      l
    ), r = void 0, !Tr || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (r = !0), c ? r !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: r
    }) : l.addEventListener(n, u, !0) : r !== void 0 ? l.addEventListener(n, u, {
      passive: r
    }) : l.addEventListener(n, u, !1);
  }
  function ip(l, n, u, c, r) {
    var s = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      t: for (; ; ) {
        if (c === null) return;
        var m = c.tag;
        if (m === 3 || m === 4) {
          var v = c.stateNode.containerInfo;
          if (v === r) break;
          if (m === 4)
            for (m = c.return; m !== null; ) {
              var A = m.tag;
              if ((A === 3 || A === 4) && m.stateNode.containerInfo === r)
                return;
              m = m.return;
            }
          for (; v !== null; ) {
            if (m = Tc(v), m === null) return;
            if (A = m.tag, A === 5 || A === 6 || A === 26 || A === 27) {
              c = s = m;
              continue t;
            }
            v = v.parentNode;
          }
        }
        c = c.return;
      }
    Hm(function() {
      var j = s, L = hd(u), $ = [];
      t: {
        var Y = pu.get(l);
        if (Y !== void 0) {
          var X = Or, st = l;
          switch (l) {
            case "keypress":
              if (yd(u) === 0) break t;
            case "keydown":
            case "keyup":
              X = Sd;
              break;
            case "focusin":
              st = "focus", X = gd;
              break;
            case "focusout":
              st = "blur", X = gd;
              break;
            case "beforeblur":
            case "afterblur":
              X = gd;
              break;
            case "click":
              if (u.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              X = Vo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              X = H0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              X = Y0;
              break;
            case Mr:
            case Wm:
            case zd:
              X = x0;
              break;
            case V0:
              X = l1;
              break;
            case "scroll":
            case "scrollend":
              X = t1;
              break;
            case "wheel":
              X = a1;
              break;
            case "copy":
            case "cut":
            case "paste":
              X = Mc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              X = Bn;
              break;
            case "toggle":
            case "beforetoggle":
              X = Xm;
          }
          var Dt = (n & 4) !== 0, He = !Dt && (l === "scroll" || l === "scrollend"), H = Dt ? Y !== null ? Y + "Capture" : null : Y;
          Dt = [];
          for (var z = j, x; z !== null; ) {
            var K = z;
            if (x = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || x === null || H === null || (K = Hl(z, H), K != null && Dt.push(
              Es(z, K, x)
            )), He) break;
            z = z.return;
          }
          0 < Dt.length && (Y = new X(
            Y,
            st,
            null,
            u,
            L
          ), $.push({ event: Y, listeners: Dt }));
        }
      }
      if ((n & 7) === 0) {
        t: {
          if (Y = l === "mouseover" || l === "pointerover", X = l === "mouseout" || l === "pointerout", Y && u !== dd && (st = u.relatedTarget || u.fromElement) && (Tc(st) || st[Ni]))
            break t;
          if ((X || Y) && (Y = L.window === L ? L : (Y = L.ownerDocument) ? Y.defaultView || Y.parentWindow : window, X ? (st = u.relatedTarget || u.toElement, X = j, st = st ? Tc(st) : null, st !== null && (He = zt(st), Dt = st.tag, st !== He || Dt !== 5 && Dt !== 27 && Dt !== 6) && (st = null)) : (X = null, st = j), X !== st)) {
            if (Dt = Vo, K = "onMouseLeave", H = "onMouseEnter", z = "mouse", (l === "pointerout" || l === "pointerover") && (Dt = Bn, K = "onPointerLeave", H = "onPointerEnter", z = "pointer"), He = X == null ? Y : jo(X), x = st == null ? Y : jo(st), Y = new Dt(
              K,
              z + "leave",
              X,
              u,
              L
            ), Y.target = He, Y.relatedTarget = x, K = null, Tc(L) === j && (Dt = new Dt(
              H,
              z + "enter",
              st,
              u,
              L
            ), Dt.target = x, Dt.relatedTarget = He, K = Dt), He = K, X && st)
              e: {
                for (Dt = jg, H = X, z = st, x = 0, K = H; K; K = Dt(K))
                  x++;
                K = 0;
                for (var Et = z; Et; Et = Dt(Et))
                  K++;
                for (; 0 < x - K; )
                  H = Dt(H), x--;
                for (; 0 < K - x; )
                  z = Dt(z), K--;
                for (; x--; ) {
                  if (H === z || z !== null && H === z.alternate) {
                    Dt = H;
                    break e;
                  }
                  H = Dt(H), z = Dt(z);
                }
                Dt = null;
              }
            else Dt = null;
            X !== null && Rh(
              $,
              Y,
              X,
              Dt,
              !1
            ), st !== null && He !== null && Rh(
              $,
              He,
              st,
              Dt,
              !0
            );
          }
        }
        t: {
          if (Y = j ? jo(j) : window, X = Y.nodeName && Y.nodeName.toLowerCase(), X === "select" || X === "input" && Y.type === "file")
            var de = Jm;
          else if (mu(Y))
            if (Td)
              de = xc;
            else {
              de = Q0;
              var pt = X0;
            }
          else
            X = Y.nodeName, !X || X.toLowerCase() !== "input" || Y.type !== "checkbox" && Y.type !== "radio" ? j && Um(j.elementType) && (de = Jm) : de = wi;
          if (de && (de = de(l, j))) {
            Zm(
              $,
              de,
              u,
              L
            );
            break t;
          }
          pt && pt(l, Y, j), l === "focusout" && j && Y.type === "number" && j.memoizedProps.value != null && zc(Y, "number", Y.value);
        }
        switch (pt = j ? jo(j) : window, l) {
          case "focusin":
            (mu(pt) || pt.contentEditable === "true") && (Xi = pt, Ko = j, gn = null);
            break;
          case "focusout":
            gn = Ko = Xi = null;
            break;
          case "mousedown":
            Yn = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Yn = !1, _d($, u, L);
            break;
          case "selectionchange":
            if (Rr) break;
          case "keydown":
          case "keyup":
            _d($, u, L);
        }
        var Xt;
        if (Zo)
          t: {
            switch (l) {
              case "compositionstart":
                var $t = "onCompositionStart";
                break t;
              case "compositionend":
                $t = "onCompositionEnd";
                break t;
              case "compositionupdate":
                $t = "onCompositionUpdate";
                break t;
            }
            $t = void 0;
          }
        else
          Uc ? Ed(l, u) && ($t = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && ($t = "onCompositionStart");
        $t && (Qm && u.locale !== "ko" && (Uc || $t !== "onCompositionStart" ? $t === "onCompositionEnd" && Uc && (Xt = xm()) : (ti = L, Nm = "value" in ti ? ti.value : ti.textContent, Uc = !0)), pt = Ts(j, $t), 0 < pt.length && ($t = new B0(
          $t,
          l,
          null,
          u,
          L
        ), $.push({ event: $t, listeners: pt }), Xt ? $t.data = Xt : (Xt = Lm(u), Xt !== null && ($t.data = Xt)))), (Xt = ea ? G0(l, u) : n1(l, u)) && ($t = Ts(j, "onBeforeInput"), 0 < $t.length && (pt = new B0(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          L
        ), $.push({
          event: pt,
          listeners: $t
        }), pt.data = Xt)), Ss(
          $,
          l,
          j,
          u,
          L
        );
      }
      Bg($, n);
    });
  }
  function Es(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function Ts(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var r = l, s = r.stateNode;
      if (r = r.tag, r !== 5 && r !== 26 && r !== 27 || s === null || (r = Hl(l, u), r != null && c.unshift(
        Es(l, r, s)
      ), r = Hl(l, n), r != null && c.push(
        Es(l, r, s)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function jg(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Rh(l, n, u, c, r) {
    for (var s = n._reactName, m = []; u !== null && u !== c; ) {
      var v = u, A = v.alternate, j = v.stateNode;
      if (v = v.tag, A !== null && A === c) break;
      v !== 5 && v !== 26 && v !== 27 || j === null || (A = j, r ? (j = Hl(u, s), j != null && m.unshift(
        Es(u, j, A)
      )) : r || (j = Hl(u, s), j != null && m.push(
        Es(u, j, A)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var Yg = /\r\n?/g, cp = /\u0000|\uFFFD/g;
  function op(l) {
    return (typeof l == "string" ? l : "" + l).replace(Yg, `
`).replace(cp, "");
  }
  function fp(l, n) {
    return n = op(n), op(l) === n;
  }
  function Ue(l, n, u, c, r, s) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || su(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && su(l, "" + c);
        break;
      case "className":
        fd(l, "class", c);
        break;
      case "tabIndex":
        fd(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        fd(l, u, c);
        break;
      case "style":
        M0(l, c, s);
        break;
      case "data":
        if (n !== "object") {
          fd(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = mn("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == "function" && (u === "formAction" ? (n !== "input" && Ue(l, n, "name", r.name, r, null), Ue(
            l,
            n,
            "formEncType",
            r.formEncType,
            r,
            null
          ), Ue(
            l,
            n,
            "formMethod",
            r.formMethod,
            r,
            null
          ), Ue(
            l,
            n,
            "formTarget",
            r.formTarget,
            r,
            null
          )) : (Ue(l, n, "encType", r.encType, r, null), Ue(l, n, "method", r.method, r, null), Ue(l, n, "target", r.target, r, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = mn("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = Hn);
        break;
      case "onScroll":
        c != null && ne("scroll", l);
        break;
      case "onScrollEnd":
        c != null && ne("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(C(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(C(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = mn("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        ne("beforetoggle", l), ne("toggle", l), wo(l, "popover", c);
        break;
      case "xlinkActuate":
        Iu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        Iu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        Iu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        Iu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        Iu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        Iu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        Iu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        Iu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        Iu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        wo(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Pv.get(u) || u, wo(l, u, c));
    }
  }
  function rp(l, n, u, c, r, s) {
    switch (u) {
      case "style":
        M0(l, c, s);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(C(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(C(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? su(l, c) : (typeof c == "number" || typeof c == "bigint") && su(l, "" + c);
        break;
      case "onScroll":
        c != null && ne("scroll", l);
        break;
      case "onScrollEnd":
        c != null && ne("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = Hn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!xi.hasOwnProperty(u))
          t: {
            if (u[0] === "o" && u[1] === "n" && (r = u.endsWith("Capture"), n = u.slice(2, r ? u.length - 7 : void 0), s = l[fa] || null, s = s != null ? s[u] : null, typeof s == "function" && l.removeEventListener(n, s, r), typeof c == "function")) {
              typeof s != "function" && s !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, r);
              break t;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : wo(l, u, c);
          }
    }
  }
  function $l(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ne("error", l), ne("load", l);
        var c = !1, r = !1, s;
        for (s in u)
          if (u.hasOwnProperty(s)) {
            var m = u[s];
            if (m != null)
              switch (s) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(C(137, n));
                default:
                  Ue(l, n, s, m, u, null);
              }
          }
        r && Ue(l, n, "srcSet", u.srcSet, u, null), c && Ue(l, n, "src", u.src, u, null);
        return;
      case "input":
        ne("invalid", l);
        var v = s = m = r = null, A = null, j = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var L = u[c];
            if (L != null)
              switch (c) {
                case "name":
                  r = L;
                  break;
                case "type":
                  m = L;
                  break;
                case "checked":
                  A = L;
                  break;
                case "defaultChecked":
                  j = L;
                  break;
                case "value":
                  s = L;
                  break;
                case "defaultValue":
                  v = L;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (L != null)
                    throw Error(C(137, n));
                  break;
                default:
                  Ue(l, n, c, L, u, null);
              }
          }
        Sr(
          l,
          s,
          v,
          A,
          j,
          m,
          r,
          !1
        );
        return;
      case "select":
        ne("invalid", l), c = m = s = null;
        for (r in u)
          if (u.hasOwnProperty(r) && (v = u[r], v != null))
            switch (r) {
              case "value":
                s = v;
                break;
              case "defaultValue":
                m = v;
                break;
              case "multiple":
                c = v;
              default:
                Ue(l, n, r, v, u, null);
            }
        n = s, u = m, l.multiple = !!c, n != null ? Go(l, !!c, n, !1) : u != null && Go(l, !!c, u, !0);
        return;
      case "textarea":
        ne("invalid", l), s = r = c = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (v = u[m], v != null))
            switch (m) {
              case "value":
                c = v;
                break;
              case "defaultValue":
                r = v;
                break;
              case "children":
                s = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(C(91));
                break;
              default:
                Ue(l, n, m, v, u, null);
            }
        Cm(l, c, r, s);
        return;
      case "option":
        for (A in u)
          u.hasOwnProperty(A) && (c = u[A], c != null) && (A === "selected" ? l.selected = c && typeof c != "function" && typeof c != "symbol" : Ue(l, n, A, c, u, null));
        return;
      case "dialog":
        ne("beforetoggle", l), ne("toggle", l), ne("cancel", l), ne("close", l);
        break;
      case "iframe":
      case "object":
        ne("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < Mf.length; c++)
          ne(Mf[c], l);
        break;
      case "image":
        ne("error", l), ne("load", l);
        break;
      case "details":
        ne("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        ne("error", l), ne("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (j in u)
          if (u.hasOwnProperty(j) && (c = u[j], c != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(C(137, n));
              default:
                Ue(l, n, j, c, u, null);
            }
        return;
      default:
        if (Um(n)) {
          for (L in u)
            u.hasOwnProperty(L) && (c = u[L], c !== void 0 && rp(
              l,
              n,
              L,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (v in u)
      u.hasOwnProperty(v) && (c = u[v], c != null && Ue(l, n, v, c, u, null));
  }
  function sp(l, n, u, c) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var r = null, s = null, m = null, v = null, A = null, j = null, L = null;
        for (X in u) {
          var $ = u[X];
          if (u.hasOwnProperty(X) && $ != null)
            switch (X) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = $;
              default:
                c.hasOwnProperty(X) || Ue(l, n, X, null, c, $);
            }
        }
        for (var Y in c) {
          var X = c[Y];
          if ($ = u[Y], c.hasOwnProperty(Y) && (X != null || $ != null))
            switch (Y) {
              case "type":
                s = X;
                break;
              case "name":
                r = X;
                break;
              case "checked":
                j = X;
                break;
              case "defaultChecked":
                L = X;
                break;
              case "value":
                m = X;
                break;
              case "defaultValue":
                v = X;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (X != null)
                  throw Error(C(137, n));
                break;
              default:
                X !== $ && Ue(
                  l,
                  n,
                  Y,
                  X,
                  c,
                  $
                );
            }
        }
        vr(
          l,
          m,
          v,
          A,
          j,
          L,
          s,
          r
        );
        return;
      case "select":
        X = m = v = Y = null;
        for (s in u)
          if (A = u[s], u.hasOwnProperty(s) && A != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                X = A;
              default:
                c.hasOwnProperty(s) || Ue(
                  l,
                  n,
                  s,
                  null,
                  c,
                  A
                );
            }
        for (r in c)
          if (s = c[r], A = u[r], c.hasOwnProperty(r) && (s != null || A != null))
            switch (r) {
              case "value":
                Y = s;
                break;
              case "defaultValue":
                v = s;
                break;
              case "multiple":
                m = s;
              default:
                s !== A && Ue(
                  l,
                  n,
                  r,
                  s,
                  c,
                  A
                );
            }
        n = v, u = m, c = X, Y != null ? Go(l, !!u, Y, !1) : !!c != !!u && (n != null ? Go(l, !!u, n, !0) : Go(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        X = Y = null;
        for (v in u)
          if (r = u[v], u.hasOwnProperty(v) && r != null && !c.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ue(l, n, v, null, c, r);
            }
        for (m in c)
          if (r = c[m], s = u[m], c.hasOwnProperty(m) && (r != null || s != null))
            switch (m) {
              case "value":
                Y = r;
                break;
              case "defaultValue":
                X = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(C(91));
                break;
              default:
                r !== s && Ue(l, n, m, r, c, s);
            }
        Mm(l, Y, X);
        return;
      case "option":
        for (var st in u)
          Y = u[st], u.hasOwnProperty(st) && Y != null && !c.hasOwnProperty(st) && (st === "selected" ? l.selected = !1 : Ue(
            l,
            n,
            st,
            null,
            c,
            Y
          ));
        for (A in c)
          Y = c[A], X = u[A], c.hasOwnProperty(A) && Y !== X && (Y != null || X != null) && (A === "selected" ? l.selected = Y && typeof Y != "function" && typeof Y != "symbol" : Ue(
            l,
            n,
            A,
            Y,
            c,
            X
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Dt in u)
          Y = u[Dt], u.hasOwnProperty(Dt) && Y != null && !c.hasOwnProperty(Dt) && Ue(l, n, Dt, null, c, Y);
        for (j in c)
          if (Y = c[j], X = u[j], c.hasOwnProperty(j) && Y !== X && (Y != null || X != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Y != null)
                  throw Error(C(137, n));
                break;
              default:
                Ue(
                  l,
                  n,
                  j,
                  Y,
                  c,
                  X
                );
            }
        return;
      default:
        if (Um(n)) {
          for (var He in u)
            Y = u[He], u.hasOwnProperty(He) && Y !== void 0 && !c.hasOwnProperty(He) && rp(
              l,
              n,
              He,
              void 0,
              c,
              Y
            );
          for (L in c)
            Y = c[L], X = u[L], !c.hasOwnProperty(L) || Y === X || Y === void 0 && X === void 0 || rp(
              l,
              n,
              L,
              Y,
              c,
              X
            );
          return;
        }
    }
    for (var H in u)
      Y = u[H], u.hasOwnProperty(H) && Y != null && !c.hasOwnProperty(H) && Ue(l, n, H, null, c, Y);
    for ($ in c)
      Y = c[$], X = u[$], !c.hasOwnProperty($) || Y === X || Y == null && X == null || Ue(l, n, $, Y, c, X);
  }
  function Mh(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function dp() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, n = 0, u = performance.getEntriesByType("resource"), c = 0; c < u.length; c++) {
        var r = u[c], s = r.transferSize, m = r.initiatorType, v = r.duration;
        if (s && v && Mh(m)) {
          for (m = 0, v = r.responseEnd, c += 1; c < u.length; c++) {
            var A = u[c], j = A.startTime;
            if (j > v) break;
            var L = A.transferSize, $ = A.initiatorType;
            L && Mh($) && (A = A.responseEnd, m += L * (A < v ? 1 : (v - j) / (A - j)));
          }
          if (--c, n += 8 * (s + m) / (r.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Ch = null, Uh = null;
  function fc(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function qg(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function hp(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function Uf(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Hh = null;
  function o1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Hh ? !1 : (Hh = l, !0) : (Hh = null, !1);
  }
  var As = typeof setTimeout == "function" ? setTimeout : void 0, wg = typeof clearTimeout == "function" ? clearTimeout : void 0, oo = typeof Promise == "function" ? Promise : void 0, Gg = typeof queueMicrotask == "function" ? queueMicrotask : typeof oo < "u" ? function(l) {
    return oo.resolve(null).then(l).catch(mp);
  } : As;
  function mp(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Fn(l) {
    return l === "head";
  }
  function yp(l, n) {
    var u = n, c = 0;
    do {
      var r = u.nextSibling;
      if (l.removeChild(u), r && r.nodeType === 8)
        if (u = r.data, u === "/$" || u === "/&") {
          if (c === 0) {
            l.removeChild(r), Lf(n);
            return;
          }
          c--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          c++;
        else if (u === "html")
          fo(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, fo(u);
          for (var s = u.firstChild; s; ) {
            var m = s.nextSibling, v = s.nodeName;
            s[fu] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && s.rel.toLowerCase() === "stylesheet" || u.removeChild(s), s = m;
          }
        } else
          u === "body" && fo(l.ownerDocument.body);
      u = r;
    } while (u);
    Lf(n);
  }
  function yl(l, n) {
    var u = l;
    l = 0;
    do {
      var c = u.nextSibling;
      if (u.nodeType === 1 ? n ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (n ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), c && c.nodeType === 8)
        if (u = c.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = c;
    } while (u);
  }
  function Os(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Os(u), id(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function f1(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var r = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[fu])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (s = l.getAttribute("rel"), s === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (s !== r.rel || l.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || l.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || l.getAttribute("title") !== (r.title == null ? null : r.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (s = l.getAttribute("src"), (s !== (r.src == null ? null : r.src) || l.getAttribute("type") !== (r.type == null ? null : r.type) || l.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && s && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var s = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && l.getAttribute("name") === s)
          return l;
      } else return l;
      if (l = Aa(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Wt(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Aa(l.nextSibling), l === null)) return null;
    return l;
  }
  function Xg(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = Aa(l.nextSibling), l === null)) return null;
    return l;
  }
  function _n(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function rc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Hf(l, n) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = n;
    else if (l.data !== "$?" || u.readyState !== "loading")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function Aa(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return l;
  }
  var _s = null;
  function Nh(l) {
    l = l.nextSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (n === 0)
            return Aa(l.nextSibling);
          n--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || n++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function In(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (n === 0) return l;
          n--;
        } else u !== "/$" && u !== "/&" || n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Nf(l, n, u) {
    switch (n = fc(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(C(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(C(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(C(454));
        return l;
      default:
        throw Error(C(451));
    }
  }
  function fo(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    id(l);
  }
  var Ha = /* @__PURE__ */ new Map(), zs = /* @__PURE__ */ new Set();
  function na(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Pn = Z.d;
  Z.d = {
    f: r1,
    r: Qg,
    D: G,
    C: be,
    L: s1,
    m: pp,
    X: Si,
    S: gp,
    M: sc
  };
  function r1() {
    var l = Pn.f(), n = Of();
    return l || n;
  }
  function Qg(l) {
    var n = Ac(l);
    n !== null && n.tag === 5 && n.type === "form" ? Me(n) : Pn.r(l);
  }
  var xf = typeof document > "u" ? null : document;
  function bl(l, n, u) {
    var c = xf;
    if (c && typeof n == "string" && n) {
      var r = La(n);
      r = 'link[rel="' + l + '"][href="' + r + '"]', typeof u == "string" && (r += '[crossorigin="' + u + '"]'), zs.has(r) || (zs.add(r), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(r) === null && (n = c.createElement("link"), $l(n, "link", l), Ee(n), c.head.appendChild(n)));
    }
  }
  function G(l) {
    Pn.D(l), bl("dns-prefetch", l, null);
  }
  function be(l, n) {
    Pn.C(l, n), bl("preconnect", l, n);
  }
  function s1(l, n, u) {
    Pn.L(l, n, u);
    var c = xf;
    if (c && l && n) {
      var r = 'link[rel="preload"][as="' + La(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (r += '[imagesrcset="' + La(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (r += '[imagesizes="' + La(
        u.imageSizes
      ) + '"]')) : r += '[href="' + La(l) + '"]';
      var s = r;
      switch (n) {
        case "style":
          s = an(l);
          break;
        case "script":
          s = ro(l);
      }
      Ha.has(s) || (l = Q(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Ha.set(s, l), c.querySelector(r) !== null || n === "style" && c.querySelector(dc(s)) || n === "script" && c.querySelector(Yf(s)) || (n = c.createElement("link"), $l(n, "link", l), Ee(n), c.head.appendChild(n)));
    }
  }
  function pp(l, n) {
    Pn.m(l, n);
    var u = xf;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", r = 'link[rel="modulepreload"][as="' + La(c) + '"][href="' + La(l) + '"]', s = r;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = ro(l);
      }
      if (!Ha.has(s) && (l = Q({ rel: "modulepreload", href: l }, n), Ha.set(s, l), u.querySelector(r) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Yf(s)))
              return;
        }
        c = u.createElement("link"), $l(c, "link", l), Ee(c), u.head.appendChild(c);
      }
    }
  }
  function gp(l, n, u) {
    Pn.S(l, n, u);
    var c = xf;
    if (c && l) {
      var r = Oc(c).hoistableStyles, s = an(l);
      n = n || "default";
      var m = r.get(s);
      if (!m) {
        var v = { loading: 0, preload: null };
        if (m = c.querySelector(
          dc(s)
        ))
          v.loading = 5;
        else {
          l = Q(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Ha.get(s)) && xh(l, u);
          var A = m = c.createElement("link");
          Ee(A), $l(A, "link", l), A._p = new Promise(function(j, L) {
            A.onload = j, A.onerror = L;
          }), A.addEventListener("load", function() {
            v.loading |= 1;
          }), A.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, Ds(m, n, c);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: v
        }, r.set(s, m);
      }
    }
  }
  function Si(l, n) {
    Pn.X(l, n);
    var u = xf;
    if (u && l) {
      var c = Oc(u).hoistableScripts, r = ro(l), s = c.get(r);
      s || (s = u.querySelector(Yf(r)), s || (l = Q({ src: l, async: !0 }, n), (n = Ha.get(r)) && Bh(l, n), s = u.createElement("script"), Ee(s), $l(s, "link", l), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(r, s));
    }
  }
  function sc(l, n) {
    Pn.M(l, n);
    var u = xf;
    if (u && l) {
      var c = Oc(u).hoistableScripts, r = ro(l), s = c.get(r);
      s || (s = u.querySelector(Yf(r)), s || (l = Q({ src: l, async: !0, type: "module" }, n), (n = Ha.get(r)) && Bh(l, n), s = u.createElement("script"), Ee(s), $l(s, "link", l), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(r, s));
    }
  }
  function Bf(l, n, u, c) {
    var r = (r = wt.current) ? na(r) : null;
    if (!r) throw Error(C(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = an(u.href), u = Oc(
          r
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = an(u.href);
          var s = Oc(
            r
          ).hoistableStyles, m = s.get(l);
          if (m || (r = r.ownerDocument || r, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(l, m), (s = r.querySelector(
            dc(l)
          )) && !s._p && (m.instance = s, m.state.loading = 5), Ha.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Ha.set(l, u), s || Lg(
            r,
            l,
            u,
            m.state
          ))), n && c === null)
            throw Error(C(528, ""));
          return m;
        }
        if (n && c !== null)
          throw Error(C(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = ro(u), u = Oc(
          r
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(C(444, l));
    }
  }
  function an(l) {
    return 'href="' + La(l) + '"';
  }
  function dc(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function jf(l) {
    return Q({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Lg(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), $l(n, "link", u), Ee(n), l.head.appendChild(n));
  }
  function ro(l) {
    return '[src="' + La(l) + '"]';
  }
  function Yf(l) {
    return "script[async]" + l;
  }
  function vp(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + La(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Ee(c), c;
          var r = Q({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Ee(c), $l(c, "style", r), Ds(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          r = an(u.href);
          var s = l.querySelector(
            dc(r)
          );
          if (s)
            return n.state.loading |= 4, n.instance = s, Ee(s), s;
          c = jf(u), (r = Ha.get(r)) && xh(c, r), s = (l.ownerDocument || l).createElement("link"), Ee(s);
          var m = s;
          return m._p = new Promise(function(v, A) {
            m.onload = v, m.onerror = A;
          }), $l(s, "link", c), n.state.loading |= 4, Ds(s, u.precedence, l), n.instance = s;
        case "script":
          return s = ro(u.src), (r = l.querySelector(
            Yf(s)
          )) ? (n.instance = r, Ee(r), r) : (c = u, (r = Ha.get(s)) && (c = Q({}, u), Bh(c, r)), l = l.ownerDocument || l, r = l.createElement("script"), Ee(r), $l(r, "link", c), l.head.appendChild(r), n.instance = r);
        case "void":
          return null;
        default:
          throw Error(C(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, Ds(c, u.precedence, l));
    return n.instance;
  }
  function Ds(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), r = c.length ? c[c.length - 1] : null, s = r, m = 0; m < c.length; m++) {
      var v = c[m];
      if (v.dataset.precedence === n) s = v;
      else if (s !== r) break;
    }
    s ? s.parentNode.insertBefore(l, s.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function xh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Bh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var qf = null;
  function Sp(l, n, u) {
    if (qf === null) {
      var c = /* @__PURE__ */ new Map(), r = qf = /* @__PURE__ */ new Map();
      r.set(u, c);
    } else
      r = qf, c = r.get(u), c || (c = /* @__PURE__ */ new Map(), r.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), r = 0; r < u.length; r++) {
      var s = u[r];
      if (!(s[fu] || s[Re] || l === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = s.getAttribute(n) || "";
        m = l + m;
        var v = c.get(m);
        v ? v.push(s) : c.set(m, [s]);
      }
    }
    return c;
  }
  function jh(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function bp(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        return n.rel === "stylesheet" ? (l = n.disabled, typeof n.precedence == "string" && l == null) : !0;
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function Na(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function ju(l, n, u, c) {
    if (u.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var r = an(c.href), s = n.querySelector(
          dc(r)
        );
        if (s) {
          n = s._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = Yh.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = s, Ee(s);
          return;
        }
        s = n.ownerDocument || n, c = jf(c), (r = Ha.get(r)) && xh(c, r), s = s.createElement("link"), Ee(s);
        var m = s;
        m._p = new Promise(function(v, A) {
          m.onload = v, m.onerror = A;
        }), $l(s, "link", c), u.instance = s;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Yh.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var nn = 0;
  function Ep(l, n) {
    return l.stylesheets && l.count === 0 && wh(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var c = setTimeout(function() {
        if (l.stylesheets && wh(l, l.stylesheets), l.unsuspend) {
          var s = l.unsuspend;
          l.unsuspend = null, s();
        }
      }, 6e4 + n);
      0 < l.imgBytes && nn === 0 && (nn = 62500 * dp());
      var r = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && wh(l, l.stylesheets), l.unsuspend)) {
            var s = l.unsuspend;
            l.unsuspend = null, s();
          }
        },
        (l.imgBytes > nn ? 50 : 800) + n
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(c), clearTimeout(r);
      };
    } : null;
  }
  function Yh() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) wh(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var qh = null;
  function wh(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, qh = /* @__PURE__ */ new Map(), n.forEach(wl, l), qh = null, Yh.call(l));
  }
  function wl(l, n) {
    if (!(n.state.loading & 4)) {
      var u = qh.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), qh.set(l, u);
        for (var r = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < r.length; s++) {
          var m = r[s];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      r = n.instance, m = r.getAttribute("data-precedence"), s = u.get(m) || c, s === c && u.set(null, r), u.set(m, r), this.count++, c = Yh.bind(this), r.addEventListener("load", c), r.addEventListener("error", c), s ? s.parentNode.insertBefore(r, s.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(r, l.firstChild)), n.state.loading |= 4;
    }
  }
  var Rs = {
    $$typeof: xe,
    Provider: null,
    Consumer: null,
    _currentValue: et,
    _currentValue2: et,
    _threadCount: 0
  };
  function Tp(l, n, u, c, r, s, m, v, A) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = hn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hn(0), this.hiddenUpdates = hn(null), this.identifierPrefix = c, this.onUncaughtError = r, this.onCaughtError = s, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = A, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Gh(l, n, u, c, r, s, m, v, A, j, L, $) {
    return l = new Tp(
      l,
      n,
      u,
      m,
      A,
      j,
      L,
      $,
      v
    ), n = 1, s === !0 && (n |= 24), s = il(3, null, null, n), l.current = s, s.stateNode = l, n = jr(), n.refCount++, l.pooledCache = n, n.refCount++, s.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, Lr(s), l;
  }
  function so(l) {
    return l ? (l = da, l) : da;
  }
  function Vg(l, n, u, c, r, s) {
    r = so(r), c.context === null ? c.context = r : c.pendingContext = r, c = fi(n), c.payload = { element: u }, s = s === void 0 ? null : s, s !== null && (c.callback = s), u = Wa(l, c, n), u !== null && (Ta(u, l, n), Wi(u, l, n));
  }
  function Xh(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function Ap(l, n) {
    Xh(l, n), (l = l.alternate) && Xh(l, n);
  }
  function Zg(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = li(l, 67108864);
      n !== null && Ta(n, l, 67108864), Ap(l, 67108864);
    }
  }
  function ho(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = Ua();
      n = ad(n);
      var u = li(l, n);
      u !== null && Ta(u, l, n), Ap(l, n);
    }
  }
  var Dl = !0;
  function Yu(l, n, u, c) {
    var r = R.T;
    R.T = null;
    var s = Z.p;
    try {
      Z.p = 2, kl(l, n, u, c);
    } finally {
      Z.p = s, R.T = r;
    }
  }
  function qu(l, n, u, c) {
    var r = R.T;
    R.T = null;
    var s = Z.p;
    try {
      Z.p = 8, kl(l, n, u, c);
    } finally {
      Z.p = s, R.T = r;
    }
  }
  function kl(l, n, u, c) {
    if (Dl) {
      var r = Op(c);
      if (r === null)
        ip(
          l,
          n,
          c,
          Qh,
          u
        ), bi(l, c);
      else if (d1(
        r,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (bi(l, c), n & 4 && -1 < Oa.indexOf(l)) {
        for (; r !== null; ) {
          var s = Ac(r);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var m = Mt(s.pendingLanes);
                  if (m !== 0) {
                    var v = s;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var A = 1 << 31 - Ul(m);
                      v.entanglements[1] |= A, m &= ~A;
                    }
                    Bu(s), (pe & 6) === 0 && (Se = gl() + 500, vi(0));
                  }
                }
                break;
              case 31:
              case 13:
                v = li(s, 2), v !== null && Ta(v, s, 2), Of(), Ap(s, 2);
            }
          if (s = Op(c), s === null && ip(
            l,
            n,
            c,
            Qh,
            u
          ), s === r) break;
          r = s;
        }
        r !== null && c.stopPropagation();
      } else
        ip(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function Op(l) {
    return l = hd(l), wf(l);
  }
  var Qh = null;
  function wf(l) {
    if (Qh = null, l = Tc(l), l !== null) {
      var n = zt(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = Lt(n), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = lt(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Qh = l, null;
  }
  function Ms(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ed()) {
          case Ho:
            return 2;
          case No:
            return 8;
          case Cn:
          case ld:
            return 32;
          case xo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Gf = !1, Rl = null, Wl = null, ua = null, hc = /* @__PURE__ */ new Map(), zn = /* @__PURE__ */ new Map(), We = [], Oa = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function bi(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        Rl = null;
        break;
      case "dragenter":
      case "dragleave":
        Wl = null;
        break;
      case "mouseover":
      case "mouseout":
        ua = null;
        break;
      case "pointerover":
      case "pointerout":
        hc.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zn.delete(n.pointerId);
    }
  }
  function mo(l, n, u, c, r, s) {
    return l === null || l.nativeEvent !== s ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: s,
      targetContainers: [r]
    }, n !== null && (n = Ac(n), n !== null && Zg(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, r !== null && n.indexOf(r) === -1 && n.push(r), l);
  }
  function d1(l, n, u, c, r) {
    switch (n) {
      case "focusin":
        return Rl = mo(
          Rl,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "dragenter":
        return Wl = mo(
          Wl,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "mouseover":
        return ua = mo(
          ua,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "pointerover":
        var s = r.pointerId;
        return hc.set(
          s,
          mo(
            hc.get(s) || null,
            l,
            n,
            u,
            c,
            r
          )
        ), !0;
      case "gotpointercapture":
        return s = r.pointerId, zn.set(
          s,
          mo(
            zn.get(s) || null,
            l,
            n,
            u,
            c,
            r
          )
        ), !0;
    }
    return !1;
  }
  function Jg(l) {
    var n = Tc(l.target);
    if (n !== null) {
      var u = zt(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = Lt(u), n !== null) {
            l.blockedOn = n, Om(l.priority, function() {
              ho(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = lt(u), n !== null) {
            l.blockedOn = n, Om(l.priority, function() {
              ho(u);
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Cs(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = Op(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        dd = c, u.target.dispatchEvent(c), dd = null;
      } else
        return n = Ac(u), n !== null && Zg(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Xf(l, n, u) {
    Cs(l) && u.delete(n);
  }
  function Kg() {
    Gf = !1, Rl !== null && Cs(Rl) && (Rl = null), Wl !== null && Cs(Wl) && (Wl = null), ua !== null && Cs(ua) && (ua = null), hc.forEach(Xf), zn.forEach(Xf);
  }
  function wu(l, n) {
    l.blockedOn === n && (l.blockedOn = null, Gf || (Gf = !0, D.unstable_scheduleCallback(
      D.unstable_NormalPriority,
      Kg
    )));
  }
  var Qf = null;
  function $g(l) {
    Qf !== l && (Qf = l, D.unstable_scheduleCallback(
      D.unstable_NormalPriority,
      function() {
        Qf === l && (Qf = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], r = l[n + 2];
          if (typeof c != "function") {
            if (wf(c || u) === null)
              continue;
            break;
          }
          var s = Ac(u);
          s !== null && (l.splice(n, 3), n -= 3, sf(
            s,
            {
              pending: !0,
              data: r,
              method: u.method,
              action: c
            },
            c,
            r
          ));
        }
      }
    ));
  }
  function Lf(l) {
    function n(A) {
      return wu(A, l);
    }
    Rl !== null && wu(Rl, l), Wl !== null && wu(Wl, l), ua !== null && wu(ua, l), hc.forEach(n), zn.forEach(n);
    for (var u = 0; u < We.length; u++) {
      var c = We[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < We.length && (u = We[0], u.blockedOn === null); )
      Jg(u), u.blockedOn === null && We.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var r = u[c], s = u[c + 1], m = r[fa] || null;
        if (typeof s == "function")
          m || $g(u);
        else if (m) {
          var v = null;
          if (s && s.hasAttribute("formAction")) {
            if (r = s, m = s[fa] || null)
              v = m.formAction;
            else if (wf(r) !== null) continue;
          } else v = m.action;
          typeof v == "function" ? u[c + 1] = v : (u.splice(c, 3), c -= 3), $g(u);
        }
      }
  }
  function _p() {
    function l(s) {
      s.canIntercept && s.info === "react-transition" && s.intercept({
        handler: function() {
          return new Promise(function(m) {
            return r = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      r !== null && (r(), r = null), c || setTimeout(u, 20);
    }
    function u() {
      if (!c && !navigation.transition) {
        var s = navigation.currentEntry;
        s && s.url != null && navigation.navigate(s.url, {
          state: s.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var c = !1, r = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(u, 100), function() {
        c = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), r !== null && (r(), r = null);
      };
    }
  }
  function Lh(l) {
    this._internalRoot = l;
  }
  Vh.prototype.render = Lh.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(C(409));
    var u = n.current, c = Ua();
    Vg(u, c, l, n, null, null);
  }, Vh.prototype.unmount = Lh.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Vg(l.current, 2, null, l, null, null), Of(), n[Ni] = null;
    }
  };
  function Vh(l) {
    this._internalRoot = l;
  }
  Vh.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = nd();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < We.length && n !== 0 && n < We[u].priority; u++) ;
      We.splice(u, 0, l), u === 0 && Jg(l);
    }
  };
  var zp = V.version;
  if (zp !== "19.2.7")
    throw Error(
      C(
        527,
        zp,
        "19.2.7"
      )
    );
  Z.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(C(188)) : (l = Object.keys(l).join(","), Error(C(268, l)));
    return l = W(n), l = l !== null ? xt(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var kg = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.2.7"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Us = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Us.isDisabled && Us.supportsFiber)
      try {
        dn = Us.inject(
          kg
        ), Al = Us;
      } catch {
      }
  }
  return E0.createRoot = function(l, n) {
    if (!ut(l)) throw Error(C(299));
    var u = !1, c = "", r = eh, s = Dy, m = lh;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (s = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = Gh(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      null,
      r,
      s,
      m,
      _p
    ), l[Ni] = n.current, Cf(l), new Lh(n);
  }, E0.hydrateRoot = function(l, n, u) {
    if (!ut(l)) throw Error(C(299));
    var c = !1, r = "", s = eh, m = Dy, v = lh, A = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (r = u.identifierPrefix), u.onUncaughtError !== void 0 && (s = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (v = u.onRecoverableError), u.formState !== void 0 && (A = u.formState)), n = Gh(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      r,
      A,
      s,
      m,
      v,
      _p
    ), n.context = so(null), u = n.current, c = Ua(), c = ad(c), r = fi(c), r.callback = null, Wa(u, r, c), u = c, n.current.lanes = u, Hi(n, u), Bu(n), l[Ni] = n.current, Cf(l), new Vh(n);
  }, E0.version = "19.2.7", E0;
}
var T0 = {};
var $2;
function xT() {
  return $2 || ($2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function D(t, e) {
      for (t = t.memoizedState; t !== null && 0 < e; )
        t = t.next, e--;
      return t;
    }
    function V(t, e, a, i) {
      if (a >= e.length) return i;
      var o = e[a], f = bl(t) ? t.slice() : Wt({}, t);
      return f[o] = V(t[o], e, a + 1, i), f;
    }
    function tt(t, e, a) {
      if (e.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (e[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return C(t, e, a, 0);
      }
    }
    function C(t, e, a, i) {
      var o = e[i], f = bl(t) ? t.slice() : Wt({}, t);
      return i + 1 === e.length ? (f[a[i]] = f[o], bl(f) ? f.splice(o, 1) : delete f[o]) : f[o] = C(
        t[o],
        e,
        a,
        i + 1
      ), f;
    }
    function ut(t, e, a) {
      var i = e[a], o = bl(t) ? t.slice() : Wt({}, t);
      return a + 1 === e.length ? (bl(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = ut(t[i], e, a + 1), o);
    }
    function zt() {
      return !1;
    }
    function Lt() {
      return null;
    }
    function lt() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function it() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function W() {
    }
    function xt() {
    }
    function Q(t) {
      var e = [];
      return t.forEach(function(a) {
        e.push(a);
      }), e.sort().join(", ");
    }
    function N(t, e, a, i) {
      return new n1(t, e, a, i);
    }
    function ot(t, e) {
      t.context === Kf && (Rh(t.current, 2, e, t, null, null), en());
    }
    function Zt(t, e) {
      if (Qu !== null) {
        var a = e.staleFamilies;
        e = e.updatedFamilies, os(), G0(
          t.current,
          e,
          a
        ), en();
      }
    }
    function De(t) {
      Qu = t;
    }
    function re(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function ae(t) {
      var e = t, a = t;
      if (t.alternate) for (; e.return; ) e = e.return;
      else {
        t = e;
        do
          e = t, (e.flags & 4098) !== 0 && (a = e.return), t = e.return;
        while (t);
      }
      return e.tag === 3 ? a : null;
    }
    function Tl(t) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function xe(t) {
      if (t.tag === 31) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function Je(t) {
      if (ae(t) !== t)
        throw Error("Unable to find node on an unmounted component.");
    }
    function tl(t) {
      var e = t.alternate;
      if (!e) {
        if (e = ae(t), e === null)
          throw Error("Unable to find node on an unmounted component.");
        return e !== t ? null : t;
      }
      for (var a = t, i = e; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return Je(o), t;
            if (f === i) return Je(o), e;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? t : e;
    }
    function ul(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t;
      for (t = t.child; t !== null; ) {
        if (e = ul(t), e !== null) return e;
        t = t.sibling;
      }
      return null;
    }
    function Rt(t) {
      return t === null || typeof t != "object" ? null : (t = Qg && t[Qg] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    function Jt(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === xf ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case Hf:
          return "Fragment";
        case _s:
          return "Profiler";
        case Aa:
          return "StrictMode";
        case fo:
          return "Suspense";
        case Ha:
          return "SuspenseList";
        case Pn:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case rc:
            return "Portal";
          case In:
            return t.displayName || "Context";
          case Nh:
            return (t._context.displayName || "Context") + ".Consumer";
          case Nf:
            var e = t.render;
            return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case zs:
            return e = t.displayName || null, e !== null ? e : Jt(t.type) || "Memo";
          case na:
            e = t._payload, t = t._init;
            try {
              return Jt(t(e));
            } catch {
            }
        }
      return null;
    }
    function ze(t) {
      return typeof t.tag == "number" ? dt(t) : typeof t.name == "string" ? t.name : null;
    }
    function dt(t) {
      var e = t.type;
      switch (t.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (e._context.displayName || "Context") + ".Consumer";
        case 10:
          return e.displayName || "Context";
        case 18:
          return "DehydratedFragment";
        case 11:
          return t = e.render, t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return e;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Jt(e);
        case 8:
          return e === Aa ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof e == "function")
            return e.displayName || e.name || null;
          if (typeof e == "string") return e;
          break;
        case 29:
          if (e = t._debugInfo, e != null) {
            for (var a = e.length - 1; 0 <= a; a--)
              if (typeof e[a].name == "string") return e[a].name;
          }
          if (t.return !== null)
            return dt(t.return);
      }
      return null;
    }
    function Be(t) {
      return { current: t };
    }
    function gt(t, e) {
      0 > Si ? console.error("Unexpected pop.") : (e !== gp[Si] && console.error("Unexpected Fiber popped."), t.current = pp[Si], pp[Si] = null, gp[Si] = null, Si--);
    }
    function qt(t, e, a) {
      Si++, pp[Si] = t.current, gp[Si] = a, t.current = e;
    }
    function Qe(t) {
      return t === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), t;
    }
    function je(t, e) {
      qt(an, e, t), qt(Bf, t, t), qt(sc, null, t);
      var a = e.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", e = (e = e.documentElement) && (e = e.namespaceURI) ? yg(e) : Ro;
          break;
        default:
          if (a = e.tagName, e = e.namespaceURI)
            e = yg(e), e = pi(
              e,
              a
            );
          else
            switch (a) {
              case "svg":
                e = bm;
                break;
              case "math":
                e = Gv;
                break;
              default:
                e = Ro;
            }
      }
      a = a.toLowerCase(), a = Rm(null, a), a = {
        context: e,
        ancestorInfo: a
      }, gt(sc, t), qt(sc, a, t);
    }
    function R(t) {
      gt(sc, t), gt(Bf, t), gt(an, t);
    }
    function Z() {
      return Qe(sc.current);
    }
    function et(t) {
      t.memoizedState !== null && qt(dc, t, t);
      var e = Qe(sc.current), a = t.type, i = pi(e.context, a);
      a = Rm(e.ancestorInfo, a), i = { context: i, ancestorInfo: a }, e !== i && (qt(Bf, t, t), qt(sc, i, t));
    }
    function vt(t) {
      Bf.current === t && (gt(sc, t), gt(Bf, t)), dc.current === t && (gt(dc, t), y0._currentValue = td);
    }
    function _t() {
    }
    function S() {
      if (jf === 0) {
        Lg = console.log, ro = console.info, Yf = console.warn, vp = console.error, Ds = console.group, xh = console.groupCollapsed, Bh = console.groupEnd;
        var t = {
          configurable: !0,
          enumerable: !0,
          value: _t,
          writable: !0
        };
        Object.defineProperties(console, {
          info: t,
          log: t,
          warn: t,
          error: t,
          group: t,
          groupCollapsed: t,
          groupEnd: t
        });
      }
      jf++;
    }
    function B() {
      if (jf--, jf === 0) {
        var t = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Wt({}, t, { value: Lg }),
          info: Wt({}, t, { value: ro }),
          warn: Wt({}, t, { value: Yf }),
          error: Wt({}, t, { value: vp }),
          group: Wt({}, t, { value: Ds }),
          groupCollapsed: Wt({}, t, { value: xh }),
          groupEnd: Wt({}, t, { value: Bh })
        });
      }
      0 > jf && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function I(t) {
      var e = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, t = t.stack, Error.prepareStackTrace = e, t.startsWith(`Error: react-stack-top-frame
`) && (t = t.slice(29)), e = t.indexOf(`
`), e !== -1 && (t = t.slice(e + 1)), e = t.indexOf("react_stack_bottom_frame"), e !== -1 && (e = t.lastIndexOf(
        `
`,
        e
      )), e !== -1)
        t = t.slice(0, e);
      else return "";
      return t;
    }
    function F(t) {
      if (qf === void 0)
        try {
          throw Error();
        } catch (a) {
          var e = a.stack.trim().match(/\n( *(at )?)/);
          qf = e && e[1] || "", Sp = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + qf + t + Sp;
    }
    function bt(t, e) {
      if (!t || jh) return "";
      var a = bp.get(t);
      if (a !== void 0) return a;
      jh = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = G.H, G.H = null, S();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (e) {
                var E = function() {
                  throw Error();
                };
                if (Object.defineProperty(E.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(E, []);
                  } catch (nt) {
                    var q = nt;
                  }
                  Reflect.construct(t, [], E);
                } else {
                  try {
                    E.call();
                  } catch (nt) {
                    q = nt;
                  }
                  t.call(E.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (nt) {
                  q = nt;
                }
                (E = t()) && typeof E.catch == "function" && E.catch(function() {
                });
              }
            } catch (nt) {
              if (nt && q && typeof nt.stack == "string")
                return [nt.stack, q.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], y = d[1];
        if (h && y) {
          var p = h.split(`
`), _ = y.split(`
`);
          for (d = f = 0; f < p.length && !p[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < _.length && !_[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === p.length || d === _.length)
            for (f = p.length - 1, d = _.length - 1; 1 <= f && 0 <= d && p[f] !== _[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (p[f] !== _[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || p[f] !== _[d]) {
                    var M = `
` + p[f].replace(
                      " at new ",
                      " at "
                    );
                    return t.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", t.displayName)), typeof t == "function" && bp.set(t, M), M;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        jh = !1, G.H = i, B(), Error.prepareStackTrace = a;
      }
      return p = (p = t ? t.displayName || t.name : "") ? F(p) : "", typeof t == "function" && bp.set(t, p), p;
    }
    function wt(t, e) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return F(t.type);
        case 16:
          return F("Lazy");
        case 13:
          return t.child !== e && e !== null ? F("Suspense Fallback") : F("Suspense");
        case 19:
          return F("SuspenseList");
        case 0:
        case 15:
          return bt(t.type, !1);
        case 11:
          return bt(t.type.render, !1);
        case 1:
          return bt(t.type, !0);
        case 31:
          return F("Activity");
        default:
          return "";
      }
    }
    function At(t) {
      try {
        var e = "", a = null;
        do {
          e += wt(t, a);
          var i = t._debugInfo;
          if (i)
            for (var o = i.length - 1; 0 <= o; o--) {
              var f = i[o];
              if (typeof f.name == "string") {
                var d = e;
                t: {
                  var h = f.name, y = f.env, p = f.debugLocation;
                  if (p != null) {
                    var _ = I(p), M = _.lastIndexOf(`
`), E = M === -1 ? _ : _.slice(M + 1);
                    if (E.indexOf(h) !== -1) {
                      var q = `
` + E;
                      break t;
                    }
                  }
                  q = F(
                    h + (y ? " [" + y + "]" : "")
                  );
                }
                e = d + q;
              }
            }
          a = t, t = t.return;
        } while (t);
        return e;
      } catch (nt) {
        return `
Error generating stack: ` + nt.message + `
` + nt.stack;
      }
    }
    function Le(t) {
      return (t = t ? t.displayName || t.name : "") ? F(t) : "";
    }
    function me() {
      if (Na === null) return null;
      var t = Na._debugOwner;
      return t != null ? ze(t) : null;
    }
    function qa() {
      if (Na === null) return "";
      var t = Na;
      try {
        var e = "";
        switch (t.tag === 6 && (t = t.return), t.tag) {
          case 26:
          case 27:
          case 5:
            e += F(t.type);
            break;
          case 13:
            e += F("Suspense");
            break;
          case 19:
            e += F("SuspenseList");
            break;
          case 31:
            e += F("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            t._debugOwner || e !== "" || (e += Le(
              t.type
            ));
            break;
          case 11:
            t._debugOwner || e !== "" || (e += Le(
              t.type.render
            ));
        }
        for (; t; )
          if (typeof t.tag == "number") {
            var a = t;
            t = a._debugOwner;
            var i = a._debugStack;
            if (t && i) {
              var o = I(i);
              o !== "" && (e += `
` + o);
            }
          } else if (t.debugStack != null) {
            var f = t.debugStack;
            (t = t.owner) && f && (e += `
` + I(f));
          } else break;
        var d = e;
      } catch (h) {
        d = `
Error generating stack: ` + h.message + `
` + h.stack;
      }
      return d;
    }
    function ft(t, e, a, i, o, f, d) {
      var h = Na;
      Ri(t);
      try {
        return t !== null && t._debugTask ? t._debugTask.run(
          e.bind(null, a, i, o, f, d)
        ) : e(a, i, o, f, d);
      } finally {
        Ri(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Ri(t) {
      G.getCurrentStack = t === null ? null : qa, ju = !1, Na = t;
    }
    function Mi(t) {
      return typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
    }
    function wa(t) {
      try {
        return iu(t), !1;
      } catch {
        return !0;
      }
    }
    function iu(t) {
      return "" + t;
    }
    function ye(t, e) {
      if (wa(t))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          e,
          Mi(t)
        ), iu(t);
    }
    function Pl(t, e) {
      if (wa(t))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          e,
          Mi(t)
        ), iu(t);
    }
    function Sc(t) {
      if (wa(t))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          Mi(t)
        ), iu(t);
    }
    function mr(t) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var e = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (e.isDisabled) return !0;
      if (!e.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        ho = e.inject(t), Dl = e;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!e.checkDCE;
    }
    function ht(t) {
      if (typeof Ap == "function" && Zg(t), Dl && typeof Dl.setStrictMode == "function")
        try {
          Dl.setStrictMode(ho, t);
        } catch (e) {
          Yu || (Yu = !0, console.error(
            "React instrumentation encountered an error: %o",
            e
          ));
        }
    }
    function Ci(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (Op(t) / Qh | 0) | 0;
    }
    function cu(t) {
      var e = t & 42;
      if (e !== 0) return e;
      switch (t & -t) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return t & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), t;
      }
    }
    function bc(t, e, a) {
      var i = t.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = t.suspendedLanes, d = t.pingedLanes;
      t = t.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = cu(i) : (d &= h, d !== 0 ? o = cu(d) : a || (a = h & ~t, a !== 0 && (o = cu(a))))) : (h = i & ~f, h !== 0 ? o = cu(h) : d !== 0 ? o = cu(d) : a || (a = i & ~t, a !== 0 && (o = cu(a)))), o === 0 ? 0 : e !== 0 && e !== o && (e & f) === 0 && (f = o & -o, a = e & -e, f >= a || f === 32 && (a & 4194048) !== 0) ? e : o;
    }
    function gl(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function ed(t, e) {
      switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return e + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Ho() {
      var t = Gf;
      return Gf <<= 1, (Gf & 62914560) === 0 && (Gf = 4194304), t;
    }
    function No(t) {
      for (var e = [], a = 0; 31 > a; a++) e.push(t);
      return e;
    }
    function Cn(t, e) {
      t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
    }
    function ld(t, e, a, i, o, f) {
      var d = t.pendingLanes;
      t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
      var h = t.entanglements, y = t.expirationTimes, p = t.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var _ = 31 - kl(a), M = 1 << _;
        h[_] = 0, y[_] = -1;
        var E = p[_];
        if (E !== null)
          for (p[_] = null, _ = 0; _ < E.length; _++) {
            var q = E[_];
            q !== null && (q.lane &= -536870913);
          }
        a &= ~M;
      }
      i !== 0 && xo(t, i, 0), f !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= f & ~(d & ~e));
    }
    function xo(t, e, a) {
      t.pendingLanes |= e, t.suspendedLanes &= ~e;
      var i = 31 - kl(e);
      t.entangledLanes |= e, t.entanglements[i] = t.entanglements[i] | 1073741824 | a & 261930;
    }
    function yr(t, e) {
      var a = t.entangledLanes |= e;
      for (t = t.entanglements; a; ) {
        var i = 31 - kl(a), o = 1 << i;
        o & e | t[i] & e && (t[i] |= e), a &= ~o;
      }
    }
    function Ec(t, e) {
      var a = e & -e;
      return a = (a & 42) !== 0 ? 1 : dn(a), (a & (t.suspendedLanes | e)) !== 0 ? 0 : a;
    }
    function dn(t) {
      switch (t) {
        case 2:
          t = 1;
          break;
        case 8:
          t = 4;
          break;
        case 32:
          t = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          t = 128;
          break;
        case 268435456:
          t = 134217728;
          break;
        default:
          t = 0;
      }
      return t;
    }
    function Al(t, e, a) {
      if (qu)
        for (t = t.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - kl(a), o = 1 << i;
          t[i].add(e), a &= ~o;
        }
    }
    function Ga(t, e) {
      if (qu)
        for (var a = t.pendingUpdatersLaneMap, i = t.memoizedUpdaters; 0 < e; ) {
          var o = 31 - kl(e);
          t = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), e &= ~t;
        }
    }
    function Ul(t) {
      return t &= -t, Rl < t ? Wl < t ? (t & 134217727) !== 0 ? ua : hc : Wl : Rl;
    }
    function Ui() {
      var t = be.p;
      return t !== 0 ? t : (t = window.event, t === void 0 ? ua : Ch(t.type));
    }
    function g(t, e) {
      var a = be.p;
      try {
        return be.p = t, e();
      } finally {
        be.p = a;
      }
    }
    function U(t) {
      delete t[We], delete t[Oa], delete t[mo], delete t[d1], delete t[Jg];
    }
    function P(t) {
      var e = t[We];
      if (e) return e;
      for (var a = t.parentNode; a; ) {
        if (e = a[bi] || a[We]) {
          if (a = e.alternate, e.child !== null || a !== null && a.child !== null)
            for (t = uo(t); t !== null; ) {
              if (a = t[We])
                return a;
              t = uo(t);
            }
          return e;
        }
        t = a, a = t.parentNode;
      }
      return null;
    }
    function at(t) {
      if (t = t[We] || t[bi]) {
        var e = t.tag;
        if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
          return t;
      }
      return null;
    }
    function mt(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6)
        return t.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function Mt(t) {
      var e = t[Cs];
      return e || (e = t[Cs] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
    }
    function yt(t) {
      t[Xf] = !0;
    }
    function te(t, e) {
      Gt(t, e), Gt(t + "Capture", e);
    }
    function Gt(t, e) {
      wu[t] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        t
      ), wu[t] = e;
      var a = t.toLowerCase();
      for (Qf[a] = t, t === "onDoubleClick" && (Qf.ondblclick = t), t = 0; t < e.length; t++)
        Kg.add(e[t]);
    }
    function ta(t, e) {
      $g[e.type] || e.onChange || e.onInput || e.readOnly || e.disabled || e.value == null || console.error(
        t === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), e.onChange || e.readOnly || e.disabled || e.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function hn(t) {
      return nn.call(Lh, t) ? !0 : nn.call(_p, t) ? !1 : Lf.test(t) ? Lh[t] = !0 : (_p[t] = !0, console.error("Invalid attribute name: `%s`", t), !1);
    }
    function Hi(t, e, a) {
      if (hn(e)) {
        if (!t.hasAttribute(e)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return t = t.getAttribute(e), t === "" && a === !0 ? !0 : (ye(a, e), t === "" + a ? a : t);
      }
    }
    function Bo(t, e, a) {
      if (hn(e))
        if (a === null) t.removeAttribute(e);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              t.removeAttribute(e);
              return;
            case "boolean":
              var i = e.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                t.removeAttribute(e);
                return;
              }
          }
          ye(a, e), t.setAttribute(e, "" + a);
        }
    }
    function pr(t, e, a) {
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(e);
            return;
        }
        ye(a, e), t.setAttribute(e, "" + a);
      }
    }
    function ou(t, e, a, i) {
      if (i === null) t.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(a);
            return;
        }
        ye(i, a), t.setAttributeNS(e, a, "" + i);
      }
    }
    function Xa(t) {
      switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return t;
        case "object":
          return Sc(t), t;
        default:
          return "";
      }
    }
    function ad(t) {
      var e = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
    }
    function Am(t, e, a) {
      var i = Object.getOwnPropertyDescriptor(
        t.constructor.prototype,
        e
      );
      if (!t.hasOwnProperty(e) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
        var o = i.get, f = i.set;
        return Object.defineProperty(t, e, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            Sc(d), a = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(t, e, {
          enumerable: i.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(d) {
            Sc(d), a = "" + d;
          },
          stopTracking: function() {
            t._valueTracker = null, delete t[e];
          }
        };
      }
    }
    function nd(t) {
      if (!t._valueTracker) {
        var e = ad(t) ? "checked" : "value";
        t._valueTracker = Am(
          t,
          e,
          "" + t[e]
        );
      }
    }
    function Om(t) {
      if (!t) return !1;
      var e = t._valueTracker;
      if (!e) return !0;
      var a = e.getValue(), i = "";
      return t && (i = ad(t) ? t.checked ? "true" : "false" : t.value), t = i, t !== a ? (e.setValue(t), !0) : !1;
    }
    function Un(t) {
      if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    function Re(t) {
      return t.replace(
        Vh,
        function(e) {
          return "\\" + e.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function fa(t, e) {
      e.checked === void 0 || e.defaultChecked === void 0 || kg || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        me() || "A component",
        e.type
      ), kg = !0), e.value === void 0 || e.defaultValue === void 0 || zp || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        me() || "A component",
        e.type
      ), zp = !0);
    }
    function Ni(t, e, a, i, o, f, d, h) {
      t.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (ye(d, "type"), t.type = d) : t.removeAttribute("type"), e != null ? d === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Xa(e)) : t.value !== "" + Xa(e) && (t.value = "" + Xa(e)) : d !== "submit" && d !== "reset" || t.removeAttribute("value"), e != null ? _m(t, d, Xa(e)) : a != null ? _m(t, d, Xa(a)) : i != null && t.removeAttribute("value"), o == null && f != null && (t.defaultChecked = !!f), o != null && (t.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (ye(h, "name"), t.name = "" + Xa(h)) : t.removeAttribute("name");
    }
    function ud(t, e, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (ye(f, "type"), t.type = f), e != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || e != null)) {
          nd(t);
          return;
        }
        a = a != null ? "" + Xa(a) : "", e = e != null ? "" + Xa(e) : a, h || e === t.value || (t.value = e), t.defaultValue = e;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, t.checked = h ? t.checked : !!i, t.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (ye(d, "name"), t.name = d), nd(t);
    }
    function _m(t, e, a) {
      e === "number" && Un(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a);
    }
    function z0(t, e) {
      e.value == null && (typeof e.children == "object" && e.children !== null ? Os.Children.forEach(e.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || l || (l = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : e.dangerouslySetInnerHTML == null || n || (n = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), e.selected == null || Us || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Us = !0);
    }
    function zm() {
      var t = me();
      return t ? `

Check the render method of \`` + t + "`." : "";
    }
    function fu(t, e, a, i) {
      if (t = t.options, e) {
        e = {};
        for (var o = 0; o < a.length; o++)
          e["$" + a[o]] = !0;
        for (a = 0; a < t.length; a++)
          o = e.hasOwnProperty("$" + t[a].value), t[a].selected !== o && (t[a].selected = o), o && i && (t[a].defaultSelected = !0);
      } else {
        for (a = "" + Xa(a), e = null, o = 0; o < t.length; o++) {
          if (t[o].value === a) {
            t[o].selected = !0, i && (t[o].defaultSelected = !0);
            return;
          }
          e !== null || t[o].disabled || (e = t[o]);
        }
        e !== null && (e.selected = !0);
      }
    }
    function id(t, e) {
      for (t = 0; t < c.length; t++) {
        var a = c[t];
        if (e[a] != null) {
          var i = bl(e[a]);
          e.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            zm()
          ) : !e.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            zm()
          );
        }
      }
      e.value === void 0 || e.defaultValue === void 0 || u || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), u = !0);
    }
    function Tc(t, e) {
      e.value === void 0 || e.defaultValue === void 0 || r || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        me() || "A component"
      ), r = !0), e.children != null && e.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function Ac(t, e, a) {
      if (e != null && (e = "" + Xa(e), e !== t.value && (t.value = e), a == null)) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
      }
      t.defaultValue = a != null ? "" + Xa(a) : "";
    }
    function jo(t, e, a, i) {
      if (e == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (bl(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), e = a;
      }
      a = Xa(e), t.defaultValue = a, i = t.textContent, i === a && i !== "" && i !== null && (t.value = i), nd(t);
    }
    function Oc(t, e) {
      return t.serverProps === void 0 && t.serverTail.length === 0 && t.children.length === 1 && 3 < t.distanceFromLeaf && t.distanceFromLeaf > 15 - e ? Oc(t.children[0], e) : t;
    }
    function Ee(t) {
      return "  " + "  ".repeat(t);
    }
    function _c(t) {
      return "+ " + "  ".repeat(t);
    }
    function xi(t) {
      return "- " + "  ".repeat(t);
    }
    function Bi(t) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return t.type;
        case 16:
          return "Lazy";
        case 31:
          return "Activity";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return t = t.type, t.displayName || t.name || null;
        case 11:
          return t = t.type.render, t.displayName || t.name || null;
        case 1:
          return t = t.type, t.displayName || t.name || null;
        default:
          return null;
      }
    }
    function ru(t, e) {
      return s.test(t) ? (t = JSON.stringify(t), t.length > e - 2 ? 8 > e ? '{"..."}' : "{" + t.slice(0, e - 7) + '..."}' : "{" + t + "}") : t.length > e ? 5 > e ? '{"..."}' : t.slice(0, e - 3) + "..." : t;
    }
    function cd(t, e, a) {
      var i = 120 - 2 * a;
      if (e === null)
        return _c(a) + ru(t, i) + `
`;
      if (typeof e == "string") {
        for (var o = 0; o < e.length && o < t.length && e.charCodeAt(o) === t.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (t = "..." + t.slice(o - 8), e = "..." + e.slice(o - 8)), _c(a) + ru(t, i) + `
` + xi(a) + ru(e, i) + `
`;
      }
      return Ee(a) + ru(t, i) + `
`;
    }
    function od(t) {
      return Object.prototype.toString.call(t).replace(/^\[object (.*)\]$/, function(e, a) {
        return a;
      });
    }
    function Yo(t, e) {
      switch (typeof t) {
        case "string":
          return t = JSON.stringify(t), t.length > e ? 5 > e ? '"..."' : t.slice(0, e - 4) + '..."' : t;
        case "object":
          if (t === null) return "null";
          if (bl(t)) return "[...]";
          if (t.$$typeof === _n)
            return (e = Jt(t.type)) ? "<" + e + ">" : "<...>";
          var a = od(t);
          if (a === "Object") {
            a = "", e -= 2;
            for (var i in t)
              if (t.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), e -= i.length - 2, o = Yo(
                  t[i],
                  15 > e ? e : 15
                ), e -= o.length, 0 > e) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (e = t.displayName || t.name) ? "function " + e : "function";
        default:
          return String(t);
      }
    }
    function qo(t, e) {
      return typeof t != "string" || s.test(t) ? "{" + Yo(t, e - 2) + "}" : t.length > e - 2 ? 5 > e ? '"..."' : '"' + t.slice(0, e - 5) + '..."' : '"' + t + '"';
    }
    function wo(t, e, a) {
      var i = 120 - a.length - t.length, o = [], f;
      for (f in e)
        if (e.hasOwnProperty(f) && f !== "children") {
          var d = qo(
            e[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + t + `>
` : 0 < i ? a + "<" + t + " " + o.join(" ") + `>
` : a + "<" + t + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function fd(t, e, a) {
      var i = "", o = Wt({}, e), f;
      for (f in t)
        if (t.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = Yo(t[f], d);
          e.hasOwnProperty(f) ? (d = Yo(e[f], d), i += _c(a) + f + ": " + h + `
`, i += xi(a) + f + ": " + d + `
`) : i += _c(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (t = Yo(
          o[y],
          120 - 2 * a - y.length - 2
        ), i += xi(a) + y + ": " + t + `
`);
      return i;
    }
    function Iu(t, e, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (p in a)
        a.hasOwnProperty(p) && f.set(
          p.toLowerCase(),
          p
        );
      if (f.size === 1 && f.has("children"))
        o += wo(
          t,
          e,
          Ee(i)
        );
      else {
        for (var d in e)
          if (e.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, y = f.get(d.toLowerCase());
            if (y !== void 0) {
              f.delete(d.toLowerCase());
              var p = e[d];
              y = a[y];
              var _ = qo(
                p,
                h
              );
              h = qo(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && od(p) === "Object" && od(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < _.indexOf("...") || -1 < h.indexOf("...")) ? o += Ee(i + 1) + d + `={{
` + fd(
                p,
                y,
                i + 2
              ) + Ee(i + 1) + `}}
` : (o += _c(i + 1) + d + "=" + _ + `
`, o += xi(i + 1) + d + "=" + h + `
`);
            } else
              o += Ee(i + 1) + d + "=" + qo(e[d], h) + `
`;
          }
        f.forEach(function(M) {
          if (M !== "children") {
            var E = 120 - 2 * (i + 1) - M.length - 1;
            o += xi(i + 1) + M + "=" + qo(a[M], E) + `
`;
          }
        }), o = o === "" ? Ee(i) + "<" + t + `>
` : Ee(i) + "<" + t + `
` + o + Ee(i) + `>
`;
      }
      return t = a.children, e = e.children, typeof t == "string" || typeof t == "number" || typeof t == "bigint" ? (f = "", (typeof e == "string" || typeof e == "number" || typeof e == "bigint") && (f = "" + e), o += cd(f, "" + t, i + 1)) : (typeof e == "string" || typeof e == "number" || typeof e == "bigint") && (o = t == null ? o + cd("" + e, null, i + 1) : o + cd("" + e, void 0, i + 1)), o;
    }
    function Qa(t, e) {
      var a = Bi(t);
      if (a === null) {
        for (a = "", t = t.child; t; )
          a += Qa(t, e), t = t.sibling;
        return a;
      }
      return Ee(e) + "<" + a + `>
`;
    }
    function rd(t, e) {
      var a = Oc(t, e);
      if (a !== t && (t.children.length !== 1 || t.children[0] !== a))
        return Ee(e) + `...
` + rd(a, e + 1);
      a = "";
      var i = t.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Ee(e) + "<" + f + `>
`, e++);
        }
      if (i = "", o = t.fiber.pendingProps, t.fiber.tag === 6)
        i = cd(o, t.serverProps, e), e++;
      else if (f = Bi(t.fiber), f !== null)
        if (t.serverProps === void 0) {
          i = e;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = qo(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          i = Ee(i) + "<" + f + h + `>
`, e++;
        } else
          t.serverProps === null ? (i = wo(
            f,
            o,
            _c(e)
          ), e++) : typeof t.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Iu(
            f,
            o,
            t.serverProps,
            e
          ), e++);
      var p = "";
      for (o = t.fiber.child, f = 0; o && f < t.children.length; )
        d = t.children[f], d.fiber === o ? (p += rd(d, e), f++) : p += Qa(o, e), o = o.sibling;
      for (o && 0 < t.children.length && (p += Ee(e) + `...
`), o = t.serverTail, t.serverProps === null && e--, t = 0; t < o.length; t++)
        f = o[t], p = typeof f == "string" ? p + (xi(e) + ru(f, 120 - 2 * e) + `
`) : p + wo(
          f.type,
          f.props,
          xi(e)
        );
      return a + i + p;
    }
    function Dm(t) {
      try {
        return `

` + rd(t, 0);
      } catch {
        return "";
      }
    }
    function sd(t, e, a) {
      for (var i = e, o = null, f = 0; i; )
        i === t && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === e ? a : i === t ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? Dm(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function Rm(t, e) {
      var a = Wt({}, t || L), i = { tag: e };
      return v.indexOf(e) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), A.indexOf(e) !== -1 && (a.pTagInButtonScope = null), m.indexOf(e) !== -1 && e !== "address" && e !== "div" && e !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, e === "form" && (a.formTag = i), e === "a" && (a.aTagInScope = i), e === "button" && (a.buttonTagInScope = i), e === "nobr" && (a.nobrTagInScope = i), e === "p" && (a.pTagInButtonScope = i), e === "li" && (a.listItemTagAutoclosing = i), (e === "dd" || e === "dt") && (a.dlItemTagAutoclosing = i), e === "#document" || e === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), t !== null || e !== "#document" && e !== "html" && e !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function gr(t, e, a) {
      switch (e) {
        case "select":
          return t === "hr" || t === "option" || t === "optgroup" || t === "script" || t === "template" || t === "#text";
        case "optgroup":
          return t === "option" || t === "#text";
        case "option":
          return t === "#text";
        case "tr":
          return t === "th" || t === "td" || t === "style" || t === "script" || t === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return t === "tr" || t === "style" || t === "script" || t === "template";
        case "colgroup":
          return t === "col" || t === "template";
        case "table":
          return t === "caption" || t === "colgroup" || t === "tbody" || t === "tfoot" || t === "thead" || t === "style" || t === "script" || t === "template";
        case "head":
          return t === "base" || t === "basefont" || t === "bgsound" || t === "link" || t === "meta" || t === "title" || t === "noscript" || t === "noframes" || t === "style" || t === "script" || t === "template";
        case "html":
          if (a) break;
          return t === "head" || t === "body" || t === "frameset";
        case "frameset":
          return t === "frame";
        case "#document":
          if (!a) return t === "html";
      }
      switch (t) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return e !== "h1" && e !== "h2" && e !== "h3" && e !== "h4" && e !== "h5" && e !== "h6";
        case "rp":
        case "rt":
          return j.indexOf(e) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return e == null;
        case "head":
          return a || e === null;
        case "html":
          return a && e === "#document" || e === null;
        case "body":
          return a && (e === "#document" || e === "html") || e === null;
      }
      return !0;
    }
    function Iv(t, e) {
      switch (t) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return e.pTagInButtonScope;
        case "form":
          return e.formTag || e.pTagInButtonScope;
        case "li":
          return e.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return e.dlItemTagAutoclosing;
        case "button":
          return e.buttonTagInScope;
        case "a":
          return e.aTagInScope;
        case "nobr":
          return e.nobrTagInScope;
      }
      return null;
    }
    function La(t, e) {
      for (; t; ) {
        switch (t.tag) {
          case 5:
          case 26:
          case 27:
            if (t.type === e) return t;
        }
        t = t.return;
      }
      return null;
    }
    function vr(t, e) {
      e = e || L;
      var a = e.current;
      if (e = (a = gr(
        t,
        a && a.tag,
        e.implicitRootScope
      ) ? null : a) ? null : Iv(t, e), e = a || e, !e) return !0;
      var i = e.tag;
      if (e = String(!!a) + "|" + t + "|" + i, $[e]) return !1;
      $[e] = !0;
      var o = (e = Na) ? La(e.return, i) : null, f = e !== null && o !== null ? sd(o, e, null) : "", d = "<" + t + ">";
      return a ? (a = "", i === "table" && t === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), e && (t = e.return, o === null || t === null || o === t && t._debugOwner === e._debugOwner || ft(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function Sr(t, e, a) {
      if (a || gr("#text", e, !1))
        return !0;
      if (a = "#text|" + e, $[a]) return !1;
      $[a] = !0;
      var i = (a = Na) ? La(a, e) : null;
      return a = a !== null && i !== null ? sd(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(t) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        e,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        e,
        a
      ), !1;
    }
    function zc(t, e) {
      if (e) {
        var a = t.firstChild;
        if (a && a === t.lastChild && a.nodeType === 3) {
          a.nodeValue = e;
          return;
        }
      }
      t.textContent = e;
    }
    function Go(t) {
      return t.replace(H, function(e, a) {
        return a.toUpperCase();
      });
    }
    function Mm(t, e, a) {
      var i = e.indexOf("--") === 0;
      i || (-1 < e.indexOf("-") ? x.hasOwnProperty(e) && x[e] || (x[e] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        e,
        Go(e.replace(He, "ms-"))
      )) : Dt.test(e) ? x.hasOwnProperty(e) && x[e] || (x[e] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        e,
        e.charAt(0).toUpperCase() + e.slice(1)
      )) : !z.test(a) || K.hasOwnProperty(a) && K[a] || (K[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        e,
        a.replace(z, "")
      )), typeof a == "number" && (isNaN(a) ? Et || (Et = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        e
      )) : isFinite(a) || de || (de = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        e
      )))), a == null || typeof a == "boolean" || a === "" ? i ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : i ? t.setProperty(e, a) : typeof a != "number" || a === 0 || pt.has(e) ? e === "float" ? t.cssFloat = a : (Pl(a, e), t[e] = ("" + a).trim()) : t[e] = a + "px";
    }
    function Cm(t, e, a) {
      if (e != null && typeof e != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (e && Object.freeze(e), t = t.style, a != null) {
        if (e) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !e.hasOwnProperty(o))
                for (var f = Y[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in e)
            if (e.hasOwnProperty(h) && (!a || a[h] !== e[h]))
              for (o = Y[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var y in e)
            for (o = Y[y] || [y], f = 0; f < o.length; f++)
              h[o[f]] = y;
          y = {};
          for (var p in i)
            if (o = i[p], (f = h[p]) && o !== f && (d = o + "," + f, !y[d])) {
              y[d] = !0, d = console;
              var _ = e[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                _ == null || typeof _ == "boolean" || _ === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var M in a)
          !a.hasOwnProperty(M) || e != null && e.hasOwnProperty(M) || (M.indexOf("--") === 0 ? t.setProperty(M, "") : M === "float" ? t.cssFloat = "" : t[M] = "");
        for (var E in e)
          p = e[E], e.hasOwnProperty(E) && a[E] !== p && Mm(t, E, p);
      } else
        for (i in e)
          e.hasOwnProperty(i) && Mm(t, i, e[i]);
    }
    function su(t) {
      if (t.indexOf("-") === -1) return !1;
      switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function D0(t) {
      return ge.get(t) || t;
    }
    function R0(t, e) {
      if (nn.call(Zh, e) && Zh[e])
        return !0;
      if (eE.test(e)) {
        if (t = "aria-" + e.slice(4).toLowerCase(), t = Wg.hasOwnProperty(t) ? t : null, t == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            e
          ), Zh[e] = !0;
        if (e !== t)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            e,
            t
          ), Zh[e] = !0;
      }
      if (tE.test(e)) {
        if (t = e.toLowerCase(), t = Wg.hasOwnProperty(t) ? t : null, t == null) return Zh[e] = !0, !1;
        e !== t && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          e,
          t
        ), Zh[e] = !0);
      }
      return !0;
    }
    function M0(t, e) {
      var a = [], i;
      for (i in e)
        R0(t, i) || a.push(i);
      e = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        e,
        t
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        e,
        t
      );
    }
    function Um(t, e, a, i) {
      if (nn.call(un, e) && un[e])
        return !0;
      var o = e.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), un[e] = !0;
      if (typeof a == "function" && (t === "form" && e === "action" || t === "input" && e === "formAction" || t === "button" && e === "formAction"))
        return !0;
      if (i != null) {
        if (t = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(e))
          return !0;
        if (i = t.hasOwnProperty(o) ? t[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            e,
            i
          ), un[e] = !0;
        if (zS.test(e))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            e
          ), un[e] = !0;
      } else if (zS.test(e))
        return lE.test(e) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          e
        ), un[e] = !0;
      if (aE.test(e) || nE.test(e)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), un[e] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), un[e] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), un[e] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          e
        ), un[e] = !0;
      if (tu.hasOwnProperty(o)) {
        if (o = tu[o], o !== e)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            e,
            o
          ), un[e] = !0;
      } else if (e !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          e,
          o
        ), un[e] = !0;
      switch (e) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (e) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = e.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                e,
                e,
                a,
                e
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                e,
                e,
                a,
                e,
                e,
                e
              ), un[e] = !0);
          }
        case "function":
        case "symbol":
          return un[e] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (e) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              e,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              e,
              a
            ), un[e] = !0;
          }
      }
      return !0;
    }
    function Pv(t, e, a) {
      var i = [], o;
      for (o in e)
        Um(t, o, e[o], a) || i.push(o);
      e = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        e,
        t
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        e,
        t
      );
    }
    function br(t) {
      return uE.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function mn() {
    }
    function Hn(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    function dd(t) {
      var e = at(t);
      if (e && (t = e.stateNode)) {
        var a = t[Oa] || null;
        t: switch (t = e.stateNode, e.type) {
          case "input":
            if (Ni(
              t,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), e = a.name, a.type === "radio" && e != null) {
              for (a = t; a.parentNode; ) a = a.parentNode;
              for (ye(e, "name"), a = a.querySelectorAll(
                'input[name="' + Re(
                  "" + e
                ) + '"][type="radio"]'
              ), e = 0; e < a.length; e++) {
                var i = a[e];
                if (i !== t && i.form === t.form) {
                  var o = i[Oa] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Ni(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (e = 0; e < a.length; e++)
                i = a[e], i.form === t.form && Om(i);
            }
            break t;
          case "textarea":
            Ac(t, a.value, a.defaultValue);
            break t;
          case "select":
            e = a.value, e != null && fu(t, !!a.multiple, e, !1);
        }
      }
    }
    function hd(t, e, a) {
      if (h1) return t(e, a);
      h1 = !0;
      try {
        var i = t(e);
        return i;
      } finally {
        if (h1 = !1, (Jh !== null || Kh !== null) && (en(), Jh && (e = Jh, t = Kh, Kh = Jh = null, dd(e), t)))
          for (e = 0; e < t.length; e++) dd(t[e]);
      }
    }
    function du(t, e) {
      var a = t.stateNode;
      if (a === null) return null;
      var i = a[Oa] || null;
      if (i === null) return null;
      a = i[e];
      t: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (i = !i.disabled) || (t = t.type, i = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !i;
          break t;
        default:
          t = !1;
      }
      if (t) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + e + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function Dc() {
      if (Fg) return Fg;
      var t, e = y1, a = e.length, i, o = "value" in Vf ? Vf.value : Vf.textContent, f = o.length;
      for (t = 0; t < a && e[t] === o[t]; t++) ;
      var d = a - t;
      for (i = 1; i <= d && e[a - i] === o[f - i]; i++) ;
      return Fg = o.slice(t, 1 < i ? 1 - i : void 0);
    }
    function Er(t) {
      var e = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function Xo() {
      return !0;
    }
    function Hm() {
      return !1;
    }
    function Hl(t) {
      function e(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in t)
          t.hasOwnProperty(h) && (a = t[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Xo : Hm, this.isPropagationStopped = Hm, this;
      }
      return Wt(e.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Xo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Xo);
        },
        persist: function() {
        },
        isPersistent: Xo
      }), e;
    }
    function Pu(t) {
      var e = this.nativeEvent;
      return e.getModifierState ? e.getModifierState(t) : (t = vE[t]) ? !!e[t] : !1;
    }
    function Tr() {
      return Pu;
    }
    function Qo(t, e) {
      switch (t) {
        case "keyup":
          return CE.indexOf(e.keyCode) !== -1;
        case "keydown":
          return e.keyCode !== CS;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function ti(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
    }
    function Nm(t, e) {
      switch (t) {
        case "compositionend":
          return ti(e);
        case "keypress":
          return e.which !== HS ? null : (xS = !0, NS);
        case "textInput":
          return t = e.data, t === NS && xS ? null : t;
        default:
          return null;
      }
    }
    function md(t, e) {
      if ($h)
        return t === "compositionend" || !S1 && Qo(t, e) ? (t = Dc(), Fg = y1 = Vf = null, $h = !1, t) : null;
      switch (t) {
        case "paste":
          return null;
        case "keypress":
          if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length)
              return e.char;
            if (e.which)
              return String.fromCharCode(e.which);
          }
          return null;
        case "compositionend":
          return US && e.locale !== "ko" ? null : e.data;
        default:
          return null;
      }
    }
    function xm(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === "input" ? !!HE[t.type] : e === "textarea";
    }
    function yd(t) {
      if (!mc) return !1;
      t = "on" + t;
      var e = t in document;
      return e || (e = document.createElement("div"), e.setAttribute(t, "return;"), e = typeof e[t] == "function"), e;
    }
    function Ar(t, e, a, i) {
      Jh ? Kh ? Kh.push(i) : Kh = [i] : Jh = i, e = kn(e, "onChange"), 0 < e.length && (a = new Ig(
        "onChange",
        "change",
        null,
        a,
        i
      ), t.push({ event: a, listeners: e }));
    }
    function C0(t) {
      Oe(t, 0);
    }
    function Kl(t) {
      var e = mt(t);
      if (Om(e)) return t;
    }
    function ji(t, e) {
      if (t === "change") return e;
    }
    function Or() {
      Hp && (Hp.detachEvent("onpropertychange", Lo), Np = Hp = null);
    }
    function Lo(t) {
      if (t.propertyName === "value" && Kl(Np)) {
        var e = [];
        Ar(
          e,
          Np,
          t,
          Hn(t)
        ), hd(C0, e);
      }
    }
    function t1(t, e, a) {
      t === "focusin" ? (Or(), Hp = e, Np = a, Hp.attachEvent("onpropertychange", Lo)) : t === "focusout" && Or();
    }
    function Bm(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return Kl(Np);
    }
    function jm(t, e) {
      if (t === "click") return Kl(e);
    }
    function _r(t, e) {
      if (t === "input" || t === "change")
        return Kl(e);
    }
    function pd(t, e) {
      return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
    }
    function Vo(t, e) {
      if (cn(t, e)) return !0;
      if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
      var a = Object.keys(t), i = Object.keys(e);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!nn.call(e, o) || !cn(t[o], e[o]))
          return !1;
      }
      return !0;
    }
    function U0(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function H0(t, e) {
      var a = U0(t);
      t = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = t + a.textContent.length, t <= e && i >= e)
            return { node: a, offset: e - t };
          t = i;
        }
        t: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break t;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = U0(a);
      }
    }
    function N0(t, e) {
      return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? N0(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
    }
    function gd(t) {
      t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
      for (var e = Un(t.document); e instanceof t.HTMLIFrameElement; ) {
        try {
          var a = typeof e.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) t = e.contentWindow;
        else break;
        e = Un(t.document);
      }
      return e;
    }
    function Ym(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
    }
    function x0(t, e, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      E1 || kh == null || kh !== Un(i) || (i = kh, "selectionStart" in i && Ym(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), xp && Vo(xp, i) || (xp = i, i = kn(b1, "onSelect"), 0 < i.length && (e = new Ig(
        "onSelect",
        "select",
        null,
        e,
        a
      ), t.push({ event: e, listeners: i }), e.target = kh)));
    }
    function Rc(t, e) {
      var a = {};
      return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a;
    }
    function Mc(t) {
      if (T1[t]) return T1[t];
      if (!Wh[t]) return t;
      var e = Wh[t], a;
      for (a in e)
        if (e.hasOwnProperty(a) && a in jS)
          return T1[t] = e[a];
      return t;
    }
    function Nn(t, e) {
      XS.set(t, e), te(e, [t]);
    }
    function B0(t) {
      for (var e = tv, a = 0; a < t.length; a++) {
        var i = t[a];
        if (typeof i == "object" && i !== null)
          if (bl(i) && i.length === 2 && typeof i[0] == "string") {
            if (e !== tv && e !== D1)
              return _1;
            e = D1;
          } else return _1;
        else {
          if (typeof i == "function" || typeof i == "string" && 50 < i.length || e !== tv && e !== z1)
            return _1;
          e = z1;
        }
      }
      return e;
    }
    function qm(t, e, a, i) {
      for (var o in t)
        nn.call(t, o) && o[0] !== "_" && hu(o, t[o], e, a, i);
    }
    function hu(t, e, a, i, o) {
      switch (typeof e) {
        case "object":
          if (e === null) {
            e = "null";
            break;
          } else {
            if (e.$$typeof === _n) {
              var f = Jt(e.type) || "…", d = e.key;
              e = e.props;
              var h = Object.keys(e), y = h.length;
              if (d == null && y === 0) {
                e = "<" + f + " />";
                break;
              }
              if (3 > i || y === 1 && h[0] === "children" && d == null) {
                e = "<" + f + " … />";
                break;
              }
              a.push([
                o + "  ".repeat(i) + t,
                "<" + f
              ]), d !== null && hu(
                "key",
                d,
                a,
                i + 1,
                o
              ), t = !1;
              for (var p in e)
                p === "children" ? e.children != null && (!bl(e.children) || 0 < e.children.length) && (t = !0) : nn.call(e, p) && p[0] !== "_" && hu(
                  p,
                  e[p],
                  a,
                  i + 1,
                  o
                );
              a.push([
                "",
                t ? ">…</" + f + ">" : "/>"
              ]);
              return;
            }
            if (f = Object.prototype.toString.call(e), f = f.slice(8, f.length - 1), f === "Array") {
              if (p = B0(e), p === z1 || p === tv) {
                e = JSON.stringify(e);
                break;
              } else if (p === D1) {
                for (a.push([
                  o + "  ".repeat(i) + t,
                  ""
                ]), t = 0; t < e.length; t++)
                  f = e[t], hu(
                    f[0],
                    f[1],
                    a,
                    i + 1,
                    o
                  );
                return;
              }
            }
            if (f === "Promise") {
              if (e.status === "fulfilled") {
                if (f = a.length, hu(
                  t,
                  e.value,
                  a,
                  i,
                  o
                ), a.length > f) {
                  a = a[f], a[1] = "Promise<" + (a[1] || "Object") + ">";
                  return;
                }
              } else if (e.status === "rejected" && (f = a.length, hu(
                t,
                e.reason,
                a,
                i,
                o
              ), a.length > f)) {
                a = a[f], a[1] = "Rejected Promise<" + a[1] + ">";
                return;
              }
              a.push([
                "  ".repeat(i) + t,
                "Promise"
              ]);
              return;
            }
            f === "Object" && (p = Object.getPrototypeOf(e)) && typeof p.constructor == "function" && (f = p.constructor.name), a.push([
              o + "  ".repeat(i) + t,
              f === "Object" ? 3 > i ? "" : "…" : f
            ]), 3 > i && qm(e, a, i + 1, o);
            return;
          }
        case "function":
          e = e.name === "" ? "() => {}" : e.name + "() {}";
          break;
        case "string":
          e = e === wE ? "…" : JSON.stringify(e);
          break;
        case "undefined":
          e = "undefined";
          break;
        case "boolean":
          e = e ? "true" : "false";
          break;
        default:
          e = String(e);
      }
      a.push([
        o + "  ".repeat(i) + t,
        e
      ]);
    }
    function j0(t, e, a, i) {
      var o = !0;
      for (d in t)
        d in e || (a.push([
          ev + "  ".repeat(i) + d,
          "…"
        ]), o = !1);
      for (var f in e)
        if (f in t) {
          var d = t[f], h = e[f];
          if (d !== h) {
            if (i === 0 && f === "children")
              o = "  ".repeat(i) + f, a.push(
                [ev + o, "…"],
                [lv + o, "…"]
              );
            else {
              if (!(3 <= i)) {
                if (typeof d == "object" && typeof h == "object" && d !== null && h !== null && d.$$typeof === h.$$typeof)
                  if (h.$$typeof === _n) {
                    if (d.type === h.type && d.key === h.key) {
                      d = Jt(h.type) || "…", o = "  ".repeat(i) + f, d = "<" + d + " … />", a.push(
                        [ev + o, d],
                        [lv + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var y = Object.prototype.toString.call(d), p = Object.prototype.toString.call(h);
                    if (y === p && (p === "[object Object]" || p === "[object Array]")) {
                      y = [
                        VS + "  ".repeat(i) + f,
                        p === "[object Array]" ? "Array" : ""
                      ], a.push(y), p = a.length, j0(
                        d,
                        h,
                        a,
                        i + 1
                      ) ? p === a.length && (y[1] = "Referentially unequal but deeply equal objects. Consider memoization.") : o = !1;
                      continue;
                    }
                  }
                else if (typeof d == "function" && typeof h == "function" && d.name === h.name && d.length === h.length && (y = Function.prototype.toString.call(d), p = Function.prototype.toString.call(h), y === p)) {
                  d = h.name === "" ? "() => {}" : h.name + "() {}", a.push([
                    VS + "  ".repeat(i) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              hu(f, d, a, i, ev), hu(f, h, a, i, lv);
            }
            o = !1;
          }
        } else
          a.push([
            lv + "  ".repeat(i) + f,
            "…"
          ]), o = !1;
      return o;
    }
    function xn(t) {
      se = t & 63 ? "Blocking" : t & 64 ? "Gesture" : t & 4194176 ? "Transition" : t & 62914560 ? "Suspense" : t & 2080374784 ? "Idle" : "Other";
    }
    function yn(t, e, a, i) {
      Fe && (Jf.start = e, Jf.end = a, yo.color = "warning", yo.tooltipText = i, yo.properties = null, (t = t._debugTask) ? t.run(
        performance.measure.bind(
          performance,
          i,
          Jf
        )
      ) : performance.measure(i, Jf));
    }
    function vd(t, e, a) {
      yn(t, e, a, "Reconnect");
    }
    function Sd(t, e, a, i, o) {
      var f = dt(t);
      if (f !== null && Fe) {
        var d = t.alternate, h = t.actualDuration;
        if (d === null || d.child !== t.child)
          for (var y = t.child; y !== null; y = y.sibling)
            h -= y.actualDuration;
        i = 0.5 > h ? i ? "tertiary-light" : "primary-light" : 10 > h ? i ? "tertiary" : "primary" : 100 > h ? i ? "tertiary-dark" : "primary-dark" : "error";
        var p = t.memoizedProps;
        h = t._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [GE], p = j0(
          d.memoizedProps,
          p,
          y,
          0
        ), 1 < y.length && (p && !Zf && (d.lanes & o) === 0 && 100 < t.actualDuration ? (Zf = !0, y[0] = XE, yo.color = "warning", yo.tooltipText = ZS) : (yo.color = i, yo.tooltipText = f), yo.properties = y, Jf.start = e, Jf.end = a, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            Jf
          )
        ) : performance.measure(
          "​" + f,
          Jf
        ))) : h != null ? h.run(
          console.timeStamp.bind(
            console,
            f,
            e,
            a,
            Gu,
            void 0,
            i
          )
        ) : console.timeStamp(
          f,
          e,
          a,
          Gu,
          void 0,
          i
        );
      }
    }
    function wm(t, e, a, i) {
      if (Fe) {
        var o = dt(t);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < i.length; h++) {
            var y = i[h];
            f == null && y.source !== null && (f = y.source._debugTask), y = y.value, d.push([
              "Error",
              typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y)
            ]);
          }
          t.key !== null && hu("key", t.key, d, 0, ""), t.memoizedProps !== null && qm(t.memoizedProps, d, 0, ""), f == null && (f = t._debugTask), t = {
            start: e,
            end: a,
            detail: {
              devtools: {
                color: "error",
                track: Gu,
                tooltipText: t.tag === 13 ? "Hydration failed" : "Error boundary caught an error",
                properties: d
              }
            }
          }, f ? f.run(
            performance.measure.bind(performance, "​" + o, t)
          ) : performance.measure("​" + o, t);
        }
      }
    }
    function Bn(t, e, a, i, o) {
      if (o !== null) {
        if (Fe) {
          var f = dt(t);
          if (f !== null) {
            i = [];
            for (var d = 0; d < o.length; d++) {
              var h = o[d].value;
              i.push([
                "Error",
                typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
              ]);
            }
            t.key !== null && hu("key", t.key, i, 0, ""), t.memoizedProps !== null && qm(t.memoizedProps, i, 0, ""), e = {
              start: e,
              end: a,
              detail: {
                devtools: {
                  color: "error",
                  track: Gu,
                  tooltipText: "A lifecycle or effect errored",
                  properties: i
                }
              }
            }, (t = t._debugTask) ? t.run(
              performance.measure.bind(
                performance,
                "​" + f,
                e
              )
            ) : performance.measure("​" + f, e);
          }
        }
      } else
        f = dt(t), f !== null && Fe && (o = 1 > i ? "secondary-light" : 100 > i ? "secondary" : 500 > i ? "secondary-dark" : "error", (t = t._debugTask) ? t.run(
          console.timeStamp.bind(
            console,
            f,
            e,
            a,
            Gu,
            void 0,
            o
          )
        ) : console.timeStamp(
          f,
          e,
          a,
          Gu,
          void 0,
          o
        ));
    }
    function e1(t, e, a, i) {
      if (Fe && !(e <= t)) {
        var o = (a & 738197653) === a ? "tertiary-dark" : "primary-dark";
        a = (a & 536870912) === a ? "Prepared" : (a & 201326741) === a ? "Hydrated" : "Render", i ? i.run(
          console.timeStamp.bind(
            console,
            a,
            t,
            e,
            se,
            oe,
            o
          )
        ) : console.timeStamp(
          a,
          t,
          e,
          se,
          oe,
          o
        );
      }
    }
    function Y0(t, e, a, i) {
      !Fe || e <= t || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Prewarm",
          t,
          e,
          se,
          oe,
          a
        )
      ) : console.timeStamp(
        "Prewarm",
        t,
        e,
        se,
        oe,
        a
      ));
    }
    function q0(t, e, a, i) {
      !Fe || e <= t || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Suspended",
          t,
          e,
          se,
          oe,
          a
        )
      ) : console.timeStamp(
        "Suspended",
        t,
        e,
        se,
        oe,
        a
      ));
    }
    function l1(t, e, a, i, o, f) {
      if (Fe && !(e <= t)) {
        a = [];
        for (var d = 0; d < i.length; d++) {
          var h = i[d].value;
          a.push([
            "Recoverable Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        t = {
          start: t,
          end: e,
          detail: {
            devtools: {
              color: "primary-dark",
              track: se,
              trackGroup: oe,
              tooltipText: o ? "Hydration Failed" : "Recovered after Error",
              properties: a
            }
          }
        }, f ? f.run(
          performance.measure.bind(performance, "Recovered", t)
        ) : performance.measure("Recovered", t);
      }
    }
    function Gm(t, e, a, i) {
      !Fe || e <= t || (i ? i.run(
        console.timeStamp.bind(
          console,
          "Errored",
          t,
          e,
          se,
          oe,
          "error"
        )
      ) : console.timeStamp(
        "Errored",
        t,
        e,
        se,
        oe,
        "error"
      ));
    }
    function a1(t, e, a, i) {
      !Fe || e <= t || (i ? i.run(
        console.timeStamp.bind(
          console,
          a,
          t,
          e,
          se,
          oe,
          "secondary-light"
        )
      ) : console.timeStamp(
        a,
        t,
        e,
        se,
        oe,
        "secondary-light"
      ));
    }
    function w0(t, e, a, i, o) {
      if (Fe && !(e <= t)) {
        for (var f = [], d = 0; d < a.length; d++) {
          var h = a[d].value;
          f.push([
            "Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        t = {
          start: t,
          end: e,
          detail: {
            devtools: {
              color: "error",
              track: se,
              trackGroup: oe,
              tooltipText: i ? "Remaining Effects Errored" : "Commit Errored",
              properties: f
            }
          }
        }, o ? o.run(
          performance.measure.bind(performance, "Errored", t)
        ) : performance.measure("Errored", t);
      }
    }
    function Xm(t, e, a) {
      !Fe || e <= t || console.timeStamp(
        "Animating",
        t,
        e,
        se,
        oe,
        "secondary-dark"
      );
    }
    function bd() {
      for (var t = Fh, e = R1 = Fh = 0; e < t; ) {
        var a = Xu[e];
        Xu[e++] = null;
        var i = Xu[e];
        Xu[e++] = null;
        var o = Xu[e];
        Xu[e++] = null;
        var f = Xu[e];
        if (Xu[e++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && Qm(a, o, f);
      }
    }
    function Zo(t, e, a, i) {
      Xu[Fh++] = t, Xu[Fh++] = e, Xu[Fh++] = a, Xu[Fh++] = i, R1 |= i, t.lanes |= i, t = t.alternate, t !== null && (t.lanes |= i);
    }
    function Cc(t, e, a, i) {
      return Zo(t, e, a, i), zr(t);
    }
    function ea(t, e) {
      return Zo(t, null, null, e), zr(t);
    }
    function Qm(t, e, a) {
      t.lanes |= a;
      var i = t.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = t.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (t = f.stateNode, t === null || t._visibility & Bp || (o = !0)), t = f, f = f.return;
      return t.tag === 3 ? (f = t.stateNode, o && e !== null && (o = 31 - kl(a), t = f.hiddenUpdates, i = t[o], i === null ? t[o] = [e] : i.push(e), e.lane = a | 536870912), f) : null;
    }
    function zr(t) {
      if (o0 > aT)
        throw $s = o0 = 0, f0 = cS = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      $s > nT && ($s = 0, f0 = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), t.alternate === null && (t.flags & 4098) !== 0 && On(t);
      for (var e = t, a = e.return; a !== null; )
        e.alternate === null && (e.flags & 4098) !== 0 && On(t), e = a, a = e.return;
      return e.tag === 3 ? e.stateNode : null;
    }
    function Yi(t) {
      if (Qu === null) return t;
      var e = Qu(t);
      return e === void 0 ? t : e.current;
    }
    function Ed(t) {
      if (Qu === null) return t;
      var e = Qu(t);
      return e === void 0 ? t != null && typeof t.render == "function" && (e = Yi(t.render), t.render !== e) ? (e = { $$typeof: Nf, render: e }, t.displayName !== void 0 && (e.displayName = t.displayName), e) : t : e.current;
    }
    function Lm(t, e) {
      if (Qu === null) return !1;
      var a = t.elementType;
      e = e.type;
      var i = !1, o = typeof e == "object" && e !== null ? e.$$typeof : null;
      switch (t.tag) {
        case 1:
          typeof e == "function" && (i = !0);
          break;
        case 0:
          (typeof e == "function" || o === na) && (i = !0);
          break;
        case 11:
          (o === Nf || o === na) && (i = !0);
          break;
        case 14:
        case 15:
          (o === zs || o === na) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (t = Qu(a), t !== void 0 && t === Qu(e)));
    }
    function Uc(t) {
      Qu !== null && typeof WeakSet == "function" && (Ih === null && (Ih = /* @__PURE__ */ new WeakSet()), Ih.add(t));
    }
    function G0(t, e, a) {
      do {
        var i = t, o = i.alternate, f = i.child, d = i.sibling, h = i.tag;
        i = i.type;
        var y = null;
        switch (h) {
          case 0:
          case 15:
          case 1:
            y = i;
            break;
          case 11:
            y = i.render;
        }
        if (Qu === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var p = !1;
        if (i = !1, y !== null && (y = Qu(y), y !== void 0 && (a.has(y) ? i = !0 : e.has(y) && (h === 1 ? i = !0 : p = !0))), Ih !== null && (Ih.has(t) || o !== null && Ih.has(o)) && (i = !0), i && (t._debugNeedsRemount = !0), (i || p) && (o = ea(t, 2), o !== null && Nt(o, t, 2)), f === null || i || G0(
          f,
          e,
          a
        ), d === null) break;
        t = d;
      } while (!0);
    }
    function n1(t, e, a, i) {
      this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, JS || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Vm(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function mu(t, e) {
      var a = t.alternate;
      switch (a === null ? (a = N(
        t.tag,
        e,
        t.key,
        t.mode
      ), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a._debugOwner = t._debugOwner, a._debugStack = t._debugStack, a._debugTask = t._debugTask, a._debugHookTypes = t._debugHookTypes, a.alternate = t, t.alternate = a) : (a.pendingProps = e, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = t.flags & 65011712, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, e = t.dependencies, a.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext,
        _debugThenableState: e._debugThenableState
      }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a.selfBaseDuration = t.selfBaseDuration, a.treeBaseDuration = t.treeBaseDuration, a._debugInfo = t._debugInfo, a._debugNeedsRemount = t._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = Yi(t.type);
          break;
        case 1:
          a.type = Yi(t.type);
          break;
        case 11:
          a.type = Ed(t.type);
      }
      return a;
    }
    function Zm(t, e) {
      t.flags &= 65011714;
      var a = t.alternate;
      return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null, t.selfBaseDuration = 0, t.treeBaseDuration = 0) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext,
        _debugThenableState: e._debugThenableState
      }, t.selfBaseDuration = a.selfBaseDuration, t.treeBaseDuration = a.treeBaseDuration), t;
    }
    function Hc(t, e, a, i, o, f) {
      var d = 0, h = t;
      if (typeof t == "function")
        Vm(t) && (d = 1), h = Yi(h);
      else if (typeof t == "string")
        d = Z(), d = Bg(t, a, d) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else
        t: switch (t) {
          case Pn:
            return e = N(31, a, e, o), e.elementType = Pn, e.lanes = f, e;
          case Hf:
            return Nc(
              a.children,
              o,
              f,
              e
            );
          case Aa:
            d = 8, o |= xa, o |= Ei;
            break;
          case _s:
            return t = a, i = o, typeof t.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof t.id
            ), e = N(12, t, e, i | Ft), e.elementType = _s, e.lanes = f, e.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, e;
          case fo:
            return e = N(13, a, e, o), e.elementType = fo, e.lanes = f, e;
          case Ha:
            return e = N(19, a, e, o), e.elementType = Ha, e.lanes = f, e;
          default:
            if (typeof t == "object" && t !== null)
              switch (t.$$typeof) {
                case In:
                  d = 10;
                  break t;
                case Nh:
                  d = 9;
                  break t;
                case Nf:
                  d = 11, h = Ed(h);
                  break t;
                case zs:
                  d = 14;
                  break t;
                case na:
                  d = 16, h = null;
                  break t;
              }
            h = "", (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), t === null ? a = "null" : bl(t) ? a = "array" : t !== void 0 && t.$$typeof === _n ? (a = "<" + (Jt(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof t, (d = i ? ze(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return e = N(d, a, e, o), e.elementType = t, e.type = h, e.lanes = f, e._debugOwner = i, e;
    }
    function qi(t, e, a) {
      return e = Hc(
        t.type,
        t.key,
        t.props,
        t._owner,
        e,
        a
      ), e._debugOwner = t._owner, e._debugStack = t._debugStack, e._debugTask = t._debugTask, e;
    }
    function Nc(t, e, a, i) {
      return t = N(7, t, i, e), t.lanes = a, t;
    }
    function Jo(t, e, a) {
      return t = N(6, t, null, e), t.lanes = a, t;
    }
    function Jm(t) {
      var e = N(18, null, null, Ht);
      return e.stateNode = t, e;
    }
    function Td(t, e, a) {
      return e = N(
        4,
        t.children !== null ? t.children : [],
        t.key,
        e
      ), e.lanes = a, e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
      }, e;
    }
    function ra(t, e) {
      if (typeof t == "object" && t !== null) {
        var a = M1.get(t);
        return a !== void 0 ? a : (e = {
          value: t,
          source: e,
          stack: At(e)
        }, M1.set(t, e), e);
      }
      return {
        value: t,
        source: e,
        stack: At(e)
      };
    }
    function jn(t, e) {
      wi(), Ph[tm++] = jp, Ph[tm++] = av, av = t, jp = e;
    }
    function Km(t, e, a) {
      wi(), Lu[Vu++] = go, Lu[Vu++] = vo, Lu[Vu++] = Ns, Ns = t;
      var i = go;
      t = vo;
      var o = 32 - kl(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - kl(e) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, go = 1 << 32 - kl(e) + o | a << o | i, vo = f + t;
      } else
        go = 1 << f | a << o | i, vo = t;
    }
    function Ad(t) {
      wi(), t.return !== null && (jn(t, 1), Km(t, 1, 0));
    }
    function Od(t) {
      for (; t === av; )
        av = Ph[--tm], Ph[tm] = null, jp = Ph[--tm], Ph[tm] = null;
      for (; t === Ns; )
        Ns = Lu[--Vu], Lu[Vu] = null, vo = Lu[--Vu], Lu[Vu] = null, go = Lu[--Vu], Lu[Vu] = null;
    }
    function X0() {
      return wi(), Ns !== null ? { id: go, overflow: vo } : null;
    }
    function Q0(t, e) {
      wi(), Lu[Vu++] = go, Lu[Vu++] = vo, Lu[Vu++] = Ns, go = e.id, vo = e.overflow, Ns = t;
    }
    function wi() {
      ce || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function xc(t, e) {
      if (t.return === null) {
        if (eu === null)
          eu = {
            fiber: t,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: e
          };
        else {
          if (eu.fiber !== t)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          eu.distanceFromLeaf > e && (eu.distanceFromLeaf = e);
        }
        return eu;
      }
      var a = xc(
        t.return,
        e + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === t ? (a = a[a.length - 1], a.distanceFromLeaf > e && (a.distanceFromLeaf = e), a) : (e = {
        fiber: t,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: e
      }, a.push(e), e);
    }
    function L0() {
      ce && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function la(t, e) {
      yc || (t = xc(t, 0), t.serverProps = null, e !== null && (e = Ug(e), t.serverTail.push(e)));
    }
    function pn(t) {
      var e = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", i = eu;
      throw i !== null && (eu = null, a = Dm(i)), Rr(
        ra(
          Error(
            "Hydration failed because the server rendered " + (e ? "text" : "HTML") + ` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + a
          ),
          t
        )
      ), C1;
    }
    function $m(t) {
      var e = t.stateNode, a = t.type, i = t.memoizedProps;
      switch (e[We] = t, e[Oa] = i, Ea(a, i), a) {
        case "dialog":
          Ut("cancel", e), Ut("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Ut("load", e);
          break;
        case "video":
        case "audio":
          for (a = 0; a < r0.length; a++)
            Ut(r0[a], e);
          break;
        case "source":
          Ut("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Ut("error", e), Ut("load", e);
          break;
        case "details":
          Ut("toggle", e);
          break;
        case "input":
          ta("input", i), Ut("invalid", e), fa(e, i), ud(
            e,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          );
          break;
        case "option":
          z0(e, i);
          break;
        case "select":
          ta("select", i), Ut("invalid", e), id(e, i);
          break;
        case "textarea":
          ta("textarea", i), Ut("invalid", e), Tc(e, i), jo(
            e,
            i.value,
            i.defaultValue,
            i.children
          );
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || i.suppressHydrationWarning === !0 || Wy(e.textContent, a) ? (i.popover != null && (Ut("beforetoggle", e), Ut("toggle", e)), i.onScroll != null && Ut("scroll", e), i.onScrollEnd != null && Ut("scrollend", e), i.onClick != null && (e.onclick = mn), e = !0) : e = !1, e || pn(t, !0);
    }
    function km(t) {
      for (_a = t.return; _a; )
        switch (_a.tag) {
          case 5:
          case 31:
          case 13:
            Zu = !1;
            return;
          case 27:
          case 3:
            Zu = !0;
            return;
          default:
            _a = _a.return;
        }
    }
    function Bc(t) {
      if (t !== _a) return !1;
      if (!ce)
        return km(t), ce = !0, !1;
      var e = t.tag, a;
      if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || Of(t.type, t.memoizedProps)), a = !a), a && Ie) {
        for (a = Ie; a; ) {
          var i = xc(t, 0), o = Ug(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? Df(a) : ln(a.nextSibling);
        }
        pn(t);
      }
      if (km(t), e === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Ie = Df(t);
      } else if (e === 31) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Ie = Df(t);
      } else
        e === 27 ? (e = Ie, oc(t.type) ? (t = SS, SS = null, Ie = t) : Ie = e) : Ie = _a ? ln(t.stateNode.nextSibling) : null;
      return !0;
    }
    function Gi() {
      Ie = _a = null, yc = ce = !1;
    }
    function Dr() {
      var t = $f;
      return t !== null && (sn === null ? sn = t : sn.push.apply(
        sn,
        t
      ), $f = null), t;
    }
    function Rr(t) {
      $f === null ? $f = [t] : $f.push(t);
    }
    function Xi() {
      var t = eu;
      if (t !== null) {
        eu = null;
        for (var e = Dm(t); 0 < t.children.length; )
          t = t.children[0];
        ft(t.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            e
          );
        });
      }
    }
    function Ko() {
      em = nv = null, lm = !1;
    }
    function gn(t, e, a) {
      qt(U1, e._currentValue, t), e._currentValue = a, qt(H1, e._currentRenderer, t), e._currentRenderer !== void 0 && e._currentRenderer !== null && e._currentRenderer !== $S && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), e._currentRenderer = $S;
    }
    function Yn(t, e) {
      t._currentValue = U1.current;
      var a = H1.current;
      gt(H1, e), t._currentRenderer = a, gt(U1, e);
    }
    function _d(t, e, a) {
      for (; t !== null; ) {
        var i = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e), t === a) break;
        t = t.return;
      }
      t !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function ei(t, e, a, i) {
      var o = t.child;
      for (o !== null && (o.return = t); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          t: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var y = 0; y < e.length; y++)
              if (h.context === e[y]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), _d(
                  f.return,
                  a,
                  t
                ), i || (d = null);
                break t;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), _d(
            d,
            a,
            t
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === t) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function qn(t, e, a, i) {
      t = null;
      for (var o = e, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            cn(o.pendingProps.value, d.value) || (t !== null ? t.push(h) : t = [h]);
          }
        } else if (o === dc.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (t !== null ? t.push(y0) : t = [y0]);
        }
        o = o.return;
      }
      t !== null && ei(
        e,
        t,
        a,
        i
      ), e.flags |= 262144;
    }
    function $o(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!cn(
          t.context._currentValue,
          t.memoizedValue
        ))
          return !0;
        t = t.next;
      }
      return !1;
    }
    function Qi(t) {
      nv = t, em = null, t = t.dependencies, t !== null && (t.firstContext = null);
    }
    function ve(t) {
      return lm && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), Wm(nv, t);
    }
    function Mr(t, e) {
      return nv === null && Qi(t), Wm(t, e);
    }
    function Wm(t, e) {
      var a = e._currentValue;
      if (e = { context: e, memoizedValue: a, next: null }, em === null) {
        if (t === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        em = e, t.dependencies = {
          lanes: 0,
          firstContext: e,
          _debugThenableState: null
        }, t.flags |= 524288;
      } else em = em.next = e;
      return a;
    }
    function zd() {
      return {
        controller: new VE(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function jc(t) {
      t.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), t.refCount++;
    }
    function Cr(t) {
      t.refCount--, 0 > t.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), t.refCount === 0 && ZE(JE, function() {
        t.controller.abort();
      });
    }
    function yu(t, e, a) {
      (t & 127) !== 0 ? 0 > pc && (pc = Xl(), qp = uv(e), N1 = e, a != null && (x1 = dt(a)), (he & (Il | nu)) !== oa && (pl = !0, Wf = Yp), t = _f(), e = xu(), t !== am || e !== wp ? am = -1.1 : e !== null && (Wf = Yp), js = t, wp = e) : (t & 4194048) !== 0 && 0 > Ju && (Ju = Xl(), Gp = uv(e), kS = e, a != null && (WS = dt(a)), 0 > To) && (t = _f(), e = xu(), (t !== If || e !== Ys) && (If = -1.1), Ff = t, Ys = e);
    }
    function V0(t) {
      if (0 > pc) {
        pc = Xl(), qp = t._debugTask != null ? t._debugTask : null, (he & (Il | nu)) !== oa && (Wf = Yp);
        var e = _f(), a = xu();
        e !== am || a !== wp ? am = -1.1 : a !== null && (Wf = Yp), js = e, wp = a;
      }
      0 > Ju && (Ju = Xl(), Gp = t._debugTask != null ? t._debugTask : null, 0 > To) && (t = _f(), e = xu(), (t !== If || e !== Ys) && (If = -1.1), Ff = t, Ys = e);
    }
    function pu() {
      var t = xs;
      return xs = 0, t;
    }
    function ko(t) {
      var e = xs;
      return xs = t, e;
    }
    function sa(t) {
      var e = xs;
      return xs += t, e;
    }
    function Yc() {
      Ct = Ot = -1.1;
    }
    function Ke() {
      var t = Ot;
      return Ot = -1.1, t;
    }
    function Nl(t) {
      0 <= t && (Ot = t);
    }
    function vn() {
      var t = fl;
      return fl = -0, t;
    }
    function Va(t) {
      0 <= t && (fl = t);
    }
    function Za() {
      var t = nl;
      return nl = null, t;
    }
    function Sn() {
      var t = pl;
      return pl = !1, t;
    }
    function li(t) {
      on = Xl(), 0 > t.actualStartTime && (t.actualStartTime = on);
    }
    function Dd(t) {
      if (0 <= on) {
        var e = Xl() - on;
        t.actualDuration += e, t.selfBaseDuration = e, on = -1;
      }
    }
    function Ur(t) {
      if (0 <= on) {
        var e = Xl() - on;
        t.actualDuration += e, on = -1;
      }
    }
    function da() {
      if (0 <= on) {
        var t = Xl(), e = t - on;
        on = -1, xs += e, fl += e, Ct = t;
      }
    }
    function Z0(t) {
      nl === null && (nl = []), nl.push(t), bo === null && (bo = []), bo.push(t);
    }
    function il() {
      on = Xl(), 0 > Ot && (Ot = on);
    }
    function qc(t) {
      for (var e = t.child; e; )
        t.actualDuration += e.actualDuration, e = e.sibling;
    }
    function ai(t, e) {
      if (Qp === null) {
        var a = Qp = [];
        j1 = 0, qs = ky(), nm = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return j1++, e.then(Fm, Fm), e;
    }
    function Fm() {
      if (--j1 === 0 && (-1 < Ju || (To = -1.1), Qp !== null)) {
        nm !== null && (nm.status = "fulfilled");
        var t = Qp;
        Qp = null, qs = 0, nm = null;
        for (var e = 0; e < t.length; e++) (0, t[e])();
      }
    }
    function Rd(t, e) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return t.then(
        function() {
          i.status = "fulfilled", i.value = e;
          for (var o = 0; o < a.length; o++) (0, a[o])(e);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function ni() {
      var t = ws.current;
      return t !== null ? t : Xe.pooledCache;
    }
    function Wo(t, e) {
      e === null ? qt(ws, ws.current, t) : qt(ws, e.pool, t);
    }
    function Im() {
      var t = ni();
      return t === null ? null : { parent: Gl._currentValue, pool: t };
    }
    function Md() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Pm(t) {
      return t = t.status, t === "fulfilled" || t === "rejected";
    }
    function Ja(t, e, a) {
      G.actQueue !== null && (G.didUsePromise = !0);
      var i = t.thenables;
      if (a = i[a], a === void 0 ? i.push(e) : a !== e && (t.didWarnAboutUncachedPromise || (t.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), e.then(mn, mn), e = a), e._debugInfo === void 0) {
        t = performance.now(), i = e.displayName;
        var o = {
          name: typeof i == "string" ? i : "Promise",
          start: t,
          end: t,
          value: e
        };
        e._debugInfo = [{ awaited: o }], e.status !== "fulfilled" && e.status !== "rejected" && (t = function() {
          o.end = performance.now();
        }, e.then(t, t));
      }
      switch (e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw t = e.reason, Hr(t), t;
        default:
          if (typeof e.status == "string")
            e.then(mn, mn);
          else {
            if (t = Xe, t !== null && 100 < t.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            t = e, t.status = "pending", t.then(
              function(f) {
                if (e.status === "pending") {
                  var d = e;
                  d.status = "fulfilled", d.value = f;
                }
              },
              function(f) {
                if (e.status === "pending") {
                  var d = e;
                  d.status = "rejected", d.reason = f;
                }
              }
            );
          }
          switch (e.status) {
            case "fulfilled":
              return e.value;
            case "rejected":
              throw t = e.reason, Hr(t), t;
          }
          throw Xs = e, kp = !0, um;
      }
    }
    function Ka(t) {
      try {
        return FE(t);
      } catch (e) {
        throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Xs = e, kp = !0, um) : e;
      }
    }
    function wc() {
      if (Xs === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var t = Xs;
      return Xs = null, kp = !1, t;
    }
    function Hr(t) {
      if (t === um || t === hv)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function sl(t) {
      var e = It;
      return t != null && (It = e === null ? t : e.concat(t)), e;
    }
    function za() {
      var t = It;
      if (t != null) {
        for (var e = t.length - 1; 0 <= e; e--)
          if (t[e].name != null) {
            var a = t[e].debugTask;
            if (a != null) return a;
          }
      }
      return null;
    }
    function ha(t, e, a) {
      for (var i = Object.keys(t.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          e === null && (e = qi(t, a.mode, 0), e._debugInfo = It, e.return = a), ft(
            e,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function wn(t) {
      var e = Wp;
      return Wp += 1, im === null && (im = Md()), Ja(im, t, e);
    }
    function Da(t, e) {
      e = e.props.ref, t.ref = e !== void 0 ? e : null;
    }
    function Gn(t, e) {
      throw e.$$typeof === Xg ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (t = Object.prototype.toString.call(e), Error(
        "Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function bn(t, e) {
      var a = za();
      a !== null ? a.run(
        Gn.bind(null, t, e)
      ) : Gn(t, e);
    }
    function ty(t, e) {
      var a = dt(t) || "Component";
      pb[a] || (pb[a] = !0, e = e.displayName || e.name || "Component", t.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        e,
        e,
        e
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        e,
        e,
        a,
        e,
        a
      ));
    }
    function Fo(t, e) {
      var a = za();
      a !== null ? a.run(
        ty.bind(null, t, e)
      ) : ty(t, e);
    }
    function Cd(t, e) {
      var a = dt(t) || "Component";
      gb[a] || (gb[a] = !0, e = String(e), t.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        e
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        e,
        a
      ));
    }
    function Nr(t, e) {
      var a = za();
      a !== null ? a.run(
        Cd.bind(null, t, e)
      ) : Cd(t, e);
    }
    function xl(t) {
      function e(b, T) {
        if (t) {
          var O = b.deletions;
          O === null ? (b.deletions = [T], b.flags |= 16) : O.push(T);
        }
      }
      function a(b, T) {
        if (!t) return null;
        for (; T !== null; )
          e(b, T), T = T.sibling;
        return null;
      }
      function i(b) {
        for (var T = /* @__PURE__ */ new Map(); b !== null; )
          b.key !== null ? T.set(b.key, b) : T.set(b.index, b), b = b.sibling;
        return T;
      }
      function o(b, T) {
        return b = mu(b, T), b.index = 0, b.sibling = null, b;
      }
      function f(b, T, O) {
        return b.index = O, t ? (O = b.alternate, O !== null ? (O = O.index, O < T ? (b.flags |= 67108866, T) : O) : (b.flags |= 67108866, T)) : (b.flags |= 1048576, T);
      }
      function d(b) {
        return t && b.alternate === null && (b.flags |= 67108866), b;
      }
      function h(b, T, O, J) {
        return T === null || T.tag !== 6 ? (T = Jo(
          O,
          b.mode,
          J
        ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = It, T) : (T = o(T, O), T.return = b, T._debugInfo = It, T);
      }
      function y(b, T, O, J) {
        var ct = O.type;
        return ct === Hf ? (T = _(
          b,
          T,
          O.props.children,
          J,
          O.key
        ), ha(O, T, b), T) : T !== null && (T.elementType === ct || Lm(T, O) || typeof ct == "object" && ct !== null && ct.$$typeof === na && Ka(ct) === T.type) ? (T = o(T, O.props), Da(T, O), T.return = b, T._debugOwner = O._owner, T._debugInfo = It, T) : (T = qi(O, b.mode, J), Da(T, O), T.return = b, T._debugInfo = It, T);
      }
      function p(b, T, O, J) {
        return T === null || T.tag !== 4 || T.stateNode.containerInfo !== O.containerInfo || T.stateNode.implementation !== O.implementation ? (T = Td(O, b.mode, J), T.return = b, T._debugInfo = It, T) : (T = o(T, O.children || []), T.return = b, T._debugInfo = It, T);
      }
      function _(b, T, O, J, ct) {
        return T === null || T.tag !== 7 ? (T = Nc(
          O,
          b.mode,
          J,
          ct
        ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = It, T) : (T = o(T, O), T.return = b, T._debugInfo = It, T);
      }
      function M(b, T, O) {
        if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
          return T = Jo(
            "" + T,
            b.mode,
            O
          ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = It, T;
        if (typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case _n:
              return O = qi(
                T,
                b.mode,
                O
              ), Da(O, T), O.return = b, b = sl(T._debugInfo), O._debugInfo = It, It = b, O;
            case rc:
              return T = Td(
                T,
                b.mode,
                O
              ), T.return = b, T._debugInfo = It, T;
            case na:
              var J = sl(T._debugInfo);
              return T = Ka(T), b = M(b, T, O), It = J, b;
          }
          if (bl(T) || Rt(T))
            return O = Nc(
              T,
              b.mode,
              O,
              null
            ), O.return = b, O._debugOwner = b, O._debugTask = b._debugTask, b = sl(T._debugInfo), O._debugInfo = It, It = b, O;
          if (typeof T.then == "function")
            return J = sl(T._debugInfo), b = M(
              b,
              wn(T),
              O
            ), It = J, b;
          if (T.$$typeof === In)
            return M(
              b,
              Mr(b, T),
              O
            );
          bn(b, T);
        }
        return typeof T == "function" && Fo(b, T), typeof T == "symbol" && Nr(b, T), null;
      }
      function E(b, T, O, J) {
        var ct = T !== null ? T.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
          return ct !== null ? null : h(b, T, "" + O, J);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case _n:
              return O.key === ct ? (ct = sl(O._debugInfo), b = y(
                b,
                T,
                O,
                J
              ), It = ct, b) : null;
            case rc:
              return O.key === ct ? p(b, T, O, J) : null;
            case na:
              return ct = sl(O._debugInfo), O = Ka(O), b = E(
                b,
                T,
                O,
                J
              ), It = ct, b;
          }
          if (bl(O) || Rt(O))
            return ct !== null ? null : (ct = sl(O._debugInfo), b = _(
              b,
              T,
              O,
              J,
              null
            ), It = ct, b);
          if (typeof O.then == "function")
            return ct = sl(O._debugInfo), b = E(
              b,
              T,
              wn(O),
              J
            ), It = ct, b;
          if (O.$$typeof === In)
            return E(
              b,
              T,
              Mr(b, O),
              J
            );
          bn(b, O);
        }
        return typeof O == "function" && Fo(b, O), typeof O == "symbol" && Nr(b, O), null;
      }
      function q(b, T, O, J, ct) {
        if (typeof J == "string" && J !== "" || typeof J == "number" || typeof J == "bigint")
          return b = b.get(O) || null, h(T, b, "" + J, ct);
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case _n:
              return O = b.get(
                J.key === null ? O : J.key
              ) || null, b = sl(J._debugInfo), T = y(
                T,
                O,
                J,
                ct
              ), It = b, T;
            case rc:
              return b = b.get(
                J.key === null ? O : J.key
              ) || null, p(T, b, J, ct);
            case na:
              var Yt = sl(J._debugInfo);
              return J = Ka(J), T = q(
                b,
                T,
                O,
                J,
                ct
              ), It = Yt, T;
          }
          if (bl(J) || Rt(J))
            return O = b.get(O) || null, b = sl(J._debugInfo), T = _(
              T,
              O,
              J,
              ct,
              null
            ), It = b, T;
          if (typeof J.then == "function")
            return Yt = sl(J._debugInfo), T = q(
              b,
              T,
              O,
              wn(J),
              ct
            ), It = Yt, T;
          if (J.$$typeof === In)
            return q(
              b,
              T,
              O,
              Mr(T, J),
              ct
            );
          bn(T, J);
        }
        return typeof J == "function" && Fo(T, J), typeof J == "symbol" && Nr(T, J), null;
      }
      function nt(b, T, O, J) {
        if (typeof O != "object" || O === null) return J;
        switch (O.$$typeof) {
          case _n:
          case rc:
            xt(b, T, O);
            var ct = O.key;
            if (typeof ct != "string") break;
            if (J === null) {
              J = /* @__PURE__ */ new Set(), J.add(ct);
              break;
            }
            if (!J.has(ct)) {
              J.add(ct);
              break;
            }
            ft(T, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                ct
              );
            });
            break;
          case na:
            O = Ka(O), nt(b, T, O, J);
        }
        return J;
      }
      function rt(b, T, O, J) {
        for (var ct = null, Yt = null, Tt = null, St = T, kt = T = 0, Pe = null; St !== null && kt < O.length; kt++) {
          St.index > kt ? (Pe = St, St = null) : Pe = St.sibling;
          var Cl = E(
            b,
            St,
            O[kt],
            J
          );
          if (Cl === null) {
            St === null && (St = Pe);
            break;
          }
          ct = nt(
            b,
            Cl,
            O[kt],
            ct
          ), t && St && Cl.alternate === null && e(b, St), T = f(Cl, T, kt), Tt === null ? Yt = Cl : Tt.sibling = Cl, Tt = Cl, St = Pe;
        }
        if (kt === O.length)
          return a(b, St), ce && jn(b, kt), Yt;
        if (St === null) {
          for (; kt < O.length; kt++)
            St = M(b, O[kt], J), St !== null && (ct = nt(
              b,
              St,
              O[kt],
              ct
            ), T = f(
              St,
              T,
              kt
            ), Tt === null ? Yt = St : Tt.sibling = St, Tt = St);
          return ce && jn(b, kt), Yt;
        }
        for (St = i(St); kt < O.length; kt++)
          Pe = q(
            St,
            b,
            kt,
            O[kt],
            J
          ), Pe !== null && (ct = nt(
            b,
            Pe,
            O[kt],
            ct
          ), t && Pe.alternate !== null && St.delete(
            Pe.key === null ? kt : Pe.key
          ), T = f(
            Pe,
            T,
            kt
          ), Tt === null ? Yt = Pe : Tt.sibling = Pe, Tt = Pe);
        return t && St.forEach(function(Co) {
          return e(b, Co);
        }), ce && jn(b, kt), Yt;
      }
      function Ze(b, T, O, J) {
        if (O == null)
          throw Error("An iterable object provided no iterator.");
        for (var ct = null, Yt = null, Tt = T, St = T = 0, kt = null, Pe = null, Cl = O.next(); Tt !== null && !Cl.done; St++, Cl = O.next()) {
          Tt.index > St ? (kt = Tt, Tt = null) : kt = Tt.sibling;
          var Co = E(b, Tt, Cl.value, J);
          if (Co === null) {
            Tt === null && (Tt = kt);
            break;
          }
          Pe = nt(
            b,
            Co,
            Cl.value,
            Pe
          ), t && Tt && Co.alternate === null && e(b, Tt), T = f(Co, T, St), Yt === null ? ct = Co : Yt.sibling = Co, Yt = Co, Tt = kt;
        }
        if (Cl.done)
          return a(b, Tt), ce && jn(b, St), ct;
        if (Tt === null) {
          for (; !Cl.done; St++, Cl = O.next())
            Tt = M(b, Cl.value, J), Tt !== null && (Pe = nt(
              b,
              Tt,
              Cl.value,
              Pe
            ), T = f(
              Tt,
              T,
              St
            ), Yt === null ? ct = Tt : Yt.sibling = Tt, Yt = Tt);
          return ce && jn(b, St), ct;
        }
        for (Tt = i(Tt); !Cl.done; St++, Cl = O.next())
          kt = q(
            Tt,
            b,
            St,
            Cl.value,
            J
          ), kt !== null && (Pe = nt(
            b,
            kt,
            Cl.value,
            Pe
          ), t && kt.alternate !== null && Tt.delete(
            kt.key === null ? St : kt.key
          ), T = f(
            kt,
            T,
            St
          ), Yt === null ? ct = kt : Yt.sibling = kt, Yt = kt);
        return t && Tt.forEach(function(ET) {
          return e(b, ET);
        }), ce && jn(b, St), ct;
      }
      function fe(b, T, O, J) {
        if (typeof O == "object" && O !== null && O.type === Hf && O.key === null && (ha(O, null, b), O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case _n:
              var ct = sl(O._debugInfo);
              t: {
                for (var Yt = O.key; T !== null; ) {
                  if (T.key === Yt) {
                    if (Yt = O.type, Yt === Hf) {
                      if (T.tag === 7) {
                        a(
                          b,
                          T.sibling
                        ), J = o(
                          T,
                          O.props.children
                        ), J.return = b, J._debugOwner = O._owner, J._debugInfo = It, ha(O, J, b), b = J;
                        break t;
                      }
                    } else if (T.elementType === Yt || Lm(
                      T,
                      O
                    ) || typeof Yt == "object" && Yt !== null && Yt.$$typeof === na && Ka(Yt) === T.type) {
                      a(
                        b,
                        T.sibling
                      ), J = o(T, O.props), Da(J, O), J.return = b, J._debugOwner = O._owner, J._debugInfo = It, b = J;
                      break t;
                    }
                    a(b, T);
                    break;
                  } else e(b, T);
                  T = T.sibling;
                }
                O.type === Hf ? (J = Nc(
                  O.props.children,
                  b.mode,
                  J,
                  O.key
                ), J.return = b, J._debugOwner = b, J._debugTask = b._debugTask, J._debugInfo = It, ha(O, J, b), b = J) : (J = qi(
                  O,
                  b.mode,
                  J
                ), Da(J, O), J.return = b, J._debugInfo = It, b = J);
              }
              return b = d(b), It = ct, b;
            case rc:
              t: {
                for (ct = O, O = ct.key; T !== null; ) {
                  if (T.key === O)
                    if (T.tag === 4 && T.stateNode.containerInfo === ct.containerInfo && T.stateNode.implementation === ct.implementation) {
                      a(
                        b,
                        T.sibling
                      ), J = o(
                        T,
                        ct.children || []
                      ), J.return = b, b = J;
                      break t;
                    } else {
                      a(b, T);
                      break;
                    }
                  else e(b, T);
                  T = T.sibling;
                }
                J = Td(
                  ct,
                  b.mode,
                  J
                ), J.return = b, b = J;
              }
              return d(b);
            case na:
              return ct = sl(O._debugInfo), O = Ka(O), b = fe(
                b,
                T,
                O,
                J
              ), It = ct, b;
          }
          if (bl(O))
            return ct = sl(O._debugInfo), b = rt(
              b,
              T,
              O,
              J
            ), It = ct, b;
          if (Rt(O)) {
            if (ct = sl(O._debugInfo), Yt = Rt(O), typeof Yt != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var Tt = Yt.call(O);
            return Tt === O ? (b.tag !== 0 || Object.prototype.toString.call(b.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(Tt) !== "[object Generator]") && (mb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), mb = !0) : O.entries !== Yt || G1 || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), G1 = !0), b = Ze(
              b,
              T,
              Tt,
              J
            ), It = ct, b;
          }
          if (typeof O.then == "function")
            return ct = sl(O._debugInfo), b = fe(
              b,
              T,
              wn(O),
              J
            ), It = ct, b;
          if (O.$$typeof === In)
            return fe(
              b,
              T,
              Mr(b, O),
              J
            );
          bn(b, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (ct = "" + O, T !== null && T.tag === 6 ? (a(
          b,
          T.sibling
        ), J = o(T, ct), J.return = b, b = J) : (a(b, T), J = Jo(
          ct,
          b.mode,
          J
        ), J.return = b, J._debugOwner = b, J._debugTask = b._debugTask, J._debugInfo = It, b = J), d(b)) : (typeof O == "function" && Fo(b, O), typeof O == "symbol" && Nr(b, O), a(b, T));
      }
      return function(b, T, O, J) {
        var ct = It;
        It = null;
        try {
          Wp = 0;
          var Yt = fe(
            b,
            T,
            O,
            J
          );
          return im = null, Yt;
        } catch (Pe) {
          if (Pe === um || Pe === hv) throw Pe;
          var Tt = N(29, Pe, null, b.mode);
          Tt.lanes = J, Tt.return = b;
          var St = Tt._debugInfo = It;
          if (Tt._debugOwner = b._debugOwner, Tt._debugTask = b._debugTask, St != null) {
            for (var kt = St.length - 1; 0 <= kt; kt--)
              if (typeof St[kt].stack == "string") {
                Tt._debugOwner = St[kt], Tt._debugTask = St[kt].debugTask;
                break;
              }
          }
          return Tt;
        } finally {
          It = ct;
        }
      };
    }
    function Ye(t, e) {
      var a = bl(t);
      return t = !a && typeof Rt(t) == "function", a || t ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        e,
        a
      ), !1) : !0;
    }
    function ue(t) {
      t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function gu(t, e) {
      t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        callbacks: null
      });
    }
    function Ol(t) {
      return {
        lane: t,
        tag: Sb,
        payload: null,
        callback: null,
        next: null
      };
    }
    function vu(t, e, a) {
      var i = t.updateQueue;
      if (i === null) return null;
      if (i = i.shared, Q1 === i && !Tb) {
        var o = dt(t);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), Tb = !0;
      }
      return (he & Il) !== oa ? (o = i.pending, o === null ? e.next = e : (e.next = o.next, o.next = e), i.pending = e, e = zr(t), Qm(t, null, a), e) : (Zo(t, i, e, a), zr(t));
    }
    function En(t, e, a) {
      if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
        var i = e.lanes;
        i &= t.pendingLanes, a |= i, e.lanes = a, yr(t, a);
      }
    }
    function xr(t, e) {
      var a = t.updateQueue, i = t.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = e : f = f.next = e;
        } else o = f = e;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, t.updateQueue = a;
        return;
      }
      t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = e : t.next = e, a.lastBaseUpdate = e;
    }
    function Io() {
      if (L1) {
        var t = nm;
        if (t !== null) throw t;
      }
    }
    function Su(t, e, a, i) {
      L1 = !1;
      var o = t.updateQueue;
      Pf = !1, Q1 = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var y = h, p = y.next;
        y.next = null, d === null ? f = p : d.next = p, d = y;
        var _ = t.alternate;
        _ !== null && (_ = _.updateQueue, h = _.lastBaseUpdate, h !== d && (h === null ? _.firstBaseUpdate = p : h.next = p, _.lastBaseUpdate = y));
      }
      if (f !== null) {
        var M = o.baseState;
        d = 0, _ = p = y = null, h = f;
        do {
          var E = h.lane & -536870913, q = E !== h.lane;
          if (q ? (Pt & E) === E : (i & E) === E) {
            E !== 0 && E === qs && (L1 = !0), _ !== null && (_ = _.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            t: {
              E = t;
              var nt = h, rt = e, Ze = a;
              switch (nt.tag) {
                case bb:
                  if (nt = nt.payload, typeof nt == "function") {
                    lm = !0;
                    var fe = nt.call(
                      Ze,
                      M,
                      rt
                    );
                    if (E.mode & xa) {
                      ht(!0);
                      try {
                        nt.call(Ze, M, rt);
                      } finally {
                        ht(!1);
                      }
                    }
                    lm = !1, M = fe;
                    break t;
                  }
                  M = nt;
                  break t;
                case X1:
                  E.flags = E.flags & -65537 | 128;
                case Sb:
                  if (fe = nt.payload, typeof fe == "function") {
                    if (lm = !0, nt = fe.call(
                      Ze,
                      M,
                      rt
                    ), E.mode & xa) {
                      ht(!0);
                      try {
                        fe.call(Ze, M, rt);
                      } finally {
                        ht(!1);
                      }
                    }
                    lm = !1;
                  } else nt = fe;
                  if (nt == null) break t;
                  M = Wt({}, M, nt);
                  break t;
                case Eb:
                  Pf = !0;
              }
            }
            E = h.callback, E !== null && (t.flags |= 64, q && (t.flags |= 8192), q = o.callbacks, q === null ? o.callbacks = [E] : q.push(E));
          } else
            q = {
              lane: E,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, _ === null ? (p = _ = q, y = M) : _ = _.next = q, d |= E;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            q = h, h = q.next, q.next = null, o.lastBaseUpdate = q, o.shared.pending = null;
          }
        } while (!0);
        _ === null && (y = M), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = _, f === null && (o.shared.lanes = 0), lr |= d, t.lanes = d, t.memoizedState = M;
      }
      Q1 = null;
    }
    function Li(t, e) {
      if (typeof t != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + t
        );
      t.call(e);
    }
    function ey(t, e) {
      var a = t.shared.hiddenCallbacks;
      if (a !== null)
        for (t.shared.hiddenCallbacks = null, t = 0; t < a.length; t++)
          Li(a[t], e);
    }
    function Po(t, e) {
      var a = t.callbacks;
      if (a !== null)
        for (t.callbacks = null, t = 0; t < a.length; t++)
          Li(a[t], e);
    }
    function Ud(t, e) {
      var a = vc;
      qt(yv, a, t), qt(cm, e, t), vc = a | e.baseLanes;
    }
    function ui(t) {
      qt(yv, vc, t), qt(
        cm,
        cm.current,
        t
      );
    }
    function Xn(t) {
      vc = yv.current, gt(cm, t), gt(yv, t);
    }
    function ma(t) {
      var e = t.alternate;
      qt(
        Ml,
        Ml.current & om,
        t
      ), qt(lu, t, t), Ku === null && (e === null || cm.current !== null || e.memoizedState !== null) && (Ku = t);
    }
    function Qn(t) {
      qt(Ml, Ml.current, t), qt(lu, t, t), Ku === null && (Ku = t);
    }
    function Hd(t) {
      t.tag === 22 ? (qt(Ml, Ml.current, t), qt(lu, t, t), Ku === null && (Ku = t)) : bu(t);
    }
    function bu(t) {
      qt(Ml, Ml.current, t), qt(
        lu,
        lu.current,
        t
      );
    }
    function Bl(t) {
      gt(lu, t), Ku === t && (Ku = null), gt(Ml, t);
    }
    function Gc(t) {
      for (var e = t; e !== null; ) {
        if (e.tag === 13) {
          var a = e.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || ps(a) || Iy(a)))
            return e;
        } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
          if ((e.flags & 128) !== 0) return e;
        } else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return null;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      return null;
    }
    function Bt() {
      var t = w;
      ku === null ? ku = [t] : ku.push(t);
    }
    function k() {
      var t = w;
      if (ku !== null && (_o++, ku[_o] !== t)) {
        var e = dt(jt);
        if (!Ab.has(e) && (Ab.add(e), ku !== null)) {
          for (var a = "", i = 0; i <= _o; i++) {
            var o = ku[i], f = i === _o ? t : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            e,
            a
          );
        }
      }
    }
    function ii(t) {
      t == null || bl(t) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        w,
        typeof t
      );
    }
    function Br() {
      var t = dt(jt);
      _b.has(t) || (_b.add(t), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        t
      ));
    }
    function cl() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function ly(t, e) {
      if (Pp) return !1;
      if (e === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          w
        ), !1;
      t.length !== e.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        w,
        "[" + e.join(", ") + "]",
        "[" + t.join(", ") + "]"
      );
      for (var a = 0; a < e.length && a < t.length; a++)
        if (!cn(t[a], e[a])) return !1;
      return !0;
    }
    function ay(t, e, a, i, o, f) {
      Ao = f, jt = e, ku = t !== null ? t._debugHookTypes : null, _o = -1, Pp = t !== null && t.type !== e.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = dt(jt), V1.has(f) || (V1.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), e.memoizedState = null, e.updateQueue = null, e.lanes = 0, G.H = t !== null && t.memoizedState !== null ? J1 : ku !== null ? zb : Z1, Ls = f = (e.mode & xa) !== Ht;
      var d = Y1(a, i, o);
      if (Ls = !1, rm && (d = jr(
        e,
        a,
        i,
        o
      )), f) {
        ht(!0);
        try {
          d = jr(
            e,
            a,
            i,
            o
          );
        } finally {
          ht(!1);
        }
      }
      return dl(t, e), d;
    }
    function dl(t, e) {
      e._debugHookTypes = ku, e.dependencies === null ? Oo !== null && (e.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: Oo
      }) : e.dependencies._debugThenableState = Oo, G.H = t0;
      var a = Ge !== null && Ge.next !== null;
      if (Ao = 0, ku = w = Ql = Ge = jt = null, _o = -1, t !== null && (t.flags & 65011712) !== (e.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), gv = !1, Ip = 0, Oo = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      t === null || Ll || (t = t.dependencies, t !== null && $o(t) && (Ll = !0)), kp ? (kp = !1, t = !0) : t = !1, t && (e = dt(e) || "Unknown", Ob.has(e) || V1.has(e) || (Ob.add(e), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function jr(t, e, a, i) {
      jt = t;
      var o = 0;
      do {
        if (rm && (Oo = null), Ip = 0, rm = !1, o >= PE)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Pp = !1, Ql = Ge = null, t.updateQueue != null) {
          var f = t.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        _o = -1, G.H = Db, f = Y1(e, a, i);
      } while (rm);
      return f;
    }
    function Yr() {
      var t = G.H, e = t.useState()[0];
      return e = typeof e.then == "function" ? Gr(e) : e, t = t.useState()[0], (Ge !== null ? Ge.memoizedState : null) !== t && (jt.flags |= 1024), e;
    }
    function Xc() {
      var t = vv !== 0;
      return vv = 0, t;
    }
    function qr(t, e, a) {
      e.updateQueue = t.updateQueue, e.flags = (e.mode & Ei) !== Ht ? e.flags & -402655237 : e.flags & -2053, t.lanes &= ~a;
    }
    function Vi(t) {
      if (gv) {
        for (t = t.memoizedState; t !== null; ) {
          var e = t.queue;
          e !== null && (e.pending = null), t = t.next;
        }
        gv = !1;
      }
      Ao = 0, ku = Ql = Ge = jt = null, _o = -1, w = null, rm = !1, Ip = vv = 0, Oo = null;
    }
    function vl() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Ql === null ? jt.memoizedState = Ql = t : Ql = Ql.next = t, Ql;
    }
    function Te() {
      if (Ge === null) {
        var t = jt.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = Ge.next;
      var e = Ql === null ? jt.memoizedState : Ql.next;
      if (e !== null)
        Ql = e, Ge = t;
      else {
        if (t === null)
          throw jt.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        Ge = t, t = {
          memoizedState: Ge.memoizedState,
          baseState: Ge.baseState,
          baseQueue: Ge.baseQueue,
          queue: Ge.queue,
          next: null
        }, Ql === null ? jt.memoizedState = Ql = t : Ql = Ql.next = t;
      }
      return Ql;
    }
    function wr() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Gr(t) {
      var e = Ip;
      return Ip += 1, Oo === null && (Oo = Md()), t = Ja(Oo, t, e), e = jt, (Ql === null ? e.memoizedState : Ql.next) === null && (e = e.alternate, G.H = e !== null && e.memoizedState !== null ? J1 : Z1), t;
    }
    function ci(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return Gr(t);
        if (t.$$typeof === In) return ve(t);
      }
      throw Error("An unsupported type was passed to use(): " + String(t));
    }
    function $a(t) {
      var e = null, a = jt.updateQueue;
      if (a !== null && (e = a.memoCache), e == null) {
        var i = jt.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (e = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (e == null && (e = { data: [], index: 0 }), a === null && (a = wr(), jt.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0 || Pp)
        for (a = e.data[e.index] = Array(t), i = 0; i < t; i++)
          a[i] = r1;
      else
        a.length !== t && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          t
        );
      return e.index++, a;
    }
    function ka(t, e) {
      return typeof e == "function" ? e(t) : e;
    }
    function tf(t, e, a) {
      var i = vl();
      if (a !== void 0) {
        var o = a(e);
        if (Ls) {
          ht(!0);
          try {
            a(e);
          } finally {
            ht(!1);
          }
        }
      } else o = e;
      return i.memoizedState = i.baseState = o, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: o
      }, i.queue = t, t = t.dispatch = u1.bind(
        null,
        jt,
        t
      ), [i.memoizedState, t];
    }
    function Qc(t) {
      var e = Te();
      return Zi(e, Ge, t);
    }
    function Zi(t, e, a) {
      var i = t.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = t.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        e.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), e.baseQueue = o = f, i.pending = null;
      }
      if (f = t.baseState, o === null) t.memoizedState = f;
      else {
        e = o.next;
        var h = d = null, y = null, p = e, _ = !1;
        do {
          var M = p.lane & -536870913;
          if (M !== p.lane ? (Pt & M) === M : (Ao & M) === M) {
            var E = p.revertLane;
            if (E === 0)
              y !== null && (y = y.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }), M === qs && (_ = !0);
            else if ((Ao & E) === E) {
              p = p.next, E === qs && (_ = !0);
              continue;
            } else
              M = {
                lane: 0,
                revertLane: p.revertLane,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }, y === null ? (h = y = M, d = f) : y = y.next = M, jt.lanes |= E, lr |= E;
            M = p.action, Ls && a(f, M), f = p.hasEagerState ? p.eagerState : a(f, M);
          } else
            E = {
              lane: M,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = E, d = f) : y = y.next = E, jt.lanes |= M, lr |= M;
          p = p.next;
        } while (p !== null && p !== e);
        if (y === null ? d = f : y.next = h, !cn(f, t.memoizedState) && (Ll = !0, _ && (a = nm, a !== null)))
          throw a;
        t.memoizedState = f, t.baseState = d, t.baseQueue = y, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [t.memoizedState, i.dispatch];
    }
    function Lc(t) {
      var e = Te(), a = e.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = t;
      var i = a.dispatch, o = a.pending, f = e.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = t(f, d.action), d = d.next;
        while (d !== o);
        cn(f, e.memoizedState) || (Ll = !0), e.memoizedState = f, e.baseQueue === null && (e.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function ef(t, e, a) {
      var i = jt, o = vl();
      if (ce) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        fm || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), fm = !0);
      } else {
        if (f = e(), fm || (a = e(), cn(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), fm = !0)), Xe === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (Pt & 127) !== 0 || ny(i, e, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: e }, o.queue = a, Jc(
        Ji.bind(null, i, a, t),
        [t]
      ), i.flags |= 2048, Eu(
        $u | rn,
        { destroy: void 0 },
        uy.bind(
          null,
          i,
          a,
          f,
          e
        ),
        null
      ), f;
    }
    function Vc(t, e, a) {
      var i = jt, o = Te(), f = ce;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = e(), !fm) {
        var d = e();
        cn(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), fm = !0);
      }
      (d = !cn(
        (Ge || o).memoizedState,
        a
      )) && (o.memoizedState = a, Ll = !0), o = o.queue;
      var h = Ji.bind(null, i, o, t);
      if (_l(2048, rn, h, [t]), o.getSnapshot !== e || d || Ql !== null && Ql.memoizedState.tag & $u) {
        if (i.flags |= 2048, Eu(
          $u | rn,
          { destroy: void 0 },
          uy.bind(
            null,
            i,
            o,
            a,
            e
          ),
          null
        ), Xe === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (Ao & 127) !== 0 || ny(i, e, a);
      }
      return a;
    }
    function ny(t, e, a) {
      t.flags |= 16384, t = { getSnapshot: e, value: a }, e = jt.updateQueue, e === null ? (e = wr(), jt.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t));
    }
    function uy(t, e, a, i) {
      e.value = a, e.getSnapshot = i, Ki(e) && iy(t);
    }
    function Ji(t, e, a) {
      return a(function() {
        Ki(e) && (yu(2, "updateSyncExternalStore()", t), iy(t));
      });
    }
    function Ki(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
        var a = e();
        return !cn(t, a);
      } catch {
        return !0;
      }
    }
    function iy(t) {
      var e = ea(t, 2);
      e !== null && Nt(e, t, 2);
    }
    function Nd(t) {
      var e = vl();
      if (typeof t == "function") {
        var a = t;
        if (t = a(), Ls) {
          ht(!0);
          try {
            a();
          } finally {
            ht(!1);
          }
        }
      }
      return e.memoizedState = e.baseState = t, e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ka,
        lastRenderedState: t
      }, e;
    }
    function $i(t) {
      t = Nd(t);
      var e = t.queue, a = wd.bind(null, jt, e);
      return e.dispatch = a, [t.memoizedState, a];
    }
    function Zc(t) {
      var e = vl();
      e.memoizedState = e.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = a, e = Kr.bind(
        null,
        jt,
        !0,
        a
      ), a.dispatch = e, [t, e];
    }
    function Xr(t, e) {
      var a = Te();
      return lf(a, Ge, t, e);
    }
    function lf(t, e, a, i) {
      return t.baseState = a, Zi(
        t,
        Ge,
        typeof i == "function" ? i : ka
      );
    }
    function Qr(t, e) {
      var a = Te();
      return Ge !== null ? lf(a, Ge, t, e) : (a.baseState = t, [t, a.queue.dispatch]);
    }
    function J0(t, e, a, i, o) {
      if (jl(t))
        throw Error("Cannot update form state while rendering.");
      if (t = e.action, t !== null) {
        var f = {
          payload: o,
          action: t,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        G.T !== null ? a(!0) : f.isTransition = !1, i(f), a = e.pending, a === null ? (f.next = e.pending = f, ki(e, f)) : (f.next = a.next, e.pending = a.next = f);
      }
    }
    function ki(t, e) {
      var a = e.action, i = e.payload, o = t.state;
      if (e.isTransition) {
        var f = G.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), G.T = d;
        try {
          var h = a(o, i), y = G.S;
          y !== null && y(d, h), cy(t, e, h);
        } catch (p) {
          Lr(t, e, p);
        } finally {
          f !== null && d.types !== null && (f.types !== null && f.types !== d.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = d.types), G.T = f, f === null && d._updatedFibers && (t = d._updatedFibers.size, d._updatedFibers.clear(), 10 < t && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), cy(t, e, d);
        } catch (p) {
          Lr(t, e, p);
        }
    }
    function cy(t, e, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (G.asyncTransitions++, a.then(Kc, Kc), a.then(
        function(i) {
          oi(t, e, i);
        },
        function(i) {
          return Lr(t, e, i);
        }
      ), e.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : oi(t, e, a);
    }
    function oi(t, e, a) {
      e.status = "fulfilled", e.value = a, xd(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, ki(t, a)));
    }
    function Lr(t, e, a) {
      var i = t.pending;
      if (t.pending = null, i !== null) {
        i = i.next;
        do
          e.status = "rejected", e.reason = a, xd(e), e = e.next;
        while (e !== i);
      }
      t.action = null;
    }
    function xd(t) {
      t = t.listeners;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function fi(t, e) {
      return e;
    }
    function Wa(t, e) {
      if (ce) {
        var a = Xe.formState;
        if (a !== null) {
          t: {
            var i = jt;
            if (ce) {
              if (Ie) {
                e: {
                  for (var o = Ie, f = Zu; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break e;
                    }
                    if (o = ln(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break e;
                    }
                  }
                  f = o.data, o = f === yS || f === d2 ? o : null;
                }
                if (o) {
                  Ie = ln(
                    o.nextSibling
                  ), i = o.data === yS;
                  break t;
                }
              }
              pn(i);
            }
            i = !1;
          }
          i && (e = a[0]);
        }
      }
      return a = vl(), a.memoizedState = a.baseState = e, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fi,
        lastRenderedState: e
      }, a.queue = i, a = wd.bind(
        null,
        jt,
        i
      ), i.dispatch = a, i = Nd(!1), f = Kr.bind(
        null,
        jt,
        !1,
        i.queue
      ), i = vl(), o = {
        state: e,
        dispatch: null,
        action: t,
        pending: null
      }, i.queue = o, a = J0.bind(
        null,
        jt,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = t, [e, a, !1];
    }
    function Wi(t) {
      var e = Te();
      return Bd(e, Ge, t);
    }
    function Bd(t, e, a) {
      if (e = Zi(
        t,
        e,
        fi
      )[0], t = Qc(ka)[0], typeof e == "object" && e !== null && typeof e.then == "function")
        try {
          var i = Gr(e);
        } catch (d) {
          throw d === um ? hv : d;
        }
      else i = e;
      e = Te();
      var o = e.queue, f = o.dispatch;
      return a !== e.memoizedState && (jt.flags |= 2048, Eu(
        $u | rn,
        { destroy: void 0 },
        oy.bind(null, o, a),
        null
      )), [i, f, t];
    }
    function oy(t, e) {
      t.action = e;
    }
    function Fi(t) {
      var e = Te(), a = Ge;
      if (a !== null)
        return Bd(e, a, t);
      Te(), e = e.memoizedState, a = Te();
      var i = a.queue.dispatch;
      return a.memoizedState = t, [e, i, !1];
    }
    function Eu(t, e, a, i) {
      return t = { tag: t, create: a, deps: i, inst: e, next: null }, e = jt.updateQueue, e === null && (e = wr(), jt.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (i = a.next, a.next = t, t.next = i, e.lastEffect = t), t;
    }
    function jd(t) {
      var e = vl();
      return t = { current: t }, e.memoizedState = t;
    }
    function Ii(t, e, a, i) {
      var o = vl();
      jt.flags |= t, o.memoizedState = Eu(
        $u | e,
        { destroy: void 0 },
        a,
        i === void 0 ? null : i
      );
    }
    function _l(t, e, a, i) {
      var o = Te();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      Ge !== null && i !== null && ly(i, Ge.memoizedState.deps) ? o.memoizedState = Eu(e, f, a, i) : (jt.flags |= t, o.memoizedState = Eu(
        $u | e,
        f,
        a,
        i
      ));
    }
    function Jc(t, e) {
      (jt.mode & Ei) !== Ht ? Ii(276826112, rn, t, e) : Ii(8390656, rn, t, e);
    }
    function K0(t) {
      jt.flags |= 4;
      var e = jt.updateQueue;
      if (e === null)
        e = wr(), jt.updateQueue = e, e.events = [t];
      else {
        var a = e.events;
        a === null ? e.events = [t] : a.push(t);
      }
    }
    function Vr(t) {
      var e = vl(), a = { impl: t };
      return e.memoizedState = a, function() {
        if ((he & Il) !== oa)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return a.impl.apply(void 0, arguments);
      };
    }
    function af(t) {
      var e = Te().memoizedState;
      return K0({ ref: e, nextImpl: t }), function() {
        if ((he & Il) !== oa)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return e.impl.apply(void 0, arguments);
      };
    }
    function ya(t, e) {
      var a = 4194308;
      return (jt.mode & Ei) !== Ht && (a |= 134217728), Ii(a, au, t, e);
    }
    function Fa(t, e) {
      if (typeof e == "function") {
        t = t();
        var a = e(t);
        return function() {
          typeof a == "function" ? a() : e(null);
        };
      }
      if (e != null)
        return e.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(e).join(", ") + "}"
        ), t = t(), e.current = t, function() {
          e.current = null;
        };
    }
    function Tu(t, e, a) {
      typeof e != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        e !== null ? typeof e : "null"
      ), a = a != null ? a.concat([t]) : null;
      var i = 4194308;
      (jt.mode & Ei) !== Ht && (i |= 134217728), Ii(
        i,
        au,
        Fa.bind(null, e, t),
        a
      );
    }
    function nf(t, e, a) {
      typeof e != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        e !== null ? typeof e : "null"
      ), a = a != null ? a.concat([t]) : null, _l(
        4,
        au,
        Fa.bind(null, e, t),
        a
      );
    }
    function Yd(t, e) {
      return vl().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    }
    function Ln(t, e) {
      var a = Te();
      e = e === void 0 ? null : e;
      var i = a.memoizedState;
      return e !== null && ly(e, i[1]) ? i[0] : (a.memoizedState = [t, e], t);
    }
    function pa(t, e) {
      var a = vl();
      e = e === void 0 ? null : e;
      var i = t();
      if (Ls) {
        ht(!0);
        try {
          t();
        } finally {
          ht(!1);
        }
      }
      return a.memoizedState = [i, e], i;
    }
    function $e(t, e) {
      var a = Te();
      e = e === void 0 ? null : e;
      var i = a.memoizedState;
      if (e !== null && ly(e, i[1]))
        return i[0];
      if (i = t(), Ls) {
        ht(!0);
        try {
          t();
        } finally {
          ht(!1);
        }
      }
      return a.memoizedState = [i, e], i;
    }
    function uf(t, e) {
      var a = vl();
      return Ae(a, t, e);
    }
    function Au(t, e) {
      var a = Te();
      return hl(
        a,
        Ge.memoizedState,
        t,
        e
      );
    }
    function Qt(t, e) {
      var a = Te();
      return Ge === null ? Ae(a, t, e) : hl(
        a,
        Ge.memoizedState,
        t,
        e
      );
    }
    function Ae(t, e, a) {
      return a === void 0 || (Ao & 1073741824) !== 0 && (Pt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a, t = mf(), jt.lanes |= t, lr |= t, a);
    }
    function hl(t, e, a, i) {
      return cn(a, e) ? a : cm.current !== null ? (t = Ae(t, a, i), cn(t, e) || (Ll = !0), t) : (Ao & 42) === 0 || (Ao & 1073741824) !== 0 && (Pt & 261930) === 0 ? (Ll = !0, t.memoizedState = a) : (t = mf(), jt.lanes |= t, lr |= t, e);
    }
    function Kc() {
      G.asyncTransitions--;
    }
    function $c(t, e, a, i, o) {
      var f = be.p;
      be.p = f !== 0 && f < Wl ? f : Wl;
      var d = G.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), G.T = h, Kr(t, !1, e, a);
      try {
        var y = o(), p = G.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          G.asyncTransitions++, y.then(Kc, Kc);
          var _ = Rd(
            y,
            i
          );
          kc(
            t,
            e,
            _,
            aa(t)
          );
        } else
          kc(
            t,
            e,
            i,
            aa(t)
          );
      } catch (M) {
        kc(
          t,
          e,
          { then: function() {
          }, status: "rejected", reason: M },
          aa(t)
        );
      } finally {
        be.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), G.T = d, d === null && h._updatedFibers && (t = h._updatedFibers.size, h._updatedFibers.clear(), 10 < t && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function ri(t, e, a, i) {
      if (t.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = Zr(t).queue;
      V0(t), $c(
        t,
        o,
        e,
        td,
        a === null ? W : function() {
          return cf(t), a(i);
        }
      );
    }
    function Zr(t) {
      var e = t.memoizedState;
      if (e !== null) return e;
      e = {
        memoizedState: td,
        baseState: td,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ka,
          lastRenderedState: td
        },
        next: null
      };
      var a = {};
      return e.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ka,
          lastRenderedState: a
        },
        next: null
      }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
    }
    function cf(t) {
      G.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var e = Zr(t);
      e.next === null && (e = t.alternate.memoizedState), kc(
        t,
        e.next.queue,
        {},
        aa(t)
      );
    }
    function Pi() {
      var t = Nd(!1);
      return t = $c.bind(
        null,
        jt,
        t.queue,
        !0,
        !1
      ), vl().memoizedState = t, [!1, t];
    }
    function $0() {
      var t = Qc(ka)[0], e = Te().memoizedState;
      return [
        typeof t == "boolean" ? t : Gr(t),
        e
      ];
    }
    function el() {
      var t = Lc(ka)[0], e = Te().memoizedState;
      return [
        typeof t == "boolean" ? t : Gr(t),
        e
      ];
    }
    function si() {
      return ve(y0);
    }
    function Jr() {
      var t = vl(), e = Xe.identifierPrefix;
      if (ce) {
        var a = vo, i = go;
        a = (i & ~(1 << 32 - kl(i) - 1)).toString(32) + a, e = "_" + e + "R_" + a, a = vv++, 0 < a && (e += "H" + a.toString(32)), e += "_";
      } else
        a = IE++, e = "_" + e + "r_" + a.toString(32) + "_";
      return t.memoizedState = e;
    }
    function qd() {
      return vl().memoizedState = k0.bind(
        null,
        jt
      );
    }
    function k0(t, e) {
      for (var a = t.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = aa(a), o = Ol(i), f = vu(a, o, i);
            f !== null && (yu(i, "refresh()", t), Nt(f, a, i), En(f, a, i)), t = zd(), e != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: t };
            return;
        }
        a = a.return;
      }
    }
    function u1(t, e, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = aa(t);
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      jl(t) ? ol(e, o) : (o = Cc(t, e, o, i), o !== null && (yu(i, "dispatch()", t), Nt(o, t, i), $r(o, e, i)));
    }
    function wd(t, e, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = aa(t), kc(t, e, a, i) && yu(i, "setState()", t);
    }
    function kc(t, e, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (jl(t)) ol(e, o);
      else {
        var f = t.alternate;
        if (t.lanes === 0 && (f === null || f.lanes === 0) && (f = e.lastRenderedReducer, f !== null)) {
          var d = G.H;
          G.H = Ai;
          try {
            var h = e.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, cn(y, h))
              return Zo(t, e, o, 0), Xe === null && bd(), !1;
          } catch {
          } finally {
            G.H = d;
          }
        }
        if (a = Cc(t, e, o, i), a !== null)
          return Nt(a, t, i), $r(a, e, i), !0;
      }
      return !1;
    }
    function Kr(t, e, a, i) {
      if (G.T === null && qs === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: ky(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, jl(t)) {
        if (e)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        e = Cc(
          t,
          a,
          i,
          2
        ), e !== null && (yu(2, "setOptimistic()", t), Nt(e, t, 2));
    }
    function jl(t) {
      var e = t.alternate;
      return t === jt || e !== null && e === jt;
    }
    function ol(t, e) {
      rm = gv = !0;
      var a = t.pending;
      a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e;
    }
    function $r(t, e, a) {
      if ((a & 4194048) !== 0) {
        var i = e.lanes;
        i &= t.pendingLanes, a |= i, e.lanes = a, yr(t, a);
      }
    }
    function Wc(t) {
      if (t !== null && typeof t != "function") {
        var e = String(t);
        qb.has(e) || (qb.add(e), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          t
        ));
      }
    }
    function of(t, e, a, i) {
      var o = t.memoizedState, f = a(i, o);
      if (t.mode & xa) {
        ht(!0);
        try {
          f = a(i, o);
        } finally {
          ht(!1);
        }
      }
      f === void 0 && (e = Jt(e) || "Component", xb.has(e) || (xb.add(e), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        e
      ))), o = f == null ? o : Wt({}, o, f), t.memoizedState = o, t.lanes === 0 && (t.updateQueue.baseState = o);
    }
    function Gd(t, e, a, i, o, f, d) {
      var h = t.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), t.mode & xa) {
          ht(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            ht(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Jt(e) || "Component"
        ), a;
      }
      return e.prototype && e.prototype.isPureReactComponent ? !Vo(a, i) || !Vo(o, f) : !0;
    }
    function Ou(t, e, a, i) {
      var o = e.state;
      typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, i), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, i), e.state !== o && (t = dt(t) || "Component", Mb.has(t) || (Mb.add(t), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        t
      )), K1.enqueueReplaceState(
        e,
        e.state,
        null
      ));
    }
    function _u(t, e) {
      var a = e;
      if ("ref" in e) {
        a = {};
        for (var i in e)
          i !== "ref" && (a[i] = e[i]);
      }
      if (t = t.defaultProps) {
        a === e && (a = Wt({}, a));
        for (var o in t)
          a[o] === void 0 && (a[o] = t[o]);
      }
      return a;
    }
    function Xd(t) {
      O1(t), console.warn(
        `%s

%s
`,
        sm ? "An error occurred in the <" + sm + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Qd(t) {
      var e = sm ? "The above error occurred in the <" + sm + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + (($1 || "Anonymous") + ".");
      if (typeof t == "object" && t !== null && typeof t.environmentName == "string") {
        var i = t.environmentName;
        t = [
          `%o

%s

%s
`,
          t,
          e,
          a
        ].slice(0), typeof t[0] == "string" ? t.splice(
          0,
          1,
          b2 + " " + t[0],
          E2,
          Lv + i + Lv,
          T2
        ) : t.splice(
          0,
          0,
          b2,
          E2,
          Lv + i + Lv,
          T2
        ), t.unshift(console), i = ST.apply(console.error, t), i();
      } else
        console.error(
          `%o

%s

%s
`,
          t,
          e,
          a
        );
    }
    function fy(t) {
      O1(t);
    }
    function kr(t, e) {
      try {
        sm = e.source ? dt(e.source) : null, $1 = null;
        var a = e.value;
        if (G.actQueue !== null)
          G.thrownErrors.push(a);
        else {
          var i = t.onUncaughtError;
          i(a, { componentStack: e.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function ry(t, e, a) {
      try {
        sm = a.source ? dt(a.source) : null, $1 = dt(e);
        var i = t.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: e.tag === 1 ? e.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Ld(t, e, a) {
      return a = Ol(a), a.tag = X1, a.payload = { element: null }, a.callback = function() {
        ft(e.source, kr, t, e);
      }, a;
    }
    function Vd(t) {
      return t = Ol(t), t.tag = X1, t;
    }
    function Zd(t, e, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        t.payload = function() {
          return o(f);
        }, t.callback = function() {
          Uc(a), ft(
            i.source,
            ry,
            e,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (t.callback = function() {
        Uc(a), ft(
          i.source,
          ry,
          e,
          a,
          i
        ), typeof o != "function" && (nr === null ? nr = /* @__PURE__ */ new Set([this]) : nr.add(this)), $E(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          dt(a) || "Unknown"
        );
      });
    }
    function sy(t, e, a, i, o) {
      if (a.flags |= 32768, qu && Sf(t, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (e = a.alternate, e !== null && qn(
          e,
          a,
          o,
          !0
        ), ce && (yc = !0), a = lu.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return Ku === null ? pf() : a.alternate === null && rl === Do && (rl = Ev), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === mv ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : e.add(i), sh(t, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === mv ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), sh(t, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return sh(t, i, o), pf(), !1;
      }
      if (ce)
        return yc = !0, e = lu.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = o, i !== C1 && Rr(
          ra(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== C1 && Rr(
          ra(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), t = t.current.alternate, t.flags |= 65536, o &= -o, t.lanes |= o, i = ra(i, a), o = Ld(
          t.stateNode,
          i,
          o
        ), xr(t, o), rl !== tr && (rl = Vs)), !1;
      var f = ra(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (i0 === null ? i0 = [f] : i0.push(f), rl !== tr && (rl = Vs), e === null) return !0;
      i = ra(i, a), a = e;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, t = o & -o, a.lanes |= t, t = Ld(
              a.stateNode,
              i,
              t
            ), xr(a, t), !1;
          case 1:
            if (e = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (nr === null || !nr.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Vd(o), Zd(
                o,
                t,
                a,
                i
              ), xr(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function Yl(t, e, a, i) {
      e.child = t === null ? vb(e, null, a, i) : Qs(
        e,
        t.child,
        a,
        i
      );
    }
    function W0(t, e, a, i, o) {
      a = a.render;
      var f = e.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return Qi(e), i = ay(
        t,
        e,
        a,
        d,
        f,
        o
      ), h = Xc(), t !== null && !Ll ? (qr(t, e, o), Vn(t, e, o)) : (ce && h && Ad(e), e.flags |= 1, Yl(t, e, i, o), e.child);
    }
    function dy(t, e, a, i, o) {
      if (t === null) {
        var f = a.type;
        return typeof f == "function" && !Vm(f) && f.defaultProps === void 0 && a.compare === null ? (a = Yi(f), e.tag = 15, e.type = a, ff(e, f), hy(
          t,
          e,
          a,
          i,
          o
        )) : (t = Hc(
          a.type,
          null,
          i,
          e,
          e.mode,
          o
        ), t.ref = e.ref, t.return = e, e.child = t);
      }
      if (f = t.child, !Wd(t, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Vo, a(d, i) && t.ref === e.ref)
          return Vn(
            t,
            e,
            o
          );
      }
      return e.flags |= 1, t = mu(f, i), t.ref = e.ref, t.return = e, e.child = t;
    }
    function hy(t, e, a, i, o) {
      if (t !== null) {
        var f = t.memoizedProps;
        if (Vo(f, i) && t.ref === e.ref && e.type === t.type)
          if (Ll = !1, e.pendingProps = i = f, Wd(t, o))
            (t.flags & 131072) !== 0 && (Ll = !0);
          else
            return e.lanes = t.lanes, Vn(t, e, o);
      }
      return gy(
        t,
        e,
        a,
        i,
        o
      );
    }
    function my(t, e, a, i) {
      var o = i.children, f = t !== null ? t.memoizedState : null;
      if (t === null && e.stateNode === null && (e.stateNode = {
        _visibility: Bp,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), i.mode === "hidden") {
        if ((e.flags & 128) !== 0) {
          if (f = f !== null ? f.baseLanes | a : a, t !== null) {
            for (i = e.child = t.child, o = 0; i !== null; )
              o = o | i.lanes | i.childLanes, i = i.sibling;
            i = o & ~f;
          } else i = 0, e.child = null;
          return yy(
            t,
            e,
            f,
            a,
            i
          );
        }
        if ((a & 536870912) !== 0)
          e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Wo(
            e,
            f !== null ? f.cachePool : null
          ), f !== null ? Ud(e, f) : ui(e), Hd(e);
        else
          return i = e.lanes = 536870912, yy(
            t,
            e,
            f !== null ? f.baseLanes | a : a,
            a,
            i
          );
      } else
        f !== null ? (Wo(e, f.cachePool), Ud(e, f), bu(e), e.memoizedState = null) : (t !== null && Wo(e, null), ui(e), bu(e));
      return Yl(t, e, o, a), e.child;
    }
    function Fc(t, e) {
      return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
        _visibility: Bp,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), e.sibling;
    }
    function yy(t, e, a, i, o) {
      var f = ni();
      return f = f === null ? null : {
        parent: Gl._currentValue,
        pool: f
      }, e.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, t !== null && Wo(e, null), ui(e), Hd(e), t !== null && qn(t, e, i, !0), e.childLanes = o, null;
    }
    function Wr(t, e) {
      var a = e.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), e = Ir(
        { mode: e.mode, children: e.children },
        t.mode
      ), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function py(t, e, a) {
      return Qs(e, t.child, null, a), t = Wr(
        e,
        e.pendingProps
      ), t.flags |= 2, Bl(e), e.memoizedState = null, t;
    }
    function F0(t, e, a) {
      var i = e.pendingProps, o = (e.flags & 128) !== 0;
      if (e.flags &= -129, t === null) {
        if (ce) {
          if (i.mode === "hidden")
            return t = Wr(e, i), e.lanes = 536870912, Fc(null, t);
          if (Qn(e), (t = Ie) ? (a = _e(
            t,
            Zu
          ), a = a !== null && a.data === Ws ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: X0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, e.memoizedState = i, i = Jm(a), i.return = e, e.child = i, _a = e, Ie = null)) : a = null, a === null)
            throw la(e, t), pn(e);
          return e.lanes = 536870912, null;
        }
        return Wr(e, i);
      }
      var f = t.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (Qn(e), o)
          if (e.flags & 256)
            e.flags &= -257, e = py(
              t,
              e,
              a
            );
          else if (e.memoizedState !== null)
            e.child = t.child, e.flags |= 128, e = null;
          else
            throw Error(
              "Client rendering an Activity suspended it again. This is a bug in React."
            );
        else if (L0(), (a & 536870912) !== 0 && yf(e), Ll || qn(
          t,
          e,
          a,
          !1
        ), o = (a & t.childLanes) !== 0, Ll || o) {
          if (i = Xe, i !== null && (d = Ec(
            i,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, ea(t, d), Nt(i, t, d), k1;
          pf(), e = py(
            t,
            e,
            a
          );
        } else
          t = f.treeContext, Ie = ln(
            d.nextSibling
          ), _a = e, ce = !0, $f = null, yc = !1, eu = null, Zu = !1, t !== null && Q0(e, t), e = Wr(e, i), e.flags |= 4096;
        return e;
      }
      return f = t.child, i = { mode: i.mode, children: i.children }, (a & 536870912) !== 0 && (a & t.lanes) !== 0 && yf(e), t = mu(f, i), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Fr(t, e) {
      var a = e.ref;
      if (a === null)
        t !== null && t.ref !== null && (e.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (t === null || t.ref !== a) && (e.flags |= 4194816);
      }
    }
    function gy(t, e, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = Jt(a) || "Unknown";
        wb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), wb[f] = !0);
      }
      return e.mode & xa && Ti.recordLegacyContextWarning(
        e,
        null
      ), t === null && (ff(e, e.type), a.contextTypes && (f = Jt(a) || "Unknown", Xb[f] || (Xb[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Qi(e), a = ay(
        t,
        e,
        a,
        i,
        void 0,
        o
      ), i = Xc(), t !== null && !Ll ? (qr(t, e, o), Vn(t, e, o)) : (ce && i && Ad(e), e.flags |= 1, Yl(t, e, a, o), e.child);
    }
    function vy(t, e, a, i, o, f) {
      return Qi(e), _o = -1, Pp = t !== null && t.type !== e.type, e.updateQueue = null, a = jr(
        e,
        i,
        a,
        o
      ), dl(t, e), i = Xc(), t !== null && !Ll ? (qr(t, e, f), Vn(t, e, f)) : (ce && i && Ad(e), e.flags |= 1, Yl(t, e, a, f), e.child);
    }
    function Ic(t, e, a, i, o) {
      switch (Lt(e)) {
        case !1:
          var f = e.stateNode, d = new e.type(
            e.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          e.flags |= 128, e.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (e.lanes |= h, d = Xe, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Vd(h), Zd(
            h,
            d,
            e,
            ra(f, e)
          ), xr(e, h);
      }
      if (Qi(e), e.stateNode === null) {
        if (d = Kf, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== In) && !Yb.has(a) && (Yb.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === Nh ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Jt(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = ve(f)), f = new a(i, d), e.mode & xa) {
          ht(!0);
          try {
            f = new a(i, d);
          } finally {
            ht(!1);
          }
        }
        if (d = e.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = K1, e.stateNode = f, f._reactInternals = e, f._reactInternalInstance = Rb, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Jt(a) || "Component", Cb.has(d) || (Cb.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = Jt(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Hb.has(f) || (Hb.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              p,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              y !== null ? `
  ` + y : ""
            ));
          }
        }
        f = e.stateNode, d = Jt(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !jb.has(a) && (jb.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !Bb.has(a) && (Bb.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Jt(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || Ub.has(a) || (Ub.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Jt(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || bl(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = e.stateNode, f.props = i, f.state = e.memoizedState, f.refs = {}, ue(e), d = a.contextType, f.context = typeof d == "object" && d !== null ? ve(d) : Kf, f.state === i && (d = Jt(a) || "Component", Nb.has(d) || (Nb.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), e.mode & xa && Ti.recordLegacyContextWarning(
          e,
          f
        ), Ti.recordUnsafeLifecycleWarnings(
          e,
          f
        ), f.state = e.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (of(
          e,
          a,
          d,
          i
        ), f.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          dt(e) || "Component"
        ), K1.enqueueReplaceState(
          f,
          f.state,
          null
        )), Su(e, i, f, o), Io(), f.state = e.memoizedState), typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & Ei) !== Ht && (e.flags |= 134217728), f = !0;
      } else if (t === null) {
        f = e.stateNode;
        var _ = e.memoizedProps;
        h = _u(a, _), f.props = h;
        var M = f.context;
        y = a.contextType, d = Kf, typeof y == "object" && y !== null && (d = ve(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", _ = e.pendingProps !== _, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (_ || M !== d) && Ou(
          e,
          f,
          i,
          d
        ), Pf = !1;
        var E = e.memoizedState;
        f.state = E, Su(e, i, f, o), Io(), M = e.memoizedState, _ || E !== M || Pf ? (typeof p == "function" && (of(
          e,
          a,
          p,
          i
        ), M = e.memoizedState), (h = Pf || Gd(
          e,
          a,
          h,
          i,
          E,
          M,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & Ei) !== Ht && (e.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & Ei) !== Ht && (e.flags |= 134217728), e.memoizedProps = i, e.memoizedState = M), f.props = i, f.state = M, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & Ei) !== Ht && (e.flags |= 134217728), f = !1);
      } else {
        f = e.stateNode, gu(t, e), d = e.memoizedProps, y = _u(a, d), f.props = y, p = e.pendingProps, E = f.context, M = a.contextType, h = Kf, typeof M == "object" && M !== null && (h = ve(M)), _ = a.getDerivedStateFromProps, (M = typeof _ == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || E !== h) && Ou(
          e,
          f,
          i,
          h
        ), Pf = !1, E = e.memoizedState, f.state = E, Su(e, i, f, o), Io();
        var q = e.memoizedState;
        d !== p || E !== q || Pf || t !== null && t.dependencies !== null && $o(t.dependencies) ? (typeof _ == "function" && (of(
          e,
          a,
          _,
          i
        ), q = e.memoizedState), (y = Pf || Gd(
          e,
          a,
          y,
          i,
          E,
          q,
          h
        ) || t !== null && t.dependencies !== null && $o(t.dependencies)) ? (M || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, q, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          q,
          h
        )), typeof f.componentDidUpdate == "function" && (e.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === t.memoizedProps && E === t.memoizedState || (e.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && E === t.memoizedState || (e.flags |= 1024), e.memoizedProps = i, e.memoizedState = q), f.props = i, f.state = q, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === t.memoizedProps && E === t.memoizedState || (e.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && E === t.memoizedState || (e.flags |= 1024), f = !1);
      }
      if (h = f, Fr(t, e), d = (e.flags & 128) !== 0, h || d) {
        if (h = e.stateNode, Ri(e), d && typeof a.getDerivedStateFromError != "function")
          a = null, on = -1;
        else if (a = nb(h), e.mode & xa) {
          ht(!0);
          try {
            nb(h);
          } finally {
            ht(!1);
          }
        }
        e.flags |= 1, t !== null && d ? (e.child = Qs(
          e,
          t.child,
          null,
          o
        ), e.child = Qs(
          e,
          null,
          a,
          o
        )) : Yl(t, e, a, o), e.memoizedState = h.state, t = e.child;
      } else
        t = Vn(
          t,
          e,
          o
        );
      return o = e.stateNode, f && o.props !== i && (dm || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        dt(e) || "a component"
      ), dm = !0), t;
    }
    function Sy(t, e, a, i) {
      return Gi(), e.flags |= 256, Yl(t, e, a, i), e.child;
    }
    function ff(t, e) {
      e && e.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        e.displayName || e.name || "Component"
      ), typeof e.getDerivedStateFromProps == "function" && (t = Jt(e) || "Unknown", Qb[t] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        t
      ), Qb[t] = !0)), typeof e.contextType == "object" && e.contextType !== null && (e = Jt(e) || "Unknown", Gb[e] || (console.error(
        "%s: Function components do not support contextType.",
        e
      ), Gb[e] = !0));
    }
    function rf(t) {
      return { baseLanes: t, cachePool: Im() };
    }
    function Jd(t, e, a) {
      return t = t !== null ? t.childLanes & ~a : 0, e && (t |= Mn), t;
    }
    function Kd(t, e, a) {
      var i, o = e.pendingProps;
      zt(e) && (e.flags |= 128);
      var f = !1, d = (e.flags & 128) !== 0;
      if ((i = d) || (i = t !== null && t.memoizedState === null ? !1 : (Ml.current & Fp) !== 0), i && (f = !0, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
        if (ce) {
          if (f ? ma(e) : bu(e), (t = Ie) ? (a = _e(
            t,
            Zu
          ), a = a !== null && a.data !== Ws ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: X0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, e.memoizedState = i, i = Jm(a), i.return = e, e.child = i, _a = e, Ie = null)) : a = null, a === null)
            throw la(e, t), pn(e);
          return Iy(a) ? e.lanes = 32 : e.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          bu(e);
          var y = e.mode;
          return h = Ir(
            { mode: "hidden", children: h },
            y
          ), o = Nc(
            o,
            y,
            a,
            null
          ), h.return = e, o.return = e, h.sibling = o, e.child = h, o = e.child, o.memoizedState = rf(a), o.childLanes = Jd(
            t,
            i,
            a
          ), e.memoizedState = W1, Fc(
            null,
            o
          );
        }
        return ma(e), by(
          e,
          h
        );
      }
      var p = t.memoizedState;
      if (p !== null) {
        var _ = p.dehydrated;
        if (_ !== null) {
          if (d)
            e.flags & 256 ? (ma(e), e.flags &= -257, e = $d(
              t,
              e,
              a
            )) : e.memoizedState !== null ? (bu(e), e.child = t.child, e.flags |= 128, e = null) : (bu(e), h = o.fallback, y = e.mode, o = Ir(
              {
                mode: "visible",
                children: o.children
              },
              y
            ), h = Nc(
              h,
              y,
              a,
              null
            ), h.flags |= 2, o.return = e, h.return = e, o.sibling = h, e.child = o, Qs(
              e,
              t.child,
              null,
              a
            ), o = e.child, o.memoizedState = rf(a), o.childLanes = Jd(
              t,
              i,
              a
            ), e.memoizedState = W1, e = Fc(
              null,
              o
            ));
          else if (ma(e), L0(), (a & 536870912) !== 0 && yf(e), Iy(
            _
          )) {
            if (i = _.nextSibling && _.nextSibling.dataset, i) {
              h = i.dgst;
              var M = i.msg;
              y = i.stck;
              var E = i.cstck;
            }
            f = M, i = h, o = y, _ = E, h = f, y = _, h = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), h.stack = o || "", h.digest = i, i = y === void 0 ? null : y, o = {
              value: h,
              source: null,
              stack: i
            }, typeof i == "string" && M1.set(
              h,
              o
            ), Rr(o), e = $d(
              t,
              e,
              a
            );
          } else if (Ll || qn(
            t,
            e,
            a,
            !1
          ), i = (a & t.childLanes) !== 0, Ll || i) {
            if (i = Xe, i !== null && (o = Ec(
              i,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, ea(
                t,
                o
              ), Nt(
                i,
                t,
                o
              ), k1;
            ps(
              _
            ) || pf(), e = $d(
              t,
              e,
              a
            );
          } else
            ps(
              _
            ) ? (e.flags |= 192, e.child = t.child, e = null) : (t = p.treeContext, Ie = ln(
              _.nextSibling
            ), _a = e, ce = !0, $f = null, yc = !1, eu = null, Zu = !1, t !== null && Q0(e, t), e = by(
              e,
              o.children
            ), e.flags |= 4096);
          return e;
        }
      }
      return f ? (bu(e), h = o.fallback, y = e.mode, E = t.child, _ = E.sibling, o = mu(
        E,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = E.subtreeFlags & 65011712, _ !== null ? h = mu(
        _,
        h
      ) : (h = Nc(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = e, o.return = e, o.sibling = h, e.child = o, Fc(null, o), o = e.child, h = t.child.memoizedState, h === null ? h = rf(a) : (y = h.cachePool, y !== null ? (E = Gl._currentValue, y = y.parent !== E ? { parent: E, pool: E } : y) : y = Im(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = Jd(
        t,
        i,
        a
      ), e.memoizedState = W1, Fc(
        t.child,
        o
      )) : (p !== null && (a & 62914560) === a && (a & t.lanes) !== 0 && yf(e), ma(e), a = t.child, t = a.sibling, a = mu(a, {
        mode: "visible",
        children: o.children
      }), a.return = e, a.sibling = null, t !== null && (i = e.deletions, i === null ? (e.deletions = [t], e.flags |= 16) : i.push(t)), e.child = a, e.memoizedState = null, a);
    }
    function by(t, e) {
      return e = Ir(
        { mode: "visible", children: e },
        t.mode
      ), e.return = t, t.child = e;
    }
    function Ir(t, e) {
      return t = N(22, t, null, e), t.lanes = 0, t;
    }
    function $d(t, e, a) {
      return Qs(e, t.child, null, a), t = by(
        e,
        e.pendingProps.children
      ), t.flags |= 2, e.memoizedState = null, t;
    }
    function Ey(t, e, a) {
      t.lanes |= e;
      var i = t.alternate;
      i !== null && (i.lanes |= e), _d(
        t.return,
        e,
        a
      );
    }
    function kd(t, e, a, i, o, f) {
      var d = t.memoizedState;
      d === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o,
        treeForkCount: f
      } : (d.isBackwards = e, d.rendering = null, d.renderingStartTime = 0, d.last = i, d.tail = a, d.tailMode = o, d.treeForkCount = f);
    }
    function Ty(t, e, a) {
      var i = e.pendingProps, o = i.revealOrder, f = i.tail, d = i.children, h = Ml.current;
      if ((i = (h & Fp) !== 0) ? (h = h & om | Fp, e.flags |= 128) : h &= om, qt(Ml, h, e), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !Lb[h])
        if (Lb[h] = !0, o == null)
          console.error(
            'The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".'
          );
        else if (o === "backwards")
          console.error(
            'The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.'
          );
        else if (typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
            case "independent":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
            o
          );
      h = f ?? "null", bv[h] || (f == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (bv[h] = !0, console.error(
        'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".'
      )) : f !== "visible" && f !== "collapsed" && f !== "hidden" ? (bv[h] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (bv[h] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      t: if ((o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && d !== void 0 && d !== null && d !== !1)
        if (bl(d)) {
          for (h = 0; h < d.length; h++)
            if (!Ye(
              d[h],
              h
            ))
              break t;
        } else if (h = Rt(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!Ye(y.value, p)) break t;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (Yl(t, e, d, a), ce ? (wi(), d = jp) : d = 0, !i && t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && Ey(t, a, e);
          else if (t.tag === 19)
            Ey(t, a, e);
          else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
              break t;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      switch (o) {
        case "forwards":
          for (a = e.child, o = null; a !== null; )
            t = a.alternate, t !== null && Gc(t) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = e.child, e.child = null) : (o = a.sibling, a.sibling = null), kd(
            e,
            !1,
            o,
            a,
            f,
            d
          );
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (a = null, o = e.child, e.child = null; o !== null; ) {
            if (t = o.alternate, t !== null && Gc(t) === null) {
              e.child = o;
              break;
            }
            t = o.sibling, o.sibling = a, a = o, o = t;
          }
          kd(
            e,
            !0,
            a,
            null,
            f,
            d
          );
          break;
        case "together":
          kd(
            e,
            !1,
            null,
            null,
            void 0,
            d
          );
          break;
        default:
          e.memoizedState = null;
      }
      return e.child;
    }
    function Vn(t, e, a) {
      if (t !== null && (e.dependencies = t.dependencies), on = -1, lr |= e.lanes, (a & e.childLanes) === 0)
        if (t !== null) {
          if (qn(
            t,
            e,
            a,
            !1
          ), (a & e.childLanes) === 0)
            return null;
        } else return null;
      if (t !== null && e.child !== t.child)
        throw Error("Resuming work not yet implemented.");
      if (e.child !== null) {
        for (t = e.child, a = mu(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; )
          t = t.sibling, a = a.sibling = mu(t, t.pendingProps), a.return = e;
        a.sibling = null;
      }
      return e.child;
    }
    function Wd(t, e) {
      return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && $o(t)));
    }
    function I0(t, e, a) {
      switch (e.tag) {
        case 3:
          je(
            e,
            e.stateNode.containerInfo
          ), gn(
            e,
            Gl,
            t.memoizedState.cache
          ), Gi();
          break;
        case 27:
        case 5:
          et(e);
          break;
        case 4:
          je(
            e,
            e.stateNode.containerInfo
          );
          break;
        case 10:
          gn(
            e,
            e.type,
            e.memoizedProps.value
          );
          break;
        case 12:
          (a & e.childLanes) !== 0 && (e.flags |= 4), e.flags |= 2048;
          var i = e.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 31:
          if (e.memoizedState !== null)
            return e.flags |= 128, Qn(e), null;
          break;
        case 13:
          if (i = e.memoizedState, i !== null)
            return i.dehydrated !== null ? (ma(e), e.flags |= 128, null) : (a & e.child.childLanes) !== 0 ? Kd(
              t,
              e,
              a
            ) : (ma(e), t = Vn(
              t,
              e,
              a
            ), t !== null ? t.sibling : null);
          ma(e);
          break;
        case 19:
          var o = (t.flags & 128) !== 0;
          if (i = (a & e.childLanes) !== 0, i || (qn(
            t,
            e,
            a,
            !1
          ), i = (a & e.childLanes) !== 0), o) {
            if (i)
              return Ty(
                t,
                e,
                a
              );
            e.flags |= 128;
          }
          if (o = e.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), qt(
            Ml,
            Ml.current,
            e
          ), i) break;
          return null;
        case 22:
          return e.lanes = 0, my(
            t,
            e,
            a,
            e.pendingProps
          );
        case 24:
          gn(
            e,
            Gl,
            t.memoizedState.cache
          );
      }
      return Vn(t, e, a);
    }
    function Pr(t, e, a) {
      if (e._debugNeedsRemount && t !== null) {
        a = Hc(
          e.type,
          e.key,
          e.pendingProps,
          e._debugOwner || null,
          e.mode,
          e.lanes
        ), a._debugStack = e._debugStack, a._debugTask = e._debugTask;
        var i = e.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (t.alternate = null, e.alternate = null, a.index = e.index, a.sibling = e.sibling, a.return = e.return, a.ref = e.ref, a._debugInfo = e._debugInfo, e === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== e; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return e = i.deletions, e === null ? (i.deletions = [t], i.flags |= 16) : e.push(t), a.flags |= 2, a;
      }
      if (t !== null)
        if (t.memoizedProps !== e.pendingProps || e.type !== t.type)
          Ll = !0;
        else {
          if (!Wd(t, a) && (e.flags & 128) === 0)
            return Ll = !1, I0(
              t,
              e,
              a
            );
          Ll = (t.flags & 131072) !== 0;
        }
      else
        Ll = !1, (i = ce) && (wi(), i = (e.flags & 1048576) !== 0), i && (i = e.index, wi(), Km(e, jp, i));
      switch (e.lanes = 0, e.tag) {
        case 16:
          t: if (i = e.pendingProps, t = Ka(e.elementType), e.type = t, typeof t == "function")
            Vm(t) ? (i = _u(
              t,
              i
            ), e.tag = 1, e.type = t = Yi(t), e = Ic(
              null,
              e,
              t,
              i,
              a
            )) : (e.tag = 0, ff(e, t), e.type = t = Yi(t), e = gy(
              null,
              e,
              t,
              i,
              a
            ));
          else {
            if (t != null) {
              if (o = t.$$typeof, o === Nf) {
                e.tag = 11, e.type = t = Ed(t), e = W0(
                  null,
                  e,
                  t,
                  i,
                  a
                );
                break t;
              } else if (o === zs) {
                e.tag = 14, e = dy(
                  null,
                  e,
                  t,
                  i,
                  a
                );
                break t;
              }
            }
            throw e = "", t !== null && typeof t == "object" && t.$$typeof === na && (e = " Did you wrap a component in React.lazy() more than once?"), a = Jt(t) || t, Error(
              "Element type is invalid. Received a promise that resolves to: " + a + ". Lazy element type must resolve to a class or function." + e
            );
          }
          return e;
        case 0:
          return gy(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 1:
          return i = e.type, o = _u(
            i,
            e.pendingProps
          ), Ic(
            t,
            e,
            i,
            o,
            a
          );
        case 3:
          t: {
            if (je(
              e,
              e.stateNode.containerInfo
            ), t === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = e.pendingProps;
            var f = e.memoizedState;
            o = f.element, gu(t, e), Su(e, i, null, a);
            var d = e.memoizedState;
            if (i = d.cache, gn(e, Gl, i), i !== f.cache && ei(
              e,
              [Gl],
              a,
              !0
            ), Io(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, e.updateQueue.baseState = f, e.memoizedState = f, e.flags & 256) {
                e = Sy(
                  t,
                  e,
                  i,
                  a
                );
                break t;
              } else if (i !== o) {
                o = ra(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  e
                ), Rr(o), e = Sy(
                  t,
                  e,
                  i,
                  a
                );
                break t;
              } else
                for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Ie = ln(t.firstChild), _a = e, ce = !0, $f = null, yc = !1, eu = null, Zu = !0, a = vb(
                  e,
                  null,
                  i,
                  a
                ), e.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
            else {
              if (Gi(), i === o) {
                e = Vn(
                  t,
                  e,
                  a
                );
                break t;
              }
              Yl(
                t,
                e,
                i,
                a
              );
            }
            e = e.child;
          }
          return e;
        case 26:
          return Fr(t, e), t === null ? (a = lp(
            e.type,
            null,
            e.pendingProps,
            null
          )) ? e.memoizedState = a : ce || (a = e.type, t = e.pendingProps, i = Qe(
            an.current
          ), i = ms(
            i
          ).createElement(a), i[We] = e, i[Oa] = t, ke(i, a, t), yt(i), e.stateNode = i) : e.memoizedState = lp(
            e.type,
            t.memoizedProps,
            e.pendingProps,
            t.memoizedState
          ), null;
        case 27:
          return et(e), t === null && ce && (i = Qe(an.current), o = Z(), i = e.stateNode = gi(
            e.type,
            e.pendingProps,
            i,
            o,
            !1
          ), yc || (o = Ua(
            i,
            e.type,
            e.pendingProps,
            o
          ), o !== null && (xc(e, 0).serverProps = o)), _a = e, Zu = !0, o = Ie, oc(e.type) ? (SS = o, Ie = ln(
            i.firstChild
          )) : Ie = o), Yl(
            t,
            e,
            e.pendingProps.children,
            a
          ), Fr(t, e), t === null && (e.flags |= 4194304), e.child;
        case 5:
          return t === null && ce && (f = Z(), i = vr(
            e.type,
            f.ancestorInfo
          ), o = Ie, (d = !o) || (d = Rg(
            o,
            e.type,
            e.pendingProps,
            Zu
          ), d !== null ? (e.stateNode = d, yc || (f = Ua(
            d,
            e.type,
            e.pendingProps,
            f
          ), f !== null && (xc(e, 0).serverProps = f)), _a = e, Ie = ln(
            d.firstChild
          ), Zu = !1, f = !0) : f = !1, d = !f), d && (i && la(e, o), pn(e))), et(e), o = e.type, f = e.pendingProps, d = t !== null ? t.memoizedProps : null, i = f.children, Of(o, f) ? i = null : d !== null && Of(o, d) && (e.flags |= 32), e.memoizedState !== null && (o = ay(
            t,
            e,
            Yr,
            null,
            null,
            a
          ), y0._currentValue = o), Fr(t, e), Yl(
            t,
            e,
            i,
            a
          ), e.child;
        case 6:
          return t === null && ce && (a = e.pendingProps, t = Z(), i = t.ancestorInfo.current, a = i != null ? Sr(
            a,
            i.tag,
            t.ancestorInfo.implicitRootScope
          ) : !0, t = Ie, (i = !t) || (i = Mg(
            t,
            e.pendingProps,
            Zu
          ), i !== null ? (e.stateNode = i, _a = e, Ie = null, i = !0) : i = !1, i = !i), i && (a && la(e, t), pn(e))), null;
        case 13:
          return Kd(t, e, a);
        case 4:
          return je(
            e,
            e.stateNode.containerInfo
          ), i = e.pendingProps, t === null ? e.child = Qs(
            e,
            null,
            i,
            a
          ) : Yl(
            t,
            e,
            i,
            a
          ), e.child;
        case 11:
          return W0(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 7:
          return Yl(
            t,
            e,
            e.pendingProps,
            a
          ), e.child;
        case 8:
          return Yl(
            t,
            e,
            e.pendingProps.children,
            a
          ), e.child;
        case 12:
          return e.flags |= 4, e.flags |= 2048, i = e.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, Yl(
            t,
            e,
            e.pendingProps.children,
            a
          ), e.child;
        case 10:
          return i = e.type, o = e.pendingProps, f = o.value, "value" in o || Vb || (Vb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), gn(e, i, f), Yl(
            t,
            e,
            o.children,
            a
          ), e.child;
        case 9:
          return o = e.type._context, i = e.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Qi(e), o = ve(o), i = Y1(
            i,
            o,
            void 0
          ), e.flags |= 1, Yl(
            t,
            e,
            i,
            a
          ), e.child;
        case 14:
          return dy(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 15:
          return hy(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 19:
          return Ty(
            t,
            e,
            a
          );
        case 31:
          return F0(t, e, a);
        case 22:
          return my(
            t,
            e,
            a,
            e.pendingProps
          );
        case 24:
          return Qi(e), i = ve(Gl), t === null ? (o = ni(), o === null && (o = Xe, f = zd(), o.pooledCache = f, jc(f), f !== null && (o.pooledCacheLanes |= a), o = f), e.memoizedState = {
            parent: i,
            cache: o
          }, ue(e), gn(e, Gl, o)) : ((t.lanes & a) !== 0 && (gu(t, e), Su(e, null, null, a), Io()), o = t.memoizedState, f = e.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, e.memoizedState = o, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = o), gn(e, Gl, i)) : (i = f.cache, gn(e, Gl, i), i !== o.cache && ei(
            e,
            [Gl],
            a,
            !0
          ))), Yl(
            t,
            e,
            e.pendingProps.children,
            a
          ), e.child;
        case 29:
          throw e.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + e.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function zu(t) {
      t.flags |= 4;
    }
    function Fd(t, e, a, i, o) {
      if ((e = (t.mode & LE) !== Ht) && (e = !1), e) {
        if (t.flags |= 16777216, (o & 335544128) === o)
          if (t.stateNode.complete) t.flags |= 8192;
          else if (Gy()) t.flags |= 8192;
          else
            throw Xs = mv, w1;
      } else t.flags &= -16777217;
    }
    function P0(t, e) {
      if (e.type !== "stylesheet" || (e.state.loading & Wu) !== Ps)
        t.flags &= -16777217;
      else if (t.flags |= 16777216, !ne(e))
        if (Gy()) t.flags |= 8192;
        else
          throw Xs = mv, w1;
    }
    function sf(t, e) {
      e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Ho() : 536870912, t.lanes |= e, Ks |= e);
    }
    function df(t, e) {
      if (!ce)
        switch (t.tailMode) {
          case "hidden":
            e = t.tail;
            for (var a = null; e !== null; )
              e.alternate !== null && (a = e), e = e.sibling;
            a === null ? t.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = t.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : i.sibling = null;
        }
    }
    function Me(t) {
      var e = t.alternate !== null && t.alternate.child === t.child, a = 0, i = 0;
      if (e)
        if ((t.mode & Ft) !== Ht) {
          for (var o = t.selfBaseDuration, f = t.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          t.treeBaseDuration = o;
        } else
          for (o = t.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = t, o = o.sibling;
      else if ((t.mode & Ft) !== Ht) {
        o = t.actualDuration, f = t.selfBaseDuration;
        for (var d = t.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        t.actualDuration = o, t.treeBaseDuration = f;
      } else
        for (o = t.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = t, o = o.sibling;
      return t.subtreeFlags |= i, t.childLanes = a, e;
    }
    function Ay(t, e, a) {
      var i = e.pendingProps;
      switch (Od(e), e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Me(e), null;
        case 1:
          return Me(e), null;
        case 3:
          return a = e.stateNode, i = null, t !== null && (i = t.memoizedState.cache), e.memoizedState.cache !== i && (e.flags |= 2048), Yn(Gl, e), R(e), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (Bc(e) ? (Xi(), zu(e)) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Dr())), Me(e), null;
        case 26:
          var o = e.type, f = e.memoizedState;
          return t === null ? (zu(e), f !== null ? (Me(e), P0(
            e,
            f
          )) : (Me(e), Fd(
            e,
            o,
            null,
            i,
            a
          ))) : f ? f !== t.memoizedState ? (zu(e), Me(e), P0(
            e,
            f
          )) : (Me(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== i && zu(e), Me(e), Fd(
            e,
            o,
            t,
            i,
            a
          )), null;
        case 27:
          if (vt(e), a = Qe(an.current), o = e.type, t !== null && e.stateNode != null)
            t.memoizedProps !== i && zu(e);
          else {
            if (!i) {
              if (e.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Me(e), null;
            }
            t = Z(), Bc(e) ? $m(e) : (t = gi(
              o,
              i,
              a,
              t,
              !0
            ), e.stateNode = t, zu(e));
          }
          return Me(e), null;
        case 5:
          if (vt(e), o = e.type, t !== null && e.stateNode != null)
            t.memoizedProps !== i && zu(e);
          else {
            if (!i) {
              if (e.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Me(e), null;
            }
            var d = Z();
            if (Bc(e))
              $m(e);
            else {
              switch (f = Qe(an.current), vr(o, d.ancestorInfo), d = d.context, f = ms(f), d) {
                case bm:
                  f = f.createElementNS(
                    $t,
                    o
                  );
                  break;
                case Gv:
                  f = f.createElementNS(
                    Xt,
                    o
                  );
                  break;
                default:
                  switch (o) {
                    case "svg":
                      f = f.createElementNS(
                        $t,
                        o
                      );
                      break;
                    case "math":
                      f = f.createElementNS(
                        Xt,
                        o
                      );
                      break;
                    case "script":
                      f = f.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                        f.firstChild
                      );
                      break;
                    case "select":
                      f = typeof i.is == "string" ? f.createElement("select", {
                        is: i.is
                      }) : f.createElement("select"), i.multiple ? f.multiple = !0 : i.size && (f.size = i.size);
                      break;
                    default:
                      f = typeof i.is == "string" ? f.createElement(o, {
                        is: i.is
                      }) : f.createElement(o), o.indexOf("-") === -1 && (o !== o.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        o
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || nn.call(m2, o) || (m2[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[We] = e, f[Oa] = i;
              t: for (d = e.child; d !== null; ) {
                if (d.tag === 5 || d.tag === 6)
                  f.appendChild(d.stateNode);
                else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                  d.child.return = d, d = d.child;
                  continue;
                }
                if (d === e) break t;
                for (; d.sibling === null; ) {
                  if (d.return === null || d.return === e)
                    break t;
                  d = d.return;
                }
                d.sibling.return = d.return, d = d.sibling;
              }
              e.stateNode = f;
              t: switch (ke(f, o, i), o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break t;
                case "img":
                  i = !0;
                  break t;
                default:
                  i = !1;
              }
              i && zu(e);
            }
          }
          return Me(e), Fd(
            e,
            e.type,
            t === null ? null : t.memoizedProps,
            e.pendingProps,
            a
          ), null;
        case 6:
          if (t && e.stateNode != null)
            t.memoizedProps !== i && zu(e);
          else {
            if (typeof i != "string" && e.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (t = Qe(an.current), a = Z(), Bc(e)) {
              if (t = e.stateNode, a = e.memoizedProps, o = !yc, i = null, f = _a, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = Hg(
                      t,
                      a,
                      i
                    ), o !== null && (xc(e, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = Hg(
                      t,
                      a,
                      i
                    ), o !== null && (xc(
                      e,
                      0
                    ).serverProps = o));
                }
              t[We] = e, t = !!(t.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || Wy(t.nodeValue, a)), t || pn(e, !0);
            } else
              o = a.ancestorInfo.current, o != null && Sr(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), t = ms(t).createTextNode(
                i
              ), t[We] = e, e.stateNode = t;
          }
          return Me(e), null;
        case 31:
          if (a = e.memoizedState, t === null || t.memoizedState !== null) {
            if (i = Bc(e), a !== null) {
              if (t === null) {
                if (!i)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t)
                  throw Error(
                    "Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                t[We] = e, Me(e), (e.mode & Ft) !== Ht && a !== null && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration));
              } else
                Xi(), Gi(), (e.flags & 128) === 0 && (a = e.memoizedState = null), e.flags |= 4, Me(e), (e.mode & Ft) !== Ht && a !== null && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration));
              t = !1;
            } else
              a = Dr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
            if (!t)
              return e.flags & 256 ? (Bl(e), e) : (Bl(e), null);
            if ((e.flags & 128) !== 0)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return Me(e), null;
        case 13:
          if (i = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (o = i, f = Bc(e), o !== null && o.dehydrated !== null) {
              if (t === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = e.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[We] = e, Me(e), (e.mode & Ft) !== Ht && o !== null && (o = e.child, o !== null && (e.treeBaseDuration -= o.treeBaseDuration));
              } else
                Xi(), Gi(), (e.flags & 128) === 0 && (o = e.memoizedState = null), e.flags |= 4, Me(e), (e.mode & Ft) !== Ht && o !== null && (o = e.child, o !== null && (e.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = Dr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return e.flags & 256 ? (Bl(e), e) : (Bl(e), null);
          }
          return Bl(e), (e.flags & 128) !== 0 ? (e.lanes = a, (e.mode & Ft) !== Ht && qc(e), e) : (a = i !== null, t = t !== null && t.memoizedState !== null, a && (i = e.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== t && a && (e.child.flags |= 8192), sf(e, e.updateQueue), Me(e), (e.mode & Ft) !== Ht && a && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration)), null);
        case 4:
          return R(e), t === null && ic(
            e.stateNode.containerInfo
          ), Me(e), null;
        case 10:
          return Yn(e.type, e), Me(e), null;
        case 19:
          if (gt(Ml, e), i = e.memoizedState, i === null) return Me(e), null;
          if (o = (e.flags & 128) !== 0, f = i.rendering, f === null)
            if (o) df(i, !1);
            else {
              if (rl !== Do || t !== null && (t.flags & 128) !== 0)
                for (t = e.child; t !== null; ) {
                  if (f = Gc(t), f !== null) {
                    for (e.flags |= 128, df(i, !1), t = f.updateQueue, e.updateQueue = t, sf(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; )
                      Zm(a, t), a = a.sibling;
                    return qt(
                      Ml,
                      Ml.current & om | Fp,
                      e
                    ), ce && jn(e, i.treeForkCount), e.child;
                  }
                  t = t.sibling;
                }
              i.tail !== null && wl() > Dv && (e.flags |= 128, o = !0, df(i, !1), e.lanes = 4194304);
            }
          else {
            if (!o)
              if (t = Gc(f), t !== null) {
                if (e.flags |= 128, o = !0, t = t.updateQueue, e.updateQueue = t, sf(e, t), df(i, !0), i.tail === null && i.tailMode === "hidden" && !f.alternate && !ce)
                  return Me(e), null;
              } else
                2 * wl() - i.renderingStartTime > Dv && a !== 536870912 && (e.flags |= 128, o = !0, df(i, !1), e.lanes = 4194304);
            i.isBackwards ? (f.sibling = e.child, e.child = f) : (t = i.last, t !== null ? t.sibling = f : e.child = f, i.last = f);
          }
          return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = wl(), t.sibling = null, a = Ml.current, a = o ? a & om | Fp : a & om, qt(Ml, a, e), ce && jn(e, i.treeForkCount), t) : (Me(e), null);
        case 22:
        case 23:
          return Bl(e), Xn(e), i = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== i && (e.flags |= 8192) : i && (e.flags |= 8192), i ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (Me(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Me(e), a = e.updateQueue, a !== null && sf(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), i = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), i !== a && (e.flags |= 2048), t !== null && gt(ws, e), null;
        case 24:
          return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Yn(Gl, e), Me(e), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + e.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function tg(t, e) {
      switch (Od(e), e.tag) {
        case 1:
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & Ft) !== Ht && qc(e), e) : null;
        case 3:
          return Yn(Gl, e), R(e), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
        case 26:
        case 27:
        case 5:
          return vt(e), null;
        case 31:
          if (e.memoizedState !== null) {
            if (Bl(e), e.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Gi();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & Ft) !== Ht && qc(e), e) : null;
        case 13:
          if (Bl(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
            if (e.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Gi();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & Ft) !== Ht && qc(e), e) : null;
        case 19:
          return gt(Ml, e), null;
        case 4:
          return R(e), null;
        case 10:
          return Yn(e.type, e), null;
        case 22:
        case 23:
          return Bl(e), Xn(e), t !== null && gt(ws, e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & Ft) !== Ht && qc(e), e) : null;
        case 24:
          return Yn(Gl, e), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Oy(t, e) {
      switch (Od(e), e.tag) {
        case 3:
          Yn(Gl, e), R(e);
          break;
        case 26:
        case 27:
        case 5:
          vt(e);
          break;
        case 4:
          R(e);
          break;
        case 31:
          e.memoizedState !== null && Bl(e);
          break;
        case 13:
          Bl(e);
          break;
        case 19:
          gt(Ml, e);
          break;
        case 10:
          Yn(e.type, e);
          break;
        case 22:
        case 23:
          Bl(e), Xn(e), t !== null && gt(ws, e);
          break;
        case 24:
          Yn(Gl, e);
      }
    }
    function Du(t) {
      return (t.mode & Ft) !== Ht;
    }
    function eg(t, e) {
      Du(t) ? (il(), di(e, t), da()) : di(e, t);
    }
    function Id(t, e, a) {
      Du(t) ? (il(), tc(
        a,
        t,
        e
      ), da()) : tc(
        a,
        t,
        e
      );
    }
    function di(t, e) {
      try {
        var a = e.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & t) === t && (i = void 0, (t & fn) !== pv && (gm = !0), i = ft(
              e,
              kE,
              a
            ), (t & fn) !== pv && (gm = !1), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & au) !== 0 ? "useLayoutEffect" : (a.tag & fn) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, ft(
                e,
                function(h, y) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    y
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        Kt(e, e.return, h);
      }
    }
    function tc(t, e, a) {
      try {
        var i = e.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & t) === t) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (t & fn) !== pv && (gm = !0), o = e, ft(
                o,
                WE,
                o,
                a,
                h
              ), (t & fn) !== pv && (gm = !1));
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (y) {
        Kt(e, e.return, y);
      }
    }
    function ts(t, e) {
      Du(t) ? (il(), di(e, t), da()) : di(e, t);
    }
    function Pd(t, e, a) {
      Du(t) ? (il(), tc(
        a,
        t,
        e
      ), da()) : tc(
        a,
        t,
        e
      );
    }
    function _y(t) {
      var e = t.updateQueue;
      if (e !== null) {
        var a = t.stateNode;
        t.type.defaultProps || "ref" in t.memoizedProps || dm || (a.props !== t.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          dt(t) || "instance"
        ), a.state !== t.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          dt(t) || "instance"
        ));
        try {
          ft(
            t,
            Po,
            e,
            a
          );
        } catch (i) {
          Kt(t, t.return, i);
        }
      }
    }
    function es(t, e, a) {
      return t.getSnapshotBeforeUpdate(e, a);
    }
    function lg(t, e) {
      var a = e.memoizedProps, i = e.memoizedState;
      e = t.stateNode, t.type.defaultProps || "ref" in t.memoizedProps || dm || (e.props !== t.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        dt(t) || "instance"
      ), e.state !== t.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        dt(t) || "instance"
      ));
      try {
        var o = _u(
          t.type,
          a
        ), f = ft(
          t,
          es,
          e,
          o,
          i
        );
        a = Zb, f !== void 0 || a.has(t.type) || (a.add(t.type), ft(t, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            dt(t)
          );
        })), e.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        Kt(t, t.return, d);
      }
    }
    function th(t, e, a) {
      a.props = _u(
        t.type,
        t.memoizedProps
      ), a.state = t.memoizedState, Du(t) ? (il(), ft(
        t,
        rb,
        t,
        e,
        a
      ), da()) : ft(
        t,
        rb,
        t,
        e,
        a
      );
    }
    function ag(t) {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        if (typeof e == "function")
          if (Du(t))
            try {
              il(), t.refCleanup = e(a);
            } finally {
              da();
            }
          else t.refCleanup = e(a);
        else
          typeof e == "string" ? console.error("String refs are no longer supported.") : e.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            dt(t)
          ), e.current = a;
      }
    }
    function Pc(t, e) {
      try {
        ft(t, ag, t);
      } catch (a) {
        Kt(t, e, a);
      }
    }
    function Tn(t, e) {
      var a = t.ref, i = t.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (Du(t))
              try {
                il(), ft(t, i);
              } finally {
                da(t);
              }
            else ft(t, i);
          } catch (o) {
            Kt(t, e, o);
          } finally {
            t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (Du(t))
              try {
                il(), ft(t, a, null);
              } finally {
                da(t);
              }
            else ft(t, a, null);
          } catch (o) {
            Kt(t, e, o);
          }
        else a.current = null;
    }
    function zy(t, e, a, i) {
      var o = t.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, e = e === null ? "mount" : "update", rv && (e = "nested-update"), typeof o == "function" && o(
        f,
        e,
        t.actualDuration,
        t.treeBaseDuration,
        t.actualStartTime,
        a
      ), typeof d == "function" && d(f, e, i, a);
    }
    function ng(t, e, a, i) {
      var o = t.memoizedProps;
      t = o.id, o = o.onPostCommit, e = e === null ? "mount" : "update", rv && (e = "nested-update"), typeof o == "function" && o(
        t,
        e,
        i,
        a
      );
    }
    function ec(t) {
      var e = t.type, a = t.memoizedProps, i = t.stateNode;
      try {
        ft(
          t,
          gg,
          i,
          e,
          a,
          t
        );
      } catch (o) {
        Kt(t, t.return, o);
      }
    }
    function eh(t, e, a) {
      try {
        ft(
          t,
          Eh,
          t.stateNode,
          t.type,
          a,
          e,
          t
        );
      } catch (i) {
        Kt(t, t.return, i);
      }
    }
    function Dy(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && oc(t.type) || t.tag === 4;
    }
    function lh(t) {
      t: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || Dy(t.return)) return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.tag === 27 && oc(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function hf(t, e, a) {
      var i = t.tag;
      if (i === 5 || i === 6)
        t = t.stateNode, e ? (Sg(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e)) : (Sg(a), e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(t), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = mn));
      else if (i !== 4 && (i === 27 && oc(t.type) && (a = t.stateNode, e = null), t = t.child, t !== null))
        for (hf(t, e, a), t = t.sibling; t !== null; )
          hf(t, e, a), t = t.sibling;
    }
    function ls(t, e, a) {
      var i = t.tag;
      if (i === 5 || i === 6)
        t = t.stateNode, e ? a.insertBefore(t, e) : a.appendChild(t);
      else if (i !== 4 && (i === 27 && oc(t.type) && (a = t.stateNode), t = t.child, t !== null))
        for (ls(t, e, a), t = t.sibling; t !== null; )
          ls(t, e, a), t = t.sibling;
    }
    function Ry(t) {
      for (var e, a = t.return; a !== null; ) {
        if (Dy(a)) {
          e = a;
          break;
        }
        a = a.return;
      }
      if (e == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (e.tag) {
        case 27:
          e = e.stateNode, a = lh(t), ls(
            t,
            a,
            e
          );
          break;
        case 5:
          a = e.stateNode, e.flags & 32 && (Th(a), e.flags &= -33), e = lh(t), ls(
            t,
            e,
            a
          );
          break;
        case 3:
        case 4:
          e = e.stateNode.containerInfo, a = lh(t), hf(
            t,
            a,
            e
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function My(t) {
      var e = t.stateNode, a = t.memoizedProps;
      try {
        ft(
          t,
          Bu,
          t.type,
          a,
          e,
          t
        );
      } catch (i) {
        Kt(t, t.return, i);
      }
    }
    function Cy(t, e) {
      return e.tag === 31 ? (e = e.memoizedState, t.memoizedState !== null && e === null) : e.tag === 13 ? (t = t.memoizedState, e = e.memoizedState, t !== null && t.dehydrated !== null && (e === null || e.dehydrated === null)) : e.tag === 3 ? t.memoizedState.isDehydrated && (e.flags & 256) === 0 : !1;
    }
    function i1(t, e) {
      if (t = t.containerInfo, pS = Vv, t = gd(t), Ym(t)) {
        if ("selectionStart" in t)
          var a = {
            start: t.selectionStart,
            end: t.selectionEnd
          };
        else
          t: {
            a = (a = t.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break t;
              }
              var d = 0, h = -1, y = -1, p = 0, _ = 0, M = t, E = null;
              e: for (; ; ) {
                for (var q; M !== a || o !== 0 && M.nodeType !== 3 || (h = d + o), M !== f || i !== 0 && M.nodeType !== 3 || (y = d + i), M.nodeType === 3 && (d += M.nodeValue.length), (q = M.firstChild) !== null; )
                  E = M, M = q;
                for (; ; ) {
                  if (M === t) break e;
                  if (E === a && ++p === o && (h = d), E === f && ++_ === i && (y = d), (q = M.nextSibling) !== null) break;
                  M = E, E = M.parentNode;
                }
                M = q;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (gS = {
        focusedElem: t,
        selectionRange: a
      }, Vv = !1, ca = e; ca !== null; )
        if (e = ca, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
          t.return = e, ca = t;
        else
          for (; ca !== null; ) {
            switch (t = e = ca, a = t.alternate, o = t.flags, t.tag) {
              case 0:
                if ((o & 4) !== 0 && (t = t.updateQueue, t = t !== null ? t.events : null, t !== null))
                  for (a = 0; a < t.length; a++)
                    o = t[a], o.ref.impl = o.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && lg(t, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (t = t.stateNode.containerInfo, a = t.nodeType, a === 9)
                    zf(t);
                  else if (a === 1)
                    switch (t.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        zf(t);
                        break;
                      default:
                        t.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (t = e.sibling, t !== null) {
              t.return = e.return, ca = t;
              break;
            }
            ca = e.return;
          }
    }
    function ah(t, e, a) {
      var i = Ke(), o = vn(), f = Za(), d = Sn(), h = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ia(t, a), h & 4 && eg(a, au | $u);
          break;
        case 1:
          if (Ia(t, a), h & 4)
            if (t = a.stateNode, e === null)
              a.type.defaultProps || "ref" in a.memoizedProps || dm || (t.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                dt(a) || "instance"
              ), t.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                dt(a) || "instance"
              )), Du(a) ? (il(), ft(
                a,
                q1,
                a,
                t
              ), da()) : ft(
                a,
                q1,
                a,
                t
              );
            else {
              var y = _u(
                a.type,
                e.memoizedProps
              );
              e = e.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || dm || (t.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                dt(a) || "instance"
              ), t.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                dt(a) || "instance"
              )), Du(a) ? (il(), ft(
                a,
                cb,
                a,
                t,
                y,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              ), da()) : ft(
                a,
                cb,
                a,
                t,
                y,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && _y(a), h & 512 && Pc(a, a.return);
          break;
        case 3:
          if (e = pu(), Ia(t, a), h & 64 && (h = a.updateQueue, h !== null)) {
            if (y = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  y = a.child.stateNode;
                  break;
                case 1:
                  y = a.child.stateNode;
              }
            try {
              ft(
                a,
                Po,
                h,
                y
              );
            } catch (_) {
              Kt(a, a.return, _);
            }
          }
          t.effectDuration += ko(e);
          break;
        case 27:
          e === null && h & 4 && My(a);
        case 26:
        case 5:
          if (Ia(t, a), e === null) {
            if (h & 4) ec(a);
            else if (h & 64) {
              t = a.type, e = a.memoizedProps, y = a.stateNode;
              try {
                ft(
                  a,
                  vg,
                  y,
                  t,
                  e,
                  a
                );
              } catch (_) {
                Kt(
                  a,
                  a.return,
                  _
                );
              }
            }
          }
          h & 512 && Pc(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = pu(), Ia(t, a), t = a.stateNode, t.effectDuration += sa(h);
            try {
              ft(
                a,
                zy,
                a,
                e,
                kf,
                t.effectDuration
              );
            } catch (_) {
              Kt(a, a.return, _);
            }
          } else Ia(t, a);
          break;
        case 31:
          Ia(t, a), h & 4 && Hy(t, a);
          break;
        case 13:
          Ia(t, a), h & 4 && Ny(t, a), h & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (h = mi.bind(
            null,
            a
          ), Cg(t, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || zo, !h) {
            e = e !== null && e.memoizedState !== null || Vl, y = zo;
            var p = Vl;
            zo = h, (Vl = e) && !p ? (Zn(
              t,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & Ft) !== Ht && 0 <= Ot && 0 <= Ct && 0.05 < Ct - Ot && vd(
              a,
              Ot,
              Ct
            )) : Ia(t, a), zo = y, Vl = p;
          }
          break;
        case 30:
          break;
        default:
          Ia(t, a);
      }
      (a.mode & Ft) !== Ht && 0 <= Ot && 0 <= Ct && ((pl || 0.05 < fl) && Bn(
        a,
        Ot,
        Ct,
        fl,
        nl
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < Ct - Ot && (Cy(
        a.return.alternate,
        a.return
      ) || yn(
        a,
        Ot,
        Ct,
        "Mount"
      ))), Nl(i), Va(o), nl = f, pl = d;
    }
    function ml(t) {
      var e = t.alternate;
      e !== null && (t.alternate = null, ml(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && U(e)), t.stateNode = null, t._debugOwner = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    function Ve(t, e, a) {
      for (a = a.child; a !== null; )
        Uy(
          t,
          e,
          a
        ), a = a.sibling;
    }
    function Uy(t, e, a) {
      if (Dl && typeof Dl.onCommitFiberUnmount == "function")
        try {
          Dl.onCommitFiberUnmount(ho, a);
        } catch (p) {
          Yu || (Yu = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var i = Ke(), o = vn(), f = Za(), d = Sn();
      switch (a.tag) {
        case 26:
          Vl || Tn(a, e), Ve(
            t,
            e,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (t = a.stateNode, t.parentNode.removeChild(t));
          break;
        case 27:
          Vl || Tn(a, e);
          var h = Zl, y = Dn;
          oc(a.type) && (Zl = a.stateNode, Dn = !1), Ve(
            t,
            e,
            a
          ), ft(
            a,
            vi,
            a.stateNode
          ), Zl = h, Dn = y;
          break;
        case 5:
          Vl || Tn(a, e);
        case 6:
          if (h = Zl, y = Dn, Zl = null, Ve(
            t,
            e,
            a
          ), Zl = h, Dn = y, Zl !== null)
            if (Dn)
              try {
                ft(
                  a,
                  Eg,
                  Zl,
                  a.stateNode
                );
              } catch (p) {
                Kt(
                  a,
                  e,
                  p
                );
              }
            else
              try {
                ft(
                  a,
                  bg,
                  Zl,
                  a.stateNode
                );
              } catch (p) {
                Kt(
                  a,
                  e,
                  p
                );
              }
          break;
        case 18:
          Zl !== null && (Dn ? (t = Zl, no(
            t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
            a.stateNode
          ), oo(t)) : no(Zl, a.stateNode));
          break;
        case 4:
          h = Zl, y = Dn, Zl = a.stateNode.containerInfo, Dn = !0, Ve(
            t,
            e,
            a
          ), Zl = h, Dn = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          tc(
            fn,
            a,
            e
          ), Vl || Id(
            a,
            e,
            au
          ), Ve(
            t,
            e,
            a
          );
          break;
        case 1:
          Vl || (Tn(a, e), h = a.stateNode, typeof h.componentWillUnmount == "function" && th(
            a,
            e,
            h
          )), Ve(
            t,
            e,
            a
          );
          break;
        case 21:
          Ve(
            t,
            e,
            a
          );
          break;
        case 22:
          Vl = (h = Vl) || a.memoizedState !== null, Ve(
            t,
            e,
            a
          ), Vl = h;
          break;
        default:
          Ve(
            t,
            e,
            a
          );
      }
      (a.mode & Ft) !== Ht && 0 <= Ot && 0 <= Ct && (pl || 0.05 < fl) && Bn(
        a,
        Ot,
        Ct,
        fl,
        nl
      ), Nl(i), Va(o), nl = f, pl = d;
    }
    function Hy(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
        t = t.dehydrated;
        try {
          ft(
            e,
            Ah,
            t
          );
        } catch (a) {
          Kt(e, e.return, a);
        }
      }
    }
    function Ny(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
        try {
          ft(
            e,
            tp,
            t
          );
        } catch (a) {
          Kt(e, e.return, a);
        }
    }
    function ug(t) {
      switch (t.tag) {
        case 31:
        case 13:
        case 19:
          var e = t.stateNode;
          return e === null && (e = t.stateNode = new Jb()), e;
        case 22:
          return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Jb()), e;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + t.tag + "). This is a bug in React."
          );
      }
    }
    function lc(t, e) {
      var a = ug(t);
      e.forEach(function(i) {
        if (!a.has(i)) {
          if (a.add(i), qu)
            if (hm !== null && mm !== null)
              Sf(mm, hm);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = lo.bind(null, t, i);
          i.then(o, o);
        }
      });
    }
    function ga(t, e) {
      var a = e.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = t, f = e, d = a[i], h = Ke(), y = f;
          t: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (oc(y.type)) {
                  Zl = y.stateNode, Dn = !1;
                  break t;
                }
                break;
              case 5:
                Zl = y.stateNode, Dn = !1;
                break t;
              case 3:
              case 4:
                Zl = y.stateNode.containerInfo, Dn = !0;
                break t;
            }
            y = y.return;
          }
          if (Zl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          Uy(o, f, d), Zl = null, Dn = !1, (d.mode & Ft) !== Ht && 0 <= Ot && 0 <= Ct && 0.05 < Ct - Ot && yn(
            d,
            Ot,
            Ct,
            "Unmount"
          ), Nl(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (e.subtreeFlags & 13886)
        for (e = e.child; e !== null; )
          as(e, t), e = e.sibling;
    }
    function as(t, e) {
      var a = Ke(), i = vn(), o = Za(), f = Sn(), d = t.alternate, h = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ga(e, t), va(t), h & 4 && (tc(
            fn | $u,
            t,
            t.return
          ), di(fn | $u, t), Id(
            t,
            t.return,
            au | $u
          ));
          break;
        case 1:
          if (ga(e, t), va(t), h & 512 && (Vl || d === null || Tn(d, d.return)), h & 64 && zo && (h = t.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = Oi, ga(e, t), va(t), h & 512 && (Vl || d === null || Tn(d, d.return)), h & 4) {
            var p = d !== null ? d.memoizedState : null;
            if (h = t.memoizedState, d === null)
              if (h === null)
                if (t.stateNode === null) {
                  t: {
                    h = t.type, d = t.memoizedProps, y = y.ownerDocument || y;
                    e: switch (h) {
                      case "title":
                        p = y.getElementsByTagName(
                          "title"
                        )[0], (!p || p[Xf] || p[We] || p.namespaceURI === $t || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), ke(p, h, d), p[We] = t, yt(p), h = p;
                        break t;
                      case "link":
                        var _ = Mf(
                          "link",
                          "href",
                          y
                        ).get(h + (d.href || ""));
                        if (_) {
                          for (var M = 0; M < _.length; M++)
                            if (p = _[M], p.getAttribute("href") === (d.href == null || d.href === "" ? null : d.href) && p.getAttribute("rel") === (d.rel == null ? null : d.rel) && p.getAttribute("title") === (d.title == null ? null : d.title) && p.getAttribute("crossorigin") === (d.crossOrigin == null ? null : d.crossOrigin)) {
                              _.splice(M, 1);
                              break e;
                            }
                        }
                        p = y.createElement(h), ke(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      case "meta":
                        if (_ = Mf(
                          "meta",
                          "content",
                          y
                        ).get(h + (d.content || ""))) {
                          for (M = 0; M < _.length; M++)
                            if (p = _[M], ye(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              _.splice(M, 1);
                              break e;
                            }
                        }
                        p = y.createElement(h), ke(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + h + '". This is a bug in React.'
                        );
                    }
                    p[We] = t, yt(p), h = p;
                  }
                  t.stateNode = h;
                } else
                  xg(
                    y,
                    t.type,
                    t.stateNode
                  );
              else
                t.stateNode = zh(
                  y,
                  h,
                  t.memoizedProps
                );
            else
              p !== h ? (p === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : p.count--, h === null ? xg(
                y,
                t.type,
                t.stateNode
              ) : zh(
                y,
                h,
                t.memoizedProps
              )) : h === null && t.stateNode !== null && eh(
                t,
                t.memoizedProps,
                d.memoizedProps
              );
          }
          break;
        case 27:
          ga(e, t), va(t), h & 512 && (Vl || d === null || Tn(d, d.return)), d !== null && h & 4 && eh(
            t,
            t.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (ga(e, t), va(t), h & 512 && (Vl || d === null || Tn(d, d.return)), t.flags & 32) {
            y = t.stateNode;
            try {
              ft(
                t,
                Th,
                y
              );
            } catch (rt) {
              Kt(t, t.return, rt);
            }
          }
          h & 4 && t.stateNode != null && (y = t.memoizedProps, eh(
            t,
            y,
            d !== null ? d.memoizedProps : y
          )), h & 1024 && (F1 = !0, t.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (ga(e, t), va(t), h & 4) {
            if (t.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            h = t.memoizedProps, d = d !== null ? d.memoizedProps : h, y = t.stateNode;
            try {
              ft(
                t,
                c1,
                y,
                d,
                h
              );
            } catch (rt) {
              Kt(t, t.return, rt);
            }
          }
          break;
        case 3:
          if (y = pu(), Xv = null, p = Oi, Oi = Oh(e.containerInfo), ga(e, t), Oi = p, va(t), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              ft(
                t,
                Py,
                e.containerInfo
              );
            } catch (rt) {
              Kt(t, t.return, rt);
            }
          F1 && (F1 = !1, ig(t)), e.effectDuration += ko(
            y
          );
          break;
        case 4:
          h = Oi, Oi = Oh(
            t.stateNode.containerInfo
          ), ga(e, t), va(t), Oi = h;
          break;
        case 12:
          h = pu(), ga(e, t), va(t), t.stateNode.effectDuration += sa(h);
          break;
        case 31:
          ga(e, t), va(t), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, lc(t, h)));
          break;
        case 13:
          ga(e, t), va(t), t.child.flags & 8192 && t.memoizedState !== null != (d !== null && d.memoizedState !== null) && (zv = wl()), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, lc(t, h)));
          break;
        case 22:
          y = t.memoizedState !== null;
          var E = d !== null && d.memoizedState !== null, q = zo, nt = Vl;
          if (zo = q || y, Vl = nt || E, ga(e, t), Vl = nt, zo = q, E && !y && !q && !nt && (t.mode & Ft) !== Ht && 0 <= Ot && 0 <= Ct && 0.05 < Ct - Ot && vd(
            t,
            Ot,
            Ct
          ), va(t), h & 8192)
            t: for (e = t.stateNode, e._visibility = y ? e._visibility & ~Bp : e._visibility | Bp, !y || d === null || E || zo || Vl || (ac(t), (t.mode & Ft) !== Ht && 0 <= Ot && 0 <= Ct && 0.05 < Ct - Ot && yn(
              t,
              Ot,
              Ct,
              "Disconnect"
            )), d = null, e = t; ; ) {
              if (e.tag === 5 || e.tag === 26) {
                if (d === null) {
                  E = d = e;
                  try {
                    p = E.stateNode, y ? ft(
                      E,
                      Ag,
                      p
                    ) : ft(
                      E,
                      zg,
                      E.stateNode,
                      E.memoizedProps
                    );
                  } catch (rt) {
                    Kt(E, E.return, rt);
                  }
                }
              } else if (e.tag === 6) {
                if (d === null) {
                  E = e;
                  try {
                    _ = E.stateNode, y ? ft(
                      E,
                      Og,
                      _
                    ) : ft(
                      E,
                      Dg,
                      _,
                      E.memoizedProps
                    );
                  } catch (rt) {
                    Kt(E, E.return, rt);
                  }
                }
              } else if (e.tag === 18) {
                if (d === null) {
                  E = e;
                  try {
                    M = E.stateNode, y ? ft(
                      E,
                      Tg,
                      M
                    ) : ft(
                      E,
                      _g,
                      E.stateNode
                    );
                  } catch (rt) {
                    Kt(E, E.return, rt);
                  }
                }
              } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
              }
              if (e === t) break t;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                  break t;
                d === e && (d = null), e = e.return;
              }
              d === e && (d = null), e.sibling.return = e.return, e = e.sibling;
            }
          h & 4 && (h = t.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, lc(t, d))));
          break;
        case 19:
          ga(e, t), va(t), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, lc(t, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          ga(e, t), va(t);
      }
      (t.mode & Ft) !== Ht && 0 <= Ot && 0 <= Ct && ((pl || 0.05 < fl) && Bn(
        t,
        Ot,
        Ct,
        fl,
        nl
      ), t.alternate === null && t.return !== null && t.return.alternate !== null && 0.05 < Ct - Ot && (Cy(
        t.return.alternate,
        t.return
      ) || yn(
        t,
        Ot,
        Ct,
        "Mount"
      ))), Nl(a), Va(i), nl = o, pl = f;
    }
    function va(t) {
      var e = t.flags;
      if (e & 2) {
        try {
          ft(t, Ry, t);
        } catch (a) {
          Kt(t, t.return, a);
        }
        t.flags &= -3;
      }
      e & 4096 && (t.flags &= -4097);
    }
    function ig(t) {
      if (t.subtreeFlags & 1024)
        for (t = t.child; t !== null; ) {
          var e = t;
          ig(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
        }
    }
    function Ia(t, e) {
      if (e.subtreeFlags & 8772)
        for (e = e.child; e !== null; )
          ah(t, e.alternate, e), e = e.sibling;
    }
    function nh(t) {
      var e = Ke(), a = vn(), i = Za(), o = Sn();
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Id(
            t,
            t.return,
            au
          ), ac(t);
          break;
        case 1:
          Tn(t, t.return);
          var f = t.stateNode;
          typeof f.componentWillUnmount == "function" && th(
            t,
            t.return,
            f
          ), ac(t);
          break;
        case 27:
          ft(
            t,
            vi,
            t.stateNode
          );
        case 26:
        case 5:
          Tn(t, t.return), ac(t);
          break;
        case 22:
          t.memoizedState === null && ac(t);
          break;
        case 30:
          ac(t);
          break;
        default:
          ac(t);
      }
      (t.mode & Ft) !== Ht && 0 <= Ot && 0 <= Ct && (pl || 0.05 < fl) && Bn(
        t,
        Ot,
        Ct,
        fl,
        nl
      ), Nl(e), Va(a), nl = i, pl = o;
    }
    function ac(t) {
      for (t = t.child; t !== null; )
        nh(t), t = t.sibling;
    }
    function xy(t, e, a, i) {
      var o = Ke(), f = vn(), d = Za(), h = Sn(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Zn(
            t,
            a,
            i
          ), eg(a, au);
          break;
        case 1:
          if (Zn(
            t,
            a,
            i
          ), e = a.stateNode, typeof e.componentDidMount == "function" && ft(
            a,
            q1,
            a,
            e
          ), e = a.updateQueue, e !== null) {
            t = a.stateNode;
            try {
              ft(
                a,
                ey,
                e,
                t
              );
            } catch (p) {
              Kt(a, a.return, p);
            }
          }
          i && y & 64 && _y(a), Pc(a, a.return);
          break;
        case 27:
          My(a);
        case 26:
        case 5:
          Zn(
            t,
            a,
            i
          ), i && e === null && y & 4 && ec(a), Pc(a, a.return);
          break;
        case 12:
          if (i && y & 4) {
            y = pu(), Zn(
              t,
              a,
              i
            ), i = a.stateNode, i.effectDuration += sa(y);
            try {
              ft(
                a,
                zy,
                a,
                e,
                kf,
                i.effectDuration
              );
            } catch (p) {
              Kt(a, a.return, p);
            }
          } else
            Zn(
              t,
              a,
              i
            );
          break;
        case 31:
          Zn(
            t,
            a,
            i
          ), i && y & 4 && Hy(t, a);
          break;
        case 13:
          Zn(
            t,
            a,
            i
          ), i && y & 4 && Ny(t, a);
          break;
        case 22:
          a.memoizedState === null && Zn(
            t,
            a,
            i
          ), Pc(a, a.return);
          break;
        case 30:
          break;
        default:
          Zn(
            t,
            a,
            i
          );
      }
      (a.mode & Ft) !== Ht && 0 <= Ot && 0 <= Ct && (pl || 0.05 < fl) && Bn(
        a,
        Ot,
        Ct,
        fl,
        nl
      ), Nl(o), Va(f), nl = d, pl = h;
    }
    function Zn(t, e, a) {
      for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; )
        xy(
          t,
          e.alternate,
          e,
          a
        ), e = e.sibling;
    }
    function ns(t, e) {
      var a = null;
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && jc(t), a != null && Cr(a));
    }
    function us(t, e) {
      t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (jc(e), t != null && Cr(t));
    }
    function Pa(t, e, a, i, o) {
      if (e.subtreeFlags & 10256 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child))
        for (e = e.child; e !== null; ) {
          var f = e.sibling;
          By(
            t,
            e,
            a,
            i,
            f !== null ? f.actualStartTime : o
          ), e = f;
        }
    }
    function By(t, e, a, i, o) {
      var f = Ke(), d = vn(), h = Za(), y = Sn(), p = Zf, _ = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (e.mode & Ft) !== Ht && 0 < e.actualStartTime && (e.flags & 1) !== 0 && Sd(
            e,
            e.actualStartTime,
            o,
            Fl,
            a
          ), Pa(
            t,
            e,
            a,
            i,
            o
          ), _ & 2048 && ts(e, rn | $u);
          break;
        case 1:
          (e.mode & Ft) !== Ht && 0 < e.actualStartTime && ((e.flags & 128) !== 0 ? wm(
            e,
            e.actualStartTime,
            o,
            []
          ) : (e.flags & 1) !== 0 && Sd(
            e,
            e.actualStartTime,
            o,
            Fl,
            a
          )), Pa(
            t,
            e,
            a,
            i,
            o
          );
          break;
        case 3:
          var M = pu(), E = Fl;
          Fl = e.alternate !== null && e.alternate.memoizedState.isDehydrated && (e.flags & 256) === 0, Pa(
            t,
            e,
            a,
            i,
            o
          ), Fl = E, _ & 2048 && (a = null, e.alternate !== null && (a = e.alternate.memoizedState.cache), i = e.memoizedState.cache, i !== a && (jc(i), a != null && Cr(a))), t.passiveEffectDuration += ko(
            M
          );
          break;
        case 12:
          if (_ & 2048) {
            _ = pu(), Pa(
              t,
              e,
              a,
              i,
              o
            ), t = e.stateNode, t.passiveEffectDuration += sa(_);
            try {
              ft(
                e,
                ng,
                e,
                e.alternate,
                kf,
                t.passiveEffectDuration
              );
            } catch (q) {
              Kt(e, e.return, q);
            }
          } else
            Pa(
              t,
              e,
              a,
              i,
              o
            );
          break;
        case 31:
          _ = Fl, M = e.alternate !== null ? e.alternate.memoizedState : null, E = e.memoizedState, M !== null && E === null ? (E = e.deletions, E !== null && 0 < E.length && E[0].tag === 18 ? (Fl = !1, M = M.hydrationErrors, M !== null && wm(
            e,
            e.actualStartTime,
            o,
            M
          )) : Fl = !0) : Fl = !1, Pa(
            t,
            e,
            a,
            i,
            o
          ), Fl = _;
          break;
        case 13:
          _ = Fl, M = e.alternate !== null ? e.alternate.memoizedState : null, E = e.memoizedState, M === null || M.dehydrated === null || E !== null && E.dehydrated !== null ? Fl = !1 : (E = e.deletions, E !== null && 0 < E.length && E[0].tag === 18 ? (Fl = !1, M = M.hydrationErrors, M !== null && wm(
            e,
            e.actualStartTime,
            o,
            M
          )) : Fl = !0), Pa(
            t,
            e,
            a,
            i,
            o
          ), Fl = _;
          break;
        case 23:
          break;
        case 22:
          E = e.stateNode, M = e.alternate, e.memoizedState !== null ? E._visibility & po ? Pa(
            t,
            e,
            a,
            i,
            o
          ) : to(
            t,
            e,
            a,
            i,
            o
          ) : E._visibility & po ? Pa(
            t,
            e,
            a,
            i,
            o
          ) : (E._visibility |= po, nc(
            t,
            e,
            a,
            i,
            (e.subtreeFlags & 10256) !== 0 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child),
            o
          ), (e.mode & Ft) === Ht || Fl || (t = e.actualStartTime, 0 <= t && 0.05 < o - t && vd(e, t, o), 0 <= Ot && 0 <= Ct && 0.05 < Ct - Ot && vd(
            e,
            Ot,
            Ct
          ))), _ & 2048 && ns(
            M,
            e
          );
          break;
        case 24:
          Pa(
            t,
            e,
            a,
            i,
            o
          ), _ & 2048 && us(e.alternate, e);
          break;
        default:
          Pa(
            t,
            e,
            a,
            i,
            o
          );
      }
      (e.mode & Ft) !== Ht && ((t = !Fl && e.alternate === null && e.return !== null && e.return.alternate !== null) && (a = e.actualStartTime, 0 <= a && 0.05 < o - a && yn(
        e,
        a,
        o,
        "Mount"
      )), 0 <= Ot && 0 <= Ct && ((pl || 0.05 < fl) && Bn(
        e,
        Ot,
        Ct,
        fl,
        nl
      ), t && 0.05 < Ct - Ot && yn(
        e,
        Ot,
        Ct,
        "Mount"
      ))), Nl(f), Va(d), nl = h, pl = y, Zf = p;
    }
    function nc(t, e, a, i, o, f) {
      for (o = o && ((e.subtreeFlags & 10256) !== 0 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child)), e = e.child; e !== null; ) {
        var d = e.sibling;
        is(
          t,
          e,
          a,
          i,
          o,
          d !== null ? d.actualStartTime : f
        ), e = d;
      }
    }
    function is(t, e, a, i, o, f) {
      var d = Ke(), h = vn(), y = Za(), p = Sn(), _ = Zf;
      o && (e.mode & Ft) !== Ht && 0 < e.actualStartTime && (e.flags & 1) !== 0 && Sd(
        e,
        e.actualStartTime,
        f,
        Fl,
        a
      );
      var M = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          nc(
            t,
            e,
            a,
            i,
            o,
            f
          ), ts(e, rn);
          break;
        case 23:
          break;
        case 22:
          var E = e.stateNode;
          e.memoizedState !== null ? E._visibility & po ? nc(
            t,
            e,
            a,
            i,
            o,
            f
          ) : to(
            t,
            e,
            a,
            i,
            f
          ) : (E._visibility |= po, nc(
            t,
            e,
            a,
            i,
            o,
            f
          )), o && M & 2048 && ns(
            e.alternate,
            e
          );
          break;
        case 24:
          nc(
            t,
            e,
            a,
            i,
            o,
            f
          ), o && M & 2048 && us(e.alternate, e);
          break;
        default:
          nc(
            t,
            e,
            a,
            i,
            o,
            f
          );
      }
      (e.mode & Ft) !== Ht && 0 <= Ot && 0 <= Ct && (pl || 0.05 < fl) && Bn(
        e,
        Ot,
        Ct,
        fl,
        nl
      ), Nl(d), Va(h), nl = y, pl = p, Zf = _;
    }
    function to(t, e, a, i, o) {
      if (e.subtreeFlags & 10256 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child))
        for (var f = e.child; f !== null; ) {
          e = f.sibling;
          var d = t, h = a, y = i, p = e !== null ? e.actualStartTime : o, _ = Zf;
          (f.mode & Ft) !== Ht && 0 < f.actualStartTime && (f.flags & 1) !== 0 && Sd(
            f,
            f.actualStartTime,
            p,
            Fl,
            h
          );
          var M = f.flags;
          switch (f.tag) {
            case 22:
              to(
                d,
                f,
                h,
                y,
                p
              ), M & 2048 && ns(f.alternate, f);
              break;
            case 24:
              to(
                d,
                f,
                h,
                y,
                p
              ), M & 2048 && us(f.alternate, f);
              break;
            default:
              to(
                d,
                f,
                h,
                y,
                p
              );
          }
          Zf = _, f = e;
        }
    }
    function eo(t, e, a) {
      if (t.subtreeFlags & e0)
        for (t = t.child; t !== null; )
          uh(
            t,
            e,
            a
          ), t = t.sibling;
    }
    function uh(t, e, a) {
      switch (t.tag) {
        case 26:
          eo(
            t,
            e,
            a
          ), t.flags & e0 && t.memoizedState !== null && up(
            a,
            Oi,
            t.memoizedState,
            t.memoizedProps
          );
          break;
        case 5:
          eo(
            t,
            e,
            a
          );
          break;
        case 3:
        case 4:
          var i = Oi;
          Oi = Oh(
            t.stateNode.containerInfo
          ), eo(
            t,
            e,
            a
          ), Oi = i;
          break;
        case 22:
          t.memoizedState === null && (i = t.alternate, i !== null && i.memoizedState !== null ? (i = e0, e0 = 16777216, eo(
            t,
            e,
            a
          ), e0 = i) : eo(
            t,
            e,
            a
          ));
          break;
        default:
          eo(
            t,
            e,
            a
          );
      }
    }
    function jy(t) {
      var e = t.alternate;
      if (e !== null && (t = e.child, t !== null)) {
        e.child = null;
        do
          e = t.sibling, t.sibling = null, t = e;
        while (t !== null);
      }
    }
    function tn(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var a = 0; a < e.length; a++) {
            var i = e[a], o = Ke();
            ca = i, Ru(
              i,
              t
            ), (i.mode & Ft) !== Ht && 0 <= Ot && 0 <= Ct && 0.05 < Ct - Ot && yn(
              i,
              Ot,
              Ct,
              "Unmount"
            ), Nl(o);
          }
        jy(t);
      }
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          ih(t), t = t.sibling;
    }
    function ih(t) {
      var e = Ke(), a = vn(), i = Za(), o = Sn();
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          tn(t), t.flags & 2048 && Pd(
            t,
            t.return,
            rn | $u
          );
          break;
        case 3:
          var f = pu();
          tn(t), t.stateNode.passiveEffectDuration += ko(f);
          break;
        case 12:
          f = pu(), tn(t), t.stateNode.passiveEffectDuration += sa(f);
          break;
        case 22:
          f = t.stateNode, t.memoizedState !== null && f._visibility & po && (t.return === null || t.return.tag !== 13) ? (f._visibility &= ~po, ch(t), (t.mode & Ft) !== Ht && 0 <= Ot && 0 <= Ct && 0.05 < Ct - Ot && yn(
            t,
            Ot,
            Ct,
            "Disconnect"
          )) : tn(t);
          break;
        default:
          tn(t);
      }
      (t.mode & Ft) !== Ht && 0 <= Ot && 0 <= Ct && (pl || 0.05 < fl) && Bn(
        t,
        Ot,
        Ct,
        fl,
        nl
      ), Nl(e), Va(a), pl = o, nl = i;
    }
    function ch(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var a = 0; a < e.length; a++) {
            var i = e[a], o = Ke();
            ca = i, Ru(
              i,
              t
            ), (i.mode & Ft) !== Ht && 0 <= Ot && 0 <= Ct && 0.05 < Ct - Ot && yn(
              i,
              Ot,
              Ct,
              "Unmount"
            ), Nl(o);
          }
        jy(t);
      }
      for (t = t.child; t !== null; )
        Yy(t), t = t.sibling;
    }
    function Yy(t) {
      var e = Ke(), a = vn(), i = Za(), o = Sn();
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Pd(
            t,
            t.return,
            rn
          ), ch(t);
          break;
        case 22:
          var f = t.stateNode;
          f._visibility & po && (f._visibility &= ~po, ch(t));
          break;
        default:
          ch(t);
      }
      (t.mode & Ft) !== Ht && 0 <= Ot && 0 <= Ct && (pl || 0.05 < fl) && Bn(
        t,
        Ot,
        Ct,
        fl,
        nl
      ), Nl(e), Va(a), pl = o, nl = i;
    }
    function Ru(t, e) {
      for (; ca !== null; ) {
        var a = ca, i = a, o = e, f = Ke(), d = vn(), h = Za(), y = Sn();
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Pd(
              i,
              o,
              rn
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool, o != null && jc(o));
            break;
          case 24:
            Cr(i.memoizedState.cache);
        }
        if ((i.mode & Ft) !== Ht && 0 <= Ot && 0 <= Ct && (pl || 0.05 < fl) && Bn(
          i,
          Ot,
          Ct,
          fl,
          nl
        ), Nl(f), Va(d), pl = y, nl = h, i = a.child, i !== null) i.return = a, ca = i;
        else
          t: for (a = t; ca !== null; ) {
            if (i = ca, f = i.sibling, d = i.return, ml(i), i === a) {
              ca = null;
              break t;
            }
            if (f !== null) {
              f.return = d, ca = f;
              break t;
            }
            ca = d;
          }
      }
    }
    function qy() {
      eT.forEach(function(t) {
        return t();
      });
    }
    function wy() {
      var t = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return t || G.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), t;
    }
    function aa(t) {
      if ((he & Il) !== oa && Pt !== 0)
        return Pt & -Pt;
      var e = G.T;
      return e !== null ? (e._updatedFibers || (e._updatedFibers = /* @__PURE__ */ new Set()), e._updatedFibers.add(t), ky()) : Ui();
    }
    function mf() {
      if (Mn === 0)
        if ((Pt & 536870912) === 0 || ce) {
          var t = Ms;
          Ms <<= 1, (Ms & 3932160) === 0 && (Ms = 262144), Mn = t;
        } else Mn = 536870912;
      return t = lu.current, t !== null && (t.flags |= 32), Mn;
    }
    function Nt(t, e, a) {
      if (gm && console.error("useInsertionEffect must not schedule updates."), oS && (Cv = !0), (t === Xe && (Ne === Zs || Ne === Js) || t.cancelPendingCommit !== null) && (Mu(t, 0), An(
        t,
        Pt,
        Mn,
        !1
      )), Cn(t, a), (he & Il) !== oa && t === Xe) {
        if (ju)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              t = le && dt(le) || "Unknown", c2.has(t) || (c2.add(t), e = dt(e) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                e,
                t,
                t
              ));
              break;
            case 1:
              i2 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), i2 = !0);
          }
      } else
        qu && Al(t, e, a), rs(e), t === Xe && ((he & Il) === oa && (ar |= a), rl === tr && An(
          t,
          Pt,
          Mn,
          !1
        )), Ma(t);
    }
    function cg(t, e, a) {
      if ((he & (Il | nu)) !== oa)
        throw Error("Should not already be working.");
      if (Pt !== 0 && le !== null) {
        var i = le, o = wl();
        switch (PS) {
          case n0:
          case Zs:
            var f = Xp;
            Fe && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Suspended",
                f,
                o,
                Gu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Suspended",
              f,
              o,
              Gu,
              void 0,
              "primary-light"
            ));
            break;
          case Js:
            f = Xp, Fe && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Action",
                f,
                o,
                Gu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Action",
              f,
              o,
              Gu,
              void 0,
              "primary-light"
            ));
            break;
          default:
            Fe && (i = o - Xp, 3 > i || console.timeStamp(
              "Blocked",
              Xp,
              o,
              Gu,
              void 0,
              5 > i ? "primary-light" : 10 > i ? "primary" : 100 > i ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || gl(t, e)) ? hi(t, e) : gf(t, e, !0);
      var d = a;
      do {
        if (f === Do) {
          ym && !a && An(t, e, 0, !1), e = Ne, Xp = Xl(), PS = e;
          break;
        } else {
          if (i = wl(), o = t.current.alternate, d && !fg(o)) {
            xn(e), o = ia, f = i, !Fe || f <= o || (El ? El.run(
              console.timeStamp.bind(
                console,
                "Teared Render",
                o,
                f,
                se,
                oe,
                "error"
              )
            ) : console.timeStamp(
              "Teared Render",
              o,
              f,
              se,
              oe,
              "error"
            )), uc(e, i), f = gf(t, e, !1), d = !1;
            continue;
          }
          if (f === Vs) {
            if (d = e, t.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = t.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              xn(e), Gm(
                ia,
                i,
                e,
                El
              ), uc(e, i), e = h;
              t: {
                i = t, f = d, d = i0;
                var y = i.current.memoizedState.isDehydrated;
                if (y && (Mu(i, h).flags |= 256), h = gf(
                  i,
                  h,
                  !1
                ), h !== Vs) {
                  if (tS && !y) {
                    i.errorRecoveryDisabledLanes |= f, ar |= f, f = tr;
                    break t;
                  }
                  i = sn, sn = d, i !== null && (sn === null ? sn = i : sn.push.apply(
                    sn,
                    i
                  ));
                }
                f = h;
              }
              if (d = !1, f !== Vs) continue;
              i = wl();
            }
          }
          if (f === a0) {
            xn(e), Gm(
              ia,
              i,
              e,
              El
            ), uc(e, i), Mu(t, 0), An(t, e, 0, !0);
            break;
          }
          t: {
            switch (a = t, f) {
              case Do:
              case a0:
                throw Error("Root did not complete. This is a bug in React.");
              case tr:
                if ((e & 4194048) !== e) break;
              case Tv:
                xn(e), Y0(
                  ia,
                  i,
                  e,
                  El
                ), uc(e, i), o = e, (o & 127) !== 0 ? cv = i : (o & 4194048) !== 0 && (ov = i), An(
                  a,
                  e,
                  Mn,
                  !er
                );
                break t;
              case Vs:
                sn = null;
                break;
              case Ev:
              case Kb:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (G.actQueue !== null)
              qe(
                a,
                o,
                e,
                sn,
                c0,
                _v,
                Mn,
                ar,
                Ks,
                f,
                null,
                null,
                ia,
                i
              );
            else {
              if ((e & 62914560) === e && (d = zv + Wb - wl(), 10 < d)) {
                if (An(
                  a,
                  e,
                  Mn,
                  !er
                ), bc(a, 0, !0) !== 0) break t;
                _i = e, a.timeoutHandle = y2(
                  og.bind(
                    null,
                    a,
                    o,
                    sn,
                    c0,
                    _v,
                    e,
                    Mn,
                    ar,
                    Ks,
                    er,
                    f,
                    "Throttled",
                    ia,
                    i
                  ),
                  d
                );
                break t;
              }
              og(
                a,
                o,
                sn,
                c0,
                _v,
                e,
                Mn,
                ar,
                Ks,
                er,
                f,
                null,
                ia,
                i
              );
            }
          }
        }
        break;
      } while (!0);
      Ma(t);
    }
    function og(t, e, a, i, o, f, d, h, y, p, _, M, E, q) {
      t.timeoutHandle = Is;
      var nt = e.subtreeFlags, rt = null;
      if ((nt & 8192 || (nt & 16785408) === 16785408) && (rt = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: mn
      }, uh(e, f, rt), nt = (f & 62914560) === f ? zv - wl() : (f & 4194048) === f ? kb - wl() : 0, nt = Dh(rt, nt), nt !== null)) {
        _i = f, t.cancelPendingCommit = nt(
          qe.bind(
            null,
            t,
            e,
            f,
            a,
            i,
            o,
            d,
            h,
            y,
            _,
            rt,
            rt.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < rt.count ? 0 < rt.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : rt.imgCount === 1 ? "Suspended on an Image" : 0 < rt.imgCount ? "Suspended on Images" : null,
            E,
            q
          )
        ), An(
          t,
          f,
          d,
          !p
        );
        return;
      }
      qe(
        t,
        e,
        f,
        a,
        i,
        o,
        d,
        h,
        y,
        _,
        rt,
        M,
        E,
        q
      );
    }
    function fg(t) {
      for (var e = t; ; ) {
        var a = e.tag;
        if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!cn(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = e.child, e.subtreeFlags & 16384 && a !== null)
          a.return = e, e = a;
        else {
          if (e === t) break;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) return !0;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      }
      return !0;
    }
    function An(t, e, a, i) {
      e &= ~eS, e &= ~ar, t.suspendedLanes |= e, t.pingedLanes &= ~e, i && (t.warmLanes |= e), i = t.expirationTimes;
      for (var o = e; 0 < o; ) {
        var f = 31 - kl(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && xo(t, a, e);
    }
    function en() {
      return (he & (Il | nu)) === oa ? (Uu(0), !1) : !0;
    }
    function oh() {
      if (le !== null) {
        if (Ne === Rn)
          var t = le.return;
        else
          t = le, Ko(), Vi(t), im = null, Wp = 0, t = le;
        for (; t !== null; )
          Oy(t.alternate, t), t = t.return;
        le = null;
      }
    }
    function uc(t, e) {
      (t & 127) !== 0 && (Bs = e), (t & 4194048) !== 0 && (Eo = e), (t & 62914560) !== 0 && (FS = e), (t & 2080374784) !== 0 && (IS = e);
    }
    function Mu(t, e) {
      Fe && (console.timeStamp(
        "Blocking Track",
        3e-3,
        3e-3,
        "Blocking",
        oe,
        "primary-light"
      ), console.timeStamp(
        "Transition Track",
        3e-3,
        3e-3,
        "Transition",
        oe,
        "primary-light"
      ), console.timeStamp(
        "Suspense Track",
        3e-3,
        3e-3,
        "Suspense",
        oe,
        "primary-light"
      ), console.timeStamp(
        "Idle Track",
        3e-3,
        3e-3,
        "Idle",
        oe,
        "primary-light"
      ));
      var a = ia;
      if (ia = Xl(), Pt !== 0 && 0 < a) {
        if (xn(Pt), rl === Ev || rl === tr)
          Y0(
            a,
            ia,
            e,
            El
          );
        else {
          var i = ia, o = El;
          if (Fe && !(i <= a)) {
            var f = (e & 738197653) === e ? "tertiary-dark" : "primary-dark", d = (e & 536870912) === e ? "Prewarm" : (e & 201326741) === e ? "Interrupted Hydration" : "Interrupted Render";
            o ? o.run(
              console.timeStamp.bind(
                console,
                d,
                a,
                i,
                se,
                oe,
                f
              )
            ) : console.timeStamp(
              d,
              a,
              i,
              se,
              oe,
              f
            );
          }
        }
        uc(Pt, ia);
      }
      if (a = El, El = null, (e & 127) !== 0) {
        El = qp, o = 0 <= pc && pc < Bs ? Bs : pc, i = 0 <= js && js < Bs ? Bs : js, f = 0 <= i ? i : 0 <= o ? o : ia, 0 <= cv ? (xn(2), q0(
          cv,
          f,
          e,
          a
        )) : fv & 127, a = o;
        var h = i, y = wp, p = 0 < am, _ = Wf === Yp, M = Wf === iv;
        if (o = ia, i = qp, f = N1, d = x1, Fe) {
          if (se = "Blocking", 0 < a ? a > o && (a = o) : a = o, 0 < h ? h > a && (h = a) : h = a, y !== null && a > h) {
            var E = p ? "secondary-light" : "warning";
            i ? i.run(
              console.timeStamp.bind(
                console,
                p ? "Consecutive" : "Event: " + y,
                h,
                a,
                se,
                oe,
                E
              )
            ) : console.timeStamp(
              p ? "Consecutive" : "Event: " + y,
              h,
              a,
              se,
              oe,
              E
            );
          }
          o > a && (h = _ ? "error" : (e & 738197653) === e ? "tertiary-light" : "primary-light", _ = M ? "Promise Resolved" : _ ? "Cascading Update" : 5 < o - a ? "Update Blocked" : "Update", M = [], d != null && M.push(["Component name", d]), f != null && M.push(["Method name", f]), a = {
            start: a,
            end: o,
            detail: {
              devtools: {
                properties: M,
                track: se,
                trackGroup: oe,
                color: h
              }
            }
          }, i ? i.run(
            performance.measure.bind(
              performance,
              _,
              a
            )
          ) : performance.measure(_, a));
        }
        pc = -1.1, Wf = 0, x1 = N1 = null, cv = -1.1, am = js, js = -1.1, Bs = Xl();
      }
      if ((e & 4194048) !== 0 && (El = Gp, o = 0 <= To && To < Eo ? Eo : To, a = 0 <= Ju && Ju < Eo ? Eo : Ju, i = 0 <= Ff && Ff < Eo ? Eo : Ff, f = 0 <= i ? i : 0 <= a ? a : ia, 0 <= ov ? (xn(256), q0(
        ov,
        f,
        e,
        El
      )) : fv & 4194048, M = i, h = Ys, y = 0 < If, p = B1 === iv, f = ia, i = Gp, d = kS, _ = WS, Fe && (se = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < M ? M > o && (M = o) : M = o, o > M && h !== null && (E = y ? "secondary-light" : "warning", i ? i.run(
        console.timeStamp.bind(
          console,
          y ? "Consecutive" : "Event: " + h,
          M,
          o,
          se,
          oe,
          E
        )
      ) : console.timeStamp(
        y ? "Consecutive" : "Event: " + h,
        M,
        o,
        se,
        oe,
        E
      )), a > o && (i ? i.run(
        console.timeStamp.bind(
          console,
          "Action",
          o,
          a,
          se,
          oe,
          "primary-dark"
        )
      ) : console.timeStamp(
        "Action",
        o,
        a,
        se,
        oe,
        "primary-dark"
      )), f > a && (o = p ? "Promise Resolved" : 5 < f - a ? "Update Blocked" : "Update", M = [], _ != null && M.push(["Component name", _]), d != null && M.push(["Method name", d]), a = {
        start: a,
        end: f,
        detail: {
          devtools: {
            properties: M,
            track: se,
            trackGroup: oe,
            color: "primary-light"
          }
        }
      }, i ? i.run(
        performance.measure.bind(
          performance,
          o,
          a
        )
      ) : performance.measure(o, a))), Ju = To = -1.1, B1 = 0, ov = -1.1, If = Ff, Ff = -1.1, Eo = Xl()), (e & 62914560) !== 0 && (fv & 62914560) !== 0 && (xn(4194304), Xm(FS, ia)), (e & 2080374784) !== 0 && (fv & 2080374784) !== 0 && (xn(268435456), Xm(IS, ia)), a = t.timeoutHandle, a !== Is && (t.timeoutHandle = Is, mT(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), _i = 0, oh(), Xe = t, le = a = mu(
        t.current,
        null
      ), Pt = e, Ne = Rn, uu = null, er = !1, ym = gl(t, e), tS = !1, rl = Do, Ks = Mn = eS = ar = lr = 0, sn = i0 = null, _v = !1, (e & 8) !== 0 && (e |= e & 32), i = t.entangledLanes, i !== 0)
        for (t = t.entanglements, i &= e; 0 < i; )
          o = 31 - kl(i), f = 1 << o, e |= t[o], i &= ~f;
      return vc = e, bd(), t = LS(), 1e3 < t - QS && (G.recentlyCreatedOwnerStacks = 0, QS = t), Ti.discardPendingWarnings(), a;
    }
    function Jn(t, e) {
      jt = null, G.H = t0, G.getCurrentStack = null, ju = !1, Na = null, e === um || e === hv ? (e = wc(), Ne = n0) : e === w1 ? (e = wc(), Ne = $b) : Ne = e === k1 ? P1 : e !== null && typeof e == "object" && typeof e.then == "function" ? u0 : Av, uu = e;
      var a = le;
      a === null ? (rl = a0, kr(
        t,
        ra(e, t.current)
      )) : a.mode & Ft && Dd(a);
    }
    function Gy() {
      var t = lu.current;
      return t === null ? !0 : (Pt & 4194048) === Pt ? Ku === null : (Pt & 62914560) === Pt || (Pt & 536870912) !== 0 ? t === Ku : !1;
    }
    function fh() {
      var t = G.H;
      return G.H = t0, t === null ? t0 : t;
    }
    function Xy() {
      var t = G.A;
      return G.A = tT, t;
    }
    function yf(t) {
      El === null && (El = t._debugTask == null ? null : t._debugTask);
    }
    function pf() {
      rl = tr, er || (Pt & 4194048) !== Pt && lu.current !== null || (ym = !0), (lr & 134217727) === 0 && (ar & 134217727) === 0 || Xe === null || An(
        Xe,
        Pt,
        Mn,
        !1
      );
    }
    function gf(t, e, a) {
      var i = he;
      he |= Il;
      var o = fh(), f = Xy();
      if (Xe !== t || Pt !== e) {
        if (qu) {
          var d = t.memoizedUpdaters;
          0 < d.size && (Sf(t, Pt), d.clear()), Ga(t, e);
        }
        c0 = null, Mu(t, e);
      }
      e = !1, d = rl;
      t: do
        try {
          if (Ne !== Rn && le !== null) {
            var h = le, y = uu;
            switch (Ne) {
              case P1:
                oh(), d = Tv;
                break t;
              case n0:
              case Zs:
              case Js:
              case u0:
                lu.current === null && (e = !0);
                var p = Ne;
                if (Ne = Rn, uu = null, vf(t, h, y, p), a && ym) {
                  d = Do;
                  break t;
                }
                break;
              default:
                p = Ne, Ne = Rn, uu = null, vf(t, h, y, p);
            }
          }
          Qy(), d = rl;
          break;
        } catch (_) {
          Jn(t, _);
        }
      while (!0);
      return e && t.shellSuspendCounter++, Ko(), he = i, G.H = o, G.A = f, le === null && (Xe = null, Pt = 0, bd()), d;
    }
    function Qy() {
      for (; le !== null; ) rh(le);
    }
    function hi(t, e) {
      var a = he;
      he |= Il;
      var i = fh(), o = Xy();
      if (Xe !== t || Pt !== e) {
        if (qu) {
          var f = t.memoizedUpdaters;
          0 < f.size && (Sf(t, Pt), f.clear()), Ga(t, e);
        }
        c0 = null, Dv = wl() + Fb, Mu(t, e);
      } else
        ym = gl(
          t,
          e
        );
      t: do
        try {
          if (Ne !== Rn && le !== null)
            e: switch (e = le, f = uu, Ne) {
              case Av:
                Ne = Rn, uu = null, vf(
                  t,
                  e,
                  f,
                  Av
                );
                break;
              case Zs:
              case Js:
                if (Pm(f)) {
                  Ne = Rn, uu = null, Ly(e);
                  break;
                }
                e = function() {
                  Ne !== Zs && Ne !== Js || Xe !== t || (Ne = Ov), Ma(t);
                }, f.then(e, e);
                break t;
              case n0:
                Ne = Ov;
                break t;
              case $b:
                Ne = I1;
                break t;
              case Ov:
                Pm(f) ? (Ne = Rn, uu = null, Ly(e)) : (Ne = Rn, uu = null, vf(
                  t,
                  e,
                  f,
                  Ov
                ));
                break;
              case I1:
                var d = null;
                switch (le.tag) {
                  case 26:
                    d = le.memoizedState;
                  case 5:
                  case 27:
                    var h = le;
                    if (d ? ne(d) : h.stateNode.complete) {
                      Ne = Rn, uu = null;
                      var y = h.sibling;
                      if (y !== null) le = y;
                      else {
                        var p = h.return;
                        p !== null ? (le = p, cs(p)) : le = null;
                      }
                      break e;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                Ne = Rn, uu = null, vf(
                  t,
                  e,
                  f,
                  I1
                );
                break;
              case u0:
                Ne = Rn, uu = null, vf(
                  t,
                  e,
                  f,
                  u0
                );
                break;
              case P1:
                oh(), rl = Tv;
                break t;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          G.actQueue !== null ? Qy() : Sl();
          break;
        } catch (_) {
          Jn(t, _);
        }
      while (!0);
      return Ko(), G.H = i, G.A = o, he = a, le !== null ? Do : (Xe = null, Pt = 0, bd(), rl);
    }
    function Sl() {
      for (; le !== null && !qh(); )
        rh(le);
    }
    function rh(t) {
      var e = t.alternate;
      (t.mode & Ft) !== Ht ? (li(t), e = ft(
        t,
        Pr,
        e,
        t,
        vc
      ), Dd(t)) : e = ft(
        t,
        Pr,
        e,
        t,
        vc
      ), t.memoizedProps = t.pendingProps, e === null ? cs(t) : le = e;
    }
    function Ly(t) {
      var e = ft(t, ql, t);
      t.memoizedProps = t.pendingProps, e === null ? cs(t) : le = e;
    }
    function ql(t) {
      var e = t.alternate, a = (t.mode & Ft) !== Ht;
      switch (a && li(t), t.tag) {
        case 15:
        case 0:
          e = vy(
            e,
            t,
            t.pendingProps,
            t.type,
            void 0,
            Pt
          );
          break;
        case 11:
          e = vy(
            e,
            t,
            t.pendingProps,
            t.type.render,
            t.ref,
            Pt
          );
          break;
        case 5:
          Vi(t);
        default:
          Oy(e, t), t = le = Zm(t, vc), e = Pr(e, t, vc);
      }
      return a && Dd(t), e;
    }
    function vf(t, e, a, i) {
      Ko(), Vi(e), im = null, Wp = 0;
      var o = e.return;
      try {
        if (sy(
          t,
          o,
          e,
          a,
          Pt
        )) {
          rl = a0, kr(
            t,
            ra(a, t.current)
          ), le = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw le = o, f;
        rl = a0, kr(
          t,
          ra(a, t.current)
        ), le = null;
        return;
      }
      e.flags & 32768 ? (ce || i === Av ? t = !0 : ym || (Pt & 536870912) !== 0 ? t = !1 : (er = t = !0, (i === Zs || i === Js || i === n0 || i === u0) && (i = lu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Vy(e, t)) : cs(e);
    }
    function cs(t) {
      var e = t;
      do {
        if ((e.flags & 32768) !== 0) {
          Vy(
            e,
            er
          );
          return;
        }
        var a = e.alternate;
        if (t = e.return, li(e), a = ft(
          e,
          Ay,
          a,
          e,
          vc
        ), (e.mode & Ft) !== Ht && Ur(e), a !== null) {
          le = a;
          return;
        }
        if (e = e.sibling, e !== null) {
          le = e;
          return;
        }
        le = e = t;
      } while (e !== null);
      rl === Do && (rl = Kb);
    }
    function Vy(t, e) {
      do {
        var a = tg(t.alternate, t);
        if (a !== null) {
          a.flags &= 32767, le = a;
          return;
        }
        if ((t.mode & Ft) !== Ht) {
          Ur(t), a = t.actualDuration;
          for (var i = t.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          t.actualDuration = a;
        }
        if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
          le = t;
          return;
        }
        le = t = a;
      } while (t !== null);
      rl = Tv, le = null;
    }
    function qe(t, e, a, i, o, f, d, h, y, p, _, M, E, q) {
      t.cancelPendingCommit = null;
      do
        os();
      while (Jl !== ur);
      if (Ti.flushLegacyContextWarning(), Ti.flushPendingUnsafeLifecycleWarnings(), (he & (Il | nu)) !== oa)
        throw Error("Should not already be working.");
      if (xn(a), p === Vs ? Gm(
        E,
        q,
        a,
        El
      ) : i !== null ? l1(
        E,
        q,
        a,
        i,
        e !== null && e.alternate !== null && e.alternate.memoizedState.isDehydrated && (e.flags & 256) !== 0,
        El
      ) : e1(
        E,
        q,
        a,
        El
      ), e !== null) {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), e === t.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = e.lanes | e.childLanes, f |= R1, ld(
          t,
          a,
          f,
          d,
          h,
          y
        ), t === Xe && (le = Xe = null, Pt = 0), pm = e, ir = t, _i = a, nS = f, iS = o, a2 = i, uS = q, n2 = M, zi = Rv, u2 = null, e.actualDuration !== 0 || (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, bf(so, function() {
          return h0 = window.event, zi === Rv && (zi = aS), fs(), null;
        })) : (t.callbackNode = null, t.callbackPriority = 0), bo = null, kf = Xl(), M !== null && a1(
          q,
          kf,
          M,
          El
        ), i = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || i) {
          i = G.T, G.T = null, o = be.p, be.p = Rl, d = he, he |= nu;
          try {
            i1(t, e, a);
          } finally {
            he = d, be.p = o, G.T = i;
          }
        }
        Jl = Pb, Sa(), Cu(), Zy();
      }
    }
    function Sa() {
      if (Jl === Pb) {
        Jl = ur;
        var t = ir, e = pm, a = _i, i = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || i) {
          i = G.T, G.T = null;
          var o = be.p;
          be.p = Rl;
          var f = he;
          he |= nu;
          try {
            hm = a, mm = t, Yc(), as(e, t), mm = hm = null, a = gS;
            var d = gd(t.containerInfo), h = a.focusedElem, y = a.selectionRange;
            if (d !== h && h && h.ownerDocument && N0(
              h.ownerDocument.documentElement,
              h
            )) {
              if (y !== null && Ym(h)) {
                var p = y.start, _ = y.end;
                if (_ === void 0 && (_ = p), "selectionStart" in h)
                  h.selectionStart = p, h.selectionEnd = Math.min(
                    _,
                    h.value.length
                  );
                else {
                  var M = h.ownerDocument || document, E = M && M.defaultView || window;
                  if (E.getSelection) {
                    var q = E.getSelection(), nt = h.textContent.length, rt = Math.min(
                      y.start,
                      nt
                    ), Ze = y.end === void 0 ? rt : Math.min(y.end, nt);
                    !q.extend && rt > Ze && (d = Ze, Ze = rt, rt = d);
                    var fe = H0(
                      h,
                      rt
                    ), b = H0(
                      h,
                      Ze
                    );
                    if (fe && b && (q.rangeCount !== 1 || q.anchorNode !== fe.node || q.anchorOffset !== fe.offset || q.focusNode !== b.node || q.focusOffset !== b.offset)) {
                      var T = M.createRange();
                      T.setStart(fe.node, fe.offset), q.removeAllRanges(), rt > Ze ? (q.addRange(T), q.extend(b.node, b.offset)) : (T.setEnd(b.node, b.offset), q.addRange(T));
                    }
                  }
                }
              }
              for (M = [], q = h; q = q.parentNode; )
                q.nodeType === 1 && M.push({
                  element: q,
                  left: q.scrollLeft,
                  top: q.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < M.length; h++) {
                var O = M[h];
                O.element.scrollLeft = O.left, O.element.scrollTop = O.top;
              }
            }
            Vv = !!pS, gS = pS = null;
          } finally {
            he = f, be.p = o, G.T = i;
          }
        }
        t.current = e, Jl = t2;
      }
    }
    function Cu() {
      if (Jl === t2) {
        Jl = ur;
        var t = u2;
        if (t !== null) {
          kf = Xl();
          var e = So, a = kf;
          !Fe || a <= e || console.timeStamp(
            t,
            e,
            a,
            se,
            oe,
            "secondary-light"
          );
        }
        t = ir, e = pm, a = _i;
        var i = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || i) {
          i = G.T, G.T = null;
          var o = be.p;
          be.p = Rl;
          var f = he;
          he |= nu;
          try {
            hm = a, mm = t, Yc(), ah(
              t,
              e.alternate,
              e
            ), mm = hm = null;
          } finally {
            he = f, be.p = o, G.T = i;
          }
        }
        t = uS, e = n2, So = Xl(), t = e === null ? t : kf, e = So, a = zi === lS, i = El, bo !== null ? w0(
          t,
          e,
          bo,
          !1,
          i
        ) : !Fe || e <= t || (i ? i.run(
          console.timeStamp.bind(
            console,
            a ? "Commit Interrupted View Transition" : "Commit",
            t,
            e,
            se,
            oe,
            a ? "error" : "secondary-dark"
          )
        ) : console.timeStamp(
          a ? "Commit Interrupted View Transition" : "Commit",
          t,
          e,
          se,
          oe,
          a ? "error" : "secondary-dark"
        )), Jl = e2;
      }
    }
    function Zy() {
      if (Jl === l2 || Jl === e2) {
        if (Jl === l2) {
          var t = So;
          So = Xl();
          var e = So, a = zi === lS;
          !Fe || e <= t || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            t,
            e,
            se,
            oe,
            a ? " error" : "secondary-light"
          ), zi !== lS && (zi = Ib);
        }
        Jl = ur, wh(), t = ir;
        var i = pm;
        e = _i, a = a2;
        var o = i.actualDuration !== 0 || (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0;
        o ? Jl = Mv : (Jl = ur, pm = ir = null, Jy(
          t,
          t.pendingLanes
        ), $s = 0, f0 = null);
        var f = t.pendingLanes;
        if (f === 0 && (nr = null), o || hh(t), f = Ul(e), i = i.stateNode, Dl && typeof Dl.onCommitFiberRoot == "function")
          try {
            var d = (i.current.flags & 128) === 128;
            switch (f) {
              case Rl:
                var h = Tp;
                break;
              case Wl:
                h = Gh;
                break;
              case ua:
                h = so;
                break;
              case hc:
                h = Xh;
                break;
              default:
                h = so;
            }
            Dl.onCommitFiberRoot(
              ho,
              i,
              h,
              d
            );
          } catch (M) {
            Yu || (Yu = !0, console.error(
              "React instrumentation encountered an error: %o",
              M
            ));
          }
        if (qu && t.memoizedUpdaters.clear(), qy(), a !== null) {
          d = G.T, h = be.p, be.p = Rl, G.T = null;
          try {
            var y = t.onRecoverableError;
            for (i = 0; i < a.length; i++) {
              var p = a[i], _ = rg(p.stack);
              ft(
                p.source,
                y,
                p.value,
                _
              );
            }
          } finally {
            G.T = d, be.p = h;
          }
        }
        (_i & 3) !== 0 && os(), Ma(t), f = t.pendingLanes, (e & 261930) !== 0 && (f & 42) !== 0 ? (sv = !0, t === cS ? o0++ : (o0 = 0, cS = t)) : o0 = 0, o || uc(e, So), Uu(0);
      }
    }
    function rg(t) {
      return t = { componentStack: t }, Object.defineProperty(t, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), t;
    }
    function Jy(t, e) {
      (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Cr(e)));
    }
    function os() {
      return Sa(), Cu(), Zy(), fs();
    }
    function fs() {
      if (Jl !== Mv) return !1;
      var t = ir, e = nS;
      nS = 0;
      var a = Ul(_i), i = ua > a ? ua : a;
      a = G.T;
      var o = be.p;
      try {
        be.p = i, G.T = null;
        var f = iS;
        iS = null, i = ir;
        var d = _i;
        if (Jl = ur, pm = ir = null, _i = 0, (he & (Il | nu)) !== oa)
          throw Error("Cannot flush passive effects while already rendering.");
        xn(d), oS = !0, Cv = !1;
        var h = 0;
        if (bo = null, h = wl(), zi === Ib)
          Xm(
            So,
            h,
            KE
          );
        else {
          var y = So, p = h, _ = zi === aS;
          !Fe || p <= y || (El ? El.run(
            console.timeStamp.bind(
              console,
              _ ? "Waiting for Paint" : "Waiting",
              y,
              p,
              se,
              oe,
              "secondary-light"
            )
          ) : console.timeStamp(
            _ ? "Waiting for Paint" : "Waiting",
            y,
            p,
            se,
            oe,
            "secondary-light"
          ));
        }
        y = he, he |= nu;
        var M = i.current;
        Yc(), ih(M);
        var E = i.current;
        M = uS, Yc(), By(
          i,
          E,
          d,
          f,
          M
        ), hh(i), he = y;
        var q = wl();
        if (E = h, M = El, bo !== null ? w0(
          E,
          q,
          bo,
          !0,
          M
        ) : !Fe || q <= E || (M ? M.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            E,
            q,
            se,
            oe,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          E,
          q,
          se,
          oe,
          "secondary-dark"
        )), uc(d, q), Uu(0, !1), Cv ? i === f0 ? $s++ : ($s = 0, f0 = i) : $s = 0, Cv = oS = !1, Dl && typeof Dl.onPostCommitFiberRoot == "function")
          try {
            Dl.onPostCommitFiberRoot(ho, i);
          } catch (rt) {
            Yu || (Yu = !0, console.error(
              "React instrumentation encountered an error: %o",
              rt
            ));
          }
        var nt = i.current.stateNode;
        return nt.effectDuration = 0, nt.passiveEffectDuration = 0, !0;
      } finally {
        be.p = o, G.T = a, Jy(t, e);
      }
    }
    function ba(t, e, a) {
      e = ra(a, e), Z0(e), e = Ld(t.stateNode, e, 2), t = vu(t, e, 2), t !== null && (Cn(t, 2), Ma(t));
    }
    function Kt(t, e, a) {
      if (gm = !1, t.tag === 3)
        ba(t, t, a);
      else {
        for (; e !== null; ) {
          if (e.tag === 3) {
            ba(
              e,
              t,
              a
            );
            return;
          }
          if (e.tag === 1) {
            var i = e.stateNode;
            if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (nr === null || !nr.has(i))) {
              t = ra(a, t), Z0(t), a = Vd(2), i = vu(e, a, 2), i !== null && (Zd(
                a,
                i,
                e,
                t
              ), Cn(i, 2), Ma(i));
              return;
            }
          }
          e = e.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function sh(t, e, a) {
      var i = t.pingCache;
      if (i === null) {
        i = t.pingCache = new lT();
        var o = /* @__PURE__ */ new Set();
        i.set(e, o);
      } else
        o = i.get(e), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(e, o));
      o.has(a) || (tS = !0, o.add(a), i = Ra.bind(null, t, e, a), qu && Sf(t, a), e.then(i, i));
    }
    function Ra(t, e, a) {
      var i = t.pingCache;
      i !== null && i.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, (a & 127) !== 0 ? 0 > pc && (Bs = pc = Xl(), qp = uv("Promise Resolved"), Wf = iv) : (a & 4194048) !== 0 && 0 > Ju && (Eo = Ju = Xl(), Gp = uv("Promise Resolved"), B1 = iv), wy() && G.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Xe === t && (Pt & a) === a && (rl === tr || rl === Ev && (Pt & 62914560) === Pt && wl() - zv < Wb ? (he & Il) === oa && Mu(t, 0) : eS |= a, Ks === Pt && (Ks = 0)), Ma(t);
    }
    function Ky(t, e) {
      e === 0 && (e = Ho()), t = ea(t, e), t !== null && (Cn(t, e), Ma(t));
    }
    function mi(t) {
      var e = t.memoizedState, a = 0;
      e !== null && (a = e.retryLane), Ky(t, a);
    }
    function lo(t, e) {
      var a = 0;
      switch (t.tag) {
        case 31:
        case 13:
          var i = t.stateNode, o = t.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = t.stateNode;
          break;
        case 22:
          i = t.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(e), Ky(t, a);
    }
    function Kn(t, e, a) {
      if ((e.subtreeFlags & 67117056) !== 0)
        for (e = e.child; e !== null; ) {
          var i = t, o = e, f = o.type === Aa;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && ft(
            o,
            dh,
            i,
            o
          ) : Kn(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? ft(
            o,
            dh,
            i,
            o
          ) : o.subtreeFlags & 67108864 && ft(
            o,
            Kn,
            i,
            o,
            f
          )), e = e.sibling;
        }
    }
    function dh(t, e) {
      ht(!0);
      try {
        nh(e), Yy(e), xy(t, e.alternate, e, !1), is(t, e, 0, null, !1, 0);
      } finally {
        ht(!1);
      }
    }
    function hh(t) {
      var e = !0;
      t.current.mode & (xa | Ei) || (e = !1), Kn(
        t,
        t.current,
        e
      );
    }
    function On(t) {
      if ((he & Il) === oa) {
        var e = t.tag;
        if (e === 3 || e === 1 || e === 0 || e === 11 || e === 14 || e === 15) {
          if (e = dt(t) || "ReactComponent", Uv !== null) {
            if (Uv.has(e)) return;
            Uv.add(e);
          } else Uv = /* @__PURE__ */ new Set([e]);
          ft(t, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function Sf(t, e) {
      qu && t.memoizedUpdaters.forEach(function(a) {
        Al(t, a, e);
      });
    }
    function bf(t, e) {
      var a = G.actQueue;
      return a !== null ? (a.push(e), uT) : Ep(t, e);
    }
    function rs(t) {
      wy() && G.actQueue === null && ft(t, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          dt(t)
        );
      });
    }
    function Ma(t) {
      t !== vm && t.next === null && (vm === null ? Hv = vm = t : vm = vm.next = t), Nv = !0, G.actQueue !== null ? rS || (rS = !0, dg()) : fS || (fS = !0, dg());
    }
    function Uu(t, e) {
      if (!sS && Nv) {
        sS = !0;
        do
          for (var a = !1, i = Hv; i !== null; ) {
            if (t !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - kl(42 | t) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, ss(i, f));
            } else
              f = Pt, f = bc(
                i,
                i === Xe ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== Is
              ), (f & 3) === 0 || gl(i, f) || (a = !0, ss(i, f));
            i = i.next;
          }
        while (a);
        sS = !1;
      }
    }
    function sg() {
      h0 = window.event, mh();
    }
    function mh() {
      Nv = rS = fS = !1;
      var t = 0;
      cr !== 0 && Fy() && (t = cr);
      for (var e = wl(), a = null, i = Hv; i !== null; ) {
        var o = i.next, f = Ef(i, e);
        f === 0 ? (i.next = null, a === null ? Hv = o : a.next = o, o === null && (vm = a)) : (a = i, (t !== 0 || (f & 3) !== 0) && (Nv = !0)), i = o;
      }
      Jl !== ur && Jl !== Mv || Uu(t), cr !== 0 && (cr = 0);
    }
    function Ef(t, e) {
      for (var a = t.suspendedLanes, i = t.pingedLanes, o = t.expirationTimes, f = t.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - kl(f), h = 1 << d, y = o[d];
        y === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = ed(h, e)) : y <= e && (t.expiredLanes |= h), f &= ~h;
      }
      if (e = Xe, a = Pt, a = bc(
        t,
        t === e ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== Is
      ), i = t.callbackNode, a === 0 || t === e && (Ne === Zs || Ne === Js) || t.cancelPendingCommit !== null)
        return i !== null && yh(i), t.callbackNode = null, t.callbackPriority = 0;
      if ((a & 3) === 0 || gl(t, a)) {
        if (e = a & -a, e !== t.callbackPriority || G.actQueue !== null && i !== dS)
          yh(i);
        else return e;
        switch (Ul(a)) {
          case Rl:
          case Wl:
            a = Gh;
            break;
          case ua:
            a = so;
            break;
          case hc:
            a = Xh;
            break;
          default:
            a = so;
        }
        return i = $y.bind(null, t), G.actQueue !== null ? (G.actQueue.push(i), a = dS) : a = Ep(a, i), t.callbackPriority = e, t.callbackNode = a, e;
      }
      return i !== null && yh(i), t.callbackPriority = 2, t.callbackNode = null, 2;
    }
    function $y(t, e) {
      if (sv = rv = !1, h0 = window.event, Jl !== ur && Jl !== Mv)
        return t.callbackNode = null, t.callbackPriority = 0, null;
      var a = t.callbackNode;
      if (zi === Rv && (zi = aS), os() && t.callbackNode !== a)
        return null;
      var i = Pt;
      return i = bc(
        t,
        t === Xe ? i : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== Is
      ), i === 0 ? null : (cg(
        t,
        i,
        e
      ), Ef(t, wl()), t.callbackNode != null && t.callbackNode === a ? $y.bind(null, t) : null);
    }
    function ss(t, e) {
      if (os()) return null;
      rv = sv, sv = !1, cg(t, e, !0);
    }
    function yh(t) {
      t !== dS && t !== null && Yh(t);
    }
    function dg() {
      G.actQueue !== null && G.actQueue.push(function() {
        return mh(), null;
      }), yT(function() {
        (he & (Il | nu)) !== oa ? Ep(
          Tp,
          sg
        ) : mh();
      });
    }
    function ky() {
      if (cr === 0) {
        var t = qs;
        t === 0 && (t = wf, wf <<= 1, (wf & 261888) === 0 && (wf = 256)), cr = t;
      }
      return cr;
    }
    function pe(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : (ye(t, "action"), br("" + t));
    }
    function Ce(t, e) {
      var a = e.ownerDocument.createElement("input");
      return a.name = e.name, a.value = e.value, t.id && a.setAttribute("form", t.id), e.parentNode.insertBefore(a, e), t = new FormData(t), a.parentNode.removeChild(a), t;
    }
    function ie(t, e, a, i, o) {
      if (e === "submit" && a && a.stateNode === o) {
        var f = pe(
          (o[Oa] || null).action
        ), d = i.submitter;
        d && (e = (e = d[Oa] || null) ? pe(e.formAction) : d.getAttribute("formAction"), e !== null && (f = e, d = null));
        var h = new Ig(
          "action",
          "action",
          null,
          i,
          o
        );
        t.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (cr !== 0) {
                    var y = d ? Ce(
                      o,
                      d
                    ) : new FormData(o), p = {
                      pending: !0,
                      data: y,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(p), ri(
                      a,
                      p,
                      null,
                      y
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), y = d ? Ce(
                    o,
                    d
                  ) : new FormData(o), p = {
                    pending: !0,
                    data: y,
                    method: o.method,
                    action: f
                  }, Object.freeze(p), ri(
                    a,
                    p,
                    f,
                    y
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function ee(t, e, a) {
      t.currentTarget = a;
      try {
        e(t);
      } catch (i) {
        O1(i);
      }
      t.currentTarget = null;
    }
    function Oe(t, e) {
      e = (e & 4) !== 0;
      for (var a = 0; a < t.length; a++) {
        var i = t[a];
        t: {
          var o = void 0, f = i.event;
          if (i = i.listeners, e)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], y = h.instance, p = h.currentTarget;
              if (h = h.listener, y !== o && f.isPropagationStopped())
                break t;
              y !== null ? ft(
                y,
                ee,
                f,
                h,
                p
              ) : ee(f, h, p), o = y;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], y = h.instance, p = h.currentTarget, h = h.listener, y !== o && f.isPropagationStopped())
                break t;
              y !== null ? ft(
                y,
                ee,
                f,
                h,
                p
              ) : ee(f, h, p), o = y;
            }
        }
      }
    }
    function Ut(t, e) {
      hS.has(t) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        t
      );
      var a = e[mo];
      a === void 0 && (a = e[mo] = /* @__PURE__ */ new Set());
      var i = t + "__bubble";
      a.has(i) || (ph(e, t, 2, !1), a.add(i));
    }
    function Hu(t, e, a) {
      hS.has(t) && !e && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        t
      );
      var i = 0;
      e && (i |= 4), ph(
        a,
        t,
        i,
        e
      );
    }
    function ic(t) {
      if (!t[xv]) {
        t[xv] = !0, Kg.forEach(function(a) {
          a !== "selectionchange" && (hS.has(a) || Hu(a, !1, t), Hu(a, !0, t));
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[xv] || (e[xv] = !0, Hu("selectionchange", !1, e));
      }
    }
    function ph(t, e, a, i) {
      switch (Ch(e)) {
        case Rl:
          var o = rp;
          break;
        case Wl:
          o = $l;
          break;
        default:
          o = sp;
      }
      a = o.bind(
        null,
        e,
        a,
        t
      ), o = void 0, !m1 || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (o = !0), i ? o !== void 0 ? t.addEventListener(e, a, {
        capture: !0,
        passive: o
      }) : t.addEventListener(e, a, !0) : o !== void 0 ? t.addEventListener(e, a, {
        passive: o
      }) : t.addEventListener(
        e,
        a,
        !1
      );
    }
    function $n(t, e, a, i, o) {
      var f = i;
      if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
        t: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var y = d.tag;
                if ((y === 3 || y === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = P(h), d === null) return;
              if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                i = f = d;
                continue t;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      hd(function() {
        var p = f, _ = Hn(a), M = [];
        t: {
          var E = XS.get(t);
          if (E !== void 0) {
            var q = Ig, nt = t;
            switch (t) {
              case "keypress":
                if (Er(a) === 0) break t;
              case "keydown":
              case "keyup":
                q = bE;
                break;
              case "focusin":
                nt = "focus", q = v1;
                break;
              case "focusout":
                nt = "blur", q = v1;
                break;
              case "beforeblur":
              case "afterblur":
                q = v1;
                break;
              case "click":
                if (a.button === 2) break t;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                q = DS;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                q = oE;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                q = AE;
                break;
              case YS:
              case qS:
              case wS:
                q = sE;
                break;
              case GS:
                q = _E;
                break;
              case "scroll":
              case "scrollend":
                q = iE;
                break;
              case "wheel":
                q = DE;
                break;
              case "copy":
              case "cut":
              case "paste":
                q = hE;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                q = MS;
                break;
              case "toggle":
              case "beforetoggle":
                q = ME;
            }
            var rt = (e & 4) !== 0, Ze = !rt && (t === "scroll" || t === "scrollend"), fe = rt ? E !== null ? E + "Capture" : null : E;
            rt = [];
            for (var b = p, T; b !== null; ) {
              var O = b;
              if (T = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || T === null || fe === null || (O = du(b, fe), O != null && rt.push(
                we(
                  b,
                  O,
                  T
                )
              )), Ze) break;
              b = b.return;
            }
            0 < rt.length && (E = new q(
              E,
              nt,
              null,
              a,
              _
            ), M.push({
              event: E,
              listeners: rt
            }));
          }
        }
        if ((e & 7) === 0) {
          t: {
            if (E = t === "mouseover" || t === "pointerover", q = t === "mouseout" || t === "pointerout", E && a !== Dp && (nt = a.relatedTarget || a.fromElement) && (P(nt) || nt[bi]))
              break t;
            if ((q || E) && (E = _.window === _ ? _ : (E = _.ownerDocument) ? E.defaultView || E.parentWindow : window, q ? (nt = a.relatedTarget || a.toElement, q = p, nt = nt ? P(nt) : null, nt !== null && (Ze = ae(nt), rt = nt.tag, nt !== Ze || rt !== 5 && rt !== 27 && rt !== 6) && (nt = null)) : (q = null, nt = p), q !== nt)) {
              if (rt = DS, O = "onMouseLeave", fe = "onMouseEnter", b = "mouse", (t === "pointerout" || t === "pointerover") && (rt = MS, O = "onPointerLeave", fe = "onPointerEnter", b = "pointer"), Ze = q == null ? E : mt(q), T = nt == null ? E : mt(nt), E = new rt(
                O,
                b + "leave",
                q,
                a,
                _
              ), E.target = Ze, E.relatedTarget = T, O = null, P(_) === p && (rt = new rt(
                fe,
                b + "enter",
                nt,
                a,
                _
              ), rt.target = T, rt.relatedTarget = Ze, O = rt), Ze = O, q && nt)
                e: {
                  for (rt = ao, fe = q, b = nt, T = 0, O = fe; O; O = rt(O))
                    T++;
                  O = 0;
                  for (var J = b; J; J = rt(J))
                    O++;
                  for (; 0 < T - O; )
                    fe = rt(fe), T--;
                  for (; 0 < O - T; )
                    b = rt(b), O--;
                  for (; T--; ) {
                    if (fe === b || b !== null && fe === b.alternate) {
                      rt = fe;
                      break e;
                    }
                    fe = rt(fe), b = rt(b);
                  }
                  rt = null;
                }
              else rt = null;
              q !== null && gh(
                M,
                E,
                q,
                rt,
                !1
              ), nt !== null && Ze !== null && gh(
                M,
                Ze,
                nt,
                rt,
                !0
              );
            }
          }
          t: {
            if (E = p ? mt(p) : window, q = E.nodeName && E.nodeName.toLowerCase(), q === "select" || q === "input" && E.type === "file")
              var ct = ji;
            else if (xm(E))
              if (BS)
                ct = _r;
              else {
                ct = Bm;
                var Yt = t1;
              }
            else
              q = E.nodeName, !q || q.toLowerCase() !== "input" || E.type !== "checkbox" && E.type !== "radio" ? p && su(p.elementType) && (ct = ji) : ct = jm;
            if (ct && (ct = ct(t, p))) {
              Ar(
                M,
                ct,
                a,
                _
              );
              break t;
            }
            Yt && Yt(t, E, p), t === "focusout" && p && E.type === "number" && p.memoizedProps.value != null && _m(E, "number", E.value);
          }
          switch (Yt = p ? mt(p) : window, t) {
            case "focusin":
              (xm(Yt) || Yt.contentEditable === "true") && (kh = Yt, b1 = p, xp = null);
              break;
            case "focusout":
              xp = b1 = kh = null;
              break;
            case "mousedown":
              E1 = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              E1 = !1, x0(
                M,
                a,
                _
              );
              break;
            case "selectionchange":
              if (NE) break;
            case "keydown":
            case "keyup":
              x0(
                M,
                a,
                _
              );
          }
          var Tt;
          if (S1)
            t: {
              switch (t) {
                case "compositionstart":
                  var St = "onCompositionStart";
                  break t;
                case "compositionend":
                  St = "onCompositionEnd";
                  break t;
                case "compositionupdate":
                  St = "onCompositionUpdate";
                  break t;
              }
              St = void 0;
            }
          else
            $h ? Qo(t, a) && (St = "onCompositionEnd") : t === "keydown" && a.keyCode === CS && (St = "onCompositionStart");
          St && (US && a.locale !== "ko" && ($h || St !== "onCompositionStart" ? St === "onCompositionEnd" && $h && (Tt = Dc()) : (Vf = _, y1 = "value" in Vf ? Vf.value : Vf.textContent, $h = !0)), Yt = kn(
            p,
            St
          ), 0 < Yt.length && (St = new RS(
            St,
            t,
            null,
            a,
            _
          ), M.push({
            event: St,
            listeners: Yt
          }), Tt ? St.data = Tt : (Tt = ti(a), Tt !== null && (St.data = Tt)))), (Tt = UE ? Nm(t, a) : md(t, a)) && (St = kn(
            p,
            "onBeforeInput"
          ), 0 < St.length && (Yt = new yE(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            _
          ), M.push({
            event: Yt,
            listeners: St
          }), Yt.data = Tt)), ie(
            M,
            t,
            p,
            a,
            _
          );
        }
        Oe(M, e);
      });
    }
    function we(t, e, a) {
      return {
        instance: t,
        listener: e,
        currentTarget: a
      };
    }
    function kn(t, e) {
      for (var a = e + "Capture", i = []; t !== null; ) {
        var o = t, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = du(t, a), o != null && i.unshift(
          we(t, o, f)
        ), o = du(t, e), o != null && i.push(
          we(t, o, f)
        )), t.tag === 3) return i;
        t = t.return;
      }
      return [];
    }
    function ao(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function gh(t, e, a, i, o) {
      for (var f = e._reactName, d = []; a !== null && a !== i; ) {
        var h = a, y = h.alternate, p = h.stateNode;
        if (h = h.tag, y !== null && y === i) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = du(a, f), p != null && d.unshift(
          we(a, p, y)
        )) : o || (p = du(a, f), p != null && d.push(
          we(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && t.push({ event: e, listeners: d });
    }
    function Ea(t, e) {
      M0(t, e), t !== "input" && t !== "textarea" && t !== "select" || e == null || e.value !== null || _S || (_S = !0, t === "select" && e.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        t
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        t
      ));
      var a = {
        registrationNameDependencies: wu,
        possibleRegistrationNames: Qf
      };
      su(t) || typeof e.is == "string" || Pv(t, e, a), e.contentEditable && !e.suppressContentEditableWarning && e.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function ll(t, e, a, i) {
      e !== a && (a = Wn(a), Wn(e) !== a && (i[t] = e));
    }
    function ds(t, e, a) {
      e.forEach(function(i) {
        a[yi(i)] = i === "style" ? cc(t) : t.getAttribute(i);
      });
    }
    function al(t, e) {
      e === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        t,
        t,
        t
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        t,
        typeof e
      );
    }
    function vh(t, e) {
      return t = t.namespaceURI === Xt || t.namespaceURI === $t ? t.ownerDocument.createElementNS(
        t.namespaceURI,
        t.tagName
      ) : t.ownerDocument.createElement(t.tagName), t.innerHTML = e, t.innerHTML;
    }
    function Wn(t) {
      return wa(t) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        Mi(t)
      ), iu(t)), (typeof t == "string" ? t : "" + t).replace(iT, `
`).replace(cT, "");
    }
    function Wy(t, e) {
      return e = Wn(e), Wn(t) === e;
    }
    function Se(t, e, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (Sr(i, e, !1), e === "body" || e === "textarea" && i === "" || zc(t, i)) : (typeof i == "number" || typeof i == "bigint") && (Sr("" + i, e, !1), e !== "body" && zc(t, "" + i));
          break;
        case "className":
          pr(t, "class", i);
          break;
        case "tabIndex":
          pr(t, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          pr(t, a, i);
          break;
        case "style":
          Cm(t, i, f);
          break;
        case "data":
          if (e !== "object") {
            pr(t, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (e !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), t.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            t.removeAttribute(a);
            break;
          }
          ye(i, a), i = br("" + i), t.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (e === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Yv || (Yv = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || jv || (jv = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : e === "input" || e === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : e !== "input" || o.type === "submit" || o.type === "image" || Bv ? e !== "button" || o.type == null || o.type === "submit" || Bv ? typeof i == "function" && (o.name == null || r2 || (r2 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Yv || (Yv = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || jv || (jv = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Bv = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Bv = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            t.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (e !== "input" && Se(t, e, "name", o.name, o, null), Se(
              t,
              e,
              "formEncType",
              o.formEncType,
              o,
              null
            ), Se(
              t,
              e,
              "formMethod",
              o.formMethod,
              o,
              null
            ), Se(
              t,
              e,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (Se(
              t,
              e,
              "encType",
              o.encType,
              o,
              null
            ), Se(t, e, "method", o.method, o, null), Se(
              t,
              e,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            t.removeAttribute(a);
            break;
          }
          ye(i, a), i = br("" + i), t.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && al(a, i), t.onclick = mn);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && al(a, i), Ut("scroll", t));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && al(a, i), Ut("scrollend", t));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              t.innerHTML = a;
            }
          }
          break;
        case "multiple":
          t.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          t.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            t.removeAttribute("xlink:href");
            break;
          }
          ye(i, a), a = br("" + i), t.setAttributeNS(ks, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (ye(i, a), t.setAttribute(a, "" + i)) : t.removeAttribute(a);
          break;
        case "inert":
          i !== "" || qv[a] || (qv[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? t.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (ye(i, a), t.setAttribute(a, i)) : t.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (ye(i, a), t.setAttribute(a, i)) : t.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? t.removeAttribute(a) : (ye(i, a), t.setAttribute(a, i));
          break;
        case "popover":
          Ut("beforetoggle", t), Ut("toggle", t), Bo(t, "popover", i);
          break;
        case "xlinkActuate":
          ou(
            t,
            ks,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          ou(
            t,
            ks,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          ou(
            t,
            ks,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          ou(
            t,
            ks,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          ou(
            t,
            ks,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          ou(
            t,
            ks,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          ou(
            t,
            mS,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          ou(
            t,
            mS,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          ou(
            t,
            mS,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Bo(t, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          s2 || i == null || typeof i != "object" || (s2 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = D0(a), Bo(t, a, i)) : wu.hasOwnProperty(a) && i != null && typeof i != "function" && al(a, i);
      }
    }
    function Tf(t, e, a, i, o, f) {
      switch (a) {
        case "style":
          Cm(t, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              t.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? zc(t, i) : (typeof i == "number" || typeof i == "bigint") && zc(t, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && al(a, i), Ut("scroll", t));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && al(a, i), Ut("scrollend", t));
          break;
        case "onClick":
          i != null && (typeof i != "function" && al(a, i), t.onclick = mn);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (wu.hasOwnProperty(a))
            i != null && typeof i != "function" && al(a, i);
          else
            t: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), e = a.slice(2, o ? a.length - 7 : void 0), f = t[Oa] || null, f = f != null ? f[a] : null, typeof f == "function" && t.removeEventListener(e, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(e, i, o);
                break t;
              }
              a in t ? t[a] = i : i === !0 ? t.setAttribute(a, "") : Bo(t, a, i);
            }
      }
    }
    function ke(t, e, a) {
      switch (Ea(e, a), e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          Ut("error", t), Ut("load", t);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    Se(t, e, f, d, a, null);
                }
            }
          o && Se(t, e, "srcSet", a.srcSet, a, null), i && Se(t, e, "src", a.src, a, null);
          return;
        case "input":
          ta("input", a), Ut("invalid", t);
          var h = f = d = o = null, y = null, p = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var _ = a[i];
              if (_ != null)
                switch (i) {
                  case "name":
                    o = _;
                    break;
                  case "type":
                    d = _;
                    break;
                  case "checked":
                    y = _;
                    break;
                  case "defaultChecked":
                    p = _;
                    break;
                  case "value":
                    f = _;
                    break;
                  case "defaultValue":
                    h = _;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (_ != null)
                      throw Error(
                        e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    Se(t, e, i, _, a, null);
                }
            }
          fa(t, a), ud(
            t,
            f,
            h,
            y,
            p,
            d,
            o,
            !1
          );
          return;
        case "select":
          ta("select", a), Ut("invalid", t), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  Se(
                    t,
                    e,
                    o,
                    h,
                    a,
                    null
                  );
              }
          id(t, a), e = f, a = d, t.multiple = !!i, e != null ? fu(t, !!i, e, !1) : a != null && fu(t, !!i, a, !0);
          return;
        case "textarea":
          ta("textarea", a), Ut("invalid", t), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  Se(
                    t,
                    e,
                    d,
                    h,
                    a,
                    null
                  );
              }
          Tc(t, a), jo(t, i, o, f);
          return;
        case "option":
          z0(t, a);
          for (y in a)
            a.hasOwnProperty(y) && (i = a[y], i != null) && (y === "selected" ? t.selected = i && typeof i != "function" && typeof i != "symbol" : Se(t, e, y, i, a, null));
          return;
        case "dialog":
          Ut("beforetoggle", t), Ut("toggle", t), Ut("cancel", t), Ut("close", t);
          break;
        case "iframe":
        case "object":
          Ut("load", t);
          break;
        case "video":
        case "audio":
          for (i = 0; i < r0.length; i++)
            Ut(r0[i], t);
          break;
        case "image":
          Ut("error", t), Ut("load", t);
          break;
        case "details":
          Ut("toggle", t);
          break;
        case "embed":
        case "source":
        case "link":
          Ut("error", t), Ut("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (p in a)
            if (a.hasOwnProperty(p) && (i = a[p], i != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  Se(t, e, p, i, a, null);
              }
          return;
        default:
          if (su(e)) {
            for (_ in a)
              a.hasOwnProperty(_) && (i = a[_], i !== void 0 && Tf(
                t,
                e,
                _,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && Se(t, e, h, i, a, null));
    }
    function zl(t, e, a, i) {
      switch (Ea(e, i), e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, y = null, p = null, _ = null;
          for (q in a) {
            var M = a[q];
            if (a.hasOwnProperty(q) && M != null)
              switch (q) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  y = M;
                default:
                  i.hasOwnProperty(q) || Se(
                    t,
                    e,
                    q,
                    null,
                    i,
                    M
                  );
              }
          }
          for (var E in i) {
            var q = i[E];
            if (M = a[E], i.hasOwnProperty(E) && (q != null || M != null))
              switch (E) {
                case "type":
                  f = q;
                  break;
                case "name":
                  o = q;
                  break;
                case "checked":
                  p = q;
                  break;
                case "defaultChecked":
                  _ = q;
                  break;
                case "value":
                  d = q;
                  break;
                case "defaultValue":
                  h = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(
                      e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  q !== M && Se(
                    t,
                    e,
                    E,
                    q,
                    i,
                    M
                  );
              }
          }
          e = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, e || !i || f2 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), f2 = !0), !e || i || o2 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), o2 = !0), Ni(
            t,
            d,
            h,
            y,
            p,
            _,
            f,
            o
          );
          return;
        case "select":
          q = d = h = E = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  q = y;
                default:
                  i.hasOwnProperty(f) || Se(
                    t,
                    e,
                    f,
                    null,
                    i,
                    y
                  );
              }
          for (o in i)
            if (f = i[o], y = a[o], i.hasOwnProperty(o) && (f != null || y != null))
              switch (o) {
                case "value":
                  E = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== y && Se(
                    t,
                    e,
                    o,
                    f,
                    i,
                    y
                  );
              }
          i = h, e = d, a = q, E != null ? fu(t, !!e, E, !1) : !!a != !!e && (i != null ? fu(t, !!e, i, !0) : fu(t, !!e, e ? [] : "", !1));
          return;
        case "textarea":
          q = E = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  Se(t, e, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  E = o;
                  break;
                case "defaultValue":
                  q = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && Se(t, e, d, o, i, f);
              }
          Ac(t, E, q);
          return;
        case "option":
          for (var nt in a)
            E = a[nt], a.hasOwnProperty(nt) && E != null && !i.hasOwnProperty(nt) && (nt === "selected" ? t.selected = !1 : Se(
              t,
              e,
              nt,
              null,
              i,
              E
            ));
          for (y in i)
            E = i[y], q = a[y], i.hasOwnProperty(y) && E !== q && (E != null || q != null) && (y === "selected" ? t.selected = E && typeof E != "function" && typeof E != "symbol" : Se(
              t,
              e,
              y,
              E,
              i,
              q
            ));
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var rt in a)
            E = a[rt], a.hasOwnProperty(rt) && E != null && !i.hasOwnProperty(rt) && Se(
              t,
              e,
              rt,
              null,
              i,
              E
            );
          for (p in i)
            if (E = i[p], q = a[p], i.hasOwnProperty(p) && E !== q && (E != null || q != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (E != null)
                    throw Error(
                      e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  Se(
                    t,
                    e,
                    p,
                    E,
                    i,
                    q
                  );
              }
          return;
        default:
          if (su(e)) {
            for (var Ze in a)
              E = a[Ze], a.hasOwnProperty(Ze) && E !== void 0 && !i.hasOwnProperty(Ze) && Tf(
                t,
                e,
                Ze,
                void 0,
                i,
                E
              );
            for (_ in i)
              E = i[_], q = a[_], !i.hasOwnProperty(_) || E === q || E === void 0 && q === void 0 || Tf(
                t,
                e,
                _,
                E,
                i,
                q
              );
            return;
          }
      }
      for (var fe in a)
        E = a[fe], a.hasOwnProperty(fe) && E != null && !i.hasOwnProperty(fe) && Se(t, e, fe, null, i, E);
      for (M in i)
        E = i[M], q = a[M], !i.hasOwnProperty(M) || E === q || E == null && q == null || Se(t, e, M, E, i, q);
    }
    function yi(t) {
      switch (t) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return t;
      }
    }
    function cc(t) {
      var e = {};
      t = t.style;
      for (var a = 0; a < t.length; a++) {
        var i = t[a];
        e[i] = t.getPropertyValue(i);
      }
      return e;
    }
    function Nu(t, e, a) {
      if (e != null && typeof e != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in e)
          if (e.hasOwnProperty(f)) {
            var d = e[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (Pl(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || pt.has(f) ? (Pl(d, f), i += o + f.replace(X, "-$1").toLowerCase().replace(st, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(X, "-$1").toLowerCase().replace(st, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, e = t.getAttribute("style"), e !== i && (i = Wn(i), Wn(e) !== i && (a.style = cc(t)));
      }
    }
    function Ca(t, e, a, i, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (ye(i, e), t === "" + i)
              return;
        }
      ll(e, t, i, f);
    }
    function Sh(t, e, a, i, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      ll(e, t, i, f);
    }
    function bh(t, e, a, i, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (ye(i, a), t === "" + i)
              return;
        }
      ll(e, t, i, f);
    }
    function Af(t, e, a, i, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (ye(i, e), t === "" + i))
              return;
        }
      ll(e, t, i, f);
    }
    function hs(t, e, a, i, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (ye(i, e), a = br("" + i), t === a)
              return;
        }
      ll(e, t, i, f);
    }
    function Ua(t, e, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = t.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (su(e)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (wu.hasOwnProperty(y))
                typeof p != "function" && al(y, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (y) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || ll(
                      "children",
                      t.textContent,
                      p,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = t.innerHTML, p = p ? p.__html : void 0, p != null && (p = vh(t, p), ll(
                      y,
                      d,
                      p,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(y), Nu(t, p, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(y.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      y
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = Hi(
                      t,
                      "class",
                      p
                    ), ll(
                      "className",
                      d,
                      p,
                      o
                    );
                    continue;
                  default:
                    i.context === Ro && e !== "svg" && e !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = Hi(
                      t,
                      y,
                      p
                    ), ll(
                      y,
                      d,
                      p,
                      o
                    );
                }
            }
          }
      } else
        for (p in a)
          if (a.hasOwnProperty(p) && (y = a[p], y != null)) {
            if (wu.hasOwnProperty(p))
              typeof y != "function" && al(p, y);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof y != "string" && typeof y != "number" || ll(
                    "children",
                    t.textContent,
                    y,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = t.innerHTML, y = y ? y.__html : void 0, y != null && (y = vh(t, y), d !== y && (o[p] = { __html: d }));
                  continue;
                case "className":
                  Ca(
                    t,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Ca(
                    t,
                    p,
                    "tabindex",
                    y,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(p), Nu(t, y, o);
                  continue;
                case "multiple":
                  f.delete(p), ll(
                    p,
                    t.multiple,
                    y,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(p), ll(
                    p,
                    t.muted,
                    y,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), ll(
                    p,
                    t.autofocus,
                    y,
                    o
                  );
                  continue;
                case "data":
                  if (e !== "object") {
                    f.delete(p), d = t.getAttribute("data"), ll(
                      p,
                      d,
                      y,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(y !== "" || e === "a" && p === "href" || e === "object" && p === "data")) {
                    console.error(
                      p === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      p,
                      p
                    );
                    continue;
                  }
                  hs(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = t.getAttribute(p), typeof y == "function") {
                    f.delete(p.toLowerCase()), p === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === oT) {
                    f.delete(p.toLowerCase()), ll(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  hs(
                    t,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  hs(
                    t,
                    p,
                    "xlink:href",
                    y,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  bh(
                    t,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  bh(
                    t,
                    p,
                    "spellcheck",
                    y,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  bh(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  Sh(
                    t,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  t: {
                    h = t;
                    var _ = d = p, M = o;
                    if (f.delete(_), h = h.getAttribute(_), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break t;
                        default:
                          if (y === !1) break t;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (y === !0 && h === "") break t;
                          break;
                        default:
                          if (ye(y, d), h === "" + y)
                            break t;
                      }
                    ll(
                      d,
                      h,
                      y,
                      M
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  t: {
                    if (h = t, _ = d = p, M = o, f.delete(_), h = h.getAttribute(_), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break t;
                        default:
                          if (isNaN(y) || 1 > y) break t;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(y) || 1 > y) && (ye(y, d), h === "" + y))
                            break t;
                      }
                    ll(
                      d,
                      h,
                      y,
                      M
                    );
                  }
                  continue;
                case "rowSpan":
                  Af(
                    t,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  Af(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Ca(
                    t,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Ca(
                    t,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Ca(
                    t,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Ca(
                    t,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Ca(
                    t,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Ca(
                    t,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Ca(
                    t,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Ca(
                    t,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Ca(
                    t,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Ca(
                    t,
                    p,
                    "xml:space",
                    y,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  y !== "" || qv[p] || (qv[p] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    p
                  )), Sh(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
                    h = D0(p), d = !1, i.context === Ro && e !== "svg" && e !== "math" ? f.delete(h.toLowerCase()) : (_ = p.toLowerCase(), _ = tu.hasOwnProperty(
                      _
                    ) && tu[_] || null, _ !== null && _ !== p && (d = !0, f.delete(_)), f.delete(h));
                    t: if (_ = t, M = h, h = y, hn(M))
                      if (_.hasAttribute(M))
                        _ = _.getAttribute(
                          M
                        ), ye(
                          h,
                          M
                        ), h = _ === "" + h ? h : _;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break t;
                          case "boolean":
                            if (_ = M.toLowerCase().slice(0, 5), _ !== "data-" && _ !== "aria-")
                              break t;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || ll(
                      p,
                      h,
                      y,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && ds(t, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function hg(t, e) {
      switch (t.length) {
        case 0:
          return "";
        case 1:
          return t[0];
        case 2:
          return t[0] + " " + e + " " + t[1];
        default:
          return t.slice(0, -1).join(", ") + ", " + e + " " + t[t.length - 1];
      }
    }
    function Ta(t) {
      switch (t) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return !0;
        default:
          return !1;
      }
    }
    function mg() {
      if (typeof performance.getEntriesByType == "function") {
        for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), i = 0; i < a.length; i++) {
          var o = a[i], f = o.transferSize, d = o.initiatorType, h = o.duration;
          if (f && h && Ta(d)) {
            for (d = 0, h = o.responseEnd, i += 1; i < a.length; i++) {
              var y = a[i], p = y.startTime;
              if (p > h) break;
              var _ = y.transferSize, M = y.initiatorType;
              _ && Ta(M) && (y = y.responseEnd, d += _ * (y < h ? 1 : (h - p) / (y - p)));
            }
            if (--i, e += 8 * (f + d) / (o.duration / 1e3), t++, 10 < t) break;
          }
        }
        if (0 < t) return e / t / 1e6;
      }
      return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
    }
    function ms(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function yg(t) {
      switch (t) {
        case $t:
          return bm;
        case Xt:
          return Gv;
        default:
          return Ro;
      }
    }
    function pi(t, e) {
      if (t === Ro)
        switch (e) {
          case "svg":
            return bm;
          case "math":
            return Gv;
          default:
            return Ro;
        }
      return t === bm && e === "foreignObject" ? Ro : t;
    }
    function Of(t, e) {
      return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
    }
    function Fy() {
      var t = window.event;
      return t && t.type === "popstate" ? t === vS ? !1 : (vS = t, !0) : (vS = null, !1);
    }
    function xu() {
      var t = window.event;
      return t && t !== h0 ? t.type : null;
    }
    function _f() {
      var t = window.event;
      return t && t !== h0 ? t.timeStamp : -1.1;
    }
    function pg(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function gg(t, e, a) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && t.focus();
          break;
        case "img":
          a.src ? t.src = a.src : a.srcSet && (t.srcset = a.srcSet);
      }
    }
    function vg() {
    }
    function Eh(t, e, a, i) {
      zl(t, e, a, i), t[Oa] = i;
    }
    function Th(t) {
      zc(t, "");
    }
    function c1(t, e, a) {
      t.nodeValue = a;
    }
    function Sg(t) {
      if (!t.__reactWarnedAboutChildrenConflict) {
        var e = t[Oa] || null;
        if (e !== null) {
          var a = at(t);
          a !== null && (typeof e.children == "string" || typeof e.children == "number" ? (t.__reactWarnedAboutChildrenConflict = !0, ft(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })) : e.dangerouslySetInnerHTML != null && (t.__reactWarnedAboutChildrenConflict = !0, ft(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })));
        }
      }
    }
    function oc(t) {
      return t === "head";
    }
    function bg(t, e) {
      t.removeChild(e);
    }
    function Eg(t, e) {
      (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).removeChild(e);
    }
    function no(t, e) {
      var a = e, i = 0;
      do {
        var o = a.nextSibling;
        if (t.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === d0 || a === wv) {
            if (i === 0) {
              t.removeChild(o), oo(e);
              return;
            }
            i--;
          } else if (a === s0 || a === or || a === Fs || a === Sm || a === Ws)
            i++;
          else if (a === rT)
            vi(
              t.ownerDocument.documentElement
            );
          else if (a === dT) {
            a = t.ownerDocument.head, vi(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[Xf] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === sT && vi(t.ownerDocument.body);
        a = o;
      } while (a);
      oo(e);
    }
    function ys(t, e) {
      var a = t;
      t = 0;
      do {
        var i = a.nextSibling;
        if (a.nodeType === 1 ? e ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (e ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), i && i.nodeType === 8)
          if (a = i.data, a === d0) {
            if (t === 0) break;
            t--;
          } else
            a !== s0 && a !== or && a !== Fs && a !== Sm || t++;
        a = i;
      } while (a);
    }
    function Tg(t) {
      ys(t, !0);
    }
    function Ag(t) {
      t = t.style, typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Og(t) {
      t.nodeValue = "";
    }
    function _g(t) {
      ys(t, !1);
    }
    function zg(t, e) {
      e = e[hT], e = e != null && e.hasOwnProperty("display") ? e.display : null, t.style.display = e == null || typeof e == "boolean" ? "" : ("" + e).trim();
    }
    function Dg(t, e) {
      t.nodeValue = e;
    }
    function zf(t) {
      var e = t.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
        var a = e;
        switch (e = e.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            zf(a), U(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        t.removeChild(a);
      }
    }
    function Rg(t, e, a, i) {
      for (; t.nodeType === 1; ) {
        var o = a;
        if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
          if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden"))
            break;
        } else if (i) {
          if (!t[Xf])
            switch (e) {
              case "meta":
                if (!t.hasAttribute("itemprop")) break;
                return t;
              case "link":
                if (f = t.getAttribute("rel"), f === "stylesheet" && t.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || t.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || t.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return t;
              case "style":
                if (t.hasAttribute("data-precedence")) break;
                return t;
              case "script":
                if (f = t.getAttribute("src"), (f !== (o.src == null ? null : o.src) || t.getAttribute("type") !== (o.type == null ? null : o.type) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                  break;
                return t;
              default:
                return t;
            }
        } else if (e === "input" && t.type === "hidden") {
          ye(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && t.getAttribute("name") === f)
            return t;
        } else return t;
        if (t = ln(t.nextSibling), t === null) break;
      }
      return null;
    }
    function Mg(t, e, a) {
      if (e === "") return null;
      for (; t.nodeType !== 3; )
        if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = ln(t.nextSibling), t === null)) return null;
      return t;
    }
    function _e(t, e) {
      for (; t.nodeType !== 8; )
        if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = ln(t.nextSibling), t === null)) return null;
      return t;
    }
    function ps(t) {
      return t.data === or || t.data === Fs;
    }
    function Iy(t) {
      return t.data === Sm || t.data === or && t.ownerDocument.readyState !== h2;
    }
    function Cg(t, e) {
      var a = t.ownerDocument;
      if (t.data === Fs)
        t._reactRetry = e;
      else if (t.data !== or || a.readyState !== h2)
        e();
      else {
        var i = function() {
          e(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), t._reactRetry = i;
      }
    }
    function ln(t) {
      for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
          if (e = t.data, e === s0 || e === Sm || e === or || e === Fs || e === Ws || e === yS || e === d2)
            break;
          if (e === d0 || e === wv)
            return null;
        }
      }
      return t;
    }
    function Ug(t) {
      if (t.nodeType === 1) {
        for (var e = t.nodeName.toLowerCase(), a = {}, i = t.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[yi(f.name)] = f.name.toLowerCase() === "style" ? cc(t) : f.value;
        }
        return { type: e, props: a };
      }
      return t.nodeType === 8 ? t.data === Ws ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : t.nodeValue;
    }
    function Hg(t, e, a) {
      return a === null || a[fT] !== !0 ? (t.nodeValue === e ? t = null : (e = Wn(e), t = Wn(t.nodeValue) === e ? null : t.nodeValue), t) : null;
    }
    function Df(t) {
      t = t.nextSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var a = t.data;
          if (a === d0 || a === wv) {
            if (e === 0)
              return ln(t.nextSibling);
            e--;
          } else
            a !== s0 && a !== Sm && a !== or && a !== Fs && a !== Ws || e++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function uo(t) {
      t = t.previousSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var a = t.data;
          if (a === s0 || a === Sm || a === or || a === Fs || a === Ws) {
            if (e === 0) return t;
            e--;
          } else
            a !== d0 && a !== wv || e++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Py(t) {
      oo(t);
    }
    function Ah(t) {
      oo(t);
    }
    function tp(t) {
      oo(t);
    }
    function gi(t, e, a, i, o) {
      switch (o && vr(t, i.ancestorInfo), e = ms(a), t) {
        case "html":
          if (t = e.documentElement, !t)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return t;
        case "head":
          if (t = e.head, !t)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return t;
        case "body":
          if (t = e.body, !t)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return t;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function Bu(t, e, a, i) {
      if (!a[bi] && at(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (t) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      ke(a, t, e), a[We] = i, a[Oa] = e;
    }
    function vi(t) {
      for (var e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      U(t);
    }
    function Oh(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
    }
    function ep(t, e, a) {
      var i = Em;
      if (i && typeof e == "string" && e) {
        var o = Re(e);
        o = 'link[rel="' + t + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), S2.has(o) || (S2.add(o), t = { rel: t, crossOrigin: a, href: e }, i.querySelector(o) === null && (e = i.createElement("link"), ke(e, "link", t), yt(e), i.head.appendChild(e)));
      }
    }
    function lp(t, e, a, i) {
      var o = (o = an.current) ? Oh(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = io(a.href), e = Mt(o).hoistableStyles, i = e.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, e.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            t = io(a.href);
            var f = Mt(o).hoistableStyles, d = f.get(t);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Ps, preload: null }
            }, f.set(t, d), (f = o.querySelector(
              vs(t)
            )) && !f._p && (d.instance = f, d.state.loading = m0 | Wu), !Fu.has(t))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              Fu.set(t, h), f || Ng(
                o,
                t,
                h,
                d.state
              );
            }
            if (e && i === null)
              throw a = `

  - ` + gs(e) + `
  + ` + gs(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (e && i !== null)
            throw a = `

  - ` + gs(e) + `
  + ` + gs(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (a = co(a), e = Mt(o).hoistableScripts, i = e.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, e.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + t + '". this is a bug in React.'
          );
      }
    }
    function gs(t) {
      var e = 0, a = "<link";
      return typeof t.rel == "string" ? (e++, a += ' rel="' + t.rel + '"') : nn.call(t, "rel") && (e++, a += ' rel="' + (t.rel === null ? "null" : "invalid type " + typeof t.rel) + '"'), typeof t.href == "string" ? (e++, a += ' href="' + t.href + '"') : nn.call(t, "href") && (e++, a += ' href="' + (t.href === null ? "null" : "invalid type " + typeof t.href) + '"'), typeof t.precedence == "string" ? (e++, a += ' precedence="' + t.precedence + '"') : nn.call(t, "precedence") && (e++, a += " precedence={" + (t.precedence === null ? "null" : "invalid type " + typeof t.precedence) + "}"), Object.getOwnPropertyNames(t).length > e && (a += " ..."), a + " />";
    }
    function io(t) {
      return 'href="' + Re(t) + '"';
    }
    function vs(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function _h(t) {
      return Wt({}, t, {
        "data-precedence": t.precedence,
        precedence: null
      });
    }
    function Ng(t, e, a, i) {
      t.querySelector(
        'link[rel="preload"][as="style"][' + e + "]"
      ) ? i.loading = m0 : (e = t.createElement("link"), i.preload = e, e.addEventListener("load", function() {
        return i.loading |= m0;
      }), e.addEventListener("error", function() {
        return i.loading |= g2;
      }), ke(e, "link", a), yt(e), t.head.appendChild(e));
    }
    function co(t) {
      return '[src="' + Re(t) + '"]';
    }
    function Ss(t) {
      return "script[async]" + t;
    }
    function zh(t, e, a) {
      if (e.count++, e.instance === null)
        switch (e.type) {
          case "style":
            var i = t.querySelector(
              'style[data-href~="' + Re(a.href) + '"]'
            );
            if (i)
              return e.instance = i, yt(i), i;
            var o = Wt({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (t.ownerDocument || t).createElement("style"), yt(i), ke(i, "style", o), Rf(i, a.precedence, t), e.instance = i;
          case "stylesheet":
            o = io(a.href);
            var f = t.querySelector(
              vs(o)
            );
            if (f)
              return e.state.loading |= Wu, e.instance = f, yt(f), f;
            i = _h(a), (o = Fu.get(o)) && ap(i, o), f = (t.ownerDocument || t).createElement("link"), yt(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), ke(f, "link", i), e.state.loading |= Wu, Rf(f, a.precedence, t), e.instance = f;
          case "script":
            return f = co(a.src), (o = t.querySelector(
              Ss(f)
            )) ? (e.instance = o, yt(o), o) : (i = a, (o = Fu.get(f)) && (i = Wt({}, a), np(i, o)), t = t.ownerDocument || t, o = t.createElement("script"), yt(o), ke(o, "link", i), t.head.appendChild(o), e.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + e.type + '". this is a bug in React.'
            );
        }
      else
        e.type === "stylesheet" && (e.state.loading & Wu) === Ps && (i = e.instance, e.state.loading |= Wu, Rf(i, a.precedence, t));
      return e.instance;
    }
    function Rf(t, e, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === e) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(t, f.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild));
    }
    function ap(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
    }
    function np(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
    }
    function Mf(t, e, a) {
      if (Xv === null) {
        var i = /* @__PURE__ */ new Map(), o = Xv = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = Xv, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(t)) return i;
      for (i.set(t, null), a = a.getElementsByTagName(t), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Xf] || f[We] || t === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== $t) {
          var d = f.getAttribute(e) || "";
          d = t + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function xg(t, e, a) {
      t = t.ownerDocument || t, t.head.insertBefore(
        a,
        e === "title" ? t.querySelector("head > title") : null
      );
    }
    function Bg(t, e, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === bm || e.itemProp != null)
        return !i || e.itemProp == null || t !== "meta" && t !== "title" && t !== "style" && t !== "link" && t !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          t,
          t
        ), !1;
      switch (t) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) {
            if (e.rel === "stylesheet" && typeof e.precedence == "string") {
              t = e.href;
              var o = e.onError, f = e.disabled;
              a = [], e.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = hg(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                t,
                f,
                o
              );
            }
            i && (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (e.onError || e.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          return e.rel === "stylesheet" ? (t = e.precedence, e = e.disabled, typeof t != "string" && i && console.error(
            'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
          ), typeof t == "string" && e == null) : !0;
        case "script":
          if (t = e.async && typeof e.async != "function" && typeof e.async != "symbol", !t || e.onLoad || e.onError || !e.src || typeof e.src != "string") {
            i && (t ? e.onLoad || e.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            t
          );
      }
      return !1;
    }
    function ne(t) {
      return !(t.type === "stylesheet" && (t.state.loading & v2) === Ps);
    }
    function up(t, e, a, i) {
      if (a.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (a.state.loading & Wu) === Ps) {
        if (a.instance === null) {
          var o = io(i.href), f = e.querySelector(
            vs(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Cf.bind(t), e.then(t, t)), a.state.loading |= Wu, a.instance = f, yt(f);
            return;
          }
          f = e.ownerDocument || e, i = _h(i), (o = Fu.get(o)) && ap(i, o), f = f.createElement("link"), yt(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), ke(f, "link", i), a.instance = f;
        }
        t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, e), (e = a.state.preload) && (a.state.loading & v2) === Ps && (t.count++, a = Cf.bind(t), e.addEventListener("load", a), e.addEventListener("error", a));
      }
    }
    function Dh(t, e) {
      return t.stylesheets && t.count === 0 && bs(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
        var i = setTimeout(function() {
          if (t.stylesheets && bs(t, t.stylesheets), t.unsuspend) {
            var f = t.unsuspend;
            t.unsuspend = null, f();
          }
        }, pT + e);
        0 < t.imgBytes && bS === 0 && (bS = 125 * mg() * vT);
        var o = setTimeout(
          function() {
            if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && bs(t, t.stylesheets), t.unsuspend)) {
              var f = t.unsuspend;
              t.unsuspend = null, f();
            }
          },
          (t.imgBytes > bS ? 50 : gT) + e
        );
        return t.unsuspend = a, function() {
          t.unsuspend = null, clearTimeout(i), clearTimeout(o);
        };
      } : null;
    }
    function Cf() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          bs(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          this.unsuspend = null, t();
        }
      }
    }
    function bs(t, e) {
      t.stylesheets = null, t.unsuspend !== null && (t.count++, Qv = /* @__PURE__ */ new Map(), e.forEach(ip, t), Qv = null, Cf.call(t));
    }
    function ip(t, e) {
      if (!(e.state.loading & Wu)) {
        var a = Qv.get(t);
        if (a) var i = a.get(ES);
        else {
          a = /* @__PURE__ */ new Map(), Qv.set(t, a);
          for (var o = t.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(ES, i);
        }
        o = e.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(ES, o), a.set(d, o), this.count++, i = Cf.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(o, t.firstChild)), e.state.loading |= Wu;
      }
    }
    function Es(t, e, a, i, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Is, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = No(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = No(0), this.hiddenUpdates = No(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), t = this.pendingUpdatersLaneMap = [], e = 0; 31 > e; e++) t.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function Ts(t, e, a, i, o, f, d, h, y, p, _, M) {
      return t = new Es(
        t,
        e,
        a,
        d,
        y,
        p,
        _,
        M,
        h
      ), e = QE, f === !0 && (e |= xa | Ei), e |= Ft, f = N(3, null, null, e), t.current = f, f.stateNode = t, e = zd(), jc(e), t.pooledCache = e, jc(e), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: e
      }, ue(f), t;
    }
    function jg(t) {
      return t ? (t = Kf, t) : Kf;
    }
    function Rh(t, e, a, i, o, f) {
      if (Dl && typeof Dl.onScheduleFiberRoot == "function")
        try {
          Dl.onScheduleFiberRoot(ho, i, a);
        } catch (d) {
          Yu || (Yu = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = jg(o), i.context === null ? i.context = o : i.pendingContext = o, ju && Na !== null && !A2 && (A2 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        dt(Na) || "Unknown"
      )), i = Ol(e), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = vu(t, i, e), a !== null && (yu(e, "root.render()", null), Nt(a, t, e), En(a, t, e));
    }
    function Yg(t, e) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var a = t.retryLane;
        t.retryLane = a !== 0 && a < e ? a : e;
      }
    }
    function cp(t, e) {
      Yg(t, e), (t = t.alternate) && Yg(t, e);
    }
    function op(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = ea(t, 67108864);
        e !== null && Nt(e, t, 67108864), cp(t, 67108864);
      }
    }
    function fp(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = aa(t);
        e = dn(e);
        var a = ea(t, e);
        a !== null && Nt(a, t, e), cp(t, e);
      }
    }
    function Ue() {
      return Na;
    }
    function rp(t, e, a, i) {
      var o = G.T;
      G.T = null;
      var f = be.p;
      try {
        be.p = Rl, sp(t, e, a, i);
      } finally {
        be.p = f, G.T = o;
      }
    }
    function $l(t, e, a, i) {
      var o = G.T;
      G.T = null;
      var f = be.p;
      try {
        be.p = Wl, sp(t, e, a, i);
      } finally {
        be.p = f, G.T = o;
      }
    }
    function sp(t, e, a, i) {
      if (Vv) {
        var o = Mh(i);
        if (o === null)
          $n(
            t,
            e,
            i,
            Zv,
            a
          ), Uh(t, i);
        else if (qg(
          o,
          t,
          e,
          a,
          i
        ))
          i.stopPropagation();
        else if (Uh(t, i), e & 4 && -1 < bT.indexOf(t)) {
          for (; o !== null; ) {
            var f = at(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = cu(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - kl(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      Ma(f), (he & (Il | nu)) === oa && (Dv = wl() + Fb, Uu(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = ea(f, 2), h !== null && Nt(h, f, 2), en(), cp(f, 2);
              }
            if (f = Mh(i), f === null && $n(
              t,
              e,
              i,
              Zv,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          $n(
            t,
            e,
            i,
            null,
            a
          );
      }
    }
    function Mh(t) {
      return t = Hn(t), dp(t);
    }
    function dp(t) {
      if (Zv = null, t = P(t), t !== null) {
        var e = ae(t);
        if (e === null) t = null;
        else {
          var a = e.tag;
          if (a === 13) {
            if (t = Tl(e), t !== null) return t;
            t = null;
          } else if (a === 31) {
            if (t = xe(e), t !== null) return t;
            t = null;
          } else if (a === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
              return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
          } else e !== t && (t = null);
        }
      }
      return Zv = t, null;
    }
    function Ch(t) {
      switch (t) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Rl;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Wl;
        case "message":
          switch (Rs()) {
            case Tp:
              return Rl;
            case Gh:
              return Wl;
            case so:
            case Vg:
              return ua;
            case Xh:
              return hc;
            default:
              return ua;
          }
        default:
          return ua;
      }
    }
    function Uh(t, e) {
      switch (t) {
        case "focusin":
        case "focusout":
          fr = null;
          break;
        case "dragenter":
        case "dragleave":
          rr = null;
          break;
        case "mouseover":
        case "mouseout":
          sr = null;
          break;
        case "pointerover":
        case "pointerout":
          p0.delete(e.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          g0.delete(e.pointerId);
      }
    }
    function fc(t, e, a, i, o, f) {
      return t === null || t.nativeEvent !== f ? (t = {
        blockedOn: e,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, e !== null && (e = at(e), e !== null && op(e)), t) : (t.eventSystemFlags |= i, e = t.targetContainers, o !== null && e.indexOf(o) === -1 && e.push(o), t);
    }
    function qg(t, e, a, i, o) {
      switch (e) {
        case "focusin":
          return fr = fc(
            fr,
            t,
            e,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return rr = fc(
            rr,
            t,
            e,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return sr = fc(
            sr,
            t,
            e,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return p0.set(
            f,
            fc(
              p0.get(f) || null,
              t,
              e,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, g0.set(
            f,
            fc(
              g0.get(f) || null,
              t,
              e,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function hp(t) {
      var e = P(t.target);
      if (e !== null) {
        var a = ae(e);
        if (a !== null) {
          if (e = a.tag, e === 13) {
            if (e = Tl(a), e !== null) {
              t.blockedOn = e, g(t.priority, function() {
                fp(a);
              });
              return;
            }
          } else if (e === 31) {
            if (e = xe(a), e !== null) {
              t.blockedOn = e, g(t.priority, function() {
                fp(a);
              });
              return;
            }
          } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      t.blockedOn = null;
    }
    function Uf(t) {
      if (t.blockedOn !== null) return !1;
      for (var e = t.targetContainers; 0 < e.length; ) {
        var a = Mh(t.nativeEvent);
        if (a === null) {
          a = t.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          Dp !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), Dp = o, a.target.dispatchEvent(i), Dp === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), Dp = null;
        } else
          return e = at(a), e !== null && op(e), t.blockedOn = a, !1;
        e.shift();
      }
      return !0;
    }
    function Hh(t, e, a) {
      Uf(t) && a.delete(e);
    }
    function o1() {
      TS = !1, fr !== null && Uf(fr) && (fr = null), rr !== null && Uf(rr) && (rr = null), sr !== null && Uf(sr) && (sr = null), p0.forEach(Hh), g0.forEach(Hh);
    }
    function As(t, e) {
      t.blockedOn === e && (t.blockedOn = null, TS || (TS = !0, yl.unstable_scheduleCallback(
        yl.unstable_NormalPriority,
        o1
      )));
    }
    function wg(t) {
      Jv !== t && (Jv = t, yl.unstable_scheduleCallback(
        yl.unstable_NormalPriority,
        function() {
          Jv === t && (Jv = null);
          for (var e = 0; e < t.length; e += 3) {
            var a = t[e], i = t[e + 1], o = t[e + 2];
            if (typeof i != "function") {
              if (dp(i || a) === null)
                continue;
              break;
            }
            var f = at(a);
            f !== null && (t.splice(e, 3), e -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), ri(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function oo(t) {
      function e(y) {
        return As(y, t);
      }
      fr !== null && As(fr, t), rr !== null && As(rr, t), sr !== null && As(sr, t), p0.forEach(e), g0.forEach(e);
      for (var a = 0; a < dr.length; a++) {
        var i = dr[a];
        i.blockedOn === t && (i.blockedOn = null);
      }
      for (; 0 < dr.length && (a = dr[0], a.blockedOn === null); )
        hp(a), a.blockedOn === null && dr.shift();
      if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[Oa] || null;
          if (typeof f == "function")
            d || wg(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[Oa] || null)
                h = d.formAction;
              else if (dp(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), wg(a);
          }
        }
    }
    function Gg() {
      function t(f) {
        f.canIntercept && f.info === "react-transition" && f.intercept({
          handler: function() {
            return new Promise(function(d) {
              return o = d;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function e() {
        o !== null && (o(), o = null), i || setTimeout(a, 20);
      }
      function a() {
        if (!i && !navigation.transition) {
          var f = navigation.currentEntry;
          f && f.url != null && navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var i = !1, o = null;
        return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(a, 100), function() {
          i = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener(
            "navigatesuccess",
            e
          ), navigation.removeEventListener(
            "navigateerror",
            e
          ), o !== null && (o(), o = null);
        };
      }
    }
    function mp(t) {
      this._internalRoot = t;
    }
    function Fn(t) {
      this._internalRoot = t;
    }
    function yp(t) {
      t[bi] && (t._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var yl = W2(), Os = _0(), f1 = F2(), Wt = Object.assign, Xg = /* @__PURE__ */ Symbol.for("react.element"), _n = /* @__PURE__ */ Symbol.for("react.transitional.element"), rc = /* @__PURE__ */ Symbol.for("react.portal"), Hf = /* @__PURE__ */ Symbol.for("react.fragment"), Aa = /* @__PURE__ */ Symbol.for("react.strict_mode"), _s = /* @__PURE__ */ Symbol.for("react.profiler"), Nh = /* @__PURE__ */ Symbol.for("react.consumer"), In = /* @__PURE__ */ Symbol.for("react.context"), Nf = /* @__PURE__ */ Symbol.for("react.forward_ref"), fo = /* @__PURE__ */ Symbol.for("react.suspense"), Ha = /* @__PURE__ */ Symbol.for("react.suspense_list"), zs = /* @__PURE__ */ Symbol.for("react.memo"), na = /* @__PURE__ */ Symbol.for("react.lazy"), Pn = /* @__PURE__ */ Symbol.for("react.activity"), r1 = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Qg = Symbol.iterator, xf = /* @__PURE__ */ Symbol.for("react.client.reference"), bl = Array.isArray, G = Os.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, be = f1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, s1 = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), pp = [], gp = [], Si = -1, sc = Be(null), Bf = Be(null), an = Be(null), dc = Be(null), jf = 0, Lg, ro, Yf, vp, Ds, xh, Bh;
    _t.__reactDisabledLog = !0;
    var qf, Sp, jh = !1, bp = new (typeof WeakMap == "function" ? WeakMap : Map)(), Na = null, ju = !1, nn = Object.prototype.hasOwnProperty, Ep = yl.unstable_scheduleCallback, Yh = yl.unstable_cancelCallback, qh = yl.unstable_shouldYield, wh = yl.unstable_requestPaint, wl = yl.unstable_now, Rs = yl.unstable_getCurrentPriorityLevel, Tp = yl.unstable_ImmediatePriority, Gh = yl.unstable_UserBlockingPriority, so = yl.unstable_NormalPriority, Vg = yl.unstable_LowPriority, Xh = yl.unstable_IdlePriority, Ap = yl.log, Zg = yl.unstable_setDisableYieldValue, ho = null, Dl = null, Yu = !1, qu = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", kl = Math.clz32 ? Math.clz32 : Ci, Op = Math.log, Qh = Math.LN2, wf = 256, Ms = 262144, Gf = 4194304, Rl = 2, Wl = 8, ua = 32, hc = 268435456, zn = Math.random().toString(36).slice(2), We = "__reactFiber$" + zn, Oa = "__reactProps$" + zn, bi = "__reactContainer$" + zn, mo = "__reactEvents$" + zn, d1 = "__reactListeners$" + zn, Jg = "__reactHandles$" + zn, Cs = "__reactResources$" + zn, Xf = "__reactMarker$" + zn, Kg = /* @__PURE__ */ new Set(), wu = {}, Qf = {}, $g = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Lf = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), _p = {}, Lh = {}, Vh = /[\n"\\]/g, zp = !1, kg = !1, Us = !1, l = !1, n = !1, u = !1, c = ["value", "defaultValue"], r = !1, s = /["'&<>\n\t]|^\s|\s$/, m = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), v = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), A = v.concat(["button"]), j = "dd dt li option optgroup p rp rt".split(" "), L = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, $ = {}, Y = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, X = /([A-Z])/g, st = /^ms-/, Dt = /^(?:webkit|moz|o)[A-Z]/, He = /^-ms-/, H = /-(.)/g, z = /;\s*$/, x = {}, K = {}, Et = !1, de = !1, pt = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Xt = "http://www.w3.org/1998/Math/MathML", $t = "http://www.w3.org/2000/svg", ge = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), tu = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Wg = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0,
      "aria-braillelabel": 0,
      "aria-brailleroledescription": 0,
      "aria-colindextext": 0,
      "aria-rowindextext": 0
    }, Zh = {}, tE = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), eE = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), _S = !1, un = {}, zS = /^on./, lE = /^on[^A-Z]/, aE = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), nE = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), uE = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, Dp = null, Jh = null, Kh = null, h1 = !1, mc = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), m1 = !1;
    if (mc)
      try {
        var Rp = {};
        Object.defineProperty(Rp, "passive", {
          get: function() {
            m1 = !0;
          }
        }), window.addEventListener("test", Rp, Rp), window.removeEventListener("test", Rp, Rp);
      } catch {
        m1 = !1;
      }
    var Vf = null, y1 = null, Fg = null, Hs = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ig = Hl(Hs), Mp = Wt({}, Hs, { view: 0, detail: 0 }), iE = Hl(Mp), p1, g1, Cp, Pg = Wt({}, Mp, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Tr,
      button: 0,
      buttons: 0,
      relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
      },
      movementX: function(t) {
        return "movementX" in t ? t.movementX : (t !== Cp && (Cp && t.type === "mousemove" ? (p1 = t.screenX - Cp.screenX, g1 = t.screenY - Cp.screenY) : g1 = p1 = 0, Cp = t), p1);
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : g1;
      }
    }), DS = Hl(Pg), cE = Wt({}, Pg, { dataTransfer: 0 }), oE = Hl(cE), fE = Wt({}, Mp, { relatedTarget: 0 }), v1 = Hl(fE), rE = Wt({}, Hs, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), sE = Hl(rE), dE = Wt({}, Hs, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), hE = Hl(dE), mE = Wt({}, Hs, { data: 0 }), RS = Hl(
      mE
    ), yE = RS, pE = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, gE = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, vE = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, SE = Wt({}, Mp, {
      key: function(t) {
        if (t.key) {
          var e = pE[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress" ? (t = Er(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? gE[t.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Tr,
      charCode: function(t) {
        return t.type === "keypress" ? Er(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? Er(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), bE = Hl(SE), EE = Wt({}, Pg, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), MS = Hl(EE), TE = Wt({}, Mp, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Tr
    }), AE = Hl(TE), OE = Wt({}, Hs, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), _E = Hl(OE), zE = Wt({}, Pg, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), DE = Hl(zE), RE = Wt({}, Hs, {
      newState: 0,
      oldState: 0
    }), ME = Hl(RE), CE = [9, 13, 27, 32], CS = 229, S1 = mc && "CompositionEvent" in window, Up = null;
    mc && "documentMode" in document && (Up = document.documentMode);
    var UE = mc && "TextEvent" in window && !Up, US = mc && (!S1 || Up && 8 < Up && 11 >= Up), HS = 32, NS = String.fromCharCode(HS), xS = !1, $h = !1, HE = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, Hp = null, Np = null, BS = !1;
    mc && (BS = yd("input") && (!document.documentMode || 9 < document.documentMode));
    var cn = typeof Object.is == "function" ? Object.is : pd, NE = mc && "documentMode" in document && 11 >= document.documentMode, kh = null, b1 = null, xp = null, E1 = !1, Wh = {
      animationend: Rc("Animation", "AnimationEnd"),
      animationiteration: Rc("Animation", "AnimationIteration"),
      animationstart: Rc("Animation", "AnimationStart"),
      transitionrun: Rc("Transition", "TransitionRun"),
      transitionstart: Rc("Transition", "TransitionStart"),
      transitioncancel: Rc("Transition", "TransitionCancel"),
      transitionend: Rc("Transition", "TransitionEnd")
    }, T1 = {}, jS = {};
    mc && (jS = document.createElement("div").style, "AnimationEvent" in window || (delete Wh.animationend.animation, delete Wh.animationiteration.animation, delete Wh.animationstart.animation), "TransitionEvent" in window || delete Wh.transitionend.transition);
    var YS = Mc("animationend"), qS = Mc("animationiteration"), wS = Mc("animationstart"), xE = Mc("transitionrun"), BE = Mc("transitionstart"), jE = Mc("transitioncancel"), GS = Mc("transitionend"), XS = /* @__PURE__ */ new Map(), A1 = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    A1.push("scrollEnd");
    var QS = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var YE = performance, LS = function() {
        return YE.now();
      };
    else {
      var qE = Date;
      LS = function() {
        return qE.now();
      };
    }
    var O1 = typeof reportError == "function" ? reportError : function(t) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var e = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
          error: t
        });
        if (!window.dispatchEvent(e)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", t);
        return;
      }
      console.error(t);
    }, wE = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", tv = 0, _1 = 1, z1 = 2, D1 = 3, ev = "– ", lv = "+ ", VS = "  ", Fe = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", Gu = "Components ⚛", oe = "Scheduler ⚛", se = "Blocking", Zf = !1, yo = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: Gu
    }, Jf = {
      start: -0,
      end: -0,
      detail: { devtools: yo }
    }, GE = ["Changed Props", ""], ZS = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", XE = ["Changed Props", ZS], Bp = 1, po = 2, Xu = [], Fh = 0, R1 = 0, Kf = {};
    Object.freeze(Kf);
    var Qu = null, Ih = null, Ht = 0, QE = 1, Ft = 2, xa = 8, Ei = 16, LE = 32, JS = !1;
    try {
      var KS = Object.preventExtensions({});
    } catch {
      JS = !0;
    }
    var M1 = /* @__PURE__ */ new WeakMap(), Ph = [], tm = 0, av = null, jp = 0, Lu = [], Vu = 0, Ns = null, go = 1, vo = "", _a = null, Ie = null, ce = !1, yc = !1, eu = null, $f = null, Zu = !1, C1 = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), U1 = Be(null), H1 = Be(null), $S = {}, nv = null, em = null, lm = !1, VE = typeof AbortController < "u" ? AbortController : function() {
      var t = [], e = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          t.push(i);
        }
      };
      this.abort = function() {
        e.aborted = !0, t.forEach(function(a) {
          return a();
        });
      };
    }, ZE = yl.unstable_scheduleCallback, JE = yl.unstable_NormalPriority, Gl = {
      $$typeof: In,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Xl = yl.unstable_now, uv = console.createTask ? console.createTask : function() {
      return null;
    }, Yp = 1, iv = 2, ia = -0, kf = -0, So = -0, bo = null, on = -1.1, xs = -0, fl = -0, Ot = -1.1, Ct = -1.1, nl = null, pl = !1, Bs = -0, pc = -1.1, qp = null, Wf = 0, N1 = null, x1 = null, js = -1.1, wp = null, am = -1.1, cv = -1.1, Eo = -0, To = -1.1, Ju = -1.1, B1 = 0, Gp = null, kS = null, WS = null, Ff = -1.1, Ys = null, If = -1.1, ov = -1.1, FS = -0, IS = -0, fv = 0, KE = null, PS = 0, Xp = -1.1, rv = !1, sv = !1, Qp = null, j1 = 0, qs = 0, nm = null, tb = G.S;
    G.S = function(t, e) {
      if (kb = wl(), typeof e == "object" && e !== null && typeof e.then == "function") {
        if (0 > To && 0 > Ju) {
          To = Xl();
          var a = _f(), i = xu();
          (a !== If || i !== Ys) && (If = -1.1), Ff = a, Ys = i;
        }
        ai(t, e);
      }
      tb !== null && tb(t, e);
    };
    var ws = Be(null), Ti = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, Lp = [], Vp = [], Zp = [], Jp = [], Kp = [], $p = [], Gs = /* @__PURE__ */ new Set();
    Ti.recordUnsafeLifecycleWarnings = function(t, e) {
      Gs.has(t.type) || (typeof e.componentWillMount == "function" && e.componentWillMount.__suppressDeprecationWarning !== !0 && Lp.push(t), t.mode & xa && typeof e.UNSAFE_componentWillMount == "function" && Vp.push(t), typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Zp.push(t), t.mode & xa && typeof e.UNSAFE_componentWillReceiveProps == "function" && Jp.push(t), typeof e.componentWillUpdate == "function" && e.componentWillUpdate.__suppressDeprecationWarning !== !0 && Kp.push(t), t.mode & xa && typeof e.UNSAFE_componentWillUpdate == "function" && $p.push(t));
    }, Ti.flushPendingUnsafeLifecycleWarnings = function() {
      var t = /* @__PURE__ */ new Set();
      0 < Lp.length && (Lp.forEach(function(h) {
        t.add(
          dt(h) || "Component"
        ), Gs.add(h.type);
      }), Lp = []);
      var e = /* @__PURE__ */ new Set();
      0 < Vp.length && (Vp.forEach(function(h) {
        e.add(
          dt(h) || "Component"
        ), Gs.add(h.type);
      }), Vp = []);
      var a = /* @__PURE__ */ new Set();
      0 < Zp.length && (Zp.forEach(function(h) {
        a.add(
          dt(h) || "Component"
        ), Gs.add(h.type);
      }), Zp = []);
      var i = /* @__PURE__ */ new Set();
      0 < Jp.length && (Jp.forEach(
        function(h) {
          i.add(
            dt(h) || "Component"
          ), Gs.add(h.type);
        }
      ), Jp = []);
      var o = /* @__PURE__ */ new Set();
      0 < Kp.length && (Kp.forEach(function(h) {
        o.add(
          dt(h) || "Component"
        ), Gs.add(h.type);
      }), Kp = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < $p.length && ($p.forEach(function(h) {
        f.add(
          dt(h) || "Component"
        ), Gs.add(h.type);
      }), $p = []), 0 < e.size) {
        var d = Q(
          e
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = Q(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = Q(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < t.size && (d = Q(t), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = Q(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = Q(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var dv = /* @__PURE__ */ new Map(), eb = /* @__PURE__ */ new Set();
    Ti.recordLegacyContextWarning = function(t, e) {
      for (var a = null, i = t; i !== null; )
        i.mode & xa && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !eb.has(t.type) && (i = dv.get(a), t.type.contextTypes != null || t.type.childContextTypes != null || e !== null && typeof e.getChildContext == "function") && (i === void 0 && (i = [], dv.set(a, i)), i.push(t));
    }, Ti.flushLegacyContextWarning = function() {
      dv.forEach(function(t) {
        if (t.length !== 0) {
          var e = t[0], a = /* @__PURE__ */ new Set();
          t.forEach(function(o) {
            a.add(dt(o) || "Component"), eb.add(o.type);
          });
          var i = Q(a);
          ft(e, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, Ti.discardPendingWarnings = function() {
      Lp = [], Vp = [], Zp = [], Jp = [], Kp = [], $p = [], dv = /* @__PURE__ */ new Map();
    };
    var lb = {
      react_stack_bottom_frame: function(t, e, a) {
        var i = ju;
        ju = !0;
        try {
          return t(e, a);
        } finally {
          ju = i;
        }
      }
    }, Y1 = lb.react_stack_bottom_frame.bind(lb), ab = {
      react_stack_bottom_frame: function(t) {
        var e = ju;
        ju = !0;
        try {
          return t.render();
        } finally {
          ju = e;
        }
      }
    }, nb = ab.react_stack_bottom_frame.bind(ab), ub = {
      react_stack_bottom_frame: function(t, e) {
        try {
          e.componentDidMount();
        } catch (a) {
          Kt(t, t.return, a);
        }
      }
    }, q1 = ub.react_stack_bottom_frame.bind(
      ub
    ), ib = {
      react_stack_bottom_frame: function(t, e, a, i, o) {
        try {
          e.componentDidUpdate(a, i, o);
        } catch (f) {
          Kt(t, t.return, f);
        }
      }
    }, cb = ib.react_stack_bottom_frame.bind(
      ib
    ), ob = {
      react_stack_bottom_frame: function(t, e) {
        var a = e.stack;
        t.componentDidCatch(e.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, $E = ob.react_stack_bottom_frame.bind(
      ob
    ), fb = {
      react_stack_bottom_frame: function(t, e, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          Kt(t, e, i);
        }
      }
    }, rb = fb.react_stack_bottom_frame.bind(
      fb
    ), sb = {
      react_stack_bottom_frame: function(t) {
        var e = t.create;
        return t = t.inst, e = e(), t.destroy = e;
      }
    }, kE = sb.react_stack_bottom_frame.bind(sb), db = {
      react_stack_bottom_frame: function(t, e, a) {
        try {
          a();
        } catch (i) {
          Kt(t, e, i);
        }
      }
    }, WE = db.react_stack_bottom_frame.bind(db), hb = {
      react_stack_bottom_frame: function(t) {
        var e = t._init;
        return e(t._payload);
      }
    }, FE = hb.react_stack_bottom_frame.bind(hb), um = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), w1 = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), hv = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), mv = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Xs = null, kp = !1, im = null, Wp = 0, It = null, G1, mb = G1 = !1, yb = {}, pb = {}, gb = {};
    xt = function(t, e, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = dt(t), o = i || "null";
        if (!yb[o]) {
          yb[o] = !0, a = a._owner, t = t._debugOwner;
          var f = "";
          t && typeof t.tag == "number" && (o = dt(t)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && t !== a && (i = null, typeof a.tag == "number" ? i = dt(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), ft(e, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var Qs = xl(!0), vb = xl(!1), Sb = 0, bb = 1, Eb = 2, X1 = 3, Pf = !1, Tb = !1, Q1 = null, L1 = !1, cm = Be(null), yv = Be(0), lu = Be(null), Ku = null, om = 1, Fp = 2, Ml = Be(0), pv = 0, $u = 1, fn = 2, au = 4, rn = 8, fm, Ab = /* @__PURE__ */ new Set(), Ob = /* @__PURE__ */ new Set(), V1 = /* @__PURE__ */ new Set(), _b = /* @__PURE__ */ new Set(), Ao = 0, jt = null, Ge = null, Ql = null, gv = !1, rm = !1, Ls = !1, vv = 0, Ip = 0, Oo = null, IE = 0, PE = 25, w = null, ku = null, _o = -1, Pp = !1, t0 = {
      readContext: ve,
      use: ci,
      useCallback: cl,
      useContext: cl,
      useEffect: cl,
      useImperativeHandle: cl,
      useLayoutEffect: cl,
      useInsertionEffect: cl,
      useMemo: cl,
      useReducer: cl,
      useRef: cl,
      useState: cl,
      useDebugValue: cl,
      useDeferredValue: cl,
      useTransition: cl,
      useSyncExternalStore: cl,
      useId: cl,
      useHostTransitionStatus: cl,
      useFormState: cl,
      useActionState: cl,
      useOptimistic: cl,
      useMemoCache: cl,
      useCacheRefresh: cl
    };
    t0.useEffectEvent = cl;
    var Z1 = null, zb = null, J1 = null, Db = null, gc = null, Ai = null, Sv = null;
    Z1 = {
      readContext: function(t) {
        return ve(t);
      },
      use: ci,
      useCallback: function(t, e) {
        return w = "useCallback", Bt(), ii(e), Yd(t, e);
      },
      useContext: function(t) {
        return w = "useContext", Bt(), ve(t);
      },
      useEffect: function(t, e) {
        return w = "useEffect", Bt(), ii(e), Jc(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return w = "useImperativeHandle", Bt(), ii(a), Tu(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        w = "useInsertionEffect", Bt(), ii(e), Ii(4, fn, t, e);
      },
      useLayoutEffect: function(t, e) {
        return w = "useLayoutEffect", Bt(), ii(e), ya(t, e);
      },
      useMemo: function(t, e) {
        w = "useMemo", Bt(), ii(e);
        var a = G.H;
        G.H = gc;
        try {
          return pa(t, e);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(t, e, a) {
        w = "useReducer", Bt();
        var i = G.H;
        G.H = gc;
        try {
          return tf(t, e, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function(t) {
        return w = "useRef", Bt(), jd(t);
      },
      useState: function(t) {
        w = "useState", Bt();
        var e = G.H;
        G.H = gc;
        try {
          return $i(t);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        w = "useDebugValue", Bt();
      },
      useDeferredValue: function(t, e) {
        return w = "useDeferredValue", Bt(), uf(t, e);
      },
      useTransition: function() {
        return w = "useTransition", Bt(), Pi();
      },
      useSyncExternalStore: function(t, e, a) {
        return w = "useSyncExternalStore", Bt(), ef(
          t,
          e,
          a
        );
      },
      useId: function() {
        return w = "useId", Bt(), Jr();
      },
      useFormState: function(t, e) {
        return w = "useFormState", Bt(), Br(), Wa(t, e);
      },
      useActionState: function(t, e) {
        return w = "useActionState", Bt(), Wa(t, e);
      },
      useOptimistic: function(t) {
        return w = "useOptimistic", Bt(), Zc(t);
      },
      useHostTransitionStatus: si,
      useMemoCache: $a,
      useCacheRefresh: function() {
        return w = "useCacheRefresh", Bt(), qd();
      },
      useEffectEvent: function(t) {
        return w = "useEffectEvent", Bt(), Vr(t);
      }
    }, zb = {
      readContext: function(t) {
        return ve(t);
      },
      use: ci,
      useCallback: function(t, e) {
        return w = "useCallback", k(), Yd(t, e);
      },
      useContext: function(t) {
        return w = "useContext", k(), ve(t);
      },
      useEffect: function(t, e) {
        return w = "useEffect", k(), Jc(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return w = "useImperativeHandle", k(), Tu(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        w = "useInsertionEffect", k(), Ii(4, fn, t, e);
      },
      useLayoutEffect: function(t, e) {
        return w = "useLayoutEffect", k(), ya(t, e);
      },
      useMemo: function(t, e) {
        w = "useMemo", k();
        var a = G.H;
        G.H = gc;
        try {
          return pa(t, e);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(t, e, a) {
        w = "useReducer", k();
        var i = G.H;
        G.H = gc;
        try {
          return tf(t, e, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function(t) {
        return w = "useRef", k(), jd(t);
      },
      useState: function(t) {
        w = "useState", k();
        var e = G.H;
        G.H = gc;
        try {
          return $i(t);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        w = "useDebugValue", k();
      },
      useDeferredValue: function(t, e) {
        return w = "useDeferredValue", k(), uf(t, e);
      },
      useTransition: function() {
        return w = "useTransition", k(), Pi();
      },
      useSyncExternalStore: function(t, e, a) {
        return w = "useSyncExternalStore", k(), ef(
          t,
          e,
          a
        );
      },
      useId: function() {
        return w = "useId", k(), Jr();
      },
      useActionState: function(t, e) {
        return w = "useActionState", k(), Wa(t, e);
      },
      useFormState: function(t, e) {
        return w = "useFormState", k(), Br(), Wa(t, e);
      },
      useOptimistic: function(t) {
        return w = "useOptimistic", k(), Zc(t);
      },
      useHostTransitionStatus: si,
      useMemoCache: $a,
      useCacheRefresh: function() {
        return w = "useCacheRefresh", k(), qd();
      },
      useEffectEvent: function(t) {
        return w = "useEffectEvent", k(), Vr(t);
      }
    }, J1 = {
      readContext: function(t) {
        return ve(t);
      },
      use: ci,
      useCallback: function(t, e) {
        return w = "useCallback", k(), Ln(t, e);
      },
      useContext: function(t) {
        return w = "useContext", k(), ve(t);
      },
      useEffect: function(t, e) {
        w = "useEffect", k(), _l(2048, rn, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return w = "useImperativeHandle", k(), nf(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return w = "useInsertionEffect", k(), _l(4, fn, t, e);
      },
      useLayoutEffect: function(t, e) {
        return w = "useLayoutEffect", k(), _l(4, au, t, e);
      },
      useMemo: function(t, e) {
        w = "useMemo", k();
        var a = G.H;
        G.H = Ai;
        try {
          return $e(t, e);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(t, e, a) {
        w = "useReducer", k();
        var i = G.H;
        G.H = Ai;
        try {
          return Qc(t, e, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return w = "useRef", k(), Te().memoizedState;
      },
      useState: function() {
        w = "useState", k();
        var t = G.H;
        G.H = Ai;
        try {
          return Qc(ka);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        w = "useDebugValue", k();
      },
      useDeferredValue: function(t, e) {
        return w = "useDeferredValue", k(), Au(t, e);
      },
      useTransition: function() {
        return w = "useTransition", k(), $0();
      },
      useSyncExternalStore: function(t, e, a) {
        return w = "useSyncExternalStore", k(), Vc(
          t,
          e,
          a
        );
      },
      useId: function() {
        return w = "useId", k(), Te().memoizedState;
      },
      useFormState: function(t) {
        return w = "useFormState", k(), Br(), Wi(t);
      },
      useActionState: function(t) {
        return w = "useActionState", k(), Wi(t);
      },
      useOptimistic: function(t, e) {
        return w = "useOptimistic", k(), Xr(t, e);
      },
      useHostTransitionStatus: si,
      useMemoCache: $a,
      useCacheRefresh: function() {
        return w = "useCacheRefresh", k(), Te().memoizedState;
      },
      useEffectEvent: function(t) {
        return w = "useEffectEvent", k(), af(t);
      }
    }, Db = {
      readContext: function(t) {
        return ve(t);
      },
      use: ci,
      useCallback: function(t, e) {
        return w = "useCallback", k(), Ln(t, e);
      },
      useContext: function(t) {
        return w = "useContext", k(), ve(t);
      },
      useEffect: function(t, e) {
        w = "useEffect", k(), _l(2048, rn, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return w = "useImperativeHandle", k(), nf(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return w = "useInsertionEffect", k(), _l(4, fn, t, e);
      },
      useLayoutEffect: function(t, e) {
        return w = "useLayoutEffect", k(), _l(4, au, t, e);
      },
      useMemo: function(t, e) {
        w = "useMemo", k();
        var a = G.H;
        G.H = Sv;
        try {
          return $e(t, e);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(t, e, a) {
        w = "useReducer", k();
        var i = G.H;
        G.H = Sv;
        try {
          return Lc(t, e, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return w = "useRef", k(), Te().memoizedState;
      },
      useState: function() {
        w = "useState", k();
        var t = G.H;
        G.H = Sv;
        try {
          return Lc(ka);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        w = "useDebugValue", k();
      },
      useDeferredValue: function(t, e) {
        return w = "useDeferredValue", k(), Qt(t, e);
      },
      useTransition: function() {
        return w = "useTransition", k(), el();
      },
      useSyncExternalStore: function(t, e, a) {
        return w = "useSyncExternalStore", k(), Vc(
          t,
          e,
          a
        );
      },
      useId: function() {
        return w = "useId", k(), Te().memoizedState;
      },
      useFormState: function(t) {
        return w = "useFormState", k(), Br(), Fi(t);
      },
      useActionState: function(t) {
        return w = "useActionState", k(), Fi(t);
      },
      useOptimistic: function(t, e) {
        return w = "useOptimistic", k(), Qr(t, e);
      },
      useHostTransitionStatus: si,
      useMemoCache: $a,
      useCacheRefresh: function() {
        return w = "useCacheRefresh", k(), Te().memoizedState;
      },
      useEffectEvent: function(t) {
        return w = "useEffectEvent", k(), af(t);
      }
    }, gc = {
      readContext: function(t) {
        return it(), ve(t);
      },
      use: function(t) {
        return lt(), ci(t);
      },
      useCallback: function(t, e) {
        return w = "useCallback", lt(), Bt(), Yd(t, e);
      },
      useContext: function(t) {
        return w = "useContext", lt(), Bt(), ve(t);
      },
      useEffect: function(t, e) {
        return w = "useEffect", lt(), Bt(), Jc(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return w = "useImperativeHandle", lt(), Bt(), Tu(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        w = "useInsertionEffect", lt(), Bt(), Ii(4, fn, t, e);
      },
      useLayoutEffect: function(t, e) {
        return w = "useLayoutEffect", lt(), Bt(), ya(t, e);
      },
      useMemo: function(t, e) {
        w = "useMemo", lt(), Bt();
        var a = G.H;
        G.H = gc;
        try {
          return pa(t, e);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(t, e, a) {
        w = "useReducer", lt(), Bt();
        var i = G.H;
        G.H = gc;
        try {
          return tf(t, e, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function(t) {
        return w = "useRef", lt(), Bt(), jd(t);
      },
      useState: function(t) {
        w = "useState", lt(), Bt();
        var e = G.H;
        G.H = gc;
        try {
          return $i(t);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        w = "useDebugValue", lt(), Bt();
      },
      useDeferredValue: function(t, e) {
        return w = "useDeferredValue", lt(), Bt(), uf(t, e);
      },
      useTransition: function() {
        return w = "useTransition", lt(), Bt(), Pi();
      },
      useSyncExternalStore: function(t, e, a) {
        return w = "useSyncExternalStore", lt(), Bt(), ef(
          t,
          e,
          a
        );
      },
      useId: function() {
        return w = "useId", lt(), Bt(), Jr();
      },
      useFormState: function(t, e) {
        return w = "useFormState", lt(), Bt(), Wa(t, e);
      },
      useActionState: function(t, e) {
        return w = "useActionState", lt(), Bt(), Wa(t, e);
      },
      useOptimistic: function(t) {
        return w = "useOptimistic", lt(), Bt(), Zc(t);
      },
      useMemoCache: function(t) {
        return lt(), $a(t);
      },
      useHostTransitionStatus: si,
      useCacheRefresh: function() {
        return w = "useCacheRefresh", Bt(), qd();
      },
      useEffectEvent: function(t) {
        return w = "useEffectEvent", lt(), Bt(), Vr(t);
      }
    }, Ai = {
      readContext: function(t) {
        return it(), ve(t);
      },
      use: function(t) {
        return lt(), ci(t);
      },
      useCallback: function(t, e) {
        return w = "useCallback", lt(), k(), Ln(t, e);
      },
      useContext: function(t) {
        return w = "useContext", lt(), k(), ve(t);
      },
      useEffect: function(t, e) {
        w = "useEffect", lt(), k(), _l(2048, rn, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return w = "useImperativeHandle", lt(), k(), nf(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return w = "useInsertionEffect", lt(), k(), _l(4, fn, t, e);
      },
      useLayoutEffect: function(t, e) {
        return w = "useLayoutEffect", lt(), k(), _l(4, au, t, e);
      },
      useMemo: function(t, e) {
        w = "useMemo", lt(), k();
        var a = G.H;
        G.H = Ai;
        try {
          return $e(t, e);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(t, e, a) {
        w = "useReducer", lt(), k();
        var i = G.H;
        G.H = Ai;
        try {
          return Qc(t, e, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return w = "useRef", lt(), k(), Te().memoizedState;
      },
      useState: function() {
        w = "useState", lt(), k();
        var t = G.H;
        G.H = Ai;
        try {
          return Qc(ka);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        w = "useDebugValue", lt(), k();
      },
      useDeferredValue: function(t, e) {
        return w = "useDeferredValue", lt(), k(), Au(t, e);
      },
      useTransition: function() {
        return w = "useTransition", lt(), k(), $0();
      },
      useSyncExternalStore: function(t, e, a) {
        return w = "useSyncExternalStore", lt(), k(), Vc(
          t,
          e,
          a
        );
      },
      useId: function() {
        return w = "useId", lt(), k(), Te().memoizedState;
      },
      useFormState: function(t) {
        return w = "useFormState", lt(), k(), Wi(t);
      },
      useActionState: function(t) {
        return w = "useActionState", lt(), k(), Wi(t);
      },
      useOptimistic: function(t, e) {
        return w = "useOptimistic", lt(), k(), Xr(t, e);
      },
      useMemoCache: function(t) {
        return lt(), $a(t);
      },
      useHostTransitionStatus: si,
      useCacheRefresh: function() {
        return w = "useCacheRefresh", k(), Te().memoizedState;
      },
      useEffectEvent: function(t) {
        return w = "useEffectEvent", lt(), k(), af(t);
      }
    }, Sv = {
      readContext: function(t) {
        return it(), ve(t);
      },
      use: function(t) {
        return lt(), ci(t);
      },
      useCallback: function(t, e) {
        return w = "useCallback", lt(), k(), Ln(t, e);
      },
      useContext: function(t) {
        return w = "useContext", lt(), k(), ve(t);
      },
      useEffect: function(t, e) {
        w = "useEffect", lt(), k(), _l(2048, rn, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return w = "useImperativeHandle", lt(), k(), nf(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return w = "useInsertionEffect", lt(), k(), _l(4, fn, t, e);
      },
      useLayoutEffect: function(t, e) {
        return w = "useLayoutEffect", lt(), k(), _l(4, au, t, e);
      },
      useMemo: function(t, e) {
        w = "useMemo", lt(), k();
        var a = G.H;
        G.H = Ai;
        try {
          return $e(t, e);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(t, e, a) {
        w = "useReducer", lt(), k();
        var i = G.H;
        G.H = Ai;
        try {
          return Lc(t, e, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return w = "useRef", lt(), k(), Te().memoizedState;
      },
      useState: function() {
        w = "useState", lt(), k();
        var t = G.H;
        G.H = Ai;
        try {
          return Lc(ka);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        w = "useDebugValue", lt(), k();
      },
      useDeferredValue: function(t, e) {
        return w = "useDeferredValue", lt(), k(), Qt(t, e);
      },
      useTransition: function() {
        return w = "useTransition", lt(), k(), el();
      },
      useSyncExternalStore: function(t, e, a) {
        return w = "useSyncExternalStore", lt(), k(), Vc(
          t,
          e,
          a
        );
      },
      useId: function() {
        return w = "useId", lt(), k(), Te().memoizedState;
      },
      useFormState: function(t) {
        return w = "useFormState", lt(), k(), Fi(t);
      },
      useActionState: function(t) {
        return w = "useActionState", lt(), k(), Fi(t);
      },
      useOptimistic: function(t, e) {
        return w = "useOptimistic", lt(), k(), Qr(t, e);
      },
      useMemoCache: function(t) {
        return lt(), $a(t);
      },
      useHostTransitionStatus: si,
      useCacheRefresh: function() {
        return w = "useCacheRefresh", k(), Te().memoizedState;
      },
      useEffectEvent: function(t) {
        return w = "useEffectEvent", lt(), k(), af(t);
      }
    };
    var Rb = {}, Mb = /* @__PURE__ */ new Set(), Cb = /* @__PURE__ */ new Set(), Ub = /* @__PURE__ */ new Set(), Hb = /* @__PURE__ */ new Set(), Nb = /* @__PURE__ */ new Set(), xb = /* @__PURE__ */ new Set(), Bb = /* @__PURE__ */ new Set(), jb = /* @__PURE__ */ new Set(), Yb = /* @__PURE__ */ new Set(), qb = /* @__PURE__ */ new Set();
    Object.freeze(Rb);
    var K1 = {
      enqueueSetState: function(t, e, a) {
        t = t._reactInternals;
        var i = aa(t), o = Ol(i);
        o.payload = e, a != null && (Wc(a), o.callback = a), e = vu(t, o, i), e !== null && (yu(i, "this.setState()", t), Nt(e, t, i), En(e, t, i));
      },
      enqueueReplaceState: function(t, e, a) {
        t = t._reactInternals;
        var i = aa(t), o = Ol(i);
        o.tag = bb, o.payload = e, a != null && (Wc(a), o.callback = a), e = vu(t, o, i), e !== null && (yu(i, "this.replaceState()", t), Nt(e, t, i), En(e, t, i));
      },
      enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var a = aa(t), i = Ol(a);
        i.tag = Eb, e != null && (Wc(e), i.callback = e), e = vu(t, i, a), e !== null && (yu(a, "this.forceUpdate()", t), Nt(e, t, a), En(e, t, a));
      }
    }, sm = null, $1 = null, k1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Ll = !1, wb = {}, Gb = {}, Xb = {}, Qb = {}, dm = !1, Lb = {}, bv = {}, W1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, Vb = !1, Zb = null;
    Zb = /* @__PURE__ */ new Set();
    var zo = !1, Vl = !1, F1 = !1, Jb = typeof WeakSet == "function" ? WeakSet : Set, ca = null, hm = null, mm = null, Zl = null, Dn = !1, Oi = null, Fl = !1, e0 = 8192, tT = {
      getCacheForType: function(t) {
        var e = ve(Gl), a = e.data.get(t);
        return a === void 0 && (a = t(), e.data.set(t, a)), a;
      },
      cacheSignal: function() {
        return ve(Gl).controller.signal;
      },
      getOwner: function() {
        return Na;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var l0 = Symbol.for;
      l0("selector.component"), l0("selector.has_pseudo_class"), l0("selector.role"), l0("selector.test_id"), l0("selector.text");
    }
    var eT = [], lT = typeof WeakMap == "function" ? WeakMap : Map, oa = 0, Il = 2, nu = 4, Do = 0, a0 = 1, Vs = 2, Ev = 3, tr = 4, Tv = 6, Kb = 5, he = oa, Xe = null, le = null, Pt = 0, Rn = 0, Av = 1, Zs = 2, n0 = 3, $b = 4, I1 = 5, u0 = 6, Ov = 7, P1 = 8, Js = 9, Ne = Rn, uu = null, er = !1, ym = !1, tS = !1, vc = 0, rl = Do, lr = 0, ar = 0, eS = 0, Mn = 0, Ks = 0, i0 = null, sn = null, _v = !1, zv = 0, kb = 0, Wb = 300, Dv = 1 / 0, Fb = 500, c0 = null, El = null, nr = null, Rv = 0, lS = 1, aS = 2, Ib = 3, ur = 0, Pb = 1, t2 = 2, e2 = 3, l2 = 4, Mv = 5, Jl = 0, ir = null, pm = null, _i = 0, nS = 0, uS = -0, iS = null, a2 = null, n2 = null, zi = Rv, u2 = null, aT = 50, o0 = 0, cS = null, oS = !1, Cv = !1, nT = 50, $s = 0, f0 = null, gm = !1, Uv = null, i2 = !1, c2 = /* @__PURE__ */ new Set(), uT = {}, Hv = null, vm = null, fS = !1, rS = !1, Nv = !1, sS = !1, cr = 0, dS = {};
    (function() {
      for (var t = 0; t < A1.length; t++) {
        var e = A1[t], a = e.toLowerCase();
        e = e[0].toUpperCase() + e.slice(1), Nn(a, "on" + e);
      }
      Nn(YS, "onAnimationEnd"), Nn(qS, "onAnimationIteration"), Nn(wS, "onAnimationStart"), Nn("dblclick", "onDoubleClick"), Nn("focusin", "onFocus"), Nn("focusout", "onBlur"), Nn(xE, "onTransitionRun"), Nn(BE, "onTransitionStart"), Nn(jE, "onTransitionCancel"), Nn(GS, "onTransitionEnd");
    })(), Gt("onMouseEnter", ["mouseout", "mouseover"]), Gt("onMouseLeave", ["mouseout", "mouseover"]), Gt("onPointerEnter", ["pointerout", "pointerover"]), Gt("onPointerLeave", ["pointerout", "pointerover"]), te(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), te(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), te("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), te(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), te(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), te(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var r0 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), hS = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(r0)
    ), xv = "_reactListening" + Math.random().toString(36).slice(2), o2 = !1, f2 = !1, Bv = !1, r2 = !1, jv = !1, Yv = !1, s2 = !1, qv = {}, iT = /\r\n?/g, cT = /\u0000|\uFFFD/g, ks = "http://www.w3.org/1999/xlink", mS = "http://www.w3.org/XML/1998/namespace", oT = "javascript:throw new Error('React form unexpectedly submitted.')", fT = "suppressHydrationWarning", Ws = "&", wv = "/&", s0 = "$", d0 = "/$", or = "$?", Fs = "$~", Sm = "$!", rT = "html", sT = "body", dT = "head", yS = "F!", d2 = "F", h2 = "loading", hT = "style", Ro = 0, bm = 1, Gv = 2, pS = null, gS = null, m2 = { dialog: !0, webview: !0 }, vS = null, h0 = void 0, y2 = typeof setTimeout == "function" ? setTimeout : void 0, mT = typeof clearTimeout == "function" ? clearTimeout : void 0, Is = -1, p2 = typeof Promise == "function" ? Promise : void 0, yT = typeof queueMicrotask == "function" ? queueMicrotask : typeof p2 < "u" ? function(t) {
      return p2.resolve(null).then(t).catch(pg);
    } : y2, SS = null, Ps = 0, m0 = 1, g2 = 2, v2 = 3, Wu = 4, Fu = /* @__PURE__ */ new Map(), S2 = /* @__PURE__ */ new Set(), Mo = be.d;
    be.d = {
      f: function() {
        var t = Mo.f(), e = en();
        return t || e;
      },
      r: function(t) {
        var e = at(t);
        e !== null && e.tag === 5 && e.type === "form" ? cf(e) : Mo.r(t);
      },
      D: function(t) {
        Mo.D(t), ep("dns-prefetch", t, null);
      },
      C: function(t, e) {
        Mo.C(t, e), ep("preconnect", t, e);
      },
      L: function(t, e, a) {
        Mo.L(t, e, a);
        var i = Em;
        if (i && t && e) {
          var o = 'link[rel="preload"][as="' + Re(e) + '"]';
          e === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Re(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Re(
            a.imageSizes
          ) + '"]')) : o += '[href="' + Re(t) + '"]';
          var f = o;
          switch (e) {
            case "style":
              f = io(t);
              break;
            case "script":
              f = co(t);
          }
          Fu.has(f) || (t = Wt(
            {
              rel: "preload",
              href: e === "image" && a && a.imageSrcSet ? void 0 : t,
              as: e
            },
            a
          ), Fu.set(f, t), i.querySelector(o) !== null || e === "style" && i.querySelector(
            vs(f)
          ) || e === "script" && i.querySelector(Ss(f)) || (e = i.createElement("link"), ke(e, "link", t), yt(e), i.head.appendChild(e)));
        }
      },
      m: function(t, e) {
        Mo.m(t, e);
        var a = Em;
        if (a && t) {
          var i = e && typeof e.as == "string" ? e.as : "script", o = 'link[rel="modulepreload"][as="' + Re(i) + '"][href="' + Re(t) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = co(t);
          }
          if (!Fu.has(f) && (t = Wt({ rel: "modulepreload", href: t }, e), Fu.set(f, t), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(Ss(f)))
                  return;
            }
            i = a.createElement("link"), ke(i, "link", t), yt(i), a.head.appendChild(i);
          }
        }
      },
      X: function(t, e) {
        Mo.X(t, e);
        var a = Em;
        if (a && t) {
          var i = Mt(a).hoistableScripts, o = co(t), f = i.get(o);
          f || (f = a.querySelector(
            Ss(o)
          ), f || (t = Wt({ src: t, async: !0 }, e), (e = Fu.get(o)) && np(t, e), f = a.createElement("script"), yt(f), ke(f, "link", t), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(t, e, a) {
        Mo.S(t, e, a);
        var i = Em;
        if (i && t) {
          var o = Mt(i).hoistableStyles, f = io(t);
          e = e || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: Ps, preload: null };
            if (d = i.querySelector(
              vs(f)
            ))
              h.loading = m0 | Wu;
            else {
              t = Wt(
                {
                  rel: "stylesheet",
                  href: t,
                  "data-precedence": e
                },
                a
              ), (a = Fu.get(f)) && ap(t, a);
              var y = d = i.createElement("link");
              yt(y), ke(y, "link", t), y._p = new Promise(function(p, _) {
                y.onload = p, y.onerror = _;
              }), y.addEventListener("load", function() {
                h.loading |= m0;
              }), y.addEventListener("error", function() {
                h.loading |= g2;
              }), h.loading |= Wu, Rf(d, e, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(t, e) {
        Mo.M(t, e);
        var a = Em;
        if (a && t) {
          var i = Mt(a).hoistableScripts, o = co(t), f = i.get(o);
          f || (f = a.querySelector(
            Ss(o)
          ), f || (t = Wt({ src: t, async: !0, type: "module" }, e), (e = Fu.get(o)) && np(t, e), f = a.createElement("script"), yt(f), ke(f, "link", t), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var Em = typeof document > "u" ? null : document, Xv = null, pT = 6e4, gT = 800, vT = 500, bS = 0, ES = null, Qv = null, td = s1, y0 = {
      $$typeof: In,
      Provider: null,
      Consumer: null,
      _currentValue: td,
      _currentValue2: td,
      _threadCount: 0
    }, b2 = "%c%s%c", E2 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", T2 = "", Lv = " ", ST = Function.prototype.bind, A2 = !1, O2 = null, _2 = null, z2 = null, D2 = null, R2 = null, M2 = null, C2 = null, U2 = null, H2 = null, N2 = null;
    O2 = function(t, e, a, i) {
      e = D(t, e), e !== null && (a = V(e.memoizedState, a, 0, i), e.memoizedState = a, e.baseState = a, t.memoizedProps = Wt({}, t.memoizedProps), a = ea(t, 2), a !== null && Nt(a, t, 2));
    }, _2 = function(t, e, a) {
      e = D(t, e), e !== null && (a = ut(e.memoizedState, a, 0), e.memoizedState = a, e.baseState = a, t.memoizedProps = Wt({}, t.memoizedProps), a = ea(t, 2), a !== null && Nt(a, t, 2));
    }, z2 = function(t, e, a, i) {
      e = D(t, e), e !== null && (a = tt(e.memoizedState, a, i), e.memoizedState = a, e.baseState = a, t.memoizedProps = Wt({}, t.memoizedProps), a = ea(t, 2), a !== null && Nt(a, t, 2));
    }, D2 = function(t, e, a) {
      t.pendingProps = V(t.memoizedProps, e, 0, a), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = ea(t, 2), e !== null && Nt(e, t, 2);
    }, R2 = function(t, e) {
      t.pendingProps = ut(t.memoizedProps, e, 0), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = ea(t, 2), e !== null && Nt(e, t, 2);
    }, M2 = function(t, e, a) {
      t.pendingProps = tt(
        t.memoizedProps,
        e,
        a
      ), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = ea(t, 2), e !== null && Nt(e, t, 2);
    }, C2 = function(t) {
      var e = ea(t, 2);
      e !== null && Nt(e, t, 2);
    }, U2 = function(t) {
      var e = Ho(), a = ea(t, e);
      a !== null && Nt(a, t, e);
    }, H2 = function(t) {
      Lt = t;
    }, N2 = function(t) {
      zt = t;
    };
    var Vv = !0, Zv = null, TS = !1, fr = null, rr = null, sr = null, p0 = /* @__PURE__ */ new Map(), g0 = /* @__PURE__ */ new Map(), dr = [], bT = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Jv = null;
    if (Fn.prototype.render = mp.prototype.render = function(t) {
      var e = this._internalRoot;
      if (e === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : re(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = t;
      var i = e.current, o = aa(i);
      Rh(i, o, a, e, null, null);
    }, Fn.prototype.unmount = mp.prototype.unmount = function() {
      var t = arguments;
      if (typeof t[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), t = this._internalRoot, t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        (he & (Il | nu)) !== oa && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), Rh(t.current, 2, null, t, null, null), en(), e[bi] = null;
      }
    }, Fn.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var e = Ui();
        t = { blockedOn: null, target: t, priority: e };
        for (var a = 0; a < dr.length && e !== 0 && e < dr[a].priority; a++) ;
        dr.splice(a, 0, t), a === 0 && hp(t);
      }
    }, (function() {
      var t = Os.version;
      if (t !== "19.2.7")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (t + `
  - react-dom:  19.2.7
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), be.findDOMNode = function(t) {
      var e = t._reactInternals;
      if (e === void 0)
        throw typeof t.render == "function" ? Error("Unable to find node on an unmounted component.") : (t = Object.keys(t).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + t
        ));
      return t = tl(e), t = t !== null ? ul(t) : null, t = t === null ? null : t.stateNode, t;
    }, !(function() {
      var t = {
        bundleType: 1,
        version: "19.2.7",
        rendererPackageName: "react-dom",
        currentDispatcherRef: G,
        reconcilerVersion: "19.2.7"
      };
      return t.overrideHookState = O2, t.overrideHookStateDeletePath = _2, t.overrideHookStateRenamePath = z2, t.overrideProps = D2, t.overridePropsDeletePath = R2, t.overridePropsRenamePath = M2, t.scheduleUpdate = C2, t.scheduleRetry = U2, t.setErrorHandler = H2, t.setSuspenseHandler = N2, t.scheduleRefresh = Zt, t.scheduleRoot = ot, t.setRefreshHandler = De, t.getCurrentFiber = Ue, mr(t);
    })() && mc && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var x2 = window.location.protocol;
      /^(https?|file):$/.test(x2) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (x2 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    T0.createRoot = function(t, e) {
      if (!re(t))
        throw Error("Target container is not a DOM element.");
      yp(t);
      var a = !1, i = "", o = Xd, f = Qd, d = fy;
      return e != null && (e.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof e == "object" && e !== null && e.$$typeof === _n && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (i = e.identifierPrefix), e.onUncaughtError !== void 0 && (o = e.onUncaughtError), e.onCaughtError !== void 0 && (f = e.onCaughtError), e.onRecoverableError !== void 0 && (d = e.onRecoverableError)), e = Ts(
        t,
        1,
        !1,
        null,
        null,
        a,
        i,
        null,
        o,
        f,
        d,
        Gg
      ), t[bi] = e.current, ic(t), new mp(e);
    }, T0.hydrateRoot = function(t, e, a) {
      if (!re(t))
        throw Error("Target container is not a DOM element.");
      yp(t), e === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = Xd, d = Qd, h = fy, y = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), e = Ts(
        t,
        1,
        !0,
        e,
        a ?? null,
        i,
        o,
        y,
        f,
        d,
        h,
        Gg
      ), e.context = jg(null), a = e.current, i = aa(a), i = dn(i), o = Ol(i), o.callback = null, vu(a, o, i), yu(i, "hydrateRoot()", null), a = i, e.current.lanes = a, Cn(e, a), Ma(e), t[bi] = e.current, ic(t), new Fn(e);
    }, T0.version = "19.2.7", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), T0;
}
var k2;
function BT() {
  if (k2) return kv.exports;
  k2 = 1;
  function D() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D);
      } catch (V) {
        console.error(V);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (D(), kv.exports = NT()) : kv.exports = xT(), kv.exports;
}
var jT = BT();
const Tm = "tablet-info-card", YT = "0.2.0", qT = {
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
}, hr = (D, V) => {
  const tt = String(D ?? V).trim();
  return tt.length > 0 ? tt.replace(/[{};]/g, "") : V;
}, wT = (D, V) => `
  :host {
    display: block;
    font-family: var(--paper-font-body1_-_font-family, var(--primary-font-family, sans-serif));
    --tic-background: ${hr(V.background, "#202226")};
    --tic-main-color: ${hr(V.mainColor, "#18bcf2")};
    --tic-highlight-color: ${hr(D.text_highlight, "#ff7b22")};
    --tic-height: ${hr(D.height, "118px")};
    --tic-border-radius: ${hr(D.border_radius, "16px")};
    --tic-icon-size: ${hr(D.icon_size, "30px")};
    --tic-icon-col-width: ${hr(D.icon_col_width, "32px")};
    --tic-row-indent: ${hr(D.row_indent, "10px")};
  }

  ha-card {
    display: block;
    min-height: var(--tic-height);
    border-radius: var(--tic-border-radius);
    background: var(--tic-background);
    border: 1px solid color-mix(in srgb, var(--tic-main-color) 75%, transparent);
    box-shadow:
      0 0 0 1px color-mix(in srgb, var(--tic-main-color) 18%, transparent) inset,
      0 0 12px color-mix(in srgb, var(--tic-main-color) 55%, transparent);
    overflow: hidden;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .tic-card {
    min-height: var(--tic-height);
    box-sizing: border-box;
    display: grid;
    grid-template-rows: min-content 1fr;
    gap: 7px;
    padding: 10px 11px 9px 11px;
    color: var(--tic-main-color);
    cursor: default;
  }

  .tic-card.clickable {
    cursor: pointer;
  }

  .tic-header {
    display: grid;
    grid-template-columns: var(--tic-icon-col-width) 1fr;
    column-gap: 8px;
    align-items: center;
    min-width: 0;
  }

  .tic-icon-cell {
    width: var(--tic-icon-col-width);
    height: var(--tic-icon-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ha-icon {
    --mdc-icon-size: var(--tic-icon-size);
    --iron-icon-width: var(--tic-icon-size);
    --iron-icon-height: var(--tic-icon-size);
    color: var(--tic-main-color);
    filter: drop-shadow(0 0 5px color-mix(in srgb, var(--tic-main-color) 42%, transparent));
  }

  .tic-title {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: 0;
    color: var(--tic-main-color);
  }

  .tic-rows {
    min-width: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 6px;
    padding-left: var(--tic-row-indent);
  }

  .tic-row {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 11px;
    line-height: 1.15;
    color: var(--tic-main-color);
  }

  .tic-row.button {
    cursor: pointer;
  }

  .tic-row.warn {
    color: var(--tic-highlight-color);
    font-weight: 700;
  }

  .tic-row.empty {
    opacity: 0.7;
  }
`, Di = (D) => D != null && D !== "", O0 = (D) => D === !0 || D === "true" || D === "True" || D === "on" || D === "yes" || D === 1 || D === "1", Uo = (D) => Di(D) ? String(D).replace(/\s+/g, " ").trim() : "", GT = (D) => {
  const V = Uo(D);
  return V.length > 0 ? V : null;
}, XT = (D, V) => {
  if (!D)
    return "";
  const tt = Array.isArray(D.state) || typeof D.state == "object" ? JSON.stringify(D.state) : D.state, C = V ?? (D.attributes?.unit_of_measurement ? String(D.attributes.unit_of_measurement) : "");
  return C ? `${tt} ${C}` : tt;
}, I2 = (D, V) => {
  const tt = P2(V, D.entity), C = tt?.attributes ?? {}, ut = Di(D.warn) ? O0(D.warn) : O0(C.is_warn), zt = Uo(D.navigation_path || C.navigation_path) || void 0, Lt = LT(D, V, C, ut);
  return {
    entity: tt,
    title: QT(D, tt, C),
    icon: Uo(D.icon || C.icon) || "mdi:flash",
    navigationPath: zt,
    isWarn: ut,
    mainColor: ut ? D.text_nok : D.text_ok,
    background: ut ? D.background_nok : D.background_ok,
    rows: Lt,
    isClickable: !!(D.tap_action || zt || D.entity)
  };
}, P2 = (D, V) => V && D?.states ? D.states[V] : void 0, QT = (D, V, tt) => Uo(D.name || tt.name || tt.friendly_name || V?.attributes?.friendly_name || D.entity || ""), LT = (D, V, tt, C) => Array.isArray(D.rows) && D.rows.length > 0 ? D.rows.slice(0, 3).map((ut) => VT(ut, V, C)).filter((ut) => Di(ut.text)) : [1, 2, 3].map((ut) => ({
  entity: GT(tt[`row_${ut}_entity`]),
  text: Uo(tt[`row_${ut}_text`]),
  warn: O0(tt[`row_${ut}_warn`])
})).filter((ut) => Di(ut.text)), VT = (D, V, tt) => {
  const C = P2(V, D.entity), ut = Di(D.text) ? Uo(D.text) : ZT(C, D);
  return {
    entity: D.entity ?? null,
    text: ut,
    warn: Di(D.warn) ? O0(D.warn) : tt && O0(D.inherit_warn),
    tap_action: D.tap_action
  };
}, ZT = (D, V) => {
  if (!D)
    return "";
  const tt = V.name || D.attributes?.friendly_name || V.entity || "", C = V.attribute ? D.attributes?.[V.attribute] : XT(D, V.unit), ut = Array.isArray(C) || typeof C == "object" ? JSON.stringify(C) : Uo(C);
  return Di(ut) ? V.show_name === !1 ? ut : `${Uo(tt)}: ${ut}` : Uo(tt);
}, JT = ({ icon: D, title: V }) => /* @__PURE__ */ Ya.jsxs("div", { className: "tic-header", children: [
  /* @__PURE__ */ Ya.jsx("div", { className: "tic-icon-cell", children: /* @__PURE__ */ Ya.jsx("ha-icon", { icon: D }) }),
  /* @__PURE__ */ Ya.jsx("div", { className: "tic-title", children: V })
] }), KT = ({ row: D, onTap: V }) => {
  const tt = !!(D.entity || D.tap_action), C = ["tic-row", D.warn ? "warn" : "", tt ? "button" : ""].filter(Boolean).join(" "), ut = (Lt) => {
    tt && (Lt.stopPropagation(), V(D));
  }, zt = (Lt) => {
    !tt || Lt.key !== "Enter" && Lt.key !== " " || (Lt.preventDefault(), Lt.stopPropagation(), V(D));
  };
  return /* @__PURE__ */ Ya.jsx(
    "div",
    {
      className: C,
      role: tt ? "button" : "presentation",
      tabIndex: tt ? 0 : -1,
      onClick: ut,
      onKeyDown: zt,
      title: D.text,
      children: D.text
    }
  );
}, $T = ({ rows: D, onRowTap: V }) => /* @__PURE__ */ Ya.jsx("div", { className: "tic-rows", children: D.length > 0 ? D.map((tt, C) => /* @__PURE__ */ Ya.jsx(KT, { row: tt, onTap: V }, `${tt.entity ?? "row"}-${C}`)) : /* @__PURE__ */ Ya.jsx("div", { className: "tic-row empty", children: "No rows configured" }) }), kT = ({ config: D, hass: V, onCardTap: tt, onRowTap: C }) => {
  const ut = I2(D, V), zt = ["tic-card", ut.isClickable ? "clickable" : ""].filter(Boolean).join(" "), Lt = (lt) => {
    !ut.isClickable || lt.key !== "Enter" && lt.key !== " " || (lt.preventDefault(), tt());
  };
  return /* @__PURE__ */ Ya.jsxs(Ya.Fragment, { children: [
    /* @__PURE__ */ Ya.jsx("style", { children: wT(D, ut) }),
    /* @__PURE__ */ Ya.jsx("ha-card", { children: /* @__PURE__ */ Ya.jsxs(
      "div",
      {
        className: zt,
        role: ut.isClickable ? "button" : "presentation",
        tabIndex: ut.isClickable ? 0 : -1,
        onClick: ut.isClickable ? tt : void 0,
        onKeyDown: Lt,
        children: [
          /* @__PURE__ */ Ya.jsx(JT, { icon: ut.icon, title: ut.title }),
          /* @__PURE__ */ Ya.jsx($T, { rows: ut.rows, onRowTap: C })
        ]
      }
    ) })
  ] });
};
class WT extends HTMLElement {
  constructor() {
    super();
    v0(this, "config");
    v0(this, "hassState");
    v0(this, "mountElement");
    v0(this, "reactRoot");
    const tt = this.attachShadow({ mode: "open" });
    this.mountElement = document.createElement("div"), tt.appendChild(this.mountElement);
  }
  connectedCallback() {
    this.reactRoot || (this.reactRoot = jT.createRoot(this.mountElement)), this.renderReact();
  }
  setConfig(tt) {
    this.config = {
      ...qT,
      ...tt
    }, this.renderReact();
  }
  set hass(tt) {
    this.hassState = tt, this.renderReact();
  }
  disconnectedCallback() {
    this.reactRoot?.unmount(), this.reactRoot = void 0;
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
  renderReact() {
    !this.config || !this.reactRoot || this.reactRoot.render(
      /* @__PURE__ */ Ya.jsx(
        kT,
        {
          config: this.config,
          hass: this.hassState,
          onCardTap: () => this.handleCardTap(),
          onRowTap: (tt) => this.handleRowTap(tt)
        }
      )
    );
  }
  handleCardTap() {
    if (!this.config)
      return;
    const tt = I2(this.config, this.hassState), C = this.config.tap_action || (tt.navigationPath ? { action: "navigate", navigation_path: tt.navigationPath } : this.config.entity ? { action: "more-info" } : null);
    C && this.fireAction({
      entity: this.config.entity,
      tap_action: C
    });
  }
  handleRowTap(tt) {
    if (!this.config)
      return;
    const C = tt.tap_action || (tt.entity ? { action: "more-info" } : null);
    C && this.fireAction({
      entity: tt.entity || this.config.entity,
      tap_action: C
    });
  }
  fireAction(tt) {
    this.dispatchEvent(
      new CustomEvent("hass-action", {
        bubbles: !0,
        composed: !0,
        detail: {
          config: tt,
          action: "tap"
        }
      })
    );
  }
}
customElements.get(Tm) || customElements.define(Tm, WT);
window.customCards = window.customCards || [];
window.customCards.some((D) => D.type === Tm) || window.customCards.push({
  type: Tm,
  name: "Tablet Info Card",
  preview: !0,
  description: "Compact status and navigation card with up to three detail rows.",
  documentationURL: "https://github.com/petosiso/tablet-info-card",
  getEntitySuggestion: (D, V) => {
    const tt = D.states[V]?.attributes ?? {};
    return Di(tt.navigation_path) || Di(tt.row_1_text) || Di(tt.row_2_text) || Di(tt.row_3_text) ? {
      config: {
        type: `custom:${Tm}`,
        entity: V
      }
    } : null;
  }
});
console.info(
  `%c ${Tm} %c ${YT} `,
  "color: white; background: #18bcf2; font-weight: 700;",
  "color: #18bcf2; background: transparent; font-weight: 700;"
);
