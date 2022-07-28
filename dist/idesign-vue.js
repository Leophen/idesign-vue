import { defineComponent as hn, computed as z, resolveComponent as Wt, openBlock as K, createElementBlock as en, normalizeClass as ue, unref as vn, createBlock as $r, createCommentVNode as Sn, renderSlot as xn, getCurrentInstance as Vv, normalizeStyle as ye, createVNode as X, provide as $t, inject as Nt, ref as cn, onMounted as Ot, onUnmounted as wu, reactive as yu, watchEffect as Wr, createElementVNode as ut, Transition as Bt, withCtx as ze, mergeProps as jv, isVNode as ea, Fragment as n_, createTextVNode as ta, toDisplayString as xu, watch as Et, cloneVNode as na, Teleport as e_ } from "vue";
const t_ = /* @__PURE__ */ hn({
  __name: "button",
  props: {
    active: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    shape: { default: "round" },
    size: { default: "medium" },
    type: { default: "primary" },
    variant: { default: "base" },
    icon: null
  },
  emits: ["click"],
  setup(a, { emit: y }) {
    const u = (S) => {
      a.disabled || y("click", S);
    }, m = z(() => [
      "i-button",
      `i-button--type-${a.type}`,
      a.variant !== "base" && `i-button--variant-${a.variant}`,
      a.size !== "medium" && `i-button--size-${a.size}`,
      a.shape !== "round" && `i-button--shape-${a.shape}`,
      a.active && "i-button-active",
      a.disabled && "i-button-disabled"
    ]);
    return (S, x) => {
      const C = Wt("i-icon");
      return K(), en("button", {
        class: ue(vn(m)),
        onClick: u
      }, [
        a.icon ? (K(), $r(C, {
          key: 0,
          class: "i-button-icon",
          name: a.icon
        }, null, 8, ["name"])) : Sn("", !0),
        xn(S.$slots, "default")
      ], 2);
    };
  }
});
const ru = {
  install(a) {
    a.component("i-button", t_);
  }
};
var Rt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, mu = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(a, y) {
  (function() {
    var u, m = "4.17.21", S = 200, x = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", C = "Expected a function", L = "Invalid `variable` option passed into `_.template`", tn = "__lodash_hash_undefined__", R = 500, w = "__lodash_placeholder__", E = 1, Z = 2, J = 4, rn = 1, dn = 2, un = 1, bn = 2, Gn = 4, $ = 8, q = 16, b = 32, D = 64, Q = 128, Tn = 256, Mn = 512, Vn = 30, We = "...", Mt = 800, Pt = 16, lt = 1, la = 2, oa = 3, Oe = 1 / 0, xe = 9007199254740991, aa = 17976931348623157e292, Ft = 0 / 0, le = 4294967295, fa = le - 1, sa = le >>> 1, ca = [
      ["ary", Q],
      ["bind", un],
      ["bindKey", bn],
      ["curry", $],
      ["curryRight", q],
      ["flip", Mn],
      ["partial", b],
      ["partialRight", D],
      ["rearg", Tn]
    ], Ge = "[object Arguments]", Dt = "[object Array]", ha = "[object AsyncFunction]", ot = "[object Boolean]", at = "[object Date]", da = "[object DOMException]", Ut = "[object Error]", Ht = "[object Function]", bu = "[object GeneratorFunction]", jn = "[object Map]", ft = "[object Number]", ga = "[object Null]", se = "[object Object]", Cu = "[object Promise]", va = "[object Proxy]", st = "[object RegExp]", ne = "[object Set]", ct = "[object String]", zt = "[object Symbol]", _a = "[object Undefined]", ht = "[object WeakMap]", pa = "[object WeakSet]", dt = "[object ArrayBuffer]", ke = "[object DataView]", Mr = "[object Float32Array]", Pr = "[object Float64Array]", Fr = "[object Int8Array]", Dr = "[object Int16Array]", Ur = "[object Int32Array]", Hr = "[object Uint8Array]", zr = "[object Uint8ClampedArray]", Gr = "[object Uint16Array]", kr = "[object Uint32Array]", ma = /\b__p \+= '';/g, wa = /\b(__p \+=) '' \+/g, ya = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Au = /&(?:amp|lt|gt|quot|#39);/g, Su = /[&<>"']/g, xa = RegExp(Au.source), ba = RegExp(Su.source), Ca = /<%-([\s\S]+?)%>/g, Aa = /<%([\s\S]+?)%>/g, Tu = /<%=([\s\S]+?)%>/g, Sa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ta = /^\w*$/, La = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Yr = /[\\^$.*+?()[\]{}|]/g, Ia = RegExp(Yr.source), Xr = /^\s+/, Ra = /\s/, Ea = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Wa = /\{\n\/\* \[wrapped with (.+)\] \*/, Oa = /,? & /, Ba = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, $a = /[()=,{}\[\]\/\s]/, Na = /\\(\\)?/g, Ma = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Lu = /\w*$/, Pa = /^[-+]0x[0-9a-f]+$/i, Fa = /^0b[01]+$/i, Da = /^\[object .+?Constructor\]$/, Ua = /^0o[0-7]+$/i, Ha = /^(?:0|[1-9]\d*)$/, za = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Gt = /($^)/, Ga = /['\n\r\u2028\u2029\\]/g, kt = "\\ud800-\\udfff", ka = "\\u0300-\\u036f", Ya = "\\ufe20-\\ufe2f", Xa = "\\u20d0-\\u20ff", Iu = ka + Ya + Xa, Ru = "\\u2700-\\u27bf", Eu = "a-z\\xdf-\\xf6\\xf8-\\xff", qa = "\\xac\\xb1\\xd7\\xf7", Ka = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Za = "\\u2000-\\u206f", Ja = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Wu = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ou = "\\ufe0e\\ufe0f", Bu = qa + Ka + Za + Ja, qr = "['\u2019]", Qa = "[" + kt + "]", $u = "[" + Bu + "]", Yt = "[" + Iu + "]", Nu = "\\d+", Va = "[" + Ru + "]", Mu = "[" + Eu + "]", Pu = "[^" + kt + Bu + Nu + Ru + Eu + Wu + "]", Kr = "\\ud83c[\\udffb-\\udfff]", ja = "(?:" + Yt + "|" + Kr + ")", Fu = "[^" + kt + "]", Zr = "(?:\\ud83c[\\udde6-\\uddff]){2}", Jr = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ye = "[" + Wu + "]", Du = "\\u200d", Uu = "(?:" + Mu + "|" + Pu + ")", nf = "(?:" + Ye + "|" + Pu + ")", Hu = "(?:" + qr + "(?:d|ll|m|re|s|t|ve))?", zu = "(?:" + qr + "(?:D|LL|M|RE|S|T|VE))?", Gu = ja + "?", ku = "[" + Ou + "]?", ef = "(?:" + Du + "(?:" + [Fu, Zr, Jr].join("|") + ")" + ku + Gu + ")*", tf = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rf = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Yu = ku + Gu + ef, uf = "(?:" + [Va, Zr, Jr].join("|") + ")" + Yu, lf = "(?:" + [Fu + Yt + "?", Yt, Zr, Jr, Qa].join("|") + ")", of = RegExp(qr, "g"), af = RegExp(Yt, "g"), Qr = RegExp(Kr + "(?=" + Kr + ")|" + lf + Yu, "g"), ff = RegExp([
      Ye + "?" + Mu + "+" + Hu + "(?=" + [$u, Ye, "$"].join("|") + ")",
      nf + "+" + zu + "(?=" + [$u, Ye + Uu, "$"].join("|") + ")",
      Ye + "?" + Uu + "+" + Hu,
      Ye + "+" + zu,
      rf,
      tf,
      Nu,
      uf
    ].join("|"), "g"), sf = RegExp("[" + Du + kt + Iu + Ou + "]"), cf = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, hf = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], df = -1, an = {};
    an[Mr] = an[Pr] = an[Fr] = an[Dr] = an[Ur] = an[Hr] = an[zr] = an[Gr] = an[kr] = !0, an[Ge] = an[Dt] = an[dt] = an[ot] = an[ke] = an[at] = an[Ut] = an[Ht] = an[jn] = an[ft] = an[se] = an[st] = an[ne] = an[ct] = an[ht] = !1;
    var on = {};
    on[Ge] = on[Dt] = on[dt] = on[ke] = on[ot] = on[at] = on[Mr] = on[Pr] = on[Fr] = on[Dr] = on[Ur] = on[jn] = on[ft] = on[se] = on[st] = on[ne] = on[ct] = on[zt] = on[Hr] = on[zr] = on[Gr] = on[kr] = !0, on[Ut] = on[Ht] = on[ht] = !1;
    var gf = {
      \u00C0: "A",
      \u00C1: "A",
      \u00C2: "A",
      \u00C3: "A",
      \u00C4: "A",
      \u00C5: "A",
      \u00E0: "a",
      \u00E1: "a",
      \u00E2: "a",
      \u00E3: "a",
      \u00E4: "a",
      \u00E5: "a",
      \u00C7: "C",
      \u00E7: "c",
      \u00D0: "D",
      \u00F0: "d",
      \u00C8: "E",
      \u00C9: "E",
      \u00CA: "E",
      \u00CB: "E",
      \u00E8: "e",
      \u00E9: "e",
      \u00EA: "e",
      \u00EB: "e",
      \u00CC: "I",
      \u00CD: "I",
      \u00CE: "I",
      \u00CF: "I",
      \u00EC: "i",
      \u00ED: "i",
      \u00EE: "i",
      \u00EF: "i",
      \u00D1: "N",
      \u00F1: "n",
      \u00D2: "O",
      \u00D3: "O",
      \u00D4: "O",
      \u00D5: "O",
      \u00D6: "O",
      \u00D8: "O",
      \u00F2: "o",
      \u00F3: "o",
      \u00F4: "o",
      \u00F5: "o",
      \u00F6: "o",
      \u00F8: "o",
      \u00D9: "U",
      \u00DA: "U",
      \u00DB: "U",
      \u00DC: "U",
      \u00F9: "u",
      \u00FA: "u",
      \u00FB: "u",
      \u00FC: "u",
      \u00DD: "Y",
      \u00FD: "y",
      \u00FF: "y",
      \u00C6: "Ae",
      \u00E6: "ae",
      \u00DE: "Th",
      \u00FE: "th",
      \u00DF: "ss",
      \u0100: "A",
      \u0102: "A",
      \u0104: "A",
      \u0101: "a",
      \u0103: "a",
      \u0105: "a",
      \u0106: "C",
      \u0108: "C",
      \u010A: "C",
      \u010C: "C",
      \u0107: "c",
      \u0109: "c",
      \u010B: "c",
      \u010D: "c",
      \u010E: "D",
      \u0110: "D",
      \u010F: "d",
      \u0111: "d",
      \u0112: "E",
      \u0114: "E",
      \u0116: "E",
      \u0118: "E",
      \u011A: "E",
      \u0113: "e",
      \u0115: "e",
      \u0117: "e",
      \u0119: "e",
      \u011B: "e",
      \u011C: "G",
      \u011E: "G",
      \u0120: "G",
      \u0122: "G",
      \u011D: "g",
      \u011F: "g",
      \u0121: "g",
      \u0123: "g",
      \u0124: "H",
      \u0126: "H",
      \u0125: "h",
      \u0127: "h",
      \u0128: "I",
      \u012A: "I",
      \u012C: "I",
      \u012E: "I",
      \u0130: "I",
      \u0129: "i",
      \u012B: "i",
      \u012D: "i",
      \u012F: "i",
      \u0131: "i",
      \u0134: "J",
      \u0135: "j",
      \u0136: "K",
      \u0137: "k",
      \u0138: "k",
      \u0139: "L",
      \u013B: "L",
      \u013D: "L",
      \u013F: "L",
      \u0141: "L",
      \u013A: "l",
      \u013C: "l",
      \u013E: "l",
      \u0140: "l",
      \u0142: "l",
      \u0143: "N",
      \u0145: "N",
      \u0147: "N",
      \u014A: "N",
      \u0144: "n",
      \u0146: "n",
      \u0148: "n",
      \u014B: "n",
      \u014C: "O",
      \u014E: "O",
      \u0150: "O",
      \u014D: "o",
      \u014F: "o",
      \u0151: "o",
      \u0154: "R",
      \u0156: "R",
      \u0158: "R",
      \u0155: "r",
      \u0157: "r",
      \u0159: "r",
      \u015A: "S",
      \u015C: "S",
      \u015E: "S",
      \u0160: "S",
      \u015B: "s",
      \u015D: "s",
      \u015F: "s",
      \u0161: "s",
      \u0162: "T",
      \u0164: "T",
      \u0166: "T",
      \u0163: "t",
      \u0165: "t",
      \u0167: "t",
      \u0168: "U",
      \u016A: "U",
      \u016C: "U",
      \u016E: "U",
      \u0170: "U",
      \u0172: "U",
      \u0169: "u",
      \u016B: "u",
      \u016D: "u",
      \u016F: "u",
      \u0171: "u",
      \u0173: "u",
      \u0174: "W",
      \u0175: "w",
      \u0176: "Y",
      \u0177: "y",
      \u0178: "Y",
      \u0179: "Z",
      \u017B: "Z",
      \u017D: "Z",
      \u017A: "z",
      \u017C: "z",
      \u017E: "z",
      \u0132: "IJ",
      \u0133: "ij",
      \u0152: "Oe",
      \u0153: "oe",
      \u0149: "'n",
      \u017F: "s"
    }, vf = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, _f = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, pf = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, mf = parseFloat, wf = parseInt, Xu = typeof Rt == "object" && Rt && Rt.Object === Object && Rt, yf = typeof self == "object" && self && self.Object === Object && self, Cn = Xu || yf || Function("return this")(), Vr = y && !y.nodeType && y, Be = Vr && !0 && a && !a.nodeType && a, qu = Be && Be.exports === Vr, jr = qu && Xu.process, kn = function() {
      try {
        var c = Be && Be.require && Be.require("util").types;
        return c || jr && jr.binding && jr.binding("util");
      } catch {
      }
    }(), Ku = kn && kn.isArrayBuffer, Zu = kn && kn.isDate, Ju = kn && kn.isMap, Qu = kn && kn.isRegExp, Vu = kn && kn.isSet, ju = kn && kn.isTypedArray;
    function Pn(c, g, d) {
      switch (d.length) {
        case 0:
          return c.call(g);
        case 1:
          return c.call(g, d[0]);
        case 2:
          return c.call(g, d[0], d[1]);
        case 3:
          return c.call(g, d[0], d[1], d[2]);
      }
      return c.apply(g, d);
    }
    function xf(c, g, d, T) {
      for (var N = -1, V = c == null ? 0 : c.length; ++N < V; ) {
        var mn = c[N];
        g(T, mn, d(mn), c);
      }
      return T;
    }
    function Yn(c, g) {
      for (var d = -1, T = c == null ? 0 : c.length; ++d < T && g(c[d], d, c) !== !1; )
        ;
      return c;
    }
    function bf(c, g) {
      for (var d = c == null ? 0 : c.length; d-- && g(c[d], d, c) !== !1; )
        ;
      return c;
    }
    function nl(c, g) {
      for (var d = -1, T = c == null ? 0 : c.length; ++d < T; )
        if (!g(c[d], d, c))
          return !1;
      return !0;
    }
    function be(c, g) {
      for (var d = -1, T = c == null ? 0 : c.length, N = 0, V = []; ++d < T; ) {
        var mn = c[d];
        g(mn, d, c) && (V[N++] = mn);
      }
      return V;
    }
    function Xt(c, g) {
      var d = c == null ? 0 : c.length;
      return !!d && Xe(c, g, 0) > -1;
    }
    function ni(c, g, d) {
      for (var T = -1, N = c == null ? 0 : c.length; ++T < N; )
        if (d(g, c[T]))
          return !0;
      return !1;
    }
    function fn(c, g) {
      for (var d = -1, T = c == null ? 0 : c.length, N = Array(T); ++d < T; )
        N[d] = g(c[d], d, c);
      return N;
    }
    function Ce(c, g) {
      for (var d = -1, T = g.length, N = c.length; ++d < T; )
        c[N + d] = g[d];
      return c;
    }
    function ei(c, g, d, T) {
      var N = -1, V = c == null ? 0 : c.length;
      for (T && V && (d = c[++N]); ++N < V; )
        d = g(d, c[N], N, c);
      return d;
    }
    function Cf(c, g, d, T) {
      var N = c == null ? 0 : c.length;
      for (T && N && (d = c[--N]); N--; )
        d = g(d, c[N], N, c);
      return d;
    }
    function ti(c, g) {
      for (var d = -1, T = c == null ? 0 : c.length; ++d < T; )
        if (g(c[d], d, c))
          return !0;
      return !1;
    }
    var Af = ri("length");
    function Sf(c) {
      return c.split("");
    }
    function Tf(c) {
      return c.match(Ba) || [];
    }
    function el(c, g, d) {
      var T;
      return d(c, function(N, V, mn) {
        if (g(N, V, mn))
          return T = V, !1;
      }), T;
    }
    function qt(c, g, d, T) {
      for (var N = c.length, V = d + (T ? 1 : -1); T ? V-- : ++V < N; )
        if (g(c[V], V, c))
          return V;
      return -1;
    }
    function Xe(c, g, d) {
      return g === g ? Ff(c, g, d) : qt(c, tl, d);
    }
    function Lf(c, g, d, T) {
      for (var N = d - 1, V = c.length; ++N < V; )
        if (T(c[N], g))
          return N;
      return -1;
    }
    function tl(c) {
      return c !== c;
    }
    function rl(c, g) {
      var d = c == null ? 0 : c.length;
      return d ? ui(c, g) / d : Ft;
    }
    function ri(c) {
      return function(g) {
        return g == null ? u : g[c];
      };
    }
    function ii(c) {
      return function(g) {
        return c == null ? u : c[g];
      };
    }
    function il(c, g, d, T, N) {
      return N(c, function(V, mn, ln) {
        d = T ? (T = !1, V) : g(d, V, mn, ln);
      }), d;
    }
    function If(c, g) {
      var d = c.length;
      for (c.sort(g); d--; )
        c[d] = c[d].value;
      return c;
    }
    function ui(c, g) {
      for (var d, T = -1, N = c.length; ++T < N; ) {
        var V = g(c[T]);
        V !== u && (d = d === u ? V : d + V);
      }
      return d;
    }
    function li(c, g) {
      for (var d = -1, T = Array(c); ++d < c; )
        T[d] = g(d);
      return T;
    }
    function Rf(c, g) {
      return fn(g, function(d) {
        return [d, c[d]];
      });
    }
    function ul(c) {
      return c && c.slice(0, fl(c) + 1).replace(Xr, "");
    }
    function Fn(c) {
      return function(g) {
        return c(g);
      };
    }
    function oi(c, g) {
      return fn(g, function(d) {
        return c[d];
      });
    }
    function gt(c, g) {
      return c.has(g);
    }
    function ll(c, g) {
      for (var d = -1, T = c.length; ++d < T && Xe(g, c[d], 0) > -1; )
        ;
      return d;
    }
    function ol(c, g) {
      for (var d = c.length; d-- && Xe(g, c[d], 0) > -1; )
        ;
      return d;
    }
    function Ef(c, g) {
      for (var d = c.length, T = 0; d--; )
        c[d] === g && ++T;
      return T;
    }
    var Wf = ii(gf), Of = ii(vf);
    function Bf(c) {
      return "\\" + pf[c];
    }
    function $f(c, g) {
      return c == null ? u : c[g];
    }
    function qe(c) {
      return sf.test(c);
    }
    function Nf(c) {
      return cf.test(c);
    }
    function Mf(c) {
      for (var g, d = []; !(g = c.next()).done; )
        d.push(g.value);
      return d;
    }
    function ai(c) {
      var g = -1, d = Array(c.size);
      return c.forEach(function(T, N) {
        d[++g] = [N, T];
      }), d;
    }
    function al(c, g) {
      return function(d) {
        return c(g(d));
      };
    }
    function Ae(c, g) {
      for (var d = -1, T = c.length, N = 0, V = []; ++d < T; ) {
        var mn = c[d];
        (mn === g || mn === w) && (c[d] = w, V[N++] = d);
      }
      return V;
    }
    function Kt(c) {
      var g = -1, d = Array(c.size);
      return c.forEach(function(T) {
        d[++g] = T;
      }), d;
    }
    function Pf(c) {
      var g = -1, d = Array(c.size);
      return c.forEach(function(T) {
        d[++g] = [T, T];
      }), d;
    }
    function Ff(c, g, d) {
      for (var T = d - 1, N = c.length; ++T < N; )
        if (c[T] === g)
          return T;
      return -1;
    }
    function Df(c, g, d) {
      for (var T = d + 1; T--; )
        if (c[T] === g)
          return T;
      return T;
    }
    function Ke(c) {
      return qe(c) ? Hf(c) : Af(c);
    }
    function ee(c) {
      return qe(c) ? zf(c) : Sf(c);
    }
    function fl(c) {
      for (var g = c.length; g-- && Ra.test(c.charAt(g)); )
        ;
      return g;
    }
    var Uf = ii(_f);
    function Hf(c) {
      for (var g = Qr.lastIndex = 0; Qr.test(c); )
        ++g;
      return g;
    }
    function zf(c) {
      return c.match(Qr) || [];
    }
    function Gf(c) {
      return c.match(ff) || [];
    }
    var kf = function c(g) {
      g = g == null ? Cn : Ze.defaults(Cn.Object(), g, Ze.pick(Cn, hf));
      var d = g.Array, T = g.Date, N = g.Error, V = g.Function, mn = g.Math, ln = g.Object, fi = g.RegExp, Yf = g.String, Xn = g.TypeError, Zt = d.prototype, Xf = V.prototype, Je = ln.prototype, Jt = g["__core-js_shared__"], Qt = Xf.toString, nn = Je.hasOwnProperty, qf = 0, sl = function() {
        var n = /[^.]+$/.exec(Jt && Jt.keys && Jt.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : "";
      }(), Vt = Je.toString, Kf = Qt.call(ln), Zf = Cn._, Jf = fi("^" + Qt.call(nn).replace(Yr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), jt = qu ? g.Buffer : u, Se = g.Symbol, nr = g.Uint8Array, cl = jt ? jt.allocUnsafe : u, er = al(ln.getPrototypeOf, ln), hl = ln.create, dl = Je.propertyIsEnumerable, tr = Zt.splice, gl = Se ? Se.isConcatSpreadable : u, vt = Se ? Se.iterator : u, $e = Se ? Se.toStringTag : u, rr = function() {
        try {
          var n = De(ln, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), Qf = g.clearTimeout !== Cn.clearTimeout && g.clearTimeout, Vf = T && T.now !== Cn.Date.now && T.now, jf = g.setTimeout !== Cn.setTimeout && g.setTimeout, ir = mn.ceil, ur = mn.floor, si = ln.getOwnPropertySymbols, ns = jt ? jt.isBuffer : u, vl = g.isFinite, es = Zt.join, ts = al(ln.keys, ln), wn = mn.max, Ln = mn.min, rs = T.now, is = g.parseInt, _l = mn.random, us = Zt.reverse, ci = De(g, "DataView"), _t = De(g, "Map"), hi = De(g, "Promise"), Qe = De(g, "Set"), pt = De(g, "WeakMap"), mt = De(ln, "create"), lr = pt && new pt(), Ve = {}, ls = Ue(ci), os = Ue(_t), as = Ue(hi), fs = Ue(Qe), ss = Ue(pt), or = Se ? Se.prototype : u, wt = or ? or.valueOf : u, pl = or ? or.toString : u;
      function l(n) {
        if (gn(n) && !P(n) && !(n instanceof k)) {
          if (n instanceof qn)
            return n;
          if (nn.call(n, "__wrapped__"))
            return wo(n);
        }
        return new qn(n);
      }
      var je = function() {
        function n() {
        }
        return function(e) {
          if (!sn(e))
            return {};
          if (hl)
            return hl(e);
          n.prototype = e;
          var t = new n();
          return n.prototype = u, t;
        };
      }();
      function ar() {
      }
      function qn(n, e) {
        this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = u;
      }
      l.templateSettings = {
        escape: Ca,
        evaluate: Aa,
        interpolate: Tu,
        variable: "",
        imports: {
          _: l
        }
      }, l.prototype = ar.prototype, l.prototype.constructor = l, qn.prototype = je(ar.prototype), qn.prototype.constructor = qn;
      function k(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = le, this.__views__ = [];
      }
      function cs() {
        var n = new k(this.__wrapped__);
        return n.__actions__ = On(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = On(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = On(this.__views__), n;
      }
      function hs() {
        if (this.__filtered__) {
          var n = new k(this);
          n.__dir__ = -1, n.__filtered__ = !0;
        } else
          n = this.clone(), n.__dir__ *= -1;
        return n;
      }
      function ds() {
        var n = this.__wrapped__.value(), e = this.__dir__, t = P(n), r = e < 0, i = t ? n.length : 0, o = Sc(0, i, this.__views__), f = o.start, s = o.end, h = s - f, v = r ? s : f - 1, _ = this.__iteratees__, p = _.length, A = 0, I = Ln(h, this.__takeCount__);
        if (!t || !r && i == h && I == h)
          return Hl(n, this.__actions__);
        var O = [];
        n:
          for (; h-- && A < I; ) {
            v += e;
            for (var U = -1, B = n[v]; ++U < p; ) {
              var G = _[U], Y = G.iteratee, Hn = G.type, Wn = Y(B);
              if (Hn == la)
                B = Wn;
              else if (!Wn) {
                if (Hn == lt)
                  continue n;
                break n;
              }
            }
            O[A++] = B;
          }
        return O;
      }
      k.prototype = je(ar.prototype), k.prototype.constructor = k;
      function Ne(n) {
        var e = -1, t = n == null ? 0 : n.length;
        for (this.clear(); ++e < t; ) {
          var r = n[e];
          this.set(r[0], r[1]);
        }
      }
      function gs() {
        this.__data__ = mt ? mt(null) : {}, this.size = 0;
      }
      function vs(n) {
        var e = this.has(n) && delete this.__data__[n];
        return this.size -= e ? 1 : 0, e;
      }
      function _s(n) {
        var e = this.__data__;
        if (mt) {
          var t = e[n];
          return t === tn ? u : t;
        }
        return nn.call(e, n) ? e[n] : u;
      }
      function ps(n) {
        var e = this.__data__;
        return mt ? e[n] !== u : nn.call(e, n);
      }
      function ms(n, e) {
        var t = this.__data__;
        return this.size += this.has(n) ? 0 : 1, t[n] = mt && e === u ? tn : e, this;
      }
      Ne.prototype.clear = gs, Ne.prototype.delete = vs, Ne.prototype.get = _s, Ne.prototype.has = ps, Ne.prototype.set = ms;
      function ce(n) {
        var e = -1, t = n == null ? 0 : n.length;
        for (this.clear(); ++e < t; ) {
          var r = n[e];
          this.set(r[0], r[1]);
        }
      }
      function ws() {
        this.__data__ = [], this.size = 0;
      }
      function ys(n) {
        var e = this.__data__, t = fr(e, n);
        if (t < 0)
          return !1;
        var r = e.length - 1;
        return t == r ? e.pop() : tr.call(e, t, 1), --this.size, !0;
      }
      function xs(n) {
        var e = this.__data__, t = fr(e, n);
        return t < 0 ? u : e[t][1];
      }
      function bs(n) {
        return fr(this.__data__, n) > -1;
      }
      function Cs(n, e) {
        var t = this.__data__, r = fr(t, n);
        return r < 0 ? (++this.size, t.push([n, e])) : t[r][1] = e, this;
      }
      ce.prototype.clear = ws, ce.prototype.delete = ys, ce.prototype.get = xs, ce.prototype.has = bs, ce.prototype.set = Cs;
      function he(n) {
        var e = -1, t = n == null ? 0 : n.length;
        for (this.clear(); ++e < t; ) {
          var r = n[e];
          this.set(r[0], r[1]);
        }
      }
      function As() {
        this.size = 0, this.__data__ = {
          hash: new Ne(),
          map: new (_t || ce)(),
          string: new Ne()
        };
      }
      function Ss(n) {
        var e = xr(this, n).delete(n);
        return this.size -= e ? 1 : 0, e;
      }
      function Ts(n) {
        return xr(this, n).get(n);
      }
      function Ls(n) {
        return xr(this, n).has(n);
      }
      function Is(n, e) {
        var t = xr(this, n), r = t.size;
        return t.set(n, e), this.size += t.size == r ? 0 : 1, this;
      }
      he.prototype.clear = As, he.prototype.delete = Ss, he.prototype.get = Ts, he.prototype.has = Ls, he.prototype.set = Is;
      function Me(n) {
        var e = -1, t = n == null ? 0 : n.length;
        for (this.__data__ = new he(); ++e < t; )
          this.add(n[e]);
      }
      function Rs(n) {
        return this.__data__.set(n, tn), this;
      }
      function Es(n) {
        return this.__data__.has(n);
      }
      Me.prototype.add = Me.prototype.push = Rs, Me.prototype.has = Es;
      function te(n) {
        var e = this.__data__ = new ce(n);
        this.size = e.size;
      }
      function Ws() {
        this.__data__ = new ce(), this.size = 0;
      }
      function Os(n) {
        var e = this.__data__, t = e.delete(n);
        return this.size = e.size, t;
      }
      function Bs(n) {
        return this.__data__.get(n);
      }
      function $s(n) {
        return this.__data__.has(n);
      }
      function Ns(n, e) {
        var t = this.__data__;
        if (t instanceof ce) {
          var r = t.__data__;
          if (!_t || r.length < S - 1)
            return r.push([n, e]), this.size = ++t.size, this;
          t = this.__data__ = new he(r);
        }
        return t.set(n, e), this.size = t.size, this;
      }
      te.prototype.clear = Ws, te.prototype.delete = Os, te.prototype.get = Bs, te.prototype.has = $s, te.prototype.set = Ns;
      function ml(n, e) {
        var t = P(n), r = !t && He(n), i = !t && !r && Ee(n), o = !t && !r && !i && rt(n), f = t || r || i || o, s = f ? li(n.length, Yf) : [], h = s.length;
        for (var v in n)
          (e || nn.call(n, v)) && !(f && (v == "length" || i && (v == "offset" || v == "parent") || o && (v == "buffer" || v == "byteLength" || v == "byteOffset") || _e(v, h))) && s.push(v);
        return s;
      }
      function wl(n) {
        var e = n.length;
        return e ? n[Ci(0, e - 1)] : u;
      }
      function Ms(n, e) {
        return br(On(n), Pe(e, 0, n.length));
      }
      function Ps(n) {
        return br(On(n));
      }
      function di(n, e, t) {
        (t !== u && !re(n[e], t) || t === u && !(e in n)) && de(n, e, t);
      }
      function yt(n, e, t) {
        var r = n[e];
        (!(nn.call(n, e) && re(r, t)) || t === u && !(e in n)) && de(n, e, t);
      }
      function fr(n, e) {
        for (var t = n.length; t--; )
          if (re(n[t][0], e))
            return t;
        return -1;
      }
      function Fs(n, e, t, r) {
        return Te(n, function(i, o, f) {
          e(r, i, t(i), f);
        }), r;
      }
      function yl(n, e) {
        return n && ae(e, yn(e), n);
      }
      function Ds(n, e) {
        return n && ae(e, $n(e), n);
      }
      function de(n, e, t) {
        e == "__proto__" && rr ? rr(n, e, {
          configurable: !0,
          enumerable: !0,
          value: t,
          writable: !0
        }) : n[e] = t;
      }
      function gi(n, e) {
        for (var t = -1, r = e.length, i = d(r), o = n == null; ++t < r; )
          i[t] = o ? u : Ki(n, e[t]);
        return i;
      }
      function Pe(n, e, t) {
        return n === n && (t !== u && (n = n <= t ? n : t), e !== u && (n = n >= e ? n : e)), n;
      }
      function Kn(n, e, t, r, i, o) {
        var f, s = e & E, h = e & Z, v = e & J;
        if (t && (f = i ? t(n, r, i, o) : t(n)), f !== u)
          return f;
        if (!sn(n))
          return n;
        var _ = P(n);
        if (_) {
          if (f = Lc(n), !s)
            return On(n, f);
        } else {
          var p = In(n), A = p == Ht || p == bu;
          if (Ee(n))
            return kl(n, s);
          if (p == se || p == Ge || A && !i) {
            if (f = h || A ? {} : fo(n), !s)
              return h ? _c(n, Ds(f, n)) : vc(n, yl(f, n));
          } else {
            if (!on[p])
              return i ? n : {};
            f = Ic(n, p, s);
          }
        }
        o || (o = new te());
        var I = o.get(n);
        if (I)
          return I;
        o.set(n, f), Do(n) ? n.forEach(function(B) {
          f.add(Kn(B, e, t, B, n, o));
        }) : Po(n) && n.forEach(function(B, G) {
          f.set(G, Kn(B, e, t, G, n, o));
        });
        var O = v ? h ? $i : Bi : h ? $n : yn, U = _ ? u : O(n);
        return Yn(U || n, function(B, G) {
          U && (G = B, B = n[G]), yt(f, G, Kn(B, e, t, G, n, o));
        }), f;
      }
      function Us(n) {
        var e = yn(n);
        return function(t) {
          return xl(t, n, e);
        };
      }
      function xl(n, e, t) {
        var r = t.length;
        if (n == null)
          return !r;
        for (n = ln(n); r--; ) {
          var i = t[r], o = e[i], f = n[i];
          if (f === u && !(i in n) || !o(f))
            return !1;
        }
        return !0;
      }
      function bl(n, e, t) {
        if (typeof n != "function")
          throw new Xn(C);
        return Lt(function() {
          n.apply(u, t);
        }, e);
      }
      function xt(n, e, t, r) {
        var i = -1, o = Xt, f = !0, s = n.length, h = [], v = e.length;
        if (!s)
          return h;
        t && (e = fn(e, Fn(t))), r ? (o = ni, f = !1) : e.length >= S && (o = gt, f = !1, e = new Me(e));
        n:
          for (; ++i < s; ) {
            var _ = n[i], p = t == null ? _ : t(_);
            if (_ = r || _ !== 0 ? _ : 0, f && p === p) {
              for (var A = v; A--; )
                if (e[A] === p)
                  continue n;
              h.push(_);
            } else
              o(e, p, r) || h.push(_);
          }
        return h;
      }
      var Te = Zl(oe), Cl = Zl(_i, !0);
      function Hs(n, e) {
        var t = !0;
        return Te(n, function(r, i, o) {
          return t = !!e(r, i, o), t;
        }), t;
      }
      function sr(n, e, t) {
        for (var r = -1, i = n.length; ++r < i; ) {
          var o = n[r], f = e(o);
          if (f != null && (s === u ? f === f && !Un(f) : t(f, s)))
            var s = f, h = o;
        }
        return h;
      }
      function zs(n, e, t, r) {
        var i = n.length;
        for (t = F(t), t < 0 && (t = -t > i ? 0 : i + t), r = r === u || r > i ? i : F(r), r < 0 && (r += i), r = t > r ? 0 : Ho(r); t < r; )
          n[t++] = e;
        return n;
      }
      function Al(n, e) {
        var t = [];
        return Te(n, function(r, i, o) {
          e(r, i, o) && t.push(r);
        }), t;
      }
      function An(n, e, t, r, i) {
        var o = -1, f = n.length;
        for (t || (t = Ec), i || (i = []); ++o < f; ) {
          var s = n[o];
          e > 0 && t(s) ? e > 1 ? An(s, e - 1, t, r, i) : Ce(i, s) : r || (i[i.length] = s);
        }
        return i;
      }
      var vi = Jl(), Sl = Jl(!0);
      function oe(n, e) {
        return n && vi(n, e, yn);
      }
      function _i(n, e) {
        return n && Sl(n, e, yn);
      }
      function cr(n, e) {
        return be(e, function(t) {
          return pe(n[t]);
        });
      }
      function Fe(n, e) {
        e = Ie(e, n);
        for (var t = 0, r = e.length; n != null && t < r; )
          n = n[fe(e[t++])];
        return t && t == r ? n : u;
      }
      function Tl(n, e, t) {
        var r = e(n);
        return P(n) ? r : Ce(r, t(n));
      }
      function Rn(n) {
        return n == null ? n === u ? _a : ga : $e && $e in ln(n) ? Ac(n) : Pc(n);
      }
      function pi(n, e) {
        return n > e;
      }
      function Gs(n, e) {
        return n != null && nn.call(n, e);
      }
      function ks(n, e) {
        return n != null && e in ln(n);
      }
      function Ys(n, e, t) {
        return n >= Ln(e, t) && n < wn(e, t);
      }
      function mi(n, e, t) {
        for (var r = t ? ni : Xt, i = n[0].length, o = n.length, f = o, s = d(o), h = 1 / 0, v = []; f--; ) {
          var _ = n[f];
          f && e && (_ = fn(_, Fn(e))), h = Ln(_.length, h), s[f] = !t && (e || i >= 120 && _.length >= 120) ? new Me(f && _) : u;
        }
        _ = n[0];
        var p = -1, A = s[0];
        n:
          for (; ++p < i && v.length < h; ) {
            var I = _[p], O = e ? e(I) : I;
            if (I = t || I !== 0 ? I : 0, !(A ? gt(A, O) : r(v, O, t))) {
              for (f = o; --f; ) {
                var U = s[f];
                if (!(U ? gt(U, O) : r(n[f], O, t)))
                  continue n;
              }
              A && A.push(O), v.push(I);
            }
          }
        return v;
      }
      function Xs(n, e, t, r) {
        return oe(n, function(i, o, f) {
          e(r, t(i), o, f);
        }), r;
      }
      function bt(n, e, t) {
        e = Ie(e, n), n = go(n, e);
        var r = n == null ? n : n[fe(Jn(e))];
        return r == null ? u : Pn(r, n, t);
      }
      function Ll(n) {
        return gn(n) && Rn(n) == Ge;
      }
      function qs(n) {
        return gn(n) && Rn(n) == dt;
      }
      function Ks(n) {
        return gn(n) && Rn(n) == at;
      }
      function Ct(n, e, t, r, i) {
        return n === e ? !0 : n == null || e == null || !gn(n) && !gn(e) ? n !== n && e !== e : Zs(n, e, t, r, Ct, i);
      }
      function Zs(n, e, t, r, i, o) {
        var f = P(n), s = P(e), h = f ? Dt : In(n), v = s ? Dt : In(e);
        h = h == Ge ? se : h, v = v == Ge ? se : v;
        var _ = h == se, p = v == se, A = h == v;
        if (A && Ee(n)) {
          if (!Ee(e))
            return !1;
          f = !0, _ = !1;
        }
        if (A && !_)
          return o || (o = new te()), f || rt(n) ? lo(n, e, t, r, i, o) : bc(n, e, h, t, r, i, o);
        if (!(t & rn)) {
          var I = _ && nn.call(n, "__wrapped__"), O = p && nn.call(e, "__wrapped__");
          if (I || O) {
            var U = I ? n.value() : n, B = O ? e.value() : e;
            return o || (o = new te()), i(U, B, t, r, o);
          }
        }
        return A ? (o || (o = new te()), Cc(n, e, t, r, i, o)) : !1;
      }
      function Js(n) {
        return gn(n) && In(n) == jn;
      }
      function wi(n, e, t, r) {
        var i = t.length, o = i, f = !r;
        if (n == null)
          return !o;
        for (n = ln(n); i--; ) {
          var s = t[i];
          if (f && s[2] ? s[1] !== n[s[0]] : !(s[0] in n))
            return !1;
        }
        for (; ++i < o; ) {
          s = t[i];
          var h = s[0], v = n[h], _ = s[1];
          if (f && s[2]) {
            if (v === u && !(h in n))
              return !1;
          } else {
            var p = new te();
            if (r)
              var A = r(v, _, h, n, e, p);
            if (!(A === u ? Ct(_, v, rn | dn, r, p) : A))
              return !1;
          }
        }
        return !0;
      }
      function Il(n) {
        if (!sn(n) || Oc(n))
          return !1;
        var e = pe(n) ? Jf : Da;
        return e.test(Ue(n));
      }
      function Qs(n) {
        return gn(n) && Rn(n) == st;
      }
      function Vs(n) {
        return gn(n) && In(n) == ne;
      }
      function js(n) {
        return gn(n) && Ir(n.length) && !!an[Rn(n)];
      }
      function Rl(n) {
        return typeof n == "function" ? n : n == null ? Nn : typeof n == "object" ? P(n) ? Ol(n[0], n[1]) : Wl(n) : Vo(n);
      }
      function yi(n) {
        if (!Tt(n))
          return ts(n);
        var e = [];
        for (var t in ln(n))
          nn.call(n, t) && t != "constructor" && e.push(t);
        return e;
      }
      function nc(n) {
        if (!sn(n))
          return Mc(n);
        var e = Tt(n), t = [];
        for (var r in n)
          r == "constructor" && (e || !nn.call(n, r)) || t.push(r);
        return t;
      }
      function xi(n, e) {
        return n < e;
      }
      function El(n, e) {
        var t = -1, r = Bn(n) ? d(n.length) : [];
        return Te(n, function(i, o, f) {
          r[++t] = e(i, o, f);
        }), r;
      }
      function Wl(n) {
        var e = Mi(n);
        return e.length == 1 && e[0][2] ? co(e[0][0], e[0][1]) : function(t) {
          return t === n || wi(t, n, e);
        };
      }
      function Ol(n, e) {
        return Fi(n) && so(e) ? co(fe(n), e) : function(t) {
          var r = Ki(t, n);
          return r === u && r === e ? Zi(t, n) : Ct(e, r, rn | dn);
        };
      }
      function hr(n, e, t, r, i) {
        n !== e && vi(e, function(o, f) {
          if (i || (i = new te()), sn(o))
            ec(n, e, f, t, hr, r, i);
          else {
            var s = r ? r(Ui(n, f), o, f + "", n, e, i) : u;
            s === u && (s = o), di(n, f, s);
          }
        }, $n);
      }
      function ec(n, e, t, r, i, o, f) {
        var s = Ui(n, t), h = Ui(e, t), v = f.get(h);
        if (v) {
          di(n, t, v);
          return;
        }
        var _ = o ? o(s, h, t + "", n, e, f) : u, p = _ === u;
        if (p) {
          var A = P(h), I = !A && Ee(h), O = !A && !I && rt(h);
          _ = h, A || I || O ? P(s) ? _ = s : _n(s) ? _ = On(s) : I ? (p = !1, _ = kl(h, !0)) : O ? (p = !1, _ = Yl(h, !0)) : _ = [] : It(h) || He(h) ? (_ = s, He(s) ? _ = zo(s) : (!sn(s) || pe(s)) && (_ = fo(h))) : p = !1;
        }
        p && (f.set(h, _), i(_, h, r, o, f), f.delete(h)), di(n, t, _);
      }
      function Bl(n, e) {
        var t = n.length;
        if (!!t)
          return e += e < 0 ? t : 0, _e(e, t) ? n[e] : u;
      }
      function $l(n, e, t) {
        e.length ? e = fn(e, function(o) {
          return P(o) ? function(f) {
            return Fe(f, o.length === 1 ? o[0] : o);
          } : o;
        }) : e = [Nn];
        var r = -1;
        e = fn(e, Fn(W()));
        var i = El(n, function(o, f, s) {
          var h = fn(e, function(v) {
            return v(o);
          });
          return { criteria: h, index: ++r, value: o };
        });
        return If(i, function(o, f) {
          return gc(o, f, t);
        });
      }
      function tc(n, e) {
        return Nl(n, e, function(t, r) {
          return Zi(n, r);
        });
      }
      function Nl(n, e, t) {
        for (var r = -1, i = e.length, o = {}; ++r < i; ) {
          var f = e[r], s = Fe(n, f);
          t(s, f) && At(o, Ie(f, n), s);
        }
        return o;
      }
      function rc(n) {
        return function(e) {
          return Fe(e, n);
        };
      }
      function bi(n, e, t, r) {
        var i = r ? Lf : Xe, o = -1, f = e.length, s = n;
        for (n === e && (e = On(e)), t && (s = fn(n, Fn(t))); ++o < f; )
          for (var h = 0, v = e[o], _ = t ? t(v) : v; (h = i(s, _, h, r)) > -1; )
            s !== n && tr.call(s, h, 1), tr.call(n, h, 1);
        return n;
      }
      function Ml(n, e) {
        for (var t = n ? e.length : 0, r = t - 1; t--; ) {
          var i = e[t];
          if (t == r || i !== o) {
            var o = i;
            _e(i) ? tr.call(n, i, 1) : Ti(n, i);
          }
        }
        return n;
      }
      function Ci(n, e) {
        return n + ur(_l() * (e - n + 1));
      }
      function ic(n, e, t, r) {
        for (var i = -1, o = wn(ir((e - n) / (t || 1)), 0), f = d(o); o--; )
          f[r ? o : ++i] = n, n += t;
        return f;
      }
      function Ai(n, e) {
        var t = "";
        if (!n || e < 1 || e > xe)
          return t;
        do
          e % 2 && (t += n), e = ur(e / 2), e && (n += n);
        while (e);
        return t;
      }
      function H(n, e) {
        return Hi(ho(n, e, Nn), n + "");
      }
      function uc(n) {
        return wl(it(n));
      }
      function lc(n, e) {
        var t = it(n);
        return br(t, Pe(e, 0, t.length));
      }
      function At(n, e, t, r) {
        if (!sn(n))
          return n;
        e = Ie(e, n);
        for (var i = -1, o = e.length, f = o - 1, s = n; s != null && ++i < o; ) {
          var h = fe(e[i]), v = t;
          if (h === "__proto__" || h === "constructor" || h === "prototype")
            return n;
          if (i != f) {
            var _ = s[h];
            v = r ? r(_, h, s) : u, v === u && (v = sn(_) ? _ : _e(e[i + 1]) ? [] : {});
          }
          yt(s, h, v), s = s[h];
        }
        return n;
      }
      var Pl = lr ? function(n, e) {
        return lr.set(n, e), n;
      } : Nn, oc = rr ? function(n, e) {
        return rr(n, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Qi(e),
          writable: !0
        });
      } : Nn;
      function ac(n) {
        return br(it(n));
      }
      function Zn(n, e, t) {
        var r = -1, i = n.length;
        e < 0 && (e = -e > i ? 0 : i + e), t = t > i ? i : t, t < 0 && (t += i), i = e > t ? 0 : t - e >>> 0, e >>>= 0;
        for (var o = d(i); ++r < i; )
          o[r] = n[r + e];
        return o;
      }
      function fc(n, e) {
        var t;
        return Te(n, function(r, i, o) {
          return t = e(r, i, o), !t;
        }), !!t;
      }
      function dr(n, e, t) {
        var r = 0, i = n == null ? r : n.length;
        if (typeof e == "number" && e === e && i <= sa) {
          for (; r < i; ) {
            var o = r + i >>> 1, f = n[o];
            f !== null && !Un(f) && (t ? f <= e : f < e) ? r = o + 1 : i = o;
          }
          return i;
        }
        return Si(n, e, Nn, t);
      }
      function Si(n, e, t, r) {
        var i = 0, o = n == null ? 0 : n.length;
        if (o === 0)
          return 0;
        e = t(e);
        for (var f = e !== e, s = e === null, h = Un(e), v = e === u; i < o; ) {
          var _ = ur((i + o) / 2), p = t(n[_]), A = p !== u, I = p === null, O = p === p, U = Un(p);
          if (f)
            var B = r || O;
          else
            v ? B = O && (r || A) : s ? B = O && A && (r || !I) : h ? B = O && A && !I && (r || !U) : I || U ? B = !1 : B = r ? p <= e : p < e;
          B ? i = _ + 1 : o = _;
        }
        return Ln(o, fa);
      }
      function Fl(n, e) {
        for (var t = -1, r = n.length, i = 0, o = []; ++t < r; ) {
          var f = n[t], s = e ? e(f) : f;
          if (!t || !re(s, h)) {
            var h = s;
            o[i++] = f === 0 ? 0 : f;
          }
        }
        return o;
      }
      function Dl(n) {
        return typeof n == "number" ? n : Un(n) ? Ft : +n;
      }
      function Dn(n) {
        if (typeof n == "string")
          return n;
        if (P(n))
          return fn(n, Dn) + "";
        if (Un(n))
          return pl ? pl.call(n) : "";
        var e = n + "";
        return e == "0" && 1 / n == -Oe ? "-0" : e;
      }
      function Le(n, e, t) {
        var r = -1, i = Xt, o = n.length, f = !0, s = [], h = s;
        if (t)
          f = !1, i = ni;
        else if (o >= S) {
          var v = e ? null : yc(n);
          if (v)
            return Kt(v);
          f = !1, i = gt, h = new Me();
        } else
          h = e ? [] : s;
        n:
          for (; ++r < o; ) {
            var _ = n[r], p = e ? e(_) : _;
            if (_ = t || _ !== 0 ? _ : 0, f && p === p) {
              for (var A = h.length; A--; )
                if (h[A] === p)
                  continue n;
              e && h.push(p), s.push(_);
            } else
              i(h, p, t) || (h !== s && h.push(p), s.push(_));
          }
        return s;
      }
      function Ti(n, e) {
        return e = Ie(e, n), n = go(n, e), n == null || delete n[fe(Jn(e))];
      }
      function Ul(n, e, t, r) {
        return At(n, e, t(Fe(n, e)), r);
      }
      function gr(n, e, t, r) {
        for (var i = n.length, o = r ? i : -1; (r ? o-- : ++o < i) && e(n[o], o, n); )
          ;
        return t ? Zn(n, r ? 0 : o, r ? o + 1 : i) : Zn(n, r ? o + 1 : 0, r ? i : o);
      }
      function Hl(n, e) {
        var t = n;
        return t instanceof k && (t = t.value()), ei(e, function(r, i) {
          return i.func.apply(i.thisArg, Ce([r], i.args));
        }, t);
      }
      function Li(n, e, t) {
        var r = n.length;
        if (r < 2)
          return r ? Le(n[0]) : [];
        for (var i = -1, o = d(r); ++i < r; )
          for (var f = n[i], s = -1; ++s < r; )
            s != i && (o[i] = xt(o[i] || f, n[s], e, t));
        return Le(An(o, 1), e, t);
      }
      function zl(n, e, t) {
        for (var r = -1, i = n.length, o = e.length, f = {}; ++r < i; ) {
          var s = r < o ? e[r] : u;
          t(f, n[r], s);
        }
        return f;
      }
      function Ii(n) {
        return _n(n) ? n : [];
      }
      function Ri(n) {
        return typeof n == "function" ? n : Nn;
      }
      function Ie(n, e) {
        return P(n) ? n : Fi(n, e) ? [n] : mo(j(n));
      }
      var sc = H;
      function Re(n, e, t) {
        var r = n.length;
        return t = t === u ? r : t, !e && t >= r ? n : Zn(n, e, t);
      }
      var Gl = Qf || function(n) {
        return Cn.clearTimeout(n);
      };
      function kl(n, e) {
        if (e)
          return n.slice();
        var t = n.length, r = cl ? cl(t) : new n.constructor(t);
        return n.copy(r), r;
      }
      function Ei(n) {
        var e = new n.constructor(n.byteLength);
        return new nr(e).set(new nr(n)), e;
      }
      function cc(n, e) {
        var t = e ? Ei(n.buffer) : n.buffer;
        return new n.constructor(t, n.byteOffset, n.byteLength);
      }
      function hc(n) {
        var e = new n.constructor(n.source, Lu.exec(n));
        return e.lastIndex = n.lastIndex, e;
      }
      function dc(n) {
        return wt ? ln(wt.call(n)) : {};
      }
      function Yl(n, e) {
        var t = e ? Ei(n.buffer) : n.buffer;
        return new n.constructor(t, n.byteOffset, n.length);
      }
      function Xl(n, e) {
        if (n !== e) {
          var t = n !== u, r = n === null, i = n === n, o = Un(n), f = e !== u, s = e === null, h = e === e, v = Un(e);
          if (!s && !v && !o && n > e || o && f && h && !s && !v || r && f && h || !t && h || !i)
            return 1;
          if (!r && !o && !v && n < e || v && t && i && !r && !o || s && t && i || !f && i || !h)
            return -1;
        }
        return 0;
      }
      function gc(n, e, t) {
        for (var r = -1, i = n.criteria, o = e.criteria, f = i.length, s = t.length; ++r < f; ) {
          var h = Xl(i[r], o[r]);
          if (h) {
            if (r >= s)
              return h;
            var v = t[r];
            return h * (v == "desc" ? -1 : 1);
          }
        }
        return n.index - e.index;
      }
      function ql(n, e, t, r) {
        for (var i = -1, o = n.length, f = t.length, s = -1, h = e.length, v = wn(o - f, 0), _ = d(h + v), p = !r; ++s < h; )
          _[s] = e[s];
        for (; ++i < f; )
          (p || i < o) && (_[t[i]] = n[i]);
        for (; v--; )
          _[s++] = n[i++];
        return _;
      }
      function Kl(n, e, t, r) {
        for (var i = -1, o = n.length, f = -1, s = t.length, h = -1, v = e.length, _ = wn(o - s, 0), p = d(_ + v), A = !r; ++i < _; )
          p[i] = n[i];
        for (var I = i; ++h < v; )
          p[I + h] = e[h];
        for (; ++f < s; )
          (A || i < o) && (p[I + t[f]] = n[i++]);
        return p;
      }
      function On(n, e) {
        var t = -1, r = n.length;
        for (e || (e = d(r)); ++t < r; )
          e[t] = n[t];
        return e;
      }
      function ae(n, e, t, r) {
        var i = !t;
        t || (t = {});
        for (var o = -1, f = e.length; ++o < f; ) {
          var s = e[o], h = r ? r(t[s], n[s], s, t, n) : u;
          h === u && (h = n[s]), i ? de(t, s, h) : yt(t, s, h);
        }
        return t;
      }
      function vc(n, e) {
        return ae(n, Pi(n), e);
      }
      function _c(n, e) {
        return ae(n, oo(n), e);
      }
      function vr(n, e) {
        return function(t, r) {
          var i = P(t) ? xf : Fs, o = e ? e() : {};
          return i(t, n, W(r, 2), o);
        };
      }
      function nt(n) {
        return H(function(e, t) {
          var r = -1, i = t.length, o = i > 1 ? t[i - 1] : u, f = i > 2 ? t[2] : u;
          for (o = n.length > 3 && typeof o == "function" ? (i--, o) : u, f && En(t[0], t[1], f) && (o = i < 3 ? u : o, i = 1), e = ln(e); ++r < i; ) {
            var s = t[r];
            s && n(e, s, r, o);
          }
          return e;
        });
      }
      function Zl(n, e) {
        return function(t, r) {
          if (t == null)
            return t;
          if (!Bn(t))
            return n(t, r);
          for (var i = t.length, o = e ? i : -1, f = ln(t); (e ? o-- : ++o < i) && r(f[o], o, f) !== !1; )
            ;
          return t;
        };
      }
      function Jl(n) {
        return function(e, t, r) {
          for (var i = -1, o = ln(e), f = r(e), s = f.length; s--; ) {
            var h = f[n ? s : ++i];
            if (t(o[h], h, o) === !1)
              break;
          }
          return e;
        };
      }
      function pc(n, e, t) {
        var r = e & un, i = St(n);
        function o() {
          var f = this && this !== Cn && this instanceof o ? i : n;
          return f.apply(r ? t : this, arguments);
        }
        return o;
      }
      function Ql(n) {
        return function(e) {
          e = j(e);
          var t = qe(e) ? ee(e) : u, r = t ? t[0] : e.charAt(0), i = t ? Re(t, 1).join("") : e.slice(1);
          return r[n]() + i;
        };
      }
      function et(n) {
        return function(e) {
          return ei(Jo(Zo(e).replace(of, "")), n, "");
        };
      }
      function St(n) {
        return function() {
          var e = arguments;
          switch (e.length) {
            case 0:
              return new n();
            case 1:
              return new n(e[0]);
            case 2:
              return new n(e[0], e[1]);
            case 3:
              return new n(e[0], e[1], e[2]);
            case 4:
              return new n(e[0], e[1], e[2], e[3]);
            case 5:
              return new n(e[0], e[1], e[2], e[3], e[4]);
            case 6:
              return new n(e[0], e[1], e[2], e[3], e[4], e[5]);
            case 7:
              return new n(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
          }
          var t = je(n.prototype), r = n.apply(t, e);
          return sn(r) ? r : t;
        };
      }
      function mc(n, e, t) {
        var r = St(n);
        function i() {
          for (var o = arguments.length, f = d(o), s = o, h = tt(i); s--; )
            f[s] = arguments[s];
          var v = o < 3 && f[0] !== h && f[o - 1] !== h ? [] : Ae(f, h);
          if (o -= v.length, o < t)
            return to(n, e, _r, i.placeholder, u, f, v, u, u, t - o);
          var _ = this && this !== Cn && this instanceof i ? r : n;
          return Pn(_, this, f);
        }
        return i;
      }
      function Vl(n) {
        return function(e, t, r) {
          var i = ln(e);
          if (!Bn(e)) {
            var o = W(t, 3);
            e = yn(e), t = function(s) {
              return o(i[s], s, i);
            };
          }
          var f = n(e, t, r);
          return f > -1 ? i[o ? e[f] : f] : u;
        };
      }
      function jl(n) {
        return ve(function(e) {
          var t = e.length, r = t, i = qn.prototype.thru;
          for (n && e.reverse(); r--; ) {
            var o = e[r];
            if (typeof o != "function")
              throw new Xn(C);
            if (i && !f && yr(o) == "wrapper")
              var f = new qn([], !0);
          }
          for (r = f ? r : t; ++r < t; ) {
            o = e[r];
            var s = yr(o), h = s == "wrapper" ? Ni(o) : u;
            h && Di(h[0]) && h[1] == (Q | $ | b | Tn) && !h[4].length && h[9] == 1 ? f = f[yr(h[0])].apply(f, h[3]) : f = o.length == 1 && Di(o) ? f[s]() : f.thru(o);
          }
          return function() {
            var v = arguments, _ = v[0];
            if (f && v.length == 1 && P(_))
              return f.plant(_).value();
            for (var p = 0, A = t ? e[p].apply(this, v) : _; ++p < t; )
              A = e[p].call(this, A);
            return A;
          };
        });
      }
      function _r(n, e, t, r, i, o, f, s, h, v) {
        var _ = e & Q, p = e & un, A = e & bn, I = e & ($ | q), O = e & Mn, U = A ? u : St(n);
        function B() {
          for (var G = arguments.length, Y = d(G), Hn = G; Hn--; )
            Y[Hn] = arguments[Hn];
          if (I)
            var Wn = tt(B), zn = Ef(Y, Wn);
          if (r && (Y = ql(Y, r, i, I)), o && (Y = Kl(Y, o, f, I)), G -= zn, I && G < v) {
            var pn = Ae(Y, Wn);
            return to(n, e, _r, B.placeholder, t, Y, pn, s, h, v - G);
          }
          var ie = p ? t : this, we = A ? ie[n] : n;
          return G = Y.length, s ? Y = Fc(Y, s) : O && G > 1 && Y.reverse(), _ && h < G && (Y.length = h), this && this !== Cn && this instanceof B && (we = U || St(we)), we.apply(ie, Y);
        }
        return B;
      }
      function no(n, e) {
        return function(t, r) {
          return Xs(t, n, e(r), {});
        };
      }
      function pr(n, e) {
        return function(t, r) {
          var i;
          if (t === u && r === u)
            return e;
          if (t !== u && (i = t), r !== u) {
            if (i === u)
              return r;
            typeof t == "string" || typeof r == "string" ? (t = Dn(t), r = Dn(r)) : (t = Dl(t), r = Dl(r)), i = n(t, r);
          }
          return i;
        };
      }
      function Wi(n) {
        return ve(function(e) {
          return e = fn(e, Fn(W())), H(function(t) {
            var r = this;
            return n(e, function(i) {
              return Pn(i, r, t);
            });
          });
        });
      }
      function mr(n, e) {
        e = e === u ? " " : Dn(e);
        var t = e.length;
        if (t < 2)
          return t ? Ai(e, n) : e;
        var r = Ai(e, ir(n / Ke(e)));
        return qe(e) ? Re(ee(r), 0, n).join("") : r.slice(0, n);
      }
      function wc(n, e, t, r) {
        var i = e & un, o = St(n);
        function f() {
          for (var s = -1, h = arguments.length, v = -1, _ = r.length, p = d(_ + h), A = this && this !== Cn && this instanceof f ? o : n; ++v < _; )
            p[v] = r[v];
          for (; h--; )
            p[v++] = arguments[++s];
          return Pn(A, i ? t : this, p);
        }
        return f;
      }
      function eo(n) {
        return function(e, t, r) {
          return r && typeof r != "number" && En(e, t, r) && (t = r = u), e = me(e), t === u ? (t = e, e = 0) : t = me(t), r = r === u ? e < t ? 1 : -1 : me(r), ic(e, t, r, n);
        };
      }
      function wr(n) {
        return function(e, t) {
          return typeof e == "string" && typeof t == "string" || (e = Qn(e), t = Qn(t)), n(e, t);
        };
      }
      function to(n, e, t, r, i, o, f, s, h, v) {
        var _ = e & $, p = _ ? f : u, A = _ ? u : f, I = _ ? o : u, O = _ ? u : o;
        e |= _ ? b : D, e &= ~(_ ? D : b), e & Gn || (e &= ~(un | bn));
        var U = [
          n,
          e,
          i,
          I,
          p,
          O,
          A,
          s,
          h,
          v
        ], B = t.apply(u, U);
        return Di(n) && vo(B, U), B.placeholder = r, _o(B, n, e);
      }
      function Oi(n) {
        var e = mn[n];
        return function(t, r) {
          if (t = Qn(t), r = r == null ? 0 : Ln(F(r), 292), r && vl(t)) {
            var i = (j(t) + "e").split("e"), o = e(i[0] + "e" + (+i[1] + r));
            return i = (j(o) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
          }
          return e(t);
        };
      }
      var yc = Qe && 1 / Kt(new Qe([, -0]))[1] == Oe ? function(n) {
        return new Qe(n);
      } : nu;
      function ro(n) {
        return function(e) {
          var t = In(e);
          return t == jn ? ai(e) : t == ne ? Pf(e) : Rf(e, n(e));
        };
      }
      function ge(n, e, t, r, i, o, f, s) {
        var h = e & bn;
        if (!h && typeof n != "function")
          throw new Xn(C);
        var v = r ? r.length : 0;
        if (v || (e &= ~(b | D), r = i = u), f = f === u ? f : wn(F(f), 0), s = s === u ? s : F(s), v -= i ? i.length : 0, e & D) {
          var _ = r, p = i;
          r = i = u;
        }
        var A = h ? u : Ni(n), I = [
          n,
          e,
          t,
          r,
          i,
          _,
          p,
          o,
          f,
          s
        ];
        if (A && Nc(I, A), n = I[0], e = I[1], t = I[2], r = I[3], i = I[4], s = I[9] = I[9] === u ? h ? 0 : n.length : wn(I[9] - v, 0), !s && e & ($ | q) && (e &= ~($ | q)), !e || e == un)
          var O = pc(n, e, t);
        else
          e == $ || e == q ? O = mc(n, e, s) : (e == b || e == (un | b)) && !i.length ? O = wc(n, e, t, r) : O = _r.apply(u, I);
        var U = A ? Pl : vo;
        return _o(U(O, I), n, e);
      }
      function io(n, e, t, r) {
        return n === u || re(n, Je[t]) && !nn.call(r, t) ? e : n;
      }
      function uo(n, e, t, r, i, o) {
        return sn(n) && sn(e) && (o.set(e, n), hr(n, e, u, uo, o), o.delete(e)), n;
      }
      function xc(n) {
        return It(n) ? u : n;
      }
      function lo(n, e, t, r, i, o) {
        var f = t & rn, s = n.length, h = e.length;
        if (s != h && !(f && h > s))
          return !1;
        var v = o.get(n), _ = o.get(e);
        if (v && _)
          return v == e && _ == n;
        var p = -1, A = !0, I = t & dn ? new Me() : u;
        for (o.set(n, e), o.set(e, n); ++p < s; ) {
          var O = n[p], U = e[p];
          if (r)
            var B = f ? r(U, O, p, e, n, o) : r(O, U, p, n, e, o);
          if (B !== u) {
            if (B)
              continue;
            A = !1;
            break;
          }
          if (I) {
            if (!ti(e, function(G, Y) {
              if (!gt(I, Y) && (O === G || i(O, G, t, r, o)))
                return I.push(Y);
            })) {
              A = !1;
              break;
            }
          } else if (!(O === U || i(O, U, t, r, o))) {
            A = !1;
            break;
          }
        }
        return o.delete(n), o.delete(e), A;
      }
      function bc(n, e, t, r, i, o, f) {
        switch (t) {
          case ke:
            if (n.byteLength != e.byteLength || n.byteOffset != e.byteOffset)
              return !1;
            n = n.buffer, e = e.buffer;
          case dt:
            return !(n.byteLength != e.byteLength || !o(new nr(n), new nr(e)));
          case ot:
          case at:
          case ft:
            return re(+n, +e);
          case Ut:
            return n.name == e.name && n.message == e.message;
          case st:
          case ct:
            return n == e + "";
          case jn:
            var s = ai;
          case ne:
            var h = r & rn;
            if (s || (s = Kt), n.size != e.size && !h)
              return !1;
            var v = f.get(n);
            if (v)
              return v == e;
            r |= dn, f.set(n, e);
            var _ = lo(s(n), s(e), r, i, o, f);
            return f.delete(n), _;
          case zt:
            if (wt)
              return wt.call(n) == wt.call(e);
        }
        return !1;
      }
      function Cc(n, e, t, r, i, o) {
        var f = t & rn, s = Bi(n), h = s.length, v = Bi(e), _ = v.length;
        if (h != _ && !f)
          return !1;
        for (var p = h; p--; ) {
          var A = s[p];
          if (!(f ? A in e : nn.call(e, A)))
            return !1;
        }
        var I = o.get(n), O = o.get(e);
        if (I && O)
          return I == e && O == n;
        var U = !0;
        o.set(n, e), o.set(e, n);
        for (var B = f; ++p < h; ) {
          A = s[p];
          var G = n[A], Y = e[A];
          if (r)
            var Hn = f ? r(Y, G, A, e, n, o) : r(G, Y, A, n, e, o);
          if (!(Hn === u ? G === Y || i(G, Y, t, r, o) : Hn)) {
            U = !1;
            break;
          }
          B || (B = A == "constructor");
        }
        if (U && !B) {
          var Wn = n.constructor, zn = e.constructor;
          Wn != zn && "constructor" in n && "constructor" in e && !(typeof Wn == "function" && Wn instanceof Wn && typeof zn == "function" && zn instanceof zn) && (U = !1);
        }
        return o.delete(n), o.delete(e), U;
      }
      function ve(n) {
        return Hi(ho(n, u, bo), n + "");
      }
      function Bi(n) {
        return Tl(n, yn, Pi);
      }
      function $i(n) {
        return Tl(n, $n, oo);
      }
      var Ni = lr ? function(n) {
        return lr.get(n);
      } : nu;
      function yr(n) {
        for (var e = n.name + "", t = Ve[e], r = nn.call(Ve, e) ? t.length : 0; r--; ) {
          var i = t[r], o = i.func;
          if (o == null || o == n)
            return i.name;
        }
        return e;
      }
      function tt(n) {
        var e = nn.call(l, "placeholder") ? l : n;
        return e.placeholder;
      }
      function W() {
        var n = l.iteratee || Vi;
        return n = n === Vi ? Rl : n, arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function xr(n, e) {
        var t = n.__data__;
        return Wc(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
      }
      function Mi(n) {
        for (var e = yn(n), t = e.length; t--; ) {
          var r = e[t], i = n[r];
          e[t] = [r, i, so(i)];
        }
        return e;
      }
      function De(n, e) {
        var t = $f(n, e);
        return Il(t) ? t : u;
      }
      function Ac(n) {
        var e = nn.call(n, $e), t = n[$e];
        try {
          n[$e] = u;
          var r = !0;
        } catch {
        }
        var i = Vt.call(n);
        return r && (e ? n[$e] = t : delete n[$e]), i;
      }
      var Pi = si ? function(n) {
        return n == null ? [] : (n = ln(n), be(si(n), function(e) {
          return dl.call(n, e);
        }));
      } : eu, oo = si ? function(n) {
        for (var e = []; n; )
          Ce(e, Pi(n)), n = er(n);
        return e;
      } : eu, In = Rn;
      (ci && In(new ci(new ArrayBuffer(1))) != ke || _t && In(new _t()) != jn || hi && In(hi.resolve()) != Cu || Qe && In(new Qe()) != ne || pt && In(new pt()) != ht) && (In = function(n) {
        var e = Rn(n), t = e == se ? n.constructor : u, r = t ? Ue(t) : "";
        if (r)
          switch (r) {
            case ls:
              return ke;
            case os:
              return jn;
            case as:
              return Cu;
            case fs:
              return ne;
            case ss:
              return ht;
          }
        return e;
      });
      function Sc(n, e, t) {
        for (var r = -1, i = t.length; ++r < i; ) {
          var o = t[r], f = o.size;
          switch (o.type) {
            case "drop":
              n += f;
              break;
            case "dropRight":
              e -= f;
              break;
            case "take":
              e = Ln(e, n + f);
              break;
            case "takeRight":
              n = wn(n, e - f);
              break;
          }
        }
        return { start: n, end: e };
      }
      function Tc(n) {
        var e = n.match(Wa);
        return e ? e[1].split(Oa) : [];
      }
      function ao(n, e, t) {
        e = Ie(e, n);
        for (var r = -1, i = e.length, o = !1; ++r < i; ) {
          var f = fe(e[r]);
          if (!(o = n != null && t(n, f)))
            break;
          n = n[f];
        }
        return o || ++r != i ? o : (i = n == null ? 0 : n.length, !!i && Ir(i) && _e(f, i) && (P(n) || He(n)));
      }
      function Lc(n) {
        var e = n.length, t = new n.constructor(e);
        return e && typeof n[0] == "string" && nn.call(n, "index") && (t.index = n.index, t.input = n.input), t;
      }
      function fo(n) {
        return typeof n.constructor == "function" && !Tt(n) ? je(er(n)) : {};
      }
      function Ic(n, e, t) {
        var r = n.constructor;
        switch (e) {
          case dt:
            return Ei(n);
          case ot:
          case at:
            return new r(+n);
          case ke:
            return cc(n, t);
          case Mr:
          case Pr:
          case Fr:
          case Dr:
          case Ur:
          case Hr:
          case zr:
          case Gr:
          case kr:
            return Yl(n, t);
          case jn:
            return new r();
          case ft:
          case ct:
            return new r(n);
          case st:
            return hc(n);
          case ne:
            return new r();
          case zt:
            return dc(n);
        }
      }
      function Rc(n, e) {
        var t = e.length;
        if (!t)
          return n;
        var r = t - 1;
        return e[r] = (t > 1 ? "& " : "") + e[r], e = e.join(t > 2 ? ", " : " "), n.replace(Ea, `{
/* [wrapped with ` + e + `] */
`);
      }
      function Ec(n) {
        return P(n) || He(n) || !!(gl && n && n[gl]);
      }
      function _e(n, e) {
        var t = typeof n;
        return e = e == null ? xe : e, !!e && (t == "number" || t != "symbol" && Ha.test(n)) && n > -1 && n % 1 == 0 && n < e;
      }
      function En(n, e, t) {
        if (!sn(t))
          return !1;
        var r = typeof e;
        return (r == "number" ? Bn(t) && _e(e, t.length) : r == "string" && e in t) ? re(t[e], n) : !1;
      }
      function Fi(n, e) {
        if (P(n))
          return !1;
        var t = typeof n;
        return t == "number" || t == "symbol" || t == "boolean" || n == null || Un(n) ? !0 : Ta.test(n) || !Sa.test(n) || e != null && n in ln(e);
      }
      function Wc(n) {
        var e = typeof n;
        return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? n !== "__proto__" : n === null;
      }
      function Di(n) {
        var e = yr(n), t = l[e];
        if (typeof t != "function" || !(e in k.prototype))
          return !1;
        if (n === t)
          return !0;
        var r = Ni(t);
        return !!r && n === r[0];
      }
      function Oc(n) {
        return !!sl && sl in n;
      }
      var Bc = Jt ? pe : tu;
      function Tt(n) {
        var e = n && n.constructor, t = typeof e == "function" && e.prototype || Je;
        return n === t;
      }
      function so(n) {
        return n === n && !sn(n);
      }
      function co(n, e) {
        return function(t) {
          return t == null ? !1 : t[n] === e && (e !== u || n in ln(t));
        };
      }
      function $c(n) {
        var e = Tr(n, function(r) {
          return t.size === R && t.clear(), r;
        }), t = e.cache;
        return e;
      }
      function Nc(n, e) {
        var t = n[1], r = e[1], i = t | r, o = i < (un | bn | Q), f = r == Q && t == $ || r == Q && t == Tn && n[7].length <= e[8] || r == (Q | Tn) && e[7].length <= e[8] && t == $;
        if (!(o || f))
          return n;
        r & un && (n[2] = e[2], i |= t & un ? 0 : Gn);
        var s = e[3];
        if (s) {
          var h = n[3];
          n[3] = h ? ql(h, s, e[4]) : s, n[4] = h ? Ae(n[3], w) : e[4];
        }
        return s = e[5], s && (h = n[5], n[5] = h ? Kl(h, s, e[6]) : s, n[6] = h ? Ae(n[5], w) : e[6]), s = e[7], s && (n[7] = s), r & Q && (n[8] = n[8] == null ? e[8] : Ln(n[8], e[8])), n[9] == null && (n[9] = e[9]), n[0] = e[0], n[1] = i, n;
      }
      function Mc(n) {
        var e = [];
        if (n != null)
          for (var t in ln(n))
            e.push(t);
        return e;
      }
      function Pc(n) {
        return Vt.call(n);
      }
      function ho(n, e, t) {
        return e = wn(e === u ? n.length - 1 : e, 0), function() {
          for (var r = arguments, i = -1, o = wn(r.length - e, 0), f = d(o); ++i < o; )
            f[i] = r[e + i];
          i = -1;
          for (var s = d(e + 1); ++i < e; )
            s[i] = r[i];
          return s[e] = t(f), Pn(n, this, s);
        };
      }
      function go(n, e) {
        return e.length < 2 ? n : Fe(n, Zn(e, 0, -1));
      }
      function Fc(n, e) {
        for (var t = n.length, r = Ln(e.length, t), i = On(n); r--; ) {
          var o = e[r];
          n[r] = _e(o, t) ? i[o] : u;
        }
        return n;
      }
      function Ui(n, e) {
        if (!(e === "constructor" && typeof n[e] == "function") && e != "__proto__")
          return n[e];
      }
      var vo = po(Pl), Lt = jf || function(n, e) {
        return Cn.setTimeout(n, e);
      }, Hi = po(oc);
      function _o(n, e, t) {
        var r = e + "";
        return Hi(n, Rc(r, Dc(Tc(r), t)));
      }
      function po(n) {
        var e = 0, t = 0;
        return function() {
          var r = rs(), i = Pt - (r - t);
          if (t = r, i > 0) {
            if (++e >= Mt)
              return arguments[0];
          } else
            e = 0;
          return n.apply(u, arguments);
        };
      }
      function br(n, e) {
        var t = -1, r = n.length, i = r - 1;
        for (e = e === u ? r : e; ++t < e; ) {
          var o = Ci(t, i), f = n[o];
          n[o] = n[t], n[t] = f;
        }
        return n.length = e, n;
      }
      var mo = $c(function(n) {
        var e = [];
        return n.charCodeAt(0) === 46 && e.push(""), n.replace(La, function(t, r, i, o) {
          e.push(i ? o.replace(Na, "$1") : r || t);
        }), e;
      });
      function fe(n) {
        if (typeof n == "string" || Un(n))
          return n;
        var e = n + "";
        return e == "0" && 1 / n == -Oe ? "-0" : e;
      }
      function Ue(n) {
        if (n != null) {
          try {
            return Qt.call(n);
          } catch {
          }
          try {
            return n + "";
          } catch {
          }
        }
        return "";
      }
      function Dc(n, e) {
        return Yn(ca, function(t) {
          var r = "_." + t[0];
          e & t[1] && !Xt(n, r) && n.push(r);
        }), n.sort();
      }
      function wo(n) {
        if (n instanceof k)
          return n.clone();
        var e = new qn(n.__wrapped__, n.__chain__);
        return e.__actions__ = On(n.__actions__), e.__index__ = n.__index__, e.__values__ = n.__values__, e;
      }
      function Uc(n, e, t) {
        (t ? En(n, e, t) : e === u) ? e = 1 : e = wn(F(e), 0);
        var r = n == null ? 0 : n.length;
        if (!r || e < 1)
          return [];
        for (var i = 0, o = 0, f = d(ir(r / e)); i < r; )
          f[o++] = Zn(n, i, i += e);
        return f;
      }
      function Hc(n) {
        for (var e = -1, t = n == null ? 0 : n.length, r = 0, i = []; ++e < t; ) {
          var o = n[e];
          o && (i[r++] = o);
        }
        return i;
      }
      function zc() {
        var n = arguments.length;
        if (!n)
          return [];
        for (var e = d(n - 1), t = arguments[0], r = n; r--; )
          e[r - 1] = arguments[r];
        return Ce(P(t) ? On(t) : [t], An(e, 1));
      }
      var Gc = H(function(n, e) {
        return _n(n) ? xt(n, An(e, 1, _n, !0)) : [];
      }), kc = H(function(n, e) {
        var t = Jn(e);
        return _n(t) && (t = u), _n(n) ? xt(n, An(e, 1, _n, !0), W(t, 2)) : [];
      }), Yc = H(function(n, e) {
        var t = Jn(e);
        return _n(t) && (t = u), _n(n) ? xt(n, An(e, 1, _n, !0), u, t) : [];
      });
      function Xc(n, e, t) {
        var r = n == null ? 0 : n.length;
        return r ? (e = t || e === u ? 1 : F(e), Zn(n, e < 0 ? 0 : e, r)) : [];
      }
      function qc(n, e, t) {
        var r = n == null ? 0 : n.length;
        return r ? (e = t || e === u ? 1 : F(e), e = r - e, Zn(n, 0, e < 0 ? 0 : e)) : [];
      }
      function Kc(n, e) {
        return n && n.length ? gr(n, W(e, 3), !0, !0) : [];
      }
      function Zc(n, e) {
        return n && n.length ? gr(n, W(e, 3), !0) : [];
      }
      function Jc(n, e, t, r) {
        var i = n == null ? 0 : n.length;
        return i ? (t && typeof t != "number" && En(n, e, t) && (t = 0, r = i), zs(n, e, t, r)) : [];
      }
      function yo(n, e, t) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = t == null ? 0 : F(t);
        return i < 0 && (i = wn(r + i, 0)), qt(n, W(e, 3), i);
      }
      function xo(n, e, t) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = r - 1;
        return t !== u && (i = F(t), i = t < 0 ? wn(r + i, 0) : Ln(i, r - 1)), qt(n, W(e, 3), i, !0);
      }
      function bo(n) {
        var e = n == null ? 0 : n.length;
        return e ? An(n, 1) : [];
      }
      function Qc(n) {
        var e = n == null ? 0 : n.length;
        return e ? An(n, Oe) : [];
      }
      function Vc(n, e) {
        var t = n == null ? 0 : n.length;
        return t ? (e = e === u ? 1 : F(e), An(n, e)) : [];
      }
      function jc(n) {
        for (var e = -1, t = n == null ? 0 : n.length, r = {}; ++e < t; ) {
          var i = n[e];
          r[i[0]] = i[1];
        }
        return r;
      }
      function Co(n) {
        return n && n.length ? n[0] : u;
      }
      function nh(n, e, t) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = t == null ? 0 : F(t);
        return i < 0 && (i = wn(r + i, 0)), Xe(n, e, i);
      }
      function eh(n) {
        var e = n == null ? 0 : n.length;
        return e ? Zn(n, 0, -1) : [];
      }
      var th = H(function(n) {
        var e = fn(n, Ii);
        return e.length && e[0] === n[0] ? mi(e) : [];
      }), rh = H(function(n) {
        var e = Jn(n), t = fn(n, Ii);
        return e === Jn(t) ? e = u : t.pop(), t.length && t[0] === n[0] ? mi(t, W(e, 2)) : [];
      }), ih = H(function(n) {
        var e = Jn(n), t = fn(n, Ii);
        return e = typeof e == "function" ? e : u, e && t.pop(), t.length && t[0] === n[0] ? mi(t, u, e) : [];
      });
      function uh(n, e) {
        return n == null ? "" : es.call(n, e);
      }
      function Jn(n) {
        var e = n == null ? 0 : n.length;
        return e ? n[e - 1] : u;
      }
      function lh(n, e, t) {
        var r = n == null ? 0 : n.length;
        if (!r)
          return -1;
        var i = r;
        return t !== u && (i = F(t), i = i < 0 ? wn(r + i, 0) : Ln(i, r - 1)), e === e ? Df(n, e, i) : qt(n, tl, i, !0);
      }
      function oh(n, e) {
        return n && n.length ? Bl(n, F(e)) : u;
      }
      var ah = H(Ao);
      function Ao(n, e) {
        return n && n.length && e && e.length ? bi(n, e) : n;
      }
      function fh(n, e, t) {
        return n && n.length && e && e.length ? bi(n, e, W(t, 2)) : n;
      }
      function sh(n, e, t) {
        return n && n.length && e && e.length ? bi(n, e, u, t) : n;
      }
      var ch = ve(function(n, e) {
        var t = n == null ? 0 : n.length, r = gi(n, e);
        return Ml(n, fn(e, function(i) {
          return _e(i, t) ? +i : i;
        }).sort(Xl)), r;
      });
      function hh(n, e) {
        var t = [];
        if (!(n && n.length))
          return t;
        var r = -1, i = [], o = n.length;
        for (e = W(e, 3); ++r < o; ) {
          var f = n[r];
          e(f, r, n) && (t.push(f), i.push(r));
        }
        return Ml(n, i), t;
      }
      function zi(n) {
        return n == null ? n : us.call(n);
      }
      function dh(n, e, t) {
        var r = n == null ? 0 : n.length;
        return r ? (t && typeof t != "number" && En(n, e, t) ? (e = 0, t = r) : (e = e == null ? 0 : F(e), t = t === u ? r : F(t)), Zn(n, e, t)) : [];
      }
      function gh(n, e) {
        return dr(n, e);
      }
      function vh(n, e, t) {
        return Si(n, e, W(t, 2));
      }
      function _h(n, e) {
        var t = n == null ? 0 : n.length;
        if (t) {
          var r = dr(n, e);
          if (r < t && re(n[r], e))
            return r;
        }
        return -1;
      }
      function ph(n, e) {
        return dr(n, e, !0);
      }
      function mh(n, e, t) {
        return Si(n, e, W(t, 2), !0);
      }
      function wh(n, e) {
        var t = n == null ? 0 : n.length;
        if (t) {
          var r = dr(n, e, !0) - 1;
          if (re(n[r], e))
            return r;
        }
        return -1;
      }
      function yh(n) {
        return n && n.length ? Fl(n) : [];
      }
      function xh(n, e) {
        return n && n.length ? Fl(n, W(e, 2)) : [];
      }
      function bh(n) {
        var e = n == null ? 0 : n.length;
        return e ? Zn(n, 1, e) : [];
      }
      function Ch(n, e, t) {
        return n && n.length ? (e = t || e === u ? 1 : F(e), Zn(n, 0, e < 0 ? 0 : e)) : [];
      }
      function Ah(n, e, t) {
        var r = n == null ? 0 : n.length;
        return r ? (e = t || e === u ? 1 : F(e), e = r - e, Zn(n, e < 0 ? 0 : e, r)) : [];
      }
      function Sh(n, e) {
        return n && n.length ? gr(n, W(e, 3), !1, !0) : [];
      }
      function Th(n, e) {
        return n && n.length ? gr(n, W(e, 3)) : [];
      }
      var Lh = H(function(n) {
        return Le(An(n, 1, _n, !0));
      }), Ih = H(function(n) {
        var e = Jn(n);
        return _n(e) && (e = u), Le(An(n, 1, _n, !0), W(e, 2));
      }), Rh = H(function(n) {
        var e = Jn(n);
        return e = typeof e == "function" ? e : u, Le(An(n, 1, _n, !0), u, e);
      });
      function Eh(n) {
        return n && n.length ? Le(n) : [];
      }
      function Wh(n, e) {
        return n && n.length ? Le(n, W(e, 2)) : [];
      }
      function Oh(n, e) {
        return e = typeof e == "function" ? e : u, n && n.length ? Le(n, u, e) : [];
      }
      function Gi(n) {
        if (!(n && n.length))
          return [];
        var e = 0;
        return n = be(n, function(t) {
          if (_n(t))
            return e = wn(t.length, e), !0;
        }), li(e, function(t) {
          return fn(n, ri(t));
        });
      }
      function So(n, e) {
        if (!(n && n.length))
          return [];
        var t = Gi(n);
        return e == null ? t : fn(t, function(r) {
          return Pn(e, u, r);
        });
      }
      var Bh = H(function(n, e) {
        return _n(n) ? xt(n, e) : [];
      }), $h = H(function(n) {
        return Li(be(n, _n));
      }), Nh = H(function(n) {
        var e = Jn(n);
        return _n(e) && (e = u), Li(be(n, _n), W(e, 2));
      }), Mh = H(function(n) {
        var e = Jn(n);
        return e = typeof e == "function" ? e : u, Li(be(n, _n), u, e);
      }), Ph = H(Gi);
      function Fh(n, e) {
        return zl(n || [], e || [], yt);
      }
      function Dh(n, e) {
        return zl(n || [], e || [], At);
      }
      var Uh = H(function(n) {
        var e = n.length, t = e > 1 ? n[e - 1] : u;
        return t = typeof t == "function" ? (n.pop(), t) : u, So(n, t);
      });
      function To(n) {
        var e = l(n);
        return e.__chain__ = !0, e;
      }
      function Hh(n, e) {
        return e(n), n;
      }
      function Cr(n, e) {
        return e(n);
      }
      var zh = ve(function(n) {
        var e = n.length, t = e ? n[0] : 0, r = this.__wrapped__, i = function(o) {
          return gi(o, n);
        };
        return e > 1 || this.__actions__.length || !(r instanceof k) || !_e(t) ? this.thru(i) : (r = r.slice(t, +t + (e ? 1 : 0)), r.__actions__.push({
          func: Cr,
          args: [i],
          thisArg: u
        }), new qn(r, this.__chain__).thru(function(o) {
          return e && !o.length && o.push(u), o;
        }));
      });
      function Gh() {
        return To(this);
      }
      function kh() {
        return new qn(this.value(), this.__chain__);
      }
      function Yh() {
        this.__values__ === u && (this.__values__ = Uo(this.value()));
        var n = this.__index__ >= this.__values__.length, e = n ? u : this.__values__[this.__index__++];
        return { done: n, value: e };
      }
      function Xh() {
        return this;
      }
      function qh(n) {
        for (var e, t = this; t instanceof ar; ) {
          var r = wo(t);
          r.__index__ = 0, r.__values__ = u, e ? i.__wrapped__ = r : e = r;
          var i = r;
          t = t.__wrapped__;
        }
        return i.__wrapped__ = n, e;
      }
      function Kh() {
        var n = this.__wrapped__;
        if (n instanceof k) {
          var e = n;
          return this.__actions__.length && (e = new k(this)), e = e.reverse(), e.__actions__.push({
            func: Cr,
            args: [zi],
            thisArg: u
          }), new qn(e, this.__chain__);
        }
        return this.thru(zi);
      }
      function Zh() {
        return Hl(this.__wrapped__, this.__actions__);
      }
      var Jh = vr(function(n, e, t) {
        nn.call(n, t) ? ++n[t] : de(n, t, 1);
      });
      function Qh(n, e, t) {
        var r = P(n) ? nl : Hs;
        return t && En(n, e, t) && (e = u), r(n, W(e, 3));
      }
      function Vh(n, e) {
        var t = P(n) ? be : Al;
        return t(n, W(e, 3));
      }
      var jh = Vl(yo), nd = Vl(xo);
      function ed(n, e) {
        return An(Ar(n, e), 1);
      }
      function td(n, e) {
        return An(Ar(n, e), Oe);
      }
      function rd(n, e, t) {
        return t = t === u ? 1 : F(t), An(Ar(n, e), t);
      }
      function Lo(n, e) {
        var t = P(n) ? Yn : Te;
        return t(n, W(e, 3));
      }
      function Io(n, e) {
        var t = P(n) ? bf : Cl;
        return t(n, W(e, 3));
      }
      var id = vr(function(n, e, t) {
        nn.call(n, t) ? n[t].push(e) : de(n, t, [e]);
      });
      function ud(n, e, t, r) {
        n = Bn(n) ? n : it(n), t = t && !r ? F(t) : 0;
        var i = n.length;
        return t < 0 && (t = wn(i + t, 0)), Rr(n) ? t <= i && n.indexOf(e, t) > -1 : !!i && Xe(n, e, t) > -1;
      }
      var ld = H(function(n, e, t) {
        var r = -1, i = typeof e == "function", o = Bn(n) ? d(n.length) : [];
        return Te(n, function(f) {
          o[++r] = i ? Pn(e, f, t) : bt(f, e, t);
        }), o;
      }), od = vr(function(n, e, t) {
        de(n, t, e);
      });
      function Ar(n, e) {
        var t = P(n) ? fn : El;
        return t(n, W(e, 3));
      }
      function ad(n, e, t, r) {
        return n == null ? [] : (P(e) || (e = e == null ? [] : [e]), t = r ? u : t, P(t) || (t = t == null ? [] : [t]), $l(n, e, t));
      }
      var fd = vr(function(n, e, t) {
        n[t ? 0 : 1].push(e);
      }, function() {
        return [[], []];
      });
      function sd(n, e, t) {
        var r = P(n) ? ei : il, i = arguments.length < 3;
        return r(n, W(e, 4), t, i, Te);
      }
      function cd(n, e, t) {
        var r = P(n) ? Cf : il, i = arguments.length < 3;
        return r(n, W(e, 4), t, i, Cl);
      }
      function hd(n, e) {
        var t = P(n) ? be : Al;
        return t(n, Lr(W(e, 3)));
      }
      function dd(n) {
        var e = P(n) ? wl : uc;
        return e(n);
      }
      function gd(n, e, t) {
        (t ? En(n, e, t) : e === u) ? e = 1 : e = F(e);
        var r = P(n) ? Ms : lc;
        return r(n, e);
      }
      function vd(n) {
        var e = P(n) ? Ps : ac;
        return e(n);
      }
      function _d(n) {
        if (n == null)
          return 0;
        if (Bn(n))
          return Rr(n) ? Ke(n) : n.length;
        var e = In(n);
        return e == jn || e == ne ? n.size : yi(n).length;
      }
      function pd(n, e, t) {
        var r = P(n) ? ti : fc;
        return t && En(n, e, t) && (e = u), r(n, W(e, 3));
      }
      var md = H(function(n, e) {
        if (n == null)
          return [];
        var t = e.length;
        return t > 1 && En(n, e[0], e[1]) ? e = [] : t > 2 && En(e[0], e[1], e[2]) && (e = [e[0]]), $l(n, An(e, 1), []);
      }), Sr = Vf || function() {
        return Cn.Date.now();
      };
      function wd(n, e) {
        if (typeof e != "function")
          throw new Xn(C);
        return n = F(n), function() {
          if (--n < 1)
            return e.apply(this, arguments);
        };
      }
      function Ro(n, e, t) {
        return e = t ? u : e, e = n && e == null ? n.length : e, ge(n, Q, u, u, u, u, e);
      }
      function Eo(n, e) {
        var t;
        if (typeof e != "function")
          throw new Xn(C);
        return n = F(n), function() {
          return --n > 0 && (t = e.apply(this, arguments)), n <= 1 && (e = u), t;
        };
      }
      var ki = H(function(n, e, t) {
        var r = un;
        if (t.length) {
          var i = Ae(t, tt(ki));
          r |= b;
        }
        return ge(n, r, e, t, i);
      }), Wo = H(function(n, e, t) {
        var r = un | bn;
        if (t.length) {
          var i = Ae(t, tt(Wo));
          r |= b;
        }
        return ge(e, r, n, t, i);
      });
      function Oo(n, e, t) {
        e = t ? u : e;
        var r = ge(n, $, u, u, u, u, u, e);
        return r.placeholder = Oo.placeholder, r;
      }
      function Bo(n, e, t) {
        e = t ? u : e;
        var r = ge(n, q, u, u, u, u, u, e);
        return r.placeholder = Bo.placeholder, r;
      }
      function $o(n, e, t) {
        var r, i, o, f, s, h, v = 0, _ = !1, p = !1, A = !0;
        if (typeof n != "function")
          throw new Xn(C);
        e = Qn(e) || 0, sn(t) && (_ = !!t.leading, p = "maxWait" in t, o = p ? wn(Qn(t.maxWait) || 0, e) : o, A = "trailing" in t ? !!t.trailing : A);
        function I(pn) {
          var ie = r, we = i;
          return r = i = u, v = pn, f = n.apply(we, ie), f;
        }
        function O(pn) {
          return v = pn, s = Lt(G, e), _ ? I(pn) : f;
        }
        function U(pn) {
          var ie = pn - h, we = pn - v, jo = e - ie;
          return p ? Ln(jo, o - we) : jo;
        }
        function B(pn) {
          var ie = pn - h, we = pn - v;
          return h === u || ie >= e || ie < 0 || p && we >= o;
        }
        function G() {
          var pn = Sr();
          if (B(pn))
            return Y(pn);
          s = Lt(G, U(pn));
        }
        function Y(pn) {
          return s = u, A && r ? I(pn) : (r = i = u, f);
        }
        function Hn() {
          s !== u && Gl(s), v = 0, r = h = i = s = u;
        }
        function Wn() {
          return s === u ? f : Y(Sr());
        }
        function zn() {
          var pn = Sr(), ie = B(pn);
          if (r = arguments, i = this, h = pn, ie) {
            if (s === u)
              return O(h);
            if (p)
              return Gl(s), s = Lt(G, e), I(h);
          }
          return s === u && (s = Lt(G, e)), f;
        }
        return zn.cancel = Hn, zn.flush = Wn, zn;
      }
      var yd = H(function(n, e) {
        return bl(n, 1, e);
      }), xd = H(function(n, e, t) {
        return bl(n, Qn(e) || 0, t);
      });
      function bd(n) {
        return ge(n, Mn);
      }
      function Tr(n, e) {
        if (typeof n != "function" || e != null && typeof e != "function")
          throw new Xn(C);
        var t = function() {
          var r = arguments, i = e ? e.apply(this, r) : r[0], o = t.cache;
          if (o.has(i))
            return o.get(i);
          var f = n.apply(this, r);
          return t.cache = o.set(i, f) || o, f;
        };
        return t.cache = new (Tr.Cache || he)(), t;
      }
      Tr.Cache = he;
      function Lr(n) {
        if (typeof n != "function")
          throw new Xn(C);
        return function() {
          var e = arguments;
          switch (e.length) {
            case 0:
              return !n.call(this);
            case 1:
              return !n.call(this, e[0]);
            case 2:
              return !n.call(this, e[0], e[1]);
            case 3:
              return !n.call(this, e[0], e[1], e[2]);
          }
          return !n.apply(this, e);
        };
      }
      function Cd(n) {
        return Eo(2, n);
      }
      var Ad = sc(function(n, e) {
        e = e.length == 1 && P(e[0]) ? fn(e[0], Fn(W())) : fn(An(e, 1), Fn(W()));
        var t = e.length;
        return H(function(r) {
          for (var i = -1, o = Ln(r.length, t); ++i < o; )
            r[i] = e[i].call(this, r[i]);
          return Pn(n, this, r);
        });
      }), Yi = H(function(n, e) {
        var t = Ae(e, tt(Yi));
        return ge(n, b, u, e, t);
      }), No = H(function(n, e) {
        var t = Ae(e, tt(No));
        return ge(n, D, u, e, t);
      }), Sd = ve(function(n, e) {
        return ge(n, Tn, u, u, u, e);
      });
      function Td(n, e) {
        if (typeof n != "function")
          throw new Xn(C);
        return e = e === u ? e : F(e), H(n, e);
      }
      function Ld(n, e) {
        if (typeof n != "function")
          throw new Xn(C);
        return e = e == null ? 0 : wn(F(e), 0), H(function(t) {
          var r = t[e], i = Re(t, 0, e);
          return r && Ce(i, r), Pn(n, this, i);
        });
      }
      function Id(n, e, t) {
        var r = !0, i = !0;
        if (typeof n != "function")
          throw new Xn(C);
        return sn(t) && (r = "leading" in t ? !!t.leading : r, i = "trailing" in t ? !!t.trailing : i), $o(n, e, {
          leading: r,
          maxWait: e,
          trailing: i
        });
      }
      function Rd(n) {
        return Ro(n, 1);
      }
      function Ed(n, e) {
        return Yi(Ri(e), n);
      }
      function Wd() {
        if (!arguments.length)
          return [];
        var n = arguments[0];
        return P(n) ? n : [n];
      }
      function Od(n) {
        return Kn(n, J);
      }
      function Bd(n, e) {
        return e = typeof e == "function" ? e : u, Kn(n, J, e);
      }
      function $d(n) {
        return Kn(n, E | J);
      }
      function Nd(n, e) {
        return e = typeof e == "function" ? e : u, Kn(n, E | J, e);
      }
      function Md(n, e) {
        return e == null || xl(n, e, yn(e));
      }
      function re(n, e) {
        return n === e || n !== n && e !== e;
      }
      var Pd = wr(pi), Fd = wr(function(n, e) {
        return n >= e;
      }), He = Ll(function() {
        return arguments;
      }()) ? Ll : function(n) {
        return gn(n) && nn.call(n, "callee") && !dl.call(n, "callee");
      }, P = d.isArray, Dd = Ku ? Fn(Ku) : qs;
      function Bn(n) {
        return n != null && Ir(n.length) && !pe(n);
      }
      function _n(n) {
        return gn(n) && Bn(n);
      }
      function Ud(n) {
        return n === !0 || n === !1 || gn(n) && Rn(n) == ot;
      }
      var Ee = ns || tu, Hd = Zu ? Fn(Zu) : Ks;
      function zd(n) {
        return gn(n) && n.nodeType === 1 && !It(n);
      }
      function Gd(n) {
        if (n == null)
          return !0;
        if (Bn(n) && (P(n) || typeof n == "string" || typeof n.splice == "function" || Ee(n) || rt(n) || He(n)))
          return !n.length;
        var e = In(n);
        if (e == jn || e == ne)
          return !n.size;
        if (Tt(n))
          return !yi(n).length;
        for (var t in n)
          if (nn.call(n, t))
            return !1;
        return !0;
      }
      function kd(n, e) {
        return Ct(n, e);
      }
      function Yd(n, e, t) {
        t = typeof t == "function" ? t : u;
        var r = t ? t(n, e) : u;
        return r === u ? Ct(n, e, u, t) : !!r;
      }
      function Xi(n) {
        if (!gn(n))
          return !1;
        var e = Rn(n);
        return e == Ut || e == da || typeof n.message == "string" && typeof n.name == "string" && !It(n);
      }
      function Xd(n) {
        return typeof n == "number" && vl(n);
      }
      function pe(n) {
        if (!sn(n))
          return !1;
        var e = Rn(n);
        return e == Ht || e == bu || e == ha || e == va;
      }
      function Mo(n) {
        return typeof n == "number" && n == F(n);
      }
      function Ir(n) {
        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= xe;
      }
      function sn(n) {
        var e = typeof n;
        return n != null && (e == "object" || e == "function");
      }
      function gn(n) {
        return n != null && typeof n == "object";
      }
      var Po = Ju ? Fn(Ju) : Js;
      function qd(n, e) {
        return n === e || wi(n, e, Mi(e));
      }
      function Kd(n, e, t) {
        return t = typeof t == "function" ? t : u, wi(n, e, Mi(e), t);
      }
      function Zd(n) {
        return Fo(n) && n != +n;
      }
      function Jd(n) {
        if (Bc(n))
          throw new N(x);
        return Il(n);
      }
      function Qd(n) {
        return n === null;
      }
      function Vd(n) {
        return n == null;
      }
      function Fo(n) {
        return typeof n == "number" || gn(n) && Rn(n) == ft;
      }
      function It(n) {
        if (!gn(n) || Rn(n) != se)
          return !1;
        var e = er(n);
        if (e === null)
          return !0;
        var t = nn.call(e, "constructor") && e.constructor;
        return typeof t == "function" && t instanceof t && Qt.call(t) == Kf;
      }
      var qi = Qu ? Fn(Qu) : Qs;
      function jd(n) {
        return Mo(n) && n >= -xe && n <= xe;
      }
      var Do = Vu ? Fn(Vu) : Vs;
      function Rr(n) {
        return typeof n == "string" || !P(n) && gn(n) && Rn(n) == ct;
      }
      function Un(n) {
        return typeof n == "symbol" || gn(n) && Rn(n) == zt;
      }
      var rt = ju ? Fn(ju) : js;
      function ng(n) {
        return n === u;
      }
      function eg(n) {
        return gn(n) && In(n) == ht;
      }
      function tg(n) {
        return gn(n) && Rn(n) == pa;
      }
      var rg = wr(xi), ig = wr(function(n, e) {
        return n <= e;
      });
      function Uo(n) {
        if (!n)
          return [];
        if (Bn(n))
          return Rr(n) ? ee(n) : On(n);
        if (vt && n[vt])
          return Mf(n[vt]());
        var e = In(n), t = e == jn ? ai : e == ne ? Kt : it;
        return t(n);
      }
      function me(n) {
        if (!n)
          return n === 0 ? n : 0;
        if (n = Qn(n), n === Oe || n === -Oe) {
          var e = n < 0 ? -1 : 1;
          return e * aa;
        }
        return n === n ? n : 0;
      }
      function F(n) {
        var e = me(n), t = e % 1;
        return e === e ? t ? e - t : e : 0;
      }
      function Ho(n) {
        return n ? Pe(F(n), 0, le) : 0;
      }
      function Qn(n) {
        if (typeof n == "number")
          return n;
        if (Un(n))
          return Ft;
        if (sn(n)) {
          var e = typeof n.valueOf == "function" ? n.valueOf() : n;
          n = sn(e) ? e + "" : e;
        }
        if (typeof n != "string")
          return n === 0 ? n : +n;
        n = ul(n);
        var t = Fa.test(n);
        return t || Ua.test(n) ? wf(n.slice(2), t ? 2 : 8) : Pa.test(n) ? Ft : +n;
      }
      function zo(n) {
        return ae(n, $n(n));
      }
      function ug(n) {
        return n ? Pe(F(n), -xe, xe) : n === 0 ? n : 0;
      }
      function j(n) {
        return n == null ? "" : Dn(n);
      }
      var lg = nt(function(n, e) {
        if (Tt(e) || Bn(e)) {
          ae(e, yn(e), n);
          return;
        }
        for (var t in e)
          nn.call(e, t) && yt(n, t, e[t]);
      }), Go = nt(function(n, e) {
        ae(e, $n(e), n);
      }), Er = nt(function(n, e, t, r) {
        ae(e, $n(e), n, r);
      }), og = nt(function(n, e, t, r) {
        ae(e, yn(e), n, r);
      }), ag = ve(gi);
      function fg(n, e) {
        var t = je(n);
        return e == null ? t : yl(t, e);
      }
      var sg = H(function(n, e) {
        n = ln(n);
        var t = -1, r = e.length, i = r > 2 ? e[2] : u;
        for (i && En(e[0], e[1], i) && (r = 1); ++t < r; )
          for (var o = e[t], f = $n(o), s = -1, h = f.length; ++s < h; ) {
            var v = f[s], _ = n[v];
            (_ === u || re(_, Je[v]) && !nn.call(n, v)) && (n[v] = o[v]);
          }
        return n;
      }), cg = H(function(n) {
        return n.push(u, uo), Pn(ko, u, n);
      });
      function hg(n, e) {
        return el(n, W(e, 3), oe);
      }
      function dg(n, e) {
        return el(n, W(e, 3), _i);
      }
      function gg(n, e) {
        return n == null ? n : vi(n, W(e, 3), $n);
      }
      function vg(n, e) {
        return n == null ? n : Sl(n, W(e, 3), $n);
      }
      function _g(n, e) {
        return n && oe(n, W(e, 3));
      }
      function pg(n, e) {
        return n && _i(n, W(e, 3));
      }
      function mg(n) {
        return n == null ? [] : cr(n, yn(n));
      }
      function wg(n) {
        return n == null ? [] : cr(n, $n(n));
      }
      function Ki(n, e, t) {
        var r = n == null ? u : Fe(n, e);
        return r === u ? t : r;
      }
      function yg(n, e) {
        return n != null && ao(n, e, Gs);
      }
      function Zi(n, e) {
        return n != null && ao(n, e, ks);
      }
      var xg = no(function(n, e, t) {
        e != null && typeof e.toString != "function" && (e = Vt.call(e)), n[e] = t;
      }, Qi(Nn)), bg = no(function(n, e, t) {
        e != null && typeof e.toString != "function" && (e = Vt.call(e)), nn.call(n, e) ? n[e].push(t) : n[e] = [t];
      }, W), Cg = H(bt);
      function yn(n) {
        return Bn(n) ? ml(n) : yi(n);
      }
      function $n(n) {
        return Bn(n) ? ml(n, !0) : nc(n);
      }
      function Ag(n, e) {
        var t = {};
        return e = W(e, 3), oe(n, function(r, i, o) {
          de(t, e(r, i, o), r);
        }), t;
      }
      function Sg(n, e) {
        var t = {};
        return e = W(e, 3), oe(n, function(r, i, o) {
          de(t, i, e(r, i, o));
        }), t;
      }
      var Tg = nt(function(n, e, t) {
        hr(n, e, t);
      }), ko = nt(function(n, e, t, r) {
        hr(n, e, t, r);
      }), Lg = ve(function(n, e) {
        var t = {};
        if (n == null)
          return t;
        var r = !1;
        e = fn(e, function(o) {
          return o = Ie(o, n), r || (r = o.length > 1), o;
        }), ae(n, $i(n), t), r && (t = Kn(t, E | Z | J, xc));
        for (var i = e.length; i--; )
          Ti(t, e[i]);
        return t;
      });
      function Ig(n, e) {
        return Yo(n, Lr(W(e)));
      }
      var Rg = ve(function(n, e) {
        return n == null ? {} : tc(n, e);
      });
      function Yo(n, e) {
        if (n == null)
          return {};
        var t = fn($i(n), function(r) {
          return [r];
        });
        return e = W(e), Nl(n, t, function(r, i) {
          return e(r, i[0]);
        });
      }
      function Eg(n, e, t) {
        e = Ie(e, n);
        var r = -1, i = e.length;
        for (i || (i = 1, n = u); ++r < i; ) {
          var o = n == null ? u : n[fe(e[r])];
          o === u && (r = i, o = t), n = pe(o) ? o.call(n) : o;
        }
        return n;
      }
      function Wg(n, e, t) {
        return n == null ? n : At(n, e, t);
      }
      function Og(n, e, t, r) {
        return r = typeof r == "function" ? r : u, n == null ? n : At(n, e, t, r);
      }
      var Xo = ro(yn), qo = ro($n);
      function Bg(n, e, t) {
        var r = P(n), i = r || Ee(n) || rt(n);
        if (e = W(e, 4), t == null) {
          var o = n && n.constructor;
          i ? t = r ? new o() : [] : sn(n) ? t = pe(o) ? je(er(n)) : {} : t = {};
        }
        return (i ? Yn : oe)(n, function(f, s, h) {
          return e(t, f, s, h);
        }), t;
      }
      function $g(n, e) {
        return n == null ? !0 : Ti(n, e);
      }
      function Ng(n, e, t) {
        return n == null ? n : Ul(n, e, Ri(t));
      }
      function Mg(n, e, t, r) {
        return r = typeof r == "function" ? r : u, n == null ? n : Ul(n, e, Ri(t), r);
      }
      function it(n) {
        return n == null ? [] : oi(n, yn(n));
      }
      function Pg(n) {
        return n == null ? [] : oi(n, $n(n));
      }
      function Fg(n, e, t) {
        return t === u && (t = e, e = u), t !== u && (t = Qn(t), t = t === t ? t : 0), e !== u && (e = Qn(e), e = e === e ? e : 0), Pe(Qn(n), e, t);
      }
      function Dg(n, e, t) {
        return e = me(e), t === u ? (t = e, e = 0) : t = me(t), n = Qn(n), Ys(n, e, t);
      }
      function Ug(n, e, t) {
        if (t && typeof t != "boolean" && En(n, e, t) && (e = t = u), t === u && (typeof e == "boolean" ? (t = e, e = u) : typeof n == "boolean" && (t = n, n = u)), n === u && e === u ? (n = 0, e = 1) : (n = me(n), e === u ? (e = n, n = 0) : e = me(e)), n > e) {
          var r = n;
          n = e, e = r;
        }
        if (t || n % 1 || e % 1) {
          var i = _l();
          return Ln(n + i * (e - n + mf("1e-" + ((i + "").length - 1))), e);
        }
        return Ci(n, e);
      }
      var Hg = et(function(n, e, t) {
        return e = e.toLowerCase(), n + (t ? Ko(e) : e);
      });
      function Ko(n) {
        return Ji(j(n).toLowerCase());
      }
      function Zo(n) {
        return n = j(n), n && n.replace(za, Wf).replace(af, "");
      }
      function zg(n, e, t) {
        n = j(n), e = Dn(e);
        var r = n.length;
        t = t === u ? r : Pe(F(t), 0, r);
        var i = t;
        return t -= e.length, t >= 0 && n.slice(t, i) == e;
      }
      function Gg(n) {
        return n = j(n), n && ba.test(n) ? n.replace(Su, Of) : n;
      }
      function kg(n) {
        return n = j(n), n && Ia.test(n) ? n.replace(Yr, "\\$&") : n;
      }
      var Yg = et(function(n, e, t) {
        return n + (t ? "-" : "") + e.toLowerCase();
      }), Xg = et(function(n, e, t) {
        return n + (t ? " " : "") + e.toLowerCase();
      }), qg = Ql("toLowerCase");
      function Kg(n, e, t) {
        n = j(n), e = F(e);
        var r = e ? Ke(n) : 0;
        if (!e || r >= e)
          return n;
        var i = (e - r) / 2;
        return mr(ur(i), t) + n + mr(ir(i), t);
      }
      function Zg(n, e, t) {
        n = j(n), e = F(e);
        var r = e ? Ke(n) : 0;
        return e && r < e ? n + mr(e - r, t) : n;
      }
      function Jg(n, e, t) {
        n = j(n), e = F(e);
        var r = e ? Ke(n) : 0;
        return e && r < e ? mr(e - r, t) + n : n;
      }
      function Qg(n, e, t) {
        return t || e == null ? e = 0 : e && (e = +e), is(j(n).replace(Xr, ""), e || 0);
      }
      function Vg(n, e, t) {
        return (t ? En(n, e, t) : e === u) ? e = 1 : e = F(e), Ai(j(n), e);
      }
      function jg() {
        var n = arguments, e = j(n[0]);
        return n.length < 3 ? e : e.replace(n[1], n[2]);
      }
      var nv = et(function(n, e, t) {
        return n + (t ? "_" : "") + e.toLowerCase();
      });
      function ev(n, e, t) {
        return t && typeof t != "number" && En(n, e, t) && (e = t = u), t = t === u ? le : t >>> 0, t ? (n = j(n), n && (typeof e == "string" || e != null && !qi(e)) && (e = Dn(e), !e && qe(n)) ? Re(ee(n), 0, t) : n.split(e, t)) : [];
      }
      var tv = et(function(n, e, t) {
        return n + (t ? " " : "") + Ji(e);
      });
      function rv(n, e, t) {
        return n = j(n), t = t == null ? 0 : Pe(F(t), 0, n.length), e = Dn(e), n.slice(t, t + e.length) == e;
      }
      function iv(n, e, t) {
        var r = l.templateSettings;
        t && En(n, e, t) && (e = u), n = j(n), e = Er({}, e, r, io);
        var i = Er({}, e.imports, r.imports, io), o = yn(i), f = oi(i, o), s, h, v = 0, _ = e.interpolate || Gt, p = "__p += '", A = fi((e.escape || Gt).source + "|" + _.source + "|" + (_ === Tu ? Ma : Gt).source + "|" + (e.evaluate || Gt).source + "|$", "g"), I = "//# sourceURL=" + (nn.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++df + "]") + `
`;
        n.replace(A, function(B, G, Y, Hn, Wn, zn) {
          return Y || (Y = Hn), p += n.slice(v, zn).replace(Ga, Bf), G && (s = !0, p += `' +
__e(` + G + `) +
'`), Wn && (h = !0, p += `';
` + Wn + `;
__p += '`), Y && (p += `' +
((__t = (` + Y + `)) == null ? '' : __t) +
'`), v = zn + B.length, B;
        }), p += `';
`;
        var O = nn.call(e, "variable") && e.variable;
        if (!O)
          p = `with (obj) {
` + p + `
}
`;
        else if ($a.test(O))
          throw new N(L);
        p = (h ? p.replace(ma, "") : p).replace(wa, "$1").replace(ya, "$1;"), p = "function(" + (O || "obj") + `) {
` + (O ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (h ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + p + `return __p
}`;
        var U = Qo(function() {
          return V(o, I + "return " + p).apply(u, f);
        });
        if (U.source = p, Xi(U))
          throw U;
        return U;
      }
      function uv(n) {
        return j(n).toLowerCase();
      }
      function lv(n) {
        return j(n).toUpperCase();
      }
      function ov(n, e, t) {
        if (n = j(n), n && (t || e === u))
          return ul(n);
        if (!n || !(e = Dn(e)))
          return n;
        var r = ee(n), i = ee(e), o = ll(r, i), f = ol(r, i) + 1;
        return Re(r, o, f).join("");
      }
      function av(n, e, t) {
        if (n = j(n), n && (t || e === u))
          return n.slice(0, fl(n) + 1);
        if (!n || !(e = Dn(e)))
          return n;
        var r = ee(n), i = ol(r, ee(e)) + 1;
        return Re(r, 0, i).join("");
      }
      function fv(n, e, t) {
        if (n = j(n), n && (t || e === u))
          return n.replace(Xr, "");
        if (!n || !(e = Dn(e)))
          return n;
        var r = ee(n), i = ll(r, ee(e));
        return Re(r, i).join("");
      }
      function sv(n, e) {
        var t = Vn, r = We;
        if (sn(e)) {
          var i = "separator" in e ? e.separator : i;
          t = "length" in e ? F(e.length) : t, r = "omission" in e ? Dn(e.omission) : r;
        }
        n = j(n);
        var o = n.length;
        if (qe(n)) {
          var f = ee(n);
          o = f.length;
        }
        if (t >= o)
          return n;
        var s = t - Ke(r);
        if (s < 1)
          return r;
        var h = f ? Re(f, 0, s).join("") : n.slice(0, s);
        if (i === u)
          return h + r;
        if (f && (s += h.length - s), qi(i)) {
          if (n.slice(s).search(i)) {
            var v, _ = h;
            for (i.global || (i = fi(i.source, j(Lu.exec(i)) + "g")), i.lastIndex = 0; v = i.exec(_); )
              var p = v.index;
            h = h.slice(0, p === u ? s : p);
          }
        } else if (n.indexOf(Dn(i), s) != s) {
          var A = h.lastIndexOf(i);
          A > -1 && (h = h.slice(0, A));
        }
        return h + r;
      }
      function cv(n) {
        return n = j(n), n && xa.test(n) ? n.replace(Au, Uf) : n;
      }
      var hv = et(function(n, e, t) {
        return n + (t ? " " : "") + e.toUpperCase();
      }), Ji = Ql("toUpperCase");
      function Jo(n, e, t) {
        return n = j(n), e = t ? u : e, e === u ? Nf(n) ? Gf(n) : Tf(n) : n.match(e) || [];
      }
      var Qo = H(function(n, e) {
        try {
          return Pn(n, u, e);
        } catch (t) {
          return Xi(t) ? t : new N(t);
        }
      }), dv = ve(function(n, e) {
        return Yn(e, function(t) {
          t = fe(t), de(n, t, ki(n[t], n));
        }), n;
      });
      function gv(n) {
        var e = n == null ? 0 : n.length, t = W();
        return n = e ? fn(n, function(r) {
          if (typeof r[1] != "function")
            throw new Xn(C);
          return [t(r[0]), r[1]];
        }) : [], H(function(r) {
          for (var i = -1; ++i < e; ) {
            var o = n[i];
            if (Pn(o[0], this, r))
              return Pn(o[1], this, r);
          }
        });
      }
      function vv(n) {
        return Us(Kn(n, E));
      }
      function Qi(n) {
        return function() {
          return n;
        };
      }
      function _v(n, e) {
        return n == null || n !== n ? e : n;
      }
      var pv = jl(), mv = jl(!0);
      function Nn(n) {
        return n;
      }
      function Vi(n) {
        return Rl(typeof n == "function" ? n : Kn(n, E));
      }
      function wv(n) {
        return Wl(Kn(n, E));
      }
      function yv(n, e) {
        return Ol(n, Kn(e, E));
      }
      var xv = H(function(n, e) {
        return function(t) {
          return bt(t, n, e);
        };
      }), bv = H(function(n, e) {
        return function(t) {
          return bt(n, t, e);
        };
      });
      function ji(n, e, t) {
        var r = yn(e), i = cr(e, r);
        t == null && !(sn(e) && (i.length || !r.length)) && (t = e, e = n, n = this, i = cr(e, yn(e)));
        var o = !(sn(t) && "chain" in t) || !!t.chain, f = pe(n);
        return Yn(i, function(s) {
          var h = e[s];
          n[s] = h, f && (n.prototype[s] = function() {
            var v = this.__chain__;
            if (o || v) {
              var _ = n(this.__wrapped__), p = _.__actions__ = On(this.__actions__);
              return p.push({ func: h, args: arguments, thisArg: n }), _.__chain__ = v, _;
            }
            return h.apply(n, Ce([this.value()], arguments));
          });
        }), n;
      }
      function Cv() {
        return Cn._ === this && (Cn._ = Zf), this;
      }
      function nu() {
      }
      function Av(n) {
        return n = F(n), H(function(e) {
          return Bl(e, n);
        });
      }
      var Sv = Wi(fn), Tv = Wi(nl), Lv = Wi(ti);
      function Vo(n) {
        return Fi(n) ? ri(fe(n)) : rc(n);
      }
      function Iv(n) {
        return function(e) {
          return n == null ? u : Fe(n, e);
        };
      }
      var Rv = eo(), Ev = eo(!0);
      function eu() {
        return [];
      }
      function tu() {
        return !1;
      }
      function Wv() {
        return {};
      }
      function Ov() {
        return "";
      }
      function Bv() {
        return !0;
      }
      function $v(n, e) {
        if (n = F(n), n < 1 || n > xe)
          return [];
        var t = le, r = Ln(n, le);
        e = W(e), n -= le;
        for (var i = li(r, e); ++t < n; )
          e(t);
        return i;
      }
      function Nv(n) {
        return P(n) ? fn(n, fe) : Un(n) ? [n] : On(mo(j(n)));
      }
      function Mv(n) {
        var e = ++qf;
        return j(n) + e;
      }
      var Pv = pr(function(n, e) {
        return n + e;
      }, 0), Fv = Oi("ceil"), Dv = pr(function(n, e) {
        return n / e;
      }, 1), Uv = Oi("floor");
      function Hv(n) {
        return n && n.length ? sr(n, Nn, pi) : u;
      }
      function zv(n, e) {
        return n && n.length ? sr(n, W(e, 2), pi) : u;
      }
      function Gv(n) {
        return rl(n, Nn);
      }
      function kv(n, e) {
        return rl(n, W(e, 2));
      }
      function Yv(n) {
        return n && n.length ? sr(n, Nn, xi) : u;
      }
      function Xv(n, e) {
        return n && n.length ? sr(n, W(e, 2), xi) : u;
      }
      var qv = pr(function(n, e) {
        return n * e;
      }, 1), Kv = Oi("round"), Zv = pr(function(n, e) {
        return n - e;
      }, 0);
      function Jv(n) {
        return n && n.length ? ui(n, Nn) : 0;
      }
      function Qv(n, e) {
        return n && n.length ? ui(n, W(e, 2)) : 0;
      }
      return l.after = wd, l.ary = Ro, l.assign = lg, l.assignIn = Go, l.assignInWith = Er, l.assignWith = og, l.at = ag, l.before = Eo, l.bind = ki, l.bindAll = dv, l.bindKey = Wo, l.castArray = Wd, l.chain = To, l.chunk = Uc, l.compact = Hc, l.concat = zc, l.cond = gv, l.conforms = vv, l.constant = Qi, l.countBy = Jh, l.create = fg, l.curry = Oo, l.curryRight = Bo, l.debounce = $o, l.defaults = sg, l.defaultsDeep = cg, l.defer = yd, l.delay = xd, l.difference = Gc, l.differenceBy = kc, l.differenceWith = Yc, l.drop = Xc, l.dropRight = qc, l.dropRightWhile = Kc, l.dropWhile = Zc, l.fill = Jc, l.filter = Vh, l.flatMap = ed, l.flatMapDeep = td, l.flatMapDepth = rd, l.flatten = bo, l.flattenDeep = Qc, l.flattenDepth = Vc, l.flip = bd, l.flow = pv, l.flowRight = mv, l.fromPairs = jc, l.functions = mg, l.functionsIn = wg, l.groupBy = id, l.initial = eh, l.intersection = th, l.intersectionBy = rh, l.intersectionWith = ih, l.invert = xg, l.invertBy = bg, l.invokeMap = ld, l.iteratee = Vi, l.keyBy = od, l.keys = yn, l.keysIn = $n, l.map = Ar, l.mapKeys = Ag, l.mapValues = Sg, l.matches = wv, l.matchesProperty = yv, l.memoize = Tr, l.merge = Tg, l.mergeWith = ko, l.method = xv, l.methodOf = bv, l.mixin = ji, l.negate = Lr, l.nthArg = Av, l.omit = Lg, l.omitBy = Ig, l.once = Cd, l.orderBy = ad, l.over = Sv, l.overArgs = Ad, l.overEvery = Tv, l.overSome = Lv, l.partial = Yi, l.partialRight = No, l.partition = fd, l.pick = Rg, l.pickBy = Yo, l.property = Vo, l.propertyOf = Iv, l.pull = ah, l.pullAll = Ao, l.pullAllBy = fh, l.pullAllWith = sh, l.pullAt = ch, l.range = Rv, l.rangeRight = Ev, l.rearg = Sd, l.reject = hd, l.remove = hh, l.rest = Td, l.reverse = zi, l.sampleSize = gd, l.set = Wg, l.setWith = Og, l.shuffle = vd, l.slice = dh, l.sortBy = md, l.sortedUniq = yh, l.sortedUniqBy = xh, l.split = ev, l.spread = Ld, l.tail = bh, l.take = Ch, l.takeRight = Ah, l.takeRightWhile = Sh, l.takeWhile = Th, l.tap = Hh, l.throttle = Id, l.thru = Cr, l.toArray = Uo, l.toPairs = Xo, l.toPairsIn = qo, l.toPath = Nv, l.toPlainObject = zo, l.transform = Bg, l.unary = Rd, l.union = Lh, l.unionBy = Ih, l.unionWith = Rh, l.uniq = Eh, l.uniqBy = Wh, l.uniqWith = Oh, l.unset = $g, l.unzip = Gi, l.unzipWith = So, l.update = Ng, l.updateWith = Mg, l.values = it, l.valuesIn = Pg, l.without = Bh, l.words = Jo, l.wrap = Ed, l.xor = $h, l.xorBy = Nh, l.xorWith = Mh, l.zip = Ph, l.zipObject = Fh, l.zipObjectDeep = Dh, l.zipWith = Uh, l.entries = Xo, l.entriesIn = qo, l.extend = Go, l.extendWith = Er, ji(l, l), l.add = Pv, l.attempt = Qo, l.camelCase = Hg, l.capitalize = Ko, l.ceil = Fv, l.clamp = Fg, l.clone = Od, l.cloneDeep = $d, l.cloneDeepWith = Nd, l.cloneWith = Bd, l.conformsTo = Md, l.deburr = Zo, l.defaultTo = _v, l.divide = Dv, l.endsWith = zg, l.eq = re, l.escape = Gg, l.escapeRegExp = kg, l.every = Qh, l.find = jh, l.findIndex = yo, l.findKey = hg, l.findLast = nd, l.findLastIndex = xo, l.findLastKey = dg, l.floor = Uv, l.forEach = Lo, l.forEachRight = Io, l.forIn = gg, l.forInRight = vg, l.forOwn = _g, l.forOwnRight = pg, l.get = Ki, l.gt = Pd, l.gte = Fd, l.has = yg, l.hasIn = Zi, l.head = Co, l.identity = Nn, l.includes = ud, l.indexOf = nh, l.inRange = Dg, l.invoke = Cg, l.isArguments = He, l.isArray = P, l.isArrayBuffer = Dd, l.isArrayLike = Bn, l.isArrayLikeObject = _n, l.isBoolean = Ud, l.isBuffer = Ee, l.isDate = Hd, l.isElement = zd, l.isEmpty = Gd, l.isEqual = kd, l.isEqualWith = Yd, l.isError = Xi, l.isFinite = Xd, l.isFunction = pe, l.isInteger = Mo, l.isLength = Ir, l.isMap = Po, l.isMatch = qd, l.isMatchWith = Kd, l.isNaN = Zd, l.isNative = Jd, l.isNil = Vd, l.isNull = Qd, l.isNumber = Fo, l.isObject = sn, l.isObjectLike = gn, l.isPlainObject = It, l.isRegExp = qi, l.isSafeInteger = jd, l.isSet = Do, l.isString = Rr, l.isSymbol = Un, l.isTypedArray = rt, l.isUndefined = ng, l.isWeakMap = eg, l.isWeakSet = tg, l.join = uh, l.kebabCase = Yg, l.last = Jn, l.lastIndexOf = lh, l.lowerCase = Xg, l.lowerFirst = qg, l.lt = rg, l.lte = ig, l.max = Hv, l.maxBy = zv, l.mean = Gv, l.meanBy = kv, l.min = Yv, l.minBy = Xv, l.stubArray = eu, l.stubFalse = tu, l.stubObject = Wv, l.stubString = Ov, l.stubTrue = Bv, l.multiply = qv, l.nth = oh, l.noConflict = Cv, l.noop = nu, l.now = Sr, l.pad = Kg, l.padEnd = Zg, l.padStart = Jg, l.parseInt = Qg, l.random = Ug, l.reduce = sd, l.reduceRight = cd, l.repeat = Vg, l.replace = jg, l.result = Eg, l.round = Kv, l.runInContext = c, l.sample = dd, l.size = _d, l.snakeCase = nv, l.some = pd, l.sortedIndex = gh, l.sortedIndexBy = vh, l.sortedIndexOf = _h, l.sortedLastIndex = ph, l.sortedLastIndexBy = mh, l.sortedLastIndexOf = wh, l.startCase = tv, l.startsWith = rv, l.subtract = Zv, l.sum = Jv, l.sumBy = Qv, l.template = iv, l.times = $v, l.toFinite = me, l.toInteger = F, l.toLength = Ho, l.toLower = uv, l.toNumber = Qn, l.toSafeInteger = ug, l.toString = j, l.toUpper = lv, l.trim = ov, l.trimEnd = av, l.trimStart = fv, l.truncate = sv, l.unescape = cv, l.uniqueId = Mv, l.upperCase = hv, l.upperFirst = Ji, l.each = Lo, l.eachRight = Io, l.first = Co, ji(l, function() {
        var n = {};
        return oe(l, function(e, t) {
          nn.call(l.prototype, t) || (n[t] = e);
        }), n;
      }(), { chain: !1 }), l.VERSION = m, Yn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        l[n].placeholder = l;
      }), Yn(["drop", "take"], function(n, e) {
        k.prototype[n] = function(t) {
          t = t === u ? 1 : wn(F(t), 0);
          var r = this.__filtered__ && !e ? new k(this) : this.clone();
          return r.__filtered__ ? r.__takeCount__ = Ln(t, r.__takeCount__) : r.__views__.push({
            size: Ln(t, le),
            type: n + (r.__dir__ < 0 ? "Right" : "")
          }), r;
        }, k.prototype[n + "Right"] = function(t) {
          return this.reverse()[n](t).reverse();
        };
      }), Yn(["filter", "map", "takeWhile"], function(n, e) {
        var t = e + 1, r = t == lt || t == oa;
        k.prototype[n] = function(i) {
          var o = this.clone();
          return o.__iteratees__.push({
            iteratee: W(i, 3),
            type: t
          }), o.__filtered__ = o.__filtered__ || r, o;
        };
      }), Yn(["head", "last"], function(n, e) {
        var t = "take" + (e ? "Right" : "");
        k.prototype[n] = function() {
          return this[t](1).value()[0];
        };
      }), Yn(["initial", "tail"], function(n, e) {
        var t = "drop" + (e ? "" : "Right");
        k.prototype[n] = function() {
          return this.__filtered__ ? new k(this) : this[t](1);
        };
      }), k.prototype.compact = function() {
        return this.filter(Nn);
      }, k.prototype.find = function(n) {
        return this.filter(n).head();
      }, k.prototype.findLast = function(n) {
        return this.reverse().find(n);
      }, k.prototype.invokeMap = H(function(n, e) {
        return typeof n == "function" ? new k(this) : this.map(function(t) {
          return bt(t, n, e);
        });
      }), k.prototype.reject = function(n) {
        return this.filter(Lr(W(n)));
      }, k.prototype.slice = function(n, e) {
        n = F(n);
        var t = this;
        return t.__filtered__ && (n > 0 || e < 0) ? new k(t) : (n < 0 ? t = t.takeRight(-n) : n && (t = t.drop(n)), e !== u && (e = F(e), t = e < 0 ? t.dropRight(-e) : t.take(e - n)), t);
      }, k.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, k.prototype.toArray = function() {
        return this.take(le);
      }, oe(k.prototype, function(n, e) {
        var t = /^(?:filter|find|map|reject)|While$/.test(e), r = /^(?:head|last)$/.test(e), i = l[r ? "take" + (e == "last" ? "Right" : "") : e], o = r || /^find/.test(e);
        !i || (l.prototype[e] = function() {
          var f = this.__wrapped__, s = r ? [1] : arguments, h = f instanceof k, v = s[0], _ = h || P(f), p = function(G) {
            var Y = i.apply(l, Ce([G], s));
            return r && A ? Y[0] : Y;
          };
          _ && t && typeof v == "function" && v.length != 1 && (h = _ = !1);
          var A = this.__chain__, I = !!this.__actions__.length, O = o && !A, U = h && !I;
          if (!o && _) {
            f = U ? f : new k(this);
            var B = n.apply(f, s);
            return B.__actions__.push({ func: Cr, args: [p], thisArg: u }), new qn(B, A);
          }
          return O && U ? n.apply(this, s) : (B = this.thru(p), O ? r ? B.value()[0] : B.value() : B);
        });
      }), Yn(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var e = Zt[n], t = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(n);
        l.prototype[n] = function() {
          var i = arguments;
          if (r && !this.__chain__) {
            var o = this.value();
            return e.apply(P(o) ? o : [], i);
          }
          return this[t](function(f) {
            return e.apply(P(f) ? f : [], i);
          });
        };
      }), oe(k.prototype, function(n, e) {
        var t = l[e];
        if (t) {
          var r = t.name + "";
          nn.call(Ve, r) || (Ve[r] = []), Ve[r].push({ name: e, func: t });
        }
      }), Ve[_r(u, bn).name] = [{
        name: "wrapper",
        func: u
      }], k.prototype.clone = cs, k.prototype.reverse = hs, k.prototype.value = ds, l.prototype.at = zh, l.prototype.chain = Gh, l.prototype.commit = kh, l.prototype.next = Yh, l.prototype.plant = qh, l.prototype.reverse = Kh, l.prototype.toJSON = l.prototype.valueOf = l.prototype.value = Zh, l.prototype.first = l.prototype.head, vt && (l.prototype[vt] = Xh), l;
    }, Ze = kf();
    Be ? ((Be.exports = Ze)._ = Ze, Vr._ = Ze) : Cn._ = Ze;
  }).call(Rt);
})(mu, mu.exports);
const Or = mu.exports, M = (a) => {
  if (!!a)
    return Or.isNumber(a) ? `${a}px` : a;
}, ra = () => {
  const a = Vv();
  return (y, u) => {
    var S;
    return u || (u = a == null ? void 0 : a.slots), (((S = u == null ? void 0 : u.default) == null ? void 0 : S.call(u)) || []).map((x) => x.children && Array.isArray(x.children) ? x.children : x).flat().filter((x) => {
      var C;
      return (C = x.type.name) == null ? void 0 : C.endsWith(y);
    });
  };
}, Br = /* @__PURE__ */ hn({
  __name: "icon",
  props: {
    name: { default: "UserAvatar" },
    size: null,
    color: null,
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(a, { emit: y }) {
    const u = z(() => [
      "i-icon",
      `icon-${a.name}`,
      a.disabled && "i-icon-is-disabled"
    ]), m = z(() => ({
      color: a.color || void 0,
      fontSize: M(a.size)
    }));
    return (S, x) => (K(), en("i", {
      class: ue(vn(u)),
      style: ye(vn(m))
    }, null, 6));
  }
});
const iu = {
  install(a) {
    a.component("i-icon", Br);
  }
};
const r_ = hn({
  name: "Divider",
  props: {
    align: {
      type: String,
      default: "center"
    },
    dashed: {
      type: Boolean,
      default: !1
    }
  },
  setup(a, {
    slots: y
  }) {
    return () => {
      var m;
      const u = (m = y.default) == null ? void 0 : m.call(y);
      return X("div", {
        class: ["i-divider", a.dashed && "i-divider--dashed", u && "i-divider--with-text", u && `i-divider--with-text-${a.align}`]
      }, [u && X("span", {
        class: "i-divider--text"
      }, [u])]);
    };
  }
}), uu = {
  install(a) {
    a.component("i-divider", r_);
  }
}, i_ = /* @__PURE__ */ hn({
  __name: "grid",
  props: {
    align: { default: "top" },
    gutter: null,
    justify: { default: "start" }
  },
  setup(a) {
    const y = z(() => [
      "i-grid",
      a.align && `i-grid--align-${a.align}`,
      a.justify && `i-grid--justify-${a.justify}`
    ]);
    return $t("gutter", a.gutter), (u, m) => (K(), en("div", {
      class: ue(vn(y))
    }, [
      xn(u.$slots, "default", { gutter: a.gutter })
    ], 2));
  }
});
const u_ = /* @__PURE__ */ hn({
  __name: "grid-item",
  props: {
    align: null,
    gutter: null,
    offset: null,
    order: null,
    span: { default: 24 },
    width: null
  },
  setup(a) {
    const y = (x) => {
      let C = parseInt(x.toString());
      return C > 24 && (C = 24), C < 0 && (C = 0), C;
    }, u = z(() => [
      "i-grid__item",
      `i-grid__item--span-${y(a.span)}`,
      a.offset && `i-grid__item--offset-${y(a.offset)}`,
      a.order && `i-grid__item--order-${y(a.order)}`,
      a.align && `i-grid__item--align-${a.align}`
    ]), m = Nt("gutter"), S = z(() => [
      {
        paddingLeft: M(a.gutter) || M(m),
        paddingRight: M(a.gutter) || M(m),
        flex: a.width ? `0 0 ${M(a.width)}` : "1",
        maxWidth: a.width && M(a.width)
      }
    ]);
    return (x, C) => (K(), en("div", {
      class: ue(vn(u)),
      style: ye(vn(S))
    }, [
      xn(x.$slots, "default")
    ], 6));
  }
});
const lu = {
  install(a) {
    a.component("i-grid", i_), a.component("i-grid-item", u_);
  }
}, l_ = /* @__PURE__ */ hn({
  __name: "layout",
  setup(a) {
    const y = cn([]), u = z(() => [
      "i-layout",
      y.value.length > 0 && "i-layout-has-aside"
    ]);
    return $t("layoutCtx", {
      onAsideMount: (m) => y.value.push(m),
      onAsideUnMount: (m) => {
        y.value = y.value.filter((S) => S !== m);
      }
    }), (m, S) => (K(), en("div", {
      class: ue(vn(u))
    }, [
      xn(m.$slots, "default")
    ], 2));
  }
});
const o_ = /* @__PURE__ */ hn({
  __name: "layout-aside",
  props: {
    width: { default: 240 }
  },
  setup(a) {
    const u = (() => {
      let C = 0;
      return (L = "") => (C += 1, `${L}${C}`);
    })()("i_layout_aside"), m = Nt("layoutCtx");
    Ot(() => {
      var C;
      (C = m == null ? void 0 : m.onAsideMount) == null || C.call(m, u);
    }), wu(() => {
      var C;
      (C = m == null ? void 0 : m.onAsideUnMount) == null || C.call(m, u);
    });
    const S = M(a.width), x = z(() => [
      {
        width: S,
        maxWidth: S,
        minWidth: S,
        flex: `0 0 ${S}`
      }
    ]);
    return (C, L) => (K(), en("aside", {
      class: "i-layout--aside",
      style: ye(vn(x))
    }, [
      xn(C.$slots, "default")
    ], 4));
  }
});
const Nr = (a, y) => {
  const u = a.__vccOpts || a;
  for (const [m, S] of y)
    u[m] = S;
  return u;
}, a_ = {}, f_ = { class: "i-layout--content" };
function s_(a, y) {
  return K(), en("main", f_, [
    xn(a.$slots, "default")
  ]);
}
const c_ = /* @__PURE__ */ Nr(a_, [["render", s_]]);
const h_ = {}, d_ = { class: "i-layout--footer" };
function g_(a, y) {
  return K(), en("footer", d_, [
    xn(a.$slots, "default")
  ]);
}
const v_ = /* @__PURE__ */ Nr(h_, [["render", g_]]);
const __ = {}, p_ = { class: "i-layout--header" };
function m_(a, y) {
  return K(), en("header", p_, [
    xn(a.$slots, "default")
  ]);
}
const w_ = /* @__PURE__ */ Nr(__, [["render", m_]]), ou = {
  install(a) {
    a.component("i-layout", l_), a.component("i-layout-aside", o_), a.component("i-layout-content", c_), a.component("i-layout-footer", v_), a.component("i-layout-header", w_);
  }
}, y_ = /* @__PURE__ */ hn({
  __name: "scrollbar",
  props: {
    height: null,
    width: null
  },
  emits: ["scrollX", "scrollY"],
  setup(a, { emit: y }) {
    const u = yu({
      hoverShowThumb: !1,
      downShowThumb: !1,
      viewCurrentWidth: 0,
      viewCurrentHeight: 0,
      viewWidth: 0,
      viewHeight: 0,
      thumbLeft: 0,
      thumbTop: 0,
      thumbWidth: 0,
      thumbHeight: 0,
      scaleX: 1,
      scaleY: 1,
      autoScroll: !0
    }), m = cn(null);
    Wr(() => {
      var Mn, Vn, We, Mt, Pt, lt;
      const $ = ((Mn = m.value) == null ? void 0 : Mn.clientWidth) || 0, q = ((Vn = m.value) == null ? void 0 : Vn.clientHeight) || 0;
      u.viewCurrentWidth = $, u.viewCurrentHeight = q;
      const b = (((We = m.value) == null ? void 0 : We.scrollWidth) || 0) - $, D = (((Mt = m.value) == null ? void 0 : Mt.scrollHeight) || 0) - q;
      u.viewWidth = b, u.viewHeight = D;
      const Q = ($ - 4) ** 2 / (((Pt = m.value) == null ? void 0 : Pt.scrollWidth) || 1);
      u.thumbWidth = Q, u.scaleX = ($ - Q - 4) / Q;
      const Tn = (q - 4) ** 2 / (((lt = m.value) == null ? void 0 : lt.scrollHeight) || 1);
      u.thumbHeight = Tn, u.scaleY = (q - Tn - 4) / Tn;
    });
    const S = cn(0), x = cn(0), C = ($) => {
      S.value !== Number($.toFixed(4)) && y("scrollX", Number($.toFixed(4)) || 0), S.value = Number($.toFixed(4));
    }, L = ($) => {
      x.value !== Number($.toFixed(4)) && y("scrollY", Number($.toFixed(4)) || 0), x.value = Number($.toFixed(4));
    }, tn = ($) => {
      if (u.autoScroll) {
        const q = $.target.scrollLeft / u.viewWidth || 0, b = $.target.scrollTop / u.viewHeight || 0;
        C(q), L(b), u.thumbLeft = q * u.scaleX * u.thumbWidth, u.thumbTop = b * u.scaleY * u.thumbHeight;
      }
    }, R = cn(0), w = cn(0), E = ($) => {
      var Tn, Mn, Vn;
      const q = u.viewCurrentWidth - u.thumbWidth - 4;
      R.value += $.movementX, R.value < 0 && (R.value = 0), R.value > q && (R.value = q), u.thumbLeft = R.value;
      const b = u.viewCurrentHeight - u.thumbHeight - 4;
      w.value += $.movementY, w.value < 0 && (w.value = 0), w.value > b && (w.value = b), u.thumbTop = w.value;
      const D = (((Tn = m.value) == null ? void 0 : Tn.scrollLeft) || 0) / u.viewWidth || 0, Q = (((Mn = m.value) == null ? void 0 : Mn.scrollTop) || 0) / u.viewHeight || 0;
      C(D), L(Q), (Vn = m.value) == null || Vn.scrollTo({
        left: (R.value + u.thumbWidth * D) * u.scaleX,
        top: (w.value + u.thumbHeight * Q) * u.scaleY
      });
    }, Z = () => {
      u.downShowThumb = !1, u.autoScroll = !0, window.removeEventListener("mouseup", Z), window.removeEventListener("mousemove", E);
    }, J = () => {
      u.downShowThumb = !0, u.autoScroll = !1, R.value = u.thumbLeft, w.value = u.thumbTop, window.addEventListener("mouseup", Z), window.addEventListener("mousemove", E);
    }, rn = ($) => {
      var b;
      const q = $.clientX - $.target.getBoundingClientRect().left;
      u.thumbLeft = q, S.value = 0, setTimeout(() => {
        var Q;
        const D = (((Q = m.value) == null ? void 0 : Q.scrollLeft) || 0) / u.viewWidth || 0;
        C(D);
      }), (b = m.value) == null || b.scrollTo({
        left: q * u.scaleX
      });
    }, dn = ($) => {
      var b;
      const q = $.clientY - $.target.getBoundingClientRect().top;
      u.thumbTop = q, x.value = 0, setTimeout(() => {
        var Q;
        const D = (((Q = m.value) == null ? void 0 : Q.scrollTop) || 0) / u.viewHeight || 0;
        L(D);
      }), (b = m.value) == null || b.scrollTo({
        top: q * u.scaleY
      });
    }, un = z(() => [
      {
        maxHeight: a.height ? M(a.height) : "auto",
        maxWidth: a.width ? M(a.width) : "auto",
        userSelect: u.autoScroll ? "unset" : "none"
      }
    ]), bn = z(() => [
      {
        height: M(u.thumbHeight),
        transform: `translateY(${u.thumbTop}px)`
      }
    ]), Gn = z(() => [
      {
        width: M(u.thumbWidth),
        transform: `translateX(${u.thumbLeft}px)`
      }
    ]);
    return ($, q) => (K(), en("div", {
      class: "i-scrollbar",
      onMouseenter: q[0] || (q[0] = (b) => u.hoverShowThumb = !0),
      onMouseleave: q[1] || (q[1] = (b) => u.hoverShowThumb = !1)
    }, [
      ut("div", {
        ref_key: "scrollWrap",
        ref: m,
        class: "i-scrollbar__wrap",
        style: ye(vn(un)),
        onScroll: tn
      }, [
        xn($.$slots, "default")
      ], 36),
      a.height ? (K(), en("div", {
        key: 0,
        class: "i-scrollbar__barY",
        onClick: dn
      }, [
        X(Bt, { name: "i-fade" }, {
          default: ze(() => [
            u.hoverShowThumb || u.downShowThumb ? (K(), en("div", {
              key: 0,
              class: "i-scrollbar__thumbY",
              style: ye(vn(bn)),
              onMousedown: J
            }, null, 36)) : Sn("", !0)
          ]),
          _: 1
        })
      ])) : Sn("", !0),
      a.width ? (K(), en("div", {
        key: 1,
        class: "i-scrollbar__barX",
        onClick: rn
      }, [
        X(Bt, { name: "i-fade" }, {
          default: ze(() => [
            u.hoverShowThumb || u.downShowThumb ? (K(), en("div", {
              key: 0,
              class: "i-scrollbar__thumbX",
              style: ye(vn(Gn)),
              onMousedown: J
            }, null, 36)) : Sn("", !0)
          ]),
          _: 1
        })
      ])) : Sn("", !0)
    ], 32));
  }
});
const au = {
  install(a) {
    a.component("i-scrollbar", y_);
  }
}, x_ = hn({
  name: "Dropdown",
  props: {
    active: {
      type: Boolean,
      default: !1
    },
    shape: {
      type: String,
      default: "round"
    }
  },
  emits: {
    click: (a) => !0
  },
  setup(a, { emit: y }) {
    return {
      cls: z(() => ["i-dropdown"])
    };
  }
});
function b_(a, y, u, m, S, x) {
  return K(), en("div", {
    class: ue(a.cls)
  }, [
    xn(a.$slots, "default")
  ], 2);
}
const C_ = /* @__PURE__ */ Nr(x_, [["render", b_]]), fu = {
  install(a) {
    a.component("i-dropdown", C_);
  }
};
const A_ = hn({
  name: "Breadcrumb",
  props: {
    maxItemWidth: [String, Number],
    separator: [String, HTMLElement]
  },
  setup(a, {
    slots: y
  }) {
    return $t("breadcrumbCtx", {
      maxItemWidth: a.maxItemWidth,
      slots: y
    }), () => {
      var u;
      return X("div", {
        class: "i-breadcrumb"
      }, [(u = y.default) == null ? void 0 : u.call(y)]);
    };
  }
}), S_ = hn({
  name: "BreadcrumbItem",
  props: {
    disabled: Boolean,
    maxItemWidth: [String, Number],
    maxWidth: [String, Number]
  },
  setup(a, {
    slots: y
  }) {
    const u = Nt("breadcrumbCtx", void 0), m = z(() => {
      let x;
      a.maxWidth && (x = M(a.maxWidth));
      let C;
      return u != null && u.maxItemWidth ? C = M(u == null ? void 0 : u.maxItemWidth) : a.maxItemWidth && (C = M(a.maxItemWidth)), {
        maxWidth: x || C || "200px"
      };
    }), S = z(() => {
      var x, C, L;
      return (L = (C = u == null ? void 0 : (x = u.slots).separator) == null ? void 0 : C.call(x)) != null ? L : X(Br, {
        name: "ArrowRight",
        size: 16
      }, null);
    });
    return () => {
      var C;
      const x = (C = y.default) == null ? void 0 : C.call(y);
      return X("div", {
        class: ["i-breadcrumb__item", a.disabled && "i-breadcrumb-is-disabled"]
      }, [X("span", {
        class: "i-breadcrumb__inner",
        style: m.value
      }, [x]), X("span", {
        class: "i-breadcrumb__separator"
      }, [S.value])]);
    };
  }
}), su = {
  install(a) {
    a.component("i-breadcrumb", A_), a.component("i-breadcrumb-item", S_);
  }
}, T_ = /* @__PURE__ */ hn({
  __name: "back-top",
  props: {
    target: null,
    visibleHeight: { default: 0 },
    smooth: { type: Boolean, default: !0 }
  },
  emits: ["click", "scroll"],
  setup(a, { emit: y }) {
    const u = !a.target, m = cn(!(a.visibleHeight > 0)), S = (L) => Or.isString(L) ? document.querySelector(L) : u ? document == null ? void 0 : document.documentElement : L, x = Or.throttle((L) => {
      L.target.scrollTop >= a.visibleHeight ? m.value = !0 : m.value = !1, y("scroll");
    }, 16);
    Ot(() => {
      const L = S(a.target);
      L == null || L.addEventListener("scroll", x);
    });
    const C = () => {
      const L = S(a.target);
      L == null || L.scrollTo({
        top: 0,
        behavior: a.smooth ? "smooth" : "auto"
      }), y("click");
    };
    return (L, tn) => {
      const R = Wt("i-icon"), w = Wt("i-button");
      return K(), en("div", {
        class: "'i-back-top'",
        onClick: C
      }, [
        X(Bt, { name: "i-fade" }, {
          default: ze(() => [
            m.value && L.$slots.default ? xn(L.$slots, "default", { key: 0 }) : Sn("", !0)
          ]),
          _: 3
        }),
        X(Bt, { name: "i-fade" }, {
          default: ze(() => [
            m.value && !L.$slots.default ? (K(), $r(w, {
              key: 0,
              shape: "circle",
              class: "i-back-top--button"
            }, {
              default: ze(() => [
                X(R, { name: "ArrowUpBold" })
              ]),
              _: 1
            })) : Sn("", !0)
          ]),
          _: 1
        })
      ]);
    };
  }
});
const cu = {
  install(a) {
    a.component("i-back-top", T_);
  }
};
const ia = hn({
  name: "Checkbox",
  props: {
    size: {
      type: String
    },
    value: [String, Number],
    checked: {
      type: Boolean,
      default: void 0
    },
    defaultChecked: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean
    }
  },
  emits: {
    change: (a, y) => !0
  },
  setup(a, {
    slots: y,
    emit: u
  }) {
    const m = cn(a.defaultChecked), S = z(() => {
      var R;
      return (R = a.checked) != null ? R : m.value;
    }), x = Nt("checkboxGroupCtx", void 0), C = z(() => a.size || (x == null ? void 0 : x.size) || "medium"), L = z(() => a.disabled || (x == null ? void 0 : x.disabled) || !1), tn = (R) => {
      if (L.value)
        return;
      const w = R.target.checked;
      m.value = w, u("change", w, R);
    };
    return () => {
      var w;
      const R = (w = y.default) == null ? void 0 : w.call(y);
      return X("label", {
        class: ["i-checkbox", S.value && "i-checkbox-is-checked", L.value && "i-checkbox-is-disabled", C.value && `i-checkbox--size-${C.value}`]
      }, [X("input", {
        readonly: !0,
        type: "checkbox",
        class: "i-checkbox__former",
        checked: S.value,
        disabled: L.value,
        value: a.value,
        onClick: (E) => E.stopPropagation(),
        onChange: tn
      }, null), X("span", {
        class: "i-checkbox__input"
      }, null), X("span", {
        class: "i-checkbox__label"
      }, [R])]);
    };
  }
});
function L_(a) {
  return typeof a == "function" || Object.prototype.toString.call(a) === "[object Object]" && !ea(a);
}
const I_ = hn({
  name: "CheckboxGroup",
  props: {
    value: Array,
    defaultValue: {
      type: Array,
      default: []
    },
    size: String,
    disabled: Boolean
  },
  emits: {
    change: (a, y) => !0
  },
  setup(a, {
    slots: y,
    emit: u
  }) {
    const m = cn(a.defaultValue), S = z(() => {
      var R;
      return (R = a.value) != null ? R : m.value;
    });
    let x = new Set([].concat(S.value));
    const L = ra()("Checkbox"), tn = () => L.map((R, w) => {
      let E;
      const Z = R.props.value;
      return X(ia, jv({
        checked: S.value.includes(Z),
        onChange: (J, rn) => {
          J ? x.add(Z) : x.delete(Z), m.value = Array.from(x), u("change", Array.from(x), rn);
        }
      }, R.props), L_(E = R.children.default()) ? E : {
        default: () => [E]
      });
    });
    return $t("checkboxGroupCtx", {
      size: a.size,
      disabled: a.disabled
    }), () => X("div", {
      class: "i-checkbox-group"
    }, [tn()]);
  }
}), hu = {
  install(a) {
    a.component("i-checkbox", ia), a.component("i-checkbox-group", I_);
  }
}, R_ = ["src"], E_ = /* @__PURE__ */ hn({
  __name: "avatar",
  props: {
    image: null,
    size: null,
    shape: null,
    color: null
  },
  setup(a) {
    const y = Nt("avatarGroupCtx", void 0), u = z(() => (a.size ? a.size : y == null ? void 0 : y.size) || 32), m = z(() => (a.shape ? a.shape : y == null ? void 0 : y.shape) || "circle"), S = z(() => a.color ? a.color : y == null ? void 0 : y.color), x = cn(!0), C = () => {
      x.value = !1;
    }, L = z(() => [
      "i-avatar",
      m.value === "round" && `i-avatar__shape-${m.value}`
    ]), tn = z(() => [
      {
        width: M(u.value),
        height: M(u.value),
        background: M(S.value)
      }
    ]);
    return (R, w) => {
      const E = Wt("i-icon");
      return K(), en("div", {
        class: ue(vn(L)),
        style: ye(vn(tn))
      }, [
        a.image && x.value ? (K(), en("img", {
          key: 0,
          class: "i-avatar__image",
          src: a.image,
          onError: C,
          referrerPolicy: "no-referrer"
        }, null, 40, R_)) : Sn("", !0),
        (!a.image || !x.value) && R.$slots.default ? xn(R.$slots, "default", { key: 1 }) : Sn("", !0),
        (!a.image || !x.value) && !R.$slots.default ? (K(), $r(E, {
          key: 2,
          name: "User",
          color: "#fff"
        })) : Sn("", !0)
      ], 6);
    };
  }
});
const W_ = /* @__PURE__ */ hn({
  __name: "avatar-group",
  props: {
    size: null,
    shape: null,
    color: null,
    cascading: { default: "right" }
  },
  setup(a) {
    $t("avatarGroupCtx", {
      size: a.size,
      shape: a.shape,
      color: a.color
    });
    const y = z(() => ["i-avatar-group", `i-avatar__offset-${a.cascading}`]);
    return (u, m) => (K(), en("div", {
      class: ue(vn(y))
    }, [
      xn(u.$slots, "default")
    ], 2));
  }
});
const du = {
  install(a) {
    a.component("i-avatar", E_), a.component("i-avatar-group", W_);
  }
}, O_ = { class: "i-badge" }, B_ = /* @__PURE__ */ hn({
  __name: "badge",
  props: {
    count: { default: 0 },
    maxCount: { default: 99 },
    color: null,
    dot: { type: Boolean, default: !1 },
    size: { default: "medium" },
    shape: { default: "circle" },
    showZero: { type: Boolean, default: !0 },
    offset: null
  },
  setup(a) {
    const y = () => typeof a.count == "number" && a.count > a.maxCount ? `${a.maxCount}+` : a.count;
    let u = !a.count;
    typeof a.count == "number" && (u = a.count < 1 && !a.showZero);
    const m = () => {
      const C = {};
      return a.offset && (a.offset[0] && (C.right = +a.offset[0]), a.offset[1] && (C.marginTop = +a.offset[1])), C;
    }, S = z(() => [
      "i-badge__content",
      a.dot ? "i-badge--dot" : a.shape && `i-badge--${a.shape}`,
      a.size === "small" && `i-badge__size-${a.size}`
    ]), x = z(() => [
      {
        background: a.color,
        ...m()
      }
    ]);
    return (C, L) => (K(), en("div", O_, [
      xn(C.$slots, "default"),
      vn(u) ? Sn("", !0) : (K(), en("sup", {
        key: 0,
        class: ue(vn(S)),
        style: ye(vn(x))
      }, [
        a.dot ? Sn("", !0) : (K(), en(n_, { key: 0 }, [
          ta(xu(y()), 1)
        ], 64))
      ], 6))
    ]));
  }
});
const gu = {
  install(a) {
    a.component("i-badge", B_);
  }
};
const $_ = {
  index: {
    type: Number,
    default: 0
  },
  innerCurrent: {
    type: Number,
    default: 0
  },
  type: {
    type: String,
    default: "default"
  },
  ifAnimation: {
    type: Boolean,
    default: !1
  },
  childrenLength: {
    type: Number,
    default: 1
  },
  duration: {
    type: Number,
    default: 300
  },
  wrapWidth: {
    type: Number,
    default: 0
  }
}, ua = hn({
  name: "CarouselItem",
  props: {
    ...$_
  },
  emits: {
    clickItem: (a) => !0
  },
  setup(a, {
    slots: y,
    emit: u
  }) {
    const m = z(() => a.type !== "card" ? 0 : a.innerCurrent === 0 && a.index === a.childrenLength - 1 ? -1 : a.innerCurrent === a.childrenLength - 1 && a.index === 0 ? a.childrenLength : a.index < a.innerCurrent - 1 && a.innerCurrent - a.index >= a.childrenLength / 2 ? a.childrenLength + 1 : a.index > a.innerCurrent + 1 && a.index - a.innerCurrent >= a.childrenLength / 2 ? -2 : a.index), S = 210 / 332, x = 0.415, C = z(() => {
      if (a.type !== "card")
        return 0;
      const w = a.wrapWidth, E = !L.value && a.childrenLength > 2 ? m.value : a.index;
      return Math.abs(E - a.innerCurrent) <= 1 ? w * ((E - a.innerCurrent) * (1 - x * S) - x + 1) / 2 : E < a.innerCurrent ? -x * (1 + S) * w / 2 : (2 + x * (S - 1)) * w / 2;
    }), L = z(() => a.index === a.innerCurrent), tn = z(() => {
      if (a.type !== "card")
        return 0;
      const w = !L.value && a.childrenLength > 2 ? m.value : a.index, E = w === a.innerCurrent, Z = Math.round(Math.abs(w - a.innerCurrent)) <= 1;
      return E ? 2 : Z ? 1 : 0;
    }), R = z(() => {
      if (a.type === "card") {
        const E = (!L.value && a.childrenLength > 2 ? m.value : a.index) === a.innerCurrent;
        return {
          transform: `translateX(${C.value}px) scale(${E ? 1 : S})`,
          transition: `transform ${a.duration / 1e3}s ease`,
          zIndex: tn.value
        };
      }
      return {};
    });
    return () => {
      var E;
      const w = (E = y.default) == null ? void 0 : E.call(y);
      return X("li", {
        class: "i-carousel-item",
        style: R.value,
        onClick: () => {
          u("clickItem", a.index);
        }
      }, [w]);
    };
  }
}), N_ = hn({
  name: "CarouselNavigation",
  props: {
    itemNum: {
      type: Number,
      default: 0
    },
    current: {
      type: Number,
      default: 0
    }
  },
  emits: {
    enter: (a) => !0
  },
  setup(a, {
    slots: y,
    emit: u
  }) {
    const m = z(() => Or.range(0, a.itemNum)), S = (x) => {
      u("enter", x);
    };
    return () => X("ul", {
      class: "i-carousel__navigation"
    }, [m.value.map((x) => X("li", {
      class: ["i-carousel__navigation-item", a.current - 1 === x && "i-carousel__navigation-item__active"],
      onMouseenter: () => S(x),
      key: x
    }, null))]);
  }
});
function M_(a) {
  return typeof a == "function" || Object.prototype.toString.call(a) === "[object Object]" && !ea(a);
}
const P_ = hn({
  name: "Carousel",
  props: {
    defaultCurrent: {
      type: Number,
      default: 0
    },
    width: {
      type: [String, Number],
      default: "100%"
    },
    height: {
      type: [String, Number],
      default: 300
    },
    autoPlay: {
      type: [Boolean],
      default: !1
    },
    interval: {
      type: Number,
      default: 3e3
    },
    stopOnHover: {
      type: Boolean,
      default: !0
    },
    type: {
      type: String,
      default: "default"
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    duration: {
      type: Number,
      default: 300
    }
  },
  emits: {
    change: (a) => !0
  },
  setup(a, {
    emit: y
  }) {
    const u = cn(0), m = cn(0), S = cn(!1), x = cn(null), C = cn(0), L = cn(!1), tn = () => {
      const D = ra()("CarouselItem");
      m.value = D.length;
      const Q = D.map((Tn, Mn) => {
        let Vn;
        return X(ua, {
          index: Mn,
          innerCurrent: u.value,
          ifAnimation: S.value,
          childrenLength: m.value,
          wrapWidth: C.value,
          type: a.type,
          duration: a.duration,
          onClickItem: (We) => {
            a.type === "card" && (u.value = We, y("change", We));
          }
        }, M_(Vn = Tn.children.default()) ? Vn : {
          default: () => [Vn]
        });
      });
      if (m.value > 0 && a.type === "default") {
        const Tn = na(Q[0], {
          key: -1
        }), Mn = na(Q[Q.length - 1], {
          key: m.value
        });
        Q.unshift(Mn), Q.push(Tn);
      }
      return Q;
    }, R = tn().length, w = (b) => a.type === "default" ? b >= m.value ? 0 : b <= -1 ? m.value - 1 : b + 1 : b;
    Ot(() => {
      u.value = w(a.defaultCurrent), C.value = x.value.getBoundingClientRect().width;
    });
    const E = (b, D) => {
      S.value = !0, u.value = b, D === "last" ? b > 0 ? y("change", b - 1) : y("change", m.value - 1) : b <= m.value ? y("change", b - 1) : y("change", 0);
    }, Z = () => {
      a.stopOnHover && (L.value = !0);
    }, J = () => {
      a.stopOnHover && (L.value = !1);
    };
    let rn = 0;
    Et(() => S.value, () => {
      S.value && (rn && clearTimeout(rn), rn = setTimeout(() => {
        S.value = !1, rn = 0, a.type !== "card" && (u.value + 1 >= R && (u.value = 1), u.value <= 0 && (u.value = R - 2));
      }, a.duration + 50));
    });
    let dn = 0;
    const un = () => {
      dn && (clearTimeout(dn), dn = 0);
    }, bn = () => {
      !L.value && a.autoPlay && a.interval > 0 && (un(), dn = setTimeout(() => {
        E(u.value + 1);
      }, u.value === 0 ? a.interval * 1e3 - (a.duration + 50) : a.interval * 1e3));
    }, Gn = z(() => [a.autoPlay, u.value, a.duration, a.interval]);
    Et(() => Gn.value, () => {
      bn();
    }), wu(() => {
      un();
    });
    const $ = (b) => {
      if (S.value)
        return !1;
      if (b === "last")
        return u.value - 1 < 0 ? E(m.value - 1, "last") : E(u.value - 1, "last");
      if (b === "next")
        return a.type === "card" ? E(u.value + 1 >= R ? 0 : u.value + 1, "next") : E(u.value + 1, "next");
    }, q = () => {
      if (a.type !== "card")
        return a.direction === "vertical" ? {
          transform: `translate3d(0, -${u.value * 100}%, 0px)`,
          transition: S.value ? `transform ${a.duration / 1e3}s ease` : ""
        } : {
          transform: `translate3d(-${u.value * 100}%, 0px, 0px)`,
          transition: S.value ? `transform ${a.duration / 1e3}s ease` : ""
        };
    };
    return () => X("div", {
      class: ["i-carousel", a.direction === "vertical" && "i-carousel__vertical", a.type === "card" && "i-carousel__card"],
      style: {
        width: M(a.width),
        height: M(a.height)
      },
      ref: x
    }, [X("div", {
      class: "i-carousel__content",
      onMouseenter: Z,
      onMouseleave: J
    }, [X("ul", {
      class: "i-carousel__wrapper",
      style: q()
    }, [tn()])]), X(N_, {
      itemNum: m.value,
      current: a.type === "default" ? u.value : u.value + 1,
      onEnter: (b) => E(a.type === "default" ? b + 1 : b)
    }, null), X("div", {
      class: "i-carousel__arrow-last",
      onClick: () => $("last")
    }, [X(Br, {
      color: "#fff",
      name: "ArrowLeft"
    }, null)]), X("div", {
      class: "i-carousel__arrow-next",
      onClick: () => $("next")
    }, [X(Br, {
      color: "#fff",
      name: "ArrowRight"
    }, null)])]);
  }
}), vu = {
  install(a) {
    a.component("i-carousel", P_), a.component("i-carousel-item", ua);
  }
}, F_ = { class: "i-alert--content" }, D_ = {
  key: 0,
  class: "i-alert--title"
}, U_ = { class: "i-alert--description" }, H_ = {
  key: 0,
  class: "i-alert--operation"
}, z_ = /* @__PURE__ */ hn({
  __name: "alert",
  props: {
    closable: { type: Boolean, default: !1 },
    title: null,
    type: { default: "info" }
  },
  setup(a) {
    const y = cn(!1), u = () => {
      y.value = !0;
    }, m = z(() => ["i-alert", `i-alert--type-${a.type}`]), S = z(() => ({
      info: "TipInfo",
      success: "TipCheckFill",
      warning: "TipWarningFill",
      error: "TipCloseFill"
    })[a.type]);
    return (x, C) => {
      const L = Wt("i-icon");
      return y.value ? Sn("", !0) : (K(), en("div", {
        key: 0,
        class: ue(vn(m))
      }, [
        X(L, {
          name: vn(S),
          size: 16
        }, null, 8, ["name"]),
        ut("div", F_, [
          a.title ? (K(), en("div", D_, xu(a.title), 1)) : Sn("", !0),
          ut("div", U_, [
            xn(x.$slots, "default"),
            x.$slots.operation ? (K(), en("div", H_, [
              xn(x.$slots, "operation")
            ])) : Sn("", !0)
          ])
        ]),
        a.closable ? (K(), en("div", {
          key: 0,
          class: "i-alert--close-btn",
          onClick: u
        }, [
          X(L, {
            name: "Close",
            size: 16
          })
        ])) : Sn("", !0)
      ], 2));
    };
  }
});
const _u = {
  install(a) {
    a.component("i-alert", z_);
  }
}, G_ = ["data-popper-placement"], k_ = ["data-popper-placement"], Y_ = { class: "i-popup__text" }, X_ = /* @__PURE__ */ hn({
  __name: "portal",
  props: {
    contentClass: null,
    contentStyle: null,
    visible: { type: Boolean, default: !1 },
    placement: { default: "top" },
    top: null,
    left: null,
    width: null,
    height: null
  },
  emits: ["getRef"],
  setup(a, { emit: y }) {
    let u = document.querySelector("#i-popup-wrapper");
    u || (u = document.createElement("div"), u.className = "i-popup-wrapper", u.id = "i-popup-wrapper", document.body.append(u));
    const m = (R, w, E) => {
      let Z = (E == null ? void 0 : E.width) || 0, J = (E == null ? void 0 : E.height) || 0;
      const rn = {
        top: M(w.left + (w.width - Z) / 2),
        "top-left": M(w.left),
        "top-right": M(w.left + (w.width - Z)),
        bottom: M(w.left + (w.width - Z) / 2),
        "bottom-left": M(w.left),
        "bottom-right": M(w.left + (w.width - Z)),
        left: M(w.left - Z - 16),
        "left-top": M(w.left - Z - 16),
        "left-bottom": M(w.left - Z - 16),
        right: M(w.left + w.width + 16),
        "right-top": M(w.left + w.width + 16),
        "right-bottom": M(w.left + w.width + 16)
      }, dn = {
        top: M(w.top - J - 16),
        "top-left": M(w.top - J - 16),
        "top-right": M(w.top - J - 16),
        bottom: M(w.top + w.height + 16),
        "bottom-left": M(w.top + w.height + 16),
        "bottom-right": M(w.top + w.height + 16),
        left: M(w.top + (w.height - J) / 2),
        "left-top": M(w.top),
        "left-bottom": M(w.top + (w.height - J)),
        right: M(w.top + (w.height - J) / 2),
        "right-top": M(w.top),
        "right-bottom": M(w.top + (w.height - J))
      };
      return {
        left: rn[R],
        top: dn[R]
      };
    }, S = cn(null);
    Wr(() => {
      y("getRef", S);
    });
    const x = yu({
      rePlaceNum: 0,
      styles: {},
      currentPlacement: a.placement
    }), C = (R) => {
      if (S.value) {
        const w = R.split("-")[0], E = R.split("-")[1] ? "-" + R.split("-")[1] : "", Z = window.innerWidth, J = window.innerHeight, rn = S.value.getBoundingClientRect(), dn = rn.width, un = rn.height, bn = rn.top, Gn = rn.left;
        let $ = R;
        bn < J && Gn < Z && x.rePlaceNum < 3 && (w === "top" && bn < 0 && ($ = "bottom" + E), w === "bottom" && J - un - bn < 0 && ($ = "top" + E), w === "left" && Gn < 0 && ($ = "right" + E), w === "right" && Z - dn - Gn < 0 && ($ = "left" + E), x.rePlaceNum += 1), x.currentPlacement = $;
      }
    };
    Wr(() => {
      C(x.currentPlacement);
    }), Wr(() => {
      var w;
      const R = (w = S.value) == null ? void 0 : w.getBoundingClientRect();
      x.styles = m(x.currentPlacement, {
        left: a.left,
        top: a.top,
        width: a.width,
        height: a.height
      }, R);
    });
    const L = z(() => ["i-popup", a.contentClass]), tn = z(() => [{ ...a.contentStyle }, { ...x.styles }]);
    return (R, w) => (K(), en("div", null, [
      (K(), $r(e_, { to: "#i-popup-wrapper" }, [
        X(Bt, { name: "i-fade" }, {
          default: ze(() => [
            a.visible ? (K(), en("div", {
              key: 0,
              ref_key: "popupRef",
              ref: S,
              class: ue(vn(L)),
              style: ye(vn(tn)),
              "data-popper-placement": x.currentPlacement
            }, [
              ut("div", {
                class: "i-popup__arrow",
                "data-popper-placement": x.currentPlacement
              }, null, 8, k_),
              ut("div", Y_, [
                xn(R.$slots, "default")
              ])
            ], 14, G_)) : Sn("", !0)
          ]),
          _: 3
        })
      ]))
    ]));
  }
});
const q_ = { class: "i-popup__reference" }, K_ = /* @__PURE__ */ hn({
  __name: "popup",
  props: {
    portalClassName: null,
    portalStyle: null,
    content: null,
    placement: { default: "top" },
    trigger: { default: "hover" },
    visible: { type: Boolean, default: () => {
    } },
    defaultVisible: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    updateLocation: { type: [String, Number, Boolean] }
  },
  emits: ["trigger"],
  setup(a, { emit: y }) {
    const u = yu({
      top: 0,
      left: 0,
      width: 0,
      height: 0
    }), m = (b) => {
      const D = b.getBoundingClientRect();
      u.top = ((D == null ? void 0 : D.top) || 0) + window.scrollY, u.left = ((D == null ? void 0 : D.left) || 0) + window.scrollX, u.width = (D == null ? void 0 : D.width) || 0, u.height = (D == null ? void 0 : D.height) || 0;
    }, S = cn(a.defaultVisible), x = z(() => {
      var b;
      return (b = a.visible) != null ? b : S.value;
    }), C = (b, D) => {
      for (; b; ) {
        if (b === D)
          return !0;
        b = b.parentNode;
      }
      return !1;
    };
    Ot(() => {
      const b = L.value.children[0];
      m(b);
    });
    const L = cn(null);
    Et(() => a.updateLocation, () => {
      const b = L.value.children[0];
      m(b);
    });
    const tn = (b, D) => {
      const Q = L.value.children[0];
      D && m(Q), S.value = D, y("trigger", D);
    }, R = () => {
      S.value = !1, y("trigger", !1);
    }, w = cn(null), E = (b) => {
      w.value = b.value;
    }, Z = cn(!1), J = (b) => {
      C(b.target, w.value) || (C(b.target, L.value) || R(), Z.value = !1, window.removeEventListener("click", J));
    };
    Et(Z, (b) => {
      if (b)
        return window.addEventListener("click", J), () => window.removeEventListener("click", J);
    });
    const rn = (b) => {
      a.trigger === "click" && (tn(b, !x.value), x.value && setTimeout(() => Z.value = !0));
    }, dn = cn(!1), un = (b) => {
      b.preventDefault(), C(b.target, w.value) || (R(), dn.value = !1, window.removeEventListener("click", un), window.removeEventListener("contextmenu", un));
    };
    Et(dn, (b) => {
      if (b)
        return window.addEventListener("click", un), window.addEventListener("contextmenu", un), () => {
          window.removeEventListener("click", un), window.removeEventListener("contextmenu", un);
        };
    });
    const bn = (b) => {
      a.trigger === "context-menu" && (b.preventDefault(), tn(b, !x.value), x.value && setTimeout(() => dn.value = !0));
    }, Gn = (b) => {
      b.preventDefault(), C(b.target, w.value) || (C(b.target, L.value) || R(), window.removeEventListener("click", J));
    }, $ = (b) => {
      a.trigger === "hover" && (tn(b, !x.value), setTimeout(() => {
        window.addEventListener("mouseover", Gn);
      }));
    }, q = new ResizeObserver((b) => {
      u.width = b[0].contentRect.width || 0, u.height = b[0].contentRect.height || 0;
    });
    return Ot(() => {
      q.observe(L.value);
    }), wu(() => {
      q.disconnect();
    }), (b, D) => (K(), en("div", q_, [
      ut("section", {
        onClick: rn,
        onMouseenter: $,
        onContextmenu: bn,
        ref_key: "triggerNode",
        ref: L
      }, [
        xn(b.$slots, "default")
      ], 544),
      X(X_, {
        contentStyle: a.portalStyle,
        contentClass: a.portalClassName,
        visible: vn(x) && !a.disabled,
        placement: a.placement,
        top: u.top,
        left: u.left,
        width: u.width,
        height: u.height,
        onGetRef: E
      }, {
        default: ze(() => [
          ta(xu(a.content), 1)
        ]),
        _: 1
      }, 8, ["contentStyle", "contentClass", "visible", "placement", "top", "left", "width", "height"])
    ]));
  }
});
const pu = {
  install(a) {
    a.component("i-popup", K_);
  }
}, J_ = {
  install(a) {
    var y, u, m, S, x, C, L, tn, R, w, E, Z, J, rn, dn;
    (y = ru.install) == null || y.call(ru, a), (u = iu.install) == null || u.call(iu, a), (m = uu.install) == null || m.call(uu, a), (S = lu.install) == null || S.call(lu, a), (x = ou.install) == null || x.call(ou, a), (C = au.install) == null || C.call(au, a), (L = fu.install) == null || L.call(fu, a), (tn = su.install) == null || tn.call(su, a), (R = cu.install) == null || R.call(cu, a), (w = hu.install) == null || w.call(hu, a), (E = du.install) == null || E.call(du, a), (Z = gu.install) == null || Z.call(gu, a), (J = vu.install) == null || J.call(vu, a), (rn = _u.install) == null || rn.call(_u, a), (dn = pu.install) == null || dn.call(pu, a);
  }
};
export {
  z_ as Alert,
  _u as AlertPlugin,
  E_ as Avatar,
  W_ as AvatarGroup,
  du as AvatarPlugin,
  T_ as BackTop,
  cu as BackTopPlugin,
  B_ as Badge,
  gu as BadgePlugin,
  A_ as Breadcrumb,
  S_ as BreadcrumbItem,
  su as BreadcrumbPlugin,
  t_ as Button,
  ru as ButtonPlugin,
  P_ as Carousel,
  ua as CarouselItem,
  vu as CarouselPlugin,
  ia as Checkbox,
  I_ as CheckboxGroup,
  hu as CheckboxPlugin,
  r_ as Divider,
  uu as DividerPlugin,
  C_ as Dropdown,
  fu as DropdownPlugin,
  i_ as Grid,
  u_ as GridItem,
  lu as GridPlugin,
  Br as Icon,
  iu as IconPlugin,
  l_ as Layout,
  ou as LayoutPlugin,
  K_ as Popup,
  pu as PopupPlugin,
  y_ as Scrollbar,
  au as ScrollbarPlugin,
  J_ as default
};
