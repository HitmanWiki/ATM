var Cv = Object.defineProperty;
var Og = t => {
    throw TypeError(t)
};
var Pv = (t, e, n) => e in t ? Cv(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var P = (t, e, n) => Pv(t, typeof e != "symbol" ? e + "" : e, n),
    Mf = (t, e, n) => e.has(t) || Og("Cannot " + n);
var p = (t, e, n) => (Mf(t, e, "read from private field"), n ? n.call(t) : e.get(t)),
    R = (t, e, n) => e.has(t) ? Og("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n),
    b = (t, e, n, r) => (Mf(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n),
    M = (t, e, n) => (Mf(t, e, "access private method"), n);
var Tl = (t, e, n, r) => ({
    set _(i) {
        b(t, e, i, n)
    },
    get _() {
        return p(t, e, r)
    }
});
(function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
})();

function Bv(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var ay = {
    exports: {}
},
    rf = {},
    uy = {
        exports: {}
    },
    ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xa = Symbol.for("react.element"),
    Iv = Symbol.for("react.portal"),
    Rv = Symbol.for("react.fragment"),
    Tv = Symbol.for("react.strict_mode"),
    Ov = Symbol.for("react.profiler"),
    Fv = Symbol.for("react.provider"),
    Uv = Symbol.for("react.context"),
    Lv = Symbol.for("react.forward_ref"),
    Dv = Symbol.for("react.suspense"),
    Mv = Symbol.for("react.memo"),
    _v = Symbol.for("react.lazy"),
    Fg = Symbol.iterator;

function zv(t) {
    return t === null || typeof t != "object" ? null : (t = Fg && t[Fg] || t["@@iterator"], typeof t == "function" ? t : null)
}
var cy = {
    isMounted: function () {
        return !1
    },
    enqueueForceUpdate: function () { },
    enqueueReplaceState: function () { },
    enqueueSetState: function () { }
},
    fy = Object.assign,
    dy = {};

function Cl(t, e, n) {
    this.props = t, this.context = e, this.refs = dy, this.updater = n || cy
}
Cl.prototype.isReactComponent = {};
Cl.prototype.setState = function (t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState")
};
Cl.prototype.forceUpdate = function (t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
};

function hy() { }
hy.prototype = Cl.prototype;

function fp(t, e, n) {
    this.props = t, this.context = e, this.refs = dy, this.updater = n || cy
}
var dp = fp.prototype = new hy;
dp.constructor = fp;
fy(dp, Cl.prototype);
dp.isPureReactComponent = !0;
var Ug = Array.isArray,
    py = Object.prototype.hasOwnProperty,
    hp = {
        current: null
    },
    gy = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function my(t, e, n) {
    var r, i = {},
        s = null,
        o = null;
    if (e != null)
        for (r in e.ref !== void 0 && (o = e.ref), e.key !== void 0 && (s = "" + e.key), e) py.call(e, r) && !gy.hasOwnProperty(r) && (i[r] = e[r]);
    var l = arguments.length - 2;
    if (l === 1) i.children = n;
    else if (1 < l) {
        for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
        i.children = a
    }
    if (t && t.defaultProps)
        for (r in l = t.defaultProps, l) i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: Xa,
        type: t,
        key: s,
        ref: o,
        props: i,
        _owner: hp.current
    }
}

function Gv(t, e) {
    return {
        $$typeof: Xa,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner
    }
}

function pp(t) {
    return typeof t == "object" && t !== null && t.$$typeof === Xa
}

function Hv(t) {
    var e = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function (n) {
        return e[n]
    })
}
var Lg = /\/+/g;

function _f(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? Hv("" + t.key) : e.toString(36)
}

function Qu(t, e, n, r, i) {
    var s = typeof t;
    (s === "undefined" || s === "boolean") && (t = null);
    var o = !1;
    if (t === null) o = !0;
    else switch (s) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (t.$$typeof) {
                case Xa:
                case Iv:
                    o = !0
            }
    }
    if (o) return o = t, i = i(o), t = r === "" ? "." + _f(o, 0) : r, Ug(i) ? (n = "", t != null && (n = t.replace(Lg, "$&/") + "/"), Qu(i, e, n, "", function (c) {
        return c
    })) : i != null && (pp(i) && (i = Gv(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Lg, "$&/") + "/") + t)), e.push(i)), 1;
    if (o = 0, r = r === "" ? "." : r + ":", Ug(t))
        for (var l = 0; l < t.length; l++) {
            s = t[l];
            var a = r + _f(s, l);
            o += Qu(s, e, n, a, i)
        } else if (a = zv(t), typeof a == "function")
        for (t = a.call(t), l = 0; !(s = t.next()).done;) s = s.value, a = r + _f(s, l++), o += Qu(s, e, n, a, i);
    else if (s === "object") throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return o
}

function pu(t, e, n) {
    if (t == null) return t;
    var r = [],
        i = 0;
    return Qu(t, r, "", "", function (s) {
        return e.call(n, s, i++)
    }), r
}

function Qv(t) {
    if (t._status === -1) {
        var e = t._result;
        e = e(), e.then(function (n) {
            (t._status === 0 || t._status === -1) && (t._status = 1, t._result = n)
        }, function (n) {
            (t._status === 0 || t._status === -1) && (t._status = 2, t._result = n)
        }), t._status === -1 && (t._status = 0, t._result = e)
    }
    if (t._status === 1) return t._result.default;
    throw t._result
}
var Bt = {
    current: null
},
    ju = {
        transition: null
    },
    jv = {
        ReactCurrentDispatcher: Bt,
        ReactCurrentBatchConfig: ju,
        ReactCurrentOwner: hp
    };

function yy() {
    throw Error("act(...) is not supported in production builds of React.")
}
ue.Children = {
    map: pu,
    forEach: function (t, e, n) {
        pu(t, function () {
            e.apply(this, arguments)
        }, n)
    },
    count: function (t) {
        var e = 0;
        return pu(t, function () {
            e++
        }), e
    },
    toArray: function (t) {
        return pu(t, function (e) {
            return e
        }) || []
    },
    only: function (t) {
        if (!pp(t)) throw Error("React.Children.only expected to receive a single React element child.");
        return t
    }
};
ue.Component = Cl;
ue.Fragment = Rv;
ue.Profiler = Ov;
ue.PureComponent = fp;
ue.StrictMode = Tv;
ue.Suspense = Dv;
ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jv;
ue.act = yy;
ue.cloneElement = function (t, e, n) {
    if (t == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var r = fy({}, t.props),
        i = t.key,
        s = t.ref,
        o = t._owner;
    if (e != null) {
        if (e.ref !== void 0 && (s = e.ref, o = hp.current), e.key !== void 0 && (i = "" + e.key), t.type && t.type.defaultProps) var l = t.type.defaultProps;
        for (a in e) py.call(e, a) && !gy.hasOwnProperty(a) && (r[a] = e[a] === void 0 && l !== void 0 ? l[a] : e[a])
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
        r.children = l
    }
    return {
        $$typeof: Xa,
        type: t.type,
        key: i,
        ref: s,
        props: r,
        _owner: o
    }
};
ue.createContext = function (t) {
    return t = {
        $$typeof: Uv,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, t.Provider = {
        $$typeof: Fv,
        _context: t
    }, t.Consumer = t
};
ue.createElement = my;
ue.createFactory = function (t) {
    var e = my.bind(null, t);
    return e.type = t, e
};
ue.createRef = function () {
    return {
        current: null
    }
};
ue.forwardRef = function (t) {
    return {
        $$typeof: Lv,
        render: t
    }
};
ue.isValidElement = pp;
ue.lazy = function (t) {
    return {
        $$typeof: _v,
        _payload: {
            _status: -1,
            _result: t
        },
        _init: Qv
    }
};
ue.memo = function (t, e) {
    return {
        $$typeof: Mv,
        type: t,
        compare: e === void 0 ? null : e
    }
};
ue.startTransition = function (t) {
    var e = ju.transition;
    ju.transition = {};
    try {
        t()
    } finally {
        ju.transition = e
    }
};
ue.unstable_act = yy;
ue.useCallback = function (t, e) {
    return Bt.current.useCallback(t, e)
};
ue.useContext = function (t) {
    return Bt.current.useContext(t)
};
ue.useDebugValue = function () { };
ue.useDeferredValue = function (t) {
    return Bt.current.useDeferredValue(t)
};
ue.useEffect = function (t, e) {
    return Bt.current.useEffect(t, e)
};
ue.useId = function () {
    return Bt.current.useId()
};
ue.useImperativeHandle = function (t, e, n) {
    return Bt.current.useImperativeHandle(t, e, n)
};
ue.useInsertionEffect = function (t, e) {
    return Bt.current.useInsertionEffect(t, e)
};
ue.useLayoutEffect = function (t, e) {
    return Bt.current.useLayoutEffect(t, e)
};
ue.useMemo = function (t, e) {
    return Bt.current.useMemo(t, e)
};
ue.useReducer = function (t, e, n) {
    return Bt.current.useReducer(t, e, n)
};
ue.useRef = function (t) {
    return Bt.current.useRef(t)
};
ue.useState = function (t) {
    return Bt.current.useState(t)
};
ue.useSyncExternalStore = function (t, e, n) {
    return Bt.current.useSyncExternalStore(t, e, n)
};
ue.useTransition = function () {
    return Bt.current.useTransition()
};
ue.version = "18.3.1";
uy.exports = ue;
var ce = uy.exports;
const Vv = Bv(ce);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jv = ce,
    Kv = Symbol.for("react.element"),
    Wv = Symbol.for("react.fragment"),
    Yv = Object.prototype.hasOwnProperty,
    $v = Jv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Zv = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function wy(t, e, n) {
    var r, i = {},
        s = null,
        o = null;
    n !== void 0 && (s = "" + n), e.key !== void 0 && (s = "" + e.key), e.ref !== void 0 && (o = e.ref);
    for (r in e) Yv.call(e, r) && !Zv.hasOwnProperty(r) && (i[r] = e[r]);
    if (t && t.defaultProps)
        for (r in e = t.defaultProps, e) i[r] === void 0 && (i[r] = e[r]);
    return {
        $$typeof: Kv,
        type: t,
        key: s,
        ref: o,
        props: i,
        _owner: $v.current
    }
}
rf.Fragment = Wv;
rf.jsx = wy;
rf.jsxs = wy;
ay.exports = rf;
var G = ay.exports,
    Ay = {},
    sf = {};
sf.byteLength = ex;
sf.toByteArray = nx;
sf.fromByteArray = sx;
var $n = [],
    sn = [],
    Xv = typeof Uint8Array < "u" ? Uint8Array : Array,
    zf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Gs = 0, qv = zf.length; Gs < qv; ++Gs) $n[Gs] = zf[Gs], sn[zf.charCodeAt(Gs)] = Gs;
sn[45] = 62;
sn[95] = 63;

function vy(t) {
    var e = t.length;
    if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var n = t.indexOf("=");
    n === -1 && (n = e);
    var r = n === e ? 0 : 4 - n % 4;
    return [n, r]
}

function ex(t) {
    var e = vy(t),
        n = e[0],
        r = e[1];
    return (n + r) * 3 / 4 - r
}

function tx(t, e, n) {
    return (e + n) * 3 / 4 - n
}

function nx(t) {
    var e, n = vy(t),
        r = n[0],
        i = n[1],
        s = new Xv(tx(t, r, i)),
        o = 0,
        l = i > 0 ? r - 4 : r,
        a;
    for (a = 0; a < l; a += 4) e = sn[t.charCodeAt(a)] << 18 | sn[t.charCodeAt(a + 1)] << 12 | sn[t.charCodeAt(a + 2)] << 6 | sn[t.charCodeAt(a + 3)], s[o++] = e >> 16 & 255, s[o++] = e >> 8 & 255, s[o++] = e & 255;
    return i === 2 && (e = sn[t.charCodeAt(a)] << 2 | sn[t.charCodeAt(a + 1)] >> 4, s[o++] = e & 255), i === 1 && (e = sn[t.charCodeAt(a)] << 10 | sn[t.charCodeAt(a + 1)] << 4 | sn[t.charCodeAt(a + 2)] >> 2, s[o++] = e >> 8 & 255, s[o++] = e & 255), s
}

function rx(t) {
    return $n[t >> 18 & 63] + $n[t >> 12 & 63] + $n[t >> 6 & 63] + $n[t & 63]
}

function ix(t, e, n) {
    for (var r, i = [], s = e; s < n; s += 3) r = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (t[s + 2] & 255), i.push(rx(r));
    return i.join("")
}

function sx(t) {
    for (var e, n = t.length, r = n % 3, i = [], s = 16383, o = 0, l = n - r; o < l; o += s) i.push(ix(t, o, o + s > l ? l : o + s));
    return r === 1 ? (e = t[n - 1], i.push($n[e >> 2] + $n[e << 4 & 63] + "==")) : r === 2 && (e = (t[n - 2] << 8) + t[n - 1], i.push($n[e >> 10] + $n[e >> 4 & 63] + $n[e << 2 & 63] + "=")), i.join("")
}
var gp = {}; /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
gp.read = function (t, e, n, r, i) {
    var s, o, l = i * 8 - r - 1,
        a = (1 << l) - 1,
        c = a >> 1,
        d = -7,
        h = n ? i - 1 : 0,
        m = n ? -1 : 1,
        A = t[e + h];
    for (h += m, s = A & (1 << -d) - 1, A >>= -d, d += l; d > 0; s = s * 256 + t[e + h], h += m, d -= 8);
    for (o = s & (1 << -d) - 1, s >>= -d, d += r; d > 0; o = o * 256 + t[e + h], h += m, d -= 8);
    if (s === 0) s = 1 - c;
    else {
        if (s === a) return o ? NaN : (A ? -1 : 1) * (1 / 0);
        o = o + Math.pow(2, r), s = s - c
    }
    return (A ? -1 : 1) * o * Math.pow(2, s - r)
};
gp.write = function (t, e, n, r, i, s) {
    var o, l, a, c = s * 8 - i - 1,
        d = (1 << c) - 1,
        h = d >> 1,
        m = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        A = r ? 0 : s - 1,
        k = r ? 1 : -1,
        x = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (l = isNaN(e) ? 1 : 0, o = d) : (o = Math.floor(Math.log(e) / Math.LN2), e * (a = Math.pow(2, -o)) < 1 && (o--, a *= 2), o + h >= 1 ? e += m / a : e += m * Math.pow(2, 1 - h), e * a >= 2 && (o++, a /= 2), o + h >= d ? (l = 0, o = d) : o + h >= 1 ? (l = (e * a - 1) * Math.pow(2, i), o = o + h) : (l = e * Math.pow(2, h - 1) * Math.pow(2, i), o = 0)); i >= 8; t[n + A] = l & 255, A += k, l /= 256, i -= 8);
    for (o = o << i | l, c += i; c > 0; t[n + A] = o & 255, A += k, o /= 256, c -= 8);
    t[n + A - k] |= x * 128
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function (t) {
    const e = sf,
        n = gp,
        r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    t.Buffer = l, t.SlowBuffer = w, t.INSPECT_MAX_BYTES = 50;
    const i = 2147483647;
    t.kMaxLength = i, l.TYPED_ARRAY_SUPPORT = s(), !l.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");

    function s() {
        try {
            const g = new Uint8Array(1),
                u = {
                    foo: function () {
                        return 42
                    }
                };
            return Object.setPrototypeOf(u, Uint8Array.prototype), Object.setPrototypeOf(g, u), g.foo() === 42
        } catch {
            return !1
        }
    }
    Object.defineProperty(l.prototype, "parent", {
        enumerable: !0,
        get: function () {
            if (l.isBuffer(this)) return this.buffer
        }
    }), Object.defineProperty(l.prototype, "offset", {
        enumerable: !0,
        get: function () {
            if (l.isBuffer(this)) return this.byteOffset
        }
    });

    function o(g) {
        if (g > i) throw new RangeError('The value "' + g + '" is invalid for option "size"');
        const u = new Uint8Array(g);
        return Object.setPrototypeOf(u, l.prototype), u
    }

    function l(g, u, f) {
        if (typeof g == "number") {
            if (typeof u == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
            return h(g)
        }
        return a(g, u, f)
    }
    l.poolSize = 8192;

    function a(g, u, f) {
        if (typeof g == "string") return m(g, u);
        if (ArrayBuffer.isView(g)) return k(g);
        if (g == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof g);
        if (Mn(g, ArrayBuffer) || g && Mn(g.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Mn(g, SharedArrayBuffer) || g && Mn(g.buffer, SharedArrayBuffer))) return x(g, u, f);
        if (typeof g == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
        const v = g.valueOf && g.valueOf();
        if (v != null && v !== g) return l.from(v, u, f);
        const N = C(g);
        if (N) return N;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof g[Symbol.toPrimitive] == "function") return l.from(g[Symbol.toPrimitive]("string"), u, f);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof g)
    }
    l.from = function (g, u, f) {
        return a(g, u, f)
    }, Object.setPrototypeOf(l.prototype, Uint8Array.prototype), Object.setPrototypeOf(l, Uint8Array);

    function c(g) {
        if (typeof g != "number") throw new TypeError('"size" argument must be of type number');
        if (g < 0) throw new RangeError('The value "' + g + '" is invalid for option "size"')
    }

    function d(g, u, f) {
        return c(g), g <= 0 ? o(g) : u !== void 0 ? typeof f == "string" ? o(g).fill(u, f) : o(g).fill(u) : o(g)
    }
    l.alloc = function (g, u, f) {
        return d(g, u, f)
    };

    function h(g) {
        return c(g), o(g < 0 ? 0 : y(g) | 0)
    }
    l.allocUnsafe = function (g) {
        return h(g)
    }, l.allocUnsafeSlow = function (g) {
        return h(g)
    };

    function m(g, u) {
        if ((typeof u != "string" || u === "") && (u = "utf8"), !l.isEncoding(u)) throw new TypeError("Unknown encoding: " + u);
        const f = E(g, u) | 0;
        let v = o(f);
        const N = v.write(g, u);
        return N !== f && (v = v.slice(0, N)), v
    }

    function A(g) {
        const u = g.length < 0 ? 0 : y(g.length) | 0,
            f = o(u);
        for (let v = 0; v < u; v += 1) f[v] = g[v] & 255;
        return f
    }

    function k(g) {
        if (Mn(g, Uint8Array)) {
            const u = new Uint8Array(g);
            return x(u.buffer, u.byteOffset, u.byteLength)
        }
        return A(g)
    }

    function x(g, u, f) {
        if (u < 0 || g.byteLength < u) throw new RangeError('"offset" is outside of buffer bounds');
        if (g.byteLength < u + (f || 0)) throw new RangeError('"length" is outside of buffer bounds');
        let v;
        return u === void 0 && f === void 0 ? v = new Uint8Array(g) : f === void 0 ? v = new Uint8Array(g, u) : v = new Uint8Array(g, u, f), Object.setPrototypeOf(v, l.prototype), v
    }

    function C(g) {
        if (l.isBuffer(g)) {
            const u = y(g.length) | 0,
                f = o(u);
            return f.length === 0 || g.copy(f, 0, 0, u), f
        }
        if (g.length !== void 0) return typeof g.length != "number" || Df(g.length) ? o(0) : A(g);
        if (g.type === "Buffer" && Array.isArray(g.data)) return A(g.data)
    }

    function y(g) {
        if (g >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
        return g | 0
    }

    function w(g) {
        return +g != g && (g = 0), l.alloc(+g)
    }
    l.isBuffer = function (u) {
        return u != null && u._isBuffer === !0 && u !== l.prototype
    }, l.compare = function (u, f) {
        if (Mn(u, Uint8Array) && (u = l.from(u, u.offset, u.byteLength)), Mn(f, Uint8Array) && (f = l.from(f, f.offset, f.byteLength)), !l.isBuffer(u) || !l.isBuffer(f)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (u === f) return 0;
        let v = u.length,
            N = f.length;
        for (let I = 0, L = Math.min(v, N); I < L; ++I)
            if (u[I] !== f[I]) {
                v = u[I], N = f[I];
                break
            }
        return v < N ? -1 : N < v ? 1 : 0
    }, l.isEncoding = function (u) {
        switch (String(u).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
        }
    }, l.concat = function (u, f) {
        if (!Array.isArray(u)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (u.length === 0) return l.alloc(0);
        let v;
        if (f === void 0)
            for (f = 0, v = 0; v < u.length; ++v) f += u[v].length;
        const N = l.allocUnsafe(f);
        let I = 0;
        for (v = 0; v < u.length; ++v) {
            let L = u[v];
            if (Mn(L, Uint8Array)) I + L.length > N.length ? (l.isBuffer(L) || (L = l.from(L)), L.copy(N, I)) : Uint8Array.prototype.set.call(N, L, I);
            else if (l.isBuffer(L)) L.copy(N, I);
            else throw new TypeError('"list" argument must be an Array of Buffers');
            I += L.length
        }
        return N
    };

    function E(g, u) {
        if (l.isBuffer(g)) return g.length;
        if (ArrayBuffer.isView(g) || Mn(g, ArrayBuffer)) return g.byteLength;
        if (typeof g != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof g);
        const f = g.length,
            v = arguments.length > 2 && arguments[2] === !0;
        if (!v && f === 0) return 0;
        let N = !1;
        for (; ;) switch (u) {
            case "ascii":
            case "latin1":
            case "binary":
                return f;
            case "utf8":
            case "utf-8":
                return Lf(g).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return f * 2;
            case "hex":
                return f >>> 1;
            case "base64":
                return Tg(g).length;
            default:
                if (N) return v ? -1 : Lf(g).length;
                u = ("" + u).toLowerCase(), N = !0
        }
    }
    l.byteLength = E;

    function B(g, u, f) {
        let v = !1;
        if ((u === void 0 || u < 0) && (u = 0), u > this.length || ((f === void 0 || f > this.length) && (f = this.length), f <= 0) || (f >>>= 0, u >>>= 0, f <= u)) return "";
        for (g || (g = "utf8"); ;) switch (g) {
            case "hex":
                return Q(this, u, f);
            case "utf8":
            case "utf-8":
                return Me(this, u, f);
            case "ascii":
                return re(this, u, f);
            case "latin1":
            case "binary":
                return _(this, u, f);
            case "base64":
                return we(this, u, f);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return $(this, u, f);
            default:
                if (v) throw new TypeError("Unknown encoding: " + g);
                g = (g + "").toLowerCase(), v = !0
        }
    }
    l.prototype._isBuffer = !0;

    function T(g, u, f) {
        const v = g[u];
        g[u] = g[f], g[f] = v
    }
    l.prototype.swap16 = function () {
        const u = this.length;
        if (u % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let f = 0; f < u; f += 2) T(this, f, f + 1);
        return this
    }, l.prototype.swap32 = function () {
        const u = this.length;
        if (u % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let f = 0; f < u; f += 4) T(this, f, f + 3), T(this, f + 1, f + 2);
        return this
    }, l.prototype.swap64 = function () {
        const u = this.length;
        if (u % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let f = 0; f < u; f += 8) T(this, f, f + 7), T(this, f + 1, f + 6), T(this, f + 2, f + 5), T(this, f + 3, f + 4);
        return this
    }, l.prototype.toString = function () {
        const u = this.length;
        return u === 0 ? "" : arguments.length === 0 ? Me(this, 0, u) : B.apply(this, arguments)
    }, l.prototype.toLocaleString = l.prototype.toString, l.prototype.equals = function (u) {
        if (!l.isBuffer(u)) throw new TypeError("Argument must be a Buffer");
        return this === u ? !0 : l.compare(this, u) === 0
    }, l.prototype.inspect = function () {
        let u = "";
        const f = t.INSPECT_MAX_BYTES;
        return u = this.toString("hex", 0, f).replace(/(.{2})/g, "$1 ").trim(), this.length > f && (u += " ... "), "<Buffer " + u + ">"
    }, r && (l.prototype[r] = l.prototype.inspect), l.prototype.compare = function (u, f, v, N, I) {
        if (Mn(u, Uint8Array) && (u = l.from(u, u.offset, u.byteLength)), !l.isBuffer(u)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof u);
        if (f === void 0 && (f = 0), v === void 0 && (v = u ? u.length : 0), N === void 0 && (N = 0), I === void 0 && (I = this.length), f < 0 || v > u.length || N < 0 || I > this.length) throw new RangeError("out of range index");
        if (N >= I && f >= v) return 0;
        if (N >= I) return -1;
        if (f >= v) return 1;
        if (f >>>= 0, v >>>= 0, N >>>= 0, I >>>= 0, this === u) return 0;
        let L = I - N,
            ae = v - f;
        const Oe = Math.min(L, ae),
            Ce = this.slice(N, I),
            Fe = u.slice(f, v);
        for (let ve = 0; ve < Oe; ++ve)
            if (Ce[ve] !== Fe[ve]) {
                L = Ce[ve], ae = Fe[ve];
                break
            }
        return L < ae ? -1 : ae < L ? 1 : 0
    };

    function O(g, u, f, v, N) {
        if (g.length === 0) return -1;
        if (typeof f == "string" ? (v = f, f = 0) : f > 2147483647 ? f = 2147483647 : f < -2147483648 && (f = -2147483648), f = +f, Df(f) && (f = N ? 0 : g.length - 1), f < 0 && (f = g.length + f), f >= g.length) {
            if (N) return -1;
            f = g.length - 1
        } else if (f < 0)
            if (N) f = 0;
            else return -1;
        if (typeof u == "string" && (u = l.from(u, v)), l.isBuffer(u)) return u.length === 0 ? -1 : U(g, u, f, v, N);
        if (typeof u == "number") return u = u & 255, typeof Uint8Array.prototype.indexOf == "function" ? N ? Uint8Array.prototype.indexOf.call(g, u, f) : Uint8Array.prototype.lastIndexOf.call(g, u, f) : U(g, [u], f, v, N);
        throw new TypeError("val must be string, number or Buffer")
    }

    function U(g, u, f, v, N) {
        let I = 1,
            L = g.length,
            ae = u.length;
        if (v !== void 0 && (v = String(v).toLowerCase(), v === "ucs2" || v === "ucs-2" || v === "utf16le" || v === "utf-16le")) {
            if (g.length < 2 || u.length < 2) return -1;
            I = 2, L /= 2, ae /= 2, f /= 2
        }

        function Oe(Fe, ve) {
            return I === 1 ? Fe[ve] : Fe.readUInt16BE(ve * I)
        }
        let Ce;
        if (N) {
            let Fe = -1;
            for (Ce = f; Ce < L; Ce++)
                if (Oe(g, Ce) === Oe(u, Fe === -1 ? 0 : Ce - Fe)) {
                    if (Fe === -1 && (Fe = Ce), Ce - Fe + 1 === ae) return Fe * I
                } else Fe !== -1 && (Ce -= Ce - Fe), Fe = -1
        } else
            for (f + ae > L && (f = L - ae), Ce = f; Ce >= 0; Ce--) {
                let Fe = !0;
                for (let ve = 0; ve < ae; ve++)
                    if (Oe(g, Ce + ve) !== Oe(u, ve)) {
                        Fe = !1;
                        break
                    }
                if (Fe) return Ce
            }
        return -1
    }
    l.prototype.includes = function (u, f, v) {
        return this.indexOf(u, f, v) !== -1
    }, l.prototype.indexOf = function (u, f, v) {
        return O(this, u, f, v, !0)
    }, l.prototype.lastIndexOf = function (u, f, v) {
        return O(this, u, f, v, !1)
    };

    function F(g, u, f, v) {
        f = Number(f) || 0;
        const N = g.length - f;
        v ? (v = Number(v), v > N && (v = N)) : v = N;
        const I = u.length;
        v > I / 2 && (v = I / 2);
        let L;
        for (L = 0; L < v; ++L) {
            const ae = parseInt(u.substr(L * 2, 2), 16);
            if (Df(ae)) return L;
            g[f + L] = ae
        }
        return L
    }

    function X(g, u, f, v) {
        return hu(Lf(u, g.length - f), g, f, v)
    }

    function j(g, u, f, v) {
        return hu(bv(u), g, f, v)
    }

    function q(g, u, f, v) {
        return hu(Tg(u), g, f, v)
    }

    function ee(g, u, f, v) {
        return hu(kv(u, g.length - f), g, f, v)
    }
    l.prototype.write = function (u, f, v, N) {
        if (f === void 0) N = "utf8", v = this.length, f = 0;
        else if (v === void 0 && typeof f == "string") N = f, v = this.length, f = 0;
        else if (isFinite(f)) f = f >>> 0, isFinite(v) ? (v = v >>> 0, N === void 0 && (N = "utf8")) : (N = v, v = void 0);
        else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        const I = this.length - f;
        if ((v === void 0 || v > I) && (v = I), u.length > 0 && (v < 0 || f < 0) || f > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        N || (N = "utf8");
        let L = !1;
        for (; ;) switch (N) {
            case "hex":
                return F(this, u, f, v);
            case "utf8":
            case "utf-8":
                return X(this, u, f, v);
            case "ascii":
            case "latin1":
            case "binary":
                return j(this, u, f, v);
            case "base64":
                return q(this, u, f, v);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return ee(this, u, f, v);
            default:
                if (L) throw new TypeError("Unknown encoding: " + N);
                N = ("" + N).toLowerCase(), L = !0
        }
    }, l.prototype.toJSON = function () {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    };

    function we(g, u, f) {
        return u === 0 && f === g.length ? e.fromByteArray(g) : e.fromByteArray(g.slice(u, f))
    }

    function Me(g, u, f) {
        f = Math.min(g.length, f);
        const v = [];
        let N = u;
        for (; N < f;) {
            const I = g[N];
            let L = null,
                ae = I > 239 ? 4 : I > 223 ? 3 : I > 191 ? 2 : 1;
            if (N + ae <= f) {
                let Oe, Ce, Fe, ve;
                switch (ae) {
                    case 1:
                        I < 128 && (L = I);
                        break;
                    case 2:
                        Oe = g[N + 1], (Oe & 192) === 128 && (ve = (I & 31) << 6 | Oe & 63, ve > 127 && (L = ve));
                        break;
                    case 3:
                        Oe = g[N + 1], Ce = g[N + 2], (Oe & 192) === 128 && (Ce & 192) === 128 && (ve = (I & 15) << 12 | (Oe & 63) << 6 | Ce & 63, ve > 2047 && (ve < 55296 || ve > 57343) && (L = ve));
                        break;
                    case 4:
                        Oe = g[N + 1], Ce = g[N + 2], Fe = g[N + 3], (Oe & 192) === 128 && (Ce & 192) === 128 && (Fe & 192) === 128 && (ve = (I & 15) << 18 | (Oe & 63) << 12 | (Ce & 63) << 6 | Fe & 63, ve > 65535 && ve < 1114112 && (L = ve))
                }
            }
            L === null ? (L = 65533, ae = 1) : L > 65535 && (L -= 65536, v.push(L >>> 10 & 1023 | 55296), L = 56320 | L & 1023), v.push(L), N += ae
        }
        return V(v)
    }
    const H = 4096;

    function V(g) {
        const u = g.length;
        if (u <= H) return String.fromCharCode.apply(String, g);
        let f = "",
            v = 0;
        for (; v < u;) f += String.fromCharCode.apply(String, g.slice(v, v += H));
        return f
    }

    function re(g, u, f) {
        let v = "";
        f = Math.min(g.length, f);
        for (let N = u; N < f; ++N) v += String.fromCharCode(g[N] & 127);
        return v
    }

    function _(g, u, f) {
        let v = "";
        f = Math.min(g.length, f);
        for (let N = u; N < f; ++N) v += String.fromCharCode(g[N]);
        return v
    }

    function Q(g, u, f) {
        const v = g.length;
        (!u || u < 0) && (u = 0), (!f || f < 0 || f > v) && (f = v);
        let N = "";
        for (let I = u; I < f; ++I) N += Nv[g[I]];
        return N
    }

    function $(g, u, f) {
        const v = g.slice(u, f);
        let N = "";
        for (let I = 0; I < v.length - 1; I += 2) N += String.fromCharCode(v[I] + v[I + 1] * 256);
        return N
    }
    l.prototype.slice = function (u, f) {
        const v = this.length;
        u = ~~u, f = f === void 0 ? v : ~~f, u < 0 ? (u += v, u < 0 && (u = 0)) : u > v && (u = v), f < 0 ? (f += v, f < 0 && (f = 0)) : f > v && (f = v), f < u && (f = u);
        const N = this.subarray(u, f);
        return Object.setPrototypeOf(N, l.prototype), N
    };

    function Y(g, u, f) {
        if (g % 1 !== 0 || g < 0) throw new RangeError("offset is not uint");
        if (g + u > f) throw new RangeError("Trying to access beyond buffer length")
    }
    l.prototype.readUintLE = l.prototype.readUIntLE = function (u, f, v) {
        u = u >>> 0, f = f >>> 0, v || Y(u, f, this.length);
        let N = this[u],
            I = 1,
            L = 0;
        for (; ++L < f && (I *= 256);) N += this[u + L] * I;
        return N
    }, l.prototype.readUintBE = l.prototype.readUIntBE = function (u, f, v) {
        u = u >>> 0, f = f >>> 0, v || Y(u, f, this.length);
        let N = this[u + --f],
            I = 1;
        for (; f > 0 && (I *= 256);) N += this[u + --f] * I;
        return N
    }, l.prototype.readUint8 = l.prototype.readUInt8 = function (u, f) {
        return u = u >>> 0, f || Y(u, 1, this.length), this[u]
    }, l.prototype.readUint16LE = l.prototype.readUInt16LE = function (u, f) {
        return u = u >>> 0, f || Y(u, 2, this.length), this[u] | this[u + 1] << 8
    }, l.prototype.readUint16BE = l.prototype.readUInt16BE = function (u, f) {
        return u = u >>> 0, f || Y(u, 2, this.length), this[u] << 8 | this[u + 1]
    }, l.prototype.readUint32LE = l.prototype.readUInt32LE = function (u, f) {
        return u = u >>> 0, f || Y(u, 4, this.length), (this[u] | this[u + 1] << 8 | this[u + 2] << 16) + this[u + 3] * 16777216
    }, l.prototype.readUint32BE = l.prototype.readUInt32BE = function (u, f) {
        return u = u >>> 0, f || Y(u, 4, this.length), this[u] * 16777216 + (this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3])
    }, l.prototype.readBigUInt64LE = Gr(function (u) {
        u = u >>> 0, Ye(u, "offset");
        const f = this[u],
            v = this[u + 7];
        (f === void 0 || v === void 0) && en(u, this.length - 8);
        const N = f + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24,
            I = this[++u] + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + v * 2 ** 24;
        return BigInt(N) + (BigInt(I) << BigInt(32))
    }), l.prototype.readBigUInt64BE = Gr(function (u) {
        u = u >>> 0, Ye(u, "offset");
        const f = this[u],
            v = this[u + 7];
        (f === void 0 || v === void 0) && en(u, this.length - 8);
        const N = f * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u],
            I = this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + v;
        return (BigInt(N) << BigInt(32)) + BigInt(I)
    }), l.prototype.readIntLE = function (u, f, v) {
        u = u >>> 0, f = f >>> 0, v || Y(u, f, this.length);
        let N = this[u],
            I = 1,
            L = 0;
        for (; ++L < f && (I *= 256);) N += this[u + L] * I;
        return I *= 128, N >= I && (N -= Math.pow(2, 8 * f)), N
    }, l.prototype.readIntBE = function (u, f, v) {
        u = u >>> 0, f = f >>> 0, v || Y(u, f, this.length);
        let N = f,
            I = 1,
            L = this[u + --N];
        for (; N > 0 && (I *= 256);) L += this[u + --N] * I;
        return I *= 128, L >= I && (L -= Math.pow(2, 8 * f)), L
    }, l.prototype.readInt8 = function (u, f) {
        return u = u >>> 0, f || Y(u, 1, this.length), this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u]
    }, l.prototype.readInt16LE = function (u, f) {
        u = u >>> 0, f || Y(u, 2, this.length);
        const v = this[u] | this[u + 1] << 8;
        return v & 32768 ? v | 4294901760 : v
    }, l.prototype.readInt16BE = function (u, f) {
        u = u >>> 0, f || Y(u, 2, this.length);
        const v = this[u + 1] | this[u] << 8;
        return v & 32768 ? v | 4294901760 : v
    }, l.prototype.readInt32LE = function (u, f) {
        return u = u >>> 0, f || Y(u, 4, this.length), this[u] | this[u + 1] << 8 | this[u + 2] << 16 | this[u + 3] << 24
    }, l.prototype.readInt32BE = function (u, f) {
        return u = u >>> 0, f || Y(u, 4, this.length), this[u] << 24 | this[u + 1] << 16 | this[u + 2] << 8 | this[u + 3]
    }, l.prototype.readBigInt64LE = Gr(function (u) {
        u = u >>> 0, Ye(u, "offset");
        const f = this[u],
            v = this[u + 7];
        (f === void 0 || v === void 0) && en(u, this.length - 8);
        const N = this[u + 4] + this[u + 5] * 2 ** 8 + this[u + 6] * 2 ** 16 + (v << 24);
        return (BigInt(N) << BigInt(32)) + BigInt(f + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24)
    }), l.prototype.readBigInt64BE = Gr(function (u) {
        u = u >>> 0, Ye(u, "offset");
        const f = this[u],
            v = this[u + 7];
        (f === void 0 || v === void 0) && en(u, this.length - 8);
        const N = (f << 24) + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u];
        return (BigInt(N) << BigInt(32)) + BigInt(this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + v)
    }), l.prototype.readFloatLE = function (u, f) {
        return u = u >>> 0, f || Y(u, 4, this.length), n.read(this, u, !0, 23, 4)
    }, l.prototype.readFloatBE = function (u, f) {
        return u = u >>> 0, f || Y(u, 4, this.length), n.read(this, u, !1, 23, 4)
    }, l.prototype.readDoubleLE = function (u, f) {
        return u = u >>> 0, f || Y(u, 8, this.length), n.read(this, u, !0, 52, 8)
    }, l.prototype.readDoubleBE = function (u, f) {
        return u = u >>> 0, f || Y(u, 8, this.length), n.read(this, u, !1, 52, 8)
    };

    function ne(g, u, f, v, N, I) {
        if (!l.isBuffer(g)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (u > N || u < I) throw new RangeError('"value" argument is out of bounds');
        if (f + v > g.length) throw new RangeError("Index out of range")
    }
    l.prototype.writeUintLE = l.prototype.writeUIntLE = function (u, f, v, N) {
        if (u = +u, f = f >>> 0, v = v >>> 0, !N) {
            const ae = Math.pow(2, 8 * v) - 1;
            ne(this, u, f, v, ae, 0)
        }
        let I = 1,
            L = 0;
        for (this[f] = u & 255; ++L < v && (I *= 256);) this[f + L] = u / I & 255;
        return f + v
    }, l.prototype.writeUintBE = l.prototype.writeUIntBE = function (u, f, v, N) {
        if (u = +u, f = f >>> 0, v = v >>> 0, !N) {
            const ae = Math.pow(2, 8 * v) - 1;
            ne(this, u, f, v, ae, 0)
        }
        let I = v - 1,
            L = 1;
        for (this[f + I] = u & 255; --I >= 0 && (L *= 256);) this[f + I] = u / L & 255;
        return f + v
    }, l.prototype.writeUint8 = l.prototype.writeUInt8 = function (u, f, v) {
        return u = +u, f = f >>> 0, v || ne(this, u, f, 1, 255, 0), this[f] = u & 255, f + 1
    }, l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function (u, f, v) {
        return u = +u, f = f >>> 0, v || ne(this, u, f, 2, 65535, 0), this[f] = u & 255, this[f + 1] = u >>> 8, f + 2
    }, l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function (u, f, v) {
        return u = +u, f = f >>> 0, v || ne(this, u, f, 2, 65535, 0), this[f] = u >>> 8, this[f + 1] = u & 255, f + 2
    }, l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function (u, f, v) {
        return u = +u, f = f >>> 0, v || ne(this, u, f, 4, 4294967295, 0), this[f + 3] = u >>> 24, this[f + 2] = u >>> 16, this[f + 1] = u >>> 8, this[f] = u & 255, f + 4
    }, l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function (u, f, v) {
        return u = +u, f = f >>> 0, v || ne(this, u, f, 4, 4294967295, 0), this[f] = u >>> 24, this[f + 1] = u >>> 16, this[f + 2] = u >>> 8, this[f + 3] = u & 255, f + 4
    };

    function at(g, u, f, v, N) {
        sr(u, v, N, g, f, 7);
        let I = Number(u & BigInt(4294967295));
        g[f++] = I, I = I >> 8, g[f++] = I, I = I >> 8, g[f++] = I, I = I >> 8, g[f++] = I;
        let L = Number(u >> BigInt(32) & BigInt(4294967295));
        return g[f++] = L, L = L >> 8, g[f++] = L, L = L >> 8, g[f++] = L, L = L >> 8, g[f++] = L, f
    }

    function Je(g, u, f, v, N) {
        sr(u, v, N, g, f, 7);
        let I = Number(u & BigInt(4294967295));
        g[f + 7] = I, I = I >> 8, g[f + 6] = I, I = I >> 8, g[f + 5] = I, I = I >> 8, g[f + 4] = I;
        let L = Number(u >> BigInt(32) & BigInt(4294967295));
        return g[f + 3] = L, L = L >> 8, g[f + 2] = L, L = L >> 8, g[f + 1] = L, L = L >> 8, g[f] = L, f + 8
    }
    l.prototype.writeBigUInt64LE = Gr(function (u, f = 0) {
        return at(this, u, f, BigInt(0), BigInt("0xffffffffffffffff"))
    }), l.prototype.writeBigUInt64BE = Gr(function (u, f = 0) {
        return Je(this, u, f, BigInt(0), BigInt("0xffffffffffffffff"))
    }), l.prototype.writeIntLE = function (u, f, v, N) {
        if (u = +u, f = f >>> 0, !N) {
            const Oe = Math.pow(2, 8 * v - 1);
            ne(this, u, f, v, Oe - 1, -Oe)
        }
        let I = 0,
            L = 1,
            ae = 0;
        for (this[f] = u & 255; ++I < v && (L *= 256);) u < 0 && ae === 0 && this[f + I - 1] !== 0 && (ae = 1), this[f + I] = (u / L >> 0) - ae & 255;
        return f + v
    }, l.prototype.writeIntBE = function (u, f, v, N) {
        if (u = +u, f = f >>> 0, !N) {
            const Oe = Math.pow(2, 8 * v - 1);
            ne(this, u, f, v, Oe - 1, -Oe)
        }
        let I = v - 1,
            L = 1,
            ae = 0;
        for (this[f + I] = u & 255; --I >= 0 && (L *= 256);) u < 0 && ae === 0 && this[f + I + 1] !== 0 && (ae = 1), this[f + I] = (u / L >> 0) - ae & 255;
        return f + v
    }, l.prototype.writeInt8 = function (u, f, v) {
        return u = +u, f = f >>> 0, v || ne(this, u, f, 1, 127, -128), u < 0 && (u = 255 + u + 1), this[f] = u & 255, f + 1
    }, l.prototype.writeInt16LE = function (u, f, v) {
        return u = +u, f = f >>> 0, v || ne(this, u, f, 2, 32767, -32768), this[f] = u & 255, this[f + 1] = u >>> 8, f + 2
    }, l.prototype.writeInt16BE = function (u, f, v) {
        return u = +u, f = f >>> 0, v || ne(this, u, f, 2, 32767, -32768), this[f] = u >>> 8, this[f + 1] = u & 255, f + 2
    }, l.prototype.writeInt32LE = function (u, f, v) {
        return u = +u, f = f >>> 0, v || ne(this, u, f, 4, 2147483647, -2147483648), this[f] = u & 255, this[f + 1] = u >>> 8, this[f + 2] = u >>> 16, this[f + 3] = u >>> 24, f + 4
    }, l.prototype.writeInt32BE = function (u, f, v) {
        return u = +u, f = f >>> 0, v || ne(this, u, f, 4, 2147483647, -2147483648), u < 0 && (u = 4294967295 + u + 1), this[f] = u >>> 24, this[f + 1] = u >>> 16, this[f + 2] = u >>> 8, this[f + 3] = u & 255, f + 4
    }, l.prototype.writeBigInt64LE = Gr(function (u, f = 0) {
        return at(this, u, f, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    }), l.prototype.writeBigInt64BE = Gr(function (u, f = 0) {
        return Je(this, u, f, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });

    function Gt(g, u, f, v, N, I) {
        if (f + v > g.length) throw new RangeError("Index out of range");
        if (f < 0) throw new RangeError("Index out of range")
    }

    function ut(g, u, f, v, N) {
        return u = +u, f = f >>> 0, N || Gt(g, u, f, 4), n.write(g, u, f, v, 23, 4), f + 4
    }
    l.prototype.writeFloatLE = function (u, f, v) {
        return ut(this, u, f, !0, v)
    }, l.prototype.writeFloatBE = function (u, f, v) {
        return ut(this, u, f, !1, v)
    };

    function ct(g, u, f, v, N) {
        return u = +u, f = f >>> 0, N || Gt(g, u, f, 8), n.write(g, u, f, v, 52, 8), f + 8
    }
    l.prototype.writeDoubleLE = function (u, f, v) {
        return ct(this, u, f, !0, v)
    }, l.prototype.writeDoubleBE = function (u, f, v) {
        return ct(this, u, f, !1, v)
    }, l.prototype.copy = function (u, f, v, N) {
        if (!l.isBuffer(u)) throw new TypeError("argument should be a Buffer");
        if (v || (v = 0), !N && N !== 0 && (N = this.length), f >= u.length && (f = u.length), f || (f = 0), N > 0 && N < v && (N = v), N === v || u.length === 0 || this.length === 0) return 0;
        if (f < 0) throw new RangeError("targetStart out of bounds");
        if (v < 0 || v >= this.length) throw new RangeError("Index out of range");
        if (N < 0) throw new RangeError("sourceEnd out of bounds");
        N > this.length && (N = this.length), u.length - f < N - v && (N = u.length - f + v);
        const I = N - v;
        return this === u && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(f, v, N) : Uint8Array.prototype.set.call(u, this.subarray(v, N), f), I
    }, l.prototype.fill = function (u, f, v, N) {
        if (typeof u == "string") {
            if (typeof f == "string" ? (N = f, f = 0, v = this.length) : typeof v == "string" && (N = v, v = this.length), N !== void 0 && typeof N != "string") throw new TypeError("encoding must be a string");
            if (typeof N == "string" && !l.isEncoding(N)) throw new TypeError("Unknown encoding: " + N);
            if (u.length === 1) {
                const L = u.charCodeAt(0);
                (N === "utf8" && L < 128 || N === "latin1") && (u = L)
            }
        } else typeof u == "number" ? u = u & 255 : typeof u == "boolean" && (u = Number(u));
        if (f < 0 || this.length < f || this.length < v) throw new RangeError("Out of range index");
        if (v <= f) return this;
        f = f >>> 0, v = v === void 0 ? this.length : v >>> 0, u || (u = 0);
        let I;
        if (typeof u == "number")
            for (I = f; I < v; ++I) this[I] = u;
        else {
            const L = l.isBuffer(u) ? u : l.from(u, N),
                ae = L.length;
            if (ae === 0) throw new TypeError('The value "' + u + '" is invalid for argument "value"');
            for (I = 0; I < v - f; ++I) this[I + f] = L[I % ae]
        }
        return this
    };
    const Dn = {};

    function yn(g, u, f) {
        Dn[g] = class extends f {
            constructor() {
                super(), Object.defineProperty(this, "message", {
                    value: u.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }), this.name = `${this.name} [${g}]`, this.stack, delete this.name
            }
            get code() {
                return g
            }
            set code(N) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: N,
                    writable: !0
                })
            }
            toString() {
                return `${this.name} [${g}]: ${this.message}`
            }
        }
    }
    yn("ERR_BUFFER_OUT_OF_BOUNDS", function (g) {
        return g ? `${g} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
    }, RangeError), yn("ERR_INVALID_ARG_TYPE", function (g, u) {
        return `The "${g}" argument must be of type number. Received type ${typeof u}`
    }, TypeError), yn("ERR_OUT_OF_RANGE", function (g, u, f) {
        let v = `The value of "${g}" is out of range.`,
            N = f;
        return Number.isInteger(f) && Math.abs(f) > 2 ** 32 ? N = ir(String(f)) : typeof f == "bigint" && (N = String(f), (f > BigInt(2) ** BigInt(32) || f < -(BigInt(2) ** BigInt(32))) && (N = ir(N)), N += "n"), v += ` It must be ${u}. Received ${N}`, v
    }, RangeError);

    function ir(g) {
        let u = "",
            f = g.length;
        const v = g[0] === "-" ? 1 : 0;
        for (; f >= v + 4; f -= 3) u = `_${g.slice(f - 3, f)}${u}`;
        return `${g.slice(0, f)}${u}`
    }

    function cu(g, u, f) {
        Ye(u, "offset"), (g[u] === void 0 || g[u + f] === void 0) && en(u, g.length - (f + 1))
    }

    function sr(g, u, f, v, N, I) {
        if (g > f || g < u) {
            const L = typeof u == "bigint" ? "n" : "";
            let ae;
            throw u === 0 || u === BigInt(0) ? ae = `>= 0${L} and < 2${L} ** ${(I + 1) * 8}${L}` : ae = `>= -(2${L} ** ${(I + 1) * 8 - 1}${L}) and < 2 ** ${(I + 1) * 8 - 1}${L}`, new Dn.ERR_OUT_OF_RANGE("value", ae, g)
        }
        cu(v, N, I)
    }

    function Ye(g, u) {
        if (typeof g != "number") throw new Dn.ERR_INVALID_ARG_TYPE(u, "number", g)
    }

    function en(g, u, f) {
        throw Math.floor(g) !== g ? (Ye(g, f), new Dn.ERR_OUT_OF_RANGE("offset", "an integer", g)) : u < 0 ? new Dn.ERR_BUFFER_OUT_OF_BOUNDS : new Dn.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${u}`, g)
    }
    const fu = /[^+/0-9A-Za-z-_]/g;

    function du(g) {
        if (g = g.split("=")[0], g = g.trim().replace(fu, ""), g.length < 2) return "";
        for (; g.length % 4 !== 0;) g = g + "=";
        return g
    }

    function Lf(g, u) {
        u = u || 1 / 0;
        let f;
        const v = g.length;
        let N = null;
        const I = [];
        for (let L = 0; L < v; ++L) {
            if (f = g.charCodeAt(L), f > 55295 && f < 57344) {
                if (!N) {
                    if (f > 56319) {
                        (u -= 3) > -1 && I.push(239, 191, 189);
                        continue
                    } else if (L + 1 === v) {
                        (u -= 3) > -1 && I.push(239, 191, 189);
                        continue
                    }
                    N = f;
                    continue
                }
                if (f < 56320) {
                    (u -= 3) > -1 && I.push(239, 191, 189), N = f;
                    continue
                }
                f = (N - 55296 << 10 | f - 56320) + 65536
            } else N && (u -= 3) > -1 && I.push(239, 191, 189);
            if (N = null, f < 128) {
                if ((u -= 1) < 0) break;
                I.push(f)
            } else if (f < 2048) {
                if ((u -= 2) < 0) break;
                I.push(f >> 6 | 192, f & 63 | 128)
            } else if (f < 65536) {
                if ((u -= 3) < 0) break;
                I.push(f >> 12 | 224, f >> 6 & 63 | 128, f & 63 | 128)
            } else if (f < 1114112) {
                if ((u -= 4) < 0) break;
                I.push(f >> 18 | 240, f >> 12 & 63 | 128, f >> 6 & 63 | 128, f & 63 | 128)
            } else throw new Error("Invalid code point")
        }
        return I
    }

    function bv(g) {
        const u = [];
        for (let f = 0; f < g.length; ++f) u.push(g.charCodeAt(f) & 255);
        return u
    }

    function kv(g, u) {
        let f, v, N;
        const I = [];
        for (let L = 0; L < g.length && !((u -= 2) < 0); ++L) f = g.charCodeAt(L), v = f >> 8, N = f % 256, I.push(N), I.push(v);
        return I
    }

    function Tg(g) {
        return e.toByteArray(du(g))
    }

    function hu(g, u, f, v) {
        let N;
        for (N = 0; N < v && !(N + f >= u.length || N >= g.length); ++N) u[N + f] = g[N];
        return N
    }

    function Mn(g, u) {
        return g instanceof u || g != null && g.constructor != null && g.constructor.name != null && g.constructor.name === u.name
    }

    function Df(g) {
        return g !== g
    }
    const Nv = function () {
        const g = "0123456789abcdef",
            u = new Array(256);
        for (let f = 0; f < 16; ++f) {
            const v = f * 16;
            for (let N = 0; N < 16; ++N) u[v + N] = g[f] + g[N]
        }
        return u
    }();

    function Gr(g) {
        return typeof BigInt > "u" ? Sv : g
    }

    function Sv() {
        throw new Error("BigInt not supported")
    }
})(Ay);
window.global = window;
window.Buffer = Ay.Buffer;
var Td = {},
    xy = {
        exports: {}
    },
    Xt = {},
    Ey = {
        exports: {}
    },
    by = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (t) {
    function e(_, Q) {
        var $ = _.length;
        _.push(Q);
        e: for (; 0 < $;) {
            var Y = $ - 1 >>> 1,
                ne = _[Y];
            if (0 < i(ne, Q)) _[Y] = Q, _[$] = ne, $ = Y;
            else break e
        }
    }

    function n(_) {
        return _.length === 0 ? null : _[0]
    }

    function r(_) {
        if (_.length === 0) return null;
        var Q = _[0],
            $ = _.pop();
        if ($ !== Q) {
            _[0] = $;
            e: for (var Y = 0, ne = _.length, at = ne >>> 1; Y < at;) {
                var Je = 2 * (Y + 1) - 1,
                    Gt = _[Je],
                    ut = Je + 1,
                    ct = _[ut];
                if (0 > i(Gt, $)) ut < ne && 0 > i(ct, Gt) ? (_[Y] = ct, _[ut] = $, Y = ut) : (_[Y] = Gt, _[Je] = $, Y = Je);
                else if (ut < ne && 0 > i(ct, $)) _[Y] = ct, _[ut] = $, Y = ut;
                else break e
            }
        }
        return Q
    }

    function i(_, Q) {
        var $ = _.sortIndex - Q.sortIndex;
        return $ !== 0 ? $ : _.id - Q.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        t.unstable_now = function () {
            return s.now()
        }
    } else {
        var o = Date,
            l = o.now();
        t.unstable_now = function () {
            return o.now() - l
        }
    }
    var a = [],
        c = [],
        d = 1,
        h = null,
        m = 3,
        A = !1,
        k = !1,
        x = !1,
        C = typeof setTimeout == "function" ? setTimeout : null,
        y = typeof clearTimeout == "function" ? clearTimeout : null,
        w = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function E(_) {
        for (var Q = n(c); Q !== null;) {
            if (Q.callback === null) r(c);
            else if (Q.startTime <= _) r(c), Q.sortIndex = Q.expirationTime, e(a, Q);
            else break;
            Q = n(c)
        }
    }

    function B(_) {
        if (x = !1, E(_), !k)
            if (n(a) !== null) k = !0, V(T);
            else {
                var Q = n(c);
                Q !== null && re(B, Q.startTime - _)
            }
    }

    function T(_, Q) {
        k = !1, x && (x = !1, y(F), F = -1), A = !0;
        var $ = m;
        try {
            for (E(Q), h = n(a); h !== null && (!(h.expirationTime > Q) || _ && !q());) {
                var Y = h.callback;
                if (typeof Y == "function") {
                    h.callback = null, m = h.priorityLevel;
                    var ne = Y(h.expirationTime <= Q);
                    Q = t.unstable_now(), typeof ne == "function" ? h.callback = ne : h === n(a) && r(a), E(Q)
                } else r(a);
                h = n(a)
            }
            if (h !== null) var at = !0;
            else {
                var Je = n(c);
                Je !== null && re(B, Je.startTime - Q), at = !1
            }
            return at
        } finally {
            h = null, m = $, A = !1
        }
    }
    var O = !1,
        U = null,
        F = -1,
        X = 5,
        j = -1;

    function q() {
        return !(t.unstable_now() - j < X)
    }

    function ee() {
        if (U !== null) {
            var _ = t.unstable_now();
            j = _;
            var Q = !0;
            try {
                Q = U(!0, _)
            } finally {
                Q ? we() : (O = !1, U = null)
            }
        } else O = !1
    }
    var we;
    if (typeof w == "function") we = function () {
        w(ee)
    };
    else if (typeof MessageChannel < "u") {
        var Me = new MessageChannel,
            H = Me.port2;
        Me.port1.onmessage = ee, we = function () {
            H.postMessage(null)
        }
    } else we = function () {
        C(ee, 0)
    };

    function V(_) {
        U = _, O || (O = !0, we())
    }

    function re(_, Q) {
        F = C(function () {
            _(t.unstable_now())
        }, Q)
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (_) {
        _.callback = null
    }, t.unstable_continueExecution = function () {
        k || A || (k = !0, V(T))
    }, t.unstable_forceFrameRate = function (_) {
        0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : X = 0 < _ ? Math.floor(1e3 / _) : 5
    }, t.unstable_getCurrentPriorityLevel = function () {
        return m
    }, t.unstable_getFirstCallbackNode = function () {
        return n(a)
    }, t.unstable_next = function (_) {
        switch (m) {
            case 1:
            case 2:
            case 3:
                var Q = 3;
                break;
            default:
                Q = m
        }
        var $ = m;
        m = Q;
        try {
            return _()
        } finally {
            m = $
        }
    }, t.unstable_pauseExecution = function () { }, t.unstable_requestPaint = function () { }, t.unstable_runWithPriority = function (_, Q) {
        switch (_) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                _ = 3
        }
        var $ = m;
        m = _;
        try {
            return Q()
        } finally {
            m = $
        }
    }, t.unstable_scheduleCallback = function (_, Q, $) {
        var Y = t.unstable_now();
        switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? Y + $ : Y) : $ = Y, _) {
            case 1:
                var ne = -1;
                break;
            case 2:
                ne = 250;
                break;
            case 5:
                ne = 1073741823;
                break;
            case 4:
                ne = 1e4;
                break;
            default:
                ne = 5e3
        }
        return ne = $ + ne, _ = {
            id: d++,
            callback: Q,
            priorityLevel: _,
            startTime: $,
            expirationTime: ne,
            sortIndex: -1
        }, $ > Y ? (_.sortIndex = $, e(c, _), n(a) === null && _ === n(c) && (x ? (y(F), F = -1) : x = !0, re(B, $ - Y))) : (_.sortIndex = ne, e(a, _), k || A || (k = !0, V(T))), _
    }, t.unstable_shouldYield = q, t.unstable_wrapCallback = function (_) {
        var Q = m;
        return function () {
            var $ = m;
            m = Q;
            try {
                return _.apply(this, arguments)
            } finally {
                m = $
            }
        }
    }
})(by);
Ey.exports = by;
var ox = Ey.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lx = ce,
    Zt = ox;

function z(t) {
    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ky = new Set,
    ha = {};

function Ms(t, e) {
    dl(t, e), dl(t + "Capture", e)
}

function dl(t, e) {
    for (ha[t] = e, t = 0; t < e.length; t++) ky.add(e[t])
}
var Or = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Od = Object.prototype.hasOwnProperty,
    ax = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Dg = {},
    Mg = {};

function ux(t) {
    return Od.call(Mg, t) ? !0 : Od.call(Dg, t) ? !1 : ax.test(t) ? Mg[t] = !0 : (Dg[t] = !0, !1)
}

function cx(t, e, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof e) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
        default:
            return !1
    }
}

function fx(t, e, n, r) {
    if (e === null || typeof e > "u" || cx(t, e, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !e;
        case 4:
            return e === !1;
        case 5:
            return isNaN(e);
        case 6:
            return isNaN(e) || 1 > e
    }
    return !1
}

function It(t, e, n, r, i, s, o) {
    this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = s, this.removeEmptyString = o
}
var lt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (t) {
    lt[t] = new It(t, 0, !1, t, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function (t) {
    var e = t[0];
    lt[e] = new It(e, 1, !1, t[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
    lt[t] = new It(t, 2, !1, t.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (t) {
    lt[t] = new It(t, 2, !1, t, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (t) {
    lt[t] = new It(t, 3, !1, t.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (t) {
    lt[t] = new It(t, 3, !0, t, null, !1, !1)
});
["capture", "download"].forEach(function (t) {
    lt[t] = new It(t, 4, !1, t, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (t) {
    lt[t] = new It(t, 6, !1, t, null, !1, !1)
});
["rowSpan", "start"].forEach(function (t) {
    lt[t] = new It(t, 5, !1, t.toLowerCase(), null, !1, !1)
});
var mp = /[\-:]([a-z])/g;

function yp(t) {
    return t[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (t) {
    var e = t.replace(mp, yp);
    lt[e] = new It(e, 1, !1, t, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (t) {
    var e = t.replace(mp, yp);
    lt[e] = new It(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
    var e = t.replace(mp, yp);
    lt[e] = new It(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (t) {
    lt[t] = new It(t, 1, !1, t.toLowerCase(), null, !1, !1)
});
lt.xlinkHref = new It("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (t) {
    lt[t] = new It(t, 1, !1, t.toLowerCase(), null, !0, !0)
});

function wp(t, e, n, r) {
    var i = lt.hasOwnProperty(e) ? lt[e] : null;
    (i !== null ? i.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (fx(e, n, i, r) && (n = null), r || i === null ? ux(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : i.mustUseProperty ? t[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (e = i.attributeName, r = i.attributeNamespace, n === null ? t.removeAttribute(e) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
}
var _r = lx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    gu = Symbol.for("react.element"),
    $s = Symbol.for("react.portal"),
    Zs = Symbol.for("react.fragment"),
    Ap = Symbol.for("react.strict_mode"),
    Fd = Symbol.for("react.profiler"),
    Ny = Symbol.for("react.provider"),
    Sy = Symbol.for("react.context"),
    vp = Symbol.for("react.forward_ref"),
    Ud = Symbol.for("react.suspense"),
    Ld = Symbol.for("react.suspense_list"),
    xp = Symbol.for("react.memo"),
    $r = Symbol.for("react.lazy"),
    Cy = Symbol.for("react.offscreen"),
    _g = Symbol.iterator;

function Ol(t) {
    return t === null || typeof t != "object" ? null : (t = _g && t[_g] || t["@@iterator"], typeof t == "function" ? t : null)
}
var Te = Object.assign,
    Gf;

function Jl(t) {
    if (Gf === void 0) try {
        throw Error()
    } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        Gf = e && e[1] || ""
    }
    return `
` + Gf + t
}
var Hf = !1;

function Qf(t, e) {
    if (!t || Hf) return "";
    Hf = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (e = function () {
                throw Error()
            }, Object.defineProperty(e.prototype, "props", {
                set: function () {
                    throw Error()
                }
            }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(e, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(t, [], e)
            } else {
                try {
                    e.call()
                } catch (c) {
                    r = c
                }
                t.call(e.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            t()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var i = c.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, l = s.length - 1; 1 <= o && 0 <= l && i[o] !== s[l];) l--;
            for (; 1 <= o && 0 <= l; o--, l--)
                if (i[o] !== s[l]) {
                    if (o !== 1 || l !== 1)
                        do
                            if (o--, l--, 0 > l || i[o] !== s[l]) {
                                var a = `
` + i[o].replace(" at new ", " at ");
                                return t.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", t.displayName)), a
                            }
                        while (1 <= o && 0 <= l);
                    break
                }
        }
    } finally {
        Hf = !1, Error.prepareStackTrace = n
    }
    return (t = t ? t.displayName || t.name : "") ? Jl(t) : ""
}

function dx(t) {
    switch (t.tag) {
        case 5:
            return Jl(t.type);
        case 16:
            return Jl("Lazy");
        case 13:
            return Jl("Suspense");
        case 19:
            return Jl("SuspenseList");
        case 0:
        case 2:
        case 15:
            return t = Qf(t.type, !1), t;
        case 11:
            return t = Qf(t.type.render, !1), t;
        case 1:
            return t = Qf(t.type, !0), t;
        default:
            return ""
    }
}

function Dd(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
        case Zs:
            return "Fragment";
        case $s:
            return "Portal";
        case Fd:
            return "Profiler";
        case Ap:
            return "StrictMode";
        case Ud:
            return "Suspense";
        case Ld:
            return "SuspenseList"
    }
    if (typeof t == "object") switch (t.$$typeof) {
        case Sy:
            return (t.displayName || "Context") + ".Consumer";
        case Ny:
            return (t._context.displayName || "Context") + ".Provider";
        case vp:
            var e = t.render;
            return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case xp:
            return e = t.displayName || null, e !== null ? e : Dd(t.type) || "Memo";
        case $r:
            e = t._payload, t = t._init;
            try {
                return Dd(t(e))
            } catch { }
    }
    return null
}

function hx(t) {
    var e = t.type;
    switch (t.tag) {
        case 24:
            return "Cache";
        case 9:
            return (e.displayName || "Context") + ".Consumer";
        case 10:
            return (e._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return t = e.render, t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return e;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Dd(e);
        case 8:
            return e === Ap ? "StrictMode" : "Mode";
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
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof e == "function") return e.displayName || e.name || null;
            if (typeof e == "string") return e
    }
    return null
}

function Bi(t) {
    switch (typeof t) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
    }
}

function Py(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}

function px(t) {
    var e = Py(t) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
        r = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            s = n.set;
        return Object.defineProperty(t, e, {
            configurable: !0,
            get: function () {
                return i.call(this)
            },
            set: function (o) {
                r = "" + o, s.call(this, o)
            }
        }), Object.defineProperty(t, e, {
            enumerable: n.enumerable
        }), {
            getValue: function () {
                return r
            },
            setValue: function (o) {
                r = "" + o
            },
            stopTracking: function () {
                t._valueTracker = null, delete t[e]
            }
        }
    }
}

function mu(t) {
    t._valueTracker || (t._valueTracker = px(t))
}

function By(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
        r = "";
    return t && (r = Py(t) ? t.checked ? "true" : "false" : t.value), t = r, t !== n ? (e.setValue(t), !0) : !1
}

function hc(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
        return t.activeElement || t.body
    } catch {
        return t.body
    }
}

function Md(t, e) {
    var n = e.checked;
    return Te({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n & t._wrapperState.initialChecked
    })
}

function zg(t, e) {
    var n = e.defaultValue == null ? "" : e.defaultValue,
        r = e.checked != null ? e.checked : e.defaultChecked;
    n = Bi(e.value != null ? e.value : n), t._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
    }
}

function Iy(t, e) {
    e = e.checked, e != null && wp(t, "checked", e, !1)
}

function _d(t, e) {
    Iy(t, e);
    var n = Bi(e.value),
        r = e.type;
    if (n != null) r === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
    else if (r === "submit" || r === "reset") {
        t.removeAttribute("value");
        return
    }
    e.hasOwnProperty("value") ? zd(t, e.type, n) : e.hasOwnProperty("defaultValue") && zd(t, e.type, Bi(e.defaultValue)), e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked)
}

function Gg(t, e, n) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var r = e.type;
        if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null)) return;
        e = "" + t._wrapperState.initialValue, n || e === t.value || (t.value = e), t.defaultValue = e
    }
    n = t.name, n !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, n !== "" && (t.name = n)
}

function zd(t, e, n) {
    (e !== "number" || hc(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
}
var Kl = Array.isArray;

function go(t, e, n, r) {
    if (t = t.options, e) {
        e = {};
        for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
        for (n = 0; n < t.length; n++) i = e.hasOwnProperty("$" + t[n].value), t[n].selected !== i && (t[n].selected = i), i && r && (t[n].defaultSelected = !0)
    } else {
        for (n = "" + Bi(n), e = null, i = 0; i < t.length; i++) {
            if (t[i].value === n) {
                t[i].selected = !0, r && (t[i].defaultSelected = !0);
                return
            }
            e !== null || t[i].disabled || (e = t[i])
        }
        e !== null && (e.selected = !0)
    }
}

function Gd(t, e) {
    if (e.dangerouslySetInnerHTML != null) throw Error(z(91));
    return Te({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue
    })
}

function Hg(t, e) {
    var n = e.value;
    if (n == null) {
        if (n = e.children, e = e.defaultValue, n != null) {
            if (e != null) throw Error(z(92));
            if (Kl(n)) {
                if (1 < n.length) throw Error(z(93));
                n = n[0]
            }
            e = n
        }
        e == null && (e = ""), n = e
    }
    t._wrapperState = {
        initialValue: Bi(n)
    }
}

function Ry(t, e) {
    var n = Bi(e.value),
        r = Bi(e.defaultValue);
    n != null && (n = "" + n, n !== t.value && (t.value = n), e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)), r != null && (t.defaultValue = "" + r)
}

function Qg(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e)
}

function Ty(t) {
    switch (t) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Hd(t, e) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? Ty(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
}
var yu, Oy = function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (e, n, r, i) {
        MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, i)
        })
    } : t
}(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = e;
    else {
        for (yu = yu || document.createElement("div"), yu.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = yu.firstChild; t.firstChild;) t.removeChild(t.firstChild);
        for (; e.firstChild;) t.appendChild(e.firstChild)
    }
});

function pa(t, e) {
    if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return
        }
    }
    t.textContent = e
}
var na = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
},
    gx = ["Webkit", "ms", "Moz", "O"];
Object.keys(na).forEach(function (t) {
    gx.forEach(function (e) {
        e = e + t.charAt(0).toUpperCase() + t.substring(1), na[e] = na[t]
    })
});

function Fy(t, e, n) {
    return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || na.hasOwnProperty(t) && na[t] ? ("" + e).trim() : e + "px"
}

function Uy(t, e) {
    t = t.style;
    for (var n in e)
        if (e.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = Fy(n, e[n], r);
            n === "float" && (n = "cssFloat"), r ? t.setProperty(n, i) : t[n] = i
        }
}
var mx = Te({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Qd(t, e) {
    if (e) {
        if (mx[t] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(z(137, t));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null) throw Error(z(60));
            if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML)) throw Error(z(61))
        }
        if (e.style != null && typeof e.style != "object") throw Error(z(62))
    }
}

function jd(t, e) {
    if (t.indexOf("-") === -1) return typeof e.is == "string";
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
            return !0
    }
}
var Vd = null;

function Ep(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
}
var Jd = null,
    mo = null,
    yo = null;

function jg(t) {
    if (t = tu(t)) {
        if (typeof Jd != "function") throw Error(z(280));
        var e = t.stateNode;
        e && (e = cf(e), Jd(t.stateNode, t.type, e))
    }
}

function Ly(t) {
    mo ? yo ? yo.push(t) : yo = [t] : mo = t
}

function Dy() {
    if (mo) {
        var t = mo,
            e = yo;
        if (yo = mo = null, jg(t), e)
            for (t = 0; t < e.length; t++) jg(e[t])
    }
}

function My(t, e) {
    return t(e)
}

function _y() { }
var jf = !1;

function zy(t, e, n) {
    if (jf) return t(e, n);
    jf = !0;
    try {
        return My(t, e, n)
    } finally {
        jf = !1, (mo !== null || yo !== null) && (_y(), Dy())
    }
}

function ga(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var r = cf(n);
    if (r === null) return null;
    n = r[e];
    e: switch (e) {
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
            (r = !r.disabled) || (t = t.type, r = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !r;
            break e;
        default:
            t = !1
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(z(231, e, typeof n));
    return n
}
var Kd = !1;
if (Or) try {
    var Fl = {};
    Object.defineProperty(Fl, "passive", {
        get: function () {
            Kd = !0
        }
    }), window.addEventListener("test", Fl, Fl), window.removeEventListener("test", Fl, Fl)
} catch {
    Kd = !1
}

function yx(t, e, n, r, i, s, o, l, a) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(n, c)
    } catch (d) {
        this.onError(d)
    }
}
var ra = !1,
    pc = null,
    gc = !1,
    Wd = null,
    wx = {
        onError: function (t) {
            ra = !0, pc = t
        }
    };

function Ax(t, e, n, r, i, s, o, l, a) {
    ra = !1, pc = null, yx.apply(wx, arguments)
}

function vx(t, e, n, r, i, s, o, l, a) {
    if (Ax.apply(this, arguments), ra) {
        if (ra) {
            var c = pc;
            ra = !1, pc = null
        } else throw Error(z(198));
        gc || (gc = !0, Wd = c)
    }
}

function _s(t) {
    var e = t,
        n = t;
    if (t.alternate)
        for (; e.return;) e = e.return;
    else {
        t = e;
        do e = t, e.flags & 4098 && (n = e.return), t = e.return; while (t)
    }
    return e.tag === 3 ? n : null
}

function Gy(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated
    }
    return null
}

function Vg(t) {
    if (_s(t) !== t) throw Error(z(188))
}

function xx(t) {
    var e = t.alternate;
    if (!e) {
        if (e = _s(t), e === null) throw Error(z(188));
        return e !== t ? null : t
    }
    for (var n = t, r = e; ;) {
        var i = n.return;
        if (i === null) break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s;) {
                if (s === n) return Vg(i), t;
                if (s === r) return Vg(i), e;
                s = s.sibling
            }
            throw Error(z(188))
        }
        if (n.return !== r.return) n = i, r = s;
        else {
            for (var o = !1, l = i.child; l;) {
                if (l === n) {
                    o = !0, n = i, r = s;
                    break
                }
                if (l === r) {
                    o = !0, r = i, n = s;
                    break
                }
                l = l.sibling
            }
            if (!o) {
                for (l = s.child; l;) {
                    if (l === n) {
                        o = !0, n = s, r = i;
                        break
                    }
                    if (l === r) {
                        o = !0, r = s, n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!o) throw Error(z(189))
            }
        }
        if (n.alternate !== r) throw Error(z(190))
    }
    if (n.tag !== 3) throw Error(z(188));
    return n.stateNode.current === n ? t : e
}

function Hy(t) {
    return t = xx(t), t !== null ? Qy(t) : null
}

function Qy(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null;) {
        var e = Qy(t);
        if (e !== null) return e;
        t = t.sibling
    }
    return null
}
var jy = Zt.unstable_scheduleCallback,
    Jg = Zt.unstable_cancelCallback,
    Ex = Zt.unstable_shouldYield,
    bx = Zt.unstable_requestPaint,
    ze = Zt.unstable_now,
    kx = Zt.unstable_getCurrentPriorityLevel,
    bp = Zt.unstable_ImmediatePriority,
    Vy = Zt.unstable_UserBlockingPriority,
    mc = Zt.unstable_NormalPriority,
    Nx = Zt.unstable_LowPriority,
    Jy = Zt.unstable_IdlePriority,
    of = null,
    tr = null;

function Sx(t) {
    if (tr && typeof tr.onCommitFiberRoot == "function") try {
        tr.onCommitFiberRoot(of, t, void 0, (t.current.flags & 128) === 128)
    } catch { }
}
var Rn = Math.clz32 ? Math.clz32 : Bx,
    Cx = Math.log,
    Px = Math.LN2;

function Bx(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Cx(t) / Px | 0) | 0
}
var wu = 64,
    Au = 4194304;

function Wl(t) {
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
            return t & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return t & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return t
    }
}

function yc(t, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = t.suspendedLanes,
        s = t.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var l = o & ~i;
        l !== 0 ? r = Wl(l) : (s &= o, s !== 0 && (r = Wl(s)))
    } else o = n & ~i, o !== 0 ? r = Wl(o) : s !== 0 && (r = Wl(s));
    if (r === 0) return 0;
    if (e !== 0 && e !== r && !(e & i) && (i = r & -r, s = e & -e, i >= s || i === 16 && (s & 4194240) !== 0)) return e;
    if (r & 4 && (r |= n & 16), e = t.entangledLanes, e !== 0)
        for (t = t.entanglements, e &= r; 0 < e;) n = 31 - Rn(e), i = 1 << n, r |= t[n], e &= ~i;
    return r
}

function Ix(t, e) {
    switch (t) {
        case 1:
        case 2:
        case 4:
            return e + 250;
        case 8:
        case 16:
        case 32:
        case 64:
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
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Rx(t, e) {
    for (var n = t.suspendedLanes, r = t.pingedLanes, i = t.expirationTimes, s = t.pendingLanes; 0 < s;) {
        var o = 31 - Rn(s),
            l = 1 << o,
            a = i[o];
        a === -1 ? (!(l & n) || l & r) && (i[o] = Ix(l, e)) : a <= e && (t.expiredLanes |= l), s &= ~l
    }
}

function Yd(t) {
    return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
}

function Ky() {
    var t = wu;
    return wu <<= 1, !(wu & 4194240) && (wu = 64), t
}

function Vf(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e
}

function qa(t, e, n) {
    t.pendingLanes |= e, e !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, e = 31 - Rn(e), t[e] = n
}

function Tx(t, e) {
    var n = t.pendingLanes & ~e;
    t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= e, t.mutableReadLanes &= e, t.entangledLanes &= e, e = t.entanglements;
    var r = t.eventTimes;
    for (t = t.expirationTimes; 0 < n;) {
        var i = 31 - Rn(n),
            s = 1 << i;
        e[i] = 0, r[i] = -1, t[i] = -1, n &= ~s
    }
}

function kp(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n;) {
        var r = 31 - Rn(n),
            i = 1 << r;
        i & e | t[r] & e && (t[r] |= e), n &= ~i
    }
}
var me = 0;

function Wy(t) {
    return t &= -t, 1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1
}
var Yy, Np, $y, Zy, Xy, $d = !1,
    vu = [],
    vi = null,
    xi = null,
    Ei = null,
    ma = new Map,
    ya = new Map,
    qr = [],
    Ox = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Kg(t, e) {
    switch (t) {
        case "focusin":
        case "focusout":
            vi = null;
            break;
        case "dragenter":
        case "dragleave":
            xi = null;
            break;
        case "mouseover":
        case "mouseout":
            Ei = null;
            break;
        case "pointerover":
        case "pointerout":
            ma.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            ya.delete(e.pointerId)
    }
}

function Ul(t, e, n, r, i, s) {
    return t === null || t.nativeEvent !== s ? (t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    }, e !== null && (e = tu(e), e !== null && Np(e)), t) : (t.eventSystemFlags |= r, e = t.targetContainers, i !== null && e.indexOf(i) === -1 && e.push(i), t)
}

function Fx(t, e, n, r, i) {
    switch (e) {
        case "focusin":
            return vi = Ul(vi, t, e, n, r, i), !0;
        case "dragenter":
            return xi = Ul(xi, t, e, n, r, i), !0;
        case "mouseover":
            return Ei = Ul(Ei, t, e, n, r, i), !0;
        case "pointerover":
            var s = i.pointerId;
            return ma.set(s, Ul(ma.get(s) || null, t, e, n, r, i)), !0;
        case "gotpointercapture":
            return s = i.pointerId, ya.set(s, Ul(ya.get(s) || null, t, e, n, r, i)), !0
    }
    return !1
}

function qy(t) {
    var e = Yi(t.target);
    if (e !== null) {
        var n = _s(e);
        if (n !== null) {
            if (e = n.tag, e === 13) {
                if (e = Gy(n), e !== null) {
                    t.blockedOn = e, Xy(t.priority, function () {
                        $y(n)
                    });
                    return
                }
            } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    t.blockedOn = null
}

function Vu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length;) {
        var n = Zd(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (n === null) {
            n = t.nativeEvent;
            var r = new n.constructor(n.type, n);
            Vd = r, n.target.dispatchEvent(r), Vd = null
        } else return e = tu(n), e !== null && Np(e), t.blockedOn = n, !1;
        e.shift()
    }
    return !0
}

function Wg(t, e, n) {
    Vu(t) && n.delete(e)
}

function Ux() {
    $d = !1, vi !== null && Vu(vi) && (vi = null), xi !== null && Vu(xi) && (xi = null), Ei !== null && Vu(Ei) && (Ei = null), ma.forEach(Wg), ya.forEach(Wg)
}

function Ll(t, e) {
    t.blockedOn === e && (t.blockedOn = null, $d || ($d = !0, Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority, Ux)))
}

function wa(t) {
    function e(i) {
        return Ll(i, t)
    }
    if (0 < vu.length) {
        Ll(vu[0], t);
        for (var n = 1; n < vu.length; n++) {
            var r = vu[n];
            r.blockedOn === t && (r.blockedOn = null)
        }
    }
    for (vi !== null && Ll(vi, t), xi !== null && Ll(xi, t), Ei !== null && Ll(Ei, t), ma.forEach(e), ya.forEach(e), n = 0; n < qr.length; n++) r = qr[n], r.blockedOn === t && (r.blockedOn = null);
    for (; 0 < qr.length && (n = qr[0], n.blockedOn === null);) qy(n), n.blockedOn === null && qr.shift()
}
var wo = _r.ReactCurrentBatchConfig,
    wc = !0;

function Lx(t, e, n, r) {
    var i = me,
        s = wo.transition;
    wo.transition = null;
    try {
        me = 1, Sp(t, e, n, r)
    } finally {
        me = i, wo.transition = s
    }
}

function Dx(t, e, n, r) {
    var i = me,
        s = wo.transition;
    wo.transition = null;
    try {
        me = 4, Sp(t, e, n, r)
    } finally {
        me = i, wo.transition = s
    }
}

function Sp(t, e, n, r) {
    if (wc) {
        var i = Zd(t, e, n, r);
        if (i === null) td(t, e, r, Ac, n), Kg(t, r);
        else if (Fx(i, t, e, n, r)) r.stopPropagation();
        else if (Kg(t, r), e & 4 && -1 < Ox.indexOf(t)) {
            for (; i !== null;) {
                var s = tu(i);
                if (s !== null && Yy(s), s = Zd(t, e, n, r), s === null && td(t, e, r, Ac, n), s === i) break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else td(t, e, r, null, n)
    }
}
var Ac = null;

function Zd(t, e, n, r) {
    if (Ac = null, t = Ep(r), t = Yi(t), t !== null)
        if (e = _s(t), e === null) t = null;
        else if (n = e.tag, n === 13) {
            if (t = Gy(e), t !== null) return t;
            t = null
        } else if (n === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null
        } else e !== t && (t = null);
    return Ac = t, null
}

function ew(t) {
    switch (t) {
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
            return 1;
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
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (kx()) {
                case bp:
                    return 1;
                case Vy:
                    return 4;
                case mc:
                case Nx:
                    return 16;
                case Jy:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var wi = null,
    Cp = null,
    Ju = null;

function tw() {
    if (Ju) return Ju;
    var t, e = Cp,
        n = e.length,
        r, i = "value" in wi ? wi.value : wi.textContent,
        s = i.length;
    for (t = 0; t < n && e[t] === i[t]; t++);
    var o = n - t;
    for (r = 1; r <= o && e[n - r] === i[s - r]; r++);
    return Ju = i.slice(t, 1 < r ? 1 - r : void 0)
}

function Ku(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
}

function xu() {
    return !0
}

function Yg() {
    return !1
}

function qt(t) {
    function e(n, r, i, s, o) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = o, this.currentTarget = null;
        for (var l in t) t.hasOwnProperty(l) && (n = t[l], this[l] = n ? n(s) : s[l]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? xu : Yg, this.isPropagationStopped = Yg, this
    }
    return Te(e.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = xu)
        },
        stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = xu)
        },
        persist: function () { },
        isPersistent: xu
    }), e
}
var Pl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
        return t.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
},
    Pp = qt(Pl),
    eu = Te({}, Pl, {
        view: 0,
        detail: 0
    }),
    Mx = qt(eu),
    Jf, Kf, Dl, lf = Te({}, eu, {
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
        getModifierState: Bp,
        button: 0,
        buttons: 0,
        relatedTarget: function (t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function (t) {
            return "movementX" in t ? t.movementX : (t !== Dl && (Dl && t.type === "mousemove" ? (Jf = t.screenX - Dl.screenX, Kf = t.screenY - Dl.screenY) : Kf = Jf = 0, Dl = t), Jf)
        },
        movementY: function (t) {
            return "movementY" in t ? t.movementY : Kf
        }
    }),
    $g = qt(lf),
    _x = Te({}, lf, {
        dataTransfer: 0
    }),
    zx = qt(_x),
    Gx = Te({}, eu, {
        relatedTarget: 0
    }),
    Wf = qt(Gx),
    Hx = Te({}, Pl, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Qx = qt(Hx),
    jx = Te({}, Pl, {
        clipboardData: function (t) {
            return "clipboardData" in t ? t.clipboardData : window.clipboardData
        }
    }),
    Vx = qt(jx),
    Jx = Te({}, Pl, {
        data: 0
    }),
    Zg = qt(Jx),
    Kx = {
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
    },
    Wx = {
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
    },
    Yx = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function $x(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Yx[t]) ? !!e[t] : !1
}

function Bp() {
    return $x
}
var Zx = Te({}, eu, {
    key: function (t) {
        if (t.key) {
            var e = Kx[t.key] || t.key;
            if (e !== "Unidentified") return e
        }
        return t.type === "keypress" ? (t = Ku(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Wx[t.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Bp,
    charCode: function (t) {
        return t.type === "keypress" ? Ku(t) : 0
    },
    keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    },
    which: function (t) {
        return t.type === "keypress" ? Ku(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    }
}),
    Xx = qt(Zx),
    qx = Te({}, lf, {
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
    }),
    Xg = qt(qx),
    eE = Te({}, eu, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Bp
    }),
    tE = qt(eE),
    nE = Te({}, Pl, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    rE = qt(nE),
    iE = Te({}, lf, {
        deltaX: function (t) {
            return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
        },
        deltaY: function (t) {
            return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    sE = qt(iE),
    oE = [9, 13, 27, 32],
    Ip = Or && "CompositionEvent" in window,
    ia = null;
Or && "documentMode" in document && (ia = document.documentMode);
var lE = Or && "TextEvent" in window && !ia,
    nw = Or && (!Ip || ia && 8 < ia && 11 >= ia),
    qg = " ",
    e0 = !1;

function rw(t, e) {
    switch (t) {
        case "keyup":
            return oE.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function iw(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null
}
var Xs = !1;

function aE(t, e) {
    switch (t) {
        case "compositionend":
            return iw(e);
        case "keypress":
            return e.which !== 32 ? null : (e0 = !0, qg);
        case "textInput":
            return t = e.data, t === qg && e0 ? null : t;
        default:
            return null
    }
}

function uE(t, e) {
    if (Xs) return t === "compositionend" || !Ip && rw(t, e) ? (t = tw(), Ju = Cp = wi = null, Xs = !1, t) : null;
    switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length) return e.char;
                if (e.which) return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return nw && e.locale !== "ko" ? null : e.data;
        default:
            return null
    }
}
var cE = {
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

function t0(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!cE[t.type] : e === "textarea"
}

function sw(t, e, n, r) {
    Ly(r), e = vc(e, "onChange"), 0 < e.length && (n = new Pp("onChange", "change", null, n, r), t.push({
        event: n,
        listeners: e
    }))
}
var sa = null,
    Aa = null;

function fE(t) {
    mw(t, 0)
}

function af(t) {
    var e = to(t);
    if (By(e)) return t
}

function dE(t, e) {
    if (t === "change") return e
}
var ow = !1;
if (Or) {
    var Yf;
    if (Or) {
        var $f = "oninput" in document;
        if (!$f) {
            var n0 = document.createElement("div");
            n0.setAttribute("oninput", "return;"), $f = typeof n0.oninput == "function"
        }
        Yf = $f
    } else Yf = !1;
    ow = Yf && (!document.documentMode || 9 < document.documentMode)
}

function r0() {
    sa && (sa.detachEvent("onpropertychange", lw), Aa = sa = null)
}

function lw(t) {
    if (t.propertyName === "value" && af(Aa)) {
        var e = [];
        sw(e, Aa, t, Ep(t)), zy(fE, e)
    }
}

function hE(t, e, n) {
    t === "focusin" ? (r0(), sa = e, Aa = n, sa.attachEvent("onpropertychange", lw)) : t === "focusout" && r0()
}

function pE(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return af(Aa)
}

function gE(t, e) {
    if (t === "click") return af(e)
}

function mE(t, e) {
    if (t === "input" || t === "change") return af(e)
}

function yE(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var On = typeof Object.is == "function" ? Object.is : yE;

function va(t, e) {
    if (On(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
    var n = Object.keys(t),
        r = Object.keys(e);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Od.call(e, i) || !On(t[i], e[i])) return !1
    }
    return !0
}

function i0(t) {
    for (; t && t.firstChild;) t = t.firstChild;
    return t
}

function s0(t, e) {
    var n = i0(t);
    t = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = t + n.textContent.length, t <= e && r >= e) return {
                node: n,
                offset: e - t
            };
            t = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = i0(n)
    }
}

function aw(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? aw(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
}

function uw() {
    for (var t = window, e = hc(); e instanceof t.HTMLIFrameElement;) {
        try {
            var n = typeof e.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) t = e.contentWindow;
        else break;
        e = hc(t.document)
    }
    return e
}

function Rp(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
}

function wE(t) {
    var e = uw(),
        n = t.focusedElem,
        r = t.selectionRange;
    if (e !== n && n && n.ownerDocument && aw(n.ownerDocument.documentElement, n)) {
        if (r !== null && Rp(n)) {
            if (e = r.start, t = r.end, t === void 0 && (t = e), "selectionStart" in n) n.selectionStart = e, n.selectionEnd = Math.min(t, n.value.length);
            else if (t = (e = n.ownerDocument || document) && e.defaultView || window, t.getSelection) {
                t = t.getSelection();
                var i = n.textContent.length,
                    s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i), !t.extend && s > r && (i = r, r = s, s = i), i = s0(n, s);
                var o = s0(n, r);
                i && o && (t.rangeCount !== 1 || t.anchorNode !== i.node || t.anchorOffset !== i.offset || t.focusNode !== o.node || t.focusOffset !== o.offset) && (e = e.createRange(), e.setStart(i.node, i.offset), t.removeAllRanges(), s > r ? (t.addRange(e), t.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset), t.addRange(e)))
            }
        }
        for (e = [], t = n; t = t.parentNode;) t.nodeType === 1 && e.push({
            element: t,
            left: t.scrollLeft,
            top: t.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++) t = e[n], t.element.scrollLeft = t.left, t.element.scrollTop = t.top
    }
}
var AE = Or && "documentMode" in document && 11 >= document.documentMode,
    qs = null,
    Xd = null,
    oa = null,
    qd = !1;

function o0(t, e, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    qd || qs == null || qs !== hc(r) || (r = qs, "selectionStart" in r && Rp(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), oa && va(oa, r) || (oa = r, r = vc(Xd, "onSelect"), 0 < r.length && (e = new Pp("onSelect", "select", null, e, n), t.push({
        event: e,
        listeners: r
    }), e.target = qs)))
}

function Eu(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n
}
var eo = {
    animationend: Eu("Animation", "AnimationEnd"),
    animationiteration: Eu("Animation", "AnimationIteration"),
    animationstart: Eu("Animation", "AnimationStart"),
    transitionend: Eu("Transition", "TransitionEnd")
},
    Zf = {},
    cw = {};
Or && (cw = document.createElement("div").style, "AnimationEvent" in window || (delete eo.animationend.animation, delete eo.animationiteration.animation, delete eo.animationstart.animation), "TransitionEvent" in window || delete eo.transitionend.transition);

function uf(t) {
    if (Zf[t]) return Zf[t];
    if (!eo[t]) return t;
    var e = eo[t],
        n;
    for (n in e)
        if (e.hasOwnProperty(n) && n in cw) return Zf[t] = e[n];
    return t
}
var fw = uf("animationend"),
    dw = uf("animationiteration"),
    hw = uf("animationstart"),
    pw = uf("transitionend"),
    gw = new Map,
    l0 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Oi(t, e) {
    gw.set(t, e), Ms(e, [t])
}
for (var Xf = 0; Xf < l0.length; Xf++) {
    var qf = l0[Xf],
        vE = qf.toLowerCase(),
        xE = qf[0].toUpperCase() + qf.slice(1);
    Oi(vE, "on" + xE)
}
Oi(fw, "onAnimationEnd");
Oi(dw, "onAnimationIteration");
Oi(hw, "onAnimationStart");
Oi("dblclick", "onDoubleClick");
Oi("focusin", "onFocus");
Oi("focusout", "onBlur");
Oi(pw, "onTransitionEnd");
dl("onMouseEnter", ["mouseout", "mouseover"]);
dl("onMouseLeave", ["mouseout", "mouseover"]);
dl("onPointerEnter", ["pointerout", "pointerover"]);
dl("onPointerLeave", ["pointerout", "pointerover"]);
Ms("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ms("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ms("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ms("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ms("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ms("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Yl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    EE = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yl));

function a0(t, e, n) {
    var r = t.type || "unknown-event";
    t.currentTarget = n, vx(r, e, void 0, t), t.currentTarget = null
}

function mw(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
        var r = t[n],
            i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (e)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var l = r[o],
                        a = l.instance,
                        c = l.currentTarget;
                    if (l = l.listener, a !== s && i.isPropagationStopped()) break e;
                    a0(i, l, c), s = a
                } else
                for (o = 0; o < r.length; o++) {
                    if (l = r[o], a = l.instance, c = l.currentTarget, l = l.listener, a !== s && i.isPropagationStopped()) break e;
                    a0(i, l, c), s = a
                }
        }
    }
    if (gc) throw t = Wd, gc = !1, Wd = null, t
}

function ke(t, e) {
    var n = e[ih];
    n === void 0 && (n = e[ih] = new Set);
    var r = t + "__bubble";
    n.has(r) || (yw(e, t, 2, !1), n.add(r))
}

function ed(t, e, n) {
    var r = 0;
    e && (r |= 4), yw(n, t, r, e)
}
var bu = "_reactListening" + Math.random().toString(36).slice(2);

function xa(t) {
    if (!t[bu]) {
        t[bu] = !0, ky.forEach(function (n) {
            n !== "selectionchange" && (EE.has(n) || ed(n, !1, t), ed(n, !0, t))
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[bu] || (e[bu] = !0, ed("selectionchange", !1, e))
    }
}

function yw(t, e, n, r) {
    switch (ew(e)) {
        case 1:
            var i = Lx;
            break;
        case 4:
            i = Dx;
            break;
        default:
            i = Sp
    }
    n = i.bind(null, e, n, t), i = void 0, !Kd || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = !0), r ? i !== void 0 ? t.addEventListener(e, n, {
        capture: !0,
        passive: i
    }) : t.addEventListener(e, n, !0) : i !== void 0 ? t.addEventListener(e, n, {
        passive: i
    }) : t.addEventListener(e, n, !1)
}

function td(t, e, n, r, i) {
    var s = r;
    if (!(e & 1) && !(e & 2) && r !== null) e: for (; ;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
            var l = r.stateNode.containerInfo;
            if (l === i || l.nodeType === 8 && l.parentNode === i) break;
            if (o === 4)
                for (o = r.return; o !== null;) {
                    var a = o.tag;
                    if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
                    o = o.return
                }
            for (; l !== null;) {
                if (o = Yi(l), o === null) return;
                if (a = o.tag, a === 5 || a === 6) {
                    r = s = o;
                    continue e
                }
                l = l.parentNode
            }
        }
        r = r.return
    }
    zy(function () {
        var c = s,
            d = Ep(n),
            h = [];
        e: {
            var m = gw.get(t);
            if (m !== void 0) {
                var A = Pp,
                    k = t;
                switch (t) {
                    case "keypress":
                        if (Ku(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        A = Xx;
                        break;
                    case "focusin":
                        k = "focus", A = Wf;
                        break;
                    case "focusout":
                        k = "blur", A = Wf;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        A = Wf;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        A = $g;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        A = zx;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        A = tE;
                        break;
                    case fw:
                    case dw:
                    case hw:
                        A = Qx;
                        break;
                    case pw:
                        A = rE;
                        break;
                    case "scroll":
                        A = Mx;
                        break;
                    case "wheel":
                        A = sE;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        A = Vx;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        A = Xg
                }
                var x = (e & 4) !== 0,
                    C = !x && t === "scroll",
                    y = x ? m !== null ? m + "Capture" : null : m;
                x = [];
                for (var w = c, E; w !== null;) {
                    E = w;
                    var B = E.stateNode;
                    if (E.tag === 5 && B !== null && (E = B, y !== null && (B = ga(w, y), B != null && x.push(Ea(w, B, E)))), C) break;
                    w = w.return
                }
                0 < x.length && (m = new A(m, k, null, n, d), h.push({
                    event: m,
                    listeners: x
                }))
            }
        }
        if (!(e & 7)) {
            e: {
                if (m = t === "mouseover" || t === "pointerover", A = t === "mouseout" || t === "pointerout", m && n !== Vd && (k = n.relatedTarget || n.fromElement) && (Yi(k) || k[Fr])) break e;
                if ((A || m) && (m = d.window === d ? d : (m = d.ownerDocument) ? m.defaultView || m.parentWindow : window, A ? (k = n.relatedTarget || n.toElement, A = c, k = k ? Yi(k) : null, k !== null && (C = _s(k), k !== C || k.tag !== 5 && k.tag !== 6) && (k = null)) : (A = null, k = c), A !== k)) {
                    if (x = $g, B = "onMouseLeave", y = "onMouseEnter", w = "mouse", (t === "pointerout" || t === "pointerover") && (x = Xg, B = "onPointerLeave", y = "onPointerEnter", w = "pointer"), C = A == null ? m : to(A), E = k == null ? m : to(k), m = new x(B, w + "leave", A, n, d), m.target = C, m.relatedTarget = E, B = null, Yi(d) === c && (x = new x(y, w + "enter", k, n, d), x.target = E, x.relatedTarget = C, B = x), C = B, A && k) t: {
                        for (x = A, y = k, w = 0, E = x; E; E = Hs(E)) w++;
                        for (E = 0, B = y; B; B = Hs(B)) E++;
                        for (; 0 < w - E;) x = Hs(x),
                            w--;
                        for (; 0 < E - w;) y = Hs(y),
                            E--;
                        for (; w--;) {
                            if (x === y || y !== null && x === y.alternate) break t;
                            x = Hs(x), y = Hs(y)
                        }
                        x = null
                    }
                    else x = null;
                    A !== null && u0(h, m, A, x, !1), k !== null && C !== null && u0(h, C, k, x, !0)
                }
            }
            e: {
                if (m = c ? to(c) : window, A = m.nodeName && m.nodeName.toLowerCase(), A === "select" || A === "input" && m.type === "file") var T = dE;
                else if (t0(m))
                    if (ow) T = mE;
                    else {
                        T = pE;
                        var O = hE
                    }
                else (A = m.nodeName) && A.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (T = gE);
                if (T && (T = T(t, c))) {
                    sw(h, T, n, d);
                    break e
                }
                O && O(t, m, c),
                    t === "focusout" && (O = m._wrapperState) && O.controlled && m.type === "number" && zd(m, "number", m.value)
            }
            switch (O = c ? to(c) : window, t) {
                case "focusin":
                    (t0(O) || O.contentEditable === "true") && (qs = O, Xd = c, oa = null);
                    break;
                case "focusout":
                    oa = Xd = qs = null;
                    break;
                case "mousedown":
                    qd = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    qd = !1, o0(h, n, d);
                    break;
                case "selectionchange":
                    if (AE) break;
                case "keydown":
                case "keyup":
                    o0(h, n, d)
            }
            var U;
            if (Ip) e: {
                switch (t) {
                    case "compositionstart":
                        var F = "onCompositionStart";
                        break e;
                    case "compositionend":
                        F = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        F = "onCompositionUpdate";
                        break e
                }
                F = void 0
            }
            else Xs ? rw(t, n) && (F = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (F = "onCompositionStart"); F && (nw && n.locale !== "ko" && (Xs || F !== "onCompositionStart" ? F === "onCompositionEnd" && Xs && (U = tw()) : (wi = d, Cp = "value" in wi ? wi.value : wi.textContent, Xs = !0)), O = vc(c, F), 0 < O.length && (F = new Zg(F, t, null, n, d), h.push({
                event: F,
                listeners: O
            }), U ? F.data = U : (U = iw(n), U !== null && (F.data = U)))),
                (U = lE ? aE(t, n) : uE(t, n)) && (c = vc(c, "onBeforeInput"), 0 < c.length && (d = new Zg("onBeforeInput", "beforeinput", null, n, d), h.push({
                    event: d,
                    listeners: c
                }), d.data = U))
        }
        mw(h, e)
    })
}

function Ea(t, e, n) {
    return {
        instance: t,
        listener: e,
        currentTarget: n
    }
}

function vc(t, e) {
    for (var n = e + "Capture", r = []; t !== null;) {
        var i = t,
            s = i.stateNode;
        i.tag === 5 && s !== null && (i = s, s = ga(t, n), s != null && r.unshift(Ea(t, s, i)), s = ga(t, e), s != null && r.push(Ea(t, s, i))), t = t.return
    }
    return r
}

function Hs(t) {
    if (t === null) return null;
    do t = t.return; while (t && t.tag !== 5);
    return t || null
}

function u0(t, e, n, r, i) {
    for (var s = e._reactName, o = []; n !== null && n !== r;) {
        var l = n,
            a = l.alternate,
            c = l.stateNode;
        if (a !== null && a === r) break;
        l.tag === 5 && c !== null && (l = c, i ? (a = ga(n, s), a != null && o.unshift(Ea(n, a, l))) : i || (a = ga(n, s), a != null && o.push(Ea(n, a, l)))), n = n.return
    }
    o.length !== 0 && t.push({
        event: e,
        listeners: o
    })
}
var bE = /\r\n?/g,
    kE = /\u0000|\uFFFD/g;

function c0(t) {
    return (typeof t == "string" ? t : "" + t).replace(bE, `
`).replace(kE, "")
}

function ku(t, e, n) {
    if (e = c0(e), c0(t) !== e && n) throw Error(z(425))
}

function xc() { }
var eh = null,
    th = null;

function nh(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var rh = typeof setTimeout == "function" ? setTimeout : void 0,
    NE = typeof clearTimeout == "function" ? clearTimeout : void 0,
    f0 = typeof Promise == "function" ? Promise : void 0,
    SE = typeof queueMicrotask == "function" ? queueMicrotask : typeof f0 < "u" ? function (t) {
        return f0.resolve(null).then(t).catch(CE)
    } : rh;

function CE(t) {
    setTimeout(function () {
        throw t
    })
}

function nd(t, e) {
    var n = e,
        r = 0;
    do {
        var i = n.nextSibling;
        if (t.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    t.removeChild(i), wa(e);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    wa(e)
}

function bi(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
            if (e = t.data, e === "$" || e === "$!" || e === "$?") break;
            if (e === "/$") return null
        }
    }
    return t
}

function d0(t) {
    t = t.previousSibling;
    for (var e = 0; t;) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (e === 0) return t;
                e--
            } else n === "/$" && e++
        }
        t = t.previousSibling
    }
    return null
}
var Bl = Math.random().toString(36).slice(2),
    Zn = "__reactFiber$" + Bl,
    ba = "__reactProps$" + Bl,
    Fr = "__reactContainer$" + Bl,
    ih = "__reactEvents$" + Bl,
    PE = "__reactListeners$" + Bl,
    BE = "__reactHandles$" + Bl;

function Yi(t) {
    var e = t[Zn];
    if (e) return e;
    for (var n = t.parentNode; n;) {
        if (e = n[Fr] || n[Zn]) {
            if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
                for (t = d0(t); t !== null;) {
                    if (n = t[Zn]) return n;
                    t = d0(t)
                }
            return e
        }
        t = n, n = t.parentNode
    }
    return null
}

function tu(t) {
    return t = t[Zn] || t[Fr], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
}

function to(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(z(33))
}

function cf(t) {
    return t[ba] || null
}
var sh = [],
    no = -1;

function Fi(t) {
    return {
        current: t
    }
}

function Se(t) {
    0 > no || (t.current = sh[no], sh[no] = null, no--)
}

function xe(t, e) {
    no++, sh[no] = t.current, t.current = e
}
var Ii = {},
    wt = Fi(Ii),
    Dt = Fi(!1),
    Ss = Ii;

function hl(t, e) {
    var n = t.type.contextTypes;
    if (!n) return Ii;
    var r = t.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        s;
    for (s in n) i[s] = e[s];
    return r && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = i), i
}

function Mt(t) {
    return t = t.childContextTypes, t != null
}

function Ec() {
    Se(Dt), Se(wt)
}

function h0(t, e, n) {
    if (wt.current !== Ii) throw Error(z(168));
    xe(wt, e), xe(Dt, n)
}

function ww(t, e, n) {
    var r = t.stateNode;
    if (e = e.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in e)) throw Error(z(108, hx(t) || "Unknown", i));
    return Te({}, n, r)
}

function bc(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || Ii, Ss = wt.current, xe(wt, t), xe(Dt, Dt.current), !0
}

function p0(t, e, n) {
    var r = t.stateNode;
    if (!r) throw Error(z(169));
    n ? (t = ww(t, e, Ss), r.__reactInternalMemoizedMergedChildContext = t, Se(Dt), Se(wt), xe(wt, t)) : Se(Dt), xe(Dt, n)
}
var dr = null,
    ff = !1,
    rd = !1;

function Aw(t) {
    dr === null ? dr = [t] : dr.push(t)
}

function IE(t) {
    ff = !0, Aw(t)
}

function Ui() {
    if (!rd && dr !== null) {
        rd = !0;
        var t = 0,
            e = me;
        try {
            var n = dr;
            for (me = 1; t < n.length; t++) {
                var r = n[t];
                do r = r(!0); while (r !== null)
            }
            dr = null, ff = !1
        } catch (i) {
            throw dr !== null && (dr = dr.slice(t + 1)), jy(bp, Ui), i
        } finally {
            me = e, rd = !1
        }
    }
    return null
}
var ro = [],
    io = 0,
    kc = null,
    Nc = 0,
    fn = [],
    dn = 0,
    Cs = null,
    Cr = 1,
    Pr = "";

function _i(t, e) {
    ro[io++] = Nc, ro[io++] = kc, kc = t, Nc = e
}

function vw(t, e, n) {
    fn[dn++] = Cr, fn[dn++] = Pr, fn[dn++] = Cs, Cs = t;
    var r = Cr;
    t = Pr;
    var i = 32 - Rn(r) - 1;
    r &= ~(1 << i), n += 1;
    var s = 32 - Rn(e) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Cr = 1 << 32 - Rn(e) + i | n << i | r, Pr = s + t
    } else Cr = 1 << s | n << i | r, Pr = t
}

function Tp(t) {
    t.return !== null && (_i(t, 1), vw(t, 1, 0))
}

function Op(t) {
    for (; t === kc;) kc = ro[--io], ro[io] = null, Nc = ro[--io], ro[io] = null;
    for (; t === Cs;) Cs = fn[--dn], fn[dn] = null, Pr = fn[--dn], fn[dn] = null, Cr = fn[--dn], fn[dn] = null
}
var $t = null,
    Yt = null,
    Pe = !1,
    Bn = null;

function xw(t, e) {
    var n = hn(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = e, n.return = t, e = t.deletions, e === null ? (t.deletions = [n], t.flags |= 16) : e.push(n)
}

function g0(t, e) {
    switch (t.tag) {
        case 5:
            var n = t.type;
            return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (t.stateNode = e, $t = t, Yt = bi(e.firstChild), !0) : !1;
        case 6:
            return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (t.stateNode = e, $t = t, Yt = null, !0) : !1;
        case 13:
            return e = e.nodeType !== 8 ? null : e, e !== null ? (n = Cs !== null ? {
                id: Cr,
                overflow: Pr
            } : null, t.memoizedState = {
                dehydrated: e,
                treeContext: n,
                retryLane: 1073741824
            }, n = hn(18, null, null, 0), n.stateNode = e, n.return = t, t.child = n, $t = t, Yt = null, !0) : !1;
        default:
            return !1
    }
}

function oh(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}

function lh(t) {
    if (Pe) {
        var e = Yt;
        if (e) {
            var n = e;
            if (!g0(t, e)) {
                if (oh(t)) throw Error(z(418));
                e = bi(n.nextSibling);
                var r = $t;
                e && g0(t, e) ? xw(r, n) : (t.flags = t.flags & -4097 | 2, Pe = !1, $t = t)
            }
        } else {
            if (oh(t)) throw Error(z(418));
            t.flags = t.flags & -4097 | 2, Pe = !1, $t = t
        }
    }
}

function m0(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;) t = t.return;
    $t = t
}

function Nu(t) {
    if (t !== $t) return !1;
    if (!Pe) return m0(t), Pe = !0, !1;
    var e;
    if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type, e = e !== "head" && e !== "body" && !nh(t.type, t.memoizedProps)), e && (e = Yt)) {
        if (oh(t)) throw Ew(), Error(z(418));
        for (; e;) xw(t, e), e = bi(e.nextSibling)
    }
    if (m0(t), t.tag === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(z(317));
        e: {
            for (t = t.nextSibling, e = 0; t;) {
                if (t.nodeType === 8) {
                    var n = t.data;
                    if (n === "/$") {
                        if (e === 0) {
                            Yt = bi(t.nextSibling);
                            break e
                        }
                        e--
                    } else n !== "$" && n !== "$!" && n !== "$?" || e++
                }
                t = t.nextSibling
            }
            Yt = null
        }
    } else Yt = $t ? bi(t.stateNode.nextSibling) : null;
    return !0
}

function Ew() {
    for (var t = Yt; t;) t = bi(t.nextSibling)
}

function pl() {
    Yt = $t = null, Pe = !1
}

function Fp(t) {
    Bn === null ? Bn = [t] : Bn.push(t)
}
var RE = _r.ReactCurrentBatchConfig;

function Ml(t, e, n) {
    if (t = n.ref, t !== null && typeof t != "function" && typeof t != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(z(309));
                var r = n.stateNode
            }
            if (!r) throw Error(z(147, t));
            var i = r,
                s = "" + t;
            return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === s ? e.ref : (e = function (o) {
                var l = i.refs;
                o === null ? delete l[s] : l[s] = o
            }, e._stringRef = s, e)
        }
        if (typeof t != "string") throw Error(z(284));
        if (!n._owner) throw Error(z(290, t))
    }
    return t
}

function Su(t, e) {
    throw t = Object.prototype.toString.call(e), Error(z(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))
}

function y0(t) {
    var e = t._init;
    return e(t._payload)
}

function bw(t) {
    function e(y, w) {
        if (t) {
            var E = y.deletions;
            E === null ? (y.deletions = [w], y.flags |= 16) : E.push(w)
        }
    }

    function n(y, w) {
        if (!t) return null;
        for (; w !== null;) e(y, w), w = w.sibling;
        return null
    }

    function r(y, w) {
        for (y = new Map; w !== null;) w.key !== null ? y.set(w.key, w) : y.set(w.index, w), w = w.sibling;
        return y
    }

    function i(y, w) {
        return y = Ci(y, w), y.index = 0, y.sibling = null, y
    }

    function s(y, w, E) {
        return y.index = E, t ? (E = y.alternate, E !== null ? (E = E.index, E < w ? (y.flags |= 2, w) : E) : (y.flags |= 2, w)) : (y.flags |= 1048576, w)
    }

    function o(y) {
        return t && y.alternate === null && (y.flags |= 2), y
    }

    function l(y, w, E, B) {
        return w === null || w.tag !== 6 ? (w = cd(E, y.mode, B), w.return = y, w) : (w = i(w, E), w.return = y, w)
    }

    function a(y, w, E, B) {
        var T = E.type;
        return T === Zs ? d(y, w, E.props.children, B, E.key) : w !== null && (w.elementType === T || typeof T == "object" && T !== null && T.$$typeof === $r && y0(T) === w.type) ? (B = i(w, E.props), B.ref = Ml(y, w, E), B.return = y, B) : (B = ec(E.type, E.key, E.props, null, y.mode, B), B.ref = Ml(y, w, E), B.return = y, B)
    }

    function c(y, w, E, B) {
        return w === null || w.tag !== 4 || w.stateNode.containerInfo !== E.containerInfo || w.stateNode.implementation !== E.implementation ? (w = fd(E, y.mode, B), w.return = y, w) : (w = i(w, E.children || []), w.return = y, w)
    }

    function d(y, w, E, B, T) {
        return w === null || w.tag !== 7 ? (w = bs(E, y.mode, B, T), w.return = y, w) : (w = i(w, E), w.return = y, w)
    }

    function h(y, w, E) {
        if (typeof w == "string" && w !== "" || typeof w == "number") return w = cd("" + w, y.mode, E), w.return = y, w;
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case gu:
                    return E = ec(w.type, w.key, w.props, null, y.mode, E), E.ref = Ml(y, null, w), E.return = y, E;
                case $s:
                    return w = fd(w, y.mode, E), w.return = y, w;
                case $r:
                    var B = w._init;
                    return h(y, B(w._payload), E)
            }
            if (Kl(w) || Ol(w)) return w = bs(w, y.mode, E, null), w.return = y, w;
            Su(y, w)
        }
        return null
    }

    function m(y, w, E, B) {
        var T = w !== null ? w.key : null;
        if (typeof E == "string" && E !== "" || typeof E == "number") return T !== null ? null : l(y, w, "" + E, B);
        if (typeof E == "object" && E !== null) {
            switch (E.$$typeof) {
                case gu:
                    return E.key === T ? a(y, w, E, B) : null;
                case $s:
                    return E.key === T ? c(y, w, E, B) : null;
                case $r:
                    return T = E._init, m(y, w, T(E._payload), B)
            }
            if (Kl(E) || Ol(E)) return T !== null ? null : d(y, w, E, B, null);
            Su(y, E)
        }
        return null
    }

    function A(y, w, E, B, T) {
        if (typeof B == "string" && B !== "" || typeof B == "number") return y = y.get(E) || null, l(w, y, "" + B, T);
        if (typeof B == "object" && B !== null) {
            switch (B.$$typeof) {
                case gu:
                    return y = y.get(B.key === null ? E : B.key) || null, a(w, y, B, T);
                case $s:
                    return y = y.get(B.key === null ? E : B.key) || null, c(w, y, B, T);
                case $r:
                    var O = B._init;
                    return A(y, w, E, O(B._payload), T)
            }
            if (Kl(B) || Ol(B)) return y = y.get(E) || null, d(w, y, B, T, null);
            Su(w, B)
        }
        return null
    }

    function k(y, w, E, B) {
        for (var T = null, O = null, U = w, F = w = 0, X = null; U !== null && F < E.length; F++) {
            U.index > F ? (X = U, U = null) : X = U.sibling;
            var j = m(y, U, E[F], B);
            if (j === null) {
                U === null && (U = X);
                break
            }
            t && U && j.alternate === null && e(y, U), w = s(j, w, F), O === null ? T = j : O.sibling = j, O = j, U = X
        }
        if (F === E.length) return n(y, U), Pe && _i(y, F), T;
        if (U === null) {
            for (; F < E.length; F++) U = h(y, E[F], B), U !== null && (w = s(U, w, F), O === null ? T = U : O.sibling = U, O = U);
            return Pe && _i(y, F), T
        }
        for (U = r(y, U); F < E.length; F++) X = A(U, y, F, E[F], B), X !== null && (t && X.alternate !== null && U.delete(X.key === null ? F : X.key), w = s(X, w, F), O === null ? T = X : O.sibling = X, O = X);
        return t && U.forEach(function (q) {
            return e(y, q)
        }), Pe && _i(y, F), T
    }

    function x(y, w, E, B) {
        var T = Ol(E);
        if (typeof T != "function") throw Error(z(150));
        if (E = T.call(E), E == null) throw Error(z(151));
        for (var O = T = null, U = w, F = w = 0, X = null, j = E.next(); U !== null && !j.done; F++, j = E.next()) {
            U.index > F ? (X = U, U = null) : X = U.sibling;
            var q = m(y, U, j.value, B);
            if (q === null) {
                U === null && (U = X);
                break
            }
            t && U && q.alternate === null && e(y, U), w = s(q, w, F), O === null ? T = q : O.sibling = q, O = q, U = X
        }
        if (j.done) return n(y, U), Pe && _i(y, F), T;
        if (U === null) {
            for (; !j.done; F++, j = E.next()) j = h(y, j.value, B), j !== null && (w = s(j, w, F), O === null ? T = j : O.sibling = j, O = j);
            return Pe && _i(y, F), T
        }
        for (U = r(y, U); !j.done; F++, j = E.next()) j = A(U, y, F, j.value, B), j !== null && (t && j.alternate !== null && U.delete(j.key === null ? F : j.key), w = s(j, w, F), O === null ? T = j : O.sibling = j, O = j);
        return t && U.forEach(function (ee) {
            return e(y, ee)
        }), Pe && _i(y, F), T
    }

    function C(y, w, E, B) {
        if (typeof E == "object" && E !== null && E.type === Zs && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
            switch (E.$$typeof) {
                case gu:
                    e: {
                        for (var T = E.key, O = w; O !== null;) {
                            if (O.key === T) {
                                if (T = E.type, T === Zs) {
                                    if (O.tag === 7) {
                                        n(y, O.sibling), w = i(O, E.props.children), w.return = y, y = w;
                                        break e
                                    }
                                } else if (O.elementType === T || typeof T == "object" && T !== null && T.$$typeof === $r && y0(T) === O.type) {
                                    n(y, O.sibling), w = i(O, E.props), w.ref = Ml(y, O, E), w.return = y, y = w;
                                    break e
                                }
                                n(y, O);
                                break
                            } else e(y, O);
                            O = O.sibling
                        }
                        E.type === Zs ? (w = bs(E.props.children, y.mode, B, E.key), w.return = y, y = w) : (B = ec(E.type, E.key, E.props, null, y.mode, B), B.ref = Ml(y, w, E), B.return = y, y = B)
                    }
                    return o(y);
                case $s:
                    e: {
                        for (O = E.key; w !== null;) {
                            if (w.key === O)
                                if (w.tag === 4 && w.stateNode.containerInfo === E.containerInfo && w.stateNode.implementation === E.implementation) {
                                    n(y, w.sibling), w = i(w, E.children || []), w.return = y, y = w;
                                    break e
                                } else {
                                    n(y, w);
                                    break
                                }
                            else e(y, w);
                            w = w.sibling
                        }
                        w = fd(E, y.mode, B),
                            w.return = y,
                            y = w
                    }
                    return o(y);
                case $r:
                    return O = E._init, C(y, w, O(E._payload), B)
            }
            if (Kl(E)) return k(y, w, E, B);
            if (Ol(E)) return x(y, w, E, B);
            Su(y, E)
        }
        return typeof E == "string" && E !== "" || typeof E == "number" ? (E = "" + E, w !== null && w.tag === 6 ? (n(y, w.sibling), w = i(w, E), w.return = y, y = w) : (n(y, w), w = cd(E, y.mode, B), w.return = y, y = w), o(y)) : n(y, w)
    }
    return C
}
var gl = bw(!0),
    kw = bw(!1),
    Sc = Fi(null),
    Cc = null,
    so = null,
    Up = null;

function Lp() {
    Up = so = Cc = null
}

function Dp(t) {
    var e = Sc.current;
    Se(Sc), t._currentValue = e
}

function ah(t, e, n) {
    for (; t !== null;) {
        var r = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e), t === n) break;
        t = t.return
    }
}

function Ao(t, e) {
    Cc = t, Up = so = null, t = t.dependencies, t !== null && t.firstContext !== null && (t.lanes & e && (Lt = !0), t.firstContext = null)
}

function gn(t) {
    var e = t._currentValue;
    if (Up !== t)
        if (t = {
            context: t,
            memoizedValue: e,
            next: null
        }, so === null) {
            if (Cc === null) throw Error(z(308));
            so = t, Cc.dependencies = {
                lanes: 0,
                firstContext: t
            }
        } else so = so.next = t;
    return e
}
var $i = null;

function Mp(t) {
    $i === null ? $i = [t] : $i.push(t)
}

function Nw(t, e, n, r) {
    var i = e.interleaved;
    return i === null ? (n.next = n, Mp(e)) : (n.next = i.next, i.next = n), e.interleaved = n, Ur(t, r)
}

function Ur(t, e) {
    t.lanes |= e;
    var n = t.alternate;
    for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null;) t.childLanes |= e, n = t.alternate, n !== null && (n.childLanes |= e), n = t, t = t.return;
    return n.tag === 3 ? n.stateNode : null
}
var Zr = !1;

function _p(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Sw(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
    })
}

function Ir(t, e) {
    return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function ki(t, e, n) {
    var r = t.updateQueue;
    if (r === null) return null;
    if (r = r.shared, he & 2) {
        var i = r.pending;
        return i === null ? e.next = e : (e.next = i.next, i.next = e), r.pending = e, Ur(t, n)
    }
    return i = r.interleaved, i === null ? (e.next = e, Mp(r)) : (e.next = i.next, i.next = e), r.interleaved = e, Ur(t, n)
}

function Wu(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194240) !== 0)) {
        var r = e.lanes;
        r &= t.pendingLanes, n |= r, e.lanes = n, kp(t, n)
    }
}

function w0(t, e) {
    var n = t.updateQueue,
        r = t.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            s = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = o : s = s.next = o, n = n.next
            } while (n !== null);
            s === null ? i = s = e : s = s.next = e
        } else i = s = e;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        }, t.updateQueue = n;
        return
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e
}

function Pc(t, e, n, r) {
    var i = t.updateQueue;
    Zr = !1;
    var s = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var a = l,
            c = a.next;
        a.next = null, o === null ? s = c : o.next = c, o = a;
        var d = t.alternate;
        d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== o && (l === null ? d.firstBaseUpdate = c : l.next = c, d.lastBaseUpdate = a))
    }
    if (s !== null) {
        var h = i.baseState;
        o = 0, d = c = a = null, l = s;
        do {
            var m = l.lane,
                A = l.eventTime;
            if ((r & m) === m) {
                d !== null && (d = d.next = {
                    eventTime: A,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var k = t,
                        x = l;
                    switch (m = e, A = n, x.tag) {
                        case 1:
                            if (k = x.payload, typeof k == "function") {
                                h = k.call(A, h, m);
                                break e
                            }
                            h = k;
                            break e;
                        case 3:
                            k.flags = k.flags & -65537 | 128;
                        case 0:
                            if (k = x.payload, m = typeof k == "function" ? k.call(A, h, m) : k, m == null) break e;
                            h = Te({}, h, m);
                            break e;
                        case 2:
                            Zr = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (t.flags |= 64, m = i.effects, m === null ? i.effects = [l] : m.push(l))
            } else A = {
                eventTime: A,
                lane: m,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
            }, d === null ? (c = d = A, a = h) : d = d.next = A, o |= m;
            if (l = l.next, l === null) {
                if (l = i.shared.pending, l === null) break;
                m = l, l = m.next, m.next = null, i.lastBaseUpdate = m, i.shared.pending = null
            }
        } while (!0);
        if (d === null && (a = h), i.baseState = a, i.firstBaseUpdate = c, i.lastBaseUpdate = d, e = i.shared.interleaved, e !== null) {
            i = e;
            do o |= i.lane, i = i.next; while (i !== e)
        } else s === null && (i.shared.lanes = 0);
        Bs |= o, t.lanes = o, t.memoizedState = h
    }
}

function A0(t, e, n) {
    if (t = e.effects, e.effects = null, t !== null)
        for (e = 0; e < t.length; e++) {
            var r = t[e],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(z(191, i));
                i.call(r)
            }
        }
}
var nu = {},
    nr = Fi(nu),
    ka = Fi(nu),
    Na = Fi(nu);

function Zi(t) {
    if (t === nu) throw Error(z(174));
    return t
}

function zp(t, e) {
    switch (xe(Na, e), xe(ka, t), xe(nr, nu), t = e.nodeType, t) {
        case 9:
        case 11:
            e = (e = e.documentElement) ? e.namespaceURI : Hd(null, "");
            break;
        default:
            t = t === 8 ? e.parentNode : e, e = t.namespaceURI || null, t = t.tagName, e = Hd(e, t)
    }
    Se(nr), xe(nr, e)
}

function ml() {
    Se(nr), Se(ka), Se(Na)
}

function Cw(t) {
    Zi(Na.current);
    var e = Zi(nr.current),
        n = Hd(e, t.type);
    e !== n && (xe(ka, t), xe(nr, n))
}

function Gp(t) {
    ka.current === t && (Se(nr), Se(ka))
}
var Be = Fi(0);

function Bc(t) {
    for (var e = t; e !== null;) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return e
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128) return e
        } else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue
        }
        if (e === t) break;
        for (; e.sibling === null;) {
            if (e.return === null || e.return === t) return null;
            e = e.return
        }
        e.sibling.return = e.return, e = e.sibling
    }
    return null
}
var id = [];

function Hp() {
    for (var t = 0; t < id.length; t++) id[t]._workInProgressVersionPrimary = null;
    id.length = 0
}
var Yu = _r.ReactCurrentDispatcher,
    sd = _r.ReactCurrentBatchConfig,
    Ps = 0,
    Re = null,
    Ke = null,
    Ze = null,
    Ic = !1,
    la = !1,
    Sa = 0,
    TE = 0;

function ft() {
    throw Error(z(321))
}

function Qp(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
        if (!On(t[n], e[n])) return !1;
    return !0
}

function jp(t, e, n, r, i, s) {
    if (Ps = s, Re = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, Yu.current = t === null || t.memoizedState === null ? LE : DE, t = n(r, i), la) {
        s = 0;
        do {
            if (la = !1, Sa = 0, 25 <= s) throw Error(z(301));
            s += 1, Ze = Ke = null, e.updateQueue = null, Yu.current = ME, t = n(r, i)
        } while (la)
    }
    if (Yu.current = Rc, e = Ke !== null && Ke.next !== null, Ps = 0, Ze = Ke = Re = null, Ic = !1, e) throw Error(z(300));
    return t
}

function Vp() {
    var t = Sa !== 0;
    return Sa = 0, t
}

function Gn() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ze === null ? Re.memoizedState = Ze = t : Ze = Ze.next = t, Ze
}

function mn() {
    if (Ke === null) {
        var t = Re.alternate;
        t = t !== null ? t.memoizedState : null
    } else t = Ke.next;
    var e = Ze === null ? Re.memoizedState : Ze.next;
    if (e !== null) Ze = e, Ke = t;
    else {
        if (t === null) throw Error(z(310));
        Ke = t, t = {
            memoizedState: Ke.memoizedState,
            baseState: Ke.baseState,
            baseQueue: Ke.baseQueue,
            queue: Ke.queue,
            next: null
        }, Ze === null ? Re.memoizedState = Ze = t : Ze = Ze.next = t
    }
    return Ze
}

function Ca(t, e) {
    return typeof e == "function" ? e(t) : e
}

function od(t) {
    var e = mn(),
        n = e.queue;
    if (n === null) throw Error(z(311));
    n.lastRenderedReducer = t;
    var r = Ke,
        i = r.baseQueue,
        s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = s.next, s.next = o
        }
        r.baseQueue = i = s, n.pending = null
    }
    if (i !== null) {
        s = i.next, r = r.baseState;
        var l = o = null,
            a = null,
            c = s;
        do {
            var d = c.lane;
            if ((Ps & d) === d) a !== null && (a = a.next = {
                lane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null
            }), r = c.hasEagerState ? c.eagerState : t(r, c.action);
            else {
                var h = {
                    lane: d,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                a === null ? (l = a = h, o = r) : a = a.next = h, Re.lanes |= d, Bs |= d
            }
            c = c.next
        } while (c !== null && c !== s);
        a === null ? o = r : a.next = l, On(r, e.memoizedState) || (Lt = !0), e.memoizedState = r, e.baseState = o, e.baseQueue = a, n.lastRenderedState = r
    }
    if (t = n.interleaved, t !== null) {
        i = t;
        do s = i.lane, Re.lanes |= s, Bs |= s, i = i.next; while (i !== t)
    } else i === null && (n.lanes = 0);
    return [e.memoizedState, n.dispatch]
}

function ld(t) {
    var e = mn(),
        n = e.queue;
    if (n === null) throw Error(z(311));
    n.lastRenderedReducer = t;
    var r = n.dispatch,
        i = n.pending,
        s = e.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do s = t(s, o.action), o = o.next; while (o !== i);
        On(s, e.memoizedState) || (Lt = !0), e.memoizedState = s, e.baseQueue === null && (e.baseState = s), n.lastRenderedState = s
    }
    return [s, r]
}

function Pw() { }

function Bw(t, e) {
    var n = Re,
        r = mn(),
        i = e(),
        s = !On(r.memoizedState, i);
    if (s && (r.memoizedState = i, Lt = !0), r = r.queue, Jp(Tw.bind(null, n, r, t), [t]), r.getSnapshot !== e || s || Ze !== null && Ze.memoizedState.tag & 1) {
        if (n.flags |= 2048, Pa(9, Rw.bind(null, n, r, i, e), void 0, null), et === null) throw Error(z(349));
        Ps & 30 || Iw(n, e, i)
    }
    return i
}

function Iw(t, e, n) {
    t.flags |= 16384, t = {
        getSnapshot: e,
        value: n
    }, e = Re.updateQueue, e === null ? (e = {
        lastEffect: null,
        stores: null
    }, Re.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t))
}

function Rw(t, e, n, r) {
    e.value = n, e.getSnapshot = r, Ow(e) && Fw(t)
}

function Tw(t, e, n) {
    return n(function () {
        Ow(e) && Fw(t)
    })
}

function Ow(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var n = e();
        return !On(t, n)
    } catch {
        return !0
    }
}

function Fw(t) {
    var e = Ur(t, 1);
    e !== null && Tn(e, t, 1, -1)
}

function v0(t) {
    var e = Gn();
    return typeof t == "function" && (t = t()), e.memoizedState = e.baseState = t, t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ca,
        lastRenderedState: t
    }, e.queue = t, t = t.dispatch = UE.bind(null, Re, t), [e.memoizedState, t]
}

function Pa(t, e, n, r) {
    return t = {
        tag: t,
        create: e,
        destroy: n,
        deps: r,
        next: null
    }, e = Re.updateQueue, e === null ? (e = {
        lastEffect: null,
        stores: null
    }, Re.updateQueue = e, e.lastEffect = t.next = t) : (n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (r = n.next, n.next = t, t.next = r, e.lastEffect = t)), t
}

function Uw() {
    return mn().memoizedState
}

function $u(t, e, n, r) {
    var i = Gn();
    Re.flags |= t, i.memoizedState = Pa(1 | e, n, void 0, r === void 0 ? null : r)
}

function df(t, e, n, r) {
    var i = mn();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Ke !== null) {
        var o = Ke.memoizedState;
        if (s = o.destroy, r !== null && Qp(r, o.deps)) {
            i.memoizedState = Pa(e, n, s, r);
            return
        }
    }
    Re.flags |= t, i.memoizedState = Pa(1 | e, n, s, r)
}

function x0(t, e) {
    return $u(8390656, 8, t, e)
}

function Jp(t, e) {
    return df(2048, 8, t, e)
}

function Lw(t, e) {
    return df(4, 2, t, e)
}

function Dw(t, e) {
    return df(4, 4, t, e)
}

function Mw(t, e) {
    if (typeof e == "function") return t = t(), e(t),
        function () {
            e(null)
        };
    if (e != null) return t = t(), e.current = t,
        function () {
            e.current = null
        }
}

function _w(t, e, n) {
    return n = n != null ? n.concat([t]) : null, df(4, 4, Mw.bind(null, e, t), n)
}

function Kp() { }

function zw(t, e) {
    var n = mn();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && Qp(e, r[1]) ? r[0] : (n.memoizedState = [t, e], t)
}

function Gw(t, e) {
    var n = mn();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && Qp(e, r[1]) ? r[0] : (t = t(), n.memoizedState = [t, e], t)
}

function Hw(t, e, n) {
    return Ps & 21 ? (On(n, e) || (n = Ky(), Re.lanes |= n, Bs |= n, t.baseState = !0), e) : (t.baseState && (t.baseState = !1, Lt = !0), t.memoizedState = n)
}

function OE(t, e) {
    var n = me;
    me = n !== 0 && 4 > n ? n : 4, t(!0);
    var r = sd.transition;
    sd.transition = {};
    try {
        t(!1), e()
    } finally {
        me = n, sd.transition = r
    }
}

function Qw() {
    return mn().memoizedState
}

function FE(t, e, n) {
    var r = Si(t);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    }, jw(t)) Vw(e, n);
    else if (n = Nw(t, e, n, r), n !== null) {
        var i = Pt();
        Tn(n, t, r, i), Jw(n, e, r)
    }
}

function UE(t, e, n) {
    var r = Si(t),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (jw(t)) Vw(e, i);
    else {
        var s = t.alternate;
        if (t.lanes === 0 && (s === null || s.lanes === 0) && (s = e.lastRenderedReducer, s !== null)) try {
            var o = e.lastRenderedState,
                l = s(o, n);
            if (i.hasEagerState = !0, i.eagerState = l, On(l, o)) {
                var a = e.interleaved;
                a === null ? (i.next = i, Mp(e)) : (i.next = a.next, a.next = i), e.interleaved = i;
                return
            }
        } catch { } finally { }
        n = Nw(t, e, i, r), n !== null && (i = Pt(), Tn(n, t, r, i), Jw(n, e, r))
    }
}

function jw(t) {
    var e = t.alternate;
    return t === Re || e !== null && e === Re
}

function Vw(t, e) {
    la = Ic = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e
}

function Jw(t, e, n) {
    if (n & 4194240) {
        var r = e.lanes;
        r &= t.pendingLanes, n |= r, e.lanes = n, kp(t, n)
    }
}
var Rc = {
    readContext: gn,
    useCallback: ft,
    useContext: ft,
    useEffect: ft,
    useImperativeHandle: ft,
    useInsertionEffect: ft,
    useLayoutEffect: ft,
    useMemo: ft,
    useReducer: ft,
    useRef: ft,
    useState: ft,
    useDebugValue: ft,
    useDeferredValue: ft,
    useTransition: ft,
    useMutableSource: ft,
    useSyncExternalStore: ft,
    useId: ft,
    unstable_isNewReconciler: !1
},
    LE = {
        readContext: gn,
        useCallback: function (t, e) {
            return Gn().memoizedState = [t, e === void 0 ? null : e], t
        },
        useContext: gn,
        useEffect: x0,
        useImperativeHandle: function (t, e, n) {
            return n = n != null ? n.concat([t]) : null, $u(4194308, 4, Mw.bind(null, e, t), n)
        },
        useLayoutEffect: function (t, e) {
            return $u(4194308, 4, t, e)
        },
        useInsertionEffect: function (t, e) {
            return $u(4, 2, t, e)
        },
        useMemo: function (t, e) {
            var n = Gn();
            return e = e === void 0 ? null : e, t = t(), n.memoizedState = [t, e], t
        },
        useReducer: function (t, e, n) {
            var r = Gn();
            return e = n !== void 0 ? n(e) : e, r.memoizedState = r.baseState = e, t = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: e
            }, r.queue = t, t = t.dispatch = FE.bind(null, Re, t), [r.memoizedState, t]
        },
        useRef: function (t) {
            var e = Gn();
            return t = {
                current: t
            }, e.memoizedState = t
        },
        useState: v0,
        useDebugValue: Kp,
        useDeferredValue: function (t) {
            return Gn().memoizedState = t
        },
        useTransition: function () {
            var t = v0(!1),
                e = t[0];
            return t = OE.bind(null, t[1]), Gn().memoizedState = t, [e, t]
        },
        useMutableSource: function () { },
        useSyncExternalStore: function (t, e, n) {
            var r = Re,
                i = Gn();
            if (Pe) {
                if (n === void 0) throw Error(z(407));
                n = n()
            } else {
                if (n = e(), et === null) throw Error(z(349));
                Ps & 30 || Iw(r, e, n)
            }
            i.memoizedState = n;
            var s = {
                value: n,
                getSnapshot: e
            };
            return i.queue = s, x0(Tw.bind(null, r, s, t), [t]), r.flags |= 2048, Pa(9, Rw.bind(null, r, s, n, e), void 0, null), n
        },
        useId: function () {
            var t = Gn(),
                e = et.identifierPrefix;
            if (Pe) {
                var n = Pr,
                    r = Cr;
                n = (r & ~(1 << 32 - Rn(r) - 1)).toString(32) + n, e = ":" + e + "R" + n, n = Sa++, 0 < n && (e += "H" + n.toString(32)), e += ":"
            } else n = TE++, e = ":" + e + "r" + n.toString(32) + ":";
            return t.memoizedState = e
        },
        unstable_isNewReconciler: !1
    },
    DE = {
        readContext: gn,
        useCallback: zw,
        useContext: gn,
        useEffect: Jp,
        useImperativeHandle: _w,
        useInsertionEffect: Lw,
        useLayoutEffect: Dw,
        useMemo: Gw,
        useReducer: od,
        useRef: Uw,
        useState: function () {
            return od(Ca)
        },
        useDebugValue: Kp,
        useDeferredValue: function (t) {
            var e = mn();
            return Hw(e, Ke.memoizedState, t)
        },
        useTransition: function () {
            var t = od(Ca)[0],
                e = mn().memoizedState;
            return [t, e]
        },
        useMutableSource: Pw,
        useSyncExternalStore: Bw,
        useId: Qw,
        unstable_isNewReconciler: !1
    },
    ME = {
        readContext: gn,
        useCallback: zw,
        useContext: gn,
        useEffect: Jp,
        useImperativeHandle: _w,
        useInsertionEffect: Lw,
        useLayoutEffect: Dw,
        useMemo: Gw,
        useReducer: ld,
        useRef: Uw,
        useState: function () {
            return ld(Ca)
        },
        useDebugValue: Kp,
        useDeferredValue: function (t) {
            var e = mn();
            return Ke === null ? e.memoizedState = t : Hw(e, Ke.memoizedState, t)
        },
        useTransition: function () {
            var t = ld(Ca)[0],
                e = mn().memoizedState;
            return [t, e]
        },
        useMutableSource: Pw,
        useSyncExternalStore: Bw,
        useId: Qw,
        unstable_isNewReconciler: !1
    };

function xn(t, e) {
    if (t && t.defaultProps) {
        e = Te({}, e), t = t.defaultProps;
        for (var n in t) e[n] === void 0 && (e[n] = t[n]);
        return e
    }
    return e
}

function uh(t, e, n, r) {
    e = t.memoizedState, n = n(r, e), n = n == null ? e : Te({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n)
}
var hf = {
    isMounted: function (t) {
        return (t = t._reactInternals) ? _s(t) === t : !1
    },
    enqueueSetState: function (t, e, n) {
        t = t._reactInternals;
        var r = Pt(),
            i = Si(t),
            s = Ir(r, i);
        s.payload = e, n != null && (s.callback = n), e = ki(t, s, i), e !== null && (Tn(e, t, i, r), Wu(e, t, i))
    },
    enqueueReplaceState: function (t, e, n) {
        t = t._reactInternals;
        var r = Pt(),
            i = Si(t),
            s = Ir(r, i);
        s.tag = 1, s.payload = e, n != null && (s.callback = n), e = ki(t, s, i), e !== null && (Tn(e, t, i, r), Wu(e, t, i))
    },
    enqueueForceUpdate: function (t, e) {
        t = t._reactInternals;
        var n = Pt(),
            r = Si(t),
            i = Ir(n, r);
        i.tag = 2, e != null && (i.callback = e), e = ki(t, i, r), e !== null && (Tn(e, t, r, n), Wu(e, t, r))
    }
};

function E0(t, e, n, r, i, s, o) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, s, o) : e.prototype && e.prototype.isPureReactComponent ? !va(n, r) || !va(i, s) : !0
}

function Kw(t, e, n) {
    var r = !1,
        i = Ii,
        s = e.contextType;
    return typeof s == "object" && s !== null ? s = gn(s) : (i = Mt(e) ? Ss : wt.current, r = e.contextTypes, s = (r = r != null) ? hl(t, i) : Ii), e = new e(n, s), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = hf, t.stateNode = e, e._reactInternals = t, r && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = i, t.__reactInternalMemoizedMaskedChildContext = s), e
}

function b0(t, e, n, r) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, r), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, r), e.state !== t && hf.enqueueReplaceState(e, e.state, null)
}

function ch(t, e, n, r) {
    var i = t.stateNode;
    i.props = n, i.state = t.memoizedState, i.refs = {}, _p(t);
    var s = e.contextType;
    typeof s == "object" && s !== null ? i.context = gn(s) : (s = Mt(e) ? Ss : wt.current, i.context = hl(t, s)), i.state = t.memoizedState, s = e.getDerivedStateFromProps, typeof s == "function" && (uh(t, e, s, n), i.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (e = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), e !== i.state && hf.enqueueReplaceState(i, i.state, null), Pc(t, n, i, r), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308)
}

function yl(t, e) {
    try {
        var n = "",
            r = e;
        do n += dx(r), r = r.return; while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: t,
        source: e,
        stack: i,
        digest: null
    }
}

function ad(t, e, n) {
    return {
        value: t,
        source: null,
        stack: n & null,
        digest: e & null
    }
}

function fh(t, e) {
    try {
        console.error(e.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}
var _E = typeof WeakMap == "function" ? WeakMap : Map;

function Ww(t, e, n) {
    n = Ir(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = e.value;
    return n.callback = function () {
        Oc || (Oc = !0, xh = r), fh(t, e)
    }, n
}

function Yw(t, e, n) {
    n = Ir(-1, n), n.tag = 3;
    var r = t.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = e.value;
        n.payload = function () {
            return r(i)
        }, n.callback = function () {
            fh(t, e)
        }
    }
    var s = t.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function () {
        fh(t, e), typeof r != "function" && (Ni === null ? Ni = new Set([this]) : Ni.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
            componentStack: o !== null ? o : ""
        })
    }), n
}

function k0(t, e, n) {
    var r = t.pingCache;
    if (r === null) {
        r = t.pingCache = new _E;
        var i = new Set;
        r.set(e, i)
    } else i = r.get(e), i === void 0 && (i = new Set, r.set(e, i));
    i.has(n) || (i.add(n), t = qE.bind(null, t, e, n), e.then(t, t))
}

function N0(t) {
    do {
        var e;
        if ((e = t.tag === 13) && (e = t.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e) return t;
        t = t.return
    } while (t !== null);
    return null
}

function S0(t, e, n, r, i) {
    return t.mode & 1 ? (t.flags |= 65536, t.lanes = i, t) : (t === e ? t.flags |= 65536 : (t.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = Ir(-1, 1), e.tag = 2, ki(n, e, 1))), n.lanes |= 1), t)
}
var zE = _r.ReactCurrentOwner,
    Lt = !1;

function xt(t, e, n, r) {
    e.child = t === null ? kw(e, null, n, r) : gl(e, t.child, n, r)
}

function C0(t, e, n, r, i) {
    n = n.render;
    var s = e.ref;
    return Ao(e, i), r = jp(t, e, n, r, s, i), n = Vp(), t !== null && !Lt ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~i, Lr(t, e, i)) : (Pe && n && Tp(e), e.flags |= 1, xt(t, e, r, i), e.child)
}

function P0(t, e, n, r, i) {
    if (t === null) {
        var s = n.type;
        return typeof s == "function" && !tg(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15, e.type = s, $w(t, e, s, r, i)) : (t = ec(n.type, null, r, e, e.mode, i), t.ref = e.ref, t.return = e, e.child = t)
    }
    if (s = t.child, !(t.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare, n = n !== null ? n : va, n(o, r) && t.ref === e.ref) return Lr(t, e, i)
    }
    return e.flags |= 1, t = Ci(s, r), t.ref = e.ref, t.return = e, e.child = t
}

function $w(t, e, n, r, i) {
    if (t !== null) {
        var s = t.memoizedProps;
        if (va(s, r) && t.ref === e.ref)
            if (Lt = !1, e.pendingProps = r = s, (t.lanes & i) !== 0) t.flags & 131072 && (Lt = !0);
            else return e.lanes = t.lanes, Lr(t, e, i)
    }
    return dh(t, e, n, r, i)
}

function Zw(t, e, n) {
    var r = e.pendingProps,
        i = r.children,
        s = t !== null ? t.memoizedState : null;
    if (r.mode === "hidden")
        if (!(e.mode & 1)) e.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, xe(lo, Wt), Wt |= n;
        else {
            if (!(n & 1073741824)) return t = s !== null ? s.baseLanes | n : n, e.lanes = e.childLanes = 1073741824, e.memoizedState = {
                baseLanes: t,
                cachePool: null,
                transitions: null
            }, e.updateQueue = null, xe(lo, Wt), Wt |= t, null;
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = s !== null ? s.baseLanes : n, xe(lo, Wt), Wt |= r
        }
    else s !== null ? (r = s.baseLanes | n, e.memoizedState = null) : r = n, xe(lo, Wt), Wt |= r;
    return xt(t, e, i, n), e.child
}

function Xw(t, e) {
    var n = e.ref;
    (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512, e.flags |= 2097152)
}

function dh(t, e, n, r, i) {
    var s = Mt(n) ? Ss : wt.current;
    return s = hl(e, s), Ao(e, i), n = jp(t, e, n, r, s, i), r = Vp(), t !== null && !Lt ? (e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~i, Lr(t, e, i)) : (Pe && r && Tp(e), e.flags |= 1, xt(t, e, n, i), e.child)
}

function B0(t, e, n, r, i) {
    if (Mt(n)) {
        var s = !0;
        bc(e)
    } else s = !1;
    if (Ao(e, i), e.stateNode === null) Zu(t, e), Kw(e, n, r), ch(e, n, r, i), r = !0;
    else if (t === null) {
        var o = e.stateNode,
            l = e.memoizedProps;
        o.props = l;
        var a = o.context,
            c = n.contextType;
        typeof c == "object" && c !== null ? c = gn(c) : (c = Mt(n) ? Ss : wt.current, c = hl(e, c));
        var d = n.getDerivedStateFromProps,
            h = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || a !== c) && b0(e, o, r, c), Zr = !1;
        var m = e.memoizedState;
        o.state = m, Pc(e, r, o, i), a = e.memoizedState, l !== r || m !== a || Dt.current || Zr ? (typeof d == "function" && (uh(e, n, d, r), a = e.memoizedState), (l = Zr || E0(e, n, l, r, m, a, c)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = r, e.memoizedState = a), o.props = r, o.state = a, o.context = c, r = l) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), r = !1)
    } else {
        o = e.stateNode, Sw(t, e), l = e.memoizedProps, c = e.type === e.elementType ? l : xn(e.type, l), o.props = c, h = e.pendingProps, m = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = gn(a) : (a = Mt(n) ? Ss : wt.current, a = hl(e, a));
        var A = n.getDerivedStateFromProps;
        (d = typeof A == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== h || m !== a) && b0(e, o, r, a), Zr = !1, m = e.memoizedState, o.state = m, Pc(e, r, o, i);
        var k = e.memoizedState;
        l !== h || m !== k || Dt.current || Zr ? (typeof A == "function" && (uh(e, n, A, r), k = e.memoizedState), (c = Zr || E0(e, n, c, r, m, k, a) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, k, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, k, a)), typeof o.componentDidUpdate == "function" && (e.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === t.memoizedProps && m === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === t.memoizedProps && m === t.memoizedState || (e.flags |= 1024), e.memoizedProps = r, e.memoizedState = k), o.props = r, o.state = k, o.context = a, r = c) : (typeof o.componentDidUpdate != "function" || l === t.memoizedProps && m === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === t.memoizedProps && m === t.memoizedState || (e.flags |= 1024), r = !1)
    }
    return hh(t, e, n, r, s, i)
}

function hh(t, e, n, r, i, s) {
    Xw(t, e);
    var o = (e.flags & 128) !== 0;
    if (!r && !o) return i && p0(e, n, !1), Lr(t, e, s);
    r = e.stateNode, zE.current = e;
    var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return e.flags |= 1, t !== null && o ? (e.child = gl(e, t.child, null, s), e.child = gl(e, null, l, s)) : xt(t, e, l, s), e.memoizedState = r.state, i && p0(e, n, !0), e.child
}

function qw(t) {
    var e = t.stateNode;
    e.pendingContext ? h0(t, e.pendingContext, e.pendingContext !== e.context) : e.context && h0(t, e.context, !1), zp(t, e.containerInfo)
}

function I0(t, e, n, r, i) {
    return pl(), Fp(i), e.flags |= 256, xt(t, e, n, r), e.child
}
var ph = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function gh(t) {
    return {
        baseLanes: t,
        cachePool: null,
        transitions: null
    }
}

function e1(t, e, n) {
    var r = e.pendingProps,
        i = Be.current,
        s = !1,
        o = (e.flags & 128) !== 0,
        l;
    if ((l = o) || (l = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0), l ? (s = !0, e.flags &= -129) : (t === null || t.memoizedState !== null) && (i |= 1), xe(Be, i & 1), t === null) return lh(e), t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (o = r.children, t = r.fallback, s ? (r = e.mode, s = e.child, o = {
        mode: "hidden",
        children: o
    }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = mf(o, r, 0, null), t = bs(t, r, n, null), s.return = e, t.return = e, s.sibling = t, e.child = s, e.child.memoizedState = gh(n), e.memoizedState = ph, t) : Wp(e, o));
    if (i = t.memoizedState, i !== null && (l = i.dehydrated, l !== null)) return GE(t, e, o, r, l, i, n);
    if (s) {
        s = r.fallback, o = e.mode, i = t.child, l = i.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && e.child !== i ? (r = e.child, r.childLanes = 0, r.pendingProps = a, e.deletions = null) : (r = Ci(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? s = Ci(l, s) : (s = bs(s, o, n, null), s.flags |= 2), s.return = e, r.return = e, r.sibling = s, e.child = r, r = s, s = e.child, o = t.child.memoizedState, o = o === null ? gh(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        }, s.memoizedState = o, s.childLanes = t.childLanes & ~n, e.memoizedState = ph, r
    }
    return s = t.child, t = s.sibling, r = Ci(s, {
        mode: "visible",
        children: r.children
    }), !(e.mode & 1) && (r.lanes = n), r.return = e, r.sibling = null, t !== null && (n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t)), e.child = r, e.memoizedState = null, r
}

function Wp(t, e) {
    return e = mf({
        mode: "visible",
        children: e
    }, t.mode, 0, null), e.return = t, t.child = e
}

function Cu(t, e, n, r) {
    return r !== null && Fp(r), gl(e, t.child, null, n), t = Wp(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t
}

function GE(t, e, n, r, i, s, o) {
    if (n) return e.flags & 256 ? (e.flags &= -257, r = ad(Error(z(422))), Cu(t, e, o, r)) : e.memoizedState !== null ? (e.child = t.child, e.flags |= 128, null) : (s = r.fallback, i = e.mode, r = mf({
        mode: "visible",
        children: r.children
    }, i, 0, null), s = bs(s, i, o, null), s.flags |= 2, r.return = e, s.return = e, r.sibling = s, e.child = r, e.mode & 1 && gl(e, t.child, null, o), e.child.memoizedState = gh(o), e.memoizedState = ph, s);
    if (!(e.mode & 1)) return Cu(t, e, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var l = r.dgst;
        return r = l, s = Error(z(419)), r = ad(s, r, void 0), Cu(t, e, o, r)
    }
    if (l = (o & t.childLanes) !== 0, Lt || l) {
        if (r = et, r !== null) {
            switch (o & -o) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
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
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, Ur(t, i), Tn(r, t, i, -1))
        }
        return eg(), r = ad(Error(z(421))), Cu(t, e, o, r)
    }
    return i.data === "$?" ? (e.flags |= 128, e.child = t.child, e = e2.bind(null, t), i._reactRetry = e, null) : (t = s.treeContext, Yt = bi(i.nextSibling), $t = e, Pe = !0, Bn = null, t !== null && (fn[dn++] = Cr, fn[dn++] = Pr, fn[dn++] = Cs, Cr = t.id, Pr = t.overflow, Cs = e), e = Wp(e, r.children), e.flags |= 4096, e)
}

function R0(t, e, n) {
    t.lanes |= e;
    var r = t.alternate;
    r !== null && (r.lanes |= e), ah(t.return, e, n)
}

function ud(t, e, n, r, i) {
    var s = t.memoizedState;
    s === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = e, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i)
}

function t1(t, e, n) {
    var r = e.pendingProps,
        i = r.revealOrder,
        s = r.tail;
    if (xt(t, e, r.children, n), r = Be.current, r & 2) r = r & 1 | 2, e.flags |= 128;
    else {
        if (t !== null && t.flags & 128) e: for (t = e.child; t !== null;) {
            if (t.tag === 13) t.memoizedState !== null && R0(t, n, e);
            else if (t.tag === 19) R0(t, n, e);
            else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break e;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) break e;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        r &= 1
    }
    if (xe(Be, r), !(e.mode & 1)) e.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = e.child, i = null; n !== null;) t = n.alternate, t !== null && Bc(t) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = e.child, e.child = null) : (i = n.sibling, n.sibling = null), ud(e, !1, i, n, s);
            break;
        case "backwards":
            for (n = null, i = e.child, e.child = null; i !== null;) {
                if (t = i.alternate, t !== null && Bc(t) === null) {
                    e.child = i;
                    break
                }
                t = i.sibling, i.sibling = n, n = i, i = t
            }
            ud(e, !0, n, null, s);
            break;
        case "together":
            ud(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
    }
    return e.child
}

function Zu(t, e) {
    !(e.mode & 1) && t !== null && (t.alternate = null, e.alternate = null, e.flags |= 2)
}

function Lr(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), Bs |= e.lanes, !(n & e.childLanes)) return null;
    if (t !== null && e.child !== t.child) throw Error(z(153));
    if (e.child !== null) {
        for (t = e.child, n = Ci(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null;) t = t.sibling, n = n.sibling = Ci(t, t.pendingProps), n.return = e;
        n.sibling = null
    }
    return e.child
}

function HE(t, e, n) {
    switch (e.tag) {
        case 3:
            qw(e), pl();
            break;
        case 5:
            Cw(e);
            break;
        case 1:
            Mt(e.type) && bc(e);
            break;
        case 4:
            zp(e, e.stateNode.containerInfo);
            break;
        case 10:
            var r = e.type._context,
                i = e.memoizedProps.value;
            xe(Sc, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = e.memoizedState, r !== null) return r.dehydrated !== null ? (xe(Be, Be.current & 1), e.flags |= 128, null) : n & e.child.childLanes ? e1(t, e, n) : (xe(Be, Be.current & 1), t = Lr(t, e, n), t !== null ? t.sibling : null);
            xe(Be, Be.current & 1);
            break;
        case 19:
            if (r = (n & e.childLanes) !== 0, t.flags & 128) {
                if (r) return t1(t, e, n);
                e.flags |= 128
            }
            if (i = e.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), xe(Be, Be.current), r) break;
            return null;
        case 22:
        case 23:
            return e.lanes = 0, Zw(t, e, n)
    }
    return Lr(t, e, n)
}
var n1, mh, r1, i1;
n1 = function (t, e) {
    for (var n = e.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === e) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === e) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
mh = function () { };
r1 = function (t, e, n, r) {
    var i = t.memoizedProps;
    if (i !== r) {
        t = e.stateNode, Zi(nr.current);
        var s = null;
        switch (n) {
            case "input":
                i = Md(t, i), r = Md(t, r), s = [];
                break;
            case "select":
                i = Te({}, i, {
                    value: void 0
                }), r = Te({}, r, {
                    value: void 0
                }), s = [];
                break;
            case "textarea":
                i = Gd(t, i), r = Gd(t, r), s = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (t.onclick = xc)
        }
        Qd(n, r);
        var o;
        n = null;
        for (c in i)
            if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
                if (c === "style") {
                    var l = i[c];
                    for (o in l) l.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (ha.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
        for (c in r) {
            var a = r[c];
            if (l = i != null ? i[c] : void 0, r.hasOwnProperty(c) && a !== l && (a != null || l != null))
                if (c === "style")
                    if (l) {
                        for (o in l) !l.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                        for (o in a) a.hasOwnProperty(o) && l[o] !== a[o] && (n || (n = {}), n[o] = a[o])
                    } else n || (s || (s = []), s.push(c, n)), n = a;
                else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (s = s || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (s = s || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (ha.hasOwnProperty(c) ? (a != null && c === "onScroll" && ke("scroll", t), s || l === a || (s = [])) : (s = s || []).push(c, a))
        }
        n && (s = s || []).push("style", n);
        var c = s;
        (e.updateQueue = c) && (e.flags |= 4)
    }
};
i1 = function (t, e, n, r) {
    n !== r && (e.flags |= 4)
};

function _l(t, e) {
    if (!Pe) switch (t.tailMode) {
        case "hidden":
            e = t.tail;
            for (var n = null; e !== null;) e.alternate !== null && (n = e), e = e.sibling;
            n === null ? t.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = t.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : r.sibling = null
    }
}

function dt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
        n = 0,
        r = 0;
    if (e)
        for (var i = t.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = t, i = i.sibling;
    else
        for (i = t.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = t, i = i.sibling;
    return t.subtreeFlags |= r, t.childLanes = n, e
}

function QE(t, e, n) {
    var r = e.pendingProps;
    switch (Op(e), e.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return dt(e), null;
        case 1:
            return Mt(e.type) && Ec(), dt(e), null;
        case 3:
            return r = e.stateNode, ml(), Se(Dt), Se(wt), Hp(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (t === null || t.child === null) && (Nu(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, Bn !== null && (kh(Bn), Bn = null))), mh(t, e), dt(e), null;
        case 5:
            Gp(e);
            var i = Zi(Na.current);
            if (n = e.type, t !== null && e.stateNode != null) r1(t, e, n, r, i), t.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
            else {
                if (!r) {
                    if (e.stateNode === null) throw Error(z(166));
                    return dt(e), null
                }
                if (t = Zi(nr.current), Nu(e)) {
                    r = e.stateNode, n = e.type;
                    var s = e.memoizedProps;
                    switch (r[Zn] = e, r[ba] = s, t = (e.mode & 1) !== 0, n) {
                        case "dialog":
                            ke("cancel", r), ke("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            ke("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < Yl.length; i++) ke(Yl[i], r);
                            break;
                        case "source":
                            ke("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            ke("error", r), ke("load", r);
                            break;
                        case "details":
                            ke("toggle", r);
                            break;
                        case "input":
                            zg(r, s), ke("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!s.multiple
                            }, ke("invalid", r);
                            break;
                        case "textarea":
                            Hg(r, s), ke("invalid", r)
                    }
                    Qd(n, s), i = null;
                    for (var o in s)
                        if (s.hasOwnProperty(o)) {
                            var l = s[o];
                            o === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && ku(r.textContent, l, t), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && ku(r.textContent, l, t), i = ["children", "" + l]) : ha.hasOwnProperty(o) && l != null && o === "onScroll" && ke("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            mu(r), Gg(r, s, !0);
                            break;
                        case "textarea":
                            mu(r), Qg(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof s.onClick == "function" && (r.onclick = xc)
                    }
                    r = i, e.updateQueue = r, r !== null && (e.flags |= 4)
                } else {
                    o = i.nodeType === 9 ? i : i.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = Ty(n)), t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = o.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof r.is == "string" ? t = o.createElement(n, {
                        is: r.is
                    }) : (t = o.createElement(n), n === "select" && (o = t, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : t = o.createElementNS(t, n), t[Zn] = e, t[ba] = r, n1(t, e, !1, !1), e.stateNode = t;
                    e: {
                        switch (o = jd(n, r), n) {
                            case "dialog":
                                ke("cancel", t), ke("close", t), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                ke("load", t), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < Yl.length; i++) ke(Yl[i], t);
                                i = r;
                                break;
                            case "source":
                                ke("error", t), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                ke("error", t), ke("load", t), i = r;
                                break;
                            case "details":
                                ke("toggle", t), i = r;
                                break;
                            case "input":
                                zg(t, r), i = Md(t, r), ke("invalid", t);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                t._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = Te({}, r, {
                                    value: void 0
                                }), ke("invalid", t);
                                break;
                            case "textarea":
                                Hg(t, r), i = Gd(t, r), ke("invalid", t);
                                break;
                            default:
                                i = r
                        }
                        Qd(n, i),
                            l = i;
                        for (s in l)
                            if (l.hasOwnProperty(s)) {
                                var a = l[s];
                                s === "style" ? Uy(t, a) : s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Oy(t, a)) : s === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && pa(t, a) : typeof a == "number" && pa(t, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (ha.hasOwnProperty(s) ? a != null && s === "onScroll" && ke("scroll", t) : a != null && wp(t, s, a, o))
                            }
                        switch (n) {
                            case "input":
                                mu(t), Gg(t, r, !1);
                                break;
                            case "textarea":
                                mu(t), Qg(t);
                                break;
                            case "option":
                                r.value != null && t.setAttribute("value", "" + Bi(r.value));
                                break;
                            case "select":
                                t.multiple = !!r.multiple, s = r.value, s != null ? go(t, !!r.multiple, s, !1) : r.defaultValue != null && go(t, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (t.onclick = xc)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (e.flags |= 4)
                }
                e.ref !== null && (e.flags |= 512, e.flags |= 2097152)
            }
            return dt(e), null;
        case 6:
            if (t && e.stateNode != null) i1(t, e, t.memoizedProps, r);
            else {
                if (typeof r != "string" && e.stateNode === null) throw Error(z(166));
                if (n = Zi(Na.current), Zi(nr.current), Nu(e)) {
                    if (r = e.stateNode, n = e.memoizedProps, r[Zn] = e, (s = r.nodeValue !== n) && (t = $t, t !== null)) switch (t.tag) {
                        case 3:
                            ku(r.nodeValue, n, (t.mode & 1) !== 0);
                            break;
                        case 5:
                            t.memoizedProps.suppressHydrationWarning !== !0 && ku(r.nodeValue, n, (t.mode & 1) !== 0)
                    }
                    s && (e.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Zn] = e, e.stateNode = r
            }
            return dt(e), null;
        case 13:
            if (Se(Be), r = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (Pe && Yt !== null && e.mode & 1 && !(e.flags & 128)) Ew(), pl(), e.flags |= 98560, s = !1;
                else if (s = Nu(e), r !== null && r.dehydrated !== null) {
                    if (t === null) {
                        if (!s) throw Error(z(318));
                        if (s = e.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(z(317));
                        s[Zn] = e
                    } else pl(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
                    dt(e), s = !1
                } else Bn !== null && (kh(Bn), Bn = null), s = !0;
                if (!s) return e.flags & 65536 ? e : null
            }
            return e.flags & 128 ? (e.lanes = n, e) : (r = r !== null, r !== (t !== null && t.memoizedState !== null) && r && (e.child.flags |= 8192, e.mode & 1 && (t === null || Be.current & 1 ? We === 0 && (We = 3) : eg())), e.updateQueue !== null && (e.flags |= 4), dt(e), null);
        case 4:
            return ml(), mh(t, e), t === null && xa(e.stateNode.containerInfo), dt(e), null;
        case 10:
            return Dp(e.type._context), dt(e), null;
        case 17:
            return Mt(e.type) && Ec(), dt(e), null;
        case 19:
            if (Se(Be), s = e.memoizedState, s === null) return dt(e), null;
            if (r = (e.flags & 128) !== 0, o = s.rendering, o === null)
                if (r) _l(s, !1);
                else {
                    if (We !== 0 || t !== null && t.flags & 128)
                        for (t = e.child; t !== null;) {
                            if (o = Bc(t), o !== null) {
                                for (e.flags |= 128, _l(s, !1), r = o.updateQueue, r !== null && (e.updateQueue = r, e.flags |= 4), e.subtreeFlags = 0, r = n, n = e.child; n !== null;) s = n, t = r, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = t, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, t = o.dependencies, s.dependencies = t === null ? null : {
                                    lanes: t.lanes,
                                    firstContext: t.firstContext
                                }), n = n.sibling;
                                return xe(Be, Be.current & 1 | 2), e.child
                            }
                            t = t.sibling
                        }
                    s.tail !== null && ze() > wl && (e.flags |= 128, r = !0, _l(s, !1), e.lanes = 4194304)
                }
            else {
                if (!r)
                    if (t = Bc(o), t !== null) {
                        if (e.flags |= 128, r = !0, n = t.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), _l(s, !0), s.tail === null && s.tailMode === "hidden" && !o.alternate && !Pe) return dt(e), null
                    } else 2 * ze() - s.renderingStartTime > wl && n !== 1073741824 && (e.flags |= 128, r = !0, _l(s, !1), e.lanes = 4194304);
                s.isBackwards ? (o.sibling = e.child, e.child = o) : (n = s.last, n !== null ? n.sibling = o : e.child = o, s.last = o)
            }
            return s.tail !== null ? (e = s.tail, s.rendering = e, s.tail = e.sibling, s.renderingStartTime = ze(), e.sibling = null, n = Be.current, xe(Be, r ? n & 1 | 2 : n & 1), e) : (dt(e), null);
        case 22:
        case 23:
            return qp(), r = e.memoizedState !== null, t !== null && t.memoizedState !== null !== r && (e.flags |= 8192), r && e.mode & 1 ? Wt & 1073741824 && (dt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : dt(e), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(z(156, e.tag))
}

function jE(t, e) {
    switch (Op(e), e.tag) {
        case 1:
            return Mt(e.type) && Ec(), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 3:
            return ml(), Se(Dt), Se(wt), Hp(), t = e.flags, t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128, e) : null;
        case 5:
            return Gp(e), null;
        case 13:
            if (Se(Be), t = e.memoizedState, t !== null && t.dehydrated !== null) {
                if (e.alternate === null) throw Error(z(340));
                pl()
            }
            return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 19:
            return Se(Be), null;
        case 4:
            return ml(), null;
        case 10:
            return Dp(e.type._context), null;
        case 22:
        case 23:
            return qp(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Pu = !1,
    mt = !1,
    VE = typeof WeakSet == "function" ? WeakSet : Set,
    K = null;

function oo(t, e) {
    var n = t.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            De(t, e, r)
        } else n.current = null
}

function yh(t, e, n) {
    try {
        n()
    } catch (r) {
        De(t, e, r)
    }
}
var T0 = !1;

function JE(t, e) {
    if (eh = wc, t = uw(), Rp(t)) {
        if ("selectionStart" in t) var n = {
            start: t.selectionStart,
            end: t.selectionEnd
        };
        else e: {
            n = (n = t.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    s = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, s.nodeType
                } catch {
                    n = null;
                    break e
                }
                var o = 0,
                    l = -1,
                    a = -1,
                    c = 0,
                    d = 0,
                    h = t,
                    m = null;
                t: for (; ;) {
                    for (var A; h !== n || i !== 0 && h.nodeType !== 3 || (l = o + i), h !== s || r !== 0 && h.nodeType !== 3 || (a = o + r), h.nodeType === 3 && (o += h.nodeValue.length), (A = h.firstChild) !== null;) m = h, h = A;
                    for (; ;) {
                        if (h === t) break t;
                        if (m === n && ++c === i && (l = o), m === s && ++d === r && (a = o), (A = h.nextSibling) !== null) break;
                        h = m, m = h.parentNode
                    }
                    h = A
                }
                n = l === -1 || a === -1 ? null : {
                    start: l,
                    end: a
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (th = {
        focusedElem: t,
        selectionRange: n
    }, wc = !1, K = e; K !== null;)
        if (e = K, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, K = t;
        else
            for (; K !== null;) {
                e = K;
                try {
                    var k = e.alternate;
                    if (e.flags & 1024) switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (k !== null) {
                                var x = k.memoizedProps,
                                    C = k.memoizedState,
                                    y = e.stateNode,
                                    w = y.getSnapshotBeforeUpdate(e.elementType === e.type ? x : xn(e.type, x), C);
                                y.__reactInternalSnapshotBeforeUpdate = w
                            }
                            break;
                        case 3:
                            var E = e.stateNode.containerInfo;
                            E.nodeType === 1 ? E.textContent = "" : E.nodeType === 9 && E.documentElement && E.removeChild(E.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(z(163))
                    }
                } catch (B) {
                    De(e, e.return, B)
                }
                if (t = e.sibling, t !== null) {
                    t.return = e.return, K = t;
                    break
                }
                K = e.return
            }
    return k = T0, T0 = !1, k
}

function aa(t, e, n) {
    var r = e.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & t) === t) {
                var s = i.destroy;
                i.destroy = void 0, s !== void 0 && yh(e, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}

function pf(t, e) {
    if (e = e.updateQueue, e = e !== null ? e.lastEffect : null, e !== null) {
        var n = e = e.next;
        do {
            if ((n.tag & t) === t) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== e)
    }
}

function wh(t) {
    var e = t.ref;
    if (e !== null) {
        var n = t.stateNode;
        switch (t.tag) {
            case 5:
                t = n;
                break;
            default:
                t = n
        }
        typeof e == "function" ? e(t) : e.current = t
    }
}

function s1(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, s1(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && (delete e[Zn], delete e[ba], delete e[ih], delete e[PE], delete e[BE])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
}

function o1(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4
}

function O0(t) {
    e: for (; ;) {
        for (; t.sibling === null;) {
            if (t.return === null || o1(t.return)) return null;
            t = t.return
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
            if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
            t.child.return = t, t = t.child
        }
        if (!(t.flags & 2)) return t.stateNode
    }
}

function Ah(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6) t = t.stateNode, e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode, e.insertBefore(t, n)) : (e = n, e.appendChild(t)), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = xc));
    else if (r !== 4 && (t = t.child, t !== null))
        for (Ah(t, e, n), t = t.sibling; t !== null;) Ah(t, e, n), t = t.sibling
}

function vh(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (r !== 4 && (t = t.child, t !== null))
        for (vh(t, e, n), t = t.sibling; t !== null;) vh(t, e, n), t = t.sibling
}
var nt = null,
    Pn = !1;

function Hr(t, e, n) {
    for (n = n.child; n !== null;) l1(t, e, n), n = n.sibling
}

function l1(t, e, n) {
    if (tr && typeof tr.onCommitFiberUnmount == "function") try {
        tr.onCommitFiberUnmount(of, n)
    } catch { }
    switch (n.tag) {
        case 5:
            mt || oo(n, e);
        case 6:
            var r = nt,
                i = Pn;
            nt = null, Hr(t, e, n), nt = r, Pn = i, nt !== null && (Pn ? (t = nt, n = n.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : nt.removeChild(n.stateNode));
            break;
        case 18:
            nt !== null && (Pn ? (t = nt, n = n.stateNode, t.nodeType === 8 ? nd(t.parentNode, n) : t.nodeType === 1 && nd(t, n), wa(t)) : nd(nt, n.stateNode));
            break;
        case 4:
            r = nt, i = Pn, nt = n.stateNode.containerInfo, Pn = !0, Hr(t, e, n), nt = r, Pn = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!mt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var s = i,
                        o = s.destroy;
                    s = s.tag, o !== void 0 && (s & 2 || s & 4) && yh(n, e, o), i = i.next
                } while (i !== r)
            }
            Hr(t, e, n);
            break;
        case 1:
            if (!mt && (oo(n, e), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (l) {
                De(n, e, l)
            }
            Hr(t, e, n);
            break;
        case 21:
            Hr(t, e, n);
            break;
        case 22:
            n.mode & 1 ? (mt = (r = mt) || n.memoizedState !== null, Hr(t, e, n), mt = r) : Hr(t, e, n);
            break;
        default:
            Hr(t, e, n)
    }
}

function F0(t) {
    var e = t.updateQueue;
    if (e !== null) {
        t.updateQueue = null;
        var n = t.stateNode;
        n === null && (n = t.stateNode = new VE), e.forEach(function (r) {
            var i = t2.bind(null, t, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function wn(t, e) {
    var n = e.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = t,
                    o = e,
                    l = o;
                e: for (; l !== null;) {
                    switch (l.tag) {
                        case 5:
                            nt = l.stateNode, Pn = !1;
                            break e;
                        case 3:
                            nt = l.stateNode.containerInfo, Pn = !0;
                            break e;
                        case 4:
                            nt = l.stateNode.containerInfo, Pn = !0;
                            break e
                    }
                    l = l.return
                }
                if (nt === null) throw Error(z(160));
                l1(s, o, i), nt = null, Pn = !1;
                var a = i.alternate;
                a !== null && (a.return = null), i.return = null
            } catch (c) {
                De(i, e, c)
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null;) a1(e, t), e = e.sibling
}

function a1(t, e) {
    var n = t.alternate,
        r = t.flags;
    switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (wn(e, t), _n(t), r & 4) {
                try {
                    aa(3, t, t.return), pf(3, t)
                } catch (x) {
                    De(t, t.return, x)
                }
                try {
                    aa(5, t, t.return)
                } catch (x) {
                    De(t, t.return, x)
                }
            }
            break;
        case 1:
            wn(e, t), _n(t), r & 512 && n !== null && oo(n, n.return);
            break;
        case 5:
            if (wn(e, t), _n(t), r & 512 && n !== null && oo(n, n.return), t.flags & 32) {
                var i = t.stateNode;
                try {
                    pa(i, "")
                } catch (x) {
                    De(t, t.return, x)
                }
            }
            if (r & 4 && (i = t.stateNode, i != null)) {
                var s = t.memoizedProps,
                    o = n !== null ? n.memoizedProps : s,
                    l = t.type,
                    a = t.updateQueue;
                if (t.updateQueue = null, a !== null) try {
                    l === "input" && s.type === "radio" && s.name != null && Iy(i, s), jd(l, o);
                    var c = jd(l, s);
                    for (o = 0; o < a.length; o += 2) {
                        var d = a[o],
                            h = a[o + 1];
                        d === "style" ? Uy(i, h) : d === "dangerouslySetInnerHTML" ? Oy(i, h) : d === "children" ? pa(i, h) : wp(i, d, h, c)
                    }
                    switch (l) {
                        case "input":
                            _d(i, s);
                            break;
                        case "textarea":
                            Ry(i, s);
                            break;
                        case "select":
                            var m = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!s.multiple;
                            var A = s.value;
                            A != null ? go(i, !!s.multiple, A, !1) : m !== !!s.multiple && (s.defaultValue != null ? go(i, !!s.multiple, s.defaultValue, !0) : go(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[ba] = s
                } catch (x) {
                    De(t, t.return, x)
                }
            }
            break;
        case 6:
            if (wn(e, t), _n(t), r & 4) {
                if (t.stateNode === null) throw Error(z(162));
                i = t.stateNode, s = t.memoizedProps;
                try {
                    i.nodeValue = s
                } catch (x) {
                    De(t, t.return, x)
                }
            }
            break;
        case 3:
            if (wn(e, t), _n(t), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                wa(e.containerInfo)
            } catch (x) {
                De(t, t.return, x)
            }
            break;
        case 4:
            wn(e, t), _n(t);
            break;
        case 13:
            wn(e, t), _n(t), i = t.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (Zp = ze())), r & 4 && F0(t);
            break;
        case 22:
            if (d = n !== null && n.memoizedState !== null, t.mode & 1 ? (mt = (c = mt) || d, wn(e, t), mt = c) : wn(e, t), _n(t), r & 8192) {
                if (c = t.memoizedState !== null, (t.stateNode.isHidden = c) && !d && t.mode & 1)
                    for (K = t, d = t.child; d !== null;) {
                        for (h = K = d; K !== null;) {
                            switch (m = K, A = m.child, m.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    aa(4, m, m.return);
                                    break;
                                case 1:
                                    oo(m, m.return);
                                    var k = m.stateNode;
                                    if (typeof k.componentWillUnmount == "function") {
                                        r = m, n = m.return;
                                        try {
                                            e = r, k.props = e.memoizedProps, k.state = e.memoizedState, k.componentWillUnmount()
                                        } catch (x) {
                                            De(r, n, x)
                                        }
                                    }
                                    break;
                                case 5:
                                    oo(m, m.return);
                                    break;
                                case 22:
                                    if (m.memoizedState !== null) {
                                        L0(h);
                                        continue
                                    }
                            }
                            A !== null ? (A.return = m, K = A) : L0(h)
                        }
                        d = d.sibling
                    }
                e: for (d = null, h = t; ;) {
                    if (h.tag === 5) {
                        if (d === null) {
                            d = h;
                            try {
                                i = h.stateNode, c ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = h.stateNode, a = h.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = Fy("display", o))
                            } catch (x) {
                                De(t, t.return, x)
                            }
                        }
                    } else if (h.tag === 6) {
                        if (d === null) try {
                            h.stateNode.nodeValue = c ? "" : h.memoizedProps
                        } catch (x) {
                            De(t, t.return, x)
                        }
                    } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === t) && h.child !== null) {
                        h.child.return = h, h = h.child;
                        continue
                    }
                    if (h === t) break e;
                    for (; h.sibling === null;) {
                        if (h.return === null || h.return === t) break e;
                        d === h && (d = null), h = h.return
                    }
                    d === h && (d = null), h.sibling.return = h.return, h = h.sibling
                }
            }
            break;
        case 19:
            wn(e, t), _n(t), r & 4 && F0(t);
            break;
        case 21:
            break;
        default:
            wn(e, t), _n(t)
    }
}

function _n(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var n = t.return; n !== null;) {
                    if (o1(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(z(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (pa(i, ""), r.flags &= -33);
                    var s = O0(t);
                    vh(t, s, i);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        l = O0(t);
                    Ah(t, l, o);
                    break;
                default:
                    throw Error(z(161))
            }
        }
        catch (a) {
            De(t, t.return, a)
        }
        t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
}

function KE(t, e, n) {
    K = t, u1(t)
}

function u1(t, e, n) {
    for (var r = (t.mode & 1) !== 0; K !== null;) {
        var i = K,
            s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || Pu;
            if (!o) {
                var l = i.alternate,
                    a = l !== null && l.memoizedState !== null || mt;
                l = Pu;
                var c = mt;
                if (Pu = o, (mt = a) && !c)
                    for (K = i; K !== null;) o = K, a = o.child, o.tag === 22 && o.memoizedState !== null ? D0(i) : a !== null ? (a.return = o, K = a) : D0(i);
                for (; s !== null;) K = s, u1(s), s = s.sibling;
                K = i, Pu = l, mt = c
            }
            U0(t)
        } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, K = s) : U0(t)
    }
}

function U0(t) {
    for (; K !== null;) {
        var e = K;
        if (e.flags & 8772) {
            var n = e.alternate;
            try {
                if (e.flags & 8772) switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        mt || pf(5, e);
                        break;
                    case 1:
                        var r = e.stateNode;
                        if (e.flags & 4 && !mt)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = e.elementType === e.type ? n.memoizedProps : xn(e.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = e.updateQueue;
                        s !== null && A0(e, s, r);
                        break;
                    case 3:
                        var o = e.updateQueue;
                        if (o !== null) {
                            if (n = null, e.child !== null) switch (e.child.tag) {
                                case 5:
                                    n = e.child.stateNode;
                                    break;
                                case 1:
                                    n = e.child.stateNode
                            }
                            A0(e, o, n)
                        }
                        break;
                    case 5:
                        var l = e.stateNode;
                        if (n === null && e.flags & 4) {
                            n = l;
                            var a = e.memoizedProps;
                            switch (e.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    a.autoFocus && n.focus();
                                    break;
                                case "img":
                                    a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (e.memoizedState === null) {
                            var c = e.alternate;
                            if (c !== null) {
                                var d = c.memoizedState;
                                if (d !== null) {
                                    var h = d.dehydrated;
                                    h !== null && wa(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(z(163))
                }
                mt || e.flags & 512 && wh(e)
            } catch (m) {
                De(e, e.return, m)
            }
        }
        if (e === t) {
            K = null;
            break
        }
        if (n = e.sibling, n !== null) {
            n.return = e.return, K = n;
            break
        }
        K = e.return
    }
}

function L0(t) {
    for (; K !== null;) {
        var e = K;
        if (e === t) {
            K = null;
            break
        }
        var n = e.sibling;
        if (n !== null) {
            n.return = e.return, K = n;
            break
        }
        K = e.return
    }
}

function D0(t) {
    for (; K !== null;) {
        var e = K;
        try {
            switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    var n = e.return;
                    try {
                        pf(4, e)
                    } catch (a) {
                        De(e, n, a)
                    }
                    break;
                case 1:
                    var r = e.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = e.return;
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            De(e, i, a)
                        }
                    }
                    var s = e.return;
                    try {
                        wh(e)
                    } catch (a) {
                        De(e, s, a)
                    }
                    break;
                case 5:
                    var o = e.return;
                    try {
                        wh(e)
                    } catch (a) {
                        De(e, o, a)
                    }
            }
        } catch (a) {
            De(e, e.return, a)
        }
        if (e === t) {
            K = null;
            break
        }
        var l = e.sibling;
        if (l !== null) {
            l.return = e.return, K = l;
            break
        }
        K = e.return
    }
}
var WE = Math.ceil,
    Tc = _r.ReactCurrentDispatcher,
    Yp = _r.ReactCurrentOwner,
    pn = _r.ReactCurrentBatchConfig,
    he = 0,
    et = null,
    je = null,
    st = 0,
    Wt = 0,
    lo = Fi(0),
    We = 0,
    Ba = null,
    Bs = 0,
    gf = 0,
    $p = 0,
    ua = null,
    Ft = null,
    Zp = 0,
    wl = 1 / 0,
    ar = null,
    Oc = !1,
    xh = null,
    Ni = null,
    Bu = !1,
    Ai = null,
    Fc = 0,
    ca = 0,
    Eh = null,
    Xu = -1,
    qu = 0;

function Pt() {
    return he & 6 ? ze() : Xu !== -1 ? Xu : Xu = ze()
}

function Si(t) {
    return t.mode & 1 ? he & 2 && st !== 0 ? st & -st : RE.transition !== null ? (qu === 0 && (qu = Ky()), qu) : (t = me, t !== 0 || (t = window.event, t = t === void 0 ? 16 : ew(t.type)), t) : 1
}

function Tn(t, e, n, r) {
    if (50 < ca) throw ca = 0, Eh = null, Error(z(185));
    qa(t, n, r), (!(he & 2) || t !== et) && (t === et && (!(he & 2) && (gf |= n), We === 4 && ei(t, st)), _t(t, r), n === 1 && he === 0 && !(e.mode & 1) && (wl = ze() + 500, ff && Ui()))
}

function _t(t, e) {
    var n = t.callbackNode;
    Rx(t, e);
    var r = yc(t, t === et ? st : 0);
    if (r === 0) n !== null && Jg(n), t.callbackNode = null, t.callbackPriority = 0;
    else if (e = r & -r, t.callbackPriority !== e) {
        if (n != null && Jg(n), e === 1) t.tag === 0 ? IE(M0.bind(null, t)) : Aw(M0.bind(null, t)), SE(function () {
            !(he & 6) && Ui()
        }), n = null;
        else {
            switch (Wy(r)) {
                case 1:
                    n = bp;
                    break;
                case 4:
                    n = Vy;
                    break;
                case 16:
                    n = mc;
                    break;
                case 536870912:
                    n = Jy;
                    break;
                default:
                    n = mc
            }
            n = y1(n, c1.bind(null, t))
        }
        t.callbackPriority = e, t.callbackNode = n
    }
}

function c1(t, e) {
    if (Xu = -1, qu = 0, he & 6) throw Error(z(327));
    var n = t.callbackNode;
    if (vo() && t.callbackNode !== n) return null;
    var r = yc(t, t === et ? st : 0);
    if (r === 0) return null;
    if (r & 30 || r & t.expiredLanes || e) e = Uc(t, r);
    else {
        e = r;
        var i = he;
        he |= 2;
        var s = d1();
        (et !== t || st !== e) && (ar = null, wl = ze() + 500, Es(t, e));
        do try {
            ZE();
            break
        } catch (l) {
            f1(t, l)
        }
        while (!0);
        Lp(), Tc.current = s, he = i, je !== null ? e = 0 : (et = null, st = 0, e = We)
    }
    if (e !== 0) {
        if (e === 2 && (i = Yd(t), i !== 0 && (r = i, e = bh(t, i))), e === 1) throw n = Ba, Es(t, 0), ei(t, r), _t(t, ze()), n;
        if (e === 6) ei(t, r);
        else {
            if (i = t.current.alternate, !(r & 30) && !YE(i) && (e = Uc(t, r), e === 2 && (s = Yd(t), s !== 0 && (r = s, e = bh(t, s))), e === 1)) throw n = Ba, Es(t, 0), ei(t, r), _t(t, ze()), n;
            switch (t.finishedWork = i, t.finishedLanes = r, e) {
                case 0:
                case 1:
                    throw Error(z(345));
                case 2:
                    zi(t, Ft, ar);
                    break;
                case 3:
                    if (ei(t, r), (r & 130023424) === r && (e = Zp + 500 - ze(), 10 < e)) {
                        if (yc(t, 0) !== 0) break;
                        if (i = t.suspendedLanes, (i & r) !== r) {
                            Pt(), t.pingedLanes |= t.suspendedLanes & i;
                            break
                        }
                        t.timeoutHandle = rh(zi.bind(null, t, Ft, ar), e);
                        break
                    }
                    zi(t, Ft, ar);
                    break;
                case 4:
                    if (ei(t, r), (r & 4194240) === r) break;
                    for (e = t.eventTimes, i = -1; 0 < r;) {
                        var o = 31 - Rn(r);
                        s = 1 << o, o = e[o], o > i && (i = o), r &= ~s
                    }
                    if (r = i, r = ze() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * WE(r / 1960)) - r, 10 < r) {
                        t.timeoutHandle = rh(zi.bind(null, t, Ft, ar), r);
                        break
                    }
                    zi(t, Ft, ar);
                    break;
                case 5:
                    zi(t, Ft, ar);
                    break;
                default:
                    throw Error(z(329))
            }
        }
    }
    return _t(t, ze()), t.callbackNode === n ? c1.bind(null, t) : null
}

function bh(t, e) {
    var n = ua;
    return t.current.memoizedState.isDehydrated && (Es(t, e).flags |= 256), t = Uc(t, e), t !== 2 && (e = Ft, Ft = n, e !== null && kh(e)), t
}

function kh(t) {
    Ft === null ? Ft = t : Ft.push.apply(Ft, t)
}

function YE(t) {
    for (var e = t; ;) {
        if (e.flags & 16384) {
            var n = e.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!On(s(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = e.child, e.subtreeFlags & 16384 && n !== null) n.return = e, e = n;
        else {
            if (e === t) break;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) return !0;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
    }
    return !0
}

function ei(t, e) {
    for (e &= ~$p, e &= ~gf, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e;) {
        var n = 31 - Rn(e),
            r = 1 << n;
        t[n] = -1, e &= ~r
    }
}

function M0(t) {
    if (he & 6) throw Error(z(327));
    vo();
    var e = yc(t, 0);
    if (!(e & 1)) return _t(t, ze()), null;
    var n = Uc(t, e);
    if (t.tag !== 0 && n === 2) {
        var r = Yd(t);
        r !== 0 && (e = r, n = bh(t, r))
    }
    if (n === 1) throw n = Ba, Es(t, 0), ei(t, e), _t(t, ze()), n;
    if (n === 6) throw Error(z(345));
    return t.finishedWork = t.current.alternate, t.finishedLanes = e, zi(t, Ft, ar), _t(t, ze()), null
}

function Xp(t, e) {
    var n = he;
    he |= 1;
    try {
        return t(e)
    } finally {
        he = n, he === 0 && (wl = ze() + 500, ff && Ui())
    }
}

function Is(t) {
    Ai !== null && Ai.tag === 0 && !(he & 6) && vo();
    var e = he;
    he |= 1;
    var n = pn.transition,
        r = me;
    try {
        if (pn.transition = null, me = 1, t) return t()
    } finally {
        me = r, pn.transition = n, he = e, !(he & 6) && Ui()
    }
}

function qp() {
    Wt = lo.current, Se(lo)
}

function Es(t, e) {
    t.finishedWork = null, t.finishedLanes = 0;
    var n = t.timeoutHandle;
    if (n !== -1 && (t.timeoutHandle = -1, NE(n)), je !== null)
        for (n = je.return; n !== null;) {
            var r = n;
            switch (Op(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Ec();
                    break;
                case 3:
                    ml(), Se(Dt), Se(wt), Hp();
                    break;
                case 5:
                    Gp(r);
                    break;
                case 4:
                    ml();
                    break;
                case 13:
                    Se(Be);
                    break;
                case 19:
                    Se(Be);
                    break;
                case 10:
                    Dp(r.type._context);
                    break;
                case 22:
                case 23:
                    qp()
            }
            n = n.return
        }
    if (et = t, je = t = Ci(t.current, null), st = Wt = e, We = 0, Ba = null, $p = gf = Bs = 0, Ft = ua = null, $i !== null) {
        for (e = 0; e < $i.length; e++)
            if (n = $i[e], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = i, r.next = o
                }
                n.pending = r
            }
        $i = null
    }
    return t
}

function f1(t, e) {
    do {
        var n = je;
        try {
            if (Lp(), Yu.current = Rc, Ic) {
                for (var r = Re.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                Ic = !1
            }
            if (Ps = 0, Ze = Ke = Re = null, la = !1, Sa = 0, Yp.current = null, n === null || n.return === null) {
                We = 1, Ba = e, je = null;
                break
            }
            e: {
                var s = t,
                    o = n.return,
                    l = n,
                    a = e;
                if (e = st, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                    var c = a,
                        d = l,
                        h = d.tag;
                    if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var m = d.alternate;
                        m ? (d.updateQueue = m.updateQueue, d.memoizedState = m.memoizedState, d.lanes = m.lanes) : (d.updateQueue = null, d.memoizedState = null)
                    }
                    var A = N0(o);
                    if (A !== null) {
                        A.flags &= -257, S0(A, o, l, s, e), A.mode & 1 && k0(s, c, e), e = A, a = c;
                        var k = e.updateQueue;
                        if (k === null) {
                            var x = new Set;
                            x.add(a), e.updateQueue = x
                        } else k.add(a);
                        break e
                    } else {
                        if (!(e & 1)) {
                            k0(s, c, e), eg();
                            break e
                        }
                        a = Error(z(426))
                    }
                } else if (Pe && l.mode & 1) {
                    var C = N0(o);
                    if (C !== null) {
                        !(C.flags & 65536) && (C.flags |= 256), S0(C, o, l, s, e), Fp(yl(a, l));
                        break e
                    }
                }
                s = a = yl(a, l),
                    We !== 4 && (We = 2),
                    ua === null ? ua = [s] : ua.push(s),
                    s = o; do {
                        switch (s.tag) {
                            case 3:
                                s.flags |= 65536, e &= -e, s.lanes |= e;
                                var y = Ww(s, a, e);
                                w0(s, y);
                                break e;
                            case 1:
                                l = a;
                                var w = s.type,
                                    E = s.stateNode;
                                if (!(s.flags & 128) && (typeof w.getDerivedStateFromError == "function" || E !== null && typeof E.componentDidCatch == "function" && (Ni === null || !Ni.has(E)))) {
                                    s.flags |= 65536, e &= -e, s.lanes |= e;
                                    var B = Yw(s, l, e);
                                    w0(s, B);
                                    break e
                                }
                        }
                        s = s.return
                    } while (s !== null)
            }
            p1(n)
        } catch (T) {
            e = T, je === n && n !== null && (je = n = n.return);
            continue
        }
        break
    } while (!0)
}

function d1() {
    var t = Tc.current;
    return Tc.current = Rc, t === null ? Rc : t
}

function eg() {
    (We === 0 || We === 3 || We === 2) && (We = 4), et === null || !(Bs & 268435455) && !(gf & 268435455) || ei(et, st)
}

function Uc(t, e) {
    var n = he;
    he |= 2;
    var r = d1();
    (et !== t || st !== e) && (ar = null, Es(t, e));
    do try {
        $E();
        break
    } catch (i) {
        f1(t, i)
    }
    while (!0);
    if (Lp(), he = n, Tc.current = r, je !== null) throw Error(z(261));
    return et = null, st = 0, We
}

function $E() {
    for (; je !== null;) h1(je)
}

function ZE() {
    for (; je !== null && !Ex();) h1(je)
}

function h1(t) {
    var e = m1(t.alternate, t, Wt);
    t.memoizedProps = t.pendingProps, e === null ? p1(t) : je = e, Yp.current = null
}

function p1(t) {
    var e = t;
    do {
        var n = e.alternate;
        if (t = e.return, e.flags & 32768) {
            if (n = jE(n, e), n !== null) {
                n.flags &= 32767, je = n;
                return
            }
            if (t !== null) t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
            else {
                We = 6, je = null;
                return
            }
        } else if (n = QE(n, e, Wt), n !== null) {
            je = n;
            return
        }
        if (e = e.sibling, e !== null) {
            je = e;
            return
        }
        je = e = t
    } while (e !== null);
    We === 0 && (We = 5)
}

function zi(t, e, n) {
    var r = me,
        i = pn.transition;
    try {
        pn.transition = null, me = 1, XE(t, e, n, r)
    } finally {
        pn.transition = i, me = r
    }
    return null
}

function XE(t, e, n, r) {
    do vo(); while (Ai !== null);
    if (he & 6) throw Error(z(327));
    n = t.finishedWork;
    var i = t.finishedLanes;
    if (n === null) return null;
    if (t.finishedWork = null, t.finishedLanes = 0, n === t.current) throw Error(z(177));
    t.callbackNode = null, t.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (Tx(t, s), t === et && (je = et = null, st = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Bu || (Bu = !0, y1(mc, function () {
        return vo(), null
    })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
        s = pn.transition, pn.transition = null;
        var o = me;
        me = 1;
        var l = he;
        he |= 4, Yp.current = null, JE(t, n), a1(n, t), wE(th), wc = !!eh, th = eh = null, t.current = n, KE(n), bx(), he = l, me = o, pn.transition = s
    } else t.current = n;
    if (Bu && (Bu = !1, Ai = t, Fc = i), s = t.pendingLanes, s === 0 && (Ni = null), Sx(n.stateNode), _t(t, ze()), e !== null)
        for (r = t.onRecoverableError, n = 0; n < e.length; n++) i = e[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (Oc) throw Oc = !1, t = xh, xh = null, t;
    return Fc & 1 && t.tag !== 0 && vo(), s = t.pendingLanes, s & 1 ? t === Eh ? ca++ : (ca = 0, Eh = t) : ca = 0, Ui(), null
}

function vo() {
    if (Ai !== null) {
        var t = Wy(Fc),
            e = pn.transition,
            n = me;
        try {
            if (pn.transition = null, me = 16 > t ? 16 : t, Ai === null) var r = !1;
            else {
                if (t = Ai, Ai = null, Fc = 0, he & 6) throw Error(z(331));
                var i = he;
                for (he |= 4, K = t.current; K !== null;) {
                    var s = K,
                        o = s.child;
                    if (K.flags & 16) {
                        var l = s.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var c = l[a];
                                for (K = c; K !== null;) {
                                    var d = K;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            aa(8, d, s)
                                    }
                                    var h = d.child;
                                    if (h !== null) h.return = d, K = h;
                                    else
                                        for (; K !== null;) {
                                            d = K;
                                            var m = d.sibling,
                                                A = d.return;
                                            if (s1(d), d === c) {
                                                K = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = A, K = m;
                                                break
                                            }
                                            K = A
                                        }
                                }
                            }
                            var k = s.alternate;
                            if (k !== null) {
                                var x = k.child;
                                if (x !== null) {
                                    k.child = null;
                                    do {
                                        var C = x.sibling;
                                        x.sibling = null, x = C
                                    } while (x !== null)
                                }
                            }
                            K = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null) o.return = s, K = o;
                    else e: for (; K !== null;) {
                        if (s = K, s.flags & 2048) switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                aa(9, s, s.return)
                        }
                        var y = s.sibling;
                        if (y !== null) {
                            y.return = s.return, K = y;
                            break e
                        }
                        K = s.return
                    }
                }
                var w = t.current;
                for (K = w; K !== null;) {
                    o = K;
                    var E = o.child;
                    if (o.subtreeFlags & 2064 && E !== null) E.return = o, K = E;
                    else e: for (o = w; K !== null;) {
                        if (l = K, l.flags & 2048) try {
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    pf(9, l)
                            }
                        } catch (T) {
                            De(l, l.return, T)
                        }
                        if (l === o) {
                            K = null;
                            break e
                        }
                        var B = l.sibling;
                        if (B !== null) {
                            B.return = l.return, K = B;
                            break e
                        }
                        K = l.return
                    }
                }
                if (he = i, Ui(), tr && typeof tr.onPostCommitFiberRoot == "function") try {
                    tr.onPostCommitFiberRoot(of, t)
                } catch { }
                r = !0
            }
            return r
        } finally {
            me = n, pn.transition = e
        }
    }
    return !1
}

function _0(t, e, n) {
    e = yl(n, e), e = Ww(t, e, 1), t = ki(t, e, 1), e = Pt(), t !== null && (qa(t, 1, e), _t(t, e))
}

function De(t, e, n) {
    if (t.tag === 3) _0(t, t, n);
    else
        for (; e !== null;) {
            if (e.tag === 3) {
                _0(e, t, n);
                break
            } else if (e.tag === 1) {
                var r = e.stateNode;
                if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ni === null || !Ni.has(r))) {
                    t = yl(n, t), t = Yw(e, t, 1), e = ki(e, t, 1), t = Pt(), e !== null && (qa(e, 1, t), _t(e, t));
                    break
                }
            }
            e = e.return
        }
}

function qE(t, e, n) {
    var r = t.pingCache;
    r !== null && r.delete(e), e = Pt(), t.pingedLanes |= t.suspendedLanes & n, et === t && (st & n) === n && (We === 4 || We === 3 && (st & 130023424) === st && 500 > ze() - Zp ? Es(t, 0) : $p |= n), _t(t, e)
}

function g1(t, e) {
    e === 0 && (t.mode & 1 ? (e = Au, Au <<= 1, !(Au & 130023424) && (Au = 4194304)) : e = 1);
    var n = Pt();
    t = Ur(t, e), t !== null && (qa(t, e, n), _t(t, n))
}

function e2(t) {
    var e = t.memoizedState,
        n = 0;
    e !== null && (n = e.retryLane), g1(t, n)
}

function t2(t, e) {
    var n = 0;
    switch (t.tag) {
        case 13:
            var r = t.stateNode,
                i = t.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = t.stateNode;
            break;
        default:
            throw Error(z(314))
    }
    r !== null && r.delete(e), g1(t, n)
}
var m1;
m1 = function (t, e, n) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || Dt.current) Lt = !0;
        else {
            if (!(t.lanes & n) && !(e.flags & 128)) return Lt = !1, HE(t, e, n);
            Lt = !!(t.flags & 131072)
        }
    else Lt = !1, Pe && e.flags & 1048576 && vw(e, Nc, e.index);
    switch (e.lanes = 0, e.tag) {
        case 2:
            var r = e.type;
            Zu(t, e), t = e.pendingProps;
            var i = hl(e, wt.current);
            Ao(e, n), i = jp(null, e, r, t, i, n);
            var s = Vp();
            return e.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, Mt(r) ? (s = !0, bc(e)) : s = !1, e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, _p(e), i.updater = hf, e.stateNode = i, i._reactInternals = e, ch(e, r, t, n), e = hh(null, e, r, !0, s, n)) : (e.tag = 0, Pe && s && Tp(e), xt(null, e, i, n), e = e.child), e;
        case 16:
            r = e.elementType;
            e: {
                switch (Zu(t, e), t = e.pendingProps, i = r._init, r = i(r._payload), e.type = r, i = e.tag = r2(r), t = xn(r, t), i) {
                    case 0:
                        e = dh(null, e, r, t, n);
                        break e;
                    case 1:
                        e = B0(null, e, r, t, n);
                        break e;
                    case 11:
                        e = C0(null, e, r, t, n);
                        break e;
                    case 14:
                        e = P0(null, e, r, xn(r.type, t), n);
                        break e
                }
                throw Error(z(306, r, ""))
            }
            return e;
        case 0:
            return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : xn(r, i), dh(t, e, r, i, n);
        case 1:
            return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : xn(r, i), B0(t, e, r, i, n);
        case 3:
            e: {
                if (qw(e), t === null) throw Error(z(387)); r = e.pendingProps,
                    s = e.memoizedState,
                    i = s.element,
                    Sw(t, e),
                    Pc(e, r, null, n);
                var o = e.memoizedState;
                if (r = o.element, s.isDehydrated)
                    if (s = {
                        element: r,
                        isDehydrated: !1,
                        cache: o.cache,
                        pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                        transitions: o.transitions
                    }, e.updateQueue.baseState = s, e.memoizedState = s, e.flags & 256) {
                        i = yl(Error(z(423)), e), e = I0(t, e, r, n, i);
                        break e
                    } else if (r !== i) {
                        i = yl(Error(z(424)), e), e = I0(t, e, r, n, i);
                        break e
                    } else
                        for (Yt = bi(e.stateNode.containerInfo.firstChild), $t = e, Pe = !0, Bn = null, n = kw(e, null, r, n), e.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (pl(), r === i) {
                        e = Lr(t, e, n);
                        break e
                    }
                    xt(t, e, r, n)
                }
                e = e.child
            }
            return e;
        case 5:
            return Cw(e), t === null && lh(e), r = e.type, i = e.pendingProps, s = t !== null ? t.memoizedProps : null, o = i.children, nh(r, i) ? o = null : s !== null && nh(r, s) && (e.flags |= 32), Xw(t, e), xt(t, e, o, n), e.child;
        case 6:
            return t === null && lh(e), null;
        case 13:
            return e1(t, e, n);
        case 4:
            return zp(e, e.stateNode.containerInfo), r = e.pendingProps, t === null ? e.child = gl(e, null, r, n) : xt(t, e, r, n), e.child;
        case 11:
            return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : xn(r, i), C0(t, e, r, i, n);
        case 7:
            return xt(t, e, e.pendingProps, n), e.child;
        case 8:
            return xt(t, e, e.pendingProps.children, n), e.child;
        case 12:
            return xt(t, e, e.pendingProps.children, n), e.child;
        case 10:
            e: {
                if (r = e.type._context, i = e.pendingProps, s = e.memoizedProps, o = i.value, xe(Sc, r._currentValue), r._currentValue = o, s !== null)
                    if (On(s.value, o)) {
                        if (s.children === i.children && !Dt.current) {
                            e = Lr(t, e, n);
                            break e
                        }
                    } else
                        for (s = e.child, s !== null && (s.return = e); s !== null;) {
                            var l = s.dependencies;
                            if (l !== null) {
                                o = s.child;
                                for (var a = l.firstContext; a !== null;) {
                                    if (a.context === r) {
                                        if (s.tag === 1) {
                                            a = Ir(-1, n & -n), a.tag = 2;
                                            var c = s.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var d = c.pending;
                                                d === null ? a.next = a : (a.next = d.next, d.next = a), c.pending = a
                                            }
                                        }
                                        s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), ah(s.return, n, e), l.lanes |= n;
                                        break
                                    }
                                    a = a.next
                                }
                            } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
                            else if (s.tag === 18) {
                                if (o = s.return, o === null) throw Error(z(341));
                                o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), ah(o, n, e), o = s.sibling
                            } else o = s.child;
                            if (o !== null) o.return = s;
                            else
                                for (o = s; o !== null;) {
                                    if (o === e) {
                                        o = null;
                                        break
                                    }
                                    if (s = o.sibling, s !== null) {
                                        s.return = o.return, o = s;
                                        break
                                    }
                                    o = o.return
                                }
                            s = o
                        }
                xt(t, e, i.children, n),
                    e = e.child
            }
            return e;
        case 9:
            return i = e.type, r = e.pendingProps.children, Ao(e, n), i = gn(i), r = r(i), e.flags |= 1, xt(t, e, r, n), e.child;
        case 14:
            return r = e.type, i = xn(r, e.pendingProps), i = xn(r.type, i), P0(t, e, r, i, n);
        case 15:
            return $w(t, e, e.type, e.pendingProps, n);
        case 17:
            return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : xn(r, i), Zu(t, e), e.tag = 1, Mt(r) ? (t = !0, bc(e)) : t = !1, Ao(e, n), Kw(e, r, i), ch(e, r, i, n), hh(null, e, r, !0, t, n);
        case 19:
            return t1(t, e, n);
        case 22:
            return Zw(t, e, n)
    }
    throw Error(z(156, e.tag))
};

function y1(t, e) {
    return jy(t, e)
}

function n2(t, e, n, r) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function hn(t, e, n, r) {
    return new n2(t, e, n, r)
}

function tg(t) {
    return t = t.prototype, !(!t || !t.isReactComponent)
}

function r2(t) {
    if (typeof t == "function") return tg(t) ? 1 : 0;
    if (t != null) {
        if (t = t.$$typeof, t === vp) return 11;
        if (t === xp) return 14
    }
    return 2
}

function Ci(t, e) {
    var n = t.alternate;
    return n === null ? (n = hn(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 14680064, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
    }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n
}

function ec(t, e, n, r, i, s) {
    var o = 2;
    if (r = t, typeof t == "function") tg(t) && (o = 1);
    else if (typeof t == "string") o = 5;
    else e: switch (t) {
        case Zs:
            return bs(n.children, i, s, e);
        case Ap:
            o = 8, i |= 8;
            break;
        case Fd:
            return t = hn(12, n, e, i | 2), t.elementType = Fd, t.lanes = s, t;
        case Ud:
            return t = hn(13, n, e, i), t.elementType = Ud, t.lanes = s, t;
        case Ld:
            return t = hn(19, n, e, i), t.elementType = Ld, t.lanes = s, t;
        case Cy:
            return mf(n, i, s, e);
        default:
            if (typeof t == "object" && t !== null) switch (t.$$typeof) {
                case Ny:
                    o = 10;
                    break e;
                case Sy:
                    o = 9;
                    break e;
                case vp:
                    o = 11;
                    break e;
                case xp:
                    o = 14;
                    break e;
                case $r:
                    o = 16, r = null;
                    break e
            }
            throw Error(z(130, t == null ? t : typeof t, ""))
    }
    return e = hn(o, n, e, i), e.elementType = t, e.type = r, e.lanes = s, e
}

function bs(t, e, n, r) {
    return t = hn(7, t, r, e), t.lanes = n, t
}

function mf(t, e, n, r) {
    return t = hn(22, t, r, e), t.elementType = Cy, t.lanes = n, t.stateNode = {
        isHidden: !1
    }, t
}

function cd(t, e, n) {
    return t = hn(6, t, null, e), t.lanes = n, t
}

function fd(t, e, n) {
    return e = hn(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
    }, e
}

function i2(t, e, n, r, i) {
    this.tag = e, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Vf(0), this.expirationTimes = Vf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vf(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function ng(t, e, n, r, i, s, o, l, a) {
    return t = new i2(t, e, n, l, a), e === 1 ? (e = 1, s === !0 && (e |= 8)) : e = 0, s = hn(3, null, null, e), t.current = s, s.stateNode = t, s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, _p(s), t
}

function s2(t, e, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: $s,
        key: r == null ? null : "" + r,
        children: t,
        containerInfo: e,
        implementation: n
    }
}

function w1(t) {
    if (!t) return Ii;
    t = t._reactInternals;
    e: {
        if (_s(t) !== t || t.tag !== 1) throw Error(z(170));
        var e = t; do {
            switch (e.tag) {
                case 3:
                    e = e.stateNode.context;
                    break e;
                case 1:
                    if (Mt(e.type)) {
                        e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            e = e.return
        } while (e !== null);
        throw Error(z(171))
    }
    if (t.tag === 1) {
        var n = t.type;
        if (Mt(n)) return ww(t, n, e)
    }
    return e
}

function A1(t, e, n, r, i, s, o, l, a) {
    return t = ng(n, r, !0, t, i, s, o, l, a), t.context = w1(null), n = t.current, r = Pt(), i = Si(n), s = Ir(r, i), s.callback = e & null, ki(n, s, i), t.current.lanes = i, qa(t, i, r), _t(t, r), t
}

function yf(t, e, n, r) {
    var i = e.current,
        s = Pt(),
        o = Si(i);
    return n = w1(n), e.context === null ? e.context = n : e.pendingContext = n, e = Ir(s, o), e.payload = {
        element: t
    }, r = r === void 0 ? null : r, r !== null && (e.callback = r), t = ki(i, e, o), t !== null && (Tn(t, i, o, s), Wu(t, i, o)), o
}

function Lc(t) {
    if (t = t.current, !t.child) return null;
    switch (t.child.tag) {
        case 5:
            return t.child.stateNode;
        default:
            return t.child.stateNode
    }
}

function z0(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e
    }
}

function rg(t, e) {
    z0(t, e), (t = t.alternate) && z0(t, e)
}

function o2() {
    return null
}
var v1 = typeof reportError == "function" ? reportError : function (t) {
    console.error(t)
};

function ig(t) {
    this._internalRoot = t
}
wf.prototype.render = ig.prototype.render = function (t) {
    var e = this._internalRoot;
    if (e === null) throw Error(z(409));
    yf(t, e, null, null)
};
wf.prototype.unmount = ig.prototype.unmount = function () {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Is(function () {
            yf(null, t, null, null)
        }), e[Fr] = null
    }
};

function wf(t) {
    this._internalRoot = t
}
wf.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
        var e = Zy();
        t = {
            blockedOn: null,
            target: t,
            priority: e
        };
        for (var n = 0; n < qr.length && e !== 0 && e < qr[n].priority; n++);
        qr.splice(n, 0, t), n === 0 && qy(t)
    }
};

function sg(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
}

function Af(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
}

function G0() { }

function l2(t, e, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function () {
                var c = Lc(o);
                s.call(c)
            }
        }
        var o = A1(e, r, t, 0, null, !1, !1, "", G0);
        return t._reactRootContainer = o, t[Fr] = o.current, xa(t.nodeType === 8 ? t.parentNode : t), Is(), o
    }
    for (; i = t.lastChild;) t.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function () {
            var c = Lc(a);
            l.call(c)
        }
    }
    var a = ng(t, 0, !1, null, null, !1, !1, "", G0);
    return t._reactRootContainer = a, t[Fr] = a.current, xa(t.nodeType === 8 ? t.parentNode : t), Is(function () {
        yf(e, a, n, r)
    }), a
}

function vf(t, e, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var l = i;
            i = function () {
                var a = Lc(o);
                l.call(a)
            }
        }
        yf(e, o, t, i)
    } else o = l2(n, e, t, i, r);
    return Lc(o)
}
Yy = function (t) {
    switch (t.tag) {
        case 3:
            var e = t.stateNode;
            if (e.current.memoizedState.isDehydrated) {
                var n = Wl(e.pendingLanes);
                n !== 0 && (kp(e, n | 1), _t(e, ze()), !(he & 6) && (wl = ze() + 500, Ui()))
            }
            break;
        case 13:
            Is(function () {
                var r = Ur(t, 1);
                if (r !== null) {
                    var i = Pt();
                    Tn(r, t, 1, i)
                }
            }), rg(t, 1)
    }
};
Np = function (t) {
    if (t.tag === 13) {
        var e = Ur(t, 134217728);
        if (e !== null) {
            var n = Pt();
            Tn(e, t, 134217728, n)
        }
        rg(t, 134217728)
    }
};
$y = function (t) {
    if (t.tag === 13) {
        var e = Si(t),
            n = Ur(t, e);
        if (n !== null) {
            var r = Pt();
            Tn(n, t, e, r)
        }
        rg(t, e)
    }
};
Zy = function () {
    return me
};
Xy = function (t, e) {
    var n = me;
    try {
        return me = t, e()
    } finally {
        me = n
    }
};
Jd = function (t, e, n) {
    switch (e) {
        case "input":
            if (_d(t, n), e = n.name, n.type === "radio" && e != null) {
                for (n = t; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) {
                    var r = n[e];
                    if (r !== t && r.form === t.form) {
                        var i = cf(r);
                        if (!i) throw Error(z(90));
                        By(r), _d(r, i)
                    }
                }
            }
            break;
        case "textarea":
            Ry(t, n);
            break;
        case "select":
            e = n.value, e != null && go(t, !!n.multiple, e, !1)
    }
};
My = Xp;
_y = Is;
var a2 = {
    usingClientEntryPoint: !1,
    Events: [tu, to, cf, Ly, Dy, Xp]
},
    zl = {
        findFiberByHostInstance: Yi,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    u2 = {
        bundleType: zl.bundleType,
        version: zl.version,
        rendererPackageName: zl.rendererPackageName,
        rendererConfig: zl.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: _r.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (t) {
            return t = Hy(t), t === null ? null : t.stateNode
        },
        findFiberByHostInstance: zl.findFiberByHostInstance || o2,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Iu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Iu.isDisabled && Iu.supportsFiber) try {
        of = Iu.inject(u2), tr = Iu
    } catch { }
}
Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = a2;
Xt.createPortal = function (t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!sg(e)) throw Error(z(200));
    return s2(t, e, null, n)
};
Xt.createRoot = function (t, e) {
    if (!sg(t)) throw Error(z(299));
    var n = !1,
        r = "",
        i = v1;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (r = e.identifierPrefix), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = ng(t, 1, !1, null, null, n, !1, r, i), t[Fr] = e.current, xa(t.nodeType === 8 ? t.parentNode : t), new ig(e)
};
Xt.findDOMNode = function (t) {
    if (t == null) return null;
    if (t.nodeType === 1) return t;
    var e = t._reactInternals;
    if (e === void 0) throw typeof t.render == "function" ? Error(z(188)) : (t = Object.keys(t).join(","), Error(z(268, t)));
    return t = Hy(e), t = t === null ? null : t.stateNode, t
};
Xt.flushSync = function (t) {
    return Is(t)
};
Xt.hydrate = function (t, e, n) {
    if (!Af(e)) throw Error(z(200));
    return vf(null, t, e, !0, n)
};
Xt.hydrateRoot = function (t, e, n) {
    if (!sg(t)) throw Error(z(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        s = "",
        o = v1;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), e = A1(e, null, t, 1, n & null, i, !1, s, o), t[Fr] = e.current, xa(t), r)
        for (t = 0; t < r.length; t++) n = r[t], i = n._getVersion, i = i(n._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, i] : e.mutableSourceEagerHydrationData.push(n, i);
    return new wf(e)
};
Xt.render = function (t, e, n) {
    if (!Af(e)) throw Error(z(200));
    return vf(null, t, e, !1, n)
};
Xt.unmountComponentAtNode = function (t) {
    if (!Af(t)) throw Error(z(40));
    return t._reactRootContainer ? (Is(function () {
        vf(null, null, t, !1, function () {
            t._reactRootContainer = null, t[Fr] = null
        })
    }), !0) : !1
};
Xt.unstable_batchedUpdates = Xp;
Xt.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
    if (!Af(n)) throw Error(z(200));
    if (t == null || t._reactInternals === void 0) throw Error(z(38));
    return vf(t, e, n, !1, r)
};
Xt.version = "18.3.1-next-f1338f8080-20240426";

function x1() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x1)
    } catch (t) {
        console.error(t)
    }
}
x1(), xy.exports = Xt;
var c2 = xy.exports,
    H0 = c2;
Td.createRoot = H0.createRoot, Td.hydrateRoot = H0.hydrateRoot;

function E1(t) {
    var e, n, r = "";
    if (typeof t == "string" || typeof t == "number") r += t;
    else if (typeof t == "object")
        if (Array.isArray(t)) {
            var i = t.length;
            for (e = 0; e < i; e++) t[e] && (n = E1(t[e])) && (r && (r += " "), r += n)
        } else
            for (n in t) t[n] && (r && (r += " "), r += n);
    return r
}

function f2() {
    for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++)(t = arguments[n]) && (e = E1(t)) && (r && (r += " "), r += e);
    return r
}
const og = "-",
    d2 = t => {
        const e = p2(t),
            {
                conflictingClassGroups: n,
                conflictingClassGroupModifiers: r
            } = t;
        return {
            getClassGroupId: o => {
                const l = o.split(og);
                return l[0] === "" && l.length !== 1 && l.shift(), b1(l, e) || h2(o)
            },
            getConflictingClassGroupIds: (o, l) => {
                const a = n[o] || [];
                return l && r[o] ? [...a, ...r[o]] : a
            }
        }
    },
    b1 = (t, e) => {
        var o;
        if (t.length === 0) return e.classGroupId;
        const n = t[0],
            r = e.nextPart.get(n),
            i = r ? b1(t.slice(1), r) : void 0;
        if (i) return i;
        if (e.validators.length === 0) return;
        const s = t.join(og);
        return (o = e.validators.find(({
            validator: l
        }) => l(s))) == null ? void 0 : o.classGroupId
    },
    Q0 = /^\[(.+)\]$/,
    h2 = t => {
        if (Q0.test(t)) {
            const e = Q0.exec(t)[1],
                n = e == null ? void 0 : e.substring(0, e.indexOf(":"));
            if (n) return "arbitrary.." + n
        }
    },
    p2 = t => {
        const {
            theme: e,
            prefix: n
        } = t, r = {
            nextPart: new Map,
            validators: []
        };
        return m2(Object.entries(t.classGroups), n).forEach(([s, o]) => {
            Nh(o, r, s, e)
        }), r
    },
    Nh = (t, e, n, r) => {
        t.forEach(i => {
            if (typeof i == "string") {
                const s = i === "" ? e : j0(e, i);
                s.classGroupId = n;
                return
            }
            if (typeof i == "function") {
                if (g2(i)) {
                    Nh(i(r), e, n, r);
                    return
                }
                e.validators.push({
                    validator: i,
                    classGroupId: n
                });
                return
            }
            Object.entries(i).forEach(([s, o]) => {
                Nh(o, j0(e, s), n, r)
            })
        })
    },
    j0 = (t, e) => {
        let n = t;
        return e.split(og).forEach(r => {
            n.nextPart.has(r) || n.nextPart.set(r, {
                nextPart: new Map,
                validators: []
            }), n = n.nextPart.get(r)
        }), n
    },
    g2 = t => t.isThemeGetter,
    m2 = (t, e) => e ? t.map(([n, r]) => {
        const i = r.map(s => typeof s == "string" ? e + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([o, l]) => [e + o, l])) : s);
        return [n, i]
    }) : t,
    y2 = t => {
        if (t < 1) return {
            get: () => { },
            set: () => { }
        };
        let e = 0,
            n = new Map,
            r = new Map;
        const i = (s, o) => {
            n.set(s, o), e++, e > t && (e = 0, r = n, n = new Map)
        };
        return {
            get(s) {
                let o = n.get(s);
                if (o !== void 0) return o;
                if ((o = r.get(s)) !== void 0) return i(s, o), o
            },
            set(s, o) {
                n.has(s) ? n.set(s, o) : i(s, o)
            }
        }
    },
    k1 = "!",
    w2 = t => {
        const {
            separator: e,
            experimentalParseClassName: n
        } = t, r = e.length === 1, i = e[0], s = e.length, o = l => {
            const a = [];
            let c = 0,
                d = 0,
                h;
            for (let C = 0; C < l.length; C++) {
                let y = l[C];
                if (c === 0) {
                    if (y === i && (r || l.slice(C, C + s) === e)) {
                        a.push(l.slice(d, C)), d = C + s;
                        continue
                    }
                    if (y === "/") {
                        h = C;
                        continue
                    }
                }
                y === "[" ? c++ : y === "]" && c--
            }
            const m = a.length === 0 ? l : l.substring(d),
                A = m.startsWith(k1),
                k = A ? m.substring(1) : m,
                x = h && h > d ? h - d : void 0;
            return {
                modifiers: a,
                hasImportantModifier: A,
                baseClassName: k,
                maybePostfixModifierPosition: x
            }
        };
        return n ? l => n({
            className: l,
            parseClassName: o
        }) : o
    },
    A2 = t => {
        if (t.length <= 1) return t;
        const e = [];
        let n = [];
        return t.forEach(r => {
            r[0] === "[" ? (e.push(...n.sort(), r), n = []) : n.push(r)
        }), e.push(...n.sort()), e
    },
    v2 = t => ({
        cache: y2(t.cacheSize),
        parseClassName: w2(t),
        ...d2(t)
    }),
    x2 = /\s+/,
    E2 = (t, e) => {
        const {
            parseClassName: n,
            getClassGroupId: r,
            getConflictingClassGroupIds: i
        } = e, s = [], o = t.trim().split(x2);
        let l = "";
        for (let a = o.length - 1; a >= 0; a -= 1) {
            const c = o[a],
                {
                    modifiers: d,
                    hasImportantModifier: h,
                    baseClassName: m,
                    maybePostfixModifierPosition: A
                } = n(c);
            let k = !!A,
                x = r(k ? m.substring(0, A) : m);
            if (!x) {
                if (!k) {
                    l = c + (l.length > 0 ? " " + l : l);
                    continue
                }
                if (x = r(m), !x) {
                    l = c + (l.length > 0 ? " " + l : l);
                    continue
                }
                k = !1
            }
            const C = A2(d).join(":"),
                y = h ? C + k1 : C,
                w = y + x;
            if (s.includes(w)) continue;
            s.push(w);
            const E = i(x, k);
            for (let B = 0; B < E.length; ++B) {
                const T = E[B];
                s.push(y + T)
            }
            l = c + (l.length > 0 ? " " + l : l)
        }
        return l
    };

function b2() {
    let t = 0,
        e, n, r = "";
    for (; t < arguments.length;)(e = arguments[t++]) && (n = N1(e)) && (r && (r += " "), r += n);
    return r
}
const N1 = t => {
    if (typeof t == "string") return t;
    let e, n = "";
    for (let r = 0; r < t.length; r++) t[r] && (e = N1(t[r])) && (n && (n += " "), n += e);
    return n
};

function k2(t, ...e) {
    let n, r, i, s = o;

    function o(a) {
        const c = e.reduce((d, h) => h(d), t());
        return n = v2(c), r = n.cache.get, i = n.cache.set, s = l, l(a)
    }

    function l(a) {
        const c = r(a);
        if (c) return c;
        const d = E2(a, n);
        return i(a, d), d
    }
    return function () {
        return s(b2.apply(null, arguments))
    }
}
const be = t => {
    const e = n => n[t] || [];
    return e.isThemeGetter = !0, e
},
    S1 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    N2 = /^\d+\/\d+$/,
    S2 = new Set(["px", "full", "screen"]),
    C2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    P2 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    B2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    I2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    R2 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    or = t => xo(t) || S2.has(t) || N2.test(t),
    Qr = t => Il(t, "length", _2),
    xo = t => !!t && !Number.isNaN(Number(t)),
    dd = t => Il(t, "number", xo),
    Gl = t => !!t && Number.isInteger(Number(t)),
    T2 = t => t.endsWith("%") && xo(t.slice(0, -1)),
    ie = t => S1.test(t),
    jr = t => C2.test(t),
    O2 = new Set(["length", "size", "percentage"]),
    F2 = t => Il(t, O2, C1),
    U2 = t => Il(t, "position", C1),
    L2 = new Set(["image", "url"]),
    D2 = t => Il(t, L2, G2),
    M2 = t => Il(t, "", z2),
    Hl = () => !0,
    Il = (t, e, n) => {
        const r = S1.exec(t);
        return r ? r[1] ? typeof e == "string" ? r[1] === e : e.has(r[1]) : n(r[2]) : !1
    },
    _2 = t => P2.test(t) && !B2.test(t),
    C1 = () => !1,
    z2 = t => I2.test(t),
    G2 = t => R2.test(t),
    H2 = () => {
        const t = be("colors"),
            e = be("spacing"),
            n = be("blur"),
            r = be("brightness"),
            i = be("borderColor"),
            s = be("borderRadius"),
            o = be("borderSpacing"),
            l = be("borderWidth"),
            a = be("contrast"),
            c = be("grayscale"),
            d = be("hueRotate"),
            h = be("invert"),
            m = be("gap"),
            A = be("gradientColorStops"),
            k = be("gradientColorStopPositions"),
            x = be("inset"),
            C = be("margin"),
            y = be("opacity"),
            w = be("padding"),
            E = be("saturate"),
            B = be("scale"),
            T = be("sepia"),
            O = be("skew"),
            U = be("space"),
            F = be("translate"),
            X = () => ["auto", "contain", "none"],
            j = () => ["auto", "hidden", "clip", "visible", "scroll"],
            q = () => ["auto", ie, e],
            ee = () => [ie, e],
            we = () => ["", or, Qr],
            Me = () => ["auto", xo, ie],
            H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            V = () => ["solid", "dashed", "dotted", "double", "none"],
            re = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            _ = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            Q = () => ["", "0", ie],
            $ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            Y = () => [xo, ie];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [Hl],
                spacing: [or, Qr],
                blur: ["none", "", jr, ie],
                brightness: Y(),
                borderColor: [t],
                borderRadius: ["none", "", "full", jr, ie],
                borderSpacing: ee(),
                borderWidth: we(),
                contrast: Y(),
                grayscale: Q(),
                hueRotate: Y(),
                invert: Q(),
                gap: ee(),
                gradientColorStops: [t],
                gradientColorStopPositions: [T2, Qr],
                inset: q(),
                margin: q(),
                opacity: Y(),
                padding: ee(),
                saturate: Y(),
                scale: Y(),
                sepia: Q(),
                skew: Y(),
                space: ee(),
                translate: ee()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", ie]
                }],
                container: ["container"],
                columns: [{
                    columns: [jr]
                }],
                "break-after": [{
                    "break-after": $()
                }],
                "break-before": [{
                    "break-before": $()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: [...H(), ie]
                }],
                overflow: [{
                    overflow: j()
                }],
                "overflow-x": [{
                    "overflow-x": j()
                }],
                "overflow-y": [{
                    "overflow-y": j()
                }],
                overscroll: [{
                    overscroll: X()
                }],
                "overscroll-x": [{
                    "overscroll-x": X()
                }],
                "overscroll-y": [{
                    "overscroll-y": X()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: [x]
                }],
                "inset-x": [{
                    "inset-x": [x]
                }],
                "inset-y": [{
                    "inset-y": [x]
                }],
                start: [{
                    start: [x]
                }],
                end: [{
                    end: [x]
                }],
                top: [{
                    top: [x]
                }],
                right: [{
                    right: [x]
                }],
                bottom: [{
                    bottom: [x]
                }],
                left: [{
                    left: [x]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", Gl, ie]
                }],
                basis: [{
                    basis: q()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", ie]
                }],
                grow: [{
                    grow: Q()
                }],
                shrink: [{
                    shrink: Q()
                }],
                order: [{
                    order: ["first", "last", "none", Gl, ie]
                }],
                "grid-cols": [{
                    "grid-cols": [Hl]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", Gl, ie]
                    }, ie]
                }],
                "col-start": [{
                    "col-start": Me()
                }],
                "col-end": [{
                    "col-end": Me()
                }],
                "grid-rows": [{
                    "grid-rows": [Hl]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [Gl, ie]
                    }, ie]
                }],
                "row-start": [{
                    "row-start": Me()
                }],
                "row-end": [{
                    "row-end": Me()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", ie]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", ie]
                }],
                gap: [{
                    gap: [m]
                }],
                "gap-x": [{
                    "gap-x": [m]
                }],
                "gap-y": [{
                    "gap-y": [m]
                }],
                "justify-content": [{
                    justify: ["normal", ..._()]
                }],
                "justify-items": [{
                    "justify-items": ["start", "end", "center", "stretch"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", "start", "end", "center", "stretch"]
                }],
                "align-content": [{
                    content: ["normal", ..._(), "baseline"]
                }],
                "align-items": [{
                    items: ["start", "end", "center", "baseline", "stretch"]
                }],
                "align-self": [{
                    self: ["auto", "start", "end", "center", "stretch", "baseline"]
                }],
                "place-content": [{
                    "place-content": [..._(), "baseline"]
                }],
                "place-items": [{
                    "place-items": ["start", "end", "center", "baseline", "stretch"]
                }],
                "place-self": [{
                    "place-self": ["auto", "start", "end", "center", "stretch"]
                }],
                p: [{
                    p: [w]
                }],
                px: [{
                    px: [w]
                }],
                py: [{
                    py: [w]
                }],
                ps: [{
                    ps: [w]
                }],
                pe: [{
                    pe: [w]
                }],
                pt: [{
                    pt: [w]
                }],
                pr: [{
                    pr: [w]
                }],
                pb: [{
                    pb: [w]
                }],
                pl: [{
                    pl: [w]
                }],
                m: [{
                    m: [C]
                }],
                mx: [{
                    mx: [C]
                }],
                my: [{
                    my: [C]
                }],
                ms: [{
                    ms: [C]
                }],
                me: [{
                    me: [C]
                }],
                mt: [{
                    mt: [C]
                }],
                mr: [{
                    mr: [C]
                }],
                mb: [{
                    mb: [C]
                }],
                ml: [{
                    ml: [C]
                }],
                "space-x": [{
                    "space-x": [U]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [U]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ie, e]
                }],
                "min-w": [{
                    "min-w": [ie, e, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [ie, e, "none", "full", "min", "max", "fit", "prose", {
                        screen: [jr]
                    }, jr]
                }],
                h: [{
                    h: [ie, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [ie, e, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [ie, e, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [ie, e, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", jr, Qr]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", dd]
                }],
                "font-family": [{
                    font: [Hl]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ie]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", xo, dd]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", or, ie]
                }],
                "list-image": [{
                    "list-image": ["none", ie]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", ie]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [t]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [y]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [t]
                }],
                "text-opacity": [{
                    "text-opacity": [y]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...V(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", or, Qr]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", or, ie]
                }],
                "text-decoration-color": [{
                    decoration: [t]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: ee()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ie]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", ie]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [y]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...H(), U2]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", F2]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, D2]
                }],
                "bg-color": [{
                    bg: [t]
                }],
                "gradient-from-pos": [{
                    from: [k]
                }],
                "gradient-via-pos": [{
                    via: [k]
                }],
                "gradient-to-pos": [{
                    to: [k]
                }],
                "gradient-from": [{
                    from: [A]
                }],
                "gradient-via": [{
                    via: [A]
                }],
                "gradient-to": [{
                    to: [A]
                }],
                rounded: [{
                    rounded: [s]
                }],
                "rounded-s": [{
                    "rounded-s": [s]
                }],
                "rounded-e": [{
                    "rounded-e": [s]
                }],
                "rounded-t": [{
                    "rounded-t": [s]
                }],
                "rounded-r": [{
                    "rounded-r": [s]
                }],
                "rounded-b": [{
                    "rounded-b": [s]
                }],
                "rounded-l": [{
                    "rounded-l": [s]
                }],
                "rounded-ss": [{
                    "rounded-ss": [s]
                }],
                "rounded-se": [{
                    "rounded-se": [s]
                }],
                "rounded-ee": [{
                    "rounded-ee": [s]
                }],
                "rounded-es": [{
                    "rounded-es": [s]
                }],
                "rounded-tl": [{
                    "rounded-tl": [s]
                }],
                "rounded-tr": [{
                    "rounded-tr": [s]
                }],
                "rounded-br": [{
                    "rounded-br": [s]
                }],
                "rounded-bl": [{
                    "rounded-bl": [s]
                }],
                "border-w": [{
                    border: [l]
                }],
                "border-w-x": [{
                    "border-x": [l]
                }],
                "border-w-y": [{
                    "border-y": [l]
                }],
                "border-w-s": [{
                    "border-s": [l]
                }],
                "border-w-e": [{
                    "border-e": [l]
                }],
                "border-w-t": [{
                    "border-t": [l]
                }],
                "border-w-r": [{
                    "border-r": [l]
                }],
                "border-w-b": [{
                    "border-b": [l]
                }],
                "border-w-l": [{
                    "border-l": [l]
                }],
                "border-opacity": [{
                    "border-opacity": [y]
                }],
                "border-style": [{
                    border: [...V(), "hidden"]
                }],
                "divide-x": [{
                    "divide-x": [l]
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": [l]
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{
                    "divide-opacity": [y]
                }],
                "divide-style": [{
                    divide: V()
                }],
                "border-color": [{
                    border: [i]
                }],
                "border-color-x": [{
                    "border-x": [i]
                }],
                "border-color-y": [{
                    "border-y": [i]
                }],
                "border-color-s": [{
                    "border-s": [i]
                }],
                "border-color-e": [{
                    "border-e": [i]
                }],
                "border-color-t": [{
                    "border-t": [i]
                }],
                "border-color-r": [{
                    "border-r": [i]
                }],
                "border-color-b": [{
                    "border-b": [i]
                }],
                "border-color-l": [{
                    "border-l": [i]
                }],
                "divide-color": [{
                    divide: [i]
                }],
                "outline-style": [{
                    outline: ["", ...V()]
                }],
                "outline-offset": [{
                    "outline-offset": [or, ie]
                }],
                "outline-w": [{
                    outline: [or, Qr]
                }],
                "outline-color": [{
                    outline: [t]
                }],
                "ring-w": [{
                    ring: we()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [t]
                }],
                "ring-opacity": [{
                    "ring-opacity": [y]
                }],
                "ring-offset-w": [{
                    "ring-offset": [or, Qr]
                }],
                "ring-offset-color": [{
                    "ring-offset": [t]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", jr, M2]
                }],
                "shadow-color": [{
                    shadow: [Hl]
                }],
                opacity: [{
                    opacity: [y]
                }],
                "mix-blend": [{
                    "mix-blend": [...re(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": re()
                }],
                filter: [{
                    filter: ["", "none"]
                }],
                blur: [{
                    blur: [n]
                }],
                brightness: [{
                    brightness: [r]
                }],
                contrast: [{
                    contrast: [a]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", jr, ie]
                }],
                grayscale: [{
                    grayscale: [c]
                }],
                "hue-rotate": [{
                    "hue-rotate": [d]
                }],
                invert: [{
                    invert: [h]
                }],
                saturate: [{
                    saturate: [E]
                }],
                sepia: [{
                    sepia: [T]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none"]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": [n]
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [r]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [a]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [c]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [d]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [h]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [y]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [E]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [T]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": [o]
                }],
                "border-spacing-x": [{
                    "border-spacing-x": [o]
                }],
                "border-spacing-y": [{
                    "border-spacing-y": [o]
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ie]
                }],
                duration: [{
                    duration: Y()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", ie]
                }],
                delay: [{
                    delay: Y()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", ie]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [B]
                }],
                "scale-x": [{
                    "scale-x": [B]
                }],
                "scale-y": [{
                    "scale-y": [B]
                }],
                rotate: [{
                    rotate: [Gl, ie]
                }],
                "translate-x": [{
                    "translate-x": [F]
                }],
                "translate-y": [{
                    "translate-y": [F]
                }],
                "skew-x": [{
                    "skew-x": [O]
                }],
                "skew-y": [{
                    "skew-y": [O]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ie]
                }],
                accent: [{
                    accent: ["auto", t]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ie]
                }],
                "caret-color": [{
                    caret: [t]
                }],
                "pointer-events": [{
                    "pointer-events": ["none", "auto"]
                }],
                resize: [{
                    resize: ["none", "y", "x", ""]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": ee()
                }],
                "scroll-mx": [{
                    "scroll-mx": ee()
                }],
                "scroll-my": [{
                    "scroll-my": ee()
                }],
                "scroll-ms": [{
                    "scroll-ms": ee()
                }],
                "scroll-me": [{
                    "scroll-me": ee()
                }],
                "scroll-mt": [{
                    "scroll-mt": ee()
                }],
                "scroll-mr": [{
                    "scroll-mr": ee()
                }],
                "scroll-mb": [{
                    "scroll-mb": ee()
                }],
                "scroll-ml": [{
                    "scroll-ml": ee()
                }],
                "scroll-p": [{
                    "scroll-p": ee()
                }],
                "scroll-px": [{
                    "scroll-px": ee()
                }],
                "scroll-py": [{
                    "scroll-py": ee()
                }],
                "scroll-ps": [{
                    "scroll-ps": ee()
                }],
                "scroll-pe": [{
                    "scroll-pe": ee()
                }],
                "scroll-pt": [{
                    "scroll-pt": ee()
                }],
                "scroll-pr": [{
                    "scroll-pr": ee()
                }],
                "scroll-pb": [{
                    "scroll-pb": ee()
                }],
                "scroll-pl": [{
                    "scroll-pl": ee()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", ie]
                }],
                fill: [{
                    fill: [t, "none"]
                }],
                "stroke-w": [{
                    stroke: [or, Qr, dd]
                }],
                stroke: [{
                    stroke: [t, "none"]
                }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            }
        }
    },
    Q2 = k2(H2);

function Li(...t) {
    return Q2(f2(t))
}
const Gi = ce.forwardRef(({
    className: t,
    ...e
}, n) => G.jsx("div", {
    ref: n,
    className: Li("rounded-lg border bg-card text-card-foreground shadow-sm", t),
    ...e
}));
Gi.displayName = "Card";
const tc = ce.forwardRef(({
    className: t,
    ...e
}, n) => G.jsx("div", {
    ref: n,
    className: Li("flex flex-col space-y-1.5 p-6", t),
    ...e
}));
tc.displayName = "CardHeader";
const nc = ce.forwardRef(({
    className: t,
    ...e
}, n) => G.jsx("h3", {
    ref: n,
    className: Li("text-2xl font-semibold leading-none tracking-tight", t),
    ...e
}));
nc.displayName = "CardTitle";
const Hi = ce.forwardRef(({
    className: t,
    ...e
}, n) => G.jsx("div", {
    ref: n,
    className: Li("p-6 pt-0", t),
    ...e
}));
Hi.displayName = "CardContent";
const P1 = ce.forwardRef(({
    className: t,
    type: e,
    ...n
}, r) => G.jsx("input", {
    type: e,
    className: Li("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", t),
    ref: r,
    ...n
}));
P1.displayName = "Input";

function V0(t, e) {
    if (typeof t == "function") return t(e);
    t != null && (t.current = e)
}

function j2(...t) {
    return e => {
        let n = !1;
        const r = t.map(i => {
            const s = V0(i, e);
            return !n && typeof s == "function" && (n = !0), s
        });
        if (n) return () => {
            for (let i = 0; i < r.length; i++) {
                const s = r[i];
                typeof s == "function" ? s() : V0(t[i], null)
            }
        }
    }
}
var B1 = ce.forwardRef((t, e) => {
    const {
        children: n,
        ...r
    } = t, i = ce.Children.toArray(n), s = i.find(J2);
    if (s) {
        const o = s.props.children,
            l = i.map(a => a === s ? ce.Children.count(o) > 1 ? ce.Children.only(null) : ce.isValidElement(o) ? o.props.children : null : a);
        return G.jsx(Sh, {
            ...r,
            ref: e,
            children: ce.isValidElement(o) ? ce.cloneElement(o, void 0, l) : null
        })
    }
    return G.jsx(Sh, {
        ...r,
        ref: e,
        children: n
    })
});
B1.displayName = "Slot";
var Sh = ce.forwardRef((t, e) => {
    const {
        children: n,
        ...r
    } = t;
    if (ce.isValidElement(n)) {
        const i = W2(n),
            s = K2(r, n.props);
        return n.type !== ce.Fragment && (s.ref = e ? j2(e, i) : i), ce.cloneElement(n, s)
    }
    return ce.Children.count(n) > 1 ? ce.Children.only(null) : null
});
Sh.displayName = "SlotClone";
var V2 = ({
    children: t
}) => G.jsx(G.Fragment, {
    children: t
});

function J2(t) {
    return ce.isValidElement(t) && t.type === V2
}

function K2(t, e) {
    const n = {
        ...e
    };
    for (const r in e) {
        const i = t[r],
            s = e[r];
        /^on[A-Z]/.test(r) ? i && s ? n[r] = (...l) => {
            s(...l), i(...l)
        } : i && (n[r] = i) : r === "style" ? n[r] = {
            ...i,
            ...s
        } : r === "className" && (n[r] = [i, s].filter(Boolean).join(" "))
    }
    return {
        ...t,
        ...n
    }
}

function W2(t) {
    var r, i;
    let e = (r = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : r.get,
        n = e && "isReactWarning" in e && e.isReactWarning;
    return n ? t.ref : (e = (i = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : i.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref)
}
const $l = ce.forwardRef(({
    className: t,
    variant: e,
    size: n,
    asChild: r = !1,
    ...i
}, s) => {
    const o = r ? B1 : "button";
    return G.jsx(o, {
        className: Li("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", t),
        ref: s,
        ...i
    })
});
$l.displayName = "Button";
const I1 = ce.forwardRef(({
    className: t,
    variant: e,
    ...n
}, r) => G.jsx("div", {
    ref: r,
    role: "alert",
    className: Li("relative w-full rounded-lg border p-4", {
        "bg-destructive text-destructive-foreground": e === "destructive"
    }, t),
    ...n
}));
I1.displayName = "Alert";
const R1 = ce.forwardRef(({
    className: t,
    ...e
}, n) => G.jsx("div", {
    ref: n,
    className: Li("text-sm [&_p]:leading-relaxed", t),
    ...e
}));
R1.displayName = "AlertDescription";
var Y2 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const $2 = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    Z2 = (t, e) => {
        const n = ce.forwardRef(({
            color: r = "currentColor",
            size: i = 24,
            strokeWidth: s = 2,
            absoluteStrokeWidth: o,
            children: l,
            ...a
        }, c) => ce.createElement("svg", {
            ref: c,
            ...Y2,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: o ? Number(s) * 24 / Number(i) : s,
            className: `lucide lucide-${$2(t)}`,
            ...a
        }, [...e.map(([d, h]) => ce.createElement(d, h)), ...(Array.isArray(l) ? l : [l]) || []]));
        return n.displayName = `${t}`, n
    };
var ru = Z2;
const J0 = ru("ArrowRight", [
    ["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }],
    ["path", {
        d: "m12 5 7 7-7 7",
        key: "xquz4c"
    }]
]),
    X2 = ru("BarChart", [
        ["line", {
            x1: "12",
            x2: "12",
            y1: "20",
            y2: "10",
            key: "1vz5eb"
        }],
        ["line", {
            x1: "18",
            x2: "18",
            y1: "20",
            y2: "4",
            key: "cun8e5"
        }],
        ["line", {
            x1: "6",
            x2: "6",
            y1: "20",
            y2: "16",
            key: "hq0ia6"
        }]
    ]),
    q2 = ru("DollarSign", [
        ["line", {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "22",
            key: "7eqyqh"
        }],
        ["path", {
            d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
            key: "1b0p4s"
        }]
    ]),
    eb = ru("Printer", [
        ["polyline", {
            points: "6 9 6 2 18 2 18 9",
            key: "1306q4"
        }],
        ["path", {
            d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
            key: "143wyd"
        }],
        ["rect", {
            width: "12",
            height: "8",
            x: "6",
            y: "14",
            key: "5ipwut"
        }]
    ]),
    K0 = ru("Wallet", [
        ["path", {
            d: "M21 12V7H5a2 2 0 0 1 0-4h14v4",
            key: "195gfw"
        }],
        ["path", {
            d: "M3 5v14a2 2 0 0 0 2 2h16v-5",
            key: "195n9w"
        }],
        ["path", {
            d: "M18 12a2 2 0 0 0 0 4h4v-4Z",
            key: "vllfpd"
        }]
    ]),
    tb = "6.13.5";

function nb(t, e, n) {
    const r = e.split("|").map(s => s.trim());
    for (let s = 0; s < r.length; s++) switch (e) {
        case "any":
            return;
        case "bigint":
        case "boolean":
        case "number":
        case "string":
            if (typeof t === e) return
    }
    const i = new Error(`invalid value for type ${e}`);
    throw i.code = "INVALID_ARGUMENT", i.argument = `value.${n}`, i.value = t, i
}
async function Et(t) {
    const e = Object.keys(t);
    return (await Promise.all(e.map(r => Promise.resolve(t[r])))).reduce((r, i, s) => (r[e[s]] = i, r), {})
}

function te(t, e, n) {
    for (let r in e) {
        let i = e[r];
        const s = n ? n[r] : null;
        s && nb(i, s, r), Object.defineProperty(t, r, {
            enumerable: !0,
            value: i,
            writable: !1
        })
    }
}

function ao(t) {
    if (t == null) return "null";
    if (Array.isArray(t)) return "[ " + t.map(ao).join(", ") + " ]";
    if (t instanceof Uint8Array) {
        const e = "0123456789abcdef";
        let n = "0x";
        for (let r = 0; r < t.length; r++) n += e[t[r] >> 4], n += e[t[r] & 15];
        return n
    }
    if (typeof t == "object" && typeof t.toJSON == "function") return ao(t.toJSON());
    switch (typeof t) {
        case "boolean":
        case "symbol":
            return t.toString();
        case "bigint":
            return BigInt(t).toString();
        case "number":
            return t.toString();
        case "string":
            return JSON.stringify(t);
        case "object":
            {
                const e = Object.keys(t);
                return e.sort(),
                    "{ " + e.map(n => `${ao(n)}: ${ao(t[n])}`).join(", ") + " }"
            }
    }
    return "[ COULD NOT SERIALIZE ]"
}

function it(t, e) {
    return t && t.code === e
}

function lg(t) {
    return it(t, "CALL_EXCEPTION")
}

function Ue(t, e, n) {
    let r = t; {
        const s = [];
        if (n) {
            if ("message" in n || "code" in n || "name" in n) throw new Error(`value will overwrite populated values: ${ao(n)}`);
            for (const o in n) {
                if (o === "shortMessage") continue;
                const l = n[o];
                s.push(o + "=" + ao(l))
            }
        }
        s.push(`code=${e}`), s.push(`version=${tb}`), s.length && (t += " (" + s.join(", ") + ")")
    }
    let i;
    switch (e) {
        case "INVALID_ARGUMENT":
            i = new TypeError(t);
            break;
        case "NUMERIC_FAULT":
        case "BUFFER_OVERRUN":
            i = new RangeError(t);
            break;
        default:
            i = new Error(t)
    }
    return te(i, {
        code: e
    }), n && Object.assign(i, n), i.shortMessage == null && te(i, {
        shortMessage: r
    }), i
}

function D(t, e, n, r) {
    if (!t) throw Ue(e, n, r)
}

function S(t, e, n, r) {
    D(t, e, "INVALID_ARGUMENT", {
        argument: n,
        value: r
    })
}

function T1(t, e, n) {
    n == null && (n = ""), n && (n = ": " + n), D(t >= e, "missing argument" + n, "MISSING_ARGUMENT", {
        count: t,
        expectedCount: e
    }), D(t <= e, "too many arguments" + n, "UNEXPECTED_ARGUMENT", {
        count: t,
        expectedCount: e
    })
} ["NFD", "NFC", "NFKD", "NFKC"].reduce((t, e) => {
    try {
        if ("test".normalize(e) !== "test") throw new Error("bad");
        if (e === "NFD" && "é".normalize("NFD") !== "é") throw new Error("broken");
        t.push(e)
    } catch { }
    return t
}, []);

function iu(t, e, n) {
    if (n == null && (n = ""), t !== e) {
        let r = n,
            i = "new";
        n && (r += ".", i += " " + n), D(!1, `private constructor; use ${r}from* methods`, "UNSUPPORTED_OPERATION", {
            operation: i
        })
    }
}

function O1(t, e, n) {
    if (t instanceof Uint8Array) return n ? new Uint8Array(t) : t;
    if (typeof t == "string" && t.match(/^0x(?:[0-9a-f][0-9a-f])*$/i)) {
        const r = new Uint8Array((t.length - 2) / 2);
        let i = 2;
        for (let s = 0; s < r.length; s++) r[s] = parseInt(t.substring(i, i + 2), 16), i += 2;
        return r
    }
    S(!1, "invalid BytesLike value", e || "value", t)
}

function de(t, e) {
    return O1(t, e, !1)
}

function bt(t, e) {
    return O1(t, e, !0)
}

function Ee(t, e) {
    return !(typeof t != "string" || !t.match(/^0x[0-9A-Fa-f]*$/) || typeof e == "number" && t.length !== 2 + 2 * e || e === !0 && t.length % 2 !== 0)
}

function ag(t) {
    return Ee(t, !0) || t instanceof Uint8Array
}
const W0 = "0123456789abcdef";

function W(t) {
    const e = de(t);
    let n = "0x";
    for (let r = 0; r < e.length; r++) {
        const i = e[r];
        n += W0[(i & 240) >> 4] + W0[i & 15]
    }
    return n
}

function Qe(t) {
    return "0x" + t.map(e => W(e).substring(2)).join("")
}

function Eo(t) {
    return Ee(t, !0) ? (t.length - 2) / 2 : de(t).length
}

function Le(t, e, n) {
    const r = de(t);
    return n != null && n > r.length && D(!1, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
        buffer: r,
        length: r.length,
        offset: n
    }), W(r.slice(e & 0, n & r.length))
}

function F1(t, e, n) {
    const r = de(t);
    D(e >= r.length, "padding exceeds data length", "BUFFER_OVERRUN", {
        buffer: new Uint8Array(r),
        length: e,
        offset: e + 1
    });
    const i = new Uint8Array(e);
    return i.fill(0), n ? i.set(r, e - r.length) : i.set(r, 0), W(i)
}

function Rs(t, e) {
    return F1(t, e, !0)
}

function rb(t, e) {
    return F1(t, e, !1)
}
const xf = BigInt(0),
    In = BigInt(1),
    Ch = 9007199254740991;

function Dc(t, e) {
    const n = Ef(t, "value"),
        r = BigInt(oe(e, "width"));
    if (D(n >> r === xf, "overflow", "NUMERIC_FAULT", {
        operation: "fromTwos",
        fault: "overflow",
        value: t
    }), n >> r - In) {
        const i = (In << r) - In;
        return -((~n & i) + In)
    }
    return n
}

function U1(t, e) {
    let n = Z(t, "value");
    const r = BigInt(oe(e, "width")),
        i = In << r - In;
    if (n < xf) {
        n = -n, D(n <= i, "too low", "NUMERIC_FAULT", {
            operation: "toTwos",
            fault: "overflow",
            value: t
        });
        const s = (In << r) - In;
        return (~n & s) + In
    } else D(n < i, "too high", "NUMERIC_FAULT", {
        operation: "toTwos",
        fault: "overflow",
        value: t
    });
    return n
}

function Xi(t, e) {
    const n = Ef(t, "value"),
        r = BigInt(oe(e, "bits"));
    return n & (In << r) - In
}

function Z(t, e) {
    switch (typeof t) {
        case "bigint":
            return t;
        case "number":
            return S(Number.isInteger(t), "underflow", e || "value", t), S(t >= -9007199254740991 && t <= Ch, "overflow", e || "value", t), BigInt(t);
        case "string":
            try {
                if (t === "") throw new Error("empty string");
                return t[0] === "-" && t[1] !== "-" ? -BigInt(t.substring(1)) : BigInt(t)
            } catch (n) {
                S(!1, `invalid BigNumberish string: ${n.message}`, e || "value", t)
            }
    }
    S(!1, "invalid BigNumberish value", e || "value", t)
}

function Ef(t, e) {
    const n = Z(t, e);
    return D(n >= xf, "unsigned value cannot be negative", "NUMERIC_FAULT", {
        fault: "overflow",
        operation: "getUint",
        value: t
    }), n
}
const Y0 = "0123456789abcdef";

function bf(t) {
    if (t instanceof Uint8Array) {
        let e = "0x0";
        for (const n of t) e += Y0[n >> 4], e += Y0[n & 15];
        return BigInt(e)
    }
    return Z(t)
}

function oe(t, e) {
    switch (typeof t) {
        case "bigint":
            return S(t >= -9007199254740991 && t <= Ch, "overflow", e || "value", t), Number(t);
        case "number":
            return S(Number.isInteger(t), "underflow", e || "value", t), S(t >= -9007199254740991 && t <= Ch, "overflow", e || "value", t), t;
        case "string":
            try {
                if (t === "") throw new Error("empty string");
                return oe(BigInt(t), e)
            } catch (n) {
                S(!1, `invalid numeric string: ${n.message}`, e || "value", t)
            }
    }
    S(!1, "invalid numeric value", e || "value", t)
}

function ib(t) {
    return oe(bf(t))
}

function Ri(t, e) {
    let r = Ef(t, "value").toString(16);
    if (e == null) r.length % 2 && (r = "0" + r);
    else {
        const i = oe(e, "width");
        for (D(i * 2 >= r.length, `value exceeds width (${i} bytes)`, "NUMERIC_FAULT", {
            operation: "toBeHex",
            fault: "overflow",
            value: t
        }); r.length < i * 2;) r = "0" + r
    }
    return "0x" + r
}

function kt(t) {
    const e = Ef(t, "value");
    if (e === xf) return new Uint8Array([]);
    let n = e.toString(16);
    n.length % 2 && (n = "0" + n);
    const r = new Uint8Array(n.length / 2);
    for (let i = 0; i < r.length; i++) {
        const s = i * 2;
        r[i] = parseInt(n.substring(s, s + 2), 16)
    }
    return r
}

function uo(t) {
    let e = W(ag(t) ? t : kt(t)).substring(2);
    for (; e.startsWith("0");) e = e.substring(1);
    return e === "" && (e = "0"), "0x" + e
}
const $0 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
BigInt(0);
const Z0 = BigInt(58);

function sb(t) {
    const e = de(t);
    let n = bf(e),
        r = "";
    for (; n;) r = $0[Number(n % Z0)] + r, n /= Z0;
    for (let i = 0; i < e.length && !e[i]; i++) r = $0[0] + r;
    return r
}

function ob(t) {
    t = atob(t);
    const e = new Uint8Array(t.length);
    for (let n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
    return de(e)
}

function lb(t) {
    const e = de(t);
    let n = "";
    for (let r = 0; r < e.length; r++) n += String.fromCharCode(e[r]);
    return btoa(n)
}
var Co;
class L1 {
    constructor(e, n, r) {
        P(this, "filter");
        P(this, "emitter");
        R(this, Co);
        b(this, Co, n), te(this, {
            emitter: e,
            filter: r
        })
    }
    async removeListener() {
        p(this, Co) != null && await this.emitter.off(this.filter, p(this, Co))
    }
}
Co = new WeakMap;

function ab(t, e, n, r, i) {
    S(!1, `invalid codepoint at offset ${e}; ${t}`, "bytes", n)
}

function D1(t, e, n, r, i) {
    if (t === "BAD_PREFIX" || t === "UNEXPECTED_CONTINUE") {
        let s = 0;
        for (let o = e + 1; o < n.length && n[o] >> 6 === 2; o++) s++;
        return s
    }
    return t === "OVERRUN" ? n.length - e - 1 : 0
}

function ub(t, e, n, r, i) {
    return t === "OVERLONG" ? (S(typeof i == "number", "invalid bad code point for replacement", "badCodepoint", i), r.push(i), 0) : (r.push(65533), D1(t, e, n))
}
const cb = Object.freeze({
    error: ab,
    ignore: D1,
    replace: ub
});

function fb(t, e) {
    e == null && (e = cb.error);
    const n = de(t, "bytes"),
        r = [];
    let i = 0;
    for (; i < n.length;) {
        const s = n[i++];
        if (!(s >> 7)) {
            r.push(s);
            continue
        }
        let o = null,
            l = null;
        if ((s & 224) === 192) o = 1, l = 127;
        else if ((s & 240) === 224) o = 2, l = 2047;
        else if ((s & 248) === 240) o = 3, l = 65535;
        else {
            (s & 192) === 128 ? i += e("UNEXPECTED_CONTINUE", i - 1, n, r) : i += e("BAD_PREFIX", i - 1, n, r);
            continue
        }
        if (i - 1 + o >= n.length) {
            i += e("OVERRUN", i - 1, n, r);
            continue
        }
        let a = s & (1 << 8 - o - 1) - 1;
        for (let c = 0; c < o; c++) {
            let d = n[i];
            if ((d & 192) != 128) {
                i += e("MISSING_CONTINUE", i, n, r), a = null;
                break
            }
            a = a << 6 | d & 63, i++
        }
        if (a !== null) {
            if (a > 1114111) {
                i += e("OUT_OF_RANGE", i - 1 - o, n, r, a);
                continue
            }
            if (a >= 55296 && a <= 57343) {
                i += e("UTF16_SURROGATE", i - 1 - o, n, r, a);
                continue
            }
            if (a <= l) {
                i += e("OVERLONG", i - 1 - o, n, r, a);
                continue
            }
            r.push(a)
        }
    }
    return r
}

function Rr(t, e) {
    S(typeof t == "string", "invalid string value", "str", t);
    let n = [];
    for (let r = 0; r < t.length; r++) {
        const i = t.charCodeAt(r);
        if (i < 128) n.push(i);
        else if (i < 2048) n.push(i >> 6 | 192), n.push(i & 63 | 128);
        else if ((i & 64512) == 55296) {
            r++;
            const s = t.charCodeAt(r);
            S(r < t.length && (s & 64512) === 56320, "invalid surrogate pair", "str", t);
            const o = 65536 + ((i & 1023) << 10) + (s & 1023);
            n.push(o >> 18 | 240), n.push(o >> 12 & 63 | 128), n.push(o >> 6 & 63 | 128), n.push(o & 63 | 128)
        } else n.push(i >> 12 | 224), n.push(i >> 6 & 63 | 128), n.push(i & 63 | 128)
    }
    return new Uint8Array(n)
}

function db(t) {
    return t.map(e => e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode((e >> 10 & 1023) + 55296, (e & 1023) + 56320))).join("")
}

function Mc(t, e) {
    return db(fb(t, e))
}

function M1(t) {
    async function e(n, r) {
        D(r == null || !r.cancelled, "request cancelled before sending", "CANCELLED");
        const i = n.url.split(":")[0].toLowerCase();
        D(i === "http" || i === "https", `unsupported protocol ${i}`, "UNSUPPORTED_OPERATION", {
            info: {
                protocol: i
            },
            operation: "request"
        }), D(i === "https" || !n.credentials || n.allowInsecureAuthentication, "insecure authorized connections unsupported", "UNSUPPORTED_OPERATION", {
            operation: "request"
        });
        let s = null;
        const o = new AbortController,
            l = setTimeout(() => {
                s = Ue("request timeout", "TIMEOUT"), o.abort()
            }, n.timeout);
        r && r.addListener(() => {
            s = Ue("request cancelled", "CANCELLED"), o.abort()
        });
        const a = {
            method: n.method,
            headers: new Headers(Array.from(n)),
            body: n.body || void 0,
            signal: o.signal
        };
        let c;
        try {
            c = await fetch(n.url, a)
        } catch (A) {
            throw clearTimeout(l), s || A
        }
        clearTimeout(l);
        const d = {};
        c.headers.forEach((A, k) => {
            d[k.toLowerCase()] = A
        });
        const h = await c.arrayBuffer(),
            m = h == null ? null : new Uint8Array(h);
        return {
            statusCode: c.status,
            statusMessage: c.statusText,
            headers: d,
            body: m
        }
    }
    return e
}
const hb = 12,
    pb = 250;
let X0 = M1();
const gb = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
    mb = new RegExp("^ipfs://(ipfs/)?(.*)$", "i");
let hd = !1;
async function _1(t, e) {
    try {
        const n = t.match(gb);
        if (!n) throw new Error("invalid data");
        return new Pi(200, "OK", {
            "content-type": n[1] || "text/plain"
        }, n[2] ? ob(n[3]) : wb(n[3]))
    } catch {
        return new Pi(599, "BAD REQUEST (invalid data: URI)", {}, null, new Dr(t))
    }
}

function z1(t) {
    async function e(n, r) {
        try {
            const i = n.match(mb);
            if (!i) throw new Error("invalid link");
            return new Dr(`${t}${i[2]}`)
        } catch {
            return new Pi(599, "BAD REQUEST (invalid IPFS URI)", {}, null, new Dr(n))
        }
    }
    return e
}
const Ru = {
    data: _1,
    ipfs: z1("https://gateway.ipfs.io/ipfs/")
},
    G1 = new WeakMap;
var ns, ti;
class yb {
    constructor(e) {
        R(this, ns);
        R(this, ti);
        b(this, ns, []), b(this, ti, !1), G1.set(e, () => {
            if (!p(this, ti)) {
                b(this, ti, !0);
                for (const n of p(this, ns)) setTimeout(() => {
                    n()
                }, 0);
                b(this, ns, [])
            }
        })
    }
    addListener(e) {
        D(!p(this, ti), "singal already cancelled", "UNSUPPORTED_OPERATION", {
            operation: "fetchCancelSignal.addCancelListener"
        }), p(this, ns).push(e)
    }
    get cancelled() {
        return p(this, ti)
    }
    checkSignal() {
        D(!this.cancelled, "cancelled", "CANCELLED", {})
    }
}
ns = new WeakMap, ti = new WeakMap;

function Tu(t) {
    if (t == null) throw new Error("missing signal; should not happen");
    return t.checkSignal(), t
}
var Po, Bo, bn, pr, Io, Ro, $e, jt, gr, rs, is, ss, Hn, kn, ni, os, Zl;
const $c = class $c {
    constructor(e) {
        R(this, os);
        R(this, Po);
        R(this, Bo);
        R(this, bn);
        R(this, pr);
        R(this, Io);
        R(this, Ro);
        R(this, $e);
        R(this, jt);
        R(this, gr);
        R(this, rs);
        R(this, is);
        R(this, ss);
        R(this, Hn);
        R(this, kn);
        R(this, ni);
        b(this, Ro, String(e)), b(this, Po, !1), b(this, Bo, !0), b(this, bn, {}), b(this, pr, ""), b(this, Io, 3e5), b(this, kn, {
            slotInterval: pb,
            maxAttempts: hb
        }), b(this, ni, null)
    }
    get url() {
        return p(this, Ro)
    }
    set url(e) {
        b(this, Ro, String(e))
    }
    get body() {
        return p(this, $e) == null ? null : new Uint8Array(p(this, $e))
    }
    set body(e) {
        if (e == null) b(this, $e, void 0), b(this, jt, void 0);
        else if (typeof e == "string") b(this, $e, Rr(e)), b(this, jt, "text/plain");
        else if (e instanceof Uint8Array) b(this, $e, e), b(this, jt, "application/octet-stream");
        else if (typeof e == "object") b(this, $e, Rr(JSON.stringify(e))), b(this, jt, "application/json");
        else throw new Error("invalid body")
    }
    hasBody() {
        return p(this, $e) != null
    }
    get method() {
        return p(this, pr) ? p(this, pr) : this.hasBody() ? "POST" : "GET"
    }
    set method(e) {
        e == null && (e = ""), b(this, pr, String(e).toUpperCase())
    }
    get headers() {
        const e = Object.assign({}, p(this, bn));
        return p(this, gr) && (e.authorization = `Basic ${lb(Rr(p(this, gr)))}`), this.allowGzip && (e["accept-encoding"] = "gzip"), e["content-type"] == null && p(this, jt) && (e["content-type"] = p(this, jt)), this.body && (e["content-length"] = String(this.body.length)), e
    }
    getHeader(e) {
        return this.headers[e.toLowerCase()]
    }
    setHeader(e, n) {
        p(this, bn)[String(e).toLowerCase()] = String(n)
    }
    clearHeaders() {
        b(this, bn, {})
    } [Symbol.iterator]() {
        const e = this.headers,
            n = Object.keys(e);
        let r = 0;
        return {
            next: () => {
                if (r < n.length) {
                    const i = n[r++];
                    return {
                        value: [i, e[i]],
                        done: !1
                    }
                }
                return {
                    value: void 0,
                    done: !0
                }
            }
        }
    }
    get credentials() {
        return p(this, gr) || null
    }
    setCredentials(e, n) {
        S(!e.match(/:/), "invalid basic authentication username", "username", "[REDACTED]"), b(this, gr, `${e}:${n}`)
    }
    get allowGzip() {
        return p(this, Bo)
    }
    set allowGzip(e) {
        b(this, Bo, !!e)
    }
    get allowInsecureAuthentication() {
        return !!p(this, Po)
    }
    set allowInsecureAuthentication(e) {
        b(this, Po, !!e)
    }
    get timeout() {
        return p(this, Io)
    }
    set timeout(e) {
        S(e >= 0, "timeout must be non-zero", "timeout", e), b(this, Io, e)
    }
    get preflightFunc() {
        return p(this, rs) || null
    }
    set preflightFunc(e) {
        b(this, rs, e)
    }
    get processFunc() {
        return p(this, is) || null
    }
    set processFunc(e) {
        b(this, is, e)
    }
    get retryFunc() {
        return p(this, ss) || null
    }
    set retryFunc(e) {
        b(this, ss, e)
    }
    get getUrlFunc() {
        return p(this, ni) || X0
    }
    set getUrlFunc(e) {
        b(this, ni, e)
    }
    toString() {
        return `<FetchRequest method=${JSON.stringify(this.method)} url=${JSON.stringify(this.url)} headers=${JSON.stringify(this.headers)} body=${p(this, $e) ? W(p(this, $e)) : "null"}>`
    }
    setThrottleParams(e) {
        e.slotInterval != null && (p(this, kn).slotInterval = e.slotInterval), e.maxAttempts != null && (p(this, kn).maxAttempts = e.maxAttempts)
    }
    send() {
        return D(p(this, Hn) == null, "request already sent", "UNSUPPORTED_OPERATION", {
            operation: "fetchRequest.send"
        }), b(this, Hn, new yb(this)), M(this, os, Zl).call(this, 0, q0() + this.timeout, 0, this, new Pi(0, "", {}, null, this))
    }
    cancel() {
        D(p(this, Hn) != null, "request has not been sent", "UNSUPPORTED_OPERATION", {
            operation: "fetchRequest.cancel"
        });
        const e = G1.get(this);
        if (!e) throw new Error("missing signal; should not happen");
        e()
    }
    redirect(e) {
        const n = this.url.split(":")[0].toLowerCase(),
            r = e.split(":")[0].toLowerCase();
        D(this.method === "GET" && (n !== "https" || r !== "http") && e.match(/^https?:/), "unsupported redirect", "UNSUPPORTED_OPERATION", {
            operation: `redirect(${this.method} ${JSON.stringify(this.url)} => ${JSON.stringify(e)})`
        });
        const i = new $c(e);
        return i.method = "GET", i.allowGzip = this.allowGzip, i.timeout = this.timeout, b(i, bn, Object.assign({}, p(this, bn))), p(this, $e) && b(i, $e, new Uint8Array(p(this, $e))), b(i, jt, p(this, jt)), i
    }
    clone() {
        const e = new $c(this.url);
        return b(e, pr, p(this, pr)), p(this, $e) && b(e, $e, p(this, $e)), b(e, jt, p(this, jt)), b(e, bn, Object.assign({}, p(this, bn))), b(e, gr, p(this, gr)), this.allowGzip && (e.allowGzip = !0), e.timeout = this.timeout, this.allowInsecureAuthentication && (e.allowInsecureAuthentication = !0), b(e, rs, p(this, rs)), b(e, is, p(this, is)), b(e, ss, p(this, ss)), b(e, kn, Object.assign({}, p(this, kn))), b(e, ni, p(this, ni)), e
    }
    static lockConfig() {
        hd = !0
    }
    static getGateway(e) {
        return Ru[e.toLowerCase()] || null
    }
    static registerGateway(e, n) {
        if (e = e.toLowerCase(), e === "http" || e === "https") throw new Error(`cannot intercept ${e}; use registerGetUrl`);
        if (hd) throw new Error("gateways locked");
        Ru[e] = n
    }
    static registerGetUrl(e) {
        if (hd) throw new Error("gateways locked");
        X0 = e
    }
    static createGetUrlFunc(e) {
        return M1()
    }
    static createDataGateway() {
        return _1
    }
    static createIpfsGatewayFunc(e) {
        return z1(e)
    }
};
Po = new WeakMap, Bo = new WeakMap, bn = new WeakMap, pr = new WeakMap, Io = new WeakMap, Ro = new WeakMap, $e = new WeakMap, jt = new WeakMap, gr = new WeakMap, rs = new WeakMap, is = new WeakMap, ss = new WeakMap, Hn = new WeakMap, kn = new WeakMap, ni = new WeakMap, os = new WeakSet, Zl = async function (e, n, r, i, s) {
    var d, h, m;
    if (e >= p(this, kn).maxAttempts) return s.makeServerError("exceeded maximum retry limit");
    D(q0() <= n, "timeout", "TIMEOUT", {
        operation: "request.send",
        reason: "timeout",
        request: i
    }), r > 0 && await Ab(r);
    let o = this.clone();
    const l = (o.url.split(":")[0] || "").toLowerCase();
    if (l in Ru) {
        const A = await Ru[l](o.url, Tu(p(i, Hn)));
        if (A instanceof Pi) {
            let k = A;
            if (this.processFunc) {
                Tu(p(i, Hn));
                try {
                    k = await this.processFunc(o, k)
                } catch (x) {
                    (x.throttle == null || typeof x.stall != "number") && k.makeServerError("error in post-processing function", x).assertOk()
                }
            }
            return k
        }
        o = A
    }
    this.preflightFunc && (o = await this.preflightFunc(o));
    const a = await this.getUrlFunc(o, Tu(p(i, Hn)));
    let c = new Pi(a.statusCode, a.statusMessage, a.headers, a.body, i);
    if (c.statusCode === 301 || c.statusCode === 302) {
        try {
            const A = c.headers.location || "";
            return M(d = o.redirect(A), os, Zl).call(d, e + 1, n, 0, i, c)
        } catch { }
        return c
    } else if (c.statusCode === 429 && (this.retryFunc == null || await this.retryFunc(o, c, e))) {
        const A = c.headers["retry-after"];
        let k = p(this, kn).slotInterval * Math.trunc(Math.random() * Math.pow(2, e));
        return typeof A == "string" && A.match(/^[1-9][0-9]*$/) && (k = parseInt(A)), M(h = o.clone(), os, Zl).call(h, e + 1, n, k, i, c)
    }
    if (this.processFunc) {
        Tu(p(i, Hn));
        try {
            c = await this.processFunc(o, c)
        } catch (A) {
            (A.throttle == null || typeof A.stall != "number") && c.makeServerError("error in post-processing function", A).assertOk();
            let k = p(this, kn).slotInterval * Math.trunc(Math.random() * Math.pow(2, e));
            return A.stall >= 0 && (k = A.stall), M(m = o.clone(), os, Zl).call(m, e + 1, n, k, i, c)
        }
    }
    return c
};
let Dr = $c;
var za, Ga, Ha, Vt, To, ls;
const Bg = class Bg {
    constructor(e, n, r, i, s) {
        R(this, za);
        R(this, Ga);
        R(this, Ha);
        R(this, Vt);
        R(this, To);
        R(this, ls);
        b(this, za, e), b(this, Ga, n), b(this, Ha, Object.keys(r).reduce((o, l) => (o[l.toLowerCase()] = String(r[l]), o), {})), b(this, Vt, i == null ? null : new Uint8Array(i)), b(this, To, s || null), b(this, ls, {
            message: ""
        })
    }
    toString() {
        return `<FetchResponse status=${this.statusCode} body=${p(this, Vt) ? W(p(this, Vt)) : "null"}>`
    }
    get statusCode() {
        return p(this, za)
    }
    get statusMessage() {
        return p(this, Ga)
    }
    get headers() {
        return Object.assign({}, p(this, Ha))
    }
    get body() {
        return p(this, Vt) == null ? null : new Uint8Array(p(this, Vt))
    }
    get bodyText() {
        try {
            return p(this, Vt) == null ? "" : Mc(p(this, Vt))
        } catch {
            D(!1, "response body is not valid UTF-8 data", "UNSUPPORTED_OPERATION", {
                operation: "bodyText",
                info: {
                    response: this
                }
            })
        }
    }
    get bodyJson() {
        try {
            return JSON.parse(this.bodyText)
        } catch {
            D(!1, "response body is not valid JSON", "UNSUPPORTED_OPERATION", {
                operation: "bodyJson",
                info: {
                    response: this
                }
            })
        }
    } [Symbol.iterator]() {
        const e = this.headers,
            n = Object.keys(e);
        let r = 0;
        return {
            next: () => {
                if (r < n.length) {
                    const i = n[r++];
                    return {
                        value: [i, e[i]],
                        done: !1
                    }
                }
                return {
                    value: void 0,
                    done: !0
                }
            }
        }
    }
    makeServerError(e, n) {
        let r;
        e ? r = `CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${e})` : (e = `${this.statusCode} ${this.statusMessage}`, r = `CLIENT ESCALATED SERVER ERROR (${e})`);
        const i = new Bg(599, r, this.headers, this.body, p(this, To) || void 0);
        return b(i, ls, {
            message: e,
            error: n
        }), i
    }
    throwThrottleError(e, n) {
        n == null ? n = -1 : S(Number.isInteger(n) && n >= 0, "invalid stall timeout", "stall", n);
        const r = new Error(e || "throttling requests");
        throw te(r, {
            stall: n,
            throttle: !0
        }), r
    }
    getHeader(e) {
        return this.headers[e.toLowerCase()]
    }
    hasBody() {
        return p(this, Vt) != null
    }
    get request() {
        return p(this, To)
    }
    ok() {
        return p(this, ls).message === "" && this.statusCode >= 200 && this.statusCode < 300
    }
    assertOk() {
        if (this.ok()) return;
        let {
            message: e,
            error: n
        } = p(this, ls);
        e === "" && (e = `server response ${this.statusCode} ${this.statusMessage}`);
        let r = null;
        this.request && (r = this.request.url);
        let i = null;
        try {
            p(this, Vt) && (i = Mc(p(this, Vt)))
        } catch { }
        D(!1, e, "SERVER_ERROR", {
            request: this.request || "unknown request",
            response: this,
            error: n,
            info: {
                requestUrl: r,
                responseBody: i,
                responseStatus: `${this.statusCode} ${this.statusMessage}`
            }
        })
    }
};
za = new WeakMap, Ga = new WeakMap, Ha = new WeakMap, Vt = new WeakMap, To = new WeakMap, ls = new WeakMap;
let Pi = Bg;

function q0() {
    return new Date().getTime()
}

function wb(t) {
    return Rr(t.replace(/%([0-9a-f][0-9a-f])/gi, (e, n) => String.fromCharCode(parseInt(n, 16))))
}

function Ab(t) {
    return new Promise(e => setTimeout(e, t))
}
const vb = BigInt(-1),
    An = BigInt(0),
    co = BigInt(1),
    xb = BigInt(5),
    Qs = {};
let bo = "0000";
for (; bo.length < 80;) bo += bo;

function Mi(t) {
    let e = bo;
    for (; e.length < t;) e += e;
    return BigInt("1" + e.substring(0, t))
}

function Ql(t, e, n) {
    const r = BigInt(e.width);
    if (e.signed) {
        const i = co << r - co;
        D(n == null || t >= -i && t < i, "overflow", "NUMERIC_FAULT", {
            operation: n,
            fault: "overflow",
            value: t
        }), t > An ? t = Dc(Xi(t, r), r) : t = -Dc(Xi(-t, r), r)
    } else {
        const i = co << r;
        D(n == null || t >= 0 && t < i, "overflow", "NUMERIC_FAULT", {
            operation: n,
            fault: "overflow",
            value: t
        }), t = (t % i + i) % i & i - co
    }
    return t
}

function pd(t) {
    typeof t == "number" && (t = `fixed128x${t}`);
    let e = !0,
        n = 128,
        r = 18;
    if (typeof t == "string") {
        if (t !== "fixed")
            if (t === "ufixed") e = !1;
            else {
                const s = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                S(s, "invalid fixed format", "format", t), e = s[1] !== "u", n = parseInt(s[2]), r = parseInt(s[3])
            }
    } else if (t) {
        const s = t,
            o = (l, a, c) => s[l] == null ? c : (S(typeof s[l] === a, "invalid fixed format (" + l + " not " + a + ")", "format." + l, s[l]), s[l]);
        e = o("signed", "boolean", e), n = o("width", "number", n), r = o("decimals", "number", r)
    }
    S(n % 8 === 0, "invalid FixedNumber width (not byte aligned)", "format.width", n), S(r <= 80, "invalid FixedNumber decimals (too large)", "format.decimals", r);
    const i = (e ? "" : "u") + "fixed" + String(n) + "x" + String(r);
    return {
        signed: e,
        width: n,
        decimals: r,
        name: i
    }
}

function Eb(t, e) {
    let n = "";
    t < An && (n = "-", t *= vb);
    let r = t.toString();
    if (e === 0) return n + r;
    for (; r.length <= e;) r = bo + r;
    const i = r.length - e;
    for (r = r.substring(0, i) + "." + r.substring(i); r[0] === "0" && r[1] !== ".";) r = r.substring(1);
    for (; r[r.length - 1] === "0" && r[r.length - 2] !== ".";) r = r.substring(0, r.length - 1);
    return n + r
}
var Nn, Ae, At, ge, Qi, lr, Bh, Ih, Rh, Th;
const Xr = class Xr {
    constructor(e, n, r) {
        R(this, ge);
        P(this, "format");
        R(this, Nn);
        R(this, Ae);
        R(this, At);
        P(this, "_value");
        iu(e, Qs, "FixedNumber"), b(this, Ae, n), b(this, Nn, r);
        const i = Eb(n, r.decimals);
        te(this, {
            format: r.name,
            _value: i
        }), b(this, At, Mi(r.decimals))
    }
    get signed() {
        return p(this, Nn).signed
    }
    get width() {
        return p(this, Nn).width
    }
    get decimals() {
        return p(this, Nn).decimals
    }
    get value() {
        return p(this, Ae)
    }
    addUnsafe(e) {
        return M(this, ge, Bh).call(this, e)
    }
    add(e) {
        return M(this, ge, Bh).call(this, e, "add")
    }
    subUnsafe(e) {
        return M(this, ge, Ih).call(this, e)
    }
    sub(e) {
        return M(this, ge, Ih).call(this, e, "sub")
    }
    mulUnsafe(e) {
        return M(this, ge, Rh).call(this, e)
    }
    mul(e) {
        return M(this, ge, Rh).call(this, e, "mul")
    }
    mulSignal(e) {
        M(this, ge, Qi).call(this, e);
        const n = p(this, Ae) * p(e, Ae);
        return D(n % p(this, At) === An, "precision lost during signalling mul", "NUMERIC_FAULT", {
            operation: "mulSignal",
            fault: "underflow",
            value: this
        }), M(this, ge, lr).call(this, n / p(this, At), "mulSignal")
    }
    divUnsafe(e) {
        return M(this, ge, Th).call(this, e)
    }
    div(e) {
        return M(this, ge, Th).call(this, e, "div")
    }
    divSignal(e) {
        D(p(e, Ae) !== An, "division by zero", "NUMERIC_FAULT", {
            operation: "div",
            fault: "divide-by-zero",
            value: this
        }), M(this, ge, Qi).call(this, e);
        const n = p(this, Ae) * p(this, At);
        return D(n % p(e, Ae) === An, "precision lost during signalling div", "NUMERIC_FAULT", {
            operation: "divSignal",
            fault: "underflow",
            value: this
        }), M(this, ge, lr).call(this, n / p(e, Ae), "divSignal")
    }
    cmp(e) {
        let n = this.value,
            r = e.value;
        const i = this.decimals - e.decimals;
        return i > 0 ? r *= Mi(i) : i < 0 && (n *= Mi(-i)), n < r ? -1 : n > r ? 1 : 0
    }
    eq(e) {
        return this.cmp(e) === 0
    }
    lt(e) {
        return this.cmp(e) < 0
    }
    lte(e) {
        return this.cmp(e) <= 0
    }
    gt(e) {
        return this.cmp(e) > 0
    }
    gte(e) {
        return this.cmp(e) >= 0
    }
    floor() {
        let e = p(this, Ae);
        return p(this, Ae) < An && (e -= p(this, At) - co), e = p(this, Ae) / p(this, At) * p(this, At), M(this, ge, lr).call(this, e, "floor")
    }
    ceiling() {
        let e = p(this, Ae);
        return p(this, Ae) > An && (e += p(this, At) - co), e = p(this, Ae) / p(this, At) * p(this, At), M(this, ge, lr).call(this, e, "ceiling")
    }
    round(e) {
        if (e == null && (e = 0), e >= this.decimals) return this;
        const n = this.decimals - e,
            r = xb * Mi(n - 1);
        let i = this.value + r;
        const s = Mi(n);
        return i = i / s * s, Ql(i, p(this, Nn), "round"), new Xr(Qs, i, p(this, Nn))
    }
    isZero() {
        return p(this, Ae) === An
    }
    isNegative() {
        return p(this, Ae) < An
    }
    toString() {
        return this._value
    }
    toUnsafeFloat() {
        return parseFloat(this.toString())
    }
    toFormat(e) {
        return Xr.fromString(this.toString(), e)
    }
    static fromValue(e, n, r) {
        const i = n == null ? 0 : oe(n),
            s = pd(r);
        let o = Z(e, "value");
        const l = i - s.decimals;
        if (l > 0) {
            const a = Mi(l);
            D(o % a === An, "value loses precision for format", "NUMERIC_FAULT", {
                operation: "fromValue",
                fault: "underflow",
                value: e
            }), o /= a
        } else l < 0 && (o *= Mi(-l));
        return Ql(o, s, "fromValue"), new Xr(Qs, o, s)
    }
    static fromString(e, n) {
        const r = e.match(/^(-?)([0-9]*)\.?([0-9]*)$/);
        S(r && r[2].length + r[3].length > 0, "invalid FixedNumber string value", "value", e);
        const i = pd(n);
        let s = r[2] || "0",
            o = r[3] || "";
        for (; o.length < i.decimals;) o += bo;
        D(o.substring(i.decimals).match(/^0*$/), "too many decimals for format", "NUMERIC_FAULT", {
            operation: "fromString",
            fault: "underflow",
            value: e
        }), o = o.substring(0, i.decimals);
        const l = BigInt(r[1] + s + o);
        return Ql(l, i, "fromString"), new Xr(Qs, l, i)
    }
    static fromBytes(e, n) {
        let r = bf(de(e, "value"));
        const i = pd(n);
        return i.signed && (r = Dc(r, i.width)), Ql(r, i, "fromBytes"), new Xr(Qs, r, i)
    }
};
Nn = new WeakMap, Ae = new WeakMap, At = new WeakMap, ge = new WeakSet, Qi = function (e) {
    S(this.format === e.format, "incompatible format; use fixedNumber.toFormat", "other", e)
}, lr = function (e, n) {
    return e = Ql(e, p(this, Nn), n), new Xr(Qs, e, p(this, Nn))
}, Bh = function (e, n) {
    return M(this, ge, Qi).call(this, e), M(this, ge, lr).call(this, p(this, Ae) + p(e, Ae), n)
}, Ih = function (e, n) {
    return M(this, ge, Qi).call(this, e), M(this, ge, lr).call(this, p(this, Ae) - p(e, Ae), n)
}, Rh = function (e, n) {
    return M(this, ge, Qi).call(this, e), M(this, ge, lr).call(this, p(this, Ae) * p(e, Ae) / p(this, At), n)
}, Th = function (e, n) {
    return D(p(e, Ae) !== An, "division by zero", "NUMERIC_FAULT", {
        operation: "div",
        fault: "divide-by-zero",
        value: this
    }), M(this, ge, Qi).call(this, e), M(this, ge, lr).call(this, p(this, Ae) * p(this, At) / p(e, Ae), n)
};
let Ph = Xr;

function bb(t) {
    let e = t.toString(16);
    for (; e.length < 2;) e = "0" + e;
    return "0x" + e
}

function em(t, e, n) {
    let r = 0;
    for (let i = 0; i < n; i++) r = r * 256 + t[e + i];
    return r
}

function tm(t, e, n, r) {
    const i = [];
    for (; n < e + 1 + r;) {
        const s = H1(t, n);
        i.push(s.result), n += s.consumed, D(n <= e + 1 + r, "child data too short", "BUFFER_OVERRUN", {
            buffer: t,
            length: r,
            offset: e
        })
    }
    return {
        consumed: 1 + r,
        result: i
    }
}

function H1(t, e) {
    D(t.length !== 0, "data too short", "BUFFER_OVERRUN", {
        buffer: t,
        length: 0,
        offset: 1
    });
    const n = r => {
        D(r <= t.length, "data short segment too short", "BUFFER_OVERRUN", {
            buffer: t,
            length: t.length,
            offset: r
        })
    };
    if (t[e] >= 248) {
        const r = t[e] - 247;
        n(e + 1 + r);
        const i = em(t, e + 1, r);
        return n(e + 1 + r + i), tm(t, e, e + 1 + r, r + i)
    } else if (t[e] >= 192) {
        const r = t[e] - 192;
        return n(e + 1 + r), tm(t, e, e + 1, r)
    } else if (t[e] >= 184) {
        const r = t[e] - 183;
        n(e + 1 + r);
        const i = em(t, e + 1, r);
        n(e + 1 + r + i);
        const s = W(t.slice(e + 1 + r, e + 1 + r + i));
        return {
            consumed: 1 + r + i,
            result: s
        }
    } else if (t[e] >= 128) {
        const r = t[e] - 128;
        n(e + 1 + r);
        const i = W(t.slice(e + 1, e + 1 + r));
        return {
            consumed: 1 + r,
            result: i
        }
    }
    return {
        consumed: 1,
        result: bb(t[e])
    }
}

function kf(t) {
    const e = de(t, "data"),
        n = H1(e, 0);
    return S(n.consumed === e.length, "unexpected junk after rlp payload", "data", t), n.result
}

function nm(t) {
    const e = [];
    for (; t;) e.unshift(t & 255), t >>= 8;
    return e
}

function Q1(t) {
    if (Array.isArray(t)) {
        let r = [];
        if (t.forEach(function (s) {
            r = r.concat(Q1(s))
        }), r.length <= 55) return r.unshift(192 + r.length), r;
        const i = nm(r.length);
        return i.unshift(247 + i.length), i.concat(r)
    }
    const e = Array.prototype.slice.call(de(t, "object"));
    if (e.length === 1 && e[0] <= 127) return e;
    if (e.length <= 55) return e.unshift(128 + e.length), e;
    const n = nm(e.length);
    return n.unshift(183 + n.length), n.concat(e)
}
const rm = "0123456789abcdef";

function Ts(t) {
    let e = "0x";
    for (const n of Q1(t)) e += rm[n >> 4], e += rm[n & 15];
    return e
}

function Ou(t, e) {
    let n = 18;
    return n = oe(e, "unit"), Ph.fromValue(t, n, {
        decimals: n,
        width: 512
    }).toString()
}
const Nt = 32,
    Oh = new Uint8Array(Nt),
    kb = ["then"],
    Fu = {},
    j1 = new WeakMap;

function Vi(t) {
    return j1.get(t)
}

function im(t, e) {
    j1.set(t, e)
}

function jl(t, e) {
    const n = new Error(`deferred error during ABI decoding triggered accessing ${t}`);
    throw n.error = e, n
}

function Fh(t, e, n) {
    return t.indexOf(null) >= 0 ? e.map((r, i) => r instanceof Al ? Fh(Vi(r), r, n) : r) : t.reduce((r, i, s) => {
        let o = e.getValue(i);
        return i in r || (n && o instanceof Al && (o = Fh(Vi(o), o, n)), r[i] = o), r
    }, {})
}
var Oo;
const fo = class fo extends Array {
    constructor(...n) {
        const r = n[0];
        let i = n[1],
            s = (n[2] || []).slice(),
            o = !0;
        r !== Fu && (i = n, s = [], o = !1);
        super(i.length);
        R(this, Oo);
        i.forEach((c, d) => {
            this[d] = c
        });
        const l = s.reduce((c, d) => (typeof d == "string" && c.set(d, (c.get(d) || 0) + 1), c), new Map);
        if (im(this, Object.freeze(i.map((c, d) => {
            const h = s[d];
            return h != null && l.get(h) === 1 ? h : null
        }))), b(this, Oo, []), p(this, Oo) == null && p(this, Oo), !o) return;
        Object.freeze(this);
        const a = new Proxy(this, {
            get: (c, d, h) => {
                if (typeof d == "string") {
                    if (d.match(/^[0-9]+$/)) {
                        const A = oe(d, "%index");
                        if (A < 0 || A >= this.length) throw new RangeError("out of result range");
                        const k = c[A];
                        return k instanceof Error && jl(`index ${A}`, k), k
                    }
                    if (kb.indexOf(d) >= 0) return Reflect.get(c, d, h);
                    const m = c[d];
                    if (m instanceof Function) return function (...A) {
                        return m.apply(this === h ? c : this, A)
                    };
                    if (!(d in c)) return c.getValue.apply(this === h ? c : this, [d])
                }
                return Reflect.get(c, d, h)
            }
        });
        return im(a, Vi(this)), a
    }
    toArray(n) {
        const r = [];
        return this.forEach((i, s) => {
            i instanceof Error && jl(`index ${s}`, i), n && i instanceof fo && (i = i.toArray(n)), r.push(i)
        }), r
    }
    toObject(n) {
        const r = Vi(this);
        return r.reduce((i, s, o) => (D(s != null, `value at index ${o} unnamed`, "UNSUPPORTED_OPERATION", {
            operation: "toObject()"
        }), Fh(r, this, n)), {})
    }
    slice(n, r) {
        n == null && (n = 0), n < 0 && (n += this.length, n < 0 && (n = 0)), r == null && (r = this.length), r < 0 && (r += this.length, r < 0 && (r = 0)), r > this.length && (r = this.length);
        const i = Vi(this),
            s = [],
            o = [];
        for (let l = n; l < r; l++) s.push(this[l]), o.push(i[l]);
        return new fo(Fu, s, o)
    }
    filter(n, r) {
        const i = Vi(this),
            s = [],
            o = [];
        for (let l = 0; l < this.length; l++) {
            const a = this[l];
            a instanceof Error && jl(`index ${l}`, a), n.call(r, a, l, this) && (s.push(a), o.push(i[l]))
        }
        return new fo(Fu, s, o)
    }
    map(n, r) {
        const i = [];
        for (let s = 0; s < this.length; s++) {
            const o = this[s];
            o instanceof Error && jl(`index ${s}`, o), i.push(n.call(r, o, s, this))
        }
        return i
    }
    getValue(n) {
        const r = Vi(this).indexOf(n);
        if (r === -1) return;
        const i = this[r];
        return i instanceof Error && jl(`property ${JSON.stringify(n)}`, i.error), i
    }
    static fromItems(n, r) {
        return new fo(Fu, n, r)
    }
};
Oo = new WeakMap;
let Al = fo;

function sm(t) {
    let e = kt(t);
    return D(e.length <= Nt, "value out-of-bounds", "BUFFER_OVERRUN", {
        buffer: e,
        length: Nt,
        offset: e.length
    }), e.length !== Nt && (e = bt(Qe([Oh.slice(e.length % Nt), e]))), e
}
class zr {
    constructor(e, n, r, i) {
        P(this, "name");
        P(this, "type");
        P(this, "localName");
        P(this, "dynamic");
        te(this, {
            name: e,
            type: n,
            localName: r,
            dynamic: i
        }, {
            name: "string",
            type: "string",
            localName: "string",
            dynamic: "boolean"
        })
    }
    _throwError(e, n) {
        S(!1, e, this.localName, n)
    }
}
var mr, as, Fo, rc;
class Uh {
    constructor() {
        R(this, Fo);
        R(this, mr);
        R(this, as);
        b(this, mr, []), b(this, as, 0)
    }
    get data() {
        return Qe(p(this, mr))
    }
    get length() {
        return p(this, as)
    }
    appendWriter(e) {
        return M(this, Fo, rc).call(this, bt(e.data))
    }
    writeBytes(e) {
        let n = bt(e);
        const r = n.length % Nt;
        return r && (n = bt(Qe([n, Oh.slice(r)]))), M(this, Fo, rc).call(this, n)
    }
    writeValue(e) {
        return M(this, Fo, rc).call(this, sm(e))
    }
    writeUpdatableValue() {
        const e = p(this, mr).length;
        return p(this, mr).push(Oh), b(this, as, p(this, as) + Nt), n => {
            p(this, mr)[e] = sm(n)
        }
    }
}
mr = new WeakMap, as = new WeakMap, Fo = new WeakSet, rc = function (e) {
    return p(this, mr).push(e), b(this, as, p(this, as) + e.length), e.length
};
var Rt, Jt, us, cs, ri, Ds, Dh, V1;
const Ig = class Ig {
    constructor(e, n, r) {
        R(this, Ds);
        P(this, "allowLoose");
        R(this, Rt);
        R(this, Jt);
        R(this, us);
        R(this, cs);
        R(this, ri);
        te(this, {
            allowLoose: !!n
        }), b(this, Rt, bt(e)), b(this, us, 0), b(this, cs, null), b(this, ri, r & 1024), b(this, Jt, 0)
    }
    get data() {
        return W(p(this, Rt))
    }
    get dataLength() {
        return p(this, Rt).length
    }
    get consumed() {
        return p(this, Jt)
    }
    get bytes() {
        return new Uint8Array(p(this, Rt))
    }
    subReader(e) {
        const n = new Ig(p(this, Rt).slice(p(this, Jt) + e), this.allowLoose, p(this, ri));
        return b(n, cs, this), n
    }
    readBytes(e, n) {
        let r = M(this, Ds, V1).call(this, 0, e, !!n);
        return M(this, Ds, Dh).call(this, e), b(this, Jt, p(this, Jt) + r.length), r.slice(0, e)
    }
    readValue() {
        return bf(this.readBytes(Nt))
    }
    readIndex() {
        return ib(this.readBytes(Nt))
    }
};
Rt = new WeakMap, Jt = new WeakMap, us = new WeakMap, cs = new WeakMap, ri = new WeakMap, Ds = new WeakSet, Dh = function (e) {
    var n;
    if (p(this, cs)) return M(n = p(this, cs), Ds, Dh).call(n, e);
    b(this, us, p(this, us) + e), D(p(this, ri) < 1 || p(this, us) <= p(this, ri) * this.dataLength, `compressed ABI data exceeds inflation ratio of ${p(this, ri)} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`, "BUFFER_OVERRUN", {
        buffer: bt(p(this, Rt)),
        offset: p(this, Jt),
        length: e,
        info: {
            bytesRead: p(this, us),
            dataLength: this.dataLength
        }
    })
}, V1 = function (e, n, r) {
    let i = Math.ceil(n / Nt) * Nt;
    return p(this, Jt) + i > p(this, Rt).length && (this.allowLoose && r && p(this, Jt) + n <= p(this, Rt).length ? i = n : D(!1, "data out-of-bounds", "BUFFER_OVERRUN", {
        buffer: bt(p(this, Rt)),
        length: p(this, Rt).length,
        offset: p(this, Jt) + i
    })), p(this, Rt).slice(p(this, Jt), p(this, Jt) + i)
};
let Lh = Ig;

function _c(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error(`Wrong positive integer: ${t}`)
}

function ug(t, ...e) {
    if (!(t instanceof Uint8Array)) throw new Error("Expected Uint8Array");
    if (e.length > 0 && !e.includes(t.length)) throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)
}

function Nb(t) {
    if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
    _c(t.outputLen), _c(t.blockLen)
}

function vl(t, e = !0) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished) throw new Error("Hash#digest() has already been called")
}

function J1(t, e) {
    ug(t);
    const n = e.outputLen;
    if (t.length < n) throw new Error(`digestInto() expects output buffer of length at least ${n}`)
}
const gd = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0; /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const K1 = t => t instanceof Uint8Array,
    Sb = t => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
    md = t => new DataView(t.buffer, t.byteOffset, t.byteLength),
    zn = (t, e) => t << 32 - e | t >>> e,
    Cb = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!Cb) throw new Error("Non little-endian hardware is not supported");

function Pb(t) {
    if (typeof t != "string") throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
    return new Uint8Array(new TextEncoder().encode(t))
}

function Nf(t) {
    if (typeof t == "string" && (t = Pb(t)), !K1(t)) throw new Error(`expected Uint8Array, got ${typeof t}`);
    return t
}

function Bb(...t) {
    const e = new Uint8Array(t.reduce((r, i) => r + i.length, 0));
    let n = 0;
    return t.forEach(r => {
        if (!K1(r)) throw new Error("Uint8Array expected");
        e.set(r, n), n += r.length
    }), e
}
class cg {
    clone() {
        return this._cloneInto()
    }
}

function fg(t) {
    const e = r => t().update(Nf(r)).digest(),
        n = t();
    return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = () => t(), e
}

function Ib(t = 32) {
    if (gd && typeof gd.getRandomValues == "function") return gd.getRandomValues(new Uint8Array(t));
    throw new Error("crypto.getRandomValues must be defined")
}
class W1 extends cg {
    constructor(e, n) {
        super(), this.finished = !1, this.destroyed = !1, Nb(e);
        const r = Nf(n);
        if (this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
        const i = this.blockLen,
            s = new Uint8Array(i);
        s.set(r.length > i ? e.create().update(r).digest() : r);
        for (let o = 0; o < s.length; o++) s[o] ^= 54;
        this.iHash.update(s), this.oHash = e.create();
        for (let o = 0; o < s.length; o++) s[o] ^= 106;
        this.oHash.update(s), s.fill(0)
    }
    update(e) {
        return vl(this), this.iHash.update(e), this
    }
    digestInto(e) {
        vl(this), ug(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy()
    }
    digest() {
        const e = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(e), e
    }
    _cloneInto(e) {
        e || (e = Object.create(Object.getPrototypeOf(this), {}));
        const {
            oHash: n,
            iHash: r,
            finished: i,
            destroyed: s,
            blockLen: o,
            outputLen: l
        } = this;
        return e = e, e.finished = i, e.destroyed = s, e.blockLen = o, e.outputLen = l, e.oHash = n._cloneInto(e.oHash), e.iHash = r._cloneInto(e.iHash), e
    }
    destroy() {
        this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
    }
}
const Y1 = (t, e, n) => new W1(t, e).update(n).digest();
Y1.create = (t, e) => new W1(t, e);

function Rb(t, e, n, r) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e, n, r);
    const i = BigInt(32),
        s = BigInt(4294967295),
        o = Number(n >> i & s),
        l = Number(n & s),
        a = r ? 4 : 0,
        c = r ? 0 : 4;
    t.setUint32(e + a, o, r), t.setUint32(e + c, l, r)
}
class $1 extends cg {
    constructor(e, n, r, i) {
        super(), this.blockLen = e, this.outputLen = n, this.padOffset = r, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = md(this.buffer)
    }
    update(e) {
        vl(this);
        const {
            view: n,
            buffer: r,
            blockLen: i
        } = this;
        e = Nf(e);
        const s = e.length;
        for (let o = 0; o < s;) {
            const l = Math.min(i - this.pos, s - o);
            if (l === i) {
                const a = md(e);
                for (; i <= s - o; o += i) this.process(a, o);
                continue
            }
            r.set(e.subarray(o, o + l), this.pos), this.pos += l, o += l, this.pos === i && (this.process(n, 0), this.pos = 0)
        }
        return this.length += e.length, this.roundClean(), this
    }
    digestInto(e) {
        vl(this), J1(e, this), this.finished = !0;
        const {
            buffer: n,
            view: r,
            blockLen: i,
            isLE: s
        } = this;
        let {
            pos: o
        } = this;
        n[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > i - o && (this.process(r, 0), o = 0);
        for (let h = o; h < i; h++) n[h] = 0;
        Rb(r, i - 8, BigInt(this.length * 8), s), this.process(r, 0);
        const l = md(e),
            a = this.outputLen;
        if (a % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
        const c = a / 4,
            d = this.get();
        if (c > d.length) throw new Error("_sha2: outputLen bigger than state");
        for (let h = 0; h < c; h++) l.setUint32(4 * h, d[h], s)
    }
    digest() {
        const {
            buffer: e,
            outputLen: n
        } = this;
        this.digestInto(e);
        const r = e.slice(0, n);
        return this.destroy(), r
    }
    _cloneInto(e) {
        e || (e = new this.constructor), e.set(...this.get());
        const {
            blockLen: n,
            buffer: r,
            length: i,
            finished: s,
            destroyed: o,
            pos: l
        } = this;
        return e.length = i, e.pos = l, e.finished = s, e.destroyed = o, i % n && e.buffer.set(r), e
    }
}
const Tb = (t, e, n) => t & e ^ ~t & n,
    Ob = (t, e, n) => t & e ^ t & n ^ e & n,
    Fb = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
    Vr = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
    Jr = new Uint32Array(64);
class Ub extends $1 {
    constructor() {
        super(64, 32, 8, !1), this.A = Vr[0] | 0, this.B = Vr[1] | 0, this.C = Vr[2] | 0, this.D = Vr[3] | 0, this.E = Vr[4] | 0, this.F = Vr[5] | 0, this.G = Vr[6] | 0, this.H = Vr[7] | 0
    }
    get() {
        const {
            A: e,
            B: n,
            C: r,
            D: i,
            E: s,
            F: o,
            G: l,
            H: a
        } = this;
        return [e, n, r, i, s, o, l, a]
    }
    set(e, n, r, i, s, o, l, a) {
        this.A = e | 0, this.B = n | 0, this.C = r | 0, this.D = i | 0, this.E = s | 0, this.F = o | 0, this.G = l | 0, this.H = a | 0
    }
    process(e, n) {
        for (let h = 0; h < 16; h++, n += 4) Jr[h] = e.getUint32(n, !1);
        for (let h = 16; h < 64; h++) {
            const m = Jr[h - 15],
                A = Jr[h - 2],
                k = zn(m, 7) ^ zn(m, 18) ^ m >>> 3,
                x = zn(A, 17) ^ zn(A, 19) ^ A >>> 10;
            Jr[h] = x + Jr[h - 7] + k + Jr[h - 16] | 0
        }
        let {
            A: r,
            B: i,
            C: s,
            D: o,
            E: l,
            F: a,
            G: c,
            H: d
        } = this;
        for (let h = 0; h < 64; h++) {
            const m = zn(l, 6) ^ zn(l, 11) ^ zn(l, 25),
                A = d + m + Tb(l, a, c) + Fb[h] + Jr[h] | 0,
                x = (zn(r, 2) ^ zn(r, 13) ^ zn(r, 22)) + Ob(r, i, s) | 0;
            d = c, c = a, a = l, l = o + A | 0, o = s, s = i, i = r, r = A + x | 0
        }
        r = r + this.A | 0, i = i + this.B | 0, s = s + this.C | 0, o = o + this.D | 0, l = l + this.E | 0, a = a + this.F | 0, c = c + this.G | 0, d = d + this.H | 0, this.set(r, i, s, o, l, a, c, d)
    }
    roundClean() {
        Jr.fill(0)
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
    }
}
const Z1 = fg(() => new Ub),
    Uu = BigInt(2 ** 32 - 1),
    Mh = BigInt(32);

function X1(t, e = !1) {
    return e ? {
        h: Number(t & Uu),
        l: Number(t >> Mh & Uu)
    } : {
        h: Number(t >> Mh & Uu) | 0,
        l: Number(t & Uu) | 0
    }
}

function q1(t, e = !1) {
    let n = new Uint32Array(t.length),
        r = new Uint32Array(t.length);
    for (let i = 0; i < t.length; i++) {
        const {
            h: s,
            l: o
        } = X1(t[i], e);
        [n[i], r[i]] = [s, o]
    }
    return [n, r]
}
const Lb = (t, e) => BigInt(t >>> 0) << Mh | BigInt(e >>> 0),
    Db = (t, e, n) => t >>> n,
    Mb = (t, e, n) => t << 32 - n | e >>> n,
    _b = (t, e, n) => t >>> n | e << 32 - n,
    zb = (t, e, n) => t << 32 - n | e >>> n,
    Gb = (t, e, n) => t << 64 - n | e >>> n - 32,
    Hb = (t, e, n) => t >>> n - 32 | e << 64 - n,
    Qb = (t, e) => e,
    jb = (t, e) => t,
    eA = (t, e, n) => t << n | e >>> 32 - n,
    tA = (t, e, n) => e << n | t >>> 32 - n,
    nA = (t, e, n) => e << n - 32 | t >>> 64 - n,
    rA = (t, e, n) => t << n - 32 | e >>> 64 - n;

function Vb(t, e, n, r) {
    const i = (e >>> 0) + (r >>> 0);
    return {
        h: t + n + (i / 2 ** 32 | 0) | 0,
        l: i | 0
    }
}
const Jb = (t, e, n) => (t >>> 0) + (e >>> 0) + (n >>> 0),
    Kb = (t, e, n, r) => e + n + r + (t / 2 ** 32 | 0) | 0,
    Wb = (t, e, n, r) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0),
    Yb = (t, e, n, r, i) => e + n + r + i + (t / 2 ** 32 | 0) | 0,
    $b = (t, e, n, r, i) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0),
    Zb = (t, e, n, r, i, s) => e + n + r + i + s + (t / 2 ** 32 | 0) | 0,
    se = {
        fromBig: X1,
        split: q1,
        toBig: Lb,
        shrSH: Db,
        shrSL: Mb,
        rotrSH: _b,
        rotrSL: zb,
        rotrBH: Gb,
        rotrBL: Hb,
        rotr32H: Qb,
        rotr32L: jb,
        rotlSH: eA,
        rotlSL: tA,
        rotlBH: nA,
        rotlBL: rA,
        add: Vb,
        add3L: Jb,
        add3H: Kb,
        add4L: Wb,
        add4H: Yb,
        add5H: Zb,
        add5L: $b
    },
    [Xb, qb] = se.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(t => BigInt(t))),
    Kr = new Uint32Array(80),
    Wr = new Uint32Array(80);
class ek extends $1 {
    constructor() {
        super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209
    }
    get() {
        const {
            Ah: e,
            Al: n,
            Bh: r,
            Bl: i,
            Ch: s,
            Cl: o,
            Dh: l,
            Dl: a,
            Eh: c,
            El: d,
            Fh: h,
            Fl: m,
            Gh: A,
            Gl: k,
            Hh: x,
            Hl: C
        } = this;
        return [e, n, r, i, s, o, l, a, c, d, h, m, A, k, x, C]
    }
    set(e, n, r, i, s, o, l, a, c, d, h, m, A, k, x, C) {
        this.Ah = e | 0, this.Al = n | 0, this.Bh = r | 0, this.Bl = i | 0, this.Ch = s | 0, this.Cl = o | 0, this.Dh = l | 0, this.Dl = a | 0, this.Eh = c | 0, this.El = d | 0, this.Fh = h | 0, this.Fl = m | 0, this.Gh = A | 0, this.Gl = k | 0, this.Hh = x | 0, this.Hl = C | 0
    }
    process(e, n) {
        for (let E = 0; E < 16; E++, n += 4) Kr[E] = e.getUint32(n), Wr[E] = e.getUint32(n += 4);
        for (let E = 16; E < 80; E++) {
            const B = Kr[E - 15] | 0,
                T = Wr[E - 15] | 0,
                O = se.rotrSH(B, T, 1) ^ se.rotrSH(B, T, 8) ^ se.shrSH(B, T, 7),
                U = se.rotrSL(B, T, 1) ^ se.rotrSL(B, T, 8) ^ se.shrSL(B, T, 7),
                F = Kr[E - 2] | 0,
                X = Wr[E - 2] | 0,
                j = se.rotrSH(F, X, 19) ^ se.rotrBH(F, X, 61) ^ se.shrSH(F, X, 6),
                q = se.rotrSL(F, X, 19) ^ se.rotrBL(F, X, 61) ^ se.shrSL(F, X, 6),
                ee = se.add4L(U, q, Wr[E - 7], Wr[E - 16]),
                we = se.add4H(ee, O, j, Kr[E - 7], Kr[E - 16]);
            Kr[E] = we | 0, Wr[E] = ee | 0
        }
        let {
            Ah: r,
            Al: i,
            Bh: s,
            Bl: o,
            Ch: l,
            Cl: a,
            Dh: c,
            Dl: d,
            Eh: h,
            El: m,
            Fh: A,
            Fl: k,
            Gh: x,
            Gl: C,
            Hh: y,
            Hl: w
        } = this;
        for (let E = 0; E < 80; E++) {
            const B = se.rotrSH(h, m, 14) ^ se.rotrSH(h, m, 18) ^ se.rotrBH(h, m, 41),
                T = se.rotrSL(h, m, 14) ^ se.rotrSL(h, m, 18) ^ se.rotrBL(h, m, 41),
                O = h & A ^ ~h & x,
                U = m & k ^ ~m & C,
                F = se.add5L(w, T, U, qb[E], Wr[E]),
                X = se.add5H(F, y, B, O, Xb[E], Kr[E]),
                j = F | 0,
                q = se.rotrSH(r, i, 28) ^ se.rotrBH(r, i, 34) ^ se.rotrBH(r, i, 39),
                ee = se.rotrSL(r, i, 28) ^ se.rotrBL(r, i, 34) ^ se.rotrBL(r, i, 39),
                we = r & s ^ r & l ^ s & l,
                Me = i & o ^ i & a ^ o & a;
            y = x | 0, w = C | 0, x = A | 0, C = k | 0, A = h | 0, k = m | 0, {
                h,
                l: m
            } = se.add(c | 0, d | 0, X | 0, j | 0), c = l | 0, d = a | 0, l = s | 0, a = o | 0, s = r | 0, o = i | 0;
            const H = se.add3L(j, ee, Me);
            r = se.add3H(H, X, q, we), i = H | 0
        } ({
            h: r,
            l: i
        } = se.add(this.Ah | 0, this.Al | 0, r | 0, i | 0)), {
            h: s,
            l: o
        } = se.add(this.Bh | 0, this.Bl | 0, s | 0, o | 0), {
            h: l,
            l: a
        } = se.add(this.Ch | 0, this.Cl | 0, l | 0, a | 0), {
            h: c,
            l: d
        } = se.add(this.Dh | 0, this.Dl | 0, c | 0, d | 0), {
            h,
            l: m
        } = se.add(this.Eh | 0, this.El | 0, h | 0, m | 0), {
            h: A,
            l: k
        } = se.add(this.Fh | 0, this.Fl | 0, A | 0, k | 0), {
            h: x,
            l: C
        } = se.add(this.Gh | 0, this.Gl | 0, x | 0, C | 0), {
            h: y,
            l: w
        } = se.add(this.Hh | 0, this.Hl | 0, y | 0, w | 0), this.set(r, i, s, o, l, a, c, d, h, m, A, k, x, C, y, w)
    }
    roundClean() {
        Kr.fill(0), Wr.fill(0)
    }
    destroy() {
        this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    }
}
const tk = fg(() => new ek);
var om = {};

function nk() {
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof om < "u") return om;
    throw new Error("unable to locate global object")
}
const lm = nk();
lm.crypto || lm.msCrypto;

function rk(t) {
    switch (t) {
        case "sha256":
            return Z1.create();
        case "sha512":
            return tk.create()
    }
    S(!1, "invalid hashing algorithm name", "algorithm", t)
}
const [iA, sA, oA] = [
    [],
    [],
    []
], ik = BigInt(0), Vl = BigInt(1), sk = BigInt(2), ok = BigInt(7), lk = BigInt(256), ak = BigInt(113);
for (let t = 0, e = Vl, n = 1, r = 0; t < 24; t++) {
    [n, r] = [r, (2 * n + 3 * r) % 5], iA.push(2 * (5 * r + n)), sA.push((t + 1) * (t + 2) / 2 % 64);
    let i = ik;
    for (let s = 0; s < 7; s++) e = (e << Vl ^ (e >> ok) * ak) % lk, e & sk && (i ^= Vl << (Vl << BigInt(s)) - Vl);
    oA.push(i)
}
const [uk, ck] = q1(oA, !0), am = (t, e, n) => n > 32 ? nA(t, e, n) : eA(t, e, n), um = (t, e, n) => n > 32 ? rA(t, e, n) : tA(t, e, n);

function fk(t, e = 24) {
    const n = new Uint32Array(10);
    for (let r = 24 - e; r < 24; r++) {
        for (let o = 0; o < 10; o++) n[o] = t[o] ^ t[o + 10] ^ t[o + 20] ^ t[o + 30] ^ t[o + 40];
        for (let o = 0; o < 10; o += 2) {
            const l = (o + 8) % 10,
                a = (o + 2) % 10,
                c = n[a],
                d = n[a + 1],
                h = am(c, d, 1) ^ n[l],
                m = um(c, d, 1) ^ n[l + 1];
            for (let A = 0; A < 50; A += 10) t[o + A] ^= h, t[o + A + 1] ^= m
        }
        let i = t[2],
            s = t[3];
        for (let o = 0; o < 24; o++) {
            const l = sA[o],
                a = am(i, s, l),
                c = um(i, s, l),
                d = iA[o];
            i = t[d], s = t[d + 1], t[d] = a, t[d + 1] = c
        }
        for (let o = 0; o < 50; o += 10) {
            for (let l = 0; l < 10; l++) n[l] = t[o + l];
            for (let l = 0; l < 10; l++) t[o + l] ^= ~n[(l + 2) % 10] & n[(l + 4) % 10]
        }
        t[0] ^= uk[r], t[1] ^= ck[r]
    }
    n.fill(0)
}
class dg extends cg {
    constructor(e, n, r, i = !1, s = 24) {
        if (super(), this.blockLen = e, this.suffix = n, this.outputLen = r, this.enableXOF = i, this.rounds = s, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, _c(r), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
        this.state = new Uint8Array(200), this.state32 = Sb(this.state)
    }
    keccak() {
        fk(this.state32, this.rounds), this.posOut = 0, this.pos = 0
    }
    update(e) {
        vl(this);
        const {
            blockLen: n,
            state: r
        } = this;
        e = Nf(e);
        const i = e.length;
        for (let s = 0; s < i;) {
            const o = Math.min(n - this.pos, i - s);
            for (let l = 0; l < o; l++) r[this.pos++] ^= e[s++];
            this.pos === n && this.keccak()
        }
        return this
    }
    finish() {
        if (this.finished) return;
        this.finished = !0;
        const {
            state: e,
            suffix: n,
            pos: r,
            blockLen: i
        } = this;
        e[r] ^= n, n & 128 && r === i - 1 && this.keccak(), e[i - 1] ^= 128, this.keccak()
    }
    writeInto(e) {
        vl(this, !1), ug(e), this.finish();
        const n = this.state,
            {
                blockLen: r
            } = this;
        for (let i = 0, s = e.length; i < s;) {
            this.posOut >= r && this.keccak();
            const o = Math.min(r - this.posOut, s - i);
            e.set(n.subarray(this.posOut, this.posOut + o), i), this.posOut += o, i += o
        }
        return e
    }
    xofInto(e) {
        if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
        return this.writeInto(e)
    }
    xof(e) {
        return _c(e), this.xofInto(new Uint8Array(e))
    }
    digestInto(e) {
        if (J1(e, this), this.finished) throw new Error("digest() was already called");
        return this.writeInto(e), this.destroy(), e
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen))
    }
    destroy() {
        this.destroyed = !0, this.state.fill(0)
    }
    _cloneInto(e) {
        const {
            blockLen: n,
            suffix: r,
            outputLen: i,
            rounds: s,
            enableXOF: o
        } = this;
        return e || (e = new dg(n, r, i, o, s)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = s, e.suffix = r, e.outputLen = i, e.enableXOF = o, e.destroyed = this.destroyed, e
    }
}
const dk = (t, e, n) => fg(() => new dg(e, t, n)),
    hk = dk(1, 136, 256 / 8);
let lA = !1;
const aA = function (t) {
    return hk(t)
};
let uA = aA;

function Ve(t) {
    const e = de(t, "data");
    return W(uA(e))
}
Ve._ = aA;
Ve.lock = function () {
    lA = !0
};
Ve.register = function (t) {
    if (lA) throw new TypeError("keccak256 is locked");
    uA = t
};
Object.freeze(Ve);
const cA = function (t) {
    return rk("sha256").update(t).digest()
};
let fA = cA,
    dA = !1;

function Rl(t) {
    const e = de(t, "data");
    return W(fA(e))
}
Rl._ = cA;
Rl.lock = function () {
    dA = !0
};
Rl.register = function (t) {
    if (dA) throw new Error("sha256 is locked");
    fA = t
};
Object.freeze(Rl);
Object.freeze(Rl); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const hA = BigInt(0),
    Sf = BigInt(1),
    pk = BigInt(2),
    Cf = t => t instanceof Uint8Array,
    gk = Array.from({
        length: 256
    }, (t, e) => e.toString(16).padStart(2, "0"));

function xl(t) {
    if (!Cf(t)) throw new Error("Uint8Array expected");
    let e = "";
    for (let n = 0; n < t.length; n++) e += gk[t[n]];
    return e
}

function pA(t) {
    const e = t.toString(16);
    return e.length & 1 ? `0${e}` : e
}

function hg(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    return BigInt(t === "" ? "0" : `0x${t}`)
}

function El(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    const e = t.length;
    if (e % 2) throw new Error("padded hex string expected, got unpadded hex of length " + e);
    const n = new Uint8Array(e / 2);
    for (let r = 0; r < n.length; r++) {
        const i = r * 2,
            s = t.slice(i, i + 2),
            o = Number.parseInt(s, 16);
        if (Number.isNaN(o) || o < 0) throw new Error("Invalid byte sequence");
        n[r] = o
    }
    return n
}

function ks(t) {
    return hg(xl(t))
}

function pg(t) {
    if (!Cf(t)) throw new Error("Uint8Array expected");
    return hg(xl(Uint8Array.from(t).reverse()))
}

function bl(t, e) {
    return El(t.toString(16).padStart(e * 2, "0"))
}

function gg(t, e) {
    return bl(t, e).reverse()
}

function mk(t) {
    return El(pA(t))
}

function En(t, e, n) {
    let r;
    if (typeof e == "string") try {
        r = El(e)
    } catch (s) {
        throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${s}`)
    } else if (Cf(e)) r = Uint8Array.from(e);
    else throw new Error(`${t} must be hex string or Uint8Array`);
    const i = r.length;
    if (typeof n == "number" && i !== n) throw new Error(`${t} expected ${n} bytes, got ${i}`);
    return r
}

function Ia(...t) {
    const e = new Uint8Array(t.reduce((r, i) => r + i.length, 0));
    let n = 0;
    return t.forEach(r => {
        if (!Cf(r)) throw new Error("Uint8Array expected");
        e.set(r, n), n += r.length
    }), e
}

function yk(t, e) {
    if (t.length !== e.length) return !1;
    for (let n = 0; n < t.length; n++)
        if (t[n] !== e[n]) return !1;
    return !0
}

function wk(t) {
    if (typeof t != "string") throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
    return new Uint8Array(new TextEncoder().encode(t))
}

function Ak(t) {
    let e;
    for (e = 0; t > hA; t >>= Sf, e += 1);
    return e
}

function vk(t, e) {
    return t >> BigInt(e) & Sf
}
const xk = (t, e, n) => t | (n ? Sf : hA) << BigInt(e),
    mg = t => (pk << BigInt(t - 1)) - Sf,
    yd = t => new Uint8Array(t),
    cm = t => Uint8Array.from(t);

function gA(t, e, n) {
    if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
    if (typeof e != "number" || e < 2) throw new Error("qByteLen must be a number");
    if (typeof n != "function") throw new Error("hmacFn must be a function");
    let r = yd(t),
        i = yd(t),
        s = 0;
    const o = () => {
        r.fill(1), i.fill(0), s = 0
    },
        l = (...h) => n(i, r, ...h),
        a = (h = yd()) => {
            i = l(cm([0]), h), r = l(), h.length !== 0 && (i = l(cm([1]), h), r = l())
        },
        c = () => {
            if (s++ >= 1e3) throw new Error("drbg: tried 1000 values");
            let h = 0;
            const m = [];
            for (; h < e;) {
                r = l();
                const A = r.slice();
                m.push(A), h += r.length
            }
            return Ia(...m)
        };
    return (h, m) => {
        o(), a(h);
        let A;
        for (; !(A = m(c()));) a();
        return o(), A
    }
}
const Ek = {
    bigint: t => typeof t == "bigint",
    function: t => typeof t == "function",
    boolean: t => typeof t == "boolean",
    string: t => typeof t == "string",
    stringOrUint8Array: t => typeof t == "string" || t instanceof Uint8Array,
    isSafeInteger: t => Number.isSafeInteger(t),
    array: t => Array.isArray(t),
    field: (t, e) => e.Fp.isValid(t),
    hash: t => typeof t == "function" && Number.isSafeInteger(t.outputLen)
};

function su(t, e, n = {}) {
    const r = (i, s, o) => {
        const l = Ek[s];
        if (typeof l != "function") throw new Error(`Invalid validator "${s}", expected function`);
        const a = t[i];
        if (!(o && a === void 0) && !l(a, t)) throw new Error(`Invalid param ${String(i)}=${a} (${typeof a}), expected ${s}`)
    };
    for (const [i, s] of Object.entries(e)) r(i, s, !1);
    for (const [i, s] of Object.entries(n)) r(i, s, !0);
    return t
}
const bk = Object.freeze(Object.defineProperty({
    __proto__: null,
    bitGet: vk,
    bitLen: Ak,
    bitMask: mg,
    bitSet: xk,
    bytesToHex: xl,
    bytesToNumberBE: ks,
    bytesToNumberLE: pg,
    concatBytes: Ia,
    createHmacDrbg: gA,
    ensureBytes: En,
    equalBytes: yk,
    hexToBytes: El,
    hexToNumber: hg,
    numberToBytesBE: bl,
    numberToBytesLE: gg,
    numberToHexUnpadded: pA,
    numberToVarBytesBE: mk,
    utf8ToBytes: wk,
    validateObject: su
}, Symbol.toStringTag, {
    value: "Module"
})); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const qe = BigInt(0),
    Ge = BigInt(1),
    Ji = BigInt(2),
    kk = BigInt(3),
    _h = BigInt(4),
    fm = BigInt(5),
    dm = BigInt(8);
BigInt(9);
BigInt(16);

function Ot(t, e) {
    const n = t % e;
    return n >= qe ? n : e + n
}

function Nk(t, e, n) {
    if (n <= qe || e < qe) throw new Error("Expected power/modulo > 0");
    if (n === Ge) return qe;
    let r = Ge;
    for (; e > qe;) e & Ge && (r = r * t % n), t = t * t % n, e >>= Ge;
    return r
}

function tn(t, e, n) {
    let r = t;
    for (; e-- > qe;) r *= r, r %= n;
    return r
}

function zh(t, e) {
    if (t === qe || e <= qe) throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
    let n = Ot(t, e),
        r = e,
        i = qe,
        s = Ge;
    for (; n !== qe;) {
        const l = r / n,
            a = r % n,
            c = i - s * l;
        r = n, n = a, i = s, s = c
    }
    if (r !== Ge) throw new Error("invert: does not exist");
    return Ot(i, e)
}

function Sk(t) {
    const e = (t - Ge) / Ji;
    let n, r, i;
    for (n = t - Ge, r = 0; n % Ji === qe; n /= Ji, r++);
    for (i = Ji; i < t && Nk(i, e, t) !== t - Ge; i++);
    if (r === 1) {
        const o = (t + Ge) / _h;
        return function (a, c) {
            const d = a.pow(c, o);
            if (!a.eql(a.sqr(d), c)) throw new Error("Cannot find square root");
            return d
        }
    }
    const s = (n + Ge) / Ji;
    return function (l, a) {
        if (l.pow(a, e) === l.neg(l.ONE)) throw new Error("Cannot find square root");
        let c = r,
            d = l.pow(l.mul(l.ONE, i), n),
            h = l.pow(a, s),
            m = l.pow(a, n);
        for (; !l.eql(m, l.ONE);) {
            if (l.eql(m, l.ZERO)) return l.ZERO;
            let A = 1;
            for (let x = l.sqr(m); A < c && !l.eql(x, l.ONE); A++) x = l.sqr(x);
            const k = l.pow(d, Ge << BigInt(c - A - 1));
            d = l.sqr(k), h = l.mul(h, k), m = l.mul(m, d), c = A
        }
        return h
    }
}

function Ck(t) {
    if (t % _h === kk) {
        const e = (t + Ge) / _h;
        return function (r, i) {
            const s = r.pow(i, e);
            if (!r.eql(r.sqr(s), i)) throw new Error("Cannot find square root");
            return s
        }
    }
    if (t % dm === fm) {
        const e = (t - fm) / dm;
        return function (r, i) {
            const s = r.mul(i, Ji),
                o = r.pow(s, e),
                l = r.mul(i, o),
                a = r.mul(r.mul(l, Ji), o),
                c = r.mul(l, r.sub(a, r.ONE));
            if (!r.eql(r.sqr(c), i)) throw new Error("Cannot find square root");
            return c
        }
    }
    return Sk(t)
}
const Pk = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];

function Bk(t) {
    const e = {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "isSafeInteger",
        BITS: "isSafeInteger"
    },
        n = Pk.reduce((r, i) => (r[i] = "function", r), e);
    return su(t, n)
}

function Ik(t, e, n) {
    if (n < qe) throw new Error("Expected power > 0");
    if (n === qe) return t.ONE;
    if (n === Ge) return e;
    let r = t.ONE,
        i = e;
    for (; n > qe;) n & Ge && (r = t.mul(r, i)), i = t.sqr(i), n >>= Ge;
    return r
}

function Rk(t, e) {
    const n = new Array(e.length),
        r = e.reduce((s, o, l) => t.is0(o) ? s : (n[l] = s, t.mul(s, o)), t.ONE),
        i = t.inv(r);
    return e.reduceRight((s, o, l) => t.is0(o) ? s : (n[l] = t.mul(s, n[l]), t.mul(s, o)), i), n
}

function mA(t, e) {
    const n = e !== void 0 ? e : t.toString(2).length,
        r = Math.ceil(n / 8);
    return {
        nBitLength: n,
        nByteLength: r
    }
}

function Tk(t, e, n = !1, r = {}) {
    if (t <= qe) throw new Error(`Expected Field ORDER > 0, got ${t}`);
    const {
        nBitLength: i,
        nByteLength: s
    } = mA(t, e);
    if (s > 2048) throw new Error("Field lengths over 2048 bytes are not supported");
    const o = Ck(t),
        l = Object.freeze({
            ORDER: t,
            BITS: i,
            BYTES: s,
            MASK: mg(i),
            ZERO: qe,
            ONE: Ge,
            create: a => Ot(a, t),
            isValid: a => {
                if (typeof a != "bigint") throw new Error(`Invalid field element: expected bigint, got ${typeof a}`);
                return qe <= a && a < t
            },
            is0: a => a === qe,
            isOdd: a => (a & Ge) === Ge,
            neg: a => Ot(-a, t),
            eql: (a, c) => a === c,
            sqr: a => Ot(a * a, t),
            add: (a, c) => Ot(a + c, t),
            sub: (a, c) => Ot(a - c, t),
            mul: (a, c) => Ot(a * c, t),
            pow: (a, c) => Ik(l, a, c),
            div: (a, c) => Ot(a * zh(c, t), t),
            sqrN: a => a * a,
            addN: (a, c) => a + c,
            subN: (a, c) => a - c,
            mulN: (a, c) => a * c,
            inv: a => zh(a, t),
            sqrt: r.sqrt || (a => o(l, a)),
            invertBatch: a => Rk(l, a),
            cmov: (a, c, d) => d ? c : a,
            toBytes: a => n ? gg(a, s) : bl(a, s),
            fromBytes: a => {
                if (a.length !== s) throw new Error(`Fp.fromBytes: expected ${s}, got ${a.length}`);
                return n ? pg(a) : ks(a)
            }
        });
    return Object.freeze(l)
}

function yA(t) {
    if (typeof t != "bigint") throw new Error("field order must be bigint");
    const e = t.toString(2).length;
    return Math.ceil(e / 8)
}

function wA(t) {
    const e = yA(t);
    return e + Math.ceil(e / 2)
}

function Ok(t, e, n = !1) {
    const r = t.length,
        i = yA(e),
        s = wA(e);
    if (r < 16 || r < s || r > 1024) throw new Error(`expected ${s}-1024 bytes of input, got ${r}`);
    const o = n ? ks(t) : pg(t),
        l = Ot(o, e - Ge) + Ge;
    return n ? gg(l, i) : bl(l, i)
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Fk = BigInt(0),
    wd = BigInt(1);

function Uk(t, e) {
    const n = (i, s) => {
        const o = s.negate();
        return i ? o : s
    },
        r = i => {
            const s = Math.ceil(e / i) + 1,
                o = 2 ** (i - 1);
            return {
                windows: s,
                windowSize: o
            }
        };
    return {
        constTimeNegate: n,
        unsafeLadder(i, s) {
            let o = t.ZERO,
                l = i;
            for (; s > Fk;) s & wd && (o = o.add(l)), l = l.double(), s >>= wd;
            return o
        },
        precomputeWindow(i, s) {
            const {
                windows: o,
                windowSize: l
            } = r(s), a = [];
            let c = i,
                d = c;
            for (let h = 0; h < o; h++) {
                d = c, a.push(d);
                for (let m = 1; m < l; m++) d = d.add(c), a.push(d);
                c = d.double()
            }
            return a
        },
        wNAF(i, s, o) {
            const {
                windows: l,
                windowSize: a
            } = r(i);
            let c = t.ZERO,
                d = t.BASE;
            const h = BigInt(2 ** i - 1),
                m = 2 ** i,
                A = BigInt(i);
            for (let k = 0; k < l; k++) {
                const x = k * a;
                let C = Number(o & h);
                o >>= A, C > a && (C -= m, o += wd);
                const y = x,
                    w = x + Math.abs(C) - 1,
                    E = k % 2 !== 0,
                    B = C < 0;
                C === 0 ? d = d.add(n(E, s[y])) : c = c.add(n(B, s[w]))
            }
            return {
                p: c,
                f: d
            }
        },
        wNAFCached(i, s, o, l) {
            const a = i._WINDOW_SIZE || 1;
            let c = s.get(i);
            return c || (c = this.precomputeWindow(i, a), a !== 1 && s.set(i, l(c))), this.wNAF(a, c, o)
        }
    }
}

function AA(t) {
    return Bk(t.Fp), su(t, {
        n: "bigint",
        h: "bigint",
        Gx: "field",
        Gy: "field"
    }, {
        nBitLength: "isSafeInteger",
        nByteLength: "isSafeInteger"
    }), Object.freeze({
        ...mA(t.n, t.nBitLength),
        ...t,
        p: t.Fp.ORDER
    })
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Lk(t) {
    const e = AA(t);
    su(e, {
        a: "field",
        b: "field"
    }, {
        allowedPrivateKeyLengths: "array",
        wrapPrivateKey: "boolean",
        isTorsionFree: "function",
        clearCofactor: "function",
        allowInfinityPoint: "boolean",
        fromBytes: "function",
        toBytes: "function"
    });
    const {
        endo: n,
        Fp: r,
        a: i
    } = e;
    if (n) {
        if (!r.eql(i, r.ZERO)) throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
        if (typeof n != "object" || typeof n.beta != "bigint" || typeof n.splitScalar != "function") throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")
    }
    return Object.freeze({
        ...e
    })
}
const {
    bytesToNumberBE: Dk,
    hexToBytes: Mk
} = bk, qi = {
    Err: class extends Error {
        constructor(e = "") {
            super(e)
        }
    },
    _parseInt(t) {
        const {
            Err: e
        } = qi;
        if (t.length < 2 || t[0] !== 2) throw new e("Invalid signature integer tag");
        const n = t[1],
            r = t.subarray(2, n + 2);
        if (!n || r.length !== n) throw new e("Invalid signature integer: wrong length");
        if (r[0] & 128) throw new e("Invalid signature integer: negative");
        if (r[0] === 0 && !(r[1] & 128)) throw new e("Invalid signature integer: unnecessary leading zero");
        return {
            d: Dk(r),
            l: t.subarray(n + 2)
        }
    },
    toSig(t) {
        const {
            Err: e
        } = qi, n = typeof t == "string" ? Mk(t) : t;
        if (!(n instanceof Uint8Array)) throw new Error("ui8a expected");
        let r = n.length;
        if (r < 2 || n[0] != 48) throw new e("Invalid signature tag");
        if (n[1] !== r - 2) throw new e("Invalid signature: incorrect length");
        const {
            d: i,
            l: s
        } = qi._parseInt(n.subarray(2)), {
            d: o,
            l
        } = qi._parseInt(s);
        if (l.length) throw new e("Invalid signature: left bytes after parsing");
        return {
            r: i,
            s: o
        }
    },
    hexFromSig(t) {
        const e = c => Number.parseInt(c[0], 16) & 8 ? "00" + c : c,
            n = c => {
                const d = c.toString(16);
                return d.length & 1 ? `0${d}` : d
            },
            r = e(n(t.s)),
            i = e(n(t.r)),
            s = r.length / 2,
            o = i.length / 2,
            l = n(s),
            a = n(o);
        return `30${n(o + s + 4)}02${a}${i}02${l}${r}`
    }
}, Sr = BigInt(0), cn = BigInt(1);
BigInt(2);
const hm = BigInt(3);
BigInt(4);

function _k(t) {
    const e = Lk(t),
        {
            Fp: n
        } = e,
        r = e.toBytes || ((k, x, C) => {
            const y = x.toAffine();
            return Ia(Uint8Array.from([4]), n.toBytes(y.x), n.toBytes(y.y))
        }),
        i = e.fromBytes || (k => {
            const x = k.subarray(1),
                C = n.fromBytes(x.subarray(0, n.BYTES)),
                y = n.fromBytes(x.subarray(n.BYTES, 2 * n.BYTES));
            return {
                x: C,
                y
            }
        });

    function s(k) {
        const {
            a: x,
            b: C
        } = e, y = n.sqr(k), w = n.mul(y, k);
        return n.add(n.add(w, n.mul(k, x)), C)
    }
    if (!n.eql(n.sqr(e.Gy), s(e.Gx))) throw new Error("bad generator point: equation left != right");

    function o(k) {
        return typeof k == "bigint" && Sr < k && k < e.n
    }

    function l(k) {
        if (!o(k)) throw new Error("Expected valid bigint: 0 < bigint < curve.n")
    }

    function a(k) {
        const {
            allowedPrivateKeyLengths: x,
            nByteLength: C,
            wrapPrivateKey: y,
            n: w
        } = e;
        if (x && typeof k != "bigint") {
            if (k instanceof Uint8Array && (k = xl(k)), typeof k != "string" || !x.includes(k.length)) throw new Error("Invalid key");
            k = k.padStart(C * 2, "0")
        }
        let E;
        try {
            E = typeof k == "bigint" ? k : ks(En("private key", k, C))
        } catch {
            throw new Error(`private key must be ${C} bytes, hex or bigint, not ${typeof k}`)
        }
        return y && (E = Ot(E, w)), l(E), E
    }
    const c = new Map;

    function d(k) {
        if (!(k instanceof h)) throw new Error("ProjectivePoint expected")
    }
    class h {
        constructor(x, C, y) {
            if (this.px = x, this.py = C, this.pz = y, x == null || !n.isValid(x)) throw new Error("x required");
            if (C == null || !n.isValid(C)) throw new Error("y required");
            if (y == null || !n.isValid(y)) throw new Error("z required")
        }
        static fromAffine(x) {
            const {
                x: C,
                y
            } = x || {};
            if (!x || !n.isValid(C) || !n.isValid(y)) throw new Error("invalid affine point");
            if (x instanceof h) throw new Error("projective point not allowed");
            const w = E => n.eql(E, n.ZERO);
            return w(C) && w(y) ? h.ZERO : new h(C, y, n.ONE)
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        static normalizeZ(x) {
            const C = n.invertBatch(x.map(y => y.pz));
            return x.map((y, w) => y.toAffine(C[w])).map(h.fromAffine)
        }
        static fromHex(x) {
            const C = h.fromAffine(i(En("pointHex", x)));
            return C.assertValidity(), C
        }
        static fromPrivateKey(x) {
            return h.BASE.multiply(a(x))
        }
        _setWindowSize(x) {
            this._WINDOW_SIZE = x, c.delete(this)
        }
        assertValidity() {
            if (this.is0()) {
                if (e.allowInfinityPoint && !n.is0(this.py)) return;
                throw new Error("bad point: ZERO")
            }
            const {
                x,
                y: C
            } = this.toAffine();
            if (!n.isValid(x) || !n.isValid(C)) throw new Error("bad point: x or y not FE");
            const y = n.sqr(C),
                w = s(x);
            if (!n.eql(y, w)) throw new Error("bad point: equation left != right");
            if (!this.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup")
        }
        hasEvenY() {
            const {
                y: x
            } = this.toAffine();
            if (n.isOdd) return !n.isOdd(x);
            throw new Error("Field doesn't support isOdd")
        }
        equals(x) {
            d(x);
            const {
                px: C,
                py: y,
                pz: w
            } = this, {
                px: E,
                py: B,
                pz: T
            } = x, O = n.eql(n.mul(C, T), n.mul(E, w)), U = n.eql(n.mul(y, T), n.mul(B, w));
            return O && U
        }
        negate() {
            return new h(this.px, n.neg(this.py), this.pz)
        }
        double() {
            const {
                a: x,
                b: C
            } = e, y = n.mul(C, hm), {
                px: w,
                py: E,
                pz: B
            } = this;
            let T = n.ZERO,
                O = n.ZERO,
                U = n.ZERO,
                F = n.mul(w, w),
                X = n.mul(E, E),
                j = n.mul(B, B),
                q = n.mul(w, E);
            return q = n.add(q, q), U = n.mul(w, B), U = n.add(U, U), T = n.mul(x, U), O = n.mul(y, j), O = n.add(T, O), T = n.sub(X, O), O = n.add(X, O), O = n.mul(T, O), T = n.mul(q, T), U = n.mul(y, U), j = n.mul(x, j), q = n.sub(F, j), q = n.mul(x, q), q = n.add(q, U), U = n.add(F, F), F = n.add(U, F), F = n.add(F, j), F = n.mul(F, q), O = n.add(O, F), j = n.mul(E, B), j = n.add(j, j), F = n.mul(j, q), T = n.sub(T, F), U = n.mul(j, X), U = n.add(U, U), U = n.add(U, U), new h(T, O, U)
        }
        add(x) {
            d(x);
            const {
                px: C,
                py: y,
                pz: w
            } = this, {
                px: E,
                py: B,
                pz: T
            } = x;
            let O = n.ZERO,
                U = n.ZERO,
                F = n.ZERO;
            const X = e.a,
                j = n.mul(e.b, hm);
            let q = n.mul(C, E),
                ee = n.mul(y, B),
                we = n.mul(w, T),
                Me = n.add(C, y),
                H = n.add(E, B);
            Me = n.mul(Me, H), H = n.add(q, ee), Me = n.sub(Me, H), H = n.add(C, w);
            let V = n.add(E, T);
            return H = n.mul(H, V), V = n.add(q, we), H = n.sub(H, V), V = n.add(y, w), O = n.add(B, T), V = n.mul(V, O), O = n.add(ee, we), V = n.sub(V, O), F = n.mul(X, H), O = n.mul(j, we), F = n.add(O, F), O = n.sub(ee, F), F = n.add(ee, F), U = n.mul(O, F), ee = n.add(q, q), ee = n.add(ee, q), we = n.mul(X, we), H = n.mul(j, H), ee = n.add(ee, we), we = n.sub(q, we), we = n.mul(X, we), H = n.add(H, we), q = n.mul(ee, H), U = n.add(U, q), q = n.mul(V, H), O = n.mul(Me, O), O = n.sub(O, q), q = n.mul(Me, ee), F = n.mul(V, F), F = n.add(F, q), new h(O, U, F)
        }
        subtract(x) {
            return this.add(x.negate())
        }
        is0() {
            return this.equals(h.ZERO)
        }
        wNAF(x) {
            return A.wNAFCached(this, c, x, C => {
                const y = n.invertBatch(C.map(w => w.pz));
                return C.map((w, E) => w.toAffine(y[E])).map(h.fromAffine)
            })
        }
        multiplyUnsafe(x) {
            const C = h.ZERO;
            if (x === Sr) return C;
            if (l(x), x === cn) return this;
            const {
                endo: y
            } = e;
            if (!y) return A.unsafeLadder(this, x);
            let {
                k1neg: w,
                k1: E,
                k2neg: B,
                k2: T
            } = y.splitScalar(x), O = C, U = C, F = this;
            for (; E > Sr || T > Sr;) E & cn && (O = O.add(F)), T & cn && (U = U.add(F)), F = F.double(), E >>= cn, T >>= cn;
            return w && (O = O.negate()), B && (U = U.negate()), U = new h(n.mul(U.px, y.beta), U.py, U.pz), O.add(U)
        }
        multiply(x) {
            l(x);
            let C = x,
                y, w;
            const {
                endo: E
            } = e;
            if (E) {
                const {
                    k1neg: B,
                    k1: T,
                    k2neg: O,
                    k2: U
                } = E.splitScalar(C);
                let {
                    p: F,
                    f: X
                } = this.wNAF(T), {
                    p: j,
                    f: q
                } = this.wNAF(U);
                F = A.constTimeNegate(B, F), j = A.constTimeNegate(O, j), j = new h(n.mul(j.px, E.beta), j.py, j.pz), y = F.add(j), w = X.add(q)
            } else {
                const {
                    p: B,
                    f: T
                } = this.wNAF(C);
                y = B, w = T
            }
            return h.normalizeZ([y, w])[0]
        }
        multiplyAndAddUnsafe(x, C, y) {
            const w = h.BASE,
                E = (T, O) => O === Sr || O === cn || !T.equals(w) ? T.multiplyUnsafe(O) : T.multiply(O),
                B = E(this, C).add(E(x, y));
            return B.is0() ? void 0 : B
        }
        toAffine(x) {
            const {
                px: C,
                py: y,
                pz: w
            } = this, E = this.is0();
            x == null && (x = E ? n.ONE : n.inv(w));
            const B = n.mul(C, x),
                T = n.mul(y, x),
                O = n.mul(w, x);
            if (E) return {
                x: n.ZERO,
                y: n.ZERO
            };
            if (!n.eql(O, n.ONE)) throw new Error("invZ was invalid");
            return {
                x: B,
                y: T
            }
        }
        isTorsionFree() {
            const {
                h: x,
                isTorsionFree: C
            } = e;
            if (x === cn) return !0;
            if (C) return C(h, this);
            throw new Error("isTorsionFree() has not been declared for the elliptic curve")
        }
        clearCofactor() {
            const {
                h: x,
                clearCofactor: C
            } = e;
            return x === cn ? this : C ? C(h, this) : this.multiplyUnsafe(e.h)
        }
        toRawBytes(x = !0) {
            return this.assertValidity(), r(h, this, x)
        }
        toHex(x = !0) {
            return xl(this.toRawBytes(x))
        }
    }
    h.BASE = new h(e.Gx, e.Gy, n.ONE), h.ZERO = new h(n.ZERO, n.ONE, n.ZERO);
    const m = e.nBitLength,
        A = Uk(h, e.endo ? Math.ceil(m / 2) : m);
    return {
        CURVE: e,
        ProjectivePoint: h,
        normPrivateKeyToScalar: a,
        weierstrassEquation: s,
        isWithinCurveOrder: o
    }
}

function zk(t) {
    const e = AA(t);
    return su(e, {
        hash: "hash",
        hmac: "function",
        randomBytes: "function"
    }, {
        bits2int: "function",
        bits2int_modN: "function",
        lowS: "boolean"
    }), Object.freeze({
        lowS: !0,
        ...e
    })
}

function Gk(t) {
    const e = zk(t),
        {
            Fp: n,
            n: r
        } = e,
        i = n.BYTES + 1,
        s = 2 * n.BYTES + 1;

    function o(H) {
        return Sr < H && H < n.ORDER
    }

    function l(H) {
        return Ot(H, r)
    }

    function a(H) {
        return zh(H, r)
    }
    const {
        ProjectivePoint: c,
        normPrivateKeyToScalar: d,
        weierstrassEquation: h,
        isWithinCurveOrder: m
    } = _k({
        ...e,
        toBytes(H, V, re) {
            const _ = V.toAffine(),
                Q = n.toBytes(_.x),
                $ = Ia;
            return re ? $(Uint8Array.from([V.hasEvenY() ? 2 : 3]), Q) : $(Uint8Array.from([4]), Q, n.toBytes(_.y))
        },
        fromBytes(H) {
            const V = H.length,
                re = H[0],
                _ = H.subarray(1);
            if (V === i && (re === 2 || re === 3)) {
                const Q = ks(_);
                if (!o(Q)) throw new Error("Point is not on curve");
                const $ = h(Q);
                let Y = n.sqrt($);
                const ne = (Y & cn) === cn;
                return (re & 1) === 1 !== ne && (Y = n.neg(Y)), {
                    x: Q,
                    y: Y
                }
            } else if (V === s && re === 4) {
                const Q = n.fromBytes(_.subarray(0, n.BYTES)),
                    $ = n.fromBytes(_.subarray(n.BYTES, 2 * n.BYTES));
                return {
                    x: Q,
                    y: $
                }
            } else throw new Error(`Point of length ${V} was invalid. Expected ${i} compressed bytes or ${s} uncompressed bytes`)
        }
    }), A = H => xl(bl(H, e.nByteLength));

    function k(H) {
        const V = r >> cn;
        return H > V
    }

    function x(H) {
        return k(H) ? l(-H) : H
    }
    const C = (H, V, re) => ks(H.slice(V, re));
    class y {
        constructor(V, re, _) {
            this.r = V, this.s = re, this.recovery = _, this.assertValidity()
        }
        static fromCompact(V) {
            const re = e.nByteLength;
            return V = En("compactSignature", V, re * 2), new y(C(V, 0, re), C(V, re, 2 * re))
        }
        static fromDER(V) {
            const {
                r: re,
                s: _
            } = qi.toSig(En("DER", V));
            return new y(re, _)
        }
        assertValidity() {
            if (!m(this.r)) throw new Error("r must be 0 < r < CURVE.n");
            if (!m(this.s)) throw new Error("s must be 0 < s < CURVE.n")
        }
        addRecoveryBit(V) {
            return new y(this.r, this.s, V)
        }
        recoverPublicKey(V) {
            const {
                r: re,
                s: _,
                recovery: Q
            } = this, $ = U(En("msgHash", V));
            if (Q == null || ![0, 1, 2, 3].includes(Q)) throw new Error("recovery id invalid");
            const Y = Q === 2 || Q === 3 ? re + e.n : re;
            if (Y >= n.ORDER) throw new Error("recovery id 2 or 3 invalid");
            const ne = Q & 1 ? "03" : "02",
                at = c.fromHex(ne + A(Y)),
                Je = a(Y),
                Gt = l(-$ * Je),
                ut = l(_ * Je),
                ct = c.BASE.multiplyAndAddUnsafe(at, Gt, ut);
            if (!ct) throw new Error("point at infinify");
            return ct.assertValidity(), ct
        }
        hasHighS() {
            return k(this.s)
        }
        normalizeS() {
            return this.hasHighS() ? new y(this.r, l(-this.s), this.recovery) : this
        }
        toDERRawBytes() {
            return El(this.toDERHex())
        }
        toDERHex() {
            return qi.hexFromSig({
                r: this.r,
                s: this.s
            })
        }
        toCompactRawBytes() {
            return El(this.toCompactHex())
        }
        toCompactHex() {
            return A(this.r) + A(this.s)
        }
    }
    const w = {
        isValidPrivateKey(H) {
            try {
                return d(H), !0
            } catch {
                return !1
            }
        },
        normPrivateKeyToScalar: d,
        randomPrivateKey: () => {
            const H = wA(e.n);
            return Ok(e.randomBytes(H), e.n)
        },
        precompute(H = 8, V = c.BASE) {
            return V._setWindowSize(H), V.multiply(BigInt(3)), V
        }
    };

    function E(H, V = !0) {
        return c.fromPrivateKey(H).toRawBytes(V)
    }

    function B(H) {
        const V = H instanceof Uint8Array,
            re = typeof H == "string",
            _ = (V || re) && H.length;
        return V ? _ === i || _ === s : re ? _ === 2 * i || _ === 2 * s : H instanceof c
    }

    function T(H, V, re = !0) {
        if (B(H)) throw new Error("first arg must be private key");
        if (!B(V)) throw new Error("second arg must be public key");
        return c.fromHex(V).multiply(d(H)).toRawBytes(re)
    }
    const O = e.bits2int || function (H) {
        const V = ks(H),
            re = H.length * 8 - e.nBitLength;
        return re > 0 ? V >> BigInt(re) : V
    },
        U = e.bits2int_modN || function (H) {
            return l(O(H))
        },
        F = mg(e.nBitLength);

    function X(H) {
        if (typeof H != "bigint") throw new Error("bigint expected");
        if (!(Sr <= H && H < F)) throw new Error(`bigint expected < 2^${e.nBitLength}`);
        return bl(H, e.nByteLength)
    }

    function j(H, V, re = q) {
        if (["recovered", "canonical"].some(yn => yn in re)) throw new Error("sign() legacy options not supported");
        const {
            hash: _,
            randomBytes: Q
        } = e;
        let {
            lowS: $,
            prehash: Y,
            extraEntropy: ne
        } = re;
        $ == null && ($ = !0), H = En("msgHash", H), Y && (H = En("prehashed msgHash", _(H)));
        const at = U(H),
            Je = d(V),
            Gt = [X(Je), X(at)];
        if (ne != null) {
            const yn = ne === !0 ? Q(n.BYTES) : ne;
            Gt.push(En("extraEntropy", yn))
        }
        const ut = Ia(...Gt),
            ct = at;

        function Dn(yn) {
            const ir = O(yn);
            if (!m(ir)) return;
            const cu = a(ir),
                sr = c.BASE.multiply(ir).toAffine(),
                Ye = l(sr.x);
            if (Ye === Sr) return;
            const en = l(cu * l(ct + Ye * Je));
            if (en === Sr) return;
            let fu = (sr.x === Ye ? 0 : 2) | Number(sr.y & cn),
                du = en;
            return $ && k(en) && (du = x(en), fu ^= 1), new y(Ye, du, fu)
        }
        return {
            seed: ut,
            k2sig: Dn
        }
    }
    const q = {
        lowS: e.lowS,
        prehash: !1
    },
        ee = {
            lowS: e.lowS,
            prehash: !1
        };

    function we(H, V, re = q) {
        const {
            seed: _,
            k2sig: Q
        } = j(H, V, re), $ = e;
        return gA($.hash.outputLen, $.nByteLength, $.hmac)(_, Q)
    }
    c.BASE._setWindowSize(8);

    function Me(H, V, re, _ = ee) {
        var sr;
        const Q = H;
        if (V = En("msgHash", V), re = En("publicKey", re), "strict" in _) throw new Error("options.strict was renamed to lowS");
        const {
            lowS: $,
            prehash: Y
        } = _;
        let ne, at;
        try {
            if (typeof Q == "string" || Q instanceof Uint8Array) try {
                ne = y.fromDER(Q)
            } catch (Ye) {
                if (!(Ye instanceof qi.Err)) throw Ye;
                ne = y.fromCompact(Q)
            } else if (typeof Q == "object" && typeof Q.r == "bigint" && typeof Q.s == "bigint") {
                const {
                    r: Ye,
                    s: en
                } = Q;
                ne = new y(Ye, en)
            } else throw new Error("PARSE");
            at = c.fromHex(re)
        } catch (Ye) {
            if (Ye.message === "PARSE") throw new Error("signature must be Signature instance, Uint8Array or hex string");
            return !1
        }
        if ($ && ne.hasHighS()) return !1;
        Y && (V = e.hash(V));
        const {
            r: Je,
            s: Gt
        } = ne, ut = U(V), ct = a(Gt), Dn = l(ut * ct), yn = l(Je * ct), ir = (sr = c.BASE.multiplyAndAddUnsafe(at, Dn, yn)) == null ? void 0 : sr.toAffine();
        return ir ? l(ir.x) === Je : !1
    }
    return {
        CURVE: e,
        getPublicKey: E,
        getSharedSecret: T,
        sign: we,
        verify: Me,
        ProjectivePoint: c,
        Signature: y,
        utils: w
    }
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Hk(t) {
    return {
        hash: t,
        hmac: (e, ...n) => Y1(t, e, Bb(...n)),
        randomBytes: Ib
    }
}

function Qk(t, e) {
    const n = r => Gk({
        ...t,
        ...Hk(r)
    });
    return Object.freeze({
        ...n(e),
        create: n
    })
} /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const vA = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
    pm = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
    jk = BigInt(1),
    Gh = BigInt(2),
    gm = (t, e) => (t + e / Gh) / e;

function Vk(t) {
    const e = vA,
        n = BigInt(3),
        r = BigInt(6),
        i = BigInt(11),
        s = BigInt(22),
        o = BigInt(23),
        l = BigInt(44),
        a = BigInt(88),
        c = t * t * t % e,
        d = c * c * t % e,
        h = tn(d, n, e) * d % e,
        m = tn(h, n, e) * d % e,
        A = tn(m, Gh, e) * c % e,
        k = tn(A, i, e) * A % e,
        x = tn(k, s, e) * k % e,
        C = tn(x, l, e) * x % e,
        y = tn(C, a, e) * C % e,
        w = tn(y, l, e) * x % e,
        E = tn(w, n, e) * d % e,
        B = tn(E, o, e) * k % e,
        T = tn(B, r, e) * c % e,
        O = tn(T, Gh, e);
    if (!Hh.eql(Hh.sqr(O), t)) throw new Error("Cannot find square root");
    return O
}
const Hh = Tk(vA, void 0, void 0, {
    sqrt: Vk
}),
    Yr = Qk({
        a: BigInt(0),
        b: BigInt(7),
        Fp: Hh,
        n: pm,
        Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
        Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
        h: BigInt(1),
        lowS: !0,
        endo: {
            beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
            splitScalar: t => {
                const e = pm,
                    n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                    r = -jk * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                    i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                    s = n,
                    o = BigInt("0x100000000000000000000000000000000"),
                    l = gm(s * t, e),
                    a = gm(-r * t, e);
                let c = Ot(t - l * n - a * i, e),
                    d = Ot(-l * r - a * s, e);
                const h = c > o,
                    m = d > o;
                if (h && (c = e - c), m && (d = e - d), c > o || d > o) throw new Error("splitScalar: Endomorphism failed, k=" + t);
                return {
                    k1neg: h,
                    k1: c,
                    k2neg: m,
                    k2: d
                }
            }
        }
    }, Z1);
BigInt(0);
Yr.ProjectivePoint;
const Ra = "0x0000000000000000000000000000000000000000",
    mm = "0x0000000000000000000000000000000000000000000000000000000000000000",
    ym = BigInt(0),
    wm = BigInt(1),
    Am = BigInt(2),
    vm = BigInt(27),
    xm = BigInt(28),
    Lu = BigInt(35),
    js = {};

function Em(t) {
    return Rs(kt(t), 32)
}
var Uo, Lo, Do, fs;
const vn = class vn {
    constructor(e, n, r, i) {
        R(this, Uo);
        R(this, Lo);
        R(this, Do);
        R(this, fs);
        iu(e, js, "Signature"), b(this, Uo, n), b(this, Lo, r), b(this, Do, i), b(this, fs, null)
    }
    get r() {
        return p(this, Uo)
    }
    set r(e) {
        S(Eo(e) === 32, "invalid r", "value", e), b(this, Uo, W(e))
    }
    get s() {
        return p(this, Lo)
    }
    set s(e) {
        S(Eo(e) === 32, "invalid s", "value", e);
        const n = W(e);
        S(parseInt(n.substring(0, 3)) < 8, "non-canonical s", "value", n), b(this, Lo, n)
    }
    get v() {
        return p(this, Do)
    }
    set v(e) {
        const n = oe(e, "value");
        S(n === 27 || n === 28, "invalid v", "v", e), b(this, Do, n)
    }
    get networkV() {
        return p(this, fs)
    }
    get legacyChainId() {
        const e = this.networkV;
        return e == null ? null : vn.getChainId(e)
    }
    get yParity() {
        return this.v === 27 ? 0 : 1
    }
    get yParityAndS() {
        const e = de(this.s);
        return this.yParity && (e[0] |= 128), W(e)
    }
    get compactSerialized() {
        return Qe([this.r, this.yParityAndS])
    }
    get serialized() {
        return Qe([this.r, this.s, this.yParity ? "0x1c" : "0x1b"])
    } [Symbol.for("nodejs.util.inspect.custom")]() {
        return `Signature { r: "${this.r}", s: "${this.s}", yParity: ${this.yParity}, networkV: ${this.networkV} }`
    }
    clone() {
        const e = new vn(js, this.r, this.s, this.v);
        return this.networkV && b(e, fs, this.networkV), e
    }
    toJSON() {
        const e = this.networkV;
        return {
            _type: "signature",
            networkV: e != null ? e.toString() : null,
            r: this.r,
            s: this.s,
            v: this.v
        }
    }
    static getChainId(e) {
        const n = Z(e, "v");
        return n == vm || n == xm ? ym : (S(n >= Lu, "invalid EIP-155 v", "v", e), (n - Lu) / Am)
    }
    static getChainIdV(e, n) {
        return Z(e) * Am + BigInt(35 + n - 27)
    }
    static getNormalizedV(e) {
        const n = Z(e);
        return n === ym || n === vm ? 27 : n === wm || n === xm ? 28 : (S(n >= Lu, "invalid v", "v", e), n & wm ? 27 : 28)
    }
    static from(e) {
        function n(c, d) {
            S(c, d, "signature", e)
        }
        if (e == null) return new vn(js, mm, mm, 27);
        if (typeof e == "string") {
            const c = de(e, "signature");
            if (c.length === 64) {
                const d = W(c.slice(0, 32)),
                    h = c.slice(32, 64),
                    m = h[0] & 128 ? 28 : 27;
                return h[0] &= 127, new vn(js, d, W(h), m)
            }
            if (c.length === 65) {
                const d = W(c.slice(0, 32)),
                    h = c.slice(32, 64);
                n((h[0] & 128) === 0, "non-canonical s");
                const m = vn.getNormalizedV(c[64]);
                return new vn(js, d, W(h), m)
            }
            n(!1, "invalid raw signature length")
        }
        if (e instanceof vn) return e.clone();
        const r = e.r;
        n(r != null, "missing r");
        const i = Em(r),
            s = function (c, d) {
                if (c != null) return Em(c);
                if (d != null) {
                    n(Ee(d, 32), "invalid yParityAndS");
                    const h = de(d);
                    return h[0] &= 127, W(h)
                }
                n(!1, "missing s")
            }(e.s, e.yParityAndS);
        n((de(s)[0] & 128) == 0, "non-canonical s");
        const {
            networkV: o,
            v: l
        } = function (c, d, h) {
            if (c != null) {
                const m = Z(c);
                return {
                    networkV: m >= Lu ? m : void 0,
                    v: vn.getNormalizedV(m)
                }
            }
            if (d != null) return n(Ee(d, 32), "invalid yParityAndS"), {
                v: de(d)[0] & 128 ? 28 : 27
            };
            if (h != null) {
                switch (oe(h, "sig.yParity")) {
                    case 0:
                        return {
                            v: 27
                        };
                    case 1:
                        return {
                            v: 28
                        }
                }
                n(!1, "invalid yParity")
            }
            n(!1, "missing v")
        }(e.v, e.yParityAndS, e.yParity), a = new vn(js, i, s, l);
        return o && b(a, fs, o), n(e.yParity == null || oe(e.yParity, "sig.yParity") === a.yParity, "yParity mismatch"), n(e.yParityAndS == null || e.yParityAndS === a.yParityAndS, "yParityAndS mismatch"), a
    }
};
Uo = new WeakMap, Lo = new WeakMap, Do = new WeakMap, fs = new WeakMap;
let Fn = vn;
var yr;
const Ki = class Ki {
    constructor(e) {
        R(this, yr);
        S(Eo(e) === 32, "invalid private key", "privateKey", "[REDACTED]"), b(this, yr, W(e))
    }
    get privateKey() {
        return p(this, yr)
    }
    get publicKey() {
        return Ki.computePublicKey(p(this, yr))
    }
    get compressedPublicKey() {
        return Ki.computePublicKey(p(this, yr), !0)
    }
    sign(e) {
        S(Eo(e) === 32, "invalid digest length", "digest", e);
        const n = Yr.sign(bt(e), bt(p(this, yr)), {
            lowS: !0
        });
        return Fn.from({
            r: Ri(n.r, 32),
            s: Ri(n.s, 32),
            v: n.recovery ? 28 : 27
        })
    }
    computeSharedSecret(e) {
        const n = Ki.computePublicKey(e);
        return W(Yr.getSharedSecret(bt(p(this, yr)), de(n), !1))
    }
    static computePublicKey(e, n) {
        let r = de(e, "key");
        if (r.length === 32) {
            const s = Yr.getPublicKey(r, !!n);
            return W(s)
        }
        if (r.length === 64) {
            const s = new Uint8Array(65);
            s[0] = 4, s.set(r, 1), r = s
        }
        const i = Yr.ProjectivePoint.fromHex(r);
        return W(i.toRawBytes(n))
    }
    static recoverPublicKey(e, n) {
        S(Eo(e) === 32, "invalid digest length", "digest", e);
        const r = Fn.from(n);
        let i = Yr.Signature.fromCompact(bt(Qe([r.r, r.s])));
        i = i.addRecoveryBit(r.yParity);
        const s = i.recoverPublicKey(bt(e));
        return S(s != null, "invalid signautre for digest", "signature", n), "0x" + s.toHex(!1)
    }
    static addPoints(e, n, r) {
        const i = Yr.ProjectivePoint.fromHex(Ki.computePublicKey(e).substring(2)),
            s = Yr.ProjectivePoint.fromHex(Ki.computePublicKey(n).substring(2));
        return "0x" + i.add(s).toHex(!!r)
    }
};
yr = new WeakMap;
let Ta = Ki;
const Jk = BigInt(0),
    Kk = BigInt(36);

function bm(t) {
    t = t.toLowerCase();
    const e = t.substring(2).split(""),
        n = new Uint8Array(40);
    for (let i = 0; i < 40; i++) n[i] = e[i].charCodeAt(0);
    const r = de(Ve(n));
    for (let i = 0; i < 40; i += 2) r[i >> 1] >> 4 >= 8 && (e[i] = e[i].toUpperCase()), (r[i >> 1] & 15) >= 8 && (e[i + 1] = e[i + 1].toUpperCase());
    return "0x" + e.join("")
}
const yg = {};
for (let t = 0; t < 10; t++) yg[String(t)] = String(t);
for (let t = 0; t < 26; t++) yg[String.fromCharCode(65 + t)] = String(10 + t);
const km = 15;

function Wk(t) {
    t = t.toUpperCase(), t = t.substring(4) + t.substring(0, 2) + "00";
    let e = t.split("").map(r => yg[r]).join("");
    for (; e.length >= km;) {
        let r = e.substring(0, km);
        e = parseInt(r, 10) % 97 + e.substring(r.length)
    }
    let n = String(98 - parseInt(e, 10) % 97);
    for (; n.length < 2;) n = "0" + n;
    return n
}
const Yk = function () {
    const t = {};
    for (let e = 0; e < 36; e++) {
        const n = "0123456789abcdefghijklmnopqrstuvwxyz"[e];
        t[n] = BigInt(e)
    }
    return t
}();

function $k(t) {
    t = t.toLowerCase();
    let e = Jk;
    for (let n = 0; n < t.length; n++) e = e * Kk + Yk[t[n]];
    return e
}

function ye(t) {
    if (S(typeof t == "string", "invalid address", "address", t), t.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
        t.startsWith("0x") || (t = "0x" + t);
        const e = bm(t);
        return S(!t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || e === t, "bad address checksum", "address", t), e
    }
    if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
        S(t.substring(2, 4) === Wk(t), "bad icap checksum", "address", t);
        let e = $k(t.substring(4)).toString(16);
        for (; e.length < 40;) e = "0" + e;
        return bm("0x" + e)
    }
    S(!1, "invalid address", "address", t)
}

function Zk(t) {
    const e = ye(t.from);
    let r = Z(t.nonce, "tx.nonce").toString(16);
    return r === "0" ? r = "0x" : r.length % 2 ? r = "0x0" + r : r = "0x" + r, ye(Le(Ve(Ts([e, r])), 12))
}

function xA(t) {
    return t && typeof t.getAddress == "function"
}

function Ad(t) {
    try {
        return ye(t), !0
    } catch { }
    return !1
}
async function vd(t, e) {
    const n = await e;
    return (n == null || n === "0x0000000000000000000000000000000000000000") && (D(typeof t != "string", "unconfigured name", "UNCONFIGURED_NAME", {
        value: t
    }), S(!1, "invalid AddressLike value; did not resolve to a value address", "target", t)), ye(n)
}

function St(t, e) {
    if (typeof t == "string") return t.match(/^0x[0-9a-f]{40}$/i) ? ye(t) : (D(e != null, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", {
        operation: "resolveName"
    }), vd(t, e.resolveName(t)));
    if (xA(t)) return vd(t, t.getAddress());
    if (t && typeof t.then == "function") return vd(t, t);
    S(!1, "unsupported addressable value", "target", t)
}
const ur = {};

function J(t, e) {
    let n = !1;
    return e < 0 && (n = !0, e *= -1), new yt(ur, `${n ? "" : "u"}int${e}`, t, {
        signed: n,
        width: e
    })
}

function pe(t, e) {
    return new yt(ur, `bytes${e || ""}`, t, {
        size: e
    })
}
const Nm = Symbol.for("_ethers_typed");
var ds;
const cr = class cr {
    constructor(e, n, r, i) {
        P(this, "type");
        P(this, "value");
        R(this, ds);
        P(this, "_typedSymbol");
        i == null && (i = null), iu(ur, e, "Typed"), te(this, {
            _typedSymbol: Nm,
            type: n,
            value: r
        }), b(this, ds, i), this.format()
    }
    format() {
        if (this.type === "array") throw new Error("");
        if (this.type === "dynamicArray") throw new Error("");
        return this.type === "tuple" ? `tuple(${this.value.map(e => e.format()).join(",")})` : this.type
    }
    defaultValue() {
        return 0
    }
    minValue() {
        return 0
    }
    maxValue() {
        return 0
    }
    isBigInt() {
        return !!this.type.match(/^u?int[0-9]+$/)
    }
    isData() {
        return this.type.startsWith("bytes")
    }
    isString() {
        return this.type === "string"
    }
    get tupleName() {
        if (this.type !== "tuple") throw TypeError("not a tuple");
        return p(this, ds)
    }
    get arrayLength() {
        if (this.type !== "array") throw TypeError("not an array");
        return p(this, ds) === !0 ? -1 : p(this, ds) === !1 ? this.value.length : null
    }
    static from(e, n) {
        return new cr(ur, e, n)
    }
    static uint8(e) {
        return J(e, 8)
    }
    static uint16(e) {
        return J(e, 16)
    }
    static uint24(e) {
        return J(e, 24)
    }
    static uint32(e) {
        return J(e, 32)
    }
    static uint40(e) {
        return J(e, 40)
    }
    static uint48(e) {
        return J(e, 48)
    }
    static uint56(e) {
        return J(e, 56)
    }
    static uint64(e) {
        return J(e, 64)
    }
    static uint72(e) {
        return J(e, 72)
    }
    static uint80(e) {
        return J(e, 80)
    }
    static uint88(e) {
        return J(e, 88)
    }
    static uint96(e) {
        return J(e, 96)
    }
    static uint104(e) {
        return J(e, 104)
    }
    static uint112(e) {
        return J(e, 112)
    }
    static uint120(e) {
        return J(e, 120)
    }
    static uint128(e) {
        return J(e, 128)
    }
    static uint136(e) {
        return J(e, 136)
    }
    static uint144(e) {
        return J(e, 144)
    }
    static uint152(e) {
        return J(e, 152)
    }
    static uint160(e) {
        return J(e, 160)
    }
    static uint168(e) {
        return J(e, 168)
    }
    static uint176(e) {
        return J(e, 176)
    }
    static uint184(e) {
        return J(e, 184)
    }
    static uint192(e) {
        return J(e, 192)
    }
    static uint200(e) {
        return J(e, 200)
    }
    static uint208(e) {
        return J(e, 208)
    }
    static uint216(e) {
        return J(e, 216)
    }
    static uint224(e) {
        return J(e, 224)
    }
    static uint232(e) {
        return J(e, 232)
    }
    static uint240(e) {
        return J(e, 240)
    }
    static uint248(e) {
        return J(e, 248)
    }
    static uint256(e) {
        return J(e, 256)
    }
    static uint(e) {
        return J(e, 256)
    }
    static int8(e) {
        return J(e, -8)
    }
    static int16(e) {
        return J(e, -16)
    }
    static int24(e) {
        return J(e, -24)
    }
    static int32(e) {
        return J(e, -32)
    }
    static int40(e) {
        return J(e, -40)
    }
    static int48(e) {
        return J(e, -48)
    }
    static int56(e) {
        return J(e, -56)
    }
    static int64(e) {
        return J(e, -64)
    }
    static int72(e) {
        return J(e, -72)
    }
    static int80(e) {
        return J(e, -80)
    }
    static int88(e) {
        return J(e, -88)
    }
    static int96(e) {
        return J(e, -96)
    }
    static int104(e) {
        return J(e, -104)
    }
    static int112(e) {
        return J(e, -112)
    }
    static int120(e) {
        return J(e, -120)
    }
    static int128(e) {
        return J(e, -128)
    }
    static int136(e) {
        return J(e, -136)
    }
    static int144(e) {
        return J(e, -144)
    }
    static int152(e) {
        return J(e, -152)
    }
    static int160(e) {
        return J(e, -160)
    }
    static int168(e) {
        return J(e, -168)
    }
    static int176(e) {
        return J(e, -176)
    }
    static int184(e) {
        return J(e, -184)
    }
    static int192(e) {
        return J(e, -192)
    }
    static int200(e) {
        return J(e, -200)
    }
    static int208(e) {
        return J(e, -208)
    }
    static int216(e) {
        return J(e, -216)
    }
    static int224(e) {
        return J(e, -224)
    }
    static int232(e) {
        return J(e, -232)
    }
    static int240(e) {
        return J(e, -240)
    }
    static int248(e) {
        return J(e, -248)
    }
    static int256(e) {
        return J(e, -256)
    }
    static int(e) {
        return J(e, -256)
    }
    static bytes1(e) {
        return pe(e, 1)
    }
    static bytes2(e) {
        return pe(e, 2)
    }
    static bytes3(e) {
        return pe(e, 3)
    }
    static bytes4(e) {
        return pe(e, 4)
    }
    static bytes5(e) {
        return pe(e, 5)
    }
    static bytes6(e) {
        return pe(e, 6)
    }
    static bytes7(e) {
        return pe(e, 7)
    }
    static bytes8(e) {
        return pe(e, 8)
    }
    static bytes9(e) {
        return pe(e, 9)
    }
    static bytes10(e) {
        return pe(e, 10)
    }
    static bytes11(e) {
        return pe(e, 11)
    }
    static bytes12(e) {
        return pe(e, 12)
    }
    static bytes13(e) {
        return pe(e, 13)
    }
    static bytes14(e) {
        return pe(e, 14)
    }
    static bytes15(e) {
        return pe(e, 15)
    }
    static bytes16(e) {
        return pe(e, 16)
    }
    static bytes17(e) {
        return pe(e, 17)
    }
    static bytes18(e) {
        return pe(e, 18)
    }
    static bytes19(e) {
        return pe(e, 19)
    }
    static bytes20(e) {
        return pe(e, 20)
    }
    static bytes21(e) {
        return pe(e, 21)
    }
    static bytes22(e) {
        return pe(e, 22)
    }
    static bytes23(e) {
        return pe(e, 23)
    }
    static bytes24(e) {
        return pe(e, 24)
    }
    static bytes25(e) {
        return pe(e, 25)
    }
    static bytes26(e) {
        return pe(e, 26)
    }
    static bytes27(e) {
        return pe(e, 27)
    }
    static bytes28(e) {
        return pe(e, 28)
    }
    static bytes29(e) {
        return pe(e, 29)
    }
    static bytes30(e) {
        return pe(e, 30)
    }
    static bytes31(e) {
        return pe(e, 31)
    }
    static bytes32(e) {
        return pe(e, 32)
    }
    static address(e) {
        return new cr(ur, "address", e)
    }
    static bool(e) {
        return new cr(ur, "bool", !!e)
    }
    static bytes(e) {
        return new cr(ur, "bytes", e)
    }
    static string(e) {
        return new cr(ur, "string", e)
    }
    static array(e, n) {
        throw new Error("not implemented yet")
    }
    static tuple(e, n) {
        throw new Error("not implemented yet")
    }
    static overrides(e) {
        return new cr(ur, "overrides", Object.assign({}, e))
    }
    static isTyped(e) {
        return e && typeof e == "object" && "_typedSymbol" in e && e._typedSymbol === Nm
    }
    static dereference(e, n) {
        if (cr.isTyped(e)) {
            if (e.type !== n) throw new Error(`invalid type: expecetd ${n}, got ${e.type}`);
            return e.value
        }
        return e
    }
};
ds = new WeakMap;
let yt = cr;
class Xk extends zr {
    constructor(e) {
        super("address", "address", e, !1)
    }
    defaultValue() {
        return "0x0000000000000000000000000000000000000000"
    }
    encode(e, n) {
        let r = yt.dereference(n, "string");
        try {
            r = ye(r)
        } catch (i) {
            return this._throwError(i.message, n)
        }
        return e.writeValue(r)
    }
    decode(e) {
        return ye(Ri(e.readValue(), 20))
    }
}
class qk extends zr {
    constructor(n) {
        super(n.name, n.type, "_", n.dynamic);
        P(this, "coder");
        this.coder = n
    }
    defaultValue() {
        return this.coder.defaultValue()
    }
    encode(n, r) {
        return this.coder.encode(n, r)
    }
    decode(n) {
        return this.coder.decode(n)
    }
}

function EA(t, e, n) {
    let r = [];
    if (Array.isArray(n)) r = n;
    else if (n && typeof n == "object") {
        let a = {};
        r = e.map(c => {
            const d = c.localName;
            return D(d, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", {
                argument: "values",
                info: {
                    coder: c
                },
                value: n
            }), D(!a[d], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", {
                argument: "values",
                info: {
                    coder: c
                },
                value: n
            }), a[d] = !0, n[d]
        })
    } else S(!1, "invalid tuple value", "tuple", n);
    S(e.length === r.length, "types/value length mismatch", "tuple", n);
    let i = new Uh,
        s = new Uh,
        o = [];
    e.forEach((a, c) => {
        let d = r[c];
        if (a.dynamic) {
            let h = s.length;
            a.encode(s, d);
            let m = i.writeUpdatableValue();
            o.push(A => {
                m(A + h)
            })
        } else a.encode(i, d)
    }), o.forEach(a => {
        a(i.length)
    });
    let l = t.appendWriter(i);
    return l += t.appendWriter(s), l
}

function bA(t, e) {
    let n = [],
        r = [],
        i = t.subReader(0);
    return e.forEach(s => {
        let o = null;
        if (s.dynamic) {
            let l = t.readIndex(),
                a = i.subReader(l);
            try {
                o = s.decode(a)
            } catch (c) {
                if (it(c, "BUFFER_OVERRUN")) throw c;
                o = c, o.baseType = s.name, o.name = s.localName, o.type = s.type
            }
        } else try {
            o = s.decode(t)
        } catch (l) {
            if (it(l, "BUFFER_OVERRUN")) throw l;
            o = l, o.baseType = s.name, o.name = s.localName, o.type = s.type
        }
        if (o == null) throw new Error("investigate");
        n.push(o), r.push(s.localName || null)
    }), Al.fromItems(n, r)
}
class eN extends zr {
    constructor(n, r, i) {
        const s = n.type + "[" + (r >= 0 ? r : "") + "]",
            o = r === -1 || n.dynamic;
        super("array", s, i, o);
        P(this, "coder");
        P(this, "length");
        te(this, {
            coder: n,
            length: r
        })
    }
    defaultValue() {
        const n = this.coder.defaultValue(),
            r = [];
        for (let i = 0; i < this.length; i++) r.push(n);
        return r
    }
    encode(n, r) {
        const i = yt.dereference(r, "array");
        Array.isArray(i) || this._throwError("expected array value", i);
        let s = this.length;
        s === -1 && (s = i.length, n.writeValue(i.length)), T1(i.length, s, "coder array" + (this.localName ? " " + this.localName : ""));
        let o = [];
        for (let l = 0; l < i.length; l++) o.push(this.coder);
        return EA(n, o, i)
    }
    decode(n) {
        let r = this.length;
        r === -1 && (r = n.readIndex(), D(r * Nt <= n.dataLength, "insufficient data length", "BUFFER_OVERRUN", {
            buffer: n.bytes,
            offset: r * Nt,
            length: n.dataLength
        }));
        let i = [];
        for (let s = 0; s < r; s++) i.push(new qk(this.coder));
        return bA(n, i)
    }
}
class tN extends zr {
    constructor(e) {
        super("bool", "bool", e, !1)
    }
    defaultValue() {
        return !1
    }
    encode(e, n) {
        const r = yt.dereference(n, "bool");
        return e.writeValue(r ? 1 : 0)
    }
    decode(e) {
        return !!e.readValue()
    }
}
class kA extends zr {
    constructor(e, n) {
        super(e, e, n, !0)
    }
    defaultValue() {
        return "0x"
    }
    encode(e, n) {
        n = bt(n);
        let r = e.writeValue(n.length);
        return r += e.writeBytes(n), r
    }
    decode(e) {
        return e.readBytes(e.readIndex(), !0)
    }
}
class nN extends kA {
    constructor(e) {
        super("bytes", e)
    }
    decode(e) {
        return W(super.decode(e))
    }
}
class rN extends zr {
    constructor(n, r) {
        let i = "bytes" + String(n);
        super(i, i, r, !1);
        P(this, "size");
        te(this, {
            size: n
        }, {
            size: "number"
        })
    }
    defaultValue() {
        return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2)
    }
    encode(n, r) {
        let i = bt(yt.dereference(r, this.type));
        return i.length !== this.size && this._throwError("incorrect data length", r), n.writeBytes(i)
    }
    decode(n) {
        return W(n.readBytes(this.size))
    }
}
const iN = new Uint8Array([]);
class sN extends zr {
    constructor(e) {
        super("null", "", e, !1)
    }
    defaultValue() {
        return null
    }
    encode(e, n) {
        return n != null && this._throwError("not null", n), e.writeBytes(iN)
    }
    decode(e) {
        return e.readBytes(0), null
    }
}
const oN = BigInt(0),
    lN = BigInt(1),
    aN = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
class uN extends zr {
    constructor(n, r, i) {
        const s = (r ? "int" : "uint") + n * 8;
        super(s, s, i, !1);
        P(this, "size");
        P(this, "signed");
        te(this, {
            size: n,
            signed: r
        }, {
            size: "number",
            signed: "boolean"
        })
    }
    defaultValue() {
        return 0
    }
    encode(n, r) {
        let i = Z(yt.dereference(r, this.type)),
            s = Xi(aN, Nt * 8);
        if (this.signed) {
            let o = Xi(s, this.size * 8 - 1);
            (i > o || i < -(o + lN)) && this._throwError("value out-of-bounds", r), i = U1(i, 8 * Nt)
        } else (i < oN || i > Xi(s, this.size * 8)) && this._throwError("value out-of-bounds", r);
        return n.writeValue(i)
    }
    decode(n) {
        let r = Xi(n.readValue(), this.size * 8);
        return this.signed && (r = Dc(r, this.size * 8)), r
    }
}
class cN extends kA {
    constructor(e) {
        super("string", e)
    }
    defaultValue() {
        return ""
    }
    encode(e, n) {
        return super.encode(e, Rr(yt.dereference(n, "string")))
    }
    decode(e) {
        return Mc(super.decode(e))
    }
}
class Du extends zr {
    constructor(n, r) {
        let i = !1;
        const s = [];
        n.forEach(l => {
            l.dynamic && (i = !0), s.push(l.type)
        });
        const o = "tuple(" + s.join(",") + ")";
        super("tuple", o, r, i);
        P(this, "coders");
        te(this, {
            coders: Object.freeze(n.slice())
        })
    }
    defaultValue() {
        const n = [];
        this.coders.forEach(i => {
            n.push(i.defaultValue())
        });
        const r = this.coders.reduce((i, s) => {
            const o = s.localName;
            return o && (i[o] || (i[o] = 0), i[o]++), i
        }, {});
        return this.coders.forEach((i, s) => {
            let o = i.localName;
            !o || r[o] !== 1 || (o === "length" && (o = "_length"), n[o] == null && (n[o] = n[s]))
        }), Object.freeze(n)
    }
    encode(n, r) {
        const i = yt.dereference(r, "tuple");
        return EA(n, this.coders, i)
    }
    decode(n) {
        return bA(n, this.coders)
    }
}

function Os(t) {
    return Ve(Rr(t))
}
var fN = "AEEUdwmgDS8BxQKKAP4BOgDjATAAngDUAIMAoABoAOAAagCOAEQAhABMAHIAOwA9ACsANgAmAGIAHgAuACgAJwAXAC0AGgAjAB8ALwAUACkAEgAeAAkAGwARABkAFgA5ACgALQArADcAFQApABAAHgAiABAAGgAeABMAGAUhBe8BFxREN8sF2wC5AK5HAW8ArQkDzQCuhzc3NzcBP68NEfMABQdHBuw5BV8FYAA9MzkI9r4ZBg7QyQAWA9CeOwLNCjcCjqkChuA/lm+RAsXTAoP6ASfnEQDytQFJAjWVCkeXAOsA6godAB/cwdAUE0WlBCN/AQUCQRjFD/MRBjHxDQSJbw0jBzUAswBxme+tnIcAYwabAysG8QAjAEMMmxcDqgPKQyDXCMMxA7kUQwD3NXOrAKmFIAAfBC0D3x4BJQDBGdUFAhEgVD8JnwmQJiNWYUzrg0oAGwAUAB0AFnNcACkAFgBP9h3gPfsDOWDKneY2ChglX1UDYD30ABsAFAAdABZzIGRAnwDD8wAjAEEMzRbDqgMB2sAFYwXqAtCnAsS4AwpUJKRtFHsadUz9AMMVbwLpABM1NJEX0ZkCgYMBEyMAxRVvAukAEzUBUFAtmUwSAy4DBTER33EftQHfSwB5MxJ/AjkWKQLzL8E/cwBB6QH9LQDPDtO9ASNriQC5DQANAwCK21EFI91zHwCoL9kBqQcHBwcHKzUDowBvAQohPvU3fAQgHwCyAc8CKQMA5zMSezr7ULgFmDp/LzVQBgEGAi8FYQVgt8AFcTtlQhpCWEmfe5tmZ6IAExsDzQ8t+X8rBKtTAltbAn0jsy8Bl6utPWMDTR8Ei2kRANkDBrNHNysDBzECQWUAcwFpJ3kAiyUhAJ0BUb8AL3EfAbfNAz81KUsFWwF3YQZtAm0A+VEfAzEJDQBRSQCzAQBlAHsAM70GD/v3IZWHBwARKQAxALsjTwHZAeMPEzmXgIHwABIAGQA8AEUAQDt3gdvIEGcQZAkGTRFMdEIVEwK0D64L7REdDNkq09PgADSxB/MDWwfzA1sDWwfzB/MDWwfzA1sDWwNbA1scEvAi28gQZw9QBHUFlgWTBN4IiyZREYkHMAjaVBV0JhxPA00BBCMtSSQ7mzMTJUpMFE0LCAQ2SmyvfUADTzGzVP2QqgPTMlc5dAkGHnkSqAAyD3skNb1OhnpPcagKU0+2tYdJak5vAsY6sEAACikJm2/Dd1YGRRAfJ6kQ+ww3AbkBPw3xS9wE9QY/BM0fgRkdD9GVoAipLeEM8SbnLqWAXiP5KocF8Uv4POELUVFsD10LaQnnOmeBUgMlAREijwrhDT0IcRD3Cs1vDekRSQc9A9lJngCpBwULFR05FbkmFGKwCw05ewb/GvoLkyazEy17AAXXGiUGUQEtGwMA0y7rhbRaNVwgT2MGBwspI8sUrFAkDSlAu3hMGh8HGSWtApVDdEqLUToelyH6PEENai4XUYAH+TwJGVMLhTyiRq9FEhHWPpE9TCJNTDAEOYMsMyePCdMPiQy9fHYBXQklCbUMdRM1ERs3yQg9Bx0xlygnGQglRplgngT7owP3E9UDDwVDCUUHFwO5HDETMhUtBRGBKNsC9zbZLrcCk1aEARsFzw8pH+MQVEfkDu0InwJpA4cl7wAxFSUAGyKfCEdnAGOP3FMJLs8Iy2pwI3gDaxTrZRF3B5UOWwerHDcVwxzlcMxeD4YMKKezCV8BeQmdAWME5wgNNV+MpCBFZ1eLXBifIGVBQ14AAjUMaRWjRMGHfAKPD28SHwE5AXcHPQ0FAnsR8RFvEJkI74YINbkz/DopBFMhhyAVCisDU2zSCysm/Qz8bQGnEmYDEDRBd/Jnr2C6KBgBBx0yyUFkIfULlk/RDKAaxRhGVDIZ6AfDA/ca9yfuQVsGAwOnBxc6UTPyBMELbQiPCUMATQ6nGwfbGG4KdYzUATWPAbudA1uVhwJzkwY7Bw8Aaw+LBX3pACECqwinAAkA0wNbAD0CsQehAB0AiUUBQQMrMwEl6QKTA5cINc8BmTMB9y0EH8cMGQD7O25OAsO1AoBuZqYF4VwCkgJNOQFRKQQJUktVA7N15QDfAE8GF+NLARmvTs8e50cB43MvAMsA/wAJOQcJRQHRAfdxALsBYws1Caa3uQFR7S0AhwAZbwHbAo0A4QA5AIP1AVcAUQVd/QXXAlNNARU1HC9bZQG/AyMBNwERAH0Gz5GpzQsjBHEH1wIQHxXlAu8yB7kFAyLjE9FCyQK94lkAMhoKPAqrCqpgX2Q3CjV2PVQAEh+sPss/UgVVO1c7XDtXO1w7VztcO1c7XDtXO1wDm8Pmw+YKcF9JYe8Mqg3YRMw6TRPfYFVgNhPMLbsUxRXSJVoZQRrAJwkl6FUNDwgt12Y0CDA0eRfAAEMpbINFY4oeNApPHOtTlVT8LR8AtUumM7MNsBsZREQFS3XxYi4WEgomAmSFAmJGX1GzAV83JAKh+wJonAJmDQKfiDgfDwJmPwJmKgRyBIMDfxcDfpY5Cjl7GzmGOicnAmwhAjI6OA4CbcsCbbLzjgM3a0kvAWsA4gDlAE4JB5wMkQECD8YAEbkCdzMCdqZDAnlPRwJ4viFg30WyRvcCfEMCeswCfQ0CfPRIBEiBZygALxlJXEpfGRtK0ALRBQLQ0EsrA4hTA4fqRMmRNgLypV0HAwOyS9JMMSkH001QTbMCi0MCitzFHwshR2sJuwKOOwKOYESbhQKO3QKOYHxRuFM5AQ5S2FSJApP/ApMQAO0AIFUiVbNV1AosHymZijLleGpFPz0Cl6MC77ZYJawAXSkClpMCloCgAK1ZsFoNhVEAPwKWuQKWUlxIXNUCmc8CmWhczl0LHQKcnznGOqECnBoCn58CnryOACETNS4TAp31Ap6WALlBYThh8wKe1wKgcgGtAp6jIwKeUqljzGQrKS8CJ7MCJoICoP8CoFDbAqYzAqXSAqgDAIECp/ZogGi1AAdNaiBq1QKs5wKssgKtawKtBgJXIQJV4AKx5dsDH1JsmwKywRECsuwbbORtZ21MYwMl0QK2YD9DbpQDKUkCuGICuUsZArkue3A6cOUCvR0DLbYDMhUCvoxyBgMzdQK+HnMmc1MCw88CwwhzhnRPOUl05AM8qwEDPJ4DPcMCxYACxksCxhSNAshtVQLISALJUwLJMgJkoQLd1nh9ZXiyeSlL1AMYp2cGAmH4GfeVKHsPXpZevxUCz28Cz3AzT1fW9xejAMqxAs93AS3uA04Wfk8JAtwrAtuOAtJTA1JgA1NjAQUDVZCAjUMEzxrxZEl5A4LSg5EC2ssC2eKEFIRNp0ADhqkAMwNkEoZ1Xf0AWQLfaQLevHd7AuIz7RgB8zQrAfSfAfLWiwLr9wLpdH0DAur9AuroAP1LAb0C7o0C66CWrpcHAu5DA4XkmH1w5HGlAvMHAG0DjhqZlwL3FwORcgOSiwL3nAL53QL4apogmq+/O5siA52HAv7+AR8APZ8gAZ+3AwWRA6ZuA6bdANXJAwZuoYyiCQ0DDE0BEwEjB3EGZb1rCQC/BG/DFY8etxEAG3k9ACcDNxJRA42DAWcrJQCM8wAlAOanC6OVCLsGI6fJBgCvBRnDBvElRUYFFoAFcD9GSDNCKUK8X3kZX8QAls0FOgCQVCGbwTsuYDoZutcONxjOGJHJ/gVfBWAFXwVgBWsFYAVfBWAFXwVgBV8FYAVfBWBOHQjfjW8KCgoKbF7xMwTRA7kGN8PDAMMEr8MA70gxFroFTj5xPnhCR0K+X30/X/AAWBkzswCNBsxzzASm70aCRS4rDDMeLz49fnXfcsH5GcoscQFz13Y4HwVnBXLJycnACNdRYwgICAqEXoWTxgA7P4kACxbZBu21Kw0AjMsTAwkVAOVtJUUsJ1JCuULESUArXy9gPi9AKwnJRQYKTD9LPoA+iT54PnkCkULEUUpDX9NWV3JVEjQAc1w3A3IBE3YnX+g7QiMJb6MKaiszRCUuQrNCxDPMCcwEX9EWJzYREBEEBwIHKn6l33JCNVIfybPJtAltydPUCmhBZw/tEKsZAJOVJU1CLRuxbUHOQAo7P0s+eEJHHA8SJVRPdGM0NVrpvBoKhfUlM0JHHGUQUhEWO1xLSj8MO0ucNAqJIzVCRxv9EFsqKyA4OQgNj2nwZgp5ZNFgE2A1K3YHS2AhQQojJmC7DgpzGG1WYFUZCQYHZO9gHWCdYIVgu2BTYJlwFh8GvRbcXbG8YgtDHrMBwzPVyQonHQgkCyYBgQJ0Ajc4nVqIAwGSCsBPIgDsK3SWEtIVBa5N8gGjAo+kVwVIZwD/AEUSCDweX4ITrRQsJ8K3TwBXFDwEAB0TvzVcAtoTS20RIwDgVgZ9BBImYgA5AL4Coi8LFnezOkCnIQFjAY4KBAPh9RcGsgZSBsEAJctdsWIRu2kTkQstRw7DAcMBKgpPBGIGMDAwKCYnKTQaLg4AKRSVAFwCdl+YUZ0JdicFD3lPAdt1F9ZZKCGxuE3yBxkFVGcA/wBFEgiCBwAOLHQSjxOtQDg1z7deFRMAZ8QTAGtKb1ApIiPHADkAvgKiLy1DFtYCmBiDAlDDWNB0eo7fpaMO/aEVRRv0ATEQZBIODyMEAc8JQhCbDRgzFD4TAEMAu9YBCgCsAOkAm5I3ABwAYxvONnR+MhXJAxgKQyxL2+kkJhMbhQKDBMkSsvF0AD9BNQ6uQC7WqSQHwxEAEEIu1hkhAH2z4iQPwyJPHNWpdyYBRSpnJALzoBAEVPPsH20MxA0CCEQKRgAFyAtFAlMNwwjEDUQJRArELtapMg7DDZgJIw+TGukEIwvDFkMAqAtDEMMMBhioe+QAO3MMRAACrgnEBSPY9Q0FDnbSBoMAB8MSYxkSxAEJAPIJAAB8FWMOFtMc/HcXwxhDAC7DAvOowwAewwJdKDKHAAHDAALrFUQVwwAbwyvzpWMWv8wA/ABpAy++bcYDUKPD0KhDCwKmJ1MAAmMA5+UZwxAagwipBRL/eADfw6fDGOMCGsOjk3l6BwOpo4sAEsMOGxMAA5sAbcMOAAvDp0MJGkMDwgipnNIPAwfIqUMGAOGDAAPzABXDAAcDAAnDAGmTABrDAA7DChjDjnEWAwABYwAOcwAuUyYABsMAF8MIKQANUgC6wy4AA8MADqMq8wCyYgAcIwAB8wqpAAXOCx0V4wAHowBCwwEKAGnDAAuDAB3DAAjDCakABdIAbqcZ3QCZCCkABdIAAAFDAAfjAB2jCCkABqIACYMAGzMAbSMA5sOIAAhjAAhDABTDBAkpAAbSAOOTAAlDC6kOzPtnAAdDAG6kQFAATwAKwwwAA0MACbUDPwAHIwAZgwACE6cDAAojAApDAAoDp/MGwwAJIwADEwAQQwgAFEMAEXMAD5MADfMADcMAGRMOFiMAFUMAbqMWuwHDAMIAE0MLAGkzEgDhUwACQwAEWgAXgwUjAAbYABjDBSYBgzBaAEFNALcQBxUMegAwMngBrA0IZgJ0KxQHBREPd1N0ZzKRJwaIHAZqNT4DqQq8BwngAB4DAwt2AX56T1ocKQNXAh1GATQGC3tOxYNagkgAMQA5CQADAQEAWxLjAIOYNAEzAH7tFRk6TglSAF8NAAlYAQ+S1ACAQwQorQBiAN4dAJ1wPyeTANVzuQDX3AIeEMp9eyMgXiUAEdkBkJizKltbVVAaRMqRAAEAhyQ/SDEz6BmfVwB6ATEsOClKIRcDOF0E/832AFNt5AByAnkCRxGCOs94NjXdAwINGBonDBwPALW2AwICAgAAAAAAAAYDBQMDARrUAwAtAAAAAgEGBgYGBgYFBQUFBQUEBQYHCAkEBQUFBQQAAAICAAAAIgCNAJAAlT0A6gC7ANwApEQAwgCyAK0AqADuAKYA2gCjAOcBCAEDAMcAgQBiANIA1AEDAN4A8gCQAKkBMQDqAN8A3AsBCQ8yO9ra2tq8xuLT1tRJOB0BUgFcNU0BWgFpAWgBWwFMUUlLbhMBUxsNEAs6PhMOACcUKy0vMj5AQENDQ0RFFEYGJFdXV1dZWVhZL1pbXVxcI2NnZ2ZoZypsbnZ1eHh4eHh4enp6enp6enp6enp8fH18e2IARPIASQCaAHgAMgBm+ACOAFcAVwA3AnbvAIsABfj4AGQAk/IAnwBPAGIAZP//sACFAIUAaQBWALEAJAC2AIMCQAJDAPwA5wD+AP4A6AD/AOkA6QDoAOYALwJ7AVEBQAE+AVQBPgE+AT4BOQE4ATgBOAEcAVgXADEQCAEAUx8SHgsdHhYAjgCWAKYAUQBqIAIxAHYAbwCXAxUDJzIDIUlGTzEAkQJPAMcCVwKkAMAClgKWApYClgKWApYCiwKWApYClgKWApYClgKVApUCmAKgApcClgKWApQClAKUApQCkgKVAnUB1AKXAp8ClgKWApUeAIETBQD+DQOfAmECOh8BVBg9AuIZEjMbAU4/G1WZAXusRAFpYQEFA0FPAQYAmTEeIJdyADFoAHEANgCRA5zMk/C2jGINwjMWygIZCaXdfDILBCs5dAE7YnQBugDlhoiHhoiGiYqKhouOjIaNkI6Ij4qQipGGkoaThpSSlYaWhpeKmIaZhpqGm4aci52QnoqfhuIC4XTpAt90AIp0LHSoAIsAdHQEQwRABEIERQRDBEkERgRBBEcESQRIBEQERgRJAJ5udACrA490ALxuAQ10ANFZdHQA13QCFHQA/mJ0AP4BIQD+APwA/AD9APwDhGZ03ASMK23HAP4A/AD8AP0A/CR0dACRYnQA/gCRASEA/gCRAvQA/gCRA4RmdNwEjCttxyR0AP9idAEhAP4A/gD8APwA/QD8AP8A/AD8AP0A/AOEZnTcBIwrbcckdHQAkWJ0ASEA/gCRAP4AkQL0AP4AkQOEZnTcBIwrbcckdAJLAT50AlIBQXQCU8l0dAJfdHQDpgL0A6YDpgOnA6cDpwOnA4RmdNwEjCttxyR0dACRYnQBIQOmAJEDpgCRAvQDpgCRA4RmdNwEjCttxyR0BDh0AJEEOQCRDpU5dSgCADR03gV2CwArdAEFAM5iCnR0AF1iAAYcOgp0dACRCnQAXAEIwWZ0CnRmdHQAkWZ0CnRmdEXgAFF03gp0dEY0tlT2u3SOAQTwscwhjZZKrhYcBSfFp9XNbKiVDOD2b+cpe4/Z17mQnbtzzhaeQtE2GGj0IDNTjRUSyTxxw/RPHW/+vS7d1NfRt9z9QPZg4X7QFfhCnkvgNPIItOsC2eV6hPannZNHlZ9xrwZXIMOlu3jSoQSq78WEjwLjw1ELSlF1aBvfzwk5ZX7AUvQzjPQKbDuQ+sm4wNOp4A6AdVuRS0t1y/DZpg4R6m7FNjM9HgvW7Bi88zaMjOo6lM8wtBBdj8LP4ylv3zCXPhebMKJc066o9sF71oFW/8JXu86HJbwDID5lzw5GWLR/LhT0Qqnp2JQxNZNfcbLIzPy+YypqRm/lBmGmex+82+PisxUumSeJkALIT6rJezxMH+CTJmQtt5uwTVbL3ptmjDUQzlSIvWi8Tl7ng1NpuRn1Ng4n14Qc+3Iil7OwkvNWogLSPkn3pihIFytyIGmMhOe3n1tWsuMy9BdKyqF4Z3v2SgggTL9KVvMXPnCbRe+oOuFFP3HejBG/w9gvmfNYvg6JuWia2lcSSN1uIjBktzoIazOHPJZ7kKHPz8mRWVdW3lA8WGF9dQF6Bm673boov3BUWDU2JNcahR23GtfHKLOz/viZ+rYnZFaIznXO67CYEJ1fXuTRpZhYZkKe54xeoagkNGLs+NTZHE0rX45/XvQ2RGADX6vcAvdxIUBV27wxGm2zjZo4X3ILgAlrOFheuZ6wtsvaIj4yLY7qqawlliaIcrz2G+c3vscAnCkCuMzMmZvMfu9lLwTvfX+3cVSyPdN9ZwgDZhfjRgNJcLiJ67b9xx8JHswprbiE3v9UphotAPIgnXVIN5KmMc0piXhc6cChPnN+MRhG9adtdttQTTwSIpl8I4/j//d3sz1326qTBTpPRM/Hgh3kzqEXs8ZAk4ErQhNO8hzrQ0DLkWMA/N+91tn2MdOJnWC2FCZehkQrwzwbKOjhvZsbM95QoeL9skYyMf4srVPVJSgg7pOLUtr/n9eT99oe9nLtFRpjA9okV2Kj8h9k5HaC0oivRD8VyXkJ81tcd4fHNXPCfloIQasxsuO18/46dR2jgul/UIet2G0kRvnyONMKhHs6J26FEoqSqd+rfYjeEGwHWVDpX1fh1jBBcKGMqRepju9Y00mDVHC+Xdij/j44rKfvfjGinNs1jO/0F3jB83XCDINN/HB84axlP+3E/klktRo+vl3U/aiyMJbIodE1XSsDn6UAzIoMtUObY2+k/4gY/l+AkZJ5Sj2vQrkyLm3FoxjhDX+31UXBFf9XrAH31fFqoBmDEZvhvvpnZ87N+oZEu7U9O/nnk+QWj3x8uyoRbEnf+O5UMr9i0nHP38IF5AvzrBW8YWBUR0mIAzIvndQq9N3v/Jto3aPjPXUPl8ASdPPyAp7jENf8bk7VMM9ol9XGmlBmeDMuGqt+WzuL6CXAxXjIhCPM5vACchgMJ/8XBGLO/D1isVvGhwwHHr1DLaI5mn2Jr/b1pUD90uciDaS8cXNDzCWvNmT/PhQe5e8nTnnnkt8Ds/SIjibcum/fqDhKopxAY8AkSrPn+IGDEKOO+U3XOP6djFs2H5N9+orhOahiQk5KnEUWa+CzkVzhp8bMHRbg81qhjjXuIKbHjSLSIBKWqockGtKinY+z4/RdBUF6pcc3JmnlxVcNgrI4SEzKUZSwcD2QCyxzKve+gAmg6ZuSRkpPFa6mfThu7LJNu3H5K42uCpNvPAsoedolKV/LHe/eJ+BbaG5MG0NaSGVPRUmNFMFFSSpXEcXwbVh7UETOZZtoVNRGOIbbkig3McEtR68cG0RZAoJevWYo7Dg/lZ1CQzblWeUvVHmr8fY4Nqd9JJiH/zEX24mJviH60fAyFr0A3c4bC1j3yZU60VgJxXn8JgJXLUIsiBnmKmMYz+7yBQFBvqb2eYnuW59joZBf56/wXvWIR4R8wTmV80i1mZy+S4+BUES+hzjk0uXpC///z/IlqHZ1monzlXp8aCfhGKMti73FI1KbL1q6IKO4fuBuZ59gagjn5xU79muMpHXg6S+e+gDM/U9BKLHbl9l6o8czQKl4RUkJJiqftQG2i3BMg/TQlUYFkJDYBOOvAugYuzYSDnZbDDd/aSd9x0Oe6F+bJcHfl9+gp6L5/TgA+BdFFovbfCrQ40s5vMPw8866pNX8zyFGeFWdxIpPVp9Rg1UPOVFbFZrvaFq/YAzHQgqMWpahMYfqHpmwXfHL1/kpYmGuHFwT55mQu0dylfNuq2Oq0hTMCPwqfxnuBIPLXfci4Y1ANy+1CUipQxld/izVh16WyG2Q0CQQ9NqtAnx1HCHwDj7sYxOSB0wopZSnOzxQOcExmxrVTF2BkOthVpGfuhaGECfCJpJKpjnihY+xOT2QJxN61+9K6QSqtv2Shr82I3jgJrqBg0wELFZPjvHpvzTtaJnLK6Vb97Yn933koO/saN7fsjwNKzp4l2lJVx2orjCGzC/4ZL4zCver6aQYtC5sdoychuFE6ufOiog+VWi5UDkbmvmtah/3aArEBIi39s5ILUnlFLgilcGuz9CQshEY7fw2ouoILAYPVT/gyAIq3TFAIwVsl+ktkRz/qGfnCDGrm5gsl/l9QdvCWGsjPz3dU7XuqKfdUrr/6XIgjp4rey6AJBmCmUJMjITHVdFb5m1p+dLMCL8t55zD42cmftmLEJC0Da04YiRCVUBLLa8D071/N5UBNBXDh0LFsmhV/5B5ExOB4j3WVG/S3lfK5o+V6ELHvy6RR9n4ac+VsK4VE4yphPvV+kG9FegTBH4ZRXL2HytUHCduJazB/KykjfetYxOXTLws267aGOd+I+JhKP//+VnXmS90OD/jvLcVu0asyqcuYN1mSb6XTlCkqv1vigZPIYwNF/zpWcT1GR/6aEIRjkh0yhg4LXJfaGobYJTY4JI58KiAKgmmgAKWdl5nYCeLqavRJGQNuYuZtZFGx+IkI4w4NS2xwbetNMunOjBu/hmKCI/w7tfiiyUd//4rbTeWt4izBY8YvGIN6vyKYmP/8X8wHKCeN+WRcKM70+tXKNGyevU9H2Dg5BsljnTf8YbsJ1TmMs74Ce2XlHisleguhyeg44rQOHZuw/6HTkhnnurK2d62q6yS7210SsAIaR+jXMQA+svkrLpsUY+F30Uw89uOdGAR6vo4FIME0EfVVeHTu6eKicfhSqOeXJhbftcd08sWEnNUL1C9fnprTgd83IMut8onVUF0hvqzZfHduPjbjwEXIcoYmy+P6tcJZHmeOv6VrvEdkHDJecjHuHeWANe79VG662qTjA/HCvumVv3qL+LrOcpqGps2ZGwQdFJ7PU4iuyRlBrwfO+xnPyr47s2cXVbWzAyznDiBGjCM3ksxjjqM62GE9C8f5U38kB3VjtabKp/nRdvMESPGDG90bWRLAt1Qk5DyLuazRR1YzdC1c+hZXvAWV8xA72S4A8B67vjVhbba3MMop293FeEXpe7zItMWrJG/LOH9ByOXmYnNJfjmfuX9KbrpgLOba4nZ+fl8Gbdv/ihv+6wFGKHCYrVwmhFC0J3V2bn2tIB1wCc1CST3d3X2OyxhguXcs4sm679UngzofuSeBewMFJboIQHbUh/m2JhW2hG9DIvG2t7yZIzKBTz9wBtnNC+2pCRYhSIuQ1j8xsz5VvqnyUIthvuoyyu7fNIrg/KQUVmGQaqkqZk/Vx5b33/gsEs8yX7SC1J+NV4icz6bvIE7C5G6McBaI8rVg56q5QBJWxn/87Q1sPK4+sQa8fLU5gXo4paaq4cOcQ4wR0VBHPGjKh+UlPCbA1nLXyEUX45qZ8J7/Ln4FPJE2TdzD0Z8MLSNQiykMMmSyOCiFfy84Rq60emYB2vD09KjYwsoIpeDcBDTElBbXxND72yhd9pC/1CMid/5HUMvAL27OtcIJDzNKpRPNqPOpyt2aPGz9QWIs9hQ9LiX5s8m9hjTUu/f7MyIatjjd+tSfQ3ufZxPpmJhTaBtZtKLUcfOCUqADuO+QoH8B9v6U+P0HV1GLQmtoNFTb3s74ivZgjES0qfK+8RdGgBbcCMSy8eBvh98+et1KIFqSe1KQPyXULBMTsIYnysIwiZBJYdI20vseV+wuJkcqGemehKjaAb9L57xZm3g2zX0bZ2xk/fU+bCo7TlnbW7JuF1YdURo/2Gw7VclDG1W7LOtas2LX4upifZ/23rzpsnY/ALfRgrcWP5hYmV9VxVOQA1fZvp9F2UNU+7d7xRyVm5wiLp3/0dlV7vdw1PMiZrbDAYzIVqEjRY2YU03sJhPnlwIPcZUG5ltL6S8XCxU1eYS5cjr34veBmXAvy7yN4ZjArIG0dfD/5UpBNlX1ZPoxJOwyqRi3wQWtOzd4oNKh0LkoTm8cwqgIfKhqqGOhwo71I+zXnMemTv2B2AUzABWyFztGgGULjDDzWYwJUVBTjKCn5K2QGMK1CQT7SzziOjo+BhAmqBjzuc3xYym2eedGeOIRJVyTwDw37iCMe4g5Vbnsb5ZBdxOAnMT7HU4DHpxWGuQ7GeiY30Cpbvzss55+5Km1YsbD5ea3NI9QNYIXol5apgSu9dZ8f8xS5dtHpido5BclDuLWY4lhik0tbJa07yJhH0BOyEut/GRbYTS6RfiTYWGMCkNpfSHi7HvdiTglEVHKZXaVhezH4kkXiIvKopYAlPusftpE4a5IZwvw1x/eLvoDIh/zpo9FiQInsTb2SAkKHV42XYBjpJDg4374XiVb3ws4qM0s9eSQ5HzsMU4OZJKuopFjBM+dAZEl8RUMx5uU2N486Kr141tVsGQfGjORYMCJAMsxELeNT4RmWjRcpdTGBwcx6XN9drWqPmJzcrGrH4+DRc7+n1w3kPZwu0BkNr6hQrqgo7JTB9A5kdJ/H7P4cWBMwsmuixAzJB3yrQpnGIq90lxAXLzDCdn1LPibsRt7rHNjgQBklRgPZ8vTbjXdgXrTWQsK5MdrXXQVPp0Rinq3frzZKJ0qD6Qhc40VzAraUXlob1gvkhK3vpmHgI6FRlQZNx6eRqkp0zy4AQlX813fAPtL3jMRaitGFFjo0zmErloC+h+YYdVQ6k4F/epxAoF0BmqEoKNTt6j4vQZNQ2BoqF9Vj53TOIoNmDiu9Xp15RkIgQIGcoLpfoIbenzpGUAtqFJp5W+LLnx38jHeECTJ/navKY1NWfN0sY1T8/pB8kIH3DU3DX+u6W3YwpypBMYOhbSxGjq84RZ84fWJow8pyHqn4S/9J15EcCMsXqrfwyd9mhiu3+rEo9pPpoJkdZqHjra4NvzFwuThNKy6hao/SlLw3ZADUcUp3w3SRVfW2rhl80zOgTYnKE0Hs2qp1J6H3xqPqIkvUDRMFDYyRbsFI3M9MEyovPk8rlw7/0a81cDVLmBsR2ze2pBuKb23fbeZC0uXoIvDppfTwIDxk1Oq2dGesGc+oJXWJLGkOha3CX+DUnzgAp9HGH9RsPZN63Hn4RMA5eSVhPHO+9RcRb/IOgtW31V1Q5IPGtoxPjC+MEJbVlIMYADd9aHYWUIQKopuPOHmoqSkubnAKnzgKHqgIOfW5RdAgotN6BN+O2ZYHkuemLnvQ8U9THVrS1RtLmKbcC7PeeDsYznvqzeg6VCNwmr0Yyx1wnLjyT84BZz3EJyCptD3yeueAyDWIs0L2qs/VQ3HUyqfrja0V1LdDzqAikeWuV4sc7RLIB69jEIBjCkyZedoUHqCrOvShVzyd73OdrJW0hPOuQv2qOoHDc9xVb6Yu6uq3Xqp2ZaH46A7lzevbxQEmfrzvAYSJuZ4WDk1Hz3QX1LVdiUK0EvlAGAYlG3Md30r7dcPN63yqBCIj25prpvZP0nI4+EgWoFG95V596CurXpKRBGRjQlHCvy5Ib/iW8nZJWwrET3mgd6mEhfP4KCuaLjopWs7h+MdXFdIv8dHQJgg1xi1eYqB0uDYjxwVmri0Sv5XKut/onqapC+FQiC2C1lvYJ9MVco6yDYsS3AANUfMtvtbYI2hfwZatiSsnoUeMZd34GVjkMMKA+XnjJpXgRW2SHTZplVowPmJsvXy6w3cfO1AK2dvtZEKTkC/TY9LFiKHCG0DnrMQdGm2lzlBHM9iEYynH2UcVMhUEjsc0oDBTgo2ZSQ1gzkAHeWeBXYFjYLuuf8yzTCy7/RFR81WDjXMbq2BOH5dURnxo6oivmxL3cKzKInlZkD31nvpHB9Kk7GfcfE1t+1V64b9LtgeJGlpRFxQCAqWJ5DoY77ski8gsOEOr2uywZaoO/NGa0X0y1pNQHBi3b2SUGNpcZxDT7rLbBf1FSnQ8guxGW3W+36BW0gBje4DOz6Ba6SVk0xiKgt+q2JOFyr4SYfnu+Ic1QZYIuwHBrgzr6UvOcSCzPTOo7D6IC4ISeS7zkl4h+2VoeHpnG/uWR3+ysNgPcOIXQbv0n4mr3BwQcdKJxgPSeyuP/z1Jjg4e9nUvoXegqQVIE30EHx5GHv+FAVUNTowYDJgyFhf5IvlYmEqRif6+WN1MkEJmDcQITx9FX23a4mxy1AQRsOHO/+eImX9l8EMJI3oPWzVXxSOeHU1dUWYr2uAA7AMb+vAEZSbU3qob9ibCyXeypEMpZ6863o6QPqlqGHZkuWABSTVNd4cOh9hv3qEpSx2Zy/DJMP6cItEmiBJ5PFqQnDEIt3NrA3COlOSgz43D7gpNFNJ5MBh4oFzhDPiglC2ypsNU4ISywY2erkyb1NC3Qh/IfWj0eDgZI4/ln8WPfBsT3meTjq1Uqt1E7Zl/qftqkx6aM9KueMCekSnMrcHj1CqTWWzEzPsZGcDe3Ue4Ws+XFYVxNbOFF8ezkvQGR6ZOtOLU2lQEnMBStx47vE6Pb7AYMBRj2OOfZXfisjJnpTfSNjo6sZ6qSvNxZNmDeS7Gk3yYyCk1HtKN2UnhMIjOXUzAqDv90lx9O/q/AT1ZMnit5XQe9wmQxnE/WSH0CqZ9/2Hy+Sfmpeg8RwsHI5Z8kC8H293m/LHVVM/BA7HaTJYg5Enk7M/xWpq0192ACfBai2LA/qrCjCr6Dh1BIMzMXINBmX96MJ5Hn2nxln/RXPFhwHxUmSV0EV2V0jm86/dxxuYSU1W7sVkEbN9EzkG0QFwPhyHKyb3t+Fj5WoUUTErcazE/N6EW6Lvp0d//SDPj7EV9UdJN+Amnf3Wwk3A0SlJ9Z00yvXZ7n3z70G47Hfsow8Wq1JXcfwnA+Yxa5mFsgV464KKP4T31wqIgzFPd3eCe3j5ory5fBF2hgCFyVFrLzI9eetNXvM7oQqyFgDo4CTp/hDV9NMX9JDHQ/nyHTLvZLNLF6ftn2OxjGm8+PqOwhxnPHWipkE/8wbtyri80Sr7pMNkQGMfo4ZYK9OcCC4ESVFFbLMIvlxSoRqWie0wxqnLfcLSXMSpMMQEJYDVObYsXIQNv4TGNwjq1kvT1UOkicTrG3IaBZ3XdScS3u8sgeZPVpOLkbiF940FjbCeNRINNvDbd01EPBrTCPpm12m43ze1bBB59Ia6Ovhnur/Nvx3IxwSWol+3H2qfCJR8df6aQf4v6WiONxkK+IqT4pKQrZK/LplgDI/PJZbOep8dtbV7oCr6CgfpWa8NczOkPx81iSHbsNhVSJBOtrLIMrL31LK9TqHqAbAHe0RLmmV806kRLDLNEhUEJfm9u0sxpkL93Zgd6rw+tqBfTMi59xqXHLXSHwSbSBl0EK0+loECOPtrl+/nsaFe197di4yUgoe4jKoAJDXc6DGDjrQOoFDWZJ9HXwt8xDrQP+7aRwWKWI1GF8s8O4KzxWBBcwnl3vnl1Oez3oh6Ea1vjR7/z7DDTrFtqU2W/KAEzAuXDNZ7MY73MF216dzdSbWmUp4lcm7keJfWaMHgut9x5C9mj66Z0lJ+yhsjVvyiWrfk1lzPOTdhG15Y7gQlXtacvI7qv/XNSscDwqkgwHT/gUsD5yB7LdRRvJxQGYINn9hTpodKFVSTPrtGvyQw+HlRFXIkodErAGu9Iy1YpfSPc3jkFh5CX3lPxv7aqjE/JAfTIpEjGb/H7MO0e2vsViSW1qa/Lmi4/n4DEI3g7lYrcanspDfEpKkdV1OjSLOy0BCUqVoECaB55vs06rXl4jqmLsPsFM/7vYJ0vrBhDCm/00A/H81l1uekJ/6Lml3Hb9+NKiLqATJmDpyzfYZFHumEjC662L0Bwkxi7E9U4cQA0XMVDuMYAIeLMPgQaMVOd8fmt5SflFIfuBoszeAw7ow5gXPE2Y/yBc/7jExARUf/BxIHQBF5Sn3i61w4z5xJdCyO1F1X3+3ax+JSvMeZ7S6QSKp1Fp/sjYz6Z+VgCZzibGeEoujryfMulH7Rai5kAft9ebcW50DyJr2uo2z97mTWIu45YsSnNSMrrNUuG1XsYBtD9TDYzQffKB87vWbkM4EbPAFgoBV4GQS+vtFDUqOFAoi1nTtmIOvg38N4hT2Sn8r8clmBCXspBlMBYTnrqFJGBT3wZOzAyJDre9dHH7+x7qaaKDOB4UQALD5ecS0DE4obubQEiuJZ0EpBVpLuYcce8Aa4PYd/V4DLDAJBYKQPCWTcrEaZ5HYbJi11Gd6hjGom1ii18VHYnG28NKpkz2UKVPxlhYSp8uZr367iOmoy7zsxehW9wzcy2zG0a80PBMCRQMb32hnaHeOR8fnNDzZhaNYhkOdDsBUZ3loDMa1YP0uS0cjUP3b/6DBlqmZOeNABDsLl5BI5QJups8uxAuWJdkUB/pO6Zax6tsg7fN5mjjDgMGngO+DPcKqiHIDbFIGudxtPTIyDi9SFMKBDcfdGQRv41q1AqmxgkVfJMnP8w/Bc7N9/TR6C7mGObFqFkIEom8sKi2xYqJLTCHK7cxzaZvqODo22c3wisBCP4HeAgcRbNPAsBkNRhSmD48dHupdBRw4mIvtS5oeF6zeT1KMCyhMnmhpkFAGWnGscoNkwvQ8ZM5lE/vgTHFYL99OuNxdFBxTEDd5v2qLR8y9WkXsWgG6kZNndFG+pO/UAkOCipqIhL3hq7cRSdrCq7YhUsTocEcnaFa6nVkhnSeRYUA1YO0z5itF9Sly3VlxYDw239TJJH6f3EUfYO5lb7bcFcz8Bp7Oo8QmnsUHOz/fagVUBtKEw1iT88j+aKkv8cscKNkMxjYr8344D1kFoZ7/td1W6LCNYN594301tUGRmFjAzeRg5vyoM1F6+bJZ/Q54jN/k8SFd3DxPTYaAUsivsBfgTn7Mx8H2SpPt4GOdYRnEJOH6jHM2p6SgB0gzIRq6fHxGMmSmqaPCmlfwxiuloaVIitLGN8wie2CDWhkzLoCJcODh7KIOAqbHEvXdUxaS4TTTs07Clzj/6GmVs9kiZDerMxEnhUB6QQPlcfqkG9882RqHoLiHGBoHfQuXIsAG8GTAtao2KVwRnvvam8jo1e312GQAKWEa4sUVEAMG4G6ckcONDwRcg1e2D3+ohXgY4UAWF8wHKQMrSnzCgfFpsxh+aHXMGtPQroQasRY4U6UdG0rz1Vjbka0MekOGRZQEvqQFlxseFor8zWFgHek3v29+WqN6gaK5gZOTOMZzpQIC1201LkMCXild3vWXSc5UX9xcFYfbRPzGFa1FDcPfPB/jUEq/FeGt419CI3YmBlVoHsa4KdcwQP5ZSwHHhFJ7/Ph/Rap/4vmG91eDwPP0lDfCDRCLszTqfzM71xpmiKi2HwS4WlqvGNwtvwF5Dqpn6KTq8ax00UMPkxDcZrEEEsIvHiUXXEphdb4GB4FymlPwBz4Gperqq5pW7TQ6/yNRhW8VT5NhuP0udlxo4gILq5ZxAZk8ZGh3g4CqxJlPKY7AQxupfUcVpWT5VItp1+30UqoyP4wWsRo3olRRgkWZZ2ZN6VC3OZFeXB8NbnUrSdikNptD1QiGuKkr8EmSR/AK9Rw+FF3s5uwuPbvHGiPeFOViltMK7AUaOsq9+x9cndk3iJEE5LKZRlWJbKOZweROzmPNVPkjE3K/TyA57Rs68TkZ3MR8akKpm7cFjnjPd/DdkWjgYoKHSr5Wu5ssoBYU4acRs5g2DHxUmdq8VXOXRbunD8QN0LhgkssgahcdoYsNvuXGUK/KXD/7oFb+VGdhqIn02veuM5bLudJOc2Ky0GMaG4W/xWBxIJcL7yliJOXOpx0AkBqUgzlDczmLT4iILXDxxtRR1oZa2JWFgiAb43obrJnG/TZC2KSK2wqOzRZTXavZZFMb1f3bXvVaNaK828w9TO610gk8JNf3gMfETzXXsbcvRGCG9JWQZ6+cDPqc4466Yo2RcKH+PILeKOqtnlbInR3MmBeGG3FH10yzkybuqEC2HSQwpA0An7d9+73BkDUTm30bZmoP/RGbgFN+GrCOfADgqr0WbI1a1okpFms8iHYw9hm0zUvlEMivBRxModrbJJ+9/p3jUdQQ9BCtQdxnOGrT5dzRUmw0593/mbRSdBg0nRvRZM5/E16m7ZHmDEtWhwvfdZCZ8J8M12W0yRMszXamWfQTwIZ4ayYktrnscQuWr8idp3PjT2eF/jmtdhIfcpMnb+IfZY2FebW6UY/AK3jP4u3Tu4zE4qlnQgLFbM19EBIsNf7KhjdbqQ/D6yiDb+NlEi2SKD+ivXVUK8ib0oBo366gXkR8ZxGjpJIDcEgZPa9TcYe0TIbiPl/rPUQDu3XBJ9X/GNq3FAUsKsll57DzaGMrjcT+gctp+9MLYXCq+sqP81eVQ0r9lt+gcQfZbACRbEjvlMskztZG8gbC8Qn9tt26Q7y7nDrbZq/LEz7kR6Jc6pg3N9rVX8Y5MJrGlML9p9lU4jbTkKqCveeZUJjHB03m2KRKR2TytoFkTXOLg7keU1s1lrPMQJpoOKLuAAC+y1HlJucU6ysB5hsXhvSPPLq5J7JtnqHKZ4vYjC4Vy8153QY+6780xDuGARsGbOs1WqzH0QS765rnSKEbbKlkO8oI/VDwUd0is13tKpqILu1mDJFNy/iJAWcvDgjxvusIT+PGz3ST/J9r9Mtfd0jpaGeiLYIqXc7DiHSS8TcjFVksi66PEkxW1z6ujbLLUGNNYnzOWpH8BZGK4bCK7iR+MbIv8ncDAz1u4StN3vTTzewr9IQjk9wxFxn+6N1ddKs0vffJiS08N3a4G1SVrlZ97Q/M+8G9fe5AP6d9/Qq4WRnORVhofPIKEdCr3llspUfE0oKIIYoByBRPh+bX1HLS3JWGJRhIvE1aW4NTd8ePi4Z+kXb+Z8snYfSNcqijhAgVsx4RCM54cXUiYkjeBmmC4ajOHrChoELscJJC7+9jjMjw5BagZKlgRMiSNYz7h7vvZIoQqbtQmspc0cUk1G/73iXtSpROl5wtLgQi0mW2Ex8i3WULhcggx6E1LMVHUsdc9GHI1PH3U2Ko0PyGdn9KdVOLm7FPBui0i9a0HpA60MsewVE4z8CAt5d401Gv6zXlIT5Ybit1VIA0FCs7wtvYreru1fUyW3oLAZ/+aTnZrOcYRNVA8spoRtlRoWflsRClFcgzkqiHOrf0/SVw+EpVaFlJ0g4Kxq1MMOmiQdpMNpte8lMMQqm6cIFXlnGbfJllysKDi+0JJMotkqgIxOSQgU9dn/lWkeVf8nUm3iwX2Nl3WDw9i6AUK3vBAbZZrcJpDQ/N64AVwjT07Jef30GSSmtNu2WlW7YoyW2FlWfZFQUwk867EdLYKk9VG6JgEnBiBxkY7LMo4YLQJJlAo9l/oTvJkSARDF/XtyAzM8O2t3eT/iXa6wDN3WewNmQHdPfsxChU/KtLG2Mn8i4ZqKdSlIaBZadxJmRzVS/o4yA65RTSViq60oa395Lqw0pzY4SipwE0SXXsKV+GZraGSkr/RW08wPRvqvSUkYBMA9lPx4m24az+IHmCbXA+0faxTRE9wuGeO06DIXa6QlKJ3puIyiuAVfPr736vzo2pBirS+Vxel3TMm3JKhz9o2ZoRvaFVpIkykb0Hcm4oHFBMcNSNj7/4GJt43ogonY2Vg4nsDQIWxAcorpXACzgBqQPjYsE/VUpXpwNManEru4NwMCFPkXvMoqvoeLN3qyu/N1eWEHttMD65v19l/0kH2mR35iv/FI+yjoHJ9gPMz67af3Mq/BoWXqu3rphiWMXVkmnPSEkpGpUI2h1MThideGFEOK6YZHPwYzMBvpNC7+ZHxPb7epfefGyIB4JzO9DTNEYnDLVVHdQyvOEVefrk6Uv5kTQYVYWWdqrdcIl7yljwwIWdfQ/y+2QB3eR/qxYObuYyB4gTbo2in4PzarU1sO9nETkmj9/AoxDA+JM3GMqQtJR4jtduHtnoCLxd1gQUscHRB/MoRYIEsP2pDZ9KvHgtlk1iTbWWbHhohwFEYX7y51fUV2nuUmnoUcqnWIQAAgl9LTVX+Bc0QGNEhChxHR4YjfE51PUdGfsSFE6ck7BL3/hTf9jLq4G1IafINxOLKeAtO7quulYvH5YOBc+zX7CrMgWnW47/jfRsWnJjYYoE7xMfWV2HN2iyIqLI";
const Sm = new Map([
    [8217, "apostrophe"],
    [8260, "fraction slash"],
    [12539, "middle dot"]
]),
    Cm = 4;

function dN(t) {
    let e = 0;

    function n() {
        return t[e++] << 8 | t[e++]
    }
    let r = n(),
        i = 1,
        s = [0, 1];
    for (let T = 1; T < r; T++) s.push(i += n());
    let o = n(),
        l = e;
    e += o;
    let a = 0,
        c = 0;

    function d() {
        return a == 0 && (c = c << 8 | t[e++], a = 8), c >> --a & 1
    }
    const h = 31,
        m = 2 ** h,
        A = m >>> 1,
        k = A >> 1,
        x = m - 1;
    let C = 0;
    for (let T = 0; T < h; T++) C = C << 1 | d();
    let y = [],
        w = 0,
        E = m;
    for (; ;) {
        let T = Math.floor(((C - w + 1) * i - 1) / E),
            O = 0,
            U = r;
        for (; U - O > 1;) {
            let j = O + U >>> 1;
            T < s[j] ? U = j : O = j
        }
        if (O == 0) break;
        y.push(O);
        let F = w + Math.floor(E * s[O] / i),
            X = w + Math.floor(E * s[O + 1] / i) - 1;
        for (; !((F ^ X) & A);) C = C << 1 & x | d(), F = F << 1 & x, X = X << 1 & x | 1;
        for (; F & ~X & k;) C = C & A | C << 1 & x >>> 1 | d(), F = F << 1 ^ A, X = (X ^ A) << 1 | A | 1;
        w = F, E = 1 + X - F
    }
    let B = r - 4;
    return y.map(T => {
        switch (T - B) {
            case 3:
                return B + 65792 + (t[l++] << 16 | t[l++] << 8 | t[l++]);
            case 2:
                return B + 256 + (t[l++] << 8 | t[l++]);
            case 1:
                return B + t[l++];
            default:
                return T - 1
        }
    })
}

function hN(t) {
    let e = 0;
    return () => t[e++]
}

function NA(t) {
    return hN(dN(pN(t)))
}

function pN(t) {
    let e = [];
    [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((i, s) => e[i.charCodeAt(0)] = s);
    let n = t.length,
        r = new Uint8Array(6 * n >> 3);
    for (let i = 0, s = 0, o = 0, l = 0; i < n; i++) l = l << 6 | e[t.charCodeAt(i)], o += 6, o >= 8 && (r[s++] = l >> (o -= 8));
    return r
}

function gN(t) {
    return t & 1 ? ~t >> 1 : t >> 1
}

function mN(t, e) {
    let n = Array(t);
    for (let r = 0, i = 0; r < t; r++) n[r] = i += gN(e());
    return n
}

function Oa(t, e = 0) {
    let n = [];
    for (; ;) {
        let r = t(),
            i = t();
        if (!i) break;
        e += r;
        for (let s = 0; s < i; s++) n.push(e + s);
        e += i + 1
    }
    return n
}

function SA(t) {
    return Fa(() => {
        let e = Oa(t);
        if (e.length) return e
    })
}

function CA(t) {
    let e = [];
    for (; ;) {
        let n = t();
        if (n == 0) break;
        e.push(yN(n, t))
    }
    for (; ;) {
        let n = t() - 1;
        if (n < 0) break;
        e.push(wN(n, t))
    }
    return e.flat()
}

function Fa(t) {
    let e = [];
    for (; ;) {
        let n = t(e.length);
        if (!n) break;
        e.push(n)
    }
    return e
}

function PA(t, e, n) {
    let r = Array(t).fill().map(() => []);
    for (let i = 0; i < e; i++) mN(t, n).forEach((s, o) => r[o].push(s));
    return r
}

function yN(t, e) {
    let n = 1 + e(),
        r = e(),
        i = Fa(e);
    return PA(i.length, 1 + t, e).flatMap((o, l) => {
        let [a, ...c] = o;
        return Array(i[l]).fill().map((d, h) => {
            let m = h * r;
            return [a + h * n, c.map(A => A + m)]
        })
    })
}

function wN(t, e) {
    let n = 1 + e();
    return PA(n, 1 + t, e).map(i => [i[0], i.slice(1)])
}

function AN(t) {
    let e = [],
        n = Oa(t);
    return i(r([]), []), e;

    function r(s) {
        let o = t(),
            l = Fa(() => {
                let a = Oa(t).map(c => n[c]);
                if (a.length) return r(a)
            });
        return {
            S: o,
            B: l,
            Q: s
        }
    }

    function i({
        S: s,
        B: o
    }, l, a) {
        if (!(s & 4 && a === l[l.length - 1])) {
            s & 2 && (a = l[l.length - 1]), s & 1 && e.push(l);
            for (let c of o)
                for (let d of c.Q) i(c, [...l, d], a)
        }
    }
}

function vN(t) {
    return t.toString(16).toUpperCase().padStart(2, "0")
}

function BA(t) {
    return `{${vN(t)}}`
}

function xN(t) {
    let e = [];
    for (let n = 0, r = t.length; n < r;) {
        let i = t.codePointAt(n);
        n += i < 65536 ? 1 : 2, e.push(i)
    }
    return e
}

function kl(t) {
    let n = t.length;
    if (n < 4096) return String.fromCodePoint(...t);
    let r = [];
    for (let i = 0; i < n;) r.push(String.fromCodePoint(...t.slice(i, i += 4096)));
    return r.join("")
}

function EN(t, e) {
    let n = t.length,
        r = n - e.length;
    for (let i = 0; r == 0 && i < n; i++) r = t[i] - e[i];
    return r
}
var bN = "AEUDTAHBCFQATQDRADAAcgAgADQAFAAsABQAHwAOACQADQARAAoAFwAHABIACAAPAAUACwAFAAwABAAQAAMABwAEAAoABQAIAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACgANAA0AAwAKAAkABAAdAAYAZwDSAdsDJgC0CkMB8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgsj26PTQyy8FfEQ8AY8IPAGcEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJF8AJpIBpob5AERSMAKNoAXqaQLUBMCzEiACnwRZEkkVsS7tANAsBG0RuAQLEPABv9HICTUBXigPZwRBApMDOwAamhtaABqEAY8KvKx3LQ4ArAB8UhwEBAVSagD8AEFZADkBIadVj2UMUgx5Il4ANQC9AxIB1BlbEPMAs30CGxlXAhwZKQIECBc6EbsCoxngzv7UzRQA8M0BawL6ZwkN7wABAD33OQRcsgLJCjMCjqUChtw/km+NAsXPAoP2BT84PwURAK0RAvptb6cApQS/OMMey5HJS84UdxpxTPkCogVFITaTOwERAK5pAvkNBOVyA7q3BKlOJSALAgUIBRcEdASpBXqzABXFSWZOawLCOqw//AolCZdvv3dSBkEQGyelEPcMMwG1ATsN7UvYBPEGOwTJH30ZGQ/NlZwIpS3dDO0m4y6hgFoj9SqDBe1L9DzdC01RaA9ZC2UJ4zpjgU4DIQENIosK3Q05CG0Q8wrJaw3lEUUHOQPVSZoApQcBCxEdNRW1JhBirAsJOXcG+xr2C48mrxMpevwF0xohBk0BKRr/AM8u54WwWjFcHE9fBgMLJSPHFKhQIA0lQLd4SBobBxUlqQKRQ3BKh1E2HpMh9jw9DWYuE1F8B/U8BRlPC4E8nkarRQ4R0j6NPUgiSUwsBDV/LC8niwnPD4UMuXxyAVkJIQmxDHETMREXN8UIOQcZLZckJxUIIUaVYJoE958D8xPRAwsFPwlBBxMDtRwtEy4VKQUNgSTXAvM21S6zAo9WgAEXBcsPJR/fEFBH4A7pCJsCZQODJesALRUhABcimwhDYwBfj9hTBS7LCMdqbCN0A2cU52ERcweRDlcHpxwzFb8c4XDIXguGCCijrwlbAXUJmQFfBOMICTVbjKAgQWdTi1gYmyBhQT9d/AIxDGUVn0S9h3gCiw9rEhsBNQFzBzkNAQJ3Ee0RaxCVCOuGBDW1M/g6JQRPIYMgEQonA09szgsnJvkM+GkBoxJiAww0PXfuZ6tgtiQX/QcZMsVBYCHxC5JPzQycGsEYQlQuGeQHvwPzGvMn6kFXBf8DowMTOk0z7gS9C2kIiwk/AEkOoxcH1xhqCnGM0AExiwG3mQNXkYMCb48GNwcLAGcLhwV55QAdAqcIowAFAM8DVwA5Aq0HnQAZAIVBAT0DJy8BIeUCjwOTCDHLAZUvAfMpBBvDDBUA9zduSgLDsQKAamaiBd1YAo4CSTUBTSUEBU5HUQOvceEA2wBLBhPfRwEVq0rLGuNDAd9vKwDHAPsABTUHBUEBzQHzbQC3AV8LMQmis7UBTekpAIMAFWsB1wKJAN0ANQB/8QFTAE0FWfkF0wJPSQERMRgrV2EBuwMfATMBDQB5BsuNpckHHwRtB9MCEBsV4QLvLge1AQMi3xPNQsUCvd5VoWACZIECYkJbTa9bNyACofcCaJgCZgkCn4Q4GwsCZjsCZiYEbgR/A38TA36SOQY5dxc5gjojIwJsHQIyNjgKAm3HAm2u74ozZ0UrAWcA3gDhAEoFB5gMjQD+C8IADbUCdy8CdqI/AnlLQwJ4uh1c20WuRtcCfD8CesgCfQkCfPAFWQUgSABIfWMkAoFtAoAAAoAFAn+uSVhKWxUXSswC0QEC0MxLJwOITwOH5kTFkTIC8qFdAwMDrkvOTC0lA89NTE2vAos/AorYwRsHHUNnBbcCjjcCjlxAl4ECjtkCjlx4UbRTNQpS1FSFApP7ApMMAOkAHFUeVa9V0AYsGymVhjLheGZFOzkCl58C77JYIagAWSUClo8ClnycAKlZrFoJgU0AOwKWtQKWTlxEXNECmcsCmWRcyl0HGQKcmznCOp0CnBYCn5sCnriKAB0PMSoPAp3xAp6SALU9YTRh7wKe0wKgbgGpAp6fHwKeTqVjyGQnJSsCJ68CJn4CoPsCoEwCot0CocQCpi8Cpc4Cp/8AfQKn8mh8aLEAA0lqHGrRAqzjAqyuAq1nAq0CAlcdAlXcArHh1wMfTmyXArK9DQKy6Bds4G1jbUhfAyXNArZcOz9ukAMpRQK4XgK5RxUCuSp3cDZw4QK9GQK72nCWAzIRAr6IcgIDM3ECvhpzInNPAsPLAsMEc4J0SzVFdOADPKcDPJoDPb8CxXwCxkcCxhCJAshpUQLIRALJTwLJLgJknQLd0nh5YXiueSVL0AMYo2cCAmH0GfOVJHsLXpJeuxECz2sCz2wvS1PS8xOfAMatAs9zASnqA04SfksFAtwnAtuKAtJPA1JcA1NfAQEDVYyAiT8AyxbtYEWCHILTgs6DjQLaxwLZ3oQQhEmnPAOGpQAvA2QOhnFZ+QBVAt9lAt64c3cC4i/tFAHzMCcB9JsB8tKHAuvzAulweQLq+QLq5AD5RwG5Au6JAuuclqqXAwLuPwOF4Jh5cOBxoQLzAwBpA44WmZMC9xMDkW4DkocC95gC+dkC+GaaHJqruzebHgOdgwL++gEbADmfHJ+zAwWNA6ZqA6bZANHFAwZqoYiiBQkDDEkCwAA/AwDhQRdTARHzA2sHl2cFAJMtK7evvdsBiZkUfxEEOQH7KQUhDp0JnwCS/SlXxQL3AZ0AtwW5AG8LbUEuFCaNLgFDAYD8AbUmAHUDDgRtACwCFgyhAAAKAj0CagPdA34EkQEgRQUhfAoABQBEABMANhICdwEABdUDa+8KxQIA9wqfJ7+xt+UBkSFBQgHpFH8RNMCJAAQAGwBaAkUChIsABjpTOpSNbQC4Oo860ACNOME63AClAOgAywE6gTo7Ofw5+Tt2iTpbO56JOm85GAFWATMBbAUvNV01njWtNWY1dTW2NcU1gjWRNdI14TWeNa017jX9NbI1wTYCNhE1xjXVNhY2JzXeNe02LjY9Ni41LSE2OjY9Njw2yTcIBJA8VzY4Nt03IDcPNsogN4k3MAoEsDxnNiQ3GTdsOo03IULUQwdC4EMLHA8PCZsobShRVQYA6X8A6bABFCnXAukBowC9BbcAbwNzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgBFLWZAu0BhQCjBcEAbykBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUABavAj626xQAJP0A3etzuf4NNRA7efy2Z9NQrCnC0OSyANz5BBIbJ5IFDR6miIavYS6tprjjmuKebxm5C74Q225X1pkaYYPb6f1DK4k3xMEBb9S2WMjEibTNWhsRJIA+vwNVEiXTE5iXs/wezV66oFLfp9NZGYW+Gk19J2+bCT6Ye2w6LDYdgzKMUabk595eLBCXANz9HUpWbATq9vqXVx9XDg+Pc9Xp4+bsS005SVM/BJBM4687WUuf+Uj9dEi8aDNaPxtpbDxcG1THTImUMZq4UCaaNYpsVqraNyKLJXDYsFZ/5jl7bLRtO88t7P3xZaAxhb5OdPMXqsSkp1WCieG8jXm1U99+blvLlXzPCS+M93VnJCiK+09LfaSaBAVBomyDgJua8dfUzR7ga34IvR2Nvj+A9heJ6lsl1KG4NkI1032Cnff1m1wof2B9oHJK4bi6JkEdSqeNeiuo6QoZZincoc73/TH9SXF8sCE7XyuYyW8WSgbGFCjPV0ihLKhdPs08Tx82fYAkLLc4I2wdl4apY7GU5lHRFzRWJep7Ww3wbeA3qmd59/86P4xuNaqDpygXt6M85glSBHOCGgJDnt+pN9bK7HApMguX6+06RZNjzVmcZJ+wcUrJ9//bpRNxNuKpNl9uFds+S9tdx7LaM5ZkIrPj6nIU9mnbFtVbs9s/uLgl8MVczAwet+iOEzzBlYW7RCMgE6gyNLeq6+1tIx4dpgZnd0DksJS5f+JNDpwwcPNXaaVspq1fbQajOrJgK0ofKtJ1Ne90L6VO4MOl5S886p7u6xo7OLjG8TGL+HU1JXGJgppg4nNbNJ5nlzSpuPYy21JUEcUA94PoFiZfjZue+QnyQ80ekOuZVkxx4g+cvhJfHgNl4hy1/a6+RKcKlar/J29y//EztlbVPHVUeQ1zX86eQVAjR/M3dA9w4W8LfaXp4EgM85wOWasli837PzVMOnsLzR+k3o75/lRPAJSE1xAKQzEi5v10ke+VBvRt1cwQRMd+U5mLCTGVd6XiZtgBG5cDi0w22GKcVNvHiu5LQbZEDVtz0onn7k5+heuKXVsZtSzilkLRAUmjMXEMB3J9YC50XBxPiz53SC+EhnPl9WsKCv92SM/OFFIMJZYfl0WW8tIO3UxYcwdMAj7FSmgrsZ2aAZO03BOhP1bNNZItyXYQFTpC3SG1VuPDqH9GkiCDmE+JwxyIVSO5siDErAOpEXFgjy6PQtOVDj+s6e1r8heWVvmZnTciuf4EiNZzCAd7SOMhXERIOlsHIMG399i9aLTy3m2hRLZjJVDNLS53iGIK11dPqQt0zBDyg6qc7YqkDm2M5Ve6dCWCaCbTXX2rToaIgz6+zh4lYUi/+6nqcFMAkQJKHYLK0wYk5N9szV6xihDbDDFr45lN1K4aCXBq/FitPSud9gLt5ZVn+ZqGX7cwm2z5EGMgfFpIFyhGGuDPmso6TItTMwny+7uPnLCf4W6goFQFV0oQSsc9VfMmVLcLr6ZetDZbaSFTLqnSO/bIPjA3/zAUoqgGFAEQS4IhuMzEp2I3jJzbzkk/IEmyax+rhZTwd6f+CGtwPixu8IvzACquPWPREu9ZvGkUzpRwvRRuaNN6cr0W1wWits9ICdYJ7ltbgMiSL3sTPeufgNcVqMVWFkCPDH4jG2jA0XcVgQj62Cb29v9f/z/+2KbYvIv/zzjpQAPkliaVDzNrW57TZ/ZOyZD0nlfMmAIBIAGAI0D3k/mdN4xr9v85ZbZbbqfH2jGd5hUqNZWwl5SPfoGmfElmazUIeNL1j/mkF7VNAzTq4jNt8JoQ11NQOcmhprXoxSxfRGJ9LDEOAQ+dmxAQH90iti9e2u/MoeuaGcDTHoC+xsmEeWmxEKefQuIzHbpw5Tc5cEocboAD09oipWQhtTO1wivf/O+DRe2rpl/E9wlrzBorjJsOeG1B/XPW4EaJEFdNlECEZga5ZoGRHXgYouGRuVkm8tDESiEyFNo+3s5M5puSdTyUL2llnINVHEt91XUNW4ewdMgJ4boJfEyt/iY5WXqbA+A2Fkt5Z0lutiWhe9nZIyIUjyXDC3UsaG1t+eNx6z4W/OYoTB7A6x+dNSTOi9AInctbESqm5gvOLww7OWXPrmHwVZasrl4eD113pm+JtT7JVOvnCXqdzzdTRHgJ0PiGTFYW5Gvt9R9LD6Lzfs0v/TZZHSmyVNq7viIHE6DBK7Qp07Iz55EM8SYtQvZf/obBniTWi5C2/ovHfw4VndkE5XYdjOhCMRjDeOEfXeN/CwfGduiUIfsoFeUxXeQXba7c7972XNv8w+dTjjUM0QeNAReW+J014dKAD/McQYXT7c0GQPIkn3Ll6R7gGjuiQoZD0TEeEqQpKoZ15g/0OPQI17QiSv9AUROa/V/TQN3dvLArec3RrsYlvBm1b8LWzltdugsC50lNKYLEp2a+ZZYqPejULRlOJh5zj/LVMyTDvwKhMxxwuDkxJ1QpoNI0OTWLom4Z71SNzI9TV1iXJrIu9Wcnd+MCaAw8o1jSXd94YU/1gnkrC9BUEOtQvEIQ7g0i6h+KL2JKk8Ydl7HruvgWMSAmNe+LshGhV4qnWHhO9/RIPQzY1tHRj2VqOyNsDpK0cww+56AdDC4gsWwY0XxoucIWIqs/GcwnWqlaT0KPr8mbK5U94/301i1WLt4YINTVvCFBrFZbIbY8eycOdeJ2teD5IfPLCRg7jjcFTwlMFNl9zdh/o3E/hHPwj7BWg0MU09pPrBLbrCgm54A6H+I6v27+jL5gkjWg/iYdks9jbfVP5y/n0dlgWEMlKasl7JvFZd56LfybW1eeaVO0gxTfXZwD8G4SI116yx7UKVRgui6Ya1YpixqXeNLc8IxtAwCU5IhwQgn+NqHnRaDv61CxKhOq4pOX7M6pkA+Pmpd4j1vn6ACUALoLLc4vpXci8VidLxzm7qFBe7s+quuJs6ETYmnpgS3LwSZxPIltgBDXz8M1k/W2ySNv2f9/NPhxLGK2D21dkHeSGmenRT3Yqcdl0m/h3OYr8V+lXNYGf8aCCpd4bWjE4QIPj7vUKN4Nrfs7ML6Y2OyS830JCnofg/k7lpFpt4SqZc5HGg1HCOrHvOdC8bP6FGDbE/VV0mX4IakzbdS/op+Kt3G24/8QbBV7y86sGSQ/vZzU8FXs7u6jIvwchsEP2BpIhW3G8uWNwa3HmjfH/ZjhhCWvluAcF+nMf14ClKg5hGgtPLJ98ueNAkc5Hs2WZlk2QHvfreCK1CCGO6nMZVSb99VM/ajr8WHTte9JSmkXq/i/U943HEbdzW6Re/S88dKgg8pGOLlAeNiqrcLkUR3/aClFpMXcOUP3rmETcWSfMXZE3TUOi8i+fqRnTYLflVx/Vb/6GJ7eIRZUA6k3RYR3iFSK9c4iDdNwJuZL2FKz/IK5VimcNWEqdXjSoxSgmF0UPlDoUlNrPcM7ftmA8Y9gKiqKEHuWN+AZRIwtVSxye2Kf8rM3lhJ5XcBXU9n4v0Oy1RU2M+4qM8AQPVwse8ErNSob5oFPWxuqZnVzo1qB/IBxkM3EVUKFUUlO3e51259GgNcJbCmlvrdjtoTW7rChm1wyCKzpCTwozUUEOIcWLneRLgMXh+SjGSFkAllzbGS5HK7LlfCMRNRDSvbQPjcXaenNYxCvu2Qyznz6StuxVj66SgI0T8B6/sfHAJYZaZ78thjOSIFumNWLQbeZixDCCC+v0YBtkxiBB3jefHqZ/dFHU+crbj6OvS1x/JDD7vlm7zOVPwpUC01nhxZuY/63E7g";
const Ua = 44032,
    zc = 4352,
    Gc = 4449,
    Hc = 4519,
    IA = 19,
    RA = 21,
    Nl = 28,
    Qc = RA * Nl,
    kN = IA * Qc,
    NN = Ua + kN,
    SN = zc + IA,
    CN = Gc + RA,
    PN = Hc + Nl;

function Xl(t) {
    return t >> 24 & 255
}

function TA(t) {
    return t & 16777215
}
let Qh, Pm, jh, ic;

function BN() {
    let t = NA(bN);
    Qh = new Map(SA(t).flatMap((e, n) => e.map(r => [r, n + 1 << 24]))), Pm = new Set(Oa(t)), jh = new Map, ic = new Map;
    for (let [e, n] of CA(t)) {
        if (!Pm.has(e) && n.length == 2) {
            let [r, i] = n, s = ic.get(r);
            s || (s = new Map, ic.set(r, s)), s.set(i, e)
        }
        jh.set(e, n.reverse())
    }
}

function OA(t) {
    return t >= Ua && t < NN
}

function IN(t, e) {
    if (t >= zc && t < SN && e >= Gc && e < CN) return Ua + (t - zc) * Qc + (e - Gc) * Nl;
    if (OA(t) && e > Hc && e < PN && (t - Ua) % Nl == 0) return t + (e - Hc); {
        let n = ic.get(t);
        return n && (n = n.get(e), n) ? n : -1
    }
}

function FA(t) {
    Qh || BN();
    let e = [],
        n = [],
        r = !1;

    function i(s) {
        let o = Qh.get(s);
        o && (r = !0, s |= o), e.push(s)
    }
    for (let s of t)
        for (; ;) {
            if (s < 128) e.push(s);
            else if (OA(s)) {
                let o = s - Ua,
                    l = o / Qc | 0,
                    a = o % Qc / Nl | 0,
                    c = o % Nl;
                i(zc + l), i(Gc + a), c > 0 && i(Hc + c)
            } else {
                let o = jh.get(s);
                o ? n.push(...o) : i(s)
            }
            if (!n.length) break;
            s = n.pop()
        }
    if (r && e.length > 1) {
        let s = Xl(e[0]);
        for (let o = 1; o < e.length; o++) {
            let l = Xl(e[o]);
            if (l == 0 || s <= l) {
                s = l;
                continue
            }
            let a = o - 1;
            for (; ;) {
                let c = e[a + 1];
                if (e[a + 1] = e[a], e[a] = c, !a || (s = Xl(e[--a]), s <= l)) break
            }
            s = Xl(e[o])
        }
    }
    return e
}

function RN(t) {
    let e = [],
        n = [],
        r = -1,
        i = 0;
    for (let s of t) {
        let o = Xl(s),
            l = TA(s);
        if (r == -1) o == 0 ? r = l : e.push(l);
        else if (i > 0 && i >= o) o == 0 ? (e.push(r, ...n), n.length = 0, r = l) : n.push(l), i = o;
        else {
            let a = IN(r, l);
            a >= 0 ? r = a : i == 0 && o == 0 ? (e.push(r), r = l) : (n.push(l), i = o)
        }
    }
    return r >= 0 && e.push(r, ...n), e
}

function UA(t) {
    return FA(t).map(TA)
}

function TN(t) {
    return RN(FA(t))
}
const Bm = 45,
    LA = ".",
    DA = 65039,
    MA = 1,
    jc = t => Array.from(t);

function La(t, e) {
    return t.P.has(e) || t.Q.has(e)
}
class ON extends Array {
    get is_emoji() {
        return !0
    }
}
let Vh, _A, es, Jh, zA, ko, xd, Ks, ji, Im, Kh;

function wg() {
    if (Vh) return;
    let t = NA(fN);
    const e = () => Oa(t),
        n = () => new Set(e()),
        r = (d, h) => h.forEach(m => d.add(m));
    Vh = new Map(CA(t)), _A = n(), es = e(), Jh = new Set(e().map(d => es[d])), es = new Set(es), zA = n(), n();
    let i = SA(t),
        s = t();
    const o = () => {
        let d = new Set;
        return e().forEach(h => r(d, i[h])), r(d, e()), d
    };
    ko = Fa(d => {
        let h = Fa(t).map(m => m + 96);
        if (h.length) {
            let m = d >= s;
            h[0] -= 32, h = kl(h), m && (h = `Restricted[${h}]`);
            let A = o(),
                k = o(),
                x = !t();
            return {
                N: h,
                P: A,
                Q: k,
                M: x,
                R: m
            }
        }
    }), xd = n(), Ks = new Map;
    let l = e().concat(jc(xd)).sort((d, h) => d - h);
    l.forEach((d, h) => {
        let m = t(),
            A = l[h] = m ? l[h - m] : {
                V: [],
                M: new Map
            };
        A.V.push(d), xd.has(d) || Ks.set(d, A)
    });
    for (let {
        V: d,
        M: h
    } of new Set(Ks.values())) {
        let m = [];
        for (let k of d) {
            let x = ko.filter(y => La(y, k)),
                C = m.find(({
                    G: y
                }) => x.some(w => y.has(w)));
            C || (C = {
                G: new Set,
                V: []
            }, m.push(C)), C.V.push(k), r(C.G, x)
        }
        let A = m.flatMap(k => jc(k.G));
        for (let {
            G: k,
            V: x
        } of m) {
            let C = new Set(A.filter(y => !k.has(y)));
            for (let y of x) h.set(y, C)
        }
    }
    ji = new Set;
    let a = new Set;
    const c = d => ji.has(d) ? a.add(d) : ji.add(d);
    for (let d of ko) {
        for (let h of d.P) c(h);
        for (let h of d.Q) c(h)
    }
    for (let d of ji) !Ks.has(d) && !a.has(d) && Ks.set(d, MA);
    r(ji, UA(ji)), Im = AN(t).map(d => ON.from(d)).sort(EN), Kh = new Map;
    for (let d of Im) {
        let h = [Kh];
        for (let m of d) {
            let A = h.map(k => {
                let x = k.get(m);
                return x || (x = new Map, k.set(m, x)), x
            });
            m === DA ? h.push(...A) : h = A
        }
        for (let m of h) m.V = d
    }
}

function Ag(t) {
    return (GA(t) ? "" : `${vg(Pf([t]))} `) + BA(t)
}

function vg(t) {
    return `"${t}"‎`
}

function FN(t) {
    if (t.length >= 4 && t[2] == Bm && t[3] == Bm) throw new Error(`invalid label extension: "${kl(t.slice(0, 4))}"`)
}

function UN(t) {
    for (let n = t.lastIndexOf(95); n > 0;)
        if (t[--n] !== 95) throw new Error("underscore allowed only at start")
}

function LN(t) {
    let e = t[0],
        n = Sm.get(e);
    if (n) throw fa(`leading ${n}`);
    let r = t.length,
        i = -1;
    for (let s = 1; s < r; s++) {
        e = t[s];
        let o = Sm.get(e);
        if (o) {
            if (i == s) throw fa(`${n} + ${o}`);
            i = s + 1, n = o
        }
    }
    if (i == r) throw fa(`trailing ${n}`)
}

function Pf(t, e = 1 / 0, n = BA) {
    let r = [];
    DN(t[0]) && r.push("◌"), t.length > e && (e >>= 1, t = [...t.slice(0, e), 8230, ...t.slice(-e)]);
    let i = 0,
        s = t.length;
    for (let o = 0; o < s; o++) {
        let l = t[o];
        GA(l) && (r.push(kl(t.slice(i, o))), r.push(n(l)), i = o + 1)
    }
    return r.push(kl(t.slice(i, s))), r.join("")
}

function DN(t) {
    return wg(), es.has(t)
}

function GA(t) {
    return wg(), zA.has(t)
}

function MN(t) {
    return HN(_N(t, TN, VN))
}

function _N(t, e, n) {
    if (!t) return [];
    wg();
    let r = 0;
    return t.split(LA).map(i => {
        let s = xN(i),
            o = {
                input: s,
                offset: r
            };
        r += s.length + 1;
        try {
            let l = o.tokens = jN(s, e, n),
                a = l.length,
                c;
            if (!a) throw new Error("empty label");
            let d = o.output = l.flat();
            if (UN(d), !(o.emoji = a > 1 || l[0].is_emoji) && d.every(m => m < 128)) FN(d), c = "ASCII";
            else {
                let m = l.flatMap(A => A.is_emoji ? [] : A);
                if (!m.length) c = "Emoji";
                else {
                    if (es.has(d[0])) throw fa("leading combining mark");
                    for (let x = 1; x < a; x++) {
                        let C = l[x];
                        if (!C.is_emoji && es.has(C[0])) throw fa(`emoji + combining mark: "${kl(l[x - 1])} + ${Pf([C[0]])}"`)
                    }
                    LN(d);
                    let A = jc(new Set(m)),
                        [k] = GN(A);
                    QN(k, m), zN(k, A), c = k.N
                }
            }
            o.type = c
        } catch (l) {
            o.error = l
        }
        return o
    })
}

function zN(t, e) {
    let n, r = [];
    for (let i of e) {
        let s = Ks.get(i);
        if (s === MA) return;
        if (s) {
            let o = s.M.get(i);
            if (n = n ? n.filter(l => o.has(l)) : jc(o), !n.length) return
        } else r.push(i)
    }
    if (n) {
        for (let i of n)
            if (r.every(s => La(i, s))) throw new Error(`whole-script confusable: ${t.N}/${i.N}`)
    }
}

function GN(t) {
    let e = ko;
    for (let n of t) {
        let r = e.filter(i => La(i, n));
        if (!r.length) throw ko.some(i => La(i, n)) ? QA(e[0], n) : HA(n);
        if (e = r, r.length == 1) break
    }
    return e
}

function HN(t) {
    return t.map(({
        input: e,
        error: n,
        output: r
    }) => {
        if (n) {
            let i = n.message;
            throw new Error(t.length == 1 ? i : `Invalid label ${vg(Pf(e, 63))}: ${i}`)
        }
        return kl(r)
    }).join(LA)
}

function HA(t) {
    return new Error(`disallowed character: ${Ag(t)}`)
}

function QA(t, e) {
    let n = Ag(e),
        r = ko.find(i => i.P.has(e));
    return r && (n = `${r.N} ${n}`), new Error(`illegal mixture: ${t.N} + ${n}`)
}

function fa(t) {
    return new Error(`illegal placement: ${t}`)
}

function QN(t, e) {
    for (let n of e)
        if (!La(t, n)) throw QA(t, n);
    if (t.M) {
        let n = UA(e);
        for (let r = 1, i = n.length; r < i; r++)
            if (Jh.has(n[r])) {
                let s = r + 1;
                for (let o; s < i && Jh.has(o = n[s]); s++)
                    for (let l = r; l < s; l++)
                        if (n[l] == o) throw new Error(`duplicate non-spacing marks: ${Ag(o)}`);
                if (s - r > Cm) throw new Error(`excessive non-spacing marks: ${vg(Pf(n.slice(r - 1, s)))} (${s - r}/${Cm})`);
                r = s
            }
    }
}

function jN(t, e, n) {
    let r = [],
        i = [];
    for (t = t.slice().reverse(); t.length;) {
        let s = JN(t);
        if (s) i.length && (r.push(e(i)), i = []), r.push(n(s));
        else {
            let o = t.pop();
            if (ji.has(o)) i.push(o);
            else {
                let l = Vh.get(o);
                if (l) i.push(...l);
                else if (!_A.has(o)) throw HA(o)
            }
        }
    }
    return i.length && r.push(e(i)), r
}

function VN(t) {
    return t.filter(e => e != DA)
}

function JN(t, e) {
    let n = Kh,
        r, i = t.length;
    for (; i && (n = n.get(t[--i]), !!n);) {
        let {
            V: s
        } = n;
        s && (r = s, t.length = i)
    }
    return r
}
const jA = new Uint8Array(32);
jA.fill(0);

function Rm(t) {
    return S(t.length !== 0, "invalid ENS name; empty component", "comp", t), t
}

function VA(t) {
    const e = Rr(KN(t)),
        n = [];
    if (t.length === 0) return n;
    let r = 0;
    for (let i = 0; i < e.length; i++) e[i] === 46 && (n.push(Rm(e.slice(r, i))), r = i + 1);
    return S(r < e.length, "invalid ENS name; empty component", "name", t), n.push(Rm(e.slice(r))), n
}

function KN(t) {
    try {
        if (t.length === 0) throw new Error("empty label");
        return MN(t)
    } catch (e) {
        S(!1, `invalid ENS name (${e.message})`, "name", t)
    }
}

function Wh(t) {
    S(typeof t == "string", "invalid ENS name; not a string", "name", t), S(t.length, "invalid ENS name (empty label)", "name", t);
    let e = jA;
    const n = VA(t);
    for (; n.length;) e = Ve(Qe([e, Ve(n.pop())]));
    return W(e)
}

function WN(t, e) {
    const n = e;
    return S(n <= 255, "DNS encoded label cannot exceed 255", "length", n), W(Qe(VA(t).map(r => {
        S(r.length <= n, `label ${JSON.stringify(t)} exceeds ${n} bytes`, "name", t);
        const i = new Uint8Array(r.length + 1);
        return i.set(r, 1), i[0] = i.length - 1, i
    }))) + "00"
}

function Ed(t, e) {
    return {
        address: ye(t),
        storageKeys: e.map((n, r) => (S(Ee(n, 32), "invalid slot", `storageKeys[${r}]`, n), n.toLowerCase()))
    }
}

function zs(t) {
    if (Array.isArray(t)) return t.map((n, r) => Array.isArray(n) ? (S(n.length === 2, "invalid slot set", `value[${r}]`, n), Ed(n[0], n[1])) : (S(n != null && typeof n == "object", "invalid address-slot set", "value", t), Ed(n.address, n.storageKeys)));
    S(t != null && typeof t == "object", "invalid access list", "value", t);
    const e = Object.keys(t).map(n => {
        const r = t[n].reduce((i, s) => (i[s] = !0, i), {});
        return Ed(n, Object.keys(r).sort())
    });
    return e.sort((n, r) => n.address.localeCompare(r.address)), e
}

function YN(t) {
    let e;
    return typeof t == "string" ? e = Ta.computePublicKey(t, !1) : e = t.publicKey, ye(Ve("0x" + e.substring(4)).substring(26))
}

function $N(t, e) {
    return YN(Ta.recoverPublicKey(t, e))
}
const Xe = BigInt(0),
    ZN = BigInt(2),
    XN = BigInt(27),
    qN = BigInt(28),
    eS = BigInt(35),
    tS = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
    bd = 4096 * 32;

function Tm(t, e) {
    let n = t.toString(16);
    for (; n.length < 2;) n = "0" + n;
    return n += Rl(e).substring(4), "0x" + n
}

function Bf(t) {
    return t === "0x" ? null : ye(t)
}

function xg(t, e) {
    try {
        return zs(t)
    } catch (n) {
        S(!1, n.message, e, t)
    }
}

function ou(t, e) {
    return t === "0x" ? 0 : oe(t, e)
}

function He(t, e) {
    if (t === "0x") return Xe;
    const n = Z(t, e);
    return S(n <= tS, "value exceeds uint size", e, n), n
}

function Ne(t, e) {
    const n = Z(t, "value"),
        r = kt(n);
    return S(r.length <= 32, "value too large", `tx.${e}`, n), r
}

function Eg(t) {
    return zs(t).map(e => [e.address, e.storageKeys])
}

function nS(t, e) {
    S(Array.isArray(t), `invalid ${e}`, "value", t);
    for (let n = 0; n < t.length; n++) S(Ee(t[n], 32), "invalid ${ param } hash", `value[${n}]`, t[n]);
    return t
}

function rS(t) {
    const e = kf(t);
    S(Array.isArray(e) && (e.length === 9 || e.length === 6), "invalid field count for legacy transaction", "data", t);
    const n = {
        type: 0,
        nonce: ou(e[0], "nonce"),
        gasPrice: He(e[1], "gasPrice"),
        gasLimit: He(e[2], "gasLimit"),
        to: Bf(e[3]),
        value: He(e[4], "value"),
        data: W(e[5]),
        chainId: Xe
    };
    if (e.length === 6) return n;
    const r = He(e[6], "v"),
        i = He(e[7], "r"),
        s = He(e[8], "s");
    if (i === Xe && s === Xe) n.chainId = r;
    else {
        let o = (r - eS) / ZN;
        o < Xe && (o = Xe), n.chainId = o, S(o !== Xe || r === XN || r === qN, "non-canonical legacy v", "v", e[6]), n.signature = Fn.from({
            r: Rs(e[7], 32),
            s: Rs(e[8], 32),
            v: r
        })
    }
    return n
}

function iS(t, e) {
    const n = [Ne(t.nonce, "nonce"), Ne(t.gasPrice || 0, "gasPrice"), Ne(t.gasLimit, "gasLimit"), t.to || "0x", Ne(t.value, "value"), t.data];
    let r = Xe;
    if (t.chainId != Xe) r = Z(t.chainId, "tx.chainId"), S(!e || e.networkV == null || e.legacyChainId === r, "tx.chainId/sig.v mismatch", "sig", e);
    else if (t.signature) {
        const s = t.signature.legacyChainId;
        s != null && (r = s)
    }
    if (!e) return r !== Xe && (n.push(kt(r)), n.push("0x"), n.push("0x")), Ts(n);
    let i = BigInt(27 + e.yParity);
    return r !== Xe ? i = Fn.getChainIdV(r, e.v) : BigInt(e.v) !== i && S(!1, "tx.chainId/sig.v mismatch", "sig", e), n.push(kt(i)), n.push(kt(e.r)), n.push(kt(e.s)), Ts(n)
}

function bg(t, e) {
    let n;
    try {
        if (n = ou(e[0], "yParity"), n !== 0 && n !== 1) throw new Error("bad yParity")
    } catch {
        S(!1, "invalid yParity", "yParity", e[0])
    }
    const r = Rs(e[1], 32),
        i = Rs(e[2], 32),
        s = Fn.from({
            r,
            s: i,
            yParity: n
        });
    t.signature = s
}

function sS(t) {
    const e = kf(de(t).slice(1));
    S(Array.isArray(e) && (e.length === 9 || e.length === 12), "invalid field count for transaction type: 2", "data", W(t));
    const n = {
        type: 2,
        chainId: He(e[0], "chainId"),
        nonce: ou(e[1], "nonce"),
        maxPriorityFeePerGas: He(e[2], "maxPriorityFeePerGas"),
        maxFeePerGas: He(e[3], "maxFeePerGas"),
        gasPrice: null,
        gasLimit: He(e[4], "gasLimit"),
        to: Bf(e[5]),
        value: He(e[6], "value"),
        data: W(e[7]),
        accessList: xg(e[8], "accessList")
    };
    return e.length === 9 || bg(n, e.slice(9)), n
}

function oS(t, e) {
    const n = [Ne(t.chainId, "chainId"), Ne(t.nonce, "nonce"), Ne(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), Ne(t.maxFeePerGas || 0, "maxFeePerGas"), Ne(t.gasLimit, "gasLimit"), t.to || "0x", Ne(t.value, "value"), t.data, Eg(t.accessList || [])];
    return e && (n.push(Ne(e.yParity, "yParity")), n.push(kt(e.r)), n.push(kt(e.s))), Qe(["0x02", Ts(n)])
}

function lS(t) {
    const e = kf(de(t).slice(1));
    S(Array.isArray(e) && (e.length === 8 || e.length === 11), "invalid field count for transaction type: 1", "data", W(t));
    const n = {
        type: 1,
        chainId: He(e[0], "chainId"),
        nonce: ou(e[1], "nonce"),
        gasPrice: He(e[2], "gasPrice"),
        gasLimit: He(e[3], "gasLimit"),
        to: Bf(e[4]),
        value: He(e[5], "value"),
        data: W(e[6]),
        accessList: xg(e[7], "accessList")
    };
    return e.length === 8 || bg(n, e.slice(8)), n
}

function aS(t, e) {
    const n = [Ne(t.chainId, "chainId"), Ne(t.nonce, "nonce"), Ne(t.gasPrice || 0, "gasPrice"), Ne(t.gasLimit, "gasLimit"), t.to || "0x", Ne(t.value, "value"), t.data, Eg(t.accessList || [])];
    return e && (n.push(Ne(e.yParity, "recoveryParam")), n.push(kt(e.r)), n.push(kt(e.s))), Qe(["0x01", Ts(n)])
}

function uS(t) {
    let e = kf(de(t).slice(1)),
        n = "3",
        r = null;
    if (e.length === 4 && Array.isArray(e[0])) {
        n = "3 (network format)";
        const s = e[1],
            o = e[2],
            l = e[3];
        S(Array.isArray(s), "invalid network format: blobs not an array", "fields[1]", s), S(Array.isArray(o), "invalid network format: commitments not an array", "fields[2]", o), S(Array.isArray(l), "invalid network format: proofs not an array", "fields[3]", l), S(s.length === o.length, "invalid network format: blobs/commitments length mismatch", "fields", e), S(s.length === l.length, "invalid network format: blobs/proofs length mismatch", "fields", e), r = [];
        for (let a = 0; a < e[1].length; a++) r.push({
            data: s[a],
            commitment: o[a],
            proof: l[a]
        });
        e = e[0]
    }
    S(Array.isArray(e) && (e.length === 11 || e.length === 14), `invalid field count for transaction type: ${n}`, "data", W(t));
    const i = {
        type: 3,
        chainId: He(e[0], "chainId"),
        nonce: ou(e[1], "nonce"),
        maxPriorityFeePerGas: He(e[2], "maxPriorityFeePerGas"),
        maxFeePerGas: He(e[3], "maxFeePerGas"),
        gasPrice: null,
        gasLimit: He(e[4], "gasLimit"),
        to: Bf(e[5]),
        value: He(e[6], "value"),
        data: W(e[7]),
        accessList: xg(e[8], "accessList"),
        maxFeePerBlobGas: He(e[9], "maxFeePerBlobGas"),
        blobVersionedHashes: e[10]
    };
    r && (i.blobs = r), S(i.to != null, `invalid address for transaction type: ${n}`, "data", t), S(Array.isArray(i.blobVersionedHashes), "invalid blobVersionedHashes: must be an array", "data", t);
    for (let s = 0; s < i.blobVersionedHashes.length; s++) S(Ee(i.blobVersionedHashes[s], 32), `invalid blobVersionedHash at index ${s}: must be length 32`, "data", t);
    return e.length === 11 || bg(i, e.slice(11)), i
}

function cS(t, e, n) {
    const r = [Ne(t.chainId, "chainId"), Ne(t.nonce, "nonce"), Ne(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), Ne(t.maxFeePerGas || 0, "maxFeePerGas"), Ne(t.gasLimit, "gasLimit"), t.to || Ra, Ne(t.value, "value"), t.data, Eg(t.accessList || []), Ne(t.maxFeePerBlobGas || 0, "maxFeePerBlobGas"), nS(t.blobVersionedHashes || [], "blobVersionedHashes")];
    return e && (r.push(Ne(e.yParity, "yParity")), r.push(kt(e.r)), r.push(kt(e.s)), n) ? Qe(["0x03", Ts([r, n.map(i => i.data), n.map(i => i.commitment), n.map(i => i.proof)])]) : Qe(["0x03", Ts(r)])
}
var Qn, Mo, _o, zo, Go, Ho, Qo, jo, Vo, Jo, Ko, Wo, hs, ii, wr, si, Yo, sc;
const fr = class fr {
    constructor() {
        R(this, Yo);
        R(this, Qn);
        R(this, Mo);
        R(this, _o);
        R(this, zo);
        R(this, Go);
        R(this, Ho);
        R(this, Qo);
        R(this, jo);
        R(this, Vo);
        R(this, Jo);
        R(this, Ko);
        R(this, Wo);
        R(this, hs);
        R(this, ii);
        R(this, wr);
        R(this, si);
        b(this, Qn, null), b(this, Mo, null), b(this, zo, 0), b(this, Go, Xe), b(this, Ho, null), b(this, Qo, null), b(this, jo, null), b(this, _o, "0x"), b(this, Vo, Xe), b(this, Jo, Xe), b(this, Ko, null), b(this, Wo, null), b(this, hs, null), b(this, ii, null), b(this, si, null), b(this, wr, null)
    }
    get type() {
        return p(this, Qn)
    }
    set type(e) {
        switch (e) {
            case null:
                b(this, Qn, null);
                break;
            case 0:
            case "legacy":
                b(this, Qn, 0);
                break;
            case 1:
            case "berlin":
            case "eip-2930":
                b(this, Qn, 1);
                break;
            case 2:
            case "london":
            case "eip-1559":
                b(this, Qn, 2);
                break;
            case 3:
            case "cancun":
            case "eip-4844":
                b(this, Qn, 3);
                break;
            default:
                S(!1, "unsupported transaction type", "type", e)
        }
    }
    get typeName() {
        switch (this.type) {
            case 0:
                return "legacy";
            case 1:
                return "eip-2930";
            case 2:
                return "eip-1559";
            case 3:
                return "eip-4844"
        }
        return null
    }
    get to() {
        const e = p(this, Mo);
        return e == null && this.type === 3 ? Ra : e
    }
    set to(e) {
        b(this, Mo, e == null ? null : ye(e))
    }
    get nonce() {
        return p(this, zo)
    }
    set nonce(e) {
        b(this, zo, oe(e, "value"))
    }
    get gasLimit() {
        return p(this, Go)
    }
    set gasLimit(e) {
        b(this, Go, Z(e))
    }
    get gasPrice() {
        const e = p(this, Ho);
        return e == null && (this.type === 0 || this.type === 1) ? Xe : e
    }
    set gasPrice(e) {
        b(this, Ho, e == null ? null : Z(e, "gasPrice"))
    }
    get maxPriorityFeePerGas() {
        const e = p(this, Qo);
        return e & (this.type === 2 || this.type === 3 ? Xe : null)
    }
    set maxPriorityFeePerGas(e) {
        b(this, Qo, e == null ? null : Z(e, "maxPriorityFeePerGas"))
    }
    get maxFeePerGas() {
        const e = p(this, jo);
        return e & (this.type === 2 || this.type === 3 ? Xe : null)
    }
    set maxFeePerGas(e) {
        b(this, jo, e == null ? null : Z(e, "maxFeePerGas"))
    }
    get data() {
        return p(this, _o)
    }
    set data(e) {
        b(this, _o, W(e))
    }
    get value() {
        return p(this, Vo)
    }
    set value(e) {
        b(this, Vo, Z(e, "value"))
    }
    get chainId() {
        return p(this, Jo)
    }
    set chainId(e) {
        b(this, Jo, Z(e))
    }
    get signature() {
        return p(this, Ko) || null
    }
    set signature(e) {
        b(this, Ko, e == null ? null : Fn.from(e))
    }
    get accessList() {
        const e = p(this, Wo) || null;
        return e & (this.type === 1 || this.type === 2 || this.type === 3 ? [] : null)
    }
    set accessList(e) {
        b(this, Wo, e == null ? null : zs(e))
    }
    get maxFeePerBlobGas() {
        const e = p(this, hs);
        return e == null && this.type === 3 ? Xe : e
    }
    set maxFeePerBlobGas(e) {
        b(this, hs, e == null ? null : Z(e, "maxFeePerBlobGas"))
    }
    get blobVersionedHashes() {
        let e = p(this, ii);
        return e == null && this.type === 3 ? [] : e
    }
    set blobVersionedHashes(e) {
        if (e != null) {
            S(Array.isArray(e), "blobVersionedHashes must be an Array", "value", e), e = e.slice();
            for (let n = 0; n < e.length; n++) S(Ee(e[n], 32), "invalid blobVersionedHash", `value[${n}]`, e[n])
        }
        b(this, ii, e)
    }
    get blobs() {
        return p(this, si) == null ? null : p(this, si).map(e => Object.assign({}, e))
    }
    set blobs(e) {
        if (e == null) {
            b(this, si, null);
            return
        }
        const n = [],
            r = [];
        for (let i = 0; i < e.length; i++) {
            const s = e[i];
            if (ag(s)) {
                D(p(this, wr), "adding a raw blob requires a KZG library", "UNSUPPORTED_OPERATION", {
                    operation: "set blobs()"
                });
                let o = de(s);
                if (S(o.length <= bd, "blob is too large", `blobs[${i}]`, s), o.length !== bd) {
                    const c = new Uint8Array(bd);
                    c.set(o), o = c
                }
                const l = p(this, wr).blobToKzgCommitment(o),
                    a = W(p(this, wr).computeBlobKzgProof(o, l));
                n.push({
                    data: W(o),
                    commitment: W(l),
                    proof: a
                }), r.push(Tm(1, l))
            } else {
                const o = W(s.commitment);
                n.push({
                    data: W(s.data),
                    commitment: o,
                    proof: W(s.proof)
                }), r.push(Tm(1, o))
            }
        }
        b(this, si, n), b(this, ii, r)
    }
    get kzg() {
        return p(this, wr)
    }
    set kzg(e) {
        b(this, wr, e)
    }
    get hash() {
        return this.signature == null ? null : Ve(M(this, Yo, sc).call(this, !0, !1))
    }
    get unsignedHash() {
        return Ve(this.unsignedSerialized)
    }
    get from() {
        return this.signature == null ? null : $N(this.unsignedHash, this.signature)
    }
    get fromPublicKey() {
        return this.signature == null ? null : Ta.recoverPublicKey(this.unsignedHash, this.signature)
    }
    isSigned() {
        return this.signature != null
    }
    get serialized() {
        return M(this, Yo, sc).call(this, !0, !0)
    }
    get unsignedSerialized() {
        return M(this, Yo, sc).call(this, !1, !1)
    }
    inferType() {
        const e = this.inferTypes();
        return e.indexOf(2) >= 0 ? 2 : e.pop()
    }
    inferTypes() {
        const e = this.gasPrice != null,
            n = this.maxFeePerGas != null || this.maxPriorityFeePerGas != null,
            r = this.accessList != null,
            i = p(this, hs) != null || p(this, ii);
        this.maxFeePerGas != null && this.maxPriorityFeePerGas != null && D(this.maxFeePerGas >= this.maxPriorityFeePerGas, "priorityFee cannot be more than maxFee", "BAD_DATA", {
            value: this
        }), D(!n || this.type !== 0 && this.type !== 1, "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas", "BAD_DATA", {
            value: this
        }), D(this.type !== 0 || !r, "legacy transaction cannot have accessList", "BAD_DATA", {
            value: this
        });
        const s = [];
        return this.type != null ? s.push(this.type) : n ? s.push(2) : e ? (s.push(1), r || s.push(0)) : r ? (s.push(1), s.push(2)) : (i && this.to || (s.push(0), s.push(1), s.push(2)), s.push(3)), s.sort(), s
    }
    isLegacy() {
        return this.type === 0
    }
    isBerlin() {
        return this.type === 1
    }
    isLondon() {
        return this.type === 2
    }
    isCancun() {
        return this.type === 3
    }
    clone() {
        return fr.from(this)
    }
    toJSON() {
        const e = n => n == null ? null : n.toString();
        return {
            type: this.type,
            to: this.to,
            data: this.data,
            nonce: this.nonce,
            gasLimit: e(this.gasLimit),
            gasPrice: e(this.gasPrice),
            maxPriorityFeePerGas: e(this.maxPriorityFeePerGas),
            maxFeePerGas: e(this.maxFeePerGas),
            value: e(this.value),
            chainId: e(this.chainId),
            sig: this.signature ? this.signature.toJSON() : null,
            accessList: this.accessList
        }
    }
    static from(e) {
        if (e == null) return new fr;
        if (typeof e == "string") {
            const r = de(e);
            if (r[0] >= 127) return fr.from(rS(r));
            switch (r[0]) {
                case 1:
                    return fr.from(lS(r));
                case 2:
                    return fr.from(sS(r));
                case 3:
                    return fr.from(uS(r))
            }
            D(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", {
                operation: "from"
            })
        }
        const n = new fr;
        return e.type != null && (n.type = e.type), e.to != null && (n.to = e.to), e.nonce != null && (n.nonce = e.nonce), e.gasLimit != null && (n.gasLimit = e.gasLimit), e.gasPrice != null && (n.gasPrice = e.gasPrice), e.maxPriorityFeePerGas != null && (n.maxPriorityFeePerGas = e.maxPriorityFeePerGas), e.maxFeePerGas != null && (n.maxFeePerGas = e.maxFeePerGas), e.maxFeePerBlobGas != null && (n.maxFeePerBlobGas = e.maxFeePerBlobGas), e.data != null && (n.data = e.data), e.value != null && (n.value = e.value), e.chainId != null && (n.chainId = e.chainId), e.signature != null && (n.signature = Fn.from(e.signature)), e.accessList != null && (n.accessList = e.accessList), e.blobVersionedHashes != null && (n.blobVersionedHashes = e.blobVersionedHashes), e.kzg != null && (n.kzg = e.kzg), e.blobs != null && (n.blobs = e.blobs), e.hash != null && (S(n.isSigned(), "unsigned transaction cannot define '.hash'", "tx", e), S(n.hash === e.hash, "hash mismatch", "tx", e)), e.from != null && (S(n.isSigned(), "unsigned transaction cannot define '.from'", "tx", e), S(n.from.toLowerCase() === (e.from || "").toLowerCase(), "from mismatch", "tx", e)), n
    }
};
Qn = new WeakMap, Mo = new WeakMap, _o = new WeakMap, zo = new WeakMap, Go = new WeakMap, Ho = new WeakMap, Qo = new WeakMap, jo = new WeakMap, Vo = new WeakMap, Jo = new WeakMap, Ko = new WeakMap, Wo = new WeakMap, hs = new WeakMap, ii = new WeakMap, wr = new WeakMap, si = new WeakMap, Yo = new WeakSet, sc = function (e, n) {
    D(!e || this.signature != null, "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized", "UNSUPPORTED_OPERATION", {
        operation: ".serialized"
    });
    const r = e ? this.signature : null;
    switch (this.inferType()) {
        case 0:
            return iS(this, r);
        case 1:
            return aS(this, r);
        case 2:
            return oS(this, r);
        case 3:
            return cS(this, r, n ? this.blobs : null)
    }
    D(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", {
        operation: ".serialized"
    })
};
let Vc = fr;
const JA = new Uint8Array(32);
JA.fill(0);
const fS = BigInt(-1),
    KA = BigInt(0),
    WA = BigInt(1),
    dS = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");

function hS(t) {
    const e = de(t),
        n = e.length % 32;
    return n ? Qe([e, JA.slice(n)]) : W(e)
}
const pS = Ri(WA, 32),
    gS = Ri(KA, 32),
    Om = {
        name: "string",
        version: "string",
        chainId: "uint256",
        verifyingContract: "address",
        salt: "bytes32"
    },
    kd = ["name", "version", "chainId", "verifyingContract", "salt"];

function Fm(t) {
    return function (e) {
        return S(typeof e == "string", `invalid domain value for ${JSON.stringify(t)}`, `domain.${t}`, e), e
    }
}
const mS = {
    name: Fm("name"),
    version: Fm("version"),
    chainId: function (t) {
        const e = Z(t, "domain.chainId");
        return S(e >= 0, "invalid chain ID", "domain.chainId", t), Number.isSafeInteger(e) ? Number(e) : uo(e)
    },
    verifyingContract: function (t) {
        try {
            return ye(t).toLowerCase()
        } catch { }
        S(!1, 'invalid domain value "verifyingContract"', "domain.verifyingContract", t)
    },
    salt: function (t) {
        const e = de(t, "domain.salt");
        return S(e.length === 32, 'invalid domain value "salt"', "domain.salt", t), W(e)
    }
};

function Nd(t) {
    {
        const e = t.match(/^(u?)int(\d+)$/);
        if (e) {
            const n = e[1] === "",
                r = parseInt(e[2]);
            S(r % 8 === 0 && r !== 0 && r <= 256 && e[2] === String(r), "invalid numeric width", "type", t);
            const i = Xi(dS, n ? r - 1 : r),
                s = n ? (i + WA) * fS : KA;
            return function (o) {
                const l = Z(o, "value");
                return S(l >= s && l <= i, `value out-of-bounds for ${t}`, "value", l), Ri(n ? U1(l, 256) : l, 32)
            }
        }
    } {
        const e = t.match(/^bytes(\d+)$/);
        if (e) {
            const n = parseInt(e[1]);
            return S(n !== 0 && n <= 32 && e[1] === String(n), "invalid bytes width", "type", t),
                function (r) {
                    const i = de(r);
                    return S(i.length === n, `invalid length for ${t}`, "value", r), hS(r)
                }
        }
    }
    switch (t) {
        case "address":
            return function (e) {
                return Rs(ye(e), 32)
            };
        case "bool":
            return function (e) {
                return e ? pS : gS
            };
        case "bytes":
            return function (e) {
                return Ve(e)
            };
        case "string":
            return function (e) {
                return Os(e)
            }
    }
    return null
}

function Um(t, e) {
    return `${t}(${e.map(({ name: n, type: r }) => r + " " + n).join(",")})`
}

function Mu(t) {
    const e = t.match(/^([^\x5b]*)((\x5b\d*\x5d)*)(\x5b(\d*)\x5d)$/);
    return e ? {
        base: e[1],
        index: e[2] + e[4],
        array: {
            base: e[1],
            prefix: e[1] + e[2],
            count: e[5] ? parseInt(e[5]) : -1
        }
    } : {
        base: t
    }
}
var Qa, Ar, $o, Zc, YA;
const nn = class nn {
    constructor(e) {
        R(this, Zc);
        P(this, "primaryType");
        R(this, Qa);
        R(this, Ar);
        R(this, $o);
        b(this, Ar, new Map), b(this, $o, new Map);
        const n = new Map,
            r = new Map,
            i = new Map,
            s = {};
        Object.keys(e).forEach(a => {
            s[a] = e[a].map(({
                name: c,
                type: d
            }) => {
                let {
                    base: h,
                    index: m
                } = Mu(d);
                return h === "int" && !e.int && (h = "int256"), h === "uint" && !e.uint && (h = "uint256"), {
                    name: c,
                    type: h + (m || "")
                }
            }), n.set(a, new Set), r.set(a, []), i.set(a, new Set)
        }), b(this, Qa, JSON.stringify(s));
        for (const a in s) {
            const c = new Set;
            for (const d of s[a]) {
                S(!c.has(d.name), `duplicate variable name ${JSON.stringify(d.name)} in ${JSON.stringify(a)}`, "types", e), c.add(d.name);
                const h = Mu(d.type).base;
                S(h !== a, `circular type reference to ${JSON.stringify(h)}`, "types", e), !Nd(h) && (S(r.has(h), `unknown type ${JSON.stringify(h)}`, "types", e), r.get(h).push(a), n.get(a).add(h))
            }
        }
        const o = Array.from(r.keys()).filter(a => r.get(a).length === 0);
        S(o.length !== 0, "missing primary type", "types", e), S(o.length === 1, `ambiguous primary types or unused types: ${o.map(a => JSON.stringify(a)).join(", ")}`, "types", e), te(this, {
            primaryType: o[0]
        });

        function l(a, c) {
            S(!c.has(a), `circular type reference to ${JSON.stringify(a)}`, "types", e), c.add(a);
            for (const d of n.get(a))
                if (r.has(d)) {
                    l(d, c);
                    for (const h of c) i.get(h).add(d)
                }
            c.delete(a)
        }
        l(this.primaryType, new Set);
        for (const [a, c] of i) {
            const d = Array.from(c);
            d.sort(), p(this, Ar).set(a, Um(a, s[a]) + d.map(h => Um(h, s[h])).join(""))
        }
    }
    get types() {
        return JSON.parse(p(this, Qa))
    }
    getEncoder(e) {
        let n = p(this, $o).get(e);
        return n || (n = M(this, Zc, YA).call(this, e), p(this, $o).set(e, n)), n
    }
    encodeType(e) {
        const n = p(this, Ar).get(e);
        return S(n, `unknown type: ${JSON.stringify(e)}`, "name", e), n
    }
    encodeData(e, n) {
        return this.getEncoder(e)(n)
    }
    hashStruct(e, n) {
        return Ve(this.encodeData(e, n))
    }
    encode(e) {
        return this.encodeData(this.primaryType, e)
    }
    hash(e) {
        return this.hashStruct(this.primaryType, e)
    }
    _visit(e, n, r) {
        if (Nd(e)) return r(e, n);
        const i = Mu(e).array;
        if (i) return S(i.count === -1 || i.count === n.length, `array length mismatch; expected length ${i.count}`, "value", n), n.map(o => this._visit(i.prefix, o, r));
        const s = this.types[e];
        if (s) return s.reduce((o, {
            name: l,
            type: a
        }) => (o[l] = this._visit(a, n[l], r), o), {});
        S(!1, `unknown type: ${e}`, "type", e)
    }
    visit(e, n) {
        return this._visit(this.primaryType, e, n)
    }
    static from(e) {
        return new nn(e)
    }
    static getPrimaryType(e) {
        return nn.from(e).primaryType
    }
    static hashStruct(e, n, r) {
        return nn.from(n).hashStruct(e, r)
    }
    static hashDomain(e) {
        const n = [];
        for (const r in e) {
            if (e[r] == null) continue;
            const i = Om[r];
            S(i, `invalid typed-data domain key: ${JSON.stringify(r)}`, "domain", e), n.push({
                name: r,
                type: i
            })
        }
        return n.sort((r, i) => kd.indexOf(r.name) - kd.indexOf(i.name)), nn.hashStruct("EIP712Domain", {
            EIP712Domain: n
        }, e)
    }
    static encode(e, n, r) {
        return Qe(["0x1901", nn.hashDomain(e), nn.from(n).hash(r)])
    }
    static hash(e, n, r) {
        return Ve(nn.encode(e, n, r))
    }
    static async resolveNames(e, n, r, i) {
        e = Object.assign({}, e);
        for (const l in e) e[l] == null && delete e[l];
        const s = {};
        e.verifyingContract && !Ee(e.verifyingContract, 20) && (s[e.verifyingContract] = "0x");
        const o = nn.from(n);
        o.visit(r, (l, a) => (l === "address" && !Ee(a, 20) && (s[a] = "0x"), a));
        for (const l in s) s[l] = await i(l);
        return e.verifyingContract && s[e.verifyingContract] && (e.verifyingContract = s[e.verifyingContract]), r = o.visit(r, (l, a) => l === "address" && s[a] ? s[a] : a), {
            domain: e,
            value: r
        }
    }
    static getPayload(e, n, r) {
        nn.hashDomain(e);
        const i = {},
            s = [];
        kd.forEach(a => {
            const c = e[a];
            c != null && (i[a] = mS[a](c), s.push({
                name: a,
                type: Om[a]
            }))
        });
        const o = nn.from(n);
        n = o.types;
        const l = Object.assign({}, n);
        return S(l.EIP712Domain == null, "types must not contain EIP712Domain type", "types.EIP712Domain", n), l.EIP712Domain = s, o.encode(r), {
            types: l,
            domain: i,
            primaryType: o.primaryType,
            message: o.visit(r, (a, c) => {
                if (a.match(/^bytes(\d*)/)) return W(de(c));
                if (a.match(/^u?int/)) return Z(c).toString();
                switch (a) {
                    case "address":
                        return c.toLowerCase();
                    case "bool":
                        return !!c;
                    case "string":
                        return S(typeof c == "string", "invalid string", "value", c), c
                }
                S(!1, "unsupported type", "type", a)
            })
        }
    }
};
Qa = new WeakMap, Ar = new WeakMap, $o = new WeakMap, Zc = new WeakSet, YA = function (e) {
    {
        const i = Nd(e);
        if (i) return i
    }
    const n = Mu(e).array;
    if (n) {
        const i = n.prefix,
            s = this.getEncoder(i);
        return o => {
            S(n.count === -1 || n.count === o.length, `array length mismatch; expected length ${n.count}`, "value", o);
            let l = o.map(s);
            return p(this, Ar).has(i) && (l = l.map(Ve)), Ve(Qe(l))
        }
    }
    const r = this.types[e];
    if (r) {
        const i = Os(p(this, Ar).get(e));
        return s => {
            const o = r.map(({
                name: l,
                type: a
            }) => {
                const c = this.getEncoder(a)(s[l]);
                return p(this, Ar).has(a) ? Ve(c) : c
            });
            return o.unshift(i), Qe(o)
        }
    }
    S(!1, `unknown type: ${e}`, "type", e)
};
let Jc = nn;

function Ct(t) {
    const e = new Set;
    return t.forEach(n => e.add(n)), Object.freeze(e)
}
const yS = "external public payable override",
    wS = Ct(yS.split(" ")),
    $A = "constant external internal payable private public pure view override",
    AS = Ct($A.split(" ")),
    ZA = "constructor error event fallback function receive struct",
    XA = Ct(ZA.split(" ")),
    qA = "calldata memory storage payable indexed",
    vS = Ct(qA.split(" ")),
    xS = "tuple returns",
    ES = [ZA, qA, xS, $A].join(" "),
    bS = Ct(ES.split(" ")),
    kS = {
        "(": "OPEN_PAREN",
        ")": "CLOSE_PAREN",
        "[": "OPEN_BRACKET",
        "]": "CLOSE_BRACKET",
        ",": "COMMA",
        "@": "AT"
    },
    NS = new RegExp("^(\\s*)"),
    SS = new RegExp("^([0-9]+)"),
    CS = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"),
    ev = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"),
    tv = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
var tt, Sn, ja, Yh;
const Xc = class Xc {
    constructor(e) {
        R(this, ja);
        R(this, tt);
        R(this, Sn);
        b(this, tt, 0), b(this, Sn, e.slice())
    }
    get offset() {
        return p(this, tt)
    }
    get length() {
        return p(this, Sn).length - p(this, tt)
    }
    clone() {
        return new Xc(p(this, Sn))
    }
    reset() {
        b(this, tt, 0)
    }
    popKeyword(e) {
        const n = this.peek();
        if (n.type !== "KEYWORD" || !e.has(n.text)) throw new Error(`expected keyword ${n.text}`);
        return this.pop().text
    }
    popType(e) {
        if (this.peek().type !== e) {
            const n = this.peek();
            throw new Error(`expected ${e}; got ${n.type} ${JSON.stringify(n.text)}`)
        }
        return this.pop().text
    }
    popParen() {
        const e = this.peek();
        if (e.type !== "OPEN_PAREN") throw new Error("bad start");
        const n = M(this, ja, Yh).call(this, p(this, tt) + 1, e.match + 1);
        return b(this, tt, e.match + 1), n
    }
    popParams() {
        const e = this.peek();
        if (e.type !== "OPEN_PAREN") throw new Error("bad start");
        const n = [];
        for (; p(this, tt) < e.match - 1;) {
            const r = this.peek().linkNext;
            n.push(M(this, ja, Yh).call(this, p(this, tt) + 1, r)), b(this, tt, r)
        }
        return b(this, tt, e.match + 1), n
    }
    peek() {
        if (p(this, tt) >= p(this, Sn).length) throw new Error("out-of-bounds");
        return p(this, Sn)[p(this, tt)]
    }
    peekKeyword(e) {
        const n = this.peekType("KEYWORD");
        return n != null && e.has(n) ? n : null
    }
    peekType(e) {
        if (this.length === 0) return null;
        const n = this.peek();
        return n.type === e ? n.text : null
    }
    pop() {
        const e = this.peek();
        return Tl(this, tt)._++, e
    }
    toString() {
        const e = [];
        for (let n = p(this, tt); n < p(this, Sn).length; n++) {
            const r = p(this, Sn)[n];
            e.push(`${r.type}:${r.text}`)
        }
        return `<TokenString ${e.join(" ")}>`
    }
};
tt = new WeakMap, Sn = new WeakMap, ja = new WeakSet, Yh = function (e = 0, n = 0) {
    return new Xc(p(this, Sn).slice(e, n).map(r => Object.freeze(Object.assign({}, r, {
        match: r.match - e,
        linkBack: r.linkBack - e,
        linkNext: r.linkNext - e
    }))))
};
let Un = Xc;

function Di(t) {
    const e = [],
        n = o => {
            const l = s < t.length ? JSON.stringify(t[s]) : "$EOI";
            throw new Error(`invalid token ${l} at ${s}: ${o}`)
        };
    let r = [],
        i = [],
        s = 0;
    for (; s < t.length;) {
        let o = t.substring(s),
            l = o.match(NS);
        l && (s += l[1].length, o = t.substring(s));
        const a = {
            depth: r.length,
            linkBack: -1,
            linkNext: -1,
            match: -1,
            type: "",
            text: "",
            offset: s,
            value: -1
        };
        e.push(a);
        let c = kS[o[0]] || "";
        if (c) {
            if (a.type = c, a.text = o[0], s++, c === "OPEN_PAREN") r.push(e.length - 1), i.push(e.length - 1);
            else if (c == "CLOSE_PAREN") r.length === 0 && n("no matching open bracket"), a.match = r.pop(), e[a.match].match = e.length - 1, a.depth--, a.linkBack = i.pop(), e[a.linkBack].linkNext = e.length - 1;
            else if (c === "COMMA") a.linkBack = i.pop(), e[a.linkBack].linkNext = e.length - 1, i.push(e.length - 1);
            else if (c === "OPEN_BRACKET") a.type = "BRACKET";
            else if (c === "CLOSE_BRACKET") {
                let d = e.pop().text;
                if (e.length > 0 && e[e.length - 1].type === "NUMBER") {
                    const h = e.pop().text;
                    d = h + d, e[e.length - 1].value = oe(h)
                }
                if (e.length === 0 || e[e.length - 1].type !== "BRACKET") throw new Error("missing opening bracket");
                e[e.length - 1].text += d
            }
            continue
        }
        if (l = o.match(CS), l) {
            if (a.text = l[1], s += a.text.length, bS.has(a.text)) {
                a.type = "KEYWORD";
                continue
            }
            if (a.text.match(tv)) {
                a.type = "TYPE";
                continue
            }
            a.type = "ID";
            continue
        }
        if (l = o.match(SS), l) {
            a.text = l[1], a.type = "NUMBER", s += a.text.length;
            continue
        }
        throw new Error(`unexpected token ${JSON.stringify(o[0])} at position ${s}`)
    }
    return new Un(e.map(o => Object.freeze(o)))
}

function Lm(t, e) {
    let n = [];
    for (const r in e.keys()) t.has(r) && n.push(r);
    if (n.length > 1) throw new Error(`conflicting types: ${n.join(", ")}`)
}

function If(t, e) {
    if (e.peekKeyword(XA)) {
        const n = e.pop().text;
        if (n !== t) throw new Error(`expected ${t}, got ${n}`)
    }
    return e.popType("ID")
}

function Mr(t, e) {
    const n = new Set;
    for (; ;) {
        const r = t.peekType("KEYWORD");
        if (r == null || e && !e.has(r)) break;
        if (t.pop(), n.has(r)) throw new Error(`duplicate keywords: ${JSON.stringify(r)}`);
        n.add(r)
    }
    return Object.freeze(n)
}

function nv(t) {
    let e = Mr(t, AS);
    return Lm(e, Ct("constant payable nonpayable".split(" "))), Lm(e, Ct("pure view payable nonpayable".split(" "))), e.has("view") ? "view" : e.has("pure") ? "pure" : e.has("payable") ? "payable" : e.has("nonpayable") ? "nonpayable" : e.has("constant") ? "view" : "nonpayable"
}

function Tr(t, e) {
    return t.popParams().map(n => ot.from(n, e))
}

function rv(t) {
    if (t.peekType("AT")) {
        if (t.pop(), t.peekType("NUMBER")) return Z(t.pop().text);
        throw new Error("invalid gas")
    }
    return null
}

function Fs(t) {
    if (t.length) throw new Error(`unexpected tokens at offset ${t.offset}: ${t.toString()}`)
}
const PS = new RegExp(/^(.*)\[([0-9]*)\]$/);

function Dm(t) {
    const e = t.match(tv);
    if (S(e, "invalid type", "type", t), t === "uint") return "uint256";
    if (t === "int") return "int256";
    if (e[2]) {
        const n = parseInt(e[2]);
        S(n !== 0 && n <= 32, "invalid bytes length", "type", t)
    } else if (e[3]) {
        const n = parseInt(e[3]);
        S(n !== 0 && n <= 256 && n % 8 === 0, "invalid numeric width", "type", t)
    }
    return t
}
const Ie = {},
    zt = Symbol.for("_ethers_internal"),
    Mm = "_ParamTypeInternal",
    _m = "_ErrorInternal",
    zm = "_EventInternal",
    Gm = "_ConstructorInternal",
    Hm = "_FallbackInternal",
    Qm = "_FunctionInternal",
    jm = "_StructInternal";
var Zo, oc;
const rn = class rn {
    constructor(e, n, r, i, s, o, l, a) {
        R(this, Zo);
        P(this, "name");
        P(this, "type");
        P(this, "baseType");
        P(this, "indexed");
        P(this, "components");
        P(this, "arrayLength");
        P(this, "arrayChildren");
        if (iu(e, Ie, "ParamType"), Object.defineProperty(this, zt, {
            value: Mm
        }), o && (o = Object.freeze(o.slice())), i === "array") {
            if (l == null || a == null) throw new Error("")
        } else if (l != null || a != null) throw new Error("");
        if (i === "tuple") {
            if (o == null) throw new Error("")
        } else if (o != null) throw new Error("");
        te(this, {
            name: n,
            type: r,
            baseType: i,
            indexed: s,
            components: o,
            arrayLength: l,
            arrayChildren: a
        })
    }
    format(e) {
        if (e == null && (e = "sighash"), e === "json") {
            const r = this.name || "";
            if (this.isArray()) {
                const s = JSON.parse(this.arrayChildren.format("json"));
                return s.name = r, s.type += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`, JSON.stringify(s)
            }
            const i = {
                type: this.baseType === "tuple" ? "tuple" : this.type,
                name: r
            };
            return typeof this.indexed == "boolean" && (i.indexed = this.indexed), this.isTuple() && (i.components = this.components.map(s => JSON.parse(s.format(e)))), JSON.stringify(i)
        }
        let n = "";
        return this.isArray() ? (n += this.arrayChildren.format(e), n += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`) : this.isTuple() ? n += "(" + this.components.map(r => r.format(e)).join(e === "full" ? ", " : ",") + ")" : n += this.type, e !== "sighash" && (this.indexed === !0 && (n += " indexed"), e === "full" && this.name && (n += " " + this.name)), n
    }
    isArray() {
        return this.baseType === "array"
    }
    isTuple() {
        return this.baseType === "tuple"
    }
    isIndexable() {
        return this.indexed != null
    }
    walk(e, n) {
        if (this.isArray()) {
            if (!Array.isArray(e)) throw new Error("invalid array value");
            if (this.arrayLength !== -1 && e.length !== this.arrayLength) throw new Error("array is wrong length");
            const r = this;
            return e.map(i => r.arrayChildren.walk(i, n))
        }
        if (this.isTuple()) {
            if (!Array.isArray(e)) throw new Error("invalid tuple value");
            if (e.length !== this.components.length) throw new Error("array is wrong length");
            const r = this;
            return e.map((i, s) => r.components[s].walk(i, n))
        }
        return n(this.type, e)
    }
    async walkAsync(e, n) {
        const r = [],
            i = [e];
        return M(this, Zo, oc).call(this, r, e, n, s => {
            i[0] = s
        }), r.length && await Promise.all(r), i[0]
    }
    static from(e, n) {
        if (rn.isParamType(e)) return e;
        if (typeof e == "string") try {
            return rn.from(Di(e), n)
        } catch {
            S(!1, "invalid param type", "obj", e)
        } else if (e instanceof Un) {
            let l = "",
                a = "",
                c = null;
            Mr(e, Ct(["tuple"])).has("tuple") || e.peekType("OPEN_PAREN") ? (a = "tuple", c = e.popParams().map(x => rn.from(x)), l = `tuple(${c.map(x => x.format()).join(",")})`) : (l = Dm(e.popType("TYPE")), a = l);
            let d = null,
                h = null;
            for (; e.length && e.peekType("BRACKET");) {
                const x = e.pop();
                d = new rn(Ie, "", l, a, null, c, h, d), h = x.value, l += x.text, a = "array", c = null
            }
            let m = null;
            if (Mr(e, vS).has("indexed")) {
                if (!n) throw new Error("");
                m = !0
            }
            const k = e.peekType("ID") ? e.pop().text : "";
            if (e.length) throw new Error("leftover tokens");
            return new rn(Ie, k, l, a, m, c, h, d)
        }
        const r = e.name;
        S(!r || typeof r == "string" && r.match(ev), "invalid name", "obj.name", r);
        let i = e.indexed;
        i != null && (S(n, "parameter cannot be indexed", "obj.indexed", e.indexed), i = !!i);
        let s = e.type,
            o = s.match(PS);
        if (o) {
            const l = parseInt(o[2] || "-1"),
                a = rn.from({
                    type: o[1],
                    components: e.components
                });
            return new rn(Ie, r || "", s, "array", i, null, l, a)
        }
        if (s === "tuple" || s.startsWith("tuple(") || s.startsWith("(")) {
            const l = e.components != null ? e.components.map(c => rn.from(c)) : null;
            return new rn(Ie, r || "", s, "tuple", i, l, null, null)
        }
        return s = Dm(e.type), new rn(Ie, r || "", s, s, i, null, null, null)
    }
    static isParamType(e) {
        return e && e[zt] === Mm
    }
};
Zo = new WeakSet, oc = function (e, n, r, i) {
    if (this.isArray()) {
        if (!Array.isArray(n)) throw new Error("invalid array value");
        if (this.arrayLength !== -1 && n.length !== this.arrayLength) throw new Error("array is wrong length");
        const o = this.arrayChildren,
            l = n.slice();
        l.forEach((a, c) => {
            var d;
            M(d = o, Zo, oc).call(d, e, a, r, h => {
                l[c] = h
            })
        }), i(l);
        return
    }
    if (this.isTuple()) {
        const o = this.components;
        let l;
        if (Array.isArray(n)) l = n.slice();
        else {
            if (n == null || typeof n != "object") throw new Error("invalid tuple value");
            l = o.map(a => {
                if (!a.name) throw new Error("cannot use object value with unnamed components");
                if (!(a.name in n)) throw new Error(`missing value for component ${a.name}`);
                return n[a.name]
            })
        }
        if (l.length !== this.components.length) throw new Error("array is wrong length");
        l.forEach((a, c) => {
            var d;
            M(d = o[c], Zo, oc).call(d, e, a, r, h => {
                l[c] = h
            })
        }), i(l);
        return
    }
    const s = r(this.type, n);
    s.then ? e.push(async function () {
        i(await s)
    }()) : i(s)
};
let ot = rn;
class Us {
    constructor(e, n, r) {
        P(this, "type");
        P(this, "inputs");
        iu(e, Ie, "Fragment"), r = Object.freeze(r.slice()), te(this, {
            type: n,
            inputs: r
        })
    }
    static from(e) {
        if (typeof e == "string") {
            try {
                Us.from(JSON.parse(e))
            } catch { }
            return Us.from(Di(e))
        }
        if (e instanceof Un) switch (e.peekKeyword(XA)) {
            case "constructor":
                return Br.from(e);
            case "error":
                return Ut.from(e);
            case "event":
                return Xn.from(e);
            case "fallback":
            case "receive":
                return hr.from(e);
            case "function":
                return qn.from(e);
            case "struct":
                return Ns.from(e)
        } else if (typeof e == "object") {
            switch (e.type) {
                case "constructor":
                    return Br.from(e);
                case "error":
                    return Ut.from(e);
                case "event":
                    return Xn.from(e);
                case "fallback":
                case "receive":
                    return hr.from(e);
                case "function":
                    return qn.from(e);
                case "struct":
                    return Ns.from(e)
            }
            D(!1, `unsupported type: ${e.type}`, "UNSUPPORTED_OPERATION", {
                operation: "Fragment.from"
            })
        }
        S(!1, "unsupported frgament object", "obj", e)
    }
    static isConstructor(e) {
        return Br.isFragment(e)
    }
    static isError(e) {
        return Ut.isFragment(e)
    }
    static isEvent(e) {
        return Xn.isFragment(e)
    }
    static isFunction(e) {
        return qn.isFragment(e)
    }
    static isStruct(e) {
        return Ns.isFragment(e)
    }
}
class Rf extends Us {
    constructor(n, r, i, s) {
        super(n, r, s);
        P(this, "name");
        S(typeof i == "string" && i.match(ev), "invalid identifier", "name", i), s = Object.freeze(s.slice()), te(this, {
            name: i
        })
    }
}

function Da(t, e) {
    return "(" + e.map(n => n.format(t)).join(t === "full" ? ", " : ",") + ")"
}
class Ut extends Rf {
    constructor(e, n, r) {
        super(e, "error", n, r), Object.defineProperty(this, zt, {
            value: _m
        })
    }
    get selector() {
        return Os(this.format("sighash")).substring(0, 10)
    }
    format(e) {
        if (e == null && (e = "sighash"), e === "json") return JSON.stringify({
            type: "error",
            name: this.name,
            inputs: this.inputs.map(r => JSON.parse(r.format(e)))
        });
        const n = [];
        return e !== "sighash" && n.push("error"), n.push(this.name + Da(e, this.inputs)), n.join(" ")
    }
    static from(e) {
        if (Ut.isFragment(e)) return e;
        if (typeof e == "string") return Ut.from(Di(e));
        if (e instanceof Un) {
            const n = If("error", e),
                r = Tr(e);
            return Fs(e), new Ut(Ie, n, r)
        }
        return new Ut(Ie, e.name, e.inputs ? e.inputs.map(ot.from) : [])
    }
    static isFragment(e) {
        return e && e[zt] === _m
    }
}
class Xn extends Rf {
    constructor(n, r, i, s) {
        super(n, "event", r, i);
        P(this, "anonymous");
        Object.defineProperty(this, zt, {
            value: zm
        }), te(this, {
            anonymous: s
        })
    }
    get topicHash() {
        return Os(this.format("sighash"))
    }
    format(n) {
        if (n == null && (n = "sighash"), n === "json") return JSON.stringify({
            type: "event",
            anonymous: this.anonymous,
            name: this.name,
            inputs: this.inputs.map(i => JSON.parse(i.format(n)))
        });
        const r = [];
        return n !== "sighash" && r.push("event"), r.push(this.name + Da(n, this.inputs)), n !== "sighash" && this.anonymous && r.push("anonymous"), r.join(" ")
    }
    static getTopicHash(n, r) {
        return r = (r || []).map(s => ot.from(s)), new Xn(Ie, n, r, !1).topicHash
    }
    static from(n) {
        if (Xn.isFragment(n)) return n;
        if (typeof n == "string") try {
            return Xn.from(Di(n))
        } catch {
            S(!1, "invalid event fragment", "obj", n)
        } else if (n instanceof Un) {
            const r = If("event", n),
                i = Tr(n, !0),
                s = !!Mr(n, Ct(["anonymous"])).has("anonymous");
            return Fs(n), new Xn(Ie, r, i, s)
        }
        return new Xn(Ie, n.name, n.inputs ? n.inputs.map(r => ot.from(r, !0)) : [], !!n.anonymous)
    }
    static isFragment(n) {
        return n && n[zt] === zm
    }
}
class Br extends Us {
    constructor(n, r, i, s, o) {
        super(n, r, i);
        P(this, "payable");
        P(this, "gas");
        Object.defineProperty(this, zt, {
            value: Gm
        }), te(this, {
            payable: s,
            gas: o
        })
    }
    format(n) {
        if (D(n != null && n !== "sighash", "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", {
            operation: "format(sighash)"
        }), n === "json") return JSON.stringify({
            type: "constructor",
            stateMutability: this.payable ? "payable" : "undefined",
            payable: this.payable,
            gas: this.gas != null ? this.gas : void 0,
            inputs: this.inputs.map(i => JSON.parse(i.format(n)))
        });
        const r = [`constructor${Da(n, this.inputs)}`];
        return this.payable && r.push("payable"), this.gas != null && r.push(`@${this.gas.toString()}`), r.join(" ")
    }
    static from(n) {
        if (Br.isFragment(n)) return n;
        if (typeof n == "string") try {
            return Br.from(Di(n))
        } catch {
            S(!1, "invalid constuctor fragment", "obj", n)
        } else if (n instanceof Un) {
            Mr(n, Ct(["constructor"]));
            const r = Tr(n),
                i = !!Mr(n, wS).has("payable"),
                s = rv(n);
            return Fs(n), new Br(Ie, "constructor", r, i, s)
        }
        return new Br(Ie, "constructor", n.inputs ? n.inputs.map(ot.from) : [], !!n.payable, n.gas != null ? n.gas : null)
    }
    static isFragment(n) {
        return n && n[zt] === Gm
    }
}
class hr extends Us {
    constructor(n, r, i) {
        super(n, "fallback", r);
        P(this, "payable");
        Object.defineProperty(this, zt, {
            value: Hm
        }), te(this, {
            payable: i
        })
    }
    format(n) {
        const r = this.inputs.length === 0 ? "receive" : "fallback";
        if (n === "json") {
            const i = this.payable ? "payable" : "nonpayable";
            return JSON.stringify({
                type: r,
                stateMutability: i
            })
        }
        return `${r}()${this.payable ? " payable" : ""}`
    }
    static from(n) {
        if (hr.isFragment(n)) return n;
        if (typeof n == "string") try {
            return hr.from(Di(n))
        } catch {
            S(!1, "invalid fallback fragment", "obj", n)
        } else if (n instanceof Un) {
            const r = n.toString(),
                i = n.peekKeyword(Ct(["fallback", "receive"]));
            if (S(i, "type must be fallback or receive", "obj", r), n.popKeyword(Ct(["fallback", "receive"])) === "receive") {
                const a = Tr(n);
                return S(a.length === 0, "receive cannot have arguments", "obj.inputs", a), Mr(n, Ct(["payable"])), Fs(n), new hr(Ie, [], !0)
            }
            let o = Tr(n);
            o.length ? S(o.length === 1 && o[0].type === "bytes", "invalid fallback inputs", "obj.inputs", o.map(a => a.format("minimal")).join(", ")) : o = [ot.from("bytes")];
            const l = nv(n);
            if (S(l === "nonpayable" || l === "payable", "fallback cannot be constants", "obj.stateMutability", l), Mr(n, Ct(["returns"])).has("returns")) {
                const a = Tr(n);
                S(a.length === 1 && a[0].type === "bytes", "invalid fallback outputs", "obj.outputs", a.map(c => c.format("minimal")).join(", "))
            }
            return Fs(n), new hr(Ie, o, l === "payable")
        }
        if (n.type === "receive") return new hr(Ie, [], !0);
        if (n.type === "fallback") {
            const r = [ot.from("bytes")],
                i = n.stateMutability === "payable";
            return new hr(Ie, r, i)
        }
        S(!1, "invalid fallback description", "obj", n)
    }
    static isFragment(n) {
        return n && n[zt] === Hm
    }
}
class qn extends Rf {
    constructor(n, r, i, s, o, l) {
        super(n, "function", r, s);
        P(this, "constant");
        P(this, "outputs");
        P(this, "stateMutability");
        P(this, "payable");
        P(this, "gas");
        Object.defineProperty(this, zt, {
            value: Qm
        }), o = Object.freeze(o.slice()), te(this, {
            constant: i === "view" || i === "pure",
            gas: l,
            outputs: o,
            payable: i === "payable",
            stateMutability: i
        })
    }
    get selector() {
        return Os(this.format("sighash")).substring(0, 10)
    }
    format(n) {
        if (n == null && (n = "sighash"), n === "json") return JSON.stringify({
            type: "function",
            name: this.name,
            constant: this.constant,
            stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
            payable: this.payable,
            gas: this.gas != null ? this.gas : void 0,
            inputs: this.inputs.map(i => JSON.parse(i.format(n))),
            outputs: this.outputs.map(i => JSON.parse(i.format(n)))
        });
        const r = [];
        return n !== "sighash" && r.push("function"), r.push(this.name + Da(n, this.inputs)), n !== "sighash" && (this.stateMutability !== "nonpayable" && r.push(this.stateMutability), this.outputs && this.outputs.length && (r.push("returns"), r.push(Da(n, this.outputs))), this.gas != null && r.push(`@${this.gas.toString()}`)), r.join(" ")
    }
    static getSelector(n, r) {
        return r = (r || []).map(s => ot.from(s)), new qn(Ie, n, "view", r, [], null).selector
    }
    static from(n) {
        if (qn.isFragment(n)) return n;
        if (typeof n == "string") try {
            return qn.from(Di(n))
        } catch {
            S(!1, "invalid function fragment", "obj", n)
        } else if (n instanceof Un) {
            const i = If("function", n),
                s = Tr(n),
                o = nv(n);
            let l = [];
            Mr(n, Ct(["returns"])).has("returns") && (l = Tr(n));
            const a = rv(n);
            return Fs(n), new qn(Ie, i, o, s, l, a)
        }
        let r = n.stateMutability;
        return r == null && (r = "payable", typeof n.constant == "boolean" ? (r = "view", n.constant || (r = "payable", typeof n.payable == "boolean" && !n.payable && (r = "nonpayable"))) : typeof n.payable == "boolean" && !n.payable && (r = "nonpayable")), new qn(Ie, n.name, r, n.inputs ? n.inputs.map(ot.from) : [], n.outputs ? n.outputs.map(ot.from) : [], n.gas != null ? n.gas : null)
    }
    static isFragment(n) {
        return n && n[zt] === Qm
    }
}
class Ns extends Rf {
    constructor(e, n, r) {
        super(e, "struct", n, r), Object.defineProperty(this, zt, {
            value: jm
        })
    }
    format() {
        throw new Error("@TODO")
    }
    static from(e) {
        if (typeof e == "string") try {
            return Ns.from(Di(e))
        } catch {
            S(!1, "invalid struct fragment", "obj", e)
        } else if (e instanceof Un) {
            const n = If("struct", e),
                r = Tr(e);
            return Fs(e), new Ns(Ie, n, r)
        }
        return new Ns(Ie, e.name, e.inputs ? e.inputs.map(ot.from) : [])
    }
    static isFragment(e) {
        return e && e[zt] === jm
    }
}
const Ln = new Map;
Ln.set(0, "GENERIC_PANIC");
Ln.set(1, "ASSERT_FALSE");
Ln.set(17, "OVERFLOW");
Ln.set(18, "DIVIDE_BY_ZERO");
Ln.set(33, "ENUM_RANGE_ERROR");
Ln.set(34, "BAD_STORAGE_DATA");
Ln.set(49, "STACK_UNDERFLOW");
Ln.set(50, "ARRAY_RANGE_ERROR");
Ln.set(65, "OUT_OF_MEMORY");
Ln.set(81, "UNINITIALIZED_FUNCTION_CALL");
const BS = new RegExp(/^bytes([0-9]*)$/),
    IS = new RegExp(/^(u?int)([0-9]*)$/);
let Sd = null,
    Vm = 1024;

function RS(t, e, n, r) {
    let i = "missing revert data",
        s = null;
    const o = null;
    let l = null;
    if (n) {
        i = "execution reverted";
        const c = de(n);
        if (n = W(n), c.length === 0) i += " (no data present; likely require(false) occurred", s = "require(false)";
        else if (c.length % 32 !== 4) i += " (could not decode reason; invalid data length)";
        else if (W(c.slice(0, 4)) === "0x08c379a0") try {
            s = r.decode(["string"], c.slice(4))[0], l = {
                signature: "Error(string)",
                name: "Error",
                args: [s]
            }, i += `: ${JSON.stringify(s)}`
        } catch {
            i += " (could not decode reason; invalid string data)"
        } else if (W(c.slice(0, 4)) === "0x4e487b71") try {
            const d = Number(r.decode(["uint256"], c.slice(4))[0]);
            l = {
                signature: "Panic(uint256)",
                name: "Panic",
                args: [d]
            }, s = `Panic due to ${Ln.get(d) || "UNKNOWN"}(${d})`, i += `: ${s}`
        } catch {
            i += " (could not decode panic code)"
        } else i += " (unknown custom error)"
    }
    const a = {
        to: e.to ? ye(e.to) : null,
        data: e.data || "0x"
    };
    return e.from && (a.from = ye(e.from)), Ue(i, "CALL_EXCEPTION", {
        action: t,
        data: n,
        reason: s,
        transaction: a,
        invocation: o,
        revert: l
    })
}
var oi, Ws;
const qc = class qc {
    constructor() {
        R(this, oi)
    }
    getDefaultValue(e) {
        const n = e.map(i => M(this, oi, Ws).call(this, ot.from(i)));
        return new Du(n, "_").defaultValue()
    }
    encode(e, n) {
        T1(n.length, e.length, "types/values length mismatch");
        const r = e.map(o => M(this, oi, Ws).call(this, ot.from(o))),
            i = new Du(r, "_"),
            s = new Uh;
        return i.encode(s, n), s.data
    }
    decode(e, n, r) {
        const i = e.map(o => M(this, oi, Ws).call(this, ot.from(o)));
        return new Du(i, "_").decode(new Lh(n, r, Vm))
    }
    static _setDefaultMaxInflation(e) {
        S(typeof e == "number" && Number.isInteger(e), "invalid defaultMaxInflation factor", "value", e), Vm = e
    }
    static defaultAbiCoder() {
        return Sd == null && (Sd = new qc), Sd
    }
    static getBuiltinCallException(e, n, r) {
        return RS(e, n, r, qc.defaultAbiCoder())
    }
};
oi = new WeakSet, Ws = function (e) {
    if (e.isArray()) return new eN(M(this, oi, Ws).call(this, e.arrayChildren), e.arrayLength, e.name);
    if (e.isTuple()) return new Du(e.components.map(r => M(this, oi, Ws).call(this, r)), e.name);
    switch (e.baseType) {
        case "address":
            return new Xk(e.name);
        case "bool":
            return new tN(e.name);
        case "string":
            return new cN(e.name);
        case "bytes":
            return new nN(e.name);
        case "":
            return new sN(e.name)
    }
    let n = e.type.match(IS);
    if (n) {
        let r = parseInt(n[2] || "256");
        return S(r !== 0 && r <= 256 && r % 8 === 0, "invalid " + n[1] + " bit length", "param", e), new uN(r / 8, n[1] === "int", e.name)
    }
    if (n = e.type.match(BS), n) {
        let r = parseInt(n[1]);
        return S(r !== 0 && r <= 32, "invalid bytes length", "param", e), new rN(r, e.name)
    }
    S(!1, "invalid type", "type", e.type)
};
let Ma = qc;
class TS {
    constructor(e, n, r) {
        P(this, "fragment");
        P(this, "name");
        P(this, "signature");
        P(this, "topic");
        P(this, "args");
        const i = e.name,
            s = e.format();
        te(this, {
            fragment: e,
            name: i,
            signature: s,
            topic: n,
            args: r
        })
    }
}
class OS {
    constructor(e, n, r, i) {
        P(this, "fragment");
        P(this, "name");
        P(this, "args");
        P(this, "signature");
        P(this, "selector");
        P(this, "value");
        const s = e.name,
            o = e.format();
        te(this, {
            fragment: e,
            name: s,
            args: r,
            signature: o,
            selector: n,
            value: i
        })
    }
}
class FS {
    constructor(e, n, r) {
        P(this, "fragment");
        P(this, "name");
        P(this, "args");
        P(this, "signature");
        P(this, "selector");
        const i = e.name,
            s = e.format();
        te(this, {
            fragment: e,
            name: i,
            args: r,
            signature: s,
            selector: n
        })
    }
}
class Jm {
    constructor(e) {
        P(this, "hash");
        P(this, "_isIndexed");
        te(this, {
            hash: e,
            _isIndexed: !0
        })
    }
    static isIndexed(e) {
        return !!(e && e._isIndexed)
    }
}
const Km = {
    0: "generic panic",
    1: "assert(false)",
    17: "arithmetic overflow",
    18: "division or modulo by zero",
    33: "enum overflow",
    34: "invalid encoded storage byte array accessed",
    49: "out-of-bounds array access; popping on an empty array",
    50: "out-of-bounds access of an array or bytesN",
    65: "out of memory",
    81: "uninitialized function"
},
    Wm = {
        "0x08c379a0": {
            signature: "Error(string)",
            name: "Error",
            inputs: ["string"],
            reason: t => `reverted with reason string ${JSON.stringify(t)}`
        },
        "0x4e487b71": {
            signature: "Panic(uint256)",
            name: "Panic",
            inputs: ["uint256"],
            reason: t => {
                let e = "unknown panic code";
                return t >= 0 && t <= 255 && Km[t.toString()] && (e = Km[t.toString()]), `reverted with panic code 0x${t.toString(16)} (${e})`
            }
        }
    };
var jn, Vn, Jn, ht, rr, lc, ac;
const Wi = class Wi {
    constructor(e) {
        R(this, rr);
        P(this, "fragments");
        P(this, "deploy");
        P(this, "fallback");
        P(this, "receive");
        R(this, jn);
        R(this, Vn);
        R(this, Jn);
        R(this, ht);
        let n = [];
        typeof e == "string" ? n = JSON.parse(e) : n = e, b(this, Jn, new Map), b(this, jn, new Map), b(this, Vn, new Map);
        const r = [];
        for (const o of n) try {
            r.push(Us.from(o))
        } catch (l) {
            console.log(`[Warning] Invalid Fragment ${JSON.stringify(o)}:`, l.message)
        }
        te(this, {
            fragments: Object.freeze(r)
        });
        let i = null,
            s = !1;
        b(this, ht, this.getAbiCoder()), this.fragments.forEach((o, l) => {
            let a;
            switch (o.type) {
                case "constructor":
                    if (this.deploy) {
                        console.log("duplicate definition - constructor");
                        return
                    }
                    te(this, {
                        deploy: o
                    });
                    return;
                case "fallback":
                    o.inputs.length === 0 ? s = !0 : (S(!i || o.payable !== i.payable, "conflicting fallback fragments", `fragments[${l}]`, o), i = o, s = i.payable);
                    return;
                case "function":
                    a = p(this, Jn);
                    break;
                case "event":
                    a = p(this, Vn);
                    break;
                case "error":
                    a = p(this, jn);
                    break;
                default:
                    return
            }
            const c = o.format();
            a.has(c) || a.set(c, o)
        }), this.deploy || te(this, {
            deploy: Br.from("constructor()")
        }), te(this, {
            fallback: i,
            receive: s
        })
    }
    format(e) {
        const n = e ? "minimal" : "full";
        return this.fragments.map(i => i.format(n))
    }
    formatJson() {
        const e = this.fragments.map(n => n.format("json"));
        return JSON.stringify(e.map(n => JSON.parse(n)))
    }
    getAbiCoder() {
        return Ma.defaultAbiCoder()
    }
    getFunctionName(e) {
        const n = M(this, rr, lc).call(this, e, null, !1);
        return S(n, "no matching function", "key", e), n.name
    }
    hasFunction(e) {
        return !!M(this, rr, lc).call(this, e, null, !1)
    }
    getFunction(e, n) {
        return M(this, rr, lc).call(this, e, n || null, !0)
    }
    forEachFunction(e) {
        const n = Array.from(p(this, Jn).keys());
        n.sort((r, i) => r.localeCompare(i));
        for (let r = 0; r < n.length; r++) {
            const i = n[r];
            e(p(this, Jn).get(i), r)
        }
    }
    getEventName(e) {
        const n = M(this, rr, ac).call(this, e, null, !1);
        return S(n, "no matching event", "key", e), n.name
    }
    hasEvent(e) {
        return !!M(this, rr, ac).call(this, e, null, !1)
    }
    getEvent(e, n) {
        return M(this, rr, ac).call(this, e, n || null, !0)
    }
    forEachEvent(e) {
        const n = Array.from(p(this, Vn).keys());
        n.sort((r, i) => r.localeCompare(i));
        for (let r = 0; r < n.length; r++) {
            const i = n[r];
            e(p(this, Vn).get(i), r)
        }
    }
    getError(e, n) {
        if (Ee(e)) {
            const i = e.toLowerCase();
            if (Wm[i]) return Ut.from(Wm[i].signature);
            for (const s of p(this, jn).values())
                if (i === s.selector) return s;
            return null
        }
        if (e.indexOf("(") === -1) {
            const i = [];
            for (const [s, o] of p(this, jn)) s.split("(")[0] === e && i.push(o);
            if (i.length === 0) return e === "Error" ? Ut.from("error Error(string)") : e === "Panic" ? Ut.from("error Panic(uint256)") : null;
            if (i.length > 1) {
                const s = i.map(o => JSON.stringify(o.format())).join(", ");
                S(!1, `ambiguous error description (i.e. ${s})`, "name", e)
            }
            return i[0]
        }
        if (e = Ut.from(e).format(), e === "Error(string)") return Ut.from("error Error(string)");
        if (e === "Panic(uint256)") return Ut.from("error Panic(uint256)");
        const r = p(this, jn).get(e);
        return r || null
    }
    forEachError(e) {
        const n = Array.from(p(this, jn).keys());
        n.sort((r, i) => r.localeCompare(i));
        for (let r = 0; r < n.length; r++) {
            const i = n[r];
            e(p(this, jn).get(i), r)
        }
    }
    _decodeParams(e, n) {
        return p(this, ht).decode(e, n)
    }
    _encodeParams(e, n) {
        return p(this, ht).encode(e, n)
    }
    encodeDeploy(e) {
        return this._encodeParams(this.deploy.inputs, e || [])
    }
    decodeErrorResult(e, n) {
        if (typeof e == "string") {
            const r = this.getError(e);
            S(r, "unknown error", "fragment", e), e = r
        }
        return S(Le(n, 0, 4) === e.selector, `data signature does not match error ${e.name}.`, "data", n), this._decodeParams(e.inputs, Le(n, 4))
    }
    encodeErrorResult(e, n) {
        if (typeof e == "string") {
            const r = this.getError(e);
            S(r, "unknown error", "fragment", e), e = r
        }
        return Qe([e.selector, this._encodeParams(e.inputs, n || [])])
    }
    decodeFunctionData(e, n) {
        if (typeof e == "string") {
            const r = this.getFunction(e);
            S(r, "unknown function", "fragment", e), e = r
        }
        return S(Le(n, 0, 4) === e.selector, `data signature does not match function ${e.name}.`, "data", n), this._decodeParams(e.inputs, Le(n, 4))
    }
    encodeFunctionData(e, n) {
        if (typeof e == "string") {
            const r = this.getFunction(e);
            S(r, "unknown function", "fragment", e), e = r
        }
        return Qe([e.selector, this._encodeParams(e.inputs, n || [])])
    }
    decodeFunctionResult(e, n) {
        if (typeof e == "string") {
            const s = this.getFunction(e);
            S(s, "unknown function", "fragment", e), e = s
        }
        let r = "invalid length for result data";
        const i = bt(n);
        if (i.length % 32 === 0) try {
            return p(this, ht).decode(e.outputs, i)
        } catch {
            r = "could not decode result data"
        }
        D(!1, r, "BAD_DATA", {
            value: W(i),
            info: {
                method: e.name,
                signature: e.format()
            }
        })
    }
    makeError(e, n) {
        const r = de(e, "data"),
            i = Ma.getBuiltinCallException("call", n, r);
        if (i.message.startsWith("execution reverted (unknown custom error)")) {
            const l = W(r.slice(0, 4)),
                a = this.getError(l);
            if (a) try {
                const c = p(this, ht).decode(a.inputs, r.slice(4));
                i.revert = {
                    name: a.name,
                    signature: a.format(),
                    args: c
                }, i.reason = i.revert.signature, i.message = `execution reverted: ${i.reason}`
            } catch {
                i.message = "execution reverted (coult not decode custom error)"
            }
        }
        const o = this.parseTransaction(n);
        return o && (i.invocation = {
            method: o.name,
            signature: o.signature,
            args: o.args
        }), i
    }
    encodeFunctionResult(e, n) {
        if (typeof e == "string") {
            const r = this.getFunction(e);
            S(r, "unknown function", "fragment", e), e = r
        }
        return W(p(this, ht).encode(e.outputs, n || []))
    }
    encodeFilterTopics(e, n) {
        if (typeof e == "string") {
            const s = this.getEvent(e);
            S(s, "unknown event", "eventFragment", e), e = s
        }
        D(n.length <= e.inputs.length, `too many arguments for ${e.format()}`, "UNEXPECTED_ARGUMENT", {
            count: n.length,
            expectedCount: e.inputs.length
        });
        const r = [];
        e.anonymous || r.push(e.topicHash);
        const i = (s, o) => s.type === "string" ? Os(o) : s.type === "bytes" ? Ve(W(o)) : (s.type === "bool" && typeof o == "boolean" ? o = o ? "0x01" : "0x00" : s.type.match(/^u?int/) ? o = Ri(o) : s.type.match(/^bytes/) ? o = rb(o, 32) : s.type === "address" && p(this, ht).encode(["address"], [o]), Rs(W(o), 32));
        for (n.forEach((s, o) => {
            const l = e.inputs[o];
            if (!l.indexed) {
                S(s == null, "cannot filter non-indexed parameters; must be null", "contract." + l.name, s);
                return
            }
            s == null ? r.push(null) : l.baseType === "array" || l.baseType === "tuple" ? S(!1, "filtering with tuples or arrays not supported", "contract." + l.name, s) : Array.isArray(s) ? r.push(s.map(a => i(l, a))) : r.push(i(l, s))
        }); r.length && r[r.length - 1] === null;) r.pop();
        return r
    }
    encodeEventLog(e, n) {
        if (typeof e == "string") {
            const o = this.getEvent(e);
            S(o, "unknown event", "eventFragment", e), e = o
        }
        const r = [],
            i = [],
            s = [];
        return e.anonymous || r.push(e.topicHash), S(n.length === e.inputs.length, "event arguments/values mismatch", "values", n), e.inputs.forEach((o, l) => {
            const a = n[l];
            if (o.indexed)
                if (o.type === "string") r.push(Os(a));
                else if (o.type === "bytes") r.push(Ve(a));
                else {
                    if (o.baseType === "tuple" || o.baseType === "array") throw new Error("not implemented");
                    r.push(p(this, ht).encode([o.type], [a]))
                } else i.push(o), s.push(a)
        }), {
            data: p(this, ht).encode(i, s),
            topics: r
        }
    }
    decodeEventLog(e, n, r) {
        if (typeof e == "string") {
            const A = this.getEvent(e);
            S(A, "unknown event", "eventFragment", e), e = A
        }
        if (r != null && !e.anonymous) {
            const A = e.topicHash;
            S(Ee(r[0], 32) && r[0].toLowerCase() === A, "fragment/topic mismatch", "topics[0]", r[0]), r = r.slice(1)
        }
        const i = [],
            s = [],
            o = [];
        e.inputs.forEach((A, k) => {
            A.indexed ? A.type === "string" || A.type === "bytes" || A.baseType === "tuple" || A.baseType === "array" ? (i.push(ot.from({
                type: "bytes32",
                name: A.name
            })), o.push(!0)) : (i.push(A), o.push(!1)) : (s.push(A), o.push(!1))
        });
        const l = r != null ? p(this, ht).decode(i, Qe(r)) : null,
            a = p(this, ht).decode(s, n, !0),
            c = [],
            d = [];
        let h = 0,
            m = 0;
        return e.inputs.forEach((A, k) => {
            let x = null;
            if (A.indexed)
                if (l == null) x = new Jm(null);
                else if (o[k]) x = new Jm(l[m++]);
                else try {
                    x = l[m++]
                } catch (C) {
                    x = C
                } else try {
                    x = a[h++]
                } catch (C) {
                    x = C
                }
            c.push(x), d.push(A.name || null)
        }), Al.fromItems(c, d)
    }
    parseTransaction(e) {
        const n = de(e.data, "tx.data"),
            r = Z(e.value != null ? e.value : 0, "tx.value"),
            i = this.getFunction(W(n.slice(0, 4)));
        if (!i) return null;
        const s = p(this, ht).decode(i.inputs, n.slice(4));
        return new OS(i, i.selector, s, r)
    }
    parseCallResult(e) {
        throw new Error("@TODO")
    }
    parseLog(e) {
        const n = this.getEvent(e.topics[0]);
        return !n || n.anonymous ? null : new TS(n, n.topicHash, this.decodeEventLog(n, e.data, e.topics))
    }
    parseError(e) {
        const n = W(e),
            r = this.getError(Le(n, 0, 4));
        if (!r) return null;
        const i = p(this, ht).decode(r.inputs, Le(n, 4));
        return new FS(r, r.selector, i)
    }
    static from(e) {
        return e instanceof Wi ? e : typeof e == "string" ? new Wi(JSON.parse(e)) : typeof e.formatJson == "function" ? new Wi(e.formatJson()) : typeof e.format == "function" ? new Wi(e.format("json")) : new Wi(e)
    }
};
jn = new WeakMap, Vn = new WeakMap, Jn = new WeakMap, ht = new WeakMap, rr = new WeakSet, lc = function (e, n, r) {
    if (Ee(e)) {
        const s = e.toLowerCase();
        for (const o of p(this, Jn).values())
            if (s === o.selector) return o;
        return null
    }
    if (e.indexOf("(") === -1) {
        const s = [];
        for (const [o, l] of p(this, Jn)) o.split("(")[0] === e && s.push(l);
        if (n) {
            const o = n.length > 0 ? n[n.length - 1] : null;
            let l = n.length,
                a = !0;
            yt.isTyped(o) && o.type === "overrides" && (a = !1, l--);
            for (let c = s.length - 1; c >= 0; c--) {
                const d = s[c].inputs.length;
                d !== l && (!a || d !== l - 1) && s.splice(c, 1)
            }
            for (let c = s.length - 1; c >= 0; c--) {
                const d = s[c].inputs;
                for (let h = 0; h < n.length; h++)
                    if (yt.isTyped(n[h])) {
                        if (h >= d.length) {
                            if (n[h].type === "overrides") continue;
                            s.splice(c, 1);
                            break
                        }
                        if (n[h].type !== d[h].baseType) {
                            s.splice(c, 1);
                            break
                        }
                    }
            }
        }
        if (s.length === 1 && n && n.length !== s[0].inputs.length) {
            const o = n[n.length - 1];
            (o == null || Array.isArray(o) || typeof o != "object") && s.splice(0, 1)
        }
        if (s.length === 0) return null;
        if (s.length > 1 && r) {
            const o = s.map(l => JSON.stringify(l.format())).join(", ");
            S(!1, `ambiguous function description (i.e. matches ${o})`, "key", e)
        }
        return s[0]
    }
    const i = p(this, Jn).get(qn.from(e).format());
    return i || null
}, ac = function (e, n, r) {
    if (Ee(e)) {
        const s = e.toLowerCase();
        for (const o of p(this, Vn).values())
            if (s === o.topicHash) return o;
        return null
    }
    if (e.indexOf("(") === -1) {
        const s = [];
        for (const [o, l] of p(this, Vn)) o.split("(")[0] === e && s.push(l);
        if (n) {
            for (let o = s.length - 1; o >= 0; o--) s[o].inputs.length < n.length && s.splice(o, 1);
            for (let o = s.length - 1; o >= 0; o--) {
                const l = s[o].inputs;
                for (let a = 0; a < n.length; a++)
                    if (yt.isTyped(n[a]) && n[a].type !== l[a].baseType) {
                        s.splice(o, 1);
                        break
                    }
            }
        }
        if (s.length === 0) return null;
        if (s.length > 1 && r) {
            const o = s.map(l => JSON.stringify(l.format())).join(", ");
            S(!1, `ambiguous event description (i.e. matches ${o})`, "key", e)
        }
        return s[0]
    }
    const i = p(this, Vn).get(Xn.from(e).format());
    return i || null
};
let $h = Wi;
const iv = BigInt(0);

function No(t) {
    return t & null
}

function _e(t) {
    return t == null ? null : t.toString()
}
class Ym {
    constructor(e, n, r) {
        P(this, "gasPrice");
        P(this, "maxFeePerGas");
        P(this, "maxPriorityFeePerGas");
        te(this, {
            gasPrice: No(e),
            maxFeePerGas: No(n),
            maxPriorityFeePerGas: No(r)
        })
    }
    toJSON() {
        const {
            gasPrice: e,
            maxFeePerGas: n,
            maxPriorityFeePerGas: r
        } = this;
        return {
            _type: "FeeData",
            gasPrice: _e(e),
            maxFeePerGas: _e(n),
            maxPriorityFeePerGas: _e(r)
        }
    }
}

function Kc(t) {
    const e = {};
    t.to && (e.to = t.to), t.from && (e.from = t.from), t.data && (e.data = W(t.data));
    const n = "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);
    for (const i of n) !(i in t) || t[i] == null || (e[i] = Z(t[i], `request.${i}`));
    const r = "type,nonce".split(/,/);
    for (const i of r) !(i in t) || t[i] == null || (e[i] = oe(t[i], `request.${i}`));
    return t.accessList && (e.accessList = zs(t.accessList)), "blockTag" in t && (e.blockTag = t.blockTag), "enableCcipRead" in t && (e.enableCcipRead = !!t.enableCcipRead), "customData" in t && (e.customData = t.customData), "blobVersionedHashes" in t && t.blobVersionedHashes && (e.blobVersionedHashes = t.blobVersionedHashes.slice()), "kzg" in t && (e.kzg = t.kzg), "blobs" in t && t.blobs && (e.blobs = t.blobs.map(i => ag(i) ? W(i) : Object.assign({}, i))), e
}
var vr;
class US {
    constructor(e, n) {
        P(this, "provider");
        P(this, "number");
        P(this, "hash");
        P(this, "timestamp");
        P(this, "parentHash");
        P(this, "parentBeaconBlockRoot");
        P(this, "nonce");
        P(this, "difficulty");
        P(this, "gasLimit");
        P(this, "gasUsed");
        P(this, "stateRoot");
        P(this, "receiptsRoot");
        P(this, "blobGasUsed");
        P(this, "excessBlobGas");
        P(this, "miner");
        P(this, "prevRandao");
        P(this, "extraData");
        P(this, "baseFeePerGas");
        R(this, vr);
        b(this, vr, e.transactions.map(r => typeof r != "string" ? new _a(r, n) : r)), te(this, {
            provider: n,
            hash: No(e.hash),
            number: e.number,
            timestamp: e.timestamp,
            parentHash: e.parentHash,
            parentBeaconBlockRoot: e.parentBeaconBlockRoot,
            nonce: e.nonce,
            difficulty: e.difficulty,
            gasLimit: e.gasLimit,
            gasUsed: e.gasUsed,
            blobGasUsed: e.blobGasUsed,
            excessBlobGas: e.excessBlobGas,
            miner: e.miner,
            prevRandao: No(e.prevRandao),
            extraData: e.extraData,
            baseFeePerGas: No(e.baseFeePerGas),
            stateRoot: e.stateRoot,
            receiptsRoot: e.receiptsRoot
        })
    }
    get transactions() {
        return p(this, vr).map(e => typeof e == "string" ? e : e.hash)
    }
    get prefetchedTransactions() {
        const e = p(this, vr).slice();
        return e.length === 0 ? [] : (D(typeof e[0] == "object", "transactions were not prefetched with block request", "UNSUPPORTED_OPERATION", {
            operation: "transactionResponses()"
        }), e)
    }
    toJSON() {
        const {
            baseFeePerGas: e,
            difficulty: n,
            extraData: r,
            gasLimit: i,
            gasUsed: s,
            hash: o,
            miner: l,
            prevRandao: a,
            nonce: c,
            number: d,
            parentHash: h,
            parentBeaconBlockRoot: m,
            stateRoot: A,
            receiptsRoot: k,
            timestamp: x,
            transactions: C
        } = this;
        return {
            _type: "Block",
            baseFeePerGas: _e(e),
            difficulty: _e(n),
            extraData: r,
            gasLimit: _e(i),
            gasUsed: _e(s),
            blobGasUsed: _e(this.blobGasUsed),
            excessBlobGas: _e(this.excessBlobGas),
            hash: o,
            miner: l,
            prevRandao: a,
            nonce: c,
            number: d,
            parentHash: h,
            timestamp: x,
            parentBeaconBlockRoot: m,
            stateRoot: A,
            receiptsRoot: k,
            transactions: C
        }
    } [Symbol.iterator]() {
        let e = 0;
        const n = this.transactions;
        return {
            next: () => e < this.length ? {
                value: n[e++],
                done: !1
            } : {
                value: void 0,
                done: !0
            }
        }
    }
    get length() {
        return p(this, vr).length
    }
    get date() {
        return this.timestamp == null ? null : new Date(this.timestamp * 1e3)
    }
    async getTransaction(e) {
        let n;
        if (typeof e == "number") n = p(this, vr)[e];
        else {
            const r = e.toLowerCase();
            for (const i of p(this, vr))
                if (typeof i == "string") {
                    if (i !== r) continue;
                    n = i;
                    break
                } else {
                    if (i.hash !== r) continue;
                    n = i;
                    break
                }
        }
        if (n == null) throw new Error("no such tx");
        return typeof n == "string" ? await this.provider.getTransaction(n) : n
    }
    getPrefetchedTransaction(e) {
        const n = this.prefetchedTransactions;
        if (typeof e == "number") return n[e];
        e = e.toLowerCase();
        for (const r of n)
            if (r.hash === e) return r;
        S(!1, "no matching transaction", "indexOrHash", e)
    }
    isMined() {
        return !!this.hash
    }
    isLondon() {
        return !!this.baseFeePerGas
    }
    orphanedEvent() {
        if (!this.isMined()) throw new Error("");
        return LS(this)
    }
}
vr = new WeakMap;
class lu {
    constructor(e, n) {
        P(this, "provider");
        P(this, "transactionHash");
        P(this, "blockHash");
        P(this, "blockNumber");
        P(this, "removed");
        P(this, "address");
        P(this, "data");
        P(this, "topics");
        P(this, "index");
        P(this, "transactionIndex");
        this.provider = n;
        const r = Object.freeze(e.topics.slice());
        te(this, {
            transactionHash: e.transactionHash,
            blockHash: e.blockHash,
            blockNumber: e.blockNumber,
            removed: e.removed,
            address: e.address,
            data: e.data,
            topics: r,
            index: e.index,
            transactionIndex: e.transactionIndex
        })
    }
    toJSON() {
        const {
            address: e,
            blockHash: n,
            blockNumber: r,
            data: i,
            index: s,
            removed: o,
            topics: l,
            transactionHash: a,
            transactionIndex: c
        } = this;
        return {
            _type: "log",
            address: e,
            blockHash: n,
            blockNumber: r,
            data: i,
            index: s,
            removed: o,
            topics: l,
            transactionHash: a,
            transactionIndex: c
        }
    }
    async getBlock() {
        const e = await this.provider.getBlock(this.blockHash);
        return D(!!e, "failed to find transaction", "UNKNOWN_ERROR", {}), e
    }
    async getTransaction() {
        const e = await this.provider.getTransaction(this.transactionHash);
        return D(!!e, "failed to find transaction", "UNKNOWN_ERROR", {}), e
    }
    async getTransactionReceipt() {
        const e = await this.provider.getTransactionReceipt(this.transactionHash);
        return D(!!e, "failed to find transaction receipt", "UNKNOWN_ERROR", {}), e
    }
    removedEvent() {
        return DS(this)
    }
}
var Va;
class sv {
    constructor(e, n) {
        P(this, "provider");
        P(this, "to");
        P(this, "from");
        P(this, "contractAddress");
        P(this, "hash");
        P(this, "index");
        P(this, "blockHash");
        P(this, "blockNumber");
        P(this, "logsBloom");
        P(this, "gasUsed");
        P(this, "blobGasUsed");
        P(this, "cumulativeGasUsed");
        P(this, "gasPrice");
        P(this, "blobGasPrice");
        P(this, "type");
        P(this, "status");
        P(this, "root");
        R(this, Va);
        b(this, Va, Object.freeze(e.logs.map(i => new lu(i, n))));
        let r = iv;
        e.effectiveGasPrice != null ? r = e.effectiveGasPrice : e.gasPrice != null && (r = e.gasPrice), te(this, {
            provider: n,
            to: e.to,
            from: e.from,
            contractAddress: e.contractAddress,
            hash: e.hash,
            index: e.index,
            blockHash: e.blockHash,
            blockNumber: e.blockNumber,
            logsBloom: e.logsBloom,
            gasUsed: e.gasUsed,
            cumulativeGasUsed: e.cumulativeGasUsed,
            blobGasUsed: e.blobGasUsed,
            gasPrice: r,
            blobGasPrice: e.blobGasPrice,
            type: e.type,
            status: e.status,
            root: e.root
        })
    }
    get logs() {
        return p(this, Va)
    }
    toJSON() {
        const {
            to: e,
            from: n,
            contractAddress: r,
            hash: i,
            index: s,
            blockHash: o,
            blockNumber: l,
            logsBloom: a,
            logs: c,
            status: d,
            root: h
        } = this;
        return {
            _type: "TransactionReceipt",
            blockHash: o,
            blockNumber: l,
            contractAddress: r,
            cumulativeGasUsed: _e(this.cumulativeGasUsed),
            from: n,
            gasPrice: _e(this.gasPrice),
            blobGasUsed: _e(this.blobGasUsed),
            blobGasPrice: _e(this.blobGasPrice),
            gasUsed: _e(this.gasUsed),
            hash: i,
            index: s,
            logs: c,
            logsBloom: a,
            root: h,
            status: d,
            to: e
        }
    }
    get length() {
        return this.logs.length
    } [Symbol.iterator]() {
        let e = 0;
        return {
            next: () => e < this.length ? {
                value: this.logs[e++],
                done: !1
            } : {
                value: void 0,
                done: !0
            }
        }
    }
    get fee() {
        return this.gasUsed * this.gasPrice
    }
    async getBlock() {
        const e = await this.provider.getBlock(this.blockHash);
        if (e == null) throw new Error("TODO");
        return e
    }
    async getTransaction() {
        const e = await this.provider.getTransaction(this.hash);
        if (e == null) throw new Error("TODO");
        return e
    }
    async getResult() {
        return await this.provider.getTransactionResult(this.hash)
    }
    async confirmations() {
        return await this.provider.getBlockNumber() - this.blockNumber + 1
    }
    removedEvent() {
        return lv(this)
    }
    reorderedEvent(e) {
        return D(!e || e.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", {
            operation: "reorderedEvent(other)"
        }), ov(this, e)
    }
}
Va = new WeakMap;
var li;
const Rg = class Rg {
    constructor(e, n) {
        P(this, "provider");
        P(this, "blockNumber");
        P(this, "blockHash");
        P(this, "index");
        P(this, "hash");
        P(this, "type");
        P(this, "to");
        P(this, "from");
        P(this, "nonce");
        P(this, "gasLimit");
        P(this, "gasPrice");
        P(this, "maxPriorityFeePerGas");
        P(this, "maxFeePerGas");
        P(this, "maxFeePerBlobGas");
        P(this, "data");
        P(this, "value");
        P(this, "chainId");
        P(this, "signature");
        P(this, "accessList");
        P(this, "blobVersionedHashes");
        R(this, li);
        this.provider = n, this.blockNumber = e.blockNumber != null ? e.blockNumber : null, this.blockHash = e.blockHash != null ? e.blockHash : null, this.hash = e.hash, this.index = e.index, this.type = e.type, this.from = e.from, this.to = e.to || null, this.gasLimit = e.gasLimit, this.nonce = e.nonce, this.data = e.data, this.value = e.value, this.gasPrice = e.gasPrice, this.maxPriorityFeePerGas = e.maxPriorityFeePerGas != null ? e.maxPriorityFeePerGas : null, this.maxFeePerGas = e.maxFeePerGas != null ? e.maxFeePerGas : null, this.maxFeePerBlobGas = e.maxFeePerBlobGas != null ? e.maxFeePerBlobGas : null, this.chainId = e.chainId, this.signature = e.signature, this.accessList = e.accessList != null ? e.accessList : null, this.blobVersionedHashes = e.blobVersionedHashes != null ? e.blobVersionedHashes : null, b(this, li, -1)
    }
    toJSON() {
        const {
            blockNumber: e,
            blockHash: n,
            index: r,
            hash: i,
            type: s,
            to: o,
            from: l,
            nonce: a,
            data: c,
            signature: d,
            accessList: h,
            blobVersionedHashes: m
        } = this;
        return {
            _type: "TransactionResponse",
            accessList: h,
            blockNumber: e,
            blockHash: n,
            blobVersionedHashes: m,
            chainId: _e(this.chainId),
            data: c,
            from: l,
            gasLimit: _e(this.gasLimit),
            gasPrice: _e(this.gasPrice),
            hash: i,
            maxFeePerGas: _e(this.maxFeePerGas),
            maxPriorityFeePerGas: _e(this.maxPriorityFeePerGas),
            maxFeePerBlobGas: _e(this.maxFeePerBlobGas),
            nonce: a,
            signature: d,
            to: o,
            index: r,
            type: s,
            value: _e(this.value)
        }
    }
    async getBlock() {
        let e = this.blockNumber;
        if (e == null) {
            const r = await this.getTransaction();
            r && (e = r.blockNumber)
        }
        if (e == null) return null;
        const n = this.provider.getBlock(e);
        if (n == null) throw new Error("TODO");
        return n
    }
    async getTransaction() {
        return this.provider.getTransaction(this.hash)
    }
    async confirmations() {
        if (this.blockNumber == null) {
            const {
                tx: n,
                blockNumber: r
            } = await Et({
                tx: this.getTransaction(),
                blockNumber: this.provider.getBlockNumber()
            });
            return n == null || n.blockNumber == null ? 0 : r - n.blockNumber + 1
        }
        return await this.provider.getBlockNumber() - this.blockNumber + 1
    }
    async wait(e, n) {
        const r = e & 1,
            i = n & 0;
        let s = p(this, li),
            o = -1,
            l = s === -1;
        const a = async () => {
            if (l) return null;
            const {
                blockNumber: m,
                nonce: A
            } = await Et({
                blockNumber: this.provider.getBlockNumber(),
                nonce: this.provider.getTransactionCount(this.from)
            });
            if (A < this.nonce) {
                s = m;
                return
            }
            if (l) return null;
            const k = await this.getTransaction();
            if (!(k && k.blockNumber != null))
                for (o === -1 && (o = s - 3, o < p(this, li) && (o = p(this, li))); o <= m;) {
                    if (l) return null;
                    const x = await this.provider.getBlock(o, !0);
                    if (x == null) return;
                    for (const C of x)
                        if (C === this.hash) return;
                    for (let C = 0; C < x.length; C++) {
                        const y = await x.getTransaction(C);
                        if (y.from === this.from && y.nonce === this.nonce) {
                            if (l) return null;
                            const w = await this.provider.getTransactionReceipt(y.hash);
                            if (w == null || m - w.blockNumber + 1 < r) return;
                            let E = "replaced";
                            y.data === this.data && y.to === this.to && y.value === this.value ? E = "repriced" : y.data === "0x" && y.from === y.to && y.value === iv && (E = "cancelled"), D(!1, "transaction was replaced", "TRANSACTION_REPLACED", {
                                cancelled: E === "replaced" || E === "cancelled",
                                reason: E,
                                replacement: y.replaceableTransaction(s),
                                hash: y.hash,
                                receipt: w
                            })
                        }
                    }
                    o++
                }
        },
            c = m => {
                if (m == null || m.status !== 0) return m;
                D(!1, "transaction execution reverted", "CALL_EXCEPTION", {
                    action: "sendTransaction",
                    data: null,
                    reason: null,
                    invocation: null,
                    revert: null,
                    transaction: {
                        to: m.to,
                        from: m.from,
                        data: ""
                    },
                    receipt: m
                })
            },
            d = await this.provider.getTransactionReceipt(this.hash);
        if (r === 0) return c(d);
        if (d) {
            if (await d.confirmations() >= r) return c(d)
        } else if (await a(), r === 0) return null;
        return await new Promise((m, A) => {
            const k = [],
                x = () => {
                    k.forEach(y => y())
                };
            if (k.push(() => {
                l = !0
            }), i > 0) {
                const y = setTimeout(() => {
                    x(), A(Ue("wait for transaction timeout", "TIMEOUT"))
                }, i);
                k.push(() => {
                    clearTimeout(y)
                })
            }
            const C = async y => {
                if (await y.confirmations() >= r) {
                    x();
                    try {
                        m(c(y))
                    } catch (w) {
                        A(w)
                    }
                }
            };
            if (k.push(() => {
                this.provider.off(this.hash, C)
            }), this.provider.on(this.hash, C), s >= 0) {
                const y = async () => {
                    try {
                        await a()
                    } catch (w) {
                        if (it(w, "TRANSACTION_REPLACED")) {
                            x(), A(w);
                            return
                        }
                    }
                    l || this.provider.once("block", y)
                };
                k.push(() => {
                    this.provider.off("block", y)
                }), this.provider.once("block", y)
            }
        })
    }
    isMined() {
        return this.blockHash != null
    }
    isLegacy() {
        return this.type === 0
    }
    isBerlin() {
        return this.type === 1
    }
    isLondon() {
        return this.type === 2
    }
    isCancun() {
        return this.type === 3
    }
    removedEvent() {
        return D(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
            operation: "removeEvent()"
        }), lv(this)
    }
    reorderedEvent(e) {
        return D(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
            operation: "removeEvent()"
        }), D(!e || e.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", {
            operation: "removeEvent()"
        }), ov(this, e)
    }
    replaceableTransaction(e) {
        S(Number.isInteger(e) && e >= 0, "invalid startBlock", "startBlock", e);
        const n = new Rg(this, this.provider);
        return b(n, li, e), n
    }
};
li = new WeakMap;
let _a = Rg;

function LS(t) {
    return {
        orphan: "drop-block",
        hash: t.hash,
        number: t.number
    }
}

function ov(t, e) {
    return {
        orphan: "reorder-transaction",
        tx: t,
        other: e
    }
}

function lv(t) {
    return {
        orphan: "drop-transaction",
        tx: t
    }
}

function DS(t) {
    return {
        orphan: "drop-log",
        log: {
            transactionHash: t.transactionHash,
            blockHash: t.blockHash,
            blockNumber: t.blockNumber,
            address: t.address,
            data: t.data,
            topics: Object.freeze(t.topics.slice()),
            index: t.index
        }
    }
}
class kg extends lu {
    constructor(n, r, i) {
        super(n, n.provider);
        P(this, "interface");
        P(this, "fragment");
        P(this, "args");
        const s = r.decodeEventLog(i, n.data, n.topics);
        te(this, {
            args: s,
            fragment: i,
            interface: r
        })
    }
    get eventName() {
        return this.fragment.name
    }
    get eventSignature() {
        return this.fragment.format()
    }
}
class av extends lu {
    constructor(n, r) {
        super(n, n.provider);
        P(this, "error");
        te(this, {
            error: r
        })
    }
}
var Xo;
class MS extends sv {
    constructor(n, r, i) {
        super(i, r);
        R(this, Xo);
        b(this, Xo, n)
    }
    get logs() {
        return super.logs.map(n => {
            const r = n.topics.length ? p(this, Xo).getEvent(n.topics[0]) : null;
            if (r) try {
                return new kg(n, p(this, Xo), r)
            } catch (i) {
                return new av(n, i)
            }
            return n
        })
    }
}
Xo = new WeakMap;
var Ja;
class Ng extends _a {
    constructor(n, r, i) {
        super(i, r);
        R(this, Ja);
        b(this, Ja, n)
    }
    async wait(n, r) {
        const i = await super.wait(n, r);
        return i == null ? null : new MS(p(this, Ja), this.provider, i)
    }
}
Ja = new WeakMap;
class uv extends L1 {
    constructor(n, r, i, s) {
        super(n, r, i);
        P(this, "log");
        te(this, {
            log: s
        })
    }
    async getBlock() {
        return await this.log.getBlock()
    }
    async getTransaction() {
        return await this.log.getTransaction()
    }
    async getTransactionReceipt() {
        return await this.log.getTransactionReceipt()
    }
}
class _S extends uv {
    constructor(e, n, r, i, s) {
        super(e, n, r, new kg(s, e.interface, i));
        const o = e.interface.decodeEventLog(i, this.log.data, this.log.topics);
        te(this, {
            args: o,
            fragment: i
        })
    }
    get eventName() {
        return this.fragment.name
    }
    get eventSignature() {
        return this.fragment.format()
    }
}
const $m = BigInt(0);

function cv(t) {
    return t && typeof t.call == "function"
}

function fv(t) {
    return t && typeof t.estimateGas == "function"
}

function Tf(t) {
    return t && typeof t.resolveName == "function"
}

function dv(t) {
    return t && typeof t.sendTransaction == "function"
}

function hv(t) {
    if (t != null) {
        if (Tf(t)) return t;
        if (t.provider) return t.provider
    }
}
var Ka;
class zS {
    constructor(e, n, r) {
        R(this, Ka);
        P(this, "fragment");
        if (te(this, {
            fragment: n
        }), n.inputs.length < r.length) throw new Error("too many arguments");
        const i = Ls(e.runner, "resolveName"),
            s = Tf(i) ? i : null;
        b(this, Ka, async function () {
            const o = await Promise.all(n.inputs.map((l, a) => r[a] == null ? null : l.walkAsync(r[a], (d, h) => d === "address" ? Array.isArray(h) ? Promise.all(h.map(m => St(m, s))) : St(h, s) : h)));
            return e.interface.encodeFilterTopics(n, o)
        }())
    }
    getTopicFilter() {
        return p(this, Ka)
    }
}
Ka = new WeakMap;

function Ls(t, e) {
    return t == null ? null : typeof t[e] == "function" ? t : t.provider && typeof t.provider[e] == "function" ? t.provider : null
}

function ts(t) {
    return t == null ? null : t.provider || null
}
async function pv(t, e) {
    const n = yt.dereference(t, "overrides");
    S(typeof n == "object", "invalid overrides parameter", "overrides", t);
    const r = Kc(n);
    return S(r.to == null || (e || []).indexOf("to") >= 0, "cannot override to", "overrides.to", r.to), S(r.data == null || (e || []).indexOf("data") >= 0, "cannot override data", "overrides.data", r.data), r.from && (r.from = r.from), r
}
async function GS(t, e, n) {
    const r = Ls(t, "resolveName"),
        i = Tf(r) ? r : null;
    return await Promise.all(e.map((s, o) => s.walkAsync(n[o], (l, a) => (a = yt.dereference(a, l), l === "address" ? St(a, i) : a))))
}

function HS(t) {
    const e = async function (o) {
        const l = await pv(o, ["data"]);
        l.to = await t.getAddress(), l.from && (l.from = await St(l.from, hv(t.runner)));
        const a = t.interface,
            c = Z(l.value || $m, "overrides.value") === $m,
            d = (l.data || "0x") === "0x";
        a.fallback && !a.fallback.payable && a.receive && !d && !c && S(!1, "cannot send data to receive or send value to non-payable fallback", "overrides", o), S(a.fallback || d, "cannot send data to receive-only contract", "overrides.data", l.data);
        const h = a.receive || a.fallback && a.fallback.payable;
        return S(h || c, "cannot send value to non-payable fallback", "overrides.value", l.value), S(a.fallback || d, "cannot send data to receive-only contract", "overrides.data", l.data), l
    },
        n = async function (o) {
            const l = Ls(t.runner, "call");
            D(cv(l), "contract runner does not support calling", "UNSUPPORTED_OPERATION", {
                operation: "call"
            });
            const a = await e(o);
            try {
                return await l.call(a)
            } catch (c) {
                throw lg(c) && c.data ? t.interface.makeError(c.data, a) : c
            }
        },
        r = async function (o) {
            const l = t.runner;
            D(dv(l), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
                operation: "sendTransaction"
            });
            const a = await l.sendTransaction(await e(o)),
                c = ts(t.runner);
            return new Ng(t.interface, c, a)
        },
        i = async function (o) {
            const l = Ls(t.runner, "estimateGas");
            return D(fv(l), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", {
                operation: "estimateGas"
            }), await l.estimateGas(await e(o))
        },
        s = async o => await r(o);
    return te(s, {
        _contract: t,
        estimateGas: i,
        populateTransaction: e,
        send: r,
        staticCall: n
    }), s
}

function QS(t, e) {
    const n = function (...c) {
        const d = t.interface.getFunction(e, c);
        return D(d, "no matching fragment", "UNSUPPORTED_OPERATION", {
            operation: "fragment",
            info: {
                key: e,
                args: c
            }
        }), d
    },
        r = async function (...c) {
            const d = n(...c);
            let h = {};
            if (d.inputs.length + 1 === c.length && (h = await pv(c.pop()), h.from && (h.from = await St(h.from, hv(t.runner)))), d.inputs.length !== c.length) throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");
            const m = await GS(t.runner, d.inputs, c);
            return Object.assign({}, h, await Et({
                to: t.getAddress(),
                data: t.interface.encodeFunctionData(d, m)
            }))
        },
        i = async function (...c) {
            const d = await l(...c);
            return d.length === 1 ? d[0] : d
        },
        s = async function (...c) {
            const d = t.runner;
            D(dv(d), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", {
                operation: "sendTransaction"
            });
            const h = await d.sendTransaction(await r(...c)),
                m = ts(t.runner);
            return new Ng(t.interface, m, h)
        },
        o = async function (...c) {
            const d = Ls(t.runner, "estimateGas");
            return D(fv(d), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", {
                operation: "estimateGas"
            }), await d.estimateGas(await r(...c))
        },
        l = async function (...c) {
            const d = Ls(t.runner, "call");
            D(cv(d), "contract runner does not support calling", "UNSUPPORTED_OPERATION", {
                operation: "call"
            });
            const h = await r(...c);
            let m = "0x";
            try {
                m = await d.call(h)
            } catch (k) {
                throw lg(k) && k.data ? t.interface.makeError(k.data, h) : k
            }
            const A = n(...c);
            return t.interface.decodeFunctionResult(A, m)
        },
        a = async (...c) => n(...c).constant ? await i(...c) : await s(...c);
    return te(a, {
        name: t.interface.getFunctionName(e),
        _contract: t,
        _key: e,
        getFragment: n,
        estimateGas: o,
        populateTransaction: r,
        send: s,
        staticCall: i,
        staticCallResult: l
    }), Object.defineProperty(a, "fragment", {
        configurable: !1,
        enumerable: !0,
        get: () => {
            const c = t.interface.getFunction(e);
            return D(c, "no matching fragment", "UNSUPPORTED_OPERATION", {
                operation: "fragment",
                info: {
                    key: e
                }
            }), c
        }
    }), a
}

function jS(t, e) {
    const n = function (...i) {
        const s = t.interface.getEvent(e, i);
        return D(s, "no matching fragment", "UNSUPPORTED_OPERATION", {
            operation: "fragment",
            info: {
                key: e,
                args: i
            }
        }), s
    },
        r = function (...i) {
            return new zS(t, n(...i), i)
        };
    return te(r, {
        name: t.interface.getEventName(e),
        _contract: t,
        _key: e,
        getFragment: n
    }), Object.defineProperty(r, "fragment", {
        configurable: !1,
        enumerable: !0,
        get: () => {
            const i = t.interface.getEvent(e);
            return D(i, "no matching fragment", "UNSUPPORTED_OPERATION", {
                operation: "fragment",
                info: {
                    key: e
                }
            }), i
        }
    }), r
}
const Wc = Symbol.for("_ethersInternal_contract"),
    gv = new WeakMap;

function VS(t, e) {
    gv.set(t[Wc], e)
}

function Qt(t) {
    return gv.get(t[Wc])
}

function JS(t) {
    return t && typeof t == "object" && "getTopicFilter" in t && typeof t.getTopicFilter == "function" && t.fragment
}
async function Sg(t, e) {
    let n, r = null;
    if (Array.isArray(e)) {
        const s = function (o) {
            if (Ee(o, 32)) return o;
            const l = t.interface.getEvent(o);
            return S(l, "unknown fragment", "name", o), l.topicHash
        };
        n = e.map(o => o == null ? null : Array.isArray(o) ? o.map(s) : s(o))
    } else e === "*" ? n = [null] : typeof e == "string" ? Ee(e, 32) ? n = [e] : (r = t.interface.getEvent(e), S(r, "unknown fragment", "event", e), n = [r.topicHash]) : JS(e) ? n = await e.getTopicFilter() : "fragment" in e ? (r = e.fragment, n = [r.topicHash]) : S(!1, "unknown event name", "event", e);
    n = n.map(s => {
        if (s == null) return null;
        if (Array.isArray(s)) {
            const o = Array.from(new Set(s.map(l => l.toLowerCase())).values());
            return o.length === 1 ? o[0] : (o.sort(), o)
        }
        return s.toLowerCase()
    });
    const i = n.map(s => s == null ? "null" : Array.isArray(s) ? s.join("|") : s).join("&");
    return {
        fragment: r,
        tag: i,
        topics: n
    }
}
async function ql(t, e) {
    const {
        subs: n
    } = Qt(t);
    return n.get((await Sg(t, e)).tag) || null
}
async function Zm(t, e, n) {
    const r = ts(t.runner);
    D(r, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", {
        operation: e
    });
    const {
        fragment: i,
        tag: s,
        topics: o
    } = await Sg(t, n), {
        addr: l,
        subs: a
    } = Qt(t);
    let c = a.get(s);
    if (!c) {
        const h = {
            address: l || t,
            topics: o
        },
            m = C => {
                let y = i;
                if (y == null) try {
                    y = t.interface.getEvent(C.topics[0])
                } catch { }
                if (y) {
                    const w = y,
                        E = i ? t.interface.decodeEventLog(i, C.data, C.topics) : [];
                    Xh(t, n, E, B => new _S(t, B, n, w, C))
                } else Xh(t, n, [], w => new uv(t, w, n, C))
            };
        let A = [];
        c = {
            tag: s,
            listeners: [],
            start: () => {
                A.length || A.push(r.on(h, m))
            },
            stop: async () => {
                if (A.length == 0) return;
                let C = A;
                A = [], await Promise.all(C), r.off(h, m)
            }
        }, a.set(s, c)
    }
    return c
}
let Zh = Promise.resolve();
async function KS(t, e, n, r) {
    await Zh;
    const i = await ql(t, e);
    if (!i) return !1;
    const s = i.listeners.length;
    return i.listeners = i.listeners.filter(({
        listener: o,
        once: l
    }) => {
        const a = Array.from(n);
        r && a.push(r(l ? null : o));
        try {
            o.call(t, ...a)
        } catch { }
        return !l
    }), i.listeners.length === 0 && (i.stop(), Qt(t).subs.delete(i.tag)), s > 0
}
async function Xh(t, e, n, r) {
    try {
        await Zh
    } catch { }
    const i = KS(t, e, n, r);
    return Zh = i, await i
}
const _u = ["then"];
var ly;
ly = Wc;
const da = class da {
    constructor(e, n, r, i) {
        P(this, "target");
        P(this, "interface");
        P(this, "runner");
        P(this, "filters");
        P(this, ly);
        P(this, "fallback");
        S(typeof e == "string" || xA(e), "invalid value for Contract target", "target", e), r == null && (r = null);
        const s = $h.from(n);
        te(this, {
            target: e,
            runner: r,
            interface: s
        }), Object.defineProperty(this, Wc, {
            value: {}
        });
        let o, l = null,
            a = null;
        if (i) {
            const h = ts(r);
            a = new Ng(this.interface, h, i)
        }
        let c = new Map;
        if (typeof e == "string")
            if (Ee(e)) l = e, o = Promise.resolve(e);
            else {
                const h = Ls(r, "resolveName");
                if (!Tf(h)) throw Ue("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
                    operation: "resolveName"
                });
                o = h.resolveName(e).then(m => {
                    if (m == null) throw Ue("an ENS name used for a contract target must be correctly configured", "UNCONFIGURED_NAME", {
                        value: e
                    });
                    return Qt(this).addr = m, m
                })
            }
        else o = e.getAddress().then(h => {
            if (h == null) throw new Error("TODO");
            return Qt(this).addr = h, h
        });
        VS(this, {
            addrPromise: o,
            addr: l,
            deployTx: a,
            subs: c
        });
        const d = new Proxy({}, {
            get: (h, m, A) => {
                if (typeof m == "symbol" || _u.indexOf(m) >= 0) return Reflect.get(h, m, A);
                try {
                    return this.getEvent(m)
                } catch (k) {
                    if (!it(k, "INVALID_ARGUMENT") || k.argument !== "key") throw k
                }
            },
            has: (h, m) => _u.indexOf(m) >= 0 ? Reflect.has(h, m) : Reflect.has(h, m) || this.interface.hasEvent(String(m))
        });
        return te(this, {
            filters: d
        }), te(this, {
            fallback: s.receive || s.fallback ? HS(this) : null
        }), new Proxy(this, {
            get: (h, m, A) => {
                if (typeof m == "symbol" || m in h || _u.indexOf(m) >= 0) return Reflect.get(h, m, A);
                try {
                    return h.getFunction(m)
                } catch (k) {
                    if (!it(k, "INVALID_ARGUMENT") || k.argument !== "key") throw k
                }
            },
            has: (h, m) => typeof m == "symbol" || m in h || _u.indexOf(m) >= 0 ? Reflect.has(h, m) : h.interface.hasFunction(m)
        })
    }
    connect(e) {
        return new da(this.target, this.interface, e)
    }
    attach(e) {
        return new da(e, this.interface, this.runner)
    }
    async getAddress() {
        return await Qt(this).addrPromise
    }
    async getDeployedCode() {
        const e = ts(this.runner);
        D(e, "runner does not support .provider", "UNSUPPORTED_OPERATION", {
            operation: "getDeployedCode"
        });
        const n = await e.getCode(await this.getAddress());
        return n === "0x" ? null : n
    }
    async waitForDeployment() {
        const e = this.deploymentTransaction();
        if (e) return await e.wait(), this;
        if (await this.getDeployedCode() != null) return this;
        const r = ts(this.runner);
        return D(r != null, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", {
            operation: "waitForDeployment"
        }), new Promise((i, s) => {
            const o = async () => {
                try {
                    if (await this.getDeployedCode() != null) return i(this);
                    r.once("block", o)
                } catch (l) {
                    s(l)
                }
            };
            o()
        })
    }
    deploymentTransaction() {
        return Qt(this).deployTx
    }
    getFunction(e) {
        return typeof e != "string" && (e = e.format()), QS(this, e)
    }
    getEvent(e) {
        return typeof e != "string" && (e = e.format()), jS(this, e)
    }
    async queryTransaction(e) {
        throw new Error("@TODO")
    }
    async queryFilter(e, n, r) {
        n == null && (n = 0), r == null && (r = "latest");
        const {
            addr: i,
            addrPromise: s
        } = Qt(this), o = i || await s, {
            fragment: l,
            topics: a
        } = await Sg(this, e), c = {
            address: o,
            topics: a,
            fromBlock: n,
            toBlock: r
        }, d = ts(this.runner);
        return D(d, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", {
            operation: "queryFilter"
        }), (await d.getLogs(c)).map(h => {
            let m = l;
            if (m == null) try {
                m = this.interface.getEvent(h.topics[0])
            } catch { }
            if (m) try {
                return new kg(h, this.interface, m)
            } catch (A) {
                return new av(h, A)
            }
            return new lu(h, d)
        })
    }
    async on(e, n) {
        const r = await Zm(this, "on", e);
        return r.listeners.push({
            listener: n,
            once: !1
        }), r.start(), this
    }
    async once(e, n) {
        const r = await Zm(this, "once", e);
        return r.listeners.push({
            listener: n,
            once: !0
        }), r.start(), this
    }
    async emit(e, ...n) {
        return await Xh(this, e, n, null)
    }
    async listenerCount(e) {
        if (e) {
            const i = await ql(this, e);
            return i ? i.listeners.length : 0
        }
        const {
            subs: n
        } = Qt(this);
        let r = 0;
        for (const {
            listeners: i
        } of n.values()) r += i.length;
        return r
    }
    async listeners(e) {
        if (e) {
            const i = await ql(this, e);
            return i ? i.listeners.map(({
                listener: s
            }) => s) : []
        }
        const {
            subs: n
        } = Qt(this);
        let r = [];
        for (const {
            listeners: i
        } of n.values()) r = r.concat(i.map(({
            listener: s
        }) => s));
        return r
    }
    async off(e, n) {
        const r = await ql(this, e);
        if (!r) return this;
        if (n) {
            const i = r.listeners.map(({
                listener: s
            }) => s).indexOf(n);
            i >= 0 && r.listeners.splice(i, 1)
        }
        return (n == null || r.listeners.length === 0) && (r.stop(), Qt(this).subs.delete(r.tag)), this
    }
    async removeAllListeners(e) {
        if (e) {
            const n = await ql(this, e);
            if (!n) return this;
            n.stop(), Qt(this).subs.delete(n.tag)
        } else {
            const {
                subs: n
            } = Qt(this);
            for (const {
                tag: r,
                stop: i
            } of n.values()) i(), n.delete(r)
        }
        return this
    }
    async addListener(e, n) {
        return await this.on(e, n)
    }
    async removeListener(e, n) {
        return await this.off(e, n)
    }
    static buildClass(e) {
        class n extends da {
            constructor(i, s = null) {
                super(i, e, s)
            }
        }
        return n
    }
    static from(e, n, r) {
        return r == null && (r = null), new this(e, n, r)
    }
};
let qh = da;

function WS() {
    return qh
}
class So extends WS() { }

function Cd(t) {
    return t.match(/^ipfs:\/\/ipfs\//i) ? t = t.substring(12) : t.match(/^ipfs:\/\//i) ? t = t.substring(7) : S(!1, "unsupported IPFS format", "link", t), `https://gateway.ipfs.io/ipfs/${t}`
}
class YS {
    constructor(e) {
        P(this, "name");
        te(this, {
            name: e
        })
    }
    connect(e) {
        return this
    }
    supportsCoinType(e) {
        return !1
    }
    async encodeAddress(e, n) {
        throw new Error("unsupported coin")
    }
    async decodeAddress(e, n) {
        throw new Error("unsupported coin")
    }
}
const mv = new RegExp("^(ipfs)://(.*)$", "i"),
    Xm = [new RegExp("^(https)://(.*)$", "i"), new RegExp("^(data):(.*)$", "i"), mv, new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")];
var ai, ps, ui, Ys, ef, yv;
const ho = class ho {
    constructor(e, n, r) {
        R(this, ui);
        P(this, "provider");
        P(this, "address");
        P(this, "name");
        R(this, ai);
        R(this, ps);
        te(this, {
            provider: e,
            address: n,
            name: r
        }), b(this, ai, null), b(this, ps, new So(n, ["function supportsInterface(bytes4) view returns (bool)", "function resolve(bytes, bytes) view returns (bytes)", "function addr(bytes32) view returns (address)", "function addr(bytes32, uint) view returns (bytes)", "function text(bytes32, string) view returns (string)", "function contenthash(bytes32) view returns (bytes)"], e))
    }
    async supportsWildcard() {
        return p(this, ai) == null && b(this, ai, (async () => {
            try {
                return await p(this, ps).supportsInterface("0x9061b923")
            } catch (e) {
                if (it(e, "CALL_EXCEPTION")) return !1;
                throw b(this, ai, null), e
            }
        })()), await p(this, ai)
    }
    async getAddress(e) {
        if (e == null && (e = 60), e === 60) try {
            const s = await M(this, ui, Ys).call(this, "addr(bytes32)");
            return s == null || s === Ra ? null : s
        } catch (s) {
            if (it(s, "CALL_EXCEPTION")) return null;
            throw s
        }
        if (e >= 0 && e < 2147483648) {
            let s = e + 2147483648;
            const o = await M(this, ui, Ys).call(this, "addr(bytes32,uint)", [s]);
            if (Ee(o, 20)) return ye(o)
        }
        let n = null;
        for (const s of this.provider.plugins)
            if (s instanceof YS && s.supportsCoinType(e)) {
                n = s;
                break
            }
        if (n == null) return null;
        const r = await M(this, ui, Ys).call(this, "addr(bytes32,uint)", [e]);
        if (r == null || r === "0x") return null;
        const i = await n.decodeAddress(e, r);
        if (i != null) return i;
        D(!1, "invalid coin data", "UNSUPPORTED_OPERATION", {
            operation: `getAddress(${e})`,
            info: {
                coinType: e,
                data: r
            }
        })
    }
    async getText(e) {
        const n = await M(this, ui, Ys).call(this, "text(bytes32,string)", [e]);
        return n == null || n === "0x" ? null : n
    }
    async getContentHash() {
        const e = await M(this, ui, Ys).call(this, "contenthash(bytes32)");
        if (e == null || e === "0x") return null;
        const n = e.match(/^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
        if (n) {
            const i = n[1] === "e3010170" ? "ipfs" : "ipns",
                s = parseInt(n[4], 16);
            if (n[5].length === s * 2) return `${i}://${sb("0x" + n[2])}`
        }
        const r = e.match(/^0xe40101fa011b20([0-9a-f]*)$/);
        if (r && r[1].length === 64) return `bzz://${r[1]}`;
        D(!1, "invalid or unsupported content hash data", "UNSUPPORTED_OPERATION", {
            operation: "getContentHash()",
            info: {
                data: e
            }
        })
    }
    async getAvatar() {
        return (await this._getAvatar()).url
    }
    async _getAvatar() {
        const e = [{
            type: "name",
            value: this.name
        }];
        try {
            const n = await this.getText("avatar");
            if (n == null) return e.push({
                type: "!avatar",
                value: ""
            }), {
                url: null,
                linkage: e
            };
            e.push({
                type: "avatar",
                value: n
            });
            for (let r = 0; r < Xm.length; r++) {
                const i = n.match(Xm[r]);
                if (i == null) continue;
                const s = i[1].toLowerCase();
                switch (s) {
                    case "https":
                    case "data":
                        return e.push({
                            type: "url",
                            value: n
                        }), {
                            linkage: e,
                            url: n
                        };
                    case "ipfs":
                        {
                            const o = Cd(n);
                            return e.push({
                                type: "ipfs",
                                value: n
                            }),
                                e.push({
                                    type: "url",
                                    value: o
                                }),
                            {
                                linkage: e,
                                url: o
                            }
                        }
                    case "erc721":
                    case "erc1155":
                        {
                            const o = s === "erc721" ? "tokenURI(uint256)" : "uri(uint256)"; e.push({
                                type: s,
                                value: n
                            });
                            const l = await this.getAddress();
                            if (l == null) return e.push({
                                type: "!owner",
                                value: ""
                            }), {
                                url: null,
                                linkage: e
                            };
                            const a = (i[2] || "").split("/");
                            if (a.length !== 2) return e.push({
                                type: `!${s}caip`,
                                value: i[2] || ""
                            }), {
                                url: null,
                                linkage: e
                            };
                            const c = a[1],
                                d = new So(a[0], ["function tokenURI(uint) view returns (string)", "function ownerOf(uint) view returns (address)", "function uri(uint) view returns (string)", "function balanceOf(address, uint256) view returns (uint)"], this.provider);
                            if (s === "erc721") {
                                const x = await d.ownerOf(c);
                                if (l !== x) return e.push({
                                    type: "!owner",
                                    value: x
                                }), {
                                    url: null,
                                    linkage: e
                                };
                                e.push({
                                    type: "owner",
                                    value: x
                                })
                            } else if (s === "erc1155") {
                                const x = await d.balanceOf(l, c);
                                if (!x) return e.push({
                                    type: "!balance",
                                    value: "0"
                                }), {
                                    url: null,
                                    linkage: e
                                };
                                e.push({
                                    type: "balance",
                                    value: x.toString()
                                })
                            }
                            let h = await d[o](c);
                            if (h == null || h === "0x") return e.push({
                                type: "!metadata-url",
                                value: ""
                            }), {
                                url: null,
                                linkage: e
                            }; e.push({
                                type: "metadata-url-base",
                                value: h
                            }),
                                s === "erc1155" && (h = h.replace("{id}", Ri(c, 32).substring(2)), e.push({
                                    type: "metadata-url-expanded",
                                    value: h
                                })),
                                h.match(/^ipfs:/i) && (h = Cd(h)),
                                e.push({
                                    type: "metadata-url",
                                    value: h
                                });
                            let m = {};
                            const A = await new Dr(h).send(); A.assertOk();
                            try {
                                m = A.bodyJson
                            } catch {
                                try {
                                    e.push({
                                        type: "!metadata",
                                        value: A.bodyText
                                    })
                                } catch {
                                    const y = A.body;
                                    return y && e.push({
                                        type: "!metadata",
                                        value: W(y)
                                    }), {
                                        url: null,
                                        linkage: e
                                    }
                                }
                                return {
                                    url: null,
                                    linkage: e
                                }
                            }
                            if (!m) return e.push({
                                type: "!metadata",
                                value: ""
                            }), {
                                url: null,
                                linkage: e
                            }; e.push({
                                type: "metadata",
                                value: JSON.stringify(m)
                            });
                            let k = m.image;
                            if (typeof k != "string") return e.push({
                                type: "!imageUrl",
                                value: ""
                            }), {
                                url: null,
                                linkage: e
                            };
                            if (!k.match(/^(https:\/\/|data:)/i)) {
                                if (k.match(mv) == null) return e.push({
                                    type: "!imageUrl-ipfs",
                                    value: k
                                }), {
                                    url: null,
                                    linkage: e
                                };
                                e.push({
                                    type: "imageUrl-ipfs",
                                    value: k
                                }), k = Cd(k)
                            }
                            return e.push({
                                type: "url",
                                value: k
                            }),
                            {
                                linkage: e,
                                url: k
                            }
                        }
                }
            }
        } catch { }
        return {
            linkage: e,
            url: null
        }
    }
    static async getEnsAddress(e) {
        const n = await e.getNetwork(),
            r = n.getPlugin("org.ethers.plugins.network.Ens");
        return D(r, "network does not support ENS", "UNSUPPORTED_OPERATION", {
            operation: "getEnsAddress",
            info: {
                network: n
            }
        }), r.address
    }
    static async fromName(e, n) {
        var i;
        let r = n;
        for (; ;) {
            if (r === "" || r === "." || n !== "eth" && r === "eth") return null;
            const s = await M(i = ho, ef, yv).call(i, e, r);
            if (s != null) {
                const o = new ho(e, s, n);
                return r !== n && !await o.supportsWildcard() ? null : o
            }
            r = r.split(".").slice(1).join(".")
        }
    }
};
ai = new WeakMap, ps = new WeakMap, ui = new WeakSet, Ys = async function (e, n) {
    n = (n || []).slice();
    const r = p(this, ps).interface;
    n.unshift(Wh(this.name));
    let i = null;
    await this.supportsWildcard() && (i = r.getFunction(e), D(i, "missing fragment", "UNKNOWN_ERROR", {
        info: {
            funcName: e
        }
    }), n = [WN(this.name, 255), r.encodeFunctionData(i, n)], e = "resolve(bytes,bytes)"), n.push({
        enableCcipRead: !0
    });
    try {
        const s = await p(this, ps)[e](...n);
        return i ? r.decodeFunctionResult(i, s)[0] : s
    } catch (s) {
        if (!it(s, "CALL_EXCEPTION")) throw s
    }
    return null
}, ef = new WeakSet, yv = async function (e, n) {
    const r = await ho.getEnsAddress(e);
    try {
        const s = await new So(r, ["function resolver(bytes32) view returns (address)"], e).resolver(Wh(n), {
            enableCcipRead: !0
        });
        return s === Ra ? null : s
    } catch (i) {
        throw i
    }
    return null
}, R(ho, ef);
let Yc = ho;
const qm = BigInt(0);

function fe(t, e) {
    return function (n) {
        return n == null ? e : t(n)
    }
}

function Of(t, e) {
    return n => {
        if (e && n == null) return null;
        if (!Array.isArray(n)) throw new Error("not an array");
        return n.map(r => t(r))
    }
}

function au(t, e) {
    return n => {
        const r = {};
        for (const i in t) {
            let s = i;
            if (e && i in e && !(s in n)) {
                for (const o of e[i])
                    if (o in n) {
                        s = o;
                        break
                    }
            }
            try {
                const o = t[i](n[s]);
                o !== void 0 && (r[i] = o)
            } catch (o) {
                const l = o instanceof Error ? o.message : "not-an-error";
                D(!1, `invalid value for value.${i} (${l})`, "BAD_DATA", {
                    value: n
                })
            }
        }
        return r
    }
}

function $S(t) {
    switch (t) {
        case !0:
        case "true":
            return !0;
        case !1:
        case "false":
            return !1
    }
    S(!1, `invalid boolean; ${JSON.stringify(t)}`, "value", t)
}

function Sl(t) {
    return S(Ee(t, !0), "invalid data", "value", t), t
}

function rt(t) {
    return S(Ee(t, 32), "invalid hash", "value", t), t
}
const ZS = au({
    address: ye,
    blockHash: rt,
    blockNumber: oe,
    data: Sl,
    index: oe,
    removed: fe($S, !1),
    topics: Of(rt),
    transactionHash: rt,
    transactionIndex: oe
}, {
    index: ["logIndex"]
});

function XS(t) {
    return ZS(t)
}
const qS = au({
    hash: fe(rt),
    parentHash: rt,
    parentBeaconBlockRoot: fe(rt, null),
    number: oe,
    timestamp: oe,
    nonce: fe(Sl),
    difficulty: Z,
    gasLimit: Z,
    gasUsed: Z,
    stateRoot: fe(rt, null),
    receiptsRoot: fe(rt, null),
    blobGasUsed: fe(Z, null),
    excessBlobGas: fe(Z, null),
    miner: fe(ye),
    prevRandao: fe(rt, null),
    extraData: Sl,
    baseFeePerGas: fe(Z)
}, {
    prevRandao: ["mixHash"]
});

function eC(t) {
    const e = qS(t);
    return e.transactions = t.transactions.map(n => typeof n == "string" ? n : wv(n)), e
}
const tC = au({
    transactionIndex: oe,
    blockNumber: oe,
    transactionHash: rt,
    address: ye,
    topics: Of(rt),
    data: Sl,
    index: oe,
    blockHash: rt
}, {
    index: ["logIndex"]
});

function nC(t) {
    return tC(t)
}
const rC = au({
    to: fe(ye, null),
    from: fe(ye, null),
    contractAddress: fe(ye, null),
    index: oe,
    root: fe(W),
    gasUsed: Z,
    blobGasUsed: fe(Z, null),
    logsBloom: fe(Sl),
    blockHash: rt,
    hash: rt,
    logs: Of(nC),
    blockNumber: oe,
    cumulativeGasUsed: Z,
    effectiveGasPrice: fe(Z),
    blobGasPrice: fe(Z, null),
    status: fe(oe),
    type: fe(oe, 0)
}, {
    effectiveGasPrice: ["gasPrice"],
    hash: ["transactionHash"],
    index: ["transactionIndex"]
});

function iC(t) {
    return rC(t)
}

function wv(t) {
    t.to && Z(t.to) === qm && (t.to = "0x0000000000000000000000000000000000000000");
    const e = au({
        hash: rt,
        index: fe(oe, void 0),
        type: n => n === "0x" || n == null ? 0 : oe(n),
        accessList: fe(zs, null),
        blobVersionedHashes: fe(Of(rt, !0), null),
        blockHash: fe(rt, null),
        blockNumber: fe(oe, null),
        transactionIndex: fe(oe, null),
        from: ye,
        gasPrice: fe(Z),
        maxPriorityFeePerGas: fe(Z),
        maxFeePerGas: fe(Z),
        maxFeePerBlobGas: fe(Z, null),
        gasLimit: Z,
        to: fe(ye, null),
        value: Z,
        nonce: oe,
        data: Sl,
        creates: fe(ye, null),
        chainId: fe(Z, null)
    }, {
        data: ["input"],
        gasLimit: ["gas"],
        index: ["transactionIndex"]
    })(t);
    if (e.to == null && e.creates == null && (e.creates = Zk(e)), (t.type === 1 || t.type === 2) && t.accessList == null && (e.accessList = []), t.signature ? e.signature = Fn.from(t.signature) : e.signature = Fn.from(t), e.chainId == null) {
        const n = e.signature.legacyChainId;
        n != null && (e.chainId = n)
    }
    return e.blockHash && Z(e.blockHash) === qm && (e.blockHash = null), e
}
const sC = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
class uu {
    constructor(e) {
        P(this, "name");
        te(this, {
            name: e
        })
    }
    clone() {
        return new uu(this.name)
    }
}
class Ff extends uu {
    constructor(n, r) {
        n == null && (n = 0);
        super(`org.ethers.network.plugins.GasCost#${n || 0}`);
        P(this, "effectiveBlock");
        P(this, "txBase");
        P(this, "txCreate");
        P(this, "txDataZero");
        P(this, "txDataNonzero");
        P(this, "txAccessListStorageKey");
        P(this, "txAccessListAddress");
        const i = {
            effectiveBlock: n
        };

        function s(o, l) {
            let a = (r || {})[o];
            a == null && (a = l), S(typeof a == "number", `invalud value for ${o}`, "costs", r), i[o] = a
        }
        s("txBase", 21e3), s("txCreate", 32e3), s("txDataZero", 4), s("txDataNonzero", 16), s("txAccessListStorageKey", 1900), s("txAccessListAddress", 2400), te(this, i)
    }
    clone() {
        return new Ff(this.effectiveBlock, this)
    }
}
class Uf extends uu {
    constructor(n, r) {
        super("org.ethers.plugins.network.Ens");
        P(this, "address");
        P(this, "targetNetwork");
        te(this, {
            address: n || sC,
            targetNetwork: r & 1
        })
    }
    clone() {
        return new Uf(this.address, this.targetNetwork)
    }
}
var Wa, Ya;
class oC extends uu {
    constructor(n, r) {
        super("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
        R(this, Wa);
        R(this, Ya);
        b(this, Wa, n), b(this, Ya, r)
    }
    get url() {
        return p(this, Wa)
    }
    get processFunc() {
        return p(this, Ya)
    }
    clone() {
        return this
    }
}
Wa = new WeakMap, Ya = new WeakMap;
const Pd = new Map;
var qo, el, ci;
const po = class po {
    constructor(e, n) {
        R(this, qo);
        R(this, el);
        R(this, ci);
        b(this, qo, e), b(this, el, Z(n)), b(this, ci, new Map)
    }
    toJSON() {
        return {
            name: this.name,
            chainId: String(this.chainId)
        }
    }
    get name() {
        return p(this, qo)
    }
    set name(e) {
        b(this, qo, e)
    }
    get chainId() {
        return p(this, el)
    }
    set chainId(e) {
        b(this, el, Z(e, "chainId"))
    }
    matches(e) {
        if (e == null) return !1;
        if (typeof e == "string") {
            try {
                return this.chainId === Z(e)
            } catch { }
            return this.name === e
        }
        if (typeof e == "number" || typeof e == "bigint") {
            try {
                return this.chainId === Z(e)
            } catch { }
            return !1
        }
        if (typeof e == "object") {
            if (e.chainId != null) {
                try {
                    return this.chainId === Z(e.chainId)
                } catch { }
                return !1
            }
            return e.name != null ? this.name === e.name : !1
        }
        return !1
    }
    get plugins() {
        return Array.from(p(this, ci).values())
    }
    attachPlugin(e) {
        if (p(this, ci).get(e.name)) throw new Error(`cannot replace existing plugin: ${e.name} `);
        return p(this, ci).set(e.name, e.clone()), this
    }
    getPlugin(e) {
        return p(this, ci).get(e) || null
    }
    getPlugins(e) {
        return this.plugins.filter(n => n.name.split("#")[0] === e)
    }
    clone() {
        const e = new po(this.name, this.chainId);
        return this.plugins.forEach(n => {
            e.attachPlugin(n.clone())
        }), e
    }
    computeIntrinsicGas(e) {
        const n = this.getPlugin("org.ethers.plugins.network.GasCost") || new Ff;
        let r = n.txBase;
        if (e.to == null && (r += n.txCreate), e.data)
            for (let i = 2; i < e.data.length; i += 2) e.data.substring(i, i + 2) === "00" ? r += n.txDataZero : r += n.txDataNonzero;
        if (e.accessList) {
            const i = zs(e.accessList);
            for (const s in i) r += n.txAccessListAddress + n.txAccessListStorageKey * i[s].storageKeys.length
        }
        return r
    }
    static from(e) {
        if (lC(), e == null) return po.from("mainnet");
        if (typeof e == "number" && (e = BigInt(e)), typeof e == "string" || typeof e == "bigint") {
            const n = Pd.get(e);
            if (n) return n();
            if (typeof e == "bigint") return new po("unknown", e);
            S(!1, "unknown network", "network", e)
        }
        if (typeof e.clone == "function") return e.clone();
        if (typeof e == "object") {
            S(typeof e.name == "string" && typeof e.chainId == "number", "invalid network object name or chainId", "network", e);
            const n = new po(e.name, e.chainId);
            return (e.ensAddress || e.ensNetwork != null) && n.attachPlugin(new Uf(e.ensAddress, e.ensNetwork)), n
        }
        S(!1, "invalid network", "network", e)
    }
    static register(e, n) {
        typeof e == "number" && (e = BigInt(e));
        const r = Pd.get(e);
        r && S(!1, `conflicting network for ${JSON.stringify(r.name)}`, "nameOrChainId", e), Pd.set(e, n)
    }
};
qo = new WeakMap, el = new WeakMap, ci = new WeakMap;
let er = po;

function ey(t, e) {
    const n = String(t);
    if (!n.match(/^[0-9.]+$/)) throw new Error(`invalid gwei value: ${t}`);
    const r = n.split(".");
    if (r.length === 1 && r.push(""), r.length !== 2) throw new Error(`invalid gwei value: ${t}`);
    for (; r[1].length < e;) r[1] += "0";
    if (r[1].length > 9) {
        let i = BigInt(r[1].substring(0, 9));
        r[1].substring(9).match(/^0+$/) || i++, r[1] = i.toString()
    }
    return BigInt(r[0] + r[1])
}

function ty(t) {
    return new oC(t, async (e, n, r) => {
        r.setHeader("User-Agent", "ethers");
        let i;
        try {
            const [s, o] = await Promise.all([r.send(), e()]);
            i = s;
            const l = i.bodyJson.standard;
            return {
                gasPrice: o.gasPrice,
                maxFeePerGas: ey(l.maxFee, 9),
                maxPriorityFeePerGas: ey(l.maxPriorityFee, 9)
            }
        } catch (s) {
            D(!1, `error encountered with polygon gas station (${JSON.stringify(r.url)})`, "SERVER_ERROR", {
                request: r,
                response: i,
                error: s
            })
        }
    })
}
let ny = !1;

function lC() {
    if (ny) return;
    ny = !0;

    function t(e, n, r) {
        const i = function () {
            const s = new er(e, n);
            return r.ensNetwork != null && s.attachPlugin(new Uf(null, r.ensNetwork)), s.attachPlugin(new Ff), (r.plugins || []).forEach(o => {
                s.attachPlugin(o)
            }), s
        };
        er.register(e, i), er.register(n, i), r.altNames && r.altNames.forEach(s => {
            er.register(s, i)
        })
    }
    t("mainnet", 1, {
        ensNetwork: 1,
        altNames: ["homestead"]
    }), t("ropsten", 3, {
        ensNetwork: 3
    }), t("rinkeby", 4, {
        ensNetwork: 4
    }), t("goerli", 5, {
        ensNetwork: 5
    }), t("kovan", 42, {
        ensNetwork: 42
    }), t("sepolia", 11155111, {
        ensNetwork: 11155111
    }), t("holesky", 17e3, {
        ensNetwork: 17e3
    }), t("classic", 61, {}), t("classicKotti", 6, {}), t("arbitrum", 42161, {
        ensNetwork: 1
    }), t("arbitrum-goerli", 421613, {}), t("arbitrum-sepolia", 421614, {}), t("base", 8453, {
        ensNetwork: 1
    }), t("base-goerli", 84531, {}), t("base-sepolia", 84532, {}), t("bnb", 56, {
        ensNetwork: 1
    }), t("bnbt", 97, {}), t("linea", 59144, {
        ensNetwork: 1
    }), t("linea-goerli", 59140, {}), t("linea-sepolia", 59141, {}), t("matic", 137, {
        ensNetwork: 1,
        plugins: [ty("https://gasstation.polygon.technology/v2")]
    }), t("matic-amoy", 80002, {}), t("matic-mumbai", 80001, {
        altNames: ["maticMumbai", "maticmum"],
        plugins: [ty("https://gasstation-testnet.polygon.technology/v2")]
    }), t("optimism", 10, {
        ensNetwork: 1,
        plugins: []
    }), t("optimism-goerli", 420, {}), t("optimism-sepolia", 11155420, {}), t("xdai", 100, {
        ensNetwork: 1
    })
}

function ep(t) {
    return JSON.parse(JSON.stringify(t))
}
var xr, on, fi, Kn, tl, uc;
class aC {
    constructor(e) {
        R(this, tl);
        R(this, xr);
        R(this, on);
        R(this, fi);
        R(this, Kn);
        b(this, xr, e), b(this, on, null), b(this, fi, 4e3), b(this, Kn, -2)
    }
    get pollingInterval() {
        return p(this, fi)
    }
    set pollingInterval(e) {
        b(this, fi, e)
    }
    start() {
        p(this, on) || (b(this, on, p(this, xr)._setTimeout(M(this, tl, uc).bind(this), p(this, fi))), M(this, tl, uc).call(this))
    }
    stop() {
        p(this, on) && (p(this, xr)._clearTimeout(p(this, on)), b(this, on, null))
    }
    pause(e) {
        this.stop(), e && b(this, Kn, -2)
    }
    resume() {
        this.start()
    }
}
xr = new WeakMap, on = new WeakMap, fi = new WeakMap, Kn = new WeakMap, tl = new WeakSet, uc = async function () {
    try {
        const e = await p(this, xr).getBlockNumber();
        if (p(this, Kn) === -2) {
            b(this, Kn, e);
            return
        }
        if (e !== p(this, Kn)) {
            for (let n = p(this, Kn) + 1; n <= e; n++) {
                if (p(this, on) == null) return;
                await p(this, xr).emit("block", n)
            }
            b(this, Kn, e)
        }
    } catch { }
    p(this, on) != null && b(this, on, p(this, xr)._setTimeout(M(this, tl, uc).bind(this), p(this, fi)))
};
var gs, ms, di;
class Cg {
    constructor(e) {
        R(this, gs);
        R(this, ms);
        R(this, di);
        b(this, gs, e), b(this, di, !1), b(this, ms, n => {
            this._poll(n, p(this, gs))
        })
    }
    async _poll(e, n) {
        throw new Error("sub-classes must override this")
    }
    start() {
        p(this, di) || (b(this, di, !0), p(this, ms).call(this, -2), p(this, gs).on("block", p(this, ms)))
    }
    stop() {
        p(this, di) && (b(this, di, !1), p(this, gs).off("block", p(this, ms)))
    }
    pause(e) {
        this.stop()
    }
    resume() {
        this.start()
    }
}
gs = new WeakMap, ms = new WeakMap, di = new WeakMap;
var nl, Er;
class uC extends Cg {
    constructor(n, r) {
        super(n);
        R(this, nl);
        R(this, Er);
        b(this, nl, r), b(this, Er, -2)
    }
    pause(n) {
        n && b(this, Er, -2), super.pause(n)
    }
    async _poll(n, r) {
        const i = await r.getBlock(p(this, nl));
        i != null && (p(this, Er) === -2 ? b(this, Er, i.number) : i.number > p(this, Er) && (r.emit(p(this, nl), i.number), b(this, Er, i.number)))
    }
}
nl = new WeakMap, Er = new WeakMap;
var tf;
class cC extends Cg {
    constructor(n, r) {
        super(n);
        R(this, tf);
        b(this, tf, ep(r))
    }
    async _poll(n, r) {
        throw new Error("@TODO")
    }
}
tf = new WeakMap;
var rl;
class fC extends Cg {
    constructor(n, r) {
        super(n);
        R(this, rl);
        b(this, rl, r)
    }
    async _poll(n, r) {
        const i = await r.getTransactionReceipt(p(this, rl));
        i && r.emit(p(this, rl), i)
    }
}
rl = new WeakMap;
var br, il, sl, hi, ln, nf, Av;
class Pg {
    constructor(e, n) {
        R(this, nf);
        R(this, br);
        R(this, il);
        R(this, sl);
        R(this, hi);
        R(this, ln);
        b(this, br, e), b(this, il, ep(n)), b(this, sl, M(this, nf, Av).bind(this)), b(this, hi, !1), b(this, ln, -2)
    }
    start() {
        p(this, hi) || (b(this, hi, !0), p(this, ln) === -2 && p(this, br).getBlockNumber().then(e => {
            b(this, ln, e)
        }), p(this, br).on("block", p(this, sl)))
    }
    stop() {
        p(this, hi) && (b(this, hi, !1), p(this, br).off("block", p(this, sl)))
    }
    pause(e) {
        this.stop(), e && b(this, ln, -2)
    }
    resume() {
        this.start()
    }
}
br = new WeakMap, il = new WeakMap, sl = new WeakMap, hi = new WeakMap, ln = new WeakMap, nf = new WeakSet, Av = async function (e) {
    if (p(this, ln) === -2) return;
    const n = ep(p(this, il));
    n.fromBlock = p(this, ln) + 1, n.toBlock = e;
    const r = await p(this, br).getLogs(n);
    if (r.length === 0) {
        p(this, ln) < e - 60 && b(this, ln, e - 60);
        return
    }
    for (const i of r) p(this, br).emit(p(this, il), i), b(this, ln, i.blockNumber)
};
const dC = BigInt(2),
    hC = 10;

function zu(t) {
    return t && typeof t.then == "function"
}

function cc(t, e) {
    return t + ":" + JSON.stringify(e, (n, r) => {
        if (r == null) return "null";
        if (typeof r == "bigint") return `bigint:${r.toString()}`;
        if (typeof r == "string") return r.toLowerCase();
        if (typeof r == "object" && !Array.isArray(r)) {
            const i = Object.keys(r);
            return i.sort(), i.reduce((s, o) => (s[o] = r[o], s), {})
        }
        return r
    })
}
class vv {
    constructor(e) {
        P(this, "name");
        te(this, {
            name: e
        })
    }
    start() { }
    stop() { }
    pause(e) { }
    resume() { }
}

function pC(t) {
    return JSON.parse(JSON.stringify(t))
}

function tp(t) {
    return t = Array.from(new Set(t).values()), t.sort(), t
}
async function Bd(t, e) {
    if (t == null) throw new Error("invalid event");
    if (Array.isArray(t) && (t = {
        topics: t
    }), typeof t == "string") switch (t) {
        case "block":
        case "debug":
        case "error":
        case "finalized":
        case "network":
        case "pending":
        case "safe":
            return {
                type: t,
                tag: t
            }
    }
    if (Ee(t, 32)) {
        const n = t.toLowerCase();
        return {
            type: "transaction",
            tag: cc("tx", {
                hash: n
            }),
            hash: n
        }
    }
    if (t.orphan) {
        const n = t;
        return {
            type: "orphan",
            tag: cc("orphan", n),
            filter: pC(n)
        }
    }
    if (t.address || t.topics) {
        const n = t,
            r = {
                topics: (n.topics || []).map(i => i == null ? null : Array.isArray(i) ? tp(i.map(s => s.toLowerCase())) : i.toLowerCase())
            };
        if (n.address) {
            const i = [],
                s = [],
                o = l => {
                    Ee(l) ? i.push(l) : s.push((async () => {
                        i.push(await St(l, e))
                    })())
                };
            Array.isArray(n.address) ? n.address.forEach(o) : o(n.address), s.length && await Promise.all(s), r.address = tp(i.map(l => l.toLowerCase()))
        }
        return {
            filter: r,
            tag: cc("event", r),
            type: "event"
        }
    }
    S(!1, "unknown ProviderEvent", "event", t)
}

function Id() {
    return new Date().getTime()
}
const gC = {
    cacheTimeout: 250,
    pollingInterval: 4e3
};
var pt, pi, gt, ol, Kt, ys, gi, kr, $a, an, ll, al, le, Ht, np, rp, ea, ip, ta, fc;
class mC {
    constructor(e, n) {
        R(this, le);
        R(this, pt);
        R(this, pi);
        R(this, gt);
        R(this, ol);
        R(this, Kt);
        R(this, ys);
        R(this, gi);
        R(this, kr);
        R(this, $a);
        R(this, an);
        R(this, ll);
        R(this, al);
        if (b(this, al, Object.assign({}, gC, n || {})), e === "any") b(this, ys, !0), b(this, Kt, null);
        else if (e) {
            const r = er.from(e);
            b(this, ys, !1), b(this, Kt, Promise.resolve(r)), setTimeout(() => {
                this.emit("network", r, null)
            }, 0)
        } else b(this, ys, !1), b(this, Kt, null);
        b(this, kr, -1), b(this, gi, new Map), b(this, pt, new Map), b(this, pi, new Map), b(this, gt, null), b(this, ol, !1), b(this, $a, 1), b(this, an, new Map), b(this, ll, !1)
    }
    get pollingInterval() {
        return p(this, al).pollingInterval
    }
    get provider() {
        return this
    }
    get plugins() {
        return Array.from(p(this, pi).values())
    }
    attachPlugin(e) {
        if (p(this, pi).get(e.name)) throw new Error(`cannot replace existing plugin: ${e.name} `);
        return p(this, pi).set(e.name, e.connect(this)), this
    }
    getPlugin(e) {
        return p(this, pi).get(e) || null
    }
    get disableCcipRead() {
        return p(this, ll)
    }
    set disableCcipRead(e) {
        b(this, ll, !!e)
    }
    async ccipReadFetch(e, n, r) {
        if (this.disableCcipRead || r.length === 0 || e.to == null) return null;
        const i = e.to.toLowerCase(),
            s = n.toLowerCase(),
            o = [];
        for (let l = 0; l < r.length; l++) {
            const a = r[l],
                c = a.replace("{sender}", i).replace("{data}", s),
                d = new Dr(c);
            a.indexOf("{data}") === -1 && (d.body = {
                data: s,
                sender: i
            }), this.emit("debug", {
                action: "sendCcipReadFetchRequest",
                request: d,
                index: l,
                urls: r
            });
            let h = "unknown error",
                m;
            try {
                m = await d.send()
            } catch (A) {
                o.push(A.message), this.emit("debug", {
                    action: "receiveCcipReadFetchError",
                    request: d,
                    result: {
                        error: A
                    }
                });
                continue
            }
            try {
                const A = m.bodyJson;
                if (A.data) return this.emit("debug", {
                    action: "receiveCcipReadFetchResult",
                    request: d,
                    result: A
                }), A.data;
                A.message && (h = A.message), this.emit("debug", {
                    action: "receiveCcipReadFetchError",
                    request: d,
                    result: A
                })
            } catch { }
            D(m.statusCode < 400 || m.statusCode >= 500, `response not found during CCIP fetch: ${h}`, "OFFCHAIN_FAULT", {
                reason: "404_MISSING_RESOURCE",
                transaction: e,
                info: {
                    url: a,
                    errorMessage: h
                }
            }), o.push(h)
        }
        D(!1, `error encountered during CCIP fetch: ${o.map(l => JSON.stringify(l)).join(", ")}`, "OFFCHAIN_FAULT", {
            reason: "500_SERVER_ERROR",
            transaction: e,
            info: {
                urls: r,
                errorMessages: o
            }
        })
    }
    _wrapBlock(e, n) {
        return new US(eC(e), this)
    }
    _wrapLog(e, n) {
        return new lu(XS(e), this)
    }
    _wrapTransactionReceipt(e, n) {
        return new sv(iC(e), this)
    }
    _wrapTransactionResponse(e, n) {
        return new _a(wv(e), this)
    }
    _detectNetwork() {
        D(!1, "sub-classes must implement this", "UNSUPPORTED_OPERATION", {
            operation: "_detectNetwork"
        })
    }
    async _perform(e) {
        D(!1, `unsupported method: ${e.method}`, "UNSUPPORTED_OPERATION", {
            operation: e.method,
            info: e
        })
    }
    async getBlockNumber() {
        const e = oe(await M(this, le, Ht).call(this, {
            method: "getBlockNumber"
        }), "%response");
        return p(this, kr) >= 0 && b(this, kr, e), e
    }
    _getAddress(e) {
        return St(e, this)
    }
    _getBlockTag(e) {
        if (e == null) return "latest";
        switch (e) {
            case "earliest":
                return "0x0";
            case "finalized":
            case "latest":
            case "pending":
            case "safe":
                return e
        }
        if (Ee(e)) return Ee(e, 32) ? e : uo(e);
        if (typeof e == "bigint" && (e = oe(e, "blockTag")), typeof e == "number") return e >= 0 ? uo(e) : p(this, kr) >= 0 ? uo(p(this, kr) + e) : this.getBlockNumber().then(n => uo(n + e));
        S(!1, "invalid blockTag", "blockTag", e)
    }
    _getFilter(e) {
        const n = (e.topics || []).map(a => a == null ? null : Array.isArray(a) ? tp(a.map(c => c.toLowerCase())) : a.toLowerCase()),
            r = "blockHash" in e ? e.blockHash : void 0,
            i = (a, c, d) => {
                let h;
                switch (a.length) {
                    case 0:
                        break;
                    case 1:
                        h = a[0];
                        break;
                    default:
                        a.sort(), h = a
                }
                if (r && (c != null || d != null)) throw new Error("invalid filter");
                const m = {};
                return h && (m.address = h), n.length && (m.topics = n), c && (m.fromBlock = c), d && (m.toBlock = d), r && (m.blockHash = r), m
            };
        let s = [];
        if (e.address)
            if (Array.isArray(e.address))
                for (const a of e.address) s.push(this._getAddress(a));
            else s.push(this._getAddress(e.address));
        let o;
        "fromBlock" in e && (o = this._getBlockTag(e.fromBlock));
        let l;
        return "toBlock" in e && (l = this._getBlockTag(e.toBlock)), s.filter(a => typeof a != "string").length || o != null && typeof o != "string" || l != null && typeof l != "string" ? Promise.all([Promise.all(s), o, l]).then(a => i(a[0], a[1], a[2])) : i(s, o, l)
    }
    _getTransactionRequest(e) {
        const n = Kc(e),
            r = [];
        if (["to", "from"].forEach(i => {
            if (n[i] == null) return;
            const s = St(n[i], this);
            zu(s) ? r.push(async function () {
                n[i] = await s
            }()) : n[i] = s
        }), n.blockTag != null) {
            const i = this._getBlockTag(n.blockTag);
            zu(i) ? r.push(async function () {
                n.blockTag = await i
            }()) : n.blockTag = i
        }
        return r.length ? async function () {
            return await Promise.all(r), n
        }() : n
    }
    async getNetwork() {
        if (p(this, Kt) == null) {
            const i = (async () => {
                try {
                    const s = await this._detectNetwork();
                    return this.emit("network", s, null), s
                } catch (s) {
                    throw p(this, Kt) === i && b(this, Kt, null), s
                }
            })();
            return b(this, Kt, i), (await i).clone()
        }
        const e = p(this, Kt),
            [n, r] = await Promise.all([e, this._detectNetwork()]);
        return n.chainId !== r.chainId && (p(this, ys) ? (this.emit("network", r, n), p(this, Kt) === e && b(this, Kt, Promise.resolve(r))) : D(!1, `network changed: ${n.chainId} => ${r.chainId} `, "NETWORK_ERROR", {
            event: "changed"
        })), n.clone()
    }
    async getFeeData() {
        const e = await this.getNetwork(),
            n = async () => {
                const {
                    _block: i,
                    gasPrice: s,
                    priorityFee: o
                } = await Et({
                    _block: M(this, le, ip).call(this, "latest", !1),
                    gasPrice: (async () => {
                        try {
                            const d = await M(this, le, Ht).call(this, {
                                method: "getGasPrice"
                            });
                            return Z(d, "%response")
                        } catch { }
                        return null
                    })(),
                    priorityFee: (async () => {
                        try {
                            const d = await M(this, le, Ht).call(this, {
                                method: "getPriorityFee"
                            });
                            return Z(d, "%response")
                        } catch { }
                        return null
                    })()
                });
                let l = null,
                    a = null;
                const c = this._wrapBlock(i, e);
                return c && c.baseFeePerGas && (a = o & BigInt("1000000000"), l = c.baseFeePerGas * dC + a), new Ym(s, l, a)
            },
            r = e.getPlugin("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
        if (r) {
            const i = new Dr(r.url),
                s = await r.processFunc(n, this, i);
            return new Ym(s.gasPrice, s.maxFeePerGas, s.maxPriorityFeePerGas)
        }
        return await n()
    }
    async estimateGas(e) {
        let n = this._getTransactionRequest(e);
        return zu(n) && (n = await n), Z(await M(this, le, Ht).call(this, {
            method: "estimateGas",
            transaction: n
        }), "%response")
    }
    async call(e) {
        const {
            tx: n,
            blockTag: r
        } = await Et({
            tx: this._getTransactionRequest(e),
            blockTag: this._getBlockTag(e.blockTag)
        });
        return await M(this, le, rp).call(this, M(this, le, np).call(this, n, r, e.enableCcipRead ? 0 : -1))
    }
    async getBalance(e, n) {
        return Z(await M(this, le, ea).call(this, {
            method: "getBalance"
        }, e, n), "%response")
    }
    async getTransactionCount(e, n) {
        return oe(await M(this, le, ea).call(this, {
            method: "getTransactionCount"
        }, e, n), "%response")
    }
    async getCode(e, n) {
        return W(await M(this, le, ea).call(this, {
            method: "getCode"
        }, e, n))
    }
    async getStorage(e, n, r) {
        const i = Z(n, "position");
        return W(await M(this, le, ea).call(this, {
            method: "getStorage",
            position: i
        }, e, r))
    }
    async broadcastTransaction(e) {
        const {
            blockNumber: n,
            hash: r,
            network: i
        } = await Et({
            blockNumber: this.getBlockNumber(),
            hash: this._perform({
                method: "broadcastTransaction",
                signedTransaction: e
            }),
            network: this.getNetwork()
        }), s = Vc.from(e);
        if (s.hash !== r) throw new Error("@TODO: the returned hash did not match");
        return this._wrapTransactionResponse(s, i).replaceableTransaction(n)
    }
    async getBlock(e, n) {
        const {
            network: r,
            params: i
        } = await Et({
            network: this.getNetwork(),
            params: M(this, le, ip).call(this, e, !!n)
        });
        return i == null ? null : this._wrapBlock(i, r)
    }
    async getTransaction(e) {
        const {
            network: n,
            params: r
        } = await Et({
            network: this.getNetwork(),
            params: M(this, le, Ht).call(this, {
                method: "getTransaction",
                hash: e
            })
        });
        return r == null ? null : this._wrapTransactionResponse(r, n)
    }
    async getTransactionReceipt(e) {
        const {
            network: n,
            params: r
        } = await Et({
            network: this.getNetwork(),
            params: M(this, le, Ht).call(this, {
                method: "getTransactionReceipt",
                hash: e
            })
        });
        if (r == null) return null;
        if (r.gasPrice == null && r.effectiveGasPrice == null) {
            const i = await M(this, le, Ht).call(this, {
                method: "getTransaction",
                hash: e
            });
            if (i == null) throw new Error("report this; could not find tx or effectiveGasPrice");
            r.effectiveGasPrice = i.gasPrice
        }
        return this._wrapTransactionReceipt(r, n)
    }
    async getTransactionResult(e) {
        const {
            result: n
        } = await Et({
            network: this.getNetwork(),
            result: M(this, le, Ht).call(this, {
                method: "getTransactionResult",
                hash: e
            })
        });
        return n == null ? null : W(n)
    }
    async getLogs(e) {
        let n = this._getFilter(e);
        zu(n) && (n = await n);
        const {
            network: r,
            params: i
        } = await Et({
            network: this.getNetwork(),
            params: M(this, le, Ht).call(this, {
                method: "getLogs",
                filter: n
            })
        });
        return i.map(s => this._wrapLog(s, r))
    }
    _getProvider(e) {
        D(!1, "provider cannot connect to target network", "UNSUPPORTED_OPERATION", {
            operation: "_getProvider()"
        })
    }
    async getResolver(e) {
        return await Yc.fromName(this, e)
    }
    async getAvatar(e) {
        const n = await this.getResolver(e);
        return n ? await n.getAvatar() : null
    }
    async resolveName(e) {
        const n = await this.getResolver(e);
        return n ? await n.getAddress() : null
    }
    async lookupAddress(e) {
        e = ye(e);
        const n = Wh(e.substring(2).toLowerCase() + ".addr.reverse");
        try {
            const r = await Yc.getEnsAddress(this),
                s = await new So(r, ["function resolver(bytes32) view returns (address)"], this).resolver(n);
            if (s == null || s === Ra) return null;
            const l = await new So(s, ["function name(bytes32) view returns (string)"], this).name(n);
            return await this.resolveName(l) !== e ? null : l
        } catch (r) {
            if (it(r, "BAD_DATA") && r.value === "0x" || it(r, "CALL_EXCEPTION")) return null;
            throw r
        }
        return null
    }
    async waitForTransaction(e, n, r) {
        const i = n & 1;
        return i === 0 ? this.getTransactionReceipt(e) : new Promise(async (s, o) => {
            let l = null;
            const a = async c => {
                try {
                    const d = await this.getTransactionReceipt(e);
                    if (d != null && c - d.blockNumber + 1 >= i) {
                        s(d), l && (clearTimeout(l), l = null);
                        return
                    }
                } catch (d) {
                    console.log("EEE", d)
                }
                this.once("block", a)
            };
            r != null && (l = setTimeout(() => {
                l != null && (l = null, this.off("block", a), o(Ue("timeout", "TIMEOUT", {
                    reason: "timeout"
                })))
            }, r)), a(await this.getBlockNumber())
        })
    }
    async waitForBlock(e) {
        D(!1, "not implemented yet", "NOT_IMPLEMENTED", {
            operation: "waitForBlock"
        })
    }
    _clearTimeout(e) {
        const n = p(this, an).get(e);
        n && (n.timer && clearTimeout(n.timer), p(this, an).delete(e))
    }
    _setTimeout(e, n) {
        n == null && (n = 0);
        const r = Tl(this, $a)._++,
            i = () => {
                p(this, an).delete(r), e()
            };
        if (this.paused) p(this, an).set(r, {
            timer: null,
            func: i,
            time: n
        });
        else {
            const s = setTimeout(i, n);
            p(this, an).set(r, {
                timer: s,
                func: i,
                time: Id()
            })
        }
        return r
    }
    _forEachSubscriber(e) {
        for (const n of p(this, pt).values()) e(n.subscriber)
    }
    _getSubscriber(e) {
        switch (e.type) {
            case "debug":
            case "error":
            case "network":
                return new vv(e.type);
            case "block":
                {
                    const n = new aC(this);
                    return n.pollingInterval = this.pollingInterval,
                        n
                }
            case "safe":
            case "finalized":
                return new uC(this, e.type);
            case "event":
                return new Pg(this, e.filter);
            case "transaction":
                return new fC(this, e.hash);
            case "orphan":
                return new cC(this, e.filter)
        }
        throw new Error(`unsupported event: ${e.type}`)
    }
    _recoverSubscriber(e, n) {
        for (const r of p(this, pt).values())
            if (r.subscriber === e) {
                r.started && r.subscriber.stop(), r.subscriber = n, r.started && n.start(), p(this, gt) != null && n.pause(p(this, gt));
                break
            }
    }
    async on(e, n) {
        const r = await M(this, le, fc).call(this, e);
        return r.listeners.push({
            listener: n,
            once: !1
        }), r.started || (r.subscriber.start(), r.started = !0, p(this, gt) != null && r.subscriber.pause(p(this, gt))), this
    }
    async once(e, n) {
        const r = await M(this, le, fc).call(this, e);
        return r.listeners.push({
            listener: n,
            once: !0
        }), r.started || (r.subscriber.start(), r.started = !0, p(this, gt) != null && r.subscriber.pause(p(this, gt))), this
    }
    async emit(e, ...n) {
        const r = await M(this, le, ta).call(this, e, n);
        if (!r || r.listeners.length === 0) return !1;
        const i = r.listeners.length;
        return r.listeners = r.listeners.filter(({
            listener: s,
            once: o
        }) => {
            const l = new L1(this, o ? null : s, e);
            try {
                s.call(this, ...n, l)
            } catch { }
            return !o
        }), r.listeners.length === 0 && (r.started && r.subscriber.stop(), p(this, pt).delete(r.tag)), i > 0
    }
    async listenerCount(e) {
        if (e) {
            const r = await M(this, le, ta).call(this, e);
            return r ? r.listeners.length : 0
        }
        let n = 0;
        for (const {
            listeners: r
        } of p(this, pt).values()) n += r.length;
        return n
    }
    async listeners(e) {
        if (e) {
            const r = await M(this, le, ta).call(this, e);
            return r ? r.listeners.map(({
                listener: i
            }) => i) : []
        }
        let n = [];
        for (const {
            listeners: r
        } of p(this, pt).values()) n = n.concat(r.map(({
            listener: i
        }) => i));
        return n
    }
    async off(e, n) {
        const r = await M(this, le, ta).call(this, e);
        if (!r) return this;
        if (n) {
            const i = r.listeners.map(({
                listener: s
            }) => s).indexOf(n);
            i >= 0 && r.listeners.splice(i, 1)
        }
        return (!n || r.listeners.length === 0) && (r.started && r.subscriber.stop(), p(this, pt).delete(r.tag)), this
    }
    async removeAllListeners(e) {
        if (e) {
            const {
                tag: n,
                started: r,
                subscriber: i
            } = await M(this, le, fc).call(this, e);
            r && i.stop(), p(this, pt).delete(n)
        } else
            for (const [n, {
                started: r,
                subscriber: i
            }] of p(this, pt)) r && i.stop(), p(this, pt).delete(n);
        return this
    }
    async addListener(e, n) {
        return await this.on(e, n)
    }
    async removeListener(e, n) {
        return this.off(e, n)
    }
    get destroyed() {
        return p(this, ol)
    }
    destroy() {
        this.removeAllListeners();
        for (const e of p(this, an).keys()) this._clearTimeout(e);
        b(this, ol, !0)
    }
    get paused() {
        return p(this, gt) != null
    }
    set paused(e) {
        !!e !== this.paused && (this.paused ? this.resume() : this.pause(!1))
    }
    pause(e) {
        if (b(this, kr, -1), p(this, gt) != null) {
            if (p(this, gt) == !!e) return;
            D(!1, "cannot change pause type; resume first", "UNSUPPORTED_OPERATION", {
                operation: "pause"
            })
        }
        this._forEachSubscriber(n => n.pause(e)), b(this, gt, !!e);
        for (const n of p(this, an).values()) n.timer && clearTimeout(n.timer), n.time = Id() - n.time
    }
    resume() {
        if (p(this, gt) != null) {
            this._forEachSubscriber(e => e.resume()), b(this, gt, null);
            for (const e of p(this, an).values()) {
                let n = e.time;
                n < 0 && (n = 0), e.time = Id(), setTimeout(e.func, n)
            }
        }
    }
}
pt = new WeakMap, pi = new WeakMap, gt = new WeakMap, ol = new WeakMap, Kt = new WeakMap, ys = new WeakMap, gi = new WeakMap, kr = new WeakMap, $a = new WeakMap, an = new WeakMap, ll = new WeakMap, al = new WeakMap, le = new WeakSet, Ht = async function (e) {
    const n = p(this, al).cacheTimeout;
    if (n < 0) return await this._perform(e);
    const r = cc(e.method, e);
    let i = p(this, gi).get(r);
    return i || (i = this._perform(e), p(this, gi).set(r, i), setTimeout(() => {
        p(this, gi).get(r) === i && p(this, gi).delete(r)
    }, n)), await i
}, np = async function (e, n, r) {
    D(r < hC, "CCIP read exceeded maximum redirections", "OFFCHAIN_FAULT", {
        reason: "TOO_MANY_REDIRECTS",
        transaction: Object.assign({}, e, {
            blockTag: n,
            enableCcipRead: !0
        })
    });
    const i = Kc(e);
    try {
        return W(await this._perform({
            method: "call",
            transaction: i,
            blockTag: n
        }))
    } catch (s) {
        if (!this.disableCcipRead && lg(s) && s.data && r >= 0 && n === "latest" && i.to != null && Le(s.data, 0, 4) === "0x556f1830") {
            const o = s.data,
                l = await St(i.to, this);
            let a;
            try {
                a = xC(Le(s.data, 4))
            } catch (h) {
                D(!1, h.message, "OFFCHAIN_FAULT", {
                    reason: "BAD_DATA",
                    transaction: i,
                    info: {
                        data: o
                    }
                })
            }
            D(a.sender.toLowerCase() === l.toLowerCase(), "CCIP Read sender mismatch", "CALL_EXCEPTION", {
                action: "call",
                data: o,
                reason: "OffchainLookup",
                transaction: i,
                invocation: null,
                revert: {
                    signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                    name: "OffchainLookup",
                    args: a.errorArgs
                }
            });
            const c = await this.ccipReadFetch(i, a.calldata, a.urls);
            D(c != null, "CCIP Read failed to fetch data", "OFFCHAIN_FAULT", {
                reason: "FETCH_FAILED",
                transaction: i,
                info: {
                    data: s.data,
                    errorArgs: a.errorArgs
                }
            });
            const d = {
                to: l,
                data: Qe([a.selector, vC([c, a.extraData])])
            };
            this.emit("debug", {
                action: "sendCcipReadCall",
                transaction: d
            });
            try {
                const h = await M(this, le, np).call(this, d, n, r + 1);
                return this.emit("debug", {
                    action: "receiveCcipReadCallResult",
                    transaction: Object.assign({}, d),
                    result: h
                }), h
            } catch (h) {
                throw this.emit("debug", {
                    action: "receiveCcipReadCallError",
                    transaction: Object.assign({}, d),
                    error: h
                }), h
            }
        }
        throw s
    }
}, rp = async function (e) {
    const {
        value: n
    } = await Et({
        network: this.getNetwork(),
        value: e
    });
    return n
}, ea = async function (e, n, r) {
    let i = this._getAddress(n),
        s = this._getBlockTag(r);
    return (typeof i != "string" || typeof s != "string") && ([i, s] = await Promise.all([i, s])), await M(this, le, rp).call(this, M(this, le, Ht).call(this, Object.assign(e, {
        address: i,
        blockTag: s
    })))
}, ip = async function (e, n) {
    if (Ee(e, 32)) return await M(this, le, Ht).call(this, {
        method: "getBlock",
        blockHash: e,
        includeTransactions: n
    });
    let r = this._getBlockTag(e);
    return typeof r != "string" && (r = await r), await M(this, le, Ht).call(this, {
        method: "getBlock",
        blockTag: r,
        includeTransactions: n
    })
}, ta = async function (e, n) {
    let r = await Bd(e, this);
    return r.type === "event" && n && n.length > 0 && n[0].removed === !0 && (r = await Bd({
        orphan: "drop-log",
        log: n[0]
    }, this)), p(this, pt).get(r.tag) || null
}, fc = async function (e) {
    const n = await Bd(e, this),
        r = n.tag;
    let i = p(this, pt).get(r);
    return i || (i = {
        subscriber: this._getSubscriber(n),
        tag: r,
        addressableMap: new WeakMap,
        nameMap: new Map,
        started: !1,
        listeners: []
    }, p(this, pt).set(r, i)), i
};

function yC(t, e) {
    try {
        const n = sp(t, e);
        if (n) return Mc(n)
    } catch { }
    return null
}

function sp(t, e) {
    if (t === "0x") return null;
    try {
        const n = oe(Le(t, e, e + 32)),
            r = oe(Le(t, n, n + 32));
        return Le(t, n + 32, n + 32 + r)
    } catch { }
    return null
}

function ry(t) {
    const e = kt(t);
    if (e.length > 32) throw new Error("internal; should not happen");
    const n = new Uint8Array(32);
    return n.set(e, 32 - e.length), n
}

function wC(t) {
    if (t.length % 32 === 0) return t;
    const e = new Uint8Array(Math.ceil(t.length / 32) * 32);
    return e.set(t), e
}
const AC = new Uint8Array([]);

function vC(t) {
    const e = [];
    let n = 0;
    for (let r = 0; r < t.length; r++) e.push(AC), n += 32;
    for (let r = 0; r < t.length; r++) {
        const i = de(t[r]);
        e[r] = ry(n), e.push(ry(i.length)), e.push(wC(i)), n += 32 + Math.ceil(i.length / 32) * 32
    }
    return Qe(e)
}
const iy = "0x0000000000000000000000000000000000000000000000000000000000000000";

function xC(t) {
    const e = {
        sender: "",
        urls: [],
        calldata: "",
        selector: "",
        extraData: "",
        errorArgs: []
    };
    D(Eo(t) >= 5 * 32, "insufficient OffchainLookup data", "OFFCHAIN_FAULT", {
        reason: "insufficient OffchainLookup data"
    });
    const n = Le(t, 0, 32);
    D(Le(n, 0, 12) === Le(iy, 0, 12), "corrupt OffchainLookup sender", "OFFCHAIN_FAULT", {
        reason: "corrupt OffchainLookup sender"
    }), e.sender = Le(n, 12);
    try {
        const r = [],
            i = oe(Le(t, 32, 64)),
            s = oe(Le(t, i, i + 32)),
            o = Le(t, i + 32);
        for (let l = 0; l < s; l++) {
            const a = yC(o, l * 32);
            if (a == null) throw new Error("abort");
            r.push(a)
        }
        e.urls = r
    } catch {
        D(!1, "corrupt OffchainLookup urls", "OFFCHAIN_FAULT", {
            reason: "corrupt OffchainLookup urls"
        })
    }
    try {
        const r = sp(t, 64);
        if (r == null) throw new Error("abort");
        e.calldata = r
    } catch {
        D(!1, "corrupt OffchainLookup calldata", "OFFCHAIN_FAULT", {
            reason: "corrupt OffchainLookup calldata"
        })
    }
    D(Le(t, 100, 128) === Le(iy, 0, 28), "corrupt OffchainLookup callbaackSelector", "OFFCHAIN_FAULT", {
        reason: "corrupt OffchainLookup callbaackSelector"
    }), e.selector = Le(t, 96, 100);
    try {
        const r = sp(t, 128);
        if (r == null) throw new Error("abort");
        e.extraData = r
    } catch {
        D(!1, "corrupt OffchainLookup extraData", "OFFCHAIN_FAULT", {
            reason: "corrupt OffchainLookup extraData"
        })
    }
    return e.errorArgs = "sender,urls,calldata,selector,extraData".split(/,/).map(r => e[r]), e
}

function Vs(t, e) {
    if (t.provider) return t.provider;
    D(!1, "missing provider", "UNSUPPORTED_OPERATION", {
        operation: e
    })
}
async function sy(t, e) {
    let n = Kc(e);
    if (n.to != null && (n.to = St(n.to, t)), n.from != null) {
        const r = n.from;
        n.from = Promise.all([t.getAddress(), St(r, t)]).then(([i, s]) => (S(i.toLowerCase() === s.toLowerCase(), "transaction from mismatch", "tx.from", s), i))
    } else n.from = t.getAddress();
    return await Et(n)
}
class EC {
    constructor(e) {
        P(this, "provider");
        te(this, {
            provider: e || null
        })
    }
    async getNonce(e) {
        return Vs(this, "getTransactionCount").getTransactionCount(await this.getAddress(), e)
    }
    async populateCall(e) {
        return await sy(this, e)
    }
    async populateTransaction(e) {
        const n = Vs(this, "populateTransaction"),
            r = await sy(this, e);
        r.nonce == null && (r.nonce = await this.getNonce("pending")), r.gasLimit == null && (r.gasLimit = await this.estimateGas(r));
        const i = await this.provider.getNetwork();
        if (r.chainId != null) {
            const o = Z(r.chainId);
            S(o === i.chainId, "transaction chainId mismatch", "tx.chainId", e.chainId)
        } else r.chainId = i.chainId;
        const s = r.maxFeePerGas != null || r.maxPriorityFeePerGas != null;
        if (r.gasPrice != null && (r.type === 2 || s) ? S(!1, "eip-1559 transaction do not support gasPrice", "tx", e) : (r.type === 0 || r.type === 1) && s && S(!1, "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "tx", e), (r.type === 2 || r.type == null) && r.maxFeePerGas != null && r.maxPriorityFeePerGas != null) r.type = 2;
        else if (r.type === 0 || r.type === 1) {
            const o = await n.getFeeData();
            D(o.gasPrice != null, "network does not support gasPrice", "UNSUPPORTED_OPERATION", {
                operation: "getGasPrice"
            }), r.gasPrice == null && (r.gasPrice = o.gasPrice)
        } else {
            const o = await n.getFeeData();
            if (r.type == null)
                if (o.maxFeePerGas != null && o.maxPriorityFeePerGas != null)
                    if (r.type = 2, r.gasPrice != null) {
                        const l = r.gasPrice;
                        delete r.gasPrice, r.maxFeePerGas = l, r.maxPriorityFeePerGas = l
                    } else r.maxFeePerGas == null && (r.maxFeePerGas = o.maxFeePerGas), r.maxPriorityFeePerGas == null && (r.maxPriorityFeePerGas = o.maxPriorityFeePerGas);
                else o.gasPrice != null ? (D(!s, "network does not support EIP-1559", "UNSUPPORTED_OPERATION", {
                    operation: "populateTransaction"
                }), r.gasPrice == null && (r.gasPrice = o.gasPrice), r.type = 0) : D(!1, "failed to get consistent fee data", "UNSUPPORTED_OPERATION", {
                    operation: "signer.getFeeData"
                });
            else (r.type === 2 || r.type === 3) && (r.maxFeePerGas == null && (r.maxFeePerGas = o.maxFeePerGas), r.maxPriorityFeePerGas == null && (r.maxPriorityFeePerGas = o.maxPriorityFeePerGas))
        }
        return await Et(r)
    }
    async estimateGas(e) {
        return Vs(this, "estimateGas").estimateGas(await this.populateCall(e))
    }
    async call(e) {
        return Vs(this, "call").call(await this.populateCall(e))
    }
    async resolveName(e) {
        return await Vs(this, "resolveName").resolveName(e)
    }
    async sendTransaction(e) {
        const n = Vs(this, "sendTransaction"),
            r = await this.populateTransaction(e);
        delete r.from;
        const i = Vc.from(r);
        return await n.broadcastTransaction(await this.signTransaction(i))
    }
}

function bC(t) {
    return JSON.parse(JSON.stringify(t))
}
var vt, Wn, ws, mi, As, ul, Ti, op, lp;
class xv {
    constructor(e) {
        R(this, Ti);
        R(this, vt);
        R(this, Wn);
        R(this, ws);
        R(this, mi);
        R(this, As);
        R(this, ul);
        b(this, vt, e), b(this, Wn, null), b(this, ws, M(this, Ti, op).bind(this)), b(this, mi, !1), b(this, As, null), b(this, ul, !1)
    }
    _subscribe(e) {
        throw new Error("subclasses must override this")
    }
    _emitResults(e, n) {
        throw new Error("subclasses must override this")
    }
    _recover(e) {
        throw new Error("subclasses must override this")
    }
    start() {
        p(this, mi) || (b(this, mi, !0), M(this, Ti, op).call(this, -2))
    }
    stop() {
        p(this, mi) && (b(this, mi, !1), b(this, ul, !0), M(this, Ti, lp).call(this), p(this, vt).off("block", p(this, ws)))
    }
    pause(e) {
        e && M(this, Ti, lp).call(this), p(this, vt).off("block", p(this, ws))
    }
    resume() {
        this.start()
    }
}
vt = new WeakMap, Wn = new WeakMap, ws = new WeakMap, mi = new WeakMap, As = new WeakMap, ul = new WeakMap, Ti = new WeakSet, op = async function (e) {
    try {
        p(this, Wn) == null && b(this, Wn, this._subscribe(p(this, vt)));
        let n = null;
        try {
            n = await p(this, Wn)
        } catch (s) {
            if (!it(s, "UNSUPPORTED_OPERATION") || s.operation !== "eth_newFilter") throw s
        }
        if (n == null) {
            b(this, Wn, null), p(this, vt)._recoverSubscriber(this, this._recover(p(this, vt)));
            return
        }
        const r = await p(this, vt).getNetwork();
        if (p(this, As) || b(this, As, r), p(this, As).chainId !== r.chainId) throw new Error("chaid changed");
        if (p(this, ul)) return;
        const i = await p(this, vt).send("eth_getFilterChanges", [n]);
        await this._emitResults(p(this, vt), i)
    } catch (n) {
        console.log("@TODO", n)
    }
    p(this, vt).once("block", p(this, ws))
}, lp = function () {
    const e = p(this, Wn);
    e && (b(this, Wn, null), e.then(n => {
        p(this, vt).destroyed || p(this, vt).send("eth_uninstallFilter", [n])
    }))
};
var vs;
class kC extends xv {
    constructor(n, r) {
        super(n);
        R(this, vs);
        b(this, vs, bC(r))
    }
    _recover(n) {
        return new Pg(n, p(this, vs))
    }
    async _subscribe(n) {
        return await n.send("eth_newFilter", [p(this, vs)])
    }
    async _emitResults(n, r) {
        for (const i of r) n.emit(p(this, vs), n._wrapLog(i, n._network))
    }
}
vs = new WeakMap;
class NC extends xv {
    async _subscribe(e) {
        return await e.send("eth_newPendingTransactionFilter", [])
    }
    async _emitResults(e, n) {
        for (const r of n) e.emit("pending", r)
    }
}
const SC = "bigint,boolean,function,number,string,symbol".split(/,/g);

function dc(t) {
    if (t == null || SC.indexOf(typeof t) >= 0 || typeof t.getAddress == "function") return t;
    if (Array.isArray(t)) return t.map(dc);
    if (typeof t == "object") return Object.keys(t).reduce((e, n) => (e[n] = t[n], e), {});
    throw new Error(`should not happen: ${t} (${typeof t})`)
}

function CC(t) {
    return new Promise(e => {
        setTimeout(e, t)
    })
}

function Js(t) {
    return t && t.toLowerCase()
}

function oy(t) {
    return t && typeof t.pollingInterval == "number"
}
const Ev = {
    polling: !1,
    staticNetwork: null,
    batchStallTime: 10,
    batchMaxSize: 1 << 20,
    batchMaxCount: 100,
    cacheTimeout: 250,
    pollingInterval: 4e3
};
class Rd extends EC {
    constructor(n, r) {
        super(n);
        P(this, "address");
        r = ye(r), te(this, {
            address: r
        })
    }
    connect(n) {
        D(!1, "cannot reconnect JsonRpcSigner", "UNSUPPORTED_OPERATION", {
            operation: "signer.connect"
        })
    }
    async getAddress() {
        return this.address
    }
    async populateTransaction(n) {
        return await this.populateCall(n)
    }
    async sendUncheckedTransaction(n) {
        const r = dc(n),
            i = [];
        if (r.from) {
            const o = r.from;
            i.push((async () => {
                const l = await St(o, this.provider);
                S(l != null && l.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", n), r.from = l
            })())
        } else r.from = this.address;
        if (r.gasLimit == null && i.push((async () => {
            r.gasLimit = await this.provider.estimateGas({
                ...r,
                from: this.address
            })
        })()), r.to != null) {
            const o = r.to;
            i.push((async () => {
                r.to = await St(o, this.provider)
            })())
        }
        i.length && await Promise.all(i);
        const s = this.provider.getRpcTransaction(r);
        return this.provider.send("eth_sendTransaction", [s])
    }
    async sendTransaction(n) {
        const r = await this.provider.getBlockNumber(),
            i = await this.sendUncheckedTransaction(n);
        return await new Promise((s, o) => {
            const l = [1e3, 100];
            let a = 0;
            const c = async () => {
                try {
                    const d = await this.provider.getTransaction(i);
                    if (d != null) {
                        s(d.replaceableTransaction(r));
                        return
                    }
                } catch (d) {
                    if (it(d, "CANCELLED") || it(d, "BAD_DATA") || it(d, "NETWORK_ERROR") || it(d, "UNSUPPORTED_OPERATION")) {
                        d.info == null && (d.info = {}), d.info.sendTransactionHash = i, o(d);
                        return
                    }
                    if (it(d, "INVALID_ARGUMENT") && (a++, d.info == null && (d.info = {}), d.info.sendTransactionHash = i, a > 10)) {
                        o(d);
                        return
                    }
                    this.provider.emit("error", Ue("failed to fetch transation after sending (will try again)", "UNKNOWN_ERROR", {
                        error: d
                    }))
                }
                this.provider._setTimeout(() => {
                    c()
                }, l.pop() || 4e3)
            };
            c()
        })
    }
    async signTransaction(n) {
        const r = dc(n);
        if (r.from) {
            const s = await St(r.from, this.provider);
            S(s != null && s.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", n), r.from = s
        } else r.from = this.address;
        const i = this.provider.getRpcTransaction(r);
        return await this.provider.send("eth_signTransaction", [i])
    }
    async signMessage(n) {
        const r = typeof n == "string" ? Rr(n) : n;
        return await this.provider.send("personal_sign", [W(r), this.address.toLowerCase()])
    }
    async signTypedData(n, r, i) {
        const s = dc(i),
            o = await Jc.resolveNames(n, r, s, async l => {
                const a = await St(l);
                return S(a != null, "TypedData does not support null address", "value", l), a
            });
        return await this.provider.send("eth_signTypedData_v4", [this.address.toLowerCase(), JSON.stringify(Jc.getPayload(o.domain, r, o.value))])
    }
    async unlock(n) {
        return this.provider.send("personal_unlockAccount", [this.address.toLowerCase(), n, null])
    }
    async _legacySignMessage(n) {
        const r = typeof n == "string" ? Rr(n) : n;
        return await this.provider.send("eth_sign", [this.address.toLowerCase(), W(r)])
    }
}
var xs, cl, Nr, Yn, Cn, un, Tt, Za, ap;
class PC extends mC {
    constructor(n, r) {
        super(n, r);
        R(this, Za);
        R(this, xs);
        R(this, cl);
        R(this, Nr);
        R(this, Yn);
        R(this, Cn);
        R(this, un);
        R(this, Tt);
        b(this, cl, 1), b(this, xs, Object.assign({}, Ev, r || {})), b(this, Nr, []), b(this, Yn, null), b(this, un, null), b(this, Tt, null); {
            let s = null;
            const o = new Promise(l => {
                s = l
            });
            b(this, Cn, {
                promise: o,
                resolve: s
            })
        }
        const i = this._getOption("staticNetwork");
        typeof i == "boolean" ? (S(!i || n !== "any", "staticNetwork cannot be used on special network 'any'", "options", r), i && n != null && b(this, un, er.from(n))) : i && (S(n == null || i.matches(n), "staticNetwork MUST match network object", "options", r), b(this, un, i))
    }
    _getOption(n) {
        return p(this, xs)[n]
    }
    get _network() {
        return D(p(this, un), "network is not available yet", "NETWORK_ERROR"), p(this, un)
    }
    async _perform(n) {
        if (n.method === "call" || n.method === "estimateGas") {
            let i = n.transaction;
            if (i && i.type != null && Z(i.type) && i.maxFeePerGas == null && i.maxPriorityFeePerGas == null) {
                const s = await this.getFeeData();
                s.maxFeePerGas == null && s.maxPriorityFeePerGas == null && (n = Object.assign({}, n, {
                    transaction: Object.assign({}, i, {
                        type: void 0
                    })
                }))
            }
        }
        const r = this.getRpcRequest(n);
        return r != null ? await this.send(r.method, r.args) : super._perform(n)
    }
    async _detectNetwork() {
        const n = this._getOption("staticNetwork");
        if (n)
            if (n === !0) {
                if (p(this, un)) return p(this, un)
            } else return n;
        return p(this, Tt) ? await p(this, Tt) : this.ready ? (b(this, Tt, (async () => {
            try {
                const r = er.from(Z(await this.send("eth_chainId", [])));
                return b(this, Tt, null), r
            } catch (r) {
                throw b(this, Tt, null), r
            }
        })()), await p(this, Tt)) : (b(this, Tt, (async () => {
            const r = {
                id: Tl(this, cl)._++,
                method: "eth_chainId",
                params: [],
                jsonrpc: "2.0"
            };
            this.emit("debug", {
                action: "sendRpcPayload",
                payload: r
            });
            let i;
            try {
                i = (await this._send(r))[0], b(this, Tt, null)
            } catch (s) {
                throw b(this, Tt, null), this.emit("debug", {
                    action: "receiveRpcError",
                    error: s
                }), s
            }
            if (this.emit("debug", {
                action: "receiveRpcResult",
                result: i
            }), "result" in i) return er.from(Z(i.result));
            throw this.getRpcError(r, i)
        })()), await p(this, Tt))
    }
    _start() {
        p(this, Cn) == null || p(this, Cn).resolve == null || (p(this, Cn).resolve(), b(this, Cn, null), (async () => {
            for (; p(this, un) == null && !this.destroyed;) try {
                b(this, un, await this._detectNetwork())
            } catch (n) {
                if (this.destroyed) break;
                console.log("JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)"), this.emit("error", Ue("failed to bootstrap network detection", "NETWORK_ERROR", {
                    event: "initial-network-discovery",
                    info: {
                        error: n
                    }
                })), await CC(1e3)
            }
            M(this, Za, ap).call(this)
        })())
    }
    async _waitUntilReady() {
        if (p(this, Cn) != null) return await p(this, Cn).promise
    }
    _getSubscriber(n) {
        return n.type === "pending" ? new NC(this) : n.type === "event" ? this._getOption("polling") ? new Pg(this, n.filter) : new kC(this, n.filter) : n.type === "orphan" && n.filter.orphan === "drop-log" ? new vv("orphan") : super._getSubscriber(n)
    }
    get ready() {
        return p(this, Cn) == null
    }
    getRpcTransaction(n) {
        const r = {};
        return ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach(i => {
            if (n[i] == null) return;
            let s = i;
            i === "gasLimit" && (s = "gas"), r[s] = uo(Z(n[i], `tx.${i}`))
        }), ["from", "to", "data"].forEach(i => {
            n[i] != null && (r[i] = W(n[i]))
        }), n.accessList && (r.accessList = zs(n.accessList)), n.blobVersionedHashes && (r.blobVersionedHashes = n.blobVersionedHashes.map(i => i.toLowerCase())), r
    }
    getRpcRequest(n) {
        switch (n.method) {
            case "chainId":
                return {
                    method: "eth_chainId",
                    args: []
                };
            case "getBlockNumber":
                return {
                    method: "eth_blockNumber",
                    args: []
                };
            case "getGasPrice":
                return {
                    method: "eth_gasPrice",
                    args: []
                };
            case "getPriorityFee":
                return {
                    method: "eth_maxPriorityFeePerGas",
                    args: []
                };
            case "getBalance":
                return {
                    method: "eth_getBalance",
                    args: [Js(n.address), n.blockTag]
                };
            case "getTransactionCount":
                return {
                    method: "eth_getTransactionCount",
                    args: [Js(n.address), n.blockTag]
                };
            case "getCode":
                return {
                    method: "eth_getCode",
                    args: [Js(n.address), n.blockTag]
                };
            case "getStorage":
                return {
                    method: "eth_getStorageAt",
                    args: [Js(n.address), "0x" + n.position.toString(16), n.blockTag]
                };
            case "broadcastTransaction":
                return {
                    method: "eth_sendRawTransaction",
                    args: [n.signedTransaction]
                };
            case "getBlock":
                if ("blockTag" in n) return {
                    method: "eth_getBlockByNumber",
                    args: [n.blockTag, !!n.includeTransactions]
                };
                if ("blockHash" in n) return {
                    method: "eth_getBlockByHash",
                    args: [n.blockHash, !!n.includeTransactions]
                };
                break;
            case "getTransaction":
                return {
                    method: "eth_getTransactionByHash",
                    args: [n.hash]
                };
            case "getTransactionReceipt":
                return {
                    method: "eth_getTransactionReceipt",
                    args: [n.hash]
                };
            case "call":
                return {
                    method: "eth_call",
                    args: [this.getRpcTransaction(n.transaction), n.blockTag]
                };
            case "estimateGas":
                return {
                    method: "eth_estimateGas",
                    args: [this.getRpcTransaction(n.transaction)]
                };
            case "getLogs":
                return n.filter && n.filter.address != null && (Array.isArray(n.filter.address) ? n.filter.address = n.filter.address.map(Js) : n.filter.address = Js(n.filter.address)), {
                    method: "eth_getLogs",
                    args: [n.filter]
                }
        }
        return null
    }
    getRpcError(n, r) {
        const {
            method: i
        } = n, {
            error: s
        } = r;
        if (i === "eth_estimateGas" && s.message) {
            const a = s.message;
            if (!a.match(/revert/i) && a.match(/insufficient funds/i)) return Ue("insufficient funds", "INSUFFICIENT_FUNDS", {
                transaction: n.params[0],
                info: {
                    payload: n,
                    error: s
                }
            })
        }
        if (i === "eth_call" || i === "eth_estimateGas") {
            const a = up(s),
                c = Ma.getBuiltinCallException(i === "eth_call" ? "call" : "estimateGas", n.params[0], a ? a.data : null);
            return c.info = {
                error: s,
                payload: n
            }, c
        }
        const o = JSON.stringify(RC(s));
        if (typeof s.message == "string" && s.message.match(/user denied|ethers-user-denied/i)) return Ue("user rejected action", "ACTION_REJECTED", {
            action: {
                eth_sign: "signMessage",
                personal_sign: "signMessage",
                eth_signTypedData_v4: "signTypedData",
                eth_signTransaction: "signTransaction",
                eth_sendTransaction: "sendTransaction",
                eth_requestAccounts: "requestAccess",
                wallet_requestAccounts: "requestAccess"
            }[i] || "unknown",
            reason: "rejected",
            info: {
                payload: n,
                error: s
            }
        });
        if (i === "eth_sendRawTransaction" || i === "eth_sendTransaction") {
            const a = n.params[0];
            if (o.match(/insufficient funds|base fee exceeds gas limit/i)) return Ue("insufficient funds for intrinsic transaction cost", "INSUFFICIENT_FUNDS", {
                transaction: a,
                info: {
                    error: s
                }
            });
            if (o.match(/nonce/i) && o.match(/too low/i)) return Ue("nonce has already been used", "NONCE_EXPIRED", {
                transaction: a,
                info: {
                    error: s
                }
            });
            if (o.match(/replacement transaction/i) && o.match(/underpriced/i)) return Ue("replacement fee too low", "REPLACEMENT_UNDERPRICED", {
                transaction: a,
                info: {
                    error: s
                }
            });
            if (o.match(/only replay-protected/i)) return Ue("legacy pre-eip-155 transactions not supported", "UNSUPPORTED_OPERATION", {
                operation: i,
                info: {
                    transaction: a,
                    info: {
                        error: s
                    }
                }
            })
        }
        let l = !!o.match(/the method .* does not exist/i);
        return l || s && s.details && s.details.startsWith("Unauthorized method:") && (l = !0), l ? Ue("unsupported operation", "UNSUPPORTED_OPERATION", {
            operation: n.method,
            info: {
                error: s,
                payload: n
            }
        }) : Ue("could not coalesce error", "UNKNOWN_ERROR", {
            error: s,
            payload: n
        })
    }
    send(n, r) {
        if (this.destroyed) return Promise.reject(Ue("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", {
            operation: n
        }));
        const i = Tl(this, cl)._++,
            s = new Promise((o, l) => {
                p(this, Nr).push({
                    resolve: o,
                    reject: l,
                    payload: {
                        method: n,
                        params: r,
                        id: i,
                        jsonrpc: "2.0"
                    }
                })
            });
        return M(this, Za, ap).call(this), s
    }
    async getSigner(n) {
        n == null && (n = 0);
        const r = this.send("eth_accounts", []);
        if (typeof n == "number") {
            const s = await r;
            if (n >= s.length) throw new Error("no such account");
            return new Rd(this, s[n])
        }
        const {
            accounts: i
        } = await Et({
            network: this.getNetwork(),
            accounts: r
        });
        n = ye(n);
        for (const s of i)
            if (ye(s) === n) return new Rd(this, n);
        throw new Error("invalid account")
    }
    async listAccounts() {
        return (await this.send("eth_accounts", [])).map(r => new Rd(this, r))
    }
    destroy() {
        p(this, Yn) && (clearTimeout(p(this, Yn)), b(this, Yn, null));
        for (const {
            payload: n,
            reject: r
        } of p(this, Nr)) r(Ue("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", {
            operation: n.method
        }));
        b(this, Nr, []), super.destroy()
    }
}
xs = new WeakMap, cl = new WeakMap, Nr = new WeakMap, Yn = new WeakMap, Cn = new WeakMap, un = new WeakMap, Tt = new WeakMap, Za = new WeakSet, ap = function () {
    if (p(this, Yn)) return;
    const n = this._getOption("batchMaxCount") === 1 ? 0 : this._getOption("batchStallTime");
    b(this, Yn, setTimeout(() => {
        b(this, Yn, null);
        const r = p(this, Nr);
        for (b(this, Nr, []); r.length;) {
            const i = [r.shift()];
            for (; r.length && i.length !== p(this, xs).batchMaxCount;)
                if (i.push(r.shift()), JSON.stringify(i.map(o => o.payload)).length > p(this, xs).batchMaxSize) {
                    r.unshift(i.pop());
                    break
                } (async () => {
                    const s = i.length === 1 ? i[0].payload : i.map(o => o.payload);
                    this.emit("debug", {
                        action: "sendRpcPayload",
                        payload: s
                    });
                    try {
                        const o = await this._send(s);
                        this.emit("debug", {
                            action: "receiveRpcResult",
                            result: o
                        });
                        for (const {
                            resolve: l,
                            reject: a,
                            payload: c
                        } of i) {
                            if (this.destroyed) {
                                a(Ue("provider destroyed; cancelled request", "UNSUPPORTED_OPERATION", {
                                    operation: c.method
                                }));
                                continue
                            }
                            const d = o.filter(h => h.id === c.id)[0];
                            if (d == null) {
                                const h = Ue("missing response for request", "BAD_DATA", {
                                    value: o,
                                    info: {
                                        payload: c
                                    }
                                });
                                this.emit("error", h), a(h);
                                continue
                            }
                            if ("error" in d) {
                                a(this.getRpcError(c, d));
                                continue
                            }
                            l(d.result)
                        }
                    } catch (o) {
                        this.emit("debug", {
                            action: "receiveRpcError",
                            error: o
                        });
                        for (const {
                            reject: l
                        } of i) l(o)
                    }
                })()
        }
    }, n))
};
var yi;
class BC extends PC {
    constructor(n, r) {
        super(n, r);
        R(this, yi);
        let i = this._getOption("pollingInterval");
        i == null && (i = Ev.pollingInterval), b(this, yi, i)
    }
    _getSubscriber(n) {
        const r = super._getSubscriber(n);
        return oy(r) && (r.pollingInterval = p(this, yi)), r
    }
    get pollingInterval() {
        return p(this, yi)
    }
    set pollingInterval(n) {
        if (!Number.isInteger(n) || n < 0) throw new Error("invalid interval");
        b(this, yi, n), this._forEachSubscriber(r => {
            oy(r) && (r.pollingInterval = p(this, yi))
        })
    }
}
yi = new WeakMap;
var fl;
class IC extends BC {
    constructor(n, r, i) {
        n == null && (n = "http://localhost:8545");
        super(r, i);
        R(this, fl);
        typeof n == "string" ? b(this, fl, new Dr(n)) : b(this, fl, n.clone())
    }
    _getConnection() {
        return p(this, fl).clone()
    }
    async send(n, r) {
        return await this._start(), await super.send(n, r)
    }
    async _send(n) {
        const r = this._getConnection();
        r.body = JSON.stringify(n), r.setHeader("content-type", "application/json");
        const i = await r.send();
        i.assertOk();
        let s = i.bodyJson;
        return Array.isArray(s) || (s = [s]), s
    }
}
fl = new WeakMap;

function up(t) {
    if (t == null) return null;
    if (typeof t.message == "string" && t.message.match(/revert/i) && Ee(t.data)) return {
        message: t.message,
        data: t.data
    };
    if (typeof t == "object") {
        for (const e in t) {
            const n = up(t[e]);
            if (n) return n
        }
        return null
    }
    if (typeof t == "string") try {
        return up(JSON.parse(t))
    } catch { }
    return null
}

function cp(t, e) {
    if (t != null) {
        if (typeof t.message == "string" && e.push(t.message), typeof t == "object")
            for (const n in t) cp(t[n], e);
        if (typeof t == "string") try {
            return cp(JSON.parse(t), e)
        } catch { }
    }
}

function RC(t) {
    const e = [];
    return cp(t, e), e
}
const TC = "0x88807fDabF60fdDd7bd8fB4987dC5A63cbd31f6a",
    Gu = 18,
    OC = ["function getUnpaidEarnings(address shareholder) external view returns (uint256)", "function shares(address) external view returns (uint256 amount, uint256 totalExcluded, uint256 totalRealised)", "function totalDividends() external view returns (uint256)", "function totalDistributed() external view returns (uint256)", "function isDividendExempt(address) external view returns (bool)", "function balanceOf(address) external view returns (uint256)"],
    Hu = t => t >= 1e6 ? (t / 1e6).toFixed(2) + "M" : t >= 1e5 ? (t / 1e3).toFixed(2) + "K" : t.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }),
    FC = () => {
        const [t, e] = ce.useState(""), [n, r] = ce.useState(!1), [i, s] = ce.useState(!1), [o, l] = ce.useState({
            personalPending: 0,
            personalDistributed: 0,
            totalPending: 0,
            totalDistributed: 0
        }), [a, c] = ce.useState(!1), [d, h] = ce.useState(""), m = async (A = null) => {
            c(!0);
            try {
                const k = new IC("https://mainnet.base.org");
                console.log("Provider connected");
                const x = new So(TC, OC, k);
                console.log("Contract initialized");
                const C = await x.totalDistributed();
                console.log("Total distributed (raw):", C.toString());
                const y = await x.totalDividends();
                console.log("Total dividends (raw):", y.toString());
                const w = Number(Ou(C, Gu)),
                    E = Number(Ou(y, Gu)),
                    B = {
                        personalPending: 0,
                        personalDistributed: 0,
                        totalPending: Hu(E),
                        totalDistributed: Hu(w)
                    };
                if (A && Ad(A)) {
                    const T = await x.isDividendExempt(A);
                    if (console.log("Is wallet dividend exempt:", T), !T) {
                        const O = await x.getUnpaidEarnings(A),
                            U = await x.shares(A),
                            F = Number(Ou(O, Gu)),
                            X = Number(Ou(U[2], Gu));
                        B.personalPending = Hu(F), B.personalDistributed = Hu(X)
                    }
                }
                l(B), A && e(A)
            } catch (k) {
                console.error("Error fetching rewards:", k), h("Failed to fetch reward data: " + k.message)
            } finally {
                c(!1)
            }
        };
        return ce.useEffect(() => {
            if (t || i) {
                m(t);
                const A = setInterval(() => m(t), 6e4);
                return () => clearInterval(A)
            }
        }, [t, i]), G.jsx("div", {
            className: "min-h-screen bg-gray-50 p-8 font-sans",
            children: G.jsxs("div", {
                className: "max-w-6xl mx-auto space-y-8",
                children: [G.jsxs("div", {
                    className: "text-center",
                    children: [G.jsxs("h1", {
                        className: "text-4xl font-bold mb-2 text-gray-900 flex items-center justify-center gap-2",
                        children: [G.jsx(eb, {
                            className: "w-10 h-10 text-blue-600"
                        }), "ATM Dashboard"]
                    }), G.jsxs("p", {
                        className: "text-gray-600",
                        children: ["Hold ATM & Earn USDC Automatically! ", G.jsx(q2, {
                            className: "inline w-5 h-5 text-green-500"
                        })]
                    })]
                }), G.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto",
                    children: [G.jsx(Gi, {
                        className: "bg-white shadow-lg hover:shadow-xl transition-shadow",
                        children: G.jsx(Hi, {
                            className: "p-6",
                            children: G.jsxs("div", {
                                className: "text-center space-y-4",
                                children: [G.jsx(K0, {
                                    className: "w-12 h-12 text-blue-600 mx-auto"
                                }), G.jsx("h3", {
                                    className: "text-lg font-semibold text-gray-900",
                                    children: "Check Your Rewards"
                                }), G.jsx("p", {
                                    className: "text-gray-600 text-sm",
                                    children: "View your personal USDC rewards from holding ATM"
                                }), G.jsxs($l, {
                                    onClick: () => r(!0),
                                    className: "w-full bg-blue-600 p-3 hover:bg-blue-700 text-white",
                                    children: ["Check Rewards ", G.jsx(J0, {
                                        className: "w-4 h-4 ml-2"
                                    })]
                                })]
                            })
                        })
                    }), G.jsx(Gi, {
                        className: "bg-white shadow-lg hover:shadow-xl transition-shadow",
                        children: G.jsx(Hi, {
                            className: "p-6",
                            children: G.jsxs("div", {
                                className: "text-center space-y-4",
                                children: [G.jsx(X2, {
                                    className: "w-12 h-12 text-green-600 mx-auto"
                                }), G.jsx("h3", {
                                    className: "text-lg font-semibold text-gray-900",
                                    children: "Global Statistics"
                                }), G.jsx("p", {
                                    className: "text-gray-600 text-sm",
                                    children: "View total USDC rewards distributed to all holders"
                                }), G.jsxs($l, {
                                    onClick: () => s(!0),
                                    className: "w-full bg-green-600 p-3 hover:bg-green-700 text-white",
                                    children: ["View Global Stats ", G.jsx(J0, {
                                        className: "w-4 h-4 ml-2"
                                    })]
                                })]
                            })
                        })
                    })]
                }), n && G.jsxs("div", {
                    className: "max-w-2xl mx-auto animate-fadeIn",
                    children: [G.jsxs(Gi, {
                        className: "bg-white shadow-lg",
                        children: [G.jsx(tc, {
                            children: G.jsxs(nc, {
                                className: "flex items-center gap-2 text-gray-900",
                                children: [G.jsx(K0, {
                                    className: "w-5 h-5"
                                }), "Enter Wallet Details"]
                            })
                        }), G.jsxs(Hi, {
                            className: "space-y-6",
                            children: [G.jsxs("div", {
                                className: "space-y-4",
                                children: [G.jsx("div", {
                                    className: "text-sm text-gray-600",
                                    children: "Insert your wallet address"
                                }), G.jsxs("div", {
                                    className: "flex gap-4",
                                    children: [G.jsx(P1, {
                                        placeholder: "0x...",
                                        onChange: A => e(A.target.value),
                                        value: t,
                                        className: "flex-1 bg-white border-gray-200"
                                    }), G.jsx($l, {
                                        onClick: () => m(t),
                                        className: "bg-blue-600 p-3 hover:bg-blue-700 text-white",
                                        disabled: a || !Ad(t),
                                        children: "Check"
                                    })]
                                })]
                            }), G.jsxs("div", {
                                className: "relative",
                                children: [G.jsx("div", {
                                    className: "absolute inset-0 flex items-center",
                                    children: G.jsx("div", {
                                        className: "w-full border-t border-gray-200"
                                    })
                                }), G.jsx("div", {
                                    className: "relative flex justify-center text-xs uppercase",
                                    children: G.jsx("span", {
                                        className: "bg-white px-2 text-gray-500",
                                        children: "or"
                                    })
                                })]
                            }), G.jsx($l, {
                                onClick: async () => {
                                    try {
                                        const A = await window.ethereum.request({
                                            method: "eth_requestAccounts"
                                        });
                                        m(A[0])
                                    } catch (A) {
                                        h("Failed to connect wallet: " + A.message)
                                    }
                                },
                                className: "w-full bg-green-600 p-3 hover:bg-green-700 text-white",
                                disabled: a,
                                children: a ? "Connecting..." : "Connect Wallet"
                            }), d && G.jsx(I1, {
                                variant: "destructive",
                                children: G.jsx(R1, {
                                    children: d
                                })
                            })]
                        })]
                    }), t && Ad(t) && G.jsxs(Gi, {
                        className: "bg-white shadow-lg mt-6",
                        children: [G.jsx(tc, {
                            children: G.jsx(nc, {
                                className: "text-gray-900",
                                children: "Your Rewards"
                            })
                        }), G.jsx(Hi, {
                            className: "space-y-4",
                            children: G.jsxs("div", {
                                className: "grid grid-cols-1 gap-4",
                                children: [G.jsxs("div", {
                                    className: "p-4 bg-green-50 rounded-lg",
                                    children: [G.jsx("div", {
                                        className: "text-sm text-gray-600 mb-1",
                                        children: "Your Pending Rewards"
                                    }), G.jsxs("div", {
                                        className: "text-2xl font-bold text-green-600",
                                        children: ["$", o.personalPending, " USDC"]
                                    })]
                                }), G.jsxs("div", {
                                    className: "p-4 bg-blue-50 rounded-lg",
                                    children: [G.jsx("div", {
                                        className: "text-sm text-gray-600 mb-1",
                                        children: "Your Total Rewards Distributed"
                                    }), G.jsxs("div", {
                                        className: "text-2xl font-bold text-blue-600",
                                        children: ["$", o.personalDistributed, " USDC"]
                                    })]
                                })]
                            })
                        })]
                    })]
                }), i && G.jsx("div", {
                    className: "max-w-2xl mx-auto animate-fadeIn",
                    children: G.jsxs(Gi, {
                        className: "bg-white shadow-lg",
                        children: [G.jsx(tc, {
                            children: G.jsx(nc, {
                                className: "text-gray-900",
                                children: "Global Statistics"
                            })
                        }), G.jsx(Hi, {
                            className: "space-y-4",
                            children: G.jsxs("div", {
                                className: "grid grid-cols-1 gap-4",
                                children: [G.jsxs("div", {
                                    className: "p-4 bg-green-50 rounded-lg",
                                    children: [G.jsx("div", {
                                        className: "text-sm text-gray-600 mb-1",
                                        children: "Total Pending Rewards"
                                    }), G.jsxs("div", {
                                        className: "text-2xl font-bold text-green-600",
                                        children: ["$", o.totalPending, " USDC"]
                                    }), G.jsx("div", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: "Still accumulating! 🖨️"
                                    })]
                                }), G.jsxs("div", {
                                    className: "p-4 bg-blue-50 rounded-lg",
                                    children: [G.jsx("div", {
                                        className: "text-sm text-gray-600 mb-1",
                                        children: "Total Rewards Distributed"
                                    }), G.jsxs("div", {
                                        className: "text-2xl font-bold text-blue-600",
                                        children: ["$", o.totalDistributed, " USDC"]
                                    }), G.jsx("div", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: "Total rewards distributed so far! 💰"
                                    })]
                                })]
                            })
                        })]
                    })
                }), (n || i) && G.jsx(Gi, {
                    className: "bg-white shadow-lg max-w-2xl mx-auto",
                    children: G.jsx(Hi, {
                        className: "p-6",
                        children: G.jsxs("div", {
                            className: "text-center space-y-2",
                            children: [G.jsx("div", {
                                className: "text-blue-600 font-semibold",
                                children: "💰 PRINT MONEY with ATM! 💰"
                            }), G.jsx("div", {
                                className: "text-gray-600",
                                children: "🖨️ The more you hold, the more you earn! 🖨️"
                            }), G.jsx("div", {
                                className: "text-sm text-gray-500 mt-4",
                                children: "Auto-refreshing every 60 seconds"
                            }), a && G.jsx("div", {
                                className: "text-sm text-blue-600",
                                children: "Updating..."
                            })]
                        })
                    })
                })]
            })
        })
    };

function UC() {
    return G.jsx("div", {
        children: G.jsx(FC, {})
    })
}
Td.createRoot(document.getElementById("root")).render(G.jsx(Vv.StrictMode, {
    children: G.jsx(UC, {})
}));