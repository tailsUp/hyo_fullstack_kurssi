;(function () {
    const t = document.createElement('link').relList
    if (t && t.supports && t.supports('modulepreload')) return
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l)
    new MutationObserver((l) => {
        for (const o of l)
            if (o.type === 'childList')
                for (const i of o.addedNodes)
                    i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i)
    }).observe(document, { childList: !0, subtree: !0 })
    function n(l) {
        const o = {}
        return (
            l.integrity && (o.integrity = l.integrity),
            l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
            l.crossOrigin === 'use-credentials'
                ? (o.credentials = 'include')
                : l.crossOrigin === 'anonymous'
                  ? (o.credentials = 'omit')
                  : (o.credentials = 'same-origin'),
            o
        )
    }
    function r(l) {
        if (l.ep) return
        l.ep = !0
        const o = n(l)
        fetch(l.href, o)
    }
})()
function zf(e) {
    return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, 'default')
        ? e.default
        : e
}
var Xs = { exports: {} },
    Ol = {},
    Gs = { exports: {} },
    z = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mr = Symbol.for('react.element'),
    Bf = Symbol.for('react.portal'),
    Df = Symbol.for('react.fragment'),
    Af = Symbol.for('react.strict_mode'),
    Ff = Symbol.for('react.profiler'),
    If = Symbol.for('react.provider'),
    Uf = Symbol.for('react.context'),
    Mf = Symbol.for('react.forward_ref'),
    $f = Symbol.for('react.suspense'),
    Hf = Symbol.for('react.memo'),
    Vf = Symbol.for('react.lazy'),
    Lu = Symbol.iterator
function Wf(e) {
    return e === null || typeof e != 'object'
        ? null
        : ((e = (Lu && e[Lu]) || e['@@iterator']),
          typeof e == 'function' ? e : null)
}
var qs = {
        isMounted: function () {
            return !1
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Zs = Object.assign,
    bs = {}
function xn(e, t, n) {
    ;(this.props = e),
        (this.context = t),
        (this.refs = bs),
        (this.updater = n || qs)
}
xn.prototype.isReactComponent = {}
xn.prototype.setState = function (e, t) {
    if (typeof e != 'object' && typeof e != 'function' && e != null)
        throw Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        )
    this.updater.enqueueSetState(this, e, t, 'setState')
}
xn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function ea() {}
ea.prototype = xn.prototype
function Ti(e, t, n) {
    ;(this.props = e),
        (this.context = t),
        (this.refs = bs),
        (this.updater = n || qs)
}
var Ri = (Ti.prototype = new ea())
Ri.constructor = Ti
Zs(Ri, xn.prototype)
Ri.isPureReactComponent = !0
var Ou = Array.isArray,
    ta = Object.prototype.hasOwnProperty,
    Li = { current: null },
    na = { key: !0, ref: !0, __self: !0, __source: !0 }
function ra(e, t, n) {
    var r,
        l = {},
        o = null,
        i = null
    if (t != null)
        for (r in (t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (o = '' + t.key),
        t))
            ta.call(t, r) && !na.hasOwnProperty(r) && (l[r] = t[r])
    var u = arguments.length - 2
    if (u === 1) l.children = n
    else if (1 < u) {
        for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2]
        l.children = s
    }
    if (e && e.defaultProps)
        for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r])
    return {
        $$typeof: mr,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: Li.current,
    }
}
function Qf(e, t) {
    return {
        $$typeof: mr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    }
}
function Oi(e) {
    return typeof e == 'object' && e !== null && e.$$typeof === mr
}
function Kf(e) {
    var t = { '=': '=0', ':': '=2' }
    return (
        '$' +
        e.replace(/[=:]/g, function (n) {
            return t[n]
        })
    )
}
var ju = /\/+/g
function eo(e, t) {
    return typeof e == 'object' && e !== null && e.key != null
        ? Kf('' + e.key)
        : t.toString(36)
}
function Vr(e, t, n, r, l) {
    var o = typeof e
    ;(o === 'undefined' || o === 'boolean') && (e = null)
    var i = !1
    if (e === null) i = !0
    else
        switch (o) {
            case 'string':
            case 'number':
                i = !0
                break
            case 'object':
                switch (e.$$typeof) {
                    case mr:
                    case Bf:
                        i = !0
                }
        }
    if (i)
        return (
            (i = e),
            (l = l(i)),
            (e = r === '' ? '.' + eo(i, 0) : r),
            Ou(l)
                ? ((n = ''),
                  e != null && (n = e.replace(ju, '$&/') + '/'),
                  Vr(l, t, n, '', function (a) {
                      return a
                  }))
                : l != null &&
                  (Oi(l) &&
                      (l = Qf(
                          l,
                          n +
                              (!l.key || (i && i.key === l.key)
                                  ? ''
                                  : ('' + l.key).replace(ju, '$&/') + '/') +
                              e
                      )),
                  t.push(l)),
            1
        )
    if (((i = 0), (r = r === '' ? '.' : r + ':'), Ou(e)))
        for (var u = 0; u < e.length; u++) {
            o = e[u]
            var s = r + eo(o, u)
            i += Vr(o, t, n, s, l)
        }
    else if (((s = Wf(e)), typeof s == 'function'))
        for (e = s.call(e), u = 0; !(o = e.next()).done; )
            (o = o.value), (s = r + eo(o, u++)), (i += Vr(o, t, n, s, l))
    else if (o === 'object')
        throw (
            ((t = String(e)),
            Error(
                'Objects are not valid as a React child (found: ' +
                    (t === '[object Object]'
                        ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                        : t) +
                    '). If you meant to render a collection of children, use an array instead.'
            ))
        )
    return i
}
function Nr(e, t, n) {
    if (e == null) return e
    var r = [],
        l = 0
    return (
        Vr(e, r, '', '', function (o) {
            return t.call(n, o, l++)
        }),
        r
    )
}
function Yf(e) {
    if (e._status === -1) {
        var t = e._result
        ;(t = t()),
            t.then(
                function (n) {
                    ;(e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = n))
                },
                function (n) {
                    ;(e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = n))
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t))
    }
    if (e._status === 1) return e._result.default
    throw e._result
}
var he = { current: null },
    Wr = { transition: null },
    Jf = {
        ReactCurrentDispatcher: he,
        ReactCurrentBatchConfig: Wr,
        ReactCurrentOwner: Li,
    }
z.Children = {
    map: Nr,
    forEach: function (e, t, n) {
        Nr(
            e,
            function () {
                t.apply(this, arguments)
            },
            n
        )
    },
    count: function (e) {
        var t = 0
        return (
            Nr(e, function () {
                t++
            }),
            t
        )
    },
    toArray: function (e) {
        return (
            Nr(e, function (t) {
                return t
            }) || []
        )
    },
    only: function (e) {
        if (!Oi(e))
            throw Error(
                'React.Children.only expected to receive a single React element child.'
            )
        return e
    },
}
z.Component = xn
z.Fragment = Df
z.Profiler = Ff
z.PureComponent = Ti
z.StrictMode = Af
z.Suspense = $f
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jf
z.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            'React.cloneElement(...): The argument must be a React element, but you passed ' +
                e +
                '.'
        )
    var r = Zs({}, e.props),
        l = e.key,
        o = e.ref,
        i = e._owner
    if (t != null) {
        if (
            (t.ref !== void 0 && ((o = t.ref), (i = Li.current)),
            t.key !== void 0 && (l = '' + t.key),
            e.type && e.type.defaultProps)
        )
            var u = e.type.defaultProps
        for (s in t)
            ta.call(t, s) &&
                !na.hasOwnProperty(s) &&
                (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s])
    }
    var s = arguments.length - 2
    if (s === 1) r.children = n
    else if (1 < s) {
        u = Array(s)
        for (var a = 0; a < s; a++) u[a] = arguments[a + 2]
        r.children = u
    }
    return { $$typeof: mr, type: e.type, key: l, ref: o, props: r, _owner: i }
}
z.createContext = function (e) {
    return (
        (e = {
            $$typeof: Uf,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: If, _context: e }),
        (e.Consumer = e)
    )
}
z.createElement = ra
z.createFactory = function (e) {
    var t = ra.bind(null, e)
    return (t.type = e), t
}
z.createRef = function () {
    return { current: null }
}
z.forwardRef = function (e) {
    return { $$typeof: Mf, render: e }
}
z.isValidElement = Oi
z.lazy = function (e) {
    return { $$typeof: Vf, _payload: { _status: -1, _result: e }, _init: Yf }
}
z.memo = function (e, t) {
    return { $$typeof: Hf, type: e, compare: t === void 0 ? null : t }
}
z.startTransition = function (e) {
    var t = Wr.transition
    Wr.transition = {}
    try {
        e()
    } finally {
        Wr.transition = t
    }
}
z.unstable_act = function () {
    throw Error('act(...) is not supported in production builds of React.')
}
z.useCallback = function (e, t) {
    return he.current.useCallback(e, t)
}
z.useContext = function (e) {
    return he.current.useContext(e)
}
z.useDebugValue = function () {}
z.useDeferredValue = function (e) {
    return he.current.useDeferredValue(e)
}
z.useEffect = function (e, t) {
    return he.current.useEffect(e, t)
}
z.useId = function () {
    return he.current.useId()
}
z.useImperativeHandle = function (e, t, n) {
    return he.current.useImperativeHandle(e, t, n)
}
z.useInsertionEffect = function (e, t) {
    return he.current.useInsertionEffect(e, t)
}
z.useLayoutEffect = function (e, t) {
    return he.current.useLayoutEffect(e, t)
}
z.useMemo = function (e, t) {
    return he.current.useMemo(e, t)
}
z.useReducer = function (e, t, n) {
    return he.current.useReducer(e, t, n)
}
z.useRef = function (e) {
    return he.current.useRef(e)
}
z.useState = function (e) {
    return he.current.useState(e)
}
z.useSyncExternalStore = function (e, t, n) {
    return he.current.useSyncExternalStore(e, t, n)
}
z.useTransition = function () {
    return he.current.useTransition()
}
z.version = '18.2.0'
Gs.exports = z
var te = Gs.exports
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xf = te,
    Gf = Symbol.for('react.element'),
    qf = Symbol.for('react.fragment'),
    Zf = Object.prototype.hasOwnProperty,
    bf =
        Xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    ed = { key: !0, ref: !0, __self: !0, __source: !0 }
function la(e, t, n) {
    var r,
        l = {},
        o = null,
        i = null
    n !== void 0 && (o = '' + n),
        t.key !== void 0 && (o = '' + t.key),
        t.ref !== void 0 && (i = t.ref)
    for (r in t) Zf.call(t, r) && !ed.hasOwnProperty(r) && (l[r] = t[r])
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r])
    return {
        $$typeof: Gf,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: bf.current,
    }
}
Ol.Fragment = qf
Ol.jsx = la
Ol.jsxs = la
Xs.exports = Ol
var w = Xs.exports,
    Oo = {},
    oa = { exports: {} },
    _e = {},
    ia = { exports: {} },
    ua = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
    function t(x, R) {
        var O = x.length
        x.push(R)
        e: for (; 0 < O; ) {
            var Y = (O - 1) >>> 1,
                ee = x[Y]
            if (0 < l(ee, R)) (x[Y] = R), (x[O] = ee), (O = Y)
            else break e
        }
    }
    function n(x) {
        return x.length === 0 ? null : x[0]
    }
    function r(x) {
        if (x.length === 0) return null
        var R = x[0],
            O = x.pop()
        if (O !== R) {
            x[0] = O
            e: for (var Y = 0, ee = x.length, Cr = ee >>> 1; Y < Cr; ) {
                var Ot = 2 * (Y + 1) - 1,
                    bl = x[Ot],
                    jt = Ot + 1,
                    _r = x[jt]
                if (0 > l(bl, O))
                    jt < ee && 0 > l(_r, bl)
                        ? ((x[Y] = _r), (x[jt] = O), (Y = jt))
                        : ((x[Y] = bl), (x[Ot] = O), (Y = Ot))
                else if (jt < ee && 0 > l(_r, O))
                    (x[Y] = _r), (x[jt] = O), (Y = jt)
                else break e
            }
        }
        return R
    }
    function l(x, R) {
        var O = x.sortIndex - R.sortIndex
        return O !== 0 ? O : x.id - R.id
    }
    if (
        typeof performance == 'object' &&
        typeof performance.now == 'function'
    ) {
        var o = performance
        e.unstable_now = function () {
            return o.now()
        }
    } else {
        var i = Date,
            u = i.now()
        e.unstable_now = function () {
            return i.now() - u
        }
    }
    var s = [],
        a = [],
        p = 1,
        h = null,
        m = 3,
        S = !1,
        y = !1,
        v = !1,
        j = typeof setTimeout == 'function' ? setTimeout : null,
        f = typeof clearTimeout == 'function' ? clearTimeout : null,
        c = typeof setImmediate < 'u' ? setImmediate : null
    typeof navigator < 'u' &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling)
    function d(x) {
        for (var R = n(a); R !== null; ) {
            if (R.callback === null) r(a)
            else if (R.startTime <= x)
                r(a), (R.sortIndex = R.expirationTime), t(s, R)
            else break
            R = n(a)
        }
    }
    function k(x) {
        if (((v = !1), d(x), !y))
            if (n(s) !== null) (y = !0), X(C)
            else {
                var R = n(a)
                R !== null && Be(k, R.startTime - x)
            }
    }
    function C(x, R) {
        ;(y = !1), v && ((v = !1), f(T), (T = -1)), (S = !0)
        var O = m
        try {
            for (
                d(R), h = n(s);
                h !== null && (!(h.expirationTime > R) || (x && !le()));

            ) {
                var Y = h.callback
                if (typeof Y == 'function') {
                    ;(h.callback = null), (m = h.priorityLevel)
                    var ee = Y(h.expirationTime <= R)
                    ;(R = e.unstable_now()),
                        typeof ee == 'function'
                            ? (h.callback = ee)
                            : h === n(s) && r(s),
                        d(R)
                } else r(s)
                h = n(s)
            }
            if (h !== null) var Cr = !0
            else {
                var Ot = n(a)
                Ot !== null && Be(k, Ot.startTime - R), (Cr = !1)
            }
            return Cr
        } finally {
            ;(h = null), (m = O), (S = !1)
        }
    }
    var N = !1,
        P = null,
        T = -1,
        H = 5,
        L = -1
    function le() {
        return !(e.unstable_now() - L < H)
    }
    function ut() {
        if (P !== null) {
            var x = e.unstable_now()
            L = x
            var R = !0
            try {
                R = P(!0, x)
            } finally {
                R ? st() : ((N = !1), (P = null))
            }
        } else N = !1
    }
    var st
    if (typeof c == 'function')
        st = function () {
            c(ut)
        }
    else if (typeof MessageChannel < 'u') {
        var xr = new MessageChannel(),
            F = xr.port2
        ;(xr.port1.onmessage = ut),
            (st = function () {
                F.postMessage(null)
            })
    } else
        st = function () {
            j(ut, 0)
        }
    function X(x) {
        ;(P = x), N || ((N = !0), st())
    }
    function Be(x, R) {
        T = j(function () {
            x(e.unstable_now())
        }, R)
    }
    ;(e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (x) {
            x.callback = null
        }),
        (e.unstable_continueExecution = function () {
            y || S || ((y = !0), X(C))
        }),
        (e.unstable_forceFrameRate = function (x) {
            0 > x || 125 < x
                ? console.error(
                      'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                  )
                : (H = 0 < x ? Math.floor(1e3 / x) : 5)
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return m
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(s)
        }),
        (e.unstable_next = function (x) {
            switch (m) {
                case 1:
                case 2:
                case 3:
                    var R = 3
                    break
                default:
                    R = m
            }
            var O = m
            m = R
            try {
                return x()
            } finally {
                m = O
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (x, R) {
            switch (x) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break
                default:
                    x = 3
            }
            var O = m
            m = x
            try {
                return R()
            } finally {
                m = O
            }
        }),
        (e.unstable_scheduleCallback = function (x, R, O) {
            var Y = e.unstable_now()
            switch (
                (typeof O == 'object' && O !== null
                    ? ((O = O.delay),
                      (O = typeof O == 'number' && 0 < O ? Y + O : Y))
                    : (O = Y),
                x)
            ) {
                case 1:
                    var ee = -1
                    break
                case 2:
                    ee = 250
                    break
                case 5:
                    ee = 1073741823
                    break
                case 4:
                    ee = 1e4
                    break
                default:
                    ee = 5e3
            }
            return (
                (ee = O + ee),
                (x = {
                    id: p++,
                    callback: R,
                    priorityLevel: x,
                    startTime: O,
                    expirationTime: ee,
                    sortIndex: -1,
                }),
                O > Y
                    ? ((x.sortIndex = O),
                      t(a, x),
                      n(s) === null &&
                          x === n(a) &&
                          (v ? (f(T), (T = -1)) : (v = !0), Be(k, O - Y)))
                    : ((x.sortIndex = ee), t(s, x), y || S || ((y = !0), X(C))),
                x
            )
        }),
        (e.unstable_shouldYield = le),
        (e.unstable_wrapCallback = function (x) {
            var R = m
            return function () {
                var O = m
                m = R
                try {
                    return x.apply(this, arguments)
                } finally {
                    m = O
                }
            }
        })
})(ua)
ia.exports = ua
var td = ia.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sa = te,
    Ce = td
function E(e) {
    for (
        var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
            n = 1;
        n < arguments.length;
        n++
    )
        t += '&args[]=' + encodeURIComponent(arguments[n])
    return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
}
var aa = new Set(),
    Gn = {}
function Yt(e, t) {
    mn(e, t), mn(e + 'Capture', t)
}
function mn(e, t) {
    for (Gn[e] = t, e = 0; e < t.length; e++) aa.add(t[e])
}
var nt = !(
        typeof window > 'u' ||
        typeof window.document > 'u' ||
        typeof window.document.createElement > 'u'
    ),
    jo = Object.prototype.hasOwnProperty,
    nd =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    zu = {},
    Bu = {}
function rd(e) {
    return jo.call(Bu, e)
        ? !0
        : jo.call(zu, e)
          ? !1
          : nd.test(e)
            ? (Bu[e] = !0)
            : ((zu[e] = !0), !1)
}
function ld(e, t, n, r) {
    if (n !== null && n.type === 0) return !1
    switch (typeof t) {
        case 'function':
        case 'symbol':
            return !0
        case 'boolean':
            return r
                ? !1
                : n !== null
                  ? !n.acceptsBooleans
                  : ((e = e.toLowerCase().slice(0, 5)),
                    e !== 'data-' && e !== 'aria-')
        default:
            return !1
    }
}
function od(e, t, n, r) {
    if (t === null || typeof t > 'u' || ld(e, t, n, r)) return !0
    if (r) return !1
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t
            case 4:
                return t === !1
            case 5:
                return isNaN(t)
            case 6:
                return isNaN(t) || 1 > t
        }
    return !1
}
function me(e, t, n, r, l, o, i) {
    ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = l),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = o),
        (this.removeEmptyString = i)
}
var ue = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
        ue[e] = new me(e, 0, !1, e, null, !1, !1)
    })
