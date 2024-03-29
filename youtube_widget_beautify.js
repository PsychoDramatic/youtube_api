(function () {
    var g, h = this;

    function l(a) {
        a = a.split(".");
        for (var b = h, c; c = a.shift();)
            if (null != b[c]) b = b[c];
            else return null;
        return b
    }

    function m(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function n(a) {
        return "string" == typeof a
    }

    function aa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    var p = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ba = 0;

    function ca(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function da(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }

    function q(a, b, c) {
        q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ca : da;
        return q.apply(null, arguments)
    }

    function r(a, b) {
        var c = a.split("."),
            d = h;
        c[0] in d || !d.execScript || d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());) c.length || void 0 === b ? d[e] ? d = d[e] : d = d[e] = {} : d[e] = b
    }

    function t(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.A = b.prototype;
        a.prototype = new c;
        a.T = function (a, c, f) {
            return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
        }
    }
    Function.prototype.bind = Function.prototype.bind || function (a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return q.apply(null, c)
        }
        return q(this, a)
    };

    function u(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var v = Array.prototype,
        ea = v.indexOf ? function (a, b, c) {
            return v.indexOf.call(a, b, c)
        } : function (a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (n(a)) return n(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        w = v.forEach ? function (a, b, c) {
            v.forEach.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        };

    function fa(a, b) {
        var c;
        t: {
            c = a.length;
            for (var d = n(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    c = e;
                    break t
                }
            c = -1
        }
        return 0 > c ? null : n(a) ? a.charAt(c) : a[c]
    }

    function ga(a) {
        return v.concat.apply(v, arguments)
    }

    function ha(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function ia(a, b, c) {
        return 2 >= arguments.length ? v.slice.call(a, b) : v.slice.call(a, b, c)
    };

    function ja(a) {
        var b = x,
            c;
        for (c in b)
            if (a.call(void 0, b[c], c, b)) return c
    };
    var y;
    t: {
        var ka = h.navigator;
        if (ka) {
            var la = ka.userAgent;
            if (la) {
                y = la;
                break t
            }
        }
        y = ""
    };
    var ma = -1 != y.indexOf("Opera") || -1 != y.indexOf("OPR"),
        z = -1 != y.indexOf("Trident") || -1 != y.indexOf("MSIE"),
        A = -1 != y.indexOf("Gecko") && -1 == y.toLowerCase().indexOf("webkit") && !(-1 != y.indexOf("Trident") || -1 != y.indexOf("MSIE")),
        na = -1 != y.toLowerCase().indexOf("webkit");

    function oa() {
        var a = h.document;
        return a ? a.documentMode : void 0
    }
    var pa = function () {
            var a = "",
                b;
            if (ma && h.opera) return a = h.opera.version, "function" == m(a) ? a() : a;
            A ? b = /rv\:([^\);]+)(\)|;)/ : z ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : na && (b = /WebKit\/(\S+)/);
            b && (a = (a = b.exec(y)) ? a[1] : "");
            return z && (b = oa(), b > parseFloat(a)) ? String(b) : a
        }(),
        qa = {};

    function ra(a) {
        if (!qa[a]) {
            for (var b = 0, c = String(pa).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var k = c[f] || "",
                    s = d[f] || "",
                    $a = RegExp("(\\d*)(\\D*)", "g"),
                    ab = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var H = $a.exec(k) || ["", "", ""],
                        I = ab.exec(s) || ["", "", ""];
                    if (0 == H[0].length && 0 == I[0].length) break;
                    b = u(0 == H[1].length ? 0 : parseInt(H[1], 10), 0 == I[1].length ? 0 : parseInt(I[1], 10)) || u(0 == H[2].length, 0 == I[2].length) ||
                        u(H[2], I[2])
                } while (0 == b)
            }
            qa[a] = 0 <= b
        }
    }
    var sa = h.document,
        ta = sa && z ? oa() || ("CSS1Compat" == sa.compatMode ? parseInt(pa, 10) : 5) : void 0;
    if (A || z) {
        var B;
        if (B = z) B = z && 9 <= ta;
        B || A && ra("1.9.1")
    }
    z && ra("9");

    function ua(a) {
        var b, c, d, e;
        b = document;
        if (b.querySelectorAll && b.querySelector && a) return b.querySelectorAll("" + (a ? "." + a : ""));
        if (a && b.getElementsByClassName) {
            var f = b.getElementsByClassName(a);
            return f
        }
        f = b.getElementsByTagName("*");
        if (a) {
            e = {};
            for (c = d = 0; b = f[c]; c++) {
                var k = b.className,
                    s;
                if (s = "function" == typeof k.split) s = 0 <= ea(k.split(/\s+/), a);
                s && (e[d++] = b)
            }
            e.length = d;
            return e
        }
        return f
    }

    function va(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    };

    function wa(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }

    function xa() {}

    function C(a, b, c) {
        switch (typeof b) {
        case "string":
            ya(b, c);
            break;
        case "number":
            c.push(isFinite(b) && !isNaN(b) ? b : "null");
            break;
        case "boolean":
            c.push(b);
            break;
        case "undefined":
            c.push("null");
            break;
        case "object":
            if (null == b) {
                c.push("null");
                break
            }
            if ("array" == m(b)) {
                var d = b.length;
                c.push("[");
                for (var e = "", f = 0; f < d; f++) c.push(e), C(a, b[f], c), e = ",";
                c.push("]");
                break
            }
            c.push("{");
            d = "";
            for (e in b) Object.prototype.hasOwnProperty.call(b, e) && (f = b[e], "function" != typeof f && (c.push(d), ya(e, c), c.push(":"), C(a, f, c), d = ","));
            c.push("}");
            break;
        case "function":
            break;
        default:
            throw Error("Unknown type: " + typeof b);
        }
    }
    var D = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        za = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

    function ya(a, b) {
        b.push('"', a.replace(za, function (a) {
            if (a in D) return D[a];
            var b = a.charCodeAt(0),
                e = "\\u";
            16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
            return D[a] = e + b.toString(16)
        }), '"')
    };

    function E() {}
    E.prototype.g = !1;
    E.prototype.dispose = function () {
        this.g || (this.g = !0, this.v())
    };
    E.prototype.v = function () {
        if (this.h)
            for (; this.h.length;) this.h.shift()()
    };

    function F() {
        this.a = [];
        this.b = {}
    }
    t(F, E);
    g = F.prototype;
    g.G = 1;
    g.p = 0;
    g.subscribe = function (a, b, c) {
        var d = this.b[a];
        d || (d = this.b[a] = []);
        var e = this.G;
        this.a[e] = a;
        this.a[e + 1] = b;
        this.a[e + 2] = c;
        this.G = e + 3;
        d.push(e);
        return e
    };

    function Aa(a, b, c) {
        var d = G;
        if (a = d.b[a]) {
            var e = d.a;
            (a = fa(a, function (a) {
                return e[a + 1] == b && e[a + 2] == c
            })) && Ba(d, a)
        }
    }

    function Ba(a, b) {
        if (0 != a.p) a.d || (a.d = []), a.d.push(b);
        else {
            var c = a.a[b];
            if (c) {
                if (c = a.b[c]) {
                    var d = ea(c, b);
                    0 <= d && v.splice.call(c, d, 1)
                }
                delete a.a[b];
                delete a.a[b + 1];
                delete a.a[b + 2]
            }
        }
    }
    g.H = function (a, b) {
        var c = this.b[a];
        if (c) {
            this.p++;
            for (var d = ia(arguments, 1), e = 0, f = c.length; e < f; e++) {
                var k = c[e];
                this.a[k + 1].apply(this.a[k + 2], d)
            }
            this.p--;
            if (this.d && 0 == this.p)
                for (; c = this.d.pop();) Ba(this, c);
            return 0 != e
        }
        return !1
    };
    g.v = function () {
        F.A.v.call(this);
        delete this.a;
        delete this.b;
        delete this.d
    };
    var Ca = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

    function Da(a) {
        if (J) {
            J = !1;
            var b = h.location;
            if (b) {
                var c = b.href;
                if (c && (c = (c = Da(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname) throw J = !0, Error();
            }
        }
        return a.match(Ca)
    }
    var J = na;

    function Ea(a, b, c) {
        if ("array" == m(b))
            for (var d = 0; d < b.length; d++) Ea(a, String(b[d]), c);
        else null != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
    }
    var Fa = /#|$/;
    var Ga = {};

    function Ha(a) {
        return Ga[a] || (Ga[a] = String(a).replace(/\-([a-z])/g, function (a, c) {
            return c.toUpperCase()
        }))
    };
    var K = l("yt.dom.getNextId_");
    if (!K) {
        K = function () {
            return ++Ia
        };
        r("yt.dom.getNextId_", K);
        var Ia = 0
    };
    var L = window.yt && window.yt.config_ || {};
    r("yt.config_", L);
    r("yt.tokens_", window.yt && window.yt.tokens_ || {});
    r("yt.msgs_", window.yt && window.yt.msgs_ || {});

    function Ja(a) {
        var b = arguments;
        if (1 < b.length) {
            var c = b[0];
            L[c] = b[1]
        } else
            for (c in b = b[0], b) L[c] = b[c]
    }

    function Ka(a) {
        "function" == m(a) && (a = La(a));
        return window.setInterval(a, 250)
    }

    function La(a) {
        return a && window.yterr ? function () {
            try {
                return a.apply(this, arguments)
            } catch (b) {
                var c = b;
                if (window && window.yterr) {
                    var d = l("yt.www.errors.log");
                    d ? d(c, void 0) : (d = ("ERRORS" in L ? L.ERRORS : void 0) || [], d.push([c, void 0]), Ja("ERRORS", d))
                }
                throw b;
            }
        } : a
    };

    function M(a) {
        if (a = a || window.event) {
            for (var b in a) b in Ma || (this[b] = a[b]);
            (b = a.target || a.srcElement) && 3 == b.nodeType && (b = b.parentNode);
            this.target = b;
            if (b = a.relatedTarget) try {
                b = b.nodeName && b
            } catch (c) {
                b = null
            } else "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
            this.relatedTarget = b;
            this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
            this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
            this.keyCode = a.keyCode ? a.keyCode : a.which;
            this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode :
                0);
            this.altKey = a.altKey;
            this.ctrlKey = a.ctrlKey;
            this.shiftKey = a.shiftKey;
            "MozMousePixelScroll" == this.type ? (this.wheelDeltaX = a.axis == a.HORIZONTAL_AXIS ? a.detail : 0, this.wheelDeltaY = a.axis == a.HORIZONTAL_AXIS ? 0 : a.detail) : window.opera ? (this.wheelDeltaX = 0, this.wheelDeltaY = a.detail) : 0 == a.wheelDelta % 120 ? "WebkitTransform" in document.documentElement.style ? window.chrome && 0 == navigator.platform.indexOf("Mac") ? (this.wheelDeltaX = a.wheelDeltaX / -30, this.wheelDeltaY = a.wheelDeltaY / -30) : (this.wheelDeltaX = a.wheelDeltaX /
                -1.2, this.wheelDeltaY = a.wheelDeltaY / -1.2) : (this.wheelDeltaX = 0, this.wheelDeltaY = a.wheelDelta / -1.6) : (this.wheelDeltaX = a.wheelDeltaX / -3, this.wheelDeltaY = a.wheelDeltaY / -3)
        }
    }
    g = M.prototype;
    g.type = "";
    g.target = null;
    g.relatedTarget = null;
    g.currentTarget = null;
    g.data = null;
    g.keyCode = 0;
    g.charCode = 0;
    g.altKey = !1;
    g.ctrlKey = !1;
    g.shiftKey = !1;
    g.clientX = 0;
    g.clientY = 0;
    g.wheelDeltaX = 0;
    g.wheelDeltaY = 0;
    var Ma = {
        stopImmediatePropagation: 1,
        stopPropagation: 1,
        preventMouseEvent: 1,
        preventManipulation: 1,
        preventDefault: 1,
        layerX: 1,
        layerY: 1,
        scale: 1,
        rotation: 1
    };
    var x = l("yt.events.listeners_") || {};
    r("yt.events.listeners_", x);
    var Na = l("yt.events.counter_") || {
        count: 0
    };
    r("yt.events.counter_", Na);

    function Oa(a, b, c) {
        return ja(function (d) {
            return d[0] == a && d[1] == b && d[2] == c && !1 == d[4]
        })
    }

    function Pa(a, b, c) {
        if (a && (a.addEventListener || a.attachEvent)) {
            var d = Oa(a, b, c);
            if (!d) {
                var d = ++Na.count + "",
                    e = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in document),
                    f;
                f = e ? function (d) {
                    d = new M(d);
                    if (!va(d.relatedTarget, function (b) {
                        return b == a
                    })) return d.currentTarget = a, d.type = b, c.call(a, d)
                } : function (b) {
                    b = new M(b);
                    b.currentTarget = a;
                    return c.call(a, b)
                };
                f = La(f);
                x[d] = [a, b, c, f, !1];
                a.addEventListener ? "mouseenter" == b && e ? a.addEventListener("mouseover", f, !1) : "mouseleave" == b && e ? a.addEventListener("mouseout",
                    f, !1) : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style ? a.addEventListener("MozMousePixelScroll", f, !1) : a.addEventListener(b, f, !1) : a.attachEvent("on" + b, f)
            }
        }
    }

    function Qa(a) {
        a && ("string" == typeof a && (a = [a]), w(a, function (a) {
            if (a in x) {
                var c = x[a],
                    d = c[0],
                    e = c[1],
                    f = c[3],
                    c = c[4];
                d.removeEventListener ? d.removeEventListener(e, f, c) : d.detachEvent && d.detachEvent("on" + e, f);
                delete x[a]
            }
        }))
    };

    function Ra(a) {
        var b = [],
            c;
        for (c in a) Ea(c, a[c], b);
        b[0] = "";
        return b.join("")
    };
    var N = {},
        O = [],
        G = new F,
        Sa = {};

    function Ta() {
        w(O, function (a) {
            a()
        })
    }

    function Ua(a) {
        var b = ha(document.getElementsByTagName("yt:" + a));
        a = "yt-" + a;
        var c = document;
        a = c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : ua(a);
        a = ha(a);
        return ga(b, a)
    }

    function P(a, b) {
        return "yt:" == a.tagName.toLowerCase().substr(0, 3) ? a.getAttribute(b) : a.dataset ? a.dataset[Ha(b)] : a.getAttribute("data-" + b)
    }

    function Va(a, b) {
        G.H.apply(G, arguments)
    };

    function Q(a, b) {
        this.b = b;
        this.o = this.a = null;
        this.s = this[p] || (this[p] = ++ba);
        this.d = 0;
        this.u = !1;
        this.t = [];
        this.h = this.g = null;
        this.D = {};
        var c;
        c = document;
        if (c = n(a) ? c.getElementById(a) : a) {
            if ("iframe" != c.tagName.toLowerCase()) {
                var d = Wa(this, c);
                this.o = c;
                var e = c.parentNode;
                e && e.replaceChild(d, c);
                c = d
            }
            this.a = c;
            this.a.id || (d = c = this.a, d = d[p] || (d[p] = ++ba), c.id = "widget" + d);
            N[this.a.id] = this;
            if (window.postMessage) {
                this.g = new F;
                Xa(this);
                c = R(this.b, "events");
                for (var f in c) c.hasOwnProperty(f) && this.addEventListener(f,
                    c[f]);
                for (var k in Sa) Ya(this, k)
            }
        }
    }
    g = Q.prototype;
    g.P = function (a, b) {
        this.a.width = a;
        this.a.height = b;
        return this
    };
    g.O = function () {
        return this.a
    };
    g.I = function (a) {
        this.j(a.event, a)
    };
    g.addEventListener = function (a, b) {
        var c = b;
        "string" == typeof b && (c = function () {
            window[b].apply(window, arguments)
        });
        this.g.subscribe(a, c);
        Za(this, a);
        return this
    };

    function Ya(a, b) {
        var c = b.split(".");
        if (2 != !c.length) {
            var d = c[1];
            a.h == c[0] && Za(a, d)
        }
    }
    g.destroy = function () {
        this.a.id && (N[this.a.id] = null);
        var a = this.g;
        a && "function" == typeof a.dispose && a.dispose();
        if (this.o) {
            var a = this.a,
                b = a.parentNode;
            b && b.replaceChild(this.o, a)
        } else(a = this.a) && a.parentNode && a.parentNode.removeChild(a);
        S && (S[this.s] = null);
        this.b = null;
        var a = this.a,
            c;
        for (c in x) x[c][0] == a && Qa(c);
        this.o = this.a = null
    };
    g.q = function () {
        return {}
    };

    function T(a, b, c) {
        c = c || [];
        c = Array.prototype.slice.call(c);
        b = {
            event: "command",
            func: b,
            args: c
        };
        a.u ? a.B(b) : a.t.push(b)
    }
    g.j = function (a, b) {
        if (!this.g.g) {
            var c = {
                target: this,
                data: b
            };
            this.g.H(a, c);
            this.h && Va(this.h + "." + a, c)
        }
    };

    function Wa(a, b) {
        for (var c = document.createElement("iframe"), d = b.attributes, e = 0, f = d.length; e < f; e++) {
            var k = d[e].value;
            null != k && "" != k && "null" != k && c.setAttribute(d[e].name, k)
        }
        c.setAttribute("frameBorder", 0);
        c.setAttribute("allowfullscreen", 1);
        c.setAttribute("title", "YouTube " + R(a.b, "title"));
        (d = R(a.b, "width")) && c.setAttribute("width", d);
        (d = R(a.b, "height")) && c.setAttribute("height", d);
        var s = a.q();
        s.enablejsapi = window.postMessage ? 1 : 0;
        window.location.host && (s.origin = window.location.protocol + "//" + window.location.host);
        window.location.href && w(["debugjs", "debugcss"], function (a) {
            var b;
            b = window.location.href;
            var c = b.search(Fa),
                d;
            i: {
                d = 0;
                for (var e = a.length; 0 <= (d = b.indexOf(a, d)) && d < c;) {
                    var f = b.charCodeAt(d - 1);
                    if (38 == f || 63 == f)
                        if (f = b.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break i;
                    d += e + 1
                }
                d = -1
            }
            if (0 > d) b = null;
            else {
                e = b.indexOf("&", d);
                if (0 > e || e > c) e = c;
                d += a.length + 1;
                b = decodeURIComponent(b.substr(d, e - d).replace(/\+/g, " "))
            }
            null === b || (s[a] = b)
        });
        c.src = R(a.b, "host") + a.C() + "?" + Ra(s);
        return c
    }
    g.F = function () {
        this.a && this.a.contentWindow ? this.B({
            event: "listening"
        }) : window.clearInterval(this.d)
    };

    function Xa(a) {
        bb(a.b, a, a.s);
        a.d = Ka(q(a.F, a));
        Pa(a.a, "load", q(function () {
            window.clearInterval(this.d);
            this.d = Ka(q(this.F, this))
        }, a))
    }

    function Za(a, b) {
        a.D[b] || (a.D[b] = !0, T(a, "addEventListener", [b]))
    }
    g.B = function (a) {
        a.id = this.s;
        var b = [];
        C(new xa, a, b);
        a = b.join("");
        var b = this.b,
            c, d = Da(this.a.src);
        c = d[1];
        var e = d[2],
            f = d[3],
            d = d[4],
            k = "";
        c && (k += c + ":");
        f && (k += "//", e && (k += e + "@"), k += f, d && (k += ":" + d));
        c = k;
        b.a && 0 == c.indexOf("http:") && (c = c.replace("http:", "https:"));
        this.a.contentWindow.postMessage(a, c)
    };
    var cb = "StopIteration" in h ? h.StopIteration : Error("StopIteration");

    function U() {}
    U.prototype.next = function () {
        throw cb;
    };
    U.prototype.b = function () {
        return this
    };
    var db = "corp.google.com googleplex.com youtube.com youtube-nocookie.com prod.google.com sandbox.google.com docs.google.com drive.google.com mail.google.com plus.google.com play.google.com googlevideo.com 101epmpngvqtgfsf73utp3aomcvh4be6-a-hangout-opensocial.googleusercontent.com mb33edaaot4tnevadfqhve4857kpq1rs-a-hangout-opensocial.googleusercontent.com ot5106nq9r49sc62k7h52rtfngv5j94j-a-hangout-opensocial.googleusercontent.com".split(" "),
        eb = "";

    function fb() {}
    new fb;
    new fb;
    var V = y,
        V = V.toLowerCase();
    if (-1 != V.indexOf("android") && !V.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/)) {
        var gb = {
                cupcake: 1.5,
                donut: 1.6,
                eclair: 2,
                froyo: 2.2,
                gingerbread: 2.3,
                honeycomb: 3,
                "ice cream sandwich": 4,
                jellybean: 4.1
            },
            hb = [],
            ib = 0,
            jb;
        for (jb in gb) hb[ib++] = jb;
        V.match("(" + hb.join("|") + ")")
    };
    var kb;
    var lb = y,
        mb = lb.match(/\((iPad|iPhone|iPod)( Simulator)?;/);
    if (!mb || 2 > mb.length) kb = void 0;
    else {
        var nb = lb.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d_\d)[_ ]/);
        kb = nb && 6 == nb.length ? Number(nb[5].replace("_", ".")) : 0
    }
    0 <= kb && 0 <= y.search("Safari") && y.search("Version");
    var ob = l("yt.net.ping.workerUrl_") || null;
    r("yt.net.ping.workerUrl_", ob);

    function pb() {};

    function qb() {}
    t(qb, pb);

    function W(a) {
        this.a = a
    }
    t(W, qb);
    W.prototype.isAvailable = function () {
        if (!this.a) return !1;
        try {
            return this.a.setItem("__sak", "1"), this.a.removeItem("__sak"), !0
        } catch (a) {
            return !1
        }
    };
    W.prototype.b = function (a) {
        var b = 0,
            c = this.a,
            d = new U;
        d.next = function () {
            if (b >= c.length) throw cb;
            var d;
            d = c.key(b++);
            if (a) return d;
            d = c.getItem(d);
            if (!n(d)) throw "Storage mechanism: Invalid value was encountered";
            return d
        };
        return d
    };
    W.prototype.key = function (a) {
        return this.a.key(a)
    };

    function rb() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {}
        this.a = a
    }
    t(rb, W);

    function sb() {
        var a = null;
        try {
            a = window.sessionStorage || null
        } catch (b) {}
        this.a = a
    }
    t(sb, W);
    (new rb).isAvailable();
    (new sb).isAvailable();

    function tb(a) {
        return (0 == a.search("cue") || 0 == a.search("load")) && "loadModule" != a
    }

    function ub(a) {
        return 0 == a.search("get") || 0 == a.search("is")
    };

    function X(a) {
        this.b = a || {};
        this.defaults = {};
        // this.defaults.host = "http://www.youtube.com";
        this.defaults.host = "https://youtube.googleapis.com/v/";
        this.defaults.title = "";
        this.a = !1;
        a = document.getElementById("www-widgetapi-script");
        if (this.a = !!("https:" == document.location.protocol || a && 0 == a.src.indexOf("https:"))) {
            a = [this.b, window.YTConfig || {},
                this.defaults
            ];
            for (var b = 0; b < a.length; b++) a[b].host && (a[b].host = a[b].host.replace("http://", "https://"))
        }
    }
    var S = null;

    function R(a, b) {
        for (var c = [a.b, window.YTConfig || {},
            a.defaults
        ], d = 0; d < c.length; d++) {
            var e = c[d][b];
            if (void 0 != e) return e
        }
        return null
    }

    function bb(a, b, c) {
        S || (S = {}, Pa(window, "message", q(a.d, a)));
        S[c] = b
    }
    X.prototype.d = function (a) {
        var b;
        (b = a.origin == R(this, "host")) || ((b = a.origin) && b == eb ? b = !0 : (new RegExp("^(https?:)?//([a-z0-9-]{1,63}\\.)*(" + db.join("|").replace(/\./g, ".") + ")(:[0-9]+)?([/?#]|$)", "i")).test(b) ? (eb = b, b = !0) : b = !1);
        if (b) {
            var c;
            try {
                c = wa(a.data)
            } catch (d) {
                return
            }
            if (a = S[c.id]) a.u = !0, a.u && (w(a.t, a.B, a), a.t.length = 0), a.I(c)
        }
    };

    function vb(a) {
        X.call(this, a);
        this.defaults.title = "video player";
        this.defaults.videoId = "";
        this.defaults.width = 640;
        this.defaults.height = 360
    }
    t(vb, X);

    function Y(a, b) {
        Q.call(this, a, new vb(b));
        this.h = "player";
        this.k = {};
        this.i = {}
    }
    t(Y, Q);

    function wb(a) {
        if ("iframe" != a.tagName.toLowerCase()) {
            var b = P(a, "videoid");
            if (b) {
                var c = P(a, "width"),
                    d = P(a, "height");
                new Y(a, {
                    videoId: b,
                    width: c,
                    height: d
                })
            }
        }
    }
    g = Y.prototype;
    g.C = function () {
        //return "/embed/" + R(this.b, "videoId")
        return R(this.b, "videoId")
    };
    g.q = function () {
        var a;
        if (R(this.b, "playerVars")) {
            a = R(this.b, "playerVars");
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            a = b
        } else a = {};
        return a
    };
    g.I = function (a) {
        var b = a.event;
        a = a.info;
        switch (b) {
        case "apiInfoDelivery":
            if (aa(a))
                for (var c in a) this.i[c] = a[c];
            break;
        case "infoDelivery":
            xb(this, a);
            break;
        case "initialDelivery":
            window.clearInterval(this.d);
            this.k = {};
            this.i = {};
            yb(this, a.apiInterface);
            xb(this, a);
            break;
        default:
            this.j(b, a)
        }
    };

    function xb(a, b) {
        if (aa(b))
            for (var c in b) a.k[c] = b[c]
    }

    function yb(a, b) {
        w(b, function (a) {
            this[a] || (tb(a) ? this[a] = function () {
                this.k = {};
                this.i = {};
                T(this, a, arguments);
                return this
            } : ub(a) ? this[a] = function () {
                var b = 0;
                0 == a.search("get") ? b = 3 : 0 == a.search("is") && (b = 2);
                return this.k[a.charAt(b).toLowerCase() + a.substr(b + 1)]
            } : this[a] = function () {
                T(this, a, arguments);
                return this
            })
        }, a)
    }
    g.S = function () {
        var a = this.a.cloneNode(!1),
            b = this.k.videoData,
            c = R(this.b, "host");
        //a.src = b && b.video_id ? c + "/embed/" + b.video_id : a.src;
        a.src = b && b.video_id ? c + b.video_id : a.src;
        b = document.createElement("div");
        b.appendChild(a);
        return b.innerHTML
    };
    g.R = function (a) {
        return this.i.namespaces ? a ? this.i[a].options || [] : this.i.namespaces || [] : []
    };
    g.Q = function (a, b) {
        if (this.i.namespaces && a && b) return this.i[a][b]
    };

    function zb(a) {
        X.call(this, a);
        this.defaults.title = "Thumbnail";
        this.defaults.videoId = "";
        this.defaults.width = 120;
        this.defaults.height = 68
    }
    t(zb, X);

    function Z(a, b) {
        Q.call(this, a, new zb(b));
        this.h = "thumbnail"
    }
    t(Z, Q);

    function Ab(a) {
        if ("iframe" != a.tagName.toLowerCase()) {
            var b = P(a, "videoid");
            if (b) {
                b = {
                    videoId: b,
                    events: {}
                };
                b.width = P(a, "width");
                b.height = P(a, "height");
                b.thumbWidth = P(a, "thumb-width");
                b.thumbHeight = P(a, "thumb-height");
                b.thumbAlign = P(a, "thumb-align");
                var c = P(a, "onclick");
                c && (b.events.onClick = c);
                new Z(a, b)
            }
        }
    }
    Z.prototype.C = function () {
        //return "/embed/" + R(this.b, "videoId")
        return R(this.b, "videoId")
    };
    Z.prototype.q = function () {
        return {
            player: 0,
            thumb_width: R(this.b, "thumbWidth"),
            thumb_height: R(this.b, "thumbHeight"),
            thumb_align: R(this.b, "thumbAlign")
        }
    };
    Z.prototype.j = function (a, b) {
        Z.A.j.call(this, a, b ? b.info : void 0)
    };

    function Bb(a) {
        X.call(this, a);
        //this.defaults.host = "https://www.youtube.com";
        // this.defaults.host = "https://youtube.googleapis.com/v/";
        this.defaults.host = "http://localhost:8080";
        this.defaults.title = "upload widget";
        this.defaults.width = 640;
        this.defaults.height = 0.67 * R(this, "width")
    }
    t(Bb, X);

    function $(a, b) {
        Q.call(this, a, new Bb(b))
    }
    t($, Q);
    g = $.prototype;
    g.C = function () {
        return "/upload_embed"
    };
    g.q = function () {
        var a = {},
            b = R(this.b, "webcamOnly");
        null != b && (a.webcam_only = b);
        return a
    };
    g.j = function (a, b) {
        $.A.j.call(this, a, b);
        "onApiReady" == a && T(this, "hostWindowReady")
    };
    g.J = function (a) {
        T(this, "setVideoDescription", arguments)
    };
    g.L = function (a) {
        T(this, "setVideoKeywords", arguments)
    };
    g.M = function (a) {
        T(this, "setVideoPrivacy", arguments)
    };
    g.K = function (a) {
        T(this, "setVideoDraftPrivacy", arguments)
    };
    g.N = function (a) {
        T(this, "setVideoTitle", arguments)
    };
    r("YT.PlayerState.UNSTARTED", -1);
    r("YT.PlayerState.ENDED", 0);
    r("YT.PlayerState.PLAYING", 1);
    r("YT.PlayerState.PAUSED", 2);
    r("YT.PlayerState.BUFFERING", 3);
    r("YT.PlayerState.CUED", 5);
    r("YT.UploadWidgetEvent.API_READY", "onApiReady");
    r("YT.UploadWidgetEvent.UPLOAD_SUCCESS", "onUploadSuccess");
    r("YT.UploadWidgetEvent.PROCESSING_COMPLETE", "onProcessingComplete");
    r("YT.UploadWidgetEvent.STATE_CHANGE", "onStateChange");
    r("YT.UploadWidgetState.IDLE", 0);
    r("YT.UploadWidgetState.PENDING", 1);
    r("YT.UploadWidgetState.ERROR", 2);
    r("YT.UploadWidgetState.PLAYBACK", 3);
    r("YT.UploadWidgetState.RECORDING", 4);
    r("YT.UploadWidgetState.STOPPED", 5);
    r("YT.get", function (a) {
        return N[a]
    });
    r("YT.scan", Ta);
    r("YT.subscribe", function (a, b, c) {
        G.subscribe(a, b, c);
        Sa[a] = !0;
        for (var d in N) Ya(N[d], a)
    });
    r("YT.unsubscribe", function (a, b, c) {
        Aa(a, b, c)
    });
    r("YT.Player", Y);
    r("YT.Thumbnail", Z);
    r("YT.UploadWidget", $);
    Q.prototype.destroy = Q.prototype.destroy;
    Q.prototype.setSize = Q.prototype.P;
    Q.prototype.getIframe = Q.prototype.O;
    Q.prototype.addEventListener = Q.prototype.addEventListener;
    Y.prototype.getVideoEmbedCode = Y.prototype.S;
    Y.prototype.getOptions = Y.prototype.R;
    Y.prototype.getOption = Y.prototype.Q;
    $.prototype.setVideoDescription = $.prototype.J;
    $.prototype.setVideoKeywords = $.prototype.L;
    $.prototype.setVideoPrivacy = $.prototype.M;
    $.prototype.setVideoTitle = $.prototype.N;
    $.prototype.setVideoDraftPrivacy = $.prototype.K;
    O.push(function () {
        var a = Ua("player");
        w(a, wb)
    });
    O.push(function () {
        var a = Ua("thumbnail");
        w(a, Ab)
    });
    YTConfig.parsetags && "onload" != YTConfig.parsetags || Ta();
    var Cb = l("onYTReady");
    Cb && Cb();
    var Db = l("onYouTubeIframeAPIReady");
    Db && Db();
    var Eb = l("onYouTubePlayerAPIReady");
    Eb && Eb();
})();