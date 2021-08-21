/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
var toggles, idx, resultDetails, $searchResults, $searchInput;
(function(a, b) {
    "use strict";
    typeof module == "object" && typeof module.exports == "object" ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}
)(typeof window != "undefined" ? window : this, function(d, cb) {
    "use strict";
    var o = [], bb = Object.getPrototypeOf, r = o.slice, a_ = o.flat ? function(a) {
        return o.flat.call(a)
    }
    : function(a) {
        return o.concat.apply([], a)
    }
    , ag = o.push, S = o.indexOf, V = {}, aZ = V.toString, U = V.hasOwnProperty, aU = U.toString, ca = aU.call(Object), f = {}, c = function(a) {
        return typeof a == "function" && typeof a.nodeType != "number"
    }, w = function(a) {
        return a != null && a === a.window
    }, e = d.document, b$ = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    }, bd, a, s, y, aQ, aO, aN, aL, bX, bW, bV, bU, m, bS, ab, q, bR, bM, N, b, i, bG, bE, au, I, p, v, C, bC, P, ar, J, ap, aq, j, bA, by, bx, az, br, bo, bn, al, W, aS, bh, aW, aX, aY, bf, ba, be, aE, z, O, bj, bk, aA, L, bu, bv, bz, av, an, K, ao, aa, bF, ay, bH, bI, bK, bL, ce, bN, bO, bP, bQ, aB, aj, aD, af, b_, G, aT, ak, cc, cd, bs;
    function aR(g, a, b) {
        b = b || e;
        var c, f, d = b.createElement("script");
        if (d.text = g,
        a)
            for (c in b$)
                f = a[c] || a.getAttribute && a.getAttribute(c),
                f && d.setAttribute(c, f);
        b.head.appendChild(d).parentNode.removeChild(d)
    }
    function E(a) {
        return a == null ? a + "" : typeof a == "object" || typeof a == "function" ? V[aZ.call(a)] || "object" : typeof a
    }
    bd = "3.5.1",
    a = function(b, c) {
        return new a.fn.init(b,c)
    }
    ,
    a.fn = a.prototype = {
        jquery: bd,
        constructor: a,
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(a) {
            return a == null ? r.call(this) : a < 0 ? this[a + this.length] : this[a]
        },
        pushStack: function(c) {
            var b = a.merge(this.constructor(), c);
            return b.prevObject = this,
            b
        },
        each: function(b) {
            return a.each(this, b)
        },
        map: function(b) {
            return this.pushStack(a.map(this, function(a, c) {
                return b.call(a, c, a)
            }))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(a.grep(this, function(b, a) {
                return (a + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(a.grep(this, function(b, a) {
                return a % 2
            }))
        },
        eq: function(b) {
            var c = this.length
              , a = +b + (b < 0 ? c : 0);
            return this.pushStack(a >= 0 && a < c ? [this[a]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ag,
        sort: o.sort,
        splice: o.splice
    },
    a.extend = a.fn.extend = function() {
        var j, f, g, d, h, i, b = arguments[0] || {}, e = 1, l = arguments.length, k = !1;
        for (typeof b == "boolean" && (k = b,
        b = arguments[e] || {},
        e++),
        typeof b != "object" && !c(b) && (b = {}),
        e === l && (b = this,
        e--); e < l; e++)
            if ((j = arguments[e]) != null)
                for (f in j) {
                    if (d = j[f],
                    f === "__proto__" || b === d)
                        continue;
                    k && d && (a.isPlainObject(d) || (h = Array.isArray(d))) ? (g = b[f],
                    h && !Array.isArray(g) ? i = [] : !h && !a.isPlainObject(g) ? i = {} : i = g,
                    h = !1,
                    b[f] = a.extend(k, i, d)) : d !== void 0 && (b[f] = d)
                }
        return b
    }
    ,
    a.extend({
        expando: "jQuery" + (bd + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isPlainObject: function(b) {
            var a, c;
            return !(!b || aZ.call(b) !== "[object Object]") && (!!(a = bb(b),
            !a) || (c = U.call(a, "constructor") && a.constructor,
            typeof c == "function" && aU.call(c) === ca))
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        globalEval: function(b, a, c) {
            aR(b, {
                nonce: a && a.nonce
            }, c)
        },
        each: function(b, c) {
            var d, a = 0;
            if (_(b)) {
                for (d = b.length; a < d; a++)
                    if (c.call(b[a], a, b[a]) === !1)
                        break
            } else
                for (a in b)
                    if (c.call(b[a], a, b[a]) === !1)
                        break;
            return b
        },
        makeArray: function(b, d) {
            var c = d || [];
            return b != null && (_(Object(b)) ? a.merge(c, typeof b == "string" ? [b] : b) : ag.call(c, b)),
            c
        },
        inArray: function(b, a, c) {
            return a == null ? -1 : S.call(a, b, c)
        },
        merge: function(a, c) {
            for (var e = +c.length, b = 0, d = a.length; b < e; b++)
                a[d++] = c[b];
            return a.length = d,
            a
        },
        grep: function(b, e, f) {
            for (var c, d = [], a = 0, g = b.length, h = !f; a < g; a++)
                c = !e(b[a], a),
                c !== h && d.push(b[a]);
            return d
        },
        map: function(c, e, f) {
            var g, b, a = 0, d = [];
            if (_(c)) {
                for (g = c.length; a < g; a++)
                    b = e(c[a], a, f),
                    b != null && d.push(b)
            } else
                for (a in c)
                    b = e(c[a], a, f),
                    b != null && d.push(b);
            return a_(d)
        },
        guid: 1,
        support: f
    }),
    typeof Symbol == "function" && (a.fn[Symbol.iterator] = o[Symbol.iterator]),
    a.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(b, a) {
        V["[object " + a + "]"] = a.toLowerCase()
    });
    function _(a) {
        var b = !!a && "length"in a && a.length
          , d = E(a);
        return !(c(a) || w(a)) && (d === "array" || b === 0 || typeof b == "number" && b > 0 && b - 1 in a)
    }
    s = function(M) {
        var x, e, a, D, Y, z, R, Z, G, q, y, p, b, h, i, g, u, C, A, f = "sizzle" + 1 * new Date, k = M.document, m = 0, ay = 0, _ = J(), $ = J(), aa = J(), F = J(), V = function(a, b) {
            return a === b && (y = !0),
            0
        }, ar = {}.hasOwnProperty, s = [], aq = s.pop, al = s.push, r = s.push, ai = s.slice, v = function(b, c) {
            for (var a = 0, d = b.length; a < d; a++)
                if (b[a] === c)
                    return a;
            return -1
        }, N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", c = "[\\x20\\t\\r\\n\\f]", t = "(?:\\\\[\\da-fA-F]{1,6}" + c + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", X = "\\[" + c + "*(" + t + ")(?:" + c + "*([*^$|!~]?=)" + c + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + c + "*\\]", W = ":(" + t + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + X + ")*)|" + ".*" + ")\\)|)", ak = new RegExp(c + "+","g"), E = new RegExp("^" + c + "+|((?:^|[^\\\\])(?:\\\\.)*)" + c + "+$","g"), am = new RegExp("^" + c + "*," + c + "*"), ac = new RegExp("^" + c + "*([>+~]|" + c + ")" + c + "*"), at = new RegExp(c + "|>"), au = new RegExp(W), aw = new RegExp("^" + t + "$"), K = {
            ID: new RegExp("^#(" + t + ")"),
            CLASS: new RegExp("^\\.(" + t + ")"),
            TAG: new RegExp("^(" + t + "|[*])"),
            ATTR: new RegExp("^" + X),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + c + "*(even|odd|(([+-]|)(\\d*)n|)" + c + "*(?:([+-]|)" + c + "*(\\d+)|))" + c + "*\\)|)","i"),
            bool: new RegExp("^(?:" + N + ")$","i"),
            needsContext: new RegExp("^" + c + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + c + "*((?:-\\d)?\\d*)" + c + "*\\)|)(?=[^-]|$)","i")
        }, aj = /HTML$/i, aA = /^(?:input|select|textarea|button)$/i, az = /^h\d$/i, B = /^[^{]+\{\s*\[native \w/, av = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, U = /[+~]/, o = new RegExp("\\\\[\\da-fA-F]{1,6}" + c + "?|\\\\([^\\r\\n\\f])","g"), n = function(c, b) {
            var a = "0x" + c.slice(1) - 65536;
            return b ? b : a < 0 ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)
        }, ad = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ae = function(a, b) {
            return b ? a === "\0" ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
        }, af = function() {
            p()
        }, ap = I(function(a) {
            return a.disabled === !0 && a.nodeName.toLowerCase() === "fieldset"
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            r.apply(s = ai.call(k.childNodes), k.childNodes),
            s[k.childNodes.length].nodeType
        } catch (a) {
            r = {
                apply: s.length ? function(a, b) {
                    al.apply(a, ai.call(b))
                }
                : function(a, c) {
                    for (var b = a.length, d = 0; a[b++] = c[d++]; )
                        ;
                    a.length = b - 1
                }
            }
        }
        function d(d, a, c, t) {
            var j, q, k, h, o, n, s, m = a && a.ownerDocument, l = a ? a.nodeType : 9;
            if (c = c || [],
            typeof d != "string" || !d || l !== 1 && l !== 9 && l !== 11)
                return c;
            if (!t)
                if (p(a),
                a = a || b,
                i) {
                    if (l !== 11 && (o = av.exec(d)))
                        if (j = o[1]) {
                            if (l === 9)
                                if (k = a.getElementById(j)) {
                                    if (k.id === j)
                                        return c.push(k),
                                        c
                                } else
                                    return c;
                            else if (m && (k = m.getElementById(j)) && A(a, k) && k.id === j)
                                return c.push(k),
                                c
                        } else if (o[2])
                            return r.apply(c, a.getElementsByTagName(d)),
                            c;
                        else if ((j = o[3]) && e.getElementsByClassName && a.getElementsByClassName)
                            return r.apply(c, a.getElementsByClassName(j)),
                            c;
                    if (e.qsa && !F[d + " "] && (!g || !g.test(d)) && (l !== 1 || a.nodeName.toLowerCase() !== "object")) {
                        if (s = d,
                        m = a,
                        l === 1 && (at.test(d) || ac.test(d))) {
                            for (m = U.test(d) && T(a.parentNode) || a,
                            (m !== a || !e.scope) && ((h = a.getAttribute("id")) ? h = h.replace(ad, ae) : a.setAttribute("id", h = f)),
                            n = z(d),
                            q = n.length; q--; )
                                n[q] = (h ? "#" + h : ":scope") + " " + H(n[q]);
                            s = n.join(",")
                        }
                        try {
                            return r.apply(c, m.querySelectorAll(s)),
                            c
                        } catch (a) {
                            F(d, !0)
                        } finally {
                            h === f && a.removeAttribute("id")
                        }
                    }
                }
            return Z(d.replace(E, "$1"), a, c, t)
        }
        function J() {
            var c = [];
            function b(d, e) {
                return c.push(d + " ") > a.cacheLength && delete b[c.shift()],
                b[d + " "] = e
            }
            return b
        }
        function l(a) {
            return a[f] = !0,
            a
        }
        function j(c) {
            var a = b.createElement("fieldset");
            try {
                return !!c(a)
            } catch (a) {
                return !1
            } finally {
                a.parentNode && a.parentNode.removeChild(a),
                a = null
            }
        }
        function O(d, e) {
            for (var b = d.split("|"), c = b.length; c--; )
                a.attrHandle[b[c]] = e
        }
        function ah(b, c) {
            var a = c && b
              , d = a && b.nodeType === 1 && c.nodeType === 1 && b.sourceIndex - c.sourceIndex;
            if (d)
                return d;
            if (a)
                while (a = a.nextSibling)
                    if (a === c)
                        return -1;
            return b ? 1 : -1
        }
        function an(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return c === "input" && b.type === a
            }
        }
        function ao(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return (c === "input" || c === "button") && b.type === a
            }
        }
        function ag(a) {
            return function(b) {
                return "form"in b ? b.parentNode && b.disabled === !1 ? "label"in b ? "label"in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ap(b) === a : b.disabled === a : "label"in b && b.disabled === a
            }
        }
        function w(a) {
            return l(function(b) {
                return b = +b,
                l(function(c, g) {
                    for (var d, e = a([], c.length, b), f = e.length; f--; )
                        c[d = e[f]] && (c[d] = !(g[d] = c[d]))
                })
            })
        }
        function T(a) {
            return a && typeof a.getElementsByTagName != "undefined" && a
        }
        e = d.support = {},
        Y = d.isXML = function(a) {
            var c = a.namespaceURI
              , b = (a.ownerDocument || a).documentElement;
            return !aj.test(c || b && b.nodeName || "HTML")
        }
        ,
        p = d.setDocument = function(m) {
            var p, d, l = m ? m.ownerDocument || m : k;
            return l == b || l.nodeType !== 9 || !l.documentElement ? b : (b = l,
            h = b.documentElement,
            i = !Y(b),
            k != b && (d = b.defaultView) && d.top !== d && (d.addEventListener ? d.addEventListener("unload", af, !1) : d.attachEvent && d.attachEvent("onunload", af)),
            e.scope = j(function(a) {
                return h.appendChild(a).appendChild(b.createElement("div")),
                typeof a.querySelectorAll != "undefined" && !a.querySelectorAll(":scope fieldset div").length
            }),
            e.attributes = j(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            e.getElementsByTagName = j(function(a) {
                return a.appendChild(b.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            e.getElementsByClassName = B.test(b.getElementsByClassName),
            e.getById = j(function(a) {
                return h.appendChild(a).id = f,
                !b.getElementsByName || !b.getElementsByName(f).length
            }),
            e.getById ? (a.filter.ID = function(a) {
                var b = a.replace(o, n);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ,
            a.find.ID = function(c, a) {
                if (typeof a.getElementById != "undefined" && i) {
                    var b = a.getElementById(c);
                    return b ? [b] : []
                }
            }
            ) : (a.filter.ID = function(a) {
                var b = a.replace(o, n);
                return function(a) {
                    var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ,
            a.find.ID = function(c, d) {
                if (typeof d.getElementById != "undefined" && i) {
                    var a, e, f, b = d.getElementById(c);
                    if (b) {
                        if (a = b.getAttributeNode("id"),
                        a && a.value === c)
                            return [b];
                        for (f = d.getElementsByName(c),
                        e = 0; b = f[e++]; )
                            if (a = b.getAttributeNode("id"),
                            a && a.value === c)
                                return [b]
                    }
                    return []
                }
            }
            ),
            a.find.TAG = e.getElementsByTagName ? function(b, a) {
                if (typeof a.getElementsByTagName != "undefined")
                    return a.getElementsByTagName(b);
                if (e.qsa)
                    return a.querySelectorAll(b)
            }
            : function(b, e) {
                var a, c = [], f = 0, d = e.getElementsByTagName(b);
                if (b === "*") {
                    while (a = d[f++])
                        a.nodeType === 1 && c.push(a);
                    return c
                }
                return d
            }
            ,
            a.find.CLASS = e.getElementsByClassName && function(b, a) {
                if (typeof a.getElementsByClassName != "undefined" && i)
                    return a.getElementsByClassName(b)
            }
            ,
            u = [],
            g = [],
            (e.qsa = B.test(b.querySelectorAll)) && (j(function(a) {
                var d;
                h.appendChild(a).innerHTML = "<a id='" + f + "'></a>" + "<select id='" + f + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>",
                a.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + c + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || g.push("\\[" + c + "*(?:value|" + N + ")"),
                a.querySelectorAll("[id~=" + f + "-]").length || g.push("~="),
                d = b.createElement("input"),
                d.setAttribute("name", ""),
                a.appendChild(d),
                a.querySelectorAll("[name='']").length || g.push("\\[" + c + "*name" + c + "*=" + c + "*(?:''|\"\")"),
                a.querySelectorAll(":checked").length || g.push(":checked"),
                a.querySelectorAll("a#" + f + "+*").length || g.push(".#.+[+~]"),
                a.querySelectorAll("\\"),
                g.push("[\\r\\n\\f]")
            }),
            j(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var d = b.createElement("input");
                d.setAttribute("type", "hidden"),
                a.appendChild(d).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && g.push("name" + c + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length !== 2 && g.push(":enabled", ":disabled"),
                h.appendChild(a).disabled = !0,
                a.querySelectorAll(":disabled").length !== 2 && g.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                g.push(",.*:")
            })),
            (e.matchesSelector = B.test(C = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && j(function(a) {
                e.disconnectedMatch = C.call(a, "*"),
                C.call(a, "[s!='']:x"),
                u.push("!=", W)
            }),
            g = g.length && new RegExp(g.join("|")),
            u = u.length && new RegExp(u.join("|")),
            p = B.test(h.compareDocumentPosition),
            A = p || B.test(h.contains) ? function(a, c) {
                var d = a.nodeType === 9 ? a.documentElement : a
                  , b = c && c.parentNode;
                return a === b || !!(b && b.nodeType === 1 && (d.contains ? d.contains(b) : a.compareDocumentPosition && a.compareDocumentPosition(b) & 16))
            }
            : function(b, a) {
                if (a)
                    while (a = a.parentNode)
                        if (a === b)
                            return !0;
                return !1
            }
            ,
            V = p ? function(a, c) {
                if (a === c)
                    return y = !0,
                    0;
                var d = !a.compareDocumentPosition - !c.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) == (c.ownerDocument || c) ? a.compareDocumentPosition(c) : 1,
                d & 1 || !e.sortDetached && c.compareDocumentPosition(a) === d) ? a == b || a.ownerDocument == k && A(k, a) ? -1 : c == b || c.ownerDocument == k && A(k, c) ? 1 : q ? v(q, a) - v(q, c) : 0 : d & 4 ? -1 : 1
            }
            : function(d, e) {
                if (d === e)
                    return y = !0,
                    0;
                var a, c = 0, h = d.parentNode, i = e.parentNode, f = [d], g = [e];
                if (!h || !i)
                    return d == b ? -1 : e == b ? 1 : h ? -1 : i ? 1 : q ? v(q, d) - v(q, e) : 0;
                if (h === i)
                    return ah(d, e);
                for (a = d; a = a.parentNode; )
                    f.unshift(a);
                for (a = e; a = a.parentNode; )
                    g.unshift(a);
                while (f[c] === g[c])
                    c++;
                return c ? ah(f[c], g[c]) : f[c] == k ? -1 : g[c] == k ? 1 : 0
            }
            ,
            b)
        }
        ,
        d.matches = function(a, b) {
            return d(a, null, null, b)
        }
        ,
        d.matchesSelector = function(c, a) {
            if (p(c),
            e.matchesSelector && i && !F[a + " "] && (!u || !u.test(a)) && (!g || !g.test(a)))
                try {
                    var f = C.call(c, a);
                    if (f || e.disconnectedMatch || c.document && c.document.nodeType !== 11)
                        return f
                } catch (b) {
                    F(a, !0)
                }
            return d(a, b, null, [c]).length > 0
        }
        ,
        d.contains = function(a, c) {
            return (a.ownerDocument || a) != b && p(a),
            A(a, c)
        }
        ,
        d.attr = function(c, d) {
            (c.ownerDocument || c) != b && p(c);
            var g = a.attrHandle[d.toLowerCase()]
              , f = g && ar.call(a.attrHandle, d.toLowerCase()) ? g(c, d, !i) : void 0;
            return f !== void 0 ? f : e.attributes || !i ? c.getAttribute(d) : (f = c.getAttributeNode(d)) && f.specified ? f.value : null
        }
        ,
        d.escape = function(a) {
            return (a + "").replace(ad, ae)
        }
        ,
        d.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        d.uniqueSort = function(a) {
            var d, f = [], b = 0, c = 0;
            if (y = !e.detectDuplicates,
            q = !e.sortStable && a.slice(0),
            a.sort(V),
            y) {
                while (d = a[c++])
                    d === a[c] && (b = f.push(c));
                while (b--)
                    a.splice(f[b], 1)
            }
            return q = null,
            a
        }
        ,
        D = d.getText = function(a) {
            var d, c = "", e = 0, b = a.nodeType;
            if (b) {
                if (b === 1 || b === 9 || b === 11) {
                    if (typeof a.textContent == "string")
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += D(a)
                } else if (b === 3 || b === 4)
                    return a.nodeValue
            } else
                while (d = a[e++])
                    c += D(d);
            return c
        }
        ,
        a = d.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: K,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(o, n),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(o, n),
                    a[2] === "~=" && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    a[1].slice(0, 3) === "nth" ? (a[3] || d.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * (a[3] === "even" || a[3] === "odd")),
                    a[5] = +(a[7] + a[8] || a[3] === "odd")) : a[3] && d.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var c, b = !a[6] && a[2];
                    return K.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : b && au.test(b) && (c = z(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (a[0] = a[0].slice(0, c),
                    a[2] = b.slice(0, c)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(o, n).toLowerCase();
                    return a === "*" ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = _[a + " "];
                    return b || (b = new RegExp("(^|" + c + ")" + a + "(" + c + "|$)")) && _(a, function(a) {
                        return b.test(typeof a.className == "string" && a.className || typeof a.getAttribute != "undefined" && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(c, b, a) {
                    return function(f) {
                        var e = d.attr(f, c);
                        return e == null ? b === "!=" : !b || (e += "",
                        b === "=" ? e === a : b === "!=" ? e !== a : b === "^=" ? a && e.indexOf(a) === 0 : b === "*=" ? a && e.indexOf(a) > -1 : b === "$=" ? a && e.slice(-a.length) === a : b === "~=" ? (" " + e.replace(ak, " ") + " ").indexOf(a) > -1 : b === "|=" && (e === a || e.slice(0, a.length + 1) === a + "-"))
                    }
                },
                CHILD: function(a, h, i, c, e) {
                    var g = a.slice(0, 3) !== "nth"
                      , d = a.slice(-4) !== "last"
                      , b = h === "of-type";
                    return c === 1 && e === 0 ? function(a) {
                        return !!a.parentNode
                    }
                    : function(o, v, u) {
                        var l, n, k, h, j, p, q = g !== d ? "nextSibling" : "previousSibling", r = o.parentNode, t = b && o.nodeName.toLowerCase(), s = !u && !b, i = !1;
                        if (r) {
                            if (g) {
                                while (q) {
                                    for (h = o; h = h[q]; )
                                        if (b ? h.nodeName.toLowerCase() === t : h.nodeType === 1)
                                            return !1;
                                    p = q = a === "only" && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [d ? r.firstChild : r.lastChild],
                            d && s) {
                                for (h = r,
                                k = h[f] || (h[f] = {}),
                                n = k[h.uniqueID] || (k[h.uniqueID] = {}),
                                l = n[a] || [],
                                j = l[0] === m && l[1],
                                i = j && l[2],
                                h = j && r.childNodes[j]; h = ++j && h && h[q] || (i = j = 0) || p.pop(); )
                                    if (h.nodeType === 1 && ++i && h === o) {
                                        n[a] = [m, j, i];
                                        break
                                    }
                            } else if (s && (h = o,
                            k = h[f] || (h[f] = {}),
                            n = k[h.uniqueID] || (k[h.uniqueID] = {}),
                            l = n[a] || [],
                            j = l[0] === m && l[1],
                            i = j),
                            i === !1)
                                while (h = ++j && h && h[q] || (i = j = 0) || p.pop())
                                    if ((b ? h.nodeName.toLowerCase() === t : h.nodeType === 1) && ++i)
                                        if (s && (k = h[f] || (h[f] = {}),
                                        n = k[h.uniqueID] || (k[h.uniqueID] = {}),
                                        n[a] = [m, i]),
                                        h === o)
                                            break;
                            return i -= e,
                            i === c || i % c === 0 && i / c >= 0
                        }
                    }
                },
                PSEUDO: function(b, e) {
                    var g, c = a.pseudos[b] || a.setFilters[b.toLowerCase()] || d.error("unsupported pseudo: " + b);
                    return c[f] ? c(e) : c.length > 1 ? (g = [b, b, "", e],
                    a.setFilters.hasOwnProperty(b.toLowerCase()) ? l(function(a, g) {
                        for (var b, d = c(a, e), f = d.length; f--; )
                            b = v(a, d[f]),
                            a[b] = !(g[b] = d[f])
                    }) : function(a) {
                        return c(a, 0, g)
                    }
                    ) : c
                }
            },
            pseudos: {
                not: l(function(d) {
                    var a = []
                      , c = []
                      , b = R(d.replace(E, "$1"));
                    return b[f] ? l(function(c, e, h, f) {
                        for (var d, g = b(c, null, f, []), a = c.length; a--; )
                            (d = g[a]) && (c[a] = !(e[a] = d))
                    }) : function(d, f, e) {
                        return a[0] = d,
                        b(a, null, e, c),
                        a[0] = null,
                        !c.pop()
                    }
                }),
                has: l(function(a) {
                    return function(b) {
                        return d(a, b).length > 0
                    }
                }),
                contains: l(function(a) {
                    return a = a.replace(o, n),
                    function(b) {
                        return (b.textContent || D(b)).indexOf(a) > -1
                    }
                }),
                lang: l(function(a) {
                    return aw.test(a || "") || d.error("unsupported lang: " + a),
                    a = a.replace(o, n).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = i ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || c.indexOf(a + "-") === 0;
                        while ((b = b.parentNode) && b.nodeType === 1)return !1
                    }
                }),
                target: function(b) {
                    var a = M.location && M.location.hash;
                    return a && a.slice(1) === b.id
                },
                root: function(a) {
                    return a === h
                },
                focus: function(a) {
                    return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: ag(!1),
                disabled: ag(!0),
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && !!a.checked || b === "option" && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(b) {
                    return !a.pseudos.empty(b)
                },
                header: function(a) {
                    return az.test(a.nodeName)
                },
                input: function(a) {
                    return aA.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && a.type === "button" || b === "button"
                },
                text: function(a) {
                    var b;
                    return a.nodeName.toLowerCase() === "input" && a.type === "text" && ((b = a.getAttribute("type")) == null || b.toLowerCase() === "text")
                },
                first: w(function() {
                    return [0]
                }),
                last: w(function(b, a) {
                    return [a - 1]
                }),
                eq: w(function(c, b, a) {
                    return [a < 0 ? a + b : a]
                }),
                even: w(function(b, c) {
                    for (var a = 0; a < c; a += 2)
                        b.push(a);
                    return b
                }),
                odd: w(function(b, c) {
                    for (var a = 1; a < c; a += 2)
                        b.push(a);
                    return b
                }),
                lt: w(function(c, b, a) {
                    for (var d = a < 0 ? a + b : a > b ? b : a; --d >= 0; )
                        c.push(d);
                    return c
                }),
                gt: w(function(b, c, a) {
                    for (var d = a < 0 ? a + c : a; ++d < c; )
                        b.push(d);
                    return b
                })
            }
        },
        a.pseudos.nth = a.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            a.pseudos[x] = an(x);
        for (x in {
            submit: !0,
            reset: !0
        })
            a.pseudos[x] = ao(x);
        function ab() {}
        ab.prototype = a.filters = a.pseudos,
        a.setFilters = new ab,
        z = d.tokenize = function(g, k) {
            var e, c, i, f, b, h, j, l = $[g + " "];
            if (l)
                return k ? 0 : l.slice(0);
            for (b = g,
            h = [],
            j = a.preFilter; b; ) {
                (!e || (c = am.exec(b))) && (c && (b = b.slice(c[0].length) || b),
                h.push(i = [])),
                e = !1,
                (c = ac.exec(b)) && (e = c.shift(),
                i.push({
                    value: e,
                    type: c[0].replace(E, " ")
                }),
                b = b.slice(e.length));
                for (f in a.filter)
                    (c = K[f].exec(b)) && (!j[f] || (c = j[f](c))) && (e = c.shift(),
                    i.push({
                        value: e,
                        type: f,
                        matches: c
                    }),
                    b = b.slice(e.length));
                if (!e)
                    break
            }
            return k ? b.length : b ? d.error(g) : $(g, h).slice(0)
        }
        ;
        function H(b) {
            for (var a = 0, d = b.length, c = ""; a < d; a++)
                c += b[a].value;
            return c
        }
        function I(b, c, i) {
            var a = c.dir
              , d = c.next
              , e = d || a
              , g = i && e === "parentNode"
              , h = ay++;
            return c.first ? function(c, d, e) {
                while (c = c[a])
                    if (c.nodeType === 1 || g)
                        return b(c, d, e);
                return !1
            }
            : function(c, o, j) {
                var i, k, l, n = [m, h];
                if (j) {
                    while (c = c[a])
                        if (c.nodeType === 1 || g)
                            if (b(c, o, j))
                                return !0
                } else
                    while (c = c[a])
                        if (c.nodeType === 1 || g)
                            if (l = c[f] || (c[f] = {}),
                            k = l[c.uniqueID] || (l[c.uniqueID] = {}),
                            d && d === c.nodeName.toLowerCase())
                                c = c[a] || c;
                            else if ((i = k[e]) && i[0] === m && i[1] === h)
                                return n[2] = i[2];
                            else if (k[e] = n,
                            n[2] = b(c, o, j))
                                return !0;
                return !1
            }
        }
        function Q(a) {
            return a.length > 1 ? function(c, d, e) {
                for (var b = a.length; b--; )
                    if (!a[b](c, d, e))
                        return !1;
                return !0
            }
            : a[0]
        }
        function ax(e, b, c) {
            for (var a = 0, f = b.length; a < f; a++)
                d(e, b[a], c);
            return c
        }
        function L(c, f, d, g, h) {
            for (var b, e = [], a = 0, i = c.length, j = f != null; a < i; a++)
                (b = c[a]) && (!d || d(b, g, h)) && (e.push(b),
                j && f.push(a));
            return e
        }
        function P(c, e, d, b, a, g) {
            return b && !b[f] && (b = P(b)),
            a && !a[f] && (a = P(a, g)),
            l(function(l, k, j, m) {
                var h, g, i, p = [], o = [], q = k.length, s = l || ax(e || "*", j.nodeType ? [j] : j, []), n = c && (l || !e) ? L(s, p, c, j, m) : s, f = d ? a || (l ? c : q || b) ? [] : k : n;
                if (d && d(n, f, j, m),
                b)
                    for (h = L(f, o),
                    b(h, [], j, m),
                    g = h.length; g--; )
                        (i = h[g]) && (f[o[g]] = !(n[o[g]] = i));
                if (l) {
                    if (a || c) {
                        if (a) {
                            for (h = [],
                            g = f.length; g--; )
                                (i = f[g]) && h.push(n[g] = i);
                            a(null, f = [], h, m)
                        }
                        for (g = f.length; g--; )
                            (i = f[g]) && (h = a ? v(l, i) : p[g]) > -1 && (l[h] = !(k[h] = i))
                    }
                } else
                    f = L(f === k ? f.splice(q, f.length) : f),
                    a ? a(null, k, f, m) : r.apply(k, f)
            })
        }
        function S(b) {
            for (var h, e, d, i = b.length, j = a.relative[b[0].type], k = j || a.relative[" "], c = j ? 1 : 0, l = I(function(a) {
                return a === h
            }, k, !0), m = I(function(a) {
                return v(h, a) > -1
            }, k, !0), g = [function(c, a, b) {
                var d = !j && (b || a !== G) || ((h = a).nodeType ? l(c, a, b) : m(c, a, b));
                return h = null,
                d
            }
            ]; c < i; c++)
                if (e = a.relative[b[c].type])
                    g = [I(Q(g), e)];
                else {
                    if (e = a.filter[b[c].type].apply(null, b[c].matches),
                    e[f]) {
                        for (d = ++c; d < i; d++)
                            if (a.relative[b[d].type])
                                break;
                        return P(c > 1 && Q(g), c > 1 && H(b.slice(0, c - 1).concat({
                            value: b[c - 2].type === " " ? "*" : ""
                        })).replace(E, "$1"), e, c < d && S(b.slice(c, d)), d < i && S(b = b.slice(d)), d < i && H(b))
                    }
                    g.push(e)
                }
            return Q(g)
        }
        function aB(f, c) {
            var e = c.length > 0
              , g = f.length > 0
              , h = function(s, o, w, u, l) {
                var j, t, n, q = 0, h = "0", v = s && [], k = [], x = G, y = s || g && a.find.TAG("*", l), z = m += x == null ? 1 : Math.random() || .1, A = y.length;
                for (l && (G = o == b || o || l); h !== A && (j = y[h]) != null; h++) {
                    if (g && j) {
                        for (t = 0,
                        !o && j.ownerDocument != b && (p(j),
                        w = !i); n = f[t++]; )
                            if (n(j, o || b, w)) {
                                u.push(j);
                                break
                            }
                        l && (m = z)
                    }
                    e && ((j = !n && j) && q--,
                    s && v.push(j))
                }
                if (q += h,
                e && h !== q) {
                    for (t = 0; n = c[t++]; )
                        n(v, k, o, w);
                    if (s) {
                        if (q > 0)
                            while (h--)
                                v[h] || k[h] || (k[h] = aq.call(u));
                        k = L(k)
                    }
                    r.apply(u, k),
                    l && !s && k.length > 0 && q + c.length > 1 && d.uniqueSort(u)
                }
                return l && (m = z,
                G = x),
                v
            };
            return e ? l(h) : h
        }
        return R = d.compile = function(b, c) {
            var d, e = [], g = [], a = aa[b + " "];
            if (!a) {
                for (c || (c = z(b)),
                d = c.length; d--; )
                    a = S(c[d]),
                    a[f] ? e.push(a) : g.push(a);
                a = aa(b, aB(g, e)),
                a.selector = b
            }
            return a
        }
        ,
        Z = d.select = function(c, b, e, f) {
            var h, d, g, l, m, k = typeof c == "function" && c, j = !f && z(c = k.selector || c);
            if (e = e || [],
            j.length === 1) {
                if (d = j[0] = j[0].slice(0),
                d.length > 2 && (g = d[0]).type === "ID" && b.nodeType === 9 && i && a.relative[d[1].type]) {
                    if (b = (a.find.ID(g.matches[0].replace(o, n), b) || [])[0],
                    !b)
                        return e;
                    k && (b = b.parentNode),
                    c = c.slice(d.shift().value.length)
                }
                for (h = K.needsContext.test(c) ? 0 : d.length; h--; ) {
                    if (g = d[h],
                    a.relative[l = g.type])
                        break;
                    if (m = a.find[l])
                        if (f = m(g.matches[0].replace(o, n), U.test(d[0].type) && T(b.parentNode) || b)) {
                            if (d.splice(h, 1),
                            c = f.length && H(d),
                            !c)
                                return r.apply(e, f),
                                e;
                            break
                        }
                }
            }
            return (k || R(c, j))(f, b, !i, e, !b || U.test(c) && T(b.parentNode) || b),
            e
        }
        ,
        e.sortStable = f.split("").sort(V).join("") === f,
        e.detectDuplicates = !!y,
        p(),
        e.sortDetached = j(function(a) {
            return a.compareDocumentPosition(b.createElement("fieldset")) & 1
        }),
        j(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            a.firstChild.getAttribute("href") === "#"
        }) || O("type|href|height|width", function(b, a, c) {
            if (!c)
                return b.getAttribute(a, a.toLowerCase() === "type" ? 1 : 2)
        }),
        (!e.attributes || !j(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            a.firstChild.getAttribute("value") === ""
        })) && O("value", function(a, c, b) {
            if (!b && a.nodeName.toLowerCase() === "input")
                return a.defaultValue
        }),
        j(function(a) {
            return a.getAttribute("disabled") == null
        }) || O(N, function(c, a, d) {
            var b;
            if (!d)
                return c[a] === !0 ? a.toLowerCase() : (b = c.getAttributeNode(a)) && b.specified ? b.value : null
        }),
        d
    }(d),
    a.find = s,
    a.expr = s.selectors,
    a.expr[":"] = a.expr.pseudos,
    a.uniqueSort = a.unique = s.uniqueSort,
    a.text = s.getText,
    a.isXMLDoc = s.isXML,
    a.contains = s.contains,
    a.escapeSelector = s.escape,
    y = function(b, e, c) {
        for (var d = [], f = c !== void 0; (b = b[e]) && b.nodeType !== 9; )
            if (b.nodeType === 1) {
                if (f && a(b).is(c))
                    break;
                d.push(b)
            }
        return d
    }
    ,
    aQ = function(a, c) {
        for (var b = []; a; a = a.nextSibling)
            a.nodeType === 1 && a !== c && b.push(a);
        return b
    }
    ,
    aO = a.expr.match.needsContext;
    function k(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }
    aN = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function Y(d, b, e) {
        return c(b) ? a.grep(d, function(a, c) {
            return !!b.call(a, c, a) !== e
        }) : b.nodeType ? a.grep(d, function(a) {
            return a === b !== e
        }) : typeof b != "string" ? a.grep(d, function(a) {
            return S.call(b, a) > -1 !== e
        }) : a.filter(b, d, e)
    }
    a.filter = function(b, c, e) {
        var d = c[0];
        return e && (b = ":not(" + b + ")"),
        c.length === 1 && d.nodeType === 1 ? a.find.matchesSelector(d, b) ? [d] : [] : a.find.matches(b, a.grep(c, function(a) {
            return a.nodeType === 1
        }))
    }
    ,
    a.fn.extend({
        find: function(d) {
            var b, c, e = this.length, f = this;
            if (typeof d != "string")
                return this.pushStack(a(d).filter(function() {
                    for (b = 0; b < e; b++)
                        if (a.contains(f[b], this))
                            return !0
                }));
            c = this.pushStack([]);
            for (b = 0; b < e; b++)
                a.find(d, f[b], c);
            return e > 1 ? a.uniqueSort(c) : c
        },
        filter: function(a) {
            return this.pushStack(Y(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(Y(this, a || [], !0))
        },
        is: function(b) {
            return !!Y(this, typeof b == "string" && aO.test(b) ? a(b) : b || [], !1).length
        }
    }),
    bX = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    bW = a.fn.init = function(d, b, g) {
        var f, h;
        if (!d)
            return this;
        if (g = g || aL,
        typeof d == "string")
            if (d[0] === "<" && d[d.length - 1] === ">" && d.length >= 3 ? f = [null, d, null] : f = bX.exec(d),
            f && (f[1] || !b)) {
                if (f[1]) {
                    if (b = b instanceof a ? b[0] : b,
                    a.merge(this, a.parseHTML(f[1], b && b.nodeType ? b.ownerDocument || b : e, !0)),
                    aN.test(f[1]) && a.isPlainObject(b))
                        for (f in b)
                            c(this[f]) ? this[f](b[f]) : this.attr(f, b[f]);
                    return this
                }
                return h = e.getElementById(f[2]),
                h && (this[0] = h,
                this.length = 1),
                this
            } else
                return !b || b.jquery ? (b || g).find(d) : this.constructor(b).find(d);
        else if (d.nodeType)
            return this[0] = d,
            this.length = 1,
            this;
        else if (c(d))
            return g.ready !== void 0 ? g.ready(d) : d(a);
        return a.makeArray(d, this)
    }
    ,
    bW.prototype = a.fn,
    aL = a(e),
    bV = /^(?:parents|prev(?:Until|All))/,
    bU = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    },
    a.fn.extend({
        has: function(c) {
            var b = a(c, this)
              , d = b.length;
            return this.filter(function() {
                for (var c = 0; c < d; c++)
                    if (a.contains(this, b[c]))
                        return !0
            })
        },
        closest: function(c, g) {
            var b, e = 0, h = this.length, d = [], f = typeof c != "string" && a(c);
            if (!aO.test(c))
                for (; e < h; e++)
                    for (b = this[e]; b && b !== g; b = b.parentNode)
                        if (b.nodeType < 11 && (f ? f.index(b) > -1 : b.nodeType === 1 && a.find.matchesSelector(b, c))) {
                            d.push(b);
                            break
                        }
            return this.pushStack(d.length > 1 ? a.uniqueSort(d) : d)
        },
        index: function(b) {
            return b ? typeof b == "string" ? S.call(a(b), this[0]) : S.call(this, b.jquery ? b[0] : b) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(b, c) {
            return this.pushStack(a.uniqueSort(a.merge(this.get(), a(b, c))))
        },
        addBack: function(a) {
            return this.add(a == null ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function aF(a, b) {
        while ((a = a[b]) && a.nodeType !== 1)
            ;
        return a
    }
    a.each({
        parent: function(b) {
            var a = b.parentNode;
            return a && a.nodeType !== 11 ? a : null
        },
        parents: function(a) {
            return y(a, "parentNode")
        },
        parentsUntil: function(a, c, b) {
            return y(a, "parentNode", b)
        },
        next: function(a) {
            return aF(a, "nextSibling")
        },
        prev: function(a) {
            return aF(a, "previousSibling")
        },
        nextAll: function(a) {
            return y(a, "nextSibling")
        },
        prevAll: function(a) {
            return y(a, "previousSibling")
        },
        nextUntil: function(a, c, b) {
            return y(a, "nextSibling", b)
        },
        prevUntil: function(a, c, b) {
            return y(a, "previousSibling", b)
        },
        siblings: function(a) {
            return aQ((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return aQ(a.firstChild)
        },
        contents: function(b) {
            return b.contentDocument != null && bb(b.contentDocument) ? b.contentDocument : (k(b, "template") && (b = b.content || b),
            a.merge([], b.childNodes))
        }
    }, function(b, c) {
        a.fn[b] = function(f, e) {
            var d = a.map(this, c, f);
            return b.slice(-5) !== "Until" && (e = f),
            e && typeof e == "string" && (d = a.filter(e, d)),
            this.length > 1 && (bU[b] || a.uniqueSort(d),
            bV.test(b) && d.reverse()),
            this.pushStack(d)
        }
    }),
    m = /[^\x20\t\r\n\f]+/g;
    function bT(c) {
        var b = {};
        return a.each(c.match(m) || [], function(c, a) {
            b[a] = !0
        }),
        b
    }
    a.Callbacks = function(e) {
        e = typeof e == "string" ? bT(e) : a.extend({}, e);
        var i, d, l, g, b = [], h = [], f = -1, k = function() {
            for (g = g || e.once,
            l = i = !0; h.length; f = -1)
                for (d = h.shift(); ++f < b.length; )
                    b[f].apply(d[0], d[1]) === !1 && e.stopOnFalse && (f = b.length,
                    d = !1);
            e.memory || (d = !1),
            i = !1,
            g && (d ? b = [] : b = "")
        }, j = {
            add: function() {
                return b && (d && !i && (f = b.length - 1,
                h.push(d)),
                function d(f) {
                    a.each(f, function(f, a) {
                        c(a) ? (!e.unique || !j.has(a)) && b.push(a) : a && a.length && E(a) !== "string" && d(a)
                    })
                }(arguments),
                d && !i && k()),
                this
            },
            remove: function() {
                return a.each(arguments, function(e, d) {
                    for (var c; (c = a.inArray(d, b, c)) > -1; )
                        b.splice(c, 1),
                        c <= f && f--
                }),
                this
            },
            has: function(c) {
                return c ? a.inArray(c, b) > -1 : b.length > 0
            },
            empty: function() {
                return b && (b = []),
                this
            },
            disable: function() {
                return g = h = [],
                b = d = "",
                this
            },
            disabled: function() {
                return !b
            },
            lock: function() {
                return g = h = [],
                !d && !i && (b = d = ""),
                this
            },
            locked: function() {
                return !!g
            },
            fireWith: function(b, a) {
                return g || (a = a || [],
                a = [b, a.slice ? a.slice() : a],
                h.push(a),
                i || k()),
                this
            },
            fire: function() {
                return j.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!l
            }
        };
        return j
    }
    ;
    function F(a) {
        return a
    }
    function X(a) {
        throw a
    }
    function aC(a, d, e, f) {
        var b;
        try {
            a && c(b = a.promise) ? b.call(a).done(d).fail(e) : a && c(b = a.then) ? b.call(a, d, e) : d.apply(void 0, [a].slice(f))
        } catch (a) {
            e.apply(void 0, [a])
        }
    }
    a.extend({
        Deferred: function(g) {
            var e = [["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory"), 2], ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), 1, "rejected"]]
              , h = "pending"
              , f = {
                state: function() {
                    return h
                },
                always: function() {
                    return b.done(arguments).fail(arguments),
                    this
                },
                catch: function(a) {
                    return f.then(null, a)
                },
                pipe: function() {
                    var d = arguments;
                    return a.Deferred(function(f) {
                        a.each(e, function(g, a) {
                            var e = c(d[a[4]]) && d[a[4]];
                            b[a[1]](function() {
                                var b = e && e.apply(this, arguments);
                                b && c(b.promise) ? b.promise().progress(f.notify).done(f.resolve).fail(f.reject) : f[a[0] + "With"](this, e ? [b] : arguments)
                            })
                        }),
                        d = null
                    }).promise()
                },
                then: function(g, h, i) {
                    var b = 0;
                    function f(h, e, i, g) {
                        return function() {
                            var j = this
                              , k = arguments
                              , m = function() {
                                var a, d;
                                if (h < b)
                                    return;
                                if (a = i.apply(j, k),
                                a === e.promise())
                                    throw new TypeError("Thenable self-resolution");
                                d = a && (typeof a == "object" || typeof a == "function") && a.then,
                                c(d) ? g ? d.call(a, f(b, e, F, g), f(b, e, X, g)) : (b++,
                                d.call(a, f(b, e, F, g), f(b, e, X, g), f(b, e, F, e.notifyWith))) : (i !== F && (j = void 0,
                                k = [a]),
                                (g || e.resolveWith)(j, k))
                            }
                              , l = g ? m : function() {
                                try {
                                    m()
                                } catch (c) {
                                    a.Deferred.exceptionHook && a.Deferred.exceptionHook(c, l.stackTrace),
                                    h + 1 >= b && (i !== X && (j = void 0,
                                    k = [c]),
                                    e.rejectWith(j, k))
                                }
                            }
                            ;
                            h ? l() : (a.Deferred.getStackHook && (l.stackTrace = a.Deferred.getStackHook()),
                            d.setTimeout(l))
                        }
                    }
                    return a.Deferred(function(a) {
                        e[0][3].add(f(0, a, c(i) ? i : F, a.notifyWith)),
                        e[1][3].add(f(0, a, c(g) ? g : F)),
                        e[2][3].add(f(0, a, c(h) ? h : X))
                    }).promise()
                },
                promise: function(b) {
                    return b != null ? a.extend(b, f) : f
                }
            }
              , b = {};
            return a.each(e, function(d, a) {
                var c = a[2]
                  , g = a[5];
                f[a[1]] = c.add,
                g && c.add(function() {
                    h = g
                }, e[3 - d][2].disable, e[3 - d][3].disable, e[0][2].lock, e[0][3].lock),
                c.add(a[3].fire),
                b[a[0]] = function() {
                    return b[a[0] + "With"](this === b ? void 0 : this, arguments),
                    this
                }
                ,
                b[a[0] + "With"] = c.fireWith
            }),
            f.promise(b),
            g && g.call(b, b),
            b
        },
        when: function(i) {
            var f = arguments.length
              , b = f
              , h = Array(b)
              , e = r.call(arguments)
              , d = a.Deferred()
              , g = function(a) {
                return function(b) {
                    h[a] = this,
                    e[a] = arguments.length > 1 ? r.call(arguments) : b,
                    --f || d.resolveWith(h, e)
                }
            };
            if (f <= 1)
                if (aC(i, d.done(g(b)).resolve, d.reject, !f),
                d.state() === "pending" || c(e[b] && e[b].then))
                    return d.then();
            while (b--)
                aC(e[b], g(b), d.reject);
            return d.promise()
        }
    }),
    bS = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
    a.Deferred.exceptionHook = function(a, b) {
        d.console && d.console.warn && a && bS.test(a.name) && d.console.warn("jQuery.Deferred exception: " + a.message, a.stack, b)
    }
    ,
    a.readyException = function(a) {
        d.setTimeout(function() {
            throw a
        })
    }
    ,
    ab = a.Deferred(),
    a.fn.ready = function(b) {
        return ab.then(b).catch(function(b) {
            a.readyException(b)
        }),
        this
    }
    ,
    a.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(b) {
            if (b === !0 ? --a.readyWait : a.isReady)
                return;
            if (a.isReady = !0,
            b !== !0 && --a.readyWait > 0)
                return;
            ab.resolveWith(e, [a])
        }
    }),
    a.ready.then = ab.then;
    function R() {
        e.removeEventListener("DOMContentLoaded", R),
        d.removeEventListener("load", R),
        a.ready()
    }
    e.readyState === "complete" || e.readyState !== "loading" && !e.documentElement.doScroll ? d.setTimeout(a.ready) : (e.addEventListener("DOMContentLoaded", R),
    d.addEventListener("load", R)),
    q = function(d, b, f, g, j, k, h) {
        var e = 0
          , l = d.length
          , i = f == null;
        if (E(f) === "object") {
            j = !0;
            for (e in f)
                q(d, b, e, f[e], !0, k, h)
        } else if (g !== void 0)
            if (j = !0,
            c(g) || (h = !0),
            i && (h ? (b.call(d, g),
            b = null) : (i = b,
            b = function(b, d, c) {
                return i.call(a(b), c)
            }
            )),
            b)
                for (; e < l; e++)
                    b(d[e], f, h ? g : g.call(d[e], e, b(d[e], f)));
        return j ? d : i ? b.call(d) : l ? b(d[0], f) : k
    }
    ,
    bR = /^-ms-/,
    bM = /-([a-z])/g;
    function bJ(b, a) {
        return a.toUpperCase()
    }
    function n(a) {
        return a.replace(bR, "ms-").replace(bM, bJ)
    }
    N = function(a) {
        return a.nodeType === 1 || a.nodeType === 9 || !+a.nodeType
    }
    ;
    function M() {
        this.expando = a.expando + M.uid++
    }
    M.uid = 1,
    M.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {},
            N(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))),
            b
        },
        set: function(d, a, e) {
            var b, c = this.cache(d);
            if (typeof a == "string")
                c[n(a)] = e;
            else
                for (b in a)
                    c[n(b)] = a[b];
            return c
        },
        get: function(a, b) {
            return b === void 0 ? this.cache(a) : a[this.expando] && a[this.expando][n(b)]
        },
        access: function(c, a, b) {
            return a === void 0 || a && typeof a == "string" && b === void 0 ? this.get(c, a) : (this.set(c, a, b),
            b !== void 0 ? b : a)
        },
        remove: function(c, b) {
            var e, d = c[this.expando];
            if (d === void 0)
                return;
            if (b !== void 0)
                for (Array.isArray(b) ? b = b.map(n) : (b = n(b),
                b = b in d ? [b] : b.match(m) || []),
                e = b.length; e--; )
                    delete d[b[e]];
            (b === void 0 || a.isEmptyObject(d)) && (c.nodeType ? c[this.expando] = void 0 : delete c[this.expando])
        },
        hasData: function(c) {
            var b = c[this.expando];
            return b !== void 0 && !a.isEmptyObject(b)
        }
    },
    b = new M,
    i = new M,
    bG = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    bE = /[A-Z]/g;
    function bD(a) {
        return a === "true" || (a !== "false" && (a === "null" ? null : a === +a + "" ? +a : bG.test(a) ? JSON.parse(a) : a))
    }
    function ax(b, c, a) {
        var d;
        if (a === void 0 && b.nodeType === 1)
            if (d = "data-" + c.replace(bE, "-$&").toLowerCase(),
            a = b.getAttribute(d),
            typeof a == "string") {
                try {
                    a = bD(a)
                } catch (a) {}
                i.set(b, c, a)
            } else
                a = void 0;
        return a
    }
    a.extend({
        hasData: function(a) {
            return i.hasData(a) || b.hasData(a)
        },
        data: function(a, b, c) {
            return i.access(a, b, c)
        },
        removeData: function(a, b) {
            i.remove(a, b)
        },
        _data: function(a, c, d) {
            return b.access(a, c, d)
        },
        _removeData: function(a, c) {
            b.remove(a, c)
        }
    }),
    a.fn.extend({
        data: function(c, h) {
            var e, d, f, a = this[0], g = a && a.attributes;
            if (c === void 0) {
                if (this.length)
                    if (f = i.get(a),
                    a.nodeType === 1 && !b.get(a, "hasDataAttrs")) {
                        for (e = g.length; e--; )
                            g[e] && (d = g[e].name,
                            d.indexOf("data-") === 0 && (d = n(d.slice(5)),
                            ax(a, d, f[d])));
                        b.set(a, "hasDataAttrs", !0)
                    }
                return f
            }
            return typeof c == "object" ? this.each(function() {
                i.set(this, c)
            }) : q(this, function(d) {
                var b;
                if (a && d === void 0) {
                    if (b = i.get(a, c),
                    b !== void 0)
                        return b;
                    if (b = ax(a, c),
                    b !== void 0)
                        return b;
                    return
                }
                this.each(function() {
                    i.set(this, c, d)
                })
            }, null, h, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                i.remove(this, a)
            })
        }
    }),
    a.extend({
        queue: function(f, d, e) {
            var c;
            if (f)
                return d = (d || "fx") + "queue",
                c = b.get(f, d),
                e && (!c || Array.isArray(e) ? c = b.access(f, d, a.makeArray(e)) : c.push(e)),
                c || []
        },
        dequeue: function(c, b) {
            b = b || "fx";
            var d = a.queue(c, b)
              , g = d.length
              , e = d.shift()
              , f = a._queueHooks(c, b)
              , h = function() {
                a.dequeue(c, b)
            };
            e === "inprogress" && (e = d.shift(),
            g--),
            e && (b === "fx" && d.unshift("inprogress"),
            delete f.stop,
            e.call(c, h, f)),
            !g && f && f.empty.fire()
        },
        _queueHooks: function(c, e) {
            var d = e + "queueHooks";
            return b.get(c, d) || b.access(c, d, {
                empty: a.Callbacks("once memory").add(function() {
                    b.remove(c, [e + "queue", d])
                })
            })
        }
    }),
    a.fn.extend({
        queue: function(b, c) {
            var d = 2;
            return typeof b != "string" && (c = b,
            b = "fx",
            d--),
            arguments.length < d ? a.queue(this[0], b) : c === void 0 ? this : this.each(function() {
                var d = a.queue(this, b, c);
                a._queueHooks(this, b),
                b === "fx" && d[0] !== "inprogress" && a.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                a.dequeue(this, b)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(c, f) {
            var d, g = 1, h = a.Deferred(), e = this, i = this.length, j = function() {
                --g || h.resolveWith(e, [e])
            };
            for (typeof c != "string" && (f = c,
            c = void 0),
            c = c || "fx"; i--; )
                d = b.get(e[i], c + "queueHooks"),
                d && d.empty && (g++,
                d.empty.add(j));
            return j(),
            h.promise(f)
        }
    }),
    au = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    I = new RegExp("^(?:([+-])=|)(" + au + ")([a-z%]*)$","i"),
    p = ["Top", "Right", "Bottom", "Left"],
    v = e.documentElement,
    C = function(b) {
        return a.contains(b.ownerDocument, b)
    }
    ,
    bC = {
        composed: !0
    },
    v.getRootNode && (C = function(b) {
        return a.contains(b.ownerDocument, b) || b.getRootNode(bC) === b.ownerDocument
    }
    ),
    P = function(b, c) {
        return b = c || b,
        b.style.display === "none" || b.style.display === "" && C(b) && a.css(b, "display") === "none"
    }
    ;
    function at(h, e, c, g) {
        var j, i, k = 20, l = g ? function() {
            return g.cur()
        }
        : function() {
            return a.css(h, e, "")
        }
        , f = l(), d = c && c[3] || (a.cssNumber[e] ? "" : "px"), b = h.nodeType && (a.cssNumber[e] || d !== "px" && +f) && I.exec(a.css(h, e));
        if (b && b[3] !== d) {
            for (f = f / 2,
            d = d || b[3],
            b = +f || 1; k--; )
                a.style(h, e, b + d),
                (1 - i) * (1 - (i = l() / f || .5)) <= 0 && (k = 0),
                b = b / i;
            b = b * 2,
            a.style(h, e, b + d),
            c = c || []
        }
        return c && (b = +b || +f || 0,
        j = c[1] ? b + (c[1] + 1) * c[2] : +c[2],
        g && (g.unit = d,
        g.start = b,
        g.end = j)),
        j
    }
    ar = {};
    function bB(e) {
        var c, f = e.ownerDocument, d = e.nodeName, b = ar[d];
        return b || (c = f.body.appendChild(f.createElement(d)),
        b = a.css(c, "display"),
        c.parentNode.removeChild(c),
        b === "none" && (b = "block"),
        ar[d] = b,
        b)
    }
    function B(e, h) {
        for (var f, c, d = [], a = 0, g = e.length; a < g; a++) {
            if (c = e[a],
            !c.style)
                continue;
            f = c.style.display,
            h ? (f === "none" && (d[a] = b.get(c, "display") || null,
            d[a] || (c.style.display = "")),
            c.style.display === "" && P(c) && (d[a] = bB(c))) : f !== "none" && (d[a] = "none",
            b.set(c, "display", f))
        }
        for (a = 0; a < g; a++)
            d[a] != null && (e[a].style.display = d[a]);
        return e
    }
    a.fn.extend({
        show: function() {
            return B(this, !0)
        },
        hide: function() {
            return B(this)
        },
        toggle: function(b) {
            return typeof b == "boolean" ? b ? this.show() : this.hide() : this.each(function() {
                P(this) ? a(this).show() : a(this).hide()
            })
        }
    }),
    J = /^(?:checkbox|radio)$/i,
    ap = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    aq = /^$|^module$|\/(?:java|ecma)script/i,
    function() {
        var c = e.createDocumentFragment()
          , a = c.appendChild(e.createElement("div"))
          , b = e.createElement("input");
        b.setAttribute("type", "radio"),
        b.setAttribute("checked", "checked"),
        b.setAttribute("name", "t"),
        a.appendChild(b),
        f.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
        a.innerHTML = "<textarea>x</textarea>",
        f.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue,
        a.innerHTML = "<option></option>",
        f.option = !!a.lastChild
    }(),
    j = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    },
    j.tbody = j.tfoot = j.colgroup = j.caption = j.thead,
    j.th = j.td,
    f.option || (j.optgroup = j.option = [1, "<select multiple='multiple'>", "</select>"]);
    function g(b, c) {
        var d;
        return typeof b.getElementsByTagName != "undefined" ? d = b.getElementsByTagName(c || "*") : typeof b.querySelectorAll != "undefined" ? d = b.querySelectorAll(c || "*") : d = [],
        c === void 0 || c && k(b, c) ? a.merge([b], d) : d
    }
    function Z(c, d) {
        for (var a = 0, e = c.length; a < e; a++)
            b.set(c[a], "globalEval", !d || b.get(d[a], "globalEval"))
    }
    bA = /<|&#?\w+;/;
    function aw(l, k, q, p, o) {
        for (var b, c, n, i, m, f, e = k.createDocumentFragment(), h = [], d = 0, r = l.length; d < r; d++)
            if (b = l[d],
            b || b === 0)
                if (E(b) === "object")
                    a.merge(h, b.nodeType ? [b] : b);
                else if (bA.test(b)) {
                    for (c = c || e.appendChild(k.createElement("div")),
                    n = (ap.exec(b) || ["", ""])[1].toLowerCase(),
                    i = j[n] || j._default,
                    c.innerHTML = i[1] + a.htmlPrefilter(b) + i[2],
                    f = i[0]; f--; )
                        c = c.lastChild;
                    a.merge(h, c.childNodes),
                    c = e.firstChild,
                    c.textContent = ""
                } else
                    h.push(k.createTextNode(b));
        for (e.textContent = "",
        d = 0; b = h[d++]; ) {
            if (p && a.inArray(b, p) > -1) {
                o && o.push(b);
                continue
            }
            if (m = C(b),
            c = g(e.appendChild(b), "script"),
            m && Z(c),
            q)
                for (f = 0; b = c[f++]; )
                    aq.test(b.type || "") && q.push(b)
        }
        return e
    }
    by = /^key/,
    bx = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    az = /^([^.]*)(?:\.(.+)|)/;
    function D() {
        return !0
    }
    function x() {
        return !1
    }
    function bw(a, b) {
        return a === bt() === (b === "focus")
    }
    function bt() {
        try {
            return e.activeElement
        } catch (a) {}
    }
    function am(e, f, c, d, b, i) {
        var g, h;
        if (typeof f == "object") {
            typeof c != "string" && (d = d || c,
            c = void 0);
            for (h in f)
                am(e, h, c, d, f[h], i);
            return e
        }
        if (d == null && b == null ? (b = c,
        d = c = void 0) : b == null && (typeof c == "string" ? (b = d,
        d = void 0) : (b = d,
        d = c,
        c = void 0)),
        b === !1)
            b = x;
        else if (!b)
            return e;
        return i === 1 && (g = b,
        b = function(b) {
            return a().off(b),
            g.apply(this, arguments)
        }
        ,
        b.guid = g.guid || (g.guid = a.guid++)),
        e.each(function() {
            a.event.add(this, f, b, d, c)
        })
    }
    a.event = {
        global: {},
        add: function(g, l, d, s, e) {
            var j, k, q, n, p, h, f, i, c, r, t, o = b.get(g);
            if (!N(g))
                return;
            for (d.handler && (j = d,
            d = j.handler,
            e = j.selector),
            e && a.find.matchesSelector(v, e),
            d.guid || (d.guid = a.guid++),
            (n = o.events) || (n = o.events = Object.create(null)),
            (k = o.handle) || (k = o.handle = function(b) {
                return typeof a != "undefined" && a.event.triggered !== b.type ? a.event.dispatch.apply(g, arguments) : void 0
            }
            ),
            l = (l || "").match(m) || [""],
            p = l.length; p--; ) {
                if (q = az.exec(l[p]) || [],
                c = t = q[1],
                r = (q[2] || "").split(".").sort(),
                !c)
                    continue;
                f = a.event.special[c] || {},
                c = (e ? f.delegateType : f.bindType) || c,
                f = a.event.special[c] || {},
                h = a.extend({
                    type: c,
                    origType: t,
                    data: s,
                    handler: d,
                    guid: d.guid,
                    selector: e,
                    needsContext: e && a.expr.match.needsContext.test(e),
                    namespace: r.join(".")
                }, j),
                (i = n[c]) || (i = n[c] = [],
                i.delegateCount = 0,
                (!f.setup || f.setup.call(g, s, r, k) === !1) && g.addEventListener && g.addEventListener(c, k)),
                f.add && (f.add.call(g, h),
                h.handler.guid || (h.handler.guid = d.guid)),
                e ? i.splice(i.delegateCount++, 0, h) : i.push(h),
                a.event.global[c] = !0
            }
        },
        remove: function(g, j, p, i, t) {
            var o, s, e, k, l, d, f, h, c, q, r, n = b.hasData(g) && b.get(g);
            if (!n || !(k = n.events))
                return;
            for (j = (j || "").match(m) || [""],
            l = j.length; l--; ) {
                if (e = az.exec(j[l]) || [],
                c = r = e[1],
                q = (e[2] || "").split(".").sort(),
                !c) {
                    for (c in k)
                        a.event.remove(g, c + j[l], p, i, !0);
                    continue
                }
                for (f = a.event.special[c] || {},
                c = (i ? f.delegateType : f.bindType) || c,
                h = k[c] || [],
                e = e[2] && new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = o = h.length; o--; )
                    d = h[o],
                    (t || r === d.origType) && (!p || p.guid === d.guid) && (!e || e.test(d.namespace)) && (!i || i === d.selector || i === "**" && d.selector) && (h.splice(o, 1),
                    d.selector && h.delegateCount--,
                    f.remove && f.remove.call(g, d));
                s && !h.length && ((!f.teardown || f.teardown.call(g, q, n.handle) === !1) && a.removeEvent(g, c, n.handle),
                delete k[c])
            }
            a.isEmptyObject(k) && b.remove(g, "handle events")
        },
        dispatch: function(l) {
            var d, k, h, f, e, j, i = new Array(arguments.length), c = a.event.fix(l), m = (b.get(this, "events") || Object.create(null))[c.type] || [], g = a.event.special[c.type] || {};
            i[0] = c;
            for (d = 1; d < arguments.length; d++)
                i[d] = arguments[d];
            if (c.delegateTarget = this,
            g.preDispatch && g.preDispatch.call(this, c) === !1)
                return;
            for (j = a.event.handlers.call(this, c, m),
            d = 0; (f = j[d++]) && !c.isPropagationStopped(); )
                for (c.currentTarget = f.elem,
                k = 0; (e = f.handlers[k++]) && !c.isImmediatePropagationStopped(); )
                    (!c.rnamespace || e.namespace === !1 || c.rnamespace.test(e.namespace)) && (c.handleObj = e,
                    c.data = e.data,
                    h = ((a.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i),
                    h !== void 0 && (c.result = h) === !1 && (c.preventDefault(),
                    c.stopPropagation()));
            return g.postDispatch && g.postDispatch.call(this, c),
            c.result
        },
        handlers: function(d, e) {
            var f, j, c, g, h, k = [], i = e.delegateCount, b = d.target;
            if (i && b.nodeType && !(d.type === "click" && d.button >= 1))
                for (; b !== this; b = b.parentNode || this)
                    if (b.nodeType === 1 && !(d.type === "click" && b.disabled === !0)) {
                        g = [],
                        h = {};
                        for (f = 0; f < i; f++)
                            j = e[f],
                            c = j.selector + " ",
                            h[c] === void 0 && (h[c] = j.needsContext ? a(c, this).index(b) > -1 : a.find(c, this, null, [b]).length),
                            h[c] && g.push(j);
                        g.length && k.push({
                            elem: b,
                            handlers: g
                        })
                    }
            return b = this,
            i < e.length && k.push({
                elem: b,
                handlers: e.slice(i)
            }),
            k
        },
        addProp: function(b, d) {
            Object.defineProperty(a.Event.prototype, b, {
                enumerable: !0,
                configurable: !0,
                get: c(d) ? function() {
                    if (this.originalEvent)
                        return d(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[b]
                }
                ,
                set: function(a) {
                    Object.defineProperty(this, b, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: a
                    })
                }
            })
        },
        fix: function(b) {
            return b[a.expando] ? b : new a.Event(b)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(b) {
                    var a = this || b;
                    return J.test(a.type) && a.click && k(a, "input") && Q(a, "click", D),
                    !1
                },
                trigger: function(b) {
                    var a = this || b;
                    return J.test(a.type) && a.click && k(a, "input") && Q(a, "click"),
                    !0
                },
                _default: function(c) {
                    var a = c.target;
                    return J.test(a.type) && a.click && k(a, "input") && b.get(a, "click") || k(a, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    a.result !== void 0 && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    };
    function Q(d, c, e) {
        if (!e) {
            b.get(d, c) === void 0 && a.event.add(d, c, D);
            return
        }
        b.set(d, c, !1),
        a.event.add(d, c, {
            namespace: !1,
            handler: function(f) {
                var h, g, d = b.get(this, c);
                if (f.isTrigger & 1 && this[c]) {
                    if (d.length)
                        (a.event.special[c] || {}).delegateType && f.stopPropagation();
                    else if (d = r.call(arguments),
                    b.set(this, c, d),
                    h = e(this, c),
                    this[c](),
                    g = b.get(this, c),
                    d !== g || h ? b.set(this, c, !1) : g = {},
                    d !== g)
                        return f.stopImmediatePropagation(),
                        f.preventDefault(),
                        g.value
                } else
                    d.length && (b.set(this, c, {
                        value: a.event.trigger(a.extend(d[0], a.Event.prototype), d.slice(1), this)
                    }),
                    f.stopImmediatePropagation())
            }
        })
    }
    a.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }
    ,
    a.Event = function(b, c) {
        if (!(this instanceof a.Event))
            return new a.Event(b,c);
        b && b.type ? (this.originalEvent = b,
        this.type = b.type,
        this.isDefaultPrevented = b.defaultPrevented || b.defaultPrevented === void 0 && b.returnValue === !1 ? D : x,
        this.target = b.target && b.target.nodeType === 3 ? b.target.parentNode : b.target,
        this.currentTarget = b.currentTarget,
        this.relatedTarget = b.relatedTarget) : this.type = b,
        c && a.extend(this, c),
        this.timeStamp = b && b.timeStamp || Date.now(),
        this[a.expando] = !0
    }
    ,
    a.Event.prototype = {
        constructor: a.Event,
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = D,
            a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = D,
            a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = D,
            a && !this.isSimulated && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    a.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(a) {
            var b = a.button;
            return a.which == null && by.test(a.type) ? a.charCode != null ? a.charCode : a.keyCode : !a.which && b !== void 0 && bx.test(a.type) ? b & 1 ? 1 : b & 2 ? 3 : b & 4 ? 2 : 0 : a.which
        }
    }, a.event.addProp),
    a.each({
        focus: "focusin",
        blur: "focusout"
    }, function(b, c) {
        a.event.special[b] = {
            setup: function() {
                return Q(this, b, bw),
                !1
            },
            trigger: function() {
                return Q(this, b),
                !0
            },
            delegateType: c
        }
    }),
    a.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(c, b) {
        a.event.special[c] = {
            delegateType: b,
            bindType: b,
            handle: function(c) {
                var e, f = this, d = c.relatedTarget, g = c.handleObj;
                return (!d || d !== f && !a.contains(f, d)) && (c.type = g.origType,
                e = g.handler.apply(this, arguments),
                c.type = b),
                e
            }
        }
    }),
    a.fn.extend({
        on: function(a, b, c, d) {
            return am(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return am(this, a, b, c, d, 1)
        },
        off: function(b, d, e) {
            var c, f;
            if (b && b.preventDefault && b.handleObj)
                return c = b.handleObj,
                a(b.delegateTarget).off(c.namespace ? c.origType + "." + c.namespace : c.origType, c.selector, c.handler),
                this;
            if (typeof b == "object") {
                for (f in b)
                    this.off(f, d, b[f]);
                return this
            }
            return (d === !1 || typeof d == "function") && (e = d,
            d = void 0),
            e === !1 && (e = x),
            this.each(function() {
                a.event.remove(this, b, e, d)
            })
        }
    }),
    br = /<script|<style|<link/i,
    bo = /checked\s*(?:[^=]|=\s*.checked.)/i,
    bn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function aJ(b, c) {
        return k(b, "table") && k(c.nodeType !== 11 ? c : c.firstChild, "tr") ? a(b).children("tbody")[0] || b : b
    }
    function bm(a) {
        return a.type = (a.getAttribute("type") !== null) + "/" + a.type,
        a
    }
    function bl(a) {
        return (a.type || "").slice(0, 5) === "true/" ? a.type = a.type.slice(5) : a.removeAttribute("type"),
        a
    }
    function aM(d, e) {
        var g, h, f, j, k, l, c;
        if (e.nodeType !== 1)
            return;
        if (b.hasData(d))
            if (j = b.get(d),
            c = j.events,
            c) {
                b.remove(e, "handle events");
                for (f in c)
                    for (g = 0,
                    h = c[f].length; g < h; g++)
                        a.event.add(e, f, c[f][g])
            }
        i.hasData(d) && (k = i.access(d),
        l = a.extend({}, k),
        i.set(e, l))
    }
    function bi(a, b) {
        var c = b.nodeName.toLowerCase();
        c === "input" && J.test(a.type) ? b.checked = a.checked : (c === "input" || c === "textarea") && (b.defaultValue = a.defaultValue)
    }
    function A(i, k, r, q) {
        k = a_(k);
        var j, p, h, o, d, m, e = 0, l = i.length, t = l - 1, n = k[0], s = c(n);
        if (s || l > 1 && typeof n == "string" && !f.checkClone && bo.test(n))
            return i.each(function(a) {
                var b = i.eq(a);
                s && (k[0] = n.call(this, a, b.html())),
                A(b, k, r, q)
            });
        if (l)
            if (j = aw(k, i[0].ownerDocument, !1, i, q),
            p = j.firstChild,
            j.childNodes.length === 1 && (j = p),
            p || q) {
                for (h = a.map(g(j, "script"), bm),
                o = h.length; e < l; e++)
                    d = j,
                    e !== t && (d = a.clone(d, !0, !0),
                    o && a.merge(h, g(d, "script"))),
                    r.call(i[e], d, e);
                if (o) {
                    m = h[h.length - 1].ownerDocument,
                    a.map(h, bl);
                    for (e = 0; e < o; e++)
                        d = h[e],
                        aq.test(d.type || "") && !b.access(d, "globalEval") && a.contains(m, d) && (d.src && (d.type || "").toLowerCase() !== "module" ? a._evalUrl && !d.noModule && a._evalUrl(d.src, {
                            nonce: d.nonce || d.getAttribute("nonce")
                        }, m) : aR(d.textContent.replace(bn, ""), d, m))
                }
            }
        return i
    }
    function aP(c, d, e) {
        for (var b, h = d ? a.filter(d, c) : c, f = 0; (b = h[f]) != null; f++)
            !e && b.nodeType === 1 && a.cleanData(g(b)),
            b.parentNode && (e && C(b) && Z(g(b, "script")),
            b.parentNode.removeChild(b));
        return c
    }
    a.extend({
        htmlPrefilter: function(a) {
            return a
        },
        clone: function(c, k, j) {
            var b, i, e, d, h = c.cloneNode(!0), l = C(c);
            if (!f.noCloneChecked && (c.nodeType === 1 || c.nodeType === 11) && !a.isXMLDoc(c)) {
                d = g(h),
                e = g(c);
                for (b = 0,
                i = e.length; b < i; b++)
                    bi(e[b], d[b])
            }
            if (k)
                if (j) {
                    e = e || g(c),
                    d = d || g(h);
                    for (b = 0,
                    i = e.length; b < i; b++)
                        aM(e[b], d[b])
                } else
                    aM(c, h);
            return d = g(h, "script"),
            d.length > 0 && Z(d, !l && g(c, "script")),
            h
        },
        cleanData: function(g) {
            for (var d, c, e, h = a.event.special, f = 0; (c = g[f]) !== void 0; f++)
                if (N(c)) {
                    if (d = c[b.expando]) {
                        if (d.events)
                            for (e in d.events)
                                h[e] ? a.event.remove(c, e) : a.removeEvent(c, e, d.handle);
                        c[b.expando] = void 0
                    }
                    c[i.expando] && (c[i.expando] = void 0)
                }
        }
    }),
    a.fn.extend({
        detach: function(a) {
            return aP(this, a, !0)
        },
        remove: function(a) {
            return aP(this, a)
        },
        text: function(b) {
            return q(this, function(b) {
                return b === void 0 ? a.text(this) : this.empty().each(function() {
                    (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = b)
                })
            }, null, b, arguments.length)
        },
        append: function() {
            return A(this, arguments, function(a) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var b = aJ(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return A(this, arguments, function(a) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var b = aJ(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return A(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return A(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var b, c = 0; (b = this[c]) != null; c++)
                b.nodeType === 1 && (a.cleanData(g(b, !1)),
                b.textContent = "");
            return this
        },
        clone: function(b, c) {
            return b = b != null && b,
            c = c == null ? b : c,
            this.map(function() {
                return a.clone(this, b, c)
            })
        },
        html: function(b) {
            return q(this, function(b) {
                var c = this[0] || {}
                  , d = 0
                  , e = this.length;
                if (b === void 0 && c.nodeType === 1)
                    return c.innerHTML;
                if (typeof b == "string" && !br.test(b) && !j[(ap.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = a.htmlPrefilter(b);
                    try {
                        for (; d < e; d++)
                            c = this[d] || {},
                            c.nodeType === 1 && (a.cleanData(g(c, !1)),
                            c.innerHTML = b);
                        c = 0
                    } catch (a) {}
                }
                c && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function() {
            var b = [];
            return A(this, arguments, function(d) {
                var c = this.parentNode;
                a.inArray(this, b) < 0 && (a.cleanData(g(this)),
                c && c.replaceChild(d, this))
            }, b)
        }
    }),
    a.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, c) {
        a.fn[b] = function(h) {
            for (var d, e = [], f = a(h), g = f.length - 1, b = 0; b <= g; b++)
                d = b === g ? this : this.clone(!0),
                a(f[b])[c](d),
                ag.apply(e, d.get());
            return this.pushStack(e)
        }
    }),
    al = new RegExp("^(" + au + ")(?!px)[a-z%]+$","i"),
    W = function(b) {
        var a = b.ownerDocument.defaultView;
        return (!a || !a.opener) && (a = d),
        a.getComputedStyle(b)
    }
    ,
    aS = function(b, c, f) {
        var d, a, e = {};
        for (a in c)
            e[a] = b.style[a],
            b.style[a] = c[a];
        d = f.call(b);
        for (a in c)
            b.style[a] = e[a];
        return d
    }
    ,
    bh = new RegExp(p.join("|"),"i"),
    function() {
        function c() {
            if (!b)
                return;
            h.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
            b.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
            v.appendChild(h).appendChild(b);
            var a = d.getComputedStyle(b);
            m = a.top !== "1%",
            l = g(a.marginLeft) === 12,
            b.style.right = "60%",
            k = g(a.right) === 36,
            n = g(a.width) === 36,
            b.style.position = "absolute",
            j = g(b.offsetWidth / 3) === 12,
            v.removeChild(h),
            b = null
        }
        function g(a) {
            return Math.round(parseFloat(a))
        }
        var m, n, j, k, i, l, h = e.createElement("div"), b = e.createElement("div");
        if (!b.style)
            return;
        b.style.backgroundClip = "content-box",
        b.cloneNode(!0).style.backgroundClip = "",
        f.clearCloneStyle = b.style.backgroundClip === "content-box",
        a.extend(f, {
            boxSizingReliable: function() {
                return c(),
                n
            },
            pixelBoxStyles: function() {
                return c(),
                k
            },
            pixelPosition: function() {
                return c(),
                m
            },
            reliableMarginLeft: function() {
                return c(),
                l
            },
            scrollboxSize: function() {
                return c(),
                j
            },
            reliableTrDimensions: function() {
                var a, b, c, f;
                return i == null && (a = e.createElement("table"),
                b = e.createElement("tr"),
                c = e.createElement("div"),
                a.style.cssText = "position:absolute;left:-11111px",
                b.style.height = "1px",
                c.style.height = "9px",
                v.appendChild(a).appendChild(b).appendChild(c),
                f = d.getComputedStyle(b),
                i = parseInt(f.height) > 3,
                v.removeChild(a)),
                i
            }
        })
    }();
    function H(e, g, d) {
        var h, i, j, b, c = e.style;
        return d = d || W(e),
        d && (b = d.getPropertyValue(g) || d[g],
        b === "" && !C(e) && (b = a.style(e, g)),
        !f.pixelBoxStyles() && al.test(b) && bh.test(g) && (h = c.width,
        i = c.minWidth,
        j = c.maxWidth,
        c.minWidth = c.maxWidth = c.width = b,
        b = d.width,
        c.width = h,
        c.minWidth = i,
        c.maxWidth = j)),
        b !== void 0 ? b + "" : b
    }
    function aV(a, b) {
        return {
            get: function() {
                if (a()) {
                    delete this.get;
                    return
                }
                return (this.get = b).apply(this, arguments)
            }
        }
    }
    aW = ["Webkit", "Moz", "ms"],
    aX = e.createElement("div").style,
    aY = {};
    function bg(a) {
        for (var c = a[0].toUpperCase() + a.slice(1), b = aW.length; b--; )
            if (a = aW[b] + c,
            a in aX)
                return a
    }
    function ah(b) {
        var c = a.cssProps[b] || aY[b];
        return c ? c : b in aX ? b : aY[b] = bg(b) || b
    }
    bf = /^(none|table(?!-c[ea]).+)/,
    ba = /^--/,
    be = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    aE = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function bc(d, b, c) {
        var a = I.exec(b);
        return a ? Math.max(0, a[2] - (c || 0)) + (a[3] || "px") : b
    }
    function ai(d, g, f, h, e, i) {
        var b = g === "width" ? 1 : 0
          , j = 0
          , c = 0;
        if (f === (h ? "border" : "content"))
            return 0;
        for (; b < 4; b += 2)
            f === "margin" && (c += a.css(d, f + p[b], !0, e)),
            h ? (f === "content" && (c -= a.css(d, "padding" + p[b], !0, e)),
            f !== "margin" && (c -= a.css(d, "border" + p[b] + "Width", !0, e))) : (c += a.css(d, "padding" + p[b], !0, e),
            f !== "padding" ? c += a.css(d, "border" + p[b] + "Width", !0, e) : j += a.css(d, "border" + p[b] + "Width", !0, e));
        return !h && i >= 0 && (c += Math.max(0, Math.ceil(d["offset" + g[0].toUpperCase() + g.slice(1)] - i - c - j - .5)) || 0),
        c
    }
    function a$(b, g, h) {
        var d = W(b)
          , l = !f.boxSizingReliable() || h
          , e = l && a.css(b, "boxSizing", !1, d) === "border-box"
          , i = e
          , c = H(b, g, d)
          , j = "offset" + g[0].toUpperCase() + g.slice(1);
        if (al.test(c)) {
            if (!h)
                return c;
            c = "auto"
        }
        return (!f.boxSizingReliable() && e || !f.reliableTrDimensions() && k(b, "tr") || c === "auto" || !parseFloat(c) && a.css(b, "display", !1, d) === "inline") && b.getClientRects().length && (e = a.css(b, "boxSizing", !1, d) === "border-box",
        i = j in b,
        i && (c = b[j])),
        c = parseFloat(c) || 0,
        c + ai(b, g, h || (e ? "border" : "content"), i, d, c) + "px"
    }
    a.extend({
        cssHooks: {
            opacity: {
                get: function(b, c) {
                    if (c) {
                        var a = H(b, "opacity");
                        return a === "" ? "1" : a
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(d, c, b, l) {
            if (!d || d.nodeType === 3 || d.nodeType === 8 || !d.style)
                return;
            var e, i, g, j = n(c), k = ba.test(c), h = d.style;
            if (k || (c = ah(j)),
            g = a.cssHooks[c] || a.cssHooks[j],
            b !== void 0) {
                if (i = typeof b,
                i === "string" && (e = I.exec(b)) && e[1] && (b = at(d, c, e),
                i = "number"),
                b == null || b !== b)
                    return;
                i === "number" && !k && (b += e && e[3] || (a.cssNumber[j] ? "" : "px")),
                !f.clearCloneStyle && b === "" && c.indexOf("background") === 0 && (h[c] = "inherit"),
                (!g || !("set"in g) || (b = g.set(d, b, l)) !== void 0) && (k ? h.setProperty(c, b) : h[c] = b)
            } else
                return g && "get"in g && (e = g.get(d, !1, l)) !== void 0 ? e : h[c]
        },
        css: function(g, c, e, i) {
            var b, f, d, h = n(c), j = ba.test(c);
            return j || (c = ah(h)),
            d = a.cssHooks[c] || a.cssHooks[h],
            d && "get"in d && (b = d.get(g, !0, e)),
            b === void 0 && (b = H(g, c, i)),
            b === "normal" && c in aE && (b = aE[c]),
            e === "" || e ? (f = parseFloat(b),
            e === !0 || isFinite(f) ? f || 0 : b) : b
        }
    }),
    a.each(["height", "width"], function(c, b) {
        a.cssHooks[b] = {
            get: function(c, e, d) {
                if (e)
                    return bf.test(a.css(c, "display")) && (!c.getClientRects().length || !c.getBoundingClientRect().width) ? aS(c, be, function() {
                        return a$(c, b, d)
                    }) : a$(c, b, d)
            },
            set: function(c, e, g) {
                var i, d = W(c), j = !f.scrollboxSize() && d.position === "absolute", l = j || g, k = l && a.css(c, "boxSizing", !1, d) === "border-box", h = g ? ai(c, b, g, k, d) : 0;
                return k && j && (h -= Math.ceil(c["offset" + b[0].toUpperCase() + b.slice(1)] - parseFloat(d[b]) - ai(c, b, "border", !1, d) - .5)),
                h && (i = I.exec(e)) && (i[3] || "px") !== "px" && (c.style[b] = e,
                e = a.css(c, b)),
                bc(c, e, h)
            }
        }
    }),
    a.cssHooks.marginLeft = aV(f.reliableMarginLeft, function(a, b) {
        if (b)
            return (parseFloat(H(a, "marginLeft")) || a.getBoundingClientRect().left - aS(a, {
                marginLeft: 0
            }, function() {
                return a.getBoundingClientRect().left
            })) + "px"
    }),
    a.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, c) {
        a.cssHooks[b + c] = {
            expand: function(d) {
                for (var a = 0, f = {}, e = typeof d == "string" ? d.split(" ") : [d]; a < 4; a++)
                    f[b + p[a] + c] = e[a] || e[a - 2] || e[0];
                return f
            }
        },
        b !== "margin" && (a.cssHooks[b + c].set = bc)
    }),
    a.fn.extend({
        css: function(b, c) {
            return q(this, function(c, b, e) {
                var f, g, h = {}, d = 0;
                if (Array.isArray(b)) {
                    for (f = W(c),
                    g = b.length; d < g; d++)
                        h[b[d]] = a.css(c, b[d], !1, f);
                    return h
                }
                return e !== void 0 ? a.style(c, b, e) : a.css(c, b)
            }, b, c, arguments.length > 1)
        }
    });
    function h(a, b, c, d, e) {
        return new h.prototype.init(a,b,c,d,e)
    }
    a.Tween = h,
    h.prototype = {
        constructor: h,
        init: function(c, d, b, e, f, g) {
            this.elem = c,
            this.prop = b,
            this.easing = f || a.easing._default,
            this.options = d,
            this.start = this.now = this.cur(),
            this.end = e,
            this.unit = g || (a.cssNumber[b] ? "" : "px")
        },
        cur: function() {
            var a = h.propHooks[this.prop];
            return a && a.get ? a.get(this) : h.propHooks._default.get(this)
        },
        run: function(b) {
            var c, d = h.propHooks[this.prop];
            return this.options.duration ? this.pos = c = a.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : this.pos = c = b,
            this.now = (this.end - this.start) * c + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            d && d.set ? d.set(this) : h.propHooks._default.set(this),
            this
        }
    },
    h.prototype.init.prototype = h.prototype,
    h.propHooks = {
        _default: {
            get: function(b) {
                var c;
                return b.elem.nodeType !== 1 || b.elem[b.prop] != null && b.elem.style[b.prop] == null ? b.elem[b.prop] : (c = a.css(b.elem, b.prop, ""),
                !c || c === "auto" ? 0 : c)
            },
            set: function(b) {
                a.fx.step[b.prop] ? a.fx.step[b.prop](b) : b.elem.nodeType === 1 && (a.cssHooks[b.prop] || b.elem.style[ah(b.prop)] != null) ? a.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
            }
        }
    },
    h.propHooks.scrollTop = h.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    a.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    },
    a.fx = h.prototype.init,
    a.fx.step = {},
    bj = /^(?:toggle|show|hide)$/,
    bk = /queueHooks$/;
    function $() {
        O && (e.hidden === !1 && d.requestAnimationFrame ? d.requestAnimationFrame($) : d.setTimeout($, a.fx.interval),
        a.fx.tick())
    }
    function aK() {
        return d.setTimeout(function() {
            z = void 0
        }),
        z = Date.now()
    }
    function T(c, b) {
        var d, e = 0, a = {
            height: c
        };
        for (b = b ? 1 : 0; e < 4; e += 2 - b)
            d = p[e],
            a["margin" + d] = a["padding" + d] = c;
        return b && (a.opacity = a.width = c),
        a
    }
    function aH(e, b, f) {
        for (var c, d = (l.tweeners[b] || []).concat(l.tweeners["*"]), a = 0, g = d.length; a < g; a++)
            if (c = d[a].call(f, b, e))
                return c
    }
    function bp(c, l, m) {
        var d, p, q, i, r, h, f, j, s = "width"in l || "height"in l, n = this, o = {}, g = c.style, k = c.nodeType && P(c), e = b.get(c, "fxshow");
        m.queue || (i = a._queueHooks(c, "fx"),
        i.unqueued == null && (i.unqueued = 0,
        r = i.empty.fire,
        i.empty.fire = function() {
            i.unqueued || r()
        }
        ),
        i.unqueued++,
        n.always(function() {
            n.always(function() {
                i.unqueued--,
                a.queue(c, "fx").length || i.empty.fire()
            })
        }));
        for (d in l)
            if (p = l[d],
            bj.test(p)) {
                if (delete l[d],
                q = q || p === "toggle",
                p === (k ? "hide" : "show"))
                    if (p === "show" && e && e[d] !== void 0)
                        k = !0;
                    else
                        continue;
                o[d] = e && e[d] || a.style(c, d)
            }
        if (h = !a.isEmptyObject(l),
        !h && a.isEmptyObject(o))
            return;
        s && c.nodeType === 1 && (m.overflow = [g.overflow, g.overflowX, g.overflowY],
        f = e && e.display,
        f == null && (f = b.get(c, "display")),
        j = a.css(c, "display"),
        j === "none" && (f ? j = f : (B([c], !0),
        f = c.style.display || f,
        j = a.css(c, "display"),
        B([c]))),
        (j === "inline" || j === "inline-block" && f != null) && a.css(c, "float") === "none" && (h || (n.done(function() {
            g.display = f
        }),
        f == null && (j = g.display,
        f = j === "none" ? "" : j)),
        g.display = "inline-block")),
        m.overflow && (g.overflow = "hidden",
        n.always(function() {
            g.overflow = m.overflow[0],
            g.overflowX = m.overflow[1],
            g.overflowY = m.overflow[2]
        })),
        h = !1;
        for (d in o)
            h || (e ? "hidden"in e && (k = e.hidden) : e = b.access(c, "fxshow", {
                display: f
            }),
            q && (e.hidden = !k),
            k && B([c], !0),
            n.done(function() {
                k || B([c]),
                b.remove(c, "fxshow");
                for (d in o)
                    a.style(c, d, o[d])
            })),
            h = aH(k ? e[d] : 0, d, n),
            d in e || (e[d] = h.start,
            k && (h.end = h.start,
            h.start = 0))
    }
    function bq(d, h) {
        var b, e, f, c, g;
        for (b in d)
            if (e = n(b),
            f = h[e],
            c = d[b],
            Array.isArray(c) && (f = c[1],
            c = d[b] = c[0]),
            b !== e && (d[e] = c,
            delete d[b]),
            g = a.cssHooks[e],
            g && "expand"in g) {
                {
                    c = g.expand(c),
                    delete d[e];
                    for (b in c)
                        b in d || (d[b] = c[b],
                        h[b] = f)
                }
            } else
                h[e] = f
    }
    function l(d, k, g) {
        var f, h, i = 0, n = l.prefilters.length, e = a.Deferred().always(function() {
            delete m.elem
        }), m = function() {
            if (h)
                return !1;
            for (var i = z || aK(), a = Math.max(0, b.startTime + b.duration - i), j = a / b.duration || 0, c = 1 - j, f = 0, g = b.tweens.length; f < g; f++)
                b.tweens[f].run(c);
            return e.notifyWith(d, [b, c, a]),
            c < 1 && g ? a : (g || e.notifyWith(d, [b, 1, 0]),
            e.resolveWith(d, [b]),
            !1)
        }, b = e.promise({
            elem: d,
            props: a.extend({}, k),
            opts: a.extend(!0, {
                specialEasing: {},
                easing: a.easing._default
            }, g),
            originalProperties: k,
            originalOptions: g,
            startTime: z || aK(),
            duration: g.duration,
            tweens: [],
            createTween: function(c, f) {
                var e = a.Tween(d, b.opts, c, f, b.opts.specialEasing[c] || b.opts.easing);
                return b.tweens.push(e),
                e
            },
            stop: function(a) {
                var c = 0
                  , f = a ? b.tweens.length : 0;
                if (h)
                    return this;
                for (h = !0; c < f; c++)
                    b.tweens[c].run(1);
                return a ? (e.notifyWith(d, [b, 1, 0]),
                e.resolveWith(d, [b, a])) : e.rejectWith(d, [b, a]),
                this
            }
        }), j = b.props;
        for (bq(j, b.opts.specialEasing); i < n; i++)
            if (f = l.prefilters[i].call(b, d, j, b.opts),
            f)
                return c(f.stop) && (a._queueHooks(b.elem, b.opts.queue).stop = f.stop.bind(f)),
                f;
        return a.map(j, aH, b),
        c(b.opts.start) && b.opts.start.call(d, b),
        b.progress(b.opts.progress).done(b.opts.done, b.opts.complete).fail(b.opts.fail).always(b.opts.always),
        a.fx.timer(a.extend(m, {
            elem: d,
            anim: b,
            queue: b.opts.queue
        })),
        b
    }
    a.Animation = a.extend(l, {
        tweeners: {
            "*": [function(b, c) {
                var a = this.createTween(b, c);
                return at(a.elem, b, I.exec(c), a),
                a
            }
            ]
        },
        tweener: function(a, e) {
            c(a) ? (e = a,
            a = ["*"]) : a = a.match(m);
            for (var b, d = 0, f = a.length; d < f; d++)
                b = a[d],
                l.tweeners[b] = l.tweeners[b] || [],
                l.tweeners[b].unshift(e)
        },
        prefilters: [bp],
        prefilter: function(a, b) {
            b ? l.prefilters.unshift(a) : l.prefilters.push(a)
        }
    }),
    a.speed = function(d, e, f) {
        var b = d && typeof d == "object" ? a.extend({}, d) : {
            complete: f || !f && e || c(d) && d,
            duration: d,
            easing: f && e || e && !c(e) && e
        };
        return a.fx.off ? b.duration = 0 : typeof b.duration != "number" && (b.duration in a.fx.speeds ? b.duration = a.fx.speeds[b.duration] : b.duration = a.fx.speeds._default),
        (b.queue == null || b.queue === !0) && (b.queue = "fx"),
        b.old = b.complete,
        b.complete = function() {
            c(b.old) && b.old.call(this),
            b.queue && a.dequeue(this, b.queue)
        }
        ,
        b
    }
    ,
    a.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(P).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(f, g, h, i) {
            var e = a.isEmptyObject(f)
              , d = a.speed(g, h, i)
              , c = function() {
                var c = l(this, a.extend({}, f), d);
                (e || b.get(this, "finish")) && c.stop(!0)
            };
            return c.finish = c,
            e || d.queue === !1 ? this.each(c) : this.queue(d.queue, c)
        },
        stop: function(c, e, d) {
            var f = function(a) {
                var b = a.stop;
                delete a.stop,
                b(d)
            };
            return typeof c != "string" && (d = e,
            e = c,
            c = void 0),
            e && this.queue(c || "fx", []),
            this.each(function() {
                var i = !0
                  , e = c != null && c + "queueHooks"
                  , h = a.timers
                  , g = b.get(this);
                if (e)
                    g[e] && g[e].stop && f(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && bk.test(e) && f(g[e]);
                for (e = h.length; e--; )
                    h[e].elem === this && (c == null || h[e].queue === c) && (h[e].anim.stop(d),
                    i = !1,
                    h.splice(e, 1));
                (i || !d) && a.dequeue(this, c)
            })
        },
        finish: function(c) {
            return c !== !1 && (c = c || "fx"),
            this.each(function() {
                var d, g = b.get(this), e = g[c + "queue"], h = g[c + "queueHooks"], f = a.timers, i = e ? e.length : 0;
                g.finish = !0,
                a.queue(this, c, []),
                h && h.stop && h.stop.call(this, !0);
                for (d = f.length; d--; )
                    f[d].elem === this && f[d].queue === c && (f[d].anim.stop(!0),
                    f.splice(d, 1));
                for (d = 0; d < i; d++)
                    e[d] && e[d].finish && e[d].finish.call(this);
                delete g.finish
            })
        }
    }),
    a.each(["toggle", "show", "hide"], function(d, b) {
        var c = a.fn[b];
        a.fn[b] = function(a, d, e) {
            return a == null || typeof a == "boolean" ? c.apply(this, arguments) : this.animate(T(b, !0), a, d, e)
        }
    }),
    a.each({
        slideDown: T("show"),
        slideUp: T("hide"),
        slideToggle: T("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, c) {
        a.fn[b] = function(a, b, d) {
            return this.animate(c, a, b, d)
        }
    }),
    a.timers = [],
    a.fx.tick = function() {
        var d, b = 0, c = a.timers;
        for (z = Date.now(); b < c.length; b++)
            d = c[b],
            !d() && c[b] === d && c.splice(b--, 1);
        c.length || a.fx.stop(),
        z = void 0
    }
    ,
    a.fx.timer = function(b) {
        a.timers.push(b),
        a.fx.start()
    }
    ,
    a.fx.interval = 13,
    a.fx.start = function() {
        if (O)
            return;
        O = !0,
        $()
    }
    ,
    a.fx.stop = function() {
        O = null
    }
    ,
    a.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    a.fn.delay = function(b, c) {
        return b = a.fx ? a.fx.speeds[b] || b : b,
        c = c || "fx",
        this.queue(c, function(a, c) {
            var e = d.setTimeout(a, b);
            c.stop = function() {
                d.clearTimeout(e)
            }
        })
    }
    ,
    function() {
        var a = e.createElement("input")
          , b = e.createElement("select")
          , c = b.appendChild(e.createElement("option"));
        a.type = "checkbox",
        f.checkOn = a.value !== "",
        f.optSelected = c.selected,
        a = e.createElement("input"),
        a.value = "t",
        a.type = "radio",
        f.radioValue = a.value === "t"
    }(),
    L = a.expr.attrHandle,
    a.fn.extend({
        attr: function(b, c) {
            return q(this, a.attr, b, c, arguments.length > 1)
        },
        removeAttr: function(b) {
            return this.each(function() {
                a.removeAttr(this, b)
            })
        }
    }),
    a.extend({
        attr: function(b, c, f) {
            var d, e, g = b.nodeType;
            if (g === 3 || g === 8 || g === 2)
                return;
            if (typeof b.getAttribute == "undefined")
                return a.prop(b, c, f);
            if ((g !== 1 || !a.isXMLDoc(b)) && (e = a.attrHooks[c.toLowerCase()] || (a.expr.match.bool.test(c) ? aA : void 0)),
            f !== void 0) {
                if (f === null) {
                    a.removeAttr(b, c);
                    return
                }
                return e && "set"in e && (d = e.set(b, f, c)) !== void 0 ? d : (b.setAttribute(c, f + ""),
                f)
            }
            return e && "get"in e && (d = e.get(b, c)) !== null ? d : (d = a.find.attr(b, c),
            d == null ? void 0 : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!f.radioValue && b === "radio" && k(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, e = 0, d = b && b.match(m);
            if (d && a.nodeType === 1)
                while (c = d[e++])
                    a.removeAttribute(c)
        }
    }),
    aA = {
        set: function(c, d, b) {
            return d === !1 ? a.removeAttr(c, b) : c.setAttribute(b, b),
            b
        }
    },
    a.each(a.expr.match.bool.source.match(/\w+/g), function(d, b) {
        var c = L[b] || a.find.attr;
        L[b] = function(g, d, e) {
            var b, f, a = d.toLowerCase();
            return e || (f = L[a],
            L[a] = b,
            b = c(g, d, e) != null ? a : null,
            L[a] = f),
            b
        }
    }),
    bu = /^(?:input|select|textarea|button)$/i,
    bv = /^(?:a|area)$/i,
    a.fn.extend({
        prop: function(b, c) {
            return q(this, a.prop, b, c, arguments.length > 1)
        },
        removeProp: function(b) {
            return this.each(function() {
                delete this[a.propFix[b] || b]
            })
        }
    }),
    a.extend({
        prop: function(d, b, g) {
            var e, c, f = d.nodeType;
            if (f === 3 || f === 8 || f === 2)
                return;
            return (f !== 1 || !a.isXMLDoc(d)) && (b = a.propFix[b] || b,
            c = a.propHooks[b]),
            g !== void 0 ? c && "set"in c && (e = c.set(d, g, b)) !== void 0 ? e : d[b] = g : c && "get"in c && (e = c.get(d, b)) !== null ? e : d[b]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var c = a.find.attr(b, "tabindex");
                    return c ? parseInt(c, 10) : bu.test(b.nodeName) || bv.test(b.nodeName) && b.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    f.optSelected || (a.propHooks.selected = {
        get: function(b) {
            var a = b.parentNode;
            return a && a.parentNode && a.parentNode.selectedIndex,
            null
        },
        set: function(b) {
            var a = b.parentNode;
            a && (a.selectedIndex,
            a.parentNode && a.parentNode.selectedIndex)
        }
    }),
    a.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        a.propFix[this.toLowerCase()] = this
    });
    function u(a) {
        var b = a.match(m) || [];
        return b.join(" ")
    }
    function t(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    function ac(a) {
        return Array.isArray(a) ? a : typeof a == "string" ? a.match(m) || [] : []
    }
    a.fn.extend({
        addClass: function(e) {
            var f, d, b, g, h, j, i, k = 0;
            if (c(e))
                return this.each(function(b) {
                    a(this).addClass(e.call(this, b, t(this)))
                });
            if (f = ac(e),
            f.length)
                while (d = this[k++])
                    if (g = t(d),
                    b = d.nodeType === 1 && " " + u(g) + " ",
                    b) {
                        for (j = 0; h = f[j++]; )
                            b.indexOf(" " + h + " ") < 0 && (b += h + " ");
                        i = u(b),
                        g !== i && d.setAttribute("class", i)
                    }
            return this
        },
        removeClass: function(e) {
            var f, d, b, g, h, j, i, k = 0;
            if (c(e))
                return this.each(function(b) {
                    a(this).removeClass(e.call(this, b, t(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if (f = ac(e),
            f.length)
                while (d = this[k++])
                    if (g = t(d),
                    b = d.nodeType === 1 && " " + u(g) + " ",
                    b) {
                        for (j = 0; h = f[j++]; )
                            while (b.indexOf(" " + h + " ") > -1)
                                b = b.replace(" " + h + " ", " ");
                        i = u(b),
                        g !== i && d.setAttribute("class", i)
                    }
            return this
        },
        toggleClass: function(d, e) {
            var f = typeof d
              , g = f === "string" || Array.isArray(d);
            return typeof e == "boolean" && g ? e ? this.addClass(d) : this.removeClass(d) : c(d) ? this.each(function(b) {
                a(this).toggleClass(d.call(this, b, t(this), e), e)
            }) : this.each(function() {
                var c, h, e, i;
                if (g)
                    for (h = 0,
                    e = a(this),
                    i = ac(d); c = i[h++]; )
                        e.hasClass(c) ? e.removeClass(c) : e.addClass(c);
                else
                    (d === void 0 || f === "boolean") && (c = t(this),
                    c && b.set(this, "__className__", c),
                    this.setAttribute && this.setAttribute("class", c || d === !1 ? "" : b.get(this, "__className__") || ""))
            })
        },
        hasClass: function(c) {
            var b, a, d = 0;
            for (b = " " + c + " "; a = this[d++]; )
                if (a.nodeType === 1 && (" " + u(t(a)) + " ").indexOf(b) > -1)
                    return !0;
            return !1
        }
    }),
    bz = /\r/g,
    a.fn.extend({
        val: function(f) {
            var b, d, g, e = this[0];
            if (!arguments.length) {
                if (e)
                    return b = a.valHooks[e.type] || a.valHooks[e.nodeName.toLowerCase()],
                    b && "get"in b && (d = b.get(e, "value")) !== void 0 ? d : (d = e.value,
                    typeof d == "string") ? d.replace(bz, "") : d == null ? "" : d;
                return
            }
            return g = c(f),
            this.each(function(d) {
                var c;
                if (this.nodeType !== 1)
                    return;
                g ? c = f.call(this, d, a(this).val()) : c = f,
                c == null ? c = "" : typeof c == "number" ? c += "" : Array.isArray(c) && (c = a.map(c, function(a) {
                    return a == null ? "" : a + ""
                })),
                b = a.valHooks[this.type] || a.valHooks[this.nodeName.toLowerCase()],
                (!b || !("set"in b) || b.set(this, c, "value") === void 0) && (this.value = c)
            })
        }
    }),
    a.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var c = a.find.attr(b, "value");
                    return c != null ? c : u(a.text(b))
                }
            },
            select: {
                get: function(g) {
                    var f, b, c, h = g.options, e = g.selectedIndex, d = g.type === "select-one", i = d ? null : [], j = d ? e + 1 : h.length;
                    for (e < 0 ? c = j : c = d ? e : 0; c < j; c++)
                        if (b = h[c],
                        (b.selected || c === e) && !b.disabled && (!b.parentNode.disabled || !k(b.parentNode, "optgroup"))) {
                            if (f = a(b).val(),
                            d)
                                return f;
                            i.push(f)
                        }
                    return i
                },
                set: function(c, h) {
                    for (var d, b, e = c.options, f = a.makeArray(h), g = e.length; g--; )
                        b = e[g],
                        (b.selected = a.inArray(a.valHooks.option.get(b), f) > -1) && (d = !0);
                    return d || (c.selectedIndex = -1),
                    f
                }
            }
        }
    }),
    a.each(["radio", "checkbox"], function() {
        a.valHooks[this] = {
            set: function(b, c) {
                if (Array.isArray(c))
                    return b.checked = a.inArray(a(b).val(), c) > -1
            }
        },
        f.checkOn || (a.valHooks[this].get = function(a) {
            return a.getAttribute("value") === null ? "on" : a.value
        }
        )
    }),
    f.focusin = "onfocusin"in d,
    av = /^(?:focusinfocus|focusoutblur)$/,
    an = function(a) {
        a.stopPropagation()
    }
    ,
    a.extend(a.event, {
        trigger: function(f, m, h, r) {
            var s, i, j, t, n, l, k, p, q = [h || e], g = U.call(f, "type") ? f.type : f, o = U.call(f, "namespace") ? f.namespace.split(".") : [];
            if (i = p = j = h = h || e,
            h.nodeType === 3 || h.nodeType === 8)
                return;
            if (av.test(g + a.event.triggered))
                return;
            if (g.indexOf(".") > -1 && (o = g.split("."),
            g = o.shift(),
            o.sort()),
            n = g.indexOf(":") < 0 && "on" + g,
            f = f[a.expando] ? f : new a.Event(g,typeof f == "object" && f),
            f.isTrigger = r ? 2 : 3,
            f.namespace = o.join("."),
            f.rnamespace = f.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            f.result = void 0,
            f.target || (f.target = h),
            m = m == null ? [f] : a.makeArray(m, [f]),
            k = a.event.special[g] || {},
            !r && k.trigger && k.trigger.apply(h, m) === !1)
                return;
            if (!r && !k.noBubble && !w(h)) {
                for (t = k.delegateType || g,
                av.test(t + g) || (i = i.parentNode); i; i = i.parentNode)
                    q.push(i),
                    j = i;
                j === (h.ownerDocument || e) && q.push(j.defaultView || j.parentWindow || d)
            }
            for (s = 0; (i = q[s++]) && !f.isPropagationStopped(); )
                p = i,
                f.type = s > 1 ? t : k.bindType || g,
                l = (b.get(i, "events") || Object.create(null))[f.type] && b.get(i, "handle"),
                l && l.apply(i, m),
                l = n && i[n],
                l && l.apply && N(i) && (f.result = l.apply(i, m),
                f.result === !1 && f.preventDefault());
            return f.type = g,
            !r && !f.isDefaultPrevented() && (!k._default || k._default.apply(q.pop(), m) === !1) && N(h) && n && c(h[g]) && !w(h) && (j = h[n],
            j && (h[n] = null),
            a.event.triggered = g,
            f.isPropagationStopped() && p.addEventListener(g, an),
            h[g](),
            f.isPropagationStopped() && p.removeEventListener(g, an),
            a.event.triggered = void 0,
            j && (h[n] = j)),
            f.result
        },
        simulate: function(b, c, d) {
            var e = a.extend(new a.Event, d, {
                type: b,
                isSimulated: !0
            });
            a.event.trigger(e, null, c)
        }
    }),
    a.fn.extend({
        trigger: function(b, c) {
            return this.each(function() {
                a.event.trigger(b, c, this)
            })
        },
        triggerHandler: function(c, d) {
            var b = this[0];
            if (b)
                return a.event.trigger(c, d, b, !0)
        }
    }),
    f.focusin || a.each({
        focus: "focusin",
        blur: "focusout"
    }, function(d, c) {
        var e = function(b) {
            a.event.simulate(c, b.target, a.event.fix(b))
        };
        a.event.special[c] = {
            setup: function() {
                var a = this.ownerDocument || this.document || this
                  , f = b.access(a, c);
                f || a.addEventListener(d, e, !0),
                b.access(a, c, (f || 0) + 1)
            },
            teardown: function() {
                var a = this.ownerDocument || this.document || this
                  , f = b.access(a, c) - 1;
                f ? b.access(a, c, f) : (a.removeEventListener(d, e, !0),
                b.remove(a, c))
            }
        }
    }),
    K = d.location,
    ao = {
        guid: Date.now()
    },
    aa = /\?/,
    a.parseXML = function(c) {
        var b;
        if (!c || typeof c != "string")
            return null;
        try {
            b = (new d.DOMParser).parseFromString(c, "text/xml")
        } catch (a) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && a.error("Invalid XML: " + c),
        b
    }
    ,
    bF = /\[\]$/,
    ay = /\r?\n/g,
    bH = /^(?:submit|button|image|reset|file)$/i,
    bI = /^(?:input|select|textarea|keygen)/i;
    function ad(c, b, d, e) {
        var f;
        if (Array.isArray(b))
            a.each(b, function(b, a) {
                d || bF.test(c) ? e(c, a) : ad(c + "[" + (typeof a == "object" && a != null ? b : "") + "]", a, d, e)
            });
        else if (!d && E(b) === "object")
            for (f in b)
                ad(c + "[" + f + "]", b[f], d, e);
        else
            e(c, b)
    }
    a.param = function(b, g) {
        var d, e = [], f = function(d, a) {
            var b = c(a) ? a() : a;
            e[e.length] = encodeURIComponent(d) + "=" + encodeURIComponent(b == null ? "" : b)
        };
        if (b == null)
            return "";
        if (Array.isArray(b) || b.jquery && !a.isPlainObject(b))
            a.each(b, function() {
                f(this.name, this.value)
            });
        else
            for (d in b)
                ad(d, b[d], g, f);
        return e.join("&")
    }
    ,
    a.fn.extend({
        serialize: function() {
            return a.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var b = a.prop(this, "elements");
                return b ? a.makeArray(b) : this
            }).filter(function() {
                var b = this.type;
                return this.name && !a(this).is(":disabled") && bI.test(this.nodeName) && !bH.test(b) && (this.checked || !J.test(b))
            }).map(function(d, c) {
                var b = a(this).val();
                return b == null ? null : Array.isArray(b) ? a.map(b, function(a) {
                    return {
                        name: c.name,
                        value: a.replace(ay, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: b.replace(ay, "\r\n")
                }
            }).get()
        }
    }),
    bK = /%20/g,
    bL = /#.*$/,
    ce = /([?&])_=[^&]*/,
    bN = /^(.*?):[ \t]*([^\r\n]*)$/mg,
    bO = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    bP = /^(?:GET|HEAD)$/,
    bQ = /^\/\//,
    aB = {},
    aj = {},
    aD = "*/".concat("*"),
    af = e.createElement("a"),
    af.href = K.href;
    function aG(a) {
        return function(d, e) {
            typeof d != "string" && (e = d,
            d = "*");
            var b, f = 0, g = d.toLowerCase().match(m) || [];
            if (c(e))
                while (b = g[f++])
                    b[0] === "+" ? (b = b.slice(1) || "*",
                    (a[b] = a[b] || []).unshift(e)) : (a[b] = a[b] || []).push(e)
        }
    }
    function aI(f, c, g, h) {
        var d = {}
          , e = f === aj;
        function b(i) {
            var j;
            return d[i] = !0,
            a.each(f[i] || [], function(i, f) {
                var a = f(c, g, h);
                if (typeof a == "string" && !e && !d[a])
                    return c.dataTypes.unshift(a),
                    b(a),
                    !1;
                if (e)
                    return !(j = a)
            }),
            j
        }
        return b(c.dataTypes[0]) || !d["*"] && b("*")
    }
    function ae(d, e) {
        var b, c, f = a.ajaxSettings.flatOptions || {};
        for (b in e)
            e[b] !== void 0 && ((f[b] ? d : c || (c = {}))[b] = e[b]);
        return c && a.extend(!0, d, c),
        d
    }
    function bY(d, i, h) {
        for (var e, b, c, g, f = d.contents, a = d.dataTypes; a[0] === "*"; )
            a.shift(),
            e === void 0 && (e = d.mimeType || i.getResponseHeader("Content-Type"));
        if (e)
            for (b in f)
                if (f[b] && f[b].test(e)) {
                    a.unshift(b);
                    break
                }
        if (a[0]in h)
            c = a[0];
        else {
            for (b in h) {
                if (!a[0] || d.converters[b + " " + a[0]]) {
                    c = b;
                    break
                }
                g || (g = b)
            }
            c = c || g
        }
        if (c)
            return c !== a[0] && a.unshift(c),
            h[c]
    }
    function bZ(c, d, j, k) {
        var h, a, b, g, e, f = {}, i = c.dataTypes.slice();
        if (i[1])
            for (b in c.converters)
                f[b.toLowerCase()] = c.converters[b];
        for (a = i.shift(); a; )
            if (c.responseFields[a] && (j[c.responseFields[a]] = d),
            !e && k && c.dataFilter && (d = c.dataFilter(d, c.dataType)),
            e = a,
            a = i.shift(),
            a)
                if (a === "*")
                    a = e;
                else if (e !== "*" && e !== a) {
                    if (b = f[e + " " + a] || f["* " + a],
                    !b)
                        for (h in f)
                            if (g = h.split(" "),
                            g[1] === a)
                                if (b = f[e + " " + g[0]] || f["* " + g[0]],
                                b) {
                                    b === !0 ? b = f[h] : f[h] !== !0 && (a = g[0],
                                    i.unshift(g[1]));
                                    break
                                }
                    if (b !== !0)
                        if (b && c.throws)
                            d = b(d);
                        else
                            try {
                                d = b(d)
                            } catch (c) {
                                return {
                                    state: "parsererror",
                                    error: b ? c : "No conversion from " + e + " to " + a
                                }
                            }
                }
        return {
            state: "success",
            data: d
        }
    }
    return a.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: K.href,
            type: "GET",
            isLocal: bO.test(K.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": aD,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": a.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(b, c) {
            return c ? ae(ae(b, a.ajaxSettings), c) : ae(a.ajaxSettings, b)
        },
        ajaxPrefilter: aG(aB),
        ajaxTransport: aG(aj),
        ajax: function(q, h) {
            typeof q == "object" && (h = q,
            q = void 0),
            h = h || {};
            var k, f, w, l, v, j, g, n, s, p, b = a.ajaxSetup({}, h), i = b.context || b, t = b.context && (i.nodeType || i.jquery) ? a(i) : a.event, u = a.Deferred(), A = a.Callbacks("once memory"), o = b.statusCode || {}, x = {}, y = {}, z = "canceled", c = {
                readyState: 0,
                getResponseHeader: function(b) {
                    var a;
                    if (g) {
                        if (!l)
                            for (l = {}; a = bN.exec(w); )
                                l[a[1].toLowerCase() + " "] = (l[a[1].toLowerCase() + " "] || []).concat(a[2]);
                        a = l[b.toLowerCase() + " "]
                    }
                    return a == null ? null : a.join(", ")
                },
                getAllResponseHeaders: function() {
                    return g ? w : null
                },
                setRequestHeader: function(a, b) {
                    return g == null && (a = y[a.toLowerCase()] = y[a.toLowerCase()] || a,
                    x[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return g == null && (b.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (g)
                            c.always(a[c.status]);
                        else
                            for (b in a)
                                o[b] = [o[b], a[b]];
                    return this
                },
                abort: function(b) {
                    var a = b || z;
                    return k && k.abort(a),
                    r(0, a),
                    this
                }
            };
            if (u.promise(c),
            b.url = ((q || b.url || K.href) + "").replace(bQ, K.protocol + "//"),
            b.type = h.method || h.type || b.method || b.type,
            b.dataTypes = (b.dataType || "*").toLowerCase().match(m) || [""],
            b.crossDomain == null) {
                j = e.createElement("a");
                try {
                    j.href = b.url,
                    j.href = j.href,
                    b.crossDomain = af.protocol + "//" + af.host !== j.protocol + "//" + j.host
                } catch (a) {
                    b.crossDomain = !0
                }
            }
            if (b.data && b.processData && typeof b.data != "string" && (b.data = a.param(b.data, b.traditional)),
            aI(aB, b, h, c),
            g)
                return c;
            n = a.event && b.global,
            n && a.active++ === 0 && a.event.trigger("ajaxStart"),
            b.type = b.type.toUpperCase(),
            b.hasContent = !bP.test(b.type),
            f = b.url.replace(bL, ""),
            b.hasContent ? b.data && b.processData && (b.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (b.data = b.data.replace(bK, "+")) : (p = b.url.slice(f.length),
            b.data && (b.processData || typeof b.data == "string") && (f += (aa.test(f) ? "&" : "?") + b.data,
            delete b.data),
            b.cache === !1 && (f = f.replace(ce, "$1"),
            p = (aa.test(f) ? "&" : "?") + "_=" + ao.guid++ + p),
            b.url = f + p),
            b.ifModified && (a.lastModified[f] && c.setRequestHeader("If-Modified-Since", a.lastModified[f]),
            a.etag[f] && c.setRequestHeader("If-None-Match", a.etag[f])),
            (b.data && b.hasContent && b.contentType !== !1 || h.contentType) && c.setRequestHeader("Content-Type", b.contentType),
            c.setRequestHeader("Accept", b.dataTypes[0] && b.accepts[b.dataTypes[0]] ? b.accepts[b.dataTypes[0]] + (b.dataTypes[0] !== "*" ? ", " + aD + "; q=0.01" : "") : b.accepts["*"]);
            for (s in b.headers)
                c.setRequestHeader(s, b.headers[s]);
            if (b.beforeSend && (b.beforeSend.call(i, c, b) === !1 || g))
                return c.abort();
            if (z = "abort",
            A.add(b.complete),
            c.done(b.success),
            c.fail(b.error),
            k = aI(aj, b, h, c),
            k) {
                if (c.readyState = 1,
                n && t.trigger("ajaxSend", [c, b]),
                g)
                    return c;
                b.async && b.timeout > 0 && (v = d.setTimeout(function() {
                    c.abort("timeout")
                }, b.timeout));
                try {
                    g = !1,
                    k.send(x, r)
                } catch (a) {
                    if (g)
                        throw a;
                    r(-1, a)
                }
            } else
                r(-1, "No Transport");
            function r(e, r, s, x) {
                var j, q, p, l, m, h = r;
                if (g)
                    return;
                g = !0,
                v && d.clearTimeout(v),
                k = void 0,
                w = x || "",
                c.readyState = e > 0 ? 4 : 0,
                j = e >= 200 && e < 300 || e === 304,
                s && (l = bY(b, c, s)),
                !j && a.inArray("script", b.dataTypes) > -1 && (b.converters["text script"] = function() {}
                ),
                l = bZ(b, l, c, j),
                j ? (b.ifModified && (m = c.getResponseHeader("Last-Modified"),
                m && (a.lastModified[f] = m),
                m = c.getResponseHeader("etag"),
                m && (a.etag[f] = m)),
                e === 204 || b.type === "HEAD" ? h = "nocontent" : e === 304 ? h = "notmodified" : (h = l.state,
                q = l.data,
                p = l.error,
                j = !p)) : (p = h,
                (e || !h) && (h = "error",
                e < 0 && (e = 0))),
                c.status = e,
                c.statusText = (r || h) + "",
                j ? u.resolveWith(i, [q, h, c]) : u.rejectWith(i, [c, h, p]),
                c.statusCode(o),
                o = void 0,
                n && t.trigger(j ? "ajaxSuccess" : "ajaxError", [c, b, j ? q : p]),
                A.fireWith(i, [c, h]),
                n && (t.trigger("ajaxComplete", [c, b]),
                --a.active || a.event.trigger("ajaxStop"))
            }
            return c
        },
        getJSON: function(b, c, d) {
            return a.get(b, c, d, "json")
        },
        getScript: function(b, c) {
            return a.get(b, void 0, c, "script")
        }
    }),
    a.each(["get", "post"], function(d, b) {
        a[b] = function(e, d, f, g) {
            return c(d) && (g = g || f,
            f = d,
            d = void 0),
            a.ajax(a.extend({
                url: e,
                type: b,
                dataType: g,
                data: d,
                success: f
            }, a.isPlainObject(e) && e))
        }
    }),
    a.ajaxPrefilter(function(a) {
        var b;
        for (b in a.headers)
            b.toLowerCase() === "content-type" && (a.contentType = a.headers[b] || "")
    }),
    a._evalUrl = function(b, c, d) {
        return a.ajax({
            url: b,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(b) {
                a.globalEval(b, c, d)
            }
        })
    }
    ,
    a.fn.extend({
        wrapAll: function(b) {
            var d;
            return this[0] && (c(b) && (b = b.call(this[0])),
            d = a(b, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && d.insertBefore(this[0]),
            d.map(function() {
                for (var a = this; a.firstElementChild; )
                    a = a.firstElementChild;
                return a
            }).append(this)),
            this
        },
        wrapInner: function(b) {
            return c(b) ? this.each(function(c) {
                a(this).wrapInner(b.call(this, c))
            }) : this.each(function() {
                var c = a(this)
                  , d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) {
            var d = c(b);
            return this.each(function(c) {
                a(this).wrapAll(d ? b.call(this, c) : b)
            })
        },
        unwrap: function(b) {
            return this.parent(b).not("body").each(function() {
                a(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    a.expr.pseudos.hidden = function(b) {
        return !a.expr.pseudos.visible(b)
    }
    ,
    a.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }
    ,
    a.ajaxSettings.xhr = function() {
        try {
            return new d.XMLHttpRequest
        } catch (a) {}
    }
    ,
    b_ = {
        0: 200,
        1223: 204
    },
    G = a.ajaxSettings.xhr(),
    f.cors = !!G && "withCredentials"in G,
    f.ajax = G = !!G,
    a.ajaxTransport(function(a) {
        var b, c;
        if (f.cors || G && !a.crossDomain)
            return {
                send: function(g, h) {
                    var f, e = a.xhr();
                    if (e.open(a.type, a.url, a.async, a.username, a.password),
                    a.xhrFields)
                        for (f in a.xhrFields)
                            e[f] = a.xhrFields[f];
                    a.mimeType && e.overrideMimeType && e.overrideMimeType(a.mimeType),
                    !a.crossDomain && !g["X-Requested-With"] && (g["X-Requested-With"] = "XMLHttpRequest");
                    for (f in g)
                        e.setRequestHeader(f, g[f]);
                    b = function(a) {
                        return function() {
                            b && (b = c = e.onload = e.onerror = e.onabort = e.ontimeout = e.onreadystatechange = null,
                            a === "abort" ? e.abort() : a === "error" ? typeof e.status != "number" ? h(0, "error") : h(e.status, e.statusText) : h(b_[e.status] || e.status, e.statusText, (e.responseType || "text") !== "text" || typeof e.responseText != "string" ? {
                                binary: e.response
                            } : {
                                text: e.responseText
                            }, e.getAllResponseHeaders()))
                        }
                    }
                    ,
                    e.onload = b(),
                    c = e.onerror = e.ontimeout = b("error"),
                    e.onabort !== void 0 ? e.onabort = c : e.onreadystatechange = function() {
                        e.readyState === 4 && d.setTimeout(function() {
                            b && c()
                        })
                    }
                    ,
                    b = b("abort");
                    try {
                        e.send(a.hasContent && a.data || null)
                    } catch (a) {
                        if (b)
                            throw a
                    }
                },
                abort: function() {
                    b && b()
                }
            }
    }),
    a.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    }),
    a.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(b) {
                return a.globalEval(b),
                b
            }
        }
    }),
    a.ajaxPrefilter("script", function(a) {
        a.cache === void 0 && (a.cache = !1),
        a.crossDomain && (a.type = "GET")
    }),
    a.ajaxTransport("script", function(b) {
        if (b.crossDomain || b.scriptAttrs) {
            var d, c;
            return {
                send: function(g, f) {
                    d = a("<script>").attr(b.scriptAttrs || {}).prop({
                        charset: b.scriptCharset,
                        src: b.url
                    }).on("load error", c = function(a) {
                        d.remove(),
                        c = null,
                        a && f(a.type === "error" ? 404 : 200, a.type)
                    }
                    ),
                    e.head.appendChild(d[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    }),
    aT = [],
    ak = /(=)\?(?=&|$)|\?\?/,
    a.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = aT.pop() || a.expando + "_" + ao.guid++;
            return this[b] = !0,
            b
        }
    }),
    a.ajaxPrefilter("json jsonp", function(b, i, j) {
        var e, f, g, h = b.jsonp !== !1 && (ak.test(b.url) ? "url" : typeof b.data == "string" && (b.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && ak.test(b.data) && "data");
        if (h || b.dataTypes[0] === "jsonp")
            return e = b.jsonpCallback = c(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
            h ? b[h] = b[h].replace(ak, "$1" + e) : b.jsonp !== !1 && (b.url += (aa.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
            b.converters["script json"] = function() {
                return g || a.error(e + " was not called"),
                g[0]
            }
            ,
            b.dataTypes[0] = "json",
            f = d[e],
            d[e] = function() {
                g = arguments
            }
            ,
            j.always(function() {
                f === void 0 ? a(d).removeProp(e) : d[e] = f,
                b[e] && (b.jsonpCallback = i.jsonpCallback,
                aT.push(e)),
                g && c(f) && f(g[0]),
                g = f = void 0
            }),
            "script"
    }),
    f.createHTMLDocument = function() {
        var a = e.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>",
        a.childNodes.length === 2
    }(),
    a.parseHTML = function(g, b, i) {
        if (typeof g != "string")
            return [];
        typeof b == "boolean" && (i = b,
        b = !1);
        var h, c, d;
        return b || (f.createHTMLDocument ? (b = e.implementation.createHTMLDocument(""),
        h = b.createElement("base"),
        h.href = e.location.href,
        b.head.appendChild(h)) : b = e),
        c = aN.exec(g),
        d = !i && [],
        c ? [b.createElement(c[1])] : (c = aw([g], b, d),
        d && d.length && a(d).remove(),
        a.merge([], c.childNodes))
    }
    ,
    a.fn.load = function(d, b, e) {
        var f, i, j, g = this, h = d.indexOf(" ");
        return h > -1 && (f = u(d.slice(h)),
        d = d.slice(0, h)),
        c(b) ? (e = b,
        b = void 0) : b && typeof b == "object" && (i = "POST"),
        g.length > 0 && a.ajax({
            url: d,
            type: i || "GET",
            dataType: "html",
            data: b
        }).done(function(b) {
            j = arguments,
            g.html(f ? a("<div>").append(a.parseHTML(b)).find(f) : b)
        }).always(e && function(a, b) {
            g.each(function() {
                e.apply(this, j || [a.responseText, b, a])
            })
        }
        ),
        this
    }
    ,
    a.expr.pseudos.animated = function(b) {
        return a.grep(a.timers, function(a) {
            return b === a.elem
        }).length
    }
    ,
    a.offset = {
        setOffset: function(e, b, o) {
            var g, h, i, j, f, k, n, l = a.css(e, "position"), m = a(e), d = {};
            l === "static" && (e.style.position = "relative"),
            f = m.offset(),
            i = a.css(e, "top"),
            k = a.css(e, "left"),
            n = (l === "absolute" || l === "fixed") && (i + k).indexOf("auto") > -1,
            n ? (g = m.position(),
            j = g.top,
            h = g.left) : (j = parseFloat(i) || 0,
            h = parseFloat(k) || 0),
            c(b) && (b = b.call(e, o, a.extend({}, f))),
            b.top != null && (d.top = b.top - f.top + j),
            b.left != null && (d.left = b.left - f.left + h),
            "using"in b ? b.using.call(e, d) : (typeof d.top == "number" && (d.top += "px"),
            typeof d.left == "number" && (d.left += "px"),
            m.css(d))
        }
    },
    a.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return e === void 0 ? this : this.each(function(b) {
                    a.offset.setOffset(this, e, b)
                });
            var c, d, b = this[0];
            if (!b)
                return;
            return b.getClientRects().length ? (c = b.getBoundingClientRect(),
            d = b.ownerDocument.defaultView,
            {
                top: c.top + d.pageYOffset,
                left: c.left + d.pageXOffset
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (!this[0])
                return;
            var b, e, f, c = this[0], d = {
                top: 0,
                left: 0
            };
            if (a.css(c, "position") === "fixed")
                e = c.getBoundingClientRect();
            else {
                for (e = this.offset(),
                f = c.ownerDocument,
                b = c.offsetParent || f.documentElement; b && (b === f.body || b === f.documentElement) && a.css(b, "position") === "static"; )
                    b = b.parentNode;
                b && b !== c && b.nodeType === 1 && (d = a(b).offset(),
                d.top += a.css(b, "borderTopWidth", !0),
                d.left += a.css(b, "borderLeftWidth", !0))
            }
            return {
                top: e.top - d.top - a.css(c, "marginTop", !0),
                left: e.left - d.left - a.css(c, "marginLeft", !0)
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b = this.offsetParent; b && a.css(b, "position") === "static"; )
                    b = b.offsetParent;
                return b || v
            })
        }
    }),
    a.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        a.fn[b] = function(a) {
            return q(this, function(b, f, e) {
                var a;
                if (w(b) ? a = b : b.nodeType === 9 && (a = b.defaultView),
                e === void 0)
                    return a ? a[c] : b[f];
                a ? a.scrollTo(d ? a.pageXOffset : e, d ? e : a.pageYOffset) : b[f] = e
            }, b, a, arguments.length)
        }
    }),
    a.each(["top", "left"], function(c, b) {
        a.cssHooks[b] = aV(f.pixelPosition, function(d, c) {
            if (c)
                return c = H(d, b),
                al.test(c) ? a(d).position()[b] + "px" : c
        })
    }),
    a.each({
        Height: "height",
        Width: "width"
    }, function(b, c) {
        a.each({
            padding: "inner" + b,
            content: c,
            "": "outer" + b
        }, function(d, e) {
            a.fn[e] = function(f, i) {
                var g = arguments.length && (d || typeof f != "boolean")
                  , h = d || (f === !0 || i === !0 ? "margin" : "border");
                return q(this, function(c, f, g) {
                    var d;
                    return w(c) ? e.indexOf("outer") === 0 ? c["inner" + b] : c.document.documentElement["client" + b] : c.nodeType === 9 ? (d = c.documentElement,
                    Math.max(c.body["scroll" + b], d["scroll" + b], c.body["offset" + b], d["offset" + b], d["client" + b])) : g === void 0 ? a.css(c, f, h) : a.style(c, f, g, h)
                }, c, g ? f : void 0, g)
            }
        })
    }),
    a.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(c, b) {
        a.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    a.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return arguments.length === 1 ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }),
    a.each(("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu").split(" "), function(c, b) {
        a.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    cc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    a.proxy = function(b, d) {
        var f, g, e;
        return typeof d == "string" && (f = b[d],
        d = b,
        b = f),
        !c(b) ? void 0 : (g = r.call(arguments, 2),
        e = function() {
            return b.apply(d || this, g.concat(r.call(arguments)))
        }
        ,
        e.guid = b.guid = b.guid || a.guid++,
        e)
    }
    ,
    a.holdReady = function(b) {
        b ? a.readyWait++ : a.ready(!0)
    }
    ,
    a.isArray = Array.isArray,
    a.parseJSON = JSON.parse,
    a.nodeName = k,
    a.isFunction = c,
    a.isWindow = w,
    a.camelCase = n,
    a.type = E,
    a.now = Date.now,
    a.isNumeric = function(b) {
        var c = a.type(b);
        return (c === "number" || c === "string") && !isNaN(b - parseFloat(b))
    }
    ,
    a.trim = function(a) {
        return a == null ? "" : (a + "").replace(cc, "")
    }
    ,
    typeof define == "function" && define.amd && define("jquery", [], function() {
        return a
    }),
    cd = d.jQuery,
    bs = d.$,
    a.noConflict = function(b) {
        return d.$ === a && (d.$ = bs),
        b && d.jQuery === a && (d.jQuery = cd),
        a
    }
    ,
    typeof cb == "undefined" && (d.jQuery = d.$ = a),
    a
}),
toggles = {
    ".search-toggle": "#search-input",
    ".lang-toggle": "#lang-menu",
    ".share-toggle": "#share-menu",
    ".nav-toggle": "#site-nav-menu"
},
$.each(toggles, function(b, a) {
    $(b).on("click", function() {
        $(a).hasClass("active") ? ($(".menu").removeClass("active"),
        $("#wrapper").removeClass("overlay")) : ($("#wrapper").addClass("overlay"),
        $(".menu").not($(a + ".menu")).removeClass("active"),
        $(a).addClass("active"),
        a == "#search-input" && $("#search-results").toggleClass("active"))
    })
}),
$(document).on("click", function(a) {
    $(a.target).is(".lang-toggle, .lang-toggle span, #lang-menu, .share-toggle, .share-toggle i, #share-menu, .search-toggle, .search-toggle i, #search-input, #search-results .mini-post, .nav-toggle, .nav-toggle i, #site-nav") === !1 && ($(".menu").removeClass("active"),
    $("#wrapper").removeClass('overlay'))
})