;[
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
    var t = e[0]
    ue[t] = new me(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
    ue[e] = new me(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
    'autoReverse',
    'externalResourcesRequired',
    'focusable',
    'preserveAlpha',
].forEach(function (e) {
    ue[e] = new me(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (e) {
        ue[e] = new me(e, 3, !1, e.toLowerCase(), null, !1, !1)
    })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
    ue[e] = new me(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
    ue[e] = new me(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
    ue[e] = new me(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
    ue[e] = new me(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var ji = /[\-:]([a-z])/g
function zi(e) {
    return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
        var t = e.replace(ji, zi)
        ue[t] = new me(t, 1, !1, e, null, !1, !1)
    })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (e) {
        var t = e.replace(ji, zi)
        ue[t] = new me(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
    })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var t = e.replace(ji, zi)
    ue[t] = new me(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
    ue[e] = new me(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
ue.xlinkHref = new me(
    'xlinkHref',
    1,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
    ue[e] = new me(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Bi(e, t, n, r) {
    var l = ue.hasOwnProperty(t) ? ue[t] : null
    ;(l !== null
        ? l.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== 'o' && t[0] !== 'O') ||
          (t[1] !== 'n' && t[1] !== 'N')) &&
        (od(t, n, l, r) && (n = null),
        r || l === null
            ? rd(t) &&
              (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
            : l.mustUseProperty
              ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
              : ((t = l.attributeName),
                (r = l.attributeNamespace),
                n === null
                    ? e.removeAttribute(t)
                    : ((l = l.type),
                      (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var it = sa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Pr = Symbol.for('react.element'),
    Gt = Symbol.for('react.portal'),
    qt = Symbol.for('react.fragment'),
    Di = Symbol.for('react.strict_mode'),
    zo = Symbol.for('react.profiler'),
    ca = Symbol.for('react.provider'),
    fa = Symbol.for('react.context'),
    Ai = Symbol.for('react.forward_ref'),
    Bo = Symbol.for('react.suspense'),
    Do = Symbol.for('react.suspense_list'),
    Fi = Symbol.for('react.memo'),
    ft = Symbol.for('react.lazy'),
    da = Symbol.for('react.offscreen'),
    Du = Symbol.iterator
function Pn(e) {
    return e === null || typeof e != 'object'
        ? null
        : ((e = (Du && e[Du]) || e['@@iterator']),
          typeof e == 'function' ? e : null)
}
var Q = Object.assign,
    to
function Fn(e) {
    if (to === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/)
            to = (t && t[1]) || ''
        }
    return (
        `
` +
        to +
        e
    )
}
var no = !1
function ro(e, t) {
    if (!e || no) return ''
    no = !0
    var n = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error()
                }),
                Object.defineProperty(t.prototype, 'props', {
                    set: function () {
                        throw Error()
                    },
                }),
                typeof Reflect == 'object' && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, [])
                } catch (a) {
                    var r = a
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (a) {
                    r = a
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (a) {
                r = a
            }
            e()
        }
    } catch (a) {
        if (a && r && typeof a.stack == 'string') {
            for (
                var l = a.stack.split(`
`),
                    o = r.stack.split(`
`),
                    i = l.length - 1,
                    u = o.length - 1;
                1 <= i && 0 <= u && l[i] !== o[u];

            )
                u--
            for (; 1 <= i && 0 <= u; i--, u--)
                if (l[i] !== o[u]) {
                    if (i !== 1 || u !== 1)
                        do
                            if ((i--, u--, 0 > u || l[i] !== o[u])) {
                                var s =
                                    `
` + l[i].replace(' at new ', ' at ')
                                return (
                                    e.displayName &&
                                        s.includes('<anonymous>') &&
                                        (s = s.replace(
                                            '<anonymous>',
                                            e.displayName
                                        )),
                                    s
                                )
                            }
                        while (1 <= i && 0 <= u)
                    break
                }
        }
    } finally {
        ;(no = !1), (Error.prepareStackTrace = n)
    }
    return (e = e ? e.displayName || e.name : '') ? Fn(e) : ''
}
function id(e) {
    switch (e.tag) {
        case 5:
            return Fn(e.type)
        case 16:
            return Fn('Lazy')
        case 13:
            return Fn('Suspense')
        case 19:
            return Fn('SuspenseList')
        case 0:
        case 2:
        case 15:
            return (e = ro(e.type, !1)), e
        case 11:
            return (e = ro(e.type.render, !1)), e
        case 1:
            return (e = ro(e.type, !0)), e
        default:
            return ''
    }
}
function Ao(e) {
    if (e == null) return null
    if (typeof e == 'function') return e.displayName || e.name || null
    if (typeof e == 'string') return e
    switch (e) {
        case qt:
            return 'Fragment'
        case Gt:
            return 'Portal'
        case zo:
            return 'Profiler'
        case Di:
            return 'StrictMode'
        case Bo:
            return 'Suspense'
        case Do:
            return 'SuspenseList'
    }
    if (typeof e == 'object')
        switch (e.$$typeof) {
            case fa:
                return (e.displayName || 'Context') + '.Consumer'
            case ca:
                return (e._context.displayName || 'Context') + '.Provider'
            case Ai:
                var t = e.render
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ''),
                        (e =
                            e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
                    e
                )
            case Fi:
                return (
                    (t = e.displayName || null),
                    t !== null ? t : Ao(e.type) || 'Memo'
                )
            case ft:
                ;(t = e._payload), (e = e._init)
                try {
                    return Ao(e(t))
                } catch {}
        }
    return null
}
function ud(e) {
    var t = e.type
    switch (e.tag) {
        case 24:
            return 'Cache'
        case 9:
            return (t.displayName || 'Context') + '.Consumer'
        case 10:
            return (t._context.displayName || 'Context') + '.Provider'
        case 18:
            return 'DehydratedFragment'
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ''),
                t.displayName ||
                    (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
            )
        case 7:
            return 'Fragment'
        case 5:
            return t
        case 4:
            return 'Portal'
        case 3:
            return 'Root'
        case 6:
            return 'Text'
        case 16:
            return Ao(t)
        case 8:
            return t === Di ? 'StrictMode' : 'Mode'
        case 22:
            return 'Offscreen'
        case 12:
            return 'Profiler'
        case 21:
            return 'Scope'
        case 13:
            return 'Suspense'
        case 19:
            return 'SuspenseList'
        case 25:
            return 'TracingMarker'
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == 'function') return t.displayName || t.name || null
            if (typeof t == 'string') return t
    }
    return null
}
function _t(e) {
    switch (typeof e) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
            return e
        case 'object':
            return e
        default:
            return ''
    }
}
function pa(e) {
    var t = e.type
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === 'input' &&
        (t === 'checkbox' || t === 'radio')
    )
}
function sd(e) {
    var t = pa(e) ? 'checked' : 'value',
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = '' + e[t]
    if (
        !e.hasOwnProperty(t) &&
        typeof n < 'u' &&
        typeof n.get == 'function' &&
        typeof n.set == 'function'
    ) {
        var l = n.get,
            o = n.set
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return l.call(this)
                },
                set: function (i) {
                    ;(r = '' + i), o.call(this, i)
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r
                },
                setValue: function (i) {
                    r = '' + i
                },
                stopTracking: function () {
                    ;(e._valueTracker = null), delete e[t]
                },
            }
        )
    }
}
function Tr(e) {
    e._valueTracker || (e._valueTracker = sd(e))
}
function ha(e) {
    if (!e) return !1
    var t = e._valueTracker
    if (!t) return !0
    var n = t.getValue(),
        r = ''
    return (
        e && (r = pa(e) ? (e.checked ? 'true' : 'false') : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    )
}
function ol(e) {
    if (
        ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
        return null
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Fo(e, t) {
    var n = t.checked
    return Q({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    })
}
function Au(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked
    ;(n = _t(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === 'checkbox' || t.type === 'radio'
                    ? t.checked != null
                    : t.value != null,
        })
}
function ma(e, t) {
    ;(t = t.checked), t != null && Bi(e, 'checked', t, !1)
}
function Io(e, t) {
    ma(e, t)
    var n = _t(t.value),
        r = t.type
    if (n != null)
        r === 'number'
            ? ((n === 0 && e.value === '') || e.value != n) &&
              (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n)
    else if (r === 'submit' || r === 'reset') {
        e.removeAttribute('value')
        return
    }
    t.hasOwnProperty('value')
        ? Uo(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && Uo(e, t.type, _t(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked)
}
function Fu(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type
        if (
            !(
                (r !== 'submit' && r !== 'reset') ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return
        ;(t = '' + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t)
    }
    ;(n = e.name),
        n !== '' && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== '' && (e.name = n)
}
function Uo(e, t, n) {
    ;(t !== 'number' || ol(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var In = Array.isArray
function an(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {}
        for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0
        for (n = 0; n < e.length; n++)
            (l = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== l && (e[n].selected = l),
                l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = '' + _t(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                ;(e[l].selected = !0), r && (e[l].defaultSelected = !0)
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}
function Mo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(E(91))
    return Q({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: '' + e._wrapperState.initialValue,
    })
}
function Iu(e, t) {
    var n = t.value
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(E(92))
            if (In(n)) {
                if (1 < n.length) throw Error(E(93))
                n = n[0]
            }
            t = n
        }
        t == null && (t = ''), (n = t)
    }
    e._wrapperState = { initialValue: _t(n) }
}
function ya(e, t) {
    var n = _t(t.value),
        r = _t(t.defaultValue)
    n != null &&
        ((n = '' + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = '' + r)
}
function Uu(e) {
    var t = e.textContent
    t === e._wrapperState.initialValue &&
        t !== '' &&
        t !== null &&
        (e.value = t)
}
function ga(e) {
    switch (e) {
        case 'svg':
            return 'http://www.w3.org/2000/svg'
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML'
        default:
            return 'http://www.w3.org/1999/xhtml'
    }
}
function $o(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
        ? ga(t)
        : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
          ? 'http://www.w3.org/1999/xhtml'
          : e
}
var Rr,
    va = (function (e) {
        return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, l) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, l)
                  })
              }
            : e
    })(function (e, t) {
        if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
            e.innerHTML = t
        else {
            for (
                Rr = Rr || document.createElement('div'),
                    Rr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                    t = Rr.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild)
            for (; t.firstChild; ) e.appendChild(t.firstChild)
        }
    })
function qn(e, t) {
    if (t) {
        var n = e.firstChild
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t
            return
        }
    }
    e.textContent = t
}
var $n = {
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
        strokeWidth: !0,
    },
    ad = ['Webkit', 'ms', 'Moz', 'O']
Object.keys($n).forEach(function (e) {
    ad.forEach(function (t) {
        ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($n[t] = $n[e])
    })
})
function wa(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
        ? ''
        : n ||
            typeof t != 'number' ||
            t === 0 ||
            ($n.hasOwnProperty(e) && $n[e])
          ? ('' + t).trim()
          : t + 'px'
}
function Sa(e, t) {
    e = e.style
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf('--') === 0,
                l = wa(n, t[n], r)
            n === 'float' && (n = 'cssFloat'),
                r ? e.setProperty(n, l) : (e[n] = l)
        }
}
var cd = Q(
    { menuitem: !0 },
    {
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
        wbr: !0,
    }
)
function Ho(e, t) {
    if (t) {
        if (cd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(E(137, e))
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(E(60))
            if (
                typeof t.dangerouslySetInnerHTML != 'object' ||
                !('__html' in t.dangerouslySetInnerHTML)
            )
                throw Error(E(61))
        }
        if (t.style != null && typeof t.style != 'object') throw Error(E(62))
    }
}
function Vo(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string'
    switch (e) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
            return !1
        default:
            return !0
    }
}
var Wo = null
function Ii(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    )
}
var Qo = null,
    cn = null,
    fn = null
function Mu(e) {
    if ((e = vr(e))) {
        if (typeof Qo != 'function') throw Error(E(280))
        var t = e.stateNode
        t && ((t = Al(t)), Qo(e.stateNode, e.type, t))
    }
}
function ka(e) {
    cn ? (fn ? fn.push(e) : (fn = [e])) : (cn = e)
}
function Ea() {
    if (cn) {
        var e = cn,
            t = fn
        if (((fn = cn = null), Mu(e), t))
            for (e = 0; e < t.length; e++) Mu(t[e])
    }
}
function xa(e, t) {
    return e(t)
}
function Ca() {}
var lo = !1
function _a(e, t, n) {
    if (lo) return e(t, n)
    lo = !0
    try {
        return xa(e, t, n)
    } finally {
        ;(lo = !1), (cn !== null || fn !== null) && (Ca(), Ea())
    }
}
function Zn(e, t) {
    var n = e.stateNode
    if (n === null) return null
    var r = Al(n)
    if (r === null) return null
    n = r[t]
    e: switch (t) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
            ;(r = !r.disabled) ||
                ((e = e.type),
                (r = !(
                    e === 'button' ||
                    e === 'input' ||
                    e === 'select' ||
                    e === 'textarea'
                ))),
                (e = !r)
            break e
        default:
            e = !1
    }
    if (e) return null
    if (n && typeof n != 'function') throw Error(E(231, t, typeof n))
    return n
}
var Ko = !1
if (nt)
    try {
        var Tn = {}
        Object.defineProperty(Tn, 'passive', {
            get: function () {
                Ko = !0
            },
        }),
            window.addEventListener('test', Tn, Tn),
            window.removeEventListener('test', Tn, Tn)
    } catch {
        Ko = !1
    }
function fd(e, t, n, r, l, o, i, u, s) {
    var a = Array.prototype.slice.call(arguments, 3)
    try {
        t.apply(n, a)
    } catch (p) {
        this.onError(p)
    }
}
var Hn = !1,
    il = null,
    ul = !1,
    Yo = null,
    dd = {
        onError: function (e) {
            ;(Hn = !0), (il = e)
        },
    }
function pd(e, t, n, r, l, o, i, u, s) {
    ;(Hn = !1), (il = null), fd.apply(dd, arguments)
}
function hd(e, t, n, r, l, o, i, u, s) {
    if ((pd.apply(this, arguments), Hn)) {
        if (Hn) {
            var a = il
            ;(Hn = !1), (il = null)
        } else throw Error(E(198))
        ul || ((ul = !0), (Yo = a))
    }
}
function Jt(e) {
    var t = e,
        n = e
    if (e.alternate) for (; t.return; ) t = t.return
    else {
        e = t
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Na(e) {
    if (e.tag === 13) {
        var t = e.memoizedState
        if (
            (t === null &&
                ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated
    }
    return null
}
function $u(e) {
    if (Jt(e) !== e) throw Error(E(188))
}
function md(e) {
    var t = e.alternate
    if (!t) {
        if (((t = Jt(e)), t === null)) throw Error(E(188))
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var l = n.return
        if (l === null) break
        var o = l.alternate
        if (o === null) {
            if (((r = l.return), r !== null)) {
                n = r
                continue
            }
            break
        }
        if (l.child === o.child) {
            for (o = l.child; o; ) {
                if (o === n) return $u(l), e
                if (o === r) return $u(l), t
                o = o.sibling
            }
            throw Error(E(188))
        }
        if (n.return !== r.return) (n = l), (r = o)
        else {
            for (var i = !1, u = l.child; u; ) {
                if (u === n) {
                    ;(i = !0), (n = l), (r = o)
                    break
                }
                if (u === r) {
                    ;(i = !0), (r = l), (n = o)
                    break
                }
                u = u.sibling
            }
            if (!i) {
                for (u = o.child; u; ) {
                    if (u === n) {
                        ;(i = !0), (n = o), (r = l)
                        break
                    }
                    if (u === r) {
                        ;(i = !0), (r = o), (n = l)
                        break
                    }
                    u = u.sibling
                }
                if (!i) throw Error(E(189))
            }
        }
        if (n.alternate !== r) throw Error(E(190))
    }
    if (n.tag !== 3) throw Error(E(188))
    return n.stateNode.current === n ? e : t
}
function Pa(e) {
    return (e = md(e)), e !== null ? Ta(e) : null
}
function Ta(e) {
    if (e.tag === 5 || e.tag === 6) return e
    for (e = e.child; e !== null; ) {
        var t = Ta(e)
        if (t !== null) return t
        e = e.sibling
    }
    return null
}
var Ra = Ce.unstable_scheduleCallback,
    Hu = Ce.unstable_cancelCallback,
    yd = Ce.unstable_shouldYield,
    gd = Ce.unstable_requestPaint,
    J = Ce.unstable_now,
    vd = Ce.unstable_getCurrentPriorityLevel,
    Ui = Ce.unstable_ImmediatePriority,
    La = Ce.unstable_UserBlockingPriority,
    sl = Ce.unstable_NormalPriority,
    wd = Ce.unstable_LowPriority,
    Oa = Ce.unstable_IdlePriority,
    jl = null,
    Ke = null
function Sd(e) {
    if (Ke && typeof Ke.onCommitFiberRoot == 'function')
        try {
            Ke.onCommitFiberRoot(jl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Ue = Math.clz32 ? Math.clz32 : xd,
    kd = Math.log,
    Ed = Math.LN2
function xd(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((kd(e) / Ed) | 0)) | 0
}
var Lr = 64,
    Or = 4194304
function Un(e) {
    switch (e & -e) {
        case 1:
            return 1
        case 2:
            return 2
        case 4:
            return 4
        case 8:
            return 8
        case 16:
            return 16
        case 32:
            return 32
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
            return e & 4194240
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424
        case 134217728:
            return 134217728
        case 268435456:
            return 268435456
        case 536870912:
            return 536870912
        case 1073741824:
            return 1073741824
        default:
            return e
    }
}
function al(e, t) {
    var n = e.pendingLanes
    if (n === 0) return 0
    var r = 0,
        l = e.suspendedLanes,
        o = e.pingedLanes,
        i = n & 268435455
    if (i !== 0) {
        var u = i & ~l
        u !== 0 ? (r = Un(u)) : ((o &= i), o !== 0 && (r = Un(o)))
    } else (i = n & ~l), i !== 0 ? (r = Un(i)) : o !== 0 && (r = Un(o))
    if (r === 0) return 0
    if (
        t !== 0 &&
        t !== r &&
        !(t & l) &&
        ((l = r & -r),
        (o = t & -t),
        l >= o || (l === 16 && (o & 4194240) !== 0))
    )
        return t
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
            (n = 31 - Ue(t)), (l = 1 << n), (r |= e[n]), (t &= ~l)
    return r
}
function Cd(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250
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
            return t + 5e3
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1
        default:
            return -1
    }
}
function _d(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            l = e.expirationTimes,
            o = e.pendingLanes;
        0 < o;

    ) {
        var i = 31 - Ue(o),
            u = 1 << i,
            s = l[i]
        s === -1
            ? (!(u & n) || u & r) && (l[i] = Cd(u, t))
            : s <= t && (e.expiredLanes |= u),
            (o &= ~u)
    }
}
function Jo(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    )
}
function ja() {
    var e = Lr
    return (Lr <<= 1), !(Lr & 4194240) && (Lr = 64), e
}
function oo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e)
    return t
}
function yr(e, t, n) {
    ;(e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Ue(t)),
        (e[t] = n)
}
function Nd(e, t) {
    var n = e.pendingLanes & ~t
    ;(e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements)
    var r = e.eventTimes
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - Ue(n),
            o = 1 << l
        ;(t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o)
    }
}
function Mi(e, t) {
    var n = (e.entangledLanes |= t)
    for (e = e.entanglements; n; ) {
        var r = 31 - Ue(n),
            l = 1 << r
        ;(l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l)
    }
}
var A = 0
function za(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var Ba,
    $i,
    Da,
    Aa,
    Fa,
    Xo = !1,
    jr = [],
    gt = null,
    vt = null,
    wt = null,
    bn = new Map(),
    er = new Map(),
    pt = [],
    Pd =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' '
        )
function Vu(e, t) {
    switch (e) {
        case 'focusin':
        case 'focusout':
            gt = null
            break
        case 'dragenter':
        case 'dragleave':
            vt = null
            break
        case 'mouseover':
        case 'mouseout':
            wt = null
            break
        case 'pointerover':
        case 'pointerout':
            bn.delete(t.pointerId)
            break
        case 'gotpointercapture':
        case 'lostpointercapture':
            er.delete(t.pointerId)
    }
}
function Rn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: o,
              targetContainers: [l],
          }),
          t !== null && ((t = vr(t)), t !== null && $i(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          l !== null && t.indexOf(l) === -1 && t.push(l),
          e)
}
function Td(e, t, n, r, l) {
    switch (t) {
        case 'focusin':
            return (gt = Rn(gt, e, t, n, r, l)), !0
        case 'dragenter':
            return (vt = Rn(vt, e, t, n, r, l)), !0
        case 'mouseover':
            return (wt = Rn(wt, e, t, n, r, l)), !0
        case 'pointerover':
            var o = l.pointerId
            return bn.set(o, Rn(bn.get(o) || null, e, t, n, r, l)), !0
        case 'gotpointercapture':
            return (
                (o = l.pointerId),
                er.set(o, Rn(er.get(o) || null, e, t, n, r, l)),
                !0
            )
    }
    return !1
}
function Ia(e) {
    var t = Ft(e.target)
    if (t !== null) {
        var n = Jt(t)
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = Na(n)), t !== null)) {
                    ;(e.blockedOn = t),
                        Fa(e.priority, function () {
                            Da(n)
                        })
                    return
                }
            } else if (
                t === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
                return
            }
        }
    }
    e.blockedOn = null
}
function Qr(e) {
    if (e.blockedOn !== null) return !1
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Go(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
        if (n === null) {
            n = e.nativeEvent
            var r = new n.constructor(n.type, n)
            ;(Wo = r), n.target.dispatchEvent(r), (Wo = null)
        } else return (t = vr(n)), t !== null && $i(t), (e.blockedOn = n), !1
        t.shift()
    }
    return !0
}
function Wu(e, t, n) {
    Qr(e) && n.delete(t)
}
function Rd() {
    ;(Xo = !1),
        gt !== null && Qr(gt) && (gt = null),
        vt !== null && Qr(vt) && (vt = null),
        wt !== null && Qr(wt) && (wt = null),
        bn.forEach(Wu),
        er.forEach(Wu)
}
function Ln(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        Xo ||
            ((Xo = !0),
            Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, Rd)))
}
function tr(e) {
    function t(l) {
        return Ln(l, e)
    }
    if (0 < jr.length) {
        Ln(jr[0], e)
        for (var n = 1; n < jr.length; n++) {
            var r = jr[n]
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (
        gt !== null && Ln(gt, e),
            vt !== null && Ln(vt, e),
            wt !== null && Ln(wt, e),
            bn.forEach(t),
            er.forEach(t),
            n = 0;
        n < pt.length;
        n++
    )
        (r = pt[n]), r.blockedOn === e && (r.blockedOn = null)
    for (; 0 < pt.length && ((n = pt[0]), n.blockedOn === null); )
        Ia(n), n.blockedOn === null && pt.shift()
}
var dn = it.ReactCurrentBatchConfig,
    cl = !0
function Ld(e, t, n, r) {
    var l = A,
        o = dn.transition
    dn.transition = null
    try {
        ;(A = 1), Hi(e, t, n, r)
    } finally {
        ;(A = l), (dn.transition = o)
    }
}
function Od(e, t, n, r) {
    var l = A,
        o = dn.transition
    dn.transition = null
    try {
        ;(A = 4), Hi(e, t, n, r)
    } finally {
        ;(A = l), (dn.transition = o)
    }
}
function Hi(e, t, n, r) {
    if (cl) {
        var l = Go(e, t, n, r)
        if (l === null) yo(e, t, r, fl, n), Vu(e, r)
        else if (Td(l, e, t, n, r)) r.stopPropagation()
        else if ((Vu(e, r), t & 4 && -1 < Pd.indexOf(e))) {
            for (; l !== null; ) {
                var o = vr(l)
                if (
                    (o !== null && Ba(o),
                    (o = Go(e, t, n, r)),
                    o === null && yo(e, t, r, fl, n),
                    o === l)
                )
                    break
                l = o
            }
            l !== null && r.stopPropagation()
        } else yo(e, t, r, null, n)
    }
}
var fl = null
function Go(e, t, n, r) {
    if (((fl = null), (e = Ii(r)), (e = Ft(e)), e !== null))
        if (((t = Jt(e)), t === null)) e = null
        else if (((n = t.tag), n === 13)) {
            if (((e = Na(t)), e !== null)) return e
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null
            e = null
        } else t !== e && (e = null)
    return (fl = e), null
}
function Ua(e) {
    switch (e) {
        case 'cancel':
        case 'click':
        case 'close':
        case 'contextmenu':
        case 'copy':
        case 'cut':
        case 'auxclick':
        case 'dblclick':
        case 'dragend':
        case 'dragstart':
        case 'drop':
        case 'focusin':
        case 'focusout':
        case 'input':
        case 'invalid':
        case 'keydown':
        case 'keypress':
        case 'keyup':
        case 'mousedown':
        case 'mouseup':
        case 'paste':
        case 'pause':
        case 'play':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
        case 'ratechange':
        case 'reset':
        case 'resize':
        case 'seeked':
        case 'submit':
        case 'touchcancel':
        case 'touchend':
        case 'touchstart':
        case 'volumechange':
        case 'change':
        case 'selectionchange':
        case 'textInput':
        case 'compositionstart':
        case 'compositionend':
        case 'compositionupdate':
        case 'beforeblur':
        case 'afterblur':
        case 'beforeinput':
        case 'blur':
        case 'fullscreenchange':
        case 'focus':
        case 'hashchange':
        case 'popstate':
        case 'select':
        case 'selectstart':
            return 1
        case 'drag':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'mousemove':
        case 'mouseout':
        case 'mouseover':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'scroll':
        case 'toggle':
        case 'touchmove':
        case 'wheel':
        case 'mouseenter':
        case 'mouseleave':
        case 'pointerenter':
        case 'pointerleave':
            return 4
        case 'message':
            switch (vd()) {
                case Ui:
                    return 1
                case La:
                    return 4
                case sl:
                case wd:
                    return 16
                case Oa:
                    return 536870912
                default:
                    return 16
            }
        default:
            return 16
    }
}
var mt = null,
    Vi = null,
    Kr = null
function Ma() {
    if (Kr) return Kr
    var e,
        t = Vi,
        n = t.length,
        r,
        l = 'value' in mt ? mt.value : mt.textContent,
        o = l.length
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return (Kr = l.slice(e, 1 < r ? 1 - r : void 0))
}
function Yr(e) {
    var t = e.keyCode
    return (
        'charCode' in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    )
}
function zr() {
    return !0
}
function Qu() {
    return !1
}
function Ne(e) {
    function t(n, r, l, o, i) {
        ;(this._reactName = n),
            (this._targetInst = l),
            (this.type = r),
            (this.nativeEvent = o),
            (this.target = i),
            (this.currentTarget = null)
        for (var u in e)
            e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]))
        return (
            (this.isDefaultPrevented = (
                o.defaultPrevented != null
                    ? o.defaultPrevented
                    : o.returnValue === !1
            )
                ? zr
                : Qu),
            (this.isPropagationStopped = Qu),
            this
        )
    }
    return (
        Q(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0
                var n = this.nativeEvent
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != 'unknown' &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = zr))
            },
            stopPropagation: function () {
                var n = this.nativeEvent
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != 'unknown' &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = zr))
            },
            persist: function () {},
            isPersistent: zr,
        }),
        t
    )
}
var Cn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Wi = Ne(Cn),
    gr = Q({}, Cn, { view: 0, detail: 0 }),
    jd = Ne(gr),
    io,
    uo,
    On,
    zl = Q({}, gr, {
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
        getModifierState: Qi,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget
        },
        movementX: function (e) {
            return 'movementX' in e
                ? e.movementX
                : (e !== On &&
                      (On && e.type === 'mousemove'
                          ? ((io = e.screenX - On.screenX),
                            (uo = e.screenY - On.screenY))
                          : (uo = io = 0),
                      (On = e)),
                  io)
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : uo
        },
    }),
    Ku = Ne(zl),
    zd = Q({}, zl, { dataTransfer: 0 }),
    Bd = Ne(zd),
    Dd = Q({}, gr, { relatedTarget: 0 }),
    so = Ne(Dd),
    Ad = Q({}, Cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Fd = Ne(Ad),
    Id = Q({}, Cn, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData
        },
    }),
    Ud = Ne(Id),
    Md = Q({}, Cn, { data: 0 }),
    Yu = Ne(Md),
    $d = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
    },
    Hd = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
    },
    Vd = {
        Alt: 'altKey',
        Control: 'ctrlKey',
        Meta: 'metaKey',
        Shift: 'shiftKey',
    }
function Wd(e) {
    var t = this.nativeEvent
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = Vd[e])
          ? !!t[e]
          : !1
}
function Qi() {
    return Wd
}
var Qd = Q({}, gr, {
        key: function (e) {
            if (e.key) {
                var t = $d[e.key] || e.key
                if (t !== 'Unidentified') return t
            }
            return e.type === 'keypress'
                ? ((e = Yr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
                : e.type === 'keydown' || e.type === 'keyup'
                  ? Hd[e.keyCode] || 'Unidentified'
                  : ''
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Qi,
        charCode: function (e) {
            return e.type === 'keypress' ? Yr(e) : 0
        },
        keyCode: function (e) {
            return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
        },
        which: function (e) {
            return e.type === 'keypress'
                ? Yr(e)
                : e.type === 'keydown' || e.type === 'keyup'
                  ? e.keyCode
                  : 0
        },
    }),
    Kd = Ne(Qd),
    Yd = Q({}, zl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    Ju = Ne(Yd),
    Jd = Q({}, gr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Qi,
    }),
    Xd = Ne(Jd),
    Gd = Q({}, Cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    qd = Ne(Gd),
    Zd = Q({}, zl, {
        deltaX: function (e) {
            return 'deltaX' in e
                ? e.deltaX
                : 'wheelDeltaX' in e
                  ? -e.wheelDeltaX
                  : 0
        },
        deltaY: function (e) {
            return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                  ? -e.wheelDeltaY
                  : 'wheelDelta' in e
                    ? -e.wheelDelta
                    : 0
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    bd = Ne(Zd),
    ep = [9, 13, 27, 32],
    Ki = nt && 'CompositionEvent' in window,
    Vn = null
nt && 'documentMode' in document && (Vn = document.documentMode)
var tp = nt && 'TextEvent' in window && !Vn,
    $a = nt && (!Ki || (Vn && 8 < Vn && 11 >= Vn)),
    Xu = String.fromCharCode(32),
    Gu = !1
function Ha(e, t) {
    switch (e) {
        case 'keyup':
            return ep.indexOf(t.keyCode) !== -1
        case 'keydown':
            return t.keyCode !== 229
        case 'keypress':
        case 'mousedown':
        case 'focusout':
            return !0
        default:
            return !1
    }
}
function Va(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Zt = !1
function np(e, t) {
    switch (e) {
        case 'compositionend':
            return Va(t)
        case 'keypress':
            return t.which !== 32 ? null : ((Gu = !0), Xu)
        case 'textInput':
            return (e = t.data), e === Xu && Gu ? null : e
        default:
            return null
    }
}
function rp(e, t) {
    if (Zt)
        return e === 'compositionend' || (!Ki && Ha(e, t))
            ? ((e = Ma()), (Kr = Vi = mt = null), (Zt = !1), e)
            : null
    switch (e) {
        case 'paste':
            return null
        case 'keypress':
            if (
                !(t.ctrlKey || t.altKey || t.metaKey) ||
                (t.ctrlKey && t.altKey)
            ) {
                if (t.char && 1 < t.char.length) return t.char
                if (t.which) return String.fromCharCode(t.which)
            }
            return null
        case 'compositionend':
            return $a && t.locale !== 'ko' ? null : t.data
        default:
            return null
    }
}
var lp = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
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
    week: !0,
}
function qu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return t === 'input' ? !!lp[e.type] : t === 'textarea'
}
function Wa(e, t, n, r) {
    ka(r),
        (t = dl(t, 'onChange')),
        0 < t.length &&
            ((n = new Wi('onChange', 'change', null, n, r)),
            e.push({ event: n, listeners: t }))
}
var Wn = null,
    nr = null
function op(e) {
    tc(e, 0)
}
function Bl(e) {
    var t = tn(e)
    if (ha(t)) return e
}
function ip(e, t) {
    if (e === 'change') return t
}
var Qa = !1
if (nt) {
    var ao
    if (nt) {
        var co = 'oninput' in document
        if (!co) {
            var Zu = document.createElement('div')
            Zu.setAttribute('oninput', 'return;'),
                (co = typeof Zu.oninput == 'function')
        }
        ao = co
    } else ao = !1
    Qa = ao && (!document.documentMode || 9 < document.documentMode)
}
function bu() {
    Wn && (Wn.detachEvent('onpropertychange', Ka), (nr = Wn = null))
}
function Ka(e) {
    if (e.propertyName === 'value' && Bl(nr)) {
        var t = []
        Wa(t, nr, e, Ii(e)), _a(op, t)
    }
}
function up(e, t, n) {
    e === 'focusin'
        ? (bu(), (Wn = t), (nr = n), Wn.attachEvent('onpropertychange', Ka))
        : e === 'focusout' && bu()
}
function sp(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
        return Bl(nr)
}
function ap(e, t) {
    if (e === 'click') return Bl(t)
}
function cp(e, t) {
    if (e === 'input' || e === 'change') return Bl(t)
}
function fp(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var $e = typeof Object.is == 'function' ? Object.is : fp
function rr(e, t) {
    if ($e(e, t)) return !0
    if (
        typeof e != 'object' ||
        e === null ||
        typeof t != 'object' ||
        t === null
    )
        return !1
    var n = Object.keys(e),
        r = Object.keys(t)
    if (n.length !== r.length) return !1
    for (r = 0; r < n.length; r++) {
        var l = n[r]
        if (!jo.call(t, l) || !$e(e[l], t[l])) return !1
    }
    return !0
}
function es(e) {
    for (; e && e.firstChild; ) e = e.firstChild
    return e
}
function ts(e, t) {
    var n = es(e)
    e = 0
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e }
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = es(n)
    }
}
function Ya(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
              ? !1
              : t && t.nodeType === 3
                ? Ya(e, t.parentNode)
                : 'contains' in e
                  ? e.contains(t)
                  : e.compareDocumentPosition
                    ? !!(e.compareDocumentPosition(t) & 16)
                    : !1
        : !1
}
function Ja() {
    for (var e = window, t = ol(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == 'string'
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow
        else break
        t = ol(e.document)
    }
    return t
}
function Yi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return (
        t &&
        ((t === 'input' &&
            (e.type === 'text' ||
                e.type === 'search' ||
                e.type === 'tel' ||
                e.type === 'url' ||
                e.type === 'password')) ||
            t === 'textarea' ||
            e.contentEditable === 'true')
    )
}
function dp(e) {
    var t = Ja(),
        n = e.focusedElem,
        r = e.selectionRange
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        Ya(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && Yi(n)) {
            if (
                ((t = r.start),
                (e = r.end),
                e === void 0 && (e = t),
                'selectionStart' in n)
            )
                (n.selectionStart = t),
                    (n.selectionEnd = Math.min(e, n.value.length))
            else if (
                ((e =
                    ((t = n.ownerDocument || document) && t.defaultView) ||
                    window),
                e.getSelection)
            ) {
                e = e.getSelection()
                var l = n.textContent.length,
                    o = Math.min(r.start, l)
                ;(r = r.end === void 0 ? o : Math.min(r.end, l)),
                    !e.extend && o > r && ((l = r), (r = o), (o = l)),
                    (l = ts(n, o))
                var i = ts(n, r)
                l &&
                    i &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== l.node ||
                        e.anchorOffset !== l.offset ||
                        e.focusNode !== i.node ||
                        e.focusOffset !== i.offset) &&
                    ((t = t.createRange()),
                    t.setStart(l.node, l.offset),
                    e.removeAllRanges(),
                    o > r
                        ? (e.addRange(t), e.extend(i.node, i.offset))
                        : (t.setEnd(i.node, i.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
        for (
            typeof n.focus == 'function' && n.focus(), n = 0;
            n < t.length;
            n++
        )
            (e = t[n]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top)
    }
}
var pp = nt && 'documentMode' in document && 11 >= document.documentMode,
    bt = null,
    qo = null,
    Qn = null,
    Zo = !1
function ns(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
    Zo ||
        bt == null ||
        bt !== ol(r) ||
        ((r = bt),
        'selectionStart' in r && Yi(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (Qn && rr(Qn, r)) ||
            ((Qn = r),
            (r = dl(qo, 'onSelect')),
            0 < r.length &&
                ((t = new Wi('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = bt))))
}
function Br(e, t) {
    var n = {}
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n['Webkit' + e] = 'webkit' + t),
        (n['Moz' + e] = 'moz' + t),
        n
    )
}
var en = {
        animationend: Br('Animation', 'AnimationEnd'),
        animationiteration: Br('Animation', 'AnimationIteration'),
        animationstart: Br('Animation', 'AnimationStart'),
        transitionend: Br('Transition', 'TransitionEnd'),
    },
    fo = {},
    Xa = {}
nt &&
    ((Xa = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete en.animationend.animation,
        delete en.animationiteration.animation,
        delete en.animationstart.animation),
    'TransitionEvent' in window || delete en.transitionend.transition)
function Dl(e) {
    if (fo[e]) return fo[e]
    if (!en[e]) return e
    var t = en[e],
        n
    for (n in t) if (t.hasOwnProperty(n) && n in Xa) return (fo[e] = t[n])
    return e
}
var Ga = Dl('animationend'),
    qa = Dl('animationiteration'),
    Za = Dl('animationstart'),
    ba = Dl('transitionend'),
    ec = new Map(),
    rs =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' '
        )
function Tt(e, t) {
    ec.set(e, t), Yt(t, [e])
}
for (var po = 0; po < rs.length; po++) {
    var ho = rs[po],
        hp = ho.toLowerCase(),
        mp = ho[0].toUpperCase() + ho.slice(1)
    Tt(hp, 'on' + mp)
}
Tt(Ga, 'onAnimationEnd')
Tt(qa, 'onAnimationIteration')
Tt(Za, 'onAnimationStart')
Tt('dblclick', 'onDoubleClick')
Tt('focusin', 'onFocus')
Tt('focusout', 'onBlur')
Tt(ba, 'onTransitionEnd')
mn('onMouseEnter', ['mouseout', 'mouseover'])
mn('onMouseLeave', ['mouseout', 'mouseover'])
mn('onPointerEnter', ['pointerout', 'pointerover'])
mn('onPointerLeave', ['pointerout', 'pointerover'])
Yt(
    'onChange',
    'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
    )
)
Yt(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
    )
)
Yt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
Yt(
    'onCompositionEnd',
    'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
Yt(
    'onCompositionStart',
    'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
Yt(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var Mn =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' '
        ),
    yp = new Set(
        'cancel close invalid load scroll toggle'.split(' ').concat(Mn)
    )
function ls(e, t, n) {
    var r = e.type || 'unknown-event'
    ;(e.currentTarget = n), hd(r, t, void 0, e), (e.currentTarget = null)
}
function tc(e, t) {
    t = (t & 4) !== 0
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event
        r = r.listeners
        e: {
            var o = void 0
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var u = r[i],
                        s = u.instance,
                        a = u.currentTarget
                    if (((u = u.listener), s !== o && l.isPropagationStopped()))
                        break e
                    ls(l, u, a), (o = s)
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (
                        ((u = r[i]),
                        (s = u.instance),
                        (a = u.currentTarget),
                        (u = u.listener),
                        s !== o && l.isPropagationStopped())
                    )
                        break e
                    ls(l, u, a), (o = s)
                }
        }
    }
    if (ul) throw ((e = Yo), (ul = !1), (Yo = null), e)
}
function U(e, t) {
    var n = t[ri]
    n === void 0 && (n = t[ri] = new Set())
    var r = e + '__bubble'
    n.has(r) || (nc(t, e, 2, !1), n.add(r))
}
function mo(e, t, n) {
    var r = 0
    t && (r |= 4), nc(n, e, r, t)
}
var Dr = '_reactListening' + Math.random().toString(36).slice(2)
function lr(e) {
    if (!e[Dr]) {
        ;(e[Dr] = !0),
            aa.forEach(function (n) {
                n !== 'selectionchange' &&
                    (yp.has(n) || mo(n, !1, e), mo(n, !0, e))
            })
        var t = e.nodeType === 9 ? e : e.ownerDocument
        t === null || t[Dr] || ((t[Dr] = !0), mo('selectionchange', !1, t))
    }
}
function nc(e, t, n, r) {
    switch (Ua(t)) {
        case 1:
            var l = Ld
            break
        case 4:
            l = Od
            break
        default:
            l = Hi
    }
    ;(n = l.bind(null, t, n, e)),
        (l = void 0),
        !Ko ||
            (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
            (l = !0),
        r
            ? l !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: l })
                : e.addEventListener(t, n, !0)
            : l !== void 0
              ? e.addEventListener(t, n, { passive: l })
              : e.addEventListener(t, n, !1)
}
function yo(e, t, n, r, l) {
    var o = r
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return
            var i = r.tag
            if (i === 3 || i === 4) {
                var u = r.stateNode.containerInfo
                if (u === l || (u.nodeType === 8 && u.parentNode === l)) break
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var s = i.tag
                        if (
                            (s === 3 || s === 4) &&
                            ((s = i.stateNode.containerInfo),
                            s === l || (s.nodeType === 8 && s.parentNode === l))
                        )
                            return
                        i = i.return
                    }
                for (; u !== null; ) {
                    if (((i = Ft(u)), i === null)) return
                    if (((s = i.tag), s === 5 || s === 6)) {
                        r = o = i
                        continue e
                    }
                    u = u.parentNode
                }
            }
            r = r.return
        }
    _a(function () {
        var a = o,
            p = Ii(n),
            h = []
        e: {
            var m = ec.get(e)
            if (m !== void 0) {
                var S = Wi,
                    y = e
                switch (e) {
                    case 'keypress':
                        if (Yr(n) === 0) break e
                    case 'keydown':
                    case 'keyup':
                        S = Kd
                        break
                    case 'focusin':
                        ;(y = 'focus'), (S = so)
                        break
                    case 'focusout':
                        ;(y = 'blur'), (S = so)
                        break
                    case 'beforeblur':
                    case 'afterblur':
                        S = so
                        break
                    case 'click':
                        if (n.button === 2) break e
                    case 'auxclick':
                    case 'dblclick':
                    case 'mousedown':
                    case 'mousemove':
                    case 'mouseup':
                    case 'mouseout':
                    case 'mouseover':
                    case 'contextmenu':
                        S = Ku
                        break
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        S = Bd
                        break
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        S = Xd
                        break
                    case Ga:
                    case qa:
                    case Za:
                        S = Fd
                        break
                    case ba:
                        S = qd
                        break
                    case 'scroll':
                        S = jd
                        break
                    case 'wheel':
                        S = bd
                        break
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        S = Ud
                        break
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        S = Ju
                }
                var v = (t & 4) !== 0,
                    j = !v && e === 'scroll',
                    f = v ? (m !== null ? m + 'Capture' : null) : m
                v = []
                for (var c = a, d; c !== null; ) {
                    d = c
                    var k = d.stateNode
                    if (
                        (d.tag === 5 &&
                            k !== null &&
                            ((d = k),
                            f !== null &&
                                ((k = Zn(c, f)),
                                k != null && v.push(or(c, k, d)))),
                        j)
                    )
                        break
                    c = c.return
                }
                0 < v.length &&
                    ((m = new S(m, y, null, n, p)),
                    h.push({ event: m, listeners: v }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((m = e === 'mouseover' || e === 'pointerover'),
                    (S = e === 'mouseout' || e === 'pointerout'),
                    m &&
                        n !== Wo &&
                        (y = n.relatedTarget || n.fromElement) &&
                        (Ft(y) || y[rt]))
                )
                    break e
                if (
                    (S || m) &&
                    ((m =
                        p.window === p
                            ? p
                            : (m = p.ownerDocument)
                              ? m.defaultView || m.parentWindow
                              : window),
                    S
                        ? ((y = n.relatedTarget || n.toElement),
                          (S = a),
                          (y = y ? Ft(y) : null),
                          y !== null &&
                              ((j = Jt(y)),
                              y !== j || (y.tag !== 5 && y.tag !== 6)) &&
                              (y = null))
                        : ((S = null), (y = a)),
                    S !== y)
                ) {
                    if (
                        ((v = Ku),
                        (k = 'onMouseLeave'),
                        (f = 'onMouseEnter'),
                        (c = 'mouse'),
                        (e === 'pointerout' || e === 'pointerover') &&
                            ((v = Ju),
                            (k = 'onPointerLeave'),
                            (f = 'onPointerEnter'),
                            (c = 'pointer')),
                        (j = S == null ? m : tn(S)),
                        (d = y == null ? m : tn(y)),
                        (m = new v(k, c + 'leave', S, n, p)),
                        (m.target = j),
                        (m.relatedTarget = d),
                        (k = null),
                        Ft(p) === a &&
                            ((v = new v(f, c + 'enter', y, n, p)),
                            (v.target = d),
                            (v.relatedTarget = j),
                            (k = v)),
                        (j = k),
                        S && y)
                    )
                        t: {
                            for (v = S, f = y, c = 0, d = v; d; d = Xt(d)) c++
                            for (d = 0, k = f; k; k = Xt(k)) d++
                            for (; 0 < c - d; ) (v = Xt(v)), c--
                            for (; 0 < d - c; ) (f = Xt(f)), d--
                            for (; c--; ) {
                                if (
                                    v === f ||
                                    (f !== null && v === f.alternate)
                                )
                                    break t
                                ;(v = Xt(v)), (f = Xt(f))
                            }
                            v = null
                        }
                    else v = null
                    S !== null && os(h, m, S, v, !1),
                        y !== null && j !== null && os(h, j, y, v, !0)
                }
            }
            e: {
                if (
                    ((m = a ? tn(a) : window),
                    (S = m.nodeName && m.nodeName.toLowerCase()),
                    S === 'select' || (S === 'input' && m.type === 'file'))
                )
                    var C = ip
                else if (qu(m))
                    if (Qa) C = cp
                    else {
                        C = sp
                        var N = up
                    }
                else
                    (S = m.nodeName) &&
                        S.toLowerCase() === 'input' &&
                        (m.type === 'checkbox' || m.type === 'radio') &&
                        (C = ap)
                if (C && (C = C(e, a))) {
                    Wa(h, C, n, p)
                    break e
                }
                N && N(e, m, a),
                    e === 'focusout' &&
                        (N = m._wrapperState) &&
                        N.controlled &&
                        m.type === 'number' &&
                        Uo(m, 'number', m.value)
            }
            switch (((N = a ? tn(a) : window), e)) {
                case 'focusin':
                    ;(qu(N) || N.contentEditable === 'true') &&
                        ((bt = N), (qo = a), (Qn = null))
                    break
                case 'focusout':
                    Qn = qo = bt = null
                    break
                case 'mousedown':
                    Zo = !0
                    break
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    ;(Zo = !1), ns(h, n, p)
                    break
                case 'selectionchange':
                    if (pp) break
                case 'keydown':
                case 'keyup':
                    ns(h, n, p)
            }
            var P
            if (Ki)
                e: {
                    switch (e) {
                        case 'compositionstart':
                            var T = 'onCompositionStart'
                            break e
                        case 'compositionend':
                            T = 'onCompositionEnd'
                            break e
                        case 'compositionupdate':
                            T = 'onCompositionUpdate'
                            break e
                    }
                    T = void 0
                }
            else
                Zt
                    ? Ha(e, n) && (T = 'onCompositionEnd')
                    : e === 'keydown' &&
                      n.keyCode === 229 &&
                      (T = 'onCompositionStart')
            T &&
                ($a &&
                    n.locale !== 'ko' &&
                    (Zt || T !== 'onCompositionStart'
                        ? T === 'onCompositionEnd' && Zt && (P = Ma())
                        : ((mt = p),
                          (Vi = 'value' in mt ? mt.value : mt.textContent),
                          (Zt = !0))),
                (N = dl(a, T)),
                0 < N.length &&
                    ((T = new Yu(T, e, null, n, p)),
                    h.push({ event: T, listeners: N }),
                    P
                        ? (T.data = P)
                        : ((P = Va(n)), P !== null && (T.data = P)))),
                (P = tp ? np(e, n) : rp(e, n)) &&
                    ((a = dl(a, 'onBeforeInput')),
                    0 < a.length &&
                        ((p = new Yu(
                            'onBeforeInput',
                            'beforeinput',
                            null,
                            n,
                            p
                        )),
                        h.push({ event: p, listeners: a }),
                        (p.data = P)))
        }
        tc(h, t)
    })
}
function or(e, t, n) {
    return { instance: e, listener: t, currentTarget: n }
}
function dl(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
        var l = e,
            o = l.stateNode
        l.tag === 5 &&
            o !== null &&
            ((l = o),
            (o = Zn(e, n)),
            o != null && r.unshift(or(e, o, l)),
            (o = Zn(e, t)),
            o != null && r.push(or(e, o, l))),
            (e = e.return)
    }
    return r
}
function Xt(e) {
    if (e === null) return null
    do e = e.return
    while (e && e.tag !== 5)
    return e || null
}
function os(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
        var u = n,
            s = u.alternate,
            a = u.stateNode
        if (s !== null && s === r) break
        u.tag === 5 &&
            a !== null &&
            ((u = a),
            l
                ? ((s = Zn(n, o)), s != null && i.unshift(or(n, s, u)))
                : l || ((s = Zn(n, o)), s != null && i.push(or(n, s, u)))),
            (n = n.return)
    }
    i.length !== 0 && e.push({ event: t, listeners: i })
}
var gp = /\r\n?/g,
    vp = /\u0000|\uFFFD/g
function is(e) {
    return (typeof e == 'string' ? e : '' + e)
        .replace(
            gp,
            `
`
        )
        .replace(vp, '')
}
function Ar(e, t, n) {
    if (((t = is(t)), is(e) !== t && n)) throw Error(E(425))
}
function pl() {}
var bo = null,
    ei = null
function ti(e, t) {
    return (
        e === 'textarea' ||
        e === 'noscript' ||
        typeof t.children == 'string' ||
        typeof t.children == 'number' ||
        (typeof t.dangerouslySetInnerHTML == 'object' &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    )
}
var ni = typeof setTimeout == 'function' ? setTimeout : void 0,
    wp = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    us = typeof Promise == 'function' ? Promise : void 0,
    Sp =
        typeof queueMicrotask == 'function'
            ? queueMicrotask
            : typeof us < 'u'
              ? function (e) {
                    return us.resolve(null).then(e).catch(kp)
                }
              : ni
function kp(e) {
    setTimeout(function () {
        throw e
    })
}
function go(e, t) {
    var n = t,
        r = 0
    do {
        var l = n.nextSibling
        if ((e.removeChild(n), l && l.nodeType === 8))
            if (((n = l.data), n === '/$')) {
                if (r === 0) {
                    e.removeChild(l), tr(t)
                    return
                }
                r--
            } else (n !== '$' && n !== '$?' && n !== '$!') || r++
        n = l
    } while (n)
    tr(t)
}
function St(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType
        if (t === 1 || t === 3) break
        if (t === 8) {
            if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
            if (t === '/$') return null
        }
    }
    return e
}
function ss(e) {
    e = e.previousSibling
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data
            if (n === '$' || n === '$!' || n === '$?') {
                if (t === 0) return e
                t--
            } else n === '/$' && t++
        }
        e = e.previousSibling
    }
    return null
}
var _n = Math.random().toString(36).slice(2),
    We = '__reactFiber$' + _n,
    ir = '__reactProps$' + _n,
    rt = '__reactContainer$' + _n,
    ri = '__reactEvents$' + _n,
    Ep = '__reactListeners$' + _n,
    xp = '__reactHandles$' + _n
function Ft(e) {
    var t = e[We]
    if (t) return t
    for (var n = e.parentNode; n; ) {
        if ((t = n[rt] || n[We])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = ss(e); e !== null; ) {
                    if ((n = e[We])) return n
                    e = ss(e)
                }
            return t
        }
        ;(e = n), (n = e.parentNode)
    }
    return null
}
function vr(e) {
    return (
        (e = e[We] || e[rt]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    )
}
function tn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode
    throw Error(E(33))
}
function Al(e) {
    return e[ir] || null
}
var li = [],
    nn = -1
function Rt(e) {
    return { current: e }
}
function M(e) {
    0 > nn || ((e.current = li[nn]), (li[nn] = null), nn--)
}
function I(e, t) {
    nn++, (li[nn] = e.current), (e.current = t)
}
var Nt = {},
    fe = Rt(Nt),
    ve = Rt(!1),
    Ht = Nt
function yn(e, t) {
    var n = e.type.contextTypes
    if (!n) return Nt
    var r = e.stateNode
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext
    var l = {},
        o
    for (o in n) l[o] = t[o]
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
        l
    )
}
function we(e) {
    return (e = e.childContextTypes), e != null
}
function hl() {
    M(ve), M(fe)
}
function as(e, t, n) {
    if (fe.current !== Nt) throw Error(E(168))
    I(fe, t), I(ve, n)
}
function rc(e, t, n) {
    var r = e.stateNode
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
        return n
    r = r.getChildContext()
    for (var l in r) if (!(l in t)) throw Error(E(108, ud(e) || 'Unknown', l))
    return Q({}, n, r)
}
function ml(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            Nt),
        (Ht = fe.current),
        I(fe, e),
        I(ve, ve.current),
        !0
    )
}
function cs(e, t, n) {
    var r = e.stateNode
    if (!r) throw Error(E(169))
    n
        ? ((e = rc(e, t, Ht)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          M(ve),
          M(fe),
          I(fe, e))
        : M(ve),
        I(ve, n)
}
var Ge = null,
    Fl = !1,
    vo = !1
function lc(e) {
    Ge === null ? (Ge = [e]) : Ge.push(e)
}
function Cp(e) {
    ;(Fl = !0), lc(e)
}
function Lt() {
    if (!vo && Ge !== null) {
        vo = !0
        var e = 0,
            t = A
        try {
            var n = Ge
            for (A = 1; e < n.length; e++) {
                var r = n[e]
                do r = r(!0)
                while (r !== null)
            }
            ;(Ge = null), (Fl = !1)
        } catch (l) {
            throw (Ge !== null && (Ge = Ge.slice(e + 1)), Ra(Ui, Lt), l)
        } finally {
            ;(A = t), (vo = !1)
        }
    }
    return null
}
var rn = [],
    ln = 0,
    yl = null,
    gl = 0,
    Pe = [],
    Te = 0,
    Vt = null,
    qe = 1,
    Ze = ''
function Bt(e, t) {
    ;(rn[ln++] = gl), (rn[ln++] = yl), (yl = e), (gl = t)
}
function oc(e, t, n) {
    ;(Pe[Te++] = qe), (Pe[Te++] = Ze), (Pe[Te++] = Vt), (Vt = e)
    var r = qe
    e = Ze
    var l = 32 - Ue(r) - 1
    ;(r &= ~(1 << l)), (n += 1)
    var o = 32 - Ue(t) + l
    if (30 < o) {
        var i = l - (l % 5)
        ;(o = (r & ((1 << i) - 1)).toString(32)),
            (r >>= i),
            (l -= i),
            (qe = (1 << (32 - Ue(t) + l)) | (n << l) | r),
            (Ze = o + e)
    } else (qe = (1 << o) | (n << l) | r), (Ze = e)
}
function Ji(e) {
    e.return !== null && (Bt(e, 1), oc(e, 1, 0))
}
function Xi(e) {
    for (; e === yl; )
        (yl = rn[--ln]), (rn[ln] = null), (gl = rn[--ln]), (rn[ln] = null)
    for (; e === Vt; )
        (Vt = Pe[--Te]),
            (Pe[Te] = null),
            (Ze = Pe[--Te]),
            (Pe[Te] = null),
            (qe = Pe[--Te]),
            (Pe[Te] = null)
}
var xe = null,
    Ee = null,
    $ = !1,
    Ie = null
function ic(e, t) {
    var n = Re(5, null, null, 0)
    ;(n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function fs(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type
            return (
                (t =
                    t.nodeType !== 1 ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                t !== null
                    ? ((e.stateNode = t), (xe = e), (Ee = St(t.firstChild)), !0)
                    : !1
            )
        case 6:
            return (
                (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (xe = e), (Ee = null), !0) : !1
            )
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = Vt !== null ? { id: qe, overflow: Ze } : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = Re(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (xe = e),
                      (Ee = null),
                      !0)
                    : !1
            )
        default:
            return !1
    }
}
function oi(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ii(e) {
    if ($) {
        var t = Ee
        if (t) {
            var n = t
            if (!fs(e, t)) {
                if (oi(e)) throw Error(E(418))
                t = St(n.nextSibling)
                var r = xe
                t && fs(e, t)
                    ? ic(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (xe = e))
            }
        } else {
            if (oi(e)) throw Error(E(418))
            ;(e.flags = (e.flags & -4097) | 2), ($ = !1), (xe = e)
        }
    }
}
function ds(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return
    xe = e
}
function Fr(e) {
    if (e !== xe) return !1
    if (!$) return ds(e), ($ = !0), !1
    var t
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== 'head' && t !== 'body' && !ti(e.type, e.memoizedProps))),
        t && (t = Ee))
    ) {
        if (oi(e)) throw (uc(), Error(E(418)))
        for (; t; ) ic(e, t), (t = St(t.nextSibling))
    }
    if ((ds(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(E(317))
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data
                    if (n === '/$') {
                        if (t === 0) {
                            Ee = St(e.nextSibling)
                            break e
                        }
                        t--
                    } else (n !== '$' && n !== '$!' && n !== '$?') || t++
                }
                e = e.nextSibling
            }
            Ee = null
        }
    } else Ee = xe ? St(e.stateNode.nextSibling) : null
    return !0
}
function uc() {
    for (var e = Ee; e; ) e = St(e.nextSibling)
}
function gn() {
    ;(Ee = xe = null), ($ = !1)
}
function Gi(e) {
    Ie === null ? (Ie = [e]) : Ie.push(e)
}
var _p = it.ReactCurrentBatchConfig
function Ae(e, t) {
    if (e && e.defaultProps) {
        ;(t = Q({}, t)), (e = e.defaultProps)
        for (var n in e) t[n] === void 0 && (t[n] = e[n])
        return t
    }
    return t
}
var vl = Rt(null),
    wl = null,
    on = null,
    qi = null
