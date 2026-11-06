function KE(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var mf = { exports: {} }, pt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var g0;
function JE() {
  if (g0) return pt;
  g0 = 1;
  var i = Symbol.for("react.transitional.element"), l = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), h = Symbol.for("react.consumer"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), S = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), b = Symbol.for("react.view_transition"), R = Symbol.iterator;
  function z(E) {
    return E === null || typeof E != "object" ? null : (E = R && E[R] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var B = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, _ = Object.assign, X = {};
  function K(E, L, Z) {
    this.props = E, this.context = L, this.refs = X, this.updater = Z || B;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(E, L) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, L, "setState");
  }, K.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function k() {
  }
  k.prototype = K.prototype;
  function $(E, L, Z) {
    this.props = E, this.context = L, this.refs = X, this.updater = Z || B;
  }
  var et = $.prototype = new k();
  et.constructor = $, _(et, K.prototype), et.isPureReactComponent = !0;
  var st = Array.isArray;
  function U() {
  }
  var G = { H: null, A: null, T: null, S: null }, P = Object.prototype.hasOwnProperty;
  function ut(E, L, Z) {
    var W = Z.ref;
    return {
      $$typeof: i,
      type: E,
      key: L,
      ref: W !== void 0 ? W : null,
      props: Z
    };
  }
  function mt(E, L) {
    return ut(E.type, L, E.props);
  }
  function dt(E) {
    return typeof E == "object" && E !== null && E.$$typeof === i;
  }
  function Ot(E) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(Z) {
      return L[Z];
    });
  }
  var St = /\/+/g;
  function J(E, L) {
    return typeof E == "object" && E !== null && E.key != null ? Ot("" + E.key) : L.toString(36);
  }
  function w(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(U, U) : (E.status = "pending", E.then(
          function(L) {
            E.status === "pending" && (E.status = "fulfilled", E.value = L);
          },
          function(L) {
            E.status === "pending" && (E.status = "rejected", E.reason = L);
          }
        )), E.status) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function q(E, L, Z, W, Tt) {
    var bt = typeof E;
    (bt === "undefined" || bt === "boolean") && (E = null);
    var Rt = !1;
    if (E === null) Rt = !0;
    else
      switch (bt) {
        case "bigint":
        case "string":
        case "number":
          Rt = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case i:
            case l:
              Rt = !0;
              break;
            case g:
              return Rt = E._init, q(
                Rt(E._payload),
                L,
                Z,
                W,
                Tt
              );
          }
      }
    if (Rt)
      return Tt = Tt(E), Rt = W === "" ? "." + J(E, 0) : W, st(Tt) ? (Z = "", Rt != null && (Z = Rt.replace(St, "$&/") + "/"), q(Tt, L, Z, "", function(Xt) {
        return Xt;
      })) : Tt != null && (dt(Tt) && (Tt = mt(
        Tt,
        Z + (Tt.key == null || E && E.key === Tt.key ? "" : ("" + Tt.key).replace(
          St,
          "$&/"
        ) + "/") + Rt
      )), L.push(Tt)), 1;
    Rt = 0;
    var it = W === "" ? "." : W + ":";
    if (st(E))
      for (var ft = 0; ft < E.length; ft++)
        W = E[ft], bt = it + J(W, ft), Rt += q(
          W,
          L,
          Z,
          bt,
          Tt
        );
    else if (ft = z(E), typeof ft == "function")
      for (E = ft.call(E), ft = 0; !(W = E.next()).done; )
        W = W.value, bt = it + J(W, ft++), Rt += q(
          W,
          L,
          Z,
          bt,
          Tt
        );
    else if (bt === "object") {
      if (typeof E.then == "function")
        return q(
          w(E),
          L,
          Z,
          W,
          Tt
        );
      throw L = String(E), Error(
        "Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Rt;
  }
  function Y(E, L, Z) {
    if (E == null) return E;
    var W = [], Tt = 0;
    return q(E, W, "", "", function(bt) {
      return L.call(Z, bt, Tt++);
    }), W;
  }
  function I(E) {
    if (E._status === -1) {
      var L = E._result, Z = L();
      Z.then(
        function(W) {
          (E._status === 0 || E._status === -1) && (E._status = 1, E._result = W, Z.status === void 0 && (Z.status = "fulfilled", Z.value = W));
        },
        function(W) {
          (E._status === 0 || E._status === -1) && (E._status = 2, E._result = W, Z.status === void 0 && (Z.status = "rejected", Z.reason = W));
        }
      ), E._status === -1 && (E._status = 0, E._result = Z);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var tt = typeof reportError == "function" ? reportError : function(E) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var L = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
        error: E
      });
      if (!window.dispatchEvent(L)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", E);
      return;
    }
    console.error(E);
  };
  function ct(E) {
    var L = G.T, Z = {};
    Z.types = L !== null ? L.types : null, G.T = Z;
    try {
      var W = E(), Tt = G.S;
      Tt !== null && Tt(Z, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(U, tt);
    } catch (bt) {
      tt(bt);
    } finally {
      L !== null && Z.types !== null && (L.types = Z.types), G.T = L;
    }
  }
  function yt(E) {
    var L = G.T;
    if (L !== null) {
      var Z = L.types;
      Z === null ? L.types = [E] : Z.indexOf(E) === -1 && Z.push(E);
    } else ct(yt.bind(null, E));
  }
  var ot = {
    map: Y,
    forEach: function(E, L, Z) {
      Y(
        E,
        function() {
          L.apply(this, arguments);
        },
        Z
      );
    },
    count: function(E) {
      var L = 0;
      return Y(E, function() {
        L++;
      }), L;
    },
    toArray: function(E) {
      return Y(E, function(L) {
        return L;
      }) || [];
    },
    only: function(E) {
      if (!dt(E))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return E;
    }
  };
  return pt.Activity = y, pt.Children = ot, pt.Component = K, pt.Fragment = o, pt.Profiler = c, pt.PureComponent = $, pt.StrictMode = r, pt.Suspense = v, pt.ViewTransition = b, pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G, pt.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(E) {
      return G.H.useMemoCache(E);
    }
  }, pt.addTransitionType = yt, pt.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, pt.cacheSignal = function() {
    return null;
  }, pt.cloneElement = function(E, L, Z) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var W = _({}, E.props), Tt = E.key;
    if (L != null)
      for (bt in L.key !== void 0 && (Tt = "" + L.key), L)
        !P.call(L, bt) || bt === "key" || bt === "__self" || bt === "__source" || bt === "ref" && L.ref === void 0 || (W[bt] = L[bt]);
    var bt = arguments.length - 2;
    if (bt === 1) W.children = Z;
    else if (1 < bt) {
      for (var Rt = Array(bt), it = 0; it < bt; it++)
        Rt[it] = arguments[it + 2];
      W.children = Rt;
    }
    return ut(E.type, Tt, W);
  }, pt.createContext = function(E) {
    return E = {
      $$typeof: d,
      _currentValue: E,
      _currentValue2: E,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, E.Provider = E, E.Consumer = {
      $$typeof: h,
      _context: E
    }, E;
  }, pt.createElement = function(E, L, Z) {
    var W, Tt = {}, bt = null;
    if (L != null)
      for (W in L.key !== void 0 && (bt = "" + L.key), L)
        P.call(L, W) && W !== "key" && W !== "__self" && W !== "__source" && (Tt[W] = L[W]);
    var Rt = arguments.length - 2;
    if (Rt === 1) Tt.children = Z;
    else if (1 < Rt) {
      for (var it = Array(Rt), ft = 0; ft < Rt; ft++)
        it[ft] = arguments[ft + 2];
      Tt.children = it;
    }
    if (E && E.defaultProps)
      for (W in Rt = E.defaultProps, Rt)
        Tt[W] === void 0 && (Tt[W] = Rt[W]);
    return ut(E, bt, Tt);
  }, pt.createRef = function() {
    return { current: null };
  }, pt.forwardRef = function(E) {
    return { $$typeof: m, render: E };
  }, pt.isValidElement = dt, pt.lazy = function(E) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: E },
      _init: I
    };
  }, pt.memo = function(E, L) {
    return {
      $$typeof: S,
      type: E,
      compare: L === void 0 ? null : L
    };
  }, pt.startTransition = ct, pt.unstable_useCacheRefresh = function() {
    return G.H.useCacheRefresh();
  }, pt.use = function(E) {
    return G.H.use(E);
  }, pt.useActionState = function(E, L, Z) {
    return G.H.useActionState(E, L, Z);
  }, pt.useCallback = function(E, L) {
    return G.H.useCallback(E, L);
  }, pt.useContext = function(E) {
    return G.H.useContext(E);
  }, pt.useDebugValue = function() {
  }, pt.useDeferredValue = function(E, L) {
    return G.H.useDeferredValue(E, L);
  }, pt.useEffect = function(E, L) {
    return G.H.useEffect(E, L);
  }, pt.useEffectEvent = function(E) {
    return G.H.useEffectEvent(E);
  }, pt.useId = function() {
    return G.H.useId();
  }, pt.useImperativeHandle = function(E, L, Z) {
    return G.H.useImperativeHandle(E, L, Z);
  }, pt.useInsertionEffect = function(E, L) {
    return G.H.useInsertionEffect(E, L);
  }, pt.useLayoutEffect = function(E, L) {
    return G.H.useLayoutEffect(E, L);
  }, pt.useMemo = function(E, L) {
    return G.H.useMemo(E, L);
  }, pt.useOptimistic = function(E, L) {
    return G.H.useOptimistic(E, L);
  }, pt.useReducer = function(E, L, Z) {
    return G.H.useReducer(E, L, Z);
  }, pt.useRef = function(E) {
    return G.H.useRef(E);
  }, pt.useState = function(E) {
    return G.H.useState(E);
  }, pt.useSyncExternalStore = function(E, L, Z) {
    return G.H.useSyncExternalStore(
      E,
      L,
      Z
    );
  }, pt.useTransition = function() {
    return G.H.useTransition();
  }, pt.version = "19.3.1", pt;
}
var v0;
function rh() {
  return v0 || (v0 = 1, mf.exports = JE()), mf.exports;
}
var Q = rh();
const A = /* @__PURE__ */ KE(Q);
var pf = { exports: {} }, ts = {}, yf = { exports: {} }, gf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var S0;
function FE() {
  return S0 || (S0 = 1, (function(i) {
    function l(w, q) {
      var Y = w.length;
      w.push(q);
      t: for (; 0 < Y; ) {
        var I = Y - 1 >>> 1, tt = w[I];
        if (0 < c(tt, q))
          w[I] = q, w[Y] = tt, Y = I;
        else break t;
      }
    }
    function o(w) {
      return w.length === 0 ? null : w[0];
    }
    function r(w) {
      if (w.length === 0) return null;
      var q = w[0], Y = w.pop();
      if (Y !== q) {
        w[0] = Y;
        t: for (var I = 0, tt = w.length, ct = tt >>> 1; I < ct; ) {
          var yt = 2 * (I + 1) - 1, ot = w[yt], E = yt + 1, L = w[E];
          if (0 > c(ot, Y))
            E < tt && 0 > c(L, ot) ? (w[I] = L, w[E] = Y, I = E) : (w[I] = ot, w[yt] = Y, I = yt);
          else if (E < tt && 0 > c(L, Y))
            w[I] = L, w[E] = Y, I = E;
          else break t;
        }
      }
      return q;
    }
    function c(w, q) {
      var Y = w.sortIndex - q.sortIndex;
      return Y !== 0 ? Y : w.id - q.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      i.unstable_now = function() {
        return h.now();
      };
    } else {
      var d = Date, m = d.now();
      i.unstable_now = function() {
        return d.now() - m;
      };
    }
    var v = [], S = [], g = 1, y = null, b = 3, R = !1, z = !1, B = !1, _ = !1, X = typeof setTimeout == "function" ? setTimeout : null, K = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
    function $(w) {
      for (var q = o(S); q !== null; ) {
        if (q.callback === null) r(S);
        else if (q.startTime <= w)
          r(S), q.sortIndex = q.expirationTime, l(v, q);
        else break;
        q = o(S);
      }
    }
    function et(w) {
      if (B = !1, $(w), !z)
        if (o(v) !== null)
          z = !0, st || (st = !0, dt());
        else {
          var q = o(S);
          q !== null && J(et, q.startTime - w);
        }
    }
    var st = !1, U = -1, G = 5, P = -1;
    function ut() {
      return _ ? !0 : !(i.unstable_now() - P < G);
    }
    function mt() {
      if (_ = !1, st) {
        var w = i.unstable_now();
        P = w;
        var q = !0;
        try {
          t: {
            z = !1, B && (B = !1, K(U), U = -1), R = !0;
            var Y = b;
            try {
              e: {
                for ($(w), y = o(v); y !== null && !(y.expirationTime > w && ut()); ) {
                  var I = y.callback;
                  if (typeof I == "function") {
                    y.callback = null, b = y.priorityLevel;
                    var tt = I(
                      y.expirationTime <= w
                    );
                    if (w = i.unstable_now(), typeof tt == "function") {
                      y.callback = tt, $(w), q = !0;
                      break e;
                    }
                    y === o(v) && r(v), $(w);
                  } else r(v);
                  y = o(v);
                }
                if (y !== null) q = !0;
                else {
                  var ct = o(S);
                  ct !== null && J(
                    et,
                    ct.startTime - w
                  ), q = !1;
                }
              }
              break t;
            } finally {
              y = null, b = Y, R = !1;
            }
            q = void 0;
          }
        } finally {
          q ? dt() : st = !1;
        }
      }
    }
    var dt;
    if (typeof k == "function")
      dt = function() {
        k(mt);
      };
    else if (typeof MessageChannel < "u") {
      var Ot = new MessageChannel(), St = Ot.port2;
      Ot.port1.onmessage = mt, dt = function() {
        St.postMessage(null);
      };
    } else
      dt = function() {
        X(mt, 0);
      };
    function J(w, q) {
      U = X(function() {
        w(i.unstable_now());
      }, q);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(w) {
      w.callback = null;
    }, i.unstable_forceFrameRate = function(w) {
      0 > w || 125 < w ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : G = 0 < w ? Math.floor(1e3 / w) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, i.unstable_next = function(w) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = b;
      }
      var Y = b;
      b = q;
      try {
        return w();
      } finally {
        b = Y;
      }
    }, i.unstable_requestPaint = function() {
      _ = !0;
    }, i.unstable_runWithPriority = function(w, q) {
      switch (w) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          w = 3;
      }
      var Y = b;
      b = w;
      try {
        return q();
      } finally {
        b = Y;
      }
    }, i.unstable_scheduleCallback = function(w, q, Y) {
      var I = i.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? I + Y : I) : Y = I, w) {
        case 1:
          var tt = -1;
          break;
        case 2:
          tt = 250;
          break;
        case 5:
          tt = 1073741823;
          break;
        case 4:
          tt = 1e4;
          break;
        default:
          tt = 5e3;
      }
      return tt = Y + tt, w = {
        id: g++,
        callback: q,
        priorityLevel: w,
        startTime: Y,
        expirationTime: tt,
        sortIndex: -1
      }, Y > I ? (w.sortIndex = Y, l(S, w), o(v) === null && w === o(S) && (B ? (K(U), U = -1) : B = !0, J(et, Y - I))) : (w.sortIndex = tt, l(v, w), z || R || (z = !0, st || (st = !0, dt()))), w;
    }, i.unstable_shouldYield = ut, i.unstable_wrapCallback = function(w) {
      var q = b;
      return function() {
        var Y = b;
        b = q;
        try {
          return w.apply(this, arguments);
        } finally {
          b = Y;
        }
      };
    };
  })(gf)), gf;
}
var T0;
function PE() {
  return T0 || (T0 = 1, yf.exports = FE()), yf.exports;
}
var vf = { exports: {} }, pe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var E0;
function kE() {
  if (E0) return pe;
  E0 = 1;
  var i = rh();
  function l(g) {
    var y = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        y += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + g + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var r = {
    d: {
      f: o,
      r: function() {
        throw Error(l(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, c = Symbol.for("react.portal"), h = Symbol.for("react.recoverable"), d = Symbol.for("react.optimistic_key");
  function m(g, y, b) {
    var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: R == null ? null : R === d ? d : "" + R,
      children: g,
      containerInfo: y,
      implementation: b
    };
  }
  var v = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function S(g, y) {
    if (g === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, pe.browser = function(g) {
    return { $$typeof: h, _reason: g };
  }, pe.createPortal = function(g, y) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(l(299));
    return m(g, y, null, b);
  }, pe.flushSync = function(g) {
    var y = v.T, b = r.p;
    try {
      if (v.T = null, r.p = 2, g) return g();
    } finally {
      v.T = y, r.p = b, r.d.f();
    }
  }, pe.preconnect = function(g, y) {
    typeof g == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, r.d.C(g, y));
  }, pe.prefetchDNS = function(g) {
    typeof g == "string" && r.d.D(g);
  }, pe.preinit = function(g, y) {
    if (typeof g == "string" && y && typeof y.as == "string") {
      var b = y.as, R = S(b, y.crossOrigin), z = typeof y.integrity == "string" ? y.integrity : void 0, B = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      b === "style" ? r.d.S(
        g,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: R,
          integrity: z,
          fetchPriority: B
        }
      ) : b === "script" && r.d.X(g, {
        crossOrigin: R,
        integrity: z,
        fetchPriority: B,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, pe.preinitModule = function(g, y) {
    if (typeof g == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var b = S(
            y.as,
            y.crossOrigin
          );
          r.d.M(g, {
            crossOrigin: b,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0
          });
        }
      } else y == null && r.d.M(g);
  }, pe.preload = function(g, y) {
    if (typeof g == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var b = y.as, R = S(b, y.crossOrigin);
      r.d.L(g, b, {
        crossOrigin: R,
        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0,
        type: typeof y.type == "string" ? y.type : void 0,
        fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
        referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
        imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
        imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
        media: typeof y.media == "string" ? y.media : void 0
      });
    }
  }, pe.preloadModule = function(g, y) {
    if (typeof g == "string")
      if (y) {
        var b = S(y.as, y.crossOrigin);
        r.d.m(g, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: b,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0
        });
      } else r.d.m(g);
  }, pe.requestFormReset = function(g) {
    r.d.r(g);
  }, pe.unstable_batchedUpdates = function(g, y) {
    return g(y);
  }, pe.useFormState = function(g, y, b) {
    return v.H.useFormState(g, y, b);
  }, pe.useFormStatus = function() {
    return v.H.useHostTransitionStatus();
  }, pe.version = "19.3.1", pe;
}
var b0;
function IE() {
  if (b0) return vf.exports;
  b0 = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), vf.exports = kE(), vf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var A0;
function WE() {
  if (A0) return ts;
  A0 = 1;
  var i = PE(), l = rh(), o = IE();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function h(t) {
    for (var e = t, n = e; n && !n.alternate; )
      e = n, (e.flags & 4098) !== 0 && (t = e.return), n = e.return;
    for (; e.return; ) e = e.return;
    return e.tag === 3 ? t : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function v(t) {
    if (h(t) !== t)
      throw Error(r(188));
  }
  function S(t) {
    var e = t.alternate;
    if (!e) {
      if (e = h(t), e === null) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var u = s.alternate;
      if (u === null) {
        if (a = s.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (s.child === u.child) {
        for (u = s.child; u; ) {
          if (u === n) return v(s), t;
          if (u === a) return v(s), e;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== a.return) n = s, a = u;
      else {
        for (var f = !1, p = s.child; p; ) {
          if (p === n) {
            f = !0, n = s, a = u;
            break;
          }
          if (p === a) {
            f = !0, a = s, n = u;
            break;
          }
          p = p.sibling;
        }
        if (!f) {
          for (p = u.child; p; ) {
            if (p === n) {
              f = !0, n = u, a = s;
              break;
            }
            if (p === a) {
              f = !0, a = u, n = s;
              break;
            }
            p = p.sibling;
          }
          if (!f) throw Error(r(189));
        }
      }
      if (n.alternate !== a) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? t : e;
  }
  function g(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = g(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  function y(t, e, n, a, s, u) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && n(t, a, s, u) || (t.tag !== 22 || t.memoizedState === null) && (e || t.tag !== 5 && t.tag !== 27) && y(
        t.child,
        e,
        n,
        a,
        s,
        u
      ))
        return !0;
      t = t.sibling;
    }
    return !1;
  }
  function b(t) {
    for (t = t.return; t !== null; ) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function R(t) {
    var e = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return e;
  }
  function z(t) {
    var e = [null, null], n = b(t);
    return n === null || B(
      e,
      t,
      n.child,
      { foundSelf: !1 }
    ), e;
  }
  function B(t, e, n, a) {
    for (; n !== null; ) {
      if (n === e) a.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (a.foundSelf) return t[1] = n, !0;
        t[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && B(
        t,
        e,
        n.child,
        a
      ))
        return !0;
      n = n.sibling;
    }
    return !1;
  }
  function _(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(r(559));
    }
  }
  var X = null, K = null;
  function k(t, e, n) {
    return t === n ? !0 : t === e ? (X = t, !0) : !1;
  }
  function $(t, e, n) {
    return t === n ? (K = t, !1) : t === e ? (K !== null && (X = t), !0) : !1;
  }
  function et(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function st(t, e, n) {
    for (var a = 0, s = t; s; s = n(s)) a++;
    s = 0;
    for (var u = e; u; u = n(u)) s++;
    for (; 0 < a - s; ) t = n(t), a--;
    for (; 0 < s - a; ) e = n(e), s--;
    for (; a--; ) {
      if (t === e || e !== null && t === e.alternate)
        return t;
      t = n(t), e = n(e);
    }
    return null;
  }
  var U = Object.assign, G = Symbol.for("react.element"), P = Symbol.for("react.transitional.element"), ut = Symbol.for("react.portal"), mt = Symbol.for("react.fragment"), dt = Symbol.for("react.strict_mode"), Ot = Symbol.for("react.profiler"), St = Symbol.for("react.consumer"), J = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), Y = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), tt = Symbol.for("react.lazy"), ct = Symbol.for("react.activity"), yt = Symbol.for("react.legacy_hidden"), ot = Symbol.for("react.memo_cache_sentinel"), E = Symbol.for("react.view_transition"), L = Symbol.for("react.recoverable"), Z = Symbol.iterator;
  function W(t) {
    return t === null || typeof t != "object" ? null : (t = Z && t[Z] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Tt = Symbol.for("react.client.reference");
  function bt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Tt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case mt:
        return "Fragment";
      case Ot:
        return "Profiler";
      case dt:
        return "StrictMode";
      case q:
        return "Suspense";
      case Y:
        return "SuspenseList";
      case ct:
        return "Activity";
      case E:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case ut:
          return "Portal";
        case J:
          return t.displayName || "Context";
        case St:
          return (t._context.displayName || "Context") + ".Consumer";
        case w:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case I:
          return e = t.displayName || null, e !== null ? e : bt(t.type) || "Memo";
        case tt:
          e = t._payload, t = t._init;
          try {
            return bt(t(e));
          } catch {
          }
      }
    return null;
  }
  var Rt = Array.isArray, it = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ft = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Xt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ll = [], ni = -1;
  function hn(t) {
    return { current: t };
  }
  function oe(t) {
    0 > ni || (t.current = ll[ni], ll[ni] = null, ni--);
  }
  function Yt(t, e) {
    ni++, ll[ni] = t.current, t.current = e;
  }
  var dn = hn(null), sl = hn(null), Qn = hn(null), vs = hn(null);
  function Ss(t, e) {
    switch (Yt(Qn, e), Yt(sl, t), Yt(dn, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Dy(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Dy(e), t = Oy(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    oe(dn), Yt(dn, t);
  }
  function ai() {
    oe(dn), oe(sl), oe(Qn);
  }
  function Vo(t) {
    var e = t.memoizedState;
    e !== null && (Zi._currentValue = e.memoizedState, Yt(vs, t)), e = dn.current;
    var n = Oy(e, t.type);
    e !== n && (Yt(sl, t), Yt(dn, n));
  }
  function Ts(t) {
    sl.current === t && (oe(dn), oe(sl)), vs.current === t && (oe(vs), Zi._currentValue = Xt);
  }
  var wo, Jh;
  function Kn(t) {
    if (wo === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        wo = e && e[1] || "", Jh = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + wo + t + Jh;
  }
  var Uo = !1;
  function Bo(t, e) {
    if (!t || Uo) return "";
    Uo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var j = function() {
                throw Error();
              };
              if (Object.defineProperty(j.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(j, []);
                } catch (F) {
                  var C = F;
                }
                Reflect.construct(t, [], j);
              } else {
                try {
                  j.call();
                } catch (F) {
                  C = F;
                }
                j = !1;
                try {
                  var N = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), j = !0, new t();
                } finally {
                  j && (N !== void 0 ? Object.defineProperty(t.prototype, "props", N) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (F) {
                C = F;
              }
              (j = t()) && typeof j.catch == "function" && j.catch(function() {
              });
            }
          } catch (F) {
            if (F && C && typeof F.stack == "string")
              return [F.stack, C.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), f = u[0], p = u[1];
      if (f && p) {
        var T = f.split(`
`), O = p.split(`
`);
        for (s = a = 0; a < T.length && !T[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; s < O.length && !O[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (a === T.length || s === O.length)
          for (a = T.length - 1, s = O.length - 1; 1 <= a && 0 <= s && T[a] !== O[s]; )
            s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (T[a] !== O[s]) {
            if (a !== 1 || s !== 1)
              do
                if (a--, s--, 0 > s || T[a] !== O[s]) {
                  var V = `
` + T[a].replace(" at new ", " at ");
                  return t.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", t.displayName)), V;
                }
              while (1 <= a && 0 <= s);
            break;
          }
      }
    } finally {
      Uo = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? Kn(n) : "";
  }
  function k1(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Kn(t.type);
      case 16:
        return Kn("Lazy");
      case 13:
        return t.child !== e && e !== null ? Kn("Suspense Fallback") : Kn("Suspense");
      case 19:
        return Kn("SuspenseList");
      case 0:
      case 15:
        return Bo(t.type, !1);
      case 11:
        return Bo(t.type.render, !1);
      case 1:
        return Bo(t.type, !0);
      case 31:
        return Kn("Activity");
      case 30:
        return Kn("ViewTransition");
      default:
        return "";
    }
  }
  function Fh(t) {
    try {
      var e = "", n = null;
      do
        e += k1(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Lo = Object.prototype.hasOwnProperty, Ho = i.unstable_scheduleCallback, jo = i.unstable_cancelCallback, I1 = i.unstable_shouldYield, W1 = i.unstable_requestPaint, xe = i.unstable_now, $1 = i.unstable_getCurrentPriorityLevel, Ph = i.unstable_ImmediatePriority, kh = i.unstable_UserBlockingPriority, Es = i.unstable_NormalPriority, tS = i.unstable_LowPriority, Ih = i.unstable_IdlePriority, eS = i.log, nS = i.unstable_setDisableYieldValue, ul = null, ze = null;
  function Jn(t) {
    if (typeof eS == "function" && nS(t), ze && typeof ze.setStrictMode == "function")
      try {
        ze.setStrictMode(ul, t);
      } catch {
      }
  }
  var Ne = Math.clz32 ? Math.clz32 : lS, aS = Math.log, iS = Math.LN2;
  function lS(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (aS(t) / iS | 0) | 0;
  }
  var bs = 256, As = 262144, Ms = 4194304;
  function Ca(t) {
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
        return t & -t;
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
        return t;
    }
  }
  function Cs(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var s = 0, u = t.suspendedLanes, f = t.pingedLanes;
    t = t.warmLanes;
    var p = a & 134217727;
    return p !== 0 ? (a = p & ~u, a !== 0 ? s = Ca(a) : (f &= p, f !== 0 ? s = Ca(f) : n || (n = p & ~t, n !== 0 && (s = Ca(n))))) : (p = a & ~u, p !== 0 ? s = Ca(p) : f !== 0 ? s = Ca(f) : n || (n = a & ~t, n !== 0 && (s = Ca(n)))), s === 0 ? 0 : e !== 0 && e !== s && (e & u) === 0 && (u = s & -s, n = e & -e, u >= n || u === 32 && (n & 4194048) !== 0) ? e : s;
  }
  function ol(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Wh(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var a = 31 - Ne(n), s = 1 << a;
        e |= t[a], n &= ~s;
      }
    return e;
  }
  function sS(t, e) {
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
        return -1;
    }
  }
  function $h() {
    var t = Ms;
    return Ms <<= 1, (Ms & 62914560) === 0 && (Ms = 4194304), t;
  }
  function Yo(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function rl(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function uS(t, e, n, a, s, u) {
    var f = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var p = t.entanglements, T = t.expirationTimes, O = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var V = 31 - Ne(n), j = 1 << V;
      p[V] = 0, T[V] = -1;
      var C = O[V];
      if (C !== null)
        for (O[V] = null, V = 0; V < C.length; V++) {
          var N = C[V];
          N !== null && (N.lane &= -536870913);
        }
      n &= ~j;
    }
    a !== 0 && td(t, a, 0), u !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(f & ~e));
  }
  function td(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - Ne(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 261930;
  }
  function ed(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var a = 31 - Ne(n), s = 1 << a;
      s & e | t[a] & e && (t[a] |= e), n &= ~s;
    }
  }
  function nd(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : Go(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function Go(t) {
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
  function qo(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ad() {
    var t = ft.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : c0(t.type));
  }
  function id(t, e) {
    var n = ft.p;
    try {
      return ft.p = t, e();
    } finally {
      ft.p = n;
    }
  }
  var On = Math.random().toString(36).slice(2), re = "__reactFiber$" + On, be = "__reactProps$" + On, ii = "__reactContainer$" + On, ld = "__reactEvents$" + On, oS = "__reactListeners$" + On, rS = "__reactHandles$" + On, sd = "__reactResources$" + On, cl = "__reactMarker$" + On, Ds = "__reactLoad$" + On;
  function Os(t) {
    delete t[re], delete t[be], delete t[oS], delete t[rS];
  }
  function Da(t) {
    var e;
    if (e = t[re]) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[ii] || n[re]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = Zy(t); t !== null; ) {
            if (n = t[re]) return n;
            t = Zy(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function li(t) {
    if (t = t[re] || t[ii]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function fl(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function si(t) {
    var e = t[sd];
    return e || (e = t[sd] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ie(t) {
    t[cl] = !0;
  }
  function ud(t) {
    t[Ds] = void 0;
  }
  var od = /* @__PURE__ */ new Set(), rd = {};
  function Oa(t, e) {
    ui(t, e), ui(t + "Capture", e);
  }
  function ui(t, e) {
    for (rd[t] = e, t = 0; t < e.length; t++)
      od.add(e[t]);
  }
  var cS = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), cd = {}, fd = {};
  function fS(t) {
    return Lo.call(fd, t) ? !0 : Lo.call(cd, t) ? !1 : cS.test(t) ? fd[t] = !0 : (cd[t] = !0, !1);
  }
  var zt = !1;
  function hd() {
    var t = zt;
    return zt = !1, t;
  }
  function Rs(t, e, n) {
    if (fS(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, n);
      }
  }
  function xs(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, n);
    }
  }
  function Rn(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, a);
    }
  }
  function _e(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function dd(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function hS(t, e, n) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var s = a.get, u = a.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(f) {
          n = "" + f, u.call(this, f);
        }
      }), Object.defineProperty(t, e, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(f) {
          n = "" + f;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function Xo(t) {
    if (!t._valueTracker) {
      var e = dd(t) ? "checked" : "value";
      t._valueTracker = hS(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function md(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), a = "";
    return t && (a = dd(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), !0) : !1;
  }
  var dS = /[\n"\\]/g;
  function Ge(t) {
    return t.replace(
      dS,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Zo(t, e, n, a, s, u, f, p) {
    t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), e != null ? f === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + _e(e)) : t.value !== "" + _e(e) && (t.value = "" + _e(e)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), e != null ? f === "number" && t.value == e ? Qo(t, _e(t.value)) : Qo(t, _e(e)) : n != null ? Qo(t, _e(n)) : a != null && t.removeAttribute("value"), s == null && u != null && (t.defaultChecked = !!u), s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"), p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? t.name = "" + _e(p) : t.removeAttribute("name");
  }
  function pd(t, e, n, a, s, u, f, p) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        Xo(t);
        return;
      }
      n = n != null ? "" + _e(n) : "", e = e != null ? "" + _e(e) : n, p || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? s, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = p ? t.checked : !!a, t.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f), Xo(t);
  }
  function Qo(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function oi(t, e, n, a) {
    if (t = t.options, e) {
      e = {};
      for (var s = 0; s < n.length; s++)
        e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        s = e.hasOwnProperty("$" + t[n].value), t[n].selected !== s && (t[n].selected = s), s && a && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + _e(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          t[s].selected = !0, a && (t[s].defaultSelected = !0);
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function yd(t, e, n) {
    if (e != null && (e = "" + _e(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + _e(n) : "";
  }
  function gd(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(r(92));
        if (Rt(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), e = n;
    }
    n = _e(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a), Xo(t);
  }
  function ri(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var mS = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function vd(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || mS.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function Sd(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "", zt = !0);
      for (var s in e)
        a = e[s], e.hasOwnProperty(s) && n[s] !== a && (vd(t, s, a), zt = !0);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && vd(t, u, e[u]);
  }
  function Ko(t) {
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
  var pS = /* @__PURE__ */ new Map([
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
    ["maskType", "mask-type"],
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
  ]), yS = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function zs(t) {
    return yS.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function mn() {
  }
  var Jo = null;
  function Fo(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ci = null, fi = null;
  function Td(t) {
    var e = li(t);
    if (e && (t = e.stateNode)) {
      var n = t[be] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Zo(
            t,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + Ge(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var s = a[be] || null;
                if (!s) throw Error(r(90));
                Zo(
                  a,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              a = n[e], a.form === t.form && md(a);
          }
          break t;
        case "textarea":
          yd(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && oi(t, !!n.multiple, e, !1);
      }
    }
  }
  var Po = !1;
  function Ed(t, e, n) {
    if (Po) return t(e, n);
    Po = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (Po = !1, (ci !== null || fi !== null) && (zu(), ci && (e = ci, t = fi, fi = ci = null, Td(e), t)))
        for (e = 0; e < t.length; e++) Td(t[e]);
    }
  }
  function hl(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[be] || null;
    if (a === null) return null;
    n = a[e];
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
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function")
      throw Error(
        r(231, e, typeof n)
      );
    return n;
  }
  var xn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ko = !1;
  if (xn)
    try {
      var dl = {};
      Object.defineProperty(dl, "passive", {
        get: function() {
          ko = !0;
        }
      }), window.addEventListener("test", dl, dl), window.removeEventListener("test", dl, dl);
    } catch {
      ko = !1;
    }
  var Fn = null, Io = null, Ns = null;
  function bd() {
    if (Ns) return Ns;
    var t, e = Io, n = e.length, a, s = "value" in Fn ? Fn.value : Fn.textContent, u = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++) ;
    var f = n - t;
    for (a = 1; a <= f && e[n - a] === s[u - a]; a++) ;
    return Ns = s.slice(t, 1 < a ? 1 - a : void 0);
  }
  function _s(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Vs() {
    return !0;
  }
  function Ad() {
    return !1;
  }
  function ve(t) {
    function e(n, a, s, u, f) {
      this._reactName = n, this._targetInst = s, this.type = a, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var p in t)
        t.hasOwnProperty(p) && (n = t[p], this[p] = n ? n(u) : u[p]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Vs : Ad, this.isPropagationStopped = Ad, this;
    }
    return U(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Vs);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Vs);
      },
      persist: function() {
      },
      isPersistent: Vs
    }), e;
  }
  var Pn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ws = ve(Pn), ml = U({}, Pn, { view: 0, detail: 0 }), gS = ve(ml), Wo, $o, pl, Us = U({}, ml, {
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
    getModifierState: er,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== pl && (pl && t.type === "mousemove" ? (Wo = t.screenX - pl.screenX, $o = t.screenY - pl.screenY) : $o = Wo = 0, pl = t), Wo);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : $o;
    }
  }), Md = ve(Us), vS = U({}, Us, { dataTransfer: 0 }), SS = ve(vS), TS = U({}, ml, { relatedTarget: 0 }), tr = ve(TS), ES = U({}, Pn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), bS = ve(ES), AS = U({}, Pn, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), MS = ve(AS), CS = U({}, Pn, { data: 0 }), Cd = ve(CS), DS = {
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
  }, OS = {
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
  }, RS = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function xS(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = RS[t]) ? !!e[t] : !1;
  }
  function er() {
    return xS;
  }
  var zS = U({}, ml, {
    key: function(t) {
      if (t.key) {
        var e = DS[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = _s(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? OS[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: er,
    charCode: function(t) {
      return t.type === "keypress" ? _s(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? _s(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), NS = ve(zS), _S = U({}, Us, {
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
  }), Dd = ve(_S), VS = U({}, Pn, { submitter: 0 }), wS = ve(VS), US = U({}, ml, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: er
  }), BS = ve(US), LS = U({}, Pn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), HS = ve(LS), jS = U({}, Us, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), YS = ve(jS), GS = U({}, Pn, {
    newState: 0,
    oldState: 0,
    source: 0
  }), qS = ve(GS), XS = [9, 13, 27, 32], nr = xn && "CompositionEvent" in window, yl = null;
  xn && "documentMode" in document && (yl = document.documentMode);
  var ZS = xn && "TextEvent" in window && !yl, Od = xn && (!nr || yl && 8 < yl && 11 >= yl), Rd = " ", xd = !1;
  function zd(t, e) {
    switch (t) {
      case "keyup":
        return XS.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Nd(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var hi = !1;
  function QS(t, e) {
    switch (t) {
      case "compositionend":
        return Nd(e);
      case "keypress":
        return e.which !== 32 ? null : (xd = !0, Rd);
      case "textInput":
        return t = e.data, t === Rd && xd ? null : t;
      default:
        return null;
    }
  }
  function KS(t, e) {
    if (hi)
      return t === "compositionend" || !nr && zd(t, e) ? (t = bd(), Ns = Io = Fn = null, hi = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Od && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var JS = {
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
  function _d(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!JS[t.type] : e === "textarea";
  }
  function Vd(t, e, n, a) {
    ci ? fi ? fi.push(a) : fi = [a] : ci = a, e = Bu(e, "onChange"), 0 < e.length && (n = new ws(
      "onChange",
      "change",
      null,
      n,
      a
    ), t.push({ event: n, listeners: e }));
  }
  var gl = null, vl = null;
  function FS(t) {
    Ty(t, 0);
  }
  function Bs(t) {
    var e = fl(t);
    if (md(e)) return t;
  }
  function wd(t, e) {
    if (t === "change") return e;
  }
  var Ud = !1;
  if (xn) {
    var ar;
    if (xn) {
      var ir = "oninput" in document;
      if (!ir) {
        var Bd = document.createElement("div");
        Bd.setAttribute("oninput", "return;"), ir = typeof Bd.oninput == "function";
      }
      ar = ir;
    } else ar = !1;
    Ud = ar && (!document.documentMode || 9 < document.documentMode);
  }
  function Ld() {
    gl && (gl.detachEvent("onpropertychange", Hd), vl = gl = null);
  }
  function Hd(t) {
    if (t.propertyName === "value" && Bs(vl)) {
      var e = [];
      Vd(
        e,
        vl,
        t,
        Fo(t)
      ), Ed(FS, e);
    }
  }
  function PS(t, e, n) {
    t === "focusin" ? (Ld(), gl = e, vl = n, gl.attachEvent("onpropertychange", Hd)) : t === "focusout" && Ld();
  }
  function kS(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Bs(vl);
  }
  function IS(t, e) {
    if (t === "click") return Bs(e);
  }
  function WS(t, e) {
    if (t === "input" || t === "change")
      return Bs(e);
  }
  function $S(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Ve = typeof Object.is == "function" ? Object.is : $S;
  function Sl(t, e) {
    if (Ve(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var s = n[a];
      if (!Lo.call(e, s) || !Ve(t[s], e[s]))
        return !1;
    }
    return !0;
  }
  function lr(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function jd(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Yd(t, e) {
    var n = jd(t);
    t = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (a = t + n.textContent.length, t <= e && a >= e)
          return { node: n, offset: e - t };
        t = a;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = jd(n);
    }
  }
  function Gd(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Gd(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function qd(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = lr(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = lr(t.document);
    }
    return e;
  }
  function sr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var tT = xn && "documentMode" in document && 11 >= document.documentMode, di = null, ur = null, Tl = null, or = !1;
  function Xd(t, e, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    or || di == null || di !== lr(a) || (a = di, "selectionStart" in a && sr(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Tl && Sl(Tl, a) || (Tl = a, a = Bu(ur, "onSelect"), 0 < a.length && (e = new ws(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: a }), e.target = di)));
  }
  function Ra(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var mi = {
    animationend: Ra("Animation", "AnimationEnd"),
    animationiteration: Ra("Animation", "AnimationIteration"),
    animationstart: Ra("Animation", "AnimationStart"),
    transitionrun: Ra("Transition", "TransitionRun"),
    transitionstart: Ra("Transition", "TransitionStart"),
    transitioncancel: Ra("Transition", "TransitionCancel"),
    transitionend: Ra("Transition", "TransitionEnd")
  }, rr = {}, Zd = {};
  xn && (Zd = document.createElement("div").style, "AnimationEvent" in window || (delete mi.animationend.animation, delete mi.animationiteration.animation, delete mi.animationstart.animation), "TransitionEvent" in window || delete mi.transitionend.transition);
  function xa(t) {
    if (rr[t]) return rr[t];
    if (!mi[t]) return t;
    var e = mi[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in Zd)
        return rr[t] = e[n];
    return t;
  }
  var Qd = xa("animationend"), Kd = xa("animationiteration"), Jd = xa("animationstart"), eT = xa("transitionrun"), nT = xa("transitionstart"), aT = xa("transitioncancel"), Fd = xa("transitionend"), Pd = /* @__PURE__ */ new Map(), cr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  cr.push("scrollEnd");
  function We(t, e) {
    Pd.set(t, e), Oa(e, [t]);
  }
  var iT = 0;
  function zn(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = nn.identifierPrefix;
    var n = iT++;
    return t = "_" + t + "t_" + n.toString(32) + "_", e.autoName = t;
  }
  function kd(t) {
    if (t == null || typeof t == "string")
      return t;
    var e = null, n = wi;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = t[n[a]];
        if (s != null) {
          if (s === "none") return "none";
          e = e == null ? s : e + (" " + s);
        }
      }
    return e ?? t.default;
  }
  function Nn(t, e) {
    return t = kd(t), e = kd(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
  }
  var Ls = typeof reportError == "function" ? reportError : function(t) {
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
  }, qe = [], pi = 0, fr = 0;
  function Hs() {
    for (var t = pi, e = fr = pi = 0; e < t; ) {
      var n = qe[e];
      qe[e++] = null;
      var a = qe[e];
      qe[e++] = null;
      var s = qe[e];
      qe[e++] = null;
      var u = qe[e];
      if (qe[e++] = null, a !== null && s !== null) {
        var f = a.pending;
        f === null ? s.next = s : (s.next = f.next, f.next = s), a.pending = s;
      }
      u !== 0 && Id(n, s, u);
    }
  }
  function js(t, e, n, a) {
    qe[pi++] = t, qe[pi++] = e, qe[pi++] = n, qe[pi++] = a, fr |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function hr(t, e, n, a) {
    return js(t, e, n, a), Ys(t);
  }
  function za(t, e) {
    return js(t, null, null, e), Ys(t);
  }
  function Id(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var s = !1, u = t.return; u !== null; )
      u.childLanes |= n, a = u.alternate, a !== null && (a.childLanes |= n), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (s = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, s && e !== null && (s = 31 - Ne(n), t = u.hiddenUpdates, a = t[s], a === null ? t[s] = [e] : a.push(e), e.lane = n | 536870912), u) : null;
  }
  function Ys(t) {
    if (50 < ql)
      throw ql = 0, xu = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var yi = {};
  function lT(t, e, n, a) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ae(t, e, n, a) {
    return new lT(t, e, n, a);
  }
  function dr(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function _n(t, e) {
    var n = t.alternate;
    return n === null ? (n = Ae(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 1206910976, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function Wd(t, e) {
    t.flags &= 1206910978;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Gs(t, e, n, a, s, u) {
    var f = 0;
    if (a = t, typeof a == "function") dr(a) && (f = 1);
    else if (typeof a == "string")
      f = VE(
        t,
        n,
        dn.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (a) {
        case ct:
          return t = Ae(31, n, e, s), t.elementType = ct, t.lanes = u, t;
        case mt:
          return Na(n.children, s, u, e);
        case dt:
          f = 8, s |= 24;
          break;
        case Ot:
          return t = Ae(12, n, e, s | 2), t.elementType = Ot, t.lanes = u, t;
        case q:
          return t = Ae(13, n, e, s), t.elementType = q, t.lanes = u, t;
        case Y:
          return t = Ae(19, n, e, s), t.elementType = Y, t.lanes = u, t;
        case yt:
        case E:
          return t = s | 32, t = Ae(30, n, e, t), t.elementType = E, t.lanes = u, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case J:
                f = 10;
                break t;
              case St:
                f = 9;
                break t;
              case w:
                f = 11;
                break t;
              case I:
                f = 14;
                break t;
              case tt:
                f = 16, a = null;
                break t;
            }
          f = 29, n = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = Ae(f, n, e, s), e.elementType = t, e.type = a, e.lanes = u, e;
  }
  function Na(t, e, n, a) {
    return t = Ae(7, t, a, e), t.lanes = n, t;
  }
  function mr(t, e, n) {
    return t = Ae(6, t, null, e), t.lanes = n, t;
  }
  function $d(t) {
    var e = Ae(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function pr(t, e, n) {
    return e = Ae(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var tm = /* @__PURE__ */ new WeakMap();
  function Xe(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = tm.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: Fh(e)
      }, tm.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Fh(e)
    };
  }
  var gi = [], vi = 0, qs = null, El = 0, Ze = [], Qe = 0, kn = null, pn = 1, yn = "";
  function Vn(t, e) {
    gi[vi++] = El, gi[vi++] = qs, qs = t, El = e;
  }
  function em(t, e, n) {
    Ze[Qe++] = pn, Ze[Qe++] = yn, Ze[Qe++] = kn, kn = t;
    var a = pn;
    t = yn;
    var s = 32 - Ne(a) - 1;
    a &= ~(1 << s), n += 1;
    var u = 32 - Ne(e) + s;
    if (30 < u) {
      var f = s - s % 5;
      u = (a & (1 << f) - 1).toString(32), a >>= f, s -= f, pn = 1 << 32 - Ne(e) + s | n << s | a, yn = u + t;
    } else
      pn = 1 << u | n << s | a, yn = t;
  }
  function Xs(t) {
    t.return !== null && (Vn(t, 1), em(t, 1, 0));
  }
  function yr(t) {
    for (; t === qs; )
      qs = gi[--vi], gi[vi] = null, El = gi[--vi], gi[vi] = null;
    for (; t === kn; )
      kn = Ze[--Qe], Ze[Qe] = null, yn = Ze[--Qe], Ze[Qe] = null, pn = Ze[--Qe], Ze[Qe] = null;
  }
  function nm(t, e) {
    Ze[Qe++] = pn, Ze[Qe++] = yn, Ze[Qe++] = kn, pn = e.id, yn = e.overflow, kn = t;
  }
  var le = null, Gt = null, Et = !1, In = null, Ke = !1, gr = Error(r(519));
  function Wn(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw bl(Xe(e, t)), gr;
  }
  function am(t) {
    var e = t.stateNode, n = t.type, a = t.memoizedProps;
    switch (e[re] = t, e[be] = a, n) {
      case "dialog":
        Mt("cancel", e), Mt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Mt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Zl.length; n++)
          Mt(Zl[n], e);
        break;
      case "source":
        Mt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Mt("error", e), Mt("load", e);
        break;
      case "details":
        Mt("toggle", e);
        break;
      case "input":
        Mt("invalid", e), pd(
          e,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        Mt("invalid", e);
        break;
      case "textarea":
        Mt("invalid", e), gd(e, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || My(e.textContent, n) ? (a.popover != null && (Mt("beforetoggle", e), Mt("toggle", e)), a.onScroll != null && Mt("scroll", e), a.onScrollEnd != null && Mt("scrollend", e), a.onClick != null && (e.onclick = mn), e = !0) : e = !1, e || Wn(t, !0);
  }
  function Zs(t) {
    for (le = t.return; le; )
      switch (le.tag) {
        case 5:
        case 31:
        case 13:
          Ke = !1;
          return;
        case 27:
        case 3:
          Ke = !0;
          return;
        default:
          le = le.return;
      }
  }
  function Si(t) {
    if (t !== le) return !1;
    if (!Et) return Zs(t), Et = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Jc(t.type, t.memoizedProps)), n = !n), n && Gt && Wn(t), Zs(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Gt = Xy(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Gt = Xy(t);
    } else
      e === 27 ? (e = Gt, ma(t.type) ? (t = nf, nf = null, Gt = t) : Gt = e) : Gt = le ? Fe(t.stateNode.nextSibling) : null;
    return !0;
  }
  function _a() {
    Gt = le = null, Et = !1;
  }
  function vr() {
    var t = In;
    return t !== null && (De === null ? De = t : De.push.apply(
      De,
      t
    ), In = null), t;
  }
  function bl(t) {
    In === null ? In = [t] : In.push(t);
  }
  var Sr = hn(null), Va = null, wn = null;
  function $n(t, e, n) {
    Yt(Sr, e._currentValue), e._currentValue = n;
  }
  function Un(t) {
    t._currentValue = Sr.current, oe(Sr);
  }
  function Qs(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function Tr(t, e, n, a) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var u = s.dependencies;
      if (u !== null) {
        var f = s.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var p = u;
          u = s;
          for (var T = 0; T < e.length; T++)
            if (p.context === e[T]) {
              u.lanes |= n, p = u.alternate, p !== null && (p.lanes |= n), Qs(
                u.return,
                n,
                t
              ), a || (f = null);
              break t;
            }
          u = p.next;
        }
      } else if (s.tag === 18) {
        if (f = s.return, f === null) throw Error(r(341));
        f.lanes |= n, u = f.alternate, u !== null && (u.lanes |= n), Qs(f, n, t), f = null;
      } else
        s.tag === 13 && s.memoizedState !== null && s.memoizedState.dehydrated === null ? (s.lanes |= n, f = s.alternate, f !== null && (f.lanes |= n), Qs(
          s.return,
          n,
          t
        ), f = s.child, f = f !== null ? f.sibling : null) : f = s.child;
      if (f !== null) f.return = s;
      else
        for (f = s; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (s = f.sibling, s !== null) {
            s.return = f.return, f = s;
            break;
          }
          f = f.return;
        }
      s = f;
    }
  }
  function wa(t, e, n, a) {
    t = null;
    for (var s = e, u = !1; s !== null; ) {
      if (!u) {
        if ((s.flags & 524288) !== 0) u = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var f = s.alternate;
        if (f === null) throw Error(r(387));
        if (f = f.memoizedProps, f !== null) {
          var p = s.type;
          Ve(s.pendingProps.value, f.value) || (t !== null ? t.push(p) : t = [p]);
        }
      } else if (s === vs.current) {
        if (f = s.alternate, f === null) throw Error(r(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(Zi) : t = [Zi]);
      }
      s = s.return;
    }
    return t !== null && Tr(
      e,
      t,
      n,
      a
    ), e.flags |= 262144, t !== null;
  }
  function Ks(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ve(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Ua(t) {
    Va = t, wn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function ce(t) {
    return im(Va, t);
  }
  function Js(t, e) {
    return Va === null && Ua(t), im(t, e);
  }
  function im(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, wn === null) {
      if (t === null) throw Error(r(308));
      wn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else wn = wn.next = e;
    return n;
  }
  var sT = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(n, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(n) {
        return n();
      });
    };
  }, uT = i.unstable_scheduleCallback, oT = i.unstable_NormalPriority, kt = {
    $$typeof: J,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Er() {
    return {
      controller: new sT(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Al(t) {
    t.refCount--, t.refCount === 0 && uT(oT, function() {
      t.controller.abort();
    });
  }
  function lm(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var n = t.transitionTypes;
      for (n === null && (n = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var a = e[t];
        n.indexOf(a) === -1 && n.push(a);
      }
    }
  }
  var Ml = null;
  function rT(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var Cl = null, br = 0, Ba = 0, Ti = null;
  function cT(t, e) {
    if (Cl === null) {
      var n = Cl = [];
      br = 0, Ba = Hc(), Ti = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return br++, e.then(sm, sm), e;
  }
  function sm() {
    if (--br === 0 && (Ml = null, Cl !== null)) {
      Ti !== null && (Ti.status = "fulfilled");
      var t = Cl;
      Cl = null, Ba = 0, Ti = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function fT(t, e) {
    var n = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        n.push(s);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var s = 0; s < n.length; s++) (0, n[s])(e);
      },
      function(s) {
        for (a.status = "rejected", a.reason = s, s = 0; s < n.length; s++)
          (0, n[s])(void 0);
      }
    ), a;
  }
  var um = it.S;
  it.S = function(t, e) {
    if ($p = xe(), typeof e == "object" && e !== null && typeof e.then == "function" && cT(t, e), Ml !== null)
      for (var n = Hi; n !== null; )
        lm(n, Ml), n = n.next;
    if (n = t.types, n !== null) {
      for (var a = Hi; a !== null; )
        lm(a, n), a = a.next;
      if (Ba !== 0) {
        a = Ml, a === null && (a = Ml = []);
        for (var s = 0; s < n.length; s++) {
          var u = n[s];
          a.indexOf(u) === -1 && a.push(u);
        }
      }
    }
    um !== null && um(t, e);
  };
  var La = hn(null);
  function Ar() {
    var t = La.current;
    return t !== null ? t : Lt.pooledCache;
  }
  function Fs(t, e) {
    e === null ? Yt(La, La.current) : Yt(La, e.pool);
  }
  function om() {
    var t = Ar();
    return t === null ? null : { parent: kt._currentValue, pool: t };
  }
  var Ei = Error(r(460)), Mr = Error(r(474)), Ps = Error(r(542)), ks = { then: function() {
  } };
  function rm(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function cm(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(mn, mn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, hm(t), t === void 0 && !("reason" in e) ? Error(r(600)) : t;
      default:
        if (typeof e.status == "string") e.then(mn, mn);
        else {
          if (t = Lt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = e, t.status = "pending", t.then(
            function(a) {
              if (e.status === "pending") {
                var s = e;
                s.status = "fulfilled", s.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var s = e;
                s.status = "rejected", s.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, hm(t), t;
        }
        throw ja = e, Ei;
    }
  }
  function Ha(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (ja = n, Ei) : n;
    }
  }
  var ja = null;
  function fm() {
    if (ja === null) throw Error(r(459));
    var t = ja;
    return ja = null, t;
  }
  function hm(t) {
    if (t === Ei || t === Ps)
      throw Error(r(483));
  }
  var bi = null, Dl = 0;
  function Is(t) {
    var e = Dl;
    return Dl += 1, bi === null && (bi = []), cm(bi, t, e);
  }
  function ta(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Ws(t, e) {
    throw e.$$typeof === G ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function dm(t) {
    function e(D, M) {
      if (t) {
        var x = D.deletions;
        x === null ? (D.deletions = [M], D.flags |= 16) : x.push(M);
      }
    }
    function n(D, M) {
      if (!t) return null;
      for (; M !== null; )
        e(D, M), M = M.sibling;
      return null;
    }
    function a(D) {
      for (var M = /* @__PURE__ */ new Map(); D !== null; )
        D.key === null ? M.set(D.index, D) : M.set(D.key, D), D = D.sibling;
      return M;
    }
    function s(D, M) {
      return D = _n(D, M), D.index = 0, D.sibling = null, D;
    }
    function u(D, M, x) {
      return D.index = x, t ? (x = D.alternate, x !== null ? (x = x.index, x < M ? (D.flags |= 2, M) : x) : (D.flags |= 134217730, M)) : (D.flags |= 1048576, M);
    }
    function f(D) {
      return t && D.alternate === null && (D.flags |= 134217730), D;
    }
    function p(D, M, x, H) {
      return M === null || M.tag !== 6 ? (M = mr(x, D.mode, H), M.return = D, M) : (M = s(M, x), M.return = D, M);
    }
    function T(D, M, x, H) {
      var nt = x.type;
      return nt === mt ? (D = V(
        D,
        M,
        x.props.children,
        H,
        x.key
      ), ta(D, x), D) : M !== null && (M.elementType === nt || typeof nt == "object" && nt !== null && nt.$$typeof === tt && Ha(nt) === M.type) ? (M = s(M, x.props), ta(M, x), M.return = D, M) : (M = Gs(
        x.type,
        x.key,
        x.props,
        null,
        D.mode,
        H
      ), ta(M, x), M.return = D, M);
    }
    function O(D, M, x, H) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== x.containerInfo || M.stateNode.implementation !== x.implementation ? (M = pr(x, D.mode, H), M.return = D, M) : (M = s(M, x.children || []), M.return = D, M);
    }
    function V(D, M, x, H, nt) {
      return M === null || M.tag !== 7 ? (M = Na(
        x,
        D.mode,
        H,
        nt
      ), M.return = D, M) : (M = s(M, x), M.return = D, M);
    }
    function j(D, M, x) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return M = mr(
          "" + M,
          D.mode,
          x
        ), M.return = D, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case P:
            return x = Gs(
              M.type,
              M.key,
              M.props,
              null,
              D.mode,
              x
            ), ta(x, M), x.return = D, x;
          case ut:
            return M = pr(
              M,
              D.mode,
              x
            ), M.return = D, M;
          case tt:
            return M = Ha(M), j(D, M, x);
        }
        if (Rt(M) || W(M))
          return M = Na(
            M,
            D.mode,
            x,
            null
          ), M.return = D, M;
        if (typeof M.then == "function")
          return j(D, Is(M), x);
        if (M.$$typeof === J)
          return j(
            D,
            Js(D, M),
            x
          );
        Ws(D, M);
      }
      return null;
    }
    function C(D, M, x, H) {
      var nt = M !== null ? M.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return nt !== null ? null : p(D, M, "" + x, H);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case P:
            return x.key === nt ? T(D, M, x, H) : null;
          case ut:
            return x.key === nt ? O(D, M, x, H) : null;
          case tt:
            return x = Ha(x), C(D, M, x, H);
        }
        if (Rt(x) || W(x))
          return nt !== null ? null : V(D, M, x, H, null);
        if (typeof x.then == "function")
          return C(
            D,
            M,
            Is(x),
            H
          );
        if (x.$$typeof === J)
          return C(
            D,
            M,
            Js(D, x),
            H
          );
        Ws(D, x);
      }
      return null;
    }
    function N(D, M, x, H, nt) {
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return D = D.get(x) || null, p(M, D, "" + H, nt);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case P:
            return D = D.get(
              H.key === null ? x : H.key
            ) || null, T(M, D, H, nt);
          case ut:
            return D = D.get(
              H.key === null ? x : H.key
            ) || null, O(M, D, H, nt);
          case tt:
            return H = Ha(H), N(
              D,
              M,
              x,
              H,
              nt
            );
        }
        if (Rt(H) || W(H))
          return D = D.get(x) || null, V(M, D, H, nt, null);
        if (typeof H.then == "function")
          return N(
            D,
            M,
            x,
            Is(H),
            nt
          );
        if (H.$$typeof === J)
          return N(
            D,
            M,
            x,
            Js(M, H),
            nt
          );
        Ws(M, H);
      }
      return null;
    }
    function F(D, M, x, H) {
      for (var nt = null, Dt = null, rt = M, ht = M = 0, $t = null; rt !== null && ht < x.length; ht++) {
        rt.index > ht ? ($t = rt, rt = null) : $t = rt.sibling;
        var xt = C(
          D,
          rt,
          x[ht],
          H
        );
        if (xt === null) {
          rt === null && (rt = $t);
          break;
        }
        t && rt && xt.alternate === null && e(D, rt), M = u(xt, M, ht), Dt === null ? nt = xt : Dt.sibling = xt, Dt = xt, rt = $t;
      }
      if (ht === x.length)
        return n(D, rt), Et && Vn(D, ht), nt;
      if (rt === null) {
        for (; ht < x.length; ht++)
          rt = j(D, x[ht], H), rt !== null && (M = u(
            rt,
            M,
            ht
          ), Dt === null ? nt = rt : Dt.sibling = rt, Dt = rt);
        return Et && Vn(D, ht), nt;
      }
      for (rt = a(rt); ht < x.length; ht++)
        $t = N(
          rt,
          D,
          ht,
          x[ht],
          H
        ), $t !== null && (t && (xt = $t.alternate, xt !== null && rt.delete(xt.key === null ? ht : xt.key)), M = u(
          $t,
          M,
          ht
        ), Dt === null ? nt = $t : Dt.sibling = $t, Dt = $t);
      return t && rt.forEach(function(Sa) {
        return e(D, Sa);
      }), Et && Vn(D, ht), nt;
    }
    function lt(D, M, x, H) {
      if (x == null) throw Error(r(151));
      for (var nt = null, Dt = null, rt = M, ht = M = 0, $t = null, xt = x.next(); rt !== null && !xt.done; ht++, xt = x.next()) {
        rt.index > ht ? ($t = rt, rt = null) : $t = rt.sibling;
        var Sa = C(D, rt, xt.value, H);
        if (Sa === null) {
          rt === null && (rt = $t);
          break;
        }
        t && rt && Sa.alternate === null && e(D, rt), M = u(Sa, M, ht), Dt === null ? nt = Sa : Dt.sibling = Sa, Dt = Sa, rt = $t;
      }
      if (xt.done)
        return n(D, rt), Et && Vn(D, ht), nt;
      if (rt === null) {
        for (; !xt.done; ht++, xt = x.next())
          xt = j(D, xt.value, H), xt !== null && (M = u(xt, M, ht), Dt === null ? nt = xt : Dt.sibling = xt, Dt = xt);
        return Et && Vn(D, ht), nt;
      }
      for (rt = a(rt); !xt.done; ht++, xt = x.next())
        xt = N(rt, D, ht, xt.value, H), xt !== null && (t && ($t = xt.alternate, $t !== null && rt.delete(
          $t.key === null ? ht : $t.key
        )), M = u(xt, M, ht), Dt === null ? nt = xt : Dt.sibling = xt, Dt = xt);
      return t && rt.forEach(function(QE) {
        return e(D, QE);
      }), Et && Vn(D, ht), nt;
    }
    function vt(D, M, x, H) {
      if (typeof x == "object" && x !== null && x.type === mt && x.key === null && x.props.ref === void 0 && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case P:
            t: {
              for (var nt = x.key; M !== null; ) {
                if (M.key === nt) {
                  if (nt = x.type, nt === mt) {
                    if (M.tag === 7) {
                      n(
                        D,
                        M.sibling
                      ), H = s(
                        M,
                        x.props.children
                      ), ta(H, x), H.return = D, D = H;
                      break t;
                    }
                  } else if (M.elementType === nt || typeof nt == "object" && nt !== null && nt.$$typeof === tt && Ha(nt) === M.type) {
                    n(
                      D,
                      M.sibling
                    ), H = s(M, x.props), ta(H, x), H.return = D, D = H;
                    break t;
                  }
                  n(D, M);
                  break;
                } else e(D, M);
                M = M.sibling;
              }
              x.type === mt ? (H = Na(
                x.props.children,
                D.mode,
                H,
                x.key
              ), ta(H, x), H.return = D, D = H) : (H = Gs(
                x.type,
                x.key,
                x.props,
                null,
                D.mode,
                H
              ), ta(H, x), H.return = D, D = H);
            }
            return f(D);
          case ut:
            t: {
              for (nt = x.key; M !== null; ) {
                if (M.key === nt)
                  if (M.tag === 4 && M.stateNode.containerInfo === x.containerInfo && M.stateNode.implementation === x.implementation) {
                    n(
                      D,
                      M.sibling
                    ), H = s(M, x.children || []), H.return = D, D = H;
                    break t;
                  } else {
                    n(D, M);
                    break;
                  }
                else e(D, M);
                M = M.sibling;
              }
              H = pr(x, D.mode, H), H.return = D, D = H;
            }
            return f(D);
          case tt:
            return x = Ha(x), vt(
              D,
              M,
              x,
              H
            );
        }
        if (Rt(x))
          return F(
            D,
            M,
            x,
            H
          );
        if (W(x)) {
          if (nt = W(x), typeof nt != "function") throw Error(r(150));
          return x = nt.call(x), lt(
            D,
            M,
            x,
            H
          );
        }
        if (typeof x.then == "function")
          return vt(
            D,
            M,
            Is(x),
            H
          );
        if (x.$$typeof === J)
          return vt(
            D,
            M,
            Js(D, x),
            H
          );
        Ws(D, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, M !== null && M.tag === 6 ? (n(D, M.sibling), H = s(M, x), H.return = D, D = H) : (n(D, M), H = mr(x, D.mode, H), H.return = D, D = H), f(D)) : n(D, M);
    }
    return function(D, M, x, H) {
      try {
        Dl = 0;
        var nt = vt(
          D,
          M,
          x,
          H
        );
        return bi = null, nt;
      } catch (rt) {
        if (rt === Ei || rt === Ps) throw rt;
        var Dt = Ae(29, rt, null, D.mode);
        return Dt.lanes = H, Dt.return = D, Dt;
      } finally {
      }
    };
  }
  var Ya = dm(!0), mm = dm(!1), ea = !1;
  function Cr(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Dr(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function na(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function aa(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Nt & 2) !== 0) {
      var s = a.pending;
      return s === null ? e.next = e : (e.next = s.next, s.next = e), a.pending = e, e = Ys(t), Id(t, null, n), e;
    }
    return js(t, a, e, n), Ys(t);
  }
  function Ol(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, ed(t, n);
    }
  }
  function Or(t, e) {
    var n = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var s = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? s = u = f : u = u.next = f, n = n.next;
        } while (n !== null);
        u === null ? s = u = e : u = u.next = e;
      } else s = u = e;
      n = {
        baseState: a.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var Rr = !1;
  function Rl() {
    if (Rr) {
      var t = Ti;
      if (t !== null) throw t;
    }
  }
  function xl(t, e, n, a) {
    Rr = !1;
    var s = t.updateQueue;
    ea = !1;
    var u = s.firstBaseUpdate, f = s.lastBaseUpdate, p = s.shared.pending;
    if (p !== null) {
      s.shared.pending = null;
      var T = p, O = T.next;
      T.next = null, f === null ? u = O : f.next = O, f = T;
      var V = t.alternate;
      V !== null && (V = V.updateQueue, p = V.lastBaseUpdate, p !== f && (p === null ? V.firstBaseUpdate = O : p.next = O, V.lastBaseUpdate = T));
    }
    if (u !== null) {
      var j = s.baseState;
      f = 0, V = O = T = null, p = u;
      do {
        var C = p.lane & -536870913, N = C !== p.lane;
        if (N ? (Ct & C) === C : (a & C) === C) {
          C !== 0 && C === Ba && (Rr = !0), V !== null && (V = V.next = {
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: null,
            next: null
          });
          t: {
            var F = t, lt = p;
            C = e;
            var vt = n;
            switch (lt.tag) {
              case 1:
                if (F = lt.payload, typeof F == "function") {
                  j = F.call(vt, j, C);
                  break t;
                }
                j = F;
                break t;
              case 3:
                F.flags = F.flags & -65537 | 128;
              case 0:
                if (F = lt.payload, C = typeof F == "function" ? F.call(vt, j, C) : F, C == null) break t;
                j = U({}, j, C);
                break t;
              case 2:
                ea = !0;
            }
          }
          C = p.callback, C !== null && (t.flags |= 64, N && (t.flags |= 8192), N = s.callbacks, N === null ? s.callbacks = [C] : N.push(C));
        } else
          N = {
            lane: C,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null
          }, V === null ? (O = V = N, T = j) : V = V.next = N, f |= C;
        if (p = p.next, p === null) {
          if (p = s.shared.pending, p === null)
            break;
          N = p, p = N.next, N.next = null, s.lastBaseUpdate = N, s.shared.pending = null;
        }
      } while (!0);
      V === null && (T = j), s.baseState = T, s.firstBaseUpdate = O, s.lastBaseUpdate = V, u === null && (s.shared.lanes = 0), ca |= f, t.lanes = f, t.memoizedState = j;
    }
  }
  function pm(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function ym(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        pm(n[t], e);
  }
  var ia = hn(null), $s = hn(0);
  function gm(t, e) {
    t = Yn, Yt($s, t), Yt(ia, e), Yn = t | e.baseLanes;
  }
  function xr() {
    Yt($s, Yn), Yt(ia, ia.current);
  }
  function zr() {
    Yn = $s.current, oe(ia), oe($s);
  }
  var fe = hn(null), ge = null;
  function la(t) {
    var e = t.alternate;
    Yt(he, he.current & 1), Yt(fe, t), ge === null && (e === null || ia.current !== null || e.memoizedState !== null) && (ge = t);
  }
  function Nr(t) {
    Yt(he, he.current), Yt(fe, t), ge === null && (ge = t);
  }
  function vm(t) {
    t.tag === 22 ? (Yt(he, he.current), Yt(fe, t), ge === null && (ge = t)) : sa();
  }
  function sa() {
    Yt(he, he.current), Yt(fe, fe.current);
  }
  function we(t) {
    oe(fe), ge === t && (ge = null), oe(he);
  }
  var he = hn(0);
  function zl(t, e) {
    Yt(fe, fe.current), Yt(he, e);
  }
  function _r(t) {
    oe(he), oe(fe), ge === t && (ge = null);
  }
  function tu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || tf(n) || ef(n)))
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== "independent") {
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
  var Bn = 0, gt = null, Bt = null, It = null, eu = !1, Ai = !1, Ga = !1, nu = 0, Nl = 0, Mi = null, hT = 0;
  function Jt() {
    throw Error(r(321));
  }
  function Vr(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Ve(t[n], e[n])) return !1;
    return !0;
  }
  function wr(t, e, n, a, s, u) {
    return Bn = u, gt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, it.H = t === null || t.memoizedState === null ? ep : np, Ga = !1, u = n(a, s), Ga = !1, Ai && (u = Tm(
      e,
      n,
      a,
      s
    )), Sm(t), u;
  }
  function Sm(t) {
    it.H = ru;
    var e = Bt !== null && Bt.next !== null;
    if (Bn = 0, It = Bt = gt = null, eu = !1, Nl = 0, Mi = null, e) throw Error(r(300));
    t === null || Wt || (t = t.dependencies, t !== null && Ks(t) && (Wt = !0));
  }
  function Tm(t, e, n, a) {
    gt = t;
    var s = 0;
    do {
      if (Ai && (Mi = null), Nl = 0, Ai = !1, 25 <= s) throw Error(r(301));
      if (s += 1, It = Bt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      it.H = TT, u = e(n, a);
    } while (Ai);
    return u;
  }
  function dT() {
    var t = it.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? _l(e) : e, t = t.useState()[0], (Bt !== null ? Bt.memoizedState : null) !== t && (gt.flags |= 1024), e;
  }
  function Ur() {
    var t = nu !== 0;
    return nu = 0, t;
  }
  function Br(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function Lr(t) {
    if (eu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      eu = !1;
    }
    Bn = 0, It = Bt = gt = null, Ai = !1, Nl = nu = 0, Mi = null;
  }
  function Se() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return It === null ? gt.memoizedState = It = t : It = It.next = t, It;
  }
  function Pt() {
    if (Bt === null) {
      var t = gt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Bt.next;
    var e = It === null ? gt.memoizedState : It.next;
    if (e !== null)
      It = e, Bt = t;
    else {
      if (t === null)
        throw gt.alternate === null ? Error(r(467)) : Error(r(310));
      Bt = t, t = {
        memoizedState: Bt.memoizedState,
        baseState: Bt.baseState,
        baseQueue: Bt.baseQueue,
        queue: Bt.queue,
        next: null
      }, It === null ? gt.memoizedState = It = t : It = It.next = t;
    }
    return It;
  }
  function au() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function _l(t) {
    var e = Nl;
    return Nl += 1, Mi === null && (Mi = []), t = cm(Mi, t, e), e = gt, (It === null ? e.memoizedState : It.next) === null && (e = e.alternate, it.H = e === null || e.memoizedState === null ? ep : np), t;
  }
  function iu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return _l(t);
      if (t.$$typeof === L) return;
      if (t.$$typeof === J) return ce(t);
    }
    throw Error(r(438, String(t)));
  }
  function Hr(t) {
    var e = null, n = gt.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var a = gt.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = au(), gt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++)
        n[a] = ot;
    return e.index++, n;
  }
  function Ln(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function lu(t) {
    var e = Pt();
    return jr(e, Bt, t);
  }
  function jr(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = n;
    var s = t.baseQueue, u = a.pending;
    if (u !== null) {
      if (s !== null) {
        var f = s.next;
        s.next = u.next, u.next = f;
      }
      e.baseQueue = s = u, a.pending = null;
    }
    if (u = t.baseState, s === null) t.memoizedState = u;
    else {
      e = s.next;
      var p = f = null, T = null, O = e, V = !1;
      do {
        var j = O.lane & -536870913;
        if (j !== O.lane ? (Ct & j) === j : (Bn & j) === j) {
          var C = O.revertLane;
          if (C === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            }), j === Ba && (V = !0);
          else if ((Bn & C) === C) {
            O = O.next, C === Ba && (V = !0);
            continue;
          } else
            j = {
              lane: 0,
              revertLane: O.revertLane,
              gesture: null,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            }, T === null ? (p = T = j, f = u) : T = T.next = j, gt.lanes |= C, ca |= C;
          j = O.action, Ga && n(u, j), u = O.hasEagerState ? O.eagerState : n(u, j);
        } else
          C = {
            lane: j,
            revertLane: O.revertLane,
            gesture: O.gesture,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          }, T === null ? (p = T = C, f = u) : T = T.next = C, gt.lanes |= j, ca |= j;
        O = O.next;
      } while (O !== null && O !== e);
      if (T === null ? f = u : T.next = p, !Ve(u, t.memoizedState) && (Wt = !0, V && (n = Ti, n !== null)))
        throw n;
      t.memoizedState = u, t.baseState = f, t.baseQueue = T, a.lastRenderedState = u;
    }
    return s === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Yr(t) {
    var e = Pt(), n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch, s = n.pending, u = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = s = s.next;
      do
        u = t(u, f.action), f = f.next;
      while (f !== s);
      Ve(u, e.memoizedState) || (Wt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), n.lastRenderedState = u;
    }
    return [u, a];
  }
  function Em(t, e, n) {
    var a = gt, s = Pt(), u = Et;
    if (u) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var f = !Ve(
      (Bt || s).memoizedState,
      n
    );
    if (f && (s.memoizedState = n, Wt = !0), s = s.queue, Xr(Mm.bind(null, a, s, t), [
      t
    ]), t = s.getSnapshot !== e || f || It !== null && (It.memoizedState.tag & 1) !== 0, Ci(
      t ? 9 : 8,
      { destroy: void 0 },
      Am.bind(null, a, s, n, e),
      null
    ), t) {
      if (a.flags |= 2048, Lt === null) throw Error(r(349));
      u || (Bn & 127) !== 0 || bm(a, e, n);
    }
    return n;
  }
  function bm(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = gt.updateQueue, e === null ? (e = au(), gt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function Am(t, e, n, a) {
    e.value = n, e.getSnapshot = a, Cm(e) && Dm(t);
  }
  function Mm(t, e, n) {
    return n(function() {
      Cm(e) && Dm(t);
    });
  }
  function Cm(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Ve(t, n);
    } catch {
      return !0;
    }
  }
  function Dm(t) {
    var e = za(t, 2);
    e !== null && Oe(e, t, 2);
  }
  function Gr(t) {
    var e = Se();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), Ga) {
        Jn(!0);
        try {
          n();
        } finally {
          Jn(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ln,
      lastRenderedState: t
    }, e;
  }
  function Om(t, e, n, a) {
    return t.baseState = n, jr(
      t,
      Bt,
      typeof a == "function" ? a : Ln
    );
  }
  function mT(t, e, n, a, s) {
    if (ou(t)) throw Error(r(485));
    if (t = e.action, t !== null) {
      var u = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          u.listeners.push(f);
        }
      };
      it.T !== null ? n(!0) : u.isTransition = !1, a(u), n = e.pending, n === null ? (u.next = e.pending = u, Rm(e, u)) : (u.next = n.next, e.pending = n.next = u);
    }
  }
  function Rm(t, e) {
    var n = e.action, a = e.payload, s = t.state;
    if (e.isTransition) {
      var u = it.T, f = {};
      f.types = u !== null ? u.types : null, it.T = f;
      try {
        var p = n(s, a), T = it.S;
        T !== null && T(f, p), xm(t, e, p);
      } catch (O) {
        qr(t, e, O);
      } finally {
        u !== null && f.types !== null && (u.types = f.types), it.T = u;
      }
    } else
      try {
        u = n(s, a), xm(t, e, u);
      } catch (O) {
        qr(t, e, O);
      }
  }
  function xm(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        zm(t, e, a);
      },
      function(a) {
        return qr(t, e, a);
      }
    ) : zm(t, e, n);
  }
  function zm(t, e, n) {
    e.status = "fulfilled", e.value = n, Nm(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, Rm(t, n)));
  }
  function qr(t, e, n) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = n, Nm(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function Nm(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function _m(t, e) {
    return e;
  }
  function Vm(t, e) {
    if (Et) {
      var n = Lt.formState;
      if (n !== null) {
        t: {
          var a = gt;
          if (Et) {
            if (Gt) {
              e: {
                for (var s = Gt, u = Ke; s.nodeType !== 8; ) {
                  if (!u) {
                    s = null;
                    break e;
                  }
                  if (s = Fe(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break e;
                  }
                }
                u = s.data, s = u === "F!" || u === "F" ? s : null;
              }
              if (s) {
                Gt = Fe(
                  s.nextSibling
                ), a = s.data === "F!";
                break t;
              }
            }
            Wn(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return n = Se(), n.memoizedState = n.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: _m,
      lastRenderedState: e
    }, n.queue = a, n = Wm.bind(
      null,
      gt,
      a
    ), a.dispatch = n, a = Gr(!1), u = Fr.bind(
      null,
      gt,
      !1,
      a.queue
    ), a = Se(), s = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = s, n = mT.bind(
      null,
      gt,
      s,
      u,
      n
    ), s.dispatch = n, a.memoizedState = t, [e, n, !1];
  }
  function wm(t) {
    var e = Pt();
    return Um(e, Bt, t);
  }
  function Um(t, e, n) {
    if (e = jr(
      t,
      e,
      _m
    )[0], t = lu(Ln)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = _l(e);
      } catch (f) {
        throw f === Ei ? Ps : f;
      }
    else a = e;
    e = Pt();
    var s = e.queue, u = s.dispatch;
    return n !== e.memoizedState && (gt.flags |= 2048, Ci(
      9,
      { destroy: void 0 },
      pT.bind(null, s, n),
      null
    )), [a, u, t];
  }
  function pT(t, e) {
    t.action = e;
  }
  function Bm(t) {
    var e = Pt(), n = Bt;
    if (n !== null)
      return Um(e, n, t);
    Pt(), e = e.memoizedState, n = Pt();
    var a = n.queue.dispatch;
    return n.memoizedState = t, [e, a, !1];
  }
  function Ci(t, e, n, a) {
    return t = { tag: t, create: n, deps: a, inst: e, next: null }, e = gt.updateQueue, e === null && (e = au(), gt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t;
  }
  function Lm() {
    return Pt().memoizedState;
  }
  function su(t, e, n, a) {
    var s = Se();
    gt.flags |= t, s.memoizedState = Ci(
      1 | e,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function uu(t, e, n, a) {
    var s = Pt();
    a = a === void 0 ? null : a;
    var u = s.memoizedState.inst;
    Bt !== null && a !== null && Vr(a, Bt.memoizedState.deps) ? s.memoizedState = Ci(e, u, n, a) : (gt.flags |= t, s.memoizedState = Ci(
      1 | e,
      u,
      n,
      a
    ));
  }
  function Hm(t, e) {
    su(8390656, 8, t, e);
  }
  function Xr(t, e) {
    uu(2048, 8, t, e);
  }
  function yT(t) {
    gt.flags |= 4;
    var e = gt.updateQueue;
    if (e === null)
      e = au(), gt.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function jm(t) {
    var e = Pt().memoizedState;
    return yT({ ref: e, nextImpl: t }), function() {
      if ((Nt & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Ym(t, e) {
    return uu(4, 2, t, e);
  }
  function Gm(t, e) {
    return uu(4, 4, t, e);
  }
  function qm(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function() {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function Xm(t, e, n) {
    n = n != null ? n.concat([t]) : null, uu(4, 4, qm.bind(null, e, t), n);
  }
  function Zr() {
  }
  function Zm(t, e) {
    var n = Pt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && Vr(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t);
  }
  function Qm(t, e) {
    var n = Pt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && Vr(e, a[1]))
      return a[0];
    if (a = t(), Ga) {
      Jn(!0);
      try {
        t();
      } finally {
        Jn(!1);
      }
    }
    return n.memoizedState = [a, e], a;
  }
  function Qr(t, e, n) {
    return n === void 0 || (Bn & 1073741824) !== 0 && (Ct & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = ey(), gt.lanes |= t, ca |= t, n);
  }
  function Km(t, e, n, a) {
    return Ve(n, e) ? n : ia.current !== null ? (t = Qr(t, n, a), Ve(t, e) || (Wt = !0), t) : (Bn & 106) === 0 || (Bn & 1073741824) !== 0 && (Ct & 261930) === 0 ? (Wt = !0, t.memoizedState = n) : (t = ey(), gt.lanes |= t, ca |= t, e);
  }
  function Jm(t, e, n, a, s) {
    var u = ft.p;
    ft.p = u !== 0 && 8 > u ? u : 8;
    var f = it.T, p = {};
    p.types = f !== null ? f.types : null, it.T = p, Fr(t, !1, e, n);
    try {
      var T = s(), O = it.S;
      if (O !== null && O(p, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var V = fT(
          T,
          a
        );
        Vl(
          t,
          e,
          V,
          He(t)
        );
      } else
        Vl(
          t,
          e,
          a,
          He(t)
        );
    } catch (j) {
      Vl(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: j },
        He()
      );
    } finally {
      ft.p = u, f !== null && p.types !== null && (f.types = p.types), it.T = f;
    }
  }
  function gT() {
  }
  function Kr(t, e, n, a) {
    if (t.tag !== 5) throw Error(r(476));
    var s = Fm(t).queue;
    Jm(
      t,
      s,
      e,
      Xt,
      n === null ? gT : function() {
        return Pm(t), n(a);
      }
    );
  }
  function Fm(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Xt,
      baseState: Xt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ln,
        lastRenderedState: Xt
      },
      next: null
    };
    var n = {};
    return e.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ln,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Pm(t) {
    var e = Fm(t);
    e.next === null && (e = t.alternate.memoizedState), Vl(
      t,
      e.next.queue,
      {},
      He()
    );
  }
  function Jr() {
    return ce(Zi);
  }
  function km() {
    return Pt().memoizedState;
  }
  function Im() {
    return Pt().memoizedState;
  }
  function vT(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = He();
          t = na(n);
          var a = aa(e, t, n);
          a !== null && (Oe(a, e, n), Ol(a, e, n)), e = { cache: Er() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function ST(t, e, n) {
    var a = He();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ou(t) ? $m(e, n) : (n = hr(t, e, n, a), n !== null && (Oe(n, t, a), tp(n, e, a)));
  }
  function Wm(t, e, n) {
    var a = He();
    Vl(t, e, n, a);
  }
  function Vl(t, e, n, a) {
    var s = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ou(t)) $m(e, s);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var f = e.lastRenderedState, p = u(f, n);
          if (s.hasEagerState = !0, s.eagerState = p, Ve(p, f))
            return js(t, e, s, 0), Lt === null && Hs(), !1;
        } catch {
        } finally {
        }
      if (n = hr(t, e, s, a), n !== null)
        return Oe(n, t, a), tp(n, e, a), !0;
    }
    return !1;
  }
  function Fr(t, e, n, a) {
    if (a = {
      lane: 2,
      revertLane: Hc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ou(t)) {
      if (e) throw Error(r(479));
    } else
      e = hr(
        t,
        n,
        a,
        2
      ), e !== null && Oe(e, t, 2);
  }
  function ou(t) {
    var e = t.alternate;
    return t === gt || e !== null && e === gt;
  }
  function $m(t, e) {
    Ai = eu = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function tp(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, ed(t, n);
    }
  }
  var ru = {
    readContext: ce,
    use: iu,
    useCallback: Jt,
    useContext: Jt,
    useEffect: Jt,
    useImperativeHandle: Jt,
    useLayoutEffect: Jt,
    useInsertionEffect: Jt,
    useMemo: Jt,
    useReducer: Jt,
    useRef: Jt,
    useState: Jt,
    useDebugValue: Jt,
    useDeferredValue: Jt,
    useTransition: Jt,
    useSyncExternalStore: Jt,
    useId: Jt,
    useHostTransitionStatus: Jt,
    useFormState: Jt,
    useActionState: Jt,
    useOptimistic: Jt,
    useMemoCache: Jt,
    useCacheRefresh: Jt,
    useEffectEvent: Jt
  }, ep = {
    readContext: ce,
    use: iu,
    useCallback: function(t, e) {
      return Se().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: ce,
    useEffect: Hm,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, su(
        4194308,
        4,
        qm.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return su(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      su(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = Se();
      e = e === void 0 ? null : e;
      var a = t();
      if (Ga) {
        Jn(!0);
        try {
          t();
        } finally {
          Jn(!1);
        }
      }
      return n.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, n) {
      var a = Se();
      if (n !== void 0) {
        var s = n(e);
        if (Ga) {
          Jn(!0);
          try {
            n(e);
          } finally {
            Jn(!1);
          }
        }
      } else s = e;
      return a.memoizedState = a.baseState = s, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: s
      }, a.queue = t, t = t.dispatch = ST.bind(
        null,
        gt,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = Se();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Gr(t);
      var e = t.queue, n = Wm.bind(null, gt, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: Zr,
    useDeferredValue: function(t, e) {
      var n = Se();
      return Qr(n, t, e);
    },
    useTransition: function() {
      var t = Gr(!1);
      return t = Jm.bind(
        null,
        gt,
        t.queue,
        !0,
        !1
      ), Se().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var a = gt, s = Se();
      if (Et) {
        if (n === void 0)
          throw Error(r(407));
        n = n();
      } else {
        if (n = e(), Lt === null)
          throw Error(r(349));
        (Ct & 127) !== 0 || bm(a, e, n);
      }
      s.memoizedState = n;
      var u = { value: n, getSnapshot: e };
      return s.queue = u, Hm(Mm.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, Ci(
        9,
        { destroy: void 0 },
        Am.bind(
          null,
          a,
          u,
          n,
          e
        ),
        null
      ), n;
    },
    useId: function() {
      var t = Se(), e = Lt.identifierPrefix;
      if (Et) {
        var n = yn, a = pn;
        n = (a & ~(1 << 32 - Ne(a) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = nu++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = hT++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Jr,
    useFormState: Vm,
    useActionState: Vm,
    useOptimistic: function(t) {
      var e = Se();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = Fr.bind(
        null,
        gt,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: Hr,
    useCacheRefresh: function() {
      return Se().memoizedState = vT.bind(
        null,
        gt
      );
    },
    useEffectEvent: function(t) {
      var e = Se(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((Nt & 2) !== 0)
          throw Error(r(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, np = {
    readContext: ce,
    use: iu,
    useCallback: Zm,
    useContext: ce,
    useEffect: Xr,
    useImperativeHandle: Xm,
    useInsertionEffect: Ym,
    useLayoutEffect: Gm,
    useMemo: Qm,
    useReducer: lu,
    useRef: Lm,
    useState: function() {
      return lu(Ln);
    },
    useDebugValue: Zr,
    useDeferredValue: function(t, e) {
      var n = Pt();
      return Km(
        n,
        Bt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = lu(Ln)[0], e = Pt().memoizedState;
      return [
        typeof t == "boolean" ? t : _l(t),
        e
      ];
    },
    useSyncExternalStore: Em,
    useId: km,
    useHostTransitionStatus: Jr,
    useFormState: wm,
    useActionState: wm,
    useOptimistic: function(t, e) {
      var n = Pt();
      return Om(n, Bt, t, e);
    },
    useMemoCache: Hr,
    useCacheRefresh: Im,
    useEffectEvent: jm
  }, TT = {
    readContext: ce,
    use: iu,
    useCallback: Zm,
    useContext: ce,
    useEffect: Xr,
    useImperativeHandle: Xm,
    useInsertionEffect: Ym,
    useLayoutEffect: Gm,
    useMemo: Qm,
    useReducer: Yr,
    useRef: Lm,
    useState: function() {
      return Yr(Ln);
    },
    useDebugValue: Zr,
    useDeferredValue: function(t, e) {
      var n = Pt();
      return Bt === null ? Qr(n, t, e) : Km(
        n,
        Bt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Yr(Ln)[0], e = Pt().memoizedState;
      return [
        typeof t == "boolean" ? t : _l(t),
        e
      ];
    },
    useSyncExternalStore: Em,
    useId: km,
    useHostTransitionStatus: Jr,
    useFormState: Bm,
    useActionState: Bm,
    useOptimistic: function(t, e) {
      var n = Pt();
      return Bt !== null ? Om(n, Bt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: Hr,
    useCacheRefresh: Im,
    useEffectEvent: jm
  };
  function Pr(t, e, n, a) {
    e = t.memoizedState, n = n(a, e), n = n == null ? e : U({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var kr = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var a = He(), s = na(a);
      s.payload = e, n != null && (s.callback = n), e = aa(t, s, a), e !== null && (Oe(e, t, a), Ol(e, t, a));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var a = He(), s = na(a);
      s.tag = 1, s.payload = e, n != null && (s.callback = n), e = aa(t, s, a), e !== null && (Oe(e, t, a), Ol(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = He(), a = na(n);
      a.tag = 2, e != null && (a.callback = e), e = aa(t, a, n), e !== null && (Oe(e, t, n), Ol(e, t, n));
    }
  };
  function ap(t, e, n, a, s, u, f) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, f) : e.prototype && e.prototype.isPureReactComponent ? !Sl(n, a) || !Sl(s, u) : !0;
  }
  function ip(t, e, n, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && kr.enqueueReplaceState(e, e.state, null);
  }
  function qa(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e)
        a !== "ref" && (n[a] = e[a]);
    }
    if (t = t.defaultProps) {
      n === e && (n = U({}, n));
      for (var s in t)
        n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  function lp(t) {
    Ls(t);
  }
  function sp(t) {
    console.error(t);
  }
  function up(t) {
    Ls(t);
  }
  function cu(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function op(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function Ir(t, e, n) {
    return n = na(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      cu(t, e);
    }, n;
  }
  function rp(t) {
    return t = na(t), t.tag = 3, t;
  }
  function cp(t, e, n, a) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = a.value;
      t.payload = function() {
        return s(u);
      }, t.callback = function() {
        op(e, n, a);
      };
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
      op(e, n, a), typeof s != "function" && (fa === null ? fa = /* @__PURE__ */ new Set([this]) : fa.add(this));
      var p = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: p !== null ? p : ""
      });
    });
  }
  function ET(t, e, n, a, s) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = n.alternate, e !== null && wa(
        e,
        n,
        s,
        !0
      ), n = fe.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return ge === null ? Nu() : n.alternate === null && Ft === 0 && (Ft = 3), n.flags &= -257, n.flags |= 65536, n.lanes = s, a === ks ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), Uc(t, a, s)), !1;
          case 22:
            return n.flags |= 65536, a === ks ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), Uc(t, a, s)), !1;
        }
        throw Error(r(435, n.tag));
      }
      return Uc(t, a, s), Nu(), !1;
    }
    if (Et)
      return e = fe.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = s, a !== gr && (t = Error(r(422), { cause: a }), bl(Xe(t, n)))) : (a !== gr && (e = Error(r(423), {
        cause: a
      }), bl(
        Xe(e, n)
      )), t = t.current.alternate, t.flags |= 65536, s &= -s, t.lanes |= s, a = Xe(a, n), s = Ir(
        t.stateNode,
        a,
        s
      ), Or(t, s), Ft !== 4 && (Ft = 2)), !1;
    var u = Error(r(520), { cause: a });
    if (u = Xe(u, n), Gl === null ? Gl = [u] : Gl.push(u), Ft !== 4 && (Ft = 2), e === null) return !0;
    a = Xe(a, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = s & -s, n.lanes |= t, t = Ir(n.stateNode, a, t), Or(n, t), !1;
        case 1:
          if (e = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (fa === null || !fa.has(u))))
            return n.flags |= 65536, s &= -s, n.lanes |= s, s = rp(s), cp(
              s,
              t,
              n,
              a
            ), Or(n, s), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Wr = Error(r(461)), Wt = !1;
  function te(t, e, n, a) {
    e.child = t === null ? mm(e, null, n, a) : Ya(
      e,
      t.child,
      n,
      a
    );
  }
  function fp(t, e, n, a, s) {
    n = n.render;
    var u = e.ref;
    if ("ref" in a) {
      var f = {};
      for (var p in a)
        p !== "ref" && (f[p] = a[p]);
    } else f = a;
    return Ua(e), a = wr(
      t,
      e,
      n,
      f,
      u,
      s
    ), p = Ur(), t !== null && !Wt ? (Br(t, e, s), Hn(t, e, s)) : (Et && p && Xs(e), e.flags |= 1, te(t, e, a, s), e.child);
  }
  function hp(t, e, n, a, s) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" && !dr(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = u, dp(
        t,
        e,
        u,
        a,
        s
      )) : (t = Gs(
        n.type,
        null,
        a,
        e,
        e.mode,
        s
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !sc(t, s)) {
      var f = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Sl, n(f, a) && t.ref === e.ref)
        return Hn(t, e, s);
    }
    return e.flags |= 1, t = _n(u, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function dp(t, e, n, a, s) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Sl(u, a) && t.ref === e.ref)
        if (Wt = !1, e.pendingProps = a = u, sc(t, s))
          (t.flags & 131072) !== 0 && (Wt = !0);
        else
          return e.lanes = t.lanes, Hn(t, e, s);
    }
    return $r(
      t,
      e,
      n,
      a,
      s
    );
  }
  function mp(t, e, n, a) {
    var s = a.children, u = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, t !== null) {
          for (a = e.child = t.child, s = 0; a !== null; )
            s = s | a.lanes | a.childLanes, a = a.sibling;
          a = s & ~u;
        } else a = 0, e.child = null;
        return pp(
          t,
          e,
          u,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Fs(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? gm(e, u) : xr(), vm(e);
      else
        return a = e.lanes = 536870912, pp(
          t,
          e,
          u !== null ? u.baseLanes | n : n,
          n,
          a
        );
    } else
      u !== null ? (Fs(e, u.cachePool), gm(e, u), sa(), e.memoizedState = null) : (t !== null && Fs(e, null), xr(), sa());
    return te(t, e, s, n), e.child;
  }
  function wl(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function pp(t, e, n, a, s) {
    var u = Ar();
    return u = u === null ? null : { parent: kt._currentValue, pool: u }, e.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, t !== null && Fs(e, null), xr(), vm(e), t !== null && wa(t, e, a, !0), e.childLanes = s, null;
  }
  function fu(t, e) {
    return e = hu(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function yp(t, e, n) {
    return Ya(e, t.child, null, n), t = fu(e, e.pendingProps), t.flags |= 2, we(e), e.memoizedState = null, t;
  }
  function bT(t, e, n) {
    var a = e.pendingProps, s = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (Et) {
        if (a.mode === "hidden")
          return t = fu(e, a), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, wl(null, t);
        if (Nr(e), (t = Gt) ? (t = qy(
          t,
          Ke
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: kn !== null ? { id: pn, overflow: yn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = $d(t), n.return = e, e.child = n, le = e, Gt = null)) : t = null, t === null) throw Wn(e);
        return e.lanes = 536870912, null;
      }
      return fu(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var f = u.dehydrated;
      if (Nr(e), s)
        if (e.flags & 256)
          e.flags &= -257, e = yp(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (Wt || wa(t, e, n, !1), s = (n & t.childLanes) !== 0, Wt || s) {
        if (ia.current === null) {
          if (a = Lt, a !== null && (f = nd(a, n), f !== 0 && f !== u.retryLane))
            throw u.retryLane = f, za(t, f), Oe(a, t, f), Wr;
          Nu();
        }
        e = yp(
          t,
          e,
          n
        );
      } else
        t = u.treeContext, Gt = Fe(f.nextSibling), le = e, Et = !0, In = null, Ke = !1, t !== null && nm(e, t), e = fu(e, a), e.flags |= 134221824;
      return e;
    }
    return t = _n(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Di(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(r(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function $r(t, e, n, a, s) {
    return Ua(e), n = wr(
      t,
      e,
      n,
      a,
      void 0,
      s
    ), a = Ur(), t !== null && !Wt ? (Br(t, e, s), Hn(t, e, s)) : (Et && a && Xs(e), e.flags |= 1, te(t, e, n, s), e.child);
  }
  function gp(t, e, n, a, s, u) {
    return Ua(e), e.updateQueue = null, n = Tm(
      e,
      a,
      n,
      s
    ), Sm(t), a = Ur(), t !== null && !Wt ? (Br(t, e, u), Hn(t, e, u)) : (Et && a && Xs(e), e.flags |= 1, te(t, e, n, u), e.child);
  }
  function vp(t, e, n, a, s) {
    if (Ua(e), e.stateNode === null) {
      var u = yi, f = n.contextType;
      typeof f == "object" && f !== null && (u = ce(f)), u = new n(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = kr, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, Cr(e), f = n.contextType, u.context = typeof f == "object" && f !== null ? ce(f) : yi, u.state = e.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (Pr(
        e,
        n,
        f,
        a
      ), u.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (f = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), f !== u.state && kr.enqueueReplaceState(u, u.state, null), xl(e, a, u, s), Rl(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = e.stateNode;
      var p = e.memoizedProps, T = qa(n, p);
      u.props = T;
      var O = u.context, V = n.contextType;
      f = yi, typeof V == "object" && V !== null && (f = ce(V));
      var j = n.getDerivedStateFromProps;
      V = typeof j == "function" || typeof u.getSnapshotBeforeUpdate == "function", p = e.pendingProps !== p, V || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (p || O !== f) && ip(
        e,
        u,
        a,
        f
      ), ea = !1;
      var C = e.memoizedState;
      u.state = C, xl(e, a, u, s), Rl(), O = e.memoizedState, p || C !== O || ea ? (typeof j == "function" && (Pr(
        e,
        n,
        j,
        a
      ), O = e.memoizedState), (T = ea || ap(
        e,
        n,
        T,
        a,
        C,
        O,
        f
      )) ? (V || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = O), u.props = a, u.state = O, u.context = f, a = T) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      u = e.stateNode, Dr(t, e), f = e.memoizedProps, V = qa(n, f), u.props = V, j = e.pendingProps, C = u.context, O = n.contextType, T = yi, typeof O == "object" && O !== null && (T = ce(O)), p = n.getDerivedStateFromProps, (O = typeof p == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== j || C !== T) && ip(
        e,
        u,
        a,
        T
      ), ea = !1, C = e.memoizedState, u.state = C, xl(e, a, u, s), Rl();
      var N = e.memoizedState;
      f !== j || C !== N || ea || t !== null && t.dependencies !== null && Ks(t.dependencies) ? (typeof p == "function" && (Pr(
        e,
        n,
        p,
        a
      ), N = e.memoizedState), (V = ea || ap(
        e,
        n,
        V,
        a,
        C,
        N,
        T
      ) || t !== null && t.dependencies !== null && Ks(t.dependencies)) ? (O || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, N, T), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        N,
        T
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === t.memoizedProps && C === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && C === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = N), u.props = a, u.state = N, u.context = T, a = V) : (typeof u.componentDidUpdate != "function" || f === t.memoizedProps && C === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && C === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return u = a, Di(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = Ya(
      e,
      t.child,
      null,
      s
    ), e.child = Ya(
      e,
      null,
      n,
      s
    )) : te(t, e, n, s), e.memoizedState = u.state, t = e.child) : t = Hn(
      t,
      e,
      s
    ), t;
  }
  function Sp(t, e, n, a) {
    return _a(), e.flags |= 256, te(t, e, n, a), e.child;
  }
  var tc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ec(t) {
    return { baseLanes: t, cachePool: om() };
  }
  function nc(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Le), t;
  }
  function Tp(t, e, n) {
    var a = e.pendingProps, s = !1, u = (e.flags & 128) !== 0, f;
    if ((f = u) || (f = t !== null && t.memoizedState === null ? !1 : (he.current & 2) !== 0), f && (s = !0, e.flags &= -129), f = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Et) {
        if (s ? la(e) : sa(), (t = Gt) ? (t = qy(
          t,
          Ke
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: kn !== null ? { id: pn, overflow: yn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = $d(t), n.return = e, e.child = n, le = e, Gt = null)) : t = null, t === null) throw Wn(e);
        return ef(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return u = a.children, a = a.fallback, s ? (sa(), s = e.mode, u = hu(
        { mode: "hidden", children: u },
        s
      ), a = Na(
        a,
        s,
        n,
        null
      ), u.return = e, a.return = e, u.sibling = a, e.child = u, a = e.child, a.memoizedState = ec(n), a.childLanes = nc(
        t,
        f,
        n
      ), e.memoizedState = tc, wl(null, a)) : (la(e), ac(e, u));
    }
    var p = t.memoizedState;
    if (p !== null) {
      var T = p.dehydrated;
      if (T !== null)
        return AT(
          t,
          e,
          u,
          f,
          a,
          T,
          p,
          n
        );
    }
    return s ? (sa(), s = a.fallback, u = e.mode, p = t.child, T = p.sibling, a = _n(p, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = p.subtreeFlags & 1206910976, T !== null ? s = _n(T, s) : (s = Na(
      s,
      u,
      n,
      null
    ), s.flags |= 2), s.return = e, a.return = e, a.sibling = s, e.child = a, wl(null, a), a = e.child, s = t.child.memoizedState, s === null ? s = ec(n) : (u = s.cachePool, u !== null ? (p = kt._currentValue, u = u.parent !== p ? { parent: p, pool: p } : u) : u = om(), s = {
      baseLanes: s.baseLanes | n,
      cachePool: u
    }), a.memoizedState = s, a.childLanes = nc(
      t,
      f,
      n
    ), e.memoizedState = tc, wl(t.child, a)) : (la(e), n = t.child, t = n.sibling, n = _n(n, {
      mode: "visible",
      children: a.children
    }), n.return = e, n.sibling = null, t !== null && (f = e.deletions, f === null ? (e.deletions = [t], e.flags |= 16) : f.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function ac(t, e) {
    return e = hu(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function hu(t, e) {
    return t = Ae(22, t, null, e), t.lanes = 0, t;
  }
  function du(t, e, n) {
    return Ya(e, t.child, null, n), t = ac(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function AT(t, e, n, a, s, u, f, p) {
    if (n)
      return e.flags & 256 ? (la(e), e.flags &= -257, du(
        t,
        e,
        p
      )) : e.memoizedState !== null ? (sa(), e.child = t.child, e.flags |= 128, null) : (sa(), u = s.fallback, f = e.mode, s = hu(
        { mode: "visible", children: s.children },
        f
      ), u = Na(
        u,
        f,
        p,
        null
      ), u.flags |= 2, s.return = e, u.return = e, s.sibling = u, e.child = s, Ya(e, t.child, null, p), s = e.child, s.memoizedState = ec(p), s.childLanes = nc(
        t,
        a,
        p
      ), e.memoizedState = tc, wl(null, s));
    if (la(e), ef(u)) {
      if (a = u.nextSibling && u.nextSibling.dataset, a) var T = a.dgst;
      return a = T, a !== "" && (s = Error(r(419)), s.stack = "", s.digest = a, bl({ value: s, source: null, stack: null })), du(
        t,
        e,
        p
      );
    }
    if (Wt || wa(t, e, p, !1), a = (p & t.childLanes) !== 0, Wt || a) {
      if (ia.current !== null)
        return du(
          t,
          e,
          p
        );
      if (a = Lt, a !== null && (s = nd(
        a,
        p
      ), s !== 0 && s !== f.retryLane))
        throw f.retryLane = s, za(t, s), Oe(a, t, s), Wr;
      return tf(u) || Nu(), du(
        t,
        e,
        p
      );
    }
    return tf(u) ? (e.flags |= 192, e.child = t.child, null) : (t = f.treeContext, Gt = Fe(u.nextSibling), le = e, Et = !0, In = null, Ke = !1, t !== null && nm(e, t), e = ac(
      e,
      s.children
    ), e.flags |= 134221824, e);
  }
  function Ep(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Qs(t.return, e, n);
  }
  function bp(t) {
    for (var e = null; t !== null; ) {
      var n = t.alternate;
      n !== null && tu(n) === null && (e = t), t = t.sibling;
    }
    return e;
  }
  function mu(t, e, n, a, s, u) {
    var f = t.memoizedState;
    f === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: s,
      treeForkCount: u
    } : (f.isBackwards = e, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = n, f.tailMode = s, f.treeForkCount = u);
  }
  function ic(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var n = e.sibling;
      e.sibling = t.child, t.child = e, e = n;
    }
  }
  function lc(t, e, n) {
    var a = e.pendingProps, s = a.revealOrder, u = a.tail;
    a = a.children;
    var f = he.current;
    if (e.flags & 128)
      return zl(e, f), null;
    var p = (f & 2) !== 0;
    if (p ? (f = f & 1 | 2, e.flags |= 128) : f &= 1, zl(e, f), s === "backwards" && t !== null ? (ic(t), te(t, e, a, n), ic(t)) : te(t, e, a, n), a = Et ? El : 0, !p && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Ep(t, n, e);
        else if (t.tag === 19)
          Ep(t, n, e);
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
    switch (s) {
      case "backwards":
        n = bp(e.child), n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null, ic(e)), mu(
          e,
          !0,
          s,
          null,
          u,
          a
        );
        break;
      case "unstable_legacy-backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (t = s.alternate, t !== null && tu(t) === null) {
            e.child = s;
            break;
          }
          t = s.sibling, s.sibling = n, n = s, s = t;
        }
        mu(
          e,
          !0,
          n,
          null,
          u,
          a
        );
        break;
      case "together":
        mu(
          e,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      case "independent":
        e.memoizedState = null;
        break;
      default:
        n = bp(e.child), n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null), mu(
          e,
          !1,
          s,
          n,
          u,
          a
        );
    }
    return e.child;
  }
  function Ap(t, e, n) {
    var a = e.pendingProps;
    return $n(e, e.type, a.value), te(t, e, a.children, n), e.child;
  }
  function Hn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), ca |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (wa(
          t,
          e,
          n,
          !1
        ), (n & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(r(153));
    if (e.child !== null) {
      for (t = e.child, n = _n(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = _n(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function sc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Ks(t)));
  }
  function MT(t, e, n) {
    switch (e.tag) {
      case 3:
        Ss(e, e.stateNode.containerInfo), $n(e, kt, t.memoizedState.cache), _a();
        break;
      case 27:
      case 5:
        Vo(e);
        break;
      case 4:
        Ss(e, e.stateNode.containerInfo);
        break;
      case 10:
        $n(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Nr(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return la(e), e.flags |= 128, null;
          a = wa(
            t,
            e,
            n,
            !1
          );
          var s = e.child.childLanes;
          return a || (n & s) !== 0 ? Tp(t, e, n) : (la(e), t = Hn(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        }
        la(e);
        break;
      case 19:
        if (e.flags & 128)
          return lc(
            t,
            e,
            n
          );
        if (s = (t.flags & 128) !== 0, a = (n & e.childLanes) !== 0, a || (wa(
          t,
          e,
          n,
          !1
        ), a = (n & e.childLanes) !== 0), s) {
          if (a)
            return lc(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (s = e.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), zl(e, he.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, mp(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        $n(e, kt, t.memoizedState.cache);
    }
    return Hn(t, e, n);
  }
  function Mp(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Wt = !0;
      else {
        if (!sc(t, n) && (e.flags & 128) === 0)
          return Wt = !1, MT(
            t,
            e,
            n
          );
        Wt = (t.flags & 131072) !== 0;
      }
    else
      Wt = !1, Et && (e.flags & 1048576) !== 0 && em(e, El, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = Ha(e.elementType), e.type = t, typeof t == "function")
            dr(t) ? (a = qa(t, a), e.tag = 1, e = vp(
              null,
              e,
              t,
              a,
              n
            )) : (e.tag = 0, e = $r(
              null,
              e,
              t,
              a,
              n
            ));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === w) {
                e.tag = 11, e = fp(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (s === I) {
                e.tag = 14, e = hp(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (s === J) {
                e.tag = 10, e.type = t, e = Ap(
                  null,
                  e,
                  n
                );
                break t;
              }
            }
            throw e = bt(t) || t, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return $r(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return a = e.type, s = qa(
          a,
          e.pendingProps
        ), vp(
          t,
          e,
          a,
          s,
          n
        );
      case 3:
        t: {
          if (Ss(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          s = u.element, Dr(t, e), xl(e, a, null, n);
          var f = e.memoizedState;
          if (a = f.cache, $n(e, kt, a), a !== u.cache && Tr(
            e,
            [kt],
            n,
            !0
          ), Rl(), a = f.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = Sp(
                t,
                e,
                a,
                n
              );
              break t;
            } else if (a !== s) {
              s = Xe(
                Error(r(424)),
                e
              ), bl(s), e = Sp(
                t,
                e,
                a,
                n
              );
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (Gt = Fe(t.firstChild), le = e, Et = !0, In = null, Ke = !0, n = mm(
                e,
                null,
                a,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
            }
          else {
            if (_a(), a === s) {
              e = Hn(
                t,
                e,
                n
              );
              break t;
            }
            te(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Di(t, e), t === null ? (n = Py(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : Et || (e.stateNode = Ry(
          e.type,
          e.pendingProps,
          Qn.current,
          e
        )) : e.memoizedState = Py(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Vo(e), t === null && Et && (a = e.stateNode = Qy(
          e.type,
          e.pendingProps,
          Qn.current
        ), le = e, Ke = !0, s = Gt, ma(e.type) ? (nf = s, Gt = Fe(a.firstChild)) : Gt = s), te(
          t,
          e,
          e.pendingProps.children,
          n
        ), Di(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Et && ((s = a = Gt) && (a = vE(
          a,
          e.type,
          e.pendingProps,
          Ke
        ), a !== null ? (e.stateNode = a, le = e, Gt = Fe(a.firstChild), Ke = !1, s = !0) : s = !1), s || Wn(e)), Vo(e), s = e.type, u = e.pendingProps, f = t !== null ? t.memoizedProps : null, a = u.children, Jc(s, u) ? a = null : f !== null && Jc(s, f) && (e.flags |= 32), e.memoizedState !== null && (s = wr(
          t,
          e,
          dT,
          null,
          null,
          n
        ), Zi._currentValue = s), Di(t, e), te(t, e, a, n), e.child;
      case 6:
        return t === null && Et && ((t = n = Gt) && (n = SE(
          n,
          e.pendingProps,
          Ke
        ), n !== null ? (e.stateNode = n, le = e, Gt = null, t = !0) : t = !1), t || Wn(e)), null;
      case 13:
        return Tp(t, e, n);
      case 4:
        return Ss(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = Ya(
          e,
          null,
          a,
          n
        ) : te(t, e, a, n), e.child;
      case 11:
        return fp(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return a = e.pendingProps, Di(t, e), te(t, e, a, n), e.child;
      case 8:
        return te(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return te(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return Ap(t, e, n);
      case 9:
        return s = e.type._context, a = e.pendingProps.children, Ua(e), s = ce(s), a = a(s), e.flags |= 1, te(t, e, a, n), e.child;
      case 14:
        return hp(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return dp(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return lc(t, e, n);
      case 31:
        return bT(t, e, n);
      case 22:
        return mp(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return Ua(e), a = ce(kt), t === null ? (s = Ar(), s === null && (s = Lt, u = Er(), s.pooledCache = u, u.refCount++, u !== null && (s.pooledCacheLanes |= n), s = u), e.memoizedState = { parent: a, cache: s }, Cr(e), $n(e, kt, s)) : ((t.lanes & n) !== 0 && (Dr(t, e), xl(e, null, null, n), Rl()), s = t.memoizedState, u = e.memoizedState, s.parent !== a ? (s = { parent: a, cache: a }, e.memoizedState = s, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s), $n(e, kt, a)) : (a = u.cache, $n(e, kt, a), a !== s.cache && Tr(
          e,
          [kt],
          n,
          !0
        ))), te(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 30:
        return e.stateNode === null && (e.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), a = e.pendingProps, a.name != null && a.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : Et && Xs(e), t !== null && t.memoizedProps.name !== a.name ? e.flags |= 4194816 : Di(t, e), te(t, e, a.children, n), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function jn(t) {
    t.flags |= 4;
  }
  function uc(t, e, n, a, s) {
    var u;
    if ((u = (t.mode & 32) !== 0) && (u = n === null ? $y(e, a) : $y(e, a) && (a.src !== n.src || a.srcSet !== n.srcSet)), u) {
      if (t.flags |= 16777216, (s & 335544128) === s)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (ly()) t.flags |= 8192;
        else
          throw ja = ks, Mr;
    } else t.flags &= -16777217;
  }
  function Cp(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !t0(e))
      if (ly()) t.flags |= 8192;
      else
        throw ja = ks, Mr;
  }
  function pu(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? $h() : 536870912, t.lanes |= e, Ni |= e);
  }
  function Ul(t, e) {
    if (!Et)
      switch (t.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var n = t.tail, a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
          break;
        default:
          for (e = t.tail, n = null; e !== null; )
            e.alternate !== null && (n = e), e = e.sibling;
          n === null ? t.tail = null : n.sibling = null;
      }
  }
  function qt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, a = 0;
    if (e)
      for (var s = t.child; s !== null; )
        n |= s.lanes | s.childLanes, a |= s.subtreeFlags & 1206910976, a |= s.flags & 1206910976, s.return = t, s = s.sibling;
    else
      for (s = t.child; s !== null; )
        n |= s.lanes | s.childLanes, a |= s.subtreeFlags, a |= s.flags, s.return = t, s = s.sibling;
    return t.subtreeFlags |= a, t.childLanes = n, e;
  }
  function CT(t, e, n) {
    var a = e.pendingProps;
    switch (yr(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return qt(e), null;
      case 1:
        return qt(e), null;
      case 3:
        return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Un(kt), ai(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Si(e) ? jn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, vr())), qt(e), null;
      case 26:
        var s = e.type, u = e.memoizedState;
        return t === null ? (jn(e), u !== null ? (qt(e), Cp(e, u)) : (qt(e), uc(
          e,
          s,
          null,
          a,
          n
        ))) : u ? u !== t.memoizedState ? (jn(e), qt(e), Cp(e, u)) : (qt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && jn(e), qt(e), uc(
          e,
          s,
          t,
          a,
          n
        )), null;
      case 27:
        if (Ts(e), n = Qn.current, s = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && jn(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return qt(e), e.subtreeFlags &= -33554433, null;
          }
          t = dn.current, Si(e) ? am(e) : (t = Qy(s, a, n), e.stateNode = t, jn(e));
        }
        return qt(e), e.subtreeFlags &= -33554433, null;
      case 5:
        if (Ts(e), s = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && jn(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return qt(e), e.subtreeFlags &= -33554433, null;
          }
          if (u = dn.current, Si(e))
            am(e);
          else {
            var f = Kl(
              Qn.current
            );
            switch (u) {
              case 1:
                u = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                u = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    u = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    u = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    u = f.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof a.is == "string" ? f.createElement("select", {
                      is: a.is
                    }) : f.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? f.createElement(s, { is: a.is }) : f.createElement(s);
                }
            }
            u[re] = e, u[be] = a;
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                u.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e)
                  break t;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            e.stateNode = u;
            t: switch (me(u, s, a), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && jn(e);
          }
        }
        return qt(e), e.subtreeFlags &= -33554433, uc(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          n
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && jn(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(r(166));
          if (t = Qn.current, Si(e)) {
            if (t = e.stateNode, n = e.memoizedProps, a = null, s = le, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  a = s.memoizedProps;
              }
            t[re] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || My(t.nodeValue, n)), t || Wn(e, !0);
          } else
            t = Kl(t).createTextNode(
              a
            ), t[re] = e, e.stateNode = t;
        }
        return qt(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = Si(e), n !== null) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[re] = e;
            } else
              _a(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            qt(e), t = !1;
          } else
            n = vr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (we(e), e) : (we(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return qt(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (s = Si(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!s) throw Error(r(318));
              if (s = e.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(r(317));
              s[re] = e;
            } else
              _a(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            qt(e), s = !1;
          } else
            s = vr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return e.flags & 256 ? (we(e), e) : (we(e), null);
        }
        return we(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = a !== null, t = t !== null && t.memoizedState !== null, n && (a = e.child, s = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (s = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== s && (a.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), pu(e, e.updateQueue), qt(e), null);
      case 4:
        return ai(), t === null && qc(e.stateNode.containerInfo), e.flags |= 67108864, qt(e), null;
      case 10:
        return Un(e.type), qt(e), null;
      case 19:
        if (_r(e), a = e.memoizedState, a === null) return qt(e), null;
        if (s = (e.flags & 128) !== 0, u = a.rendering, u === null)
          if (s) Ul(a, !1);
          else {
            if (Ft !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = tu(t), u !== null) {
                  for (e.flags |= 128, Ul(a, !1), t = u.updateQueue, e.updateQueue = t, pu(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    Wd(n, t), n = n.sibling;
                  return zl(
                    e,
                    he.current & 1 | 2
                  ), Et && Vn(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && xe() > Ou && (e.flags |= 128, s = !0, Ul(a, !1), e.lanes = 4194304);
          }
        else {
          if (!s)
            if (t = tu(u), t !== null) {
              if (e.flags |= 128, s = !0, t = t.updateQueue, e.updateQueue = t, pu(e, t), Ul(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !u.alternate && !Et)
                return qt(e), null;
            } else
              2 * xe() - a.renderingStartTime > Ou && n !== 536870912 && (e.flags |= 128, s = !0, Ul(a, !1), e.lanes = 4194304);
          a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u);
        }
        if (a.tail !== null) {
          t = a.tail;
          t: {
            for (n = t; n !== null; ) {
              if (n.alternate !== null) {
                n = !1;
                break t;
              }
              n = n.sibling;
            }
            n = !0;
          }
          return a.rendering = t, a.tail = t.sibling, a.renderingStartTime = xe(), t.sibling = null, u = he.current, u = s ? u & 1 | 2 : u & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !n || Et ? zl(e, u) : (n = u, Yt(fe, e), Yt(he, n), ge === null && (ge = e)), Et && Vn(e, a.treeForkCount), t;
        }
        return qt(e), null;
      case 22:
      case 23:
        return we(e), zr(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (qt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : qt(e), n = e.updateQueue, n !== null && pu(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && oe(La), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Un(kt), qt(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, qt(e), null;
    }
    throw Error(r(156, e.tag));
  }
  function DT(t, e) {
    switch (yr(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Un(kt), ai(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Ts(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (we(e), e.alternate === null)
            throw Error(r(340));
          _a();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (we(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          _a();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return _r(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return ai(), null;
      case 10:
        return Un(e.type), null;
      case 22:
      case 23:
        return we(e), zr(), t !== null && oe(La), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Un(kt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Dp(t, e) {
    switch (yr(e), e.tag) {
      case 3:
        Un(kt), ai();
        break;
      case 26:
      case 27:
      case 5:
        Ts(e);
        break;
      case 4:
        ai();
        break;
      case 31:
        e.memoizedState !== null && we(e);
        break;
      case 13:
        we(e);
        break;
      case 19:
        _r(e);
        break;
      case 10:
        Un(e.type);
        break;
      case 22:
      case 23:
        we(e), zr(), t !== null && oe(La);
        break;
      case 24:
        Un(kt);
    }
  }
  function Bl(t, e) {
    try {
      var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var s = a.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var u = n.create, f = n.inst;
            a = u(), f.destroy = a;
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (p) {
      wt(e, e.return, p);
    }
  }
  function ua(t, e, n) {
    try {
      var a = e.updateQueue, s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var f = a.inst, p = f.destroy;
            if (p !== void 0) {
              f.destroy = void 0, s = e;
              var T = n, O = p;
              try {
                O();
              } catch (V) {
                wt(
                  s,
                  T,
                  V
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (V) {
      wt(e, e.return, V);
    }
  }
  function Op(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        ym(e, n);
      } catch (a) {
        wt(t, t.return, a);
      }
    }
  }
  function Rp(t, e, n) {
    n.props = qa(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      wt(t, e, a);
    }
  }
  function gn(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            var s = t.stateNode, u = zn(t.memoizedProps, s);
            (s.ref === null || s.ref.name !== u) && (s.ref = Uy(u)), a = s.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var f = new je(t);
              y(
                t.child,
                !1,
                yE,
                f,
                void 0,
                void 0
              ), t.stateNode = f;
            }
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? t.refCleanup = n(a) : n.current = a;
      }
    } catch (p) {
      wt(t, e, p);
    }
  }
  function de(t, e) {
    var n = t.ref, a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (s) {
          wt(t, e, s);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          wt(t, e, s);
        }
      else n.current = null;
  }
  function yu(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var n = 0; n < e.length; n++)
        Gy(
          t.stateNode,
          e[n]
        );
  }
  function xp(t) {
    for (var e = t.return; e !== null && (rc(e) && Gy(t.stateNode, e.stateNode), !oc(e)); )
      e = e.return;
  }
  function Ll(t) {
    for (var e = t.return; e !== null && (rc(e) && gE(t.stateNode, e.stateNode), !oc(e)); )
      e = e.return;
  }
  function oc(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function rc(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function cc(t) {
    var e = t.type, n = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (s) {
      wt(t, t.return, s);
    }
  }
  function fc(t, e, n) {
    try {
      var a = t.stateNode;
      WT(a, t.type, n, e), a[be] = e;
    } catch (s) {
      wt(t, t.return, s);
    }
  }
  function zp(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && ma(t.type) || t.tag === 4;
  }
  function hc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || zp(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && ma(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function dc(t, e, n, a) {
    var s = t.tag;
    if (s === 5 || s === 6)
      s = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(s, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(s), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = mn)), yu(t, a), zt = !0;
    else if (s !== 4 && (s === 27 && (yu(t, a), a = null, ma(t.type) && (n = t.stateNode, e = null)), t = t.child, t !== null))
      for (dc(
        t,
        e,
        n,
        a
      ), t = t.sibling; t !== null; )
        dc(
          t,
          e,
          n,
          a
        ), t = t.sibling;
  }
  function gu(t, e, n, a) {
    var s = t.tag;
    if (s === 5 || s === 6)
      s = t.stateNode, e ? n.insertBefore(s, e) : n.appendChild(s), yu(t, a), zt = !0;
    else if (s !== 4 && (s === 27 && (yu(t, a), a = null, ma(t.type) && (n = t.stateNode)), t = t.child, t !== null))
      for (gu(
        t,
        e,
        n,
        a
      ), t = t.sibling; t !== null; )
        gu(
          t,
          e,
          n,
          a
        ), t = t.sibling;
  }
  function Np(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var a = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      me(e, a, n), e[re] = t, e[be] = n;
    } catch (u) {
      wt(t, t.return, u);
    }
  }
  var vu = !1, Ue = null;
  function _p(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (vu = !0);
  }
  var vn = null;
  function Vp() {
    var t = vn;
    return vn = null, t;
  }
  var Me = 0;
  function Oi(t, e, n, a, s) {
    return Me = 0, wp(
      t.child,
      e,
      n,
      a,
      s
    );
  }
  function wp(t, e, n, a, s) {
    for (var u = !1; t !== null; ) {
      if (t.tag === 5) {
        var f = t.stateNode;
        if (a !== null) {
          var p = kc(f);
          a.push(p), p.view && (u = !0);
        } else
          u || kc(f).view && (u = !0);
        vu = !0, Vy(
          f,
          Me === 0 ? e : e + "_" + Me,
          n
        ), Me++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && s || wp(
        t.child,
        e,
        n,
        a,
        s
      ) && (u = !0));
      t = t.sibling;
    }
    return u;
  }
  function Sn(t, e) {
    for (; t !== null; )
      t.tag === 5 ? wy(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || Sn(
        t.child,
        e
      )), t = t.sibling;
  }
  function Su(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (Su(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var e = t.memoizedProps;
          if (e.name == null || e.name === "auto")
            throw Error(r(544));
          var n = e.name;
          e = Nn(e.default, e.share), e !== "none" && (Oi(
            t,
            n,
            e,
            null,
            !1
          ) || Sn(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function mc(t, e) {
    if (t.tag === 30) {
      var n = t.stateNode, a = t.memoizedProps, s = zn(a, n), u = Nn(
        a.default,
        n.paired ? a.share : a.enter
      );
      u !== "none" ? Oi(t, s, u, null, !1) ? (Su(t), n.paired || e || Ui(t, a.onEnter)) : Sn(t.child, !1) : Su(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        mc(t, e), t = t.sibling;
    else Su(t);
  }
  function pc(t) {
    if (Ue !== null && Ue.size !== 0) {
      var e = Ue;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var n = t.memoizedProps, a = n.name;
              if (a != null && a !== "auto") {
                var s = e.get(a);
                if (s !== void 0) {
                  var u = Nn(
                    n.default,
                    n.share
                  );
                  if (u !== "none" && (Oi(
                    t,
                    a,
                    u,
                    null,
                    !1
                  ) ? (u = t.stateNode, s.paired = u, u.paired = s, Ui(t, n.onShare)) : Sn(t.child, !1)), e.delete(a), e.size === 0) break;
                }
              }
            }
            pc(t);
          }
          t = t.sibling;
        }
    }
  }
  function yc(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, n = zn(e, t.stateNode), a = Ue !== null ? Ue.get(n) : void 0, s = Nn(
        e.default,
        a !== void 0 ? e.share : e.exit
      );
      s !== "none" && (Oi(t, n, s, null, !1) ? a !== void 0 ? (s = t.stateNode, a.paired = s, s.paired = a, Ue.delete(n), Ui(t, e.onShare)) : Ui(t, e.onExit) : Sn(t.child, !1)), Ue !== null && pc(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        yc(t), t = t.sibling;
    else
      Ue !== null && pc(t);
  }
  function Up(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, n = zn(e, t.stateNode);
        e = Nn(e.default, e.update), t.flags &= -5, e !== "none" && Oi(
          t,
          n,
          e,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && Up(t);
      t = t.sibling;
    }
  }
  function gc(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, Sn(t.child, !1));
          }
          gc(t);
        }
        t = t.sibling;
      }
  }
  function Tu(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, Sn(t.child, !1), gc(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Tu(t), t = t.sibling;
    else gc(t);
  }
  function Bp(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? Sn(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && Bp(t), t = t.sibling;
  }
  function vc(t, e, n, a, s, u, f) {
    for (var p = !1; e !== null; ) {
      if (e.tag === 5) {
        var T = e.stateNode;
        if (u !== null && Me < u.length) {
          var O = u[Me], V = kc(T);
          (O.view || V.view) && (p = !0);
          var j;
          if (j = (t.flags & 4) === 0)
            if (V.clip) j = !0;
            else {
              j = O.rect;
              var C = V.rect;
              j = j.y !== C.y || j.x !== C.x || j.height !== C.height || j.width !== C.width;
            }
          j && (t.flags |= 4), V.abs ? V = !O.abs : (O = O.rect, V = V.rect, V = O.height !== V.height || O.width !== V.width), V && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && Vy(
          T,
          Me === 0 ? n : n + "_" + Me,
          s
        ), p && (t.flags & 4) !== 0 || (vn === null && (vn = []), vn.push(
          T,
          Me === 0 ? a : a + "_" + Me,
          e.memoizedProps
        )), Me++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && f ? t.flags |= e.flags & 32 : vc(
        t,
        e.child,
        n,
        a,
        s,
        u,
        f
      ) && (p = !0));
      e = e.sibling;
    }
    return p;
  }
  function Lp(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var n = t.memoizedProps, a = t.stateNode, s = zn(n, a), u = Nn(n.default, n.update), f;
        f = t.memoizedState, t.memoizedState = null, a = t;
        var p = t.child;
        Me = 0, s = vc(
          a,
          p,
          s,
          s,
          u,
          f,
          !1
        ), (t.flags & 4) !== 0 && s && Ui(t, n.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && Lp(t);
      t = t.sibling;
    }
  }
  var se = !1, _t = !1, Tn = !1, Sc = !1, Hp = typeof WeakSet == "function" ? WeakSet : Set, ue = null, En = !1, Hl = !1, Eu = !1, Tc = !1;
  function OT(t, e, n) {
    if (t = t.containerInfo, Qc = Qi, t = qd(t), sr(t)) {
      if ("selectionStart" in t)
        var a = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          a = (a = t.ownerDocument) && a.defaultView || window;
          var s = a.getSelection && a.getSelection();
          if (s && s.rangeCount !== 0) {
            a = s.anchorNode;
            var u = s.anchorOffset, f = s.focusNode;
            s = s.focusOffset;
            try {
              a.nodeType, f.nodeType;
            } catch {
              a = null;
              break t;
            }
            var p = 0, T = -1, O = -1, V = 0, j = 0, C = t, N = null;
            e: for (; ; ) {
              for (var F; C !== a || u !== 0 && C.nodeType !== 3 || (T = p + u), C !== f || s !== 0 && C.nodeType !== 3 || (O = p + s), C.nodeType === 3 && (p += C.nodeValue.length), (F = C.firstChild) !== null; )
                N = C, C = F;
              for (; ; ) {
                if (C === t) break e;
                if (N === a && ++V === u && (T = p), N === f && ++j === s && (O = p), (F = C.nextSibling) !== null) break;
                C = N, N = C.parentNode;
              }
              C = F;
            }
            a = T === -1 || O === -1 ? null : { start: T, end: O };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Kc = { focusedElem: t, selectionRange: a }, Qi = !1, n = (n & 335544064) === n, ue = e, e = n ? 9270 : 1024; ue !== null; ) {
      if (t = ue, n && (a = t.deletions, a !== null))
        for (u = 0; u < a.length; u++)
          n && yc(a[u]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        n && _p(t), bu(n);
      else {
        if (t.tag === 22) {
          if (a = t.alternate, t.memoizedState !== null) {
            a !== null && a.memoizedState === null && n && yc(a), bu(n);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            n && _p(t), bu(n);
            continue;
          }
        }
        a = t.child, (t.subtreeFlags & e) !== 0 && a !== null ? (a.return = t, ue = a) : (n && Up(t), bu(n));
      }
    }
    Ue = null;
  }
  function bu(t) {
    for (; ue !== null; ) {
      var e = ue, n = t, a = e.alternate, s = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((s & 1024) !== 0 && a !== null) {
            n = void 0, s = a.memoizedProps, a = a.memoizedState;
            var u = e.stateNode;
            try {
              var f = qa(
                e.type,
                s
              );
              n = u.getSnapshotBeforeUpdate(
                f,
                a
              ), u.__reactInternalSnapshotBeforeUpdate = n;
            } catch (p) {
              wt(e, e.return, p);
            }
          }
          break;
        case 3:
          if ((s & 1024) !== 0) {
            if (a = e.stateNode.containerInfo, n = a.nodeType, n === 9)
              $c(a);
            else if (n === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  $c(a);
                  break;
                default:
                  a.textContent = "";
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
        case 30:
          n && a !== null && (n = zn(
            a.memoizedProps,
            a.stateNode
          ), s = e.memoizedProps, s = Nn(s.default, s.update), s !== "none" && Oi(
            a,
            n,
            s,
            a.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((s & 1024) !== 0) throw Error(r(163));
      }
      if (a = e.sibling, a !== null) {
        a.return = e.return, ue = a;
        break;
      }
      ue = e.return;
    }
  }
  function jp(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        bn(t, n), a & 4 && Bl(5, n);
        break;
      case 1:
        if (bn(t, n), a & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (f) {
              wt(n, n.return, f);
            }
          else {
            var s = qa(
              n.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                s,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              wt(
                n,
                n.return,
                f
              );
            }
          }
        a & 64 && Op(n), a & 512 && gn(n, n.return);
        break;
      case 3:
        if (bn(t, n), a & 64 && (t = n.updateQueue, t !== null)) {
          if (e = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            ym(t, e);
          } catch (f) {
            wt(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Np(n);
      case 26:
      case 5:
        bn(t, n), e === null && a & 4 && cc(n), a & 512 && gn(n, n.return);
        break;
      case 12:
        bn(t, n);
        break;
      case 31:
        bn(t, n), a & 4 && Xp(t, n);
        break;
      case 13:
        bn(t, n), a & 4 && Zp(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = jT.bind(
          null,
          n
        ), TE(t, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || se, !a) {
          var u = e !== null && e.memoizedState !== null || _t;
          e = se, s = _t, se = a, (_t = u) && !s ? (a = 2, (n.subtreeFlags & 8772) !== 0 && (a |= 1), en(
            t,
            n,
            a
          )) : bn(t, n), se = e, _t = s;
        }
        break;
      case 30:
        bn(t, n), a & 512 && gn(n, n.return);
        break;
      case 7:
        a & 512 && gn(n, n.return);
      default:
        bn(t, n);
    }
  }
  function Ec(t, e) {
    for (t = t.child; t !== null; )
      Yp(t, e), t = t.sibling;
  }
  function Yp(t, e) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var n = t.stateNode;
          if (e) {
            var a = n.style;
            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none";
          } else {
            var s = t.stateNode, u = t.memoizedProps.style, f = u != null && u.hasOwnProperty("display") ? u.display : null;
            s.style.display = f == null || typeof f == "boolean" ? "" : ("" + f).trim();
          }
        } catch (T) {
          wt(t, t.return, T);
        }
        bc(t, e);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = e ? "" : t.memoizedProps, zt = !0;
        } catch (T) {
          wt(t, t.return, T);
        }
        break;
      case 18:
        try {
          var p = t.stateNode;
          e ? _y(p, !0) : _y(t.stateNode, !1);
        } catch (T) {
          wt(t, t.return, T);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && Ec(t, e);
        break;
      default:
        Ec(t, e);
    }
  }
  function bc(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var n = t, a = e;
          switch (n.tag) {
            case 4:
              Yp(n, a);
              break t;
            case 22:
              n.memoizedState === null && bc(n, a);
              break t;
            default:
              bc(n, a);
          }
        }
        t = t.sibling;
      }
  }
  function Gp(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Gp(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Os(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Zt = null, Ce = !1;
  function $e(t, e, n) {
    for (n = n.child; n !== null; )
      qp(t, e, n), n = n.sibling;
  }
  function qp(t, e, n) {
    if (ze && typeof ze.onCommitFiberUnmount == "function")
      try {
        ze.onCommitFiberUnmount(ul, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        _t || de(n, e), $e(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !_t && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        _t || de(n, e), Ll(n);
        var a = Zt, s = Ce;
        ma(n.type) && (Zt = n.stateNode, Ce = !1), $e(
          t,
          e,
          n
        ), Ky(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), Zt = a, Ce = s;
        break;
      case 5:
        _t || de(n, e), Ll(n);
      case 6:
        if (n.tag === 6 && Ll(n), a = Zt, s = Ce, Zt = null, $e(
          t,
          e,
          n
        ), Zt = a, Ce = s, Zt !== null)
          if (Ce)
            try {
              (Zt.nodeType === 9 ? Zt.body : Zt.nodeName === "HTML" ? Zt.ownerDocument.body : Zt).removeChild(n.stateNode), zt = !0;
            } catch (u) {
              wt(
                n,
                e,
                u
              );
            }
          else
            try {
              Zt.removeChild(n.stateNode), zt = !0;
            } catch (u) {
              wt(
                n,
                e,
                u
              );
            }
        break;
      case 18:
        Zt !== null && (Ce ? (t = Zt, Ny(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), Ki(t)) : Ny(Zt, n.stateNode));
        break;
      case 4:
        a = Zt, s = Ce, Zt = n.stateNode.containerInfo, Ce = !0, $e(
          t,
          e,
          n
        ), Zt = a, Ce = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ua(2, n, e), _t || ua(4, n, e), $e(
          t,
          e,
          n
        );
        break;
      case 1:
        _t || (de(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && Rp(
          n,
          e,
          a
        )), $e(
          t,
          e,
          n
        );
        break;
      case 21:
        $e(
          t,
          e,
          n
        );
        break;
      case 22:
        _t = (a = _t) || n.memoizedState !== null, $e(
          t,
          e,
          n
        ), _t = a;
        break;
      case 30:
        de(n, e), $e(
          t,
          e,
          n
        );
        break;
      case 7:
        _t || de(n, e), $e(
          t,
          e,
          n
        );
        break;
      default:
        $e(
          t,
          e,
          n
        );
    }
  }
  function Xp(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Ki(t);
      } catch (n) {
        wt(e, e.return, n);
      }
    }
  }
  function Zp(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Ki(t);
      } catch (n) {
        wt(e, e.return, n);
      }
  }
  function RT(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Hp()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Hp()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Au(t, e) {
    var n = RT(t);
    e.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var s = YT.bind(null, t, a);
        a.then(s, s);
      }
    });
  }
  function Te(t, e, n) {
    var a = e.deletions;
    if (a !== null)
      for (var s = 0; s < a.length; s++) {
        var u = a[s], f = t, p = e, T = p;
        t: for (; T !== null; ) {
          switch (T.tag) {
            case 27:
              if (ma(T.type)) {
                Zt = T.stateNode, Ce = !1;
                break t;
              }
              break;
            case 5:
              Zt = T.stateNode, Ce = !1;
              break t;
            case 3:
            case 4:
              Zt = T.stateNode.containerInfo, Ce = !0;
              break t;
          }
          T = T.return;
        }
        if (Zt === null) throw Error(r(160));
        qp(f, p, u), Zt = null, Ce = !1, f = u.alternate, f !== null && (f.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Qp(e, t, n), e = e.sibling;
  }
  var tn = null;
  function Qp(t, e, n) {
    var a = t.alternate, s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (s & 4 && (a = t.updateQueue, a = a !== null ? a.events : null, a !== null))
          for (var u = 0; u < a.length; u++) {
            var f = a[u];
            f.ref.impl = f.nextImpl;
          }
        Te(e, t, n), Ee(t), s & 4 && (ua(3, t, t.return), Bl(3, t), ua(5, t, t.return));
        break;
      case 1:
        Te(e, t, n), Ee(t), s & 512 && (_t || a === null || de(a, a.return)), s & 64 && se && (t = t.updateQueue, t !== null && (e = t.callbacks, e !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? e : n.concat(e))));
        break;
      case 26:
        if (u = tn, Te(e, t, n), Ee(t), s & 512 && (_t || a === null || de(a, a.return)), s & 4)
          if (s = a !== null ? a.memoizedState : null, n = t.memoizedState, a === null)
            if (n === null)
              if (t.stateNode === null)
                if (se)
                  t.stateNode = Ry(
                    t.type,
                    t.memoizedProps,
                    e.containerInfo,
                    t
                  );
                else {
                  t: {
                    e = t.type, n = t.memoizedProps, s = u.ownerDocument || u;
                    e: switch (e) {
                      case "title":
                        a = s.getElementsByTagName("title")[0], (!a || a[cl] || a[re] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = s.createElement(e), s.head.insertBefore(
                          a,
                          s.querySelector("head > title")
                        )), me(a, e, n), a[re] = t, ie(a), e = a;
                        break t;
                      case "link":
                        if (u = Wy(
                          "link",
                          "href",
                          s
                        ).get(e + (n.href || ""))) {
                          for (f = 0; f < u.length; f++)
                            if (a = u[f], a.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && a.getAttribute("rel") === (n.rel == null ? null : n.rel) && a.getAttribute("title") === (n.title == null ? null : n.title) && a.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              u.splice(f, 1);
                              break e;
                            }
                        }
                        a = s.createElement(e), me(a, e, n), s.head.appendChild(a);
                        break;
                      case "meta":
                        if (u = Wy(
                          "meta",
                          "content",
                          s
                        ).get(e + (n.content || ""))) {
                          for (f = 0; f < u.length; f++)
                            if (a = u[f], a.getAttribute("content") === (n.content == null ? null : "" + n.content) && a.getAttribute("name") === (n.name == null ? null : n.name) && a.getAttribute("property") === (n.property == null ? null : n.property) && a.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && a.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                              u.splice(f, 1);
                              break e;
                            }
                        }
                        a = s.createElement(e), me(a, e, n), s.head.appendChild(a);
                        break;
                      default:
                        throw Error(r(468, e));
                    }
                    a[re] = t, ie(a), e = a;
                  }
                  t.stateNode = e;
                }
              else
                se || uf(u, t.type, t.stateNode);
            else
              t.stateNode = Iy(
                u,
                n,
                t.memoizedProps
              );
          else
            s !== n ? (s === null ? (e = a.stateNode, e === null || _t || e.parentNode.removeChild(e)) : s.count--, n === null ? se || uf(u, t.type, t.stateNode) : Iy(u, n, t.memoizedProps)) : n === null && t.stateNode !== null && fc(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        Te(e, t, n), Ee(t), s & 512 && (_t || a === null || de(a, a.return)), a !== null && s & 4 && fc(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (u = Tn, Tn = !1, Te(e, t, n), Tn = u, Ee(t), s & 512 && (_t || a === null || de(a, a.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            ri(e, ""), zt = !0;
          } catch (V) {
            wt(t, t.return, V);
          }
        }
        s & 4 && t.stateNode != null && (e = t.memoizedProps, fc(
          t,
          e,
          a !== null ? a.memoizedProps : e
        )), s & 1024 && (Sc = !0);
        break;
      case 6:
        if (Te(e, t, n), Ee(t), s & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          e = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = e, zt = !0;
          } catch (V) {
            wt(t, t.return, V);
          }
        }
        break;
      case 3:
        if (zt = !1, Hu = null, u = tn, tn = Jl(e.containerInfo), Te(e, t, n), tn = u, Ee(t), s & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Ki(e.containerInfo);
          } catch (V) {
            wt(t, t.return, V);
          }
        Sc && (Sc = !1, Kp(t)), zt = !1;
        break;
      case 4:
        s = Tn, Tn = se, a = hd(), u = tn, tn = Jl(
          t.stateNode.containerInfo
        ), Te(e, t, n), Ee(t), tn = u, zt && Hl && (Eu = !0), zt = a, Tn = s;
        break;
      case 12:
        Te(e, t, n), Ee(t);
        break;
      case 31:
        Te(e, t, n), Ee(t), s & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Au(t, e)));
        break;
      case 13:
        Te(e, t, n), Ee(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Du = xe()), s & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Au(t, e)));
        break;
      case 22:
        u = t.memoizedState !== null, f = a !== null && a.memoizedState !== null;
        var p = se, T = _t, O = Tn;
        se = p || u, Tn = O || u, _t = T || f, Te(e, t, n), _t = T, Tn = O, se = p, Ee(t), s & 8192 && (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, !u || a === null || f || se || _t || (e = f || _t, n = se, a = _t, se = u || se, _t = e, oa(t, 2), se = n, _t = a), !u && Tn || Ec(t, u)), s & 4 && (e = t.updateQueue, e !== null && (n = e.retryQueue, n !== null && (e.retryQueue = null, Au(t, n))));
        break;
      case 19:
        Te(e, t, n), Ee(t), s & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Au(t, e)));
        break;
      case 30:
        s & 512 && (_t || a === null || de(a, a.return)), s = hd(), u = Hl, f = (n & 335544064) === n, p = t.memoizedProps, Hl = f && Nn(
          p.default,
          p.update
        ) !== "none", Te(e, t, n), Ee(t), f && a !== null && zt && (t.flags |= 4), Hl = u, zt = s;
        break;
      case 21:
        break;
      case 7:
        s & 512 && (_t || a === null || de(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = t);
      default:
        Te(e, t, n), Ee(t);
    }
  }
  function Ee(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (zp(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var s = t.return; s !== null; ) {
          if (rc(s)) {
            var u = s.stateNode;
            a === null ? a = [u] : a.push(u);
          }
          if (oc(s)) break;
          s = s.return;
        }
        var f = a;
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var p = n.stateNode, T = hc(t);
            gu(
              t,
              T,
              p,
              f
            );
            break;
          case 5:
            var O = n.stateNode;
            n.flags & 32 && (ri(O, ""), n.flags &= -33);
            var V = hc(t);
            gu(
              t,
              V,
              O,
              f
            );
            break;
          case 3:
          case 4:
            var j = n.stateNode.containerInfo, C = hc(t);
            dc(
              t,
              C,
              j,
              f
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (N) {
        wt(t, t.return, N);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Kp(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Kp(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, Qi = !0, e.reset(), Qi = !1), t = t.sibling;
      }
  }
  function Ri(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null; )
        Jp(e, t), e = e.sibling;
    else Lp(e);
  }
  function Jp(t, e) {
    var n = t.alternate;
    if (n === null) mc(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (Tc = En = !1, Vp(), Ri(e, t), !En && !Eu) {
            if (t = vn, t !== null)
              for (var a = 0; a < t.length; a += 3) {
                n = t[a];
                var s = t[a + 1];
                wy(n, t[a + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + s + ")"
                  }
                );
              }
            t = e.containerInfo, t = t.nodeType === 9 ? t.documentElement : t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "" && (t.style.viewTransitionName = "none", t.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), t.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), Tc = !0;
          }
          vn = null;
          break;
        case 5:
          Ri(e, t);
          break;
        case 4:
          a = En, En = !1, Ri(e, t), En && (Eu = !0), En = a;
          break;
        case 22:
          t.memoizedState === null && (n.memoizedState !== null ? mc(t, !1) : Ri(e, t));
          break;
        case 30:
          a = En, s = Vp(), En = !1, Ri(e, t), En && (t.flags |= 4);
          var u = t.memoizedProps, f = t.stateNode;
          e = zn(u, f), f = zn(n.memoizedProps, f);
          var p = Nn(u.default, u.update);
          p === "none" ? e = !1 : (u = n.memoizedState, n.memoizedState = null, n = t.child, Me = 0, e = vc(
            t,
            n,
            e,
            f,
            p,
            u,
            !0
          ), Me !== (u === null ? 0 : u.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && e ? (Ui(
            t,
            t.memoizedProps.onUpdate
          ), vn = s) : s !== null && (s.push.apply(s, vn), vn = s), En = (t.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          Ri(e, t);
      }
  }
  function bn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        jp(t, e.alternate, e), e = e.sibling;
  }
  function oa(t, e) {
    for (t = t.child; t !== null; ) {
      var n = t, a = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ua(4, n, n.return), oa(
            n,
            a
          );
          break;
        case 1:
          de(n, n.return);
          var s = n.stateNode;
          typeof s.componentWillUnmount == "function" && Rp(
            n,
            n.return,
            s
          ), oa(
            n,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Ky(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          de(n, n.return), n.tag !== 5 && n.tag !== 27 || Ll(n), oa(
            n,
            a
          );
          break;
        case 6:
          Ll(n);
          break;
        case 26:
          de(n, n.return), s = n.stateNode, n.memoizedState !== null || s === null || _t || s.parentNode.removeChild(s), oa(
            n,
            a
          );
          break;
        case 22:
          n.memoizedState === null && oa(
            n,
            a
          );
          break;
        case 30:
          de(n, n.return), oa(
            n,
            a
          );
          break;
        case 7:
          de(n, n.return);
        default:
          oa(
            n,
            a
          );
      }
      t = t.sibling;
    }
  }
  function en(t, e, n) {
    for (n = (e.subtreeFlags & 8772) !== 0 ? n : n & -2, e = e.child; e !== null; ) {
      var a = e.alternate, s = t, u = e, f = u.flags, p = (n & 1) !== 0;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          en(
            s,
            u,
            n
          ), Bl(4, u);
          break;
        case 1:
          if (en(
            s,
            u,
            n
          ), a = u, s = a.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (V) {
              wt(a, a.return, V);
            }
          if (a = u, s = a.updateQueue, s !== null) {
            var T = a.stateNode;
            try {
              var O = s.shared.hiddenCallbacks;
              if (O !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < O.length; s++)
                  pm(O[s], T);
            } catch (V) {
              wt(a, a.return, V);
            }
          }
          p && f & 64 && Op(u), gn(u, u.return);
          break;
        case 27:
          (n & 2) !== 0 && Np(u);
        case 5:
          u.tag !== 5 && u.tag !== 27 || xp(u), en(
            s,
            u,
            n
          ), p && a === null && f & 4 && cc(u), gn(u, u.return);
          break;
        case 6:
          xp(u);
          break;
        case 26:
          T = u.stateNode, u.memoizedState !== null || T === null || se || uf(
            Jl(T.ownerDocument),
            u.type,
            T
          ), en(
            s,
            u,
            n
          ), p && a === null && f & 4 && cc(u), gn(u, u.return);
          break;
        case 12:
          en(
            s,
            u,
            n
          );
          break;
        case 31:
          en(
            s,
            u,
            n
          ), p && f & 4 && Xp(s, u);
          break;
        case 13:
          en(
            s,
            u,
            n
          ), p && f & 4 && Zp(s, u);
          break;
        case 22:
          u.memoizedState === null && en(
            s,
            u,
            n
          ), gn(u, u.return);
          break;
        case 30:
          en(
            s,
            u,
            n
          ), gn(u, u.return);
          break;
        case 7:
          gn(u, u.return);
        default:
          en(
            s,
            u,
            n
          );
      }
      e = e.sibling;
    }
  }
  function Ac(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Al(n));
  }
  function Mc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Al(t));
  }
  function Je(t, e, n, a) {
    var s = (n & 335544064) === n;
    if (e.subtreeFlags & (s ? 10262 : 10256))
      for (e = e.child; e !== null; )
        Fp(
          t,
          e,
          n,
          a
        ), e = e.sibling;
    else s && Bp(e);
  }
  function Fp(t, e, n, a) {
    var s = (n & 335544064) === n;
    s && e.alternate === null && e.return !== null && e.return.alternate !== null && Tu(e);
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Je(
          t,
          e,
          n,
          a
        ), u & 2048 && Bl(9, e);
        break;
      case 1:
        Je(
          t,
          e,
          n,
          a
        );
        break;
      case 3:
        Je(
          t,
          e,
          n,
          a
        ), s && Tc && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), u & 2048 && (u = null, e.alternate !== null && (u = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== u && (e.refCount++, u != null && Al(u)));
        break;
      case 12:
        if (u & 2048) {
          Je(
            t,
            e,
            n,
            a
          ), u = e.stateNode;
          try {
            var f = e.memoizedProps, p = f.id, T = f.onPostCommit;
            typeof T == "function" && T(
              p,
              e.alternate === null ? "mount" : "update",
              u.passiveEffectDuration,
              -0
            );
          } catch (O) {
            wt(e, e.return, O);
          }
        } else
          Je(
            t,
            e,
            n,
            a
          );
        break;
      case 31:
        Je(
          t,
          e,
          n,
          a
        );
        break;
      case 13:
        Je(
          t,
          e,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        f = e.stateNode, p = e.alternate, e.memoizedState !== null ? (s && p !== null && p.memoizedState === null && Tu(p), f._visibility & 2 ? Je(
          t,
          e,
          n,
          a
        ) : jl(
          t,
          e
        )) : (s && p !== null && p.memoizedState !== null && Tu(e), f._visibility & 2 ? Je(
          t,
          e,
          n,
          a
        ) : (f._visibility |= 2, xi(
          t,
          e,
          n,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        ))), u & 2048 && Ac(p, e);
        break;
      case 24:
        Je(
          t,
          e,
          n,
          a
        ), u & 2048 && Mc(e.alternate, e);
        break;
      case 30:
        s && (u = e.alternate, u !== null && (Sn(u.child, !0), Sn(e.child, !0))), Je(
          t,
          e,
          n,
          a
        );
        break;
      default:
        Je(
          t,
          e,
          n,
          a
        );
    }
  }
  function xi(t, e, n, a, s) {
    for (s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, f = e, p = n, T = a, O = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          xi(
            u,
            f,
            p,
            T,
            s
          ), Bl(8, f);
          break;
        case 23:
          break;
        case 22:
          var V = f.stateNode;
          f.memoizedState !== null ? V._visibility & 2 ? xi(
            u,
            f,
            p,
            T,
            s
          ) : jl(
            u,
            f
          ) : (V._visibility |= 2, xi(
            u,
            f,
            p,
            T,
            s
          )), s && O & 2048 && Ac(
            f.alternate,
            f
          );
          break;
        case 24:
          xi(
            u,
            f,
            p,
            T,
            s
          ), s && O & 2048 && Mc(f.alternate, f);
          break;
        default:
          xi(
            u,
            f,
            p,
            T,
            s
          );
      }
      e = e.sibling;
    }
  }
  function jl(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, a = e, s = a.flags;
        switch (a.tag) {
          case 22:
            jl(n, a), s & 2048 && Ac(
              a.alternate,
              a
            );
            break;
          case 24:
            jl(n, a), s & 2048 && Mc(a.alternate, a);
            break;
          default:
            jl(n, a);
        }
        e = e.sibling;
      }
  }
  var Xa = 8192;
  function Za(t, e, n) {
    if (t.subtreeFlags & Xa)
      for (t = t.child; t !== null; )
        Pp(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function Pp(t, e, n) {
    switch (t.tag) {
      case 26:
        Za(
          t,
          e,
          n
        ), t.flags & Xa && (t.memoizedState !== null ? wE(
          n,
          tn,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (e & 335544128) === e && n0(n, t)));
        break;
      case 5:
        Za(
          t,
          e,
          n
        ), t.flags & Xa && (t = t.stateNode, (e & 335544128) === e && n0(n, t));
        break;
      case 3:
      case 4:
        var a = tn;
        tn = Jl(t.stateNode.containerInfo), Za(
          t,
          e,
          n
        ), tn = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = Xa, Xa = 16777216, Za(
          t,
          e,
          n
        ), Xa = a) : Za(
          t,
          e,
          n
        ));
        break;
      case 30:
        if ((t.flags & Xa) !== 0 && (a = t.memoizedProps.name, a != null && a !== "auto")) {
          var s = t.stateNode;
          s.paired = null, Ue === null && (Ue = /* @__PURE__ */ new Map()), Ue.set(a, s);
        }
        Za(
          t,
          e,
          n
        );
        break;
      default:
        Za(
          t,
          e,
          n
        );
    }
  }
  function kp(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Yl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ue = a, Wp(
            a,
            t
          );
        }
      kp(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Ip(t), t = t.sibling;
  }
  function Ip(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Yl(t), t.flags & 2048 && ua(9, t, t.return);
        break;
      case 3:
        Yl(t);
        break;
      case 12:
        Yl(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Mu(t)) : Yl(t);
        break;
      default:
        Yl(t);
    }
  }
  function Mu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ue = a, Wp(
            a,
            t
          );
        }
      kp(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          ua(8, e, e.return), Mu(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, Mu(e));
          break;
        default:
          Mu(e);
      }
      t = t.sibling;
    }
  }
  function Wp(t, e) {
    for (; ue !== null; ) {
      var n = ue;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ua(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Al(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, ue = a;
      else
        t: for (n = t; ue !== null; ) {
          a = ue;
          var s = a.sibling, u = a.return;
          if (Gp(a), a === n) {
            ue = null;
            break t;
          }
          if (s !== null) {
            s.return = u, ue = s;
            break t;
          }
          ue = u;
        }
    }
  }
  var xT = {
    getCacheForType: function(t) {
      var e = ce(kt), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return ce(kt).controller.signal;
    }
  }, zT = typeof WeakMap == "function" ? WeakMap : Map, Nt = 0, Lt = null, At = null, Ct = 0, Vt = 0, Be = null, ra = !1, zi = !1, Cc = !1, Yn = 0, Ft = 0, ca = 0, Qa = 0, Cu = 0, Le = 0, Ni = 0, Gl = null, De = null, Dc = !1, Du = 0, $p = 0, Ou = 1 / 0, Ru = null, fa = null, Kt = 0, nn = null, Ka = null, An = 0, Oc = 0, Rc = null, ty = null, _i = null, Vi = null, wi = null, ql = 0, xu = null;
  function He() {
    return (Nt & 2) !== 0 && Ct !== 0 ? Ct & -Ct : it.T !== null ? Hc() : ad();
  }
  function ey() {
    if (Le === 0)
      if ((Ct & 536870912) === 0 || Et) {
        var t = As;
        As <<= 1, (As & 3932160) === 0 && (As = 262144), Le = t;
      } else Le = 536870912;
    return t = fe.current, t !== null && (t.flags |= 32), Le;
  }
  function Ui(t, e) {
    if (e != null) {
      var n = t.stateNode, a = n.ref;
      a === null && (a = n.ref = Uy(
        zn(t.memoizedProps, n)
      )), Vi === null && (Vi = []), Vi.push(e.bind(null, a));
    }
  }
  function Oe(t, e, n) {
    (t === Lt && (Vt === 2 || Vt === 9) || t.cancelPendingCommit !== null) && (Bi(t, 0), ha(
      t,
      Ct,
      Le,
      !1
    )), rl(t, n), ((Nt & 2) === 0 || t !== Lt) && (t === Lt && ((Nt & 2) === 0 && (Qa |= n), Ft === 4 && ha(
      t,
      Ct,
      Le,
      !1
    )), Mn(t));
  }
  function ny(t, e, n) {
    if ((Nt & 6) !== 0) throw Error(r(327));
    var a = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || ol(t, e), s = a ? VT(t, e) : zc(t, e, !0), u = a;
    do {
      if (s === 0) {
        zi && !a && ha(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, u && !NT(n)) {
          s = zc(t, e, !1), u = !1;
          continue;
        }
        if (s === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u)
            var f = 0;
          else
            f = t.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            e = f;
            t: {
              var p = t;
              s = Gl;
              var T = p.current.memoizedState.isDehydrated;
              if (T && (Bi(p, f).flags |= 256), f = zc(
                p,
                f,
                !1
              ), f !== 2 && f !== 6) {
                if (Cc && !T) {
                  p.errorRecoveryDisabledLanes |= u, Qa |= u, s = 4;
                  break t;
                }
                u = De, De = s, u !== null && (De === null ? De = u : De.push.apply(
                  De,
                  u
                ));
              }
              s = f;
            }
            if (u = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Bi(t, 0), ha(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, u = s, u) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e && (e & 62914560) !== e)
                break;
            case 6:
              ha(
                a,
                e,
                Le,
                !ra
              );
              break t;
            case 2:
              De = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && (s = Du + 300 - xe(), 10 < s)) {
            if (ha(
              a,
              e,
              Le,
              !ra
            ), Cs(a, 0, !0) !== 0) break t;
            An = e, a.timeoutHandle = Pc(
              ay.bind(
                null,
                a,
                n,
                De,
                Ru,
                Dc,
                e,
                Le,
                Qa,
                Ni,
                ra,
                u,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break t;
          }
          ay(
            a,
            n,
            De,
            Ru,
            Dc,
            e,
            Le,
            Qa,
            Ni,
            ra,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Mn(t);
  }
  function ay(t, e, n, a, s, u, f, p, T, O, V, j, C, N) {
    t.timeoutHandle = -1;
    var F = e.subtreeFlags, lt = (u & 335544064) === u;
    if (j = null, (lt || F & 8192 || (F & 16785408) === 16785408) && (j = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: mn
    }, Ue = null, Pp(
      e,
      u,
      j
    ), lt && (F = j, lt = t.containerInfo, lt = (lt.nodeType === 9 ? lt : lt.ownerDocument).__reactViewTransition, lt != null && (F.count++, F.waitingForViewTransition = !0, F = kl.bind(F), lt.finished.then(F, F))), F = (u & 62914560) === u ? Du - xe() : (u & 4194048) === u ? $p - xe() : 0, F = UE(
      j,
      F
    ), F !== null)) {
      An = u, t.cancelPendingCommit = F(
        fy.bind(
          null,
          t,
          e,
          u,
          n,
          a,
          s,
          f,
          p,
          T,
          O,
          V,
          j,
          null,
          C,
          N
        )
      ), ha(t, u, f, !O);
      return;
    }
    fy(
      t,
      e,
      u,
      n,
      a,
      s,
      f,
      p,
      T,
      O,
      V,
      j
    );
  }
  function NT(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var s = n[a], u = s.getSnapshot;
          s = s.value;
          try {
            if (!Ve(u(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = e.child, e.subtreeFlags & 16384 && n !== null)
        n.return = e, e = n;
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
  function ha(t, e, n, a) {
    e = Wh(t, e), e &= ~Cu, e &= ~Qa, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var s = e; 0 < s; ) {
      var u = 31 - Ne(s), f = 1 << u;
      a[u] = -1, s &= ~f;
    }
    n !== 0 && td(t, n, e);
  }
  function zu() {
    return (Nt & 6) === 0 ? (Xl(0), !1) : !0;
  }
  function xc() {
    if (At !== null) {
      if (Vt === 0)
        var t = At.return;
      else
        t = At, wn = Va = null, Lr(t), bi = null, Dl = 0, t = At;
      for (; t !== null; )
        Dp(t.alternate, t), t = t.return;
      At = null;
    }
  }
  function Bi(t, e) {
    var n = t.timeoutHandle;
    return n !== -1 && (t.timeoutHandle = -1, eE(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), An = 0, xc(), Lt = t, At = n = _n(t.current, null), Ct = e, Vt = 0, Be = null, ra = !1, zi = ol(t, e), Cc = !1, Ni = Le = Cu = Qa = ca = Ft = 0, De = Gl = null, Dc = !1, Yn = Wh(t, e), Hs(), n;
  }
  function iy(t, e) {
    gt = null, it.H = ru, e === Ei || e === Ps ? (e = fm(), Vt = 3) : e === Mr ? (e = fm(), Vt = 4) : Vt = e === Wr ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Be = e, At === null && (Ft = 1, cu(
      t,
      Xe(e, t.current)
    ));
  }
  function ly() {
    var t = fe.current;
    return t === null ? !0 : (Ct & 4194048) === Ct ? ge === null : (Ct & 62914560) === Ct || (Ct & 536870912) !== 0 ? t === ge : !1;
  }
  function sy() {
    var t = it.H;
    return it.H = ru, t === null ? ru : t;
  }
  function uy() {
    var t = it.A;
    return it.A = xT, t;
  }
  function Nu() {
    Ft = 4, ra || (Ct & 4194048) !== Ct && fe.current !== null || (zi = !0), (ca & 134217727) === 0 && (Qa & 134217727) === 0 || Lt === null || ha(
      Lt,
      Ct,
      Le,
      !1
    );
  }
  function zc(t, e, n) {
    var a = Nt;
    Nt |= 2;
    var s = sy(), u = uy();
    (Lt !== t || Ct !== e) && (Ru = null, Bi(t, e)), e = !1;
    var f = Ft;
    t: do
      try {
        if (Vt !== 0 && At !== null) {
          var p = At, T = Be;
          switch (Vt) {
            case 8:
              xc(), f = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              fe.current === null && (e = !0);
              var O = Vt;
              if (Vt = 0, Be = null, Li(t, p, T, O), n && zi) {
                f = 0;
                break t;
              }
              break;
            default:
              O = Vt, Vt = 0, Be = null, Li(t, p, T, O);
          }
        }
        _T(), f = Ft;
        break;
      } catch (V) {
        iy(t, V);
      }
    while (!0);
    return e && t.shellSuspendCounter++, wn = Va = null, Nt = a, it.H = s, it.A = u, At === null && (Lt = null, Ct = 0, Hs()), f;
  }
  function _T() {
    for (; At !== null; ) oy(At);
  }
  function VT(t, e) {
    var n = Nt;
    Nt |= 2;
    var a = sy(), s = uy();
    Lt !== t || Ct !== e ? (Ru = null, Ou = xe() + 500, Bi(t, e)) : zi = ol(
      t,
      e
    );
    t: do
      try {
        if (Vt !== 0 && At !== null) {
          e = At;
          var u = Be;
          e: switch (Vt) {
            case 1:
              Vt = 0, Be = null, Li(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (rm(u)) {
                Vt = 0, Be = null, ry(e);
                break;
              }
              e = function() {
                Vt !== 2 && Vt !== 9 || Lt !== t || (Vt = 7), Mn(t);
              }, u.then(e, e);
              break t;
            case 3:
              Vt = 7;
              break t;
            case 4:
              Vt = 5;
              break t;
            case 7:
              rm(u) ? (Vt = 0, Be = null, ry(e)) : (Vt = 0, Be = null, Li(t, e, u, 7));
              break;
            case 5:
              var f = null;
              switch (At.tag) {
                case 26:
                  f = At.memoizedState;
                case 5:
                case 27:
                  var p = At;
                  if (f ? t0(f) : p.stateNode.complete) {
                    Vt = 0, Be = null;
                    var T = p.sibling;
                    if (T !== null) At = T;
                    else {
                      var O = p.return;
                      O !== null ? (At = O, _u(O)) : At = null;
                    }
                    break e;
                  }
              }
              Vt = 0, Be = null, Li(t, e, u, 5);
              break;
            case 6:
              Vt = 0, Be = null, Li(t, e, u, 6);
              break;
            case 8:
              xc(), Ft = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        wT();
        break;
      } catch (V) {
        iy(t, V);
      }
    while (!0);
    return wn = Va = null, it.H = a, it.A = s, Nt = n, At !== null ? 0 : (Lt = null, Ct = 0, Hs(), Ft);
  }
  function wT() {
    for (; At !== null && !I1(); )
      oy(At);
  }
  function oy(t) {
    var e = Mp(t.alternate, t, Yn);
    t.memoizedProps = t.pendingProps, e === null ? _u(t) : At = e;
  }
  function ry(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = gp(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          Ct
        );
        break;
      case 11:
        e = gp(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          Ct
        );
        break;
      case 5:
        Lr(e);
        var a = e;
        a === le && (Et ? (Zs(a), a.tag === 5 && a.stateNode != null && (Gt = a.stateNode)) : (Zs(a), Et = !0));
      default:
        Dp(n, e), e = At = Wd(e, Yn), e = Mp(n, e, Yn);
    }
    t.memoizedProps = t.pendingProps, e === null ? _u(t) : At = e;
  }
  function Li(t, e, n, a) {
    wn = Va = null, Lr(e), bi = null, Dl = 0;
    var s = e.return;
    try {
      if (ET(
        t,
        s,
        e,
        n,
        Ct
      )) {
        Ft = 1, cu(
          t,
          Xe(n, t.current)
        ), At = null;
        return;
      }
    } catch (u) {
      if (s !== null) throw At = s, u;
      Ft = 1, cu(
        t,
        Xe(n, t.current)
      ), At = null;
      return;
    }
    e.flags & 32768 ? (Et || a === 1 ? t = !0 : zi || (Ct & 536870912) !== 0 ? t = !1 : (ra = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = fe.current, a !== null && a.tag === 13 && (a.flags |= 16384))), cy(e, t)) : _u(e);
  }
  function _u(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        cy(
          e,
          ra
        );
        return;
      }
      t = e.return;
      var n = CT(
        e.alternate,
        e,
        Yn
      );
      if (n !== null) {
        At = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        At = e;
        return;
      }
      At = e = t;
    } while (e !== null);
    Ft === 0 && (Ft = 5);
  }
  function cy(t, e) {
    do {
      var n = DT(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, At = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        At = t;
        return;
      }
      At = t = n;
    } while (t !== null);
    Ft = 6, At = null;
  }
  function fy(t, e, n, a, s, u, f, p, T, O, V, j) {
    t.cancelPendingCommit = null;
    do
      Vu();
    while (Kt !== 0);
    if ((Nt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      t === Lt && (At = Lt = null, Ct = 0), Ka = e, nn = t, An = n, Rc = s, ty = a, UT(
        t,
        e,
        n,
        f,
        p,
        T,
        j
      );
    }
  }
  function UT(t, e, n, a, s, u, f) {
    var p = e.lanes | e.childLanes;
    if (Oc = p, p |= fr, uS(
      t,
      n,
      p,
      a,
      s,
      u
    ), Vi = null, (n & 335544064) === n ? (wi = rT(t), a = 10262) : (wi = null, a = 10256), (e.subtreeFlags & a) !== 0 || (e.flags & a) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, GT(Es, function() {
      return wc(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), vu = !1, a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
      a = it.T, it.T = null, s = ft.p, ft.p = 2, u = Nt, Nt |= 4;
      try {
        OT(t, e, n);
      } finally {
        Nt = u, ft.p = s, it.T = a;
      }
    }
    Kt = 1, vu ? _i = uE(
      f,
      t.containerInfo,
      wi,
      Nc,
      _c,
      LT,
      Vc,
      wc,
      BT
    ) : (Nc(), _c(), Vc());
  }
  function BT(t) {
    if (Kt !== 0) {
      var e = nn.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function LT() {
    Kt === 3 && (Kt = 0, Jp(Ka, nn), Kt = 4);
  }
  function Nc() {
    if (Kt === 1) {
      Kt = 0;
      var t = nn, e = Ka, n = An, a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        a = it.T, it.T = null;
        var s = ft.p;
        ft.p = 2;
        var u = Nt;
        Nt |= 4;
        try {
          Hl = Eu = !1, Qp(e, t, n), n = Kc;
          var f = qd(t.containerInfo), p = n.focusedElem, T = n.selectionRange;
          if (f !== p && p && p.ownerDocument && Gd(
            p.ownerDocument.documentElement,
            p
          )) {
            if (T !== null && sr(p)) {
              var O = T.start, V = T.end;
              if (V === void 0 && (V = O), "selectionStart" in p)
                p.selectionStart = O, p.selectionEnd = Math.min(
                  V,
                  p.value.length
                );
              else {
                var j = p.ownerDocument || document, C = j && j.defaultView || window;
                if (C.getSelection) {
                  var N = C.getSelection(), F = p.textContent.length, lt = Math.min(T.start, F), vt = T.end === void 0 ? lt : Math.min(T.end, F);
                  !N.extend && lt > vt && (f = vt, vt = lt, lt = f);
                  var D = Yd(
                    p,
                    lt
                  ), M = Yd(
                    p,
                    vt
                  );
                  if (D && M && (N.rangeCount !== 1 || N.anchorNode !== D.node || N.anchorOffset !== D.offset || N.focusNode !== M.node || N.focusOffset !== M.offset)) {
                    var x = j.createRange();
                    x.setStart(D.node, D.offset), N.removeAllRanges(), lt > vt ? (N.addRange(x), N.extend(M.node, M.offset)) : (x.setEnd(M.node, M.offset), N.addRange(x));
                  }
                }
              }
            }
            for (j = [], N = p; N = N.parentNode; )
              N.nodeType === 1 && j.push({
                element: N,
                left: N.scrollLeft,
                top: N.scrollTop
              });
            for (typeof p.focus == "function" && p.focus(), p = 0; p < j.length; p++) {
              var H = j[p];
              H.element.scrollLeft = H.left, H.element.scrollTop = H.top;
            }
          }
          Qi = !!Qc, Kc = Qc = null;
        } finally {
          Nt = u, ft.p = s, it.T = a;
        }
      }
      t.current = e, Kt = 2;
    }
  }
  function _c() {
    if (Kt === 2) {
      Kt = 0;
      var t = nn, e = Ka, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = it.T, it.T = null;
        var a = ft.p;
        ft.p = 2;
        var s = Nt;
        Nt |= 4;
        try {
          jp(t, e.alternate, e);
        } finally {
          Nt = s, ft.p = a, it.T = n;
        }
      }
      Kt = 3;
    }
  }
  function Vc() {
    if (Kt === 4 || Kt === 3) {
      Kt = 0;
      var t = _i;
      _i = null, W1();
      var e = nn, n = Ka, a = An, s = ty, u = (a & 335544064) === a ? 10262 : 10256;
      if ((n.subtreeFlags & u) !== 0 || (n.flags & u) !== 0 ? Kt = 5 : (Kt = 0, Ka = nn = null, hy(e, e.pendingLanes)), u = e.pendingLanes, u === 0 && (fa = null), qo(a), n = n.stateNode, ze && typeof ze.onCommitFiberRoot == "function")
        try {
          ze.onCommitFiberRoot(
            ul,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (s !== null) {
        n = it.T, u = ft.p, ft.p = 2, it.T = null;
        try {
          for (var f = e.onRecoverableError, p = 0; p < s.length; p++) {
            var T = s[p];
            f(T.value, {
              componentStack: T.stack
            });
          }
        } finally {
          it.T = n, ft.p = u;
        }
      }
      if (s = Vi, f = wi, wi = null, s !== null && (Vi = null, f === null && (f = []), t !== null))
        for (T = 0; T < s.length; T++)
          n = (0, s[T])(
            f
          ), n !== void 0 && t.finished.finally(n);
      (An & 3) !== 0 && Vu(), Mn(e), u = e.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? e === xu ? ql++ : (ql = 0, xu = e) : (ql = 0, xu = null), Xl(0);
    }
  }
  function hy(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Al(e)));
  }
  function Vu() {
    return _i !== null && (_i.skipTransition(), _i = null), Nc(), _c(), Vc(), wc();
  }
  function wc() {
    if (Kt !== 5) return !1;
    var t = nn, e = Oc;
    Oc = 0;
    var n = qo(An), a = it.T, s = ft.p;
    try {
      ft.p = 32 > n ? 32 : n, it.T = null, n = Rc, Rc = null;
      var u = nn, f = An;
      if (Kt = 0, Ka = nn = null, An = 0, (Nt & 6) !== 0) throw Error(r(331));
      var p = Nt;
      if (Nt |= 4, Ip(u.current), Fp(
        u,
        u.current,
        f,
        n
      ), Nt = p, Xl(0, !1), ze && typeof ze.onPostCommitFiberRoot == "function")
        try {
          ze.onPostCommitFiberRoot(ul, u);
        } catch {
        }
      return !0;
    } finally {
      ft.p = s, it.T = a, hy(t, e);
    }
  }
  function dy(t, e, n) {
    e = Xe(n, e), e = Ir(t.stateNode, e, 2), t = aa(t, e, 2), t !== null && (rl(t, 2), Mn(t));
  }
  function wt(t, e, n) {
    if (t.tag === 3)
      dy(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          dy(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (fa === null || !fa.has(a))) {
            t = Xe(n, t), n = rp(2), a = aa(e, n, 2), a !== null && (cp(
              n,
              a,
              e,
              t
            ), rl(a, 2), Mn(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function Uc(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new zT();
      var s = /* @__PURE__ */ new Set();
      a.set(e, s);
    } else
      s = a.get(e), s === void 0 && (s = /* @__PURE__ */ new Set(), a.set(e, s));
    s.has(n) || (Cc = !0, s.add(n), t = HT.bind(null, t, e, n), e.then(t, t));
  }
  function HT(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Lt === t && (Ct & n) === n && ((Ft === 4 || Ft === 3 && (Ct & 62914560) === Ct && 300 > xe() - Du) && (Nt & 2) === 0 ? Bi(t, 0) : Cu |= n, Ni === Ct && (Ni = 0)), Mn(t);
  }
  function my(t, e) {
    e === 0 && (e = $h()), t = za(t, e), t !== null && (rl(t, e), Mn(t));
  }
  function jT(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), my(t, n);
  }
  function YT(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(e), my(t, n);
  }
  function GT(t, e) {
    return Ho(t, e);
  }
  var Hi = null, ji = null, Bc = !1, wu = !1, Lc = !1, da = 0;
  function Mn(t) {
    t !== ji && t.next === null && (ji === null ? Hi = ji = t : ji = ji.next = t), wu = !0, Bc || (Bc = !0, XT());
  }
  function Xl(t, e) {
    if (!Lc && wu) {
      Lc = !0;
      do
        for (var n = !1, a = Hi; a !== null; ) {
          if (t !== 0) {
            var s = a.pendingLanes;
            if (s === 0) var u = 0;
            else {
              var f = a.suspendedLanes, p = a.pingedLanes;
              u = (1 << 31 - Ne(42 | t) + 1) - 1, u &= s & ~(f & ~p), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, vy(a, u));
          } else
            u = Ct, u = Cs(
              a,
              a === Lt ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || ol(a, u) || (n = !0, vy(a, u));
          a = a.next;
        }
      while (n);
      Lc = !1;
    }
  }
  function qT() {
    py();
  }
  function py() {
    wu = Bc = !1;
    var t = 0;
    da !== 0 && tE() && (t = da);
    for (var e = xe(), n = null, a = Hi; a !== null; ) {
      var s = a.next, u = yy(a, e);
      u === 0 ? (a.next = null, n === null ? Hi = s : n.next = s, s === null && (ji = n)) : (n = a, (t !== 0 || (u & 3) !== 0) && (wu = !0)), a = s;
    }
    Kt !== 0 && Kt !== 5 || Xl(t), da !== 0 && (da = 0);
  }
  function yy(t, e) {
    for (var n = t.suspendedLanes, a = t.pingedLanes, s = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var f = 31 - Ne(u), p = 1 << f, T = s[f];
      T === -1 ? ((p & n) === 0 || (p & a) !== 0) && (s[f] = sS(p, e)) : T <= e && (t.expiredLanes |= p), u &= ~p;
    }
    if (e = Lt, n = Ct, n = Cs(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, n === 0 || t === e && (Vt === 2 || Vt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && jo(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || ol(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (a !== null && jo(a), qo(n)) {
        case 2:
        case 8:
          n = kh;
          break;
        case 32:
          n = Es;
          break;
        case 268435456:
          n = Ih;
          break;
        default:
          n = Es;
      }
      return a = gy.bind(null, t), n = Ho(n, a), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return a !== null && a !== null && jo(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function gy(t, e) {
    if (Kt !== 0 && Kt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (Vu() && t.callbackNode !== n)
      return null;
    var a = Ct;
    return a = Cs(
      t,
      t === Lt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (ny(t, a, e), yy(t, xe()), t.callbackNode != null && t.callbackNode === n ? gy.bind(null, t) : null);
  }
  function vy(t, e) {
    if (Vu()) return null;
    ny(t, e, !0);
  }
  function XT() {
    nE(function() {
      (Nt & 6) !== 0 ? Ho(
        Ph,
        qT
      ) : py();
    });
  }
  function Hc() {
    if (da === 0) {
      var t = Ba;
      t === 0 && (t = bs, bs <<= 1, (bs & 261888) === 0 && (bs = 256)), da = t;
    }
    return da;
  }
  function Sy(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : zs(t);
  }
  function ZT(t, e, n, a, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var u = Sy(
        (s[be] || null).action
      ), f = a.submitter;
      f && (e = (e = f[be] || null) ? Sy(e.formAction) : f.getAttribute("formAction"), e !== null && (u = e, f = null));
      var p = new ws(
        "action",
        "action",
        null,
        a,
        s
      );
      t.push({
        event: p,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (da !== 0) {
                  var T = new FormData(s, f);
                  Kr(
                    n,
                    {
                      pending: !0,
                      data: T,
                      method: s.method,
                      action: u
                    },
                    null,
                    T
                  );
                }
              } else
                typeof u == "function" && (p.preventDefault(), T = new FormData(s, f), Kr(
                  n,
                  {
                    pending: !0,
                    data: T,
                    method: s.method,
                    action: u
                  },
                  u,
                  T
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var jc = 0; jc < cr.length; jc++) {
    var Yc = cr[jc], QT = Yc.toLowerCase(), KT = Yc[0].toUpperCase() + Yc.slice(1);
    We(
      QT,
      "on" + KT
    );
  }
  We(Qd, "onAnimationEnd"), We(Kd, "onAnimationIteration"), We(Jd, "onAnimationStart"), We("dblclick", "onDoubleClick"), We("focusin", "onFocus"), We("focusout", "onBlur"), We(eT, "onTransitionRun"), We(nT, "onTransitionStart"), We(aT, "onTransitionCancel"), We(Fd, "onTransitionEnd"), ui("onMouseEnter", ["mouseout", "mouseover"]), ui("onMouseLeave", ["mouseout", "mouseover"]), ui("onPointerEnter", ["pointerout", "pointerover"]), ui("onPointerLeave", ["pointerout", "pointerover"]), Oa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Oa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Oa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Oa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Oa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Oa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Zl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), JT = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zl)
  );
  function Ty(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n], s = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var f = a.length - 1; 0 <= f; f--) {
            var p = a[f], T = p.instance, O = p.currentTarget;
            if (p = p.listener, T !== u && s.isPropagationStopped())
              break t;
            u = p, s.currentTarget = O;
            try {
              u(s);
            } catch (V) {
              Ls(V);
            }
            s.currentTarget = null, u = T;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (p = a[f], T = p.instance, O = p.currentTarget, p = p.listener, T !== u && s.isPropagationStopped())
              break t;
            u = p, s.currentTarget = O;
            try {
              u(s);
            } catch (V) {
              Ls(V);
            }
            s.currentTarget = null, u = T;
          }
      }
    }
  }
  function Mt(t, e) {
    var n = e[ld];
    n === void 0 && (n = e[ld] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    n.has(a) || (Ey(e, t, 2, !1), n.add(a));
  }
  function Gc(t, e, n) {
    var a = 0;
    e && (a |= 4), Ey(
      n,
      t,
      a,
      e
    );
  }
  var Uu = "_reactListening" + Math.random().toString(36).slice(2);
  function qc(t) {
    if (!t[Uu]) {
      t[Uu] = !0, od.forEach(function(n) {
        n !== "selectionchange" && (JT.has(n) || Gc(n, !1, t), Gc(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Uu] || (e[Uu] = !0, Gc("selectionchange", !1, e));
    }
  }
  function Ey(t, e, n, a) {
    switch (c0(e)) {
      case 2:
        var s = jE;
        break;
      case 8:
        s = YE;
        break;
      default:
        s = rf;
    }
    n = s.bind(
      null,
      e,
      n,
      t
    ), s = void 0, !ko || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0), a ? s !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: s
    }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, {
      passive: s
    }) : t.addEventListener(e, n, !1);
  }
  function Xc(t, e, n, a, s) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var p = a.stateNode.containerInfo;
          if (p === s) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var T = f.tag;
              if ((T === 3 || T === 4) && f.stateNode.containerInfo === s)
                return;
              f = f.return;
            }
          for (; p !== null; ) {
            if (f = Da(p), f === null) return;
            if (T = f.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              a = u = f;
              continue t;
            }
            p = p.parentNode;
          }
        }
        a = a.return;
      }
    Ed(function() {
      var O = u, V = Fo(n), j = [];
      t: {
        var C = Pd.get(t);
        if (C !== void 0) {
          var N = ws, F = t;
          switch (t) {
            case "keypress":
              if (_s(n) === 0) break t;
            case "keydown":
            case "keyup":
              N = NS;
              break;
            case "focusin":
              F = "focus", N = tr;
              break;
            case "focusout":
              F = "blur", N = tr;
              break;
            case "beforeblur":
            case "afterblur":
              N = tr;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              N = Md;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = SS;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = BS;
              break;
            case Qd:
            case Kd:
            case Jd:
              N = bS;
              break;
            case Fd:
              N = HS;
              break;
            case "scroll":
            case "scrollend":
              N = gS;
              break;
            case "wheel":
              N = YS;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = MS;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = Dd;
              break;
            case "submit":
              N = wS;
              break;
            case "toggle":
            case "beforetoggle":
              N = qS;
          }
          var lt = (e & 4) !== 0, vt = !lt && (t === "scroll" || t === "scrollend"), D = lt ? C !== null ? C + "Capture" : null : C;
          lt = [];
          for (var M = O, x; M !== null; ) {
            var H = M;
            if (x = H.stateNode, H = H.tag, H !== 5 && H !== 26 && H !== 27 || x === null || D === null || (H = hl(M, D), H != null && lt.push(
              Ql(M, H, x)
            )), vt) break;
            M = M.return;
          }
          0 < lt.length && (C = new N(
            C,
            F,
            null,
            n,
            V
          ), j.push({ event: C, listeners: lt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (N = t === "mouseover" || t === "pointerover", C = t === "mouseout" || t === "pointerout", N && n !== Jo && (F = n.relatedTarget || n.fromElement) && (Da(F) || F[ii]))
            break t;
          (C || N) && (F = V.window === V ? V : (N = V.ownerDocument) ? N.defaultView || N.parentWindow : window, C ? (N = n.relatedTarget || n.toElement, C = O, N = N ? Da(N) : null, N !== null && (vt = h(N), lt = N.tag, N !== vt || lt !== 5 && lt !== 27 && lt !== 6) && (N = null)) : (C = null, N = O), C !== N && (lt = Md, H = "onMouseLeave", D = "onMouseEnter", M = "mouse", (t === "pointerout" || t === "pointerover") && (lt = Dd, H = "onPointerLeave", D = "onPointerEnter", M = "pointer"), vt = C == null ? F : fl(C), x = N == null ? F : fl(N), F = new lt(
            H,
            M + "leave",
            C,
            n,
            V
          ), F.target = vt, F.relatedTarget = x, H = null, Da(V) === O && (lt = new lt(
            D,
            M + "enter",
            N,
            n,
            V
          ), lt.target = x, lt.relatedTarget = vt, H = lt), vt = H, lt = C && N ? st(
            C,
            N,
            FT
          ) : null, C !== null && by(
            j,
            F,
            C,
            lt,
            !1
          ), N !== null && vt !== null && by(
            j,
            vt,
            N,
            lt,
            !0
          )));
        }
        t: {
          if (C = O ? fl(O) : window, N = C.nodeName && C.nodeName.toLowerCase(), N === "select" || N === "input" && C.type === "file")
            var nt = wd;
          else if (_d(C))
            if (Ud)
              nt = WS;
            else {
              nt = kS;
              var Dt = PS;
            }
          else
            N = C.nodeName, !N || N.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? O && Ko(O.elementType) && (nt = wd) : nt = IS;
          if (nt && (nt = nt(t, O))) {
            Vd(
              j,
              nt,
              n,
              V
            );
            break t;
          }
          Dt && Dt(t, C, O);
        }
        switch (Dt = O ? fl(O) : window, t) {
          case "focusin":
            (_d(Dt) || Dt.contentEditable === "true") && (di = Dt, ur = O, Tl = null);
            break;
          case "focusout":
            Tl = ur = di = null;
            break;
          case "mousedown":
            or = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            or = !1, Xd(j, n, V);
            break;
          case "selectionchange":
            if (tT) break;
          case "keydown":
          case "keyup":
            Xd(j, n, V);
        }
        var rt;
        if (nr)
          t: {
            switch (t) {
              case "compositionstart":
                var ht = "onCompositionStart";
                break t;
              case "compositionend":
                ht = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ht = "onCompositionUpdate";
                break t;
            }
            ht = void 0;
          }
        else
          hi ? zd(t, n) && (ht = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (ht = "onCompositionStart");
        ht && (Od && n.locale !== "ko" && (hi || ht !== "onCompositionStart" ? ht === "onCompositionEnd" && hi && (rt = bd()) : (Fn = V, Io = "value" in Fn ? Fn.value : Fn.textContent, hi = !0)), Dt = Bu(O, ht), 0 < Dt.length && (ht = new Cd(
          ht,
          t,
          null,
          n,
          V
        ), j.push({ event: ht, listeners: Dt }), rt ? ht.data = rt : (rt = Nd(n), rt !== null && (ht.data = rt)))), (rt = ZS ? QS(t, n) : KS(t, n)) && (ht = Bu(O, "onBeforeInput"), 0 < ht.length && (Dt = new Cd(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          V
        ), j.push({
          event: Dt,
          listeners: ht
        }), Dt.data = rt)), ZT(
          j,
          t,
          O,
          n,
          V
        );
      }
      Ty(j, e);
    });
  }
  function Ql(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function Bu(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var s = t, u = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || u === null || (s = hl(t, n), s != null && a.unshift(
        Ql(t, s, u)
      ), s = hl(t, e), s != null && a.push(
        Ql(t, s, u)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function FT(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function by(t, e, n, a, s) {
    for (var u = e._reactName, f = []; n !== null && n !== a; ) {
      var p = n, T = p.alternate, O = p.stateNode;
      if (p = p.tag, T !== null && T === a) break;
      p !== 5 && p !== 26 && p !== 27 || O === null || (T = O, s ? (O = hl(n, u), O != null && f.unshift(
        Ql(n, O, T)
      )) : s || (O = hl(n, u), O != null && f.push(
        Ql(n, O, T)
      ))), n = n.return;
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var PT = /\r\n?/g, kT = /\u0000|\uFFFD/g;
  function Ay(t) {
    return (typeof t == "string" ? t : "" + t).replace(PT, `
`).replace(kT, "");
  }
  function My(t, e) {
    return e = Ay(e), Ay(t) === e;
  }
  function Ut(t, e, n, a, s, u) {
    switch (n) {
      case "children":
        if (typeof a == "string")
          e === "body" || e === "textarea" && a === "" || ri(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          e !== "body" && ri(t, "" + a);
        else return;
        break;
      case "className":
        xs(t, "class", a);
        break;
      case "tabIndex":
        xs(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        xs(t, n, a);
        break;
      case "style":
        Sd(t, a, u);
        return;
      case "data":
        if (e !== "object") {
          xs(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = zs(a), t.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (n === "formAction" ? (e !== "input" && Ut(t, e, "name", s.name, s, null), Ut(
            t,
            e,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Ut(
            t,
            e,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Ut(
            t,
            e,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Ut(t, e, "encType", s.encType, s, null), Ut(t, e, "method", s.method, s, null), Ut(t, e, "target", s.target, s, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = zs(a), t.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (t.onclick = mn);
        return;
      case "onScroll":
        a != null && Mt("scroll", t);
        return;
      case "onScrollEnd":
        a != null && Mt("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (n = a.__html, n != null) {
            if (s.children != null) throw Error(r(60));
            u?.__html !== n && (t.innerHTML = n);
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
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
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        n = zs(a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
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
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
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
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(n) : t.setAttribute(n, a);
        break;
      case "popover":
        Mt("beforetoggle", t), Mt("toggle", t), Rs(t, "popover", a);
        break;
      case "xlinkActuate":
        Rn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Rn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Rn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Rn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Rn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Rn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Rn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Rn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Rn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Rs(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N")
          n = pS.get(n) || n, Rs(t, n, a);
        else return;
    }
    zt = !0;
  }
  function Zc(t, e, n, a, s, u) {
    switch (n) {
      case "style":
        Sd(t, a, u);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (n = a.__html, n != null) {
            if (s.children != null) throw Error(r(60));
            u?.__html !== n && (t.innerHTML = n);
          }
        }
        break;
      case "children":
        if (typeof a == "string") ri(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          ri(t, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && Mt("scroll", t);
        return;
      case "onScrollEnd":
        a != null && Mt("scrollend", t);
        return;
      case "onClick":
        a != null && (t.onclick = mn);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!rd.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"), u = n.slice(2, s ? n.length - 7 : void 0), e = t[be] || null, e = e != null ? e[n] : null, typeof e == "function" && t.removeEventListener(u, e, s), typeof a == "function")) {
              typeof e != "function" && e !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(u, a, s);
              break t;
            }
            zt = !0, n in t ? t[n] = a : a === !0 ? t.setAttribute(n, "") : Rs(t, n, a);
          }
        return;
    }
    zt = !0;
  }
  function me(t, e, n) {
    switch (e) {
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
        Mt("error", t), Mt("load", t);
        var a = !1, s = !1, u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var f = n[u];
            if (f != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  Ut(t, e, u, f, n, null);
              }
          }
        s && Ut(t, e, "srcSet", n.srcSet, n, null), a && Ut(t, e, "src", n.src, n, null);
        return;
      case "input":
        Mt("invalid", t);
        var p = u = f = s = null, T = null, O = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var V = n[a];
            if (V != null)
              switch (a) {
                case "name":
                  s = V;
                  break;
                case "type":
                  f = V;
                  break;
                case "checked":
                  T = V;
                  break;
                case "defaultChecked":
                  O = V;
                  break;
                case "value":
                  u = V;
                  break;
                case "defaultValue":
                  p = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null)
                    throw Error(r(137, e));
                  break;
                default:
                  Ut(t, e, a, V, n, null);
              }
          }
        pd(
          t,
          u,
          p,
          T,
          O,
          f,
          s,
          !1
        );
        return;
      case "select":
        Mt("invalid", t), a = f = u = null;
        for (s in n)
          if (n.hasOwnProperty(s) && (p = n[s], p != null))
            switch (s) {
              case "value":
                u = p;
                break;
              case "defaultValue":
                f = p;
                break;
              case "multiple":
                a = p;
              default:
                Ut(t, e, s, p, n, null);
            }
        e = u, n = f, t.multiple = !!a, e != null ? oi(t, !!a, e, !1) : n != null && oi(t, !!a, n, !0);
        return;
      case "textarea":
        Mt("invalid", t), u = s = a = null;
        for (f in n)
          if (n.hasOwnProperty(f) && (p = n[f], p != null))
            switch (f) {
              case "value":
                a = p;
                break;
              case "defaultValue":
                s = p;
                break;
              case "children":
                u = p;
                break;
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(r(91));
                break;
              default:
                Ut(t, e, f, p, n, null);
            }
        gd(t, a, s, u);
        return;
      case "option":
        for (T in n)
          if (n.hasOwnProperty(T) && (a = n[T], a != null))
            switch (T) {
              case "selected":
                t.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Ut(t, e, T, a, n, null);
            }
        return;
      case "dialog":
        Mt("beforetoggle", t), Mt("toggle", t), Mt("cancel", t), Mt("close", t);
        break;
      case "iframe":
      case "object":
        Mt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Zl.length; a++)
          Mt(Zl[a], t);
        break;
      case "image":
        Mt("error", t), Mt("load", t);
        break;
      case "details":
        Mt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Mt("error", t), Mt("load", t);
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
        for (O in n)
          if (n.hasOwnProperty(O) && (a = n[O], a != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Ut(t, e, O, a, n, null);
            }
        return;
      default:
        if (Ko(e)) {
          for (V in n)
            n.hasOwnProperty(V) && (a = n[V], a !== void 0 && Zc(
              t,
              e,
              V,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (p in n)
      n.hasOwnProperty(p) && (a = n[p], a != null && Ut(t, e, p, a, n, null));
  }
  var IT = {};
  function WT(t, e, n, a) {
    switch (e) {
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
        var s = null, u = null, f = null, p = null, T = null, O = null, V = null;
        for (N in n) {
          var j = n[N];
          if (n.hasOwnProperty(N) && j != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = j;
              default:
                a.hasOwnProperty(N) || Ut(t, e, N, null, a, j);
            }
        }
        for (var C in a) {
          var N = a[C];
          if (j = n[C], a.hasOwnProperty(C) && (N != null || j != null))
            switch (C) {
              case "type":
                N !== j && (zt = !0), u = N;
                break;
              case "name":
                N !== j && (zt = !0), s = N;
                break;
              case "checked":
                N !== j && (zt = !0), O = N;
                break;
              case "defaultChecked":
                N !== j && (zt = !0), V = N;
                break;
              case "value":
                N !== j && (zt = !0), f = N;
                break;
              case "defaultValue":
                N !== j && (zt = !0), p = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(r(137, e));
                break;
              default:
                N !== j && Ut(
                  t,
                  e,
                  C,
                  N,
                  a,
                  j
                );
            }
        }
        Zo(
          t,
          f,
          p,
          T,
          O,
          V,
          u,
          s
        );
        return;
      case "select":
        N = f = p = C = null;
        for (u in n)
          if (T = n[u], n.hasOwnProperty(u) && T != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                N = T;
              default:
                a.hasOwnProperty(u) || Ut(
                  t,
                  e,
                  u,
                  null,
                  a,
                  T
                );
            }
        for (s in a)
          if (u = a[s], T = n[s], a.hasOwnProperty(s) && (u != null || T != null))
            switch (s) {
              case "value":
                u !== T && (zt = !0), C = u;
                break;
              case "defaultValue":
                u !== T && (zt = !0), p = u;
                break;
              case "multiple":
                u !== T && (zt = !0), f = u;
              default:
                u !== T && Ut(
                  t,
                  e,
                  s,
                  u,
                  a,
                  T
                );
            }
        e = p, n = f, a = N, C != null ? oi(t, !!n, C, !1) : !!a != !!n && (e != null ? oi(t, !!n, e, !0) : oi(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        N = C = null;
        for (p in n)
          if (s = n[p], n.hasOwnProperty(p) && s != null && !a.hasOwnProperty(p))
            switch (p) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ut(t, e, p, null, a, s);
            }
        for (f in a)
          if (s = a[f], u = n[f], a.hasOwnProperty(f) && (s != null || u != null))
            switch (f) {
              case "value":
                s !== u && (zt = !0), C = s;
                break;
              case "defaultValue":
                s !== u && (zt = !0), N = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                s !== u && Ut(t, e, f, s, a, u);
            }
        yd(t, C, N);
        return;
      case "option":
        for (var F in n)
          if (C = n[F], n.hasOwnProperty(F) && C != null && !a.hasOwnProperty(F))
            switch (F) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Ut(
                  t,
                  e,
                  F,
                  null,
                  a,
                  C
                );
            }
        for (T in a)
          if (C = a[T], N = n[T], a.hasOwnProperty(T) && C !== N && (C != null || N != null))
            switch (T) {
              case "selected":
                C !== N && (zt = !0), t.selected = C && typeof C != "function" && typeof C != "symbol";
                break;
              default:
                Ut(
                  t,
                  e,
                  T,
                  C,
                  a,
                  N
                );
            }
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
        for (var lt in n)
          C = n[lt], n.hasOwnProperty(lt) && C != null && !a.hasOwnProperty(lt) && Ut(t, e, lt, null, a, C);
        for (O in a)
          if (C = a[O], N = n[O], a.hasOwnProperty(O) && C !== N && (C != null || N != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(r(137, e));
                break;
              default:
                Ut(
                  t,
                  e,
                  O,
                  C,
                  a,
                  N
                );
            }
        return;
      default:
        if (Ko(e)) {
          for (var vt in n)
            C = n[vt], n.hasOwnProperty(vt) && C !== void 0 && !a.hasOwnProperty(vt) && Zc(
              t,
              e,
              vt,
              void 0,
              a,
              C
            );
          for (V in a)
            C = a[V], N = n[V], !a.hasOwnProperty(V) || C === N || C === void 0 && N === void 0 || Zc(
              t,
              e,
              V,
              C,
              a,
              N
            );
          return;
        }
    }
    for (var D in n)
      C = n[D], n.hasOwnProperty(D) && C != null && !a.hasOwnProperty(D) && Ut(t, e, D, null, a, C);
    for (j in a)
      C = a[j], N = n[j], !a.hasOwnProperty(j) || C === N || C == null && N == null || Ut(t, e, j, C, a, N);
  }
  function Cy(t) {
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
  function $T() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var s = n[a], u = s.transferSize, f = s.initiatorType, p = s.duration;
        if (u && p && Cy(f)) {
          for (f = 0, p = s.responseEnd, a += 1; a < n.length; a++) {
            var T = n[a], O = T.startTime;
            if (O > p) break;
            var V = T.transferSize, j = T.initiatorType;
            V && Cy(j) && (T = T.responseEnd, f += V * (T < p ? 1 : (p - O) / (T - O)));
          }
          if (--a, e += 8 * (u + f) / (s.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Qc = null, Kc = null;
  function Kl(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Dy(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Oy(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Ry(t, e, n, a) {
    return n = Kl(
      n
    ).createElement(t), n[re] = a, n[be] = e, me(n, t, e), ie(n), n;
  }
  function Jc(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Fc = null;
  function tE() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Fc ? !1 : (Fc = t, !0) : (Fc = null, !1);
  }
  var Pc = typeof setTimeout == "function" ? setTimeout : void 0, eE = typeof clearTimeout == "function" ? clearTimeout : void 0, xy = typeof Promise == "function" ? Promise : void 0, zy = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Pc, nE = typeof queueMicrotask == "function" ? queueMicrotask : typeof xy < "u" ? function(t) {
    return xy.resolve(null).then(t).catch(aE);
  } : Pc;
  function aE(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function ma(t) {
    return t === "head";
  }
  function Ny(t, e) {
    var n = e, a = 0;
    do {
      var s = n.nextSibling;
      if (t.removeChild(n), s && s.nodeType === 8)
        if (n = s.data, n === "/$" || n === "/&") {
          if (a === 0) {
            t.removeChild(s), Ki(e);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          af(
            t.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = t.ownerDocument.head, af(n);
          for (var u = n.firstChild; u; ) {
            var f = u.nextSibling, p = u.nodeName;
            u[cl] || p === "SCRIPT" || p === "STYLE" || p === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = f;
          }
        } else
          n === "body" && af(t.ownerDocument.body);
      n = s;
    } while (n);
    Ki(e);
  }
  function _y(t, e) {
    var n = t;
    t = 0;
    do {
      var a = n.nextSibling;
      if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), a && a.nodeType === 8)
        if (n = a.data, n === "/$") {
          if (t === 0) break;
          t--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
      n = a;
    } while (n);
  }
  function Vy(t, e, n) {
    if (e = CSS.escape(e) !== e ? "r-" + btoa(e).replace(/=/g, "") : e, t.style.viewTransitionName = e, n != null && (t.style.viewTransitionClass = n), n = getComputedStyle(t), n.display === "inline") {
      if (e = t.getClientRects(), e.length === 1) var a = 1;
      else
        for (var s = a = 0; s < e.length; s++) {
          var u = e[s];
          0 < u.width && 0 < u.height && a++;
        }
      a === 1 && (t = t.style, t.display = e.length === 1 ? "inline-block" : "block", t.marginTop = "-" + n.paddingTop, t.marginBottom = "-" + n.paddingBottom);
    }
  }
  function wy(t, e) {
    t = t.style, e = e.style;
    var n = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (n = e.display, t.display = n == null || typeof n == "boolean" ? "" : n, n = e.margin, n != null ? t.margin = n : (n = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = n == null || typeof n == "boolean" ? "" : n, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function iE(t, e, n) {
    return n = n.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= n.innerHeight && t.left <= n.innerWidth
    };
  }
  function kc(t) {
    var e = t.getBoundingClientRect(), n = getComputedStyle(t);
    return iE(e, n, t);
  }
  function lE(t) {
    return t.documentElement.clientHeight;
  }
  function sE(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function uE(t, e, n, a, s, u, f, p, T) {
    var O = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var V = O.startViewTransition({
        update: function() {
          var C = O.defaultView, N = C.navigation && C.navigation.transition, F = O.fonts.status;
          a();
          var lt = [];
          if (F === "loaded" && (lE(O), O.fonts.status === "loading" && lt.push(O.fonts.ready)), F = lt.length, t !== null)
            for (var vt = t.suspenseyImages, D = 0, M = 0; M < vt.length; M++) {
              var x = vt[M];
              if (!x.complete) {
                var H = x.getBoundingClientRect();
                if (0 < H.bottom && 0 < H.right && H.top < C.innerHeight && H.left < C.innerWidth) {
                  if (D += e0(x), D > ju) {
                    lt.length = F;
                    break;
                  }
                  x = new Promise(
                    sE.bind(x)
                  ), lt.push(x);
                }
              }
            }
          if (0 < lt.length)
            return C = Promise.race([
              Promise.all(lt),
              new Promise(function(nt) {
                return setTimeout(nt, 500);
              })
            ]).then(s, s), (N ? Promise.allSettled([N.finished, C]) : C).then(u, u);
          if (s(), N)
            return N.finished.then(
              u,
              u
            );
          u();
        },
        types: n
      });
      O.__reactViewTransition = V;
      var j = [];
      return V.ready.then(
        function() {
          for (var C = O.documentElement.getAnimations({
            subtree: !0
          }), N = 0; N < C.length; N++) {
            var F = C[N], lt = F.effect, vt = lt.pseudoElement;
            if (vt != null && vt.startsWith("::view-transition")) {
              j.push(F), F = lt.getKeyframes();
              for (var D = vt = void 0, M = !0, x = 0; x < F.length; x++) {
                var H = F[x], nt = H.width;
                if (vt === void 0) vt = nt;
                else if (vt !== nt) {
                  M = !1;
                  break;
                }
                if (nt = H.height, D === void 0) D = nt;
                else if (D !== nt) {
                  M = !1;
                  break;
                }
                delete H.width, delete H.height, H.transform === "none" && delete H.transform;
              }
              M && vt !== void 0 && D !== void 0 && (lt.setKeyframes(F), M = getComputedStyle(
                lt.target,
                lt.pseudoElement
              ), M.width !== vt || M.height !== D) && (M = F[0], M.width = vt, M.height = D, M = F[F.length - 1], M.width = vt, M.height = D, lt.setKeyframes(F));
            }
          }
          f();
        },
        function(C) {
          O.__reactViewTransition === V && (O.__reactViewTransition = null);
          try {
            if (typeof C == "object" && C !== null)
              switch (C.name) {
                case "InvalidStateError":
                  (C.message === "View transition was skipped because document visibility state is hidden." || C.message === "Skipping view transition because document visibility state has become hidden." || C.message === "Skipping view transition because viewport size changed." || C.message === "Transition was aborted because of invalid state") && (C = null);
              }
            C !== null && T(C);
          } finally {
            a(), s(), f();
          }
        }
      ), V.finished.finally(function() {
        for (var C = 0; C < j.length; C++)
          j[C].cancel();
        O.__reactViewTransition === V && (O.__reactViewTransition = null), p();
      }), V;
    } catch {
      return a(), s(), f(), null;
    }
  }
  function Ja(t, e) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + e + ")";
  }
  Ja.prototype.animate = function(t, e) {
    return e = typeof e == "number" ? { duration: e } : U({}, e), e.pseudoElement = this._selector, this._scope.animate(t, e);
  }, Ja.prototype.getAnimations = function() {
    for (var t = this._scope, e = this._selector, n = t.getAnimations({ subtree: !0 }), a = [], s = 0; s < n.length; s++) {
      var u = n[s].effect;
      u !== null && u.target === t && u.pseudoElement === e && a.push(n[s]);
    }
    return a;
  }, Ja.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Uy(t) {
    return {
      name: t,
      group: new Ja("group", t),
      imagePair: new Ja("image-pair", t),
      old: new Ja("old", t),
      new: new Ja("new", t)
    };
  }
  function je(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  je.prototype.addEventListener = function(t, e, n) {
    var a = null, s = null;
    if (!(n != null && typeof n != "boolean" && (a = n.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var u = this._eventListeners;
      if (Ly(u, t, e, n) === -1) {
        var f = this, p = e;
        n != null && typeof n != "boolean" && n.once === !0 && (p = function(T) {
          f.removeEventListener(
            t,
            e,
            n
          ), typeof e == "function" ? e.call(this, T) : e.handleEvent(T);
        }), a !== null && (s = f.removeEventListener.bind(
          f,
          t,
          e,
          n
        ), a.addEventListener("abort", s, { once: !0 }), s = a.removeEventListener.bind(a, "abort", s)), a = Yi(n), u.push({
          type: t,
          listener: e,
          optionsOrUseCapture: n,
          attachedListener: p,
          cleanup: s
        }), y(
          this._fragmentFiber.child,
          !1,
          oE,
          t,
          p,
          a
        );
      }
      this._eventListeners = u;
    }
  };
  function oE(t, e, n, a) {
    return _(t).addEventListener(
      e,
      n,
      a
    ), !1;
  }
  je.prototype.removeEventListener = function(t, e, n) {
    var a = this._eventListeners;
    if (a !== null && (e = Ly(
      a,
      t,
      e,
      n
    ), e !== -1)) {
      var s = a[e];
      n = s.attachedListener;
      var u = s.cleanup;
      s = Yi(s.optionsOrUseCapture), y(
        this._fragmentFiber.child,
        !1,
        rE,
        t,
        n,
        s
      ), a.splice(e, 1), u !== null && u();
    }
  };
  function rE(t, e, n, a) {
    return _(t).removeEventListener(
      e,
      n,
      a
    ), !1;
  }
  function Yi(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function By(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function Ly(t, e, n, a) {
    if (t.length === 0) return -1;
    a = By(a);
    for (var s = 0; s < t.length; s++) {
      var u = t[s];
      if (u.type === e && u.listener === n && By(u.optionsOrUseCapture) === a)
        return s;
    }
    return -1;
  }
  je.prototype.dispatchEvent = function(t) {
    var e = b(
      this._fragmentFiber
    );
    if (e === null) return !0;
    e = _(e);
    var n = this._eventListeners;
    if (n !== null && 0 < n.length || !t.bubbles) {
      var a = e.nodeType === 9 ? e.createComment("") : document.createTextNode("");
      if (n)
        for (var s = 0; s < n.length; s++) {
          var u = n[s];
          a.addEventListener(
            u.type,
            u.attachedListener,
            Yi(u.optionsOrUseCapture)
          );
        }
      if (e.appendChild(a), t = a.dispatchEvent(t), n)
        for (s = 0; s < n.length; s++)
          u = n[s], a.removeEventListener(
            u.type,
            u.attachedListener,
            Yi(u.optionsOrUseCapture)
          );
      return e.removeChild(a), t;
    }
    return e.dispatchEvent(t);
  }, je.prototype.focus = function(t) {
    y(
      this._fragmentFiber.child,
      !0,
      Hy,
      t,
      void 0,
      void 0
    );
  };
  function Hy(t, e) {
    return t.tag === 6 ? !1 : (t = _(t), EE(t, e));
  }
  je.prototype.focusLast = function(t) {
    var e = [];
    y(
      this._fragmentFiber.child,
      !0,
      Ic,
      e,
      void 0,
      void 0
    );
    for (var n = e.length - 1; 0 <= n && !Hy(e[n], t); n--) ;
  };
  function Ic(t, e) {
    return e.push(t), !1;
  }
  je.prototype.blur = function() {
    var t = b(
      this._fragmentFiber
    );
    t !== null && (t = _(t), t = Kl(t).activeElement, t !== null && y(
      this._fragmentFiber.child,
      !1,
      cE,
      t,
      void 0,
      void 0
    ));
  };
  function cE(t, e) {
    return t.tag === 6 ? !1 : (t = _(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  je.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), y(
      this._fragmentFiber.child,
      !1,
      fE,
      t,
      void 0,
      void 0
    );
  };
  function fE(t, e) {
    return t.tag === 6 || (t = _(t), e.observe(t)), !1;
  }
  je.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), y(
        this._fragmentFiber.child,
        !1,
        hE,
        t,
        void 0,
        void 0
      );
      for (var n = e = 0; n < an.length; n++) {
        var a = an[n];
        a.fragmentInstance === this && a.observer === t ? t.unobserve(a.instance) : an[e++] = a;
      }
      an.length = e;
    }
  };
  function hE(t, e) {
    return t.tag === 6 || (t = _(t), e.unobserve(t)), !1;
  }
  var an = [], Wc = !1;
  function dE(t, e, n) {
    an.push({
      fragmentInstance: t,
      observer: e,
      instance: n
    }), Wc || (Wc = !0, bE(function() {
      Wc = !1;
      var a = an;
      an = [];
      for (var s = 0; s < a.length; s++) {
        var u = a[s];
        u.observer.unobserve(u.instance);
      }
    }));
  }
  je.prototype.getClientRects = function() {
    var t = [];
    return y(
      this._fragmentFiber.child,
      !1,
      mE,
      t,
      void 0,
      void 0
    ), t;
  };
  function mE(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var n = t.ownerDocument.createRange();
      n.selectNodeContents(t), e.push.apply(e, n.getClientRects());
    } else
      t = _(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  je.prototype.getRootNode = function(t) {
    var e = b(
      this._fragmentFiber
    );
    return e === null ? this : _(e).getRootNode(t);
  }, je.prototype.compareDocumentPosition = function(t) {
    var e = b(
      this._fragmentFiber
    );
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    y(
      this._fragmentFiber.child,
      !1,
      Ic,
      n,
      void 0,
      void 0
    );
    var a = _(e);
    if (n.length === 0) {
      if (n = a, R(this._fragmentFiber)) {
        t: {
          for (e = this._fragmentFiber.return; e !== null; ) {
            if (e.tag === 4) {
              e = e.stateNode.containerInfo;
              break t;
            }
            if (e.tag === 3 || e.tag === 5 || e.tag === 27)
              break;
            e = e.return;
          }
          e = null;
        }
        e != null && (n = e);
      }
      e = this._fragmentFiber;
      var s = a = n.compareDocumentPosition(t);
      return n === t ? s = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = z(e)[1], n === null ? s = Node.DOCUMENT_POSITION_PRECEDING : (t = _(n).compareDocumentPosition(
        t
      ), s = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), s |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = _(n[0]), s = _(n[n.length - 1]);
    var u = R(this._fragmentFiber) ? e.parentElement : a;
    if (u == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = u.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, u = u.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var f = e.compareDocumentPosition(t), p = s.compareDocumentPosition(t), T = f & Node.DOCUMENT_POSITION_CONTAINED_BY || p & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return p = a && u && f & Node.DOCUMENT_POSITION_FOLLOWING && p & Node.DOCUMENT_POSITION_PRECEDING, e = a && e === t || u && s === t || T || p ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && e === t || !u && s === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : f, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || pE(
      e,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      t
    ) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function pE(t, e, n, a, s) {
    var u = Da(s);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (n = !!u)
        t: {
          for (; u !== null; ) {
            if (u.tag === 7 && (u === e || u.alternate === e)) {
              n = !0;
              break t;
            }
            u = u.return;
          }
          n = !1;
        }
      return n;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (u === null)
        return u = s.ownerDocument, s === u || s === u.documentElement || s === u.body;
      t: {
        for (u = e, e = b(e); u !== null; ) {
          if (!(u.tag !== 5 && u.tag !== 3 && u.tag !== 27 || u !== e && u.alternate !== e)) {
            u = !0;
            break t;
          }
          u = u.return;
        }
        u = !1;
      }
      return u;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((e = !!u) && !(e = u === n) && (e = st(
      n,
      u,
      et
    ), e === null ? e = !1 : (y(
      e,
      !0,
      k,
      u,
      n
    ), u = X, X = null, e = u !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!u) && !(e = u === a) && (e = st(
      a,
      u,
      et
    ), e === null ? e = !1 : (y(
      e,
      !0,
      $,
      u,
      a
    ), u = X, K = X = null, e = u !== null)), e) : !1;
  }
  function jy(t, e) {
    var n = t.ownerDocument.createRange();
    n.selectNodeContents(t), t = n.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      e ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  je.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(r(566));
    var e = [];
    y(
      this._fragmentFiber.child,
      !1,
      Ic,
      e,
      void 0,
      void 0
    );
    var n = t !== !1;
    if (e.length === 0) {
      var a = z(
        this._fragmentFiber
      );
      if (a = n ? a[1] || a[0] || b(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        t = _(a), jy(t, n);
        return;
      }
      if (a = _(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          n = "host" in a ? a.host : null, n !== null && n.scrollIntoView(t);
          return;
        }
        a.scrollIntoView(t);
      }
    }
    for (a = n ? e.length - 1 : 0; a !== (n ? -1 : e.length); ) {
      var s = e[a];
      s.tag === 6 ? (s = _(s), jy(s, n)) : _(s).scrollIntoView(t), a += n ? -1 : 1;
    }
  };
  function yE(t, e) {
    return t = _(t), Yy(t, e), !1;
  }
  function Yy(t, e) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(e);
  }
  function Gy(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = n[a];
        t.addEventListener(
          s.type,
          s.attachedListener,
          Yi(s.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(u) {
      for (var f = 0, p = 0; p < an.length; p++) {
        var T = an[p];
        (T.fragmentInstance !== e || T.observer !== u || T.instance !== t) && (an[f++] = T);
      }
      an.length = f, u.observe(t);
    }), Yy(t, e));
  }
  function gE(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = n[a];
        t.removeEventListener(
          s.type,
          s.attachedListener,
          Yi(s.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(u) {
      typeof u.rootMargin == "string" ? dE(
        e,
        u,
        t
      ) : u.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function $c(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          $c(n), Os(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function vE(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[cl])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (u !== s.rel || t.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || t.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (s.src == null ? null : s.src) || t.getAttribute("type") !== (s.type == null ? null : s.type) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === u)
          return t;
      } else return t;
      if (t = Fe(t.nextSibling), t === null) break;
    }
    return null;
  }
  function SE(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Fe(t.nextSibling), t === null)) return null;
    return t;
  }
  function qy(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Fe(t.nextSibling), t === null)) return null;
    return t;
  }
  function tf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function ef(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function TE(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading")
      e();
    else {
      var a = function() {
        e(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function Fe(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var nf = null;
  function Xy(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0)
            return Fe(t.nextSibling);
          e--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Zy(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else n !== "/$" && n !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function EE(t, e) {
    function n() {
      a = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var a = !1;
    try {
      t.ownerDocument.addEventListener("focus", n, !0), (t.focus || HTMLElement.prototype.focus).call(t, e);
    } finally {
      t.ownerDocument.removeEventListener("focus", n, !0);
    }
    return a;
  }
  function bE(t) {
    zy(function() {
      zy(function(e) {
        return t(e);
      });
    });
  }
  function Qy(t, e, n) {
    switch (e = Kl(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(r(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(r(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function Ky(t, e, n) {
    for (var a in n) {
      var s = n[a];
      n.hasOwnProperty(a) && s != null && Ut(t, e, a, null, IT, s);
    }
    n.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === mn && (t.onclick = null), Os(t);
  }
  function af(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Os(t);
  }
  var Pe = /* @__PURE__ */ new Map(), Jy = /* @__PURE__ */ new Set();
  function Jl(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Gn = ft.d;
  ft.d = {
    f: AE,
    r: ME,
    D: CE,
    C: DE,
    L: OE,
    m: RE,
    X: zE,
    S: xE,
    M: NE
  };
  function AE() {
    var t = Gn.f(), e = zu();
    return t || e;
  }
  function ME(t) {
    var e = li(t);
    e !== null && e.tag === 5 && e.type === "form" ? Pm(e) : Gn.r(t);
  }
  var Gi = typeof document > "u" ? null : document;
  function Fy(t, e, n) {
    var a = Gi;
    if (a && typeof e == "string" && e) {
      var s = Ge(e);
      s = 'link[rel="' + t + '"][href="' + s + '"]', typeof n == "string" && (s += '[crossorigin="' + n + '"]'), Jy.has(s) || (Jy.add(s), t = { rel: t, crossOrigin: n, href: e }, a.querySelector(s) === null && (e = a.createElement("link"), me(e, "link", t), ie(e), a.head.appendChild(e)));
    }
  }
  function CE(t) {
    Gn.D(t), Fy("dns-prefetch", t, null);
  }
  function DE(t, e) {
    Gn.C(t, e), Fy("preconnect", t, e);
  }
  function OE(t, e, n) {
    Gn.L(t, e, n);
    var a = Gi;
    if (a && t && e) {
      var s = 'link[rel="preload"][as="' + Ge(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + Ge(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (s += '[imagesizes="' + Ge(
        n.imageSizes
      ) + '"]')) : s += '[href="' + Ge(t) + '"]';
      var u = s;
      switch (e) {
        case "style":
          u = qi(t);
          break;
        case "script":
          u = Xi(t);
      }
      if (!(Pe.has(u) || (t = U(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), Pe.set(u, t), a.querySelector(s) !== null || e === "style" && a.querySelector(Fl(u)) || e === "script" && a.querySelector(Pl(u))))) {
        var f = a.createElement("link");
        me(f, "link", t), e === "style" && (f[Ds] = !0, f.onload = f.onerror = function() {
          ud(f);
        }), ie(f), a.head.appendChild(f);
      }
    }
  }
  function RE(t, e) {
    Gn.m(t, e);
    var n = Gi;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", s = 'link[rel="modulepreload"][as="' + Ge(a) + '"][href="' + Ge(t) + '"]', u = s;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Xi(t);
      }
      if (!Pe.has(u) && (t = U({ rel: "modulepreload", href: t }, e), Pe.set(u, t), n.querySelector(s) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Pl(u)))
              return;
        }
        a = n.createElement("link"), me(a, "link", t), ie(a), n.head.appendChild(a);
      }
    }
  }
  function xE(t, e, n) {
    Gn.S(t, e, n);
    var a = Gi;
    if (a && t) {
      var s = si(a).hoistableStyles, u = qi(t);
      e = e || "default";
      var f = s.get(u);
      if (!f) {
        var p = { loading: 0, preload: null };
        if (f = a.querySelector(
          Fl(u)
        ))
          p.loading = 5;
        else {
          t = U(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = Pe.get(u)) && lf(t, n);
          var T = f = a.createElement("link");
          ie(T), me(T, "link", t), T._p = new Promise(function(O, V) {
            T.onload = O, T.onerror = V;
          }), T.addEventListener("load", function() {
            p.loading |= 1;
          }), T.addEventListener("error", function() {
            p.loading |= 2;
          }), p.loading |= 4, Lu(f, e, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: p
        }, s.set(u, f);
      }
    }
  }
  function zE(t, e) {
    Gn.X(t, e);
    var n = Gi;
    if (n && t) {
      var a = si(n).hoistableScripts, s = Xi(t), u = a.get(s);
      u || (u = n.querySelector(Pl(s)), u || (t = U({ src: t, async: !0 }, e), (e = Pe.get(s)) && sf(t, e), u = n.createElement("script"), ie(u), me(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(s, u));
    }
  }
  function NE(t, e) {
    Gn.M(t, e);
    var n = Gi;
    if (n && t) {
      var a = si(n).hoistableScripts, s = Xi(t), u = a.get(s);
      u || (u = n.querySelector(Pl(s)), u || (t = U({ src: t, async: !0, type: "module" }, e), (e = Pe.get(s)) && sf(t, e), u = n.createElement("script"), ie(u), me(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(s, u));
    }
  }
  function Py(t, e, n, a) {
    var s = (s = Qn.current) ? Jl(s) : null;
    if (!s) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = qi(n.href), e = si(
          s
        ).hoistableStyles, a = e.get(n), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = qi(n.href);
          var u = si(
            s
          ).hoistableStyles, f = u.get(t);
          if (f || (s = s.ownerDocument || s, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, f), (u = s.querySelector(
            Fl(t)
          )) ? u._p || (f.instance = u, f.state.loading = 5) : (u = Pe.get(t), u || (u = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Pe.set(t, u)), _E(
            s,
            t,
            u,
            f.state
          ))), e && a === null)
            throw Error(r(528, ""));
          return f;
        }
        if (e && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (n = Xi(n), e = si(
          s
        ).hoistableScripts, a = e.get(n), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, t));
    }
  }
  function qi(t) {
    return 'href="' + Ge(t) + '"';
  }
  function Fl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function ky(t) {
    return U({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function _E(t, e, n, a) {
    if (e = t.querySelector(
      'link[rel="preload"][as="style"][' + e + "]"
    )) {
      if (e[Ds] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      e = t.createElement("link"), e[Ds] = !0, e.onload = e.onerror = ud.bind(null, e), me(e, "link", n), ie(e), t.head.appendChild(e);
    a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function Xi(t) {
    return '[src="' + Ge(t) + '"]';
  }
  function Pl(t) {
    return "script[async]" + t;
  }
  function Iy(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + Ge(n.href) + '"]'
          );
          if (a)
            return e.instance = a, ie(a), a;
          var s = U({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), ie(a), me(a, "style", s), Lu(a, n.precedence, t), e.instance = a;
        case "stylesheet":
          s = qi(n.href);
          var u = t.querySelector(
            Fl(s)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, ie(u), u;
          a = ky(n), (s = Pe.get(s)) && lf(a, s), u = (t.ownerDocument || t).createElement("link"), ie(u);
          var f = u;
          return f._p = new Promise(function(p, T) {
            f.onload = p, f.onerror = T;
          }), me(u, "link", a), e.state.loading |= 4, Lu(u, n.precedence, t), e.instance = u;
        case "script":
          return u = Xi(n.src), (s = t.querySelector(
            Pl(u)
          )) ? (e.instance = s, ie(s), s) : (a = n, (s = Pe.get(u)) && (a = U({}, n), sf(a, s)), t = t.ownerDocument || t, s = t.createElement("script"), ie(s), me(s, "link", a), t.head.appendChild(s), e.instance = s);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Lu(a, n.precedence, t));
    return e.instance;
  }
  function Lu(t, e, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = a.length ? a[a.length - 1] : null, u = s, f = 0; f < a.length; f++) {
      var p = a[f];
      if (p.dataset.precedence === e) u = p;
      else if (u !== s) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function lf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function sf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Hu = null;
  function Wy(t, e, n) {
    if (Hu === null) {
      var a = /* @__PURE__ */ new Map(), s = Hu = /* @__PURE__ */ new Map();
      s.set(n, a);
    } else
      s = Hu, a = s.get(n), a || (a = /* @__PURE__ */ new Map(), s.set(n, a));
    if (a.has(t)) return a;
    for (a.set(t, null), n = n.getElementsByTagName(t), s = 0; s < n.length; s++) {
      var u = n[s];
      if (!(u[cl] || u[re] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = u.getAttribute(e) || "";
        f = t + f;
        var p = a.get(f);
        p ? p.push(u) : a.set(f, [u]);
      }
    }
    return a;
  }
  function uf(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function VE(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function $y(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function t0(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function e0(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function n0(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += e0(e), t.suspenseyImages.push(e)), t = BE.bind(t), e.decode().then(t, t));
  }
  function wE(t, e, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = qi(a.href), u = e.querySelector(
          Fl(s)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = kl.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = u, ie(u);
          return;
        }
        u = e.ownerDocument || e, a = ky(a), (s = Pe.get(s)) && lf(a, s), u = u.createElement("link"), ie(u);
        var f = u;
        f._p = new Promise(function(p, T) {
          f.onload = p, f.onerror = T;
        }), me(u, "link", a), n.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = kl.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var ju = 0;
  function UE(t, e) {
    return t.stylesheets && t.count === 0 && Gu(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (t.stylesheets && Gu(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && ju === 0 && (ju = 62500 * $T());
      var s = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Gu(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > ju ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(s);
      };
    } : null;
  }
  function a0(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Gu(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function kl() {
    this.count--, a0(this);
  }
  function BE() {
    this.imgCount--, a0(this);
  }
  var Yu = null;
  function Gu(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Yu = /* @__PURE__ */ new Map(), e.forEach(LE, t), Yu = null, kl.call(t));
  }
  function LE(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Yu.get(t);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Yu.set(t, n);
        for (var s = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < s.length; u++) {
          var f = s[u];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), a = f);
        }
        a && n.set(null, a);
      }
      s = e.instance, f = s.getAttribute("data-precedence"), u = n.get(f) || a, u === a && n.set(null, s), n.set(f, s), this.count++, a = kl.bind(this), s.addEventListener("load", a), s.addEventListener("error", a), u ? u.parentNode.insertBefore(s, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(s, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Zi = {
    $$typeof: J,
    Provider: null,
    Consumer: null,
    _currentValue: Xt,
    _currentValue2: Xt,
    _threadCount: 0
  };
  function HE(t, e, n, a, s, u, f, p, T) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Yo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yo(0), this.hiddenUpdates = Yo(null), this.identifierPrefix = a, this.onUncaughtError = s, this.onCaughtError = u, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function i0(t, e, n, a, s, u, f, p, T, O, V, j) {
    return t = new HE(
      t,
      e,
      n,
      f,
      T,
      O,
      V,
      j,
      p
    ), e = 1, u === !0 && (e |= 24), u = Ae(3, null, null, e), t.current = u, u.stateNode = t, e = Er(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: e
    }, Cr(u), t;
  }
  function l0(t) {
    return t ? (t = yi, t) : yi;
  }
  function s0(t, e, n, a, s, u) {
    s = l0(s), a.context === null ? a.context = s : a.pendingContext = s, a = na(e), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = aa(t, a, e), n !== null && (Oe(n, t, e), Ol(n, t, e));
  }
  function u0(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function of(t, e) {
    u0(t, e), (t = t.alternate) && u0(t, e);
  }
  function o0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = za(t, 67108864);
      e !== null && Oe(e, t, 67108864), of(t, 67108864);
    }
  }
  function r0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = He();
      e = Go(e);
      var n = za(t, e);
      n !== null && Oe(n, t, e), of(t, e);
    }
  }
  var Qi = !0;
  function jE(t, e, n, a) {
    var s = it.T;
    it.T = null;
    var u = ft.p;
    try {
      ft.p = 2, rf(t, e, n, a);
    } finally {
      ft.p = u, it.T = s;
    }
  }
  function YE(t, e, n, a) {
    var s = it.T;
    it.T = null;
    var u = ft.p;
    try {
      ft.p = 8, rf(t, e, n, a);
    } finally {
      ft.p = u, it.T = s;
    }
  }
  function rf(t, e, n, a) {
    if (Qi) {
      var s = cf(a);
      if (s === null)
        Xc(
          t,
          e,
          a,
          qu,
          n
        ), f0(t, a);
      else if (qE(
        s,
        t,
        e,
        n,
        a
      ))
        a.stopPropagation();
      else if (f0(t, a), e & 4 && -1 < GE.indexOf(t)) {
        for (; s !== null; ) {
          var u = li(s);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var f = Ca(u.pendingLanes);
                  if (f !== 0) {
                    var p = u;
                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; f; ) {
                      var T = 1 << 31 - Ne(f);
                      p.entanglements[1] |= T, f &= ~T;
                    }
                    Mn(u), (Nt & 6) === 0 && (Ou = xe() + 500, Xl(0));
                  }
                }
                break;
              case 31:
              case 13:
                p = za(u, 2), p !== null && Oe(p, u, 2), zu(), of(u, 2);
            }
          if (u = cf(a), u === null && Xc(
            t,
            e,
            a,
            qu,
            n
          ), u === s) break;
          s = u;
        }
        s !== null && a.stopPropagation();
      } else
        Xc(
          t,
          e,
          a,
          null,
          n
        );
    }
  }
  function cf(t) {
    return t = Fo(t), ff(t);
  }
  var qu = null;
  function ff(t) {
    if (qu = null, t = Da(t), t !== null) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = d(e), t !== null) return t;
          t = null;
        } else if (n === 31) {
          if (t = m(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return qu = t, null;
  }
  function c0(t) {
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
      case "fullscreenerror":
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
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch ($1()) {
          case Ph:
            return 2;
          case kh:
            return 8;
          case Es:
          case tS:
            return 32;
          case Ih:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var hf = !1, pa = null, ya = null, ga = null, Il = /* @__PURE__ */ new Map(), Wl = /* @__PURE__ */ new Map(), va = [], GE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function f0(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        pa = null;
        break;
      case "dragenter":
      case "dragleave":
        ya = null;
        break;
      case "mouseover":
      case "mouseout":
        ga = null;
        break;
      case "pointerover":
      case "pointerout":
        Il.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Wl.delete(e.pointerId);
    }
  }
  function $l(t, e, n, a, s, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [s]
    }, e !== null && (e = li(e), e !== null && o0(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, s !== null && e.indexOf(s) === -1 && e.push(s), t);
  }
  function qE(t, e, n, a, s) {
    switch (e) {
      case "focusin":
        return pa = $l(
          pa,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "dragenter":
        return ya = $l(
          ya,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "mouseover":
        return ga = $l(
          ga,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "pointerover":
        var u = s.pointerId;
        return Il.set(
          u,
          $l(
            Il.get(u) || null,
            t,
            e,
            n,
            a,
            s
          )
        ), !0;
      case "gotpointercapture":
        return u = s.pointerId, Wl.set(
          u,
          $l(
            Wl.get(u) || null,
            t,
            e,
            n,
            a,
            s
          )
        ), !0;
    }
    return !1;
  }
  function h0(t) {
    var e = Da(t.target);
    if (e !== null) {
      var n = h(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = d(n), e !== null) {
            t.blockedOn = e, id(t.priority, function() {
              r0(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = m(n), e !== null) {
            t.blockedOn = e, id(t.priority, function() {
              r0(n);
            });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Xu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = cf(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Jo = a, n.target.dispatchEvent(a), Jo = null;
      } else
        return e = li(n), e !== null && o0(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function d0(t, e, n) {
    Xu(t) && n.delete(e);
  }
  function XE() {
    hf = !1, pa !== null && Xu(pa) && (pa = null), ya !== null && Xu(ya) && (ya = null), ga !== null && Xu(ga) && (ga = null), Il.forEach(d0), Wl.forEach(d0);
  }
  function Zu(t, e) {
    t.blockedOn === e && (t.blockedOn = null, hf || (hf = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      XE
    )));
  }
  var Qu = null;
  function m0(t) {
    Qu !== t && (Qu = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Qu === t && (Qu = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], a = t[e + 1], s = t[e + 2];
          if (typeof a != "function") {
            if (ff(a || n) === null)
              continue;
            break;
          }
          var u = li(n);
          u !== null && (t.splice(e, 3), e -= 3, Kr(
            u,
            {
              pending: !0,
              data: s,
              method: n.method,
              action: a
            },
            a,
            s
          ));
        }
      }
    ));
  }
  function Ki(t) {
    function e(T) {
      return Zu(T, t);
    }
    pa !== null && Zu(pa, t), ya !== null && Zu(ya, t), ga !== null && Zu(ga, t), Il.forEach(e), Wl.forEach(e);
    for (var n = 0; n < va.length; n++) {
      var a = va[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < va.length && (n = va[0], n.blockedOn === null); )
      h0(n), n.blockedOn === null && va.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var s = n[a], u = n[a + 1], f = s[be] || null;
        if (typeof u == "function")
          f || m0(n);
        else if (f) {
          var p = null;
          if (u && u.hasAttribute("formAction")) {
            if (s = u, f = u[be] || null)
              p = f.formAction;
            else if (ff(s) !== null) continue;
          } else p = f.action;
          typeof p == "function" ? n[a + 1] = p : (n.splice(a, 3), a -= 3), m0(n);
        }
      }
  }
  function p0() {
    function t(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(f) {
            return s = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      s !== null && (s(), s = null), a || setTimeout(n, 20);
    }
    function n() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, s = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), s !== null && (s(), s = null);
      };
    }
  }
  function df(t) {
    this._internalRoot = t;
  }
  Ku.prototype.render = df.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var n = e.current, a = He();
    s0(n, a, t, e, null, null);
  }, Ku.prototype.unmount = df.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      s0(t.current, 2, null, t, null, null), zu(), e[ii] = null;
    }
  };
  function Ku(t) {
    this._internalRoot = t;
  }
  Ku.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = ad();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < va.length && e !== 0 && e < va[n].priority; n++) ;
      va.splice(n, 0, t), n === 0 && h0(t);
    }
  };
  var y0 = l.version;
  if (y0 !== "19.3.1")
    throw Error(
      r(
        527,
        y0,
        "19.3.1"
      )
    );
  ft.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = S(e), t = t !== null ? g(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var ZE = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: it,
    reconcilerVersion: "19.3.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ju = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ju.isDisabled && Ju.supportsFiber)
      try {
        ul = Ju.inject(
          ZE
        ), ze = Ju;
      } catch {
      }
  }
  return ts.createRoot = function(t, e) {
    if (!c(t)) throw Error(r(299));
    var n = !1, a = "", s = lp, u = sp, f = up;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (s = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError)), e = i0(
      t,
      1,
      !1,
      null,
      null,
      n,
      a,
      null,
      s,
      u,
      f,
      p0
    ), t[ii] = e.current, qc(t), new df(e);
  }, ts.hydrateRoot = function(t, e, n) {
    if (!c(t)) throw Error(r(299));
    var a = !1, s = "", u = lp, f = sp, p = up, T = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (p = n.onRecoverableError), n.formState !== void 0 && (T = n.formState)), e = i0(
      t,
      1,
      !0,
      e,
      n ?? null,
      a,
      s,
      T,
      u,
      f,
      p,
      p0
    ), e.context = l0(null), n = e.current, a = He(), a = Go(a), s = na(a), s.callback = null, aa(n, s, a), n = a, e.current.lanes = n, rl(e, n), Mn(e), t[ii] = e.current, qc(t), new Ku(e);
  }, ts.version = "19.3.1", ts;
}
var M0;
function $E() {
  if (M0) return pf.exports;
  M0 = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), pf.exports = WE(), pf.exports;
}
var tb = $E(), Sf = { exports: {} }, es = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var C0;
function eb() {
  if (C0) return es;
  C0 = 1;
  var i = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function o(r, c, h) {
    var d = null;
    if (h !== void 0 && (d = "" + h), c.key !== void 0 && (d = "" + c.key), "key" in c) {
      h = {};
      for (var m in c)
        m !== "key" && (h[m] = c[m]);
    } else h = c;
    return c = h.ref, {
      $$typeof: i,
      type: r,
      key: d,
      ref: c !== void 0 ? c : null,
      props: h
    };
  }
  return es.Fragment = l, es.jsx = o, es.jsxs = o, es;
}
var D0;
function nb() {
  return D0 || (D0 = 1, Sf.exports = eb()), Sf.exports;
}
var Xn = nb();
const ch = /* @__PURE__ */ Q.createContext({});
function Do(i) {
  const l = Q.useRef(null);
  return l.current === null && (l.current = i()), l.current;
}
const ab = typeof window < "u", os = ab ? Q.useLayoutEffect : Q.useEffect, Oo = /* @__PURE__ */ Q.createContext(null);
function fh(i, l) {
  i.indexOf(l) === -1 && i.push(l);
}
function mo(i, l) {
  const o = i.indexOf(l);
  o > -1 && i.splice(o, 1);
}
const Dn = (i, l, o) => o > l ? l : o < i ? i : o, fn = {}, hh = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i), ov = (i) => typeof i == "object" && i !== null, dh = (i) => /^0[^.\s]+$/u.test(i);
// @__NO_SIDE_EFFECTS__
function ib(i) {
  let l;
  return () => (l === void 0 && (l = i()), l);
}
const cn = /* @__NO_SIDE_EFFECTS__ */ (i) => i, tl = (...i) => i.reduce((l, o) => (r) => o(l(r))), $a = /* @__NO_SIDE_EFFECTS__ */ (i, l, o) => {
  const r = l - i;
  return r ? (o - i) / r : 1;
};
class po {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return fh(this.subscriptions, l), () => this.remove(l);
  }
  remove(l) {
    mo(this.subscriptions, l);
  }
  notify(l, o, r) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1)
        this.subscriptions[0](l, o, r);
      else
        for (let h = 0; h < c; h++) {
          const d = this.subscriptions[h];
          d && d(l, o, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ke = /* @__NO_SIDE_EFFECTS__ */ (i) => i * 1e3, Ye = /* @__NO_SIDE_EFFECTS__ */ (i) => i / 1e3, rv = /* @__NO_SIDE_EFFECTS__ */ (i, l) => l ? i * (1e3 / l) : 0, Tf = (i, l, o) => i * (3 * (1 - i) * ((1 - i) * l + i * o) + i * i);
// @__NO_SIDE_EFFECTS__
function ys(i, l, o, r) {
  return i === l && o === r ? cn : (c) => {
    let h = 0, d = 1, m = c;
    for (let v = 0; ; v++) {
      m >= h && m <= d || (m = (h + d) / 2);
      const S = Tf(m, i, o) - c;
      if (S * S < 1e-28 || v === 40)
        break;
      S > 0 ? d = m : h = m, m -= S * 1e-7 / (Tf(m + 1e-7, i, o) - c - S);
    }
    return Tf(m, l, r);
  };
}
const cv = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => l <= 0.5 ? i(2 * l) / 2 : (2 - i(2 * (1 - l))) / 2, fv = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => 1 - i(1 - l), hv = /* @__PURE__ */ ys(0.33, 1.53, 0.69, 0.99), mh = /* @__PURE__ */ fv(hv), dv = /* @__PURE__ */ cv(mh), mv = (i) => i >= 1 ? 1 : (i *= 2) < 1 ? 0.5 * mh(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1))), ph = (i) => 1 - Math.sin(Math.acos(i)), pv = /* @__PURE__ */ fv(ph), yv = /* @__PURE__ */ cv(ph), lb = /* @__PURE__ */ ys(0.42, 0, 1, 1), sb = /* @__PURE__ */ ys(0, 0, 0.58, 1), yh = /* @__PURE__ */ ys(0.42, 0, 0.58, 1), ub = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] != "number", gh = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] == "number", ob = {
  linear: cn,
  easeIn: lb,
  easeInOut: yh,
  easeOut: sb,
  circIn: ph,
  circInOut: yv,
  circOut: pv,
  backIn: mh,
  backInOut: dv,
  backOut: hv,
  anticipate: mv
}, rb = (i) => typeof i == "string", O0 = (i) => {
  if (/* @__PURE__ */ gh(i)) {
    const [l, o, r, c] = i;
    return /* @__PURE__ */ ys(l, o, r, c);
  } else if (rb(i))
    return ob[i];
  return i;
}, ne = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
};
let eo;
function cb() {
  eo = void 0;
}
const Qt = {
  now: () => (eo === void 0 && Qt.set(ne.isProcessing || fn.useManualTiming ? ne.timestamp : performance.now()), eo),
  set: (i) => {
    eo = i, queueMicrotask(cb);
  }
}, $i = (i) => Math.round(i * 1e5) / 1e5, gv = (i) => (l) => typeof l == "string" && l.startsWith(i), vv = /* @__PURE__ */ gv("--"), fb = /* @__PURE__ */ gv("var(--"), Ro = (i) => fb(i) ? hb.test(i.split("/*")[0].trim()) : !1, hb = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Ef(i) {
  return typeof i != "string" ? !1 : i.split("/*")[0].includes("var(--");
}
const il = {
  test: (i) => typeof i == "number",
  parse: parseFloat,
  transform: (i) => i
}, rs = {
  ...il,
  transform: (i) => Dn(0, 1, i)
}, Fu = {
  ...il,
  default: 1
}, vh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function db(i) {
  return i == null;
}
const mb = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Sh = (i, l) => (o) => !!(typeof o == "string" && mb.test(o) && o.startsWith(i) || l && !db(o) && Object.prototype.hasOwnProperty.call(o, l)), Sv = (i, l, o) => (r) => {
  if (typeof r != "string")
    return r;
  const [c, h, d, m] = r.match(vh);
  return {
    [i]: parseFloat(c),
    [l]: parseFloat(h),
    [o]: parseFloat(d),
    alpha: m !== void 0 ? parseFloat(m) : 1
  };
}, pb = (i) => Dn(0, 255, i), bf = {
  ...il,
  transform: (i) => Math.round(pb(i))
}, Pa = {
  test: /* @__PURE__ */ Sh("rgb", "red"),
  parse: /* @__PURE__ */ Sv("red", "green", "blue"),
  transform: ({ red: i, green: l, blue: o, alpha: r = 1 }) => "rgba(" + bf.transform(i) + ", " + bf.transform(l) + ", " + bf.transform(o) + ", " + $i(rs.transform(r)) + ")"
}, Pu = (i, l, o) => {
  const r = i.substring(1 + l * o, 1 + (l + 1) * o);
  return o > 1 ? r : r + r;
};
function yb(i) {
  const l = i.length > 5 ? 2 : 1, o = Pu(i, 3, l);
  return {
    red: parseInt(Pu(i, 0, l), 16),
    green: parseInt(Pu(i, 1, l), 16),
    blue: parseInt(Pu(i, 2, l), 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const jf = {
  test: /* @__PURE__ */ Sh("#"),
  parse: yb,
  transform: Pa.transform
}, gs = /* @__NO_SIDE_EFFECTS__ */ (i) => ({
  test: (l) => typeof l == "string" && l.endsWith(i) && l.split(" ").length === 1,
  parse: parseFloat,
  transform: (l) => `${l}${i}`
}), qn = /* @__PURE__ */ gs("deg"), Cn = /* @__PURE__ */ gs("%"), at = /* @__PURE__ */ gs("px"), gb = /* @__PURE__ */ gs("vh"), vb = /* @__PURE__ */ gs("vw"), R0 = {
  ...Cn,
  parse: (i) => Cn.parse(i) / 100,
  transform: (i) => Cn.transform(i * 100)
}, Ji = {
  test: /* @__PURE__ */ Sh("hsl", "hue"),
  parse: /* @__PURE__ */ Sv("hue", "saturation", "lightness"),
  transform: ({ hue: i, saturation: l, lightness: o, alpha: r = 1 }) => "hsla(" + Math.round(i) + ", " + Cn.transform($i(l)) + ", " + Cn.transform($i(o)) + ", " + $i(rs.transform(r)) + ")"
}, ae = {
  test: (i) => Pa.test(i) || jf.test(i) || Ji.test(i),
  parse: (i) => Pa.test(i) ? Pa.parse(i) : Ji.test(i) ? Ji.parse(i) : jf.parse(i),
  transform: (i) => typeof i == "string" ? i : i.hasOwnProperty("red") ? Pa.transform(i) : Ji.transform(i),
  getAnimatableNone: (i) => {
    const l = ae.parse(i);
    return l.alpha = 0, ae.transform(l);
  }
}, Sb = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, Tv = /* @__PURE__ */ new RegExp(vh.source), Ev = /* @__PURE__ */ new RegExp(Sb.source, "i");
function Tb(i) {
  return isNaN(i) && typeof i == "string" && (Tv.test(i) || Ev.test(i));
}
const bv = "number", Av = "color", Eb = "var", bb = "var(", x0 = "${}", Ab = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)(?![a-z]*\()/giu;
function Mb(i) {
  const l = i.toString();
  return Tv.test(l) || Ev.test(l);
}
function cs(i) {
  const l = i.toString(), o = [], r = {
    color: [],
    number: [],
    var: []
  }, c = [];
  let h = 0;
  const m = l.replace(Ab, (v) => (ae.test(v) ? (r.color.push(h), c.push(Av), o.push(ae.parse(v))) : v.startsWith(bb) ? (r.var.push(h), c.push(Eb), o.push(v)) : (r.number.push(h), c.push(bv), o.push(parseFloat(v))), ++h, x0)).split(x0);
  return { values: o, split: m, indexes: r, types: c };
}
function Cb(i) {
  return cs(i).values;
}
function Th({ split: i, types: l }) {
  const o = i.length;
  return (r) => {
    let c = "";
    for (let h = 0; h < o; h++)
      if (c += i[h], r[h] !== void 0) {
        const d = l[h];
        d === bv ? c += $i(r[h]) : d === Av ? c += ae.transform(r[h]) : c += r[h];
      }
    return c;
  };
}
function Db(i) {
  return Th(cs(i));
}
const Ob = (i) => typeof i == "number" ? 0 : ae.test(i) ? ae.getAnimatableNone(i) : i, Rb = (i, l) => typeof i == "number" ? l?.trim().endsWith("/") ? i : 0 : Ob(i);
function xb(i) {
  const l = cs(i);
  return Th(l)(l.values.map((r, c) => Rb(r, l.split[c])));
}
const Ie = {
  test: Tb,
  parse: Cb,
  createTransformer: Db,
  getAnimatableNone: xb
};
function Af(i, l, o) {
  return o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? i + (l - i) * 6 * o : o < 1 / 2 ? l : o < 2 / 3 ? i + (l - i) * (2 / 3 - o) * 6 : i;
}
function zb({ hue: i, saturation: l, lightness: o, alpha: r }) {
  i /= 360, l /= 100, o /= 100;
  let c = 0, h = 0, d = 0;
  if (!l)
    c = h = d = o;
  else {
    const m = o < 0.5 ? o * (1 + l) : o + l - o * l, v = 2 * o - m;
    c = Af(v, m, i + 1 / 3), h = Af(v, m, i), d = Af(v, m, i - 1 / 3);
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(h * 255),
    blue: Math.round(d * 255),
    alpha: r
  };
}
function yo(i, l) {
  return (o) => o > 0 ? l : i;
}
const Ht = (i, l, o) => i + (l - i) * o, Mf = (i, l, o) => {
  const r = i * i, c = o * (l * l - r) + r;
  return c < 0 ? 0 : Math.sqrt(c);
}, Nb = [jf, Pa, Ji], _b = (i) => Nb.find((l) => l.test(i));
function z0(i) {
  const l = _b(i);
  if (!l)
    return !1;
  let o = l.parse(i);
  return l === Ji && (o = zb(o)), o;
}
const N0 = (i, l) => {
  const o = z0(i), r = z0(l);
  if (!o || !r)
    return yo(i, l);
  const c = { ...o };
  return (h) => (c.red = Mf(o.red, r.red, h), c.green = Mf(o.green, r.green, h), c.blue = Mf(o.blue, r.blue, h), c.alpha = Ht(o.alpha, r.alpha, h), Pa.transform(c));
}, Yf = /* @__PURE__ */ new Set(["none", "hidden"]);
function Vb(i, l) {
  return Yf.has(i) ? (o) => o <= 0 ? i : l : (o) => o >= 1 ? l : i;
}
function wb(i, l) {
  return (o) => Ht(i, l, o);
}
function Eh(i) {
  return typeof i == "number" ? wb : typeof i == "string" ? Ro(i) ? yo : ae.test(i) ? N0 : Lb : Array.isArray(i) ? Mv : typeof i == "object" ? ae.test(i) ? N0 : Ub : yo;
}
function Mv(i, l) {
  const o = [...i], r = o.length, c = i.map((h, d) => Eh(h)(h, l[d]));
  return (h) => {
    for (let d = 0; d < r; d++)
      o[d] = c[d](h);
    return o;
  };
}
function Ub(i, l) {
  const o = { ...i, ...l }, r = {};
  for (const c in o)
    i[c] !== void 0 && l[c] !== void 0 && (r[c] = Eh(i[c])(i[c], l[c]));
  return (c) => {
    for (const h in r)
      o[h] = r[h](c);
    return o;
  };
}
function Bb(i, l) {
  const o = [], r = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const h = l.types[c], d = i.indexes[h][r[h]], m = i.values[d] ?? 0;
    o[c] = m, r[h]++;
  }
  return o;
}
const Lb = (i, l) => {
  const o = cs(i), r = cs(l);
  return o.indexes.var.length === r.indexes.var.length && o.indexes.color.length === r.indexes.color.length && o.indexes.number.length >= r.indexes.number.length ? Yf.has(i) && !r.values.length || Yf.has(l) && !o.values.length ? Vb(i, l) : tl(Mv(Bb(o, r), r.values), Th(r)) : yo(i, l);
}, _0 = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
function Hb(i, l) {
  const o = _0.exec(i);
  if (!o)
    return;
  const r = _0.exec(l);
  if (!r || o[2] !== r[2])
    return;
  const c = o[2], h = parseFloat(o[1]), d = parseFloat(r[1]);
  return (m) => $i(Ht(h, d, m)) + c;
}
function bh(i, l, o) {
  if (typeof i == "number" && typeof l == "number" && typeof o == "number")
    return Ht(i, l, o);
  if (typeof i == "string" && typeof l == "string") {
    const c = Hb(i, l);
    if (c)
      return c;
  }
  return Eh(i)(i, l);
}
const ku = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function jb(i) {
  let l = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), r = !1, c = !1, h;
  const d = /* @__PURE__ */ new Set();
  let m = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function v(g) {
    d.has(g) && (o.add(g), i()), (h = g)(m);
  }
  const S = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (g, y = !1, b = !1) => {
      const R = b && r, z = R ? l : o;
      return y && d.add(g), R && g !== h && z.delete(g), z.add(g), g;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (g) => {
      o.delete(g), d.delete(g);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (g) => {
      if (m = g, r) {
        c = !0;
        return;
      }
      r = !0;
      const y = l;
      l = o, o = y, l.forEach(v), l.clear(), h = void 0, r = !1, c && (c = !1, S.process(g));
    }
  };
  return S;
}
const Yb = 40;
function Cv(i, l, o = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
}) {
  let r = !1, c = !0;
  const h = () => r = !0, d = ku.reduce((k, $) => (k[$] = jb(h), k), {}), { setup: m, read: v, resolveKeyframes: S, preUpdate: g, update: y, preRender: b, render: R, postRender: z } = d, B = () => {
    const k = fn.useManualTiming, $ = k ? o.timestamp : performance.now();
    r = !1, k || (o.delta = c ? 1e3 / 60 : Math.max(Math.min($ - o.timestamp, Yb), 1)), o.timestamp = $, o.isProcessing = !0, m.process(o), v.process(o), S.process(o), g.process(o), y.process(o), b.process(o), R.process(o), z.process(o), o.isProcessing = !1, r && l && (c = !1, i(B));
  }, _ = () => {
    r = !0, c = !0, o.isProcessing || i(B);
  };
  return { schedule: ku.reduce((k, $) => {
    const et = d[$];
    return k[$] = (st, U = !1, G = !1) => (r || _(), et.schedule(st, U, G)), k;
  }, {}), cancel: (k) => {
    for (let $ = 0; $ < ku.length; $++)
      d[ku[$]].cancel(k);
  }, state: o, steps: d };
}
const { schedule: jt, cancel: Aa, steps: Cf } = /* @__PURE__ */ Cv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : cn, !0, ne), Dv = (i) => {
  const l = ({ timestamp: o }) => i(o);
  return {
    start: (o = !0) => jt.update(l, o),
    stop: () => Aa(l),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ne.isProcessing ? ne.timestamp : Qt.now()
  };
}, Ov = (i, l, o = 10) => {
  let r = "";
  const c = Math.max(Math.round(l / o), 2);
  for (let h = 0; h < c; h++)
    r += Math.round(i(h / (c - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, Ah = 2e4;
function Mh(i, l = 50, o = Ah, r) {
  let c = 0, h = i.next(c);
  for (; !h.done && c < o; )
    c += l, h = i.next(c);
  return c >= o ? 1 / 0 : c;
}
function Gb(i, l = 100, o) {
  const { keyframes: r, velocity: c } = i, h = r && r[r.length - 1] - r[0], d = o({
    ...i,
    velocity: c && h ? c * l / h : c,
    keyframes: [0, l]
  }), m = Math.min(Mh(d), Ah);
  return {
    type: "keyframes",
    ease: (v) => d.next(m * v).value / l,
    duration: /* @__PURE__ */ Ye(m)
  };
}
const V0 = 100, w0 = 10, qb = 1, Xb = 800, Rv = 0.3, Zb = 0.3, Qb = 0.01, Kb = 2, Jb = 5e-3, Fb = 0.5, Pb = 0.01, kb = 10, U0 = 0.05, xv = (i) => i < 0 ? 1 / Math.max(1 + i, U0) : Math.max(1 - i, U0);
function zv(i, l) {
  if (!(i > 1))
    return 1;
  const o = Math.sqrt(i * i - 1), r = i - o, c = i + o, h = 2 * o * Math.exp(-l) * (1 + l);
  return Nv((d) => c * Math.exp(-r * d) - r * Math.exp(-c * d) - h, (d) => Math.exp(-c * d) - Math.exp(-r * d), l) / l;
}
function Gf(i, l) {
  return i * Math.sqrt(1 - l * l);
}
const Ib = 12;
function Nv(i, l, o) {
  let r = o;
  for (let c = 1; c < Ib; c++)
    r = r - i(r) / l(r);
  return r;
}
const Df = 1e-3;
function Wb({ duration: i = Xb, bounce: l = Rv }) {
  let o, r;
  const c = xv(l);
  i = Dn(Pb, kb, /* @__PURE__ */ Ye(i)), c < 1 ? (o = (S) => {
    const g = S * c, y = g * i, b = Gf(S, c), R = Math.exp(-y);
    return Df - g / b * R;
  }, r = (S) => {
    const y = S * c * i, b = c * c * S * S * i, R = Math.exp(-y), z = Gf(S * S, c);
    return (-o(S) + Df > 0 ? -1 : 1) * -b * R / z;
  }) : (o = (S) => {
    const g = Math.exp(-S * i), y = S * i + 1;
    return -Df + g * y;
  }, r = (S) => {
    const g = Math.exp(-S * i), y = -S * (i * i);
    return g * y;
  });
  const h = 5 / i, d = Nv(o, r, h), m = d * zv(c, d * i), v = m * m;
  return {
    stiffness: v,
    damping: c * 2 * Math.sqrt(v),
    duration: /* @__PURE__ */ ke(i)
  };
}
const qf = (i, l) => (l ? i >= 0 : i > 0) && i < 1 / 0;
function Of(i, l) {
  if (qf(i, l))
    return i;
}
function $b(i) {
  const l = Of(i.stiffness), o = Of(i.damping, !0), r = Of(i.mass), c = {
    ...i,
    stiffness: l ?? V0,
    damping: o ?? w0,
    mass: r ?? qb,
    isResolvedFromDuration: !1,
    // stiffness/damping/mass overrides duration/bounce
    isTimeDefined: (l ?? o ?? r) === void 0 && (i.duration !== void 0 || i.bounce !== void 0)
  };
  if (c.isTimeDefined) {
    if (i.visualDuration) {
      const h = xv(i.bounce || 0), d = 2 * Math.PI / (i.visualDuration * 1.2) * zv(h, 2 * Math.PI / 1.2);
      c.stiffness = d * d, c.damping = 2 * h * Math.sqrt(c.stiffness);
    } else
      Object.assign(c, Wb(c)), c.isResolvedFromDuration = !0;
    (!qf(c.stiffness) || !qf(c.damping, !0)) && (c.stiffness = V0, c.damping = w0);
  }
  return c;
}
function B0(i = Zb, l = Rv) {
  const o = typeof i != "object" ? {
    visualDuration: i,
    keyframes: [0, 1],
    bounce: l
  } : i, r = o.keyframes[0], c = o.keyframes[o.keyframes.length - 1], h = { done: !1, value: r }, { stiffness: d, damping: m, mass: v, duration: S, isResolvedFromDuration: g, isTimeDefined: y } = $b({ ...o }), b = (U) => y ? 0 : -/* @__PURE__ */ Ye(U), R = m / (2 * Math.sqrt(d * v)), z = /* @__PURE__ */ Ye(Math.sqrt(d / v)), B = R * z, _ = {
    target: c,
    delta: c - r,
    velocity: b(o.velocity || 0) || 0,
    restSpeed: 0,
    restDelta: 0
  }, X = () => {
    const U = Math.abs(_.delta) < 5;
    _.restSpeed = o.restSpeed || (U ? Qb : Kb), _.restDelta = o.restDelta || (U ? Jb : Fb);
  };
  X();
  let K, k, $;
  if (R < 1) {
    const U = Gf(z, R), G = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
    $ = () => {
      G.A = (_.velocity + B * _.delta) / U, G.sinC = B * G.A + _.delta * U, G.cosC = B * _.delta - G.A * U;
    };
    const P = (ut) => {
      ut !== G.t && (G.t = ut, G.env = Math.exp(-B * ut), G.sin = Math.sin(U * ut), G.cos = Math.cos(U * ut));
    };
    K = (ut) => (P(ut), _.target - G.env * (G.A * G.sin + _.delta * G.cos)), k = (ut) => (P(ut), G.env * (G.sinC * G.sin + G.cosC * G.cos));
  } else if (R === 1) {
    K = (G) => _.target - Math.exp(-z * G) * (_.delta + (_.velocity + z * _.delta) * G);
    const U = { C: 0 };
    $ = () => {
      U.C = _.velocity + z * _.delta;
    }, k = (G) => Math.exp(-z * G) * (z * U.C * G - _.velocity);
  } else {
    const U = z * Math.sqrt(R * R - 1), G = B - U, P = B + U, ut = U < 1 || y ? 1 / 0 : 300 / U, mt = (Ot, St) => Math.exp(St > ut ? (B - Ot) * ut - B * St : -Ot * St), dt = { S: 0, F: 0 };
    $ = () => {
      const Ot = (_.velocity + B * _.delta) / U;
      dt.S = (_.delta + Ot) / 2, dt.F = (_.delta - Ot) / 2;
    }, K = (Ot) => _.target - dt.S * mt(G, Ot) - dt.F * mt(P, Ot), k = (Ot) => G * dt.S * mt(G, Ot) + P * dt.F * mt(P, Ot);
  }
  $();
  const et = g && S || null, st = {
    calculatedDuration: et,
    /**
     * Aim the spring at a new target from its current position and
     * velocity, reusing the resolved physics and closures.
     */
    retarget: (U, G) => {
      _.target = U[U.length - 1], _.delta = _.target - U[0], _.velocity = b(G), o.restSpeed && o.restDelta || X(), st.calculatedDuration = et, h.done = !1, $();
    },
    velocity: (U) => /* @__PURE__ */ ke(k(U)),
    next: (U) => {
      const G = K(U);
      if (g)
        h.done = U >= S;
      else {
        const P = /* @__PURE__ */ ke(k(U));
        h.done = Math.abs(P) <= _.restSpeed && Math.abs(_.target - G) <= _.restDelta;
      }
      return h.value = h.done ? _.target : G, h;
    },
    toString: () => {
      const U = Math.min(Mh(st), Ah), G = Ov((P) => st.next(U * P).value, U, 30);
      return U + "ms " + G;
    },
    toTransition: () => {
    }
  };
  return st;
}
const _v = /* @__PURE__ */ Object.assign(B0, {
  applyToOptions: (i) => {
    const l = Gb(i, 100, B0);
    return i.ease = l.ease, i.duration = /* @__PURE__ */ ke(l.duration), i.type = "keyframes", i;
  }
});
function go({ keyframes: i, velocity: l = 0, power: o = 0.8, timeConstant: r = 325, bounceDamping: c = 10, bounceStiffness: h = 500, modifyTarget: d, min: m, max: v, restDelta: S = 0.5, restSpeed: g }) {
  const y = i[0], b = {
    done: !1,
    value: y
  }, R = (U) => U < m || U > v, z = (U) => m === void 0 ? v : v === void 0 || Math.abs(m - U) < Math.abs(v - U) ? m : v;
  let B = o * l;
  const _ = y + B, X = d ? d(_) : _;
  X !== _ && (B = X - y);
  const K = (U) => -B * Math.exp(-U / r), k = (U) => {
    const G = K(U);
    b.done = Math.abs(G) <= S, b.value = b.done ? X : U ? X + G : y;
  };
  let $, et;
  const st = (U) => {
    R(b.value) && ($ = U, et = _v({
      keyframes: [b.value, z(b.value)],
      /**
       * The friction curve is target + calcDelta(t), so its exact
       * derivative is -calcDelta(t) / timeConstant in units/ms,
       * converted here to the units/second expected by spring.
       */
      velocity: -K(U) / r * 1e3,
      damping: c,
      stiffness: h,
      restDelta: S,
      restSpeed: g
    }));
  };
  return st(0), {
    calculatedDuration: null,
    next: (U) => {
      let G = !1;
      return !et && $ === void 0 && (G = !0, k(U), st(U)), $ !== void 0 && U >= $ ? et.next(U - $) : (!G && k(U), b);
    }
  };
}
function t2(i, l, o) {
  const r = [], c = o || fn.mix || bh, h = i.length - 1;
  for (let d = 0; d < h; d++) {
    let m = c(i[d], i[d + 1]);
    if (l) {
      const v = Array.isArray(l) ? l[d] || cn : l;
      m = tl(v, m);
    }
    r.push(m);
  }
  return r;
}
function e2(i, l, { clamp: o = !0, ease: r, mixer: c } = {}) {
  const h = i.length;
  if (h === 1)
    return () => l[0];
  if (h === 2 && l[0] === l[1])
    return () => l[1];
  const d = i[0] === i[1];
  i[0] > i[h - 1] && (i = [...i].reverse(), l = [...l].reverse());
  const m = t2(l, r, c), v = m.length, S = (g) => {
    if (d && g < i[0])
      return l[0];
    let y = 0;
    if (v > 1)
      for (; y < i.length - 2 && !(g < i[y + 1]); y++)
        ;
    const b = /* @__PURE__ */ $a(i[y], i[y + 1], g);
    return m[y](b);
  };
  return o ? (g) => S(Dn(i[0], i[h - 1], g)) : S;
}
function n2(i, l) {
  const o = i[i.length - 1];
  for (let r = 1; r <= l; r++) {
    const c = /* @__PURE__ */ $a(0, l, r);
    i.push(Ht(o, 1, c));
  }
}
function Vv(i) {
  const l = [0];
  return n2(l, i.length - 1), l;
}
function a2(i, l) {
  return i.map((o) => o * l);
}
function i2(i, l) {
  return i.map(() => l || yh).splice(0, i.length - 1);
}
function Ta({ duration: i = 300, keyframes: l, times: o, ease: r = "easeInOut" }) {
  const c = /* @__PURE__ */ ub(r) ? r.map(O0) : O0(r) || yh, h = {
    done: !1,
    value: l[0]
  };
  if (l.length === 2 && !Array.isArray(c) && (!o || o.length !== 2 || o[0] === 0 && o[1] === 1)) {
    const [v, S] = l, g = v === S ? void 0 : (fn.mix || bh)(v, S);
    return {
      calculatedDuration: i,
      next: (y) => (h.value = g ? g(c(i > 0 ? Dn(0, 1, y / i) : 1)) : S, h.done = y >= i, h)
    };
  }
  const d = a2(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    o && o.length === l.length ? o : Vv(l),
    i
  ), m = e2(d, l, {
    ease: Array.isArray(c) ? c : i2(l, c)
  });
  return {
    calculatedDuration: i,
    next: (v) => (h.value = m(v), h.done = v >= i, h)
  };
}
const l2 = 5;
function s2(i, l, o) {
  const r = Math.max(l - l2, 0);
  return /* @__PURE__ */ rv(o - i(r), l - r);
}
function u2(i, l, o = 0) {
  return l <= 0 ? o : i.velocity ? i.velocity(l) : s2((r) => i.next(r).value, l, i.next(l).value);
}
const o2 = (i) => i !== null;
function fs(i, { repeat: l, repeatType: o = "loop" }, r, c = 1) {
  const h = i.filter(o2), m = c < 0 || l && o !== "loop" && l % 2 === 1 ? 0 : h.length - 1;
  return !m || r === void 0 ? h[m] : r;
}
const r2 = {
  decay: go,
  inertia: go,
  tween: Ta,
  keyframes: Ta,
  spring: _v
};
function wv(i) {
  typeof i.type == "string" && (i.type = r2[i.type]);
}
const c2 = 40, Uv = (i, l) => l - i > c2 && !fn.useManualTiming ? l : i;
function Bv(i, l) {
  return {
    kind: i,
    animation: l,
    timestamp: Qt.now(),
    frameTimestamp: ne.timestamp,
    frameIsProcessing: ne.isProcessing
  };
}
function Lv(i, l, o) {
  const r = globalThis.__MOTION_INSPECT__;
  if (r)
    try {
      r({
        ...Bv("animation-start", i),
        options: o ? { ...l, ...o } : l
      });
    } catch {
    }
}
function f2(i, l) {
  const o = globalThis.__MOTION_INSPECT__;
  if (o)
    try {
      o({
        ...Bv("layout-animation-start", i),
        node: l
      });
    } catch {
    }
}
class Ch {
  constructor() {
    this.isResolved = !1;
  }
  get finished() {
    return this._finished || (this._finished = this.isResolved ? Promise.resolve() : new Promise((l) => {
      this._resolve = l;
    })), this._finished;
  }
  updateFinished() {
    this._finished = this._resolve = void 0, this.isResolved = !1;
  }
  notifyFinished() {
    this.isResolved = !0, this._resolve?.();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(l, o) {
    return this.finished.then(l, o);
  }
}
const h2 = (i) => i / 100, Xf = (i) => Math.round(i * 1e4) / 1e4;
class hs extends Ch {
  constructor(l) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: o } = this.options;
      o && o.updatedAt !== Qt.now() && this.tick(Qt.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = l, this.initAnimation(), this.play(), l.autoplay === !1 && this.pause(), Lv(this, this.options);
  }
  initAnimation() {
    const { options: l } = this;
    wv(l);
    const { type: o = Ta, repeat: r = 0, repeatDelay: c = 0, repeatType: h, velocity: d = 0 } = l;
    let { keyframes: m } = l;
    const v = o || Ta;
    v !== Ta && typeof m[0] != "number" && (this.mixKeyframes = tl(h2, bh(m[0], m[1])), m = [0, 100]);
    const S = v(m === l.keyframes ? l : { ...l, keyframes: m });
    h === "mirror" && (this.mirroredGenerator = v({
      ...l,
      keyframes: [...m].reverse(),
      velocity: -d
    })), S.calculatedDuration === null && (S.calculatedDuration = Mh(S));
    const { calculatedDuration: g } = S;
    this.calculatedDuration = g, this.resolvedDuration = g + c, this.totalDuration = this.resolvedDuration * (r + 1) - c, this.generator = S;
  }
  updateTime(l) {
    this.currentTime = this.holdTime ?? Math.round(l - this.startTime) * this.playbackSpeed;
  }
  tick(l, o = !1) {
    const { generator: r, totalDuration: c, calculatedDuration: h } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: d = 0, keyframes: m, type: v, onUpdate: S, finalKeyframe: g } = this.options;
    this.startTime === this.pendingStartTime && (this.startTime = Uv(this.startTime, l)), this.pendingStartTime = void 0, this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)), o ? this.currentTime = l : this.updateTime(l);
    const y = this.currentTime - d * (this.playbackSpeed >= 0 ? 1 : -1), b = this.playbackSpeed >= 0 ? y < 0 : y > c;
    this.currentTime = Math.max(y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    const R = this.generate(this.currentTime, b);
    let { done: z } = R;
    b || (z = this.playbackSpeed >= 0 ? h < 1 / 0 ? this.currentTime >= c : z : this.currentTime <= 0);
    const B = this.holdTime === null && (this.state === "finished" || this.state === "running" && z);
    return B && v !== go && (R.value = fs(m, this.options, g, this.speed)), S && S(R.value), B && this.finish(), R;
  }
  /**
   * This animation's time, including delay, at a timestamp.
   */
  at(l) {
    return this.holdTime ?? Xf((l - this.startTime) * this.playbackSpeed);
  }
  /**
   * The value at a timestamp, without changing this animation's state.
   * If resolved, it ends at the last resolved keyframe, which is in the
   * same unit as the others, rather than at finalKeyframe.
   */
  sampleAt(l, o) {
    const { options: r, totalDuration: c } = this, h = this.at(l) - (r.delay || 0);
    return h >= c && r.type !== go ? fs(r.keyframes, r, o ? void 0 : r.finalKeyframe) : this.generate(Math.max(h, 0), h < 0).value;
  }
  /**
   * The generator's state `currentTime` ms after the delay, without
   * changing the animation's own state.
   */
  generate(l, o) {
    const { generator: r, totalDuration: c, mixKeyframes: h, mirroredGenerator: d, resolvedDuration: m } = this, { keyframes: v, repeat: S, repeatType: g, repeatDelay: y } = this.options;
    let b = l, R = r;
    if (S) {
      const B = Math.min(l, c) / m;
      let _ = Math.floor(B), X = B % 1;
      !X && B >= 1 && (X = 1), X === 1 && _--, _ = Math.min(_, S + 1), !!(_ % 2) && (g === "reverse" ? (X = 1 - X, y && (X -= y / m)) : g === "mirror" && (R = d)), b = Dn(0, 1, X) * m;
    }
    let z;
    return o ? (this.delayState.value = v[0], z = this.delayState) : z = R.next(b), h && !o && (z.value = h(z.value)), z;
  }
  get duration() {
    return /* @__PURE__ */ Ye(this.calculatedDuration);
  }
  get iterationDuration() {
    return this.duration + /* @__PURE__ */ Ye(this.options.delay ?? 0);
  }
  get time() {
    return /* @__PURE__ */ Ye(this.currentTime);
  }
  set time(l) {
    l = /* @__PURE__ */ ke(l), this.currentTime = l, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = l, this.tick(l));
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    return u2(this.generator, this.currentTime, this.options.velocity);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const o = this.playbackSpeed !== l;
    o && this.driver && this.updateTime(Qt.now()), this.playbackSpeed = l, o && this.driver && (this.time = /* @__PURE__ */ Ye(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: l = Dv, startTime: o } = this.options;
    this.driver || (this.driver = l((c) => this.tick(c))), this.options.onPlay?.();
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime / (this.playbackSpeed || 1) : this.startTime || (this.startTime = o ?? (this.pendingStartTime = r)), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Qt.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.driver?.stop(), this.driver = void 0, this.startTime = this.holdTime = null;
  }
  sample(l) {
    return this.startTime = 0, this.tick(l, !0);
  }
  attachTimeline(l) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), l.observe(this);
  }
}
const d2 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function m2(i) {
  const [l, o] = i.slice(0, -1).split("(");
  if (l === "drop-shadow")
    return i;
  const [r] = o.match(vh) || [];
  if (!r)
    return i;
  const c = o.replace(r, "");
  let h = d2.has(l) ? 1 : 0;
  return r !== o && (h *= 100), l + "(" + h + c + ")";
}
const p2 = /\b([a-z-]*)\(.*?\)/gu, Zf = {
  ...Ie,
  getAnimatableNone: (i) => {
    const l = i.match(p2);
    return l ? l.map(m2).join(" ") : i;
  }
}, Qf = {
  ...Ie,
  getAnimatableNone: (i) => {
    const l = Ie.parse(i);
    return Ie.createTransformer(i)(l.map((r) => typeof r == "number" ? 0 : typeof r == "object" ? { ...r, alpha: 1 } : r));
  }
}, L0 = {
  ...il,
  transform: Math.round
}, Hv = {
  rotate: qn,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: qn,
  rotateX: qn,
  rotateY: qn,
  rotateZ: qn,
  scale: Fu,
  scaleX: Fu,
  scaleY: Fu,
  scaleZ: Fu,
  skew: qn,
  skewX: qn,
  skewY: qn,
  distance: at,
  translateX: at,
  translateY: at,
  translateZ: at,
  x: at,
  y: at,
  z: at,
  perspective: at,
  transformPerspective: at,
  opacity: rs,
  originX: R0,
  originY: R0,
  originZ: at
}, Dh = {
  // Border props
  borderWidth: at,
  borderTopWidth: at,
  borderRightWidth: at,
  borderBottomWidth: at,
  borderLeftWidth: at,
  borderRadius: at,
  borderTopLeftRadius: at,
  borderTopRightRadius: at,
  borderBottomRightRadius: at,
  borderBottomLeftRadius: at,
  // Positioning props
  width: at,
  maxWidth: at,
  height: at,
  maxHeight: at,
  top: at,
  right: at,
  bottom: at,
  left: at,
  inset: at,
  insetBlock: at,
  insetBlockStart: at,
  insetBlockEnd: at,
  insetInline: at,
  insetInlineStart: at,
  insetInlineEnd: at,
  // Spacing props
  padding: at,
  paddingTop: at,
  paddingRight: at,
  paddingBottom: at,
  paddingLeft: at,
  paddingBlock: at,
  paddingBlockStart: at,
  paddingBlockEnd: at,
  paddingInline: at,
  paddingInlineStart: at,
  paddingInlineEnd: at,
  margin: at,
  marginTop: at,
  marginRight: at,
  marginBottom: at,
  marginLeft: at,
  marginBlock: at,
  marginBlockStart: at,
  marginBlockEnd: at,
  marginInline: at,
  marginInlineStart: at,
  marginInlineEnd: at,
  // Typography
  fontSize: at,
  // Misc
  backgroundPositionX: at,
  backgroundPositionY: at,
  ...Hv,
  zIndex: L0,
  // SVG
  fillOpacity: rs,
  strokeOpacity: rs,
  numOctaves: L0
}, y2 = {
  ...Dh,
  // Color props
  color: ae,
  backgroundColor: ae,
  outlineColor: ae,
  fill: ae,
  stroke: ae,
  // Border props
  borderColor: ae,
  borderTopColor: ae,
  borderRightColor: ae,
  borderBottomColor: ae,
  borderLeftColor: ae,
  filter: Zf,
  WebkitFilter: Zf,
  mask: Qf,
  WebkitMask: Qf
}, jv = (i) => y2[i], g2 = /* @__PURE__ */ new Set([Zf, Qf]);
function Oh(i, l) {
  let o = jv(i);
  return g2.has(o) || (o = Ie), o.getAnimatableNone ? o.getAnimatableNone(l) : void 0;
}
function v2(i) {
  for (let l = 1; l < i.length; l++)
    i[l] ?? (i[l] = i[l - 1]);
}
const ka = (i) => i * 180 / Math.PI, Kf = (i) => {
  const l = ka(Math.atan2(i[1], i[0]));
  return Jf(l);
}, S2 = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scaleZ: () => 1,
  scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
  rotate: Kf,
  rotateZ: Kf,
  skewX: (i) => ka(Math.atan(i[1])),
  skewY: (i) => ka(Math.atan(i[2])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2
}, Jf = (i) => (i = i % 360, i < 0 && (i += 360), i), H0 = Kf, j0 = (i) => Math.hypot(i[0], i[1]), Y0 = (i) => Math.hypot(i[4], i[5]), T2 = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: j0,
  scaleY: Y0,
  scaleZ: (i) => Math.hypot(i[8], i[9], i[10]),
  scale: (i) => (j0(i) + Y0(i)) / 2,
  rotateX: (i) => Jf(ka(Math.atan2(i[6], i[5]))),
  rotateY: (i) => Jf(ka(Math.atan2(-i[2], i[0]))),
  rotateZ: H0,
  rotate: H0,
  skewX: (i) => ka(Math.atan(i[4])),
  skewY: (i) => ka(Math.atan(i[1])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2
};
function ds(i) {
  return i.includes("scale") ? 1 : 0;
}
function Rh(i, l) {
  if (!i || i === "none")
    return ds(l);
  const o = i.match(/^matrix(3d)?\(([-\d.e\s,]+)\)$/u);
  if (!o)
    return ds(l);
  const r = (o[1] ? T2 : S2)[l], c = o[2].split(",").map((h) => parseFloat(h));
  return typeof r == "function" ? r(c) : c[r];
}
const E2 = (i, l) => {
  const { transform: o = "none" } = getComputedStyle(i);
  return Rh(o, l);
}, Zn = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "scaleZ",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Ea = /* @__PURE__ */ new Set([...Zn, "pathRotation"]), G0 = (i) => i === il || i === at, b2 = /* @__PURE__ */ new Set(["x", "y", "z"]), A2 = /* @__PURE__ */ Zn.filter((i) => !b2.has(i));
function M2(i) {
  const l = [];
  return A2.forEach((o) => {
    const r = i.getValue(o);
    if (r !== void 0) {
      const c = r.get(), h = o.startsWith("scale") ? 1 : 0;
      if (c === h)
        return;
      l.push([o, c]), r.set(h);
    }
  }), l;
}
const C2 = /* @__PURE__ */ new Set(["bottom", "right"]);
function q0(i, l, o, r, c, h) {
  const d = parseFloat(i);
  if (!isNaN(d))
    return d;
  const { min: m, max: v } = l()[o], S = v - m;
  return h === "border-box" ? S : S - parseFloat(r) - parseFloat(c);
}
const X0 = ({ transform: i }) => Rh(i, "x"), Z0 = ({ transform: i }) => Rh(i, "y"), Rf = {
  // Dimensions
  width: ({ width: i, paddingLeft: l = "0", paddingRight: o = "0", boxSizing: r }, c) => q0(i, c, "x", l, o, r),
  height: ({ height: i, paddingTop: l = "0", paddingBottom: o = "0", boxSizing: r }, c) => q0(i, c, "y", l, o, r),
  top: ({ top: i }) => parseFloat(i),
  left: ({ left: i }) => parseFloat(i),
  bottom: ({ top: i }, l) => {
    const { y: o } = l();
    return parseFloat(i) + (o.max - o.min);
  },
  right: ({ left: i }, l) => {
    const { x: o } = l();
    return parseFloat(i) + (o.max - o.min);
  },
  // Transform, including translate longform names
  x: X0,
  y: Z0,
  translateX: X0,
  translateY: Z0
}, Ia = /* @__PURE__ */ new Set();
let Ff = !1, Pf = !1, kf = !1;
function Yv() {
  if (Pf) {
    const i = [], l = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
    Ia.forEach((c) => {
      c.needsMeasurement && (i.push(c), l.add(c.element), C2.has(c.name) && o.add(c.element));
    });
    const r = /* @__PURE__ */ new Map();
    o.forEach((c) => {
      const h = M2(c);
      h.length && (r.set(c, h), c.render());
    }), i.forEach((c) => c.measureInitialState()), l.forEach((c) => {
      c.render();
      const h = r.get(c);
      h && h.forEach(([d, m]) => {
        c.getValue(d)?.set(m);
      });
    }), i.forEach((c) => c.measureEndState()), i.forEach((c) => {
      c.suspendedScrollY !== void 0 && window.scrollTo(0, c.suspendedScrollY);
    });
  }
  Pf = !1, Ff = !1, Ia.forEach((i) => i.complete(kf)), Ia.clear();
}
function Gv() {
  Ia.forEach((i) => {
    i.readKeyframes(), i.needsMeasurement && (Pf = !0);
  });
}
function D2() {
  kf = !0, Gv(), Yv(), kf = !1;
}
function O2(i, l, o) {
  if (typeof i == "string") {
    if (hh(i) || dh(i))
      return parseFloat(i);
    if (!Ie.test(i) && Ie.test(o))
      return Oh(l, o);
  }
  return i ?? void 0;
}
class xh {
  constructor(l, o, r, c, h, d = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...l], this.onComplete = o, this.name = r, this.motionValue = c, this.element = h, this.isAsync = d;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Ia.add(this), Ff || (Ff = !0, jt.read(Gv), jt.resolveKeyframes(Yv))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: o, element: r, motionValue: c } = this;
    if (l[0] === null) {
      const h = c?.get(), d = l[l.length - 1];
      if (h !== void 0)
        l[0] = h;
      else if (r && o) {
        const m = O2(r.readValue(o, d), o, d);
        m !== void 0 && (l[0] = m);
      }
      l[0] === void 0 && (l[0] = d), c && h === void 0 && c.set(l[0]);
    }
    v2(l);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(l = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l), Ia.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Ia.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const R2 = (i) => i.startsWith("--");
function qv(i, l, o) {
  R2(l) ? i.style.setProperty(l, o) : i.style[l] = o;
}
const x2 = {};
function Xv(i, l) {
  const o = /* @__PURE__ */ ib(i);
  return () => x2[l] ?? o();
}
const z2 = /* @__PURE__ */ Xv(() => window.ScrollTimeline !== void 0, "scrollTimeline"), zh = /* @__PURE__ */ Xv(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Fi = ([i, l, o, r]) => `cubic-bezier(${i}, ${l}, ${o}, ${r})`, If = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Fi([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Fi([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Fi([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Fi([0.33, 1.53, 0.69, 0.99])
};
function Zv(i, l) {
  if (i)
    return typeof i == "function" ? zh() ? Ov(i, l) : "ease-out" : /* @__PURE__ */ gh(i) ? Fi(i) : Array.isArray(i) ? i.map((o) => Zv(o, l) || If.easeOut) : If[i];
}
function N2(i, l, o, { delay: r = 0, duration: c = 300, repeat: h = 0, repeatType: d = "loop", ease: m = "easeOut", times: v } = {}, S = void 0) {
  const g = {
    [l]: o
  };
  v && (g.offset = v);
  const y = Zv(m, c);
  Array.isArray(y) && (g.easing = y);
  const b = {
    delay: r,
    duration: c,
    easing: Array.isArray(y) ? "linear" : y,
    fill: "both",
    iterations: h + 1,
    direction: d === "reverse" ? "alternate" : "normal"
  };
  return S && (b.pseudoElement = S), i.animate(g, b);
}
function Qv(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function _2({ type: i, ...l }) {
  return Qv(i) && zh() ? i.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class Kv extends Ch {
  constructor(l) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !l)
      return;
    const { element: o, name: r, keyframes: c, pseudoElement: h, allowFlatten: d = !1, finalKeyframe: m, onComplete: v } = l;
    this.isPseudoElement = !!h, this.allowFlatten = d, this.options = l;
    const S = _2(l);
    this.animation = N2(o, r, c, S, h), S.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !h) {
        const g = fs(c, this.options, m, this.speed);
        this.updateMotionValue?.(g), qv(o, r, g), this.animation.cancel();
      }
      v?.(), this.notifyFinished();
    }, Lv(this, l, S);
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    this.isStopped || (this.isStopped = !0, !(this.state === "idle" || this.finishedTime !== null) && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || (this.animation.onfinish = null, this.cancel())));
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    const l = this.options?.element;
    !this.isPseudoElement && l?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const l = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ Ye(Number(l));
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Ye(l);
  }
  get time() {
    return /* @__PURE__ */ Ye(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    const o = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ ke(l), o && this.animation.pause();
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    l < 0 && (this.finishedTime = null), this.animation.playbackRate = l;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(l) {
    this.manualStartTime = this.animation.startTime = l;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: l, onAttach: o, observe: r }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, l && z2() ? (this.animation.timeline = l, o?.(this.animation), cn) : r(this);
  }
}
const Jv = {
  anticipate: mv,
  backInOut: dv,
  circInOut: yv
};
function V2(i) {
  return i in Jv;
}
function w2(i) {
  typeof i.ease == "string" && V2(i.ease) && (i.ease = Jv[i.ease]);
}
const vo = 10;
class U2 extends Kv {
  constructor(l) {
    w2(l), wv(l), super(l), l.startTime !== void 0 && l.autoplay !== !1 && (this.startTime = l.startTime), this.options = l;
  }
  /**
   * The animation's time now, in ms. Wall-clock rather than WAAPI's
   * currentTime while running, as under CPU load currentTime may not
   * reflect the actual elapsed time, causing incorrect sampling and
   * visual jumps.
   */
  elapsed() {
    return this.state === "running" ? (Qt.now() - this.startTime) * this.speed : this.time * 1e3;
  }
  /**
   * The value at a time, from a renderless JS animation.
   */
  sample(l) {
    if (!this.sampler) {
      const { motionValue: o, onUpdate: r, onComplete: c, onPlay: h, onStop: d, element: m, ...v } = this.options;
      this.sampler = new hs({ ...v, autoplay: !1 }), this.sampler.stop();
    }
    return this.sampler.sample(Math.max(0, l)).value;
  }
  /**
   * The value now, as WAAPI doesn't set the motion value while it runs.
   */
  liveValue() {
    const { state: l } = this;
    if (l === "running" || l === "paused")
      return this.sample(this.elapsed());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * sample a renderless JS animation twice to calculate its current
   * value, "previous" value, and therefore allow Motion to calculate
   * velocity for any subsequent animation.
   */
  updateMotionValue(l) {
    const { motionValue: o, element: r, name: c } = this.options;
    if (!o)
      return;
    if (l !== void 0) {
      o.set(l);
      return;
    }
    const { speed: h } = this, d = this.elapsed(), m = this.state === "running" && h ? Dn(0, vo, d) : 0, v = this.sample(d);
    r && c && qv(r, c, v), o.setWithVelocity(this.sample(d - m * Math.sign(h)), v, m / Math.abs(h || 1));
  }
}
const Q0 = (i, l) => l === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && // It's animatable if we have a string
(Ie.test(i) || i === "0") && // And it contains numbers and/or colors
!i.startsWith("url("));
function B2(i) {
  const l = i[0];
  if (i.length === 1)
    return !0;
  for (let o = 0; o < i.length; o++)
    if (i[o] !== l)
      return !0;
}
function L2(i, l, o, r) {
  const c = i[0];
  if (c === null)
    return !1;
  if (l === "display" || l === "visibility")
    return !0;
  const h = i[i.length - 1], d = Q0(c, l), m = Q0(h, l);
  return !d || !m ? !1 : B2(i) || (o === "spring" || Qv(o)) && r;
}
function Wf(i) {
  i.duration = 0, i.type = "keyframes";
}
const $f = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
]), H2 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function j2(i) {
  for (let l = 0; l < i.length; l++)
    if (typeof i[l] == "string" && H2.test(i[l]))
      return !0;
  return !1;
}
const K0 = /* @__PURE__ */ new Set([
  "color",
  "backgroundColor",
  "outlineColor",
  "fill",
  "stroke",
  "borderColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor"
]), Fv = () => !fn.useManualTiming && Object.hasOwnProperty.call(Element.prototype, "animate");
function Y2(i) {
  const { motionValue: l, name: o, repeatDelay: r, repeatType: c, damping: h, type: d, keyframes: m } = i;
  if (!o || !($f.has(o) || K0.has(o)))
    return !1;
  const v = l?.owner?.current;
  if (!(v instanceof HTMLElement) && !(v instanceof SVGElement))
    return !1;
  const { onUpdate: S, transformTemplate: g } = l.owner.getProps();
  return Fv() && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  ($f.has(o) || K0.has(o) && j2(m)) && (o !== "transform" || !g) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !S && !r && c !== "mirror" && h !== 0 && d !== "inertia";
}
const Nh = (i, l) => l && typeof i == "number" ? l.transform(i) : i, G2 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, q2 = Zn.length, J0 = {}, th = (i, l, o = Nh(l, Hv[i])) => (J0[i] || (J0[i] = (G2[i] || i) + "(")) + o + ")", Pv = (i, l) => (typeof l == "number" ? l : parseFloat(l)) === (i.startsWith("scale") ? 1 : 0);
function X2(i, l, o) {
  let r = "";
  for (let h = 0; h < q2; h++) {
    const d = Zn[h], m = i[d];
    if (m === void 0)
      continue;
    const v = o && (l[d] = Nh(m, Dh[d]));
    Pv(d, m) || (r += th(d, m, v || void 0) + " ");
  }
  const c = i.pathRotation;
  return c && (r += th("rotate", c)), r = r.trim(), o ? o(l, r) : r || "none";
}
const el = /* @__PURE__ */ new WeakMap(), Z2 = 200, Iu = 1e-3, Q2 = 0.1, K2 = 1e-3, J2 = 100, F2 = (i) => /^(linear|ease(In|Out|InOut))$/.test(i), xf = (i, l) => i - l, F0 = (i, l, o) => {
  const r = [];
  for (let c = 0; c <= o; c++)
    r.push(Ht(i, l, c / o));
  return r;
}, no = (i) => i.motionValue.owner, ao = (i) => el.get(i), Pi = (i, l) => i.latestValues ? i.latestValues[l] : i.getValue(l)?.get(), P2 = ({ name: i, motionValue: l }) => i && Zn.includes(i) && l?.owner?.current instanceof HTMLElement && Fv() && zh();
function k2(i) {
  const l = no(i), { onUpdate: o, transformTemplate: r } = l.getProps();
  return (
    /**
     * A handoff from an optimised appear animation is already running
     * on its own WAAPI animation. onUpdate needs every value, every
     * frame.
     */
    !i.isHandoff && !o && !i.hasOnUpdate && /**
     * transformTemplate could output anything.
     */
    !r && i.type !== "inertia" && /**
     * A literal transform, or pathRotation, replaces or adds to the
     * transform we'd build. styleEffect builds its own as "none".
     */
    (Pi(l, "transform") || "none") === "none" && !Pi(l, "pathRotation") && /**
     * Layout animations write transform every frame.
     */
    !l.projection?.isProjecting()
  );
}
class I2 extends hs {
  constructor(l) {
    const o = no(l).current, { driver: r = Dv } = l;
    let c;
    const h = k2(l);
    l.driver = (m) => {
      const v = r(m);
      return {
        js: v,
        now: v.now,
        start: (S = !0) => {
          const g = ao(o);
          !g || g.isJS ? v.start(S) : g.schedule(!1, !S);
        },
        stop: () => {
          v.stop();
          const S = ao(o);
          S && !S.isFinishing && S.release(c);
        }
      };
    }, super(l), c = this, this.canAccelerate = h;
    const { stop: d } = this;
    this.stop = () => {
      this.isAccelerated() && this.sync(), d();
    };
  }
  get group() {
    return ao(no(this.options).current);
  }
  get js() {
    return this.driver?.js;
  }
  get name() {
    return this.options.name;
  }
  /**
   * When this stops moving, or, if it repeats forever, when it starts
   * repeating, and how long each repeat takes. Held (paused, or at
   * speed 0) animations never stop moving.
   */
  timing() {
    const { startTime: l, speed: o, totalDuration: r } = this, { delay: c = 0, repeatType: h } = this.options;
    return this.holdTime !== null ? [1 / 0, 0] : r === 1 / 0 ? [
      l + c / o,
      this.resolvedDuration * (h === "loop" ? 1 : 2) / o || 1
    ] : [l + (c + r) / o, 0];
  }
  /**
   * Whether this is running, or paused, on the compositor.
   */
  isAccelerated() {
    const { group: l, state: o } = this;
    return l?.tracks.has(this) && !l.isJS && this.canAccelerate && (o === "running" || o === "paused");
  }
  /**
   * The value now, while this runs on the compositor and so doesn't
   * set its motion value every frame.
   */
  liveValue() {
    return this.isAccelerated() ? this.sampleAt(Qt.now()) : void 0;
  }
  /**
   * If this is a two-keyframe tween whose easing WAAPI runs exactly,
   * when it starts and stops moving, and that easing.
   */
  tween() {
    const { keyframes: l, type: o, ease: r, times: c, repeat: h, delay: d = 0 } = this.options, m = /* @__PURE__ */ gh(r) ? Fi(r) : F2(r) && If[r];
    if (m && !h && !c && l.length === 2 && o === Ta && this.holdTime === null) {
      const v = this.startTime + d / this.speed;
      return [v, v + this.resolvedDuration / this.speed, m];
    }
  }
  /**
   * The timestamps between two timestamps where this reaches a
   * keyframe or starts a repeat, where it can turn or jump.
   */
  boundaries(l, o) {
    const { startTime: r, speed: c, resolvedDuration: h, options: d } = this, { delay: m = 0, repeat: v = 0, repeatDelay: S = 0, repeatType: g, times: y, keyframes: b, type: R } = d, z = (R || Ta) === Ta ? y || Vv(b) : [0, 1], B = r + m / c, _ = [];
    if (this.holdTime !== null || !(h > 0))
      return _;
    for (let X = Math.max(0, Math.floor((l - B) * c / h)); X <= v; X++) {
      const K = B + X * h / c;
      if (K > o)
        break;
      for (const k of z) {
        const $ = K + (X % 2 && g && g !== "loop" ? 1 - k : k) * (h - S) / c;
        $ > l && $ < o && _.push($);
      }
    }
    return _;
  }
  /**
   * The value at a timestamp, as a number.
   */
  numberAt(l) {
    return parseFloat(this.sampleAt(l, !0));
  }
  /**
   * Write the current value, and velocity, to the motion value.
   */
  sync() {
    const l = Qt.now();
    this.options.motionValue.setWithVelocity(this.sampleAt(l - vo, !0), this.sampleAt(l, !0), vo);
  }
  play() {
    this.isStopped || ((this.group || W2(no(this.options))).tracks.add(this), super.play());
  }
  pause() {
    super.pause(), this.isAccelerated() && (this.sync(), this.group.schedule(!1));
  }
  /**
   * JSAnimation finishes on its next tick, which only happens on the
   * main thread, so finish now.
   */
  complete() {
    super.complete();
    const { group: l } = this;
    l && !l.isJS && this.canAccelerate && this.tick(Qt.now());
  }
  /**
   * Without a tick to rebase it, a held time still includes the delay,
   * so take it off here, as a JS animation does on its next tick.
   */
  get time() {
    return this.isAccelerated() ? /* @__PURE__ */ Ye(Dn(0, this.totalDuration, this.at(Qt.now()) - (this.options.delay || 0))) : super.time;
  }
  /**
   * A JS animation sets its motion value from a seek on its next tick.
   * This doesn't tick, so set it now, rather than leave it to be set
   * when this next stops.
   */
  set time(l) {
    super.time = l, this.isAccelerated() && this.sync();
  }
  /**
   * Scroll timelines set time every frame, so run these on the main
   * thread.
   */
  attachTimeline(l) {
    return this.canAccelerate = !1, this.group?.demote(!0), super.attachTimeline(l);
  }
}
function W2(i) {
  const l = i.current, o = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map();
  let c = {}, h = [], d = /* @__PURE__ */ new Map(), m = [], v = !1, S = !1, g = !1, y = !1, b = -1 / 0;
  const R = (J) => {
    for (const w of o)
      if (w.name === J)
        return !0;
  }, z = (J, w) => {
    const q = {};
    for (const Y of J === void 0 ? Zn : h) {
      const I = r.get(Y), tt = J === void 0 ? Pi(i, Y) : I ? I.sampleAt(w > J && !I.timing()[1] ? w : J) : c[Y];
      tt !== void 0 && (q[Y] = tt);
    }
    return q;
  }, B = (J, w) => {
    let q = "";
    for (const Y in J) {
      const I = J[Y];
      (!w || !Pv(Y, I)) && (q += th(Y, I) + " ");
    }
    return (w ? q.trim() : q) || "none";
  }, _ = (J, w) => B(z(J, w)), X = (J = z()) => {
    l.style.transform = B(J, !0);
  }, K = (J = !0) => {
    J && X(), m.forEach(({ animation: w }) => w.cancel()), m = [];
  }, k = (J, w) => new Animation(new KeyframeEffect(l, J, w)), $ = (J, w, q = 1 / 0) => {
    const Y = { animation: J, offset: w, end: q };
    J.startTime = Qt.now() + w, q < 1 / 0 && (J.onfinish = () => {
      Y.isDone = !0, m.some((I) => I.end === 1 / 0) && (J.cancel(), m = m.filter((I) => I !== Y)), St.schedule(!1);
    }), J.oncancel = () => m.includes(Y) && St.demote(), m.push(Y);
  }, et = (J, w, q) => {
    const Y = (tt, ct) => Math.abs(J(ct) - J(tt)), I = Y(w, q);
    for (; q - w > 0.01; ) {
      const tt = (w + q) / 2;
      Y(w, tt) > Y(tt, q) ? q = tt : w = tt;
    }
    return Y(w, q) > I / 2 ? [w, q] : [];
  }, st = (J, w, q, Y) => {
    const I = Math.min(Z2, Math.max(2, Math.ceil((q - w) / vo)));
    if (Y.length * 4 > I)
      return;
    const tt = F0(w, q, I).concat(Y).sort(xf), ct = (Z) => /* @__PURE__ */ $a(w, q, Z);
    let yt, ot;
    for (const Z of J) {
      const W = tt.map((Xt) => Z.numberAt(Xt)), [Tt] = W, bt = W.map((Xt) => Xt - Tt), Rt = bt[bt.length - 1], it = bt.some((Xt) => Math.abs(Xt) * Iu > Math.abs(Rt)) ? 0 : Rt, ft = bt.map((Xt) => it ? Xt / it : Xt);
      if (it) {
        if (!yt)
          yt = ft, ot = (Xt) => (Z.numberAt(Xt) - Tt) / it;
        else if (ft.some((Xt, ll) => !(Math.abs(Xt - yt[ll]) <= Iu)))
          return;
      } else if (ft.some((Xt) => !(Math.abs(Xt) <= Iu)))
        return;
    }
    if (!yt || yt.every((Z, W) => Math.abs(Z - ct(tt[W])) <= Iu))
      return "linear";
    const E = [], L = (Z, W = ot(Z)) => E.push(Xf(W) + " " + Xf(ct(Z) * 100) + "%");
    return yt.forEach((Z, W) => {
      W && Math.abs(Z - yt[W - 1]) > 0.2 && et(ot, tt[W - 1], tt[W]).forEach((Tt) => L(Tt)), L(tt[W], Z);
    }), "linear(" + E + ")";
  }, U = (J, w, q, Y) => {
    const I = [w], tt = (E, L) => J.every((Z) => !(Math.abs(Z.numberAt((E + L) / 2) - (Z.numberAt(E) + Z.numberAt(L)) / 2) > (Z.name.startsWith("scale") ? K2 : Q2))), ct = (E, L, Z) => {
      if (L - E < 1 || tt(E, L))
        I.push(L);
      else if (Z < 4)
        ct(E, (E + L) / 2, Z + 1), ct((E + L) / 2, L, Z + 1);
      else {
        for (const W of J)
          I.push(...et((Tt) => W.numberAt(Tt), E, L));
        I.push(L);
      }
    }, yt = F0(w, q, Math.ceil((q - w) / 100));
    for (const E of Y)
      yt.push(E, Math.min(E + 0.01, q));
    let ot = w;
    for (const E of yt.sort(xf))
      E > ot && ct(ot, E, 0), ot = E;
    return I.sort(xf);
  }, G = (J) => {
    let w;
    for (const q of J) {
      const Y = q.tween();
      if (!Y || w?.some((I, tt) => tt < 2 ? Math.abs(Y[tt] - I) > 1 : Y[tt] !== I))
        return;
      w = Y;
    }
    return w;
  }, P = (J, w, q, Y = { fill: "both" }, I, tt) => {
    const ct = J.flatMap((Z) => Z.boundaries(w, q)), yt = tt || st(J, w, q, ct), ot = yt ? [w, q] : U(J, w, q, ct), E = ot.map((Z) => _(Z, I));
    let L = { transform: E };
    return yt || (L.offset = ot.map((Z) => /* @__PURE__ */ $a(w, q, Z))), E.every((Z) => Z === E[0]) && (X(z(w, I)), L = null), k(L, {
      ...Y,
      duration: q - w,
      easing: yt || "linear"
    });
  }, ut = (J) => {
    let w = J, q = 0, Y = 0;
    const I = [], tt = [], ct = /* @__PURE__ */ new Set();
    r.clear(), d = /* @__PURE__ */ new Map();
    for (const ot of o) {
      r.set(ot.name, ot);
      const [E, L] = ot.timing(), Z = E === 1 / 0;
      if (d.set(ot, [ot.at(J), ot.speed, Z]), Z) {
        ot.sync();
        continue;
      }
      if (ot.speed < 0)
        return;
      if (L) {
        if (q) {
          const W = (E - Y) / L;
          if (Math.abs(L - q) > 1 || Math.abs(W - Math.round(W)) * q > 1)
            return;
        } else
          q = L, Y = E;
        tt.push(ot);
      } else
        ct.add(E);
      I.push(ot), w = Math.max(w, E);
    }
    c = {}, h = Zn.filter((ot) => {
      if (r.has(ot))
        return !0;
      const E = c[ot] = Pi(i, ot);
      return E !== void 0 && parseFloat(E) !== (ot.startsWith("scale") ? 1 : 0);
    }), K(!1);
    const yt = !q && G(I);
    try {
      if (yt && yt[1] > J) {
        const [ot, E, L] = yt;
        $(P(I, ot, E, void 0, void 0, L), ot - J, E - ot);
      } else w > J && ($(P(I, J, w), 0, w - J), ct.forEach((ot) => ot < w - 1 && $(k(null, { duration: ot - J }), 0, ot - J)));
      if (q) {
        const ot = Y + Math.floor((w - Y) / q) * q;
        $(P(tt, ot, ot + q, {
          iterations: 1 / 0,
          iterationStart: (w - ot) / q,
          /**
           * It must not fill backwards over the finite part
           * that runs before it.
           */
          fill: "forwards"
        }, w), w - J);
      }
    } catch {
      return;
    }
    return m.length || K(), !0;
  }, mt = (J) => {
    let w, q = 0;
    for (const Y of o) {
      const I = d.get(Y);
      if (!I)
        return !1;
      const [tt, ct, yt] = I, ot = Y.at(J), E = Y.timing()[0] === 1 / 0;
      if (yt) {
        if (E && ot === tt)
          continue;
        return !1;
      }
      const L = (ot - tt) / ct, Z = E ? 0 : Y.speed / ct;
      if (w === void 0)
        w = L, q = Z;
      else if (Math.abs(L - w) > 1 || Z !== q)
        return !1;
    }
    if (w === void 0)
      return !0;
    if (!m.length)
      return !1;
    for (const { offset: Y, end: I, isDone: tt } of m) {
      const ct = w - Y;
      if (I < 1 / 0 && (tt ? ct < I - 1 : ct < 0 || ct >= I))
        return !1;
    }
    for (const { animation: Y, offset: I, isDone: tt } of m) {
      if (tt)
        continue;
      const ct = w - I;
      q && Y.updatePlaybackRate && Y.playState === "running" && Math.abs(Number(Y.currentTime) - ct) < 20 ? Y.playbackRate !== q && Y.updatePlaybackRate(q) : q ? (Y.playbackRate = q, Y.startTime = J - ct / q) : (Y.startTime = null, Y.currentTime = ct);
    }
    return !0;
  }, dt = () => o.size ? !1 : (g = !0, ao(l) === St && el.delete(l), St.isJS || K(), !0), Ot = () => {
    const J = Qt.now();
    if (St.isJS || (St.isFinishing = !0, o.forEach((Y) => {
      const [I, tt] = Y.timing();
      Y.state === "running" && Y.speed > 0 && !tt && I <= J + 1 && (Y.complete(), c[Y.name] = Pi(i, Y.name), d.has(Y) || (v = !0));
    }), St.isFinishing = !1), S = !1, g || (o.forEach(({ state: Y }, I) => {
      (Y === "idle" || Y === "finished") && o.delete(I);
    }), dt()))
      return;
    for (const Y of o)
      if (!Y.canAccelerate)
        return St.demote(!0);
    St.isJS && (St.isJS = !1, v = !0, o.forEach((Y) => Y.js?.stop()));
    const w = v, q = y;
    if (v = y = !1, w || !mt(J)) {
      if (q) {
        if (J - b < J2)
          return St.demote();
        b = J;
      }
      if (!ut(J))
        return St.demote();
    }
  }, St = {
    tracks: o,
    isJS: !1,
    isFinishing: !1,
    schedule(J, w) {
      g || (v || (v = J), y || (y = !!w), S || (S = !0, ne.isProcessing ? jt.render(Ot, !1, !0) : queueMicrotask(Ot)));
    },
    /**
     * End the group now, rather than when it next builds, so the
     * element's transform is the caller's again as soon as its last
     * animation is stopped.
     */
    release(J) {
      const { state: w } = J;
      (w === "idle" || w === "finished") && o.delete(J), dt() || St.schedule(!0);
    },
    /**
     * An outside write. Rebuild once, but if it keeps happening, move
     * to the main thread.
     */
    check() {
      if (!St.isJS) {
        for (const J in c)
          if (Pi(i, J) !== c[J] && !R(J))
            return St.schedule(!0, !0);
      }
    },
    demote(J) {
      if (!(St.isJS || g))
        return o.forEach((w) => {
          w.isAccelerated() && w.sync(), J || (w.canAccelerate = !1);
        }), St.isJS = !0, d = /* @__PURE__ */ new Map(), K(), o.forEach((w) => w.state === "running" && w.js?.start()), !0;
    }
  };
  return el.set(l, St), St;
}
class $2 extends Ch {
  constructor(l) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = Qt.now();
    const { keyframes: o, name: r, motionValue: c, element: h } = l, d = l;
    d.autoplay ?? (d.autoplay = !0), d.delay ?? (d.delay = 0), d.type ?? (d.type = "keyframes"), d.repeat ?? (d.repeat = 0), d.repeatDelay ?? (d.repeatDelay = 0), d.repeatType ?? (d.repeatType = "loop");
    const m = h?.KeyframeResolver || xh;
    this.keyframeResolver = new m(o, (v, S, g) => this.onKeyframesResolved(v, S, d, !g), r, c, h), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(l, o, r, c) {
    this.keyframeResolver = void 0;
    const { name: h, type: d, velocity: m, delay: v, isHandoff: S, onUpdate: g } = r;
    this.resolvedAt = Qt.now();
    const y = L2(l, h, d, m);
    y || ((fn.instantAnimations || !v) && g?.(fs(l, r, o)), l[0] = l[l.length - 1], Wf(r), r.repeat = 0);
    const { onComplete: b } = r;
    r.finalKeyframe = o, r.keyframes = l, r.onComplete = () => {
      b?.(), this.notifyFinished();
    };
    const R = y && !S && Y2(r), z = !R && P2(r);
    c && (R || z || this.resolvedAt !== this.createdAt) && (r.startTime ?? (r.startTime = Uv(this.createdAt, this.resolvedAt)));
    let B;
    if (R) {
      r.element = r.motionValue?.owner?.current;
      try {
        B = new U2(r);
      } catch {
        B = new hs(r);
      }
    } else z ? B = new I2(r) : B = new hs(r);
    this.pendingTimeline && (this.stopTimeline = B.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = B;
  }
  get finished() {
    return this._animation ? this._animation.finished : super.finished;
  }
  then(l, o) {
    return this.finished.finally(l).then(() => {
    });
  }
  /**
   * The value now, if the animation runs on the compositor.
   */
  liveValue() {
    return this._animation?.liveValue?.();
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), D2()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(l) : this.pendingTimeline = l, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation?.cancel(), this.keyframeResolver?.cancel();
  }
}
function kv(i, l, o, r = 0, c = 1) {
  const h = Array.from(i).sort((S, g) => S.sortNodePosition(g)).indexOf(l), d = i.size, m = (d - 1) * r;
  return typeof o == "function" ? o(h, d) : c === 1 ? h * r : m - h * r;
}
const P0 = 30, tA = (i) => !isNaN(parseFloat(i));
class eA {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(l, o = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r) => {
      const c = Qt.now();
      if (this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && (this.dirty(), this.dependents))
        for (const h of this.dependents)
          h.dirty();
    }, this.hasAnimated = !1, this.setCurrent(l), this.owner = o.owner;
  }
  setCurrent(l) {
    this.current = l, this.updatedAt = Qt.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = tA(this.current));
  }
  setPrevFrameValue(l = this.current) {
    this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(l) {
    return this.on("change", l);
  }
  on(l, o) {
    var r;
    return l === "change" ? this.onChangeSubscribe(o) : ((r = this.events)[l] || (r[l] = new po())).add(o);
  }
  onChangeSubscribe(l) {
    const { events: o } = this;
    return !o.change && !this.changeSubscriber ? this.changeSubscriber = l : (o.change || (o.change = new po(), o.change.add(this.changeSubscriber), this.changeSubscriber = void 0), o.change.add(l)), () => {
      this.changeSubscriber === l ? this.changeSubscriber = void 0 : o.change?.remove(l), this.stopIfUnobserved();
    };
  }
  /**
   * If we have no more change listeners by the start
   * of the next frame, stop active animations.
   */
  stopIfUnobserved() {
    jt.read(() => {
      !this.changeSubscriber && !this.events.change?.getSize() && this.stop();
    });
  }
  clearListeners() {
    this.changeSubscriber = void 0;
    for (const l in this.events)
      this.events[l].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(l, o) {
    this.passiveEffect = l, this.stopPassiveEffect = o;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(l) {
    this.passiveEffect ? this.passiveEffect(l, this.updateAndNotify) : this.updateAndNotify(l);
  }
  setWithVelocity(l, o, r) {
    this.set(o), this.prev = void 0, this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(l, o = !0) {
    this.updateAndNotify(l), this.prev = l, this.prevUpdatedAt = this.prevFrameValue = void 0, o && this.stop(), this.stopPassiveEffect?.();
  }
  dirty() {
    const { current: l, changeSubscriber: o } = this;
    o ? o(l) : this.events.change?.notify(l);
  }
  addDependent(l) {
    (this.dependents || (this.dependents = /* @__PURE__ */ new Set())).add(l);
  }
  removeDependent(l) {
    this.dependents?.delete(l);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    const l = this.animation?.liveValue?.();
    return l === void 0 ? this.current : l;
  }
  /**
   * The value as last set. Unlike get(), this doesn't read an animation
   * running on the compositor, which renders the value itself.
   */
  getCurrent() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const l = Qt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > P0)
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, P0);
    return /* @__PURE__ */ rv(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(l) {
    return this.stop(), new Promise((o) => {
      this.hasAnimated = !0;
      let r = !1, c;
      c = l(() => {
        r = !0, this.events.animationComplete?.notify(), this.animation === c && (this.animation = void 0), o();
      }), r || (this.animation = c), this.events.animationStart?.notify();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel?.notify()), this.animation = void 0;
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect?.();
  }
}
function nl(i, l) {
  return new eA(i, l);
}
function Iv(i, l) {
  if (i?.inherit && l) {
    const { inherit: o, ...r } = i;
    return { ...l, ...r };
  }
  return i;
}
function _h(i, l) {
  const o = i?.[l] ?? i?.default ?? i;
  return o !== i ? Iv(o, i) : o;
}
const nA = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, aA = (i) => ({
  type: "spring",
  stiffness: 550,
  damping: i === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), iA = {
  type: "keyframes",
  duration: 0.8
}, lA = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, sA = (i, { keyframes: l }) => l.length > 2 ? iA : Ea.has(i) ? i.startsWith("scale") ? aA(l[1]) : nA : lA, uA = /* @__PURE__ */ new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed",
  "out"
]);
function oA(i) {
  for (const l in i)
    if (!uA.has(l))
      return !0;
  return !1;
}
const Vh = (i, l, o, r = {}, c, h) => (d) => {
  const m = _h(r, i) || {}, v = m.delay || r.delay || 0;
  let { elapsed: S = 0 } = r;
  S = S - /* @__PURE__ */ ke(v);
  const g = {
    keyframes: Array.isArray(o) ? o : [null, o],
    ease: "easeOut",
    velocity: l.getVelocity(),
    ...m,
    delay: -S,
    onUpdate: (b) => {
      l.set(b), m.onUpdate && m.onUpdate(b);
    },
    onComplete: () => {
      d(), m.onComplete && m.onComplete();
    },
    name: i,
    motionValue: l,
    element: h ? void 0 : c,
    hasOnUpdate: !!m.onUpdate
  };
  oA(m) || Object.assign(g, sA(i, g)), g.duration && (g.duration = /* @__PURE__ */ ke(g.duration)), g.repeatDelay && (g.repeatDelay = /* @__PURE__ */ ke(g.repeatDelay)), g.from !== void 0 && (g.keyframes[0] = g.from);
  let y = !1;
  if ((g.type === !1 || g.duration === 0 && !g.repeatDelay) && (Wf(g), g.delay === 0 && (y = !0)), (fn.instantAnimations || fn.skipAnimations || c?.shouldSkipAnimations || m.skipAnimations) && (y = !0, Wf(g), g.delay = 0), g.allowFlatten = !m.type && !m.ease, y && !h && l.get() !== void 0) {
    const b = fs(g.keyframes, m);
    if (b !== void 0) {
      jt.update(() => {
        g.onUpdate(b), g.onComplete();
      });
      return;
    }
  }
  return m.isSync ? new hs(g) : new $2(g);
}, rA = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function cA(i) {
  const l = rA.exec(i);
  if (!l)
    return [,];
  const [, o, r, c] = l;
  return [`--${o ?? r}`, c];
}
function wh(i, l, o = 1) {
  const [r, c] = cA(i);
  if (!r)
    return;
  const h = window.getComputedStyle(l).getPropertyValue(r);
  if (h) {
    const d = h.trim();
    return hh(d) ? parseFloat(d) : d;
  }
  return Ro(c) ? wh(c, l, o + 1) : c;
}
function fA(i) {
  const l = [{}, {}];
  return i?.values.forEach((o, r) => {
    l[0][r] = o.get(), l[1][r] = o.getVelocity();
  }), l;
}
function Wv(i, l, o, r) {
  const c = (h) => typeof h == "function" ? h(o !== void 0 ? o : i.custom, ...fA(r)) : h;
  return l = c(l), typeof l == "string" && (l = i.variants && i.variants[l]), c(l);
}
function Wa(i, l, o) {
  return Wv(i.getProps(), l, o, i);
}
const $v = (i, l) => l === "exit" ? i.presenceContext?.custom : void 0, t1 = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Zn
]), hA = (i) => Array.isArray(i);
function dA(i, l, o) {
  i.hasValue(l) ? i.getValue(l).set(o) : i.addValue(l, nl(o));
}
function mA(i) {
  return hA(i) ? i[i.length - 1] || 0 : i;
}
function pA(i, l) {
  const o = Wa(i, l);
  let { transitionEnd: r = {}, transition: c = {}, ...h } = o || {};
  h = { ...h, ...r };
  for (const d in h) {
    const m = mA(h[d]);
    dA(i, d, m);
  }
}
const ye = (i) => !!(i && i.getVelocity);
function yA(i) {
  return !!(ye(i) && i.add);
}
function eh(i, l) {
  const o = i.getValue("willChange");
  if (yA(o))
    return o.add(l);
  if (!o && fn.WillChange) {
    const r = new fn.WillChange("auto");
    i.addValue("willChange", r), r.add(l);
  }
}
const e1 = "data-framer-appear-id";
function n1(i) {
  return i.props[e1];
}
const gA = typeof window < "u";
function vA({ protectedKeys: i, needsAnimating: l }, o) {
  const r = o in i && !l[o];
  return l[o] = !1, r;
}
function a1(i, l, { delay: o = 0, transitionOverride: r, type: c } = {}) {
  let { transition: h, transitionEnd: d, ...m } = l;
  const v = i.getDefaultTransition();
  h = h ? Iv(h, v) : v;
  const S = h?.reduceMotion, g = h?.skipAnimations;
  r && (h = r);
  const y = [], b = c && i.animationState?.getState()[c], R = h?.path;
  R && (R.animateValues ? R.animateValues((z) => i.getValue(z, i.latestValues[z] ?? 0), m, h, o, y) : R.animateVisualElement?.(i, m, h, o, y));
  for (const z in m) {
    const B = i.getValue(z, i.latestValues[z] ?? null), _ = m[z];
    if (_ === void 0 || b && vA(b, z))
      continue;
    const X = {
      delay: o,
      ..._h(b?.out[z] || h || {}, z)
    };
    g && (X.skipAnimations = !0);
    const K = B.get();
    if (K !== void 0 && !B.isAnimating() && !Array.isArray(_) && _ === K && !X.velocity) {
      jt.update(() => B.set(_));
      continue;
    }
    let k = !1;
    if (gA && window.MotionHandoffAnimation) {
      const st = n1(i);
      if (st) {
        const U = window.MotionHandoffAnimation(st, z, jt);
        U !== null && (X.startTime = U, k = !0);
      }
    }
    eh(i, z);
    const $ = S ?? i.shouldReduceMotion;
    B.start(Vh(z, B, _, $ && t1.has(z) ? { type: !1 } : X, i, k));
    const et = B.animation;
    et && y.push(et);
  }
  if (d) {
    const z = () => jt.update(() => {
      d && pA(i, d);
    });
    y.length ? Promise.all(y).then(z) : z();
  }
  return y;
}
function nh(i, l, o = {}) {
  const r = Wa(i, l, $v(i, o.type)), c = o.transitionOverride || (r?.transition ?? (i.getDefaultTransition() || {})), h = () => Promise.all(r ? a1(i, r, o) : []), d = (v = 0) => {
    const { variantChildren: S } = i, { delayChildren: g = 0, staggerChildren: y, staggerDirection: b } = c, R = [];
    return S?.forEach((z) => {
      z.notify("AnimationStart", l), R.push(nh(z, l, {
        ...o,
        delay: v + (typeof g == "function" ? 0 : g) + kv(S, z, g, y, b)
      }).then(() => z.notify("AnimationComplete", l)));
    }), Promise.all(R);
  }, { when: m } = c;
  return m ? m === "beforeChildren" ? h().then(() => d()) : d().then(h) : Promise.all([h(), d(o.delay)]);
}
function SA(i, l, o = {}) {
  return i.notify("AnimationStart", l), (Array.isArray(l) ? Promise.all(l.map((c) => nh(i, c, o))) : typeof l == "string" ? nh(i, l, o) : Promise.all(a1(i, Wa(i, l, o.custom), o))).then(() => {
    i.notify("AnimationComplete", l);
  });
}
const TA = {
  test: (i) => i === "auto",
  parse: (i) => i
}, EA = (i) => (l) => l.test(i), bA = [il, at, Cn, qn, vb, gb, TA], k0 = (i) => bA.find(EA(i));
function AA(i) {
  return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || dh(i) : !0;
}
const MA = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function CA(i, l, o) {
  let r = 0, c;
  for (; r < i.length && !c; ) {
    const h = i[r];
    typeof h == "string" && !MA.has(h) && Mb(h) && (c = i[r]), r++;
  }
  if (c && o)
    for (const h of l)
      i[h] !== c && (i[h] = Oh(o, c));
}
class DA extends xh {
  constructor() {
    super(...arguments), this.isAsync = !0;
  }
  /**
   * Keyframes that don't need reading from the DOM, or measuring,
   * resolve straight away rather than in the frame loop's batched read.
   */
  scheduleResolve() {
    if (this.canReadNow() && (this.readKeyframes(), !this.needsMeasurement))
      return this.complete();
    super.scheduleResolve();
  }
  canReadNow() {
    const { unresolvedKeyframes: l, element: o, motionValue: r } = this, c = l[0] ?? r?.get();
    if (!o?.current || c === void 0)
      return !1;
    for (let h = 0; h < l.length; h++)
      if (Ef(h ? l[h] : c))
        return !1;
    return !0;
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: o, name: r } = this;
    if (!o?.current)
      return;
    super.readKeyframes();
    for (let g = 0; g < l.length; g++) {
      let y = l[g];
      if (typeof y == "string" && (y = y.trim(), Ro(y))) {
        const b = wh(y, o.current);
        b !== void 0 && (l[g] = b), g === l.length - 1 && (this.finalKeyframe = y);
      }
    }
    if (this.resolveNoneKeyframes(), !t1.has(r) || l.length !== 2)
      return;
    const [c, h] = l;
    if (typeof c == "number" && typeof h == "number")
      return;
    const d = k0(c), m = k0(h), v = Ef(c), S = Ef(h);
    if (v !== S && Rf[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (d !== m)
      if (G0(d) && G0(m))
        for (let g = 0; g < l.length; g++) {
          const y = l[g];
          typeof y == "string" && (l[g] = parseFloat(y));
        }
      else Rf[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: o } = this, r = [];
    for (let c = 0; c < l.length; c++)
      (l[c] === null || AA(l[c])) && r.push(c);
    r.length && CA(l, r, o);
  }
  measure() {
    const { element: l, name: o } = this;
    return Rf[o](window.getComputedStyle(l.current), () => l.measureViewportBox());
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: o, name: r } = this;
    if (!l?.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = this.measure(), o[0] = this.measuredOrigin;
    const c = o[o.length - 1];
    c !== void 0 && this.motionValue?.jump(c, !1);
  }
  measureEndState() {
    const { element: l, unresolvedKeyframes: o } = this;
    if (!l?.current)
      return;
    this.motionValue?.jump(this.measuredOrigin, !1);
    const r = o.length - 1, c = o[r];
    o[r] = this.measure(), c !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = c), this.resolveNoneKeyframes();
  }
}
const Uh = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];
function io(i) {
  return ov(i) && "offsetHeight" in i && !("ownerSVGElement" in i);
}
function Bh(i) {
  return ov(i) && "ownerSVGElement" in i;
}
const So = {};
function Lh(i) {
  return So.current?.add(i), i;
}
const Hh = (i) => So.current ? So.current.bind(i) : i;
function i1(i, l, o) {
  if (i == null)
    return [];
  if (i instanceof EventTarget)
    return [i];
  if (typeof i == "string") {
    const r = l ? l.current : So.current?.root || document, c = o?.[i] ?? r.querySelectorAll(i);
    return c ? Array.from(c) : [];
  }
  return Array.from(i).filter((r) => r != null);
}
function l1(i) {
  return i.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
function jh(i, l, o) {
  const { style: r, vars: c, transformOrigin: h } = i;
  let d = !1, m = !1;
  for (const v in l) {
    const S = l[v];
    if (Ea.has(v)) {
      d = !0;
      continue;
    } else if (vv(v)) {
      c[v] = S;
      continue;
    } else {
      const g = Nh(S, Dh[v]);
      v.startsWith("origin") ? (m = !0, h[v] = g) : r[v] = g;
    }
  }
  if (l.transform || (d || o ? r.transform = X2(l, i.transform, o) : r.transform && (r.transform = "none")), m) {
    const { originX: v = "50%", originY: S = "50%", originZ: g = 0 } = h;
    r.transformOrigin = `${v} ${S} ${g}`;
  }
}
const OA = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, RA = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function xA(i, l, o = 1, r = 0, c = !0) {
  i.pathLength = 1;
  const h = c ? OA : RA;
  i[h.offset] = `${-r}`, i[h.array] = `${l} ${o}`;
}
const s1 = [
  "transform",
  "opacity",
  "clipPath",
  "filter",
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function u1(i, {
  attrX: l,
  attrY: o,
  attrScale: r,
  pathLength: c,
  pathSpacing: h = 1,
  pathOffset: d = 0,
  // This is object creation, which we try to avoid per-frame.
  ...m
}, v, S, g) {
  if (jh(i, m, S), v) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  i.attrs = i.style, i.style = {};
  const { attrs: y, style: b } = i;
  for (const R of s1)
    y[R] !== void 0 && (b[R] = y[R], delete y[R]);
  (b.transform || y.transformOrigin) && (b.transformOrigin = y.transformOrigin ?? "50% 50%", delete y.transformOrigin), b.transform && (b.transformBox = g?.transformBox ?? "fill-box", delete y.transformBox), l !== void 0 && (y.x = l), o !== void 0 && (y.y = o), r !== void 0 && (y.scale = r), c !== void 0 && xA(y, c, h, d, !1);
}
function o1({ top: i, left: l, right: o, bottom: r }) {
  return {
    x: { min: l, max: o },
    y: { min: i, max: r }
  };
}
function zA({ x: i, y: l }) {
  return { top: l.min, right: i.max, bottom: l.max, left: i.min };
}
function NA(i, l) {
  if (!l)
    return i;
  const o = l({ x: i.left, y: i.top }), r = l({ x: i.right, y: i.bottom });
  return {
    top: o.y,
    left: o.x,
    bottom: r.y,
    right: r.x
  };
}
function zf(i) {
  return i === void 0 || i === 1;
}
function ah({ scale: i, scaleX: l, scaleY: o }) {
  return !zf(i) || !zf(l) || !zf(o);
}
const al = [
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skewX",
  "skewY"
];
function Fa(i) {
  return ah(i) || c1(i) || r1(i);
}
function r1(i) {
  return i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY;
}
function c1(i) {
  return I0(i.x) || I0(i.y);
}
function I0(i) {
  return i && i !== "0%";
}
function To(i, l, o) {
  const r = i - o, c = l * r;
  return o + c;
}
function W0(i, l, o, r, c) {
  return c !== void 0 && (i = To(i, c, r)), To(i, o, r) + l;
}
function ih(i, l = 0, o = 1, r, c) {
  i.min = W0(i.min, l, o, r, c), i.max = W0(i.max, l, o, r, c);
}
function f1(i, { x: l, y: o }) {
  ih(i.x, l.translate, l.scale, l.originPoint), ih(i.y, o.translate, o.scale, o.originPoint);
}
const $0 = 0.999999999999, tg = 1.0000000000001;
function _A(i, l, o, r = !1) {
  const c = o.length;
  if (!c)
    return;
  l.x = l.y = 1;
  let h, d;
  for (let m = 0; m < c; m++)
    h = o[m], d = h.projectionDelta, h.options.visualElement?.props.style?.display !== "contents" && (r === !0 && h.options.layoutScroll && h.scroll && h !== h.root && (rn(i.x, -h.scroll.offset.x), rn(i.y, -h.scroll.offset.y)), d && (l.x *= d.x.scale, l.y *= d.y.scale, f1(i, d)), r && (r.path?.[m] || r) !== h && Fa(h.latestValues) && lo(i, h.latestValues, h.layout?.layoutBox));
  l.x < tg && l.x > $0 && (l.x = 1), l.y < tg && l.y > $0 && (l.y = 1);
}
function rn(i, l) {
  i.min += l, i.max += l;
}
function eg(i, l, o, r, c = 0.5) {
  const h = Ht(i.min, i.max, c);
  ih(i, l, o, h, r);
}
function ng(i, l) {
  return typeof i == "string" ? parseFloat(i) / 100 * (l.max - l.min) : i;
}
function lo(i, l, o) {
  const r = o ?? i;
  eg(i.x, ng(l.x, r.x), l.scaleX, l.scale, l.originX), eg(i.y, ng(l.y, r.y), l.scaleY, l.scale, l.originY);
}
function h1(i, l) {
  return o1(NA(i.getBoundingClientRect(), l));
}
function VA(i, l, o) {
  const r = h1(i, o), { scroll: c } = l;
  return c && (rn(r.x, c.offset.x), rn(r.y, c.offset.y)), r;
}
const { schedule: ms } = /* @__PURE__ */ Cv(queueMicrotask, !1);
function wA(i, l, o) {
  const r = ye(i) ? i : nl(i);
  return r.start(Vh("", r, l, o)), r.animation;
}
const ss = {};
function UA(i, l) {
  const o = Qt.now();
  i = Hh(i);
  const r = ({ timestamp: c }) => {
    const h = c - o;
    h >= l && (Aa(r), i(h - l));
  };
  return jt.setup(r, !0), Lh(() => Aa(r));
}
function BA(i) {
  return Bh(i) && i.tagName === "svg";
}
function so(i) {
  return ye(i) ? i.get() : i;
}
const ag = (i) => typeof i == "number" ? i : parseFloat(i), LA = Uh.length, ig = (i) => typeof i == "number" || at.test(i);
function HA(i, l, o, r, c, h) {
  c ? (i.opacity = Ht(0, o.opacity ?? 1, jA(r)), i.opacityExit = Ht(l.opacity ?? 1, 0, YA(r))) : h && (i.opacity = Ht(l.opacity ?? 1, o.opacity ?? 1, r));
  for (let d = 0; d < LA; d++) {
    const m = Uh[d];
    let v = lg(l, m), S = lg(o, m);
    if (v === void 0 && S === void 0)
      continue;
    v || (v = 0), S || (S = 0), v === 0 || S === 0 || ig(v) === ig(S) ? (i[m] = Math.max(Ht(ag(v), ag(S), r), 0), (Cn.test(S) || Cn.test(v)) && (i[m] += "%")) : i[m] = S;
  }
  for (let d = 0; d < al.length; d++) {
    const m = al[d];
    (l[m] || o[m]) && (i[m] = Ht(l[m] || 0, o[m] || 0, r));
  }
}
function lg(i, l) {
  return i[l] !== void 0 ? i[l] : i.borderRadius;
}
const jA = /* @__PURE__ */ d1(0, 0.5, pv), YA = /* @__PURE__ */ d1(0.5, 0.95, cn);
function d1(i, l, o) {
  return (r) => r < i ? 0 : r > l ? 1 : o(/* @__PURE__ */ $a(i, l, r));
}
function lh(i, l) {
  i.min = l.min, i.max = l.max;
}
function ln(i, l) {
  lh(i.x, l.x), lh(i.y, l.y);
}
function sg(i, l) {
  i.translate = l.translate, i.scale = l.scale, i.originPoint = l.originPoint, i.origin = l.origin;
}
const m1 = 1e-4, GA = 1 - m1, qA = 1 + m1, p1 = 0.01, XA = 0 - p1, ZA = 0 + p1;
function Re(i) {
  return i.max - i.min;
}
function QA(i, l, o) {
  return Math.abs(i - l) <= o;
}
function ug(i, l, o, r = 0.5) {
  i.origin = r, i.originPoint = Ht(l.min, l.max, i.origin), i.scale = Re(o) / Re(l), i.translate = Ht(o.min, o.max, i.origin) - i.originPoint, (i.scale >= GA && i.scale <= qA || isNaN(i.scale)) && (i.scale = 1), (i.translate >= XA && i.translate <= ZA || isNaN(i.translate)) && (i.translate = 0);
}
function Eo(i, l, o, r) {
  ug(i.x, l.x, o.x, r?.originX), ug(i.y, l.y, o.y, r?.originY);
}
function og(i, l, o, r = 0) {
  const c = r ? Ht(o.min, o.max, r) : o.min;
  i.min = c + l.min, i.max = i.min + Re(l);
}
function KA(i, l, o, r) {
  og(i.x, l.x, o.x, r?.x), og(i.y, l.y, o.y, r?.y);
}
function rg(i, l, o, r = 0) {
  const c = r ? Ht(o.min, o.max, r) : o.min;
  i.min = l.min - c, i.max = i.min + Re(l);
}
function bo(i, l, o, r) {
  rg(i.x, l.x, o.x, r?.x), rg(i.y, l.y, o.y, r?.y);
}
function cg(i, l, o, r, c) {
  return i -= l, i = To(i, 1 / o, r), c !== void 0 && (i = To(i, 1 / c, r)), i;
}
function JA(i, l = 0, o = 1, r = 0.5, c, h = i, d = i) {
  if (Cn.test(l) && (l = parseFloat(l), l = Ht(d.min, d.max, l / 100) - d.min), typeof l != "number")
    return;
  let m = Ht(h.min, h.max, r);
  i === h && (m -= l), i.min = cg(i.min, l, o, m, c), i.max = cg(i.max, l, o, m, c);
}
function fg(i, l, [o, r, c], h, d) {
  JA(i, l[o], l[r], l[c], l.scale, h, d);
}
const FA = ["x", "scaleX", "originX"], PA = ["y", "scaleY", "originY"];
function hg(i, l, o, r) {
  fg(i.x, l, FA, o?.x, r?.x), fg(i.y, l, PA, o?.y, r?.y);
}
const dg = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), ki = () => ({
  x: dg(),
  y: dg()
}), mg = () => ({ min: 0, max: 0 }), ee = () => ({
  x: mg(),
  y: mg()
});
function pg(i) {
  return i.translate === 0 && i.scale === 1;
}
function y1(i) {
  return pg(i.x) && pg(i.y);
}
function yg(i, l) {
  return i.min === l.min && i.max === l.max;
}
function kA(i, l) {
  return yg(i.x, l.x) && yg(i.y, l.y);
}
function gg(i, l) {
  return Math.round(i.min) === Math.round(l.min) && Math.round(i.max) === Math.round(l.max);
}
function g1(i, l) {
  return gg(i.x, l.x) && gg(i.y, l.y);
}
function vg(i) {
  return Re(i.x) / Re(i.y);
}
function Sg(i, l) {
  return i.translate === l.translate && i.scale === l.scale && i.originPoint === l.originPoint;
}
class IA {
  constructor() {
    this.members = [];
  }
  add(l) {
    fh(this.members, l);
    for (let o = this.members.length - 1; o >= 0; o--) {
      const r = this.members[o];
      if (r === l || r === this.lead || r === this.prevLead)
        continue;
      const c = r.instance;
      (!c || c.isConnected === !1) && !r.snapshot && (mo(this.members, r), r.unmount());
    }
    l.scheduleRender();
  }
  remove(l) {
    if (mo(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) {
      const o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(l) {
    for (let o = this.members.indexOf(l) - 1; o >= 0; o--) {
      const r = this.members[o];
      if (r.isPresent !== !1 && r.instance?.isConnected !== !1)
        return this.promote(r), !0;
    }
    return !1;
  }
  promote(l, o) {
    const r = this.lead;
    if (l !== r && (this.prevLead = r, this.lead = l, l.show(), r)) {
      r.updateSnapshot(), l.scheduleRender();
      const { layoutDependency: c } = r.options, { layoutDependency: h } = l.options;
      (c === void 0 || c !== h) && (l.resumeFrom = r, o && (r.preserveOpacity = !0), r.snapshot && (l.snapshot = r.snapshot, l.snapshot.latestValues = r.animationValues || r.latestValues), l.root?.isUpdating && (l.isLayoutDirty = !0)), l.options.crossfade === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      l.options.onExitComplete?.(), l.resumingFrom?.options.onExitComplete?.();
    });
  }
  scheduleRender() {
    this.members.forEach((l) => l.instance && l.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
function Tg(i, l) {
  return l.max === l.min ? 0 : i / (l.max - l.min) * 100;
}
const ns = {
  correct: (i, l) => {
    if (!l.target)
      return i;
    if (typeof i == "string")
      if (at.test(i))
        i = parseFloat(i);
      else
        return i;
    const o = Tg(i, l.target.x), r = Tg(i, l.target.y);
    return `${o}% ${r}%`;
  }
}, WA = {
  correct: (i, { treeScale: l, projectionDelta: o }) => {
    const r = i, c = Ie.parse(i);
    if (c.length > 5)
      return r;
    const h = Ie.createTransformer(i), d = typeof c[0] != "number" ? 1 : 0, m = o.x.scale * l.x, v = o.y.scale * l.y;
    c[0 + d] /= m, c[1 + d] /= v;
    const S = Ht(m, v, 0.5);
    return typeof c[2 + d] == "number" && (c[2 + d] /= S), typeof c[3 + d] == "number" && (c[3 + d] /= S), h(c);
  }
}, $A = {
  borderRadius: /* @__PURE__ */ Object.assign({}, ns, {
    applyTo: /* @__PURE__ */ Uh.slice()
  }),
  borderTopLeftRadius: ns,
  borderTopRightRadius: ns,
  borderBottomLeftRadius: ns,
  borderBottomRightRadius: ns,
  boxShadow: WA
};
function t3(i, l, o) {
  let r = "";
  const c = i.x.translate / l.x, h = i.y.translate / l.y, d = o?.z || 0;
  if ((c || h || d) && (r = `translate3d(${c}px, ${h}px, ${d}px) `), (l.x !== 1 || l.y !== 1) && (r += `scale(${1 / l.x}, ${1 / l.y}) `), o) {
    const { transformPerspective: S } = o;
    S && (r = `perspective(${S}px) ${r}`);
    for (let g = 0; g < al.length; g++) {
      const y = al[g], b = o[y];
      b && (r += `${y}(${b}deg) `), !g && o.pathRotation && (r += `rotate(${o.pathRotation}deg) `);
    }
  }
  const m = i.x.scale * l.x, v = i.y.scale * l.y;
  return (m !== 1 || v !== 1) && (r += `scale(${m}, ${v})`), r || "none";
}
function on(i) {
  return [i("x"), i("y")];
}
const e3 = (i, l) => i.depth - l.depth;
class n3 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(l) {
    fh(this.children, l), this.isDirty = !0;
  }
  remove(l) {
    mo(this.children, l), this.isDirty = !0;
  }
  forEach(l) {
    this.isDirty && this.children.sort(e3), this.isDirty = !1, this.children.forEach(l);
  }
}
const uo = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
}, Eg = ["z", "skew", "skewZ"], a3 = 1e3;
let i3 = 0;
function bg(i, l, o, r) {
  const { latestValues: c } = l;
  c[i] && (o[i] = c[i], l.setStaticValue(i, 0), r && (r[i] = 0));
}
const Nf = (i) => i.instance && el.get(i.instance)?.demote() && i.resetSkewAndRotation();
function v1(i) {
  if (i.hasCheckedOptimisedAppear = !0, i.root === i)
    return;
  const { visualElement: l } = i.options;
  if (!l)
    return;
  const o = n1(l);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: c, layoutId: h } = i.options;
    window.MotionCancelOptimisedAnimation(o, "transform", jt, !(c || h));
  }
  const { parent: r } = i;
  r && !r.hasCheckedOptimisedAppear && v1(r);
}
function S1({ attachResizeListener: i, defaultParent: l, measureScroll: o, checkIsScrollRoot: r, resetTransform: c }) {
  return Object.assign(ss, {
    ...$A,
    ...ss
  }), class {
    constructor(d = {}, m = l?.()) {
      this.id = i3++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(u3), this.nodes.forEach(p3), this.nodes.forEach(y3), this.nodes.forEach(o3);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = d, this.root = m ? m.root || m : this, this.path = m ? [...m.path, m] : [], this.parent = m, this.depth = m ? m.depth + 1 : 0;
      for (let v = 0; v < this.path.length; v++)
        this.path[v].shouldResetTransform = !0;
      this.root === this && (this.nodes = new n3());
    }
    addEventListener(d, m) {
      return this.eventHandlers.has(d) || this.eventHandlers.set(d, new po()), this.eventHandlers.get(d).add(m);
    }
    notifyListeners(d, ...m) {
      this.eventHandlers.get(d)?.notify(...m);
    }
    hasListeners(d) {
      return this.eventHandlers.has(d);
    }
    /**
     * Lifecycles
     */
    mount(d) {
      if (this.instance)
        return;
      this.isSVG = Bh(d) && !BA(d), this.instance = d;
      const { layoutId: m, layout: v, visualElement: S } = this.options;
      if (S && !S.current && S.mount(d), this.root.nodes.add(this), this.parent?.children.add(this), this.root.hasTreeAnimated && (v || m) && (this.isLayoutDirty = !0), i) {
        let g, y = 0;
        const b = () => this.root.updateBlockedByResize = !1;
        jt.read(() => {
          y = window.innerWidth;
        }), i(d, () => {
          const R = window.innerWidth;
          R !== y && (y = R, this.root.updateBlockedByResize = !0, g?.(), g = UA(b, 250), uo.hasAnimatedSinceResize && (uo.hasAnimatedSinceResize = !1, this.nodes.forEach(Cg)));
        });
      }
      m && this.root.registerSharedNode(m, this), this.addLayoutListener();
    }
    /**
     * Only register the layout animation handler if this node requires
     * layout animation. This is called on mount, and again whenever options
     * change, as `layout` or `layoutId` may be enabled after mount.
     */
    addLayoutListener() {
      const { layoutId: d, layout: m, visualElement: v, animate: S } = this.options;
      !this.instance || this.hasLayoutListener || S === !1 || !v || !(d || m) || (this.hasLayoutListener = !0, this.addEventListener("didUpdate", ({ delta: g, hasLayoutChanged: y, hasRelativeLayoutChanged: b, layout: R }) => {
        if (this.isAnimationBlocked) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const z = this.options.transition || v.getDefaultTransition() || T3, { onLayoutAnimationStart: B, onLayoutAnimationComplete: _ } = v.getProps(), X = !this.targetLayout || !g1(this.targetLayout, R), K = !y && b;
        if (this.options.layoutRoot || this.resumeFrom || K || y && (X || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const k = {
            ..._h(z, "layout"),
            onPlay: B,
            onComplete: _
          };
          (v.shouldReduceMotion || this.options.layoutRoot) && (k.delay = 0, k.type = !1), this.startAnimation(k), this.setAnimationOrigin(g, K, k.path);
        } else
          y || Cg(this), this.isLead() && this.options.onExitComplete?.();
        this.targetLayout = R;
      }));
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), this.getStack()?.remove(this), this.parent?.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), this.hasLayoutListener = !1, Aa(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes?.forEach(g3), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: d } = this.options;
      return d && d.getProps().transformTemplate;
    }
    willUpdate(d = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete?.();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && v1(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      Nf(this), this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g];
        y.shouldResetTransform = !0, Nf(y), (typeof y.latestValues.x == "string" || typeof y.latestValues.y == "string") && (y.isLayoutDirty = !0), y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1), y.isAnimationBlocked && (y.dragSnapshot || (y.dragSnapshot = y.measure()), this.dragAncestor = y);
      }
      const { layoutId: m, layout: v } = this.options;
      if (m === void 0 && !v)
        return;
      const S = this.getTransformTemplate();
      this.prevTransformTemplateValue = S ? S(this.latestValues, "") : void 0, this.updateSnapshot(), d && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const v = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), v && this.nodes.forEach(c3), this.nodes.forEach(Ag);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Mg);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(h3), this.nodes.forEach(d3), this.nodes.forEach(m3), this.nodes.forEach(l3), this.nodes.forEach(s3)) : this.nodes.forEach(Mg), this.clearAllSnapshots();
      const m = Qt.now();
      ne.delta = Dn(0, 1e3 / 60, m - ne.timestamp), ne.timestamp = m, ne.isProcessing = !0, Cf.update.process(ne), Cf.preRender.process(ne), Cf.render.process(ne), ne.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, ms.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(r3), this.sharedNodes.forEach((d, m) => d.members.length ? d.removeLeadSnapshot() : this.sharedNodes.delete(m));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, jt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      jt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Re(this.snapshot.measuredBox.x) && !Re(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let v = 0; v < this.path.length; v++)
          this.path[v].updateScroll();
      const d = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected || (this.layoutCorrected = ee()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: m } = this.options;
      m?.notify("LayoutMeasure", this.layout.layoutBox, d?.layoutBox);
    }
    updateScroll(d = "measure") {
      const { scroll: m, instance: v } = this, { animationId: S } = this.root;
      if (this.options.layoutScroll && v && !(m && m.animationId === S && m.phase === d)) {
        const g = r(v);
        this.scroll = {
          animationId: S,
          phase: d,
          isRoot: g,
          offset: o(v),
          wasRoot: m ? m.isRoot : g
        };
      }
    }
    resetTransform() {
      if (!c)
        return;
      const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
      d && Nf(this);
      const m = this.projectionDelta && !y1(this.projectionDelta), v = this.getTransformTemplate(), S = v ? v(this.latestValues, "") : void 0, g = S !== this.prevTransformTemplateValue;
      d && this.instance && (m || Fa(this.latestValues) || g) && (c(this.instance, S), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(d = !0) {
      const m = this.measurePageBox();
      let v = this.removeElementScroll(m);
      return d && (v = this.removeTransform(v)), E3(v), {
        animationId: this.root.animationId,
        measuredBox: m,
        layoutBox: v,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: d } = this.options;
      if (!d)
        return ee();
      const m = d.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(b3))) {
        const { scroll: S } = this.root;
        S && (rn(m.x, S.offset.x), rn(m.y, S.offset.y));
      }
      return m;
    }
    removeElementScroll(d) {
      const m = ee();
      if (ln(m, d), this.scroll?.wasRoot)
        return m;
      for (let v = 0; v < this.path.length; v++) {
        const S = this.path[v], { scroll: g, options: y } = S;
        S !== this.root && g && y.layoutScroll && (g.wasRoot && ln(m, d), rn(m.x, g.offset.x), rn(m.y, g.offset.y));
      }
      return m;
    }
    applyTransform(d, m = !1, v, S, g = 0) {
      const y = v || ee();
      ln(y, d);
      for (let b = g; b < this.path.length; b++) {
        const R = this.path[b];
        !m && R.options.layoutScroll && R.scroll && R !== R.root && (rn(y.x, -R.scroll.offset.x), rn(y.y, -R.scroll.offset.y)), Fa(R.latestValues) && lo(y, R.latestValues, R.layout?.layoutBox);
      }
      return !S && Fa(this.latestValues) && lo(y, this.latestValues, this.layout?.layoutBox), y;
    }
    removeTransform(d) {
      const m = ee();
      ln(m, d);
      for (let v = 0; v < this.path.length; v++) {
        const S = this.path[v];
        if (!Fa(S.latestValues))
          continue;
        let g;
        S.instance && (ah(S.latestValues) && S.updateSnapshot(), g = ee(), ln(g, S.measurePageBox())), hg(m, S.latestValues, S.snapshot?.layoutBox, g);
      }
      return Fa(this.latestValues) && hg(m, this.latestValues), m;
    }
    setTargetDelta(d) {
      this.targetDelta = d, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(d) {
      this.options = {
        ...this.options,
        ...d,
        crossfade: d.crossfade !== void 0 ? d.crossfade : !0
      }, this.addLayoutListener();
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ne.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(d = !1) {
      const m = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
      const v = !!this.resumingFrom || this !== m;
      if (!(d || v && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: g, layoutId: y } = this.options;
      if (!this.layout || !(g || y))
        return;
      this.resolvedRelativeTargetAt = ne.timestamp;
      const b = this.getClosestProjectingParent();
      !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && b && b.layout ? this.createRelativeTarget(b, this.layout.layoutBox, b.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ee(), this.targetWithTransforms = ee()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), KA(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target, !0) : ln(this.target, this.layout.layoutBox), f1(this.target, this.targetDelta)) : ln(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && b && (!b.resumingFrom == !this.resumingFrom || /**
       * Shared layout animations within a layoutRoot
       * animate relative to it.
       */
      b.options.layoutRoot && !b.resumingFrom) && !b.options.layoutScroll && b.target && this.animationProgress !== 1 ? this.createRelativeTarget(b, this.target, b.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || ah(this.parent.latestValues) || c1(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(d, m, v) {
      this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ee(), this.relativeTargetOrigin = ee(), bo(this.relativeTargetOrigin, m, v, this.options.layoutAnchor || void 0), ln(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const d = this.getLead(), m = !!this.resumingFrom || this !== d;
      let v = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (v = !1), m && (this.isSharedProjectionDirty || this.isTransformDirty) && (v = !1), this.resolvedRelativeTargetAt === ne.timestamp && (v = !1), v)
        return;
      const { layout: S, layoutId: g } = this.options;
      if (this.isTreeAnimating = !!(this.parent?.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(S || g))
        return;
      ln(this.layoutCorrected, this.layout.layoutBox);
      const y = this.treeScale.x, b = this.treeScale.y;
      _A(this.layoutCorrected, this.treeScale, this.path, m && (d.relativeTarget && !d.relativeParent.resumingFrom ? d.relativeParent : !0)), d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox, d.targetWithTransforms = ee());
      const { target: R } = d;
      if (!R) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (sg(this.prevProjectionDelta.x, this.projectionDelta.x), sg(this.prevProjectionDelta.y, this.projectionDelta.y)), Eo(this.projectionDelta, this.layoutCorrected, R, this.latestValues), (this.treeScale.x !== y || this.treeScale.y !== b || !Sg(this.projectionDelta.x, this.prevProjectionDelta.x) || !Sg(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", R));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(d = !0) {
      this.options.visualElement?.scheduleRender(), d && this.getStack()?.scheduleRender(), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = ki(), this.projectionDelta = ki(), this.projectionDeltaWithTransform = ki();
    }
    setAnimationOrigin(d, m = !1, v) {
      const S = this.snapshot, g = S ? S.latestValues : {}, y = { ...this.latestValues }, b = ki();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !m;
      const R = ee(), z = S?.source !== this.layout?.source, B = this.getStack(), _ = !B || B.members.length <= 1, X = !!(z && !_ && this.options.crossfade === !0 && !this.path.some(S3));
      this.animationProgress = 0;
      let K;
      const k = v?.interpolateProjection(d);
      this.mixTargetDelta = ($) => {
        const et = $ / 1e3, st = k?.(et);
        Dg(b.x, d.x, et), Dg(b.y, d.y, et), st && (b.x.translate = st.x, b.y.translate = st.y), this.setTargetDelta(b), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (bo(R, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), v3(this.relativeTarget, this.relativeTargetOrigin, R, et), K && kA(this.relativeTarget, K) && (this.isProjectionDirty = !1), K || (K = ee()), ln(K, this.relativeTarget)), z && (this.animationValues = y, HA(y, g, this.latestValues, et, X, _)), st?.rotate !== void 0 && (this.animationValues || (this.animationValues = y), this.animationValues.pathRotation = st.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = et;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(d) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (Aa(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = jt.update(() => {
        uo.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = nl(0)), this.motionValue.jump(0, !1), this.currentAnimation = wA(this.motionValue, [0, 1e3], {
          ...d,
          velocity: 0,
          isSync: !0,
          onUpdate: (m) => {
            this.mixTargetDelta(m), d.onUpdate && d.onUpdate(m);
          },
          onComplete: () => {
            d.onComplete && d.onComplete(), this.completeAnimation();
          }
        }), f2(this.currentAnimation, this), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const d = this.getStack();
      d && d.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta?.(a3), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const d = this.getLead(), { targetWithTransforms: m, layout: v, latestValues: S } = d;
      let { target: g } = d;
      if (!(!m || !g || !v)) {
        if (this !== d && this.layout && v && T1(this.options.animationType, this.layout.layoutBox, v.layoutBox)) {
          const { layoutBox: y } = this.layout, b = g;
          g = this.target || ee(), Ng(g.x, b.x, y.x), Ng(g.y, b.y, y.y);
        }
        ln(m, g), lo(m, S), Eo(this.projectionDeltaWithTransform, this.layoutCorrected, m, S);
      }
    }
    registerSharedNode(d, m) {
      this.sharedNodes.has(d) || this.sharedNodes.set(d, new IA()), this.sharedNodes.get(d).add(m);
      const S = m.options.initialPromotionConfig;
      m.promote({
        transition: S?.transition,
        preserveFollowOpacity: S?.shouldPreserveFollowOpacity ? S.shouldPreserveFollowOpacity(m) : void 0
      });
    }
    isLead() {
      const d = this.getStack();
      return d ? d.lead === this : !0;
    }
    getLead() {
      const { layoutId: d } = this.options;
      return d ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: d } = this.options;
      return d ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: d } = this.options;
      if (d)
        return this.root.sharedNodes.get(d);
    }
    promote({ needsReset: d, transition: m, preserveFollowOpacity: v } = {}) {
      this.getStack()?.promote(this, v), d && (this.projectionDelta = void 0, this.needsReset = !0), m && this.setOptions({ transition: m });
    }
    relegate() {
      return this.getStack()?.relegate(this) || !1;
    }
    resetSkewAndRotation() {
      const { visualElement: d } = this.options;
      if (!d)
        return;
      const { latestValues: m } = d;
      if (!r1(m))
        return;
      const v = {};
      for (let S = 0; S < Eg.length; S++)
        bg(Eg[S], d, v, this.animationValues);
      for (let S = 0; S < al.length; S++)
        bg(al[S], d, v, this.animationValues);
      d.render();
      for (const S in v)
        d.setStaticValue(S, v[S]), this.animationValues && (this.animationValues[S] = v[S]);
      d.scheduleRender();
    }
    applyProjectionStyles(d, m) {
      if (!this.instance || this.isSVG)
        return;
      const v = this.getLead();
      if (!this.isVisible && v !== this) {
        d.visibility = "hidden";
        return;
      }
      const S = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, d.visibility = "", d.opacity = "", d.pointerEvents = so(m?.pointerEvents) || "", d.transform = S ? S(this.latestValues, "") : "none";
        return;
      }
      if (!this.projectionDelta || !this.layout || !v.target) {
        (this.options.layoutId || this.needsShow) && (this.needsShow = !1, d.visibility = "", d.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, d.pointerEvents = so(m?.pointerEvents) || ""), this.hasProjected && !Fa(this.latestValues) && (d.transform = S ? S({}, "") : "none", this.hasProjected = !1);
        return;
      }
      d.visibility = "";
      const g = v.animationValues || v.latestValues;
      this.applyTransformsToTarget();
      let y = t3(this.projectionDeltaWithTransform, this.treeScale, g);
      S && (y = S(g, y)), d.transform = y;
      const { x: b, y: R } = this.projectionDelta;
      d.transformOrigin = `${b.origin * 100}% ${R.origin * 100}% 0`, v.animationValues ? d.opacity = v === this ? g.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : g.opacityExit : d.opacity = v === this ? g.opacity !== void 0 ? g.opacity : "" : g.opacityExit !== void 0 ? g.opacityExit : 0;
      for (const z in ss) {
        if (g[z] === void 0)
          continue;
        const { correct: B, applyTo: _, isCSSVariable: X } = ss[z], K = y === "none" ? g[z] : B(g[z], v);
        if (_) {
          const k = _.length;
          for (let $ = 0; $ < k; $++)
            d[_[$]] = K;
        } else
          X ? this.options.visualElement.renderState.vars[z] = K : d[z] = K;
      }
      this.options.layoutId && (d.pointerEvents = v === this ? so(m?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = this.dragSnapshot = this.dragAncestor = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((d) => d.currentAnimation?.stop()), this.root.nodes.forEach(Ag), this.root.sharedNodes.clear();
    }
  };
}
function l3(i) {
  i.updateLayout(), f3(i);
}
function s3(i) {
  const l = i.resumeFrom?.snapshot || i.snapshot;
  if (i.isLead() && i.layout && l && i.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: r } = i.layout, { animationType: c } = i.options, h = l.source !== i.layout.source, d = (R, z) => {
      if (c === "size")
        on((B) => {
          const _ = Re(R[B]);
          R[B].min = z[B].min, R[B].max = R[B].min + _;
        });
      else if (c === "x" || c === "y") {
        const B = c === "x" ? "y" : "x";
        lh(R[B], z[B]);
      } else T1(c, l.layoutBox, o) && on((B) => {
        const _ = Re(z[B]);
        R[B].max = R[B].min + _, i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0, i.relativeTarget[B].max = i.relativeTarget[B].min + _);
      });
    }, m = h ? l.measuredBox : l.layoutBox;
    d(m, o);
    const v = ki();
    Eo(v, o, l.layoutBox);
    const S = ki();
    Eo(S, h ? i.applyTransform(r, !0) : o, m);
    const g = !y1(v);
    let y = !1;
    const b = i.getClosestProjectingParent();
    if ((!i.resumeFrom || b?.options.layoutRoot && i.resumeFrom.path.includes(b)) && b && !b.resumeFrom) {
      const { snapshot: R, layout: z } = b;
      if (R && z) {
        const B = i.options.layoutAnchor || void 0, _ = ee();
        bo(_, h ? i.resumeFrom.applyTransform(l.layoutBox, !0, void 0, !0, b.depth + 1) : l.layoutBox, R.layoutBox, B);
        const X = ee();
        bo(X, o, z.layoutBox, B), h && d(_, X), g1(_, X) || (y = !0), b.options.layoutRoot && (i.relativeTarget = X, i.relativeTargetOrigin = _, i.relativeParent = b);
      }
    }
    i.notifyListeners("didUpdate", {
      layout: o,
      snapshot: l,
      delta: S,
      layoutDelta: v,
      hasLayoutChanged: g,
      hasRelativeLayoutChanged: y
    });
  } else i.isLead() && i.options.onExitComplete?.();
  i.options.transition = void 0;
}
function u3(i) {
  i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty), i.isSharedProjectionDirty || (i.isSharedProjectionDirty = !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty)), i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function o3(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function r3(i) {
  i.clearSnapshot();
}
function Ag(i) {
  i.clearMeasurements();
}
function c3(i) {
  i.isLayoutDirty = !0, i.updateLayout();
}
function Mg(i) {
  i.isLayoutDirty = !1;
}
function f3(i) {
  const { snapshot: l, dragAncestor: o } = i, r = o?.isAnimationBlocked && o.layout;
  if (!l || !r || i.resumeFrom || i.isAnimationBlocked)
    return;
  const c = o.dragSnapshot;
  on((h) => rn(l.layoutBox[h], r.layoutBox[h].min - c.layoutBox[h].min));
}
function h3(i) {
  i.isAnimationBlocked && i.layout && !i.isLayoutDirty && (i.snapshot = i.dragSnapshot || i.layout, i.isLayoutDirty = !0);
}
function d3(i) {
  i.relativeTarget && i.relativeParent?.isLayoutDirty && (i.currentAnimation ? i.isLayoutDirty = !0 : (i.targetDelta = void 0, i.removeRelativeTarget()));
}
function m3(i) {
  const { visualElement: l } = i.options;
  l?.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), i.resetTransform();
}
function Cg(i) {
  i.finishAnimation(), i.targetDelta = i.relativeTarget = i.target = void 0, i.isProjectionDirty = !0;
}
function p3(i) {
  i.resolveTargetDelta();
}
function y3(i) {
  i.calcProjection();
}
function g3(i) {
  i.resetSkewAndRotation();
}
function Dg(i, l, o) {
  i.translate = Ht(l.translate, 0, o), i.scale = Ht(l.scale, 1, o), i.origin = l.origin, i.originPoint = l.originPoint;
}
function Og(i, l, o, r) {
  i.min = Ht(l.min, o.min, r), i.max = Ht(l.max, o.max, r);
}
function v3(i, l, o, r) {
  Og(i.x, l.x, o.x, r), Og(i.y, l.y, o.y, r);
}
function S3(i) {
  return i.animationValues?.opacityExit !== void 0;
}
const T3 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Rg = (i) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i), xg = Rg("applewebkit/") && !Rg("chrome/") ? Math.round : cn;
function zg(i) {
  i.min = xg(i.min), i.max = xg(i.max);
}
function E3(i) {
  zg(i.x), zg(i.y);
}
function Ng(i, l, o) {
  i.max = Re(o) + (i.min = l.min);
}
function T1(i, l, o) {
  return i === "position" || i === "preserve-aspect" && !QA(vg(l), vg(o), 0.2);
}
function b3(i) {
  return i !== i.root && i.scroll?.wasRoot;
}
function ti(i, l, o, r = { passive: !0 }) {
  return i.addEventListener(l, o, r), () => i.removeEventListener(l, o, r);
}
const A3 = /* @__PURE__ */ S1({
  attachResizeListener: (i, l) => ti(i, "resize", l),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), oo = {
  current: void 0
}, E1 = /* @__PURE__ */ S1({
  measureScroll: (i) => ({
    x: i.scrollLeft,
    y: i.scrollTop
  }),
  defaultParent: () => {
    if (!oo.current) {
      const i = new A3({});
      i.mount(window), i.setOptions({ layoutScroll: !0 }), oo.current = i;
    }
    return oo.current;
  },
  resetTransform: (i, l) => {
    i.style.transform = l !== void 0 ? l : "none";
  },
  checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed"
}), M3 = /* @__PURE__ */ new WeakMap();
function xo(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function ps(i) {
  return typeof i == "string" || Array.isArray(i);
}
const zo = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], _g = /* @__PURE__ */ ["initial"].concat(zo);
function No(i) {
  if (xo(i.animate))
    return !0;
  for (let l = 0; l < _g.length; l++)
    if (ps(i[_g[l]]))
      return !0;
  return !1;
}
function b1(i) {
  return !!(No(i) || i.variants);
}
function C3(i, l, o) {
  for (const r in l) {
    const c = l[r], h = o[r];
    if (ye(c))
      i.addValue(r, c);
    else if (ye(h))
      i.addValue(r, nl(c, { owner: i }));
    else if (h !== c)
      if (i.hasValue(r)) {
        const d = i.getValue(r);
        d.liveStyle === !0 ? d.jump(c) : d.hasAnimated || d.set(c);
      } else {
        const d = i.getStaticValue(r);
        i.addValue(r, nl(d !== void 0 ? d : c, { owner: i }));
      }
  }
  for (const r in o)
    l[r] === void 0 && i.removeValue(r);
  return l;
}
const Ao = { current: null }, Yh = { current: !1 }, D3 = typeof window < "u";
function A1() {
  if (Yh.current = !0, !!D3)
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"), l = () => Ao.current = i.matches;
      i.addEventListener("change", l), l();
    } else
      Ao.current = !1;
}
const Vg = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let Mo = {};
function M1(i) {
  Mo = i;
}
function O3() {
  return Mo;
}
class R3 {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(l, o, r) {
    return {};
  }
  constructor({ parent: l, props: o, presenceContext: r, reducedMotionConfig: c, skipAnimations: h, blockInitialAnimation: d, visualState: m }, v = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = xh, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const R = Qt.now();
      this.renderScheduledAt < R && (this.renderScheduledAt = R, jt.render(this.render, !1, !0));
    };
    const { latestValues: S, renderState: g } = m;
    this.latestValues = S, this.baseTarget = { ...S }, this.initialValues = o.initial ? { ...S } : {}, this.renderState = g, this.parent = l, this.props = o, this.presenceContext = r, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = h, this.options = v, this.blockInitialAnimation = !!d, this.isControllingVariants = No(o), this.isVariantNode = b1(o), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(l && l.current);
    const { willChange: y, ...b } = this.scrapeMotionValuesFromProps(o, {}, this);
    for (const R in b) {
      const z = b[R];
      S[R] !== void 0 && ye(z) && z.set(S[R]);
    }
  }
  mount(l) {
    if (this.hasBeenMounted)
      for (const o in this.initialValues)
        this.values.get(o)?.jump(this.initialValues[o]), this.latestValues[o] = this.initialValues[o];
    if (this.current = l, M3.set(l, this), this.projection?.instance || this.projection?.mount(l), this.isVariantNode && !this.isControllingVariants) {
      let o = this;
      do
        o = o.props.inherit !== !1 && o.parent;
      while (o && !o.isVariantNode);
      if (o) {
        const { variantChildren: r } = o;
        r.add(this), this.removeFromVariantTree = () => r.delete(this);
      }
    }
    this.values.forEach((o, r) => this.bindToMotionValue(r, o)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Yh.current || A1(), this.shouldReduceMotion = Ao.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    this.projection?.unmount(), Aa(this.notifyUpdate), Aa(this.render), this.valueSubscriptions.forEach((l) => l()), this.valueSubscriptions.clear(), this.removeFromVariantTree?.(), this.parent?.removeChild(this);
    for (const l in this.events)
      this.events[l].clear();
    for (const l in this.features) {
      const o = this.features[l];
      o && (o.unmount(), o.isMounted = !1);
    }
    this.current = null;
  }
  addChild(l) {
    this.children.add(l), (this.enteringChildren || (this.enteringChildren = /* @__PURE__ */ new Set())).add(l);
  }
  removeChild(l) {
    this.children.delete(l), this.enteringChildren?.delete(l);
  }
  bindToMotionValue(l, o) {
    if (this.valueSubscriptions.get(l)?.(), o.accelerate && $f.has(l) && this.current instanceof HTMLElement) {
      const { factory: d, keyframes: m, times: v, ease: S, duration: g } = o.accelerate, y = new Kv({
        element: this.current,
        name: l,
        keyframes: m,
        times: v,
        ease: S,
        duration: /* @__PURE__ */ ke(g)
      }), b = d(y);
      this.valueSubscriptions.set(l, () => {
        b(), y.cancel();
      });
      return;
    }
    const r = Ea.has(l);
    r && this.onBindTransform && this.onBindTransform();
    const c = o.on("change", (d) => {
      this.latestValues[l] = d, this.props.onUpdate && jt.preRender(this.notifyUpdate), r && (this.projection && (this.projection.isTransformDirty = !0), el.get(this.current)?.check()), this.scheduleRender();
    });
    let h;
    typeof window < "u" && window.MotionCheckAppearSync && (h = window.MotionCheckAppearSync(this, l, o)), this.valueSubscriptions.set(l, () => {
      c(), h?.();
    });
  }
  sortNodePosition(l) {
    return !this.current || !l.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in Mo) {
      const o = Mo[l];
      if (!o)
        continue;
      const { isEnabled: r, Feature: c } = o;
      if (!this.features[l] && c && r(this.props) && (this.features[l] = new c(this)), this.features[l]) {
        const h = this.features[l];
        h.isMounted ? h.update() : (h.mount(), h.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ee();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, o) {
    this.latestValues[l] = o;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(l, o) {
    const { transformTemplate: r, onUpdate: c } = this.props;
    (l.transformTemplate || r) && this.scheduleRender(), (l.transformTemplate && !r || l.onUpdate && !c) && el.get(this.current)?.demote(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = o;
    for (let h = 0; h < Vg.length; h++) {
      const d = Vg[h];
      this.propEventSubscriptions[d]?.(), delete this.propEventSubscriptions[d];
      const m = "on" + d, v = l[m];
      v && (this.propEventSubscriptions[d] = this.on(d, v));
    }
    this.prevMotionValues = C3(this, this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue?.();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(l) {
    return this.props.variants?.[l];
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(l, o) {
    const r = this.values.get(l);
    if (o !== r) {
      r && this.removeValue(l), this.bindToMotionValue(l, o), this.values.set(l, o);
      const c = o.get();
      c !== void 0 && (this.latestValues[l] = c);
    }
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(l) {
    this.values.delete(l), this.valueSubscriptions.get(l)?.(), this.valueSubscriptions.delete(l), delete this.latestValues[l], this.removeValueFromRenderState(l, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, o) {
    let r = this.props.values?.[l];
    return r || (r = this.values.get(l), r === void 0 && o !== void 0 && (r = nl(o ?? this.getDefaultValue?.(l), {
      owner: this
    }), this.addValue(l, r)), r);
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(l, o) {
    let r = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
    return r != null && (typeof r == "string" && (hh(r) || dh(r)) ? r = parseFloat(r) : (
      /**
       * If the value as read isn't animatable (e.g. "none") but
       * the target is, derive an animatable none from the target.
       * A value is animatable if it's a number or contains a
       * number or color, which is cheaper to check than trying
       * every value type in turn.
       */
      typeof r != "number" && !Ie.test(r) && Ie.test(o) && (r = Oh(l, o))
    ), this.setBaseTarget(l, ye(r) ? r.get() : r)), ye(r) ? r.get() : r;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(l, o) {
    this.baseTarget[l] = o;
  }
  on(l, o) {
    return (this.events[l] || (this.events[l] = new po())).add(o);
  }
  notify(l, ...o) {
    this.events[l]?.notify(...o);
  }
  scheduleRenderMicrotask() {
    ms.render(this.render);
  }
}
class C1 extends R3 {
  constructor() {
    super(...arguments), this.KeyframeResolver = DA;
  }
  sortInstanceNodePosition(l, o) {
    return l.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, o) {
    const r = l.style;
    return r ? r[o] : void 0;
  }
  removeValueFromRenderState(l, { vars: o, style: r }) {
    delete o[l], delete r[l];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    ye(l) && (this.childSubscription = l.on("change", (o) => {
      this.current && (this.current.textContent = `${o}`);
    }));
  }
}
function D1(i, { style: l, vars: o }, r, c) {
  const h = i.style;
  let d;
  for (d in l)
    h[d] = l[d];
  c?.applyProjectionStyles(h, r);
  for (d in o)
    h.setProperty(d, o[d]);
}
function O1(i, { layout: l, layoutId: o }) {
  return Ea.has(i) || i.startsWith("origin") || (l || o !== void 0) && (!!ss[i] || i === "opacity");
}
function Gh(i, l, o) {
  const r = i.style, c = l?.style, h = {};
  if (!r)
    return h;
  for (const d in r)
    (ye(r[d]) || c && ye(c[d]) || O1(d, i) || o?.getValue(d)?.liveStyle !== void 0) && (h[d] = r[d]);
  return h;
}
function x3(i) {
  return window.getComputedStyle(i);
}
class z3 extends C1 {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = D1;
  }
  mount(l) {
    super.mount(l);
  }
  readValueFromInstance(l, o) {
    if (Ea.has(o))
      return this.projection?.isProjecting ? ds(o) : E2(l, o);
    {
      const r = x3(l), c = (vv(o) ? r.getPropertyValue(o) : r[o]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: o }) {
    return h1(l, o);
  }
  build(l, o, r) {
    jh(l, o, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return Gh(l, o, r);
  }
}
const qh = (i) => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1;
function Xh(i) {
  return {
    point: {
      x: i.pageX,
      y: i.pageY
    }
  };
}
const N3 = (i) => (l) => qh(l) && i(l, Xh(l));
function us(i, l, o, r) {
  return ti(i, l, N3(o), r);
}
const ro = /* @__PURE__ */ new WeakMap();
let co;
const R1 = (i, l, o) => (r, c) => c && c[0] ? c[0][i + "Size"] : Bh(r) && "getBBox" in r ? r.getBBox()[l] : r[o], _3 = /* @__PURE__ */ R1("inline", "width", "offsetWidth"), V3 = /* @__PURE__ */ R1("block", "height", "offsetHeight");
function w3({ target: i, borderBoxSize: l }) {
  ro.get(i)?.forEach((o) => {
    o(i, {
      get width() {
        return _3(i, l);
      },
      get height() {
        return V3(i, l);
      }
    });
  });
}
function U3(i) {
  i.forEach(w3);
}
function B3() {
  typeof ResizeObserver > "u" || (co = new ResizeObserver(U3));
}
function L3(i, l) {
  co || B3();
  const o = i1(i);
  return o.forEach((r) => {
    let c = ro.get(r);
    c || (c = /* @__PURE__ */ new Set(), ro.set(r, c)), c.add(l), co?.observe(r);
  }), () => {
    o.forEach((r) => {
      const c = ro.get(r);
      c?.delete(l), c?.size || co?.unobserve(r);
    });
  };
}
const fo = /* @__PURE__ */ new Set();
let Ii;
function H3() {
  Ii = () => {
    const i = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    fo.forEach((l) => l(i));
  }, window.addEventListener("resize", Ii);
}
function j3(i) {
  return fo.add(i), Ii || H3(), () => {
    fo.delete(i), !fo.size && typeof Ii == "function" && (window.removeEventListener("resize", Ii), Ii = void 0);
  };
}
function wg(i, l) {
  return Lh(typeof i == "function" ? j3(i) : L3(i, l));
}
const Ug = (i, l) => Math.abs(i - l);
function Y3(i, l) {
  const o = Ug(i.x, l.x), r = Ug(i.y, l.y);
  return Math.sqrt(o ** 2 + r ** 2);
}
const Bg = /* @__PURE__ */ new Set(["auto", "scroll"]);
class x1 {
  constructor(l, o, { transformPagePoint: r, contextWindow: c = window, dragSnapToOrigin: h = !1, distanceThreshold: d = 3, element: m } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.onElementScroll = (R) => {
      this.handleScroll(R.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.hasPendingMove = !1, this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Wu(this.lastRawMoveEventInfo, this.transformPagePoint));
      const R = Vf(this.lastMoveEventInfo, this.history), z = this.startEvent !== null, B = Y3(R.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!z && !B)
        return;
      const { point: _ } = R;
      this.history.push({ ..._, timestamp: Qt.now() });
      const { onStart: X, onMove: K } = this.handlers;
      z || (X?.(this.lastMoveEvent, R), this.startEvent = this.lastMoveEvent), K?.(this.lastMoveEvent, R);
    }, this.handlePointerMove = (R, z) => {
      this.handleScroll(window), this.lastMoveEvent = R, this.lastRawMoveEventInfo = z, this.lastMoveEventInfo = Wu(z, this.transformPagePoint), this.hasPendingMove = !0, jt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (R, z) => {
      this.hasPendingMove && this.updatePoint(), this.end();
      const { onEnd: B, onSessionEnd: _, resumeAnimation: X } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && X?.(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const K = Vf(R.type === "pointercancel" ? this.lastMoveEventInfo : Wu(z, this.transformPagePoint), this.history);
      this.startEvent && B?.(R, K), _?.(R, K);
    }, !qh(l))
      return;
    this.dragSnapToOrigin = h, this.handlers = o, this.transformPagePoint = r, this.distanceThreshold = d, this.contextWindow = c || window;
    const v = Xh(l), S = Wu(v, this.transformPagePoint), { point: g } = S;
    this.history = [{ ...g, timestamp: Qt.now() }];
    const { onSessionStart: y } = o;
    y && y(l, Vf(S, this.history));
    const b = { passive: !0, capture: !0 };
    this.removeListeners = tl(us(this.contextWindow, "pointermove", this.handlePointerMove, b), us(this.contextWindow, "pointerup", this.handlePointerUp, b), us(this.contextWindow, "pointercancel", this.handlePointerUp, b)), m && this.startScrollTracking(m);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(l) {
    let o = l.parentElement;
    for (; o; ) {
      const r = getComputedStyle(o);
      (Bg.has(r.overflowX) || Bg.has(r.overflowY)) && this.scrollPositions.set(o, _f(o)), o = o.parentElement;
    }
    this.scrollPositions.set(window, _f(window)), this.removeScrollListeners = tl(
      // Capture listener catches element scroll events as they bubble
      ti(window, "scroll", this.onElementScroll, {
        capture: !0
      }),
      // Direct window scroll listener (window scroll doesn't bubble)
      ti(window, "scroll", this.onWindowScroll, {})
    );
  }
  /**
   * Handle scroll compensation during drag.
   *
   * For element scroll: adjusts history origin since pageX/pageY doesn't change.
   * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
   */
  handleScroll(l) {
    const o = this.scrollPositions.get(l);
    if (!o)
      return;
    const r = l === window, c = _f(l), h = { x: c.x - o.x, y: c.y - o.y };
    h.x === 0 && h.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += h.x, this.lastMoveEventInfo.point.y += h.y) : this.history.length > 0 && (this.history[0].x -= h.x, this.history[0].y -= h.y), this.scrollPositions.set(l, c), jt.update(this.updatePoint, !0));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners?.(), this.removeScrollListeners?.(), this.scrollPositions.clear(), Aa(this.updatePoint);
  }
}
const _f = (i) => i === window ? { x: window.scrollX, y: window.scrollY } : {
  x: i.scrollLeft,
  y: i.scrollTop
};
function Wu(i, l) {
  return l ? { point: l(i.point) } : i;
}
function Lg(i, l) {
  return { x: i.x - l.x, y: i.y - l.y };
}
function Vf({ point: i }, l) {
  return {
    point: i,
    delta: Lg(i, z1(l)),
    offset: Lg(i, G3(l)),
    velocity: q3(l, 0.1)
  };
}
function G3(i) {
  return i[0];
}
function z1(i) {
  return i[i.length - 1];
}
function q3(i, l) {
  if (i.length < 2)
    return { x: 0, y: 0 };
  let o = i.length - 1, r = null;
  const c = z1(i);
  for (; o >= 0 && (r = i[o], !(c.timestamp - r.timestamp > /* @__PURE__ */ ke(l))); )
    o--;
  if (!r)
    return { x: 0, y: 0 };
  r === i[0] && i.length > 2 && c.timestamp - r.timestamp > /* @__PURE__ */ ke(l) * 2 && (r = i[1]);
  const h = /* @__PURE__ */ Ye(c.timestamp - r.timestamp);
  if (h === 0)
    return { x: 0, y: 0 };
  const d = {
    x: (c.x - r.x) / h,
    y: (c.y - r.y) / h
  };
  return d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d;
}
const X3 = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function Z3(i) {
  return X3.has(i.tagName) || i.isContentEditable === !0;
}
const Q3 = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function K3(i) {
  return Q3.has(i.tagName) || i.isContentEditable === !0;
}
const un = {
  x: !1,
  y: !1
};
function N1() {
  return un.x || un.y;
}
function J3(i) {
  return i === "x" || i === "y" ? un[i] ? null : (un[i] = !0, () => {
    un[i] = !1;
  }) : un.x || un.y ? null : (un.x = un.y = !0, () => {
    un.x = un.y = !1;
  });
}
function F3(i, { min: l, max: o }, r) {
  return l !== void 0 && i < l ? i = r ? Ht(l, i, r.min) : Math.max(i, l) : o !== void 0 && i > o && (i = r ? Ht(o, i, r.max) : Math.min(i, o)), i;
}
function Hg(i, l, o) {
  return {
    min: l !== void 0 ? i.min + l : void 0,
    max: o !== void 0 ? i.max + o - (i.max - i.min) : void 0
  };
}
function P3(i, { top: l, left: o, bottom: r, right: c }) {
  return {
    x: Hg(i.x, o, c),
    y: Hg(i.y, l, r)
  };
}
function jg(i, l) {
  let o = l.min - i.min, r = l.max - i.max;
  return l.max - l.min < i.max - i.min && ([o, r] = [r, o]), { min: o, max: r };
}
function k3(i, l) {
  return {
    x: jg(i.x, l.x),
    y: jg(i.y, l.y)
  };
}
function I3(i, l) {
  let o = 0.5;
  const r = Re(i), c = Re(l);
  return c > r ? o = /* @__PURE__ */ $a(l.min, l.max - r, i.min) : r > c && (o = /* @__PURE__ */ $a(i.min, i.max - c, l.min)), Dn(0, 1, o);
}
function W3(i, l) {
  const o = {};
  return l.min !== void 0 && (o.min = l.min - i.min), l.max !== void 0 && (o.max = l.max - i.min), o;
}
const sh = 0.35;
function $3(i = sh) {
  return i === !1 ? i = 0 : i === !0 && (i = sh), {
    x: Yg(i, "left", "right"),
    y: Yg(i, "top", "bottom")
  };
}
function Yg(i, l, o) {
  return {
    min: Gg(i, l),
    max: Gg(i, o)
  };
}
function Gg(i, l) {
  return typeof i == "number" ? i : i[l] || 0;
}
function qg(i) {
  let l = "";
  for (const o of i.path) {
    o.scroll = void 0, o.updateScroll();
    const { scroll: r } = o;
    o !== i.root && r && (l += r.offset.x + "," + r.offset.y + ",");
  }
  return l;
}
const tM = /* @__PURE__ */ new WeakMap();
class eM {
  constructor(l, o = () => l.getProps()) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ee(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = l, this.readProps = o;
  }
  start(l, { snapToCursor: o = !1, distanceThreshold: r } = {}) {
    if (this.visualElement.presenceContext?.isPresent === !1)
      return;
    const c = (g) => {
      o && this.snapToCursor(g), this.stopAnimation();
    }, h = (g, y) => {
      const { drag: b, dragPropagation: R, onDragStart: z } = this.getProps();
      if (b && !R && (this.openDragLock?.(), this.openDragLock = J3(b), !this.openDragLock))
        return;
      this.latestPointerEvent = g, this.latestPanInfo = y, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints();
      const { projection: B } = this.visualElement;
      B && (B.isAnimationBlocked = !0, B.target = void 0), on((_) => {
        let X = this.getAxisMotionValue(_).get() || 0;
        if (Ro(X) && (X = wh(X, this.visualElement.current) || 0), at.test(X))
          X = parseFloat(X);
        else if (Cn.test(X)) {
          const K = B?.layout?.layoutBox[_];
          K && (X = Re(K) * (parseFloat(X) / 100));
        }
        this.originPoint[_] = X;
      }), z && jt.update(() => z(g, y), !1, !0), eh(this.visualElement, "transform"), this.visualElement.animationState?.setActive("whileDrag", !0);
    }, d = (g, y) => {
      this.latestPointerEvent = g, this.latestPanInfo = y;
      const { dragPropagation: b, dragDirectionLock: R, onDirectionLock: z, onDrag: B } = this.getProps();
      if (!b && !this.openDragLock)
        return;
      const { offset: _ } = y;
      if (R && this.currentDirection === null) {
        if (this.currentDirection = aM(_), this.currentDirection === null)
          return;
        z && z(this.currentDirection);
      }
      this.updateAxis("x", _), this.updateAxis("y", _), this.visualElement.render(), B && jt.update(() => B(g, y), !1, !0);
    }, m = (g, y) => {
      this.latestPointerEvent = g, this.latestPanInfo = y, this.stop(g, y), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, v = () => {
      const { dragSnapToOrigin: g } = this.getProps();
      (g || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: S } = this.getProps();
    this.panSession = new x1(l, {
      onSessionStart: c,
      onStart: h,
      onMove: d,
      onSessionEnd: m,
      resumeAnimation: v
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: S,
      distanceThreshold: r,
      contextWindow: this.visualElement.current?.ownerDocument.defaultView,
      element: this.visualElement.current
    });
  }
  /**
   * @param dragAxes - The axes to animate on release, if not the `drag`
   * prop's, e.g. when drag was disabled mid-gesture.
   */
  stop(l, o, r) {
    const c = l || this.latestPointerEvent, h = o || this.latestPanInfo, d = this.isDragging;
    if (this.cancel(), !d || !h || !c)
      return;
    const { velocity: m } = h;
    this.startAnimation(m, r);
    const { onDragEnd: v } = this.getProps();
    v && jt.postRender(() => v(c, h));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: o } = this.visualElement;
    l && (l.isAnimationBlocked = !1), this.endPanSession(), !this.getProps().dragPropagation && this.openDragLock && (this.openDragLock(), this.openDragLock = null), o?.setActive("whileDrag", !1);
  }
  /**
   * Clean up the pan session without modifying other drag state.
   * This is used during unmount to ensure event listeners are removed
   * without affecting projection animations or drag locks.
   */
  endPanSession() {
    this.panSession?.end(), this.panSession = void 0;
  }
  updateAxis(l, o) {
    const { drag: r } = this.readProps();
    if (!o || !is(l, r, this.currentDirection))
      return;
    const c = this.getAxisMotionValue(l);
    let h = this.originPoint[l] + o[l];
    const d = this.constraints && this.constraints[l];
    d && (h = F3(h, d, this.elastic[l])), c.set(h);
  }
  resolveConstraints() {
    const { dragConstraints: l, dragElastic: o } = this.getProps(), { projection: r } = this.visualElement, c = r && (r.layout || r.measure(!1)), h = this.constraints;
    as(l) ? (!this.constraints || this.scroll !== qg(r)) && (this.constraints = this.resolveRefConstraints()) : l && c ? this.constraints = P3(c.layoutBox, l) : this.constraints = !1, this.elastic = $3(o), h !== this.constraints && !as(l) && c && this.constraints && !this.hasMutatedConstraints && on((d) => {
      this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = W3(c.layoutBox[d], this.constraints[d]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: o } = this.getProps();
    if (!as(l))
      return !1;
    const r = Xg(l), { projection: c } = this.visualElement;
    if (!c || !c.layout)
      return !1;
    this.scroll = qg(c);
    const h = VA(r, c.root, this.visualElement.getTransformPagePoint());
    let d = k3(c.layout.layoutBox, c.removeElementScroll(h));
    if (o) {
      const m = o(zA(d));
      this.hasMutatedConstraints = !!m, m && (d = o1(m));
    }
    return d;
  }
  startAnimation(l, o) {
    const { drag: r, dragMomentum: c, dragElastic: h, dragTransition: d, dragSnapToOrigin: m, onDragTransitionEnd: v } = this.getProps(), S = this.constraints || {}, g = on((y) => {
      if (!is(y, o || r, this.currentDirection))
        return;
      let b = S[y] || {};
      (m === !0 || m === y) && (b = { min: 0, max: 0 });
      const R = h ? 200 : 1e6, z = h ? 40 : 1e7, B = {
        type: "inertia",
        velocity: c ? l[y] : 0,
        bounceStiffness: R,
        bounceDamping: z,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...d,
        ...b
      };
      return this.startAxisValueAnimation(y, B);
    });
    return Promise.all(g).then(v);
  }
  startAxisValueAnimation(l, o) {
    const r = this.getAxisMotionValue(l);
    return eh(this.visualElement, l), r.start(Vh(l, r, 0, o, this.visualElement, !1));
  }
  stopAnimation() {
    on((l) => this.getAxisMotionValue(l).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(l) {
    const o = `_drag${l.toUpperCase()}`, c = this.readProps()[o];
    return c || this.visualElement.getValue(l, this.visualElement.latestValues[l] ?? 0);
  }
  /**
   * Measure the live box - projection.layout may or may not include the
   * drag transform, depending on when it was measured.
   */
  snapToCursor({ clientX: l, clientY: o }) {
    const { drag: r } = this.getProps(), c = { x: l, y: o }, h = this.visualElement.getTransformPagePoint()?.(c) || c, d = this.visualElement.measureViewportBox();
    on((m) => {
      if (!is(m, r, this.currentDirection))
        return;
      const v = this.getAxisMotionValue(m), { min: S, max: g } = d[m];
      v.set((v.get() || 0) + h[m] - Ht(S, g, 0.5));
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: l, dragConstraints: o } = this.getProps(), { projection: r } = this.visualElement;
    if (!as(o) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const c = this.constraints, h = { x: 0, y: 0 };
    on((m) => {
      const v = this.getAxisMotionValue(m).get();
      h[m] = I3({ min: v, max: v }, c[m]);
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    this.visualElement.current.style.transform = d ? d({}, "") : "none", r.root?.updateScroll(), r.updateLayout(), this.constraints = !1, this.resolveConstraints(), on((m) => {
      const v = this.getAxisMotionValue(m);
      if (!is(m, l, null) || !v.get())
        return;
      const { min: S, max: g } = this.constraints[m];
      v.set(Ht(S, g, h[m]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    tM.set(this.visualElement, this);
    const l = this.visualElement.current, o = us(l, "pointerdown", (S) => {
      const { drag: g, dragListener: y = !0 } = this.getProps(), b = S.target, R = b !== l && K3(b);
      g && y && !R && this.start(S);
    });
    let r;
    const c = () => {
      const { dragConstraints: S } = this.getProps(), g = as(S) && Xg(S);
      g && (this.constraints = this.resolveRefConstraints(), r || (r = nM(l, g, () => this.scalePositionWithinConstraints())));
    }, { projection: h } = this.visualElement, d = h.addEventListener("measure", c);
    h.layout || (h.root?.updateScroll(), h.updateLayout()), jt.read(c);
    const m = ti(window, "resize", () => this.scalePositionWithinConstraints()), v = h.addEventListener("didUpdate", (({ delta: S, hasLayoutChanged: g }) => {
      this.isDragging && g && (on((y) => {
        if (!is(y, this.getProps().drag, this.currentDirection))
          return;
        const b = this.getAxisMotionValue(y);
        this.originPoint[y] += S[y].translate, b.set(b.get() + S[y].translate);
      }), this.visualElement.render());
    }));
    return () => {
      m(), o(), d(), v(), r?.();
    };
  }
  getProps() {
    const l = this.readProps(), { dragElastic: o = sh, dragMomentum: r = !0 } = l;
    return { ...l, dragElastic: o, dragMomentum: r };
  }
}
function as(i) {
  return !!i && typeof i == "object" && ("current" in i || "nodeType" in i);
}
const Xg = (i) => "current" in i ? i.current : i;
function Zg(i) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    i();
  };
}
function nM(i, l, o) {
  const r = wg(i, Zg(o)), c = wg(l, Zg(o));
  return () => {
    r(), c();
  };
}
function is(i, l, o) {
  return (l === !0 || l === i) && (o === null || o === i);
}
function aM(i, l = 10) {
  let o = null;
  return Math.abs(i.y) > l ? o = "y" : Math.abs(i.x) > l && (o = "x"), o;
}
function _1(i, l) {
  const o = i1(i), r = new AbortController(), c = {
    passive: !0,
    ...l,
    signal: r.signal
  }, h = Lh(() => r.abort());
  return [o, c, h];
}
function iM(i) {
  return !(i.pointerType === "touch" || N1());
}
function lM(i, l, o = {}) {
  l = Hh(l);
  const [r, c, h] = _1(i, o);
  return r.forEach((d) => {
    let m = !1, v = !1, S;
    const g = () => {
      d.removeEventListener("pointerleave", z);
    }, y = (_) => {
      S && (S(_), S = void 0), g();
    }, b = (_) => {
      m = !1, window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", b), v && (v = !1, y(_));
    }, R = () => {
      m = !0, window.addEventListener("pointerup", b, c), window.addEventListener("pointercancel", b, c);
    }, z = (_) => {
      if (_.pointerType !== "touch") {
        if (m) {
          v = !0;
          return;
        }
        y(_);
      }
    }, B = (_) => {
      if (!iM(_))
        return;
      v = !1;
      const X = l(d, _);
      typeof X == "function" && (S = X, d.addEventListener("pointerleave", z, c));
    };
    d.addEventListener("pointerenter", B, c), d.addEventListener("pointerdown", R, c);
  }), h;
}
const V1 = (i, l) => l ? i === l ? !0 : V1(i, l.parentElement) : !1, ho = /* @__PURE__ */ new WeakSet();
function Qg(i) {
  return (l) => {
    l.key === "Enter" && i(l);
  };
}
function wf(i, l) {
  i.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const sM = (i, l) => {
  let o = !1;
  const r = Qg(() => {
    ho.has(i) || (o = !0, wf(i, "down"));
  }), c = Qg(() => {
    o && (o = !1, wf(i, "up"));
  });
  i.addEventListener("keydown", r, l), i.addEventListener("keyup", c, l), i.addEventListener("blur", () => {
    i.removeEventListener("keydown", r), i.removeEventListener("keyup", c), o && wf(i, "cancel");
  }, { ...l, once: !0 });
};
function Kg(i) {
  return qh(i) && !N1();
}
const Jg = /* @__PURE__ */ new WeakSet();
function uM(i, l, o = {}) {
  l = Hh(l);
  const [r, c, h] = _1(i, o), d = (m) => {
    const v = m.currentTarget;
    if (!Kg(m) || Jg.has(m))
      return;
    ho.add(v), o.stopPropagation && Jg.add(m);
    const S = l(v, m), g = { ...c, capture: !0 }, y = (z, B) => {
      window.removeEventListener("pointerup", b, g), window.removeEventListener("pointercancel", R, g), ho.has(v) && ho.delete(v), Kg(z) && typeof S == "function" && S(z, { success: B });
    }, b = (z) => {
      y(z, v === window || v === document || o.useGlobalTarget || V1(v, z.target));
    }, R = (z) => {
      y(z, !1);
    };
    window.addEventListener("pointerup", b, g), window.addEventListener("pointercancel", R, g);
  };
  return r.forEach((m) => {
    (o.useGlobalTarget ? window : m).addEventListener("pointerdown", d, c), io(m) && (m.addEventListener("focus", () => sM(m, c), c), !Z3(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0));
  }), h;
}
class Ma {
  constructor(l) {
    this.isMounted = !1, this.node = l;
  }
  update() {
  }
}
const w1 = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]), U1 = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function oM(i, l, o, r) {
  D1(i, l, void 0, r);
  for (const c in l.attrs)
    i.setAttribute(w1.has(c) ? c : l1(c), l.attrs[c]);
}
function B1(i, l, o) {
  const r = Gh(i, l, o);
  for (const c in i)
    if (c !== "children" && (ye(i[c]) || ye(l[c]))) {
      const h = Zn.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      r[h] = i[c];
    }
  return r;
}
class rM extends C1 {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ee;
  }
  getBaseTargetFromProps(l, o) {
    return Ea.has(o) ? super.getBaseTargetFromProps(l, o) ?? ds(o) : l[o];
  }
  /**
   * An independent transform's origin is never read from the DOM, so it
   * starts from its latest or default value and renders on mount.
   */
  getDefaultValue(l) {
    return Ea.has(l) ? this.latestValues[l] ?? ds(l) : void 0;
  }
  readValueFromInstance(l, o) {
    if (Ea.has(o)) {
      const r = jv(o);
      return r && r.default || 0;
    }
    if (s1.includes(o)) {
      const c = getComputedStyle(l)[o];
      if (typeof c == "string" && c)
        return c.trim();
    }
    return o = w1.has(o) ? o : l1(o), l.getAttribute(o);
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return B1(l, o, r);
  }
  build(l, o, r) {
    u1(l, o, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(l, o, r, c) {
    oM(l, o, r, c);
  }
  mount(l) {
    this.isSVGTag = U1(l.tagName), super.mount(l);
  }
}
function L1(i, l) {
  if (!Array.isArray(l))
    return !1;
  const o = l.length;
  if (o !== i.length)
    return !1;
  for (let r = 0; r < o; r++)
    if (l[r] !== i[r])
      return !1;
  return !0;
}
const cM = [...zo].reverse(), Fg = (i) => i?.out === !0 ? i : i?.out;
function fM(i) {
  let l = (m) => Promise.all(m.map(({ animation: v, options: S }) => SA(i, v, S))), o = Pg(), r = !0, c = !1;
  function h(m) {
    const { props: v, parent: S, manuallyAnimateOnMount: g } = i, { initial: y } = v, b = r || c, R = [], z = (et = y) => typeof et != "boolean" && Wa(i, Array.isArray(et) ? et[0] : et, i.presenceContext?.custom) || void 0, B = /* @__PURE__ */ new Map();
    let _ = {}, X = 1 / 0, K = i;
    do
      K = K.props.inherit !== !1 && K.parent;
    while (K && !K.isControllingVariants);
    const k = b && Fg(z(y ?? (K && K.props.initial))?.transition);
    if (cM.forEach((et, st) => {
      const U = o[et], G = v[et], P = K && K.props[et], ut = G !== void 0 ? G : ps(P) || P === !1 ? P : void 0, mt = ps(ut), dt = et === m ? U.isActive : null, Ot = mt && G === void 0 && !(b && g);
      if (U.protectedKeys = { ..._ }, !U.isActive && dt === null || !ut && !U.prevProp || xo(ut) || typeof ut == "boolean")
        return;
      if (dt === !1 && (X = st), et === "exit" && U.isActive && dt !== !0) {
        _ = {
          ..._,
          ...U.prevResolvedValues
        };
        return;
      }
      const St = hM(U.prevProp, ut);
      let J = St || mt && (dt && !Ot || st > X), w = !1;
      const q = Array.isArray(ut) ? ut : [ut];
      let Y = {}, I;
      if (dt !== !1)
        for (const ct of q) {
          const { transition: yt, transitionEnd: ot, ...E } = Wa(i, ct, $v(i, et)) || {};
          Y = {
            ...Y,
            ...E,
            ...ot
          }, I = Fg(yt) || I;
        }
      const { prevResolvedValues: tt } = U;
      for (const ct in { ...tt, ...Y }) {
        if (ct in _)
          continue;
        const yt = Y[ct], ot = tt[ct], E = Array.isArray(yt) && Array.isArray(ot) ? !L1(yt, ot) || St : yt !== ot;
        let L;
        if (E && yt == null)
          B.has(ct) || B.set(ct, U.prevOut);
        else if (E || yt !== void 0 && B.has(ct)) {
          J = !0, L = B.get(ct) || k, B.delete(ct) && (w = !0), U.needsAnimating[ct] = !0;
          const Z = i.getValue(ct);
          Z && (Z.liveStyle = !1);
        } else
          U.protectedKeys[ct] = !0;
        U.out[ct] = L;
      }
      if (U.prevProp = ut, U.prevResolvedValues = Y, U.prevOut = I, U.isActive && (_ = { ..._, ...Y }), J && (!(Ot && St) || w))
        for (const ct of q) {
          const yt = { type: et };
          if (typeof ct == "string" && b && g && S?.enteringChildren) {
            const ot = Wa(S, ct)?.transition?.delayChildren;
            yt.delay = kv(S.enteringChildren, i, ot);
          }
          R.push({ animation: ct, options: yt });
        }
    }), B.size) {
      const et = {}, st = z();
      let U = st?.transition;
      B.forEach((G, P) => {
        G && (U = {
          ...U || i.getDefaultTransition(),
          [P]: G
        });
        const ut = i.getValue(P);
        ut && (ut.liveStyle = !0);
        const mt = st && !Array.isArray(y) ? st[P] : void 0, dt = i.getBaseTargetFromProps(v, P);
        et[P] = (mt !== void 0 ? mt : dt !== void 0 && !ye(dt) ? dt : i.initialValues[P] === void 0 ? i.baseTarget[P] : void 0) ?? null;
      }), U && (et.transition = U), R.push({ animation: et });
    }
    const $ = b && i.blockInitialAnimation || r && !g && (v.initial === !1 || v.initial === v.animate);
    return r = c = !1, !$ && R.length ? l(R) : Promise.resolve();
  }
  function d(m, v) {
    if (o[m].isActive === v)
      return Promise.resolve();
    i.variantChildren?.forEach((g) => g.animationState?.setActive(m, v)), o[m].isActive = v;
    const S = h(m);
    for (const g in o)
      o[g].protectedKeys = {};
    return S;
  }
  return {
    animateChanges: h,
    setActive: d,
    /**
     * Allows tests to inject a mocked animate function.
     * @internal
     */
    setAnimateFunction: (m) => {
      l = m(i);
    },
    getState: () => o,
    reset: () => {
      o = Pg(), c = !0;
    }
  };
}
function hM(i, l) {
  return typeof l == "string" ? l !== i : Array.isArray(l) ? !L1(l, i) : !1;
}
function Pg() {
  const i = {};
  for (const l of zo)
    i[l] = {
      isActive: l === "animate",
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
      out: {}
    };
  return i;
}
const Zh = /* @__PURE__ */ Q.createContext({
  transformPagePoint: (i) => i,
  isStatic: !1,
  reducedMotion: "never"
});
function kg(i, l) {
  if (typeof i == "function")
    return i(l);
  i != null && (i.current = l);
}
function dM(...i) {
  return (l) => {
    let o = !1;
    const r = i.map((c) => {
      const h = kg(c, l);
      return !o && typeof h == "function" && (o = !0), h;
    });
    if (o)
      return () => {
        for (let c = 0; c < r.length; c++) {
          const h = r[c];
          typeof h == "function" ? h() : kg(i[c], null);
        }
      };
  };
}
function mM(...i) {
  return Q.useCallback(dM(...i), i);
}
const Ig = (i) => {
  const { width: l, height: o } = i?.getBoundingClientRect() || {};
  return [
    l / i?.offsetWidth || 1,
    o / i?.offsetHeight || 1
  ];
}, H1 = (i) => {
  let { left: l, top: o } = i.getBoundingClientRect(), r = i;
  for (; r = r.parentElement || r.parentNode?.host; ) {
    const { scrollLeft: d, scrollTop: m } = r;
    if (d || m) {
      const [v, S] = Ig(r);
      l += d * v, o += m * S;
    }
    if (getComputedStyle(r).position === "fixed")
      break;
  }
  const [c, h] = Ig(i.offsetParent);
  return [l / c, o / h];
};
class pM extends Q.Component {
  getSnapshotBeforeUpdate(l) {
    const o = this.props.getElement();
    if (io(o) && l.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const r = o.offsetParent, c = io(r) && r.offsetWidth || 0, h = io(r) && r.offsetHeight || 0, d = getComputedStyle(o), m = this.props.sizeRef.current;
      m.height = parseFloat(d.height), m.width = parseFloat(d.width), m.top = o.offsetTop, m.left = o.offsetLeft, m.right = c - m.width - m.left, m.bottom = h - m.height - m.top, m.direction = d.direction, m.point = H1(o);
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function yM({ children: i, isPresent: l, anchorX: o, anchorY: r, root: c, pop: h, popNode: d }) {
  const m = Q.useId(), v = Q.useRef(null), S = Q.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: "ltr"
  }), { nonce: g } = Q.useContext(Zh), y = h !== !1 ? i.props?.ref ?? i?.ref : void 0, b = mM(v, y), R = () => v.current || d?.current?.current, z = (B) => {
    const { width: _, height: X, top: K, left: k, right: $, bottom: et, direction: st } = S.current, U = st === "rtl", G = o === "left" ? U ? `right:${$}` : `left:${k}` : U ? `left:${k}` : `right:${$}`, P = r === "bottom" ? `bottom:${et}` : `top:${K}`;
    B?.insertRule(`[data-motion-pop-id="${m}"]{position:absolute!important;width:${_}px!important;height:${X}px!important;${G}px!important;${P}px!important}`);
  };
  return Q.useInsertionEffect(() => {
    const { width: B, height: _ } = S.current, X = R();
    if (l || h === !1 || !X || !B || !_)
      return;
    X.dataset.motionPopId = m;
    const K = X.ownerDocument, k = K.createElement("style");
    g && (k.nonce = g);
    const $ = c ?? K.head;
    $.appendChild(k), z(k.sheet);
    let et = 0, st = 0;
    return ms.setup(() => {
      const [U, G] = H1(X);
      et = S.current.point[0] - U, st = S.current.point[1] - G;
    }), ms.read(() => {
      const { sheet: U } = k;
      if (!U || !et && !st)
        return;
      const G = S.current;
      G.left += et, G.right -= et, G.top += st, G.bottom -= st, U.deleteRule(0), z(U);
    }), () => {
      X.removeAttribute("data-motion-pop-id"), $.contains(k) && $.removeChild(k);
    };
  }, [l]), Xn.jsx(pM, { isPresent: l, getElement: R, sizeRef: S, pop: h, children: h === !1 ? i : Q.cloneElement(i, { ref: b }) });
}
const gM = ({ children: i, initial: l, isPresent: o, onExitComplete: r, custom: c, presenceAffectsLayout: h, mode: d, anchorX: m, anchorY: v, root: S }) => {
  const g = Do(vM), y = Q.useId(), b = Q.useRef(), R = Q.useRef(o), z = Q.useRef(r);
  os(() => {
    R.current = o, z.current = r;
  });
  let B = !0, _ = Q.useMemo(() => (B = !1, {
    id: y,
    initial: l,
    isPresent: o,
    custom: c,
    onExitComplete: (X) => {
      g.set(X, !0);
      for (const K of g.values())
        if (!K)
          return;
      r && r();
    },
    register: (X, K) => (g.set(X, !1), K && K.parent?.presenceContext?.id !== y && (b.current = K), () => {
      g.delete(X), !R.current && !g.size && z.current?.();
    })
  }), [o, g, r]);
  return h && B && (_ = { ..._ }), Q.useMemo(() => {
    g.forEach((X, K) => g.set(K, !1));
  }, [o]), Q.useEffect(() => {
    !o && !g.size && r && r();
  }, [o]), i = Xn.jsx(yM, { pop: d === "popLayout", isPresent: o, anchorX: m, anchorY: v, root: S, popNode: b, children: i }), Xn.jsx(Oo.Provider, { value: _, children: i });
};
function vM() {
  return /* @__PURE__ */ new Map();
}
function j1(i = !0) {
  const l = Q.useContext(Oo);
  if (l === null)
    return [!0, null];
  const { isPresent: o, onExitComplete: r, register: c } = l, h = Q.useId();
  Q.useEffect(() => {
    if (i)
      return c(h);
  }, [i]);
  const d = Q.useCallback(() => i && r && r(h), [h, r, i]);
  return !o && r ? [!1, d] : [!0];
}
const ls = (i) => i.key || "";
function Wg(i) {
  const l = [];
  return Q.Children.forEach(i, (o) => {
    Q.isValidElement(o) && l.push(o);
  }), l;
}
const SM = ({ children: i, custom: l, initial: o = !0, onExitComplete: r, presenceAffectsLayout: c = !0, mode: h = "sync", propagate: d = !1, anchorX: m = "left", anchorY: v = "top", root: S }) => {
  const [g, y] = j1(d), b = Q.useMemo(() => Wg(i), [i]), R = d && !g ? [] : b.map(ls), z = Q.useRef(!0), B = Do(() => /* @__PURE__ */ new Map()), _ = Q.useRef(/* @__PURE__ */ new Set()), [X, K] = Q.useState(b), [k, $] = Q.useState(b);
  os(() => {
    d && !g && !k.length && y?.();
  }, [g, d, k.length, y]);
  const et = Q.useRef();
  Q.useEffect(() => () => {
    const G = et.current;
    et.current = void 0, G?.();
  }, [k]), os(() => {
    z.current = !1;
    for (let G = 0; G < k.length; G++) {
      const P = ls(k[G]);
      R.includes(P) ? (B.delete(P), _.current.delete(P)) : B.get(P) !== !0 && B.set(P, !1);
    }
  }, [k, R.length, R.join("-")]);
  const st = [];
  if (b !== X) {
    let G = [...b], P = 0;
    for (const ut of k) {
      const mt = R.indexOf(ls(ut));
      mt === -1 ? (G.splice(P++, 0, ut), st.push(ut)) : P = mt + st.length + 1;
    }
    return st.every((ut) => B.get(ls(ut))) ? G = b : h === "wait" && (G = st), $(Wg(G)), K(b), null;
  }
  const { forceRender: U } = Q.useContext(ch);
  return Xn.jsx(Xn.Fragment, { children: k.map((G) => {
    const P = ls(G), ut = d && !g ? !1 : b === k || R.includes(P), mt = () => {
      if (_.current.has(P))
        return;
      if (B.has(P))
        _.current.add(P), B.set(P, !0);
      else
        return;
      let dt = !0;
      B.forEach((Ot) => {
        Ot || (dt = !1);
      }), dt && (U?.(), K([]), d && y?.(), et.current = r);
    };
    return Xn.jsx(gM, { isPresent: ut, initial: !z.current || o ? void 0 : !1, custom: l, presenceAffectsLayout: c, mode: h, root: S, onExitComplete: ut ? void 0 : mt, anchorX: m, anchorY: v, children: G }, P);
  }) });
}, Y1 = /* @__PURE__ */ Q.createContext({
  strict: !1
}), $g = {
  animation: ["variants", ...zo],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
let tv = !1;
function TM() {
  if (tv)
    return;
  const i = {};
  for (const l in $g)
    i[l] = {
      isEnabled: (o) => $g[l].some((r) => !!o[r])
    };
  M1(i), tv = !0;
}
function G1() {
  return TM(), O3();
}
function EM(i) {
  const l = G1();
  for (const o in i)
    l[o] = {
      ...l[o],
      ...i[o]
    };
  M1(l);
}
const _o = /* @__PURE__ */ Q.createContext({});
function bM(i, l) {
  if (No(i)) {
    const { initial: o, animate: r } = i;
    return {
      initial: o === !1 || ps(o) ? o : void 0,
      animate: ps(r) ? r : void 0
    };
  }
  return i.inherit !== !1 ? l : {};
}
function AM(i) {
  const { initial: l, animate: o } = bM(i, Q.useContext(_o));
  return Q.useMemo(() => ({ initial: l, animate: o }), [ev(l), ev(o)]);
}
function ev(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const Qh = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function q1(i, l, o) {
  for (const r in l)
    !ye(l[r]) && !O1(r, o) && (i[r] = l[r]);
}
function MM({ transformTemplate: i }, l) {
  return Q.useMemo(() => {
    const o = Qh();
    return jh(o, l, i), Object.assign({}, o.vars, o.style);
  }, [l]);
}
function CM(i, l) {
  const o = i.style || {}, r = {};
  return q1(r, o, i), Object.assign(r, MM(i, l)), r;
}
function DM(i, l) {
  const o = {}, r = CM(i, l);
  return i.drag && i.dragListener !== !1 && (o.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`), i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (o.tabIndex = 0), o.style = r, o;
}
const X1 = () => ({
  ...Qh(),
  attrs: {}
});
function OM(i, l, o, r) {
  const c = Q.useMemo(() => {
    const h = X1();
    return u1(h, l, U1(r), i.transformTemplate, i.style), {
      ...h.attrs,
      style: { ...h.style }
    };
  }, [l]);
  if (i.style) {
    const h = {};
    return q1(h, i.style, i), { ...c, style: { ...h, ...c.style } };
  }
  return c;
}
const RM = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport"
]);
function Co(i) {
  return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || RM.has(i);
}
function xM(i, l) {
  return i.startsWith("on") ? !Co(i) : l?.(i) ?? !Co(i);
}
function zM(i, l, o, r) {
  const c = {};
  for (const h in i)
    h === "values" && typeof i.values == "object" || ye(i[h]) || (xM(h, r) || o === !0 && Co(h) || !l && !Co(h) || // If trying to use native HTML drag events, forward drag listeners
    i.draggable && h.startsWith("onDrag")) && (c[h] = i[h]);
  return c;
}
const NM = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Kh(i) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof i != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    i.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(NM.indexOf(i) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(i))
    )
  );
}
function _M(i, l, o, { latestValues: r }, c, h = !1, d, m) {
  const S = (d ?? Kh(i) ? OM : DM)(l, r, c, i), g = zM(l, typeof i == "string", h, m), y = i !== Q.Fragment ? { ...g, ...S, ref: o } : {}, { children: b } = l, R = Q.useMemo(() => ye(b) ? b.get() : b, [b]);
  return Q.createElement(i, {
    ...y,
    children: R
  });
}
function VM({ scrapeMotionValuesFromProps: i, createRenderState: l }, o, r, c) {
  return {
    latestValues: wM(o, r, c, i),
    renderState: l()
  };
}
function wM(i, l, o, r) {
  const c = {}, h = r(i, {});
  for (const b in h)
    c[b] = so(h[b]);
  let { initial: d, animate: m } = i;
  const v = No(i), S = b1(i);
  l && S && !v && i.inherit !== !1 && (d === void 0 && (d = l.initial), m === void 0 && (m = l.animate));
  let g = o ? o.initial === !1 : !1;
  g = g || d === !1;
  const y = g ? m : d;
  if (y && typeof y != "boolean" && !xo(y)) {
    const b = Array.isArray(y) ? y : [y];
    for (let R = 0; R < b.length; R++) {
      const z = Wv(i, b[R]);
      if (z) {
        const { transitionEnd: B, transition: _, ...X } = z;
        for (const K in X) {
          let k = X[K];
          if (Array.isArray(k)) {
            const $ = g ? k.length - 1 : 0;
            k = k[$];
          }
          k !== null && (c[K] = k);
        }
        for (const K in B)
          c[K] = B[K];
      }
    }
  }
  return c;
}
const Z1 = (i) => (l, o) => {
  const r = Q.useContext(_o), c = Q.useContext(Oo), h = () => VM(i, l, r, c);
  return o ? h() : Do(h);
}, UM = /* @__PURE__ */ Z1({
  scrapeMotionValuesFromProps: Gh,
  createRenderState: Qh
}), BM = /* @__PURE__ */ Z1({
  scrapeMotionValuesFromProps: B1,
  createRenderState: X1
}), LM = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function HM(i, l, o) {
  const r = Q.useRef(o);
  Q.useInsertionEffect(() => {
    r.current = o;
  });
  const c = Q.useRef(null);
  return Q.useCallback((h) => {
    h && i.onMount?.(h), l && (h ? l.mount(h) : l.unmount());
    const d = r.current;
    if (typeof d == "function")
      if (h) {
        const m = d(h);
        typeof m == "function" && (c.current = m);
      } else c.current ? (c.current(), c.current = null) : d(h);
    else d && (d.current = h);
  }, [l]);
}
const Q1 = /* @__PURE__ */ Q.createContext({});
function jM(i) {
  return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current");
}
function YM(i, l, o, r, c, h) {
  const { visualElement: d } = Q.useContext(_o), m = Q.useContext(Y1), v = Q.useContext(Oo), S = Q.useContext(Zh), g = S.reducedMotion, y = S.skipAnimations, b = Q.useRef(null), R = Q.useRef(!1);
  r = r || m.renderer, !b.current && r && (b.current = r(i, {
    visualState: l,
    parent: d,
    props: o,
    presenceContext: v,
    blockInitialAnimation: v ? v.initial === !1 : !1,
    reducedMotionConfig: g,
    skipAnimations: y,
    isSVG: h
  }), R.current && b.current && (b.current.manuallyAnimateOnMount = !0));
  const z = b.current, B = Q.useContext(Q1);
  z && !z.projection && c && (z.type === "html" || z.type === "svg") && GM(b.current, o, c, B), Q.useInsertionEffect(() => {
    z && z.props !== o && z.update(o, v);
  });
  const _ = o[e1], X = Q.useRef(!!_ && typeof window < "u" && !window.MotionHandoffIsComplete?.(_) && window.MotionHasOptimisedAnimation?.(_));
  return os(() => {
    !R.current || !z || (z.animationState?.animateChanges(), z.enteringChildren = void 0);
  }, []), os(() => {
    R.current = !0, z && (window.MotionIsMounted = !0, z.updateFeatures(), z.scheduleRenderMicrotask(), X.current && z.animationState && z.animationState.animateChanges());
  }), Q.useEffect(() => {
    z && (!X.current && z.animationState && z.animationState.animateChanges(), X.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(_);
    }), X.current = !1), z.enteringChildren = void 0);
  }), z;
}
function GM(i, l, o, r) {
  const { layoutId: c, layout: h, drag: d, dragConstraints: m, layoutScroll: v, layoutRoot: S, layoutAnchor: g, layoutCrossfade: y } = l, b = i.projection = new o(i.latestValues, l["data-framer-portal-id"] ? void 0 : K1(i.parent));
  b.setOptions({
    layoutId: c,
    layout: h,
    alwaysMeasureLayout: !!d || m && jM(m),
    visualElement: i,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof h == "string" ? h : "both",
    initialPromotionConfig: r,
    crossfade: y,
    layoutScroll: v,
    layoutRoot: S,
    layoutAnchor: g
  });
  const R = b.getStack()?.lead;
  R && !b.root.isUpdateBlocked() && (R.willUpdate(), R.scheduleCheckAfterUnmount());
}
function K1(i) {
  if (i)
    return i.options.allowProjection !== !1 ? i.projection : K1(i.parent);
}
function Uf(i, { forwardMotionProps: l = !1, type: o } = {}, r, c) {
  r && EM(r);
  const h = o ? o === "svg" : Kh(i), d = h ? BM : UM;
  function m(S, g) {
    let y;
    const b = qM(S);
    Do(() => !!oo.current?.sharedNodes.get(b)?.lead && S.initial) && (S = { ...S, initial: !1 });
    const R = {
      ...Q.useContext(Zh),
      ...S,
      layoutId: b
    }, { isStatic: z, isValidProp: B } = R, _ = AM(S), X = d(S, z);
    if (!z && typeof window < "u") {
      XM();
      const K = ZM(R);
      _.visualElement = YM(i, X, R, c, K.ProjectionNode, h), (K.isEnabled || _.visualElement?.projection?.options.layoutId) && (y = K.MeasureLayout);
    }
    return Xn.jsxs(_o.Provider, { value: _, children: [y && _.visualElement ? Xn.jsx(y, { visualElement: _.visualElement, ...R }) : null, _M(i, S, HM(X, _.visualElement, g), X, z, l, h, B)] });
  }
  m.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
  const v = Q.forwardRef(m);
  return v[LM] = i, v;
}
function qM({ layoutId: i }) {
  const l = Q.useContext(ch).id;
  return l && i !== void 0 ? l + "-" + i : i;
}
function XM(i, l) {
  Q.useContext(Y1).strict;
}
function ZM(i) {
  const l = G1(), { drag: o, layout: r } = l;
  if (!o && !r)
    return {};
  const c = { ...o, ...r };
  return {
    MeasureLayout: c.MeasureLayout,
    isEnabled: o?.isEnabled(i) || r?.isEnabled(i),
    ProjectionNode: c.ProjectionNode
  };
}
function QM(i, l) {
  if (typeof Proxy > "u")
    return Uf;
  const o = /* @__PURE__ */ new Map(), r = (h, d) => Uf(h, d, i, l), c = (h, d) => r(h, d);
  return new Proxy(c, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (h, d) => d === "create" ? r : (o.has(d) || o.set(d, Uf(d, void 0, i, l)), o.get(d))
  });
}
const KM = (i, l) => l.isSVG ?? Kh(i) ? new rM(l) : new z3(l, {
  allowProjection: i !== Q.Fragment
});
class JM extends Ma {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(l) {
    super(l), l.animationState || (l.animationState = fM(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    xo(l) && (this.unmountControls = l.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    this.node.getProps().animate !== this.node.prevProps?.animate && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let FM = 0;
class PM extends Ma {
  constructor() {
    super(...arguments), this.id = FM++;
  }
  update() {
    const { presenceContext: l, prevPresenceContext: o, animationState: r } = this.node;
    if (!l || !r)
      return;
    const { isPresent: c, onExitComplete: h } = l, d = o?.isPresent;
    if (c === d)
      return;
    if (c && d === !1) {
      if (this.exit === !0) {
        const { initial: v } = this.node.getProps();
        if (v && !Array.isArray(v)) {
          const { transition: S, transitionEnd: g, ...y } = Wa(this.node, v) || {};
          for (const b in y)
            this.node.getValue(b)?.jump(y[b]);
        }
        this.node.blockInitialAnimation = !1, r.reset(), r.animateChanges();
      } else
        r.setActive("exit", !1);
      this.exit = void 0;
      return;
    }
    const m = this.exit = r.setActive("exit", !c);
    h && !c && m.then(() => {
      this.exit === m && (this.exit = !0, h(this.id));
    });
  }
  mount() {
    const { register: l, onExitComplete: o } = this.node.presenceContext || {};
    o && o(this.id), l && (this.unmount = l(this.id, this.node));
  }
  unmount() {
  }
}
const kM = {
  animation: {
    Feature: JM
  },
  exit: {
    Feature: PM
  }
};
class IM extends Ma {
  constructor(l) {
    super(l), this.removeGroupControls = cn, this.removeListeners = cn, this.controls = new eM(l);
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || cn;
  }
  update() {
    const { dragControls: l, drag: o } = this.node.getProps(), { dragControls: r, drag: c } = this.node.prevProps || {};
    l !== r && (this.removeGroupControls(), l && (this.removeGroupControls = l.subscribe(this.controls))), c && !o && this.controls.stop(void 0, void 0, c);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const Bf = (i) => (l, o) => {
  i && jt.update(() => i(l, o), !1, !0);
};
class WM extends Ma {
  constructor() {
    super(...arguments), this.removePointerDownListener = cn;
  }
  onPointerDown(l) {
    this.session = new x1(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      // Fixes https://github.com/motiondivision/motion/issues/2270
      contextWindow: this.node.current?.ownerDocument.defaultView
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: o, onPan: r, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: Bf(l),
      onStart: Bf(o),
      onMove: Bf(r),
      onEnd: (h, d) => {
        delete this.session, c && jt.postRender(() => c(h, d));
      }
    };
  }
  mount() {
    this.removePointerDownListener = us(this.node.current, "pointerdown", (l) => this.onPointerDown(l));
  }
  update() {
    this.session?.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session?.end();
  }
}
let Lf = !1;
const nv = ({ layout: i, layoutDependency: l, layoutAnchor: o }) => ({
  layout: i,
  layoutDependency: l,
  layoutAnchor: o,
  animationType: typeof i == "string" ? i : "both"
}), av = (i, l) => {
  const { snapshot: o } = i, r = i.getStack();
  r?.remove(i);
  const c = r?.lead;
  if (r?.prevLead === i && c.resumeFrom === i && (c.resumeFrom = c.currentAnimation = i.resumingFrom = void 0), i.options.layoutId = l, !l) {
    i.needsShow = !0;
    return;
  }
  return i.root.registerSharedNode(l, i), () => {
    const { resumeFrom: h } = i;
    h?.isPresent !== !1 && i.getStack().members.includes(h) && (h.hide(), i.resumeFrom = void 0, i.snapshot = o);
  };
};
class $M extends Q.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: l, layoutGroup: o, switchLayoutGroup: r, layoutId: c } = this.props, { projection: h } = l;
    h && (o.group?.add(h), c && r?.register?.(h), Lf && h.root.didUpdate(), h.options.layoutId !== c && av(h, c)?.(), h.addEventListener("animationComplete", () => this.safeToRemove()), h.setOptions({
      ...h.options,
      ...nv(this.props),
      onExitComplete: () => this.safeToRemove()
    })), uo.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(l) {
    const { layoutDependency: o, layoutId: r, visualElement: c, drag: h, isPresent: d } = this.props, { projection: m } = c;
    return m && (m.isPresent = d, this.takeOver = l.layoutId !== r ? (m.willUpdate(), av(m, r)) : void 0, m.setOptions({
      ...m.options,
      ...nv(this.props)
    }), Lf = !0, h || l.layoutDependency !== o || o === void 0 || l.isPresent !== d ? m.willUpdate() : this.safeToRemove(), l.isPresent !== d && (d ? m.promote() : m.relegate() || jt.postRender(() => {
      m.getStack()?.members.length || this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: l } = this.props.visualElement;
    l && (this.takeOver?.(), l.root.didUpdate(), ms.postRender(() => {
      !l.currentAnimation && l.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: o, switchLayoutGroup: r } = this.props, { projection: c } = l;
    Lf = !0, c && (c.scheduleCheckAfterUnmount(), o.group?.remove(c), r?.deregister?.(c));
  }
  safeToRemove() {
    this.props.safeToRemove?.();
  }
  render() {
    return null;
  }
}
function J1(i) {
  const [l, o] = j1(), r = Q.useContext(ch);
  return Xn.jsx($M, { ...i, layoutGroup: r, switchLayoutGroup: Q.useContext(Q1), isPresent: l, safeToRemove: o });
}
const tC = {
  pan: {
    Feature: WM
  },
  drag: {
    Feature: IM,
    ProjectionNode: E1,
    MeasureLayout: J1
  }
};
function uh(i, l, o, r) {
  const { props: c } = i, h = "while" + o;
  i.animationState && c[h] && i.animationState.setActive(h, r === "Start");
  const d = c["on" + o + r];
  d && jt.postRender(() => d(l, Xh(l)));
}
class eC extends Ma {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = lM(l, (o, r) => (uh(this.node, r, "Hover", "Start"), (c) => uh(this.node, c, "Hover", "End"))));
  }
  unmount() {
  }
}
class nC extends Ma {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = tl(ti(this.node.current, "focus", () => this.onFocus()), ti(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function iv(i, l, o) {
  i.current instanceof HTMLButtonElement && i.current.disabled || uh(i, l, "Tap", o);
}
class aC extends Ma {
  mount() {
    const { current: l } = this.node;
    if (!l)
      return;
    const { globalTapTarget: o, propagate: r } = this.node.props;
    this.unmount = uM(l, (c, h) => (iv(this.node, h, "Start"), (d, { success: m }) => iv(this.node, d, m ? "" : "Cancel")), {
      useGlobalTarget: o,
      stopPropagation: r?.tap === !1
    });
  }
  unmount() {
  }
}
const oh = /* @__PURE__ */ new WeakMap(), Hf = /* @__PURE__ */ new WeakMap(), iC = (i) => {
  const l = oh.get(i.target);
  l && l(i);
}, lC = (i) => {
  i.forEach(iC);
};
function sC({ root: i, ...l }) {
  const o = i || document;
  Hf.has(o) || Hf.set(o, {});
  const r = Hf.get(o), c = JSON.stringify(l);
  return r[c] || (r[c] = new IntersectionObserver(lC, { root: i, ...l })), r[c];
}
function uC(i, l, o) {
  const r = sC(l);
  return oh.set(i, o), r.observe(i), () => {
    oh.delete(i), r.unobserve(i);
  };
}
const oC = {
  some: 0,
  all: 1
};
class rC extends Ma {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: l = {} } = this.node.getProps(), { root: o, margin: r, amount: c = "some", once: h } = l, d = {
      root: o ? o.current : void 0,
      rootMargin: r,
      threshold: typeof c == "number" ? c : oC[c]
    }, m = (v) => {
      const { isIntersecting: S } = v;
      if (this.isInView === S || (this.isInView = S, h && !S && this.hasEnteredView))
        return;
      S && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", S);
      const { onViewportEnter: g, onViewportLeave: y } = this.node.getProps(), b = S ? g : y;
      b && b(v);
    };
    this.stopObserver = uC(this.node.current, d, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: l, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(cC(l, o)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function cC({ viewport: i = {} }, { viewport: l = {} } = {}) {
  return (o) => i[o] !== l[o];
}
const fC = {
  inView: {
    Feature: rC
  },
  tap: {
    Feature: aC
  },
  focus: {
    Feature: nC
  },
  hover: {
    Feature: eC
  }
}, hC = {
  layout: {
    ProjectionNode: E1,
    MeasureLayout: J1
  }
}, dC = /* @__PURE__ */ Object.assign({}, kM, fC, tC, hC), ei = /* @__PURE__ */ QM(dC, KM);
function F1() {
  !Yh.current && A1();
  const [i] = Q.useState(Ao.current);
  return i;
}
const $u = [
  "M 18 372 C 106 380 102 300 180 300 S 250 360 318 310 382 120 510 112",
  "M 12 116 C 118 92 155 206 248 214 S 376 228 500 350"
];
function mC() {
  const i = Q.useRef(null), [l, o] = Q.useState(!0), r = F1();
  Q.useEffect(() => {
    if (!i.current || !("IntersectionObserver" in window)) return;
    const h = new IntersectionObserver(([d]) => {
      o(d.isIntersecting), typeof i.current?.pauseAnimations == "function" && (d.isIntersecting && !r ? i.current.unpauseAnimations() : i.current.pauseAnimations());
    }, { rootMargin: "80px" });
    return h.observe(i.current), () => h.disconnect();
  }, [r]);
  const c = l && !r;
  return /* @__PURE__ */ A.createElement("div", { className: "passport-flight-layer", "aria-hidden": "true" }, /* @__PURE__ */ A.createElement("svg", { ref: i, className: "passport-flight-svg", viewBox: "0 0 520 470", preserveAspectRatio: "none", focusable: "false" }, /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("path", { id: "passport-route-primary", d: $u[0] })), /* @__PURE__ */ A.createElement(ei.path, { d: $u[0], className: "passport-route passport-route-primary", initial: { pathLength: 0 }, animate: { pathLength: r || c ? 1 : 0 }, transition: { duration: 2.8, ease: "easeInOut", repeat: c ? 1 / 0 : 0, repeatType: "mirror", repeatDelay: 1.5 } }), /* @__PURE__ */ A.createElement(ei.path, { d: $u[1], className: "passport-route passport-route-secondary", initial: { pathLength: 0 }, animate: { pathLength: r || c ? 1 : 0 }, transition: { duration: 3.8, ease: "easeInOut", delay: 0.25, repeat: c ? 1 / 0 : 0, repeatType: "mirror", repeatDelay: 2 } }), /* @__PURE__ */ A.createElement("circle", { className: "passport-waypoint", cx: "318", cy: "310", r: "4", style: { animationPlayState: c ? "running" : "paused" } }), !r && /* @__PURE__ */ A.createElement("g", { className: "passport-route-plane" }, /* @__PURE__ */ A.createElement("animateMotion", { dur: "18s", repeatCount: "indefinite", rotate: "auto", path: $u[0] }), /* @__PURE__ */ A.createElement("path", { d: "M0-8 2-2 9 1 9 3 2 2 1 8-1 8-1 2-7 3-7 1-1-2Z" })), r && /* @__PURE__ */ A.createElement("path", { className: "passport-plane-still", d: "M12 364 14 370 21 373 21 375 14 374 13 380 11 380 11 374 5 375 5 373 11 370Z" })));
}
const pC = Q.lazy(() => import("./passport-PassportCanvas.js").then((i) => ({ default: i.PassportCanvas }))), Wi = [
  ["India", "IND", "stamp-red", "12 JAN 2018"],
  ["Egypt", "EGY", "stamp-blue", "04 MAR 2018"],
  ["Saudi Arabia", "SAU", "stamp-green", "19 NOV 2018"],
  ["Oman", "OMN", "stamp-purple", "22 APR 2019"],
  ["Turkey", "TUR", "stamp-red", "15 MAY 2019"],
  ["Georgia", "GEO", "stamp-blue", "02 JUL 2019"],
  ["Armenia", "ARM", "stamp-purple", "14 JUL 2019"],
  ["Switzerland", "CHE", "stamp-red", "30 AUG 2019"],
  ["Germany", "DEU", "stamp-blue", "05 SEP 2019"],
  ["Slovakia", "SVK", "stamp-purple", "12 SEP 2019"],
  ["Czech Republic", "CZE", "stamp-red", "18 SEP 2019"],
  ["Austria", "AUT", "stamp-blue", "25 SEP 2019"],
  ["Slovenia", "SVN", "stamp-green", "02 OCT 2019"],
  ["Croatia", "HRV", "stamp-red", "10 OCT 2019"],
  ["Hungary", "HUN", "stamp-purple", "17 OCT 2019"],
  ["France", "FRA", "stamp-blue", "03 NOV 2019"],
  ["Belgium", "BEL", "stamp-red", "12 NOV 2019"],
  ["Uzbekistan", "UZB", "stamp-green", "20 JAN 2020"],
  ["Kazakhstan", "KAZ", "stamp-blue", "05 FEB 2020"],
  ["Azerbaijan", "AZE", "stamp-purple", "14 MAR 2021"],
  ["Kyrgyzstan", "KGZ", "stamp-red", "28 JUL 2021"],
  ["Malaysia", "MYS", "stamp-blue", "10 AUG 2022"],
  ["Nepal", "NPL", "stamp-green", "15 SEP 2023"]
].map(([i, l, o, r], c) => ({ id: c + 1, name: i, code: l, style: o, date: r })), ba = Wi.length, to = Math.ceil(ba / 2);
function sn(i) {
  return i.map((l, o) => /* @__PURE__ */ A.createElement("rect", { key: l + o, y: o * 20 / i.length, width: "30", height: 20 / i.length + 0.1, fill: l }));
}
function lv(i) {
  return i.map((l, o) => /* @__PURE__ */ A.createElement("rect", { key: l + o, x: o * 30 / i.length, width: 30 / i.length + 0.1, height: "20", fill: l }));
}
const yC = {
  IND: /* @__PURE__ */ A.createElement(A.Fragment, null, sn(["#ff9933", "#fff", "#138808"]), /* @__PURE__ */ A.createElement("circle", { cx: "15", cy: "10", r: "2.6", fill: "none", stroke: "#000080", strokeWidth: ".55" }), /* @__PURE__ */ A.createElement("circle", { cx: "15", cy: "10", r: ".55", fill: "#000080" }), /* @__PURE__ */ A.createElement("path", { d: "M15 7.5v5m-2.5-2.5h5m-4.25-1.75 3.5 3.5m0-3.5-3.5 3.5", stroke: "#000080", strokeWidth: ".3" })),
  EGY: /* @__PURE__ */ A.createElement(A.Fragment, null, sn(["#ce1126", "#fff", "#000"]), /* @__PURE__ */ A.createElement("path", { d: "m13 7 2-1 2 1-1 2h-2zm-2 2h8v1h-8z", fill: "#c09300" })),
  SAU: /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("rect", { width: "30", height: "20", fill: "#006c35" }), /* @__PURE__ */ A.createElement("path", { d: "M7 13h16M8 11h13", stroke: "#fff", strokeWidth: ".9", strokeLinecap: "round" }), /* @__PURE__ */ A.createElement("path", { d: "m20 11 2 2-2 2", fill: "none", stroke: "#fff", strokeWidth: ".55" })),
  OMN: /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("rect", { x: "7", width: "23", height: "6.67", fill: "#fff" }), /* @__PURE__ */ A.createElement("rect", { x: "7", y: "6.67", width: "23", height: "6.66", fill: "#d01c1f" }), /* @__PURE__ */ A.createElement("rect", { x: "7", y: "13.33", width: "23", height: "6.67", fill: "#008000" }), /* @__PURE__ */ A.createElement("rect", { width: "7", height: "20", fill: "#d01c1f" }), /* @__PURE__ */ A.createElement("path", { d: "M2.3 5.2v9.6m0-8.5 2 1.2m-2 1.1 2 1.2m-2 1.1 2 1.2", fill: "none", stroke: "#fff", strokeWidth: ".8" })),
  TUR: /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("rect", { width: "30", height: "20", fill: "#e30a17" }), /* @__PURE__ */ A.createElement("circle", { cx: "12", cy: "10", r: "5", fill: "#fff" }), /* @__PURE__ */ A.createElement("circle", { cx: "14", cy: "9", r: "4", fill: "#e30a17" }), /* @__PURE__ */ A.createElement("path", { d: "m20 6.7 1 2.2 2.4.2-1.8 1.5.6 2.3-2.2-1.2-2.1 1.2.5-2.3-1.8-1.5 2.4-.2z", fill: "#fff" })),
  GEO: /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("rect", { width: "30", height: "20", fill: "#fff" }), /* @__PURE__ */ A.createElement("path", { d: "M13.5 0h3v20h-3zM0 8.5h30v3H0zM5 3h1.5v5H5zm18 0h1.5v5H23zM5 12h1.5v5H5zm18 0h1.5v5H23zM3.3 4.7H8v1.5H3.3zm18.7 0H27v1.5h-5zM3.3 13.8H8v1.5H3.3zm18.7 0H27v1.5h-5z", fill: "#e31e24" })),
  ARM: /* @__PURE__ */ A.createElement(A.Fragment, null, sn(["#d90012", "#0033a0", "#f2a800"])),
  CHE: /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("rect", { x: "5", width: "20", height: "20", fill: "#d52b1e" }), /* @__PURE__ */ A.createElement("path", { d: "M13 4h4v4h4v4h-4v4h-4v-4H9V8h4z", fill: "#fff" })),
  DEU: /* @__PURE__ */ A.createElement(A.Fragment, null, sn(["#000", "#dd0000", "#ffce00"])),
  SVK: /* @__PURE__ */ A.createElement(A.Fragment, null, sn(["#fff", "#0b4ea2", "#ee1c25"]), /* @__PURE__ */ A.createElement("path", { d: "m5 5 4 .8 4-.8v5c0 3-2.4 4.4-4 5.2-1.6-.8-4-2.2-4-5.2z", fill: "#fff", stroke: "#d7141a", strokeWidth: ".5" }), /* @__PURE__ */ A.createElement("path", { d: "M8.5 7v6m-2.5-3h5", stroke: "#0b4ea2", strokeWidth: ".8" })),
  CZE: /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement(A.Fragment, null, sn(["#fff", "#d7141a"])), /* @__PURE__ */ A.createElement("path", { d: "M0 0 15 10 0 20z", fill: "#11457e" })),
  AUT: /* @__PURE__ */ A.createElement(A.Fragment, null, sn(["#ed2939", "#fff", "#ed2939"])),
  SVN: /* @__PURE__ */ A.createElement(A.Fragment, null, sn(["#fff", "#005da4", "#ed1c24"]), /* @__PURE__ */ A.createElement("path", { d: "m5 3 3 .6 3-.6v4c0 2-1.8 3-3 3.6C6.8 10 5 9 5 7z", fill: "#fff", stroke: "#ed1c24", strokeWidth: ".35" })),
  HRV: /* @__PURE__ */ A.createElement(A.Fragment, null, sn(["#ff0000", "#fff", "#171796"]), /* @__PURE__ */ A.createElement("path", { d: "M12 5h6v5c0 2.4-1.8 3.6-3 4.2-1.2-.6-3-1.8-3-4.2z", fill: "#fff", stroke: "#171796", strokeWidth: ".35" }), Array.from({ length: 5 }, (i, l) => /* @__PURE__ */ A.createElement("rect", { key: l, x: 12.5 + l % 2 * 1.35, y: 6 + Math.floor(l / 2) * 1.25, width: "1.35", height: "1.25", fill: l % 2 ? "#fff" : "#ed1c24" }))),
  HUN: /* @__PURE__ */ A.createElement(A.Fragment, null, sn(["#ce2939", "#fff", "#477050"])),
  FRA: /* @__PURE__ */ A.createElement(A.Fragment, null, lv(["#002395", "#fff", "#ed2939"])),
  BEL: /* @__PURE__ */ A.createElement(A.Fragment, null, lv(["#000", "#fae042", "#ed2939"])),
  UZB: /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("rect", { width: "30", height: "6.3", fill: "#1eb5d5" }), /* @__PURE__ */ A.createElement("rect", { y: "6.3", width: "30", height: ".65", fill: "#d22630" }), /* @__PURE__ */ A.createElement("rect", { y: "6.95", width: "30", height: "6.1", fill: "#fff" }), /* @__PURE__ */ A.createElement("rect", { y: "13.05", width: "30", height: ".65", fill: "#d22630" }), /* @__PURE__ */ A.createElement("rect", { y: "13.7", width: "30", height: "6.3", fill: "#1eb53a" }), /* @__PURE__ */ A.createElement("path", { d: "M7 2.5a3 3 0 1 0 3.8 4.1A3.5 3.5 0 1 1 7 2.5", fill: "#fff" }), /* @__PURE__ */ A.createElement("circle", { cx: "13", cy: "3", r: ".55", fill: "#fff" }), /* @__PURE__ */ A.createElement("circle", { cx: "15", cy: "3", r: ".55", fill: "#fff" }), /* @__PURE__ */ A.createElement("circle", { cx: "17", cy: "3", r: ".55", fill: "#fff" }), /* @__PURE__ */ A.createElement("circle", { cx: "13", cy: "5", r: ".55", fill: "#fff" }), /* @__PURE__ */ A.createElement("circle", { cx: "15", cy: "5", r: ".55", fill: "#fff" })),
  KAZ: /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("rect", { width: "30", height: "20", fill: "#00afca" }), /* @__PURE__ */ A.createElement("circle", { cx: "15", cy: "8", r: "3", fill: "#f3d02f" }), /* @__PURE__ */ A.createElement("path", { d: "M15 4v8m-4-4h8m-6.8-2.8 5.6 5.6m0-5.6-5.6 5.6M4 3v14m-1-2 1 2 1-2m-1-9-1 2h2z", fill: "none", stroke: "#f3d02f", strokeWidth: ".55" })),
  AZE: /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement(A.Fragment, null, sn(["#00b5e2", "#ef3340", "#509e2f"])), /* @__PURE__ */ A.createElement("circle", { cx: "13.2", cy: "10", r: "3", fill: "#fff" }), /* @__PURE__ */ A.createElement("circle", { cx: "14.3", cy: "9.3", r: "2.4", fill: "#ef3340" }), /* @__PURE__ */ A.createElement("path", { d: "m17 7.2.7 1.5 1.7.1-1.3 1.1.4 1.6-1.5-.8-1.5.8.4-1.6-1.3-1.1 1.7-.1z", fill: "#fff" })),
  KGZ: /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("rect", { width: "30", height: "20", fill: "#e8112d" }), /* @__PURE__ */ A.createElement("circle", { cx: "15", cy: "10", r: "5.2", fill: "none", stroke: "#ffdf00", strokeWidth: ".8" }), /* @__PURE__ */ A.createElement("circle", { cx: "15", cy: "10", r: "2.2", fill: "none", stroke: "#ffdf00", strokeWidth: ".8" }), /* @__PURE__ */ A.createElement("path", { d: "M15 4v12M9 10h12M10.8 5.8l8.4 8.4m0-8.4-8.4 8.4", stroke: "#ffdf00", strokeWidth: ".65" })),
  MYS: /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement(A.Fragment, null, Array.from({ length: 7 }, (i, l) => /* @__PURE__ */ A.createElement("rect", { key: l, y: l * 20 / 7, width: "30", height: 20 / 7 + 0.1, fill: l % 2 ? "#fff" : "#cc0001" }))), /* @__PURE__ */ A.createElement("rect", { width: "14", height: "10.5", fill: "#010066" }), /* @__PURE__ */ A.createElement("circle", { cx: "5.5", cy: "5", r: "3.1", fill: "#ffcc00" }), /* @__PURE__ */ A.createElement("circle", { cx: "6.5", cy: "4.3", r: "2.5", fill: "#010066" }), /* @__PURE__ */ A.createElement("path", { d: "m9.5 2.8.65 1.45 1.6.1-1.2 1 .35 1.5-1.4-.75-1.4.75.35-1.5-1.2-1 1.6-.1z", fill: "#ffcc00" })),
  NPL: /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("path", { d: "M5 1h16L13 9h8L9 19H5z", fill: "#dc143c", stroke: "#003893", strokeWidth: "2", strokeLinejoin: "round" }), /* @__PURE__ */ A.createElement("circle", { cx: "10.5", cy: "5", r: "1.5", fill: "#fff" }), /* @__PURE__ */ A.createElement("path", { d: "M10 12a3 3 0 0 0 5.5 1.7A4 4 0 0 1 10 12", fill: "#fff" }))
};
function P1({ code: i }) {
  return /* @__PURE__ */ A.createElement("svg", { className: "country-flag", viewBox: "0 0 30 20", role: "img", "aria-label": `${i} flag`, focusable: "false" }, yC[i]);
}
function sv({ country: i, index: l, reducedMotion: o, isSelected: r }) {
  const c = l * 17 % 35 - 15;
  return /* @__PURE__ */ A.createElement(ei.div, { className: `immigration-stamp ${i.style}${r ? " is-selected-stamp" : ""}`, initial: o ? !1 : { y: -52, rotate: c - 12, scale: 0.72, opacity: 0 }, animate: { y: 0, rotate: c, scale: 1, opacity: 0.88 }, transition: o ? { duration: 0 } : { type: "spring", stiffness: 560, damping: 23, mass: 0.55, delay: l * 0.02 } }, /* @__PURE__ */ A.createElement("div", { className: "passport-stamp-head" }, /* @__PURE__ */ A.createElement(P1, { code: i.code }), /* @__PURE__ */ A.createElement("b", null, i.code)), /* @__PURE__ */ A.createElement("strong", null, i.name), /* @__PURE__ */ A.createElement("small", null, i.date));
}
function gC({ onOpen: i, stamps: l, reducedMotion: o }) {
  return /* @__PURE__ */ A.createElement(ei.button, { type: "button", className: "passport-cover passport-cover-button", "aria-label": "Open the travel passport and reveal its country stamps", onClick: i, whileHover: o ? void 0 : { y: -5, rotateY: -5, rotateX: 2 }, whileTap: o ? void 0 : { scale: 0.98 } }, /* @__PURE__ */ A.createElement("svg", { className: "passport-cover-emblem", viewBox: "0 0 100 100", "aria-hidden": "true" }, /* @__PURE__ */ A.createElement("circle", { cx: "50", cy: "50", r: "43" }), /* @__PURE__ */ A.createElement("circle", { cx: "50", cy: "50", r: "34" }), /* @__PURE__ */ A.createElement("path", { d: "M22 50q28-22 56 0-28 22-56 0zm28-27c-16 17-16 37 0 54 16-17 16-37 0-54zm-27 27h54" })), /* @__PURE__ */ A.createElement("span", { className: "gold-foil passport-cover-title" }, "PASSPORT"), /* @__PURE__ */ A.createElement("span", { className: "gold-foil passport-cover-edition" }, "FIELD NOTES · ", ba, " COUNTRIES"), /* @__PURE__ */ A.createElement("span", { className: "gold-foil passport-cover-owner" }, "ANVESH CHELLUBOINA"), /* @__PURE__ */ A.createElement("span", { className: "gold-foil passport-cover-hint" }, "OPEN TO EXPLORE · ", ba, " COUNTRIES"), /* @__PURE__ */ A.createElement("span", { className: "passport-ink-stamps", "aria-hidden": "true" }, l.slice(-3).map((r, c) => /* @__PURE__ */ A.createElement("span", { key: r.id, className: `immigration-stamp dropped ${r.style}`, style: { "--rot": `${c * 11 - 8}deg` } }, r.code))));
}
function vC({ stamps: i, onClose: l, isAnimating: o, reducedMotion: r, stampedCountryId: c, stampSelection: h }) {
  const d = i.slice(0, to), m = i.slice(to, ba), v = (S, g) => `${String(S + 1).padStart(2, "0")}—${String(g).padStart(2, "0")}`;
  return /* @__PURE__ */ A.createElement(ei.div, { className: "passport-open", style: { transformOrigin: "left center" }, initial: r ? !1 : { rotateY: -82, opacity: 0, scale: 0.94 }, animate: { rotateY: 0, opacity: 1, scale: 1 }, exit: { rotateY: r ? 0 : -42, opacity: 0, scale: r ? 1 : 0.98 }, transition: { duration: r ? 0 : 0.78, ease: [0.2, 0.8, 0.2, 1] } }, /* @__PURE__ */ A.createElement("div", { className: "passport-page-left" }, /* @__PURE__ */ A.createElement("div", { className: "passport-page-heading" }, /* @__PURE__ */ A.createElement("span", null, "ENTRY RECORD · ", v(0, d.length)), /* @__PURE__ */ A.createElement("span", null, "DEPARTURES")), /* @__PURE__ */ A.createElement("div", { className: "passport-page-stamps" }, d.map((S, g) => /* @__PURE__ */ A.createElement(sv, { key: `${S.id}-${S.id === c ? h : "idle"}`, country: S, index: g, reducedMotion: r, isSelected: S.id === c }))), /* @__PURE__ */ A.createElement("small", { className: "passport-page-footer" }, "ANVESH CHELLUBOINA · FIELD NOTES")), /* @__PURE__ */ A.createElement("span", { className: "passport-spine", "aria-hidden": "true" }), /* @__PURE__ */ A.createElement("div", { className: "passport-page-right" }, /* @__PURE__ */ A.createElement("div", { className: "passport-page-heading" }, /* @__PURE__ */ A.createElement("span", null, "ENTRY RECORD · ", v(to, to + m.length)), /* @__PURE__ */ A.createElement("span", null, "ARRIVALS")), /* @__PURE__ */ A.createElement("div", { className: "passport-page-stamps" }, m.map((S, g) => /* @__PURE__ */ A.createElement(sv, { key: `${S.id}-${S.id === c ? h : "idle"}`, country: S, index: g + 12, reducedMotion: r, isSelected: S.id === c }))), /* @__PURE__ */ A.createElement("div", { className: "passport-page-controls" }, /* @__PURE__ */ A.createElement("span", { "aria-live": "polite" }, o ? `STAMPING ${i.length} / ${ba}` : `${ba} COUNTRIES EXPLORED`), /* @__PURE__ */ A.createElement("button", { type: "button", className: "passport-close", onClick: l }, "Close passport"))));
}
function SC({ onClose: i, onStampCountry: l, iconOnly: o, onToggleIconOnly: r, reducedMotion: c }) {
  return /* @__PURE__ */ A.createElement(ei.div, { className: "passport-field-page", initial: c ? !1 : { opacity: 0, scale: 0.96, rotateY: 10 }, animate: { opacity: 1, scale: 1, rotateY: 0 }, exit: { opacity: 0, scale: 0.98 }, transition: { duration: c ? 0 : 0.35 } }, /* @__PURE__ */ A.createElement("div", { className: "passport-field-heading" }, /* @__PURE__ */ A.createElement("span", null, "FIELD NOTES"), /* @__PURE__ */ A.createElement("strong", null, ba, " COUNTRIES · 2018—2023")), /* @__PURE__ */ A.createElement("button", { type: "button", className: "passport-grid-toggle", "aria-pressed": o, onClick: r }, o ? "Show country details" : "Show flags only"), /* @__PURE__ */ A.createElement("div", { id: "passport-country-grid", className: `passport-flag-grid${o ? " icon-only-mode" : ""}`, role: "group", "aria-label": "Countries explored" }, Wi.map((h, d) => /* @__PURE__ */ A.createElement(ei.button, { type: "button", layout: !c, className: `passport-flag-entry ${h.style}`, key: h.id, "data-country-stamp": !0, "data-country": h.name, "aria-label": `Stamp ${h.name} in the passport`, title: `Stamp ${h.name}`, onClick: () => l(h.name), initial: c ? !1 : { opacity: 0, y: 7 }, animate: { opacity: 1, y: 0 }, transition: { duration: c ? 0 : 0.2, delay: c ? 0 : d * 0.018 } }, /* @__PURE__ */ A.createElement("span", { className: "passport-entry-flag" }, /* @__PURE__ */ A.createElement(P1, { code: h.code })), /* @__PURE__ */ A.createElement("span", { className: "passport-entry-details" }, /* @__PURE__ */ A.createElement("strong", null, h.name), /* @__PURE__ */ A.createElement("small", null, h.code, " · ", h.date))))), /* @__PURE__ */ A.createElement("div", { className: "passport-field-footer" }, /* @__PURE__ */ A.createElement("span", null, "ANVESH CHELLUBOINA · TRAVEL ARCHIVE"), /* @__PURE__ */ A.createElement("button", { type: "button", className: "passport-close", onClick: i }, "Close passport")));
}
function TC() {
  try {
    const i = document.createElement("canvas");
    return !!(i.getContext("webgl2") || i.getContext("webgl"));
  } catch {
    return !1;
  }
}
function EC() {
  const [i, l] = Q.useState(!1), [o, r] = Q.useState("countries"), [c, h] = Q.useState([]), [d, m] = Q.useState(!1), [v, S] = Q.useState(!1), [g, y] = Q.useState(!1), [b, R] = Q.useState(null), [z, B] = Q.useState(0), [_, X] = Q.useState(!1), [K, k] = Q.useState(""), $ = Q.useRef(null), et = F1();
  Q.useEffect(() => {
    document.querySelectorAll(".field-notes").forEach((P) => {
      P.setAttribute("aria-pressed", String(_));
    });
  }, [_]);
  const st = Q.useCallback((P) => {
    r(P), l(!0);
  }, []), U = Q.useCallback((P) => {
    const ut = String(P || "").trim().toLocaleLowerCase(), mt = Wi.find((dt) => dt.name.toLocaleLowerCase() === ut || dt.code.toLocaleLowerCase() === ut);
    if (!mt) {
      k(`No passport country matches “${P}”.`);
      return;
    }
    R(mt.id), B((dt) => dt + 1), k(`${mt.name} passport stamp selected.`), st("countries");
  }, [st]);
  Q.useEffect(() => {
    const P = () => st("field-notes"), ut = () => {
      X((Ot) => !Ot), st("field-notes");
    }, mt = (Ot) => U(Ot.detail?.country), dt = (Ot) => {
      const St = Ot.target instanceof Element ? Ot.target.closest(".field-notes, [data-country-stamp]") : null;
      if (!St || $.current?.contains(St)) return;
      const J = St.dataset.country || St.dataset.countryName;
      J ? window.dispatchEvent(new CustomEvent("stamp-country", { detail: { country: J } })) : window.dispatchEvent(new CustomEvent("passport:toggle-country-view")), $.current?.scrollIntoView({ behavior: et ? "auto" : "smooth", block: "center" });
    };
    return window.addEventListener("passport:open-field-notes", P), window.addEventListener("passport:toggle-country-view", ut), window.addEventListener("stamp-country", mt), document.addEventListener("click", dt), () => {
      window.removeEventListener("passport:open-field-notes", P), window.removeEventListener("passport:toggle-country-view", ut), window.removeEventListener("stamp-country", mt), document.removeEventListener("click", dt);
    };
  }, [st, et, U]), Q.useEffect(() => {
    const P = window.matchMedia("(hover: hover) and (pointer: fine)"), ut = window.matchMedia("(prefers-reduced-motion: reduce)"), mt = () => {
      const dt = window.innerWidth >= 768 && P.matches && !ut.matches && TC();
      S(dt), dt || y(!1);
    };
    return mt(), window.addEventListener("resize", mt, { passive: !0 }), P.addEventListener?.("change", mt), ut.addEventListener?.("change", mt), () => {
      window.removeEventListener("resize", mt), P.removeEventListener?.("change", mt), ut.removeEventListener?.("change", mt);
    };
  }, [et]), Q.useEffect(() => {
    if (!v || !$.current) return;
    if (!("IntersectionObserver" in window)) {
      y(!0);
      return;
    }
    const P = new IntersectionObserver(([ut]) => {
      ut.isIntersecting && (y(!0), P.disconnect());
    }, { rootMargin: "160px" });
    return P.observe($.current), () => P.disconnect();
  }, [v]), Q.useEffect(() => {
    if (!i) return;
    if (o === "field-notes") {
      h(Wi), m(!1);
      return;
    }
    h([]), m(!0);
    const P = Wi.map((ut, mt) => window.setTimeout(() => {
      h((dt) => [...dt, ut]), mt === Wi.length - 1 && m(!1);
    }, mt * 36));
    return () => P.forEach(window.clearTimeout);
  }, [i, o]);
  const G = () => {
    l(!1), h([]), R(null), k("");
  };
  return /* @__PURE__ */ A.createElement("div", { className: "passport-viewer", ref: $ }, /* @__PURE__ */ A.createElement("div", { className: "passport-viewer-route", "aria-hidden": "true" }), !i && /* @__PURE__ */ A.createElement("div", { className: "passport-viewer-actions", role: "group", "aria-label": "Open passport view" }, /* @__PURE__ */ A.createElement("button", { type: "button", onClick: () => st("field-notes") }, "FIELD NOTES"), /* @__PURE__ */ A.createElement("button", { type: "button", "aria-pressed": _, onClick: () => {
    X((P) => !P), st("field-notes");
  } }, ba, " COUNTRIES EXPLORED")), /* @__PURE__ */ A.createElement("div", { className: "passport-object-slot" }, /* @__PURE__ */ A.createElement(SM, { mode: "wait", initial: !1 }, i ? o === "field-notes" ? /* @__PURE__ */ A.createElement(SC, { key: "field-notes", onClose: G, onStampCountry: U, iconOnly: _, onToggleIconOnly: () => X((P) => !P), reducedMotion: !!et }) : /* @__PURE__ */ A.createElement(vC, { key: "country-stamps", stamps: c, onClose: G, isAnimating: d, reducedMotion: !!et, stampedCountryId: b, stampSelection: z }) : /* @__PURE__ */ A.createElement("div", { className: "passport-cover-stage", key: "closed-passport" }, v && g && /* @__PURE__ */ A.createElement("div", { className: "passport-canvas", "aria-hidden": "true" }, /* @__PURE__ */ A.createElement(bC, { onError: () => S(!1) }, /* @__PURE__ */ A.createElement(Q.Suspense, { fallback: null }, /* @__PURE__ */ A.createElement(pC, { onOpen: () => st("countries"), reducedMotion: !!et, hostRef: $ })))), /* @__PURE__ */ A.createElement(gC, { onOpen: () => st("countries"), stamps: c, reducedMotion: !!et })))), /* @__PURE__ */ A.createElement("span", { className: "sr-only", role: "status", "aria-live": "polite" }, K || (i ? "Passport opened. Country stamps are being revealed." : "Passport closed.")));
}
class bC extends A.Component {
  state = { hasError: !1 };
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch() {
    this.props.onError?.();
  }
  render() {
    return this.state.hasError ? null : this.props.children;
  }
}
function AC() {
  return /* @__PURE__ */ A.createElement("section", { className: "hero section-wrap" }, /* @__PURE__ */ A.createElement(mC, null), /* @__PURE__ */ A.createElement("div", { className: "hero-copy" }, /* @__PURE__ */ A.createElement("p", { className: "eyebrow" }, /* @__PURE__ */ A.createElement("span", { className: "eyebrow-line" }), " Dubai, UAE · Open to meaningful opportunities"), /* @__PURE__ */ A.createElement("h1", null, /* @__PURE__ */ A.createElement("span", { className: "line" }, /* @__PURE__ */ A.createElement("span", null, "Good work.")), /* @__PURE__ */ A.createElement("span", { className: "line" }, /* @__PURE__ */ A.createElement("em", null, "Curious journeys."))), /* @__PURE__ */ A.createElement("p", { className: "hero-intro" }, "I’m Anvesh — an engineering and operations professional who enjoys bringing structure to complex work, helping people tell their stories, and finding the beauty in places beyond the usual route."), /* @__PURE__ */ A.createElement("div", { className: "hero-actions" }, /* @__PURE__ */ A.createElement("a", { className: "button button-dark", href: "#contact" }, "Get in touch ", /* @__PURE__ */ A.createElement("span", null, "↘")), /* @__PURE__ */ A.createElement("a", { className: "text-link", href: "#work" }, "Explore my services ", /* @__PURE__ */ A.createElement("span", null, "↘"))), /* @__PURE__ */ A.createElement("div", { className: "hero-facts" }, /* @__PURE__ */ A.createElement("div", null, /* @__PURE__ */ A.createElement("strong", null, "12+"), /* @__PURE__ */ A.createElement("span", null, "years in engineering & operations")), /* @__PURE__ */ A.createElement("div", null, /* @__PURE__ */ A.createElement("strong", null, "MSc"), /* @__PURE__ */ A.createElement("span", null, "Project Management · Merit")), /* @__PURE__ */ A.createElement("div", null, /* @__PURE__ */ A.createElement("strong", null, "23"), /* @__PURE__ */ A.createElement("span", null, "countries explored")))), /* @__PURE__ */ A.createElement("div", { className: "hero-visual", role: "group", "aria-label": "Interactive travel passport" }, /* @__PURE__ */ A.createElement(EC, null)));
}
const uv = document.getElementById("hero-root");
uv && tb.createRoot(uv).render(/* @__PURE__ */ A.createElement(AC, null));
export {
  A as R,
  PE as a,
  Q as b,
  KE as g,
  Xn as j,
  rh as r
};
