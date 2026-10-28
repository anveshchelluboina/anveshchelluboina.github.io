function GE(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var ff = { exports: {} }, pt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mg;
function qE() {
  if (mg) return pt;
  mg = 1;
  var i = Symbol.for("react.transitional.element"), l = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), h = Symbol.for("react.consumer"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), S = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), b = Symbol.for("react.view_transition"), O = Symbol.iterator;
  function x(E) {
    return E === null || typeof E != "object" ? null : (E = O && E[O] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var U = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, z = Object.assign, X = {};
  function K(E, B, Z) {
    this.props = E, this.context = B, this.refs = X, this.updater = Z || U;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(E, B) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, B, "setState");
  }, K.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function k() {
  }
  k.prototype = K.prototype;
  function $(E, B, Z) {
    this.props = E, this.context = B, this.refs = X, this.updater = Z || U;
  }
  var et = $.prototype = new k();
  et.constructor = $, z(et, K.prototype), et.isPureReactComponent = !0;
  var st = Array.isArray;
  function w() {
  }
  var Y = { H: null, A: null, T: null, S: null }, F = Object.prototype.hasOwnProperty;
  function ut(E, B, Z) {
    var W = Z.ref;
    return {
      $$typeof: i,
      type: E,
      key: B,
      ref: W !== void 0 ? W : null,
      props: Z
    };
  }
  function mt(E, B) {
    return ut(E.type, B, E.props);
  }
  function dt(E) {
    return typeof E == "object" && E !== null && E.$$typeof === i;
  }
  function Ot(E) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(Z) {
      return B[Z];
    });
  }
  var St = /\/+/g;
  function J(E, B) {
    return typeof E == "object" && E !== null && E.key != null ? Ot("" + E.key) : B.toString(36);
  }
  function V(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(w, w) : (E.status = "pending", E.then(
          function(B) {
            E.status === "pending" && (E.status = "fulfilled", E.value = B);
          },
          function(B) {
            E.status === "pending" && (E.status = "rejected", E.reason = B);
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
  function G(E, B, Z, W, Tt) {
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
            case v:
              return Rt = E._init, G(
                Rt(E._payload),
                B,
                Z,
                W,
                Tt
              );
          }
      }
    if (Rt)
      return Tt = Tt(E), Rt = W === "" ? "." + J(E, 0) : W, st(Tt) ? (Z = "", Rt != null && (Z = Rt.replace(St, "$&/") + "/"), G(Tt, B, Z, "", function(Xt) {
        return Xt;
      })) : Tt != null && (dt(Tt) && (Tt = mt(
        Tt,
        Z + (Tt.key == null || E && E.key === Tt.key ? "" : ("" + Tt.key).replace(
          St,
          "$&/"
        ) + "/") + Rt
      )), B.push(Tt)), 1;
    Rt = 0;
    var it = W === "" ? "." : W + ":";
    if (st(E))
      for (var ft = 0; ft < E.length; ft++)
        W = E[ft], bt = it + J(W, ft), Rt += G(
          W,
          B,
          Z,
          bt,
          Tt
        );
    else if (ft = x(E), typeof ft == "function")
      for (E = ft.call(E), ft = 0; !(W = E.next()).done; )
        W = W.value, bt = it + J(W, ft++), Rt += G(
          W,
          B,
          Z,
          bt,
          Tt
        );
    else if (bt === "object") {
      if (typeof E.then == "function")
        return G(
          V(E),
          B,
          Z,
          W,
          Tt
        );
      throw B = String(E), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Rt;
  }
  function j(E, B, Z) {
    if (E == null) return E;
    var W = [], Tt = 0;
    return G(E, W, "", "", function(bt) {
      return B.call(Z, bt, Tt++);
    }), W;
  }
  function I(E) {
    if (E._status === -1) {
      var B = E._result, Z = B();
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
      var B = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
        error: E
      });
      if (!window.dispatchEvent(B)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", E);
      return;
    }
    console.error(E);
  };
  function ct(E) {
    var B = Y.T, Z = {};
    Z.types = B !== null ? B.types : null, Y.T = Z;
    try {
      var W = E(), Tt = Y.S;
      Tt !== null && Tt(Z, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(w, tt);
    } catch (bt) {
      tt(bt);
    } finally {
      B !== null && Z.types !== null && (B.types = Z.types), Y.T = B;
    }
  }
  function yt(E) {
    var B = Y.T;
    if (B !== null) {
      var Z = B.types;
      Z === null ? B.types = [E] : Z.indexOf(E) === -1 && Z.push(E);
    } else ct(yt.bind(null, E));
  }
  var ot = {
    map: j,
    forEach: function(E, B, Z) {
      j(
        E,
        function() {
          B.apply(this, arguments);
        },
        Z
      );
    },
    count: function(E) {
      var B = 0;
      return j(E, function() {
        B++;
      }), B;
    },
    toArray: function(E) {
      return j(E, function(B) {
        return B;
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
  return pt.Activity = y, pt.Children = ot, pt.Component = K, pt.Fragment = o, pt.Profiler = c, pt.PureComponent = $, pt.StrictMode = r, pt.Suspense = g, pt.ViewTransition = b, pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y, pt.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(E) {
      return Y.H.useMemoCache(E);
    }
  }, pt.addTransitionType = yt, pt.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, pt.cacheSignal = function() {
    return null;
  }, pt.cloneElement = function(E, B, Z) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var W = z({}, E.props), Tt = E.key;
    if (B != null)
      for (bt in B.key !== void 0 && (Tt = "" + B.key), B)
        !F.call(B, bt) || bt === "key" || bt === "__self" || bt === "__source" || bt === "ref" && B.ref === void 0 || (W[bt] = B[bt]);
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
  }, pt.createElement = function(E, B, Z) {
    var W, Tt = {}, bt = null;
    if (B != null)
      for (W in B.key !== void 0 && (bt = "" + B.key), B)
        F.call(B, W) && W !== "key" && W !== "__self" && W !== "__source" && (Tt[W] = B[W]);
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
      $$typeof: v,
      _payload: { _status: -1, _result: E },
      _init: I
    };
  }, pt.memo = function(E, B) {
    return {
      $$typeof: S,
      type: E,
      compare: B === void 0 ? null : B
    };
  }, pt.startTransition = ct, pt.unstable_useCacheRefresh = function() {
    return Y.H.useCacheRefresh();
  }, pt.use = function(E) {
    return Y.H.use(E);
  }, pt.useActionState = function(E, B, Z) {
    return Y.H.useActionState(E, B, Z);
  }, pt.useCallback = function(E, B) {
    return Y.H.useCallback(E, B);
  }, pt.useContext = function(E) {
    return Y.H.useContext(E);
  }, pt.useDebugValue = function() {
  }, pt.useDeferredValue = function(E, B) {
    return Y.H.useDeferredValue(E, B);
  }, pt.useEffect = function(E, B) {
    return Y.H.useEffect(E, B);
  }, pt.useEffectEvent = function(E) {
    return Y.H.useEffectEvent(E);
  }, pt.useId = function() {
    return Y.H.useId();
  }, pt.useImperativeHandle = function(E, B, Z) {
    return Y.H.useImperativeHandle(E, B, Z);
  }, pt.useInsertionEffect = function(E, B) {
    return Y.H.useInsertionEffect(E, B);
  }, pt.useLayoutEffect = function(E, B) {
    return Y.H.useLayoutEffect(E, B);
  }, pt.useMemo = function(E, B) {
    return Y.H.useMemo(E, B);
  }, pt.useOptimistic = function(E, B) {
    return Y.H.useOptimistic(E, B);
  }, pt.useReducer = function(E, B, Z) {
    return Y.H.useReducer(E, B, Z);
  }, pt.useRef = function(E) {
    return Y.H.useRef(E);
  }, pt.useState = function(E) {
    return Y.H.useState(E);
  }, pt.useSyncExternalStore = function(E, B, Z) {
    return Y.H.useSyncExternalStore(
      E,
      B,
      Z
    );
  }, pt.useTransition = function() {
    return Y.H.useTransition();
  }, pt.version = "19.3.1", pt;
}
var pg;
function sh() {
  return pg || (pg = 1, ff.exports = qE()), ff.exports;
}
var Q = sh();
const q = /* @__PURE__ */ GE(Q);
var hf = { exports: {} }, Il = {}, df = { exports: {} }, mf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yg;
function XE() {
  return yg || (yg = 1, (function(i) {
    function l(V, G) {
      var j = V.length;
      V.push(G);
      t: for (; 0 < j; ) {
        var I = j - 1 >>> 1, tt = V[I];
        if (0 < c(tt, G))
          V[I] = G, V[j] = tt, j = I;
        else break t;
      }
    }
    function o(V) {
      return V.length === 0 ? null : V[0];
    }
    function r(V) {
      if (V.length === 0) return null;
      var G = V[0], j = V.pop();
      if (j !== G) {
        V[0] = j;
        t: for (var I = 0, tt = V.length, ct = tt >>> 1; I < ct; ) {
          var yt = 2 * (I + 1) - 1, ot = V[yt], E = yt + 1, B = V[E];
          if (0 > c(ot, j))
            E < tt && 0 > c(B, ot) ? (V[I] = B, V[E] = j, I = E) : (V[I] = ot, V[yt] = j, I = yt);
          else if (E < tt && 0 > c(B, j))
            V[I] = B, V[E] = j, I = E;
          else break t;
        }
      }
      return G;
    }
    function c(V, G) {
      var j = V.sortIndex - G.sortIndex;
      return j !== 0 ? j : V.id - G.id;
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
    var g = [], S = [], v = 1, y = null, b = 3, O = !1, x = !1, U = !1, z = !1, X = typeof setTimeout == "function" ? setTimeout : null, K = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
    function $(V) {
      for (var G = o(S); G !== null; ) {
        if (G.callback === null) r(S);
        else if (G.startTime <= V)
          r(S), G.sortIndex = G.expirationTime, l(g, G);
        else break;
        G = o(S);
      }
    }
    function et(V) {
      if (U = !1, $(V), !x)
        if (o(g) !== null)
          x = !0, st || (st = !0, dt());
        else {
          var G = o(S);
          G !== null && J(et, G.startTime - V);
        }
    }
    var st = !1, w = -1, Y = 5, F = -1;
    function ut() {
      return z ? !0 : !(i.unstable_now() - F < Y);
    }
    function mt() {
      if (z = !1, st) {
        var V = i.unstable_now();
        F = V;
        var G = !0;
        try {
          t: {
            x = !1, U && (U = !1, K(w), w = -1), O = !0;
            var j = b;
            try {
              e: {
                for ($(V), y = o(g); y !== null && !(y.expirationTime > V && ut()); ) {
                  var I = y.callback;
                  if (typeof I == "function") {
                    y.callback = null, b = y.priorityLevel;
                    var tt = I(
                      y.expirationTime <= V
                    );
                    if (V = i.unstable_now(), typeof tt == "function") {
                      y.callback = tt, $(V), G = !0;
                      break e;
                    }
                    y === o(g) && r(g), $(V);
                  } else r(g);
                  y = o(g);
                }
                if (y !== null) G = !0;
                else {
                  var ct = o(S);
                  ct !== null && J(
                    et,
                    ct.startTime - V
                  ), G = !1;
                }
              }
              break t;
            } finally {
              y = null, b = j, O = !1;
            }
            G = void 0;
          }
        } finally {
          G ? dt() : st = !1;
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
    function J(V, G) {
      w = X(function() {
        V(i.unstable_now());
      }, G);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(V) {
      V.callback = null;
    }, i.unstable_forceFrameRate = function(V) {
      0 > V || 125 < V ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Y = 0 < V ? Math.floor(1e3 / V) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, i.unstable_next = function(V) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var G = 3;
          break;
        default:
          G = b;
      }
      var j = b;
      b = G;
      try {
        return V();
      } finally {
        b = j;
      }
    }, i.unstable_requestPaint = function() {
      z = !0;
    }, i.unstable_runWithPriority = function(V, G) {
      switch (V) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          V = 3;
      }
      var j = b;
      b = V;
      try {
        return G();
      } finally {
        b = j;
      }
    }, i.unstable_scheduleCallback = function(V, G, j) {
      var I = i.unstable_now();
      switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? I + j : I) : j = I, V) {
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
      return tt = j + tt, V = {
        id: v++,
        callback: G,
        priorityLevel: V,
        startTime: j,
        expirationTime: tt,
        sortIndex: -1
      }, j > I ? (V.sortIndex = j, l(S, V), o(g) === null && V === o(S) && (U ? (K(w), w = -1) : U = !0, J(et, j - I))) : (V.sortIndex = tt, l(g, V), x || O || (x = !0, st || (st = !0, dt()))), V;
    }, i.unstable_shouldYield = ut, i.unstable_wrapCallback = function(V) {
      var G = b;
      return function() {
        var j = b;
        b = G;
        try {
          return V.apply(this, arguments);
        } finally {
          b = j;
        }
      };
    };
  })(mf)), mf;
}
var gg;
function ZE() {
  return gg || (gg = 1, df.exports = XE()), df.exports;
}
var pf = { exports: {} }, pe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vg;
function QE() {
  if (vg) return pe;
  vg = 1;
  var i = sh();
  function l(v) {
    var y = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        y += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + v + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function m(v, y, b) {
    var O = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: O == null ? null : O === d ? d : "" + O,
      children: v,
      containerInfo: y,
      implementation: b
    };
  }
  var g = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function S(v, y) {
    if (v === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, pe.browser = function(v) {
    return { $$typeof: h, _reason: v };
  }, pe.createPortal = function(v, y) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(l(299));
    return m(v, y, null, b);
  }, pe.flushSync = function(v) {
    var y = g.T, b = r.p;
    try {
      if (g.T = null, r.p = 2, v) return v();
    } finally {
      g.T = y, r.p = b, r.d.f();
    }
  }, pe.preconnect = function(v, y) {
    typeof v == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, r.d.C(v, y));
  }, pe.prefetchDNS = function(v) {
    typeof v == "string" && r.d.D(v);
  }, pe.preinit = function(v, y) {
    if (typeof v == "string" && y && typeof y.as == "string") {
      var b = y.as, O = S(b, y.crossOrigin), x = typeof y.integrity == "string" ? y.integrity : void 0, U = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      b === "style" ? r.d.S(
        v,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: O,
          integrity: x,
          fetchPriority: U
        }
      ) : b === "script" && r.d.X(v, {
        crossOrigin: O,
        integrity: x,
        fetchPriority: U,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, pe.preinitModule = function(v, y) {
    if (typeof v == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var b = S(
            y.as,
            y.crossOrigin
          );
          r.d.M(v, {
            crossOrigin: b,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0
          });
        }
      } else y == null && r.d.M(v);
  }, pe.preload = function(v, y) {
    if (typeof v == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var b = y.as, O = S(b, y.crossOrigin);
      r.d.L(v, b, {
        crossOrigin: O,
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
  }, pe.preloadModule = function(v, y) {
    if (typeof v == "string")
      if (y) {
        var b = S(y.as, y.crossOrigin);
        r.d.m(v, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: b,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0
        });
      } else r.d.m(v);
  }, pe.requestFormReset = function(v) {
    r.d.r(v);
  }, pe.unstable_batchedUpdates = function(v, y) {
    return v(y);
  }, pe.useFormState = function(v, y, b) {
    return g.H.useFormState(v, y, b);
  }, pe.useFormStatus = function() {
    return g.H.useHostTransitionStatus();
  }, pe.version = "19.3.1", pe;
}
var Sg;
function KE() {
  if (Sg) return pf.exports;
  Sg = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), pf.exports = QE(), pf.exports;
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
var Tg;
function JE() {
  if (Tg) return Il;
  Tg = 1;
  var i = ZE(), l = sh(), o = KE();
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
  function g(t) {
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
          if (u === n) return g(s), t;
          if (u === a) return g(s), e;
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
  function v(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = v(t), e !== null) return e;
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
  function O(t) {
    var e = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return e;
  }
  function x(t) {
    var e = [null, null], n = b(t);
    return n === null || U(
      e,
      t,
      n.child,
      { foundSelf: !1 }
    ), e;
  }
  function U(t, e, n, a) {
    for (; n !== null; ) {
      if (n === e) a.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (a.foundSelf) return t[1] = n, !0;
        t[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && U(
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
  function z(t) {
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
  var w = Object.assign, Y = Symbol.for("react.element"), F = Symbol.for("react.transitional.element"), ut = Symbol.for("react.portal"), mt = Symbol.for("react.fragment"), dt = Symbol.for("react.strict_mode"), Ot = Symbol.for("react.profiler"), St = Symbol.for("react.consumer"), J = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), tt = Symbol.for("react.lazy"), ct = Symbol.for("react.activity"), yt = Symbol.for("react.legacy_hidden"), ot = Symbol.for("react.memo_cache_sentinel"), E = Symbol.for("react.view_transition"), B = Symbol.for("react.recoverable"), Z = Symbol.iterator;
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
      case G:
        return "Suspense";
      case j:
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
        case V:
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
  }, nl = [], ti = -1;
  function fn(t) {
    return { current: t };
  }
  function oe(t) {
    0 > ti || (t.current = nl[ti], nl[ti] = null, ti--);
  }
  function Yt(t, e) {
    ti++, nl[ti] = t.current, t.current = e;
  }
  var hn = fn(null), al = fn(null), Zn = fn(null), ys = fn(null);
  function gs(t, e) {
    switch (Yt(Zn, e), Yt(al, t), Yt(hn, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Ay(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Ay(e), t = My(e, t);
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
    oe(hn), Yt(hn, t);
  }
  function ei() {
    oe(hn), oe(al), oe(Zn);
  }
  function No(t) {
    var e = t.memoizedState;
    e !== null && (qi._currentValue = e.memoizedState, Yt(ys, t)), e = hn.current;
    var n = My(e, t.type);
    e !== n && (Yt(al, t), Yt(hn, n));
  }
  function vs(t) {
    al.current === t && (oe(hn), oe(al)), ys.current === t && (oe(ys), qi._currentValue = Xt);
  }
  var zo, Zh;
  function Qn(t) {
    if (zo === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        zo = e && e[1] || "", Zh = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + zo + t + Zh;
  }
  var _o = !1;
  function Vo(t, e) {
    if (!t || _o) return "";
    _o = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var H = function() {
                throw Error();
              };
              if (Object.defineProperty(H.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(H, []);
                } catch (P) {
                  var M = P;
                }
                Reflect.construct(t, [], H);
              } else {
                try {
                  H.call();
                } catch (P) {
                  M = P;
                }
                H = !1;
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
                  }), H = !0, new t();
                } finally {
                  H && (N !== void 0 ? Object.defineProperty(t.prototype, "props", N) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (P) {
                M = P;
              }
              (H = t()) && typeof H.catch == "function" && H.catch(function() {
              });
            }
          } catch (P) {
            if (P && M && typeof P.stack == "string")
              return [P.stack, M.stack];
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
`), D = p.split(`
`);
        for (s = a = 0; a < T.length && !T[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; s < D.length && !D[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (a === T.length || s === D.length)
          for (a = T.length - 1, s = D.length - 1; 1 <= a && 0 <= s && T[a] !== D[s]; )
            s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (T[a] !== D[s]) {
            if (a !== 1 || s !== 1)
              do
                if (a--, s--, 0 > s || T[a] !== D[s]) {
                  var _ = `
` + T[a].replace(" at new ", " at ");
                  return t.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", t.displayName)), _;
                }
              while (1 <= a && 0 <= s);
            break;
          }
      }
    } finally {
      _o = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? Qn(n) : "";
  }
  function Q1(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Qn(t.type);
      case 16:
        return Qn("Lazy");
      case 13:
        return t.child !== e && e !== null ? Qn("Suspense Fallback") : Qn("Suspense");
      case 19:
        return Qn("SuspenseList");
      case 0:
      case 15:
        return Vo(t.type, !1);
      case 11:
        return Vo(t.type.render, !1);
      case 1:
        return Vo(t.type, !0);
      case 31:
        return Qn("Activity");
      case 30:
        return Qn("ViewTransition");
      default:
        return "";
    }
  }
  function Qh(t) {
    try {
      var e = "", n = null;
      do
        e += Q1(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var wo = Object.prototype.hasOwnProperty, Uo = i.unstable_scheduleCallback, Bo = i.unstable_cancelCallback, K1 = i.unstable_shouldYield, J1 = i.unstable_requestPaint, xe = i.unstable_now, P1 = i.unstable_getCurrentPriorityLevel, Kh = i.unstable_ImmediatePriority, Jh = i.unstable_UserBlockingPriority, Ss = i.unstable_NormalPriority, F1 = i.unstable_LowPriority, Ph = i.unstable_IdlePriority, k1 = i.log, I1 = i.unstable_setDisableYieldValue, il = null, Ne = null;
  function Kn(t) {
    if (typeof k1 == "function" && I1(t), Ne && typeof Ne.setStrictMode == "function")
      try {
        Ne.setStrictMode(il, t);
      } catch {
      }
  }
  var ze = Math.clz32 ? Math.clz32 : tS, W1 = Math.log, $1 = Math.LN2;
  function tS(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (W1(t) / $1 | 0) | 0;
  }
  var Ts = 256, Es = 262144, bs = 4194304;
  function Aa(t) {
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
  function As(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var s = 0, u = t.suspendedLanes, f = t.pingedLanes;
    t = t.warmLanes;
    var p = a & 134217727;
    return p !== 0 ? (a = p & ~u, a !== 0 ? s = Aa(a) : (f &= p, f !== 0 ? s = Aa(f) : n || (n = p & ~t, n !== 0 && (s = Aa(n))))) : (p = a & ~u, p !== 0 ? s = Aa(p) : f !== 0 ? s = Aa(f) : n || (n = a & ~t, n !== 0 && (s = Aa(n)))), s === 0 ? 0 : e !== 0 && e !== s && (e & u) === 0 && (u = s & -s, n = e & -e, u >= n || u === 32 && (n & 4194048) !== 0) ? e : s;
  }
  function ll(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Fh(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var a = 31 - ze(n), s = 1 << a;
        e |= t[a], n &= ~s;
      }
    return e;
  }
  function eS(t, e) {
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
  function kh() {
    var t = bs;
    return bs <<= 1, (bs & 62914560) === 0 && (bs = 4194304), t;
  }
  function Lo(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function sl(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function nS(t, e, n, a, s, u) {
    var f = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var p = t.entanglements, T = t.expirationTimes, D = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var _ = 31 - ze(n), H = 1 << _;
      p[_] = 0, T[_] = -1;
      var M = D[_];
      if (M !== null)
        for (D[_] = null, _ = 0; _ < M.length; _++) {
          var N = M[_];
          N !== null && (N.lane &= -536870913);
        }
      n &= ~H;
    }
    a !== 0 && Ih(t, a, 0), u !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(f & ~e));
  }
  function Ih(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - ze(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 261930;
  }
  function Wh(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var a = 31 - ze(n), s = 1 << a;
      s & e | t[a] & e && (t[a] |= e), n &= ~s;
    }
  }
  function $h(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : Ho(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function Ho(t) {
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
  function jo(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function td() {
    var t = ft.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : ug(t.type));
  }
  function ed(t, e) {
    var n = ft.p;
    try {
      return ft.p = t, e();
    } finally {
      ft.p = n;
    }
  }
  var Dn = Math.random().toString(36).slice(2), re = "__reactFiber$" + Dn, be = "__reactProps$" + Dn, ni = "__reactContainer$" + Dn, nd = "__reactEvents$" + Dn, aS = "__reactListeners$" + Dn, iS = "__reactHandles$" + Dn, ad = "__reactResources$" + Dn, ul = "__reactMarker$" + Dn, Ms = "__reactLoad$" + Dn;
  function Cs(t) {
    delete t[re], delete t[be], delete t[aS], delete t[iS];
  }
  function Ma(t) {
    var e;
    if (e = t[re]) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[ni] || n[re]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = Gy(t); t !== null; ) {
            if (n = t[re]) return n;
            t = Gy(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function ai(t) {
    if (t = t[re] || t[ni]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function ol(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function ii(t) {
    var e = t[ad];
    return e || (e = t[ad] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ie(t) {
    t[ul] = !0;
  }
  function id(t) {
    t[Ms] = void 0;
  }
  var ld = /* @__PURE__ */ new Set(), sd = {};
  function Ca(t, e) {
    li(t, e), li(t + "Capture", e);
  }
  function li(t, e) {
    for (sd[t] = e, t = 0; t < e.length; t++)
      ld.add(e[t]);
  }
  var lS = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ud = {}, od = {};
  function sS(t) {
    return wo.call(od, t) ? !0 : wo.call(ud, t) ? !1 : lS.test(t) ? od[t] = !0 : (ud[t] = !0, !1);
  }
  var Nt = !1;
  function rd() {
    var t = Nt;
    return Nt = !1, t;
  }
  function Ds(t, e, n) {
    if (sS(e))
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
  function Os(t, e, n) {
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
  function On(t, e, n, a) {
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
  function cd(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function uS(t, e, n) {
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
  function Yo(t) {
    if (!t._valueTracker) {
      var e = cd(t) ? "checked" : "value";
      t._valueTracker = uS(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function fd(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), a = "";
    return t && (a = cd(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), !0) : !1;
  }
  var oS = /[\n"\\]/g;
  function Ge(t) {
    return t.replace(
      oS,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Go(t, e, n, a, s, u, f, p) {
    t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), e != null ? f === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + _e(e)) : t.value !== "" + _e(e) && (t.value = "" + _e(e)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), e != null ? f === "number" && t.value == e ? qo(t, _e(t.value)) : qo(t, _e(e)) : n != null ? qo(t, _e(n)) : a != null && t.removeAttribute("value"), s == null && u != null && (t.defaultChecked = !!u), s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"), p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? t.name = "" + _e(p) : t.removeAttribute("name");
  }
  function hd(t, e, n, a, s, u, f, p) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        Yo(t);
        return;
      }
      n = n != null ? "" + _e(n) : "", e = e != null ? "" + _e(e) : n, p || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? s, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = p ? t.checked : !!a, t.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f), Yo(t);
  }
  function qo(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function si(t, e, n, a) {
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
  function dd(t, e, n) {
    if (e != null && (e = "" + _e(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + _e(n) : "";
  }
  function md(t, e, n, a) {
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
    n = _e(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a), Yo(t);
  }
  function ui(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var rS = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function pd(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || rS.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function yd(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "", Nt = !0);
      for (var s in e)
        a = e[s], e.hasOwnProperty(s) && n[s] !== a && (pd(t, s, a), Nt = !0);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && pd(t, u, e[u]);
  }
  function Xo(t) {
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
  var cS = /* @__PURE__ */ new Map([
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
  ]), fS = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Rs(t) {
    return fS.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function dn() {
  }
  var Zo = null;
  function Qo(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var oi = null, ri = null;
  function gd(t) {
    var e = ai(t);
    if (e && (t = e.stateNode)) {
      var n = t[be] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Go(
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
                Go(
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
              a = n[e], a.form === t.form && fd(a);
          }
          break t;
        case "textarea":
          dd(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && si(t, !!n.multiple, e, !1);
      }
    }
  }
  var Ko = !1;
  function vd(t, e, n) {
    if (Ko) return t(e, n);
    Ko = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (Ko = !1, (oi !== null || ri !== null) && (Ru(), oi && (e = oi, t = ri, ri = oi = null, gd(e), t)))
        for (e = 0; e < t.length; e++) gd(t[e]);
    }
  }
  function rl(t, e) {
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
  var Rn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Jo = !1;
  if (Rn)
    try {
      var cl = {};
      Object.defineProperty(cl, "passive", {
        get: function() {
          Jo = !0;
        }
      }), window.addEventListener("test", cl, cl), window.removeEventListener("test", cl, cl);
    } catch {
      Jo = !1;
    }
  var Jn = null, Po = null, xs = null;
  function Sd() {
    if (xs) return xs;
    var t, e = Po, n = e.length, a, s = "value" in Jn ? Jn.value : Jn.textContent, u = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++) ;
    var f = n - t;
    for (a = 1; a <= f && e[n - a] === s[u - a]; a++) ;
    return xs = s.slice(t, 1 < a ? 1 - a : void 0);
  }
  function Ns(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function zs() {
    return !0;
  }
  function Td() {
    return !1;
  }
  function ve(t) {
    function e(n, a, s, u, f) {
      this._reactName = n, this._targetInst = s, this.type = a, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var p in t)
        t.hasOwnProperty(p) && (n = t[p], this[p] = n ? n(u) : u[p]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? zs : Td, this.isPropagationStopped = Td, this;
    }
    return w(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = zs);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = zs);
      },
      persist: function() {
      },
      isPersistent: zs
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
  }, _s = ve(Pn), fl = w({}, Pn, { view: 0, detail: 0 }), hS = ve(fl), Fo, ko, hl, Vs = w({}, fl, {
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
    getModifierState: Wo,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== hl && (hl && t.type === "mousemove" ? (Fo = t.screenX - hl.screenX, ko = t.screenY - hl.screenY) : ko = Fo = 0, hl = t), Fo);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : ko;
    }
  }), Ed = ve(Vs), dS = w({}, Vs, { dataTransfer: 0 }), mS = ve(dS), pS = w({}, fl, { relatedTarget: 0 }), Io = ve(pS), yS = w({}, Pn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), gS = ve(yS), vS = w({}, Pn, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), SS = ve(vS), TS = w({}, Pn, { data: 0 }), bd = ve(TS), ES = {
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
  }, bS = {
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
  }, AS = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function MS(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = AS[t]) ? !!e[t] : !1;
  }
  function Wo() {
    return MS;
  }
  var CS = w({}, fl, {
    key: function(t) {
      if (t.key) {
        var e = ES[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Ns(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? bS[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Wo,
    charCode: function(t) {
      return t.type === "keypress" ? Ns(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Ns(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), DS = ve(CS), OS = w({}, Vs, {
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
  }), Ad = ve(OS), RS = w({}, Pn, { submitter: 0 }), xS = ve(RS), NS = w({}, fl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Wo
  }), zS = ve(NS), _S = w({}, Pn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), VS = ve(_S), wS = w({}, Vs, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), US = ve(wS), BS = w({}, Pn, {
    newState: 0,
    oldState: 0,
    source: 0
  }), LS = ve(BS), HS = [9, 13, 27, 32], $o = Rn && "CompositionEvent" in window, dl = null;
  Rn && "documentMode" in document && (dl = document.documentMode);
  var jS = Rn && "TextEvent" in window && !dl, Md = Rn && (!$o || dl && 8 < dl && 11 >= dl), Cd = " ", Dd = !1;
  function Od(t, e) {
    switch (t) {
      case "keyup":
        return HS.indexOf(e.keyCode) !== -1;
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
  function Rd(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var ci = !1;
  function YS(t, e) {
    switch (t) {
      case "compositionend":
        return Rd(e);
      case "keypress":
        return e.which !== 32 ? null : (Dd = !0, Cd);
      case "textInput":
        return t = e.data, t === Cd && Dd ? null : t;
      default:
        return null;
    }
  }
  function GS(t, e) {
    if (ci)
      return t === "compositionend" || !$o && Od(t, e) ? (t = Sd(), xs = Po = Jn = null, ci = !1, t) : null;
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
        return Md && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var qS = {
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
  function xd(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!qS[t.type] : e === "textarea";
  }
  function Nd(t, e, n, a) {
    oi ? ri ? ri.push(a) : ri = [a] : oi = a, e = wu(e, "onChange"), 0 < e.length && (n = new _s(
      "onChange",
      "change",
      null,
      n,
      a
    ), t.push({ event: n, listeners: e }));
  }
  var ml = null, pl = null;
  function XS(t) {
    gy(t, 0);
  }
  function ws(t) {
    var e = ol(t);
    if (fd(e)) return t;
  }
  function zd(t, e) {
    if (t === "change") return e;
  }
  var _d = !1;
  if (Rn) {
    var tr;
    if (Rn) {
      var er = "oninput" in document;
      if (!er) {
        var Vd = document.createElement("div");
        Vd.setAttribute("oninput", "return;"), er = typeof Vd.oninput == "function";
      }
      tr = er;
    } else tr = !1;
    _d = tr && (!document.documentMode || 9 < document.documentMode);
  }
  function wd() {
    ml && (ml.detachEvent("onpropertychange", Ud), pl = ml = null);
  }
  function Ud(t) {
    if (t.propertyName === "value" && ws(pl)) {
      var e = [];
      Nd(
        e,
        pl,
        t,
        Qo(t)
      ), vd(XS, e);
    }
  }
  function ZS(t, e, n) {
    t === "focusin" ? (wd(), ml = e, pl = n, ml.attachEvent("onpropertychange", Ud)) : t === "focusout" && wd();
  }
  function QS(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ws(pl);
  }
  function KS(t, e) {
    if (t === "click") return ws(e);
  }
  function JS(t, e) {
    if (t === "input" || t === "change")
      return ws(e);
  }
  function PS(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Ve = typeof Object.is == "function" ? Object.is : PS;
  function yl(t, e) {
    if (Ve(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var s = n[a];
      if (!wo.call(e, s) || !Ve(t[s], e[s]))
        return !1;
    }
    return !0;
  }
  function nr(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function Bd(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Ld(t, e) {
    var n = Bd(t);
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
      n = Bd(n);
    }
  }
  function Hd(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Hd(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function jd(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = nr(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = nr(t.document);
    }
    return e;
  }
  function ar(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var FS = Rn && "documentMode" in document && 11 >= document.documentMode, fi = null, ir = null, gl = null, lr = !1;
  function Yd(t, e, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    lr || fi == null || fi !== nr(a) || (a = fi, "selectionStart" in a && ar(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), gl && yl(gl, a) || (gl = a, a = wu(ir, "onSelect"), 0 < a.length && (e = new _s(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: a }), e.target = fi)));
  }
  function Da(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var hi = {
    animationend: Da("Animation", "AnimationEnd"),
    animationiteration: Da("Animation", "AnimationIteration"),
    animationstart: Da("Animation", "AnimationStart"),
    transitionrun: Da("Transition", "TransitionRun"),
    transitionstart: Da("Transition", "TransitionStart"),
    transitioncancel: Da("Transition", "TransitionCancel"),
    transitionend: Da("Transition", "TransitionEnd")
  }, sr = {}, Gd = {};
  Rn && (Gd = document.createElement("div").style, "AnimationEvent" in window || (delete hi.animationend.animation, delete hi.animationiteration.animation, delete hi.animationstart.animation), "TransitionEvent" in window || delete hi.transitionend.transition);
  function Oa(t) {
    if (sr[t]) return sr[t];
    if (!hi[t]) return t;
    var e = hi[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in Gd)
        return sr[t] = e[n];
    return t;
  }
  var qd = Oa("animationend"), Xd = Oa("animationiteration"), Zd = Oa("animationstart"), kS = Oa("transitionrun"), IS = Oa("transitionstart"), WS = Oa("transitioncancel"), Qd = Oa("transitionend"), Kd = /* @__PURE__ */ new Map(), ur = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ur.push("scrollEnd");
  function We(t, e) {
    Kd.set(t, e), Ca(e, [t]);
  }
  var $S = 0;
  function xn(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = nn.identifierPrefix;
    var n = $S++;
    return t = "_" + t + "t_" + n.toString(32) + "_", e.autoName = t;
  }
  function Jd(t) {
    if (t == null || typeof t == "string")
      return t;
    var e = null, n = _i;
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
    return t = Jd(t), e = Jd(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
  }
  var Us = typeof reportError == "function" ? reportError : function(t) {
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
  }, qe = [], di = 0, or = 0;
  function Bs() {
    for (var t = di, e = or = di = 0; e < t; ) {
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
      u !== 0 && Pd(n, s, u);
    }
  }
  function Ls(t, e, n, a) {
    qe[di++] = t, qe[di++] = e, qe[di++] = n, qe[di++] = a, or |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function rr(t, e, n, a) {
    return Ls(t, e, n, a), Hs(t);
  }
  function Ra(t, e) {
    return Ls(t, null, null, e), Hs(t);
  }
  function Pd(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var s = !1, u = t.return; u !== null; )
      u.childLanes |= n, a = u.alternate, a !== null && (a.childLanes |= n), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (s = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, s && e !== null && (s = 31 - ze(n), t = u.hiddenUpdates, a = t[s], a === null ? t[s] = [e] : a.push(e), e.lane = n | 536870912), u) : null;
  }
  function Hs(t) {
    if (50 < jl)
      throw jl = 0, Ou = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var mi = {};
  function tT(t, e, n, a) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ae(t, e, n, a) {
    return new tT(t, e, n, a);
  }
  function cr(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function zn(t, e) {
    var n = t.alternate;
    return n === null ? (n = Ae(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 1206910976, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function Fd(t, e) {
    t.flags &= 1206910978;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function js(t, e, n, a, s, u) {
    var f = 0;
    if (a = t, typeof a == "function") cr(a) && (f = 1);
    else if (typeof a == "string")
      f = RE(
        t,
        n,
        hn.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (a) {
        case ct:
          return t = Ae(31, n, e, s), t.elementType = ct, t.lanes = u, t;
        case mt:
          return xa(n.children, s, u, e);
        case dt:
          f = 8, s |= 24;
          break;
        case Ot:
          return t = Ae(12, n, e, s | 2), t.elementType = Ot, t.lanes = u, t;
        case G:
          return t = Ae(13, n, e, s), t.elementType = G, t.lanes = u, t;
        case j:
          return t = Ae(19, n, e, s), t.elementType = j, t.lanes = u, t;
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
              case V:
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
  function xa(t, e, n, a) {
    return t = Ae(7, t, a, e), t.lanes = n, t;
  }
  function fr(t, e, n) {
    return t = Ae(6, t, null, e), t.lanes = n, t;
  }
  function kd(t) {
    var e = Ae(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function hr(t, e, n) {
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
  var Id = /* @__PURE__ */ new WeakMap();
  function Xe(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Id.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: Qh(e)
      }, Id.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Qh(e)
    };
  }
  var pi = [], yi = 0, Ys = null, vl = 0, Ze = [], Qe = 0, Fn = null, mn = 1, pn = "";
  function _n(t, e) {
    pi[yi++] = vl, pi[yi++] = Ys, Ys = t, vl = e;
  }
  function Wd(t, e, n) {
    Ze[Qe++] = mn, Ze[Qe++] = pn, Ze[Qe++] = Fn, Fn = t;
    var a = mn;
    t = pn;
    var s = 32 - ze(a) - 1;
    a &= ~(1 << s), n += 1;
    var u = 32 - ze(e) + s;
    if (30 < u) {
      var f = s - s % 5;
      u = (a & (1 << f) - 1).toString(32), a >>= f, s -= f, mn = 1 << 32 - ze(e) + s | n << s | a, pn = u + t;
    } else
      mn = 1 << u | n << s | a, pn = t;
  }
  function Gs(t) {
    t.return !== null && (_n(t, 1), Wd(t, 1, 0));
  }
  function dr(t) {
    for (; t === Ys; )
      Ys = pi[--yi], pi[yi] = null, vl = pi[--yi], pi[yi] = null;
    for (; t === Fn; )
      Fn = Ze[--Qe], Ze[Qe] = null, pn = Ze[--Qe], Ze[Qe] = null, mn = Ze[--Qe], Ze[Qe] = null;
  }
  function $d(t, e) {
    Ze[Qe++] = mn, Ze[Qe++] = pn, Ze[Qe++] = Fn, mn = e.id, pn = e.overflow, Fn = t;
  }
  var le = null, Gt = null, Et = !1, kn = null, Ke = !1, mr = Error(r(519));
  function In(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Sl(Xe(e, t)), mr;
  }
  function tm(t) {
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
        for (n = 0; n < Gl.length; n++)
          Mt(Gl[n], e);
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
        Mt("invalid", e), hd(
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
        Mt("invalid", e), md(e, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || Ey(e.textContent, n) ? (a.popover != null && (Mt("beforetoggle", e), Mt("toggle", e)), a.onScroll != null && Mt("scroll", e), a.onScrollEnd != null && Mt("scrollend", e), a.onClick != null && (e.onclick = dn), e = !0) : e = !1, e || In(t, !0);
  }
  function qs(t) {
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
  function gi(t) {
    if (t !== le) return !1;
    if (!Et) return qs(t), Et = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Zc(t.type, t.memoizedProps)), n = !n), n && Gt && In(t), qs(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Gt = Yy(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Gt = Yy(t);
    } else
      e === 27 ? (e = Gt, da(t.type) ? (t = $c, $c = null, Gt = t) : Gt = e) : Gt = le ? Pe(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Na() {
    Gt = le = null, Et = !1;
  }
  function pr() {
    var t = kn;
    return t !== null && (De === null ? De = t : De.push.apply(
      De,
      t
    ), kn = null), t;
  }
  function Sl(t) {
    kn === null ? kn = [t] : kn.push(t);
  }
  var yr = fn(null), za = null, Vn = null;
  function Wn(t, e, n) {
    Yt(yr, e._currentValue), e._currentValue = n;
  }
  function wn(t) {
    t._currentValue = yr.current, oe(yr);
  }
  function Xs(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function gr(t, e, n, a) {
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
              u.lanes |= n, p = u.alternate, p !== null && (p.lanes |= n), Xs(
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
        f.lanes |= n, u = f.alternate, u !== null && (u.lanes |= n), Xs(f, n, t), f = null;
      } else
        s.tag === 13 && s.memoizedState !== null && s.memoizedState.dehydrated === null ? (s.lanes |= n, f = s.alternate, f !== null && (f.lanes |= n), Xs(
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
  function _a(t, e, n, a) {
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
      } else if (s === ys.current) {
        if (f = s.alternate, f === null) throw Error(r(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(qi) : t = [qi]);
      }
      s = s.return;
    }
    return t !== null && gr(
      e,
      t,
      n,
      a
    ), e.flags |= 262144, t !== null;
  }
  function Zs(t) {
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
  function Va(t) {
    za = t, Vn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function ce(t) {
    return em(za, t);
  }
  function Qs(t, e) {
    return za === null && Va(t), em(t, e);
  }
  function em(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, Vn === null) {
      if (t === null) throw Error(r(308));
      Vn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Vn = Vn.next = e;
    return n;
  }
  var eT = typeof AbortController < "u" ? AbortController : function() {
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
  }, nT = i.unstable_scheduleCallback, aT = i.unstable_NormalPriority, kt = {
    $$typeof: J,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function vr() {
    return {
      controller: new eT(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Tl(t) {
    t.refCount--, t.refCount === 0 && nT(aT, function() {
      t.controller.abort();
    });
  }
  function nm(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var n = t.transitionTypes;
      for (n === null && (n = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var a = e[t];
        n.indexOf(a) === -1 && n.push(a);
      }
    }
  }
  var El = null;
  function iT(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var bl = null, Sr = 0, wa = 0, vi = null;
  function lT(t, e) {
    if (bl === null) {
      var n = bl = [];
      Sr = 0, wa = Uc(), vi = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return Sr++, e.then(am, am), e;
  }
  function am() {
    if (--Sr === 0 && (El = null, bl !== null)) {
      vi !== null && (vi.status = "fulfilled");
      var t = bl;
      bl = null, wa = 0, vi = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function sT(t, e) {
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
  var im = it.S;
  it.S = function(t, e) {
    if (kp = xe(), typeof e == "object" && e !== null && typeof e.then == "function" && lT(t, e), El !== null)
      for (var n = Bi; n !== null; )
        nm(n, El), n = n.next;
    if (n = t.types, n !== null) {
      for (var a = Bi; a !== null; )
        nm(a, n), a = a.next;
      if (wa !== 0) {
        a = El, a === null && (a = El = []);
        for (var s = 0; s < n.length; s++) {
          var u = n[s];
          a.indexOf(u) === -1 && a.push(u);
        }
      }
    }
    im !== null && im(t, e);
  };
  var Ua = fn(null);
  function Tr() {
    var t = Ua.current;
    return t !== null ? t : Lt.pooledCache;
  }
  function Ks(t, e) {
    e === null ? Yt(Ua, Ua.current) : Yt(Ua, e.pool);
  }
  function lm() {
    var t = Tr();
    return t === null ? null : { parent: kt._currentValue, pool: t };
  }
  var Si = Error(r(460)), Er = Error(r(474)), Js = Error(r(542)), Ps = { then: function() {
  } };
  function sm(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function um(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(dn, dn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, rm(t), t === void 0 && !("reason" in e) ? Error(r(600)) : t;
      default:
        if (typeof e.status == "string") e.then(dn, dn);
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
            throw t = e.reason, rm(t), t;
        }
        throw La = e, Si;
    }
  }
  function Ba(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (La = n, Si) : n;
    }
  }
  var La = null;
  function om() {
    if (La === null) throw Error(r(459));
    var t = La;
    return La = null, t;
  }
  function rm(t) {
    if (t === Si || t === Js)
      throw Error(r(483));
  }
  var Ti = null, Al = 0;
  function Fs(t) {
    var e = Al;
    return Al += 1, Ti === null && (Ti = []), um(Ti, t, e);
  }
  function $n(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function ks(t, e) {
    throw e.$$typeof === Y ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function cm(t) {
    function e(C, A) {
      if (t) {
        var R = C.deletions;
        R === null ? (C.deletions = [A], C.flags |= 16) : R.push(A);
      }
    }
    function n(C, A) {
      if (!t) return null;
      for (; A !== null; )
        e(C, A), A = A.sibling;
      return null;
    }
    function a(C) {
      for (var A = /* @__PURE__ */ new Map(); C !== null; )
        C.key === null ? A.set(C.index, C) : A.set(C.key, C), C = C.sibling;
      return A;
    }
    function s(C, A) {
      return C = zn(C, A), C.index = 0, C.sibling = null, C;
    }
    function u(C, A, R) {
      return C.index = R, t ? (R = C.alternate, R !== null ? (R = R.index, R < A ? (C.flags |= 2, A) : R) : (C.flags |= 134217730, A)) : (C.flags |= 1048576, A);
    }
    function f(C) {
      return t && C.alternate === null && (C.flags |= 134217730), C;
    }
    function p(C, A, R, L) {
      return A === null || A.tag !== 6 ? (A = fr(R, C.mode, L), A.return = C, A) : (A = s(A, R), A.return = C, A);
    }
    function T(C, A, R, L) {
      var nt = R.type;
      return nt === mt ? (C = _(
        C,
        A,
        R.props.children,
        L,
        R.key
      ), $n(C, R), C) : A !== null && (A.elementType === nt || typeof nt == "object" && nt !== null && nt.$$typeof === tt && Ba(nt) === A.type) ? (A = s(A, R.props), $n(A, R), A.return = C, A) : (A = js(
        R.type,
        R.key,
        R.props,
        null,
        C.mode,
        L
      ), $n(A, R), A.return = C, A);
    }
    function D(C, A, R, L) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== R.containerInfo || A.stateNode.implementation !== R.implementation ? (A = hr(R, C.mode, L), A.return = C, A) : (A = s(A, R.children || []), A.return = C, A);
    }
    function _(C, A, R, L, nt) {
      return A === null || A.tag !== 7 ? (A = xa(
        R,
        C.mode,
        L,
        nt
      ), A.return = C, A) : (A = s(A, R), A.return = C, A);
    }
    function H(C, A, R) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return A = fr(
          "" + A,
          C.mode,
          R
        ), A.return = C, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case F:
            return R = js(
              A.type,
              A.key,
              A.props,
              null,
              C.mode,
              R
            ), $n(R, A), R.return = C, R;
          case ut:
            return A = hr(
              A,
              C.mode,
              R
            ), A.return = C, A;
          case tt:
            return A = Ba(A), H(C, A, R);
        }
        if (Rt(A) || W(A))
          return A = xa(
            A,
            C.mode,
            R,
            null
          ), A.return = C, A;
        if (typeof A.then == "function")
          return H(C, Fs(A), R);
        if (A.$$typeof === J)
          return H(
            C,
            Qs(C, A),
            R
          );
        ks(C, A);
      }
      return null;
    }
    function M(C, A, R, L) {
      var nt = A !== null ? A.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return nt !== null ? null : p(C, A, "" + R, L);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case F:
            return R.key === nt ? T(C, A, R, L) : null;
          case ut:
            return R.key === nt ? D(C, A, R, L) : null;
          case tt:
            return R = Ba(R), M(C, A, R, L);
        }
        if (Rt(R) || W(R))
          return nt !== null ? null : _(C, A, R, L, null);
        if (typeof R.then == "function")
          return M(
            C,
            A,
            Fs(R),
            L
          );
        if (R.$$typeof === J)
          return M(
            C,
            A,
            Qs(C, R),
            L
          );
        ks(C, R);
      }
      return null;
    }
    function N(C, A, R, L, nt) {
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return C = C.get(R) || null, p(A, C, "" + L, nt);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case F:
            return C = C.get(
              L.key === null ? R : L.key
            ) || null, T(A, C, L, nt);
          case ut:
            return C = C.get(
              L.key === null ? R : L.key
            ) || null, D(A, C, L, nt);
          case tt:
            return L = Ba(L), N(
              C,
              A,
              R,
              L,
              nt
            );
        }
        if (Rt(L) || W(L))
          return C = C.get(R) || null, _(A, C, L, nt, null);
        if (typeof L.then == "function")
          return N(
            C,
            A,
            R,
            Fs(L),
            nt
          );
        if (L.$$typeof === J)
          return N(
            C,
            A,
            R,
            Qs(A, L),
            nt
          );
        ks(A, L);
      }
      return null;
    }
    function P(C, A, R, L) {
      for (var nt = null, Dt = null, rt = A, ht = A = 0, $t = null; rt !== null && ht < R.length; ht++) {
        rt.index > ht ? ($t = rt, rt = null) : $t = rt.sibling;
        var xt = M(
          C,
          rt,
          R[ht],
          L
        );
        if (xt === null) {
          rt === null && (rt = $t);
          break;
        }
        t && rt && xt.alternate === null && e(C, rt), A = u(xt, A, ht), Dt === null ? nt = xt : Dt.sibling = xt, Dt = xt, rt = $t;
      }
      if (ht === R.length)
        return n(C, rt), Et && _n(C, ht), nt;
      if (rt === null) {
        for (; ht < R.length; ht++)
          rt = H(C, R[ht], L), rt !== null && (A = u(
            rt,
            A,
            ht
          ), Dt === null ? nt = rt : Dt.sibling = rt, Dt = rt);
        return Et && _n(C, ht), nt;
      }
      for (rt = a(rt); ht < R.length; ht++)
        $t = N(
          rt,
          C,
          ht,
          R[ht],
          L
        ), $t !== null && (t && (xt = $t.alternate, xt !== null && rt.delete(xt.key === null ? ht : xt.key)), A = u(
          $t,
          A,
          ht
        ), Dt === null ? nt = $t : Dt.sibling = $t, Dt = $t);
      return t && rt.forEach(function(va) {
        return e(C, va);
      }), Et && _n(C, ht), nt;
    }
    function lt(C, A, R, L) {
      if (R == null) throw Error(r(151));
      for (var nt = null, Dt = null, rt = A, ht = A = 0, $t = null, xt = R.next(); rt !== null && !xt.done; ht++, xt = R.next()) {
        rt.index > ht ? ($t = rt, rt = null) : $t = rt.sibling;
        var va = M(C, rt, xt.value, L);
        if (va === null) {
          rt === null && (rt = $t);
          break;
        }
        t && rt && va.alternate === null && e(C, rt), A = u(va, A, ht), Dt === null ? nt = va : Dt.sibling = va, Dt = va, rt = $t;
      }
      if (xt.done)
        return n(C, rt), Et && _n(C, ht), nt;
      if (rt === null) {
        for (; !xt.done; ht++, xt = R.next())
          xt = H(C, xt.value, L), xt !== null && (A = u(xt, A, ht), Dt === null ? nt = xt : Dt.sibling = xt, Dt = xt);
        return Et && _n(C, ht), nt;
      }
      for (rt = a(rt); !xt.done; ht++, xt = R.next())
        xt = N(rt, C, ht, xt.value, L), xt !== null && (t && ($t = xt.alternate, $t !== null && rt.delete(
          $t.key === null ? ht : $t.key
        )), A = u(xt, A, ht), Dt === null ? nt = xt : Dt.sibling = xt, Dt = xt);
      return t && rt.forEach(function(YE) {
        return e(C, YE);
      }), Et && _n(C, ht), nt;
    }
    function vt(C, A, R, L) {
      if (typeof R == "object" && R !== null && R.type === mt && R.key === null && R.props.ref === void 0 && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case F:
            t: {
              for (var nt = R.key; A !== null; ) {
                if (A.key === nt) {
                  if (nt = R.type, nt === mt) {
                    if (A.tag === 7) {
                      n(
                        C,
                        A.sibling
                      ), L = s(
                        A,
                        R.props.children
                      ), $n(L, R), L.return = C, C = L;
                      break t;
                    }
                  } else if (A.elementType === nt || typeof nt == "object" && nt !== null && nt.$$typeof === tt && Ba(nt) === A.type) {
                    n(
                      C,
                      A.sibling
                    ), L = s(A, R.props), $n(L, R), L.return = C, C = L;
                    break t;
                  }
                  n(C, A);
                  break;
                } else e(C, A);
                A = A.sibling;
              }
              R.type === mt ? (L = xa(
                R.props.children,
                C.mode,
                L,
                R.key
              ), $n(L, R), L.return = C, C = L) : (L = js(
                R.type,
                R.key,
                R.props,
                null,
                C.mode,
                L
              ), $n(L, R), L.return = C, C = L);
            }
            return f(C);
          case ut:
            t: {
              for (nt = R.key; A !== null; ) {
                if (A.key === nt)
                  if (A.tag === 4 && A.stateNode.containerInfo === R.containerInfo && A.stateNode.implementation === R.implementation) {
                    n(
                      C,
                      A.sibling
                    ), L = s(A, R.children || []), L.return = C, C = L;
                    break t;
                  } else {
                    n(C, A);
                    break;
                  }
                else e(C, A);
                A = A.sibling;
              }
              L = hr(R, C.mode, L), L.return = C, C = L;
            }
            return f(C);
          case tt:
            return R = Ba(R), vt(
              C,
              A,
              R,
              L
            );
        }
        if (Rt(R))
          return P(
            C,
            A,
            R,
            L
          );
        if (W(R)) {
          if (nt = W(R), typeof nt != "function") throw Error(r(150));
          return R = nt.call(R), lt(
            C,
            A,
            R,
            L
          );
        }
        if (typeof R.then == "function")
          return vt(
            C,
            A,
            Fs(R),
            L
          );
        if (R.$$typeof === J)
          return vt(
            C,
            A,
            Qs(C, R),
            L
          );
        ks(C, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R, A !== null && A.tag === 6 ? (n(C, A.sibling), L = s(A, R), L.return = C, C = L) : (n(C, A), L = fr(R, C.mode, L), L.return = C, C = L), f(C)) : n(C, A);
    }
    return function(C, A, R, L) {
      try {
        Al = 0;
        var nt = vt(
          C,
          A,
          R,
          L
        );
        return Ti = null, nt;
      } catch (rt) {
        if (rt === Si || rt === Js) throw rt;
        var Dt = Ae(29, rt, null, C.mode);
        return Dt.lanes = L, Dt.return = C, Dt;
      } finally {
      }
    };
  }
  var Ha = cm(!0), fm = cm(!1), ta = !1;
  function br(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ar(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function ea(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function na(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (zt & 2) !== 0) {
      var s = a.pending;
      return s === null ? e.next = e : (e.next = s.next, s.next = e), a.pending = e, e = Hs(t), Pd(t, null, n), e;
    }
    return Ls(t, a, e, n), Hs(t);
  }
  function Ml(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, Wh(t, n);
    }
  }
  function Mr(t, e) {
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
  var Cr = !1;
  function Cl() {
    if (Cr) {
      var t = vi;
      if (t !== null) throw t;
    }
  }
  function Dl(t, e, n, a) {
    Cr = !1;
    var s = t.updateQueue;
    ta = !1;
    var u = s.firstBaseUpdate, f = s.lastBaseUpdate, p = s.shared.pending;
    if (p !== null) {
      s.shared.pending = null;
      var T = p, D = T.next;
      T.next = null, f === null ? u = D : f.next = D, f = T;
      var _ = t.alternate;
      _ !== null && (_ = _.updateQueue, p = _.lastBaseUpdate, p !== f && (p === null ? _.firstBaseUpdate = D : p.next = D, _.lastBaseUpdate = T));
    }
    if (u !== null) {
      var H = s.baseState;
      f = 0, _ = D = T = null, p = u;
      do {
        var M = p.lane & -536870913, N = M !== p.lane;
        if (N ? (Ct & M) === M : (a & M) === M) {
          M !== 0 && M === wa && (Cr = !0), _ !== null && (_ = _.next = {
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: null,
            next: null
          });
          t: {
            var P = t, lt = p;
            M = e;
            var vt = n;
            switch (lt.tag) {
              case 1:
                if (P = lt.payload, typeof P == "function") {
                  H = P.call(vt, H, M);
                  break t;
                }
                H = P;
                break t;
              case 3:
                P.flags = P.flags & -65537 | 128;
              case 0:
                if (P = lt.payload, M = typeof P == "function" ? P.call(vt, H, M) : P, M == null) break t;
                H = w({}, H, M);
                break t;
              case 2:
                ta = !0;
            }
          }
          M = p.callback, M !== null && (t.flags |= 64, N && (t.flags |= 8192), N = s.callbacks, N === null ? s.callbacks = [M] : N.push(M));
        } else
          N = {
            lane: M,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null
          }, _ === null ? (D = _ = N, T = H) : _ = _.next = N, f |= M;
        if (p = p.next, p === null) {
          if (p = s.shared.pending, p === null)
            break;
          N = p, p = N.next, N.next = null, s.lastBaseUpdate = N, s.shared.pending = null;
        }
      } while (!0);
      _ === null && (T = H), s.baseState = T, s.firstBaseUpdate = D, s.lastBaseUpdate = _, u === null && (s.shared.lanes = 0), ra |= f, t.lanes = f, t.memoizedState = H;
    }
  }
  function hm(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function dm(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        hm(n[t], e);
  }
  var aa = fn(null), Is = fn(0);
  function mm(t, e) {
    t = jn, Yt(Is, t), Yt(aa, e), jn = t | e.baseLanes;
  }
  function Dr() {
    Yt(Is, jn), Yt(aa, aa.current);
  }
  function Or() {
    jn = Is.current, oe(aa), oe(Is);
  }
  var fe = fn(null), ge = null;
  function ia(t) {
    var e = t.alternate;
    Yt(he, he.current & 1), Yt(fe, t), ge === null && (e === null || aa.current !== null || e.memoizedState !== null) && (ge = t);
  }
  function Rr(t) {
    Yt(he, he.current), Yt(fe, t), ge === null && (ge = t);
  }
  function pm(t) {
    t.tag === 22 ? (Yt(he, he.current), Yt(fe, t), ge === null && (ge = t)) : la();
  }
  function la() {
    Yt(he, he.current), Yt(fe, fe.current);
  }
  function we(t) {
    oe(fe), ge === t && (ge = null), oe(he);
  }
  var he = fn(0);
  function Ol(t, e) {
    Yt(fe, fe.current), Yt(he, e);
  }
  function xr(t) {
    oe(he), oe(fe), ge === t && (ge = null);
  }
  function Ws(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Ic(n) || Wc(n)))
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
  var Un = 0, gt = null, Bt = null, It = null, $s = !1, Ei = !1, ja = !1, tu = 0, Rl = 0, bi = null, uT = 0;
  function Jt() {
    throw Error(r(321));
  }
  function Nr(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Ve(t[n], e[n])) return !1;
    return !0;
  }
  function zr(t, e, n, a, s, u) {
    return Un = u, gt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, it.H = t === null || t.memoizedState === null ? Wm : $m, ja = !1, u = n(a, s), ja = !1, Ei && (u = gm(
      e,
      n,
      a,
      s
    )), ym(t), u;
  }
  function ym(t) {
    it.H = uu;
    var e = Bt !== null && Bt.next !== null;
    if (Un = 0, It = Bt = gt = null, $s = !1, Rl = 0, bi = null, e) throw Error(r(300));
    t === null || Wt || (t = t.dependencies, t !== null && Zs(t) && (Wt = !0));
  }
  function gm(t, e, n, a) {
    gt = t;
    var s = 0;
    do {
      if (Ei && (bi = null), Rl = 0, Ei = !1, 25 <= s) throw Error(r(301));
      if (s += 1, It = Bt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      it.H = pT, u = e(n, a);
    } while (Ei);
    return u;
  }
  function oT() {
    var t = it.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? xl(e) : e, t = t.useState()[0], (Bt !== null ? Bt.memoizedState : null) !== t && (gt.flags |= 1024), e;
  }
  function _r() {
    var t = tu !== 0;
    return tu = 0, t;
  }
  function Vr(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function wr(t) {
    if ($s) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      $s = !1;
    }
    Un = 0, It = Bt = gt = null, Ei = !1, Rl = tu = 0, bi = null;
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
  function Ft() {
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
  function eu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function xl(t) {
    var e = Rl;
    return Rl += 1, bi === null && (bi = []), t = um(bi, t, e), e = gt, (It === null ? e.memoizedState : It.next) === null && (e = e.alternate, it.H = e === null || e.memoizedState === null ? Wm : $m), t;
  }
  function nu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return xl(t);
      if (t.$$typeof === B) return;
      if (t.$$typeof === J) return ce(t);
    }
    throw Error(r(438, String(t)));
  }
  function Ur(t) {
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
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = eu(), gt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++)
        n[a] = ot;
    return e.index++, n;
  }
  function Bn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function au(t) {
    var e = Ft();
    return Br(e, Bt, t);
  }
  function Br(t, e, n) {
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
      var p = f = null, T = null, D = e, _ = !1;
      do {
        var H = D.lane & -536870913;
        if (H !== D.lane ? (Ct & H) === H : (Un & H) === H) {
          var M = D.revertLane;
          if (M === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }), H === wa && (_ = !0);
          else if ((Un & M) === M) {
            D = D.next, M === wa && (_ = !0);
            continue;
          } else
            H = {
              lane: 0,
              revertLane: D.revertLane,
              gesture: null,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }, T === null ? (p = T = H, f = u) : T = T.next = H, gt.lanes |= M, ra |= M;
          H = D.action, ja && n(u, H), u = D.hasEagerState ? D.eagerState : n(u, H);
        } else
          M = {
            lane: H,
            revertLane: D.revertLane,
            gesture: D.gesture,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          }, T === null ? (p = T = M, f = u) : T = T.next = M, gt.lanes |= H, ra |= H;
        D = D.next;
      } while (D !== null && D !== e);
      if (T === null ? f = u : T.next = p, !Ve(u, t.memoizedState) && (Wt = !0, _ && (n = vi, n !== null)))
        throw n;
      t.memoizedState = u, t.baseState = f, t.baseQueue = T, a.lastRenderedState = u;
    }
    return s === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Lr(t) {
    var e = Ft(), n = e.queue;
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
  function vm(t, e, n) {
    var a = gt, s = Ft(), u = Et;
    if (u) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var f = !Ve(
      (Bt || s).memoizedState,
      n
    );
    if (f && (s.memoizedState = n, Wt = !0), s = s.queue, Yr(Em.bind(null, a, s, t), [
      t
    ]), t = s.getSnapshot !== e || f || It !== null && (It.memoizedState.tag & 1) !== 0, Ai(
      t ? 9 : 8,
      { destroy: void 0 },
      Tm.bind(null, a, s, n, e),
      null
    ), t) {
      if (a.flags |= 2048, Lt === null) throw Error(r(349));
      u || (Un & 127) !== 0 || Sm(a, e, n);
    }
    return n;
  }
  function Sm(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = gt.updateQueue, e === null ? (e = eu(), gt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function Tm(t, e, n, a) {
    e.value = n, e.getSnapshot = a, bm(e) && Am(t);
  }
  function Em(t, e, n) {
    return n(function() {
      bm(e) && Am(t);
    });
  }
  function bm(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Ve(t, n);
    } catch {
      return !0;
    }
  }
  function Am(t) {
    var e = Ra(t, 2);
    e !== null && Oe(e, t, 2);
  }
  function Hr(t) {
    var e = Se();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), ja) {
        Kn(!0);
        try {
          n();
        } finally {
          Kn(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Bn,
      lastRenderedState: t
    }, e;
  }
  function Mm(t, e, n, a) {
    return t.baseState = n, Br(
      t,
      Bt,
      typeof a == "function" ? a : Bn
    );
  }
  function rT(t, e, n, a, s) {
    if (su(t)) throw Error(r(485));
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
      it.T !== null ? n(!0) : u.isTransition = !1, a(u), n = e.pending, n === null ? (u.next = e.pending = u, Cm(e, u)) : (u.next = n.next, e.pending = n.next = u);
    }
  }
  function Cm(t, e) {
    var n = e.action, a = e.payload, s = t.state;
    if (e.isTransition) {
      var u = it.T, f = {};
      f.types = u !== null ? u.types : null, it.T = f;
      try {
        var p = n(s, a), T = it.S;
        T !== null && T(f, p), Dm(t, e, p);
      } catch (D) {
        jr(t, e, D);
      } finally {
        u !== null && f.types !== null && (u.types = f.types), it.T = u;
      }
    } else
      try {
        u = n(s, a), Dm(t, e, u);
      } catch (D) {
        jr(t, e, D);
      }
  }
  function Dm(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        Om(t, e, a);
      },
      function(a) {
        return jr(t, e, a);
      }
    ) : Om(t, e, n);
  }
  function Om(t, e, n) {
    e.status = "fulfilled", e.value = n, Rm(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, Cm(t, n)));
  }
  function jr(t, e, n) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = n, Rm(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function Rm(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function xm(t, e) {
    return e;
  }
  function Nm(t, e) {
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
                  if (s = Pe(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break e;
                  }
                }
                u = s.data, s = u === "F!" || u === "F" ? s : null;
              }
              if (s) {
                Gt = Pe(
                  s.nextSibling
                ), a = s.data === "F!";
                break t;
              }
            }
            In(a);
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
      lastRenderedReducer: xm,
      lastRenderedState: e
    }, n.queue = a, n = Fm.bind(
      null,
      gt,
      a
    ), a.dispatch = n, a = Hr(!1), u = Qr.bind(
      null,
      gt,
      !1,
      a.queue
    ), a = Se(), s = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = s, n = rT.bind(
      null,
      gt,
      s,
      u,
      n
    ), s.dispatch = n, a.memoizedState = t, [e, n, !1];
  }
  function zm(t) {
    var e = Ft();
    return _m(e, Bt, t);
  }
  function _m(t, e, n) {
    if (e = Br(
      t,
      e,
      xm
    )[0], t = au(Bn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = xl(e);
      } catch (f) {
        throw f === Si ? Js : f;
      }
    else a = e;
    e = Ft();
    var s = e.queue, u = s.dispatch;
    return n !== e.memoizedState && (gt.flags |= 2048, Ai(
      9,
      { destroy: void 0 },
      cT.bind(null, s, n),
      null
    )), [a, u, t];
  }
  function cT(t, e) {
    t.action = e;
  }
  function Vm(t) {
    var e = Ft(), n = Bt;
    if (n !== null)
      return _m(e, n, t);
    Ft(), e = e.memoizedState, n = Ft();
    var a = n.queue.dispatch;
    return n.memoizedState = t, [e, a, !1];
  }
  function Ai(t, e, n, a) {
    return t = { tag: t, create: n, deps: a, inst: e, next: null }, e = gt.updateQueue, e === null && (e = eu(), gt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t;
  }
  function wm() {
    return Ft().memoizedState;
  }
  function iu(t, e, n, a) {
    var s = Se();
    gt.flags |= t, s.memoizedState = Ai(
      1 | e,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function lu(t, e, n, a) {
    var s = Ft();
    a = a === void 0 ? null : a;
    var u = s.memoizedState.inst;
    Bt !== null && a !== null && Nr(a, Bt.memoizedState.deps) ? s.memoizedState = Ai(e, u, n, a) : (gt.flags |= t, s.memoizedState = Ai(
      1 | e,
      u,
      n,
      a
    ));
  }
  function Um(t, e) {
    iu(8390656, 8, t, e);
  }
  function Yr(t, e) {
    lu(2048, 8, t, e);
  }
  function fT(t) {
    gt.flags |= 4;
    var e = gt.updateQueue;
    if (e === null)
      e = eu(), gt.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function Bm(t) {
    var e = Ft().memoizedState;
    return fT({ ref: e, nextImpl: t }), function() {
      if ((zt & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Lm(t, e) {
    return lu(4, 2, t, e);
  }
  function Hm(t, e) {
    return lu(4, 4, t, e);
  }
  function jm(t, e) {
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
  function Ym(t, e, n) {
    n = n != null ? n.concat([t]) : null, lu(4, 4, jm.bind(null, e, t), n);
  }
  function Gr() {
  }
  function Gm(t, e) {
    var n = Ft();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && Nr(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t);
  }
  function qm(t, e) {
    var n = Ft();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && Nr(e, a[1]))
      return a[0];
    if (a = t(), ja) {
      Kn(!0);
      try {
        t();
      } finally {
        Kn(!1);
      }
    }
    return n.memoizedState = [a, e], a;
  }
  function qr(t, e, n) {
    return n === void 0 || (Un & 1073741824) !== 0 && (Ct & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = Wp(), gt.lanes |= t, ra |= t, n);
  }
  function Xm(t, e, n, a) {
    return Ve(n, e) ? n : aa.current !== null ? (t = qr(t, n, a), Ve(t, e) || (Wt = !0), t) : (Un & 106) === 0 || (Un & 1073741824) !== 0 && (Ct & 261930) === 0 ? (Wt = !0, t.memoizedState = n) : (t = Wp(), gt.lanes |= t, ra |= t, e);
  }
  function Zm(t, e, n, a, s) {
    var u = ft.p;
    ft.p = u !== 0 && 8 > u ? u : 8;
    var f = it.T, p = {};
    p.types = f !== null ? f.types : null, it.T = p, Qr(t, !1, e, n);
    try {
      var T = s(), D = it.S;
      if (D !== null && D(p, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var _ = sT(
          T,
          a
        );
        Nl(
          t,
          e,
          _,
          He(t)
        );
      } else
        Nl(
          t,
          e,
          a,
          He(t)
        );
    } catch (H) {
      Nl(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: H },
        He()
      );
    } finally {
      ft.p = u, f !== null && p.types !== null && (f.types = p.types), it.T = f;
    }
  }
  function hT() {
  }
  function Xr(t, e, n, a) {
    if (t.tag !== 5) throw Error(r(476));
    var s = Qm(t).queue;
    Zm(
      t,
      s,
      e,
      Xt,
      n === null ? hT : function() {
        return Km(t), n(a);
      }
    );
  }
  function Qm(t) {
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
        lastRenderedReducer: Bn,
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
        lastRenderedReducer: Bn,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Km(t) {
    var e = Qm(t);
    e.next === null && (e = t.alternate.memoizedState), Nl(
      t,
      e.next.queue,
      {},
      He()
    );
  }
  function Zr() {
    return ce(qi);
  }
  function Jm() {
    return Ft().memoizedState;
  }
  function Pm() {
    return Ft().memoizedState;
  }
  function dT(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = He();
          t = ea(n);
          var a = na(e, t, n);
          a !== null && (Oe(a, e, n), Ml(a, e, n)), e = { cache: vr() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function mT(t, e, n) {
    var a = He();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, su(t) ? km(e, n) : (n = rr(t, e, n, a), n !== null && (Oe(n, t, a), Im(n, e, a)));
  }
  function Fm(t, e, n) {
    var a = He();
    Nl(t, e, n, a);
  }
  function Nl(t, e, n, a) {
    var s = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (su(t)) km(e, s);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var f = e.lastRenderedState, p = u(f, n);
          if (s.hasEagerState = !0, s.eagerState = p, Ve(p, f))
            return Ls(t, e, s, 0), Lt === null && Bs(), !1;
        } catch {
        } finally {
        }
      if (n = rr(t, e, s, a), n !== null)
        return Oe(n, t, a), Im(n, e, a), !0;
    }
    return !1;
  }
  function Qr(t, e, n, a) {
    if (a = {
      lane: 2,
      revertLane: Uc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, su(t)) {
      if (e) throw Error(r(479));
    } else
      e = rr(
        t,
        n,
        a,
        2
      ), e !== null && Oe(e, t, 2);
  }
  function su(t) {
    var e = t.alternate;
    return t === gt || e !== null && e === gt;
  }
  function km(t, e) {
    Ei = $s = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function Im(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, Wh(t, n);
    }
  }
  var uu = {
    readContext: ce,
    use: nu,
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
  }, Wm = {
    readContext: ce,
    use: nu,
    useCallback: function(t, e) {
      return Se().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: ce,
    useEffect: Um,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, iu(
        4194308,
        4,
        jm.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return iu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      iu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = Se();
      e = e === void 0 ? null : e;
      var a = t();
      if (ja) {
        Kn(!0);
        try {
          t();
        } finally {
          Kn(!1);
        }
      }
      return n.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, n) {
      var a = Se();
      if (n !== void 0) {
        var s = n(e);
        if (ja) {
          Kn(!0);
          try {
            n(e);
          } finally {
            Kn(!1);
          }
        }
      } else s = e;
      return a.memoizedState = a.baseState = s, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: s
      }, a.queue = t, t = t.dispatch = mT.bind(
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
      t = Hr(t);
      var e = t.queue, n = Fm.bind(null, gt, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: Gr,
    useDeferredValue: function(t, e) {
      var n = Se();
      return qr(n, t, e);
    },
    useTransition: function() {
      var t = Hr(!1);
      return t = Zm.bind(
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
        (Ct & 127) !== 0 || Sm(a, e, n);
      }
      s.memoizedState = n;
      var u = { value: n, getSnapshot: e };
      return s.queue = u, Um(Em.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, Ai(
        9,
        { destroy: void 0 },
        Tm.bind(
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
        var n = pn, a = mn;
        n = (a & ~(1 << 32 - ze(a) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = tu++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = uT++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Zr,
    useFormState: Nm,
    useActionState: Nm,
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
      return e.queue = n, e = Qr.bind(
        null,
        gt,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: Ur,
    useCacheRefresh: function() {
      return Se().memoizedState = dT.bind(
        null,
        gt
      );
    },
    useEffectEvent: function(t) {
      var e = Se(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((zt & 2) !== 0)
          throw Error(r(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, $m = {
    readContext: ce,
    use: nu,
    useCallback: Gm,
    useContext: ce,
    useEffect: Yr,
    useImperativeHandle: Ym,
    useInsertionEffect: Lm,
    useLayoutEffect: Hm,
    useMemo: qm,
    useReducer: au,
    useRef: wm,
    useState: function() {
      return au(Bn);
    },
    useDebugValue: Gr,
    useDeferredValue: function(t, e) {
      var n = Ft();
      return Xm(
        n,
        Bt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = au(Bn)[0], e = Ft().memoizedState;
      return [
        typeof t == "boolean" ? t : xl(t),
        e
      ];
    },
    useSyncExternalStore: vm,
    useId: Jm,
    useHostTransitionStatus: Zr,
    useFormState: zm,
    useActionState: zm,
    useOptimistic: function(t, e) {
      var n = Ft();
      return Mm(n, Bt, t, e);
    },
    useMemoCache: Ur,
    useCacheRefresh: Pm,
    useEffectEvent: Bm
  }, pT = {
    readContext: ce,
    use: nu,
    useCallback: Gm,
    useContext: ce,
    useEffect: Yr,
    useImperativeHandle: Ym,
    useInsertionEffect: Lm,
    useLayoutEffect: Hm,
    useMemo: qm,
    useReducer: Lr,
    useRef: wm,
    useState: function() {
      return Lr(Bn);
    },
    useDebugValue: Gr,
    useDeferredValue: function(t, e) {
      var n = Ft();
      return Bt === null ? qr(n, t, e) : Xm(
        n,
        Bt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Lr(Bn)[0], e = Ft().memoizedState;
      return [
        typeof t == "boolean" ? t : xl(t),
        e
      ];
    },
    useSyncExternalStore: vm,
    useId: Jm,
    useHostTransitionStatus: Zr,
    useFormState: Vm,
    useActionState: Vm,
    useOptimistic: function(t, e) {
      var n = Ft();
      return Bt !== null ? Mm(n, Bt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: Ur,
    useCacheRefresh: Pm,
    useEffectEvent: Bm
  };
  function Kr(t, e, n, a) {
    e = t.memoizedState, n = n(a, e), n = n == null ? e : w({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Jr = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var a = He(), s = ea(a);
      s.payload = e, n != null && (s.callback = n), e = na(t, s, a), e !== null && (Oe(e, t, a), Ml(e, t, a));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var a = He(), s = ea(a);
      s.tag = 1, s.payload = e, n != null && (s.callback = n), e = na(t, s, a), e !== null && (Oe(e, t, a), Ml(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = He(), a = ea(n);
      a.tag = 2, e != null && (a.callback = e), e = na(t, a, n), e !== null && (Oe(e, t, n), Ml(e, t, n));
    }
  };
  function tp(t, e, n, a, s, u, f) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, f) : e.prototype && e.prototype.isPureReactComponent ? !yl(n, a) || !yl(s, u) : !0;
  }
  function ep(t, e, n, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && Jr.enqueueReplaceState(e, e.state, null);
  }
  function Ya(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e)
        a !== "ref" && (n[a] = e[a]);
    }
    if (t = t.defaultProps) {
      n === e && (n = w({}, n));
      for (var s in t)
        n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  function np(t) {
    Us(t);
  }
  function ap(t) {
    console.error(t);
  }
  function ip(t) {
    Us(t);
  }
  function ou(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function lp(t, e, n) {
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
  function Pr(t, e, n) {
    return n = ea(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      ou(t, e);
    }, n;
  }
  function sp(t) {
    return t = ea(t), t.tag = 3, t;
  }
  function up(t, e, n, a) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = a.value;
      t.payload = function() {
        return s(u);
      }, t.callback = function() {
        lp(e, n, a);
      };
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
      lp(e, n, a), typeof s != "function" && (ca === null ? ca = /* @__PURE__ */ new Set([this]) : ca.add(this));
      var p = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: p !== null ? p : ""
      });
    });
  }
  function yT(t, e, n, a, s) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = n.alternate, e !== null && _a(
        e,
        n,
        s,
        !0
      ), n = fe.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return ge === null ? xu() : n.alternate === null && Pt === 0 && (Pt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = s, a === Ps ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), _c(t, a, s)), !1;
          case 22:
            return n.flags |= 65536, a === Ps ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), _c(t, a, s)), !1;
        }
        throw Error(r(435, n.tag));
      }
      return _c(t, a, s), xu(), !1;
    }
    if (Et)
      return e = fe.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = s, a !== mr && (t = Error(r(422), { cause: a }), Sl(Xe(t, n)))) : (a !== mr && (e = Error(r(423), {
        cause: a
      }), Sl(
        Xe(e, n)
      )), t = t.current.alternate, t.flags |= 65536, s &= -s, t.lanes |= s, a = Xe(a, n), s = Pr(
        t.stateNode,
        a,
        s
      ), Mr(t, s), Pt !== 4 && (Pt = 2)), !1;
    var u = Error(r(520), { cause: a });
    if (u = Xe(u, n), Hl === null ? Hl = [u] : Hl.push(u), Pt !== 4 && (Pt = 2), e === null) return !0;
    a = Xe(a, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = s & -s, n.lanes |= t, t = Pr(n.stateNode, a, t), Mr(n, t), !1;
        case 1:
          if (e = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (ca === null || !ca.has(u))))
            return n.flags |= 65536, s &= -s, n.lanes |= s, s = sp(s), up(
              s,
              t,
              n,
              a
            ), Mr(n, s), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Fr = Error(r(461)), Wt = !1;
  function te(t, e, n, a) {
    e.child = t === null ? fm(e, null, n, a) : Ha(
      e,
      t.child,
      n,
      a
    );
  }
  function op(t, e, n, a, s) {
    n = n.render;
    var u = e.ref;
    if ("ref" in a) {
      var f = {};
      for (var p in a)
        p !== "ref" && (f[p] = a[p]);
    } else f = a;
    return Va(e), a = zr(
      t,
      e,
      n,
      f,
      u,
      s
    ), p = _r(), t !== null && !Wt ? (Vr(t, e, s), Ln(t, e, s)) : (Et && p && Gs(e), e.flags |= 1, te(t, e, a, s), e.child);
  }
  function rp(t, e, n, a, s) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" && !cr(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = u, cp(
        t,
        e,
        u,
        a,
        s
      )) : (t = js(
        n.type,
        null,
        a,
        e,
        e.mode,
        s
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !ac(t, s)) {
      var f = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : yl, n(f, a) && t.ref === e.ref)
        return Ln(t, e, s);
    }
    return e.flags |= 1, t = zn(u, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function cp(t, e, n, a, s) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (yl(u, a) && t.ref === e.ref)
        if (Wt = !1, e.pendingProps = a = u, ac(t, s))
          (t.flags & 131072) !== 0 && (Wt = !0);
        else
          return e.lanes = t.lanes, Ln(t, e, s);
    }
    return kr(
      t,
      e,
      n,
      a,
      s
    );
  }
  function fp(t, e, n, a) {
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
        return hp(
          t,
          e,
          u,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Ks(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? mm(e, u) : Dr(), pm(e);
      else
        return a = e.lanes = 536870912, hp(
          t,
          e,
          u !== null ? u.baseLanes | n : n,
          n,
          a
        );
    } else
      u !== null ? (Ks(e, u.cachePool), mm(e, u), la(), e.memoizedState = null) : (t !== null && Ks(e, null), Dr(), la());
    return te(t, e, s, n), e.child;
  }
  function zl(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function hp(t, e, n, a, s) {
    var u = Tr();
    return u = u === null ? null : { parent: kt._currentValue, pool: u }, e.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, t !== null && Ks(e, null), Dr(), pm(e), t !== null && _a(t, e, a, !0), e.childLanes = s, null;
  }
  function ru(t, e) {
    return e = cu(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function dp(t, e, n) {
    return Ha(e, t.child, null, n), t = ru(e, e.pendingProps), t.flags |= 2, we(e), e.memoizedState = null, t;
  }
  function gT(t, e, n) {
    var a = e.pendingProps, s = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (Et) {
        if (a.mode === "hidden")
          return t = ru(e, a), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, zl(null, t);
        if (Rr(e), (t = Gt) ? (t = jy(
          t,
          Ke
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Fn !== null ? { id: mn, overflow: pn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = kd(t), n.return = e, e.child = n, le = e, Gt = null)) : t = null, t === null) throw In(e);
        return e.lanes = 536870912, null;
      }
      return ru(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var f = u.dehydrated;
      if (Rr(e), s)
        if (e.flags & 256)
          e.flags &= -257, e = dp(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (Wt || _a(t, e, n, !1), s = (n & t.childLanes) !== 0, Wt || s) {
        if (aa.current === null) {
          if (a = Lt, a !== null && (f = $h(a, n), f !== 0 && f !== u.retryLane))
            throw u.retryLane = f, Ra(t, f), Oe(a, t, f), Fr;
          xu();
        }
        e = dp(
          t,
          e,
          n
        );
      } else
        t = u.treeContext, Gt = Pe(f.nextSibling), le = e, Et = !0, kn = null, Ke = !1, t !== null && $d(e, t), e = ru(e, a), e.flags |= 134221824;
      return e;
    }
    return t = zn(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Mi(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(r(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function kr(t, e, n, a, s) {
    return Va(e), n = zr(
      t,
      e,
      n,
      a,
      void 0,
      s
    ), a = _r(), t !== null && !Wt ? (Vr(t, e, s), Ln(t, e, s)) : (Et && a && Gs(e), e.flags |= 1, te(t, e, n, s), e.child);
  }
  function mp(t, e, n, a, s, u) {
    return Va(e), e.updateQueue = null, n = gm(
      e,
      a,
      n,
      s
    ), ym(t), a = _r(), t !== null && !Wt ? (Vr(t, e, u), Ln(t, e, u)) : (Et && a && Gs(e), e.flags |= 1, te(t, e, n, u), e.child);
  }
  function pp(t, e, n, a, s) {
    if (Va(e), e.stateNode === null) {
      var u = mi, f = n.contextType;
      typeof f == "object" && f !== null && (u = ce(f)), u = new n(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Jr, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, br(e), f = n.contextType, u.context = typeof f == "object" && f !== null ? ce(f) : mi, u.state = e.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (Kr(
        e,
        n,
        f,
        a
      ), u.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (f = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), f !== u.state && Jr.enqueueReplaceState(u, u.state, null), Dl(e, a, u, s), Cl(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = e.stateNode;
      var p = e.memoizedProps, T = Ya(n, p);
      u.props = T;
      var D = u.context, _ = n.contextType;
      f = mi, typeof _ == "object" && _ !== null && (f = ce(_));
      var H = n.getDerivedStateFromProps;
      _ = typeof H == "function" || typeof u.getSnapshotBeforeUpdate == "function", p = e.pendingProps !== p, _ || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (p || D !== f) && ep(
        e,
        u,
        a,
        f
      ), ta = !1;
      var M = e.memoizedState;
      u.state = M, Dl(e, a, u, s), Cl(), D = e.memoizedState, p || M !== D || ta ? (typeof H == "function" && (Kr(
        e,
        n,
        H,
        a
      ), D = e.memoizedState), (T = ta || tp(
        e,
        n,
        T,
        a,
        M,
        D,
        f
      )) ? (_ || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = D), u.props = a, u.state = D, u.context = f, a = T) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      u = e.stateNode, Ar(t, e), f = e.memoizedProps, _ = Ya(n, f), u.props = _, H = e.pendingProps, M = u.context, D = n.contextType, T = mi, typeof D == "object" && D !== null && (T = ce(D)), p = n.getDerivedStateFromProps, (D = typeof p == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== H || M !== T) && ep(
        e,
        u,
        a,
        T
      ), ta = !1, M = e.memoizedState, u.state = M, Dl(e, a, u, s), Cl();
      var N = e.memoizedState;
      f !== H || M !== N || ta || t !== null && t.dependencies !== null && Zs(t.dependencies) ? (typeof p == "function" && (Kr(
        e,
        n,
        p,
        a
      ), N = e.memoizedState), (_ = ta || tp(
        e,
        n,
        _,
        a,
        M,
        N,
        T
      ) || t !== null && t.dependencies !== null && Zs(t.dependencies)) ? (D || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, N, T), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        N,
        T
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === t.memoizedProps && M === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && M === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = N), u.props = a, u.state = N, u.context = T, a = _) : (typeof u.componentDidUpdate != "function" || f === t.memoizedProps && M === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && M === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return u = a, Mi(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = Ha(
      e,
      t.child,
      null,
      s
    ), e.child = Ha(
      e,
      null,
      n,
      s
    )) : te(t, e, n, s), e.memoizedState = u.state, t = e.child) : t = Ln(
      t,
      e,
      s
    ), t;
  }
  function yp(t, e, n, a) {
    return Na(), e.flags |= 256, te(t, e, n, a), e.child;
  }
  var Ir = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Wr(t) {
    return { baseLanes: t, cachePool: lm() };
  }
  function $r(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Le), t;
  }
  function gp(t, e, n) {
    var a = e.pendingProps, s = !1, u = (e.flags & 128) !== 0, f;
    if ((f = u) || (f = t !== null && t.memoizedState === null ? !1 : (he.current & 2) !== 0), f && (s = !0, e.flags &= -129), f = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Et) {
        if (s ? ia(e) : la(), (t = Gt) ? (t = jy(
          t,
          Ke
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Fn !== null ? { id: mn, overflow: pn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = kd(t), n.return = e, e.child = n, le = e, Gt = null)) : t = null, t === null) throw In(e);
        return Wc(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return u = a.children, a = a.fallback, s ? (la(), s = e.mode, u = cu(
        { mode: "hidden", children: u },
        s
      ), a = xa(
        a,
        s,
        n,
        null
      ), u.return = e, a.return = e, u.sibling = a, e.child = u, a = e.child, a.memoizedState = Wr(n), a.childLanes = $r(
        t,
        f,
        n
      ), e.memoizedState = Ir, zl(null, a)) : (ia(e), tc(e, u));
    }
    var p = t.memoizedState;
    if (p !== null) {
      var T = p.dehydrated;
      if (T !== null)
        return vT(
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
    return s ? (la(), s = a.fallback, u = e.mode, p = t.child, T = p.sibling, a = zn(p, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = p.subtreeFlags & 1206910976, T !== null ? s = zn(T, s) : (s = xa(
      s,
      u,
      n,
      null
    ), s.flags |= 2), s.return = e, a.return = e, a.sibling = s, e.child = a, zl(null, a), a = e.child, s = t.child.memoizedState, s === null ? s = Wr(n) : (u = s.cachePool, u !== null ? (p = kt._currentValue, u = u.parent !== p ? { parent: p, pool: p } : u) : u = lm(), s = {
      baseLanes: s.baseLanes | n,
      cachePool: u
    }), a.memoizedState = s, a.childLanes = $r(
      t,
      f,
      n
    ), e.memoizedState = Ir, zl(t.child, a)) : (ia(e), n = t.child, t = n.sibling, n = zn(n, {
      mode: "visible",
      children: a.children
    }), n.return = e, n.sibling = null, t !== null && (f = e.deletions, f === null ? (e.deletions = [t], e.flags |= 16) : f.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function tc(t, e) {
    return e = cu(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function cu(t, e) {
    return t = Ae(22, t, null, e), t.lanes = 0, t;
  }
  function fu(t, e, n) {
    return Ha(e, t.child, null, n), t = tc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function vT(t, e, n, a, s, u, f, p) {
    if (n)
      return e.flags & 256 ? (ia(e), e.flags &= -257, fu(
        t,
        e,
        p
      )) : e.memoizedState !== null ? (la(), e.child = t.child, e.flags |= 128, null) : (la(), u = s.fallback, f = e.mode, s = cu(
        { mode: "visible", children: s.children },
        f
      ), u = xa(
        u,
        f,
        p,
        null
      ), u.flags |= 2, s.return = e, u.return = e, s.sibling = u, e.child = s, Ha(e, t.child, null, p), s = e.child, s.memoizedState = Wr(p), s.childLanes = $r(
        t,
        a,
        p
      ), e.memoizedState = Ir, zl(null, s));
    if (ia(e), Wc(u)) {
      if (a = u.nextSibling && u.nextSibling.dataset, a) var T = a.dgst;
      return a = T, a !== "" && (s = Error(r(419)), s.stack = "", s.digest = a, Sl({ value: s, source: null, stack: null })), fu(
        t,
        e,
        p
      );
    }
    if (Wt || _a(t, e, p, !1), a = (p & t.childLanes) !== 0, Wt || a) {
      if (aa.current !== null)
        return fu(
          t,
          e,
          p
        );
      if (a = Lt, a !== null && (s = $h(
        a,
        p
      ), s !== 0 && s !== f.retryLane))
        throw f.retryLane = s, Ra(t, s), Oe(a, t, s), Fr;
      return Ic(u) || xu(), fu(
        t,
        e,
        p
      );
    }
    return Ic(u) ? (e.flags |= 192, e.child = t.child, null) : (t = f.treeContext, Gt = Pe(u.nextSibling), le = e, Et = !0, kn = null, Ke = !1, t !== null && $d(e, t), e = tc(
      e,
      s.children
    ), e.flags |= 134221824, e);
  }
  function vp(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Xs(t.return, e, n);
  }
  function Sp(t) {
    for (var e = null; t !== null; ) {
      var n = t.alternate;
      n !== null && Ws(n) === null && (e = t), t = t.sibling;
    }
    return e;
  }
  function hu(t, e, n, a, s, u) {
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
  function ec(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var n = e.sibling;
      e.sibling = t.child, t.child = e, e = n;
    }
  }
  function nc(t, e, n) {
    var a = e.pendingProps, s = a.revealOrder, u = a.tail;
    a = a.children;
    var f = he.current;
    if (e.flags & 128)
      return Ol(e, f), null;
    var p = (f & 2) !== 0;
    if (p ? (f = f & 1 | 2, e.flags |= 128) : f &= 1, Ol(e, f), s === "backwards" && t !== null ? (ec(t), te(t, e, a, n), ec(t)) : te(t, e, a, n), a = Et ? vl : 0, !p && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && vp(t, n, e);
        else if (t.tag === 19)
          vp(t, n, e);
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
        n = Sp(e.child), n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null, ec(e)), hu(
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
          if (t = s.alternate, t !== null && Ws(t) === null) {
            e.child = s;
            break;
          }
          t = s.sibling, s.sibling = n, n = s, s = t;
        }
        hu(
          e,
          !0,
          n,
          null,
          u,
          a
        );
        break;
      case "together":
        hu(
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
        n = Sp(e.child), n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null), hu(
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
  function Tp(t, e, n) {
    var a = e.pendingProps;
    return Wn(e, e.type, a.value), te(t, e, a.children, n), e.child;
  }
  function Ln(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), ra |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (_a(
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
      for (t = e.child, n = zn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = zn(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function ac(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Zs(t)));
  }
  function ST(t, e, n) {
    switch (e.tag) {
      case 3:
        gs(e, e.stateNode.containerInfo), Wn(e, kt, t.memoizedState.cache), Na();
        break;
      case 27:
      case 5:
        No(e);
        break;
      case 4:
        gs(e, e.stateNode.containerInfo);
        break;
      case 10:
        Wn(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Rr(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return ia(e), e.flags |= 128, null;
          a = _a(
            t,
            e,
            n,
            !1
          );
          var s = e.child.childLanes;
          return a || (n & s) !== 0 ? gp(t, e, n) : (ia(e), t = Ln(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        }
        ia(e);
        break;
      case 19:
        if (e.flags & 128)
          return nc(
            t,
            e,
            n
          );
        if (s = (t.flags & 128) !== 0, a = (n & e.childLanes) !== 0, a || (_a(
          t,
          e,
          n,
          !1
        ), a = (n & e.childLanes) !== 0), s) {
          if (a)
            return nc(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (s = e.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Ol(e, he.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, fp(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        Wn(e, kt, t.memoizedState.cache);
    }
    return Ln(t, e, n);
  }
  function Ep(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Wt = !0;
      else {
        if (!ac(t, n) && (e.flags & 128) === 0)
          return Wt = !1, ST(
            t,
            e,
            n
          );
        Wt = (t.flags & 131072) !== 0;
      }
    else
      Wt = !1, Et && (e.flags & 1048576) !== 0 && Wd(e, vl, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = Ba(e.elementType), e.type = t, typeof t == "function")
            cr(t) ? (a = Ya(t, a), e.tag = 1, e = pp(
              null,
              e,
              t,
              a,
              n
            )) : (e.tag = 0, e = kr(
              null,
              e,
              t,
              a,
              n
            ));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === V) {
                e.tag = 11, e = op(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (s === I) {
                e.tag = 14, e = rp(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (s === J) {
                e.tag = 10, e.type = t, e = Tp(
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
        return kr(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return a = e.type, s = Ya(
          a,
          e.pendingProps
        ), pp(
          t,
          e,
          a,
          s,
          n
        );
      case 3:
        t: {
          if (gs(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          s = u.element, Ar(t, e), Dl(e, a, null, n);
          var f = e.memoizedState;
          if (a = f.cache, Wn(e, kt, a), a !== u.cache && gr(
            e,
            [kt],
            n,
            !0
          ), Cl(), a = f.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = yp(
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
              ), Sl(s), e = yp(
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
              for (Gt = Pe(t.firstChild), le = e, Et = !0, kn = null, Ke = !0, n = fm(
                e,
                null,
                a,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
            }
          else {
            if (Na(), a === s) {
              e = Ln(
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
        return Mi(t, e), t === null ? (n = Ky(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : Et || (e.stateNode = Cy(
          e.type,
          e.pendingProps,
          Zn.current,
          e
        )) : e.memoizedState = Ky(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return No(e), t === null && Et && (a = e.stateNode = qy(
          e.type,
          e.pendingProps,
          Zn.current
        ), le = e, Ke = !0, s = Gt, da(e.type) ? ($c = s, Gt = Pe(a.firstChild)) : Gt = s), te(
          t,
          e,
          e.pendingProps.children,
          n
        ), Mi(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Et && ((s = a = Gt) && (a = dE(
          a,
          e.type,
          e.pendingProps,
          Ke
        ), a !== null ? (e.stateNode = a, le = e, Gt = Pe(a.firstChild), Ke = !1, s = !0) : s = !1), s || In(e)), No(e), s = e.type, u = e.pendingProps, f = t !== null ? t.memoizedProps : null, a = u.children, Zc(s, u) ? a = null : f !== null && Zc(s, f) && (e.flags |= 32), e.memoizedState !== null && (s = zr(
          t,
          e,
          oT,
          null,
          null,
          n
        ), qi._currentValue = s), Mi(t, e), te(t, e, a, n), e.child;
      case 6:
        return t === null && Et && ((t = n = Gt) && (n = mE(
          n,
          e.pendingProps,
          Ke
        ), n !== null ? (e.stateNode = n, le = e, Gt = null, t = !0) : t = !1), t || In(e)), null;
      case 13:
        return gp(t, e, n);
      case 4:
        return gs(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = Ha(
          e,
          null,
          a,
          n
        ) : te(t, e, a, n), e.child;
      case 11:
        return op(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return a = e.pendingProps, Mi(t, e), te(t, e, a, n), e.child;
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
        return Tp(t, e, n);
      case 9:
        return s = e.type._context, a = e.pendingProps.children, Va(e), s = ce(s), a = a(s), e.flags |= 1, te(t, e, a, n), e.child;
      case 14:
        return rp(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return cp(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return nc(t, e, n);
      case 31:
        return gT(t, e, n);
      case 22:
        return fp(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return Va(e), a = ce(kt), t === null ? (s = Tr(), s === null && (s = Lt, u = vr(), s.pooledCache = u, u.refCount++, u !== null && (s.pooledCacheLanes |= n), s = u), e.memoizedState = { parent: a, cache: s }, br(e), Wn(e, kt, s)) : ((t.lanes & n) !== 0 && (Ar(t, e), Dl(e, null, null, n), Cl()), s = t.memoizedState, u = e.memoizedState, s.parent !== a ? (s = { parent: a, cache: a }, e.memoizedState = s, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s), Wn(e, kt, a)) : (a = u.cache, Wn(e, kt, a), a !== s.cache && gr(
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
        }), a = e.pendingProps, a.name != null && a.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : Et && Gs(e), t !== null && t.memoizedProps.name !== a.name ? e.flags |= 4194816 : Mi(t, e), te(t, e, a.children, n), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function Hn(t) {
    t.flags |= 4;
  }
  function ic(t, e, n, a, s) {
    var u;
    if ((u = (t.mode & 32) !== 0) && (u = n === null ? ky(e, a) : ky(e, a) && (a.src !== n.src || a.srcSet !== n.srcSet)), u) {
      if (t.flags |= 16777216, (s & 335544128) === s)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (ny()) t.flags |= 8192;
        else
          throw La = Ps, Er;
    } else t.flags &= -16777217;
  }
  function bp(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Iy(e))
      if (ny()) t.flags |= 8192;
      else
        throw La = Ps, Er;
  }
  function du(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? kh() : 536870912, t.lanes |= e, xi |= e);
  }
  function _l(t, e) {
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
  function TT(t, e, n) {
    var a = e.pendingProps;
    switch (dr(e), e.tag) {
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
        return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), wn(kt), ei(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (gi(e) ? Hn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, pr())), qt(e), null;
      case 26:
        var s = e.type, u = e.memoizedState;
        return t === null ? (Hn(e), u !== null ? (qt(e), bp(e, u)) : (qt(e), ic(
          e,
          s,
          null,
          a,
          n
        ))) : u ? u !== t.memoizedState ? (Hn(e), qt(e), bp(e, u)) : (qt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && Hn(e), qt(e), ic(
          e,
          s,
          t,
          a,
          n
        )), null;
      case 27:
        if (vs(e), n = Zn.current, s = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Hn(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return qt(e), e.subtreeFlags &= -33554433, null;
          }
          t = hn.current, gi(e) ? tm(e) : (t = qy(s, a, n), e.stateNode = t, Hn(e));
        }
        return qt(e), e.subtreeFlags &= -33554433, null;
      case 5:
        if (vs(e), s = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Hn(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return qt(e), e.subtreeFlags &= -33554433, null;
          }
          if (u = hn.current, gi(e))
            tm(e);
          else {
            var f = Xl(
              Zn.current
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
            a && Hn(e);
          }
        }
        return qt(e), e.subtreeFlags &= -33554433, ic(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          n
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && Hn(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(r(166));
          if (t = Zn.current, gi(e)) {
            if (t = e.stateNode, n = e.memoizedProps, a = null, s = le, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  a = s.memoizedProps;
              }
            t[re] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || Ey(t.nodeValue, n)), t || In(e, !0);
          } else
            t = Xl(t).createTextNode(
              a
            ), t[re] = e, e.stateNode = t;
        }
        return qt(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = gi(e), n !== null) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[re] = e;
            } else
              Na(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            qt(e), t = !1;
          } else
            n = pr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (we(e), e) : (we(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return qt(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (s = gi(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!s) throw Error(r(318));
              if (s = e.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(r(317));
              s[re] = e;
            } else
              Na(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            qt(e), s = !1;
          } else
            s = pr(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return e.flags & 256 ? (we(e), e) : (we(e), null);
        }
        return we(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = a !== null, t = t !== null && t.memoizedState !== null, n && (a = e.child, s = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (s = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== s && (a.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), du(e, e.updateQueue), qt(e), null);
      case 4:
        return ei(), t === null && jc(e.stateNode.containerInfo), e.flags |= 67108864, qt(e), null;
      case 10:
        return wn(e.type), qt(e), null;
      case 19:
        if (xr(e), a = e.memoizedState, a === null) return qt(e), null;
        if (s = (e.flags & 128) !== 0, u = a.rendering, u === null)
          if (s) _l(a, !1);
          else {
            if (Pt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = Ws(t), u !== null) {
                  for (e.flags |= 128, _l(a, !1), t = u.updateQueue, e.updateQueue = t, du(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    Fd(n, t), n = n.sibling;
                  return Ol(
                    e,
                    he.current & 1 | 2
                  ), Et && _n(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && xe() > Cu && (e.flags |= 128, s = !0, _l(a, !1), e.lanes = 4194304);
          }
        else {
          if (!s)
            if (t = Ws(u), t !== null) {
              if (e.flags |= 128, s = !0, t = t.updateQueue, e.updateQueue = t, du(e, t), _l(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !u.alternate && !Et)
                return qt(e), null;
            } else
              2 * xe() - a.renderingStartTime > Cu && n !== 536870912 && (e.flags |= 128, s = !0, _l(a, !1), e.lanes = 4194304);
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
          return a.rendering = t, a.tail = t.sibling, a.renderingStartTime = xe(), t.sibling = null, u = he.current, u = s ? u & 1 | 2 : u & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !n || Et ? Ol(e, u) : (n = u, Yt(fe, e), Yt(he, n), ge === null && (ge = e)), Et && _n(e, a.treeForkCount), t;
        }
        return qt(e), null;
      case 22:
      case 23:
        return we(e), Or(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (qt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : qt(e), n = e.updateQueue, n !== null && du(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && oe(Ua), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), wn(kt), qt(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, qt(e), null;
    }
    throw Error(r(156, e.tag));
  }
  function ET(t, e) {
    switch (dr(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return wn(kt), ei(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return vs(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (we(e), e.alternate === null)
            throw Error(r(340));
          Na();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (we(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          Na();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return xr(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return ei(), null;
      case 10:
        return wn(e.type), null;
      case 22:
      case 23:
        return we(e), Or(), t !== null && oe(Ua), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return wn(kt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ap(t, e) {
    switch (dr(e), e.tag) {
      case 3:
        wn(kt), ei();
        break;
      case 26:
      case 27:
      case 5:
        vs(e);
        break;
      case 4:
        ei();
        break;
      case 31:
        e.memoizedState !== null && we(e);
        break;
      case 13:
        we(e);
        break;
      case 19:
        xr(e);
        break;
      case 10:
        wn(e.type);
        break;
      case 22:
      case 23:
        we(e), Or(), t !== null && oe(Ua);
        break;
      case 24:
        wn(kt);
    }
  }
  function Vl(t, e) {
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
  function sa(t, e, n) {
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
              var T = n, D = p;
              try {
                D();
              } catch (_) {
                wt(
                  s,
                  T,
                  _
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (_) {
      wt(e, e.return, _);
    }
  }
  function Mp(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        dm(e, n);
      } catch (a) {
        wt(t, t.return, a);
      }
    }
  }
  function Cp(t, e, n) {
    n.props = Ya(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      wt(t, e, a);
    }
  }
  function yn(t, e) {
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
            var s = t.stateNode, u = xn(t.memoizedProps, s);
            (s.ref === null || s.ref.name !== u) && (s.ref = _y(u)), a = s.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var f = new je(t);
              y(
                t.child,
                !1,
                fE,
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
  function mu(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var n = 0; n < e.length; n++)
        Hy(
          t.stateNode,
          e[n]
        );
  }
  function Dp(t) {
    for (var e = t.return; e !== null && (sc(e) && Hy(t.stateNode, e.stateNode), !lc(e)); )
      e = e.return;
  }
  function wl(t) {
    for (var e = t.return; e !== null && (sc(e) && hE(t.stateNode, e.stateNode), !lc(e)); )
      e = e.return;
  }
  function lc(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function sc(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function uc(t) {
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
  function oc(t, e, n) {
    try {
      var a = t.stateNode;
      JT(a, t.type, n, e), a[be] = e;
    } catch (s) {
      wt(t, t.return, s);
    }
  }
  function Op(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && da(t.type) || t.tag === 4;
  }
  function rc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Op(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && da(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function cc(t, e, n, a) {
    var s = t.tag;
    if (s === 5 || s === 6)
      s = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(s, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(s), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = dn)), mu(t, a), Nt = !0;
    else if (s !== 4 && (s === 27 && (mu(t, a), a = null, da(t.type) && (n = t.stateNode, e = null)), t = t.child, t !== null))
      for (cc(
        t,
        e,
        n,
        a
      ), t = t.sibling; t !== null; )
        cc(
          t,
          e,
          n,
          a
        ), t = t.sibling;
  }
  function pu(t, e, n, a) {
    var s = t.tag;
    if (s === 5 || s === 6)
      s = t.stateNode, e ? n.insertBefore(s, e) : n.appendChild(s), mu(t, a), Nt = !0;
    else if (s !== 4 && (s === 27 && (mu(t, a), a = null, da(t.type) && (n = t.stateNode)), t = t.child, t !== null))
      for (pu(
        t,
        e,
        n,
        a
      ), t = t.sibling; t !== null; )
        pu(
          t,
          e,
          n,
          a
        ), t = t.sibling;
  }
  function Rp(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var a = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      me(e, a, n), e[re] = t, e[be] = n;
    } catch (u) {
      wt(t, t.return, u);
    }
  }
  var yu = !1, Ue = null;
  function xp(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (yu = !0);
  }
  var gn = null;
  function Np() {
    var t = gn;
    return gn = null, t;
  }
  var Me = 0;
  function Ci(t, e, n, a, s) {
    return Me = 0, zp(
      t.child,
      e,
      n,
      a,
      s
    );
  }
  function zp(t, e, n, a, s) {
    for (var u = !1; t !== null; ) {
      if (t.tag === 5) {
        var f = t.stateNode;
        if (a !== null) {
          var p = Jc(f);
          a.push(p), p.view && (u = !0);
        } else
          u || Jc(f).view && (u = !0);
        yu = !0, Ny(
          f,
          Me === 0 ? e : e + "_" + Me,
          n
        ), Me++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && s || zp(
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
  function vn(t, e) {
    for (; t !== null; )
      t.tag === 5 ? zy(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || vn(
        t.child,
        e
      )), t = t.sibling;
  }
  function gu(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (gu(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var e = t.memoizedProps;
          if (e.name == null || e.name === "auto")
            throw Error(r(544));
          var n = e.name;
          e = Nn(e.default, e.share), e !== "none" && (Ci(
            t,
            n,
            e,
            null,
            !1
          ) || vn(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function fc(t, e) {
    if (t.tag === 30) {
      var n = t.stateNode, a = t.memoizedProps, s = xn(a, n), u = Nn(
        a.default,
        n.paired ? a.share : a.enter
      );
      u !== "none" ? Ci(t, s, u, null, !1) ? (gu(t), n.paired || e || Vi(t, a.onEnter)) : vn(t.child, !1) : gu(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        fc(t, e), t = t.sibling;
    else gu(t);
  }
  function hc(t) {
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
                  if (u !== "none" && (Ci(
                    t,
                    a,
                    u,
                    null,
                    !1
                  ) ? (u = t.stateNode, s.paired = u, u.paired = s, Vi(t, n.onShare)) : vn(t.child, !1)), e.delete(a), e.size === 0) break;
                }
              }
            }
            hc(t);
          }
          t = t.sibling;
        }
    }
  }
  function dc(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, n = xn(e, t.stateNode), a = Ue !== null ? Ue.get(n) : void 0, s = Nn(
        e.default,
        a !== void 0 ? e.share : e.exit
      );
      s !== "none" && (Ci(t, n, s, null, !1) ? a !== void 0 ? (s = t.stateNode, a.paired = s, s.paired = a, Ue.delete(n), Vi(t, e.onShare)) : Vi(t, e.onExit) : vn(t.child, !1)), Ue !== null && hc(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        dc(t), t = t.sibling;
    else
      Ue !== null && hc(t);
  }
  function _p(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, n = xn(e, t.stateNode);
        e = Nn(e.default, e.update), t.flags &= -5, e !== "none" && Ci(
          t,
          n,
          e,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && _p(t);
      t = t.sibling;
    }
  }
  function mc(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, vn(t.child, !1));
          }
          mc(t);
        }
        t = t.sibling;
      }
  }
  function vu(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, vn(t.child, !1), mc(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        vu(t), t = t.sibling;
    else mc(t);
  }
  function Vp(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? vn(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && Vp(t), t = t.sibling;
  }
  function pc(t, e, n, a, s, u, f) {
    for (var p = !1; e !== null; ) {
      if (e.tag === 5) {
        var T = e.stateNode;
        if (u !== null && Me < u.length) {
          var D = u[Me], _ = Jc(T);
          (D.view || _.view) && (p = !0);
          var H;
          if (H = (t.flags & 4) === 0)
            if (_.clip) H = !0;
            else {
              H = D.rect;
              var M = _.rect;
              H = H.y !== M.y || H.x !== M.x || H.height !== M.height || H.width !== M.width;
            }
          H && (t.flags |= 4), _.abs ? _ = !D.abs : (D = D.rect, _ = _.rect, _ = D.height !== _.height || D.width !== _.width), _ && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && Ny(
          T,
          Me === 0 ? n : n + "_" + Me,
          s
        ), p && (t.flags & 4) !== 0 || (gn === null && (gn = []), gn.push(
          T,
          Me === 0 ? a : a + "_" + Me,
          e.memoizedProps
        )), Me++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && f ? t.flags |= e.flags & 32 : pc(
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
  function wp(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var n = t.memoizedProps, a = t.stateNode, s = xn(n, a), u = Nn(n.default, n.update), f;
        f = t.memoizedState, t.memoizedState = null, a = t;
        var p = t.child;
        Me = 0, s = pc(
          a,
          p,
          s,
          s,
          u,
          f,
          !1
        ), (t.flags & 4) !== 0 && s && Vi(t, n.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && wp(t);
      t = t.sibling;
    }
  }
  var se = !1, _t = !1, Sn = !1, yc = !1, Up = typeof WeakSet == "function" ? WeakSet : Set, ue = null, Tn = !1, Ul = !1, Su = !1, gc = !1;
  function bT(t, e, n) {
    if (t = t.containerInfo, qc = Xi, t = jd(t), ar(t)) {
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
            var p = 0, T = -1, D = -1, _ = 0, H = 0, M = t, N = null;
            e: for (; ; ) {
              for (var P; M !== a || u !== 0 && M.nodeType !== 3 || (T = p + u), M !== f || s !== 0 && M.nodeType !== 3 || (D = p + s), M.nodeType === 3 && (p += M.nodeValue.length), (P = M.firstChild) !== null; )
                N = M, M = P;
              for (; ; ) {
                if (M === t) break e;
                if (N === a && ++_ === u && (T = p), N === f && ++H === s && (D = p), (P = M.nextSibling) !== null) break;
                M = N, N = M.parentNode;
              }
              M = P;
            }
            a = T === -1 || D === -1 ? null : { start: T, end: D };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Xc = { focusedElem: t, selectionRange: a }, Xi = !1, n = (n & 335544064) === n, ue = e, e = n ? 9270 : 1024; ue !== null; ) {
      if (t = ue, n && (a = t.deletions, a !== null))
        for (u = 0; u < a.length; u++)
          n && dc(a[u]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        n && xp(t), Tu(n);
      else {
        if (t.tag === 22) {
          if (a = t.alternate, t.memoizedState !== null) {
            a !== null && a.memoizedState === null && n && dc(a), Tu(n);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            n && xp(t), Tu(n);
            continue;
          }
        }
        a = t.child, (t.subtreeFlags & e) !== 0 && a !== null ? (a.return = t, ue = a) : (n && _p(t), Tu(n));
      }
    }
    Ue = null;
  }
  function Tu(t) {
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
              var f = Ya(
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
              kc(a);
            else if (n === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  kc(a);
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
          n && a !== null && (n = xn(
            a.memoizedProps,
            a.stateNode
          ), s = e.memoizedProps, s = Nn(s.default, s.update), s !== "none" && Ci(
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
  function Bp(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        En(t, n), a & 4 && Vl(5, n);
        break;
      case 1:
        if (En(t, n), a & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (f) {
              wt(n, n.return, f);
            }
          else {
            var s = Ya(
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
        a & 64 && Mp(n), a & 512 && yn(n, n.return);
        break;
      case 3:
        if (En(t, n), a & 64 && (t = n.updateQueue, t !== null)) {
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
            dm(t, e);
          } catch (f) {
            wt(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Rp(n);
      case 26:
      case 5:
        En(t, n), e === null && a & 4 && uc(n), a & 512 && yn(n, n.return);
        break;
      case 12:
        En(t, n);
        break;
      case 31:
        En(t, n), a & 4 && Yp(t, n);
        break;
      case 13:
        En(t, n), a & 4 && Gp(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = wT.bind(
          null,
          n
        ), pE(t, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || se, !a) {
          var u = e !== null && e.memoizedState !== null || _t;
          e = se, s = _t, se = a, (_t = u) && !s ? (a = 2, (n.subtreeFlags & 8772) !== 0 && (a |= 1), en(
            t,
            n,
            a
          )) : En(t, n), se = e, _t = s;
        }
        break;
      case 30:
        En(t, n), a & 512 && yn(n, n.return);
        break;
      case 7:
        a & 512 && yn(n, n.return);
      default:
        En(t, n);
    }
  }
  function vc(t, e) {
    for (t = t.child; t !== null; )
      Lp(t, e), t = t.sibling;
  }
  function Lp(t, e) {
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
        Sc(t, e);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = e ? "" : t.memoizedProps, Nt = !0;
        } catch (T) {
          wt(t, t.return, T);
        }
        break;
      case 18:
        try {
          var p = t.stateNode;
          e ? xy(p, !0) : xy(t.stateNode, !1);
        } catch (T) {
          wt(t, t.return, T);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && vc(t, e);
        break;
      default:
        vc(t, e);
    }
  }
  function Sc(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var n = t, a = e;
          switch (n.tag) {
            case 4:
              Lp(n, a);
              break t;
            case 22:
              n.memoizedState === null && Sc(n, a);
              break t;
            default:
              Sc(n, a);
          }
        }
        t = t.sibling;
      }
  }
  function Hp(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Hp(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Cs(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Zt = null, Ce = !1;
  function $e(t, e, n) {
    for (n = n.child; n !== null; )
      jp(t, e, n), n = n.sibling;
  }
  function jp(t, e, n) {
    if (Ne && typeof Ne.onCommitFiberUnmount == "function")
      try {
        Ne.onCommitFiberUnmount(il, n);
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
        _t || de(n, e), wl(n);
        var a = Zt, s = Ce;
        da(n.type) && (Zt = n.stateNode, Ce = !1), $e(
          t,
          e,
          n
        ), Xy(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), Zt = a, Ce = s;
        break;
      case 5:
        _t || de(n, e), wl(n);
      case 6:
        if (n.tag === 6 && wl(n), a = Zt, s = Ce, Zt = null, $e(
          t,
          e,
          n
        ), Zt = a, Ce = s, Zt !== null)
          if (Ce)
            try {
              (Zt.nodeType === 9 ? Zt.body : Zt.nodeName === "HTML" ? Zt.ownerDocument.body : Zt).removeChild(n.stateNode), Nt = !0;
            } catch (u) {
              wt(
                n,
                e,
                u
              );
            }
          else
            try {
              Zt.removeChild(n.stateNode), Nt = !0;
            } catch (u) {
              wt(
                n,
                e,
                u
              );
            }
        break;
      case 18:
        Zt !== null && (Ce ? (t = Zt, Ry(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), Zi(t)) : Ry(Zt, n.stateNode));
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
        sa(2, n, e), _t || sa(4, n, e), $e(
          t,
          e,
          n
        );
        break;
      case 1:
        _t || (de(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && Cp(
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
  function Yp(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Zi(t);
      } catch (n) {
        wt(e, e.return, n);
      }
    }
  }
  function Gp(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Zi(t);
      } catch (n) {
        wt(e, e.return, n);
      }
  }
  function AT(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Up()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Up()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Eu(t, e) {
    var n = AT(t);
    e.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var s = UT.bind(null, t, a);
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
              if (da(T.type)) {
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
        jp(f, p, u), Zt = null, Ce = !1, f = u.alternate, f !== null && (f.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        qp(e, t, n), e = e.sibling;
  }
  var tn = null;
  function qp(t, e, n) {
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
        Te(e, t, n), Ee(t), s & 4 && (sa(3, t, t.return), Vl(3, t), sa(5, t, t.return));
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
                  t.stateNode = Cy(
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
                        a = s.getElementsByTagName("title")[0], (!a || a[ul] || a[re] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = s.createElement(e), s.head.insertBefore(
                          a,
                          s.querySelector("head > title")
                        )), me(a, e, n), a[re] = t, ie(a), e = a;
                        break t;
                      case "link":
                        if (u = Fy(
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
                        if (u = Fy(
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
                se || af(u, t.type, t.stateNode);
            else
              t.stateNode = Py(
                u,
                n,
                t.memoizedProps
              );
          else
            s !== n ? (s === null ? (e = a.stateNode, e === null || _t || e.parentNode.removeChild(e)) : s.count--, n === null ? se || af(u, t.type, t.stateNode) : Py(u, n, t.memoizedProps)) : n === null && t.stateNode !== null && oc(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        Te(e, t, n), Ee(t), s & 512 && (_t || a === null || de(a, a.return)), a !== null && s & 4 && oc(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (u = Sn, Sn = !1, Te(e, t, n), Sn = u, Ee(t), s & 512 && (_t || a === null || de(a, a.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            ui(e, ""), Nt = !0;
          } catch (_) {
            wt(t, t.return, _);
          }
        }
        s & 4 && t.stateNode != null && (e = t.memoizedProps, oc(
          t,
          e,
          a !== null ? a.memoizedProps : e
        )), s & 1024 && (yc = !0);
        break;
      case 6:
        if (Te(e, t, n), Ee(t), s & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          e = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = e, Nt = !0;
          } catch (_) {
            wt(t, t.return, _);
          }
        }
        break;
      case 3:
        if (Nt = !1, Bu = null, u = tn, tn = Zl(e.containerInfo), Te(e, t, n), tn = u, Ee(t), s & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Zi(e.containerInfo);
          } catch (_) {
            wt(t, t.return, _);
          }
        yc && (yc = !1, Xp(t)), Nt = !1;
        break;
      case 4:
        s = Sn, Sn = se, a = rd(), u = tn, tn = Zl(
          t.stateNode.containerInfo
        ), Te(e, t, n), Ee(t), tn = u, Nt && Ul && (Su = !0), Nt = a, Sn = s;
        break;
      case 12:
        Te(e, t, n), Ee(t);
        break;
      case 31:
        Te(e, t, n), Ee(t), s & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Eu(t, e)));
        break;
      case 13:
        Te(e, t, n), Ee(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Mu = xe()), s & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Eu(t, e)));
        break;
      case 22:
        u = t.memoizedState !== null, f = a !== null && a.memoizedState !== null;
        var p = se, T = _t, D = Sn;
        se = p || u, Sn = D || u, _t = T || f, Te(e, t, n), _t = T, Sn = D, se = p, Ee(t), s & 8192 && (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, !u || a === null || f || se || _t || (e = f || _t, n = se, a = _t, se = u || se, _t = e, ua(t, 2), se = n, _t = a), !u && Sn || vc(t, u)), s & 4 && (e = t.updateQueue, e !== null && (n = e.retryQueue, n !== null && (e.retryQueue = null, Eu(t, n))));
        break;
      case 19:
        Te(e, t, n), Ee(t), s & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, Eu(t, e)));
        break;
      case 30:
        s & 512 && (_t || a === null || de(a, a.return)), s = rd(), u = Ul, f = (n & 335544064) === n, p = t.memoizedProps, Ul = f && Nn(
          p.default,
          p.update
        ) !== "none", Te(e, t, n), Ee(t), f && a !== null && Nt && (t.flags |= 4), Ul = u, Nt = s;
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
          if (Op(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var s = t.return; s !== null; ) {
          if (sc(s)) {
            var u = s.stateNode;
            a === null ? a = [u] : a.push(u);
          }
          if (lc(s)) break;
          s = s.return;
        }
        var f = a;
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var p = n.stateNode, T = rc(t);
            pu(
              t,
              T,
              p,
              f
            );
            break;
          case 5:
            var D = n.stateNode;
            n.flags & 32 && (ui(D, ""), n.flags &= -33);
            var _ = rc(t);
            pu(
              t,
              _,
              D,
              f
            );
            break;
          case 3:
          case 4:
            var H = n.stateNode.containerInfo, M = rc(t);
            cc(
              t,
              M,
              H,
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
  function Xp(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Xp(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, Xi = !0, e.reset(), Xi = !1), t = t.sibling;
      }
  }
  function Di(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null; )
        Zp(e, t), e = e.sibling;
    else wp(e);
  }
  function Zp(t, e) {
    var n = t.alternate;
    if (n === null) fc(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (gc = Tn = !1, Np(), Di(e, t), !Tn && !Su) {
            if (t = gn, t !== null)
              for (var a = 0; a < t.length; a += 3) {
                n = t[a];
                var s = t[a + 1];
                zy(n, t[a + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
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
            )), gc = !0;
          }
          gn = null;
          break;
        case 5:
          Di(e, t);
          break;
        case 4:
          a = Tn, Tn = !1, Di(e, t), Tn && (Su = !0), Tn = a;
          break;
        case 22:
          t.memoizedState === null && (n.memoizedState !== null ? fc(t, !1) : Di(e, t));
          break;
        case 30:
          a = Tn, s = Np(), Tn = !1, Di(e, t), Tn && (t.flags |= 4);
          var u = t.memoizedProps, f = t.stateNode;
          e = xn(u, f), f = xn(n.memoizedProps, f);
          var p = Nn(u.default, u.update);
          p === "none" ? e = !1 : (u = n.memoizedState, n.memoizedState = null, n = t.child, Me = 0, e = pc(
            t,
            n,
            e,
            f,
            p,
            u,
            !0
          ), Me !== (u === null ? 0 : u.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && e ? (Vi(
            t,
            t.memoizedProps.onUpdate
          ), gn = s) : s !== null && (s.push.apply(s, gn), gn = s), Tn = (t.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          Di(e, t);
      }
  }
  function En(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Bp(t, e.alternate, e), e = e.sibling;
  }
  function ua(t, e) {
    for (t = t.child; t !== null; ) {
      var n = t, a = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          sa(4, n, n.return), ua(
            n,
            a
          );
          break;
        case 1:
          de(n, n.return);
          var s = n.stateNode;
          typeof s.componentWillUnmount == "function" && Cp(
            n,
            n.return,
            s
          ), ua(
            n,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Xy(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          de(n, n.return), n.tag !== 5 && n.tag !== 27 || wl(n), ua(
            n,
            a
          );
          break;
        case 6:
          wl(n);
          break;
        case 26:
          de(n, n.return), s = n.stateNode, n.memoizedState !== null || s === null || _t || s.parentNode.removeChild(s), ua(
            n,
            a
          );
          break;
        case 22:
          n.memoizedState === null && ua(
            n,
            a
          );
          break;
        case 30:
          de(n, n.return), ua(
            n,
            a
          );
          break;
        case 7:
          de(n, n.return);
        default:
          ua(
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
          ), Vl(4, u);
          break;
        case 1:
          if (en(
            s,
            u,
            n
          ), a = u, s = a.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (_) {
              wt(a, a.return, _);
            }
          if (a = u, s = a.updateQueue, s !== null) {
            var T = a.stateNode;
            try {
              var D = s.shared.hiddenCallbacks;
              if (D !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < D.length; s++)
                  hm(D[s], T);
            } catch (_) {
              wt(a, a.return, _);
            }
          }
          p && f & 64 && Mp(u), yn(u, u.return);
          break;
        case 27:
          (n & 2) !== 0 && Rp(u);
        case 5:
          u.tag !== 5 && u.tag !== 27 || Dp(u), en(
            s,
            u,
            n
          ), p && a === null && f & 4 && uc(u), yn(u, u.return);
          break;
        case 6:
          Dp(u);
          break;
        case 26:
          T = u.stateNode, u.memoizedState !== null || T === null || se || af(
            Zl(T.ownerDocument),
            u.type,
            T
          ), en(
            s,
            u,
            n
          ), p && a === null && f & 4 && uc(u), yn(u, u.return);
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
          ), p && f & 4 && Yp(s, u);
          break;
        case 13:
          en(
            s,
            u,
            n
          ), p && f & 4 && Gp(s, u);
          break;
        case 22:
          u.memoizedState === null && en(
            s,
            u,
            n
          ), yn(u, u.return);
          break;
        case 30:
          en(
            s,
            u,
            n
          ), yn(u, u.return);
          break;
        case 7:
          yn(u, u.return);
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
  function Tc(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Tl(n));
  }
  function Ec(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Tl(t));
  }
  function Je(t, e, n, a) {
    var s = (n & 335544064) === n;
    if (e.subtreeFlags & (s ? 10262 : 10256))
      for (e = e.child; e !== null; )
        Qp(
          t,
          e,
          n,
          a
        ), e = e.sibling;
    else s && Vp(e);
  }
  function Qp(t, e, n, a) {
    var s = (n & 335544064) === n;
    s && e.alternate === null && e.return !== null && e.return.alternate !== null && vu(e);
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
        ), u & 2048 && Vl(9, e);
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
        ), s && gc && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), u & 2048 && (u = null, e.alternate !== null && (u = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== u && (e.refCount++, u != null && Tl(u)));
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
          } catch (D) {
            wt(e, e.return, D);
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
        f = e.stateNode, p = e.alternate, e.memoizedState !== null ? (s && p !== null && p.memoizedState === null && vu(p), f._visibility & 2 ? Je(
          t,
          e,
          n,
          a
        ) : Bl(
          t,
          e
        )) : (s && p !== null && p.memoizedState !== null && vu(e), f._visibility & 2 ? Je(
          t,
          e,
          n,
          a
        ) : (f._visibility |= 2, Oi(
          t,
          e,
          n,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        ))), u & 2048 && Tc(p, e);
        break;
      case 24:
        Je(
          t,
          e,
          n,
          a
        ), u & 2048 && Ec(e.alternate, e);
        break;
      case 30:
        s && (u = e.alternate, u !== null && (vn(u.child, !0), vn(e.child, !0))), Je(
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
  function Oi(t, e, n, a, s) {
    for (s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, f = e, p = n, T = a, D = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Oi(
            u,
            f,
            p,
            T,
            s
          ), Vl(8, f);
          break;
        case 23:
          break;
        case 22:
          var _ = f.stateNode;
          f.memoizedState !== null ? _._visibility & 2 ? Oi(
            u,
            f,
            p,
            T,
            s
          ) : Bl(
            u,
            f
          ) : (_._visibility |= 2, Oi(
            u,
            f,
            p,
            T,
            s
          )), s && D & 2048 && Tc(
            f.alternate,
            f
          );
          break;
        case 24:
          Oi(
            u,
            f,
            p,
            T,
            s
          ), s && D & 2048 && Ec(f.alternate, f);
          break;
        default:
          Oi(
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
  function Bl(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, a = e, s = a.flags;
        switch (a.tag) {
          case 22:
            Bl(n, a), s & 2048 && Tc(
              a.alternate,
              a
            );
            break;
          case 24:
            Bl(n, a), s & 2048 && Ec(a.alternate, a);
            break;
          default:
            Bl(n, a);
        }
        e = e.sibling;
      }
  }
  var Ga = 8192;
  function qa(t, e, n) {
    if (t.subtreeFlags & Ga)
      for (t = t.child; t !== null; )
        Kp(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function Kp(t, e, n) {
    switch (t.tag) {
      case 26:
        qa(
          t,
          e,
          n
        ), t.flags & Ga && (t.memoizedState !== null ? xE(
          n,
          tn,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (e & 335544128) === e && $y(n, t)));
        break;
      case 5:
        qa(
          t,
          e,
          n
        ), t.flags & Ga && (t = t.stateNode, (e & 335544128) === e && $y(n, t));
        break;
      case 3:
      case 4:
        var a = tn;
        tn = Zl(t.stateNode.containerInfo), qa(
          t,
          e,
          n
        ), tn = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = Ga, Ga = 16777216, qa(
          t,
          e,
          n
        ), Ga = a) : qa(
          t,
          e,
          n
        ));
        break;
      case 30:
        if ((t.flags & Ga) !== 0 && (a = t.memoizedProps.name, a != null && a !== "auto")) {
          var s = t.stateNode;
          s.paired = null, Ue === null && (Ue = /* @__PURE__ */ new Map()), Ue.set(a, s);
        }
        qa(
          t,
          e,
          n
        );
        break;
      default:
        qa(
          t,
          e,
          n
        );
    }
  }
  function Jp(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Ll(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ue = a, Fp(
            a,
            t
          );
        }
      Jp(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Pp(t), t = t.sibling;
  }
  function Pp(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ll(t), t.flags & 2048 && sa(9, t, t.return);
        break;
      case 3:
        Ll(t);
        break;
      case 12:
        Ll(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, bu(t)) : Ll(t);
        break;
      default:
        Ll(t);
    }
  }
  function bu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ue = a, Fp(
            a,
            t
          );
        }
      Jp(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          sa(8, e, e.return), bu(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, bu(e));
          break;
        default:
          bu(e);
      }
      t = t.sibling;
    }
  }
  function Fp(t, e) {
    for (; ue !== null; ) {
      var n = ue;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          sa(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Tl(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, ue = a;
      else
        t: for (n = t; ue !== null; ) {
          a = ue;
          var s = a.sibling, u = a.return;
          if (Hp(a), a === n) {
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
  var MT = {
    getCacheForType: function(t) {
      var e = ce(kt), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return ce(kt).controller.signal;
    }
  }, CT = typeof WeakMap == "function" ? WeakMap : Map, zt = 0, Lt = null, At = null, Ct = 0, Vt = 0, Be = null, oa = !1, Ri = !1, bc = !1, jn = 0, Pt = 0, ra = 0, Xa = 0, Au = 0, Le = 0, xi = 0, Hl = null, De = null, Ac = !1, Mu = 0, kp = 0, Cu = 1 / 0, Du = null, ca = null, Kt = 0, nn = null, Za = null, bn = 0, Mc = 0, Cc = null, Ip = null, Ni = null, zi = null, _i = null, jl = 0, Ou = null;
  function He() {
    return (zt & 2) !== 0 && Ct !== 0 ? Ct & -Ct : it.T !== null ? Uc() : td();
  }
  function Wp() {
    if (Le === 0)
      if ((Ct & 536870912) === 0 || Et) {
        var t = Es;
        Es <<= 1, (Es & 3932160) === 0 && (Es = 262144), Le = t;
      } else Le = 536870912;
    return t = fe.current, t !== null && (t.flags |= 32), Le;
  }
  function Vi(t, e) {
    if (e != null) {
      var n = t.stateNode, a = n.ref;
      a === null && (a = n.ref = _y(
        xn(t.memoizedProps, n)
      )), zi === null && (zi = []), zi.push(e.bind(null, a));
    }
  }
  function Oe(t, e, n) {
    (t === Lt && (Vt === 2 || Vt === 9) || t.cancelPendingCommit !== null) && (wi(t, 0), fa(
      t,
      Ct,
      Le,
      !1
    )), sl(t, n), ((zt & 2) === 0 || t !== Lt) && (t === Lt && ((zt & 2) === 0 && (Xa |= n), Pt === 4 && fa(
      t,
      Ct,
      Le,
      !1
    )), An(t));
  }
  function $p(t, e, n) {
    if ((zt & 6) !== 0) throw Error(r(327));
    var a = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || ll(t, e), s = a ? RT(t, e) : Oc(t, e, !0), u = a;
    do {
      if (s === 0) {
        Ri && !a && fa(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, u && !DT(n)) {
          s = Oc(t, e, !1), u = !1;
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
              s = Hl;
              var T = p.current.memoizedState.isDehydrated;
              if (T && (wi(p, f).flags |= 256), f = Oc(
                p,
                f,
                !1
              ), f !== 2 && f !== 6) {
                if (bc && !T) {
                  p.errorRecoveryDisabledLanes |= u, Xa |= u, s = 4;
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
          wi(t, 0), fa(t, e, 0, !0);
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
              fa(
                a,
                e,
                Le,
                !oa
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
          if ((e & 62914560) === e && (s = Mu + 300 - xe(), 10 < s)) {
            if (fa(
              a,
              e,
              Le,
              !oa
            ), As(a, 0, !0) !== 0) break t;
            bn = e, a.timeoutHandle = Kc(
              ty.bind(
                null,
                a,
                n,
                De,
                Du,
                Ac,
                e,
                Le,
                Xa,
                xi,
                oa,
                u,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break t;
          }
          ty(
            a,
            n,
            De,
            Du,
            Ac,
            e,
            Le,
            Xa,
            xi,
            oa,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    An(t);
  }
  function ty(t, e, n, a, s, u, f, p, T, D, _, H, M, N) {
    t.timeoutHandle = -1;
    var P = e.subtreeFlags, lt = (u & 335544064) === u;
    if (H = null, (lt || P & 8192 || (P & 16785408) === 16785408) && (H = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: dn
    }, Ue = null, Kp(
      e,
      u,
      H
    ), lt && (P = H, lt = t.containerInfo, lt = (lt.nodeType === 9 ? lt : lt.ownerDocument).__reactViewTransition, lt != null && (P.count++, P.waitingForViewTransition = !0, P = Jl.bind(P), lt.finished.then(P, P))), P = (u & 62914560) === u ? Mu - xe() : (u & 4194048) === u ? kp - xe() : 0, P = NE(
      H,
      P
    ), P !== null)) {
      bn = u, t.cancelPendingCommit = P(
        oy.bind(
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
          D,
          _,
          H,
          null,
          M,
          N
        )
      ), fa(t, u, f, !D);
      return;
    }
    oy(
      t,
      e,
      u,
      n,
      a,
      s,
      f,
      p,
      T,
      D,
      _,
      H
    );
  }
  function DT(t) {
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
  function fa(t, e, n, a) {
    e = Fh(t, e), e &= ~Au, e &= ~Xa, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var s = e; 0 < s; ) {
      var u = 31 - ze(s), f = 1 << u;
      a[u] = -1, s &= ~f;
    }
    n !== 0 && Ih(t, n, e);
  }
  function Ru() {
    return (zt & 6) === 0 ? (Yl(0), !1) : !0;
  }
  function Dc() {
    if (At !== null) {
      if (Vt === 0)
        var t = At.return;
      else
        t = At, Vn = za = null, wr(t), Ti = null, Al = 0, t = At;
      for (; t !== null; )
        Ap(t.alternate, t), t = t.return;
      At = null;
    }
  }
  function wi(t, e) {
    var n = t.timeoutHandle;
    return n !== -1 && (t.timeoutHandle = -1, kT(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), bn = 0, Dc(), Lt = t, At = n = zn(t.current, null), Ct = e, Vt = 0, Be = null, oa = !1, Ri = ll(t, e), bc = !1, xi = Le = Au = Xa = ra = Pt = 0, De = Hl = null, Ac = !1, jn = Fh(t, e), Bs(), n;
  }
  function ey(t, e) {
    gt = null, it.H = uu, e === Si || e === Js ? (e = om(), Vt = 3) : e === Er ? (e = om(), Vt = 4) : Vt = e === Fr ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Be = e, At === null && (Pt = 1, ou(
      t,
      Xe(e, t.current)
    ));
  }
  function ny() {
    var t = fe.current;
    return t === null ? !0 : (Ct & 4194048) === Ct ? ge === null : (Ct & 62914560) === Ct || (Ct & 536870912) !== 0 ? t === ge : !1;
  }
  function ay() {
    var t = it.H;
    return it.H = uu, t === null ? uu : t;
  }
  function iy() {
    var t = it.A;
    return it.A = MT, t;
  }
  function xu() {
    Pt = 4, oa || (Ct & 4194048) !== Ct && fe.current !== null || (Ri = !0), (ra & 134217727) === 0 && (Xa & 134217727) === 0 || Lt === null || fa(
      Lt,
      Ct,
      Le,
      !1
    );
  }
  function Oc(t, e, n) {
    var a = zt;
    zt |= 2;
    var s = ay(), u = iy();
    (Lt !== t || Ct !== e) && (Du = null, wi(t, e)), e = !1;
    var f = Pt;
    t: do
      try {
        if (Vt !== 0 && At !== null) {
          var p = At, T = Be;
          switch (Vt) {
            case 8:
              Dc(), f = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              fe.current === null && (e = !0);
              var D = Vt;
              if (Vt = 0, Be = null, Ui(t, p, T, D), n && Ri) {
                f = 0;
                break t;
              }
              break;
            default:
              D = Vt, Vt = 0, Be = null, Ui(t, p, T, D);
          }
        }
        OT(), f = Pt;
        break;
      } catch (_) {
        ey(t, _);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Vn = za = null, zt = a, it.H = s, it.A = u, At === null && (Lt = null, Ct = 0, Bs()), f;
  }
  function OT() {
    for (; At !== null; ) ly(At);
  }
  function RT(t, e) {
    var n = zt;
    zt |= 2;
    var a = ay(), s = iy();
    Lt !== t || Ct !== e ? (Du = null, Cu = xe() + 500, wi(t, e)) : Ri = ll(
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
              Vt = 0, Be = null, Ui(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (sm(u)) {
                Vt = 0, Be = null, sy(e);
                break;
              }
              e = function() {
                Vt !== 2 && Vt !== 9 || Lt !== t || (Vt = 7), An(t);
              }, u.then(e, e);
              break t;
            case 3:
              Vt = 7;
              break t;
            case 4:
              Vt = 5;
              break t;
            case 7:
              sm(u) ? (Vt = 0, Be = null, sy(e)) : (Vt = 0, Be = null, Ui(t, e, u, 7));
              break;
            case 5:
              var f = null;
              switch (At.tag) {
                case 26:
                  f = At.memoizedState;
                case 5:
                case 27:
                  var p = At;
                  if (f ? Iy(f) : p.stateNode.complete) {
                    Vt = 0, Be = null;
                    var T = p.sibling;
                    if (T !== null) At = T;
                    else {
                      var D = p.return;
                      D !== null ? (At = D, Nu(D)) : At = null;
                    }
                    break e;
                  }
              }
              Vt = 0, Be = null, Ui(t, e, u, 5);
              break;
            case 6:
              Vt = 0, Be = null, Ui(t, e, u, 6);
              break;
            case 8:
              Dc(), Pt = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        xT();
        break;
      } catch (_) {
        ey(t, _);
      }
    while (!0);
    return Vn = za = null, it.H = a, it.A = s, zt = n, At !== null ? 0 : (Lt = null, Ct = 0, Bs(), Pt);
  }
  function xT() {
    for (; At !== null && !K1(); )
      ly(At);
  }
  function ly(t) {
    var e = Ep(t.alternate, t, jn);
    t.memoizedProps = t.pendingProps, e === null ? Nu(t) : At = e;
  }
  function sy(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = mp(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          Ct
        );
        break;
      case 11:
        e = mp(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          Ct
        );
        break;
      case 5:
        wr(e);
        var a = e;
        a === le && (Et ? (qs(a), a.tag === 5 && a.stateNode != null && (Gt = a.stateNode)) : (qs(a), Et = !0));
      default:
        Ap(n, e), e = At = Fd(e, jn), e = Ep(n, e, jn);
    }
    t.memoizedProps = t.pendingProps, e === null ? Nu(t) : At = e;
  }
  function Ui(t, e, n, a) {
    Vn = za = null, wr(e), Ti = null, Al = 0;
    var s = e.return;
    try {
      if (yT(
        t,
        s,
        e,
        n,
        Ct
      )) {
        Pt = 1, ou(
          t,
          Xe(n, t.current)
        ), At = null;
        return;
      }
    } catch (u) {
      if (s !== null) throw At = s, u;
      Pt = 1, ou(
        t,
        Xe(n, t.current)
      ), At = null;
      return;
    }
    e.flags & 32768 ? (Et || a === 1 ? t = !0 : Ri || (Ct & 536870912) !== 0 ? t = !1 : (oa = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = fe.current, a !== null && a.tag === 13 && (a.flags |= 16384))), uy(e, t)) : Nu(e);
  }
  function Nu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        uy(
          e,
          oa
        );
        return;
      }
      t = e.return;
      var n = TT(
        e.alternate,
        e,
        jn
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
    Pt === 0 && (Pt = 5);
  }
  function uy(t, e) {
    do {
      var n = ET(t.alternate, t);
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
    Pt = 6, At = null;
  }
  function oy(t, e, n, a, s, u, f, p, T, D, _, H) {
    t.cancelPendingCommit = null;
    do
      zu();
    while (Kt !== 0);
    if ((zt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      t === Lt && (At = Lt = null, Ct = 0), Za = e, nn = t, bn = n, Cc = s, Ip = a, NT(
        t,
        e,
        n,
        f,
        p,
        T,
        H
      );
    }
  }
  function NT(t, e, n, a, s, u, f) {
    var p = e.lanes | e.childLanes;
    if (Mc = p, p |= or, nS(
      t,
      n,
      p,
      a,
      s,
      u
    ), zi = null, (n & 335544064) === n ? (_i = iT(t), a = 10262) : (_i = null, a = 10256), (e.subtreeFlags & a) !== 0 || (e.flags & a) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, BT(Ss, function() {
      return zc(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), yu = !1, a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
      a = it.T, it.T = null, s = ft.p, ft.p = 2, u = zt, zt |= 4;
      try {
        bT(t, e, n);
      } finally {
        zt = u, ft.p = s, it.T = a;
      }
    }
    Kt = 1, yu ? Ni = nE(
      f,
      t.containerInfo,
      _i,
      Rc,
      xc,
      _T,
      Nc,
      zc,
      zT
    ) : (Rc(), xc(), Nc());
  }
  function zT(t) {
    if (Kt !== 0) {
      var e = nn.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function _T() {
    Kt === 3 && (Kt = 0, Zp(Za, nn), Kt = 4);
  }
  function Rc() {
    if (Kt === 1) {
      Kt = 0;
      var t = nn, e = Za, n = bn, a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        a = it.T, it.T = null;
        var s = ft.p;
        ft.p = 2;
        var u = zt;
        zt |= 4;
        try {
          Ul = Su = !1, qp(e, t, n), n = Xc;
          var f = jd(t.containerInfo), p = n.focusedElem, T = n.selectionRange;
          if (f !== p && p && p.ownerDocument && Hd(
            p.ownerDocument.documentElement,
            p
          )) {
            if (T !== null && ar(p)) {
              var D = T.start, _ = T.end;
              if (_ === void 0 && (_ = D), "selectionStart" in p)
                p.selectionStart = D, p.selectionEnd = Math.min(
                  _,
                  p.value.length
                );
              else {
                var H = p.ownerDocument || document, M = H && H.defaultView || window;
                if (M.getSelection) {
                  var N = M.getSelection(), P = p.textContent.length, lt = Math.min(T.start, P), vt = T.end === void 0 ? lt : Math.min(T.end, P);
                  !N.extend && lt > vt && (f = vt, vt = lt, lt = f);
                  var C = Ld(
                    p,
                    lt
                  ), A = Ld(
                    p,
                    vt
                  );
                  if (C && A && (N.rangeCount !== 1 || N.anchorNode !== C.node || N.anchorOffset !== C.offset || N.focusNode !== A.node || N.focusOffset !== A.offset)) {
                    var R = H.createRange();
                    R.setStart(C.node, C.offset), N.removeAllRanges(), lt > vt ? (N.addRange(R), N.extend(A.node, A.offset)) : (R.setEnd(A.node, A.offset), N.addRange(R));
                  }
                }
              }
            }
            for (H = [], N = p; N = N.parentNode; )
              N.nodeType === 1 && H.push({
                element: N,
                left: N.scrollLeft,
                top: N.scrollTop
              });
            for (typeof p.focus == "function" && p.focus(), p = 0; p < H.length; p++) {
              var L = H[p];
              L.element.scrollLeft = L.left, L.element.scrollTop = L.top;
            }
          }
          Xi = !!qc, Xc = qc = null;
        } finally {
          zt = u, ft.p = s, it.T = a;
        }
      }
      t.current = e, Kt = 2;
    }
  }
  function xc() {
    if (Kt === 2) {
      Kt = 0;
      var t = nn, e = Za, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = it.T, it.T = null;
        var a = ft.p;
        ft.p = 2;
        var s = zt;
        zt |= 4;
        try {
          Bp(t, e.alternate, e);
        } finally {
          zt = s, ft.p = a, it.T = n;
        }
      }
      Kt = 3;
    }
  }
  function Nc() {
    if (Kt === 4 || Kt === 3) {
      Kt = 0;
      var t = Ni;
      Ni = null, J1();
      var e = nn, n = Za, a = bn, s = Ip, u = (a & 335544064) === a ? 10262 : 10256;
      if ((n.subtreeFlags & u) !== 0 || (n.flags & u) !== 0 ? Kt = 5 : (Kt = 0, Za = nn = null, ry(e, e.pendingLanes)), u = e.pendingLanes, u === 0 && (ca = null), jo(a), n = n.stateNode, Ne && typeof Ne.onCommitFiberRoot == "function")
        try {
          Ne.onCommitFiberRoot(
            il,
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
      if (s = zi, f = _i, _i = null, s !== null && (zi = null, f === null && (f = []), t !== null))
        for (T = 0; T < s.length; T++)
          n = (0, s[T])(
            f
          ), n !== void 0 && t.finished.finally(n);
      (bn & 3) !== 0 && zu(), An(e), u = e.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? e === Ou ? jl++ : (jl = 0, Ou = e) : (jl = 0, Ou = null), Yl(0);
    }
  }
  function ry(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Tl(e)));
  }
  function zu() {
    return Ni !== null && (Ni.skipTransition(), Ni = null), Rc(), xc(), Nc(), zc();
  }
  function zc() {
    if (Kt !== 5) return !1;
    var t = nn, e = Mc;
    Mc = 0;
    var n = jo(bn), a = it.T, s = ft.p;
    try {
      ft.p = 32 > n ? 32 : n, it.T = null, n = Cc, Cc = null;
      var u = nn, f = bn;
      if (Kt = 0, Za = nn = null, bn = 0, (zt & 6) !== 0) throw Error(r(331));
      var p = zt;
      if (zt |= 4, Pp(u.current), Qp(
        u,
        u.current,
        f,
        n
      ), zt = p, Yl(0, !1), Ne && typeof Ne.onPostCommitFiberRoot == "function")
        try {
          Ne.onPostCommitFiberRoot(il, u);
        } catch {
        }
      return !0;
    } finally {
      ft.p = s, it.T = a, ry(t, e);
    }
  }
  function cy(t, e, n) {
    e = Xe(n, e), e = Pr(t.stateNode, e, 2), t = na(t, e, 2), t !== null && (sl(t, 2), An(t));
  }
  function wt(t, e, n) {
    if (t.tag === 3)
      cy(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          cy(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ca === null || !ca.has(a))) {
            t = Xe(n, t), n = sp(2), a = na(e, n, 2), a !== null && (up(
              n,
              a,
              e,
              t
            ), sl(a, 2), An(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function _c(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new CT();
      var s = /* @__PURE__ */ new Set();
      a.set(e, s);
    } else
      s = a.get(e), s === void 0 && (s = /* @__PURE__ */ new Set(), a.set(e, s));
    s.has(n) || (bc = !0, s.add(n), t = VT.bind(null, t, e, n), e.then(t, t));
  }
  function VT(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Lt === t && (Ct & n) === n && ((Pt === 4 || Pt === 3 && (Ct & 62914560) === Ct && 300 > xe() - Mu) && (zt & 2) === 0 ? wi(t, 0) : Au |= n, xi === Ct && (xi = 0)), An(t);
  }
  function fy(t, e) {
    e === 0 && (e = kh()), t = Ra(t, e), t !== null && (sl(t, e), An(t));
  }
  function wT(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), fy(t, n);
  }
  function UT(t, e) {
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
    a !== null && a.delete(e), fy(t, n);
  }
  function BT(t, e) {
    return Uo(t, e);
  }
  var Bi = null, Li = null, Vc = !1, _u = !1, wc = !1, ha = 0;
  function An(t) {
    t !== Li && t.next === null && (Li === null ? Bi = Li = t : Li = Li.next = t), _u = !0, Vc || (Vc = !0, HT());
  }
  function Yl(t, e) {
    if (!wc && _u) {
      wc = !0;
      do
        for (var n = !1, a = Bi; a !== null; ) {
          if (t !== 0) {
            var s = a.pendingLanes;
            if (s === 0) var u = 0;
            else {
              var f = a.suspendedLanes, p = a.pingedLanes;
              u = (1 << 31 - ze(42 | t) + 1) - 1, u &= s & ~(f & ~p), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, py(a, u));
          } else
            u = Ct, u = As(
              a,
              a === Lt ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || ll(a, u) || (n = !0, py(a, u));
          a = a.next;
        }
      while (n);
      wc = !1;
    }
  }
  function LT() {
    hy();
  }
  function hy() {
    _u = Vc = !1;
    var t = 0;
    ha !== 0 && FT() && (t = ha);
    for (var e = xe(), n = null, a = Bi; a !== null; ) {
      var s = a.next, u = dy(a, e);
      u === 0 ? (a.next = null, n === null ? Bi = s : n.next = s, s === null && (Li = n)) : (n = a, (t !== 0 || (u & 3) !== 0) && (_u = !0)), a = s;
    }
    Kt !== 0 && Kt !== 5 || Yl(t), ha !== 0 && (ha = 0);
  }
  function dy(t, e) {
    for (var n = t.suspendedLanes, a = t.pingedLanes, s = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var f = 31 - ze(u), p = 1 << f, T = s[f];
      T === -1 ? ((p & n) === 0 || (p & a) !== 0) && (s[f] = eS(p, e)) : T <= e && (t.expiredLanes |= p), u &= ~p;
    }
    if (e = Lt, n = Ct, n = As(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, n === 0 || t === e && (Vt === 2 || Vt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && Bo(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || ll(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (a !== null && Bo(a), jo(n)) {
        case 2:
        case 8:
          n = Jh;
          break;
        case 32:
          n = Ss;
          break;
        case 268435456:
          n = Ph;
          break;
        default:
          n = Ss;
      }
      return a = my.bind(null, t), n = Uo(n, a), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return a !== null && a !== null && Bo(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function my(t, e) {
    if (Kt !== 0 && Kt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (zu() && t.callbackNode !== n)
      return null;
    var a = Ct;
    return a = As(
      t,
      t === Lt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : ($p(t, a, e), dy(t, xe()), t.callbackNode != null && t.callbackNode === n ? my.bind(null, t) : null);
  }
  function py(t, e) {
    if (zu()) return null;
    $p(t, e, !0);
  }
  function HT() {
    IT(function() {
      (zt & 6) !== 0 ? Uo(
        Kh,
        LT
      ) : hy();
    });
  }
  function Uc() {
    if (ha === 0) {
      var t = wa;
      t === 0 && (t = Ts, Ts <<= 1, (Ts & 261888) === 0 && (Ts = 256)), ha = t;
    }
    return ha;
  }
  function yy(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Rs(t);
  }
  function jT(t, e, n, a, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var u = yy(
        (s[be] || null).action
      ), f = a.submitter;
      f && (e = (e = f[be] || null) ? yy(e.formAction) : f.getAttribute("formAction"), e !== null && (u = e, f = null));
      var p = new _s(
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
                if (ha !== 0) {
                  var T = new FormData(s, f);
                  Xr(
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
                typeof u == "function" && (p.preventDefault(), T = new FormData(s, f), Xr(
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
  for (var Bc = 0; Bc < ur.length; Bc++) {
    var Lc = ur[Bc], YT = Lc.toLowerCase(), GT = Lc[0].toUpperCase() + Lc.slice(1);
    We(
      YT,
      "on" + GT
    );
  }
  We(qd, "onAnimationEnd"), We(Xd, "onAnimationIteration"), We(Zd, "onAnimationStart"), We("dblclick", "onDoubleClick"), We("focusin", "onFocus"), We("focusout", "onBlur"), We(kS, "onTransitionRun"), We(IS, "onTransitionStart"), We(WS, "onTransitionCancel"), We(Qd, "onTransitionEnd"), li("onMouseEnter", ["mouseout", "mouseover"]), li("onMouseLeave", ["mouseout", "mouseover"]), li("onPointerEnter", ["pointerout", "pointerover"]), li("onPointerLeave", ["pointerout", "pointerover"]), Ca(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ca(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ca("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ca(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ca(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ca(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Gl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), qT = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gl)
  );
  function gy(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n], s = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var f = a.length - 1; 0 <= f; f--) {
            var p = a[f], T = p.instance, D = p.currentTarget;
            if (p = p.listener, T !== u && s.isPropagationStopped())
              break t;
            u = p, s.currentTarget = D;
            try {
              u(s);
            } catch (_) {
              Us(_);
            }
            s.currentTarget = null, u = T;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (p = a[f], T = p.instance, D = p.currentTarget, p = p.listener, T !== u && s.isPropagationStopped())
              break t;
            u = p, s.currentTarget = D;
            try {
              u(s);
            } catch (_) {
              Us(_);
            }
            s.currentTarget = null, u = T;
          }
      }
    }
  }
  function Mt(t, e) {
    var n = e[nd];
    n === void 0 && (n = e[nd] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    n.has(a) || (vy(e, t, 2, !1), n.add(a));
  }
  function Hc(t, e, n) {
    var a = 0;
    e && (a |= 4), vy(
      n,
      t,
      a,
      e
    );
  }
  var Vu = "_reactListening" + Math.random().toString(36).slice(2);
  function jc(t) {
    if (!t[Vu]) {
      t[Vu] = !0, ld.forEach(function(n) {
        n !== "selectionchange" && (qT.has(n) || Hc(n, !1, t), Hc(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Vu] || (e[Vu] = !0, Hc("selectionchange", !1, e));
    }
  }
  function vy(t, e, n, a) {
    switch (ug(e)) {
      case 2:
        var s = wE;
        break;
      case 8:
        s = UE;
        break;
      default:
        s = sf;
    }
    n = s.bind(
      null,
      e,
      n,
      t
    ), s = void 0, !Jo || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0), a ? s !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: s
    }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, {
      passive: s
    }) : t.addEventListener(e, n, !1);
  }
  function Yc(t, e, n, a, s) {
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
            if (f = Ma(p), f === null) return;
            if (T = f.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              a = u = f;
              continue t;
            }
            p = p.parentNode;
          }
        }
        a = a.return;
      }
    vd(function() {
      var D = u, _ = Qo(n), H = [];
      t: {
        var M = Kd.get(t);
        if (M !== void 0) {
          var N = _s, P = t;
          switch (t) {
            case "keypress":
              if (Ns(n) === 0) break t;
            case "keydown":
            case "keyup":
              N = DS;
              break;
            case "focusin":
              P = "focus", N = Io;
              break;
            case "focusout":
              P = "blur", N = Io;
              break;
            case "beforeblur":
            case "afterblur":
              N = Io;
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
              N = Ed;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = mS;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = zS;
              break;
            case qd:
            case Xd:
            case Zd:
              N = gS;
              break;
            case Qd:
              N = VS;
              break;
            case "scroll":
            case "scrollend":
              N = hS;
              break;
            case "wheel":
              N = US;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = SS;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = Ad;
              break;
            case "submit":
              N = xS;
              break;
            case "toggle":
            case "beforetoggle":
              N = LS;
          }
          var lt = (e & 4) !== 0, vt = !lt && (t === "scroll" || t === "scrollend"), C = lt ? M !== null ? M + "Capture" : null : M;
          lt = [];
          for (var A = D, R; A !== null; ) {
            var L = A;
            if (R = L.stateNode, L = L.tag, L !== 5 && L !== 26 && L !== 27 || R === null || C === null || (L = rl(A, C), L != null && lt.push(
              ql(A, L, R)
            )), vt) break;
            A = A.return;
          }
          0 < lt.length && (M = new N(
            M,
            P,
            null,
            n,
            _
          ), H.push({ event: M, listeners: lt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (N = t === "mouseover" || t === "pointerover", M = t === "mouseout" || t === "pointerout", N && n !== Zo && (P = n.relatedTarget || n.fromElement) && (Ma(P) || P[ni]))
            break t;
          (M || N) && (P = _.window === _ ? _ : (N = _.ownerDocument) ? N.defaultView || N.parentWindow : window, M ? (N = n.relatedTarget || n.toElement, M = D, N = N ? Ma(N) : null, N !== null && (vt = h(N), lt = N.tag, N !== vt || lt !== 5 && lt !== 27 && lt !== 6) && (N = null)) : (M = null, N = D), M !== N && (lt = Ed, L = "onMouseLeave", C = "onMouseEnter", A = "mouse", (t === "pointerout" || t === "pointerover") && (lt = Ad, L = "onPointerLeave", C = "onPointerEnter", A = "pointer"), vt = M == null ? P : ol(M), R = N == null ? P : ol(N), P = new lt(
            L,
            A + "leave",
            M,
            n,
            _
          ), P.target = vt, P.relatedTarget = R, L = null, Ma(_) === D && (lt = new lt(
            C,
            A + "enter",
            N,
            n,
            _
          ), lt.target = R, lt.relatedTarget = vt, L = lt), vt = L, lt = M && N ? st(
            M,
            N,
            XT
          ) : null, M !== null && Sy(
            H,
            P,
            M,
            lt,
            !1
          ), N !== null && vt !== null && Sy(
            H,
            vt,
            N,
            lt,
            !0
          )));
        }
        t: {
          if (M = D ? ol(D) : window, N = M.nodeName && M.nodeName.toLowerCase(), N === "select" || N === "input" && M.type === "file")
            var nt = zd;
          else if (xd(M))
            if (_d)
              nt = JS;
            else {
              nt = QS;
              var Dt = ZS;
            }
          else
            N = M.nodeName, !N || N.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? D && Xo(D.elementType) && (nt = zd) : nt = KS;
          if (nt && (nt = nt(t, D))) {
            Nd(
              H,
              nt,
              n,
              _
            );
            break t;
          }
          Dt && Dt(t, M, D);
        }
        switch (Dt = D ? ol(D) : window, t) {
          case "focusin":
            (xd(Dt) || Dt.contentEditable === "true") && (fi = Dt, ir = D, gl = null);
            break;
          case "focusout":
            gl = ir = fi = null;
            break;
          case "mousedown":
            lr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            lr = !1, Yd(H, n, _);
            break;
          case "selectionchange":
            if (FS) break;
          case "keydown":
          case "keyup":
            Yd(H, n, _);
        }
        var rt;
        if ($o)
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
          ci ? Od(t, n) && (ht = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (ht = "onCompositionStart");
        ht && (Md && n.locale !== "ko" && (ci || ht !== "onCompositionStart" ? ht === "onCompositionEnd" && ci && (rt = Sd()) : (Jn = _, Po = "value" in Jn ? Jn.value : Jn.textContent, ci = !0)), Dt = wu(D, ht), 0 < Dt.length && (ht = new bd(
          ht,
          t,
          null,
          n,
          _
        ), H.push({ event: ht, listeners: Dt }), rt ? ht.data = rt : (rt = Rd(n), rt !== null && (ht.data = rt)))), (rt = jS ? YS(t, n) : GS(t, n)) && (ht = wu(D, "onBeforeInput"), 0 < ht.length && (Dt = new bd(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          _
        ), H.push({
          event: Dt,
          listeners: ht
        }), Dt.data = rt)), jT(
          H,
          t,
          D,
          n,
          _
        );
      }
      gy(H, e);
    });
  }
  function ql(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function wu(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var s = t, u = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || u === null || (s = rl(t, n), s != null && a.unshift(
        ql(t, s, u)
      ), s = rl(t, e), s != null && a.push(
        ql(t, s, u)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function XT(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Sy(t, e, n, a, s) {
    for (var u = e._reactName, f = []; n !== null && n !== a; ) {
      var p = n, T = p.alternate, D = p.stateNode;
      if (p = p.tag, T !== null && T === a) break;
      p !== 5 && p !== 26 && p !== 27 || D === null || (T = D, s ? (D = rl(n, u), D != null && f.unshift(
        ql(n, D, T)
      )) : s || (D = rl(n, u), D != null && f.push(
        ql(n, D, T)
      ))), n = n.return;
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var ZT = /\r\n?/g, QT = /\u0000|\uFFFD/g;
  function Ty(t) {
    return (typeof t == "string" ? t : "" + t).replace(ZT, `
`).replace(QT, "");
  }
  function Ey(t, e) {
    return e = Ty(e), Ty(t) === e;
  }
  function Ut(t, e, n, a, s, u) {
    switch (n) {
      case "children":
        if (typeof a == "string")
          e === "body" || e === "textarea" && a === "" || ui(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          e !== "body" && ui(t, "" + a);
        else return;
        break;
      case "className":
        Os(t, "class", a);
        break;
      case "tabIndex":
        Os(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Os(t, n, a);
        break;
      case "style":
        yd(t, a, u);
        return;
      case "data":
        if (e !== "object") {
          Os(t, "data", a);
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
        a = Rs(a), t.setAttribute(n, a);
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
        a = Rs(a), t.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (t.onclick = dn);
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
        n = Rs(a), t.setAttributeNS(
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
        Mt("beforetoggle", t), Mt("toggle", t), Ds(t, "popover", a);
        break;
      case "xlinkActuate":
        On(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        On(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        On(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        On(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        On(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        On(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        On(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        On(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        On(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Ds(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N")
          n = cS.get(n) || n, Ds(t, n, a);
        else return;
    }
    Nt = !0;
  }
  function Gc(t, e, n, a, s, u) {
    switch (n) {
      case "style":
        yd(t, a, u);
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
        if (typeof a == "string") ui(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          ui(t, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && Mt("scroll", t);
        return;
      case "onScrollEnd":
        a != null && Mt("scrollend", t);
        return;
      case "onClick":
        a != null && (t.onclick = dn);
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
        if (!sd.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"), u = n.slice(2, s ? n.length - 7 : void 0), e = t[be] || null, e = e != null ? e[n] : null, typeof e == "function" && t.removeEventListener(u, e, s), typeof a == "function")) {
              typeof e != "function" && e !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(u, a, s);
              break t;
            }
            Nt = !0, n in t ? t[n] = a : a === !0 ? t.setAttribute(n, "") : Ds(t, n, a);
          }
        return;
    }
    Nt = !0;
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
        var p = u = f = s = null, T = null, D = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var _ = n[a];
            if (_ != null)
              switch (a) {
                case "name":
                  s = _;
                  break;
                case "type":
                  f = _;
                  break;
                case "checked":
                  T = _;
                  break;
                case "defaultChecked":
                  D = _;
                  break;
                case "value":
                  u = _;
                  break;
                case "defaultValue":
                  p = _;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (_ != null)
                    throw Error(r(137, e));
                  break;
                default:
                  Ut(t, e, a, _, n, null);
              }
          }
        hd(
          t,
          u,
          p,
          T,
          D,
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
        e = u, n = f, t.multiple = !!a, e != null ? si(t, !!a, e, !1) : n != null && si(t, !!a, n, !0);
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
        md(t, a, s, u);
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
        for (a = 0; a < Gl.length; a++)
          Mt(Gl[a], t);
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
        for (D in n)
          if (n.hasOwnProperty(D) && (a = n[D], a != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Ut(t, e, D, a, n, null);
            }
        return;
      default:
        if (Xo(e)) {
          for (_ in n)
            n.hasOwnProperty(_) && (a = n[_], a !== void 0 && Gc(
              t,
              e,
              _,
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
  var KT = {};
  function JT(t, e, n, a) {
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
        var s = null, u = null, f = null, p = null, T = null, D = null, _ = null;
        for (N in n) {
          var H = n[N];
          if (n.hasOwnProperty(N) && H != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = H;
              default:
                a.hasOwnProperty(N) || Ut(t, e, N, null, a, H);
            }
        }
        for (var M in a) {
          var N = a[M];
          if (H = n[M], a.hasOwnProperty(M) && (N != null || H != null))
            switch (M) {
              case "type":
                N !== H && (Nt = !0), u = N;
                break;
              case "name":
                N !== H && (Nt = !0), s = N;
                break;
              case "checked":
                N !== H && (Nt = !0), D = N;
                break;
              case "defaultChecked":
                N !== H && (Nt = !0), _ = N;
                break;
              case "value":
                N !== H && (Nt = !0), f = N;
                break;
              case "defaultValue":
                N !== H && (Nt = !0), p = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(r(137, e));
                break;
              default:
                N !== H && Ut(
                  t,
                  e,
                  M,
                  N,
                  a,
                  H
                );
            }
        }
        Go(
          t,
          f,
          p,
          T,
          D,
          _,
          u,
          s
        );
        return;
      case "select":
        N = f = p = M = null;
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
                u !== T && (Nt = !0), M = u;
                break;
              case "defaultValue":
                u !== T && (Nt = !0), p = u;
                break;
              case "multiple":
                u !== T && (Nt = !0), f = u;
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
        e = p, n = f, a = N, M != null ? si(t, !!n, M, !1) : !!a != !!n && (e != null ? si(t, !!n, e, !0) : si(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        N = M = null;
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
                s !== u && (Nt = !0), M = s;
                break;
              case "defaultValue":
                s !== u && (Nt = !0), N = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                s !== u && Ut(t, e, f, s, a, u);
            }
        dd(t, M, N);
        return;
      case "option":
        for (var P in n)
          if (M = n[P], n.hasOwnProperty(P) && M != null && !a.hasOwnProperty(P))
            switch (P) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Ut(
                  t,
                  e,
                  P,
                  null,
                  a,
                  M
                );
            }
        for (T in a)
          if (M = a[T], N = n[T], a.hasOwnProperty(T) && M !== N && (M != null || N != null))
            switch (T) {
              case "selected":
                M !== N && (Nt = !0), t.selected = M && typeof M != "function" && typeof M != "symbol";
                break;
              default:
                Ut(
                  t,
                  e,
                  T,
                  M,
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
          M = n[lt], n.hasOwnProperty(lt) && M != null && !a.hasOwnProperty(lt) && Ut(t, e, lt, null, a, M);
        for (D in a)
          if (M = a[D], N = n[D], a.hasOwnProperty(D) && M !== N && (M != null || N != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(r(137, e));
                break;
              default:
                Ut(
                  t,
                  e,
                  D,
                  M,
                  a,
                  N
                );
            }
        return;
      default:
        if (Xo(e)) {
          for (var vt in n)
            M = n[vt], n.hasOwnProperty(vt) && M !== void 0 && !a.hasOwnProperty(vt) && Gc(
              t,
              e,
              vt,
              void 0,
              a,
              M
            );
          for (_ in a)
            M = a[_], N = n[_], !a.hasOwnProperty(_) || M === N || M === void 0 && N === void 0 || Gc(
              t,
              e,
              _,
              M,
              a,
              N
            );
          return;
        }
    }
    for (var C in n)
      M = n[C], n.hasOwnProperty(C) && M != null && !a.hasOwnProperty(C) && Ut(t, e, C, null, a, M);
    for (H in a)
      M = a[H], N = n[H], !a.hasOwnProperty(H) || M === N || M == null && N == null || Ut(t, e, H, M, a, N);
  }
  function by(t) {
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
  function PT() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var s = n[a], u = s.transferSize, f = s.initiatorType, p = s.duration;
        if (u && p && by(f)) {
          for (f = 0, p = s.responseEnd, a += 1; a < n.length; a++) {
            var T = n[a], D = T.startTime;
            if (D > p) break;
            var _ = T.transferSize, H = T.initiatorType;
            _ && by(H) && (T = T.responseEnd, f += _ * (T < p ? 1 : (p - D) / (T - D)));
          }
          if (--a, e += 8 * (u + f) / (s.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var qc = null, Xc = null;
  function Xl(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Ay(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function My(t, e) {
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
  function Cy(t, e, n, a) {
    return n = Xl(
      n
    ).createElement(t), n[re] = a, n[be] = e, me(n, t, e), ie(n), n;
  }
  function Zc(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Qc = null;
  function FT() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Qc ? !1 : (Qc = t, !0) : (Qc = null, !1);
  }
  var Kc = typeof setTimeout == "function" ? setTimeout : void 0, kT = typeof clearTimeout == "function" ? clearTimeout : void 0, Dy = typeof Promise == "function" ? Promise : void 0, Oy = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Kc, IT = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dy < "u" ? function(t) {
    return Dy.resolve(null).then(t).catch(WT);
  } : Kc;
  function WT(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function da(t) {
    return t === "head";
  }
  function Ry(t, e) {
    var n = e, a = 0;
    do {
      var s = n.nextSibling;
      if (t.removeChild(n), s && s.nodeType === 8)
        if (n = s.data, n === "/$" || n === "/&") {
          if (a === 0) {
            t.removeChild(s), Zi(e);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          tf(
            t.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = t.ownerDocument.head, tf(n);
          for (var u = n.firstChild; u; ) {
            var f = u.nextSibling, p = u.nodeName;
            u[ul] || p === "SCRIPT" || p === "STYLE" || p === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = f;
          }
        } else
          n === "body" && tf(t.ownerDocument.body);
      n = s;
    } while (n);
    Zi(e);
  }
  function xy(t, e) {
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
  function Ny(t, e, n) {
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
  function zy(t, e) {
    t = t.style, e = e.style;
    var n = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (n = e.display, t.display = n == null || typeof n == "boolean" ? "" : n, n = e.margin, n != null ? t.margin = n : (n = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = n == null || typeof n == "boolean" ? "" : n, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function $T(t, e, n) {
    return n = n.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= n.innerHeight && t.left <= n.innerWidth
    };
  }
  function Jc(t) {
    var e = t.getBoundingClientRect(), n = getComputedStyle(t);
    return $T(e, n, t);
  }
  function tE(t) {
    return t.documentElement.clientHeight;
  }
  function eE(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function nE(t, e, n, a, s, u, f, p, T) {
    var D = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var _ = D.startViewTransition({
        update: function() {
          var M = D.defaultView, N = M.navigation && M.navigation.transition, P = D.fonts.status;
          a();
          var lt = [];
          if (P === "loaded" && (tE(D), D.fonts.status === "loading" && lt.push(D.fonts.ready)), P = lt.length, t !== null)
            for (var vt = t.suspenseyImages, C = 0, A = 0; A < vt.length; A++) {
              var R = vt[A];
              if (!R.complete) {
                var L = R.getBoundingClientRect();
                if (0 < L.bottom && 0 < L.right && L.top < M.innerHeight && L.left < M.innerWidth) {
                  if (C += Wy(R), C > Lu) {
                    lt.length = P;
                    break;
                  }
                  R = new Promise(
                    eE.bind(R)
                  ), lt.push(R);
                }
              }
            }
          if (0 < lt.length)
            return M = Promise.race([
              Promise.all(lt),
              new Promise(function(nt) {
                return setTimeout(nt, 500);
              })
            ]).then(s, s), (N ? Promise.allSettled([N.finished, M]) : M).then(u, u);
          if (s(), N)
            return N.finished.then(
              u,
              u
            );
          u();
        },
        types: n
      });
      D.__reactViewTransition = _;
      var H = [];
      return _.ready.then(
        function() {
          for (var M = D.documentElement.getAnimations({
            subtree: !0
          }), N = 0; N < M.length; N++) {
            var P = M[N], lt = P.effect, vt = lt.pseudoElement;
            if (vt != null && vt.startsWith("::view-transition")) {
              H.push(P), P = lt.getKeyframes();
              for (var C = vt = void 0, A = !0, R = 0; R < P.length; R++) {
                var L = P[R], nt = L.width;
                if (vt === void 0) vt = nt;
                else if (vt !== nt) {
                  A = !1;
                  break;
                }
                if (nt = L.height, C === void 0) C = nt;
                else if (C !== nt) {
                  A = !1;
                  break;
                }
                delete L.width, delete L.height, L.transform === "none" && delete L.transform;
              }
              A && vt !== void 0 && C !== void 0 && (lt.setKeyframes(P), A = getComputedStyle(
                lt.target,
                lt.pseudoElement
              ), A.width !== vt || A.height !== C) && (A = P[0], A.width = vt, A.height = C, A = P[P.length - 1], A.width = vt, A.height = C, lt.setKeyframes(P));
            }
          }
          f();
        },
        function(M) {
          D.__reactViewTransition === _ && (D.__reactViewTransition = null);
          try {
            if (typeof M == "object" && M !== null)
              switch (M.name) {
                case "InvalidStateError":
                  (M.message === "View transition was skipped because document visibility state is hidden." || M.message === "Skipping view transition because document visibility state has become hidden." || M.message === "Skipping view transition because viewport size changed." || M.message === "Transition was aborted because of invalid state") && (M = null);
              }
            M !== null && T(M);
          } finally {
            a(), s(), f();
          }
        }
      ), _.finished.finally(function() {
        for (var M = 0; M < H.length; M++)
          H[M].cancel();
        D.__reactViewTransition === _ && (D.__reactViewTransition = null), p();
      }), _;
    } catch {
      return a(), s(), f(), null;
    }
  }
  function Qa(t, e) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + e + ")";
  }
  Qa.prototype.animate = function(t, e) {
    return e = typeof e == "number" ? { duration: e } : w({}, e), e.pseudoElement = this._selector, this._scope.animate(t, e);
  }, Qa.prototype.getAnimations = function() {
    for (var t = this._scope, e = this._selector, n = t.getAnimations({ subtree: !0 }), a = [], s = 0; s < n.length; s++) {
      var u = n[s].effect;
      u !== null && u.target === t && u.pseudoElement === e && a.push(n[s]);
    }
    return a;
  }, Qa.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function _y(t) {
    return {
      name: t,
      group: new Qa("group", t),
      imagePair: new Qa("image-pair", t),
      old: new Qa("old", t),
      new: new Qa("new", t)
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
      if (wy(u, t, e, n) === -1) {
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
        ), a.addEventListener("abort", s, { once: !0 }), s = a.removeEventListener.bind(a, "abort", s)), a = Hi(n), u.push({
          type: t,
          listener: e,
          optionsOrUseCapture: n,
          attachedListener: p,
          cleanup: s
        }), y(
          this._fragmentFiber.child,
          !1,
          aE,
          t,
          p,
          a
        );
      }
      this._eventListeners = u;
    }
  };
  function aE(t, e, n, a) {
    return z(t).addEventListener(
      e,
      n,
      a
    ), !1;
  }
  je.prototype.removeEventListener = function(t, e, n) {
    var a = this._eventListeners;
    if (a !== null && (e = wy(
      a,
      t,
      e,
      n
    ), e !== -1)) {
      var s = a[e];
      n = s.attachedListener;
      var u = s.cleanup;
      s = Hi(s.optionsOrUseCapture), y(
        this._fragmentFiber.child,
        !1,
        iE,
        t,
        n,
        s
      ), a.splice(e, 1), u !== null && u();
    }
  };
  function iE(t, e, n, a) {
    return z(t).removeEventListener(
      e,
      n,
      a
    ), !1;
  }
  function Hi(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function Vy(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function wy(t, e, n, a) {
    if (t.length === 0) return -1;
    a = Vy(a);
    for (var s = 0; s < t.length; s++) {
      var u = t[s];
      if (u.type === e && u.listener === n && Vy(u.optionsOrUseCapture) === a)
        return s;
    }
    return -1;
  }
  je.prototype.dispatchEvent = function(t) {
    var e = b(
      this._fragmentFiber
    );
    if (e === null) return !0;
    e = z(e);
    var n = this._eventListeners;
    if (n !== null && 0 < n.length || !t.bubbles) {
      var a = e.nodeType === 9 ? e.createComment("") : document.createTextNode("");
      if (n)
        for (var s = 0; s < n.length; s++) {
          var u = n[s];
          a.addEventListener(
            u.type,
            u.attachedListener,
            Hi(u.optionsOrUseCapture)
          );
        }
      if (e.appendChild(a), t = a.dispatchEvent(t), n)
        for (s = 0; s < n.length; s++)
          u = n[s], a.removeEventListener(
            u.type,
            u.attachedListener,
            Hi(u.optionsOrUseCapture)
          );
      return e.removeChild(a), t;
    }
    return e.dispatchEvent(t);
  }, je.prototype.focus = function(t) {
    y(
      this._fragmentFiber.child,
      !0,
      Uy,
      t,
      void 0,
      void 0
    );
  };
  function Uy(t, e) {
    return t.tag === 6 ? !1 : (t = z(t), yE(t, e));
  }
  je.prototype.focusLast = function(t) {
    var e = [];
    y(
      this._fragmentFiber.child,
      !0,
      Pc,
      e,
      void 0,
      void 0
    );
    for (var n = e.length - 1; 0 <= n && !Uy(e[n], t); n--) ;
  };
  function Pc(t, e) {
    return e.push(t), !1;
  }
  je.prototype.blur = function() {
    var t = b(
      this._fragmentFiber
    );
    t !== null && (t = z(t), t = Xl(t).activeElement, t !== null && y(
      this._fragmentFiber.child,
      !1,
      lE,
      t,
      void 0,
      void 0
    ));
  };
  function lE(t, e) {
    return t.tag === 6 ? !1 : (t = z(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  je.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), y(
      this._fragmentFiber.child,
      !1,
      sE,
      t,
      void 0,
      void 0
    );
  };
  function sE(t, e) {
    return t.tag === 6 || (t = z(t), e.observe(t)), !1;
  }
  je.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), y(
        this._fragmentFiber.child,
        !1,
        uE,
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
  function uE(t, e) {
    return t.tag === 6 || (t = z(t), e.unobserve(t)), !1;
  }
  var an = [], Fc = !1;
  function oE(t, e, n) {
    an.push({
      fragmentInstance: t,
      observer: e,
      instance: n
    }), Fc || (Fc = !0, gE(function() {
      Fc = !1;
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
      rE,
      t,
      void 0,
      void 0
    ), t;
  };
  function rE(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var n = t.ownerDocument.createRange();
      n.selectNodeContents(t), e.push.apply(e, n.getClientRects());
    } else
      t = z(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  je.prototype.getRootNode = function(t) {
    var e = b(
      this._fragmentFiber
    );
    return e === null ? this : z(e).getRootNode(t);
  }, je.prototype.compareDocumentPosition = function(t) {
    var e = b(
      this._fragmentFiber
    );
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    y(
      this._fragmentFiber.child,
      !1,
      Pc,
      n,
      void 0,
      void 0
    );
    var a = z(e);
    if (n.length === 0) {
      if (n = a, O(this._fragmentFiber)) {
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
      return n === t ? s = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = x(e)[1], n === null ? s = Node.DOCUMENT_POSITION_PRECEDING : (t = z(n).compareDocumentPosition(
        t
      ), s = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), s |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = z(n[0]), s = z(n[n.length - 1]);
    var u = O(this._fragmentFiber) ? e.parentElement : a;
    if (u == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = u.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, u = u.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var f = e.compareDocumentPosition(t), p = s.compareDocumentPosition(t), T = f & Node.DOCUMENT_POSITION_CONTAINED_BY || p & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return p = a && u && f & Node.DOCUMENT_POSITION_FOLLOWING && p & Node.DOCUMENT_POSITION_PRECEDING, e = a && e === t || u && s === t || T || p ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && e === t || !u && s === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : f, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || cE(
      e,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      t
    ) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function cE(t, e, n, a, s) {
    var u = Ma(s);
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
  function By(t, e) {
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
      Pc,
      e,
      void 0,
      void 0
    );
    var n = t !== !1;
    if (e.length === 0) {
      var a = x(
        this._fragmentFiber
      );
      if (a = n ? a[1] || a[0] || b(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        t = z(a), By(t, n);
        return;
      }
      if (a = z(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          n = "host" in a ? a.host : null, n !== null && n.scrollIntoView(t);
          return;
        }
        a.scrollIntoView(t);
      }
    }
    for (a = n ? e.length - 1 : 0; a !== (n ? -1 : e.length); ) {
      var s = e[a];
      s.tag === 6 ? (s = z(s), By(s, n)) : z(s).scrollIntoView(t), a += n ? -1 : 1;
    }
  };
  function fE(t, e) {
    return t = z(t), Ly(t, e), !1;
  }
  function Ly(t, e) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(e);
  }
  function Hy(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = n[a];
        t.addEventListener(
          s.type,
          s.attachedListener,
          Hi(s.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(u) {
      for (var f = 0, p = 0; p < an.length; p++) {
        var T = an[p];
        (T.fragmentInstance !== e || T.observer !== u || T.instance !== t) && (an[f++] = T);
      }
      an.length = f, u.observe(t);
    }), Ly(t, e));
  }
  function hE(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = n[a];
        t.removeEventListener(
          s.type,
          s.attachedListener,
          Hi(s.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(u) {
      typeof u.rootMargin == "string" ? oE(
        e,
        u,
        t
      ) : u.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function kc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          kc(n), Cs(n);
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
  function dE(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[ul])
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
      if (t = Pe(t.nextSibling), t === null) break;
    }
    return null;
  }
  function mE(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = Pe(t.nextSibling), t === null)) return null;
    return t;
  }
  function jy(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Pe(t.nextSibling), t === null)) return null;
    return t;
  }
  function Ic(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Wc(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function pE(t, e) {
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
  function Pe(t) {
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
  var $c = null;
  function Yy(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0)
            return Pe(t.nextSibling);
          e--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Gy(t) {
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
  function yE(t, e) {
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
  function gE(t) {
    Oy(function() {
      Oy(function(e) {
        return t(e);
      });
    });
  }
  function qy(t, e, n) {
    switch (e = Xl(n), t) {
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
  function Xy(t, e, n) {
    for (var a in n) {
      var s = n[a];
      n.hasOwnProperty(a) && s != null && Ut(t, e, a, null, KT, s);
    }
    n.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === dn && (t.onclick = null), Cs(t);
  }
  function tf(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Cs(t);
  }
  var Fe = /* @__PURE__ */ new Map(), Zy = /* @__PURE__ */ new Set();
  function Zl(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Yn = ft.d;
  ft.d = {
    f: vE,
    r: SE,
    D: TE,
    C: EE,
    L: bE,
    m: AE,
    X: CE,
    S: ME,
    M: DE
  };
  function vE() {
    var t = Yn.f(), e = Ru();
    return t || e;
  }
  function SE(t) {
    var e = ai(t);
    e !== null && e.tag === 5 && e.type === "form" ? Km(e) : Yn.r(t);
  }
  var ji = typeof document > "u" ? null : document;
  function Qy(t, e, n) {
    var a = ji;
    if (a && typeof e == "string" && e) {
      var s = Ge(e);
      s = 'link[rel="' + t + '"][href="' + s + '"]', typeof n == "string" && (s += '[crossorigin="' + n + '"]'), Zy.has(s) || (Zy.add(s), t = { rel: t, crossOrigin: n, href: e }, a.querySelector(s) === null && (e = a.createElement("link"), me(e, "link", t), ie(e), a.head.appendChild(e)));
    }
  }
  function TE(t) {
    Yn.D(t), Qy("dns-prefetch", t, null);
  }
  function EE(t, e) {
    Yn.C(t, e), Qy("preconnect", t, e);
  }
  function bE(t, e, n) {
    Yn.L(t, e, n);
    var a = ji;
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
          u = Yi(t);
          break;
        case "script":
          u = Gi(t);
      }
      if (!(Fe.has(u) || (t = w(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), Fe.set(u, t), a.querySelector(s) !== null || e === "style" && a.querySelector(Ql(u)) || e === "script" && a.querySelector(Kl(u))))) {
        var f = a.createElement("link");
        me(f, "link", t), e === "style" && (f[Ms] = !0, f.onload = f.onerror = function() {
          id(f);
        }), ie(f), a.head.appendChild(f);
      }
    }
  }
  function AE(t, e) {
    Yn.m(t, e);
    var n = ji;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", s = 'link[rel="modulepreload"][as="' + Ge(a) + '"][href="' + Ge(t) + '"]', u = s;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Gi(t);
      }
      if (!Fe.has(u) && (t = w({ rel: "modulepreload", href: t }, e), Fe.set(u, t), n.querySelector(s) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Kl(u)))
              return;
        }
        a = n.createElement("link"), me(a, "link", t), ie(a), n.head.appendChild(a);
      }
    }
  }
  function ME(t, e, n) {
    Yn.S(t, e, n);
    var a = ji;
    if (a && t) {
      var s = ii(a).hoistableStyles, u = Yi(t);
      e = e || "default";
      var f = s.get(u);
      if (!f) {
        var p = { loading: 0, preload: null };
        if (f = a.querySelector(
          Ql(u)
        ))
          p.loading = 5;
        else {
          t = w(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = Fe.get(u)) && ef(t, n);
          var T = f = a.createElement("link");
          ie(T), me(T, "link", t), T._p = new Promise(function(D, _) {
            T.onload = D, T.onerror = _;
          }), T.addEventListener("load", function() {
            p.loading |= 1;
          }), T.addEventListener("error", function() {
            p.loading |= 2;
          }), p.loading |= 4, Uu(f, e, a);
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
  function CE(t, e) {
    Yn.X(t, e);
    var n = ji;
    if (n && t) {
      var a = ii(n).hoistableScripts, s = Gi(t), u = a.get(s);
      u || (u = n.querySelector(Kl(s)), u || (t = w({ src: t, async: !0 }, e), (e = Fe.get(s)) && nf(t, e), u = n.createElement("script"), ie(u), me(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(s, u));
    }
  }
  function DE(t, e) {
    Yn.M(t, e);
    var n = ji;
    if (n && t) {
      var a = ii(n).hoistableScripts, s = Gi(t), u = a.get(s);
      u || (u = n.querySelector(Kl(s)), u || (t = w({ src: t, async: !0, type: "module" }, e), (e = Fe.get(s)) && nf(t, e), u = n.createElement("script"), ie(u), me(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(s, u));
    }
  }
  function Ky(t, e, n, a) {
    var s = (s = Zn.current) ? Zl(s) : null;
    if (!s) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Yi(n.href), e = ii(
          s
        ).hoistableStyles, a = e.get(n), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = Yi(n.href);
          var u = ii(
            s
          ).hoistableStyles, f = u.get(t);
          if (f || (s = s.ownerDocument || s, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, f), (u = s.querySelector(
            Ql(t)
          )) ? u._p || (f.instance = u, f.state.loading = 5) : (u = Fe.get(t), u || (u = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Fe.set(t, u)), OE(
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
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (n = Gi(n), e = ii(
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
  function Yi(t) {
    return 'href="' + Ge(t) + '"';
  }
  function Ql(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Jy(t) {
    return w({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function OE(t, e, n, a) {
    if (e = t.querySelector(
      'link[rel="preload"][as="style"][' + e + "]"
    )) {
      if (e[Ms] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      e = t.createElement("link"), e[Ms] = !0, e.onload = e.onerror = id.bind(null, e), me(e, "link", n), ie(e), t.head.appendChild(e);
    a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function Gi(t) {
    return '[src="' + Ge(t) + '"]';
  }
  function Kl(t) {
    return "script[async]" + t;
  }
  function Py(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + Ge(n.href) + '"]'
          );
          if (a)
            return e.instance = a, ie(a), a;
          var s = w({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), ie(a), me(a, "style", s), Uu(a, n.precedence, t), e.instance = a;
        case "stylesheet":
          s = Yi(n.href);
          var u = t.querySelector(
            Ql(s)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, ie(u), u;
          a = Jy(n), (s = Fe.get(s)) && ef(a, s), u = (t.ownerDocument || t).createElement("link"), ie(u);
          var f = u;
          return f._p = new Promise(function(p, T) {
            f.onload = p, f.onerror = T;
          }), me(u, "link", a), e.state.loading |= 4, Uu(u, n.precedence, t), e.instance = u;
        case "script":
          return u = Gi(n.src), (s = t.querySelector(
            Kl(u)
          )) ? (e.instance = s, ie(s), s) : (a = n, (s = Fe.get(u)) && (a = w({}, n), nf(a, s)), t = t.ownerDocument || t, s = t.createElement("script"), ie(s), me(s, "link", a), t.head.appendChild(s), e.instance = s);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Uu(a, n.precedence, t));
    return e.instance;
  }
  function Uu(t, e, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = a.length ? a[a.length - 1] : null, u = s, f = 0; f < a.length; f++) {
      var p = a[f];
      if (p.dataset.precedence === e) u = p;
      else if (u !== s) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function ef(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function nf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Bu = null;
  function Fy(t, e, n) {
    if (Bu === null) {
      var a = /* @__PURE__ */ new Map(), s = Bu = /* @__PURE__ */ new Map();
      s.set(n, a);
    } else
      s = Bu, a = s.get(n), a || (a = /* @__PURE__ */ new Map(), s.set(n, a));
    if (a.has(t)) return a;
    for (a.set(t, null), n = n.getElementsByTagName(t), s = 0; s < n.length; s++) {
      var u = n[s];
      if (!(u[ul] || u[re] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = u.getAttribute(e) || "";
        f = t + f;
        var p = a.get(f);
        p ? p.push(u) : a.set(f, [u]);
      }
    }
    return a;
  }
  function af(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function RE(t, e, n) {
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
  function ky(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function Iy(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Wy(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function $y(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += Wy(e), t.suspenseyImages.push(e)), t = zE.bind(t), e.decode().then(t, t));
  }
  function xE(t, e, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = Yi(a.href), u = e.querySelector(
          Ql(s)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Jl.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = u, ie(u);
          return;
        }
        u = e.ownerDocument || e, a = Jy(a), (s = Fe.get(s)) && ef(a, s), u = u.createElement("link"), ie(u);
        var f = u;
        f._p = new Promise(function(p, T) {
          f.onload = p, f.onerror = T;
        }), me(u, "link", a), n.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = Jl.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var Lu = 0;
  function NE(t, e) {
    return t.stylesheets && t.count === 0 && ju(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (t.stylesheets && ju(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Lu === 0 && (Lu = 62500 * PT());
      var s = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && ju(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > Lu ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(s);
      };
    } : null;
  }
  function tg(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) ju(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function Jl() {
    this.count--, tg(this);
  }
  function zE() {
    this.imgCount--, tg(this);
  }
  var Hu = null;
  function ju(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Hu = /* @__PURE__ */ new Map(), e.forEach(_E, t), Hu = null, Jl.call(t));
  }
  function _E(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Hu.get(t);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Hu.set(t, n);
        for (var s = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < s.length; u++) {
          var f = s[u];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), a = f);
        }
        a && n.set(null, a);
      }
      s = e.instance, f = s.getAttribute("data-precedence"), u = n.get(f) || a, u === a && n.set(null, s), n.set(f, s), this.count++, a = Jl.bind(this), s.addEventListener("load", a), s.addEventListener("error", a), u ? u.parentNode.insertBefore(s, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(s, t.firstChild)), e.state.loading |= 4;
    }
  }
  var qi = {
    $$typeof: J,
    Provider: null,
    Consumer: null,
    _currentValue: Xt,
    _currentValue2: Xt,
    _threadCount: 0
  };
  function VE(t, e, n, a, s, u, f, p, T) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Lo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Lo(0), this.hiddenUpdates = Lo(null), this.identifierPrefix = a, this.onUncaughtError = s, this.onCaughtError = u, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function eg(t, e, n, a, s, u, f, p, T, D, _, H) {
    return t = new VE(
      t,
      e,
      n,
      f,
      T,
      D,
      _,
      H,
      p
    ), e = 1, u === !0 && (e |= 24), u = Ae(3, null, null, e), t.current = u, u.stateNode = t, e = vr(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: e
    }, br(u), t;
  }
  function ng(t) {
    return t ? (t = mi, t) : mi;
  }
  function ag(t, e, n, a, s, u) {
    s = ng(s), a.context === null ? a.context = s : a.pendingContext = s, a = ea(e), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = na(t, a, e), n !== null && (Oe(n, t, e), Ml(n, t, e));
  }
  function ig(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function lf(t, e) {
    ig(t, e), (t = t.alternate) && ig(t, e);
  }
  function lg(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ra(t, 67108864);
      e !== null && Oe(e, t, 67108864), lf(t, 67108864);
    }
  }
  function sg(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = He();
      e = Ho(e);
      var n = Ra(t, e);
      n !== null && Oe(n, t, e), lf(t, e);
    }
  }
  var Xi = !0;
  function wE(t, e, n, a) {
    var s = it.T;
    it.T = null;
    var u = ft.p;
    try {
      ft.p = 2, sf(t, e, n, a);
    } finally {
      ft.p = u, it.T = s;
    }
  }
  function UE(t, e, n, a) {
    var s = it.T;
    it.T = null;
    var u = ft.p;
    try {
      ft.p = 8, sf(t, e, n, a);
    } finally {
      ft.p = u, it.T = s;
    }
  }
  function sf(t, e, n, a) {
    if (Xi) {
      var s = uf(a);
      if (s === null)
        Yc(
          t,
          e,
          a,
          Yu,
          n
        ), og(t, a);
      else if (LE(
        s,
        t,
        e,
        n,
        a
      ))
        a.stopPropagation();
      else if (og(t, a), e & 4 && -1 < BE.indexOf(t)) {
        for (; s !== null; ) {
          var u = ai(s);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var f = Aa(u.pendingLanes);
                  if (f !== 0) {
                    var p = u;
                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; f; ) {
                      var T = 1 << 31 - ze(f);
                      p.entanglements[1] |= T, f &= ~T;
                    }
                    An(u), (zt & 6) === 0 && (Cu = xe() + 500, Yl(0));
                  }
                }
                break;
              case 31:
              case 13:
                p = Ra(u, 2), p !== null && Oe(p, u, 2), Ru(), lf(u, 2);
            }
          if (u = uf(a), u === null && Yc(
            t,
            e,
            a,
            Yu,
            n
          ), u === s) break;
          s = u;
        }
        s !== null && a.stopPropagation();
      } else
        Yc(
          t,
          e,
          a,
          null,
          n
        );
    }
  }
  function uf(t) {
    return t = Qo(t), of(t);
  }
  var Yu = null;
  function of(t) {
    if (Yu = null, t = Ma(t), t !== null) {
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
    return Yu = t, null;
  }
  function ug(t) {
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
        switch (P1()) {
          case Kh:
            return 2;
          case Jh:
            return 8;
          case Ss:
          case F1:
            return 32;
          case Ph:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var rf = !1, ma = null, pa = null, ya = null, Pl = /* @__PURE__ */ new Map(), Fl = /* @__PURE__ */ new Map(), ga = [], BE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function og(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        ma = null;
        break;
      case "dragenter":
      case "dragleave":
        pa = null;
        break;
      case "mouseover":
      case "mouseout":
        ya = null;
        break;
      case "pointerover":
      case "pointerout":
        Pl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Fl.delete(e.pointerId);
    }
  }
  function kl(t, e, n, a, s, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [s]
    }, e !== null && (e = ai(e), e !== null && lg(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, s !== null && e.indexOf(s) === -1 && e.push(s), t);
  }
  function LE(t, e, n, a, s) {
    switch (e) {
      case "focusin":
        return ma = kl(
          ma,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "dragenter":
        return pa = kl(
          pa,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "mouseover":
        return ya = kl(
          ya,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "pointerover":
        var u = s.pointerId;
        return Pl.set(
          u,
          kl(
            Pl.get(u) || null,
            t,
            e,
            n,
            a,
            s
          )
        ), !0;
      case "gotpointercapture":
        return u = s.pointerId, Fl.set(
          u,
          kl(
            Fl.get(u) || null,
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
  function rg(t) {
    var e = Ma(t.target);
    if (e !== null) {
      var n = h(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = d(n), e !== null) {
            t.blockedOn = e, ed(t.priority, function() {
              sg(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = m(n), e !== null) {
            t.blockedOn = e, ed(t.priority, function() {
              sg(n);
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
  function Gu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = uf(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Zo = a, n.target.dispatchEvent(a), Zo = null;
      } else
        return e = ai(n), e !== null && lg(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function cg(t, e, n) {
    Gu(t) && n.delete(e);
  }
  function HE() {
    rf = !1, ma !== null && Gu(ma) && (ma = null), pa !== null && Gu(pa) && (pa = null), ya !== null && Gu(ya) && (ya = null), Pl.forEach(cg), Fl.forEach(cg);
  }
  function qu(t, e) {
    t.blockedOn === e && (t.blockedOn = null, rf || (rf = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      HE
    )));
  }
  var Xu = null;
  function fg(t) {
    Xu !== t && (Xu = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Xu === t && (Xu = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], a = t[e + 1], s = t[e + 2];
          if (typeof a != "function") {
            if (of(a || n) === null)
              continue;
            break;
          }
          var u = ai(n);
          u !== null && (t.splice(e, 3), e -= 3, Xr(
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
  function Zi(t) {
    function e(T) {
      return qu(T, t);
    }
    ma !== null && qu(ma, t), pa !== null && qu(pa, t), ya !== null && qu(ya, t), Pl.forEach(e), Fl.forEach(e);
    for (var n = 0; n < ga.length; n++) {
      var a = ga[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < ga.length && (n = ga[0], n.blockedOn === null); )
      rg(n), n.blockedOn === null && ga.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var s = n[a], u = n[a + 1], f = s[be] || null;
        if (typeof u == "function")
          f || fg(n);
        else if (f) {
          var p = null;
          if (u && u.hasAttribute("formAction")) {
            if (s = u, f = u[be] || null)
              p = f.formAction;
            else if (of(s) !== null) continue;
          } else p = f.action;
          typeof p == "function" ? n[a + 1] = p : (n.splice(a, 3), a -= 3), fg(n);
        }
      }
  }
  function hg() {
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
  function cf(t) {
    this._internalRoot = t;
  }
  Zu.prototype.render = cf.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var n = e.current, a = He();
    ag(n, a, t, e, null, null);
  }, Zu.prototype.unmount = cf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      ag(t.current, 2, null, t, null, null), Ru(), e[ni] = null;
    }
  };
  function Zu(t) {
    this._internalRoot = t;
  }
  Zu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = td();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < ga.length && e !== 0 && e < ga[n].priority; n++) ;
      ga.splice(n, 0, t), n === 0 && rg(t);
    }
  };
  var dg = l.version;
  if (dg !== "19.3.1")
    throw Error(
      r(
        527,
        dg,
        "19.3.1"
      )
    );
  ft.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = S(e), t = t !== null ? v(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var jE = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: it,
    reconcilerVersion: "19.3.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qu.isDisabled && Qu.supportsFiber)
      try {
        il = Qu.inject(
          jE
        ), Ne = Qu;
      } catch {
      }
  }
  return Il.createRoot = function(t, e) {
    if (!c(t)) throw Error(r(299));
    var n = !1, a = "", s = np, u = ap, f = ip;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (s = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError)), e = eg(
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
      hg
    ), t[ni] = e.current, jc(t), new cf(e);
  }, Il.hydrateRoot = function(t, e, n) {
    if (!c(t)) throw Error(r(299));
    var a = !1, s = "", u = np, f = ap, p = ip, T = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (p = n.onRecoverableError), n.formState !== void 0 && (T = n.formState)), e = eg(
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
      hg
    ), e.context = ng(null), n = e.current, a = He(), a = Ho(a), s = ea(a), s.callback = null, na(n, s, a), n = a, e.current.lanes = n, sl(e, n), An(e), t[ni] = e.current, jc(t), new Zu(e);
  }, Il.version = "19.3.1", Il;
}
var Eg;
function PE() {
  if (Eg) return hf.exports;
  Eg = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), hf.exports = JE(), hf.exports;
}
var FE = PE(), yf = { exports: {} }, Wl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bg;
function kE() {
  if (bg) return Wl;
  bg = 1;
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
  return Wl.Fragment = l, Wl.jsx = o, Wl.jsxs = o, Wl;
}
var Ag;
function IE() {
  return Ag || (Ag = 1, yf.exports = kE()), yf.exports;
}
var qn = IE();
const uh = /* @__PURE__ */ Q.createContext({});
function Ao(i) {
  const l = Q.useRef(null);
  return l.current === null && (l.current = i()), l.current;
}
const WE = typeof window < "u", ss = WE ? Q.useLayoutEffect : Q.useEffect, Mo = /* @__PURE__ */ Q.createContext(null);
function oh(i, l) {
  i.indexOf(l) === -1 && i.push(l);
}
function co(i, l) {
  const o = i.indexOf(l);
  o > -1 && i.splice(o, 1);
}
const Cn = (i, l, o) => o > l ? l : o < i ? i : o, cn = {}, rh = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i), iv = (i) => typeof i == "object" && i !== null, ch = (i) => /^0[^.\s]+$/u.test(i);
// @__NO_SIDE_EFFECTS__
function $E(i) {
  let l;
  return () => (l === void 0 && (l = i()), l);
}
const rn = /* @__NO_SIDE_EFFECTS__ */ (i) => i, Ii = (...i) => i.reduce((l, o) => (r) => o(l(r))), Ia = /* @__NO_SIDE_EFFECTS__ */ (i, l, o) => {
  const r = l - i;
  return r ? (o - i) / r : 1;
};
class fo {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return oh(this.subscriptions, l), () => this.remove(l);
  }
  remove(l) {
    co(this.subscriptions, l);
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
const ke = /* @__NO_SIDE_EFFECTS__ */ (i) => i * 1e3, Ye = /* @__NO_SIDE_EFFECTS__ */ (i) => i / 1e3, lv = /* @__NO_SIDE_EFFECTS__ */ (i, l) => l ? i * (1e3 / l) : 0, gf = (i, l, o) => i * (3 * (1 - i) * ((1 - i) * l + i * o) + i * i);
// @__NO_SIDE_EFFECTS__
function ms(i, l, o, r) {
  return i === l && o === r ? rn : (c) => {
    let h = 0, d = 1, m = c;
    for (let g = 0; ; g++) {
      m >= h && m <= d || (m = (h + d) / 2);
      const S = gf(m, i, o) - c;
      if (S * S < 1e-28 || g === 40)
        break;
      S > 0 ? d = m : h = m, m -= S * 1e-7 / (gf(m + 1e-7, i, o) - c - S);
    }
    return gf(m, l, r);
  };
}
const sv = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => l <= 0.5 ? i(2 * l) / 2 : (2 - i(2 * (1 - l))) / 2, uv = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => 1 - i(1 - l), ov = /* @__PURE__ */ ms(0.33, 1.53, 0.69, 0.99), fh = /* @__PURE__ */ uv(ov), rv = /* @__PURE__ */ sv(fh), cv = (i) => i >= 1 ? 1 : (i *= 2) < 1 ? 0.5 * fh(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1))), hh = (i) => 1 - Math.sin(Math.acos(i)), fv = /* @__PURE__ */ uv(hh), hv = /* @__PURE__ */ sv(hh), tb = /* @__PURE__ */ ms(0.42, 0, 1, 1), eb = /* @__PURE__ */ ms(0, 0, 0.58, 1), dh = /* @__PURE__ */ ms(0.42, 0, 0.58, 1), nb = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] != "number", mh = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] == "number", ab = {
  linear: rn,
  easeIn: tb,
  easeInOut: dh,
  easeOut: eb,
  circIn: hh,
  circInOut: hv,
  circOut: fv,
  backIn: fh,
  backInOut: rv,
  backOut: ov,
  anticipate: cv
}, ib = (i) => typeof i == "string", Mg = (i) => {
  if (/* @__PURE__ */ mh(i)) {
    const [l, o, r, c] = i;
    return /* @__PURE__ */ ms(l, o, r, c);
  } else if (ib(i))
    return ab[i];
  return i;
}, ne = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
};
let Wu;
function lb() {
  Wu = void 0;
}
const Qt = {
  now: () => (Wu === void 0 && Qt.set(ne.isProcessing || cn.useManualTiming ? ne.timestamp : performance.now()), Wu),
  set: (i) => {
    Wu = i, queueMicrotask(lb);
  }
}, ki = (i) => Math.round(i * 1e5) / 1e5, dv = (i) => (l) => typeof l == "string" && l.startsWith(i), mv = /* @__PURE__ */ dv("--"), sb = /* @__PURE__ */ dv("var(--"), Co = (i) => sb(i) ? ub.test(i.split("/*")[0].trim()) : !1, ub = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function vf(i) {
  return typeof i != "string" ? !1 : i.split("/*")[0].includes("var(--");
}
const el = {
  test: (i) => typeof i == "number",
  parse: parseFloat,
  transform: (i) => i
}, us = {
  ...el,
  transform: (i) => Cn(0, 1, i)
}, Ku = {
  ...el,
  default: 1
}, ph = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function ob(i) {
  return i == null;
}
const rb = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, yh = (i, l) => (o) => !!(typeof o == "string" && rb.test(o) && o.startsWith(i) || l && !ob(o) && Object.prototype.hasOwnProperty.call(o, l)), pv = (i, l, o) => (r) => {
  if (typeof r != "string")
    return r;
  const [c, h, d, m] = r.match(ph);
  return {
    [i]: parseFloat(c),
    [l]: parseFloat(h),
    [o]: parseFloat(d),
    alpha: m !== void 0 ? parseFloat(m) : 1
  };
}, cb = (i) => Cn(0, 255, i), Sf = {
  ...el,
  transform: (i) => Math.round(cb(i))
}, Ja = {
  test: /* @__PURE__ */ yh("rgb", "red"),
  parse: /* @__PURE__ */ pv("red", "green", "blue"),
  transform: ({ red: i, green: l, blue: o, alpha: r = 1 }) => "rgba(" + Sf.transform(i) + ", " + Sf.transform(l) + ", " + Sf.transform(o) + ", " + ki(us.transform(r)) + ")"
}, Ju = (i, l, o) => {
  const r = i.substring(1 + l * o, 1 + (l + 1) * o);
  return o > 1 ? r : r + r;
};
function fb(i) {
  const l = i.length > 5 ? 2 : 1, o = Ju(i, 3, l);
  return {
    red: parseInt(Ju(i, 0, l), 16),
    green: parseInt(Ju(i, 1, l), 16),
    blue: parseInt(Ju(i, 2, l), 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Bf = {
  test: /* @__PURE__ */ yh("#"),
  parse: fb,
  transform: Ja.transform
}, ps = /* @__NO_SIDE_EFFECTS__ */ (i) => ({
  test: (l) => typeof l == "string" && l.endsWith(i) && l.split(" ").length === 1,
  parse: parseFloat,
  transform: (l) => `${l}${i}`
}), Gn = /* @__PURE__ */ ps("deg"), Mn = /* @__PURE__ */ ps("%"), at = /* @__PURE__ */ ps("px"), hb = /* @__PURE__ */ ps("vh"), db = /* @__PURE__ */ ps("vw"), Cg = {
  ...Mn,
  parse: (i) => Mn.parse(i) / 100,
  transform: (i) => Mn.transform(i * 100)
}, Qi = {
  test: /* @__PURE__ */ yh("hsl", "hue"),
  parse: /* @__PURE__ */ pv("hue", "saturation", "lightness"),
  transform: ({ hue: i, saturation: l, lightness: o, alpha: r = 1 }) => "hsla(" + Math.round(i) + ", " + Mn.transform(ki(l)) + ", " + Mn.transform(ki(o)) + ", " + ki(us.transform(r)) + ")"
}, ae = {
  test: (i) => Ja.test(i) || Bf.test(i) || Qi.test(i),
  parse: (i) => Ja.test(i) ? Ja.parse(i) : Qi.test(i) ? Qi.parse(i) : Bf.parse(i),
  transform: (i) => typeof i == "string" ? i : i.hasOwnProperty("red") ? Ja.transform(i) : Qi.transform(i),
  getAnimatableNone: (i) => {
    const l = ae.parse(i);
    return l.alpha = 0, ae.transform(l);
  }
}, mb = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, yv = /* @__PURE__ */ new RegExp(ph.source), gv = /* @__PURE__ */ new RegExp(mb.source, "i");
function pb(i) {
  return isNaN(i) && typeof i == "string" && (yv.test(i) || gv.test(i));
}
const vv = "number", Sv = "color", yb = "var", gb = "var(", Dg = "${}", vb = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)(?![a-z]*\()/giu;
function Sb(i) {
  const l = i.toString();
  return yv.test(l) || gv.test(l);
}
function os(i) {
  const l = i.toString(), o = [], r = {
    color: [],
    number: [],
    var: []
  }, c = [];
  let h = 0;
  const m = l.replace(vb, (g) => (ae.test(g) ? (r.color.push(h), c.push(Sv), o.push(ae.parse(g))) : g.startsWith(gb) ? (r.var.push(h), c.push(yb), o.push(g)) : (r.number.push(h), c.push(vv), o.push(parseFloat(g))), ++h, Dg)).split(Dg);
  return { values: o, split: m, indexes: r, types: c };
}
function Tb(i) {
  return os(i).values;
}
function gh({ split: i, types: l }) {
  const o = i.length;
  return (r) => {
    let c = "";
    for (let h = 0; h < o; h++)
      if (c += i[h], r[h] !== void 0) {
        const d = l[h];
        d === vv ? c += ki(r[h]) : d === Sv ? c += ae.transform(r[h]) : c += r[h];
      }
    return c;
  };
}
function Eb(i) {
  return gh(os(i));
}
const bb = (i) => typeof i == "number" ? 0 : ae.test(i) ? ae.getAnimatableNone(i) : i, Ab = (i, l) => typeof i == "number" ? l?.trim().endsWith("/") ? i : 0 : bb(i);
function Mb(i) {
  const l = os(i);
  return gh(l)(l.values.map((r, c) => Ab(r, l.split[c])));
}
const Ie = {
  test: pb,
  parse: Tb,
  createTransformer: Eb,
  getAnimatableNone: Mb
};
function Tf(i, l, o) {
  return o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? i + (l - i) * 6 * o : o < 1 / 2 ? l : o < 2 / 3 ? i + (l - i) * (2 / 3 - o) * 6 : i;
}
function Cb({ hue: i, saturation: l, lightness: o, alpha: r }) {
  i /= 360, l /= 100, o /= 100;
  let c = 0, h = 0, d = 0;
  if (!l)
    c = h = d = o;
  else {
    const m = o < 0.5 ? o * (1 + l) : o + l - o * l, g = 2 * o - m;
    c = Tf(g, m, i + 1 / 3), h = Tf(g, m, i), d = Tf(g, m, i - 1 / 3);
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(h * 255),
    blue: Math.round(d * 255),
    alpha: r
  };
}
function ho(i, l) {
  return (o) => o > 0 ? l : i;
}
const Ht = (i, l, o) => i + (l - i) * o, Ef = (i, l, o) => {
  const r = i * i, c = o * (l * l - r) + r;
  return c < 0 ? 0 : Math.sqrt(c);
}, Db = [Bf, Ja, Qi], Ob = (i) => Db.find((l) => l.test(i));
function Og(i) {
  const l = Ob(i);
  if (!l)
    return !1;
  let o = l.parse(i);
  return l === Qi && (o = Cb(o)), o;
}
const Rg = (i, l) => {
  const o = Og(i), r = Og(l);
  if (!o || !r)
    return ho(i, l);
  const c = { ...o };
  return (h) => (c.red = Ef(o.red, r.red, h), c.green = Ef(o.green, r.green, h), c.blue = Ef(o.blue, r.blue, h), c.alpha = Ht(o.alpha, r.alpha, h), Ja.transform(c));
}, Lf = /* @__PURE__ */ new Set(["none", "hidden"]);
function Rb(i, l) {
  return Lf.has(i) ? (o) => o <= 0 ? i : l : (o) => o >= 1 ? l : i;
}
function xb(i, l) {
  return (o) => Ht(i, l, o);
}
function vh(i) {
  return typeof i == "number" ? xb : typeof i == "string" ? Co(i) ? ho : ae.test(i) ? Rg : _b : Array.isArray(i) ? Tv : typeof i == "object" ? ae.test(i) ? Rg : Nb : ho;
}
function Tv(i, l) {
  const o = [...i], r = o.length, c = i.map((h, d) => vh(h)(h, l[d]));
  return (h) => {
    for (let d = 0; d < r; d++)
      o[d] = c[d](h);
    return o;
  };
}
function Nb(i, l) {
  const o = { ...i, ...l }, r = {};
  for (const c in o)
    i[c] !== void 0 && l[c] !== void 0 && (r[c] = vh(i[c])(i[c], l[c]));
  return (c) => {
    for (const h in r)
      o[h] = r[h](c);
    return o;
  };
}
function zb(i, l) {
  const o = [], r = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const h = l.types[c], d = i.indexes[h][r[h]], m = i.values[d] ?? 0;
    o[c] = m, r[h]++;
  }
  return o;
}
const _b = (i, l) => {
  const o = os(i), r = os(l);
  return o.indexes.var.length === r.indexes.var.length && o.indexes.color.length === r.indexes.color.length && o.indexes.number.length >= r.indexes.number.length ? Lf.has(i) && !r.values.length || Lf.has(l) && !o.values.length ? Rb(i, l) : Ii(Tv(zb(o, r), r.values), gh(r)) : ho(i, l);
}, xg = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
function Vb(i, l) {
  const o = xg.exec(i);
  if (!o)
    return;
  const r = xg.exec(l);
  if (!r || o[2] !== r[2])
    return;
  const c = o[2], h = parseFloat(o[1]), d = parseFloat(r[1]);
  return (m) => ki(Ht(h, d, m)) + c;
}
function Sh(i, l, o) {
  if (typeof i == "number" && typeof l == "number" && typeof o == "number")
    return Ht(i, l, o);
  if (typeof i == "string" && typeof l == "string") {
    const c = Vb(i, l);
    if (c)
      return c;
  }
  return vh(i)(i, l);
}
const Pu = [
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
function wb(i) {
  let l = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), r = !1, c = !1, h;
  const d = /* @__PURE__ */ new Set();
  let m = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function g(v) {
    d.has(v) && (o.add(v), i()), (h = v)(m);
  }
  const S = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (v, y = !1, b = !1) => {
      const O = b && r, x = O ? l : o;
      return y && d.add(v), O && v !== h && x.delete(v), x.add(v), v;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (v) => {
      o.delete(v), d.delete(v);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (v) => {
      if (m = v, r) {
        c = !0;
        return;
      }
      r = !0;
      const y = l;
      l = o, o = y, l.forEach(g), l.clear(), h = void 0, r = !1, c && (c = !1, S.process(v));
    }
  };
  return S;
}
const Ub = 40;
function Ev(i, l, o = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
}) {
  let r = !1, c = !0;
  const h = () => r = !0, d = Pu.reduce((k, $) => (k[$] = wb(h), k), {}), { setup: m, read: g, resolveKeyframes: S, preUpdate: v, update: y, preRender: b, render: O, postRender: x } = d, U = () => {
    const k = cn.useManualTiming, $ = k ? o.timestamp : performance.now();
    r = !1, k || (o.delta = c ? 1e3 / 60 : Math.max(Math.min($ - o.timestamp, Ub), 1)), o.timestamp = $, o.isProcessing = !0, m.process(o), g.process(o), S.process(o), v.process(o), y.process(o), b.process(o), O.process(o), x.process(o), o.isProcessing = !1, r && l && (c = !1, i(U));
  }, z = () => {
    r = !0, c = !0, o.isProcessing || i(U);
  };
  return { schedule: Pu.reduce((k, $) => {
    const et = d[$];
    return k[$] = (st, w = !1, Y = !1) => (r || z(), et.schedule(st, w, Y)), k;
  }, {}), cancel: (k) => {
    for (let $ = 0; $ < Pu.length; $++)
      d[Pu[$]].cancel(k);
  }, state: o, steps: d };
}
const { schedule: jt, cancel: Ea, steps: bf } = /* @__PURE__ */ Ev(typeof requestAnimationFrame < "u" ? requestAnimationFrame : rn, !0, ne), bv = (i) => {
  const l = ({ timestamp: o }) => i(o);
  return {
    start: (o = !0) => jt.update(l, o),
    stop: () => Ea(l),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ne.isProcessing ? ne.timestamp : Qt.now()
  };
}, Av = (i, l, o = 10) => {
  let r = "";
  const c = Math.max(Math.round(l / o), 2);
  for (let h = 0; h < c; h++)
    r += Math.round(i(h / (c - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, Th = 2e4;
function Eh(i, l = 50, o = Th, r) {
  let c = 0, h = i.next(c);
  for (; !h.done && c < o; )
    c += l, h = i.next(c);
  return c >= o ? 1 / 0 : c;
}
function Bb(i, l = 100, o) {
  const { keyframes: r, velocity: c } = i, h = r && r[r.length - 1] - r[0], d = o({
    ...i,
    velocity: c && h ? c * l / h : c,
    keyframes: [0, l]
  }), m = Math.min(Eh(d), Th);
  return {
    type: "keyframes",
    ease: (g) => d.next(m * g).value / l,
    duration: /* @__PURE__ */ Ye(m)
  };
}
const Ng = 100, zg = 10, Lb = 1, Hb = 800, Mv = 0.3, jb = 0.3, Yb = 0.01, Gb = 2, qb = 5e-3, Xb = 0.5, Zb = 0.01, Qb = 10, _g = 0.05, Cv = (i) => i < 0 ? 1 / Math.max(1 + i, _g) : Math.max(1 - i, _g);
function Dv(i, l) {
  if (!(i > 1))
    return 1;
  const o = Math.sqrt(i * i - 1), r = i - o, c = i + o, h = 2 * o * Math.exp(-l) * (1 + l);
  return Ov((d) => c * Math.exp(-r * d) - r * Math.exp(-c * d) - h, (d) => Math.exp(-c * d) - Math.exp(-r * d), l) / l;
}
function Hf(i, l) {
  return i * Math.sqrt(1 - l * l);
}
const Kb = 12;
function Ov(i, l, o) {
  let r = o;
  for (let c = 1; c < Kb; c++)
    r = r - i(r) / l(r);
  return r;
}
const Af = 1e-3;
function Jb({ duration: i = Hb, bounce: l = Mv }) {
  let o, r;
  const c = Cv(l);
  i = Cn(Zb, Qb, /* @__PURE__ */ Ye(i)), c < 1 ? (o = (S) => {
    const v = S * c, y = v * i, b = Hf(S, c), O = Math.exp(-y);
    return Af - v / b * O;
  }, r = (S) => {
    const y = S * c * i, b = c * c * S * S * i, O = Math.exp(-y), x = Hf(S * S, c);
    return (-o(S) + Af > 0 ? -1 : 1) * -b * O / x;
  }) : (o = (S) => {
    const v = Math.exp(-S * i), y = S * i + 1;
    return -Af + v * y;
  }, r = (S) => {
    const v = Math.exp(-S * i), y = -S * (i * i);
    return v * y;
  });
  const h = 5 / i, d = Ov(o, r, h), m = d * Dv(c, d * i), g = m * m;
  return {
    stiffness: g,
    damping: c * 2 * Math.sqrt(g),
    duration: /* @__PURE__ */ ke(i)
  };
}
const jf = (i, l) => (l ? i >= 0 : i > 0) && i < 1 / 0;
function Mf(i, l) {
  if (jf(i, l))
    return i;
}
function Pb(i) {
  const l = Mf(i.stiffness), o = Mf(i.damping, !0), r = Mf(i.mass), c = {
    ...i,
    stiffness: l ?? Ng,
    damping: o ?? zg,
    mass: r ?? Lb,
    isResolvedFromDuration: !1,
    // stiffness/damping/mass overrides duration/bounce
    isTimeDefined: (l ?? o ?? r) === void 0 && (i.duration !== void 0 || i.bounce !== void 0)
  };
  if (c.isTimeDefined) {
    if (i.visualDuration) {
      const h = Cv(i.bounce || 0), d = 2 * Math.PI / (i.visualDuration * 1.2) * Dv(h, 2 * Math.PI / 1.2);
      c.stiffness = d * d, c.damping = 2 * h * Math.sqrt(c.stiffness);
    } else
      Object.assign(c, Jb(c)), c.isResolvedFromDuration = !0;
    (!jf(c.stiffness) || !jf(c.damping, !0)) && (c.stiffness = Ng, c.damping = zg);
  }
  return c;
}
function Vg(i = jb, l = Mv) {
  const o = typeof i != "object" ? {
    visualDuration: i,
    keyframes: [0, 1],
    bounce: l
  } : i, r = o.keyframes[0], c = o.keyframes[o.keyframes.length - 1], h = { done: !1, value: r }, { stiffness: d, damping: m, mass: g, duration: S, isResolvedFromDuration: v, isTimeDefined: y } = Pb({ ...o }), b = (w) => y ? 0 : -/* @__PURE__ */ Ye(w), O = m / (2 * Math.sqrt(d * g)), x = /* @__PURE__ */ Ye(Math.sqrt(d / g)), U = O * x, z = {
    target: c,
    delta: c - r,
    velocity: b(o.velocity || 0) || 0,
    restSpeed: 0,
    restDelta: 0
  }, X = () => {
    const w = Math.abs(z.delta) < 5;
    z.restSpeed = o.restSpeed || (w ? Yb : Gb), z.restDelta = o.restDelta || (w ? qb : Xb);
  };
  X();
  let K, k, $;
  if (O < 1) {
    const w = Hf(x, O), Y = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
    $ = () => {
      Y.A = (z.velocity + U * z.delta) / w, Y.sinC = U * Y.A + z.delta * w, Y.cosC = U * z.delta - Y.A * w;
    };
    const F = (ut) => {
      ut !== Y.t && (Y.t = ut, Y.env = Math.exp(-U * ut), Y.sin = Math.sin(w * ut), Y.cos = Math.cos(w * ut));
    };
    K = (ut) => (F(ut), z.target - Y.env * (Y.A * Y.sin + z.delta * Y.cos)), k = (ut) => (F(ut), Y.env * (Y.sinC * Y.sin + Y.cosC * Y.cos));
  } else if (O === 1) {
    K = (Y) => z.target - Math.exp(-x * Y) * (z.delta + (z.velocity + x * z.delta) * Y);
    const w = { C: 0 };
    $ = () => {
      w.C = z.velocity + x * z.delta;
    }, k = (Y) => Math.exp(-x * Y) * (x * w.C * Y - z.velocity);
  } else {
    const w = x * Math.sqrt(O * O - 1), Y = U - w, F = U + w, ut = w < 1 || y ? 1 / 0 : 300 / w, mt = (Ot, St) => Math.exp(St > ut ? (U - Ot) * ut - U * St : -Ot * St), dt = { S: 0, F: 0 };
    $ = () => {
      const Ot = (z.velocity + U * z.delta) / w;
      dt.S = (z.delta + Ot) / 2, dt.F = (z.delta - Ot) / 2;
    }, K = (Ot) => z.target - dt.S * mt(Y, Ot) - dt.F * mt(F, Ot), k = (Ot) => Y * dt.S * mt(Y, Ot) + F * dt.F * mt(F, Ot);
  }
  $();
  const et = v && S || null, st = {
    calculatedDuration: et,
    /**
     * Aim the spring at a new target from its current position and
     * velocity, reusing the resolved physics and closures.
     */
    retarget: (w, Y) => {
      z.target = w[w.length - 1], z.delta = z.target - w[0], z.velocity = b(Y), o.restSpeed && o.restDelta || X(), st.calculatedDuration = et, h.done = !1, $();
    },
    velocity: (w) => /* @__PURE__ */ ke(k(w)),
    next: (w) => {
      const Y = K(w);
      if (v)
        h.done = w >= S;
      else {
        const F = /* @__PURE__ */ ke(k(w));
        h.done = Math.abs(F) <= z.restSpeed && Math.abs(z.target - Y) <= z.restDelta;
      }
      return h.value = h.done ? z.target : Y, h;
    },
    toString: () => {
      const w = Math.min(Eh(st), Th), Y = Av((F) => st.next(w * F).value, w, 30);
      return w + "ms " + Y;
    },
    toTransition: () => {
    }
  };
  return st;
}
const Rv = /* @__PURE__ */ Object.assign(Vg, {
  applyToOptions: (i) => {
    const l = Bb(i, 100, Vg);
    return i.ease = l.ease, i.duration = /* @__PURE__ */ ke(l.duration), i.type = "keyframes", i;
  }
});
function mo({ keyframes: i, velocity: l = 0, power: o = 0.8, timeConstant: r = 325, bounceDamping: c = 10, bounceStiffness: h = 500, modifyTarget: d, min: m, max: g, restDelta: S = 0.5, restSpeed: v }) {
  const y = i[0], b = {
    done: !1,
    value: y
  }, O = (w) => w < m || w > g, x = (w) => m === void 0 ? g : g === void 0 || Math.abs(m - w) < Math.abs(g - w) ? m : g;
  let U = o * l;
  const z = y + U, X = d ? d(z) : z;
  X !== z && (U = X - y);
  const K = (w) => -U * Math.exp(-w / r), k = (w) => {
    const Y = K(w);
    b.done = Math.abs(Y) <= S, b.value = b.done ? X : w ? X + Y : y;
  };
  let $, et;
  const st = (w) => {
    O(b.value) && ($ = w, et = Rv({
      keyframes: [b.value, x(b.value)],
      /**
       * The friction curve is target + calcDelta(t), so its exact
       * derivative is -calcDelta(t) / timeConstant in units/ms,
       * converted here to the units/second expected by spring.
       */
      velocity: -K(w) / r * 1e3,
      damping: c,
      stiffness: h,
      restDelta: S,
      restSpeed: v
    }));
  };
  return st(0), {
    calculatedDuration: null,
    next: (w) => {
      let Y = !1;
      return !et && $ === void 0 && (Y = !0, k(w), st(w)), $ !== void 0 && w >= $ ? et.next(w - $) : (!Y && k(w), b);
    }
  };
}
function Fb(i, l, o) {
  const r = [], c = o || cn.mix || Sh, h = i.length - 1;
  for (let d = 0; d < h; d++) {
    let m = c(i[d], i[d + 1]);
    if (l) {
      const g = Array.isArray(l) ? l[d] || rn : l;
      m = Ii(g, m);
    }
    r.push(m);
  }
  return r;
}
function kb(i, l, { clamp: o = !0, ease: r, mixer: c } = {}) {
  const h = i.length;
  if (h === 1)
    return () => l[0];
  if (h === 2 && l[0] === l[1])
    return () => l[1];
  const d = i[0] === i[1];
  i[0] > i[h - 1] && (i = [...i].reverse(), l = [...l].reverse());
  const m = Fb(l, r, c), g = m.length, S = (v) => {
    if (d && v < i[0])
      return l[0];
    let y = 0;
    if (g > 1)
      for (; y < i.length - 2 && !(v < i[y + 1]); y++)
        ;
    const b = /* @__PURE__ */ Ia(i[y], i[y + 1], v);
    return m[y](b);
  };
  return o ? (v) => S(Cn(i[0], i[h - 1], v)) : S;
}
function Ib(i, l) {
  const o = i[i.length - 1];
  for (let r = 1; r <= l; r++) {
    const c = /* @__PURE__ */ Ia(0, l, r);
    i.push(Ht(o, 1, c));
  }
}
function xv(i) {
  const l = [0];
  return Ib(l, i.length - 1), l;
}
function Wb(i, l) {
  return i.map((o) => o * l);
}
function $b(i, l) {
  return i.map(() => l || dh).splice(0, i.length - 1);
}
function Sa({ duration: i = 300, keyframes: l, times: o, ease: r = "easeInOut" }) {
  const c = /* @__PURE__ */ nb(r) ? r.map(Mg) : Mg(r) || dh, h = {
    done: !1,
    value: l[0]
  };
  if (l.length === 2 && !Array.isArray(c) && (!o || o.length !== 2 || o[0] === 0 && o[1] === 1)) {
    const [g, S] = l, v = g === S ? void 0 : (cn.mix || Sh)(g, S);
    return {
      calculatedDuration: i,
      next: (y) => (h.value = v ? v(c(i > 0 ? Cn(0, 1, y / i) : 1)) : S, h.done = y >= i, h)
    };
  }
  const d = Wb(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    o && o.length === l.length ? o : xv(l),
    i
  ), m = kb(d, l, {
    ease: Array.isArray(c) ? c : $b(l, c)
  });
  return {
    calculatedDuration: i,
    next: (g) => (h.value = m(g), h.done = g >= i, h)
  };
}
const tA = 5;
function eA(i, l, o) {
  const r = Math.max(l - tA, 0);
  return /* @__PURE__ */ lv(o - i(r), l - r);
}
function nA(i, l, o = 0) {
  return l <= 0 ? o : i.velocity ? i.velocity(l) : eA((r) => i.next(r).value, l, i.next(l).value);
}
const aA = (i) => i !== null;
function rs(i, { repeat: l, repeatType: o = "loop" }, r, c = 1) {
  const h = i.filter(aA), m = c < 0 || l && o !== "loop" && l % 2 === 1 ? 0 : h.length - 1;
  return !m || r === void 0 ? h[m] : r;
}
const iA = {
  decay: mo,
  inertia: mo,
  tween: Sa,
  keyframes: Sa,
  spring: Rv
};
function Nv(i) {
  typeof i.type == "string" && (i.type = iA[i.type]);
}
const lA = 40, zv = (i, l) => l - i > lA && !cn.useManualTiming ? l : i;
function _v(i, l) {
  return {
    kind: i,
    animation: l,
    timestamp: Qt.now(),
    frameTimestamp: ne.timestamp,
    frameIsProcessing: ne.isProcessing
  };
}
function Vv(i, l, o) {
  const r = globalThis.__MOTION_INSPECT__;
  if (r)
    try {
      r({
        ..._v("animation-start", i),
        options: o ? { ...l, ...o } : l
      });
    } catch {
    }
}
function sA(i, l) {
  const o = globalThis.__MOTION_INSPECT__;
  if (o)
    try {
      o({
        ..._v("layout-animation-start", i),
        node: l
      });
    } catch {
    }
}
class bh {
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
const uA = (i) => i / 100, Yf = (i) => Math.round(i * 1e4) / 1e4;
class cs extends bh {
  constructor(l) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: o } = this.options;
      o && o.updatedAt !== Qt.now() && this.tick(Qt.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = l, this.initAnimation(), this.play(), l.autoplay === !1 && this.pause(), Vv(this, this.options);
  }
  initAnimation() {
    const { options: l } = this;
    Nv(l);
    const { type: o = Sa, repeat: r = 0, repeatDelay: c = 0, repeatType: h, velocity: d = 0 } = l;
    let { keyframes: m } = l;
    const g = o || Sa;
    g !== Sa && typeof m[0] != "number" && (this.mixKeyframes = Ii(uA, Sh(m[0], m[1])), m = [0, 100]);
    const S = g(m === l.keyframes ? l : { ...l, keyframes: m });
    h === "mirror" && (this.mirroredGenerator = g({
      ...l,
      keyframes: [...m].reverse(),
      velocity: -d
    })), S.calculatedDuration === null && (S.calculatedDuration = Eh(S));
    const { calculatedDuration: v } = S;
    this.calculatedDuration = v, this.resolvedDuration = v + c, this.totalDuration = this.resolvedDuration * (r + 1) - c, this.generator = S;
  }
  updateTime(l) {
    this.currentTime = this.holdTime ?? Math.round(l - this.startTime) * this.playbackSpeed;
  }
  tick(l, o = !1) {
    const { generator: r, totalDuration: c, calculatedDuration: h } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: d = 0, keyframes: m, type: g, onUpdate: S, finalKeyframe: v } = this.options;
    this.startTime === this.pendingStartTime && (this.startTime = zv(this.startTime, l)), this.pendingStartTime = void 0, this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)), o ? this.currentTime = l : this.updateTime(l);
    const y = this.currentTime - d * (this.playbackSpeed >= 0 ? 1 : -1), b = this.playbackSpeed >= 0 ? y < 0 : y > c;
    this.currentTime = Math.max(y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    const O = this.generate(this.currentTime, b);
    let { done: x } = O;
    b || (x = this.playbackSpeed >= 0 ? h < 1 / 0 ? this.currentTime >= c : x : this.currentTime <= 0);
    const U = this.holdTime === null && (this.state === "finished" || this.state === "running" && x);
    return U && g !== mo && (O.value = rs(m, this.options, v, this.speed)), S && S(O.value), U && this.finish(), O;
  }
  /**
   * This animation's time, including delay, at a timestamp.
   */
  at(l) {
    return this.holdTime ?? Yf((l - this.startTime) * this.playbackSpeed);
  }
  /**
   * The value at a timestamp, without changing this animation's state.
   * If resolved, it ends at the last resolved keyframe, which is in the
   * same unit as the others, rather than at finalKeyframe.
   */
  sampleAt(l, o) {
    const { options: r, totalDuration: c } = this, h = this.at(l) - (r.delay || 0);
    return h >= c && r.type !== mo ? rs(r.keyframes, r, o ? void 0 : r.finalKeyframe) : this.generate(Math.max(h, 0), h < 0).value;
  }
  /**
   * The generator's state `currentTime` ms after the delay, without
   * changing the animation's own state.
   */
  generate(l, o) {
    const { generator: r, totalDuration: c, mixKeyframes: h, mirroredGenerator: d, resolvedDuration: m } = this, { keyframes: g, repeat: S, repeatType: v, repeatDelay: y } = this.options;
    let b = l, O = r;
    if (S) {
      const U = Math.min(l, c) / m;
      let z = Math.floor(U), X = U % 1;
      !X && U >= 1 && (X = 1), X === 1 && z--, z = Math.min(z, S + 1), !!(z % 2) && (v === "reverse" ? (X = 1 - X, y && (X -= y / m)) : v === "mirror" && (O = d)), b = Cn(0, 1, X) * m;
    }
    let x;
    return o ? (this.delayState.value = g[0], x = this.delayState) : x = O.next(b), h && !o && (x.value = h(x.value)), x;
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
    return nA(this.generator, this.currentTime, this.options.velocity);
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
    const { driver: l = bv, startTime: o } = this.options;
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
const oA = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function rA(i) {
  const [l, o] = i.slice(0, -1).split("(");
  if (l === "drop-shadow")
    return i;
  const [r] = o.match(ph) || [];
  if (!r)
    return i;
  const c = o.replace(r, "");
  let h = oA.has(l) ? 1 : 0;
  return r !== o && (h *= 100), l + "(" + h + c + ")";
}
const cA = /\b([a-z-]*)\(.*?\)/gu, Gf = {
  ...Ie,
  getAnimatableNone: (i) => {
    const l = i.match(cA);
    return l ? l.map(rA).join(" ") : i;
  }
}, qf = {
  ...Ie,
  getAnimatableNone: (i) => {
    const l = Ie.parse(i);
    return Ie.createTransformer(i)(l.map((r) => typeof r == "number" ? 0 : typeof r == "object" ? { ...r, alpha: 1 } : r));
  }
}, wg = {
  ...el,
  transform: Math.round
}, wv = {
  rotate: Gn,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: Gn,
  rotateX: Gn,
  rotateY: Gn,
  rotateZ: Gn,
  scale: Ku,
  scaleX: Ku,
  scaleY: Ku,
  scaleZ: Ku,
  skew: Gn,
  skewX: Gn,
  skewY: Gn,
  distance: at,
  translateX: at,
  translateY: at,
  translateZ: at,
  x: at,
  y: at,
  z: at,
  perspective: at,
  transformPerspective: at,
  opacity: us,
  originX: Cg,
  originY: Cg,
  originZ: at
}, Ah = {
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
  ...wv,
  zIndex: wg,
  // SVG
  fillOpacity: us,
  strokeOpacity: us,
  numOctaves: wg
}, fA = {
  ...Ah,
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
  filter: Gf,
  WebkitFilter: Gf,
  mask: qf,
  WebkitMask: qf
}, Uv = (i) => fA[i], hA = /* @__PURE__ */ new Set([Gf, qf]);
function Mh(i, l) {
  let o = Uv(i);
  return hA.has(o) || (o = Ie), o.getAnimatableNone ? o.getAnimatableNone(l) : void 0;
}
function dA(i) {
  for (let l = 1; l < i.length; l++)
    i[l] ?? (i[l] = i[l - 1]);
}
const Pa = (i) => i * 180 / Math.PI, Xf = (i) => {
  const l = Pa(Math.atan2(i[1], i[0]));
  return Zf(l);
}, mA = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scaleZ: () => 1,
  scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
  rotate: Xf,
  rotateZ: Xf,
  skewX: (i) => Pa(Math.atan(i[1])),
  skewY: (i) => Pa(Math.atan(i[2])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2
}, Zf = (i) => (i = i % 360, i < 0 && (i += 360), i), Ug = Xf, Bg = (i) => Math.hypot(i[0], i[1]), Lg = (i) => Math.hypot(i[4], i[5]), pA = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Bg,
  scaleY: Lg,
  scaleZ: (i) => Math.hypot(i[8], i[9], i[10]),
  scale: (i) => (Bg(i) + Lg(i)) / 2,
  rotateX: (i) => Zf(Pa(Math.atan2(i[6], i[5]))),
  rotateY: (i) => Zf(Pa(Math.atan2(-i[2], i[0]))),
  rotateZ: Ug,
  rotate: Ug,
  skewX: (i) => Pa(Math.atan(i[4])),
  skewY: (i) => Pa(Math.atan(i[1])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2
};
function fs(i) {
  return i.includes("scale") ? 1 : 0;
}
function Ch(i, l) {
  if (!i || i === "none")
    return fs(l);
  const o = i.match(/^matrix(3d)?\(([-\d.e\s,]+)\)$/u);
  if (!o)
    return fs(l);
  const r = (o[1] ? pA : mA)[l], c = o[2].split(",").map((h) => parseFloat(h));
  return typeof r == "function" ? r(c) : c[r];
}
const yA = (i, l) => {
  const { transform: o = "none" } = getComputedStyle(i);
  return Ch(o, l);
}, Xn = [
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
], Ta = /* @__PURE__ */ new Set([...Xn, "pathRotation"]), Hg = (i) => i === el || i === at, gA = /* @__PURE__ */ new Set(["x", "y", "z"]), vA = /* @__PURE__ */ Xn.filter((i) => !gA.has(i));
function SA(i) {
  const l = [];
  return vA.forEach((o) => {
    const r = i.getValue(o);
    if (r !== void 0) {
      const c = r.get(), h = o.startsWith("scale") ? 1 : 0;
      if (c === h)
        return;
      l.push([o, c]), r.set(h);
    }
  }), l;
}
const TA = /* @__PURE__ */ new Set(["bottom", "right"]);
function jg(i, l, o, r, c, h) {
  const d = parseFloat(i);
  if (!isNaN(d))
    return d;
  const { min: m, max: g } = l()[o], S = g - m;
  return h === "border-box" ? S : S - parseFloat(r) - parseFloat(c);
}
const Yg = ({ transform: i }) => Ch(i, "x"), Gg = ({ transform: i }) => Ch(i, "y"), Cf = {
  // Dimensions
  width: ({ width: i, paddingLeft: l = "0", paddingRight: o = "0", boxSizing: r }, c) => jg(i, c, "x", l, o, r),
  height: ({ height: i, paddingTop: l = "0", paddingBottom: o = "0", boxSizing: r }, c) => jg(i, c, "y", l, o, r),
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
  x: Yg,
  y: Gg,
  translateX: Yg,
  translateY: Gg
}, Fa = /* @__PURE__ */ new Set();
let Qf = !1, Kf = !1, Jf = !1;
function Bv() {
  if (Kf) {
    const i = [], l = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
    Fa.forEach((c) => {
      c.needsMeasurement && (i.push(c), l.add(c.element), TA.has(c.name) && o.add(c.element));
    });
    const r = /* @__PURE__ */ new Map();
    o.forEach((c) => {
      const h = SA(c);
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
  Kf = !1, Qf = !1, Fa.forEach((i) => i.complete(Jf)), Fa.clear();
}
function Lv() {
  Fa.forEach((i) => {
    i.readKeyframes(), i.needsMeasurement && (Kf = !0);
  });
}
function EA() {
  Jf = !0, Lv(), Bv(), Jf = !1;
}
function bA(i, l, o) {
  if (typeof i == "string") {
    if (rh(i) || ch(i))
      return parseFloat(i);
    if (!Ie.test(i) && Ie.test(o))
      return Mh(l, o);
  }
  return i ?? void 0;
}
class Dh {
  constructor(l, o, r, c, h, d = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...l], this.onComplete = o, this.name = r, this.motionValue = c, this.element = h, this.isAsync = d;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Fa.add(this), Qf || (Qf = !0, jt.read(Lv), jt.resolveKeyframes(Bv))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: o, element: r, motionValue: c } = this;
    if (l[0] === null) {
      const h = c?.get(), d = l[l.length - 1];
      if (h !== void 0)
        l[0] = h;
      else if (r && o) {
        const m = bA(r.readValue(o, d), o, d);
        m !== void 0 && (l[0] = m);
      }
      l[0] === void 0 && (l[0] = d), c && h === void 0 && c.set(l[0]);
    }
    dA(l);
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l), Fa.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Fa.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const AA = (i) => i.startsWith("--");
function Hv(i, l, o) {
  AA(l) ? i.style.setProperty(l, o) : i.style[l] = o;
}
const MA = {};
function jv(i, l) {
  const o = /* @__PURE__ */ $E(i);
  return () => MA[l] ?? o();
}
const CA = /* @__PURE__ */ jv(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Oh = /* @__PURE__ */ jv(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Ki = ([i, l, o, r]) => `cubic-bezier(${i}, ${l}, ${o}, ${r})`, Pf = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Ki([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Ki([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Ki([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Ki([0.33, 1.53, 0.69, 0.99])
};
function Yv(i, l) {
  if (i)
    return typeof i == "function" ? Oh() ? Av(i, l) : "ease-out" : /* @__PURE__ */ mh(i) ? Ki(i) : Array.isArray(i) ? i.map((o) => Yv(o, l) || Pf.easeOut) : Pf[i];
}
function DA(i, l, o, { delay: r = 0, duration: c = 300, repeat: h = 0, repeatType: d = "loop", ease: m = "easeOut", times: g } = {}, S = void 0) {
  const v = {
    [l]: o
  };
  g && (v.offset = g);
  const y = Yv(m, c);
  Array.isArray(y) && (v.easing = y);
  const b = {
    delay: r,
    duration: c,
    easing: Array.isArray(y) ? "linear" : y,
    fill: "both",
    iterations: h + 1,
    direction: d === "reverse" ? "alternate" : "normal"
  };
  return S && (b.pseudoElement = S), i.animate(v, b);
}
function Gv(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function OA({ type: i, ...l }) {
  return Gv(i) && Oh() ? i.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class qv extends bh {
  constructor(l) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !l)
      return;
    const { element: o, name: r, keyframes: c, pseudoElement: h, allowFlatten: d = !1, finalKeyframe: m, onComplete: g } = l;
    this.isPseudoElement = !!h, this.allowFlatten = d, this.options = l;
    const S = OA(l);
    this.animation = DA(o, r, c, S, h), S.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !h) {
        const v = rs(c, this.options, m, this.speed);
        this.updateMotionValue?.(v), Hv(o, r, v), this.animation.cancel();
      }
      g?.(), this.notifyFinished();
    }, Vv(this, l, S);
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
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, l && CA() ? (this.animation.timeline = l, o?.(this.animation), rn) : r(this);
  }
}
const Xv = {
  anticipate: cv,
  backInOut: rv,
  circInOut: hv
};
function RA(i) {
  return i in Xv;
}
function xA(i) {
  typeof i.ease == "string" && RA(i.ease) && (i.ease = Xv[i.ease]);
}
const po = 10;
class NA extends qv {
  constructor(l) {
    xA(l), Nv(l), super(l), l.startTime !== void 0 && l.autoplay !== !1 && (this.startTime = l.startTime), this.options = l;
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
      const { motionValue: o, onUpdate: r, onComplete: c, onPlay: h, onStop: d, element: m, ...g } = this.options;
      this.sampler = new cs({ ...g, autoplay: !1 }), this.sampler.stop();
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
    const { speed: h } = this, d = this.elapsed(), m = this.state === "running" && h ? Cn(0, po, d) : 0, g = this.sample(d);
    r && c && Hv(r, c, g), o.setWithVelocity(this.sample(d - m * Math.sign(h)), g, m / Math.abs(h || 1));
  }
}
const qg = (i, l) => l === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && // It's animatable if we have a string
(Ie.test(i) || i === "0") && // And it contains numbers and/or colors
!i.startsWith("url("));
function zA(i) {
  const l = i[0];
  if (i.length === 1)
    return !0;
  for (let o = 0; o < i.length; o++)
    if (i[o] !== l)
      return !0;
}
function _A(i, l, o, r) {
  const c = i[0];
  if (c === null)
    return !1;
  if (l === "display" || l === "visibility")
    return !0;
  const h = i[i.length - 1], d = qg(c, l), m = qg(h, l);
  return !d || !m ? !1 : zA(i) || (o === "spring" || Gv(o)) && r;
}
function Ff(i) {
  i.duration = 0, i.type = "keyframes";
}
const kf = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
]), VA = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function wA(i) {
  for (let l = 0; l < i.length; l++)
    if (typeof i[l] == "string" && VA.test(i[l]))
      return !0;
  return !1;
}
const Xg = /* @__PURE__ */ new Set([
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
]), Zv = () => !cn.useManualTiming && Object.hasOwnProperty.call(Element.prototype, "animate");
function UA(i) {
  const { motionValue: l, name: o, repeatDelay: r, repeatType: c, damping: h, type: d, keyframes: m } = i;
  if (!o || !(kf.has(o) || Xg.has(o)))
    return !1;
  const g = l?.owner?.current;
  if (!(g instanceof HTMLElement) && !(g instanceof SVGElement))
    return !1;
  const { onUpdate: S, transformTemplate: v } = l.owner.getProps();
  return Zv() && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (kf.has(o) || Xg.has(o) && wA(m)) && (o !== "transform" || !v) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !S && !r && c !== "mirror" && h !== 0 && d !== "inertia";
}
const Rh = (i, l) => l && typeof i == "number" ? l.transform(i) : i, BA = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, LA = Xn.length, Zg = {}, If = (i, l, o = Rh(l, wv[i])) => (Zg[i] || (Zg[i] = (BA[i] || i) + "(")) + o + ")", Qv = (i, l) => (typeof l == "number" ? l : parseFloat(l)) === (i.startsWith("scale") ? 1 : 0);
function HA(i, l, o) {
  let r = "";
  for (let h = 0; h < LA; h++) {
    const d = Xn[h], m = i[d];
    if (m === void 0)
      continue;
    const g = o && (l[d] = Rh(m, Ah[d]));
    Qv(d, m) || (r += If(d, m, g || void 0) + " ");
  }
  const c = i.pathRotation;
  return c && (r += If("rotate", c)), r = r.trim(), o ? o(l, r) : r || "none";
}
const Wi = /* @__PURE__ */ new WeakMap(), jA = 200, Fu = 1e-3, YA = 0.1, GA = 1e-3, qA = 100, XA = (i) => /^(linear|ease(In|Out|InOut))$/.test(i), Df = (i, l) => i - l, Qg = (i, l, o) => {
  const r = [];
  for (let c = 0; c <= o; c++)
    r.push(Ht(i, l, c / o));
  return r;
}, $u = (i) => i.motionValue.owner, to = (i) => Wi.get(i), Ji = (i, l) => i.latestValues ? i.latestValues[l] : i.getValue(l)?.get(), ZA = ({ name: i, motionValue: l }) => i && Xn.includes(i) && l?.owner?.current instanceof HTMLElement && Zv() && Oh();
function QA(i) {
  const l = $u(i), { onUpdate: o, transformTemplate: r } = l.getProps();
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
    (Ji(l, "transform") || "none") === "none" && !Ji(l, "pathRotation") && /**
     * Layout animations write transform every frame.
     */
    !l.projection?.isProjecting()
  );
}
class KA extends cs {
  constructor(l) {
    const o = $u(l).current, { driver: r = bv } = l;
    let c;
    const h = QA(l);
    l.driver = (m) => {
      const g = r(m);
      return {
        js: g,
        now: g.now,
        start: (S = !0) => {
          const v = to(o);
          !v || v.isJS ? g.start(S) : v.schedule(!1, !S);
        },
        stop: () => {
          g.stop();
          const S = to(o);
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
    return to($u(this.options).current);
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
    const { keyframes: l, type: o, ease: r, times: c, repeat: h, delay: d = 0 } = this.options, m = /* @__PURE__ */ mh(r) ? Ki(r) : XA(r) && Pf[r];
    if (m && !h && !c && l.length === 2 && o === Sa && this.holdTime === null) {
      const g = this.startTime + d / this.speed;
      return [g, g + this.resolvedDuration / this.speed, m];
    }
  }
  /**
   * The timestamps between two timestamps where this reaches a
   * keyframe or starts a repeat, where it can turn or jump.
   */
  boundaries(l, o) {
    const { startTime: r, speed: c, resolvedDuration: h, options: d } = this, { delay: m = 0, repeat: g = 0, repeatDelay: S = 0, repeatType: v, times: y, keyframes: b, type: O } = d, x = (O || Sa) === Sa ? y || xv(b) : [0, 1], U = r + m / c, z = [];
    if (this.holdTime !== null || !(h > 0))
      return z;
    for (let X = Math.max(0, Math.floor((l - U) * c / h)); X <= g; X++) {
      const K = U + X * h / c;
      if (K > o)
        break;
      for (const k of x) {
        const $ = K + (X % 2 && v && v !== "loop" ? 1 - k : k) * (h - S) / c;
        $ > l && $ < o && z.push($);
      }
    }
    return z;
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
    this.options.motionValue.setWithVelocity(this.sampleAt(l - po, !0), this.sampleAt(l, !0), po);
  }
  play() {
    this.isStopped || ((this.group || JA($u(this.options))).tracks.add(this), super.play());
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
    return this.isAccelerated() ? /* @__PURE__ */ Ye(Cn(0, this.totalDuration, this.at(Qt.now()) - (this.options.delay || 0))) : super.time;
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
function JA(i) {
  const l = i.current, o = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map();
  let c = {}, h = [], d = /* @__PURE__ */ new Map(), m = [], g = !1, S = !1, v = !1, y = !1, b = -1 / 0;
  const O = (J) => {
    for (const V of o)
      if (V.name === J)
        return !0;
  }, x = (J, V) => {
    const G = {};
    for (const j of J === void 0 ? Xn : h) {
      const I = r.get(j), tt = J === void 0 ? Ji(i, j) : I ? I.sampleAt(V > J && !I.timing()[1] ? V : J) : c[j];
      tt !== void 0 && (G[j] = tt);
    }
    return G;
  }, U = (J, V) => {
    let G = "";
    for (const j in J) {
      const I = J[j];
      (!V || !Qv(j, I)) && (G += If(j, I) + " ");
    }
    return (V ? G.trim() : G) || "none";
  }, z = (J, V) => U(x(J, V)), X = (J = x()) => {
    l.style.transform = U(J, !0);
  }, K = (J = !0) => {
    J && X(), m.forEach(({ animation: V }) => V.cancel()), m = [];
  }, k = (J, V) => new Animation(new KeyframeEffect(l, J, V)), $ = (J, V, G = 1 / 0) => {
    const j = { animation: J, offset: V, end: G };
    J.startTime = Qt.now() + V, G < 1 / 0 && (J.onfinish = () => {
      j.isDone = !0, m.some((I) => I.end === 1 / 0) && (J.cancel(), m = m.filter((I) => I !== j)), St.schedule(!1);
    }), J.oncancel = () => m.includes(j) && St.demote(), m.push(j);
  }, et = (J, V, G) => {
    const j = (tt, ct) => Math.abs(J(ct) - J(tt)), I = j(V, G);
    for (; G - V > 0.01; ) {
      const tt = (V + G) / 2;
      j(V, tt) > j(tt, G) ? G = tt : V = tt;
    }
    return j(V, G) > I / 2 ? [V, G] : [];
  }, st = (J, V, G, j) => {
    const I = Math.min(jA, Math.max(2, Math.ceil((G - V) / po)));
    if (j.length * 4 > I)
      return;
    const tt = Qg(V, G, I).concat(j).sort(Df), ct = (Z) => /* @__PURE__ */ Ia(V, G, Z);
    let yt, ot;
    for (const Z of J) {
      const W = tt.map((Xt) => Z.numberAt(Xt)), [Tt] = W, bt = W.map((Xt) => Xt - Tt), Rt = bt[bt.length - 1], it = bt.some((Xt) => Math.abs(Xt) * Fu > Math.abs(Rt)) ? 0 : Rt, ft = bt.map((Xt) => it ? Xt / it : Xt);
      if (it) {
        if (!yt)
          yt = ft, ot = (Xt) => (Z.numberAt(Xt) - Tt) / it;
        else if (ft.some((Xt, nl) => !(Math.abs(Xt - yt[nl]) <= Fu)))
          return;
      } else if (ft.some((Xt) => !(Math.abs(Xt) <= Fu)))
        return;
    }
    if (!yt || yt.every((Z, W) => Math.abs(Z - ct(tt[W])) <= Fu))
      return "linear";
    const E = [], B = (Z, W = ot(Z)) => E.push(Yf(W) + " " + Yf(ct(Z) * 100) + "%");
    return yt.forEach((Z, W) => {
      W && Math.abs(Z - yt[W - 1]) > 0.2 && et(ot, tt[W - 1], tt[W]).forEach((Tt) => B(Tt)), B(tt[W], Z);
    }), "linear(" + E + ")";
  }, w = (J, V, G, j) => {
    const I = [V], tt = (E, B) => J.every((Z) => !(Math.abs(Z.numberAt((E + B) / 2) - (Z.numberAt(E) + Z.numberAt(B)) / 2) > (Z.name.startsWith("scale") ? GA : YA))), ct = (E, B, Z) => {
      if (B - E < 1 || tt(E, B))
        I.push(B);
      else if (Z < 4)
        ct(E, (E + B) / 2, Z + 1), ct((E + B) / 2, B, Z + 1);
      else {
        for (const W of J)
          I.push(...et((Tt) => W.numberAt(Tt), E, B));
        I.push(B);
      }
    }, yt = Qg(V, G, Math.ceil((G - V) / 100));
    for (const E of j)
      yt.push(E, Math.min(E + 0.01, G));
    let ot = V;
    for (const E of yt.sort(Df))
      E > ot && ct(ot, E, 0), ot = E;
    return I.sort(Df);
  }, Y = (J) => {
    let V;
    for (const G of J) {
      const j = G.tween();
      if (!j || V?.some((I, tt) => tt < 2 ? Math.abs(j[tt] - I) > 1 : j[tt] !== I))
        return;
      V = j;
    }
    return V;
  }, F = (J, V, G, j = { fill: "both" }, I, tt) => {
    const ct = J.flatMap((Z) => Z.boundaries(V, G)), yt = tt || st(J, V, G, ct), ot = yt ? [V, G] : w(J, V, G, ct), E = ot.map((Z) => z(Z, I));
    let B = { transform: E };
    return yt || (B.offset = ot.map((Z) => /* @__PURE__ */ Ia(V, G, Z))), E.every((Z) => Z === E[0]) && (X(x(V, I)), B = null), k(B, {
      ...j,
      duration: G - V,
      easing: yt || "linear"
    });
  }, ut = (J) => {
    let V = J, G = 0, j = 0;
    const I = [], tt = [], ct = /* @__PURE__ */ new Set();
    r.clear(), d = /* @__PURE__ */ new Map();
    for (const ot of o) {
      r.set(ot.name, ot);
      const [E, B] = ot.timing(), Z = E === 1 / 0;
      if (d.set(ot, [ot.at(J), ot.speed, Z]), Z) {
        ot.sync();
        continue;
      }
      if (ot.speed < 0)
        return;
      if (B) {
        if (G) {
          const W = (E - j) / B;
          if (Math.abs(B - G) > 1 || Math.abs(W - Math.round(W)) * G > 1)
            return;
        } else
          G = B, j = E;
        tt.push(ot);
      } else
        ct.add(E);
      I.push(ot), V = Math.max(V, E);
    }
    c = {}, h = Xn.filter((ot) => {
      if (r.has(ot))
        return !0;
      const E = c[ot] = Ji(i, ot);
      return E !== void 0 && parseFloat(E) !== (ot.startsWith("scale") ? 1 : 0);
    }), K(!1);
    const yt = !G && Y(I);
    try {
      if (yt && yt[1] > J) {
        const [ot, E, B] = yt;
        $(F(I, ot, E, void 0, void 0, B), ot - J, E - ot);
      } else V > J && ($(F(I, J, V), 0, V - J), ct.forEach((ot) => ot < V - 1 && $(k(null, { duration: ot - J }), 0, ot - J)));
      if (G) {
        const ot = j + Math.floor((V - j) / G) * G;
        $(F(tt, ot, ot + G, {
          iterations: 1 / 0,
          iterationStart: (V - ot) / G,
          /**
           * It must not fill backwards over the finite part
           * that runs before it.
           */
          fill: "forwards"
        }, V), V - J);
      }
    } catch {
      return;
    }
    return m.length || K(), !0;
  }, mt = (J) => {
    let V, G = 0;
    for (const j of o) {
      const I = d.get(j);
      if (!I)
        return !1;
      const [tt, ct, yt] = I, ot = j.at(J), E = j.timing()[0] === 1 / 0;
      if (yt) {
        if (E && ot === tt)
          continue;
        return !1;
      }
      const B = (ot - tt) / ct, Z = E ? 0 : j.speed / ct;
      if (V === void 0)
        V = B, G = Z;
      else if (Math.abs(B - V) > 1 || Z !== G)
        return !1;
    }
    if (V === void 0)
      return !0;
    if (!m.length)
      return !1;
    for (const { offset: j, end: I, isDone: tt } of m) {
      const ct = V - j;
      if (I < 1 / 0 && (tt ? ct < I - 1 : ct < 0 || ct >= I))
        return !1;
    }
    for (const { animation: j, offset: I, isDone: tt } of m) {
      if (tt)
        continue;
      const ct = V - I;
      G && j.updatePlaybackRate && j.playState === "running" && Math.abs(Number(j.currentTime) - ct) < 20 ? j.playbackRate !== G && j.updatePlaybackRate(G) : G ? (j.playbackRate = G, j.startTime = J - ct / G) : (j.startTime = null, j.currentTime = ct);
    }
    return !0;
  }, dt = () => o.size ? !1 : (v = !0, to(l) === St && Wi.delete(l), St.isJS || K(), !0), Ot = () => {
    const J = Qt.now();
    if (St.isJS || (St.isFinishing = !0, o.forEach((j) => {
      const [I, tt] = j.timing();
      j.state === "running" && j.speed > 0 && !tt && I <= J + 1 && (j.complete(), c[j.name] = Ji(i, j.name), d.has(j) || (g = !0));
    }), St.isFinishing = !1), S = !1, v || (o.forEach(({ state: j }, I) => {
      (j === "idle" || j === "finished") && o.delete(I);
    }), dt()))
      return;
    for (const j of o)
      if (!j.canAccelerate)
        return St.demote(!0);
    St.isJS && (St.isJS = !1, g = !0, o.forEach((j) => j.js?.stop()));
    const V = g, G = y;
    if (g = y = !1, V || !mt(J)) {
      if (G) {
        if (J - b < qA)
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
    schedule(J, V) {
      v || (g || (g = J), y || (y = !!V), S || (S = !0, ne.isProcessing ? jt.render(Ot, !1, !0) : queueMicrotask(Ot)));
    },
    /**
     * End the group now, rather than when it next builds, so the
     * element's transform is the caller's again as soon as its last
     * animation is stopped.
     */
    release(J) {
      const { state: V } = J;
      (V === "idle" || V === "finished") && o.delete(J), dt() || St.schedule(!0);
    },
    /**
     * An outside write. Rebuild once, but if it keeps happening, move
     * to the main thread.
     */
    check() {
      if (!St.isJS) {
        for (const J in c)
          if (Ji(i, J) !== c[J] && !O(J))
            return St.schedule(!0, !0);
      }
    },
    demote(J) {
      if (!(St.isJS || v))
        return o.forEach((V) => {
          V.isAccelerated() && V.sync(), J || (V.canAccelerate = !1);
        }), St.isJS = !0, d = /* @__PURE__ */ new Map(), K(), o.forEach((V) => V.state === "running" && V.js?.start()), !0;
    }
  };
  return Wi.set(l, St), St;
}
class PA extends bh {
  constructor(l) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = Qt.now();
    const { keyframes: o, name: r, motionValue: c, element: h } = l, d = l;
    d.autoplay ?? (d.autoplay = !0), d.delay ?? (d.delay = 0), d.type ?? (d.type = "keyframes"), d.repeat ?? (d.repeat = 0), d.repeatDelay ?? (d.repeatDelay = 0), d.repeatType ?? (d.repeatType = "loop");
    const m = h?.KeyframeResolver || Dh;
    this.keyframeResolver = new m(o, (g, S, v) => this.onKeyframesResolved(g, S, d, !v), r, c, h), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(l, o, r, c) {
    this.keyframeResolver = void 0;
    const { name: h, type: d, velocity: m, delay: g, isHandoff: S, onUpdate: v } = r;
    this.resolvedAt = Qt.now();
    const y = _A(l, h, d, m);
    y || ((cn.instantAnimations || !g) && v?.(rs(l, r, o)), l[0] = l[l.length - 1], Ff(r), r.repeat = 0);
    const { onComplete: b } = r;
    r.finalKeyframe = o, r.keyframes = l, r.onComplete = () => {
      b?.(), this.notifyFinished();
    };
    const O = y && !S && UA(r), x = !O && ZA(r);
    c && (O || x || this.resolvedAt !== this.createdAt) && (r.startTime ?? (r.startTime = zv(this.createdAt, this.resolvedAt)));
    let U;
    if (O) {
      r.element = r.motionValue?.owner?.current;
      try {
        U = new NA(r);
      } catch {
        U = new cs(r);
      }
    } else x ? U = new KA(r) : U = new cs(r);
    this.pendingTimeline && (this.stopTimeline = U.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = U;
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
    return this._animation || (this.keyframeResolver?.resume(), EA()), this._animation;
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
function Kv(i, l, o, r = 0, c = 1) {
  const h = Array.from(i).sort((S, v) => S.sortNodePosition(v)).indexOf(l), d = i.size, m = (d - 1) * r;
  return typeof o == "function" ? o(h, d) : c === 1 ? h * r : m - h * r;
}
const Kg = 30, FA = (i) => !isNaN(parseFloat(i));
class kA {
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
    this.current = l, this.updatedAt = Qt.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = FA(this.current));
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
    return l === "change" ? this.onChangeSubscribe(o) : ((r = this.events)[l] || (r[l] = new fo())).add(o);
  }
  onChangeSubscribe(l) {
    const { events: o } = this;
    return !o.change && !this.changeSubscriber ? this.changeSubscriber = l : (o.change || (o.change = new fo(), o.change.add(this.changeSubscriber), this.changeSubscriber = void 0), o.change.add(l)), () => {
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
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > Kg)
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, Kg);
    return /* @__PURE__ */ lv(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
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
function $i(i, l) {
  return new kA(i, l);
}
function Jv(i, l) {
  if (i?.inherit && l) {
    const { inherit: o, ...r } = i;
    return { ...l, ...r };
  }
  return i;
}
function xh(i, l) {
  const o = i?.[l] ?? i?.default ?? i;
  return o !== i ? Jv(o, i) : o;
}
const IA = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, WA = (i) => ({
  type: "spring",
  stiffness: 550,
  damping: i === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), $A = {
  type: "keyframes",
  duration: 0.8
}, t2 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, e2 = (i, { keyframes: l }) => l.length > 2 ? $A : Ta.has(i) ? i.startsWith("scale") ? WA(l[1]) : IA : t2, n2 = /* @__PURE__ */ new Set([
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
function a2(i) {
  for (const l in i)
    if (!n2.has(l))
      return !0;
  return !1;
}
const Nh = (i, l, o, r = {}, c, h) => (d) => {
  const m = xh(r, i) || {}, g = m.delay || r.delay || 0;
  let { elapsed: S = 0 } = r;
  S = S - /* @__PURE__ */ ke(g);
  const v = {
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
  a2(m) || Object.assign(v, e2(i, v)), v.duration && (v.duration = /* @__PURE__ */ ke(v.duration)), v.repeatDelay && (v.repeatDelay = /* @__PURE__ */ ke(v.repeatDelay)), v.from !== void 0 && (v.keyframes[0] = v.from);
  let y = !1;
  if ((v.type === !1 || v.duration === 0 && !v.repeatDelay) && (Ff(v), v.delay === 0 && (y = !0)), (cn.instantAnimations || cn.skipAnimations || c?.shouldSkipAnimations || m.skipAnimations) && (y = !0, Ff(v), v.delay = 0), v.allowFlatten = !m.type && !m.ease, y && !h && l.get() !== void 0) {
    const b = rs(v.keyframes, m);
    if (b !== void 0) {
      jt.update(() => {
        v.onUpdate(b), v.onComplete();
      });
      return;
    }
  }
  return m.isSync ? new cs(v) : new PA(v);
}, i2 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function l2(i) {
  const l = i2.exec(i);
  if (!l)
    return [,];
  const [, o, r, c] = l;
  return [`--${o ?? r}`, c];
}
function zh(i, l, o = 1) {
  const [r, c] = l2(i);
  if (!r)
    return;
  const h = window.getComputedStyle(l).getPropertyValue(r);
  if (h) {
    const d = h.trim();
    return rh(d) ? parseFloat(d) : d;
  }
  return Co(c) ? zh(c, l, o + 1) : c;
}
function s2(i) {
  const l = [{}, {}];
  return i?.values.forEach((o, r) => {
    l[0][r] = o.get(), l[1][r] = o.getVelocity();
  }), l;
}
function Pv(i, l, o, r) {
  const c = (h) => typeof h == "function" ? h(o !== void 0 ? o : i.custom, ...s2(r)) : h;
  return l = c(l), typeof l == "string" && (l = i.variants && i.variants[l]), c(l);
}
function ka(i, l, o) {
  return Pv(i.getProps(), l, o, i);
}
const Fv = (i, l) => l === "exit" ? i.presenceContext?.custom : void 0, kv = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Xn
]), u2 = (i) => Array.isArray(i);
function o2(i, l, o) {
  i.hasValue(l) ? i.getValue(l).set(o) : i.addValue(l, $i(o));
}
function r2(i) {
  return u2(i) ? i[i.length - 1] || 0 : i;
}
function c2(i, l) {
  const o = ka(i, l);
  let { transitionEnd: r = {}, transition: c = {}, ...h } = o || {};
  h = { ...h, ...r };
  for (const d in h) {
    const m = r2(h[d]);
    o2(i, d, m);
  }
}
const ye = (i) => !!(i && i.getVelocity);
function f2(i) {
  return !!(ye(i) && i.add);
}
function Wf(i, l) {
  const o = i.getValue("willChange");
  if (f2(o))
    return o.add(l);
  if (!o && cn.WillChange) {
    const r = new cn.WillChange("auto");
    i.addValue("willChange", r), r.add(l);
  }
}
const Iv = "data-framer-appear-id";
function Wv(i) {
  return i.props[Iv];
}
const h2 = typeof window < "u";
function d2({ protectedKeys: i, needsAnimating: l }, o) {
  const r = o in i && !l[o];
  return l[o] = !1, r;
}
function $v(i, l, { delay: o = 0, transitionOverride: r, type: c } = {}) {
  let { transition: h, transitionEnd: d, ...m } = l;
  const g = i.getDefaultTransition();
  h = h ? Jv(h, g) : g;
  const S = h?.reduceMotion, v = h?.skipAnimations;
  r && (h = r);
  const y = [], b = c && i.animationState?.getState()[c], O = h?.path;
  O && (O.animateValues ? O.animateValues((x) => i.getValue(x, i.latestValues[x] ?? 0), m, h, o, y) : O.animateVisualElement?.(i, m, h, o, y));
  for (const x in m) {
    const U = i.getValue(x, i.latestValues[x] ?? null), z = m[x];
    if (z === void 0 || b && d2(b, x))
      continue;
    const X = {
      delay: o,
      ...xh(b?.out[x] || h || {}, x)
    };
    v && (X.skipAnimations = !0);
    const K = U.get();
    if (K !== void 0 && !U.isAnimating() && !Array.isArray(z) && z === K && !X.velocity) {
      jt.update(() => U.set(z));
      continue;
    }
    let k = !1;
    if (h2 && window.MotionHandoffAnimation) {
      const st = Wv(i);
      if (st) {
        const w = window.MotionHandoffAnimation(st, x, jt);
        w !== null && (X.startTime = w, k = !0);
      }
    }
    Wf(i, x);
    const $ = S ?? i.shouldReduceMotion;
    U.start(Nh(x, U, z, $ && kv.has(x) ? { type: !1 } : X, i, k));
    const et = U.animation;
    et && y.push(et);
  }
  if (d) {
    const x = () => jt.update(() => {
      d && c2(i, d);
    });
    y.length ? Promise.all(y).then(x) : x();
  }
  return y;
}
function $f(i, l, o = {}) {
  const r = ka(i, l, Fv(i, o.type)), c = o.transitionOverride || (r?.transition ?? (i.getDefaultTransition() || {})), h = () => Promise.all(r ? $v(i, r, o) : []), d = (g = 0) => {
    const { variantChildren: S } = i, { delayChildren: v = 0, staggerChildren: y, staggerDirection: b } = c, O = [];
    return S?.forEach((x) => {
      x.notify("AnimationStart", l), O.push($f(x, l, {
        ...o,
        delay: g + (typeof v == "function" ? 0 : v) + Kv(S, x, v, y, b)
      }).then(() => x.notify("AnimationComplete", l)));
    }), Promise.all(O);
  }, { when: m } = c;
  return m ? m === "beforeChildren" ? h().then(() => d()) : d().then(h) : Promise.all([h(), d(o.delay)]);
}
function m2(i, l, o = {}) {
  return i.notify("AnimationStart", l), (Array.isArray(l) ? Promise.all(l.map((c) => $f(i, c, o))) : typeof l == "string" ? $f(i, l, o) : Promise.all($v(i, ka(i, l, o.custom), o))).then(() => {
    i.notify("AnimationComplete", l);
  });
}
const p2 = {
  test: (i) => i === "auto",
  parse: (i) => i
}, y2 = (i) => (l) => l.test(i), g2 = [el, at, Mn, Gn, db, hb, p2], Jg = (i) => g2.find(y2(i));
function v2(i) {
  return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || ch(i) : !0;
}
const S2 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function T2(i, l, o) {
  let r = 0, c;
  for (; r < i.length && !c; ) {
    const h = i[r];
    typeof h == "string" && !S2.has(h) && Sb(h) && (c = i[r]), r++;
  }
  if (c && o)
    for (const h of l)
      i[h] !== c && (i[h] = Mh(o, c));
}
class E2 extends Dh {
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
      if (vf(h ? l[h] : c))
        return !1;
    return !0;
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: o, name: r } = this;
    if (!o?.current)
      return;
    super.readKeyframes();
    for (let v = 0; v < l.length; v++) {
      let y = l[v];
      if (typeof y == "string" && (y = y.trim(), Co(y))) {
        const b = zh(y, o.current);
        b !== void 0 && (l[v] = b), v === l.length - 1 && (this.finalKeyframe = y);
      }
    }
    if (this.resolveNoneKeyframes(), !kv.has(r) || l.length !== 2)
      return;
    const [c, h] = l;
    if (typeof c == "number" && typeof h == "number")
      return;
    const d = Jg(c), m = Jg(h), g = vf(c), S = vf(h);
    if (g !== S && Cf[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (d !== m)
      if (Hg(d) && Hg(m))
        for (let v = 0; v < l.length; v++) {
          const y = l[v];
          typeof y == "string" && (l[v] = parseFloat(y));
        }
      else Cf[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: o } = this, r = [];
    for (let c = 0; c < l.length; c++)
      (l[c] === null || v2(l[c])) && r.push(c);
    r.length && T2(l, r, o);
  }
  measure() {
    const { element: l, name: o } = this;
    return Cf[o](window.getComputedStyle(l.current), () => l.measureViewportBox());
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
const _h = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];
function eo(i) {
  return iv(i) && "offsetHeight" in i && !("ownerSVGElement" in i);
}
function Vh(i) {
  return iv(i) && "ownerSVGElement" in i;
}
const yo = {};
function wh(i) {
  return yo.current?.add(i), i;
}
const Uh = (i) => yo.current ? yo.current.bind(i) : i;
function t1(i, l, o) {
  if (i == null)
    return [];
  if (i instanceof EventTarget)
    return [i];
  if (typeof i == "string") {
    const r = l ? l.current : yo.current?.root || document, c = o?.[i] ?? r.querySelectorAll(i);
    return c ? Array.from(c) : [];
  }
  return Array.from(i).filter((r) => r != null);
}
function e1(i) {
  return i.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
function Bh(i, l, o) {
  const { style: r, vars: c, transformOrigin: h } = i;
  let d = !1, m = !1;
  for (const g in l) {
    const S = l[g];
    if (Ta.has(g)) {
      d = !0;
      continue;
    } else if (mv(g)) {
      c[g] = S;
      continue;
    } else {
      const v = Rh(S, Ah[g]);
      g.startsWith("origin") ? (m = !0, h[g] = v) : r[g] = v;
    }
  }
  if (l.transform || (d || o ? r.transform = HA(l, i.transform, o) : r.transform && (r.transform = "none")), m) {
    const { originX: g = "50%", originY: S = "50%", originZ: v = 0 } = h;
    r.transformOrigin = `${g} ${S} ${v}`;
  }
}
const b2 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, A2 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function M2(i, l, o = 1, r = 0, c = !0) {
  i.pathLength = 1;
  const h = c ? b2 : A2;
  i[h.offset] = `${-r}`, i[h.array] = `${l} ${o}`;
}
const n1 = [
  "transform",
  "opacity",
  "clipPath",
  "filter",
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function a1(i, {
  attrX: l,
  attrY: o,
  attrScale: r,
  pathLength: c,
  pathSpacing: h = 1,
  pathOffset: d = 0,
  // This is object creation, which we try to avoid per-frame.
  ...m
}, g, S, v) {
  if (Bh(i, m, S), g) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  i.attrs = i.style, i.style = {};
  const { attrs: y, style: b } = i;
  for (const O of n1)
    y[O] !== void 0 && (b[O] = y[O], delete y[O]);
  (b.transform || y.transformOrigin) && (b.transformOrigin = y.transformOrigin ?? "50% 50%", delete y.transformOrigin), b.transform && (b.transformBox = v?.transformBox ?? "fill-box", delete y.transformBox), l !== void 0 && (y.x = l), o !== void 0 && (y.y = o), r !== void 0 && (y.scale = r), c !== void 0 && M2(y, c, h, d, !1);
}
function i1({ top: i, left: l, right: o, bottom: r }) {
  return {
    x: { min: l, max: o },
    y: { min: i, max: r }
  };
}
function C2({ x: i, y: l }) {
  return { top: l.min, right: i.max, bottom: l.max, left: i.min };
}
function D2(i, l) {
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
function Of(i) {
  return i === void 0 || i === 1;
}
function th({ scale: i, scaleX: l, scaleY: o }) {
  return !Of(i) || !Of(l) || !Of(o);
}
const tl = [
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skewX",
  "skewY"
];
function Ka(i) {
  return th(i) || s1(i) || l1(i);
}
function l1(i) {
  return i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY;
}
function s1(i) {
  return Pg(i.x) || Pg(i.y);
}
function Pg(i) {
  return i && i !== "0%";
}
function go(i, l, o) {
  const r = i - o, c = l * r;
  return o + c;
}
function Fg(i, l, o, r, c) {
  return c !== void 0 && (i = go(i, c, r)), go(i, o, r) + l;
}
function eh(i, l = 0, o = 1, r, c) {
  i.min = Fg(i.min, l, o, r, c), i.max = Fg(i.max, l, o, r, c);
}
function u1(i, { x: l, y: o }) {
  eh(i.x, l.translate, l.scale, l.originPoint), eh(i.y, o.translate, o.scale, o.originPoint);
}
const kg = 0.999999999999, Ig = 1.0000000000001;
function O2(i, l, o, r = !1) {
  const c = o.length;
  if (!c)
    return;
  l.x = l.y = 1;
  let h, d;
  for (let m = 0; m < c; m++)
    h = o[m], d = h.projectionDelta, h.options.visualElement?.props.style?.display !== "contents" && (r === !0 && h.options.layoutScroll && h.scroll && h !== h.root && (on(i.x, -h.scroll.offset.x), on(i.y, -h.scroll.offset.y)), d && (l.x *= d.x.scale, l.y *= d.y.scale, u1(i, d)), r && (r.path?.[m] || r) !== h && Ka(h.latestValues) && no(i, h.latestValues, h.layout?.layoutBox));
  l.x < Ig && l.x > kg && (l.x = 1), l.y < Ig && l.y > kg && (l.y = 1);
}
function on(i, l) {
  i.min += l, i.max += l;
}
function Wg(i, l, o, r, c = 0.5) {
  const h = Ht(i.min, i.max, c);
  eh(i, l, o, h, r);
}
function $g(i, l) {
  return typeof i == "string" ? parseFloat(i) / 100 * (l.max - l.min) : i;
}
function no(i, l, o) {
  const r = o ?? i;
  Wg(i.x, $g(l.x, r.x), l.scaleX, l.scale, l.originX), Wg(i.y, $g(l.y, r.y), l.scaleY, l.scale, l.originY);
}
function o1(i, l) {
  return i1(D2(i.getBoundingClientRect(), l));
}
function R2(i, l, o) {
  const r = o1(i, o), { scroll: c } = l;
  return c && (on(r.x, c.offset.x), on(r.y, c.offset.y)), r;
}
const { schedule: hs } = /* @__PURE__ */ Ev(queueMicrotask, !1);
function x2(i, l, o) {
  const r = ye(i) ? i : $i(i);
  return r.start(Nh("", r, l, o)), r.animation;
}
const as = {};
function N2(i, l) {
  const o = Qt.now();
  i = Uh(i);
  const r = ({ timestamp: c }) => {
    const h = c - o;
    h >= l && (Ea(r), i(h - l));
  };
  return jt.setup(r, !0), wh(() => Ea(r));
}
function z2(i) {
  return Vh(i) && i.tagName === "svg";
}
function ao(i) {
  return ye(i) ? i.get() : i;
}
const t0 = (i) => typeof i == "number" ? i : parseFloat(i), _2 = _h.length, e0 = (i) => typeof i == "number" || at.test(i);
function V2(i, l, o, r, c, h) {
  c ? (i.opacity = Ht(0, o.opacity ?? 1, w2(r)), i.opacityExit = Ht(l.opacity ?? 1, 0, U2(r))) : h && (i.opacity = Ht(l.opacity ?? 1, o.opacity ?? 1, r));
  for (let d = 0; d < _2; d++) {
    const m = _h[d];
    let g = n0(l, m), S = n0(o, m);
    if (g === void 0 && S === void 0)
      continue;
    g || (g = 0), S || (S = 0), g === 0 || S === 0 || e0(g) === e0(S) ? (i[m] = Math.max(Ht(t0(g), t0(S), r), 0), (Mn.test(S) || Mn.test(g)) && (i[m] += "%")) : i[m] = S;
  }
  for (let d = 0; d < tl.length; d++) {
    const m = tl[d];
    (l[m] || o[m]) && (i[m] = Ht(l[m] || 0, o[m] || 0, r));
  }
}
function n0(i, l) {
  return i[l] !== void 0 ? i[l] : i.borderRadius;
}
const w2 = /* @__PURE__ */ r1(0, 0.5, fv), U2 = /* @__PURE__ */ r1(0.5, 0.95, rn);
function r1(i, l, o) {
  return (r) => r < i ? 0 : r > l ? 1 : o(/* @__PURE__ */ Ia(i, l, r));
}
function nh(i, l) {
  i.min = l.min, i.max = l.max;
}
function ln(i, l) {
  nh(i.x, l.x), nh(i.y, l.y);
}
function a0(i, l) {
  i.translate = l.translate, i.scale = l.scale, i.originPoint = l.originPoint, i.origin = l.origin;
}
const c1 = 1e-4, B2 = 1 - c1, L2 = 1 + c1, f1 = 0.01, H2 = 0 - f1, j2 = 0 + f1;
function Re(i) {
  return i.max - i.min;
}
function Y2(i, l, o) {
  return Math.abs(i - l) <= o;
}
function i0(i, l, o, r = 0.5) {
  i.origin = r, i.originPoint = Ht(l.min, l.max, i.origin), i.scale = Re(o) / Re(l), i.translate = Ht(o.min, o.max, i.origin) - i.originPoint, (i.scale >= B2 && i.scale <= L2 || isNaN(i.scale)) && (i.scale = 1), (i.translate >= H2 && i.translate <= j2 || isNaN(i.translate)) && (i.translate = 0);
}
function vo(i, l, o, r) {
  i0(i.x, l.x, o.x, r?.originX), i0(i.y, l.y, o.y, r?.originY);
}
function l0(i, l, o, r = 0) {
  const c = r ? Ht(o.min, o.max, r) : o.min;
  i.min = c + l.min, i.max = i.min + Re(l);
}
function G2(i, l, o, r) {
  l0(i.x, l.x, o.x, r?.x), l0(i.y, l.y, o.y, r?.y);
}
function s0(i, l, o, r = 0) {
  const c = r ? Ht(o.min, o.max, r) : o.min;
  i.min = l.min - c, i.max = i.min + Re(l);
}
function So(i, l, o, r) {
  s0(i.x, l.x, o.x, r?.x), s0(i.y, l.y, o.y, r?.y);
}
function u0(i, l, o, r, c) {
  return i -= l, i = go(i, 1 / o, r), c !== void 0 && (i = go(i, 1 / c, r)), i;
}
function q2(i, l = 0, o = 1, r = 0.5, c, h = i, d = i) {
  if (Mn.test(l) && (l = parseFloat(l), l = Ht(d.min, d.max, l / 100) - d.min), typeof l != "number")
    return;
  let m = Ht(h.min, h.max, r);
  i === h && (m -= l), i.min = u0(i.min, l, o, m, c), i.max = u0(i.max, l, o, m, c);
}
function o0(i, l, [o, r, c], h, d) {
  q2(i, l[o], l[r], l[c], l.scale, h, d);
}
const X2 = ["x", "scaleX", "originX"], Z2 = ["y", "scaleY", "originY"];
function r0(i, l, o, r) {
  o0(i.x, l, X2, o?.x, r?.x), o0(i.y, l, Z2, o?.y, r?.y);
}
const c0 = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Pi = () => ({
  x: c0(),
  y: c0()
}), f0 = () => ({ min: 0, max: 0 }), ee = () => ({
  x: f0(),
  y: f0()
});
function h0(i) {
  return i.translate === 0 && i.scale === 1;
}
function h1(i) {
  return h0(i.x) && h0(i.y);
}
function d0(i, l) {
  return i.min === l.min && i.max === l.max;
}
function Q2(i, l) {
  return d0(i.x, l.x) && d0(i.y, l.y);
}
function m0(i, l) {
  return Math.round(i.min) === Math.round(l.min) && Math.round(i.max) === Math.round(l.max);
}
function d1(i, l) {
  return m0(i.x, l.x) && m0(i.y, l.y);
}
function p0(i) {
  return Re(i.x) / Re(i.y);
}
function y0(i, l) {
  return i.translate === l.translate && i.scale === l.scale && i.originPoint === l.originPoint;
}
class K2 {
  constructor() {
    this.members = [];
  }
  add(l) {
    oh(this.members, l);
    for (let o = this.members.length - 1; o >= 0; o--) {
      const r = this.members[o];
      if (r === l || r === this.lead || r === this.prevLead)
        continue;
      const c = r.instance;
      (!c || c.isConnected === !1) && !r.snapshot && (co(this.members, r), r.unmount());
    }
    l.scheduleRender();
  }
  remove(l) {
    if (co(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) {
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
function g0(i, l) {
  return l.max === l.min ? 0 : i / (l.max - l.min) * 100;
}
const $l = {
  correct: (i, l) => {
    if (!l.target)
      return i;
    if (typeof i == "string")
      if (at.test(i))
        i = parseFloat(i);
      else
        return i;
    const o = g0(i, l.target.x), r = g0(i, l.target.y);
    return `${o}% ${r}%`;
  }
}, J2 = {
  correct: (i, { treeScale: l, projectionDelta: o }) => {
    const r = i, c = Ie.parse(i);
    if (c.length > 5)
      return r;
    const h = Ie.createTransformer(i), d = typeof c[0] != "number" ? 1 : 0, m = o.x.scale * l.x, g = o.y.scale * l.y;
    c[0 + d] /= m, c[1 + d] /= g;
    const S = Ht(m, g, 0.5);
    return typeof c[2 + d] == "number" && (c[2 + d] /= S), typeof c[3 + d] == "number" && (c[3 + d] /= S), h(c);
  }
}, P2 = {
  borderRadius: /* @__PURE__ */ Object.assign({}, $l, {
    applyTo: /* @__PURE__ */ _h.slice()
  }),
  borderTopLeftRadius: $l,
  borderTopRightRadius: $l,
  borderBottomLeftRadius: $l,
  borderBottomRightRadius: $l,
  boxShadow: J2
};
function F2(i, l, o) {
  let r = "";
  const c = i.x.translate / l.x, h = i.y.translate / l.y, d = o?.z || 0;
  if ((c || h || d) && (r = `translate3d(${c}px, ${h}px, ${d}px) `), (l.x !== 1 || l.y !== 1) && (r += `scale(${1 / l.x}, ${1 / l.y}) `), o) {
    const { transformPerspective: S } = o;
    S && (r = `perspective(${S}px) ${r}`);
    for (let v = 0; v < tl.length; v++) {
      const y = tl[v], b = o[y];
      b && (r += `${y}(${b}deg) `), !v && o.pathRotation && (r += `rotate(${o.pathRotation}deg) `);
    }
  }
  const m = i.x.scale * l.x, g = i.y.scale * l.y;
  return (m !== 1 || g !== 1) && (r += `scale(${m}, ${g})`), r || "none";
}
function un(i) {
  return [i("x"), i("y")];
}
const k2 = (i, l) => i.depth - l.depth;
class I2 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(l) {
    oh(this.children, l), this.isDirty = !0;
  }
  remove(l) {
    co(this.children, l), this.isDirty = !0;
  }
  forEach(l) {
    this.isDirty && this.children.sort(k2), this.isDirty = !1, this.children.forEach(l);
  }
}
const io = {
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
}, v0 = ["z", "skew", "skewZ"], W2 = 1e3;
let $2 = 0;
function S0(i, l, o, r) {
  const { latestValues: c } = l;
  c[i] && (o[i] = c[i], l.setStaticValue(i, 0), r && (r[i] = 0));
}
const Rf = (i) => i.instance && Wi.get(i.instance)?.demote() && i.resetSkewAndRotation();
function m1(i) {
  if (i.hasCheckedOptimisedAppear = !0, i.root === i)
    return;
  const { visualElement: l } = i.options;
  if (!l)
    return;
  const o = Wv(l);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: c, layoutId: h } = i.options;
    window.MotionCancelOptimisedAnimation(o, "transform", jt, !(c || h));
  }
  const { parent: r } = i;
  r && !r.hasCheckedOptimisedAppear && m1(r);
}
function p1({ attachResizeListener: i, defaultParent: l, measureScroll: o, checkIsScrollRoot: r, resetTransform: c }) {
  return Object.assign(as, {
    ...P2,
    ...as
  }), class {
    constructor(d = {}, m = l?.()) {
      this.id = $2++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(n3), this.nodes.forEach(c3), this.nodes.forEach(f3), this.nodes.forEach(a3);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = d, this.root = m ? m.root || m : this, this.path = m ? [...m.path, m] : [], this.parent = m, this.depth = m ? m.depth + 1 : 0;
      for (let g = 0; g < this.path.length; g++)
        this.path[g].shouldResetTransform = !0;
      this.root === this && (this.nodes = new I2());
    }
    addEventListener(d, m) {
      return this.eventHandlers.has(d) || this.eventHandlers.set(d, new fo()), this.eventHandlers.get(d).add(m);
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
      this.isSVG = Vh(d) && !z2(d), this.instance = d;
      const { layoutId: m, layout: g, visualElement: S } = this.options;
      if (S && !S.current && S.mount(d), this.root.nodes.add(this), this.parent?.children.add(this), this.root.hasTreeAnimated && (g || m) && (this.isLayoutDirty = !0), i) {
        let v, y = 0;
        const b = () => this.root.updateBlockedByResize = !1;
        jt.read(() => {
          y = window.innerWidth;
        }), i(d, () => {
          const O = window.innerWidth;
          O !== y && (y = O, this.root.updateBlockedByResize = !0, v?.(), v = N2(b, 250), io.hasAnimatedSinceResize && (io.hasAnimatedSinceResize = !1, this.nodes.forEach(b0)));
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
      const { layoutId: d, layout: m, visualElement: g, animate: S } = this.options;
      !this.instance || this.hasLayoutListener || S === !1 || !g || !(d || m) || (this.hasLayoutListener = !0, this.addEventListener("didUpdate", ({ delta: v, hasLayoutChanged: y, hasRelativeLayoutChanged: b, layout: O }) => {
        if (this.isAnimationBlocked) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const x = this.options.transition || g.getDefaultTransition() || p3, { onLayoutAnimationStart: U, onLayoutAnimationComplete: z } = g.getProps(), X = !this.targetLayout || !d1(this.targetLayout, O), K = !y && b;
        if (this.options.layoutRoot || this.resumeFrom || K || y && (X || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const k = {
            ...xh(x, "layout"),
            onPlay: U,
            onComplete: z
          };
          (g.shouldReduceMotion || this.options.layoutRoot) && (k.delay = 0, k.type = !1), this.startAnimation(k), this.setAnimationOrigin(v, K, k.path);
        } else
          y || b0(this), this.isLead() && this.options.onExitComplete?.();
        this.targetLayout = O;
      }));
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), this.getStack()?.remove(this), this.parent?.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), this.hasLayoutListener = !1, Ea(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes?.forEach(h3), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && m1(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      Rf(this), this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const y = this.path[v];
        y.shouldResetTransform = !0, Rf(y), (typeof y.latestValues.x == "string" || typeof y.latestValues.y == "string") && (y.isLayoutDirty = !0), y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1), y.isAnimationBlocked && (y.dragSnapshot || (y.dragSnapshot = y.measure()), this.dragAncestor = y);
      }
      const { layoutId: m, layout: g } = this.options;
      if (m === void 0 && !g)
        return;
      const S = this.getTransformTemplate();
      this.prevTransformTemplateValue = S ? S(this.latestValues, "") : void 0, this.updateSnapshot(), d && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const g = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), g && this.nodes.forEach(l3), this.nodes.forEach(T0);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(E0);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(u3), this.nodes.forEach(o3), this.nodes.forEach(r3), this.nodes.forEach(t3), this.nodes.forEach(e3)) : this.nodes.forEach(E0), this.clearAllSnapshots();
      const m = Qt.now();
      ne.delta = Cn(0, 1e3 / 60, m - ne.timestamp), ne.timestamp = m, ne.isProcessing = !0, bf.update.process(ne), bf.preRender.process(ne), bf.render.process(ne), ne.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, hs.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(i3), this.sharedNodes.forEach((d, m) => d.members.length ? d.removeLeadSnapshot() : this.sharedNodes.delete(m));
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
        for (let g = 0; g < this.path.length; g++)
          this.path[g].updateScroll();
      const d = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected || (this.layoutCorrected = ee()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: m } = this.options;
      m?.notify("LayoutMeasure", this.layout.layoutBox, d?.layoutBox);
    }
    updateScroll(d = "measure") {
      const { scroll: m, instance: g } = this, { animationId: S } = this.root;
      if (this.options.layoutScroll && g && !(m && m.animationId === S && m.phase === d)) {
        const v = r(g);
        this.scroll = {
          animationId: S,
          phase: d,
          isRoot: v,
          offset: o(g),
          wasRoot: m ? m.isRoot : v
        };
      }
    }
    resetTransform() {
      if (!c)
        return;
      const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
      d && Rf(this);
      const m = this.projectionDelta && !h1(this.projectionDelta), g = this.getTransformTemplate(), S = g ? g(this.latestValues, "") : void 0, v = S !== this.prevTransformTemplateValue;
      d && this.instance && (m || Ka(this.latestValues) || v) && (c(this.instance, S), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(d = !0) {
      const m = this.measurePageBox();
      let g = this.removeElementScroll(m);
      return d && (g = this.removeTransform(g)), y3(g), {
        animationId: this.root.animationId,
        measuredBox: m,
        layoutBox: g,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: d } = this.options;
      if (!d)
        return ee();
      const m = d.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(g3))) {
        const { scroll: S } = this.root;
        S && (on(m.x, S.offset.x), on(m.y, S.offset.y));
      }
      return m;
    }
    removeElementScroll(d) {
      const m = ee();
      if (ln(m, d), this.scroll?.wasRoot)
        return m;
      for (let g = 0; g < this.path.length; g++) {
        const S = this.path[g], { scroll: v, options: y } = S;
        S !== this.root && v && y.layoutScroll && (v.wasRoot && ln(m, d), on(m.x, v.offset.x), on(m.y, v.offset.y));
      }
      return m;
    }
    applyTransform(d, m = !1, g, S, v = 0) {
      const y = g || ee();
      ln(y, d);
      for (let b = v; b < this.path.length; b++) {
        const O = this.path[b];
        !m && O.options.layoutScroll && O.scroll && O !== O.root && (on(y.x, -O.scroll.offset.x), on(y.y, -O.scroll.offset.y)), Ka(O.latestValues) && no(y, O.latestValues, O.layout?.layoutBox);
      }
      return !S && Ka(this.latestValues) && no(y, this.latestValues, this.layout?.layoutBox), y;
    }
    removeTransform(d) {
      const m = ee();
      ln(m, d);
      for (let g = 0; g < this.path.length; g++) {
        const S = this.path[g];
        if (!Ka(S.latestValues))
          continue;
        let v;
        S.instance && (th(S.latestValues) && S.updateSnapshot(), v = ee(), ln(v, S.measurePageBox())), r0(m, S.latestValues, S.snapshot?.layoutBox, v);
      }
      return Ka(this.latestValues) && r0(m, this.latestValues), m;
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
      const g = !!this.resumingFrom || this !== m;
      if (!(d || g && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: v, layoutId: y } = this.options;
      if (!this.layout || !(v || y))
        return;
      this.resolvedRelativeTargetAt = ne.timestamp;
      const b = this.getClosestProjectingParent();
      !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && b && b.layout ? this.createRelativeTarget(b, this.layout.layoutBox, b.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ee(), this.targetWithTransforms = ee()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), G2(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target, !0) : ln(this.target, this.layout.layoutBox), u1(this.target, this.targetDelta)) : ln(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && b && (!b.resumingFrom == !this.resumingFrom || /**
       * Shared layout animations within a layoutRoot
       * animate relative to it.
       */
      b.options.layoutRoot && !b.resumingFrom) && !b.options.layoutScroll && b.target && this.animationProgress !== 1 ? this.createRelativeTarget(b, this.target, b.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || th(this.parent.latestValues) || s1(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(d, m, g) {
      this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ee(), this.relativeTargetOrigin = ee(), So(this.relativeTargetOrigin, m, g, this.options.layoutAnchor || void 0), ln(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const d = this.getLead(), m = !!this.resumingFrom || this !== d;
      let g = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (g = !1), m && (this.isSharedProjectionDirty || this.isTransformDirty) && (g = !1), this.resolvedRelativeTargetAt === ne.timestamp && (g = !1), g)
        return;
      const { layout: S, layoutId: v } = this.options;
      if (this.isTreeAnimating = !!(this.parent?.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(S || v))
        return;
      ln(this.layoutCorrected, this.layout.layoutBox);
      const y = this.treeScale.x, b = this.treeScale.y;
      O2(this.layoutCorrected, this.treeScale, this.path, m && (d.relativeTarget && !d.relativeParent.resumingFrom ? d.relativeParent : !0)), d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox, d.targetWithTransforms = ee());
      const { target: O } = d;
      if (!O) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (a0(this.prevProjectionDelta.x, this.projectionDelta.x), a0(this.prevProjectionDelta.y, this.projectionDelta.y)), vo(this.projectionDelta, this.layoutCorrected, O, this.latestValues), (this.treeScale.x !== y || this.treeScale.y !== b || !y0(this.projectionDelta.x, this.prevProjectionDelta.x) || !y0(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", O));
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
      this.prevProjectionDelta = Pi(), this.projectionDelta = Pi(), this.projectionDeltaWithTransform = Pi();
    }
    setAnimationOrigin(d, m = !1, g) {
      const S = this.snapshot, v = S ? S.latestValues : {}, y = { ...this.latestValues }, b = Pi();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !m;
      const O = ee(), x = S?.source !== this.layout?.source, U = this.getStack(), z = !U || U.members.length <= 1, X = !!(x && !z && this.options.crossfade === !0 && !this.path.some(m3));
      this.animationProgress = 0;
      let K;
      const k = g?.interpolateProjection(d);
      this.mixTargetDelta = ($) => {
        const et = $ / 1e3, st = k?.(et);
        A0(b.x, d.x, et), A0(b.y, d.y, et), st && (b.x.translate = st.x, b.y.translate = st.y), this.setTargetDelta(b), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (So(O, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), d3(this.relativeTarget, this.relativeTargetOrigin, O, et), K && Q2(this.relativeTarget, K) && (this.isProjectionDirty = !1), K || (K = ee()), ln(K, this.relativeTarget)), x && (this.animationValues = y, V2(y, v, this.latestValues, et, X, z)), st?.rotate !== void 0 && (this.animationValues || (this.animationValues = y), this.animationValues.pathRotation = st.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = et;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(d) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (Ea(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = jt.update(() => {
        io.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = $i(0)), this.motionValue.jump(0, !1), this.currentAnimation = x2(this.motionValue, [0, 1e3], {
          ...d,
          velocity: 0,
          isSync: !0,
          onUpdate: (m) => {
            this.mixTargetDelta(m), d.onUpdate && d.onUpdate(m);
          },
          onComplete: () => {
            d.onComplete && d.onComplete(), this.completeAnimation();
          }
        }), sA(this.currentAnimation, this), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const d = this.getStack();
      d && d.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta?.(W2), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const d = this.getLead(), { targetWithTransforms: m, layout: g, latestValues: S } = d;
      let { target: v } = d;
      if (!(!m || !v || !g)) {
        if (this !== d && this.layout && g && y1(this.options.animationType, this.layout.layoutBox, g.layoutBox)) {
          const { layoutBox: y } = this.layout, b = v;
          v = this.target || ee(), R0(v.x, b.x, y.x), R0(v.y, b.y, y.y);
        }
        ln(m, v), no(m, S), vo(this.projectionDeltaWithTransform, this.layoutCorrected, m, S);
      }
    }
    registerSharedNode(d, m) {
      this.sharedNodes.has(d) || this.sharedNodes.set(d, new K2()), this.sharedNodes.get(d).add(m);
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
    promote({ needsReset: d, transition: m, preserveFollowOpacity: g } = {}) {
      this.getStack()?.promote(this, g), d && (this.projectionDelta = void 0, this.needsReset = !0), m && this.setOptions({ transition: m });
    }
    relegate() {
      return this.getStack()?.relegate(this) || !1;
    }
    resetSkewAndRotation() {
      const { visualElement: d } = this.options;
      if (!d)
        return;
      const { latestValues: m } = d;
      if (!l1(m))
        return;
      const g = {};
      for (let S = 0; S < v0.length; S++)
        S0(v0[S], d, g, this.animationValues);
      for (let S = 0; S < tl.length; S++)
        S0(tl[S], d, g, this.animationValues);
      d.render();
      for (const S in g)
        d.setStaticValue(S, g[S]), this.animationValues && (this.animationValues[S] = g[S]);
      d.scheduleRender();
    }
    applyProjectionStyles(d, m) {
      if (!this.instance || this.isSVG)
        return;
      const g = this.getLead();
      if (!this.isVisible && g !== this) {
        d.visibility = "hidden";
        return;
      }
      const S = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, d.visibility = "", d.opacity = "", d.pointerEvents = ao(m?.pointerEvents) || "", d.transform = S ? S(this.latestValues, "") : "none";
        return;
      }
      if (!this.projectionDelta || !this.layout || !g.target) {
        (this.options.layoutId || this.needsShow) && (this.needsShow = !1, d.visibility = "", d.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, d.pointerEvents = ao(m?.pointerEvents) || ""), this.hasProjected && !Ka(this.latestValues) && (d.transform = S ? S({}, "") : "none", this.hasProjected = !1);
        return;
      }
      d.visibility = "";
      const v = g.animationValues || g.latestValues;
      this.applyTransformsToTarget();
      let y = F2(this.projectionDeltaWithTransform, this.treeScale, v);
      S && (y = S(v, y)), d.transform = y;
      const { x: b, y: O } = this.projectionDelta;
      d.transformOrigin = `${b.origin * 100}% ${O.origin * 100}% 0`, g.animationValues ? d.opacity = g === this ? v.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : d.opacity = g === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
      for (const x in as) {
        if (v[x] === void 0)
          continue;
        const { correct: U, applyTo: z, isCSSVariable: X } = as[x], K = y === "none" ? v[x] : U(v[x], g);
        if (z) {
          const k = z.length;
          for (let $ = 0; $ < k; $++)
            d[z[$]] = K;
        } else
          X ? this.options.visualElement.renderState.vars[x] = K : d[x] = K;
      }
      this.options.layoutId && (d.pointerEvents = g === this ? ao(m?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = this.dragSnapshot = this.dragAncestor = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((d) => d.currentAnimation?.stop()), this.root.nodes.forEach(T0), this.root.sharedNodes.clear();
    }
  };
}
function t3(i) {
  i.updateLayout(), s3(i);
}
function e3(i) {
  const l = i.resumeFrom?.snapshot || i.snapshot;
  if (i.isLead() && i.layout && l && i.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: r } = i.layout, { animationType: c } = i.options, h = l.source !== i.layout.source, d = (O, x) => {
      if (c === "size")
        un((U) => {
          const z = Re(O[U]);
          O[U].min = x[U].min, O[U].max = O[U].min + z;
        });
      else if (c === "x" || c === "y") {
        const U = c === "x" ? "y" : "x";
        nh(O[U], x[U]);
      } else y1(c, l.layoutBox, o) && un((U) => {
        const z = Re(x[U]);
        O[U].max = O[U].min + z, i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0, i.relativeTarget[U].max = i.relativeTarget[U].min + z);
      });
    }, m = h ? l.measuredBox : l.layoutBox;
    d(m, o);
    const g = Pi();
    vo(g, o, l.layoutBox);
    const S = Pi();
    vo(S, h ? i.applyTransform(r, !0) : o, m);
    const v = !h1(g);
    let y = !1;
    const b = i.getClosestProjectingParent();
    if ((!i.resumeFrom || b?.options.layoutRoot && i.resumeFrom.path.includes(b)) && b && !b.resumeFrom) {
      const { snapshot: O, layout: x } = b;
      if (O && x) {
        const U = i.options.layoutAnchor || void 0, z = ee();
        So(z, h ? i.resumeFrom.applyTransform(l.layoutBox, !0, void 0, !0, b.depth + 1) : l.layoutBox, O.layoutBox, U);
        const X = ee();
        So(X, o, x.layoutBox, U), h && d(z, X), d1(z, X) || (y = !0), b.options.layoutRoot && (i.relativeTarget = X, i.relativeTargetOrigin = z, i.relativeParent = b);
      }
    }
    i.notifyListeners("didUpdate", {
      layout: o,
      snapshot: l,
      delta: S,
      layoutDelta: g,
      hasLayoutChanged: v,
      hasRelativeLayoutChanged: y
    });
  } else i.isLead() && i.options.onExitComplete?.();
  i.options.transition = void 0;
}
function n3(i) {
  i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty), i.isSharedProjectionDirty || (i.isSharedProjectionDirty = !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty)), i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function a3(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function i3(i) {
  i.clearSnapshot();
}
function T0(i) {
  i.clearMeasurements();
}
function l3(i) {
  i.isLayoutDirty = !0, i.updateLayout();
}
function E0(i) {
  i.isLayoutDirty = !1;
}
function s3(i) {
  const { snapshot: l, dragAncestor: o } = i, r = o?.isAnimationBlocked && o.layout;
  if (!l || !r || i.resumeFrom || i.isAnimationBlocked)
    return;
  const c = o.dragSnapshot;
  un((h) => on(l.layoutBox[h], r.layoutBox[h].min - c.layoutBox[h].min));
}
function u3(i) {
  i.isAnimationBlocked && i.layout && !i.isLayoutDirty && (i.snapshot = i.dragSnapshot || i.layout, i.isLayoutDirty = !0);
}
function o3(i) {
  i.relativeTarget && i.relativeParent?.isLayoutDirty && (i.currentAnimation ? i.isLayoutDirty = !0 : (i.targetDelta = void 0, i.removeRelativeTarget()));
}
function r3(i) {
  const { visualElement: l } = i.options;
  l?.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), i.resetTransform();
}
function b0(i) {
  i.finishAnimation(), i.targetDelta = i.relativeTarget = i.target = void 0, i.isProjectionDirty = !0;
}
function c3(i) {
  i.resolveTargetDelta();
}
function f3(i) {
  i.calcProjection();
}
function h3(i) {
  i.resetSkewAndRotation();
}
function A0(i, l, o) {
  i.translate = Ht(l.translate, 0, o), i.scale = Ht(l.scale, 1, o), i.origin = l.origin, i.originPoint = l.originPoint;
}
function M0(i, l, o, r) {
  i.min = Ht(l.min, o.min, r), i.max = Ht(l.max, o.max, r);
}
function d3(i, l, o, r) {
  M0(i.x, l.x, o.x, r), M0(i.y, l.y, o.y, r);
}
function m3(i) {
  return i.animationValues?.opacityExit !== void 0;
}
const p3 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, C0 = (i) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i), D0 = C0("applewebkit/") && !C0("chrome/") ? Math.round : rn;
function O0(i) {
  i.min = D0(i.min), i.max = D0(i.max);
}
function y3(i) {
  O0(i.x), O0(i.y);
}
function R0(i, l, o) {
  i.max = Re(o) + (i.min = l.min);
}
function y1(i, l, o) {
  return i === "position" || i === "preserve-aspect" && !Y2(p0(l), p0(o), 0.2);
}
function g3(i) {
  return i !== i.root && i.scroll?.wasRoot;
}
function Wa(i, l, o, r = { passive: !0 }) {
  return i.addEventListener(l, o, r), () => i.removeEventListener(l, o, r);
}
const v3 = /* @__PURE__ */ p1({
  attachResizeListener: (i, l) => Wa(i, "resize", l),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), lo = {
  current: void 0
}, g1 = /* @__PURE__ */ p1({
  measureScroll: (i) => ({
    x: i.scrollLeft,
    y: i.scrollTop
  }),
  defaultParent: () => {
    if (!lo.current) {
      const i = new v3({});
      i.mount(window), i.setOptions({ layoutScroll: !0 }), lo.current = i;
    }
    return lo.current;
  },
  resetTransform: (i, l) => {
    i.style.transform = l !== void 0 ? l : "none";
  },
  checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed"
}), S3 = /* @__PURE__ */ new WeakMap();
function Do(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function ds(i) {
  return typeof i == "string" || Array.isArray(i);
}
const Oo = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], x0 = /* @__PURE__ */ ["initial"].concat(Oo);
function Ro(i) {
  if (Do(i.animate))
    return !0;
  for (let l = 0; l < x0.length; l++)
    if (ds(i[x0[l]]))
      return !0;
  return !1;
}
function v1(i) {
  return !!(Ro(i) || i.variants);
}
function T3(i, l, o) {
  for (const r in l) {
    const c = l[r], h = o[r];
    if (ye(c))
      i.addValue(r, c);
    else if (ye(h))
      i.addValue(r, $i(c, { owner: i }));
    else if (h !== c)
      if (i.hasValue(r)) {
        const d = i.getValue(r);
        d.liveStyle === !0 ? d.jump(c) : d.hasAnimated || d.set(c);
      } else {
        const d = i.getStaticValue(r);
        i.addValue(r, $i(d !== void 0 ? d : c, { owner: i }));
      }
  }
  for (const r in o)
    l[r] === void 0 && i.removeValue(r);
  return l;
}
const To = { current: null }, Lh = { current: !1 }, E3 = typeof window < "u";
function S1() {
  if (Lh.current = !0, !!E3)
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"), l = () => To.current = i.matches;
      i.addEventListener("change", l), l();
    } else
      To.current = !1;
}
const N0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let Eo = {};
function T1(i) {
  Eo = i;
}
function b3() {
  return Eo;
}
class A3 {
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
  constructor({ parent: l, props: o, presenceContext: r, reducedMotionConfig: c, skipAnimations: h, blockInitialAnimation: d, visualState: m }, g = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Dh, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const O = Qt.now();
      this.renderScheduledAt < O && (this.renderScheduledAt = O, jt.render(this.render, !1, !0));
    };
    const { latestValues: S, renderState: v } = m;
    this.latestValues = S, this.baseTarget = { ...S }, this.initialValues = o.initial ? { ...S } : {}, this.renderState = v, this.parent = l, this.props = o, this.presenceContext = r, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = h, this.options = g, this.blockInitialAnimation = !!d, this.isControllingVariants = Ro(o), this.isVariantNode = v1(o), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(l && l.current);
    const { willChange: y, ...b } = this.scrapeMotionValuesFromProps(o, {}, this);
    for (const O in b) {
      const x = b[O];
      S[O] !== void 0 && ye(x) && x.set(S[O]);
    }
  }
  mount(l) {
    if (this.hasBeenMounted)
      for (const o in this.initialValues)
        this.values.get(o)?.jump(this.initialValues[o]), this.latestValues[o] = this.initialValues[o];
    if (this.current = l, S3.set(l, this), this.projection?.instance || this.projection?.mount(l), this.isVariantNode && !this.isControllingVariants) {
      let o = this;
      do
        o = o.props.inherit !== !1 && o.parent;
      while (o && !o.isVariantNode);
      if (o) {
        const { variantChildren: r } = o;
        r.add(this), this.removeFromVariantTree = () => r.delete(this);
      }
    }
    this.values.forEach((o, r) => this.bindToMotionValue(r, o)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Lh.current || S1(), this.shouldReduceMotion = To.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    this.projection?.unmount(), Ea(this.notifyUpdate), Ea(this.render), this.valueSubscriptions.forEach((l) => l()), this.valueSubscriptions.clear(), this.removeFromVariantTree?.(), this.parent?.removeChild(this);
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
    if (this.valueSubscriptions.get(l)?.(), o.accelerate && kf.has(l) && this.current instanceof HTMLElement) {
      const { factory: d, keyframes: m, times: g, ease: S, duration: v } = o.accelerate, y = new qv({
        element: this.current,
        name: l,
        keyframes: m,
        times: g,
        ease: S,
        duration: /* @__PURE__ */ ke(v)
      }), b = d(y);
      this.valueSubscriptions.set(l, () => {
        b(), y.cancel();
      });
      return;
    }
    const r = Ta.has(l);
    r && this.onBindTransform && this.onBindTransform();
    const c = o.on("change", (d) => {
      this.latestValues[l] = d, this.props.onUpdate && jt.preRender(this.notifyUpdate), r && (this.projection && (this.projection.isTransformDirty = !0), Wi.get(this.current)?.check()), this.scheduleRender();
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
    for (l in Eo) {
      const o = Eo[l];
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
    (l.transformTemplate || r) && this.scheduleRender(), (l.transformTemplate && !r || l.onUpdate && !c) && Wi.get(this.current)?.demote(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = o;
    for (let h = 0; h < N0.length; h++) {
      const d = N0[h];
      this.propEventSubscriptions[d]?.(), delete this.propEventSubscriptions[d];
      const m = "on" + d, g = l[m];
      g && (this.propEventSubscriptions[d] = this.on(d, g));
    }
    this.prevMotionValues = T3(this, this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue?.();
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
    return r || (r = this.values.get(l), r === void 0 && o !== void 0 && (r = $i(o ?? this.getDefaultValue?.(l), {
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
    return r != null && (typeof r == "string" && (rh(r) || ch(r)) ? r = parseFloat(r) : (
      /**
       * If the value as read isn't animatable (e.g. "none") but
       * the target is, derive an animatable none from the target.
       * A value is animatable if it's a number or contains a
       * number or color, which is cheaper to check than trying
       * every value type in turn.
       */
      typeof r != "number" && !Ie.test(r) && Ie.test(o) && (r = Mh(l, o))
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
    return (this.events[l] || (this.events[l] = new fo())).add(o);
  }
  notify(l, ...o) {
    this.events[l]?.notify(...o);
  }
  scheduleRenderMicrotask() {
    hs.render(this.render);
  }
}
class E1 extends A3 {
  constructor() {
    super(...arguments), this.KeyframeResolver = E2;
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
function b1(i, { style: l, vars: o }, r, c) {
  const h = i.style;
  let d;
  for (d in l)
    h[d] = l[d];
  c?.applyProjectionStyles(h, r);
  for (d in o)
    h.setProperty(d, o[d]);
}
function A1(i, { layout: l, layoutId: o }) {
  return Ta.has(i) || i.startsWith("origin") || (l || o !== void 0) && (!!as[i] || i === "opacity");
}
function Hh(i, l, o) {
  const r = i.style, c = l?.style, h = {};
  if (!r)
    return h;
  for (const d in r)
    (ye(r[d]) || c && ye(c[d]) || A1(d, i) || o?.getValue(d)?.liveStyle !== void 0) && (h[d] = r[d]);
  return h;
}
function M3(i) {
  return window.getComputedStyle(i);
}
class C3 extends E1 {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = b1;
  }
  mount(l) {
    super.mount(l);
  }
  readValueFromInstance(l, o) {
    if (Ta.has(o))
      return this.projection?.isProjecting ? fs(o) : yA(l, o);
    {
      const r = M3(l), c = (mv(o) ? r.getPropertyValue(o) : r[o]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: o }) {
    return o1(l, o);
  }
  build(l, o, r) {
    Bh(l, o, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return Hh(l, o, r);
  }
}
const jh = (i) => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1;
function Yh(i) {
  return {
    point: {
      x: i.pageX,
      y: i.pageY
    }
  };
}
const D3 = (i) => (l) => jh(l) && i(l, Yh(l));
function ls(i, l, o, r) {
  return Wa(i, l, D3(o), r);
}
const so = /* @__PURE__ */ new WeakMap();
let uo;
const M1 = (i, l, o) => (r, c) => c && c[0] ? c[0][i + "Size"] : Vh(r) && "getBBox" in r ? r.getBBox()[l] : r[o], O3 = /* @__PURE__ */ M1("inline", "width", "offsetWidth"), R3 = /* @__PURE__ */ M1("block", "height", "offsetHeight");
function x3({ target: i, borderBoxSize: l }) {
  so.get(i)?.forEach((o) => {
    o(i, {
      get width() {
        return O3(i, l);
      },
      get height() {
        return R3(i, l);
      }
    });
  });
}
function N3(i) {
  i.forEach(x3);
}
function z3() {
  typeof ResizeObserver > "u" || (uo = new ResizeObserver(N3));
}
function _3(i, l) {
  uo || z3();
  const o = t1(i);
  return o.forEach((r) => {
    let c = so.get(r);
    c || (c = /* @__PURE__ */ new Set(), so.set(r, c)), c.add(l), uo?.observe(r);
  }), () => {
    o.forEach((r) => {
      const c = so.get(r);
      c?.delete(l), c?.size || uo?.unobserve(r);
    });
  };
}
const oo = /* @__PURE__ */ new Set();
let Fi;
function V3() {
  Fi = () => {
    const i = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    oo.forEach((l) => l(i));
  }, window.addEventListener("resize", Fi);
}
function w3(i) {
  return oo.add(i), Fi || V3(), () => {
    oo.delete(i), !oo.size && typeof Fi == "function" && (window.removeEventListener("resize", Fi), Fi = void 0);
  };
}
function z0(i, l) {
  return wh(typeof i == "function" ? w3(i) : _3(i, l));
}
const _0 = (i, l) => Math.abs(i - l);
function U3(i, l) {
  const o = _0(i.x, l.x), r = _0(i.y, l.y);
  return Math.sqrt(o ** 2 + r ** 2);
}
const V0 = /* @__PURE__ */ new Set(["auto", "scroll"]);
class C1 {
  constructor(l, o, { transformPagePoint: r, contextWindow: c = window, dragSnapToOrigin: h = !1, distanceThreshold: d = 3, element: m } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.onElementScroll = (O) => {
      this.handleScroll(O.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.hasPendingMove = !1, this.lastRawMoveEventInfo && (this.lastMoveEventInfo = ku(this.lastRawMoveEventInfo, this.transformPagePoint));
      const O = Nf(this.lastMoveEventInfo, this.history), x = this.startEvent !== null, U = U3(O.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!x && !U)
        return;
      const { point: z } = O;
      this.history.push({ ...z, timestamp: Qt.now() });
      const { onStart: X, onMove: K } = this.handlers;
      x || (X?.(this.lastMoveEvent, O), this.startEvent = this.lastMoveEvent), K?.(this.lastMoveEvent, O);
    }, this.handlePointerMove = (O, x) => {
      this.handleScroll(window), this.lastMoveEvent = O, this.lastRawMoveEventInfo = x, this.lastMoveEventInfo = ku(x, this.transformPagePoint), this.hasPendingMove = !0, jt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (O, x) => {
      this.hasPendingMove && this.updatePoint(), this.end();
      const { onEnd: U, onSessionEnd: z, resumeAnimation: X } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && X?.(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const K = Nf(O.type === "pointercancel" ? this.lastMoveEventInfo : ku(x, this.transformPagePoint), this.history);
      this.startEvent && U?.(O, K), z?.(O, K);
    }, !jh(l))
      return;
    this.dragSnapToOrigin = h, this.handlers = o, this.transformPagePoint = r, this.distanceThreshold = d, this.contextWindow = c || window;
    const g = Yh(l), S = ku(g, this.transformPagePoint), { point: v } = S;
    this.history = [{ ...v, timestamp: Qt.now() }];
    const { onSessionStart: y } = o;
    y && y(l, Nf(S, this.history));
    const b = { passive: !0, capture: !0 };
    this.removeListeners = Ii(ls(this.contextWindow, "pointermove", this.handlePointerMove, b), ls(this.contextWindow, "pointerup", this.handlePointerUp, b), ls(this.contextWindow, "pointercancel", this.handlePointerUp, b)), m && this.startScrollTracking(m);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(l) {
    let o = l.parentElement;
    for (; o; ) {
      const r = getComputedStyle(o);
      (V0.has(r.overflowX) || V0.has(r.overflowY)) && this.scrollPositions.set(o, xf(o)), o = o.parentElement;
    }
    this.scrollPositions.set(window, xf(window)), this.removeScrollListeners = Ii(
      // Capture listener catches element scroll events as they bubble
      Wa(window, "scroll", this.onElementScroll, {
        capture: !0
      }),
      // Direct window scroll listener (window scroll doesn't bubble)
      Wa(window, "scroll", this.onWindowScroll, {})
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
    const r = l === window, c = xf(l), h = { x: c.x - o.x, y: c.y - o.y };
    h.x === 0 && h.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += h.x, this.lastMoveEventInfo.point.y += h.y) : this.history.length > 0 && (this.history[0].x -= h.x, this.history[0].y -= h.y), this.scrollPositions.set(l, c), jt.update(this.updatePoint, !0));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners?.(), this.removeScrollListeners?.(), this.scrollPositions.clear(), Ea(this.updatePoint);
  }
}
const xf = (i) => i === window ? { x: window.scrollX, y: window.scrollY } : {
  x: i.scrollLeft,
  y: i.scrollTop
};
function ku(i, l) {
  return l ? { point: l(i.point) } : i;
}
function w0(i, l) {
  return { x: i.x - l.x, y: i.y - l.y };
}
function Nf({ point: i }, l) {
  return {
    point: i,
    delta: w0(i, D1(l)),
    offset: w0(i, B3(l)),
    velocity: L3(l, 0.1)
  };
}
function B3(i) {
  return i[0];
}
function D1(i) {
  return i[i.length - 1];
}
function L3(i, l) {
  if (i.length < 2)
    return { x: 0, y: 0 };
  let o = i.length - 1, r = null;
  const c = D1(i);
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
const H3 = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function j3(i) {
  return H3.has(i.tagName) || i.isContentEditable === !0;
}
const Y3 = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function G3(i) {
  return Y3.has(i.tagName) || i.isContentEditable === !0;
}
const sn = {
  x: !1,
  y: !1
};
function O1() {
  return sn.x || sn.y;
}
function q3(i) {
  return i === "x" || i === "y" ? sn[i] ? null : (sn[i] = !0, () => {
    sn[i] = !1;
  }) : sn.x || sn.y ? null : (sn.x = sn.y = !0, () => {
    sn.x = sn.y = !1;
  });
}
function X3(i, { min: l, max: o }, r) {
  return l !== void 0 && i < l ? i = r ? Ht(l, i, r.min) : Math.max(i, l) : o !== void 0 && i > o && (i = r ? Ht(o, i, r.max) : Math.min(i, o)), i;
}
function U0(i, l, o) {
  return {
    min: l !== void 0 ? i.min + l : void 0,
    max: o !== void 0 ? i.max + o - (i.max - i.min) : void 0
  };
}
function Z3(i, { top: l, left: o, bottom: r, right: c }) {
  return {
    x: U0(i.x, o, c),
    y: U0(i.y, l, r)
  };
}
function B0(i, l) {
  let o = l.min - i.min, r = l.max - i.max;
  return l.max - l.min < i.max - i.min && ([o, r] = [r, o]), { min: o, max: r };
}
function Q3(i, l) {
  return {
    x: B0(i.x, l.x),
    y: B0(i.y, l.y)
  };
}
function K3(i, l) {
  let o = 0.5;
  const r = Re(i), c = Re(l);
  return c > r ? o = /* @__PURE__ */ Ia(l.min, l.max - r, i.min) : r > c && (o = /* @__PURE__ */ Ia(i.min, i.max - c, l.min)), Cn(0, 1, o);
}
function J3(i, l) {
  const o = {};
  return l.min !== void 0 && (o.min = l.min - i.min), l.max !== void 0 && (o.max = l.max - i.min), o;
}
const ah = 0.35;
function P3(i = ah) {
  return i === !1 ? i = 0 : i === !0 && (i = ah), {
    x: L0(i, "left", "right"),
    y: L0(i, "top", "bottom")
  };
}
function L0(i, l, o) {
  return {
    min: H0(i, l),
    max: H0(i, o)
  };
}
function H0(i, l) {
  return typeof i == "number" ? i : i[l] || 0;
}
function j0(i) {
  let l = "";
  for (const o of i.path) {
    o.scroll = void 0, o.updateScroll();
    const { scroll: r } = o;
    o !== i.root && r && (l += r.offset.x + "," + r.offset.y + ",");
  }
  return l;
}
const F3 = /* @__PURE__ */ new WeakMap();
class k3 {
  constructor(l, o = () => l.getProps()) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ee(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = l, this.readProps = o;
  }
  start(l, { snapToCursor: o = !1, distanceThreshold: r } = {}) {
    if (this.visualElement.presenceContext?.isPresent === !1)
      return;
    const c = (v) => {
      o && this.snapToCursor(v), this.stopAnimation();
    }, h = (v, y) => {
      const { drag: b, dragPropagation: O, onDragStart: x } = this.getProps();
      if (b && !O && (this.openDragLock?.(), this.openDragLock = q3(b), !this.openDragLock))
        return;
      this.latestPointerEvent = v, this.latestPanInfo = y, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints();
      const { projection: U } = this.visualElement;
      U && (U.isAnimationBlocked = !0, U.target = void 0), un((z) => {
        let X = this.getAxisMotionValue(z).get() || 0;
        if (Co(X) && (X = zh(X, this.visualElement.current) || 0), at.test(X))
          X = parseFloat(X);
        else if (Mn.test(X)) {
          const K = U?.layout?.layoutBox[z];
          K && (X = Re(K) * (parseFloat(X) / 100));
        }
        this.originPoint[z] = X;
      }), x && jt.update(() => x(v, y), !1, !0), Wf(this.visualElement, "transform"), this.visualElement.animationState?.setActive("whileDrag", !0);
    }, d = (v, y) => {
      this.latestPointerEvent = v, this.latestPanInfo = y;
      const { dragPropagation: b, dragDirectionLock: O, onDirectionLock: x, onDrag: U } = this.getProps();
      if (!b && !this.openDragLock)
        return;
      const { offset: z } = y;
      if (O && this.currentDirection === null) {
        if (this.currentDirection = W3(z), this.currentDirection === null)
          return;
        x && x(this.currentDirection);
      }
      this.updateAxis("x", z), this.updateAxis("y", z), this.visualElement.render(), U && jt.update(() => U(v, y), !1, !0);
    }, m = (v, y) => {
      this.latestPointerEvent = v, this.latestPanInfo = y, this.stop(v, y), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, g = () => {
      const { dragSnapToOrigin: v } = this.getProps();
      (v || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: S } = this.getProps();
    this.panSession = new C1(l, {
      onSessionStart: c,
      onStart: h,
      onMove: d,
      onSessionEnd: m,
      resumeAnimation: g
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
    const { onDragEnd: g } = this.getProps();
    g && jt.postRender(() => g(c, h));
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
    if (!o || !es(l, r, this.currentDirection))
      return;
    const c = this.getAxisMotionValue(l);
    let h = this.originPoint[l] + o[l];
    const d = this.constraints && this.constraints[l];
    d && (h = X3(h, d, this.elastic[l])), c.set(h);
  }
  resolveConstraints() {
    const { dragConstraints: l, dragElastic: o } = this.getProps(), { projection: r } = this.visualElement, c = r && (r.layout || r.measure(!1)), h = this.constraints;
    ts(l) ? (!this.constraints || this.scroll !== j0(r)) && (this.constraints = this.resolveRefConstraints()) : l && c ? this.constraints = Z3(c.layoutBox, l) : this.constraints = !1, this.elastic = P3(o), h !== this.constraints && !ts(l) && c && this.constraints && !this.hasMutatedConstraints && un((d) => {
      this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = J3(c.layoutBox[d], this.constraints[d]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: o } = this.getProps();
    if (!ts(l))
      return !1;
    const r = Y0(l), { projection: c } = this.visualElement;
    if (!c || !c.layout)
      return !1;
    this.scroll = j0(c);
    const h = R2(r, c.root, this.visualElement.getTransformPagePoint());
    let d = Q3(c.layout.layoutBox, c.removeElementScroll(h));
    if (o) {
      const m = o(C2(d));
      this.hasMutatedConstraints = !!m, m && (d = i1(m));
    }
    return d;
  }
  startAnimation(l, o) {
    const { drag: r, dragMomentum: c, dragElastic: h, dragTransition: d, dragSnapToOrigin: m, onDragTransitionEnd: g } = this.getProps(), S = this.constraints || {}, v = un((y) => {
      if (!es(y, o || r, this.currentDirection))
        return;
      let b = S[y] || {};
      (m === !0 || m === y) && (b = { min: 0, max: 0 });
      const O = h ? 200 : 1e6, x = h ? 40 : 1e7, U = {
        type: "inertia",
        velocity: c ? l[y] : 0,
        bounceStiffness: O,
        bounceDamping: x,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...d,
        ...b
      };
      return this.startAxisValueAnimation(y, U);
    });
    return Promise.all(v).then(g);
  }
  startAxisValueAnimation(l, o) {
    const r = this.getAxisMotionValue(l);
    return Wf(this.visualElement, l), r.start(Nh(l, r, 0, o, this.visualElement, !1));
  }
  stopAnimation() {
    un((l) => this.getAxisMotionValue(l).stop());
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
    un((m) => {
      if (!es(m, r, this.currentDirection))
        return;
      const g = this.getAxisMotionValue(m), { min: S, max: v } = d[m];
      g.set((g.get() || 0) + h[m] - Ht(S, v, 0.5));
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
    if (!ts(o) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const c = this.constraints, h = { x: 0, y: 0 };
    un((m) => {
      const g = this.getAxisMotionValue(m).get();
      h[m] = K3({ min: g, max: g }, c[m]);
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    this.visualElement.current.style.transform = d ? d({}, "") : "none", r.root?.updateScroll(), r.updateLayout(), this.constraints = !1, this.resolveConstraints(), un((m) => {
      const g = this.getAxisMotionValue(m);
      if (!es(m, l, null) || !g.get())
        return;
      const { min: S, max: v } = this.constraints[m];
      g.set(Ht(S, v, h[m]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    F3.set(this.visualElement, this);
    const l = this.visualElement.current, o = ls(l, "pointerdown", (S) => {
      const { drag: v, dragListener: y = !0 } = this.getProps(), b = S.target, O = b !== l && G3(b);
      v && y && !O && this.start(S);
    });
    let r;
    const c = () => {
      const { dragConstraints: S } = this.getProps(), v = ts(S) && Y0(S);
      v && (this.constraints = this.resolveRefConstraints(), r || (r = I3(l, v, () => this.scalePositionWithinConstraints())));
    }, { projection: h } = this.visualElement, d = h.addEventListener("measure", c);
    h.layout || (h.root?.updateScroll(), h.updateLayout()), jt.read(c);
    const m = Wa(window, "resize", () => this.scalePositionWithinConstraints()), g = h.addEventListener("didUpdate", (({ delta: S, hasLayoutChanged: v }) => {
      this.isDragging && v && (un((y) => {
        if (!es(y, this.getProps().drag, this.currentDirection))
          return;
        const b = this.getAxisMotionValue(y);
        this.originPoint[y] += S[y].translate, b.set(b.get() + S[y].translate);
      }), this.visualElement.render());
    }));
    return () => {
      m(), o(), d(), g(), r?.();
    };
  }
  getProps() {
    const l = this.readProps(), { dragElastic: o = ah, dragMomentum: r = !0 } = l;
    return { ...l, dragElastic: o, dragMomentum: r };
  }
}
function ts(i) {
  return !!i && typeof i == "object" && ("current" in i || "nodeType" in i);
}
const Y0 = (i) => "current" in i ? i.current : i;
function G0(i) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    i();
  };
}
function I3(i, l, o) {
  const r = z0(i, G0(o)), c = z0(l, G0(o));
  return () => {
    r(), c();
  };
}
function es(i, l, o) {
  return (l === !0 || l === i) && (o === null || o === i);
}
function W3(i, l = 10) {
  let o = null;
  return Math.abs(i.y) > l ? o = "y" : Math.abs(i.x) > l && (o = "x"), o;
}
function R1(i, l) {
  const o = t1(i), r = new AbortController(), c = {
    passive: !0,
    ...l,
    signal: r.signal
  }, h = wh(() => r.abort());
  return [o, c, h];
}
function $3(i) {
  return !(i.pointerType === "touch" || O1());
}
function tM(i, l, o = {}) {
  l = Uh(l);
  const [r, c, h] = R1(i, o);
  return r.forEach((d) => {
    let m = !1, g = !1, S;
    const v = () => {
      d.removeEventListener("pointerleave", x);
    }, y = (z) => {
      S && (S(z), S = void 0), v();
    }, b = (z) => {
      m = !1, window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", b), g && (g = !1, y(z));
    }, O = () => {
      m = !0, window.addEventListener("pointerup", b, c), window.addEventListener("pointercancel", b, c);
    }, x = (z) => {
      if (z.pointerType !== "touch") {
        if (m) {
          g = !0;
          return;
        }
        y(z);
      }
    }, U = (z) => {
      if (!$3(z))
        return;
      g = !1;
      const X = l(d, z);
      typeof X == "function" && (S = X, d.addEventListener("pointerleave", x, c));
    };
    d.addEventListener("pointerenter", U, c), d.addEventListener("pointerdown", O, c);
  }), h;
}
const x1 = (i, l) => l ? i === l ? !0 : x1(i, l.parentElement) : !1, ro = /* @__PURE__ */ new WeakSet();
function q0(i) {
  return (l) => {
    l.key === "Enter" && i(l);
  };
}
function zf(i, l) {
  i.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const eM = (i, l) => {
  let o = !1;
  const r = q0(() => {
    ro.has(i) || (o = !0, zf(i, "down"));
  }), c = q0(() => {
    o && (o = !1, zf(i, "up"));
  });
  i.addEventListener("keydown", r, l), i.addEventListener("keyup", c, l), i.addEventListener("blur", () => {
    i.removeEventListener("keydown", r), i.removeEventListener("keyup", c), o && zf(i, "cancel");
  }, { ...l, once: !0 });
};
function X0(i) {
  return jh(i) && !O1();
}
const Z0 = /* @__PURE__ */ new WeakSet();
function nM(i, l, o = {}) {
  l = Uh(l);
  const [r, c, h] = R1(i, o), d = (m) => {
    const g = m.currentTarget;
    if (!X0(m) || Z0.has(m))
      return;
    ro.add(g), o.stopPropagation && Z0.add(m);
    const S = l(g, m), v = { ...c, capture: !0 }, y = (x, U) => {
      window.removeEventListener("pointerup", b, v), window.removeEventListener("pointercancel", O, v), ro.has(g) && ro.delete(g), X0(x) && typeof S == "function" && S(x, { success: U });
    }, b = (x) => {
      y(x, g === window || g === document || o.useGlobalTarget || x1(g, x.target));
    }, O = (x) => {
      y(x, !1);
    };
    window.addEventListener("pointerup", b, v), window.addEventListener("pointercancel", O, v);
  };
  return r.forEach((m) => {
    (o.useGlobalTarget ? window : m).addEventListener("pointerdown", d, c), eo(m) && (m.addEventListener("focus", () => eM(m, c), c), !j3(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0));
  }), h;
}
class ba {
  constructor(l) {
    this.isMounted = !1, this.node = l;
  }
  update() {
  }
}
const N1 = /* @__PURE__ */ new Set([
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
]), z1 = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function aM(i, l, o, r) {
  b1(i, l, void 0, r);
  for (const c in l.attrs)
    i.setAttribute(N1.has(c) ? c : e1(c), l.attrs[c]);
}
function _1(i, l, o) {
  const r = Hh(i, l, o);
  for (const c in i)
    if (c !== "children" && (ye(i[c]) || ye(l[c]))) {
      const h = Xn.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      r[h] = i[c];
    }
  return r;
}
class iM extends E1 {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ee;
  }
  getBaseTargetFromProps(l, o) {
    return Ta.has(o) ? super.getBaseTargetFromProps(l, o) ?? fs(o) : l[o];
  }
  /**
   * An independent transform's origin is never read from the DOM, so it
   * starts from its latest or default value and renders on mount.
   */
  getDefaultValue(l) {
    return Ta.has(l) ? this.latestValues[l] ?? fs(l) : void 0;
  }
  readValueFromInstance(l, o) {
    if (Ta.has(o)) {
      const r = Uv(o);
      return r && r.default || 0;
    }
    if (n1.includes(o)) {
      const c = getComputedStyle(l)[o];
      if (typeof c == "string" && c)
        return c.trim();
    }
    return o = N1.has(o) ? o : e1(o), l.getAttribute(o);
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return _1(l, o, r);
  }
  build(l, o, r) {
    a1(l, o, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(l, o, r, c) {
    aM(l, o, r, c);
  }
  mount(l) {
    this.isSVGTag = z1(l.tagName), super.mount(l);
  }
}
function V1(i, l) {
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
const lM = [...Oo].reverse(), Q0 = (i) => i?.out === !0 ? i : i?.out;
function sM(i) {
  let l = (m) => Promise.all(m.map(({ animation: g, options: S }) => m2(i, g, S))), o = K0(), r = !0, c = !1;
  function h(m) {
    const { props: g, parent: S, manuallyAnimateOnMount: v } = i, { initial: y } = g, b = r || c, O = [], x = (et = y) => typeof et != "boolean" && ka(i, Array.isArray(et) ? et[0] : et, i.presenceContext?.custom) || void 0, U = /* @__PURE__ */ new Map();
    let z = {}, X = 1 / 0, K = i;
    do
      K = K.props.inherit !== !1 && K.parent;
    while (K && !K.isControllingVariants);
    const k = b && Q0(x(y ?? (K && K.props.initial))?.transition);
    if (lM.forEach((et, st) => {
      const w = o[et], Y = g[et], F = K && K.props[et], ut = Y !== void 0 ? Y : ds(F) || F === !1 ? F : void 0, mt = ds(ut), dt = et === m ? w.isActive : null, Ot = mt && Y === void 0 && !(b && v);
      if (w.protectedKeys = { ...z }, !w.isActive && dt === null || !ut && !w.prevProp || Do(ut) || typeof ut == "boolean")
        return;
      if (dt === !1 && (X = st), et === "exit" && w.isActive && dt !== !0) {
        z = {
          ...z,
          ...w.prevResolvedValues
        };
        return;
      }
      const St = uM(w.prevProp, ut);
      let J = St || mt && (dt && !Ot || st > X), V = !1;
      const G = Array.isArray(ut) ? ut : [ut];
      let j = {}, I;
      if (dt !== !1)
        for (const ct of G) {
          const { transition: yt, transitionEnd: ot, ...E } = ka(i, ct, Fv(i, et)) || {};
          j = {
            ...j,
            ...E,
            ...ot
          }, I = Q0(yt) || I;
        }
      const { prevResolvedValues: tt } = w;
      for (const ct in { ...tt, ...j }) {
        if (ct in z)
          continue;
        const yt = j[ct], ot = tt[ct], E = Array.isArray(yt) && Array.isArray(ot) ? !V1(yt, ot) || St : yt !== ot;
        let B;
        if (E && yt == null)
          U.has(ct) || U.set(ct, w.prevOut);
        else if (E || yt !== void 0 && U.has(ct)) {
          J = !0, B = U.get(ct) || k, U.delete(ct) && (V = !0), w.needsAnimating[ct] = !0;
          const Z = i.getValue(ct);
          Z && (Z.liveStyle = !1);
        } else
          w.protectedKeys[ct] = !0;
        w.out[ct] = B;
      }
      if (w.prevProp = ut, w.prevResolvedValues = j, w.prevOut = I, w.isActive && (z = { ...z, ...j }), J && (!(Ot && St) || V))
        for (const ct of G) {
          const yt = { type: et };
          if (typeof ct == "string" && b && v && S?.enteringChildren) {
            const ot = ka(S, ct)?.transition?.delayChildren;
            yt.delay = Kv(S.enteringChildren, i, ot);
          }
          O.push({ animation: ct, options: yt });
        }
    }), U.size) {
      const et = {}, st = x();
      let w = st?.transition;
      U.forEach((Y, F) => {
        Y && (w = {
          ...w || i.getDefaultTransition(),
          [F]: Y
        });
        const ut = i.getValue(F);
        ut && (ut.liveStyle = !0);
        const mt = st && !Array.isArray(y) ? st[F] : void 0, dt = i.getBaseTargetFromProps(g, F);
        et[F] = (mt !== void 0 ? mt : dt !== void 0 && !ye(dt) ? dt : i.initialValues[F] === void 0 ? i.baseTarget[F] : void 0) ?? null;
      }), w && (et.transition = w), O.push({ animation: et });
    }
    const $ = b && i.blockInitialAnimation || r && !v && (g.initial === !1 || g.initial === g.animate);
    return r = c = !1, !$ && O.length ? l(O) : Promise.resolve();
  }
  function d(m, g) {
    if (o[m].isActive === g)
      return Promise.resolve();
    i.variantChildren?.forEach((v) => v.animationState?.setActive(m, g)), o[m].isActive = g;
    const S = h(m);
    for (const v in o)
      o[v].protectedKeys = {};
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
      o = K0(), c = !0;
    }
  };
}
function uM(i, l) {
  return typeof l == "string" ? l !== i : Array.isArray(l) ? !V1(l, i) : !1;
}
function K0() {
  const i = {};
  for (const l of Oo)
    i[l] = {
      isActive: l === "animate",
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
      out: {}
    };
  return i;
}
const Gh = /* @__PURE__ */ Q.createContext({
  transformPagePoint: (i) => i,
  isStatic: !1,
  reducedMotion: "never"
});
function J0(i, l) {
  if (typeof i == "function")
    return i(l);
  i != null && (i.current = l);
}
function oM(...i) {
  return (l) => {
    let o = !1;
    const r = i.map((c) => {
      const h = J0(c, l);
      return !o && typeof h == "function" && (o = !0), h;
    });
    if (o)
      return () => {
        for (let c = 0; c < r.length; c++) {
          const h = r[c];
          typeof h == "function" ? h() : J0(i[c], null);
        }
      };
  };
}
function rM(...i) {
  return Q.useCallback(oM(...i), i);
}
const P0 = (i) => {
  const { width: l, height: o } = i?.getBoundingClientRect() || {};
  return [
    l / i?.offsetWidth || 1,
    o / i?.offsetHeight || 1
  ];
}, w1 = (i) => {
  let { left: l, top: o } = i.getBoundingClientRect(), r = i;
  for (; r = r.parentElement || r.parentNode?.host; ) {
    const { scrollLeft: d, scrollTop: m } = r;
    if (d || m) {
      const [g, S] = P0(r);
      l += d * g, o += m * S;
    }
    if (getComputedStyle(r).position === "fixed")
      break;
  }
  const [c, h] = P0(i.offsetParent);
  return [l / c, o / h];
};
class cM extends Q.Component {
  getSnapshotBeforeUpdate(l) {
    const o = this.props.getElement();
    if (eo(o) && l.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const r = o.offsetParent, c = eo(r) && r.offsetWidth || 0, h = eo(r) && r.offsetHeight || 0, d = getComputedStyle(o), m = this.props.sizeRef.current;
      m.height = parseFloat(d.height), m.width = parseFloat(d.width), m.top = o.offsetTop, m.left = o.offsetLeft, m.right = c - m.width - m.left, m.bottom = h - m.height - m.top, m.direction = d.direction, m.point = w1(o);
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
function fM({ children: i, isPresent: l, anchorX: o, anchorY: r, root: c, pop: h, popNode: d }) {
  const m = Q.useId(), g = Q.useRef(null), S = Q.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: "ltr"
  }), { nonce: v } = Q.useContext(Gh), y = h !== !1 ? i.props?.ref ?? i?.ref : void 0, b = rM(g, y), O = () => g.current || d?.current?.current, x = (U) => {
    const { width: z, height: X, top: K, left: k, right: $, bottom: et, direction: st } = S.current, w = st === "rtl", Y = o === "left" ? w ? `right:${$}` : `left:${k}` : w ? `left:${k}` : `right:${$}`, F = r === "bottom" ? `bottom:${et}` : `top:${K}`;
    U?.insertRule(`[data-motion-pop-id="${m}"]{position:absolute!important;width:${z}px!important;height:${X}px!important;${Y}px!important;${F}px!important}`);
  };
  return Q.useInsertionEffect(() => {
    const { width: U, height: z } = S.current, X = O();
    if (l || h === !1 || !X || !U || !z)
      return;
    X.dataset.motionPopId = m;
    const K = X.ownerDocument, k = K.createElement("style");
    v && (k.nonce = v);
    const $ = c ?? K.head;
    $.appendChild(k), x(k.sheet);
    let et = 0, st = 0;
    return hs.setup(() => {
      const [w, Y] = w1(X);
      et = S.current.point[0] - w, st = S.current.point[1] - Y;
    }), hs.read(() => {
      const { sheet: w } = k;
      if (!w || !et && !st)
        return;
      const Y = S.current;
      Y.left += et, Y.right -= et, Y.top += st, Y.bottom -= st, w.deleteRule(0), x(w);
    }), () => {
      X.removeAttribute("data-motion-pop-id"), $.contains(k) && $.removeChild(k);
    };
  }, [l]), qn.jsx(cM, { isPresent: l, getElement: O, sizeRef: S, pop: h, children: h === !1 ? i : Q.cloneElement(i, { ref: b }) });
}
const hM = ({ children: i, initial: l, isPresent: o, onExitComplete: r, custom: c, presenceAffectsLayout: h, mode: d, anchorX: m, anchorY: g, root: S }) => {
  const v = Ao(dM), y = Q.useId(), b = Q.useRef(), O = Q.useRef(o), x = Q.useRef(r);
  ss(() => {
    O.current = o, x.current = r;
  });
  let U = !0, z = Q.useMemo(() => (U = !1, {
    id: y,
    initial: l,
    isPresent: o,
    custom: c,
    onExitComplete: (X) => {
      v.set(X, !0);
      for (const K of v.values())
        if (!K)
          return;
      r && r();
    },
    register: (X, K) => (v.set(X, !1), K && K.parent?.presenceContext?.id !== y && (b.current = K), () => {
      v.delete(X), !O.current && !v.size && x.current?.();
    })
  }), [o, v, r]);
  return h && U && (z = { ...z }), Q.useMemo(() => {
    v.forEach((X, K) => v.set(K, !1));
  }, [o]), Q.useEffect(() => {
    !o && !v.size && r && r();
  }, [o]), i = qn.jsx(fM, { pop: d === "popLayout", isPresent: o, anchorX: m, anchorY: g, root: S, popNode: b, children: i }), qn.jsx(Mo.Provider, { value: z, children: i });
};
function dM() {
  return /* @__PURE__ */ new Map();
}
function U1(i = !0) {
  const l = Q.useContext(Mo);
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
const ns = (i) => i.key || "";
function F0(i) {
  const l = [];
  return Q.Children.forEach(i, (o) => {
    Q.isValidElement(o) && l.push(o);
  }), l;
}
const mM = ({ children: i, custom: l, initial: o = !0, onExitComplete: r, presenceAffectsLayout: c = !0, mode: h = "sync", propagate: d = !1, anchorX: m = "left", anchorY: g = "top", root: S }) => {
  const [v, y] = U1(d), b = Q.useMemo(() => F0(i), [i]), O = d && !v ? [] : b.map(ns), x = Q.useRef(!0), U = Ao(() => /* @__PURE__ */ new Map()), z = Q.useRef(/* @__PURE__ */ new Set()), [X, K] = Q.useState(b), [k, $] = Q.useState(b);
  ss(() => {
    d && !v && !k.length && y?.();
  }, [v, d, k.length, y]);
  const et = Q.useRef();
  Q.useEffect(() => () => {
    const Y = et.current;
    et.current = void 0, Y?.();
  }, [k]), ss(() => {
    x.current = !1;
    for (let Y = 0; Y < k.length; Y++) {
      const F = ns(k[Y]);
      O.includes(F) ? (U.delete(F), z.current.delete(F)) : U.get(F) !== !0 && U.set(F, !1);
    }
  }, [k, O.length, O.join("-")]);
  const st = [];
  if (b !== X) {
    let Y = [...b], F = 0;
    for (const ut of k) {
      const mt = O.indexOf(ns(ut));
      mt === -1 ? (Y.splice(F++, 0, ut), st.push(ut)) : F = mt + st.length + 1;
    }
    return st.every((ut) => U.get(ns(ut))) ? Y = b : h === "wait" && (Y = st), $(F0(Y)), K(b), null;
  }
  const { forceRender: w } = Q.useContext(uh);
  return qn.jsx(qn.Fragment, { children: k.map((Y) => {
    const F = ns(Y), ut = d && !v ? !1 : b === k || O.includes(F), mt = () => {
      if (z.current.has(F))
        return;
      if (U.has(F))
        z.current.add(F), U.set(F, !0);
      else
        return;
      let dt = !0;
      U.forEach((Ot) => {
        Ot || (dt = !1);
      }), dt && (w?.(), K([]), d && y?.(), et.current = r);
    };
    return qn.jsx(hM, { isPresent: ut, initial: !x.current || o ? void 0 : !1, custom: l, presenceAffectsLayout: c, mode: h, root: S, onExitComplete: ut ? void 0 : mt, anchorX: m, anchorY: g, children: Y }, F);
  }) });
}, B1 = /* @__PURE__ */ Q.createContext({
  strict: !1
}), k0 = {
  animation: ["variants", ...Oo],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
let I0 = !1;
function pM() {
  if (I0)
    return;
  const i = {};
  for (const l in k0)
    i[l] = {
      isEnabled: (o) => k0[l].some((r) => !!o[r])
    };
  T1(i), I0 = !0;
}
function L1() {
  return pM(), b3();
}
function yM(i) {
  const l = L1();
  for (const o in i)
    l[o] = {
      ...l[o],
      ...i[o]
    };
  T1(l);
}
const xo = /* @__PURE__ */ Q.createContext({});
function gM(i, l) {
  if (Ro(i)) {
    const { initial: o, animate: r } = i;
    return {
      initial: o === !1 || ds(o) ? o : void 0,
      animate: ds(r) ? r : void 0
    };
  }
  return i.inherit !== !1 ? l : {};
}
function vM(i) {
  const { initial: l, animate: o } = gM(i, Q.useContext(xo));
  return Q.useMemo(() => ({ initial: l, animate: o }), [W0(l), W0(o)]);
}
function W0(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const qh = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function H1(i, l, o) {
  for (const r in l)
    !ye(l[r]) && !A1(r, o) && (i[r] = l[r]);
}
function SM({ transformTemplate: i }, l) {
  return Q.useMemo(() => {
    const o = qh();
    return Bh(o, l, i), Object.assign({}, o.vars, o.style);
  }, [l]);
}
function TM(i, l) {
  const o = i.style || {}, r = {};
  return H1(r, o, i), Object.assign(r, SM(i, l)), r;
}
function EM(i, l) {
  const o = {}, r = TM(i, l);
  return i.drag && i.dragListener !== !1 && (o.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`), i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (o.tabIndex = 0), o.style = r, o;
}
const j1 = () => ({
  ...qh(),
  attrs: {}
});
function bM(i, l, o, r) {
  const c = Q.useMemo(() => {
    const h = j1();
    return a1(h, l, z1(r), i.transformTemplate, i.style), {
      ...h.attrs,
      style: { ...h.style }
    };
  }, [l]);
  if (i.style) {
    const h = {};
    return H1(h, i.style, i), { ...c, style: { ...h, ...c.style } };
  }
  return c;
}
const AM = /* @__PURE__ */ new Set([
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
function bo(i) {
  return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || AM.has(i);
}
function MM(i, l) {
  return i.startsWith("on") ? !bo(i) : l?.(i) ?? !bo(i);
}
function CM(i, l, o, r) {
  const c = {};
  for (const h in i)
    h === "values" && typeof i.values == "object" || ye(i[h]) || (MM(h, r) || o === !0 && bo(h) || !l && !bo(h) || // If trying to use native HTML drag events, forward drag listeners
    i.draggable && h.startsWith("onDrag")) && (c[h] = i[h]);
  return c;
}
const DM = [
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
function Xh(i) {
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
      !!(DM.indexOf(i) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(i))
    )
  );
}
function OM(i, l, o, { latestValues: r }, c, h = !1, d, m) {
  const S = (d ?? Xh(i) ? bM : EM)(l, r, c, i), v = CM(l, typeof i == "string", h, m), y = i !== Q.Fragment ? { ...v, ...S, ref: o } : {}, { children: b } = l, O = Q.useMemo(() => ye(b) ? b.get() : b, [b]);
  return Q.createElement(i, {
    ...y,
    children: O
  });
}
function RM({ scrapeMotionValuesFromProps: i, createRenderState: l }, o, r, c) {
  return {
    latestValues: xM(o, r, c, i),
    renderState: l()
  };
}
function xM(i, l, o, r) {
  const c = {}, h = r(i, {});
  for (const b in h)
    c[b] = ao(h[b]);
  let { initial: d, animate: m } = i;
  const g = Ro(i), S = v1(i);
  l && S && !g && i.inherit !== !1 && (d === void 0 && (d = l.initial), m === void 0 && (m = l.animate));
  let v = o ? o.initial === !1 : !1;
  v = v || d === !1;
  const y = v ? m : d;
  if (y && typeof y != "boolean" && !Do(y)) {
    const b = Array.isArray(y) ? y : [y];
    for (let O = 0; O < b.length; O++) {
      const x = Pv(i, b[O]);
      if (x) {
        const { transitionEnd: U, transition: z, ...X } = x;
        for (const K in X) {
          let k = X[K];
          if (Array.isArray(k)) {
            const $ = v ? k.length - 1 : 0;
            k = k[$];
          }
          k !== null && (c[K] = k);
        }
        for (const K in U)
          c[K] = U[K];
      }
    }
  }
  return c;
}
const Y1 = (i) => (l, o) => {
  const r = Q.useContext(xo), c = Q.useContext(Mo), h = () => RM(i, l, r, c);
  return o ? h() : Ao(h);
}, NM = /* @__PURE__ */ Y1({
  scrapeMotionValuesFromProps: Hh,
  createRenderState: qh
}), zM = /* @__PURE__ */ Y1({
  scrapeMotionValuesFromProps: _1,
  createRenderState: j1
}), _M = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function VM(i, l, o) {
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
const G1 = /* @__PURE__ */ Q.createContext({});
function wM(i) {
  return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current");
}
function UM(i, l, o, r, c, h) {
  const { visualElement: d } = Q.useContext(xo), m = Q.useContext(B1), g = Q.useContext(Mo), S = Q.useContext(Gh), v = S.reducedMotion, y = S.skipAnimations, b = Q.useRef(null), O = Q.useRef(!1);
  r = r || m.renderer, !b.current && r && (b.current = r(i, {
    visualState: l,
    parent: d,
    props: o,
    presenceContext: g,
    blockInitialAnimation: g ? g.initial === !1 : !1,
    reducedMotionConfig: v,
    skipAnimations: y,
    isSVG: h
  }), O.current && b.current && (b.current.manuallyAnimateOnMount = !0));
  const x = b.current, U = Q.useContext(G1);
  x && !x.projection && c && (x.type === "html" || x.type === "svg") && BM(b.current, o, c, U), Q.useInsertionEffect(() => {
    x && x.props !== o && x.update(o, g);
  });
  const z = o[Iv], X = Q.useRef(!!z && typeof window < "u" && !window.MotionHandoffIsComplete?.(z) && window.MotionHasOptimisedAnimation?.(z));
  return ss(() => {
    !O.current || !x || (x.animationState?.animateChanges(), x.enteringChildren = void 0);
  }, []), ss(() => {
    O.current = !0, x && (window.MotionIsMounted = !0, x.updateFeatures(), x.scheduleRenderMicrotask(), X.current && x.animationState && x.animationState.animateChanges());
  }), Q.useEffect(() => {
    x && (!X.current && x.animationState && x.animationState.animateChanges(), X.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(z);
    }), X.current = !1), x.enteringChildren = void 0);
  }), x;
}
function BM(i, l, o, r) {
  const { layoutId: c, layout: h, drag: d, dragConstraints: m, layoutScroll: g, layoutRoot: S, layoutAnchor: v, layoutCrossfade: y } = l, b = i.projection = new o(i.latestValues, l["data-framer-portal-id"] ? void 0 : q1(i.parent));
  b.setOptions({
    layoutId: c,
    layout: h,
    alwaysMeasureLayout: !!d || m && wM(m),
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
    layoutScroll: g,
    layoutRoot: S,
    layoutAnchor: v
  });
  const O = b.getStack()?.lead;
  O && !b.root.isUpdateBlocked() && (O.willUpdate(), O.scheduleCheckAfterUnmount());
}
function q1(i) {
  if (i)
    return i.options.allowProjection !== !1 ? i.projection : q1(i.parent);
}
function _f(i, { forwardMotionProps: l = !1, type: o } = {}, r, c) {
  r && yM(r);
  const h = o ? o === "svg" : Xh(i), d = h ? zM : NM;
  function m(S, v) {
    let y;
    const b = LM(S);
    Ao(() => !!lo.current?.sharedNodes.get(b)?.lead && S.initial) && (S = { ...S, initial: !1 });
    const O = {
      ...Q.useContext(Gh),
      ...S,
      layoutId: b
    }, { isStatic: x, isValidProp: U } = O, z = vM(S), X = d(S, x);
    if (!x && typeof window < "u") {
      HM();
      const K = jM(O);
      z.visualElement = UM(i, X, O, c, K.ProjectionNode, h), (K.isEnabled || z.visualElement?.projection?.options.layoutId) && (y = K.MeasureLayout);
    }
    return qn.jsxs(xo.Provider, { value: z, children: [y && z.visualElement ? qn.jsx(y, { visualElement: z.visualElement, ...O }) : null, OM(i, S, VM(X, z.visualElement, v), X, x, l, h, U)] });
  }
  m.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
  const g = Q.forwardRef(m);
  return g[_M] = i, g;
}
function LM({ layoutId: i }) {
  const l = Q.useContext(uh).id;
  return l && i !== void 0 ? l + "-" + i : i;
}
function HM(i, l) {
  Q.useContext(B1).strict;
}
function jM(i) {
  const l = L1(), { drag: o, layout: r } = l;
  if (!o && !r)
    return {};
  const c = { ...o, ...r };
  return {
    MeasureLayout: c.MeasureLayout,
    isEnabled: o?.isEnabled(i) || r?.isEnabled(i),
    ProjectionNode: c.ProjectionNode
  };
}
function YM(i, l) {
  if (typeof Proxy > "u")
    return _f;
  const o = /* @__PURE__ */ new Map(), r = (h, d) => _f(h, d, i, l), c = (h, d) => r(h, d);
  return new Proxy(c, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (h, d) => d === "create" ? r : (o.has(d) || o.set(d, _f(d, void 0, i, l)), o.get(d))
  });
}
const GM = (i, l) => l.isSVG ?? Xh(i) ? new iM(l) : new C3(l, {
  allowProjection: i !== Q.Fragment
});
class qM extends ba {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(l) {
    super(l), l.animationState || (l.animationState = sM(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    Do(l) && (this.unmountControls = l.subscribe(this.node));
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
let XM = 0;
class ZM extends ba {
  constructor() {
    super(...arguments), this.id = XM++;
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
        const { initial: g } = this.node.getProps();
        if (g && !Array.isArray(g)) {
          const { transition: S, transitionEnd: v, ...y } = ka(this.node, g) || {};
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
const QM = {
  animation: {
    Feature: qM
  },
  exit: {
    Feature: ZM
  }
};
class KM extends ba {
  constructor(l) {
    super(l), this.removeGroupControls = rn, this.removeListeners = rn, this.controls = new k3(l);
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || rn;
  }
  update() {
    const { dragControls: l, drag: o } = this.node.getProps(), { dragControls: r, drag: c } = this.node.prevProps || {};
    l !== r && (this.removeGroupControls(), l && (this.removeGroupControls = l.subscribe(this.controls))), c && !o && this.controls.stop(void 0, void 0, c);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const Vf = (i) => (l, o) => {
  i && jt.update(() => i(l, o), !1, !0);
};
class JM extends ba {
  constructor() {
    super(...arguments), this.removePointerDownListener = rn;
  }
  onPointerDown(l) {
    this.session = new C1(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      // Fixes https://github.com/motiondivision/motion/issues/2270
      contextWindow: this.node.current?.ownerDocument.defaultView
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: o, onPan: r, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: Vf(l),
      onStart: Vf(o),
      onMove: Vf(r),
      onEnd: (h, d) => {
        delete this.session, c && jt.postRender(() => c(h, d));
      }
    };
  }
  mount() {
    this.removePointerDownListener = ls(this.node.current, "pointerdown", (l) => this.onPointerDown(l));
  }
  update() {
    this.session?.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session?.end();
  }
}
let wf = !1;
const $0 = ({ layout: i, layoutDependency: l, layoutAnchor: o }) => ({
  layout: i,
  layoutDependency: l,
  layoutAnchor: o,
  animationType: typeof i == "string" ? i : "both"
}), tv = (i, l) => {
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
class PM extends Q.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: l, layoutGroup: o, switchLayoutGroup: r, layoutId: c } = this.props, { projection: h } = l;
    h && (o.group?.add(h), c && r?.register?.(h), wf && h.root.didUpdate(), h.options.layoutId !== c && tv(h, c)?.(), h.addEventListener("animationComplete", () => this.safeToRemove()), h.setOptions({
      ...h.options,
      ...$0(this.props),
      onExitComplete: () => this.safeToRemove()
    })), io.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(l) {
    const { layoutDependency: o, layoutId: r, visualElement: c, drag: h, isPresent: d } = this.props, { projection: m } = c;
    return m && (m.isPresent = d, this.takeOver = l.layoutId !== r ? (m.willUpdate(), tv(m, r)) : void 0, m.setOptions({
      ...m.options,
      ...$0(this.props)
    }), wf = !0, h || l.layoutDependency !== o || o === void 0 || l.isPresent !== d ? m.willUpdate() : this.safeToRemove(), l.isPresent !== d && (d ? m.promote() : m.relegate() || jt.postRender(() => {
      m.getStack()?.members.length || this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: l } = this.props.visualElement;
    l && (this.takeOver?.(), l.root.didUpdate(), hs.postRender(() => {
      !l.currentAnimation && l.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: o, switchLayoutGroup: r } = this.props, { projection: c } = l;
    wf = !0, c && (c.scheduleCheckAfterUnmount(), o.group?.remove(c), r?.deregister?.(c));
  }
  safeToRemove() {
    this.props.safeToRemove?.();
  }
  render() {
    return null;
  }
}
function X1(i) {
  const [l, o] = U1(), r = Q.useContext(uh);
  return qn.jsx(PM, { ...i, layoutGroup: r, switchLayoutGroup: Q.useContext(G1), isPresent: l, safeToRemove: o });
}
const FM = {
  pan: {
    Feature: JM
  },
  drag: {
    Feature: KM,
    ProjectionNode: g1,
    MeasureLayout: X1
  }
};
function ih(i, l, o, r) {
  const { props: c } = i, h = "while" + o;
  i.animationState && c[h] && i.animationState.setActive(h, r === "Start");
  const d = c["on" + o + r];
  d && jt.postRender(() => d(l, Yh(l)));
}
class kM extends ba {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = tM(l, (o, r) => (ih(this.node, r, "Hover", "Start"), (c) => ih(this.node, c, "Hover", "End"))));
  }
  unmount() {
  }
}
class IM extends ba {
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
    this.unmount = Ii(Wa(this.node.current, "focus", () => this.onFocus()), Wa(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function ev(i, l, o) {
  i.current instanceof HTMLButtonElement && i.current.disabled || ih(i, l, "Tap", o);
}
class WM extends ba {
  mount() {
    const { current: l } = this.node;
    if (!l)
      return;
    const { globalTapTarget: o, propagate: r } = this.node.props;
    this.unmount = nM(l, (c, h) => (ev(this.node, h, "Start"), (d, { success: m }) => ev(this.node, d, m ? "" : "Cancel")), {
      useGlobalTarget: o,
      stopPropagation: r?.tap === !1
    });
  }
  unmount() {
  }
}
const lh = /* @__PURE__ */ new WeakMap(), Uf = /* @__PURE__ */ new WeakMap(), $M = (i) => {
  const l = lh.get(i.target);
  l && l(i);
}, tC = (i) => {
  i.forEach($M);
};
function eC({ root: i, ...l }) {
  const o = i || document;
  Uf.has(o) || Uf.set(o, {});
  const r = Uf.get(o), c = JSON.stringify(l);
  return r[c] || (r[c] = new IntersectionObserver(tC, { root: i, ...l })), r[c];
}
function nC(i, l, o) {
  const r = eC(l);
  return lh.set(i, o), r.observe(i), () => {
    lh.delete(i), r.unobserve(i);
  };
}
const aC = {
  some: 0,
  all: 1
};
class iC extends ba {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: l = {} } = this.node.getProps(), { root: o, margin: r, amount: c = "some", once: h } = l, d = {
      root: o ? o.current : void 0,
      rootMargin: r,
      threshold: typeof c == "number" ? c : aC[c]
    }, m = (g) => {
      const { isIntersecting: S } = g;
      if (this.isInView === S || (this.isInView = S, h && !S && this.hasEnteredView))
        return;
      S && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", S);
      const { onViewportEnter: v, onViewportLeave: y } = this.node.getProps(), b = S ? v : y;
      b && b(g);
    };
    this.stopObserver = nC(this.node.current, d, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: l, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(lC(l, o)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function lC({ viewport: i = {} }, { viewport: l = {} } = {}) {
  return (o) => i[o] !== l[o];
}
const sC = {
  inView: {
    Feature: iC
  },
  tap: {
    Feature: WM
  },
  focus: {
    Feature: IM
  },
  hover: {
    Feature: kM
  }
}, uC = {
  layout: {
    ProjectionNode: g1,
    MeasureLayout: X1
  }
}, oC = /* @__PURE__ */ Object.assign({}, QM, sC, FM, uC), $a = /* @__PURE__ */ YM(oC, GM);
function Z1() {
  !Lh.current && S1();
  const [i] = Q.useState(To.current);
  return i;
}
const Iu = [
  "M 18 372 C 106 380 102 300 180 300 S 250 360 318 310 382 120 510 112",
  "M 12 116 C 118 92 155 206 248 214 S 376 228 500 350"
];
function rC() {
  const i = Q.useRef(null), [l, o] = Q.useState(!0), r = Z1();
  Q.useEffect(() => {
    if (!i.current || !("IntersectionObserver" in window)) return;
    const h = new IntersectionObserver(([d]) => {
      o(d.isIntersecting), typeof i.current?.pauseAnimations == "function" && (d.isIntersecting && !r ? i.current.unpauseAnimations() : i.current.pauseAnimations());
    }, { rootMargin: "80px" });
    return h.observe(i.current), () => h.disconnect();
  }, [r]);
  const c = l && !r;
  return /* @__PURE__ */ q.createElement("div", { className: "passport-flight-layer", "aria-hidden": "true" }, /* @__PURE__ */ q.createElement("svg", { ref: i, className: "passport-flight-svg", viewBox: "0 0 520 470", preserveAspectRatio: "none", focusable: "false" }, /* @__PURE__ */ q.createElement("defs", null, /* @__PURE__ */ q.createElement("path", { id: "passport-route-primary", d: Iu[0] })), /* @__PURE__ */ q.createElement($a.path, { d: Iu[0], className: "passport-route passport-route-primary", initial: { pathLength: 0 }, animate: { pathLength: r || c ? 1 : 0 }, transition: { duration: 2.8, ease: "easeInOut", repeat: c ? 1 / 0 : 0, repeatType: "mirror", repeatDelay: 1.5 } }), /* @__PURE__ */ q.createElement($a.path, { d: Iu[1], className: "passport-route passport-route-secondary", initial: { pathLength: 0 }, animate: { pathLength: r || c ? 1 : 0 }, transition: { duration: 3.8, ease: "easeInOut", delay: 0.25, repeat: c ? 1 / 0 : 0, repeatType: "mirror", repeatDelay: 2 } }), /* @__PURE__ */ q.createElement("circle", { className: "passport-waypoint", cx: "318", cy: "310", r: "4", style: { animationPlayState: c ? "running" : "paused" } }), !r && /* @__PURE__ */ q.createElement("g", { className: "passport-route-plane" }, /* @__PURE__ */ q.createElement("animateMotion", { dur: "18s", repeatCount: "indefinite", rotate: "auto", path: Iu[0] }), /* @__PURE__ */ q.createElement("path", { d: "M0-8 2-2 9 1 9 3 2 2 1 8-1 8-1 2-7 3-7 1-1-2Z" })), r && /* @__PURE__ */ q.createElement("path", { className: "passport-plane-still", d: "M12 364 14 370 21 373 21 375 14 374 13 380 11 380 11 374 5 375 5 373 11 370Z" })));
}
const cC = Q.lazy(() => import("./passport-PassportCanvas.js").then((i) => ({ default: i.PassportCanvas }))), is = [
  ["India", "IND", "🇮🇳", "stamp-red", "12 JAN 2018"],
  ["Egypt", "EGY", "🇪🇬", "stamp-blue", "04 MAR 2018"],
  ["Saudi Arabia", "SAU", "🇸🇦", "stamp-green", "19 NOV 2018"],
  ["United Arab Emirates", "ARE", "🇦🇪", "stamp-blue", "10 FEB 2019"],
  ["Oman", "OMN", "🇴🇲", "stamp-purple", "22 APR 2019"],
  ["Turkey", "TUR", "🇹🇷", "stamp-red", "15 MAY 2019"],
  ["Georgia", "GEO", "🇬🇪", "stamp-blue", "02 JUL 2019"],
  ["Armenia", "ARM", "🇦🇲", "stamp-purple", "14 JUL 2019"],
  ["Switzerland", "CHE", "🇨🇭", "stamp-red", "30 AUG 2019"],
  ["Germany", "DEU", "🇩🇪", "stamp-blue", "05 SEP 2019"],
  ["Slovakia", "SVK", "🇸🇰", "stamp-purple", "12 SEP 2019"],
  ["Czech Republic", "CZE", "🇨🇿", "stamp-red", "18 SEP 2019"],
  ["Austria", "AUT", "🇦🇹", "stamp-blue", "25 SEP 2019"],
  ["Slovenia", "SVN", "🇸🇮", "stamp-green", "02 OCT 2019"],
  ["Croatia", "HRV", "🇭🇷", "stamp-red", "10 OCT 2019"],
  ["Hungary", "HUN", "🇭🇺", "stamp-purple", "17 OCT 2019"],
  ["France", "FRA", "🇫🇷", "stamp-blue", "03 NOV 2019"],
  ["Belgium", "BEL", "🇧🇪", "stamp-red", "12 NOV 2019"],
  ["Uzbekistan", "UZB", "🇺🇿", "stamp-green", "20 JAN 2020"],
  ["Kazakhstan", "KAZ", "🇰🇿", "stamp-blue", "05 FEB 2020"],
  ["Azerbaijan", "AZE", "🇦🇿", "stamp-purple", "14 MAR 2021"],
  ["Kyrgyzstan", "KGZ", "🇰🇬", "stamp-red", "28 JUL 2021"],
  ["Malaysia", "MYS", "🇲🇾", "stamp-blue", "10 AUG 2022"],
  ["Nepal", "NPL", "🇳🇵", "stamp-green", "15 SEP 2023"]
].map(([i, l, o, r, c], h) => ({ id: h + 1, name: i, code: l, flag: o, style: r, date: c }));
function nv({ country: i, index: l, reducedMotion: o, isSelected: r }) {
  const c = l * 17 % 35 - 15;
  return /* @__PURE__ */ q.createElement($a.div, { className: `immigration-stamp ${i.style}${r ? " is-selected-stamp" : ""}`, initial: o ? !1 : { y: -52, rotate: c - 12, scale: 0.72, opacity: 0 }, animate: { y: 0, rotate: c, scale: 1, opacity: 0.88 }, transition: o ? { duration: 0 } : { type: "spring", stiffness: 560, damping: 23, mass: 0.55, delay: l * 0.02 } }, /* @__PURE__ */ q.createElement("div", { className: "passport-stamp-head" }, /* @__PURE__ */ q.createElement("span", null, i.flag), /* @__PURE__ */ q.createElement("b", null, i.code)), /* @__PURE__ */ q.createElement("strong", null, i.name), /* @__PURE__ */ q.createElement("small", null, i.date));
}
function fC({ onOpen: i, stamps: l, reducedMotion: o }) {
  return /* @__PURE__ */ q.createElement($a.button, { type: "button", className: "passport-cover passport-cover-button", "aria-label": "Open the travel passport and reveal its country stamps", onClick: i, whileHover: o ? void 0 : { y: -5, rotateY: -5, rotateX: 2 }, whileTap: o ? void 0 : { scale: 0.98 } }, /* @__PURE__ */ q.createElement("span", { className: "gold-foil passport-cover-country" }, "UNITED ARAB EMIRATES"), /* @__PURE__ */ q.createElement("svg", { className: "passport-cover-emblem", viewBox: "0 0 100 100", "aria-hidden": "true" }, /* @__PURE__ */ q.createElement("circle", { cx: "50", cy: "50", r: "43" }), /* @__PURE__ */ q.createElement("circle", { cx: "50", cy: "50", r: "34" }), /* @__PURE__ */ q.createElement("path", { d: "M22 50q28-22 56 0-28 22-56 0zm28-27c-16 17-16 37 0 54 16-17 16-37 0-54zm-27 27h54" })), /* @__PURE__ */ q.createElement("span", { className: "gold-foil passport-cover-title" }, "PASSPORT"), /* @__PURE__ */ q.createElement("span", { className: "gold-foil passport-cover-edition" }, "FIELD NOTES · 24 COUNTRIES"), /* @__PURE__ */ q.createElement("span", { className: "gold-foil passport-cover-owner" }, "ANVESH CHELLUBOINA"), /* @__PURE__ */ q.createElement("span", { className: "gold-foil passport-cover-hint" }, "OPEN TO EXPLORE · 24 COUNTRIES"), /* @__PURE__ */ q.createElement("span", { className: "passport-ink-stamps", "aria-hidden": "true" }, l.slice(-3).map((r, c) => /* @__PURE__ */ q.createElement("span", { key: r.id, className: `immigration-stamp dropped ${r.style}`, style: { "--rot": `${c * 11 - 8}deg` } }, r.code))));
}
function hC({ stamps: i, onClose: l, isAnimating: o, reducedMotion: r, stampedCountryId: c, stampSelection: h }) {
  const d = i.slice(0, 12), m = i.slice(12, 24);
  return /* @__PURE__ */ q.createElement($a.div, { className: "passport-open", style: { transformOrigin: "left center" }, initial: r ? !1 : { rotateY: -82, opacity: 0, scale: 0.94 }, animate: { rotateY: 0, opacity: 1, scale: 1 }, exit: { rotateY: r ? 0 : -42, opacity: 0, scale: r ? 1 : 0.98 }, transition: { duration: r ? 0 : 0.78, ease: [0.2, 0.8, 0.2, 1] } }, /* @__PURE__ */ q.createElement("div", { className: "passport-page-left" }, /* @__PURE__ */ q.createElement("div", { className: "passport-page-heading" }, /* @__PURE__ */ q.createElement("span", null, "ENTRY RECORD · 01—12"), /* @__PURE__ */ q.createElement("span", null, "DEPARTURES")), /* @__PURE__ */ q.createElement("div", { className: "passport-page-stamps" }, d.map((g, S) => /* @__PURE__ */ q.createElement(nv, { key: `${g.id}-${g.id === c ? h : "idle"}`, country: g, index: S, reducedMotion: r, isSelected: g.id === c }))), /* @__PURE__ */ q.createElement("small", { className: "passport-page-footer" }, "ANVESH CHELLUBOINA · FIELD NOTES")), /* @__PURE__ */ q.createElement("span", { className: "passport-spine", "aria-hidden": "true" }), /* @__PURE__ */ q.createElement("div", { className: "passport-page-right" }, /* @__PURE__ */ q.createElement("div", { className: "passport-page-heading" }, /* @__PURE__ */ q.createElement("span", null, "ENTRY RECORD · 13—24"), /* @__PURE__ */ q.createElement("span", null, "ARRIVALS")), /* @__PURE__ */ q.createElement("div", { className: "passport-page-stamps" }, m.map((g, S) => /* @__PURE__ */ q.createElement(nv, { key: `${g.id}-${g.id === c ? h : "idle"}`, country: g, index: S + 12, reducedMotion: r, isSelected: g.id === c }))), /* @__PURE__ */ q.createElement("div", { className: "passport-page-controls" }, /* @__PURE__ */ q.createElement("span", { "aria-live": "polite" }, o ? `STAMPING ${i.length} / 24` : "24 COUNTRIES EXPLORED"), /* @__PURE__ */ q.createElement("button", { type: "button", className: "passport-close", onClick: l }, "Close passport"))));
}
function dC({ onClose: i, onStampCountry: l, iconOnly: o, onToggleIconOnly: r, reducedMotion: c }) {
  return /* @__PURE__ */ q.createElement($a.div, { className: "passport-field-page", initial: c ? !1 : { opacity: 0, scale: 0.96, rotateY: 10 }, animate: { opacity: 1, scale: 1, rotateY: 0 }, exit: { opacity: 0, scale: 0.98 }, transition: { duration: c ? 0 : 0.35 } }, /* @__PURE__ */ q.createElement("div", { className: "passport-field-heading" }, /* @__PURE__ */ q.createElement("span", null, "FIELD NOTES"), /* @__PURE__ */ q.createElement("strong", null, "24 COUNTRIES · 2018—2023")), /* @__PURE__ */ q.createElement("button", { type: "button", className: "passport-grid-toggle", "aria-pressed": o, onClick: r }, o ? "Show country details" : "Show flags only"), /* @__PURE__ */ q.createElement("div", { id: "passport-country-grid", className: `passport-flag-grid${o ? " icon-only-mode" : ""}`, role: "group", "aria-label": "Countries explored" }, is.map((h, d) => /* @__PURE__ */ q.createElement($a.button, { type: "button", layout: !c, className: `passport-flag-entry ${h.style}`, key: h.id, "data-country-stamp": !0, "data-country": h.name, "aria-label": `Stamp ${h.name} in the passport`, title: `Stamp ${h.name}`, onClick: () => l(h.name), initial: c ? !1 : { opacity: 0, y: 7 }, animate: { opacity: 1, y: 0 }, transition: { duration: c ? 0 : 0.2, delay: c ? 0 : d * 0.018 } }, /* @__PURE__ */ q.createElement("span", { className: "passport-entry-flag", "aria-hidden": "true" }, h.flag), /* @__PURE__ */ q.createElement("span", { className: "passport-entry-details", "aria-hidden": "true" }, /* @__PURE__ */ q.createElement("strong", null, h.name), /* @__PURE__ */ q.createElement("small", null, h.code, " · ", h.date))))), /* @__PURE__ */ q.createElement("div", { className: "passport-field-footer" }, /* @__PURE__ */ q.createElement("span", null, "ANVESH CHELLUBOINA · TRAVEL ARCHIVE"), /* @__PURE__ */ q.createElement("button", { type: "button", className: "passport-close", onClick: i }, "Close passport")));
}
function mC() {
  try {
    const i = document.createElement("canvas");
    return !!(i.getContext("webgl2") || i.getContext("webgl"));
  } catch {
    return !1;
  }
}
function pC() {
  const [i, l] = Q.useState(!1), [o, r] = Q.useState("countries"), [c, h] = Q.useState([]), [d, m] = Q.useState(!1), [g, S] = Q.useState(!1), [v, y] = Q.useState(!1), [b, O] = Q.useState(null), [x, U] = Q.useState(0), [z, X] = Q.useState(!1), [K, k] = Q.useState(""), $ = Q.useRef(null), et = Z1();
  Q.useEffect(() => {
    document.querySelectorAll(".field-notes").forEach((F) => {
      F.setAttribute("aria-pressed", String(z));
    });
  }, [z]);
  const st = Q.useCallback((F) => {
    r(F), l(!0);
  }, []), w = Q.useCallback((F) => {
    const ut = String(F || "").trim().toLocaleLowerCase(), mt = is.find((dt) => dt.name.toLocaleLowerCase() === ut || dt.code.toLocaleLowerCase() === ut);
    if (!mt) {
      k(`No passport country matches “${F}”.`);
      return;
    }
    O(mt.id), U((dt) => dt + 1), k(`${mt.name} passport stamp selected.`), st("countries");
  }, [st]);
  Q.useEffect(() => {
    const F = () => st("field-notes"), ut = () => {
      X((Ot) => !Ot), st("field-notes");
    }, mt = (Ot) => w(Ot.detail?.country), dt = (Ot) => {
      const St = Ot.target instanceof Element ? Ot.target.closest(".field-notes, [data-country-stamp]") : null;
      if (!St || $.current?.contains(St)) return;
      const J = St.dataset.country || St.dataset.countryName;
      J ? window.dispatchEvent(new CustomEvent("stamp-country", { detail: { country: J } })) : window.dispatchEvent(new CustomEvent("passport:toggle-country-view")), $.current?.scrollIntoView({ behavior: et ? "auto" : "smooth", block: "center" });
    };
    return window.addEventListener("passport:open-field-notes", F), window.addEventListener("passport:toggle-country-view", ut), window.addEventListener("stamp-country", mt), document.addEventListener("click", dt), () => {
      window.removeEventListener("passport:open-field-notes", F), window.removeEventListener("passport:toggle-country-view", ut), window.removeEventListener("stamp-country", mt), document.removeEventListener("click", dt);
    };
  }, [st, et, w]), Q.useEffect(() => {
    const F = window.matchMedia("(hover: hover) and (pointer: fine)"), ut = window.matchMedia("(prefers-reduced-motion: reduce)"), mt = () => {
      const dt = window.innerWidth >= 768 && F.matches && !ut.matches && mC();
      S(dt), dt || y(!1);
    };
    return mt(), window.addEventListener("resize", mt, { passive: !0 }), F.addEventListener?.("change", mt), ut.addEventListener?.("change", mt), () => {
      window.removeEventListener("resize", mt), F.removeEventListener?.("change", mt), ut.removeEventListener?.("change", mt);
    };
  }, [et]), Q.useEffect(() => {
    if (!g || !$.current) return;
    if (!("IntersectionObserver" in window)) {
      y(!0);
      return;
    }
    const F = new IntersectionObserver(([ut]) => {
      ut.isIntersecting && (y(!0), F.disconnect());
    }, { rootMargin: "160px" });
    return F.observe($.current), () => F.disconnect();
  }, [g]), Q.useEffect(() => {
    if (!i) return;
    if (o === "field-notes") {
      h(is), m(!1);
      return;
    }
    h([]), m(!0);
    const F = is.map((ut, mt) => window.setTimeout(() => {
      h((dt) => [...dt, ut]), mt === is.length - 1 && m(!1);
    }, mt * 36));
    return () => F.forEach(window.clearTimeout);
  }, [i, o]);
  const Y = () => {
    l(!1), h([]), O(null), k("");
  };
  return /* @__PURE__ */ q.createElement("div", { className: "passport-viewer", ref: $ }, /* @__PURE__ */ q.createElement("div", { className: "passport-viewer-route", "aria-hidden": "true" }), !i && /* @__PURE__ */ q.createElement("div", { className: "passport-viewer-actions", role: "group", "aria-label": "Open passport view" }, /* @__PURE__ */ q.createElement("button", { type: "button", onClick: () => st("field-notes") }, "FIELD NOTES"), /* @__PURE__ */ q.createElement("button", { type: "button", "aria-pressed": z, onClick: () => {
    X((F) => !F), st("field-notes");
  } }, "24 COUNTRIES EXPLORED")), /* @__PURE__ */ q.createElement("div", { className: "passport-object-slot" }, /* @__PURE__ */ q.createElement(mM, { mode: "wait", initial: !1 }, i ? o === "field-notes" ? /* @__PURE__ */ q.createElement(dC, { key: "field-notes", onClose: Y, onStampCountry: w, iconOnly: z, onToggleIconOnly: () => X((F) => !F), reducedMotion: !!et }) : /* @__PURE__ */ q.createElement(hC, { key: "country-stamps", stamps: c, onClose: Y, isAnimating: d, reducedMotion: !!et, stampedCountryId: b, stampSelection: x }) : /* @__PURE__ */ q.createElement("div", { className: "passport-cover-stage", key: "closed-passport" }, g && v && /* @__PURE__ */ q.createElement("div", { className: "passport-canvas", "aria-hidden": "true" }, /* @__PURE__ */ q.createElement(yC, { onError: () => S(!1) }, /* @__PURE__ */ q.createElement(Q.Suspense, { fallback: null }, /* @__PURE__ */ q.createElement(cC, { onOpen: () => st("countries"), reducedMotion: !!et, hostRef: $ })))), /* @__PURE__ */ q.createElement(fC, { onOpen: () => st("countries"), stamps: c, reducedMotion: !!et })))), /* @__PURE__ */ q.createElement("span", { className: "sr-only", role: "status", "aria-live": "polite" }, K || (i ? "Passport opened. Country stamps are being revealed." : "Passport closed.")));
}
class yC extends q.Component {
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
function gC() {
  return /* @__PURE__ */ q.createElement("section", { className: "hero section-wrap" }, /* @__PURE__ */ q.createElement(rC, null), /* @__PURE__ */ q.createElement("div", { className: "hero-copy" }, /* @__PURE__ */ q.createElement("p", { className: "eyebrow" }, /* @__PURE__ */ q.createElement("span", { className: "eyebrow-line" }), " Dubai, UAE · Open to meaningful opportunities"), /* @__PURE__ */ q.createElement("h1", null, /* @__PURE__ */ q.createElement("span", { className: "line" }, /* @__PURE__ */ q.createElement("span", null, "Good work.")), /* @__PURE__ */ q.createElement("span", { className: "line" }, /* @__PURE__ */ q.createElement("em", null, "Curious journeys."))), /* @__PURE__ */ q.createElement("p", { className: "hero-intro" }, "I’m Anvesh — an engineering and operations professional who enjoys bringing structure to complex work, helping people tell their stories, and finding the beauty in places beyond the usual route."), /* @__PURE__ */ q.createElement("div", { className: "hero-actions" }, /* @__PURE__ */ q.createElement("a", { className: "button button-dark", href: "#contact" }, "Get in touch ", /* @__PURE__ */ q.createElement("span", null, "↘")), /* @__PURE__ */ q.createElement("a", { className: "text-link", href: "#work" }, "Explore my services ", /* @__PURE__ */ q.createElement("span", null, "↘"))), /* @__PURE__ */ q.createElement("div", { className: "hero-facts" }, /* @__PURE__ */ q.createElement("div", null, /* @__PURE__ */ q.createElement("strong", null, "12+"), /* @__PURE__ */ q.createElement("span", null, "years in engineering & operations")), /* @__PURE__ */ q.createElement("div", null, /* @__PURE__ */ q.createElement("strong", null, "MSc"), /* @__PURE__ */ q.createElement("span", null, "Project Management · Merit")), /* @__PURE__ */ q.createElement("div", null, /* @__PURE__ */ q.createElement("strong", null, "24"), /* @__PURE__ */ q.createElement("span", null, "countries explored")))), /* @__PURE__ */ q.createElement("div", { className: "hero-visual", role: "group", "aria-label": "Interactive travel passport" }, /* @__PURE__ */ q.createElement(pC, null)));
}
const av = document.getElementById("hero-root");
av && FE.createRoot(av).render(/* @__PURE__ */ q.createElement(gC, null));
export {
  q as R,
  ZE as a,
  Q as b,
  GE as g,
  qn as j,
  sh as r
};