function Zi() {
    qi = on = wl = null
}
function bi(e) {
    var t = vl.current
    M(vl), (e._currentValue = t)
}
function ui(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break
        e = e.return
    }
}
function pn(e, t) {
    ;(wl = e),
        (qi = on = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & t && (ge = !0), (e.firstContext = null))
}
function je(e) {
    var t = e._currentValue
    if (qi !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), on === null)) {
            if (wl === null) throw Error(E(308))
            ;(on = e), (wl.dependencies = { lanes: 0, firstContext: e })
        } else on = on.next = e
    return t
}
var It = null
function eu(e) {
    It === null ? (It = [e]) : It.push(e)
}
function sc(e, t, n, r) {
    var l = t.interleaved
    return (
        l === null ? ((n.next = n), eu(t)) : ((n.next = l.next), (l.next = n)),
        (t.interleaved = n),
        lt(e, r)
    )
}
function lt(e, t) {
    e.lanes |= t
    var n = e.alternate
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (n = e.alternate),
            n !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return)
    return n.tag === 3 ? n.stateNode : null
}
var dt = !1
function tu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    }
}
function ac(e, t) {
    ;(e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            })
}
function et(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    }
}
function kt(e, t, n) {
    var r = e.updateQueue
    if (r === null) return null
    if (((r = r.shared), D & 2)) {
        var l = r.pending
        return (
            l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
            (r.pending = t),
            lt(e, n)
        )
    }
    return (
        (l = r.interleaved),
        l === null ? ((t.next = t), eu(r)) : ((t.next = l.next), (l.next = t)),
        (r.interleaved = t),
        lt(e, n)
    )
}
function Jr(e, t, n) {
    if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes
        ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Mi(e, n)
    }
}
function ps(e, t) {
    var n = e.updateQueue,
        r = e.alternate
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var l = null,
            o = null
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                }
                o === null ? (l = o = i) : (o = o.next = i), (n = n.next)
            } while (n !== null)
            o === null ? (l = o = t) : (o = o.next = t)
        } else l = o = t
        ;(n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects,
        }),
            (e.updateQueue = n)
        return
    }
    ;(e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t)
}
function Sl(e, t, n, r) {
    var l = e.updateQueue
    dt = !1
    var o = l.firstBaseUpdate,
        i = l.lastBaseUpdate,
        u = l.shared.pending
    if (u !== null) {
        l.shared.pending = null
        var s = u,
            a = s.next
        ;(s.next = null), i === null ? (o = a) : (i.next = a), (i = s)
        var p = e.alternate
        p !== null &&
            ((p = p.updateQueue),
            (u = p.lastBaseUpdate),
            u !== i &&
                (u === null ? (p.firstBaseUpdate = a) : (u.next = a),
                (p.lastBaseUpdate = s)))
    }
    if (o !== null) {
        var h = l.baseState
        ;(i = 0), (p = a = s = null), (u = o)
        do {
            var m = u.lane,
                S = u.eventTime
            if ((r & m) === m) {
                p !== null &&
                    (p = p.next =
                        {
                            eventTime: S,
                            lane: 0,
                            tag: u.tag,
                            payload: u.payload,
                            callback: u.callback,
                            next: null,
                        })
                e: {
                    var y = e,
                        v = u
                    switch (((m = t), (S = n), v.tag)) {
                        case 1:
                            if (((y = v.payload), typeof y == 'function')) {
                                h = y.call(S, h, m)
                                break e
                            }
                            h = y
                            break e
                        case 3:
                            y.flags = (y.flags & -65537) | 128
                        case 0:
                            if (
                                ((y = v.payload),
                                (m =
                                    typeof y == 'function'
                                        ? y.call(S, h, m)
                                        : y),
                                m == null)
                            )
                                break e
                            h = Q({}, h, m)
                            break e
                        case 2:
                            dt = !0
                    }
                }
                u.callback !== null &&
                    u.lane !== 0 &&
                    ((e.flags |= 64),
                    (m = l.effects),
                    m === null ? (l.effects = [u]) : m.push(u))
            } else
                (S = {
                    eventTime: S,
                    lane: m,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null,
                }),
                    p === null ? ((a = p = S), (s = h)) : (p = p.next = S),
                    (i |= m)
            if (((u = u.next), u === null)) {
                if (((u = l.shared.pending), u === null)) break
                ;(m = u),
                    (u = m.next),
                    (m.next = null),
                    (l.lastBaseUpdate = m),
                    (l.shared.pending = null)
            }
        } while (1)
        if (
            (p === null && (s = h),
            (l.baseState = s),
            (l.firstBaseUpdate = a),
            (l.lastBaseUpdate = p),
            (t = l.shared.interleaved),
            t !== null)
        ) {
            l = t
            do (i |= l.lane), (l = l.next)
            while (l !== t)
        } else o === null && (l.shared.lanes = 0)
        ;(Qt |= i), (e.lanes = i), (e.memoizedState = h)
    }
}
function hs(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback
            if (l !== null) {
                if (((r.callback = null), (r = n), typeof l != 'function'))
                    throw Error(E(191, l))
                l.call(r)
            }
        }
}
var cc = new sa.Component().refs
function si(e, t, n, r) {
    ;(t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : Q({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Il = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Jt(e) === e : !1
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals
        var r = pe(),
            l = xt(e),
            o = et(r, l)
        ;(o.payload = t),
            n != null && (o.callback = n),
            (t = kt(e, o, l)),
            t !== null && (Me(t, e, l, r), Jr(t, e, l))
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals
        var r = pe(),
            l = xt(e),
            o = et(r, l)
        ;(o.tag = 1),
            (o.payload = t),
            n != null && (o.callback = n),
            (t = kt(e, o, l)),
            t !== null && (Me(t, e, l, r), Jr(t, e, l))
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals
        var n = pe(),
            r = xt(e),
            l = et(n, r)
        ;(l.tag = 2),
            t != null && (l.callback = t),
            (t = kt(e, l, r)),
            t !== null && (Me(t, e, r, n), Jr(t, e, r))
    },
}
function ms(e, t, n, r, l, o, i) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == 'function'
            ? e.shouldComponentUpdate(r, o, i)
            : t.prototype && t.prototype.isPureReactComponent
              ? !rr(n, r) || !rr(l, o)
              : !0
    )
}
function fc(e, t, n) {
    var r = !1,
        l = Nt,
        o = t.contextType
    return (
        typeof o == 'object' && o !== null
            ? (o = je(o))
            : ((l = we(t) ? Ht : fe.current),
              (r = t.contextTypes),
              (o = (r = r != null) ? yn(e, l) : Nt)),
        (t = new t(n, o)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Il),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = l),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
    )
}
function ys(e, t, n, r) {
    ;(e = t.state),
        typeof t.componentWillReceiveProps == 'function' &&
            t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
            t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Il.enqueueReplaceState(t, t.state, null)
}
function ai(e, t, n, r) {
    var l = e.stateNode
    ;(l.props = n), (l.state = e.memoizedState), (l.refs = cc), tu(e)
    var o = t.contextType
    typeof o == 'object' && o !== null
        ? (l.context = je(o))
        : ((o = we(t) ? Ht : fe.current), (l.context = yn(e, o))),
        (l.state = e.memoizedState),
        (o = t.getDerivedStateFromProps),
        typeof o == 'function' && (si(e, t, o, n), (l.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == 'function' ||
            typeof l.getSnapshotBeforeUpdate == 'function' ||
            (typeof l.UNSAFE_componentWillMount != 'function' &&
                typeof l.componentWillMount != 'function') ||
            ((t = l.state),
            typeof l.componentWillMount == 'function' && l.componentWillMount(),
            typeof l.UNSAFE_componentWillMount == 'function' &&
                l.UNSAFE_componentWillMount(),
            t !== l.state && Il.enqueueReplaceState(l, l.state, null),
            Sl(e, n, l, r),
            (l.state = e.memoizedState)),
        typeof l.componentDidMount == 'function' && (e.flags |= 4194308)
}
function jn(e, t, n) {
    if (
        ((e = n.ref),
        e !== null && typeof e != 'function' && typeof e != 'object')
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(E(309))
                var r = n.stateNode
            }
            if (!r) throw Error(E(147, e))
            var l = r,
                o = '' + e
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == 'function' &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (i) {
                      var u = l.refs
                      u === cc && (u = l.refs = {}),
                          i === null ? delete u[o] : (u[o] = i)
                  }),
                  (t._stringRef = o),
                  t)
        }
        if (typeof e != 'string') throw Error(E(284))
        if (!n._owner) throw Error(E(290, e))
    }
    return e
}
function Ir(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
            E(
                31,
                e === '[object Object]'
                    ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                    : e
            )
        ))
    )
}
function gs(e) {
    var t = e._init
    return t(e._payload)
}
function dc(e) {
    function t(f, c) {
        if (e) {
            var d = f.deletions
            d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c)
        }
    }
    function n(f, c) {
        if (!e) return null
        for (; c !== null; ) t(f, c), (c = c.sibling)
        return null
    }
    function r(f, c) {
        for (f = new Map(); c !== null; )
            c.key !== null ? f.set(c.key, c) : f.set(c.index, c),
                (c = c.sibling)
        return f
    }
    function l(f, c) {
        return (f = Ct(f, c)), (f.index = 0), (f.sibling = null), f
    }
    function o(f, c, d) {
        return (
            (f.index = d),
            e
                ? ((d = f.alternate),
                  d !== null
                      ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
                      : ((f.flags |= 2), c))
                : ((f.flags |= 1048576), c)
        )
    }
    function i(f) {
        return e && f.alternate === null && (f.flags |= 2), f
    }
    function u(f, c, d, k) {
        return c === null || c.tag !== 6
            ? ((c = _o(d, f.mode, k)), (c.return = f), c)
            : ((c = l(c, d)), (c.return = f), c)
    }
    function s(f, c, d, k) {
        var C = d.type
        return C === qt
            ? p(f, c, d.props.children, k, d.key)
            : c !== null &&
                (c.elementType === C ||
                    (typeof C == 'object' &&
                        C !== null &&
                        C.$$typeof === ft &&
                        gs(C) === c.type))
              ? ((k = l(c, d.props)), (k.ref = jn(f, c, d)), (k.return = f), k)
              : ((k = el(d.type, d.key, d.props, null, f.mode, k)),
                (k.ref = jn(f, c, d)),
                (k.return = f),
                k)
    }
    function a(f, c, d, k) {
        return c === null ||
            c.tag !== 4 ||
            c.stateNode.containerInfo !== d.containerInfo ||
            c.stateNode.implementation !== d.implementation
            ? ((c = No(d, f.mode, k)), (c.return = f), c)
            : ((c = l(c, d.children || [])), (c.return = f), c)
    }
    function p(f, c, d, k, C) {
        return c === null || c.tag !== 7
            ? ((c = $t(d, f.mode, k, C)), (c.return = f), c)
            : ((c = l(c, d)), (c.return = f), c)
    }
    function h(f, c, d) {
        if ((typeof c == 'string' && c !== '') || typeof c == 'number')
            return (c = _o('' + c, f.mode, d)), (c.return = f), c
        if (typeof c == 'object' && c !== null) {
            switch (c.$$typeof) {
                case Pr:
                    return (
                        (d = el(c.type, c.key, c.props, null, f.mode, d)),
                        (d.ref = jn(f, null, c)),
                        (d.return = f),
                        d
                    )
                case Gt:
                    return (c = No(c, f.mode, d)), (c.return = f), c
                case ft:
                    var k = c._init
                    return h(f, k(c._payload), d)
            }
            if (In(c) || Pn(c))
                return (c = $t(c, f.mode, d, null)), (c.return = f), c
            Ir(f, c)
        }
        return null
    }
    function m(f, c, d, k) {
        var C = c !== null ? c.key : null
        if ((typeof d == 'string' && d !== '') || typeof d == 'number')
            return C !== null ? null : u(f, c, '' + d, k)
        if (typeof d == 'object' && d !== null) {
            switch (d.$$typeof) {
                case Pr:
                    return d.key === C ? s(f, c, d, k) : null
                case Gt:
                    return d.key === C ? a(f, c, d, k) : null
                case ft:
                    return (C = d._init), m(f, c, C(d._payload), k)
            }
            if (In(d) || Pn(d)) return C !== null ? null : p(f, c, d, k, null)
            Ir(f, d)
        }
        return null
    }
    function S(f, c, d, k, C) {
        if ((typeof k == 'string' && k !== '') || typeof k == 'number')
            return (f = f.get(d) || null), u(c, f, '' + k, C)
        if (typeof k == 'object' && k !== null) {
            switch (k.$$typeof) {
                case Pr:
                    return (
                        (f = f.get(k.key === null ? d : k.key) || null),
                        s(c, f, k, C)
                    )
                case Gt:
                    return (
                        (f = f.get(k.key === null ? d : k.key) || null),
                        a(c, f, k, C)
                    )
                case ft:
                    var N = k._init
                    return S(f, c, d, N(k._payload), C)
            }
            if (In(k) || Pn(k))
                return (f = f.get(d) || null), p(c, f, k, C, null)
            Ir(c, k)
        }
        return null
    }
    function y(f, c, d, k) {
        for (
            var C = null, N = null, P = c, T = (c = 0), H = null;
            P !== null && T < d.length;
            T++
        ) {
            P.index > T ? ((H = P), (P = null)) : (H = P.sibling)
            var L = m(f, P, d[T], k)
            if (L === null) {
                P === null && (P = H)
                break
            }
            e && P && L.alternate === null && t(f, P),
                (c = o(L, c, T)),
                N === null ? (C = L) : (N.sibling = L),
                (N = L),
                (P = H)
        }
        if (T === d.length) return n(f, P), $ && Bt(f, T), C
        if (P === null) {
            for (; T < d.length; T++)
                (P = h(f, d[T], k)),
                    P !== null &&
                        ((c = o(P, c, T)),
                        N === null ? (C = P) : (N.sibling = P),
                        (N = P))
            return $ && Bt(f, T), C
        }
        for (P = r(f, P); T < d.length; T++)
            (H = S(P, f, T, d[T], k)),
                H !== null &&
                    (e &&
                        H.alternate !== null &&
                        P.delete(H.key === null ? T : H.key),
                    (c = o(H, c, T)),
                    N === null ? (C = H) : (N.sibling = H),
                    (N = H))
        return (
            e &&
                P.forEach(function (le) {
                    return t(f, le)
                }),
            $ && Bt(f, T),
            C
        )
    }
    function v(f, c, d, k) {
        var C = Pn(d)
        if (typeof C != 'function') throw Error(E(150))
        if (((d = C.call(d)), d == null)) throw Error(E(151))
        for (
            var N = (C = null), P = c, T = (c = 0), H = null, L = d.next();
            P !== null && !L.done;
            T++, L = d.next()
        ) {
            P.index > T ? ((H = P), (P = null)) : (H = P.sibling)
            var le = m(f, P, L.value, k)
            if (le === null) {
                P === null && (P = H)
                break
            }
            e && P && le.alternate === null && t(f, P),
                (c = o(le, c, T)),
                N === null ? (C = le) : (N.sibling = le),
                (N = le),
                (P = H)
        }
        if (L.done) return n(f, P), $ && Bt(f, T), C
        if (P === null) {
            for (; !L.done; T++, L = d.next())
                (L = h(f, L.value, k)),
                    L !== null &&
                        ((c = o(L, c, T)),
                        N === null ? (C = L) : (N.sibling = L),
                        (N = L))
            return $ && Bt(f, T), C
        }
        for (P = r(f, P); !L.done; T++, L = d.next())
            (L = S(P, f, T, L.value, k)),
                L !== null &&
                    (e &&
                        L.alternate !== null &&
                        P.delete(L.key === null ? T : L.key),
                    (c = o(L, c, T)),
                    N === null ? (C = L) : (N.sibling = L),
                    (N = L))
        return (
            e &&
                P.forEach(function (ut) {
                    return t(f, ut)
                }),
            $ && Bt(f, T),
            C
        )
    }
    function j(f, c, d, k) {
        if (
            (typeof d == 'object' &&
                d !== null &&
                d.type === qt &&
                d.key === null &&
                (d = d.props.children),
            typeof d == 'object' && d !== null)
        ) {
            switch (d.$$typeof) {
                case Pr:
                    e: {
                        for (var C = d.key, N = c; N !== null; ) {
                            if (N.key === C) {
                                if (((C = d.type), C === qt)) {
                                    if (N.tag === 7) {
                                        n(f, N.sibling),
                                            (c = l(N, d.props.children)),
                                            (c.return = f),
                                            (f = c)
                                        break e
                                    }
                                } else if (
                                    N.elementType === C ||
                                    (typeof C == 'object' &&
                                        C !== null &&
                                        C.$$typeof === ft &&
                                        gs(C) === N.type)
                                ) {
                                    n(f, N.sibling),
                                        (c = l(N, d.props)),
                                        (c.ref = jn(f, N, d)),
                                        (c.return = f),
                                        (f = c)
                                    break e
                                }
                                n(f, N)
                                break
                            } else t(f, N)
                            N = N.sibling
                        }
                        d.type === qt
                            ? ((c = $t(d.props.children, f.mode, k, d.key)),
                              (c.return = f),
                              (f = c))
                            : ((k = el(
                                  d.type,
                                  d.key,
                                  d.props,
                                  null,
                                  f.mode,
                                  k
                              )),
                              (k.ref = jn(f, c, d)),
                              (k.return = f),
                              (f = k))
                    }
                    return i(f)
                case Gt:
                    e: {
                        for (N = d.key; c !== null; ) {
                            if (c.key === N)
                                if (
                                    c.tag === 4 &&
                                    c.stateNode.containerInfo ===
                                        d.containerInfo &&
                                    c.stateNode.implementation ===
                                        d.implementation
                                ) {
                                    n(f, c.sibling),
                                        (c = l(c, d.children || [])),
                                        (c.return = f),
                                        (f = c)
                                    break e
                                } else {
                                    n(f, c)
                                    break
                                }
                            else t(f, c)
                            c = c.sibling
                        }
                        ;(c = No(d, f.mode, k)), (c.return = f), (f = c)
                    }
                    return i(f)
                case ft:
                    return (N = d._init), j(f, c, N(d._payload), k)
            }
            if (In(d)) return y(f, c, d, k)
            if (Pn(d)) return v(f, c, d, k)
            Ir(f, d)
        }
        return (typeof d == 'string' && d !== '') || typeof d == 'number'
            ? ((d = '' + d),
              c !== null && c.tag === 6
                  ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
                  : (n(f, c), (c = _o(d, f.mode, k)), (c.return = f), (f = c)),
              i(f))
            : n(f, c)
    }
    return j
}
var vn = dc(!0),
    pc = dc(!1),
    wr = {},
    Ye = Rt(wr),
    ur = Rt(wr),
    sr = Rt(wr)
function Ut(e) {
    if (e === wr) throw Error(E(174))
    return e
}
function nu(e, t) {
    switch ((I(sr, t), I(ur, e), I(Ye, wr), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : $o(null, '')
            break
        default:
            ;(e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = $o(t, e))
    }
    M(Ye), I(Ye, t)
}
function wn() {
    M(Ye), M(ur), M(sr)
}
function hc(e) {
    Ut(sr.current)
    var t = Ut(Ye.current),
        n = $o(t, e.type)
    t !== n && (I(ur, e), I(Ye, n))
}
function ru(e) {
    ur.current === e && (M(Ye), M(ur))
}
var V = Rt(0)
function kl(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === '$?' || n.data === '$!')
            )
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            ;(t.child.return = t), (t = t.child)
            continue
        }
        if (t === e) break
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null
            t = t.return
        }
        ;(t.sibling.return = t.return), (t = t.sibling)
    }
    return null
}
var wo = []
function lu() {
    for (var e = 0; e < wo.length; e++)
        wo[e]._workInProgressVersionPrimary = null
    wo.length = 0
}
var Xr = it.ReactCurrentDispatcher,
    So = it.ReactCurrentBatchConfig,
    Wt = 0,
    W = null,
    q = null,
    ne = null,
    El = !1,
    Kn = !1,
    ar = 0,
    Np = 0
function se() {
    throw Error(E(321))
}
function ou(e, t) {
    if (t === null) return !1
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!$e(e[n], t[n])) return !1
    return !0
}
function iu(e, t, n, r, l, o) {
    if (
        ((Wt = o),
        (W = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Xr.current = e === null || e.memoizedState === null ? Lp : Op),
        (e = n(r, l)),
        Kn)
    ) {
        o = 0
        do {
            if (((Kn = !1), (ar = 0), 25 <= o)) throw Error(E(301))
            ;(o += 1),
                (ne = q = null),
                (t.updateQueue = null),
                (Xr.current = jp),
                (e = n(r, l))
        } while (Kn)
    }
    if (
        ((Xr.current = xl),
        (t = q !== null && q.next !== null),
        (Wt = 0),
        (ne = q = W = null),
        (El = !1),
        t)
    )
        throw Error(E(300))
    return e
}
function uu() {
    var e = ar !== 0
    return (ar = 0), e
}
function Ve() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    }
    return ne === null ? (W.memoizedState = ne = e) : (ne = ne.next = e), ne
}
function ze() {
    if (q === null) {
        var e = W.alternate
        e = e !== null ? e.memoizedState : null
    } else e = q.next
    var t = ne === null ? W.memoizedState : ne.next
    if (t !== null) (ne = t), (q = e)
    else {
        if (e === null) throw Error(E(310))
        ;(q = e),
            (e = {
                memoizedState: q.memoizedState,
                baseState: q.baseState,
                baseQueue: q.baseQueue,
                queue: q.queue,
                next: null,
            }),
            ne === null ? (W.memoizedState = ne = e) : (ne = ne.next = e)
    }
    return ne
}
function cr(e, t) {
    return typeof t == 'function' ? t(e) : t
}
function ko(e) {
    var t = ze(),
        n = t.queue
    if (n === null) throw Error(E(311))
    n.lastRenderedReducer = e
    var r = q,
        l = r.baseQueue,
        o = n.pending
    if (o !== null) {
        if (l !== null) {
            var i = l.next
            ;(l.next = o.next), (o.next = i)
        }
        ;(r.baseQueue = l = o), (n.pending = null)
    }
    if (l !== null) {
        ;(o = l.next), (r = r.baseState)
        var u = (i = null),
            s = null,
            a = o
        do {
            var p = a.lane
            if ((Wt & p) === p)
                s !== null &&
                    (s = s.next =
                        {
                            lane: 0,
                            action: a.action,
                            hasEagerState: a.hasEagerState,
                            eagerState: a.eagerState,
                            next: null,
                        }),
                    (r = a.hasEagerState ? a.eagerState : e(r, a.action))
            else {
                var h = {
                    lane: p,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null,
                }
                s === null ? ((u = s = h), (i = r)) : (s = s.next = h),
                    (W.lanes |= p),
                    (Qt |= p)
            }
            a = a.next
        } while (a !== null && a !== o)
        s === null ? (i = r) : (s.next = u),
            $e(r, t.memoizedState) || (ge = !0),
            (t.memoizedState = r),
            (t.baseState = i),
            (t.baseQueue = s),
            (n.lastRenderedState = r)
    }
    if (((e = n.interleaved), e !== null)) {
        l = e
        do (o = l.lane), (W.lanes |= o), (Qt |= o), (l = l.next)
        while (l !== e)
    } else l === null && (n.lanes = 0)
    return [t.memoizedState, n.dispatch]
}
function Eo(e) {
    var t = ze(),
        n = t.queue
    if (n === null) throw Error(E(311))
    n.lastRenderedReducer = e
    var r = n.dispatch,
        l = n.pending,
        o = t.memoizedState
    if (l !== null) {
        n.pending = null
        var i = (l = l.next)
        do (o = e(o, i.action)), (i = i.next)
        while (i !== l)
        $e(o, t.memoizedState) || (ge = !0),
            (t.memoizedState = o),
            t.baseQueue === null && (t.baseState = o),
            (n.lastRenderedState = o)
    }
    return [o, r]
}
function mc() {}
function yc(e, t) {
    var n = W,
        r = ze(),
        l = t(),
        o = !$e(r.memoizedState, l)
    if (
        (o && ((r.memoizedState = l), (ge = !0)),
        (r = r.queue),
        su(wc.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || (ne !== null && ne.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            fr(9, vc.bind(null, n, r, l, t), void 0, null),
            re === null)
        )
            throw Error(E(349))
        Wt & 30 || gc(n, t, l)
    }
    return l
}
function gc(e, t, n) {
    ;(e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = W.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (W.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function vc(e, t, n, r) {
    ;(t.value = n), (t.getSnapshot = r), Sc(t) && kc(e)
}
function wc(e, t, n) {
    return n(function () {
        Sc(t) && kc(e)
    })
}
function Sc(e) {
    var t = e.getSnapshot
    e = e.value
    try {
        var n = t()
        return !$e(e, n)
    } catch {
        return !0
    }
}
function kc(e) {
    var t = lt(e, 1)
    t !== null && Me(t, e, 1, -1)
}
function vs(e) {
    var t = Ve()
    return (
        typeof e == 'function' && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: cr,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Rp.bind(null, W, e)),
        [t.memoizedState, e]
    )
}
function fr(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = W.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (W.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next),
                    (n.next = e),
                    (e.next = r),
                    (t.lastEffect = e))),
        e
    )
}
function Ec() {
    return ze().memoizedState
}
function Gr(e, t, n, r) {
    var l = Ve()
    ;(W.flags |= e),
        (l.memoizedState = fr(1 | t, n, void 0, r === void 0 ? null : r))
}
function Ul(e, t, n, r) {
    var l = ze()
    r = r === void 0 ? null : r
    var o = void 0
    if (q !== null) {
        var i = q.memoizedState
        if (((o = i.destroy), r !== null && ou(r, i.deps))) {
            l.memoizedState = fr(t, n, o, r)
            return
        }
    }
    ;(W.flags |= e), (l.memoizedState = fr(1 | t, n, o, r))
}
function ws(e, t) {
    return Gr(8390656, 8, e, t)
}
function su(e, t) {
    return Ul(2048, 8, e, t)
}
function xc(e, t) {
    return Ul(4, 2, e, t)
}
function Cc(e, t) {
    return Ul(4, 4, e, t)
}
function _c(e, t) {
    if (typeof t == 'function')
        return (
            (e = e()),
            t(e),
            function () {
                t(null)
            }
        )
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null
            }
        )
}
function Nc(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), Ul(4, 4, _c.bind(null, t, e), n)
    )
}
function au() {}
function Pc(e, t) {
    var n = ze()
    t = t === void 0 ? null : t
    var r = n.memoizedState
    return r !== null && t !== null && ou(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e)
}
function Tc(e, t) {
    var n = ze()
    t = t === void 0 ? null : t
    var r = n.memoizedState
    return r !== null && t !== null && ou(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e)
}
function Rc(e, t, n) {
    return Wt & 21
        ? ($e(n, t) ||
              ((n = ja()), (W.lanes |= n), (Qt |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (ge = !0)),
          (e.memoizedState = n))
}
function Pp(e, t) {
    var n = A
    ;(A = n !== 0 && 4 > n ? n : 4), e(!0)
    var r = So.transition
    So.transition = {}
    try {
        e(!1), t()
    } finally {
        ;(A = n), (So.transition = r)
    }
}
function Lc() {
    return ze().memoizedState
}
function Tp(e, t, n) {
    var r = xt(e)
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        Oc(e))
    )
        jc(t, n)
    else if (((n = sc(e, t, n, r)), n !== null)) {
        var l = pe()
        Me(n, e, r, l), zc(n, t, r)
    }
}
function Rp(e, t, n) {
    var r = xt(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }
    if (Oc(e)) jc(t, l)
    else {
        var o = e.alternate
        if (
            e.lanes === 0 &&
            (o === null || o.lanes === 0) &&
            ((o = t.lastRenderedReducer), o !== null)
        )
            try {
                var i = t.lastRenderedState,
                    u = o(i, n)
                if (((l.hasEagerState = !0), (l.eagerState = u), $e(u, i))) {
                    var s = t.interleaved
                    s === null
                        ? ((l.next = l), eu(t))
                        : ((l.next = s.next), (s.next = l)),
                        (t.interleaved = l)
                    return
                }
            } catch {
            } finally {
            }
        ;(n = sc(e, t, l, r)),
            n !== null && ((l = pe()), Me(n, e, r, l), zc(n, t, r))
    }
}
function Oc(e) {
    var t = e.alternate
    return e === W || (t !== null && t === W)
}
function jc(e, t) {
    Kn = El = !0
    var n = e.pending
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t)
}
function zc(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes
        ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Mi(e, n)
    }
}
var xl = {
        readContext: je,
        useCallback: se,
        useContext: se,
        useEffect: se,
        useImperativeHandle: se,
        useInsertionEffect: se,
        useLayoutEffect: se,
        useMemo: se,
        useReducer: se,
        useRef: se,
        useState: se,
        useDebugValue: se,
        useDeferredValue: se,
        useTransition: se,
        useMutableSource: se,
        useSyncExternalStore: se,
        useId: se,
        unstable_isNewReconciler: !1,
    },
    Lp = {
        readContext: je,
        useCallback: function (e, t) {
            return (Ve().memoizedState = [e, t === void 0 ? null : t]), e
        },
        useContext: je,
        useEffect: ws,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                Gr(4194308, 4, _c.bind(null, t, e), n)
            )
        },
        useLayoutEffect: function (e, t) {
            return Gr(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
            return Gr(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var n = Ve()
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
            )
        },
        useReducer: function (e, t, n) {
            var r = Ve()
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Tp.bind(null, W, e)),
                [r.memoizedState, e]
            )
        },
        useRef: function (e) {
            var t = Ve()
            return (e = { current: e }), (t.memoizedState = e)
        },
        useState: vs,
        useDebugValue: au,
        useDeferredValue: function (e) {
            return (Ve().memoizedState = e)
        },
        useTransition: function () {
            var e = vs(!1),
                t = e[0]
            return (e = Pp.bind(null, e[1])), (Ve().memoizedState = e), [t, e]
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = W,
                l = Ve()
            if ($) {
                if (n === void 0) throw Error(E(407))
                n = n()
            } else {
                if (((n = t()), re === null)) throw Error(E(349))
                Wt & 30 || gc(r, t, n)
            }
            l.memoizedState = n
            var o = { value: n, getSnapshot: t }
            return (
                (l.queue = o),
                ws(wc.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                fr(9, vc.bind(null, r, o, n, t), void 0, null),
                n
            )
        },
        useId: function () {
            var e = Ve(),
                t = re.identifierPrefix
            if ($) {
                var n = Ze,
                    r = qe
                ;(n = (r & ~(1 << (32 - Ue(r) - 1))).toString(32) + n),
                    (t = ':' + t + 'R' + n),
                    (n = ar++),
                    0 < n && (t += 'H' + n.toString(32)),
                    (t += ':')
            } else (n = Np++), (t = ':' + t + 'r' + n.toString(32) + ':')
            return (e.memoizedState = t)
        },
        unstable_isNewReconciler: !1,
    },
    Op = {
        readContext: je,
        useCallback: Pc,
        useContext: je,
        useEffect: su,
        useImperativeHandle: Nc,
        useInsertionEffect: xc,
        useLayoutEffect: Cc,
        useMemo: Tc,
        useReducer: ko,
        useRef: Ec,
        useState: function () {
            return ko(cr)
        },
        useDebugValue: au,
        useDeferredValue: function (e) {
            var t = ze()
            return Rc(t, q.memoizedState, e)
        },
        useTransition: function () {
            var e = ko(cr)[0],
                t = ze().memoizedState
            return [e, t]
        },
        useMutableSource: mc,
        useSyncExternalStore: yc,
        useId: Lc,
        unstable_isNewReconciler: !1,
    },
    jp = {
        readContext: je,
        useCallback: Pc,
        useContext: je,
        useEffect: su,
        useImperativeHandle: Nc,
        useInsertionEffect: xc,
        useLayoutEffect: Cc,
        useMemo: Tc,
        useReducer: Eo,
        useRef: Ec,
        useState: function () {
            return Eo(cr)
        },
        useDebugValue: au,
        useDeferredValue: function (e) {
            var t = ze()
            return q === null
                ? (t.memoizedState = e)
                : Rc(t, q.memoizedState, e)
        },
        useTransition: function () {
            var e = Eo(cr)[0],
                t = ze().memoizedState
            return [e, t]
        },
        useMutableSource: mc,
        useSyncExternalStore: yc,
        useId: Lc,
        unstable_isNewReconciler: !1,
    }
function Sn(e, t) {
    try {
        var n = '',
            r = t
        do (n += id(r)), (r = r.return)
        while (r)
        var l = n
    } catch (o) {
        l =
            `
Error generating stack: ` +
            o.message +
            `
` +
            o.stack
    }
    return { value: e, source: t, stack: l, digest: null }
}
function xo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function ci(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}
var zp = typeof WeakMap == 'function' ? WeakMap : Map
function Bc(e, t, n) {
    ;(n = et(-1, n)), (n.tag = 3), (n.payload = { element: null })
    var r = t.value
    return (
        (n.callback = function () {
            _l || ((_l = !0), (Si = r)), ci(e, t)
        }),
        n
    )
}
function Dc(e, t, n) {
    ;(n = et(-1, n)), (n.tag = 3)
    var r = e.type.getDerivedStateFromError
    if (typeof r == 'function') {
        var l = t.value
        ;(n.payload = function () {
            return r(l)
        }),
            (n.callback = function () {
                ci(e, t)
            })
    }
    var o = e.stateNode
    return (
        o !== null &&
            typeof o.componentDidCatch == 'function' &&
            (n.callback = function () {
                ci(e, t),
                    typeof r != 'function' &&
                        (Et === null ? (Et = new Set([this])) : Et.add(this))
                var i = t.stack
                this.componentDidCatch(t.value, {
                    componentStack: i !== null ? i : '',
                })
            }),
        n
    )
}
function Ss(e, t, n) {
    var r = e.pingCache
    if (r === null) {
        r = e.pingCache = new zp()
        var l = new Set()
        r.set(t, l)
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l))
    l.has(n) || (l.add(n), (e = Yp.bind(null, e, t, n)), t.then(e, e))
}
function ks(e) {
    do {
        var t
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated !== null : !0)),
            t)
        )
            return e
        e = e.return
    } while (e !== null)
    return null
}
function Es(e, t, n, r, l) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = l), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((t = et(-1, 1)), (t.tag = 2), kt(n, t, 1))),
                (n.lanes |= 1)),
          e)
}
var Bp = it.ReactCurrentOwner,
    ge = !1
function de(e, t, n, r) {
    t.child = e === null ? pc(t, null, n, r) : vn(t, e.child, n, r)
}
function xs(e, t, n, r, l) {
    n = n.render
    var o = t.ref
    return (
        pn(t, l),
        (r = iu(e, t, n, r, o, l)),
        (n = uu()),
        e !== null && !ge
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~l),
              ot(e, t, l))
            : ($ && n && Ji(t), (t.flags |= 1), de(e, t, r, l), t.child)
    )
}
function Cs(e, t, n, r, l) {
    if (e === null) {
        var o = n.type
        return typeof o == 'function' &&
            !gu(o) &&
            o.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = o), Ac(e, t, o, r, l))
            : ((e = el(n.type, null, r, t, t.mode, l)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e))
    }
    if (((o = e.child), !(e.lanes & l))) {
        var i = o.memoizedProps
        if (
            ((n = n.compare),
            (n = n !== null ? n : rr),
            n(i, r) && e.ref === t.ref)
        )
            return ot(e, t, l)
    }
    return (
        (t.flags |= 1),
        (e = Ct(o, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    )
}
function Ac(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps
        if (rr(o, r) && e.ref === t.ref)
            if (((ge = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
                e.flags & 131072 && (ge = !0)
            else return (t.lanes = e.lanes), ot(e, t, l)
    }
    return fi(e, t, n, r, l)
}
function Fc(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        o = e !== null ? e.memoizedState : null
    if (r.mode === 'hidden')
        if (!(t.mode & 1))
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                I(sn, ke),
                (ke |= n)
        else {
            if (!(n & 1073741824))
                return (
                    (e = o !== null ? o.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                    }),
                    (t.updateQueue = null),
                    I(sn, ke),
                    (ke |= e),
                    null
                )
            ;(t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = o !== null ? o.baseLanes : n),
                I(sn, ke),
                (ke |= r)
        }
    else
        o !== null
            ? ((r = o.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            I(sn, ke),
            (ke |= r)
    return de(e, t, l, n), t.child
}
function Ic(e, t) {
    var n = t.ref
    ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152))
}
function fi(e, t, n, r, l) {
    var o = we(n) ? Ht : fe.current
    return (
        (o = yn(t, o)),
        pn(t, l),
        (n = iu(e, t, n, r, o, l)),
        (r = uu()),
        e !== null && !ge
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~l),
              ot(e, t, l))
            : ($ && r && Ji(t), (t.flags |= 1), de(e, t, n, l), t.child)
    )
}
function _s(e, t, n, r, l) {
    if (we(n)) {
        var o = !0
        ml(t)
    } else o = !1
    if ((pn(t, l), t.stateNode === null))
        qr(e, t), fc(t, n, r), ai(t, n, r, l), (r = !0)
    else if (e === null) {
        var i = t.stateNode,
            u = t.memoizedProps
        i.props = u
        var s = i.context,
            a = n.contextType
        typeof a == 'object' && a !== null
            ? (a = je(a))
            : ((a = we(n) ? Ht : fe.current), (a = yn(t, a)))
        var p = n.getDerivedStateFromProps,
            h =
                typeof p == 'function' ||
                typeof i.getSnapshotBeforeUpdate == 'function'
        h ||
            (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
                typeof i.componentWillReceiveProps != 'function') ||
            ((u !== r || s !== a) && ys(t, i, r, a)),
            (dt = !1)
        var m = t.memoizedState
        ;(i.state = m),
            Sl(t, r, i, l),
            (s = t.memoizedState),
            u !== r || m !== s || ve.current || dt
                ? (typeof p == 'function' &&
                      (si(t, n, p, r), (s = t.memoizedState)),
                  (u = dt || ms(t, n, u, r, m, s, a))
                      ? (h ||
                            (typeof i.UNSAFE_componentWillMount != 'function' &&
                                typeof i.componentWillMount != 'function') ||
                            (typeof i.componentWillMount == 'function' &&
                                i.componentWillMount(),
                            typeof i.UNSAFE_componentWillMount == 'function' &&
                                i.UNSAFE_componentWillMount()),
                        typeof i.componentDidMount == 'function' &&
                            (t.flags |= 4194308))
                      : (typeof i.componentDidMount == 'function' &&
                            (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = a),
                  (r = u))
                : (typeof i.componentDidMount == 'function' &&
                      (t.flags |= 4194308),
                  (r = !1))
    } else {
        ;(i = t.stateNode),
            ac(e, t),
            (u = t.memoizedProps),
            (a = t.type === t.elementType ? u : Ae(t.type, u)),
            (i.props = a),
            (h = t.pendingProps),
            (m = i.context),
            (s = n.contextType),
            typeof s == 'object' && s !== null
                ? (s = je(s))
                : ((s = we(n) ? Ht : fe.current), (s = yn(t, s)))
        var S = n.getDerivedStateFromProps
        ;(p =
            typeof S == 'function' ||
            typeof i.getSnapshotBeforeUpdate == 'function') ||
            (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
                typeof i.componentWillReceiveProps != 'function') ||
            ((u !== h || m !== s) && ys(t, i, r, s)),
            (dt = !1),
            (m = t.memoizedState),
            (i.state = m),
            Sl(t, r, i, l)
        var y = t.memoizedState
        u !== h || m !== y || ve.current || dt
            ? (typeof S == 'function' &&
                  (si(t, n, S, r), (y = t.memoizedState)),
              (a = dt || ms(t, n, a, r, m, y, s) || !1)
                  ? (p ||
                        (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                            typeof i.componentWillUpdate != 'function') ||
                        (typeof i.componentWillUpdate == 'function' &&
                            i.componentWillUpdate(r, y, s),
                        typeof i.UNSAFE_componentWillUpdate == 'function' &&
                            i.UNSAFE_componentWillUpdate(r, y, s)),
                    typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
                    typeof i.getSnapshotBeforeUpdate == 'function' &&
                        (t.flags |= 1024))
                  : (typeof i.componentDidUpdate != 'function' ||
                        (u === e.memoizedProps && m === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof i.getSnapshotBeforeUpdate != 'function' ||
                        (u === e.memoizedProps && m === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = y)),
              (i.props = r),
              (i.state = y),
              (i.context = s),
              (r = a))
            : (typeof i.componentDidUpdate != 'function' ||
                  (u === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != 'function' ||
                  (u === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1))
    }
    return di(e, t, n, r, o, l)
}
function di(e, t, n, r, l, o) {
    Ic(e, t)
    var i = (t.flags & 128) !== 0
    if (!r && !i) return l && cs(t, n, !1), ot(e, t, o)
    ;(r = t.stateNode), (Bp.current = t)
    var u =
        i && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
    return (
        (t.flags |= 1),
        e !== null && i
            ? ((t.child = vn(t, e.child, null, o)),
              (t.child = vn(t, null, u, o)))
            : de(e, t, u, o),
        (t.memoizedState = r.state),
        l && cs(t, n, !0),
        t.child
    )
}
function Uc(e) {
    var t = e.stateNode
    t.pendingContext
        ? as(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && as(e, t.context, !1),
        nu(e, t.containerInfo)
}
function Ns(e, t, n, r, l) {
    return gn(), Gi(l), (t.flags |= 256), de(e, t, n, r), t.child
}
var pi = { dehydrated: null, treeContext: null, retryLane: 0 }
function hi(e) {
    return { baseLanes: e, cachePool: null, transitions: null }
}
function Mc(e, t, n) {
    var r = t.pendingProps,
        l = V.current,
        o = !1,
        i = (t.flags & 128) !== 0,
        u
    if (
        ((u = i) ||
            (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
        u
            ? ((o = !0), (t.flags &= -129))
            : (e === null || e.memoizedState !== null) && (l |= 1),
        I(V, l & 1),
        e === null)
    )
        return (
            ii(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1
                      ? e.data === '$!'
                          ? (t.lanes = 8)
                          : (t.lanes = 1073741824)
                      : (t.lanes = 1),
                  null)
                : ((i = r.children),
                  (e = r.fallback),
                  o
                      ? ((r = t.mode),
                        (o = t.child),
                        (i = { mode: 'hidden', children: i }),
                        !(r & 1) && o !== null
                            ? ((o.childLanes = 0), (o.pendingProps = i))
                            : (o = Hl(i, r, 0, null)),
                        (e = $t(e, r, n, null)),
                        (o.return = t),
                        (e.return = t),
                        (o.sibling = e),
                        (t.child = o),
                        (t.child.memoizedState = hi(n)),
                        (t.memoizedState = pi),
                        e)
                      : cu(t, i))
        )
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
        return Dp(e, t, i, r, u, l, n)
    if (o) {
        ;(o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling)
        var s = { mode: 'hidden', children: r.children }
        return (
            !(i & 1) && t.child !== l
                ? ((r = t.child),
                  (r.childLanes = 0),
                  (r.pendingProps = s),
                  (t.deletions = null))
                : ((r = Ct(l, s)),
                  (r.subtreeFlags = l.subtreeFlags & 14680064)),
            u !== null
                ? (o = Ct(u, o))
                : ((o = $t(o, i, n, null)), (o.flags |= 2)),
            (o.return = t),
            (r.return = t),
            (r.sibling = o),
            (t.child = r),
            (r = o),
            (o = t.child),
            (i = e.child.memoizedState),
            (i =
                i === null
                    ? hi(n)
                    : {
                          baseLanes: i.baseLanes | n,
                          cachePool: null,
                          transitions: i.transitions,
                      }),
            (o.memoizedState = i),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = pi),
            r
        )
    }
    return (
        (o = e.child),
        (e = o.sibling),
        (r = Ct(o, { mode: 'visible', children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
            ((n = t.deletions),
            n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    )
}
function cu(e, t) {
    return (
        (t = Hl({ mode: 'visible', children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    )
}
function Ur(e, t, n, r) {
    return (
        r !== null && Gi(r),
        vn(t, e.child, null, n),
        (e = cu(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    )
}
function Dp(e, t, n, r, l, o, i) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = xo(Error(E(422)))), Ur(e, t, i, r))
            : t.memoizedState !== null
              ? ((t.child = e.child), (t.flags |= 128), null)
              : ((o = r.fallback),
                (l = t.mode),
                (r = Hl({ mode: 'visible', children: r.children }, l, 0, null)),
                (o = $t(o, l, i, null)),
                (o.flags |= 2),
                (r.return = t),
                (o.return = t),
                (r.sibling = o),
                (t.child = r),
                t.mode & 1 && vn(t, e.child, null, i),
                (t.child.memoizedState = hi(i)),
                (t.memoizedState = pi),
                o)
    if (!(t.mode & 1)) return Ur(e, t, i, null)
    if (l.data === '$!') {
        if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst
        return (
            (r = u), (o = Error(E(419))), (r = xo(o, r, void 0)), Ur(e, t, i, r)
        )
    }
    if (((u = (i & e.childLanes) !== 0), ge || u)) {
        if (((r = re), r !== null)) {
            switch (i & -i) {
                case 4:
                    l = 2
                    break
                case 16:
                    l = 8
                    break
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
                    l = 32
                    break
                case 536870912:
                    l = 268435456
                    break
                default:
                    l = 0
            }
            ;(l = l & (r.suspendedLanes | i) ? 0 : l),
                l !== 0 &&
                    l !== o.retryLane &&
                    ((o.retryLane = l), lt(e, l), Me(r, e, l, -1))
        }
        return yu(), (r = xo(Error(E(421)))), Ur(e, t, i, r)
    }
    return l.data === '$?'
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = Jp.bind(null, e)),
          (l._reactRetry = t),
          null)
        : ((e = o.treeContext),
          (Ee = St(l.nextSibling)),
          (xe = t),
          ($ = !0),
          (Ie = null),
          e !== null &&
              ((Pe[Te++] = qe),
              (Pe[Te++] = Ze),
              (Pe[Te++] = Vt),
              (qe = e.id),
              (Ze = e.overflow),
              (Vt = t)),
          (t = cu(t, r.children)),
          (t.flags |= 4096),
          t)
}
function Ps(e, t, n) {
    e.lanes |= t
    var r = e.alternate
    r !== null && (r.lanes |= t), ui(e.return, t, n)
}
function Co(e, t, n, r, l) {
    var o = e.memoizedState
    o === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: l,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = l))
}
function $c(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        o = r.tail
    if ((de(e, t, r.children, n), (r = V.current), r & 2))
        (r = (r & 1) | 2), (t.flags |= 128)
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && Ps(e, n, t)
                else if (e.tag === 19) Ps(e, n, t)
                else if (e.child !== null) {
                    ;(e.child.return = e), (e = e.child)
                    continue
                }
                if (e === t) break e
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e
                    e = e.return
                }
                ;(e.sibling.return = e.return), (e = e.sibling)
            }
        r &= 1
    }
    if ((I(V, r), !(t.mode & 1))) t.memoizedState = null
    else
        switch (l) {
            case 'forwards':
                for (n = t.child, l = null; n !== null; )
                    (e = n.alternate),
                        e !== null && kl(e) === null && (l = n),
                        (n = n.sibling)
                ;(n = l),
                    n === null
                        ? ((l = t.child), (t.child = null))
                        : ((l = n.sibling), (n.sibling = null)),
                    Co(t, !1, l, n, o)
                break
            case 'backwards':
                for (n = null, l = t.child, t.child = null; l !== null; ) {
                    if (((e = l.alternate), e !== null && kl(e) === null)) {
                        t.child = l
                        break
                    }
                    ;(e = l.sibling), (l.sibling = n), (n = l), (l = e)
                }
                Co(t, !0, n, null, o)
                break
            case 'together':
                Co(t, !1, null, null, void 0)
                break
            default:
                t.memoizedState = null
        }
    return t.child
}
function qr(e, t) {
    !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function ot(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (Qt |= t.lanes),
        !(n & t.childLanes))
    )
        return null
    if (e !== null && t.child !== e.child) throw Error(E(153))
    if (t.child !== null) {
        for (
            e = t.child, n = Ct(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling),
                (n = n.sibling = Ct(e, e.pendingProps)),
                (n.return = t)
        n.sibling = null
    }
    return t.child
}
function Ap(e, t, n) {
    switch (t.tag) {
        case 3:
            Uc(t), gn()
            break
        case 5:
            hc(t)
            break
        case 1:
            we(t.type) && ml(t)
            break
        case 4:
            nu(t, t.stateNode.containerInfo)
            break
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value
            I(vl, r._currentValue), (r._currentValue = l)
            break
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (I(V, V.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                      ? Mc(e, t, n)
                      : (I(V, V.current & 1),
                        (e = ot(e, t, n)),
                        e !== null ? e.sibling : null)
            I(V, V.current & 1)
            break
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return $c(e, t, n)
                t.flags |= 128
            }
            if (
                ((l = t.memoizedState),
                l !== null &&
                    ((l.rendering = null),
                    (l.tail = null),
                    (l.lastEffect = null)),
                I(V, V.current),
                r)
            )
                break
            return null
        case 22:
        case 23:
            return (t.lanes = 0), Fc(e, t, n)
    }
    return ot(e, t, n)
}
var Hc, mi, Vc, Wc
Hc = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
        else if (n.tag !== 4 && n.child !== null) {
            ;(n.child.return = n), (n = n.child)
            continue
        }
        if (n === t) break
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return
            n = n.return
        }
        ;(n.sibling.return = n.return), (n = n.sibling)
    }
}
mi = function () {}
Vc = function (e, t, n, r) {
    var l = e.memoizedProps
    if (l !== r) {
        ;(e = t.stateNode), Ut(Ye.current)
        var o = null
        switch (n) {
            case 'input':
                ;(l = Fo(e, l)), (r = Fo(e, r)), (o = [])
                break
            case 'select':
                ;(l = Q({}, l, { value: void 0 })),
                    (r = Q({}, r, { value: void 0 })),
                    (o = [])
                break
            case 'textarea':
                ;(l = Mo(e, l)), (r = Mo(e, r)), (o = [])
                break
            default:
                typeof l.onClick != 'function' &&
                    typeof r.onClick == 'function' &&
                    (e.onclick = pl)
        }
        Ho(n, r)
        var i
        n = null
        for (a in l)
            if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
                if (a === 'style') {
                    var u = l[a]
                    for (i in u)
                        u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''))
                } else
                    a !== 'dangerouslySetInnerHTML' &&
                        a !== 'children' &&
                        a !== 'suppressContentEditableWarning' &&
                        a !== 'suppressHydrationWarning' &&
                        a !== 'autoFocus' &&
                        (Gn.hasOwnProperty(a)
                            ? o || (o = [])
                            : (o = o || []).push(a, null))
        for (a in r) {
            var s = r[a]
            if (
                ((u = l != null ? l[a] : void 0),
                r.hasOwnProperty(a) && s !== u && (s != null || u != null))
            )
                if (a === 'style')
                    if (u) {
                        for (i in u)
                            !u.hasOwnProperty(i) ||
                                (s && s.hasOwnProperty(i)) ||
                                (n || (n = {}), (n[i] = ''))
                        for (i in s)
                            s.hasOwnProperty(i) &&
                                u[i] !== s[i] &&
                                (n || (n = {}), (n[i] = s[i]))
                    } else n || (o || (o = []), o.push(a, n)), (n = s)
                else
                    a === 'dangerouslySetInnerHTML'
                        ? ((s = s ? s.__html : void 0),
                          (u = u ? u.__html : void 0),
                          s != null && u !== s && (o = o || []).push(a, s))
                        : a === 'children'
                          ? (typeof s != 'string' && typeof s != 'number') ||
                            (o = o || []).push(a, '' + s)
                          : a !== 'suppressContentEditableWarning' &&
                            a !== 'suppressHydrationWarning' &&
                            (Gn.hasOwnProperty(a)
                                ? (s != null &&
                                      a === 'onScroll' &&
                                      U('scroll', e),
                                  o || u === s || (o = []))
                                : (o = o || []).push(a, s))
        }
        n && (o = o || []).push('style', n)
        var a = o
        ;(t.updateQueue = a) && (t.flags |= 4)
    }
}
Wc = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
}
function zn(e, t) {
    if (!$)
        switch (e.tailMode) {
            case 'hidden':
                t = e.tail
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t), (t = t.sibling)
                n === null ? (e.tail = null) : (n.sibling = null)
                break
            case 'collapsed':
                n = e.tail
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n), (n = n.sibling)
                r === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null)
        }
}
function ae(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0
    if (t)
        for (var l = e.child; l !== null; )
            (n |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags & 14680064),
                (r |= l.flags & 14680064),
                (l.return = e),
                (l = l.sibling)
    else
        for (l = e.child; l !== null; )
            (n |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags),
                (r |= l.flags),
                (l.return = e),
                (l = l.sibling)
    return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function Fp(e, t, n) {
    var r = t.pendingProps
    switch ((Xi(t), t.tag)) {
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
            return ae(t), null
        case 1:
            return we(t.type) && hl(), ae(t), null
        case 3:
            return (
                (r = t.stateNode),
                wn(),
                M(ve),
                M(fe),
                lu(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (Fr(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024),
                          Ie !== null && (xi(Ie), (Ie = null)))),
                mi(e, t),
                ae(t),
                null
            )
        case 5:
            ru(t)
            var l = Ut(sr.current)
            if (((n = t.type), e !== null && t.stateNode != null))
                Vc(e, t, n, r, l),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(E(166))
                    return ae(t), null
                }
                if (((e = Ut(Ye.current)), Fr(t))) {
                    ;(r = t.stateNode), (n = t.type)
                    var o = t.memoizedProps
                    switch (
                        ((r[We] = t), (r[ir] = o), (e = (t.mode & 1) !== 0), n)
                    ) {
                        case 'dialog':
                            U('cancel', r), U('close', r)
                            break
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            U('load', r)
                            break
                        case 'video':
                        case 'audio':
                            for (l = 0; l < Mn.length; l++) U(Mn[l], r)
                            break
                        case 'source':
                            U('error', r)
                            break
                        case 'img':
                        case 'image':
                        case 'link':
                            U('error', r), U('load', r)
                            break
                        case 'details':
                            U('toggle', r)
                            break
                        case 'input':
                            Au(r, o), U('invalid', r)
                            break
                        case 'select':
                            ;(r._wrapperState = { wasMultiple: !!o.multiple }),
                                U('invalid', r)
                            break
                        case 'textarea':
                            Iu(r, o), U('invalid', r)
                    }
                    Ho(n, o), (l = null)
                    for (var i in o)
                        if (o.hasOwnProperty(i)) {
                            var u = o[i]
                            i === 'children'
                                ? typeof u == 'string'
                                    ? r.textContent !== u &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          Ar(r.textContent, u, e),
                                      (l = ['children', u]))
                                    : typeof u == 'number' &&
                                      r.textContent !== '' + u &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          Ar(r.textContent, u, e),
                                      (l = ['children', '' + u]))
                                : Gn.hasOwnProperty(i) &&
                                  u != null &&
                                  i === 'onScroll' &&
                                  U('scroll', r)
                        }
                    switch (n) {
                        case 'input':
                            Tr(r), Fu(r, o, !0)
                            break
                        case 'textarea':
                            Tr(r), Uu(r)
                            break
                        case 'select':
                        case 'option':
                            break
                        default:
                            typeof o.onClick == 'function' && (r.onclick = pl)
                    }
                    ;(r = l), (t.updateQueue = r), r !== null && (t.flags |= 4)
                } else {
                    ;(i = l.nodeType === 9 ? l : l.ownerDocument),
                        e === 'http://www.w3.org/1999/xhtml' && (e = ga(n)),
                        e === 'http://www.w3.org/1999/xhtml'
                            ? n === 'script'
                                ? ((e = i.createElement('div')),
                                  (e.innerHTML = '<script></script>'),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == 'string'
                                  ? (e = i.createElement(n, { is: r.is }))
                                  : ((e = i.createElement(n)),
                                    n === 'select' &&
                                        ((i = e),
                                        r.multiple
                                            ? (i.multiple = !0)
                                            : r.size && (i.size = r.size)))
                            : (e = i.createElementNS(e, n)),
                        (e[We] = t),
                        (e[ir] = r),
                        Hc(e, t, !1, !1),
                        (t.stateNode = e)
                    e: {
                        switch (((i = Vo(n, r)), n)) {
                            case 'dialog':
                                U('cancel', e), U('close', e), (l = r)
                                break
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                U('load', e), (l = r)
                                break
                            case 'video':
                            case 'audio':
                                for (l = 0; l < Mn.length; l++) U(Mn[l], e)
                                l = r
                                break
                            case 'source':
                                U('error', e), (l = r)
                                break
                            case 'img':
                            case 'image':
                            case 'link':
                                U('error', e), U('load', e), (l = r)
                                break
                            case 'details':
                                U('toggle', e), (l = r)
                                break
                            case 'input':
                                Au(e, r), (l = Fo(e, r)), U('invalid', e)
                                break
                            case 'option':
                                l = r
                                break
                            case 'select':
                                ;(e._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (l = Q({}, r, { value: void 0 })),
                                    U('invalid', e)
                                break
                            case 'textarea':
                                Iu(e, r), (l = Mo(e, r)), U('invalid', e)
                                break
                            default:
                                l = r
                        }
                        Ho(n, l), (u = l)
                        for (o in u)
                            if (u.hasOwnProperty(o)) {
                                var s = u[o]
                                o === 'style'
                                    ? Sa(e, s)
                                    : o === 'dangerouslySetInnerHTML'
                                      ? ((s = s ? s.__html : void 0),
                                        s != null && va(e, s))
                                      : o === 'children'
                                        ? typeof s == 'string'
                                            ? (n !== 'textarea' || s !== '') &&
                                              qn(e, s)
                                            : typeof s == 'number' &&
                                              qn(e, '' + s)
                                        : o !==
                                              'suppressContentEditableWarning' &&
                                          o !== 'suppressHydrationWarning' &&
                                          o !== 'autoFocus' &&
                                          (Gn.hasOwnProperty(o)
                                              ? s != null &&
                                                o === 'onScroll' &&
                                                U('scroll', e)
                                              : s != null && Bi(e, o, s, i))
                            }
                        switch (n) {
                            case 'input':
                                Tr(e), Fu(e, r, !1)
                                break
                            case 'textarea':
                                Tr(e), Uu(e)
                                break
                            case 'option':
                                r.value != null &&
                                    e.setAttribute('value', '' + _t(r.value))
                                break
                            case 'select':
                                ;(e.multiple = !!r.multiple),
                                    (o = r.value),
                                    o != null
                                        ? an(e, !!r.multiple, o, !1)
                                        : r.defaultValue != null &&
                                          an(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0
                                          )
                                break
                            default:
                                typeof l.onClick == 'function' &&
                                    (e.onclick = pl)
                        }
                        switch (n) {
                            case 'button':
                            case 'input':
                            case 'select':
                            case 'textarea':
                                r = !!r.autoFocus
                                break e
                            case 'img':
                                r = !0
                                break e
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
            }
            return ae(t), null
        case 6:
            if (e && t.stateNode != null) Wc(e, t, e.memoizedProps, r)
            else {
                if (typeof r != 'string' && t.stateNode === null)
                    throw Error(E(166))
                if (((n = Ut(sr.current)), Ut(Ye.current), Fr(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[We] = t),
                        (o = r.nodeValue !== n) && ((e = xe), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                Ar(r.nodeValue, n, (e.mode & 1) !== 0)
                                break
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 && Ar(r.nodeValue, n, (e.mode & 1) !== 0)
                        }
                    o && (t.flags |= 4)
                } else
                    (r = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(r)),
                        (r[We] = t),
                        (t.stateNode = r)
            }
            return ae(t), null
        case 13:
            if (
                (M(V),
                (r = t.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if ($ && Ee !== null && t.mode & 1 && !(t.flags & 128))
                    uc(), gn(), (t.flags |= 98560), (o = !1)
                else if (((o = Fr(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!o) throw Error(E(318))
                        if (
                            ((o = t.memoizedState),
                            (o = o !== null ? o.dehydrated : null),
                            !o)
                        )
                            throw Error(E(317))
                        o[We] = t
                    } else
                        gn(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            (t.flags |= 4)
                    ae(t), (o = !1)
                } else Ie !== null && (xi(Ie), (Ie = null)), (o = !0)
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 &&
                          (e === null || V.current & 1
                              ? Z === 0 && (Z = 3)
                              : yu())),
                  t.updateQueue !== null && (t.flags |= 4),
                  ae(t),
                  null)
        case 4:
            return (
                wn(),
                mi(e, t),
                e === null && lr(t.stateNode.containerInfo),
                ae(t),
                null
            )
        case 10:
            return bi(t.type._context), ae(t), null
        case 17:
            return we(t.type) && hl(), ae(t), null
        case 19:
            if ((M(V), (o = t.memoizedState), o === null)) return ae(t), null
            if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
                if (r) zn(o, !1)
                else {
                    if (Z !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((i = kl(e)), i !== null)) {
                                for (
                                    t.flags |= 128,
                                        zn(o, !1),
                                        r = i.updateQueue,
                                        r !== null &&
                                            ((t.updateQueue = r),
                                            (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (o = n),
                                        (e = r),
                                        (o.flags &= 14680066),
                                        (i = o.alternate),
                                        i === null
                                            ? ((o.childLanes = 0),
                                              (o.lanes = e),
                                              (o.child = null),
                                              (o.subtreeFlags = 0),
                                              (o.memoizedProps = null),
                                              (o.memoizedState = null),
                                              (o.updateQueue = null),
                                              (o.dependencies = null),
                                              (o.stateNode = null))
                                            : ((o.childLanes = i.childLanes),
                                              (o.lanes = i.lanes),
                                              (o.child = i.child),
                                              (o.subtreeFlags = 0),
                                              (o.deletions = null),
                                              (o.memoizedProps =
                                                  i.memoizedProps),
                                              (o.memoizedState =
                                                  i.memoizedState),
                                              (o.updateQueue = i.updateQueue),
                                              (o.type = i.type),
                                              (e = i.dependencies),
                                              (o.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (n = n.sibling)
                                return I(V, (V.current & 1) | 2), t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null &&
                        J() > kn &&
                        ((t.flags |= 128),
                        (r = !0),
                        zn(o, !1),
                        (t.lanes = 4194304))
                }
            else {
                if (!r)
                    if (((e = kl(i)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            zn(o, !0),
                            o.tail === null &&
                                o.tailMode === 'hidden' &&
                                !i.alternate &&
                                !$)
                        )
                            return ae(t), null
                    } else
                        2 * J() - o.renderingStartTime > kn &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (r = !0),
                            zn(o, !1),
                            (t.lanes = 4194304))
                o.isBackwards
                    ? ((i.sibling = t.child), (t.child = i))
                    : ((n = o.last),
                      n !== null ? (n.sibling = i) : (t.child = i),
                      (o.last = i))
            }
            return o.tail !== null
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = J()),
                  (t.sibling = null),
                  (n = V.current),
                  I(V, r ? (n & 1) | 2 : n & 1),
                  t)
                : (ae(t), null)
        case 22:
        case 23:
            return (
                mu(),
                (r = t.memoizedState !== null),
                e !== null &&
                    (e.memoizedState !== null) !== r &&
                    (t.flags |= 8192),
                r && t.mode & 1
                    ? ke & 1073741824 &&
                      (ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : ae(t),
                null
            )
        case 24:
            return null
        case 25:
            return null
    }
    throw Error(E(156, t.tag))
}
function Ip(e, t) {
    switch ((Xi(t), t.tag)) {
        case 1:
            return (
                we(t.type) && hl(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            )
        case 3:
            return (
                wn(),
                M(ve),
                M(fe),
                lu(),
                (e = t.flags),
                e & 65536 && !(e & 128)
                    ? ((t.flags = (e & -65537) | 128), t)
                    : null
            )
        case 5:
            return ru(t), null
        case 13:
            if (
                (M(V),
                (e = t.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error(E(340))
                gn()
            }
            return (
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            )
        case 19:
            return M(V), null
        case 4:
            return wn(), null
        case 10:
            return bi(t.type._context), null
        case 22:
        case 23:
            return mu(), null
        case 24:
            return null
        default:
            return null
    }
}
var Mr = !1,
    ce = !1,
    Up = typeof WeakSet == 'function' ? WeakSet : Set,
    _ = null
function un(e, t) {
    var n = e.ref
    if (n !== null)
        if (typeof n == 'function')
            try {
                n(null)
            } catch (r) {
                K(e, t, r)
            }
        else n.current = null
}
function yi(e, t, n) {
    try {
        n()
    } catch (r) {
        K(e, t, r)
    }
}
var Ts = !1
function Mp(e, t) {
    if (((bo = cl), (e = Ja()), Yi(e))) {
        if ('selectionStart' in e)
            var n = { start: e.selectionStart, end: e.selectionEnd }
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window
                var r = n.getSelection && n.getSelection()
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode
                    var l = r.anchorOffset,
                        o = r.focusNode
                    r = r.focusOffset
                    try {
                        n.nodeType, o.nodeType
                    } catch {
                        n = null
                        break e
                    }
                    var i = 0,
                        u = -1,
                        s = -1,
                        a = 0,
                        p = 0,
                        h = e,
                        m = null
                    t: for (;;) {
                        for (
                            var S;
                            h !== n ||
                                (l !== 0 && h.nodeType !== 3) ||
                                (u = i + l),
                                h !== o ||
                                    (r !== 0 && h.nodeType !== 3) ||
                                    (s = i + r),
                                h.nodeType === 3 && (i += h.nodeValue.length),
                                (S = h.firstChild) !== null;

                        )
                            (m = h), (h = S)
                        for (;;) {
                            if (h === e) break t
                            if (
                                (m === n && ++a === l && (u = i),
                                m === o && ++p === r && (s = i),
                                (S = h.nextSibling) !== null)
                            )
                                break
                            ;(h = m), (m = h.parentNode)
                        }
                        h = S
                    }
                    n = u === -1 || s === -1 ? null : { start: u, end: s }
                } else n = null
            }
        n = n || { start: 0, end: 0 }
    } else n = null
    for (
        ei = { focusedElem: e, selectionRange: n }, cl = !1, _ = t;
        _ !== null;

    )
        if (
            ((t = _),
            (e = t.child),
            (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = t), (_ = e)
        else
            for (; _ !== null; ) {
                t = _
                try {
                    var y = t.alternate
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break
                            case 1:
                                if (y !== null) {
                                    var v = y.memoizedProps,
                                        j = y.memoizedState,
                                        f = t.stateNode,
                                        c = f.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? v
                                                : Ae(t.type, v),
                                            j
                                        )
                                    f.__reactInternalSnapshotBeforeUpdate = c
                                }
                                break
                            case 3:
                                var d = t.stateNode.containerInfo
                                d.nodeType === 1
                                    ? (d.textContent = '')
                                    : d.nodeType === 9 &&
                                      d.documentElement &&
                                      d.removeChild(d.documentElement)
                                break
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break
                            default:
                                throw Error(E(163))
                        }
                } catch (k) {
                    K(t, t.return, k)
                }
                if (((e = t.sibling), e !== null)) {
                    ;(e.return = t.return), (_ = e)
                    break
                }
                _ = t.return
            }
    return (y = Ts), (Ts = !1), y
}
function Yn(e, t, n) {
    var r = t.updateQueue
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var l = (r = r.next)
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy
                ;(l.destroy = void 0), o !== void 0 && yi(t, n, o)
            }
            l = l.next
        } while (l !== r)
    }
}
function Ml(e, t) {
    if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
    ) {
        var n = (t = t.next)
        do {
            if ((n.tag & e) === e) {
                var r = n.create
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function gi(e) {
    var t = e.ref
    if (t !== null) {
        var n = e.stateNode
        switch (e.tag) {
            case 5:
                e = n
                break
            default:
                e = n
        }
        typeof t == 'function' ? t(e) : (t.current = e)
    }
}
function Qc(e) {
    var t = e.alternate
    t !== null && ((e.alternate = null), Qc(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[We],
                delete t[ir],
                delete t[ri],
                delete t[Ep],
                delete t[xp])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null)
}
function Kc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Rs(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || Kc(e.return)) return null
            e = e.return
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e
            ;(e.child.return = e), (e = e.child)
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}
function vi(e, t, n) {
    var r = e.tag
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8
                      ? ((t = n.parentNode), t.insertBefore(e, n))
                      : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = pl))
    else if (r !== 4 && ((e = e.child), e !== null))
        for (vi(e, t, n), e = e.sibling; e !== null; )
            vi(e, t, n), (e = e.sibling)
}
function wi(e, t, n) {
    var r = e.tag
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
    else if (r !== 4 && ((e = e.child), e !== null))
        for (wi(e, t, n), e = e.sibling; e !== null; )
            wi(e, t, n), (e = e.sibling)
}
var oe = null,
    Fe = !1
function at(e, t, n) {
    for (n = n.child; n !== null; ) Yc(e, t, n), (n = n.sibling)
}
function Yc(e, t, n) {
    if (Ke && typeof Ke.onCommitFiberUnmount == 'function')
        try {
            Ke.onCommitFiberUnmount(jl, n)
        } catch {}
    switch (n.tag) {
        case 5:
            ce || un(n, t)
        case 6:
            var r = oe,
                l = Fe
            ;(oe = null),
                at(e, t, n),
                (oe = r),
                (Fe = l),
                oe !== null &&
                    (Fe
                        ? ((e = oe),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(n)
                              : e.removeChild(n))
                        : oe.removeChild(n.stateNode))
            break
        case 18:
            oe !== null &&
                (Fe
                    ? ((e = oe),
                      (n = n.stateNode),
                      e.nodeType === 8
                          ? go(e.parentNode, n)
                          : e.nodeType === 1 && go(e, n),
                      tr(e))
                    : go(oe, n.stateNode))
            break
        case 4:
            ;(r = oe),
                (l = Fe),
                (oe = n.stateNode.containerInfo),
                (Fe = !0),
                at(e, t, n),
                (oe = r),
                (Fe = l)
            break
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !ce &&
                ((r = n.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                l = r = r.next
                do {
                    var o = l,
                        i = o.destroy
                    ;(o = o.tag),
                        i !== void 0 && (o & 2 || o & 4) && yi(n, t, i),
                        (l = l.next)
                } while (l !== r)
            }
            at(e, t, n)
            break
        case 1:
            if (
                !ce &&
                (un(n, t),
                (r = n.stateNode),
                typeof r.componentWillUnmount == 'function')
            )
                try {
                    ;(r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount()
                } catch (u) {
                    K(n, t, u)
                }
            at(e, t, n)
            break
        case 21:
            at(e, t, n)
            break
        case 22:
            n.mode & 1
                ? ((ce = (r = ce) || n.memoizedState !== null),
                  at(e, t, n),
                  (ce = r))
                : at(e, t, n)
            break
        default:
            at(e, t, n)
    }
}
function Ls(e) {
    var t = e.updateQueue
    if (t !== null) {
        e.updateQueue = null
        var n = e.stateNode
        n === null && (n = e.stateNode = new Up()),
            t.forEach(function (r) {
                var l = Xp.bind(null, e, r)
                n.has(r) || (n.add(r), r.then(l, l))
            })
    }
}
function De(e, t) {
    var n = t.deletions
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r]
            try {
                var o = e,
                    i = t,
                    u = i
                e: for (; u !== null; ) {
                    switch (u.tag) {
                        case 5:
                            ;(oe = u.stateNode), (Fe = !1)
                            break e
                        case 3:
                            ;(oe = u.stateNode.containerInfo), (Fe = !0)
                            break e
                        case 4:
                            ;(oe = u.stateNode.containerInfo), (Fe = !0)
                            break e
                    }
                    u = u.return
                }
                if (oe === null) throw Error(E(160))
                Yc(o, i, l), (oe = null), (Fe = !1)
                var s = l.alternate
                s !== null && (s.return = null), (l.return = null)
            } catch (a) {
                K(l, t, a)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) Jc(t, e), (t = t.sibling)
}
function Jc(e, t) {
    var n = e.alternate,
        r = e.flags
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((De(t, e), He(e), r & 4)) {
                try {
                    Yn(3, e, e.return), Ml(3, e)
                } catch (v) {
                    K(e, e.return, v)
                }
                try {
                    Yn(5, e, e.return)
                } catch (v) {
                    K(e, e.return, v)
                }
            }
            break
        case 1:
            De(t, e), He(e), r & 512 && n !== null && un(n, n.return)
            break
        case 5:
            if (
                (De(t, e),
                He(e),
                r & 512 && n !== null && un(n, n.return),
                e.flags & 32)
            ) {
                var l = e.stateNode
                try {
                    qn(l, '')
                } catch (v) {
                    K(e, e.return, v)
                }
            }
            if (r & 4 && ((l = e.stateNode), l != null)) {
                var o = e.memoizedProps,
                    i = n !== null ? n.memoizedProps : o,
                    u = e.type,
                    s = e.updateQueue
                if (((e.updateQueue = null), s !== null))
                    try {
                        u === 'input' &&
                            o.type === 'radio' &&
                            o.name != null &&
                            ma(l, o),
                            Vo(u, i)
                        var a = Vo(u, o)
                        for (i = 0; i < s.length; i += 2) {
                            var p = s[i],
                                h = s[i + 1]
                            p === 'style'
                                ? Sa(l, h)
                                : p === 'dangerouslySetInnerHTML'
                                  ? va(l, h)
                                  : p === 'children'
                                    ? qn(l, h)
                                    : Bi(l, p, h, a)
                        }
                        switch (u) {
                            case 'input':
                                Io(l, o)
                                break
                            case 'textarea':
                                ya(l, o)
                                break
                            case 'select':
                                var m = l._wrapperState.wasMultiple
                                l._wrapperState.wasMultiple = !!o.multiple
                                var S = o.value
                                S != null
                                    ? an(l, !!o.multiple, S, !1)
                                    : m !== !!o.multiple &&
                                      (o.defaultValue != null
                                          ? an(
                                                l,
                                                !!o.multiple,
                                                o.defaultValue,
                                                !0
                                            )
                                          : an(
                                                l,
                                                !!o.multiple,
                                                o.multiple ? [] : '',
                                                !1
                                            ))
                        }
                        l[ir] = o
                    } catch (v) {
                        K(e, e.return, v)
                    }
            }
            break
        case 6:
            if ((De(t, e), He(e), r & 4)) {
                if (e.stateNode === null) throw Error(E(162))
                ;(l = e.stateNode), (o = e.memoizedProps)
                try {
                    l.nodeValue = o
                } catch (v) {
                    K(e, e.return, v)
                }
            }
            break
        case 3:
            if (
                (De(t, e),
                He(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    tr(t.containerInfo)
                } catch (v) {
                    K(e, e.return, v)
                }
            break
        case 4:
            De(t, e), He(e)
            break
        case 13:
            De(t, e),
                He(e),
                (l = e.child),
                l.flags & 8192 &&
                    ((o = l.memoizedState !== null),
                    (l.stateNode.isHidden = o),
                    !o ||
                        (l.alternate !== null &&
                            l.alternate.memoizedState !== null) ||
                        (pu = J())),
                r & 4 && Ls(e)
            break
        case 22:
            if (
                ((p = n !== null && n.memoizedState !== null),
                e.mode & 1
                    ? ((ce = (a = ce) || p), De(t, e), (ce = a))
                    : De(t, e),
                He(e),
                r & 8192)
            ) {
                if (
                    ((a = e.memoizedState !== null),
                    (e.stateNode.isHidden = a) && !p && e.mode & 1)
                )
                    for (_ = e, p = e.child; p !== null; ) {
                        for (h = _ = p; _ !== null; ) {
                            switch (((m = _), (S = m.child), m.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Yn(4, m, m.return)
                                    break
                                case 1:
                                    un(m, m.return)
                                    var y = m.stateNode
                                    if (
                                        typeof y.componentWillUnmount ==
                                        'function'
                                    ) {
                                        ;(r = m), (n = m.return)
                                        try {
                                            ;(t = r),
                                                (y.props = t.memoizedProps),
                                                (y.state = t.memoizedState),
                                                y.componentWillUnmount()
                                        } catch (v) {
                                            K(r, n, v)
                                        }
                                    }
                                    break
                                case 5:
                                    un(m, m.return)
                                    break
                                case 22:
                                    if (m.memoizedState !== null) {
                                        js(h)
                                        continue
                                    }
                            }
                            S !== null ? ((S.return = m), (_ = S)) : js(h)
                        }
                        p = p.sibling
                    }
                e: for (p = null, h = e; ; ) {
                    if (h.tag === 5) {
                        if (p === null) {
                            p = h
                            try {
                                ;(l = h.stateNode),
                                    a
                                        ? ((o = l.style),
                                          typeof o.setProperty == 'function'
                                              ? o.setProperty(
                                                    'display',
                                                    'none',
                                                    'important'
                                                )
                                              : (o.display = 'none'))
                                        : ((u = h.stateNode),
                                          (s = h.memoizedProps.style),
                                          (i =
                                              s != null &&
                                              s.hasOwnProperty('display')
                                                  ? s.display
                                                  : null),
                                          (u.style.display = wa('display', i)))
                            } catch (v) {
                                K(e, e.return, v)
                            }
                        }
                    } else if (h.tag === 6) {
                        if (p === null)
                            try {
                                h.stateNode.nodeValue = a ? '' : h.memoizedProps
                            } catch (v) {
                                K(e, e.return, v)
                            }
                    } else if (
                        ((h.tag !== 22 && h.tag !== 23) ||
                            h.memoizedState === null ||
                            h === e) &&
                        h.child !== null
                    ) {
                        ;(h.child.return = h), (h = h.child)
                        continue
                    }
                    if (h === e) break e
                    for (; h.sibling === null; ) {
                        if (h.return === null || h.return === e) break e
                        p === h && (p = null), (h = h.return)
                    }
                    p === h && (p = null),
                        (h.sibling.return = h.return),
                        (h = h.sibling)
                }
            }
            break
        case 19:
            De(t, e), He(e), r & 4 && Ls(e)
            break
        case 21:
            break
        default:
            De(t, e), He(e)
    }
}
function He(e) {
    var t = e.flags
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Kc(n)) {
                        var r = n
                        break e
                    }
                    n = n.return
                }
                throw Error(E(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode
                    r.flags & 32 && (qn(l, ''), (r.flags &= -33))
                    var o = Rs(e)
                    wi(e, o, l)
                    break
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        u = Rs(e)
                    vi(e, u, i)
                    break
                default:
                    throw Error(E(161))
            }
        } catch (s) {
            K(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function $p(e, t, n) {
    ;(_ = e), Xc(e)
}
function Xc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null; ) {
        var l = _,
            o = l.child
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || Mr
            if (!i) {
                var u = l.alternate,
                    s = (u !== null && u.memoizedState !== null) || ce
                u = Mr
                var a = ce
                if (((Mr = i), (ce = s) && !a))
                    for (_ = l; _ !== null; )
                        (i = _),
                            (s = i.child),
                            i.tag === 22 && i.memoizedState !== null
                                ? zs(l)
                                : s !== null
                                  ? ((s.return = i), (_ = s))
                                  : zs(l)
                for (; o !== null; ) (_ = o), Xc(o), (o = o.sibling)
                ;(_ = l), (Mr = u), (ce = a)
            }
            Os(e)
        } else
            l.subtreeFlags & 8772 && o !== null
                ? ((o.return = l), (_ = o))
                : Os(e)
    }
}
function Os(e) {
    for (; _ !== null; ) {
        var t = _
        if (t.flags & 8772) {
            var n = t.alternate
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            ce || Ml(5, t)
                            break
                        case 1:
                            var r = t.stateNode
                            if (t.flags & 4 && !ce)
                                if (n === null) r.componentDidMount()
                                else {
                                    var l =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : Ae(t.type, n.memoizedProps)
                                    r.componentDidUpdate(
                                        l,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate
                                    )
                                }
                            var o = t.updateQueue
                            o !== null && hs(t, o, r)
                            break
                        case 3:
                            var i = t.updateQueue
                            if (i !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode
                                            break
                                        case 1:
                                            n = t.child.stateNode
                                    }
                                hs(t, i, n)
                            }
                            break
                        case 5:
                            var u = t.stateNode
                            if (n === null && t.flags & 4) {
                                n = u
                                var s = t.memoizedProps
                                switch (t.type) {
                                    case 'button':
                                    case 'input':
                                    case 'select':
                                    case 'textarea':
                                        s.autoFocus && n.focus()
                                        break
                                    case 'img':
                                        s.src && (n.src = s.src)
                                }
                            }
                            break
                        case 6:
                            break
                        case 4:
                            break
                        case 12:
                            break
                        case 13:
                            if (t.memoizedState === null) {
                                var a = t.alternate
                                if (a !== null) {
                                    var p = a.memoizedState
                                    if (p !== null) {
                                        var h = p.dehydrated
                                        h !== null && tr(h)
                                    }
                                }
                            }
                            break
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break
                        default:
                            throw Error(E(163))
                    }
                ce || (t.flags & 512 && gi(t))
            } catch (m) {
                K(t, t.return, m)
            }
        }
        if (t === e) {
            _ = null
            break
        }
        if (((n = t.sibling), n !== null)) {
            ;(n.return = t.return), (_ = n)
            break
        }
        _ = t.return
    }
}
function js(e) {
    for (; _ !== null; ) {
        var t = _
        if (t === e) {
            _ = null
            break
        }
        var n = t.sibling
        if (n !== null) {
            ;(n.return = t.return), (_ = n)
            break
        }
        _ = t.return
    }
}
function zs(e) {
    for (; _ !== null; ) {
        var t = _
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return
                    try {
                        Ml(4, t)
                    } catch (s) {
                        K(t, n, s)
                    }
                    break
                case 1:
                    var r = t.stateNode
                    if (typeof r.componentDidMount == 'function') {
                        var l = t.return
                        try {
                            r.componentDidMount()
                        } catch (s) {
                            K(t, l, s)
                        }
                    }
                    var o = t.return
                    try {
                        gi(t)
                    } catch (s) {
                        K(t, o, s)
                    }
                    break
                case 5:
                    var i = t.return
                    try {
                        gi(t)
                    } catch (s) {
                        K(t, i, s)
                    }
            }
        } catch (s) {
            K(t, t.return, s)
        }
        if (t === e) {
            _ = null
            break
        }
        var u = t.sibling
        if (u !== null) {
            ;(u.return = t.return), (_ = u)
            break
        }
        _ = t.return
    }
}
var Hp = Math.ceil,
    Cl = it.ReactCurrentDispatcher,
    fu = it.ReactCurrentOwner,
    Le = it.ReactCurrentBatchConfig,
    D = 0,
    re = null,
    G = null,
    ie = 0,
    ke = 0,
    sn = Rt(0),
    Z = 0,
    dr = null,
    Qt = 0,
    $l = 0,
    du = 0,
    Jn = null,
    ye = null,
    pu = 0,
    kn = 1 / 0,
    Xe = null,
    _l = !1,
    Si = null,
    Et = null,
    $r = !1,
    yt = null,
    Nl = 0,
    Xn = 0,
    ki = null,
    Zr = -1,
    br = 0
function pe() {
    return D & 6 ? J() : Zr !== -1 ? Zr : (Zr = J())
}
function xt(e) {
    return e.mode & 1
        ? D & 2 && ie !== 0
            ? ie & -ie
            : _p.transition !== null
              ? (br === 0 && (br = ja()), br)
              : ((e = A),
                e !== 0 ||
                    ((e = window.event), (e = e === void 0 ? 16 : Ua(e.type))),
                e)
        : 1
}
function Me(e, t, n, r) {
    if (50 < Xn) throw ((Xn = 0), (ki = null), Error(E(185)))
    yr(e, n, r),
        (!(D & 2) || e !== re) &&
            (e === re && (!(D & 2) && ($l |= n), Z === 4 && ht(e, ie)),
            Se(e, r),
            n === 1 &&
                D === 0 &&
                !(t.mode & 1) &&
                ((kn = J() + 500), Fl && Lt()))
}
function Se(e, t) {
    var n = e.callbackNode
    _d(e, t)
    var r = al(e, e === re ? ie : 0)
    if (r === 0)
        n !== null && Hu(n), (e.callbackNode = null), (e.callbackPriority = 0)
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && Hu(n), t === 1))
            e.tag === 0 ? Cp(Bs.bind(null, e)) : lc(Bs.bind(null, e)),
                Sp(function () {
                    !(D & 6) && Lt()
                }),
                (n = null)
        else {
            switch (za(r)) {
                case 1:
                    n = Ui
                    break
                case 4:
                    n = La
                    break
                case 16:
                    n = sl
                    break
                case 536870912:
                    n = Oa
                    break
                default:
                    n = sl
            }
            n = rf(n, Gc.bind(null, e))
        }
        ;(e.callbackPriority = t), (e.callbackNode = n)
    }
}
function Gc(e, t) {
    if (((Zr = -1), (br = 0), D & 6)) throw Error(E(327))
    var n = e.callbackNode
    if (hn() && e.callbackNode !== n) return null
    var r = al(e, e === re ? ie : 0)
    if (r === 0) return null
    if (r & 30 || r & e.expiredLanes || t) t = Pl(e, r)
    else {
        t = r
        var l = D
        D |= 2
        var o = Zc()
        ;(re !== e || ie !== t) && ((Xe = null), (kn = J() + 500), Mt(e, t))
        do
            try {
                Qp()
                break
            } catch (u) {
                qc(e, u)
            }
        while (1)
        Zi(),
            (Cl.current = o),
            (D = l),
            G !== null ? (t = 0) : ((re = null), (ie = 0), (t = Z))
    }
    if (t !== 0) {
        if (
            (t === 2 && ((l = Jo(e)), l !== 0 && ((r = l), (t = Ei(e, l)))),
            t === 1)
        )
            throw ((n = dr), Mt(e, 0), ht(e, r), Se(e, J()), n)
        if (t === 6) ht(e, r)
        else {
            if (
                ((l = e.current.alternate),
                !(r & 30) &&
                    !Vp(l) &&
                    ((t = Pl(e, r)),
                    t === 2 &&
                        ((o = Jo(e)), o !== 0 && ((r = o), (t = Ei(e, o)))),
                    t === 1))
            )
                throw ((n = dr), Mt(e, 0), ht(e, r), Se(e, J()), n)
            switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(E(345))
                case 2:
                    Dt(e, ye, Xe)
                    break
                case 3:
                    if (
                        (ht(e, r),
                        (r & 130023424) === r && ((t = pu + 500 - J()), 10 < t))
                    ) {
                        if (al(e, 0) !== 0) break
                        if (((l = e.suspendedLanes), (l & r) !== r)) {
                            pe(), (e.pingedLanes |= e.suspendedLanes & l)
                            break
                        }
                        e.timeoutHandle = ni(Dt.bind(null, e, ye, Xe), t)
                        break
                    }
                    Dt(e, ye, Xe)
                    break
                case 4:
                    if ((ht(e, r), (r & 4194240) === r)) break
                    for (t = e.eventTimes, l = -1; 0 < r; ) {
                        var i = 31 - Ue(r)
                        ;(o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o)
                    }
                    if (
                        ((r = l),
                        (r = J() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                  ? 480
                                  : 1080 > r
                                    ? 1080
                                    : 1920 > r
                                      ? 1920
                                      : 3e3 > r
                                        ? 3e3
                                        : 4320 > r
                                          ? 4320
                                          : 1960 * Hp(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = ni(Dt.bind(null, e, ye, Xe), r)
                        break
                    }
                    Dt(e, ye, Xe)
                    break
                case 5:
                    Dt(e, ye, Xe)
                    break
                default:
                    throw Error(E(329))
            }
        }
    }
    return Se(e, J()), e.callbackNode === n ? Gc.bind(null, e) : null
}
function Ei(e, t) {
    var n = Jn
    return (
        e.current.memoizedState.isDehydrated && (Mt(e, t).flags |= 256),
        (e = Pl(e, t)),
        e !== 2 && ((t = ye), (ye = n), t !== null && xi(t)),
        e
    )
}
function xi(e) {
    ye === null ? (ye = e) : ye.push.apply(ye, e)
}
function Vp(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        o = l.getSnapshot
                    l = l.value
                    try {
                        if (!$e(o(), l)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n)
        else {
            if (t === e) break
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0
                t = t.return
            }
            ;(t.sibling.return = t.return), (t = t.sibling)
        }
    }
    return !0
}
function ht(e, t) {
    for (
        t &= ~du,
            t &= ~$l,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - Ue(t),
            r = 1 << n
        ;(e[n] = -1), (t &= ~r)
    }
}
function Bs(e) {
    if (D & 6) throw Error(E(327))
    hn()
    var t = al(e, 0)
    if (!(t & 1)) return Se(e, J()), null
    var n = Pl(e, t)
    if (e.tag !== 0 && n === 2) {
        var r = Jo(e)
        r !== 0 && ((t = r), (n = Ei(e, r)))
    }
    if (n === 1) throw ((n = dr), Mt(e, 0), ht(e, t), Se(e, J()), n)
    if (n === 6) throw Error(E(345))
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Dt(e, ye, Xe),
        Se(e, J()),
        null
    )
}
function hu(e, t) {
    var n = D
    D |= 1
    try {
        return e(t)
    } finally {
        ;(D = n), D === 0 && ((kn = J() + 500), Fl && Lt())
    }
}
function Kt(e) {
    yt !== null && yt.tag === 0 && !(D & 6) && hn()
    var t = D
    D |= 1
    var n = Le.transition,
        r = A
    try {
        if (((Le.transition = null), (A = 1), e)) return e()
    } finally {
        ;(A = r), (Le.transition = n), (D = t), !(D & 6) && Lt()
    }
}
function mu() {
    ;(ke = sn.current), M(sn)
}
function Mt(e, t) {
    ;(e.finishedWork = null), (e.finishedLanes = 0)
    var n = e.timeoutHandle
    if ((n !== -1 && ((e.timeoutHandle = -1), wp(n)), G !== null))
        for (n = G.return; n !== null; ) {
            var r = n
            switch ((Xi(r), r.tag)) {
                case 1:
                    ;(r = r.type.childContextTypes), r != null && hl()
                    break
                case 3:
                    wn(), M(ve), M(fe), lu()
                    break
                case 5:
                    ru(r)
                    break
                case 4:
                    wn()
                    break
                case 13:
                    M(V)
                    break
                case 19:
                    M(V)
                    break
                case 10:
                    bi(r.type._context)
                    break
                case 22:
                case 23:
                    mu()
            }
            n = n.return
        }
    if (
        ((re = e),
        (G = e = Ct(e.current, null)),
        (ie = ke = t),
        (Z = 0),
        (dr = null),
        (du = $l = Qt = 0),
        (ye = Jn = null),
        It !== null)
    ) {
        for (t = 0; t < It.length; t++)
            if (((n = It[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null
                var l = r.next,
                    o = n.pending
                if (o !== null) {
                    var i = o.next
                    ;(o.next = l), (r.next = i)
                }
                n.pending = r
            }
        It = null
    }
    return e
}
function qc(e, t) {
    do {
        var n = G
        try {
            if ((Zi(), (Xr.current = xl), El)) {
                for (var r = W.memoizedState; r !== null; ) {
                    var l = r.queue
                    l !== null && (l.pending = null), (r = r.next)
                }
                El = !1
            }
            if (
                ((Wt = 0),
                (ne = q = W = null),
                (Kn = !1),
                (ar = 0),
                (fu.current = null),
                n === null || n.return === null)
            ) {
                ;(Z = 1), (dr = t), (G = null)
                break
            }
            e: {
                var o = e,
                    i = n.return,
                    u = n,
                    s = t
                if (
                    ((t = ie),
                    (u.flags |= 32768),
                    s !== null &&
                        typeof s == 'object' &&
                        typeof s.then == 'function')
                ) {
                    var a = s,
                        p = u,
                        h = p.tag
                    if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var m = p.alternate
                        m
                            ? ((p.updateQueue = m.updateQueue),
                              (p.memoizedState = m.memoizedState),
                              (p.lanes = m.lanes))
                            : ((p.updateQueue = null), (p.memoizedState = null))
                    }
                    var S = ks(i)
                    if (S !== null) {
                        ;(S.flags &= -257),
                            Es(S, i, u, o, t),
                            S.mode & 1 && Ss(o, a, t),
                            (t = S),
                            (s = a)
                        var y = t.updateQueue
                        if (y === null) {
                            var v = new Set()
                            v.add(s), (t.updateQueue = v)
                        } else y.add(s)
                        break e
                    } else {
                        if (!(t & 1)) {
                            Ss(o, a, t), yu()
                            break e
                        }
                        s = Error(E(426))
                    }
                } else if ($ && u.mode & 1) {
                    var j = ks(i)
                    if (j !== null) {
                        !(j.flags & 65536) && (j.flags |= 256),
                            Es(j, i, u, o, t),
                            Gi(Sn(s, u))
                        break e
                    }
                }
                ;(o = s = Sn(s, u)),
                    Z !== 4 && (Z = 2),
                    Jn === null ? (Jn = [o]) : Jn.push(o),
                    (o = i)
                do {
                    switch (o.tag) {
                        case 3:
                            ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
                            var f = Bc(o, s, t)
                            ps(o, f)
                            break e
                        case 1:
                            u = s
                            var c = o.type,
                                d = o.stateNode
                            if (
                                !(o.flags & 128) &&
                                (typeof c.getDerivedStateFromError ==
                                    'function' ||
                                    (d !== null &&
                                        typeof d.componentDidCatch ==
                                            'function' &&
                                        (Et === null || !Et.has(d))))
                            ) {
                                ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
                                var k = Dc(o, u, t)
                                ps(o, k)
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            ef(n)
        } catch (C) {
            ;(t = C), G === n && n !== null && (G = n = n.return)
            continue
        }
        break
    } while (1)
}
function Zc() {
    var e = Cl.current
    return (Cl.current = xl), e === null ? xl : e
}
function yu() {
    ;(Z === 0 || Z === 3 || Z === 2) && (Z = 4),
        re === null || (!(Qt & 268435455) && !($l & 268435455)) || ht(re, ie)
}
function Pl(e, t) {
    var n = D
    D |= 2
    var r = Zc()
    ;(re !== e || ie !== t) && ((Xe = null), Mt(e, t))
    do
        try {
            Wp()
            break
        } catch (l) {
            qc(e, l)
        }
    while (1)
    if ((Zi(), (D = n), (Cl.current = r), G !== null)) throw Error(E(261))
    return (re = null), (ie = 0), Z
}
function Wp() {
    for (; G !== null; ) bc(G)
}
function Qp() {
    for (; G !== null && !yd(); ) bc(G)
}
function bc(e) {
    var t = nf(e.alternate, e, ke)
    ;(e.memoizedProps = e.pendingProps),
        t === null ? ef(e) : (G = t),
        (fu.current = null)
}
function ef(e) {
    var t = e
    do {
        var n = t.alternate
        if (((e = t.return), t.flags & 32768)) {
            if (((n = Ip(n, t)), n !== null)) {
                ;(n.flags &= 32767), (G = n)
                return
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
            else {
                ;(Z = 6), (G = null)
                return
            }
        } else if (((n = Fp(n, t, ke)), n !== null)) {
            G = n
            return
        }
        if (((t = t.sibling), t !== null)) {
            G = t
            return
        }
        G = t = e
    } while (t !== null)
    Z === 0 && (Z = 5)
}
function Dt(e, t, n) {
    var r = A,
        l = Le.transition
    try {
        ;(Le.transition = null), (A = 1), Kp(e, t, n, r)
    } finally {
        ;(Le.transition = l), (A = r)
    }
    return null
}
function Kp(e, t, n, r) {
    do hn()
    while (yt !== null)
    if (D & 6) throw Error(E(327))
    n = e.finishedWork
    var l = e.finishedLanes
    if (n === null) return null
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(E(177))
    ;(e.callbackNode = null), (e.callbackPriority = 0)
    var o = n.lanes | n.childLanes
    if (
        (Nd(e, o),
        e === re && ((G = re = null), (ie = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            $r ||
            (($r = !0),
            rf(sl, function () {
                return hn(), null
            })),
        (o = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || o)
    ) {
        ;(o = Le.transition), (Le.transition = null)
        var i = A
        A = 1
        var u = D
        ;(D |= 4),
            (fu.current = null),
            Mp(e, n),
            Jc(n, e),
            dp(ei),
            (cl = !!bo),
            (ei = bo = null),
            (e.current = n),
            $p(n),
            gd(),
            (D = u),
            (A = i),
            (Le.transition = o)
    } else e.current = n
    if (
        ($r && (($r = !1), (yt = e), (Nl = l)),
        (o = e.pendingLanes),
        o === 0 && (Et = null),
        Sd(n.stateNode),
        Se(e, J()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (l = t[n]),
                r(l.value, { componentStack: l.stack, digest: l.digest })
    if (_l) throw ((_l = !1), (e = Si), (Si = null), e)
    return (
        Nl & 1 && e.tag !== 0 && hn(),
        (o = e.pendingLanes),
        o & 1 ? (e === ki ? Xn++ : ((Xn = 0), (ki = e))) : (Xn = 0),
        Lt(),
        null
    )
}
function hn() {
    if (yt !== null) {
        var e = za(Nl),
            t = Le.transition,
            n = A
        try {
            if (((Le.transition = null), (A = 16 > e ? 16 : e), yt === null))
                var r = !1
            else {
                if (((e = yt), (yt = null), (Nl = 0), D & 6))
                    throw Error(E(331))
                var l = D
                for (D |= 4, _ = e.current; _ !== null; ) {
                    var o = _,
                        i = o.child
                    if (_.flags & 16) {
                        var u = o.deletions
                        if (u !== null) {
                            for (var s = 0; s < u.length; s++) {
                                var a = u[s]
                                for (_ = a; _ !== null; ) {
                                    var p = _
                                    switch (p.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Yn(8, p, o)
                                    }
                                    var h = p.child
                                    if (h !== null) (h.return = p), (_ = h)
                                    else
                                        for (; _ !== null; ) {
                                            p = _
                                            var m = p.sibling,
                                                S = p.return
                                            if ((Qc(p), p === a)) {
                                                _ = null
                                                break
                                            }
                                            if (m !== null) {
                                                ;(m.return = S), (_ = m)
                                                break
                                            }
                                            _ = S
                                        }
                                }
                            }
                            var y = o.alternate
                            if (y !== null) {
                                var v = y.child
                                if (v !== null) {
                                    y.child = null
                                    do {
                                        var j = v.sibling
                                        ;(v.sibling = null), (v = j)
                                    } while (v !== null)
                                }
                            }
                            _ = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null)
                        (i.return = o), (_ = i)
                    else
                        e: for (; _ !== null; ) {
                            if (((o = _), o.flags & 2048))
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Yn(9, o, o.return)
                                }
                            var f = o.sibling
                            if (f !== null) {
                                ;(f.return = o.return), (_ = f)
                                break e
                            }
                            _ = o.return
                        }
                }
                var c = e.current
                for (_ = c; _ !== null; ) {
                    i = _
                    var d = i.child
                    if (i.subtreeFlags & 2064 && d !== null)
                        (d.return = i), (_ = d)
                    else
                        e: for (i = c; _ !== null; ) {
                            if (((u = _), u.flags & 2048))
                                try {
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ml(9, u)
                                    }
                                } catch (C) {
                                    K(u, u.return, C)
                                }
                            if (u === i) {
                                _ = null
                                break e
                            }
                            var k = u.sibling
                            if (k !== null) {
                                ;(k.return = u.return), (_ = k)
                                break e
                            }
                            _ = u.return
                        }
                }
                if (
                    ((D = l),
                    Lt(),
                    Ke && typeof Ke.onPostCommitFiberRoot == 'function')
                )
                    try {
                        Ke.onPostCommitFiberRoot(jl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ;(A = n), (Le.transition = t)
        }
    }
    return !1
}
function Ds(e, t, n) {
    ;(t = Sn(n, t)),
        (t = Bc(e, t, 1)),
        (e = kt(e, t, 1)),
        (t = pe()),
        e !== null && (yr(e, 1, t), Se(e, t))
}
function K(e, t, n) {
    if (e.tag === 3) Ds(e, e, n)
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Ds(t, e, n)
                break
            } else if (t.tag === 1) {
                var r = t.stateNode
                if (
                    typeof t.type.getDerivedStateFromError == 'function' ||
                    (typeof r.componentDidCatch == 'function' &&
                        (Et === null || !Et.has(r)))
                ) {
                    ;(e = Sn(n, e)),
                        (e = Dc(t, e, 1)),
                        (t = kt(t, e, 1)),
                        (e = pe()),
                        t !== null && (yr(t, 1, e), Se(t, e))
                    break
                }
            }
            t = t.return
        }
}
function Yp(e, t, n) {
    var r = e.pingCache
    r !== null && r.delete(t),
        (t = pe()),
        (e.pingedLanes |= e.suspendedLanes & n),
        re === e &&
            (ie & n) === n &&
            (Z === 4 || (Z === 3 && (ie & 130023424) === ie && 500 > J() - pu)
                ? Mt(e, 0)
                : (du |= n)),
        Se(e, t)
}
function tf(e, t) {
    t === 0 &&
        (e.mode & 1
            ? ((t = Or), (Or <<= 1), !(Or & 130023424) && (Or = 4194304))
            : (t = 1))
    var n = pe()
    ;(e = lt(e, t)), e !== null && (yr(e, t, n), Se(e, n))
}
function Jp(e) {
    var t = e.memoizedState,
        n = 0
    t !== null && (n = t.retryLane), tf(e, n)
}
function Xp(e, t) {
    var n = 0
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState
            l !== null && (n = l.retryLane)
            break
        case 19:
            r = e.stateNode
            break
        default:
            throw Error(E(314))
    }
    r !== null && r.delete(t), tf(e, n)
}
var nf
nf = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ve.current) ge = !0
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return (ge = !1), Ap(e, t, n)
            ge = !!(e.flags & 131072)
        }
    else (ge = !1), $ && t.flags & 1048576 && oc(t, gl, t.index)
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type
            qr(e, t), (e = t.pendingProps)
            var l = yn(t, fe.current)
            pn(t, n), (l = iu(null, t, r, e, l, n))
            var o = uu()
            return (
                (t.flags |= 1),
                typeof l == 'object' &&
                l !== null &&
                typeof l.render == 'function' &&
                l.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      we(r) ? ((o = !0), ml(t)) : (o = !1),
                      (t.memoizedState =
                          l.state !== null && l.state !== void 0
                              ? l.state
                              : null),
                      tu(t),
                      (l.updater = Il),
                      (t.stateNode = l),
                      (l._reactInternals = t),
                      ai(t, r, e, n),
                      (t = di(null, t, r, !0, o, n)))
                    : ((t.tag = 0),
                      $ && o && Ji(t),
                      de(null, t, l, n),
                      (t = t.child)),
                t
            )
        case 16:
            r = t.elementType
            e: {
                switch (
                    (qr(e, t),
                    (e = t.pendingProps),
                    (l = r._init),
                    (r = l(r._payload)),
                    (t.type = r),
                    (l = t.tag = qp(r)),
                    (e = Ae(r, e)),
                    l)
                ) {
                    case 0:
                        t = fi(null, t, r, e, n)
                        break e
                    case 1:
                        t = _s(null, t, r, e, n)
                        break e
                    case 11:
                        t = xs(null, t, r, e, n)
                        break e
                    case 14:
                        t = Cs(null, t, r, Ae(r.type, e), n)
                        break e
                }
                throw Error(E(306, r, ''))
            }
            return t
        case 0:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : Ae(r, l)),
                fi(e, t, r, l, n)
            )
        case 1:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : Ae(r, l)),
                _s(e, t, r, l, n)
            )
        case 3:
            e: {
                if ((Uc(t), e === null)) throw Error(E(387))
                ;(r = t.pendingProps),
                    (o = t.memoizedState),
                    (l = o.element),
                    ac(e, t),
                    Sl(t, r, null, n)
                var i = t.memoizedState
                if (((r = i.element), o.isDehydrated))
                    if (
                        ((o = {
                            element: r,
                            isDehydrated: !1,
                            cache: i.cache,
                            pendingSuspenseBoundaries:
                                i.pendingSuspenseBoundaries,
                            transitions: i.transitions,
                        }),
                        (t.updateQueue.baseState = o),
                        (t.memoizedState = o),
                        t.flags & 256)
                    ) {
                        ;(l = Sn(Error(E(423)), t)), (t = Ns(e, t, r, n, l))
                        break e
                    } else if (r !== l) {
                        ;(l = Sn(Error(E(424)), t)), (t = Ns(e, t, r, n, l))
                        break e
                    } else
                        for (
                            Ee = St(t.stateNode.containerInfo.firstChild),
                                xe = t,
                                $ = !0,
                                Ie = null,
                                n = pc(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
                else {
                    if ((gn(), r === l)) {
                        t = ot(e, t, n)
                        break e
                    }
                    de(e, t, r, n)
                }
                t = t.child
            }
            return t
        case 5:
            return (
                hc(t),
                e === null && ii(t),
                (r = t.type),
                (l = t.pendingProps),
                (o = e !== null ? e.memoizedProps : null),
                (i = l.children),
                ti(r, l)
                    ? (i = null)
                    : o !== null && ti(r, o) && (t.flags |= 32),
                Ic(e, t),
                de(e, t, i, n),
                t.child
            )
        case 6:
            return e === null && ii(t), null
        case 13:
            return Mc(e, t, n)
        case 4:
            return (
                nu(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = vn(t, null, r, n)) : de(e, t, r, n),
                t.child
            )
        case 11:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : Ae(r, l)),
                xs(e, t, r, l, n)
            )
        case 7:
            return de(e, t, t.pendingProps, n), t.child
        case 8:
            return de(e, t, t.pendingProps.children, n), t.child
        case 12:
            return de(e, t, t.pendingProps.children, n), t.child
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (l = t.pendingProps),
                    (o = t.memoizedProps),
                    (i = l.value),
                    I(vl, r._currentValue),
                    (r._currentValue = i),
                    o !== null)
                )
                    if ($e(o.value, i)) {
                        if (o.children === l.children && !ve.current) {
                            t = ot(e, t, n)
                            break e
                        }
                    } else
                        for (
                            o = t.child, o !== null && (o.return = t);
                            o !== null;

                        ) {
                            var u = o.dependencies
                            if (u !== null) {
                                i = o.child
                                for (var s = u.firstContext; s !== null; ) {
                                    if (s.context === r) {
                                        if (o.tag === 1) {
                                            ;(s = et(-1, n & -n)), (s.tag = 2)
                                            var a = o.updateQueue
                                            if (a !== null) {
                                                a = a.shared
                                                var p = a.pending
                                                p === null
                                                    ? (s.next = s)
                                                    : ((s.next = p.next),
                                                      (p.next = s)),
                                                    (a.pending = s)
                                            }
                                        }
                                        ;(o.lanes |= n),
                                            (s = o.alternate),
                                            s !== null && (s.lanes |= n),
                                            ui(o.return, n, t),
                                            (u.lanes |= n)
                                        break
                                    }
                                    s = s.next
                                }
                            } else if (o.tag === 10)
                                i = o.type === t.type ? null : o.child
                            else if (o.tag === 18) {
                                if (((i = o.return), i === null))
                                    throw Error(E(341))
                                ;(i.lanes |= n),
                                    (u = i.alternate),
                                    u !== null && (u.lanes |= n),
                                    ui(i, n, t),
                                    (i = o.sibling)
                            } else i = o.child
                            if (i !== null) i.return = o
                            else
                                for (i = o; i !== null; ) {
                                    if (i === t) {
                                        i = null
                                        break
                                    }
                                    if (((o = i.sibling), o !== null)) {
                                        ;(o.return = i.return), (i = o)
                                        break
                                    }
                                    i = i.return
                                }
                            o = i
                        }
                de(e, t, l.children, n), (t = t.child)
            }
            return t
        case 9:
            return (
                (l = t.type),
                (r = t.pendingProps.children),
                pn(t, n),
                (l = je(l)),
                (r = r(l)),
                (t.flags |= 1),
                de(e, t, r, n),
                t.child
            )
        case 14:
            return (
                (r = t.type),
                (l = Ae(r, t.pendingProps)),
                (l = Ae(r.type, l)),
                Cs(e, t, r, l, n)
            )
        case 15:
            return Ac(e, t, t.type, t.pendingProps, n)
        case 17:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : Ae(r, l)),
                qr(e, t),
                (t.tag = 1),
                we(r) ? ((e = !0), ml(t)) : (e = !1),
                pn(t, n),
                fc(t, r, l),
                ai(t, r, l, n),
                di(null, t, r, !0, e, n)
            )
        case 19:
            return $c(e, t, n)
        case 22:
            return Fc(e, t, n)
    }
    throw Error(E(156, t.tag))
}
function rf(e, t) {
    return Ra(e, t)
}
function Gp(e, t, n, r) {
    ;(this.tag = e),
        (this.key = n),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null)
}
function Re(e, t, n, r) {
    return new Gp(e, t, n, r)
}
function gu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent)
}
function qp(e) {
    if (typeof e == 'function') return gu(e) ? 1 : 0
    if (e != null) {
        if (((e = e.$$typeof), e === Ai)) return 11
        if (e === Fi) return 14
    }
    return 2
}
function Ct(e, t) {
    var n = e.alternate
    return (
        n === null
            ? ((n = Re(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
            t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    )
}
function el(e, t, n, r, l, o) {
    var i = 2
    if (((r = e), typeof e == 'function')) gu(e) && (i = 1)
    else if (typeof e == 'string') i = 5
    else
        e: switch (e) {
            case qt:
                return $t(n.children, l, o, t)
            case Di:
                ;(i = 8), (l |= 8)
                break
            case zo:
                return (
                    (e = Re(12, n, t, l | 2)),
                    (e.elementType = zo),
                    (e.lanes = o),
                    e
                )
            case Bo:
                return (
                    (e = Re(13, n, t, l)),
                    (e.elementType = Bo),
                    (e.lanes = o),
                    e
                )
            case Do:
                return (
                    (e = Re(19, n, t, l)),
                    (e.elementType = Do),
                    (e.lanes = o),
                    e
                )
            case da:
                return Hl(n, l, o, t)
            default:
                if (typeof e == 'object' && e !== null)
                    switch (e.$$typeof) {
                        case ca:
                            i = 10
                            break e
                        case fa:
                            i = 9
                            break e
                        case Ai:
                            i = 11
                            break e
                        case Fi:
                            i = 14
                            break e
                        case ft:
                            ;(i = 16), (r = null)
                            break e
                    }
                throw Error(E(130, e == null ? e : typeof e, ''))
        }
    return (
        (t = Re(i, n, t, l)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
    )
}
function $t(e, t, n, r) {
    return (e = Re(7, e, r, t)), (e.lanes = n), e
}
function Hl(e, t, n, r) {
    return (
        (e = Re(22, e, r, t)),
        (e.elementType = da),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    )
}
function _o(e, t, n) {
    return (e = Re(6, e, null, t)), (e.lanes = n), e
}
function No(e, t, n) {
    return (
        (t = Re(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    )
}
function Zp(e, t, n, r, l) {
    ;(this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = oo(0)),
        (this.expirationTimes = oo(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = oo(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = l),
        (this.mutableSourceEagerHydrationData = null)
}
function vu(e, t, n, r, l, o, i, u, s) {
    return (
        (e = new Zp(e, t, n, u, s)),
        t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
        (o = Re(3, null, null, t)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        tu(o),
        e
    )
}
function bp(e, t, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
        $$typeof: Gt,
        key: r == null ? null : '' + r,
        children: e,
        containerInfo: t,
        implementation: n,
    }
}
function lf(e) {
    if (!e) return Nt
    e = e._reactInternals
    e: {
        if (Jt(e) !== e || e.tag !== 1) throw Error(E(170))
        var t = e
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context
                    break e
                case 1:
                    if (we(t.type)) {
                        t =
                            t.stateNode
                                .__reactInternalMemoizedMergedChildContext
                        break e
                    }
            }
            t = t.return
        } while (t !== null)
        throw Error(E(171))
    }
    if (e.tag === 1) {
        var n = e.type
        if (we(n)) return rc(e, n, t)
    }
    return t
}
function of(e, t, n, r, l, o, i, u, s) {
    return (
        (e = vu(n, r, !0, e, l, o, i, u, s)),
        (e.context = lf(null)),
        (n = e.current),
        (r = pe()),
        (l = xt(n)),
        (o = et(r, l)),
        (o.callback = t ?? null),
        kt(n, o, l),
        (e.current.lanes = l),
        yr(e, l, r),
        Se(e, r),
        e
    )
}
function Vl(e, t, n, r) {
    var l = t.current,
        o = pe(),
        i = xt(l)
    return (
        (n = lf(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = et(o, i)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = kt(l, t, i)),
        e !== null && (Me(e, l, i, o), Jr(e, l, i)),
        i
    )
}
function Tl(e) {
    if (((e = e.current), !e.child)) return null
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode
        default:
            return e.child.stateNode
    }
}
function As(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function wu(e, t) {
    As(e, t), (e = e.alternate) && As(e, t)
}
function eh() {
    return null
}
var uf =
    typeof reportError == 'function'
        ? reportError
        : function (e) {
              console.error(e)
          }
function Su(e) {
    this._internalRoot = e
}
Wl.prototype.render = Su.prototype.render = function (e) {
    var t = this._internalRoot
    if (t === null) throw Error(E(409))
    Vl(e, t, null, null)
}
Wl.prototype.unmount = Su.prototype.unmount = function () {
    var e = this._internalRoot
    if (e !== null) {
        this._internalRoot = null
        var t = e.containerInfo
        Kt(function () {
            Vl(null, e, null, null)
        }),
            (t[rt] = null)
    }
}
function Wl(e) {
    this._internalRoot = e
}
Wl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Aa()
        e = { blockedOn: null, target: e, priority: t }
        for (var n = 0; n < pt.length && t !== 0 && t < pt[n].priority; n++);
        pt.splice(n, 0, e), n === 0 && Ia(e)
    }
}
function ku(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Ql(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== ' react-mount-point-unstable '))
    )
}
function Fs() {}
function th(e, t, n, r, l) {
    if (l) {
        if (typeof r == 'function') {
            var o = r
            r = function () {
                var a = Tl(i)
                o.call(a)
            }
        }
        var i = of(t, r, e, 0, null, !1, !1, '', Fs)
        return (
            (e._reactRootContainer = i),
            (e[rt] = i.current),
            lr(e.nodeType === 8 ? e.parentNode : e),
            Kt(),
            i
        )
    }
    for (; (l = e.lastChild); ) e.removeChild(l)
    if (typeof r == 'function') {
        var u = r
        r = function () {
            var a = Tl(s)
            u.call(a)
        }
    }
    var s = vu(e, 0, !1, null, null, !1, !1, '', Fs)
    return (
        (e._reactRootContainer = s),
        (e[rt] = s.current),
        lr(e.nodeType === 8 ? e.parentNode : e),
        Kt(function () {
            Vl(t, s, n, r)
        }),
        s
    )
}
function Kl(e, t, n, r, l) {
    var o = n._reactRootContainer
    if (o) {
        var i = o
        if (typeof l == 'function') {
            var u = l
            l = function () {
                var s = Tl(i)
                u.call(s)
            }
        }
        Vl(t, i, e, l)
    } else i = th(n, t, e, l, r)
    return Tl(i)
}
Ba = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode
            if (t.current.memoizedState.isDehydrated) {
                var n = Un(t.pendingLanes)
                n !== 0 &&
                    (Mi(t, n | 1),
                    Se(t, J()),
                    !(D & 6) && ((kn = J() + 500), Lt()))
            }
            break
        case 13:
            Kt(function () {
                var r = lt(e, 1)
                if (r !== null) {
                    var l = pe()
                    Me(r, e, 1, l)
                }
            }),
                wu(e, 1)
    }
}
$i = function (e) {
    if (e.tag === 13) {
        var t = lt(e, 134217728)
        if (t !== null) {
            var n = pe()
            Me(t, e, 134217728, n)
        }
        wu(e, 134217728)
    }
}
Da = function (e) {
    if (e.tag === 13) {
        var t = xt(e),
            n = lt(e, t)
        if (n !== null) {
            var r = pe()
            Me(n, e, t, r)
        }
        wu(e, t)
    }
}
Aa = function () {
    return A
}
Fa = function (e, t) {
    var n = A
    try {
        return (A = e), t()
    } finally {
        A = n
    }
}
Qo = function (e, t, n) {
    switch (t) {
        case 'input':
            if ((Io(e, n), (t = n.name), n.type === 'radio' && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode
                for (
                    n = n.querySelectorAll(
                        'input[name=' +
                            JSON.stringify('' + t) +
                            '][type="radio"]'
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t]
                    if (r !== e && r.form === e.form) {
                        var l = Al(r)
                        if (!l) throw Error(E(90))
                        ha(r), Io(r, l)
                    }
                }
            }
            break
        case 'textarea':
            ya(e, n)
            break
        case 'select':
            ;(t = n.value), t != null && an(e, !!n.multiple, t, !1)
    }
}
xa = hu
Ca = Kt
var nh = { usingClientEntryPoint: !1, Events: [vr, tn, Al, ka, Ea, hu] },
    Bn = {
        findFiberByHostInstance: Ft,
        bundleType: 0,
        version: '18.2.0',
        rendererPackageName: 'react-dom',
    },
    rh = {
        bundleType: Bn.bundleType,
        version: Bn.version,
        rendererPackageName: Bn.rendererPackageName,
        rendererConfig: Bn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: it.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Pa(e)), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Bn.findFiberByHostInstance || eh,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
    }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Hr = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!Hr.isDisabled && Hr.supportsFiber)
        try {
            ;(jl = Hr.inject(rh)), (Ke = Hr)
        } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nh
_e.createPortal = function (e, t) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
    if (!ku(t)) throw Error(E(200))
    return bp(e, t, null, n)
}
_e.createRoot = function (e, t) {
    if (!ku(e)) throw Error(E(299))
    var n = !1,
        r = '',
        l = uf
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = vu(e, 1, !1, null, null, n, !1, r, l)),
        (e[rt] = t.current),
        lr(e.nodeType === 8 ? e.parentNode : e),
        new Su(t)
    )
}
_e.findDOMNode = function (e) {
    if (e == null) return null
    if (e.nodeType === 1) return e
    var t = e._reactInternals
    if (t === void 0)
        throw typeof e.render == 'function'
            ? Error(E(188))
            : ((e = Object.keys(e).join(',')), Error(E(268, e)))
    return (e = Pa(t)), (e = e === null ? null : e.stateNode), e
}
_e.flushSync = function (e) {
    return Kt(e)
}
_e.hydrate = function (e, t, n) {
    if (!Ql(t)) throw Error(E(200))
    return Kl(null, e, t, !0, n)
}
_e.hydrateRoot = function (e, t, n) {
    if (!ku(e)) throw Error(E(405))
    var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = '',
        i = uf
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (l = !0),
            n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = of(t, null, e, 1, n ?? null, l, !1, o, i)),
        (e[rt] = t.current),
        lr(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (l = n._getVersion),
                (l = l(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, l])
                    : t.mutableSourceEagerHydrationData.push(n, l)
    return new Wl(t)
}
_e.render = function (e, t, n) {
    if (!Ql(t)) throw Error(E(200))
    return Kl(null, e, t, !1, n)
}
_e.unmountComponentAtNode = function (e) {
    if (!Ql(e)) throw Error(E(40))
    return e._reactRootContainer
        ? (Kt(function () {
              Kl(null, null, e, !1, function () {
                  ;(e._reactRootContainer = null), (e[rt] = null)
              })
          }),
          !0)
        : !1
}
_e.unstable_batchedUpdates = hu
_e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Ql(n)) throw Error(E(200))
    if (e == null || e._reactInternals === void 0) throw Error(E(38))
    return Kl(e, t, n, !1, r)
}
_e.version = '18.2.0-next-9e3b772b8-20220608'
function sf() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sf)
        } catch (e) {
            console.error(e)
        }
}
sf(), (oa.exports = _e)
var lh = oa.exports,
    Is = lh
;(Oo.createRoot = Is.createRoot), (Oo.hydrateRoot = Is.hydrateRoot)
var af = { exports: {} },
    oh = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
    ih = oh,
    uh = ih
function cf() {}
function ff() {}
ff.resetWarningCache = cf
var sh = function () {
    function e(r, l, o, i, u, s) {
        if (s !== uh) {
            var a = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            )
            throw ((a.name = 'Invariant Violation'), a)
        }
    }
    e.isRequired = e
    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: ff,
        resetWarningCache: cf,
    }
    return (n.PropTypes = n), n
}
af.exports = sh()
var ah = af.exports
const At = zf(ah),
    df = (e) =>
        w.jsxs('div', {
            children: [
                w.jsx('h2', { children: 'Log in to application Blogs' }),
                w.jsxs('form', {
                    onSubmit: e.click,
                    children: [
                        w.jsx('div', {
                            children: w.jsxs('label', {
                                children: [
                                    'username',
                                    w.jsx('input', {
                                        id: 'inputUsername',
                                        type: 'text',
                                        value: e.usr,
                                        name: 'Username',
                                        onChange: e.changeUSR,
                                    }),
                                ],
                            }),
                        }),
                        w.jsx('div', {
                            children: w.jsxs('label', {
                                children: [
                                    'password',
                                    w.jsx('input', {
                                        id: 'inputPassword',
                                        type: 'password',
                                        value: e.psw,
                                        name: 'Password',
                                        onChange: e.changePSW,
                                    }),
                                ],
                            }),
                        }),
                        w.jsx('button', {
                            id: 'buttonLogin',
                            type: 'submit',
                            children: 'login',
                        }),
                    ],
                }),
            ],
        })
df.propTypes = {
    click: At.func.isRequired,
    changeUSR: At.func.isRequired,
    changePSW: At.func.isRequired,
    usr: At.string.isRequired,
    psw: At.string.isRequired,
}
const ch = ({ user: e, click: t }) =>
    w.jsxs('div', {
        children: [
            w.jsx('h2', { children: 'Welcome to Blogs' }),
            w.jsxs('label', {
                children: ['User: ', e.username, ' is logged in. ', e._id],
            }),
            w.jsx('p', {}),
            w.jsx('input', {
                id: 'buttonLogout',
                'data-testid': 'buttonLogout',
                type: 'submit',
                value: '*** Logout ***',
                onClick: t,
            }),
            w.jsx('p', {}),
        ],
    })
function pf(e, t) {
    return function () {
        return e.apply(t, arguments)
    }
}
const { toString: fh } = Object.prototype,
    { getPrototypeOf: Eu } = Object,
    Yl = ((e) => (t) => {
        const n = fh.call(t)
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
    })(Object.create(null)),
    Je = (e) => ((e = e.toLowerCase()), (t) => Yl(t) === e),
    Jl = (e) => (t) => typeof t === e,
    { isArray: Nn } = Array,
    pr = Jl('undefined')
function dh(e) {
    return (
        e !== null &&
        !pr(e) &&
        e.constructor !== null &&
        !pr(e.constructor) &&
        Oe(e.constructor.isBuffer) &&
        e.constructor.isBuffer(e)
    )
}
const hf = Je('ArrayBuffer')
function ph(e) {
    let t
    return (
        typeof ArrayBuffer < 'u' && ArrayBuffer.isView
            ? (t = ArrayBuffer.isView(e))
            : (t = e && e.buffer && hf(e.buffer)),
        t
    )
}
const hh = Jl('string'),
    Oe = Jl('function'),
    mf = Jl('number'),
    Xl = (e) => e !== null && typeof e == 'object',
    mh = (e) => e === !0 || e === !1,
    tl = (e) => {
        if (Yl(e) !== 'object') return !1
        const t = Eu(e)
        return (
            (t === null ||
                t === Object.prototype ||
                Object.getPrototypeOf(t) === null) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
        )
    },
    yh = Je('Date'),
    gh = Je('File'),
    vh = Je('Blob'),
    wh = Je('FileList'),
    Sh = (e) => Xl(e) && Oe(e.pipe),
    kh = (e) => {
        let t
        return (
            e &&
            ((typeof FormData == 'function' && e instanceof FormData) ||
                (Oe(e.append) &&
                    ((t = Yl(e)) === 'formdata' ||
                        (t === 'object' &&
                            Oe(e.toString) &&
                            e.toString() === '[object FormData]'))))
        )
    },
    Eh = Je('URLSearchParams'),
    xh = (e) =>
        e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
function Sr(e, t, { allOwnKeys: n = !1 } = {}) {
    if (e === null || typeof e > 'u') return
    let r, l
    if ((typeof e != 'object' && (e = [e]), Nn(e)))
        for (r = 0, l = e.length; r < l; r++) t.call(null, e[r], r, e)
    else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            i = o.length
        let u
        for (r = 0; r < i; r++) (u = o[r]), t.call(null, e[u], u, e)
    }
}
function yf(e, t) {
    t = t.toLowerCase()
    const n = Object.keys(e)
    let r = n.length,
        l
    for (; r-- > 0; ) if (((l = n[r]), t === l.toLowerCase())) return l
    return null
}
const gf = (() =>
        typeof globalThis < 'u'
            ? globalThis
            : typeof self < 'u'
              ? self
              : typeof window < 'u'
                ? window
                : global)(),
    vf = (e) => !pr(e) && e !== gf
function Ci() {
    const { caseless: e } = (vf(this) && this) || {},
        t = {},
        n = (r, l) => {
            const o = (e && yf(t, l)) || l
            tl(t[o]) && tl(r)
                ? (t[o] = Ci(t[o], r))
                : tl(r)
                  ? (t[o] = Ci({}, r))
                  : Nn(r)
                    ? (t[o] = r.slice())
                    : (t[o] = r)
        }
    for (let r = 0, l = arguments.length; r < l; r++)
        arguments[r] && Sr(arguments[r], n)
    return t
}
const Ch = (e, t, n, { allOwnKeys: r } = {}) => (
        Sr(
            t,
            (l, o) => {
                n && Oe(l) ? (e[o] = pf(l, n)) : (e[o] = l)
            },
            { allOwnKeys: r }
        ),
        e
    ),
    _h = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    Nh = (e, t, n, r) => {
        ;(e.prototype = Object.create(t.prototype, r)),
            (e.prototype.constructor = e),
            Object.defineProperty(e, 'super', { value: t.prototype }),
            n && Object.assign(e.prototype, n)
    },
    Ph = (e, t, n, r) => {
        let l, o, i
        const u = {}
        if (((t = t || {}), e == null)) return t
        do {
            for (l = Object.getOwnPropertyNames(e), o = l.length; o-- > 0; )
                (i = l[o]),
                    (!r || r(i, e, t)) && !u[i] && ((t[i] = e[i]), (u[i] = !0))
            e = n !== !1 && Eu(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype)
        return t
    },
    Th = (e, t, n) => {
        ;(e = String(e)),
            (n === void 0 || n > e.length) && (n = e.length),
            (n -= t.length)
        const r = e.indexOf(t, n)
        return r !== -1 && r === n
    },
    Rh = (e) => {
        if (!e) return null
        if (Nn(e)) return e
        let t = e.length
        if (!mf(t)) return null
        const n = new Array(t)
        for (; t-- > 0; ) n[t] = e[t]
        return n
    },
    Lh = (
        (e) => (t) =>
            e && t instanceof e
    )(typeof Uint8Array < 'u' && Eu(Uint8Array)),
    Oh = (e, t) => {
        const r = (e && e[Symbol.iterator]).call(e)
        let l
        for (; (l = r.next()) && !l.done; ) {
            const o = l.value
            t.call(e, o[0], o[1])
        }
    },
    jh = (e, t) => {
        let n
        const r = []
        for (; (n = e.exec(t)) !== null; ) r.push(n)
        return r
    },
    zh = Je('HTMLFormElement'),
    Bh = (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, l) {
            return r.toUpperCase() + l
        }),
    Us = (
        ({ hasOwnProperty: e }) =>
        (t, n) =>
            e.call(t, n)
    )(Object.prototype),
    Dh = Je('RegExp'),
    wf = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
            r = {}
        Sr(n, (l, o) => {
            t(l, o, e) !== !1 && (r[o] = l)
        }),
            Object.defineProperties(e, r)
    },
    Ah = (e) => {
        wf(e, (t, n) => {
            if (Oe(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
                return !1
            const r = e[n]
            if (Oe(r)) {
                if (((t.enumerable = !1), 'writable' in t)) {
                    t.writable = !1
                    return
                }
                t.set ||
                    (t.set = () => {
                        throw Error(
                            "Can not rewrite read-only method '" + n + "'"
                        )
                    })
            }
        })
    },
    Fh = (e, t) => {
        const n = {},
            r = (l) => {
                l.forEach((o) => {
                    n[o] = !0
                })
            }
        return Nn(e) ? r(e) : r(String(e).split(t)), n
    },
    Ih = () => {},
    Uh = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
    Po = 'abcdefghijklmnopqrstuvwxyz',
    Ms = '0123456789',
    Sf = { DIGIT: Ms, ALPHA: Po, ALPHA_DIGIT: Po + Po.toUpperCase() + Ms },
    Mh = (e = 16, t = Sf.ALPHA_DIGIT) => {
        let n = ''
        const { length: r } = t
        for (; e--; ) n += t[(Math.random() * r) | 0]
        return n
    }
function $h(e) {
    return !!(
        e &&
        Oe(e.append) &&
        e[Symbol.toStringTag] === 'FormData' &&
        e[Symbol.iterator]
    )
}
const Hh = (e) => {
        const t = new Array(10),
            n = (r, l) => {
                if (Xl(r)) {
                    if (t.indexOf(r) >= 0) return
                    if (!('toJSON' in r)) {
                        t[l] = r
                        const o = Nn(r) ? [] : {}
                        return (
                            Sr(r, (i, u) => {
                                const s = n(i, l + 1)
                                !pr(s) && (o[u] = s)
                            }),
                            (t[l] = void 0),
                            o
                        )
                    }
                }
                return r
            }
        return n(e, 0)
    },
    Vh = Je('AsyncFunction'),
    Wh = (e) => e && (Xl(e) || Oe(e)) && Oe(e.then) && Oe(e.catch),
    g = {
        isArray: Nn,
        isArrayBuffer: hf,
        isBuffer: dh,
        isFormData: kh,
        isArrayBufferView: ph,
        isString: hh,
        isNumber: mf,
        isBoolean: mh,
        isObject: Xl,
        isPlainObject: tl,
        isUndefined: pr,
        isDate: yh,
        isFile: gh,
        isBlob: vh,
        isRegExp: Dh,
        isFunction: Oe,
        isStream: Sh,
        isURLSearchParams: Eh,
        isTypedArray: Lh,
        isFileList: wh,
        forEach: Sr,
        merge: Ci,
        extend: Ch,
        trim: xh,
        stripBOM: _h,
        inherits: Nh,
        toFlatObject: Ph,
        kindOf: Yl,
        kindOfTest: Je,
        endsWith: Th,
        toArray: Rh,
        forEachEntry: Oh,
        matchAll: jh,
        isHTMLForm: zh,
        hasOwnProperty: Us,
        hasOwnProp: Us,
        reduceDescriptors: wf,
        freezeMethods: Ah,
        toObjectSet: Fh,
        toCamelCase: Bh,
        noop: Ih,
        toFiniteNumber: Uh,
        findKey: yf,
        global: gf,
        isContextDefined: vf,
        ALPHABET: Sf,
        generateString: Mh,
        isSpecCompliantForm: $h,
        toJSONObject: Hh,
        isAsyncFn: Vh,
        isThenable: Wh,
    }
function B(e, t, n, r, l) {
    Error.call(this),
        Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
        (this.message = e),
        (this.name = 'AxiosError'),
        t && (this.code = t),
        n && (this.config = n),
        r && (this.request = r),
        l && (this.response = l)
}
g.inherits(B, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: g.toJSONObject(this.config),
            code: this.code,
            status:
                this.response && this.response.status
                    ? this.response.status
                    : null,
        }
    },
})
const kf = B.prototype,
    Ef = {}
;[
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED',
    'ERR_NOT_SUPPORT',
    'ERR_INVALID_URL',
].forEach((e) => {
    Ef[e] = { value: e }
})
Object.defineProperties(B, Ef)
Object.defineProperty(kf, 'isAxiosError', { value: !0 })
B.from = (e, t, n, r, l, o) => {
    const i = Object.create(kf)
    return (
        g.toFlatObject(
            e,
            i,
            function (s) {
                return s !== Error.prototype
            },
            (u) => u !== 'isAxiosError'
        ),
        B.call(i, e.message, t, n, r, l),
        (i.cause = e),
        (i.name = e.name),
        o && Object.assign(i, o),
        i
    )
}
const Qh = null
function _i(e) {
    return g.isPlainObject(e) || g.isArray(e)
}
function xf(e) {
    return g.endsWith(e, '[]') ? e.slice(0, -2) : e
}
function $s(e, t, n) {
    return e
        ? e
              .concat(t)
              .map(function (l, o) {
                  return (l = xf(l)), !n && o ? '[' + l + ']' : l
              })
              .join(n ? '.' : '')
        : t
}
function Kh(e) {
    return g.isArray(e) && !e.some(_i)
}
const Yh = g.toFlatObject(g, {}, null, function (t) {
    return /^is[A-Z]/.test(t)
})
function Gl(e, t, n) {
    if (!g.isObject(e)) throw new TypeError('target must be an object')
    ;(t = t || new FormData()),
        (n = g.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (v, j) {
                return !g.isUndefined(j[v])
            }
        ))
    const r = n.metaTokens,
        l = n.visitor || p,
        o = n.dots,
        i = n.indexes,
        s = (n.Blob || (typeof Blob < 'u' && Blob)) && g.isSpecCompliantForm(t)
    if (!g.isFunction(l)) throw new TypeError('visitor must be a function')
    function a(y) {
        if (y === null) return ''
        if (g.isDate(y)) return y.toISOString()
        if (!s && g.isBlob(y))
            throw new B('Blob is not supported. Use a Buffer instead.')
        return g.isArrayBuffer(y) || g.isTypedArray(y)
            ? s && typeof Blob == 'function'
                ? new Blob([y])
                : Buffer.from(y)
            : y
    }
    function p(y, v, j) {
        let f = y
        if (y && !j && typeof y == 'object') {
            if (g.endsWith(v, '{}'))
                (v = r ? v : v.slice(0, -2)), (y = JSON.stringify(y))
            else if (
                (g.isArray(y) && Kh(y)) ||
                ((g.isFileList(y) || g.endsWith(v, '[]')) && (f = g.toArray(y)))
            )
                return (
                    (v = xf(v)),
                    f.forEach(function (d, k) {
                        !(g.isUndefined(d) || d === null) &&
                            t.append(
                                i === !0
                                    ? $s([v], k, o)
                                    : i === null
                                      ? v
                                      : v + '[]',
                                a(d)
                            )
                    }),
                    !1
                )
        }
        return _i(y) ? !0 : (t.append($s(j, v, o), a(y)), !1)
    }
    const h = [],
        m = Object.assign(Yh, {
            defaultVisitor: p,
            convertValue: a,
            isVisitable: _i,
        })
    function S(y, v) {
        if (!g.isUndefined(y)) {
            if (h.indexOf(y) !== -1)
                throw Error('Circular reference detected in ' + v.join('.'))
            h.push(y),
                g.forEach(y, function (f, c) {
                    ;(!(g.isUndefined(f) || f === null) &&
                        l.call(t, f, g.isString(c) ? c.trim() : c, v, m)) ===
                        !0 && S(f, v ? v.concat(c) : [c])
                }),
                h.pop()
        }
    }
    if (!g.isObject(e)) throw new TypeError('data must be an object')
    return S(e), t
}
function Hs(e) {
    const t = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+',
        '%00': '\0',
    }
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
        return t[r]
    })
}
function xu(e, t) {
    ;(this._pairs = []), e && Gl(e, this, t)
}
const Cf = xu.prototype
Cf.append = function (t, n) {
    this._pairs.push([t, n])
}
Cf.toString = function (t) {
    const n = t
        ? function (r) {
              return t.call(this, r, Hs)
          }
        : Hs
    return this._pairs
        .map(function (l) {
            return n(l[0]) + '=' + n(l[1])
        }, '')
        .join('&')
}
function Jh(e) {
    return encodeURIComponent(e)
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']')
}
function _f(e, t, n) {
    if (!t) return e
    const r = (n && n.encode) || Jh,
        l = n && n.serialize
    let o
    if (
        (l
            ? (o = l(t, n))
            : (o = g.isURLSearchParams(t)
                  ? t.toString()
                  : new xu(t, n).toString(r)),
        o)
    ) {
        const i = e.indexOf('#')
        i !== -1 && (e = e.slice(0, i)),
            (e += (e.indexOf('?') === -1 ? '?' : '&') + o)
    }
    return e
}
class Xh {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return (
            this.handlers.push({
                fulfilled: t,
                rejected: n,
                synchronous: r ? r.synchronous : !1,
                runWhen: r ? r.runWhen : null,
            }),
            this.handlers.length - 1
        )
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        g.forEach(this.handlers, function (r) {
            r !== null && t(r)
        })
    }
}
const Vs = Xh,
    Nf = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
    },
    Gh = typeof URLSearchParams < 'u' ? URLSearchParams : xu,
    qh = typeof FormData < 'u' ? FormData : null,
    Zh = typeof Blob < 'u' ? Blob : null,
    bh = (() => {
        let e
        return typeof navigator < 'u' &&
            ((e = navigator.product) === 'ReactNative' ||
                e === 'NativeScript' ||
                e === 'NS')
            ? !1
            : typeof window < 'u' && typeof document < 'u'
    })(),
    em = (() =>
        typeof WorkerGlobalScope < 'u' &&
        self instanceof WorkerGlobalScope &&
        typeof self.importScripts == 'function')(),
    Qe = {
        isBrowser: !0,
        classes: { URLSearchParams: Gh, FormData: qh, Blob: Zh },
        isStandardBrowserEnv: bh,
        isStandardBrowserWebWorkerEnv: em,
        protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
    }
function tm(e, t) {
    return Gl(
        e,
        new Qe.classes.URLSearchParams(),
        Object.assign(
            {
                visitor: function (n, r, l, o) {
                    return Qe.isNode && g.isBuffer(n)
                        ? (this.append(r, n.toString('base64')), !1)
                        : o.defaultVisitor.apply(this, arguments)
                },
            },
            t
        )
    )
}
function nm(e) {
    return g
        .matchAll(/\w+|\[(\w*)]/g, e)
        .map((t) => (t[0] === '[]' ? '' : t[1] || t[0]))
}
function rm(e) {
    const t = {},
        n = Object.keys(e)
    let r
    const l = n.length
    let o
    for (r = 0; r < l; r++) (o = n[r]), (t[o] = e[o])
    return t
}
function Pf(e) {
    function t(n, r, l, o) {
        let i = n[o++]
        const u = Number.isFinite(+i),
            s = o >= n.length
        return (
            (i = !i && g.isArray(l) ? l.length : i),
            s
                ? (g.hasOwnProp(l, i) ? (l[i] = [l[i], r]) : (l[i] = r), !u)
                : ((!l[i] || !g.isObject(l[i])) && (l[i] = []),
                  t(n, r, l[i], o) && g.isArray(l[i]) && (l[i] = rm(l[i])),
                  !u)
        )
    }
    if (g.isFormData(e) && g.isFunction(e.entries)) {
        const n = {}
        return (
            g.forEachEntry(e, (r, l) => {
                t(nm(r), l, n, 0)
            }),
            n
        )
    }
    return null
}
const lm = { 'Content-Type': void 0 }
function om(e, t, n) {
    if (g.isString(e))
        try {
            return (t || JSON.parse)(e), g.trim(e)
        } catch (r) {
            if (r.name !== 'SyntaxError') throw r
        }
    return (n || JSON.stringify)(e)
}
const ql = {
    transitional: Nf,
    adapter: ['xhr', 'http'],
    transformRequest: [
        function (t, n) {
            const r = n.getContentType() || '',
                l = r.indexOf('application/json') > -1,
                o = g.isObject(t)
            if (
                (o && g.isHTMLForm(t) && (t = new FormData(t)), g.isFormData(t))
            )
                return l && l ? JSON.stringify(Pf(t)) : t
            if (
                g.isArrayBuffer(t) ||
                g.isBuffer(t) ||
                g.isStream(t) ||
                g.isFile(t) ||
                g.isBlob(t)
            )
                return t
            if (g.isArrayBufferView(t)) return t.buffer
            if (g.isURLSearchParams(t))
                return (
                    n.setContentType(
                        'application/x-www-form-urlencoded;charset=utf-8',
                        !1
                    ),
                    t.toString()
                )
            let u
            if (o) {
                if (r.indexOf('application/x-www-form-urlencoded') > -1)
                    return tm(t, this.formSerializer).toString()
                if (
                    (u = g.isFileList(t)) ||
                    r.indexOf('multipart/form-data') > -1
                ) {
                    const s = this.env && this.env.FormData
                    return Gl(
                        u ? { 'files[]': t } : t,
                        s && new s(),
                        this.formSerializer
                    )
                }
            }
            return o || l
                ? (n.setContentType('application/json', !1), om(t))
                : t
        },
    ],
    transformResponse: [
        function (t) {
            const n = this.transitional || ql.transitional,
                r = n && n.forcedJSONParsing,
                l = this.responseType === 'json'
            if (t && g.isString(t) && ((r && !this.responseType) || l)) {
                const i = !(n && n.silentJSONParsing) && l
                try {
                    return JSON.parse(t)
                } catch (u) {
                    if (i)
                        throw u.name === 'SyntaxError'
                            ? B.from(
                                  u,
                                  B.ERR_BAD_RESPONSE,
                                  this,
                                  null,
                                  this.response
                              )
                            : u
                }
            }
            return t
        },
    ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: Qe.classes.FormData, Blob: Qe.classes.Blob },
    validateStatus: function (t) {
        return t >= 200 && t < 300
    },
    headers: { common: { Accept: 'application/json, text/plain, */*' } },
}
g.forEach(['delete', 'get', 'head'], function (t) {
    ql.headers[t] = {}
})
g.forEach(['post', 'put', 'patch'], function (t) {
    ql.headers[t] = g.merge(lm)
})
const Cu = ql,
    im = g.toObjectSet([
        'age',
        'authorization',
        'content-length',
        'content-type',
        'etag',
        'expires',
        'from',
        'host',
        'if-modified-since',
        'if-unmodified-since',
        'last-modified',
        'location',
        'max-forwards',
        'proxy-authorization',
        'referer',
        'retry-after',
        'user-agent',
    ]),
    um = (e) => {
        const t = {}
        let n, r, l
        return (
            e &&
                e
                    .split(
                        `
`
                    )
                    .forEach(function (i) {
                        ;(l = i.indexOf(':')),
                            (n = i.substring(0, l).trim().toLowerCase()),
                            (r = i.substring(l + 1).trim()),
                            !(!n || (t[n] && im[n])) &&
                                (n === 'set-cookie'
                                    ? t[n]
                                        ? t[n].push(r)
                                        : (t[n] = [r])
                                    : (t[n] = t[n] ? t[n] + ', ' + r : r))
                    }),
            t
        )
    },
    Ws = Symbol('internals')
function Dn(e) {
    return e && String(e).trim().toLowerCase()
}
function nl(e) {
    return e === !1 || e == null ? e : g.isArray(e) ? e.map(nl) : String(e)
}
function sm(e) {
    const t = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
    let r
    for (; (r = n.exec(e)); ) t[r[1]] = r[2]
    return t
}
const am = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
function To(e, t, n, r, l) {
    if (g.isFunction(r)) return r.call(this, t, n)
    if ((l && (t = n), !!g.isString(t))) {
        if (g.isString(r)) return t.indexOf(r) !== -1
        if (g.isRegExp(r)) return r.test(t)
    }
}
function cm(e) {
    return e
        .trim()
        .toLowerCase()
        .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function fm(e, t) {
    const n = g.toCamelCase(' ' + t)
    ;['get', 'set', 'has'].forEach((r) => {
        Object.defineProperty(e, r + n, {
            value: function (l, o, i) {
                return this[r].call(this, t, l, o, i)
            },
            configurable: !0,
        })
    })
}
class Zl {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const l = this
        function o(u, s, a) {
            const p = Dn(s)
            if (!p) throw new Error('header name must be a non-empty string')
            const h = g.findKey(l, p)
            ;(!h ||
                l[h] === void 0 ||
                a === !0 ||
                (a === void 0 && l[h] !== !1)) &&
                (l[h || s] = nl(u))
        }
        const i = (u, s) => g.forEach(u, (a, p) => o(a, p, s))
        return (
            g.isPlainObject(t) || t instanceof this.constructor
                ? i(t, n)
                : g.isString(t) && (t = t.trim()) && !am(t)
                  ? i(um(t), n)
                  : t != null && o(n, t, r),
            this
        )
    }
    get(t, n) {
        if (((t = Dn(t)), t)) {
            const r = g.findKey(this, t)
            if (r) {
                const l = this[r]
                if (!n) return l
                if (n === !0) return sm(l)
                if (g.isFunction(n)) return n.call(this, l, r)
                if (g.isRegExp(n)) return n.exec(l)
                throw new TypeError('parser must be boolean|regexp|function')
            }
        }
    }
    has(t, n) {
        if (((t = Dn(t)), t)) {
            const r = g.findKey(this, t)
            return !!(
                r &&
                this[r] !== void 0 &&
                (!n || To(this, this[r], r, n))
            )
        }
        return !1
    }
    delete(t, n) {
        const r = this
        let l = !1
        function o(i) {
            if (((i = Dn(i)), i)) {
                const u = g.findKey(r, i)
                u && (!n || To(r, r[u], u, n)) && (delete r[u], (l = !0))
            }
        }
        return g.isArray(t) ? t.forEach(o) : o(t), l
    }
    clear(t) {
        const n = Object.keys(this)
        let r = n.length,
            l = !1
        for (; r--; ) {
            const o = n[r]
            ;(!t || To(this, this[o], o, t, !0)) && (delete this[o], (l = !0))
        }
        return l
    }
    normalize(t) {
        const n = this,
            r = {}
        return (
            g.forEach(this, (l, o) => {
                const i = g.findKey(r, o)
                if (i) {
                    ;(n[i] = nl(l)), delete n[o]
                    return
                }
                const u = t ? cm(o) : String(o).trim()
                u !== o && delete n[o], (n[u] = nl(l)), (r[u] = !0)
            }),
            this
        )
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null)
        return (
            g.forEach(this, (r, l) => {
                r != null &&
                    r !== !1 &&
                    (n[l] = t && g.isArray(r) ? r.join(', ') : r)
            }),
            n
        )
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n)
            .join(`
`)
    }
    get [Symbol.toStringTag]() {
        return 'AxiosHeaders'
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t)
        return n.forEach((l) => r.set(l)), r
    }
    static accessor(t) {
        const r = (this[Ws] = this[Ws] = { accessors: {} }).accessors,
            l = this.prototype
        function o(i) {
            const u = Dn(i)
            r[u] || (fm(l, i), (r[u] = !0))
        }
        return g.isArray(t) ? t.forEach(o) : o(t), this
    }
}
Zl.accessor([
    'Content-Type',
    'Content-Length',
    'Accept',
    'Accept-Encoding',
    'User-Agent',
    'Authorization',
])
g.freezeMethods(Zl.prototype)
g.freezeMethods(Zl)
const tt = Zl
function Ro(e, t) {
    const n = this || Cu,
        r = t || n,
        l = tt.from(r.headers)
    let o = r.data
    return (
        g.forEach(e, function (u) {
            o = u.call(n, o, l.normalize(), t ? t.status : void 0)
        }),
        l.normalize(),
        o
    )
}
function Tf(e) {
    return !!(e && e.__CANCEL__)
}
function kr(e, t, n) {
    B.call(this, e ?? 'canceled', B.ERR_CANCELED, t, n),
        (this.name = 'CanceledError')
}
g.inherits(kr, B, { __CANCEL__: !0 })
function dm(e, t, n) {
    const r = n.config.validateStatus
    !n.status || !r || r(n.status)
        ? e(n)
        : t(
              new B(
                  'Request failed with status code ' + n.status,
                  [B.ERR_BAD_REQUEST, B.ERR_BAD_RESPONSE][
                      Math.floor(n.status / 100) - 4
                  ],
                  n.config,
                  n.request,
                  n
              )
          )
}
const pm = Qe.isStandardBrowserEnv
    ? (function () {
          return {
              write: function (n, r, l, o, i, u) {
                  const s = []
                  s.push(n + '=' + encodeURIComponent(r)),
                      g.isNumber(l) &&
                          s.push('expires=' + new Date(l).toGMTString()),
                      g.isString(o) && s.push('path=' + o),
                      g.isString(i) && s.push('domain=' + i),
                      u === !0 && s.push('secure'),
                      (document.cookie = s.join('; '))
              },
              read: function (n) {
                  const r = document.cookie.match(
                      new RegExp('(^|;\\s*)(' + n + ')=([^;]*)')
                  )
                  return r ? decodeURIComponent(r[3]) : null
              },
              remove: function (n) {
                  this.write(n, '', Date.now() - 864e5)
              },
          }
      })()
    : (function () {
          return {
              write: function () {},
              read: function () {
                  return null
              },
              remove: function () {},
          }
      })()
function hm(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function mm(e, t) {
    return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e
}
function Rf(e, t) {
    return e && !hm(t) ? mm(e, t) : t
}
const ym = Qe.isStandardBrowserEnv
    ? (function () {
          const t = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement('a')
          let r
          function l(o) {
              let i = o
              return (
                  t && (n.setAttribute('href', i), (i = n.href)),
                  n.setAttribute('href', i),
                  {
                      href: n.href,
                      protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
                      host: n.host,
                      search: n.search ? n.search.replace(/^\?/, '') : '',
                      hash: n.hash ? n.hash.replace(/^#/, '') : '',
                      hostname: n.hostname,
                      port: n.port,
                      pathname:
                          n.pathname.charAt(0) === '/'
                              ? n.pathname
                              : '/' + n.pathname,
                  }
              )
          }
          return (
              (r = l(window.location.href)),
              function (i) {
                  const u = g.isString(i) ? l(i) : i
                  return u.protocol === r.protocol && u.host === r.host
              }
          )
      })()
    : (function () {
          return function () {
              return !0
          }
      })()
function gm(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
    return (t && t[1]) || ''
}
function vm(e, t) {
    e = e || 10
    const n = new Array(e),
        r = new Array(e)
    let l = 0,
        o = 0,
        i
    return (
        (t = t !== void 0 ? t : 1e3),
        function (s) {
            const a = Date.now(),
                p = r[o]
            i || (i = a), (n[l] = s), (r[l] = a)
            let h = o,
                m = 0
            for (; h !== l; ) (m += n[h++]), (h = h % e)
            if (((l = (l + 1) % e), l === o && (o = (o + 1) % e), a - i < t))
                return
            const S = p && a - p
            return S ? Math.round((m * 1e3) / S) : void 0
        }
    )
}
function Qs(e, t) {
    let n = 0
    const r = vm(50, 250)
    return (l) => {
        const o = l.loaded,
            i = l.lengthComputable ? l.total : void 0,
            u = o - n,
            s = r(u),
            a = o <= i
        n = o
        const p = {
            loaded: o,
            total: i,
            progress: i ? o / i : void 0,
            bytes: u,
            rate: s || void 0,
            estimated: s && i && a ? (i - o) / s : void 0,
            event: l,
        }
        ;(p[t ? 'download' : 'upload'] = !0), e(p)
    }
}
const wm = typeof XMLHttpRequest < 'u',
    Sm =
        wm &&
        function (e) {
            return new Promise(function (n, r) {
                let l = e.data
                const o = tt.from(e.headers).normalize(),
                    i = e.responseType
                let u
                function s() {
                    e.cancelToken && e.cancelToken.unsubscribe(u),
                        e.signal && e.signal.removeEventListener('abort', u)
                }
                g.isFormData(l) &&
                    (Qe.isStandardBrowserEnv || Qe.isStandardBrowserWebWorkerEnv
                        ? o.setContentType(!1)
                        : o.setContentType('multipart/form-data;', !1))
                let a = new XMLHttpRequest()
                if (e.auth) {
                    const S = e.auth.username || '',
                        y = e.auth.password
                            ? unescape(encodeURIComponent(e.auth.password))
                            : ''
                    o.set('Authorization', 'Basic ' + btoa(S + ':' + y))
                }
                const p = Rf(e.baseURL, e.url)
                a.open(
                    e.method.toUpperCase(),
                    _f(p, e.params, e.paramsSerializer),
                    !0
                ),
                    (a.timeout = e.timeout)
                function h() {
                    if (!a) return
                    const S = tt.from(
                            'getAllResponseHeaders' in a &&
                                a.getAllResponseHeaders()
                        ),
                        v = {
                            data:
                                !i || i === 'text' || i === 'json'
                                    ? a.responseText
                                    : a.response,
                            status: a.status,
                            statusText: a.statusText,
                            headers: S,
                            config: e,
                            request: a,
                        }
                    dm(
                        function (f) {
                            n(f), s()
                        },
                        function (f) {
                            r(f), s()
                        },
                        v
                    ),
                        (a = null)
                }
                if (
                    ('onloadend' in a
                        ? (a.onloadend = h)
                        : (a.onreadystatechange = function () {
                              !a ||
                                  a.readyState !== 4 ||
                                  (a.status === 0 &&
                                      !(
                                          a.responseURL &&
                                          a.responseURL.indexOf('file:') === 0
                                      )) ||
                                  setTimeout(h)
                          }),
                    (a.onabort = function () {
                        a &&
                            (r(new B('Request aborted', B.ECONNABORTED, e, a)),
                            (a = null))
                    }),
                    (a.onerror = function () {
                        r(new B('Network Error', B.ERR_NETWORK, e, a)),
                            (a = null)
                    }),
                    (a.ontimeout = function () {
                        let y = e.timeout
                            ? 'timeout of ' + e.timeout + 'ms exceeded'
                            : 'timeout exceeded'
                        const v = e.transitional || Nf
                        e.timeoutErrorMessage && (y = e.timeoutErrorMessage),
                            r(
                                new B(
                                    y,
                                    v.clarifyTimeoutError
                                        ? B.ETIMEDOUT
                                        : B.ECONNABORTED,
                                    e,
                                    a
                                )
                            ),
                            (a = null)
                    }),
                    Qe.isStandardBrowserEnv)
                ) {
                    const S =
                        (e.withCredentials || ym(p)) &&
                        e.xsrfCookieName &&
                        pm.read(e.xsrfCookieName)
                    S && o.set(e.xsrfHeaderName, S)
                }
                l === void 0 && o.setContentType(null),
                    'setRequestHeader' in a &&
                        g.forEach(o.toJSON(), function (y, v) {
                            a.setRequestHeader(v, y)
                        }),
                    g.isUndefined(e.withCredentials) ||
                        (a.withCredentials = !!e.withCredentials),
                    i && i !== 'json' && (a.responseType = e.responseType),
                    typeof e.onDownloadProgress == 'function' &&
                        a.addEventListener(
                            'progress',
                            Qs(e.onDownloadProgress, !0)
                        ),
                    typeof e.onUploadProgress == 'function' &&
                        a.upload &&
                        a.upload.addEventListener(
                            'progress',
                            Qs(e.onUploadProgress)
                        ),
                    (e.cancelToken || e.signal) &&
                        ((u = (S) => {
                            a &&
                                (r(!S || S.type ? new kr(null, e, a) : S),
                                a.abort(),
                                (a = null))
                        }),
                        e.cancelToken && e.cancelToken.subscribe(u),
                        e.signal &&
                            (e.signal.aborted
                                ? u()
                                : e.signal.addEventListener('abort', u)))
                const m = gm(p)
                if (m && Qe.protocols.indexOf(m) === -1) {
                    r(
                        new B(
                            'Unsupported protocol ' + m + ':',
                            B.ERR_BAD_REQUEST,
                            e
                        )
                    )
                    return
                }
                a.send(l || null)
            })
        },
    rl = { http: Qh, xhr: Sm }
g.forEach(rl, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, 'name', { value: t })
        } catch {}
        Object.defineProperty(e, 'adapterName', { value: t })
    }
})
const km = {
    getAdapter: (e) => {
        e = g.isArray(e) ? e : [e]
        const { length: t } = e
        let n, r
        for (
            let l = 0;
            l < t &&
            ((n = e[l]), !(r = g.isString(n) ? rl[n.toLowerCase()] : n));
            l++
        );
        if (!r)
            throw r === !1
                ? new B(
                      `Adapter ${n} is not supported by the environment`,
                      'ERR_NOT_SUPPORT'
                  )
                : new Error(
                      g.hasOwnProp(rl, n)
                          ? `Adapter '${n}' is not available in the build`
                          : `Unknown adapter '${n}'`
                  )
        if (!g.isFunction(r)) throw new TypeError('adapter is not a function')
        return r
    },
    adapters: rl,
}
function Lo(e) {
    if (
        (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
    )
        throw new kr(null, e)
}
function Ks(e) {
    return (
        Lo(e),
        (e.headers = tt.from(e.headers)),
        (e.data = Ro.call(e, e.transformRequest)),
        ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
            e.headers.setContentType('application/x-www-form-urlencoded', !1),
        km
            .getAdapter(e.adapter || Cu.adapter)(e)
            .then(
                function (r) {
                    return (
                        Lo(e),
                        (r.data = Ro.call(e, e.transformResponse, r)),
                        (r.headers = tt.from(r.headers)),
                        r
                    )
                },
                function (r) {
                    return (
                        Tf(r) ||
                            (Lo(e),
                            r &&
                                r.response &&
                                ((r.response.data = Ro.call(
                                    e,
                                    e.transformResponse,
                                    r.response
                                )),
                                (r.response.headers = tt.from(
                                    r.response.headers
                                )))),
                        Promise.reject(r)
                    )
                }
            )
    )
}
const Ys = (e) => (e instanceof tt ? e.toJSON() : e)
function En(e, t) {
    t = t || {}
    const n = {}
    function r(a, p, h) {
        return g.isPlainObject(a) && g.isPlainObject(p)
            ? g.merge.call({ caseless: h }, a, p)
            : g.isPlainObject(p)
              ? g.merge({}, p)
              : g.isArray(p)
                ? p.slice()
                : p
    }
    function l(a, p, h) {
        if (g.isUndefined(p)) {
            if (!g.isUndefined(a)) return r(void 0, a, h)
        } else return r(a, p, h)
    }
    function o(a, p) {
        if (!g.isUndefined(p)) return r(void 0, p)
    }
    function i(a, p) {
        if (g.isUndefined(p)) {
            if (!g.isUndefined(a)) return r(void 0, a)
        } else return r(void 0, p)
    }
    function u(a, p, h) {
        if (h in t) return r(a, p)
        if (h in e) return r(void 0, a)
    }
    const s = {
        url: o,
        method: o,
        data: o,
        baseURL: i,
        transformRequest: i,
        transformResponse: i,
        paramsSerializer: i,
        timeout: i,
        timeoutMessage: i,
        withCredentials: i,
        adapter: i,
        responseType: i,
        xsrfCookieName: i,
        xsrfHeaderName: i,
        onUploadProgress: i,
        onDownloadProgress: i,
        decompress: i,
        maxContentLength: i,
        maxBodyLength: i,
        beforeRedirect: i,
        transport: i,
        httpAgent: i,
        httpsAgent: i,
        cancelToken: i,
        socketPath: i,
        responseEncoding: i,
        validateStatus: u,
        headers: (a, p) => l(Ys(a), Ys(p), !0),
    }
    return (
        g.forEach(Object.keys(Object.assign({}, e, t)), function (p) {
            const h = s[p] || l,
                m = h(e[p], t[p], p)
            ;(g.isUndefined(m) && h !== u) || (n[p] = m)
        }),
        n
    )
}
const Lf = '1.4.0',
    _u = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
    (e, t) => {
        _u[e] = function (r) {
            return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e
        }
    }
)
const Js = {}
_u.transitional = function (t, n, r) {
    function l(o, i) {
        return (
            '[Axios v' +
            Lf +
            "] Transitional option '" +
            o +
            "'" +
            i +
            (r ? '. ' + r : '')
        )
    }
    return (o, i, u) => {
        if (t === !1)
            throw new B(
                l(i, ' has been removed' + (n ? ' in ' + n : '')),
                B.ERR_DEPRECATED
            )
        return (
            n &&
                !Js[i] &&
                ((Js[i] = !0),
                console.warn(
                    l(
                        i,
                        ' has been deprecated since v' +
                            n +
                            ' and will be removed in the near future'
                    )
                )),
            t ? t(o, i, u) : !0
        )
    }
}
function Em(e, t, n) {
    if (typeof e != 'object')
        throw new B('options must be an object', B.ERR_BAD_OPTION_VALUE)
    const r = Object.keys(e)
    let l = r.length
    for (; l-- > 0; ) {
        const o = r[l],
            i = t[o]
        if (i) {
            const u = e[o],
                s = u === void 0 || i(u, o, e)
            if (s !== !0)
                throw new B(
                    'option ' + o + ' must be ' + s,
                    B.ERR_BAD_OPTION_VALUE
                )
            continue
        }
        if (n !== !0) throw new B('Unknown option ' + o, B.ERR_BAD_OPTION)
    }
}
const Ni = { assertOptions: Em, validators: _u },
    ct = Ni.validators
class Rl {
    constructor(t) {
        ;(this.defaults = t),
            (this.interceptors = { request: new Vs(), response: new Vs() })
    }
    request(t, n) {
        typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
            (n = En(this.defaults, n))
        const { transitional: r, paramsSerializer: l, headers: o } = n
        r !== void 0 &&
            Ni.assertOptions(
                r,
                {
                    silentJSONParsing: ct.transitional(ct.boolean),
                    forcedJSONParsing: ct.transitional(ct.boolean),
                    clarifyTimeoutError: ct.transitional(ct.boolean),
                },
                !1
            ),
            l != null &&
                (g.isFunction(l)
                    ? (n.paramsSerializer = { serialize: l })
                    : Ni.assertOptions(
                          l,
                          { encode: ct.function, serialize: ct.function },
                          !0
                      )),
            (n.method = (
                n.method ||
                this.defaults.method ||
                'get'
            ).toLowerCase())
        let i
        ;(i = o && g.merge(o.common, o[n.method])),
            i &&
                g.forEach(
                    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
                    (y) => {
                        delete o[y]
                    }
                ),
            (n.headers = tt.concat(i, o))
        const u = []
        let s = !0
        this.interceptors.request.forEach(function (v) {
            ;(typeof v.runWhen == 'function' && v.runWhen(n) === !1) ||
                ((s = s && v.synchronous), u.unshift(v.fulfilled, v.rejected))
        })
        const a = []
        this.interceptors.response.forEach(function (v) {
            a.push(v.fulfilled, v.rejected)
        })
        let p,
            h = 0,
            m
        if (!s) {
            const y = [Ks.bind(this), void 0]
            for (
                y.unshift.apply(y, u),
                    y.push.apply(y, a),
                    m = y.length,
                    p = Promise.resolve(n);
                h < m;

            )
                p = p.then(y[h++], y[h++])
            return p
        }
        m = u.length
        let S = n
        for (h = 0; h < m; ) {
            const y = u[h++],
                v = u[h++]
            try {
                S = y(S)
            } catch (j) {
                v.call(this, j)
                break
            }
        }
        try {
            p = Ks.call(this, S)
        } catch (y) {
            return Promise.reject(y)
        }
        for (h = 0, m = a.length; h < m; ) p = p.then(a[h++], a[h++])
        return p
    }
    getUri(t) {
        t = En(this.defaults, t)
        const n = Rf(t.baseURL, t.url)
        return _f(n, t.params, t.paramsSerializer)
    }
}
g.forEach(['delete', 'get', 'head', 'options'], function (t) {
    Rl.prototype[t] = function (n, r) {
        return this.request(
            En(r || {}, { method: t, url: n, data: (r || {}).data })
        )
    }
})
g.forEach(['post', 'put', 'patch'], function (t) {
    function n(r) {
        return function (o, i, u) {
            return this.request(
                En(u || {}, {
                    method: t,
                    headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
                    url: o,
                    data: i,
                })
            )
        }
    }
    ;(Rl.prototype[t] = n()), (Rl.prototype[t + 'Form'] = n(!0))
})
const ll = Rl
class Nu {
    constructor(t) {
        if (typeof t != 'function')
            throw new TypeError('executor must be a function.')
        let n
        this.promise = new Promise(function (o) {
            n = o
        })
        const r = this
        this.promise.then((l) => {
            if (!r._listeners) return
            let o = r._listeners.length
            for (; o-- > 0; ) r._listeners[o](l)
            r._listeners = null
        }),
            (this.promise.then = (l) => {
                let o
                const i = new Promise((u) => {
                    r.subscribe(u), (o = u)
                }).then(l)
                return (
                    (i.cancel = function () {
                        r.unsubscribe(o)
                    }),
                    i
                )
            }),
            t(function (o, i, u) {
                r.reason || ((r.reason = new kr(o, i, u)), n(r.reason))
            })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason)
            return
        }
        this._listeners ? this._listeners.push(t) : (this._listeners = [t])
    }
    unsubscribe(t) {
        if (!this._listeners) return
        const n = this._listeners.indexOf(t)
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let t
        return {
            token: new Nu(function (l) {
                t = l
            }),
            cancel: t,
        }
    }
}
const xm = Nu
function Cm(e) {
    return function (n) {
        return e.apply(null, n)
    }
}
function _m(e) {
    return g.isObject(e) && e.isAxiosError === !0
}
const Pi = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
}
Object.entries(Pi).forEach(([e, t]) => {
    Pi[t] = e
})
const Nm = Pi
function Of(e) {
    const t = new ll(e),
        n = pf(ll.prototype.request, t)
    return (
        g.extend(n, ll.prototype, t, { allOwnKeys: !0 }),
        g.extend(n, t, null, { allOwnKeys: !0 }),
        (n.create = function (l) {
            return Of(En(e, l))
        }),
        n
    )
}
const b = Of(Cu)
b.Axios = ll
b.CanceledError = kr
b.CancelToken = xm
b.isCancel = Tf
b.VERSION = Lf
b.toFormData = Gl
b.AxiosError = B
b.Cancel = b.CanceledError
b.all = function (t) {
    return Promise.all(t)
}
b.spread = Cm
b.isAxiosError = _m
b.mergeConfig = En
b.AxiosHeaders = tt
b.formToJSON = (e) => Pf(g.isHTMLForm(e) ? new FormData(e) : e)
b.HttpStatusCode = Nm
b.default = b
const be = b,
    Er = '/api/blogs'
let jf
const Pm = (e) => {
        jf = `Bearer ${e}`
    },
    Tm = async (e) => {
        try {
            const t = { headers: { Authorization: jf } }
            return (await be.post(Er, e, t)).data
        } catch (t) {
            console.log('Error in creating a new blog. ', t)
        }
    },
    Rm = async (e, t) => {
        try {
            return (await be.put(`${Er}/${e}`, t)).status
        } catch (n) {
            console.log('Error in updating and old blog. ', n)
        }
    },
    Lm = async () =>
        (await be.get(Er).catch((t) => (console.log('fail: ', t), []))).data,
    Om = async (e) => {
        try {
            return (await be.get(`${Er}/${e}`)).data
        } catch (t) {
            console.log('Error in fetching new blog. ', t)
            return
        }
    },
    jm = async (e, t) => {
        try {
            be.defaults.headers.common.token = 'Bearer ' + t
            const n = await be.delete(`${Er}/${e}`)
            return (be.defaults.headers.common.token = ''), n.status
        } catch (n) {
            ;(be.defaults.headers.common.token = ''),
                console.log('Error in deleting a blog. ', n)
            return
        }
    },
    zt = {
        getAll: Lm,
        create: Tm,
        update: Rm,
        setToken: Pm,
        getBlogWithID: Om,
        deleteBlog: jm,
    },
    Pu = ({ text: e, id: t, click: n }) =>
        w.jsx('button', { id: t, 'data-testid': t, onClick: n, children: e }),
    hr = 'divBlogRest',
    Pt = 'buttonView',
    Tu = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5,
    },
    zm = { backgroundColor: '#f44336' },
    Ru = (e) => {
        e.preventDefault()
        const t = e.target.id.replace(Pt, ''),
            n = document.getElementById(hr + t),
            r = document.getElementById(Pt + t)
        n.style.display === 'none'
            ? ((n.style.display = 'block'), (r.textContent = 'hide'))
            : ((n.style.display = 'none'), (r.textContent = 'view'))
    },
    Bm = (e) =>
        e.b.user === null ||
        e.b.user === void 0 ||
        e.b.user.username === null ||
        e.b.user.username === void 0
            ? Dm(e)
            : e.user.username === e.b.user.username
              ? Fm(e)
              : Am(e),
    Dm = (e) =>
        w.jsxs('div', {
            id: 'divBlogMain' + e.nro,
            style: Tu,
            children: [
                w.jsxs('div', {
                    id: 'divBlogTitle' + e.nro,
                    children: [
                        w.jsx('label', { children: e.b.title }),
                        w.jsx(Pu, {
                            text: 'view',
                            id: Pt + e.nro,
                            'data-testid': Pt + e.nro,
                            click: Ru,
                        }),
                    ],
                }),
                w.jsxs('div', {
                    id: hr + e.nro,
                    style: { display: 'none' },
                    children: [
                        w.jsx('div', {
                            id: 'divBlogURL' + e.nro,
                            children: w.jsx('label', { children: e.b.url }),
                        }),
                        w.jsxs('div', {
                            id: 'divBlogLikes' + e.nro,
                            children: [
                                w.jsx('label', {
                                    id: 'labelLikes' + e.nro,
                                    children: e.b.likes,
                                }),
                                w.jsx('input', {
                                    id: 'buttonLike' + e.nro,
                                    onClick: (t) => {
                                        e.updateOldBlog(t, e.b)
                                    },
                                    value: 'like',
                                    type: 'submit',
                                }),
                            ],
                        }),
                        w.jsx('div', {
                            id: 'divBlogAuthor' + e.nro,
                            children: w.jsx('label', {
                                children:
                                    'Original user doesnt exist in database.',
                            }),
                        }),
                    ],
                }),
            ],
        }),
    Am = (e) =>
        w.jsxs('div', {
            id: 'divBlogMain' + e.nro,
            style: Tu,
            children: [
                w.jsxs('div', {
                    id: 'divBlogTitle' + e.nro,
                    children: [
                        w.jsx('label', { children: e.b.title }),
                        w.jsx(Pu, {
                            text: 'view',
                            id: Pt + e.nro,
                            'data-testid': Pt + e.nro,
                            click: Ru,
                        }),
                    ],
                }),
                w.jsxs('div', {
                    id: hr + e.nro,
                    style: { display: 'none' },
                    children: [
                        w.jsx('div', {
                            id: 'divBlogURL' + e.nro,
                            children: w.jsx('label', { children: e.b.url }),
                        }),
                        w.jsxs('div', {
                            id: 'divBlogLikes' + e.nro,
                            children: [
                                w.jsx('label', {
                                    id: 'labelLikes' + e.nro,
                                    children: e.b.likes,
                                }),
                                w.jsx('input', {
                                    id: 'buttonLike' + e.nro,
                                    onClick: (t) => {
                                        e.updateOldBlog(t, e.b)
                                    },
                                    value: 'like',
                                    type: 'submit',
                                }),
                            ],
                        }),
                        w.jsx('div', {
                            id: 'divBlogAuthor' + e.nro,
                            children: w.jsx('label', {
                                children: e.b.user.username,
                            }),
                        }),
                    ],
                }),
            ],
        }),
    Fm = (e) =>
        w.jsxs('div', {
            id: 'divBlogMain' + e.nro,
            'data-testid': 'divBlogMain' + e.nro,
            style: Tu,
            children: [
                w.jsxs('div', {
                    id: 'divBlogTitle' + e.nro,
                    children: [
                        w.jsx('label', { children: e.b.title }),
                        w.jsx(Pu, {
                            text: 'view',
                            id: Pt + e.nro,
                            'data-testid': Pt + e.nro,
                            click: Ru,
                        }),
                    ],
                }),
                w.jsxs('div', {
                    id: hr + e.nro,
                    'data-testid': hr + e.nro,
                    style: { display: 'none' },
                    children: [
                        w.jsx('div', {
                            id: 'divBlogURL' + e.nro,
                            children: w.jsx('label', { children: e.b.url }),
                        }),
                        w.jsxs('div', {
                            id: 'divBlogLikes' + e.nro,
                            children: [
                                w.jsx('label', {
                                    id: 'labelLikes' + e.nro,
                                    children: e.b.likes,
                                }),
                                w.jsx('input', {
                                    id: 'buttonLike' + e.nro,
                                    'data-testid': 'buttonLike' + e.nro,
                                    onClick: (t) => {
                                        e.updateOldBlog(t, e.b)
                                    },
                                    value: 'like',
                                    type: 'submit',
                                }),
                            ],
                        }),
                        w.jsx('div', {
                            id: 'divBlogAuthor' + e.nro,
                            children: w.jsx('label', {
                                children: e.b.user.username,
                            }),
                        }),
                        w.jsx('div', {
                            id: 'divDeleteBlog' + e.nro,
                            children: w.jsx('button', {
                                id: 'buttonDelete' + e.nro,
                                'data-testid': 'buttonDelete' + e.nro,
                                onClick: (t) => {
                                    e.deleteBlogs(t, e.b.id)
                                },
                                style: zm,
                                children: 'delete',
                            }),
                        }),
                    ],
                }),
            ],
        }),
    Im = (e) =>
        e.user === null || e.user === void 0
            ? Um()
            : e.blogs === void 0 || e.blogs === null || e.blogs.length === 0
              ? Mm()
              : $m(e),
    Um = () =>
        w.jsx('div', {
            children: w.jsx('p', {
                children: 'Blogs will be shown after login',
            }),
        }),
    Mm = () =>
        w.jsxs('div', {
            children: [
                w.jsx('h4', { children: 'Your blogs:' }),
                w.jsx('p', { children: 'You dont have any blogs' }),
            ],
        }),
    $m = (e) => {
        console.log(e)
        let t = 0
        return w.jsxs('div', {
            children: [
                w.jsx('h4', { children: 'Your blogs:' }),
                e.blogs.map((n) =>
                    w.jsx(
                        'div',
                        {
                            children: w.jsx(Bm, {
                                b: n,
                                nro: t++,
                                user: e.user,
                                updateOldBlog: e.updateOldBlog,
                                deleteBlogs: e.deleteBlogs,
                            }),
                        },
                        n.title + n.author
                    )
                ),
            ],
        })
    },
    Hm = ({ createBlog: e, user: t }) => {
        const [n, r] = te.useState(''),
            [l, o] = te.useState(''),
            [i, u] = te.useState(''),
            [s, a] = te.useState(''),
            p = (m) => {
                m.preventDefault(),
                    e({
                        title: n,
                        author: l,
                        url: i,
                        likes: s || 0,
                        username: t.username,
                    }),
                    h()
            },
            h = () => {
                r(''), o(''), u(''), a('')
            }
        return w.jsxs('div', {
            children: [
                w.jsx('h4', { children: 'Add new Blog to DB' }),
                w.jsx('div', {
                    id: 'divNewBlog3',
                    children: w.jsxs('form', {
                        id: 'formNewBlog',
                        onSubmit: p,
                        children: [
                            w.jsx('div', {
                                children: w.jsxs('label', {
                                    children: [
                                        'title:   ',
                                        w.jsx('input', {
                                            type: 'text',
                                            id: 'inputBlogTitle',
                                            'data-testid': 'inputBlogTitle',
                                            name: 'inputBlog',
                                            value: n,
                                            onChange: (m) => r(m.target.value),
                                        }),
                                    ],
                                }),
                            }),
                            w.jsx('div', {
                                children: w.jsxs('label', {
                                    children: [
                                        'author:  ',
                                        w.jsx('input', {
                                            type: 'text',
                                            id: 'inputBlogAuthor',
                                            'data-testid': 'inputBlogAuthor',
                                            name: 'inputBlog',
                                            value: l,
                                            onChange: (m) => o(m.target.value),
                                        }),
                                    ],
                                }),
                            }),
                            w.jsx('div', {
                                children: w.jsxs('label', {
                                    children: [
                                        'url:     ',
                                        w.jsx('input', {
                                            type: 'text',
                                            id: 'inputBlogUrl',
                                            'data-testid': 'inputBlogUrl',
                                            name: 'inputBlog',
                                            value: i,
                                            onChange: (m) => u(m.target.value),
                                        }),
                                    ],
                                }),
                            }),
                            w.jsx('div', {
                                children: w.jsxs('label', {
                                    children: [
                                        'likes:   ',
                                        w.jsx('input', {
                                            type: 'Number',
                                            id: 'inputBlogLikes',
                                            'data-testid': 'inputBlogLikes',
                                            name: 'inputBlog',
                                            value: s,
                                            onChange: (m) => a(m.target.value),
                                        }),
                                    ],
                                }),
                            }),
                            w.jsxs('div', {
                                children: [
                                    w.jsx('br', {}),
                                    w.jsx('input', {
                                        id: 'submitNewBlog',
                                        'data-testid': 'submitNewBlog',
                                        type: 'submit',
                                        value: 'Add new Blog',
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        })
    },
    Vm = '/api/login',
    Wm = async (e) =>
        (
            await be.post(Vm, e).catch((n) => {
                console.log('Error in logging in. ', n)
            })
        ).data,
    Qm = { login: Wm },
    Km = ({ message: e, success: t }) =>
        e === null || e === ''
            ? null
            : t
              ? w.jsx('div', { className: 'success', children: e })
              : w.jsx('div', { className: 'error', children: e }),
    Ym = (e, t) => e.map((r) => r.user === t.id),
    Jm = (e, t) => {
        try {
            return e.map((n) => (n.id === t.id ? t : n))
        } catch {
            return e
        }
    },
    Xm = (e) => e.sort((t, n) => n.likes - t.likes),
    Gm = (e, t) => e.filter((n) => n.id !== t),
    An = {
        sortBlogsByUserID: Ym,
        updateBlogList: Jm,
        sortBlogListByLikes: Xm,
        removeBlogByID: Gm,
    },
    Ll = te.forwardRef((e, t) => {
        const [n, r] = te.useState(!1),
            l = { display: n ? 'none' : '' },
            o = { display: n ? '' : 'none' },
            i = () => {
                r(!n)
            }
        return (
            te.useImperativeHandle(t, () => ({ toggleVisibility: i })),
            w.jsxs('div', {
                children: [
                    w.jsxs('div', {
                        style: l,
                        children: [
                            w.jsx('br', {}),
                            w.jsx('button', {
                                id: e.id,
                                onClick: i,
                                children: e.buttonLabel,
                            }),
                        ],
                    }),
                    w.jsxs('div', {
                        id: 'divNewBlog2',
                        style: o,
                        className: 'togglableContent',
                        children: [
                            e.children,
                            w.jsx('button', {
                                id: e.id2,
                                onClick: i,
                                children: e.buttonLabel2,
                            }),
                        ],
                    }),
                ],
            })
        )
    })
Ll.displayName = 'Togglable'
Ll.propTypes = {
    buttonLabel: At.string.isRequired,
    buttonLabel2: At.string.isRequired,
}
const qm = () => {
    const [e, t] = te.useState([]),
        [n, r] = te.useState(null),
        [l, o] = te.useState(null),
        [i, u] = te.useState(!0),
        [s, a] = te.useState(''),
        [p, h] = te.useState(''),
        m = te.useRef()
    te.useEffect(() => {
        const F = window.localStorage.getItem('blogApplicationUser')
        if (F) {
            const X = JSON.parse(F)
            r(X), zt.setToken(X.token)
        }
    }, []),
        te.useEffect(() => {
            t()
        }, [])
    const S = (F) => {
            F.preventDefault(), console.log('logging in with', s), y()
        },
        y = async () => {
            try {
                const F = await Qm.login({ username: s, password: p })
                r(F),
                    zt.setToken(F.token),
                    window.localStorage.setItem(
                        'blogApplicationUser',
                        JSON.stringify(F)
                    ),
                    v(),
                    zt.getAll().then((X) => t(An.sortBlogListByLikes(X))),
                    console.log('LogIn succefull')
            } catch {
                o('Wrong credentials'),
                    setTimeout(() => {
                        o(null)
                    }, 5e3)
            }
        },
        v = () => {
            h(''), a(''), console.log('LOGIN CREDENTIALS HAVE BEEN CLEARED!')
        },
        j = () => {
            ;(document.getElementById('inputBlogTitle').value = ''),
                (document.getElementById('inputBlogAuthor').value = ''),
                (document.getElementById('inputBlogUrl').value = ''),
                (document.getElementById('inputBlogLikes').value = '')
        },
        f = (F) => {
            a(F.target.value)
        },
        c = (F) => {
            h(F.target.value)
        },
        d = () =>
            w.jsx(Ll, {
                buttonLabel: 'Open application',
                buttonLabel2: 'Cancel',
                id: 'btnNewBlogCreate',
                id2: 'btnNewBlogCancel',
                children: w.jsx(df, {
                    click: S,
                    usr: s,
                    psw: p,
                    changeUSR: f,
                    changePSW: c,
                }),
            }),
        k = () => w.jsx(ch, { user: n, click: xr }),
        C = async (F, X) => {
            F.preventDefault()
            try {
                const Be = X.likes + 1
                console.log(Be)
                const x = { ...X, likes: Be }
                ;(await zt.update(x.id, x)) === 200
                    ? (console.log('Likes have been increased'),
                      t(An.sortBlogListByLikes(An.updateBlogList(e, x))),
                      L(`Blog: ${x.title} has ${x.likes} likes!`))
                    : le('Error in increasing likes - try again later!')
            } catch (Be) {
                console.log('Error in increasing likes! ', Be),
                    le('Error in increasing likes - try again later!')
            }
        },
        N = async (F, X) => {
            if (
                (F.preventDefault(),
                window.confirm(
                    'Are you sure you want to delete a blog you have added?'
                ))
            ) {
                const x = await zt.deleteBlog(X, n.token)
                console.log('DELETE: ', x),
                    x === 204
                        ? (console.log('DELETE SUCCESFULL!'),
                          t(An.removeBlogByID(e, X)))
                        : le('Error in deleting blogs - try again later!')
            }
        },
        P = () =>
            w.jsx('form', {
                id: 'formUpdateBlog',
                onSubmit: C,
                children: w.jsx(Im, {
                    blogs: e,
                    user: n,
                    updateOldBlog: C,
                    deleteBlogs: N,
                }),
            }),
        T = () =>
            w.jsx(Ll, {
                buttonLabel: 'Create new blog',
                buttonLabel2: 'Cancel',
                id: 'btnNewBlogCreate',
                id2: 'btnNewBlogCancel',
                ref: m,
                children: w.jsx(Hm, { createBlog: H, user: n }),
            }),
        H = async (F) => {
            try {
                const X = await zt.create(F)
                if (X) {
                    const Be = await zt.getBlogWithID(X.id)
                    t(An.sortBlogListByLikes(e.concat(Be))),
                        j(),
                        L(
                            `New blog: ${X.title} by ${X.author} has been added to databse!`
                        ),
                        m.current.toggleVisibility()
                } else
                    le(
                        'Error in adding a new blog. Try again later. If error continues logout and login again.'
                    )
            } catch {
                u(!0),
                    le(
                        'Error in adding a new blog. Try again later. If error continues logout and login again.'
                    )
            }
        },
        L = (F) => {
            ut(), o(`${F}`), u(!0), st()
        },
        le = (F) => {
            ut(), o(`${F}`), st()
        },
        ut = () => {
            o(null), u(void 0)
        },
        st = () => {
            setTimeout(() => {
                o(null), u(void 0)
            }, 5e3)
        },
        xr = (F) => {
            F.preventDefault(),
                window.localStorage.removeItem('blogApplicationUser'),
                r(null)
        }
    return w.jsxs('div', {
        children: [
            w.jsx('div', {
                id: 'divError',
                children: w.jsx(Km, { message: l, success: i }),
            }),
            w.jsx('div', { id: 'divLogin', children: !n && d() }),
            w.jsx('div', { id: 'divShowUser', children: n && k() }),
            w.jsx('div', { id: 'divShowBLogs', children: n && P() }),
            w.jsx('div', { id: 'divNewBlog', children: n && T() }),
        ],
    })
}
Oo.createRoot(document.getElementById('root')).render(w.jsx(qm, {}))
